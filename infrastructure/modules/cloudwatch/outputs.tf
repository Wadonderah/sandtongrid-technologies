###############################################################################
# CloudWatch Log Groups
###############################################################################

output "log_group_names" {

  description = "CloudWatch Log Group names."

  value = {

    for k, v in aws_cloudwatch_log_group.logs :

    k => v.name

  }

}

###############################################################################
# CloudWatch Log Group ARNs
###############################################################################

output "log_group_arns" {

  description = "CloudWatch Log Group ARNs."

  value = {

    for k, v in aws_cloudwatch_log_group.logs :

    k => v.arn

  }

}