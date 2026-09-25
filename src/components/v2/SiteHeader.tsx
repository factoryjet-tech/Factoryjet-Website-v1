'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';
import type { ModalRegion } from '../../context/ContactModalContext';
import Wordmark from './Wordmark';
import { MegaNavDesktop, MegaNavMobile } from './MegaNav';
import { AU_SERVICE_HUBS, AU_SIMPLE_MENUS, UK_SERVICE_HUBS, UK_SIMPLE_MENUS } from './megaNavData';

// ─── Locale type ──────────────────────────────────────────────────────────────

export type SiteHeaderLocale = 'us' | 'gb' | 'au' | 'in' | 'uae';

// ─── Locale config (modern header: US, UK, AU) ───────────────────────────────
// Menu content lives in megaNavData.ts. India and UAE render SiteHeaderLegacy,
// which keeps the full legacy menus and their own config.
const LOCALE_CONFIG: Record<'us' | 'gb' | 'au', { modalRegion: ModalRegion; defaultCtaLabel: string }> = {
  us: { modalRegion: 'us', defaultCtaLabel: 'Talk to the Founder' },
  gb: { modalRegion: 'uk', defaultCtaLabel: 'Talk to the Founder' },
  au: { modalRegion: 'au', defaultCtaLabel: 'Talk to the Founder' },
};

// ─── Types ────────────────────────────────────────────────────────────────────

type CtaItem = {
  label: string;
  href?: string;
  modal?: boolean;
  region?: ModalRegion;
};

export interface SiteHeaderProps {
  /** Controls which locale's nav data, cities, and links are shown. Default: 'us'. */
  locale?: SiteHeaderLocale;
  logoText?: string;
  logoHref?: string;
  /** @deprecated SiteHeader now manages its own mega-nav. This prop is ignored. */
  navLinks?: ReadonlyArray<CtaItem>;
  /** Pass a custom CTA item to override the default modal CTA. */
  cta?: CtaItem;
  className?: string;
}

function ModernSiteHeader({
  locale = 'us',
  logoText = 'FactoryJet',
  logoHref = '/',
  cta,
  className = '',
}: SiteHeaderProps) {
  const { openModal } = useContactModal();
  const cfg = LOCALE_CONFIG[locale as 'us' | 'gb' | 'au'] ?? LOCALE_CONFIG.us;

  const megaData = locale === 'gb' ? { hubs: UK_SERVICE_HUBS, menus: UK_SIMPLE_MENUS }
    : locale === 'au' ? { hubs: AU_SERVICE_HUBS, menus: AU_SIMPLE_MENUS } : {};

  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile drawer on Escape (the desktop mega menu handles its own).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleCta = () => {
    if (cta?.modal) {
      openModal(cta.region ?? cfg.modalRegion);
    } else if (cta?.href) {
      window.location.href = cta.href;
    } else {
      openModal(cfg.modalRegion);
    }
  };

  return (
    <>
      {/* -- Main header bar ------------------------------------------------- */}
      <header
        className={`sticky top-0 z-[9999] bg-fj-cream/95 backdrop-blur-sm border-b border-fj-neutral-200 ${className}`.trim()}
      >
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">

            {/* Logo */}
            <Link
              href={logoHref}
              className="flex-shrink-0 text-fj-ink"
              aria-label={logoText}
            >
              <Wordmark label={null} className="h-[19px] w-auto md:h-[21px]" />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">

              <MegaNavDesktop {...megaData} />
            </nav>

            {/* Right side: CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* Mobile hamburger */}
              <button
                type="button"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-drawer"
                onClick={() => setMobileOpen((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-fj-ink transition-colors hover:bg-fj-neutral-100 md:hidden"
              >
                {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
              </button>

              {/* Desktop CTA */}
              <button
                type="button"
                onClick={handleCta}
                className="hidden items-center justify-center rounded-full px-5 py-2.5 font-fj-body text-[14px] font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
                style={{ background: '#C2440F' }}
              >
                {cta?.label ?? cfg.defaultCtaLabel}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* -- Mobile drawer --------------------------------------------------- */}

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-fj-ink/25 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-[88vw] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-16 flex-shrink-0 items-center justify-between border-b border-fj-neutral-100 px-5">
          <Link
            href={logoHref}
            onClick={() => setMobileOpen(false)}
            className="text-fj-ink"
            aria-label={logoText}
          >
            <Wordmark label={null} className="h-[18px] w-auto" />
          </Link>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-fj-ink transition-colors hover:bg-fj-neutral-100"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable nav area */}
        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3" aria-label="Mobile navigation">

          <MegaNavMobile onNavigate={() => setMobileOpen(false)} {...megaData} />
        </nav>

        {/* Drawer footer CTA */}
        <div className="flex-shrink-0 border-t border-fj-neutral-100 px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              openModal(cfg.modalRegion);
            }}
            className="flex w-full items-center justify-center rounded-full py-3.5 font-fj-body text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: '#C2440F' }}
          >
            {cfg.defaultCtaLabel}
          </button>
        </div>

      </div>
    </>
  );
}

/**
 * SiteHeader router (2026-09-25 performance split). US, UK and AU render the
 * modern header above (four-hub mega menu). India and UAE still use the legacy
 * menus, which live in SiteHeaderLegacy.tsx and are loaded with next/dynamic,
 * so their ~1,500 lines of menu data and markup are no longer in the bundle
 * for every other visitor. Server-rendered for both, so crawlers see all links.
 */
const SiteHeaderLegacy = dynamic(() => import('./SiteHeaderLegacy'));

export default function SiteHeader(props: SiteHeaderProps) {
  const locale = props.locale ?? 'us';
  if (locale === 'in' || locale === 'uae') return <SiteHeaderLegacy {...props} />;
  return <ModernSiteHeader {...props} />;
}

export { SiteHeader };
