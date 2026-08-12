#!/usr/bin/env node
/**
 * One-off codemod: wire <SeoCityLinksUS /> into every US /{city}/seo page.
 *
 * Why: there was no SEO equivalent of WebDesignCityLinksUS, so the 24 US SEO city pages
 * hand-rolled their sibling links and did it badly. denver/seo linked to ZERO siblings,
 * tampa/seo to one. Internal linking is one of the few levers we control while domain
 * authority is the binding constraint, so this gives every SEO city page inbound links
 * from the other 23 in one consistent block.
 *
 * Codemod discipline applied (learned the hard way on previous sweeps):
 *   - anchor on a verified-unique token (</main>, confirmed exactly 1 per file) instead of
 *     a loose regex that could match inside a string or comment
 *   - insert the import directly after the SiteFooter import, also verified unique
 *   - idempotent: skips any file that already references SeoCityLinksUS
 *   - VERIFY THE RESULT, not the intent: re-reads each file after writing and confirms
 *     the import, the JSX tag, the correct currentCity, and unchanged </main> count
 *
 * Usage: node scripts/wire-seo-city-links.mjs [--dry]
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const APP = path.join(ROOT, 'src/app');
const DRY = process.argv.includes('--dry');

const IMPORT_LINE = "import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';";
const SITEFOOTER_IMPORT = /^import SiteFooter from '@\/components\/v2\/SiteFooter';$/m;

// Sections roots that own a /seo route but are not US cities.
const NOT_A_CITY = new Set(['uk', 'uae', 'au', 'in', 'services', 'blog', 'dev']);

const cities = fs
  .readdirSync(APP, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !NOT_A_CITY.has(d.name))
  .map((d) => d.name)
  .filter((c) => fs.existsSync(path.join(APP, c, 'seo', 'page.tsx')))
  .sort();

let changed = 0, skipped = 0, failed = 0;

for (const city of cities) {
  const file = path.join(APP, city, 'seo', 'page.tsx');
  const before = fs.readFileSync(file, 'utf8');

  if (before.includes('SeoCityLinksUS')) {
    console.log(`  skip   ${city} (already wired)`);
    skipped++;
    continue;
  }

  // Preconditions. Bail on this file rather than guess if either anchor is not unique.
  const mainCount = (before.match(/<\/main>/g) || []).length;
  const importMatch = before.match(SITEFOOTER_IMPORT);
  if (mainCount !== 1 || !importMatch) {
    console.log(`  FAIL   ${city} (</main> x${mainCount}, SiteFooter import ${importMatch ? 'ok' : 'missing'})`);
    failed++;
    continue;
  }

  // Insert import immediately after the SiteFooter import.
  let after = before.replace(SITEFOOTER_IMPORT, (m) => `${m}\n${IMPORT_LINE}`);

  // Insert the component as the last thing inside <main>, matching how
  // WebDesignCityLinksUS sits in the body on the web-design pages.
  after = after.replace(/([ \t]*)<\/main>/, (m, indent) =>
    `${indent}  <SeoCityLinksUS currentCity="${city}" />\n${indent}</main>`);

  if (DRY) {
    console.log(`  [dry]  ${city}`);
    changed++;
    continue;
  }

  fs.writeFileSync(file, after);

  // VERIFY THE RESULT, not the intent.
  const written = fs.readFileSync(file, 'utf8');
  const ok =
    written.includes(IMPORT_LINE) &&
    written.includes(`<SeoCityLinksUS currentCity="${city}" />`) &&
    (written.match(/<\/main>/g) || []).length === 1 &&
    (written.match(/SeoCityLinksUS/g) || []).length === 3 && // import name, import path, usage
    written.length > before.length;

  if (!ok) {
    console.log(`  FAIL   ${city} (post-write verification failed, restoring)`);
    fs.writeFileSync(file, before);
    failed++;
    continue;
  }
  console.log(`  wired  ${city}`);
  changed++;
}

console.log(`\n${changed} wired, ${skipped} already done, ${failed} failed (of ${cities.length} US SEO city pages)`);
if (failed) process.exit(1);
