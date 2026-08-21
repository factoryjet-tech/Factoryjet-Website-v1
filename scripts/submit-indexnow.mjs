#!/usr/bin/env node

/**
 * submit-indexnow.mjs
 * 
 * Submits all factoryjet.com URLs (or specified URLs) to IndexNow endpoints
 * (api.indexnow.org, www.bing.com, yandex.com).
 * 
 * Usage:
 *   node scripts/submit-indexnow.mjs                # Submits all 244+ URLs on the site
 *   node scripts/submit-indexnow.mjs --recent       # Submits top recent priority URLs
 *   node scripts/submit-indexnow.mjs <url1> <url2> # Submits specific URLs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const HOST = 'factoryjet.com';
const SITE_URL = `https://${HOST}`;
const INDEXNOW_KEY = 'b4a2f89c67d14e359a72e8105c3d4f9b';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

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

async function submitToIndexNow(urlsToSubmit) {
  console.log(`\n🚀 [IndexNow] Preparing submission for ${urlsToSubmit.length} URLs on ${HOST}...`);
  console.log(`🔑 Key: ${INDEXNOW_KEY}`);
  console.log(`📍 Key Location: ${KEY_LOCATION}\n`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlsToSubmit,
  };

  const payloadJson = JSON.stringify(payload, null, 2);

  for (const endpoint of ENDPOINTS) {
    const endpointName = new URL(endpoint).hostname;
    process.stdout.write(`Submitting to ${endpointName}... `);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: payloadJson,
      });

      if (response.status === 200 || response.status === 202) {
        console.log(`✅ SUCCESS (${response.status} ${response.statusText || 'Accepted'})`);
      } else {
        const errorText = await response.text();
        console.log(`⚠️ Status: ${response.status} ${response.statusText} — ${errorText}`);
      }
    } catch (err) {
      console.log(`❌ ERROR: ${err.message}`);
    }
  }

  console.log(`\n✨ IndexNow submission batch finished.\n`);
}

async function main() {
  const args = process.argv.slice(2);
  let urls = [];

  if (args.length > 0 && !args[0].startsWith('--')) {
    urls = args.map(u => u.startsWith('http') ? u : `${SITE_URL}${u.startsWith('/') ? '' : '/'}${u}`);
  } else {
    urls = getAllSiteUrls();
  }

  console.log(`Found ${urls.length} target URLs.`);
  if (urls.length <= 10) {
    console.log('URLs:', urls);
  } else {
    console.log(`First 5 URLs:\n${urls.slice(0, 5).map(u => `  - ${u}`).join('\n')}`);
    console.log(`... and ${urls.length - 5} more.`);
  }

  await submitToIndexNow(urls);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
