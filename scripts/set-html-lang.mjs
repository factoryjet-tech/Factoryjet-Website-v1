#!/usr/bin/env node
/**
 * set-html-lang.mjs: give each exported page the <html lang> its own head declares.
 *
 * WHY: src/app/layout.tsx is the only root layout and prints <html lang="en"> on
 * every page. Under output:'export' a nested /au or /uk layout cannot change the
 * <html> element, so AU and UK pages shipped lang="en" while their og:locale said
 * en_AU / en_GB, their JSON-LD said inLanguage en-AU, and their hreflang said en-AU
 * (31 Oct 2026 QA). Screen readers and search engines read lang; it should agree
 * with the rest of the page.
 *
 * Runs after `next build` on out/. For each HTML file it picks, in order:
 *   1. the hreflang whose href equals the page's own canonical (self-reference);
 *      if several do, the one og:locale names, else none
 *   2. og:locale (en_GB -> en-GB)
 *   3. leaves lang="en" untouched
 * Only en-XX values are applied, so a stray tag can never set a non-English lang.
 *
 * Client-side navigation keeps whatever lang the first page loaded with, because
 * the root layout does not re-render. Crawlers and first loads get the right value.
 *
 *   node scripts/set-html-lang.mjs            # rewrite out/
 *   node scripts/set-html-lang.mjs --dry      # report only
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

const LANG_RE = /^en-[A-Z]{2}$/

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'))
  return m ? m[1] : null
}

/** The lang this page's head declares for itself, or null. Pure, for tests. */
export function declaredLang(html) {
  const headEnd = html.indexOf('</head>')
  const head = headEnd === -1 ? html : html.slice(0, headEnd)

  const ogTag = head.match(/<meta[^>]*property="og:locale"[^>]*>/i)
  const ogRaw = ogTag ? (attr(ogTag[0], 'content') ?? '').replace('_', '-') : ''
  const og = LANG_RE.test(ogRaw) ? ogRaw : null

  const canonicalTag = head.match(/<link[^>]*rel="canonical"[^>]*>/i)
  const canonical = canonicalTag ? attr(canonicalTag[0], 'href') : null
  const self = new Set()
  if (canonical) {
    for (const tag of head.match(/<link[^>]*rel="alternate"[^>]*>/gi) ?? []) {
      const lang = attr(tag, 'hreflang')
      if (lang && LANG_RE.test(lang) && attr(tag, 'href') === canonical) self.add(lang)
    }
  }
  if (self.size === 1) return [...self][0]
  // Several hreflangs point at this URL (the homepage lists en-US and en-IN for
  // "/"). og:locale breaks the tie; without it, the page has not said which.
  if (self.size > 1) return og && self.has(og) ? og : null

  return og
}

/** Rewrites the root <html lang="en"> to `lang`. Returns the new html, or null if unchanged. */
export function applyLang(html, lang) {
  if (!lang || lang === 'en') return null
  const next = html.replace(/<html lang="en"(?=[\s>])/, `<html lang="${lang}"`)
  return next === html ? null : next
}

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) yield* htmlFiles(p)
    else if (entry.name.endsWith('.html')) yield p
  }
}

async function main() {
  const DRY = process.argv.includes('--dry')
  const OUT = 'out'
  if (!existsSync(OUT)) {
    console.log('set-html-lang: no out/ directory, nothing to do')
    return
  }
  const counts = {}
  let scanned = 0
  for await (const file of htmlFiles(OUT)) {
    scanned++
    const html = readFileSync(file, 'utf8')
    const lang = declaredLang(html)
    const next = applyLang(html, lang)
    if (!next) continue
    counts[lang] = (counts[lang] ?? 0) + 1
    if (!DRY) writeFileSync(file, next)
  }
  const summary = Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'
  console.log(`set-html-lang: ${scanned} HTML files scanned; ${DRY ? 'would set' : 'set'} ${summary}`)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
