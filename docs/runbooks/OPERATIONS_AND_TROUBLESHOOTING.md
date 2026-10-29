
# Sandtongrid Technologies — Operations & Troubleshooting Guide

This guide is written for any engineer stepping in to operate, debug, or recover the Sandtongrid Technologies production infrastructure and web applications.

---

## 1. System Inventory & Architecture Summary

| **Component**       | **AWS Resource / Technology** | **Configuration / Identifier**                                    | **Notes**                                                       |
| ------------------- | ----------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------- |
| **AWS Account ID**  | AWS Account                   | `<AWS_ACCOUNT_ID>`                                                | Production AWS Account                                         |
| **Primary Region**  | af-south-1 (Cape Town)        | S3, DynamoDB, Route 53                                            | Core resources live here                                        |
| **Edge Region**     | us-east-1 (N. Virginia)       | ACM Certificate (acm module)                                      | **Mandatory** for CloudFront TLS certificates                   |
| **Domain**          | sandtongridtech.com / www     | Route 53 Hosted Zone                                              | A record Alias to CloudFront                                    |
| **CDN**             | CloudFront Distribution       | `<CLOUDFRONT_DISTRIBUTION_ID>`                                   | Public entry point; HTTPS only; TLS 1.2+                        |
| **Origin Access**   | CloudFront OAC                | `<CLOUDFRONT_OAC_ID>`                                             | Origin Access Control with SigV4 signing                        |
| **Website Storage** | Private S3 Bucket             | sandtongrid-website-prod                                          | **Public access completely blocked**                            |
| **Access Logs**     | Logging S3 Bucket              | sandtongrid-logs-prod                                             | Server-side encrypted; receives CF access logs                  |
| **Terraform State** | S3 Bucket                     | sandtongrid-terraform-state-prod                                  | Versioned + encrypted; key: environments/prod/terraform.tfstate |
| **State Lock**      | DynamoDB Table                | sandtongrid-terraform-locks-prod                                  | Partition key: LockID (String)                                  |
| **CI/CD IAM Role**  | AWS IAM Role                  | `<GITHUB_ACTIONS_IAM_ROLE_ARN>`                                  | Assumed via GitHub OIDC (sts:AssumeRoleWithWebIdentity)        |

---

## 2. Emergency Incident Triage (When the Site Is Down)

Follow this decision tree when responding to an outage:

```text
[Incident Alert]
                                       |
                   Can you reach https://www.sandtongridtech.com?
                                  /         \
                              [YES]         [NO]
                               /              \
                   Check content fresh      Inspect HTTP Status Code:
                                            - 403 Forbidden  -> See Section 3.1 (OAC / S3 Policy)
                                            - 502 / 504 Bad Gateway -> See Section 3.2 (S3 Endpoint / Origin)
                                            - SSL / TLS Error -> See Section 3.3 (ACM Certificate / us-east-1)
                                            - DNS Resolution Failure -> See Section 3.4 (Route 53 Alias)
````

---

## 3. Specific Breakdown Scenarios & Troubleshooting Steps

### 3.1. HTTP 403 Forbidden on the Website

* **Symptom:** Visiting [https://www.sandtongridtech.com](https://www.sandtongridtech.com) returns 403 Forbidden from CloudFront.
* **Likely Causes:**

  1. The S3 Bucket Policy was altered or removed, blocking CloudFront OAC.
  2. The default root object (index.html) is missing from the website S3 bucket.
  3. Client-side routing request: CloudFront received a path like /services directly and could not find an S3 object key /services (custom 404/403 redirect issue).
* **Remediation Steps:**

  1. Check if files exist in the S3 bucket:

     ```bash
     aws s3 ls s3://sandtongrid-website-prod/
     ```

     Ensure index.html and the assets/ directory are present.

  2. If the bucket is empty, trigger a manual sync:

     ```bash
     npm run build --workspace=apps/website
     aws s3 sync apps/website/dist s3://sandtongrid-website-prod --delete
     aws cloudfront create-invalidation --distribution-id <CLOUDFRONT_DISTRIBUTION_ID> --paths "/*"
     ```

  3. Verify the S3 bucket policy allows CloudFront service principal with the matching distribution ARN:

     ```bash
     aws s3api get-bucket-policy --bucket sandtongrid-website-prod
     ```

     The policy must contain:

     ```json
     {
       "Effect": "Allow",
       "Principal": { "Service": "cloudfront.amazonaws.com" },
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::sandtongrid-website-prod/*",
       "Condition": {
         "StringEquals": {
           "AWS:SourceArn": "arn:aws:cloudfront::<AWS_ACCOUNT_ID>:distribution/<CLOUDFRONT_DISTRIBUTION_ID>"
         }
       }
     }
     ```

---

### 3.2. GitHub Actions Deployment Fails (OIDC Authentication Error)

* **Symptom:** GitHub Actions pipeline errors with:

  Could not assume role with OIDC: Not authorized to perform sts:AssumeRoleWithWebIdentity

* **Root Cause:**

  GitHub Actions sends an OIDC token whose sub claim must strictly match the AWS IAM Role Trust Policy. If the repository name changed, or if a job runs with an environment parameter (e.g., environment: production), the sub claim changes format.

* **Remediation Steps:**

  1. Inspect the AWS IAM Trust Policy for the GitHub Actions production role:

     ```bash
     aws iam get-role \
       --role-name <GITHUB_ACTIONS_IAM_ROLE_NAME> \
       --query "Role.AssumeRolePolicyDocument"
     ```

  2. Ensure the policy has both the branch reference and the environment reference in the condition block:

     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Effect": "Allow",
           "Principal": {
             "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com"
           },
           "Action": "sts:AssumeRoleWithWebIdentity",
           "Condition": {
             "StringEquals": {
               "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
               "token.actions.githubusercontent.com:sub": [
                 "<GITHUB_BRANCH_SUBJECT>",
                 "<GITHUB_PRODUCTION_ENVIRONMENT_SUBJECT>"
               ]
             }
           }
         }
       ]
     }
     ```

  3. Reference document: docs/architecture/OIDC Authentication.md.

---

### 3.3. Terraform State Lock Failure (Error Acquiring the State Lock)

* **Symptom:** CI/CD or local CLI reports:

  Error: Error acquiring the state lock: ConditionalCheckFailedException

* **Root Cause:**

  A previous deployment crashed, timed out, or was cancelled mid-run, leaving an orphaned entry in the DynamoDB table sandtongrid-terraform-locks-prod.

* **Remediation Steps:**

  1. Confirm that no GitHub Actions pipeline or engineer is actively running terraform apply.

  2. Read the Lock Info printed by the error message (look for the ID string, e.g., `<LOCK_ID>`).

  3. Execute force-unlock:

     ```bash
     cd infrastructure/environments/prod
     terraform force-unlock <LOCK_ID>
     ```

  4. Type yes when prompted.

  5. Run terraform plan to confirm state access is restored.

  6. Reference runbook: docs/runbooks/TERRAFORM_STATE_LOCK.md.

---

### 3.4. SSL/TLS Certificate Expiration or Domain Validation Error

* **Symptom:** Browsers warn of an invalid or expired certificate for sandtongridtech.com.
* **Critical Rule:** CloudFront **only** accepts ACM certificates created in region us-east-1 (N. Virginia). Certificates created in af-south-1 cannot be attached to CloudFront distributions.
* **Remediation Steps:**

  1. Check certificate status in us-east-1:

     ```bash
     aws acm list-certificates --region us-east-1
     ```

  2. Ensure DNS validation records exist in Route 53:

     ```bash
     aws route53 list-resource-record-sets --hosted-zone-id <HOSTED_ZONE_ID>
     ```

  3. If records are missing, run Terraform in infrastructure/environments/prod:

     ```bash
     terraform apply -target=module.acm
     ```

---

### 3.5. Stale Website Content (Users Not Seeing Latest Deployments)

* **Symptom:** Code was merged to main, but visiting the website displays outdated content.
* **Root Cause:** CloudFront edge caches static files for the duration of their Cache-Control TTL.
* **Remediation Steps:**

  1. Check the GitHub Actions run for terraform-prod.yml to confirm the invalidation step passed.

  2. Manually trigger a CloudFront cache invalidation:

     ```bash
     aws cloudfront create-invalidation \
       --distribution-id <CLOUDFRONT_DISTRIBUTION_ID> \
       --paths "/*"
     ```

  3. Verify cache invalidation status:

     ```bash
     aws cloudfront list-invalidations \
       --distribution-id <CLOUDFRONT_DISTRIBUTION_ID>
     ```

---

## 4. Manual / Break-Glass Procedures

If GitHub Actions is down and you must deploy a critical hotfix directly:

### 4.1. Emergency Manual Infrastructure Update

```bash
# 1. Authenticate with AWS CLI using appropriate administrative credentials:
aws sts get-caller-identity

# 2. Navigate to production environment directory:
cd infrastructure/environments/prod

# 3. Initialize Terraform with remote backend:
terraform init

# 4. Review and apply changes safely:
terraform plan -out=tfplan
terraform apply tfplan
```

### 4.2. Emergency Manual Website Deployment

```bash
# 1. Build the production React assets:
cd apps/website
npm ci
npm run build

# 2. Sync files to the private S3 bucket:
aws s3 sync dist/ s3://sandtongrid-website-prod --delete

# 3. Invalidate CloudFront edge caches:
aws cloudfront create-invalidation \
  --distribution-id <CLOUDFRONT_DISTRIBUTION_ID> \
  --paths "/*"
```

---

## 5. Routine Maintenance & Health Checklist

Perform these monthly or quarterly sanity checks:

1. **Access Logs:** Inspect s3://sandtongrid-logs-prod to verify log files are arriving from CloudFront and S3 Lifecycle rules are archiving old logs.
2. **CloudWatch Metrics:** Check CloudFront 4xx and 5xx error rate metrics in the AWS Console.
3. **Terraform Cleanliness:** Run terraform fmt -check -recursive and terraform plan to confirm no configuration drift exists against AWS reality.
4. **Dependency Audits:** Run npm audit inside apps/website to keep packages secure.

---

# Sandtongrid Technologies — Engineering Knowledge Base

Welcome to the internal engineering documentation for Sandtongrid Technologies. This directory contains all architecture specifications, operational runbooks, security decisions, and troubleshooting procedures for the platform.

If you are an engineer taking over or responding to an outage, start with the **Operations & Troubleshooting Guide**.

---

## Documentation Directory

### 1. Operations & Runbooks (/docs/runbooks/)

* **OPERATIONS_AND_TROUBLESHOOTING.md**
  *The primary incident response and day-to-day operations manual.* Contains system inventory, regions, resource configuration, root-cause debugging for 403 errors, pipeline failures, manual break-glass deployment commands, and health verification checks.

* **TERRAFORM_STATE_LOCK.md**
  *State lock recovery runbook.* Step-by-step instructions for safely diagnosing and unlocking stale DynamoDB locks without risking concurrent infrastructure corruption.

### 2. Architecture & Design (/docs/architecture/)

* **PRODUCTION_ARCHITECTURE.md**
  *Comprehensive system architecture specification.* Details the CloudFront + OAC + private S3 security posture, Route 53 DNS design, ACM TLS certificate requirements in us-east-1, and the cost-aware, zero-maintenance design principles.

* **OIDC Authentication.md**
  *Keyless AWS deployment configuration guide.* Explains GitHub Actions OIDC integration, token claim formats (token.actions.githubusercontent.com), numeric repository ID matching, and IAM Trust Policies.

---

## Quick Reference for On-Call Engineers

| **Action**                          | **Quick Command / Location**                                                                   |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Local Dev Server**                | docker compose -f docker/docker-compose.dev.yml up                                             |
| **Production Container Smoke Test** | docker compose -f docker/docker-compose.yml up --build                                         |
| **Terraform Plan (Prod)**           | cd infrastructure/environments/prod && terraform plan                                          |
| **Force Unlock Stale State**        | cd infrastructure/environments/prod && terraform force-unlock <LOCK_ID>                        |
| **Manual Site Invalidation**        | aws cloudfront create-invalidation --distribution-id <CLOUDFRONT_DISTRIBUTION_ID> --paths "/*" |

```
```
