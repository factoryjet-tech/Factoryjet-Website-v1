/**
 * BoringStatsRow — v2.1 visual upgrade.
 *
 * Design language (Path A — CSS/JSX only):
 *   - Numbers are the hero: ambient radial glow disc behind each value
 *     (Ambient Glow & Bloom #15) + Maxi Typography treatment (#13)
 *   - Section: white + dot grid + centre bloom — consistent system language
 *   - Gradient vertical dividers replace plain neutral-200 divide lines
 *   - Category label: Geist Mono chip treatment (Retro-Futurism #21)
 *   - Microcopy: inline pill, less parenthetical, more editorial
 *
 * Background is now self-contained (section handles its own bg) but
 * the consuming page div bg still applies as a fallback — backward-compat.
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
        background: 'linear-gradient(135deg, #E8EFFE 0%, #F4F7FF 50%, #E8EFFE 100%)',
        borderTop: '1px solid rgba(0,82,204,0.14)',
        borderBottom: '1px solid rgba(0,82,204,0.14)',
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
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,82,204,0.28) 25%, rgba(0,82,204,0.28) 75%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
              )}

              {/* ── Category label chip ────────────────────────────────── */}
              {stat.categoryLabel && (
                <div
                  className="mb-4 inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 font-fj-mono font-bold uppercase text-fj-jet-blue"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.13em',
                    background: 'rgba(255,255,255,0.70)',
                    border: '1px solid rgba(0,82,204,0.20)',
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="inline-block h-1 w-1 rounded-full bg-fj-jet-blue"
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
                className="fj-display whitespace-nowrap font-bold text-fj-jet-blue"
                style={{
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
