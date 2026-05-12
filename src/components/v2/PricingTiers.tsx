import Link from 'next/link';
import MotionFadeUp from './MotionFadeUp';
import ModalCTAButton from './ModalCTAButton';
import type { ModalRegion } from '../../context/ContactModalContext';

/**
 * PricingTiers — v2.1 visual upgrade.
 *
 * Design language (Path A — CSS/JSX only):
 *   - Section bg: dot grid + top-centre bloom + cream base (same system as
 *     IndustriesGrid — consistent language across all card-grid sections)
 *   - Headline: clamp(1.625rem, 3vw, 2.5rem) replacing <Heading size="h2">
 *     which was oversizing at clamp(2rem, 4vw, 3.5rem)
 *   - Non-popular cards: full v2.1 card pattern — gradient fill
 *     (white→EEF3FF), 3px blue top-cap, crystal shimmer line, outer ring
 *     hover (wrapper div OUTSIDE overflow-hidden — no glow clipping)
 *   - Popular card: full dark-blue gradient (#003D99→#0052CC→#1A6AE8), white
 *     text, elevated shadow, MOST POPULAR chip, inverted CTA (white bg + blue
 *     text). Pulled 12px upward via -mt-3 on desktop to appear elevated.
 *   - Feature checkmarks: SVG circle+tick icons replacing plain text ✓
 *   - CTA buttons: rounded-xl (not rounded-lg) for premium feel
 *
 * Tuple-typed `tiers` enforces exactly three at compile time.
 * Pure server component.
 */

import type { ReactNode } from 'react';

export interface PricingTier {
  name: string;
  /** e.g. "£1,200–£2,500" — pre-formatted for display. */
  priceRange: string;
  description: string;
  /** 5–8 bullets per spec. */
  features: ReadonlyArray<string>;
  cta: { label: string; href?: string; modal?: true; region?: ModalRegion };
  /** Exactly one tier should be popular (typically the middle). */
  popular?: boolean;
}

export interface PricingTiersProps {
  eyebrow?: string;
  /** H2 content. */
  headline: ReactNode;
  lead?: string;
  /** Tuple — exactly 3 tiers required. */
  tiers: readonly [PricingTier, PricingTier, PricingTier];
  /** Optional muted footnote line below the grid. */
  footnote?: string;
}

export default function PricingTiers({
  eyebrow,
  headline,
  lead,
  tiers,
  footnote,
}: PricingTiersProps) {
  return (
    <section
      className="py-10 md:py-14"
      style={{
        /*
         * Clean cream + visible dot grid. No section-level bloom — the cards
         * are the visual heroes here. A faint off-centre tint at 4.5% opacity
         * looks like a printing smudge, not a design decision.
         */
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.068) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="max-w-[720px]">
          {eyebrow && (
            <p className="fj-eyebrow">{eyebrow}</p>
          )}
          <h2
            className={`fj-display font-semibold text-fj-ink ${eyebrow ? 'mt-3' : ''}`}
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            {headline}
          </h2>
          {lead && (
            <p
              className="mt-4 max-w-[580px] font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1rem', lineHeight: 1.65 }}
            >
              {lead}
            </p>
          )}
        </div>

        {/* ── Tiers grid ─────────────────────────────────────────────────── */}
        {/*
         * items-start: allows the popular card to be elevated (-mt-3) without
         * stretching the other cards to fill the same height baseline.
         */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {tiers.map((tier, i) => (
            <MotionFadeUp key={i} delay={i * 0.08}>
              <TierCard tier={tier} />
            </MotionFadeUp>
          ))}
        </div>

        {/* Footnote */}
        {footnote && (
          <p
            className="mt-8 text-center font-fj-body text-fj-neutral-400"
            style={{ fontSize: '0.8125rem' }}
          >
            {footnote}
          </p>
        )}

      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: PricingTier }) {
  const isPopular = tier.popular === true;

  /* ─── Popular (dark blue) card ─────────────────────────────────────────── */
  if (isPopular) {
    return (
      /*
       * -mt-3 on desktop: elevates the popular card 12px above the baseline,
       * creating a "chosen" visual hierarchy without JS or layout tricks.
       */
      <div className="group relative lg:-mt-3">

        {/* Outer hover ring — white glow (inverted from standard blue ring) */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: '0 0 0 2px rgba(255,255,255,0.28), 0 24px 80px rgba(0,82,204,0.50)',
          }}
          aria-hidden="true"
        />

        <div
          className="relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-transform duration-300 group-hover:-translate-y-1"
          style={{
            background: 'linear-gradient(155deg, #003D99 0%, #0052CC 50%, #1A6AE8 100%)',
            boxShadow: '0 24px 72px rgba(0,82,204,0.42), 0 8px 24px rgba(0,82,204,0.28), 0 2px 8px rgba(0,82,204,0.20)',
          }}
        >
          {/* Crystal shimmer — white on dark */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.38) 35%, rgba(255,255,255,0.38) 65%, transparent 100%)',
            }}
            aria-hidden="true"
          />

          {/* MOST POPULAR badge */}
          <div
            className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full font-fj-mono font-bold uppercase"
            style={{
              fontSize: '9px',
              letterSpacing: '0.14em',
              background: 'rgba(255,255,255,0.18)',
              border: '1px solid rgba(255,255,255,0.28)',
              color: 'rgba(255,255,255,0.92)',
              padding: '4px 10px',
            }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
            MOST POPULAR
          </div>

          {/* Tier name */}
          <h3
            className="fj-display font-semibold"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              color: 'rgba(255,255,255,0.90)',
            }}
          >
            {tier.name}
          </h3>

          {/* Price */}
          <p
            className="fj-display font-bold mt-6"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            {tier.priceRange}
          </p>

          {/* Description */}
          <p
            className="mt-3 font-fj-body"
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            {tier.description}
          </p>

          {/* Feature list */}
          <ul className="mt-8 flex-grow space-y-3.5">
            {tier.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-fj-body"
                style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.88)' }}
              >
                {/* White circle checkmark */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-[2px] flex-shrink-0">
                  <circle cx="8" cy="8" r="7.5" stroke="rgba(255,255,255,0.30)" fill="rgba(255,255,255,0.10)"/>
                  <path d="M4.5 8l2.5 2.5 4-5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA — inverted: white bg + blue text */}
          <div className="mt-8">
            {tier.cta.modal ? (
              <ModalCTAButton
                label={tier.cta.label}
                region={tier.cta.region ?? 'us'}
                btnVariant="secondary-light"
                className="block w-full rounded-xl bg-white px-6 py-3.5 text-center font-fj-body font-semibold text-fj-jet-blue transition-all hover:bg-[#F0F4FF] focus-visible:outline-white"
                style={{ fontSize: '0.9375rem', borderRadius: '0.75rem', border: 'none' }}
              />
            ) : (
              <Link
                href={tier.cta.href ?? '/contact'}
                className="block w-full rounded-xl bg-white px-6 py-3.5 text-center font-fj-body font-semibold text-fj-jet-blue transition-all hover:bg-[#F0F4FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ fontSize: '0.9375rem' }}
              >
                {tier.cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ─── Standard (non-popular) card ─────────────────────────────────────── */
  return (
    <div className="group relative h-full">

      {/* Outer hover ring — blue glow OUTSIDE overflow-hidden */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: '0 0 0 2px rgba(0,82,204,0.38), 0 16px 48px rgba(0,82,204,0.14)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-transform duration-300 group-hover:-translate-y-1"
        style={{
          background: 'linear-gradient(165deg, #FFFFFF 0%, #EEF3FF 100%)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'rgba(0,82,204,0.12)',
          borderTopWidth: '3px',
          borderTopColor: 'rgba(0,82,204,0.65)',
          boxShadow: '0 4px 20px rgba(0,82,204,0.07), 0 1px 4px rgba(0,0,0,0.05)',
        }}
      >
        {/* Crystal shimmer */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,82,204,0.30) 35%, rgba(0,82,204,0.30) 65%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Tier name */}
        <h3
          className="fj-display font-semibold text-fj-ink"
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
          }}
        >
          {tier.name}
        </h3>

        {/* Price */}
        <p
          className="fj-display font-bold mt-6 text-fj-ink"
          style={{
            fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}
        >
          {tier.priceRange}
        </p>

        {/* Description */}
        <p
          className="mt-3 font-fj-body text-fj-neutral-600"
          style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
        >
          {tier.description}
        </p>

        {/* Feature list */}
        <ul className="mt-8 flex-grow space-y-3.5">
          {tier.features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-3 font-fj-body text-fj-ink"
              style={{ fontSize: '0.9375rem' }}
            >
              {/* Blue circle checkmark */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-[2px] flex-shrink-0">
                <circle cx="8" cy="8" r="7.5" stroke="rgba(0,82,204,0.25)" fill="rgba(0,82,204,0.06)"/>
                <path d="M4.5 8l2.5 2.5 4-5" stroke="#0052CC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA — outlined blue → fills on hover */}
        <div className="mt-8">
          {tier.cta.modal ? (
            <ModalCTAButton
              label={tier.cta.label}
              region={tier.cta.region ?? 'us'}
              btnVariant="secondary-light"
              className="block w-full rounded-xl border border-fj-jet-blue bg-transparent px-6 py-3.5 text-center font-fj-body font-semibold text-fj-jet-blue transition-all hover:bg-fj-jet-blue hover:text-white focus-visible:outline-fj-jet-blue"
              style={{ fontSize: '0.9375rem' }}
            />
          ) : (
            <Link
              href={tier.cta.href ?? '/contact'}
              className="block w-full rounded-xl border border-fj-jet-blue bg-transparent px-6 py-3.5 text-center font-fj-body font-semibold text-fj-jet-blue transition-all hover:bg-fj-jet-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
              style={{ fontSize: '0.9375rem' }}
            >
              {tier.cta.label}
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
