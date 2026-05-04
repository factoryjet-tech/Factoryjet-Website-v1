/**
 * BigThreeTrustBlock — v2.0 component per factoryjet.DESIGN.md §5.2.
 *
 * Three-cell trust signal, larger and more prominent than BoringStatsRow.
 * TypeScript tuple-enforced to exactly 3 stats — sparse trust rows look
 * weak; the type system prevents passing 1 or 2.
 *
 * Spec:
 *   - Background: bg-fj-neutral-50 (subtle warmth, NOT pure white, NOT cream)
 *   - 3-column grid on desktop, stacked on mobile, --space-7 (48px) gap
 *   - Number:     --type-stat   (88px desktop / 56px mobile, Fraunces 500, ink, -0.04em)
 *   - Label:      --type-body-sm (15px Geist, neutral-600)
 *   - Microcopy:  --type-caption (13px Geist italic, neutral-400, parenthesised)
 *   - py:         --space-9     (96px desktop / 64px mobile)
 *   - container:  --container-default (1120px max)
 *
 * Pure server component.
 */

export interface TrustStat {
  /** The big number/figure, e.g. "60-day", "100%", "4.9/5" */
  number: string;
  /** Label below the number — descriptive in body-sm */
  label: string;
  /** Optional parenthetical italic micro-line in the "boring stats" voice */
  microcopy?: string;
}

export interface BigThreeTrustBlockProps {
  /** Tuple of EXACTLY 3 stats. TypeScript will reject anything else. */
  stats: [TrustStat, TrustStat, TrustStat];
}

export default function BigThreeTrustBlock({ stats }: BigThreeTrustBlockProps) {
  return (
    <section className="bg-fj-neutral-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-start text-left">
              {/* Number — Fraunces tuned, ink, --type-stat */}
              <p
                className="fj-display font-medium text-fj-ink"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {stat.number}
              </p>

              {/* Label — Geist, neutral-600, --type-body-sm */}
              <p
                className="mt-3 font-fj-body text-fj-neutral-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.55,
                }}
              >
                {stat.label}
              </p>

              {/* Microcopy — Geist italic, neutral-400, --type-caption, parenthesised */}
              {stat.microcopy && (
                <p
                  className="mt-2 font-fj-body italic text-fj-neutral-400"
                  style={{
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                    letterSpacing: '0.005em',
                    fontWeight: 500,
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
