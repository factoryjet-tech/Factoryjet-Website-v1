import React from 'react';
import type { BlogPost } from '../data.types';

/*
  SOURCES (all fetched 16 Nov 2026; every number on this page traces to one of these):
  - Google: Ask Google to recrawl your URLs. "Crawling can take anywhere from a few days to a few weeks."
    https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
  - Google: AI features and your website. "no additional requirements to appear in AI Overviews or AI Mode";
    page "must be indexed and eligible to be shown in Google Search with a snippet"; troubleshooting:
    "crawling can take anywhere from several days to several months".
    https://developers.google.com/search/docs/appearance/ai-features
  - Google: Core updates. "it could take several months for our systems to learn and confirm"; may mean
    "waiting until the next core update". https://developers.google.com/search/docs/appearance/core-updates
  - Google: Site moves. "a small to medium-sized website can take a few weeks for most pages to move";
    keep redirects "generally at least 1 year".
    https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
  - Google: Manual actions report. "Most reconsideration reviews can take several days or weeks".
    https://support.google.com/webmasters/answer/9044175
  - Gary Illyes timings, Search Central Live Deep Dive Europe, Barcelona, 2 Oct 2026, via John Campbell's
    recap, reported by Search Engine Roundtable (Barry Schwartz, 5 Oct 2026) and Search Engine Journal
    (Matt G. Southern, 4 Oct 2026). Internal Google analysis, not official documentation.
    https://www.seroundtable.com/google-search-crawling-indexing-serving-timelines-42225.html
    https://www.searchenginejournal.com/google-crawling-indexing-recovery-timing-ranges/591829/
  - Ahrefs, How long does it take to rank in Google (15 May 2025): 1.74% of 1M random URLs (Sep 2023) reached
    the top 10 within a year; 6.11% of 2M non-empty English URLs (Oct 2023); 40.82% of top-10 pages got there
    within 1 month; 72.9% of top-10 pages are 3+ years old; average #1 page is 5 years old.
    https://ahrefs.com/blog/how-long-does-it-take-to-rank/
  - Orbit Media, How long does SEO take (modified 31 Oct 2024): 2–3 months for low-competition keywords,
    4–12 months for significant success, 2–3 years for high-competition keywords.
    https://www.orbitmedia.com/blog/how-long-does-seo-take/
  - Search Engine Land, How long does SEO take to work (May 2026, read from the Google result snippet; the
    page returned 403 to our fetcher): "three to six months to produce measurable results".
    https://searchengineland.com/guide/how-long-does-seo-take-to-work
  - DataForSEO US Google SERP pull, 16 Nov 2026, six query variants: AI Overview on all six, no featured
    snippet, video carousel on "seo timeline".
*/

const SRC = {
  recrawl: 'https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl',
  aiFeatures: 'https://developers.google.com/search/docs/appearance/ai-features',
  coreUpdates: 'https://developers.google.com/search/docs/appearance/core-updates',
  siteMove: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
  manual: 'https://support.google.com/webmasters/answer/9044175',
  illyesSer: 'https://www.seroundtable.com/google-search-crawling-indexing-serving-timelines-42225.html',
  illyesSej: 'https://www.searchenginejournal.com/google-crawling-indexing-recovery-timing-ranges/591829/',
  ahrefs: 'https://ahrefs.com/blog/how-long-does-it-take-to-rank/',
  orbit: 'https://www.orbitmedia.com/blog/how-long-does-seo-take/',
  sel: 'https://searchengineland.com/guide/how-long-does-seo-take-to-work',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

const faqs = [
  {
    q: 'How long does SEO take?',
    a: 'SEO usually takes 3 to 6 months to show measurable results and 6 to 12 months or more to win competitive keywords. Orbit Media puts low-competition keywords at 2 to 3 months and high-competition keywords at 2 to 3 years. Where you land depends on site age, authority, competition, how much content you publish and your technical health.',
  },
  {
    q: 'How long does SEO take to work for a new website?',
    a: 'Expect the slow end of every range. A new site has no links and no ranking history, so it starts with long-tail, low-competition terms and works up. Ahrefs found that only 1.74% of 1 million random new URLs reached the top 10 within a year, and the average page ranking first is 5 years old. Plan for 6 to 12 months before a new site earns steady organic traffic, and longer in crowded markets.',
  },
  {
    q: 'Why does SEO take so long?',
    a: 'Because several Google processes run one after another and each has its own wait. Gary Illyes of Google shared internal timings in October 2026: about 20 hours to discover a new URL, about 30 days to recrawl a known one, and 1 to 3 weeks for canonical changes. He said the processes are linked, so delays stack up. After that, your page still has to beat pages that have had years to collect links.',
  },
  {
    q: 'How long does it take Google to find a new page?',
    a: 'About 20 hours in the typical case, according to internal figures Gary Illyes presented in Barcelona in October 2026. The slowest case was listed as weeks to never. Sitemap processing typically takes about 24 hours and up to 14 days. Google’s own documentation says crawling can take anywhere from a few days to a few weeks.',
  },
  {
    q: 'How long does it take for Google to index a page?',
    a: 'Indexing itself is fast once Google crawls the page: the typical end-to-end figure Illyes shared was about 1.5 hours, which he said is likely pulled down by news sites. The slowest case was months or never, tied to page quality. Requesting indexing in Search Console does not guarantee a page will be included, as Google’s recrawl documentation says.',
  },
  {
    q: 'How long does it take to rank on Google?',
    a: 'Most pages never reach the top 10. In Ahrefs’ 2025 study, 1.74% of 1 million random URLs and 6.11% of 2 million non-empty English pages made the top 10 within a year. The pages that did get there often moved quickly: 40.82% of them reached the top 10 within one month. If a page has not moved after several months, it usually needs more depth or more links, not more patience.',
  },
  {
    q: 'How long do title tag changes take to show in Google?',
    a: 'Typically 1 to 2 days, with the slowest cases taking several weeks to months, according to the timings Gary Illyes shared in October 2026. Snippet changes follow the same pattern. This is why rewriting titles on pages that already rank is the fastest visible SEO change you can make.',
  },
  {
    q: 'Can SEO work in 30 days?',
    a: 'Some of it can. On-page changes to pages that are already indexed and ranking can show within days, and new URLs are typically discovered within about 20 hours. What 30 days rarely buys is a new page beating established competitors. Treat month one as setup, fixes and first content, and judge results from month three onward.',
  },
  {
    q: 'How long does local SEO take?',
    a: 'There is no reliable public study that measures local SEO timelines, so be careful with anyone who quotes an exact number. The same crawl and indexing waits apply to your location pages. Local results often move sooner than national ones because fewer businesses compete for a city plus service search, and a complete Google Business Profile with reviews gives Google more to work with.',
  },
  {
    q: 'How long does SEO take for a small business?',
    a: 'Most small businesses should plan on 3 to 6 months for the first measurable change, usually rising impressions and a few long-tail rankings, and 6 to 12 months for steady leads. Small businesses tend to win sooner on narrow, local and specific searches than on broad national terms.',
  },
  {
    q: 'What happens in the first month of SEO?',
    a: 'Month one is setup and diagnosis: a technical crawl of the site, Search Console and analytics checks, keyword research mapped to specific pages, and a competitor gap review. Quick fixes such as title rewrites can show within days. Rankings for new content rarely appear in month one.',
  },
  {
    q: 'What should I expect in months 3 to 6 of SEO?',
    a: 'This is when most sites see the first measurable results. Search Engine Land and most of the top-ranking guides put measurable results at 3 to 6 months. Look for impressions rising in Search Console, long-tail queries moving onto page two and page one, and the first organic leads.',
  },
  {
    q: 'How long does a website migration take to settle in Google?',
    a: 'Google’s documentation says a small to medium-sized site can take a few weeks for most pages to move, and larger sites take longer. The internal timings Illyes shared put a typical site move at 1 to 3 months and the slowest at 6 months to over a year. Google advises keeping redirects in place for at least a year.',
  },
  {
    q: 'How long does it take to recover from a Google core update?',
    a: 'Google’s core update documentation says some changes can take effect in a few days, but it could take several months for its systems to learn and confirm them, and sometimes you wait until the next core update. The internal figures shared in October 2026 put typical recovery at 3 to 6 months and the slowest at 6 months to a year.',
  },
  {
    q: 'How long does it take to remove a Google manual action?',
    a: 'Google says most reconsideration reviews take several days or weeks, and link-related requests can take longer. The internal figures Illyes shared put manual action removal at 1 to 2 weeks typically, and 4 to 6 weeks or much longer for dormant sites. The clock starts only after you fix the problem and file the request.',
  },
  {
    q: 'Does domain age affect how long SEO takes?',
    a: 'Older pages dominate the top results, though Google has not said age itself is a ranking factor. Ahrefs found 72.9% of pages in Google’s top 10 are more than 3 years old and the average number one result is 5 years old. Older sites have had longer to earn links and build topical depth, and that is what a new site has to catch up on.',
  },
  {
    q: 'Do backlinks speed up SEO results?',
    a: 'Relevant links from real sites are one of the main reasons established pages hold their positions, so earning them shortens the climb on competitive terms. Bought links in bulk work the other way: link-related manual actions are the ones Google says can take longer than usual to review.',
  },
  {
    q: 'How many blog posts do I need before SEO works?',
    a: 'No study gives a reliable number. What helps more than volume is coverage: a group of interlinked pages that answer the questions buyers actually search, each one better than what currently ranks. Ten thin posts move less than three pages that fully answer the query.',
  },
  {
    q: 'How does AI search change the SEO timeline?',
    a: 'It does not add a separate clock. Google says there are no additional requirements to appear in AI Overviews or AI Mode: a page must be indexed and eligible to show with a snippet. So the AI Overview timeline is the indexing and ranking timeline. When we checked six versions of this question on Google US on 16 Nov 2026, all six showed an AI Overview above the organic results.',
  },
  {
    q: 'How long does it take to show up in Google AI Overviews?',
    a: 'As long as it takes to be indexed and ranked well enough to be chosen, because Google uses the same eligibility rules as normal search. Google’s AI features troubleshooting page says crawling can take anywhere from several days to several months. Clear, direct answers near the top of a page make it easier to quote once it is eligible.',
  },
  {
    q: 'How do I know if my SEO is working before traffic arrives?',
    a: 'Check Search Console monthly. Rising impressions, a growing count of indexed pages, and more queries sitting in positions 11 to 20 all mean Google is surfacing you more often. Clicks usually follow those signals. If impressions are flat after three months of steady work, something is blocking progress and is worth diagnosing.',
  },
  {
    q: 'How long should I give an SEO agency before judging results?',
    a: 'Judge the leading indicators at month three and the business results between months 6 and 12. Orbit Media puts significant success at 4 to 12 months. An agency that cannot show rising impressions, fixed technical issues and new pages indexed by month three has a problem that more time will not solve.',
  },
  {
    q: 'Is SEO worth it if it takes 6 to 12 months?',
    a: 'For most businesses that sell to people who search before they buy, yes, because pages that rank keep sending visitors without paying for each click. The catch is the delay. Run paid search or outbound alongside SEO for the first months if you need leads now.',
  },
  {
    q: 'Does FactoryJet help with SEO timelines?',
    a: 'Yes. We run SEO and AI search as one program and start with the fixes that show soonest: titles on pages already ranking, indexing problems and missing schema. New FactoryJet sites launch with schema, fast Core Web Vitals and clean structure already in place, so the technical setup phase is largely done before day one.',
  },
];

const thCell: React.CSSProperties = { padding: '12px 14px', textAlign: 'left', fontWeight: 600 };
const td: React.CSSProperties = { padding: '11px 14px', borderBottom: '1px solid #E5DFD7', verticalAlign: 'top' };
const tableWrap: React.CSSProperties = { overflowX: 'auto', marginBottom: '12px' };
const table: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: '15px', lineHeight: 1.5 };
const headRow: React.CSSProperties = { background: '#1F2937', color: '#fff' };
const note: React.CSSProperties = { fontSize: '13px', color: '#6b7280', marginTop: '8px', marginBottom: '32px' };

const monthRows: Array<[string, string, string, React.ReactNode]> = [
  [
    'Days 1–14',
    'Technical crawl, Search Console and sitemap checks, title rewrites on pages that already rank.',
    'Title changes show in Google, often within 1–2 days. New URLs get discovered.',
    <a key="a" href={SRC.illyesSer} {...ext}>Google timings via SER: titles 1–2 days, discovery ~20 hours</a>,
  ],
  [
    'Month 1',
    'Fix indexing and canonical problems, add schema, map keywords to pages, start the first content.',
    'Recrawled pages pick up fixes. Little ranking movement on new content yet.',
    <a key="b" href={SRC.recrawl} {...ext}>Google: crawling takes a few days to a few weeks</a>,
  ],
  [
    'Months 2–3',
    'Publish a group of interlinked pages on one topic. Improve pages sitting on page two.',
    'First rankings for low-competition, long-tail keywords. Impressions start to climb.',
    <a key="c" href={SRC.orbit} {...ext}>Orbit Media: 2–3 months for low-competition keywords</a>,
  ],
  [
    'Months 3–6',
    'Keep publishing, refresh what is close to page one, earn the first relevant links.',
    'Measurable results: more queries on page one, first organic leads.',
    <a key="d" href={SRC.sel} {...ext}>Search Engine Land: 3–6 months for measurable results</a>,
  ],
  [
    'Months 6–12',
    'Expand to mid-competition terms, build links to the pages that convert, update older content.',
    'Significant, steady organic traffic for sites that kept going.',
    <a key="e" href={SRC.orbit} {...ext}>Orbit Media: 4–12 months for significant success</a>,
  ],
  [
    'Years 2–3',
    'Compete for head terms, defend positions, extend into neighboring topics.',
    'High-competition keywords come within reach.',
    <span key="f"><a href={SRC.orbit} {...ext}>Orbit Media: 2–3 years</a>; <a href={SRC.ahrefs} {...ext}>Ahrefs: average #1 page is 5 years old</a></span>,
  ],
];

const googleRows: Array<[string, string, string]> = [
  ['Discovering a new URL', '~20 hours', 'Weeks to never'],
  ['Processing a sitemap', '~24 hours', 'Up to 14 days, or never (quality)'],
  ['Indexing (end to end)', '~1.5 hours', 'Months or never (quality)'],
  ['Recrawling a known URL', '~30 days', 'Weeks to never'],
  ['Title and snippet changes', '1–2 days', 'Several weeks to months'],
  ['Canonical changes', '1–3 weeks', 'Months (conflicting signals)'],
  ['Manual action removal', '1–2 weeks', '4–6 weeks, longer for dormant sites'],
  ['Site migration', '1–3 months', '6 months to 1 year+'],
  ['Core update recovery', '3–6 months', '6 months to 1 year (next core update)'],
];

const situationRows: Array<[string, string, React.ReactNode]> = [
  [
    'Brand-new website',
    'The slow end of every range: 6–12 months for steady traffic, longer in crowded markets',
    <a key="1" href={SRC.ahrefs} {...ext}>Ahrefs: 1.74% of new URLs reach the top 10 in a year</a>,
  ],
  [
    'Established site, no SEO so far',
    'Often the fastest wins: existing pages that already rank on page two can move within weeks of on-page fixes',
    <a key="2" href={SRC.illyesSer} {...ext}>Title changes typically 1–2 days</a>,
  ],
  [
    'Low-competition, long-tail keywords',
    '2–3 months',
    <a key="3" href={SRC.orbit} {...ext}>Orbit Media</a>,
  ],
  [
    'High-competition head terms',
    '2–3 years',
    <a key="4" href={SRC.orbit} {...ext}>Orbit Media</a>,
  ],
  [
    'Site migration or domain change',
    'A few weeks for small to medium sites; 1–3 months typical',
    <a key="5" href={SRC.siteMove} {...ext}>Google site move docs</a>,
  ],
  [
    'Recovering from a core update',
    'Several months, sometimes the next core update',
    <a key="6" href={SRC.coreUpdates} {...ext}>Google core update docs</a>,
  ],
  [
    'Lifting a manual action',
    'Several days or weeks after the reconsideration request',
    <a key="7" href={SRC.manual} {...ext}>Google manual actions help</a>,
  ],
];

export const post: BlogPost = {
  id: '221',
  slug: 'how-long-does-seo-take-2026-month-by-month-timeline',
  title: 'How Long Does SEO Take? A Month-by-Month Timeline for 2026',
  excerpt:
    'SEO takes 3 to 6 months for measurable results and 6 to 12 months or more for competitive terms. Here is the month-by-month timeline, Google’s own timings for crawling and indexing, and what speeds it up or slows it down.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Jun 7, 2026',
  dateModified: 'Nov 16, 2026',
  readTime: '12 min read',
  imageUrl: '/blog-images/how-long-does-seo-take-2026-month-by-month-timeline.webp',
  meta: {
    title: 'How Long Does SEO Take? Month-by-Month Timeline (2026)',
    description:
      'SEO takes 3–6 months for measurable results and 6–12+ months for competitive terms. A month-by-month table, Google’s own timings and Ahrefs 2025 data.',
  },
  keyTakeaways: [
    'SEO takes 3–6 months for measurable results and 6–12 months or more for competitive keywords. Low-competition terms can rank in 2–3 months; high-competition terms can take 2–3 years (Orbit Media).',
    'Google’s internal timings, shared by Gary Illyes in October 2026: about 20 hours to discover a new URL, about 30 days to recrawl one, 1–2 days for title changes, 3–6 months to recover from a core update.',
    'Most pages never reach the top 10: 1.74% of 1 million random new URLs did within a year in Ahrefs’ 2025 study. Of the pages that did, 40.82% got there within a month.',
    'Old pages dominate: 72.9% of top-10 results are over 3 years old and the average number one page is 5 years old (Ahrefs).',
    'AI Overviews add no separate clock. Google says a page only needs to be indexed and eligible for a snippet, so the AI Overview timeline is the normal SEO timeline.',
    'The five things that move your timeline: site age, authority, competition, content volume and technical health.',
  ],
  faqs,
  content: (
    <article>
      {/* Article, BreadcrumbList and FAQPage schema are emitted once by the blog route (src/app/blog/[slug]/page.tsx) from post.faqs. */}

      {/* ── DIRECT ANSWER ──────────────────────────────────────────────── */}
      <div
        style={{
          background: '#FFF7F0',
          border: '1.5px solid #F2D9C4',
          borderRadius: '12px',
          padding: '24px 28px',
          marginBottom: '32px',
        }}
      >
        <p style={{ fontWeight: 700, color: '#B23E13', marginBottom: '8px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Short answer
        </p>
        <p style={{ margin: 0, fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          SEO usually takes <strong>3 to 6 months</strong> to show measurable results and{' '}
          <strong>6 to 12 months or more</strong> to win competitive keywords. Low-competition,
          long-tail keywords can rank in <strong>2 to 3 months</strong>. High-competition head
          terms can take <strong>2 to 3 years</strong>. Five things decide where you land: how old
          your site is, how much authority (links) it has, how strong the competition is, how much
          useful content you publish, and how technically healthy the site is.
        </p>
        <p style={{ margin: '12px 0 0', fontSize: '13px', color: '#6b7280' }}>
          Sources: <a href={SRC.sel} {...ext}>Search Engine Land</a> (3–6 months),{' '}
          <a href={SRC.orbit} {...ext}>Orbit Media</a> (2–3 months, 4–12 months, 2–3 years),{' '}
          <a href={SRC.ahrefs} {...ext}>Ahrefs 2025</a>.
        </p>
      </div>

      <div className="not-prose my-8 rounded-2xl border border-[#E5DFD7] bg-[#FAFAF7] p-5 md:p-6">
        <p className="text-base text-slate-800 leading-relaxed mb-4">
          <strong>Want to know where your site sits on this timeline?</strong> We run SEO and AI
          search (ChatGPT, Perplexity, Google AI Overviews) as one program on a month-to-month
          retainer. Every monthly report shows your Google rankings next to how often AI assistants
          name you.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/services/ai-seo"
            className="inline-flex items-center rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white hover:bg-[#8F3210]"
          >
            See SEO and AI search services
          </a>
          <a
            href="/services/technical-seo"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50"
          >
            Technical SEO services
          </a>
        </div>
      </div>

      {/* ── INTRO ───────────────────────────────────────────────────────── */}
      <p>
        "How long does SEO take?" gets answered with "it depends" more than any other question in
        marketing. It does depend, but not on mystery. SEO is a chain of Google processes, each
        with a wait you can look up, followed by a contest against pages that have had years to
        collect links. Once you know both halves, you can tell which month you are in and whether
        your SEO is working.
      </p>
      <p>
        Every number on this page comes from a source we read on 16 November 2026: Google’s own
        documentation, the internal timings Google’s Gary Illyes shared in October 2026, Ahrefs’
        2025 ranking study, and the guides that rank at the top for this question. Where no
        reliable study exists, we say so instead of inventing a figure.
      </p>

      {/* ── MONTH BY MONTH TABLE ────────────────────────────────────────── */}
      <h2>The SEO timeline, month by month</h2>
      <p>
        This is what a steady SEO program looks like when the site starts in fair technical shape
        and targets a market with normal competition. A brand-new domain sits at the slow end of
        each row. An older site with existing rankings often moves faster.
      </p>
      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr style={headRow}>
              <th style={thCell}>When</th>
              <th style={thCell}>What gets done</th>
              <th style={thCell}>What you should see</th>
              <th style={thCell}>Source for the timing</th>
            </tr>
          </thead>
          <tbody>
            {monthRows.map(([when, work, see, src], i) => (
              <tr key={when} style={{ background: i % 2 === 0 ? '#fff' : '#FAFAF7' }}>
                <td style={{ ...td, fontWeight: 700, whiteSpace: 'nowrap' }}>{when}</td>
                <td style={td}>{work}</td>
                <td style={td}>{see}</td>
                <td style={{ ...td, fontSize: '13px' }}>{src}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        The work column is a typical program, not a guarantee. The timing column links to the
        source for each wait.
      </p>

      {/* ── GOOGLE TIMINGS ──────────────────────────────────────────────── */}
      <h2>How long Google itself takes: the timings it shared in 2026</h2>
      <p>
        On 2 October 2026, at Search Central Live Deep Dive Europe in Barcelona, Google’s Gary
        Illyes showed typical and slowest times for the steps between publishing a page and seeing
        it change in search. The figures came from Google’s internal analysis and were reported by{' '}
        <a href={SRC.illyesSer} {...ext}>Search Engine Roundtable</a> and{' '}
        <a href={SRC.illyesSej} {...ext}>Search Engine Journal</a> from attendee John Campbell’s
        recap. They are not published in Google’s documentation, and Google did not say how
        "typical" was measured.
      </p>
      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr style={headRow}>
              <th style={thCell}>Process</th>
              <th style={thCell}>Typical</th>
              <th style={thCell}>Slowest</th>
            </tr>
          </thead>
          <tbody>
            {googleRows.map(([proc, typical, slowest], i) => (
              <tr key={proc} style={{ background: i % 2 === 0 ? '#fff' : '#FAFAF7' }}>
                <td style={{ ...td, fontWeight: 600 }}>{proc}</td>
                <td style={td}>{typical}</td>
                <td style={td}>{slowest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Source: Gary Illyes, Search Central Live Deep Dive Europe, 2 Oct 2026, as reported by
        Search Engine Roundtable (5 Oct 2026) and Search Engine Journal (4 Oct 2026).
      </p>
      <p>Three things in that table change how you should read any SEO timeline:</p>
      <ol>
        <li>
          <strong>The machinery is fast; the contest is slow.</strong> Discovery takes hours and
          indexing takes about 1.5 hours in the typical case. The months come from competing with
          pages that already rank, not from Google being slow to notice you.
        </li>
        <li>
          <strong>Quality decides the slowest cases.</strong> Sitemap processing and indexing both
          list "never" as the slowest outcome, tied to quality. A thin page can wait forever.
        </li>
        <li>
          <strong>Delays stack.</strong> Illyes said the processes are linked. A canonical problem
          (1–3 weeks) on top of a recrawl wait (about 30 days) can cost you two months before
          ranking even starts.
        </li>
      </ol>
      <p>
        Google’s public documentation is consistent with this. Its recrawl guide says{' '}
        <a href={SRC.recrawl} {...ext}>crawling can take anywhere from a few days to a few weeks</a>
        , and requesting a crawl does not guarantee inclusion. Its{' '}
        <a href={SRC.coreUpdates} {...ext}>core update guide</a> says recovery could take several
        months.
      </p>

      {/* ── MONTH BY MONTH NARRATIVE ────────────────────────────────────── */}
      <h2>What happens in each phase</h2>

      <h3>Month 1: setup and quick fixes</h3>
      <p>
        Month one is diagnosis: a crawl of the whole site for broken links, duplicate pages and
        canonical errors, a check of Search Console coverage, keyword research mapped to specific
        pages, and a look at which queries competitors win that you do not.
      </p>
      <p>
        Some changes show this month. Rewritten titles on pages that already rank typically show in
        Google within 1 to 2 days. New content published now is usually found within a day but
        rarely ranks yet.
      </p>
      <p>
        <strong>What to watch:</strong> a short, ranked list of fixes. If your SEO partner cannot
        name the three biggest technical problems on your site within 30 days, that is a warning
        sign.
      </p>

      <h3>Months 2–3: first content and first long-tail rankings</h3>
      <p>
        Content production starts in earnest: one main page for your core service or topic and a
        set of supporting pages that link to it, each answering a question buyers search. Orbit
        Media puts low-competition keywords at <a href={SRC.orbit} {...ext}>2 to 3 months</a>, so
        this is where the first long-tail rankings appear. Schema such as{' '}
        <a href="/blog/how-to-show-up-in-google-ai-overviews-small-business">
          Article and FAQPage markup
        </a>{' '}
        goes in now too.
      </p>
      <p>
        <strong>What to watch:</strong> impressions in Search Console rising before clicks do. New
        pages usually enter at low positions and climb. That is the system working, not failing.
      </p>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          // Timeline review
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Where does your site sit on the 3–12 month timeline?
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Crawl problems, indexing gaps or thin pages can hold a site in month two for a year.
          Book a 30-minute call with founder Bhavesh Barot and we will walk through your live Search
          Console data, the keywords sitting just off page one, and what your competitors have that
          you do not.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Book a 30-minute SEO review →
          </a>
          <a
            href="/services/technical-seo"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Explore technical SEO services
          </a>
        </div>
      </div>

      <h3>Months 3–6: measurable results</h3>
      <p>
        This is the window where most guides, including{' '}
        <a href={SRC.sel} {...ext}>Search Engine Land’s</a>, put measurable SEO results. Long-tail
        queries move onto page one, branded searches may rise, and the first organic leads arrive.
        Ahrefs’ data explains why some pages jump and others stall: of the pages that reached the
        top 10 within a year, <a href={SRC.ahrefs} {...ext}>40.82% got there within one month</a>.
        A page that has not moved after several months usually needs more depth or more links.
      </p>
      <p>
        <strong>What to watch:</strong> filter Search Console to queries in positions 11 to 20.
        Those are your next page-one rankings, and a better title, a fuller answer or one internal
        link from a strong page can tip them over.
      </p>

      <h3>Months 6–12: significant, steady traffic</h3>
      <p>
        Orbit Media puts significant success at{' '}
        <a href={SRC.orbit} {...ext}>4 to 12 months</a>. By now earlier pages have climbed, new
        pages rank faster because the site has more topical depth, and mid-competition terms come
        within reach. For local businesses, map pack positions tend to settle. Featured snippets
        and{' '}
        <a href="/blog/geo-cost-small-business-2026">AI search citations</a> start to add up.
      </p>

      <h3>Years 2–3: competitive terms and compounding</h3>
      <p>
        High-competition keywords take{' '}
        <a href={SRC.orbit} {...ext}>2 to 3 years</a> in Orbit Media’s estimate, and Ahrefs’ age
        data shows why: <a href={SRC.ahrefs} {...ext}>72.9% of pages in Google’s top 10</a> are
        more than 3 years old, and the average number one result is 5 years old. Year-two work is
        about extending and defending: refreshing pages to hold positions, earning links to push
        pages from positions 5–10 into the top 3, and keeping pace with{' '}
        <a href="/blog/is-geo-replacing-seo-2026">how AI search is changing what a ranking is worth</a>
        .
      </p>

      {/* ── FACTORS ─────────────────────────────────────────────────────── */}
      <h2>5 things that change how long SEO takes</h2>
      <ol>
        <li>
          <strong>Site age and history.</strong> A new domain has no links and no record with
          Google. Ahrefs found only{' '}
          <a href={SRC.ahrefs} {...ext}>1.74% of 1 million random new URLs</a> reached the top 10
          within a year. Expect the slow end of every range on a new site.
        </li>
        <li>
          <strong>Authority.</strong> Relevant links from real sites are a large part of why old
          pages hold the top spots. Earning a handful of them on the pages that matter shortens the
          climb on competitive terms. Buying links in bulk does the opposite and can end in a
          manual action.
        </li>
        <li>
          <strong>Competition.</strong> "Web design" and "web design for restaurants in Austin"
          are different races. Orbit Media’s gap between 2–3 months for low-competition keywords
          and 2–3 years for high-competition ones is the single biggest swing on this page. Start
          narrow and specific.
        </li>
        <li>
          <strong>Content volume and quality.</strong> Ahrefs’ two samples tell the story: 1.74%
          of all random URLs reached the top 10 within a year, against 6.11% of non-empty English
          pages. Leaving out empty and non-English pages more than triples the share, which tells you how much of the web never had a chance. A connected group of pages on one topic
          also beats the same number of scattered posts.
        </li>
        <li>
          <strong>Technical health.</strong> Indexing’s slowest case is "months or never", and
          canonical conflicts add 1 to 3 weeks each time. Crawl errors, duplicate pages and slow
          templates delay every other step. For online stores, missing product schema and copied
          manufacturer descriptions are the usual culprits. Local businesses need a complete
          Google Business Profile, which our{' '}
          <a href="/cleveland/seo">Cleveland</a>, <a href="/nashville/seo">Nashville</a> and{' '}
          <a href="/charlotte/seo">Charlotte</a> SEO programs include.
        </li>
      </ol>

      {/* ── SITUATIONS ──────────────────────────────────────────────────── */}
      <h2>How long SEO takes in specific situations</h2>
      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr style={headRow}>
              <th style={thCell}>Situation</th>
              <th style={thCell}>Realistic timeline</th>
              <th style={thCell}>Source</th>
            </tr>
          </thead>
          <tbody>
            {situationRows.map(([sit, time, src], i) => (
              <tr key={sit} style={{ background: i % 2 === 0 ? '#fff' : '#FAFAF7' }}>
                <td style={{ ...td, fontWeight: 600 }}>{sit}</td>
                <td style={td}>{time}</td>
                <td style={{ ...td, fontSize: '13px' }}>{src}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Local SEO is missing on purpose: we found no reliable public study that measures it, and
        the agency figures that rank for it do not cite data.
      </p>

      {/* ── AI SEARCH ───────────────────────────────────────────────────── */}
      <h2>How AI search fits into the SEO timeline</h2>
      <p>
        AI answers now sit above the results for this exact question. When we pulled Google US
        results for six versions of it on 16 November 2026 ("how long does seo take", "how long
        does seo take to work", "seo timeline" and three others), all six showed an AI Overview and
        none showed a featured snippet. The AI Overview for the main query cited Reddit, Search
        Engine Land, Orbit Media and Squarespace, among others.
      </p>
      <p>
        That does not add a new clock. Google’s{' '}
        <a href={SRC.aiFeatures} {...ext}>AI features documentation</a> says there are no
        additional requirements or special optimizations to appear in AI Overviews or AI Mode. A
        page must be indexed and eligible to show with a snippet, and normal SEO best practices
        still apply. So the AI Overview timeline is the indexing and ranking timeline above.
      </p>
      <p>What AI search does change:</p>
      <ul>
        <li>
          <strong>Being quotable matters more.</strong> A clear 40 to 60 word answer near the top
          of a page is easy to lift into an AI answer once the page is eligible.
        </li>
        <li>
          <strong>Clicks per ranking can drop.</strong> When the answer sits above the links, a
          page-one position earns fewer visits than it used to. Track impressions and citations,
          not only clicks.
        </li>
        <li>
          <strong>Other assistants have their own sources.</strong> ChatGPT and Perplexity pick
          sources differently from Google. Our guide to{' '}
          <a href="/blog/how-to-get-chatgpt-to-recommend-your-business-2026">
            getting named by ChatGPT, Perplexity and Google AI Overviews
          </a>{' '}
          covers that side.
        </li>
      </ul>

      {/* ── WORKING ─────────────────────────────────────────────────────── */}
      <h2>How to tell if your SEO is working before traffic arrives</h2>
      <p>
        The most common mistake is judging SEO by traffic before month six. These four signals in
        Search Console move first:
      </p>
      <ol>
        <li>
          <strong>Total impressions rising month over month.</strong> Google is showing your pages
          more often, even before people click.
        </li>
        <li>
          <strong>Average position improving.</strong> Movement toward page one without traffic
          still means you are climbing.
        </li>
        <li>
          <strong>Indexed pages growing.</strong> Every indexed page is another chance to rank. A
          falling count points to a crawl or canonical problem.
        </li>
        <li>
          <strong>More queries in positions 11 to 20.</strong> This list is your pipeline of
          next page-one rankings.
        </li>
      </ol>
      <p>
        If all four are moving the right way, clicks usually follow. A{' '}
        <a href="/ai-visibility-checker">free AI visibility check</a> answers the same question for
        ChatGPT, Perplexity and Google AI Overviews, which none of these Search Console signals
        cover.
      </p>

      {/* ── WHAT ELSE RANKS ─────────────────────────────────────────────── */}
      <h2>What the other top results say</h2>
      <p>
        We read the pages Google ranks highest for "how long does SEO take" in the US. They agree
        on the core range and differ on detail:
      </p>
      <ul>
        <li>
          <a href={SRC.sel} {...ext}>Search Engine Land</a>: three to six months for measurable
          results, longer in competitive industries.
        </li>
        <li>
          <a href={SRC.orbit} {...ext}>Orbit Media</a>: 2–3 months for low-competition keywords,
          4–12 months for significant success, 2–3 years for high-competition keywords. The most
          specific split by competition among the top results.
        </li>
        <li>
          <a href={SRC.ahrefs} {...ext}>Ahrefs</a>: the only large dataset, updated in May 2025.
          Many pages still quote its 2017 figure of 5.7%; the current number is 1.74%.
        </li>
        <li>
          <strong>Reddit r/SEO</strong>: the first organic result for the main query on 16 November
          2026, a three-year-old thread of practitioner opinions rather than data.
        </li>
      </ul>
      <p>
        What most of them leave out is Google’s own process timings from October 2026, which is
        why we put them in a table above.
      </p>

      {/* ── COST ────────────────────────────────────────────────────────── */}
      <h2>What the timeline means for your SEO budget</h2>
      <p>
        Months one to five are mostly investment and months six onward are where it pays back, so
        judge any plan on at least a year. Our guide to the{' '}
        <a href="/blog/seo-cost-small-business-2026">cost of SEO for small businesses</a> covers
        market price ranges. If an SEO program has run for six months and the four signals above
        are flat, an outside read from{' '}
        <a href="/services/seo-consulting">SEO consulting</a> is worth more than another rank
        report.
      </p>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <div className="not-prose mt-14 rounded-2xl border border-[#E5DFD7] bg-[#FAFAF7] p-6 md:p-8">
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Talk to the founder
        </p>
        <p className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
          Bring your site. We will tell you where you are on the timeline.
        </p>
        <p className="text-slate-700 text-base leading-relaxed mb-5">
          On a free 30-minute call, we look at your Search Console data live and tell you which
          month of this timeline you are in, what is slowing you down, and what to fix
          first. If you are building a new site, every FactoryJet site ships with schema, fast Core
          Web Vitals and clean site structure already in place, so you skip most of the technical
          ramp-up.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white hover:bg-[#8F3210]"
          >
            Book a free 30-minute call
          </a>
          <a
            href="/services/ai-seo"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50"
          >
            See SEO and AI search services
          </a>
        </div>
      </div>

      {/* ── AUTHOR ──────────────────────────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'flex-start',
          marginTop: '56px',
          padding: '28px',
          background: '#f9fafb',
          borderRadius: '12px',
          border: '1px solid #f0ede9',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#B23E13',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '20px',
          }}
        >
          B
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px', color: '#1a1a1a' }}>
            Bhavesh Barot
          </p>
          <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
            Founder of FactoryJet. 500+ businesses served across web, commerce and AI work, 12+
            years in web development and e-commerce. Runs SEO and AI search programs where every
            report shows rankings next to AI assistant mentions.
          </p>
        </div>
      </div>
    </article>
  ),
};
