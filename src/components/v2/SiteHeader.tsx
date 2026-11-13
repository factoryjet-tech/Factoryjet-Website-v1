'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';
import type { ModalRegion } from '../../context/ContactModalContext';
import Wordmark from './Wordmark';
import { MegaNavDesktop, MegaNavMobile } from './MegaNav';
import { AU_SERVICE_HUBS, AU_SIMPLE_MENUS, UK_SERVICE_HUBS, UK_SIMPLE_MENUS } from './megaNavData';
import { containDialogFocus } from '@/utils/dialogFocus';

// ─── Locale type ──────────────────────────────────────────────────────────────

export type SiteHeaderLocale = 'us' | 'gb' | 'au' | 'in' | 'uae';

// ─── Locale config (modern header: US, UK, AU) ───────────────────────────────
// Menu content lives in megaNavData.ts. India and UAE render SiteHeaderLegacy,
// which keeps the full legacy menus and their own config.
const LOCALE_CONFIG: Record<'us' | 'gb' | 'au', { modalRegion: ModalRegion; defaultCtaLabel: string }> = {
  us: { modalRegion: 'us', defaultCtaLabel: 'Talk to us' },
  gb: { modalRegion: 'uk', defaultCtaLabel: 'Talk to us' },
  au: { modalRegion: 'au', defaultCtaLabel: 'Talk to us' },
};

/** About 108 pages pass cta.label "Talk to the Founder" (any case). Since 13 Nov
 *  2026 the shell says "Talk to us" for those, without editing the pages. Pages
 *  that chose a different offer ("Book an Audit", "See a demo on my data") keep it. */
const RETIRED_CTA_LABEL = /^\s*talk to the founder\s*$/i;
function ctaLabelFor(cta: CtaItem | undefined, fallback: string): string {
  if (!cta?.label || RETIRED_CTA_LABEL.test(cta.label)) return fallback;
  return cta.label;
}

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
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen || !drawerRef.current) return;
    const desktop = window.matchMedia('(min-width: 768px)');
    if (desktop.matches) { setMobileOpen(false); return; }
    const onResize = () => { if (desktop.matches) setMobileOpen(false); };
    desktop.addEventListener('change', onResize);
    const release = containDialogFocus(drawerRef.current, () => setMobileOpen(false), menuTriggerRef.current);
    return () => { desktop.removeEventListener('change', onResize); release(); };
  }, [mobileOpen]);

  // Header settles on scroll: a hairline shadow once the page has moved 8px.
  // One IntersectionObserver on an 8px sentinel above the header, no scroll
  // listener. Starts after first paint, so it cannot touch LCP; only box-shadow
  // changes, so nothing below the header moves.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
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
      {/* Scroll sentinel: 8px tall, pulled back up by its negative margin, so it
          takes no space. When it leaves the viewport the header gains its shadow. */}
      <div ref={sentinelRef} aria-hidden="true" className="pointer-events-none h-2 -mb-2" />

      {/* -- Main header bar ------------------------------------------------- */}
      {/* Wave 2 (13 Nov 2026): solid white with a hairline, no backdrop blur
          (cheaper to paint on scroll); shadow only after the page scrolls. */}
      <header
        data-scrolled={scrolled ? 'true' : undefined}
        className={`sticky top-0 z-[9999] bg-white border-b border-[#E7DED6] transition-shadow duration-150 ease-out motion-reduce:transition-none data-[scrolled=true]:shadow-[0_8px_24px_-18px_rgba(20,17,15,0.28)] ${className}`.trim()}
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
                ref={menuTriggerRef}
                type="button"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-drawer"
                onClick={() => setMobileOpen((v) => !v)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-fj-ink transition-colors hover:bg-fj-neutral-100 md:hidden"
              >
                {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
              </button>

              {/* Desktop CTA */}
              <button
                type="button"
                onClick={handleCta}
                className="hidden min-h-11 items-center justify-center rounded-lg bg-[#B23E13] px-5 py-2.5 font-fj-body text-[14px] font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
              >
                {ctaLabelFor(cta, cfg.defaultCtaLabel)}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* -- Mobile drawer --------------------------------------------------- */}

      {/* Backdrop */}
      <div
        data-dialog-backdrop
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-fj-ink/25 backdrop-blur-sm transition-opacity motion-reduce:transition-none duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        tabIndex={-1}
        inert={!mobileOpen}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal={mobileOpen ? true : undefined}
        aria-label="Navigation menu"
        style={{ visibility: mobileOpen ? 'visible' : 'hidden' }}
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-[88vw] max-w-[360px] flex-col bg-white shadow-2xl transition-transform motion-reduce:transition-none duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
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
            className="flex h-11 w-11 items-center justify-center rounded-lg text-fj-ink transition-colors hover:bg-fj-neutral-100"
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
            className="flex w-full items-center justify-center rounded-lg bg-[#B23E13] py-3.5 font-fj-body text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
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
