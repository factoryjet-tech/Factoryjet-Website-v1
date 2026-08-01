import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/platforms';

export const metadata: Metadata = {
  title: 'Best Ecommerce Platform for Your Business | Platform Comparison | FactoryJet',
  description:
    'An honest side-by-side comparison of the best ecommerce platforms: Shopify, BigCommerce, Adobe Commerce, WooCommerce, and Salesforce Commerce Cloud. We are platform-agnostic: we help you pick the fit, build it, and hand you a store you own.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'Best Ecommerce Platform for Your Business | FactoryJet',
    description: 'Honest comparison of the top ecommerce platforms. We help US DTC and B2B brands choose and build on the right one.',
    url: 'https://factoryjet.com/best-ecommerce-platforms',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet ecommerce platform comparison' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Best Ecommerce Platform Comparison | FactoryJet', description: 'Shopify vs BigCommerce vs Adobe Commerce vs WooCommerce vs Salesforce, an honest comparison for DTC and B2B brands.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/best-ecommerce-platforms' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Platform basics' },
  { key: 'choosing', label: 'Choosing' },
  { key: 'platforms', label: 'Platform details' },
  { key: 'building', label: 'Migration & building' },
];
const FAQ_ITEMS = [
  // Platform basics
  {
    category: 'basics',
    question: 'What is an ecommerce platform?',
    answer: 'An ecommerce platform is the software that powers your online store: product catalog, cart, checkout, payments, and the admin dashboard behind it all. Most modern platforms are cloud-based, so the provider handles hosting, security, and software updates. The differences that matter are how much you can customize, whether B2B is native, how it handles catalog scale, and the total cost to run it over time.',
  },
  {
    category: 'basics',
    question: 'What is a cloud-based ecommerce platform?',
    answer: 'A cloud-based ecommerce platform, like Shopify, BigCommerce, or Salesforce Commerce Cloud, is hosted and maintained by the provider. You do not run your own servers, manage security patches, or worry about infrastructure scaling. WooCommerce and Adobe Commerce can be self-hosted if you need full server control or have on-premise requirements.',
  },
  {
    category: 'basics',
    question: 'What does an ecommerce platform include?',
    answer: 'A full ecommerce platform includes a product catalog and inventory system, a shopping cart and checkout, payment processing integrations, an order management system, a customer database, the storefront the shopper sees, and an admin interface you manage orders from. Enterprise platforms add native B2B features like price lists, customer groups, quotes, and trade portals on top of this.',
  },
  {
    category: 'basics',
    question: 'How many ecommerce platforms are there?',
    answer: 'There are dozens, but a handful run most serious stores: Shopify, BigCommerce, Adobe Commerce, WooCommerce, and Salesforce Commerce Cloud. We build on all of them and stay platform-agnostic so we can recommend the one that actually fits your business, not the one that is easiest for us.',
  },
  {
    category: 'basics',
    question: 'Is Shopify the best ecommerce platform?',
    answer: 'Shopify holds about 30% of the US ecommerce platform market and is the most-used platform for DTC brands. But it is not always the best fit. BigCommerce suits brands that need native B2B and no transaction fees. Adobe Commerce and Salesforce Commerce Cloud suit large, complex catalogs. WooCommerce suits brands that want full server control and low platform fees. The best ecommerce platform is the one that fits your business, not the most popular one.',
  },
  // Choosing
  {
    category: 'choosing',
    question: 'What is the best ecommerce platform for a small business?',
    answer: 'Shopify and WooCommerce are the most common picks for small businesses. Shopify is fast to launch, easy to run, and requires no technical knowledge to manage day-to-day. WooCommerce is free to start if you already use WordPress and want full control of your site. We help you weigh both against where you want to be in two to three years, not just what is easiest on day one.',
  },
  {
    category: 'choosing',
    question: 'Which ecommerce platform is best for B2B?',
    answer: 'BigCommerce B2B Edition and Adobe Commerce are the leading options for native B2B, with Salesforce Commerce Cloud for large enterprise B2B. If you run a smaller B2B catalog alongside DTC, Shopify Plus has a B2B module. We match the platform to your pricing rules, customer account structure, approval workflows, and integrations before recommending one.',
  },
  {
    category: 'choosing',
    question: 'What is a headless ecommerce platform?',
    answer: 'A headless ecommerce platform separates the commerce engine from the customer-facing front end. Instead of a built-in storefront, you build your own front end, typically Next.js or similar, that pulls product, cart, and order data through the platform API. BigCommerce, Shopify, and Adobe Commerce all support headless builds. You get full UX control and often significantly better performance, at the cost of higher upfront development time.',
  },
  {
    category: 'choosing',
    question: 'How do I choose between BigCommerce and Shopify?',
    answer: 'For DTC-first brands that want a fast start and the largest app ecosystem, Shopify is often the quicker win. For brands selling both DTC and B2B from one store, wanting to avoid per-sale transaction fees, or needing deep catalog customization without heavy apps, BigCommerce is usually a better fit. We run a short scoping session to map your specific catalog, channel, and B2B requirements before making a firm recommendation.',
  },
  {
    category: 'choosing',
    question: 'When should we replatform to a new ecommerce platform?',
    answer: 'Consider replatforming if your current platform is consistently slowing you down: performance problems you cannot fix, missing B2B features that require expensive workarounds, limitations on catalog size or checkout customization, or a migration that would reduce total cost of ownership. We audit what is actually broken before recommending a switch because a platform migration is a significant project, and switching to the wrong one just creates new constraints.',
  },
  // Platform details
  {
    category: 'platforms',
    question: 'What is BigCommerce and how is it different from Shopify?',
    answer: 'BigCommerce is an open-SaaS ecommerce platform: hosted and maintained like Shopify, but with open APIs, no transaction fees, and strong native B2B through B2B Edition. Shopify has a larger app store and a simpler admin but charges transaction fees if you do not use Shopify Payments. BigCommerce is often the better fit for brands that sell both DTC and B2B from one store or that need deep catalog customization through the API.',
  },
  {
    category: 'platforms',
    question: 'What is Adobe Commerce (Magento)?',
    answer: 'Adobe Commerce, formerly Magento, is a self-hosted or PaaS ecommerce platform built for large, complex catalogs. It is highly customizable, has deep native B2B, and supports headless builds through its PWA Studio and REST/GraphQL APIs. The trade-off is higher total cost of ownership: you need a development team to maintain upgrades and infrastructure. It is best for enterprise brands, large manufacturers with complex pricing rules, or businesses that have outgrown SaaS platforms.',
  },
  {
    category: 'platforms',
    question: 'What is Salesforce Commerce Cloud?',
    answer: 'Salesforce Commerce Cloud is an enterprise-grade SaaS ecommerce platform that integrates natively with Salesforce CRM and Marketing Cloud. It is used by large retailers and global brands that need tight CRM-to-commerce data flow, global multi-site management, and AI-powered personalization. The pricing model is revenue-share, which makes it a significant investment best suited to brands doing substantial volume.',
  },
  {
    category: 'platforms',
    question: 'What is WooCommerce and who is it for?',
    answer: 'WooCommerce is a free WordPress plugin that turns a WordPress site into a full ecommerce store. You self-host it, which means complete control over the server, code, and database, but also full responsibility for hosting, security patches, and maintenance. It is best for brands already on WordPress, developers who want complete code control, or small-to-mid businesses that want to minimize recurring platform fees.',
  },
  // Migration & building
  {
    category: 'building',
    question: 'Can you help us migrate to a different ecommerce platform?',
    answer: 'Yes. We handle ecommerce platform migrations end to end: products, customers, orders, content, and 301 redirects, with a cutover plan that protects your search rankings and uptime. We have migrated stores from WooCommerce, Magento, Shopify, and custom-built platforms to BigCommerce, Shopify Plus, and Adobe Commerce.',
  },
  {
    category: 'building',
    question: 'How long does an ecommerce platform build take?',
    answer: 'A straightforward DTC store on Shopify or BigCommerce typically runs four to eight weeks for design, build, and QA. A B2B store with integrations, price lists, and customer accounts runs eight to sixteen weeks depending on complexity. We scope it precisely after a short call and give you a phased timeline with milestones; not a vague estimate.',
  },
  {
    category: 'building',
    question: 'Do we own what you build on our ecommerce platform?',
    answer: 'Yes. You own and operate everything we build. We design, configure, integrate, and migrate, then hand you a store you run yourself. We never run your store for you. We stay available to support and scale it as you grow, but ownership and day-to-day control are always yours.',
  },
  {
    category: 'building',
    question: 'Can you integrate our ERP, PIM, POS, and 3PL with an ecommerce platform?',
    answer: 'Yes. Ecommerce platform integration with ERP, PIM, POS, 3PL, and marketplaces is a core part of what we build. We connect your systems so products, inventory, orders, and customer data flow through one clean pipeline and do not require manual syncing between tools. BigCommerce, Shopify Plus, and Adobe Commerce all have the open API layer to support this cleanly.',
  },
  {
    category: 'building',
    question: 'Do you work with US brands?',
    answer: 'Yes. Most of our clients are US-based DTC and B2B brands across Austin, Miami, Denver, Nashville, Charlotte, and Portland. We build, migrate, and integrate ecommerce platforms for growing brands, with a decade-plus of commerce builds and more than 500 projects completed.',
  },
];

/* ─────────────────────────────────────────────
   SCHEMA
───────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({
    '@type': 'Question',
    name: i.question,
    acceptedAnswer: { '@type': 'Answer', text: i.answer },
  })),
};
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ecommerce platform selection and development',
  name: 'Ecommerce platform development and migration',
  description:
    'Platform-agnostic ecommerce development. We help US DTC and B2B brands choose, build, and migrate on the best ecommerce platform: Shopify, BigCommerce, Adobe Commerce, WooCommerce, or Salesforce Commerce Cloud, and hand them a store they own and run.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'DTC and B2B ecommerce brands' },
};
const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to choose and build on the right ecommerce platform',
  description: 'FactoryJet process for helping US DTC and B2B brands choose and build on the best ecommerce platform.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Scope', text: 'We map your catalog, B2B rules, channels, and integrations, then match them to the right ecommerce platform.' },
    { '@type': 'HowToStep', position: 2, name: 'Propose', text: 'We send a fixed proposal with a clear scope before any work starts.' },
    { '@type': 'HowToStep', position: 3, name: 'Design and build', text: 'We design a custom storefront and configure checkout, B2B rules, and apps on the chosen platform.' },
    { '@type': 'HowToStep', position: 4, name: 'Integrate', text: 'We connect ERP, PIM, POS, 3PL, and marketplaces through the platform API.' },
    { '@type': 'HowToStep', position: 5, name: 'Launch and hand over', text: 'We QA on staging, run a clean cutover, and hand you a store you own and run.' },
  ],
};
const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  description: 'FactoryJet is a platform-agnostic ecommerce development agency that builds, migrates, and integrates stores on Shopify, BigCommerce, Adobe Commerce, WooCommerce, and Salesforce Commerce Cloud for US DTC and B2B brands.',
  
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};
const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Best Ecommerce Platforms', item: 'https://factoryjet.com/best-ecommerce-platforms' },
  ],
};

/* ─────────────────────────────────────────────
   PAGE DATA
───────────────────────────────────────────── */
const STATS = [
  { b: '5 platforms', s: 'compared side by side' },
  { b: 'DTC + B2B', s: 'use cases covered' },
  { b: 'Platform-agnostic', s: 'we build the fit, not a favorite' },
  { b: '10+ yrs', s: 'building commerce' },
];

const SOURCED = [
  {
    v: '~30%',
    d: 'of the US ecommerce platform market is held by Shopify, with Wix at around 23%, together running the majority of US online stores.',
    src: 'Statista, 2024',
    href: 'https://www.statista.com/statistics/950591/united-states-ecommerce-platforms-market-share/',
  },
  {
    v: '~33%',
    d: 'of all tracked online stores worldwide run on WooCommerce, making it the most-installed ecommerce platform globally by store count.',
    src: 'StoreLeads',
    href: 'https://storeleads.app/reports/ecommerce',
  },
  {
    v: '13.6M+',
    d: 'ecommerce stores are live worldwide, across dozens of platforms, from first-time sellers to billion-dollar enterprises.',
    src: 'StoreLeads',
    href: 'https://storeleads.app/reports/ecommerce',
  },
];

const BENEFITS = [
  { i: '◈', t: 'Platform-agnostic', d: 'We build on all major platforms and choose the one that fits your business, not the one that is easiest for us to sell.' },
  { i: '◇', t: 'Right fit, not default', d: 'We map your catalog, channels, B2B rules, and budget before recommending. The wrong platform choice costs more than the build itself.' },
  { i: '↯', t: 'Open API access', d: 'The best platforms expose open APIs so your store connects to ERP, PIM, POS, 3PL, and marketplaces without fragile workarounds.' },
  { i: '▤', t: 'B2B where you need it', d: 'Native B2B: price lists, customer groups, quotes, and trade portals on BigCommerce B2B Edition, Adobe Commerce, or Salesforce Commerce Cloud.' },
  { i: '⛓', t: 'Headless when it matters', d: 'Separate the commerce engine from the front end when you need custom UX or top-tier performance. We build headless on BigCommerce, Shopify, and Adobe Commerce.' },
  { i: '⤢', t: 'You own what we build', d: 'We design, build, configure, and migrate. Then we hand you a store you own and run. We never operate your store for you.' },
];

const CAPABILITIES = [
  { t: 'Platform selection and strategy', d: 'We scope your catalog, channels, and B2B rules and recommend the right ecommerce platform with a clear rationale.' },
  { t: 'Custom theme and storefront', d: 'A fast, on-brand storefront built from your design, not a generic template, tuned for Core Web Vitals and conversion.' },
  { t: 'B2B configuration', d: 'Price lists, customer groups, net terms, quotes, and trade portals configured for wholesale and B2B buyers alongside your DTC store.' },
  { t: 'Headless builds', d: 'Commerce engine (BigCommerce, Shopify, or Adobe Commerce) behind a custom Next.js front end for full UX control and performance.' },
  { t: 'ERP, PIM, POS, and 3PL integration', d: 'Ecommerce platform integration with your back-office systems so products, inventory, and orders flow without manual syncing.' },
  { t: 'Platform migration and replatforming', d: 'Move from WooCommerce, Magento, or any platform to your new one, with products, customers, orders, 301 redirects, and SEO preserved.' },
  { t: 'Multi-storefront and multicurrency', d: 'Multiple storefronts, regions, and currencies from one account, for brands selling across markets from a single back end.' },
  { t: 'App and marketplace integrations', d: 'Connect Shopify apps, BigCommerce integrations, or custom API connectors for marketplaces, reviews, loyalty, and fulfillment.' },
];

const USECASES = [
  {
    t: 'DTC brands scaling up',
    img: 'platform-choice.webp',
    alt: 'A DTC founder reviewing ecommerce platform options with a consultant before committing to a build',
    d: 'For a DTC brand that is outgrowing its starter platform, the right ecommerce platform gives you headroom without rebuilding from scratch every two years. We evaluate your catalog size, app dependencies, checkout requirements, and growth trajectory to pick the platform that does not become a ceiling. Shopify Plus and BigCommerce both handle serious DTC volume, with the difference in app flexibility, transaction fees, and how far you can go headless when you need it.',
  },
  {
    t: 'B2B and wholesale brands',
    img: 'platform-build.webp',
    alt: 'A wholesale team managing B2B customer accounts and price lists through an ecommerce platform admin',
    d: 'B2B ecommerce has different needs than DTC: customer-specific pricing, purchase order workflows, net payment terms, quote requests, and minimum order quantities. Not every platform handles these natively. BigCommerce B2B Edition and Adobe Commerce are built for this; Shopify Plus has a B2B module that works for lighter B2B requirements. We configure the full B2B layer so your trade buyers self-serve and your team spends less time on manual quoting.',
  },
  {
    t: 'Brands selling on both DTC and B2B',
    img: 'platform-choice.webp',
    alt: 'An ecommerce manager running a single store that serves both DTC shoppers and wholesale trade accounts',
    d: 'Running DTC and B2B from one ecommerce platform is technically possible on the right platforms and a maintenance headache on the wrong ones. BigCommerce B2B Edition is purpose-built for this: one catalog, one admin, and separate pricing and checkout experiences by account type. We build the customer group structure, price lists, and checkout rules so both channels work cleanly without duplicate product management.',
  },
  {
    t: 'Headless and developer-led builds',
    img: 'platform-build.webp',
    alt: 'A developer building a headless ecommerce storefront in Next.js connected through the BigCommerce or Shopify API',
    d: 'When your front end needs to do things a standard platform theme cannot: custom animations, composable checkout, or tight integration with a CMS or design system, a headless ecommerce platform build separates the commerce engine from the UI. We build the Next.js front end, wire it to the platform API, and hand you a decoupled storefront that performs well and is easy for your team to iterate on.',
  },
  {
    t: 'Platform migration and replatforming',
    img: 'platform-choice.webp',
    alt: 'A team reviewing a migration plan to move from one ecommerce platform to a new one without losing traffic or orders',
    d: 'Replatforming is one of the highest-risk ecommerce projects a brand can run: done wrong, you lose rankings, break integrations, or carry forward the structural problems you were trying to fix. We audit what is actually wrong with your current platform before recommending a move, then handle the full migration, covering products, customers, orders, content, and 301 redirects, with a staging QA step and a cutover plan that protects uptime and SEO.',
  },
];

const COMPARE = [
  {
    name: 'Shopify / Plus',
    model: 'SaaS',
    b2b: 'B2B on Plus',
    headless: 'Hydrogen / API',
    cost: 'Subscription + transaction fees',
    best: 'Fast DTC, growing brands',
  },
  {
    name: 'BigCommerce',
    model: 'Open SaaS',
    b2b: 'B2B Edition (native)',
    headless: 'API-first',
    cost: 'Subscription, no transaction fees',
    best: 'DTC + B2B from one store',
  },
  {
    name: 'Adobe Commerce',
    model: 'Self-hosted / PaaS',
    b2b: 'Deep native B2B',
    headless: 'PWA Studio / API',
    cost: 'License + hosting',
    best: 'Large, complex catalogs',
  },
  {
    name: 'WooCommerce',
    model: 'Self-hosted (WordPress)',
    b2b: 'Via plugins',
    headless: 'REST API',
    cost: 'Free core + hosting',
    best: 'Full control, small to mid',
  },
  {
    name: 'Salesforce Commerce Cloud',
    model: 'SaaS (enterprise)',
    b2b: 'B2B Commerce (native)',
    headless: 'API / PWA Kit',
    cost: 'Revenue-share',
    best: 'Enterprise and global brands',
  },
];

const STEPS = [
  { n: '01', t: 'Scope your requirements', d: 'We map your catalog size, B2B rules, sales channels, and integration needs in a short call. This is the most important step, choosing the wrong platform for your requirements costs more than the build.' },
  { n: '02', t: 'Platform recommendation', d: 'We match your requirements to the right ecommerce platform and explain the trade-offs clearly. If two platforms are close calls, we show you why.' },
  { n: '03', t: 'Fixed proposal', d: 'We write a fixed proposal covering design, build, integrations, and migration scope before any work starts. No hourly billing surprises.' },
  { n: '04', t: 'Design, build, and integrate', d: 'Custom storefront design, platform configuration, B2B setup, and ERP/PIM/POS integration on the chosen platform.' },
  { n: '05', t: 'Launch and hand over', d: 'We QA on staging, run a clean cutover with 301 redirects, and hand you a store you own and run. We stay available to support and scale.' },
];

const dot = { width: '8px', height: '8px', borderRadius: '50%', background: '#E0D6CC', display: 'inline-block' };

/* ─────────────────────────────────────────────
   HERO VISUAL: compact platform matrix
───────────────────────────────────────────── */
const matrixRows = [
  { name: 'Shopify / Plus', saas: true, b2b: '~', headless: true, open: false },
  { name: 'BigCommerce', saas: true, b2b: true, headless: true, open: true },
  { name: 'Adobe Commerce', saas: false, b2b: true, headless: true, open: true },
  { name: 'WooCommerce', saas: false, b2b: '~', headless: true, open: true },
  { name: 'Salesforce CC', saas: true, b2b: true, headless: true, open: false },
];

function MatrixCell({ v }: { v: boolean | string }) {
  if (v === true) return <span style={{ color: '#C94A1A', fontWeight: 700, fontFamily: 'var(--pp-mono)', fontSize: '11px' }}>✓</span>;
  if (v === false) return <span style={{ color: '#C9BEB2', fontFamily: 'var(--pp-mono)', fontSize: '11px' }}>–</span>;
  return <span style={{ color: '#9A8B80', fontFamily: 'var(--pp-mono)', fontSize: '11px' }}>~</span>;
}

export default function BestEcommercePlatformsPage() {
  return (
    <>
      <script id="bep-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="bep-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="bep-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="bep-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="bep-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Best ecommerce platforms</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '17ch' }}>
                  The best ecommerce platform is the one that fits you.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  An honest, side-by-side look at the top ecommerce platforms: Shopify, BigCommerce, Adobe Commerce,
                  WooCommerce, and Salesforce Commerce Cloud, so you can choose with eyes open. We are
                  platform-agnostic: we help you pick the fit and build it.
                </p>
                <HeroInlineForm source="us_best_ecommerce_platforms_hero" region="us" submitLabel="Get a platform recommendation" />
              </div>

              {/* Hero visual: compact platform matrix */}
              <div
                role="img"
                aria-label="A side-by-side comparison matrix of the top ecommerce platforms: Shopify, BigCommerce, Adobe Commerce, WooCommerce, and Salesforce Commerce Cloud."
                style={{
                  border: '1px solid var(--pp-line)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#fff',
                  boxShadow: '0 18px 50px rgba(20,17,15,.08)',
                  fontSize: '12px',
                }}
              >
                {/* Header row */}
                <div
                  aria-hidden="true"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.3fr repeat(4, 1fr)',
                    background: '#14110F',
                    color: '#fff',
                    fontFamily: 'var(--pp-mono)',
                    fontSize: '10px',
                    fontWeight: 600,
                  }}
                >
                  {['Platform', 'SaaS', 'B2B', 'Headless', 'Open'].map((h, i) => (
                    <div key={h} style={{ padding: '9px 8px', textAlign: i === 0 ? 'left' : 'center' }}>{h}</div>
                  ))}
                </div>
                {/* Data rows */}
                {matrixRows.map((r) => (
                  <div
                    key={r.name}
                    aria-hidden="true"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1.3fr repeat(4, 1fr)',
                      borderTop: '1px solid var(--pp-line)',
                    }}
                  >
                    <div style={{ padding: '9px 8px', fontWeight: 600, color: 'var(--pp-ink)', fontSize: '11px' }}>{r.name}</div>
                    {([r.saas, r.b2b, r.headless, r.open] as (boolean | string)[]).map((v, i) => (
                      <div key={i} style={{ padding: '9px 8px', textAlign: 'center' }}><MatrixCell v={v} /></div>
                    ))}
                  </div>
                ))}
                <div
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--pp-mono)',
                    fontSize: '9px',
                    color: 'var(--pp-muted)',
                    padding: '7px 10px',
                    textAlign: 'center',
                    background: 'var(--pp-tint)',
                    borderTop: '1px solid var(--pp-line)',
                  }}
                >
                  // illustrative: full comparison below
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stat band ── */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What is an ecommerce platform ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the basics</p>
            <h2 style={{ marginTop: '10px' }}>What is an ecommerce platform?</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '16px' }} className="pp-lead">
              <p>
                An ecommerce platform is the software that runs your online store: product catalog, shopping cart,
                checkout, payment processing, order management, and the admin you use to run it all. Most modern
                platforms are cloud-based: the provider handles hosting, security, and software updates, so your team
                focuses on selling rather than maintaining infrastructure. A cloud-based ecommerce platform like Shopify
                or BigCommerce eliminates the server management overhead that comes with self-hosted options like
                WooCommerce or Adobe Commerce.
              </p>
              <p>
                The differences between platforms that actually matter to a growing business are customizability (how
                far can you go without rebuilding?), native B2B support (price lists, customer groups, quotes), headless
                capability (can you run your own front end against the commerce engine?), integration depth (how cleanly
                does it connect to your ERP, PIM, POS, and 3PL?), and total cost of ownership over a three-to-five year
                horizon, not just the monthly plan price.
              </p>
              <p>
                There is no single best ecommerce platform for every business. Shopify holds roughly 30% of the US
                market and is the right call for many DTC brands. BigCommerce is the right call when you need native B2B
                alongside DTC and want to avoid per-sale transaction fees. Adobe Commerce handles large, complex
                catalogs that SaaS platforms cannot flex far enough. Salesforce Commerce Cloud integrates natively with
                Salesforce CRM for enterprise brands. WooCommerce gives full control if you already run WordPress and
                want zero platform fees. The right answer is the one that fits your catalog, channels, B2B rules, and
                where you want to be in three years.
              </p>
              <p>
                We are platform-agnostic. We build on all of these and choose the fit based on your requirements, not a
                preferred partnership. You get a recommendation with a clear rationale and a fixed proposal before any
                work starts.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sourced stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// the landscape</p>
            <h2 style={{ marginTop: '10px' }}>The ecommerce platform market, by the numbers</h2>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <div className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-disp)', fontWeight: 800, fontSize: '36px', color: 'var(--pp-orange-dark)', letterSpacing: '-.03em', lineHeight: 1 }}>{s.v}</div>
                  <p style={{ marginTop: '10px', fontSize: '15px', color: 'var(--pp-body)' }}>{s.d}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '10px', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}
                  >
                    {s.src}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why it matters</p>
            <h2 style={{ marginTop: '10px' }}>What the right platform gives you</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              The platform choice affects every part of your commerce operation. These are the capabilities a well-chosen
              ecommerce platform gives a growing DTC or B2B brand.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {BENEFITS.map((b) => (
                <div className="pp-card" key={b.t}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '20px', color: 'var(--pp-orange-dark)', marginBottom: '10px' }} aria-hidden="true">{b.i}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{b.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid-page CTA ── */}
        <section className="pp-sec">
          <div className="pp-wrap" style={{ textAlign: 'center' }}>
            <p className="pp-mlabel">// before you decide</p>
            <h2 style={{ marginTop: '10px' }}>Still weighing Shopify vs BigCommerce vs the rest?</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '52ch', marginLeft: 'auto', marginRight: 'auto' }}>
              Tell us your catalog size and budget. We will give you a straight platform recommendation, not a sales pitch.
            </p>
            <div style={{ marginTop: '22px' }}>
              <ModalCTAButton label="Get a free platform audit" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

        {/* ── Capabilities ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what we build</p>
            <h2 style={{ marginTop: '10px' }}>What we do on your platform</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              From picking the right platform to building, integrating, and migrating, here is the full scope of what
              we deliver on Shopify, BigCommerce, Adobe Commerce, WooCommerce, and Salesforce Commerce Cloud.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
              {CAPABILITIES.map((c) => (
                <div className="pp-card" key={c.t}>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{c.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use cases ── */}
        {USECASES.map((uc, idx) => (
          <section key={uc.t} className={`pp-sec${idx % 2 === 0 ? '' : ' tint'}`}>
            <div className="pp-wrap">
              <div style={{ display: 'grid', gridTemplateColumns: idx % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
                {idx % 2 !== 0 && (
                  <Image
                    src={`${IMG}/${uc.img}`}
                    alt={uc.alt}
                    width={640}
                    height={480}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block' }}
                  />
                )}
                <div>
                  <p className="pp-mlabel">// {uc.t.toLowerCase()}</p>
                  <h2 style={{ marginTop: '10px', fontSize: 'clamp(22px,2.4vw,32px)' }}>{uc.t}</h2>
                  <p className="pp-lead" style={{ marginTop: '14px' }}>{uc.d}</p>
                </div>
                {idx % 2 === 0 && (
                  <Image
                    src={`${IMG}/${uc.img}`}
                    alt={uc.alt}
                    width={640}
                    height={480}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '18px', border: '1px solid var(--pp-line)', display: 'block' }}
                  />
                )}
              </div>
            </div>
          </section>
        ))}

        {/* ── Full comparison table ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// the comparison</p>
            <h2 style={{ marginTop: '10px' }}>Top ecommerce platforms, side by side</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '60ch' }}>
              This is a guide, not a verdict. The right ecommerce platform depends on your catalog, channels, B2B needs,
              and budget. Scroll right on mobile.
            </p>
            <div style={{ overflowX: 'auto', marginTop: '28px' }}>
              <table className="pp-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', background: '#fff', border: '1px solid var(--pp-line)', borderRadius: '14px', overflow: 'hidden' }}>
                <thead>
                  <tr>
                    {['Platform', 'Model', 'Best for', 'Native B2B', 'Headless', 'Cost model'].map((h) => (
                      <th key={h} style={{ padding: '13px 14px', textAlign: 'left', fontFamily: 'var(--pp-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.04em', color: 'var(--pp-muted)', background: 'var(--pp-tint)', borderBottom: '1px solid var(--pp-line)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.name} style={{ borderTop: '1px solid var(--pp-line)' }}>
                      <td style={{ padding: '13px 14px', fontWeight: 600, color: 'var(--pp-ink)' }}>{r.name}</td>
                      <td style={{ padding: '13px 14px', color: 'var(--pp-body)' }}>{r.model}</td>
                      <td style={{ padding: '13px 14px', color: 'var(--pp-body)' }}>{r.best}</td>
                      <td style={{ padding: '13px 14px', color: 'var(--pp-body)' }}>{r.b2b}</td>
                      <td style={{ padding: '13px 14px', color: 'var(--pp-body)' }}>{r.headless}</td>
                      <td style={{ padding: '13px 14px', color: 'var(--pp-body)' }}>{r.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--pp-muted)' }}>
              Platform costs, features, and positioning change frequently. We verify against your requirements before recommending.
            </p>
          </div>
        </section>

        {/* ── How to choose ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// choosing</p>
            <h2 style={{ marginTop: '10px' }}>How to choose your ecommerce platform</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '58ch' }}>
              The most common mistake is picking by popularity or price before mapping requirements. Run through these
              decision points first.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', marginTop: '32px' }}>
              {[
                { q: 'Do you need B2B pricing?', a: 'Native B2B matters. BigCommerce B2B Edition and Adobe Commerce handle it natively. Shopify Plus has a B2B module. WooCommerce requires plugins. If B2B is central to your model, start here before anything else.' },
                { q: 'What is your catalog size?', a: 'Large catalogs with complex variants, bundles, or rules push toward BigCommerce or Adobe Commerce. Simpler catalogs are fine on Shopify or WooCommerce. SaaS platforms have catalog limits that can become constraints at scale.' },
                { q: 'Do you sell across multiple channels?', a: 'Marketplaces, social storefronts, and in-person POS all need to sync inventory and orders. An ecommerce platform with strong API and channel integration (BigCommerce, Shopify) makes this cleaner than a platform you have to bolt connectors onto.' },
                { q: 'Do you need a custom front end?', a: 'If your design team needs full UI control, or if performance is a top priority, a headless ecommerce platform build: BigCommerce or Shopify as the engine, Next.js as the front end, gives you both without sacrificing the commerce admin.' },
                { q: 'What is your total budget?', a: 'SaaS platforms have predictable subscription costs. Self-hosted options (WooCommerce, Adobe Commerce) have lower platform fees but higher development and hosting costs. Enterprise platforms (Salesforce Commerce Cloud) price on revenue share. Map the three-year total cost of ownership, not just the monthly plan.' },
                { q: 'Who will maintain it?', a: 'Shopify and BigCommerce are designed to be manageable by a non-technical team with light developer support. Adobe Commerce and WooCommerce require a developer to maintain safely. Match the platform to the team that will run it after launch.' },
              ].map((item) => (
                <div key={item.q} className="pp-card">
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '8px' }}>{item.q}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// our process</p>
            <h2 style={{ marginTop: '10px' }}>How we choose, build, and launch</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '56ch' }}>
              From a short scoping call to a live store you own, with no handoffs, no hourly billing surprises.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginTop: '36px' }}>
              {STEPS.map((s) => (
                <div key={s.n} className="pp-card">
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--pp-orange-dark)', marginBottom: '10px' }}>{s.n}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '8px' }}>{s.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what clients say</p>
            <h2 style={{ marginTop: '10px' }}>Real founders, real builds</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px', marginTop: '32px' }}>
              {[
                {
                  q: '"We were live in 6 days. I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in inquiries every day, and the site has stayed lightning fast."',
                  name: 'Ricky B.',
                  co: 'Founder, Belle Maison',
                  img: '/images/testimonials/ricky-belle-maison-160.webp',
                  alt: 'Ricky B., Founder of Belle Maison',
                },
                {
                  q: '"In our business, clients size you up before they ever call. FactoryJet built us a website that finally looks as solid as the work we deliver, and we are getting real project inquiries through it."',
                  name: 'Vishal K.',
                  co: 'Director, Impulse Branding',
                  img: '/images/testimonials/vishal-impulse-branding-160.webp',
                  alt: 'Vishal K., Director of Impulse Branding',
                },
              ].map((t) => (
                <figure
                  key={t.name}
                  style={{ border: '1px solid var(--pp-line)', borderRadius: '18px', background: '#fff', padding: '26px', display: 'flex', flexDirection: 'column', margin: 0 }}
                >
                  <div style={{ color: 'var(--pp-orange)', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</div>
                  <blockquote style={{ fontFamily: 'var(--pp-disp)', fontWeight: 600, fontSize: '17px', lineHeight: 1.5, color: 'var(--pp-ink)', margin: '14px 0 20px', border: 'none', padding: 0 }}>
                    {t.q}
                  </blockquote>
                  <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                    <Image
                      src={t.img}
                      alt={t.alt}
                      width={48}
                      height={48}
                      style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                    />
                    <span>
                      <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '15px', color: 'var(--pp-ink)', display: 'block' }}>{t.name}</b>
                      <span style={{ fontSize: '13px', color: 'var(--pp-muted)' }}>{t.co}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec tint" style={{ background: 'var(--pp-cream)', borderTop: '1px solid var(--pp-line)', borderBottom: '1px solid var(--pp-line)' }}>
          <div className="pp-wrap">
            <FAQ
              eyebrow="ECOMMERCE PLATFORMS FAQ"
              headline="Questions before you choose."
              lead="If your question is not below, send a short brief and we usually come back within 24 hours."
              categories={FAQ_CATEGORIES}
              items={FAQ_ITEMS}
            />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pp-sec tint" id="cta">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel" style={{ color: 'var(--pp-orange-dark)' }}>// before you commit</p>
                <h2 style={{ marginTop: '12px', maxWidth: '18ch' }}>Not sure which platform? Let us figure it out.</h2>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                  Tell us what you sell, how you sell it, and where you want to be. We will match you to the right
                  ecommerce platform and send a fixed proposal before any work starts.
                </p>
                <div style={{ marginTop: '26px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                  <ModalCTAButton region="us" btnVariant="secondary-light" label="Talk to the Founder" />
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--pp-line)', borderRadius: '12px', padding: '14px 22px', fontWeight: 600, textDecoration: 'none', color: 'var(--pp-ink)', fontSize: '15px' }}
                  >
                    Book a 30-min call
                  </a>
                </div>
                <div style={{ marginTop: '22px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#F05A28,#C8431A)', color: '#fff', fontFamily: 'var(--pp-disp)', fontWeight: 800, fontSize: '19px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">B</div>
                  <div>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', color: 'var(--pp-ink)', display: 'block' }}>Bhavesh, Founder of FactoryJet</b>
                    <span style={{ fontSize: '12px', color: 'var(--pp-muted)' }}>You work with me directly. No handoffs.</span>
                  </div>
                </div>
              </div>
              {/* Proof card */}
              <div style={{ background: '#fff', border: '1px solid var(--pp-line)', borderRadius: '18px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <Image
                    src="/images/testimonials/ricky-belle-maison-160.webp"
                    alt="Ricky B., Founder of Belle Maison"
                    width={46}
                    height={46}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--pp-line)' }}
                  />
                  <div>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', color: 'var(--pp-ink)', display: 'block' }}>Ricky B.</b>
                    <span style={{ fontSize: '12px', color: 'var(--pp-muted)' }}>Belle Maison</span>
                  </div>
                </div>
                <blockquote style={{ fontStyle: 'italic', fontSize: '14px', lineHeight: 1.6, color: 'var(--pp-body)', border: 'none', borderLeft: '2px solid var(--pp-orange)', paddingLeft: '12px', marginBottom: '16px' }}>
                  "We were live in just 6 days. New inquiries come in every day, and the site is still really fast."
                </blockquote>
                <div style={{ borderTop: '1px solid var(--pp-line)', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--pp-muted)' }}>
                  <span style={{ color: 'var(--pp-orange)', letterSpacing: '1px' }}>★★★★★</span>
                  <span><strong style={{ color: 'var(--pp-ink)' }}>4.9/5</strong> · average client rating</span>
                </div>
              </div>
            </div>

            {/* Internal links */}
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--pp-line)', fontSize: '13px', color: 'var(--pp-muted)' }}>
              <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em', marginRight: '12px' }}>Related:</span>
              {[
                { label: 'BigCommerce development', href: '/bigcommerce-development' },
                { label: 'B2B ecommerce', href: '/b2b-ecommerce' },
                { label: 'Omnichannel commerce', href: '/omnichannel-commerce' },
                { label: 'Headless commerce', href: '/headless-commerce' },
                { label: 'Ecommerce consulting', href: '/ecommerce-consulting' },
              ].map((l, i) => (
                <span key={l.href}>
                  <a href={l.href} style={{ color: 'var(--pp-orange-dark)', textDecoration: 'none', fontWeight: 500 }}>{l.label}</a>
                  {i < 4 && <span style={{ margin: '0 8px', color: 'var(--pp-line)' }}>·</span>}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
