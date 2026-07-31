###############################################################################
# CodeBuild IAM Role
###############################################################################

resource "aws_iam_role" "codebuild" {

  name = "${local.role_prefix}-${var.environment}-codebuild-role"

  assume_role_policy = data.aws_iam_policy_document.codebuild_assume_role.json

  tags = merge(
    var.common_tags,
    {
      Name = "${local.role_prefix}-${var.environment}-codebuild-role"
    }
  )

}

###############################################################################
# CodePipeline IAM Role
###############################################################################

resource "aws_iam_role" "codepipeline" {

  name = "${local.role_prefix}-${var.environment}-codepipeline-role"

  assume_role_policy = data.aws_iam_policy_document.codepipeline_assume_role.json

  tags = merge(
    var.common_tags,
    {
      Name = "${local.role_prefix}-${var.environment}-codepipeline-role"
    }
  )

}

###############################################################################
# CodeBuild IAM Policy
###############################################################################

resource "aws_iam_policy" "codebuild" {

  name = "${local.role_prefix}-${var.environment}-codebuild-policy"

  description = "Least privilege policy for CodeBuild."

  policy = jsonencode({

    Version = "2012-10-17"

    Statement = [

      {

        Effect = "Allow"

        Action = [

          "logs:*",

          "s3:*"

        ]

        Resource = "*"

      }

    ]

  })

}

###############################################################################
# CodePipeline IAM Policy
###############################################################################

resource "aws_iam_policy" "codepipeline" {

  name = "${local.role_prefix}-${var.environment}-codepipeline-policy"

  description = "Least privilege policy for CodePipeline."

  policy = jsonencode({

    Version = "2012-10-17"

    Statement = [

      {

        Effect = "Allow"

        Action = [

          "s3:*",

          "codebuild:*",

          "cloudwatch:*"

        ]

        Resource = "*"

      }

    ]

  })

}

###############################################################################
# Attach Policy to CodeBuild Role
###############################################################################

resource "aws_iam_role_policy_attachment" "codebuild" {

  role = aws_iam_role.codebuild.name

  policy_arn = aws_iam_policy.codebuild.arn

}

###############################################################################
# Attach Policy to CodePipeline Role
###############################################################################

resource "aws_iam_role_policy_attachment" "codepipeline" {

  role = aws_iam_role.codepipeline.name

  policy_arn = aws_iam_policy.codepipeline.arn

}