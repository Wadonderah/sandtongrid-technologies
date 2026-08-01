###############################################################################
# Website Bucket ID
###############################################################################

output "website_bucket_id" {

  description = "Website bucket ID."

  value = module.website_bucket.bucket_id

}

###############################################################################
# Website Bucket ARN
###############################################################################

output "website_bucket_arn" {

  description = "Website bucket ARN."

  value = module.website_bucket.bucket_arn

}

###############################################################################
# Website Bucket Regional Domain Name
###############################################################################

output "website_bucket_regional_domain_name" {

  description = "Regional endpoint for CloudFront origin."

  value = module.website_bucket.bucket_regional_domain_name

}

###############################################################################
# CloudWatch Log Groups
###############################################################################

output "cloudwatch_log_groups" {

  description = "CloudWatch Log Groups."

  value = module.cloudwatch.log_group_names

}

###############################################################################
# CloudWatch Log Group ARNs
###############################################################################

output "cloudwatch_log_group_arns" {

  description = "CloudWatch Log Group ARNs."

  value = module.cloudwatch.log_group_arns

}

###############################################################################
# CodeBuild Role Name
###############################################################################

output "codebuild_role_name" {

  description = "CodeBuild IAM role name."

  value = module.iam.codebuild_role_name

}

###############################################################################
# CodeBuild Role ARN
###############################################################################

output "codebuild_role_arn" {

  description = "CodeBuild IAM role ARN."

  value = module.iam.codebuild_role_arn

}

###############################################################################
# CodePipeline Role Name
###############################################################################

output "codepipeline_role_name" {

  description = "CodePipeline IAM role name."

  value = module.iam.codepipeline_role_name

}

###############################################################################
# CodePipeline Role ARN
###############################################################################

output "codepipeline_role_arn" {

  description = "CodePipeline IAM role ARN."

  value = module.iam.codepipeline_role_arn

}

###############################################################################
# Logging Bucket
###############################################################################

output "logging_bucket_id" {

  description = "Logging bucket ID."

  value = module.logging_bucket.bucket_id

}

output "logging_bucket_arn" {

  description = "Logging bucket ARN."

  value = module.logging_bucket.bucket_arn

}

output "logging_bucket_domain_name" {

  description = "Logging bucket domain name."

  value = module.logging_bucket.bucket_domain_name

}

output "logging_bucket_regional_domain_name" {

  description = "Logging bucket regional domain name."

  value = module.logging_bucket.bucket_regional_domain_name

}