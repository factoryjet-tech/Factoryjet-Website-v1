// Static server component. No "use client", no GSAP, no state.
// This is the section that actually serves "seo agency liverpool" intent:
// what the service is, what ships, what does not, how long it takes, who it suits.

type Block = {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  items: string[];
};

const WORK_BLOCKS: Block[] = [
  {
    id: 'technical',
    kicker: 'Track 01',
    title: 'Technical SEO',
    intro:
      'The plumbing. If Google cannot crawl a page, or the page takes five seconds to appear on a phone, nothing else you do matters.',
    items: [
      'Crawl and index check across every URL, so no page is accidentally hidden from Google',
      'Mobile page speed work: image sizing, font loading, render blocking scripts',
      'Core Web Vitals measured on real page loads, not just a lab score',
      'Heading order repaired so every page runs H1 then H2 then H3 without gaps',
      'Redirect map for any old URL, single hop only, never a chain of two or three',
      'Canonical tags checked page by page against the URL that is actually served',
      'XML sitemap rebuilt and submitted, with dead and redirected URLs removed',
      'robots.txt reviewed so retrieval crawlers are allowed rather than blocked by accident',
      'Structured data validated against what a visitor can actually see on the page',
      'Duplicate and near duplicate pages merged or redirected instead of left to compete',
    ],
  },
  {
    id: 'local',
    kicker: 'Track 02',
    title: 'Local SEO for Liverpool and Merseyside',
    intro:
      'The work that gets you into the map results. Google names relevance, distance and prominence as its local ranking factors, so this track pushes on the two you can control.',
    items: [
      'Google Business Profile rebuilt: primary category, secondary categories, services, hours',
      'Service area set around where your customers are, across Liverpool, Wirral, Sefton, Knowsley, St Helens and Halton',
      'Business name, address and phone number made identical everywhere it appears online',
      'Directory and citation clean up, including duplicates left behind by previous agencies',
      'Review flow set up so genuine reviews arrive steadily instead of in one suspicious burst',
      'Photos and product or service listings added to the profile and kept current',
      'Location pages written for the areas you genuinely serve, never a page per postcode',
      'Local schema markup so your address, hours and service area are machine readable',
      'Map pack position tracked separately from ordinary results, because they move differently',
    ],
  },
  {
    id: 'content',
    kicker: 'Track 03',
    title: 'Content and on-page',
    intro:
      'Most Liverpool sites have three pages doing the work of fifteen. This track builds the missing pages and fixes the ones that already exist.',
    items: [
      'Keyword research against real search volume, with the low competition terms separated out',
      'A dedicated page for every service you sell, rather than one page listing all of them',
      'Titles and meta descriptions rewritten to match what people actually type',
      'Answer-first opening paragraph on every page, so AI tools have something clean to quote',
      'Internal links added between related pages, which is usually the fastest free win on a site',
      'FAQ sections built from the questions people ask in the search results themselves',
      'Thin pages either deepened or merged, never left to dilute the site',
      'Image alt text written for people using screen readers, not stuffed with keywords',
      'Content refresh schedule so time sensitive pages carry an accurate last updated date',
    ],
  },
  {
    id: 'authority',
    kicker: 'Track 04',
    title: 'Authority, mentions and AI visibility',
    intro:
      'Prominence is the third Google local factor and the hardest to fake. We earn mentions rather than buy them, because bought links break Google spam policies.',
    items: [
      'Chamber of commerce, trade body and professional register listings claimed properly',
      'Supplier, partner and client pages approached for a genuine mention and link',
      'Local press and sector publication angles built from things your business actually did',
      'Sponsorship and community listings, which are normal, cheap and completely safe',
      'Unlinked brand mentions found and converted into real links',
      'Entity consistency across your site, your profile and every directory, so AI tools cross check cleanly',
      'Citation tracking inside ChatGPT, Perplexity and Google AI Overviews, per query',
      'No paid link networks, no mass guest posting, no private blog networks',
    ],
  },
];

const NOT_INCLUDED: string[] = [
  'Guaranteed rankings. Google states that nobody can guarantee a number one position, and agencies that promise one are a warning sign.',
  'Paid links or link network placements. They break Google spam policy and put your site at risk of a manual action.',
  'Google Ads management. That is a separate discipline and we will say so rather than bundle it in.',
  'Automated content published without a human reading it. Volume without accuracy damages the entity signals AI tools rely on.',
  'Locked reporting portals. Your analytics, Search Console and content stay in your accounts and on your site.',
  'Contracts that renew silently. Ongoing work continues because it is producing enquiries, not because a clause says so.',
];

const PROCESS: Array<{ step: string; title: string; window: string; detail: string[] }> = [
  {
    step: '01',
    title: 'Discovery call',
    window: 'Week 0',
    detail: [
      'We ask what you sell, who buys it, and which service earns you the most',
      'We look at your site live on the call, on a phone, not on a desktop',
      'You leave knowing whether search is even the right channel for you',
    ],
  },
  {
    step: '02',
    title: 'Audit and baseline',
    window: 'Weeks 1 to 2',
    detail: [
      'Full technical crawl, Search Console history and Google Business Profile review',
      'Competitor check on the Liverpool businesses currently holding your terms',
      'You receive a written list of problems ranked by likely impact, with the pages named',
    ],
  },
  {
    step: '03',
    title: 'Fix the foundations',
    window: 'Weeks 2 to 6',
    detail: [
      'Technical blockers cleared first, because content on a broken site does not rank',
      'Google Business Profile rebuilt and citations corrected',
      'Existing service pages rewritten before any new page is written',
    ],
  },
  {
    step: '04',
    title: 'Build and publish',
    window: 'Month 2 onward',
    detail: [
      'Missing service and area pages written, reviewed by you, then published',
      'Internal linking rebuilt across the site as new pages land',
      'Structured data shipped alongside each page, generated from the page content itself',
    ],
  },
  {
    step: '05',
    title: 'Measure and repeat',
    window: 'Monthly',
    detail: [
      'One report covering enquiries, clicks, positions and technical health',
      'A written change log so you can see exactly what shipped and when',
      'Next month scoped from what moved, not from a fixed template',
    ],
  },
];

const SUITS: string[] = [
  'You already get some enquiries from search and want more of them',
  'People search for your service by name, so demand exists to capture',
  'You can answer questions about your own work when we write about it',
  'You can wait months rather than weeks for the commercial payoff',
  'You want to know exactly what was changed on your site and when',
];

const DOES_NOT_SUIT: string[] = [
  'You need enquiries this week. Paid search will do that job better',
  'Nobody searches for what you sell yet, because the category is brand new',
  'You want a guaranteed position and will judge the work only on that',
  'Nobody at your end can approve content or grant access to your own accounts',
];

const MONTH_ONE: string[] = [
  'A written technical audit naming the exact pages that need fixing',
  'Search Console and analytics connected, with a clean baseline recorded',
  'Google Business Profile corrected and verified',
  'The highest impact technical fixes already shipped, not just listed',
  'A keyword map showing which page targets which term',
  'Your first monthly report and change log',
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B23E13"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 flex-none"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6B6B62"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 flex-none"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function SeoOffer() {
  return (
    <section
      id="what-you-get"
      aria-labelledby="what-you-get-heading"
      className="w-full bg-fj-cream"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        {/* Section header, left aligned per brand */}
        <div className="max-w-3xl">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B23E13]">
            SEO agency Liverpool
          </p>
          <h2
            id="what-you-get-heading"
            className="mt-4 font-fj-display text-3xl font-bold leading-tight tracking-tight text-fj-ink md:text-[42px]"
          >
            What an SEO engagement actually includes
          </h2>
          <p className="mt-5 font-fj-body text-lg leading-relaxed text-fj-neutral-600">
            SEO is four tracks of work running at once: fixing the site, fixing your
            local listings, writing the pages you are missing, and earning mentions
            that make Google treat you as a known business. Below is the full list,
            written out, so you can compare it against any other quote you hold.
          </p>
        </div>

        {/* Four work tracks. 55/45 style asymmetric pairs on desktop. */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {WORK_BLOCKS.map((block) => (
            <article
              key={block.id}
              className="rounded-2xl border border-fj-neutral-200 bg-white p-7 md:p-8"
            >
              <p className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-fj-neutral-400">
                {block.kicker}
              </p>
              <h3 className="mt-3 font-fj-display text-xl font-bold text-fj-ink md:text-2xl">
                {block.title}
              </h3>
              <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                {block.intro}
              </p>
              <ul className="mt-6 space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* What is deliberately not included */}
        <div className="mt-14 rounded-2xl border border-fj-neutral-200 bg-white p-7 md:p-10">
          <h3 className="font-fj-display text-2xl font-bold text-fj-ink">
            What is deliberately not included
          </h3>
          <p className="mt-3 max-w-3xl font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
            Every one of these appears in SEO proposals somewhere in the UK. None of
            them appear in ours, and here is why.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {NOT_INCLUDED.map((item) => (
              <li
                key={item}
                className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600"
              >
                <CrossIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How the work runs */}
        <div className="mt-20">
          <h3 className="font-fj-display text-2xl font-bold text-fj-ink md:text-3xl">
            How the work runs, week by week
          </h3>
          <p className="mt-3 max-w-3xl font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
            Engagements are shaped as either a one-off audit, a fixed-price project
            with milestones, or a monthly retainer. Whichever you choose, the first
            six weeks look the same, because the foundations have to be right before
            anything else pays back.
          </p>

          <ol className="mt-8 space-y-4">
            {PROCESS.map((p) => (
              <li
                key={p.step}
                className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-fj-display text-lg font-bold text-fj-ink md:text-xl">
                    <span className="font-fj-mono text-sm font-semibold text-[#B23E13]">
                      {p.step}
                    </span>{' '}
                    {p.title}
                  </h4>
                  <span className="font-fj-mono text-xs font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">
                    {p.window}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.detail.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600"
                    >
                      <CheckIcon />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* Fit check, asymmetric 55/45 */}
        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-[55%_1fr]">
          <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 md:p-8">
            <h3 className="font-fj-display text-xl font-bold text-fj-ink md:text-2xl">
              This suits you if
            </h3>
            <ul className="mt-5 space-y-3">
              {SUITS.map((s) => (
                <li
                  key={s}
                  className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink"
                >
                  <CheckIcon />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-fj-neutral-200 bg-fj-neutral-50 p-7 md:p-8">
            <h3 className="font-fj-display text-xl font-bold text-fj-ink md:text-2xl">
              Look elsewhere if
            </h3>
            <ul className="mt-5 space-y-3">
              {DOES_NOT_SUIT.map((s) => (
                <li
                  key={s}
                  className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600"
                >
                  <CrossIcon />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Month one */}
        <div className="mt-14 rounded-2xl border border-fj-neutral-200 bg-white p-7 md:p-10">
          <h3 className="font-fj-display text-2xl font-bold text-fj-ink">
            What exists by the end of month one
          </h3>
          <p className="mt-3 max-w-3xl font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
            Rankings will not have moved much in thirty days, and anyone claiming
            otherwise is selling you a screenshot. These are the things that will
            genuinely exist.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {MONTH_ONE.map((m) => (
              <li
                key={m}
                className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink"
              >
                <CheckIcon />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
