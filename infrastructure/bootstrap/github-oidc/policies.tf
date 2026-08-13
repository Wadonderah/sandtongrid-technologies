###############################################################################
# GitHub Actions Production Deployment Policy
#
# The policy document is kept as a separate JSON file so the IAM permissions
# remain easy to review and audit without embedding a large policy in Terraform.
#
# This inline policy is attached to the GitHub Actions production role and
# provides only the permissions required by the production infrastructure.
###############################################################################

resource "aws_iam_role_policy" "terraform_prod_deployment" {
  name = "terraform-prod-deployment"

  role = aws_iam_role.github_actions_prod.id

  policy = file("${path.module}/policies/prod-deployment-policy.json")
}
