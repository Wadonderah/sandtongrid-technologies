###############################################################################
# GitHub Actions OIDC Provider
#
# The GitHub OIDC provider already exists in this AWS account and has been
# imported into this Terraform state.
#
# It is account-level infrastructure, so this bootstrap must not rewrite
# existing provider metadata such as tags or the certificate thumbprint.
###############################################################################

resource "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"

  client_id_list = [
    "sts.amazonaws.com"
  ]

  lifecycle {
    ignore_changes = [
      thumbprint_list,
      tags,
      tags_all
    ]
  }
}

###############################################################################
# GitHub Actions Production Trust Policy
#
# Only GitHub Actions workflows from the main branch of the specified
# repository are allowed to assume the production deployment role.
###############################################################################

data "aws_iam_policy_document" "github_oidc_assume_role" {
  statement {
    effect = "Allow"

    actions = [
      "sts:AssumeRoleWithWebIdentity"
    ]

    principals {
      type = "Federated"

      identifiers = [
        aws_iam_openid_connect_provider.github.arn
      ]
    }

    # Require GitHub's OIDC audience to be AWS STS.
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"

      values = [
        "sts.amazonaws.com"
      ]
    }

    # Restrict role assumption to the production repository's main branch.
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"

      values = [
        "repo:${var.github_repository}:ref:refs/heads/main"
      ]
    }
  }
}

###############################################################################
# Production Deployment Role
#
# GitHub Actions will assume this role using OIDC.
# No long-lived AWS access keys are required in GitHub.
###############################################################################

resource "aws_iam_role" "github_actions_prod" {
  name = "sandtongrid-github-actions-prod"

  assume_role_policy = data.aws_iam_policy_document.github_oidc_assume_role.json

  tags = {
    Name = "sandtongrid-github-actions-prod"
  }
}