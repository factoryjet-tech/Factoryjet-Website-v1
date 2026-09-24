import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AuthorCard from '@/components/v2/AuthorCard';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import './shopify-development.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/uk/shopify-development';
const UPDATED = '2026-09-24';
const TITLE = 'Shopify Agency UK | Shopify Developer & Partner | FactoryJet';
const H1 = 'Shopify Agency UK: Expert Shopify Developers and a Development Partner';
const DESCRIPTION =
  'UK Shopify agency and registered Shopify Partner. Expert Shopify developers for custom themes, Shopify Plus, B2B and migrations. You own the code. Free audit.';

/* ─── Breadcrumb. ONE array feeds both the visible trail and the JSON-LD, so the
       two cannot drift apart. Never hand-copy a second array. ─────────────── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Shopify Agency UK', url: CANONICAL },
];

/* ─── External sources. Every URL fetch-verified 2026-09-24: HTTP 200, and the
       wording we rely on confirmed in the fetched page body. ──────────────── */
const SOURCES = [
  {
    id: 'ons-retail',
    label: 'Office for National Statistics',
    title: 'Retail sales, Great Britain: August 2026',
    url: 'https://www.ons.gov.uk/businessindustryandtrade/retailindustry/bulletins/retailsales/august2026',
    note: 'Released 18 September 2026. The ONS reports that the proportion of Great Britain retail sales made online rose from 28.4% in July 2026 to 28.8% in August 2026, and that online spending was 10.1% higher than in the same three months of 2025.',
  },
  {
    id: 'shopify-directory',
    label: 'Shopify',
    title: 'Shopify Partner Directory',
    url: 'https://www.shopify.com/partners/directory',
    note: 'Shopify’s own directory of partners. It says partners are tiered (Select, Plus, Premier and Platinum) based on their history of experience and proven success on Shopify, and that listed partners work independently, so merchants should check reviews, work samples and certifications before hiring.',
  },
  {
    id: 'gov-distance-selling',
    label: 'GOV.UK',
    title: 'Online and distance selling for businesses',
    url: 'https://www.gov.uk/online-and-distance-selling-for-businesses',
    note: 'The government guidance every UK online shop has to follow: what you must show before an order is placed, the right to cancel up to 14 days after delivery, and delivery within 30 days unless agreed otherwise.',
  },
  {
    id: 'google-cwv',
    label: 'Google Search Central',
    title: 'Understanding Core Web Vitals and Google search results',
    url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    note: 'Google states the thresholds we build to: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1.',
  },
];

/* ─── Named UK Shopify agencies (open self-disclosure, ItemList). Each note is
       based on the company’s own homepage, fetched 2026-09-24. ───────────── */
const SHOPIFY_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. A registered Shopify Partner with Shopify developers who design, build, migrate and support stores for UK brands, from a custom theme to Shopify Plus B2B. Founder involved on every project, fixed-scope quotes, and the code is yours on launch day.' },
  { name: 'Charle', note: 'A Shopify agency with offices in London and Manchester that describes itself as a Shopify Plus Partner. It covers builds, monthly support, Shopify SEO and GEO, email marketing and international strategy, and runs its own growth-tracking platform.' },
  { name: 'Eastside Co', note: 'Describes itself as a Shopify Platinum Partner agency and one of the first three UK agencies accredited as a Shopify Plus Partner, with offices in London, New York and Dubai. Covers design, development, migrations, app development and marketing.' },
  { name: 'Swanky', note: 'A Shopify Plus agency working across the UK, Australia and France, showing a Shopify Platinum Partner badge. Strong on migrations to Shopify Plus, subscription brands, conversion work and B2B on Shopify.' },
  { name: 'We Make Websites', note: 'A Shopify agency for international brands with offices in London and New York, and Shopify Partners since 2011. Covers UX and UI design, development, internationalisation, data migration and headless builds.' },
  { name: 'Made by Field', note: 'A UK Shopify Plus agency that describes itself as an official Shopify Plus Partner. Offers bespoke store builds, platform migration, internationalisation, speed optimisation and backend integrations.' },
  { name: 'Chilliapple', note: 'A software development company in Tunbridge Wells and London that offers Shopify and Shopify Plus development alongside Magento, WooCommerce and custom software, including a hire-a-developer model for extra capacity.' },
];

/* ─── FAQ source of truth. This ONE array drives the FAQPage schema AND the
       visible accordion below. There is deliberately no second copy: a schema
       that claims something the page does not show is a cloaking problem. ── */
type FaqCategory =
  | 'Choosing an agency'
  | 'Hiring a developer'
  | 'Scope and timeline'
  | 'Platform and Shopify Plus'
  | 'Migrations'
  | 'SEO, speed and UK rules'
  | 'Working with us';

const FAQ_CATEGORIES: { id: string; label: FaqCategory }[] = [
  { id: 'faq-choosing', label: 'Choosing an agency' },
  { id: 'faq-hiring', label: 'Hiring a developer' },
  { id: 'faq-scope', label: 'Scope and timeline' },
  { id: 'faq-platform', label: 'Platform and Shopify Plus' },
  { id: 'faq-migrations', label: 'Migrations' },
  { id: 'faq-seo', label: 'SEO, speed and UK rules' },
  { id: 'faq-working', label: 'Working with us' },
];

const FAQ_ITEMS: { question: string; answer: string; category: FaqCategory }[] = [
  /* ── Choosing an agency ── */
  {
    category: 'Choosing an agency',
    question: 'What does a Shopify agency in the UK actually do?',
    answer:
      'A Shopify agency designs, builds, launches and looks after Shopify stores for other businesses. In practice that is four jobs: designing the storefront, writing the theme code, wiring up payments, shipping and apps, then supporting the store once real orders arrive. FactoryJet does all four for UK brands, and hands you the code on launch day so you are never tied to us.',
  },
  {
    category: 'Choosing an agency',
    question: 'Is there a Shopify development agency in the UK?',
    answer:
      'Yes, plenty. UK Shopify agencies range from small studios and freelance Shopify developers to large Shopify Plus partners with offices in London, Manchester and abroad. FactoryJet is one of them. The list further up this page names several others, with a note on what each says it is good at, so you can shortlist two or three and compare them on the same questions.',
  },
  {
    category: 'Choosing an agency',
    question: 'What is a Shopify Partner, and what does a Shopify development partner do?',
    answer:
      'A Shopify Partner is a business registered in Shopify’s partner programme that builds stores, themes or apps for merchants. A Shopify development partner is the team that does that build work for you: design, theme code, apps, migrations and support. Shopify’s Partner Directory groups partners into Select, Plus, Premier and Platinum tiers based on their track record, and says partners work independently of Shopify.',
  },
  {
    category: 'Choosing an agency',
    question: 'Is FactoryJet a certified Shopify Partner?',
    answer:
      'FactoryJet is a registered Shopify Partner. We do not claim a Shopify Plus or Platinum tier, because we would rather you trust what you can check. The more useful test for any agency is simple: ask for live stores they built that you can open today, a speed report for each, and the name of the developer who will write your code.',
  },
  {
    category: 'Choosing an agency',
    question: 'Who is the best Shopify agency or Shopify developer in the UK?',
    answer:
      'There is no single best one, only the best fit for your store. A large Shopify Plus partner suits a brand running several countries and a big team. A freelance Shopify developer suits a small, well-defined job. A focused agency like FactoryJet suits a UK brand that wants senior people, a fixed scope and code ownership. Judge each on live work and how clearly they answer your questions.',
  },
  {
    category: 'Choosing an agency',
    question: 'How do I choose the right Shopify agency for my UK business?',
    answer:
      'Judge on evidence, not portfolio screenshots. Ask for live store URLs, a PageSpeed Insights report for each, the name of the person who writes the code, whether the theme repository is yours on launch day, and what happens in the first month after go live. An agency that cannot answer those five on one call will not answer them once your deposit has cleared.',
  },

  /* ── Hiring a developer ── */
  {
    category: 'Hiring a developer',
    question: 'How much does it cost to hire a Shopify developer or Shopify expert in the UK?',
    answer:
      'It depends on five things: how many page templates need custom design, catalogue size and variants, the apps and systems to connect, whether you need Shopify Plus features such as B2B, and whether data is being migrated. A small theme fix is a short fixed job. A full build or migration is a larger fixed-scope project. We quote in writing after a free call, before any work starts.',
  },
  {
    category: 'Hiring a developer',
    question: 'How do I hire a Shopify developer in the UK?',
    answer:
      'There are four routes: a freelancer from a marketplace or the Shopify Partner Directory, an in-house hire, an agency, or a staff augmentation firm. A freelancer is quickest to start and hardest to replace if they go quiet. An in-house hire makes sense once you have a year of steady work. An agency gives you senior people for a project without payroll. FactoryJet gives you a named developer, not a rotating pool.',
  },
  {
    category: 'Hiring a developer',
    question: 'Should I hire a freelance Shopify developer or a Shopify agency?',
    answer:
      'Hire a freelance Shopify developer for a small, clear job such as one new section or a bug fix. Hire an agency when the work needs design, development, testing and launch together, or when you cannot afford the project stalling if one person is ill or busy. Many UK brands use both: an agency for the build and a freelancer for small changes afterwards.',
  },
  {
    category: 'Hiring a developer',
    question: 'What does a Shopify developer do?',
    answer:
      'A Shopify developer builds and changes the code behind a Shopify store. That means writing Liquid, which is Shopify’s theme language, building sections your team can edit, connecting apps through Shopify’s APIs (the links that let software talk to each other), setting up checkout changes, and fixing speed problems. A good one can explain how they would make your product page load faster.',
  },
  {
    category: 'Hiring a developer',
    question: 'Can I hire someone to build or set up my Shopify store for me?',
    answer:
      'Yes. That is the most common reason UK brands contact us. We set up the Shopify account, design and build the theme, import products, set up payments, UK shipping zones and VAT, write the policy pages GOV.UK expects, connect your apps and launch. You get a walkthrough so your team can run the store day to day without calling a developer.',
  },

  /* ── Scope and timeline ── */
  {
    category: 'Scope and timeline',
    question: 'How is a Shopify project quoted?',
    answer:
      'We scope first and quote after. The discovery call covers catalogue size, the templates you need, your apps, your shipping and tax setup, and anything custom. Then you get one written quote for the whole build, split into milestones: a deposit before design, a payment at development kick-off, and the balance at launch. No hourly billing and no surprise invoices in week four.',
  },
  {
    category: 'Scope and timeline',
    question: 'How long does a Shopify store build take?',
    answer:
      'A custom theme on an existing store takes two to three weeks from design sign-off. A full store built from scratch, meaning theme, catalogue, payments, shipping, apps and launch, takes three to five weeks. Shopify Plus and headless Hydrogen builds run six to ten weeks depending on B2B complexity and how many storefronts you need. You get a firm date after discovery.',
  },
  {
    category: 'Scope and timeline',
    question: 'What is included in a standard Shopify build?',
    answer:
      'Figma designs for homepage, product, collection and cart on desktop and mobile, a custom Liquid theme with editable sections, catalogue and collection setup, payment providers, UK shipping zones and VAT settings, app setup styled to your theme, technical SEO, a speed audit before sign-off, and the full theme repository on launch day. Two rounds of design changes happen before any code is written.',
  },
  {
    category: 'Scope and timeline',
    question: 'What does 7-day delivery cover?',
    answer:
      '7-day delivery covers websites and stores of up to five pages: a custom theme applied to an existing store, or a new store with core pages, payment setup and launch. It does not cover complex migrations, multi-storefront Plus builds, or catalogues running to thousands of variants, because those genuinely take longer. We confirm on the discovery call whether your project qualifies before anyone commits to a date.',
  },

  /* ── Platform and Shopify Plus ── */
  {
    category: 'Platform and Shopify Plus',
    question: 'Is Shopify still worth it for a UK business in 2026?',
    answer:
      'For most UK product brands, yes. Shopify handles hosting, security, checkout and updates, so your money goes on selling rather than keeping servers alive. It is weaker when you need very unusual pricing logic, deep ERP control or complex B2B quoting, where Magento or a custom build can fit better. We will tell you honestly if another platform suits you, including WooCommerce.',
  },
  {
    category: 'Platform and Shopify Plus',
    question: 'Do I need Shopify Plus or will standard Shopify do?',
    answer:
      'Standard Shopify handles most UK direct-to-consumer brands well. Move to Plus when you need something only Plus gives you: custom checkout screens through Checkout Extensibility, native B2B with company accounts and payment terms, several storefronts under one admin, or heavy Shopify Flow automation. We make that call with you during discovery and put the reasoning in writing.',
  },
  {
    category: 'Platform and Shopify Plus',
    question: 'What is headless Shopify with Hydrogen?',
    answer:
      'Headless means the storefront is rebuilt as a separate React application using Hydrogen, while Shopify keeps running stock, orders and checkout behind it. You gain faster pages and total design freedom, and you take on a second codebase to maintain. Most smaller UK brands do not need it. It earns its keep when a small gain in conversion is worth more than the extra engineering.',
  },
  {
    category: 'Platform and Shopify Plus',
    question: 'Can you build a Shopify B2B wholesale portal for UK trade customers?',
    answer:
      'Yes. On Shopify Plus we set up native B2B: company accounts, named contacts per company, price lists per customer, net-30 and net-60 payment terms, VAT handling for trade accounts, and a gated trade catalogue. On standard Shopify we build a similar shape with apps for catalogue gating and customer pricing. We have built this kind of wholesale ordering for brands such as Bombay Petals.',
  },
  {
    category: 'Platform and Shopify Plus',
    question: 'Does Shopify have API integration, and can you build custom Shopify apps?',
    answer:
      'Yes to both. Shopify offers GraphQL APIs for the admin and the storefront, so stores can connect to warehouses, ERPs, CRMs and marketplaces. When no App Store app fits your workflow, we build a private app on the Admin API using Shopify’s Polaris design system, so it looks like part of Shopify. Typical jobs: a stock sync, an order feed, or a custom pricing rule.',
  },

  /* ── Migrations ── */
  {
    category: 'Migrations',
    question: 'Can you migrate my WooCommerce or Magento store to Shopify?',
    answer:
      'Yes. WooCommerce and Magento are our most common UK migrations, and we also move stores from BigCommerce, PrestaShop, Wix and Squarespace. We export products with variants, images and custom fields, then customers and order history. Every old URL gets mapped and redirected, and the full checkout is tested on a staging store before the domain moves, so there is no downtime on launch day.',
  },
  {
    category: 'Migrations',
    question: 'Will my Google rankings survive a move to Shopify?',
    answer:
      'They survive when the redirect work happens first. We audit your current URLs, find the product and collection pages that earn UK traffic, and build the redirect map before touching the store. Every changed URL gets a permanent 301 redirect. The new sitemap goes to Google Search Console on launch day and we watch organic traffic for thirty days to catch anything that slipped.',
  },

  /* ── SEO, speed and UK rules ── */
  {
    category: 'SEO, speed and UK rules',
    question: 'Does Shopify do SEO, or do I need a Shopify SEO agency?',
    answer:
      'Shopify gives you the basics: editable titles and descriptions, a sitemap and clean hosting. It does not write your collection pages, fix duplicate variant URLs, add rich product markup properly or plan content. Every FactoryJet build includes technical SEO. Ongoing content and link work is a separate service, which our Shopify SEO team handles if you want it.',
  },
  {
    category: 'SEO, speed and UK rules',
    question: 'What page speed do you build to?',
    answer:
      'We build to Google’s published Core Web Vitals thresholds: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. In practice that means preloading the main image, setting sizes on everything so nothing jumps, delaying scripts that are not needed yet, and removing theme code you never use. The audit runs before handover.',
  },
  {
    category: 'SEO, speed and UK rules',
    question: 'What UK selling rules does a Shopify store need to meet?',
    answer:
      'GOV.UK sets out what any UK online shop must show. Before an order is placed you need your business name, contact details and address, a clear description, the price including all taxes, and delivery costs and timings. You must tell customers they can cancel up to 14 days after delivery, and deliver within 30 days unless you agree otherwise. We build that into the theme and policy pages.',
  },
  {
    category: 'SEO, speed and UK rules',
    question: 'Will AI replace Shopify developers?',
    answer:
      'Not the job that matters. AI tools now write routine Liquid and draft product copy quickly, and we use them for that. What AI does not do well is decide what your product page should argue, catch the edge cases in a migration, or take responsibility when checkout breaks on a bank holiday. Expect faster, better-value builds from developers who use AI, not builds with no developer.',
  },

  /* ── Working with us ── */
  {
    category: 'Working with us',
    question: 'Do I own the theme code afterwards?',
    answer:
      'Yes, all of it. The complete theme repository lands in your GitHub account on launch day: every Liquid template, every section, every line of custom app code. There is no proprietary framework and no FactoryJet subscription keeping your store alive. Any Shopify developer anywhere can pick it up and carry on, which is exactly the position you want to be in.',
  },
  {
    category: 'Working with us',
    question: 'Can I hire someone to manage my Shopify store after launch?',
    answer:
      'Yes. Every project includes thirty days of post-launch support for bugs, small changes and the questions that only surface once real orders arrive. After that you can keep monthly support covering theme work, app updates, Klaviyo changes, seasonal landing pages for peak trading and regular speed checks. It is optional, you can stop any time, and you keep your code either way.',
  },
  {
    category: 'Working with us',
    question: 'Can you work alongside our in-house team?',
    answer:
      'Yes. A good share of our UK work is extra capacity for teams that already have a marketer or a developer. We branch from your repository, raise pull requests your team reviews, and follow the naming and deployment habits you already use. If you run the Shopify GitHub integration with a development theme per branch, we use that rather than making you adopt our setup.',
  },
  {
    category: 'Working with us',
    question: 'How do we start?',
    answer:
      'Book a free thirty minute store audit. We look at your current store or platform, tell you which pages are losing you the most sales and why, and set out what a build would involve. You leave with notes you can act on whether or not you hire us. If it is a fit, the written scope and quote follow within two working days.',
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: TITLE,
    description:
      'A UK Shopify agency and registered Shopify Partner. Expert Shopify developers for custom Liquid themes, Shopify Plus and B2B, migrations from WooCommerce and Magento, and headless Hydrogen. Book a free store audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/uk/shopify-development/shopify-development-og.webp',
        width: 1200,
        height: 630,
        alt: 'A FactoryJet Shopify developer reviewing a product page with a UK brand owner',
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* ─── JSON-LD. The Organization is defined once, sitewide, and only
       referenced here by @id. ─────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-GB',
      dateModified: UPDATED,
      isPartOf: { '@id': 'https://factoryjet.com/#website' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable="true"]'] },
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
      // Every URL here was fetch-verified on 2026-09-24. See SOURCES above.
      citation: SOURCES.map((s) => ({ '@type': 'CreativeWork', name: s.title, url: s.url })),
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Agency UK',
      serviceType: 'Shopify development, Shopify Plus, Shopify migration and Shopify support',
      description:
        'UK Shopify agency and registered Shopify Partner: custom Liquid themes, full store builds, Shopify Plus and B2B, migrations from WooCommerce and Magento, headless Hydrogen, custom apps and monthly support.',
      url: CANONICAL,
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      provider: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#shopify-agencies`,
      name: 'UK Shopify agencies',
      itemListElement: SHOPIFY_AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      // Mapped from the same FAQ_ITEMS array the accordion below renders.
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
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
  ],
};

const tile = { background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' } as const;
const tileLabel = { fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '6px' } as const;
const srcNote = { fontSize: '12px', color: 'var(--n400)', marginTop: '12px' } as const;
const inlineLink = { color: '#B23E13', textDecoration: 'underline' } as const;

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="uk-sdev">
      <main>

{/* Visible trail, same array as the BreadcrumbList JSON-LD above. */}
<Breadcrumbs items={crumbs} />

{/* ════════════════════════════════════════════════
  1. HERO; Light cream, 60/40
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="wrap">
    <div className="col-6040">
      <div>
        <div className="flex-wrap mb-3">
          <span className="chip-green"><span className="dot dot-green"></span>Registered Shopify Partner</span>
          <span className="chip">UK · Shopify agency</span>
        </div>
        <h1>{H1}</h1>
        <p className="lead mt-4" style={{ maxWidth: '580px' }}>
          FactoryJet is a UK Shopify agency. Our Shopify developers design, build, migrate and
          support Shopify stores as your Shopify experts in the UK: custom themes, Shopify Plus and B2B, moves from WooCommerce or
          Magento, and headless builds. One named developer, a fixed written quote, and the code
          is yours on launch day.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '28px' }}>
          <HeroInlineForm region="uk" source="uk_shopify_development_hero" />
          <a href="#services" className="btn btn-outline">See What We Build</a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '24px' }}>
          <span className="trust-pill"><span className="dot dot-green"></span> 500+ businesses served</span>
          <span className="trust-pill"><span className="dot dot-green"></span> Building ecommerce since 2014</span>
          <span className="trust-pill"><span className="dot dot-green"></span> Quoted before work starts</span>
        </div>
      </div>

      <div>
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--n200)' }}>
          <img width="1400" height="933" fetchPriority="high" decoding="async"
            src="/images/uk/shopify-development/shopify-development-hero.webp"
            alt="A FactoryJet Shopify developer reviewing a new product page with the owner of a UK homeware brand"
            style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <ul className="spec-list" style={{ marginTop: '16px' }}>
          <li><strong>Shopify developer UK brands can reach</strong>, in UK hours, from first call to launch</li>
          <li><strong>Theme repository in your GitHub</strong> on launch day</li>
          <li><strong>Speed audit</strong> against Google&#8217;s Core Web Vitals before handover</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
</section>

{/* ════════════════════════════════════════════════
  2. ANSWER FIRST; direct answer straight after the hero
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--white)', borderTop: '1px solid var(--n200)' }}>
  <div className="wrap">
    <div className="col-6040" style={{ alignItems: 'start' }}>
      <div>
        <span className="eyebrow">The short answer</span>
        <h2 style={{ fontSize: 'clamp(1.4rem,2.6vw,1.9rem)', marginBottom: '16px' }}>What does a Shopify agency do?</h2>
        <div className="answer-box" data-speakable="true">
          <p>
            A Shopify agency designs, builds, launches and supports Shopify stores for other
            businesses. FactoryJet is a UK Shopify agency and registered Shopify Partner. Our
            Shopify developers design the storefront, write the theme, set up UK payments, shipping
            and VAT, connect your apps, and hand you the code on launch day. You own everything we
            build.
          </p>
        </div>
        <h3 style={{ fontSize: '15px', marginTop: '28px', marginBottom: '12px' }}>What you get from a FactoryJet Shopify engagement</h3>
        <ul className="spec-list">
          <li><strong>Figma designs first</strong> for homepage, product, collection and cart, on desktop and mobile</li>
          <li><strong>A custom Liquid theme</strong> with sections your marketer can rearrange without a developer</li>
          <li><strong>UK trading setup</strong> covering VAT, shipping zones, Royal Mail and DPD rates, Klarna and Clearpay</li>
          <li><strong>Technical SEO built in</strong>, including Product and BreadcrumbList structured data</li>
          <li><strong>A speed audit before handover</strong>, measured against Google&#8217;s Core Web Vitals</li>
          <li><strong>The full theme repository</strong> in your own GitHub account on launch day</li>
          <li><strong>Thirty days of support</strong> with the developer who wrote the code, then optional monthly support</li>
        </ul>
      </div>

      <div>
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--n200)' }}>
          <img width="1200" height="800" loading="lazy" decoding="async"
            src="/images/uk/shopify-development/shopify-development-team.webp"
            alt="FactoryJet Shopify designers walking through a product page wireframe before any code is written"
            style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }}>
          <div style={tile}>
            <div className="stat-num" style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}>500+</div>
            <div style={tileLabel}>Businesses served</div>
          </div>
          <div style={tile}>
            <div className="stat-num" style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}>2014</div>
            <div style={tileLabel}>Building ecommerce since</div>
          </div>
          <div style={tile}>
            <div className="stat-num" style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}>28.8%</div>
            <div style={tileLabel}>GB retail sales online, ONS</div>
          </div>
          <div style={tile}>
            <div className="stat-num" style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}>14 days</div>
            <div style={tileLabel}>UK right to cancel, GOV.UK</div>
          </div>
        </div>
        <p style={srcNote}>
          Online share of Great Britain retail sales, August 2026:{' '}
          <a href="https://www.ons.gov.uk/businessindustryandtrade/retailindustry/bulletins/retailsales/august2026" target="_blank" rel="noopener" style={inlineLink}>Office for National Statistics</a>.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  3. SHOPIFY PARTNER, EXPLAINED HONESTLY; 60/40 editorial
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-6040">
      <div>
        <span className="eyebrow">SHOPIFY PARTNER UK</span>
        <h2 style={{ marginBottom: '20px' }}>Choosing a Shopify development partner: what the Partner label does and does not prove</h2>
        <p className="lead" style={{ marginBottom: '20px' }}>Anyone can type &#8220;Shopify expert&#8221; into a website. A Shopify Partner is a business registered in Shopify&#8217;s partner programme to build for merchants. Shopify&#8217;s own directory then groups partners into Select, Plus, Premier and Platinum tiers based on their track record. FactoryJet is a registered Shopify Partner. We do not claim a tier, and you should check the claims of any agency you shortlist, including ours.</p>

        <div className="flex-wrap" style={{ marginBottom: '24px' }}>
          <span className="chip">Custom Liquid Theme</span>
          <span className="chip">Shopify Plus</span>
          <span className="chip">Checkout Extensibility</span>
          <span className="chip">Hydrogen Headless</span>
          <span className="chip">B2B Portal</span>
          <span className="chip">Store Migration</span>
        </div>

        <div className="stack">
          <p>Shopify is the platform many UK online shops run on, and the default themes are competent. Competent is the problem. A stock Dawn install is built to work for a candle shop, a bike shop and a band&#8217;s merchandise page at the same time, so it argues for none of them. A custom theme from a Shopify development partner is what buys you a store that argues for your products.</p>
          <div className="pull-quote">The theme is your best salesperson. A generic one works against you.</div>
          <p>We design in Figma first, get every page signed off, and only then write Liquid. Fixing a layout in a design file takes an afternoon. Fixing it in week three of engineering takes a week. We work with UK brands in London, Manchester, Birmingham, Leeds, Nottingham, Edinburgh and Glasgow, mostly remotely with calls in UK hours.</p>

          <h3 style={{ fontSize: '15px', marginTop: '8px', marginBottom: '10px' }}>Four ways UK brands start with us</h3>
          <ol className="spec-list">
            <li><strong>A custom theme on the store you already run.</strong> Nothing is migrated, nothing goes down, the catalogue stays where it is.</li>
            <li><strong>A full store built from scratch.</strong> Empty Shopify admin to first order, including UK payments, shipping and VAT.</li>
            <li><strong>A migration from WooCommerce or Magento.</strong> Redirect map first, domain switch last, rankings protected.</li>
            <li><strong>Shopify Plus with B2B, or a headless Hydrogen storefront.</strong> For brands who have genuinely run out of room.</li>
          </ol>
        </div>
      </div>

      <div className="card card-top-orange">
        <p className="eyebrow">CHECK ANY SHOPIFY PARTNER IN 10 MINUTES</p>
        <p className="pull-quote" style={{ fontSize: '17px' }}>Claims are cheap. Live URLs are not.</p>
        <ol className="spec-list" style={{ marginTop: '16px' }}>
          <li><strong>Find them in the Shopify Partner Directory</strong> and note the tier it shows, if any</li>
          <li><strong>Open three live stores</strong> they built, on your phone, not in a slide deck</li>
          <li><strong>Run each through PageSpeed Insights</strong> and read the mobile Core Web Vitals</li>
          <li><strong>Ask who writes the code</strong>, and whether that person is on the first call</li>
          <li><strong>Ask where the theme repository lives</strong> on launch day, and who owns it</li>
          <li><strong>Ask what the first month after launch includes</strong>, in writing</li>
        </ol>
        <p style={srcNote}>
          Tiers and advice from the{' '}
          <a href="https://www.shopify.com/partners/directory" target="_blank" rel="noopener" style={inlineLink}>Shopify Partner Directory</a>, which says partners work independently of Shopify.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  4. THE PROBLEM; 3 pillars (light)
════════════════════════════════════════════════ */}
<section className="light-sec">
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
      <span className="eyebrow">THE PROBLEM</span>
      <h2 style={{ marginTop: '12px' }}>Your Shopify store looks fine. That is not the same as selling well.</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Three things separate a store that converts from one that only looks the part. None of them show up in a screenshot, which is why they survive so long.</p>
    </div>
    <div className="col-3">
      <div className="light-card">
        <h3 style={{ marginBottom: '12px' }}>Slow themes lose mobile buyers</h3>
        <p style={{ marginBottom: '14px' }}>Google publishes the bar a page has to clear before the experience counts as good. Many theme-store installs miss it on mobile once apps and hero video are added.</p>
        <ul className="spec-list">
          <li>Largest Contentful Paint within <strong>2.5 seconds</strong></li>
          <li>Interaction to Next Paint under <strong>200 milliseconds</strong></li>
          <li>Cumulative Layout Shift under <strong>0.1</strong></li>
          <li>Measured on real Chrome data, not a lab test on your laptop</li>
        </ul>
        <p style={srcNote}>
          Thresholds per{' '}
          <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener" style={inlineLink}>Google Search Central</a>.
        </p>
      </div>
      <div className="light-card">
        <h3 style={{ marginBottom: '12px' }}>Default product pages say nothing</h3>
        <p style={{ marginBottom: '14px' }}>A stock layout is built to work for any shop, which means it argues for none of them. A product page has a job, and the default template does not know what yours is.</p>
        <ul className="spec-list">
          <li>Trust signals below the fold where nobody sees them</li>
          <li>Delivery and returns buried in a footer link</li>
          <li>No answer to the one objection your buyers actually raise</li>
          <li>An add-to-basket button competing with three other buttons</li>
        </ul>
      </div>
      <div className="light-card">
        <h3 style={{ marginBottom: '12px' }}>Agencies that vanish after launch</h3>
        <p style={{ marginBottom: '14px' }}>The build is the easy part. The hard part is the first month of real orders, the app that breaks after an update, and the peak-season change nobody planned for.</p>
        <ul className="spec-list">
          <li>Scope written down before anyone starts</li>
          <li>Fixed milestones tied to delivered work</li>
          <li>The same developer reachable after go live</li>
          <li>Monthly support optional, never a condition of launch</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  5. PROCESS; 5 stages
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
      <span className="eyebrow">OUR PROCESS</span>
      <h2 style={{ marginTop: '12px' }}>How our Shopify developers take a store from audit to launch, in five stages</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Design signed off before engineering. Staging store before the domain moves. Speed audit before sign-off. Every stage ends with something you can look at.</p>
    </div>
    <ol className="process-grid">
      <li style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">01</span>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Discover</h3>
        <p style={{ fontSize: '14px', marginBottom: '12px' }}>A thirty minute store audit before anything is scoped.</p>
        <ul className="spec-list">
          <li>Current platform, catalogue and apps reviewed</li>
          <li>Analytics read together on the call</li>
          <li>The templates you actually need agreed</li>
          <li>Written scope and quote within two working days</li>
        </ul>
      </li>
      <li style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">02</span>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Design</h3>
        <p style={{ fontSize: '14px', marginBottom: '12px' }}>Figma first, so wrong turns cost an afternoon rather than a week.</p>
        <ul className="spec-list">
          <li>Homepage, product, collection and cart, desktop and mobile</li>
          <li>Sections designed to match what the theme editor exposes</li>
          <li>Two revision rounds included</li>
          <li>Written sign-off before any Liquid is written</li>
        </ul>
      </li>
      <li style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">03</span>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Build</h3>
        <p style={{ fontSize: '14px', marginBottom: '12px' }}>Visible progress, not a black box for three weeks.</p>
        <ul className="spec-list">
          <li>Staging store you can open within 48 hours</li>
          <li>Daily commits to your GitHub repository</li>
          <li>Products, collections and metafields set up</li>
          <li>Apps installed and restyled to match the theme</li>
        </ul>
      </li>
      <li style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">04</span>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Test</h3>
        <p style={{ fontSize: '14px', marginBottom: '12px' }}>The boring stage that stops launch day going wrong.</p>
        <ul className="spec-list">
          <li>Full checkout run on Shop Pay, PayPal and card</li>
          <li>iOS and Android, Chrome, Safari and Firefox</li>
          <li>Speed audit against Core Web Vitals</li>
          <li>Order and shipping emails proofread</li>
        </ul>
      </li>
      <li style={{ padding: '24px', background: 'rgba(240,90,40,.06)', borderRadius: '16px', border: '1px solid rgba(240,90,40,.22)' }}>
        <span className="stage-num">05</span>
        <h3 style={{ fontSize: '16px', marginBottom: '10px', color: '#B23E13' }}>Launch and support</h3>
        <p style={{ fontSize: '14px', marginBottom: '12px' }}>Handover, not a disappearance.</p>
        <ul className="spec-list">
          <li>Domain switch with redirects already live</li>
          <li>Google Analytics 4 and Search Console set up</li>
          <li>Recorded walkthrough you can replay</li>
          <li>Thirty days of support with the same developer</li>
        </ul>
      </li>
    </ol>
    <p style={{ marginTop: '24px', fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--n400)' }}>5 stages · 3 to 5 weeks for a standard build · Figma approval before build · no downtime at launch</p>
  </div>
</section>

{/* ════════════════════════════════════════════════
  6. SERVICES GRID; What we build
════════════════════════════════════════════════ */}
<section id="services" className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
      <span className="eyebrow">SHOPIFY WEBSITE DEVELOPMENT SERVICES</span>
      <h2 style={{ marginTop: '12px' }}>Eight Shopify website development services UK brands hire us for</h2>
      <p className="lead" style={{ marginTop: '16px' }}>From a custom theme on a store you already run to a Shopify Plus B2B platform. Each lists what is actually delivered, so you can compare us with another quote line by line.</p>
    </div>
    <ul className="svc-grid">
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 01</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Custom Shopify theme development</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>A theme designed in Figma, then written in Liquid with sections your team edits from the theme editor.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Figma designs for four core templates</li>
          <li>Custom Liquid theme with editable sections</li>
          <li>Reusable blocks for landing pages</li>
          <li>Theme repository in your GitHub on launch day</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 02</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Full Shopify store setup and launch</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>From an empty Shopify admin to a store taking real orders, set up for UK trading rather than default settings.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Catalogue import with variants and custom fields</li>
          <li>Shop Pay, PayPal, Klarna and Clearpay</li>
          <li>UK shipping zones with Royal Mail and DPD rates</li>
          <li>VAT settings and the policy pages GOV.UK requires</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 03</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify Plus development</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>For UK merchants who have outgrown standard Shopify. We tell you plainly when you have not. <a href="/uk/shopify-plus" style={inlineLink}>More on Shopify Plus</a>.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Custom checkout through Checkout Extensibility</li>
          <li>Several storefronts from one admin</li>
          <li>Shopify Flow automation for back-office work</li>
          <li>Upgrade plan from standard Shopify</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 04</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify B2B and wholesale</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>Trade ordering alongside retail, in one store. See our wider <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce</a> work.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Company accounts with named contacts</li>
          <li>Price lists per customer, net-30 or net-60 terms</li>
          <li>VAT handling for trade accounts</li>
          <li>Gated trade catalogue and quick order forms</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 05</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Store migrations to Shopify</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>Moving off <a href="/uk/woocommerce" style={inlineLink}>WooCommerce</a>, <a href="/uk/magento" style={inlineLink}>Magento</a>, BigCommerce or a hand-built platform, with rankings protected.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Products, customers and order history carried across</li>
          <li>Signed-off redirect map before anything changes</li>
          <li>Checkout tested on staging with real cards</li>
          <li>Thirty days of Search Console monitoring</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 06</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Headless Shopify with Hydrogen</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>A React storefront on Shopify&#8217;s Storefront API, for brands where a small conversion gain is worth a second codebase.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Hydrogen storefront with server rendering</li>
          <li>Shopify kept as the source of truth for stock</li>
          <li>Native Shopify checkout</li>
          <li>Deployment pipeline your team can run</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 07</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>App integration and custom apps</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>App Store apps styled to belong in your theme, and private apps when nothing off the shelf fits.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Reviews, subscriptions and loyalty apps set up</li>
          <li>Klaviyo flows matched to your brand</li>
          <li>ERP, warehouse and marketplace connections</li>
          <li>Private apps on the GraphQL Admin API</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 08</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Monthly Shopify support</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>The same developers after launch, for the changes a live store always needs. Optional, and you can stop any time.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Theme changes and new sections</li>
          <li>App and Shopify update checks</li>
          <li>Seasonal and peak-trading landing pages</li>
          <li>Regular speed and checkout reviews</li>
        </ul>
      </li>
    </ul>
  </div>
</section>

{/* ════════════════════════════════════════════════
  7. WHAT DRIVES COST; no prices, just the drivers
════════════════════════════════════════════════ */}
<section className="stats-band">
  <div className="wrap">
    <div className="col-6040" style={{ alignItems: 'start' }}>
      <div>
        <span className="eyebrow">WHAT A SHOPIFY BUILD COSTS</span>
        <h2 style={{ marginTop: '12px', marginBottom: '16px' }}>What decides the cost of hiring a Shopify agency or expert</h2>
        <p style={{ marginBottom: '16px' }}>Most people ask about cost first, so here is the honest answer: it depends on scope, and scope is knowable. These six things decide how big a project is. We walk through each on the audit call and quote a fixed figure in writing, before you commit to anything.</p>
        <ol className="spec-list">
          <li><strong>Design depth.</strong> How many page templates need their own custom design, not just a colour change.</li>
          <li><strong>Catalogue shape.</strong> Number of products, variants, bundles and custom fields to set up or move.</li>
          <li><strong>Integrations.</strong> Each system that must talk to Shopify, such as an ERP, warehouse, CRM or marketplace.</li>
          <li><strong>Plan and features.</strong> Whether you need Shopify Plus features like B2B, custom checkout or several storefronts.</li>
          <li><strong>Migration.</strong> Moving data and redirects from WooCommerce, Magento or another platform adds planning and testing.</li>
          <li><strong>Support after launch.</strong> A one-off build, or a build followed by monthly support.</li>
        </ol>
      </div>
      <div className="card">
        <span className="panel-title">Three engagement shapes</span>
        <div className="scorecard-row">
          <div>
            <div className="scorecard-metric">Fixed-scope fix</div>
            <div className="scorecard-note">A speed audit, a new section, a checkout tidy-up before peak trading, or finishing a theme someone abandoned</div>
          </div>
        </div>
        <div className="scorecard-row">
          <div>
            <div className="scorecard-metric">Fixed-scope build or migration</div>
            <div className="scorecard-note">Design to launch, milestone payments, one written quote for the whole project</div>
          </div>
        </div>
        <div className="scorecard-row">
          <div>
            <div className="scorecard-metric">Monthly support</div>
            <div className="scorecard-note">The same developers each month for changes, apps and speed checks. Optional after any build</div>
          </div>
        </div>
        <div style={{ marginTop: '16px' }}>
          <ModalCTAButton label="Talk to the Founder" region="uk" modalVariant="default" btnVariant="primary-light" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  8. TECH STACK; Reversed 40/60
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-4060">
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--n100)' }}>
          <span className="eyebrow" style={{ marginBottom: '0' }}>Shopify Tech Stack</span>
        </div>
        <div style={{ padding: '0 24px' }}>
          <div className="scorecard-row"><div className="scorecard-metric">Storefront</div><div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Shopify Liquid, Hydrogen (React)</div></div>
          <div className="scorecard-row"><div className="scorecard-metric">Design</div><div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Figma</div></div>
          <div className="scorecard-row"><div className="scorecard-metric">Email</div><div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Klaviyo flows and segments</div></div>
          <div className="scorecard-row"><div className="scorecard-metric">Subscriptions</div><div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>ReCharge, Skio</div></div>
          <div className="scorecard-row"><div className="scorecard-metric">Reviews</div><div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Yotpo, Okendo, Judge.me</div></div>
          <div className="scorecard-row"><div className="scorecard-metric">Shipping</div><div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>ShipStation, Royal Mail, DPD</div></div>
          <div className="scorecard-row"><div className="scorecard-metric">Analytics</div><div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>GA4, Search Console, Meta Pixel</div></div>
        </div>
      </div>

      <div>
        <span className="eyebrow">OUR TECH STACK</span>
        <h2 style={{ marginBottom: '20px' }}>What our Shopify experts build with, and why fewer apps is better</h2>
        <p className="lead" style={{ marginBottom: '20px' }}>We build in Liquid and Hydrogen, Shopify&#8217;s own tools, so your theme runs at platform speed rather than plugin speed. Every app you install adds script weight, so we write a section properly before reaching for another app.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={tile}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Shopify Liquid</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Clean, commented Liquid with custom sections. Your team edits from the theme editor, no code needed.</p>
          </div>
          <div style={tile}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Shopify Hydrogen</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Headless React on the Storefront API, for brands that need total design freedom.</p>
          </div>
          <div style={tile}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Checkout Extensibility</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Custom checkout and post-purchase screens on Shopify Plus, the route Shopify now supports for checkout changes.</p>
          </div>
          <div style={tile}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>AI where it helps</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>We use AI tools for routine code and product data clean-up, and senior developers review every line.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  8b. MID-PAGE CTA
════════════════════════════════════════════════ */}
<MidPageCTA
  headline={'Get a free Shopify store audit'}
  sub={'Thirty minutes on a call. We open your current store, tell you which pages are losing you the most sales and why, and set out what a build or a fix would involve. You keep the notes whether or not you hire us.'}
  label={'Book a Shopify store audit'}
  note={'Bhavesh replies within one business day.'}
/>

{/* ════════════════════════════════════════════════
  9. UK MARKET CONTEXT; every figure traceable to a source below
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div className="col-6040" style={{ alignItems: 'start' }}>
      <div>
        <span className="eyebrow">THE UK MARKET</span>
        <h2 style={{ marginTop: '12px' }}>Almost three in every ten pounds of UK retail now goes online</h2>
        <div className="stack" style={{ marginTop: '20px' }}>
          <p className="lead">
            The Office for National Statistics puts the share of Great Britain retail sales made
            online at 28.8% in August 2026, up from 28.4% in July. Online spending was 10.1% higher
            than in the same three months a year earlier. It is a large, mature market, so growth
            mostly comes from winning a bigger share of the same shoppers.
          </p>
          <div className="pull-quote">Same traffic. Better storefront. More orders.</div>
          <p>
            That is a storefront problem more than a traffic problem: what your product page argues,
            how fast it loads on a phone, and whether a shopper can find delivery cost without
            hunting. It is also why the UK selling rules below belong in the theme, not in a policy
            page nobody reads.
          </p>
        </div>

        <h3 style={{ fontSize: '15px', marginTop: '28px', marginBottom: '12px' }}>What GOV.UK requires a UK online shop to show</h3>
        <ul className="spec-list">
          <li>Your business name, contact details and address</li>
          <li>A clear description of what is being sold</li>
          <li>The price, <strong>including all taxes</strong>, and delivery costs</li>
          <li>How long delivery takes, and how the customer pays and cancels</li>
          <li>That they can cancel up to <strong>14 days after delivery</strong></li>
          <li>Delivery within <strong>30 days</strong> unless you agree otherwise</li>
        </ul>
        <p style={srcNote}>
          Sources:{' '}
          <a href="https://www.ons.gov.uk/businessindustryandtrade/retailindustry/bulletins/retailsales/august2026" target="_blank" rel="noopener" style={inlineLink}>ONS, Retail sales August 2026</a>;{' '}
          <a href="https://www.gov.uk/online-and-distance-selling-for-businesses" target="_blank" rel="noopener" style={inlineLink}>GOV.UK, Online and distance selling for businesses</a>.
        </p>
      </div>

      <div>
        <div className="panel">
          <span className="panel-title">Where our UK Shopify clients are</span>
          <ul className="spec-list">
            <li>London and the South East</li>
            <li>Manchester, Liverpool and the North West</li>
            <li>Birmingham and the West Midlands</li>
            <li>Leeds, Sheffield and Yorkshire</li>
            <li>Nottingham and the East Midlands</li>
            <li>Bristol and the South West</li>
            <li>Edinburgh and Glasgow</li>
          </ul>
        </div>
        <div className="panel" style={{ marginTop: '16px' }}>
          <span className="panel-title">A worked example, not a forecast</span>
          <p style={{ fontSize: '13px', marginBottom: '12px' }}>Conversion rate is the share of visitors who buy. Take a shop with 5,000 visits a month.</p>
          <ul className="spec-list">
            <li>At <strong>1.0%</strong>, that is 50 orders a month</li>
            <li>At <strong>2.0%</strong>, the same visits produce 100 orders</li>
            <li>Doubling the rate doubles orders with no extra traffic</li>
          </ul>
          <p style={srcNote}>Illustrative arithmetic only. We run your real numbers with you on the audit call.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  10. COMPARISON TABLE
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '40px' }}>
      <span className="eyebrow">HOW THE OPTIONS COMPARE</span>
      <h2 style={{ marginTop: '12px' }}>Shopify agency, freelance Shopify developer, in-house hire or DIY theme</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Four routes, each sensible for someone. Here is what the choice actually looks like side by side, including the places we are not the obvious answer.</p>
    </div>
    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table className="cmp-table" style={{ minWidth: '700px' }}>
        <thead>
          <tr>
            <th style={{ width: '28%' }}>What you get</th>
            <th className="fj">Shopify agency (FactoryJet)</th>
            <th>Freelance Shopify developer</th>
            <th>In-house developer</th>
            <th>DIY theme store</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="feat">Best for</td><td className="fj">Builds, migrations, Plus and B2B</td><td>Small, clear jobs</td><td>A year or more of steady work</td><td>Very early stores</td></tr>
          <tr><td className="feat">Custom Figma design</td><td className="fj yes">✓ Yes</td><td className="partial">Sometimes</td><td className="partial">Depends on hire</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Design, code, testing and launch in one team</td><td className="fj yes">✓ Yes</td><td className="no">✗ One person</td><td className="partial">Partial</td><td className="no">✗ You do it</td></tr>
          <tr><td className="feat">Cover if someone is ill or leaves</td><td className="fj yes">✓ Yes</td><td className="no">✗ Rarely</td><td className="partial">Only with a team</td><td className="no">N/A</td></tr>
          <tr><td className="feat">Shopify Plus and B2B</td><td className="fj yes">✓ Yes</td><td className="partial">Varies</td><td className="partial">Varies</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Migration with redirect map</td><td className="fj yes">✓ Yes</td><td className="partial">Varies</td><td className="partial">Varies</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Speed audit before handover</td><td className="fj yes">✓ Always</td><td className="partial">Varies</td><td className="partial">Varies</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Code ownership</td><td className="fj yes">✓ Your GitHub, launch day</td><td className="yes">✓ Usually</td><td className="yes">✓ Yes</td><td className="partial">Theme licence</td></tr>
          <tr><td className="feat">How you pay</td><td className="fj">Fixed quote, milestones</td><td>Hourly or fixed</td><td>Salary and overheads</td><td>One-off theme licence</td></tr>
          <tr><td className="feat">Typical time to launch</td><td className="fj">3 to 5 weeks</td><td>Varies with availability</td><td>After hiring and onboarding</td><td>Days, if you do it yourself</td></tr>
        </tbody>
      </table>
    </div>
    <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '16px' }}>General guide, not a verdict on any one freelancer or agency. Many UK brands combine routes: an agency for the build, then a freelancer or in-house person for small changes.</p>
  </div>
</section>

{/* ════════════════════════════════════════════════
  11. NAMED UK SHOPIFY AGENCIES (self-disclosure, ItemList)
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '760px' }}>
      <span className="eyebrow">THE HONEST LANDSCAPE</span>
      <h2 style={{ marginTop: '12px' }}>UK Shopify agencies and Shopify partners worth knowing</h2>
      <p className="lead mt-4">
        We are one option, not the only one. These UK Shopify agencies show up when people search for
        a Shopify agency in the UK or London, or ask AI assistants for one. Each note is based on
        what the company says on its own website. Talk to two or three and pick the fit.
      </p>
    </div>
    <ol className="stack mt-8" style={{ maxWidth: '900px' }}>
      {SHOPIFY_AGENCIES.map((a, i) => (
        <li key={a.name} className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
          <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: '15px', color: '#B23E13', minWidth: '30px' }}>{i + 1}</span>
          <div>
            <h3 style={{ fontSize: '18px' }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: 'var(--fm)', fontSize: '10px', background: '#B23E13', color: '#fff', borderRadius: '999px', padding: '2px 8px', marginLeft: '8px', verticalAlign: 'middle' }}>That is us</span>}</h3>
            <p style={{ marginTop: '6px' }}>{a.note}</p>
          </div>
        </li>
      ))}
    </ol>
    <p style={srcNote}>
      Agencies named from live UK search results for Shopify agency queries, September 2026. Notes reflect each company&#8217;s own homepage on 24 September 2026. Partner tiers are as each company states them; check the{' '}
      <a href="https://www.shopify.com/partners/directory" target="_blank" rel="noopener" style={inlineLink}>Shopify Partner Directory</a> to confirm. Listing is not endorsement.
    </p>
  </div>
</section>

{/* ════════════════════════════════════════════════
  12. HIRE SECTION + FOUNDER
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-6040">
      <div>
        <span className="eyebrow">HIRE A SHOPIFY DEVELOPER UK</span>
        <h2 style={{ marginBottom: '20px' }}>Shopify developers UK brands can actually reach</h2>
        <div className="stack">
          <p className="lead">Most UK brands are not looking for a marketplace gig. They want Shopify store developers who have shipped stores that take real money, and who answer a message on a Tuesday afternoon. Every FactoryJet engagement gives you one named developer who designs, builds and launches the store, then stays reachable afterwards.</p>

          <h3 style={{ fontSize: '15px', marginTop: '4px', marginBottom: '10px' }}>When UK teams bring us in</h3>
          <ul className="spec-list">
            <li>You have outgrown a theme-store template and need a custom build</li>
            <li>You are moving from WooCommerce or Magento and want it done properly</li>
            <li>Your in-house team needs a Shopify developer for extra capacity</li>
            <li>A previous agency or freelancer went quiet mid-project</li>
            <li>You need Shopify Plus for B2B, checkout changes or several storefronts</li>
            <li>Peak trading is coming and the checkout has never been stress tested</li>
          </ul>

          <h3 style={{ fontSize: '15px', marginTop: '20px', marginBottom: '10px' }}>What we will not do</h3>
          <ul className="spec-list is-excluded">
            <li>Bill you by the hour, which pays us more when work takes longer</li>
            <li>Sell you Shopify Plus when standard Shopify covers what you need</li>
            <li>Hold the theme repository behind a support contract</li>
            <li>Bolt on twelve apps instead of writing the section properly</li>
            <li>Promise a search ranking by a fixed date, because nobody can</li>
          </ul>

          <div className="panel" style={{ marginTop: '20px' }}>
            <span className="panel-title">Related UK services</span>
            <ul className="spec-list">
              <li><a href="/uk/shopify-plus" style={inlineLink}>Shopify Plus agency UK</a></li>
              <li><a href="/uk/ecommerce-development" style={inlineLink}>Ecommerce development across platforms</a></li>
              <li><a href="/uk/woocommerce" style={inlineLink}>WooCommerce development</a></li>
              <li><a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce</a></li>
              <li><a href="/uk/ecommerce-consultant" style={inlineLink}>Ecommerce consultant, before you choose a platform</a></li>
              <li><a href="/uk/shopify-seo" style={inlineLink}>Shopify SEO</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#B23E13', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', flexShrink: '0' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '26px', fontWeight: '800', color: '#fff', lineHeight: '1' }}>B</span>
        </div>
        <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Bhavesh Barot</h3>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '11px', color: 'var(--n400)', letterSpacing: '.10em', textTransform: 'uppercase', marginBottom: '16px' }}>Founder &amp; CEO · FactoryJet</p>
        <div style={{ background: 'var(--cream)', borderRadius: '12px', padding: '16px', marginBottom: '20px', textAlign: 'left' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6' }}>&#8220;We have built ecommerce since 2014. The build is never the hard part. Being there in month two, when real orders expose what nobody planned for, is what I hold every project to.&#8221;</p>
        </div>
        <ModalCTAButton label="Talk to the Founder" region="uk" modalVariant="default" btnVariant="primary-light" />
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '12px' }}>30-minute free store audit. No pitch. No pressure.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  13. WHY FACTORYJET + CLIENT VOICE (light)
════════════════════════════════════════════════ */}
<section className="light-sec">
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
      <span className="eyebrow">WHY FACTORYJET</span>
      <h2 style={{ marginTop: '12px' }}>500+ businesses served. Three habits that make projects land on time.</h2>
    </div>
    <div className="col-3">
      <div className="light-card">
        <h3 style={{ marginBottom: '12px' }}>Design for the decision, not the screenshot</h3>
        <ul className="spec-list">
          <li>Trust signals placed where the hesitation happens</li>
          <li>Delivery cost and timing on the product page</li>
          <li>Review count near the price, where it does work</li>
          <li>One main action per screen</li>
        </ul>
      </div>
      <div className="light-card">
        <h3 style={{ marginBottom: '12px' }}>Figma approval before a line of Liquid</h3>
        <ul className="spec-list">
          <li>Every key page drawn and signed off first</li>
          <li>Two revision rounds before build starts</li>
          <li>Written sign-off, not a remembered call</li>
          <li>Sections designed to match the theme editor</li>
        </ul>
      </div>
      <div className="light-card">
        <h3 style={{ marginBottom: '12px' }}>Your code, your GitHub, launch day</h3>
        <ul className="spec-list">
          <li>Every Liquid template and section</li>
          <li>Custom app source, where we built one</li>
          <li>A README covering setup and deployment</li>
          <li>Admin and app access transferred to you</li>
        </ul>
      </div>
    </div>
    <div className="result-card" style={{ maxWidth: '820px', marginTop: '32px' }}>
      <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>&#8220;We were live in 6 days, I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed lightning fast.&#8221;</p>
      <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
        <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Ricky B, Founder, Belle Maison</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Artificial plants and home décor, direct to consumer. Store built on Commerceflo.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  14. FAQ. Rendered from FAQ_ITEMS, the same array the FAQPage
      JSON-LD above maps. There is no second copy of this content.
════════════════════════════════════════════════ */}
<section id="faq" className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '680px' }}>
      <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
      <h2 style={{ marginTop: '12px' }}>What UK brands ask before hiring a Shopify agency or developer</h2>
      <p className="lead" style={{ marginTop: '16px' }}>
        {FAQ_ITEMS.length} questions, answered the way we answer them on a discovery call.
        No &#8220;it depends&#8221; without saying what it depends on.
      </p>
    </div>

    <nav className="faq-pill-nav" aria-label="FAQ categories">
      {FAQ_CATEGORIES.map((cat) => (
        <a key={cat.id} href={`#${cat.id}`}>
          {cat.label}{' '}
          <span className="pill-count">{FAQ_ITEMS.filter((f) => f.category === cat.label).length}</span>
        </a>
      ))}
    </nav>

    <div className="faq-grid">
      <aside className="faq-sidebar" aria-label="FAQ navigation">
        <span className="faq-sidebar-topics">Topics</span>
        <nav className="faq-sidebar-nav">
          {FAQ_CATEGORIES.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`}>
              {cat.label}
              <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === cat.label).length}</span>
            </a>
          ))}
        </nav>
        <div className="faq-sidebar-cta">
          <a href={CALENDLY}>Can&#8217;t find it? Talk to the founder &#8594;</a>
          <p>{FAQ_ITEMS.length} questions answered</p>
        </div>
      </aside>

      <div>
        {FAQ_CATEGORIES.map((cat) => {
          const items = FAQ_ITEMS.filter((f) => f.category === cat.label);
          if (items.length === 0) return null;
          return (
            <div key={cat.id} id={cat.id} style={{ marginBottom: '40px', scrollMarginTop: '112px' }}>
              <div className="faq-cat-header">
                <div className="faq-cat-bar"></div>
                <p className="faq-cat-label">{cat.label}</p>
              </div>
              <ul className="faq-list">
                {items.map((f) => (
                  <li key={f.question}>
                    <details className="faq-item">
                      <summary>
                        <span className="q-text">{f.question}</span>
                        <span className="chevron" aria-hidden="true">
                          <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </summary>
                      <div className="faq-ans"><p>{f.answer}</p></div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  15. SOURCES. Every URL below returned HTTP 200 on 2026-09-24 and
      the wording we rely on was confirmed in the fetched page body.
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--cream)', borderTop: '1px solid var(--n200)' }}>
  <div className="wrap">
    <div className="col-4060">
      <div>
        <span className="eyebrow">Sources</span>
        <h2 style={{ fontSize: 'clamp(1.4rem,2.6vw,1.9rem)', marginTop: '8px' }}>Where the facts on this page come from</h2>
        <p style={{ marginTop: '14px', maxWidth: '38ch' }}>
          Every figure quoted above traces to a primary source you can open yourself. If a claim on
          an agency page has no link behind it, treat it as marketing rather than fact.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '14px' }}>Checked {UPDATED}.</p>
      </div>
      <ol className="srcs">
        {SOURCES.map((s) => (
          <li key={s.id}>
            <a href={s.url} target="_blank" rel="noopener">{s.title}</a>
            <span className="pub">{s.label}</span>
            <p>{s.note}</p>
          </li>
        ))}
      </ol>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  16. AUTHOR
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '680px', marginBottom: '24px' }}>
      <span className="eyebrow">Who wrote this</span>
      <h2 style={{ fontSize: 'clamp(1.4rem,2.6vw,1.9rem)', marginTop: '8px' }}>The person accountable for this page</h2>
    </div>
    <AuthorCard variant="light" />
  </div>
</section>

{/* ════════════════════════════════════════════════
  17. UK CITIES + RELATED; internal linking
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--cream)' }}>
  <div className="wrap">
    <span className="eyebrow">Serving the UK</span>
    <h2 style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', marginTop: '8px', marginBottom: '24px' }}>Shopify developers for UK brands, from London to Leeds and Nottingham</h2>
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', listStyle: 'none', margin: 0, padding: 0 }}>
      <li><a href="/uk/london" className="city-pill">London</a></li>
      <li><a href="/uk/manchester" className="city-pill">Manchester</a></li>
      <li><a href="/uk/birmingham" className="city-pill">Birmingham</a></li>
      <li><a href="/uk/leeds" className="city-pill">Leeds</a></li>
      <li><a href="/uk/bristol" className="city-pill">Bristol</a></li>
      <li><a href="/uk/sheffield" className="city-pill">Sheffield</a></li>
      <li><a href="/uk/liverpool" className="city-pill">Liverpool</a></li>
      <li><a href="/uk/edinburgh" className="city-pill">Edinburgh</a></li>
      <li><a href="/uk/glasgow" className="city-pill">Glasgow</a></li>
      <li><a href="/uk/nottingham" className="city-pill">Nottingham</a></li>
    </ul>
    <h3 style={{ fontSize: '16px', marginTop: '40px', marginBottom: '16px' }}>Related reading</h3>
    <ul className="col-3">
      <li>
        <a href="/blog/shopify-store-development-uk-smbs-2026-guide" className="blog-card">
          <p>Shopify store development for UK small businesses: the 2026 guide</p>
        </a>
      </li>
      <li>
        <a href="/blog/ecommerce-development-uk-shopify-woocommerce-2026" className="blog-card">
          <p>Ecommerce development in the UK: Shopify or WooCommerce in 2026?</p>
        </a>
      </li>
      <li>
        <a href="/contact" className="blog-card">
          <p>Ready to talk? Contact FactoryJet about your Shopify project &#8594;</p>
        </a>
      </li>
    </ul>
  </div>
</section>

{/* ════════════════════════════════════════════════
  18. FINAL CTA; the page's one dark section
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--dark)', padding: '80px 0' }}>
  <div className="wrap" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
    <span className="eyebrow" style={{ color: 'rgba(255,92,0,.9)' }}>READY TO START</span>
    <h2 style={{ color: '#fff', marginTop: '12px', fontSize: 'clamp(1.75rem,4vw,2.75rem)' }}>Book a free Shopify store audit</h2>
    <p style={{ marginTop: '16px', color: 'rgba(255,255,255,.78)', fontSize: '16px', lineHeight: '1.7' }}>Thirty minutes. We open your current store or platform, tell you which pages are losing you the most sales and why, and set out what fixing it would involve. No pitch, no pressure, and you keep the notes whether or not you hire us.</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '32px' }}>
      <ModalCTAButton label="Book Your Free Store Audit" region="uk" modalVariant="default" btnVariant="primary-light" />
      <a href="/portfolio" className="btn btn-outline" style={{ color: 'rgba(255,255,255,.85)', borderColor: 'rgba(255,255,255,.3)' }}>See Our Portfolio</a>
    </div>
    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.62)', marginTop: '20px' }}>Fixed quotes. Full code ownership. Registered Shopify Partner. 500+ businesses served since 2014.</p>
  </div>
</section>

</main>
</div>
      <Footer />
    </>
  );
}
