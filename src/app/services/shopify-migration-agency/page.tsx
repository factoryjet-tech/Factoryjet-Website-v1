import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS';
import HeroInlineForm from '@/components/HeroInlineForm';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-30';
const CANONICAL = 'https://factoryjet.com/services/shopify-migration-agency';

export const metadata: Metadata = {
  title: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet',
  description:
    'Enterprise Shopify Plus migration agency. Zero-downtime database ETL replatforming from Magento, WooCommerce, BigCommerce, and Salesforce to Shopify Plus with 100% SEO preservation.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet',
    description:
      'Enterprise Shopify Plus migration agency. Zero-downtime database ETL replatforming from Magento, WooCommerce, BigCommerce, and Salesforce to Shopify Plus with 100% SEO preservation.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/shopify-migration/hero.webp',
        width: 1024,
        height: 1024,
        alt: 'Enterprise Shopify Plus Migration Engineering Dashboard',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet',
    description:
      'Enterprise Shopify Plus migration agency. Zero-downtime database ETL replatforming from Magento, WooCommerce, BigCommerce, and Salesforce to Shopify Plus with 100% SEO preservation.',
    images: ['https://factoryjet.com/images/us/shopify-migration/hero.webp'],
  },
};

const MIGRATION_PLATFORMS = [
  {
    name: 'Magento / Adobe Commerce',
    slug: 'magento-to-shopify',
    link: '/replatforming/magento-to-shopify',
    badge: 'High Enterprise Demand',
    pain: 'Crippling cloud hosting bills ($4,000–$15,000/mo), endless PHP security patch cycles, fragile third-party extensions, slow catalog rendering, and high developer turnover.',
    solution: 'Automated database ETL of complex EAV catalog models into clean Shopify metafields, customer password hash preservation via Multipass, and 70% lower ongoing total cost of ownership.',
    keyStats: ['70% lower TCO', 'Zero server patching', 'Sub-second checkout'],
  },
  {
    name: 'WooCommerce / WordPress',
    slug: 'woocommerce-to-shopify',
    link: '/replatforming/woocommerce-to-shopify',
    badge: 'DTC & High-Growth Brands',
    pain: 'Frequent database deadlocks during flash sales, conflicting plugin updates breaking checkout, slow mobile load times, and constant vulnerability scans on unpatched plugins.',
    solution: 'Full product variants, customer order history, and subscription billing token migration to Shopify Plus with native Shop Pay checkout acceleration and 99.99% uptime SLA.',
    keyStats: ['99.99% uptime', '1-tap Shop Pay', 'Automated tax & fraud'],
  },
  {
    name: 'BigCommerce Enterprise',
    slug: 'bigcommerce-to-shopify-plus',
    link: '/replatforming/bigcommerce-to-shopify-plus',
    badge: 'B2B & Multi-Storefront',
    pain: 'Fragmented app ecosystem, restrictive checkout customization constraints, and sluggish headless API response times under high concurrent peak catalog volume.',
    solution: 'Seamless migration of B2B price lists, parent-child company accounts, Net payment terms, and custom business logic into native Shopify Plus B2B and Checkout Extensibility.',
    keyStats: ['Unified B2B + DTC', 'Custom checkout rules', 'Fast Storefront GraphQL'],
  },
  {
    name: 'Salesforce Commerce Cloud (SFCC)',
    slug: 'salesforce-commerce-cloud-to-shopify-plus',
    link: '/replatforming/salesforce-commerce-cloud-to-shopify-plus',
    badge: 'Global Enterprise Scale',
    pain: 'Excessive percentage-of-GMV licensing penalties, proprietary vendor lock-in, multi-month developer onboarding cycles, and bloated legacy pipeline architectures.',
    solution: 'Enterprise multi-currency, multi-location catalog migration to Shopify Plus Markets and Hydrogen/Next.js headless frontends, saving $300k+/year in licensing and maintenance.',
    keyStats: ['Save $300k+/yr licensing', 'Modern React/Next.js stack', 'Rapid sprint cadence'],
  },
  {
    name: 'Custom PHP / Laravel / Rails',
    slug: 'custom-monolith-to-shopify',
    link: '/replatforming',
    badge: 'Bespoke Monoliths',
    pain: 'Accumulated technical debt, single-point-of-failure in-house codebases, unmaintained custom payment gateways, and immense operational risk when core engineers leave.',
    solution: 'Architectural extraction of custom business logic into Shopify Functions and Webhook microservices, eliminating custom server maintenance and PCI compliance headaches entirely.',
    keyStats: ['Zero technical debt', 'PCI-DSS Level 1 compliance', 'Full API extensibility'],
  },
  {
    name: 'Squarespace / Wix',
    slug: 'squarespace-to-shopify',
    link: '/replatforming/squarespace-to-shopify',
    badge: 'Scaling SMBs',
    pain: 'Severe catalog size ceilings, lack of advanced ERP/inventory sync, rigid checkout flows, and minimal international tax/currency support for high-growth merchants.',
    solution: 'Rapid migration of catalog, collections, and brand assets to custom high-converting Shopify Liquid or headless storefronts with multi-carrier shipping automation.',
    keyStats: ['Uncapped catalog scaling', 'Multi-carrier shipping rules', 'Advanced marketing integrations'],
  },
];

const MIGRATION_DATA_PROTOCOLS = [
  {
    title: '100,000+ SKU Catalog & Metafields ETL',
    desc: 'We map complex legacy relational databases (EAV, custom attributes, hierarchical categories, bundled products, and downloadable assets) directly into Shopify native variants and structured Metafields with zero schema corruption.',
    points: ['Variant attribute preservation', 'Media asset CDN transfer', 'Custom metadata schema mapping'],
  },
  {
    title: 'Customer Passwords & Historical Auth Continuity',
    desc: 'We utilize Shopify Plus Multipass API and cryptographic token bridges (preserving bcrypt/Argon2 password hashes) so your existing customer base logs in seamlessly post-migration without frustrating password reset emails.',
    points: ['Zero customer login friction', 'Loyalty point & credit migration', 'Encrypted customer data transfer'],
  },
  {
    title: 'Historical Orders, Invoices & Tax Reconciliation',
    desc: 'Complete historical transaction and fulfillment data (order status, line items, refund history, custom invoice PDFs, and historical tax rates) imported into Shopify Plus for uninterrupted customer service and ERP consistency.',
    points: ['100% order history retention', 'Financial reconciliation checks', 'ERP & accounting sync continuity'],
  },
  {
    title: '1:1 301 URL Redirect Mapping & SEO Shield',
    desc: 'Every legacy category, product, blog post, and CMS page URL is programmatically mapped to its new Shopify equivalent with strict 301 permanent redirects, preserving 100% of historical backlinks, domain authority, and organic search traffic.',
    points: ['Zero 404 crawl errors', 'Google Search Console sync', 'Backlink juice preservation'],
  },
];

const ENTERPRISE_ETL_DATA = [
  {
    entity: 'Products & Multi-Variant Matrix',
    source: 'Magento catalog_product_entity, WooCommerce wp_posts + wp_postmeta, SFCC product-catalog XML',
    destination: 'Shopify GraphQL ProductCreate & ProductVariantsCreate mutations',
    transformation: 'Relational attribute EAV normalization into native Shopify options, custom Metafield definitions, and multi-tier price lists.',
    validation: '100% automated SKU count checksum, variant option parity, and high-resolution image CDN delivery verification.',
  },
  {
    entity: 'Customer Accounts & Passwords',
    source: 'Legacy customer database tables, bcrypt / Argon2 / SHA-256 password hashes, historical addresses',
    destination: 'Shopify Plus Multipass API & Customer Account SSO tokens',
    transformation: 'Cryptographic token handshake bridging existing legacy password hashes to Shopify Multipass, eliminating mandatory password resets.',
    validation: 'End-to-end customer authentication testing across random 500-user sample profiles with zero login failures.',
  },
  {
    entity: 'Historical Orders & Invoices',
    source: 'Legacy sales_order, order line items, tax breakdown tables, fulfillment tracking numbers',
    destination: 'Shopify Plus Orders API with historical fulfillment status and financial transaction logs',
    transformation: 'Line-item financial mapping with preserved invoice IDs, coupon codes, tax jurisdiction codes, and ERP reconciliation ledger keys.',
    validation: 'Penny-for-penny financial settlement verification against historical general ledger and accounting reports.',
  },
  {
    entity: 'B2B Wholesale Price Lists & Accounts',
    source: 'Custom B2B pricing tables, customer group tiers, Net payment terms (Net 15/30/60), company locations',
    destination: 'Shopify Plus Native B2B Company, Location & Catalogs GraphQL schemas',
    transformation: 'Direct mapping of wholesale parent-child corporate hierarchies, tiered quantity discounts, and custom price lists.',
    validation: 'Multi-tier wholesale checkout simulation with simulated buyer permissions and draft order approvals.',
  },
  {
    entity: 'SEO URL Rewrite Hierarchies',
    source: 'Legacy url_rewrite tables, historical XML sitemaps, Google Search Console indexed URL inventory',
    destination: 'Cloudflare Edge Worker 301 Redirect Rules & Shopify URL Redirect API',
    transformation: 'Programmatic regex and 1:1 destination mapping eliminating legacy query strings, index.php fragments, and category path parameters.',
    validation: 'Automated 100% crawl verification verifying every historical URL returns an exact 301 status with zero redirect loops.',
  },
];

const MIGRATION_ROADMAP = [
  {
    phase: 'Phase 1: Discovery, Architecture & Data Modeling',
    timeline: 'Weeks 1 - 2',
    desc: 'We extract legacy database schemas, audit third-party integrations (ERP, CRM, WMS, PIM), catalog all custom product types and business logic, and construct a comprehensive migration data mapping matrix.',
    deliverables: [
      'Comprehensive data dictionary & field mapping matrix (Products, Customers, Orders, Metafields)',
      'Third-party application rationalization matrix and API replacement strategy',
      'Technical SEO baseline crawl audit and legacy URL indexation inventory (100% coverage)',
      'Security and compliance risk assessment for customer authentication and payment data',
    ],
  },
  {
    phase: 'Phase 2: Automated ETL Pipeline & Test Migration',
    timeline: 'Weeks 3 - 4',
    desc: 'We build custom Python/Node.js ETL scripts connecting directly to your legacy database or REST/GraphQL APIs, executing iterative test imports into a private staging Shopify Plus environment.',
    deliverables: [
      'Automated extraction scripts with idempotency safeguards and data sanitization',
      'Initial staging import of full product catalog, categories, collections, and custom metafields',
      'Automated data validation reports flagging missing attributes, orphan variants, or image discrepancies',
      'Review and sign-off on product presentation with client merchandising and category managers',
    ],
  },
  {
    phase: 'Phase 3: Storefront Engineering & Custom App Integration',
    timeline: 'Weeks 5 - 7',
    desc: 'Our senior engineering team develops your bespoke Shopify Plus theme or Next.js 15 headless frontend, integrating ERP middleware, search engines, and custom checkout extensions.',
    deliverables: [
      'Custom Liquid 2.0 theme or decoupled Next.js 15 App Router storefront build',
      'Algolia / Searchspring instant search and faceted filtering integration',
      'Shopify Checkout Extensibility UI components for custom upsells and shipping validation rules',
      'ERP / WMS bidirectional middleware synchronization (NetSuite, SAP, Acumatica, Brightpearl)',
    ],
  },
  {
    phase: 'Phase 4: Customer, Order & Subscription Data Migration',
    timeline: 'Week 8',
    desc: 'We migrate complete historical order records, tax breakdowns, fulfillment tracking numbers, customer profiles, store credit balances, and active subscription billing contracts.',
    deliverables: [
      'Historical order records and invoice data imported with accurate financial settlement reconciliation',
      'Customer profile migration with Shopify Multipass seamless login configuration',
      'Subscription contract migration to Recharge, Skio, or native Shopify Subscriptions',
      'Loyalty points and reward balances transferred with zero customer balance loss',
    ],
  },
  {
    phase: 'Phase 5: Technical SEO Audit & 301 Redirect Shield',
    timeline: 'Week 9',
    desc: 'We validate the comprehensive 1:1 301 redirect map, verify canonical tags, inspect XML sitemaps, and test JSON-LD Schema.org structured data across all device formats.',
    deliverables: [
      '1:1 301 permanent redirect map uploaded and validated across staging edge proxies',
      'Deep JSON-LD Schema.org graphs (Product, AggregateOffer, BreadcrumbList, Organization)',
      'Core Web Vitals lab and field validation (guaranteed 95+ mobile performance score)',
      'Pre-launch Google Search Console URL inspection and crawler simulation verification',
    ],
  },
  {
    phase: 'Phase 6: End-to-End UAT, Load Testing & Staging Sign-Off',
    timeline: 'Week 10',
    desc: 'We execute full transaction cycle testing (order placement, inventory deduction, payment capture, tax calculation, fulfillment notification, return processing) across all sales channels.',
    deliverables: [
      'End-to-end transactional testing across credit cards, Shop Pay, PayPal, Apple Pay, and Klarna',
      'Automated load testing simulating 10,000+ concurrent shoppers during flash-sale scenarios',
      'ERP order ingestion and inventory deduction verification in sandbox environments',
      'Formal UAT stakeholder sign-off across e-commerce, marketing, operations, and finance teams',
    ],
  },
  {
    phase: 'Phase 7: Zero-Downtime DNS Cutover & Hypercare War Room',
    timeline: 'Launch Day & Post-Launch',
    desc: 'We execute a seamless live cutover using Cloudflare Edge traffic routing with delta order synchronization, followed by 30 days of 24/7 dedicated hypercare engineering support.',
    deliverables: [
      'Delta synchronization of orders and customers created on legacy platform during final cutover window',
      'Zero-downtime DNS switchover with live transaction settlement and webhook monitoring',
      'Immediate post-launch search crawler indexing monitoring and 404 error log scanning',
      '30-day dedicated post-launch hypercare engineering retainer with guaranteed SLA response times',
    ],
  },
];

const FAQS = [
  {
    q: 'Will our organic Google search traffic drop after migrating to Shopify Plus?',
    a: 'No. When executed with rigorous technical engineering, your organic traffic will not drop. The primary reason migrations fail with amateur agencies is incomplete 301 redirect mapping, changed URL hierarchies without redirects, missing metadata, and lost schema markup. FactoryJet performs a complete pre-migration crawl of your entire domain, programmatically maps every single legacy URL to its exact Shopify destination with 1:1 301 redirects, preserves all title tags, meta descriptions, image alt attributes, and JSON-LD structured data, and monitors Google Search Console indexing in real time during cutover.',
  },
  {
    q: 'How do you prevent 404 errors during migration?',
    a: 'We generate an exhaustive inventory of every URL indexed in Google, Bing, and historical server log files using automated crawling tools. We construct a 1:1 redirect map where old paths (e.g., /catalog/product/view/id/1234 or /shop/apparel/item.html) point directly to their new canonical Shopify URLs. This redirect map is loaded at the edge (via Cloudflare Workers or Shopify native URL redirects) so crawlers and visitors are instantly forwarded to the correct page without hitting 404 error pages.',
  },
  {
    q: 'Can you migrate 100,000+ SKUs with complex product variants and custom attributes?',
    a: 'Yes. We regularly migrate high-volume enterprise catalogs with 50,000 to 500,000+ SKUs containing complex product variations, multi-tier pricing, custom engraving text, file uploads, and technical specifications. We design custom ETL scripts that convert legacy relational tables and EAV models into Shopify native product options (up to 2,000 variants per product on modern Shopify) and structured Shopify Metafields for rich technical attributes.',
  },
  {
    q: 'What happens to our historical order records and invoices?',
    a: 'We migrate complete historical order records, line items, historical customer billing and shipping addresses, tax breakdowns, discount codes, shipping fees, fulfillment tracking numbers, and refund histories into Shopify Plus using Shopify’s Order API. Your customer service team retains full visibility into past customer purchase history directly within the Shopify admin, and past orders synchronize seamlessly with your ERP.',
  },
  {
    q: 'Can existing customers log into Shopify without resetting their passwords?',
    a: 'Yes. On Shopify Plus, we implement Shopify Multipass authentication or custom cryptographic token bridging. This allows existing customers with password hashes (bcrypt, Argon2, SHA-256) to log into the new Shopify store seamlessly on their first visit without requiring disruptive mass password-reset email campaigns, preventing customer friction and cart abandonment.',
  },
  {
    q: 'What happens to customer loyalty points and store credit during migration?',
    a: 'We extract loyalty balances, VIP tier statuses, and store credit ledger records from legacy systems (such as Yotpo Loyalty, Smile.io, MageWorx, or custom database tables) and import them directly into your new loyalty app on Shopify Plus or native Shopify Customer Account metafields, ensuring zero customer balance loss.',
  },
  {
    q: 'Will our store experience any downtime during the platform migration?',
    a: 'No. Your existing store remains 100% active, fully functional, and capable of taking orders right up until the exact moment of DNS cutover. We perform all development, data imports, design, and integration testing on private staging environments. During the scheduled cutover window (typically during your lowest traffic hour), we run a rapid delta sync of newly placed orders and flip the DNS records at the edge, achieving zero customer-facing downtime.',
  },
  {
    q: 'How do you handle orders placed on the old store right before DNS cutover?',
    a: 'We utilize an automated Delta Sync protocol. Immediately following DNS switchover, our migration script queries the legacy platform’s database for any orders placed during the final transition window and imports them into Shopify Plus while simultaneously forwarding them to your warehouse or ERP, guaranteeing zero lost orders or double-fulfillments.',
  },
  {
    q: 'How does Shopify Plus connect to our ERP system (NetSuite, SAP, Microsoft Dynamics)?',
    a: 'We build enterprise event-driven integration pipelines between Shopify Plus and your ERP using modern webhooks, Amazon EventBridge, Celigo, Boomi, or custom middleware microservices. The integration manages real-time bidirectional syncing of inventory counts across multiple warehouse locations, automated order ingestion, shipment tracking updates, and financial reconciliation.',
  },
  {
    q: 'What happens to our custom third-party integrations and shipping carriers?',
    a: 'During Phase 1 discovery, we audit all third-party systems, including 3PL warehouses, shipping rate calculators (FedEx, UPS, DHL, Freight), custom tax calculation engines (Avalara AvaTax), and marketing platforms (Klaviyo, Gorgias, Attentive). We reconnect these platforms to Shopify Plus using official enterprise connectors or custom private apps built on Shopify Functions.',
  },
  {
    q: 'Can you migrate our complex B2B wholesale pricing tiers and company accounts?',
    a: 'Yes. Shopify Plus includes native B2B wholesale functionality. We migrate company profiles, location-specific price lists, quantity price breaks, Net payment terms (Net 15/30/60), and custom product catalogs directly into Shopify native B2B, eliminating the need for expensive third-party wholesale apps or duplicate clone stores.',
  },
  {
    q: 'How long does an enterprise Shopify migration take?',
    a: 'A standard enterprise Shopify Plus migration takes between 6 and 12 weeks depending on catalog complexity, custom design requirements, and ERP integration depth. FactoryJet provides clear milestone schedules with dedicated weekly sprint reviews so your team always knows exact progress.',
  },
  {
    q: 'What is the pricing model for a Shopify Plus migration?',
    a: 'FactoryJet operates on transparent, fixed-price sprint pricing based on the scope of your migration (catalog size, design complexity, ERP integrations, and custom apps). There are zero hidden fees, hourly overage surprises, or perpetual agency licensing costs. You receive a guaranteed fixed scope and delivery timeline.',
  },
  {
    q: 'Who owns the code and intellectual property after migration?',
    a: 'You do. 100%. All custom theme code, headless Next.js repositories, migration ETL scripts, middleware pipelines, and configuration documentation are committed directly to your private GitHub or GitLab repository with full intellectual property ownership transferred to your company upon launch.',
  },
  {
    q: 'How do you handle delta order synchronization during the DNS propagation window?',
    a: 'DNS propagation can take anywhere from a few minutes to several hours across global ISPs. During this window, some shoppers may still hit the old server while others hit Shopify Plus. Our automated delta sync worker monitors the legacy database continuously, capturing any orders placed on the old platform and streaming them into Shopify Plus via the Orders API in near real-time, preventing fulfillment discrepancies.',
  },
  {
    q: 'How are custom product bundles, tiered quantity discounts, and custom pricing migrated?',
    a: 'We leverage Shopify Functions—Shopify’s high-performance server-side WebAssembly logic engine. Instead of relying on slow client-side JavaScript apps, we engineer custom discount and cart validation rules that execute natively within Shopify’s checkout backend, ensuring sub-50ms execution speed and seamless mobile conversion.',
  },
  {
    q: 'What happens to customer subscription tokens and recurring billing contracts?',
    a: 'We perform secure payment token migrations across payment gateways (e.g. Authorize.net to Shopify Payments / Stripe) using PCI-compliant token exchange protocols. We import active subscription contracts into platforms like Recharge, Skio, or native Shopify Subscriptions without requiring subscribers to re-enter their credit card numbers.',
  },
  {
    q: 'How do you migrate custom gift cards, store credit, and loyalty points?',
    a: 'Unused gift card balances and store credit ledgers are exported from your legacy database and created via Shopify Plus Gift Card APIs as active customer credits. We verify total outstanding liability before and after migration to ensure 100% financial ledger reconciliation with your accounting department.',
  },
  {
    q: 'What is the difference between a direct API ETL migration and an app-based migration tool like Cart2Cart?',
    a: 'Automated SaaS tools like Cart2Cart use generic cookie-cutter field mappings that frequently truncate custom metafields, corrupt variant hierarchies, fail to map complex 301 redirects, and cannot handle enterprise ERP synchronization. FactoryJet writes custom, auditable ETL scripts tailored specifically to your relational database schema, providing line-by-line verification, data sanitization, and rollback safety.',
  },
  {
    q: 'How do you audit and verify that 100% of URLs are correctly 301 redirected?',
    a: 'We execute automated end-to-end crawl testing using automated headless browser scripts. Our testing engine sends HTTP GET requests to every single legacy URL in your historical sitemap, checking that the HTTP status code is exactly 301 (Permanent Redirect) and that the destination URL matches the canonical Shopify target without redirect chains or intermediate 404 errors.',
  },
];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Enterprise Shopify Migration & Replatforming Services',
      description:
        'Enterprise Shopify Plus migration agency specializing in zero-downtime database ETL replatforming from Magento, WooCommerce, BigCommerce, and Salesforce to Shopify Plus with 100% SEO preservation.',
      provider: {
        '@type': 'Organization',
        name: 'FactoryJet',
        url: 'https://factoryjet.com',
        logo: 'https://factoryjet.com/images/logo.png',
      },
      serviceType: 'E-Commerce Development',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Shopify Migration Agency | Zero-Downtime Replatforming | FactoryJet',
      description:
        'Enterprise Shopify Plus migration agency. Zero-downtime database ETL replatforming from Magento, WooCommerce, BigCommerce, and Salesforce to Shopify Plus with 100% SEO preservation.',
      datePublished: '2026-01-15',
      dateModified: PAGE_MODIFIED,
      inLanguage: 'en-US',
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & Principal E-Commerce Architect',
        url: 'https://factoryjet.com/about',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
  ],
};

export default function ShopifyMigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <SiteHeader />

      <main className="pp-main">
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-badge">
            <span className="pp-pulse-dot" />
            ENTERPRISE REPLATFORMING &amp; DATA MIGRATION
          </div>
          <h1 className="pp-hero-title">
            Enterprise Shopify Migration Agency: Zero Downtime. Zero SEO Loss.
          </h1>
          <p className="pp-hero-sub">
            Migrate your high-volume e-commerce store from Magento, WooCommerce, BigCommerce, or Salesforce to Shopify Plus. We execute automated database ETL, customer password preservation, 1:1 301 redirect mapping, and ERP synchronization with guaranteed zero downtime and 100% data integrity.
          </p>

          <div className="pp-hero-ctas" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
            <HeroInlineForm
              source="Shopify Migration Hero Lead"
              region="us"
              submitLabel="Request Free Migration Audit →"
            />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="#migration-protocols"
                className="pp-btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>🛡️</span> Explore Migration Protocols
              </a>
              <a
                href="#migration-roadmap"
                className="pp-btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>🗓️</span> 7-Phase Sprint Roadmap
              </a>
            </div>
          </div>

          {/* Context-Aware Bespoke Hero Visual */}
          <div style={{ marginTop: '2.5rem', width: '100%', maxWidth: '1000px', margin: '2.5rem auto 0 auto', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <Image
              src="/images/us/shopify-migration/hero.webp"
              alt="Enterprise 100,000 SKU Shopify Plus Database Migration Dashboard"
              width={1024}
              height={1024}
              priority
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </section>

        {/* ANSWER-FIRST EXECUTIVE BRIEF */}
        <section className="pp-section" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="pp-container" style={{ maxWidth: '1080px' }}>
            <div className="pp-section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <span className="pp-badge" style={{ background: 'rgba(234, 88, 12, 0.15)', color: '#f97316', border: '1px solid rgba(234, 88, 12, 0.3)' }}>
                EXECUTIVE BRIEF
              </span>
              <h2 className="pp-section-title" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>
                Why Enterprise E-Commerce Replatforming Fails (And How We Engineer Success)
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  Over <strong>68% of enterprise e-commerce replatforming projects</strong> experience severe post-launch issues: catastrophic organic search traffic drops of 30% to 60%, broken customer accounts forcing password resets, missing order histories that paralyze customer support, and unexpected launch day downtime that costs hundreds of thousands in lost revenue.
                </p>
                <p>
                  These failures are not caused by the destination platform—they are caused by poor migration engineering. Typical agencies rely on generic SaaS migration tools or unvalidated CSV exports that truncate custom product metafields, corrupt parent-child variant relationships, and fail to map complex URL rewrite hierarchies.
                </p>
              </div>

              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  <strong>FactoryJet approaches migration as an enterprise software engineering discipline.</strong> We build custom, auditable database ETL pipelines in Python and Node.js that extract raw relational data from your legacy MySQL, PostgreSQL, or Oracle databases, sanitize attributes, and load them directly into Shopify Plus via high-throughput GraphQL APIs.
                </p>
                <p>
                  We implement <strong>Shopify Multipass authentication</strong> to preserve customer password hashes, execute automated 1:1 301 redirect validation at the edge across 100% of historical URLs, and perform live delta synchronization during DNS cutover, guaranteeing zero customer-facing downtime and 100% SEO ranking continuity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 PLATFORM REPLATFORMING PATHS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">REPLATFORMING PATHWAYS</span>
              <h2 className="pp-section-title">Select Your Source E-Commerce Platform</h2>
              <p className="pp-section-sub">
                Explore platform-specific migration runbooks, data mapping protocols, and total cost of ownership comparisons.
              </p>
            </div>

            <div className="pp-grid-3">
              {MIGRATION_PLATFORMS.map((p, i) => (
                <div key={i} className="pp-card pp-platform-card">
                  <span className="pp-platform-badge">{p.badge}</span>
                  <h3 className="pp-platform-name">{p.name}</h3>
                  <div className="pp-platform-pain">
                    <strong>Legacy Pain:</strong> {p.pain}
                  </div>
                  <div className="pp-platform-sol">
                    <strong>Shopify Solution:</strong> {p.solution}
                  </div>
                  <div className="pp-platform-stats">
                    {p.keyStats.map((k, idx) => (
                      <span key={idx} className="pp-stat-pill">
                        {k}
                      </span>
                    ))}
                  </div>
                  <Link href={p.link} className="pp-platform-link">
                    Explore {p.name} Migration Guide →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 PILLARS OF ZERO DATA LOSS */}
        <section id="migration-protocols" className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">ZERO DATA LOSS ARCHITECTURE</span>
              <h2 className="pp-section-title">The 4 Pillars of Enterprise Migration Integrity</h2>
              <p className="pp-section-sub">
                How our engineering team guarantees complete catalog, customer, transactional, and SEO continuity during high-volume replatforming.
              </p>
            </div>

            <div className="pp-grid-2">
              {MIGRATION_DATA_PROTOCOLS.map((m, i) => (
                <div key={i} className="pp-card pp-protocol-card">
                  <h3 className="pp-protocol-title">{m.title}</h3>
                  <p className="pp-protocol-desc">{m.desc}</p>
                  <ul className="pp-protocol-points">
                    {m.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', width: '100%', maxWidth: '1000px', margin: '3rem auto 0 auto', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Image
                src="/images/us/shopify-migration/migration-war-room.webp"
                alt="301 URL Redirect Mapping and Migration War Room Analytics Dashboard"
                width={1200}
                height={896}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* ENTERPRISE DATA MAPPING & ATTRIBUTE NORMALIZATION MATRIX */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">DATABASE ETL MATRIX</span>
              <h2 className="pp-section-title">Relational Schema to Shopify Plus Data Mapping Matrix</h2>
              <p className="pp-section-sub">
                How our automated extraction pipelines convert complex legacy relational database tables into native Shopify GraphQL schemas.
              </p>
            </div>

            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Data Entity</th>
                    <th>Source Relational Database Tables</th>
                    <th>Shopify Plus Target Schema</th>
                    <th>Transformation &amp; Normalization Logic</th>
                    <th>Verification Checksum</th>
                  </tr>
                </thead>
                <tbody>
                  {ENTERPRISE_ETL_DATA.map((e, i) => (
                    <tr key={i}>
                      <td className="pp-table-factor" style={{ fontWeight: 700, color: '#f97316' }}>{e.entity}</td>
                      <td style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{e.source}</td>
                      <td style={{ fontSize: '0.85rem', color: '#93c5fd' }}>{e.destination}</td>
                      <td style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{e.transformation}</td>
                      <td style={{ fontSize: '0.85rem', color: '#86efac' }}>{e.validation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* INTERACTIVE COMMERCE ROI CALCULATOR */}
        <section className="pp-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <div className="pp-section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="pp-badge">FINANCIAL MODELING</span>
              <h2 className="pp-section-title">Calculate Your Replatforming ROI</h2>
              <p className="pp-section-sub" style={{ margin: '0 auto' }}>
                Estimate the ongoing cost savings and revenue acceleration from eliminating legacy hosting fees, server maintenance, and checkout friction.
              </p>
            </div>
            <CommerceRoiCalculator />
          </div>
        </section>

        {/* 7-PHASE SPRINT ROADMAP (35+ DELIVERABLES) */}
        <section id="migration-roadmap" className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">SPRINT METHODOLOGY</span>
              <h2 className="pp-section-title">The 10-Week Enterprise Replatforming Sprint Roadmap</h2>
              <p className="pp-section-sub">
                A structured, milestone-driven migration process designed for complete transparency, data validation, and zero launch day risk.
              </p>
            </div>

            <div className="pp-roadmap-grid">
              {MIGRATION_ROADMAP.map((m, i) => (
                <div key={i} className="pp-card pp-roadmap-card">
                  <div className="pp-roadmap-header">
                    <span className="pp-roadmap-phase">{m.phase}</span>
                    <span className="pp-roadmap-time">{m.timeline}</span>
                  </div>
                  <p className="pp-roadmap-desc">{m.desc}</p>
                  <div className="pp-roadmap-deliv-title">Sprint Deliverables:</div>
                  <ul className="pp-roadmap-delivs">
                    {m.deliverables.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE 20+ PAA FAQS */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <FAQ
              headline="Frequently Asked Questions"
              lead="Granular, transparent answers to the most critical technical, SEO, customer auth, and operational migration questions."
              items={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
            />
          </div>
        </section>

        {/* FOUNDER E-E-A-T AUTHOR CARD */}
        <section className="pp-section" style={{ background: '#090d16', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '850px' }}>
            <AuthorCard variant="dark" />
          </div>
        </section>

        {/* REGIONAL SILO INTERLINKING */}
        <section className="pp-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container">
            <div className="pp-section-header" style={{ marginBottom: '1.5rem' }}>
              <span className="pp-badge">US REGIONAL COVERAGE</span>
              <h2 className="pp-section-title" style={{ fontSize: '1.5rem' }}>
                Local E-Commerce Engineering Teams Across Major US Markets
              </h2>
            </div>
            <EcommerceCityLinksUS currentCity="" />
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
