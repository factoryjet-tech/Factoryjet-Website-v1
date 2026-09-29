/**
 * Technical SEO service page FAQ (/services/technical-seo): the single source for
 * the visible accordion AND the FAQPage JSON-LD in
 * src/app/services/technical-seo/page.tsx. Never duplicate these strings elsewhere.
 *
 * Questions are Google People Also Ask wording (DataForSEO, US, location 2840,
 * pulled 2026-09-26: pipeline/research/data/us-opps-2026-09-26/paa_technical_seo.json
 * and serps.json), lightly adapted only where the PAA phrasing was ungrammatical.
 * Every technical claim is checked against the linked Google Search Central page.
 * No FactoryJet prices on this page: cost questions link to the cost guides.
 */

export const TECHNICAL_SEO_FAQ_CATEGORIES = [
  { id: 'faq-basics', key: 'basics', label: 'What technical SEO is' },
  { id: 'faq-hiring', key: 'hiring', label: 'Hiring, cost and timing' },
  { id: 'faq-speed', key: 'speed', label: 'Core Web Vitals and speed' },
  { id: 'faq-javascript', key: 'javascript', label: 'JavaScript, React and Next.js' },
  { id: 'faq-migration', key: 'migration', label: 'Migrations, ecommerce and logs' },
  { id: 'faq-ai', key: 'ai', label: 'AI search and AI crawlers' },
  { id: 'faq-working', key: 'working', label: 'Working with FactoryJet' },
] as const;

export interface TechnicalSeoFaqLink { label: string; url: string }

export interface TechnicalSeoFaq {
  id: string;
  category: (typeof TECHNICAL_SEO_FAQ_CATEGORIES)[number]['key'];
  question: string;
  answer: string;
  /** External source for a claim in the answer, shown after it. */
  source?: TechnicalSeoFaqLink;
  /** Internal page linked after the answer. */
  link?: TechnicalSeoFaqLink;
}

const G = 'https://developers.google.com/search/docs';

export const TECHNICAL_SEO_FAQS: TechnicalSeoFaq[] = [
  // What technical SEO is
  { id: 'Q01', category: 'basics', question: 'What does technical SEO include?',
    answer: 'Technical SEO covers everything that decides whether search engines can find, fetch, render and index your pages. That means robots.txt, XML sitemaps, status codes and redirects, canonical tags, internal links, JavaScript rendering, Core Web Vitals, mobile parity, structured data, hreflang for multi-country sites, and today, which AI crawlers you let in. Content and backlinks sit on top of it. If the technical layer fails, the rest is invisible.' },
  { id: 'Q02', category: 'basics', question: 'What are some examples of technical SEO?',
    answer: 'Common examples: fixing a robots.txt rule that blocks product pages, collapsing a three-hop redirect chain into one 301, setting a canonical tag on filtered category URLs, making a React page send its main text in the first HTML response, cutting a slow hero image so the page passes LCP, adding Product markup that matches the visible price, and adding hreflang so the right country page shows up in each market.' },
  { id: 'Q03', category: 'basics', question: 'What is the difference between on-page SEO and technical SEO?',
    answer: 'On-page SEO is about what a page says: the title, headings, copy, images and internal links that match a search. Technical SEO is about whether the page can be crawled, rendered and indexed at all, and how fast and stable it is. A great page with a noindex tag never ranks. A fast, indexable page with thin copy ranks poorly. You need both, and they are usually done by different people.' },
  { id: 'Q04', category: 'basics', question: 'What is the difference between SEO and technical SEO?',
    answer: 'SEO is the whole job of earning search traffic: technical work, content, and authority from other sites. Technical SEO is one part of it, the infrastructure layer. It is closer to engineering than marketing, because most fixes happen in templates, server settings and build pipelines rather than in the words on the page. That is why technical SEO is often best done by a team that can also ship code.' },
  { id: 'Q05', category: 'basics', question: 'What are the four types of SEO?',
    answer: 'The usual split is technical SEO (crawling, indexing, speed, rendering), on-page SEO (the content and HTML of each page), off-page SEO (links and mentions from other sites), and local SEO (map results and Google Business Profile). Many teams now add a fifth, AI search optimization, which is about being cited by ChatGPT, Perplexity and Google AI Overviews. It depends heavily on the technical layer.',
    link: { label: 'AI SEO services', url: '/services/ai-seo' } },
  { id: 'Q06', category: 'basics', question: 'Do you need coding for technical SEO?',
    answer: 'To find problems, not much. Crawlers and Search Console show most issues. To fix them, often yes. Rendering problems, template-level canonical bugs, redirect rules, image pipelines and structured data generated from product data all live in code. This is the gap where many technical SEO engagements stall: the audit is written, then waits months for a developer. Our developers ship the fixes themselves.' },
  { id: 'Q07', category: 'basics', question: 'How to do technical SEO step by step?',
    answer: 'Start with Search Console: the Page indexing report shows which URLs Google skipped and why. Then crawl the site with a tool like Screaming Frog to find broken links, redirect chains and missing canonicals. Check robots.txt and sitemaps. Test key templates with URL Inspection to see the rendered HTML. Measure Core Web Vitals from real-user data. Fix in order of pages that earn money, then re-check in Search Console.',
    source: { label: 'Google: Search Console Page indexing report', url: 'https://support.google.com/webmasters/answer/7440203' } },

  // Hiring, cost and timing
  { id: 'Q08', category: 'hiring', question: 'What does a technical SEO agency do?',
    answer: 'A technical SEO agency finds and fixes the problems that stop search engines from crawling, rendering and indexing your site. Good ones do more than hand over a spreadsheet: they rank issues by revenue impact, write tickets your developers can act on or ship the fixes themselves, verify each fix in Search Console, and watch for regressions after every release. That last part is where most traffic is lost.' },
  { id: 'Q09', category: 'hiring', question: 'Is it worth hiring an SEO agency?',
    answer: 'It is worth it when the problem is bigger than your team\'s time or skills, and when the agency can prove its work. For technical SEO, ask three things: will you implement or only report, how will you verify each fix, and what happens when our next release breaks something. If you have a strong in-house developer and a small site, a one-off audit may be all you need.',
    link: { label: 'SEO audit services', url: '/services/seo-audit' } },
  { id: 'Q10', category: 'hiring', question: 'How much does an SEO service cost?',
    answer: 'Small businesses typically pay $1,500 to $3,500 a month for SEO, according to WebFX. The price depends on site size, platform, how much is broken, and whether the agency implements fixes or only recommends them. A 50-page service site and a 200,000-URL store are different jobs. We do not list prices on service pages. Our US SEO cost guide shows typical market ranges and what drives them, and you get a fixed written scope after a short call.',
    link: { label: 'US SEO cost guide', url: '/blog/seo-cost-small-business-2026' } },
  { id: 'Q11', category: 'hiring', question: 'How much does a SEO audit cost?',
    answer: 'Most businesses pay $101 to $750 for a one-time SEO audit, according to WebFX survey data. Audit prices vary with the number of URLs, the platform, and how deep the review goes: a crawl-only check is very different from one that includes rendering tests and server log analysis. Our SEO audit cost guide lays out the typical ranges and what each level includes. If you only need a one-time diagnosis, our SEO audit service is the right page. This page covers ongoing technical work.',
    link: { label: 'SEO audit cost guide', url: '/blog/seo-audit-cost-2026' } },
  { id: 'Q12', category: 'hiring', question: 'How long does technical SEO take to show results?',
    answer: 'Fixes show up first in Search Console, as Google recrawls: fewer excluded pages, fewer errors, new URLs indexed. Rankings follow more slowly. Google says a site move can take a few weeks or more before new URLs replace old ones, and longer on big sites. Blocking bugs, like a stray noindex, can recover quickly once fixed. Our SEO timeline guide goes month by month.',
    link: { label: 'How long SEO takes', url: '/blog/how-long-does-seo-take-2026-month-by-month-timeline' } },

  // Core Web Vitals and speed
  { id: 'Q13', category: 'speed', question: 'Does Core Web Vitals affect SEO?',
    answer: 'Yes, but as one signal among many. Google says it recommends good Core Web Vitals "for success with Search" and that they align with what its core ranking systems reward. A fast page will not outrank a far more relevant one. Speed also decides whether visitors wait for the page at all, which is why we treat it as a revenue fix as much as an SEO one.',
    source: { label: 'Google: Core Web Vitals and Search', url: `${G}/appearance/core-web-vitals` } },
  { id: 'Q14', category: 'speed', question: 'What is considered a good Core Web Vitals score?',
    answer: 'Google\'s "good" thresholds are: Largest Contentful Paint (LCP, how fast the main content shows) within 2.5 seconds, Interaction to Next Paint (INP, how fast the page reacts to a tap or click) under 200 milliseconds, and Cumulative Layout Shift (CLS, how much the layout jumps) under 0.1. They are measured at the 75th percentile of real page loads, on mobile and desktop separately.',
    source: { label: 'web.dev: Web Vitals', url: 'https://web.dev/articles/vitals' } },
  { id: 'Q15', category: 'speed', question: 'What causes a poor LCP score?',
    answer: 'The usual causes are a slow server response, a large hero image that is not compressed or not prioritized, render-blocking CSS and fonts, and main content that only appears after JavaScript runs. On ecommerce themes, the culprit is often a heavy image slider or an app script loaded before the product image. The fix starts by finding the actual LCP element on each template, then making it load first.' },
  { id: 'Q16', category: 'speed', question: 'How to pass Core Web Vitals assessment?',
    answer: 'Measure real-user data first, from the Core Web Vitals report in Search Console or PageSpeed Insights field data, because lab scores alone do not decide the assessment. Then fix per template: speed up the LCP element, break up long JavaScript tasks to improve INP, and reserve space for images, ads and embeds to stop layout shift. Then use Validate fix in the report, which starts a 28-day monitoring session.',
    source: { label: 'Google: Core Web Vitals report', url: 'https://support.google.com/webmasters/answer/9205520' } },

  // JavaScript, React and Next.js
  { id: 'Q17', category: 'javascript', question: 'What is SEO in JavaScript?',
    answer: 'JavaScript SEO makes sure pages built with frameworks like React, Vue or Angular can be crawled and indexed. Google processes JavaScript pages in three phases: crawling, rendering and indexing. Rendering happens later, in a queue. Google says server-side or pre-rendering is still a great idea, because it is faster for users and crawlers, and not all bots can run JavaScript.',
    source: { label: 'Google: JavaScript SEO basics', url: `${G}/crawling-indexing/javascript/javascript-seo-basics` } },
  { id: 'Q18', category: 'javascript', question: 'Is React still bad for SEO?',
    answer: 'React is not bad for SEO. Client-side-only React is risky: if the server sends an empty shell and the content appears only after scripts run, search engines may index less, and many AI crawlers may see nothing. React rendered on the server, for example with Next.js, sends full HTML on the first request and is fine. The framework matters less than where the HTML is produced.' },
  { id: 'Q19', category: 'javascript', question: 'Which JavaScript framework is best for SEO?',
    answer: 'The best one is any framework that renders on the server or at build time: Next.js, Nuxt, Astro, SvelteKit or Remix all can. Google recommends server-side rendering, static rendering, or hydration, and calls dynamic rendering a workaround rather than a long-term solution. Pick the framework your team can maintain, then make sure every indexable page ships its content, links and metadata in the initial HTML.',
    source: { label: 'Google: Dynamic rendering as a workaround', url: `${G}/crawling-indexing/javascript/dynamic-rendering` } },

  // Migrations, ecommerce and logs
  { id: 'Q20', category: 'migration', question: 'What is SEO migration?',
    answer: 'An SEO migration is any change that moves or rebuilds URLs in a way search engines must relearn: a new domain, a new platform such as Magento to Shopify, a switch to HTTPS, a new URL structure, or a redesign that renames pages. The SEO work is mapping every old URL to its best new match, redirecting it, and checking that Google picks up the new pages without losing traffic.' },
  { id: 'Q21', category: 'migration', question: 'How can I migrate my website without losing my SEO?',
    answer: 'Crawl and save every current URL first, including ones that only exist in backlinks and analytics. Map each to its closest new page and use permanent server-side redirects, 301 or 308, in one hop. Keep redirects for at least a year, as Google advises. Update canonicals, sitemaps and internal links to the new URLs, then watch Search Console daily for the first weeks after launch.',
    source: { label: 'Google: Site moves with URL changes', url: `${G}/crawling-indexing/site-move-with-url-changes` } },
  { id: 'Q22', category: 'migration', question: 'How to do SEO for eCommerce?',
    answer: 'On the technical side, ecommerce SEO is mostly about control. Faceted navigation (filters for size, color, price) can create millions of near-duplicate URLs, and Google says it will crawl many of them before learning they are useless. Decide which filters deserve indexable pages, block or canonicalize the rest, return a real 404 for sold-out-forever products, and keep Product markup matching the visible price and stock.',
    source: { label: 'Google: Managing faceted navigation', url: `${G}/crawling-indexing/crawling-managing-faceted-navigation` } },
  { id: 'Q23', category: 'migration', question: 'How to analyze a log file for SEO?',
    answer: 'Export raw access logs from your server or CDN, keep only requests from search and AI crawlers, and verify Googlebot with a reverse DNS lookup, since many bots fake its name. Then compare: which URLs get crawled most, which never get crawled, how much crawling is spent on redirects, errors and parameter URLs, and how fast new pages are found. Logs show what bots did, not what they might do.',
    source: { label: 'Google: Verifying Googlebot', url: `${G}/crawling-indexing/verifying-googlebot` } },
  { id: 'Q24', category: 'migration', question: 'What is crawl budget, and does my site need to worry about it?',
    answer: 'Crawl budget is how many URLs Google can and wants to crawl on your site. Most sites do not need to worry. Google\'s guide is written for large sites with over a million unique pages, sites with over 10,000 pages that change daily, and sites with many pages stuck as "Discovered, currently not indexed." If that is not you, fix indexing and duplicates instead.',
    source: { label: 'Google: Crawl budget guide', url: 'https://developers.google.com/crawling/docs/crawl-budget' } },

  // AI search and AI crawlers
  { id: 'Q25', category: 'ai', question: 'Is SEO dead now with AI?',
    answer: 'No. AI search engines still depend on crawled, indexed web pages. Google says pages must be indexed and eligible to show with a snippet to appear as a link in AI Overviews or AI Mode, with no extra technical requirements. So a technically broken site is invisible to both classic search and AI answers. What is changing is what gets clicked, which is why citations now get tracked too.',
    source: { label: 'Google: AI features and your website', url: `${G}/appearance/ai-features` },
    link: { label: 'Is SEO dead? The data', url: '/blog/is-seo-dead-2026-ai-search-data' } },
  { id: 'Q26', category: 'ai', question: 'Can ChatGPT do SEO?',
    answer: 'ChatGPT can draft titles, explain errors and write code for schema or redirect rules. It cannot see your Search Console data, crawl your site at scale, deploy fixes, or confirm that Google picked them up. Use it to speed up the work, and have a person check anything technical before it ships. A wrong robots.txt line written confidently by a chatbot can remove a whole site from search.' },
  { id: 'Q27', category: 'ai', question: 'Should I block AI crawlers in robots.txt?',
    answer: 'Decide bot by bot, because they do different jobs. OpenAI says OAI-SearchBot decides whether you can appear in ChatGPT search, while GPTBot collects training data. Google says Google-Extended does not affect inclusion or ranking in Google Search. Anthropic and Perplexity also separate search bots from training bots. Blocking every AI bot with one wildcard can quietly remove you from AI answers.',
    source: { label: 'OpenAI: Overview of crawlers', url: 'https://developers.openai.com/api/docs/bots' } },
  { id: 'Q28', category: 'ai', question: 'Does technical SEO help you appear in AI Overviews?',
    answer: 'It is the entry ticket. To be shown as a supporting link in AI Overviews or AI Mode, Google says a page must be indexed and eligible for a snippet, and there are no special AI files or markup required. Robots rules, nosnippet tags and noindex all limit what can be shown. Content and outside mentions decide whether you get picked, which is what our AI SEO service covers.',
    source: { label: 'Google: AI features and your website', url: `${G}/appearance/ai-features` },
    link: { label: 'AI SEO services', url: '/services/ai-seo' } },

  // Working with FactoryJet
  { id: 'Q29', category: 'working', question: 'Do you implement the fixes or just report them?',
    answer: 'We implement them. FactoryJet builds Shopify, BigCommerce, WordPress, Webflow and Next.js sites, so the same team that finds a rendering bug or a redirect chain can open the pull request, ship it with your approval, and verify it in Search Console. If you have your own developers, we write the tickets for them and review their changes instead. Either way, a fix is not done until Google sees it.' },
  { id: 'Q30', category: 'working', question: 'What is the difference between your SEO audit and technical SEO service?',
    answer: 'The SEO audit is a one-time diagnosis of technical, content and authority issues, with a fix list in priority order. The technical SEO service is ongoing: we fix the technical items, check every release for regressions, handle migrations, and track crawl, index and Core Web Vitals data each month. Many clients start with the audit and move to ongoing work once they see the list.',
    link: { label: 'SEO audit services', url: '/services/seo-audit' } },
];
