# Commands

Common project commands.

## App

```bash
npm run dev
```
Starts the local Next.js development server with hot reload.

```bash
npm run lint
```
Runs ESLint and reports any code style or rule violations.

```bash
npm run typecheck
```
Runs TypeScript type checking without emitting files. Use this to catch type errors without doing a full build.

```bash
npm run build
```
Builds the app for production.

```bash
npm run start
```
Starts the production build locally. Requires `npm run build` to have been run first.

## Database

```bash
docker compose up -d
```
Starts the local PostgreSQL container. Run this before any `db:` commands.

```bash
npm run db:push
```
Pushes the Prisma schema to the database. Run after changing `prisma/schema.prisma`. Also regenerates the Prisma client automatically.

```bash
npm run db:generate
```
Regenerates the Prisma client from the schema. Only needed if you changed the schema without running `db:push`.

```bash
npm run db:seed
```
Seeds the database with initial player data from `scripts/seed.ts`.


## Infrastructure

```bash
npm run deploy
```
Deploys Azure infrastructure with Terraform.

```bash
npm run destroy
```
Destroys Azure infrastructure with Terraform. Run this after testing to reduce Azure cost risk.
