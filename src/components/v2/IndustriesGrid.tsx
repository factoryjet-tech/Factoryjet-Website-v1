import Link from 'next/link';
import { Heading } from './Heading';

/**
 * IndustriesGrid — v2.0 industries block.
 *
 * Cream section. Responsive grid: 1 col mobile, 2 cols at md, 3 cols at
 * lg. Accepts 4–6 sectors; fewer than 6 simply leaves the trailing row
 * partially populated (no special markup needed).
 *
 * Cards use `bg-fj-neutral-50` on the cream section, alternating the
 * cream-card-on-neutral-50 pattern from PricingTiers. Hover shifts the
 * border to Jet Blue — restraint-lane interaction, no glow / no shadow.
 *
 * Pure server component.
 */

import type { ReactNode } from 'react';

export interface IndustryCard {
  name: string;
  /** ~30–60 words describing the sector and what's at stake. */
  description: string;
  /** Optional 1-line example or stat in Jet Blue. */
  example?: string;
  /** Optional follow-on link (paired — both label and href, or neither). */
  linkLabel?: string;
  linkHref?: string;
}

export interface IndustriesGridProps {
  eyebrow?: string;
  /** H2 content (plain text post M1.d.2 — italic-emphasis pattern dropped). */
  headline: ReactNode;
  lead?: string;
  /** 4–6 sectors per spec. */
  sectors: ReadonlyArray<IndustryCard>;
}

export default function IndustriesGrid({
  eyebrow,
  headline,
  lead,
  sectors,
}: IndustriesGridProps) {
  return (
    <section className="bg-fj-cream py-24 md:py-32">
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
            <p className="mt-6 max-w-[640px] font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
              {lead}
            </p>
          )}
        </div>

        {/* Sectors grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <article
              key={i}
              className="rounded-2xl border border-fj-neutral-200 bg-fj-neutral-50 p-6 transition-colors hover:border-fj-jet-blue"
            >
              <Heading as="h3" size="h4" className="text-fj-ink">
                {sector.name}
              </Heading>
              <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.55] text-fj-neutral-600">
                {sector.description}
              </p>
              {sector.example && (
                <p className="mt-3 font-fj-body text-[0.8125rem] font-medium text-fj-jet-blue">
                  {sector.example}
                </p>
              )}
              {sector.linkLabel && sector.linkHref && (
                <Link
                  href={sector.linkHref}
                  className="mt-4 inline-flex items-center gap-2 font-fj-body text-[0.9375rem] font-semibold text-fj-jet-blue hover:underline"
                >
                  {sector.linkLabel}
                  <span aria-hidden>→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
