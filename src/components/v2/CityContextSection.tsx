import MotionFadeUp from './MotionFadeUp';

/**
 * CityContextSection — v2.1 visual upgrade.
 *
 * Design language (Path A — CSS/JSX only):
 *   - Section bg: cream + dot grid + right-anchored radial bloom that
 *     backs the stat-card column (visual weight matches layout weight)
 *   - Headline: tighter clamp consistent with other v2.1 sections
 *   - Stat cards: gradient fill (white → light blue-tinted), 3px blue
 *     left-accent bar, outer ring glow on hover via wrapper div,
 *     numbered data-point label, refined source citation chip
 *   - Pull-quote border: upgraded to a gradient left border
 *
 * Pure server component.
 */

import type { ReactNode } from 'react';

export interface CityContextSectionProps {
  eyebrow?: string;
  headline: ReactNode;
  leadParagraphs: ReadonlyArray<string>;
  bodySlot?: ReactNode;
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
  bodySlot,
  stats,
}: CityContextSectionProps) {
  return (
    <section
      className="py-10 md:py-14"
      style={{
        /*
         * Dot grid + right-biased bloom: the radial gradient is centred at
         * 75% horizontal so it "backs" the stat-card column, aligning
         * decorative energy with visual content weight.
         */
        /*
         * Clean cream + visible dot grid only. The stat cards on the right are
         * visually heavy enough — a one-sided bloom at low opacity looks like
         * an unintentional smudge. Let the grid texture do the work.
         */
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.068) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">

          {/* ── Left — content (7/12) ──────────────────────────────────── */}
          <MotionFadeUp className="lg:col-span-7">
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

            <div className="mt-5 max-w-[600px] space-y-4">
              {leadParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-fj-body text-fj-neutral-600"
                  style={{ fontSize: '1rem', lineHeight: 1.7 }}
                >
                  {p}
                </p>
              ))}
            </div>

            {bodySlot && (
              <div className="mt-6 max-w-[600px]">
                {bodySlot}
              </div>
            )}
          </MotionFadeUp>

          {/* ── Right — stat data panels (5/12) ───────────────────────── */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {stats.map((s, i) => (
              <MotionFadeUp key={i} delay={i * 0.1}>
                {/*
                 * Wrapper carries `group` and the outer hover ring — sits
                 * outside overflow-hidden so the ring is never clipped.
                 */}
                <div className="group relative">

                  {/* Outer hover ring */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      boxShadow: '0 0 0 2px rgba(0,82,204,0.38), 0 12px 40px rgba(0,82,204,0.14)',
                    }}
                    aria-hidden="true"
                  />

                  <div
                    className="relative overflow-hidden rounded-xl px-6 py-5 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      background: 'linear-gradient(155deg, #FFFFFF 0%, #EEF3FF 100%)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgba(0,82,204,0.12)',
                      borderTopWidth: '3px',
                      borderTopColor: 'rgba(0,82,204,0.68)',
                      boxShadow: '0 4px 16px rgba(0,82,204,0.07), 0 1px 3px rgba(0,0,0,0.04)',
                    }}
                  >
                    {/* Crystal shimmer line */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(0,82,204,0.32) 40%, rgba(0,82,204,0.32) 60%, transparent 100%)',
                      }}
                      aria-hidden="true"
                    />

                    {/* Data-point label */}
                    <p
                      className="mb-3 font-fj-mono font-bold uppercase text-[#B23E13]"
                      style={{ fontSize: '9px', letterSpacing: '0.14em', opacity: 0.65 }}
                      aria-hidden="true"
                    >
                      DATA POINT {String(i + 1).padStart(2, '0')}
                    </p>

                    {/* Stat value */}
                    <p
                      className="fj-display whitespace-nowrap font-bold leading-none text-[#F05A28]"
                      style={{
                        fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {s.value}
                    </p>

                    {/* Label */}
                    <p
                      className="mt-2 font-fj-body text-fj-neutral-600"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.55 }}
                    >
                      {s.label}
                    </p>

                    {/* Source citation chip */}
                    <a
                      href={s.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full font-fj-mono font-medium text-fj-neutral-400 transition-colors hover:text-[#F05A28]"
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.07em',
                        background: 'rgba(0,0,0,0.04)',
                        border: '1px solid rgba(0,0,0,0.07)',
                        padding: '3px 10px 3px 8px',
                      }}
                    >
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                        <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {s.sourceLabel ?? 'Source'}
                    </a>
                  </div>

                </div>
              </MotionFadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
