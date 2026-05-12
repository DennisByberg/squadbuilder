import { defineConfig } from "prisma/config";

// Used by Prisma CLI commands (db push, migrate, etc.)
export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
