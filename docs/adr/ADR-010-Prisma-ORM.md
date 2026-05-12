# ADR-010: Prisma ORM

Status: Accepted  
Date: 2026-05-12  
Decision Makers: Dennis Byberg

## Context

The app needs a way to define the database schema and query the database from TypeScript. Writing raw SQL is verbose and loses type safety. An ORM bridges the gap.

## Decision

We will use Prisma as our ORM for schema definition, migrations, and database queries.

## Why

- Industry standard in the Next.js ecosystem — widely used in tutorials, courses, and production codebases
- Schema defined in `prisma/schema.prisma` — clear and readable format
- Generates a fully type-safe client with autocomplete for all queries
- `prisma db push` applies schema changes to the database
- Prisma Studio provides a browser UI for inspecting the database during development

## Alternatives

- **Drizzle ORM** — schema in TypeScript, lighter weight, but less common in job contexts
- **Kysely** — type-safe query builder but no schema/migration tooling
- **Raw SQL with `pg`** — maximum control but no type safety or migration support

## Consequences

- Schema lives in `prisma/schema.prisma` — all table changes go through Prisma
- Run `npm run db:push` after any schema change to apply it and regenerate the client
- The `db` instance in `src/db/index.ts` is used for all queries in the app
- A `globalForPrisma` pattern prevents multiple client instances during Next.js hot reload

## References

- [Prisma Documentation](https://www.prisma.io/docs)
