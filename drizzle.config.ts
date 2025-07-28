// drizzle.config.ts
import 'dotenv/config'; // This line needs to be here to load .env variables
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!, // The '!' non-null assertion is fine here if you're sure it's set
  },
});