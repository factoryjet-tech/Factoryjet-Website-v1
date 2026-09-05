#!/usr/bin/env node

/**
 * submit-bing-api.mjs
 * 
 * Directly submits all factoryjet.com URLs to the Microsoft Bing Webmaster Tools API
 * using the official SubmitUrlbatch endpoint.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const HOST = 'factoryjet.com';
const SITE_URL = `https://${HOST}`;
const BING_API_KEY = process.env.BING_API_KEY || '0f269ea2ff264660af656e5358955f52';

const BING_QUOTA_ENDPOINT = `https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl=${encodeURIComponent(SITE_URL)}&apikey=${BING_API_KEY}`;
const BING_SUBMIT_BATCH_ENDPOINT = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${BING_API_KEY}`;

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

async function checkQuota() {
  try {
    const res = await fetch(BING_QUOTA_ENDPOINT);
    if (res.ok) {
      const data = await res.json();
      console.log('📊 Bing API Quota Status:', JSON.stringify(data.d || data));
      return data.d || data;
    } else {
      console.log(`⚠️ Quota check returned status ${res.status}: ${await res.text()}`);
    }
  } catch (err) {
    console.log(`⚠️ Quota check failed: ${err.message}`);
  }
  return null;
}

async function submitBatch(urls) {
  console.log(`\n🚀 Submitting ${urls.length} URLs to Bing Webmaster Tools API...`);

  const payload = {
    siteUrl: SITE_URL,
    urlList: urls,
  };

  try {
    const res = await fetch(BING_SUBMIT_BATCH_ENDPOINT, {
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
        console.log(`Response: ${text}`);
      }
    } else {
      const errorText = await res.text();
      console.log(`❌ Error: Status ${res.status} ${res.statusText}`);
      console.log(`Response: ${errorText}`);
    }
  } catch (err) {
    console.error(`❌ Network error:`, err);
  }
}

async function main() {
  console.log(`\n🔗 Connecting to Bing Webmaster Tools API for site: ${SITE_URL}...`);
  await checkQuota();

  const cliUrls = process.argv.slice(2);
  const urls = cliUrls.length > 0 ? cliUrls : getAllSiteUrls();
  console.log(`Submitting ${urls.length} URLs for ${HOST}.`);

  await submitBatch(urls);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
