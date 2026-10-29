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

const CANONICAL = 'https://factoryjet.com/au/shopify-maintenance-services';
const UPDATED = '2026-10-29';
const TITLE = 'Shopify Maintenance & Support Australia | Retainers | FactoryJet';
const H1 = 'Shopify Maintenance and Support for Australian Stores';
const DESCRIPTION =
  'Shopify maintenance and support for established Australian stores: theme and app updates, Xero, MYOB and Cin7 syncs, Plus checkout, peak-season testing. Retainers optional.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Shopify Maintenance Australia', url: CANONICAL },
];

/* ─── External sources, each fetched 2026-10-29 and the claim confirmed in the
       fetched body ──────────────────────────────────────────────────────── */
// "Shopify releases a new API version every three months"; "Each stable version is supported
// for a minimum of 12 months"; a call to a retired version "falls forward and responds using
// the oldest accessible stable version". fetched 2026-10-29
const SRC_API_VERSIONING = 'https://shopify.dev/docs/api/usage/versioning';
// Script tags: from 1 Oct 2026 scriptTagCreate / scriptTagUpdate return a user error; from
// 1 Mar 2027 Shopify stops injecting script tags into storefronts; migrate to app embed blocks
// or web pixels. fetched 2026-10-29
const SRC_SCRIPT_TAGS = 'https://shopify.dev/changelog/online-store-script-tags-deprecation';
// "As of June 30, 2026, Shopify Scripts has been deprecated." Replacement: Shopify Functions.
// fetched 2026-10-29
const SRC_SCRIPTS = 'https://help.shopify.com/en/manual/checkout-settings/script-editor';
// "Unless you're on the Shopify Plus plan or a Shopify Partner, Shopify Support can't help with
// most custom code issues"; only Apps by Shopify supported; paid third-party themes supported by
// the theme developer; free themes get up to 60 minutes of design support on Basic and higher;
// inbound phone on Plus, Retail and POS Pro; email on Plus and Retail; no outbound calls on any
// plan. fetched 2026-10-29
const SRC_SHOPIFY_SUPPORT = 'https://help.shopify.com/en/manual/your-account/contact-shopify-support';
// Collaborators are Shopify Partners; request needs the store's 4-digit collaborator code;
// owner accepts or rejects, sets permissions, can remove at any time; access expires after
// 90 days without a login. fetched 2026-10-29
const SRC_COLLABORATORS = 'https://help.shopify.com/en/manual/your-account/users/security/collaborator-accounts';
// "Shopify retries failed webhook calls up to eight times in a four-hour period ... if failures
// persist, the subscription is removed." fetched 2026-10-29
const SRC_WEBHOOKS = 'https://shopify.dev/docs/apps/build/webhooks/troubleshooting-webhooks';
// Status page components: Admin, Checkout, Reports and Dashboards, Storefront, API & Mobile,
// Third party services, Support, Point of Sale, Oxygen. fetched 2026-10-29
const SRC_STATUS = 'https://www.shopifystatus.com/';
// LCP within 2.5 s, INP 200 ms or less, CLS 0.1 or less, at the 75th percentile. fetched 2026-10-29
const SRC_WEB_VITALS = 'https://web.dev/articles/vitals';
// OAIC: "A small business is one with an annual turnover of $3 million or less" and "Most small
// businesses are not covered by the Privacy Act 1988, but some are." fetched 2026-10-29
const SRC_OAIC_SMALL_BUSINESS =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business';
// OAIC NDB scheme: any organisation the Privacy Act 1988 covers "must notify affected individuals
// and the OAIC when a data breach is likely to result in serious harm". fetched 2026-10-29
const SRC_OAIC_NDB = 'https://www.oaic.gov.au/privacy/notifiable-data-breaches/about-the-notifiable-data-breaches-scheme';
// Shopify Australia pricing page, linked so buyers read live AUD plan fees from Shopify.
const SRC_PRICING = 'https://www.shopify.com/au/pricing';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ───────────────────
   Questions shaped by Google Australia People Also Ask and related searches pulled through
   DataForSEO on 2026-10-29 for "shopify maintenance services", "shopify support agency" and
   "shopify maintenance cost" (location 2036), plus the questions Australian buyers send us. */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'Shopify maintenance basics' },
  { key: 'shopify', label: 'What Shopify Support covers' },
  { key: 'cost',    label: 'Cost, GST and retainers' },
  { key: 'choose',  label: 'Choosing a support partner' },
  { key: 'working', label: 'How we work with you' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Shopify maintenance basics ──
  { category: 'basics', question: 'What does Shopify maintenance cover for an Australian store?',
    answer: 'Shopify runs the servers, hosting and platform security. Whatever you add to it is yours to look after: theme code, installed apps, checkout extensions, and the connections to Xero or MYOB, your warehouse, Afterpay or Zip, and couriers such as Australia Post and Sendle. Maintenance is the regular work of testing, updating and fixing those pieces, so a change in one does not quietly break another.' },
  { category: 'basics', question: 'If Shopify hosts our store, why does it need maintenance?',
    answer: 'Yes. Hosting is off your plate, but the platform keeps moving underneath your theme and apps. Shopify puts out a fresh API version each quarter and keeps each one alive for at least 12 months, so custom apps and integrations need planned updates. Shopify Scripts were deprecated on 30 June 2026, and apps that still rely on script tags stop loading on storefronts from 1 March 2027.' },
  { category: 'basics', question: 'What is a Shopify support retainer?',
    answer: 'A retainer is a monthly arrangement that sets aside developer hours for your store, with response times agreed in writing for when something breaks. Some brands want that certainty, especially before peak season. Others prefer to call on support only when they need it. With us a retainer is optional, there is no monthly minimum unless you ask for one, and every change is quoted and approved before work starts.' },
  { category: 'basics', question: 'What goes on a Shopify maintenance checklist?',
    answer: 'Weekly: place a test order, check Shopify’s status page and look for failed syncs to Xero, MYOB or your warehouse. Monthly: test theme and app updates on a copy of the theme, review Core Web Vitals and audit app subscriptions. Quarterly: check which API versions your custom apps call, read Shopify’s developer changelog for retiring features, and plan work ahead of EOFY sales, Black Friday and Christmas.' },
  { category: 'basics', question: 'Will my store go offline while you work on it?',
    answer: 'No. Theme work happens on an unpublished copy of your live theme and goes live only after testing, so customers keep buying the whole time. Integration changes are tested in a development store first wherever the connector allows it. Shopify posts platform incidents on its own status page, which covers the admin, checkout, storefront, APIs and point of sale, so you can tell a Shopify outage from a store fault.' },

  // ── What Shopify Support covers ──
  { category: 'shopify', question: 'Can I talk to a real person at Shopify?',
    answer: 'Shopify’s Help Center offers chat on every plan. Phone lines are reserved for Shopify Plus, Retail and POS Pro stores, while email is open to Plus and Retail. Shopify says its team does not make outbound phone or video calls on any plan. For billing, account access or a platform fault, Shopify Support is the right first contact. For your theme, apps and integrations, it usually is not.' },
  { category: 'shopify', question: 'Can Shopify Support fix our theme code or apps?',
    answer: 'Rarely. Shopify’s Help Center puts most custom code problems outside Support’s scope for any store below Shopify Plus, and Support only looks after apps Shopify itself makes. A third-party app goes back to the company that wrote it, and a paid theme to the theme’s developer. Free Shopify themes get basic troubleshooting, plus up to 60 minutes of help with small design changes on Basic and higher plans.' },
  { category: 'shopify', question: 'How do I know if Shopify is down or it is just my store?',
    answer: 'Open shopifystatus.com first. Shopify reports nine parts of its service there, among them the admin, checkout, storefront, API and mobile, third-party services and point of sale. When all nine are green and your store still fails, look closer to home: a recent theme edit, a new app, an app update or an integration whose connection has lapsed. That is where we start looking when you call us.' },
  { category: 'shopify', question: 'How much extra support does Shopify Plus include?',
    answer: 'According to Shopify’s Help Center, Plus stores get inbound phone, email and chat support, and Support can help with more custom code questions than on other plans. Shopify still does not become your developer. Checkout extensions, Shopify Functions, B2B price lists and your ERP connection are code you own, and someone has to test and update them each time Shopify changes the platform.' },
  { category: 'shopify', question: 'What happened to Shopify Scripts and script tags?',
    answer: 'Shopify says Scripts were deprecated on 30 June 2026 and points stores to Shopify Functions instead. Separately, since 1 October 2026 Shopify’s Admin API has rejected new or edited script tags, and from 1 March 2027 Shopify stops loading script tags on storefronts. Apps must move to app embed blocks or web pixels. An app audit shows which of yours are affected.' },

  // ── Cost, GST and retainers ──
  { category: 'cost', question: 'How much does Shopify maintenance cost in Australia?',
    answer: 'It depends on how much your store changes and how many systems it connects to, not on page count. The main drivers are custom theme code, the number of apps, integrations such as Xero, MYOB, Cin7 or a 3PL, Shopify Plus features and peak trading. FactoryJet quotes support as a fixed price in writing after a short review of your store. Shopify’s own plan fees are listed in AUD on its Australian pricing page.',
    links: [{ href: '/blog/shopify-cost-australia-2026', label: 'Shopify cost in Australia guide' }] },
  { category: 'cost', question: 'Do you quote in AUD, and how is GST shown?',
    answer: 'Every quote is in Australian dollars and states on its face how GST is treated, so your finance team can compare it with other quotes line for line. Shopify’s plan fees, app subscriptions, Shopify Payments fees and Afterpay or Zip merchant fees are billed to you by those providers directly. They are never bundled into our quote or marked up.' },
  { category: 'cost', question: 'Why do my monthly Shopify costs keep creeping up?',
    answer: 'Usually apps. Each paid app adds its own subscription, and stores collect them over years: a reviews app, a bundle app, a second reviews app nobody removed. Removing an app ends its billing, yet the snippets it added to your theme can keep loading on every page and slowing it down. Our app audit lists each app, what it costs, whether a native Shopify feature now does the same job, and what code it left.' },
  { category: 'cost', question: 'Is a retainer cheaper than paying for Shopify support per job?',
    answer: 'Not automatically. A retainer suits stores with steady change: weekly campaign pages, frequent product drops, several integrations. A store that changes twice a quarter often spends less paying per job. Before signing any retainer, ask what happens to unused hours and how urgent faults are handled outside them. We tell you which model fits after reading the last six months of changes in your store.' },

  // ── Choosing a support partner ──
  { category: 'choose', question: 'Does a support partner need to be a registered Shopify Partner?',
    answer: 'For store access, yes: collaborator accounts are open only to Shopify Partners, and they let a developer work in your store without anyone sharing a password. Partner status shows registration, not quality, so also ask to see live stores they support, who will do the work, and how they test before publishing. FactoryJet is a registered Shopify Partner, and we will walk you through recent Shopify work on a call.' },
  { category: 'choose', question: 'Freelancer, agency or in-house: who should support our Shopify store?',
    answer: 'Pick a freelancer when the store has few integrations and the work comes in small, clearly described pieces. Pick an agency when orders flow into Xero, MYOB, Cin7 or a 3PL, because one fix touches several systems and someone must cover holidays and sick days. In-house makes sense when the store changes every week and you already have a technical lead. Many established Australian brands pair one internal person with an agency.' },
  { category: 'choose', question: 'Can you take over a Shopify store another agency built?',
    answer: 'Yes, and most support work starts that way. The first job is reading what the last team left: theme edits, app settings, connector logins and any private apps. You get a written list sorted into urgent, fragile and healthy. The usual finding is a sound store carrying a Xero or 3PL connector that no one has owned since launch. You keep the documentation we write, whether or not you keep us on afterwards.' },
  { category: 'choose', question: 'Do you support Shopify Plus, B2B and multiple stores?',
    answer: 'Yes. We look after Plus checkout extensions, the Shopify Functions that replaced Scripts, native B2B with company accounts and price lists, and the extra Plus stores brands open for New Zealand shoppers or trade buyers. Multi-store setups need extra care, because a theme or app change in one store often has to be repeated in the others. We keep a single change log across all of them so nothing drifts.',
    links: [{ href: '/au/shopify-development', label: 'Shopify Plus and B2B builds' }] },

  // ── How we work with you ──
  { category: 'working', question: 'Do you need our Shopify owner login?',
    answer: 'No. We send a collaborator request, which you approve inside your Shopify admin using your store’s collaborator code. You choose the permissions, can limit access to specific apps and channels, and can remove us at any time. Shopify also expires collaborator access after 90 days without a login. Store ownership, the domain and your Xero or MYOB logins stay in your business name.' },
  { category: 'working', question: 'What counts as an urgent Shopify issue?',
    answer: 'Urgent means customers cannot buy: the store shows an error, checkout fails, or card, Afterpay or Zip payments decline across the board. High priority means buying still works but something important has stopped, such as orders not reaching your warehouse or Xero. Everything else, from a new landing page to a layout bug on one phone, is scheduled work. We agree response times for each level in writing.' },
  { category: 'working', question: 'How do you protect our customer data during maintenance?',
    answer: 'We work through collaborator access limited to what each job needs, and never ask for an owner login. That matters under Australian privacy law. The OAIC says organisations covered by the Privacy Act 1988 must notify affected people and the OAIC when a data breach is likely to cause serious harm. Narrow access and a record of who changed what lower that risk for your store.' },
  { category: 'working', question: 'How do you handle peak season for Australian stores?',
    answer: 'We plan backwards from your biggest dates: EOFY sales in June, Black Friday on 27 November 2026, Christmas posting cut-offs for Australia Post and StarTrack, and Boxing Day. A few weeks before each one we test discounts, checkout, Afterpay and Zip, shipping rates and integrations with real test orders, then hold theme and app releases until the peak passes, unless something is broken.' },
  { category: 'working', question: 'What should our brief or RFP include?',
    answer: 'Send your name and work email through the form on this page, and attach a brief or RFP on the next step. The most useful brief lists your store URL, Shopify plan, installed apps, connected systems such as Xero, MYOB, Cin7 or a 3PL, what has broken in the last six months, and your peak trading dates. The founder replies within 24 hours.' },
  { category: 'working', question: 'Do we own everything if we stop working with you?',
    answer: 'Yes. The store, theme code, custom apps and documentation are yours, and the code we write lives in version control you can access. There is no monthly minimum and no lock-in. If you move to another agency or hire in-house, we hand over the change log, the app list with costs and the integration notes, then remove our collaborator access.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Maintenance and Support Australia',
      serviceType: 'Shopify maintenance, Shopify support, Shopify Plus support, Shopify app and theme updates and Shopify integration upkeep',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Shopify maintenance and support for established Australian stores: theme and app updates tested on an unpublished theme, app audits, Shopify platform changes such as Scripts to Functions and script tag removal, API version upgrades, upkeep of Xero, MYOB, Cin7, 3PL and marketplace integrations, Afterpay, Zip, Australia Post, StarTrack and Sendle checks, Core Web Vitals monitoring and peak-season testing. Retainers are optional, with no monthly minimum.',
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
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Shopify support for established Australian stores: tested theme and app updates, Xero, MYOB and Cin7 syncs, Afterpay, Zip and Australia Post checks, Plus checkout and peak-season freezes. Optional retainers, no monthly minimum.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/shopify-development/shopify-development-og.webp', width: 1200, height: 630, alt: 'A Shopify developer and a brand founder reviewing her online store together in a warehouse studio' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'shopify-maintenance-services';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_EMPHASIS = 'for Australian Stores';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

const HERO_ICONS = [
  'M4 4h16v12H4V4Zm4 16h8m-4-4v4',
  'M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1m2 4a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1',
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2',
] as const;

/* Ten jobs a Shopify support partner does for an established Australian store. */
const JOBS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Theme updates without losing your edits', d: 'Theme developers ship new versions, and code your last agency added does not always carry across. We merge custom code into the new version on an unpublished copy, test it, then publish.' },
  { n: '02', t: 'App audits and clean-up', d: 'A list of every app, what it costs each month, and whether a native Shopify feature now does the same job. When an app goes, so does the leftover code it planted in your theme.' },
  { n: '03', t: 'Xero, MYOB and Cin7 sync checks', d: 'Orders, payouts, refunds and GST lines landing in the books the way your bookkeeper expects, and stock levels agreeing between Shopify, Cin7 or Unleashed and the warehouse.' },
  { n: '04', t: 'Webhook and integration watch', d: 'Integrations listen for webhooks, messages Shopify sends when an order or product changes. Shopify retries a failed one up to eight times in four hours, then removes the subscription. We catch that before the sync goes silent.' },
  { n: '05', t: 'API version upgrades', d: 'Custom apps and private integrations call a dated Shopify API version. Each is supported for at least 12 months, then Shopify answers with the oldest version still running, which can change results without warning.' },
  { n: '06', t: 'Checkout, Afterpay and Zip testing', d: 'Real test orders after any change to payments, discounts or shipping, including a refund. Buy now, pay later options get checked on product pages and at checkout.' },
  { n: '07', t: 'Shipping rates and courier apps', d: 'Australia Post, StarTrack and Sendle rates, label printing and tracking emails kept correct when carriers change services, surcharges or app versions.' },
  { n: '08', t: 'Speed and Core Web Vitals', d: 'Core Web Vitals are Google’s page-experience scores. Google’s targets: LCP within 2.5 seconds, INP of 200 milliseconds or less, CLS of 0.1 or less. We recheck after every release.' },
  { n: '09', t: 'Marketplace feeds', d: 'Product and stock feeds to Amazon.com.au, eBay, Kogan or Bunnings Marketplace, so a price change or sell-out in Shopify reaches every channel you sell on.' },
  { n: '10', t: 'Small builds between fixes', d: 'Campaign landing pages, new product page sections, a size guide, a trade sign-up form. Each one is quoted and approved before work starts.' },
];

const JOB_ICONS = [
  'M4 4h16v16H4V4Zm0 5h16M9 9v11',
  'M5 3h14v18H5V3Zm3 4h8m-8 4h8m-8 4h4',
  'M5 3h14v18H5V3Zm3 4h8m-8 4h2m4 0h2m-8 4h2m4 0h2',
  'M4 12h4l2-6 4 12 2-6h4',
  'M12 3v4m0 10v4M3 12h4m10 0h4M7 7l2 2m6 6 2 2m0-10-2 2m-6 6-2 2',
  'M3 6h18v12H3V6Zm0 4h18M7 15h4',
  'M3 7h11v9H3V7Zm11 3h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  'M4 16a8 8 0 1 1 16 0m-8 0 4-5',
  'M4 7h16v13H4V7Zm4-4h8v4H8V3Z',
  'M12 5v14M5 12h14',
] as const;

/* Numbered project steps. Titles carry their number ("01 · Access and audit"). */
const STEPS: { t: string; d: string }[] = [
  { t: '01 · Access without passwords', d: 'You approve our collaborator request inside your Shopify admin with the permissions the review needs. No owner login changes hands, and you can remove us at any time.' },
  { t: '02 · Store audit', d: 'We read the theme code, every installed app and what it costs, each integration and the API version it calls, checkout and payment settings, shipping rules and Core Web Vitals. We also ask what broke in the last six months.' },
  { t: '03 · Written findings and a fixed quote', d: 'You get a plain-English list sorted into urgent, fragile and healthy, with a fixed price in AUD for the urgent work and a recommendation on whether a retainer or pay-per-job support suits your rate of change.' },
  { t: '04 · Urgent fixes first', d: 'Broken syncs, failing checkouts, deprecated Scripts or script tags and expired API versions get fixed first, each one tested with real test orders before it goes live.' },
  { t: '05 · Ongoing support you choose', d: 'Monitoring, a monthly window for theme and app updates, a quarterly look at Shopify’s changelog, and change requests quoted and approved one at a time. A reserved-hours retainer is there if you want it.' },
  { t: '06 · Peak-season freeze', d: 'Before EOFY, Black Friday and Christmas we test discounts, checkout and integrations, then hold theme and app changes until trading settles, unless something is broken.' },
];

const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/shopify-development', t: 'Shopify development Australia', d: 'New stores, Shopify Plus, migrations and B2B, built by the same team that supports them afterwards.', go: 'Explore Shopify builds →' },
  { href: '/au/website-maintenance', t: 'Website maintenance Australia', d: 'Care for WordPress and WooCommerce sites, with updates tested on staging and accounts kept in your name.', go: 'Explore website care →' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'Outgrowing your platform? We compare Shopify with the alternatives for your catalogue and systems.', go: 'Explore ecommerce →' },
  { href: '/au/ecommerce-seo', t: 'Ecommerce SEO Australia', d: 'Collection pages, product data and technical SEO for Shopify stores that need more organic sales.', go: 'Explore ecommerce SEO →' },
  { href: '/au/ai-customer-service', t: 'AI customer service', d: 'AI agents that answer where-is-my-order and returns questions for Shopify stores, built and owned by you.', go: 'Explore AI customer service →' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we do for Australian businesses: ecommerce, AI agents, websites and AI search.', go: 'Visit the Australia hub →' },
];

export default function ShopifyMaintenanceAUPage() {
  return (
    <>
      <script id="ld-au-shopify-maintenance-services" type="application/ld+json"
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
              <div className="eyebrow">Shopify Maintenance Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your Shopify store already trades. Orders flow into Xero or MYOB, stock syncs with Cin7 or a 3PL,
                Afterpay and Zip sit at checkout, and Australia Post or Sendle print the labels. Then an app update
                breaks the cart, or a sync stops on a Friday night. We are the team that keeps those pieces working,
                tests every change before it goes live, and answers when something breaks.
              </p>
              <HeroInlineForm region="au" source="au_shopify_maintenance_hero" submitLabel="Book my Shopify store review" />
            </div>

            <div
              className="specpanel"
              role="group"
              aria-label="What Shopify support from FactoryJet looks after"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What Shopify support covers: theme and apps, Australian integrations, and the dated Shopify platform changes"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>SUPPORT · WHAT WE LOOK AFTER</span>
                <span className="sys"><span>Registered Shopify Partner</span><span>Shopify and Shopify Plus</span></span>
              </div>
              <div className="specpanel-body">
                <div className="specrow run">
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">tested on an unpublished theme</span>
                  <span className="title">Theme, apps and checkout</span>
                  <span className="tag">Tested</span>
                </div>
                <div className="specrow run">
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">Xero, MYOB, Cin7, 3PL, marketplaces</span>
                  <span className="title">Integrations and syncs</span>
                  <span className="tag">Watched</span>
                </div>
                <div className="specrow hold">
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">API versions, script tags, Functions</span>
                  <span className="title">Shopify platform changes</span>
                  <span className="tag">Planned</span>
                </div>
              </div>
              <div className="specpanel-foot">RULE · Each change is quoted and approved before work starts. No monthly minimum.</div>
            </div>
          </div>
        </section>

        {/* ═══ LEDGER (dated Shopify facts, each linked to its source) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '3 months', t: 'between new Shopify API versions; each stable version is supported for at least 12 months', s: 'Shopify, API versioning', u: SRC_API_VERSIONING },
              { v: '1 Mar 2027', t: 'Shopify stops loading script tags on storefronts. Apps must move to app embed blocks or web pixels', s: 'Shopify developer changelog', u: SRC_SCRIPT_TAGS },
              { v: '8 retries', t: 'in four hours for a failed webhook, then Shopify removes the subscription and the sync goes quiet', s: 'Shopify, webhooks', u: SRC_WEBHOOKS },
              { v: '60 min', t: 'of design help is the most Shopify Support gives free themes; most custom code sits outside its scope', s: 'Shopify Help Center', u: SRC_SHOPIFY_SUPPORT },
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
              <h2 data-speakable="true">What does Shopify maintenance mean for an established Australian store?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">Shopify maintenance is the ongoing work of testing, updating and fixing everything you have added to Shopify.</span>{' '}
                    Shopify hosts the store and patches the platform. Your theme code, apps, checkout extensions and the
                    connections to Xero, MYOB, Cin7, your 3PL, Afterpay, Zip and your couriers are yours to keep working.
                    A support partner does that work on a schedule, and fixes faults fast when one gets through.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      A <b>retainer</b> is a monthly arrangement that sets aside developer hours for your store. A{' '}
                      <b>webhook</b> is a message Shopify sends to another system when an order, product or customer
                      changes. A <b>collaborator account</b> is how a Shopify Partner works in your store without you
                      handing over a password.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    This page is for stores past the start-up stage: a working catalogue, a bookkeeper who reconciles
                    Shopify payouts in Xero or MYOB, maybe a wholesale channel or a Shopify Plus contract. If your store
                    was built by an agency that stopped answering, or by a developer who moved on, this is where we
                    usually come in.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto" src={null}
                subject="An online store dispatch desk with an order dashboard on a laptop, a label printer and courier satchels">
                <img src="/images/au/shopify-development/shopify-development-integrations.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An online store's dispatch desk: an order dashboard on the laptop, a label printer feeding out a shipping label and a stack of courier satchels ready to go" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ LISTICLE: TEN JOBS → capgrid ═══ */}
        <section className="section capabilities" id="what-we-maintain">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Shopify support, itemised</div>
              <h2>Ten jobs we do on Australian Shopify stores</h2>
              <p className="lead">
                Most Shopify support quotes promise “updates and bug fixes”. These are the specific jobs that decide
                whether an established store keeps trading through a platform change, an app update or a busy
                Black Friday weekend.
              </p>
            </div>
            <div className="capgrid">
              {JOBS.map((s, i) => (
                <div key={s.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">JOB‑{s.n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
            <p className="tablenote">
              Sources: <a href={SRC_WEBHOOKS} {...extLink}>Shopify, troubleshooting webhooks</a>,{' '}
              <a href={SRC_API_VERSIONING} {...extLink}>Shopify, API versioning</a> and{' '}
              <a href={SRC_WEB_VITALS} {...extLink}>web.dev, Web Vitals</a>, all checked 29 October 2026.
            </p>
          </div>
        </section>

        {/* ═══ WHO FIXES WHAT → comparison ═══ */}
        <section className="section comparison" id="who-fixes-what">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Shopify Support vs a support partner</div>
              <div>
                <h2>Who fixes what when your Shopify store breaks</h2>
                <p className="lead">
                  Plenty of store owners assume Shopify Support will sort out anything inside Shopify. Its own Help
                  Center draws the line much tighter. Here is who handles each kind of fault.
                </p>
              </div>
            </div>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="Who fixes what on a Shopify store">
              <table>
                <thead>
                  <tr>
                    <th>The fault</th>
                    <th>Shopify Support</th>
                    <th>App or theme developer</th>
                    <th className="fj">Support partner (us)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Billing, account access, platform outage</th><td>Yes</td><td>No</td><td className="fj">We help you raise it</td></tr>
                  <tr><th scope="row">Custom theme code</th><td>Mostly no, unless on Plus</td><td>Their own code only</td><td className="fj">Yes</td></tr>
                  <tr><th scope="row">A third-party app misbehaving</th><td>No, only Apps by Shopify</td><td>Their app only</td><td className="fj">Yes, and the clash with other apps</td></tr>
                  <tr><th scope="row">Xero, MYOB or Cin7 sync stopped</th><td>No</td><td>Connector app only</td><td className="fj">Yes, end to end</td></tr>
                  <tr><th scope="row">Old Scripts or script tags stopped working</th><td>Points you to Functions</td><td>If they update the app</td><td className="fj">Yes, rebuilt and tested</td></tr>
                  <tr><th scope="row">Afterpay, Zip or shipping rates wrong at checkout</th><td>Shopify Payments side only</td><td>Their app only</td><td className="fj">Yes, with real test orders</td></tr>
                  <tr><th scope="row">Phone support</th><td>Plus, Retail and POS Pro</td><td>Varies</td><td className="fj">A named engineer</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Shopify Support scope from <a href={SRC_SHOPIFY_SUPPORT} {...extLink}>Shopify Help Center, Contact Shopify Support</a> and{' '}
              <a href={SRC_SCRIPTS} {...extLink}>Shopify Help Center, Shopify Scripts</a>, checked 29 October 2026.
            </p>
          </div>
        </section>

        {/* ═══ PLATFORM CHANGES → facts + dated panel ═══ */}
        <section className="section facts" id="platform-changes">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Shopify platform changes</div>
              <h2>Dated Shopify changes that catch unmaintained stores out</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Shopify retires old tools on published dates. Scripts, the code Plus stores used for custom
                  discounts, shipping and payment rules at checkout, were deprecated on 30 June 2026. Shopify’s
                  replacement is Shopify Functions. If a bundle discount or a free-shipping rule quietly stopped this
                  year, that is the likely cause, and we rebuild it as a Function.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Script tags are next. Since 1 October 2026 the Admin API has refused requests to add or edit them,
                  and from 1 March 2027 Shopify stops loading them on storefronts. Older reviews, tracking and pop-up
                  apps often still use them. The fix sits with each app: move to an app embed block you switch on in the
                  theme editor, or a web pixel for tracking. We list which of your apps are affected and chase the
                  developers.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  API versions age out on a timetable too. Shopify ships a new version each quarter and supports each
                  one for at least 12 months. After that, a private app calling a retired version gets answers from the
                  oldest version still running, which can change what your Xero or 3PL connector receives without any
                  error message.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Dates on the calendar</div>
                <ul className="trigrows">
                  <li><span className="m">Shopify Scripts deprecated</span><span className="n">rebuild as Functions</span><span className="t">30 Jun 2026</span></li>
                  <li><span className="m">Script tag create and update blocked</span><span className="n">Admin API</span><span className="t">1 Oct 2026</span></li>
                  <li><span className="m">Black Friday</span><span className="n">test, then freeze</span><span className="t">27 Nov 2026</span></li>
                  <li><span className="m">Script tags stop loading</span><span className="n">app embeds or web pixels</span><span className="t">1 Mar 2027</span></li>
                  <li><span className="m">EOFY sales</span><span className="n">financial year ends</span><span className="t">30 Jun 2027</span></li>
                </ul>
                <p className="au-note">
                  Sources: <a href={SRC_SCRIPTS} {...extLink}>Shopify Scripts</a>, <a href={SRC_SCRIPT_TAGS} {...extLink}>script tag changelog</a>,{' '}
                  <a href={SRC_API_VERSIONING} {...extLink}>API versioning</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOW AN ENGAGEMENT RUNS → numbered timeline ═══ */}
        <section className="section process" id="how-support-starts">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How support starts</div>
                <h2>From first call to a store someone is looking after, in six steps</h2>
                <p className="lead">
                  Open each step to see what happens and what we need from you.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Our terms, in writing</div>
                <ul className="trigrows">
                  <li><span className="m">Store, code and documentation</span><span className="n">from day one</span><span className="t">Yours</span></li>
                  <li><span className="m">Shopify, apps and payment fees</span><span className="n">billed to you directly</span><span className="t">At cost</span></li>
                  <li><span className="m">Each change request</span><span className="n">quoted and approved first</span><span className="t">Fixed price</span></li>
                  <li><span className="m">Defects in work we deliver</span><span className="n">for a cover period agreed upfront</span><span className="t">Included</span></li>
                  <li><span className="m">Monthly minimum</span><span className="n">retainer only if you want one</span><span className="t">None</span></li>
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

        <div className="au-midcta">
          <MidPageCTA
            headline={'Not sure what state your Shopify store is in?'}
            sub={'Approve a collaborator request and tell us what broke recently. The founder will come back with a written list of what is urgent, what is fragile and what is fine, with a fixed price for the urgent work.'}
            label={'Book my Shopify store review'}
          />
        </div>

        {/* ═══ INTEGRATIONS → definition module ═══ */}
        <section className="definition" id="integrations">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image" src={null}
              subject="A Shopify developer checking a product page on her phone against the desktop version on her laptop">
              <img src="/images/au/visual-pass-2026-10-03/shopify-development/mobile-1200.webp" srcSet="/images/au/visual-pass-2026-10-03/shopify-development/mobile-640.webp 640w, /images/au/visual-pass-2026-10-03/shopify-development/mobile-1200.webp 1200w" sizes="(max-width: 820px) calc(100vw - 40px), 560px" width={1200} height={800} loading="lazy" decoding="async" alt="A Shopify developer checking a product page on her phone against the desktop version on her laptop" />
            </VisualSlot>
            <p className="figcap">
              After each release we check the store on a phone first. Most faults customers see start on a small
              screen, and so do most Core Web Vitals problems.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">The systems Australian stores connect</div>
            <h2>Keeping Shopify talking to Xero, MYOB, Cin7 and your couriers</h2>
            <p>
              Most faults on an established store are not in the storefront. They sit in the hand-offs between Shopify
              and the systems behind it, and they surface days later as a stock count that is wrong or a payout that
              will not reconcile.
            </p>
            <ul className="chg-list chg-list-1col">
              <li><span><b>Accounting.</b> Xero, MYOB Business or Acumatica, QuickBooks Online or NetSuite, so each Shopify payout, its card fees, GST and any refunds reconcile to the bank feed in a form your bookkeeper accepts.</span></li>
              <li><span><b>Inventory and ERP.</b> Cin7 Core (formerly DEAR), Cin7 Omni, Unleashed, Odoo or NetSuite. Before touching a sync we write down which system is the master for stock, for prices and for customer records.</span></li>
              <li><span><b>Payments.</b> Shopify Payments or Stripe, plus Afterpay and Zip at checkout, tested with real orders and a refund after any change.</span></li>
              <li><span><b>Shipping.</b> Australia Post, StarTrack and Sendle, directly or through a multi-carrier app, with rules for bulky items and regional postcodes.</span></li>
              <li><span><b>Marketplaces.</b> Feeds to Amazon.com.au, eBay, Kogan, Bunnings Marketplace or THE ICONIC, kept in step with Shopify prices and stock.</span></li>
            </ul>
            <p>
              Shopify work we have done includes DTF Virginia and Shop Holistico, two US stores. For Australian brands
              we will walk you through comparable stores on a call.
            </p>
          </div>
        </section>

        {/* ═══ PRIVACY AND ACCESS → facts ═══ */}
        <section className="section facts" id="privacy">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Access and Australian privacy law</div>
              <h2>Why we never ask for your Shopify owner login</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Whoever maintains your store can see customer names, addresses and order history. The OAIC defines a
                  small business as one with annual turnover of $3 million or less, and says most of those sit outside
                  the Privacy Act 1988. An established store above that line is generally covered, and so is the
                  Notifiable Data Breaches scheme: covered organisations must notify affected people and the OAIC when a
                  breach is likely to cause serious harm.
                </p></div>
                <div className="fact"><div className="sec">§02</div><div>
                  <p>
                    So we work through Shopify collaborator accounts. Only Shopify Partners can request one, you approve
                    it with your store’s collaborator code, you choose its permissions down to specific apps and channels,
                    and you can remove it at any time. Shopify also expires collaborator access after 90 days without a
                    login. We are not lawyers, and your adviser should confirm how the Privacy Act applies to you.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OAIC_SMALL_BUSINESS} {...extLink}>OAIC, Small business</a>,{' '}
                    <a href={SRC_OAIC_NDB} {...extLink}>OAIC, Notifiable Data Breaches scheme</a>,{' '}
                    <a href={SRC_COLLABORATORS} {...extLink}>Shopify, collaborator accounts</a>.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What stays in your name</div>
                <ul className="trigrows">
                  <li><span className="m">Shopify store owner account</span><span className="t">You</span></li>
                  <li><span className="m">Domain and DNS</span><span className="t">You</span></li>
                  <li><span className="m">Xero or MYOB login</span><span className="t">You</span></li>
                  <li><span className="m">App subscriptions</span><span className="t">You</span></li>
                  <li><span className="m">Our access</span><span className="t">Collaborator</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ RETAINER OR PAY PER JOB → table ═══ */}
        <section className="section" id="retainer-or-per-job">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Shopify retainer or pay per job</div>
              <h2>Retainer, pay-per-job support or an in-house developer</h2>
              <p className="lead">
                Each model suits a different store. Two questions settle it: how many changes you ship a month, and how many
                systems hang off Shopify.
              </p>
            </div>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="Shopify support models compared">
              <table>
                <thead>
                  <tr>
                    <th>What matters</th>
                    <th className="fj">Retainer with us</th>
                    <th>Pay per job with us</th>
                    <th>In-house developer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best fit</th><td className="fj">Weekly change, several integrations, Plus</td><td>A few changes a quarter</td><td>Daily change, a technical lead in place</td></tr>
                  <tr><th scope="row">Time reserved for you</th><td className="fj">Yes, agreed monthly</td><td>Booked per request</td><td>Full time</td></tr>
                  <tr><th scope="row">Monthly minimum</th><td className="fj">Only if you ask for one</td><td>None</td><td>Salary</td></tr>
                  <tr><th scope="row">Each change approved first</th><td className="fj">Yes</td><td>Yes</td><td>Internal</td></tr>
                  <tr><th scope="row">Cover for leave and sick days</th><td className="fj">A team</td><td>A team</td><td>One person</td></tr>
                  <tr><th scope="row">Peak-season freeze and testing</th><td className="fj">Planned in</td><td>Quoted when you ask</td><td>Depends on the hire</td></tr>
                </tbody>
              </table>
            </div>
            <div className="au-split">
              <div>
                <h3>What decides the price</h3>
                <p>
                  We do not publish support prices, because two stores on the same Shopify plan can need several times
                  the effort. What moves the number: custom theme code, app count, how many systems connect, Plus
                  features such as Functions and B2B, multi-store setups and how hard you trade at peak. Every quote is a
                  fixed price in AUD with GST treatment stated on its face.
                </p>
                <ModalCTAButton label="Get a fixed-price support quote" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">Billed by others, never by us</div>
                <p className="au-panel-intro">
                  These go to you directly from each provider, at their price:
                </p>
                <ul className="trigrows">
                  <li><span className="m">Shopify plan</span><span className="t">Shopify</span></li>
                  <li><span className="m">Card processing</span><span className="t">Shopify Payments or Stripe</span></li>
                  <li><span className="m">Buy now, pay later fees</span><span className="t">Afterpay or Zip</span></li>
                  <li><span className="m">Paid apps and themes</span><span className="t">Each developer</span></li>
                </ul>
                <p className="au-note">
                  Live plan fees in AUD: <a href={SRC_PRICING} {...extLink}>Shopify Australia pricing</a>. For a full
                  breakdown, read our <a href="/blog/shopify-cost-australia-2026">Shopify cost in Australia guide</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BRIEF / RFP ASK → vlog ═══ */}
        <section className="vlog" id="brief">
          <div className="wrap">
            <div className="section-head">
              <h2>Send us your brief or RFP</h2>
              <p>
                If you are running a tender for Shopify support, send the document as it is. If not, these lists cover
                what we need to give you a fixed quote on the first reply.
              </p>
            </div>
            <div className="ventries">
              <details open className="ventry">
                <summary><h3>About the store</h3><span className="chev" aria-hidden="true">+</span></summary>
                <ul className="chg-list chg-list-1col">
                  <li><span>Store URL, Shopify plan, and whether you run more than one store.</span></li>
                  <li><span>The theme, who built it, and whether its code has been edited.</span></li>
                  <li><span>Installed apps, or a screenshot of the apps page.</span></li>
                </ul>
              </details>
              <details open className="ventry">
                <summary><h3>About the systems behind it</h3><span className="chev" aria-hidden="true">+</span></summary>
                <ul className="chg-list chg-list-1col">
                  <li><span>Accounting: Xero, MYOB, QuickBooks or NetSuite, and who your bookkeeper is.</span></li>
                  <li><span>Stock and fulfilment: Cin7, Unleashed, Odoo, a 3PL, and which couriers you use.</span></li>
                  <li><span>Marketplaces and wholesale channels you sell through.</span></li>
                </ul>
              </details>
              <details open className="ventry">
                <summary><h3>About what you need</h3><span className="chev" aria-hidden="true">+</span></summary>
                <ul className="chg-list chg-list-1col">
                  <li><span>What broke in the last six months, and how long each fault took to fix.</span></li>
                  <li><span>Your peak trading dates and any launches planned.</span></li>
                  <li><span>Whether you want reserved monthly time or support on request.</span></li>
                </ul>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services in Australia</div>
              <h2>Beyond Shopify support</h2>
              <p className="lead">
                Selling in the US as well? See our <a href="/services/shopify-maintenance-services">Shopify maintenance services for US stores</a>.
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

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Shopify maintenance and support questions Australian store owners ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_SHOPIFY_SUPPORT} {...extLink}>Shopify, Contact Shopify Support</a>
              <a href={SRC_SCRIPTS} {...extLink}>Shopify Scripts deprecation</a>
              <a href={SRC_SCRIPT_TAGS} {...extLink}>Script tags deprecation</a>
              <a href={SRC_API_VERSIONING} {...extLink}>Shopify API versioning</a>
              <a href={SRC_WEBHOOKS} {...extLink}>Shopify webhooks troubleshooting</a>
              <a href={SRC_COLLABORATORS} {...extLink}>Shopify collaborator accounts</a>
              <a href={SRC_STATUS} {...extLink}>Shopify status page</a>
              <a href={SRC_WEB_VITALS} {...extLink}>web.dev, Web Vitals</a>
              <a href={SRC_OAIC_SMALL_BUSINESS} {...extLink}>OAIC, Small business</a>
              <a href={SRC_OAIC_NDB} {...extLink}>OAIC, Notifiable Data Breaches</a>
              <a href={SRC_PRICING} {...extLink}>Shopify Australia pricing</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Get a Shopify store someone is looking after before it breaks</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your store,
                the systems behind it and the support model that fits. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Book my Shopify store review" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
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
