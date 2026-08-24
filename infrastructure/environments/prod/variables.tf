###############################################################################
# AWS Region
###############################################################################

variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "eu-west-1"
}

###############################################################################
# Project Name
###############################################################################

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "Sandtongrid Technologies"
}

###############################################################################
# Environment
###############################################################################

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "prod"
}

###############################################################################
# Website Bucket
###############################################################################

variable "website_bucket_name" {
  description = "Website S3 bucket name"
  type        = string
}

###############################################################################
# Logging Bucket
###############################################################################

variable "logging_bucket_name" {
  description = "Logging S3 bucket name"
  type        = string
}

###############################################################################
# Domain Name
###############################################################################

variable "domain_name" {
  description = "Primary domain name"
  type        = string
}

###############################################################################
# Subject Alternative Names
###############################################################################

variable "subject_alternative_names" {
  description = "Additional domain names for ACM certificate"
  type        = list(string)
}

###############################################################################
# Route53 Hosted Zone
###############################################################################

variable "hosted_zone_id" {
  description = "Route53 Hosted Zone ID"
  type        = string
}

###############################################################################
# CloudWatch Log Retention
###############################################################################

variable "log_retention_days" {
  description = "CloudWatch log retention period"
  type        = number
  default     = 7
}