import type { Metadata } from 'next';
import Link from 'next/link';
import { pricingAlternates } from '@/data/hreflangMap';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: 'SEO & Ecommerce Pricing: Scope and Quotes | FactoryJet',
  description:
    'How FactoryJet scopes SEO and ecommerce quotes, 20 cost questions answered with sourced US market ranges, plus links to all 39 cost guides on the site.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO & Ecommerce Pricing: Scope and Quotes | FactoryJet',
    description:
      'How FactoryJet scopes SEO engagements and ecommerce builds, with deliverables, fees, and terms agreed before work starts.',
    url: 'https://factoryjet.com/pricing',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet SEO and ecommerce pricing' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & Ecommerce Pricing: Scope and Quotes | FactoryJet',
    description: 'SEO and ecommerce pricing, with scope, deliverables, fees, and terms agreed before work starts.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/pricing', languages: pricingAlternates },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-10-22';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/pricing#webpage',
  url: 'https://factoryjet.com/pricing',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://factoryjet.com/pricing' },
  ],
};

/* Market ranges only, never FactoryJet prices (house rule, 30 Sep 2026). Every
   figure below is a VERIFIED row in pipeline/research/MARKET-PRICE-RANGES-2026-09-30.md,
   read on the source page on 30 Sep 2026; the row number is noted beside each.
   No running, hosting or maintenance ranges for AI builds (house rule, 11 Oct 2026). */
const MARKET_READ = '30 September 2026';
type PriceFaq = { q: string; a: string; source?: { name: string; url: string } };

const PRICE_FAQS: ReadonlyArray<PriceFaq> = [
  { q: 'How much does it cost to build an ecommerce site?', a: 'It depends on scope, platform, catalog size, B2B rules, and integrations, so we scope it on a short call and send a fixed proposal before any work starts, rather than putting a number on a page. The market ranges in the next answers show where most builds land.' },
  { q: 'Do you bill hourly for ecommerce builds?', a: 'No. We quote a fixed proposal after scoping, paid against milestones. You know the investment before work begins, with no surprise invoices.' },
  { q: 'What drives the cost of an ecommerce build?', a: 'The platform, your catalog size, whether you run DTC, B2B, or both, the integrations you need (ERP, POS, 3PL, marketplaces), data migration from an existing store, and any AI agents we build and implement.' },
  // row 19
  { q: 'How much do SEO services cost?', a: 'Small businesses typically pay $1,500 to $3,500 a month for SEO, according to WebFX. Your scope depends on your website, locations, services, competition, and implementation needs, so our written proposal separates initial setup, ongoing deliverables, and any third-party costs before work starts.', source: { name: 'WebFX, SEO Pricing', url: 'https://www.webfx.com/seo/pricing/' } },
  { q: 'What should I check in a no-contract SEO proposal?', a: 'Check the minimum term, cancellation notice, setup work, monthly deliverables, and ownership of accounts and content. No-contract should not mean unclear obligations. Our written proposal sets out the engagement terms so you can compare scope and commitment, rather than relying on a headline promise.' },
  { q: 'Are tools, advertising, and third-party subscriptions included?', a: 'The proposal identifies included work and any separate costs. Depending on the project, these may include hosting, platform subscriptions, apps, reporting tools, or paid media. Ask for recurring costs and one-time costs separately. Additional work and costs are agreed before that work begins.' },
  { q: 'Do you guarantee rankings or revenue?', a: 'No. We agree the implementation scope and reporting, but search rankings and customer revenue depend on factors outside any agency’s control. We track visibility and inquiries against a baseline, and work with your team to distinguish useful leads from sales outcomes.' },
  // row 10
  { q: 'How much does a small online store cost to launch?', a: 'A small store on a pre-built theme with minimal customization can launch for about $1,000 to $5,000, according to BigCommerce’s ecommerce cost guide. That budget assumes few integrations and a modest catalog.', source: { name: 'BigCommerce, “Ecommerce website cost”', url: 'https://www.bigcommerce.com/articles/ecommerce/ecommerce-cost/' } },
  // row 11
  { q: 'What does a store with custom design and integrations cost?', a: 'Small to mid-sized businesses that need custom design, integrations, and light backend work typically invest $5,000 to $25,000, according to BigCommerce.', source: { name: 'BigCommerce, “Ecommerce website cost”', url: 'https://www.bigcommerce.com/articles/ecommerce/ecommerce-cost/' } },
  // row 12
  { q: 'What does a custom or headless ecommerce build cost?', a: 'Custom and enterprise ecommerce builds run $25,000 to $250,000 or more, according to BigCommerce, and Shopify agency CartCoders prices a headless Shopify build at $60,000 to $200,000.', source: { name: 'BigCommerce, “Ecommerce website cost”', url: 'https://www.bigcommerce.com/articles/ecommerce/ecommerce-cost/' } },
  // row 13
  { q: 'How much does a custom Shopify store cost?', a: 'A fully custom Shopify store build typically costs $8,000 to $35,000, according to Shopify agency CartCoders’ 2026 cost breakdown. Theme-based stores with light customization cost less.', source: { name: 'CartCoders, “Shopify Developer Cost Breakdown for 2026”', url: 'https://cartcoders.com/blog/shopify-development/shopify-developer-cost-hourly-rate-project-pricing/' } },
  // row 15 plus the caveat in the same sheet
  { q: 'How much does a Shopify Plus build cost?', a: 'CartCoders’ general cost guide puts a Shopify Plus store at $40,000 to $120,000 or more, while its Shopify Plus hiring guide says a full build usually costs $15,000 to $45,000. The gap is scope: B2B, integrations and migration push builds toward the top.', source: { name: 'CartCoders, “Shopify Developer Cost Breakdown for 2026”', url: 'https://cartcoders.com/blog/shopify-development/shopify-developer-cost-hourly-rate-project-pricing/' } },
  // row 16
  { q: 'What do Shopify’s own plans cost each month?', a: 'Shopify lists Basic at $29, Grow at $79 and Advanced at $299 a month billed yearly, and Shopify Plus at $2,300 a month on a three-year term. Apps, themes and payment fees are extra.', source: { name: 'Shopify, “Ecommerce Website Cost: Full Guide for 2026”', url: 'https://www.shopify.com/blog/ecommerce-website-cost' } },
  // row 17
  { q: 'How much does a WooCommerce or WordPress site cost?', a: 'Agencies charge $3,000 to $100,000 for a WordPress site and freelancers $500 to $5,000, according to WebFX. WooCommerce stores sit inside that range depending on catalog and integrations.', source: { name: 'WebFX, “How Much Does a WordPress Website Cost in 2026”', url: 'https://www.webfx.com/web-design/pricing/wordpress-cost/' } },
  // row 25
  { q: 'How much does a small business website cost?', a: 'A small business website costs $1,000 to $48,000 on average, and small agencies typically charge $6,000 to $12,000, according to WebFX.', source: { name: 'WebFX, small business website cost (archived 12 Jul 2026)', url: 'https://www.webfx.com/blog/web-design/how-much-does-it-cost-to-build-a-website-for-a-small-business/' } },
  // row 26
  { q: 'How much does a website redesign cost?', a: 'A website redesign costs $3,000 to $75,000, with agencies charging $5,000 to $75,000 and freelancers $3,000 to $10,000, according to WebFX.', source: { name: 'WebFX, Website Redesign Pricing', url: 'https://www.webfx.com/web-design/pricing/redesign/' } },
  // row 18
  { q: 'How much does ecommerce SEO cost?', a: 'Ecommerce SEO costs $500 to $7,500 a month on average, with 71% of businesses in that range, according to WebFX’s pricing data.', source: { name: 'WebFX, Ecommerce SEO Pricing', url: 'https://www.webfx.com/seo/pricing/ecommerce/' } },
  // row 23
  { q: 'How much does AI SEO or generative engine optimization cost?', a: 'Agency-run generative engine optimization costs about $1,500 to $5,000 a month for a small business and $5,000 to $25,000 or more for a mid-sized one, according to WebFX’s 2026 pricing guide.', source: { name: 'WebFX, “How Much Does Generative Engine Optimization Cost in 2026”', url: 'https://www.webfx.com/blog/ai/generative-engine-optimization-cost/' } },
  // row 1
  { q: 'How much does a custom AI agent cost to build?', a: 'Building a custom AI agent costs roughly $5,000 to more than $180,000, according to development firm ProductCrafters’ 2026 breakdown. One narrow workflow sits at the low end; agents that touch an ERP, several systems and approvals sit higher.', source: { name: 'ProductCrafters, “AI Agent Development Cost”', url: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/' } },
  // row 35
  { q: 'What does it cost to sell on Walmart Marketplace?', a: 'Walmart charges no setup or monthly fee and takes a referral fee of 3% to 20% of each sale depending on category, with 15% common, according to Walmart Marketplace’s fee page.', source: { name: 'Walmart Marketplace, Referral fees', url: 'https://marketplace.walmart.com/referral-fees/' } },
];

// Built from PRICE_FAQS, the same array the visible FAQ renders, so they cannot drift.
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PRICE_FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const DRIVERS = [
  { k: 'Platform', d: 'Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, or Commerceflo by FactoryJet. We recommend the fit, not the priciest option.' },
  { k: 'Catalog size', d: 'The number of products, variants, and attributes, and how often they change across channels.' },
  { k: 'DTC, B2B, or both', d: 'Trade buyers need tiered pricing, net terms, account hierarchies, and reordering on top of the retail store.' },
  { k: 'Integrations', d: 'ERP, POS, 3PL, and marketplace connections that put every system on one order and inventory layer.' },
  { k: 'Migration', d: 'Moving products, customers, orders, and B2B pricing off an existing platform, with redirects that protect your rankings.' },
  { k: 'AI agents', d: 'Agents we build and implement that list, reprice, sync stock, and reconcile feeds across your channels.' },
];

// Every cost guide on the site (blog slugs containing "-cost-", "pricing" or "fees",
// plus the cost hub and calculators), each checked live with a 200 on 22 Oct 2026.
const COST_GUIDES: ReadonlyArray<{ group: string; links: ReadonlyArray<{ href: string; label: string }> }> = [
  { group: 'Websites and stores (US)', links: [
    { href: '/website-cost', label: 'Website cost overview' },
    { href: '/blog/how-much-does-a-website-cost-small-business-usa-2026', label: 'How much a small business website costs' },
    { href: '/blog/website-cost-small-business-usa-2026', label: 'Small business website cost, USA' },
    { href: '/blog/website-redesign-cost-us-small-business-2026', label: 'Website redesign cost, USA' },
    { href: '/blog/website-running-cost-per-month-2026', label: 'Website running cost per month' },
    { href: '/blog/cost-of-website-downtime-calculator', label: 'Cost of website downtime' },
    { href: '/blog/ecommerce-website-cost-2026', label: 'Ecommerce website cost' },
    { href: '/blog/shopify-website-cost', label: 'Shopify website cost' },
    { href: '/blog/shopify-development-cost-2026', label: 'Shopify development cost' },
    { href: '/blog/the-true-cost-of-shopify-plus-2026', label: 'The true cost of Shopify Plus' },
    { href: '/blog/shopify-plus-migration-cost-2026', label: 'Shopify Plus migration cost' },
  ] },
  { group: 'Search, ads and marketplaces', links: [
    { href: '/blog/seo-cost-small-business-2026', label: 'SEO cost for small business' },
    { href: '/blog/local-seo-cost-2026', label: 'Local SEO cost' },
    { href: '/blog/seo-audit-cost-2026', label: 'SEO audit cost' },
    { href: '/blog/geo-cost-small-business-2026', label: 'GEO cost for small business' },
    { href: '/blog/google-ads-cost-small-business-2026', label: 'Google Ads cost' },
    { href: '/blog/amazon-seller-fees-100-dollar-sale-2026', label: 'Amazon seller fees on a $100 sale' },
    { href: '/blog/tiktok-shop-fees-and-agency-cost-2026', label: 'TikTok Shop fees and agency cost' },
  ] },
  { group: 'AI agents and automation', links: [
    { href: '/blog/what-is-an-ai-agent-cost-2026', label: 'What an AI agent costs' },
    { href: '/blog/enterprise-ai-agent-cost-2026', label: 'Enterprise AI agent cost' },
    { href: '/blog/agentforce-pricing-vs-custom-ai-agent-2026', label: 'Agentforce pricing vs a custom agent' },
    { href: '/blog/ai-chatbot-cost-2026', label: 'AI chatbot cost' },
    { href: '/blog/ai-automation-agency-cost-2026', label: 'AI automation agency cost' },
    { href: '/blog/ai-consultant-cost-2026', label: 'AI consultant cost' },
    { href: '/blog/ai-mvp-development-cost-2026', label: 'AI MVP development cost' },
    { href: '/blog/how-much-does-an-ai-medical-receptionist-cost-2026', label: 'AI medical receptionist cost' },
    { href: '/blog/ai-voice-agents-vs-human-answering-services-cost-comparison-2026', label: 'AI voice agents vs answering services' },
  ] },
  { group: 'UK, Australia and other markets', links: [
    { href: '/blog/ecommerce-website-cost-uk-2026', label: 'Ecommerce website cost, UK' },
    { href: '/blog/uk-web-design-agency-pricing-2026-smb-guide', label: 'UK web design agency pricing' },
    { href: '/blog/website-redesign-cost-uk-2026-complete-pricing-guide', label: 'Website redesign cost, UK' },
    { href: '/blog/seo-cost-uk-2026', label: 'SEO cost, UK' },
    { href: '/blog/ai-cost-uk-2026', label: 'AI cost, UK' },
    { href: '/blog/website-cost-australia-2026', label: 'Website cost, Australia' },
    { href: '/blog/shopify-cost-australia-2026', label: 'Shopify cost, Australia' },
    { href: '/blog/seo-cost-australia-2026', label: 'SEO cost, Australia' },
    { href: '/blog/ai-cost-australia-2026', label: 'AI cost, Australia' },
    { href: '/blog/hire-ai-developers-australia-cost-2026', label: 'Hiring AI developers, Australia' },
    { href: '/blog/website-development-cost-india-2026', label: 'Website development cost, India' },
    { href: '/blog/hidden-cost-of-cheap-websites-india', label: 'The hidden cost of cheap websites' },
  ] },
  { group: 'Calculators, comparisons and migrations', links: [
    { href: '/tools/replatforming-cost-calculator', label: 'Replatforming cost calculator' },
    { href: '/marketplace-fee-calculator', label: 'Marketplace fee calculator' },
    { href: '/ecommerce-speed-calculator', label: 'Ecommerce speed calculator' },
    { href: '/tools/ai-agent-roi-calculator', label: 'AI agent ROI calculator' },
    { href: '/comparisons/shopify-plus-vs-magento', label: 'Shopify Plus vs Magento' },
    { href: '/comparisons/shopify-plus-vs-bigcommerce', label: 'Shopify Plus vs BigCommerce' },
    { href: '/comparisons/shopify-vs-woocommerce', label: 'Shopify vs WooCommerce' },
    { href: '/comparisons/headless-commerce-vs-monolithic', label: 'Headless vs monolithic commerce' },
    { href: '/comparisons/shopify-plus-vs-custom-headless-nextjs', label: 'Shopify Plus vs custom headless' },
    { href: '/replatforming', label: 'All replatforming guides' },
    { href: '/replatforming/magento-to-shopify', label: 'Magento to Shopify' },
    { href: '/replatforming/woocommerce-to-shopify', label: 'WooCommerce to Shopify' },
    { href: '/replatforming/bigcommerce-to-shopify-plus', label: 'BigCommerce to Shopify Plus' },
    { href: '/replatforming/salesforce-commerce-cloud-to-shopify-plus', label: 'Salesforce Commerce Cloud to Shopify Plus' },
    { href: '/replatforming/netsuite-suitecommerce-to-shopify-plus', label: 'NetSuite SuiteCommerce to Shopify Plus' },
    { href: '/replatforming/wix-to-shopify', label: 'Wix to Shopify' },
    { href: '/replatforming/squarespace-to-shopify', label: 'Squarespace to Shopify' },
    { href: '/replatforming/wordpress-to-shopify', label: 'WordPress to Shopify' },
    { href: '/marketplace-management', label: 'Marketplace management' },
    { href: '/target-plus-marketplace', label: 'Target Plus marketplace' },
    { href: '/faire-wholesale-marketplace', label: 'Faire wholesale marketplace' },
    { href: '/wayfair-marketplace', label: 'Wayfair marketplace' },
  ] },
];

// Bhavesh kept these three claims on 22 Oct 2026 ("HIPAA-aware, ADA-compliant",
// "Day 1 GitHub repo handover"). Wording below adds no new promise beyond them.
// HHS and DOJ sources were read for /services/medical-website-design on 29 Sep 2026;
// ada.gov and w3.org were re-read on 22 Oct 2026 (hhs.gov returns 403 to scripts).
const BUILD_PRACTICES = [
  {
    id: 'hipaa',
    t: 'HIPAA-aware builds for health businesses',
    d: 'For clinics, dental groups and other health businesses, we scope which pages and forms handle patient information before we quote, and plan forms, booking and tracking tools around the HHS guidance on online tracking technologies. Your practice remains the covered entity responsible for HIPAA compliance.',
    src: { name: 'HHS Office for Civil Rights, online tracking technologies guidance', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html' },
  },
  {
    id: 'accessibility',
    t: 'ADA-compliant, WCAG-based accessibility',
    d: 'We design and build to the Web Content Accessibility Guidelines (WCAG 2.2), which the Justice Department’s ADA web guidance names as a helpful technical standard. That covers colour contrast, image text, captions, labelled forms and menus that work by keyboard.',
    src: { name: 'ADA.gov, Guidance on Web Accessibility and the ADA', url: 'https://www.ada.gov/resources/web-guidance/' },
  },
  {
    id: 'ownership',
    t: 'Your code in your GitHub repository from day 1',
    d: 'The code lives in a GitHub repository you own from the first day of the build, not at launch. You also own the design files, content, store and accounts. Hosting and AI usage can run in your own accounts at cost, with no markup.',
  },
];

const STEPS = [
  { n: '01', t: 'Discovery & scope', d: 'We map your channels, catalog, and B2B rules and agree exactly what we are building.' },
  { n: '02', t: 'Fixed proposal', d: 'You get a written, fixed proposal with scope and milestones before any work begins.' },
  { n: '03', t: 'Milestone build', d: 'We design, build, and integrate against the agreed scope, paid per milestone.' },
  { n: '04', t: 'Launch & ownership', d: 'We launch, hand over the code and accounts, and stay on to support and scale.' },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="pricing-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script id="pricing-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <SiteHeader
        navLinks={[
          { label: 'E-Commerce', href: '/services/ecommerce-development' },
          { label: 'Shopify', href: '/services/shopify-development' },
          { label: 'Magento', href: '/services/magento-development' },
          { label: 'Services', href: '/services' },
          { label: 'Work', href: '/case-studies' },
          { label: 'FAQ', href: '/faq' },
        ]}
        cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
      />

      <main className="bg-white font-fj-body text-[#14110F]">
        <section className="mx-auto max-w-[1180px] px-5 py-16 md:py-24">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#B23E13]">Pricing</p>
          <h1 className="mt-3 max-w-[20ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-5xl">
            Know the scope before you commit.
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-[#46403B]">
            Whether you need more search inquiries or a new commerce system, start with the work your business needs.
            We document deliverables, fees, and engagement terms before work starts. Choose your service below to see what shapes the proposal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#B23E13] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">Talk to the Founder</a>
            <ModalCTAButton label="Discuss my project" region="us" btnVariant="secondary-light" />
          </div>
          <nav aria-label="Pricing by service" className="mt-8 flex flex-wrap gap-5 font-semibold text-[#C94A1A]">
            <a href="#seo" className="underline">SEO and AI search ↓</a>
            <a href="#commerce" className="underline">Ecommerce development ↓</a>
            <a href="#cost-guides" className="underline">Cost guides ↓</a>
            <a href="#faq-visible" className="underline">Market ranges ↓</a>
          </nav>
        </section>

        <section id="seo" className="scroll-mt-24 border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <p className="font-fj-mono text-xs font-semibold uppercase text-[#C94A1A]">SEO and AI search</p>
            <h2 className="mt-3 font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Scope the search work your business needs.</h2>
            <p className="mt-4 max-w-[68ch] text-[17px] leading-relaxed text-[#46403B]">A local service business and a large ecommerce catalog need different work. We start with your website, the customers you want, and how inquiries reach your team. Your proposal turns those findings into specific deliverables.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-[#E7DED6] bg-[#FFF8F5] p-6">
                <h3 className="font-fj-display text-xl font-bold">What changes the scope</h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-[#46403B]">
                  <li>Locations, service areas, and the services or products you want found.</li>
                  <li>Technical fixes, content gaps, and access to your website and listings.</li>
                  <li>Whether our team implements changes or works with your developer.</li>
                  <li>Tracking for calls, forms, booked meetings, and lead qualification.</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-[#E7DED6] p-6">
                <h3 className="font-fj-display text-xl font-bold">What the proposal should make clear</h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-[#46403B]">
                  <li>Initial work and the ongoing monthly deliverables.</li>
                  <li>Fees, third-party costs, and how additional work is approved.</li>
                  <li>Review cadence, account ownership, minimum term, and cancellation notice.</li>
                  <li>What we measure, the starting baseline, and who reviews lead quality.</li>
                </ul>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <ModalCTAButton label="Request my SEO audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
              <Link href="/services/ai-seo" className="font-semibold text-[#C94A1A] underline">Explore SEO and AI search services →</Link>
            </div>
          </div>
        </section>

        <section id="commerce" className="scroll-mt-24 border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">What drives an ecommerce project quote</h2>
            <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-[#46403B]">A few things move the number more than anything else.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DRIVERS.map((d) => (
                <article key={d.k} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <h3 className="font-fj-display text-lg font-bold">{d.k}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{d.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">How we quote a commerce build</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <article key={s.n} className="rounded-2xl border border-[#E7DED6] p-6">
                  <div className="font-fj-mono text-xs font-bold text-[#B23E13]">{s.n}</div>
                  <h3 className="mt-2 font-fj-display text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{s.d}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-[14px] text-[#6E635A]">
              See our <Link href="/services/ecommerce-development" className="font-semibold text-[#B23E13] underline">e-commerce development services</Link> or read how we think about{' '}
              <Link href="/website-cost" className="font-semibold text-[#B23E13] underline">what an ecommerce build costs</Link>.
            </p>
          </div>
        </section>

        <section id="how-we-build" className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Three things buyers ask about before they sign</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {BUILD_PRACTICES.map((b) => (
                <article key={b.id} id={b.id} className="scroll-mt-24 rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <h3 className="font-fj-display text-lg font-bold">{b.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{b.d}</p>
                  {b.src && (
                    <p className="mt-3 text-[13px] text-[#6E635A]">
                      Source: <a href={b.src.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#B23E13] underline">{b.src.name}</a>
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cost-guides" className="border-t border-[#E7DED6] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Every cost guide on this site</h2>
            <p className="mt-3 max-w-[64ch] text-[16px] leading-relaxed text-[#46403B]">
              Each guide quotes market ranges with named sources, never our prices. Calculators, platform comparisons and
              migration guides sit in the last column.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {COST_GUIDES.map((g) => (
                <div key={g.group}>
                  <h3 className="font-fj-display text-base font-bold">{g.group}</h3>
                  <ul className="mt-3 space-y-2 text-[14px] leading-snug">
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-[#46403B] underline decoration-[#E7DED6] underline-offset-2 hover:text-[#B23E13]">{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[14px] text-[#6E635A]">
              Definitions for the terms in these guides are in the <Link href="/glossary" className="font-semibold text-[#B23E13] underline">glossary</Link>,
              broader questions in the <Link href="/faq" className="font-semibold text-[#B23E13] underline">FAQ</Link>, and finished work in the{' '}
              <Link href="/portfolio" className="font-semibold text-[#B23E13] underline">portfolio</Link>.
            </p>
          </div>
        </section>

        {/* Rendered from FAQ_SCHEMA.mainEntity so the visible FAQ and the
            FAQPage JSON-LD can never drift apart. Before 2026-08-04 these
            questions existed ONLY in schema and rendered nowhere, which is the
            cloaking-adjacent case Google's structured-data policy prohibits. */}
        <section id="faq-visible" className="border-t border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">Pricing questions</h2>
            <p className="mt-3 max-w-[64ch] text-[15px] leading-relaxed text-[#46403B]">
              {PRICE_FAQS.length} questions. Dollar figures are US market ranges from the named source, read on {MARKET_READ}. They are not FactoryJet prices.
            </p>
            <dl className="mt-10 grid gap-6">
              {PRICE_FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <dt className="font-fj-display text-lg font-bold">{f.q}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-[#46403B]">
                    {f.a}
                    {f.source && (
                      <span className="mt-2 block text-[13px] text-[#6E635A]">
                        Source:{' '}
                        <a href={f.source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#B23E13] underline">{f.source.name}</a>
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
