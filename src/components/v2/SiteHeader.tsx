'use client';

import Link from 'next/link';
import { useContactModal } from '../../context/ContactModalContext';
import type { ModalRegion } from '../../context/ContactModalContext';

/**
 * SiteHeader — v2.0 top-of-page chrome.
 *
 * Cream surface to match the page; 1px fj-neutral-200 bottom hairline.
 * Logo wordmark in Clash Display 700 on the left; flat horizontal nav in
 * Inter on desktop; primary CTA on the right. No mega-menu, no
 * dropdowns — flat list only, by design.
 *
 * Mobile (< md): nav hides, replaced by a static "Menu" text link
 * pointing to "#menu" — honest about being a static prototype, no
 * hamburger JS.
 *
 * Client component — required to wire modal CTAs via useContactModal hook.
 */

/** A nav item or CTA can be either a plain link or a modal trigger. */
type CtaItem = {
  label: string;
  href?: string;
  modal?: boolean;
  region?: ModalRegion;
};

export interface SiteHeaderProps {
  logoText?: string;
  logoHref?: string;
  navLinks?: ReadonlyArray<CtaItem>;
  cta?: CtaItem;
  className?: string;
}

const DEFAULT_NAV_LINKS: ReadonlyArray<CtaItem> = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

const DEFAULT_CTA: CtaItem = { label: 'Free Strategy Call', href: '/contact' };

export default function SiteHeader({
  logoText = 'FactoryJet',
  logoHref = '/',
  navLinks = DEFAULT_NAV_LINKS,
  cta = DEFAULT_CTA,
  className = '',
}: SiteHeaderProps) {
  const { openModal } = useContactModal();

  return (
    <header
      className={`sticky top-0 z-40 bg-fj-cream/95 backdrop-blur-sm border-b border-fj-neutral-200 ${className}`.trim()}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo wordmark */}
          <Link
            href={logoHref}
            className="font-fj-display fj-display text-[22px] font-medium text-fj-ink md:text-[24px]"
          >
            {logoText}
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {navLinks.map((link, i) =>
              link.modal ? (
                <button
                  key={`modal-${i}`}
                  type="button"
                  onClick={() => openModal(link.region ?? 'us')}
                  className="font-fj-body text-[15px] text-fj-ink transition-colors hover:text-[#F05A28]"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href ?? `link-${i}`}
                  href={link.href ?? '#'}
                  className="font-fj-body text-[15px] text-fj-ink transition-colors hover:text-[#F05A28]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + mobile menu placeholder */}
          <div className="flex items-center gap-4">
            <a
              href="#menu"
              className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.14em] text-fj-ink md:hidden"
            >
              Menu
            </a>
            {cta.modal ? (
              <button
                type="button"
                onClick={() => openModal(cta.region ?? 'us')}
                className="hidden items-center justify-center rounded-full px-5 py-2.5 font-fj-body text-[14px] font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex"
                style={{ background: '#F05A28' }}
              >
                {cta.label}
              </button>
            ) : (
              <Link
                href={cta.href ?? '/contact'}
                className="hidden items-center justify-center rounded-full px-5 py-2.5 font-fj-body text-[14px] font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex"
                style={{ background: '#F05A28' }}
              >
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export { SiteHeader };
