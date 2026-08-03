#!/usr/bin/env node
/**
 * Generate src/data/countries/gb/cityMarket.ts from the DataForSEO pull in
 * pipeline/research/data/uk_city_depth.json.
 *
 * Generated, never hand-edited: hand-copying 15 cities of search data is how a
 * number silently drifts from its source. Re-run after re-pulling the research.
 *
 * Deliberate omissions:
 *  - CPC. DataForSEO returns it without an unambiguous currency for this
 *    endpoint, and a wrong currency symbol on a live page is worse than no
 *    figure. Volume and competition are unambiguous, so only those ship.
 *  - PAA for cities where Google returned none. 10 of 15 have no PAA block.
 *    Those cities render no PAA section rather than borrowing another city's.
 *
 * Usage: node scripts/gen-uk-city-market.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'

const SRC = 'pipeline/research/data/uk_city_depth.json'
const OUT = 'src/data/countries/gb/cityMarket.ts'

const raw = JSON.parse(readFileSync(SRC, 'utf8'))

const band = (c) => (c == null ? 'unknown' : c >= 0.66 ? 'high' : c >= 0.33 ? 'medium' : 'low')

const cities = {}
let totalTerms = 0, totalPaa = 0, totalComp = 0

for (const [slug, v] of Object.entries(raw)) {
  // Terms with real volume only. A term with null volume has no measured demand
  // and must not be presented as if it did.
  const seen = new Set()
  const terms = v.terms
    .filter((t) => t.volume)
    .filter((t) => {
      const k = t.keyword.toLowerCase()
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
    .map((t) => ({ keyword: t.keyword, volume: t.volume, competition: band(t.competition) }))

  // Dedupe PAA: Google repeats questions inside one block.
  const qs = new Set()
  const paa = (v.paa || [])
    .filter((p) => { const k = p.q.toLowerCase().trim(); if (qs.has(k)) return false; qs.add(k); return true })
    .slice(0, 6)
    .map((p) => ({ q: p.q }))

  const competitors = (v.competitors || [])
    .slice(0, 5)
    .map((c) => ({ domain: c.domain.replace(/^www\./, ''), rank: c.rank }))

  totalTerms += terms.length; totalPaa += paa.length; totalComp += competitors.length
  cities[slug] = { terms, paa, competitors }
}

const header = `// GENERATED FILE. Do not edit by hand.
// Source:    ${SRC}
// Generator: scripts/gen-uk-city-market.mjs
//
// Real search data for the 15 dynamic /uk/{city} roots, pulled from DataForSEO
// (UK location 2826, en). Everything here is measured, not authored.
//
//  - \`terms\`       city-level service keywords that returned real monthly volume
//  - \`paa\`         People Also Ask, verbatim from the live SERP. Present for only
//                  5 of 15 cities because Google does not show a PAA block for
//                  every city query. Cities without one render no PAA section
//                  rather than borrowing another city's questions.
//  - \`competitors\` agencies actually ranking for "web design {city}", with their
//                  absolute SERP position. Directories, marketplaces and social
//                  platforms are filtered out; these are real local competitors.
//
// CPC is deliberately absent: the endpoint does not return an unambiguous
// currency and a wrong symbol on a live page is worse than no figure.

export interface CityMarketTerm { keyword: string; volume: number; competition: 'low' | 'medium' | 'high' | 'unknown' }
export interface CityMarketCompetitor { domain: string; rank: number }
export interface CityMarket {
  terms: CityMarketTerm[]
  paa: { q: string }[]
  competitors: CityMarketCompetitor[]
}

export const CITY_MARKET: Record<string, CityMarket> = ${JSON.stringify(cities, null, 2)}

export const getCityMarket = (slug: string): CityMarket | undefined => CITY_MARKET[slug]
`

writeFileSync(OUT, header)
console.log(`Wrote ${OUT}`)
console.log(`  ${Object.keys(cities).length} cities`)
console.log(`  ${totalTerms} terms with real volume`)
console.log(`  ${totalPaa} PAA questions (${Object.values(cities).filter((c) => c.paa.length).length} cities have any)`)
console.log(`  ${totalComp} competitors`)
