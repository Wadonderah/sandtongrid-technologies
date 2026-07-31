###############################################################################
# Logging Bucket
###############################################################################

resource "aws_s3_bucket" "logs" {

  bucket = var.bucket_name

  tags = local.bucket_tags

}

###############################################################################
# Versioning
###############################################################################

resource "aws_s3_bucket_versioning" "logs" {

  bucket = aws_s3_bucket.logs.id

  versioning_configuration {

    status = "Enabled"

  }

}

###############################################################################
# Server Side Encryption
###############################################################################

resource "aws_s3_bucket_server_side_encryption_configuration" "logs" {

  bucket = aws_s3_bucket.logs.id

  rule {

    apply_server_side_encryption_by_default {

      sse_algorithm = "AES256"

    }

  }

}

###############################################################################
# Ownership Controls
###############################################################################

resource "aws_s3_bucket_ownership_controls" "logs" {

  bucket = aws_s3_bucket.logs.id

  rule {

    object_ownership = "BucketOwnerPreferred"

  }

}

###############################################################################
# Block Public Access
###############################################################################

resource "aws_s3_bucket_public_access_block" "logs" {

  bucket = aws_s3_bucket.logs.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true

}

###############################################################################
# Lifecycle Configuration
###############################################################################

resource "aws_s3_bucket_lifecycle_configuration" "logs" {

  bucket = aws_s3_bucket.logs.id

  rule {

    id = "log-retention"

    status = "Enabled"

    filter {}

    transition {

      days          = 30
      storage_class = "STANDARD_IA"

    }

    transition {

      days          = 90
      storage_class = "GLACIER"

    }

    expiration {

      days = 365

    }

  }

}