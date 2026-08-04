/**
 * StrategicDarkSection — v2.1 dark-surface content block per factoryjet.DESIGN.md §5.13.
 *
 * Full content section (NOT a generic wrapper). Accepts headline copy + a
 * trio of "pillar" cards that explain FactoryJet's core differentiators.
 * Max 2 dark sections allowed per page — enforced by code review, not this component.
 *
 * v2.1 additions (2026-06-13):
 *   - Pillar.image — optional top-pinned image path (must be AI-generated, WEBP)
 *     Renders a full-bleed cover image at the top of the card, rounded top corners.
 *
 * The assembler emits:
 *   <StrategicDarkSection
 *     eyebrow="WHY FACTORYJET"
 *     headline="We're not a local Austin agency. That's the point."
 *     lead="..."
 *     pillars={[
 *       { title: 'AI-native',   body: '...', image: '/images/services/foo.webp' },
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

import NextImage from 'next/image';

export interface Pillar {
  title: string;
  body: string;
  /** Optional icon character or emoji rendered before the title. */
  icon?: string;
  /**
   * Optional top-pinned image. Pass a public path (e.g. '/images/services/foo.webp').
   * When present the card removes its top padding and shows the image first,
   * then the rest of the card content below. Image is 16:9 aspect, full-bleed top.
   */
  image?: string;
  /** Alt text for the pillar image. Defaults to the pillar title. */
  imageAlt?: string;
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
      {/* ── Aurora orb, orange, top-right ──────────────────────────────── */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[680px] w-[680px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(240,90,40,0.40) 0%, rgba(240,90,40,0.10) 45%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />
      {/* ── Aurora orb, amber, bottom-left ──────────────────────────────── */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-[520px] w-[520px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(240,90,40,0.20) 0%, rgba(240,90,40,0.06) 50%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        aria-hidden="true"
      />
      {/* ── Aurora orb, warm accent, center-left ────────────────────────── */}
      <div
        className="pointer-events-none absolute left-[15%] top-[30%] h-[360px] w-[360px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(240,90,40,0.12) 0%, transparent 65%)',
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
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}
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
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${pillar.image ? '' : 'p-5 lg:p-6'}`}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgba(255, 255, 255, 0.10)',
                borderTopWidth: pillar.image ? '0px' : '2px',
                borderTopColor: 'rgba(240,90,40,0.70)',
                boxShadow: '0 0 0 1px rgba(240,90,40,0.20), 0 4px 32px rgba(0,0,0,0.55), 0 1px 0 0 rgba(255,255,255,0.07) inset',
              }}
            >
              {/* Crystal inner highlight, thin shimmer line across top (only when no image) */}
              {!pillar.image && (
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.30) 35%, rgba(255,255,255,0.30) 65%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow: '0 0 0 1px rgba(240,90,40,0.50), 0 0 48px rgba(240,90,40,0.20)',
                  background: 'rgba(240,90,40,0.06)',
                }}
                aria-hidden="true"
              />

              {/* Optional top-pinned image */}
              {pillar.image && (
                <div className="relative w-full overflow-hidden" style={{ height: '180px', borderBottom: '2px solid rgba(240,90,40,0.70)' }}>
                  <NextImage
                    src={pillar.image}
                    alt={pillar.imageAlt ?? pillar.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 370px"
                  />
                  {/* Gradient overlay so text below blends cleanly */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(12,12,18,0.65) 100%)' }}
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Card body */}
              <div className={pillar.image ? 'p-5 lg:p-6' : ''}>
                {/* Watermark number */}
                <span
                  className="fj-display pointer-events-none absolute right-4 top-2 select-none font-bold"
                  style={{
                    color: '#F05A28',
                    fontSize: '5.5rem',
                    lineHeight: 1,
                    opacity: 0.07,
                    letterSpacing: '-0.04em',
                  }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Orange accent bar (only when no image at top) */}
                {!pillar.image && (
                  <div
                    className="mb-4 h-[3px] w-8 rounded-full"
                    style={{ background: '#F05A28' }}
                    aria-hidden="true"
                  />
                )}

                <h3
                  className="fj-display font-medium text-fj-charcoal-text"
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                    marginTop: pillar.image ? '0' : undefined,
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
