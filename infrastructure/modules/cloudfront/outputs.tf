###############################################################################
# CloudFront Distribution ID
###############################################################################

output "distribution_id" {
  description = "CloudFront distribution ID."
  value       = aws_cloudfront_distribution.website.id
}

###############################################################################
# CloudFront Domain Name
###############################################################################

output "domain_name" {
  description = "CloudFront domain name."
  value       = aws_cloudfront_distribution.website.domain_name
}

###############################################################################
# CloudFront Hosted Zone ID
###############################################################################

output "hosted_zone_id" {
  description = "CloudFront hosted zone ID."
  value       = aws_cloudfront_distribution.website.hosted_zone_id
}