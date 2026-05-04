import type { ReactNode } from 'react';
import Link from 'next/link';

import Heading from './Heading';

/**
 * Hero — v2.0 light-variant hero per factoryjet.DESIGN.md §5.1.
 *
 * Replaces the dark-hero pattern. Cream background, asymmetric 7/5 split when
 * a `rightSlot` is provided, single-column at 820px max otherwise. Display
 * type via the Heading wrapper (Fraunces tuned axes + auto-italic on `<em>`).
 *
 * No animations on load, no particles, no video bg, no glow effects (§5.1).
 *
 * Pure server component.
 */

export interface HeroProps {
  /** Optional uppercase eyebrow above the headline (--type-eyebrow, fj-jet-blue). */
  eyebrow?: string;
  /** H1 content. Pass JSX with `<em>` for italic conviction words (§3.5). */
  headline: ReactNode;
  /** Lead paragraph (--type-lead). Capped at max-w-[560px] for read line. */
  lead?: string;
  /** Primary CTA — solid Jet Blue. */
  primaryCta?: { label: string; href: string };
  /** Secondary CTA — outlined ink. */
  secondaryCta?: { label: string; href: string };
  /** Trust strip below CTAs, dot-separated (--type-caption, neutral-400). */
  trustItems?: string[];
  /** Optional right-column content (asset, illustration, mockup). When
   *  provided, the layout switches to the 7/5 asymmetric grid. When omitted,
   *  hero renders single-column with content capped at 820px. */
  rightSlot?: ReactNode;
}

export default function Hero({
  eyebrow,
  headline,
  lead,
  primaryCta,
  secondaryCta,
  trustItems,
  rightSlot,
}: HeroProps) {
  const hasRightSlot = rightSlot !== undefined && rightSlot !== null;

  return (
    <section className="bg-fj-cream py-24 md:py-40">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        {hasRightSlot ? (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <HeroContent
                eyebrow={eyebrow}
                headline={headline}
                lead={lead}
                primaryCta={primaryCta}
                secondaryCta={secondaryCta}
                trustItems={trustItems}
              />
            </div>
            <div className="lg:col-span-5">{rightSlot}</div>
          </div>
        ) : (
          <div className="max-w-[820px]">
            <HeroContent
              eyebrow={eyebrow}
              headline={headline}
              lead={lead}
              primaryCta={primaryCta}
              secondaryCta={secondaryCta}
              trustItems={trustItems}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function HeroContent({
  eyebrow,
  headline,
  lead,
  primaryCta,
  secondaryCta,
  trustItems,
}: Omit<HeroProps, 'rightSlot'>) {
  return (
    <>
      {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}

      <Heading
        as="h1"
        size="hero"
        className={`text-fj-ink ${eyebrow ? 'mt-6' : ''}`}
      >
        {headline}
      </Heading>

      {lead && (
        <p
          className="mt-6 max-w-[560px] font-fj-body text-fj-neutral-600"
          style={{ fontSize: '1.375rem', lineHeight: 1.5 }}
        >
          {lead}
        </p>
      )}

      {(primaryCta || secondaryCta) && (
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-fj-jet-blue px-6 py-3.5 font-fj-body text-base font-semibold text-white transition-colors hover:bg-[#003D99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-fj-neutral-200 bg-transparent px-6 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:border-fj-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      )}

      {trustItems && trustItems.length > 0 && (
        <div
          className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-fj-body font-medium text-fj-neutral-400"
          style={{ fontSize: '0.8125rem', letterSpacing: '0.005em' }}
        >
          {trustItems.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden>·</span>}
              <span>{item}</span>
            </span>
          ))}
        </div>
      )}
    </>
  );
}
