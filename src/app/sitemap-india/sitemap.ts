import type { MetadataRoute } from 'next'
import { getFileLastMod, getMaxLastMod } from '@/lib/sitemap-helpers'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

const PRIORITY = {
  hub:     0.9,
  city:    0.85,
  service: 0.85,
  subpage: 0.75,
} as const

const CHANGEFREQ = {
  hub:     'monthly',
  city:    'weekly',
  service: 'monthly',
  subpage: 'monthly',
} as const

type ChangeFreq = MetadataRoute.Sitemap[number]['changeFrequency']

// ── India web-design city pages (canonical: /web-design/[city]) ──────────────
// NOTE: /services/web-design/[city] 301-redirects to these canonicals.
// Only canonical URLs are included — sitemap must not list redirect sources.
const INDIA_WEB_DESIGN_CITIES = [
  'ahmedabad',
  'bangalore',
  'chennai',
  'delhi',
  'hyderabad',
  'madurai',
  'mumbai',
  'pune',
  'surat',
] as const

// ── India AI agent sub-pages ──────────────────────────────────────────────────
const AI_SUB_PAGES = [
  'ai-chatbot',
  'ai-customer-support',
  'ai-marketing-agent',
  'ai-sales-agent',
  'ai-scheduling-agent',
  'ai-voice-agent',
  'ai-workflow-automation',
] as const

export default function sitemap(): MetadataRoute.Sitemap {

  // ── Web Design hub ───────────────────────────────────────────────────────────
  const webDesignHub: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/web-design`,
    lastModified: getFileLastMod('src/app/web-design/page.tsx'),
    changeFrequency: CHANGEFREQ.hub as ChangeFreq,
    priority: PRIORITY.hub,
  }

  // ── Web Design city pages ────────────────────────────────────────────────────
  const webDesignCities: MetadataRoute.Sitemap = INDIA_WEB_DESIGN_CITIES.map((city) => ({
    url: `${SITE_URL}/web-design/${city}`,
    lastModified: getFileLastMod(`src/app/web-design/${city}/page.tsx`),
    changeFrequency: CHANGEFREQ.city as ChangeFreq,
    priority: PRIORITY.city,
  }))

  // ── India service hubs ───────────────────────────────────────────────────────
  const serviceHubs: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/services/ecommerce-development`,
      lastModified: getFileLastMod('src/app/services/ecommerce-development/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
    {
      url: `${SITE_URL}/services/shopify-development`,
      lastModified: getFileLastMod('src/app/services/shopify-development/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
    {
      url: `${SITE_URL}/services/ai-agent-development`,
      lastModified: getFileLastMod('src/app/services/ai-agent-development/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
  ]

  // ── AI agent sub-pages ───────────────────────────────────────────────────────
  const aiSubPages: MetadataRoute.Sitemap = AI_SUB_PAGES.map((slug) => ({
    url: `${SITE_URL}/services/ai-agent-development/${slug}`,
    lastModified: getMaxLastMod(
      `src/app/services/ai-agent-development/${slug}/page.tsx`,
      'src/app/services/ai-agent-development/page.tsx',
    ),
    changeFrequency: CHANGEFREQ.subpage as ChangeFreq,
    priority: PRIORITY.subpage,
  }))

  return [
    webDesignHub,
    ...webDesignCities,
    ...serviceHubs,
    ...aiSubPages,
  ]
}
