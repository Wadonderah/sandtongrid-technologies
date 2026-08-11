# Production Static Website Architecture

## Overview

Sandtongrid Technologies' production website is hosted using a secure, serverless AWS architecture managed with Terraform.

The architecture uses CloudFront as the public entry point while keeping the S3 website bucket private.

## Architecture Flow

```text
User
  |
  | HTTPS
  v
Route 53
  |
  | DNS Alias
  v
CloudFront Distribution
  |
  | Origin Access Control (OAC)
  | SigV4
  v
Private S3 Website Bucket
  |
  v
index.html / Static Assets
```

Supporting services:

```text
                         +------------------+
                         |       ACM        |
                         |   us-east-1      |
                         | TLS Certificate  |
                         +--------+---------+
                                  |
                                  v
User --> Route 53 --> CloudFront --> Private S3
                         |
                         v
                  CloudFront Logs
                         |
                         v
                   S3 Logging Bucket
```

## AWS Services

### Amazon Route 53

Route 53 provides DNS resolution for:

`www.sandtongridtech.com`

The production DNS record is an A record using a CloudFront alias.

### Amazon CloudFront

CloudFront is the public entry point for the website.

Configuration includes:

* HTTPS redirection
* TLS 1.2
* IPv6 enabled
* Price Class 100
* Compression enabled
* `index.html` as the default root object
* S3 origin
* Origin Access Control
* CloudFront access logging

The deployed CloudFront distribution is:

`d38djrq63ncc5f.cloudfront.net`

### Amazon S3

The website content is stored in an S3 bucket.

The bucket is intentionally private.

Public access is blocked through all four S3 Public Access Block settings:

* BlockPublicAcls
* IgnorePublicAcls
* BlockPublicPolicy
* RestrictPublicBuckets

CloudFront accesses the bucket through Origin Access Control rather than exposing the bucket publicly.

### Origin Access Control

CloudFront uses OAC with:

* Origin type: S3
* Signing behavior: Always
* Signing protocol: SigV4

The S3 bucket policy allows `cloudfront.amazonaws.com` to perform `s3:GetObject` only when the request originates from the configured CloudFront distribution.

This keeps direct public S3 access disabled while still allowing the website to be served.

### AWS Certificate Manager

The CloudFront TLS certificate is provisioned in `us-east-1`, as required for CloudFront certificates.

DNS validation records are managed through Route 53.

The certificate covers:

* `www.sandtongridtech.com`
* `sandtongridtech.com`

### S3 Logging Bucket

A separate S3 bucket stores CloudFront logs.

The logging bucket has:

* Public access blocked
* Versioning enabled
* Server-side encryption
* Lifecycle configuration
* Terraform-managed tags

### CloudWatch

CloudWatch log groups are configured for:

* S3
* CloudFront

Log retention is configurable through Terraform.

## Infrastructure as Code

The infrastructure is managed using Terraform modules.

The production environment orchestrates:

```text
prod/
├── website S3 module
├── logging S3 module
├── CloudWatch module
├── ACM module
├── CloudFront module
└── Route 53 module
```

The design keeps service-specific implementation inside reusable modules while the environment configuration is responsible for composition.

## Security Decisions

### Private S3 Origin

The S3 website bucket is not publicly accessible.

Instead:

```text
Internet
   |
   v
CloudFront
   |
   | OAC + SigV4
   v
Private S3
```

This reduces the public attack surface and ensures website traffic is controlled through CloudFront.

### HTTPS Only

CloudFront redirects HTTP requests to HTTPS.

The configured minimum TLS protocol is:

`TLSv1.2_2021`

### Least-Privilege S3 Access

The CloudFront bucket policy grants only:

`s3:GetObject`

to the CloudFront service principal and restricts the request using the CloudFront distribution ARN.

## Cost-Aware Design

The architecture intentionally avoids adding services that do not provide a clear requirement or operational benefit.

The website is static, so using services such as EC2, ECS, EKS, RDS, or Lambda for the website itself would introduce additional operational complexity and cost without solving an actual requirement.

The selected architecture provides the required capabilities using:

* S3 for storage
* CloudFront for distribution
* Route 53 for DNS
* ACM for TLS
* CloudWatch for logging
* S3 for log storage

This follows a simple engineering principle:

> Use the simplest architecture that satisfies the requirements.

More AWS services do not automatically mean better architecture.

## Verification

The production infrastructure was verified with Terraform:

```bash
terraform fmt -check -recursive ../../
terraform validate
terraform plan
```

Terraform reported:

```text
Success! The configuration is valid.

No changes. Your infrastructure matches the configuration.
```

The deployed CloudFront distribution was also verified as:

```text
Enabled:  True
Status:   Deployed
OAC:      E2SCITL34S60DY
```

DNS was verified to point the production domain to CloudFront.

The production website was tested with:

```bash
curl -I https://www.sandtongridtech.com
```

The response returned:

```text
HTTP/1.1 200 OK
X-Cache: RefreshHit from cloudfront
Via: ...cloudfront.net (CloudFront)
```

S3 Public Access Block was also verified:

```text
BlockPublicAcls:       true
IgnorePublicAcls:      true
BlockPublicPolicy:     true
RestrictPublicBuckets: true
```

## Operational Principle

The infrastructure should remain intentionally simple.

Future services should only be introduced when they solve a demonstrated requirement such as:

* increased scale
* improved availability
* stronger security
* improved observability
* compliance requirements
* reduced operational risk
* measurable business value

The goal is not to build the most complicated AWS architecture.

The goal is to build the **right architecture for the requirements**.
