###############################################################################
# CodeBuild IAM Role
#
# This IAM role is assumed by AWS CodeBuild during build execution.
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
#
# This IAM role is assumed by AWS CodePipeline while orchestrating the CI/CD
# workflow.
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
#
# Principle of Least Privilege
#
# Required permissions:
# - Write build logs to CloudWatch
# - Read and upload build artifacts to Amazon S3
###############################################################################

resource "aws_iam_policy" "codebuild" {

  name = "${local.role_prefix}-${var.environment}-codebuild-policy"

  description = "Least privilege policy for CodeBuild."

  policy = jsonencode({

    Version = "2012-10-17"

    Statement = [

      #########################################################################
      # CloudWatch Logs
      #########################################################################

      {

        Sid = "CloudWatchLogs"

        Effect = "Allow"

        Action = [

          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"

        ]

        Resource = "*"

      },

      #########################################################################
      # Amazon S3 Artifacts
      #########################################################################

      {

        Sid = "S3Artifacts"

        Effect = "Allow"

        Action = [

          "s3:GetObject",
          "s3:PutObject",
          "s3:ListBucket"

        ]

        Resource = "*"

      }

    ]

  })

}

###############################################################################
# CodePipeline IAM Policy
#
# Principle of Least Privilege
#
# Required permissions:
# - Read and write pipeline artifacts in Amazon S3
# - Start and monitor CodeBuild projects
# - Publish execution events to CloudWatch
###############################################################################

resource "aws_iam_policy" "codepipeline" {

  name = "${local.role_prefix}-${var.environment}-codepipeline-policy"

  description = "Least privilege policy for CodePipeline."

  policy = jsonencode({

    Version = "2012-10-17"

    Statement = [

      #########################################################################
      # Amazon S3
      #########################################################################

      {

        Sid = "PipelineArtifacts"

        Effect = "Allow"

        Action = [

          "s3:GetObject",
          "s3:PutObject",
          "s3:ListBucket"

        ]

        Resource = "*"

      },

      #########################################################################
      # CodeBuild
      #########################################################################

      {

        Sid = "CodeBuild"

        Effect = "Allow"

        Action = [

          "codebuild:StartBuild",
          "codebuild:BatchGetBuilds"

        ]

        Resource = "*"

      },

      #########################################################################
      # CloudWatch
      #########################################################################

      {

        Sid = "CloudWatch"

        Effect = "Allow"

        Action = [

          "cloudwatch:PutMetricData"

        ]

        Resource = "*"

      }

    ]

  })

}

###############################################################################
# Attach CodeBuild Policy
###############################################################################

resource "aws_iam_role_policy_attachment" "codebuild" {

  role = aws_iam_role.codebuild.name

  policy_arn = aws_iam_policy.codebuild.arn

}

###############################################################################
# Attach CodePipeline Policy
###############################################################################

resource "aws_iam_role_policy_attachment" "codepipeline" {

  role = aws_iam_role.codepipeline.name

  policy_arn = aws_iam_policy.codepipeline.arn

}