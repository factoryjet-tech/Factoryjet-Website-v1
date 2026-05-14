import Link from 'next/link';

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
 * Sticky-on-scroll deliberately omitted in this iteration. CSS-only
 * sticky is trivial to add later (`sticky top-0 z-40`) when a real page
 * consumes it.
 *
 * Pure server component.
 */

export interface SiteHeaderProps {
  logoText?: string;
  logoHref?: string;
  navLinks?: ReadonlyArray<{ label: string; href: string }>;
  cta?: { label: string; href: string };
  className?: string;
}

const DEFAULT_NAV_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

const DEFAULT_CTA = { label: 'Free Strategy Call', href: '/contact' };

export default function SiteHeader({
  logoText = 'FactoryJet',
  logoHref = '/',
  navLinks = DEFAULT_NAV_LINKS,
  cta = DEFAULT_CTA,
  className = '',
}: SiteHeaderProps) {
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-fj-body text-[15px] text-fj-ink transition-colors hover:text-[#F05A28]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile menu placeholder */}
          <div className="flex items-center gap-4">
            <a
              href="#menu"
              className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.14em] text-fj-ink md:hidden"
            >
              Menu
            </a>
            <Link
              href={cta.href}
              className="hidden items-center justify-center rounded-full px-5 py-2.5 font-fj-body text-[14px] font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex"
              style={{ background: '#F05A28' }}
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export { SiteHeader };
