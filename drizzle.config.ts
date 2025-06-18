import { defineConfig } from 'drizzle-kit';
import { env } from '@/data/env/server';

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});
