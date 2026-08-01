###############################################################################
# Local Values
###############################################################################

locals {

  ###########################################################################
  # Website Domain
  #
  # Production uses:
  #   www.sandtongridtech.com
  #
  # All other environments use:
  #   <environment>.sandtongridtech.com
  #
  # Examples:
  #   dev  -> dev.sandtongridtech.com
  #   qa   -> qa.sandtongridtech.com
  #   test -> test.sandtongridtech.com
  ###########################################################################
  website_domain = var.environment == "prod" ? "www.sandtongridtech.com" : "${var.environment}.sandtongridtech.com"

  ###########################################################################
  # Project Name (Sanitized)
  #
  # CloudWatch Log Group names cannot contain spaces.
  #
  # Example:
  #
  #   Sandtongrid Technologies
  #
  # becomes
  #
  #   Sandtongrid-Technologies
  #
  # This keeps the module reusable regardless of the project name.
  ###########################################################################
  project_name_safe = replace(var.project_name, " ", "-")

  ###########################################################################
  # CloudWatch Log Groups
  #
  # Log group names are generated dynamically so the module works for any
  # environment without hardcoding values.
  #
  # Production
  #   /aws/cloudfront/www.sandtongridtech.com
  #   /aws/s3/www.sandtongridtech.com
  #   /aws/codebuild/Sandtongrid-Technologies-prod
  #   /aws/codepipeline/Sandtongrid-Technologies-prod
  #
  # Development
  #   /aws/cloudfront/dev.sandtongridtech.com
  #   /aws/s3/dev.sandtongridtech.com
  #   /aws/codebuild/Sandtongrid-Technologies-dev
  #   /aws/codepipeline/Sandtongrid-Technologies-dev
  ###########################################################################
  log_groups = {

    #########################################################################
    # CloudFront Logs
    #########################################################################
    cloudfront = "/aws/cloudfront/${local.website_domain}"

    #########################################################################
    # Amazon S3 Logs
    #########################################################################
    s3 = "/aws/s3/${local.website_domain}"

    #########################################################################
    # AWS CodeBuild Logs
    #########################################################################
    codebuild = "/aws/codebuild/${local.project_name_safe}-${var.environment}"

    #########################################################################
    # AWS CodePipeline Logs
    #########################################################################
    codepipeline = "/aws/codepipeline/${local.project_name_safe}-${var.environment}"
  }

}