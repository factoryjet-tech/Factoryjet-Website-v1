import type { ReactNode } from 'react';
import Link from 'next/link';
import ModalCTAButton from './ModalCTAButton';
import type { ModalRegion } from '../../context/ContactModalContext';

/**
 * FinalCTA — v2.1 visual upgrade.
 *
 * Dark variant design language (Path A — CSS/JSX only):
 *   - Background: multi-stop gradient (navy→charcoal→dark-purple) + dot grid.
 *     Flat bg-fj-charcoal is replaced — aurora orbs need tonal contrast to be
 *     visible (same fix as StrategicDarkSection)
 *   - Aurora orbs: blue left-center + indigo right-center + violet bottom-
 *     center. Different positioning from StrategicDarkSection so adjacent
 *     dark sections feel compositionally distinct
 *   - Eyebrow: inline color '#7EB3FF' — fj-eyebrow/text-[#F05A28] is too
 *     dark on dark backgrounds. Never use fj-eyebrow class on dark sections.
 *   - Headline: clamp(1.875rem, 3.5vw, 3rem) — slightly larger than body
 *     section headlines (urgency signal) but still viewport-safe
 *   - Primary CTA: intense blue glow (button-as-light-source on dark bg)
 *   - Secondary CTA: border-white/25 ghost treatment
 *
 * Light variant: dot grid + centre bloom on cream + top shimmer separator.
 *
 * Pure server component.
 */

export interface FinalCTAProps {
  variant?: 'light' | 'dark';
  eyebrow?: string;
  headline: ReactNode;
  sub?: string;
  primaryCta: { label: string; href?: string; modal?: true; region?: ModalRegion };
  secondaryCta?: { label: string; href?: string; modal?: true; region?: ModalRegion };
  /** Optional third CTA rendered after the secondary slot — e.g. WhatsAppCTA. */
  extraCta?: ReactNode;
  objectionHandler?: string;
}

export default function FinalCTA({
  variant = 'light',
  eyebrow,
  headline,
  sub,
  primaryCta,
  secondaryCta,
  extraCta,
  objectionHandler,
}: FinalCTAProps) {
  const isDark = variant === 'dark';

  /* ─── Dark variant ──────────────────────────────────────────────────────── */
  if (isDark) {
    return (
      <section
        className="relative overflow-hidden py-14 md:py-20"
        style={{
          backgroundImage: [
            'radial-gradient(circle, rgba(255,255,255,0.052) 1px, transparent 1px)',
            'linear-gradient(135deg, #060D1F 0%, #0F0F12 45%, #0D0818 100%)',
          ].join(', '),
          backgroundSize: '28px 28px, 100% 100%',
        }}
      >
        {/* Orange aurora — left-center */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: '-10%', top: '15%',
            width: '720px', height: '720px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(240,90,40,0.28) 0%, transparent 65%)',
            filter: 'blur(48px)',
          }}
          aria-hidden="true"
        />

        {/* Warm amber aurora — right-center */}
        <div
          className="pointer-events-none absolute"
          style={{
            right: '-8%', top: '25%',
            width: '580px', height: '580px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(240,90,40,0.16) 0%, transparent 65%)',
            filter: 'blur(56px)',
          }}
          aria-hidden="true"
        />

        {/* Amber accent — bottom-center */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: '50%', bottom: '-15%',
            transform: 'translateX(-50%)',
            width: '440px', height: '440px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(240,90,40,0.12) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1120px] px-6 md:px-8 text-center">

          {eyebrow && (
            <p
              className="font-fj-mono font-bold uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}
            >
              {eyebrow}
            </p>
          )}

          <h2
            className={`fj-display font-semibold text-fj-charcoal-text mx-auto max-w-[22ch] ${eyebrow ? 'mt-3' : ''}`}
            style={{
              fontSize: 'clamp(1.875rem, 3.5vw, 3rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
            }}
          >
            {headline}
          </h2>

          {sub && (
            <p
              className="mt-5 mx-auto max-w-[600px] font-fj-body text-fj-charcoal-text/75"
              style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
            >
              {sub}
            </p>
          )}

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {primaryCta.modal ? (
              <ModalCTAButton
                label={primaryCta.label}
                region={primaryCta.region ?? 'us'}
                btnVariant="primary-dark"
                style={{ boxShadow: '0 0 0 1px rgba(240,90,40,0.50), 0 8px 48px rgba(240,90,40,0.40), 0 2px 12px rgba(240,90,40,0.30)' }}
              />
            ) : (
              <Link
                href={primaryCta.href ?? '/contact'}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-fj-body text-base font-semibold text-white transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05A28]"
                style={{
                  background: '#F05A28',
                  boxShadow: '0 0 0 1px rgba(240,90,40,0.50), 0 8px 48px rgba(240,90,40,0.40), 0 2px 12px rgba(240,90,40,0.30)',
                }}
              >
                {primaryCta.label}
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            )}

            {secondaryCta && (
              secondaryCta.modal ? (
                <ModalCTAButton
                  label={secondaryCta.label}
                  region={secondaryCta.region ?? 'us'}
                  btnVariant="secondary-dark"
                />
              ) : (
                <Link
                  href={secondaryCta.href ?? '/contact'}
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-7 py-3.5 font-fj-body text-base font-semibold text-fj-charcoal-text transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {secondaryCta.label}
                </Link>
              )
            )}
            {extraCta}
          </div>

          {objectionHandler && (
            <p
              className="mt-6 mx-auto max-w-[500px] font-fj-body text-fj-charcoal-muted"
              style={{ fontSize: '0.8125rem', lineHeight: 1.5, letterSpacing: '0.005em', fontWeight: 500 }}
            >
              {objectionHandler}
            </p>
          )}
        </div>
      </section>
    );
  }

  /* ─── Light variant ─────────────────────────────────────────────────────── */
  return (
    <section
      className="relative py-14 md:py-20"
      style={{
        backgroundImage: [
          'radial-gradient(circle, rgba(0,0,0,0.028) 1px, transparent 1px)',
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(240,90,40,0.040) 0%, transparent 65%)',
        ].join(', '),
        backgroundSize: '28px 28px, 100% 100%',
        backgroundColor: '#FAFAF7',
      }}
    >
      {/* Top shimmer separator */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(240,90,40,0.15) 30%, rgba(240,90,40,0.15) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1120px] px-6 md:px-8 text-center">

        {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}

        <h2
          className={`fj-display font-semibold text-fj-ink mx-auto max-w-[22ch] ${eyebrow ? 'mt-3' : ''}`}
          style={{
            fontSize: 'clamp(1.875rem, 3.5vw, 3rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.028em',
          }}
        >
          {headline}
        </h2>

        {sub && (
          <p
            className="mt-5 mx-auto max-w-[600px] font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
          >
            {sub}
          </p>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          {primaryCta.modal ? (
            <ModalCTAButton
              label={primaryCta.label}
              region={primaryCta.region ?? 'us'}
              btnVariant="primary-light"
              style={{ boxShadow: '0 4px 24px rgba(240,90,40,0.30), 0 1px 4px rgba(240,90,40,0.15)' }}
            />
          ) : (
            <Link
              href={primaryCta.href ?? '/contact'}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-fj-body text-base font-semibold text-white transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05A28]"
              style={{
                background: '#F05A28',
                boxShadow: '0 4px 24px rgba(240,90,40,0.30), 0 1px 4px rgba(240,90,40,0.15)',
              }}
            >
              {primaryCta.label}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
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
                className="inline-flex items-center justify-center rounded-full border border-fj-neutral-200 bg-white/60 px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink backdrop-blur-sm transition-colors hover:border-fj-neutral-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05A28]"
              >
                {secondaryCta.label}
              </Link>
            )
          )}
          {extraCta}
        </div>

        {objectionHandler && (
          <p
            className="mt-6 mx-auto max-w-[500px] font-fj-body text-fj-neutral-400"
            style={{ fontSize: '0.8125rem', lineHeight: 1.5, letterSpacing: '0.005em', fontWeight: 500 }}
          >
            {objectionHandler}
          </p>
        )}
      </div>
    </section>
  );
}
