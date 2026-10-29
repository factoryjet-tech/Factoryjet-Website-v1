import type { Metadata } from 'next';
import { Fragment } from 'react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';

const CANONICAL = 'https://factoryjet.com/au/ecommerce-redesign';
const PUBLISHED = '2026-10-29';
const UPDATED = '2026-10-29';
const TITLE = 'Ecommerce Website Redesign Australia | Shopify Store Redesign | FactoryJet';
const H1 = 'Ecommerce Website Redesign Australia: Rebuild the Store, Keep the Orders Coming';
const DESCRIPTION =
  'Ecommerce website redesign for Australian stores that already trade. A draft on your own products before you sign, with Xero, Afterpay and Australia Post retested.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Ecommerce Redesign Australia', url: CANONICAL },
];

/* ─── External sources, each fetched and read on 2026-10-29 (HTTP 200,
       quoted claim found in the fetched body) ──────────────────────────── */
// Google Search Central, site moves with URL changes: "a small to medium-sized
// website can take a few weeks for most pages to move, and larger sites take
// longer"; "the visibility of your content in Search may fluctuate temporarily
// during the move"; "Keep the redirects for as long as possible, generally at
// least 1 year"; "Avoid chaining redirects".
const SRC_GOOGLE_MOVE = 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes';
// OAIC, Small business: "A small business is one with an annual turnover of $3
// million or less." and "Regardless of turnover, the Privacy Act covers any
// business that is" (health service providers, businesses trading in personal
// information, and others listed).
const SRC_OAIC = 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business';
// Shopify Help Center, duplicating themes: "You can duplicate your theme in your
// store and customize the duplicate"; a backup copy lets you "discard your
// changes"; "If you already have 20 themes added to your Shopify admin" you must
// delete one before duplicating another.
const SRC_SHOPIFY_DUPLICATE = 'https://help.shopify.com/en/manual/online-store/themes/managing-themes/duplicating-themes';
// Spark Interact (Sydney, NSW), "Website Redesign Costs Australia", posted 22 Aug
// 2024: ecommerce redesign, Freelancer "$8,500 to $20,000+"; Agency "$40,000 to
// $75,000+" "(can be higher for complex stores)". GST status not stated.
const SRC_SPARK = 'https://www.sparkinteract.com.au/web/website-redesign-costs-australia/';
// Redback Solutions (Newcastle, NSW), "How much does a website cost in Australia",
// 15 Nov 2023: "theme-based Ecommerce websites generally cost between AUD$15,000 [to]
// AUD$25,000" and "custom designed and developed Ecommerce websites generally
// starting at AUD$35,000". GST status not stated.
const SRC_REDBACK = 'https://www.rb.com.au/blog/how-much-does-a-website-cost-in-australia/';

/* ─── FAQ source of truth (drives UI + FAQPage schema). Questions shaped by
       DataForSEO Australia data pulled 2026-10-29 (search volume + People Also
       Ask for "ecommerce website redesign" and "website redesign cost australia"). */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'Redesign or replatform' },
  { key: 'search',  label: 'Rankings and redirects' },
  { key: 'cost',    label: 'Cost and timing' },
  { key: 'systems', label: 'Australian systems and rules' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Redesign or replatform ──
  { category: 'basics', question: 'What does an ecommerce website redesign cover for an Australian store?',
    answer: 'It covers the parts shoppers touch: the theme, menus, collection pages, product pages, search, filters, cart and the phone layout. The platform, product records, customer accounts and order history stay where they are. For an Australian store we also retest the parts that sit behind the design, such as Afterpay or Zip messaging, shipping rates, GST display and the order sync into Xero or MYOB.' },
  { category: 'basics', question: 'How do we tell whether we need a redesign or a new platform?',
    answer: 'Ask what is actually blocking sales. If shoppers struggle with pages, filters or checkout on a phone, the fix is a redesign. If your team keeps paying for workarounds because the platform cannot hold trade pricing, multiple warehouses or your catalogue size, a platform move may be cheaper over time. We answer this on the first call by looking at the live store with you.',
    links: [{ href: '/au/ecommerce-development', label: 'Ecommerce development in Australia' }] },
  { category: 'basics', question: 'Can you redesign our Shopify store while it keeps taking orders?',
    answer: 'Yes. Shopify lets you duplicate a theme and work on the copy while the live one keeps selling. We build the redesign in that copy, load it with your real products, and send you a preview link. Launch is a theme publish at a quiet hour. Your old theme stays in the admin as a fallback, inside the 20-theme limit Shopify sets.' },
  { category: 'basics', question: 'Can ChatGPT redesign our online store for us?',
    answer: 'It can help with parts of the job. It writes draft product copy, suggests menu structures and explains theme code. It cannot test a real checkout with Afterpay, check that a refund lands correctly in Xero, map hundreds of old web addresses, or take responsibility when a sale fails at 9pm. Use it to speed up writing, and let an accountable team handle the build and the testing.' },
  { category: 'basics', question: 'Which platforms do you redesign?',
    answer: 'An Australian store on Shopify or Shopify Plus usually has Afterpay or Zip, a Xero or MYOB connector and an Australia Post or Sendle app plugged in, and we redesign around all of them. We do the same for WooCommerce, BigCommerce, Adobe Commerce (Magento) and headless Next.js stores, where those links are often plugins or custom code. On Shopify we work as a registered Shopify Partner. When the platform itself is what holds sales back, the move and the new design go into one project with one launch.',
    links: [{ href: '/au/shopify-development', label: 'Shopify development in Australia' }] },

  // ── Rankings and redirects ──
  { category: 'search', question: 'Will a redesign drop our Google rankings?',
    answer: 'Some movement is normal. Google says visibility may fluctuate temporarily during a site move and that rankings settle over time. Lasting drops come from broken old addresses or ranking pages that lose their content. So before design starts we list every URL that earns clicks or links, keep the ones we can, and send each changed one to its closest new page in a single hop.' },
  { category: 'search', question: 'How long do redirects need to stay live after the new store launches?',
    answer: 'Google recommends keeping redirects for as long as possible, generally at least one year, and suggests keeping them indefinitely for visitors who saved old links. The usual way they disappear is a later clean-up, a new developer or a second platform move that removes rows nobody recognised. We hand over the full redirect list so your team knows which rows must stay.' },
  { category: 'search', question: 'How long does Google take to settle after a redesigned store goes live?',
    answer: 'Google says a small to medium site can take a few weeks for most pages to move, and larger sites take longer. A store with a few thousand products sits at the longer end. We check Search Console every day in the first weeks for 404 errors, redirect chains and clicks on your top pages, and fix problems the same day we find them.' },
  { category: 'search', question: 'Does a redesign change how ChatGPT and Google AI answers describe our store?',
    answer: 'It can help. AI assistants read your pages much as a search crawler does, so plain text answers about delivery times, returns, sizing and payment options give them something accurate to quote. A redesign is a good moment to move that detail out of images and tabs into readable text, and to add product structured data, the code that tells search engines price and stock.',
    links: [{ href: '/au/ai-seo', label: 'AI SEO for Australian businesses' }] },
  { category: 'search', question: 'Should we fix SEO before or after the redesign?',
    answer: 'Do the audit before and the content work after. The audit tells the designers which pages carry your traffic, which headings and copy must survive, and which old addresses need a redirect. Collection copy, buying guides and link building come after launch, once the new templates are stable. Doing both at once usually means arguing about the same page twice.',
    links: [{ href: '/au/ecommerce-seo', label: 'Ecommerce SEO in Australia' }] },

  // ── Cost and timing ──
  { category: 'cost', question: 'How much does an ecommerce website redesign cost in Australia?',
    answer: 'Published Australian figures vary with scope. Spark Interact, a Sydney agency, lists agency ecommerce redesigns at $40,000 to $75,000 or more, and freelancer ones at $8,500 to $20,000 or more. Redback Solutions in Newcastle lists theme-based ecommerce sites at AUD$15,000 to AUD$25,000, with custom builds from AUD$35,000. Neither page says whether GST is included. FactoryJet quotes a fixed price in writing after a short scoping call.' },
  { category: 'cost', question: 'Why do redesign quotes for the same store differ so much?',
    answer: 'Because each agency is quoting a different job. One quote may adapt an existing theme and leave integrations alone. Another may include custom templates, a redirect map, retesting Xero, Afterpay and shipping, product photography and a month of checks after launch. Ask each agency to list what is in and what is out, line by line, and whether the figure is ex or inc GST, then compare like with like.' },
  { category: 'cost', question: 'How long does an ecommerce redesign take?',
    answer: 'Plan back from the trading dates that matter. A custom theme takes 3 to 5 weeks, so a store that wants it live before the Christmas trade should start by early October. Add Shopify Plus features, subscriptions, B2B trade pricing or a platform move and it becomes 5 to 8 weeks. A headless store or one with a lot of custom code needs 8 to 14 weeks. We fix the dates for your photos, copy and sign-offs in week one, because those are what slip.' },
  { category: 'cost', question: 'Can we split the redesign into phases?',
    answer: 'Yes. If you want the site left alone through November and December, or kept clear of your EOFY sales in June, we cut the work to fit around those dates: one phase can ship in the quiet weeks after January, the next before the June sales, and the rest once trading settles. Each phase is scoped, priced and signed on its own, and the store works normally between them.' },

  // ── Australian systems and rules ──
  { category: 'systems', question: 'Will our Xero or MYOB sync keep working after the redesign?',
    answer: 'It should, because a redesign changes the shop front, not the order data. The risk is in the details: a new theme that renames a shipping method, a changed tax setting, or a new app that adds fees in a different place. We place test orders, including a refund, and check with your bookkeeper that each one lands in Xero or MYOB the way it did before launch.' },
  { category: 'systems', question: 'What happens to Afterpay, Zip and Stripe during a redesign?',
    answer: 'The payment accounts stay connected, because they sit in the platform settings rather than the theme. What the theme controls is the messaging: the instalment notes on product pages and the badges in the cart. Those often break or double up on a new theme. We check each one on a phone and run a real payment through every method before the new theme goes live.' },
  { category: 'systems', question: 'Do shipping rates from Australia Post, StarTrack or Sendle need retesting?',
    answer: 'Yes, every time. Live rates come from carrier apps that read product weights and dimensions, and a redesign often changes product templates or bundles. We test checkouts to a metro postcode, a regional one and a remote one, check free-shipping thresholds and cut-off messages, and confirm labels still print. Getting regional rates wrong costs margin on every order.' },
  { category: 'systems', question: 'Does a redesign affect stock sync with Cin7, Unleashed or NetSuite?',
    answer: 'Not if the product records stay the same. Most inventory and ERP connections match items by SKU, so a redesign that leaves SKUs and variants alone keeps the sync intact. Trouble starts when someone restructures products for a new filter layout. We agree with your operations lead which system owns stock, prices and product data before any product is changed.' },
  { category: 'systems', question: 'Does the Privacy Act apply to our online store?',
    answer: 'It applies if your annual turnover is above $3 million, and to some smaller businesses regardless of turnover, per the OAIC. Check which side of that line you sit with your adviser. A redesign changes forms, tracking scripts and sign-up flows, so it is the right time to have your adviser check the privacy policy against what the new store collects.' },
  { category: 'systems', question: 'We also sell on Amazon.com.au, eBay and Bunnings Marketplace. Does the redesign touch those?',
    answer: 'The listings themselves sit on each marketplace, but many stores feed them from the same product data the redesign touches. If titles, variant names or images change in your store, a connected feed can push those changes to every channel. We list your feeds and connectors at the start and agree which product fields are frozen during the project.' },

  // ── Working with us ──
  { category: 'working', question: 'Can we see the redesign before we sign?',
    answer: 'Yes. Working software on your own data before you sign. We build a draft of your key templates inside a copy of your own theme, on your real products, and send you a preview link. Live shoppers never see it. You tap through a product page and the cart on your own phone, then decide. After that, each phase is scoped, priced and signed on its own.' },
  { category: 'working', question: 'What should we put in a redesign brief or RFP?',
    answer: 'Your platform and plan, the systems the store talks to (accounting, stock, shipping, payments, marketplaces), your top-selling ranges, what is not working and how you know, any dates you cannot move such as a launch or the Christmas trade, and who signs off. Attach it after the first step of the form on this page. A written brief gets a faster and firmer answer than a call alone.' },
  { category: 'working', question: 'Who owns the new theme and code?',
    answer: 'You do, from day one. The redesigned theme is published in your store, and its source code lives in a repository registered to your business. Paid apps, hosting and any AI tools can be billed to your own accounts at cost, and we add no markup. If you later switch agencies or hire your own developer, they start with everything and need nothing from us.' },
  { category: 'working', question: 'What happens if something breaks after launch?',
    answer: 'Defects are fixed inside the build price for a cover period we agree before work starts. After that, support is optional. Each change is quoted and approved before we start it, and there is no monthly minimum. You can book a single check before a big sale, such as Black Friday, and nothing else.',
    links: [{ href: '/au/website-maintenance', label: 'Website care in Australia' }] },
  { category: 'working', question: 'Can you run a redesign for a store outside Sydney or Melbourne?',
    answer: 'Yes. We work with established online stores across Australia, from Sydney and Melbourne to Brisbane, Perth, Adelaide and regional towns. You review progress on a preview link inside your own admin and talk it through with us on scheduled calls, so where your warehouse sits makes no difference. Calls are scheduled in Australian business hours, and the founder is involved in every project.' },
];

/* ─── Eight things a trading store must not lose in a redesign ─────── */
const KEEP_ITEMS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Web addresses that earn traffic', d: 'Every URL with clicks, impressions or backlinks gets a row in a redirect map before any design work. One hop to the closest new page, never a chain.' },
  { n: '02', t: 'Afterpay, Zip and Stripe at checkout', d: 'Instalment messages, cart badges and a real payment on each method, checked on a phone before the new theme is published.' },
  { n: '03', t: 'Shipping rates to every postcode', d: 'Australia Post, StarTrack or Sendle rates retested to metro, regional and remote postcodes, with cut-off and free-shipping messages.' },
  { n: '04', t: 'Orders landing in Xero or MYOB', d: 'Test orders and a refund traced into the books with your bookkeeper, so GST, fees and refunds land where they did before launch.' },
  { n: '05', t: 'Stock from Cin7, Unleashed or your ERP', d: 'SKUs and variants frozen during the project, so stock sync with Cin7, Unleashed, NetSuite or Odoo keeps matching item for item.' },
  { n: '06', t: 'Marketplace feeds', d: 'Feeds to Amazon.com.au, eBay or Bunnings Marketplace listed at the start, with the product fields that must not change written down.' },
  { n: '07', t: 'Customer accounts and reviews', d: 'Logins, order history, saved addresses and product reviews stay in place, because they belong to the platform, not the theme.' },
  { n: '08', t: 'Purchase tracking', d: 'GA4 and ad platform purchase events checked against platform sales after launch, so a new theme does not quietly stop recording revenue.' },
];

const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;
const KEEP_ICONS = [
  'M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1m2 4a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1',
  'M3 6h18v12H3V6Zm0 4h18M7 15h4',
  'M3 7h11v9H3V7Zm11 3h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  'M5 3h14v18H5V3Zm3 4h8m-8 4h2m4 0h2m-8 4h2m4 0h2',
  'M4 7l8-4 8 4v10l-8 4-8-4V7Zm0 0 8 4 8-4M12 11v10',
  'M4 4h16v16H4V4Zm0 5h16M9 9v11',
  'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4 21c0-4 4-6 8-6s8 2 8 6',
  'M4 4v16h16M8 16l4-5 3 3 5-6',
] as const;

/* ─── Stack table: what a redesign can break, and the test before launch ─ */
const STACK_ROWS: { sys: string; risk: string; test: string }[] = [
  { sys: 'Xero, MYOB or QuickBooks', risk: 'A renamed shipping method or new fee app changes how orders post', test: 'Test orders and a refund traced into the ledger with your bookkeeper' },
  { sys: 'Afterpay, Zip, Stripe', risk: 'Instalment messages missing or doubled on the new theme', test: 'A real payment on every method, on a phone' },
  { sys: 'Australia Post, StarTrack, Sendle', risk: 'Bundles or new templates send the wrong weight to the rate app', test: 'Checkouts to metro, regional and remote postcodes' },
  { sys: 'Cin7, Unleashed, NetSuite, Odoo', risk: 'Products restructured for new filters stop matching by SKU', test: 'SKU freeze during the project, then a stock count check' },
  { sys: 'Amazon.com.au, eBay, Bunnings Marketplace', risk: 'Changed titles or images flow out through a connected feed', test: 'Frozen field list agreed with whoever runs the feed' },
  { sys: 'GA4 and ad platforms', risk: 'Purchase events stop firing after the theme switch', test: 'Tracked revenue compared with platform sales for launch week' },
];

/* ─── Numbered project steps ──────────────────────────────────────── */
const STEPS: { t: string; d: string }[] = [
  { t: '01 · Read the brief and the live store', d: 'You send a brief or RFP, or tell us on a call. We look at the live store on a phone, your analytics and Search Console, and list every system the store talks to. You leave the call knowing whether you need a redesign, a refresh or a platform move.' },
  { t: '02 · Draft on your own data', d: 'We build a draft of the product and collection templates in a copy of your theme, on your real products. You open the preview link on your own phone before you sign anything.' },
  { t: '03 · Scope and fixed price per phase', d: 'A written scope for each phase with what is in, what is out and the price, so your finance team can approve one step at a time. Each phase is signed on its own.' },
  { t: '04 · Redirect map and integration list', d: 'Every URL that earns clicks or links gets a row. Every connection, from Xero to Australia Post to your marketplace feeds, gets an owner and a test before launch.' },
  { t: '05 · Design and build', d: 'Templates designed phone first, built in the duplicate theme while the live store keeps trading. One round of consolidated feedback per template keeps the timeline honest.' },
  { t: '06 · Test, launch, watch', d: 'Real payments on every method, a refund, three postcodes, the redirect map row by row. Then we publish at a quiet hour and check Search Console and orders daily for the first weeks.' },
];

/* ─── House terms (approved wording, 15-16 Oct 2026) ──────────────── */
const TERMS: { t: string; d: string }[] = [
  { t: 'Demo before you sign', d: 'Working software on your own data before you sign: a draft of your templates on your real products.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. Stop after any phase and you still own a working store.' },
  { t: 'Defect cover in the build price', d: 'Defects are fixed inside the build price for a cover period agreed before work starts.' },
  { t: 'You own everything', d: 'The theme, the code and the repository are yours from day one. Hosting, apps and AI tools can run in your own accounts at cost, with no markup.' },
  { t: 'Optional support, no monthly minimum', d: 'Each change is quoted and approved before we start. We can keep managing the store for you if you want that, and it is never required.' },
];

/* ─── Work we have done (platform-matched; none of these is an Australian
       client). Facts limited to src/app/services/shopify-development and
       src/app/austin/ecommerce-development, naming approved 2026-10-29. ── */
const WORK: { client: string; where: string; what: string; href: string; cta: string }[] = [
  { client: 'European Garden (Exaco)', where: 'Shopify, Texas, United States', what: 'Before Exaco signed, we built a draft theme inside its own Shopify store. It then chose us to build the new store for its European Garden brand and connect it to QuickBooks Enterprise. The store is in build now.', href: '/austin/ecommerce-development', cta: 'Read about the project' },
  { client: 'Shopholistico', where: 'Shopify, United States', what: 'A custom Shopify theme for a brand selling whole-food vitamin D and calcium, with Subscribe & Save and a bundle offer on the product pages.', href: '/case-studies/shopholistico-shopify-store', cta: 'Read the case study' },
  { client: 'DTF Virginia', where: 'Shopify, Virginia, United States', what: 'A custom Shopify theme for a print shop where buyers build their own gang sheets at each transfer size and resellers sign up for an account.', href: 'https://dtfvirginia.com/', cta: 'See the live store' },
];

const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'When the platform itself is the limit: new builds, platform moves and integrations.', go: 'Explore ecommerce →' },
  { href: '/au/shopify-development', t: 'Shopify development Australia', d: 'Shopify and Shopify Plus builds, B2B and Xero or MYOB connections.', go: 'Explore Shopify →' },
  { href: '/au/ecommerce-seo', t: 'Ecommerce SEO Australia', d: 'Collection page content and technical SEO once the new templates are live.', go: 'Explore ecommerce SEO →' },
  { href: '/au/website-maintenance', t: 'Website care Australia', d: 'Optional help after launch, each change quoted and approved first.', go: 'Explore website care →' },
  { href: '/au/ai-seo', t: 'AI SEO Australia', d: 'Getting your store named in ChatGPT, Perplexity and Google AI answers.', go: 'Explore AI SEO →' },
  { href: '/services/website-redesign', t: 'Website redesign (United States)', d: 'Our US page on redesigning business sites and online stores.', go: 'Read the US page →' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide; this page only
       references it by @id. FAQPage maps the SAME FAQ_ITEMS the page renders. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce Website Redesign Australia',
      serviceType: 'Ecommerce website redesign, Shopify store redesign, theme rebuild, redirect mapping and integration retesting',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Ecommerce website redesign for established Australian online stores that already trade: a draft on your own products before you sign, a fixed price per phase, a one-hop redirect map, and Xero, MYOB, Afterpay, Zip, Australia Post, StarTrack, Sendle, Cin7 and Unleashed connections retested before launch.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      about: { '@id': `${CANONICAL}#service` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Redesign an Australian online store that already trades: a draft theme on your own products first, a fixed price per phase, rankings protected by a one-hop redirect map, and Xero, Afterpay and shipping retested.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/shopify-development/shopify-development-og.webp', width: 1200, height: 630, alt: 'Ecommerce website redesign Australia by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). Not in VisualSlot's generated list,
   so every slot below passes its existing artwork explicitly. */
const PAGE_KEY = 'ecommerce-redesign';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_EMPHASIS = 'Keep the Orders Coming';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const HERO_ICONS = [
  'M4 4h16v16H4V4Zm0 5h16M9 9v11',
  'M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1m2 4a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1',
  'M4 12h12m-4-4 4 4-4 4M20 4v16',
] as const;

export default function EcommerceRedesignAUPage() {
  return (
    <>
      <script id="ld-au-ecommerce-redesign" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO (copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Ecommerce Redesign Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your Australian store already takes orders, ranks on Google and posts sales into Xero or MYOB. The
                shop front is what has fallen behind: slow product pages, filters that cannot cope with the range, a
                cart that fights shoppers on a phone. We redesign it inside your own store while it keeps trading, and
                we retest Afterpay, Zip, Stripe, Australia Post, StarTrack, Sendle and your Cin7 or Unleashed stock
                sync before anything goes live.
              </p>
              <HeroInlineForm region="au" source="au_ecommerce_redesign_hero"
                submitLabel="See a draft of my store"
                trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                service="Ecommerce Website Redesign" />
            </div>

            <form
              className="specpanel"
              aria-label="What stays and what changes in a FactoryJet store redesign"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What a store redesign keeps and changes: a draft theme in your own store, Australian payment, shipping and accounting connections retested, and old web addresses mapped one hop"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>REDESIGN · WHAT STAYS, WHAT CHANGES</span>
                <span className="sys"><span>Shopify, WooCommerce, BigCommerce</span><span>Adobe Commerce</span></span>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what stays and what changes">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="redesign-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">a copy of your theme, your real products</span>
                  <span className="title">Draft templates</span>
                  <span className="tag">Before you sign</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="redesign-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">payments, couriers, accounts, stock</span>
                  <span className="title">Xero, Afterpay, Australia Post</span>
                  <span className="tag">Retested</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="redesign-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">every URL that earns clicks or links</span>
                  <span className="title">Old web addresses</span>
                  <span className="tag">One hop</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Product records, SKUs and customer accounts stay where they are. Only the shop front changes.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified facts only, each linked to its primary source) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '1 year', t: "Google's general guide for how long to keep old-to-new redirects live after a site move (as long as possible)", s: 'Google Search Central', u: SRC_GOOGLE_MOVE },
              { v: 'Weeks', t: 'for most pages of a small to medium site to move in Google, and longer for large catalogues', s: 'Google Search Central', u: SRC_GOOGLE_MOVE },
              { v: '$3M', t: 'annual turnover above which a business falls outside the Privacy Act small business exemption', s: 'OAIC, Small business', u: SRC_OAIC },
              { v: '20', t: 'themes a Shopify admin holds before one must go, so the old theme can stay as a fallback', s: 'Shopify Help Center', u: SRC_SHOPIFY_DUPLICATE },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...extLink}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />29 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What is an ecommerce website redesign for a store that already trades?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">It replaces the shop front and leaves the business underneath alone.</span> Templates,
                    menus, product pages, filters, cart and phone layout get rebuilt. The platform, SKUs, customer
                    accounts, reviews and order history stay put, and every web address that earns traffic is kept or
                    redirected in one hop, so the store keeps selling and ranking through launch.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms on this page</div>
                    <p>
                      A <b>theme</b> is the set of templates that decides how your store looks. A <b>301 redirect</b> tells
                      browsers and Google that an address has moved for good, so a shopper on an old link such as
                      /collections/summer-linen lands on its new collection page instead of an error. An <b>integration</b> is
                      any app or link that keeps two systems in step, so a sale in your store shows up in Xero and a stock
                      count in Cin7 shows up on the product page.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    For an established Australian store the design is usually the easy half. The hard half is the
                    plumbing that a new theme can disturb: Afterpay messages, carrier rates to regional postcodes,
                    refunds posting to the right Xero account, and marketplace feeds that copy product titles out to
                    Amazon.com.au or eBay. This page is mostly about that half.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" src="/images/au/visual-pass-2026-10-03/ecommerce-development/facts-1536.webp" srcSet="/images/au/visual-pass-2026-10-03/ecommerce-development/facts-640.webp 640w, /images/au/visual-pass-2026-10-03/ecommerce-development/facts-1280.webp 1280w, /images/au/visual-pass-2026-10-03/ecommerce-development/facts-1536.webp 1536w" sizes="(max-width: 820px) calc(100vw - 40px), 560px" kind="photo" ratio="3:2" className="factphoto"
                subject="A store owner reviewing product pages on her online store at a timber desk"
                imageAlt="A store owner reviewing product pages on her online store, seen over her shoulder at a bright timber desk" />
            </div>
          </div>
        </section>

        {/* ═══ LISTICLE: EIGHT THINGS NOT TO LOSE → capgrid ═══ */}
        <section className="section capabilities" id="keep">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What a redesign must not break</div>
              <h2>Eight parts of a trading Australian store we protect in every redesign</h2>
              <p className="lead">
                A redesign quote can list only templates and pages. A store that already turns over real money has more to
                lose than that. Each of these eight gets an owner and a test before the new theme is published.
              </p>
            </div>
            <div className="capgrid">
              {KEEP_ITEMS.map((s, i) => (
                <div key={s.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">KEEP‑{s.n}</span><svg {...CAP_ICON}><path d={KEEP_ICONS[i]} /></svg></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ STACK TABLE → comparison ═══ */}
        <section className="section comparison" id="stack">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Your systems, retested</div>
              <div>
                <h2>Where a new theme can quietly break an Australian store</h2>
                <p className="lead">
                  None of these systems live in the theme, yet each one reads something the theme or the product
                  templates control. This is the list we work through with your team before launch day.
                </p>
              </div>
            </div>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="ecommerce redesign systems retest table">
              <table>
                <thead>
                  <tr>
                    <th>System</th>
                    <th>What a redesign can break</th>
                    <th className="fj">Test before launch</th>
                  </tr>
                </thead>
                <tbody>
                  {STACK_ROWS.map((r) => (
                    <tr key={r.sys}><th scope="row">{r.sys}</th><td>{r.risk}</td><td className="fj">{r.test}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Running Shopify? A duplicated theme lets the redesign happen beside the live one, per{' '}
              <a href={SRC_SHOPIFY_DUPLICATE} {...extLink}>Shopify Help Center, duplicating themes</a>, checked 29 October 2026.
            </p>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Want to see your own store redesigned before you commit?'}
            sub={'Send the store address and the systems it talks to. We build a draft of your product and collection templates on your real products and send you a preview link.'}
            label={'See a draft of my store'}
          />
        </div>

        {/* ═══ NUMBERED PROJECT STEPS → timeline ═══ */}
        <section className="section process" id="steps">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a redesign runs</div>
                <h2>Six steps from your brief to a live redesigned store</h2>
                <p className="lead">
                  The live store trades through every step. Open each one to see what happens and what we need from you.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Typical timelines</div>
                <ul className="trigrows">
                  <li><span className="m">Custom-theme redesign</span><span className="n">same platform, standard integrations</span><span className="t">3 to 5 weeks</span></li>
                  <li><span className="m">Advanced redesign</span><span className="n">Shopify Plus, B2B, subscriptions or a platform move</span><span className="t">5 to 8 weeks</span></li>
                  <li><span className="m">Headless or heavily custom</span><span className="n">Next.js or Hydrogen front end</span><span className="t">8 to 14 weeks</span></li>
                  <li><span className="m">Draft of your templates</span><span className="n">on your own products</span><span className="t">Before you sign</span></li>
                </ul>
              </div>
            </div>
            <div className="timeline">
              {STEPS.map((s) => {
                const [idx, title] = s.t.split(' · ');
                return (
                  <details key={s.t} className="tnode">
                    <summary>
                      <div className="idx">{idx}</div>
                      <h3>{title}<span className="chev" aria-hidden="true">+</span></h3>
                    </summary>
                    <p>{s.d}</p>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ RANKINGS → facts + photo ═══ */}
        <section className="section facts" id="rankings">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Search, through launch</div>
              <h2>Keeping Google rankings through an Australian store redesign</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Google is plain about what to expect. Its site move guide says a small to medium site can take a few
                  weeks for most pages to move, larger sites take longer, and visibility may fluctuate during the move
                  before it settles. A store with several thousand product URLs should plan for the longer end and
                  avoid launching the week before a big sale.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The same guide asks you to avoid chaining redirects and to point each old address straight at its
                  final page. We check every destination in the map against every source, so no new rule lands on an
                  address that another rule already forwards. Google also advises keeping redirects for at least a year.
                  We hand the list over so a later clean-up does not delete rows that still carry traffic.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    After launch we read Search Console daily: new 404 errors, clicks on your top pages against the same
                    weekdays before launch, and whether the new sitemap was fetched. Ongoing content work then sits with
                    our <a href="/au/ecommerce-seo">ecommerce SEO team in Australia</a>.
                  </p>
                  <p className="au-note">
                    Source: <a href={SRC_GOOGLE_MOVE} {...extLink}>Google Search Central, site moves with URL changes</a>.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" src="/images/au/visual-pass-2026-10-03/ecommerce-development/process-1536.webp" srcSet="/images/au/visual-pass-2026-10-03/ecommerce-development/process-640.webp 640w, /images/au/visual-pass-2026-10-03/ecommerce-development/process-1280.webp 1280w, /images/au/visual-pass-2026-10-03/ecommerce-development/process-1536.webp 1536w" sizes="(max-width: 820px) calc(100vw - 40px), 560px" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A designer sketching mobile product page wireframes in a paper sketchbook, a phone and closed laptop beside him"
                imageAlt="A designer sketching mobile product page wireframes in a paper sketchbook, with a phone and a closed laptop beside him"
                caption="Phone first. The product page layout is settled as plain boxes before anyone picks a colour, so the redirect map and the templates are planned together." />
            </div>
          </div>
        </section>

        {/* ═══ PRIVACY → facts ═══ */}
        <section className="section facts" id="privacy">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Australian rules</div>
              <h2>The Privacy Act and the forms a redesign changes</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The OAIC defines a small business as one with an annual turnover of $3 million or less, and lists
                  businesses the Privacy Act covers whatever their turnover. A redesign usually adds or changes newsletter sign-ups, account forms, review
                  prompts and tracking scripts, which changes what personal information the store collects.
                </p></div>
                <div className="fact"><div className="sec">§02</div><div>
                  <p>
                    We list every form and script the new theme adds, so your adviser can check the privacy policy
                    against what the store actually collects before launch. We are not lawyers, and we will not tell
                    you what the policy should say.
                  </p>
                  <p className="au-note">
                    Source: <a href={SRC_OAIC} {...extLink}>OAIC, Small business</a>.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Forms and scripts we list for your adviser</div>
                <ul className="trigrows">
                  <li><span className="m">Newsletter and pop-up sign-ups</span><span className="t">Listed</span></li>
                  <li><span className="m">Account and checkout fields</span><span className="t">Listed</span></li>
                  <li><span className="m">Review and survey prompts</span><span className="t">Listed</span></li>
                  <li><span className="m">Analytics and ad pixels</span><span className="t">Listed</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BRIEF / RFP ASK → split ═══ */}
        <section className="section platforms" id="brief">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Send us your brief</div>
                <h2>Have a redesign brief or RFP? Send it before the call</h2>
              </div>
              <p>
                Established stores that send a written brief get a firmer answer, faster. Attach it after the first
                step of the form on this page, as a PDF or Word file. No brief yet? These six lines are enough.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Platform and plan</h3></div><p className="plat-build">Shopify, Shopify Plus, WooCommerce, BigCommerce or Adobe Commerce, and roughly how many products and variants.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Connected systems</h3></div><p className="plat-build">Accounting (Xero, MYOB, QuickBooks), stock (Cin7, Unleashed, NetSuite, Odoo), couriers, payments and marketplaces.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>What is not working</h3></div><p className="plat-build">The pages or steps that lose sales, and how you know: analytics, customer emails, staff complaints.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Ranges that matter most</h3></div><p className="plat-build">Your top-selling collections and the pages that bring in search traffic today.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">05</span><div className="plat-name"><h3>Dates you cannot move</h3></div><p className="plat-build">A product launch, a trade show, Black Friday or the Christmas trade.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">06</span><div className="plat-name"><h3>Who signs off</h3></div><p className="plat-build">The person who approves design, and the person who approves spend, if they differ.</p></div>
            </div>
            <div className="au-split">
              <div>
                <ModalCTAButton label="Send my redesign brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOUSE TERMS → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">How we work</div>
              <h2>The terms every FactoryJet redesign runs on</h2>
              <p className="lead">
                FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short
                scoping call. These five terms come with every quote.
              </p>
            </div>
            <div className="platlist" role="list">
              {TERMS.map((t, i) => (
                <div key={t.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{t.t}</h3></div>
                  <p className="plat-build">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WORK WE HAVE DONE (platform-matched, labelled by market) ═══ */}
        <section className="section platforms" id="work">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Work we have done</div>
                <h2>Shopify stores we have designed and are building</h2>
              </div>
              <p>
                These are stores we have worked on in the United States, on the same platform most Australian
                redesigns run on. Each card states only what the project or the live store shows.
              </p>
            </div>
            <div className="platlist" role="list">
              {WORK.map((w, i) => (
                <div key={w.client} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{w.client}</h3><span className="plat-flag">{w.where}</span></div>
                  <p className="plat-build">
                    {w.what}{' '}
                    {w.href.startsWith('http')
                      ? <a href={w.href} {...extLink}>{w.cta}</a>
                      : <a href={w.href}>{w.cta}</a>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ COST → ruled rows + market panel ═══ */}
        <section className="section platforms" id="cost">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Cost, from published Australian ranges</div>
                <h2>What an ecommerce redesign costs in Australia</h2>
              </div>
              <p>
                Two Australian agencies publish figures worth knowing. They are market ranges, not our prices, and
                neither page says whether GST is included, so ask every agency to state ex or inc GST on its quote.
              </p>
            </div>
            <div className="au-split">
              <div>
                <h3>What moves the number</h3>
                <ul className="chg-list chg-list-1col">
                  <li><span><b>Theme approach.</b> Adapting a proven theme costs less than custom templates built from scratch.</span></li>
                  <li><span><b>Catalogue shape.</b> Variants, bundles, product options and how many filters shoppers need.</span></li>
                  <li><span><b>Systems to retest.</b> Each connection, from Xero to Cin7 to a marketplace feed, adds testing time.</span></li>
                  <li><span><b>Redirect map size.</b> A store that changes thousands of URLs needs more mapping than one that keeps them.</span></li>
                  <li><span><b>Platform move.</b> Moving platform inside the redesign adds data migration and a longer watch after launch.</span></li>
                </ul>
                <ModalCTAButton label="Get a fixed price per phase" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">Published Australian market ranges</div>
                <ul className="trigrows">
                  <li><span className="m">Agency ecommerce redesign</span><span className="n">Spark Interact, Sydney, Aug 2024</span><span className="t">$40,000 to $75,000+</span></li>
                  <li><span className="m">Freelancer ecommerce redesign</span><span className="n">Spark Interact, Sydney, Aug 2024</span><span className="t">$8,500 to $20,000+</span></li>
                  <li><span className="m">Theme-based ecommerce site</span><span className="n">Redback Solutions, Newcastle, Nov 2023</span><span className="t">AUD$15,000 to AUD$25,000</span></li>
                  <li><span className="m">Custom ecommerce site</span><span className="n">Redback Solutions, Newcastle, Nov 2023</span><span className="t">From AUD$35,000</span></li>
                </ul>
                <p className="au-note">
                  Sources: <a href={SRC_SPARK} {...extLink}>Spark Interact, website redesign costs Australia</a> and{' '}
                  <a href={SRC_REDBACK} {...extLink}>Redback Solutions, website cost in Australia</a>, both read on 29 October 2026. GST status is not stated on either page. FactoryJet quotes a fixed price in writing after a short scoping call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services</div>
              <h2>Before and after the redesign</h2>
            </div>
            <ul className="agentdir-grid">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-more">{s.go}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Ecommerce redesign questions Australian store owners ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_GOOGLE_MOVE} {...extLink}>Google Search Central, site moves with URL changes</a>
              <a href={SRC_OAIC} {...extLink}>OAIC, Small business</a>
              <a href={SRC_SHOPIFY_DUPLICATE} {...extLink}>Shopify Help Center, duplicating themes</a>
              <a href={SRC_SPARK} {...extLink}>Spark Interact, website redesign costs Australia</a>
              <a href={SRC_REDBACK} {...extLink}>Redback Solutions, website cost in Australia</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See your redesigned store on your own products first</h2>
              <p>
                Send your name and work email, then attach your brief if you have one. The founder replies within 24
                hours to book a short call about your store, your systems and the right scope.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a draft of my store" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ecommerce-development">See ecommerce development</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce redesigns, builds, AI agents and AI search for established Australian businesses. You own the code, and support is optional." />
    </>
  );
}
