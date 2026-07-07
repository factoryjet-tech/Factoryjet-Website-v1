import Link from 'next/link';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { RECOGNITION_PROFILES } from '@/data/recognitionProfiles';

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

export type SiteFooterLocale = 'us' | 'in' | 'uae';

export interface SiteFooterProps {
  /** Controls which locale's default link columns are used when no explicit
   *  `linkColumns` prop is passed. Default: 'us' (primary domain). */
  locale?: SiteFooterLocale;
  logoText?: string;
  tagline?: string;
  /** Explicit column override — takes precedence over `locale` defaults. */
  linkColumns?: ReadonlyArray<SiteFooterColumn>;
  bottomRow?: {
    copyright?: string;
    links?: ReadonlyArray<SiteFooterLink>;
  };
  variant?: 'light' | 'dark';
  /** Show the third-party recognition / verified-profiles strip. Default: true. */
  showRecognition?: boolean;
  className?: string;
}

// ─── India / global default columns ──────────────────────────────────────────
const IN_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'Services',
    links: [
      { label: 'Web Design',           href: '/web-design' },
      { label: 'E-Commerce',           href: '/services/ecommerce-development' },
      { label: 'Shopify Development',  href: '/shopify-development' },
      { label: 'WordPress Development', href: '/wordpress-development' },
      { label: 'n8n Automation',       href: '/n8n-automation' },
      { label: 'WhatsApp Chatbot',     href: '/whatsapp-chatbot/' },
      { label: 'AI Agent Development', href: '/services/ai-agent-development' },
    ],
  },
  {
    heading: 'SEO',
    links: [
      { label: 'SEO Services',  href: '/seo' },
      { label: 'Local SEO',     href: '/seo/local-seo' },
      { label: 'Technical SEO', href: '/seo/technical-seo' },
      { label: 'Ecommerce SEO', href: '/seo/ecommerce-seo' },
      { label: 'Link Building', href: '/seo/link-building' },
      { label: 'SEO Audit',     href: '/seo/seo-audit' },
      { label: 'AI SEO',        href: '/ai-seo' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',        href: '/about' },
      { label: 'Portfolio',    href: '/portfolio' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog',         href: '/blog' },
      { label: 'Contact',      href: '/contact' },
    ],
  },
  {
    heading: 'Web Design Cities',
    links: [
      { label: 'Mumbai',       href: '/web-design/mumbai' },
      { label: 'Delhi',        href: '/web-design/delhi' },
      { label: 'Bangalore',    href: '/web-design/bangalore' },
      { label: 'Chennai',      href: '/web-design/chennai' },
      { label: 'Hyderabad',    href: '/web-design/hyderabad' },
      { label: 'Pune',         href: '/web-design/pune' },
      { label: 'Ahmedabad',    href: '/web-design/ahmedabad' },
      { label: 'Kolkata',      href: '/web-design/kolkata' },
      { label: 'Jaipur',       href: '/web-design/jaipur' },
      { label: 'Surat',        href: '/web-design/surat' },
      { label: 'Indore',       href: '/web-design/indore' },
      { label: 'Kochi',        href: '/web-design/kochi' },
    ],
  },
  // E-Commerce city pages (en-IN). These live at /services/ecommerce-development/[city]
  // and were previously ORPHANED — in the India sitemap but with zero inbound internal
  // links. Surfaced here (India/global footer only — never rendered for US visitors, see
  // LOCALE_COLUMNS below) to give all 13 pages internal link equity + crawl paths.
  {
    heading: 'E-Commerce Cities',
    links: [
      { label: 'Mumbai',       href: '/services/ecommerce-development/mumbai' },
      { label: 'Delhi',        href: '/services/ecommerce-development/delhi' },
      { label: 'Bangalore',    href: '/services/ecommerce-development/bangalore' },
      { label: 'Hyderabad',    href: '/services/ecommerce-development/hyderabad' },
      { label: 'Chennai',      href: '/services/ecommerce-development/chennai' },
      { label: 'Pune',         href: '/services/ecommerce-development/pune' },
      { label: 'Ahmedabad',    href: '/services/ecommerce-development/ahmedabad' },
      { label: 'Kolkata',      href: '/services/ecommerce-development/kolkata' },
      { label: 'Surat',        href: '/services/ecommerce-development/surat' },
      { label: 'Jaipur',       href: '/services/ecommerce-development/jaipur' },
      { label: 'Kochi',        href: '/services/ecommerce-development/kochi' },
      { label: 'Lucknow',      href: '/services/ecommerce-development/lucknow' },
      { label: 'Chandigarh',   href: '/services/ecommerce-development/chandigarh' },
    ],
  },
];

// ─── UAE default columns ──────────────────────────────────────────────────────
const UAE_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'Services',
    links: [
      { label: 'Web Design',           href: '/services/web-design' },
      { label: 'E-Commerce',           href: '/services/ecommerce-development' },
      { label: 'Shopify Development',  href: '/services/shopify-development' },
      { label: 'AI Agent Development', href: '/services/ai-agent-development' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',        href: '/about' },
      { label: 'Portfolio',    href: '/portfolio' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog',         href: '/blog' },
      { label: 'Contact',      href: '/contact' },
    ],
  },
  {
    heading: 'UAE',
    links: [
      { label: 'Dubai',     href: '/uae' },
      { label: 'Abu Dhabi', href: '/uae' },
      { label: 'Sharjah',   href: '/uae' },
    ],
  },
];

// ─── Locale column map ────────────────────────────────────────────────────────
const LOCALE_COLUMNS: Record<SiteFooterLocale, ReadonlyArray<SiteFooterColumn>> = {
  in:  IN_COLUMNS,
  uae: UAE_COLUMNS,
  us:  US_FOOTER_COLUMNS, // US is the primary domain — its footer must never fall back to India routes
};

/** @deprecated kept for backwards-compat — callers should pass locale prop instead.
 *  Defaults to the US (primary-domain) columns so a forgotten locale/linkColumns
 *  prop can NEVER leak India city links to a North-America visitor. (geo-segmentation 2026-07-06) */
const DEFAULT_COLUMNS = US_FOOTER_COLUMNS;

const DEFAULT_BOTTOM_ROW = {
  copyright: '© 2026 FactoryJet Technologies',
  links: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ] as ReadonlyArray<SiteFooterLink>,
};

export default function SiteFooter({
  locale = 'us',
  logoText = 'FactoryJet',
  tagline = 'AI-native digital agency for SMBs.',
  linkColumns,
  bottomRow = DEFAULT_BOTTOM_ROW,
  variant = 'light',
  showRecognition = true,
  className = '',
}: SiteFooterProps) {
  // Explicit linkColumns prop takes precedence; fall back to locale-based defaults
  const resolvedColumns = linkColumns ?? LOCALE_COLUMNS[locale] ?? DEFAULT_COLUMNS;
  const isDark = variant === 'dark';

  // Desktop column count. Only the 5-column India footer needs its own track count;
  // US (6 cols → 4+2 wrap) and UAE (3 cols) keep the default 4-track grid unchanged.
  const lgColsClass = resolvedColumns.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4';

  /* Variant-conditional Tailwind class lookups — kept in named consts for
   * legibility rather than nested ternaries inline. */
  const sectionClass = isDark
    ? 'bg-fj-charcoal text-fj-charcoal-text'
    : 'bg-fj-cream text-fj-ink';
  const taglineClass = isDark ? 'text-fj-charcoal-muted' : 'text-fj-neutral-600';
  const headingClass = isDark ? 'text-fj-charcoal-muted' : 'text-fj-neutral-400';
  const linkClass = isDark
    ? 'text-fj-charcoal-text hover:text-white transition-colors'
    : 'text-fj-ink hover:text-[#F05A28] transition-colors';
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
          <div className={`grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-8 ${lgColsClass} lg:gap-8`}>
            {resolvedColumns.map((col) => (
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

        {/* Bottom zone: third-party recognition strip + legal row, one divider */}
        <div className={`mt-16 pt-8 ${dividerClass}`}>
          {/* Recognition — verified directory profiles + award. Trust signals, not review claims. */}
          {showRecognition && (
            <div className="mb-10">
              <p
                className={`font-fj-mono text-[11px] font-medium uppercase tracking-[0.16em] ${headingClass}`}
              >
                Recognized on
              </p>
              <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                {RECOGNITION_PROFILES.map((p) => (
                  <li key={p.href}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-fj-body text-[15px] ${linkClass}`}
                    >
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className={`mt-4 font-fj-body text-[13px] ${taglineClass}`}>
                Awarded{' '}
                <span className="font-semibold">&ldquo;Highly Recommended&rdquo;</span>{' '}
                by SoftwareSuggest, Winter 2025.
              </p>
            </div>
          )}

          {/* Legal row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
      </div>
    </footer>
  );
}

export { SiteFooter };
