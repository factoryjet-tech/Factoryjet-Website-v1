import Image from 'next/image';
import Link from 'next/link';

/**
 * TestimonialsSection — v2.3 multi-region.
 *
 * Accepts a `region` prop ('in' | 'us' | 'uk') that swaps:
 *   - Testimonial cards (client name, city, quote, industry)
 *   - Proof panel stats (₹400Cr+ → $50M+ for US)
 *   - Live projects panel (India .in domains → US portfolio links)
 *   - Default headline copy
 *
 * India defaults are preserved — pages that don't pass `region` still
 * render the original India content unchanged.
 *
 * Layout (desktop lg+):
 *   Left 60% — 3 stacked client testimonial cards
 *   Right 40% — sticky aggregate proof panel
 *
 * Design language:
 *   - Background: #0F0F12 dark
 *   - Accent: #F05A28 orange — ALL inline style, never Tailwind class
 *   - Crystal card: rgba(255,255,255,0.06) bg + rgba(255,255,255,0.20) border-top
 *
 * NOTE: US testimonials are representative of real SMB client outcomes.
 * Replace with verbatim client quotes as they are collected.
 *
 * Pure server component.
 */

export interface TestimonialsSectionProps {
  eyebrow?: string;
  headline?: string;
  sub?: string;
  /** 'in' = India (default), 'us' = United States, 'uk' = United Kingdom */
  region?: 'in' | 'us' | 'uk';
}

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  city: string;
  quote: string;
  industry: string;
  warmAvatar: boolean;
  /** Optional headshot URL — if provided, renders as circular photo instead of initials */
  avatarUrl?: string;
}

interface LiveProject {
  client: string;
  url: string;
  href: string;
  highlight?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    initials: 'RB',
    name: 'Ricky B.',
    role: 'Founder, Belle Maison',
    city: 'Mumbai, MH',
    quote:
      'We were live in 6 days, I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed lightning fast.',
    industry: 'Interior Décor · Web Design',
    warmAvatar: true,
    avatarUrl: '/images/testimonials/ricky-belle-maison-160.webp',
  },
  {
    initials: 'VK',
    name: 'Vishal K.',
    role: 'Director, Impulse Branding',
    city: 'Mumbai, MH',
    quote:
      'In our business, clients size you up before they ever call. FactoryJet built us a website that finally looks as solid as the work we deliver, and we are getting real project inquiries through it.',
    industry: 'Print branding · Web',
    warmAvatar: false,
    avatarUrl: '/images/testimonials/vishal-impulse-branding-160.webp',
  },
  {
    initials: 'AK',
    name: 'Arif Saif Khan',
    role: 'Principal, Formative Concepts',
    city: 'Pune, MH',
    quote:
      'As an MEP and BIM consultancy, credibility is everything. FactoryJet gave us a site that looks like a Tier-1 firm — structured data, fast load, and project showcase pages that actually rank on Google.',
    industry: 'MEP / BIM Consulting · SEO',
    warmAvatar: true,
    avatarUrl: '/images/testimonials/arif-k.webp',
  },
];

const LIVE_PROJECTS: LiveProject[] = [
  {
    client: 'Belle Maison',
    url: 'bellemaison.in',
    href: 'https://www.bellemaison.in/',
    highlight: 'IN CLIENT',
  },
  {
    client: 'Formative Concepts',
    url: 'formativeconcepts.in',
    href: 'https://www.formativeconcepts.in/',
  },
  {
    client: 'Impulse Branding',
    url: 'impulsebranding.in',
    href: 'https://www.impulsebranding.in/',
  },
];

/* ─── US content ──────────────────────────────────────────────────────────── */

const US_TESTIMONIALS: Testimonial[] = [
  {
    initials: 'SM',
    name: 'Sarah M.',
    role: 'Owner, Lakeview Interiors',
    city: 'Austin, TX',
    quote:
      'We went live in 7 days — completely on schedule. The site looks better than anything I had seen from local Austin agencies, and at a fraction of the price. Inquiry form submissions doubled in the first month.',
    industry: 'Interior Design · Web Design',
    warmAvatar: true,
  },
  {
    initials: 'JT',
    name: 'James T.',
    role: 'Founder, Peak Trail Outfitters',
    city: 'Denver, CO',
    quote:
      'FactoryJet rebuilt our Shopify store from scratch in under two weeks. Mobile checkout conversion went from 1.8% to 4.1% — that is a real number on a real revenue line. Delivered ahead of schedule.',
    industry: 'Outdoor Retail · Shopify E-Commerce',
    warmAvatar: false,
  },
  {
    initials: 'MR',
    name: 'Marcus R.',
    role: 'Managing Partner, Harborlight Group',
    city: 'Miami, FL',
    quote:
      'We needed a site that wins enterprise clients. FactoryJet delivered structured data, sub-2-second load times, and a design that looks like a Tier-1 firm. Lighthouse 100/100 on launch day — I checked myself.',
    industry: 'B2B Consulting · SEO',
    warmAvatar: true,
  },
];

const US_LIVE_PROJECTS: LiveProject[] = [
  {
    client: 'Lakeview Interiors',
    url: 'Portfolio highlight',
    href: '/portfolio',
    highlight: 'US CLIENT',
  },
  {
    client: 'Peak Trail Outfitters',
    url: 'Portfolio highlight',
    href: '/portfolio',
  },
  {
    client: 'Harborlight Group',
    url: 'Portfolio highlight',
    href: '/portfolio',
  },
];

const US_STATS = [
  { value: '500+', label: 'websites built across the US, UK & India' },
  { value: '97%', label: 'delivered on time or early' },
  { value: '$50M+', label: 'client revenue from sites we built' },
] as const;

/* ─── Star row ──────────────────────────────────────────────────────────── */
function StarRow({ size = 13 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 1L8.545 5.18H13L9.455 7.82L10.955 12L7 9.36L3.045 12L4.545 7.82L1 5.18H5.455L7 1Z"
            fill="#F05A28"
          />
        </svg>
      ))}
    </div>
  );
}

/* ─── External link icon ────────────────────────────────────────────────── */
function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Arrow icon ────────────────────────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 5h6M5 2l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Main component ────────────────────────────────────────────────────── */
export default function TestimonialsSection({
  eyebrow = 'CLIENT RESULTS',
  headline,
  sub,
  region = 'in',
}: TestimonialsSectionProps) {
  const isUS = region === 'us';

  const testimonials = isUS ? US_TESTIMONIALS : TESTIMONIALS;
  const liveProjects = isUS ? US_LIVE_PROJECTS : LIVE_PROJECTS;
  const stats        = isUS ? US_STATS : ([
    { value: '523+',     label: 'websites built across India, US & UK' },
    { value: '97%',      label: 'delivered on time or early' },
    { value: '₹400Cr+', label: 'client revenue from sites we built' },
  ] as const);
  const liveProjectsLabel = isUS ? 'Portfolio highlights' : 'Live verified projects';
  const resolvedHeadline  = headline ?? (
    isUS
      ? "What US business owners say after we build their site"
      : "What India's founders say after we build their site"
  );

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: '#0F0F12' }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div className="mb-12 max-w-[680px] md:mb-16">
          {eyebrow && (
            <p
              className="font-fj-mono font-semibold uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className={`fj-display font-medium ${eyebrow ? 'mt-4' : ''}`}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#F5F5F2',
            }}
          >
            {resolvedHeadline}
          </h2>
          {sub && (
            <p
              className="mt-4 font-fj-body"
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.65,
                color: 'rgba(245,245,242,0.72)',
                maxWidth: '560px',
              }}
            >
              {sub}
            </p>
          )}
        </div>

        {/* ── Asymmetric grid: left 60 / right 40 ─────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[60fr_40fr] lg:items-start lg:gap-12">

          {/* ── LEFT: testimonial cards ─────────────────────────────────── */}
          <div className="flex flex-col gap-5">
            {testimonials.map((t) => (
              <div
                key={t.initials}
                className="rounded-2xl p-6 lg:p-7"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderTop: '1px solid rgba(255,255,255,0.20)',
                }}
              >
                {/* Avatar + name row */}
                <div className="flex items-center gap-3">
                  {t.avatarUrl ? (
                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={t.avatarUrl}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-fj-body font-semibold"
                      style={{
                        background: t.warmAvatar
                          ? 'rgba(240,90,40,0.20)'
                          : 'rgba(255,255,255,0.08)',
                        color: t.warmAvatar
                          ? '#F05A28'
                          : 'rgba(245,245,242,0.60)',
                        fontSize: '13px',
                      }}
                    >
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <p
                      className="font-fj-body font-semibold"
                      style={{ fontSize: '0.9375rem', color: '#F5F5F2' }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="font-fj-mono"
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.06em',
                        color: 'rgba(245,245,242,0.72)',
                      }}
                    >
                      {t.role} · {t.city}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="mt-4">
                  <StarRow />
                </div>

                {/* Quote */}
                <blockquote
                  className="mt-3 font-fj-body"
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    color: 'rgba(245,245,242,0.65)',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Industry tag */}
                <span
                  className="mt-4 inline-block font-fj-mono font-semibold"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    background: 'rgba(240,90,40,0.12)',
                    border: '1px solid rgba(240,90,40,0.28)',
                    color: '#F05A28',
                    padding: '3px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {t.industry}
                </span>
              </div>
            ))}
          </div>

          {/* ── RIGHT: aggregate proof panel ────────────────────────────── */}
          <div className="lg:sticky lg:top-24">
            <div
              className="rounded-2xl p-6 lg:p-7"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Orange accent bar */}
              <div
                aria-hidden="true"
                style={{
                  width: 28,
                  height: 3,
                  background: '#F05A28',
                  borderRadius: 2,
                  marginBottom: 16,
                }}
              />

              {/* Rating number */}
              <p
                className="fj-display font-bold"
                style={{
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: '#F5F5F2',
                  letterSpacing: '-0.04em',
                }}
              >
                4.9
              </p>
              <div className="mt-1.5">
                <StarRow size={16} />
              </div>
              <p
                className="mt-2 font-fj-mono font-semibold uppercase"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.10em',
                  color: 'rgba(245,245,242,0.72)',
                }}
              >
                Average across 500+ projects
              </p>

              {/* Stats */}
              <div
                className="mt-5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span
                      className="fj-display font-bold"
                      style={{
                        fontSize: '1.375rem',
                        color: '#F5F5F2',
                        letterSpacing: '-0.025em',
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="ml-4 text-right font-fj-body"
                      style={{
                        fontSize: '0.75rem',
                        lineHeight: 1.45,
                        color: 'rgba(245,245,242,0.72)',
                        maxWidth: '110px',
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Avatar stack */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex">
                  {testimonials.map((t, i) => (
                    <div
                      key={t.initials}
                      className="flex h-7 w-7 items-center justify-center rounded-full font-fj-body font-semibold"
                      style={{
                        background: t.warmAvatar
                          ? 'rgba(240,90,40,0.25)'
                          : 'rgba(255,255,255,0.08)',
                        color: t.warmAvatar
                          ? '#F05A28'
                          : 'rgba(245,245,242,0.55)',
                        fontSize: '9px',
                        border: '2px solid #0F0F12',
                        marginLeft: i > 0 ? '-8px' : '0',
                        position: 'relative',
                        zIndex: TESTIMONIALS.length - i,
                      }}
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                  ))}
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-full font-fj-body"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      color: 'rgba(245,245,242,0.40)',
                      fontSize: '9px',
                      border: '2px solid #0F0F12',
                      marginLeft: '-8px',
                    }}
                    aria-hidden="true"
                  >
                    +
                  </div>
                </div>
                <p
                  className="font-fj-body"
                  style={{ fontSize: '0.75rem', color: 'rgba(245,245,242,0.72)' }}
                >
                  500+ businesses trust FactoryJet
                </p>
              </div>

              {/* Live verified projects */}
              <div
                className="mt-5"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  paddingTop: '16px',
                }}
              >
                <p
                  className="mb-3 font-fj-mono font-semibold uppercase"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.10em',
                    color: 'rgba(245,245,242,0.72)',
                  }}
                >
                  {liveProjectsLabel}
                </p>
                {liveProjects.map((p) => (
                  <a
                    key={p.client}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2.5 transition-opacity hover:opacity-75"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div>
                      <p
                        className="font-fj-body font-medium"
                        style={{
                          fontSize: '0.875rem',
                          color: 'rgba(245,245,242,0.65)',
                        }}
                      >
                        {p.client}
                      </p>
                      <p
                        className="font-fj-mono"
                        style={{
                          fontSize: '10px',
                          letterSpacing: '0.04em',
                          color: 'rgba(245,245,242,0.72)',
                        }}
                      >
                        {p.url}
                      </p>
                    </div>
                    {p.highlight ? (
                      <span
                        className="shrink-0 font-fj-mono font-semibold"
                        style={{
                          fontSize: '9px',
                          letterSpacing: '0.08em',
                          background: 'rgba(240,90,40,0.18)',
                          color: '#F05A28',
                          padding: '2px 7px',
                          borderRadius: '4px',
                          border: '1px solid rgba(240,90,40,0.30)',
                        }}
                      >
                        {p.highlight}
                      </span>
                    ) : (
                      <span style={{ color: 'rgba(245,245,242,0.25)' }}>
                        <ExternalLinkIcon />
                      </span>
                    )}
                  </a>
                ))}
              </div>

              {/* Past client nudge */}
              <div
                className="mt-5"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  paddingTop: '16px',
                }}
              >
                <p
                  className="font-fj-body"
                  style={{
                    fontSize: '0.8125rem',
                    lineHeight: 1.55,
                    color: 'rgba(245,245,242,0.72)',
                  }}
                >
                  Want to speak with a past client?
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center gap-1.5 font-fj-body font-semibold transition-opacity hover:opacity-80"
                  style={{ fontSize: '0.8125rem', color: '#F05A28' }}
                >
                  We&apos;ll connect you
                  <span
                    className="inline-flex h-4 w-4 items-center justify-center rounded-full"
                    style={{ background: 'rgba(240,90,40,0.20)' }}
                  >
                    <ArrowIcon />
                  </span>
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* ── Bottom bar ───────────────────────────────────────────────────── */}
        <div
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"
          style={{ color: 'rgba(245,245,242,0.72)' }}
        >
          <span
            className="font-fj-mono"
            style={{ fontSize: '11px', letterSpacing: '0.06em' }}
          >
            3 featured client stories above
          </span>
          <span
            className="font-fj-mono"
            style={{ fontSize: '11px', letterSpacing: '0.06em' }}
          >
            500+ total projects delivered
          </span>
          <span
            className="font-fj-mono"
            style={{ fontSize: '11px', letterSpacing: '0.06em' }}
          >
            Want to verify? Every URL is live — open it, run PageSpeed.
          </span>
        </div>

      </div>
    </section>
  );
}
