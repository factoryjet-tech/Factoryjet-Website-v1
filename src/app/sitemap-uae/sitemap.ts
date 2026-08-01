import type { MetadataRoute } from 'next'
import { getFileLastMod } from '@/lib/sitemap-helpers'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

// UAE started with only the index page. First dedicated UAE service page
// (ecommerce-development) added 2026-08-01. The programmatic SEO pipeline
// will expand this further into a full data-layer enumeration mirroring
// sitemap-uk.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/uae`,
      lastModified: getFileLastMod('src/app/uae/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/uae/ecommerce-development`,
      lastModified: getFileLastMod('src/app/uae/ecommerce-development/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]
}
