/**
 * Webflow Development FAQ: the single source for the visible accordion AND the
 * FAQPage JSON-LD in src/app/services/webflow-development/page.tsx. Never
 * duplicate these strings elsewhere.
 *
 * Questions use Google People Also Ask wording from a DataForSEO pass on
 * 2026-09-26 (US, location 2840; pipeline/research/data/us-opps-2026-09-26/webflow_paa.json)
 * where the data had one. Webflow plan and feature facts were fetched from
 * webflow.com the same day. No FactoryJet prices: cost questions explain the
 * drivers and link to the cost guides.
 */

export const WEBFLOW_FAQ_CATEGORIES = [
  { id: 'faq-hiring', key: 'hiring', label: 'Hiring a Webflow developer' },
  { id: 'faq-platform', key: 'platform', label: 'Is Webflow the right platform?' },
  { id: 'faq-seo', key: 'seo', label: 'Webflow SEO and AI search' },
  { id: 'faq-migration', key: 'migration', label: 'Migrating to Webflow' },
  { id: 'faq-plans', key: 'plans', label: 'Plans, CMS and ecommerce' },
  { id: 'faq-working', key: 'working', label: 'Working with FactoryJet' },
] as const;

export interface WebflowFaqLink { label: string; url: string }

export interface WebflowFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
  /** External source for a fact in the answer, shown after it. */
  source?: WebflowFaqLink;
  /** Internal page linked after the answer. */
  link?: WebflowFaqLink;
}

const PRICING = 'https://webflow.com/pricing';
const COST_GUIDE = '/blog/how-much-does-a-website-cost-small-business-usa-2026';
const REDESIGN_COST_GUIDE = '/blog/website-redesign-cost-us-small-business-2026';

export const WEBFLOW_FAQS: WebflowFaq[] = [
  // Hiring
  { id: 'Q01', category: 'hiring', question: 'What does a Webflow developer do?',
    answer: 'A Webflow developer turns a design into a working Webflow site. That means building the pages with a clean class system, setting up CMS Collections for things like blog posts and case studies, wiring forms to your CRM, adding custom code where Webflow has no native feature, and handling SEO settings, redirects and publishing. A good one also leaves the site easy for your marketing team to edit without breaking the layout.' },
  { id: 'Q02', category: 'hiring', question: 'What is Webflow development?',
    answer: 'Webflow development is building a website inside Webflow, a visual website platform with its own CMS and managed hosting. Instead of writing every line of HTML and CSS by hand, the developer builds in Webflow’s visual Designer, then adds custom code, integrations and API connections where the project needs them. The result is a site your team edits visually, hosted by Webflow.' },
  { id: 'Q03', category: 'hiring', question: 'What is the best Webflow agency?',
    answer: 'There is no single best Webflow agency, only the best fit for your site. Shortlist three, then ask each for live Webflow sites you can test in PageSpeed Insights, a written redirect plan if you already have a site, proof that the Webflow Workspace and site will sit in your name, and a clear answer on who supports the site after launch. Pick the one that answers all four in writing.' },
  { id: 'Q04', category: 'hiring', question: 'Do professionals use Webflow?',
    answer: 'Yes. Webflow lists companies such as Discord, DocuSign, Spotify, Reddit, monday.com, Greenhouse and TED on its customer page, and many B2B and SaaS marketing teams run their public sites on it. Professionals use it mainly for marketing sites, where a design-led team wants to publish and test pages quickly. It is less common for large stores or complex web applications.',
    source: { label: 'Webflow customers', url: 'https://webflow.com/customers' } },
  { id: 'Q05', category: 'hiring', question: 'Is Webflow a reputable company?',
    answer: 'Yes. Webflow is an established website platform used by well-known brands. Its hosting page states SOC 2 Type II, CCPA and GDPR compliance, automatic SSL on every site plan, and DDoS and bot protection through its CDN provider. The practical risk is not the company. It is lock-in: your site lives on Webflow, so moving away later usually means a rebuild.',
    source: { label: 'Webflow hosting', url: 'https://webflow.com/feature/hosting' } },
  { id: 'Q06', category: 'hiring', question: 'What big companies use Webflow?',
    answer: 'Webflow’s customer page shows logos including Discord, DocuSign, Spotify, Reddit, monday.com, Greenhouse, Lattice, Upwork, Checkout.com, Orangetheory Fitness, TED and The New York Times. Treat logos as a sign the platform can carry a serious brand, not proof that every page those companies run is on Webflow. What matters for you is whether it fits your team and your site.',
    source: { label: 'Webflow customers', url: 'https://webflow.com/customers' } },
  { id: 'Q07', category: 'hiring', question: 'How much does it cost to hire a Webflow developer?',
    answer: 'A mid-level US Webflow freelancer charges $75 to $125 an hour, according to Webflow.jobs. Project cost depends on the page count, how much custom design there is, how many CMS Collections you need, whether you are migrating an existing site, and how many integrations the site has. A freelancer building from a template costs far less than a team doing custom design, migration and CRM work. We scope on a call and send a fixed proposal. For typical US ranges, see our website cost guide.',
    link: { label: 'US website cost guide', url: COST_GUIDE } },

  // Platform
  { id: 'Q08', category: 'platform', question: 'Does Webflow need coding?',
    answer: 'Not for most pages. You can design, build and publish a full marketing site in Webflow’s visual Designer without writing code. Code comes in at the edges: custom scripts, advanced integrations, API work, code components, and anything Webflow has no native feature for. That is where a Webflow developer earns their keep, and why a no-code build from a template often hits a wall later.' },
  { id: 'Q09', category: 'platform', question: 'Is Webflow difficult to learn?',
    answer: 'Editing content in Webflow is easy. Most marketers learn to update text, images and CMS items in an afternoon. Building in the Designer is harder, because it follows real web layout rules: boxes, classes, flexbox and grid. People with some design or front-end background pick it up in weeks. For your team, the goal is simple editing on a site a developer set up properly.' },
  { id: 'Q10', category: 'platform', question: 'Is Webflow better or WordPress?',
    answer: 'Neither is better for everyone. Webflow suits a design-led marketing site where your team wants visual editing and no plugin upkeep. WordPress suits sites that publish a lot, need many plugins, or need low lock-in. W3Techs puts WordPress on 40.2% of all websites and Webflow on 0.8%, so WordPress has the bigger ecosystem. We build on both, so we recommend by fit.',
    source: { label: 'W3Techs, September 2026', url: 'https://w3techs.com/technologies/overview/content_management' },
    link: { label: 'Webflow vs WordPress guide', url: '/blog/webflow-vs-wordpress-us-small-business-2026' } },
  { id: 'Q11', category: 'platform', question: 'What is better, Wix or Webflow?',
    answer: 'For a business site that has to win work, Webflow is usually the stronger choice. It gives finer design control, a real CMS with structured Collections, cleaner page structure, and more SEO settings. Wix is quicker for a small owner-run site and needs less skill to set up. If you will hire someone to build it and your marketing team will run it, Webflow is the better long-term base.' },
  { id: 'Q12', category: 'platform', question: 'Is Figma or Webflow better?',
    answer: 'They do different jobs. Figma is where a site is designed and approved. Webflow is where the design becomes a live, hosted website with a CMS. Most Webflow projects use both: we design every page type in Figma, you approve it, and then we build it in Webflow. Webflow also offers a Figma to Webflow workflow for bringing designs across.' },
  { id: 'Q13', category: 'platform', question: 'Is Webflow the best CMS?',
    answer: 'It is one of the best for visual marketing sites, not for everything. Webflow’s CMS lets you design a template once and fill it from structured Collections, with reference fields linking content together. Its limits are real: set item counts per plan, fewer plugins than WordPress, and ecommerce built for small catalogs. For large content libraries or complex apps, a headless CMS or WordPress may fit better.',
    source: { label: 'Webflow pricing', url: PRICING } },
  { id: 'Q14', category: 'platform', question: 'What is better than Webflow?',
    answer: 'It depends on what Webflow is failing to do for you. If you need plugins, memberships and low lock-in, WordPress. If you sell a large catalog, Shopify. If you need logins, dashboards or deep integrations, a custom Next.js build. If you just need a quick launch site, Framer. If Webflow already fits your team, a better build usually beats a new platform.',
    link: { label: 'Compare website platforms', url: '/services/web-design' } },

  // SEO
  { id: 'Q15', category: 'seo', question: 'Is Webflow good for SEO?',
    answer: 'Yes, when it is built properly. Webflow gives you control of title tags, meta descriptions, alt text, canonical tags, an auto-generated XML sitemap, robots.txt, 301 redirects and schema markup, all without plugins. What it cannot do is decide your page structure, write answer-first content or plan your redirects. Those come from the build, and they matter more than the platform.',
    source: { label: 'Webflow pricing, SEO features', url: PRICING } },
  { id: 'Q16', category: 'seo', question: 'Which is better for SEO, Webflow or WordPress?',
    answer: 'Neither platform wins on SEO by itself. Webflow includes the core controls natively and produces clean page code, so there are fewer plugins to go wrong. WordPress can match it with a lean theme and a good SEO plugin, and offers more tools for large content sites. Rankings come from fast pages, clear structure, useful content and single-hop redirects, on either platform.' },
  { id: 'Q17', category: 'seo', question: 'Can a Webflow site get cited by ChatGPT and Google AI Overviews?',
    answer: 'Yes. AI assistants cite pages they can fetch, read and trust. A Webflow site serves its content as HTML, which helps. We add the rest: robots.txt rules that name the AI search crawlers, schema that matches what the reader sees, question-shaped headings with short direct answers near the top, and an llms.txt file. Webflow’s pricing page lists crawler access controls, robots.txt and llms.txt among its SEO features.',
    source: { label: 'Webflow pricing, SEO and AEO', url: PRICING },
    link: { label: 'AI SEO services', url: '/services/ai-seo' } },
  { id: 'Q18', category: 'seo', question: 'Is SEO dead now with AI?',
    answer: 'No. AI assistants and Google AI Overviews still pull from pages that search engines can crawl and index, and Google says the same SEO basics apply to its AI features. What has changed is that being the quoted source now matters alongside ranking. For a Webflow site, that means clean structure, direct answers and accurate schema, on top of normal SEO.',
    source: { label: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/ai-features' } },

  // Migration
  { id: 'Q19', category: 'migration', question: 'How do I migrate my website to Webflow?',
    answer: 'Crawl the old site and list every URL. Decide which pages move, merge or retire. Model your blog, case studies and other repeating content as Webflow CMS Collections, then import the content by CSV or through the CMS API. Rebuild the page designs in Webflow, map every old URL to a new one with a 301 redirect, test on staging, then switch DNS and resubmit the sitemap.',
    source: { label: 'Webflow CSV import', url: 'https://webflow.com/updates/csv-import' } },
  { id: 'Q20', category: 'migration', question: 'How can I migrate my website without losing my SEO?',
    answer: 'Keep the URLs that already rank where you can, and send every URL that changes to its closest new page with a single 301 redirect, never a chain. Carry over titles, meta descriptions, headings and body copy on pages that perform. Keep internal links pointing at final URLs. After launch, submit the new sitemap in Search Console and watch crawl errors for the first few weeks.' },
  { id: 'Q21', category: 'migration', question: 'How long does it take to migrate a website?',
    answer: 'A standard Webflow marketing site takes 3 to 5 weeks. A migration with a large blog, many CMS Collections, a redirect map and CRM integrations takes 5 to 8 weeks. Enterprise sites with localization, code components or Webflow Cloud apps take 8 to 14 weeks. Small sites of up to 5 pages can be done with 7-day delivery. The redirect map is usually what takes longest.' },
  { id: 'Q22', category: 'migration', question: 'How much does it cost to migrate a website?',
    answer: 'A full website redesign, which often includes a migration, costs $3,000 to $75,000, according to WebFX. A migration on its own depends on how many pages and CMS items move, whether the design changes or stays, how much content needs cleanup, how many URLs need redirects, and which integrations need rebuilding. A like-for-like move of a small site costs far less than a redesign plus migration. We quote a fixed price after a scoping call. Our redesign cost guide covers typical US ranges.',
    link: { label: 'Website redesign cost guide', url: REDESIGN_COST_GUIDE } },
  { id: 'Q23', category: 'migration', question: 'How can I migrate my Webflow site to WordPress?',
    answer: 'Export your CMS Collections as CSV files, then import them into WordPress as posts or custom post types. The page designs do not transfer as a working theme, so they need to be rebuilt in WordPress. Map every Webflow URL to its new WordPress URL with 301 redirects, move forms and integrations, then switch DNS. It is a rebuild with a content transfer, not a one-click move.',
    link: { label: 'WordPress development', url: '/services/wordpress-development' } },
  { id: 'Q24', category: 'migration', question: 'How many redirects can Webflow handle?',
    answer: 'Webflow says it has no hard limit on 301 redirects but recommends 1,000 as a best-practice maximum, because every rule is added to a file visitors’ browsers download. It supports wildcard redirects with a (.*) capture group, but not regex or exclusions. For a large migration we group redirects into wildcard rules and, when needed, handle the rest at the DNS or proxy level.',
    source: { label: 'Webflow, site-level SEO', url: 'https://webflow.com/webflow-way/seo/site-level-seo' } },

  // Plans
  { id: 'Q25', category: 'plans', question: 'Which Webflow plan do I need?',
    answer: 'Most business sites need the Premium Site plan, because it includes the Webflow CMS, which you need for a blog, case studies or resources. The Basic plan suits a simple site of up to 300 static pages with no CMS. Teams that need publishing workflows, localization and governance look at the Team or Enterprise platform plans. We confirm the plan against Webflow’s current pricing before you buy.',
    source: { label: 'Webflow pricing', url: PRICING } },
  { id: 'Q26', category: 'plans', question: 'How many CMS items can a Webflow site have?',
    answer: 'On Webflow’s pricing page, fetched in September 2026, the Premium Site plan allows 20,000 CMS items across 40 Collections. The Team plan also lists 20,000 items, with 100 Collections, and more items for a separate fee. Enterprise limits are custom. Ecommerce products count separately from CMS items. If your content will outgrow those numbers, plan for that before you build.',
    source: { label: 'Webflow pricing', url: PRICING } },
  { id: 'Q27', category: 'plans', question: 'Can Webflow handle ecommerce?',
    answer: 'Yes, for small and mid-sized catalogs. Webflow’s ecommerce plans allow 500, 5,000 or 15,000 ecommerce items, with a 2% transaction fee on the Standard plan. That suits a design-led brand selling a focused range. For large catalogs, B2B pricing, complex subscriptions or a big app ecosystem, we usually recommend Shopify, BigCommerce or WooCommerce instead.',
    source: { label: 'Webflow pricing', url: PRICING },
    link: { label: 'Shopify development', url: '/services/shopify-development' } },
  { id: 'Q28', category: 'plans', question: 'Can Webflow connect to HubSpot or Salesforce?',
    answer: 'Yes. Webflow’s official HubSpot app can connect native Webflow forms to HubSpot or style HubSpot forms visually. Marketo has an app in Webflow’s marketplace. Salesforce and other tools connect through Zapier or Make, or through custom code and Webflow’s APIs. We map every form to the right CRM fields and test each submission end to end before launch.',
    source: { label: 'Webflow HubSpot app', url: 'https://webflow.com/apps/detail/hubspot' } },

  // Working with FactoryJet
  { id: 'Q29', category: 'working', question: 'Who owns the Webflow site after launch?',
    answer: 'You do. We set up the Webflow site and its hosting plan under your own Workspace, with your billing, and add our team as collaborators while we work. Your domain, analytics and Search Console also stay in your name. If you ever move to another agency, you remove our access and nothing needs to be transferred back.' },
  { id: 'Q30', category: 'working', question: 'How long does a Webflow website take to build?',
    answer: 'A custom Webflow marketing site takes 3 to 5 weeks from approved design direction to launch. Sites with a migration, many CMS Collections or several integrations take 5 to 8 weeks, and enterprise builds with localization or custom code components take 8 to 14 weeks. A site of up to 5 pages can be done with 7-day delivery. We deliver on time on 97% of projects.' },
  { id: 'Q31', category: 'working', question: 'Do you offer Webflow maintenance and support?',
    answer: 'Yes. The team that built your site supports it after launch. Webflow handles hosting, security patches and backups, so support is about the site itself: new pages and CMS templates, form and integration fixes, redirect updates, speed checks, SEO and AI search reporting, and training new editors. You can keep us on a monthly plan or call us when you need us.',
    link: { label: 'Website maintenance services', url: '/services/website-maintenance' } },
  { id: 'Q32', category: 'working', question: 'Can you add an AI chatbot or AI agent to a Webflow site?',
    answer: 'Yes. We build AI chatbots and agents that answer questions from your own content, qualify leads and hand conversations to your team, then embed them on your Webflow site with custom code. The agent is built for you and you own it. Because the same team builds the site and the agent, form data, CRM fields and tracking stay consistent.',
    link: { label: 'AI chatbot development', url: '/services/ai-chatbot-development' } },
];
