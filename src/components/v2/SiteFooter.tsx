import Link from 'next/link';

/**
 * SiteFooter — v2.0 bottom-of-page chrome.
 *
 * Light variant default (cream surface, matches the page); optional dark
 * variant on charcoal. Multi-column grid: brand + tagline column on the
 * left, then 3 link columns (Services / Company / Locations by default).
 * Bottom row carries copyright + minimal legal links.
 *
 * No newsletter signup, no logo-of-companies wall — kept honest and
 * static.
 *
 * Pure server component.
 */

export interface SiteFooterLink {
  label: string;
  href: string;
}

export interface SiteFooterColumn {
  heading: string;
  links: ReadonlyArray<SiteFooterLink>;
}

export interface SiteFooterProps {
  logoText?: string;
  tagline?: string;
  linkColumns?: ReadonlyArray<SiteFooterColumn>;
  bottomRow?: {
    copyright?: string;
    links?: ReadonlyArray<SiteFooterLink>;
  };
  variant?: 'light' | 'dark';
  className?: string;
}

const DEFAULT_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'Services',
    links: [
      { label: 'Web Design', href: '/services/web-design' },
      { label: 'E-Commerce', href: '/services/ecommerce-development' },
      { label: 'AI Agent Development', href: '/services/ai-agent-development' },
      { label: 'AI SEO (GEO/AEO)', href: '/services/ai-seo' },
      { label: 'Shopify Development', href: '/services/shopify-development' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Case Studies', href: '/case' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Locations',
    links: [
      { label: 'London', href: '/uk/london' },
      { label: 'Manchester', href: '/uk/manchester' },
      { label: 'Birmingham', href: '/uk/birmingham' },
      { label: 'Leeds', href: '/uk/leeds' },
      { label: 'Edinburgh', href: '/uk/edinburgh' },
    ],
  },
];

const DEFAULT_BOTTOM_ROW = {
  copyright: '© 2026 FactoryJet Technologies',
  links: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ] as ReadonlyArray<SiteFooterLink>,
};

export default function SiteFooter({
  logoText = 'FactoryJet',
  tagline = 'AI-native digital agency for SMBs.',
  linkColumns = DEFAULT_COLUMNS,
  bottomRow = DEFAULT_BOTTOM_ROW,
  variant = 'light',
  className = '',
}: SiteFooterProps) {
  const isDark = variant === 'dark';

  /* Variant-conditional Tailwind class lookups — kept in named consts for
   * legibility rather than nested ternaries inline. */
  const sectionClass = isDark
    ? 'bg-fj-charcoal text-fj-charcoal-text'
    : 'bg-fj-cream text-fj-ink';
  const taglineClass = isDark ? 'text-fj-charcoal-muted' : 'text-fj-neutral-600';
  const headingClass = isDark ? 'text-fj-charcoal-muted' : 'text-fj-neutral-400';
  const linkClass = isDark
    ? 'text-fj-charcoal-text hover:text-white transition-colors'
    : 'text-fj-ink hover:text-fj-jet-blue transition-colors';
  const dividerClass = isDark
    ? 'border-t border-white/10'
    : 'border-t border-fj-neutral-200';
  const copyClass = isDark ? 'text-fj-charcoal-muted' : 'text-fj-neutral-400';
  const bottomLinkClass = isDark
    ? 'text-fj-charcoal-muted hover:text-fj-charcoal-text transition-colors'
    : 'text-fj-neutral-400 hover:text-fj-ink transition-colors';

  const copyright =
    bottomRow.copyright ?? DEFAULT_BOTTOM_ROW.copyright ?? '';
  const bottomLinks = bottomRow.links ?? DEFAULT_BOTTOM_ROW.links;

  return (
    <footer className={`${sectionClass} ${className}`.trim()}>
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          {/* Brand column (4 of 12) */}
          <div className="lg:col-span-4">
            <p className="font-fj-display fj-display text-[24px] font-medium">
              {logoText}
            </p>
            <p
              className={`mt-3 max-w-[280px] font-fj-body text-[14px] leading-[1.55] ${taglineClass}`}
            >
              {tagline}
            </p>
          </div>

          {/* Link columns (8 of 12, 3 cols inside) */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
            {linkColumns.map((col) => (
              <div key={col.heading}>
                <p
                  className={`font-fj-body text-[12px] font-semibold uppercase tracking-[0.14em] ${headingClass}`}
                >
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`font-fj-body text-[15px] ${linkClass}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className={`mt-16 flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between ${dividerClass}`}
        >
          <p className={`font-fj-body text-[13px] ${copyClass}`}>
            {copyright}
          </p>
          {bottomLinks && bottomLinks.length > 0 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {bottomLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-fj-body text-[13px] ${bottomLinkClass}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
