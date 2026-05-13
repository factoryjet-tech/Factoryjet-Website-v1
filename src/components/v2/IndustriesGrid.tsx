import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * IndustriesGrid — v2.1 dark strategic section.
 *
 * Design: Editorial zig-zag layout on #0c0c17 background.
 * Crystal UI cards (glass gradient + border-top highlight + inset glow).
 * 4 background refraction blobs. Watermark numbers bottom-right of each card.
 * Self-contained — no props. Pure server component.
 *
 * Layout (desktop):
 *   Row 1: [2fr E-Commerce content]          [1fr Orange stat]
 *   Row 2: [1fr Orange stat]                 [2fr Professional Services]
 *   Row 3: [1fr Healthcare] [1fr Retail]
 *   Row 4: [1fr Restaurants] [1fr Real Estate]
 */

/* ── Legacy props interface — kept for backward-compat with existing pages ── */
// All fields optional so callers that still pass eyebrow/headline/sectors
// continue to typecheck without modification. The new component ignores them
// and renders from its own hardcoded data.
export interface IndustryCard {
  name: string;
  description: string;
  example?: string;
  linkLabel?: string;
  linkHref?: string;
  icon?: string;
  href?: string;
}
export interface IndustriesGridProps {
  eyebrow?: string;
  headline?: ReactNode;
  lead?: string;
  sectors?: ReadonlyArray<IndustryCard>;
}

const ORANGE = '#F05A28';
const DARK_BG = '#0c0c17';

/* ── Static section copy ───────────────────────────────────────────────── */

const EYEBROW = 'INDUSTRIES WE SERVE';
const HEADLINE = 'Built for the Industries Where Credibility Closes Deals';
const LEAD =
  'We specialise in sectors where trust, speed, and technical precision determine whether a visitor becomes a client. Every build is tailored to your buyers, not adapted from a generic template.';

/* ── Industry data ─────────────────────────────────────────────────────── */

const INDUSTRIES = [
  {
    id: 1,
    name: 'E-Commerce & DTC Brands',
    description:
      'Custom Shopify and headless commerce storefronts that outperform templates — faster load times, higher AOV, and better mobile conversion rates for direct-to-consumer brands.',
    stat: '+38%',
    statLabel: 'avg. conversion lift on custom Shopify vs. off-the-shelf template builds',
    chips: ['Shopify', 'Headless', 'DTC', 'Klaviyo'],
    linkHref: '/us/services/ecommerce-development',
    linkLabel: 'See e-commerce builds',
  },
  {
    id: 2,
    name: 'Professional Services',
    description:
      'Accountants, consultants, financial advisors, and agencies — credibility-first websites built to generate qualified inbound leads and shorten long B2B sales cycles.',
    stat: '3.2×',
    statLabel: 'more qualified inbound leads within 90 days of launch',
    chips: ['Consulting', 'Finance', 'Agencies', 'B2B'],
    linkHref: '/contact',
    linkLabel: 'Talk to us',
  },
  {
    id: 3,
    name: 'Healthcare & MedTech',
    description:
      'HIPAA-aware, ADA-compliant web experiences for practices, clinics, and health tech companies — built to earn patient trust and drive appointment bookings.',
    stat: '+52%',
    statLabel: 'increase in appointment bookings after redesign',
    chips: ['HIPAA-aware', 'ADA', 'MedTech'],
    linkHref: '/contact',
    linkLabel: 'Talk to us',
  },
  {
    id: 4,
    name: 'Retail & Local Businesses',
    description:
      'Mobile-first sites optimised for local search, foot traffic, and repeat customers — delivering measurable ROI for brick-and-mortar and omnichannel brands.',
    stat: '+41%',
    statLabel: 'increase in local organic search traffic within 60 days',
    chips: ['Local SEO', 'Google Maps', 'Mobile-First'],
    linkHref: '/contact',
    linkLabel: 'Talk to us',
  },
  {
    id: 5,
    name: 'Restaurants & Hospitality',
    description:
      'High-converting reservation pages, rich menu experiences, and loyalty-building sites that turn first-time visitors into regulars and drive repeat bookings.',
    stat: '+29%',
    statLabel: 'more online reservations vs. generic restaurant template sites',
    chips: ['Reservations', 'Menus', 'Loyalty'],
    linkHref: '/contact',
    linkLabel: 'Talk to us',
  },
  {
    id: 6,
    name: 'Real Estate',
    description:
      'Property listing sites, agent portals, and IDX-integrated platforms that turn browsers into booked showings, captured leads, and closed deals.',
    stat: '4.7×',
    statLabel: 'more lead form submissions on custom vs. template real estate sites',
    chips: ['IDX Integration', 'Lead Capture', 'Agent Portals'],
    linkHref: '/us/services/real-estate-website-design',
    linkLabel: 'See real estate builds',
  },
];

type Industry = (typeof INDUSTRIES)[number];

/* ── Shared crystal card base style ───────────────────────────────────── */

const CRYSTAL: React.CSSProperties = {
  background:
    'linear-gradient(145deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.05) 100%)',
  border: '0.5px solid rgba(255,255,255,0.11)',
  borderTop: '1px solid rgba(255,255,255,0.28)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.16)',
  padding: '28px',
  position: 'relative',
  overflow: 'hidden',
};

/* ── Sub-components ────────────────────────────────────────────────────── */

function CrystalTopShimmer() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background:
          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.32) 40%, rgba(255,255,255,0.32) 60%, transparent 100%)',
        pointerEvents: 'none',
      }}
    />
  );
}

function WatermarkNum({ n }: { n: number }) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: -14,
        right: 14,
        fontSize: 88,
        lineHeight: 1,
        fontWeight: 700,
        color: 'rgba(240,90,40,0.08)',
        fontFamily: 'var(--font-fj-mono, monospace)',
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-0.04em',
      }}
    >
      {String(n).padStart(2, '0')}
    </span>
  );
}

function ServiceChips({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((chip) => (
        <span
          key={chip}
          style={{
            background: 'rgba(240,90,40,0.14)',
            color: ORANGE,
            border: '0.5px solid rgba(240,90,40,0.30)',
            borderRadius: 20,
            padding: '3px 10px',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.06em',
            fontFamily: 'var(--font-fj-mono, monospace)',
          }}
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

/** Full industry content card */
function IndustryCard({ industry, titleSize = 24 }: { industry: Industry; titleSize?: number }) {
  return (
    <div style={CRYSTAL}>
      <CrystalTopShimmer />
      <WatermarkNum n={industry.id} />

      {/* Orange accent bar */}
      <div
        aria-hidden="true"
        style={{ width: 28, height: 3, borderRadius: 99, background: ORANGE, marginBottom: 16 }}
      />

      <h3
        style={{
          fontSize: titleSize,
          fontWeight: 600,
          color: '#FFFFFF',
          lineHeight: 1.2,
          letterSpacing: '-0.022em',
          paddingRight: 52,
        }}
      >
        {industry.name}
      </h3>

      <p
        style={{
          marginTop: 12,
          fontSize: 15,
          lineHeight: 1.65,
          color: 'rgba(255,255,255,0.55)',
          maxWidth: 500,
        }}
      >
        {industry.description}
      </p>

      {/* Outcome stat */}
      <div
        style={{
          marginTop: 20,
          paddingTop: 16,
          borderTop: '0.5px solid rgba(255,255,255,0.10)',
          display: 'flex',
          alignItems: 'baseline',
          gap: 10,
        }}
      >
        <span style={{ fontSize: 26, fontWeight: 500, color: ORANGE, lineHeight: 1 }}>
          {industry.stat}
        </span>
        <span
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.38)',
            lineHeight: 1.4,
            maxWidth: 260,
          }}
        >
          {industry.statLabel}
        </span>
      </div>

      <ServiceChips items={industry.chips} />

      <Link
        href={industry.linkHref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          marginTop: 20,
          fontSize: 13,
          fontWeight: 600,
          color: ORANGE,
          textDecoration: 'none',
        }}
      >
        {industry.linkLabel}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2.5 6h7M6.5 3l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}

/** Orange stat/proof card used between industry rows */
function OrangeStatCard({
  stat,
  statLabel,
  tagline,
}: {
  stat: string;
  statLabel: string;
  tagline?: string;
}) {
  return (
    <div
      style={{
        background: ORANGE,
        padding: '36px 28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 200,
      }}
    >
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.10)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 110,
          height: 110,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.07)',
          pointerEvents: 'none',
        }}
      />

      <span
        style={{
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}
      >
        {stat}
      </span>
      <p
        style={{
          marginTop: 12,
          fontSize: 14,
          color: 'rgba(255,255,255,0.80)',
          lineHeight: 1.5,
          maxWidth: 220,
        }}
      >
        {statLabel}
      </p>
      {tagline && (
        <p
          style={{
            marginTop: 20,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-fj-mono, monospace)',
          }}
        >
          {tagline}
        </p>
      )}
    </div>
  );
}

/* ── Main export ───────────────────────────────────────────────────────── */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function IndustriesGrid(_props: IndustriesGridProps = {}) {
  return (
    <section
      style={{ background: DARK_BG, position: 'relative', overflow: 'hidden' }}
      className="py-14 md:py-20"
    >
      {/* ── Background refraction blobs ──────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none select-none">
        {/* Orange — top-left */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'rgba(240,90,40,0.14)',
            filter: 'blur(120px)',
            zIndex: 0,
          }}
        />
        {/* Purple — bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -60,
            width: 440,
            height: 440,
            borderRadius: '50%',
            background: 'rgba(110,40,220,0.11)',
            filter: 'blur(110px)',
            zIndex: 0,
          }}
        />
        {/* Blue — centre */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '45%',
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'rgba(20,70,210,0.07)',
            filter: 'blur(100px)',
            zIndex: 0,
          }}
        />
        {/* Small orange — top-right */}
        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 100,
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'rgba(240,90,40,0.08)',
            filter: 'blur(80px)',
            zIndex: 0,
          }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div
        className="mx-auto max-w-[1120px] px-6 md:px-8"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Section header */}
        <div className="max-w-[680px]">
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: ORANGE,
              fontFamily: 'var(--font-fj-mono, monospace)',
            }}
          >
            {EYEBROW}
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginTop: 12,
            }}
          >
            {HEADLINE}
          </h2>
          <p
            style={{
              marginTop: 14,
              fontSize: 15,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.42)',
              maxWidth: 560,
            }}
          >
            {LEAD}
          </p>
        </div>

        {/* ── Zig-zag grid rows ─────────────────────────────────────── */}
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            overflow: 'hidden',
            borderRadius: 12,
          }}
        >
          {/* Row 1 — [2fr content] [1fr orange stat] */}
          <div className="grid grid-cols-1 gap-[3px] lg:grid-cols-[2fr_1fr]">
            <IndustryCard industry={INDUSTRIES[0]} titleSize={24} />
            <OrangeStatCard
              stat="523+"
              statLabel="US businesses served across 30+ industries"
              tagline="7-day delivery · fixed pricing"
            />
          </div>

          {/* Row 2 — [1fr orange stat] [2fr content] */}
          <div className="grid grid-cols-1 gap-[3px] lg:grid-cols-[1fr_2fr]">
            <OrangeStatCard
              stat="60–70%"
              statLabel="less than US agency pricing, with full code ownership on day one"
              tagline="no retainers · no lock-in"
            />
            <IndustryCard industry={INDUSTRIES[1]} titleSize={24} />
          </div>

          {/* Row 3 — [1fr] [1fr] 2×2 grid */}
          <div className="grid grid-cols-1 gap-[3px] sm:grid-cols-2">
            <IndustryCard industry={INDUSTRIES[2]} titleSize={22} />
            <IndustryCard industry={INDUSTRIES[3]} titleSize={22} />
          </div>

          {/* Row 4 — [1fr] [1fr] 2×2 grid */}
          <div className="grid grid-cols-1 gap-[3px] sm:grid-cols-2">
            <IndustryCard industry={INDUSTRIES[4]} titleSize={22} />
            <IndustryCard industry={INDUSTRIES[5]} titleSize={22} />
          </div>
        </div>

        {/* ── CTA strip ─────────────────────────────────────────────── */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: ORANGE,
              color: '#fff',
              padding: '12px 28px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Get a Free Strategy Call
          </Link>
          <Link
            href="/us/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              color: 'rgba(255,255,255,0.65)',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            See our portfolio
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2.5 6h7M6.5 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
