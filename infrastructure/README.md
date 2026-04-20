# Infrastructure

Terraform for Azure lives here.

```text
infrastructure/
  terraform/
    main.tf
    variables.tf
    outputs.tf
    terraform.tfvars
    terraform.tfvars.example
```

Current Terraform creates:

- Resource group
- Storage account
- Key Vault

Usage:

```bash
cd infrastructure/terraform
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform plan
```

Do not commit `terraform.tfvars`.
