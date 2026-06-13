import type { MetadataRoute } from 'next'

const SITE_URL = 'https://factoryjet.com'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default — everything allowed unless specifically disallowed below
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // Sensitive / duplicate content paths (legacy ecommerce hygiene)
          '/shopdetail/', '/shop/', '/store/', '/product/', '/pcmypage',
          '/safe_search/', '/demo/', '/old/', '/backup/', '/index.php',
          '/zhHant/', '/zhHans/', '/surugaya/',
          // Query parameters that shouldn't be indexed
          '/*?shopdetail', '/*?product_id=', '/*?callback=product',
          // WordPress system paths (legacy CMS hygiene)
          '/wp-admin/', '/wp-includes/', '/wp-content/plugins/',
          // E-commerce private pages
          '/cart/', '/checkout/', '/my-account/', '/wishlist/', '/compare/',
          // App router internals
          '/api/', '/admin/', '/_next/',
        ],
      },

      // ─── AI retrieval bots — explicit allow ───────────────────
      // These bots fetch live content for AI search results / citations.
      // Allowing them is core to FactoryJet's AIO/GEO strategy.
      { userAgent: 'GPTBot',              allow: '/' },
      { userAgent: 'OAI-SearchBot',       allow: '/' },
      { userAgent: 'ChatGPT-User',        allow: '/' },
      { userAgent: 'ClaudeBot',           allow: '/' },
      { userAgent: 'anthropic-ai',        allow: '/' },
      { userAgent: 'PerplexityBot',       allow: '/' },
      { userAgent: 'Google-Extended',     allow: '/' },
      { userAgent: 'Applebot-Extended',   allow: '/' },
      { userAgent: 'meta-externalagent',  allow: '/' },

      // ─── AI training bots — explicit disallow ─────────────────
      // These bots scrape for model training, NOT for live AI search.
      // Blocking them does NOT hurt AI search visibility.
      // Standard 2026 publisher pattern (Stripe, Linear, Anthropic all do this).
      { userAgent: 'CCBot',         disallow: '/' },
      { userAgent: 'Cohere-ai',     disallow: '/' },
      { userAgent: 'Bytespider',    disallow: '/' },
      { userAgent: 'Amazonbot',     disallow: '/' },
      { userAgent: 'Diffbot',       disallow: '/' },
      { userAgent: 'Omgilibot',     disallow: '/' },
      { userAgent: 'Timpibot',      disallow: '/' },
      { userAgent: 'ImagesiftBot',  disallow: '/' },
      { userAgent: 'img2dataset',   disallow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
