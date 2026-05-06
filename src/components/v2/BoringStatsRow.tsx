/**
 * BoringStatsRow — v2.0 component per factoryjet.DESIGN.md §5.10.
 *
 * A row of 1–3 stat blocks with the "boring stats" microcopy voice.
 * Each block: number (Clash Display via .fj-display, Jet Blue, --type-stat)
 * → label (Inter, ink, weight 600) → optional parenthetical microcopy
 * (Inter, neutral-600, plain — italic styling dropped in M1.d.2).
 *
 * Section padding-y: --space-9 (96px desktop / 64px mobile).
 * Background is intentionally transparent — the consuming page wraps
 * this in `bg-fj-cream` or `bg-fj-neutral-50` as appropriate.
 *
 * M1.c.2.5 alignment fix: a new `align` prop controls cell-content
 * alignment. Default stays `'start'` to preserve M1.a/M1.b/M1.c.* call-
 * site visuals (backward-compat). Pass `align="center"` to opt in to
 * the centred treatment, which reads cleaner when numerals have very
 * different widths ("+210%" vs "0") — the previous left-anchored layout
 * produced ragged right-side dead space inside each grid cell. The dev
 * page renders both variants for visual comparison; production callers
 * (e.g. London page in M1.c.4) can flip to `align="center"` per call.
 *
 * Pure server component. No client state, no animation.
 */

export interface BoringStat {
  /** The big number/value, e.g. "+210%", "500+", "0" */
  value: string;
  /** The descriptive label, e.g. "qualified leads in 90 days" */
  label: string;
  /** Optional micro-line, rendered parenthesised below the label. Plain
   *  Inter body text post M1.d.2 — italic styling dropped. */
  microcopy?: string;
}

export interface BoringStatsRowProps {
  /** 1–3 stats. Renders 1, 2, or 3 columns at lg+ to match length. */
  stats: BoringStat[];
  /** Cell-content alignment. Default `'start'` (legacy left-anchored
   *  per M1.a). Pass `'center'` for the M1.c.2.5 alignment fix. */
  align?: 'start' | 'center';
}

export default function BoringStatsRow({
  stats,
  align = 'start',
}: BoringStatsRowProps) {
  // Cap responsive columns at the stat count so a 1- or 2-stat row
  // doesn't end up with an empty grid cell stretching the layout.
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
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6">
        <div
          className={`grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 ${lgCols}`}
        >
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col ${cellAlign}`}>
              {/* Number — Clash Display via .fj-display, Jet Blue, --type-stat */}
              <p
                className="fj-display font-medium text-fj-jet-blue"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {stat.value}
              </p>

              {/* Label — Geist, ink, weight 600, --type-body */}
              <p
                className="mt-3 font-fj-body font-semibold text-fj-ink"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.6,
                }}
              >
                {stat.label}
              </p>

              {/* Microcopy — plain Geist body, neutral-600, parenthesised.
               * M1.d.2: italic dropped per the M1.d.1.1 canon (Fraunces-italic
               * boring-stats parenthetical pattern is gone — Clash doesn't
               * render inline italic at body scale gracefully). */}
              {stat.microcopy && (
                <p
                  className="mt-2 font-fj-body text-fj-neutral-600"
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.55,
                  }}
                >
                  ({stat.microcopy})
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
