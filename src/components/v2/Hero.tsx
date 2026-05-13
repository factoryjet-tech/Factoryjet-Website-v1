import type { ReactNode } from 'react';
import Link from 'next/link';

import Heading from './Heading';
import ModalCTAButton from './ModalCTAButton';
import type { ModalRegion } from '../../context/ContactModalContext';

/**
 * Hero — v2.3 light-theme upgrade.
 *
 * Design language:
 *   - Background: cream #FAFAF7 + subtle dot grid + orange radial bloom top-left
 *     (behind headline). Right side intentionally clean — the AI hero image
 *     owns that quadrant with its own baked-in orange glow.
 *   - Announcement pill: pulsing orange live-indicator dot
 *   - Primary CTA: #F05A28 orange fill + orange ambient glow shadow
 *   - Secondary CTA: frosted glass (white/70 + neutral border)
 *   - Trust strip: orange checkmark pill icons
 *   - Bottom shimmer: orange gradient hairline separator
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
      className="relative overflow-hidden pt-8 lg:pt-10 pb-8 md:pb-10"
      style={{
        /*
         * Hero background v2.3 — light cream with orange warmth.
         *
         * Layer 1 — orange bloom: top-left only (behind the headline text).
         *   Opacity 0.14 keeps it warm without washing out the ink headline.
         *   Right side is deliberately clean — the hero image's own baked-in
         *   orange glow owns that quadrant. Two glows in the same corner clash;
         *   opposing glows create intentional visual tension.
         * Layer 2 — dot grid: subtle 1px dots, same Vercel/Linear pattern.
         */
        backgroundImage: [
          'radial-gradient(circle 380px at -60px -80px, rgba(240,90,40,0.14) 0%, rgba(240,90,40,0.05) 55%, transparent 72%)',
          'radial-gradient(circle, rgba(15,15,18,0.09) 1px, transparent 1px)',
        ].join(', '),
        backgroundSize: '100%, 22px 22px',
        backgroundColor: '#FAFAF7',
      }}
    >
      {/* Bottom shimmer separator — orange */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(240,90,40,0.22) 30%, rgba(240,90,40,0.22) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        {hasRightSlot ? (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-6">
              <HeroContent
                announcementPill={announcementPill}
                eyebrow={eyebrow}
                headline={headline}
                lead={lead}
                primaryCta={primaryCta}
                secondaryCta={secondaryCta}
                trustItems={trustItems}
                hasSlot={true}
              />
            </div>
            <div className="lg:col-span-6">{rightSlot}</div>
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
  hasSlot = false,
}: Omit<HeroProps, 'rightSlot'> & { hasSlot?: boolean }) {
  return (
    <>
      {/* ── Announcement pill ─────────────────────────────────────────── */}
      {announcementPill && (
        <div className="mb-4">
          {announcementPill.href ? (
            <Link
              href={announcementPill.href}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 font-fj-body text-sm font-semibold transition-colors"
              style={{
                border: '1px solid rgba(240,90,40,0.25)',
                background: 'rgba(240,90,40,0.08)',
                color: '#F05A28',
              }}
            >
              {/* Pulsing orange live-indicator dot */}
              <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ background: '#F05A28' }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: '#F05A28' }}
                />
              </span>
              {announcementPill.text}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ) : (
            <span
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 font-fj-body text-sm font-semibold"
              style={{
                border: '1px solid rgba(240,90,40,0.25)',
                background: 'rgba(240,90,40,0.08)',
                color: '#F05A28',
              }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ background: '#F05A28' }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: '#F05A28' }}
                />
              </span>
              {announcementPill.text}
            </span>
          )}
        </div>
      )}

      {/* Eyebrow — orange to match brand accent */}
      {eyebrow && (
        <p className="fj-eyebrow mb-3" style={{ color: '#F05A28' }}>
          {eyebrow}
        </p>
      )}

      {/* ── H1 ────────────────────────────────────────────────────────── */}
      <Heading
        as="h1"
        size="hero"
        className={`text-fj-ink max-w-[28ch] [text-wrap:initial] ${hasSlot ? '!text-[clamp(1.75rem,3.1vw,2.375rem)]' : ''} ${eyebrow || announcementPill ? 'mt-2 lg:mt-3' : ''}`}
      >
        {headline}
      </Heading>

      {lead && (
        <p
          className="mt-3 max-w-[540px] font-fj-body text-fj-neutral-600"
          style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}
        >
          {lead}
        </p>
      )}

      {/* ── CTAs ──────────────────────────────────────────────────────── */}
      {(primaryCta || secondaryCta) && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          {primaryCta && (
            primaryCta.modal ? (
              <ModalCTAButton
                label={primaryCta.label}
                region={primaryCta.region ?? 'us'}
                btnVariant="primary-light"
              />
            ) : (
              <Link
                href={primaryCta.href ?? '/contact'}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-fj-body text-[0.9375rem] font-semibold text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  background: '#F05A28',
                  boxShadow: '0 4px 20px rgba(240,90,40,0.38), 0 1px 4px rgba(240,90,40,0.22)',
                  outlineColor: '#F05A28',
                }}
              >
                {primaryCta.label}
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ background: 'rgba(255,255,255,0.22)' }}
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
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
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-fj-body text-[0.9375rem] font-semibold text-fj-ink backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
                style={{
                  background: 'rgba(255,255,255,0.70)',
                  border: '1px solid rgba(15,15,18,0.14)',
                }}
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
          className="mt-5 flex flex-nowrap items-center gap-x-4 overflow-hidden"
          style={{ fontSize: '0.8125rem' }}
        >
          {trustItems.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="h-[3px] w-[3px] rounded-full bg-fj-neutral-300" aria-hidden="true" />
              )}
              <span className="flex items-center gap-1.5">
                {/* Orange checkmark circle — matches brand accent */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" fill="rgba(240,90,40,0.08)" stroke="rgba(240,90,40,0.28)" strokeWidth="0.75"/>
                  <path d="M4.5 7l2 2L9.5 4.5" stroke="#F05A28" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
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
