###############################################################################
# Local Values
###############################################################################

locals {

  common_tags = {

    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
    Owner       = "Wadondera"
    Repository  = "sandtongrid-technologies"

  }

}