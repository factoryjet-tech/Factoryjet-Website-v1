#!/usr/bin/env node
/**
 * Guard against the stale-404 index trap.
 *
 * If a city-links component lists a slug whose page does not exist, we ship an internal link
 * to a 404. Google caches that 404 as a verdict and only a manual GSC recrawl clears it, so
 * the cost of getting this wrong is weeks, not minutes. This fails loudly instead.
 *
 * Checks every ALL_CITIES list against src/app/<slug>/<service>/page.tsx on disk, and also
 * reports pages that EXIST but are missing from the list (orphans that nothing links to).
 *
 * Run before every commit that adds a city page.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const COMPONENTS = [
  { file: 'src/components/v2/WebDesignCityLinksUS.tsx', service: 'web-design' },
  { file: 'src/components/v2/SeoCityLinksUS.tsx', service: 'seo' },
  { file: 'src/components/v2/EcommerceCityLinksUS.tsx', service: 'ecommerce-development' },
];

let broken = 0;
let orphans = 0;

for (const { file, service } of COMPONENTS) {
  const abs = path.join(ROOT, file);
  if (!fs.existsSync(abs)) {
    console.log(`  skip  ${file} (not found)`);
    continue;
  }
  const src = fs.readFileSync(abs, 'utf8');
  const listed = [...src.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((m) => m[1]);

  const missing = listed.filter(
    (slug) => !fs.existsSync(path.join(ROOT, 'src/app', slug, service, 'page.tsx')),
  );

  // the reverse direction: a page on disk that no component links to
  const onDisk = fs
    .readdirSync(path.join(ROOT, 'src/app'), { withFileTypes: true })
    // 'services', 'uk', 'uae', 'au', 'in' are section roots, not US cities. They legitimately
    // hold a <service>/page.tsx of their own and must not be reported as unlinked city pages.
    .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('sitemap'))
    .filter((d) => !['services', 'uk', 'uae', 'au', 'in', 'blog', 'dev'].includes(d.name))
    .map((d) => d.name)
    .filter((slug) => fs.existsSync(path.join(ROOT, 'src/app', slug, service, 'page.tsx')));
  const unlisted = onDisk.filter((s) => !listed.includes(s));

  console.log(`\n${file}  [${service}]`);
  console.log(`  listed: ${listed.length}   on disk: ${onDisk.length}`);
  if (missing.length) {
    broken += missing.length;
    console.log(`  ✗ LINKS TO NONEXISTENT PAGES (will 404): ${missing.join(', ')}`);
  }
  if (unlisted.length) {
    orphans += unlisted.length;
    console.log(`  ! page exists but nothing links to it: ${unlisted.join(', ')}`);
  }
  if (!missing.length && !unlisted.length) console.log('  ✅ consistent');
}

console.log('');
if (broken) {
  console.error(`FAILED: ${broken} internal link(s) point at pages that do not exist.`);
  process.exit(1);
}
console.log(`✅ no broken city links${orphans ? `  (${orphans} orphan page(s) to consider linking)` : ''}`);
