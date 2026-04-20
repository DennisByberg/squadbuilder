# ADR-001: Terraform for Infrastructure as Code

Status: Accepted  
Date: 2026-04-20  
Decision Makers: Dennis Byberg

## Context

The project needs a repeatable way to create and remove Azure infrastructure without doing everything manually in the Azure portal.

## Decision

We will use Terraform for infrastructure as code.

## Why

- Infrastructure changes can be version controlled
- `terraform plan` shows changes before they are applied
- Terraform works well with Azure
- The setup can stay small while the project is small

## Alternatives

No alternatives were seriously considered. Terraform was the natural choice for this project.

## Consequences

- Easier to recreate and destroy infrastructure
- Requires learning basic Terraform
- Azure resources can create costs if added without approval

## References

- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [AzureRM Provider Documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
