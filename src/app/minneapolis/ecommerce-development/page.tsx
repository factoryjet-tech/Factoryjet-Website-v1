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
const CANONICAL = 'https://factoryjet.com/minneapolis/ecommerce-development';

export const metadata: Metadata = {
  title: 'Minneapolis Ecommerce Development Agency | Shopify Plus & Headless | FactoryJet',
  description:
    'Minneapolis ecommerce development agency. Headless Shopify Plus, Next.js storefronts, sub-second checkout, and custom B2B wholesale integrations.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Minneapolis Ecommerce Development Agency | Shopify Plus & Headless | FactoryJet',
    description:
      'Minneapolis ecommerce development agency. Headless Shopify Plus, Next.js storefronts, sub-second checkout, and custom B2B wholesale integrations.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Minneapolis Ecommerce Development Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minneapolis Ecommerce Development Agency | Shopify Plus & Headless | FactoryJet',
    description: 'Custom headless Shopify Plus and Next.js ecommerce development in Minneapolis MN. Sub-second performance, full IP code ownership, 7-day delivery.',
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
  { num: '7 Days', title: 'Average Turnaround Time', desc: 'From approved Figma UI/UX prototypes to fully tested, production-deployed Next.js code.', icon: '⚡' },
  { num: '98+', title: 'Lighthouse Performance Score', desc: 'Engineered for sub-second first contentful paint and flawless Core Web Vitals.', icon: '📈' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own the clean GitHub repository, design assets, and deployment infrastructure.', icon: '🛡️' },
  { num: '0', title: 'WordPress Plugin Bloat', desc: 'Zero vulnerable third-party dependencies, slow PHP execution, or monthly maintenance bloat.', icon: '💎' },
];

const DISTRICTS = [
  {
    corridor: 'North Loop & Downtown Minneapolis',
    query: 'd2c lifestyle modern apparel ecommerce north loop minneapolis',
    focus: 'High-End D2C Brands, Modern Retail & Lifestyle Flagships',
    desc: 'The vibrant design and retail spine. Demands high-speed storefronts, interactive sizing visualizers, and sub-second edge hosting.',
  },
  {
    corridor: 'Plymouth & West Metro MedTech Corridor',
    query: 'b2b medical device supplies clinical ecommerce plymouth mn',
    focus: 'B2B Medical Consumables, Clinical Supplies & Surgical Tooling',
    desc: 'The global Medical Alley heartland. Demands compliance-first wholesale portals, custom ERP inventory sync, and multi-tier pricing.',
  },
  {
    corridor: 'Bloomington & South Metro Retail Hub',
    query: 'enterprise omnichannel retail franchise ecommerce bloomington mn',
    focus: 'Enterprise Omnichannel Brands, Departmental Wholesale & Franchise Distribution',
    desc: 'Major corporate and retail distribution corridor. Features multi-warehouse routing, complex POS synchronization, and automated checkout.',
  },
  {
    corridor: 'St. Paul & Midway Distribution Corridor',
    query: 'industrial hardware b2b packaging supplies ecommerce st paul',
    focus: 'Industrial Hardware, B2B Commercial Supplies & Packaging',
    desc: 'Historic industrial and packaging distribution core. B2B wholesale portals with purchase order workflows, net-30 terms, and tiered catalog pricing.',
  },
  {
    corridor: 'Eden Prairie & Minnetonka Tech Corridor',
    query: 'software licensing digital subscriptions accessories ecommerce eden prairie',
    focus: 'Software Licensing, Digital Subscriptions & Tech Accessories',
    desc: 'High-growth technology corridor. Features recurring subscription billing, digital license provisioning, and sub-second global edge performance.',
  },
  {
    corridor: 'Northeast Arts & Craft Commercial Enclave',
    query: 'artisanal food beverage custom furniture d2c ecommerce northeast minneapolis',
    focus: 'Artisanal Food & Beverage, Custom Furniture & Direct-to-Consumer',
    desc: 'Historic craft creative district. Features tactile editorial layouts, interactive 3D product configurators, and seamless mobile checkout.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Medical Device Consumables, Clinical Supplies & B2B Healthcare',
    headline: 'Clinical-Grade B2B Wholesale Portals for Minnesota MedTech Leaders',
    description:
      'Medical device manufacturers, surgical equipment suppliers, and dental supply distributors across Plymouth and Arden Hills require institutional B2B commerce architectures. We engineer headless Shopify Plus and Next.js applications with automated PO processing, Net-30 credit terms, tiered hospital contract pricing, and real-time ERP inventory syncing.',
    image: '/images/us/b2b-website-design/hero.webp',
    alt: 'Minneapolis medical alley medical device clinical consumables B2B ecommerce engineering',
    points: [
      'Custom customer group pricing tiers with contracted hospital procurement discounts',
      'Instant PO generation, Net-30 invoicing, and multi-user corporate approval workflows',
      'Real-time two-way synchronization with SAP, NetSuite, Epicor, and Microsoft Dynamics ERPs',
    ],
  },
  {
    sector: 'Direct-to-Consumer Lifestyle, Outdoor Gear & Apparel',
    headline: 'High-Converting Headless Storefronts for North Loop Brands',
    description:
      'From North Loop modern apparel flagships to Minnesota outdoor winter gear innovators, high-growth direct-to-consumer brands demand high-speed shopping experiences. We engineer bespoke Figma UI/UX storefronts with sub-second product page loads, one-click mobile checkout, and interactive bundle builders.',
    image: '/images/us/saas-website-design/hero.webp',
    alt: 'Minneapolis North Loop direct-to-consumer apparel and outdoor gear ecommerce storefront design',
    points: [
      'Sub-second first contentful paint and instant product filtering with zero layout shifts',
      'Custom interactive bundle builders, sizing calculators, and upsell modules',
      'Seamless checkout optimization utilizing Shop Pay, Apple Pay, and Klarna financing',
    ],
  },
  {
    sector: 'Industrial Hardware, Building Materials & Commercial Packaging',
    headline: 'Engineering Commercial Wholesale Engines for St. Paul Distributors',
    description:
      'Industrial hardware distributors, packaging suppliers, and building material wholesalers across St. Paul and the Midway corridor demand robust B2B capabilities. We build high-speed wholesale platforms with bulk CSV order uploads, freight rate estimation at checkout, and automated tax exemption validation.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'Minneapolis industrial hardware commercial packaging and building material B2B ecommerce platform',
    points: [
      'Bulk matrix ordering and instant CSV spreadsheet SKU order upload workflows',
      'Dynamic LTL freight calculation integrations with real-time carrier rate tables',
      'Automated Avalara tax exemption certificate management and resale verification',
    ],
  },
  {
    sector: 'Artisanal Food, Beverage & Specialty Consumer Goods',
    headline: 'Tactile Editorial E-Commerce for Northeast Minneapolis Brands',
    description:
      'Craft breweries, specialty roasters, and artisanal consumer brands across Northeast Minneapolis demand digital storefronts that reflect their product quality. We engineer rich visual storytelling layouts with recurring subscription delivery management, cold-pack shipping logic, and localized age verification.',
    image: '/images/us/b2b-website-design/sales-enablement.webp',
    alt: 'Minneapolis artisanal craft food beverage specialty consumer goods ecommerce storefront',
    points: [
      'Seamless subscription management powered by Recharge and Shopify Native Subscriptions',
      'Thermal shipping and cold-pack delivery logic based on delivery destination climate zones',
      'Klaviyo automated behavioral email flows and high-converting VIP loyalty tiers',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Sluggish 4-Second Mobile Storefront Load Times',
    problem: 'Bloated Shopify themes with 25+ installed apps and heavy scripts slow mobile load times down to 4 seconds, causing 40% of prospective buyers to abandon before viewing a product.',
    solution: 'We engineer headless Next.js 15 storefronts on modern edge networks, achieving sub-second page transitions and instant product discovery.',
  },
  {
    num: '02',
    title: 'Eliminating Fragile Multi-Plugin Stacks That Break on Updates',
    problem: 'Relying on dozens of conflicting third-party apps creates monthly recurring subscription overhead, breaks during theme updates, and exposes customer data.',
    solution: 'We build custom, native React components for search, bundle building, product reviews, and sizing calculators directly into the codebase with zero app bloat.',
  },
  {
    num: '03',
    title: 'Overcoming Broken B2B Wholesale Workflows & Manual Order Entry',
    problem: 'Using retail shopping carts for B2B buyers forces commercial customers to call in orders, manually key in credit cards, and wait days for custom invoices.',
    solution: 'We deploy enterprise B2B wholesale portals with automated net-terms, custom tiered price sheets, punch-out catalog support, and instant purchase order checkout.',
  },
  {
    num: '04',
    title: 'Stopping Vendor Lock-In & Agency Retainer Hostage',
    problem: 'Traditional ecommerce agencies keep your codebase trapped in proprietary systems or charge hefty monthly retainers just to make minor catalog updates.',
    solution: 'You receive 100% full intellectual property ownership, the complete GitHub repository, and intuitive headless CMS dashboards for your marketing team.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Discovery, Catalog Architecture & Tech Scope',
    desc: 'We analyze your SKU structure, ERP/CRM integration requirements, checkout flows, and customer journey to define a high-conversion technical blueprint.',
    deliverables: ['Product catalog information architecture map', 'ERP/WMS integration and data synchronization spec', 'Figma UI/UX visual benchmark and UX wireframes', 'Project milestone timeline and delivery SLA'],
  },
  {
    phase: 'Phase 02',
    title: 'Custom Figma UI/UX Design & Conversion Tokens',
    desc: 'We design bespoke desktop and mobile storefront prototypes in Figma, complete with conversion-tested product pages, cart drawers, and checkout flows.',
    deliverables: ['High-fidelity interactive Figma storefront prototypes', 'Mobile responsive product detail page (PDP) wireframes', 'Design tokens and typography scales', 'Client design review and revision approval'],
  },
  {
    phase: 'Phase 03',
    title: 'Headless Next.js Engineering & ERP Integration',
    desc: 'We build production React 19 storefront code with TypeScript, Tailwind CSS, Shopify Storefront API integrations, and two-way ERP inventory syncing.',
    deliverables: ['Custom Next.js 15 App Router ecommerce architecture', 'Shopify Plus / BigCommerce Storefront API integration', 'Two-way ERP inventory and order sync pipelines', 'Cross-browser and multi-device checkout QA validation'],
  },
  {
    phase: 'Phase 04',
    title: 'Core Web Vitals Optimization, Launch & Handover',
    desc: 'We execute speed benchmarking, set up Cloudflare edge routing, execute production domain cutover, and transfer full code ownership.',
    deliverables: ['Lighthouse 95+ performance optimization', 'Cloudflare DNS cutover and SSL deployment', 'Full GitHub repository and asset transfer', '30-day post-launch warranty and team training'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Engineering Stack',
    factoryjet: 'Modern Headless Next.js 15, React 19, TypeScript, and Shopify Storefront API on Cloudflare Edge.',
    traditional: 'Outdated monolithic Shopify liquid themes or slow WooCommerce/Magento PHP stacks.',
  },
  {
    label: 'Delivery Speed',
    factoryjet: 'Rapid 7-day agile sprint with fixed-price milestone delivery.',
    traditional: '4 to 8 months of protracted discovery meetings and frequent timeline slippages.',
  },
  {
    label: 'Mobile Speed SLA',
    factoryjet: 'Guaranteed 95+ Google Lighthouse Core Web Vitals mobile performance with sub-second page transitions.',
    traditional: 'Sub-50 mobile performance scores with heavy render-blocking app scripts and slow checkout.',
  },
  {
    label: 'IP & Code Ownership',
    factoryjet: '100% full intellectual property ownership. You receive the complete GitHub repository.',
    traditional: 'Proprietary platform lock-in or agency-retained code repositories.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Scope' },
  { key: 'timeline', label: 'Timeline & Process' },
  { key: 'tech', label: 'Headless Tech Stack' },
  { key: 'b2b', label: 'B2B & Integrations' },
  { key: 'ownership', label: 'Code & Support' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does custom ecommerce development cost for a Minneapolis brand?',
    answer:
      'Project investments are based on total SKU count, custom B2B wholesale feature complexity, third-party ERP integrations, and custom frontend design requirements. Every project is scoped with a transparent, fixed-price milestone agreement. Focused high-converting D2C storefronts are delivered with full Figma UI/UX, custom Next.js engineering, and 100% code ownership with zero surprise overages.',
  },
  {
    category: 'pricing',
    question: 'Are there hidden monthly maintenance fees or recurring agency retainers?',
    answer:
      'No. We believe you should own your ecommerce platform outright. You pay directly for your Shopify Plus or hosting subscriptions and pay zero monthly agency licensing fees.',
  },
  {
    category: 'pricing',
    question: 'How do you guarantee that project budgets remain fixed without overages?',
    answer:
      'We complete an exhaustive scope definition and architectural plan before writing a single line of code. All design components, page templates, and integrations are documented in a binding scope of work that guarantees delivery at the agreed investment level.',
  },
  {
    category: 'timeline',
    question: 'How can you deliver a custom headless ecommerce storefront in just 7 days?',
    answer:
      'We eliminate bloated agency bureaucracy and junior account layers. Our senior full-stack engineers and Figma UI/UX designers work directly with you through focused, daily milestone sprints to design, build, and deploy your site in parallel.',
  },
  {
    category: 'timeline',
    question: 'What is required from our internal team during the 7-day sprint?',
    answer:
      'We require product catalog exports (CSV or Shopify admin access), high-resolution imagery, brand guidelines, and prompt feedback on the Figma design prototypes during scheduled milestone check-ins.',
  },
  {
    category: 'timeline',
    question: 'What happens if we need design revisions during the process?',
    answer:
      'Every project includes dedicated design revision cycles during the Figma prototype phase, ensuring you approve every product layout, cart drawer, and mobile flow before development begins.',
  },
  {
    category: 'tech',
    question: 'Why choose Headless Next.js 15 over traditional Shopify Liquid themes?',
    answer:
      'Headless Next.js 15 delivers sub-second page loads, instant product filtering, zero layout shifts, superior mobile conversion rates, and limitless design freedom unconstrained by Shopify theme architectures.',
  },
  {
    category: 'tech',
    question: 'Can our marketing team manage products and banners without touching code?',
    answer:
      'Yes. Your team manages products, inventory, orders, and discounts directly in Shopify Plus, while content banners, landing pages, and blog posts are managed through intuitive headless CMS platforms like Sanity or Strapi.',
  },
  {
    category: 'tech',
    question: 'How do you ensure our ecommerce site achieves 95+ Core Web Vitals scores?',
    answer:
      'We optimize every asset using modern WebP/AVIF image formats, eliminate render-blocking JavaScript, implement static page pre-rendering, and deploy on Cloudflare global edge networks.',
  },
  {
    category: 'tech',
    question: 'How do you handle SEO migration to prevent ecommerce revenue loss?',
    answer:
      'We build comprehensive 1-to-1 301 redirect maps for every legacy product and collection URL, preserve canonical structures, implement structured Product schema markup, and validate all meta tags prior to DNS cutover.',
  },
  {
    category: 'b2b',
    question: 'Do you have experience with Minnesota MedTech B2B wholesale portals?',
    answer:
      'Yes. We build compliance-first B2B wholesale portals for Medical Alley biomedical device manufacturers, clinical supply distributors, and healthcare providers requiring custom tier pricing and PO workflows.',
  },
  {
    category: 'b2b',
    question: 'Can you integrate our ecommerce storefront with NetSuite, SAP, or Epicor ERPs?',
    answer:
      'Yes. We build resilient middleware pipelines that synchronize products, stock levels, wholesale customer pricing tiers, and purchase orders bidirectionally between your ERP and ecommerce frontend.',
  },
  {
    category: 'b2b',
    question: 'Can you implement complex B2B wholesale pricing tiers and net-terms checkout?',
    answer:
      'Yes. We configure custom customer group pricing, bulk CSV order uploads, automated tax exemption certificate verification, and purchase order checkout with Net-30 invoicing.',
  },
  {
    category: 'b2b',
    question: 'Do you support subscription ecommerce and recurring delivery models?',
    answer:
      'Yes. We integrate industry-standard subscription platforms like Recharge and Shopify Native Subscriptions with custom customer portal styling for seamless subscription management.',
  },
  {
    category: 'ownership',
    question: 'Do we own the full source code and intellectual property after launch?',
    answer:
      'Yes, 100%. Upon final milestone completion, you receive complete ownership of the GitHub repository, Figma design assets, and deployment configurations with zero vendor lock-in.',
  },
  {
    category: 'ownership',
    question: 'What warranty and post-launch support do you provide?',
    answer:
      'Every project includes a 30-day comprehensive post-launch warranty covering any bug fixes, checkout validation, and recorded video training for your internal staff.',
  },
  {
    category: 'ownership',
    question: 'How do you train our internal team on managing the ecommerce platform?',
    answer:
      'We deliver custom recorded video walkthroughs and documentation explaining how to update products, manage orders, create promotional campaigns, and edit content in the CMS.',
  },
  {
    category: 'ownership',
    question: 'Can any software engineer maintain our Next.js codebase in the future?',
    answer:
      'Yes. We write clean, modular, and fully typed TypeScript and React code adhering to global standards, ensuring any modern web developer can easily maintain and extend your application.',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1',
  },
  name: 'FactoryJet - Minneapolis Ecommerce Development Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Minneapolis',
    addressRegion: 'MN',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.9778,
    longitude: -93.265,
  },
  areaServed: [
    { '@type': 'City', name: 'Minneapolis' },
    { '@type': 'City', name: 'St. Paul' },
    { '@type': 'City', name: 'Bloomington' },
    { '@type': 'City', name: 'Plymouth' },
    { '@type': 'City', name: 'Eden Prairie' },
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
      'https://www.linkedin.com/in/bhavesh-barot',
      'https://github.com/factoryjet-tech',
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1',
  },
  name: 'Minneapolis Ecommerce Development & Headless Shopify Plus',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development, Headless Shopify Plus, B2B Wholesale & Next.js Storefronts',
  description:
    'Custom headless Shopify Plus and Next.js ecommerce development in Minneapolis MN. Sub-second performance, full IP code ownership, and rapid 7-day delivery for Minnesota businesses.',
  areaServed: { '@type': 'State', name: 'Minnesota' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Minneapolis Ecommerce Development Agency | Shopify Plus & Headless | FactoryJet',
  description: 'Minneapolis ecommerce development agency. Headless Shopify Plus, Next.js storefronts, sub-second checkout, and custom B2B wholesale integrations.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-barot',
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
    { '@type': 'ListItem', position: 3, name: 'Minneapolis', item: CANONICAL },
  ],
};

export default function MinneapolisEcommercePage() {
  return (
    <>
      <script id="mpls-ecom-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="mpls-ecom-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="mpls-ecom-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="mpls-ecom-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="mpls-ecom-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Minneapolis Ecommerce &amp; Headless Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Minneapolis Ecommerce Development Agency for High-Growth Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Custom headless Shopify Plus, Next.js 15 storefronts, and B2B wholesale portals engineered for Minnesota market leaders. 7-day agile delivery with 100% intellectual property code ownership.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#mpls-ecom-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Twin Cities Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/saas-website-design/hero.webp"
                  alt="Minneapolis Minnesota ecommerce development and headless Shopify Plus web engineering"
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
              <div className="rv-ticker-label">Modern Commerce &amp; Cloud Infrastructure</div>
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
                  alt="FactoryJet senior ecommerce engineers collaborating on custom Minneapolis Shopify sprint"
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
                  Ecommerce Engineered for Twin Cities Market Leaders
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From Medical Alley biomedical device giants in Plymouth to North Loop direct-to-consumer apparel flagships and St. Paul industrial packaging suppliers, we build high-converting ecommerce platforms that elevate your brand equity.
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

        {/* ── 04. MINNEAPOLIS DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="mpls-ecom-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Twin Cities Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Ecommerce for Minnesota&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From North Loop D2C brands to Medical Alley suppliers and St. Paul industrial distributors:
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
                Specialized Ecommerce Architectures for Minnesota Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector in the Twin Cities metro demands tailored checkout flows, design tokens, and ERP integrations:
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
                Why Minneapolis Leaders Choose FactoryJet Ecommerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace fragile multi-plugin architectures with high-performance Headless Next.js engineering:
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
            <RegionalBenchmarkCard city="Minneapolis" vertical="ecommerce" />
          </div>
        </section>

        <EnterpriseArchitectureBlueprint
            badge="// MINNEAPOLIS COMMERCE STACK &amp; HEADLESS BLUEPRINT"
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
                A disciplined engineering methodology for zero-delay deliveries and high-conversion ecommerce launches:
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
                Evaluating Minneapolis Ecommerce Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led Next.js headless development against traditional template agencies before you sign:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
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
        <CommerceRoiCalculator city="Minneapolis" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="MINNEAPOLIS ECOMMERCE INTELLIGENCE"
          headline="Frequently Asked Questions About Ecommerce Development in Minneapolis MN"
          lead="Direct, plain English answers to what Twin Cities business owners and ecommerce directors ask about platform engineering:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <EcommerceCityLinksUS currentCity="minneapolis" />
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
              Ready to Scale Your Twin Cities Ecommerce Storefront?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Tell us about your product catalog and growth goals. We will provide a comprehensive fixed-price proposal, clear sprint schedule, and interactive Figma preview.
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
