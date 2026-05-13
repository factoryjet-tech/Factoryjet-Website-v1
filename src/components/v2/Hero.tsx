import type { ReactNode } from 'react';
import Link from 'next/link';

import Heading from './Heading';
import ModalCTAButton from './ModalCTAButton';
import type { ModalRegion } from '../../context/ContactModalContext';

/**
 * Hero — v2.1 visual upgrade.
 *
 * Design language (Path A — CSS/JSX only):
 *   - Background: dot grid + 4 directional radial blooms (blue TR/BR, orange BL,
 *     sky TL) — same Vercel/Linear language used across v2.1 sections
 *   - Announcement pill: pulsing live-indicator dot (Framer/Lemon Squeezy pattern)
 *   - Primary CTA: ambient blue glow shadow (button-as-light-source)
 *   - Secondary CTA: frosted glass surface (bg-white/60 + border)
 *   - Trust strip: checkmark pill icons replacing plain dot separators
 *   - Bottom shimmer: blue gradient hairline to visually separate from next section
 *
 * Pure server component.
 */

export interface HeroProps {
  announcementPill?: { text: string; href?: string };
  eyebrow?: string;
  headline: ReactNode;
  lead?: string;
  primaryCta?: { label: string; href?: string; modal?: true; region?: ModalRegion };
  secondaryCta?: { label: string; href?: string; modal?: true; region?: ModalRegion };
  trustItems?: string[];
  rightSlot?: ReactNode;
}

export default function Hero({
  announcementPill,
  eyebrow,
  headline,
  lead,
  primaryCta,
  secondaryCta,
  trustItems,
  rightSlot,
}: HeroProps) {
  const hasRightSlot = rightSlot !== undefined && rightSlot !== null;

  return (
    <section
      className="relative overflow-hidden pt-10 lg:pt-14 pb-10 md:pb-14"
      style={{
        /*
         * Hero background v2.4 — bold Stripe/Jasper-style gradient mesh.
         *
         * Design rationale:
         *
         * 1. HIGH OPACITY: Stripe peaks at 0.70–0.80, Jasper at 0.60+.
         *    Our v2.3 blue at 0.42 read as a soft tint, not a gradient.
         *    v2.4 blue at 0.72, orange at 0.48 — visible, intentional color.
         *
         * 2. OVERSIZED ELLIPSES: ellipses set to 110–120% of viewport so
         *    the vivid zone (not just the falloff tail) fills the hero area.
         *    Stripe positions blooms well outside the viewport edges for this.
         *
         * 3. MULTI-STOP FALLOFF: vivid core → soft mid-zone → cream blend.
         *    The cream background shows through naturally in the text area
         *    (center of hero) where neither bloom reaches — this contrast
         *    makes the color zones feel more defined, not muddy.
         *
         * 4. TWO COLORS: brand blue (dominant, top-right) + warm orange
         *    (counterpoint, bottom-left). Their non-overlapping placement
         *    lets each read at full strength without muddying each other.
         *
         *  Layer 1 — primary: bold blue sweep from top-right, 72% peak
         *  Layer 2 — counter: vivid orange from bottom-left, 48% peak
         */
        backgroundImage: [
          'radial-gradient(ellipse 115% 95% at 112% -18%, rgba(0,82,204,0.72) 0%, rgba(0,82,204,0.44) 24%, rgba(0,82,204,0.16) 50%, transparent 68%)',
          'radial-gradient(ellipse 85% 75% at -18% 115%, rgba(255,107,53,0.48) 0%, rgba(255,107,53,0.24) 36%, rgba(255,107,53,0.08) 58%, transparent 72%)',
        ].join(', '),
        backgroundSize: '100% 100%, 100% 100%',
        backgroundColor: '#FAFAF7',
      }}
    >
      {/* Bottom shimmer separator */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,82,204,0.18) 30%, rgba(0,82,204,0.18) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        {hasRightSlot ? (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <HeroContent
                announcementPill={announcementPill}
                eyebrow={eyebrow}
                headline={headline}
                lead={lead}
                primaryCta={primaryCta}
                secondaryCta={secondaryCta}
                trustItems={trustItems}
              />
            </div>
            <div className="lg:col-span-5">{rightSlot}</div>
          </div>
        ) : (
          <div className="max-w-[820px]">
            <HeroContent
              announcementPill={announcementPill}
              eyebrow={eyebrow}
              headline={headline}
              lead={lead}
              primaryCta={primaryCta}
              secondaryCta={secondaryCta}
              trustItems={trustItems}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function HeroContent({
  announcementPill,
  eyebrow,
  headline,
  lead,
  primaryCta,
  secondaryCta,
  trustItems,
}: Omit<HeroProps, 'rightSlot'>) {
  return (
    <>
      {/* ── Announcement pill ─────────────────────────────────────────── */}
      {announcementPill && (
        <div className="mb-5">
          {announcementPill.href ? (
            <Link
              href={announcementPill.href}
              className="inline-flex items-center gap-2.5 rounded-full border border-fj-jet-blue/20 bg-fj-jet-blue/8 px-4 py-1.5 font-fj-body text-sm font-medium text-fj-jet-blue transition-colors hover:bg-fj-jet-blue/12"
            >
              {/* Pulsing live-indicator dot — Framer/Lemon Squeezy pattern */}
              <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fj-jet-blue opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-fj-jet-blue" />
              </span>
              {announcementPill.text}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2.5 rounded-full border border-fj-jet-blue/20 bg-fj-jet-blue/8 px-4 py-1.5 font-fj-body text-sm font-medium text-fj-jet-blue">
              <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fj-jet-blue opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-fj-jet-blue" />
              </span>
              {announcementPill.text}
            </span>
          )}
        </div>
      )}

      {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}

      {/* ── H1 ────────────────────────────────────────────────────────── */}
      <Heading
        as="h1"
        size="hero"
        className={`text-fj-ink max-w-[28ch] ${eyebrow || announcementPill ? 'mt-3 lg:mt-4' : ''}`}
      >
        {headline}
      </Heading>

      {lead && (
        <p
          className="mt-4 max-w-[560px] font-fj-body text-fj-neutral-600"
          style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
        >
          {lead}
        </p>
      )}

      {/* ── CTAs ──────────────────────────────────────────────────────── */}
      {(primaryCta || secondaryCta) && (
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          {primaryCta && (
            primaryCta.modal ? (
              <ModalCTAButton
                label={primaryCta.label}
                region={primaryCta.region ?? 'us'}
                btnVariant="primary-light"
                style={{ boxShadow: '0 4px 24px rgba(0,82,204,0.35), 0 1px 4px rgba(0,82,204,0.20)' }}
              />
            ) : (
              <Link
                href={primaryCta.href ?? '/contact'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-fj-jet-blue px-5 py-2.5 font-fj-body text-[0.9375rem] font-semibold text-white transition-all hover:bg-[#003D99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
                style={{
                  boxShadow: '0 4px 24px rgba(0,82,204,0.35), 0 1px 4px rgba(0,82,204,0.20)',
                }}
              >
                {primaryCta.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            )
          )}
          {secondaryCta && (
            secondaryCta.modal ? (
              <ModalCTAButton
                label={secondaryCta.label}
                region={secondaryCta.region ?? 'us'}
                btnVariant="secondary-light"
              />
            ) : (
              <Link
                href={secondaryCta.href ?? '/contact'}
                className="inline-flex items-center justify-center rounded-full border border-fj-neutral-200 bg-white/60 px-5 py-2.5 font-fj-body text-[0.9375rem] font-semibold text-fj-ink backdrop-blur-sm transition-colors hover:border-fj-neutral-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
              >
                {secondaryCta.label}
              </Link>
            )
          )}
        </div>
      )}

      {/* ── Trust strip ───────────────────────────────────────────────── */}
      {trustItems && trustItems.length > 0 && (
        <div
          className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2"
          style={{ fontSize: '0.8125rem' }}
        >
          {trustItems.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="h-[3px] w-[3px] rounded-full bg-fj-neutral-300" aria-hidden="true" />
              )}
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" fill="rgba(0,82,204,0.08)" stroke="rgba(0,82,204,0.22)" strokeWidth="0.75"/>
                  <path d="M4.5 7l2 2L9.5 4.5" stroke="#0052CC" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-fj-body font-medium text-fj-neutral-500">{item}</span>
              </span>
            </span>
          ))}
        </div>
      )}
    </>
  );
}
