import type { MetadataRoute } from 'next'
import { CASE_STUDIES } from '@/data/case-studies'
import { getFileLastMod } from '@/lib/sitemap-helpers'

/* ─────────────────────────────────────────────────────────────────────────────
   sitemap-case-studies — dedicated sub-sitemap for the new `/case-studies/`
   route family. Lives alongside sitemap-blog/, sitemap-us/, sitemap-uk/,
   sitemap-india/, sitemap-uae/, sitemap-pages/ — matches the project's
   established split-sitemap convention.

   Note: a separate legacy `/case/` route (driven by
   src/lib/legacy-pages/Case/data.constants.ts) is already enumerated by
   sitemap-pages/sitemap.ts. That sitemap is left untouched — the two
   route families are intentionally distinct (per Report 19).

   Once CASE_STUDIES is populated in src/data/case-studies/index.ts the
   per-slug entries appear automatically. While the array is empty only
   the `/case-studies/` index URL ships.
   ──────────────────────────────────────────────────────────────────────────── */

export const dynamic = 'force-static'

const SITE_URL = 'https://factoryjet.com'

const PRIORITY = {
  index:      0.8,
  caseStudy:  0.8,
} as const

const CHANGEFREQ = {
  index:      'monthly',
  caseStudy:  'monthly',
} as const

type ChangeFreq = MetadataRoute.Sitemap[number]['changeFrequency']

export default function sitemap(): MetadataRoute.Sitemap {
  const indexEntry: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/case-studies/`,
    lastModified: getFileLastMod('src/app/case-studies/page.tsx'),
    changeFrequency: CHANGEFREQ.index as ChangeFreq,
    priority: PRIORITY.index,
  }

  // All case studies share the same data file — share lastmod from it so
  // any content update bumps every entry. Per-slug overrides can be added
  // later if individual case studies live in separate files.
  const dataLastMod = getFileLastMod('src/data/case-studies/index.ts')
  const studies: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${SITE_URL}/case-studies/${cs.slug}/`,
    lastModified: dataLastMod,
    changeFrequency: CHANGEFREQ.caseStudy as ChangeFreq,
    priority: PRIORITY.caseStudy,
  }))

  return [indexEntry, ...studies]
}
