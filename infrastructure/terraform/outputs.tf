# Prints the created resource group name after terraform apply.
output "resource_group_name" {
  value = azurerm_resource_group.main.name
}

# Prints the created storage account name after terraform apply.
output "storage_account_name" {
  value = azurerm_storage_account.main.name
}

# Prints the created Key Vault name after terraform apply.
output "key_vault_name" {
  value = azurerm_key_vault.main.name
}
