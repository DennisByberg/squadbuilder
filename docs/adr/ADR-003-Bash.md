# ADR-003: Bash Scripts for Infrastructure Commands

Status: Accepted  
Date: 2026-04-20  
Decision Makers: Dennis Byberg

## Context

The project needs simple commands for deploying and destroying Terraform infrastructure from the repo root.

## Decision

We will use small Bash scripts in `scripts/`.

## Why

- No extra tooling is needed
- Bash is enough for running Terraform commands
- `./scripts/deploy.sh` and `./scripts/destroy.sh` are easy to remember

## Alternatives

- Run Terraform manually
- TypeScript scripts

## Consequences

- Easier to deploy and destroy infrastructure
- Simple for this stage of the project
- Windows users may need Git Bash or WSL

## References

- [Scripts README](../../scripts/README.md)
