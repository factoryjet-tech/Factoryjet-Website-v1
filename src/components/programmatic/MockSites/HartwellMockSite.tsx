import type { MockSiteData } from './types';

/**
 * Fictional London Mayfair financial advisory mock site.
 * Default for `serviceVariant: 'web-design'`.
 *
 * Pure typography + Jet Blue CTA. The brand color appears here
 * (inside the demonstrated product), not on the page chrome.
 */
export function HartwellMockSite({ data }: { data: MockSiteData }) {
  const navItems = data.navItems ?? ['About', 'Services', 'Insights', 'Contact'];
  const ctaLabel = data.ctaLabel ?? 'Book an introduction';
  const stats = data.statStrip ?? [];

  return (
    <div className="px-6 py-8">
      {/* Mock nav */}
      <div className="mb-10 flex items-center justify-between">
        <span className="font-display text-base font-semibold text-black">
          {data.businessName}
        </span>
        <nav
          className="hidden gap-5 text-xs text-text-meta sm:flex"
          aria-hidden
        >
          {navItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>
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

      {/* Mock CTA — this is where Jet Blue appears (in the demoed product) */}
      <button
        type="button"
        className="rounded-md bg-jet-blue px-4 py-2 text-xs font-medium text-white"
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
