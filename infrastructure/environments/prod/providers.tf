###############################################################################
# AWS Provider (Primary Region)
###############################################################################

provider "aws" {

  region = var.aws_region

  default_tags {

    tags = local.common_tags

  }

}

###############################################################################
# AWS Provider (US East 1)
# Required for CloudFront ACM Certificates
###############################################################################

provider "aws" {

  alias = "us_east_1"

  region = "us-east-1"

  default_tags {

    tags = local.common_tags

  }

}