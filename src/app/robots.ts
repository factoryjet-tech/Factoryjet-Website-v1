import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      // Explicit allow for AI crawlers — the GEO/AEO/AIO investment depends on this
      { userAgent: 'GPTBot',          allow: '/' },
      { userAgent: 'ClaudeBot',       allow: '/' },
      { userAgent: 'anthropic-ai',    allow: '/' },
      { userAgent: 'PerplexityBot',   allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot',           allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
