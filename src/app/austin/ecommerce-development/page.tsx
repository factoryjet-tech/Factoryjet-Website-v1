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
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-29';
const CANONICAL = 'https://factoryjet.com/austin/ecommerce-development';

export const metadata: Metadata = {
  title: 'Austin TX E-Commerce Agency | Shopify Plus & B2B | FactoryJet',
  description:
    'Austin ecommerce development agency. Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion. Free quote.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Austin TX E-Commerce Agency | Shopify Plus & B2B | FactoryJet',
    description:
      'Austin ecommerce development agency. Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Austin Ecommerce Development Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austin TX E-Commerce Agency | Shopify Plus & B2B | FactoryJet',
    description: 'Custom Shopify Plus and wholesale ecommerce development in Austin TX. High conversion and zero lock-in.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Shopify Plus Partner',
  'Shop Pay Acceleration',
  'Klaviyo Premier',
  'WooCommerce Enterprise',
  'Stripe Payments',
  'Next.js 15 Commerce',
  'Cloudflare Global Edge',
  'Google Analytics 4',
];

const STAT_CARDS = [
  { num: '40%+', title: 'Checkout Conversion Lift', desc: 'Shop Pay one-tap acceleration eliminating mobile checkout abandonment.', icon: '⚡' },
  { num: '95+', title: 'Mobile Speed Score', desc: 'Sub-second product catalog browsing engineered for higher average order value.', icon: '🚀' },
  { num: '500+', title: 'Commerce Builds', desc: 'Storefronts and wholesale ordering portals deployed across DTC, CPG, and B2B.', icon: '🏢' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own your custom Liquid theme, product data, and payment gateways.', icon: '🛡️' },
];

const DISTRICTS = [
  {
    corridor: 'South Congress & Downtown Flagships',
    query: 'fashion boutique ecommerce austin',
    focus: 'Apparel, Luxury Accessories & Lifestyle DTC',
    desc: 'Iconic consumer corridors where brick-and-mortar storefronts need flawless omnichannel synchronization with online Shopify stores. Point of sale inventory updates seamlessly in real time.',
  },
  {
    corridor: 'The Domain & Silicon Hills Tech Corridor',
    query: 'hardware ecommerce store austin',
    focus: 'Consumer Electronics, Wearables & Tech Hardware',
    desc: 'High-growth tech hardware and IoT brands requiring rich interactive product pages, 3D model visualization, complex warranty options, and global multi-currency checkout.',
  },
  {
    corridor: 'East Austin & Artisan Studios',
    query: 'specialty food ecommerce austin',
    focus: 'Specialty CPG, Craft Beverages & Subscription Goods',
    desc: 'Rapidly scaling food and beverage brands leveraging automated subscription billing workflows, bundled discount matrices, and Klaviyo lifecycle marketing automation.',
  },
  {
    corridor: 'Mueller & Central Austin Commercial',
    query: 'home goods ecommerce developer austin',
    focus: 'Home Furnishings, Wellness & Family Brands',
    desc: 'High-ticket residential consumer brands where custom room visualizers, tiered financing via Affirm and Klarna, and white-glove shipping integrations drive high average order values.',
  },
  {
    corridor: 'North Austin & Industrial Logistics',
    query: 'b2b ecommerce wholesale austin',
    focus: 'Wholesale Portals, Industrial Supply & B2B Parts',
    desc: 'Manufacturing suppliers and regional distributors modernizing phone, fax, and email ordering into self-service digital portals with custom dealer pricing tiers.',
  },
  {
    corridor: 'Round Rock & Williamson County Corridor',
    query: 'multi store ecommerce builder austin',
    focus: 'Multi-Location Retail & Regional Distribution',
    desc: 'Regional commercial brands managing warehouse fulfillment across multiple Central Texas locations with automated routing to the closest distribution depot.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Consumer Packaged Goods & Specialty Foods',
    headline: 'Scaling DTC Subscription & Recurring Revenue in East Austin',
    description:
      'Central Texas is the national epicenter for disruptive CPG and beverage brands. We build custom Shopify Plus stores with recharge subscription engines, automated build-a-box bundles, and one-click upsells that maximize customer lifetime value (LTV).',
    image: '/images/us/restaurant-website-design/hero.webp',
    alt: 'Austin consumer packaged goods and specialty food ecommerce development',
    points: [
      'Custom recurring subscription billing flows and flexible delivery interval management',
      'Interactive build-a-box bundlers and volume-tiered discount matrices',
      'Seamless Klaviyo email and SMS automation integration for cart recovery',
    ],
  },
  {
    sector: 'Apparel, Footwear & Lifestyle Boutiques',
    headline: 'Bespoke Omnichannel Experiences for South Congress Brands',
    description:
      'Austin lifestyle brands demand visual storytelling combined with frictionless mobile checkout. We engineer custom Shopify themes with real-time Shopify POS inventory syncing, dynamic color/swatch variant filtering, and Shop Pay accelerated purchasing.',
    image: '/images/us/omnichannel/retail-dtc.webp',
    alt: 'Austin apparel lifestyle boutique ecommerce store development',
    points: [
      'Sub-second mobile collection browsing with instant faceted filtering',
      'Omnichannel Shopify POS integration for in-store pickup and cross-channel returns',
      'Automated back-in-stock notifications and pre-order deposit workflows',
    ],
  },
  {
    sector: 'Tech Hardware, IoT & Consumer Electronics',
    headline: 'High-Performance Storefronts for Silicon Hills Innovators',
    description:
      'Tech hardware companies in The Domain and Silicon Hills require complex e-commerce architectures. We integrate 3D interactive product configurators, serial number registration portals, and global localized multi-currency checkouts.',
    image: '/images/us/saas-website-design/hero.webp',
    alt: 'Austin consumer electronics and hardware technology ecommerce store design',
    points: [
      'Interactive 3D model product viewers and custom feature comparison matrices',
      'Multi-currency and localized tax compliance via Shopify Markets Pro',
      'Extended warranty upsells and post-purchase customer support ticket routing',
    ],
  },
  {
    sector: 'B2B Wholesale, Industrial Supply & Distributors',
    headline: 'Self-Service Digital Procurement for Texas B2B Distributors',
    description:
      'Manufacturers and distributors across North Austin and Williamson County lose hours processing manual orders. We build custom Shopify Plus B2B portals with company account hierarchies, negotiated price lists, and Net 30 payment terms.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'Austin B2B wholesale distribution ecommerce portal development',
    points: [
      'Company profile hierarchies with multi-user purchasing permission controls',
      'Custom volume-tiered price lists and automated quick-order CSV uploads',
      'Draft order quote request workflows and purchase order payment processing',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Eliminating Bloated App Stacks & Crashing Checkouts',
    problem: 'Installing 30+ unvetted Shopify apps slows down mobile page speed, creates checkout javascript conflicts, and costs thousands in recurring app fees every month.',
    solution: 'We code custom Liquid and React components directly into a lightweight, high-speed theme, eliminating unnecessary third-party apps while keeping load times under 800ms.',
  },
  {
    num: '02',
    title: 'Ending Inventory Discrepancies Between Retail POS & Web',
    problem: 'Disjointed point-of-sale systems cause overselling, manual inventory corrections, and frustrating order cancellations for in-store and online shoppers.',
    solution: 'We architect unified commerce architectures where inventory levels, customer profiles, and gift cards sync automatically across Shopify POS and online storefronts.',
  },
  {
    num: '03',
    title: 'Overcoming High Cart Abandonment on Mobile Devices',
    problem: 'Clunky multi-step checkouts requiring manual address entry cause over 70% of Austin mobile shoppers to drop off before completing their purchase.',
    solution: 'We deploy accelerated Shop Pay, Apple Pay, and Google Pay integrations alongside frictionless one-page checkouts that allow customers to buy in a single tap.',
  },
  {
    num: '04',
    title: 'Replacing Slow, Vulnerable Legacy Platforms (Magento/Woo)',
    problem: 'Outdated self-hosted platforms require constant server maintenance, security patching, and crash during high-traffic promotional sales events.',
    solution: 'We execute seamless migrations to cloud-hosted Shopify Plus or headless architectures, guaranteeing 99.99% uptime during Black Friday and Cyber Monday spikes.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Catalog Architecture & UX Strategy',
    desc: 'We audit your product catalog, customer journey data, and operational requirements to create high-converting Figma design wireframes.',
    deliverables: ['Product taxonomy and variant mapping', 'Mobile conversion flow wireframes', 'Third-party app audit and consolidation plan', 'Milestone development roadmap'],
  },
  {
    phase: 'Phase 02',
    title: 'Custom Theme Engineering & Apps',
    desc: 'We engineer your custom Shopify Plus theme using clean, modular code with integrated upsells, cart drawer, and subscription logic.',
    deliverables: ['Custom lightweight Liquid theme development', 'Sub-second mobile search and collection filtering', 'Slide-out cart with dynamic free shipping tiers', 'Klaviyo and review app integration'],
  },
  {
    phase: 'Phase 03',
    title: 'Data Migration & ERP Integration',
    desc: 'We securely migrate all historical customers, orders, and product data while configuring payment gateways and tax rules.',
    deliverables: ['Historical customer and order data transfer', 'Shop Pay, Stripe, and financing setup', 'Automated inventory and ERP webhook connectors', 'SEO 301 redirect mapping for all old URLs'],
  },
  {
    phase: 'Phase 04',
    title: 'Load Testing, Cutover & Launch',
    desc: 'We execute multi-device checkout testing, run automated traffic load simulations, execute seamless domain cutover, and provide staff training.',
    deliverables: ['Comprehensive multi-device QA testing', 'Zero-downtime DNS cutover execution', 'Recorded staff training video tutorials', '30-day post-launch warranty and optimization'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Theme & Code Architecture',
    factoryjet: 'Bespoke lightweight Shopify Plus theme with zero app bloat. Clean Liquid and TypeScript engineering.',
    traditional: 'Pre-made marketplace theme overloaded with 30+ conflicting apps causing severe mobile speed degradation.',
  },
  {
    label: 'Mobile Checkout Experience',
    factoryjet: 'One-tap Shop Pay, Apple Pay, and Google Pay acceleration with dynamic drawer upsells.',
    traditional: 'Multi-step checkout forms with slow shipping rate calculators that drive 70%+ mobile abandonment.',
  },
  {
    label: 'Data Migration & SEO Preservation',
    factoryjet: 'Complete 1-to-1 301 redirect map, historical customer/order migration, and structured schema preservation.',
    traditional: 'Incomplete URL redirects causing massive 404 error spikes and severe post-launch Google organic traffic drops.',
  },
  {
    label: 'Code & Account Ownership',
    factoryjet: '100% full intellectual property ownership. You own your Shopify store, theme files, and payment gateways directly.',
    traditional: 'Agencies retaining proprietary app licenses or charging ongoing monthly markups on hosting and development.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Scope' },
  { key: 'platforms', label: 'Shopify Plus & Platforms' },
  { key: 'b2b', label: 'B2B & Wholesale' },
  { key: 'migration', label: 'Migration & SEO' },
  { key: 'growth', label: 'Speed & Conversion' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does a custom ecommerce website build cost in Austin TX?',
    answer:
      'Pricing depends on catalog size, custom functionality (such as subscription builders or B2B portals), ERP integration requirements, and design scope. We provide transparent fixed-price proposals based on documented project milestones with zero hidden agency surcharges. Every proposal includes custom Figma UX design, clean theme development, data migration, SEO setup, and 100% store ownership.',
  },
  {
    category: 'pricing',
    question: 'Are there hidden monthly agency fees after our store launches?',
    answer:
      'No. You contract directly with Shopify or your platform provider, maintaining full control over your billing. We do not charge ongoing retainer fees unless you choose an ongoing conversion optimization or growth partnership.',
  },
  {
    category: 'pricing',
    question: 'How do you prevent budget overruns during custom e-commerce builds?',
    answer:
      'We conduct an in-depth discovery phase before writing any code. We document all catalog structures, third-party integrations, design specifications, and launch requirements in a detailed scope of work with guaranteed fixed pricing.',
  },
  {
    category: 'platforms',
    question: 'Why do you recommend Shopify Plus for scaling Austin consumer brands?',
    answer:
      'Shopify Plus provides 99.99% cloud uptime, native Shop Pay accelerated checkout that lifts conversion by up to 50%, built-in B2B wholesale features, seamless international expansion via Shopify Markets, and zero server maintenance overhead.',
  },
  {
    category: 'platforms',
    question: 'Do you also build on WooCommerce, BigCommerce, or Headless Commerce stacks?',
    answer:
      'Yes. While Shopify Plus is our primary recommendation for high-growth DTC and B2B brands, we also engineer custom BigCommerce B2B portals, enterprise WooCommerce platforms, and headless Next.js commerce architectures based on specific technical requirements.',
  },
  {
    category: 'platforms',
    question: 'How long does a typical custom Shopify store build take from start to launch?',
    answer:
      'Standard custom DTC e-commerce builds are typically delivered in 4 to 6 weeks. Complex enterprise deployments involving B2B wholesale portals, multi-location inventory routing, or custom ERP integrations generally take 6 to 10 weeks.',
  },
  {
    category: 'b2b',
    question: 'Can you build a wholesale B2B ordering portal on Shopify Plus?',
    answer:
      'Yes. Using Shopify Plus B2B or custom application architectures, we build self-service wholesale portals featuring customer-specific price lists, tiered volume quantity breaks, net payment terms (Net 30/60), and corporate account hierarchies.',
  },
  {
    category: 'b2b',
    question: 'Can retail DTC and wholesale B2B customers use the same Austin storefront?',
    answer:
      'Yes. We can architect a unified store where retail customers see standard MSRP pricing and one-click checkout, while approved wholesale partners log in to see their custom negotiated price tiers and purchase order checkout options.',
  },
  {
    category: 'b2b',
    question: 'Can you integrate our e-commerce store with our ERP or inventory software?',
    answer:
      'Yes. We build automated bidirectional API connectors for NetSuite, QuickBooks Enterprise, Katana Cloud Manufacturing, SAP, and custom warehouse management systems (WMS) to keep stock levels and orders synced in real time.',
  },
  {
    category: 'migration',
    question: 'How do you protect our Google SEO rankings when migrating from Magento or WooCommerce?',
    answer:
      'We map out every single legacy URL and create comprehensive 1-to-1 301 redirects, preserve meta titles and descriptions, transfer product schema markup, and execute launch DNS cutover during off-peak hours to ensure zero ranking disruption.',
  },
  {
    category: 'migration',
    question: 'Can you migrate customer accounts and order histories to our new Shopify store?',
    answer:
      'Yes. We migrate your complete historical product catalog, customer records, and order histories so returning shoppers retain their account details and past order history.',
  },
  {
    category: 'migration',
    question: 'How do customers log into their accounts after a platform migration?',
    answer:
      'Due to industry-standard cryptographic password hashing, passwords cannot be extracted in plain text. We set up automated one-click account activation emails so customers can reset and access their history seamlessly.',
  },
  {
    category: 'migration',
    question: 'How do you prevent duplicate content issues during store replatforming?',
    answer:
      'We clean up legacy URL structures, implement self-referencing canonical tags on all collection and product URLs, and generate structured XML sitemaps to ensure clean indexing by Google.',
  },
  {
    category: 'migration',
    question: 'Can you migrate historical customer reviews to the new Shopify store?',
    answer:
      'Yes. We export verified customer reviews, star ratings, and review photos from your previous platform and import them directly into modern review engines like Okendo, Yotpo, or Judge.me.',
  },
  {
    category: 'growth',
    question: 'How do you optimize mobile page loading speeds for high-volume stores?',
    answer:
      'We eliminate heavy third-party app scripts, use modern WebP and AVIF image compression, implement responsive image sizing, and code custom lightweight modular Liquid and React components.',
  },
  {
    category: 'growth',
    question: 'What conversion rate optimization (CRO) features do you build into storefronts?',
    answer:
      'We build dynamic slide-out cart drawers with free shipping threshold progress bars, one-click bundle upsells, sticky add-to-cart buttons on mobile, and trust badges at high-friction checkout decision points.',
  },
  {
    category: 'growth',
    question: 'How does Shop Pay integration increase checkout conversion rates?',
    answer:
      'Shop Pay stores customer billing and shipping details across millions of global merchants, enabling verified buyers to complete purchases in a single tap with zero manual form filling.',
  },
  {
    category: 'growth',
    question: 'Do you set up email and SMS marketing automation alongside the store build?',
    answer:
      'Yes. We configure Klaviyo marketing automation flows including abandoned cart recovery series, welcome email onboarding, post-purchase review requests, and VIP customer win-back sequences.',
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
  name: 'FactoryJet - Austin Ecommerce Development Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'City', name: 'Round Rock' },
    { '@type': 'City', name: 'Cedar Park' },
    { '@type': 'City', name: 'West Lake Hills' },
    { '@type': 'City', name: 'Lakeway' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  name: 'Austin Ecommerce Development & Shopify Plus Engineering',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development, Shopify Plus & B2B Portals',
  description:
    'Senior engineering-led Shopify Plus and WooCommerce development, Shop Pay acceleration, wholesale B2B portals, and ERP integrations in Austin TX.',
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/austin/ecommerce-development#webpage',
  name: 'Austin TX E-Commerce Agency | Shopify Plus & B2B | FactoryJet',
  description: 'Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion in Austin TX.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'E-Commerce', item: 'https://factoryjet.com/services/ecommerce-development' },
    { '@type': 'ListItem', position: 3, name: 'Austin', item: CANONICAL },
  ],
};

export default function AustinEcommerceDevelopmentPage() {
  return (
    <>
      <script id="austin-ecom-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="austin-ecom-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="austin-ecom-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="austin-ecom-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="austin-ecom-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── 01. HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Austin Ecommerce Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Austin Ecommerce Agency for High-Growth Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 24px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Scale DTC online sales and wholesale B2B dealer ordering with custom Shopify Plus engineering, Shop Pay acceleration, and seamless ERP inventory synchronization.
                </p>

                {/* Answer-First Brief */}
                <div style={{ background: '#F6F6F9', borderLeft: '3px solid #FF5622', padding: '14px 18px', borderRadius: '0 12px 12px 0', marginBottom: '28px', maxWidth: '52ch' }}>
                  <p style={{ fontSize: '13.5px', color: '#141414', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    <strong style={{ color: '#FF5622' }}>Executive Brief:</strong> FactoryJet delivers custom Austin e-commerce development: lightweight Shopify Plus storefronts, wholesale B2B ordering portals, Shop Pay 1-tap checkout acceleration, ERP inventory synchronization, and 100% full code ownership.
                  </p>
                </div>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#austin-ecom-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Austin Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/services/hero-enterprise-ecommerce.webp"
                  alt="Austin Texas modern ecommerce development and custom Shopify Plus store mockup"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. TECHNOLOGY MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Modern Commerce Tech Stack</div>
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

        {/* ── 03. 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="FactoryJet senior ecommerce engineers building custom Shopify solutions in Austin"
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
                  <span>Speed, Scale &amp; Conversion</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Storefronts Engineered for Austin&apos;s High-Volume Merchants
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From South Congress lifestyle boutiques to East Austin CPG innovators and North Austin wholesale distributors, Austin businesses need stores that maximize checkout conversion and eliminate inventory friction.
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
                  <ModalCTAButton label="Schedule Ecommerce Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. AUSTIN DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="austin-ecom-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Austin Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Ecommerce Development for Austin&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From South Congress lifestyle boutiques to East Austin CPG innovators and North Austin wholesale distributors:
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
                Specialized Ecommerce Architectures for Austin Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every retail and wholesale vertical in Austin demands customized checkout funnels, ERP connectors, and speed optimization:
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
                Why Austin Merchants Choose FactoryJet Ecommerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace fragile app stacks and slow monolithic checkouts with modern engineering:
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
              <RegionalBenchmarkCard city="Austin" vertical="ecommerce" />
            </div>
          </section>

          <EnterpriseArchitectureBlueprint
            badge="// AUSTIN ENTERPRISE E-COMMERCE BLUEPRINT"
            title="High-Scale Commerce: Next.js Storefront to Real-Time ERP"
            subtitle="Explore how custom Next.js storefronts, headless Shopify Plus &amp; BigCommerce engines, NetSuite ERP middleware, and sub-second checkout pipelines operate together seamlessly."
            legacySource="Legacy Magento, WooCommerce &amp; Custom PHP"
            targetStack="Headless Shopify Plus, BigCommerce B2B &amp; Next.js 15"
            ctaLabel="Get an E-Commerce Architecture Quote"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 4-STAGE REPLATFORMING PROTOCOL ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Proven Replatforming Engine</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 4-Stage Ecommerce Launch Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A disciplined engineering methodology for high-conversion storefront launches with zero scope drift:
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
                Evaluating Austin Ecommerce Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led Shopify Plus development against traditional template agencies before you sign:
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
        <CommerceRoiCalculator city="Austin" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="AUSTIN ECOMMERCE INTELLIGENCE"
          headline="Frequently Asked Questions About Ecommerce Development in Austin TX"
          lead="Direct, plain English answers to what Austin business owners ask about custom Shopify Plus and e-commerce development:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <EcommerceCityLinksUS currentCity="austin" />
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
              <span>Fixed-Price &amp; Zero Downtime</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade Your Austin Ecommerce Architecture?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Tell us about your catalog size and operational goals. We will provide a comprehensive architectural proposal, clear migration timeline, and interactive Figma preview.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Fixed-Price Proposal" region="us" btnVariant="primary-light" />
            </div>

            <p style={{ marginTop: '28px', fontSize: '13.5px', color: '#8E8E9F' }}>
              Related services: <Link href="/austin/seo" style={{ color: '#FF5622', textDecoration: 'underline' }}>Austin SEO agency</Link>, <Link href="/services/shopify-development" style={{ color: '#FF5622', textDecoration: 'underline' }}>Shopify development</Link>, <Link href="/services/shopify-plus-b2b" style={{ color: '#FF5622', textDecoration: 'underline' }}>Shopify Plus B2B</Link>, and <Link href="/agentic-commerce" style={{ color: '#FF5622', textDecoration: 'underline' }}>Agentic commerce</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
