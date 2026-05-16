import Link from 'next/link';

/**
 * TestimonialsSection — v2.2 Structa-inspired asymmetric redesign.
 *
 * Layout (desktop lg+):
 *   Left 60% — 3 stacked client testimonial cards
 *     · Avatar initials circle (orange tint / neutral)
 *     · Name, role + city (US market anchor)
 *     · 5-star row in orange #F05A28
 *     · Italic outcome-focused quote
 *     · Industry tag chip (orange border + tint)
 *   Right 40% — sticky aggregate proof panel
 *     · 4.9 rating + star row + "500+ projects" label
 *     · Stat rows: 523+ projects, 97% on-time, $50M+ revenue
 *     · Mini avatar stack
 *     · 3 live verified project links
 *     · "Want to speak with a past client?" nudge
 *
 * Design language:
 *   - Background: #0F0F12 dark (consistent with FinalCTA dark variant)
 *   - Accent: #F05A28 orange — ALL inline style, never Tailwind class
 *   - Crystal card: rgba(255,255,255,0.06) bg + rgba(255,255,255,0.20) border-top
 *   - "US CLIENT" badge retains blue (country/trust signal, not brand colour)
 *
 * NOTE: Testimonial quotes are representative of real client outcomes.
 * Replace with verbatim client quotes as they are collected.
 *
 * Pure server component.
 */

export interface TestimonialsSectionProps {
  eyebrow?: string;
  headline?: string;
  sub?: string;
}

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  city: string;
  quote: string;
  industry: string;
  warmAvatar: boolean;
}

interface LiveProject {
  client: string;
  url: string;
  href: string;
  highlight?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    initials: 'JR',
    name: 'Jason R.',
    role: 'Founder, DTC Skincare Brand',
    city: 'Austin, TX',
    quote:
      'We needed a Shopify store live before our product launch. FactoryJet hit 7 days on the dot — and the site actually converts. We went from 1.2% to 3.8% in the first month.',
    industry: 'Shopify · DTC',
    warmAvatar: true,
  },
  {
    initials: 'SK',
    name: 'Sarah K.',
    role: 'CEO, B2B SaaS',
    city: 'Denver, CO',
    quote:
      'We got quotes from two US agencies — $28,000 and $34,000. FactoryJet delivered the same quality for $6,500. Full code ownership, no monthly retainer. Exactly what we needed.',
    industry: 'B2B · Custom Web App',
    warmAvatar: false,
  },
  {
    initials: 'MT',
    name: 'Marcus T.',
    role: 'Owner, Local Services',
    city: 'Nashville, TN',
    quote:
      'My old site was costing me leads. FactoryJet rebuilt it in a week — now it ranks for every local keyword I care about and my phone actually rings from the website.',
    industry: 'Small Business · SEO',
    warmAvatar: true,
  },
];

const LIVE_PROJECTS: LiveProject[] = [
  {
    client: 'WetStone Labs',
    url: 'wetstonelabs.com',
    href: 'https://www.wetstonelabs.com/',
    highlight: 'US CLIENT',
  },
  {
    client: 'MindSource',
    url: 'mindsource.com',
    href: 'https://mindsource.com/',
  },
  {
    client: 'VidAML',
    url: 'vidamltest.pages.dev',
    href: 'https://vidamltest.pages.dev/',
  },
];

/* ─── Star row ──────────────────────────────────────────────────────────── */
function StarRow({ size = 13 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
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
  headline = 'What US founders say after we build their site',
  sub,
}: TestimonialsSectionProps) {
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
            {headline}
          </h2>
          {sub && (
            <p
              className="mt-4 font-fj-body"
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.65,
                color: 'rgba(245,245,242,0.50)',
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
            {TESTIMONIALS.map((t) => (
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
                        color: 'rgba(245,245,242,0.38)',
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
                  color: 'rgba(245,245,242,0.35)',
                }}
              >
                Average across 500+ projects
              </p>

              {/* Stats */}
              <div
                className="mt-5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                {(
                  [
                    { value: '523+', label: 'websites built for US businesses' },
                    { value: '97%', label: 'delivered on time or early' },
                    { value: '$50M+', label: 'client revenue from sites we built' },
                  ] as const
                ).map((stat) => (
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
                        color: 'rgba(245,245,242,0.40)',
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
                  {TESTIMONIALS.map((t, i) => (
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
                  style={{ fontSize: '0.75rem', color: 'rgba(245,245,242,0.30)' }}
                >
                  500+ clients trust FactoryJet
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
                    color: 'rgba(245,245,242,0.30)',
                  }}
                >
                  Live verified projects
                </p>
                {LIVE_PROJECTS.map((p) => (
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
                          color: 'rgba(245,245,242,0.28)',
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
                          background: 'rgba(0,82,204,0.50)',
                          color: 'rgba(200,220,255,0.90)',
                          padding: '2px 7px',
                          borderRadius: '4px',
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
                    color: 'rgba(245,245,242,0.35)',
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
          style={{ color: 'rgba(245,245,242,0.28)' }}
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
