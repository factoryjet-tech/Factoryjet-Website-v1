import type { CaseStudy } from './index'

// ─── Shopholistico: custom Shopify theme for a whole-food supplement brand ──
// Added 2026-09-29. Client naming approved by Bhavesh. Every claim below comes
// from the project repo (README.md, HANDOVER.md, docs/, git history) or the
// live store (shopholistico.com, fetched 2026-09-29). No sales, traffic or
// conversion figures are asserted because none were measured. The project
// folder is labelled "Aus." but the store ships within the U.S. only (live
// shipping policy), so no Australian market is claimed. Do not add numbers
// without a measured source.
export const shopholisticoCaseStudy: CaseStudy = {
  slug: 'shopholistico-shopify-store',
  client: 'Shopholistico',
  tagline: 'A custom Shopify theme for a whole-food supplement brand selling in the US.',
  industry: 'Whole-Food Supplements (DTC)',
  services: [
    'Shopify Store Build',
    'Custom Shopify Theme',
    'Subscription Setup',
    'Meta Ad Landing Pages',
    'Theme Migration and Launch',
    'SEO and AI Search Foundations',
  ],
  headline: 'A Custom Shopify Theme and Store Rebuild for Shopholistico',
  summary:
    'Shopholistico sells whole-food vitamin D and calcium supplements online in the US. FactoryJet designed and built a custom Shopify theme from scratch, added tiered subscriptions, a bundle and two ad landing pages, and moved the store onto the new theme in September 2026.',
  category: 'E-Comm',
  clientUrl: 'https://www.shopholistico.com',
  location: 'United States',
  heroStats: [
    { value: 'Custom', label: 'Shopify theme, not a template' },
    { value: '3 tiers', label: 'Subscribe and save plans' },
    { value: '2', label: 'Meta ad landing pages' },
  ],
  glanceTiles: [
    { label: 'INDUSTRY', value: 'Whole-Food Supplements' },
    { label: 'PLATFORM', value: 'Shopify (Online Store 2.0)' },
    { label: 'SERVICES', value: 'Theme Build + Launch' },
    { label: 'MARKET', value: 'United States', note: 'Ships within the U.S. only' },
    { label: 'TIMELINE', value: 'About 1 Month', note: 'First commit 28 Aug, live 27 Sep 2026' },
    { label: 'APPS', value: 'Appstle, Judge.me, Klaviyo' },
  ],
  keyMetrics: [
    { label: 'Theme', value: 'Built from scratch', note: 'Shopify Online Store 2.0, not a Dawn fork' },
    { label: 'Subscriptions', value: '10% / 15% / 20%', note: 'Every 1, 2 or 3 months, through Appstle' },
    { label: 'Landing Pages', value: 'Vitamin D + Calcium', note: 'Built for Meta ad traffic' },
    { label: 'Launch', value: '27 Sep 2026', note: 'Published on shopholistico.com' },
  ],
  headlineMetric: {
    label: 'What Changed',
    value: 'A store built for this brand',
    note: 'Its own theme, its own page types, and subscriptions shown the way the brand sells',
  },
  resultsMetrics: [
    { label: 'Theme', value: 'Custom, live' },
    { label: 'Subscriptions', value: '3 tiers' },
    { label: 'Bundle', value: 'Vitamin D + Calcium' },
    { label: 'Reviews', value: 'Judge.me on product pages' },
    { label: 'Structured Data', value: 'Product + FAQ schema' },
    { label: 'AI Crawlers', value: 'Allowed by name' },
  ],
  challenge:
    'Shopholistico is a small brand that sells two whole-food supplements, vitamin D and calcium, to shoppers in the US. The owner wanted to keep her brand but clean it up. Her old site used four colors that fought each other. She also wanted two landing pages for Meta ads, one per product, and help being found in Google and in AI answers. Two more problems sat under the surface. Her policy pages were empty, even though the real policies lived in her Help Center. And her subscription discount was one flat rate, when she wanted to reward people who order less often but in bigger amounts.',
  challengePullQuote:
    'The brand was right. The store around it was working against it.',
  approach:
    'We started with a design mockup and a written spec, then built a custom Shopify theme from it instead of bending a stock template. Before writing copy, we read her live store from the outside: her sitemap, her public pages and her product data. That told us which subscription app she used, what her real shipping terms were, and which products existed. Every health or lab claim had to trace back to her own published words. We wrote a small checker that fails the build if an unsupported claim shows up in the theme. She reviewed each round on a preview store, and we applied her feedback page by page before anything touched her live store.',
  techStack: [
    'Shopify Online Store 2.0',
    'Liquid',
    'Tailwind CSS',
    'Web Components',
    'GSAP',
    'Lenis',
    'Appstle Subscriptions',
    'Judge.me',
    'Klaviyo',
    'Shopify Forms',
    'Shopify Collabs',
  ],
  solution:
    'The new theme covers the whole store: home page, shop page, product pages, cart drawer, blog, search, 404, and about 20 content pages such as the Help Center, FAQ pages, policies and a get-tested page. Subscriptions now come in three tiers through Appstle: every month at 10% off, every 2 months at 15%, and every 3 months at 20%. We added a vitamin D plus calcium bundle, a gift card page, and a subscribe-and-save offer inside the cart. The two Meta ad landing pages drop the main menu and footer so the page stays on one product. Product and FAQ pages carry structured data, and robots.txt lets named AI crawlers like GPTBot, ClaudeBot and PerplexityBot read the site. At launch we carried over her existing Klaviyo, Judge.me, Appstle and Shopify Forms app embeds, so signups, reviews and subscriptions kept working on day one.',
  screenshots: [
    {
      src: '/images/work/shopholistico-desktop.webp',
      alt: 'Shopholistico home page on desktop, built on a custom Shopify theme by FactoryJet',
      caption: 'Home page on the custom theme, live on shopholistico.com.',
      device: 'desktop',
    },
    {
      src: '/images/work/shopholistico-mobile.webp',
      alt: 'Shopholistico store on a mobile phone',
      caption: 'The same store on mobile.',
      device: 'mobile',
    },
  ],
  results:
    'The custom theme went live on shopholistico.com on 27 September 2026, about a month after the first commit. The store now has tiered subscriptions, a bundle, two ad landing pages, real reviews on product pages, and filled-in policy pages. We are not publishing sales, traffic or conversion numbers here. The theme is new, and we would rather report measured results later than estimates now.',
  imageUrl: '/images/case-studies/shopholistico-shopify-store-hero.jpg',
  ogImageUrl: '/images/case-studies/shopholistico-shopify-store-og.png',
  publishedDate: '2026-09-29',
  modifiedDate: '2026-09-29',
  ctaTeaser: 'Running a Shopify store that has outgrown its template? We can build a theme around how you actually sell.',
  relatedSlugs: ['belle-maison-ecommerce-success', 'gpsuk-promotional-products'],
  faqs: [
    {
      q: 'Why build a custom Shopify theme instead of buying one?',
      a: 'A bought theme decides your page layouts before anyone looks at what you sell. Shopholistico needed things a stock theme does not do well: tiered subscription cards, supplement facts panels, landing pages with no menu, and pages that explain ingredients. Building the theme ourselves meant every section was made for those jobs, and the store owner can still edit it in the Shopify theme editor.',
    },
    {
      q: 'Can I keep my subscription app when I switch themes?',
      a: 'Usually, yes. Shopholistico uses Appstle, which works through Shopify\'s own subscription system. That meant the new theme could show her plans without any special widget code, and her existing subscribers were not affected. We checked this against her live store before building, not after.',
    },
    {
      q: 'Will changing my theme break my reviews, email signups or other apps?',
      a: 'It can if nobody checks. Many apps run through "app embeds" that are switched on per theme, so a new theme starts with them off. Before Shopholistico launched, we copied over her Klaviyo, Judge.me, Appstle and Shopify Forms embeds so signups, reviews and subscriptions kept working on day one.',
    },
    {
      q: 'How does a landing page for Meta ads differ from a product page?',
      a: 'A product page has to serve everyone, so it has a menu, a footer and lots of ways out. A landing page for an ad has one job. For Shopholistico we built one page for vitamin D and one for calcium, with the main menu and footer removed so the visitor stays focused on that one product.',
    },
    {
      q: 'Can I add a subscription upsell to Shopify checkout?',
      a: 'Only on Shopify Plus, which lets stores add content inside checkout. Shopholistico is not on Plus, so we put the "subscribe and save" offer in the cart instead. Every buyer passes through the cart on the way to checkout, so they still see it.',
    },
    {
      q: 'How do you avoid risky health claims on a supplement store?',
      a: 'We only publish claims the brand has already made and can back up. For Shopholistico we kept a list of verified facts and wrote a small checker that stops the theme from shipping if a dosage or lab claim appears that is not on that list. If a claim has no source, we remove it rather than soften the rule.',
    },
    {
      q: 'Does FactoryJet work on stores that sell in the US?',
      a: 'Yes. Shopholistico sells and ships within the US, in US dollars. FactoryJet is a registered Shopify Partner and builds and maintains Shopify stores for US brands, working with the store owner through review rounds on a preview store before anything goes live.',
    },
  ],
}
