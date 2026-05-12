# Branch Protection

This repository uses GitHub rulesets to protect the two main long-lived branches: `main` and `dev`.

## Why We Protect Branches

`main` and `dev` should always exist. They are the stable branches that other work can be based on.

Protecting them helps prevent mistakes such as deleting a branch, force pushing over history or sending changes directly into an important branch without a pull request.

## How It Is Set Up

The protection is handled in GitHub with an active branch ruleset.

The ruleset targets:

- `main`
- `dev`

The enabled rules are:

- `Restrict deletions`
- `Block force pushes`
- `Require a pull request before merging`
- `Require status checks to pass` — the `Frontend Linting` workflow must pass before merging

## Required Status Checks

The `Frontend Linting` workflow (`.github/workflows/frontend-lint.yml`) runs two parallel jobs on every pull request targeting `main` or `dev`:

- **Lint & Type Check** — runs ESLint and TypeScript type checking
- **Build** — verifies the app compiles successfully for production

Both jobs must pass before a pull request can be merged.

## What This Means

In practice, `main` and `dev` should not be deleted, rewritten with force push or updated directly. Changes should go through a pull request so the history stays clear and easier to follow. A pull request cannot be merged if linting, type checking, or the production build fails.
