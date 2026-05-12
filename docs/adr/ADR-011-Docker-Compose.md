# ADR-011: Docker Compose for Local Development

Status: Accepted  
Date: 2026-05-12  
Decision Makers: Dennis Byberg

## Context

Developers need a local PostgreSQL instance to run the app. Requiring a manual installation of PostgreSQL creates inconsistencies between machines and adds setup friction.

## Decision

We will use Docker Compose to run PostgreSQL locally during development.

## Why

- One command to start the database: `docker compose up -d`
- Same PostgreSQL version and config across all machines
- No permanent installation required — the container is isolated and easy to reset
- Standard approach for local service dependencies

## Alternatives

- **Manual PostgreSQL install** — works but differs between machines and OS versions
- **Neon / Supabase free tier** — cloud database works but requires internet and account setup just to run locally
- **SQLite for local, PostgreSQL in prod** — avoids Docker but risks subtle differences between environments

## Consequences

- Docker must be installed on the developer's machine
- Start the container with `docker compose up -d` before running any `db:` commands
- Database data persists in a Docker volume — run `docker compose down -v` to fully reset it

## References

- [Docker Compose Documentation](https://docs.docker.com/compose/)
