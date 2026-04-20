# Commands

Common project commands.

## App

```bash
npm run dev
npm run lint
npm run build
```

- `npm run dev` starts the local Next.js app.
- `npm run lint` runs ESLint.
- `npm run build` builds the app.

## Infrastructure

```bash
npm run deploy
npm run destroy
```

- `npm run deploy` deploys Azure infrastructure with Terraform.
- `npm run destroy` destroys Azure infrastructure with Terraform.

Use `npm run destroy` after testing to reduce Azure cost risk.
