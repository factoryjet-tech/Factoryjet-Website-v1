import Image from 'next/image';

/**
 * ServiceHeroImageBand — v2.0
 *
 * Full-bleed dark image strip inserted between the Hero and BigThreeTrustBlock
 * on all Service Detail pages. Establishes editorial gravitas and provides a
 * 4-stat proof strip at the bottom.
 *
 * Design language:
 *   - Background: next/image fill with a dark gradient overlay (top 30% →
 *     bottom 75% opacity) so text in the stat strip is legible over any photo
 *   - Image area: ~220–260px tall on desktop; ~180px on mobile
 *   - Bottom stat strip: 4-column grid separated by hairline dividers
 *     (rgba(255,255,255,0.08)), dark charcoal bg (#0F0F12) to anchor stats
 *     independently of image brightness
 *   - Stat values: font-fj-display (Plus Jakarta Sans) bold, color #F05A28 inline
 *   - Stat labels: font-fj-body (Inter) small, text-fj-charcoal-muted
 *
 * Orange rule: color '#F05A28' always via inline style on static elements.
 * fj-jet-blue / text-[#F05A28] are NEVER used in v2 components.
 *
 * Pure server component.
 */

export interface ServiceHeroImageBandStat {
  value: string;
  label: string;
}

export interface ServiceHeroImageBandProps {
  /** Absolute path or URL for the background image. Use a 1600×640 landscape. */
  imageSrc: string;
  imageAlt: string;
  /** Exactly 4 stats. Fewer or more will still render gracefully. */
  stats: ServiceHeroImageBandStat[];
}

export default function ServiceHeroImageBand({
  imageSrc,
  imageAlt,
  stats,
}: ServiceHeroImageBandProps) {
  return (
    <div className="w-full overflow-hidden" style={{ backgroundColor: '#0F0F12' }}>

      {/* ── Image area ─────────────────────────────────────────────────── */}
      <div
        className="relative w-full"
        style={{ height: 'clamp(160px, 20vw, 260px)' }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1600}
          height={640}
          className="object-cover object-center w-full h-full"
          sizes="100vw"
          priority
        />

        {/* Gradient overlay: subtle top, heavy bottom, keeps stat strip bg solid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.55) 60%, rgba(15,15,18,0.95) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Stat strip ─────────────────────────────────────────────────── */}
      <div
        className="w-full"
        style={{
          backgroundColor: '#0F0F12',
          borderTop: '0.5px solid rgba(255,255,255,0.06)',
          borderBottom: '1.5px solid rgba(240,90,40,0.22)',
        }}
      >
        <div className="mx-auto max-w-[1120px]">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)`,
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center py-5 px-4"
                style={
                  i > 0
                    ? { borderLeft: '0.5px solid rgba(255,255,255,0.08)' }
                    : undefined
                }
              >
                <span
                  className="font-fj-display font-bold leading-none"
                  style={{
                    color: '#F05A28',
                    fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                    letterSpacing: '-0.025em',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="mt-1.5 font-fj-body font-medium text-fj-charcoal-muted"
                  style={{ fontSize: '0.75rem', lineHeight: 1.4, letterSpacing: '0.01em' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
