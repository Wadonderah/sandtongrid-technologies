###############################################################################
# Certificate ARN
###############################################################################

output "certificate_arn" {

  description = "ACM certificate ARN."

  value = aws_acm_certificate.certificate.arn

}

###############################################################################
# Certificate Domain Name
###############################################################################

output "certificate_domain_name" {

  description = "Primary certificate domain."

  value = aws_acm_certificate.certificate.domain_name

}