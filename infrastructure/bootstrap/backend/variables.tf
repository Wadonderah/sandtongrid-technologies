###############################################################################
# AWS Region
###############################################################################

variable "aws_region" {

  description = "AWS region where bootstrap resources are created."

  type = string

  default = "eu-west-1"

}

###############################################################################
# Terraform Backend S3 Bucket
###############################################################################

variable "terraform_state_bucket_name" {

  description = "Terraform remote state bucket."

  type = string

}

###############################################################################
# Terraform Lock Table
###############################################################################

variable "terraform_lock_table_name" {

  description = "Terraform state lock table."

  type = string

}

###############################################################################
# Project Name
###############################################################################

variable "project_name" {

  description = "Project name."

  type = string

  default = "Sandtongrid Technologies"

}

###############################################################################
# Environment
###############################################################################

variable "environment" {

  description = "Deployment environment."

  type = string

  default = "bootstrap"

}