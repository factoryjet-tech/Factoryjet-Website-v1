import Link from 'next/link';
import AuModalButton from './AuModalButton';

/**
 * Header for the /au/* SUB-PAGES (city pages and the SEO hub).
 *
 * WHY THIS EXISTS RATHER THAN REUSING ./Header.tsx (2026-08-25).
 * The /au home header is styled entirely by au-home.css, whose rules are written as
 * `.auh .auh-header{...}`, so they need BOTH that stylesheet imported AND a `.auh`
 * ancestor. The sub-pages had neither, so the header rendered as an unstyled 1,366px
 * block that pushed the whole page below the fold. The pages were live in that state.
 *
 * Neither obvious repair works:
 *   - Wrapping just the header in `.auh` restores its styling but confines
 *     `position: sticky` to a wrapper only as tall as the header, so it stops sticking.
 *   - Wrapping the whole page in `.auh` brings 194 descendant rules with it, and
 *     `.auh h2` at specificity (0,1,1) beats a Tailwind `text-[clamp(...)]` utility at
 *     (0,1,0). Every heading on every sub-page would be silently resized.
 *
 * So this is a self-contained header: Tailwind only, no au-home.css, no `.auh` ancestor,
 * nothing to import in the wrong order. ./Header.tsx is untouched and still serves /au.
 */

const WA_HREF =
  'https://wa.me/919699977699?text=Hi%20FactoryJet%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20Australian%20business.';

const NAV = [
  { label: 'Brisbane', href: '/au/brisbane' },
  { label: 'Melbourne', href: '/au/melbourne' },
  { label: 'Adelaide', href: '/au/adelaide' },
  { label: 'Canberra', href: '/au/canberra' },
  { label: 'SEO', href: '/au/seo' },
];

export default function AuSubpageHeader({ current = '' }: { current?: string }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-fj-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-4 px-6 py-3 sm:px-8">
        <Link
          href="/au"
          className="font-fj-display text-[17px] font-extrabold tracking-[-0.02em] text-fj-ink"
        >
          FactoryJet{' '}
          <span className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
            AU
          </span>
        </Link>

        {/* Horizontal scroll rather than a disclosure menu: no JavaScript, no <details>,
            and nothing that can expand to full height if a stylesheet fails to load. */}
        <nav
          aria-label="Australian pages"
          className="hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto md:flex"
        >
          {NAV.map((n) => {
            const active = n.href === current;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? 'page' : undefined}
                className={
                  'whitespace-nowrap rounded-full px-3 py-1.5 font-fj-body text-[14px] transition-colors ' +
                  (active
                    ? 'bg-fj-cream font-semibold text-[#B23E13]'
                    : 'font-medium text-fj-neutral-600 hover:text-fj-ink')
                }
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-3">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-fj-body text-[14px] font-medium text-fj-neutral-600 hover:text-fj-ink sm:inline"
          >
            WhatsApp
          </a>
          {/* 15px would fail contrast in white on #F05A28, so small screens get the
              dark-orange token and the large pill only appears from sm up. */}
          <AuModalButton
            ctaId="au_subpage_header_quote"
            className="inline-flex items-center justify-center rounded-full bg-[#F05A28] px-4 py-2 font-fj-body text-[15px] font-bold text-white transition-colors hover:bg-[#D8441A]"
          >
            Free review
          </AuModalButton>
        </div>
      </div>

      {/* Mobile nav: same links, still no disclosure widget. */}
      <nav
        aria-label="Australian pages"
        className="flex items-center gap-1 overflow-x-auto border-t border-fj-neutral-200 px-6 py-2 md:hidden"
      >
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            aria-current={n.href === current ? 'page' : undefined}
            className={
              'whitespace-nowrap rounded-full px-3 py-1 font-fj-body text-[13.5px] ' +
              (n.href === current
                ? 'bg-fj-cream font-semibold text-[#B23E13]'
                : 'font-medium text-fj-neutral-600')
            }
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
