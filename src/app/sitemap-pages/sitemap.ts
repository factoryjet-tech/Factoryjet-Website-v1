import type { MetadataRoute } from 'next'
import { getAllAuthors } from '@/data/authors'
import { CASE_STUDIES } from '@/lib/legacy-pages/Case/data.constants'

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

const PRIORITY = {
  homepage: 1.0,
  topNav:   0.9,
  bespoke:  0.9,
  dynamic:  0.7,
  blog:     0.6,
  legal:    0.3,
} as const

const CHANGEFREQ = {
  homepage: 'weekly',
  topNav:   'monthly',
  bespoke:  'weekly',
  dynamic:  'monthly',
  blog:     'monthly',
  legal:    'yearly',
} as const

type ChangeFreq = MetadataRoute.Sitemap[number]['changeFrequency']

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date()

  const topNav: { path: string }[] = [
    { path: '/about' },
    { path: '/contact' },
    { path: '/portfolio' },
    { path: '/pricing' },
    { path: '/case' },
    { path: '/sitemap' },
  ]

  const legal: { path: string }[] = [
    { path: '/privacy' },
    { path: '/terms' },
    { path: '/refund-policy' },
  ]

  const authors = getAllAuthors().map((a) => ({
    url: `${SITE_URL}/author/${a.slug}`,
    lastModified: buildTime,
    changeFrequency: CHANGEFREQ.topNav as ChangeFreq,
    priority: PRIORITY.dynamic,
  }))

  const cases = CASE_STUDIES.map((c) => ({
    url: `${SITE_URL}/case/${c.slug}`,
    lastModified: buildTime,
    changeFrequency: CHANGEFREQ.dynamic as ChangeFreq,
    priority: PRIORITY.dynamic,
  }))

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: buildTime,
      changeFrequency: CHANGEFREQ.homepage as ChangeFreq,
      priority: PRIORITY.homepage,
    },
    ...topNav.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: buildTime,
      changeFrequency: CHANGEFREQ.topNav as ChangeFreq,
      priority: PRIORITY.topNav,
    })),
    ...legal.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: buildTime,
      changeFrequency: CHANGEFREQ.legal as ChangeFreq,
      priority: PRIORITY.legal,
    })),
    ...authors,
    ...cases,
  ]
}
