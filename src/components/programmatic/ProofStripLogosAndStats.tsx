import { RevealStagger } from './RevealOnScroll';

export interface ProofStripLogosAndStatsProps {
  eyebrow?: string;
  headline?: string;
  /** Real client logos. Only entries with displayPermission === 'granted' are rendered.
   *  If filtered length < 6, falls back to stats-only treatment (logos hidden). */
  clientLogos: ReadonlyArray<{
    name: string;
    logoSvgPath: string;
    altText: string;
    displayPermission: 'granted' | 'pending';
  }>;
  /** Always exactly 4 stats */
  stats: ReadonlyArray<{
    value: string;
    label: string;
    sourceLabel?: string;
  }>;
}

/**
 * `proof_strip_logos_and_stats` per spec §5.2.
 *
 * Pure Server Component. Off-white (bg-soft) full-width section.
 * Renders immediately after the hero. Two rows:
 *   1. Client logo grid — only entries with displayPermission === 'granted'.
 *      Sparse grids look weak, so if fewer than 6 logos are granted,
 *      the entire logo row is suppressed and only the stat strip ships.
 *   2. Stat strip — 4 columns separated by thin border-soft vertical lines.
 *      Each stat: display-md Source Serif 4 number + body-sm text-meta caption.
 *
 * Wrapped in <RevealStagger> for entry choreography.
 */
export default function ProofStripLogosAndStats({
  eyebrow,
  headline,
  clientLogos,
  stats,
}: ProofStripLogosAndStatsProps) {
  // Hard gate: only granted logos may render. Sparse logo strips
  // look worse than no logo strip — if we can't show ≥6, show none.
  const grantedLogos = clientLogos.filter(
    (l) => l.displayPermission === 'granted',
  );
  const showLogoRow = grantedLogos.length >= 6;

  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        {/* Optional header */}
        {(eyebrow || headline) && (
          <div className="mb-12 text-center">
            {eyebrow && (
              <div className="mb-4 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
                {eyebrow}
              </div>
            )}
            {headline && (
              <h2 className="font-display text-headline text-navy">
                {headline}
              </h2>
            )}
          </div>
        )}

        {/* Logo grid — only when ≥6 granted */}
        {showLogoRow && (
          <RevealStagger
            className="mb-16 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-4"
            staggerDelay={0.04}
          >
            {grantedLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-12 items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.logoSvgPath}
                  alt={logo.altText}
                  className="max-h-10 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 motion-reduce:transition-none"
                />
              </div>
            ))}
          </RevealStagger>
        )}

        {/* Stat strip — always rendered */}
        <RevealStagger
          className="grid grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.05}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={
                // Vertical separator line on lg+ between columns;
                // omit on the first column.
                i > 0
                  ? 'flex flex-col items-center px-6 py-4 lg:border-l lg:border-border-soft'
                  : 'flex flex-col items-center px-6 py-4'
              }
            >
              <div className="font-display text-display-md font-medium text-navy">
                {stat.value}
              </div>
              <div className="mt-2 text-center text-body-sm text-text-meta">
                {stat.label}
              </div>
              {stat.sourceLabel && (
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-text-meta/70">
                  {stat.sourceLabel}
                </div>
              )}
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
