import { existsSync, readFileSync } from 'node:fs';
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

const ANTHROPIC_ENV_PATH = join(homedir(), '.factoryjet', 'anthropic.env');
const RUNWARE_ENV_PATH = join(homedir(), '.factoryjet', 'runware.env');
const TAVILY_ENV_PATH = join(homedir(), '.factoryjet', 'tavily.env');

/**
 * Best-effort load of a KEY=VALUE-per-line env file under ~/.factoryjet/.
 * Live process.env values win — never overwrite something the caller set.
 * Mirrors the Firebase admin JSON convention: secrets live outside the repo.
 */
function loadEnvFile(path: string): void {
  if (!existsSync(path)) return;
  const raw = readFileSync(path, 'utf-8');
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(ANTHROPIC_ENV_PATH);
loadEnvFile(RUNWARE_ENV_PATH);
loadEnvFile(TAVILY_ENV_PATH);

/**
 * Clear empty-string optional env vars so zod's `.string().min(1).optional()`
 * treats "absent" and "set-to-empty" identically. Some shells inherit blank
 * values from parent processes.
 */
const OPTIONAL_KEYS = [
  'ANTHROPIC_API_KEY',
  'GOOGLE_ADS_DEVELOPER_TOKEN',
  'GOOGLE_ADS_CLIENT_ID',
  'GOOGLE_ADS_CLIENT_SECRET',
  'GOOGLE_ADS_REFRESH_TOKEN',
  'KEYWORDS_EVERYWHERE_API_KEY',
  'RUNWARE_API_KEY',
  'TAVILY_API_KEY',
  'KIE_API_KEY',
];
for (const k of OPTIONAL_KEYS) {
  if (process.env[k] === '') delete process.env[k];
}

const envSchema = z.object({
  GOOGLE_APPLICATION_CREDENTIALS: z
    .string()
    .min(1)
    .default(DEFAULT_CREDENTIALS_PATH),
  FIREBASE_PROJECT_ID: z.string().min(1).default('factoryjet-pipeline'),

  // Anthropic (city enrichment + future LLM calls). Optional so dry-run works.
  ANTHROPIC_API_KEY: z.string().min(1).optional(),

  // Future integrations — optional placeholders.
  GOOGLE_ADS_DEVELOPER_TOKEN: z.string().optional(),
  GOOGLE_ADS_CLIENT_ID: z.string().optional(),
  GOOGLE_ADS_CLIENT_SECRET: z.string().optional(),
  GOOGLE_ADS_REFRESH_TOKEN: z.string().optional(),
  KEYWORDS_EVERYWHERE_API_KEY: z.string().optional(),
  RUNWARE_API_KEY: z.string().optional(),
  TAVILY_API_KEY: z.string().optional(),
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

/**
 * Throws a clear error if ANTHROPIC_API_KEY is unset. Runner uses this; dry-run
 * paths must avoid it. Centralizes the failure message so callers can rely on
 * a single hint about ~/.factoryjet/anthropic.env.
 */
export function requireAnthropicKey(): string {
  const key = env.ANTHROPIC_API_KEY;
  if (!key) {
    throw new Error(
      `[env] ANTHROPIC_API_KEY is not set. Either export it in the live ` +
        `environment or place "ANTHROPIC_API_KEY=sk-ant-..." in ${ANTHROPIC_ENV_PATH}.`,
    );
  }
  return key;
}

/**
 * Throws a clear error if RUNWARE_API_KEY is unset. Used by the Runware
 * text/image inference clients introduced in Phase A1.1 of the LLM
 * provider migration.
 */
export function requireRunwareKey(): string {
  const key = env.RUNWARE_API_KEY;
  if (!key) {
    throw new Error(
      `[env] RUNWARE_API_KEY is not set. Either export it in the live ` +
        `environment or place "RUNWARE_API_KEY=..." in ${RUNWARE_ENV_PATH}.`,
    );
  }
  return key;
}

/**
 * Throws a clear error if TAVILY_API_KEY is unset. Used by the Tavily
 * web-search client that replaces Anthropic's web_search tool in the
 * Step 5 enrichment migration.
 */
export function requireTavilyKey(): string {
  const key = env.TAVILY_API_KEY;
  if (!key) {
    throw new Error(
      `[env] TAVILY_API_KEY is not set. Either export it in the live ` +
        `environment or place "TAVILY_API_KEY=tvly-..." in ${TAVILY_ENV_PATH}.`,
    );
  }
  return key;
}
