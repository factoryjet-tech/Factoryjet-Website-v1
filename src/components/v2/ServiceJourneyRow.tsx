import type { ReactNode } from 'react';
import MotionFadeUp from './MotionFadeUp';

/**
 * ServiceJourneyRow — v2.1 visual upgrade.
 *
 * Design language (Path A — CSS/JSX only, zero JS for decoration):
 *   - Section bg: white + dot grid + bottom-centred radial bloom (differs
 *     from IndustriesGrid's top bloom so adjacent sections feel distinct)
 *   - Desktop timeline: a continuous gradient connector line spans all 5
 *     circles via absolute positioning — sits below the circles (z-0) so
 *     circles (z-10) read as nodes on the line
 *   - Circle badges: ambient glow ring (box-shadow spread + blur), solid
 *     fj-jet-blue fill with white number — "energy node" treatment
 *   - Closing note: flanked by gradient rules (editorial web pattern)
 *   - Headline: tighter clamp matching StrategicDarkSection / IndustriesGrid
 *
 * Pure server component.
 */

export interface ServiceJourneyStage {
  /** Two-character ordinal, e.g. "01", "02". */
  number: string;
  title: string;
  /** ~1–2 short sentences. */
  description: string;
}

/* Canonical 5-stage delivery journey. */
export const DEFAULT_JOURNEY_STAGES: ReadonlyArray<ServiceJourneyStage> = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 30-minute call. We map the problem, the constraints, and what success looks like.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Wireframes and a system in Figma. You sign off the surface before we touch code.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering against your stack. Daily commits, weekly demos, no black-box weeks.',
  },
  {
    number: '04',
    title: 'Ship',
    description:
      'Production launch with monitoring, analytics, and a recorded handover. No proposal-tag.',
  },
  {
    number: '05',
    title: 'Run',
    description:
      'Optional retainer for evolutions. Or hand back the keys — your codebase, your call.',
  },
];

export interface ServiceJourneyRowProps {
  eyebrow?: string;
  headline: ReactNode;
  lead?: string;
  stages?: ReadonlyArray<ServiceJourneyStage>;
  closingNote?: string;
}

export default function ServiceJourneyRow({
  eyebrow,
  headline,
  lead,
  stages = DEFAULT_JOURNEY_STAGES,
  closingNote,
}: ServiceJourneyRowProps) {
  return (
    <section
      className="py-10 md:py-14"
      style={{
        /*
         * White base + dot grid + bloom at bottom-centre (differentiates
         * from IndustriesGrid which has its bloom at top-centre).
         * The bloom creates a subtle "stage spotlights" effect below the row.
         */
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FFFFFF',
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

        {/* ── Timeline ───────────────────────────────────────────────────── */}
        {/*
         * Outer wrapper is `relative` so the absolutely-positioned connector
         * line can span the full grid width behind the circle nodes.
         */}
        <div className="relative mt-10">

          {/* ── Connector line — desktop only ──────────────────────────── */}
          {/*
           * Sits at top-[22px] = half the circle height (h-11 = 44px).
           * Fades in from left and out to right so it doesn't clip the
           * first/last circle awkwardly.
           * hidden on mobile/tablet where layout is vertical.
           */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[22px] hidden h-px lg:block"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(240,90,40,0.22) 8%, rgba(240,90,40,0.22) 92%, transparent 100%)',
            }}
            aria-hidden="true"
          />

          {/* ── Stage grid ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-5 lg:gap-5">
            {stages.map((stage, i) => (
              <MotionFadeUp key={i} delay={i * 0.08}>
                <div className="flex flex-col">

                  {/* ── Circle node ──────────────────────────────────── */}
                  {/*
                   * Ambient glow: two-layer box-shadow — a spread ring at low
                   * opacity creates the "energy node" halo; inner blur adds
                   * the bloom. z-10 ensures circles sit above the connector line.
                   */}
                  <div
                    className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full font-fj-mono text-[0.875rem] font-bold text-white"
                    style={{
                      background: '#B23E13',
                      boxShadow: '0 0 0 5px rgba(178,62,19,0.12), 0 0 22px rgba(178,62,19,0.32)',
                    }}
                    aria-hidden="true"
                  >
                    {stage.number}
                  </div>

                  {/* ── Stage label ──────────────────────────────────── */}
                  <p
                    className="mt-4 font-fj-mono font-semibold uppercase"
                    style={{ color: '#B23E13', fontSize: '10px', letterSpacing: '0.14em', opacity: 0.65 }}
                    aria-hidden="true"
                  >
                    STAGE {stage.number}
                  </p>

                  {/* ── Stage title ──────────────────────────────────── */}
                  <h3
                    className="mt-1.5 fj-display font-semibold text-fj-ink"
                    style={{
                      fontSize: '1.125rem',
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {stage.title}
                  </h3>

                  {/* ── Description card ─────────────────────────────── */}
                  {/*
                   * Subtle glassmorphism card on white: bg slightly off-white
                   * with a blue-tinted border. Creates depth and clearly
                   * separates description from the title above.
                   */}
                  <div
                    className="mt-3 rounded-xl p-4"
                    style={{
                      background: 'linear-gradient(160deg, #FFFFFF 0%, #FDF6F3 100%)',
                      border: '1px solid rgba(240,90,40,0.10)',
                      boxShadow: '0 2px 8px rgba(240,90,40,0.05)',
                    }}
                  >
                    <p
                      className="font-fj-body text-fj-neutral-600"
                      style={{ fontSize: '0.875rem', lineHeight: 1.65 }}
                    >
                      {stage.description}
                    </p>
                  </div>

                </div>
              </MotionFadeUp>
            ))}
          </div>
        </div>

        {/* ── Closing note — flanked by gradient rules ────────────────────── */}
        {closingNote && (
          <div
            className="mt-10 flex items-center gap-5"
            aria-hidden="true"
          >
            {/* Left gradient rule */}
            <div
              className="h-px flex-1"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(240,90,40,0.20) 100%)',
              }}
            />
            <p
              className="flex-shrink-0 font-fj-mono font-medium uppercase text-slate-500"
              style={{ fontSize: '11px', letterSpacing: '0.10em' }}
            >
              {closingNote}
            </p>
            {/* Right gradient rule */}
            <div
              className="h-px flex-1"
              style={{
                background: 'linear-gradient(90deg, rgba(240,90,40,0.20) 0%, transparent 100%)',
              }}
            />
          </div>
        )}

      </div>
    </section>
  );
}

export { ServiceJourneyRow };
