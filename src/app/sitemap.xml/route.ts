export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

/**
 * Sitemap index — points at per-section sitemaps. Single source of truth
 * for search engines. Replaces scripts/generateSitemap.cjs (deleted) and
 * the three /uk/sitemap-*.xml/route.ts files (also deleted).
 *
 * Implemented as a route handler (not MetadataRoute.Sitemap) because
 * Next.js's sitemap convention always emits <urlset>, while a sitemap
 * index requires <sitemapindex>. Each section sitemap lives at
 * src/app/sitemap-{section}/sitemap.ts and is emitted by Next.js at
 * /sitemap-{section}/sitemap.xml under output: 'export'.
 *
 * As the programmatic SEO pipeline scales, new sections (e.g. /au, /ca)
 * get a new src/app/sitemap-{section}/sitemap.ts plus a new entry here.
 * Google's 50K-URL-per-file cap is respected as long as no single section
 * exceeds that limit.
 */
const SECTIONS = ['pages', 'india', 'uk', 'us', 'uae', 'blog'] as const

export async function GET() {
  const buildTime = new Date().toISOString()

  const entries = SECTIONS.map(
    (section) => `  <sitemap>
    <loc>${SITE_URL}/sitemap-${section}/sitemap.xml</loc>
    <lastmod>${buildTime}</lastmod>
  </sitemap>`
  ).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
