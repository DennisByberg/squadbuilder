# Azure subscription where Terraform should create resources.
variable "subscription_id" {
  description = "Azure subscription ID where resources will be created."
  type        = string
}

# Azure region. Defaults to Sweden Central.
variable "location" {
  description = "Azure region for resources."
  type        = string
  default     = "swedencentral"
}
