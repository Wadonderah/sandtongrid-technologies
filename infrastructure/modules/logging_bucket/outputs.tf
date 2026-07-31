###############################################################################
# Bucket ID
###############################################################################

output "bucket_id" {

  description = "Logging bucket ID."

  value = aws_s3_bucket.logs.id

}

###############################################################################
# Bucket ARN
###############################################################################

output "bucket_arn" {

  description = "Logging bucket ARN."

  value = aws_s3_bucket.logs.arn

}

###############################################################################
# Bucket Domain Name
###############################################################################

output "bucket_domain_name" {

  description = "Logging bucket domain."

  value = aws_s3_bucket.logs.bucket_domain_name

}

###############################################################################
# Regional Domain Name
###############################################################################

output "bucket_regional_domain_name" {

  description = "Regional bucket domain."

  value = aws_s3_bucket.logs.bucket_regional_domain_name

}