// Static server component. Local context for Liverpool search, plus the sources.
//
// Every figure below was fetched and read before it was written here. If you
// change a number, open the source URL and check it first. Unsourced numbers do
// not belong on this page.

type Source = {
  id: string;
  label: string;
  publisher: string;
  detail: string;
  url: string;
};

const SOURCES: Source[] = [
  {
    id: 'ons-gdp',
    label: 'Regional economic activity by gross domestic product, UK: 1998 to 2023',
    publisher: 'Office for National Statistics',
    detail:
      'Table 2 ranks combined authorities by GDP per head for 2023. Liverpool City Region is listed at £31,016 GDP per head and £49,196 million total GDP at current market prices.',
    url: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/bulletins/regionaleconomicactivitybygrossdomesticproductuk/1998to2023',
  },
  {
    id: 'ons-business',
    label: 'UK business: activity, size and location: 2024',
    publisher: 'Office for National Statistics',
    detail:
      'Table 4 counts VAT and PAYE registered businesses by region. The North West held 266,000 of them in 2024, which is 9.8% of the UK total.',
    url: 'https://www.ons.gov.uk/businessindustryandtrade/business/activitysizeandlocation/bulletins/ukbusinessactivitysizeandlocation/2024',
  },
  {
    id: 'google-local',
    label: 'Improve your local ranking on Google',
    publisher: 'Google Business Profile Help',
    detail:
      'Google names the three local ranking factors directly: relevance, distance and prominence. This is the primary source for how the map results are ordered.',
    url: 'https://support.google.com/business/answer/7091',
  },
  {
    id: 'google-seo',
    label: 'Do you need an SEO?',
    publisher: 'Google Search Central',
    detail:
      'Google’s own guidance on hiring an SEO. It states that no one can guarantee a number one ranking, and advises granting read access to Search Console before write access.',
    url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
  },
  {
    id: 'google-starter',
    label: 'SEO Starter Guide',
    publisher: 'Google Search Central',
    detail:
      'The source for how long changes take. Google writes that some changes might take effect in a few hours and others could take several months, and advises waiting a few weeks before judging one.',
    url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
  },
];

const DISTRICTS: Array<{ name: string; note: string }> = [
  {
    name: 'Commercial district and Old Hall Street',
    note: 'Law, accountancy, insurance and recruitment. High value searches, small monthly volume, long research cycles.',
  },
  {
    name: 'Baltic Triangle',
    note: 'Creative studios, software and independent food and drink. Buyers search by discipline rather than by city.',
  },
  {
    name: 'Knowledge Quarter',
    note: 'Life sciences, universities and research spin-outs. Search intent is technical and often national or global.',
  },
  {
    name: 'The docks and the Freeport zone',
    note: 'Freight, warehousing, customs and port services. Very low search volume per term, very high value per enquiry.',
  },
  {
    name: 'Waterfront, Royal Albert Dock and Bramley Moore Dock',
    note: 'Hospitality, venues, tourism and events. Heavy mobile, heavy map pack, sharp seasonal and matchday spikes.',
  },
  {
    name: 'Wirral, Sefton, Knowsley, St Helens and Halton',
    note: 'Trades, healthcare, retail and local services. Distance from the searcher decides the map results here more than anywhere.',
  },
];

const LOCAL_FACTS: string[] = [
  'Searches made in the city centre and searches made in Wirral or St Helens return different businesses, because Google weighs how far you are from the searcher.',
  'Most Liverpool service businesses compete for two different results at once: the block of three businesses shown with a map, and the ordinary links below it.',
  'The map results move faster than ordinary results, because Google Business Profile changes get picked up quickly.',
  'City terms such as "seo agency liverpool" are held by established sites, so those take months rather than weeks.',
  'Matchday, cruise season and event weekends move hospitality and parking searches sharply, which is worth planning content around.',
  'A large share of Liverpool searches happen on a phone, so a page that is fine on a laptop and slow on 4G is still a failing page.',
];

export default function LiverpoolMarket() {
  return (
    <section
      id="liverpool-market"
      aria-labelledby="liverpool-market-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[55%_1fr] lg:gap-16">
          {/* Prose column */}
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B23E13]">
              Local specifics
            </p>
            <h2
              id="liverpool-market-heading"
              className="mt-4 font-fj-display text-3xl font-bold leading-tight tracking-tight text-fj-ink md:text-[42px]"
            >
              What is different about search in Liverpool
            </h2>

            <div className="mt-6 space-y-5 font-fj-body text-[17px] leading-relaxed text-fj-neutral-600">
              <p>
                Liverpool City Region is a real economy of scale, not a satellite
                of Manchester. The Office for National Statistics put its 2023
                output at{' '}
                <a
                  href={SOURCES[0].url}
                  rel="noopener"
                  target="_blank"
                  className="font-medium text-[#B23E13] underline underline-offset-4"
                >
                  £49,196 million of GDP, or £31,016 per head
                </a>
                . The wider North West held around 266,000 VAT or PAYE registered
                businesses in 2024, which is{' '}
                <a
                  href={SOURCES[1].url}
                  rel="noopener"
                  target="_blank"
                  className="font-medium text-[#B23E13] underline underline-offset-4"
                >
                  9.8% of every registered business in the UK
                </a>
                . That is the pool you are competing in.
              </p>
              <p>
                The city is also unusually clustered. A freight operator on the
                dock road and a law firm on Old Hall Street are three miles apart
                and effectively in two different search markets. One is chasing a
                handful of very high value national terms. The other is fighting
                for a map position that changes depending on which side of the
                Mersey the searcher is standing.
              </p>
              <p>
                That is why we set the target area around your customers rather
                than your office, and why a page per district is usually wrong.
                Six honest area pages beat sixty thin ones, and Google has been
                demoting the thin version for years.
              </p>
            </div>

            <h3 className="mt-12 font-fj-display text-xl font-bold text-fj-ink md:text-2xl">
              Six things that decide Liverpool results
            </h3>
            <ul className="mt-5 space-y-3">
              {LOCAL_FACTS.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#F05A28]"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Districts column */}
          <div>
            <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 md:p-8">
              <h3 className="font-fj-display text-xl font-bold text-fj-ink">
                How search behaves by district
              </h3>
              <ul className="mt-6 space-y-5">
                {DISTRICTS.map((d) => (
                  <li key={d.name}>
                    <p className="font-fj-body text-[15px] font-semibold text-fj-ink">
                      {d.name}
                    </p>
                    <p className="mt-1 font-fj-body text-[14px] leading-relaxed text-fj-neutral-600">
                      {d.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-16 border-t border-fj-neutral-200 pt-10">
          <h3 className="font-fj-display text-xl font-bold text-fj-ink md:text-2xl">
            Sources
          </h3>
          <p className="mt-2 max-w-2xl font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
            Every number and rule quoted on this page comes from one of these five
            documents. They are all free to read, so please check them.
          </p>
          <ol className="mt-6 space-y-5">
            {SOURCES.map((s, i) => (
              <li key={s.id} className="flex gap-4">
                <span className="font-fj-mono text-sm font-semibold text-fj-neutral-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <a
                    href={s.url}
                    rel="noopener"
                    target="_blank"
                    className="font-fj-body text-[15px] font-semibold text-[#B23E13] underline underline-offset-4"
                  >
                    {s.label}
                  </a>
                  <span className="font-fj-body text-[15px] text-fj-neutral-600">
                    {' '}
                    ({s.publisher})
                  </span>
                  <p className="mt-1 font-fj-body text-[14px] leading-relaxed text-fj-neutral-600">
                    {s.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
