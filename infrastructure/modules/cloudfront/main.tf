###############################################################################
# Origin Access Control
###############################################################################

resource "aws_cloudfront_origin_access_control" "website" {

  name = "${var.domain_name}-oac"

  description = "Origin Access Control"

  origin_access_control_origin_type = "s3"

  signing_behavior = "always"

  signing_protocol = "sigv4"

}

###############################################################################
# CloudFront Distribution
###############################################################################

resource "aws_cloudfront_distribution" "website" {

  enabled             = true

  is_ipv6_enabled     = true

  comment             = var.domain_name

  default_root_object = "index.html"

  aliases = [
    var.domain_name
  ]

  origin {

    domain_name = var.bucket_regional_domain_name

    origin_id = local.origin_id

    origin_access_control_id = aws_cloudfront_origin_access_control.website.id

  }

  default_cache_behavior {

    allowed_methods = [
      "GET",
      "HEAD"
    ]

    cached_methods = [
      "GET",
      "HEAD"
    ]

    target_origin_id = local.origin_id

    viewer_protocol_policy = "redirect-to-https"

    compress = true

    forwarded_values {

      query_string = false

      cookies {

        forward = "none"

      }

    }

  }

  logging_config {

    bucket = var.logging_bucket_domain_name

    include_cookies = false

    prefix = "cloudfront/"

  }

  restrictions {

    geo_restriction {

      restriction_type = "none"

    }

  }

  viewer_certificate {

    acm_certificate_arn = var.certificate_arn

    ssl_support_method = "sni-only"

    minimum_protocol_version = "TLSv1.2_2021"

  }

  price_class = "PriceClass_100"

  tags = local.cloudfront_tags

}

###############################################################################
# Bucket Policy
###############################################################################

data "aws_iam_policy_document" "cloudfront_access" {

  statement {

    sid = "AllowCloudFrontService"

    effect = "Allow"

    principals {

      type = "Service"

      identifiers = [
        "cloudfront.amazonaws.com"
      ]

    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${var.bucket_arn}/*"
    ]

    condition {

      test = "StringEquals"

      variable = "AWS:SourceArn"

      values = [
        aws_cloudfront_distribution.website.arn
      ]

    }

  }

}

resource "aws_s3_bucket_policy" "website" {

  bucket = var.bucket_id

  policy = data.aws_iam_policy_document.cloudfront_access.json

}