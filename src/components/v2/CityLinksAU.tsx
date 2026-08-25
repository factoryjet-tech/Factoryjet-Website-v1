import React from 'react';
import Link from 'next/link';

/**
 * Cross-links between the Australian city pages and the AU hub.
 *
 * NEW component rather than an edit to CityLinksUK, which stays untouched.
 *
 * Only cities with a real page are listed. The AU build deliberately covers Brisbane,
 * Melbourne, Adelaide and Canberra and NOT Sydney, Perth or the Gold Coast: the August
 * 2026 measurement put the weakest page-1 incumbent in those three markets at 101, 92 and
 * 167 referring domains against our 28 earned, which is out of reach this year. Adding
 * pages for them would be building pages that cannot rank. When link authority catches
 * up, add them here and to the AU footer at the same time.
 */

export interface CityLinksAUProps {
  currentCity?: string;
  className?: string;
}

const AU_CITIES = [
  { slug: 'brisbane', label: 'Brisbane', blurb: 'Queensland' },
  { slug: 'melbourne', label: 'Melbourne', blurb: 'Victoria' },
  { slug: 'adelaide', label: 'Adelaide', blurb: 'South Australia' },
  { slug: 'canberra', label: 'Canberra', blurb: 'ACT' },
] as const;

export default function CityLinksAU({ currentCity = '', className = '' }: CityLinksAUProps) {
  const others = AU_CITIES.filter((c) => c.slug !== currentCity.toLowerCase());

  return (
    <section
      aria-label="FactoryJet across Australia"
      className={`w-full bg-white ${className}`}
      style={{ borderTop: '1px solid #E7DED6' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-14 sm:px-8">
        <p className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
          Across Australia
        </p>
        <h2 className="mt-3 font-fj-display text-[clamp(20px,2.4vw,26px)] font-bold tracking-[-0.02em] text-fj-ink">
          We work with businesses in these cities
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={`/au/${c.slug}`}
              className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 transition-colors hover:border-[#B23E13]"
            >
              <span className="font-fj-display text-[16px] font-bold text-fj-ink">
                {c.label}
              </span>
              <span className="mt-1 block font-fj-body text-[13px] text-fj-neutral-600">
                {c.blurb}
              </span>
              <span className="mt-3 block font-fj-body text-[13.5px] font-semibold text-[#B23E13]">
                Web design and SEO
              </span>
            </Link>
          ))}

          <Link
            href="/au"
            className="rounded-2xl border border-fj-neutral-200 bg-white p-5 transition-colors hover:border-[#B23E13]"
          >
            <span className="font-fj-display text-[16px] font-bold text-fj-ink">
              Australia
            </span>
            <span className="mt-1 block font-fj-body text-[13px] text-fj-neutral-600">
              National
            </span>
            <span className="mt-3 block font-fj-body text-[13.5px] font-semibold text-[#B23E13]">
              Websites and e-commerce
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
