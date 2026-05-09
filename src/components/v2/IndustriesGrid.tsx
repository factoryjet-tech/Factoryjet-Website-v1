import Link from 'next/link';
import MotionFadeUp from './MotionFadeUp';

/**
 * IndustriesGrid — v2.1 visual upgrade.
 *
 * Design language (Path A — CSS/JSX only):
 *   - Section bg: cream + Vercel-style dot grid + centre blue radial bloom
 *   - Cards: gradient fill (white → light blue-tinted), 3px blue top-cap,
 *     depth shadow, large watermark number, crystal shimmer line
 *   - Hover: outer ring glow via wrapper div (not clipped by overflow-hidden)
 *     + translate-y-1 lift
 *   - Section header: tighter clamp matching StrategicDarkSection
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
    <section
      className="py-10 md:py-14"
      style={{
        /*
         * Three-layer background (painted front→back):
         *   1. Dot grid — same Vercel/Stripe pattern used on dark sections
         *   2. Centre blue radial bloom — creates a light-source effect,
         *      gives the section depth vs. a flat cream surface
         *   3. Cream base colour
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

        {/* ── Sectors grid ───────────────────────────────────────────────── */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <MotionFadeUp key={i} delay={i * 0.06}>
              {/*
               * Wrapper: carries the `group` class and hosts the outer hover
               * ring. Sits OUTSIDE the article's overflow-hidden so the glow
               * is never clipped.
               */}
              <div className="group relative h-full">

                {/* ── Outer hover ring (not clipped) ────────────────────── */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: '0 0 0 2px rgba(0,82,204,0.40), 0 16px 48px rgba(0,82,204,0.16)',
                  }}
                  aria-hidden="true"
                />

                <article
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-300 group-hover:-translate-y-1.5"
                  style={{
                    /*
                     * Gradient fill: pure white top → light blue-tinted bottom.
                     * Immediately signals "designed card" vs. flat white box.
                     * Inspired by Stripe product feature cards.
                     */
                    background: 'linear-gradient(165deg, #FFFFFF 0%, #EEF3FF 100%)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(0,82,204,0.14)',
                    borderTopWidth: '3px',
                    borderTopColor: 'rgba(0,82,204,0.70)',
                    boxShadow: '0 4px 20px rgba(0,82,204,0.07), 0 1px 4px rgba(0,0,0,0.05)',
                  }}
                >

                  {/* Crystal shimmer — blue-tinted, matches the gradient fill */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(0,82,204,0.35) 35%, rgba(0,82,204,0.35) 65%, transparent 100%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Large watermark number — faint, right-aligned (Stripe/Linear pattern) */}
                  <span
                    className="fj-display pointer-events-none absolute right-3 top-1 select-none font-bold text-fj-jet-blue"
                    style={{
                      fontSize: '5rem',
                      lineHeight: 1,
                      opacity: 0.07,
                      letterSpacing: '-0.04em',
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Jet Blue accent bar */}
                  <div
                    className="mb-4 h-[3px] w-8 rounded-full bg-fj-jet-blue"
                    aria-hidden="true"
                  />

                  {/* ── Card body ──────────────────────────────────────── */}
                  <div className="flex flex-1 flex-col">
                    <h3
                      className="fj-display pr-10 font-semibold text-fj-ink"
                      style={{
                        fontSize: '1.125rem',
                        lineHeight: 1.3,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {sector.name}
                    </h3>

                    <p
                      className="mt-3 flex-1 font-fj-body text-fj-neutral-600"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
                    >
                      {sector.description}
                    </p>

                    {/* Example stat — footer with blue-tinted divider */}
                    {sector.example && (
                      <div
                        className="mt-4 pt-4"
                        style={{ borderTop: '1px solid rgba(0,82,204,0.12)' }}
                      >
                        <p
                          className="inline-flex items-center gap-2 font-fj-mono font-semibold text-fj-jet-blue"
                          style={{ fontSize: '11px', letterSpacing: '0.07em' }}
                        >
                          <span
                            className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fj-jet-blue"
                            aria-hidden="true"
                          />
                          {sector.example}
                        </p>
                      </div>
                    )}

                    {/* Optional CTA link */}
                    {sector.linkLabel && sector.linkHref && (
                      <Link
                        href={sector.linkHref}
                        className="mt-4 inline-flex items-center gap-1.5 font-fj-body text-[0.875rem] font-semibold text-fj-jet-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
                      >
                        {sector.linkLabel}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              </div>
            </MotionFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
