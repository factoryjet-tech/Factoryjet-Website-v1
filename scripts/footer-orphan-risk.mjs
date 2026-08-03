#!/usr/bin/env node
/**
 * Which footer links are the ONLY inbound internal link to their target?
 *
 * Shrinking the footer is safe for a target that is linked from elsewhere, and
 * creates an orphan for a target that is not. The India footer columns were added
 * specifically to de-orphan the /services/ecommerce-development/{city} pages, so
 * this has to be measured, not assumed.
 *
 * Audit traps this deliberately handles (learned the hard way, see memory
 * factoryjet-internal-linking):
 *   - links live in `href:` / `linkHref:` data arrays, not just JSX
 *   - template literals build hrefs dynamically
 *   - 22 blog posts are defined INLINE in posts.tsx
 * So it counts raw occurrences of the path string anywhere in src/, then
 * subtracts the footer/header data files to get "inbound excluding chrome".
 *
 * Usage: node scripts/footer-orphan-risk.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const SRC = join(ROOT, 'src');

// Files that ARE the site chrome. A link that appears only here is footer-only.
const CHROME = [
  'src/data/usFooterColumns.ts',
  'src/data/auFooterColumns.ts',
  'src/components/v2/SiteFooter.tsx',
  'src/components/v2/SiteHeader.tsx',
];

/**
 * Sitemaps and hreflang maps are NOT internal links. They declare a URL exists;
 * they pass no equity and give no in-page crawl path. Counting them made every
 * US footer link look safe on the first run, including /colorado-springs/seo,
 * whose only other reference is the sitemap. Excluded deliberately.
 */
const NOT_A_LINK = /sitemap|hreflangMap|redirects|robots/i;

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(tsx?|mdx?)$/.test(e)) out.push(full);
  }
  return out;
}

const files = walk(SRC).map((f) => ({ path: relative(ROOT, f), text: readFileSync(f, 'utf8') }));
const isChrome = (p) => CHROME.includes(p);

// Pull the footer link sets straight from source so this stays in sync.
const footerSrc = readFileSync(join(ROOT, 'src/data/usFooterColumns.ts'), 'utf8');
const inFooterSrc = readFileSync(join(ROOT, 'src/components/v2/SiteFooter.tsx'), 'utf8');

function extractLinks(src) {
  return [...src.matchAll(/href:\s*'([^']+)'/g)].map((m) => m[1]);
}
const usLinks = [...new Set(extractLinks(footerSrc))];
const inLinks = [...new Set(extractLinks(inFooterSrc))];

function inboundCount(href) {
  // Match the path as a quoted string value, so /seo does not match /seo/mumbai.
  const needle = new RegExp(`['"\`]${href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"\`]`);
  let chrome = 0, body = 0;
  const sources = [];
  for (const f of files) {
    if (!needle.test(f.text)) continue;
    if (isChrome(f.path)) { chrome++; continue; }
    if (NOT_A_LINK.test(f.path)) continue; // declared, not linked
    body++;
    sources.push(f.path);
  }
  return { chrome, body, sources };
}

function report(title, links) {
  console.log(`\n=== ${title} (${links.length} links) ===`);
  const risky = [];
  for (const href of links) {
    const { body } = inboundCount(href);
    if (body === 0) risky.push(href);
  }
  console.log(`Linked ONLY from site chrome (would orphan if cut): ${risky.length}`);
  risky.forEach((h) => console.log('  ⚠️  ' + h));
  const safe = links.length - risky.length;
  console.log(`Linked from real page content elsewhere (safe to cut): ${safe}`);
  return risky;
}

report('US footer', usLinks);
report('India/global footer (defined in SiteFooter.tsx)', inLinks);
