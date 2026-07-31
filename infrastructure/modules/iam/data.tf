###############################################################################
# IAM Assume Role Policy
###############################################################################

data "aws_iam_policy_document" "codebuild_assume_role" {

  statement {

    effect = "Allow"

    principals {

      type = "Service"

      identifiers = [

        "codebuild.amazonaws.com"

      ]

    }

    actions = [

      "sts:AssumeRole"

    ]

  }

}

###############################################################################
# CodePipeline Assume Role
###############################################################################

data "aws_iam_policy_document" "codepipeline_assume_role" {

  statement {

    effect = "Allow"

    principals {

      type = "Service"

      identifiers = [

        "codepipeline.amazonaws.com"

      ]

    }

    actions = [

      "sts:AssumeRole"

    ]

  }

}