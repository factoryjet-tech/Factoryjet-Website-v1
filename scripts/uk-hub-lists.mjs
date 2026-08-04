#!/usr/bin/env node
/**
 * Convert div-based card grids on the 10 UK national hubs into real <ul>/<li>.
 *
 * WHY: measured 2026-08-03, 7 of the 10 hubs render ZERO <li> inside <main> on
 * 3,300 to 5,200 word pages. All 36 list items on those pages are footer chrome.
 * Rule 10 in docs/AI-SEO-RULEBOOK.md is the highest-signal finding in the whole
 * dataset (median 110 <li> on cited pages) and these are the highest-value UK
 * URLs plus the destinations for the retired doorway redirects.
 *
 * The content is already list-shaped ("What professional SEO includes", "Seven
 * things we do", four process stages). It was just marked up as divs, which
 * throws the signal away for no benefit.
 *
 * SAFETY: the grid classes (.col-2, .col-3, .col-4, .stack, .process-grid) are
 * plain `display:grid` with no div-specific selectors, verified in seo.css, so
 * ul/li lay out identically once list defaults are reset. That reset is added to
 * each stylesheet by this script.
 *
 * This walks tag depth rather than regex-matching across nested markup, and only
 * converts `card` divs that are DIRECT children of a grid container.
 *
 * Usage: node scripts/uk-hub-lists.mjs [--dry]
 */
import { readFileSync, writeFileSync } from 'node:fs'

const ARG_HUBS = process.argv.filter(a => !a.startsWith('--')).slice(2)
const ALL_HUBS = ['seo', 'web-design', 'ecommerce-development', 'ai-agents', 'ai-seo',
  'local-seo', 'seo-audit', 'shopify-development', 'ecommerce-seo', 'shopify-seo']
const HUBS = ARG_HUBS.length ? ARG_HUBS : ALL_HUBS

const CONTAINER = /className="(?:[^"]*\s)?(col-2|col-3|col-4|stack|process-grid)(?:\s[^"]*)?"/
const DRY = process.argv.includes('--dry')

/** Index of the `<div` that opens the tag containing position `i`. */
function tagStart(src, i) {
  return src.lastIndexOf('<div', i)
}

/** Given the index of a `<div`, return the index just past its matching `</div>`. */
function matchDiv(src, openIdx) {
  let i = openIdx, depth = 0
  while (i < src.length) {
    const nextOpen = src.indexOf('<div', i)
    const nextClose = src.indexOf('</div>', i)
    if (nextClose === -1) return -1
    if (nextOpen !== -1 && nextOpen < nextClose) { depth++; i = nextOpen + 4 }
    else {
      depth--
      if (depth === 0) return nextClose + 6
      i = nextClose + 6
    }
  }
  return -1
}

/** End of the opening tag `<div ...>` starting at openIdx. Handles nested {} in props. */
function openTagEnd(src, openIdx) {
  let i = openIdx, brace = 0
  while (i < src.length) {
    const c = src[i]
    if (c === '{') brace++
    else if (c === '}') brace--
    else if (c === '>' && brace === 0) return i + 1
    i++
  }
  return -1
}

let filesChanged = 0, containersConverted = 0, cardsConverted = 0

for (const hub of HUBS) {
  const file = `src/app/uk/${hub}/page.tsx`
  let src = readFileSync(file, 'utf8')
  const before = src
  let localContainers = 0, localCards = 0

  // Repeatedly find the first unconverted grid container and convert it.
  let searchFrom = 0
  for (;;) {
    const m = CONTAINER.exec(src.slice(searchFrom))
    if (!m) break
    const absMatch = searchFrom + m.index
    const open = tagStart(src, absMatch)
    if (open === -1) { searchFrom = absMatch + 1; continue }
    const openEnd = openTagEnd(src, open)
    const close = matchDiv(src, open)
    if (openEnd === -1 || close === -1) { searchFrom = absMatch + 1; continue }

    const inner = src.slice(openEnd, close - 6)
    // Direct-child card divs only.
    let converted = inner, childCount = 0
    let ci = 0
    for (;;) {
      const ck = converted.indexOf('<div', ci)
      if (ck === -1) break
      const ckEnd = openTagEnd(converted, ck)
      const ckClose = matchDiv(converted, ck)
      if (ckEnd === -1 || ckClose === -1) break
      const tag = converted.slice(ck, ckEnd)
      if (/className="(?:[^"]*\s)?card(?:\s[^"]*)?"/.test(tag)) {
        converted =
          converted.slice(0, ck) + '<li' + converted.slice(ck + 4, ckClose - 6) + '</li>' +
          converted.slice(ckClose)
        childCount++
        ci = ckClose - 1 // '</div>' -> '</li>' is one char shorter
      } else {
        ci = ckClose
      }
    }

    if (childCount === 0) { searchFrom = close; continue }

    // Numbered sequences become <ol>, everything else <ul>.
    const isOrdered = /stage-num|\bn: '0\d'/.test(inner)
    const tagName = isOrdered ? 'ol' : 'ul'
    const openTag = src.slice(open, openEnd)
    const newOpen = `<${tagName}` + openTag.slice(4)
    src = src.slice(0, open) + newOpen + converted + `</${tagName}>` + src.slice(close)

    localContainers++; localCards += childCount
    searchFrom = open + newOpen.length + converted.length
  }

  /* FAQ pass. Each hub carries 20 to 28 questions, which is the single largest
     block of list-shaped content on the page and was contributing nothing.
     Two markup shapes exist across the 10 hubs, so both are handled. */
  let faqWrapped = 0

  // Shape A (7 hubs): mapped over FAQ_ITEMS with a keyed <details>.
  const A_OPEN = '{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (\n'
  if (src.includes(A_OPEN) && src.includes('<details key={f.question} className="faq-item">')) {
    src = src.replace(A_OPEN, '<ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (\n')
    src = src.replace('<details key={f.question} className="faq-item">',
      '<li key={f.question}><details className="faq-item">')
    src = src.replace(/<\/details>\n(\s*)\)\)\}/, '</details></li>\n$1))}</ul>')
    faqWrapped = 1
  }

  /* Shape B is NOT handled here. The three hubs with literal FAQ markup
     (shopify-development, ecommerce-seo, shopify-seo) are handled by
     scripts/uk-hub-faq-lists.mjs, which walks their several category containers
     properly. An earlier attempt to do it in this script converted only the first
     container and produced invalid HTML (a header div as a direct child of a ul). */
  if (faqWrapped) console.log(`     + FAQ list wrapped`)

  if (src !== before) {
    if (!DRY) writeFileSync(file, src)
    filesChanged++; containersConverted += localContainers; cardsConverted += localCards
    console.log(`  ${hub}: ${localContainers} containers, ${localCards} cards -> li`)
  } else {
    console.log(`  ${hub}: no change`)
  }

  // Reset list defaults so ul/li lay out exactly as the divs did.
  const cssFile = `src/app/uk/${hub}/${hub}.css`
  let css = readFileSync(cssFile, 'utf8')
  if (!css.includes('/* list-reset for card grids')) {
    css += `\n/* list-reset for card grids (2026-08-03).\n` +
      `   The card grids are real <ul>/<ol> now so the list items count toward\n` +
      `   rule 10 in the AI-SEO rulebook. These grids are plain display:grid, so\n` +
      `   stripping the list defaults makes the markup change purely semantic. */\n` +
      `.col-2, .col-3, .col-4, .stack, .process-grid {\n` +
      `  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n`
    if (!DRY) writeFileSync(cssFile, css)
  }
}

console.log(`\n${filesChanged}/${HUBS.length} files changed, ` +
  `${containersConverted} containers, ${cardsConverted} cards converted to <li>.`)
if (DRY) console.log('(dry run, nothing written)')
