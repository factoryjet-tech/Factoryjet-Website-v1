import type { MetadataRoute } from 'next'
import { getFileLastMod } from '@/lib/sitemap-helpers'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

// AU has only the hub page today (launched 2026-06-11). As the /au
// service pages (/au/services/{slug}) and city pages (/au/{city}) ship,
// this expands into a data-layer enumeration mirroring sitemap-uk.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/au`,
      lastModified: getFileLastMod('src/app/au/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
