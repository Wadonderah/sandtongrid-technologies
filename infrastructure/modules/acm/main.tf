###############################################################################
# ACM Certificate
###############################################################################

resource "aws_acm_certificate" "certificate" {

  provider = aws.us_east_1

  domain_name               = var.domain_name
  validation_method         = "DNS"
  subject_alternative_names = var.subject_alternative_names

  lifecycle {

    create_before_destroy = true

  }

  tags = local.certificate_tags

}

###############################################################################
# Route53 Validation Records
###############################################################################

resource "aws_route53_record" "validation" {

  for_each = {
    for dvo in aws_acm_certificate.certificate.domain_validation_options :
    dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id = var.hosted_zone_id

  name = each.value.name
  type = each.value.type
  ttl  = 60

  records = [
    each.value.record
  ]

}

###############################################################################
# Certificate Validation
###############################################################################

resource "aws_acm_certificate_validation" "certificate" {

  provider = aws.us_east_1

  certificate_arn = aws_acm_certificate.certificate.arn

  validation_record_fqdns = [
    for record in aws_route53_record.validation :
    record.fqdn
  ]

}