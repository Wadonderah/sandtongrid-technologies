###############################################################################
# GitHub Actions OIDC Provider
# -----------------------------------------------------------------------------
# The GitHub OIDC provider already exists in this AWS account and is managed
# by this bootstrap configuration.
#
# The provider is account-level infrastructure, so existing metadata such as
# thumbprints and tags are intentionally protected from unnecessary changes.
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
# Production Repository Identity
# -----------------------------------------------------------------------------
# This value is intentionally defined as a local constant instead of a
# Terraform variable.
#
# GitHub's OIDC "sub" claim for a workflow running from the main branch is:
#
# repo:OWNER/REPOSITORY:ref:refs/heads/main
#
# Keeping the repository identity here prevents external Terraform variables
# from accidentally changing the production trust relationship.
###############################################################################

locals {
  github_repository = "Wadonderah/sandtongrid-technologies"
}

###############################################################################
# GitHub Actions Production Trust Policy
# -----------------------------------------------------------------------------
# Only GitHub Actions running from the main branch of the Sandtongrid
# Technologies repository are allowed to assume the production role.
#
# No long-lived AWS credentials are required by GitHub Actions.
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

    ###########################################################################
    # OIDC Audience Restriction
    # -------------------------------------------------------------------------
    # The GitHub OIDC token must be intended for AWS STS.
    ###########################################################################

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"

      values = [
        "sts.amazonaws.com"
      ]
    }

    ###########################################################################
    # Repository and Branch Restriction
    # -------------------------------------------------------------------------
    # Only the main branch of the production repository can assume this role.
    ###########################################################################

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"

      values = [
        "repo:${local.github_repository}:ref:refs/heads/main"
      ]
    }
  }
}

###############################################################################
# Production Deployment Role
# -----------------------------------------------------------------------------
# Dedicated IAM role used by GitHub Actions to manage the production
# infrastructure through Terraform.
#
# GitHub obtains temporary AWS credentials by assuming this role through
# GitHub's OIDC identity provider.
###############################################################################

resource "aws_iam_role" "github_actions_prod" {
  name = "sandtongrid-github-actions-prod"

  assume_role_policy = data.aws_iam_policy_document.github_oidc_assume_role.json

  tags = {
    Name = "sandtongrid-github-actions-prod"
  }
}