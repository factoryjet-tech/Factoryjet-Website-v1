// Static server component. Light section, sits directly under the hero.
//
// This is the answer-first block. Somebody who searched "seo agency liverpool"
// should be able to read the first two paragraphs and know what the service is,
// what it costs them in time, and whether it is for them. Every figure carries a
// source link, because unsourced city statistics are how this page got into
// trouble the first time.

const ONS_GDP =
  'https://www.ons.gov.uk/economy/grossdomesticproductgdp/bulletins/regionaleconomicactivitybygrossdomesticproductuk/1998to2023';
const ONS_BUSINESS =
  'https://www.ons.gov.uk/businessindustryandtrade/business/activitysizeandlocation/bulletins/ukbusinessactivitysizeandlocation/2024';

type Stat = {
  value: string;
  label: string;
  sublabel: string;
  source: string;
  href: string;
};

const STATS: Stat[] = [
  {
    value: '£49.2bn',
    label: 'Liverpool City Region GDP',
    sublabel: 'At current market prices, 2023',
    source: 'ONS',
    href: ONS_GDP,
  },
  {
    value: '£31,016',
    label: 'GDP per head',
    sublabel: 'Liverpool City Region, 2023',
    source: 'ONS',
    href: ONS_GDP,
  },
  {
    value: '266,000',
    label: 'North West businesses',
    sublabel: 'VAT or PAYE registered, 2024',
    source: 'ONS',
    href: ONS_BUSINESS,
  },
  {
    value: '9.8%',
    label: 'Share of all UK businesses',
    sublabel: 'North West region, 2024',
    source: 'ONS',
    href: ONS_BUSINESS,
  },
];

const QUICK: Array<{ q: string; a: string }> = [
  {
    q: 'In one line',
    a: 'An SEO agency gets your business found by people already searching for what you sell, on Google and now inside AI answers.',
  },
  {
    q: 'What the work is',
    a: 'Fix the site so Google can read it, fix your local listings so you appear in the map, write the pages you are missing, and earn mentions that prove you are a real business.',
  },
  {
    q: 'How long it takes',
    a: 'Map results can move in weeks. Competitive Liverpool terms take months. Google says some changes show within hours and others take several months.',
  },
  {
    q: 'What it costs you in time',
    a: 'About an hour a month once running, for approving content and answering questions about your own work. Access to your site and accounts is needed at the start.',
  },
  {
    q: 'How to judge it',
    a: 'By enquiries, not by ranking screenshots. If a report never shows calls and forms, ask what actually changed on the site that month.',
  },
  {
    q: 'When to skip it',
    a: 'If nobody searches for your category yet, or you need enquiries this week. Paid search does the short window better and we will tell you so.',
  },
];

export default function DigitalLandscape() {
  return (
    <section
      id="short-answer"
      aria-labelledby="short-answer-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        {/* Asymmetric 55/45, left aligned */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[55%_1fr] lg:gap-14">
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B23E13]">
              The short answer
            </p>
            <h2
              id="short-answer-heading"
              className="mt-4 font-fj-display text-3xl font-bold leading-tight tracking-tight text-fj-ink md:text-[42px]"
            >
              What an SEO agency in Liverpool actually does
            </h2>

            <div className="mt-6 space-y-5 font-fj-body text-[17px] leading-relaxed text-fj-neutral-600">
              <p>
                An SEO agency gets your business in front of people who are
                already looking for what you sell. In Liverpool that means two
                separate fights at once: the block of three businesses shown with
                a map, which is where most local phone calls start, and the
                ordinary links underneath, which is where research traffic comes
                from. They are won in different ways, so they need different work.
              </p>
              <p>
                The work itself is unglamorous and specific. Make the site fast
                and readable on a phone. Make sure Google can crawl every page.
                Rebuild the Google Business Profile so it says what you actually
                do and where. Write a real page for every service instead of one
                page listing all eight. Then earn mentions from chambers, trade
                bodies, partners and local press, because Google treats being
                known as a ranking factor and there is no shortcut for it.
              </p>
              <p>
                It is worth doing when demand already exists. Liverpool City
                Region is a substantial economy in its own right, and the North
                West holds close to a tenth of every registered business in the
                country, so for most sectors people are already typing your
                service into a search box. If nobody is, we will say so on the
                first call rather than sell you a retainer.
              </p>
            </div>

            {/* Quick answers, high extraction value for AI tools */}
            <dl className="mt-10 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
              {QUICK.map((item) => (
                <div key={item.q} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[170px_1fr] sm:gap-6">
                  <dt className="font-fj-body text-[14px] font-semibold text-fj-ink">
                    {item.q}
                  </dt>
                  <dd className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Verified stat cards */}
          <div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {STATS.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6"
                >
                  <p
                    className="font-fj-display font-bold text-[#F05A28]"
                    style={{
                      fontSize: 'clamp(26px, 2.4vw, 34px)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-2 font-fj-body text-[13.5px] font-semibold leading-snug text-fj-ink">
                    {s.label}
                  </p>
                  <p className="mt-1 font-fj-body text-[12px] leading-relaxed text-fj-neutral-600">
                    {s.sublabel}
                  </p>
                  <a
                    href={s.href}
                    rel="noopener"
                    target="_blank"
                    className="mt-3 inline-block font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B23E13] underline underline-offset-4"
                  >
                    Source: {s.source}
                  </a>
                </li>
              ))}
            </ul>

            <blockquote className="mt-6 border-l-4 border-[#F05A28] py-2 pl-6">
              <p className="font-fj-display text-lg font-semibold leading-snug text-fj-ink md:text-xl">
                Nobody can guarantee you first place on Google. What can be
                promised is the work: the fixes shipped, the pages written, and
                the dates they land.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
