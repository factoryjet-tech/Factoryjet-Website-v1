import Link from 'next/link';
import { BrowserMockup } from './BrowserMockup';

interface HeroSectionProps {
  /** Eyebrow chip text, e.g. "WEB DESIGN · LONDON". Will be rendered uppercase. */
  eyebrow: string;
  /** H1 text. Should be 6–10 words for the restraint lane. */
  headline: string;
  /** Lead paragraph. Max ~60ch reads best. */
  lead: string;
  /** Trust strip items shown below CTAs, separated by middle dots. */
  trustItems: string[];
  /** Primary CTA — filled Jet Blue. */
  primaryCta: { label: string; href: string };
  /** Secondary CTA — outlined. */
  secondaryCta: { label: string; href: string };
  /** Service variant — picks which mock site to render in the BrowserMockup. */
  serviceVariant: 'web-design'; // extend with 'ai-websites' | 'ecommerce' | etc. in future PRs
  /** City context — feeds into the eyebrow + mockup URL. */
  city: string;
}

/**
 * Programmatic page hero — Apple/Anthropic restraint lane.
 * Pure Server Component. White background, asymmetric two-column,
 * typography-driven, no motion, no gradients.
 *
 * The right column is a BrowserMockup showing a fictional business
 * website matching the service. For PR #32, only `web-design` variant
 * is implemented (Hartwell & Co. — Mayfair financial advisory).
 */
export function HeroSection({
  eyebrow,
  headline,
  lead,
  trustItems,
  primaryCta,
  secondaryCta,
  serviceVariant,
  city,
}: HeroSectionProps) {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column — content (7/12) */}
          <div className="lg:col-span-7">
            {/* Eyebrow chip */}
            <div className="mb-8 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
              {eyebrow}
            </div>

            {/* H1 — display-lg, font-display (Source Serif 4) */}
            <h1 className="font-display text-display-lg text-black">
              {headline}
            </h1>

            {/* Lead paragraph */}
            <p className="mt-6 max-w-2xl text-body-lg text-text-meta">
              {lead}
            </p>

            {/* CTA pair */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg bg-jet-blue px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#003D99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jet-blue"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-border-soft bg-white px-6 py-3.5 text-base font-medium text-black transition-colors hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jet-blue"
              >
                {secondaryCta.label}
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-body-sm text-text-meta">
              {trustItems.map((item, i) => (
                <span key={item} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden>·</span>}
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right column — BrowserMockup (5/12) */}
          <div className="lg:col-span-5">
            <BrowserMockup
              url="hartwell-co.com"
              ariaLabel={`Example ${serviceVariant} project for a ${city} business`}
            >
              {serviceVariant === 'web-design' && <HartwellMockSite />}
            </BrowserMockup>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Fictional London Mayfair financial advisory mock site.
 * Used inside the BrowserMockup on web-design service pages.
 * Pure typography + Jet Blue CTA. The brand color appears here
 * (inside the demonstrated product), not on the page chrome.
 */
function HartwellMockSite() {
  return (
    <div className="px-6 py-8">
      {/* Mock nav */}
      <div className="mb-10 flex items-center justify-between">
        <span className="font-display text-base font-semibold text-black">
          Hartwell &amp; Co.
        </span>
        <nav
          className="hidden gap-5 text-xs text-text-meta sm:flex"
          aria-hidden
        >
          <span>About</span>
          <span>Services</span>
          <span>Insights</span>
          <span>Contact</span>
        </nav>
      </div>

      {/* Mock hero */}
      <div className="mb-6">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-text-meta">
          Mayfair · Est. 1987
        </div>
        <h2 className="font-display text-2xl leading-tight text-black">
          Wealth management,
          <br />
          considered.
        </h2>
        <p className="mt-3 text-xs text-text-meta">
          Discretionary advisory for founders, families,
          <br className="hidden sm:block" />
          and operating partners.
        </p>
      </div>

      {/* Mock CTA — this is where Jet Blue appears (in the demoed product) */}
      <button
        type="button"
        className="rounded-md bg-jet-blue px-4 py-2 text-xs font-medium text-white"
        aria-hidden
        tabIndex={-1}
      >
        Book an introduction
      </button>

      {/* Mock stat strip */}
      <div className="mt-8 flex gap-6 border-t border-border-soft pt-6">
        <div>
          <div className="font-display text-lg font-semibold text-black">
            £840m
          </div>
          <div className="text-[10px] text-text-meta">AUM</div>
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-black">
            38yrs
          </div>
          <div className="text-[10px] text-text-meta">heritage</div>
        </div>
      </div>
    </div>
  );
}
