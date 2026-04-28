import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

const PRIORITY = {
  topNav:   0.9,
  dynamic:  0.7,
} as const

const CHANGEFREQ = {
  topNav:   'monthly',
  dynamic:  'monthly',
} as const

type ChangeFreq = MetadataRoute.Sitemap[number]['changeFrequency']

// US route paths — hardcoded for now. The programmatic SEO pipeline will
// replace this with a data-layer enumeration once src/data/us/ exists,
// mirroring sitemap-uk.
const US_PATHS = [
  '/us',
  '/us/about',
  '/us/faq',
  '/us/portfolio',
  '/us/pricing',
  '/us/services/web-design',
  '/us/services/web-design/cleveland',
  '/us/services/web-design/new-york',
  '/us/services/web-design/new-york/faq',
  '/us/services/web-design/new-york/services',
  '/us/services/shopify-development',
  '/us/services/ecommerce-development',
  '/us/services/ecommerce-development/boise',
  '/us/services/ecommerce-development/chattanooga',
  '/us/services/ecommerce-development/fargo',
  '/us/services/ecommerce-development/lincoln',
  '/us/services/ecommerce-development/sioux-falls',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date()

  return US_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: buildTime,
    changeFrequency: (path === '/us' ? CHANGEFREQ.topNav : CHANGEFREQ.dynamic) as ChangeFreq,
    priority: path === '/us' ? PRIORITY.topNav : PRIORITY.dynamic,
  }))
}
