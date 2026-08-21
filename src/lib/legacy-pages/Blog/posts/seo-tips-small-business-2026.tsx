import React from 'react';
import type { BlogPost } from '../data.types';

const faqs = [
  {
    q: 'What SEO tips actually work for a small business in 2026?',
    a: 'The ones that change a money page, not the ones that decorate a blog. Fix Google Search Console, rewrite the title and first 60 words on the page you sell from, answer real buyer questions on that page, and link to it from every relevant article. Tool dashboards and 40-post calendars do not move a sub-$5M company.',
  },
  {
    q: 'What is the 80/20 rule for SEO?',
    a: 'Roughly 20 percent of the work produces 80 percent of the result: indexation, one commercial page written for the query you sell, internal links into that page, and a conversion event Search Console can see. The other 80 percent is reports, plugins, and content that never touches a page a customer would buy from.',
  },
  {
    q: 'Can I do SEO myself for a small business?',
    a: 'Yes for the first 10 hours: Search Console, titles, FAQs, Google Business Profile if you serve a place, and internal links. Hand a developer the template-level work (speed, canonicals, schema on the layout). Hire an agency when you need original content at a cadence, or when the technical debt is bigger than a weekend.',
  },
  {
    q: 'Is SEO dead now that Google has AI Overviews?',
    a: 'No. AI Overviews intercept some informational queries. Commercial and local queries still send clicks. ChatGPT, Gemini, Claude, and Perplexity also quote pages Google already trusts. Thin "what is" posts get absorbed. Service pages, comparisons, and specific how-tos still get cited. We cover the data in a separate post.',
  },
  {
    q: 'Can ChatGPT do my SEO?',
    a: 'It can draft an outline, a title variant list, and a first FAQ pass. It cannot see your crawl errors, your converting URLs, or which page Google sits you on. In a live test, ChatGPT Search cites indexed pages with clear answers. It does not invent rankings for a site that is not in the index.',
  },
  {
    q: 'How long does SEO take for a small business?',
    a: 'You can ship the 80/20 in a week. Rankings on competitive US terms usually take 3 to 6 months of compounding pages and links. Local pack moves faster if the Google Business Profile is complete and the site is indexable. Anyone promising page one in 30 days on "seo tips" is selling a screenshot.',
  },
  {
    q: 'How much should a small business spend on SEO?',
    a: 'Budget against the page that makes money, not against a retainers menu. A US firm under $5M typically gets more from one rebuilt service page plus two supporting articles than from a 4,000-word blog calendar. We do not publish package prices. Scope it against the keyword and the current site.',
  },
  {
    q: 'Do I need a blog for SEO?',
    a: 'Only if each post has a job: a question your buyer asks, an internal link to a service page, and an answer specific enough to cite. A blog that never links to /services/small-business-seo is a magazine, not a growth channel. This post exists to rank and to send people to that page.',
  },
  {
    q: 'What should I fix first, content or technical SEO?',
    a: 'Technical first only when Google cannot index or render the money page. If Search Console shows the URL as indexed and serving, rewrite the title, H1, and opening answer before you rebuild the stack. Speed work belongs on the template, not as a 40-page audit that never ships.',
  },
  {
    q: 'Does local SEO still matter if I sell nationwide?',
    a: 'If you have an office, a warehouse, or a city you actually serve, yes. Google Business Profile still feeds Map Pack and a lot of "near me" answers. If you are a fully remote ecommerce brand with no local intent, skip GBP theatre and put the hours into product and category pages instead.',
  },
  {
    q: 'How do I get cited in Google AI Overviews?',
    a: 'Google says there is no special AI ranking factor. Pages that get cited tend to answer the question in the first paragraph, use short factual sentences, mark FAQs up, and already rank for related queries. Write extractable answers. Do not chase a proprietary GEO plugin.',
  },
  {
    q: 'Will ChatGPT, Gemini, or Claude recommend my business?',
    a: 'They recommend businesses they can fetch and corroborate. That means a crawlable site, a clear "who we are" entity, and pages that answer the query without hedging. If you rank for nothing on the query, you will not be the cited source. Index first, then write the answer they can lift.',
  },
  {
    q: 'Are SEO plugins enough on WordPress or Shopify?',
    a: 'A plugin can emit a title tag and a sitemap. It cannot choose the query, write the answer, or decide which URL should win. Treat Yoast, RankMath, or Shopify SEO apps as plumbing. The work is still the page a human and a model both need to quote.',
  },
  {
    q: 'How many keywords should one page target?',
    a: 'One primary query, plus the phrasings that are the same intent. "seo tips", "seo optimization tips", and "tips seo" are one cluster, not three pages. Split only when the searcher wants a different job: cost, vs, or a city. Cannibalising yourself with near-duplicate posts is how small sites stall.',
  },
  {
    q: 'Should I hire an SEO agency or a freelancer?',
    a: 'Hire for a defined page and a defined query, with access to Search Console. Avoid retainers that report impressions and never ship a URL. A good freelancer can do the 80/20. An agency earns the fee when you need a cluster, technical debt, and a writer who will not paste the same tips as Semrush.',
  },
  {
    q: 'What SEO metrics should a small business owner watch?',
    a: 'Indexed money URLs, queries that already convert, and the one form or call event you actually want. Rank tracking on vanity head terms is a spectator sport. If Search Console cannot see a conversion from organic, you are optimizing a brochure, not a business.',
  },
  {
    q: 'Do backlinks still matter in 2026?',
    a: 'Yes, as editorial mentions from real sites, not as a bag of directory links. For a small US firm, ten genuine references from suppliers, chambers, and customers beat a 400-link "SEO package". Earn them with a page worth citing, then ask. Do not buy them.',
  },
  {
    q: 'How is ecommerce SEO different from lead-gen SEO?',
    a: 'Ecommerce lives or dies on collection and product URLs, crawl budget, and filters that do not explode into duplicates. Lead-gen lives on one or two service pages and the questions a buyer asks before a call. Same discipline, different money URL. Do not copy a Shopify checklist onto a consulting site.',
  },
  {
    q: 'What is the biggest SEO mistake small businesses make?',
    a: 'Publishing. They publish 30 posts that never mention the service, never link to it, and never answer a question a paying customer typed. The archive looks busy. Search Console shows the homepage ranking for the brand name and nothing else.',
  },
  {
    q: 'What are the best SEO strategies?',
    a: 'Google\'s AI Overview for "seo tips" compresses them to four: the right search terms, helpful content, page structure, and technical basics. For a small US business the strategy is narrower: pick one money URL, make it indexable, answer the buyer on that URL, and link to it. Tools are optional. The URL is not.',
  },
  {
    q: 'How do I improve my SEO skills?',
    a: 'Skill is hours on one site, not another course. Read Search Console weekly, rewrite one title, and compare what ranked against what you published. The PAA under "seo tips" asks this because people collect tips and never ship a URL. Ten hours on your own money page beats a 40-hour certification.',
  },
  {
    q: 'Can a beginner do SEO?',
    a: 'A beginner can do the 80/20: Search Console, titles, FAQs, Google Business Profile if you serve a place, and internal links. A beginner should not buy links, split one query into three posts, or trust ChatGPT to pick the winning URL. That is how beginners get a busy blog and an empty pipeline.',
  },
  {
    q: 'How does FactoryJet approach SEO for US small businesses?',
    a: 'We start from the URL that should make the phone ring, then write the cluster that supports it. Technical work is whatever that URL needs to get indexed and extracted. We do not sell a secret AI ranking factor. We build pages models can quote and buyers can act on.',
  },
];

export const post: BlogPost = {
  id: '425',
  slug: 'seo-tips-small-business-2026',
  title: 'SEO Tips That Actually Move a Small Business in 2026',
  excerpt:
    'Most SEO tips are written for people who already have a team. Here is the 20 percent a US owner under $5M can do this week, with time cost on each step, plus an honest answer on ChatGPT.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Aug 21, 2026',
  readTime: '14 min read',
  imageUrl: '/blog-images/seo-tips-small-business-2026.webp',
  imageAlt:
    'Small business owner at a bright desk reviewing search results on a laptop, orange notebook beside the keyboard',
  meta: {
    title: 'SEO Tips for Small Business in 2026 (The 80/20)',
    description:
      'SEO tips for US small businesses in 2026: the 80/20 that moves a money page, time cost per step, and whether ChatGPT can do the work.',
  },
  keyTakeaways: [
    'The 80/20 for a firm under $5M is indexation, one commercial page, internal links, and a conversion Search Console can see.',
    '"seo tips", "seo optimization tips", and "tips seo" are one query cluster. Do not build three pages for them.',
    'AI Overviews fire on this cluster. Write an extractable first answer, not a 2,000-word throat-clear.',
    'ChatGPT can draft. It cannot see your crawl errors or pick the URL that should win.',
    'A blog post that never links to a service page is not an SEO tip. It is unpaid publishing.',
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
          The SEO tips that move a small US business in 2026 are not a 40-post calendar. They are
          Search Console on the URL you sell from, a rewritten title and first 60 words, real FAQs
          on that page, and links into it. Do that 20 percent before you hire anyone, and before you
          ask ChatGPT to "do SEO."
        </p>
      </div>

      <p>
        Google, Wikipedia, and the tool vendors own page one for "seo tips." They write for
        practitioners who already live in dashboards. The People Also Ask box under the same query
        is a different reader: an owner asking whether to bother, whether SEO is dead now that AI
        Overviews exist, and whether ChatGPT can just do it.
      </p>
      <p>
        This post is for that owner. A US firm somewhere between $500K and $5M, no SEO department,
        maybe a developer on call. If a tip takes a 12-person content team, it does not belong here.
      </p>
      <p>
        FactoryJet is an AI-native commerce agency, not a plugin company. We keep seeing the same
        pattern on audits: the archive is full, the money page is thin, and nothing in the blog
        points at the URL that should rank. The tips below are the order we use to break that. Time
        costs are for one competent person, not a sprint ritual.
      </p>


      <h2 id="definition">What SEO tips actually are</h2>
      <p>
        SEO tips are the smallest set of changes that get a specific URL found, understood, and
        trusted for a query a customer already types. They are not a dashboard, a plugin, or a
        40-post calendar. If a tip does not change a page Google can fetch, it is entertainment.
      </p>
      <p>
        Related searches under the same query, pulled the same day:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>SEO tips for beginners</li>
        <li>SEO tips reddit</li>
        <li>Free SEO tips</li>
        <li>Best SEO tips</li>
        <li>SEO tips for small businesses</li>
        <li>What is SEO, and what SEO stands for (those belong on a definition page, not this one)</li>
      </ul>
      <p>
        Beginner, Reddit, free, best, and small business are the same job as this page: an owner,
        one site, no team. "What is SEO" is a definition query. It gets its own URL later.
      </p>

      <h2 id="aio-today">Who Google quotes for "seo tips" today</h2>
      <p>
        Pulled live from Google US on 21 Aug 2026. The AI Overview sits above organic. It cites
        seven sources. FactoryJet is in none of them. Neither is any other services agency.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Reddit, r/SEO, a 2021 thread Google still treats as a primary source.</li>
        <li>Semrush, "13 SEO Tips to Boost Your Search Visibility."</li>
        <li>Google's own SEO starter guide on developers.google.com.</li>
        <li>Hello Co Creative, a short "easy tips" post.</li>
        <li>YouTube, an ecommerce SEO checklist.</li>
        <li>Siteimprove, content-optimization best practices.</li>
        <li>BDC, "SEO tips for small businesses."</li>
      </ul>
      <p>
        Organic underneath the overview is a slightly different set: Reddit again, Google's starter
        guide, Semrush, Siteimprove, Michigan Tech, Hello Co Creative, YouTube, and Bynder. Still
        no services agency. The pattern is the same as the 417-SERP sample from 20 Aug: Google,
        publishers, and forums, not firms that sell the work.
      </p>
      <p>
        If you want to be the eighth citation, you have to be as extractable as those pages: short
        claims, lists, and a first paragraph a model can lift. You also have to get crawled. A post
        that went live this morning will not appear in that box today. PAA still asks "Is SEO dead
        now with AI?" We already answered that with data.{' '}
        <a href="/blog/is-seo-dead-2026-ai-search-data" className="text-blue-600 underline hover:text-blue-800">
          Is SEO dead in 2026
        </a>{' '}
        is the argument. This page is what to do if the answer is no.
      </p>
      <p>
        If you want that work scoped for a US small business,{' '}
        <a href="/services/small-business-seo" className="text-blue-600 underline hover:text-blue-800">start here</a>, not with another tips roundup.
      </p>

      <h2 id="best-strategies">What are the best SEO strategies?</h2>
      <p>
        That is the first People Also Ask result under "seo tips" today, and Google answers it
        inside the PAA with an AI Overview. The overview's own four-part list:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Target the terms people actually type, including long-tail phrases.</li>
        <li>Write for humans first, put the main term in the first 100 words, update old pages.</li>
        <li>One H1, subheadings, image alt text.</li>
        <li>Speed, clean URLs, links you did not buy.</li>
      </ul>
      <p>
        None of that is wrong. None of it tells a $2M firm which URL to fix on Monday. Our overlay
        is the 80/20 below: same four areas, one page, time-boxed.
      </p>

      <h2 id="skills">How to improve SEO skills without another course</h2>
      <p>
        Second PAA: "How do I improve my SEO skills?" Third, "Can a beginner do SEO?" Yes, if
        skill means shipping, not collecting certificates.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Week 1: Search Console on the money URL (45 minutes).</li>
        <li>Week 1: rewrite title, H1, first 60 words (2 hours).</li>
        <li>Week 2: 8 to 12 FAQs on that URL (90 minutes).</li>
        <li>Week 2: internal links from every related article (1 hour).</li>
        <li>Ongoing: compare what ranked in the AI Overview against what you published.</li>
      </ul>

      <h2 id="eighty-twenty">The 80/20, in order</h2>
      <p>
        Do these in sequence. Skipping to "write more blogs" is how you get 114 posts and zero
        rankings, which is where factoryjet.com itself sat across 417 sampled SERPs in August 2026.
        We are not exempt from this list. Time costs below are for one competent person, not a
        sprint ritual, and they map onto the four areas Google already named in the AI Overview:
        terms, content, structure, and technical basics. The difference is we name the URL.
      </p>

      <h3 id="tip-1">1. Put Search Console on the page that makes money (45 minutes)</h3>
      <p>
        Not on the homepage only. Property plus the exact commercial URL:{' '}
        <a href="/services/small-business-seo">small business SEO</a>, Shopify development,
        whatever you actually sell. Confirm it is indexed. If it is "Crawled, currently not indexed"
        or blocked, stop writing. Google cannot quote a URL it will not serve.
      </p>
      <p>
        <a
          href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google's SEO starter guide
        </a>{' '}
        still starts here for a reason. The starter guide is not strategy. It is the floor.
      </p>

      <h3 id="tip-2">2. Rewrite the title, H1, and first 60 words (2 hours)</h3>
      <p>
        The page should answer the query in the first screen, in a sentence a model can lift. For
        this cluster that sentence is not "We are a full-service digital partner." It is what you
        do, for whom, in the US, and what happens next (a call, a form, an audit).
      </p>
      <p>
        "seo tips", "seo optimization tips", "seo optimisation tips", and "tips seo" reported as
        separate 60k+ lines in DataForSEO. They share intent. One page. If you split them, you
        compete with yourself.
      </p>

      <h3 id="tip-3">3. Put 8 to 12 buyer FAQs on that same URL (90 minutes)</h3>
      <p>
        Not a separate /faq/ dumping ground. Questions the sales call already hears. Answers of 40
        to 75 words, one claim each, marked up as FAQPage in the HTML Google fetches (no
        client-only injection). This is the block AI Overviews and chatbots actually lift. Google
        has said there is no extra AI schema.{' '}
        <a
          href="https://developers.google.com/search/docs/appearance/ai-features"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI features use the same index
        </a>
        . Extractability is just being a clear page.
      </p>

      <h3 id="tip-4">4. Google Business Profile, only if you serve a place (30 minutes)</h3>
      <p>
        Categories, hours, photos, and the same NAP as the site. Skip this if you are a remote
        ecommerce brand cosplaying as a local shop. Fake local pages are how sites get filtered, not
        how they get cited.
      </p>

      <h3 id="tip-5">5. Point every relevant article at the money page (1 hour)</h3>
      <p>
        One descriptive link, in the body, not a "related posts" widget of random siblings. This
        article links to{' '}
        <a href="/services/small-business-seo">small business SEO</a> because that is the job of
        the post. If you already wrote{' '}
        <a href="/blog/is-seo-dead-2026-ai-search-data">is SEO dead in 2026</a>, that piece is a
        data argument. This one is the practical pillar. They should link both ways, not repeat
        each other.
      </p>

      <h3 id="tip-6">6. Kill index bloat before you add URLs (2 hours, or a developer day)</h3>
      <p>
        Parameter pages, search-result pages, and three URLs for one product are how small Shopify
        and WordPress sites stall. One canonical, noindex on the junk, sitemap of the URLs you
        actually want quoted. This is boring. It is also why "we posted 40 blogs" still shows 12
        indexed money pages.
      </p>

      <h3 id="tip-7">7. Speed the template, not every page (half a day)</h3>
      <p>
        LCP on the template that wraps service pages. Compress the hero. Stop loading three sliders
        above the answer. Core Web Vitals are a floor, not a personality. If the HTML answer is
        missing, a 100 Lighthouse score is a fast empty page.
      </p>

      <h3 id="tip-8">8. One conversion event Search Console can see (1 hour)</h3>
      <p>
        A thank-you URL after the form, or a call event you will actually look at. Rank tracking on
        "seo tips" is entertainment. If you cannot see a lead from organic, you will "optimize"
        forever.
      </p>

      <h2 id="chatgpt">Can ChatGPT do this? A real test, not a sermon</h2>
      <p>
        We asked ChatGPT Search for SEO tips for a US small ecommerce brand, then asked it to name
        agencies. It quoted pages that already rank and already answer in the first paragraph. It
        did not invent a FactoryJet citation. In our August 2026 SERP sample, factoryjet.com
        appeared in zero of 417 results. Models cannot recommend a page they cannot fetch.
      </p>
      <p>
        What ChatGPT is good for on this list: a first outline, 20 question variants, a ruthless
        edit of your own draft. What it cannot do: open Search Console, see "Discovered, currently
        not indexed," or tell you that your /blog/ and your /services/seo page describe two
        different companies. Treat it as a junior writer with no login.
      </p>
      <p>
        If you want chatbots to cite you later, the work is still this page being indexable, specific,
        and honest. That is the same work as ranking. Google said so.{' '}
        <a href="/blog/how-to-show-up-in-google-ai-overviews-small-business">
          How to show up in Google AI Overviews
        </a>{' '}
        is the longer version of that point.
      </p>

      <h2 id="not-this">What to stop doing this quarter</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Three near-duplicate posts for one query cluster.</li>
        <li>Guest posts on sites nobody reads, bought as "DR 40."</li>
        <li>City pages for cities you do not serve.</li>
        <li>AI drafts shipped without a human who has been on a sales call.</li>
        <li>Reporting "impressions up 12 percent" with no lead attached.</li>
        <li>Chasing "what is SEO" on this URL when related search already splits that query off.</li>
        <li>Shipping ChatGPT drafts that never mention the money page.</li>
        <li>Treating Semrush's 13 tips as a strategy for a 12-person company you do not have.</li>
      </ul>

      <h2 id="diy-or-hire">DIY, developer, or agency</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>You, this week:</strong> tips 1, 2, 3, 4, 5, 8.
        </li>
        <li>
          <strong>A developer:</strong> tips 6 and 7, plus FAQ schema in the server HTML.
        </li>
        <li>
          <strong>An agency:</strong> when the money page is live and you need a cluster written
          without sounding like every other firm. If you want that scoped,{' '}
          <a href="/services/small-business-seo">small business SEO</a> is the page, not a pricing
          grid. Cost ranges live in{' '}
          <a href="/blog/seo-cost-small-business-2026">what SEO costs a small business</a>, and a
          DIY technical pass sits next to{' '}
          <a href="/blog/seo-audit-cost-2026">SEO audit cost</a>.
        </li>
      </ul>

      <h2 id="start">Start Monday</h2>
      <p>
        Open Search Console. Pick one URL. Rewrite the first 60 words so a stranger, and a model,
        can quote them. Then publish the next article only if it links back. That is the whole tip
        list, compressed. If you want help after that first pass, the next click is{' '}
        <a href="/services/small-business-seo">small business SEO</a>, not another roundup of the same 13 tips Semrush already ranked for.
      </p>
    </article>
  ),
};
