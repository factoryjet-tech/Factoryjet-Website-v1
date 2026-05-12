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
  { path: '/us/services/website-redesign',                    source: 'src/app/us/services/website-redesign/page.tsx' },
  { path: '/us/services/wordpress-development',               source: 'src/app/us/services/wordpress-development/page.tsx' },
  { path: '/us/services/web-application-development',         source: 'src/app/us/services/web-application-development/page.tsx' },
  { path: '/us/services/ai-agents',                           source: 'src/app/us/services/ai-agents/page.tsx' },
  { path: '/us/services/ai-automation',                       source: 'src/app/us/services/ai-automation/page.tsx' },
  { path: '/us/services/law-firm-website-design',             source: 'src/app/us/services/law-firm-website-design/page.tsx' },
  { path: '/us/services/real-estate-website-design',          source: 'src/app/us/services/real-estate-website-design/page.tsx' },
  { path: '/us/austin/web-design',                            source: 'src/app/us/austin/web-design/page.tsx' },
  { path: '/us/miami/web-design',                             source: 'src/app/us/miami/web-design/page.tsx' },
  { path: '/us/denver/web-design',                            source: 'src/app/us/denver/web-design/page.tsx' },
  { path: '/us/nashville/web-design',                         source: 'src/app/us/nashville/web-design/page.tsx' },
  { path: '/us/portland/web-design',                          source: 'src/app/us/portland/web-design/page.tsx' },
  { path: '/us/charlotte/web-design',                         source: 'src/app/us/charlotte/web-design/page.tsx' },
  { path: '/us/raleigh/web-design',                           source: 'src/app/us/raleigh/web-design/page.tsx' },
  { path: '/us/tampa/web-design',                             source: 'src/app/us/tampa/web-design/page.tsx' },
  { path: '/us/services/ecommerce-development',               source: 'src/app/us/services/ecommerce-development/page.tsx' },
  { path: '/us/services/ecommerce-development/austin',        source: 'src/app/us/services/ecommerce-development/austin/page.tsx' },
  { path: '/us/services/ecommerce-development/boise',         source: 'src/app/us/services/ecommerce-development/boise/page.tsx' },
  { path: '/us/services/ecommerce-development/charlotte',     source: 'src/app/us/services/ecommerce-development/charlotte/page.tsx' },
  { path: '/us/services/ecommerce-development/chattanooga',   source: 'src/app/us/services/ecommerce-development/chattanooga/page.tsx' },
  { path: '/us/services/ecommerce-development/denver',        source: 'src/app/us/services/ecommerce-development/denver/page.tsx' },
  { path: '/us/services/ecommerce-development/fargo',         source: 'src/app/us/services/ecommerce-development/fargo/page.tsx' },
  { path: '/us/services/ecommerce-development/lincoln',       source: 'src/app/us/services/ecommerce-development/lincoln/page.tsx' },
  { path: '/us/services/ecommerce-development/miami',         source: 'src/app/us/services/ecommerce-development/miami/page.tsx' },
  { path: '/us/services/ecommerce-development/nashville',     source: 'src/app/us/services/ecommerce-development/nashville/page.tsx' },
  { path: '/us/services/ecommerce-development/portland',      source: 'src/app/us/services/ecommerce-development/portland/page.tsx' },
  { path: '/us/services/ecommerce-development/raleigh',       source: 'src/app/us/services/ecommerce-development/raleigh/page.tsx' },
  { path: '/us/services/ecommerce-development/sioux-falls',   source: 'src/app/us/services/ecommerce-development/sioux-falls/page.tsx' },
  { path: '/us/services/ecommerce-development/tampa',         source: 'src/app/us/services/ecommerce-development/tampa/page.tsx' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return US_ROUTES.map(({ path, source }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: getFileLastMod(source),
    changeFrequency: (path === '/us' ? CHANGEFREQ.topNav : CHANGEFREQ.dynamic) as ChangeFreq,
    priority: path === '/us' ? PRIORITY.topNav : PRIORITY.dynamic,
  }))
}
