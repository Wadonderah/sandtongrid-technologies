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

###############################################################################
# Pull Request Read-Only Permissions
# -----------------------------------------------------------------------------
# Terraform plan needs to inspect AWS resources but must not modify
# production infrastructure.
###############################################################################

resource "aws_iam_role_policy_attachment" "github_actions_pr_read_only" {
  role       = aws_iam_role.github_actions_pr.name
  policy_arn = "arn:aws:iam::aws:policy/ReadOnlyAccess"
}

###############################################################################
# Pull Request Terraform Backend Access
# -----------------------------------------------------------------------------
# Allows Terraform to read the production state and manage the state lock.
# No production infrastructure write permissions are granted here.
###############################################################################

resource "aws_iam_role_policy" "github_actions_pr_backend" {
  name = "terraform-pr-backend"
  role = aws_iam_role.github_actions_pr.id

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Sid    = "TerraformBackendStateRead"
        Effect = "Allow"

        Action = [
          "s3:GetObject",
          "s3:GetObjectVersion"
        ]

        Resource = "arn:aws:s3:::sandtongrid-tech-terraform-state/prod/terraform.tfstate"
      },

      {
        Sid    = "TerraformBackendBucketRead"
        Effect = "Allow"

        Action = [
          "s3:GetBucketLocation",
          "s3:GetBucketVersioning"
        ]

        Resource = "arn:aws:s3:::sandtongrid-tech-terraform-state"
      },

      {
        Sid    = "TerraformStateLock"
        Effect = "Allow"

        Action = [
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:DeleteItem"
        ]

        Resource = "arn:aws:dynamodb:eu-west-1:809306106692:table/sandtongrid-tech-terraform-locks"
      }
    ]
  })
}
