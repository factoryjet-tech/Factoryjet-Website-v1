#!/usr/bin/env node

/**
 * submit-bing-api.mjs
 *
 * Directly submits all factoryjet.com URLs to the Microsoft Bing Webmaster Tools API
 * using the official SubmitUrlbatch endpoint.
 *
 * API KEY: read from the environment only, as BING_WEBMASTER_API_KEY (the same name
 * pipeline/research/bing_webmaster.py uses). When the variable is not set, this
 * script loads pipeline/research/.env, which is git-ignored. The key must never be
 * written into this file (this repo is public) and is never printed.
 * Get or rotate it at Bing Webmaster Tools > Settings > API Access.
 *
 * Usage:
 *   npm run bing:submit                        # URLs scanned from the sitemap sources
 *   node scripts/submit-bing-api.mjs URL ...   # only the URLs given
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const HOST = 'factoryjet.com';
const SITE_URL = `https://${HOST}`;
const BING_API_BASE = 'https://ssl.bing.com/webmaster/api.svc/json';
const API_KEY_ENV = 'BING_WEBMASTER_API_KEY';
const ENV_FILE = path.join(ROOT_DIR, 'pipeline/research/.env');

// Copies KEY=VALUE lines from a .env file into process.env, without overwriting a
// variable that already has a value. Nothing read here is ever logged.
function loadEnvFile(file) {
  if (!fs.existsSync(file)) return;
  for (const raw of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const name = line.slice(0, eq).replace(/^export\s+/, '').trim();
    let value = line.slice(eq + 1).trim();
    if (value.length >= 2 && (value[0] === '"' || value[0] === "'") && value.endsWith(value[0])) {
      value = value.slice(1, -1);
    }
    if (name && !process.env[name]) process.env[name] = value;
  }
}

function getApiKey() {
  if (!process.env[API_KEY_ENV]) loadEnvFile(ENV_FILE);
  const key = (process.env[API_KEY_ENV] || '').trim();
  if (!key) {
    console.error(`Missing ${API_KEY_ENV}. Nothing was sent to Bing.`);
    console.error(`Fix: export ${API_KEY_ENV}=<your key> in your shell, or add that line to ${path.relative(ROOT_DIR, ENV_FILE)} (git-ignored).`);
    console.error('Get the key at Bing Webmaster Tools > Settings > API Access. Never paste it into this script.');
    if (process.env.BING_API_KEY) {
      console.error(`BING_API_KEY is set but is no longer read. Rename it to ${API_KEY_ENV}.`);
    }
    process.exit(1);
  }
  return key;
}

// Bing takes the key as a query parameter, so any text that could echo a request URL
// goes through this before it is printed.
function redact(text, apiKey) {
  if (text === undefined || text === null) return '';
  const s = String(text);
  return apiKey ? s.split(apiKey).join('[redacted]') : s;
}

// Extract all routes from sitemap files and blog directory
function getAllSiteUrls() {
  const urls = new Set();
  urls.add(`${SITE_URL}/`);

  // Scan sitemap files in src/app/
  const sitemapDirs = fs.readdirSync(path.join(ROOT_DIR, 'src/app')).filter(d => d.startsWith('sitemap'));
  for (const dir of sitemapDirs) {
    const sitemapPath = path.join(ROOT_DIR, 'src/app', dir, 'sitemap.ts');
    if (fs.existsSync(sitemapPath)) {
      const content = fs.readFileSync(sitemapPath, 'utf8');
      const matches = content.matchAll(/path:\s*['"]([^'"]+)['"]/g);
      for (const m of matches) {
        const p = m[1].trim();
        urls.add(p.startsWith('/') ? `${SITE_URL}${p}` : `${SITE_URL}/${p}`);
      }
    }
  }

  // Scan blog posts in src/lib/legacy-pages/Blog/posts/
  const blogDir = path.join(ROOT_DIR, 'src/lib/legacy-pages/Blog/posts');
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx') && f !== 'index.tsx');
    for (const file of files) {
      const slug = file.replace('.tsx', '');
      urls.add(`${SITE_URL}/blog/${slug}`);
    }
  }

  return Array.from(urls).sort();
}

async function checkQuota(apiKey) {
  const quotaEndpoint = `${BING_API_BASE}/GetUrlSubmissionQuota?siteUrl=${encodeURIComponent(SITE_URL)}&apikey=${encodeURIComponent(apiKey)}`;
  try {
    const res = await fetch(quotaEndpoint);
    if (res.ok) {
      const data = await res.json();
      console.log('📊 Bing API Quota Status:', redact(JSON.stringify(data.d || data), apiKey));
      return data.d || data;
    } else {
      console.log(`⚠️ Quota check returned status ${res.status}: ${redact(await res.text(), apiKey)}`);
    }
  } catch (err) {
    console.log(`⚠️ Quota check failed: ${redact(err.message, apiKey)}`);
  }
  return null;
}

async function submitBatch(urls, apiKey) {
  console.log(`\n🚀 Submitting ${urls.length} URLs to Bing Webmaster Tools API...`);

  const submitEndpoint = `${BING_API_BASE}/SubmitUrlbatch?apikey=${encodeURIComponent(apiKey)}`;
  const payload = {
    siteUrl: SITE_URL,
    urlList: urls,
  };

  try {
    const res = await fetch(submitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const text = await res.text();
      console.log(`✅ SUCCESS! Status: ${res.status} ${res.statusText}`);
      if (text) {
        console.log(`Response: ${redact(text, apiKey)}`);
      }
    } else {
      const errorText = await res.text();
      console.log(`❌ Error: Status ${res.status} ${res.statusText}`);
      console.log(`Response: ${redact(errorText, apiKey)}`);
    }
  } catch (err) {
    // Print only redacted messages, never the raw error object: a URL parse error
    // includes the full request URL, and that URL carries the key.
    const cause = err && err.cause && err.cause.message ? ` (${redact(err.cause.message, apiKey)})` : '';
    console.error(`❌ Network error: ${redact(err && err.message, apiKey)}${cause}`);
  }
}

async function main() {
  const apiKey = getApiKey();

  console.log(`\n🔗 Connecting to Bing Webmaster Tools API for site: ${SITE_URL}...`);
  await checkQuota(apiKey);

  const cliUrls = process.argv.slice(2);
  const urls = cliUrls.length > 0 ? cliUrls : getAllSiteUrls();
  console.log(`Submitting ${urls.length} URLs for ${HOST}.`);

  await submitBatch(urls, apiKey);
}

main().catch(err => {
  console.error('Fatal error:', redact(err && err.stack ? err.stack : err, process.env[API_KEY_ENV]));
  process.exit(1);
});
