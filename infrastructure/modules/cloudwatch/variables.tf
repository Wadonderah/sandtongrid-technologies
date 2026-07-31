###############################################################################
# Project Name
###############################################################################

variable "project_name" {

  description = "Project name."

  type = string

}

###############################################################################
# Environment
###############################################################################

variable "environment" {

  description = "Deployment environment."

  type = string

}

###############################################################################
# Common Tags
###############################################################################

variable "common_tags" {

  description = "Common resource tags."

  type = map(string)

}

###############################################################################
# CloudWatch Log Retention
###############################################################################

variable "log_retention_days" {

  description = "CloudWatch log retention period."

  type = number

  default = 7

}