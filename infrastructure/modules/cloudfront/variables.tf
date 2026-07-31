###############################################################################
# Domain Name
###############################################################################

variable "domain_name" {

  description = "Primary domain name."

  type = string

}

###############################################################################
# Website Bucket ID
###############################################################################

variable "bucket_id" {

  description = "S3 bucket ID."

  type = string

}

###############################################################################
# Website Bucket ARN
###############################################################################

variable "bucket_arn" {

  description = "S3 bucket ARN."

  type = string

}

###############################################################################
# Website Bucket Regional Domain Name
###############################################################################

variable "bucket_regional_domain_name" {

  description = "Regional S3 bucket domain."

  type = string

}

###############################################################################
# ACM Certificate ARN
###############################################################################

variable "certificate_arn" {

  description = "ACM certificate ARN."

  type = string

}

###############################################################################
# Logging Bucket Domain Name
###############################################################################

variable "logging_bucket_domain_name" {

  description = "Logging bucket regional domain name."

  type = string

}

###############################################################################
# Common Tags
###############################################################################

variable "common_tags" {

  description = "Common resource tags."

  type = map(string)

}