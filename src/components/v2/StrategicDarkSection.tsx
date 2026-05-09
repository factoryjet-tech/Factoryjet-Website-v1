/**
 * StrategicDarkSection — v2.0 dark-surface content block per factoryjet.DESIGN.md §5.13.
 *
 * Full content section (NOT a generic wrapper). Accepts headline copy + a
 * trio of "pillar" cards that explain FactoryJet's core differentiators.
 * Max 2 dark sections allowed per page — enforced by code review, not this component.
 *
 * The assembler emits:
 *   <StrategicDarkSection
 *     eyebrow="WHY FACTORYJET"
 *     headline="We're not a local Austin agency. That's the point."
 *     lead="..."
 *     pillars={[
 *       { title: 'AI-native',   body: '...' },
 *       { title: 'Transparent', body: '...' },
 *       { title: 'Guaranteed',  body: '...' },
 *     ]}
 *   />
 *
 * Spec:
 *   - bg-fj-charcoal (#0F0F12)
 *   - text-fj-charcoal-text (#F5F5F2)
 *   - py-20 lg:py-32
 *   - max-w-[1120px] container, px-4 lg:px-6
 *   - Eyebrow: Geist Mono 11px, 0.14em, fj-jet-blue (same on dark — sufficient contrast)
 *   - Headline: Clash Display clamp(2rem, 4vw, 3.25rem), charcoal-text, -0.03em
 *   - Lead: Inter 1.0625rem, charcoal-text/75
 *   - Pillar cards: bg-white/5 border border-white/8 rounded-2xl p-6 lg:p-8
 *   - Pillar title: Clash Display 1.25rem 600, charcoal-text
 *   - Pillar body: Inter 0.9375rem, charcoal-text/70
 *
 * Pure server component.
 */

export interface Pillar {
  title: string;
  body: string;
  /** Optional icon character or emoji rendered before the title. */
  icon?: string;
}

export interface StrategicDarkSectionProps {
  eyebrow?: string;
  headline: string;
  lead?: string;
  /** Exactly 3 pillars expected (TypeScript does not enforce at runtime). */
  pillars: Pillar[];
  className?: string;
}

export default function StrategicDarkSection({
  eyebrow,
  headline,
  lead,
  pillars,
  className = '',
}: StrategicDarkSectionProps) {
  return (
    <section
      className={`relative overflow-hidden text-fj-charcoal-text py-10 md:py-14 ${className}`.trim()}
      style={{
        /*
         * Multi-layer background stacked via backgroundImage (CSS paints first→last,
         * so dot grid sits on top of the colour gradient):
         *  layer 1 — dot grid at higher opacity so it's actually visible
         *  layer 2 — deep navy→charcoal→deep-purple gradient (gives aurora orbs
         *             something lighter to bloom against — same trick Stripe/Linear use)
         */
        backgroundImage: [
          'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
          'linear-gradient(135deg, #060D1F 0%, #0F0F12 45%, #0D0818 100%)',
        ].join(', '),
        backgroundSize: '28px 28px, 100% 100%',
      }}
    >
      {/* ── Aurora orb — electric blue, top-right ────────────────────────── */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[680px] w-[680px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,82,204,0.60) 0%, rgba(0,82,204,0.18) 45%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />
      {/* ── Aurora orb — indigo/violet, bottom-left ──────────────────────── */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-[520px] w-[520px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.32) 0%, rgba(99,102,241,0.08) 50%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        aria-hidden="true"
      />
      {/* ── Aurora orb — violet accent, center-left ──────────────────────── */}
      <div
        className="pointer-events-none absolute left-[15%] top-[30%] h-[360px] w-[360px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)',
          filter: 'blur(56px)',
        }}
        aria-hidden="true"
      />

      {/* ── Content (sits above orbs) ─────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[1120px] px-6 md:px-8">

        {/* Header */}
        <div className="max-w-[720px]">
          {eyebrow && (
            <p
              className="font-fj-mono font-medium uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#7EB3FF' }}
            >
              {eyebrow}
            </p>
          )}

          <h2
            className={`fj-display font-medium text-fj-charcoal-text ${eyebrow ? 'mt-3' : ''}`}
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
            }}
          >
            {headline}
          </h2>

          {lead && (
            <p
              className="mt-4 font-fj-body"
              style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'rgba(245, 245, 242, 0.72)',
              }}
            >
              {lead}
            </p>
          )}
        </div>

        {/* Pillar cards */}
        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 lg:p-6"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgba(255, 255, 255, 0.10)',
                borderTopWidth: '2px',
                borderTopColor: 'rgba(0, 82, 204, 0.70)',
                boxShadow: '0 0 0 1px rgba(0,82,204,0.20), 0 4px 32px rgba(0,0,0,0.55), 0 1px 0 0 rgba(255,255,255,0.07) inset',
              }}
            >
              {/* Crystal inner highlight — thin shimmer line across top */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.30) 35%, rgba(255,255,255,0.30) 65%, transparent 100%)',
                }}
                aria-hidden="true"
              />

              {/* Hover glow — blue bloom that appears on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow: '0 0 0 1px rgba(0,82,204,0.50), 0 0 48px rgba(0,82,204,0.28)',
                  background: 'rgba(0,82,204,0.06)',
                }}
                aria-hidden="true"
              />

              {/* Watermark number */}
              <span
                className="fj-display pointer-events-none absolute right-4 top-2 select-none font-bold text-fj-jet-blue"
                style={{
                  fontSize: '5.5rem',
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

              <h3
                className="fj-display font-medium text-fj-charcoal-text"
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                }}
              >
                {pillar.title}
              </h3>

              <p
                className="mt-3 font-fj-body"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'rgba(245, 245, 242, 0.68)',
                }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
