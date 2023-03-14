resource "aws_security_group" "ecs_task_sg" {
  vpc_id = module.network.vpc_id
  name   = "ecs-task-sg"

  ingress = [{

    description     = "value"
    from_port       = 3000
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs_alb_sg.id]
    to_port         = 3000
  }]
  egress = [{
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = 0
    protocol    = "-1"
    to_port     = 0
  }]
}

resource "aws_security_group" "ecs_alb_sg" {
  vpc_id = module.network.vpc_id
  name   = "ecs-alb-sg"

  ingress = [{
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = 80
    protocol    = "tcp"
    to_port     = 80
    },
    {
      cidr_blocks = ["0.0.0.0/0"]
      from_port   = 443
      protocol    = "tcp"
      to_port     = 443
  }]
  egress = [{
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = 0
    protocol    = "-1"
    to_port     = 0
  }]
}


