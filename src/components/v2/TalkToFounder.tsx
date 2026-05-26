import Link from 'next/link';

/**
 * TalkToFounder — v2 founder-led CTA (Framework B+).
 *
 * Replaces "Free Strategy Call" / "Free Consultation" / "Book a Demo" CTAs
 * across /us with the Spiral-Scout-style founder pattern: round headshot +
 * 2-line bio + Calendly button + mailto secondary. Highest-converting
 * pattern in the 20-competitor benchmark (PR #2 Framework B+).
 *
 * Two layout variants:
 *   - compact: self-contained card. Drops into pricing tier cells / sidebars
 *              / Enterprise "Contact" tiers / inline contexts. No section
 *              padding — the parent provides surrounding context.
 *   - full:    section-level "founder moment" with own padding + decorative
 *              background. Used between hero & services, at service-page
 *              bottoms, About top, 404, etc.
 *
 * Two theme variants:
 *   - light: cream bg, orange CTA, ink text (default)
 *   - dark:  charcoal multi-stop gradient + aurora orbs, orange CTA,
 *            white text. Mirrors FinalCTA dark for visual consistency.
 *
 * Tech notes:
 *   - Calendly opens in new tab (target="_blank") — zero JS, preserves
 *     Lighthouse 100/100 (no Calendly widget script).
 *   - Mailto secondary uses bhavesh@factoryjet.com with surface-specific
 *     subject for sender expectation setting.
 *   - Placeholder headshot is pure inline SVG (gradient + "BB" monogram).
 *     When real photo arrives, pass `headshotSrc` prop — zero code change
 *     to any consumer page.
 *   - Pure server component — no 'use client', no hooks.
 *
 * Locked content (per memory project_founder_bio_locked + reference_calendly_url
 * + reference_factoryjet_email): DO NOT modify constants without updating memory.
 */

// ─── Locked content (see memory files) ──────────────────────────────────────
const BIO_TEXT =
  "Hi, I'm Bhavesh, founder of FactoryJet. I run every discovery call myself — so by minute 10 we already know whether what you need pays for itself, and how fast.";
const HEADLINE = 'Bhavesh — Founder, FactoryJet';
const CALENDLY_URL = 'https://calendly.com/bhavesh-factoryjet/30min';
const CONTACT_EMAIL = 'bhavesh@factoryjet.com';

// ─── Color tokens (inline for safety — match v2 design system) ──────────────
const ORANGE = '#F05A28';
const CHARCOAL = '#0F0F12';
const CREAM = '#FAFAF7';

export interface TalkToFounderProps {
  /** Layout: 'compact' fits inside grids/sidebars; 'full' is a dedicated section. */
  variant?: 'compact' | 'full';
  /** Color theme: 'light' (cream bg) or 'dark' (charcoal bg with aurora orbs). */
  theme?: 'light' | 'dark';
  /** Optional eyebrow above the card (full variant only). */
  eyebrow?: string;
  /** Override the headline if a specific surface demands different framing. */
  headline?: string;
  /** Override the bio if a specific surface demands different framing. */
  bio?: string;
  /** mailto subject — sets sender expectation. Defaults to "Hi Bhavesh". */
  mailtoSubject?: string;
  /** Primary CTA label — defaults to "Book a 30-min call". */
  calendlyLabel?: string;
  /** Secondary CTA label — defaults to "Or send a written brief". */
  mailtoLabel?: string;
  /** Real photo src (when available). If omitted, renders SVG placeholder. */
  headshotSrc?: string;
  /** Headshot alt text. */
  headshotAlt?: string;
}

/* ─── FounderHeadshot ──────────────────────────────────────────────────────
 * Renders Bhavesh's headshot. Falls back to a gradient + monogram SVG when
 * no `src` is provided (current state — real photo lands later).
 * Swap to <Image> when the production image asset is added.
 * --------------------------------------------------------------------------- */
function FounderHeadshot({
  size,
  src,
  alt,
}: {
  size: number;
  src?: string;
  alt: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    );
  }
  // Placeholder: gradient orb + "BB" monogram. Pure SVG, no asset request.
  const fontSize = Math.round(size * 0.42);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={alt}
      style={{ display: 'block', borderRadius: '50%' }}
    >
      <defs>
        <linearGradient id="fj-founder-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={CHARCOAL} />
          <stop offset="100%" stopColor={ORANGE} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#fj-founder-grad)" />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fill={CREAM}
        fontFamily="var(--font-plus-jakarta), Inter, system-ui, sans-serif"
        fontSize={fontSize}
        fontWeight="600"
        letterSpacing="-0.02em"
      >
        BB
      </text>
    </svg>
  );
}

/* ─── ArrowIcon ─────────────────────────────────────────────────────────────
 * Tiny circular arrow used inside the primary CTA — matches FinalCTA pattern.
 * --------------------------------------------------------------------------- */
function ArrowIcon() {
  return (
    <span
      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
      aria-hidden="true"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5h6M5 2l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function TalkToFounder({
  variant = 'full',
  theme = 'light',
  eyebrow,
  headline = HEADLINE,
  bio = BIO_TEXT,
  mailtoSubject = 'Hi Bhavesh',
  calendlyLabel = 'Book a 30-min call',
  mailtoLabel = 'Or send a written brief',
  headshotSrc,
  headshotAlt = 'Bhavesh, Founder of FactoryJet',
}: TalkToFounderProps) {
  const isDark = theme === 'dark';
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    mailtoSubject
  )}`;

  /* ─── COMPACT VARIANT ───────────────────────────────────────────────────
     Self-contained card. Drops into pricing tier cells / sidebars / inline
     contexts. No section padding — parent provides surrounding context.
     ---------------------------------------------------------------------- */
  if (variant === 'compact') {
    const cardBase =
      'relative overflow-hidden rounded-2xl px-6 py-7 sm:px-7 sm:py-8';
    const cardTheme = isDark
      ? 'border border-white/10'
      : 'border border-black/10 bg-white';

    return (
      <div
        className={`${cardBase} ${cardTheme}`}
        style={{
          ...(isDark
            ? {
                backgroundColor: CHARCOAL,
                backgroundImage:
                  'radial-gradient(ellipse 100% 80% at 20% 0%, rgba(240,90,40,0.10) 0%, transparent 65%)',
              }
            : {
                backgroundImage:
                  'radial-gradient(ellipse 100% 80% at 20% 0%, rgba(240,90,40,0.05) 0%, transparent 65%)',
              }),
        }}
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <FounderHeadshot size={72} src={headshotSrc} alt={headshotAlt} />
          </div>
          <div className="min-w-0">
            <p
              className="font-fj-mono font-bold uppercase"
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                color: ORANGE,
              }}
            >
              {headline}
            </p>
            <p
              className="mt-2 font-fj-body"
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.55,
                color: isDark ? 'rgba(250,250,247,0.85)' : 'rgba(15,15,18,0.85)',
              }}
            >
              {bio}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-fj-body text-sm font-semibold text-white transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background: ORANGE,
              boxShadow:
                '0 4px 16px rgba(240,90,40,0.25), 0 1px 3px rgba(240,90,40,0.15)',
              outlineColor: ORANGE,
            }}
          >
            {calendlyLabel}
            <ArrowIcon />
          </Link>
          <a
            href={mailtoHref}
            className="font-fj-body text-sm font-medium underline-offset-4 transition-colors hover:underline"
            style={{
              color: isDark ? 'rgba(250,250,247,0.75)' : 'rgba(15,15,18,0.70)',
            }}
          >
            {mailtoLabel} →
          </a>
        </div>
      </div>
    );
  }

  /* ─── FULL VARIANT — DARK ───────────────────────────────────────────────
     Section-level founder moment. Mirrors FinalCTA dark for rhythm safety.
     ---------------------------------------------------------------------- */
  if (isDark) {
    return (
      <section
        className="relative overflow-hidden py-14 md:py-20"
        style={{
          backgroundImage: [
            'radial-gradient(circle, rgba(255,255,255,0.052) 1px, transparent 1px)',
            'linear-gradient(135deg, #060D1F 0%, #0F0F12 45%, #0D0818 100%)',
          ].join(', '),
          backgroundSize: '28px 28px, 100% 100%',
        }}
      >
        {/* Orange aurora — left */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: '-10%',
            top: '15%',
            width: '720px',
            height: '720px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(240,90,40,0.22) 0%, transparent 65%)',
            filter: 'blur(48px)',
          }}
          aria-hidden="true"
        />
        {/* Warm aurora — right */}
        <div
          className="pointer-events-none absolute"
          style={{
            right: '-8%',
            top: '25%',
            width: '580px',
            height: '580px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(240,90,40,0.14) 0%, transparent 65%)',
            filter: 'blur(56px)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[860px] px-6 md:px-8 text-center">
          {eyebrow && (
            <p
              className="font-fj-mono font-bold uppercase mb-5"
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                color: ORANGE,
              }}
            >
              {eyebrow}
            </p>
          )}

          <div className="flex justify-center">
            <div
              style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.35))' }}
            >
              <FounderHeadshot size={96} src={headshotSrc} alt={headshotAlt} />
            </div>
          </div>

          <p
            className="mt-5 font-fj-body font-semibold"
            style={{
              fontSize: '1.0625rem',
              letterSpacing: '0.005em',
              color: CREAM,
            }}
          >
            {headline}
          </p>

          <p
            className="mt-4 mx-auto max-w-[640px] font-fj-body"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'rgba(250,250,247,0.80)',
            }}
          >
            “{bio}”
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-fj-body text-base font-semibold text-white transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: ORANGE,
                boxShadow:
                  '0 0 0 1px rgba(240,90,40,0.50), 0 8px 48px rgba(240,90,40,0.40), 0 2px 12px rgba(240,90,40,0.30)',
                outlineColor: ORANGE,
              }}
            >
              {calendlyLabel}
              <ArrowIcon />
            </Link>
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-7 py-3.5 font-fj-body text-base font-semibold transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ color: CREAM }}
            >
              {mailtoLabel} →
            </a>
          </div>
        </div>
      </section>
    );
  }

  /* ─── FULL VARIANT — LIGHT (default) ────────────────────────────────────
     Cream bg with subtle dot grid + center bloom + top shimmer separator.
     Mirrors FinalCTA light variant for visual rhythm consistency.
     ---------------------------------------------------------------------- */
  return (
    <section
      className="relative py-14 md:py-20"
      style={{
        backgroundImage: [
          'radial-gradient(circle, rgba(0,0,0,0.028) 1px, transparent 1px)',
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(240,90,40,0.045) 0%, transparent 65%)',
        ].join(', '),
        backgroundSize: '28px 28px, 100% 100%',
        backgroundColor: CREAM,
      }}
    >
      {/* Top shimmer separator */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(240,90,40,0.15) 30%, rgba(240,90,40,0.15) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[860px] px-6 md:px-8 text-center">
        {eyebrow && <p className="fj-eyebrow mb-5">{eyebrow}</p>}

        <div className="flex justify-center">
          <div style={{ filter: 'drop-shadow(0 6px 20px rgba(15,15,18,0.12))' }}>
            <FounderHeadshot size={96} src={headshotSrc} alt={headshotAlt} />
          </div>
        </div>

        <p
          className="mt-5 font-fj-body font-semibold"
          style={{
            fontSize: '1.0625rem',
            letterSpacing: '0.005em',
            color: CHARCOAL,
          }}
        >
          {headline}
        </p>

        <p
          className="mt-4 mx-auto max-w-[640px] font-fj-body"
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'rgba(15,15,18,0.72)',
          }}
        >
          “{bio}”
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-fj-body text-base font-semibold text-white transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background: ORANGE,
              boxShadow:
                '0 4px 24px rgba(240,90,40,0.30), 0 1px 4px rgba(240,90,40,0.15)',
              outlineColor: ORANGE,
            }}
          >
            {calendlyLabel}
            <ArrowIcon />
          </Link>
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center rounded-full border bg-white/60 px-7 py-3.5 font-fj-body text-base font-semibold backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              borderColor: 'rgba(15,15,18,0.12)',
              color: CHARCOAL,
              outlineColor: ORANGE,
            }}
          >
            {mailtoLabel} →
          </a>
        </div>
      </div>
    </section>
  );
}
