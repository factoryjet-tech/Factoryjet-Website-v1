import type { MetadataRoute } from 'next'
import { getAllAuthors } from '@/data/authors'
import { getFileLastMod } from '@/lib/sitemap-helpers'

/* ─────────────────────────────────────────────────────────────────────────────
   Note: case studies were migrated 2026-05-28 to the new `/case-studies/`
   route family per Report 26. The per-slug entries (and the index URL) are
   now emitted by sitemap-case-studies/sitemap.ts using the new CASE_STUDIES
   data source at src/data/case-studies/index.ts. The legacy `/case/` topNav
   entry is removed from this sitemap — Bhavesh deletes the legacy /case
   route after production verification of the 301 redirects.
   ──────────────────────────────────────────────────────────────────────────── */

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
  const topNav: { path: string; source: string }[] = [
    { path: '/about',     source: 'src/app/about/page.tsx' },
    { path: '/contact',   source: 'src/app/contact/page.tsx' },
    { path: '/portfolio', source: 'src/app/portfolio/page.tsx' },
    { path: '/pricing',   source: 'src/app/pricing/page.tsx' },
    { path: '/glossary',  source: 'src/app/glossary/page.tsx' },
    { path: '/sitemap',   source: 'src/app/sitemap/page.tsx' },
  ]

  const legal: { path: string; source: string }[] = [
    { path: '/privacy',        source: 'src/app/privacy/page.tsx' },
    { path: '/terms',          source: 'src/app/terms/page.tsx' },
    { path: '/refund-policy',  source: 'src/app/refund-policy/page.tsx' },
  ]

  // All 5 author profiles are driven by the same data file — share lastmod.
  const authorsLastMod = getFileLastMod('src/data/authors.ts')
  const authors = getAllAuthors().map((a) => ({
    url: `${SITE_URL}/author/${a.slug}`,
    lastModified: authorsLastMod,
    changeFrequency: CHANGEFREQ.topNav as ChangeFreq,
    priority: PRIORITY.dynamic,
  }))

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: getFileLastMod('src/app/page.tsx'),
      changeFrequency: CHANGEFREQ.homepage as ChangeFreq,
      priority: PRIORITY.homepage,
    },
    ...topNav.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: getFileLastMod(p.source),
      changeFrequency: CHANGEFREQ.topNav as ChangeFreq,
      priority: PRIORITY.topNav,
    })),
    ...legal.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: getFileLastMod(p.source),
      changeFrequency: CHANGEFREQ.legal as ChangeFreq,
      priority: PRIORITY.legal,
    })),
    ...authors,
  ]
}
