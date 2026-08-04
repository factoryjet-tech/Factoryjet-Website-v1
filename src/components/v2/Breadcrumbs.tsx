/**
 * Visible breadcrumb trail.
 *
 * Why this exists (2026-08-04): `BreadcrumbSchema` shipped `BreadcrumbList`
 * JSON-LD on 74% of pages while the site rendered no breadcrumb anywhere. So we
 * were describing a navigation trail to Google that a human could not see.
 * Google's guidance is that structured data should represent visible content,
 * which made this a soft cloaking issue as well as a missing UX element.
 *
 * Takes the same `items` array as `BreadcrumbSchema` so the two cannot drift.
 * Pass the identical array to both, never a hand-copied second one.
 *
 * Pure server component. No client JS.
 */

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  /** Set on dark sections so the trail stays legible. */
  tone?: 'light' | 'dark'
}

export default function Breadcrumbs({ items, tone = 'light' }: BreadcrumbsProps) {
  // A single "Home" crumb is not a trail; rendering it adds noise to the homepage.
  if (!items || items.length < 2) return null

  const muted = tone === 'dark' ? 'rgba(245,245,242,0.62)' : '#6B6560'
  const current = tone === 'dark' ? '#F5F5F2' : '#14110F'

  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto w-full max-w-[1120px] px-6 pt-5 md:px-8"
    >
      <ol
        className="flex flex-wrap items-center gap-x-2 gap-y-1"
        style={{
          fontFamily: 'var(--font-fj-body, inherit)',
          fontSize: '13px',
          lineHeight: 1.5,
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.url} className="flex items-center gap-x-2">
              {isLast ? (
                // The current page is not a link, per WAI-ARIA breadcrumb practice.
                <span style={{ color: current, fontWeight: 500 }} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <a
                    href={item.url}
                    style={{ color: muted, textDecoration: 'none' }}
                    className="transition-opacity hover:opacity-70 hover:underline"
                  >
                    {item.name}
                  </a>
                  <span aria-hidden="true" style={{ color: muted, opacity: 0.55 }}>
                    /
                  </span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
