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

/**
 * Hubs build city links as template literals: href={`/${c.slug}/seo`}. A literal
 * string search for '/colorado-springs/seo' finds nothing and reports a false
 * orphan, which it did on the first run of this script. So for a multi-segment
 * path, also look for its slug quoted in a data array alongside the matching
 * template pattern.
 */
function templateLiteralCovered(href) {
  const segs = href.split('/').filter(Boolean);
  if (segs.length < 2) return null;
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Both shapes occur in this codebase and BOTH have caused a false orphan report:
  //   slug-first: href={`/${c.slug}/seo`}        (/services/seo hub)
  //   slug-last:  href={`/web-design/${c.slug}`} (/web-design hub)
  const candidates = [
    // slug first, rest is the fixed tail
    { slug: segs[0], pattern: new RegExp('`/\\$\\{[^}]+\\}/' + esc(segs.slice(1).join('/')) + '`') },
    // slug last, everything before it is the fixed head
    { slug: segs[segs.length - 1], pattern: new RegExp('`/' + esc(segs.slice(0, -1).join('/')) + '/\\$\\{[^}]+\\}`') },
  ];

  for (const f of files) {
    if (isChrome(f.path) || NOT_A_LINK.test(f.path)) continue;
    for (const c of candidates) {
      if (!c.pattern.test(f.text)) continue;
      // The array supplying the slug may be imported, so accept a match in this file
      // OR in any non-chrome file (the data modules under src/data).
      const slugQuoted = new RegExp(`slug:\\s*['"]${esc(c.slug)}['"]`);
      if (slugQuoted.test(f.text)) return f.path;
      const inData = files.find((d) => !isChrome(d.path) && slugQuoted.test(d.text));
      if (inData) return `${f.path} (slugs from ${inData.path})`;
    }
  }
  return null;
}

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
    if (body > 0) continue;
    const viaTemplate = templateLiteralCovered(href);
    if (viaTemplate) continue;
    risky.push(href);
  }
  console.log(`Linked ONLY from site chrome (would orphan if cut): ${risky.length}`);
  risky.forEach((h) => console.log('  ⚠️  ' + h));
  const safe = links.length - risky.length;
  console.log(`Linked from real page content elsewhere (safe to cut): ${safe}`);
  return risky;
}

report('US footer', usLinks);
report('India/global footer (defined in SiteFooter.tsx)', inLinks);

// ── Regression guard: links REMOVED from the footer in the 2026-08-03 slim-down.
// The report above only covers links still IN the footer. These are the ones taken
// out; each must have a real inbound link elsewhere or it is orphaned.
const REMOVED_2026_08_03 = [
  '/colorado-springs/seo', '/austin/web-design', '/miami/web-design', '/denver/web-design',
  '/nashville/web-design', '/new-york/web-design', '/charlotte/web-design', '/raleigh/web-design',
  '/tampa/web-design', '/portland/web-design', '/cleveland/web-design', '/austin/seo',
  '/charlotte/seo', '/cleveland/seo', '/nashville/seo', '/boise/seo', '/pricing',
  '/services/website-redesign', '/services/web-application-development',
  '/services/small-business-website-design', '/services/law-firm-website-design',
  '/services/real-estate-website-design', '/services/ecommerce-growth-agency',
  '/services/tiktok-shop-agency', '/services/walmart-marketplace-agency',
  '/services/shopify-seo', '/services/local-seo', '/services/small-business-seo',
  '/services/seo-audit', '/services/healthcare-seo', '/services/dental-seo',
  '/services/law-firm-seo', '/services/ai-chatbot-development', '/services/ai-automation',
  '/services/ai-integration-services', '/services/ai-workflow-automation',
  '/web-design/mumbai', '/web-design/delhi', '/web-design/bangalore', '/web-design/chennai',
  '/web-design/hyderabad', '/web-design/pune', '/web-design/ahmedabad', '/web-design/kolkata',
  '/web-design/jaipur', '/web-design/surat', '/web-design/indore', '/web-design/kochi',
  '/services/ecommerce-development/mumbai', '/services/ecommerce-development/delhi',
  '/services/ecommerce-development/bangalore', '/services/ecommerce-development/hyderabad',
  '/services/ecommerce-development/chennai', '/services/ecommerce-development/pune',
  '/services/ecommerce-development/ahmedabad', '/services/ecommerce-development/kolkata',
  '/services/ecommerce-development/surat', '/services/ecommerce-development/jaipur',
  '/services/ecommerce-development/kochi', '/services/ecommerce-development/lucknow',
  '/services/ecommerce-development/chandigarh',
];

console.log(`\n=== Removed-link regression guard (${REMOVED_2026_08_03.length} paths) ===`);
const stillOrphaned = REMOVED_2026_08_03.filter((h) => {
  const { body } = inboundCount(h);
  return body === 0 && !templateLiteralCovered(h);
});
if (stillOrphaned.length) {
  stillOrphaned.forEach((h) => console.log('  ⚠️  ORPHANED: ' + h));
  process.exitCode = 1;
} else {
  console.log('  ✅ all removed links still reachable from real page content');
}
