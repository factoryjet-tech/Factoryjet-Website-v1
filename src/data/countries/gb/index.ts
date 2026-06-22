// data/countries/gb/index.ts — GB cities & services data layer.
//
// Canonical location for UK (GB) city + service data post-M1.d.3.
// `src/data/uk/index.ts` is now a backward-compat shim that re-exports
// from this module — legacy v1 page paths and the sitemap continue to
// import via the old `@/data/uk` specifier without change.

import type { CityData, ServiceData } from '../types'

// ---- DATA IMPORTS ----
import london from './cities/london.json'
import leeds from './cities/leeds.json'
import manchester from './cities/manchester.json'
import birmingham from './cities/birmingham.json'
import bristol from './cities/bristol.json'
import edinburgh from './cities/edinburgh.json'
import sheffield from './cities/sheffield.json'
import nottingham from './cities/nottingham.json'
import leicester from './cities/leicester.json'
import liverpool from './cities/liverpool.json'
import cardiff from './cities/cardiff.json'
import glasgow from './cities/glasgow.json'
import newcastle from './cities/newcastle.json'
import southampton from './cities/southampton.json'
import brighton from './cities/brighton.json'
import oxford from './cities/oxford.json'
import cambridge from './cities/cambridge.json'
import derby from './cities/derby.json'
import coventry from './cities/coventry.json'
import hull from './cities/hull.json'
import plymouth from './cities/plymouth.json'

import webDesign from './services/web-design.json'
import aiWebsites from './services/ai-websites.json'
import ecommerce from './services/ecommerce.json'
import seo from './services/seo.json'
import aiSeo from './services/ai-seo.json'
import aiAgents from './services/ai-agents.json'

// ---- EXPORTS ----
export type { CityData, ServiceData } from '../types'

export const cities: CityData[] = [
  london, leeds, manchester, birmingham, bristol, edinburgh,
  sheffield, nottingham, leicester, liverpool, cardiff,
  glasgow, newcastle, southampton, brighton, oxford,
  cambridge, derby, coventry, hull, plymouth
] as CityData[]

export const services: ServiceData[] = [
  webDesign, aiWebsites, ecommerce, seo, aiSeo, aiAgents
] as ServiceData[]

// Helper functions
export const getCityBySlug = (slug: string): CityData | undefined =>
  cities.find(c => c.slug === slug)

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find(s => s.slug === slug)

export const getAllCombinations = () =>
  cities.flatMap(city =>
    services.map(service => ({
      city: city.slug,
      service: service.slug
    }))
  )

/**
 * GB city slugs that have bespoke pages at src/app/uk/{slug}/page.tsx.
 * These cities are EXCLUDED from generateStaticParams on the dynamic
 * [city] route and its descendants, because the static segment in
 * src/app/uk/{slug}/ takes routing precedence and dynamic builds for
 * the same slug would be wasted artifacts.
 *
 * To graduate a city to bespoke: add the slug here AND create
 * src/app/uk/{slug}/page.tsx. To demote: reverse both.
 *
 * Name kept as BESPOKE_UK_CITY_SLUGS rather than BESPOKE_GB_CITY_SLUGS
 * so the legacy v1 import surface (sitemap-uk, src/app/uk/[city]/...)
 * keeps working without rename churn through the shim.
 */
export const BESPOKE_UK_CITY_SLUGS = [
  'london',
  'manchester',
  'birmingham',
  'leeds',
  'liverpool',
  'sheffield',
] as const

/**
 * Cities that should be built via the dynamic [city] route.
 * Equals `cities` minus any slug in BESPOKE_UK_CITY_SLUGS.
 */
export const dynamicCities: CityData[] = cities.filter(
  (c) => !(BESPOKE_UK_CITY_SLUGS as readonly string[]).includes(c.slug)
)

/**
 * Bespoke city × service pages that exist as static segments under
 * src/app/uk/{city}/{service}/page.tsx. The dynamic [city]/[service]
 * route excludes BESPOKE_UK_CITY_SLUGS, so these URLs would otherwise
 * be missing from the sitemap entirely. Each entry here has a real page
 * on disk; do not list a combo unless the page exists.
 */
export const BESPOKE_CITY_SERVICE_PAGES = [
  { city: 'london', service: 'web-design' },
] as const
