import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ComparisonTable, { type ComparisonColumn, type ComparisonRow } from '@/components/v2/ComparisonTable';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ecommerce-audit, built 2026-09-20.

   Why this page exists: a SeenInSearch export of 8 AI answers across ChatGPT,
   Claude, Gemini, and Google found "which ecommerce development agency offers
   a free commerce audit" to be the single most fragmented question in the
   set. Over 20 small and mid agencies get named with almost no repeats and no
   dominant winner. The mechanism is simple: whoever has a page that clearly
   and specifically says "free ecommerce/commerce audit," in a form a crawler
   can read and describe, wins the mention. This is an offer/labeling play,
   not a ranking play, and it is genuinely new content: /ai-visibility-checker
   is about whether ChatGPT recommends a business (AI citation), a different
   concept from the health of someone's store.

   Honesty pattern mirrored from /services/seo-audit: no pricing anywhere, an
   explicit "is it actually free" answer, and an honest comparison against
   free automated site-grader tools instead of pretending they don't exist.
   Static server component throughout except the existing shared client
   widgets (HeroInlineForm, and ModalCTAButton inside FinalCTA) that every
   FactoryJet page reuses.

   Schema: WebPage + Service + Organization + FAQPage + BreadcrumbList. The
   FAQPage mainEntity is generated from the exact FAQ_ITEMS array the visible
   <FAQ> component renders below; there is no second, hand-written array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/ecommerce-audit';
const PAGE_TITLE = 'Free Ecommerce Audit for US Online Stores | FactoryJet';
const PAGE_DESC =
  'Get a free ecommerce audit of your online store from FactoryJet. This free commerce audit checks page speed, checkout flow, mobile experience, and platform fit, then hands you a plain-English report you keep either way.';
const PAGE_MODIFIED = '2026-09-20';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'free ecommerce audit',
    'free commerce audit',
    'ecommerce audit services',
    'ecommerce site audit',
    'online store audit',
    'ecommerce conversion audit',
    'shopify store audit',
    'checkout audit',
    'ecommerce performance audit',
    'free online store review',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/ecommerce-audit-hero.webp',
        width: 1600,
        height: 1067,
        alt: 'A merchant reviewing their online store on a laptop, representing a free ecommerce audit of an existing site',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/services/ecommerce-audit-hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Ecommerce Audit', url: CANONICAL_URL },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  dateModified: PAGE_MODIFIED,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    url: 'https://factoryjet.com',
    name: 'FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Free Ecommerce Audit / Commerce Audit Services',
  serviceType: 'Ecommerce Audit, Commerce Audit, Online Store Performance and Conversion Review',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'A free ecommerce audit of a live online store, covering page speed and Core Web Vitals, checkout flow friction, mobile experience, platform fit, and conversion-obvious issues. Delivered as a written, prioritized report and a walkthrough call with the founder, kept by the visitor whether or not they hire FactoryJet.',
  url: CANONICAL_URL,
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/factoryjet',
    'https://clutch.co/profile/factoryjet-private',
    'https://www.goodfirms.co/company/factoryjet-private-limited',
    'https://www.designrush.com/agency/profile/factoryjet',
    'https://www.softwaresuggest.com/factoryjet',
    'https://www.crunchbase.com/organization/factoryjet',
  ],
};

/* ── FAQ. Single array, rendered visibly below AND used to build the
   FAQPage JSON-LD. Never hand-duplicate this list near the ld+json block. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'included', label: "What's included" },
  { key: 'honesty', label: 'Is it really free' },
  { key: 'process', label: 'How it works' },
  { key: 'after', label: 'After the audit' },
  { key: 'fit', label: 'Is this for you' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── What's included ──────────────────────────────────────────────
  {
    category: 'included',
    question: 'What is a free ecommerce audit?',
    answer:
      'A free ecommerce audit is a real review of your live online store. We look at how fast your pages load, how smooth your checkout is, how the store works on a phone, whether your platform is holding you back, and a few conversion issues that are obvious once someone experienced looks. You get a written, prioritized report and a short call to walk through it, at no cost.',
  },
  {
    category: 'included',
    question: 'What exactly do you check during the audit?',
    answer:
      'Five things: page speed and Core Web Vitals (the loading and responsiveness scores Google measures), checkout flow friction, mobile experience, whether your current platform fits your business, and conversion-rate-obvious issues like unclear pricing or weak product pages. We also do a quick sanity check on whether your analytics are tracking sales correctly, since a lot of stores find out that part is broken.',
  },
  {
    category: 'included',
    question: 'What are Core Web Vitals, and why do you check them?',
    answer:
      'Core Web Vitals are three scores Google publishes for how a page feels to load and use: how fast the main content appears, how quickly the page responds to a tap, and whether things jump around while loading. Google itself sets clear pass or fail thresholds for each. A slow or jumpy store loses sales before a shopper even sees your products, so we check this first.',
  },
  {
    category: 'included',
    question: 'What do you mean by checkout flow friction?',
    answer:
      'Friction means anything that makes checkout slower or more confusing than it needs to be: too many form fields, no guest checkout option, shipping costs that only appear at the last step, a payment method your buyers expect but you do not offer, or a cart that is hard to review before paying. Each extra bit of friction gives a shopper one more reason to leave without buying.',
  },
  {
    category: 'included',
    question: 'Do you check my store on mobile too?',
    answer:
      'Yes, and for most stores this matters more than desktop. We check whether buttons and links are big enough to tap accurately, whether the checkout still works cleanly on a small screen, how much data your mobile pages load, and whether menus and filters are easy to use one-handed. A store that only works well on a laptop is turning away a large share of its own traffic.',
  },
  {
    category: 'included',
    question: 'What does platform fit mean?',
    answer:
      'It means asking honestly whether the software running your store, whether that is Shopify, WooCommerce, Magento, BigCommerce, or something custom, is actually the right fit for where your business is now. Sometimes the platform is fine and the problem is configuration. Sometimes a store has outgrown its platform and every fix becomes a workaround. We tell you which situation you are in.',
  },
  {
    category: 'included',
    question: 'What are conversion-rate-obvious issues?',
    answer:
      'These are the problems that quietly cost sales but rarely get noticed because everyone is used to the site. Things like unclear return policies, product photos that do not show enough detail, missing trust signals near the buy button, confusing navigation, or a search box that returns nothing for common misspellings. None of these need a redesign to fix, just someone to point them out.',
  },
  {
    category: 'included',
    question: 'Do you look at my product pages specifically?',
    answer:
      'Yes. We check whether product pages answer the questions a buyer actually has: clear pricing, real availability, enough photos, sizing or specification details, and reviews if you have them. A product page that makes someone scroll around looking for basic information is losing sales it should not be losing, and this is usually a quick fix once it is flagged.',
  },
  // ── Is it really free ────────────────────────────────────────────
  {
    category: 'honesty',
    question: 'Is the free ecommerce audit actually free?',
    answer:
      'Yes. There is no fee for the audit itself and no catch. You get a real review of your live store, a written report ranking the issues by impact, and a walkthrough call with the founder. You keep the report whether or not you ever hire FactoryJet for anything. We do this because it is the most honest way to show how we think before you commit to anything.',
  },
  {
    category: 'honesty',
    question: 'What is the catch? Why would you do this for free?',
    answer:
      'The audit is how we earn the right to be considered for the follow-up work, if you want any. Some visitors take the report and fix things themselves or hand it to their own developer, and that is fine. Others ask us to do the work. We would rather show you real findings for free than spend a sales call describing capabilities you cannot verify.',
  },
  {
    category: 'honesty',
    question: 'How is this different from a free online site grader tool?',
    answer:
      'An automated site grader scans your homepage in seconds and spits out a score with generic warnings, with nobody reading the actual output. Our free ecommerce audit has a person look at your real checkout flow, your real product pages, and your real mobile experience, then rank what actually matters for your specific store. A tool tells you a number. A human tells you what to do about it.',
  },
  {
    category: 'honesty',
    question: 'Are automated ecommerce scanner tools worth using at all?',
    answer:
      'They are a reasonable first pass. A free scanner can catch an obvious problem, like a missing security certificate or a page that fails to load, in under a minute. What it cannot do is walk through your checkout as a real buyer would, judge whether your product pages actually sell, or tell you which of twenty flagged issues is worth fixing first. That judgment is the part a human adds.',
  },
  {
    category: 'honesty',
    question: 'Will you pressure me to sign up for something on the call?',
    answer:
      'No. The call is a walkthrough of your findings, not a sales pitch disguised as one. If the audit turns up real problems and you want help fixing them, we will explain the options honestly, including telling you when a smaller or different fix would serve you better than a big engagement. If you just want the report, that is a completely normal outcome.',
  },
  {
    category: 'honesty',
    question: 'Do you make up fake problems to scare me into hiring you?',
    answer:
      'No. Every finding in your audit is something we can show you directly on your own site, your own Search Console or analytics data, or a real Core Web Vitals score you can reproduce yourself with Google\'s own free tools. If we cannot point to evidence for a claim, it does not go in the report. You should be able to verify every line yourself.',
  },
  {
    category: 'honesty',
    question: 'Is my data safe if I give you access to run the audit?',
    answer:
      'Most of the audit only needs your public storefront URL, which is no different from what any shopper already sees. If we need read-only access to analytics or your platform admin to check something specific, like whether conversion tracking is firing correctly, we ask for exactly that level of access and nothing more, and only with your explicit go-ahead.',
  },
  // ── How it works ─────────────────────────────────────────────────
  {
    category: 'process',
    question: 'How long does the free ecommerce audit take?',
    answer:
      'Most audits are ready within a few business days of getting your store URL, depending on how large your catalog is and how much needs checking. You get the written report first, then a short call with the founder to walk through what matters most and answer questions. We would rather take an extra day and get it right than rush a generic checklist at you.',
  },
  {
    category: 'process',
    question: 'What happens on the audit call?',
    answer:
      'The founder walks you through the report screen by screen: what we found, why it matters for your specific store, and which fixes would move the needle first versus which ones can wait. It usually runs twenty to thirty minutes. You can ask questions about anything in the report, and there is no obligation to discuss hiring FactoryJet unless you want to.',
  },
  {
    category: 'process',
    question: 'Do I need to prepare anything before requesting an audit?',
    answer:
      'Just your store URL. If you already have access to Google Analytics, Google Search Console, or your platform\'s own analytics dashboard, sharing view-only access speeds things up because we can check real traffic and conversion data instead of only what is visible on the public site. It is not required, but it makes the report more specific to your store.',
  },
  {
    category: 'process',
    question: 'Is the audit done by a real person or generated automatically?',
    answer:
      'A real person, the founder, reviews your store and writes the report. We use real tools, like Google\'s own Core Web Vitals data and standard crawling software, to gather evidence, but a human decides what those numbers mean for your store and ranks the findings. Nothing in the report is a template with your store name swapped in.',
  },
  {
    category: 'process',
    question: 'Can you audit my store if it is not live yet?',
    answer:
      'The audit is built around reviewing a live, running store, since a lot of what we check, real page speed, real checkout behavior, real mobile rendering, only shows up once traffic is hitting it. If your store is in staging or about to launch, we can still take a look, but flag that some findings may change once real customers and real load hit the site.',
  },
  // ── After the audit ──────────────────────────────────────────────
  {
    category: 'after',
    question: 'What happens after I get the report?',
    answer:
      'That is entirely up to you. Some people take the report and hand it to their existing developer or in-house team. Some fix the quick wins themselves. Some ask FactoryJet to do the work. There is no follow-up pressure and no expiration on the report. It describes real issues on your real store, so it stays useful whenever you get to it.',
  },
  {
    category: 'after',
    question: 'If I want you to fix the issues, how does that work?',
    answer:
      'If the audit finds real work worth doing, we scope a project around exactly what your store needs, sized to the issues we actually found rather than a generic package. Smaller fixes can run as a fixed-scope project. Larger or ongoing work, like ongoing conversion improvements or ongoing platform maintenance, runs month-to-month so you are never locked into a long contract.',
  },
  {
    category: 'after',
    question: 'Do I have to sign a contract to get the audit?',
    answer:
      'No. The audit itself has no contract, no card on file, and no commitment of any kind. You give us your store URL and, if you choose, some analytics access, and we send back the report. Any agreement only comes into play if you separately decide you want FactoryJet to do the follow-up work, and even then it is month-to-month, not a long lock-in.',
  },
  {
    category: 'after',
    question: 'What if the audit finds that my platform needs to be replaced?',
    answer:
      'We will say so plainly if that is the honest finding, along with why, and we will not sugarcoat it to avoid an uncomfortable conversation. A platform migration is a bigger decision than a checkout tweak, so we lay out what a move would involve and what it would fix before recommending it, rather than assuming a rebuild is always the answer.',
  },
  {
    category: 'after',
    question: 'What if I just have one or two small issues, not a big project?',
    answer:
      'That is a normal outcome and a good one. Plenty of stores are mostly fine and just need two or three specific fixes, like tightening the checkout or fixing a mobile menu. We will tell you that honestly instead of inflating the findings to justify a bigger engagement. A short, scoped fix is sometimes exactly the right amount of work.',
  },
  {
    category: 'after',
    question: 'Will you follow up with me after the call?',
    answer:
      'We will check in once, a week or two after your call, to see if you have questions or want to move forward on anything from the report. After that, it is your call whether to reach back out. We are not going to run a drip campaign at you for a report you already own.',
  },
  // ── Is this for you ──────────────────────────────────────────────
  {
    category: 'fit',
    question: 'Who is the free ecommerce audit for?',
    answer:
      'Any US-based online store owner who wants an honest read on where their site stands, whether sales have stalled, checkout feels clunky, page speed feels slow, or you are simply about to invest in marketing and want to fix the store first so that traffic does not leak out the bottom. It is also useful before a redesign or a platform change, so you know what is actually broken before you rebuild it.',
  },
  {
    category: 'fit',
    question: 'Which ecommerce platforms do you audit?',
    answer:
      'Shopify and Shopify Plus, WooCommerce on WordPress, BigCommerce, Magento and Adobe Commerce, and custom-built storefronts. The specific checks shift slightly by platform, since a Shopify theme has different common failure points than a custom Next.js storefront, but the five areas we cover, speed, checkout, mobile, platform fit, and conversion issues, apply to all of them.',
  },
  {
    category: 'fit',
    question: 'Is my store too small for this?',
    answer:
      'No. A small store with a handful of products often has the fastest fixes to find, because there is less to untangle. The audit scales to the size of your catalog rather than assuming every store is enterprise-scale, so a small shop gets a report sized to a small shop, not a padded document meant for a much bigger business.',
  },
  {
    category: 'fit',
    question: 'Is my store too large or complex for this?',
    answer:
      'Large catalogs and multi-brand stores take a bit longer to review, but the same five-area method applies. For a large store we usually sample a representative set of category and product pages rather than reviewing every single one, then flag whether an issue is store-wide or isolated to a few templates, which matters for how it gets fixed.',
  },
  {
    category: 'fit',
    question: 'I already had an SEO audit or a general website audit done. Do I need this too?',
    answer:
      'It depends what that audit covered. A general SEO audit focuses on rankings and search visibility, and FactoryJet has a separate free SEO audit for exactly that. This ecommerce audit is narrower and deeper on the commerce side specifically: checkout, cart, product pages, and platform fit, the parts of a store an SEO-focused audit usually does not go deep on.',
  },
  {
    category: 'fit',
    question: 'Do you only work with US businesses?',
    answer:
      'Yes, FactoryJet is focused on US-based ecommerce businesses. If your store serves US customers and is run from the United States, you are exactly who this audit is built for. We know the platforms, shipping expectations, and payment methods US shoppers are used to, which is part of why the checklist below is written the way it is instead of as a generic, one-size-fits-all list.',
  },
  {
    category: 'fit',
    question: 'I am not sure if my problem is design, speed, or something else. Can the audit help me figure that out?',
    answer:
      'That is one of the more common reasons people request it. A lot of store owners can tell something is off, fewer sales than expected, more abandoned carts than they would like, but cannot pin down why. The audit\'s job is to separate a real, specific cause from a vague feeling that something is wrong, and rank whatever it finds by how much it is likely costing you.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ── Verified stats. Each fetch-verified live on 2026-09-20 before writing. ── */
const CITED_STATS = [
  {
    value: '70.22%',
    label:
      'The average documented online shopping cart abandonment rate, calculated by the Baymard Institute across 50 separate published studies. Most stores lose more sales to abandoned carts than they realize, and checkout friction is one of the few causes an audit can actually find and fix.',
    sourceUrl: 'https://baymard.com/lists/cart-abandonment-rate',
    sourceLabel: '50 Cart Abandonment Rate Statistics, Baymard Institute',
  },
  {
    value: '23.48',
    label:
      'The average number of form elements a US checkout shows shoppers by default, per Baymard\'s checkout benchmark research, against an ideal of roughly 12 to 14. Baymard also found 17% of US shoppers have abandoned an order specifically because checkout felt too long or complicated.',
    sourceUrl: 'https://baymard.com/lists/cart-abandonment-rate',
    sourceLabel: 'Checkout usability benchmark, Baymard Institute',
  },
  {
    value: '2.5s / 200ms',
    label:
      'Google\'s published Core Web Vitals thresholds for a good page experience: Largest Contentful Paint (how fast the main content appears) within 2.5 seconds, and Interaction to Next Paint (how fast the page responds to a tap) at 200 milliseconds or less. Cumulative Layout Shift should stay at 0.1 or less.',
    sourceUrl: 'https://web.dev/articles/vitals',
    sourceLabel: 'Core Web Vitals thresholds, web.dev (Google)',
  },
] as const;

/* ── The audit checklist. Six groups, the actual order we work in. ── */
type ChecklistGroup = { label: string; items: ReadonlyArray<{ t: string; b: string }> };

const AUDIT_CHECKLIST: ReadonlyArray<ChecklistGroup> = [
  {
    label: 'Speed & Core Web Vitals',
    items: [
      { t: 'Largest Contentful Paint on your key pages', b: 'How long your homepage, a category page, and a product page take to show their main content, on real mobile conditions, not just a desktop test.' },
      { t: 'Interaction to Next Paint', b: 'How fast the page responds when a shopper taps a button or opens a menu. Heavy scripts on product and cart pages are the usual cause of a slow response.' },
      { t: 'Cumulative Layout Shift', b: 'Whether images, banners, or app widgets jump the page around while it loads. This is cheap to fix and it visibly annoys shoppers.' },
      { t: 'Image and app weight', b: 'How much your product photos and installed apps or plugins are adding to page weight, and which ones are worth trimming.' },
      { t: 'Third-party scripts', b: 'Reviews widgets, chat bots, upsell apps, and tracking pixels, each one loaded and timed, so you know which ones are actually worth their cost in speed.' },
    ],
  },
  {
    label: 'Checkout flow & friction',
    items: [
      { t: 'Number of steps and form fields', b: 'Counted against what a shorter, well-designed checkout typically needs, so you can see exactly how much could be trimmed.' },
      { t: 'Guest checkout availability', b: 'Whether shoppers can buy without being forced to create an account first, one of the most common reasons a cart gets abandoned.' },
      { t: 'Shipping cost visibility', b: 'Whether the total cost, including shipping, is visible early, or only appears as a surprise on the last step.' },
      { t: 'Payment method coverage', b: 'Whether you offer the payment methods your specific buyers expect, and whether any of them are broken or missing on mobile.' },
      { t: 'Cart review and edit experience', b: 'Whether a shopper can easily review, change quantity, or remove an item without losing their place in checkout.' },
      { t: 'Error handling', b: 'What happens when a card is declined or a field is filled in wrong. A confusing error message loses a sale that a clear one would have saved.' },
    ],
  },
  {
    label: 'Mobile experience',
    items: [
      { t: 'Tap target sizing', b: 'Whether buttons, filters, and menu items are large enough and spaced well enough to tap accurately on a real phone screen.' },
      { t: 'Mobile checkout parity', b: 'Whether every step that works on desktop checkout also works cleanly on mobile, since this is where a lot of stores quietly break.' },
      { t: 'Mobile page weight', b: 'How much data mobile pages load compared to desktop, since a lot of shoppers are on a slower connection than the store was tested on.' },
      { t: 'Navigation and search on a small screen', b: 'Whether menus, filters, and search are actually usable one-handed, not just visually shrunk down from desktop.' },
    ],
  },
  {
    label: 'Platform fit',
    items: [
      { t: 'Whether the platform matches the business today', b: 'An honest read on whether Shopify, WooCommerce, BigCommerce, Magento, or a custom build still fits your catalog size, order volume, and growth plans.' },
      { t: 'App and plugin bloat', b: 'How many installed apps or plugins are actually doing work versus quietly slowing the store down or duplicating each other.' },
      { t: 'Theme and template limitations', b: 'Whether your current theme is capping what you can do with layout, checkout customization, or page speed.' },
      { t: 'Signs a migration is or is not warranted', b: 'The specific, concrete signs that would justify a platform change, and just as importantly, the signs that a migration would be the wrong move right now.' },
    ],
  },
  {
    label: 'Conversion-obvious issues',
    items: [
      { t: 'Product page completeness', b: 'Whether pricing, availability, sizing or specs, and enough photos are all present without a shopper having to hunt for them.' },
      { t: 'Trust signals near the buy button', b: 'Reviews, return policy, security badges, and clear shipping timelines, placed where a hesitant buyer is deciding whether to click.' },
      { t: 'Search and filtering', b: 'Whether on-site search returns useful results, including for common misspellings, and whether filters actually narrow the catalog usefully.' },
      { t: 'Navigation clarity', b: 'Whether a new visitor can find what they came for in a couple of clicks, or gets lost in categories that do not match how people actually shop.' },
    ],
  },
  {
    label: 'Analytics & tracking sanity check',
    items: [
      { t: 'Whether purchases are actually being tracked', b: 'A surprising number of stores have a broken or partially broken conversion tracking setup and do not know it. We check whether the numbers you are looking at are real.' },
      { t: 'Cart and checkout funnel visibility', b: 'Whether you can currently see where in the funnel shoppers are dropping off, or whether that view simply does not exist yet.' },
    ],
  },
];

const CHECKLIST_TOTAL = AUDIT_CHECKLIST.reduce((n, g) => n + g.items.length, 0);

/* ── Comparison: human audit vs automated scanner vs doing nothing ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'FactoryJet free ecommerce audit', isFactoryJet: true },
  { label: 'A free automated site grader' },
  { label: 'Guessing / doing nothing' },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'Who reviews your store',
    values: [
      'The founder, reading your real checkout and product pages',
      'Software. Nobody looks at your actual store',
      'Nobody, until a customer complains',
    ],
  },
  {
    feature: 'What comes back',
    values: [
      'A written report, ranked by impact, plus a walkthrough call',
      'A score and a list of generic, unranked warnings',
      'A feeling that something might be wrong',
    ],
  },
  {
    feature: 'Checkout & cart depth',
    values: [
      'Full checkout flow walked through as a real buyer would',
      'Rarely checked beyond whether the page loads',
      'Unknown, unless someone happens to notice',
    ],
  },
  {
    feature: 'Mobile experience',
    values: [
      'Checked on real mobile conditions, tap targets included',
      'A single automated mobile score, no walkthrough',
      'Assumed fine because it looks fine on a laptop',
    ],
  },
  {
    feature: 'Platform fit judgment',
    values: [
      'An honest yes or no on whether your platform still fits',
      'Not covered at all',
      'Whatever platform you started with, unquestioned',
    ],
  },
  {
    feature: 'Cost',
    values: ['Free, no card, no contract', 'Free', 'Free, and also free of any new information'],
  },
];

export default function EcommerceAuditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    FREE ECOMMERCE AUDIT &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.4rem]">
                  Get a free ecommerce audit of your online store.
                </h1>

                <p className="mt-6 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  A real review of your live store, not an automated scan. We check your page speed, your checkout
                  flow, how the site works on mobile, and whether your platform is holding you back. You get a
                  written, prioritized report and a call with the founder, free, whether or not you ever hire us.
                </p>

                <div className="mt-8">
                  <HeroInlineForm region="us" source="services_ecommerce_audit_hero" submitLabel="Get my free ecommerce audit" />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-fj-neutral-200 pt-6 font-fj-mono text-xs text-fj-neutral-400">
                  <span>500+ businesses served</span>
                  <span className="hidden sm:inline">&middot;</span>
                  <span>4.9/5 average Google review rating</span>
                  <span className="hidden sm:inline">&middot;</span>
                  <span>Real human, not a checker tool</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
                  <Image
                    src="/images/services/ecommerce-audit-hero.webp"
                    alt="A merchant reviewing their online store's checkout and dashboard on a laptop during an ecommerce audit"
                    width={1600}
                    height={1067}
                    priority
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST BLOCK */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Short answer
              </div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                FactoryJet&rsquo;s free ecommerce audit is a real, human review of your live online store. We check
                page speed and Core Web Vitals, checkout flow friction, mobile experience, platform fit, and
                conversion-obvious issues, then deliver a written, prioritized report plus a walkthrough call with the
                founder. It is a genuinely free commerce audit: no cost, no contract, and the report is yours to keep
                whether or not you hire FactoryJet for anything afterward.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CITED STATS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">What the audit is measured against</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Numbers your store is already being judged on.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              An audit only matters if the bar it measures you against is real and checkable. Each figure below links
              to where it came from. We fetch-verified all three before writing this page.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {CITED_STATS.map((s) => (
                <div key={s.value} className="rounded-2xl border border-fj-neutral-200 border-t-[3px] border-t-[#F05A28] bg-white p-6">
                  <div className="font-fj-display text-3xl font-bold tracking-[-0.02em] text-[#F05A28] sm:text-4xl">
                    {s.value}
                  </div>
                  <p className="mt-3 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{s.label}</p>
                  <a
                    href={s.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-fj-mono text-[11px] font-semibold tracking-wide text-[#B23E13] hover:underline"
                  >
                    <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                      <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {s.sourceLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHAT'S INCLUDED, TOP-LEVEL */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">What&rsquo;s in the audit</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Five areas, checked on your real store.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              This is what actually gets delivered. Not a teaser, not a locked report behind another form. A real
              review of the store you are running today.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">01</div>
                <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Page speed & Core Web Vitals</h3>
                <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  How fast your homepage, category pages, and product pages load and respond, measured against
                  Google&rsquo;s own published thresholds.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">02</div>
                <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Checkout flow friction</h3>
                <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Every step of your checkout, walked through as a real buyer would, looking for anything that gives a
                  shopper a reason to leave.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">03</div>
                <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Mobile experience</h3>
                <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Tap targets, mobile page weight, and whether checkout actually works cleanly on a real phone, not
                  just a shrunk-down desktop layout.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">04</div>
                <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Platform fit</h3>
                <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  An honest answer on whether Shopify, WooCommerce, BigCommerce, Magento, or your custom build still
                  fits your business today.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 md:col-span-2 lg:col-span-1">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">05</div>
                <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Conversion-obvious issues</h3>
                <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Product page gaps, missing trust signals, and navigation problems that are quietly costing sales and
                  are usually cheap to fix once flagged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FULL CHECKLIST */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[900px] px-6 md:px-8">
            <p className="fj-eyebrow">The full list, nothing held back</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              The {CHECKLIST_TOTAL} things we check, in the order we check them.
            </h2>
            <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Most agencies keep the checklist behind a form. Here is ours. Read it, and hold anyone auditing your
              store to it, including us.
            </p>

            <div className="mt-12 grid gap-10">
              {AUDIT_CHECKLIST.map((g) => (
                <div key={g.label}>
                  <h3 className="mb-4 font-fj-display text-xl font-semibold text-fj-ink">{g.label}</h3>
                  <ul className="grid gap-3">
                    {g.items.map((c) => (
                      <li
                        key={c.t}
                        className="flex items-start gap-3.5 rounded-xl border border-fj-neutral-200 border-l-[3px] border-l-[#F05A28] bg-white px-5 py-4"
                      >
                        <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
                          <circle cx="10" cy="10" r="9" fill="#0C7150" />
                          <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                        </svg>
                        <div>
                          <div className="font-fj-display text-[15px] font-semibold text-fj-ink">{c.t}</div>
                          <p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{c.b}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Want the audit before you decide anything?"
          sub="Send us your store URL. We run the full speed, checkout, mobile, and platform review first. You keep the report whether or not you ever work with us."
          label="Request your free ecommerce audit"
        />

        {/* 6. COMPARISON: human audit vs automated scanner vs nothing */}
        <ComparisonTable
          eyebrow="How the options compare"
          headline="A human ecommerce audit vs a free automated scanner."
          lead="A free site grader is a reasonable first pass and genuinely worth running. It just cannot walk through your checkout as a real buyer, or tell you which of its warnings actually matters for your store. That judgment is what a human review adds."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer="Columns describe the typical shape of each option as of 2026, not a scorecard against any specific tool."
        />

        {/* 7. WHAT HAPPENS AFTER */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">No pressure, no pricing tricks</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  What happens after the audit.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  The report is yours no matter what you decide next. If you want help acting on it, here is honestly
                  how that would work.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:col-span-7 sm:grid-cols-2">
                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Fix it yourself, or hand it off</h3>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                    Plenty of people take the written report straight to their own developer or in-house team. That is
                    a completely normal, expected outcome and we do not treat it as a loss.
                  </p>
                </div>
                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">A scoped, fixed project</h3>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                    For a defined set of fixes, we scope a fixed-price project sized to exactly what the audit found,
                    not a generic package. You know the scope before anything starts.
                  </p>
                </div>
                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 sm:col-span-2">
                  <h3 className="font-fj-display text-lg font-semibold text-fj-ink">Ongoing, month-to-month work</h3>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                    If your store needs continuing attention, ongoing conversion work, platform maintenance, or
                    feature builds, that runs month-to-month. No long-term lock-in. If we are not earning our keep,
                    you can leave with one billing period of notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FOUNDER */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <Image
                    src="/images/team/bhavesh-barot.webp"
                    alt="Bhavesh Barot, Founder of FactoryJet, who personally reviews every free ecommerce audit"
                    width={460}
                    height={520}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  A real audit from the founder, not a generated report.
                </h2>
                <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  I review every ecommerce audit myself, so the person reading your store is the same person
                  presenting the findings and accountable for the roadmap that follows. You are not handed to a
                  junior analyst or a template.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  <li className="rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm text-fj-ink">
                    Founder-led, every audit
                  </li>
                  <li className="rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm text-fj-ink">
                    500+ businesses served
                  </li>
                  <li className="rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm text-fj-ink">
                    4.9/5 average Google review rating
                  </li>
                  <li className="rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm text-fj-ink">
                    No pricing tricks, ever
                  </li>
                </ul>
                <p className="mt-6 font-fj-mono text-xs text-fj-neutral-400">
                  Reviewed &amp; updated {PAGE_MODIFIED} &middot; Bhavesh Barot, Founder
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <FAQ
          eyebrow="Ecommerce audit FAQ"
          headline="Questions, answered plainly."
          lead="Everything people actually ask before requesting a free ecommerce audit, grouped by topic."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 10. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Free ecommerce audit"
          headline="See exactly what is costing you sales."
          sub="Get a free, human review of your store's speed, checkout, mobile experience, and platform fit. A written report and a call with the founder, no cost, no contract."
          primaryCta={{ label: 'Get my free ecommerce audit', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Founder-led. Month-to-month if you ever want the fixes done. The report is yours to keep either way."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
