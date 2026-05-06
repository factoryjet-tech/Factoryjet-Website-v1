import type { ReactNode } from 'react';
import Link from 'next/link';

import Heading from './Heading';

/**
 * FinalCTA — v2.0 closing CTA block per factoryjet.DESIGN.md §5.14.
 *
 * Light variant: bg-fj-neutral-50, ink/neutral-600/neutral-400 type.
 * Dark variant: bg-fj-charcoal, charcoal-text/charcoal-text-80/charcoal-muted.
 *   Primary CTA stays Jet Blue (#0052CC) on charcoal — sufficient AA contrast
 *   per the on-dark token system. Secondary CTA shifts to charcoal-muted
 *   border + charcoal-text fill.
 *
 * One of the few centred contexts allowed in v2 (§4.4 — centred reserved for
 * footer CTAs and modal dialogs).
 *
 * Pure server component.
 */

export interface FinalCTAProps {
  /** Light or dark surface. Defaults to 'light'. */
  variant?: 'light' | 'dark';
  /** Optional uppercase eyebrow above the headline. */
  eyebrow?: string;
  /** H2 content (plain text post M1.d.2 — italic-emphasis pattern dropped). */
  headline: ReactNode;
  /** Sub-line below the headline (--type-lead). */
  sub?: string;
  /** Primary CTA — solid Jet Blue. Required. */
  primaryCta: { label: string; href: string };
  /** Optional secondary CTA — outlined. */
  secondaryCta?: { label: string; href: string };
  /** Soft objection-handler line below CTAs (--type-caption, muted). Plain
   *  Inter body text post M1.d.2 — Fraunces-italic parenthetical voice dropped. */
  objectionHandler?: string;
}

export default function FinalCTA({
  variant = 'light',
  eyebrow,
  headline,
  sub,
  primaryCta,
  secondaryCta,
  objectionHandler,
}: FinalCTAProps) {
  const isDark = variant === 'dark';

  const sectionClass = isDark ? 'bg-fj-charcoal' : 'bg-fj-neutral-50';
  const headingColorClass = isDark ? 'text-fj-charcoal-text' : 'text-fj-ink';
  const subColorClass = isDark
    ? 'text-fj-charcoal-text/80'
    : 'text-fj-neutral-600';
  const objectionColorClass = isDark
    ? 'text-fj-charcoal-muted'
    : 'text-fj-neutral-400';

  // Secondary CTA — outline + ink on light, muted-border + charcoal-text on dark.
  const secondaryCtaClass = isDark
    ? 'inline-flex items-center justify-center rounded-lg border border-fj-charcoal-muted bg-transparent px-6 py-3.5 font-fj-body text-base font-semibold text-fj-charcoal-text transition-colors hover:border-fj-charcoal-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue-on-dark'
    : 'inline-flex items-center justify-center rounded-lg border border-fj-neutral-200 bg-transparent px-6 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:border-fj-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue';

  return (
    <section className={`${sectionClass} py-20 md:py-32`}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8 text-center">
        {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}

        <Heading
          as="h2"
          size="h2"
          className={`${eyebrow ? 'mt-6' : ''} ${headingColorClass}`}
        >
          {headline}
        </Heading>

        {sub && (
          <p
            className={`mt-6 mx-auto max-w-[640px] font-fj-body ${subColorClass}`}
            style={{ fontSize: '1.375rem', lineHeight: 1.5 }}
          >
            {sub}
          </p>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-lg bg-fj-jet-blue px-6 py-3.5 font-fj-body text-base font-semibold text-white transition-colors hover:bg-[#003D99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className={secondaryCtaClass}>
              {secondaryCta.label}
            </Link>
          )}
        </div>

        {objectionHandler && (
          <p
            className={`mt-6 mx-auto max-w-[560px] font-fj-body ${objectionColorClass}`}
            style={{
              fontSize: '0.8125rem',
              lineHeight: 1.5,
              letterSpacing: '0.005em',
              fontWeight: 500,
            }}
          >
            {objectionHandler}
          </p>
        )}
      </div>
    </section>
  );
}
