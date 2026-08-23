import Link from 'next/link';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { RECOGNITION_PROFILES } from '@/data/recognitionProfiles';
import Wordmark from './Wordmark';

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

/**
 * Region switcher.
 *
 * The footer is chosen by PAGE, not by visitor: /replatforming is a US page and
 * renders US columns for everyone. The edge Function in functions/_middleware.js
 * routes NA humans off India URLs and India humans off the six US pages that have
 * a real India twin, but most of the commerce cluster (/replatforming,
 * /b2b-ecommerce, /omnichannel-commerce, ...) has no India version at all. This
 * selector is how a visitor gets to their region on those pages.
 *
 * Native <details>, deliberately. No client JS, so SiteFooter stays a pure server
 * component and this still works on the static export.
 *
 * India has no /in root; its entry point is the India web-design hub.
 */
const REGIONS: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'United States',  href: '/' },
  { label: 'India',          href: '/web-design' },
  { label: 'United Kingdom', href: '/uk' },
  { label: 'United Arab Emirates', href: '/uae' },
  { label: 'Australia',      href: '/au' },
];

const REGION_LABEL: Record<SiteFooterLocale, string> = {
  us: 'United States',
  in: 'India',
  uae: 'United Arab Emirates',
};

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
      { label: 'Digital Marketing',    href: '/digital-marketing' },
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
  // City pages are NOT listed here any more.
  //
  // Until 2026-08-03 this footer carried two 12-13 item city columns, because those
  // pages had zero other inbound internal links. Measured with
  // scripts/footer-orphan-risk.mjs: 21 India pages were footer-only. Deleting the
  // columns without a replacement would have orphaned every one of them.
  //
  // They now live in city blocks on their own hubs (/web-design, /seo,
  // /services/ecommerce-development), which is a stronger internal link than a
  // sitewide footer link anyway. Re-run that script before touching this array.
  {
    heading: 'Locations',
    links: [
      { label: 'Web design by city',  href: '/web-design' },
      { label: 'SEO by city',         href: '/seo' },
      { label: 'E-commerce by city',  href: '/services/ecommerce-development' },
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
  us:  US_FOOTER_COLUMNS, // US is the primary domain: its footer must never fall back to India routes
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

  const currentRegion = REGION_LABEL[locale] ?? 'United States';
  const surfaceClass = isDark ? 'border-white/10 bg-white/[0.03]' : 'border-fj-neutral-200 bg-white/60';

  return (
    <footer className={`${sectionClass} ${className}`.trim()}>
      <div className="mx-auto max-w-[1200px] px-6 pt-16 md:px-8 md:pt-20">
        {/* Brand block carries real weight now: statement + a live CTA, not a logo
            and one nine-word line over dead space. */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(260px,1.1fr)_3fr] lg:gap-16">
          <div>
            <Wordmark label={logoText} className="h-[25px] w-auto" />
            <p className={`mt-3.5 max-w-[30ch] font-fj-body text-[15px] leading-[1.6] ${taglineClass}`}>
              {tagline}
            </p>
            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 font-fj-body text-[15px] font-semibold text-[#B23E13] transition-colors hover:text-[#F05A28]"
            >
              Talk to the founder
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" />
              </svg>
            </Link>
          </div>

          <div className={`grid grid-cols-2 gap-x-8 gap-y-10 ${lgColsClass} lg:gap-8`}>
            {resolvedColumns.map((col) => (
              <div key={col.heading}>
                <p className={`font-fj-body text-[12px] font-semibold uppercase tracking-[0.13em] ${headingClass}`}>
                  {col.heading}
                </p>
                {/* mt-[18px] not mt-4.5: this is Tailwind 3.4 and 4.5 is not in the
                    default spacing scale, so mt-4.5 compiles to nothing. */}
                <ul className="mt-[18px] flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={`font-fj-body text-[14.5px] leading-snug ${linkClass}`}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition, verified directory profiles + award. Kept sitewide per
            Bhavesh 2026-08-03 (he was asked and chose to keep it). Restyled to sit
            as one quiet line rather than a stacked block with its own heading. */}
        {showRecognition && (
          <div className={`mt-14 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-7 ${dividerClass}`}>
            <span className={`font-fj-mono text-[11px] font-medium uppercase tracking-[0.16em] ${headingClass}`}>
              Recognized on
            </span>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {RECOGNITION_PROFILES.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-fj-body text-[14px] ${linkClass}`}
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
            <span className={`font-fj-body text-[13px] ${taglineClass}`}>
              Verified enterprise technology &amp; commerce engineering partner.
            </span>
          </div>
        )}
      </div>

      {/* Bottom bar: copyright, region switcher, legal. */}
      <div className={`mt-10 border-t ${dividerClass}`}>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-7 gap-y-4 px-6 py-6 md:px-8">
          <p className={`font-fj-body text-[13px] ${copyClass}`}>{copyright}</p>

          <details className="group relative">
            <summary
              className={`flex cursor-pointer list-none items-center gap-2 rounded-lg border px-3 py-1.5 font-fj-body text-[13px] transition-colors ${surfaceClass} ${taglineClass} hover:border-fj-neutral-400`}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <circle cx="8" cy="8" r="6.3" /><ellipse cx="8" cy="8" rx="2.7" ry="6.3" /><path d="M1.9 6h12.2M1.9 10h12.2" />
              </svg>
              {currentRegion}
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-200 group-open:rotate-180">
                <path d="M3 4.5 6 7.5l3-3" />
              </svg>
            </summary>
            <ul
              className={`absolute bottom-full left-0 z-30 mb-2 min-w-[220px] overflow-hidden rounded-xl border py-1.5 shadow-xl ${isDark ? 'border-white/10 bg-fj-charcoal' : 'border-fj-neutral-200 bg-white'}`}
            >
              {REGIONS.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className={`block px-4 py-2 font-fj-body text-[14px] ${linkClass} ${r.label === currentRegion ? 'font-semibold' : ''}`}
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <div className="flex-1" />

          {bottomLinks && bottomLinks.length > 0 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {bottomLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`font-fj-body text-[13px] ${bottomLinkClass}`}>
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
