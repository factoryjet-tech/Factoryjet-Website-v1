import type { MetadataRoute } from 'next'
import { cities, services } from '@/data/uk'

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
  'manchester',
  'birmingham',
  'leeds',
  'liverpool',
  'sheffield',
])

// Mirrors the hardcoded platform whitelist in
// src/app/uk/[city]/[service]/[platform]/page.tsx — keep in sync.
const VALID_PLATFORMS = new Set([
  'shopify',
  'woocommerce',
  'webflow',
  'wordpress',
  'nextjs',
  'framer',
])

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date()

  const ukIndex: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/uk`,
    lastModified: buildTime,
    changeFrequency: CHANGEFREQ.topNav as ChangeFreq,
    priority: PRIORITY.topNav,
  }

  // City hubs — all 20 cities, prioritised by whether they have a bespoke
  // page (richer content, weekly updates) or are served by the dynamic
  // [city] route.
  const cityHubs: MetadataRoute.Sitemap = cities.map((city) => {
    const isBespoke = BESPOKE_UK_CITY_SLUGS.has(city.slug)
    return {
      url: `${SITE_URL}/uk/${city.slug}`,
      lastModified: buildTime,
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
      lastModified: buildTime,
      changeFrequency: CHANGEFREQ.dynamic as ChangeFreq,
      priority: PRIORITY.dynamic,
    }))
  )

  // City × service × platform — replicates the iteration shape of
  // src/app/uk/[city]/[service]/[platform]/page.tsx's generateStaticParams,
  // which (post-Patch #2) iterates dynamicCities, not all cities.
  const cityServicePlatform: MetadataRoute.Sitemap = dynamicCities.flatMap((city) =>
    services.flatMap((service) =>
      (service.platforms || [])
        .filter((p) => VALID_PLATFORMS.has(p))
        .map((platform) => ({
          url: `${SITE_URL}/uk/${city.slug}/${service.slug}/${platform}`,
          lastModified: buildTime,
          changeFrequency: CHANGEFREQ.dynamic as ChangeFreq,
          priority: PRIORITY.dynamic,
        }))
    )
  )

  return [ukIndex, ...cityHubs, ...cityService, ...cityServicePlatform]
}
