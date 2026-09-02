import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

// Lazy-load the estimator as a separate chunk so its ~255 KiB JS doesn't block
// initial render. ssr stays true (required in a Server Component) so the
// Migration Guarantees list still renders in the static HTML for crawlers.
const ReplatformingScopeEstimator = dynamic(
  () => import('@/components/commerce/ReplatformingScopeEstimator'),
  { ssr: true }
);

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-09-01';

export const metadata: Metadata = {
  title: 'Ecommerce Replatforming Cost Calculator | FactoryJet',
  description:
    'Estimate ecommerce replatforming costs to Shopify Plus. Model SKU catalog volume, custom ERP connectors, and zero-downtime cutover schedules. Get an audit.',
  keywords: [
    'ecommerce replatforming cost',
    'shopify plus migration calculator',
    'replatforming cost calculator',
    'magento to shopify migration cost',
    'bigcommerce replatforming cost',
    'ecommerce migration timeline',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Replatforming Cost Calculator | FactoryJet',
    description:
      'Model ecommerce replatforming scope, migration timeline, and DevOps savings across Magento, NetSuite SuiteCommerce, Salesforce CC, WooCommerce, and Shopify Plus.',
    url: 'https://factoryjet.com/tools/replatforming-cost-calculator',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Ecommerce Replatforming Scope and Cost Calculator' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Replatforming Cost Calculator | FactoryJet',
    description: 'Calculate ecommerce replatforming scope, migration timelines, and maintenance savings with our interactive estimator.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/tools/replatforming-cost-calculator' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'scope', label: 'Migration Scope & Timelines' },
  { key: 'data', label: 'Data & Password Preservation' },
  { key: 'seo', label: 'SEO & 301 Redirect Equity' },
  { key: 'erp', label: 'ERP & Cutover Execution' },
  { key: 'usage', label: 'How This Estimator Works' },
];

const FAQ_ITEMS = [
  {
    category: 'scope',
    question: 'What factors determine the total cost of an ecommerce replatforming project?',
    answer:
      'Total migration investment is driven by catalog SKU complexity, historical customer and order data volume, custom third-party ERP and WMS integrations, B2B tiered contract pricing rules, custom theme architecture, and rigorous quality assurance testing. A simple 200-SKU DTC catalog with no ERP dependency costs meaningfully less than a 10,000-SKU B2B catalog syncing live inventory across NetSuite and three warehouses.',
  },
  {
    category: 'scope',
    question: 'How long does an enterprise migration to Shopify Plus or BigCommerce take?',
    answer:
      'Standard mid-market replatforming deployments typically take between 4 and 8 weeks. Highly customized enterprise architectures with deep NetSuite, SAP, or Dynamics 365 ERP synchronization take between 8 and 14 weeks. The timeline scales primarily with the number of systems that must stay synchronized during cutover, not with catalog size alone, since ERP integration testing is usually the longest single phase.',
  },
  {
    category: 'scope',
    question: 'Why do brands migrate from Magento and Salesforce to Shopify Plus?',
    answer:
      'Brands migrate to eliminate mandatory security patching, server hosting maintenance, high developer retainers, and brittle monolithic extensions, replacing them with a fully managed cloud architecture backed by 99.99 percent uptime and native 1-click Shop Pay checkout. Most brands we talk to are also reacting to a specific pain point, a Black Friday outage on legacy servers or a checkout conversion gap versus competitors.',
  },
  {
    category: 'scope',
    question: 'What ongoing maintenance cost savings occur after replatforming?',
    answer:
      'By moving from self-hosted monolithic servers to Shopify Plus or BigCommerce, brands typically save $35,000 to $85,000 annually in dedicated cloud hosting, security monitoring, server patching, and emergency DevOps contractor retainers. That figure excludes the developer time freed up to work on merchandising and growth instead of firefighting server incidents during peak traffic events.',
  },
  {
    category: 'data',
    question: 'How are customer accounts and passwords migrated safely?',
    answer:
      'Because customer passwords are encrypted using one-way cryptographic hashes (such as bcrypt or Argon2) in legacy databases, passwords cannot be decrypted. We migrate customer records using automated Multipass token activation or secure password-reset invitation funnels. Customers with an active session on launch day are signed in automatically through Multipass without ever noticing a password change was required.',
  },
  {
    category: 'data',
    question: 'Can historical order data and purchase histories be imported?',
    answer:
      "Yes. Complete historical order records, line item SKUs, transaction dates, customer shipping addresses, and financial statuses are cleansed and imported into the target platform for unified customer lifetime reporting. Preserving this history matters for repeat-customer segmentation and loyalty programs, since starting every customer's purchase count at zero on launch day would break lifetime value reporting and tier eligibility.",
  },
  {
    category: 'data',
    question: 'How do you handle complex product variants and matrix items?',
    answer:
      "We write automated schema transformation scripts that normalize legacy multi-attribute matrix items into clean variant structures, preserving custom metafields, technical specifications, and parent-child SKU relationships. A product with size, color, and material dimensions in the legacy system maps cleanly to Shopify's variant model instead of breaking into duplicate or orphaned product listings during import.",
  },
  {
    category: 'data',
    question: 'What data validation processes ensure zero record loss during migration?',
    answer:
      'We run automated reconciliation scripts that perform line-by-line checksum verification across legacy database exports and staging imports, ensuring exact record parity before DNS cutover. Every product, customer, and order record count is verified against the legacy source before we allow a go-live decision, so a partial or dropped import is caught in staging, not discovered by a customer after launch.',
  },
  {
    category: 'seo',
    question: 'How do you prevent organic search traffic loss during replatforming?',
    answer:
      'We crawl your entire legacy store to construct a complete URL inventory, map 1-to-1 permanent 301 redirects, preserve exact title tags, meta descriptions, and heading hierarchies, and migrate existing Schema.org structured data. Every redirect maps to the single most relevant new page rather than a blanket homepage redirect, which is what actually preserves the ranking signal search engines associate with the old URL.',
  },
  {
    category: 'seo',
    question: 'What happens to legacy URL structures that Shopify cannot support?',
    answer:
      'Legacy deep category hierarchies (such as /category/subcategory/product.html) are redirected via strict 301 server rules to their corresponding /products/ or /collections/ paths, passing complete link equity to the new pages. We build the full redirect map before cutover, not after, so no URL is ever live on the new platform without its permanent redirect already in place.',
  },
  {
    category: 'seo',
    question: 'How quickly should search engine rankings stabilize after launch?',
    answer:
      'With complete 1-to-1 301 redirect mapping, indexation updates, and XML sitemap submissions to Google Search Console, organic traffic typically stabilizes within 7 to 14 days without long-term ranking drops. We monitor Search Console coverage reports daily through that window and correct any redirect gap or crawl error the moment it appears, rather than waiting for a scheduled check-in.',
  },
  {
    category: 'seo',
    question: 'Do you audit backlinks and historical citation equity prior to migration?',
    answer:
      'Yes. We extract all high-authority referring domains and external backlinks pointing to legacy URLs, verifying that every cited landing page receives an immediate, exact 301 redirect. Losing link equity from an earned backlink because the page it points to now 404s is one of the most common and most avoidable causes of a post-migration traffic drop.',
  },
  {
    category: 'erp',
    question: 'How do you synchronize NetSuite, SAP, or Microsoft Dynamics during cutover?',
    answer:
      'We build bi-directional API connectors that synchronize product master data, live inventory across multiple warehouses, customer credit terms, and sales order creation, running staging tests in parallel prior to live switch. Staging tests run against a full copy of production data for at least two weeks before cutover, so integration issues surface long before they could ever reach a live order.',
  },
  {
    category: 'erp',
    question: 'What is delta migration and why is it essential for zero-downtime launches?',
    answer:
      'Delta migration is the process of migrating all new customer accounts, orders, and inventory adjustments generated on the legacy store during the final staging build window immediately prior to DNS cutover, ensuring zero data gap. Without it, any order placed on the old store during the final build hours would be permanently invisible to the new platform, a silent data loss most brands only discover during month-end reconciliation.',
  },
  {
    category: 'erp',
    question: 'How does FactoryJet ensure zero downtime during domain DNS switch?',
    answer:
      'We execute a choreographed cutover protocol: pre-warming CDN caches, lowering DNS TTL values 48 hours in advance, running real-time delta imports, switching records, and validating checkout within a 15-minute maintenance window. We schedule the cutover during your lowest-traffic hours and keep the legacy environment on standby so we can roll back within minutes if validation fails.',
  },
  {
    category: 'erp',
    question: 'How do we schedule a replatforming architecture review with founder Bhavesh Barot?',
    answer:
      'You can schedule a direct 30-minute discovery session. We will evaluate your existing database schemas, ERP connectors, and deliver a detailed scope breakdown with fixed project milestones. You leave the call with a specific week-by-week timeline and fixed price tied to your actual catalog and integration complexity, not a generic range pulled from an average project.',
  },
  {
    category: 'usage',
    question: 'What inputs does this estimator use to calculate my migration timeline?',
    answer:
      'You select your current source platform, target architecture (Shopify, Shopify Plus, BigCommerce B2B, or headless), catalog SKU tier, historical order volume, and ERP or middleware integration depth. Each selection adds or removes weeks from a base timeline tied to your source platform, and a headless target architecture adds a further 20 percent to account for custom frontend engineering.',
  },
  {
    category: 'usage',
    question: 'How is the estimated timeline range calculated?',
    answer:
      'Each source platform carries a base timeline in weeks, migrating off Magento or Salesforce Commerce Cloud starts higher than migrating off WooCommerce, because the underlying architecture is more complex to unwind. We then add time for your SKU tier, order volume, and ERP integration depth, and show the result as a range rather than one number, since real projects vary within that band depending on final QA findings.',
  },
  {
    category: 'usage',
    question: 'Are the annual DevOps savings figures guaranteed?',
    answer:
      'No. The savings figure is modeled from typical hosting, patching, and contractor costs tied to your current source platform, with a modest upward adjustment for enterprise-scale catalogs. It is meant to size the opportunity, not replace an audit of your actual hosting invoices, security retainers, and DevOps contractor spend, which we review directly during a scoping call before quoting a fixed migration price.',
  },
  {
    category: 'usage',
    question: 'What happens after I submit my email through the estimator?',
    answer:
      'Submitting your email, store URL, and selected scope parameters sends the complete configuration, source and target platforms, SKU tier, order volume, and ERP depth, directly to our team rather than a generic form inbox. You get an on-screen confirmation immediately, and we follow up by email with your custom migration roadmap and a link to schedule a technical scoping call.',
  },
  {
    category: 'usage',
    question: 'Does the estimator account for a headless or composable commerce migration?',
    answer:
      'Yes. Selecting the composable headless Next.js target architecture adds 20 percent to the base timeline versus a standard Shopify or BigCommerce target, reflecting the additional custom frontend engineering a headless build requires beyond standard theme development. The risk rating and DevOps savings estimate still calculate the same way regardless of which target architecture you choose.',
  },
];

/* ─────────────────────────────────────────────
   SCHEMAS
───────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const WEBAPP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Ecommerce Replatforming Scope & Cost Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Interactive calculator modeling ecommerce replatforming timelines, migration scope, data complexity, and DevOps cost savings for Shopify Plus migrations.',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Replatforming Cost Calculator', item: 'https://factoryjet.com/tools/replatforming-cost-calculator' },
  ],
};

export default function ReplatformingCostCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBAPP_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader locale="us" />

      <main className="pp-page">
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">// COMMERCE ARCHITECTURE &amp; MIGRATION</p>
              <h1 className="pp-h1">
                Ecommerce <span className="pp-grad">Replatforming Scope</span> Calculator
              </h1>
              <p className="pp-lead">
                Estimate migration timelines, technical complexity, and DevOps savings. Model catalog volume, custom ERP connectors, SEO preservation, and zero-downtime cutover schedules.
              </p>
              <HeroInlineForm
                source="tools_replatforming_cost_calculator"
                region="us"
                submitLabel="Request Migration Scope Audit"
              />
            </div>

            <div className="pp-hero-card">
              <div className="flex items-center justify-between border-b border-[#E7DED6] pb-3 mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F05A28]">
                  Migration Benchmarks
                </span>
                <span className="text-xs text-[#8C827A]">Enterprise US Metrics</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Target Timeline:</span>
                  <span className="font-semibold text-[#14110F]">4 to 8 Weeks</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">SEO Link Preservation:</span>
                  <span className="font-semibold text-[#14110F]">100% 1-to-1 Mapped</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Annual DevOps Savings:</span>
                  <span className="font-semibold text-[#14110F]">$35k to $85k / yr</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#46403B]">Cutover Downtime:</span>
                  <span className="font-semibold text-[#F05A28]">Zero Downtime Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST DEFINITION SECTION */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-6 md:p-8 bg-white border-l-4 border-[#F05A28]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                Executive Answer: True Ecommerce Replatforming Scope
              </span>
              <p className="text-base md:text-lg text-[#14110F] leading-relaxed font-medium">
                An ecommerce replatforming project involves migrating catalog data, customer history, custom ERP and 3PL integrations, theme frontend architecture, and 1-to-1 SEO redirect maps to a modern commerce engine. Completed in 4 to 12 weeks, replatforming eliminates legacy hosting maintenance, boosts checkout conversion, and saves brands $35,000 to $85,000 annually in server overhead.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE CALCULATOR TOOL */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">Interactive Replatforming Scope Estimator</h2>
              <p className="text-base text-[#46403B] mt-3">
                Select your source platform, target engine, catalog size, and ERP requirements to calculate estimated sprint milestones and annual maintenance savings.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <ReplatformingScopeEstimator source="tools_replatforming_calculator_page" />
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET METRICS */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">Industry Replatforming &amp; Conversion Research</h2>
              <p className="text-base text-[#46403B] mt-3">
                Authoritative data on the impact of legacy infrastructure retirement and modern checkout migration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">35%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Checkout Conversion Lift</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Brands migrating from legacy monolithic checkouts to optimized 1-click accelerated checkout experiences report conversion improvements of up to 35 percent.
                </p>
                <a
                  href="https://baymard.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Baymard Institute &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">58%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Lower Maintenance TCO</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Total cost of ownership drops by an average of 58 percent over 3 years when retiring self-hosted server clusters in favor of managed enterprise commerce platforms.
                </p>
                <a
                  href="https://www.forrester.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Forrester Total Economic Impact &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">99.99%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Peak Flash Sale Uptime</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Modern SaaS cloud architecture handles unlimited concurrent traffic spikes during Black Friday and Cyber Monday without server crashes or capacity throttling.
                </p>
                <a
                  href="https://www.gartner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Gartner Digital Commerce Magic Quadrant &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">Platform Architecture Tradeoffs</h2>
              <p className="text-base text-[#46403B] mt-3">
                Compare infrastructure requirements and developer overhead across modern and legacy commerce platforms.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Architecture Dimension</th>
                    <th>Shopify Plus (Managed Cloud)</th>
                    <th>Legacy Magento (Adobe Commerce)</th>
                    <th>NetSuite SuiteCommerce</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-me">
                    <td className="font-bold">Hosting &amp; Server Maintenance</td>
                    <td className="font-semibold text-[#F05A28]">Fully Managed (Zero server patches)</td>
                    <td>High (Dedicated AWS/Cloud clusters)</td>
                    <td>Proprietary NetSuite Cloud bundle</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Security &amp; PCI Level 1</td>
                    <td className="font-semibold text-[#14110F]">Native Level 1 PCI Compliance</td>
                    <td>Requires quarterly manual patching</td>
                    <td>Native PCI compliance</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Accelerated 1-Click Checkout</td>
                    <td className="font-semibold text-[#F05A28]">Shop Pay (Highest converting in US)</td>
                    <td>Standard multi-step forms</td>
                    <td>Standard NetSuite checkout flow</td>
                  </tr>
                  <tr>
                    <td className="font-bold">B2B Wholesale &amp; Net Terms</td>
                    <td className="font-semibold text-[#14110F]">Native Shopify Plus B2B Catalogs</td>
                    <td>Requires complex custom modules</td>
                    <td>Native ERP connection</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Speed to Market for New Features</td>
                    <td className="font-semibold text-[#F05A28]">Days to weeks via Theme App Extensions</td>
                    <td>Months of custom PHP engineering</td>
                    <td>Slow SuiteScript development cycles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions commerce directors ask about replatforming"
          lead="Key questions on data migration integrity, password policies, SEO redirect equity, and ERP cutover execution."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-card p-8 md:p-12 bg-[#FFF8F5] border border-[#F05A28]/20 text-center max-w-4xl mx-auto">
              <p className="pp-eyebrow">// READY TO PLAN YOUR REPLATFORMING?</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#14110F] mb-4">
                Schedule a 30-Minute Replatforming Scoping Call
              </h2>
              <p className="text-base text-[#46403B] max-w-2xl mx-auto mb-8">
                Speak directly with founder Bhavesh Barot. We will audit your current database size, ERP integrations, and custom app requirements to provide a fixed-price migration proposal with zero downtime guarantees.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#F05A28] text-white font-semibold text-sm hover:bg-[#D8441A] transition-colors shadow-sm"
                >
                  Book Strategy Call via Calendly &rarr;
                </a>
                <ModalCTAButton
                  label="Request Migration Plan"
                  region="us"
                  btnVariant="secondary-light"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
