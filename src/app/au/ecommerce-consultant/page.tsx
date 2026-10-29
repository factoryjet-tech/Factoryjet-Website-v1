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
import '../au-hub.css';

const CANONICAL = 'https://factoryjet.com/au/ecommerce-consultant';
const UPDATED = '2026-10-29';
/* DataForSEO, Australia (location 2036), Google Ads volumes pulled 29 Oct 2026:
   "ecommerce consultant", "ecommerce consulting" and "ecommerce consultancy" 40 a
   month each (CPC about A$32), "ecommerce consulting australia" 20, "shopify
   consultant" 20. The title carries the two head terms. */
const TITLE = 'Ecommerce Consultant Australia | Ecommerce Consulting | FactoryJet';
const H1 = 'Ecommerce Consultant Australia for Stores That Already Trade';
const DESCRIPTION =
  'Ecommerce consulting for established Australian stores: margin by channel, Xero and MYOB sync, Cin7 stock, marketplaces and replatforming. A demo on your data first.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Ecommerce Consultant Australia', url: CANONICAL },
];

/* ─── External sources, each fetched 2026-10-29 with the claim confirmed in
       the fetched body ─────────────────────────────────────────────────── */
// OAIC, Small business: "A small business is one with an annual turnover of $3
// million or less." and "Regardless of turnover, the Privacy Act covers any
// business that is:" (health service providers, businesses trading in personal
// information, and others). fetched 2026-10-29
const SRC_OAIC = 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business';
// Shopify Help Center, Script Editor: "As of June 30, 2026, Shopify Scripts has been
// deprecated." and "To recreate these customizations, transition to Shopify
// Functions." fetched 2026-10-29
const SRC_SCRIPTS = 'https://help.shopify.com/en/manual/checkout-settings/script-editor';
// Xero AU, "Send and Receive eInvoices": "Use Xero to register your business to the
// Peppol network so you can receive eInvoices"; "It's free to set up"; "Get
// eInvoices in Xero ... as draft bills ready for approval." fetched 2026-10-29
const SRC_XERO_EINVOICE = 'https://www.xero.com/au/accounting-software/send-invoices/e-invoicing-software/';
// eCommerce Circle (Melbourne; trading name of Insiteful Aust Pty Ltd), "Ecommerce
// Consultant Australia: Costs and How to Choose": "Expect roughly $130 to $300+ an
// hour, $5,000 to $50,000+ for a defined project ... based on 2026 Australian agency
// pricing guides." Caption: "Ranges are indicative, not quotes." The page does not
// say whether GST is included. Its retainer figures are deliberately NOT used here
// (no recurring-fee ranges on FactoryJet pages). fetched 2026-10-29
const SRC_COST = 'https://www.ecommercecircle.com.au/insights/ecommerce-consultant-australia';

/* ─── FAQ source of truth (drives UI + FAQPage schema). Questions come from
       Google People Also Ask for "ecommerce consultant" and "ecommerce consulting
       services" in Australia (DataForSEO, 29 Oct 2026) plus the questions
       established store owners ask on scoping calls. ───────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'Ecommerce consulting basics' },
  { key: 'choosing', label: 'Choosing a consultant' },
  { key: 'cost',     label: 'Cost and timing' },
  { key: 'systems',  label: 'Australian systems and rules' },
  { key: 'working',  label: 'Working with FactoryJet' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Ecommerce consulting basics ──
  { category: 'basics', question: 'What does an ecommerce consultant do?',
    answer: 'An ecommerce consultant works out why a store is not making the money it should, and what to change first. For an Australian business that already trades, that usually means tracing a few hundred real orders from checkout to Xero or MYOB, comparing margin across your own site and the marketplaces, checking how stock moves between Cin7, Unleashed or an ERP and every channel, and testing the checkout on a phone. You get a ranked list of fixes with the effort for each.' },
  { category: 'basics', question: 'What does an ecommerce specialist do, and is it the same job?',
    answer: 'They overlap, but no. An ecommerce specialist is usually an in-house role that runs the store day to day: loading products, setting up promotions, watching orders and fixing listings. An ecommerce consultant comes in from outside for a set period to look at the whole operation and decide what should change. Many established brands have a specialist and bring in a consultant when growth stalls, costs climb or a replatform is on the table.' },
  { category: 'basics', question: 'Is ecommerce still profitable in 2026?',
    answer: 'It can be, but profit now depends on the costs behind each order more than on sales volume. Marketplace commission, buy now pay later fees, card fees, returns and shipping to regional postcodes all come out of the same margin. The stores that stay profitable know their profit per order by channel and stop selling where it turns negative. Working that number out is usually the first thing we do in an audit.' },
  { category: 'basics', question: 'What are the main disadvantages of ecommerce for an established business?',
    answer: 'The common ones are margin lost to fees and returns, stock that drifts out of step across channels, rising advertising costs, more customer data to protect, and manual admin that grows with every new channel. None of them are reasons to stop selling online. Each one is a fixable process problem, and most of our audit findings for Australian stores fall into one of those five groups.' },
  { category: 'basics', question: 'What is the 80/20 rule in ecommerce?',
    answer: 'It is the observation that a small share of products, customers or channels usually produces most of the revenue or profit. It is a rule of thumb, not a law. In an audit we test it on your own order data: which SKUs, channels and customer groups carry the margin, and which ones cost more to sell than they bring in. That list often decides where the first fixes go.' },

  // ── Choosing a consultant ──
  { category: 'choosing', question: 'When should we hire a consultant instead of a developer?',
    answer: 'If you can describe the fix in a paragraph, such as a new checkout field or a faster product page, hire a developer. If you are not sure whether the problem is the platform, the integrations, the marketplaces or the advertising, start with a consultant. Paying a developer to rebuild the wrong thing is the costliest mistake we see. We do both, so the person who finds the problem can also scope the fix.' },
  { category: 'choosing', question: 'Should we hire one of the Big Four firms for ecommerce?',
    answer: 'Deloitte, PwC, EY and KPMG are the Big Four, and they suit large retailers running multi-year transformation programmes with board oversight. For an established store that needs Xero, Cin7 and its marketplaces working together, that model is usually slower and heavier than the job needs. A smaller firm whose senior staff run the audit themselves, with engineers on hand to build the fix, usually gets there sooner.' },
  { category: 'choosing', question: 'What is a boutique consulting firm, and is it a better fit for a store?',
    answer: 'A boutique firm is a small consultancy that focuses on one area, such as ecommerce, rather than covering every industry. The upside is that the senior people you meet are the ones who do the work. The risk is capacity: some boutiques advise but cannot build. Ask any boutique who will carry out the plan, and whether they have built on your platform before.' },
  { category: 'choosing', question: 'How do we choose an ecommerce consultant in Australia?',
    answer: 'Ask four things. Which Australian systems have they connected, by name: Xero, MYOB, Cin7, Unleashed, NetSuite? Whose name is on the audit, and is that person still involved once the report lands? Do they earn commission from any platform or app they might recommend? And will they show you something working on your own data before you sign? A good consultant answers all four without hedging.' },
  { category: 'choosing', question: 'Is an ecommerce consultant worth the money?',
    answer: 'It is worth it when the advice changes a decision you were about to make with real money: a replatform, a new marketplace, a new ERP or a bigger ad budget. It is rarely worth it as a general health check with no decision attached. Before we start, we ask which decision the work should inform. If there is none, we usually suggest a smaller, cheaper piece of work instead.' },
  { category: 'choosing', question: 'If FactoryJet does the audit, are we locked into FactoryJet for the build?',
    answer: 'No. The plan belongs to you, and we write it so your own developers, a freelancer or another agency can act on it. Plenty of clients hand us the build anyway, since we have already traced where the problems sit. Either way, each phase is scoped, priced and signed on its own, so agreeing to an audit never commits you to a build.' },

  // ── Cost and timing ──
  { category: 'cost', question: 'How much does an ecommerce consultant cost in Australia?',
    answer: 'Melbourne agency eCommerce Circle puts Australian consultants and strategists at roughly $130 to $300+ an hour, and a defined consulting project at $5,000 to $50,000+, citing 2026 Australian agency pricing guides. It calls the ranges indicative and does not say whether GST is included, so ask every quote to show GST on its own line. FactoryJet quotes a fixed price in writing after a short scoping call.' },
  { category: 'cost', question: 'What decides the price of an ecommerce audit?',
    answer: 'Five things move it most: the count of channels you sell through, the systems wired to the store, the size and shape of the catalogue, whether a replatform is on the table, and whether we stop at the plan or carry on to build. One Shopify site with one warehouse and Xero is a smaller job than a brand on three marketplaces with an ERP, a 3PL and trade customers.' },
  { category: 'cost', question: 'How long does an ecommerce audit take?',
    answer: 'It depends on access more than on effort. Once we have read-only access to the store, the accounting file, the inventory system and the marketplace accounts, the review moves quickly. Waiting on logins is the usual delay. We agree the timeline in writing on the first call, and we tell you upfront which parts depend on your team or your current agency.' },
  { category: 'cost', question: 'Do you charge a monthly retainer?',
    answer: 'Not by default. Each phase has a fixed price agreed before work starts. Support after a build is optional: each change is quoted and approved before we do it, and there is no monthly minimum. If you want a senior adviser on call for trading reviews and second opinions on proposals, we can set that up, but it is your choice, not a condition of working with us.' },

  // ── Australian systems and rules ──
  { category: 'systems', question: 'Our Shopify payouts never match Xero. Can you fix that?',
    answer: 'Usually, yes. A payout from Shopify Payments, Afterpay or Zip bundles several days of orders, with fees and refunds already taken off, so it never equals one day of sales. The cure is to post sales, fees, refunds and GST as separate lines into a holding account in Xero, and let each bank deposit clear against it. We agree the posting rules with your bookkeeper first, then test a full month.' },
  { category: 'systems', question: 'Should we move stock management into Cin7 Core or Unleashed?',
    answer: 'Move when stock lives in more than one place and nobody trusts the numbers: several warehouses, a 3PL, marketplaces, assembled or bundled products, or purchase orders to suppliers. Both are common choices for Australian product businesses and both connect to Xero. The harder decision is which system owns stock, prices and product data. We settle that first, because a second source of truth causes most overselling.' },
  { category: 'systems', question: 'We run MYOB Acumatica or NetSuite. Can our store connect to it?',
    answer: 'Yes. Most of these links use an off-the-shelf connector; the rest need a short piece of custom code. The first job is a written list of who is the master record for customers, prices, stock and invoices, then a choice of what syncs straight away and what can run in a nightly batch. We build and test on staging copies first, so your live store and your books keep trading while the connection is proven.' },
  { category: 'systems', question: 'Should we sell on Amazon.com.au, Catch, Kogan or Bunnings Marketplace?',
    answer: 'Only where the margin survives the marketplace’s fees and your shipping cost. Before adding a channel, we model profit per order on your best sellers, check whether your stock system can feed that marketplace without manual updates, and work out who will handle its customer messages. Some brands do well on one marketplace and should skip the rest. The answer comes from your numbers.' },
  { category: 'systems', question: 'Do we need e-invoicing through Peppol for our trade customers?',
    answer: 'Peppol is the network accounting systems use to send invoices directly to each other instead of by email. Xero says registering for it to receive eInvoices is free to set up, and those invoices arrive as draft bills ready for approval. If larger trade or government customers ask you for it, the change sits in your accounting setup, so we plan it alongside your store and order flow. Check your obligations with your accountant.' },
  { category: 'systems', question: 'Does the Privacy Act apply to our online store?',
    answer: 'The OAIC defines a small business as one with an annual turnover of $3 million or less, and the Privacy Act generally covers businesses above that. Some smaller businesses are covered regardless, including health service providers and those trading in personal information. Most established stores we work with are over the line. An audit lists every app that receives customer data, which is the first thing your adviser will ask for.' },
  { category: 'systems', question: 'Our Shopify Plus discounts stopped working this year. Why?',
    answer: 'The most common cause is the end of Shopify Scripts. Shopify’s help centre says Scripts were deprecated as of 30 June 2026 and points stores to Shopify Functions instead. Many Plus stores ran tiered discounts, free gift rules and hidden shipping options through Scripts. If those rules went quiet mid-year, an audit lists each one, and a developer rebuilds them as Functions and tests them at checkout.' },

  // ── Working with FactoryJet ──
  { category: 'working', question: 'Can we see something working before we sign?',
    answer: 'Yes. Before you sign a build, we show working software on your own data: for example a reconciled week of payouts in a copy of your Xero file, or a stock sync between a staging store and your inventory system. It is the fastest way to judge whether we understand your business, and it gives your finance and operations people something concrete to test.' },
  { category: 'working', question: 'Do you work with stores in Sydney, Melbourne, Brisbane and Perth?',
    answer: 'Yes. We work remotely with ecommerce businesses across Australia, using video workshops, shared screens, a shared project board and written reports, and we schedule calls in your business hours, including Perth time. Consulting work does not need anyone on site. The founder and the senior team stay on your project whichever city your warehouse is in.' },
  { category: 'working', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder, Bhavesh Barot, replies within 24 hours to book a short call. If you have a written brief or an RFP, send it with your reply. On the call we go through your channels, your systems and the decision in front of you, and you leave knowing the right first step, even if you choose another firm.' },
];

/* ─── Australian ecommerce consultancies (open self-disclosure, ItemList).
       Notes are based on each company's own homepage, fetched 2026-10-29. Names
       taken from Google Australia results for "ecommerce consultant australia"
       and "ecommerce consulting services" (DataForSEO, 29 Oct 2026). ───────── */
const CONSULTANCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Ecommerce consulting with a delivery team behind it: audits, replatforming plans, Xero, MYOB, Cin7 and ERP integration, marketplaces and trade ordering, then the build and support if you want them.' },
  { name: 'Renio', note: 'A consultancy listing Sydney and Melbourne, with Brisbane, Adelaide, Perth and US cities on its site. It names Shopify, commercetools, marketplaces and POS, and shows NetSuite and Cin7 logos.' },
  { name: 'Comma Consulting', note: 'An Australian ecommerce consultancy listing strategy planning, UX design, website audits, replatforming, B2B ecommerce and coaching.' },
  { name: 'Sell Good Consulting', note: 'A Melbourne consultancy offering one-on-one mentoring, ecommerce audits, strategy and operational planning, migration advice and a fractional Head of E-Commerce.' },
  { name: 'eCommerce Circle', note: 'A Melbourne ecommerce agency working with brands Australia-wide. It publishes the Australian consultant cost ranges we quote on this page.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce Consultant Australia',
      serviceType: 'Ecommerce consulting, ecommerce audits, replatforming plans, integration planning, marketplace strategy and B2B ecommerce consulting',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Ecommerce consulting for established Australian online stores: margin by channel, Shopify and WooCommerce order flow into Xero, MYOB, QuickBooks, NetSuite or Odoo, stock in Cin7 or Unleashed, Amazon.com.au, eBay, Catch, Kogan, MyDeal, Bunnings Marketplace and THE ICONIC, Afterpay, Zip and Stripe, Australia Post, StarTrack and Sendle, replatforming and trade ordering.',
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
      '@id': `${CANONICAL}#consultancies`,
      name: 'Australian ecommerce consultancies',
      itemListElement: CONSULTANCIES.map((a, i) => ({
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
      'Ecommerce consulting for Australian stores that already trade: profit by channel, Xero and MYOB reconciliation, Cin7 and Unleashed stock, marketplaces, replatforming and trade ordering. Fixed price per phase.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/ecommerce-development/ecommerce-development-og.webp', width: 1200, height: 630, alt: 'Ecommerce consultant Australia: a Melbourne homewares brand owner reviewing her online store on a laptop' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'ecommerce-consultant';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline); only the
   closing phrase is wrapped in .hero-emphasis. */
const H1_EMPHASIS = 'Already Trade';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec-panel icons (demo, fixed price, ownership). */
const HERO_ICONS = [
  'M3 5h18v11H3V5Zm6 15h6m-3-4v4',
  'M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6',
  'M7 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm3 1 9-9m-3 3 3 3',
] as const;

/* Ten things the audit checks. */
const AUDIT_ITEMS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Profit per order, by channel', d: 'Your own site, Amazon.com.au, eBay, Catch, Kogan, MyDeal or THE ICONIC, each with its commission, Afterpay or Zip fees, card fees, returns and freight taken out. Revenue rankings and profit rankings rarely match.' },
  { n: '02', t: 'How orders land in Xero or MYOB', d: 'One invoice per order or a daily summary, how GST and fees are posted, and whether refunds and payouts reconcile without someone fixing them by hand every month.' },
  { n: '03', t: 'Which system owns stock', d: 'Shopify, Cin7 Core, Unleashed, NetSuite, Odoo or a spreadsheet. We trace how often each channel updates and where oversells and phantom stock come from.' },
  { n: '04', t: 'Marketplace listings and their data', d: 'Titles, attributes, images and prices across every marketplace, and whether they come from one product record or get retyped per channel.' },
  { n: '05', t: 'The checkout, on a phone', d: 'We buy something. Payment options (Afterpay, Zip, Stripe or Shopify Payments), delivery estimates, forced accounts and surprise costs all get logged, step by step.' },
  { n: '06', t: 'Freight cost by postcode', d: 'Australia Post, StarTrack, Sendle or a 3PL, matched against what customers pay. Regional and remote postcodes are where free shipping thresholds quietly lose money.' },
  { n: '07', t: 'Platform headroom', d: 'Whether Shopify, WooCommerce, Magento or Maropost can carry the next few years, what is propping it up (apps, plugins, custom code), and what a move would involve.' },
  { n: '08', t: 'Trade and wholesale ordering', d: 'Stockists ordering by email, price lists in spreadsheets, payment terms tracked by memory. We map it, and note where Peppol eInvoicing would come into play.' },
  { n: '09', t: 'Search and AI answers', d: 'Category and product rankings on Google, technical faults, and whether ChatGPT, Perplexity and Google AI Overviews mention your brand when buyers ask.' },
  { n: '10', t: 'Where customer data goes', d: 'Every app that receives names, addresses and order history. Above the Privacy Act turnover threshold, this list is the starting point for your obligations.' },
];
const AUDIT_ICONS = [
  'M4 19h16M7 16V9m5 7V5m5 11v-4',
  'M5 3h14v18H5V3Zm3 4h8m-8 4h2m4 0h2m-8 4h2m4 0h2',
  'M3 7l9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 17l9 4 9-4',
  'M4 4h16v16H4V4Zm0 5h16M9 9v11',
  'M7 2h10v20H7V2Zm4 17h2',
  'M3 7h11v9H3V7Zm11 3h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  'M4 16a8 8 0 1 1 16 0m-8 0 4-5',
  'M3 6h18v12H3V6Zm0 4h18M7 15h4',
  'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4',
  'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z',
] as const;

/* Seven project steps. */
const STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Brief and first call', d: 'You send a short brief or your RFP, or just tell us on the call what is going wrong. We go through your channels, systems and the decision you are facing.', out: 'A written note of scope, the access we need and a fixed price for the audit.' },
  { n: '02', t: 'Read-only access', d: 'Viewer access to the store, Xero or MYOB, the inventory system, the marketplaces and analytics. Nothing is changed in your live systems at this stage.', out: 'A checklist of what we can see, and anything we could not reach.' },
  { n: '03', t: 'Audit and evidence', d: 'We trace real orders end to end, test the checkout, compare margin by channel and talk to the people who run the store every day.', out: 'Findings backed by your own order data, not opinion.' },
  { n: '04', t: 'Ranked fix list and demo', d: 'Each fix ranked by value and effort, with who should do it. For the top item we show working software on your data, such as a reconciled week in a copy of Xero.', out: 'A plan your team, another agency or we can act on.' },
  { n: '05', t: 'Fixed price per phase', d: 'If you want us to build, each phase is scoped, priced and signed on its own. Hosting and AI can run in your own accounts at cost, with no markup.', out: 'A signed scope for the next phase only. You can stop here.' },
  { n: '06', t: 'Build, test and launch', d: 'Work happens on staging copies so the live store keeps trading. Defects are fixed inside the build price for a cover period agreed before work starts.', out: 'Working fixes, the code and repository in your name, and a written handover.' },
  { n: '07', t: 'Optional support', d: 'If you want us to stay on, each change is quoted and approved before we start. There is no monthly minimum, and we can keep managing the servers if you prefer.', out: 'A named engineer who already knows your store.' },
];

/* Who to call first, by situation. */
const SITUATIONS: { s: string; who: string; first: string }[] = [
  { s: 'Orders keyed into Xero or MYOB by hand', who: 'Consultant, then developer', first: 'Decide invoice per order or daily summary with your bookkeeper, then connect' },
  { s: 'Moving off Magento, Maropost or an old WooCommerce build', who: 'Consultant first', first: 'Platform fit, data map and redirect plan before any build quote' },
  { s: 'Adding Amazon.com.au, Kogan or Bunnings Marketplace', who: 'Consultant first', first: 'Profit per order on your top SKUs after fees and freight' },
  { s: 'Stockists ordering by email and phone', who: 'Both', first: 'Map trade pricing and terms, then choose a portal approach' },
  { s: 'Stock wrong on marketplaces every week', who: 'Consultant, then developer', first: 'Name one system that owns stock, then fix the sync' },
  { s: 'A clear, small change you can describe', who: 'Developer', first: 'Skip the audit and brief the work directly' },
];

/* What a written brief or RFP should contain. */
const BRIEF_ITEMS: { m: string; t: string }[] = [
  { m: 'Your channels: own store, marketplaces, trade, retail shops', t: 'List' },
  { m: 'Your systems: platform, Xero or MYOB, inventory, ERP, 3PL', t: 'By name' },
  { m: 'Rough order volume per month, per channel', t: 'Ranges are fine' },
  { m: 'The problem, in your words, and what it costs you', t: 'One page' },
  { m: 'The decision or deadline it has to inform', t: 'Date' },
  { m: 'Who signs off: owner, finance, operations', t: 'Names' },
];

/* House terms. */
const TERMS: { t: string; d: string }[] = [
  { t: 'A demo on your data before you sign', d: 'Working software on your own orders, stock or books, so you judge the fix before you pay for the build.' },
  { t: 'A fixed price per phase', d: 'Each phase is scoped, priced and signed on its own, and you can stop after any of them.' },
  { t: 'You own it from day one', d: 'The code, the repository, the documentation and the accounts are yours. Hosting and AI can run in your accounts at cost, with no markup.' },
  { t: 'Defects fixed inside the build price', d: 'For a cover period we agree before work starts, written into the scope.' },
  { t: 'Support is optional', d: 'Each change is quoted and approved first, with no monthly minimum.' },
];

const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'When the plan calls for a new store, a rebuild or a replatform, this is the team that builds it.', go: 'Explore ecommerce development →' },
  { href: '/au/shopify-development', t: 'Shopify development Australia', d: 'Shopify and Shopify Plus builds, migrations, B2B and Functions to replace retired Scripts.', go: 'Explore Shopify development →' },
  { href: '/au/ecommerce-seo', t: 'Ecommerce SEO Australia', d: 'For stores where the audit shows search as the biggest gap: category pages, technical fixes and product data.', go: 'Explore ecommerce SEO →' },
  { href: '/au/website-maintenance', t: 'Website and store care', d: 'Fixes, updates and small changes after launch, each quoted before we start.', go: 'Explore store care →' },
  { href: '/au/ai-consulting', t: 'AI consulting Australia', d: 'When the slow part of the business is admin, such as order emails or returns, and AI might take the routine steps.', go: 'Explore AI consulting →' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we do for Australian businesses: ecommerce, AI agents, websites and AI search.', go: 'Visit the Australia hub →' },
];

export default function EcommerceConsultantAUPage() {
  return (
    <>
      <script id="ld-au-ecommerce-consultant" type="application/ld+json"
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
              <div className="eyebrow">Ecommerce Consultant Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your store takes orders every day. The trouble sits behind it: Shopify or WooCommerce orders keyed
                into Xero or MYOB by hand, stock in Cin7 or Unleashed that never matches Amazon.com.au or Catch, trade
                buyers still ordering by email, and freight to regional postcodes eating the margin. FactoryJet is an
                ecommerce consultant for established Australian businesses. We find what to fix first, show it working
                on your own data, and our team can build it.
              </p>
              <HeroInlineForm region="au" source="au_ecommerce_consultant_hero" submitLabel="Book my ecommerce review call" />
            </div>

            <form
              className="specpanel"
              aria-label="How every FactoryJet ecommerce consulting engagement works"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="How an engagement works: a demo on your own data before you sign, a fixed price per phase, and code, accounts and the plan owned by the client"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>TERMS · HOW WE WORK</span>
                <span className="sys"><span>Xero, MYOB, Cin7</span><span>Marketplaces, B2B</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore how we work">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ecom-consultant-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">before you sign a build</span>
                  <span className="title">Working software on your own data</span>
                  <span className="tag">Demo first</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ecom-consultant-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">scoped and signed one at a time</span>
                  <span className="title">Audit, plan and each build phase</span>
                  <span className="tag">Fixed price</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="ecom-consultant-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">from day one</span>
                  <span className="title">The plan, the code and the accounts</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Support is optional. Each change is quoted first, with no monthly minimum.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '$3m', t: 'annual turnover above which the Privacy Act generally covers a business; some smaller ones are covered anyway', s: 'OAIC, Small business', u: SRC_OAIC },
              { v: '30 Jun 2026', t: 'Shopify Scripts deprecated; old Plus checkout rules stopped running. Shopify Functions replace them', s: 'Shopify Help Center', u: SRC_SCRIPTS },
              { v: 'Free', t: 'to set up Peppol eInvoicing in Xero; received eInvoices arrive as draft bills ready for approval', s: 'Xero Australia', u: SRC_XERO_EINVOICE },
              { v: '$5k to $50k+', t: 'for a defined ecommerce consulting project in Australia, indicative, GST basis not stated', s: 'eCommerce Circle, Melbourne', u: SRC_COST },
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
              <h2 data-speakable="true">What does an ecommerce consultant do for an Australian store that already trades?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">An ecommerce consultant finds where a trading store loses money or time, and ranks the fixes.</span>{' '}
                    For an established Australian business that means tracing real orders from checkout into Xero or
                    MYOB, comparing profit across your own site and the marketplaces, checking which system owns stock,
                    and testing the checkout and freight rules. The output is a short ranked plan, with the effort and
                    owner for each fix.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      A <b>channel</b> is any place you sell: your own store, Amazon.com.au, Kogan, a retail shop or a
                      trade portal. An <b>integration</b> is the link that lets two systems swap data without retyping, such
                      as Shopify orders arriving in Xero as invoices. <b>Replatforming</b> means moving the store to different software,
                      with its products, customers and web addresses.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    We do not start with a launch or a redesign. The brands we suit already have customers, a few
                    channels and a back office that has not kept up. Most of what we find is in the joins between
                    systems, and most of it can be fixed without changing platform. When a replatform is the right call,
                    we say so and plan it properly.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto" src={null}
                subject="An operations manager at an online homewares brand checking synced orders on her laptop beside a label printer and courier satchels">
                <img src="/images/au/ecommerce-development/ecommerce-development-packing.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An operations manager at a Melbourne online homewares brand checking synced orders on her laptop, with a label printer and courier satchels ready beside her" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ LISTICLE: TEN AUDIT CHECKS → capgrid ═══ */}
        <section className="section capabilities" id="audit">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The ecommerce audit, itemised</div>
              <h2>Ten things we check in an Australian store before recommending anything</h2>
              <p className="lead">
                Every check uses your own data: orders, payouts, stock movements, freight invoices and search results.
                We also sit with the people who pack, reconcile and answer customers, because they know where the
                workarounds are.
              </p>
            </div>
            <div className="capgrid">
              {AUDIT_ITEMS.map((s, i) => (
                <div key={s.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CHK‑{s.n}</span><svg {...CAP_ICON}><path d={AUDIT_ICONS[i]} /></svg></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHO TO CALL FIRST → comparison table ═══ */}
        <section className="section comparison" id="consultant-or-developer">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Consultant or developer?</div>
              <div>
                <h2>Six situations, and who to call first in each</h2>
                <p className="lead">
                  A consultant earns their fee when the cause of a problem is unclear or the decision is expensive to
                  reverse. When the fix is obvious, brief a developer and save the audit. This is how we would sort
                  the requests we hear most from Australian stores.
                </p>
              </div>
            </div>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="Who to call first by situation">
              <table>
                <thead>
                  <tr>
                    <th>Situation</th>
                    <th className="fj">Who to call first</th>
                    <th>The first useful step</th>
                  </tr>
                </thead>
                <tbody>
                  {SITUATIONS.map((r) => (
                    <tr key={r.s}><th scope="row">{r.s}</th><td className="fj">{r.who}</td><td>{r.first}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="au-split">
              <div>
                <h3>Why we can be blunt about this</h3>
                <p>
                  We are paid for both the advice and the build, so we have no reason to stretch an audit or skip one.
                  If a developer brief will do, we say so on the first call. If you are about to commit to a new platform
                  or ERP, we will usually suggest a short review first, because those are the decisions that cost the
                  most to unwind.
                </p>
              </div>
              <div>
                <h3>What we do not recommend for money</h3>
                <p>
                  We take no resale commission from platforms, apps, connectors or marketplaces. When we suggest Cin7
                  Core (formerly DEAR) over Unleashed, or Shopify over staying on WooCommerce, the reason is in the plan
                  in writing, tied to your catalogue, your channels and your numbers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROJECT STEPS → timeline ═══ */}
        <section className="section process" id="how-it-works">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How an engagement runs</div>
                <h2>Seven steps, from your brief to working fixes</h2>
                <p className="lead">
                  Open any step to see what happens and what you get at the end of it. Steps one to four are the
                  consulting work. Five to seven only happen if you ask us to build.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Systems we work with in Australia</div>
                <ul className="trigrows">
                  <li><span className="m">Accounting</span><span className="n">Xero, MYOB Business, MYOB Acumatica, QuickBooks</span><span className="t">Books</span></li>
                  <li><span className="m">Inventory and ERP</span><span className="n">Cin7 Core, Cin7 Omni, Unleashed, NetSuite, Odoo</span><span className="t">Stock</span></li>
                  <li><span className="m">Marketplaces</span><span className="n">Amazon.com.au, eBay, Catch, Kogan, MyDeal, Bunnings, THE ICONIC</span><span className="t">Channels</span></li>
                  <li><span className="m">Payments</span><span className="n">Afterpay, Zip, Stripe, Shopify Payments</span><span className="t">Checkout</span></li>
                  <li><span className="m">Freight</span><span className="n">Australia Post, StarTrack, Sendle, 3PLs</span><span className="t">Delivery</span></li>
                </ul>
              </div>
            </div>
            <div className="timeline timeline-4">
              {STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                  <p><b>You get:</b> {s.out}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Not sure which fix in your store comes first?'}
            sub={'Tell us your channels, your systems and what is going wrong. On a short call the founder will tell you where he would look first, and whether an audit is worth paying for at all.'}
            label={'Book my ecommerce review call'}
          />
        </div>

        {/* ═══ BRIEF / RFP ASK → split + panel ═══ */}
        <section className="section" id="brief">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Send us your brief</div>
              <h2>Have a written brief or an RFP? Send it before the first call</h2>
            </div>
            <div className="au-split">
              <div>
                <p>
                  The best first calls start with something on paper. It does not need to be formal. One page that
                  names your systems and the problem lets us come to the call with questions about your business
                  instead of a generic pitch.
                </p>
                <p>
                  If you are running a formal tender with several firms, send the RFP as it stands. We will answer it in
                  the format you set, flag anything that is unclear, and tell you plainly if a part of it is outside what
                  we do.
                </p>
                <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What a useful brief includes</div>
                <ul className="trigrows">
                  {BRIEF_ITEMS.map((b) => (
                    <li key={b.m}><span className="m">{b.m}</span><span className="t">{b.t}</span></li>
                  ))}
                </ul>
                <p className="au-note">No brief yet? Use the form and tell us on the call. We will write the scope note for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOUSE TERMS → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Terms</div>
                <h2>How we price and run the work</h2>
              </div>
              <p>
                These terms apply to every engagement, from a one-off audit to a full replatform. They are written into
                the scope you sign.
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

        {/* ═══ COST → split + panel ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Cost</div>
              <h2>How much does an ecommerce consultant cost in Australia?</h2>
            </div>
            <div className="au-split">
              <div>
                <p>
                  The most specific Australian figures we found come from eCommerce Circle, a Melbourne agency. Its
                  2026 guide gives about $130 to $300+ an hour for consultants and strategists, and $5,000 to $50,000+
                  for a project with defined deliverables. The guide calls these indicative and is silent on GST, so
                  ask each firm you compare to quote GST as a separate line.
                </p>
                <p>
                  The spread is wide because the work is. A review of one Shopify store and its Xero file sits near the
                  bottom. A replatform plan for a brand with an ERP, a 3PL, three marketplaces and trade customers sits
                  near the top. FactoryJet quotes a fixed price in writing after a short scoping call.
                </p>
                <p className="au-note">
                  Source: <a href={SRC_COST} {...extLink}>eCommerce Circle, Ecommerce Consultant Australia: Costs and How to Choose</a>, read 29 October 2026.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the price</div>
                <ul className="trigrows">
                  <li><span className="m">Number of sales channels</span><span className="t">Reach</span></li>
                  <li><span className="m">Systems connected to the store</span><span className="t">Integration</span></li>
                  <li><span className="m">Catalogue size and variants</span><span className="t">Data</span></li>
                  <li><span className="m">A replatform in scope</span><span className="t">Migration</span></li>
                  <li><span className="m">Advice only, or advice plus build</span><span className="t">Delivery</span></li>
                  <li><span className="m">First call with the founder</span><span className="t">Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AUSTRALIAN RULES THAT TOUCH THE PLAN → facts ═══ */}
        <section className="section facts" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Rules and platform changes</div>
              <h2>Three things an Australian ecommerce plan should account for in 2026</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Privacy.</b> The OAIC defines a small business as one with an annual turnover of $3 million or
                  less, and the Privacy Act generally covers businesses above that, with some smaller ones covered
                  regardless. A store that sends customer data to an email tool, a reviews app, a 3PL and a marketplace
                  connector should know where every copy lives. Our audit lists them; your adviser decides what follows.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Shopify Scripts are gone.</b> According to Shopify’s help centre, Scripts have been deprecated
                  as of 30 June 2026, with Shopify Functions as the path forward. Any Plus store whose pricing or
                  delivery logic lived in Scripts should test every rule at checkout before the next sale event.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    <b>eInvoicing for trade customers.</b> Peppol lets accounting systems send invoices straight to each
                    other. Xero says registering to receive eInvoices is free to set up, and they arrive as draft bills.
                    If your trade buyers ask for it, plan it with the order flow, not as an afterthought.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OAIC} {...extLink}>OAIC, Small business</a>; <a href={SRC_SCRIPTS} {...extLink}>Shopify Help Center, Script Editor</a>; <a href={SRC_XERO_EINVOICE} {...extLink}>Xero, eInvoicing</a>. We are not lawyers or tax advisers; check obligations with yours.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" src={null}
                subject="A trade customer and a sales rep in a wholesale showroom looking at a trade ordering portal on a tablet">
                <img src="/images/au/visual-pass-2026-10-03/ecommerce-development/trade-1200.webp" srcSet="/images/au/visual-pass-2026-10-03/ecommerce-development/trade-640.webp 640w, /images/au/visual-pass-2026-10-03/ecommerce-development/trade-1200.webp 1200w" sizes="(max-width: 820px) calc(100vw - 40px), 560px" width={1200} height={800} loading="lazy" decoding="async" alt="A trade customer and a sales rep in a Brisbane wholesale showroom looking at a trade ordering portal on a tablet" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ PROOF: WORK WE HAVE DONE (platform-matched, not Australian) → ruled rows ═══ */}
        <section className="section platforms" id="work">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Work we have done</div>
                <h2>Two stores from our own work, on two different stacks</h2>
              </div>
              <p>
                Neither is an Australian business. We show them because the platforms match the ones Australian stores
                ask us about, and because the hard parts are the same everywhere: product logic and stock data.
              </p>
            </div>
            <div className="platlist" role="list">
              {/* DTF Virginia: naming approved 2026-10-29; facts as on /services/shopify-development
                  (live store checked 2026-10-29). Sow Easy: naming approved 2026-10-29; facts from
                  the public case study /case-studies/sow-easy-distributor-portal. */}
              <div className="plat plat-2col" role="listitem">
                <span className="capid">01</span>
                <div className="plat-name"><h3>DTF Virginia</h3><span className="plat-flag">Shopify</span></div>
                <p className="plat-build">
                  A custom Shopify theme for a print shop in Hampton, Virginia that sells DTF transfers, patches and
                  stickers. Buyers build their own gang sheets at each transfer size, and resellers can sign up for an
                  account. <a href="https://dtfvirginia.com/" {...extLink}>See the live store</a>.
                </p>
              </div>
              <div className="plat plat-2col" role="listitem">
                <span className="capid">02</span>
                <div className="plat-name"><h3>Sow Easy</h3><span className="plat-flag">WooCommerce + Odoo</span></div>
                <p className="plat-build">
                  A trade store we are building on WordPress WooCommerce. Stock, pricing and SKUs come from Odoo, so the
                  website keeps no second copy of that data, and the Odoo link is tested on staging before launch. <a href="/case-studies/sow-easy-distributor-portal">Read the Sow Easy case study</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CONSULTANCY LIST (self-disclosure, ItemList from CONSULTANCIES) ═══ */}
        <section className="section platforms" id="consultancies">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Other options</div>
                <h2>Australian ecommerce consultancies worth comparing</h2>
              </div>
              <p>
                These firms appear in Google Australia results for ecommerce consultant searches. Each suits a different
                buyer: some advise and mentor, some lean on one platform, some build. Shortlist a few, and in each first
                meeting ask the name of the person who will run your audit.
              </p>
            </div>
            <div className="platlist" role="list">
              {CONSULTANCIES.map((a, i) => (
                <div key={a.name} className={a.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{a.name}</h3>{a.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{a.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Firms named from Google Australia results for &quot;ecommerce consultant australia&quot; and &quot;ecommerce consulting services&quot; (DataForSEO, 29 October 2026). Notes reflect each company’s own homepage on that date. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ AUSTRALIA-WIDE + DEMAND → facts ═══ */}
        <section className="section facts" id="australia-wide">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Sydney, Melbourne, Brisbane, Perth, Adelaide</div>
              <h2>Ecommerce consulting across Australia, run remotely</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Consulting work happens in your data, not your office. We run workshops by video, share screens to
                  walk through orders and reconciliations, and send written findings you can forward to your
                  accountant or board. Calls are booked in your business hours, Perth included.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  What does change by state is freight. A brand shipping from a Sydney or Melbourne warehouse reaches
                  most customers quickly, so the questions are cut-off times and express pricing. A brand in Perth or
                  regional Queensland pays more to reach the east coast, so freight rules and free shipping thresholds
                  get a closer look in the audit.
                </p></div>
                <div className="fact"><div className="sec">§03</div>
                  <div className="demand">
                    <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                    <ul>
                      {[
                        { kw: 'ecommerce consultant', v: '40', w: '100%', kd: 'Buyer intent' },
                        { kw: 'ecommerce consulting', v: '40', w: '100%', kd: 'Buyer intent' },
                        { kw: 'ecommerce consultancy', v: '40', w: '100%', kd: 'Buyer intent' },
                        { kw: 'ecommerce consulting australia', v: '20', w: '50%', kd: 'Local intent' },
                        { kw: 'shopify consultant', v: '20', w: '50%', kd: 'Platform intent' },
                        { kw: 'b2b ecommerce consultant', v: '10', w: '25%', kd: 'Trade sellers' },
                      ].map((r) => (
                        <li key={r.kw} className="demand-row">
                          <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                          <div className="demand-bar"><i style={{ width: r.w }} /></div>
                          <div className="demand-kd">{r.kd}</div>
                        </li>
                      ))}
                    </ul>
                    <p className="demand-src">Source: DataForSEO, Google Ads volumes, Australia, October 2026</p>
                  </div>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto" src={null}
                subject="The owner of a homewares and gift shop on a video call with his ecommerce team from the back room of his store">
                <img src="/images/au/visual-pass-2026-10-03/ecommerce-development/remote-1200.webp" srcSet="/images/au/visual-pass-2026-10-03/ecommerce-development/remote-640.webp 640w, /images/au/visual-pass-2026-10-03/ecommerce-development/remote-1200.webp 1200w" sizes="(max-width: 820px) calc(100vw - 40px), 560px" width={1200} height={800} loading="lazy" decoding="async" alt="The owner of a Perth homewares and gift shop on a video call with his ecommerce team from the back room of his store, seen over his shoulder" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services in Australia</div>
              <h2>Where the plan goes next</h2>
              <p className="lead">
                Outside Australia? Our <a href="/ecommerce-consulting">ecommerce consulting service for US brands</a> covers
                the same work for American stores and systems.
              </p>
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
          heading="Ecommerce consultant questions Australian store owners ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_OAIC} {...extLink}>OAIC, Small business and the Privacy Act</a>
              <a href={SRC_SCRIPTS} {...extLink}>Shopify Scripts deprecation</a>
              <a href={SRC_XERO_EINVOICE} {...extLink}>Xero, eInvoicing in Australia</a>
              <a href={SRC_COST} {...extLink}>eCommerce Circle, consultant costs</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Get a ranked fix list for your store, then see the first fix working on your data</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                channels, your systems and the decision in front of you. No obligation, and no monthly minimum if you
                choose to work with us.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Book my ecommerce review call" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
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
