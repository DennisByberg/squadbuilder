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

## Infrastructure

```bash
npm run deploy
```
Deploys Azure infrastructure with Terraform.

```bash
npm run destroy
```
Destroys Azure infrastructure with Terraform. Run this after testing to reduce Azure cost risk.
