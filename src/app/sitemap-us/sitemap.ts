import type { MetadataRoute } from 'next'
import { getFileLastMod } from '@/lib/sitemap-helpers'

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
const US_ROUTES: { path: string; source: string }[] = [
  { path: '/us',                                              source: 'src/app/us/page.tsx' },
  { path: '/us/about',                                        source: 'src/app/us/about/page.tsx' },
  { path: '/us/faq',                                          source: 'src/app/us/faq/page.tsx' },
  { path: '/us/portfolio',                                    source: 'src/app/us/portfolio/page.tsx' },
  { path: '/us/pricing',                                      source: 'src/app/us/pricing/page.tsx' },
  { path: '/us/services/web-design',                          source: 'src/app/us/services/web-design/page.tsx' },
  { path: '/us/services/web-design/cleveland',                source: 'src/app/us/services/web-design/cleveland/page.tsx' },
  { path: '/us/services/web-design/new-york',                 source: 'src/app/us/services/web-design/new-york/page.tsx' },
  { path: '/us/services/web-design/new-york/faq',             source: 'src/app/us/services/web-design/new-york/faq/page.tsx' },
  { path: '/us/services/web-design/new-york/services',        source: 'src/app/us/services/web-design/new-york/services/page.tsx' },
  { path: '/us/services/shopify-development',                 source: 'src/app/us/services/shopify-development/page.tsx' },
  { path: '/us/services/ecommerce-development',               source: 'src/app/us/services/ecommerce-development/page.tsx' },
  { path: '/us/services/ecommerce-development/boise',         source: 'src/app/us/services/ecommerce-development/boise/page.tsx' },
  { path: '/us/services/ecommerce-development/chattanooga',   source: 'src/app/us/services/ecommerce-development/chattanooga/page.tsx' },
  { path: '/us/services/ecommerce-development/fargo',         source: 'src/app/us/services/ecommerce-development/fargo/page.tsx' },
  { path: '/us/services/ecommerce-development/lincoln',       source: 'src/app/us/services/ecommerce-development/lincoln/page.tsx' },
  { path: '/us/services/ecommerce-development/sioux-falls',   source: 'src/app/us/services/ecommerce-development/sioux-falls/page.tsx' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return US_ROUTES.map(({ path, source }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: getFileLastMod(source),
    changeFrequency: (path === '/us' ? CHANGEFREQ.topNav : CHANGEFREQ.dynamic) as ChangeFreq,
    priority: path === '/us' ? PRIORITY.topNav : PRIORITY.dynamic,
  }))
}
