/**
 * The substance of the Birmingham SEO offer: what is in scope, what is deliberately not,
 * how the engagement runs week by week, and what physically arrives.
 *
 * This section exists because the 2026-08-25 rubric audit measured this page at 13 list
 * items against a benchmark of roughly 90. Padding a page with bullets is worthless, so
 * every item below is a real deliverable, exclusion or step that a client could hold us to.
 *
 * Static server component. No client JS, no hooks.
 */

interface Pillar {
  id: string;
  title: string;
  lead: string;
  items: string[];
}

const PILLARS: Pillar[] = [
  {
    id: 'technical',
    title: 'Technical foundations',
    lead: 'Done first, because everything after it is wasted if Google cannot read the site properly.',
    items: [
      'Crawl of every page, listing what returns an error, what redirects more than once, and what Google is ignoring.',
      'Page titles and descriptions written per page, so no two Birmingham service pages compete for the same search.',
      'Heading structure corrected so each page has one clear H1 and a sensible order beneath it.',
      'Core Web Vitals measured on real mobile connections, not on a fast office laptop.',
      'Images resized, compressed and given width and height so the page stops jumping while it loads.',
      'Internal links rebuilt so your most valuable service pages are the easiest to reach, not the hardest.',
      'Structured data added for your organisation, your location and your FAQs, matching what the page visibly says.',
      'XML sitemap and robots file checked, including whether AI crawlers are being blocked by accident.',
    ],
  },
  {
    id: 'local',
    title: 'Local search and the map pack',
    lead: 'The fastest moving part for most Birmingham businesses, and the part most often left half finished.',
    items: [
      'Google Business Profile claimed, verified and recovered if a former agency or ex-employee still holds it.',
      'Primary and secondary categories chosen against what actually ranks in Birmingham for your service.',
      'Service areas set to the districts and boroughs you genuinely cover, rather than the whole West Midlands.',
      'Name, address and phone number made identical across your site, directories and old listings.',
      'Duplicate and abandoned listings found and merged or removed, including ones created by staff years ago.',
      'Products, services and opening hours filled in properly, including bank holidays and seasonal changes.',
      'A review routine your team can actually keep up, with replies to the negative ones written for you.',
      'Photographs of real jobs, real premises and real people, geotagged and uploaded on a schedule.',
    ],
  },
  {
    id: 'content',
    title: 'Content built for Birmingham searches',
    lead: 'Pages that answer a question someone is really typing, written in the words they use to type it.',
    items: [
      'One page per service, each strong enough to rank alone, instead of one page listing everything you do.',
      'Search terms scored on volume, commercial value and the strength of the sites already ranking.',
      'Wording matched to how local buyers phrase things, which is rarely how your industry phrases them.',
      'Genuine Birmingham detail on the page: districts served, travel times, local rules, local examples.',
      'Answer-first opening paragraphs, so both a skimming reader and an AI assistant can extract the point.',
      'A question and answer block on every important page, built from what your sales team is actually asked.',
      'Old thin pages merged or retired rather than left to compete with the new ones.',
    ],
  },
  {
    id: 'authority',
    title: 'Authority and mentions',
    lead: 'The slowest lever, and the one that decides whether you can compete for the harder Birmingham terms.',
    items: [
      'A measurement of how strong the sites currently ranking are, so we can tell you what is realistically winnable.',
      'Local press, trade titles and West Midlands business groups approached with something worth publishing.',
      'Supplier, partner, accreditation and membership pages checked for links you have earned but never claimed.',
      'Client case studies written up in a form your clients are happy to host and link to.',
      'Digital PR built on data or an opinion you can actually stand behind, not on a stunt.',
      'A monthly record of every link earned, so you can see what worked and what did not.',
    ],
  },
];

const NOT_INCLUDED: string[] = [
  'Buying links, guest post networks or private blog networks. They break Google guidelines and the penalty lands on you.',
  'Guaranteed number one positions. Nobody controls Google results, and a guarantee is a sales tactic.',
  'Traffic targets as the headline measure. Traffic that never enquires is a cost, not a result.',
  'Locking your accounts to us. Your Business Profile, Analytics, Search Console and site stay in your name.',
  'Auto-generated blog posts published at volume. They dilute the pages you actually want ranking.',
  'A separate page for every Birmingham suburb. Near-identical location pages usually get ignored.',
  'Long contracts to get started. Monthly work runs month to month after any agreed initial period.',
];

interface Step {
  n: string;
  title: string;
  when: string;
  points: string[];
}

const STEPS: Step[] = [
  {
    n: '01',
    title: 'Free review',
    when: 'Week one, no charge',
    points: [
      'We crawl the site and look at your Google Business Profile before we speak to you.',
      'We check which Birmingham search terms you already appear for, using your Search Console data.',
      'You get a short written summary of the three things costing you the most, whether or not you hire us.',
    ],
  },
  {
    n: '02',
    title: 'Scope and quote',
    when: 'Week one to two',
    points: [
      'We put the work in writing: what gets done, in what order, and what it depends on from your side.',
      'Fixed-price milestones for repair work, a monthly retainer for anything ongoing, both stated up front.',
      'We say which terms look winnable this year and which ones would take longer than that.',
    ],
  },
  {
    n: '03',
    title: 'Repair',
    when: 'Month one to two',
    points: [
      'Technical faults fixed in the order of what they cost you, starting with anything blocking indexing.',
      'Business Profile corrected, duplicates cleared, and the details made consistent across the web.',
      'Analytics and Search Console set up properly so later reporting comes from your own data.',
    ],
  },
  {
    n: '04',
    title: 'Build',
    when: 'Month two onwards',
    points: [
      'Service pages rewritten or built new, one at a time, each reviewed by you before it goes live.',
      'Question and answer blocks added from the questions your sales team is genuinely asked.',
      'Internal linking reworked as pages ship, so new pages inherit strength from the old ones.',
    ],
  },
  {
    n: '05',
    title: 'Earn and report',
    when: 'Ongoing, monthly',
    points: [
      'Outreach to Birmingham and West Midlands sites worth being mentioned on, tracked in the open.',
      'A monthly report that leads with enquiries and links to evidence you can open yourself.',
      'A quarterly reset where we drop what is not working rather than defending it.',
    ],
  },
];

const DELIVERABLES: string[] = [
  'A written technical audit in plain English, with faults ranked by what they cost you.',
  'A search term shortlist with volume, commercial value and how strong the current top ten is.',
  'A page-by-page plan showing what gets built, rewritten, merged or retired.',
  'Draft copy for every page, sent for your correction before anything is published.',
  'A Google Business Profile you own, correctly categorised, with the right service areas.',
  'Working Analytics and Search Console, connected and configured, in your accounts.',
  'A monthly report that opens with enquiries and links to the evidence behind every claim.',
  'A running log of every link and mention earned, with the date and the page it points at.',
];

export default function SeoEngagement() {
  return (
    <section
      id="engagement"
      aria-label="What the Birmingham SEO work covers"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Scope
        </p>
        <h2 className="mt-4 max-w-[820px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          What the Birmingham SEO work covers, and what it does not
        </h2>
        <p className="mt-5 max-w-[760px] font-fj-body text-[16px] leading-[1.7] text-fj-neutral-600">
          Four blocks of work. Most Birmingham businesses need all four eventually, but almost
          nobody needs them at once. The audit decides the order, and the order is what
          separates an engagement that pays back inside a year from one that does not.
        </p>

        {/* Four pillars */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PILLARS.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 md:p-7"
            >
              <h3 className="font-fj-display text-[19px] font-bold text-fj-ink md:text-[21px]">
                {p.title}
              </h3>
              <p className="mt-2 font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
                {p.lead}
              </p>
              <ul className="mt-5 space-y-2.5">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[8px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#B23E13]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Not included */}
        <div className="mt-6 rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-8">
          <h3 className="font-fj-display text-[19px] font-bold text-fj-ink md:text-[21px]">
            What is not included, on purpose
          </h3>
          <p className="mt-2 max-w-[720px] font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
            An exclusions list is more useful than a feature list, because it tells you what an
            agency will refuse to do when a quarter goes badly.
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
            {NOT_INCLUDED.map((item) => (
              <li
                key={item}
                className="flex gap-3 font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600"
              >
                <span
                  aria-hidden="true"
                  className="mt-[2px] flex-shrink-0 font-fj-mono text-[13px] font-bold text-[#B23E13]"
                >
                  &times;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <h3 className="mt-16 font-fj-display text-[22px] font-bold text-fj-ink md:text-[26px]">
          How a Birmingham engagement runs
        </h3>
        <p className="mt-3 max-w-[720px] font-fj-body text-[15px] leading-[1.7] text-fj-neutral-600">
          Five stages. The first one is free and produces something useful whether or not you
          go further.
        </p>

        <ol className="mt-8 space-y-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 md:p-7"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-[220px_1fr] md:gap-8">
                <div>
                  <span
                    aria-hidden="true"
                    className="font-fj-mono text-[13px] font-bold tabular-nums text-[#B23E13]"
                  >
                    {s.n}
                  </span>
                  <h4 className="mt-1 font-fj-display text-[19px] font-bold text-fj-ink">
                    {s.title}
                  </h4>
                  <p className="mt-1 font-fj-mono text-[11.5px] uppercase tracking-[0.1em] text-fj-neutral-600">
                    {s.when}
                  </p>
                </div>
                <ul className="space-y-2.5">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 font-fj-body text-[14.5px] leading-[1.65] text-fj-neutral-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[8px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-fj-neutral-400"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        {/* Deliverables */}
        <div className="mt-16 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 md:p-8">
          <h3 className="font-fj-display text-[19px] font-bold text-fj-ink md:text-[21px]">
            What actually lands in your inbox
          </h3>
          <p className="mt-2 max-w-[720px] font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
            Every item below is a file or an account you keep, including if you stop working
            with us.
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
            {DELIVERABLES.map((item) => (
              <li
                key={item}
                className="flex gap-3 font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600"
              >
                <span
                  aria-hidden="true"
                  className="mt-[2px] flex-shrink-0 font-fj-mono text-[13px] font-bold text-[#B23E13]"
                >
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
