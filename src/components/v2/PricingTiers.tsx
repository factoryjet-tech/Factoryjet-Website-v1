import Link from 'next/link';
import MotionFadeUp from './MotionFadeUp';
import ModalCTAButton from './ModalCTAButton';
import type { ModalRegion } from '../../context/ContactModalContext';

/**
 * PricingTiers — v2.2 orange/charcoal upgrade.
 *
 * Design language:
 *   - Section bg: dot grid + cream base (#FAFAF7) — same system as rest of v2
 *   - Non-popular cards: white bg, 3px orange top-cap (#F05A28), orange circle
 *     checkmarks, orange outlined CTA (fills on hover), orange hover ring
 *   - Popular card: charcoal dark (#0F0F12) with 3px orange top-cap, orange
 *     price text, orange circle checkmarks, solid orange CTA. Elevated -mt-3.
 *   - All blue (#0052CC / #003D99) removed — full v2 orange/charcoal system.
 *   - Feature checkmarks: SVG circle+tick icons
 *   - CTA buttons: rounded-xl for premium feel
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

  /* ─── Popular (charcoal + orange) card ────────────────────────────────── */
  if (isPopular) {
    return (
      /*
       * -mt-3 on desktop: elevates the popular card 12px above the baseline,
       * creating a "chosen" visual hierarchy without JS or layout tricks.
       */
      <div className="group relative lg:-mt-3">

        {/* Outer hover ring — orange ambient glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: '0 0 0 2px rgba(240,90,40,0.50), 0 24px 80px rgba(240,90,40,0.28)',
          }}
          aria-hidden="true"
        />

        <div
          className="relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-transform duration-300 group-hover:-translate-y-1"
          style={{
            background: '#0F0F12',
            borderTopWidth: '3px',
            borderTopStyle: 'solid',
            borderTopColor: '#F05A28',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'rgba(240,90,40,0.18)',
            boxShadow: '0 24px 72px rgba(240,90,40,0.20), 0 8px 24px rgba(0,0,0,0.40), 0 2px 8px rgba(0,0,0,0.28)',
          }}
        >
          {/* Crystal shimmer — orange on dark */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(240,90,40,0.55) 35%, rgba(240,90,40,0.55) 65%, transparent 100%)',
            }}
            aria-hidden="true"
          />

          {/* MOST POPULAR badge */}
          <div
            className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full font-fj-mono font-bold uppercase"
            style={{
              fontSize: '9px',
              letterSpacing: '0.14em',
              background: 'rgba(240,90,40,0.15)',
              border: '1px solid rgba(240,90,40,0.35)',
              color: '#C94A1A',
              padding: '4px 10px',
            }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: '#F05A28' }} aria-hidden="true" />
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

          {/* Price — orange accent */}
          <p
            className="fj-display font-bold mt-6"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#C94A1A',
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
              color: 'rgba(255,255,255,0.65)',
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
                style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.82)' }}
              >
                {/* Orange circle checkmark */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-[2px] flex-shrink-0">
                  <circle cx="8" cy="8" r="7.5" stroke="rgba(240,90,40,0.40)" fill="rgba(240,90,40,0.12)"/>
                  <path d="M4.5 8l2.5 2.5 4-5" stroke="#F05A28" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA — solid orange fill */}
          <div className="mt-8">
            {tier.cta.modal ? (
              <ModalCTAButton
                label={tier.cta.label}
                region={tier.cta.region ?? 'us'}
                btnVariant="primary-light"
                className="block w-full rounded-xl px-6 py-3.5 text-center font-fj-body font-semibold text-white transition-all focus-visible:outline-white"
                style={{ fontSize: '0.9375rem', background: '#F05A28', borderRadius: '0.75rem', border: 'none' }}
              />
            ) : (
              <Link
                href={tier.cta.href ?? '/contact'}
                className="block w-full rounded-xl px-6 py-3.5 text-center font-fj-body font-semibold text-white transition-all hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05A28]"
                style={{ fontSize: '0.9375rem', background: '#F05A28', boxShadow: '0 4px 16px rgba(240,90,40,0.38)' }}
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

      {/* Outer hover ring — orange glow OUTSIDE overflow-hidden */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: '0 0 0 2px rgba(240,90,40,0.38), 0 16px 48px rgba(240,90,40,0.10)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-transform duration-300 group-hover:-translate-y-1"
        style={{
          background: '#FFFFFF',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'rgba(0,0,0,0.08)',
          borderTopWidth: '3px',
          borderTopColor: '#F05A28',
          boxShadow: '0 4px 20px rgba(240,90,40,0.06), 0 1px 4px rgba(0,0,0,0.05)',
        }}
      >
        {/* Crystal shimmer — orange */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(240,90,40,0.30) 35%, rgba(240,90,40,0.30) 65%, transparent 100%)',
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
            fontSize: 'clamp(1.625rem, 3vw, 2.25rem)',
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
              {/* Orange circle checkmark */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-[2px] flex-shrink-0">
                <circle cx="8" cy="8" r="7.5" stroke="rgba(240,90,40,0.28)" fill="rgba(240,90,40,0.06)"/>
                <path d="M4.5 8l2.5 2.5 4-5" stroke="#F05A28" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
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
              className="block w-full rounded-xl border border-[#F05A28] bg-transparent px-6 py-3.5 text-center font-fj-body font-semibold text-[#C94A1A] transition-all hover:bg-[#F05A28] hover:text-white focus-visible:outline-[#F05A28]"
              style={{ fontSize: '0.9375rem' }}
            />
          ) : (
            <Link
              href={tier.cta.href ?? '/contact'}
              className="block w-full rounded-xl border border-[#F05A28] bg-transparent px-6 py-3.5 text-center font-fj-body font-semibold text-[#C94A1A] transition-all hover:bg-[#F05A28] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05A28]"
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
