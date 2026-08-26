import { CITATIONS } from '../pageData';

/**
 * The Brisbane market section. This is the part of the page that cannot be templated
 * across cities, and it is the reason this page is not a doorway page: the numbers, the
 * industries and the search behaviour described here are specific to South East
 * Queensland.
 *
 * The ABS figures are cited inline and listed in full in sections/Sources.tsx. They were
 * fetch-verified on 2026-08-25, see pageData.ts.
 */

const SECTORS: Array<{ name: string; note: string }> = [
  {
    name: 'Trades and construction',
    note: 'The largest source of local search demand in Brisbane. These buyers search on a phone, often from the job address, and they call rather than fill in a form. The site has to load on mobile data and show a tappable number in the first screen.',
  },
  {
    name: 'Professional services',
    note: 'Accountants, lawyers, brokers and consultants across the CBD and Newstead. Longer decision cycles, more research, and buyers who read several pages before making contact. Depth of content matters more here than speed of contact.',
  },
  {
    name: 'Health and allied health',
    note: 'Clinics and practices through Chermside, Mount Gravatt and the inner south. Heavily driven by Google Maps and reviews, where proximity to the searcher does much of the ranking work.',
  },
  {
    name: 'Manufacturing and industrial',
    note: 'Businesses out through Ipswich, Logan and the Australia TradeCoast area. Often selling B2B with a long sales cycle, where the website has to survive scrutiny from a procurement team rather than convert on the spot.',
  },
  {
    name: 'Independent retail and hospitality',
    note: 'Fortitude Valley, South Brisbane and West End. Discovery happens in Maps and social rather than through classic search, so the local listing usually deserves more attention than the website does.',
  },
];

export default function LocalMarket() {
  const abs = CITATIONS[0];

  return (
    <section
      id="brisbane-market"
      aria-label="The Brisbane market"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          The local market
        </p>

        <h2 className="mt-4 max-w-[760px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          What competing for search in Brisbane actually looks like
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[55%_1fr] lg:gap-16">
          <div>
            <p className="font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
              Queensland gained 19,244 businesses across 2025-26, part of a national count of
              2,814,778 actively trading businesses at 30 June 2026.
              <sup className="ml-0.5 font-fj-mono text-[11px] text-[#B23E13]">[1]</sup> That
              matters for a reason that is easy to miss: the same ABS release puts the national
              entry rate at 16.9% and the exit rate at 13.8%. Roughly one in six businesses
              around you is new, and roughly one in seven will be gone within the year.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              For search, that churn cuts both ways. New competitors appear constantly, which
              is why a site left alone for three years slides. But it also means a good part of
              the page-one field in Brisbane is made up of businesses that have not been
              building authority for long. When we measured the Brisbane results in August
              2026, the weakest business holding a first-page position for the main web design
              term had links from only 18 other websites. That is a genuinely reachable bar,
              and it is not true in Sydney or Perth, where the same measurement returned 101
              and 92.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              The other thing worth knowing is what Brisbane search results look like right
              now. Across the Australian terms we measured, AI Overviews, the summary Google
              sometimes places above the normal results, appeared on a small minority of web
              design and local SEO queries. On the equivalent American terms they appear on
              most. In plain terms: in Brisbane, ranking in the ordinary results still earns
              you the click. That is a real and temporary advantage.
            </p>

            <h3 className="mt-10 font-fj-display text-[20px] font-bold text-fj-ink md:text-[22px]">
              What this changes about the work
            </h3>
            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              Because the incumbents are beatable but not weak, the winning approach in
              Brisbane is not volume. Publishing forty thin suburb pages will not outrank a
              competitor with a decade of real links. What does work is a small number of
              genuinely strong pages, a technically clean site, and a local listing that is
              more complete and better maintained than anyone else in your category. That is a
              slower story to tell than a content package, and it is the one that holds up.
            </p>
          </div>

          <aside>
            <figure className="m-0 mb-5 overflow-hidden rounded-2xl border border-fj-neutral-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/au/brisbane/brisbane-interior-768.webp"
                srcSet="/images/au/brisbane/brisbane-interior-768.webp 768w, /images/au/brisbane/brisbane-interior-1200.webp 1200w"
                sizes="(max-width: 1023px) 92vw, 440px"
                alt="A renovated Queensland commercial interior with brick, timber and louvre windows"
                width={1200}
                height={800}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </figure>

            <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
              <h3 className="font-fj-display text-[18px] font-bold text-fj-ink">
                Who we build for in Brisbane
              </h3>
              <dl className="mt-5 space-y-5">
                {SECTORS.map((s) => (
                  <div key={s.name}>
                    <dt className="font-fj-display text-[15px] font-bold text-fj-ink">
                      {s.name}
                    </dt>
                    <dd className="mt-1.5 font-fj-body text-[14px] leading-[1.65] text-fj-neutral-600">
                      {s.note}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-fj-neutral-200 pt-4 font-fj-body text-[13px] leading-[1.6] text-fj-neutral-600">
                Source [1]: {abs.source}, {abs.title}. Figures read from the release dated
                18 August 2026.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
