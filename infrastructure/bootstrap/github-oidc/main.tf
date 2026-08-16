###############################################################################
# GitHub Actions OIDC Provider
# -----------------------------------------------------------------------------
# Account-level OIDC provider used by both pull-request and production
# GitHub Actions workflows.
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
# GitHub Repository Identity
###############################################################################

locals {
  github_repository = "wadonderah/sandtongrid-technologies"
}

###############################################################################
# Production GitHub Actions Trust Policy
# -----------------------------------------------------------------------------
# Only pushes from the main branch can assume the production role.
###############################################################################

data "aws_iam_policy_document" "github_oidc_prod_assume_role" {
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

    # GitHub token must be intended for AWS STS.
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"

      values = [
        "sts.amazonaws.com"
      ]
    }

    # Production access is restricted to the main branch.
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
# Pull Request GitHub Actions Trust Policy
# -----------------------------------------------------------------------------
# Pull-request workflows use a different GitHub OIDC subject.
###############################################################################

data "aws_iam_policy_document" "github_oidc_pr_assume_role" {
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

    # GitHub token must be intended for AWS STS.
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"

      values = [
        "sts.amazonaws.com"
      ]
    }

    # Only pull-request workflows from this repository are trusted.
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"

      values = [
        "repo:${local.github_repository}:pull_request"
      ]
    }
  }
}

###############################################################################
# Production Deployment Role
# -----------------------------------------------------------------------------
# This role remains restricted to the main branch.
###############################################################################

resource "aws_iam_role" "github_actions_prod" {
  name = "sandtongrid-github-actions-prod"

  assume_role_policy = data.aws_iam_policy_document.github_oidc_prod_assume_role.json

  tags = {
    Name = "sandtongrid-github-actions-prod"
  }
}

###############################################################################
# Pull Request Planning Role
# -----------------------------------------------------------------------------
# Separate role for pull-request Terraform plans.
###############################################################################

resource "aws_iam_role" "github_actions_pr" {
  name = "sandtongrid-github-actions-pr"

  assume_role_policy = data.aws_iam_policy_document.github_oidc_pr_assume_role.json

  tags = {
    Name = "sandtongrid-github-actions-pr"
  }
}
