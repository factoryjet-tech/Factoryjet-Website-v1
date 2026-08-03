import type { MetadataRoute } from 'next'
import { cities, BESPOKE_CITY_SERVICE_PAGES } from '@/data/uk'
import { getFileLastMod, getMaxLastMod } from '@/lib/sitemap-helpers'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

const PRIORITY = {
  topNav:   0.9,
  bespoke:  0.9,
  dynamic:  0.7,
} as const

const CHANGEFREQ = {
  topNav:   'monthly',
  bespoke:  'weekly',
  dynamic:  'monthly',
} as const

type ChangeFreq = MetadataRoute.Sitemap[number]['changeFrequency']

// Cities with bespoke pages at src/app/uk/{slug}/page.tsx. Duplicated
// locally so this patch lands independently of Patch #2 (which adds
// BESPOKE_UK_CITY_SLUGS to src/data/uk/index.ts). Once both PRs merge,
// fold this back to a shared import.
const BESPOKE_UK_CITY_SLUGS: ReadonlySet<string> = new Set([
  'london',
  'manchester',
  'birmingham',
  'leeds',
  'liverpool',
  'sheffield',
])

// PR #3 (2026-05-27): The /uk/[city]/[service]/[platform] route was
// deprecated and deleted. It generated ~450 templated doorway-pattern URLs
// (15 dynamic cities × 6 services × ~5 platforms) that consumed crawl budget
// without converting clicks (1 click across all UK in 90 days). Production
// redirect /uk/:city/:service/:platform → /uk/:city/:service lives in
// /public/_redirects. See audit-current-state/16_uk_framework_b_plus_plan_2026-05-27.md.
//
// 2026-08-03: the /uk/[city]/[service] route was deleted too, and the 90 URLs
// it generated (15 dynamic cities × 6 services) now 301 to the national hubs
// via /public/_redirects. They are removed from this sitemap in the same
// change, because a sitemap that advertises 90 redirecting URLs is worse than
// one that omits them. See docs/AI-SEO-RULEBOOK.md §8.
const DYNAMIC_CITY_PAGE = 'src/app/uk/[city]/page.tsx'

// National UK service hub pages — standalone static segments at
// src/app/uk/{slug}/page.tsx (not part of the city × service matrix).
// These were missing from every sitemap prior to 2026-07-26: 4 pre-existing
// pages (web-design, shopify-development, shopify-seo, ecommerce-seo) were
// orphaned since launch, and the 6 pages added 2026-07-26 (the UK lead-gen
// build) shipped without sitemap registration. Fixed here in one pass.
const NATIONAL_SERVICE_PAGE_SLUGS = [
  'web-design',
  'shopify-development',
  'shopify-seo',
  'ecommerce-seo',
  'ai-seo',
  'seo',
  'ecommerce-development',
  'ai-agents',
  'local-seo',
  'seo-audit',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const ukIndex: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/uk`,
    lastModified: getFileLastMod('src/app/uk/page.tsx'),
    changeFrequency: CHANGEFREQ.topNav as ChangeFreq,
    priority: PRIORITY.topNav,
  }

  // City hubs — all 20 cities, prioritised by whether they have a bespoke
  // page (richer content, weekly updates) or are served by the dynamic
  // [city] route. Lastmod takes the latest of (city data file, page source)
  // so content edits AND template edits both bump the timestamp.
  const cityHubs: MetadataRoute.Sitemap = cities.map((city) => {
    const isBespoke = BESPOKE_UK_CITY_SLUGS.has(city.slug)
    const cityDataFile = `src/data/uk/cities/${city.slug}.json`
    const pageSource = isBespoke
      ? `src/app/uk/${city.slug}/page.tsx`
      : DYNAMIC_CITY_PAGE
    return {
      url: `${SITE_URL}/uk/${city.slug}`,
      lastModified: getMaxLastMod(cityDataFile, pageSource),
      changeFrequency: (isBespoke ? CHANGEFREQ.bespoke : CHANGEFREQ.dynamic) as ChangeFreq,
      priority: isBespoke ? PRIORITY.bespoke : PRIORITY.dynamic,
    }
  })

  // City × service branch removed 2026-08-03 (UK doorway grid retirement).
  // The 90 URLs it emitted are now 301s to the national hubs, so listing them
  // would advertise 90 redirects. The two surviving bespoke combos are emitted
  // by `bespokeCityService` below.
  //
  // City × service × platform branch removed in PR #3 (2026-05-27).
  // Production redirects handle inbound traffic to both deleted tiers.

  // Bespoke city × service pages — pipeline-generated landing pages that
  // live as static segments under src/app/uk/{city}/{service}/page.tsx.
  // The generated city × service grid is gone, so these two are the only
  // /uk/{city}/{service} URLs that still resolve; we emit them explicitly.
  const bespokeCityService: MetadataRoute.Sitemap = BESPOKE_CITY_SERVICE_PAGES.map(
    ({ city, service }) => ({
      url: `${SITE_URL}/uk/${city}/${service}`,
      lastModified: getMaxLastMod(
        `src/data/uk/cities/${city}.json`,
        `src/data/uk/services/${service}.json`,
        `src/app/uk/${city}/${service}/page.tsx`,
      ),
      changeFrequency: CHANGEFREQ.bespoke as ChangeFreq,
      priority: PRIORITY.bespoke,
    }),
  )

  // National service hubs — highest commercial priority in /uk, same tier
  // as the bespoke city pages since these are the primary lead-gen targets.
  const nationalServicePages: MetadataRoute.Sitemap = NATIONAL_SERVICE_PAGE_SLUGS.map(
    (slug) => ({
      url: `${SITE_URL}/uk/${slug}`,
      lastModified: getFileLastMod(`src/app/uk/${slug}/page.tsx`),
      changeFrequency: CHANGEFREQ.bespoke as ChangeFreq,
      priority: PRIORITY.bespoke,
    }),
  )

  return [
    ukIndex,
    ...nationalServicePages,
    ...cityHubs,
    ...bespokeCityService,
  ]
}
