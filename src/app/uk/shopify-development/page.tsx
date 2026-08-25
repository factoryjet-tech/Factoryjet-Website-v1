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
const UPDATED = '2026-08-25';

/* ─── Breadcrumb. ONE array feeds both the visible trail and the JSON-LD, so the
       two cannot drift apart. Never hand-copy a second array. ─────────────── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Shopify Agency UK', url: CANONICAL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
};

/* ─── External sources. Every URL fetch-verified 2026-08-25: HTTP 200, and the
       wording we rely on confirmed in the fetched page body. ──────────────── */
const SOURCES = [
  {
    id: 'ons-retail',
    label: 'Office for National Statistics',
    title: 'Retail sales, Great Britain: July 2026',
    url: 'https://www.ons.gov.uk/businessindustryandtrade/retailindustry/bulletins/retailsales/july2026',
    note: 'The ONS reports that the proportion of Great Britain retail sales made online was 28.3% in July 2026, down from 29.2% in June. We use it for the size of the online market and nothing else.',
  },
  {
    id: 'gov-distance-selling',
    label: 'GOV.UK',
    title: 'Online and distance selling for businesses',
    url: 'https://www.gov.uk/online-and-distance-selling-for-businesses',
    note: 'The government guidance every UK online shop has to follow: what you must show before an order is placed, the 14 day right to cancel after delivery, and the 30 day delivery deadline unless you agree otherwise.',
  },
  {
    id: 'google-cwv',
    label: 'Google Search Central',
    title: 'Understanding Core Web Vitals and Google search results',
    url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    note: 'Google states the thresholds we build to: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1.',
  },
  {
    id: 'google-product',
    label: 'Google Search Central',
    title: 'Product structured data',
    url: 'https://developers.google.com/search/docs/appearance/structured-data/product',
    note: 'The official specification for the product markup we add to Shopify product and collection templates, including the split between product snippets and merchant listings.',
  },
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
      'A Shopify agency designs, builds and launches Shopify stores for other businesses. In practice that is four jobs: designing the storefront, writing the theme code, wiring up payments, shipping and apps, then handing over a store you can run yourself. FactoryJet does all four for UK brands. We are a certified Shopify Partner, which means Shopify has checked our technical work rather than taking our word for it.',
  },
  {
    category: 'Choosing an agency',
    question: 'What is the difference between a Shopify Partner and a Shopify expert?',
    answer:
      'A Shopify Partner holds a verified account inside Shopify’s partner programme and builds stores through it, so Shopify can see the work. Anyone can type "Shopify expert" on a website with nothing behind it. When you compare UK agencies, ask for the partner account, then ask for two live stores they built and the speed score for each. Claims are cheap. Live URLs are not.',
  },
  {
    category: 'Choosing an agency',
    question: 'How do I choose the right Shopify agency UK brands can rely on?',
    answer:
      'Judge on evidence, not portfolio screenshots. Ask for live store URLs you can open, a PageSpeed Insights score for each, the name of the person who writes the code, whether the theme repository is yours on launch day, and what happens in the first month after go live. An agency that cannot answer those five in one call will not answer them once your deposit has cleared either.',
  },
  {
    category: 'Choosing an agency',
    question: 'Is FactoryJet a Shopify Plus agency UK merchants can use?',
    answer:
      'Yes. We build on Shopify Plus for UK merchants who need custom checkout screens through Checkout Extensibility, a B2B wholesale portal with company accounts and net payment terms, several storefronts under one admin, or heavy Shopify Flow automation. We also say no to Plus when standard Shopify does the job. Selling someone a plan they do not need is the fastest way to lose them at renewal.',
  },
  {
    category: 'Choosing an agency',
    question: 'Should I use a UK agency or an overseas one?',
    answer:
      'Use whoever answers your questions properly and works in your hours. What matters more than the office address is UK trading knowledge: VAT settings, Royal Mail and DPD rates, Klarna and Clearpay at checkout, and the distance selling rules published on GOV.UK. FactoryJet works to UK hours and builds to those rules. Ask any agency to explain the 14 day cancellation right before you sign anything.',
  },

  /* ── Hiring a developer ── */
  {
    category: 'Hiring a developer',
    question: 'How do I hire a Shopify developer in the UK?',
    answer:
      'There are three routes: a marketplace freelancer, an in-house hire, or an agency developer. A marketplace hire is quickest to start and hardest to hold to account. An in-house hire only pays off once you have a year of continuous work for them. An agency developer gives you a senior engineer for the length of a project with no payroll commitment. FactoryJet gives you a named engineer, not a rotating pool.',
  },
  {
    category: 'Hiring a developer',
    question: 'What should a Shopify developer UK brands hire be able to do?',
    answer:
      'A competent Shopify developer writes clean Liquid with editable section schemas, understands Online Store 2.0 metafields, can build a private app against the GraphQL Admin API, knows Checkout Extensibility now that checkout.liquid has gone, and can read a PageSpeed report and act on it. If someone cannot explain how they would cut Largest Contentful Paint on a product page, they install themes rather than build them.',
  },
  {
    category: 'Hiring a developer',
    question: 'Can I hire a Shopify developer for a short piece of work?',
    answer:
      'Yes. Not every job is a full build. Common short engagements are a one-off speed audit, a single new section for the theme editor, a Klaviyo flow rebuild, a checkout tidy-up before a peak trading period, or finishing a theme a previous developer abandoned. These run as fixed-scope work with a written deliverable and an agreed end date, not an open-ended hourly arrangement.',
  },
  {
    category: 'Hiring a developer',
    question: 'Do I get the same developer for the whole project?',
    answer:
      'Yes. The engineer who scopes your store on the discovery call writes the Liquid and runs the handover call. There is no account manager between you and the person doing the work, and no quiet handover to a junior once the contract is signed. After launch you keep the same contact, which is the whole point of the thirty day support window.',
  },
  {
    category: 'Hiring a developer',
    question: 'Can you work alongside our in-house team?',
    answer:
      'Yes. A good share of our UK work is overflow for teams that already have a marketer or a developer. We branch from your repository, raise pull requests your team reviews, and follow the naming and deployment conventions you already use. If you run the Shopify GitHub integration with a development theme per branch, we will use that rather than making you adopt our setup.',
  },

  /* ── Scope and timeline ── */
  {
    category: 'Scope and timeline',
    question: 'How is a Shopify project quoted?',
    answer:
      'We scope first and quote after. The discovery call covers catalogue size, the templates you need, your apps, your shipping and tax setup, and anything custom. Then you get one written figure for the whole build, split into milestones: a deposit before design, a payment at development kick-off, and the balance at launch. There is no hourly billing and no scope-creep invoice landing in week four.',
  },
  {
    category: 'Scope and timeline',
    question: 'How long does a Shopify store build take?',
    answer:
      'A custom theme on an existing store takes two to three weeks from design sign-off. A full store built from scratch, meaning theme, catalogue, payments, shipping, apps and launch, takes three to five weeks. Shopify Plus and headless Hydrogen builds run six to ten weeks depending on B2B complexity and how many storefronts you need. You get a firm date after discovery, not a range.',
  },
  {
    category: 'Scope and timeline',
    question: 'What is included in a standard Shopify build?',
    answer:
      'Figma designs for homepage, product page, collection page and cart on desktop and mobile, a custom Liquid theme with editable sections, catalogue and collection setup, payment providers, UK shipping zones and VAT settings, app installation styled to your theme, technical SEO, a Lighthouse audit before sign-off, and the full theme repository on launch day. Two rounds of design revisions happen before any code is written.',
  },
  {
    category: 'Scope and timeline',
    question: 'What does the 7 day delivery guarantee cover?',
    answer:
      'It covers straightforward builds: a custom theme applied to an existing store, or a new store of up to five templates with core pages, payment setup and launch. It does not cover complex migrations, multi-storefront Plus builds, or catalogues running to thousands of variants, because those genuinely take longer. We confirm on the discovery call whether your project qualifies before anyone commits to a date.',
  },
  {
    category: 'Scope and timeline',
    question: 'What is not included unless we agree it?',
    answer:
      'Product photography, copywriting for every product page, ongoing paid media, warehouse or ERP integration, and translated storefronts sit outside a standard build. So does written content for collection pages beyond a starter set. None of these are traps. They appear in the quote as separate lines so you can decide whether you want them now, later, or not at all.',
  },

  /* ── Platform and Shopify Plus ── */
  {
    category: 'Platform and Shopify Plus',
    question: 'Do I need Shopify Plus or will standard Shopify do?',
    answer:
      'Standard Shopify handles most UK direct-to-consumer brands perfectly well. Move to Plus when you need something only Plus gives you: custom checkout screens through Checkout Extensibility, native B2B with company accounts and net terms, several storefronts under one admin, or heavy Shopify Flow automation. We make that call with you during discovery and put the reasoning in writing so you are not taking it on trust.',
  },
  {
    category: 'Platform and Shopify Plus',
    question: 'What is headless Shopify with Hydrogen?',
    answer:
      'Headless means the storefront is rebuilt as a separate React application using Hydrogen, while Shopify keeps running inventory, orders and checkout behind it. You gain faster pages and total design freedom, and you take on a second codebase to maintain. Most smaller UK brands do not need it. It earns its keep when a small gain in conversion is worth more than the extra engineering.',
  },
  {
    category: 'Platform and Shopify Plus',
    question: 'Can you build a Shopify B2B wholesale portal for UK trade customers?',
    answer:
      'Yes. On Shopify Plus we configure native B2B: company accounts, named contacts per company, price lists per customer, net-30 and net-60 payment terms, tax exemption for VAT-registered trade accounts, and a separate B2B storefront with a gated catalogue. On standard Shopify we build the same shape using apps such as Wholesale Gorilla or Locksmith for catalogue gating and customer-specific pricing.',
  },
  {
    category: 'Platform and Shopify Plus',
    question: 'Can you build custom Shopify apps?',
    answer:
      'Yes. When no App Store app fits your workflow we build a private app against Shopify’s GraphQL Admin API using their Polaris design system, so the admin screens look like the rest of Shopify rather than a bolt-on. Typical private apps handle a bespoke pricing rule, an order feed into a warehouse system, or a stock sync with a supplier who will not adopt anything modern.',
  },
  {
    category: 'Platform and Shopify Plus',
    question: 'Will my team be able to edit the store without a developer?',
    answer:
      'Yes, and that is a design decision rather than luck. Every section we build is exposed in the Shopify theme editor with proper settings: headings, images, links, ordering and visibility. Your marketer can assemble a seasonal landing page by rearranging sections. You need a developer again when you want new functionality, not when you want to swap a photograph or change a headline.',
  },

  /* ── Migrations ── */
  {
    category: 'Migrations',
    question: 'Can you migrate my WooCommerce store to Shopify?',
    answer:
      'Yes, and it is our most common UK migration. We export products with their variants, images and custom fields, then customers and order history. We map your current URLs and write 301 redirects for every product and collection page so search rankings carry across. The full checkout is tested on a staging store before DNS moves, so launch day has no downtime and no half-migrated baskets.',
  },
  {
    category: 'Migrations',
    question: 'What other platforms do you migrate from?',
    answer:
      'We have moved UK stores to Shopify from WooCommerce, Magento 1 and 2, BigCommerce, PrestaShop, Squarespace Commerce, Wix, and hand-built platforms with no admin worth the name. Difficulty depends on catalogue size, how many custom fields you use, and whether you have customer-specific pricing that has to be rebuilt inside Shopify’s data model rather than simply copied across.',
  },
  {
    category: 'Migrations',
    question: 'Will my Google rankings survive a move to Shopify?',
    answer:
      'They survive when the redirect work happens before anything else. We audit your current URLs, find the product and collection pages that actually earn UK traffic, and build the redirect map before touching the store. Every changed URL gets a 301. The new sitemap goes to Google Search Console on launch day and we watch organic traffic for thirty days afterwards to catch anything that slipped through.',
  },
  {
    category: 'Migrations',
    question: 'What is the migration checklist you work through?',
    answer:
      'Nine steps in this order: audit the current store, export and clean the catalogue, map old URLs to new, rebuild collections and customer groups, import products and customers, build the theme on a staging store, test the full checkout with real cards, switch DNS with redirects already live, then monitor Search Console and analytics for thirty days. Nothing goes live until the redirect map is signed off.',
  },

  /* ── SEO, speed and UK rules ── */
  {
    category: 'SEO, speed and UK rules',
    question: 'Is technical SEO included in a Shopify build?',
    answer:
      'Yes, in every build. That covers title and meta templates for product, collection and page types, Product structured data so listings can qualify for richer Google results, BreadcrumbList markup, canonical tags to handle Shopify’s duplicate variant URLs, compressed images with real alt text, and sitemap submission to Search Console. Writing collection page copy and running a blog are separate pieces of work.',
  },
  {
    category: 'SEO, speed and UK rules',
    question: 'What page speed do you build to?',
    answer:
      'We build to Google’s published Core Web Vitals thresholds: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. In practice that means preloading the hero image, setting width and height on everything so nothing jumps, deferring non-critical scripts, and stripping theme code you never use. The audit runs before handover, not after.',
  },
  {
    category: 'SEO, speed and UK rules',
    question: 'Do you optimise Shopify stores for AI search?',
    answer:
      'Yes. Answer engines such as ChatGPT, Perplexity and Google AI Overviews pull from structured, plainly written pages. So we ship Product markup with price and availability, FAQ content answering the questions people actually type, and clean heading structure on collection pages. It is the same work that helps ordinary search, done on the assumption that a machine reads the page before a human ever does.',
  },
  {
    category: 'SEO, speed and UK rules',
    question: 'What UK selling rules does the store need to meet?',
    answer:
      'GOV.UK sets out what any UK online shop must show. Before an order is placed you need your business name, contact details and address, a clear description, the price including all taxes, and delivery costs and timings. You must tell customers they can cancel within 14 days of delivery, and you must deliver within 30 days unless you agree otherwise. We build that into the theme and the policy pages.',
  },
  {
    category: 'SEO, speed and UK rules',
    question: 'How big is online retail in the UK?',
    answer:
      'Large and steady rather than exploding. The Office for National Statistics puts the share of Great Britain retail sales made online at 28.3% in July 2026, down slightly from 29.2% the month before. Roughly one pound in every three and a half spent in retail now goes through a website. That is the market your store competes in, and why storefront quality shows up directly in revenue.',
  },

  /* ── Working with us ── */
  {
    category: 'Working with us',
    question: 'Do I own the theme code afterwards?',
    answer:
      'Yes, all of it. The complete theme repository lands in your GitHub account on launch day: every Liquid template, every section schema, every line of custom app code. There is no proprietary framework and no FactoryJet subscription keeping your store alive. Any Shopify developer anywhere can pick it up and carry on, which is exactly the position you want to be in.',
  },
  {
    category: 'Working with us',
    question: 'What support do I get after launch?',
    answer:
      'Every project includes thirty days of post-launch support for bugs, small changes, and the questions that only surface once real orders start arriving. After that you can keep a monthly retainer covering theme work, app integrations, Klaviyo updates, seasonal landing pages for peak trading, and periodic speed reviews. The retainer is optional, and you keep your code either way.',
  },
  {
    category: 'Working with us',
    question: 'How do we start?',
    answer:
      'Book a thirty minute store audit. We look at your current store or platform, tell you which pages are losing you the most money and why, and set out what a build would involve. You leave with notes you can act on whether or not you hire us. If it is a fit, the written scope and quote follow within two working days.',
  },
];

export const metadata: Metadata = {
  title: 'Shopify Agency UK | Hire a Shopify Developer | FactoryJet',
  description:
    'FactoryJet is a certified Shopify Partner agency in the UK. Hire a Shopify developer for custom themes, Shopify Plus, B2B, migrations and headless Hydrogen. Free store audit.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: 'Shopify Agency UK | Hire a Shopify Developer | FactoryJet',
    description:
      'A certified Shopify Partner agency for UK brands. Custom Liquid themes, Shopify Plus and B2B, store migrations and headless Hydrogen builds. Book a free store audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/uk/shopify-development-og.webp',
        width: 1200,
        height: 630,
        alt: 'Shopify agency UK: FactoryJet, certified Shopify Partner',
      },
    ],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Shopify Agency UK | Hire a Shopify Developer | FactoryJet',
      inLanguage: 'en-GB',
      dateModified: UPDATED,
      isPartOf: { '@id': 'https://factoryjet.com/#organization' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Agency UK',
      serviceType: 'Shopify development',
      description:
        'Certified Shopify Partner agency for UK brands: custom Liquid themes, Shopify Plus and B2B, store migrations and headless Hydrogen builds.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      provider: { '@id': 'https://factoryjet.com/#organization' },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Chief Technical Architect',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      // Every URL here was fetch-verified on 2026-08-25. See SOURCES above.
      citation: SOURCES.map((s) => ({
        '@type': 'CreativeWork',
        name: s.title,
        url: s.url,
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
    { ...breadcrumbSchema, '@id': `${CANONICAL}#breadcrumb` },
  ],
};

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
  1. HERO; Light cream, 2-col
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="wrap">
    <div className="col-6040">

      {/* Left: text */}
      <div>
        <div className="flex-wrap mb-3">
          <span className="chip-green"><span className="dot dot-green"></span>Certified Shopify Partner</span>
          <span className="chip">UK · Shopify agency</span>
        </div>
        <h1>Shopify Agency UK: Certified Partner, Senior Developers</h1>
        <p className="lead mt-4" style={{ maxWidth: '580px' }}>
          FactoryJet is a certified Shopify Partner agency for UK brands. Custom Liquid themes,
          Shopify Plus and B2B, store migrations, and headless Hydrogen builds. Hire a Shopify
          developer for one project or keep one on a monthly retainer. Scoped and quoted in writing
          after a short call, before any work starts.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '28px' }}>
          <HeroInlineForm region="uk" source="uk_shopify_development_hero" />
          <a href="#services" className="btn btn-outline">See What We Build</a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '24px' }}>
          <span className="trust-pill"><span className="dot dot-green"></span> 500+ stores delivered</span>
          <span className="trust-pill"><span className="dot dot-green"></span> 7-day delivery guarantee</span>
          <span className="trust-pill"><span className="dot dot-green"></span> Quoted before work starts</span>
        </div>
      </div>

      {/* Right: What Shopify Partner certification means */}
      <div className="card card-top-orange">
        <p className="eyebrow">WHY PARTNER CERTIFICATION MATTERS</p>
        <p className="pull-quote" style={{ fontSize: '17px' }}>Your store is not a side project for us. It's our certified speciality.</p>
        <div style={{ marginTop: '20px' }}>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Shopify Partner Certification</div>
              <div className="scorecard-note">passed Shopify's technical + commerce standards</div>
            </div>
            <div className="scorecard-val" style={{ color: 'var(--green)' }}>✓</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Lighthouse Score (Custom Theme)</div>
              <div className="scorecard-note">audited before every handover</div>
            </div>
            <div className="scorecard-val">95+</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Mobile Add-to-Cart Lift</div>
              <div className="scorecard-note">custom vs. generic theme, avg. across builds</div>
            </div>
            <div className="scorecard-val">2.3×</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Stores Delivered UK+Global</div>
              <div className="scorecard-note">ecommerce since day one</div>
            </div>
            <div className="scorecard-val">500+</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Core Web Vitals</div>
              <div className="scorecard-note">LCP, CLS, INP; all green on delivery</div>
            </div>
            <div className="scorecard-val" style={{ color: 'var(--green)' }}>Green</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--n100)', marginTop: '4px', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Audited before every handover. Code delivered to your GitHub on launch day.</p>
        </div>
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
        <h2 style={{ fontSize: 'clamp(1.4rem,2.6vw,1.9rem)', marginBottom: '16px' }}>What a Shopify agency in the UK does, and what FactoryJet does</h2>
        <div className="answer-box">
          <p>
            A Shopify agency designs, builds and launches Shopify stores for other businesses.
            FactoryJet is a certified Shopify Partner working with UK brands. We design the
            storefront in Figma, write the theme in Liquid, set up payments, UK shipping and VAT,
            integrate the apps you use, and hand you the theme repository on launch day. You can
            hire a Shopify developer from us for a single project or keep one on a monthly
            retainer.
          </p>
        </div>
        <h3 style={{ fontSize: '15px', marginTop: '28px', marginBottom: '12px' }}>What you get from a FactoryJet Shopify engagement</h3>
        <ul className="spec-list">
          <li><strong>A certified Shopify Partner account</strong> behind the build, not a claimed job title</li>
          <li><strong>Figma designs first</strong> for homepage, product page, collection page and cart, on desktop and mobile</li>
          <li><strong>A custom Liquid theme</strong> with editable sections your marketer can rearrange without a developer</li>
          <li><strong>UK trading setup</strong> covering VAT, shipping zones, Royal Mail and DPD rates, Klarna and Clearpay</li>
          <li><strong>Technical SEO built in</strong>, including Product and BreadcrumbList structured data</li>
          <li><strong>A speed audit before handover</strong>, measured against Google&#8217;s Core Web Vitals thresholds</li>
          <li><strong>The full theme repository</strong> in your own GitHub account on launch day</li>
          <li><strong>Thirty days of post-launch support</strong> with the engineer who wrote the code</li>
        </ul>
      </div>

      <div>
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--n200)' }}>
          {/* Below the fold now that this band is no longer the hero, so lazy.
              Eager-loading it here would compete with the H1 for LCP. */}
          <img width="1200" height="800" loading="lazy" decoding="async" src="https://im.runware.ai/image/os/a04d20/ws/3/ii/d50e4e8b-81a0-4b77-8e81-17f9f7924634.webp"
            alt="Custom Shopify storefront design for a UK brand, built by FactoryJet"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }}>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div className="stat-num" style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}>500+</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '6px' }}>Stores delivered</div>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div className="stat-num" style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}>7 days</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '6px' }}>Standard build guarantee</div>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div className="stat-num" style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}>28.3%</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '6px' }}>GB retail sales online, ONS</div>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div className="stat-num" style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}>4.9 / 5</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '6px' }}>Across 64 client reviews</div>
          </div>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '10px' }}>
          Online share of Great Britain retail sales, July 2026.{' '}
          <a href="https://www.ons.gov.uk/businessindustryandtrade/retailindustry/bulletins/retailsales/july2026" target="_blank" rel="noopener" style={{ color: '#B23E13', textDecoration: 'underline' }}>Office for National Statistics</a>.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  3. SHOPIFY PARTNER CERTIFICATION STRIP
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--white)', borderBottom: '1px solid var(--n200)', padding: '48px 0' }}>
  <div className="wrap">
    <div style={{ maxWidth: '720px', marginBottom: '32px' }}>
      <span className="chip-green" style={{ marginBottom: '16px' }}><span className="dot dot-green"></span>Certified Shopify Partner</span>
      <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', marginTop: '16px' }}>What a Shopify Partner gives you that a Shopify developer alone does not</h2>
    </div>
    <ul className="col-3">
      <li style={{ padding: '20px 20px 20px 0' }}>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '10px' }}>CERTIFIED ✓</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Technical standards</h3>
        <p style={{ fontSize: '14px', color: 'var(--n600)', marginBottom: '12px' }}>Partner status is earned against Shopify&#8217;s own assessments rather than written on a website.</p>
        <ul className="spec-list">
          <li>Advanced Liquid and Online Store 2.0 architecture</li>
          <li>Shopify Plus configuration and Checkout Extensibility</li>
          <li>Storefront and Admin API work with the GraphQL APIs</li>
        </ul>
      </li>
      <li style={{ padding: '20px', borderLeft: '1px solid var(--n200)', borderRight: '1px solid var(--n200)' }}>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '10px' }}>VERIFIED ✓</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>A track record Shopify can see</h3>
        <p style={{ fontSize: '14px', color: 'var(--n600)', marginBottom: '12px' }}>Stores built through the partner programme are attached to the account, so the work is checkable.</p>
        <ul className="spec-list">
          <li>Real store builds tied to a real partner account</li>
          <li>Client references rather than mood-board screenshots</li>
          <li>Performance data you can ask us to show you</li>
        </ul>
      </li>
      <li style={{ padding: '20px 0 20px 20px' }}>
        <div style={{ fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '10px' }}>SUPPORTED ✓</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Direct line into Shopify</h3>
        <p style={{ fontSize: '14px', color: 'var(--n600)', marginBottom: '12px' }}>Partners get support and platform previews that ordinary merchant accounts do not, which keeps builds current.</p>
        <ul className="spec-list">
          <li>Partner support channels when something breaks at speed</li>
          <li>Early access to platform changes before they land</li>
          <li>Advance notice when Shopify deprecates something you depend on</li>
        </ul>
      </li>
    </ul>
  </div>
</section>

{/* ════════════════════════════════════════════════
  4. WHY CERTIFIED SHOPIFY PARTNER; 60/40 editorial
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-6040">
      {/* Content 60% */}
      <div>
        <span className="eyebrow">WHY CERTIFIED PARTNER</span>
        <h2 style={{ marginBottom: '20px' }}>A Shopify agency that passed Shopify&#8217;s own bar, not one that claimed it</h2>
        <p className="lead" style={{ marginBottom: '20px' }}>Anyone can type "Shopify expert" into a portfolio page. A Shopify Partner account is granted, held, and visible to Shopify, which is a different kind of claim. When you compare a Shopify developer UK brands recommend against one who simply advertises well, that account is the first thing worth checking.</p>

        <div className="flex-wrap" style={{ marginBottom: '24px' }}>
          <span className="chip">Custom Liquid Theme</span>
          <span className="chip">Shopify Plus</span>
          <span className="chip">Checkout Extensibility</span>
          <span className="chip">Hydrogen Headless</span>
          <span className="chip">B2B Portal</span>
          <span className="chip">Store Migration</span>
        </div>

        <div className="stack">
          <p>Shopify is the platform most UK online shops run on, and the default themes are competent. Competent is the problem. A stock Dawn or Refresh install is designed to work for a candle shop, a bike shop and a law firm&#8217;s merchandise page at the same time, so it argues for none of them. That is what a custom theme is actually buying you.</p>
          <div className="pull-quote">The theme is your best salesperson. A generic one works against you.</div>
          <p>We design in Figma first, get every page signed off, and only then write Liquid. That order matters: fixing a layout in a design file takes an afternoon, and fixing it in week three of engineering takes a week. We have built Shopify stores for UK brands in London, Manchester, Birmingham, Leeds, Edinburgh and Glasgow.</p>

          <h3 style={{ fontSize: '15px', marginTop: '8px', marginBottom: '10px' }}>Four ways UK brands start with us</h3>
          <ol className="spec-list">
            <li><strong>A custom theme on the store you already run.</strong> Nothing is migrated, nothing goes down, the catalogue stays where it is.</li>
            <li><strong>A full store built from scratch.</strong> Empty Shopify admin to first order, including UK payments, shipping and VAT.</li>
            <li><strong>A migration from WooCommerce or Magento.</strong> Redirect map first, DNS last, rankings intact.</li>
            <li><strong>Shopify Plus with B2B, or a headless Hydrogen storefront.</strong> For brands who have genuinely run out of room.</li>
          </ol>

          <h3 style={{ fontSize: '15px', marginTop: '20px', marginBottom: '10px' }}>What a Shopify Partner account actually signals</h3>
          <ul className="spec-list">
            <li>Shopify can see the stores we have built through the programme</li>
            <li>Technical assessments have been sat and passed, not self-declared</li>
            <li>We get early access to platform changes such as Checkout Extensibility</li>
            <li>Partner status can be checked, unlike a job title on a website</li>
          </ul>
        </div>

        {/* Inline stat cards */}
        <ul className="col-3" style={{ marginTop: '28px' }}>
          <li style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--fd)', fontSize: '22px', fontWeight: '700', color: '#B23E13', letterSpacing: '-.03em' }}>28.3%</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '4px' }}>GB retail online, ONS July 2026</div>
          </li>
          <li style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--fd)', fontSize: '22px', fontWeight: '700', color: '#B23E13', letterSpacing: '-.03em' }}>2.3×</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '4px' }}>add-to-cart lift, our own builds</div>
          </li>
          <li style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--fd)', fontSize: '22px', fontWeight: '700', color: '#B23E13', letterSpacing: '-.03em' }}>&lt;2.5s</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--n400)', marginTop: '4px' }}>mobile LCP target, Google</div>
          </li>
        </ul>
      </div>

      {/* Right 40%: Tech scorecard */}
      <div className="card card-top-orange" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--n100)' }}>
          <span className="eyebrow" style={{ marginBottom: '0' }}>FactoryJet Shopify Scorecard</span>
        </div>
        <div style={{ padding: '0 24px' }}>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Lighthouse Performance</div>
              <div className="scorecard-note">custom Liquid, optimised images</div>
            </div>
            <div className="scorecard-val">95+</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Lighthouse SEO</div>
              <div className="scorecard-note">schema, canonical, sitemaps</div>
            </div>
            <div className="scorecard-val">100</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Mobile Add-to-Cart Rate</div>
              <div className="scorecard-note">vs. generic theme average</div>
            </div>
            <div className="scorecard-val">2.3×</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Time to First Byte</div>
              <div className="scorecard-note">Shopify's global CDN</div>
            </div>
            <div className="scorecard-val">&lt;310ms</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Checkout Conversion</div>
              <div className="scorecard-note">Shop Pay + native checkout</div>
            </div>
            <div className="scorecard-val">+15%</div>
          </div>
          <div className="scorecard-row">
            <div>
              <div className="scorecard-metric">Core Web Vitals</div>
              <div className="scorecard-note">LCP, CLS, INP; all three</div>
            </div>
            <div className="scorecard-val" style={{ color: 'var(--green)' }}>Green</div>
          </div>
        </div>
        <div style={{ padding: '16px 24px', background: 'var(--n100)', borderTop: '1px solid var(--n200)' }}>
          <div style={{ height: '3px', width: '32px', borderRadius: '999px', background: 'var(--orange)', marginBottom: '8px' }}></div>
          <p style={{ fontFamily: 'var(--fd)', fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Audited before every handover. No exceptions.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  5. THE PROBLEM; 3 pillars. Light: the page has ONE dark band
     and it is spent on the closing CTA.
════════════════════════════════════════════════ */}
<section className="light-sec">
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
      <span className="eyebrow">THE PROBLEM</span>
      <h2 style={{ marginTop: '12px' }}>Your Shopify store looks fine. That is not the same as selling well.</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Three things separate a store that converts from one that only looks the part. None of them are visible in a screenshot, which is why they survive so long.</p>
    </div>
    <div className="col-3">
      <div className="light-card">
        <span className="pillar-icon">🐢</span>
        <h3 style={{ marginBottom: '12px' }}>Slow themes lose mobile buyers</h3>
        <p style={{ marginBottom: '14px' }}>Google publishes the bar a page has to clear before the experience counts as good. Most theme-store installs miss it on mobile once apps and hero video are added.</p>
        <ul className="spec-list">
          <li>Largest Contentful Paint within <strong>2.5 seconds</strong></li>
          <li>Interaction to Next Paint under <strong>200 milliseconds</strong></li>
          <li>Cumulative Layout Shift under <strong>0.1</strong></li>
          <li>Measured on real Chrome data, not a lab test on your laptop</li>
        </ul>
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '12px' }}>
          Thresholds per{' '}
          <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener" style={{ color: '#B23E13', textDecoration: 'underline' }}>Google Search Central</a>.
        </p>
      </div>
      <div className="light-card">
        <span className="pillar-icon">📦</span>
        <h3 style={{ marginBottom: '12px' }}>Default product pages say nothing</h3>
        <p style={{ marginBottom: '14px' }}>A stock Dawn or Refresh layout is built to work for any shop, which means it argues for none of them. A product page has a job, and the default template does not know what yours is.</p>
        <ul className="spec-list">
          <li>Trust signals sitting below the fold where nobody sees them</li>
          <li>Delivery and returns buried in a footer link</li>
          <li>No answer to the one objection your buyers actually raise</li>
          <li>Variant pickers that hide half the range</li>
          <li>An add-to-cart button competing with three other buttons</li>
        </ul>
      </div>
      <div className="light-card">
        <span className="pillar-icon">📄</span>
        <h3 style={{ marginBottom: '12px' }}>Open-ended contracts drift</h3>
        <p style={{ marginBottom: '14px' }}>Hourly billing means the person you hired is paid more when the work takes longer. That is not a character problem, it is an incentive problem, and it is fixable with the shape of the agreement.</p>
        <ul className="spec-list">
          <li>Scope written down before anyone starts, not after</li>
          <li>Fixed-price milestones tied to delivered work</li>
          <li>A deposit, a development payment, then the balance at launch</li>
          <li>Changes priced as changes, so nothing arrives as a surprise</li>
          <li>Optional monthly retainer afterwards, never a condition of launch</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  6. PROCESS; 5 stages
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
      <span className="eyebrow">OUR PROCESS</span>
      <h2 style={{ marginTop: '12px' }}>From store audit to live launch, in five stages</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Design signed off before engineering. Staging store before DNS. Speed audit before sign-off. Every build follows the same order, and every stage has something you can look at when it ends.</p>
    </div>
    <ol className="process-grid">
      <li style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">01</span>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Discover</h3>
        <p style={{ fontSize: '14px', marginBottom: '12px' }}>A thirty minute store audit before anything is scoped.</p>
        <ul className="spec-list">
          <li>Current platform, catalogue size and app stack reviewed</li>
          <li>Analytics and conversion data read together on the call</li>
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
          <li>Section-level design matching what the theme editor exposes</li>
          <li>Two revision rounds included</li>
          <li>Written sign-off before any Liquid is written</li>
        </ul>
      </li>
      <li style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">03</span>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Build</h3>
        <p style={{ fontSize: '14px', marginBottom: '12px' }}>Visible progress, not a black box for three weeks.</p>
        <ul className="spec-list">
          <li>Staging store URL you can open within 48 hours</li>
          <li>Daily commits to your GitHub repository</li>
          <li>Products, collections and metafields configured</li>
          <li>Apps installed and restyled to match the theme</li>
        </ul>
      </li>
      <li style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--n200)' }}>
        <span className="stage-num">04</span>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Test</h3>
        <p style={{ fontSize: '14px', marginBottom: '12px' }}>The boring stage that stops launch day going wrong.</p>
        <ul className="spec-list">
          <li>Full checkout run on Shop Pay, PayPal and card</li>
          <li>Tested on iOS and Android, Chrome, Safari and Firefox</li>
          <li>Speed audit against Google&#8217;s Core Web Vitals thresholds</li>
          <li>Order confirmation and shipping emails proofread</li>
        </ul>
      </li>
      <li style={{ padding: '24px', background: 'rgba(240,90,40,.06)', borderRadius: '16px', border: '1px solid rgba(240,90,40,.22)' }}>
        <span className="stage-num">05</span>
        <h3 style={{ fontSize: '16px', marginBottom: '10px', color: '#B23E13' }}>Launch</h3>
        <p style={{ fontSize: '14px', marginBottom: '12px' }}>Handover, not a disappearance.</p>
        <ul className="spec-list">
          <li>DNS transfer with redirects already live</li>
          <li>Google Analytics 4 and Search Console set up</li>
          <li>Sitemap submitted the same day</li>
          <li>Recorded walkthrough you can replay</li>
          <li>Theme repository and all credentials handed to you</li>
        </ul>
      </li>
    </ol>
    <p style={{ marginTop: '24px', fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--n400)' }}>5 stages · 3 to 5 weeks to launch · Figma approval before build · zero downtime launch</p>
  </div>
</section>

{/* ════════════════════════════════════════════════
  7. SERVICES GRID; What we build
════════════════════════════════════════════════ */}
<section id="services" className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
      <span className="eyebrow">WHAT WE BUILD</span>
      <h2 style={{ marginTop: '12px' }}>Six things a Shopify agency UK brands hire us for</h2>
      <p className="lead" style={{ marginTop: '16px' }}>From a custom theme on a store you already run, through to a Shopify Plus B2B platform. Each one lists what is actually delivered, so you can compare us against another quote line by line.</p>
    </div>
    <ul className="svc-grid">
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 01</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Custom Shopify theme development</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>A theme designed in Figma, then written in Liquid with sections your team edits from the theme editor. No developer needed for day-to-day content changes.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Figma designs for four core templates, desktop and mobile</li>
          <li>Custom Liquid theme with editable section schemas</li>
          <li>Reusable content blocks for landing pages</li>
          <li>Speed pass against Core Web Vitals before handover</li>
          <li>Theme repository in your GitHub on launch day</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 02</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Full Shopify store setup and launch</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>Everything from an empty Shopify admin to a store taking real orders, configured for UK trading rather than default settings.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Product catalogue import with variants and custom fields</li>
          <li>Collection architecture and navigation</li>
          <li>Payment providers including Shop Pay, Klarna and Clearpay</li>
          <li>UK shipping zones with Royal Mail and DPD rates</li>
          <li>VAT settings and the policy pages GOV.UK requires</li>
          <li>DNS transfer and launch day checks</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 03</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Shopify Plus and B2B</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>For UK merchants who have outgrown what standard Shopify can be made to do. We tell you plainly when you have not.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Custom checkout screens through Checkout Extensibility</li>
          <li>Company accounts with named contacts per business</li>
          <li>Price lists per customer and net-30 or net-60 terms</li>
          <li>Tax exemption handling for VAT-registered trade accounts</li>
          <li>Several storefronts managed from one admin</li>
          <li>Shopify Flow automation for repetitive back-office work</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 04</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Store migrations to Shopify</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>Moving off WooCommerce, Magento, BigCommerce, PrestaShop or a hand-built platform, with the search rankings intact.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Products, variants, images and custom fields exported and cleaned</li>
          <li>Customers and order history carried across</li>
          <li>A signed-off redirect map before anything changes</li>
          <li>301 redirects live at the moment DNS switches</li>
          <li>Full checkout tested on staging with real cards</li>
          <li>Thirty days of Search Console monitoring after launch</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 05</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Headless Shopify with Hydrogen</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>A React storefront on Shopify&#8217;s Storefront API, for brands where a small conversion gain is worth more than the extra codebase.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Hydrogen storefront on React and Remix</li>
          <li>Streaming server rendering for fast first paint</li>
          <li>Shopify kept as the source of truth for stock and orders</li>
          <li>Native Shopify checkout, so payments stay compliant</li>
          <li>Deployment pipeline your own team can run</li>
        </ul>
      </li>
      <li className="svc-card">
        <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: '12px' }}>SERVICE 06</div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>App integration and custom apps</h3>
        <p style={{ fontSize: '14px', marginBottom: '14px' }}>App Store apps styled to look like they belong in your theme, and private apps built when nothing off the shelf fits.</p>
        <span className="panel-title">Delivered</span>
        <ul className="spec-list">
          <li>Reviews through Yotpo, Okendo or Judge.me</li>
          <li>Subscriptions through ReCharge or Skio</li>
          <li>Loyalty and referrals through Smile.io or LoyaltyLion</li>
          <li>Klaviyo flows matched to your brand, not the defaults</li>
          <li>Private apps on the GraphQL Admin API using Polaris</li>
          <li>Every widget restyled so it does not look bolted on</li>
        </ul>
      </li>
    </ul>
  </div>
</section>

{/* ════════════════════════════════════════════════
  8. STATS BAND; 3 big numbers + team image
════════════════════════════════════════════════ */}
<section className="stats-band">
  <div className="wrap">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'center' }}>
      <div className="col-3" style={{ gap: '32px' }}>
        <div>
          <div className="chip" style={{ marginBottom: '12px' }}><span className="dot dot-orange"></span>Conversion Lift</div>
          <div className="stat-num">2.3×</div>
          <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>improvement in mobile add-to-cart rate with a custom Shopify theme against a theme-store default</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '6px' }}>average across FactoryJet Shopify builds since 2020</p>
        </div>
        <div>
          <div className="chip" style={{ marginBottom: '12px' }}><span className="dot dot-orange"></span>Stores Launched</div>
          <div className="stat-num">500+</div>
          <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>Shopify stores built and launched across DTC, B2B, and enterprise brands globally</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '6px' }}>since FactoryJet began building e-commerce in 2005</p>
        </div>
        <div>
          <div className="chip" style={{ marginBottom: '12px' }}><span className="dot dot-orange"></span>Engagement Model</div>
          <div className="stat-num" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>Scoped, Not Templated</div>
          <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>milestone-paid Shopify builds with full code ownership from day one</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '6px' }}>senior Figma design, Liquid engineering, and Lighthouse performance, predictable from quote to launch</p>
        </div>
      </div>
      <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '5/3', position: 'relative' }}>
        <img width="800" height="600" loading="lazy" src="https://im.runware.ai/image/os/a06dlim3/ws/3/ii/0fb9638c-7885-4f21-81c0-7a4e45bf2b7f.webp" alt="FactoryJet team reviewing a newly launched Shopify store" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
<div style={{ display: 'none', width: '100%', height: '100%', minHeight: '320px', borderRadius: 'inherit', overflow: 'hidden' }}><img src="https://im.runware.ai/image/os/a08dlim3/ws/3/ii/2622d95f-5a6d-40d4-936d-0dd36f9742fe.webp" width="1200" height="800" alt="FactoryJet web development UK" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} /></div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  9. TECH STACK; Reversed 40/60
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-4060">
      {/* Left 40%: tech stack table */}
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--n100)' }}>
          <span className="eyebrow" style={{ marginBottom: '0' }}>Shopify Tech Stack</span>
        </div>
        <div style={{ padding: '0 24px' }}>
          <div className="scorecard-row">
            <div className="scorecard-metric">Storefront</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Shopify Liquid, Hydrogen (React/Remix)</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Design</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Figma, custom component library</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Email</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Klaviyo (flows, templates, segments)</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Subscriptions</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>ReCharge, Skio</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Reviews</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>Yotpo, Okendo, Judge.me</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Shipping</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>ShipStation, Shippo, Royal Mail APIs</div>
          </div>
          <div className="scorecard-row">
            <div className="scorecard-metric">Analytics</div>
            <div style={{ fontSize: '14px', color: 'var(--n600)', textAlign: 'right' }}>GA4, Meta Pixel, Triple Whale</div>
          </div>
        </div>
        <div style={{ padding: '16px 24px', background: 'var(--n100)', borderTop: '1px solid var(--n200)' }}>
          <div style={{ height: '3px', width: '32px', borderRadius: '999px', background: 'var(--orange)', marginBottom: '8px' }}></div>
          <p style={{ fontFamily: 'var(--fd)', fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>Shopify-native. No third-party lock-in.</p>
        </div>
      </div>

      {/* Right 60%: text */}
      <div>
        <span className="eyebrow">OUR TECH STACK</span>
        <h2 style={{ marginBottom: '20px' }}>Built on Shopify's native tools. No bloated app stacks.</h2>
        <p className="lead" style={{ marginBottom: '20px' }}>We build in Liquid and Hydrogen, which are Shopify's own languages, so your theme runs at platform speed rather than plugin speed.</p>
        <div className="flex-wrap" style={{ marginBottom: '24px' }}>
          <span className="chip">Shopify Liquid</span><span className="chip">Hydrogen</span><span className="chip">Remix</span>
          <span className="chip">Figma</span><span className="chip">Klaviyo</span><span className="chip">ReCharge</span>
          <span className="chip">Yotpo</span><span className="chip">Shopify Flow</span>
        </div>
        {/* Visual: Tech stack 4-card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '18px', marginBottom: '8px' }}>⚙️</div>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Shopify Liquid</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Clean, well-commented Liquid with custom section schemas. Your team edits from the theme editor, no code required.</p>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '18px', marginBottom: '8px' }}>⚛️</div>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Shopify Hydrogen</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Headless React/Remix via the Storefront API. Streaming SSR delivers sub-1-second page loads that standard Liquid can't match.</p>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '18px', marginBottom: '8px' }}>🛒</div>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Checkout Extensibility</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Custom checkout screens and post-purchase pages for Shopify Plus, required since Shopify retired checkout.liquid.</p>
          </div>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '18px', marginBottom: '8px' }}>📧</div>
            <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>Klaviyo Email Flows</p>
            <p style={{ fontSize: '12px', color: 'var(--n400)' }}>Welcome, abandoned cart, browse abandonment, back-in-stock and post-purchase flows, matched to your brand rather than Klaviyo defaults.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  9b. MID-PAGE CTA. Roughly the middle of the page, because a reader
      convinced here should not have to scroll to either extreme to act.
════════════════════════════════════════════════ */}
<MidPageCTA
  headline={'Get a free Shopify store audit'}
  sub={'Thirty minutes on a call. We open your current store, tell you which pages are losing you the most money and why, and set out what a build or a fix would involve. You keep the notes whether or not you hire us.'}
  label={'Book a Shopify store audit'}
  note={'Bhavesh replies within one business day.'}
/>

{/* ════════════════════════════════════════════════
  10. UK MARKET CONTEXT; every figure traceable to a source below
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div className="col-6040" style={{ alignItems: 'start', marginBottom: '48px' }}>
      <div>
        <span className="eyebrow">THE UK MARKET</span>
        <h2 style={{ marginTop: '12px' }}>Online is roughly a pound in every three and a half of UK retail</h2>
        <div className="stack" style={{ marginTop: '20px' }}>
          <p className="lead">
            The Office for National Statistics puts the share of Great Britain retail sales made
            online at 28.3% in July 2026, easing from 29.2% the month before. That is a mature
            market, not a gold rush. Growth comes from taking a bigger share of the same shoppers,
            which is a storefront problem rather than a traffic problem.
          </p>
          <div className="pull-quote">Same traffic. Better storefront. More orders.</div>
          <p>
            Shopify is the platform most of those shops run on, which is good news and bad news at
            once. The infrastructure is excellent and the default themes are competent. Competent
            is also exactly what every other shop in your category is using, which is why the work
            that matters sits in the details: what your product page argues, how fast it paints,
            and whether a shopper can find delivery cost without hunting.
          </p>
        </div>

        <h3 style={{ fontSize: '15px', marginTop: '28px', marginBottom: '12px' }}>What GOV.UK requires a UK online shop to show</h3>
        <p style={{ fontSize: '14px', marginBottom: '12px' }}>These are legal requirements for distance selling, not best practice. We build them into the theme and policy pages rather than leaving them for you to discover later.</p>
        <ul className="spec-list">
          <li>Your business name, contact details and address</li>
          <li>A clear description of what is being sold</li>
          <li>The price, <strong>including all taxes</strong></li>
          <li>Delivery arrangements, costs, and how long delivery takes</li>
          <li>How the customer pays, and how they cancel</li>
          <li>A statement that they can cancel within <strong>14 days of delivery</strong></li>
          <li>Delivery within <strong>30 days</strong> unless you agree otherwise</li>
          <li>A copy of the contract in a form they can keep</li>
        </ul>
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '12px' }}>
          Source:{' '}
          <a href="https://www.gov.uk/online-and-distance-selling-for-businesses" target="_blank" rel="noopener" style={{ color: '#B23E13', textDecoration: 'underline' }}>GOV.UK, Online and distance selling for businesses</a>.
        </p>
      </div>

      <div>
        <div className="panel">
          <span className="panel-title">UK cities we build for</span>
          <ul className="spec-list">
            <li>London and the South East</li>
            <li>Manchester, Liverpool and the North West</li>
            <li>Birmingham and the West Midlands</li>
            <li>Leeds, Sheffield and Yorkshire</li>
            <li>Bristol and the South West</li>
            <li>Edinburgh and Glasgow</li>
            <li>Nottingham and the East Midlands</li>
          </ul>
        </div>

        <div className="panel" style={{ marginTop: '16px' }}>
          <span className="panel-title">A worked example, not a forecast</span>
          <p style={{ fontSize: '13px', marginBottom: '12px' }}>Conversion rate is the share of visitors who buy. Here is the arithmetic on a shop taking 5,000 visits a month with a basket averaging 60 pounds.</p>
          <ul className="spec-list">
            <li>At <strong>1.0%</strong>, that is 50 orders a month</li>
            <li>At <strong>2.0%</strong>, the same visits produce 100 orders</li>
            <li>Doubling the rate doubles revenue with no extra traffic</li>
            <li>Halving the rate does the same in reverse, quietly</li>
          </ul>
          <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '12px' }}>Illustrative arithmetic. Your own numbers will differ, and we will run them with you on the audit call rather than guessing here.</p>
        </div>
      </div>
    </div>

    {/* 3 UK market facts */}
    <ul className="col-3">
      <li style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>28.3%</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>of Great Britain retail sales were made online in July 2026</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>down from 29.2% in June 2026. Office for National Statistics, released 21 August 2026</p>
      </li>
      <li style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>2.5s</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>the Largest Contentful Paint target Google publishes for a good experience</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>alongside Interaction to Next Paint under 200ms and layout shift under 0.1. Google Search Central</p>
      </li>
      <li style={{ background: 'var(--cream)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px' }}>
        <div className="stat-num" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>14 days</div>
        <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>the cancellation window every UK online shop must tell customers about</p>
        <p style={{ fontSize: '13px', color: 'var(--n400)', marginTop: '4px' }}>measured from delivery. Fail to say so and the window stretches to 12 months. GOV.UK</p>
      </li>
    </ul>
  </div>
</section>

{/* ════════════════════════════════════════════════
  11. COMPARISON TABLE
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '40px' }}>
      <span className="eyebrow">HOW WE COMPARE</span>
      <h2 style={{ marginTop: '12px' }}>Shopify agency, freelancer, or theme store: what you are choosing between</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Four routes, each sensible for someone. Here is what the decision actually looks like side by side, including the places we are not the obvious answer.</p>
    </div>
    {/* Positioning statement */}
    <div style={{ background: 'var(--white)', border: '1px solid var(--n200)', borderRadius: '16px', padding: '28px', marginBottom: '40px' }}>
      <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.6rem,3.4vw,2.4rem)', fontWeight: '700', color: '#B23E13', letterSpacing: '-.03em' }}>Quoted up front</div>
      <p style={{ fontSize: '14px', color: 'var(--n600)', marginTop: '8px', maxWidth: '560px' }}>The same Figma design, Liquid engineering and speed auditing a high-end UK Shopify agency project gets, without the six-month timeline or a retainer you cannot leave. Every build is scoped and quoted in writing after a free discovery call, so you know the shape of the commitment before work starts.</p>
      <ul className="spec-list" style={{ marginTop: '16px' }}>
        <li>Fixed-price milestones, not hourly billing</li>
        <li>Changes priced as changes, agreed before they happen</li>
        <li>Retainer optional after launch, never a condition of it</li>
      </ul>
    </div>
    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table className="cmp-table" style={{ minWidth: '700px' }}>
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Feature</th>
            <th className="fj">FactoryJet</th>
            <th>UK Shopify Agency</th>
            <th>Freelancer</th>
            <th>Theme Store</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="feat">Custom Figma design (not a premade theme)</td><td className="fj yes">✓ Yes</td><td className="yes">✓ Yes</td><td className="partial">Partial</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Shopify Partner certification</td><td className="fj yes">✓ Certified</td><td className="partial">Varies</td><td className="no">✗ Rarely</td><td className="no">N/A</td></tr>
          <tr><td className="feat">Delivery timeline</td><td className="fj">3 to 5 weeks</td><td>3 to 6 months</td><td>4 to 10 weeks (unreliable)</td><td>~1 week (you configure it)</td></tr>
          <tr><td className="feat">Shopify Plus capability</td><td className="fj yes">✓ Full</td><td className="yes">✓ Full</td><td className="partial">Partial</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Full migration (products, orders, customers)</td><td className="fj yes">✓ Yes</td><td className="yes">✓ Yes</td><td className="partial">Partial</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Lighthouse 95+ performance on delivery</td><td className="fj yes">✓ Guaranteed</td><td className="partial">Varies</td><td className="partial">Varies</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Technical SEO built in</td><td className="fj yes">✓ Yes</td><td className="partial">Add-on</td><td className="no">✗ Rarely</td><td className="no">✗ No</td></tr>
          <tr><td className="feat">Code ownership (your GitHub repo)</td><td className="fj yes">✓ Day One</td><td className="partial">After contract</td><td className="yes">✓ Yes</td><td className="yes">✓ Yes</td></tr>
          <tr><td className="feat">Quoted upfront (no hourly billing)</td><td className="fj yes">✓ Always</td><td className="no">✗ Hourly</td><td className="partial">Partial</td><td className="yes">✓ One-time</td></tr>
        </tbody>
      </table>
    </div>
    <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--n400)', marginTop: '16px' }}>Timelines reflect typical UK market ranges as of 2026. FactoryJet scopes and quotes every Shopify tier after a discovery call.</p>
  </div>
</section>

{/* ════════════════════════════════════════════════
  12. CLIENT RESULTS / TESTIMONIALS
════════════════════════════════════════════════ */}
<section className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '40px' }}>
      <span className="eyebrow">CLIENT RESULTS</span>
      <h2 style={{ marginTop: '12px' }}>What UK brands say after we build their Shopify store</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Three named clients, in their own words. We are still waiting on permission to publish the rest, and we would rather show three real ones than twelve invented ones.</p>
    </div>
    <ul className="col-3">
      <li className="result-card">
        <div style={{ height: '40px', background: 'var(--n100)', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '13px', fontWeight: '700', color: 'var(--ink)' }}>Belle Maison</span>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"FactoryJet delivered our Shopify store in 7 days: custom theme, full product catalogue, and all our payment methods live. The mobile speed was a revelation after our old WooCommerce site."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Ricky B, Founder, Belle Maison</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Artificial plants &amp; home décor</p>
        </div>
      </li>
      <li className="result-card">
        <div style={{ height: '40px', background: 'var(--n100)', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '13px', fontWeight: '700', color: 'var(--ink)' }}>Bombay Petals</span>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"Migrating from Magento was something every agency we spoke to quoted as a major project. FactoryJet did it properly, with zero data loss and all our SEO URLs preserved, at a fair price we agreed before any work started."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Vishal, Director, Bombay Petals</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>B2B artificial plants &amp; décor</p>
        </div>
      </li>
      <li className="result-card">
        <div style={{ height: '40px', background: 'var(--n100)', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '13px', fontWeight: '700', color: 'var(--ink)' }}>Impulse Branding</span>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6', marginBottom: '16px' }}>"The Figma-first process was brilliant. We saw every page on desktop and mobile before a line of code was written. No surprises at launch. The Lighthouse score was 97 on day one."</p>
        <div style={{ borderTop: '1px solid var(--n200)', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Kiran M, Founder, Impulse Branding</p>
          <p style={{ fontSize: '13px', color: 'var(--n400)' }}>Branding &amp; promotional products</p>
        </div>
      </li>
    </ul>
  </div>
</section>

{/* ════════════════════════════════════════════════
  13. HIRE SECTION + FOUNDER
════════════════════════════════════════════════ */}
<section className="sec-lg dot-grid" style={{ position: 'relative' }}>
  <div className="shimmer" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}></div>
  <div className="wrap">
    <div className="col-6040">
      <div>
        <span className="eyebrow">HIRE A SHOPIFY DEVELOPER UK</span>
        <h2 style={{ marginBottom: '20px' }}>Hire a Shopify developer UK brands can actually reach</h2>
        <div className="stack">
          <p className="lead">Most UK brands are not looking for a marketplace gig. They want to <strong style={{ color: 'var(--ink)' }}>hire a Shopify developer UK</strong> side who has shipped stores that take real money, and who answers a message on a Tuesday afternoon. Every FactoryJet engagement gives you one named engineer who designs, builds and launches the store, then stays reachable afterwards.</p>

          <h3 style={{ fontSize: '15px', marginTop: '4px', marginBottom: '10px' }}>Two ways to engage</h3>
          <ul className="spec-list">
            <li><strong>One-off build.</strong> Design, build and launch as a fixed scope with a fixed deadline. Standard builds of up to five templates carry our 7 day delivery guarantee.</li>
            <li><strong>Monthly retainer.</strong> Ongoing theme work, app integrations and conversion testing, with the same engineer throughout. No account manager handoffs, and no notice period holding your code hostage.</li>
          </ul>

          <h3 style={{ fontSize: '15px', marginTop: '20px', marginBottom: '10px' }}>When UK teams bring us in</h3>
          <ul className="spec-list">
            <li>You have outgrown a theme-store template and need a custom build</li>
            <li>You are migrating from WooCommerce or Magento and want it done properly</li>
            <li>Your in-house team needs a Shopify developer for overflow work</li>
            <li>A previous agency or freelancer went quiet mid-project</li>
            <li>You need Shopify Plus for B2B, checkout screens or multi-storefront</li>
            <li>Your store is slow and nobody can tell you which part is the problem</li>
            <li>Peak trading is coming and the checkout has never been stress tested</li>
          </ul>

          <h3 style={{ fontSize: '15px', marginTop: '20px', marginBottom: '10px' }}>What we will not do</h3>
          <ul className="spec-list is-excluded">
            <li>Bill you by the hour, which pays us more when work takes longer</li>
            <li>Sell you Shopify Plus when standard Shopify covers what you need</li>
            <li>Hold the theme repository behind a retainer</li>
            <li>Bolt on twelve apps instead of writing the section properly</li>
            <li>Promise a search ranking by a fixed date, because nobody can</li>
          </ul>

          <div className="panel" style={{ marginTop: '20px' }}>
            <span className="panel-title">Also available</span>
            <ul className="spec-list">
              <li><a href="/uk/ecommerce-seo" style={{ color: '#B23E13', textDecoration: 'underline' }}>Ecommerce SEO for UK stores</a></li>
              <li><a href="/uk/shopify-seo" style={{ color: '#B23E13', textDecoration: 'underline' }}>Shopify SEO</a></li>
              <li><a href="/uk/ecommerce-development" style={{ color: '#B23E13', textDecoration: 'underline' }}>Wider ecommerce development, including WooCommerce</a></li>
              <li><a href="/uk/web-design" style={{ color: '#B23E13', textDecoration: 'underline' }}>Web design for UK businesses</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Founder card */}
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg,#FF5C00 0%,#FF8C00 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', border: '3px solid rgba(255,92,0,.2)', flexShrink: '0' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: '26px', fontWeight: '800', color: '#fff', lineHeight: '1' }}>B</span>
        </div>
        <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Bhavesh</h3>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '11px', color: 'var(--n400)', letterSpacing: '.10em', textTransform: 'uppercase', marginBottom: '16px' }}>Founder · FactoryJet</p>
        <div style={{ background: 'var(--cream)', borderRadius: '12px', padding: '16px', marginBottom: '20px', textAlign: 'left' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6' }}>"Returns on your time. That is what I hold every project to. If we can't show you where the conversion lift came from, we don't deserve the next one."</p>
        </div>
        <ModalCTAButton label="Talk to the Founder" region="uk" modalVariant="default" btnVariant="primary-light" />
        <p style={{ fontSize: '12px', color: 'var(--n400)', marginTop: '12px' }}>30-min free store audit. No pitch. No pressure.</p>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  14. WHY FACTORYJET; light, three pillars with real deliverables
════════════════════════════════════════════════ */}
<section className="light-sec">
  <div className="wrap">
    <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
      <span className="eyebrow">WHY FACTORYJET</span>
      <h2 style={{ marginTop: '12px' }}>500+ stores built. Not slide decks about them.</h2>
      <p className="lead" style={{ marginTop: '16px' }}>Three working habits do most of the heavy lifting on a Shopify build. They are ordinary, and they are the reason projects land on the date we said they would.</p>
    </div>
    <div className="col-3">
      <div className="light-card">
        <span className="pillar-icon">🎯</span>
        <h3 style={{ marginBottom: '12px' }}>Design for the decision, not the screenshot</h3>
        <p style={{ marginBottom: '14px' }}>A Shopify theme has one job. We design each template around the decision the shopper is actually making at that moment.</p>
        <ul className="spec-list">
          <li>Trust signals placed where the hesitation happens</li>
          <li>Delivery cost and timing on the product page, not the footer</li>
          <li>A sticky cart that appears on scroll instead of on load</li>
          <li>Review count near the price, where it is doing work</li>
          <li>One primary action per screen</li>
        </ul>
      </div>
      <div className="light-card">
        <span className="pillar-icon">⚡</span>
        <h3 style={{ marginBottom: '12px' }}>Figma approval before a line of Liquid</h3>
        <p style={{ marginBottom: '14px' }}>Every key page is drawn and signed off before a code editor opens. Wrong directions get fixed in an afternoon rather than in week three.</p>
        <ul className="spec-list">
          <li>Homepage, product, collection and cart, desktop and mobile</li>
          <li>Two revision rounds included before build starts</li>
          <li>Written sign-off, so nobody relies on remembering a call</li>
          <li>Section-level design, matching what the theme editor will expose</li>
        </ul>
      </div>
      <div className="light-card">
        <span className="pillar-icon">🔒</span>
        <h3 style={{ marginBottom: '12px' }}>Your code, your GitHub, launch day</h3>
        <p style={{ marginBottom: '14px' }}>The whole codebase lands in your account the day you go live. No proprietary builder and no subscription keeping your store alive.</p>
        <ul className="spec-list">
          <li>Every Liquid template and section schema</li>
          <li>Custom app source, where a private app was built</li>
          <li>A README covering local setup and deployment</li>
          <li>Admin and app credentials transferred to your accounts</li>
          <li>A recorded handover walkthrough you can replay</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* ════════════════════════════════════════════════
  15. FAQ. Rendered from FAQ_ITEMS, the same array the FAQPage
      JSON-LD above maps. There is no second copy of this content,
      so the schema and the page cannot drift apart.
════════════════════════════════════════════════ */}
<section id="faq" className="sec-lg" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <div style={{ maxWidth: '680px' }}>
      <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
      <h2 style={{ marginTop: '12px' }}>What UK brands ask before hiring a Shopify agency</h2>
      <p className="lead" style={{ marginTop: '16px' }}>
        {FAQ_ITEMS.length} questions, answered the way we answer them on a discovery call.
        No runaround, no "it depends" without saying what it depends on.
      </p>
    </div>

    {/* Mobile pill nav */}
    <nav className="faq-pill-nav" aria-label="FAQ categories">
      {FAQ_CATEGORIES.map((cat) => (
        <a key={cat.id} href={`#${cat.id}`}>
          {cat.label}{' '}
          <span className="pill-count">{FAQ_ITEMS.filter((f) => f.category === cat.label).length}</span>
        </a>
      ))}
    </nav>

    <div className="faq-grid">
      {/* Sidebar (desktop) */}
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

      {/* Accordion */}
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
  15b. SOURCES. Every URL below returned HTTP 200 on 2026-08-25 and
       the wording we rely on was confirmed in the fetched page body.
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--cream)', borderTop: '1px solid var(--n200)' }}>
  <div className="wrap">
    <div className="col-4060">
      <div>
        <span className="eyebrow">Sources</span>
        <h2 style={{ fontSize: 'clamp(1.4rem,2.6vw,1.9rem)', marginTop: '8px' }}>Where the numbers on this page come from</h2>
        <p style={{ marginTop: '14px', maxWidth: '38ch' }}>
          Every figure quoted above is traceable to a primary source you can open yourself. If a
          claim on an agency page has no link behind it, treat it as marketing rather than fact.
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
  15c. AUTHOR; who is accountable for this page
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
  16. UK CITIES; Internal linking
════════════════════════════════════════════════ */}
<section className="sec" style={{ background: 'var(--cream)' }}>
  <div className="wrap">
    <span className="eyebrow">Serving the UK</span>
    <h2 style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', marginTop: '8px', marginBottom: '24px' }}>Shopify agency services across the UK</h2>
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
    {/* Related reading */}
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
        <a href="/uk/shopify-seo" className="blog-card">
          <p>Already on Shopify? See our UK Shopify SEO services &#8594;</p>
        </a>
      </li>
    </ul>
  </div>
</section>

{/* ════════════════════════════════════════════════
  17. FINAL CTA; Dark
════════════════════════════════════════════════ */}
<section style={{ background: 'var(--dark)', padding: '80px 0' }}>
  <div className="wrap" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
    <span className="eyebrow" style={{ color: 'rgba(255,92,0,.9)' }}>READY TO START</span>
    <h2 style={{ color: '#fff', marginTop: '12px', fontSize: 'clamp(1.75rem,4vw,2.75rem)' }}>Book a free Shopify store audit</h2>
    <p style={{ marginTop: '16px', color: 'rgba(255,255,255,.78)', fontSize: '16px', lineHeight: '1.7' }}>Thirty minutes. We open your current store or platform, tell you which pages are losing you the most money and why, and set out what fixing it would involve. No pitch, no pressure, and you keep the notes whether or not you hire us.</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '32px' }}>
      <ModalCTAButton label="Book Your Free Store Audit" region="uk" modalVariant="default" btnVariant="primary-light" />
      <a href="/portfolio" className="btn btn-outline" style={{ color: 'rgba(255,255,255,.85)', borderColor: 'rgba(255,255,255,.3)' }}>See Our Portfolio</a>
    </div>
    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.62)', marginTop: '20px' }}>Quoted up front. Full code ownership. Certified Shopify Partner. 500+ stores delivered.</p>
  </div>
</section>


</main>
</div>
      <Footer />
    </>
  );
}
