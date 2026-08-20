#!/usr/bin/env node
/**
 * check-watermarks.mjs — fail the build if invisible-Unicode watermark carriers
 * reach shipped content.
 *
 * WHY: LLM output routinely carries zero-width joiners, narrow no-break spaces,
 * word joiners and bidi controls. None of them render. All of them survive
 * copy-paste into a .tsx file, ship to production, and act as a fingerprint on
 * our own pages. `npm run build` should refuse to ship them.
 *
 * Companion to the `clean-user-facing-text` skill in .claude/skills, which is
 * what you use to CLEAN prose. This script only DETECTS, and only on the
 * source tree we actually publish.
 *
 *   node scripts/check-watermarks.mjs            # fail on any carrier
 *   node scripts/check-watermarks.mjs --fix      # strip carriers, then report
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { join, extname } from 'node:path'

const FIX = process.argv.includes('--fix')
const ROOTS = ['src', 'content', 'public']
const EXT = new Set(['.tsx', '.ts', '.jsx', '.js', '.md', '.mdx', '.json', '.html', '.txt'])
const SKIP = ['node_modules', '/.next/', '/out/', '/.git/']

// Unambiguous carriers: invisible, never load-bearing in our content, and the
// exact set LLM pipelines are known to emit.
const CARRIERS = [
  [0x200b, 'ZERO WIDTH SPACE'],
  [0x200c, 'ZERO WIDTH NON-JOINER'],
  [0x200d, 'ZERO WIDTH JOINER'],
  [0x2060, 'WORD JOINER'],
  [0x2061, 'FUNCTION APPLICATION'],
  [0x2062, 'INVISIBLE TIMES'],
  [0x2063, 'INVISIBLE SEPARATOR'],
  [0x2064, 'INVISIBLE PLUS'],
  [0x00ad, 'SOFT HYPHEN'],
  [0xfeff, 'ZERO WIDTH NO-BREAK SPACE / BOM'],
  [0x180e, 'MONGOLIAN VOWEL SEPARATOR'],
  // exotic spaces that look identical to U+0020 on screen
  [0x2000, 'EN QUAD'], [0x2001, 'EM QUAD'], [0x2002, 'EN SPACE'], [0x2003, 'EM SPACE'],
  [0x2004, 'THREE-PER-EM SPACE'], [0x2005, 'FOUR-PER-EM SPACE'], [0x2006, 'SIX-PER-EM SPACE'],
  [0x2007, 'FIGURE SPACE'], [0x2008, 'PUNCTUATION SPACE'], [0x2009, 'THIN SPACE'],
  [0x200a, 'HAIR SPACE'], [0x202f, 'NARROW NO-BREAK SPACE'], [0x205f, 'MEDIUM MATHEMATICAL SPACE'],
  [0x3000, 'IDEOGRAPHIC SPACE'],
  // bidi controls: reorder text invisibly
  [0x202a, 'LRE'], [0x202b, 'RLE'], [0x202c, 'PDF'], [0x202d, 'LRO'], [0x202e, 'RLO'],
  [0x2066, 'LRI'], [0x2067, 'RLI'], [0x2068, 'FSI'], [0x2069, 'PDI'],
]
const NAMES = new Map(CARRIERS)
const SET = new Set(CARRIERS.map(c => c[0]))

// U+E0000-E007F tag characters encode arbitrary hidden ASCII payloads.
const isTagChar = cp => cp >= 0xe0000 && cp <= 0xe007f

// A carrier collapses to a plain space if it is a space; otherwise it is removed.
const SPACES = new Set([0x2000,0x2001,0x2002,0x2003,0x2004,0x2005,0x2006,0x2007,0x2008,0x2009,0x200a,0x202f,0x205f,0x3000,0x180e])

async function walk(dir, acc = []) {
  let entries
  try { entries = await readdir(dir, { withFileTypes: true }) } catch { return acc }
  for (const e of entries) {
    const p = join(dir, e.name)
    if (SKIP.some(s => (p + '/').includes(s))) continue
    if (e.isDirectory()) await walk(p, acc)
    else if (EXT.has(extname(e.name).toLowerCase())) acc.push(p)
  }
  return acc
}

const files = []
for (const r of ROOTS) await walk(r, files)

// A guard that scans nothing must not report success. Run from the wrong
// directory and every ROOT misses, which would otherwise print a green tick
// over an unchecked tree.
if (files.length === 0) {
  console.error(`check-watermarks: found no content files under ${ROOTS.join(', ')}.`)
  console.error(`Run this from the repo root.`)
  process.exit(2)
}

const findings = []
let fixedFiles = 0
for (const f of files) {
  let text
  try { text = readFileSync(f, 'utf8') } catch { continue }
  const hits = new Map()
  let out = ''
  for (const ch of text) {
    const cp = ch.codePointAt(0)
    if (SET.has(cp) || isTagChar(cp)) {
      const label = isTagChar(cp) ? 'TAG CHARACTER (hidden payload)' : NAMES.get(cp)
      const key = `U+${cp.toString(16).toUpperCase().padStart(4, '0')} ${label}`
      hits.set(key, (hits.get(key) || 0) + 1)
      if (FIX) out += SPACES.has(cp) ? ' ' : ''
      continue
    }
    out += ch
  }
  if (!hits.size) continue
  findings.push({ file: f, hits: [...hits.entries()] })
  if (FIX) { writeFileSync(f, out, 'utf8'); fixedFiles++ }
}

if (!findings.length) {
  console.log(`✓ watermark check: ${files.length} content files clean (no invisible Unicode carriers)`)
  process.exit(0)
}

console.log(`${FIX ? 'Stripped' : 'FOUND'} invisible Unicode carriers in ${findings.length} file(s):\n`)
for (const { file, hits } of findings) {
  console.log(`  ${file}`)
  for (const [label, n] of hits) console.log(`      ${n}x  ${label}`)
}
if (FIX) {
  console.log(`\n✓ cleaned ${fixedFiles} file(s). Re-run without --fix to confirm, and review the diff.`)
  process.exit(0)
}
console.log(`\nRun:  node scripts/check-watermarks.mjs --fix`)
console.log(`Then review the diff before committing.`)
process.exit(1)
