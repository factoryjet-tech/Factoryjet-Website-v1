import React from 'react';
import type { BlogPost } from '../data.types';

const faqs = [
  {
    q: 'What does SEO stand for?',
    a: 'Search engine optimization. It means making a page findable, understandable and trustworthy enough that a search engine shows it to someone who typed a relevant question. In 2026 "search engine" includes AI Overviews and chatbots, which draw on the same index Google uses for the blue links.',
  },
  {
    q: 'What is SEO in simple terms?',
    a: 'It is three jobs on one page: make sure Google can fetch and store it, make sure Google understands what question it answers, and give Google reasons outside your own site to trust it. Everything sold under the SEO label is one of those three with a different name attached.',
  },
  {
    q: 'What is an example of SEO?',
    a: 'A plumber rewrites one service page so the title, H1 and first 60 words say "emergency drain repair in Denver", adds eight questions his phone calls actually get, and links to that page from three older posts. Two months later the page ranks for the query and the calls arrive. That whole sequence is SEO.',
  },
  {
    q: 'Is SEO free or paid?',
    a: 'The placement is free. The work is not. You pay in your own hours or in someone else\'s invoice, and unlike ads the result keeps working after the spend pauses. That is the real trade: ads cost money and stop instantly, SEO costs time and compounds slowly.',
  },
  {
    q: 'Is SEO the same as Google Ads?',
    a: 'No. Google Ads buys placement immediately and stops when the budget stops. SEO earns placement slowly and keeps working after the spend pauses. They are different budget lines with different timelines. Many businesses run ads for immediate leads while SEO compounds underneath.',
  },
  {
    q: 'How is SEO different from digital marketing?',
    a: 'Digital marketing is the whole category: ads, email, social, content, SEO. SEO is specifically the organic search slice, earning visibility in search results rather than buying it. A digital marketing plan can exist without SEO. SEO cannot do a marketing plan\'s whole job.',
  },
  {
    q: 'Do I actually need SEO for a small business?',
    a: 'If customers search before they buy from you, yes. If your leads come entirely from referral, trade shows or outbound, SEO is optional and probably not your first spend. Test it: search the thing a customer would type. If competitors are there and you are not, that is demand you are handing over.',
  },
  {
    q: 'Can I do SEO myself?',
    a: 'The first ten hours, yes: Search Console, rewriting your main service page, adding real FAQs, Google Business Profile, internal links. Hand the template-level work (site speed, canonicals, schema in the layout) to a developer. Hire an agency when you need consistent original content or the technical debt exceeds a weekend.',
  },
  {
    q: 'How much does SEO cost for a small business in the US?',
    a: 'It ranges from nothing but your time to five figures a month, and the tier name tells you nothing. Price against the specific URL that has to win and how broken it currently is. A rebuilt service page plus two supporting articles usually beats a large content calendar for a company under $5M.',
  },
  {
    q: 'How long does SEO take to work?',
    a: 'Fundamentals ship in a week. Long-tail and local movement typically appears in two to three months. Competitive US commercial terms usually take three to six months of consistent publishing and earned references. Anyone promising page one in 30 days on a head term is selling a screenshot.',
  },
  {
    q: 'Is SEO dead now that Google has AI Overviews?',
    a: 'No, but it moved. AI Overviews absorb thin informational queries, so generic "what is" content earns fewer clicks than it did. Commercial, comparison and local queries still send traffic, and AI Overviews cite pages that already rank. The work that earns a citation is the work that earned a ranking.',
  },
  {
    q: 'What is the difference between SEO, GEO, AEO and AIO?',
    a: 'SEO is the established term. GEO, AEO and AIO are newer labels for optimizing toward AI-generated answers. Google has said its AI features use the same index and require no special schema, so in practice the underlying work is identical. Treat separate GEO products with skepticism.',
  },
  {
    q: 'What are the three main types of SEO?',
    a: 'Technical SEO (can the page be crawled, rendered and indexed), on-page SEO (does the page clearly answer one query, in the HTML), and off-page SEO (does anything outside your site corroborate you). Some lists say four by splitting local SEO out. Local is not a fourth discipline, it is those same three applied to a physical service area.',
  },
  {
    q: 'What is technical SEO?',
    a: 'The work that makes a page fetchable and indexable: server-rendered HTML, correct canonical tags, a clean sitemap, no accidental noindex, controlled crawl paths, and page speed at the template level. It is a floor, not a strategy. A perfectly fast page with no answer on it still ranks for nothing.',
  },
  {
    q: 'What is on-page SEO?',
    a: 'Everything on the URL itself that helps a search engine understand it: title, H1, the first 60 words, subheadings that mirror real questions, FAQs marked up as FAQPage in server HTML, descriptive internal links, and image alt text. One primary query per page, always.',
  },
  {
    q: 'What is off-page SEO?',
    a: 'Signals from outside your site: editorial links, brand mentions, reviews, a complete Google Business Profile, trade and supplier listings. For a small US firm, ten genuine references from customers and industry bodies are worth more than a bought package of several hundred directory links.',
  },
  {
    q: 'What is local SEO and do I need it?',
    a: 'Local SEO targets searches with geographic intent: "near me", a city name, or an implied location. You need it if you have an office, a warehouse, or a service area you genuinely cover. A fully remote ecommerce brand with no local intent should skip it and put the hours into product and category pages.',
  },
  {
    q: 'Do keywords still matter in 2026?',
    a: 'Yes, as intent rather than as strings to repeat. Search engines match meaning, so stuffing an exact phrase does nothing. What matters is choosing one query per page, using its natural phrasing in the title and first paragraph, and not splitting one intent across three near-duplicate URLs.',
  },
  {
    q: 'Do I need a blog to do SEO?',
    a: 'Only if each post has a job: a question your buyer actually asks, an answer specific enough to be quoted, and an internal link to the page that sells. A blog that never links to a service page is publishing, not marketing. Twenty aimless posts lose to two aimed ones.',
  },
  {
    q: 'Can ChatGPT do my SEO?',
    a: 'It can draft an outline, generate question variants, and edit your own writing hard. It cannot open your Search Console, see that your money page is "Discovered, currently not indexed", or tell you your blog and your service page describe two different companies. Treat it as a junior writer with no login.',
  },
  {
    q: 'How do I know if my SEO agency is doing anything?',
    a: 'Ask for four numbers: indexed money URLs, the queries that precede conversions, cost per organic lead, and time to first ranked commercial page. Ask which URL they are optimizing this month. An agency that answers with impressions and a rank-tracking screenshot has told you the answer.',
  },
  {
    q: 'What is the biggest SEO mistake small businesses make?',
    a: 'Publishing. They ship thirty posts that never mention the service, never link to it, and never answer a question a paying customer typed. The archive looks productive, and Search Console shows the homepage ranking for the company\'s own name and nothing else.',
  },
  {
    q: 'What should I fix first, technical or content?',
    a: 'Technical first only if Google cannot index or render your money page. If Search Console shows it indexed and serving, rewrite the title, H1 and opening answer before rebuilding the stack. Speed work belongs on the template. A 40-page technical audit that never ships is not a fix.',
  },
  {
    q: 'How does FactoryJet approach SEO for US small businesses?',
    a: 'We start from the URL that should make the phone ring, then write the cluster that supports it. Technical work is whatever that URL needs to get indexed and extracted. We do not sell a secret AI ranking factor, and we do not publish a package grid, because the honest price depends on which page has to win.',
  },
];

export const post: BlogPost = {
  id: '426',
  slug: 'what-is-seo-small-business-2026',
  title: 'What SEO Actually Is, Explained for the Person Paying for It',
  excerpt:
    'Every page ranking for "what is seo" is written for someone who wants to do SEO. This one is written for the owner who has to pay for it, sit across from an agency, and decide whether the invoice is honest.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Aug 25, 2026',
  readTime: '13 min read',
  imageUrl: '/blog-images/what-is-seo-small-business-2026.webp',
  imageAlt:
    'A desk with a laptop showing search results beside a printed agency proposal, representing a business owner deciding what SEO actually buys',
  meta: {
    title: 'What Is SEO? A Plain Explanation for Business Owners (2026)',
    description:
      'What SEO is, in plain terms: three jobs on one page, what it costs, how long it takes, and the four numbers that tell you whether yours is working.',
  },
  keyTakeaways: [
    'SEO is three jobs on one URL: get it crawled, get it understood, get it trusted. Everything sold as SEO is a subcategory of one of those three.',
    'Google has confirmed its AI features use the same index as the blue links, so GEO and AEO are mostly a new invoice line for the same work.',
    'If a proposal cannot name the URL it is optimizing, it is not an SEO proposal. It is a content subscription.',
    'The four numbers that matter: indexed money URLs, queries that already convert, cost per organic lead, and time to first ranked page. Impressions are not on that list.',
    'You can do the first ten hours yourself. The point of hiring is cadence and technical debt, not access to a secret.',
  ],
  faqs,
  content: (
    <article>
      <div
        style={{
          background: 'linear-gradient(135deg, #fff7f0 0%, #fff3e8 100%)',
          border: '1.5px solid #FF6B0030',
          borderRadius: '12px',
          padding: '24px 28px',
          marginBottom: '40px',
        }}
      >
        <p
          style={{
            fontWeight: 700,
            color: '#FF6B00',
            marginBottom: '8px',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Quick Answer
        </p>
        <p style={{ margin: 0, fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          SEO (search engine optimization) is the work of making a specific page findable,
          understandable and trustworthy enough that a search engine will show it to someone who
          typed a question you can answer. It has three parts: technical work so the page can be
          crawled and indexed, content work so the page clearly answers one query, and authority
          work so other sites signal the page is credible. For a US small business, SEO is not a
          monthly report. It is a named URL that ranks for a query a paying customer types.
        </p>
      </div>

      <p>
        Nobody sells you a definition of SEO. They sell you a retainer and hope you never ask what
        the letters mean. Here is the definition, the parts you are actually buying, and the four
        numbers that tell you whether it is working.
      </p>

      <h2 id="definition">The definition, in one paragraph you can repeat in a meeting</h2>
      <p>
        Search engines keep an index, which is a copy of the web they can search instantly. SEO is
        everything you do so that your page gets into that index, so the index correctly understands
        what your page is about, and so that when someone asks a question your page answers, the
        engine picks yours over the other results.
      </p>
      <p>That is it. Three jobs. Crawled, understood, trusted.</p>
      <p>
        Every service on every SEO pricing page in America is one of those three wearing a different
        name:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">What it gets called</th>
              <th className="p-3 text-left border border-gray-700">Which of the three jobs</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">
                Technical SEO, crawl budget, indexation, Core Web Vitals, canonicals
              </td>
              <td className="p-3 border border-gray-200 font-semibold">Crawled</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">
                On-page SEO, keyword research, content, schema, internal linking, FAQs
              </td>
              <td className="p-3 border border-gray-200 font-semibold">Understood</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">
                Link building, digital PR, citations, reviews, brand mentions
              </td>
              <td className="p-3 border border-gray-200 font-semibold">Trusted</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        If someone proposes work you cannot slot into one of those three rows, ask which one it is.
        The answer is informative either way.
      </p>

      <h2 id="acronym">What SEO stands for, and why the acronym is now slightly wrong</h2>
      <p>
        SEO stands for <strong>search engine optimization</strong>. The acronym was coined when
        "search engine" meant a page of ten blue links.
      </p>
      <p>
        In 2026 the same query returns an AI Overview above the links, a People Also Ask box, a Map
        Pack if there is local intent, and increasingly never returns to Google at all, because the
        person asked ChatGPT, Gemini, Claude or Perplexity instead.
      </p>
      <p>
        You will see this sold back to you as new acronyms: GEO (generative engine optimization),
        AEO (answer engine optimization), AIO. Some of it is a real shift in emphasis. Most of it is
        a new invoice line.
      </p>
      <p>
        Here is the load-bearing fact:{' '}
        <strong>
          Google has stated there is no separate ranking system and no special schema for its AI
          features. They use the same index.
        </strong>{' '}
        A page that is crawlable, specific and quotable is the same page that ranks and the same
        page a chatbot cites. That is not a marketing claim, it is Google's own documentation, and
        it is the reason you should be suspicious of any product that promises AI visibility as a
        separate purchase. We wrote the longer version in{' '}
        <a href="/blog/how-to-show-up-in-google-ai-overviews-small-business">
          how to show up in Google AI Overviews
        </a>
        , and if you want to see what models currently say about your business, the{' '}
        <a href="/ai-visibility-checker">AI visibility checker</a> will tell you in about a minute.
      </p>
      <p>The acronym is dated. The work is not.</p>

      <h2 id="who-google-quotes">Who Google quotes for this today</h2>
      <p>
        Pulled live from Google US, logged out, on 25 Aug 2026. The AI Overview fires on this query.
        It cites seven sources:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Moz, the beginner's guide.</li>
        <li>Search Engine Land.</li>
        <li>YouTube.</li>
        <li>Wikipedia.</li>
        <li>Semrush.</li>
        <li>Yoast, the plugin vendor.</li>
        <li>Optimizely.</li>
      </ul>
      <p>
        Organic underneath the overview is a slightly different set: Google's own developer starter
        guide at number one, Reddit at number two, Michigan Technological University at number
        three, then Moz, Search Engine Land, the Digital Marketing Institute, Wikipedia and YouTube.
      </p>
      <p>
        <strong>factoryjet.com appears in none of them.</strong> Neither does any other services
        agency. Search engines, encyclopedias, universities, forums and tool vendors own this query
        end to end.
      </p>
      <p>
        One detail worth more than the ranking list: we pulled "what is seo", "what does seo stand
        for" and "seo meaning" separately, and Google returned the{' '}
        <strong>identical seven AI Overview sources for all three</strong>. Google treats the whole
        cluster as one answer. That is the practical argument against building three pages for what
        is obviously one question, which is the single most common way a small site competes with
        itself.
      </p>
      <p>
        The People Also Ask box under the same query, same day: "What is SEO and how does it work?",
        "How to do SEO for beginners?", "Can you do SEO by yourself?", "What is an example of SEO?",
        "Can ChatGPT do SEO?" and "What are the top 5 SEO tools?"
      </p>
      <p>
        That list is the opening. Everyone who ranks here is explaining SEO to someone who wants to{' '}
        <em>do</em> it. Nobody is explaining it to the person who has to <em>pay</em> for it, sit
        across from an agency, and decide whether the invoice is honest. That reader is the one who
        becomes a customer.
      </p>

      <h2 id="three-jobs">The three jobs, in the order they break</h2>

      <h3 id="crawled">1. Crawled, meaning can Google fetch and store the page?</h3>
      <p>
        This is binary and it is where most small sites actually fail. A page that is not in the
        index cannot rank, cannot be quoted in an AI Overview, and cannot be recommended by a
        chatbot. No amount of writing fixes it.
      </p>
      <p>
        Open Google Search Console, paste your most commercially important URL into the inspection
        tool, and read the status. "Crawled, currently not indexed" and "Discovered, currently not
        indexed" mean stop. Nothing downstream matters until that clears. "URL is on Google" means
        proceed.
      </p>
      <p>
        The usual causes, in order of how often we see them on audits: a <code>noindex</code> left
        on from a staging build, a page that renders only in client-side JavaScript so the HTML
        Google fetches is empty, a canonical tag pointing at a different URL, and index bloat, where
        400 parameter and filter URLs drown the 12 pages you actually sell from.
      </p>

      <h3 id="understood">2. Understood, meaning does the page answer one query in the HTML?</h3>
      <p>Google does not read your page the way a person does. It matches text against an intent.</p>
      <p>
        A page is understood when a stranger reading only the title, the H1 and the first 60 words
        can say what it is, who it is for, and what happens next. If your first screen says "We are
        a full-service digital partner delivering end-to-end solutions," the page is not understood,
        by a person or by a model.
      </p>
      <p>
        Concretely, this is: one primary query per URL, that query in the title and the first
        paragraph, subheadings that match the questions people actually ask, 8 to 12 real buyer FAQs
        marked up as <code>FAQPage</code>{' '}
        <strong>in the HTML the server sends</strong>, not injected by JavaScript after load, and
        internal links that use descriptive anchor text.
      </p>
      <p>
        The single most common self-inflicted wound here is cannibalization: three near-identical
        posts targeting one query cluster with one intent. You end up competing with yourself and
        none of the three wins. The identical AI Overview source set above is the evidence.
      </p>

      <h3 id="trusted">3. Trusted, meaning does anything outside your site corroborate you?</h3>
      <p>Trust is the slowest of the three and the one most heavily mis-sold.</p>
      <p>
        What counts: editorial mentions from real sites, a complete and consistent Google Business
        Profile if you serve a physical area, reviews, supplier and trade-association listings, and
        being named alongside your category by people who are not you.
      </p>
      <p>
        What does not count: a bag of 400 directory links marketed as "DR 40", guest posts on sites
        with no readers, and reciprocal link schemes. For a US firm under $5M, ten genuine
        references from customers, suppliers and chambers of commerce outperform any package you can
        buy.
      </p>

      <h2 id="what-seo-is-not">What SEO is not</h2>
      <p>
        <strong>It is not a monthly report.</strong> A report is evidence of work, not the work. If
        the deliverable each month is a PDF of impressions, you are buying a PDF.
      </p>
      <p>
        <strong>It is not a plugin.</strong> Yoast, RankMath and Shopify SEO apps emit title tags
        and sitemaps. They are plumbing. They cannot choose the query, write the answer, or decide
        which of your URLs should win.
      </p>
      <p>
        <strong>It is not paid ads.</strong> Google Ads buys placement instantly and stops the
        moment you stop paying. SEO compounds slowly and keeps working. Different budget line,
        different timeline, different skill. Businesses that need leads this quarter should run ads
        while SEO compounds, not instead of it.
      </p>
      <p>
        <strong>It is not a blog.</strong> A blog is one tactic. A blog whose posts never link to a
        service page is a magazine you are funding.
      </p>
      <p>
        <strong>It is not dead.</strong> That is the most common question under this one, and we
        answered it with the actual click data in{' '}
        <a href="/blog/is-seo-dead-2026-ai-search-data">is SEO dead in 2026</a>. Short version: thin
        "what is" content is being absorbed by AI Overviews, commercial, local and comparison
        queries still send clicks, and models cite pages that already rank.
      </p>

      <h2 id="cost">What SEO costs, honestly</h2>
      <p>Prices in this market are set by what you are buying, not by a tier name.</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>DIY, first 10 hours:</strong> nothing but your time. Search Console, one rewritten
          money page, FAQs, internal links, Google Business Profile.
        </li>
        <li>
          <strong>A freelancer or contractor:</strong> typically a few hundred to a couple of
          thousand dollars a month in the US, best used against one defined page and one defined
          query.
        </li>
        <li>
          <strong>An agency retainer:</strong> meaningfully more, and worth it when you need
          original content at a cadence, technical debt cleared, or a full cluster built.
        </li>
      </ul>
      <p>
        We do not publish a package grid, because the honest answer depends on which URL has to win
        and how broken it currently is. The ranges and what changes them are in{' '}
        <a href="/blog/seo-cost-small-business-2026">what SEO costs a small business</a>, and if
        what you want first is a diagnosis rather than a retainer,{' '}
        <a href="/blog/seo-audit-cost-2026">SEO audit cost</a> covers that separately.
      </p>
      <p>
        One rule that survives every budget:{' '}
        <strong>spend on the page that makes money before you spend on the twentieth blog post.</strong>{' '}
        A rebuilt service page plus two supporting articles beats a 4,000-word content calendar for
        almost every business under $5M.
      </p>

      <h2 id="how-long">How long it takes</h2>
      <p>You can ship the fundamentals in a week. Rankings are slower.</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Week 1:</strong> indexation confirmed, title, H1 and opening rewritten, Search
          Console conversion event live.
        </li>
        <li>
          <strong>Weeks 2 to 4:</strong> FAQs on the money page, internal links pointed at it,
          Google Business Profile completed.
        </li>
        <li>
          <strong>Months 2 to 3:</strong> first movement on long-tail and local queries. Map Pack
          moves fastest.
        </li>
        <li>
          <strong>Months 3 to 6:</strong> competitive US commercial terms, if you are publishing and
          earning references consistently.
        </li>
        <li>
          <strong>Month 6 and beyond:</strong> compounding, the point where the pages you shipped in
          month two start ranking without further attention.
        </li>
      </ul>
      <p>
        Anyone promising page one in 30 days on a competitive term is selling you a screenshot. The
        month-by-month version is in{' '}
        <a href="/blog/how-long-does-seo-take-2026-month-by-month-timeline">how long SEO takes</a>.
      </p>

      <h2 id="four-numbers">The four numbers that tell you it is working</h2>
      <p>Most SEO reporting is designed to be un-falsifiable. These four are not.</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Indexed money URLs.</strong> How many of the pages you actually sell from are in
          the index and serving. If this is not going up, nothing else counts.
        </li>
        <li>
          <strong>Queries that already convert.</strong> Not impressions. The specific search terms
          in Search Console that precede a form fill or a call.
        </li>
        <li>
          <strong>Cost per organic lead.</strong> Total SEO spend divided by leads attributable to
          organic. Compare it to your paid cost per lead. If you have never calculated it, you
          cannot tell whether the retainer is working.
        </li>
        <li>
          <strong>Time to first ranked page.</strong> How long from kickoff to a URL sitting in the
          top 10 for a query with commercial intent. This is the number that exposes an agency that
          publishes without shipping.
        </li>
      </ul>
      <p>If your current provider cannot produce all four, that is the finding.</p>

      <h2 id="this-week">What to do this week</h2>
      <p>
        If you own a business and you have read this far, the honest next step is not to hire
        anyone.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Open Google Search Console. If you do not have it, that is the first 45 minutes.</li>
        <li>
          Inspect the one URL you would most like a customer to land on. Confirm it is indexed.
        </li>
        <li>
          Rewrite its title, H1 and first 60 words so a stranger, and a language model, can quote
          them.
        </li>
        <li>Add 8 to 12 questions your sales calls actually get, answered in 40 to 75 words each.</li>
        <li>Link to that page from every relevant article you have already published.</li>
      </ul>
      <p>
        That is the whole 80/20, and the detailed version with time costs on each step is in{' '}
        <a href="/blog/seo-tips-small-business-2026">
          SEO tips that actually move a small business
        </a>
        .
      </p>
      <p>
        When you have done that and want the cluster built properly, meaning original content at a
        cadence, technical debt cleared, and a writer who has been on a sales call,{' '}
        <a href="/services/small-business-seo">small business SEO</a> is the page to read next. Not
        a pricing grid. If you would rather start with a diagnosis of what is currently broken,{' '}
        <a href="/services/seo-audit">an SEO audit</a> is the smaller first step.
      </p>
    </article>
  ),
};
