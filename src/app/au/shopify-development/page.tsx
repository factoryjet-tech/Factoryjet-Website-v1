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
import './page.css';

const CANONICAL = 'https://factoryjet.com/au/shopify-development';
const UPDATED = '2026-09-25';
const TITLE = 'Shopify Agency Australia | Shopify Developers | FactoryJet';
const H1 = 'Shopify Agency Australia: Shopify Developers Who Stay After Launch';
const DESCRIPTION =
  'FactoryJet is a Shopify agency in Australia. Our Shopify developers build new stores, Shopify Plus, migrations and B2B, then connect Xero, MYOB and shipping.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Shopify Agency Australia', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-25 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// Shopify Australia pricing page: plans shown in AUD (Basic, Grow, Advanced, Plus);
// card rates are a percentage plus a fixed amount per transaction and fall on higher
// plans; third-party payment providers attract an extra Shopify transaction fee that
// also falls on higher plans. We link it so buyers read live figures from Shopify,
// never from us. fetch-verified 2026-09-25
const SRC_PRICING = 'https://www.shopify.com/au/pricing';
// Shopify Help Center, Shopify Plus plan: "9 expansion stores", "up to 200 locations",
// "unlimited staff accounts", B2B "unlimited catalogs ... deposit requirements, partial
// payments", checkout customisation, custom apps with Shopify Functions, "up to 25"
// Hydrogen storefronts, priority support, and "a variable platform fee based on your
// revenue and business model". fetch-verified 2026-09-25
const SRC_PLUS_PLAN =
  'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan';
// Shopify Help Center: "As of June 30, 2026, Shopify Scripts has been deprecated. Any
// Scripts that were still published on your store have been deactivated and no longer
// work." Points to Shopify Functions. fetch-verified 2026-09-25
const SRC_SCRIPTS = 'https://help.shopify.com/en/manual/checkout-settings/script-editor';
// ACCC, Selling online: online businesses "have the same responsibilities to consumers
// as physical businesses"; consumer guarantees apply; no false or misleading claims;
// overseas businesses selling to Australians "must follow the Australian Consumer Law";
// reputable sellers show refund steps and an ABN. fetch-verified 2026-09-25
const SRC_ACCC = 'https://www.accc.gov.au/business/selling-products-and-services/selling-online';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'hiring',   label: 'Hiring a Shopify developer' },
  { key: 'cost',     label: 'Cost, fees and timelines' },
  { key: 'platform', label: 'Shopify and Shopify Plus' },
  { key: 'build',    label: 'Migrations, apps and SEO' },
  { key: 'after',    label: 'Australia and after launch' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Hiring a Shopify developer ──
  { category: 'hiring', question: 'What does a Shopify developer do?',
    answer: 'A Shopify developer builds and changes the code behind a Shopify store. That covers the theme, which is the design layer written in Shopify’s Liquid language, plus custom sections, app setup, integrations with other software, and speed fixes. A good one also knows when to use an existing app instead of writing code, because every custom line is something you have to maintain.' },
  { category: 'hiring', question: 'What is a Shopify development partner?',
    answer: 'A Shopify development partner is an agency or freelancer registered in Shopify’s Partner Program who builds stores for merchants. Registration gives them tools such as development stores for building and testing. Shopify also runs partner tiers based on the work partners bring to the platform. A partner label tells you someone is registered, not that they suit your project, so always check live stores they built.' },
  { category: 'hiring', question: 'What kind of Shopify Partner is FactoryJet?',
    answer: 'FactoryJet is a registered Shopify Partner. We do not hold a named partner tier, and we will not claim one. What we offer instead is senior engineers, a founder involved on every project, more than a decade in commerce, and 500+ businesses served since 2014. Ask to see our recent Shopify work on a call, and judge us on that.' },
  { category: 'hiring', question: 'Can I hire someone to build my Shopify store for me?',
    answer: 'Yes. That is exactly what a Shopify agency or a freelance Shopify developer does. You supply your products, brand and business rules. They set up the store, design or adapt the theme, configure payments, shipping and GST, connect your other systems, and train you to run it. Ask who owns the theme code at the end. With us, you do.' },
  { category: 'hiring', question: 'How do I hire a Shopify expert in Australia?',
    answer: 'Shortlist three providers from search results, Shopify’s Partner Directory and referrals. Look at live stores they built in your category, ask who will actually write the code, get a written scope with exclusions, and ask what support looks like after launch. A good Shopify expert will ask more questions about your products, stock and shipping than about colours.' },
  { category: 'hiring', question: 'Should I hire a freelance Shopify developer or a Shopify agency?',
    answer: 'A freelancer suits small, well-defined jobs: a theme tweak, a new section, a bug fix. An agency suits a full build, a migration or anything with integrations, because it brings design, development, testing and support together and does not stop when one person is sick or busy. Many Australian brands use both, an agency for the build and a freelancer for small edits.' },
  { category: 'hiring', question: 'Who is the best Shopify agency in Australia?',
    answer: 'There is no single best one, only the best fit for your size and problem. Large Shopify Plus agencies suit enterprise retailers. Design-led studios suit fashion and beauty. Integration-heavy teams suit brands with an ERP or wholesale channel. We list several Australian Shopify agencies on this page, including us, with a neutral note on each. Talk to two or three and compare.' },

  { category: 'hiring', question: 'What is a development store in Shopify?',
    answer: 'A development store is a free Shopify store that registered Shopify Partners use to build and test a store before it goes live. It has most of the features of a paid plan, and you can place test orders, but it cannot take real payments. When the build is ready, the partner transfers ownership to you and you choose a paid plan. Ask your developer to build in a development store in your name or transfer it on launch.' },
  { category: 'hiring', question: 'Can ChatGPT build me a Shopify store?',
    answer: 'Not on its own. ChatGPT can write product descriptions, suggest a collection structure, draft policies and explain Liquid code, and Shopify has its own AI tools inside the admin. What it cannot do is set up your payments, GST, shipping rules and Xero connection, test real checkouts, or take responsibility when something breaks. Use it to speed up the writing and let a person handle the build and the testing.' },

  // ── Cost, fees and timelines ──
  { category: 'cost', question: 'How much does it cost to hire a Shopify developer?',
    answer: 'It depends on scope, not an hourly rate. The big cost drivers are custom design versus an adapted theme, how many products and variants you have, how much data moves in a migration, how many systems connect (Xero, MYOB, an ERP, a 3PL), and whether you need B2B or Shopify Plus features. We quote a fixed price per stage after a free scoping call with the founder. For published Australian market ranges, see our Shopify cost in Australia guide.',
    links: [{ href: '/blog/shopify-cost-australia-2026#developer-cost', label: 'Shopify developer costs in Australia' }] },
  { category: 'cost', question: 'How much does Shopify take from each sale?',
    answer: 'It depends on your plan and how the customer pays. With Shopify Payments you pay a card processing fee, a percentage plus a small fixed amount, and the percentage falls on higher plans. With a third-party payment provider, Shopify adds its own transaction fee on top of that provider’s fee. Our Shopify cost in Australia guide works out the fee on an example sale for every plan.',
    links: [{ href: '/blog/shopify-cost-australia-2026#100-sale', label: 'What Shopify takes from each sale' }] },
  { category: 'cost', question: 'How long does a Shopify store build take?',
    answer: 'A store on an adapted theme with up to five pages can go live with our 7-day delivery. A custom theme store usually takes 3 to 5 weeks. An advanced build with integrations, B2B or a migration takes 5 to 8 weeks. A headless or heavily custom build takes 8 to 14 weeks. We confirm the timeline in writing once scope is agreed.' },
  { category: 'cost', question: 'What does 7-day delivery cover?',
    answer: '7-day delivery applies to Shopify sites of up to five pages built on a proven theme, with your products loaded, payments, shipping and GST set up, and the basics of SEO and analytics in place. It suits new brands and small catalogues. Custom design, migrations, B2B and integrations take longer, and we tell you that upfront rather than squeezing them into a week.' },
  { category: 'cost', question: 'How much does Shopify SEO cost?',
    answer: 'Shopify SEO is priced by the work, not the keyword. A one-off technical clean-up after a build or migration is a fixed piece of work. Ongoing Shopify SEO, meaning content, collection pages and links over months, is usually a monthly engagement. The drivers are catalogue size, how much duplicate content the theme creates, and how competitive your category is. Published Australian ecommerce SEO ranges are in our SEO cost guide.',
    links: [
      { href: '/blog/seo-cost-australia-2026#ecommerce-seo-cost', label: 'Ecommerce SEO cost in Australia' },
      { href: '/au/ecommerce-seo', label: 'Shopify SEO services' },
    ] },
  { category: 'cost', question: 'Are there hidden costs after a Shopify store launches?',
    answer: 'The recurring costs are known if you ask early: the Shopify plan, card or transaction fees, paid apps, a paid theme licence if you use one, domain and email, and any support plan. App fees are the one that creeps. We keep app count low and list every paid app in the handover, so you can see the monthly total before you commit.' },

  // ── Shopify and Shopify Plus ──
  { category: 'platform', question: 'Is Shopify still worth it in 2026?',
    answer: 'For most Australian brands selling direct to consumers, yes. Shopify handles hosting, security and updates, supports Afterpay, Zip, Australia Post and Xero through apps, and your team can run the store day to day without a developer. It fits less well if you need very complex product configuration or pricing that fights the platform. That is a case-by-case call.' },
  { category: 'platform', question: 'Is Shopify legal in Australia?',
    answer: 'Yes. Shopify is a legitimate platform used widely by Australian businesses, and it publishes Australian pricing in Australian dollars. The legal duties sit with you as the seller: the Australian Consumer Law applies to your store, you must not make misleading claims, and you handle GST if you are registered. We set the store up so those basics are covered.' },
  { category: 'platform', question: 'What is the difference between Shopify and Shopify Plus?',
    answer: 'Both run on the same hosted platform with the same themes and admin. Shopify Plus is the enterprise plan. According to Shopify’s help centre it adds checkout customisation, custom apps built with Shopify Functions, deeper B2B features, nine expansion stores, up to 200 locations, unlimited staff accounts and priority support. If your problems are about how the store looks, standard Shopify is usually enough.' },
  { category: 'platform', question: 'When should an Australian brand move to Shopify Plus?',
    answer: 'When a Plus feature solves a problem that is costing you money. Common triggers are wholesale buyers ordering by email, checkout rules you cannot build on a standard plan, separate stores for New Zealand or another region, or app bills piling up to fake what Plus does natively. Revenue alone is not a reason. Plenty of brands sell well on Advanced.' },
  { category: 'platform', question: 'What happened to Shopify Scripts?',
    answer: 'Shopify says Scripts were deprecated on 30 June 2026, and any Scripts still published were deactivated. Scripts were small pieces of code Plus stores used to change discounts, shipping and payment options at checkout. The replacement is Shopify Functions. If your old discounts or shipping rules quietly stopped working this year, that is the likely cause, and we can rebuild them.' },
  { category: 'platform', question: 'What is headless Shopify, and do I need it?',
    answer: 'Headless means the shopfront customers see is a separate custom website, often built with Shopify’s Hydrogen framework, while Shopify still runs products, checkout and orders behind it. It gives total design freedom and can be very fast. It also costs more to build and maintain. Most Australian brands do not need it. A well-built theme store is the right answer far more often.' },

  { category: 'platform', question: 'What is the downside of using Shopify?',
    answer: 'Five come up most. Monthly costs grow as you add paid apps. Using a payment provider other than Shopify Payments adds a Shopify transaction fee. Checkout changes are limited below Shopify Plus. Web addresses must follow Shopify’s fixed pattern, such as /products/ and /collections/, which matters in a migration. And complex product builders or pricing rules can fight the platform. For most Australian direct-to-consumer brands these are manageable.',
    links: [{ href: '/blog/best-ecommerce-platform-australia-2026', label: 'How Shopify compares with other platforms' }] },

  // ── Migrations, apps and SEO ──
  { category: 'build', question: 'Can you migrate my store to Shopify?',
    answer: 'Yes. We move stores to Shopify from WooCommerce, Magento (Adobe Commerce), BigCommerce, Maropost Commerce Cloud (formerly Neto), Wix and Squarespace. We migrate products, variants, images, customers, order history where needed, reviews and content, then map every old URL to its new home with 301 redirects. We rehearse the move on a copy of the store before switching your domain.' },
  { category: 'build', question: 'Will I lose my Google rankings if I move to Shopify?',
    answer: 'Not if the migration is done properly. Rankings drop when old URLs break, titles and descriptions get lost, or content is thinned out. We crawl your current site first, keep the pages that bring in traffic, redirect every old URL with a 301, move your metadata across, and check Google Search Console daily for the first weeks after launch.' },
  { category: 'build', question: 'Does Shopify do SEO, or do I need a Shopify SEO agency?',
    answer: 'Shopify covers the basics: editable titles and descriptions, clean URLs, a sitemap and mobile-friendly themes. What it does not do is choose your keywords, write useful collection pages, fix duplicate product URLs a theme creates, or earn links. That is the work of a Shopify SEO agency or an in-house marketer. We build SEO basics into every store and offer ongoing Shopify SEO services through our ecommerce SEO team.',
    links: [{ href: '/au/ecommerce-seo', label: 'Shopify SEO agency' }] },
  { category: 'build', question: 'Who can migrate my store from Magento, WooCommerce or Neto to Shopify in Australia?',
    answer: 'We can, and so can most established Australian Shopify agencies. We move stores from Magento (Adobe Commerce), WooCommerce and Maropost Commerce Cloud, which was called Neto, with products, customers, order history and reviews, then redirect every old web address so Google rankings carry across. Whoever you choose, ask for a written redirect map and a rehearsal on a copy of the store before the domain switches.',
    links: [{ href: '/blog/magento-to-shopify-plus-migration-checklist-2026', label: 'Magento to Shopify migration checklist' }] },
  { category: 'build', question: 'Can you connect Shopify to Xero or MYOB?',
    answer: 'Yes. Both have Shopify connections, either through their own app or a trusted connector. The real work is deciding what flows where: orders as invoices or daily summaries, how GST and payment fees are recorded, and how refunds are handled. We set it up with your bookkeeper so the numbers reconcile at month end, not just so the sync runs.' },
  { category: 'build', question: 'How can I reconcile my Shopify payments in Xero?',
    answer: 'The trick is that a Shopify payout is not the same as your sales. Each deposit is sales minus card fees and refunds, often across several days of orders. Record gross sales, fees and refunds separately through a clearing account, then match the payout to your bank feed. Connector apps such as A2X do this summary for you, so each Xero entry matches the deposit to the cent.' },
  { category: 'build', question: 'What accounting software is best for Shopify?',
    answer: 'For most Australian stores, Xero, because it is what most bookkeepers here use and it has well-tested Shopify connectors. MYOB is a sound choice if your business already runs on it, and QuickBooks works too. The software matters less than the setup: decide whether orders go in one by one or as daily summaries, and how GST, fees and refunds are recorded, with your bookkeeper before anything syncs.' },
  { category: 'build', question: 'Which courier does Shopify use?',
    answer: 'Shopify does not deliver parcels itself. Your store connects to carriers, and you choose which. Australian stores most often use Australia Post or its StarTrack service, Sendle, Aramex or CouriersPlease, either through the carrier’s own Shopify app or a multi-carrier app such as StarShipIt that prints labels and sends tracking emails. Live rates at checkout come from those connections.' },
  { category: 'build', question: 'Which delivery partner is best for Shopify?',
    answer: 'It depends on what you send and where. Australia Post has the widest reach, which matters for regional and remote postcodes. Sendle suits small, light parcels from small businesses. Courier services such as StarTrack or Aramex often suit heavier or bulkier items in metro areas. Many stores use two carriers through a multi-carrier app, sending each order with whichever is cheaper or faster for that postcode.' },
  { category: 'build', question: 'Can you set up Afterpay, Zip and Australian shipping?',
    answer: 'Yes. Afterpay and Zip both work with Shopify for buy now, pay later at checkout. For shipping we set up Australia Post, Sendle or StarShipIt, depending on your volumes and where you send, with live rates or flat rules, label printing and tracking emails. We test real checkouts end to end before launch, including a refund.' },
  { category: 'build', question: 'Can Shopify handle B2B wholesale in Australia?',
    answer: 'Yes. Standard plans can run a simple trade store with apps. Shopify Plus adds native B2B: companies with their own buyers and locations, custom catalogues and price lists, payment terms, deposits and partial payments. That lets your wholesale and retail customers share one admin, one stock pool and one set of product data, with trade prices shown only to trade buyers.' },
  { category: 'build', question: 'Can you connect Shopify to our ERP or warehouse?',
    answer: 'Yes. We connect Shopify to ERPs such as NetSuite, Microsoft Dynamics 365 Business Central and Pronto, and to third-party logistics warehouses, through a proven connector or a small custom integration. We agree which system owns each piece of data, such as stock, prices and customers, before writing anything, which prevents the double-counting problems most integrations suffer from.' },

  // ── Australia and after launch ──
  { category: 'after', question: 'Do you have Shopify developers in Sydney, Melbourne, Brisbane and Perth?',
    answer: 'We work with brands in Sydney, Melbourne, Brisbane, Perth and the rest of Australia remotely, with video workshops, a shared project board and a named lead engineer. We do not pretend to have an office on your street. A Shopify build does not need anyone on site, and you get the same senior team and the founder wherever you are based.' },
  { category: 'after', question: 'What Australian rules does my Shopify store need to follow?',
    answer: 'The ACCC says online businesses have the same responsibilities to consumers as physical ones. That means the consumer guarantees apply, your prices and claims must not mislead, and your refund process should be clear. You also need GST set up correctly if you are registered, an ABN shown on the site, and a privacy policy. We build all of that into the store.' },
  { category: 'after', question: 'Can I hire someone to manage my Shopify store after launch?',
    answer: 'Yes. Our support plans cover updates to themes and apps, bug fixes, new sections and landing pages, speed checks, and help for your team when something looks wrong. You get a named engineer who knows your store, not a ticket queue. You can also run the store yourself day to day and call us only for development work.' },
  { category: 'after', question: 'Do I own the store and the code afterwards?',
    answer: 'Yes. The Shopify store sits in your own account, and the theme code, custom apps and documentation belong to you. We work in version control, so you get the full history of changes. If you ever move to another agency or bring development in-house, everything they need is already in your hands.' },
  { category: 'after', question: 'Can you take over a store another agency built?',
    answer: 'Yes, and it is a common starting point. We begin with a short audit of the theme, apps, integrations and speed, tell you what is healthy and what is fragile, and fix the urgent issues first. Often the store is fine and the problem is too many apps or an integration nobody documented.' },
  { category: 'after', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder, Bhavesh Barot, replies within 24 hours to book a short call. We talk about your products, where you sell, what systems you run and what is not working. You leave the call knowing the right scope, even if you decide not to work with us.' },
];

/* ─── Named Australian Shopify agencies (open self-disclosure, ItemList).
       Each note is based on the company’s own homepage, fetched 2026-09-25. ── */
const SHOPIFY_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. A registered Shopify Partner with senior engineers and a founder on every project. Strongest on integrations (Xero, MYOB, ERP, shipping), migrations and B2B, with 7-day delivery for sites up to five pages and support after launch.' },
  { name: 'The Hope Factory', note: 'A Melbourne-based Shopify agency that also lists Sydney, Adelaide and Perth, covering design, custom development, migrations and growth consulting. It describes itself as a Shopify Premier Partner.' },
  { name: 'Prosper Digital', note: 'A Shopify Plus agency with offices in Melbourne and Sydney, focused on strategy, UX, development and conversion rate optimisation. It describes itself as a Shopify Platinum Partner.' },
  { name: 'Convert Digital', note: 'An ecommerce agency working across Melbourne, Sydney and Brisbane on Shopify and commercetools, including systems integration and CRO. It describes itself as a Shopify Platinum Partner.' },
  { name: 'Alinga', note: 'A Gold Coast-based ecommerce agency working nationally, with a focus on ERP integrations, B2B wholesale and migrations to Shopify and Shopify Plus.' },
  { name: 'Flux', note: 'A Shopify Plus agency based in Melbourne with offices in Los Angeles and London, focused on headless builds, migrations and structured product data for AI search.' },
  { name: '23 Digital', note: 'A full-service digital agency with offices in Melbourne, Sydney and Brisbane, offering Shopify and other ecommerce builds plus Shopify SEO and paid advertising.' },
  { name: 'Seventyfour Design', note: 'A Melbourne Shopify studio covering design, custom apps, migrations, integrations and CRO, which describes itself as a Shopify Plus Partner.' },
  { name: 'Moustache Republic', note: 'An ecommerce agency based in Sydney and Auckland, working on Shopify and BigCommerce since 2013, including UX, development and headless commerce.' },
  { name: 'StudioHawk', note: 'An SEO agency, not a build agency, with teams across most Australian capitals. Worth knowing if you want a specialist Shopify SEO agency alongside your developer.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Agency Australia',
      serviceType: 'Shopify development, Shopify Plus development, Shopify migration, Shopify B2B, Shopify integrations and Shopify SEO',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Shopify agency and Shopify developers for Australian businesses: new stores, custom themes, Shopify Plus, migrations to Shopify, B2B wholesale, Afterpay, Zip, Australia Post, Sendle, StarShipIt, Xero, MYOB and ERP integrations, Shopify SEO basics and support after launch.',
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
      datePublished: '2026-09-25',
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
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'Australian Shopify agencies',
      itemListElement: SHOPIFY_AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
      })),
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
      'Shopify developers for Australian brands: new stores with 7-day delivery for up to five pages, custom themes, Shopify Plus, migrations, B2B, Afterpay, Zip, Australia Post, Xero and MYOB. Founder-led, and you own the code.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/shopify-development/shopify-development-og.webp', width: 1200, height: 630, alt: 'Shopify agency Australia: a Shopify developer and a skincare brand founder reviewing her new store in a Melbourne warehouse studio' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'shopify-development';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline); only the
   closing benefit phrase is wrapped in .hero-emphasis. */
const H1_EMPHASIS = 'Stay After Launch';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec-panel icons (7-day delivery, connected systems, ownership). */
const HERO_ICONS = [
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2',
  'M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1m2 4a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1',
  'M7 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm3 1 9-9m-3 3 3 3',
] as const;

/* Ten things every build includes. */
const BUILD_ITEMS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'A discovery session before any design', d: 'We map your products, variants, stock locations, shipping zones and the systems you already run. Most Shopify problems are decided here, long before anyone opens a design tool.' },
  { n: '02', t: 'A theme built or adapted for your catalogue', d: 'Either a proven theme adapted to your brand, or a custom theme built in Liquid. Collection pages, filters and product pages are shaped around how your customers actually shop.' },
  { n: '03', t: 'GST, ABN and Australian checkout settings', d: 'Tax settings, GST-inclusive pricing, your ABN in the footer, Australian address formats and clear refund, shipping and privacy policies, set up and checked.' },
  { n: '04', t: 'Payments, including Afterpay or Zip', d: 'Shopify Payments or your chosen provider, plus buy now, pay later where it suits your average order. We test real transactions and a refund before launch.' },
  { n: '05', t: 'Shipping that matches your costs', d: 'Australia Post, Sendle or StarShipIt, with live rates or simple rules, label printing and tracking emails, so you stop losing margin on remote postcodes.' },
  { n: '06', t: 'Accounting sync with Xero or MYOB', d: 'Orders, payouts, fees and refunds flowing into your books in a way your bookkeeper signs off on, not just a sync that runs.' },
  { n: '07', t: 'SEO basics from day one', d: 'Clean titles and descriptions, structured data, a sensible collection structure, image alt text, and 301 redirects if you are moving from another platform.' },
  { n: '08', t: 'Speed and Core Web Vitals checks', d: 'Compressed images, a lean app list and no unused scripts. Core Web Vitals are Google’s measures of loading speed, responsiveness and layout stability.' },
  { n: '09', t: 'Analytics that record real sales', d: 'GA4 and your ad platforms set up to record purchases correctly, so you can see which channels sell, not just which ones send clicks.' },
  { n: '10', t: 'Training, documentation and support', d: 'A recorded walkthrough for your team, a written handover listing every app and integration, and a support plan with a named engineer after launch.' },
];

/* Icons and visual-slot subjects for the ten build cards (same order as BUILD_ITEMS). */
const BUILD_ICONS = [
  'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4',
  'M4 4h16v16H4V4Zm0 5h16M9 9v11',
  'M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6',
  'M3 6h18v12H3V6Zm0 4h18M7 15h4',
  'M3 7h11v9H3V7Zm11 3h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  'M5 3h14v18H5V3Zm3 4h8m-8 4h2m4 0h2m-8 4h2m4 0h2',
  'M4 19h16M7 16V9m5 7V5m5 11v-4',
  'M4 16a8 8 0 1 1 16 0m-8 0 4-5',
  'M4 4v16h16M8 16l4-5 3 3 5-6',
  'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4 21c0-4 4-6 8-6s8 2 8 6',
] as const;
const BUILD_SUBJECTS = [
  'AI-generated model: white product, stock and shipping cards laid out on a table with an orange magnifier over them',
  'AI-generated model: a white storefront theme frame with collection and product tiles, one tile outlined in orange',
  'AI-generated model: a white checkout card showing a GST line and an ABN tag in orange',
  'AI-generated model: a white card terminal with small orange Afterpay and Zip style payment chips beside it',
  'AI-generated model: white parcels on a map of Australia with orange rate labels on regional postcodes',
  'AI-generated model: an order card flowing into a white ledger book with an orange tick for a matched payout',
  'AI-generated model: a white collection page with an orange arrow redirecting an old web address to a new one',
  'AI-generated model: a white speed gauge with its needle in the orange fast zone beside a product page',
  'AI-generated model: a white sales chart where orange bars mark purchases recorded from each channel',
  'AI-generated model: a white handover binder listing apps and integrations, with a small orange support headset',
] as const;

/* Five build stages. Titles carry their number ("01 · Discovery and scope"). */
const STAGES: { t: string; d: string }[] = [
  { t: '01 · Discovery and scope', d: 'A working session on your products, customers, stock, shipping, payments and the systems you run. You get a written scope with a fixed price per stage and a timeline. Your part: an hour or two with the people who run the store.' },
  { t: '02 · Design', d: 'Wireframes for the home, collection and product pages first, then full design on desktop and mobile. On a 7-day delivery build we adapt a proven theme instead. Your part: one round of consolidated feedback per step.' },
  { t: '03 · Development and integrations', d: 'Theme build in Liquid, apps configured, payments, GST, shipping and Xero or MYOB connected, data migrated if you are moving platform. Everything is built in a development store so your live site keeps trading.' },
  { t: '04 · Testing and launch', d: 'Real test orders on every payment method, a refund, shipping to metro and regional postcodes, redirects checked, speed measured. Then we switch the domain at a quiet time and watch the first orders together.' },
  { t: '05 · Support after launch', d: 'A named engineer, fixes, updates and new work as you grow. For migrations we check Google Search Console daily for the first weeks, so any ranking dip is caught early.' },
];

const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'Not sure Shopify is the right platform? We compare it with the alternatives for your catalogue and systems.', go: 'Explore ecommerce →' },
  { href: '/au/ai-agents', t: 'AI agents for Australian businesses', d: 'AI agents that answer order questions, handle returns and update records across Shopify and your other systems.', go: 'Explore AI agents →' },
  { href: '/au/ai-seo', t: 'AI SEO Australia', d: 'Ongoing Shopify SEO plus visibility in ChatGPT, Perplexity and Google AI answers.', go: 'Explore AI SEO →' },
  { href: '/au/seo', t: 'SEO services Australia', d: 'Technical SEO, collection page content and local search for stores that need more organic traffic.', go: 'Explore SEO →' },
  { href: '/au/ai-development', t: 'AI development', d: 'AI built into your store and back office, from product data clean-up to order and returns handling.', go: 'Explore AI development →' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we do for Australian businesses: ecommerce, AI agents, websites and AI search.', go: 'Visit the Australia hub →' },
];

export default function ShopifyDevelopmentAUPage() {
  return (
    <>
      <script id="ld-au-shopify-development" type="application/ld+json"
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

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Shopify Agency Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                FactoryJet is a Shopify agency for Australian brands, with Shopify developers who build, migrate and
                stay after launch. Our Shopify developers build new stores and custom themes, run Shopify Plus and B2B
                projects, move stores to Shopify without losing rankings, and connect Afterpay, Zip, Australia Post,
                Xero, MYOB and your ERP. Then we stay on to support what we built, and you own all of it.
              </p>
              <HeroInlineForm region="au" source="au_shopify_development_hero" submitLabel="Book my Shopify scoping call" />
            </div>

            <form
              className="specpanel"
              aria-label="What every Shopify build from FactoryJet includes"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What you get on a Shopify build: 7-day delivery for sites up to five pages, Xero, MYOB, Afterpay and shipping connected, and theme code that is yours"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT YOU GET</span>
                <span className="sys"><span>Registered Shopify Partner</span><span>Shopify Plus, B2B, Migrations</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what you get">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="shopify-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">on a proven theme</span>
                  <span className="title">Sites up to five pages</span>
                  <span className="tag">7-day delivery</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="shopify-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">set up and tested end to end</span>
                  <span className="title">Xero, MYOB, Afterpay, shipping</span>
                  <span className="tag">Connected</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="shopify-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">in your account, in version control</span>
                  <span className="title">Theme code and custom apps</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · We test real checkouts end to end before launch, including a refund.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band; verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '9', t: 'expansion stores on Shopify Plus, useful for a separate New Zealand or wholesale store', s: 'Shopify Help Center', u: SRC_PLUS_PLAN },
              { v: '200', t: 'inventory locations supported on Shopify Plus, for stores, warehouses and 3PLs', s: 'Shopify Help Center', u: SRC_PLUS_PLAN },
              { v: '30 Jun 2026', t: 'Shopify Scripts deprecated; old checkout scripts no longer run. Shopify Functions replace them', s: 'Shopify Help Center', u: SRC_SCRIPTS },
              { v: 'ACL', t: 'applies to online stores just as it does to shops, including overseas sellers', s: 'ACCC, Selling online', u: SRC_ACCC },
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
          <div className="upd">Last updated<br />25 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) → Family A facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does a Shopify agency do for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">A Shopify agency plans, designs, builds and supports your Shopify store.</span> For
                    an Australian brand that means setting up GST, Afterpay or Zip, Australia Post or Sendle shipping, and a
                    Xero or MYOB connection, moving your old store across without losing Google rankings, and fixing problems
                    after launch. A good Shopify agency also tells you when a standard plan is enough.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      A <b>theme</b> is the design layer of a Shopify store, written in Shopify’s Liquid code. An{' '}
                      <b>integration</b> is a connection that passes data between Shopify and another system, such as
                      orders into Xero. A <b>migration</b> is moving your products, customers, content and web addresses
                      from another platform to Shopify.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most people searching for a Shopify developer or a Shopify expert in Australia are not short of options.
                    They are short of someone who will get the unglamorous parts right: the accounting sync, the shipping
                    rules, the redirects, and the support call three months after launch. That is where we put most of our
                    effort, and it is what this page explains.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A Shopify developer and a skincare brand founder reviewing her new store on his laptop in their warehouse studio">
                <img src="/images/au/shopify-development/shopify-development-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="Over-the-shoulder view of a Shopify developer building a skincare brand's new store while the founder, holding one of her amber bottles, points at a product tile on his laptop in their Melbourne warehouse studio" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ LISTICLE: WHAT OUR BUILDS INCLUDE → capgrid ═══ */}
        <section className="section capabilities" id="included">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Shopify development, itemised</div>
              <h2>Ten things every Shopify build from us includes</h2>
              <p className="lead">
                Plenty of Shopify website development quotes list pages and templates. Very few list the parts that
                decide whether the store actually works on a busy Monday. These ten are in every build we do, from a
                7-day delivery store to a Shopify Plus project.
              </p>
            </div>
            <div className="capgrid">
              {BUILD_ITEMS.map((s, i) => (
                <div key={s.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CAP‑{s.n}</span><svg {...CAP_ICON}><path d={BUILD_ICONS[i]} /></svg></div>
                  <VisualSlot page={PAGE_KEY} slot={`capability-${s.n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={BUILD_SUBJECTS[i]} />
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SHOPIFY VS SHOPIFY PLUS → comparison ═══ */}
        <section className="section comparison" id="shopify-plus">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Shopify Plus agency work</div>
              <div>
                <h2>Shopify vs Shopify Plus: which one does your brand need?</h2>
                <p className="lead">
                  Shopify Plus is Shopify’s enterprise plan, sold on a contract. It runs on the same platform, with the
                  same themes and admin, so a Shopify Plus developer and a Shopify developer use the same core skills.
                  The difference is what Plus lets you change underneath. Here is the honest comparison.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you need</th>
                    <th>Standard Shopify (Basic to Advanced)</th>
                    <th className="fj">Shopify Plus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Themes, products, collections</th><td>Full</td><td className="fj">Full, same themes</td></tr>
                  <tr><th scope="row">Checkout customisation</th><td>Branding and approved apps</td><td className="fj">Extensions, custom checkout flows</td></tr>
                  <tr><th scope="row">Custom Shopify Functions</th><td>Through public apps only</td><td className="fj">Your own custom apps</td></tr>
                  <tr><th scope="row">B2B wholesale</th><td>Via apps and workarounds</td><td className="fj">Native: companies, price lists, terms</td></tr>
                  <tr><th scope="row">Separate stores (e.g. New Zealand)</th><td>Separate accounts</td><td className="fj">9 expansion stores</td></tr>
                  <tr><th scope="row">Inventory locations</th><td>Limited by plan</td><td className="fj">Up to 200</td></tr>
                  <tr><th scope="row">Staff accounts</th><td>Limited by plan</td><td className="fj">Unlimited</td></tr>
                  <tr><th scope="row">Headless storefronts (Hydrogen)</th><td>Varies by plan</td><td className="fj">Up to 25</td></tr>
                  <tr><th scope="row">Shopify support</th><td>Standard</td><td className="fj">Priority, 24/7</td></tr>
                  <tr><th scope="row">Pricing shape</th><td>Monthly plan fee</td><td className="fj">Contract, with a possible variable fee based on revenue</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Plus figures from <a href={SRC_PLUS_PLAN} {...extLink}>Shopify Help Center, Shopify Plus plan</a>, checked 25 September 2026. For current plan fees, see <a href={SRC_PRICING} {...extLink}>Shopify’s Australian pricing page</a>.
            </p>
            <div className="au-split">
              <div>
                <h3>What our Shopify Plus developers build</h3>
                <p>
                  Most of our Shopify Plus work falls into four groups: native B2B wholesale set up properly, checkout
                  extensions such as delivery date pickers and purchase order fields, custom Shopify Functions for
                  discount and shipping rules no public app offers, and expansion stores for New Zealand or a separate
                  trade channel.
                </p>
                <p>
                  One job has become urgent this year. Shopify says Scripts, the old way Plus stores customised
                  checkout, were deprecated on 30 June 2026 and deactivated. If your bundle discounts or shipping rules
                  stopped working, we rebuild them as Shopify Functions.
                </p>
              </div>
              <div>
                <h3>When we tell you not to upgrade</h3>
                <p>
                  Plus is worth it when a Plus feature fixes something that is costing you money. It is not worth it
                  because revenue crossed a line. If your problems are about design, speed or conversion, a better
                  build on Advanced will do more for you than a bigger plan.
                </p>
                <p>
                  As a Shopify Plus agency in Australia, we would rather lose the upgrade conversation than put a brand
                  on a contract it does not need. We are a registered Shopify Partner with no Plus tier to protect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white Shopify storefront on a rail moving through five stations, the last one handing an orange parcel to a small human figure" />

        {/* ═══ PROCESS WITH WEEK RANGES → timeline (stages stay openable, as the copy says) ═══ */}
        <section className="section process" id="how-a-build-runs">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a build runs</div>
                <h2>From first call to a live Shopify store, in five stages</h2>
                <p className="lead">
                  Timelines depend on the build type. Open each stage to see what happens and what you do.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Typical timelines</div>
                <ul className="trigrows">
                  <li><span className="m">Up to five pages, proven theme</span><span className="n">new brands, small catalogues</span><span className="t">7-day delivery</span></li>
                  <li><span className="m">Custom theme store</span><span className="n">bespoke design, standard integrations</span><span className="t">3 to 5 weeks</span></li>
                  <li><span className="m">Advanced build</span><span className="n">migration, B2B, ERP or Plus features</span><span className="t">5 to 8 weeks</span></li>
                  <li><span className="m">Headless or heavily custom</span><span className="n">Hydrogen, custom apps</span><span className="t">8 to 14 weeks</span></li>
                  <li><span className="m">Scoping call with the founder</span><span className="n">you leave with a clear scope</span><span className="t">Free</span></li>
                </ul>
              </div>
            </div>
            <div className="timeline">
              {STAGES.map((s) => {
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

        <div className="au-midcta">
          <MidPageCTA
            headline={'Not sure what your Shopify store actually needs?'}
            sub={'Tell us what you sell, where you ship and which systems you run. On a short call the founder will tell you whether you need a theme store, a custom build, Shopify Plus, or just a few fixes.'}
            label={'Book my Shopify scoping call'}
          />
        </div>

        {/* ═══ MIGRATIONS → facts + "what moves across" panel ═══ */}
        <section className="section facts" id="migrations">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Shopify migration service</div>
              <h2>Moving to Shopify without losing your sales or your rankings</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Most Australian brands we talk to are not starting from scratch. They are on WooCommerce that has
                  become slow and plugin-heavy, Magento (Adobe Commerce) that has become expensive to keep patched,
                  Maropost Commerce Cloud (the platform formerly called Neto), BigCommerce, Wix or Squarespace. Our
                  Shopify migration service moves all of it across in a planned order. Weighing Shopify against
                  Maropost, BigCommerce or WooCommerce first? Read{' '}
                  <a href="/blog/best-ecommerce-platform-australia-2026">which ecommerce platform suits an Australian store</a>.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  We migrate products, variants, images, customer accounts, order history where you need it,
                  reviews, blog posts and pages. Then comes the part that protects your traffic: a full crawl of the
                  old site, a map from every old web address to its new one, and 301 redirects, which are permanent
                  forwarding instructions that tell Google a page has moved rather than disappeared.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  We rehearse the move on a copy of your store, fix what the rehearsal finds, then switch the domain
                  at a quiet time. For the first weeks after launch we watch Google Search Console every day. If your
                  move also involves a new platform decision, our{' '}
                  <a href="/au/ecommerce-development">ecommerce development team in Australia</a> can compare Shopify
                  with the alternatives first. Our <a href="/au/ecommerce-seo">Shopify SEO agency</a> team
                  protects rankings before, during and after the move.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves across</div>
                <ul className="trigrows">
                  <li><span className="m">Products, variants, images</span><span className="t">Yes</span></li>
                  <li><span className="m">Customers and order history</span><span className="t">Yes</span></li>
                  <li><span className="m">Reviews, blog, content pages</span><span className="t">Yes</span></li>
                  <li><span className="m">Every old URL, 301 redirected</span><span className="t">Yes</span></li>
                  <li><span className="m">Customer passwords</span><span className="t">Reset invite</span></li>
                  <li><span className="m">Search Console watch after launch</span><span className="t">Daily</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ APPS AND INTEGRATIONS → definition module (image left, copy right) ═══ */}
        <section className="definition" id="integrations">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="An online store dispatch desk with an order dashboard on a laptop, a label printer and courier satchels">
              <img src="/images/au/shopify-development/shopify-development-integrations.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over-the-shoulder view of a Sydney online store's dispatch desk: an order dashboard on the laptop, a label printer feeding out a shipping label and a stack of courier satchels ready to go" />
            </VisualSlot>
            <p className="figcap">
              When the integrations are right, one order does everything: the label prints, stock drops, the
              invoice lands in Xero or MYOB and the customer gets a tracking email. Before we connect anything we
              agree which system owns stock, prices and refunds.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Apps and integrations</div>
            <h2>Connecting Shopify to the systems Australian businesses actually run</h2>
            <p>
              Most of the real work in Shopify application development is not the storefront. It is making sure
              an order placed at 11pm reaches the warehouse, the books and the customer’s inbox correctly.
            </p>
            <ul className="chg-list chg-list-1col">
              <li><span><b>Buy now, pay later.</b> Afterpay and Zip at checkout, with the messaging on product pages set up so it informs rather than clutters.</span></li>
              <li><span><b>Shipping.</b> Australia Post, Sendle or StarShipIt for rates, labels and tracking, with rules for bulky items, regional postcodes and free-shipping thresholds.</span></li>
              <li><span><b>Accounting.</b> Xero or MYOB, with orders, payouts, fees, GST and refunds recorded the way your bookkeeper wants.</span></li>
              <li><span><b>ERP and warehouse.</b> NetSuite, Business Central, Pronto or a 3PL, with one agreed owner for stock, prices and customers so numbers never double count.</span></li>
              <li><span><b>Marketing and reviews.</b> Klaviyo or your email tool, a reviews app, and GA4 purchase tracking that matches what Shopify reports.</span></li>
              <li><span><b>Custom apps.</b> When no app does the job, a small private app using Shopify’s API, the doorway that lets other software read and write store data.</span></li>
            </ul>
            <p>
              Many stores add an AI agent that answers where-is-my-order and returns questions inside Gorgias or
              Zendesk; see <a href="/au/ai-customer-service">AI customer service for Shopify stores</a>.
            </p>
          </div>
        </section>

        {/* ═══ B2B → facts + photo + three ruled rows ═══ */}
        <section className="section facts" id="b2b">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">B2B on Shopify</div>
              <h2>Wholesale and trade ordering on Shopify, done properly</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Plenty of Australian brands sell to both shoppers and stockists. The old way was a second store, a
                  spreadsheet price list and orders by email. Shopify now handles much of this in one place. On Shopify
                  Plus, native B2B lets you set up each trade customer as a company with its own buyers, delivery
                  locations, catalogue, price list and payment terms, with deposits and partial payments where you need
                  them.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  On standard plans we can build a simpler trade portal with a well-chosen app. Either way we connect it
                  to your stock and accounting, so wholesale and retail orders come from one pool of stock and land in
                  the same books.
                </p></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A homewares boutique owner reordering stock from a wholesale supplier's trade store on a tablet at her shop counter"
                caption={<>This is what B2B looks like from the stockist&apos;s side: her own prices, her usual products, and a reorder in a couple of taps instead of an email and a spreadsheet.</>}>
                <img src="/images/au/shopify-development/shopify-development-b2b.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over-the-shoulder view of a Brisbane homewares boutique owner reordering ceramic vases from a wholesale supplier's trade store on a tablet at her shop counter" />
              </VisualSlot>
            </div>
            <div className="platlist span-all" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Trade-only pricing</h3></div><p className="plat-build">Wholesale prices shown only to logged-in trade buyers, with quantity breaks and minimum order rules.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Payment terms</h3></div><p className="plat-build">Net terms, deposits and partial payments for approved accounts, so stockists do not have to pay by card upfront.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Quick reordering</h3></div><p className="plat-build">Order lists, past-order reorder and purchase order numbers at checkout, so buyers order in minutes, not emails.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ SHOPIFY SEO BASICS → definition module (image left, copy right) ═══ */}
        <section className="definition" id="shopify-seo">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition-2" kind="photo" ratio="3:2" className="definition-image"
              subject="A Shopify developer checking a product page on her phone against the desktop version on her laptop">
              <img src="/images/au/shopify-development/shopify-development-build.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over-the-shoulder view of a Shopify developer in a Melbourne office checking a product page on her phone against the desktop version on her laptop" />
            </VisualSlot>
            <p className="figcap">
              We review every template on mobile first. Most Australian shoppers browse on their phones, and a
              slow collection page costs you both sales and rankings.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Shopify SEO</div>
            <h2>Shopify SEO basics we build into every store</h2>
            <p>
              Shopify does a fair amount of SEO for you: editable titles, clean web addresses, an automatic
              sitemap and mobile-friendly themes. It does not choose your keywords, write useful collection pages,
              or stop a theme creating several addresses for the same product. That gap is why people look for a
              Shopify SEO agency or a Shopify SEO expert.
            </p>
            <p>
              Every build from us ships with the basics done: one H1 per page, unique titles and descriptions on
              key templates, product structured data (code that helps Google understand price and stock), a
              sensible collection structure, image alt text, fast pages and clean redirects.
            </p>
            <p>
              For ongoing work, including content, collection page copy and visibility in AI answers from ChatGPT,
              Perplexity and Google, see our <a href="/au/ai-seo">AI SEO service for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ AGENCY VS FREELANCER VS IN-HOUSE → table ═══ */}
        <section className="section" id="hire">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Hire a Shopify developer</div>
              <h2>Shopify agency vs freelance Shopify developer vs in-house hire</h2>
              <p className="lead">
                All three are sensible choices for someone. The right one depends on how much you are building and how
                much you need to change after launch.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What matters</th>
                    <th className="fj">FactoryJet (agency)</th>
                    <th>Freelance Shopify developer</th>
                    <th>In-house developer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best fit</th><td className="fj">Full builds, migrations, integrations</td><td>Small, defined tasks</td><td>Constant change, big teams</td></tr>
                  <tr><th scope="row">Design, code, testing in one place</th><td className="fj">Yes</td><td>Usually code only</td><td>Needs a wider team</td></tr>
                  <tr><th scope="row">Xero, MYOB, ERP integrations</th><td className="fj">Core skill</td><td>Varies</td><td>Varies</td></tr>
                  <tr><th scope="row">Cover when someone is away</th><td className="fj">Yes, a team</td><td>No</td><td>No, one person</td></tr>
                  <tr><th scope="row">Speed to start</th><td className="fj">Days</td><td>Days</td><td>Months to hire</td></tr>
                  <tr><th scope="row">Support after launch</th><td className="fj">Named engineer</td><td>If available</td><td>Yes</td></tr>
                  <tr><th scope="row">Who owns the code</th><td className="fj">You</td><td>Check the contract</td><td>You</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ WHICH OPTION FITS YOU (<details open>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <h2>Which option fits you?</h2>
              <p>Tick through each list. Tap a heading to fold it away.</p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2"
                subject="A brand founder at her desk comparing a short list of Shopify agencies, freelancers and an in-house job ad" />
            </div>
            <div className="ventries">
              <details open className="ventry">
                <summary><h3>Pick a freelance Shopify developer if…</h3><span className="chev" aria-hidden="true">+</span></summary>
                <ul className="chg-list chg-list-1col">
                  <li><span>Your store already works and you need a new section, a fix or a small tweak.</span></li>
                  <li><span>The job can be described in one paragraph and tested in an afternoon.</span></li>
                  <li><span>No accounting, shipping or ERP connection is involved.</span></li>
                </ul>
              </details>
              <details open className="ventry">
                <summary><h3>Pick a Shopify agency like us if…</h3><span className="chev" aria-hidden="true">+</span></summary>
                <ul className="chg-list chg-list-1col">
                  <li><span>You are launching a new store, redesigning, or moving to Shopify from another platform.</span></li>
                  <li><span>Orders need to reach Xero, MYOB, an ERP or a warehouse correctly.</span></li>
                  <li><span>You sell wholesale as well as retail, or are weighing up Shopify Plus.</span></li>
                  <li><span>You want one accountable team before and after launch.</span></li>
                </ul>
              </details>
              <details open className="ventry">
                <summary><h3>Hire in-house if…</h3><span className="chev" aria-hidden="true">+</span></summary>
                <ul className="chg-list chg-list-1col">
                  <li><span>You ship changes to the store every week and have a roadmap for years.</span></li>
                  <li><span>You already have designers, marketers and a technical lead to support the hire.</span></li>
                  <li><span>Even then, many brands keep an agency for big projects and cover.</span></li>
                </ul>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ COST DRIVERS + SHOPIFY FEES → ruled rows + split ═══ */}
        <section className="section platforms" id="cost">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Cost, explained without a rate card</div>
                <h2>What decides the cost of hiring a Shopify developer</h2>
              </div>
              <p>
                We do not publish prices, because two stores with the same page count can differ several times over
                in effort. What we can tell you is exactly what moves the number, so you can compare quotes fairly.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Design approach.</h3></div><p className="plat-build">An adapted theme is quicker than a custom theme built from scratch.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Catalogue shape.</h3></div><p className="plat-build">Number of products, variants, bundles and product options.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Migration.</h3></div><p className="plat-build">How much data, content and history moves, and from which platform.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Integrations.</h3></div><p className="plat-build">Each connected system, from Xero to an ERP, adds design and testing work.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">05</span><div className="plat-name"><h3>B2B and Plus features.</h3></div><p className="plat-build">Trade pricing, checkout extensions and custom Functions.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">06</span><div className="plat-name"><h3>Support after launch.</h3></div><p className="plat-build">Whether you want a monthly plan or call us as needed.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  Want the numbers? Our <a href="/blog/shopify-cost-australia-2026">Shopify cost in Australia guide</a> lists
                  every plan price and fee in AUD, <a href="/blog/shopify-cost-australia-2026#100-sale">what Shopify takes from each sale</a>,
                  and published <a href="/blog/shopify-cost-australia-2026#developer-cost">Shopify developer costs in Australia</a>.
                </p>
                <ModalCTAButton label="Get a fixed-scope Shopify quote" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What Shopify itself charges</div>
                <p className="au-panel-intro">
                  Separate from any agency, Shopify charges you directly. The shape is simple:
                </p>
                <ul className="trigrows">
                  <li><span className="m">Monthly plan</span><span className="t">Basic to Plus</span></li>
                  <li><span className="m">Card processing per sale</span><span className="t">% plus fixed fee</span></li>
                  <li><span className="m">Third-party payment provider</span><span className="t">Extra fee</span></li>
                  <li><span className="m">Rates on higher plans</span><span className="t">Lower</span></li>
                  <li><span className="m">Paid apps and themes</span><span className="t">Varies</span></li>
                </ul>
                <p className="au-note">
                  Live figures: <a href={SRC_PRICING} {...extLink}>Shopify Australia pricing</a>. We never quote Shopify’s rates for them, because they change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AUSTRALIAN RULES → facts + photo ═══ */}
        <section className="section facts" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Selling online in Australia</div>
              <h2>The Australian rules your Shopify store is built to follow</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The ACCC is clear that online businesses have the same responsibilities to consumers as physical
                  businesses. The consumer guarantees under the Australian Consumer Law apply, you must not make false
                  or misleading claims on your website or social media, and the same rules cover how you handle
                  product reviews. The ACCC adds that overseas businesses selling directly to Australians must follow
                  the Australian Consumer Law too.
                </p></div>
                <div className="fact"><div className="sec">§02</div><div>
                  <p>
                    In practice we build the store so the basics are visible: clear steps for refunds and replacements,
                    your ABN and contact details, a privacy policy, GST set up correctly if you are registered, and
                    product claims your team has checked. We are not lawyers, so we recommend your adviser reviews your
                    policies, but the store will not fight you on any of it.
                  </p>
                  <p className="au-note">
                    Source: <a href={SRC_ACCC} {...extLink}>ACCC, Selling online</a>.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="An online fashion store team member inspecting a returned pair of sneakers at the returns bench"
                caption="Returns are where the consumer guarantees get real. We build a clear refund and replacement process into the store, so your team and your customers both know the steps.">
                <img src="/images/au/shopify-development/shopify-development-warehouse.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A team member at a Sydney online fashion store inspecting a returned pair of white sneakers at the returns bench before processing the refund" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ CITIES → facts + photo + city links + demand panel ═══ */}
        <section className="section facts" id="cities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Sydney, Melbourne, Brisbane, Perth</div>
              <h2>Shopify developers for Australian brands in every capital</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  People search for a Shopify developer in Sydney, a Shopify expert in Melbourne or a Shopify agency
                  in Brisbane expecting to need someone nearby. For a Shopify build you do not. We run projects
                  remotely with video workshops, a shared project board and a named lead engineer, and we do not
                  pretend to have an office on your street.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  What changes from city to city is mostly logistics, not the build. A <b>Sydney</b> or{' '}
                  <b>Melbourne</b> brand shipping from a metro warehouse can offer fast delivery to most of its
                  customers, so shipping rules focus on cut-off times and express options. A <b>Brisbane</b> or Gold
                  Coast brand often ships further north and inland, so regional postcode rules matter more. A{' '}
                  <b>Perth</b> brand is two to three hours behind the east coast and a long way from most of its
                  customers, so we set up shipping costs carefully and schedule calls and support in Perth business
                  hours.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    Whichever city you are in, the founder is involved in the project and the senior engineers who
                    scope your store are the ones who build it.
                  </p>
                  <ul className="city-list">
                    <li><a href="/au">FactoryJet Australia</a></li>
                    <li><a href="/au/melbourne">Melbourne</a></li>
                    <li><a href="/au/brisbane">Brisbane</a></li>
                    <li><a href="/au/adelaide">Adelaide</a></li>
                    <li><a href="/au/canberra">Canberra</a></li>
                    <li><a href="/au/seo">SEO Australia</a></li>
                    <li><a href="/contact">Contact us</a></li>
                  </ul>
                </div></div>
                <div className="fact"><div className="sec">§04</div>
                  <div className="demand">
                    <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                    <ul>
                      {[
                        { kw: 'shopify partner / development partner', v: '2,400', w: '100%', kd: 'The head term cluster' },
                        { kw: 'shopify developer', v: '480', w: '20%', kd: 'Buyer intent' },
                        { kw: 'shopify seo agency', v: '320', w: '13%', kd: 'Buyer intent, SEO' },
                        { kw: 'shopify development', v: '260', w: '11%', kd: 'Mixed intent' },
                        { kw: 'shopify expert', v: '210', w: '9%', kd: 'Buyer intent' },
                        { kw: 'shopify expert perth', v: '140', w: '6%', kd: 'Local intent' },
                        { kw: 'shopify developer melbourne', v: '70', w: '3%', kd: 'Local intent' },
                        { kw: 'hire a shopify developer', v: '70', w: '3%', kd: 'Ready to hire' },
                      ].map((r) => (
                        <li key={r.kw} className="demand-row">
                          <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                          <div className="demand-bar"><i style={{ width: r.w }} /></div>
                          <div className="demand-kd">{r.kd}</div>
                        </li>
                      ))}
                    </ul>
                    <p className="demand-src">Source: DataForSEO, Australia, September 2026</p>
                  </div>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-4" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="An online store team member handing courier satchels to a driver loading a van outside their warehouse"
                caption="From Perth, most customers are a long way east. Shipping rules and courier cut-offs get set up for where your orders actually go.">
                <img src="/images/au/shopify-development/shopify-development-dispatch.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Perth online store team member handing a stack of courier satchels to a driver loading a white van outside their warehouse on a sunny morning" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ AGENCY LIST (self-disclosure, ItemList from SHOPIFY_AGENCIES) → ruled rows ═══ */}
        <section className="section platforms" id="agencies">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Australian Shopify agencies worth knowing</h2>
              </div>
              <p>
                We are one option, not the only one. These Shopify agencies show up when Australians search for a
                Shopify agency or ask AI assistants for a recommendation. Partner tiers are as each company states
                them. Check any claim in Shopify’s own Partner Directory, talk to two or three, and pick the fit.
              </p>
            </div>
            <div className="platlist" role="list">
              {SHOPIFY_AGENCIES.map((a, i) => (
                <div key={a.name} className={a.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{a.name}</h3>{a.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{a.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Agencies named from live Australian search results and AI assistant answers for Shopify agency queries, September 2026. Notes reflect each company’s own homepage on 25 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ SUPPORT AFTER LAUNCH → full-width head + ruled rows ═══ */}
        <section className="section platforms" id="after-launch">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">After launch</div>
              <h2>The agencies that disappear after launch are the real problem</h2>
              <p className="lead">
                The most common story we hear from Australian brands is not about a bad design. It is about an agency
                that launched the store, sent the final invoice and stopped answering. Six months later an app update
                breaks the cart, the Xero sync double-counts refunds, and nobody knows how the theme was built.
              </p>
              <p className="lead">
                We work the other way. The engineers who build your store support it, the handover documents every
                app and integration, and the code sits in version control in your name. Support is a monthly plan or
                on request, whichever suits you. See what a{' '}
                <a href="/au/website-maintenance">Shopify and website care plan</a> includes.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Fix</h3></div><p className="plat-build">Bugs, app conflicts and broken integrations, handled by an engineer who already knows your store.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Improve</h3></div><p className="plat-build">New sections, landing pages for campaigns, speed work and conversion fixes as you learn what sells.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Grow</h3></div><p className="plat-build">Shopify Plus, B2B, a New Zealand store or an AI agent for customer service when the time is right.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services in Australia</div>
              <h2>Beyond the Shopify build</h2>
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

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Shopify agency and Shopify developer questions Australians ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_PRICING} {...extLink}>Shopify Australia pricing</a>
              <a href={SRC_PLUS_PLAN} {...extLink}>Shopify Plus plan</a>
              <a href={SRC_SCRIPTS} {...extLink}>Shopify Scripts deprecation</a>
              <a href={SRC_ACCC} {...extLink}>ACCC, Selling online</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Get a Shopify store that works on day one and on day three hundred</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                products, your systems and the right scope for your Shopify store. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Book my Shopify scoping call" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ecommerce-development">See ecommerce development</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
