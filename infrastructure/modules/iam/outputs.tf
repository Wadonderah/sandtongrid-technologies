###############################################################################
# CodeBuild Role Name
###############################################################################

output "codebuild_role_name" {

  description = "CodeBuild IAM role name."

  value = aws_iam_role.codebuild.name

}

###############################################################################
# CodeBuild Role ARN
###############################################################################

output "codebuild_role_arn" {

  description = "CodeBuild IAM role ARN."

  value = aws_iam_role.codebuild.arn

}

###############################################################################
# CodePipeline Role Name
###############################################################################

output "codepipeline_role_name" {

  description = "CodePipeline IAM role name."

  value = aws_iam_role.codepipeline.name

}

###############################################################################
# CodePipeline Role ARN
###############################################################################

output "codepipeline_role_arn" {

  description = "CodePipeline IAM role ARN."

  value = aws_iam_role.codepipeline.arn

}