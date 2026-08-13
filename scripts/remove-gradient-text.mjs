#!/usr/bin/env node
/**
 * Remove gradient text, which CLAUDE.md bans outright, from every page-local CSS file.
 *
 * The pattern is always the same shape: a linear-gradient background clipped to the text box
 * with the fill made transparent. It survives in 19 files, mostly UK pages, because each page
 * ships its own scoped stylesheet and the ban was never enforced mechanically.
 *
 * Replacement colour is chosen from the gradient's own hue rather than blanket-applied, and
 * every target sits on a light background (checked: denver's hero is paper-to-cream, the UK
 * pages are all light), so the dark end of each ramp is the right flat value:
 *   orange ramps  -> #B23E13, the accessible small-text orange. #F05A28 only clears contrast
 *                   at large sizes and these classes are used inline inside running headlines.
 *   green ramp    -> #059669, the dark stop of that same ramp.
 *
 * Also strips the now-dead declarations that only existed to serve the gradient:
 * -webkit-text-fill-color, color:transparent, background-size, and the shimmer animation.
 * Leaving the animation would keep a compositor layer alive forever animating nothing.
 *
 * Skips *.bak files: they are never imported so nothing renders from them.
 *
 * Usage: node scripts/remove-gradient-text.mjs [--dry]
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DRY = process.argv.includes('--dry');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.css')) out.push(p);
  }
  return out;
}

const CLIP = /background-clip\s*:\s*text/i;

function flatColourFor(block) {
  // Pick from the gradient's own hue so the page keeps its intended accent.
  if (/#0?59669|#10B981|rgb\(\s*5,\s*150/i.test(block)) return '#059669';
  return '#B23E13';
}

/** Rewrite one CSS declaration list, dropping gradient machinery and adding a flat colour. */
function rewriteBlock(body) {
  const colour = flatColourFor(body);
  const kept = [];
  for (let decl of body.split(';')) {
    const d = decl.trim();
    if (!d) continue;
    const prop = d.split(':')[0].trim().toLowerCase();
    // Everything below exists only to make the gradient work.
    if (/^(-webkit-)?background-clip$/.test(prop)) continue;
    if (/^-webkit-text-fill-color$/.test(prop)) continue;
    if (prop === 'background' && /linear-gradient/i.test(d)) continue;
    if (prop === 'background-image' && /linear-gradient/i.test(d)) continue;
    if (prop === 'background-size') continue;
    if (prop === 'animation' && /shim|shimmer/i.test(d)) continue;
    if (prop === 'color' && /transparent/i.test(d)) continue;
    kept.push(d);
  }
  kept.push(`color: ${colour}`);
  return kept;
}

let changed = 0, rules = 0, failed = 0;

for (const file of walk(path.join(ROOT, 'src/app'))) {
  if (file.endsWith('.bak')) continue;
  const before = fs.readFileSync(file, 'utf8');
  if (!CLIP.test(before)) continue;

  // Walk brace-balanced rule blocks rather than regexing across them, so a rule containing
  // a nested block or a brace inside a string cannot be mangled.
  let out = '';
  let i = 0;
  let fileRules = 0;
  while (i < before.length) {
    const open = before.indexOf('{', i);
    if (open === -1) { out += before.slice(i); break; }
    let depth = 1, j = open + 1;
    while (j < before.length && depth > 0) {
      if (before[j] === '{') depth++;
      else if (before[j] === '}') depth--;
      j++;
    }
    const body = before.slice(open + 1, j - 1);
    if (CLIP.test(body) && !body.includes('{')) {
      const decls = rewriteBlock(body);
      const multiline = body.includes('\n');
      const inner = multiline
        ? `\n  ${decls.join(';\n  ')};\n`
        : decls.join(';');
      out += before.slice(i, open + 1) + inner + '}';
      fileRules++;
    } else {
      out += before.slice(i, j);
    }
    i = j;
  }

  if (!fileRules) continue;

  if (DRY) {
    console.log(`  [dry]  ${path.relative(ROOT, file)}  (${fileRules} rule${fileRules > 1 ? 's' : ''})`);
    changed++; rules += fileRules; continue;
  }

  fs.writeFileSync(file, out);

  // VERIFY THE RESULT.
  const after = fs.readFileSync(file, 'utf8');
  const ok =
    !CLIP.test(after) &&
    !/-webkit-text-fill-color/i.test(after) &&
    (after.match(/\{/g) || []).length === (before.match(/\{/g) || []).length &&
    (after.match(/\}/g) || []).length === (before.match(/\}/g) || []).length;
  if (!ok) {
    fs.writeFileSync(file, before);
    console.log(`  FAIL   ${path.relative(ROOT, file)} (verification failed, original restored)`);
    failed++;
    continue;
  }
  console.log(`  fixed  ${path.relative(ROOT, file)}  (${fileRules} rule${fileRules > 1 ? 's' : ''})`);
  changed++; rules += fileRules;
}

console.log(`\n${changed} files, ${rules} gradient-text rules removed, ${failed} failed`);
if (failed) process.exit(1);
