import Link from 'next/link';
import { SOURCES, SHEFFIELD_BUSINESS_STATS } from './seoData';

/**
 * Static reference sections for /uk/sheffield.
 *
 * Deliberately plain server components. No "use client", no state, no GSAP.
 * This is the part of the page a search crawler and an AI answer engine read
 * end to end, so it is written to be extractable: short headings, real lists,
 * one claim per bullet, and every external number attributed to a source that
 * was fetched and confirmed before it was cited.
 */

const SECTION_WRAP = 'mx-auto w-full max-w-[1120px] px-6 md:px-10';
const H2 =
  'font-fj-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-fj-ink';
const H3 = 'font-fj-display text-lg font-bold text-fj-ink';
const EYEBROW =
  'font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]';
const LEAD = 'font-fj-body text-base leading-relaxed text-fj-neutral-600';
const LI = 'font-fj-body text-[15px] leading-relaxed text-fj-neutral-600';
const CARD = 'rounded-2xl border border-fj-neutral-200 bg-white p-6';

function Bullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-[9px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#F05A28]"
    />
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <li className={`flex gap-3 ${LI}`}>
      <Bullet />
      <span>{children}</span>
    </li>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   A. What the engagement includes
   ─────────────────────────────────────────────────────────────────────────── */

const DELIVERABLES = [
  {
    title: 'Technical SEO, the plumbing',
    intro:
      'The work that lets a search engine read your site properly. It is unglamorous and it is usually where the fastest wins are hiding.',
    items: [
      'Full crawl of every URL, listing pages that return errors, redirect twice or cannot be reached at all',
      'Canonical tags checked, so two versions of the same page stop competing with each other',
      'Sitemap rebuilt and submitted, with dead and duplicate URLs stripped out',
      'robots.txt reviewed, including whether AI retrieval crawlers are allowed through',
      'Core Web Vitals measured on real pages, then fixed against the thresholds Google publishes',
      'Images resized and converted, with explicit width and height set so the layout stops jumping',
      'Mobile rendering checked on real handset widths, not a desktop browser squashed narrow',
      'Structured data added and validated, so Google is told what the page is rather than left to guess',
      'HTTPS, redirects and trailing slashes normalised to one consistent form',
    ],
  },
  {
    title: 'Local SEO, the Sheffield part',
    intro:
      'The work that puts you in the map results and in searches with a place name attached. This is where most Sheffield enquiries actually come from.',
    items: [
      'Google Business Profile claimed, verified and filled in completely, including categories and attributes',
      'Opening hours set, including bank holidays, so the profile does not quietly go stale',
      'Name, address and phone number made identical everywhere they appear online',
      'Citations built and cleaned on the UK directories that real customers still use',
      'Review process set up, so asking for reviews becomes routine rather than occasional',
      'Photographs added and refreshed, geotagged where that is genuinely accurate',
      'Area pages written for the parts of Sheffield you actually trade in, never name swapped copies',
      'LocalBusiness structured data published with your real address and service area',
      'Map pack rankings tracked from Sheffield postcodes rather than from a national average',
    ],
  },
  {
    title: 'Content and on-page work',
    intro:
      'Pages that answer the search rather than circling it. Written for a reader first, structured so a machine can lift the answer out.',
    items: [
      'Keyword map produced, with one primary term per page and no two pages fighting over the same one',
      'Title tags and meta descriptions rewritten for every page that matters',
      'Heading order repaired, one H1 per page and no skipped levels',
      'A direct answer placed near the top of each page, before the sales copy',
      'Service pages deepened so they cover scope, process, timeline and what is excluded',
      'FAQ sections built from questions people genuinely search, with matching FAQPage markup',
      'Internal links added so new pages are reachable in two clicks from the homepage',
      'Old, thin or duplicate pages merged or redirected rather than left to compete',
      'UK spelling and plain English throughout, with jargon explained on first use',
    ],
  },
  {
    title: 'Off site work and reporting',
    intro:
      'Reputation and measurement. The slowest part of the job and the part that decides whether the rest of it compounds.',
    items: [
      'Backlink profile audited, including anything toxic inherited from a previous agency',
      'Outreach to Sheffield press, trade bodies, suppliers and partners for genuine mentions',
      'Digital PR angles built from your own data or work, not from generic filler articles',
      'Competitor tracking, so you know which local rivals are gaining and on what',
      'Google Search Console and Analytics configured properly, with conversions actually recorded',
      'Call tracking and form tracking wired up, so enquiries can be traced to a search',
      'Monthly report covering rankings, clicks, enquiries, changes made and next actions',
      'A named senior contact on a monthly call, not a shared inbox',
      'Visibility in AI answer engines checked and reported, including when the answer is no',
    ],
  },
];

export function SheffieldDeliverables() {
  return (
    <section className="bg-fj-cream border-t border-fj-neutral-200 py-16 md:py-20">
      <div className={SECTION_WRAP}>
        <p className={EYEBROW}>What you get</p>
        <h2 className={`${H2} mt-3`}>
          What a Sheffield SEO engagement actually includes
        </h2>
        <p className={`${LEAD} mt-4 max-w-3xl`}>
          Most SEO proposals are three bullet points and a monthly figure. Here is the
          full list instead, split into the four bodies of work we run. Not every item
          applies to every business, and the audit decides the order. Nothing on this
          list is an optional extra sold separately later.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {DELIVERABLES.map((block) => (
            <div key={block.title} className={CARD}>
              <h3 className={H3}>{block.title}</h3>
              <p className="font-fj-body mt-2 text-[15px] leading-relaxed text-fj-neutral-400">
                {block.intro}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {block.items.map((item) => (
                  <Row key={item}>{item}</Row>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   B. How the work runs
   ─────────────────────────────────────────────────────────────────────────── */

const PHASES = [
  {
    when: 'Weeks 1 and 2',
    title: 'Audit and baseline',
    items: [
      'Crawl the whole site and list every technical fault in priority order',
      'Record where you rank today, from a Sheffield location rather than a national one',
      'Check Search Console for pages that get impressions but almost no clicks',
      'Review the Google Business Profile and every directory listing carrying your details',
      'Agree the target term list with you, and agree what counts as a win',
    ],
  },
  {
    when: 'Weeks 3 to 6',
    title: 'Fix what is broken',
    items: [
      'Clear the technical faults, worst first, and confirm each one in Search Console',
      'Rewrite titles, descriptions and headings across the pages that already get traffic',
      'Repair or remove duplicate and thin pages so they stop diluting each other',
      'Bring page speed inside the Core Web Vitals thresholds and retest',
      'Complete the Business Profile and correct inconsistent address details across the web',
    ],
  },
  {
    when: 'Month 2 onwards',
    title: 'Build the visible surface',
    items: [
      'Publish the service and area pages the keyword map calls for, in demand order',
      'Add FAQ blocks answering what people actually search, with matching structured data',
      'Start outreach for mentions and links, and log every one that lands',
      'Add internal links from established pages to new ones so they get discovered',
      'Review what moved, drop what did not, and reprioritise the next month',
    ],
  },
  {
    when: 'Every month, ongoing',
    title: 'Report and adjust',
    items: [
      'Send the monthly report, covering rankings, clicks, enquiries and work completed',
      'Hold a call with the person who did the work, not an account manager relaying it',
      'Flag anything that got worse and say plainly why we think it did',
      'Re-run the AI answer engine checks and report where you are named',
      'Set the next month of work before the month starts, not halfway through it',
    ],
  },
];

export function SheffieldProcess() {
  return (
    <section className="bg-white border-t border-fj-neutral-200 py-16 md:py-20">
      <div className={SECTION_WRAP}>
        <p className={EYEBROW}>How it runs</p>
        <h2 className={`${H2} mt-3`}>
          What happens after you sign off, week by week
        </h2>
        <p className={`${LEAD} mt-4 max-w-3xl`}>
          SEO fails most often because nobody agreed what would happen or when. This
          is the running order we use in Sheffield. It costs you roughly one hour a
          month of your own time once the first two weeks are done.
        </p>

        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PHASES.map((phase, i) => (
            <li key={phase.when} className={CARD}>
              <div className="flex items-baseline gap-3">
                <span className="font-fj-display text-2xl font-bold text-[#F05A28]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-400">
                  {phase.when}
                </span>
              </div>
              <h3 className={`${H3} mt-2`}>{phase.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {phase.items.map((item) => (
                  <Row key={item}>{item}</Row>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   C. Scope boundaries and fit
   ─────────────────────────────────────────────────────────────────────────── */

const INCLUDED = [
  'Technical audit and the fixes that come out of it',
  'Keyword research checked against real search demand, not a plugin score',
  'Page titles, descriptions, headings and on page copy',
  'Google Business Profile setup, verification and monthly upkeep',
  'Structured data written, published and validated',
  'Sheffield area pages, where you genuinely trade in that area',
  'Outreach for mentions and links, with every placement logged',
  'Search Console, Analytics, call tracking and form tracking configured',
  'A monthly written report and a call with the person doing the work',
  'Full handover of everything produced, including access to every account',
];

const NOT_INCLUDED = [
  'Paid ads. That is a separate service with a separate budget and we will say so',
  'Bought links, private blog networks or anything else that breaches Google spam policy',
  'A guaranteed number one ranking. Nobody can sell that honestly',
  'Rewriting your prices, your offer or your sales process, unless you ask us to',
  'Social media management, which rarely moves search rankings for a local firm',
  'Ranking you for towns you do not actually trade in',
  'Reporting impressions on their own and calling it growth',
];

const GOOD_FIT = [
  'You are a Sheffield or South Yorkshire business selling to people who search before they buy',
  'You can answer questions about your own trade, because the good pages need your knowledge',
  'You can wait three months for the first movement without pulling the plug',
  'You want to own the site and the accounts, not rent them from an agency',
  'You already get some enquiries and want more of the same kind',
  'You are willing to ask customers for reviews on a regular basis',
];

const POOR_FIT = [
  'You need enquiries this week. Paid search will do that, SEO will not',
  'You want the cheapest possible monthly figure rather than the right scope',
  'You are not willing to change anything on the website',
  'Your business has no physical presence or genuine service area in the region',
  'You want us to buy links, and no explanation of the risk will change that',
];

function ListCard({
  title,
  tone,
  items,
}: {
  title: string;
  tone: 'yes' | 'no';
  items: string[];
}) {
  return (
    <div className={CARD}>
      <h3 className={H3}>{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className={`flex gap-3 ${LI}`}>
            <span
              aria-hidden="true"
              className={`mt-[2px] flex-shrink-0 font-bold ${
                tone === 'yes' ? 'text-[#047857]' : 'text-[#B23E13]'
              }`}
            >
              {tone === 'yes' ? '✓' : '✕'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SheffieldScope() {
  return (
    <section className="bg-fj-cream border-t border-fj-neutral-200 py-16 md:py-20">
      <div className={SECTION_WRAP}>
        <p className={EYEBROW}>Scope, plainly</p>
        <h2 className={`${H2} mt-3`}>What is included, what is not, and who it suits</h2>
        <p className={`${LEAD} mt-4 max-w-3xl`}>
          The fastest way to waste money on SEO is to find out in month four that the
          thing you assumed was covered never was. So here is the boundary, written
          down before you commit to anything.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ListCard title="Included as standard" tone="yes" items={INCLUDED} />
          <ListCard title="Not included, and why" tone="no" items={NOT_INCLUDED} />
        </div>

        <h3 className={`${H3} mt-14 text-xl`}>Who this is a good fit for</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ListCard title="A good fit" tone="yes" items={GOOD_FIT} />
          <ListCard title="Probably not a fit" tone="no" items={POOR_FIT} />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   D. Sheffield specifics, with the ONS numbers
   ─────────────────────────────────────────────────────────────────────────── */

const LOCAL_NOTES = [
  'Sheffield search behaviour splits by neighbourhood. People search "plumber Crookes" and "plumber S10" far more than they search a city wide phrase, so one city page rarely covers it.',
  'The two universities put a large, transient population into the S1, S3 and S10 postcodes. Student facing trades see demand swing hard in September and again in June.',
  'Meadowhall pulls retail searches away from the city centre. Independent retailers usually rank better on product and niche terms than on generic Sheffield shopping terms.',
  'Kelham Island and the Cultural Industries Quarter concentrate creative, food and drink businesses, so those categories are unusually competitive for a city of this size.',
  'Advanced manufacturing and engineering around the Sheffield and Rotherham corridor generate business to business search, which needs different pages from consumer service work.',
  'Sheffield sits inside the South Yorkshire travel to work area, so Rotherham, Barnsley, Doncaster and Chesterfield searches routinely reach Sheffield suppliers.',
  'Hilly geography and split postcodes mean the map pack radius behaves oddly. A business two miles away can outrank one that is closer as the crow flies.',
  'Most local rivals still run slow template sites, which makes Core Web Vitals a genuine and cheap point of difference here.',
];

export function SheffieldLocalContext() {
  const ons = SOURCES.find((s) => s.id === 'idbrlu');
  return (
    <section className="bg-white border-t border-fj-neutral-200 py-16 md:py-20">
      <div className={SECTION_WRAP}>
        <p className={EYEBROW}>Local specifics</p>
        <h2 className={`${H2} mt-3`}>Sheffield in numbers, and what it means for search</h2>
        <p className={`${LEAD} mt-4 max-w-3xl`}>
          Sheffield is a city of very small businesses. That single fact shapes what
          works here: the competition for most local search terms is not a national
          brand with a large budget, it is another firm of under ten people with a
          template website.
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SHEFFIELD_BUSINESS_STATS.map((stat) => (
            <div key={stat.id} className={CARD}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-fj-display block text-3xl font-bold leading-none text-[#F05A28]">
                  {stat.display}
                </span>
                <span className="font-fj-body mt-3 block text-sm leading-relaxed text-fj-neutral-600">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {ons ? (
          <p className="font-fj-body mt-5 text-sm text-fj-neutral-400">
            Source:{' '}
            <a
              href={ons.href}
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#B23E13] underline underline-offset-2"
            >
              {ons.label}
            </a>
            . Sheffield local authority, 2025 reference year. Figures are counts of
            local units, meaning individual business sites rather than companies.
          </p>
        ) : null}

        <h3 className={`${H3} mt-14 text-xl`}>
          Eight things about Sheffield that change the SEO plan
        </h3>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {LOCAL_NOTES.map((note) => (
            <Row key={note}>{note}</Row>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   E. How Google decides, with citations
   ─────────────────────────────────────────────────────────────────────────── */

export function SheffieldHowGoogleDecides() {
  const gbp = SOURCES.find((s) => s.id === 'gbp-local-ranking');
  const cwv = SOURCES.find((s) => s.id === 'cwv');
  const sd = SOURCES.find((s) => s.id === 'localbusiness-sd');

  return (
    <section className="bg-fj-cream border-t border-fj-neutral-200 py-16 md:py-20">
      <div className={SECTION_WRAP}>
        <p className={EYEBROW}>The rules, from the source</p>
        <h2 className={`${H2} mt-3`}>
          How Google decides who shows up for a Sheffield search
        </h2>
        <p className={`${LEAD} mt-4 max-w-3xl`}>
          A lot of SEO advice is guesswork repeated until it sounds official. These
          three things are not. Google publishes them, and every link below goes
          straight to the page that says it.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className={CARD}>
            <h3 className={H3}>Relevance, distance and prominence</h3>
            <p className="font-fj-body mt-3 text-[15px] leading-relaxed text-fj-neutral-600">
              For the map results, Google states that local rankings are based mainly
              on three factors, and that prominence is influenced by how many websites
              link to you and how many reviews you have.
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <Row>
                Relevance: how closely your Business Profile matches what was searched
              </Row>
              <Row>Distance: how far you are from the person searching</Row>
              <Row>
                Prominence: how well known you are, shaped by links, reviews and
                coverage
              </Row>
              <Row>
                Google also states plainly that you cannot pay for a better local
                ranking
              </Row>
            </ul>
            {gbp ? (
              <p className="font-fj-body mt-4 text-sm text-fj-neutral-400">
                <a
                  href={gbp.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[#B23E13] underline underline-offset-2"
                >
                  {gbp.label}
                </a>
              </p>
            ) : null}
          </div>

          <div className={CARD}>
            <h3 className={H3}>The speed thresholds are published</h3>
            <p className="font-fj-body mt-3 text-[15px] leading-relaxed text-fj-neutral-600">
              Core Web Vitals are three measurements of how a page feels to a real
              visitor. Google publishes the number that counts as good for each one,
              so this is a target you can check yourself.
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <Row>
                Largest Contentful Paint, how quickly the main content appears: within
                2.5 seconds
              </Row>
              <Row>
                Interaction to Next Paint, how quickly the page responds to a tap:
                under 200 milliseconds
              </Row>
              <Row>
                Cumulative Layout Shift, how much the page jumps about while loading:
                under 0.1
              </Row>
              <Row>
                Every page we ship is measured against all three before it goes live
              </Row>
            </ul>
            {cwv ? (
              <p className="font-fj-body mt-4 text-sm text-fj-neutral-400">
                <a
                  href={cwv.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[#B23E13] underline underline-offset-2"
                >
                  {cwv.label}
                </a>
              </p>
            ) : null}
          </div>

          <div className={CARD}>
            <h3 className={H3}>Structured data removes the guesswork</h3>
            <p className="font-fj-body mt-3 text-[15px] leading-relaxed text-fj-neutral-600">
              Structured data is a hidden block of code that states the facts about a
              page in a format search engines read directly. Google documents the
              markup for local businesses and the tool that validates it.
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <Row>Tells Google your hours, location and service area as facts</Row>
              <Row>
                Makes the page eligible for richer results instead of a plain link
              </Row>
              <Row>
                Must describe what is genuinely on the page, or it becomes a liability
              </Row>
              <Row>
                We validate every block with Google&apos;s own Rich Results Test before
                launch
              </Row>
            </ul>
            {sd ? (
              <p className="font-fj-body mt-4 text-sm text-fj-neutral-400">
                <a
                  href={sd.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[#B23E13] underline underline-offset-2"
                >
                  {sd.label}
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   F. Sources
   ─────────────────────────────────────────────────────────────────────────── */

export function SheffieldSources() {
  return (
    <section className="bg-white border-t border-fj-neutral-200 py-12 md:py-16">
      <div className={SECTION_WRAP}>
        <h2 className="font-fj-display text-xl font-bold text-fj-ink">
          Sources used on this page
        </h2>
        <p className="font-fj-body mt-2 text-sm text-fj-neutral-400">
          Every external figure quoted above comes from one of these. Each link was
          checked on 25 August 2026.
        </p>
        <ol className="mt-6 flex flex-col gap-4">
          {SOURCES.map((source, i) => (
            <li key={source.id} className={`flex gap-3 ${LI}`}>
              <span
                aria-hidden="true"
                className="font-fj-mono text-[13px] font-semibold text-fj-neutral-400"
              >
                {i + 1}.
              </span>
              <span>
                <a
                  href={source.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-semibold text-[#B23E13] underline underline-offset-2"
                >
                  {source.label}
                </a>
                <span className="block text-fj-neutral-400">{source.note}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="font-fj-body mt-8 text-sm text-fj-neutral-600">
          Looking for the national picture rather than the Sheffield one? Read our{' '}
          <Link
            href="/uk/seo"
            className="font-semibold text-[#B23E13] underline underline-offset-2"
          >
            UK SEO services
          </Link>{' '}
          page, or the{' '}
          <Link
            href="/uk/local-seo"
            className="font-semibold text-[#B23E13] underline underline-offset-2"
          >
            UK local SEO
          </Link>{' '}
          guide.
        </p>
      </div>
    </section>
  );
}
