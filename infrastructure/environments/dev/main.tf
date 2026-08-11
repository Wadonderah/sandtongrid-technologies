###############################################################################
# Website S3 Bucket
###############################################################################

module "website_bucket" {

  source = "../../modules/s3"

  bucket_name = var.website_bucket_name

  project_name = var.project_name

  environment = var.environment

  common_tags = local.common_tags

}

###############################################################################
# Logging Bucket
###############################################################################

module "logging_bucket" {

  source = "../../modules/logging_bucket"

  bucket_name = var.logging_bucket_name

  project_name = var.project_name

  environment = var.environment

  common_tags = local.common_tags

}

###############################################################################
# IAM
###############################################################################


###############################################################################
# CloudWatch
###############################################################################

module "cloudwatch" {

  source = "../../modules/cloudwatch"

  project_name = var.project_name

  environment = var.environment

  common_tags = local.common_tags

  log_retention_days = var.log_retention_days

}

###############################################################################
# ACM Certificate
###############################################################################

module "acm" {

  source = "../../modules/acm"

  providers = {
    aws.us_east_1 = aws.us_east_1
  }

  domain_name = var.domain_name

  subject_alternative_names = var.subject_alternative_names

  hosted_zone_id = var.hosted_zone_id

  environment = var.environment

  common_tags = local.common_tags

}

###############################################################################
# CodeStar Connection
###############################################################################


###############################################################################
# CloudFront
###############################################################################

module "cloudfront" {

  source = "../../modules/cloudfront"

  domain_name = var.domain_name

  bucket_id = module.website_bucket.bucket_id

  bucket_arn = module.website_bucket.bucket_arn

  bucket_regional_domain_name = module.website_bucket.bucket_regional_domain_name

  logging_bucket_domain_name = module.logging_bucket.bucket_regional_domain_name

  certificate_arn = module.acm.certificate_arn

  common_tags = local.common_tags

}

###############################################################################
# CodeBuild
###############################################################################


###############################################################################
# CodePipeline
###############################################################################


###############################################################################
# Route53
###############################################################################

module "route53" {

  source = "../../modules/route53"

  hosted_zone_id = var.hosted_zone_id

  domain_name = var.domain_name

  cloudfront_domain_name = module.cloudfront.domain_name

  cloudfront_hosted_zone_id = module.cloudfront.hosted_zone_id

}