import type { ReactNode } from 'react';
import Link from 'next/link';
import MotionFadeUp from './MotionFadeUp';

/**
 * ServicesGrid — v1.0 (Sprint 11 design system)
 *
 * Dedicated Services section component. Replaces IndustriesGrid for the
 * "Our Services" use case.
 *
 * Design language:
 *   - Two-column section header (headline left / lead + CTA right)
 *   - Bento grid: featured card (col-span-2) + 6 service cards + 1 CTA card
 *     → Perfect 3×3 on LG, clean stacking on MD/SM
 *   - Cards: icon badge (the ONE decorative element per premium template rule),
 *     gradient fill, 3px blue top-cap, depth shadow, hover lift + ring glow
 *   - No watermark numbers — cleaner than IndustriesGrid
 *   - Price chip (blue tint) + delivery chip (green) on each card
 *   - Featured card: wider layout with "What's included" feature panel
 *   - CTA card: blue gradient — visually distinct, Linear-style grid terminator
 *
 * Pure server component.
 */

/* ─── Icon system ─────────────────────────────────────────────────────────── */

export type ServiceIconType =
  | 'web'
  | 'shopify'
  | 'ecommerce'
  | 'ai-agent'
  | 'ai-seo'
  | 'ai-creative'
  | 'redesign';

interface IconMeta {
  color: string;
  bg: string;
  el: ReactNode;
}

const ICONS: Record<ServiceIconType, IconMeta> = {
  web: {
    color: '#0052CC',
    bg: 'rgba(0,82,204,0.10)',
    el: (
      <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="16" height="14" rx="2" />
        <path d="M2 7.5h16" />
        <circle cx="5.5" cy="5.25" r=".75" fill="currentColor" stroke="none" />
        <circle cx="8"   cy="5.25" r=".75" fill="currentColor" stroke="none" />
        <circle cx="10.5" cy="5.25" r=".75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  shopify: {
    color: '#15803D',
    bg: 'rgba(21,128,61,0.09)',
    el: (
      <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5.5 8.5V7a4.5 4.5 0 019 0v1.5" />
        <rect x="2.5" y="8.5" width="15" height="9" rx="2" />
        <path d="M8 13.5a2 2 0 004 0" />
      </svg>
    ),
  },
  ecommerce: {
    color: '#C2410C',
    bg: 'rgba(194,65,12,0.08)',
    el: (
      <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1.5 2.5H4L6 13H15.5L17.5 6.5H5.5" />
        <circle cx="8"   cy="16.5" r="1.25" />
        <circle cx="13.5" cy="16.5" r="1.25" />
      </svg>
    ),
  },
  'ai-agent': {
    color: '#6D28D9',
    bg: 'rgba(109,40,217,0.08)',
    el: (
      <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4.5" width="14" height="11" rx="2" />
        <circle cx="7.5"  cy="9.5" r="1.25" />
        <circle cx="12.5" cy="9.5" r="1.25" />
        <path d="M7.5 13h5" />
        <path d="M7 3.5v1.5M13 3.5v1.5" />
      </svg>
    ),
  },
  'ai-seo': {
    color: '#0369A1',
    bg: 'rgba(3,105,161,0.09)',
    el: (
      <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8.5" cy="8.5" r="5.5" />
        <path d="M12.5 12.5L17.5 17.5" />
        {/* Sparkle above the magnifier */}
        <path d="M14.5 3l.4.8.8.4-.8.4-.4.8-.4-.8-.8-.4.8-.4z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  'ai-creative': {
    color: '#9D174D',
    bg: 'rgba(157,23,77,0.08)',
    el: (
      <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Brush stroke */}
        <path d="M3.5 16.5L13 7" />
        <path d="M13 7l2.5-2.5" />
        <circle cx="16.5" cy="3.5" r="1.25" />
        {/* Star */}
        <path d="M7 4l.6 1.2 1.2.6-1.2.6L7 7.6l-.6-1.2-1.2-.6 1.2-.6z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  redesign: {
    color: '#0D9488',
    bg: 'rgba(13,148,136,0.09)',
    el: (
      <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 10a6.5 6.5 0 0111-4.7" />
        <path d="M16.5 10a6.5 6.5 0 01-11 4.7" />
        <polyline points="3.5,3.5 3.5,10 10,10" />
        <polyline points="16.5,16.5 16.5,10 10,10" />
      </svg>
    ),
  },
};

function IconBadge({ type, size = 40 }: { type: ServiceIconType; size?: number }) {
  const meta = ICONS[type];
  return (
    <span
      className="inline-flex flex-shrink-0 items-center justify-center rounded-xl"
      style={{
        width: size,
        height: size,
        background: meta.bg,
        color: meta.color,
      }}
      aria-hidden="true"
    >
      {meta.el}
    </span>
  );
}

/* ─── Badge chips ─────────────────────────────────────────────────────────── */

function PriceChip({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 font-fj-body font-semibold"
      style={{ fontSize: '0.7rem', background: 'rgba(0,82,204,0.08)', color: '#0052CC', letterSpacing: '0.01em' }}
    >
      {label}
    </span>
  );
}

function DeliveryChip({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-fj-body font-semibold"
      style={{ fontSize: '0.7rem', background: 'rgba(22,163,74,0.09)', color: '#15803D', letterSpacing: '0.01em' }}
    >
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#15803D]" aria-hidden="true" />
      {label}
    </span>
  );
}

/* ─── Types ───────────────────────────────────────────────────────────────── */

export interface ServiceItem {
  name: string;
  description: string;
  iconType: ServiceIconType;
  /** Short label, e.g. "From $1,999" */
  price?: string;
  /** Short label, e.g. "7-day delivery" */
  delivery?: string;
  /** Feature bullets shown only on the featured (first) card */
  features?: readonly string[];
  linkLabel?: string;
  linkHref?: string;
}

export interface ServicesGridCtaCard {
  headline: string;
  sub: string;
  btnLabel: string;
  btnHref: string;
}

export interface ServicesGridProps {
  eyebrow?: string;
  headline: ReactNode;
  lead?: string;
  /** First item automatically renders as the featured card (lg:col-span-2). */
  services: ReadonlyArray<ServiceItem>;
  /** Optional blue CTA card appended as the last grid cell. */
  ctaCard?: ServicesGridCtaCard;
  /** Override the "Explore all services" link. Default: /us/services/web-design */
  exploreHref?: string;
}

/* ─── Main component ──────────────────────────────────────────────────────── */

export default function ServicesGrid({
  eyebrow,
  headline,
  lead,
  services,
  ctaCard,
  exploreHref = '/us/services/web-design',
}: ServicesGridProps) {
  const [featured, ...rest] = services;

  return (
    <section
      className="py-10 md:py-14"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">

        {/* ── Two-column section header ──────────────────────────────────────── */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:mb-12 lg:grid-cols-2 lg:gap-16">
          <div>
            {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
            <h2
              className={`fj-display font-semibold text-fj-ink ${eyebrow ? 'mt-3' : ''}`}
              style={{
                fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
              }}
            >
              {headline}
            </h2>
          </div>
          {lead && (
            <div className="flex flex-col justify-end gap-4 lg:pt-1">
              <p
                className="font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}
              >
                {lead}
              </p>
              <Link
                href={exploreHref}
                className="inline-flex w-fit items-center gap-1.5 font-fj-body text-sm font-semibold text-fj-jet-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
              >
                Explore all services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* ── Bento grid ────────────────────────────────────────────────────── */}
        {/*
         * LG (3-col):
         *   Row 1: [featured ×2] [card-1]
         *   Row 2: [card-2] [card-3] [card-4]
         *   Row 3: [card-5] [card-6] [ctaCard]
         *
         * MD (2-col):
         *   Row 1: [featured ×2]
         *   Rows 2-4: pairs of cards
         *   Row 5: [ctaCard ×2] (full-width footer)
         *
         * SM: single column throughout.
         */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {/* Featured card — spans 2 cols on MD and LG */}
          {featured && (
            <div className="md:col-span-2 lg:col-span-2">
              <MotionFadeUp delay={0}>
                <FeaturedCard service={featured} />
              </MotionFadeUp>
            </div>
          )}

          {/* Regular service cards */}
          {rest.map((service, i) => (
            <div key={service.name}>
              <MotionFadeUp delay={(i + 1) * 0.06}>
                <ServiceCard service={service} />
              </MotionFadeUp>
            </div>
          ))}

          {/* CTA card — full-width on MD, 1-col on LG */}
          {ctaCard && (
            <div className="md:col-span-2 lg:col-span-1">
              <MotionFadeUp delay={(rest.length + 1) * 0.06}>
                <CtaCard {...ctaCard} />
              </MotionFadeUp>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

/* ─── Featured card (col-span-2) ─────────────────────────────────────────── */

function FeaturedCard({ service }: { service: ServiceItem }) {
  return (
    <div className="group relative h-full">
      {/* Hover ring — outside overflow-hidden so it's never clipped */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: '0 0 0 2px rgba(0,82,204,0.40), 0 16px 48px rgba(0,82,204,0.14)' }}
        aria-hidden="true"
      />

      <article
        className="relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-transform duration-300 group-hover:-translate-y-1.5 lg:flex-row lg:gap-8"
        style={{
          background: 'linear-gradient(140deg, #FFFFFF 0%, #EBF2FF 100%)',
          border: '1px solid rgba(0,82,204,0.16)',
          borderTopWidth: '3px',
          borderTopColor: 'rgba(0,82,204,0.75)',
          boxShadow: '0 4px 24px rgba(0,82,204,0.07), 0 1px 4px rgba(0,0,0,0.05)',
        }}
      >
        {/* Crystal shimmer — 1px hairline at very top */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,82,204,0.38) 40%, rgba(0,82,204,0.38) 60%, transparent 100%)' }}
          aria-hidden="true"
        />

        {/* Left column: icon, title, description, badges, CTA */}
        <div className="flex flex-col lg:flex-1">
          <IconBadge type={service.iconType} size={44} />

          <h3
            className="fj-display mt-4 font-semibold text-fj-ink"
            style={{ fontSize: '1.375rem', lineHeight: 1.2, letterSpacing: '-0.022em' }}
          >
            {service.name}
          </h3>

          <p
            className="mt-3 font-fj-body text-fj-neutral-600"
            style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}
          >
            {service.description}
          </p>

          {/* Price + delivery chips */}
          {(service.price || service.delivery) && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {service.price    && <PriceChip    label={service.price}    />}
              {service.delivery && <DeliveryChip label={service.delivery} />}
            </div>
          )}

          {/* Primary CTA button */}
          {service.linkLabel && service.linkHref && (
            <Link
              href={service.linkHref}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-fj-jet-blue px-5 py-2.5 font-fj-body text-[0.9rem] font-semibold text-white transition-all hover:bg-[#003D99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
              style={{ boxShadow: '0 4px 16px rgba(0,82,204,0.28)' }}
            >
              {service.linkLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )}
        </div>

        {/* Right panel: "What's included" feature checklist — only on LG */}
        {service.features && service.features.length > 0 && (
          <div
            className="mt-6 flex-shrink-0 rounded-xl p-5 lg:mt-0 lg:w-[230px]"
            style={{
              background: 'rgba(0,82,204,0.05)',
              border: '1px solid rgba(0,82,204,0.10)',
            }}
          >
            <p
              className="font-fj-body font-semibold uppercase tracking-widest text-fj-jet-blue"
              style={{ fontSize: '9.5px', letterSpacing: '0.12em', opacity: 0.75 }}
            >
              What&apos;s included
            </p>
            <ul className="mt-3 flex flex-col gap-3">
              {service.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <span className="mt-[1px] flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="6.5" fill="rgba(0,82,204,0.12)" stroke="rgba(0,82,204,0.24)" strokeWidth="0.75" />
                      <path d="M4.5 7l2 2L9.5 4.5" stroke="#0052CC" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span
                    className="font-fj-body font-medium text-fj-neutral-600"
                    style={{ fontSize: '0.8125rem', lineHeight: 1.5 }}
                  >
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}

/* ─── Regular service card ────────────────────────────────────────────────── */

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="group relative h-full">
      {/* Hover ring — outside overflow-hidden */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: '0 0 0 2px rgba(0,82,204,0.35), 0 12px 40px rgba(0,82,204,0.11)' }}
        aria-hidden="true"
      />

      <article
        className="relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-300 group-hover:-translate-y-1.5"
        style={{
          background: 'linear-gradient(165deg, #FFFFFF 0%, #F2F6FF 100%)',
          border: '1px solid rgba(0,82,204,0.11)',
          borderTopWidth: '3px',
          borderTopColor: 'rgba(0,82,204,0.60)',
          boxShadow: '0 4px 20px rgba(0,82,204,0.05), 0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        {/* Crystal shimmer */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,82,204,0.28), transparent)' }}
          aria-hidden="true"
        />

        <IconBadge type={service.iconType} size={40} />

        <h3
          className="fj-display mt-4 font-semibold text-fj-ink"
          style={{ fontSize: '1.0625rem', lineHeight: 1.3, letterSpacing: '-0.015em' }}
        >
          {service.name}
        </h3>

        <p
          className="mt-2.5 flex-1 font-fj-body text-fj-neutral-600"
          style={{ fontSize: '0.9rem', lineHeight: 1.6 }}
        >
          {service.description}
        </p>

        {/* Price + delivery chips */}
        {(service.price || service.delivery) && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {service.price    && <PriceChip    label={service.price}    />}
            {service.delivery && <DeliveryChip label={service.delivery} />}
          </div>
        )}

        {/* Text link CTA */}
        {service.linkLabel && service.linkHref && (
          <Link
            href={service.linkHref}
            className="mt-4 inline-flex items-center gap-1.5 font-fj-body text-[0.875rem] font-semibold text-fj-jet-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue"
          >
            {service.linkLabel}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </article>
    </div>
  );
}

/* ─── Blue CTA card (grid terminator) ────────────────────────────────────── */

function CtaCard({ headline, sub, btnLabel, btnHref }: ServicesGridCtaCard) {
  return (
    <div className="relative h-full min-h-[220px]">
      <article
        className="relative flex h-full flex-col items-start justify-between overflow-hidden rounded-2xl p-7"
        style={{
          background: 'linear-gradient(145deg, #0052CC 0%, #003D99 100%)',
          boxShadow: '0 8px 32px rgba(0,82,204,0.26), 0 2px 8px rgba(0,0,0,0.10)',
        }}
      >
        {/* Dot grid overlay — same pattern as section bg, but white on blue */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />
        {/* Soft bloom top-right */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
          style={{ background: 'rgba(147,197,253,0.22)', filter: 'blur(28px)' }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative">
          {/* Live indicator */}
          <div className="mb-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span
              className="font-fj-body font-semibold uppercase tracking-widest text-white/60"
              style={{ fontSize: '9px', letterSpacing: '0.14em' }}
            >
              Accepting new clients
            </span>
          </div>

          <h3
            className="fj-display mt-2 font-semibold text-white"
            style={{ fontSize: '1.1875rem', lineHeight: 1.25, letterSpacing: '-0.02em' }}
          >
            {headline}
          </h3>
          <p
            className="mt-2.5 font-fj-body text-white/72"
            style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
          >
            {sub}
          </p>
        </div>

        {/* CTA button */}
        <Link
          href={btnHref}
          className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-fj-body text-[0.875rem] font-semibold text-fj-jet-blue transition-all hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {btnLabel}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </article>
    </div>
  );
}
