/**
 * BoringStatsRow — v2.1 visual upgrade.
 *
 * Design language (v2.2 orange pivot — CSS/JSX only):
 *   - Numbers are the hero: large display values in #F05A28 orange inline style
 *   - Section: cream #FAFAF7 + orange-tinted top/bottom borders
 *   - Gradient vertical dividers: orange-keyed rgba(240,90,40,0.22)
 *   - Category label chip: orange border + orange dot, no blue
 *   - Microcopy: editorial Inter body text
 *
 * Orange rule: color '#F05A28' always via inline style.
 * fj-jet-blue / text-[#F05A28] are NEVER used in v2 components.
 *
 * Pure server component. No client state, no animation.
 */

export interface BoringStat {
  value: string;
  label: string;
  microcopy?: string;
  categoryLabel?: string;
}

export interface BoringStatsRowProps {
  stats: BoringStat[];
  align?: 'start' | 'center';
}

export default function BoringStatsRow({
  stats,
  align = 'start',
}: BoringStatsRowProps) {
  const lgCols =
    stats.length === 1
      ? 'lg:grid-cols-1'
      : stats.length === 2
        ? 'lg:grid-cols-2'
        : 'lg:grid-cols-3';

  const cellAlign =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left';

  return (
    <section
      style={{
        /*
         * Uniform tinted band — the section IS the design element, not
         * individual number glows. A single horizontal gradient wash
         * (lighter at centre, slightly deeper at edges) reads as intentional
         * and premium. Stripe/HubSpot/Linear all use this containment
         * approach rather than per-element decorations on light backgrounds.
         */
        backgroundColor: '#FAFAF7',
        borderTop: '1.5px solid rgba(240,90,40,0.18)',
        borderBottom: '1.5px solid rgba(240,90,40,0.18)',
      }}
      className="py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6">
        <div className={`grid grid-cols-1 gap-y-10 sm:grid-cols-2 ${lgCols}`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`relative flex flex-col sm:px-10 sm:first:pl-0 sm:last:pr-0 ${cellAlign}`}
            >
              {/* ── Gradient vertical divider (all but last) ──────────── */}
              {i < stats.length - 1 && (
                <div
                  className="pointer-events-none absolute right-0 top-[5%] hidden h-[90%] w-px sm:block"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(240,90,40,0.22) 25%, rgba(240,90,40,0.22) 75%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
              )}

              {/* ── Category label chip ────────────────────────────────── */}
              {stat.categoryLabel && (
                <div
                  className="mb-4 inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.13em',
                    color: '#B23E13',
                    background: 'rgba(240,90,40,0.06)',
                    border: '1px solid rgba(240,90,40,0.22)',
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="inline-block h-1 w-1 rounded-full"
                    style={{ backgroundColor: '#F05A28' }}
                    aria-hidden="true"
                  />
                  {stat.categoryLabel}
                </div>
              )}

              {/* ── Number ────────────────────────────────────────────── */}
              {/*
               * No per-element glow — the uniform section background is the
               * design container. Numbers speak for themselves at this scale.
               */}
              <p
                className="fj-display whitespace-nowrap font-bold"
                style={{
                  color: '#F05A28',
                  fontSize: 'clamp(3rem, 7vw, 4.75rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {stat.value}
              </p>

              {/* ── Label ─────────────────────────────────────────────── */}
              <p
                className="mt-4 font-fj-body font-semibold text-fj-ink"
                style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}
              >
                {stat.label}
              </p>

              {/* ── Microcopy ─────────────────────────────────────────── */}
              {stat.microcopy && (
                <p
                  className="mt-2 font-fj-body text-fj-neutral-500"
                  style={{ fontSize: '0.875rem', lineHeight: 1.55 }}
                >
                  {stat.microcopy}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
