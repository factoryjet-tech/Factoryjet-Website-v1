/*
 * SeoManchester: the "seo agency manchester" service block.
 *
 * Pure server component: no "use client", no GSAP, no state. Everything here is
 * in the static HTML, so GPTBot, ClaudeBot and PerplexityBot read every line
 * without running JavaScript.
 *
 * Deliberately list-heavy. A buyer comparing Manchester SEO agencies wants to
 * know what lands on their site, what does not, and in what order. Prose hides
 * that. Lists do not.
 *
 * Every external link below was fetch-verified (HTTP 200) on 2026-08-25.
 * Do not add a citation here without curling it first.
 */

const CITE_LINK =
  'font-fj-body text-[#B23E13] underline underline-offset-2 hover:no-underline';

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
      {items.map((t) => (
        <li key={t} className="flex gap-2.5">
          <span
            aria-hidden="true"
            className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#F05A28]"
          />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered steps stay single column: the order is the information. */
function Steps({ items }: { items: string[] }) {
  return (
    <ol className="mt-4 grid gap-y-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
      {items.map((t, i) => (
        <li key={t} className="flex gap-3">
          <span
            aria-hidden="true"
            className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-fj-neutral-100 font-fj-mono text-xs font-semibold text-[#B23E13]"
          >
            {i + 1}
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ol>
  );
}

function Block({
  id,
  title,
  lead,
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-8">
      <h3 className="font-fj-display text-xl font-bold text-fj-ink md:text-2xl">{title}</h3>
      {lead ? (
        <p className="mt-2 max-w-2xl font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
          {lead}
        </p>
      ) : null}
      {children}
    </div>
  );
}

const INCLUDED = [
  'A full technical crawl of every live page',
  'Speed, mobile and Core Web Vitals fixes',
  'A keyword map for Manchester and Greater Manchester',
  'Rewritten page titles and meta descriptions',
  'One properly built page per money term',
  'Google Business Profile clean-up and weekly posts',
  'Matching name, address and phone across directories',
  'LocalBusiness and FAQPage structured data',
  'Internal links from strong pages to weak ones',
  'A monthly written report in plain English',
  'Rank tracking on Google and on AI answers',
  'A named engineer you can email directly',
];

const NOT_INCLUDED = [
  'Bought links or private blog networks',
  'Fake reviews, or filtering who gets asked',
  'Doorway pages for towns you do not serve',
  'Locked dashboards you cannot export from',
  'Long tie-in contracts with an exit fee',
  'Guaranteed positions, which nobody can honestly promise',
];

const NINETY_DAYS = [
  'Weeks 1 to 2: audit, baseline numbers, agreed target list',
  'Weeks 3 to 4: technical and speed fixes go live',
  'Weeks 5 to 6: page rewrites and new service pages ship',
  'Weeks 7 to 8: Google Business Profile and citations tidied',
  'Weeks 9 to 10: content for the questions buyers actually type',
  'Weeks 11 to 12: first full report, then the next quarter is planned',
];

const LOCAL_SIGNALS = [
  'How close the searcher is to your address',
  'Your Google Business Profile category and services list',
  'Review volume, how recent they are, and your replies',
  'Name, address and phone matching everywhere online',
  'A real page for each Manchester area you serve',
  'Photos and opening hours kept current',
  'Mentions on Manchester news and trade sites',
  'LocalBusiness structured data on the page itself',
  'Page speed on a mid-range Android phone',
];

const SUITS = [
  'Firms with a Manchester address or a named service area',
  'Businesses where one new client pays for months of work',
  'Teams who can answer real questions about their trade',
  'Sites that already win a few enquiries a month',
  'Owners who want to keep the code and the data',
];

const DOES_NOT_SUIT = [
  'Anyone who needs leads inside a fortnight',
  'Businesses that cannot say who they sell to',
  'Sites still carrying a penalty nobody has cleaned up',
  'Owners who want links bought in bulk',
  'Projects with nobody free to approve copy',
];

const MANCHESTER_SPECIFICS = [
  'City centre, Ancoats and the Northern Quarter search differently from Trafford',
  'Salford Quays and MediaCityUK skew towards media and broadcast buyers',
  'Most local searches carry no place name, so Google uses the handset location',
  'Tram and rail lines decide which "near me" results feel reasonable',
  'Rival agencies cluster in the same few postcodes, so the map pack is crowded',
  'Trade buyers search on desktop, consumers search on mobile',
  'Stockport, Bolton and Salford need their own pages, not a list of town names',
  'Manchester firms bid against London agencies for the same national terms',
];

export default function SeoManchester() {
  return (
    <section id="seo-manchester" className="bg-fj-cream py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#B23E13]">
          SEO agency Manchester
        </p>

        <h2 className="mt-3 max-w-3xl font-fj-display text-3xl font-bold leading-tight text-fj-ink md:text-4xl">
          SEO in Manchester: what the work actually is
        </h2>

        <p className="mt-5 max-w-3xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
          Search engine optimisation, usually shortened to SEO, means changing your website and
          your listings so search engines show you when someone nearby looks for what you sell.
          It is three jobs at once: making the site readable for search engines, writing pages
          that answer real questions, and earning mentions from other sites. We do all three,
          in that order, and you see every change before it goes live.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Block
              id="seo-included"
              title="What is included in a Manchester SEO engagement"
              lead="The standing scope. Anything outside it is quoted separately, in writing, first."
            >
              <Bullets items={INCLUDED} />
            </Block>
          </div>

          <div className="lg:col-span-5">
            <Block
              id="seo-not-included"
              title="What is not included"
              lead="Some of this Google bans. The rest just stops working."
            >
              <Bullets items={NOT_INCLUDED} />
            </Block>
          </div>

          <div className="lg:col-span-7">
            <Block
              id="seo-first-90-days"
              title="How the first 90 days run"
              lead="Your time: about two hours in week one, then roughly an hour a month."
            >
              <Steps items={NINETY_DAYS} />
            </Block>
          </div>

          <div className="lg:col-span-5">
            <Block
              id="seo-local-signals"
              title="Local ranking signals we work on"
              lead="Local results use a different mix of signals from national ones."
            >
              <Bullets items={LOCAL_SIGNALS} />
            </Block>
          </div>

          <div className="lg:col-span-6">
            <Block id="seo-suits" title="Who this suits">
              <Bullets items={SUITS} />
            </Block>
          </div>

          <div className="lg:col-span-6">
            <Block id="seo-not-suits" title="Who it does not suit">
              <Bullets items={DOES_NOT_SUIT} />
            </Block>
          </div>

          <div className="lg:col-span-12">
            <Block
              id="seo-manchester-specifics"
              title="Manchester specifics that change the work"
              lead="A Manchester campaign is not a London one with the city name swapped."
            >
              <Bullets items={MANCHESTER_SPECIFICS} />
            </Block>
          </div>

          <div className="lg:col-span-12">
            <Block
              id="seo-sources"
              title="Where our numbers come from"
              lead="Every figure here traces to a public source you can open and check."
            >
              <ul className="mt-4 grid gap-y-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                <li>
                  The Office for National Statistics counted 2.73 million UK businesses
                  registered for VAT, PAYE or both, as of March 2025:{' '}
                  <a
                    className={CITE_LINK}
                    href="https://www.ons.gov.uk/businessindustryandtrade/business/activitysizeandlocation/bulletins/ukbusinessactivitysizeandlocation/2025"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ONS, UK business: activity, size and location, 2025
                  </a>
                  .
                </li>
                <li>
                  Local authority output figures for Manchester and the wider city region are
                  published by the ONS:{' '}
                  <a
                    className={CITE_LINK}
                    href="https://www.ons.gov.uk/economy/grossvalueaddedgva/datasets/regionalgrossvalueaddedbalancedbylocalauthorityintheuk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ONS, regional gross value added by local authority
                  </a>
                  .
                </li>
                <li>
                  Counts of private sector businesses come from the annual government release:{' '}
                  <a
                    className={CITE_LINK}
                    href="https://www.gov.uk/government/statistics/business-population-estimates-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Business population estimates 2025, GOV.UK
                  </a>
                  .
                </li>
                <li>
                  The structured data we ship on every location page follows Google&apos;s own
                  specification:{' '}
                  <a
                    className={CITE_LINK}
                    href="https://developers.google.com/search/docs/appearance/structured-data/local-business"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Local business structured data, Google Search Central
                  </a>
                  .
                </li>
              </ul>
            </Block>
          </div>
        </div>

        <p className="mt-8 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
          Related reading:{' '}
          <a className={CITE_LINK} href="/uk/seo">
            SEO services across the UK
          </a>
          ,{' '}
          <a className={CITE_LINK} href="/uk/local-seo">
            local SEO and map pack work
          </a>
          ,{' '}
          <a className={CITE_LINK} href="/uk/ai-seo">
            getting cited by AI search
          </a>{' '}
          and{' '}
          <a className={CITE_LINK} href="/uk/seo-audit">
            a one-off SEO audit
          </a>
          .
        </p>
      </div>
    </section>
  );
}
