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
  { path: '/',                                              source: 'src/app/page.tsx' },
  { path: '/b2b-ecommerce',                                source: 'src/app/b2b-ecommerce/page.tsx' },
  { path: '/omnichannel-commerce',                         source: 'src/app/omnichannel-commerce/page.tsx' },
  { path: '/ecommerce-consulting',                         source: 'src/app/ecommerce-consulting/page.tsx' },
  { path: '/bigcommerce-development',                       source: 'src/app/bigcommerce-development/page.tsx' },
  { path: '/headless-commerce',                            source: 'src/app/headless-commerce/page.tsx' },
  { path: '/commerceflo',                                  source: 'src/app/commerceflo/page.tsx' },
  { path: '/about',                                        source: 'src/app/about/page.tsx' },
  { path: '/faq',                                          source: 'src/app/faq/page.tsx' },
  { path: '/portfolio',                                    source: 'src/app/portfolio/page.tsx' },
  { path: '/pricing',                                      source: 'src/app/pricing/page.tsx' },
  { path: '/services',                                     source: 'src/app/services/page.tsx' },
  { path: '/services/web-design',                          source: 'src/app/services/web-design/page.tsx' },
  { path: '/services/shopify-development',                 source: 'src/app/services/shopify-development/page.tsx' },
  { path: '/services/website-redesign',                    source: 'src/app/services/website-redesign/page.tsx' },
  { path: '/services/wordpress-development',               source: 'src/app/services/wordpress-development/page.tsx' },
  { path: '/services/web-application-development',         source: 'src/app/services/web-application-development/page.tsx' },
  { path: '/services/ai-agents',                           source: 'src/app/services/ai-agents/page.tsx' },
  { path: '/services/ai-automation',                       source: 'src/app/services/ai-automation/page.tsx' },
  { path: '/services/ai-agency',                           source: 'src/app/services/ai-agency/page.tsx' },
  { path: '/services/seo',                                 source: 'src/app/services/seo/page.tsx' },
  { path: '/services/local-seo',                           source: 'src/app/services/local-seo/page.tsx' },
  { path: '/services/ecommerce-seo',                       source: 'src/app/services/ecommerce-seo/page.tsx' },
  { path: '/services/shopify-seo',                         source: 'src/app/services/shopify-seo/page.tsx' },
  { path: '/services/small-business-seo',                  source: 'src/app/services/small-business-seo/page.tsx' },
  { path: '/services/seo-audit',                           source: 'src/app/services/seo-audit/page.tsx' },
  { path: '/services/ai-seo',                              source: 'src/app/services/ai-seo/page.tsx' },
  { path: '/services/ai-chatbot-development',              source: 'src/app/services/ai-chatbot-development/page.tsx' },
  { path: '/services/ai-integration-services',             source: 'src/app/services/ai-integration-services/page.tsx' },
  { path: '/services/ai-workflow-automation',              source: 'src/app/services/ai-workflow-automation/page.tsx' },
  { path: '/services/small-business-website-design',       source: 'src/app/services/small-business-website-design/page.tsx' },
  { path: '/services/magento-development',                 source: 'src/app/services/magento-development/page.tsx' },
  { path: '/services/woocommerce-development',             source: 'src/app/services/woocommerce-development/page.tsx' },
  { path: '/website-cost',                                 source: 'src/app/website-cost/page.tsx' },
  { path: '/services/law-firm-website-design',             source: 'src/app/services/law-firm-website-design/page.tsx' },
  { path: '/services/real-estate-website-design',          source: 'src/app/services/real-estate-website-design/page.tsx' },
  { path: '/austin/web-design',                            source: 'src/app/austin/web-design/page.tsx' },
  { path: '/miami/web-design',                             source: 'src/app/miami/web-design/page.tsx' },
  { path: '/denver/web-design',                            source: 'src/app/denver/web-design/page.tsx' },
  { path: '/nashville/web-design',                         source: 'src/app/nashville/web-design/page.tsx' },
  { path: '/portland/web-design',                          source: 'src/app/portland/web-design/page.tsx' },
  { path: '/charlotte/web-design',                         source: 'src/app/charlotte/web-design/page.tsx' },
  { path: '/raleigh/web-design',                           source: 'src/app/raleigh/web-design/page.tsx' },
  { path: '/cleveland/web-design',                          source: 'src/app/cleveland/web-design/page.tsx' },
  { path: '/new-york/web-design',                           source: 'src/app/new-york/web-design/page.tsx' },
  { path: '/tampa/web-design',                              source: 'src/app/tampa/web-design/page.tsx' },
  { path: '/boise/seo', source: 'src/app/boise/seo/page.tsx' },
  { path: '/chattanooga/seo', source: 'src/app/chattanooga/seo/page.tsx' },
  { path: '/fargo/seo', source: 'src/app/fargo/seo/page.tsx' },
  { path: '/lincoln/seo', source: 'src/app/lincoln/seo/page.tsx' },
  { path: '/sioux-falls/seo', source: 'src/app/sioux-falls/seo/page.tsx' },
  { path: '/tampa/seo',                                     source: 'src/app/tampa/seo/page.tsx' },
  { path: '/charlotte/seo',                                 source: 'src/app/charlotte/seo/page.tsx' },
  { path: '/cleveland/seo',                                 source: 'src/app/cleveland/seo/page.tsx' },
  { path: '/nashville/seo',                                 source: 'src/app/nashville/seo/page.tsx' },
  { path: '/austin/seo',                                    source: 'src/app/austin/seo/page.tsx' },
  { path: '/colorado-springs/seo',                          source: 'src/app/colorado-springs/seo/page.tsx' },
  { path: '/austin/ai-agents',                              source: 'src/app/austin/ai-agents/page.tsx' },
  { path: '/denver/ai-agents',                              source: 'src/app/denver/ai-agents/page.tsx' },
  { path: '/raleigh/ai-agents',                             source: 'src/app/raleigh/ai-agents/page.tsx' },
  { path: '/charlotte/ai-automation',                       source: 'src/app/charlotte/ai-automation/page.tsx' },
  { path: '/miami/ai-automation',                           source: 'src/app/miami/ai-automation/page.tsx' },
  { path: '/services/ecommerce-development',               source: 'src/app/services/ecommerce-development/page.tsx' },
  { path: '/services/ecommerce-growth-agency',             source: 'src/app/services/ecommerce-growth-agency/page.tsx' },
  { path: '/services/amazon-agency',                       source: 'src/app/services/amazon-agency/page.tsx' },
  { path: '/austin/ecommerce-development',        source: 'src/app/austin/ecommerce-development/page.tsx' },
  { path: '/boise/ecommerce-development',         source: 'src/app/boise/ecommerce-development/page.tsx' },
  { path: '/charlotte/ecommerce-development',     source: 'src/app/charlotte/ecommerce-development/page.tsx' },
  { path: '/chattanooga/ecommerce-development',   source: 'src/app/chattanooga/ecommerce-development/page.tsx' },
  { path: '/denver/ecommerce-development',        source: 'src/app/denver/ecommerce-development/page.tsx' },
  { path: '/fargo/ecommerce-development',         source: 'src/app/fargo/ecommerce-development/page.tsx' },
  { path: '/lincoln/ecommerce-development',       source: 'src/app/lincoln/ecommerce-development/page.tsx' },
  { path: '/miami/ecommerce-development',         source: 'src/app/miami/ecommerce-development/page.tsx' },
  { path: '/nashville/ecommerce-development',     source: 'src/app/nashville/ecommerce-development/page.tsx' },
  { path: '/portland/ecommerce-development',      source: 'src/app/portland/ecommerce-development/page.tsx' },
  { path: '/raleigh/ecommerce-development',       source: 'src/app/raleigh/ecommerce-development/page.tsx' },
  { path: '/sioux-falls/ecommerce-development',   source: 'src/app/sioux-falls/ecommerce-development/page.tsx' },
  { path: '/tampa/ecommerce-development',         source: 'src/app/tampa/ecommerce-development/page.tsx' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return US_ROUTES.map(({ path, source }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: getFileLastMod(source),
    changeFrequency: (path === '/' ? CHANGEFREQ.topNav : CHANGEFREQ.dynamic) as ChangeFreq,
    priority: path === '/' ? PRIORITY.topNav : PRIORITY.dynamic,
  }))
}
