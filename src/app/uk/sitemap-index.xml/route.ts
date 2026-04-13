export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = 'https://factoryjet.com'
  const today = new Date().toISOString().split('T')[0]

  const sitemaps = [
    'sitemap-cities.xml',
    'sitemap-services.xml'
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(s => `  <sitemap>
    <loc>${baseUrl}/uk/${s}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
