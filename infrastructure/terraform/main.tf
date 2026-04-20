# Terraform settings and provider versions used by this project.
terraform {
  required_version = ">= 1.6.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }

    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }
}

# Azure provider configuration. The subscription ID comes from variables.tf/tfvars.
provider "azurerm" {
  subscription_id = var.subscription_id

  features {}
}

# Adds a short random suffix so Azure resource names are globally unique.
resource "random_string" "suffix" {
  length  = 6
  lower   = true
  numeric = true
  special = false
  upper   = false
}

# Shared names and tags reused by the resources below.
locals {
  project_name = "squadbuilder"
  name_prefix  = "squadbuilder"
  tags = {
    project    = local.project_name
    managed_by = "terraform"
  }
}

# Resource group that contains all Azure resources for the app.
resource "azurerm_resource_group" "main" {
  name     = "rg-${local.name_prefix}"
  location = var.location
  tags     = local.tags
}

# Storage account for files or other app storage needs later.
resource "azurerm_storage_account" "main" {
  name                     = substr("squadbuilder${random_string.suffix.result}", 0, 24)
  resource_group_name      = azurerm_resource_group.main.name
  location                 = azurerm_resource_group.main.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  min_tls_version          = "TLS1_2"
  tags                     = local.tags
}

# Key Vault for secrets such as connection strings and API keys.
resource "azurerm_key_vault" "main" {
  name                       = "squad-kv-${random_string.suffix.result}"
  location                   = azurerm_resource_group.main.location
  resource_group_name        = azurerm_resource_group.main.name
  tenant_id                  = data.azurerm_client_config.current.tenant_id
  sku_name                   = "standard"
  soft_delete_retention_days = 7
  purge_protection_enabled   = false
  rbac_authorization_enabled = true
  tags                       = local.tags
}

# Reads information about the currently logged-in Azure account.
data "azurerm_client_config" "current" {}
