import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';
const CANONICAL = 'https://factoryjet.com/boise/ecommerce-development';

export const metadata: Metadata = {
  title: 'Boise Ecommerce Development Agency | Shopify Plus & Headless | FactoryJet',
  description:
    'Boise ecommerce development agency. Headless Shopify Plus, Next.js storefronts, sub-second checkout, and custom B2B wholesale integrations for Idaho brands.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Boise Ecommerce Development Agency | Shopify Plus & Headless | FactoryJet',
    description:
      'Boise ecommerce development agency. Headless Shopify Plus, Next.js storefronts, sub-second checkout, and custom B2B wholesale integrations for Idaho brands.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Boise Ecommerce Development Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boise Ecommerce Development Agency | Shopify Plus & Headless | FactoryJet',
    description: 'Custom headless Shopify Plus and Next.js ecommerce development in Boise ID. Sub-second performance, full IP code ownership, 7-day delivery.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Shopify Plus Partner',
  'Headless Next.js 15',
  'BigCommerce B2B Edition',
  'Klaviyo Master Elite',
  'Algolia Search AI',
  'Sanity CMS Studio',
  'Cloudflare Edge CDN',
  'Stripe Payments Enterprise',
];

const STAT_CARDS = [
  { num: '7 Days', title: 'Average Turnaround Time', desc: 'From approved Figma UI/UX prototypes to fully tested, production-deployed Next.js commerce code.', icon: '⚡' },
  { num: '98+', title: 'Lighthouse Performance Score', desc: 'Engineered for sub-second first contentful paint and flawless Core Web Vitals.', icon: '📈' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own the clean GitHub repository, design assets, and deployment infrastructure.', icon: '🛡️' },
  { num: '0', title: 'WordPress Plugin Bloat', desc: 'Zero vulnerable third-party dependencies, slow PHP execution, or monthly maintenance bloat.', icon: '💎' },
];

const DISTRICTS = [
  {
    corridor: 'Downtown Boise & 8th Street Retail Corridor',
    query: 'outdoor lifestyle apparel d2c ecommerce downtown boise',
    focus: 'Outdoor Lifestyle, Modern Apparel & Boutique Retail',
    desc: 'The vibrant heart of Boise commerce. Demands high-speed storefronts, interactive sizing visualizers, and sub-second edge hosting.',
  },
  {
    corridor: 'Boise Tech Corridor & Micron Campus Nexus',
    query: 'electronics hardware software licensing ecommerce boise tech',
    focus: 'Tech Hardware, Software Subscriptions & Digital Licensing',
    desc: 'High-growth technology corridor. Features recurring subscription billing, digital license provisioning, and global CDN delivery.',
  },
  {
    corridor: 'Meridian & Eagle High-Growth Commerce Hub',
    query: 'specialized home goods consumer health wellness ecommerce meridian id',
    focus: 'Consumer Goods, Health & Wellness & High-Growth D2C',
    desc: 'Fastest-growing commercial corridor in Idaho. Features dynamic bundle builders, subscription retention engines, and mobile checkouts.',
  },
  {
    corridor: 'Treasure Valley AgTech & Specialty Food Spine',
    query: 'specialty food beverage organic agricultural wholesale ecommerce treasure valley',
    focus: 'Specialty Food & Beverage, Organic Produce & B2B AgTech',
    desc: 'Agricultural heartland. B2B wholesale portals with purchase order workflows, cold-chain freight calculation, and tiered volume pricing.',
  },
  {
    corridor: 'Nampa & Caldwell Industrial Supply Corridor',
    query: 'industrial equipment building materials wholesale b2b ecommerce nampa id',
    focus: 'Industrial Equipment, Building Supplies & Manufacturing',
    desc: 'Heavy manufacturing and logistics fulfillment core. Features bulk matrix ordering, real-time ERP inventory sync, and LTL shipping.',
  },
  {
    corridor: 'Hyde Park & North End Artisanal Enclave',
    query: 'handcrafted goods specialty boutique lifestyle ecommerce hyde park boise',
    focus: 'Artisanal Goods, Handcrafted Decor & Direct-to-Consumer',
    desc: 'Historic craft creative district. Features tactile editorial layouts, interactive 3D product configurators, and seamless mobile checkout.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Outdoor Recreation, Sporting Gear & Apparel',
    headline: 'High-Converting Headless Storefronts for Idaho Outdoor Brands',
    description:
      'From Boise backcountry ski innovators to mountain biking and fly-fishing gear builders, Idaho outdoor brands demand high-speed shopping experiences. We engineer bespoke Figma UI/UX storefronts with sub-second product page loads, one-click mobile checkout, rich interactive lookbooks, and customized gear configurators.',
    image: '/images/us/boise/ecommerce/portfolio-1.webp',
    alt: 'Boise Idaho outdoor sporting goods recreational gear and apparel headless ecommerce storefront',
    points: [
      'Sub-second first contentful paint and instant product filtering with zero layout shifts',
      'Interactive visual lookbooks, dynamic sizing calculators, and cross-sell gear bundles',
      'Seamless mobile checkout utilizing Shop Pay, Apple Pay, and Klarna flexible financing',
    ],
  },
  {
    sector: 'Treasure Valley AgTech, Organic Produce & Specialty Food',
    headline: 'Tactile Editorial E-Commerce for Idaho Agricultural Producers',
    description:
      'Specialty food producers, craft beverage makers, and sustainable agricultural leaders across the Treasure Valley demand digital storefronts that reflect their product quality. We engineer rich visual storytelling layouts with recurring subscription delivery management, cold-pack shipping logic, and localized age verification.',
    image: '/images/us/b2b-website-design/sales-enablement.webp',
    alt: 'Boise Treasure Valley specialty food beverage and agritech subscription ecommerce platform',
    points: [
      'Flexible recurring subscription management with custom delivery interval selection',
      'Dynamic cold-pack and localized perishable shipping rate calculation',
      'Integrated loyalty rewards, customer referral engines, and verified review collection',
    ],
  },
  {
    sector: 'B2B Industrial Hardware, Tooling & Construction Materials',
    headline: 'Enterprise Wholesale Portals for Nampa & Caldwell Distributors',
    description:
      'Industrial hardware distributors, building material suppliers, and precision tooling manufacturers across Nampa and Caldwell require robust B2B wholesale capabilities. We build high-speed wholesale platforms with automated PO processing, Net-30 credit terms, customer group tier pricing, and real-time ERP inventory syncing.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'Boise Nampa industrial hardware building materials and manufacturing B2B ecommerce engineering',
    points: [
      'Custom customer group pricing tiers with contracted volume discount schedules',
      'Instant PO generation, Net-30 invoicing, and multi-user corporate approval workflows',
      'Real-time two-way synchronization with SAP, NetSuite, Epicor, and QuickBooks Enterprise',
    ],
  },
  {
    sector: 'HealthTech, Bio-Nutritional Supplements & Wellness',
    headline: 'High-Conversion Subscription Storefronts for Meridian Scale-Ups',
    description:
      'Fast-growing wellness, nutritional supplement, and medical device providers across Meridian and Eagle require platforms engineered for recurring customer lifetime value. We build custom headless Next.js storefronts with dynamic bundle builders, diagnostic intake quizzes, and automated recurring subscription billing.',
    image: '/images/us/b2b-website-design/hero.webp',
    alt: 'Boise Meridian direct-to-consumer nutritional supplement and healthtech subscription ecommerce',
    points: [
      'Custom interactive bundle configurators and personalized diagnostic quiz engines',
      'Seamless subscription management with Recharge, Smartrr, and Stripe Billing',
      'High-speed mobile checkout optimized for paid social, TikTok Shop, and search traffic',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Slow Monolithic Platforms & Sluggish Mobile Checkouts',
    problem: 'Legacy Magento and bloated WooCommerce stores suffer from 4-second load times, checkout friction, and high cart abandonment on mobile devices.',
    solution: 'We build headless Next.js 15 storefronts connected to Shopify Plus APIs, delivering sub-second page rendering and frictionless 1-tap checkout.',
  },
  {
    num: '02',
    title: 'Eliminating Endless 6-Month Replatforming Timelines & Revenue Disruption',
    problem: 'Traditional agencies quote 6 to 9 months for replatforming, leading to massive budget overruns, operational friction, and lost holiday sales.',
    solution: 'Our disciplined agile migration sprint delivers complete catalog data migration, ERP integration, and production launch in verified milestone windows.',
  },
  {
    num: '03',
    title: 'Overcoming Broken ERP, POS & Multi-Warehouse Inventory Sync',
    problem: 'Disjointed inventory systems cause overselling, delayed fulfillment, manual spreadsheet updates, and poor customer reviews across physical and online channels.',
    solution: 'We engineer real-time two-way webhooks that synchronize inventory across NetSuite, SAP, Manhattan POS, and regional 3PL fulfillment centers.',
  },
  {
    num: '04',
    title: 'Stopping Complex Plugin Chains & Fragile Checkout Flows',
    problem: 'Stacking 25+ third-party Shopify apps slows down storefront speed, introduces script conflicts, and creates expensive monthly SaaS subscriptions.',
    solution: 'We build native React components and custom Shopify Functions, replacing expensive apps with lightweight, custom code that you own 100%.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Catalog Architecture, ERP Mapping & Data Strategy',
    desc: 'We map every SKU, customer record, historical order, and third-party integration into a clean headless commerce architectural blueprint.',
    deliverables: ['Product data modeling and attribute hierarchy map', 'ERP, CRM, and 3PL fulfillment integration matrix', 'SEO redirect plan preserving 100% of organic traffic', 'Fixed-price milestone agreement and delivery schedule'],
  },
  {
    phase: 'Phase 02',
    title: 'Custom Figma UI/UX Design & High-Conversion Storefront Prototyping',
    desc: 'We design bespoke desktop and mobile shopping experiences in Figma, focusing on friction-free navigation, interactive PDPs, and optimized checkout funnels.',
    deliverables: ['Complete desktop and mobile Figma prototypes', 'Interactive product detail page and cart drawer wireframes', 'Bespoke design system tokens and typography scales', 'Stakeholder design review and milestone sign-off'],
  },
  {
    phase: 'Phase 03',
    title: 'Headless Next.js 15 Engineering & Shopify Plus API Integration',
    desc: 'We build the production application using Next.js 15 App Router, React 19, Tailwind CSS, and Shopify Storefront GraphQL APIs.',
    deliverables: ['Custom headless Next.js frontend repository', 'Shopify Plus Storefront API and Cart integration', 'Custom B2B wholesale pricing and portal modules', 'Automated unit, integration, and end-to-end checkout testing'],
  },
  {
    phase: 'Phase 04',
    title: 'Zero-Downtime Data Cutover, Speed Tuning & Handover',
    desc: 'We execute complete database migration, verify 95+ Core Web Vitals, manage DNS cutover, and transfer full code repository ownership.',
    deliverables: ['Complete historical order and customer data migration', 'Core Web Vitals 95+ optimization report', 'Live DNS cutover with zero downtime or lost orders', 'Full GitHub repository transfer and 30-day warranty'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Architecture Stack',
    factoryjet: 'Headless Next.js 15 App Router on Cloudflare Edge paired with Shopify Plus.',
    traditional: 'Heavy monolithic Shopify themes or outdated monolithic Magento PHP stacks.',
  },
  {
    label: 'Checkout Speed',
    factoryjet: 'Sub-second mobile page loads with instant 1-tap Shop Pay, Apple Pay, and Google Pay.',
    traditional: '3 to 5 second mobile page loads with render-blocking tracking scripts and layout shift.',
  },
  {
    label: 'B2B & Wholesale Capabilities',
    factoryjet: 'Native custom B2B wholesale portal with customer pricing tiers, Net terms, and ERP sync.',
    traditional: 'Fragile third-party apps charging expensive monthly subscriptions per wholesale seat.',
  },
  {
    label: 'Code & IP Ownership',
    factoryjet: '100% full intellectual property ownership. You receive the complete GitHub repository.',
    traditional: 'Proprietary theme locks or agency-retained custom codebases.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Scope' },
  { key: 'timeline', label: 'Timeline & Migration' },
  { key: 'tech', label: 'Shopify & Next.js Stack' },
  { key: 'local', label: 'Boise & Idaho Focus' },
  { key: 'ownership', label: 'Code & Ownership' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does custom ecommerce development cost for a Boise brand?',
    answer:
      'Project investments depend on total SKU count, custom ERP/3PL integrations, B2B wholesale requirements, and custom interactive features. Every project is quoted with a binding, fixed-price milestone agreement and zero hidden change orders.',
  },
  {
    category: 'pricing',
    question: 'Are there hidden monthly maintenance fees or recurring agency retainers?',
    answer:
      'No. We deliver turnkey, fully documented codebases that you own 100%. You pay standard platform hosting fees directly to your providers and pay zero mandatory agency retainers.',
  },
  {
    category: 'pricing',
    question: 'How do you guarantee that project budgets remain fixed without overages?',
    answer:
      'We complete an exhaustive architectural discovery and API integration mapping process before development begins, locking in the technical scope in a binding milestone contract.',
  },
  {
    category: 'pricing',
    question: 'Can you help us reduce our monthly Shopify app subscription costs?',
    answer:
      'Yes. By engineering custom React components and native Shopify Functions, we typically eliminate 5 to 15 third-party apps, saving thousands annually in recurring SaaS fees while speeding up your site.',
  },
  {
    category: 'timeline',
    question: 'How fast can you replatform our store from Magento or WooCommerce to Shopify Plus?',
    answer:
      'Our disciplined agile engineering sprints deliver complete replatforming, data migration, and custom frontend development within verified milestone timelines without halting current store sales.',
  },
  {
    category: 'timeline',
    question: 'Will our existing customer passwords and historical order data transfer safely?',
    answer:
      'Yes. We execute automated, validated data pipelines that migrate all historical customer profiles, order histories, product variants, and metadata with zero data loss.',
  },
  {
    category: 'timeline',
    question: 'How do you guarantee zero downtime during DNS launch cutover?',
    answer:
      'We run dual-stack delta synchronizations on launch night, ensuring every order placed on the legacy store during the DNS propagation window is captured and transferred seamlessly.',
  },
  {
    category: 'timeline',
    question: 'What is required from our internal operations team during the build?',
    answer:
      'We require API access credentials to your existing commerce platform, ERP/3PL system documentation, brand assets, and participation in weekly milestone demonstration reviews.',
  },
  {
    category: 'tech',
    question: 'Why build headless with Next.js 15 instead of a standard Shopify Liquid theme?',
    answer:
      'Headless Next.js 15 delivers sub-second page transitions, instant search, dynamic bundle builders, and complete design freedom while retaining Shopify Plus robust checkout and inventory engine.',
  },
  {
    category: 'tech',
    question: 'How do you preserve our hard-earned SEO rankings and organic backlinks during migration?',
    answer:
      'We implement comprehensive 1-to-1 301 redirect maps for every legacy URL, preserve structured schema markup, replicate metadata hierarchies, and monitor Google Search Console indexing continuously.',
  },
  {
    category: 'tech',
    question: 'Can you integrate our complex ERP, POS, and warehouse management software?',
    answer:
      'Yes. We build custom API connectors and webhook listeners for NetSuite, SAP, Microsoft Dynamics, Epicor, Manhattan Associates, and all major third-party logistics (3PL) providers.',
  },
  {
    category: 'tech',
    question: 'How do you optimize checkout conversion rates on mobile devices?',
    answer:
      'We eliminate render-blocking scripts, implement one-click Shop Pay and Apple Pay biometric checkouts, and streamline the mobile cart drawer for frictionless purchasing.',
  },
  {
    category: 'local',
    question: 'Do you have experience with Boise outdoor and sporting goods brands?',
    answer:
      'Yes. We engineer high-speed digital flagships for Idaho outdoor apparel brands, ski gear manufacturers, and cycling equipment creators requiring visual lookbooks and custom configurators.',
  },
  {
    category: 'local',
    question: 'Can you build custom B2B wholesale portals for Treasure Valley manufacturers?',
    answer:
      'Yes. We build robust B2B platforms featuring customer tier pricing, bulk line sheet ordering, Net-30 purchase order workflows, and custom invoice management.',
  },
  {
    category: 'local',
    question: 'Can you integrate multi-location POS inventory across Idaho retail stores?',
    answer:
      'Yes. We connect Shopify POS and custom point-of-sale systems across brick-and-mortar locations to ensure unified omnichannel inventory, buy-online-pickup-in-store (BOPIS), and real-time stock routing.',
  },
  {
    category: 'local',
    question: 'Can you build subscription commerce for Treasure Valley specialty food and beverage brands?',
    answer:
      'Yes. We integrate advanced recurring subscription engines, custom bundle builders, and automated retention flows for high-growth direct-to-consumer food, beverage, and agricultural brands.',
  },
  {
    category: 'ownership',
    question: 'Do we own the full source code and intellectual property after launch?',
    answer:
      'Yes, 100%. Upon project completion, you receive complete ownership of the private GitHub repository, Figma design files, and deployment infrastructure with zero vendor lock-in.',
  },
  {
    category: 'ownership',
    question: 'What warranty and post-launch support do you provide?',
    answer:
      'Every engagement includes a 30-day comprehensive post-launch warranty covering bug fixes, performance monitoring, and hands-on operational training for your internal ecommerce team.',
  },
  {
    category: 'ownership',
    question: 'How do you train our internal merchandising team on managing products and promotions?',
    answer:
      'We deliver custom recorded video walkthroughs and documentation showing your team how to update catalog attributes, launch promotions, schedule flash sales, and manage orders.',
  },
  {
    category: 'ownership',
    question: 'Can our in-house developers easily maintain and extend the Next.js codebase?',
    answer:
      'Yes. We write clean, strictly typed TypeScript and modular React code following standard conventions, ensuring your internal engineers can maintain and expand the platform effortlessly.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'FactoryJet - Boise Ecommerce Development Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Boise',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.615,
    longitude: -116.2023,
  },
  areaServed: [
    { '@type': 'City', name: 'Boise' },
    { '@type': 'City', name: 'Meridian' },
    { '@type': 'City', name: 'Nampa' },
    { '@type': 'City', name: 'Eagle' },
    { '@type': 'City', name: 'Caldwell' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
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
  name: 'Boise Ecommerce Development & Shopify Plus Engineering',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development, Headless Shopify Plus, B2B Commerce & Next.js Storefronts',
  description:
    'Custom headless Shopify Plus and Next.js ecommerce development in Boise ID. Sub-second performance, full IP code ownership, and rapid 7-day delivery for Idaho brands.',
  areaServed: [{ '@type': 'State', name: 'Idaho' }],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Boise Ecommerce Development Agency | Shopify Plus & Headless | FactoryJet',
  description: 'Boise ecommerce development agency. Headless Shopify Plus, Next.js storefronts, sub-second checkout, and custom B2B wholesale integrations for Idaho brands.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
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
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecommerce Development', item: 'https://factoryjet.com/services/ecommerce-development' },
    { '@type': 'ListItem', position: 3, name: 'Boise', item: CANONICAL },
  ],
};

export default function BoiseEcommerceDevelopmentPage() {
  return (
    <>
      <script id="boise-ecom-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="boise-ecom-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="boise-ecom-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="boise-ecom-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="boise-ecom-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── 01. RITOVEX HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Boise Ecommerce Development &amp; Headless Architecture</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Boise Ecommerce Development Agency for High-Growth Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Headless Shopify Plus, custom Next.js 15 storefronts, and sub-second checkout engineered for Idaho brands. 7-day agile delivery with 100% code ownership.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#boise-ecom-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Treasure Valley Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/boise/ecommerce/portfolio-1.webp"
                  alt="Boise Idaho ecommerce development and headless Shopify Plus storefront engineering"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. RITOVEX PARTNERS / TECHNOLOGY MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Modern Commerce Engine &amp; Cloud Infrastructure</div>
              <div className="rv-ticker-line" />
            </div>

            <div className="rv-marquee-wrapper">
              <div className="rv-marquee">
                {PARTNERS.concat(PARTNERS).map((p, idx) => (
                  <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '36px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#141414', letterSpacing: '-0.01em' }}>
                      {p}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5622' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. RITOVEX ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/b2b-website-design/sales-enablement.webp"
                  alt="FactoryJet senior ecommerce engineers building custom Boise Shopify Plus storefront"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Speed, Craft &amp; Performance</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Ecommerce Engineered for Idaho Market Leaders
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Boise outdoor apparel innovators to Treasure Valley agricultural leaders and Nampa industrial distributors, we build high-converting commerce engines that maximize revenue velocity.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {STAT_CARDS.map((s) => (
                    <div className="rv-stat-card-bento" key={s.title}>
                      <div className="rv-stat-icon-outline">
                        <span style={{ fontSize: '20px' }}>{s.icon}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--pp-display)', fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', lineHeight: 1 }}>
                        {s.num}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414', marginTop: '6px' }}>
                        {s.title}
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#6E6E80', margin: '4px 0 0', lineHeight: 1.45 }}>
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Ecommerce Consultation" region="us" btnVariant="primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. BOISE DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="boise-ecom-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Treasure Valley Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Ecommerce Development for Idaho&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown Boise outdoor brands to Treasure Valley agricultural leaders and Nampa industrial distributors:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {DISTRICTS.map((d) => (
                <div
                  key={d.corridor}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {d.corridor}
                    </span>
                    <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '12px', color: '#8E8E9F' }}>
                      {d.query}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                    {d.focus}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#6E6E80', lineHeight: 1.55, margin: 0 }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. INDUSTRY SHOWCASE SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Industry-Specific Execution</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Specialized Commerce Architectures for Idaho Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector across the Treasure Valley demands tailored checkout flows, inventory integrations, and performance metrics:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {INDUSTRY_SHOWCASE.map((ind, idx) => (
                <div
                  key={ind.sector}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: idx % 2 === 0 ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                    gap: 'clamp(28px, 5vw, 56px)',
                    alignItems: 'center',
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '20px',
                    padding: 'clamp(24px, 4vw, 44px)',
                  }}
                >
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {ind.sector}
                    </span>
                    <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: '#141414', margin: '14px 0 12px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                      {ind.headline}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.65, margin: '0 0 20px' }}>
                      {ind.description}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {ind.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5622', flexShrink: 0 }} />
                          <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#141414' }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ order: idx % 2 === 0 ? 2 : 1, position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '320px', border: '1px solid #E2E2E8' }}>
                    <Image
                      src={ind.image}
                      alt={ind.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. CORE DRIVERS & PAIN POINTS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The FactoryJet Difference</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Boise Leaders Choose FactoryJet Commerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace fragile plugin stacks with enterprise headless Shopify Plus engineering:
              </p>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              {PAIN_POINTS.map((p) => (
                <div className="rv-service-row" key={p.num}>
                  <div className="rv-service-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span className="rv-service-num">{p.num}</span>
                      <h3 className="rv-service-title">{p.title}</h3>
                    </div>
                    <div className="rv-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8" />
                      </svg>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The Typical Agency Frustration:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The FactoryJet Engineering Approach:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}
        <div id="ecommerce-blueprint">
          <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Boise" vertical="ecommerce" />
          </div>
        </section>

        <EnterpriseArchitectureBlueprint
            badge="// BOISE COMMERCE STACK &amp; HEADLESS BLUEPRINT"
            title="Headless Next.js 15 to Shopify Plus Engine"
            subtitle="Explore how custom Figma UI/UX, React 19 Server Components, Shopify Storefront API, and Cloudflare edge caching operate together seamlessly."
            legacySource="Legacy Magento, WooCommerce &amp; Custom PHP"
            targetStack="Headless Shopify Plus, BigCommerce B2B &amp; Next.js 15"
            ctaLabel="Get a Fixed-Price Quote"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 4-STAGE SPRINT PROTOCOL ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Proven 7-Day Sprint Model</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 4-Stage Rapid Ecommerce Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A disciplined engineering methodology for zero-delay migrations and high-conversion commerce launches:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {ROADMAP_STEPS.map((step) => (
                <div
                  key={step.phase}
                  style={{
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {step.phase}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 10px', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.55, margin: '0 0 18px', flexGrow: 1 }}>
                    {step.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #E6E6EC', paddingTop: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                      Core Deliverables:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '12.5px', color: '#141414', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4 }}>
                          <span style={{ color: '#FF5622', fontWeight: 800 }}>✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 09. AGENCY EVALUATION FRAMEWORK TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Vendor Due Diligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Evaluating Boise Ecommerce Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led headless development against traditional template agencies before you sign:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Headless Engine</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Template Agencies</div>
              </div>

              {EVALUATION_CRITERIA.map((crit, cIdx) => (
                <div
                  key={crit.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                    padding: '20px 24px',
                    borderTop: cIdx > 0 ? '1px solid #F0F0F5' : 'none',
                    background: cIdx % 2 === 0 ? '#FFFFFF' : '#FAFAFC',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#141414' }}>
                    {crit.label}
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
                    {crit.factoryjet}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE SPEED & REVENUE RECOVERY CALCULATOR ── */}
        <CommerceRoiCalculator city="Boise" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="BOISE COMMERCE INTELLIGENCE"
          headline="Frequently Asked Questions About Ecommerce Development in Boise ID"
          lead="Direct, plain English answers to what Idaho ecommerce founders and marketing leaders ask about Shopify Plus and headless engineering:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <EcommerceCityLinksUS currentCity="boise" />
          </div>
        </section>

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price &amp; 7-Day Delivery</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade Your Boise Ecommerce Engine?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Tell us about your brand goals. We will provide a comprehensive fixed-price proposal, clear sprint schedule, and interactive architecture plan.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Fixed-Price Proposal" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
