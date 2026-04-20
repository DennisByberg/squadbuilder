# ADR-002: Azure as Cloud Provider

Status: Accepted  
Date: 2026-04-20  
Decision Makers: Dennis Byberg

## Context

The project needs a cloud provider for future hosting, storage and secrets.

## Decision

We will use Azure as the cloud provider.

## Why

- Azure works well with Terraform
- It supports the services the app may need later
- Current setup can start small with Resource Group, Storage Account and Key Vault

## Alternatives

No alternatives were seriously considered. Azure was the natural choice for this project.

## Consequences

- One cloud provider to learn
- Good fit for future app hosting
- Azure services can create costs and must be approved first

## References

- [Azure Documentation](https://learn.microsoft.com/azure/)
- [Azure Pricing](https://azure.microsoft.com/pricing/)
