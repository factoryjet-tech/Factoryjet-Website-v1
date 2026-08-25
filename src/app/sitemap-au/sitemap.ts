import type { MetadataRoute } from 'next'
import { getFileLastMod } from '@/lib/sitemap-helpers'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

/**
 * AU sitemap.
 *
 * Expanded 2026-08-25 from the hub alone to the hub plus the SEO service page and the four
 * city pages built against verified demand.
 *
 * Sydney, Perth and the Gold Coast are deliberately absent. They carry the largest AU
 * search volumes, but the August 2026 measurement put the weakest page-1 incumbent at 119,
 * 125 and 136 referring domains against our 28 earned, so pages aimed at them could not
 * rank. Add them here when link authority supports it, and to CityLinksAU at the same time.
 *
 * There is no /au/web-design entry because /au itself targets the national web design term.
 * A second national web design page would compete with it, which is the cannibalisation
 * that forced two US service pages to be retired by 301 in July 2026.
 */
const CITY_PAGES = ['brisbane', 'melbourne', 'adelaide', 'canberra'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/au`,
      lastModified: getFileLastMod('src/app/au/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/au/seo`,
      lastModified: getFileLastMod('src/app/au/seo/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...CITY_PAGES.map((slug) => ({
      url: `${SITE_URL}/au/${slug}`,
      lastModified: getFileLastMod(`src/app/au/${slug}/page.tsx`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
