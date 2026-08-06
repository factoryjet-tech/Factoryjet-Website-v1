import type { MetadataRoute } from 'next'
import { getFileLastMod } from '@/lib/sitemap-helpers'

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
  'bhubaneswar',
  'chennai',
  'coimbatore',
  'delhi',
  'gurgaon',
  'hyderabad',
  'indore',
  'jaipur',
  'kochi',
  'kolkata',
  'madurai',
  'mumbai',
  'nagpur',
  'noida',
  'pune',
  'rajkot',
  'surat',
  'thiruvananthapuram',
  'vadodara',
  'visakhapatnam',
] as const

// ── India ecommerce city pages (canonical: /services/ecommerce-development/[city]) ──
const INDIA_ECOMMERCE_CITIES = [
  'ahmedabad',
  'bangalore',
  'chandigarh',
  'chennai',
  'delhi',
  'hyderabad',
  'jaipur',
  'kochi',
  'kolkata',
  'lucknow',
  'mumbai',
  'pune',
  'surat',
] as const

// ── India SEO city pages (canonical: /seo/[city]) ────────────────────────────
const INDIA_SEO_CITIES = [
  'mumbai',
  'bangalore',
  'pune',
  'delhi',
  'ahmedabad',
  'noida',
  'jaipur',
  'vadodara',
  'kolkata',
  'hyderabad',
  'chennai',
] as const

// ── India SEO sub-service pages (canonical: /seo/[discipline]-seo) ────────────
const INDIA_SEO_SUBSERVICES = [
  'local-seo',
  'technical-seo',
  'ecommerce-seo',
  'link-building',
  'seo-audit',
] as const

// ── AI agent cluster moved to sitemap-us on 2026-08-06 ───────────────────────
// The hub and its spokes were retargeted from India to the US, where measured
// demand is 8,250/mo at median KD 6. They are now listed in
// src/app/sitemap-us/sitemap.ts. A URL belongs to exactly one sitemap.

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
      url: `${SITE_URL}/ai-seo`,
      lastModified: getFileLastMod('src/app/ai-seo/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
    {
      url: `${SITE_URL}/services/ecommerce-development`,
      lastModified: getFileLastMod('src/app/services/ecommerce-development/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
    {
      url: `${SITE_URL}/shopify-development`,
      lastModified: getFileLastMod('src/app/shopify-development/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
    {
      url: `${SITE_URL}/wordpress-development`,
      lastModified: getFileLastMod('src/app/wordpress-development/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
    {
      url: `${SITE_URL}/n8n-automation`,
      lastModified: getFileLastMod('src/app/n8n-automation/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
    {
      url: `${SITE_URL}/whatsapp-chatbot`,
      lastModified: getFileLastMod('src/app/whatsapp-chatbot/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
    {
      url: `${SITE_URL}/seo`,
      lastModified: getFileLastMod('src/app/seo/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
    {
      url: `${SITE_URL}/digital-marketing`,
      lastModified: getFileLastMod('src/app/digital-marketing/page.tsx'),
      changeFrequency: CHANGEFREQ.service as ChangeFreq,
      priority: PRIORITY.service,
    },
  ]

  // ── India SEO city pages ─────────────────────────────────────────────────────
  const seoCities: MetadataRoute.Sitemap = INDIA_SEO_CITIES.map((city) => ({
    url: `${SITE_URL}/seo/${city}`,
    lastModified: getFileLastMod(`src/app/seo/${city}/page.tsx`),
    changeFrequency: CHANGEFREQ.city as ChangeFreq,
    priority: PRIORITY.city,
  }))

  // ── India SEO sub-service pages ──────────────────────────────────────────────
  const seoSubServices: MetadataRoute.Sitemap = INDIA_SEO_SUBSERVICES.map((slug) => ({
    url: `${SITE_URL}/seo/${slug}`,
    lastModified: getFileLastMod(`src/app/seo/${slug}/page.tsx`),
    changeFrequency: CHANGEFREQ.service as ChangeFreq,
    priority: PRIORITY.service,
  }))

  // ── India ecommerce city pages ───────────────────────────────────────────────
  const ecommerceCities: MetadataRoute.Sitemap = INDIA_ECOMMERCE_CITIES.map((city) => ({
    url: `${SITE_URL}/services/ecommerce-development/${city}`,
    lastModified: getFileLastMod(`src/app/services/ecommerce-development/${city}/page.tsx`),
    changeFrequency: CHANGEFREQ.city as ChangeFreq,
    priority: PRIORITY.city,
  }))

  // ── India digital-marketing city pages ───────────────────────────────────────
  const dmCities: MetadataRoute.Sitemap = ['mumbai', 'bangalore', 'delhi', 'pune', 'hyderabad', 'noida', 'ahmedabad', 'chennai', 'kolkata', 'surat', 'indore', 'chandigarh', 'lucknow', 'jaipur'].map((city) => ({
    url: `${SITE_URL}/digital-marketing/${city}`,
    lastModified: getFileLastMod(`src/app/digital-marketing/${city}/page.tsx`),
    changeFrequency: CHANGEFREQ.city as ChangeFreq,
    priority: PRIORITY.city,
  }))

  return [
    webDesignHub,
    ...webDesignCities,
    ...serviceHubs,
    ...seoCities,
    ...seoSubServices,
    ...ecommerceCities,
    ...dmCities,
  ]
}
