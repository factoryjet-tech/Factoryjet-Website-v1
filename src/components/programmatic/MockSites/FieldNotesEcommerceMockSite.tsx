import type { MockSiteData } from './types';

/**
 * Fictional UK food brand ecommerce mock site.
 * Default for `serviceVariant: 'ecommerce'`.
 *
 * Different visual register from HartwellMockSite to demonstrate
 * the design system stretching across product categories: warmer
 * background, pill-shaped CTA, basket counter in nav.
 */
export function FieldNotesEcommerceMockSite({ data }: { data: MockSiteData }) {
  const navItems = data.navItems ?? ['Shop', 'Pantry', 'Recipes', 'Stockists'];
  const ctaLabel = data.ctaLabel ?? 'Shop the range';
  const stats = data.statStrip ?? [];

  return (
    <div className="bg-bg-warm px-6 py-8">
      {/* Mock nav */}
      <div className="mb-10 flex items-center justify-between">
        <span className="font-display text-base font-semibold uppercase tracking-[0.05em] text-black">
          {data.businessName}
        </span>
        <nav
          className="hidden gap-4 text-xs text-text-meta sm:flex"
          aria-hidden
        >
          {navItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>
        <span
          className="rounded-full bg-black px-2 py-0.5 text-[10px] font-medium text-white"
          aria-hidden
        >
          0
        </span>
      </div>

      {/* Mock hero */}
      <div className="mb-6">
        {data.subhead && (
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-text-meta">
            {data.subhead}
          </div>
        )}
        <h2 className="font-display text-2xl leading-tight text-black">
          {data.businessTagline}
        </h2>
      </div>

      {/* Mock CTA — pill-shaped, brand colour as in demoed product */}
      <button
        type="button"
        className="rounded-full bg-jet-blue px-5 py-2 text-xs font-medium text-white"
        aria-hidden
        tabIndex={-1}
      >
        {ctaLabel}
      </button>

      {/* Mock stat strip */}
      {stats.length > 0 && (
        <div className="mt-8 flex gap-6 border-t border-border-soft pt-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-lg font-semibold text-black">
                {stat.value}
              </div>
              <div className="text-[10px] text-text-meta">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
