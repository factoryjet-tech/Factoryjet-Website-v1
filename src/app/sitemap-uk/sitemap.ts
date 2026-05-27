import type { MetadataRoute } from 'next'
import { cities, services, BESPOKE_CITY_SERVICE_PAGES } from '@/data/uk'
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
const DYNAMIC_CITY_PAGE = 'src/app/uk/[city]/page.tsx'
const DYNAMIC_CITY_SERVICE_PAGE = 'src/app/uk/[city]/[service]/page.tsx'

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

  // Cities served by the dynamic [city]/[service] route. Bespoke cities
  // have only /uk/{slug}/page.tsx — no service or platform descendants
  // exist on disk — so listing /uk/{bespoke}/{service} would advertise
  // 404s. Mirrors Patch #2's `dynamicCities` filter; folded back to a
  // shared import once Patch #2 is merged.
  const dynamicCities = cities.filter(
    (c) => !BESPOKE_UK_CITY_SLUGS.has(c.slug)
  )

  // City × service — only cities served by the dynamic [city]/[service]
  // route. Bespoke city service URLs would 404.
  const cityService: MetadataRoute.Sitemap = dynamicCities.flatMap((city) =>
    services.map((service) => ({
      url: `${SITE_URL}/uk/${city.slug}/${service.slug}`,
      lastModified: getMaxLastMod(
        `src/data/uk/cities/${city.slug}.json`,
        `src/data/uk/services/${service.slug}.json`,
        DYNAMIC_CITY_SERVICE_PAGE,
      ),
      changeFrequency: CHANGEFREQ.dynamic as ChangeFreq,
      priority: PRIORITY.dynamic,
    }))
  )

  // City × service × platform branch removed in PR #3 (2026-05-27).
  // Production redirect handles inbound traffic to the deleted URLs.

  // Bespoke city × service pages — pipeline-generated landing pages that
  // live as static segments under src/app/uk/{city}/{service}/page.tsx.
  // These are excluded from cityService above (dynamicCities filter), so
  // we emit them explicitly.
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

  return [
    ukIndex,
    ...cityHubs,
    ...cityService,
    ...bespokeCityService,
  ]
}
