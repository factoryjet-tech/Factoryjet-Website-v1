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
import './page.css';

const CANONICAL = 'https://factoryjet.com/au/shopify-plus';
const UPDATED = '2026-10-31';
const TITLE = 'Shopify Plus Agency Australia | B2B & Migration | FactoryJet';
const H1 = 'Shopify Plus Agency Australia: Plus Builds, B2B and Migrations';
const DESCRIPTION =
  'Shopify Plus agency for Australian brands: Plus builds, native B2B, NZ expansion stores, Scripts rebuilt as Functions, and Xero, MYOB or NetSuite sync.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Shopify Plus Agency Australia', url: CANONICAL },
];

/* ─── External sources, each fetched 2026-10-29 (HTTP 200, claim confirmed in the
       fetched body). Quotes are the words this page relies on. ────────────────── */
// Shopify Help Center, Shopify Plus plan. Fee table: "AUD Australia $4,000 AUD $3,700 AUD"
// (1-year term, 3-year term, per month), "For standard setups and integrations. For more
// complex, higher-volume businesses, there might be a variable platform fee based on your
// revenue and business model, which differs for B2B and D2C companies." Also: "9 expansion
// stores", "up to 200 locations", "unlimited staff accounts", "custom apps built with Shopify
// Functions", "up to 25 custom React-based storefronts with Hydrogen", "Unlimited B2B catalogs
// and direct catalog assignment to company locations are available only on the Shopify Plus
// plan", Plus B2B adds "deposit requirements, partial payments, and payment requests per
// fulfillment".
const SRC_PLUS_PLAN =
  'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan';
// Shopify Australia pricing page (shopify.com/au/plus/pricing redirects here): Advanced
// "$575 AUD/mo" monthly, "$431 AUD/mo" yearly, "Card rates from 1.35% + 30¢ AUD", "Up to 15
// staff accounts"; Plus "Starts at $3,700 AUD/mo", "Card rates from 1.15% + 30¢ AUD",
// "Unlimited staff accounts", "Fully customizable checkout", "Up to 200 POS Pro locations",
// "Unlimited B2B catalogs"; third-party transaction fees "2% 1% 0.6% 0.2%" (Basic to Plus).
// Re-read 2026-10-31: "Online standard card rates 1.7% + 30¢ AUD 1.55% + 30¢ AUD 1.35% + 30¢ AUD
// 1.15% + 30¢ AUD" (Basic, Grow, Advanced, Plus); Advanced "$575 AUD/mo", Plus "Starts at $3,700
// AUD/mo", third-party fees unchanged. The A$100 sale FAQ is worked from these rates.
const SRC_PRICING = 'https://www.shopify.com/au/pricing';
// Shopify Help Center, Scripts: "As of June 30, 2026, Shopify Scripts has been deprecated. Any
// Scripts that were still published on your store have been deactivated and no longer work.
// To recreate these customizations, transition to Shopify Functions."
const SRC_SCRIPTS = 'https://help.shopify.com/en/manual/checkout-settings/script-editor';
// Shopify Help Center, B2B: "Shopify B2B is available on the Basic, Grow, Advanced, and Shopify
// Plus plans"; "You can use one store for both B2B and direct-to-consumer (D2C) sales, or create
// a separate B2B-only store"; B2B customers are set up "as companies".
const SRC_B2B = 'https://help.shopify.com/en/manual/b2b';
// Shopify Help Center, B2B plan features: "On the Basic, Grow, and Advanced plans, you can assign
// up to 3 active catalogs across all your B2B markets." Pricing page POS Pro row (read 2026-10-29):
// Advanced "$129 AUD/mo per location"; Plus "Includes 20 locations. Up to 200 with Shopify Payments.";
// support row: Advanced "Enhanced live chat", Plus "Priority support".
const SRC_B2B_PLANS = 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features';
// Shopify Help Center, billing taxes for Australia and New Zealand (read 2026-10-29): Australian
// merchants are "subject to a 10% Goods and Services Tax (GST) on your Shopify subscription and
// any shipping labels", and "you don't have to pay this GST if you register for Australian GST"
// and add an ABN to the store.
const SRC_GST =
  'https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/taxes/billing-taxes-australia-new-zealand';
// OAIC, Small business: "Most small businesses are not covered by the Privacy Act 1988, but some
// are. A small business is one with an annual turnover of $3 million or less."
const SRC_OAIC =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business';
// Market build ranges (never FactoryJet prices). WP Creative, a Sydney agency (Ultimo NSW), "Shopify
// Development Cost in Australia" (updated 6 May 2026): "Shopify Plus Build ($30,000 to $100,000+
// AUD)". What's The Damage?, an Australian cost guide run by Focus Search Pty Ltd ("Updated
// October 2026"): "Shopify Plus / enterprise" "$30,000–$100,000+". Neither page says whether
// its figures include GST.
const SRC_WPC = 'https://wpcreative.com.au/shopify-development-cost-australia/';
const SRC_WTD = 'https://whatsthedamage.com.au/shopify-cost/';

/* ─── FAQ source of truth (drives UI + FAQPage schema). Questions come from Australian
       People Also Ask and related searches (DataForSEO, 29 Oct 2026) and from briefs
       Plus buyers send us. ──────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'plan',   label: 'The Plus plan and its fees' },
  { key: 'agency', label: 'Choosing a Plus agency' },
  { key: 'build',  label: 'B2B, checkout and Functions' },
  { key: 'move',   label: 'Migrations and systems' },
  { key: 'after',  label: 'Australia, ownership and support' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── The Plus plan and its fees ──
  { category: 'plan', question: 'What does Shopify Plus offer that other Shopify plans do not?',
    answer: 'Shopify’s help centre lists the extras: a fully customisable checkout, custom apps built with Shopify Functions, unlimited B2B catalogues with deposits and partial payments, unlimited staff accounts, up to 200 locations, nine expansion stores, up to 25 Hydrogen storefronts and priority 24/7 support. The storefront, themes and admin are the same as on Advanced. What changes is how far you can bend checkout, pricing and wholesale rules.' },
  { category: 'plan', question: 'How much is Shopify Plus per month in Australia?',
    answer: 'Shopify’s help centre lists Plus in Australian dollars at A$4,000 a month on a 1-year term or A$3,700 a month on a 3-year term, for standard setups. Higher-volume or more complex businesses may pay a variable platform fee based on revenue and business model, which Shopify says differs for B2B and direct-to-consumer orders. Check the live figure with Shopify before you sign, because plan prices change.' },
  { category: 'plan', question: 'Is GST charged on top of the Shopify Plus fee?',
    answer: 'Shopify’s billing help page says Australian merchants pay 10% GST on the Shopify subscription and on shipping labels. It also says you do not pay that GST once you register for Australian GST and add your ABN to the store, and the change applies to invoices issued after the ABN goes in. Any established brand buying Plus will be GST registered, so add the ABN before the first Plus invoice.' },
  { category: 'plan', question: 'How much does a Shopify Plus build cost in Australia?',
    answer: 'Two Australian sources we read on 29 October 2026 agree on the range. WP Creative, a Sydney agency, puts a Shopify Plus build at A$30,000 to A$100,000 or more, and the cost guide What’s The Damage? gives the same band. Neither says whether GST is included. These are market figures, not ours. FactoryJet quotes a fixed price per phase in writing after a scoping call.' },
  { category: 'plan', question: 'Is Shopify Plus worth it for an Australian brand?',
    answer: 'Plus pays off when a Plus-only feature fixes something that costs you money every week: stockists ordering by email, a New Zealand store kept in sync by hand, checkout rules that no app can build, or a pile of paid apps faking wholesale pricing. A higher card turnover on its own is a weak reason. If your problems are design, speed or conversion, a better build on Advanced does more.' },
  { category: 'plan', question: 'What is the difference between Shopify Advanced and Shopify Plus?',
    answer: 'On Shopify’s Australian pricing page, Advanced costs A$575 a month paid monthly, with card rates from 1.35% plus 30c and up to 15 staff accounts. Plus starts at A$3,700 a month, with card rates from 1.15% plus 30c, unlimited staff, a fully customisable checkout, up to 200 POS Pro locations and unlimited B2B catalogues. Advanced can be paid monthly or yearly with no lock-in term. Plus is a 1-year or 3-year contract.' },
  { category: 'plan', question: 'How much does Shopify take from a A$100 sale?',
    answer: 'On Shopify Payments, the online card rate on Plus is 1.15% plus 30c, so a A$100 order costs A$1.45. On Advanced it is 1.35% plus 30c, or A$1.65, and on Basic 1.7% plus 30c, or A$2.00. Those are Shopify’s Australian rates as read on 31 October 2026. If you use a third-party payment provider instead, Shopify adds 0.2% on Plus, which is 20c on A$100, on top of that provider’s own fee. The monthly plan fee is separate.',
    links: [{ href: SRC_PRICING, label: 'Shopify Australia pricing' }] },
  { category: 'plan', question: 'How do I know if my store is already on Shopify Plus?',
    answer: 'Open Settings, then Plan, in your Shopify admin. The plan name and billing term are shown there. Plus stores can also add expansion stores and unlimited staff accounts, which standard plans cannot, so either one is a quick tell. If you inherited a store from another team and nobody is sure, check the most recent Shopify invoice, which names the plan and the billing term.' },

  // ── Choosing a Plus agency ──
  { category: 'agency', question: 'Who are the best Shopify Plus agencies in Australia?',
    answer: 'The best one is the one whose past work matches your problem. Four Australian Shopify Plus agencies we list on this page are Alinga on the Gold Coast, Flux, Prosper Digital in Melbourne and Sydney, and Swanky, which works internationally. Each has a note taken from its own homepage. Pick by fit: B2B and ERP depth, design, headless, or support after launch. Ask each one to show a Function or B2B flow running on your own data.' },
  { category: 'agency', question: 'What should a Shopify Plus agency ask us before quoting?',
    answer: 'At minimum: how many SKUs and variants you carry, which channels you sell through, how trade customers order today, which accounting, ERP and inventory systems hold the truth for stock and prices, what checkout or discount rules you rely on, and what has broken in the last year. An agency that quotes a Plus build without asking those questions is guessing, and the guess usually lands in a change request later.' },

  // ── B2B, checkout and Functions ──
  { category: 'build', question: 'Can Shopify Plus run B2B wholesale for Australian stockists?',
    answer: 'Yes. Shopify B2B runs on every paid plan, but Plus adds unlimited catalogues, catalogues assigned straight to company locations, deposits, partial payments and payment requests per fulfilment. Each stockist becomes a company with its own buyers, delivery addresses, prices and terms. Trade and retail customers can share one store, one stock pool and one product catalogue, or you can run a separate B2B-only store.',
    links: [{ href: '/au/b2b-ecommerce', label: 'B2B ecommerce in Australia' }] },
  { category: 'build', question: 'What happened to Shopify Scripts?',
    answer: 'Shopify’s help centre says Scripts were deprecated on 30 June 2026 and any still published were deactivated. Plus brands relied on them for bundle pricing, trade discounts, hidden payment options and shipping tweaks in the cart. The replacement is Shopify Functions. If a tiered discount, a free-shipping rule or a hidden payment option quietly stopped working this year, a switched-off Script is the first thing to check.' },
  { category: 'build', question: 'What are Shopify Functions and checkout extensions?',
    answer: 'A Shopify Function is custom code, written for your store, that runs inside Shopify’s back end to change a discount, a delivery option, a payment method or a cart rule. A checkout extension adds an approved block to checkout, such as a purchase order field or a delivery date picker. On Plus you can ship both in your own custom app, so the logic is written for your rules rather than borrowed from a public app.' },
  { category: 'build', question: 'Can we run a New Zealand store alongside our Australian store?',
    answer: 'Yes, in two ways. Shopify Markets lets one store show New Zealand prices and settings. When the catalogue, stock, team or pricing in New Zealand is different, Plus includes nine expansion stores, which Shopify says are for internationalisation, separate physical locations and related purposes, so a separate NZ store sits under the same Plus plan. We help you choose before anything is built, because the choice is hard to reverse.' },

  // ── Migrations and systems ──
  { category: 'move', question: 'How do we move from Magento or Salesforce Commerce Cloud to Shopify Plus?',
    answer: 'We audit the current store first: catalogue, customer groups, trade pricing, extensions, custom code and integrations. Each piece is mapped to native Plus, a Function, an app or custom code. Data moves in rehearsal runs on a copy of the store, every old web address gets a 301 redirect, and the domain switches at a quiet trading hour. If you already trade on Shopify, Plus is a contract upgrade with no data to move.',
    links: [
      { href: '/au/shopify-migration', label: 'Shopify migration in Australia' },
      { href: '/blog/magento-to-shopify-plus-migration-checklist-2026', label: 'Magento to Shopify Plus migration checklist' },
    ] },
  { category: 'move', question: 'Will we lose Google rankings when we replatform to Shopify Plus?',
    answer: 'Not if the move is planned. Shopify fixes its own address patterns, such as /products/ and /collections/, so every old product, category and content address needs a permanent 301 redirect. We crawl the old site, keep the pages that earn traffic, carry titles and descriptions across, and watch Google Search Console daily for the first weeks so a dip is caught while it is still small.',
    links: [{ href: '/au/ecommerce-seo', label: 'Ecommerce SEO in Australia' }] },
  { category: 'move', question: 'Can Shopify Plus connect to MYOB Acumatica, NetSuite, Cin7 or Xero?',
    answer: 'Yes. Shopify Plus connects to Xero, MYOB Business, MYOB Acumatica, QuickBooks, NetSuite, Odoo, Cin7 Core (formerly DEAR) and Unleashed through each system’s API. We use an existing connector where one fits and a small custom integration where it does not. Before any sync runs we agree which system owns stock, prices, customers and refunds, and how GST and payment fees are posted, so the books reconcile at month end.',
    links: [
      { href: '/au/shopify-xero-integration', label: 'Shopify Xero integration in Australia' },
      { href: '/au/ecommerce-erp-integration', label: 'Ecommerce ERP integration in Australia' },
    ] },
  { category: 'move', question: 'Can Shopify Plus feed Amazon.com.au, eBay, Kogan and THE ICONIC?',
    answer: 'Yes, through each marketplace’s own connector or a multichannel tool that sits between Shopify and the marketplaces. The hard part is the stock and pricing rules: which channel gets the last units, whether marketplace prices carry the fees, and how returns flow back. We set one source of truth for stock first, then connect the channels, so you stop overselling on a busy weekend.' },

  // ── Australia, ownership and support ──
  { category: 'after', question: 'Does the Privacy Act apply to our Shopify Plus store?',
    answer: 'It usually does once turnover passes A$3 million. The OAIC says most small businesses are not covered by the Privacy Act 1988, and defines a small business as one with annual turnover of A$3 million or less, counting income from all sources. Above that line the Act generally applies. Get your adviser to confirm. We build the store so customer data, consent and access are easy to manage.',
    links: [{ href: SRC_OAIC, label: 'OAIC, small business and the Privacy Act' }] },
  { category: 'after', question: 'What is the downside of Shopify Plus?',
    answer: 'The contract runs one or three years, so you commit before you have used every feature. Large or complex businesses can move onto a variable platform fee tied to revenue. Plus features also only pay off if someone builds them, so plan the B2B, checkout and integration work before you sign.' },
  { category: 'after', question: 'Can you take over a Shopify Plus store another agency built?',
    answer: 'Yes, and a handover is often where our work starts. We begin with a review of the theme code, every installed app, checkout extensions, Functions and integrations, plus a search for anything that depended on Scripts. You receive a written priority order with a fixed price per fix. Shopify collaborator access means you keep your own login, and we write up each app and sync as we learn it.' },
  { category: 'after', question: 'Do we own the store, the code and the Plus contract?',
    answer: 'Yes. The Plus agreement is between your company and Shopify, billed to your account. The theme, custom apps and Functions sit in a repository in your name from day one, with the full change history. Paid apps and connectors are billed to you at cost, with no markup from us. If you move agencies or bring the work in-house, everything they need is already yours.' },
  { category: 'after', question: 'What does support look like after a Plus launch?',
    answer: 'Defects in what we built are fixed inside the build price for a cover period we agree before work starts. After that, support is optional. Each change is quoted, you approve it, and then we do it, with no monthly minimum. The engineers who built the store answer the tickets, and every change goes into a written log so you can see what was done and why.',
    links: [{ href: '/au/shopify-maintenance-services', label: 'Shopify maintenance and support in Australia' }] },
  { category: 'after', question: 'Can we see working software before we sign a Shopify Plus build?',
    answer: 'Yes. For a store project we build a draft of your store on your own products, or a working Function or B2B flow on your own data, before you sign the build. You see how it handles your catalogue and your trade rules with your own eyes. The founder replies to every enquiry within 24 hours, and the first scoping call is free.' },
  { category: 'after', question: 'Can we start a Shopify Plus project by sending an RFP?',
    answer: 'Yes. Use the form at the top of this page, which asks only for your name and work email. If you already have a written brief or an RFP, send it with your enquiry and we will answer it point by point, including the parts we would scope differently. The founder, Bhavesh Barot, books a short call, and you leave it knowing the phases, the order of work and what each phase needs from your team.' },
];

/* ─── Other Australian Shopify Plus agencies (ItemList). Each note is based on the
       company’s own homepage, fetched 2026-10-29. Partner tiers are quoted as each
       company states them. FactoryJet is NOT in this list: it gets its own card in the
       section, so the list never ranks us among the others. The 29 Oct SERP file that
       named Alinga was not found on disk (QA 2026-10-31), so the copy no longer claims
       a dated Google ranking. URLs resolved 2026-10-31 (HTTP 200, homepage title names
       the agency); Flux's homepage URL was not confirmed, so it carries none. ───── */
const PLUS_AGENCIES: { name: string; note: string; url?: string }[] = [
  { name: 'Alinga', url: 'https://www.alinga.com.au/', note: 'A Gold Coast ecommerce agency that describes itself as a Shopify Platinum Partner, with services covering Shopify Plus, wholesale B2B, ERP and Shopify integrations, migrations and Klaviyo email.' },
  { name: 'Flux', note: 'Describes itself as a Shopify Plus Partner, offering Plus development, headless Shopify, Plus migrations, Plus B2B and systems integration, plus AI search work for ecommerce brands.' },
  { name: 'Prosper Digital', url: 'https://prosperdigital.com.au/', note: 'An ecommerce agency with offices in Melbourne and Sydney, covering strategy, design, development and ongoing optimisation for Shopify brands.' },
  { name: 'Swanky', url: 'https://swankyagency.com/', note: 'Describes itself as a full-service Shopify Platinum Partner with international teams, covering migrations to Shopify Plus, B2B on Shopify, internationalisation, integrations and retail POS.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Plus Agency Australia',
      serviceType: 'Shopify Plus builds, migrations to Shopify Plus, Shopify Plus B2B, checkout extensions, Shopify Functions, expansion stores and Shopify Plus integrations',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Shopify Plus agency for Australian brands: new Plus builds, migrations from Magento, Adobe Commerce, Salesforce Commerce Cloud, WooCommerce and BigCommerce, native B2B for stockists, New Zealand expansion stores, Shopify Scripts rebuilt as Functions, checkout extensions, and integrations with Xero, MYOB Acumatica, NetSuite, Odoo, Cin7 Core, Unleashed, Afterpay, Zip, Stripe, Australia Post, StarTrack and Sendle.',
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
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'Other Shopify Plus agencies in Australia',
      itemListElement: PLUS_AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
        ...(a.url ? { url: a.url } : {}),
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['shopify-plus'] },
  openGraph: {
    title: TITLE,
    description:
      'Shopify Plus for Australian brands with trade buyers, a New Zealand store or a Magento store to retire. Plus fees in AUD from Shopify, sourced AUD build ranges, and a draft of your store before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/shopify-development/shopify-development-og.webp', width: 1200, height: 630, alt: 'A Shopify developer and a brand founder reviewing her store together in a warehouse studio' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline); only the
   closing phrase is wrapped in .hero-emphasis. */
const H1_EMPHASIS = 'B2B and Migrations';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec-panel icons (draft on your data, connected systems, ownership). */
const HERO_ICONS = [
  'M4 4h16v16H4V4Zm0 5h16M9 9v11',
  'M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1m2 4a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1',
  'M7 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm3 1 9-9m-3 3 3 3',
] as const;

/* Six situations that bring Australian brands to a Plus conversation. */
const SITUATIONS: { n: string; t: string; d: string; icon: string; links?: { href: string; label: string }[] }[] = [
  { n: '01', t: 'Stockists still order by email', d: 'Trade prices live in a spreadsheet, orders arrive as PDFs, and someone keys them in. Plus B2B gives each stockist a company account with its own catalogue, price list, payment terms and deposit rules, in the same admin as retail.', icon: 'M3 7h18v12H3V7Zm0 0 9 6 9-6' },
  { n: '02', t: 'A discount stopped working on 30 June', d: 'Shopify switched off Scripts on 30 June 2026. Bundle pricing, tiered trade discounts and shipping rules written as Scripts stopped with them. We rebuild each one as a Shopify Function and test it against last year’s real orders.', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2' },
  { n: '03', t: 'The New Zealand store drifts', d: 'A second store copied from the Australian one, with prices, stock and content updated by hand. On Plus it becomes an expansion store on the same plan, or a market inside the main store when the catalogue is the same.', icon: 'M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z' },
  { n: '04', t: 'Magento is due for a costly upgrade', d: 'Adobe Commerce, Magento Open Source or Salesforce Commerce Cloud carries years of custom code. We map each customisation to native Plus, a Function, an app or a small custom app, so the move removes code instead of copying it.', icon: 'M4 7h10l-3-3m3 3-3 3M20 17H10l3 3m-3-3 3-3',
    links: [
      { href: '/comparisons/shopify-plus-vs-magento', label: 'Shopify Plus vs Magento' },
      { href: '/comparisons/shopify-plus-vs-bigcommerce', label: 'Shopify Plus vs BigCommerce' },
    ] },
  { n: '05', t: 'Stock is wrong in two systems', d: 'Shopify says one number, Cin7, Unleashed or NetSuite says another, and the marketplace feed says a third. We set one owner for stock and price, then wire Shopify, the inventory system and the marketplaces to it.', icon: 'M5 4h14v6H5V4Zm0 10h14v6H5v-6Zm4-7h.01M9 17h.01' },
  { n: '06', t: 'Apps are faking what Plus does natively', d: 'Six paid apps stacked to imitate wholesale pricing, checkout fields and staff permissions. Sometimes Plus is cheaper than the stack and runs faster. Sometimes it is not, and we say so with the sums in front of you.', icon: 'M4 6h7v5H4V6Zm9 0h7v5h-7V6ZM4 13h7v5H4v-5Zm9 2.5h7' },
];

/* What we build on Plus, in the order most projects need it. */
const BUILDS: { t: string; d: string }[] = [
  { t: 'Native B2B for stockists', d: 'Companies, buyer logins, delivery locations, catalogues, ex-GST trade price lists, net terms, deposits and quick reorder, with orders landing in the same books as retail.' },
  { t: 'Checkout extensions', d: 'Purchase order numbers, delivery instructions, authority to leave, gift messages and trade-only fields, built as approved blocks that keep working when Shopify updates checkout.' },
  { t: 'Shopify Functions', d: 'Tiered and bundle discounts, delivery rules for bulky or dangerous goods, payment on account for approved buyers, and cart minimums, written as code you own.' },
  { t: 'Expansion stores and markets', d: 'A New Zealand store or a trade-only store on the same Plus plan, or New Zealand run as a market inside the main store.' },
  { t: 'Replatforming to Plus', d: 'From Magento, Adobe Commerce, Salesforce Commerce Cloud, WooCommerce, BigCommerce or Maropost (formerly Neto), with rehearsal runs, 301 redirects and Search Console checks after launch.' },
  { t: 'Systems behind the store', d: 'Xero, MYOB Business, MYOB Acumatica, QuickBooks, NetSuite, Odoo, Cin7 Core and Unleashed; Afterpay, Zip and Stripe; Australia Post, StarTrack and Sendle; Amazon.com.au, eBay, Kogan and THE ICONIC.' },
];

/* Six project steps. Titles carry their number ("01 · Scoping call"). */
const STEPS: { t: string; d: string }[] = [
  { t: '01 · Scoping call', d: 'A short call with the founder about your catalogue, channels, trade customers, systems and what has broken this year. If you sent a brief or RFP, we walk through our answers to it. You leave knowing whether Plus is the right move at all.' },
  { t: '02 · Draft on your data', d: 'Before you sign the build, we show you working software on your own products: a draft of the store, a B2B flow with one of your real price lists, or a Function rebuilt from a Script that stopped. You judge us on that.' },
  { t: '03 · Written scope per phase', d: 'Each phase is scoped, priced and signed on its own, with a fixed price in writing, the order of work, what we need from your team, and the defect cover period. Nothing in phase two is assumed when you sign phase one.' },
  { t: '04 · Build in a staging store', d: 'Theme, checkout extensions, Functions, B2B set-up and integrations are built and tested away from your live store, so trading carries on. You can click through the work every week, not only at the end.' },
  { t: '05 · Test and launch', d: 'Paid test orders through each payment method, trade orders on terms, a refund, metro and regional deliveries, redirects checked and the accounting sync reconciled against a sample day. Then we switch at a quiet trading hour and watch the first orders with you.' },
  { t: '06 · Cover, then optional support', d: 'Defects in what we built are fixed inside the build price for the agreed cover period. After that, support is your choice: each change quoted and approved, no monthly minimum, done by the engineers who built the store.' },
];

const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/shopify-development', t: 'Shopify development Australia', d: 'New stores, custom themes and migrations on the standard Shopify plans, for brands that do not need Plus yet.', go: 'Explore Shopify development →' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'Still weighing Shopify Plus against Adobe Commerce, BigCommerce or a custom build? Start with the platform comparison.', go: 'Explore ecommerce →' },
  { href: '/au/b2b-ecommerce', t: 'B2B ecommerce Australia', d: 'Trade portals for wholesalers and manufacturers, with ex-GST account prices linked to the accounting or ERP system.', go: 'Explore B2B ecommerce →' },
  { href: '/au/shopify-migration', t: 'Shopify migration Australia', d: 'Moving an established store off Magento, WooCommerce, Neto (Maropost) or BigCommerce, with redirects planned.', go: 'Explore Shopify migration →' },
  { href: '/au/shopify-xero-integration', t: 'Shopify Xero integration', d: 'GST mapped line by line, and Shopify and Afterpay payouts matched in Xero.', go: 'Explore Shopify Xero →' },
  { href: '/au/ecommerce-erp-integration', t: 'Ecommerce ERP integration', d: 'Orders, stock, refunds and GST synced between the store and MYOB, NetSuite, Cin7 or Odoo.', go: 'Explore ERP integration →' },
  { href: '/au/ecommerce-seo', t: 'Ecommerce SEO Australia', d: 'Rankings protected through a replatform, then collection pages and technical SEO for a large catalogue.', go: 'Explore ecommerce SEO →' },
  { href: '/au/shopify-maintenance-services', t: 'Shopify maintenance and support', d: 'Optional support after launch, each change quoted and approved, with no monthly minimum.', go: 'Explore Shopify support →' },
  { href: '/services/shopify-plus-agency', t: 'Shopify Plus agency (US)', d: 'Our Shopify Plus service for US brands, with US payment, tax and logistics systems.', go: 'See the US page →' },
];

export default function ShopifyPlusAUPage() {
  return (
    <>
      <script id="ld-au-shopify-plus" type="application/ld+json"
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
              <div className="eyebrow">Shopify Plus Agency Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                You sell to stockists as well as shoppers, run a New Zealand store beside the Australian one, or
                need to retire Magento. We build the Plus parts that matter: native B2B with ex-GST
                trade prices, checkout extensions, Shopify Functions, and the sync to Xero, MYOB Acumatica, NetSuite,
                Cin7 or Unleashed. We support the store after launch, and the code is yours from day one.
              </p>
              <HeroInlineForm
                region="au"
                source="au_shopify_plus_hero"
                service="Shopify Plus"
                submitLabel="See a draft of my store"
                trustText="Working software on your own data before you sign. Founder replies within 24 hours."
              />
            </div>

            <form className="specpanel" aria-label="What a Shopify Plus project from FactoryJet includes">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT YOU GET</span>
                <span className="sys"><span>Registered Shopify Partner</span><span>Plus, B2B, Functions</span></span>
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
                  <input className="workflow-select" type="radio" name="shopify-plus-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">your products, your price list</span>
                  <span className="title">A draft before you sign</span>
                  <span className="tag">On your data</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="shopify-plus-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">reconciled to your books</span>
                  <span className="title">Xero, MYOB, NetSuite, Cin7</span>
                  <span className="tag">Connected</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="shopify-plus-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">in a repository in your name</span>
                  <span className="title">Theme, Functions, custom apps</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Each phase is scoped, priced and signed on its own.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified figures only, each linked to its source) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: 'A$3,700', t: 'a month for Shopify Plus on a 3-year term, or A$4,000 on a 1-year term, for standard setups', s: 'Shopify Help Center', u: SRC_PLUS_PLAN },
              { v: '9', t: 'expansion stores included with Plus, for a New Zealand store or a separate physical location', s: 'Shopify Help Center', u: SRC_PLUS_PLAN },
              { v: '30 Jun 2026', t: 'the date Shopify deprecated Scripts and switched off any still published', s: 'Shopify Help Center', u: SRC_SCRIPTS },
              { v: 'A$3m', t: 'annual turnover above which a business stops being a small business under the Privacy Act', s: 'OAIC', u: SRC_OAIC },
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
          <div className="who"><b><a href="/about">Bhavesh Barot</a></b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />31 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Shopify Plus, in one answer</div>
              <h2 data-speakable="true">What does a Shopify Plus agency do for an Australian brand?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">A Shopify Plus agency builds and supports the parts of Shopify’s enterprise plan that standard plans cannot reach.</span>{' '}
                    For an Australian brand that usually means trade accounts for stockists with ex-GST price lists and
                    payment terms, checkout fields such as purchase order numbers, discount and delivery rules written
                    as Shopify Functions, a separate New Zealand store, and a sync to MYOB, Xero or an ERP that your
                    bookkeeper signs off.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Terms used on this page</div>
                    <p>
                      A <b>Shopify Function</b> is custom code that changes how Shopify’s back end
                      prices, ships or accepts an order. A <b>checkout extension</b> is an approved block added to
                      checkout. An <b>expansion store</b> is an extra store under the same Plus contract. A{' '}
                      <b>replatform</b> is moving a whole store, its data and its web addresses from another platform
                      to Shopify. A <b>301 redirect</b> sends anyone who opens an old web address, Google included,
                      to the new one for good.
                    </p>
                    <p>
                      A <b>headless</b> store keeps Shopify for products and orders but runs a separately coded
                      front end, and <b>Hydrogen</b> is Shopify’s own framework for building one. A <b>3PL</b> is a
                      third-party logistics company that stores and ships your stock. <b>POS Pro</b> is Shopify’s
                      paid point-of-sale tier for physical shops.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most Australian questions about Shopify Plus are about money: what the plan costs and what a build costs.
                    So this page starts with the fee in AUD and the GST rule, and gives
                    the build range other Australian agencies publish, before it asks you for anything.
                  </p>
                </div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What Shopify charges for Plus</div>
                <ul className="trigrows">
                  <li><span className="m">1-year term</span><span className="t">A$4,000 a month</span></li>
                  <li><span className="m">3-year term</span><span className="t">A$3,700 a month</span></li>
                  <li><span className="m">Complex, high-volume stores</span><span className="t">Variable fee on revenue</span></li>
                  <li><span className="m">GST on the subscription</span><span className="t">10%, waived with an ABN</span></li>
                  <li><span className="m">Card rates, Shopify Payments</span><span className="t">From 1.15% + 30c</span></li>
                </ul>
                <p className="au-note">
                  Sources: <a href={SRC_PLUS_PLAN} {...extLink}>Shopify Plus plan</a>,{' '}
                  <a href={SRC_PRICING} {...extLink}>Shopify Australia pricing</a> and{' '}
                  <a href={SRC_GST} {...extLink}>Shopify billing taxes for Australia</a>, read 29 October 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SITUATIONS → capgrid ═══ */}
        <section className="section capabilities" id="situations">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Why brands call us about Plus</div>
              <h2>Six situations that start a Shopify Plus project in Australia</h2>
              <p className="lead">
                Almost nobody asks Shopify Plus experts for “Shopify Plus” as a product. They describe a problem.
                These six come up most, and Plus is the right answer to some of them, not all.
              </p>
            </div>
            <ul className="capgrid">
              {SITUATIONS.map((s, i) => (
                <li key={s.n} className={`cap cap-plain cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CASE‑{s.n}</span><svg {...CAP_ICON}><path d={s.icon} /></svg></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  {s.links && (
                    <p className="cap-links">
                      {s.links.map((l, j) => (
                        <Fragment key={l.href}>
                          {j > 0 && ' · '}
                          <a href={l.href}>{l.label}</a>
                        </Fragment>
                      ))}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ ADVANCED VS PLUS → comparison ═══ */}
        <section className="section comparison" id="advanced-vs-plus">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Advanced or Plus</div>
              <div>
                <h2>Shopify Advanced vs Shopify Plus, in Australian dollars</h2>
                <p className="lead">
                  Advanced can be paid monthly or yearly with no lock-in term. Plus is a 1-year or 3-year contract. Every figure below is from Shopify’s own
                  Australian pricing page or help centre, read on 29 October 2026.
                </p>
              </div>
            </div>
            <div className="tablewrap plus-compare" role="region" tabIndex={0} aria-label="Shopify Advanced vs Shopify Plus comparison">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th>Shopify Advanced</th>
                    <th className="fj">Shopify Plus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Plan fee</th><td data-label="Shopify Advanced">A$575 a month paid monthly, A$431 paid yearly</td><td className="fj" data-label="Shopify Plus">From A$3,700 a month (3-year term)</td></tr>
                  <tr><th scope="row">Domestic card rates</th><td data-label="Shopify Advanced">From 1.35% + 30c</td><td className="fj" data-label="Shopify Plus">From 1.15% + 30c</td></tr>
                  <tr><th scope="row">Fee for a third-party payment provider</th><td data-label="Shopify Advanced">0.6%</td><td className="fj" data-label="Shopify Plus">0.2%</td></tr>
                  <tr><th scope="row">Staff accounts</th><td data-label="Shopify Advanced">Up to 15</td><td className="fj" data-label="Shopify Plus">Unlimited</td></tr>
                  <tr><th scope="row">Checkout</th><td data-label="Shopify Advanced">Standard checkout</td><td className="fj" data-label="Shopify Plus">Fully customisable</td></tr>
                  <tr><th scope="row">Custom apps with Shopify Functions</th><td data-label="Shopify Advanced">Through public apps</td><td className="fj" data-label="Shopify Plus">Your own custom apps</td></tr>
                  <tr><th scope="row">B2B catalogues</th><td data-label="Shopify Advanced">Up to 3 active catalogues</td><td className="fj" data-label="Shopify Plus">Unlimited, assigned to company locations</td></tr>
                  <tr><th scope="row">Deposits and partial payments for B2B</th><td data-label="Shopify Advanced">No</td><td className="fj" data-label="Shopify Plus">Yes</td></tr>
                  <tr><th scope="row">Expansion stores</th><td data-label="Shopify Advanced">Separate accounts</td><td className="fj" data-label="Shopify Plus">9 included</td></tr>
                  <tr><th scope="row">POS Pro locations</th><td data-label="Shopify Advanced">A$129 a month per location</td><td className="fj" data-label="Shopify Plus">20 included, up to 200 with Shopify Payments</td></tr>
                  <tr><th scope="row">Shopify support</th><td data-label="Shopify Advanced">Enhanced live chat</td><td className="fj" data-label="Shopify Plus">Priority 24/7 phone and chat</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Sources: <a href={SRC_PRICING} {...extLink}>Shopify Australia pricing</a>,{' '}
              <a href={SRC_B2B_PLANS} {...extLink}>Shopify Help Center, B2B plan features</a> and{' '}
              <a href={SRC_PLUS_PLAN} {...extLink}>Shopify Help Center, Shopify Plus plan</a>. Shopify sets these
              figures and changes them, so confirm with Shopify before you sign.
            </p>
            <div className="au-split">
              <div>
                <h3>When the sums favour Plus</h3>
                <p>
                  The fee gap between Advanced and a 3-year Plus term is A$3,269 a month on yearly Advanced billing.
                  Card savings rarely close it on their own. What closes it is replacing paid apps, the staff hours
                  spent keying trade orders, or a second store you would otherwise run on a separate account.
                </p>
                <p>
                  We put those numbers side by side on the scoping call, using your own app invoices and order
                  volumes, so the decision is yours and is made on your figures.
                </p>
              </div>
              <div>
                <h3>When we tell you to stay on Advanced</h3>
                <p>
                  If the problem is a slow theme, weak product pages or poor conversion, Plus will not fix it. A
                  better build on Advanced will, and you can upgrade later without rebuilding, because going from
                  Advanced to Plus moves no data at all.
                </p>
                <p>
                  For that kind of work, see our <a href="/au/shopify-development">Shopify development team in
                  Australia</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Not sure Plus pays for itself in your business?'}
            sub={'Send your catalogue size, channels and the systems behind the store. On a short call the founder will tell you whether Plus, Advanced or a few targeted fixes is the right move, and what a draft on your data would show.'}
            label={'See a draft of my store'}
          />
        </div>

        {/* ═══ WHAT WE BUILD → ruled rows ═══ */}
        <section className="section platforms" id="what-we-build">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Shopify Plus development</div>
                <h2>What our Shopify Plus developers build for Australian brands</h2>
              </div>
              <p>
                Most of the value in Plus sits below the theme. Shopify Plus development for an Australian brand
                usually means these six pieces of work, and each one is priced as its own phase if you want it
                that way.
              </p>
            </div>
            <ol className="platlist">
              {BUILDS.map((b, i) => (
                <li key={b.t} className="plat plat-2col">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{b.t}</h3></div>
                  <p className="plat-build">{b.d}</p>
                </li>
              ))}
            </ol>
            <p className="sub-note">
              Shopify’s help centre confirms that B2B runs on the Basic, Grow, Advanced and Plus plans, and that one
              store can serve both trade and retail customers. See <a href={SRC_B2B} {...extLink}>Shopify B2B</a>.
              For a replatform, read our <a href="/blog/magento-to-shopify-plus-migration-checklist-2026">Magento to
              Shopify Plus migration checklist</a>.
            </p>
          </div>
        </section>

        {/* ═══ COST → market ranges + Shopify fees ═══ */}
        <section className="section facts" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Shopify Plus cost in Australia</div>
              <h2>What a Shopify Plus build costs, from published Australian ranges</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Two Australian sources we read on 29 October 2026 give the same band for a build. WP Creative, a
                  Sydney agency, puts a Shopify Plus build at A$30,000 to A$100,000 or more in its{' '}
                  <a href={SRC_WPC} {...extLink}>Shopify development cost guide</a> (updated 6 May 2026). The
                  Australian cost guide <a href={SRC_WTD} {...extLink}>What’s The Damage?</a> lists A$30,000 to
                  A$100,000 or more for Shopify Plus and enterprise work. Neither says whether GST is included, so
                  ask any agency to quote ex-GST.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The range is wide because the work is. A plan upgrade with a B2B set-up and three rebuilt Scripts
                  is a different job from a Salesforce Commerce Cloud replatform with a NetSuite sync and a New
                  Zealand expansion store. The drivers are the number of systems connected, how much custom logic
                  comes across, how many stores and markets you run, and how much checkout work you need.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Those are market figures, not FactoryJet prices. We quote a fixed price per phase in writing after a
                  scoping call, and you can stop after any phase. For Shopify’s own plan fees and card rates in AUD,
                  see our <a href="/blog/shopify-cost-australia-2026">Shopify cost in Australia guide</a>.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the price</div>
                <ul className="trigrows">
                  <li><span className="m">Systems connected</span><span className="n">accounting, ERP, inventory, 3PL</span><span className="t">Biggest driver</span></li>
                  <li><span className="m">Custom logic to rebuild</span><span className="n">Scripts, extensions, custom code</span><span className="t">High</span></li>
                  <li><span className="m">Stores and markets</span><span className="n">AU, NZ, trade-only</span><span className="t">Medium</span></li>
                  <li><span className="m">Design scope</span><span className="n">adapted theme or custom</span><span className="t">Medium</span></li>
                  <li><span className="m">Data volume</span><span className="n">SKUs, customers, order history</span><span className="t">Varies</span></li>
                </ul>
                <div className="au-note">
                  <ModalCTAButton label="Get a fixed-price Plus scope" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOUSE TERMS → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Terms</div>
              <h2>How a Shopify Plus engagement with us works</h2>
              <p className="lead">
                The same five terms apply to every Plus project, whether it is one rebuilt Function or a full
                replatform.
              </p>
            </div>
            <ol className="platlist">
              <li className="plat plat-2col"><span className="capid">01</span><div className="plat-name"><h3>Demo before you sign</h3></div><p className="plat-build">A draft of your store, or a working Function or B2B flow, on your own data before the build contract.</p></li>
              <li className="plat plat-2col"><span className="capid">02</span><div className="plat-name"><h3>Fixed price per phase</h3></div><p className="plat-build">Each phase is scoped, priced and signed on its own. You can stop after any phase.</p></li>
              <li className="plat plat-2col"><span className="capid">03</span><div className="plat-name"><h3>You own it from day one</h3></div><p className="plat-build">The Plus contract is yours with Shopify. Theme, Functions and custom apps sit in a repository in your name. Apps and connectors are billed to your accounts at cost, with no markup.</p></li>
              <li className="plat plat-2col"><span className="capid">04</span><div className="plat-name"><h3>Defect cover in the build price</h3></div><p className="plat-build">Defects in what we built are fixed at no charge for a cover period agreed before work starts.</p></li>
              <li className="plat plat-2col"><span className="capid">05</span><div className="plat-name"><h3>Optional support, no minimum</h3></div><p className="plat-build">After the cover period, each change is quoted and approved before we do it. No monthly minimum.</p></li>
            </ol>
          </div>
        </section>

        {/* ═══ PROJECT STEPS → timeline ═══ */}
        <section className="section process" id="how-a-project-runs">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a Plus project runs</div>
                <h2>Six steps from first call to a live Shopify Plus store</h2>
                <p className="lead">
                  Open each step to see what happens and what we need from your team.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Send us your brief or RFP</div>
                <p className="au-panel-intro">
                  Serious Plus projects usually start with a document. If you have a written brief, an RFP or a
                  requirements list, send it with your enquiry. We reply to it point by point, including what we
                  would scope differently and why.
                </p>
                <ul className="trigrows">
                  <li><span className="m">Catalogue</span><span className="t">SKUs, variants, bundles</span></li>
                  <li><span className="m">Channels</span><span className="t">DTC, trade, NZ, marketplaces</span></li>
                  <li><span className="m">Systems</span><span className="t">accounting, ERP, inventory, 3PL</span></li>
                  <li><span className="m">Rules</span><span className="t">discounts, delivery, terms</span></li>
                  <li><span className="m">Deadline</span><span className="t">contract dates, peak trading</span></li>
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

        {/* ═══ AUSTRALIAN RULES → facts ═══ */}
        <section className="section facts" id="australia">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Selling at Plus scale in Australia</div>
              <h2>Privacy Act and GST rules a Shopify Plus store meets in Australia</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>The Privacy Act.</b> The OAIC says most small businesses are not covered by the Privacy Act
                  1988, and a small business is one with annual turnover of A$3 million or less, counting all income.
                  A brand big enough for Plus is usually past that line, so customer accounts, marketing consent,
                  access requests and staff permissions need to be set up with that in mind. Source:{' '}
                  <a href={SRC_OAIC} {...extLink}>OAIC, small business</a>. Ask your adviser to confirm your
                  position.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>GST on two sides.</b> Trade buyers expect ex-GST prices and tax invoices, while shoppers see
                  GST-inclusive prices. Plus B2B handles that with per-company price lists in one store. Separately,
                  Shopify charges 10% GST on the subscription itself unless your ABN is on the store, according to{' '}
                  <a href={SRC_GST} {...extLink}>Shopify’s billing tax page for Australia</a>.
                </p></div>
              </div>
            </div>
            <div className="au-split au-proof">
              <div>
                <h3>Shopify work we have done</h3>
                {/* DTF Virginia: naming approved 2026-10-29. Wording matches what the live store
                    showed on 2026-10-29 (custom theme with no Theme Store id, gang sheet builders
                    per transfer size, reseller sign-up), as recorded on /services/shopify-development.
                    No metric and no year are stated until Bhavesh confirms them. */}
                <p>
                  We do Shopify development for <a href="https://dtfvirginia.com/" {...extLink}>DTF Virginia</a>,
                  a print shop that sells direct-to-film (DTF) transfers, patches and stickers. Its store runs on a
                  custom Shopify theme. Buyers build their own gang sheets at each transfer size, and resellers sign
                  up for their own trade account. Ask to walk through it, and through our B2B and integration work,
                  on the scoping call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AGENCY LIST (self-disclosure, ItemList from PLUS_AGENCIES) → ruled rows ═══ */}
        <section className="section platforms" id="agencies">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Other Plus agencies</div>
                <h2>Shopify Plus agencies in Australia worth talking to</h2>
              </div>
              <p>
                Four other Australian Shopify Plus agencies, in alphabetical order. Notes come from each company’s own
                homepage, read on 29 October 2026, and partner tiers are as each one states them. Check tiers in
                Shopify’s Partner Directory, and compare at least two of them with us.
              </p>
            </div>
            <div className="plat plat-2col plat-own">
              <span className="capid">FJ</span>
              <div className="plat-name"><h3>FactoryJet</h3><span className="plat-flag">That is us</span></div>
              <p className="plat-build">A registered Shopify Partner that builds, migrates and supports Shopify Plus stores, with most of its effort below the theme: native B2B, checkout extensions, Shopify Functions and the sync to accounting, ERP and inventory systems. The founder is on every project.</p>
            </div>
            <ol className="platlist">
              {PLUS_AGENCIES.map((a, i) => (
                <li key={a.name} className="plat plat-2col">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{a.url ? <a href={a.url} {...extLink}>{a.name}</a> : a.name}</h3></div>
                  <p className="plat-build">{a.note}</p>
                </li>
              ))}
            </ol>
            <p className="sub-note">Listing is not endorsement.</p>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services</div>
              <h2>Related Shopify and ecommerce services in Australia</h2>
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
          heading="Shopify Plus questions Australian brands ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_PLUS_PLAN} {...extLink}>Shopify Plus plan</a>
              <a href={SRC_PRICING} {...extLink}>Shopify Australia pricing</a>
              <a href={SRC_SCRIPTS} {...extLink}>Shopify Scripts deprecation</a>
              <a href={SRC_B2B} {...extLink}>Shopify B2B</a>
              <a href={SRC_GST} {...extLink}>Shopify billing taxes, Australia</a>
              <a href={SRC_OAIC} {...extLink}>OAIC, small business</a>
              <a href={SRC_WPC} {...extLink}>WP Creative, Shopify cost in Australia</a>
              <a href={SRC_WTD} {...extLink}>What’s The Damage?, Shopify cost</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See your store on Shopify Plus before you sign anything</h2>
              <p>
                Send us your name, your work email and, if you have one, your brief or RFP. Bhavesh answers each enquiry
                himself within 24 hours and sets up a call on your catalogue, your trade customers and your systems.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a draft of my store" region="au" modalVariant="default" btnVariant="primary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/shopify-development">See Shopify development</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
