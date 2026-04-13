import { cities } from '@/data/uk'

export const dynamic = 'force-static'

function generateSitemapXML(entries: {
  url: string
  lastModified: string
  changeFrequency: string
  priority: number
}[]) {
  const items = entries.map(e => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastModified}</lastmod>
    <changefreq>${e.changeFrequency}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`
}

export async function GET() {
  const today = new Date().toISOString().split('T')[0]

  const entries = cities.map(city => ({
    url: `https://factoryjet.com/uk/${city.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.9
  }))

  return new Response(generateSitemapXML(entries), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
