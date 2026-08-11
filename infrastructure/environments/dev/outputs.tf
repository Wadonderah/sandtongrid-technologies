###############################################################################
# Website Bucket
###############################################################################

output "website_bucket_id" {

  description = "Website bucket ID."

  value = module.website_bucket.bucket_id

}

output "website_bucket_arn" {

  description = "Website bucket ARN."

  value = module.website_bucket.bucket_arn

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

###############################################################################
# ACM
###############################################################################

output "certificate_arn" {

  description = "ACM Certificate ARN."

  value = module.acm.certificate_arn

}

###############################################################################
# CloudFront
###############################################################################

output "cloudfront_distribution_id" {

  description = "CloudFront Distribution ID."

  value = module.cloudfront.distribution_id

}

output "cloudfront_domain_name" {

  description = "CloudFront Domain Name."

  value = module.cloudfront.domain_name

}

###############################################################################
# CloudWatch
###############################################################################

output "cloudwatch_log_group_names" {

  description = "CloudWatch Log Groups."

  value = module.cloudwatch.log_group_names

}

###############################################################################
# CodeBuild
###############################################################################





###############################################################################
# CodePipeline
###############################################################################



