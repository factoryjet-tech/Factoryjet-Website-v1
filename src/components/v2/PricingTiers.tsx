import Link from 'next/link';
import { Heading } from './Heading';
import MotionFadeUp from './MotionFadeUp';

/**
 * PricingTiers — v2.0 pricing block per factoryjet.DESIGN.md §5.6 +
 * pricing-card pattern.
 *
 * `bg-fj-neutral-50` section background (subtle warmth differentiation
 * from cream sections above/below). Three cream-surfaced cards in a row
 * on desktop (the 70% rule — cream cards stay dominant even on the
 * neutral-50 strip). The popular tier gets a 2px Jet Blue ring + a small
 * eyebrow-style POPULAR badge.
 *
 * Tuple-typed `tiers` enforces exactly three at compile time — fewer or
 * more reads as a layout error and never reaches runtime.
 *
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
  cta: { label: string; href: string };
  /** Exactly one tier should be popular (typically the middle). */
  popular?: boolean;
}

export interface PricingTiersProps {
  eyebrow?: string;
  /** H2 content (plain text post M1.d.2 — italic-emphasis pattern dropped). */
  headline: ReactNode;
  lead?: string;
  /** Tuple — exactly 3 tiers required. */
  tiers: readonly [PricingTier, PricingTier, PricingTier];
  /** Optional muted footnote line below the grid. Plain Inter body text
   *  post M1.d.2 — boring-stats Fraunces-italic voice dropped. */
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
    <section className="bg-fj-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        {/* Header */}
        <div className="max-w-[820px]">
          {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
          <Heading
            as="h2"
            size="h2"
            className={`text-fj-ink ${eyebrow ? 'mt-6' : ''}`}
          >
            {headline}
          </Heading>
          {lead && (
            <p className="mt-6 max-w-[560px] font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
              {lead}
            </p>
          )}
        </div>

        {/* Tiers grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <MotionFadeUp key={i} delay={i * 0.1} className="transition-transform duration-200 hover:-translate-y-1">
              <TierCard tier={tier} />
            </MotionFadeUp>
          ))}
        </div>

        {/* Footnote */}
        {footnote && (
          <p className="mt-8 text-center font-fj-body text-[0.8125rem] text-fj-neutral-400">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: PricingTier }) {
  const isPopular = tier.popular === true;

  const borderClass = isPopular
    ? 'border-2 border-fj-jet-blue'
    : 'border border-fj-neutral-200';

  const ctaClass = isPopular
    ? 'block w-full rounded-lg bg-fj-jet-blue px-6 py-3.5 text-center font-fj-body text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[#003D99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue'
    : 'block w-full rounded-lg border border-fj-ink bg-transparent px-6 py-3.5 text-center font-fj-body text-[0.9375rem] font-semibold text-fj-ink transition-colors hover:bg-fj-ink hover:text-fj-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue';

  return (
    <div className={`flex h-full flex-col rounded-2xl bg-fj-cream p-8 ${borderClass}`}>
      {isPopular && (
        <p className="fj-eyebrow mb-4 text-fj-jet-blue">POPULAR</p>
      )}
      <Heading as="h3" size="h4" className="text-fj-ink">
        {tier.name}
      </Heading>
      <p className="fj-display font-fj-display mt-6 text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-fj-ink">
        {tier.priceRange}
      </p>
      <p className="mt-3 font-fj-body text-[0.9375rem] text-fj-neutral-600">
        {tier.description}
      </p>
      <ul className="mt-8 flex-grow space-y-3">
        {tier.features.map((f, i) => (
          <li
            key={i}
            className="flex items-start gap-3 font-fj-body text-[0.9375rem] text-fj-ink"
          >
            <span aria-hidden className="mt-1 text-fj-jet-blue">
              ✓
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href={tier.cta.href} className={ctaClass}>
          {tier.cta.label}
        </Link>
      </div>
    </div>
  );
}
