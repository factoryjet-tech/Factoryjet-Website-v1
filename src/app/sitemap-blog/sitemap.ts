import type { MetadataRoute } from 'next'
import { POSTS } from '@/lib/legacy-pages/Blog/posts'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

const PRIORITY = {
  index: 0.8,
  blog:  0.6,
} as const

const CHANGEFREQ = {
  index: 'weekly',
  blog:  'monthly',
} as const

type ChangeFreq = MetadataRoute.Sitemap[number]['changeFrequency']

// BlogPost.date is a free-form string like "Mar 7, 2026". Best-effort
// parse; fall back to build time so the sitemap always has a valid
// lastModified.
function parsePostDate(raw: string, fallback: Date): Date {
  const parsed = new Date(raw)
  return Number.isNaN(parsed.getTime()) ? fallback : parsed
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date()

  const blogIndex: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/blog`,
    lastModified: buildTime,
    changeFrequency: CHANGEFREQ.index as ChangeFreq,
    priority: PRIORITY.index,
  }

  const posts: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: parsePostDate(post.date, buildTime),
    changeFrequency: CHANGEFREQ.blog as ChangeFreq,
    priority: PRIORITY.blog,
  }))

  return [blogIndex, ...posts]
}
