###############################################################################
# Logging Bucket Tags
###############################################################################

locals {

  bucket_tags = merge(

    var.common_tags,

    {

      Name        = var.bucket_name
      Project     = var.project_name
      Environment = var.environment

    }

  )

}