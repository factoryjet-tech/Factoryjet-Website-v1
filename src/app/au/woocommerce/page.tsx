import type { Metadata } from 'next';
import { Fragment } from 'react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import { twinAlternates } from '@/data/hreflangMap';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';

const CANONICAL = 'https://factoryjet.com/au/woocommerce';
const UPDATED = '2026-10-31';
const TITLE = 'WooCommerce Developers & Agency Australia | FactoryJet';
const H1 = 'WooCommerce Development for Australian Businesses on Xero, MYOB and a Warehouse';
const DESCRIPTION =
  'WooCommerce developers for established Australian stores: rebuilds, B2B trade portals, Xero, MYOB and Cin7 sync, Afterpay, Zip and Australia Post.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'WooCommerce Development Australia', url: CANONICAL },
];

/* ─── External sources, each fetched and read 2026-10-29 ─────────────── */
// WordPress.org plugin directory: "Active installations 7+ million", version 11.2.1, last updated
// 9 Oct 2026, "This plugin is free but offers additional paid commercial upgrades or support".
const SRC_WPORG = 'https://wordpress.org/plugins/woocommerce/';
// WooCommerce developer docs, release calendar: "Releases typically occur on a 5-week cycle".
const SRC_RELEASE = 'https://developer.woocommerce.com/release-calendar/';
// WooCommerce server requirements (WooCommerce 10.8 and later): WordPress 6.9 or greater, PHP 8.3 or
// greater (tested up to 8.4), MySQL 8.0 or greater or MariaDB 10.6 or greater, HTTPS support,
// WordPress memory limit of 256 MB or greater.
const SRC_REQS = 'https://woocommerce.com/document/server-requirements/';
// WooCommerce developer docs, HPOS: dedicated order tables, "enabled by default for new installations
// starting with WooCommerce 8.2, released in October 2023".
const SRC_HPOS = 'https://developer.woocommerce.com/docs/features/high-performance-order-storage/';
// Woo's Xero extension product page: creates invoices in Xero for each order and applies payments to
// the matching invoice; sends product, shipping, discount and tax data. Stock sync is not mentioned.
const SRC_XERO = 'https://woocommerce.com/products/xero/';
// OAIC, small business: "A small business is one with an annual turnover of $3 million or less";
// regardless of turnover the Act covers health service providers and businesses trading in personal
// information, among others. The page does not mention the 2024 amendment Act, so we leave it out.
const SRC_OAIC =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business';
// WordPress.org, Afterpay Gateway for WooCommerce, author Afterpay, 10,000+ active installations,
// changelog 2.0.1 "Added support for multi-market use in Australia, New Zealand and United States".
const SRC_AFTERPAY = 'https://wordpress.org/plugins/afterpay-gateway-for-woocommerce/';
// WordPress.org, "zipMoney(Zip Co) Payments Plugin for WooCommerce", author Zip Co Limited, 2,000+ installs.
const SRC_ZIP = 'https://wordpress.org/plugins/zipmoney-payments-woocommerce/';
// business.gov.au, register for GST: "a tax of 10% on most goods, services and other items sold or
// consumed in Australia"; register if "your business has a GST turnover of $75,000 or more".
// (ato.gov.au returned 403 to our fetch on 2026-10-29, so the government business portal is cited.)
const SRC_BGA = 'https://business.gov.au/registrations/register-for-taxes/register-for-goods-and-services-tax-gst';
// OAIC, about the Notifiable Data Breaches scheme (same URL cited on /au/website-maintenance).
const SRC_OAIC_NDB = 'https://www.oaic.gov.au/privacy/notifiable-data-breaches/about-the-notifiable-data-breaches-scheme';
// Market range (build only), WP Creative, Sydney WordPress agency, "How Much Does a Website Cost in
// Australia?", updated 28 August 2026: eCommerce Website "AUD $10,000 – $50,000+"; Premium tier
// "AUD $25,000 – $100,000+" for "Established businesses & eCommerce brands built to scale". The page
// does not say whether figures include GST. Never add FactoryJet prices or running costs here.
const SRC_WPCREATIVE = 'https://wpcreative.com.au/how-much-does-a-website-cost-in-australia/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'hiring',  label: 'Hiring a WooCommerce developer' },
  { key: 'systems', label: 'Xero, MYOB, stock and shipping' },
  { key: 'b2b',     label: 'Trade, GST and marketplaces' },
  { key: 'running', label: 'Speed, hosting and privacy' },
  { key: 'platform', label: 'WooCommerce or Shopify' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Hiring a WooCommerce developer ──
  { category: 'hiring', question: 'What does a WooCommerce developer actually do?',
    answer: 'A WooCommerce developer writes and fixes the code behind a WordPress store. Day to day that means custom plugins, theme templates, checkout changes, and the connections that carry orders into Xero or MYOB and stock back from Cin7 or Unleashed. On an established store the bigger job is often subtraction: finding which of the dozens of installed plugins are slowing checkout or clashing, and replacing three of them with one small piece of code you own.' },
  { category: 'hiring', question: 'How do I choose a WooCommerce agency in Australia?',
    answer: 'Ask three things before price. First, show us a live WooCommerce store you connected to accounting or stock software, and explain what syncs which way. Second, how do you test plugin updates before they touch the live store? Third, who owns the code, the hosting account and the admin logins when the project ends? An agency that answers all three plainly is worth a scoping call.' },
  { category: 'hiring', question: 'Is a freelancer enough, or do we need a WooCommerce agency?',
    answer: 'A freelancer suits one contained job, such as a new product field or a broken shipping rule. When the store feeds Xero, a warehouse system and trade accounts, ask what happens in an EOFY or Click Frenzy week if that one person is away. Any agency you shortlist should name a second engineer who knows your store and show how code is reviewed before it reaches checkout.' },
  { category: 'hiring', question: 'How much does WooCommerce development cost in Australia?',
    answer: 'Published Australian ranges are wide. WP Creative, a Sydney WordPress agency, puts an ecommerce website at AUD $10,000 to $50,000 or more, and a premium build for established ecommerce brands at AUD $25,000 to $100,000 or more (updated 28 August 2026; the guide does not say whether GST is included). Integrations, trade pricing and data migration push a store up those bands. FactoryJet quotes a fixed price per phase in writing. Changes are quoted and approved per request, with no monthly minimum.',
    links: [{ href: SRC_WPCREATIVE, label: 'WP Creative website cost guide' }] },
  { category: 'hiring', question: 'Our previous WooCommerce developer has gone quiet. Can you take over?',
    answer: 'Yes. This is a common way our WooCommerce work starts. First we confirm that the hosting account, the domain and the payment gateway logins sit in your company’s name, because nobody can work safely without them. Then a written health check covers plugins and premium licences, custom code, the staging setup, speed and the Xero or MYOB sync, with risks ranked by what can stop orders. Urgent fixes come before anything new.' },

  // ── Xero, MYOB, stock and shipping ──
  { category: 'systems', question: 'Can WooCommerce connect to Xero?',
    answer: 'Yes. Woo’s own Xero extension creates an invoice in Xero for each order and applies the payment to it, sending product, shipping, discount and tax lines across. Its product page does not mention stock sync, so if stock lives in Xero or another system you need a separate decision about which system owns stock. Many established stores also prefer daily summary entries over one invoice per order, which needs a different connector or a small custom integration.',
    links: [{ href: SRC_XERO, label: 'Woo Xero extension' }] },
  { category: 'systems', question: 'Does WooCommerce work with MYOB?',
    answer: 'It can, through third-party connectors or a custom integration using MYOB’s API. The setup question is the same as with Xero: do orders arrive as individual invoices or as a daily summary, where do Afterpay and Stripe fees land, and how is a refund recorded? MYOB Business suits most mid-sized stores. If you run MYOB Acumatica, plan it as an ERP project with its own data owner rules. A plugin alone will not cover it.' },
  { category: 'systems', question: 'Can WooCommerce sync stock with Cin7, Unleashed or Odoo?',
    answer: 'Yes. Cin7 Core (formerly DEAR), Cin7 Omni, Unleashed, Odoo and NetSuite can all hold stock and prices while WooCommerce displays them and sends orders back. The rule we hold to is one owner per field. If both the website and the inventory system can change a stock level, they will eventually disagree. We map every field, name its owner in writing, and add an alert when a sync fails instead of letting it fail silently.' },
  { category: 'systems', question: 'How do I connect WooCommerce to Australia Post or StarTrack?',
    answer: 'Through a shipping plugin or a multi-carrier platform that reads WooCommerce orders, prints labels and writes tracking numbers back to the order. Australia Post and StarTrack suit national reach. Sendle suits lighter parcels. Most established stores run two carriers and route each order by weight and postcode. We also set rules for bulky items and remote postcodes so checkout shipping matches what the carrier actually charges you.' },
  { category: 'systems', question: 'Can WooCommerce take Afterpay and Zip payments?',
    answer: 'Yes. Afterpay publishes its own Afterpay Gateway for WooCommerce plugin on WordPress.org, and Zip Co publishes a Zip payments plugin for WooCommerce there too. Stripe handles cards, Apple Pay and Google Pay. We test each method with a real order and a refund before launch, and make sure each provider’s fees post to the right account in Xero or MYOB, because buy now, pay later settlements arrive differently from card payouts.',
    links: [{ href: SRC_AFTERPAY, label: 'Afterpay Gateway for WooCommerce' }] },

  // ── Trade, GST and marketplaces ──
  { category: 'b2b', question: 'Is WooCommerce good for B2B wholesale in Australia?',
    answer: 'For many distributors and manufacturers, yes. A WooCommerce trade portal can hide prices from guests, give each account its own price list, show trade prices ex-GST, enforce minimum quantities, accept purchase order numbers and offer pay on account. Where it gets hard is a large catalogue with thousands of customer-specific prices. Then the prices should live in your ERP or inventory system and the store should read them.',
    links: [{ href: '/au/b2b-ecommerce', label: 'B2B ecommerce in Australia' }] },
  { category: 'b2b', question: 'How should GST be set up in WooCommerce?',
    answer: 'WooCommerce tax settings cover the 10% GST rate, GST-free products, and whether prices are entered and shown including or excluding tax. Retail stores usually show GST-inclusive prices. Trade portals often show ex-GST prices to logged-in business buyers. The setting is easy. What breaks is the hand-off to accounting, so we agree the tax codes with your bookkeeper and check that Xero or MYOB receives the same totals the order shows.' },
  { category: 'b2b', question: 'Can WooCommerce list our products on Amazon.com.au, eBay or Kogan?',
    answer: 'Yes, through a feed or channel management tool that sends WooCommerce products to marketplaces and brings their orders back into one place. Amazon.com.au, eBay, Kogan, Bunnings Marketplace and THE ICONIC each have their own product data rules, so the real work is clean titles, attributes and images. If your inventory system already connects to the marketplaces, it is often better for it to own the listings instead of WooCommerce.' },
  { category: 'b2b', question: 'When does a WooCommerce business have to register for GST?',
    answer: 'business.gov.au says you must register once your GST turnover reaches $75,000 or more, and describes GST as a 10% tax on most goods and services sold in Australia. Established stores are well past that line, so the practical questions are different: which products are GST-free, whether trade buyers see ex-GST prices, and whether every order reaches Xero or MYOB with the same tax total the customer saw at checkout.',
    links: [{ href: SRC_BGA, label: 'business.gov.au, register for GST' }] },

  // ── Speed, hosting and privacy ──
  { category: 'running', question: 'Why is our WooCommerce store slow?',
    answer: 'Usually one of four causes: hosting that is too small, plugins that load on every page, a heavy page builder theme, or years of order and session data in the database. A bigger server mostly hides the problem for a few months. We start by measuring which plugins and database queries cost time. Older stores also gain from High-Performance Order Storage, on by default for new installs since WooCommerce 8.2.',
    links: [{ href: SRC_HPOS, label: 'WooCommerce HPOS documentation' }] },
  { category: 'running', question: 'What server specification should our WooCommerce hosting meet?',
    answer: 'WooCommerce’s published minimums for version 10.8 and later are WordPress 6.9, PHP 8.3, MySQL 8.0 or MariaDB 10.6, HTTPS and a 256 MB WordPress memory limit. Treat those as the floor. A store taking steady orders also needs object caching (keeping common database answers in memory), a staging copy, tested backups and enough server room for sale days. We usually recommend an Australian data centre so pages load fast for local shoppers, with the hosting account in your name.',
    links: [{ href: SRC_REQS, label: 'WooCommerce server requirements' }] },
  { category: 'running', question: 'How often does WooCommerce need updating?',
    answer: 'Plan on something most weeks. The WooCommerce release calendar puts core releases about five weeks apart, with security fixes possible in between, and WordPress, the theme and each plugin keep their own timetables. Premium plugins also stop updating when a licence lapses, which is a common way a store ends up stuck on old versions. We test each batch on a staging copy with a real checkout, apply it in a quiet hour, and keep a written log.',
    links: [{ href: SRC_RELEASE, label: 'WooCommerce release calendar' }] },
  { category: 'running', question: 'Does the Privacy Act apply to our WooCommerce store?',
    answer: 'The OAIC defines a small business as one with annual turnover of $3 million or less, so a store above that line is generally covered by the Privacy Act. Some businesses are covered whatever their turnover, including health service providers and businesses trading in personal information. A store holds names, addresses and order history, so we limit admin access, remove plugins that copy customer data offsite, and list where that data goes.',
    links: [{ href: SRC_OAIC, label: 'OAIC guidance on small business' }] },
  { category: 'running', question: 'Is WooCommerce secure enough for an established business?',
    answer: 'For an Australian store, security is partly a legal question. If the Privacy Act covers your business, a data breach likely to cause serious harm must be reported to the OAIC and to affected customers under the Notifiable Data Breaches scheme. Card numbers normally stay with Stripe, Afterpay or Zip, so the exposure is names, addresses and order history. We cut unused plugins, give each admin a separate login with two-factor sign-in, and restore a backup to prove it works.',
    links: [{ href: SRC_OAIC_NDB, label: 'OAIC, Notifiable Data Breaches scheme' }] },

  // ── WooCommerce or Shopify ──
  { category: 'platform', question: 'Is WooCommerce or Shopify better for an Australian business?',
    answer: 'Start with where your stock and prices live. If Cin7, Unleashed or an ERP owns them, either platform can read them, and the choice comes down to who runs the software. WooCommerce keeps the code and database in your hands and sits well beside a large WordPress content site. Shopify runs hosting and checkout for you, with trade pricing through Shopify Plus or apps. FactoryJet builds on both platforms, so neither answer earns us more.',
    links: [{ href: '/au/shopify-development', label: 'Shopify development in Australia' }] },
  { category: 'platform', question: 'Should we move from WooCommerce to Shopify?',
    answer: 'List what the store connects to first: Afterpay, Zip, Xero or MYOB, Australia Post or Sendle, and your inventory system. Check that each has a working Shopify connection that handles your GST setup and trade accounts. If every one does, and WordPress hosting and plugins drain your attention, moving is reasonable. If the trade portal or checkout depends on custom code, a health check on the current store usually gives a clearer answer.',
    links: [{ href: '/au/shopify-migration', label: 'Shopify migration in Australia' }] },
  { category: 'platform', question: 'Will we lose Google rankings if we rebuild or migrate a WooCommerce store?',
    answer: 'Not if the move is planned around your web addresses. We crawl the current site, list every URL that earns traffic, keep titles and content that rank, and map each old address to its new one with a 301 redirect, the permanent forwarding rule search engines follow. Shopify uses fixed URL patterns such as /products/, so a move to Shopify, or off Magento (now Adobe Commerce), needs a fuller map. We watch Search Console daily for the first weeks.',
    links: [{ href: '/au/ecommerce-seo', label: 'Ecommerce SEO in Australia' }] },
  { category: 'platform', question: 'Do you do SEO for WooCommerce stores?',
    answer: 'Yes. WooCommerce SEO on an established store is mostly category pages, product data and speed. Category pages need their own copy instead of a bare product grid. Product titles and attributes need to match what buyers type. Slow plugins and heavy images get fixed, because speed affects both rankings and checkout. When URLs change in a rebuild, every old address gets a redirect so rankings carry across.',
    links: [{ href: '/au/ecommerce-seo', label: 'Ecommerce SEO in Australia' }] },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'WooCommerce Development Australia',
      serviceType: 'WooCommerce development, WooCommerce B2B trade portals, WooCommerce integrations with Xero, MYOB, Cin7, Unleashed, Odoo and NetSuite, store rescue and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'WooCommerce developers for established Australian businesses: store rebuilds and rescues, B2B trade portals with ex-GST pricing, Xero, MYOB, Cin7, Unleashed, Odoo and NetSuite integrations, Afterpay, Zip and Stripe checkout, Australia Post, StarTrack and Sendle shipping, and optional support after launch.',
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
      datePublished: '2026-10-29',
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['woocommerce'] },
  openGraph: {
    title: TITLE,
    description:
      'WooCommerce development for established Australian businesses: rebuilds, rescues, B2B trade portals and integrations with Xero, MYOB, Cin7 and Unleashed. A draft on your data before you sign, fixed price per phase, and you own the code.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/ecommerce-development/ecommerce-development-og.webp', width: 1200, height: 630, alt: 'A business owner reviewing her online store on a laptop' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline); only the
   closing phrase is wrapped in .hero-emphasis. */
const H1_EMPHASIS = 'Xero, MYOB and a Warehouse';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Eight jobs, each one a situation an established Australian store brings to us. */
const JOBS: { n: string; t: string; d: string; icon: string; link?: { href: string; label: string } }[] = [
  { n: '01', t: 'Steady a store that breaks on every update', d: 'A health check, a staging copy, then fixes in order of what can stop orders. Clashing plugins get replaced by one small piece of code you own.', icon: 'M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Zm-3 9 2 2 4-4' },
  { n: '02', t: 'Orders into Xero or MYOB the way your bookkeeper wants', d: 'Per-order invoices or daily summaries, Afterpay and Stripe fees to the right accounts, refunds that reverse cleanly. Signed off by the person who reconciles it.', icon: 'M5 3h14v18H5V3Zm3 4h8m-8 4h2m4 0h2m-8 4h2m4 0h2' },
  { n: '03', t: 'Stock and prices from Cin7, Unleashed, Odoo or NetSuite', d: 'One system owns each field, written down before any code. The store reads stock and price, sends orders back, and alerts someone when a sync fails.', icon: 'M4 7h16v12H4V7Zm4-4h8v4H8V3Zm-1 9h4m-4 3h7' },
  { n: '04', t: 'A trade portal for stockists and account customers', d: 'Hidden prices for guests, account price lists shown ex-GST, minimum quantities, purchase order numbers and pay on account for approved buyers.', icon: 'M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6' },
  { n: '05', t: 'Checkout with Afterpay, Zip and Stripe', d: 'Each payment method tested with a real order and a refund, with the instalment message on product pages kept to one short line.', icon: 'M3 6h18v12H3V6Zm0 4h18M7 15h4' },
  { n: '06', t: 'Australia Post, StarTrack and Sendle shipping', d: 'Rates by weight, size and postcode, labels printed from the order, tracking written back. Bulky items and remote postcodes priced so you stop losing margin on them.', icon: 'M3 7h11v9H3V7Zm11 3h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' },
  { n: '07', t: 'Marketplace listings from one product catalogue', d: 'Feeds to Amazon.com.au, eBay, Kogan, Bunnings Marketplace or THE ICONIC, with orders flowing back to one place and stock held by one owner.', icon: 'M4 6h16M4 12h16M4 18h10', link: { href: '/au/amazon-agency', label: 'Amazon marketplace services in Australia' } },
  { n: '08', t: 'Speed work on stores with years of data', d: 'Measured before and after: plugin load, slow database queries, image weight and a move to High-Performance Order Storage where the store still uses the old order tables.', icon: 'M4 16a8 8 0 1 1 16 0m-8 0 4-5' },
];

/* Numbered project steps. Titles carry their number ("01 · Your brief"). */
const STEPS: { t: string; d: string }[] = [
  { t: '01 · Your brief or RFP', d: 'Send what you have: a written brief, a tender document, a spreadsheet of plugins, or a list of what keeps breaking. If you have none, a 30 minute call with the founder covers it and we write the brief back to you.' },
  { t: '02 · A draft on your own data', d: 'Before you sign anything, we show working software built with your products or a copy of your store: a draft trade portal, a sync running against a sandbox Xero file, or the fixed checkout. You judge working software before any contract.' },
  { t: '03 · Fixed price per phase, in writing', d: 'Each phase is scoped, priced and signed on its own. Phase one is often the health check and urgent fixes. You can stop after any phase and keep everything built so far.' },
  { t: '04 · Build on staging', d: 'All work happens on a staging copy while the live store keeps trading. Integrations are tested against sandbox accounts in Xero, MYOB or your inventory system before they touch real data.' },
  { t: '05 · Launch and defect cover', d: 'We switch over at a quiet hour and watch the first orders with you. Defects are fixed inside the build price for a cover period agreed before work starts.' },
  { t: '06 · Support if you want it', d: 'Optional. Each change is quoted and approved before we start, with no monthly minimum. Or you take the code and run it with your own team.' },
];

const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/b2b-ecommerce', t: 'B2B ecommerce Australia', d: 'Trade portals, account pricing and quick order forms for distributors and manufacturers.', go: 'Explore B2B ecommerce →' },
  { href: '/au/ecommerce-erp-integration', t: 'Ecommerce ERP integration Australia', d: 'Field maps and syncs between your store and NetSuite, Odoo, Cin7 or another ERP.', go: 'Explore ERP integration →' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'Comparing WooCommerce with Shopify, BigCommerce, Adobe Commerce and Maropost for your catalogue and systems.', go: 'Explore ecommerce →' },
  { href: '/au/shopify-development', t: 'Shopify development Australia', d: 'When Shopify or Shopify Plus fits better, including migrations from WooCommerce with every URL redirected.', go: 'Explore Shopify →' },
  { href: '/au/website-maintenance', t: 'Website maintenance Australia', d: 'Tested updates, backups and checkout checks for WordPress and WooCommerce stores.', go: 'Explore maintenance →' },
  { href: '/au/ecommerce-seo', t: 'Ecommerce SEO Australia', d: 'Category pages, product data and technical SEO for stores that need more organic orders.', go: 'Explore ecommerce SEO →' },
  { href: '/au/ai-customer-service', t: 'AI customer service', d: 'An AI agent that answers order status and returns questions from your WooCommerce data.', go: 'Explore AI customer service →' },
  { href: '/services/woocommerce-development', t: 'WooCommerce development (US)', d: 'Our main WooCommerce development page for stores in the United States.', go: 'See the US page →' },
];

export default function WooCommerceAUPage() {
  return (
    <>
      <script id="ld-au-woocommerce" type="application/ld+json"
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
              <div className="eyebrow">WooCommerce Development Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your WooCommerce store takes real orders. Staff still re-key some of them into Xero or MYOB, stock in
                Cin7 or Unleashed drifts away from what the website shows, trade customers email their orders, and
                every plugin update feels like a gamble. FactoryJet’s WooCommerce developers fix stores like that for established
                Australian businesses, from one broken sync to a full rebuild, and you own every line of code.
              </p>
              <HeroInlineForm region="au" source="au_woocommerce_hero" submitLabel="See a draft of my store"
                trustText="Working software on your own data before you sign. Founder replies within 24 hours." />
            </div>

            <div className="specpanel" aria-label="How a WooCommerce project with FactoryJet works">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>TERMS · HOW WE WORK</span>
                <span className="sys"><span>WooCommerce on WordPress</span><span>Xero, MYOB, Cin7, Unleashed</span></span>
              </div>
              <div className="specpanel-body">
                <div className="specrow run">
                  <span className="idx">Before signing</span>
                  <span className="title">A draft on your own data</span>
                  <span className="tag">Demo first</span>
                </div>
                <div className="specrow run">
                  <span className="idx">Per phase</span>
                  <span className="title">Fixed price per phase</span>
                  <span className="tag">In writing</span>
                </div>
                <div className="specrow run">
                  <span className="idx">Build price</span>
                  <span className="title">Defect cover after launch</span>
                  <span className="tag">Included</span>
                </div>
                <div className="specrow hold">
                  <span className="idx">Your name</span>
                  <span className="title">Code and accounts</span>
                  <span className="tag">Yours</span>
                </div>
              </div>
              <div className="specpanel-foot">RULE · One system owns each field: stock, price, customer. Written down before any code.</div>
            </div>
          </div>
        </section>

        {/* ═══ LEDGER (verified facts only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '7+ million', t: 'active WooCommerce installations listed in the WordPress.org plugin directory', s: 'WordPress.org', u: SRC_WPORG },
              { v: '5 weeks', t: 'the usual gap between WooCommerce releases, before plugin and theme updates', s: 'WooCommerce developer docs', u: SRC_RELEASE },
              { v: 'PHP 8.3', t: 'the minimum PHP version for WooCommerce 10.8 and later, with a 256 MB memory limit', s: 'WooCommerce server requirements', u: SRC_REQS },
              { v: '$3 million', t: 'annual turnover above which the Privacy Act covers a business, with some exceptions below it', s: 'OAIC', u: SRC_OAIC },
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
          <div className="who"><b><a href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/" {...extLink}>Bhavesh Barot</a></b>, Founder<br /><span>500+ businesses served since 2014.</span></div>
          <div className="upd">Last updated<br />31 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does a WooCommerce developer do for an established Australian business?</h2>
            </div>
            <div className="factlist">
              <div className="fact">
                <div className="sec">§01</div>
                <p data-speakable="true">
                  <span className="stat">A WooCommerce developer builds and looks after a store that runs on WordPress.</span>{' '}
                  WooCommerce is a free plugin that turns a WordPress site into a store. For an Australian business
                  past its first few years, most of the work sits behind the storefront. Orders reach Xero or MYOB
                  with GST and payment fees recorded correctly. Stock and prices come from Cin7, Unleashed, Odoo or
                  NetSuite. Trade buyers see their own ex-GST prices, and Australia Post or StarTrack labels print
                  from the order.
                </p>
              </div>
              <div className="fact">
                <div className="sec">§02</div>
                <div>
                  <div className="factlabel">Five terms on this page</div>
                  <p>
                    A <b>plugin</b> is an add-on that gives WordPress a new feature; WooCommerce itself is one. An{' '}
                    <b>integration</b> is the code that moves records between WooCommerce and your other software, for
                    example a paid order becoming a Xero invoice. <b>Staging</b> is a private copy of your store where changes are tested before
                    real customers see them. An <b>ERP</b> (enterprise resource planning system), such as NetSuite or
                    Odoo, is the software that runs stock, buying and finance in one place. <b>HPOS</b>, short for
                    High-Performance Order Storage, is WooCommerce’s newer way of keeping orders in their own database
                    tables.
                  </p>
                </div>
              </div>
              <div className="fact">
                <div className="sec">§03</div>
                <p>
                  WooCommerce costs nothing to download, and WordPress.org counts it on 7+ million active sites. That popularity is why so many stores end up with dozens of plugins from different
                  authors. Our first job on an established store is deciding which ones to keep, which to replace with
                  a small custom plugin, and which system should own each piece of data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ LISTICLE: EIGHT JOBS → capgrid ═══ */}
        <section className="section capabilities" id="what-we-build">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">WooCommerce development, itemised</div>
              <h2>Eight WooCommerce jobs established stores bring to us</h2>
              <p className="lead">
                These jobs usually start behind the storefront: an order that never reached the warehouse, a refund
                booked twice in Xero, a stockist who gave up and phoned, or an update that took checkout down.
              </p>
            </div>
            <ul className="capgrid" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {JOBS.map((s, i) => (
                <li key={s.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">JOB‑{s.n}</span><svg {...CAP_ICON}><path d={s.icon} /></svg></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}{s.link && <>{' '}See <a href={s.link.href}>{s.link.label}</a>.</>}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ INTEGRATIONS → facts + panel ═══ */}
        <section className="section facts" id="integrations">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Integrations</div>
              <h2>Connecting WooCommerce to the systems Australian businesses run</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Accounting comes first because it is where errors get expensive. Woo’s own{' '}
                  <a href={SRC_XERO} {...extLink}>Xero extension</a> creates an invoice in Xero for each order and
                  applies the payment to it. Its product page does not mention stock sync. So a store whose stock lives
                  in Xero, Cin7 Core or Unleashed needs a second, separate decision about who owns stock. Skipping that
                  decision is the most common reason we see two systems disagreeing about how many units are on the
                  shelf.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  MYOB Business, QuickBooks Online and Odoo follow the same pattern with different connectors. NetSuite
                  and MYOB Acumatica are ERP projects: customers, price lists and stock usually live there, and the
                  store reads them. For each system we write a one-page field map listing what moves, in which
                  direction, how often, and who gets the alert when a sync fails. Our{' '}
                  <a href="/au/ecommerce-erp-integration">ecommerce ERP integration</a> page covers that work in more detail.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Payments and shipping close the loop. Afterpay publishes its own{' '}
                  <a href={SRC_AFTERPAY} {...extLink}>Afterpay Gateway for WooCommerce</a> plugin, Zip Co publishes a{' '}
                  <a href={SRC_ZIP} {...extLink}>Zip plugin for WooCommerce</a>, and Stripe connects too. Australia Post, StarTrack and Sendle labels print from the order and tracking writes
                  back to it. Every method gets a real test order and a refund before launch.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Who owns what, a typical field map</div>
                <ul className="trigrows">
                  <li><span className="m">Stock on hand</span><span className="n">Cin7, Unleashed or ERP</span><span className="t">Store reads</span></li>
                  <li><span className="m">Trade price lists</span><span className="n">ERP or inventory system</span><span className="t">Store reads</span></li>
                  <li><span className="m">Orders</span><span className="n">WooCommerce</span><span className="t">Sent out</span></li>
                  <li><span className="m">Invoices and GST</span><span className="n">Xero or MYOB</span><span className="t">Books own</span></li>
                  <li><span className="m">Tracking numbers</span><span className="n">Carrier platform</span><span className="t">Written back</span></li>
                  <li><span className="m">Product copy and images</span><span className="n">WooCommerce</span><span className="t">Store owns</span></li>
                </ul>
                <p className="au-note">Every project gets its own map, signed off before code is written.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROJECT STEPS → timeline ═══ */}
        <section className="section process" id="how-a-project-runs">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a project runs</div>
                <h2>Six steps from your brief to a store you own</h2>
                <p className="lead">
                  Open each step to see what happens and what we need from you.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Our terms, in short</div>
                <ul className="trigrows">
                  <li><span className="m">Working software on your data</span><span className="n">before you sign</span><span className="t">Demo first</span></li>
                  <li><span className="m">Each phase scoped and signed</span><span className="n">stop after any phase</span><span className="t">Fixed price</span></li>
                  <li><span className="m">Defects fixed after launch</span><span className="n">cover period agreed upfront</span><span className="t">In build price</span></li>
                  <li><span className="m">Hosting and paid plugins</span><span className="n">in your accounts, at cost</span><span className="t">No markup</span></li>
                  <li><span className="m">Support after launch</span><span className="n">each change quoted first</span><span className="t">No monthly minimum</span></li>
                </ul>
              </div>
            </div>
            <div className="timeline timeline-3">
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

        <div className="au-midcta">
          <MidPageCTA
            headline={'Send your WooCommerce brief, or the RFP you already wrote'}
            sub={'Attach the document, a plugin list, or three lines on what keeps breaking. The founder reads it, replies within 24 hours, and tells you what a first phase would cover.'}
            label={'Send my WooCommerce brief'}
          />
        </div>

        {/* ═══ BRIEF / RFP ASK → split ═══ */}
        <section className="section" id="brief">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Briefs and RFPs</div>
              <h2>What to put in a WooCommerce brief so quotes can be compared</h2>
              <p className="lead">
                Two Australian agencies given the same vague brief will quote two different jobs. These six items
                make the quotes line up, whether you send them to us or to anyone else.
              </p>
            </div>
            <ol className="platlist" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li className="plat plat-2col"><span className="capid">01</span><div className="plat-name"><h3>Systems and owners.</h3></div><p className="plat-build">Accounting, inventory, ERP, CRM and carriers by name, and which one you treat as the truth for stock and price.</p></li>
              <li className="plat plat-2col"><span className="capid">02</span><div className="plat-name"><h3>Catalogue shape.</h3></div><p className="plat-build">Number of products and variants, bundles, made-to-order items, and how often prices change.</p></li>
              <li className="plat plat-2col"><span className="capid">03</span><div className="plat-name"><h3>Customer types.</h3></div><p className="plat-build">Retail only, or trade accounts too, with ex-GST pricing, payment terms and purchase order numbers.</p></li>
              <li className="plat plat-2col"><span className="capid">04</span><div className="plat-name"><h3>Current plugin list.</h3></div><p className="plat-build">Copy it from Tools &gt; Site Health &gt; Info in the WordPress admin, or screenshot the Plugins screen. It tells a developer more in five minutes than an hour of description.</p></li>
              <li className="plat plat-2col"><span className="capid">05</span><div className="plat-name"><h3>What is breaking now.</h3></div><p className="plat-build">Missed syncs, slow pages, failed updates, abandoned checkouts. Dates and screenshots help.</p></li>
              <li className="plat plat-2col"><span className="capid">06</span><div className="plat-name"><h3>Deadlines that matter.</h3></div><p className="plat-build">EOFY, a trade show, a Black Friday or Click Frenzy sale, or the date a contract with your old developer ends.</p></li>
            </ol>
            <div className="au-split">
              <div>
                <p>
                  Already have a formal RFP? Send it as it is. We answer the questions asked, in the order asked, and
                  say plainly where we would change the scope and why.
                </p>
                <ModalCTAButton label="Send my brief or RFP" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">Recent WooCommerce work</div>
                <ul className="trigrows">
                  <li><span className="m">Sow Easy</span><span className="n">WooCommerce trade store with stock, pricing and SKUs from Odoo</span><span className="t">In progress</span></li>
                  <li><span className="m">Mannik</span><span className="n">WooCommerce store plus an AI search project</span><span className="t">Store</span></li>
                </ul>
                <p className="au-note">
                  Read the <a href="/case-studies/sow-easy-distributor-portal">Sow Easy case study</a> for the
                  one-owner-per-field pattern we use with any ERP.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ROUTE COMPARISON → table ═══ */}
        <section className="section comparison" id="routes">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Fix, rebuild or move</div>
              <h2>Three routes for a WooCommerce store that is holding the business back</h2>
              <p className="lead">
                We build on WooCommerce and Shopify, so we can recommend any of the three. The deciding question is
                usually where stock and prices should live.
              </p>
            </div>
            <p className="md:hidden" style={{ fontSize: 13, margin: '0 0 8px' }}>Swipe sideways to see every column.</p>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="WooCommerce route comparison" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ minWidth: 720 }}>
                <thead>
                  <tr>
                    <th>What matters</th>
                    <th className="fj">Fix the current store</th>
                    <th>Rebuild on WooCommerce</th>
                    <th>Move to Shopify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best when</th><td className="fj">The store works but syncs and updates fail</td><td>The theme or plugin stack is past saving</td><td>You want hosting and checkout run for you</td></tr>
                  <tr><th scope="row">Custom trade pricing and logic</th><td className="fj">Kept</td><td>Rebuilt cleanly</td><td>Shopify Plus B2B or apps</td></tr>
                  <tr><th scope="row">Content and blog on WordPress</th><td className="fj">Kept</td><td>Kept</td><td>Migrated</td></tr>
                  <tr><th scope="row">URL changes and redirects</th><td className="fj">None</td><td>Few</td><td>Many, full redirect map (see <a href="/au/shopify-migration">Shopify migration</a>)</td></tr>
                  <tr><th scope="row">Hosting and updates</th><td className="fj">Your host, tested updates</td><td>Your host, tested updates</td><td>Run by Shopify</td></tr>
                  <tr><th scope="row">Who owns the code</th><td className="fj">You</td><td>You</td><td>You own the theme; Shopify runs the platform</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Weighing more platforms? Our <a href="/blog/best-ecommerce-platform-australia-2026">ecommerce platform guide for Australia</a> compares
              WooCommerce with Shopify, BigCommerce, Maropost and Adobe Commerce.
            </p>
          </div>
        </section>

        {/* ═══ COST → ruled rows + sourced market range ═══ */}
        <section className="section platforms" id="cost">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Cost, with a named source</div>
                <h2>What WooCommerce development costs in Australia, and what moves the number</h2>
              </div>
              <p>
                WP Creative, a Sydney WordPress agency, publishes AUD ranges in its{' '}
                <a href={SRC_WPCREATIVE} {...extLink}>website cost guide</a> (updated 28 August 2026): AUD $10,000 to
                $50,000 or more for an ecommerce website, and AUD $25,000 to $100,000 or more for its premium tier aimed
                at established businesses and ecommerce brands. The guide does not say whether those figures include
                GST. FactoryJet quotes a fixed price in writing after a short scoping call.
              </p>
            </div>
            <ol className="platlist" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li className="plat plat-2col"><span className="capid">01</span><div className="plat-name"><h3>Integrations.</h3></div><p className="plat-build">Each connected system, from Xero to NetSuite, adds mapping, sandbox testing and failure alerts.</p></li>
              <li className="plat plat-2col"><span className="capid">02</span><div className="plat-name"><h3>Trade features.</h3></div><p className="plat-build">Account price lists, ex-GST display, payment terms and quick order forms.</p></li>
              <li className="plat plat-2col"><span className="capid">03</span><div className="plat-name"><h3>Data migration.</h3></div><p className="plat-build">Years of orders, customers and reviews, and how cleanly the old store kept them.</p></li>
              <li className="plat plat-2col"><span className="capid">04</span><div className="plat-name"><h3>Plugin clean-up.</h3></div><p className="plat-build">How many plugins can go, and how many need replacing with custom code.</p></li>
              <li className="plat plat-2col"><span className="capid">05</span><div className="plat-name"><h3>Design scope.</h3></div><p className="plat-build">A refreshed theme versus a new design system for retail and trade.</p></li>
              <li className="plat plat-2col"><span className="capid">06</span><div className="plat-name"><h3>Marketplaces.</h3></div><p className="plat-build">Whether WooCommerce or your inventory system feeds Amazon.com.au, eBay and Kogan.</p></li>
            </ol>
          </div>
        </section>

        {/* ═══ HOSTING, UPDATES AND PRIVACY → facts ═══ */}
        <section className="section facts" id="running">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Running the store</div>
              <h2>Hosting, updates and customer data on an Australian WooCommerce store</h2>
            </div>
            <div className="factlist">
              <div className="fact"><div className="sec">§01</div><p>
                WooCommerce’s <a href={SRC_REQS} {...extLink}>server requirements</a> for version 10.8 and later are
                WordPress 6.9, PHP 8.3, MySQL 8.0 or MariaDB 10.6, HTTPS and a 256 MB WordPress memory limit. We treat
                that as the floor, then add object caching, a staging copy and backups that have been restored at least
                once. The hosting account sits in your company’s name, and we generally suggest an Australian data
                centre so pages load fast for local shoppers.
              </p></div>
              <div className="fact"><div className="sec">§02</div><p>
                The WooCommerce <a href={SRC_RELEASE} {...extLink}>release calendar</a> puts new versions roughly five
                weeks apart, and core WordPress, the theme and every plugin keep separate timetables on top of that. Updates go to staging first,
                get a real test checkout, then reach the live store in a quiet hour with a written log. Stores still on
                the old order tables move to <a href={SRC_HPOS} {...extLink}>High-Performance Order Storage</a>, which
                WooCommerce has turned on by default for new installs since version 8.2.
              </p></div>
              <div className="fact"><div className="sec">§03</div><p>
                Customer data needs a plan as well as a plugin. The <a href={SRC_OAIC} {...extLink}>OAIC</a> defines a
                small business for Privacy Act purposes as one with annual turnover of $3 million or less, and some
                businesses are covered whatever their turnover. We limit
                admin access to named accounts, remove plugins that copy customer data offsite without need, and hand
                over a list of every service that receives it. Your adviser checks the policy; the store supports it.
              </p></div>
            </div>
          </div>
        </section>

        {/* ═══ CITIES → panel ═══ */}
        <section className="section" id="cities">
          <div className="wrap">
            <div className="au-split">
              <div>
                <div className="eyebrow">Sydney, Melbourne, Brisbane and the rest</div>
                <h2>WooCommerce developers for Australian businesses in every capital</h2>
                <p>
                  A WooCommerce project does not need anyone in the room. Workshops happen over video, and progress
                  sits on a board you can open any time.
                </p>
                <p style={{ marginTop: 16 }}>
                  You get one named lead engineer, and calls are booked in your business hours. That holds in{' '}
                  <a href="/au/sydney">Sydney</a>, <a href="/au/melbourne">Melbourne</a>,{' '}
                  <a href="/au/brisbane">Brisbane</a>, <a href="/au/adelaide">Adelaide</a> or Perth.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Call hours follow your clock</div>
                <ul className="trigrows">
                  <li><span className="m">Sydney, Melbourne, Canberra</span><span className="n">AEST, AEDT in summer</span><span className="t">Your hours</span></li>
                  <li><span className="m">Brisbane</span><span className="n">AEST all year</span><span className="t">Your hours</span></li>
                  <li><span className="m">Adelaide</span><span className="n">ACST, ACDT in summer</span><span className="t">Your hours</span></li>
                  <li><span className="m">Perth</span><span className="n">AWST all year</span><span className="t">Your hours</span></li>
                </ul>
                <p className="au-note">Workshops, reviews and launch checks are all booked in your local time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AFTER LAUNCH → ruled rows ═══ */}
        <section className="section platforms" id="after-launch">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">After launch</div>
              <h2>What breaks a WooCommerce store in the year after launch</h2>
              <p className="lead">
                Four problems turn up when we open an older WooCommerce store. Premium plugins were bought on the
                developer’s own account, the licences lapsed, and those plugins stopped updating. The theme was
                edited directly, so a theme update wipes the changes. Nobody built a staging site. And everyone
                shares one admin login.
              </p>
              <p className="lead">
                We set stores up so those problems cannot build up. Licences are bought in your name, custom work
                lives in a child theme (a thin layer on top of the main theme) or a small plugin you own, and staging is part of the hosting from day one.
                The handover lists every plugin, licence and integration with its renewal date. Support is optional,
                each change is quoted and approved first, and there is no monthly minimum. See what our{' '}
                <a href="/au/website-maintenance">website maintenance in Australia</a> covers.
              </p>
            </div>
            <ul className="platlist" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li className="plat plat-2col"><span className="capid">01</span><div className="plat-name"><h3>Licences</h3></div><p className="plat-build">Premium plugin and theme licences held in your account, with renewal dates in the handover so updates never stop quietly.</p></li>
              <li className="plat plat-2col"><span className="capid">02</span><div className="plat-name"><h3>Child theme</h3></div><p className="plat-build">Custom templates kept in a child theme or a small plugin, so a theme update cannot overwrite them.</p></li>
              <li className="plat plat-2col"><span className="capid">03</span><div className="plat-name"><h3>Staging</h3></div><p className="plat-build">A private copy of the store on your hosting, refreshed before each batch of updates and each new feature.</p></li>
              <li className="plat plat-2col"><span className="capid">04</span><div className="plat-name"><h3>Changes</h3></div><p className="plat-build">Trade features, speed work and campaign pages ahead of EOFY or Click Frenzy, each quoted and approved before work starts.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services</div>
              <h2>Other FactoryJet services for Australian WooCommerce stores</h2>
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
          heading="WooCommerce developer questions Australian businesses ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_WPORG} {...extLink}>WooCommerce on WordPress.org</a>
              <a href={SRC_RELEASE} {...extLink}>WooCommerce release calendar</a>
              <a href={SRC_REQS} {...extLink}>WooCommerce server requirements</a>
              <a href={SRC_HPOS} {...extLink}>High-Performance Order Storage</a>
              <a href={SRC_XERO} {...extLink}>Woo Xero extension</a>
              <a href={SRC_AFTERPAY} {...extLink}>Afterpay Gateway for WooCommerce</a>
              <a href={SRC_ZIP} {...extLink}>Zip plugin for WooCommerce</a>
              <a href={SRC_BGA} {...extLink}>business.gov.au, register for GST</a>
              <a href={SRC_OAIC} {...extLink}>OAIC, small business and the Privacy Act</a>
              <a href={SRC_WPCREATIVE} {...extLink}>WP Creative, website cost in Australia</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See a draft of your WooCommerce store before you sign anything</h2>
              <p>
                Open the form and send your name, work email and a few lines on the store. Within 24 hours the
                founder writes back with times for a call on your store, the systems around it and what a first
                phase would cover. No spam, no obligation.
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
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} />
    </>
  );
}
