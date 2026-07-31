###############################################################################
# Terraform Backend Outputs
###############################################################################

output "terraform_state_bucket_name" {

  description = "Terraform remote state S3 bucket."

  value = aws_s3_bucket.terraform_state.bucket

}

output "terraform_lock_table_name" {

  description = "Terraform state lock DynamoDB table."

  value = aws_dynamodb_table.terraform_lock.name

}