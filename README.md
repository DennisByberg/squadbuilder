# Squadbuilder

Squadbuilder is an app for creating squads, lineups and team-related data.

## Project Structure

```text
squadbuilder/
  src/              Next.js app source code
  public/           Static assets
  infrastructure/   Azure infrastructure with Terraform
  scripts/          Local automation scripts
  docs/             Project documentation and ADRs
```

## Development

See [docs/commands.md](docs/commands.md).

## Branch Protection

The `main` and `dev` branches are protected with GitHub rulesets.

See [docs/branch-protection.md](docs/branch-protection.md).

## Architecture Decisions

Architecture Decision Records are stored in [docs/adr](docs/adr).
