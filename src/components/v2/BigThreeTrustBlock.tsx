/**
 * BigThreeTrustBlock — v2.1 visual upgrade.
 *
 * Design language (Path A — CSS/JSX only):
 *   - Uniform tinted band (same system as BoringStatsRow) — the section IS
 *     the design container. No per-element glows on light backgrounds.
 *   - Gradient vertical dividers replace flat divide-x lines (same technique
 *     as BoringStatsRow — fades in/out, never clips at edges)
 *   - Numbers: text-fj-jet-blue on the tinted band — intentional color harmony
 *   - Blue accent bars above each number (Jasper/Aura pattern — kept from v2.0)
 *   - Padding reduced from py-14 lg:py-20 to py-10 md:py-12 — trust strip
 *     sits more naturally between Hero and the next content section
 *
 * Positioned immediately after Hero per B2B non-negotiable rule #1:
 * logo bar / trust strip must be section 2 — universal convention.
 *
 * Pure server component.
 */

export interface CityCountStat {
  value: string;
  label: string;
  source?: string;
}

export interface BigThreeTrustBlockProps {
  eyebrow?: string;
  headline?: string;
  cityCount?: CityCountStat;
}

interface StatCell {
  number: string;
  label: string;
  microcopy?: string;
}

const CORE_STATS: [StatCell, StatCell, StatCell] = [
  {
    number: '500+',
    label: 'businesses served',
    microcopy: 'US, UK, and UAE clients since 1999',
  },
  {
    number: '7-day',
    label: 'delivery guarantee',
    microcopy: '97% of projects delivered on time',
  },
  {
    number: '60–70%',
    label: 'cheaper than US agencies',
    microcopy: 'same output, India-based team cost structure',
  },
];

export default function BigThreeTrustBlock({
  eyebrow,
  headline,
  cityCount,
}: BigThreeTrustBlockProps) {
  const allStats: StatCell[] = cityCount
    ? [
        ...CORE_STATS,
        {
          number: cityCount.value,
          label: cityCount.label,
          microcopy: cityCount.source ? `source: ${cityCount.source}` : undefined,
        },
      ]
    : [...CORE_STATS];

  const gridCols =
    allStats.length === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : 'sm:grid-cols-3';

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #E8EFFE 0%, #F4F7FF 50%, #E8EFFE 100%)',
        borderTop: '1px solid rgba(0,82,204,0.14)',
        borderBottom: '1px solid rgba(0,82,204,0.14)',
      }}
      className="py-10 md:py-12"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">

        {(eyebrow || headline) && (
          <div className="mb-10">
            {eyebrow && (
              <p
                className="font-fj-mono font-medium uppercase text-fj-jet-blue"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                {eyebrow}
              </p>
            )}
            {headline && (
              <p
                className="mt-2 font-fj-body text-fj-neutral-400"
                style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}
              >
                {headline}
              </p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 gap-y-10 ${gridCols}`}>
          {allStats.map((stat, i) => (
            <div
              key={i}
              className="relative flex flex-col sm:px-10 sm:first:pl-0 sm:last:pr-0"
            >
              {/* ── Gradient vertical divider (all but last) ─────────── */}
              {i < allStats.length - 1 && (
                <div
                  className="pointer-events-none absolute right-0 top-[5%] hidden h-[90%] w-px sm:block"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,82,204,0.28) 25%, rgba(0,82,204,0.28) 75%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Blue accent bar */}
              <div
                className="mb-5 h-[3px] w-10 rounded-full bg-fj-jet-blue"
                aria-hidden="true"
              />

              {/* Number */}
              <p
                className="fj-display font-bold text-fj-jet-blue whitespace-nowrap"
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {stat.number}
              </p>

              {/* Label */}
              <p
                className="mt-3 font-fj-body font-semibold text-fj-ink"
                style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}
              >
                {stat.label}
              </p>

              {/* Microcopy */}
              {stat.microcopy && (
                <p
                  className="mt-1.5 font-fj-body text-fj-neutral-500"
                  style={{ fontSize: '0.8125rem', lineHeight: 1.55, fontWeight: 500 }}
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
