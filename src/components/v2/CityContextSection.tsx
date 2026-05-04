import { Heading } from './Heading';

/**
 * CityContextSection — v2.0 city-context block.
 *
 * Asymmetric 7/12 + 5/12 grid (§4.4): lead text left, stat strip right.
 * Cream background. The stat-strip column stacks 3 stats vertically,
 * each with a numeric value (Fraunces tuned, Jet Blue), label, and
 * external source link.
 *
 * Pure server component.
 */

import type { ReactNode } from 'react';

export interface CityContextSectionProps {
  eyebrow?: string;
  /** H2 content. Pass JSX with `<em>` for italic conviction words. */
  headline: ReactNode;
  /** 1–3 paragraphs forming the lead. */
  leadParagraphs: ReadonlyArray<string>;
  /** Exactly 3 stats expected per spec; type stays generic to remain
   *  resilient to copy variation. */
  stats: ReadonlyArray<{
    value: string;
    label: string;
    sourceUrl: string;
    sourceLabel?: string;
  }>;
}

export default function CityContextSection({
  eyebrow,
  headline,
  leadParagraphs,
  stats,
}: CityContextSectionProps) {
  return (
    <section className="bg-fj-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — content (7/12) */}
          <div className="lg:col-span-7">
            {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
            <Heading
              as="h2"
              size="h2"
              className={`text-fj-ink ${eyebrow ? 'mt-6' : ''}`}
            >
              {headline}
            </Heading>
            <div className="mt-6 max-w-[640px] space-y-4">
              {leadParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right — stats (5/12) */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-start text-left">
                <p className="fj-display font-fj-display text-[3.5rem] font-medium leading-none tracking-[-0.04em] text-fj-jet-blue md:text-[5.5rem]">
                  {s.value}
                </p>
                <p className="mt-2 font-fj-body text-[0.9375rem] leading-[1.55] text-fj-neutral-600">
                  {s.label}
                </p>
                <a
                  href={s.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 font-fj-body text-[0.8125rem] text-fj-neutral-400 transition-colors hover:text-fj-jet-blue"
                >
                  {s.sourceLabel ?? 'Source ↗'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
