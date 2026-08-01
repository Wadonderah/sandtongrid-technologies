###############################################################################
# Terraform Remote Backend
###############################################################################

terraform {

  backend "s3" {

    bucket         = "sandtongrid-tech-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "sandtongrid-tech-terraform-locks"
    encrypt        = true

  }

}