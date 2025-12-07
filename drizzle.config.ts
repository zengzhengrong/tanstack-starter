import { config as dotEnvConfig } from 'dotenv'
import type { Config } from 'drizzle-kit'
import { defineConfig } from 'drizzle-kit'
import { ENVIRONMENTS } from '@/constants/env.constants'

dotEnvConfig({ quiet: true })

const config = defineConfig({
  breakpoints: false,
  dialect: 'postgresql',
  out: './src/lib/drizzle',
  schema: './src/lib/database/schema',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
    ssl: { rejectUnauthorized: false }
  }
}) satisfies Config

export { config as default }
