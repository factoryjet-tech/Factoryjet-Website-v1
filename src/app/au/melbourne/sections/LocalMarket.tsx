import { CITATIONS } from '../pageData';

/**
 * The Melbourne market section. Deliberately different content from the Brisbane page:
 * this one is about the shape of the Melbourne search results, because the measurement
 * turned up something specific and useful there (exact-match domain micro-sites holding
 * page-one positions), and because Melbourne's People-Also-Ask data is dominated by
 * vendor-selection questions rather than cost questions.
 */

const SECTORS: Array<{ name: string; note: string }> = [
  {
    name: 'Professional services',
    note: 'Accountants, lawyers, brokers and consultancies across the CBD, Southbank and South Yarra. Long decision cycles and buyers who read several pages before making contact, so depth of content beats speed of contact here.',
  },
  {
    name: 'Health and allied health',
    note: 'Practices through Richmond, Box Hill and the eastern suburbs. Driven heavily by Maps and reviews, where how close the searcher is does much of the ranking work for you.',
  },
  {
    name: 'Manufacturing and trade supply',
    note: 'The northern and western corridors, Dandenong and out towards Geelong. Often B2B with procurement teams involved, so the site has to survive scrutiny rather than convert on the spot.',
  },
  {
    name: 'Creative and studio businesses',
    note: 'Fitzroy, Collingwood and Brunswick. Usually strong on brand and weak on technical foundations, which is a pleasant problem: the fixes are quick and the payoff is immediate.',
  },
  {
    name: 'Trades and construction',
    note: 'Across the whole metro area. Phone-first buyers searching from a job address, so a tappable number in the first screen matters more than anything else on the page.',
  },
];

export default function LocalMarket() {
  const abs = CITATIONS[0];

  return (
    <section
      id="melbourne-market"
      aria-label="The Melbourne market"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          The local market
        </p>

        <h2 className="mt-4 max-w-[780px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          What the Melbourne search results actually look like
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[55%_1fr] lg:gap-16">
          <div>
            <p className="font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
              Victoria gained 19,581 businesses across 2025-26, the second largest net increase
              of any state or territory, within a national total of 2,814,778 actively trading
              businesses at 30 June 2026.
              <sup className="ml-0.5 font-fj-mono text-[11px] text-[#B23E13]">[1]</sup> More
              competitors means more people bidding for the same attention, and it is part of
              why Melbourne is a harder search market than Brisbane or Adelaide.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              When we measured the Melbourne results in August 2026, the first page for the
              main web design term was a mix we did not see elsewhere. Alongside large
              established agencies with links from over a thousand other websites sat small
              operators with almost none, holding position through exact-match domain names.
              One page-one result for the web design term had links from just 14 other
              websites. The typical page-one site had links from around 573.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              That gap is worth understanding before you buy anything. It means reaching page
              one in Melbourne is realistic, because the weakest position is genuinely
              reachable. It also means reaching the top three is not, at least not this year,
              because those positions belong to sites with a decade of accumulated links. Any
              agency promising you the top spot in Melbourne within months is either not
              measuring, or is counting on you not to.
            </p>

            <h3 className="mt-10 font-fj-display text-[20px] font-bold text-fj-ink md:text-[22px]">
              One advantage Melbourne has right now
            </h3>
            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              Across every Melbourne web design and local SEO term we measured, Google did not
              show an AI Overview, the summary box that increasingly sits above the ordinary
              results and answers the question before anyone clicks. On the equivalent
              American searches it appears on most. For now, an organic position in Melbourne
              still earns the visit. That is a temporary state of affairs, and it is a reason
              to do this work now rather than in two years.
            </p>
          </div>

          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
              <h3 className="font-fj-display text-[18px] font-bold text-fj-ink">
                Who we build for in Melbourne
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
