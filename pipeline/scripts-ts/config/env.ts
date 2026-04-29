import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { config as loadDotenv } from 'dotenv';
import { z } from 'zod';

loadDotenv();

const DEFAULT_CREDENTIALS_PATH = join(
  homedir(),
  '.factoryjet',
  'firebase-admin-pipeline.json',
);

const envSchema = z.object({
  GOOGLE_APPLICATION_CREDENTIALS: z
    .string()
    .min(1)
    .default(DEFAULT_CREDENTIALS_PATH),
  FIREBASE_PROJECT_ID: z.string().min(1).default('factoryjet-pipeline'),

  // Future integrations — optional placeholders.
  GOOGLE_ADS_DEVELOPER_TOKEN: z.string().optional(),
  GOOGLE_ADS_CLIENT_ID: z.string().optional(),
  GOOGLE_ADS_CLIENT_SECRET: z.string().optional(),
  GOOGLE_ADS_REFRESH_TOKEN: z.string().optional(),
  KEYWORDS_EVERYWHERE_API_KEY: z.string().optional(),
  RUNWARE_API_KEY: z.string().optional(),
  KIE_API_KEY: z.string().optional(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('[env] Invalid configuration:');
  console.error(JSON.stringify(parsed.error.flatten().fieldErrors, null, 2));
  process.exit(1);
}

if (!existsSync(parsed.data.GOOGLE_APPLICATION_CREDENTIALS)) {
  console.error(
    `[env] Service account file not found at: ${parsed.data.GOOGLE_APPLICATION_CREDENTIALS}`,
  );
  console.error(
    `[env] Either set GOOGLE_APPLICATION_CREDENTIALS env var or place the file at the default path.`,
  );
  process.exit(1);
}

export const env = parsed.data;
export type Env = typeof env;
