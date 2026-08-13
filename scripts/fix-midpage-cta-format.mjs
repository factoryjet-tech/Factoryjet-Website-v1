#!/usr/bin/env node
/**
 * Cosmetic fixup for wire-midpage-cta.mjs.
 *
 * That codemod inserted its block without a trailing newline, so on 42 files the closing `/>`
 * ended up sharing a line with whatever followed the anchor, usually a JSX comment. It compiles
 * and renders identically, but it is sloppy and it makes every one of those diffs harder to read.
 *
 * Only touches lines where a self-closing `/>` is followed by more content on the same line,
 * and only inside a file that actually contains <MidPageCTA. Verifies byte-for-byte that the
 * only change is whitespace.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DRY = process.argv.includes('--dry');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === 'page.tsx') out.push(p);
  }
  return out;
}

let fixed = 0, failed = 0;
for (const file of walk(path.join(ROOT, 'src/app'))) {
  const before = fs.readFileSync(file, 'utf8');
  if (!before.includes('<MidPageCTA')) continue;

  // A line that is indentation + `/>` + at least one space + more content.
  const re = /^([ \t]*)\/>[ \t]+(\S.*)$/gm;
  if (!re.test(before)) continue;
  re.lastIndex = 0;

  const after = before.replace(re, (m, indent, rest) => `${indent}/>\n\n${indent}${rest}`);

  // The ONLY difference may be whitespace. If stripping all whitespace changes anything,
  // this touched something it should not have, so bail on that file.
  const strip = (s) => s.replace(/\s+/g, '');
  if (strip(before) !== strip(after)) {
    console.log(`  FAIL   ${path.relative(ROOT, file)} (non-whitespace change detected, skipped)`);
    failed++;
    continue;
  }

  if (DRY) { console.log(`  [dry]  ${path.relative(ROOT, file)}`); fixed++; continue; }
  fs.writeFileSync(file, after);
  console.log(`  fixed  ${path.relative(ROOT, file)}`);
  fixed++;
}

console.log(`\n${fixed} files reformatted, ${failed} skipped`);
if (failed) process.exit(1);
