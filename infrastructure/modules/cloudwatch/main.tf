###############################################################################
# CloudWatch Log Groups
###############################################################################

resource "aws_cloudwatch_log_group" "logs" {

  for_each = local.log_groups

  name = each.value

  retention_in_days = var.log_retention_days

  tags = merge(

    var.common_tags,

    {

      Name = each.value

    }

  )

}