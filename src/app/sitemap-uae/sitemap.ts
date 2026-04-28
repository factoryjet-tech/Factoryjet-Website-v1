import type { MetadataRoute } from 'next'
import { getFileLastMod } from '@/lib/sitemap-helpers'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

// UAE has only the index page today. The programmatic SEO pipeline
// will expand this into a full data-layer enumeration mirroring
// sitemap-uk.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/uae`,
      lastModified: getFileLastMod('src/app/uae/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
