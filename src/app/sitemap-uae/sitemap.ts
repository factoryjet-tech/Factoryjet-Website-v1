import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

// UAE has only the index page today. The programmatic SEO pipeline
// will expand this into a full data-layer enumeration mirroring
// sitemap-uk.
export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date()

  return [
    {
      url: `${SITE_URL}/uae`,
      lastModified: buildTime,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
