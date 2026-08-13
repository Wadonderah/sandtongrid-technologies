variable "aws_region" {
  description = "AWS region where the OIDC bootstrap resources are managed."
  type        = string
  default     = "eu-west-1"
}

variable "project_name" {
  description = "Project name used for resource naming and tagging."
  type        = string
  default     = "Sandtongrid Technologies"
}

variable "environment" {
  description = "Environment associated with these bootstrap resources."
  type        = string
  default     = "bootstrap"
}

variable "github_repository" {
  description = "GitHub repository allowed to assume the production deployment role."
  type        = string
  default     = "Wadonderah/sandtongrid-technologies"
}