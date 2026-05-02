import Link from 'next/link';
import { Fragment } from 'react';
import { BrowserMockup } from './BrowserMockup';
import {
  getMockSiteComponent,
  type MockSiteData,
  type ServiceVariant,
} from './MockSites';
import { RevealOnScroll } from './RevealOnScroll';

export interface HeroMockup {
  /** Picks which mock site to render inside the BrowserMockup chrome. */
  serviceVariant: ServiceVariant;
  /** e.g. "Hartwell & Co.", varies per city + service. */
  businessName: string;
  /** e.g. "Wealth management, considered." */
  businessTagline: string;
  /** Domain shown in the mock browser address bar (e.g. "hartwell-co.com") */
  url: string;
  /** Mock site rendering data (subhead, CTA label, nav, stats). */
  mockSiteData: Omit<MockSiteData, 'businessName' | 'businessTagline'>;
  /** Rotation in degrees for staggered visual feel: -2 to +2. */
  rotation: number;
}

export interface HeroSectionProps {
  eyebrow: string;
  /** 6–9 words. Use *asterisks* to mark italic word for serif emphasis. */
  headline: string;
  lead: string;
  trustItems: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  /** 4–6 fictional businesses arranged in mosaic. */
  mockups: HeroMockup[];
  /** For mockup name variation in copy. */
  cityName: string;
}

/**
 * Hero v2 — `hero_v2_asset_mosaic` per spec §5.1.
 *
 * Asymmetric 7/12 + 5/12 grid with the right column rendering 4–6
 * service-variant mockups in an overlapping mosaic. Each mockup
 * is a smaller-scale <BrowserMockup> showing a fictional business
 * for the matching service variant.
 *
 * Headline parses *word* asterisk markers and renders the wrapped
 * span in font-display italic — a lightweight serif emphasis trick
 * borrowed from editorial agency homepages.
 *
 * Entry choreography per spec §4: each block fades up in turn,
 * starting at 0s and stepping ~150ms apart. Honours
 * prefers-reduced-motion via the RevealOnScroll wrapper.
 */
export function HeroSection({
  eyebrow,
  headline,
  lead,
  trustItems,
  primaryCta,
  secondaryCta,
  mockups,
  cityName,
}: HeroSectionProps) {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column — content (7/12) */}
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <div className="mb-8 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
                {eyebrow}
              </div>
            </RevealOnScroll>

            {/* H1 — display-lg, font-display (Source Serif 4)
             *      *word* markers render the wrapped word in italic. */}
            <RevealOnScroll delay={0.15}>
              <h1 className="font-display text-display-lg text-black">
                <HeadlineWithEmphasis text={headline} />
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="mt-6 max-w-2xl text-body-lg text-text-meta">
                {lead}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.45}>
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
            </RevealOnScroll>

            <RevealOnScroll delay={0.5}>
              <div
                className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-body-sm text-text-meta"
                aria-label={`Trust signals for FactoryJet's ${cityName} work`}
              >
                {trustItems.map((item, i) => (
                  <span key={item} className="flex items-center gap-3">
                    {i > 0 && <span aria-hidden>·</span>}
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right column — mockup mosaic (5/12) */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={0.6}>
              <MockupMosaic mockups={mockups} cityName={cityName} />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Headline emphasis parser                                          */
/*  *word* → <em className="font-display italic">word</em>            */
/* ------------------------------------------------------------------ */

function HeadlineWithEmphasis({ text }: { text: string }) {
  // Split on *…* groups but keep the markers in the result so we
  // can identify which segments to italicise.
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          return (
            <em key={i} className="font-display italic">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Mockup mosaic                                                     */
/*                                                                    */
/*  Stacks 4–6 small BrowserMockups in a layered grid using           */
/*  staggered translation + per-mockup rotation. CSS-only —           */
/*  no client JS for the layout itself; RevealOnScroll handles        */
/*  the entry animation around it.                                    */
/* ------------------------------------------------------------------ */

function MockupMosaic({
  mockups,
  cityName,
}: {
  mockups: HeroMockup[];
  cityName: string;
}) {
  // Geometry: stack mockups in a 2-col grid on desktop, layered with
  // slight overlaps. Each tile is ~80% width, rotated, and offset.
  // We use CSS grid for the base layout and per-mockup transform for
  // the artistic stagger.
  return (
    <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
      {mockups.map((mockup, i) => {
        const MockSite = getMockSiteComponent(mockup.serviceVariant);
        // Vertical offset: every other mockup nudged down for parallax feel.
        const translateY = i % 2 === 1 ? 'translate-y-6' : '';

        return (
          <div
            key={`${mockup.url}-${i}`}
            className={`origin-center transition-transform ${translateY}`}
            style={{ transform: `rotate(${mockup.rotation}deg)` }}
          >
            <BrowserMockup
              url={mockup.url}
              ariaLabel={`Example ${mockup.serviceVariant} project for a ${cityName} business — ${mockup.businessName}`}
            >
              <MockSite
                data={{
                  businessName: mockup.businessName,
                  businessTagline: mockup.businessTagline,
                  ...mockup.mockSiteData,
                }}
              />
            </BrowserMockup>
          </div>
        );
      })}
    </div>
  );
}
