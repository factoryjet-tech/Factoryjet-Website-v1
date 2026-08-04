#!/usr/bin/env node
/**
 * Wrap the FAQ blocks on the three UK hubs whose FAQ is literal markup rather
 * than a .map(): shopify-development, ecommerce-seo, shopify-seo.
 *
 * These three gained almost nothing from scripts/uk-hub-lists.mjs (41 to 45 li,
 * against 36 to 86 on the seven mapped-FAQ hubs) because that script converted
 * only the FIRST of several `<div id="faq-*">` category containers, and turned
 * the container itself into a <ul>, leaving a `<div className="faq-cat-header">`
 * as a direct child of a list. A <ul> may only contain <li>, so that was invalid
 * HTML as well as incomplete. Those three files were reset to their pre-codemod
 * state and are rebuilt here.
 *
 * Correct shape: the category container stays a <div>, its header stays outside
 * the list, and only the contiguous run of <details> becomes a <ul> of <li>.
 *
 * ALGORITHM: one left-to-right pass building an output array. An earlier version
 * re-searched from the start of the string after each wrap and hung in an
 * infinite loop, so this deliberately never looks backwards.
 *
 * Usage: node scripts/uk-hub-faq-lists.mjs [--dry]
 */
import { readFileSync, writeFileSync } from 'node:fs'

const HUBS = ['shopify-development', 'ecommerce-seo', 'shopify-seo']
const OPEN = '<details className="faq-item">'
const DRY = process.argv.includes('--dry')

/** Index just past the `</details>` matching the `<details` at `open`. */
function matchDetails(src, open) {
  let i = open + OPEN.length, depth = 1
  while (i < src.length && depth > 0) {
    const o = src.indexOf('<details', i)
    const c = src.indexOf('</details>', i)
    if (c === -1) return -1
    if (o !== -1 && o < c) { depth++; i = o + 8 }
    else { depth--; i = c + 10 }
  }
  return depth === 0 ? i : -1
}

let total = 0

for (const hub of HUBS) {
  const file = `src/app/uk/${hub}/page.tsx`
  const src = readFileSync(file, 'utf8')

  const out = []
  let pos = 0, wrapped = 0, runs = 0

  for (;;) {
    const start = src.indexOf(OPEN, pos)
    if (start === -1) { out.push(src.slice(pos)); break }

    out.push(src.slice(pos, start))

    // Consume the contiguous run of sibling <details> from `start`.
    const items = []
    let cursor = start
    while (src.startsWith(OPEN, cursor)) {
      const end = matchDetails(src, cursor)
      if (end === -1) break
      items.push(src.slice(cursor, end))
      let k = end
      while (k < src.length && /\s/.test(src[k])) k++
      if (!src.startsWith(OPEN, k)) { cursor = end; break }
      cursor = k
    }
    if (items.length === 0) { out.push(OPEN); pos = start + OPEN.length; continue }

    out.push('<ul className="faq-list">')
    for (const it of items) out.push('<li>' + it + '</li>')
    out.push('</ul>')
    wrapped += items.length
    runs++
    pos = cursor
  }

  const result = out.join('')
  total += wrapped
  console.log(`  ${hub}: ${wrapped} questions in ${runs} run(s) wrapped`)
  if (!DRY) writeFileSync(file, result)
}

console.log(`\n${total} FAQ questions converted across ${HUBS.length} hubs.`)
if (DRY) console.log('(dry run, nothing written)')
