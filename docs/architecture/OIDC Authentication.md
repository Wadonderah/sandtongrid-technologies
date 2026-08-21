OIDC Authentication Issue Resolution Documentation
Issue Summary
Problem: GitHub Actions OIDC authentication failed with error "Could not assume role with OIDC: Not authorized to perform sts:AssumeRoleWithWebIdentity" after implementing environment-based deployment protection for a Terraform workflow.

Root Cause
GitHub introduced a security hardening measure that appends numeric user and repository IDs to the OIDC sub claim to prevent sub claim hijacking when repositories are renamed or transferred.

Before the Change
The trust policy expected the sub claim in this format:

text
repo:Wadonderah/sandtongrid-technologies:ref:refs/heads/main
After the Change (Actual Format)
GitHub began sending the sub claim with embedded numeric IDs:

text
repo:Wadonderah@149188641/sandtongrid-technologies@1312542351:ref:refs/heads/main
When the environment: production was added to the apply job, a separate sub claim format was also introduced:

text
repo:Wadonderah@149188641/sandtongrid-technologies@1312542351:environment:production
The Solution
1. Identify the Actual sub Claim
Added a debug step to the workflow to print the actual OIDC token subject:

yaml
- name: Debug OIDC Token Subject (Plan)
  run: |
    TOKEN=$(curl -sS -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" \
      "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=sts.amazonaws.com")
    echo "sub: $(echo $TOKEN | jq -r '.value' | cut -d. -f2 | base64 -d | jq -r '.sub')"
    echo "aud: $(echo $TOKEN | jq -r '.value' | cut -d. -f2 | base64 -d | jq -r '.aud')"
Debug output revealed:

json
sub: repo:Wadonderah@149188641/sandtongrid-technologies@1312542351:ref:refs/heads/main
aud: sts.amazonaws.com
repository: Wadonderah/sandtongrid-technologies
ref: refs/heads/main
environment: None
2. Update IAM Trust Policy
The final working trust policy with both sub claims as an array under StringEquals:

json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::809306106692:oidc-provider/token.actions.githubusercontent.com"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
                    "token.actions.githubusercontent.com:sub": [
                        "repo:Wadonderah@149188641/sandtongrid-technologies@1312542351:ref:refs/heads/main",
                        "repo:Wadonderah@149188641/sandtongrid-technologies@1312542351:environment:production"
                    ]
                }
            }
        }
    ]
}
3. Workflow Update Summary
Before:

yaml
terraform-apply:
  needs: terraform-plan
  runs-on: ubuntu-latest
  steps:
    - uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: arn:aws:iam::809306106692:role/sandtongrid-github-actions-prod
        role-session-name: github-actions-apply
After:

yaml
concurrency:
  group: terraform-production
  cancel-in-progress: true

terraform-apply:
  needs: terraform-plan
  runs-on: ubuntu-latest
  environment: production
  permissions:
    contents: read
    id-token: write
    deployments: write
  steps:
    - uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: arn:aws:iam::809306106692:role/sandtongrid-github-actions-prod
        role-session-name: github-actions-apply
Key Takeaways
GitHub OIDC sub claims include numeric IDs (@149188641 for users, @1312542351 for repositories) as a security hardening measure. These IDs are stable even if the repository name changes.

Different job types produce different sub claim formats:

Push to main (no environment): repo:user@id/repo@id:ref:refs/heads/main

Push to main (with environment): repo:user@id/repo@id:environment:production

Pull request: repo:user@id/repo@id:pull_request

When using StringEquals with an array value, AWS evaluates it with OR semantics — the token's sub must match any one of the listed values.

The StringLike vs StringEquals distinction matters:

StringLike supports wildcard patterns

StringEquals requires exact matches (more secure)

To debug OIDC issues:

Add a step to print the actual sub claim from the OIDC token

Compare it against the trust policy condition

Verify the trust policy saved correctly in AWS Console

Final Verification
After implementing the fix:

✅ Plan job authenticated as github-actions-prod

✅ Apply job authenticated as github-actions-apply

✅ Production environment protection (reviewers, branch restrictions) applied correctly

✅ Terraform apply completed successfully

text
Apply complete! Resources: 0 added, 0 changed, 0 destroyed.