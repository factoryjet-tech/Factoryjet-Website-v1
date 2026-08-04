#!/usr/bin/env node
/**
 * Convert div-based card grids into real <ul>/<li> on pages that render ZERO
 * <li> inside <main>.
 *
 * WHY: rulebook rule 10 (median 110 <li> on AI-Overview-cited pages) is the
 * highest-signal finding we have, and 250 pages sit below their profile target.
 * The worst are 4,000-5,700 word service pages with literally zero list items.
 * That content is already list-shaped, it was just marked up as divs, which
 * throws the extraction signal away for no benefit. Same approach as
 * scripts/uk-hub-lists.mjs (commit c48ffb0), adapted for Tailwind grids.
 *
 * SAFETY:
 *   - `@tailwind base` (preflight) resets ul/ol list-style, margin and padding
 *     to zero, so a div→ul swap inside a grid is visually identical.
 *   - Converts ONLY when every direct child of the grid container is a <div>,
 *     so mixed containers (headings, forms, buttons) are left alone.
 *   - Requires >= 3 sibling cards, so two-column layout wrappers are skipped.
 *   - Walks tag depth rather than regex-matching pairs.
 *
 * Usage: node scripts/div-grid-to-lists.mjs <file...> [--apply]
 */
import { readFileSync, writeFileSync } from 'node:fs';

const APPLY = process.argv.includes('--apply');
const files = process.argv.slice(2).filter((a) => !a.startsWith('--'));

/** Find the index just past the tag that starts at `open`. */
function endOfTag(s, open) {
  let i = open, q = null;
  for (; i < s.length; i++) {
    const c = s[i];
    if (q) { if (c === q) q = null; continue; }
    if (c === '"' || c === "'" || c === '`') { q = c; continue; }
    if (c === '>') return i + 1;
  }
  return -1;
}

/** Walk div depth from `from` (just past an opening <div ...>) to its closer. */
function matchingClose(s, from) {
  let depth = 1, i = from;
  while (i < s.length && depth > 0) {
    const nextOpen = s.indexOf('<div', i);
    const nextClose = s.indexOf('</div>', i);
    if (nextClose === -1) return -1;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      const e = endOfTag(s, nextOpen);
      if (s[e - 2] === '/') { i = e; continue; }   // self-closing
      depth++; i = e;
    } else {
      depth--; i = nextClose + 6;
    }
  }
  return depth === 0 ? i : -1;
}

/** Direct <div> children of the region [start,end). */
function directDivChildren(s, start, end) {
  const kids = []; let i = start;
  while (i < end) {
    const open = s.indexOf('<', i);
    if (open === -1 || open >= end) break;
    if (!s.startsWith('<div', open)) {
      // any non-div element child disqualifies the container
      if (/^<[A-Za-z]/.test(s.slice(open, open + 2))) return null;
      i = open + 1; continue;
    }
    const e = endOfTag(s, open);
    const close = matchingClose(s, e);
    if (close === -1) return null;
    kids.push([open, close]);
    i = close;
  }
  return kids;
}

const GRID = /<div\s+className="([^"]*\bgrid\b[^"]*)"/g;
let totalCards = 0, totalGrids = 0;

for (const f of files) {
  let s = readFileSync(f, 'utf8');
  let grids = 0, cards = 0, guard = 0;
  let m;
  GRID.lastIndex = 0;
  const edits = [];
  while ((m = GRID.exec(s)) && guard++ < 500) {
    const open = m.index;
    const e = endOfTag(s, open);
    const close = matchingClose(s, e);
    if (close === -1) continue;
    const inner = close - 6;
    const kids = directDivChildren(s, e, inner);
    if (!kids || kids.length < 3) continue;
    edits.push({ open, e, inner, close, kids });
  }
  // apply back-to-front so earlier offsets stay valid
  for (const ed of edits.reverse()) {
    let region = s.slice(ed.open, ed.close);
    const relKids = ed.kids.map(([a, b]) => [a - ed.open, b - ed.open]).reverse();
    for (const [a, b] of relKids) {
      region = region.slice(0, b - 6) + '</li>' + region.slice(b);
      const ke = endOfTag(region, a);
      region = region.slice(0, a) + '<li' + region.slice(a + 4, ke) + region.slice(ke);
    }
    region = region.slice(0, region.length - 6) + '</ul>';
    const ge = endOfTag(region, 0);
    region = '<ul' + region.slice(4, ge) + region.slice(ge);
    s = s.slice(0, ed.open) + region + s.slice(ed.close);
    grids++; cards += ed.kids.length;
  }
  if (grids) {
    if (APPLY) writeFileSync(f, s);
    console.log(`${APPLY ? '✓' : '·'} ${f.replace('src/app/', '')}  grids=${grids} cards=${cards}`);
    totalGrids += grids; totalCards += cards;
  }
}
console.log(`\n${APPLY ? 'APPLIED' : 'DRY RUN'}: ${totalGrids} grids -> <ul>, ${totalCards} cards -> <li>`);
