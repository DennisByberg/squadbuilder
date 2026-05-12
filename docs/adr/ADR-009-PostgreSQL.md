# ADR-009: PostgreSQL as Database

Status: Accepted  
Date: 2026-05-12  
Decision Makers: Dennis Byberg

## Context

The app needs a relational database to store players and squads. The data has clear relationships (squads contain players) and a fixed schema, making a relational database a natural fit.

## Decision

We will use PostgreSQL as the primary database.

## Why

- Mature and widely used — strong community and tooling support
- Handles relational data well (players, squads, lineups)
- Supported by Drizzle ORM and most cloud providers (Azure, Supabase, Neon, etc.)
- Free and open source

## Alternatives

- **MySQL** — equally capable, but PostgreSQL has better support in the JS/TS ecosystem
- **SQLite** — simpler setup but not suited for production deployments on the cloud
- **MongoDB** — document model is a poor fit for relational squad/player data

## Consequences

- Local development requires a running PostgreSQL instance (handled by Docker Compose)
- Schema changes are managed via Drizzle Kit

## References

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
