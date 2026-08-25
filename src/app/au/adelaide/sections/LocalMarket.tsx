import { CITATIONS } from '../pageData';

/**
 * The Adelaide market section. Distinct from the Brisbane and Melbourne equivalents: this
 * one is about the specific industries South Australia has concentrated in, because that
 * is what actually changes the work here.
 */

const SECTORS: Array<{ name: string; note: string }> = [
  {
    name: 'Defence and space',
    note: 'Osborne, Edinburgh and the Lot Fourteen precinct. These buyers are usually B2B with long procurement cycles, and the website is read by a committee rather than a person. Depth, precision and evidence beat persuasion.',
  },
  {
    name: 'Wine and food producers',
    note: 'The Barossa, McLaren Vale and the Adelaide Hills. Split personality: a trade audience that wants specifications and a consumer audience that wants a cellar door visit. Those two need different pages, not one compromise page.',
  },
  {
    name: 'Health and medical research',
    note: 'The North Terrace precinct and clinics across the suburbs. Maps and reviews carry most of the weight, and proximity to the searcher does much of the ranking for you.',
  },
  {
    name: 'Advanced manufacturing',
    note: 'Across the northern suburbs. Frequently selling nationally rather than locally, which means the local listing matters less and the depth of the service pages matters more.',
  },
  {
    name: 'Trades and construction',
    note: 'Metro-wide. Phone-first buyers searching from a job site, so a tappable number in the first screen matters more than anything else on the page.',
  },
  {
    name: 'Professional services',
    note: 'The CBD, Norwood and Unley. Longer decision cycles and buyers who read several pages before contacting anyone, so content depth matters more than speed of contact.',
  },
];

export default function LocalMarket() {
  const abs = CITATIONS[0];

  return (
    <section
      id="adelaide-market"
      aria-label="The Adelaide market"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          The local market
        </p>

        <h2 className="mt-4 max-w-[780px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          South Australia sells differently, so the site has to work differently
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[55%_1fr] lg:gap-16">
          <div>
            <p className="font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
              Australia held 2,814,778 actively trading businesses at 30 June 2026, up 85,130
              or 3.1% across the year, with every state and territory growing.
              <sup className="ml-0.5 font-fj-mono text-[11px] text-[#B23E13]">[1]</sup> South
              Australia is a smaller share of that than its population would suggest, and the
              businesses here are weighted towards sectors that sell to other businesses or to
              government rather than straight to consumers.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              That changes what a good Adelaide website looks like. A defence supplier and a
              cellar door both need a site, and almost nothing about the two should be the
              same. The supplier is read by a procurement team checking capability,
              certifications and track record, often months before anyone makes contact. The
              cellar door needs to be found on a phone by someone deciding where to drive this
              afternoon. Selling both a template is how agencies produce sites that technically
              work and commercially do not.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              The practical upshot for B2B and government-adjacent businesses is that the local
              listing matters much less than you would think, and the depth of your service
              pages matters much more. We have seen Adelaide manufacturers spend months on a
              Google Business Profile that was never going to bring them work, because their
              buyers were not searching on a map. Getting that diagnosis right at the start
              saves more money than any efficiency later in the build.
            </p>

            <h3 className="mt-10 font-fj-display text-[20px] font-bold text-fj-ink md:text-[22px]">
              The one thing almost every Adelaide site gets wrong
            </h3>
            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              Trying to speak to both audiences on the same page. If you sell to trade and to
              the public, you need two paths from the home page, each with its own language,
              its own proof and its own way of making contact. It is more work than one page
              and it converts far better than a page hedging between the two.
            </p>
          </div>

          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
              <h3 className="font-fj-display text-[18px] font-bold text-fj-ink">
                Who we build for in Adelaide
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
