/**
 * LogoBar — v2.0 "trusted by" strip.
 *
 * Self-contained: logos are hardcoded inside the component because they
 * are universal brand assets, not city/service-specific data.
 *
 * The assembler emits:
 *   <LogoBar tagline="Trusted by 500+ businesses…" />
 *
 * Renders as a smooth CSS marquee with mask-image fade edges.
 * aria-hidden on the duplicate track prevents double-announcement.
 *
 * Spec (fj-design-inspiration.skill.md §07-LogoBar):
 *   - bg-fj-neutral-50
 *   - py-14 lg:py-16
 *   - tagline: Geist Mono 11px, 0.14em tracking, fj-jet-blue, uppercase
 *   - logos: Clash Display wordmarks, 60% opacity, no hover state
 *   - Marquee: 40s linear infinite, mask-image 10%/90% fade
 *
 * Pure server component.
 */

export interface LogoBarProps {
  /** Tagline displayed as centered eyebrow above the marquee. */
  tagline?: string;
  className?: string;
}

/**
 * Real client names from the FactoryJet portfolio.
 * 2026-05-26 PR #2 cleanup: dropped 7 fake/unrecognizable text marks
 * (WetStone Labs, CuraShield, MindSource, StegoHunt, VidAML, KD Associates,
 * Baxter & Reed) and kept/added only verified real clients per the
 * project_factoryjet_clients memory. List doubles via CSS marquee so 6
 * entries give 12 visible items per loop — enough to read as a continuous strip.
 */
const LOGOS = [
  'Belle Maison',
  'Formative Concepts',
  'Impulse Branding',
  'Shevvaa',
  'RDB Travels',
];

export default function LogoBar({
  tagline = 'Trusted by 500+ businesses across the US, UK, and UAE',
  className = '',
}: LogoBarProps) {
  return (
    <section
      className={`bg-fj-neutral-50 py-14 lg:py-16 overflow-hidden ${className}`.trim()}
      aria-label="Trusted by"
    >
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6">
        {tagline && (
          <p
            className="text-center font-fj-mono font-medium uppercase text-[#C94A1A]"
            style={{ fontSize: '11px', letterSpacing: '0.14em' }}
          >
            {tagline}
          </p>
        )}
      </div>

      {/* Marquee track — overflow-hidden parent on section */}
      <div
        className="relative mt-10"
        style={{
          maskImage:
            'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}
      >
        {/* Keyframes injected inline — no separate CSS file needed for SSR */}
        <style>{`
          @keyframes logoMarquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-marquee-track {
            display: flex;
            gap: 64px;
            width: max-content;
            animation: logoMarquee 40s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .logo-marquee-track {
              animation: none;
            }
          }
        `}</style>

        <div className="logo-marquee-track" aria-hidden="false">
          {/* Primary set */}
          {LOGOS.map((name) => (
            <span
              key={`a-${name}`}
              className="fj-display shrink-0 font-medium text-fj-ink"
              style={{
                fontSize: 'clamp(18px, 2vw, 22px)',
                lineHeight: 1,
                opacity: 0.5,
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </span>
          ))}

          {/* Duplicate set for seamless loop */}
          {LOGOS.map((name) => (
            <span
              key={`b-${name}`}
              aria-hidden="true"
              className="fj-display shrink-0 font-medium text-fj-ink"
              style={{
                fontSize: 'clamp(18px, 2vw, 22px)',
                lineHeight: 1,
                opacity: 0.5,
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export { LogoBar };
