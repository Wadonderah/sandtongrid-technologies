###############################################################################
# Local Values
###############################################################################

locals {

  log_groups = {

    cloudfront = "/aws/cloudfront/www.sandtongridtech.com"

    s3 = "/aws/s3/www.sandtongridtech.com"

    codebuild = "/aws/codebuild/sandtongridtech"

    codepipeline = "/aws/codepipeline/sandtongridtech"

  }

}