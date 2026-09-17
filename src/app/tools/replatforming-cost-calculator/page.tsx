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
const PAGE_MODIFIED = '2026-09-17';

export const metadata: Metadata = {
  title: 'Ecommerce Replatforming Cost Calculator | FactoryJet',
  description:
    'Estimate replatforming scope for Shopify Plus. Model SKU catalog volume, ERP connectors and cutover timelines, then compare published cost ranges.',
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
  alternates: {
    canonical: 'https://factoryjet.com/tools/replatforming-cost-calculator',
    languages: {
      'en-US': 'https://factoryjet.com/tools/replatforming-cost-calculator',
      'x-default': 'https://factoryjet.com/tools/replatforming-cost-calculator',
    },
  },
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
      'Shopify says Shopify Plus migrations average three to four months from kickoff to go-live, and a full replatform usually takes 3 to 6 months. Published agency plans vary with scope: 1Digital plans 12 weeks for a mid-market Magento 2 store and 16 to 20 weeks for larger, multi-store or B2B stores. Timelines grow with the number of systems that must stay in sync during cutover, and ERP integration testing is often the longest phase.',
  },
  {
    category: 'scope',
    question: 'Why do brands migrate from Magento and Salesforce to Shopify Plus?',
    answer:
      'Brands migrate to stop managing security patches, server hosting, dependency upgrades and brittle extensions, and to move onto a hosted platform where Shopify reports 99.99 percent uptime on average during the biggest sales events of the year, with Shop Pay accelerated checkout built in. Many are also reacting to a specific pain point, such as an outage during a peak sale or an upgrade deadline on their current version.',
  },
  {
    category: 'scope',
    question: 'What ongoing maintenance cost savings occur after replatforming?',
    answer:
      'It depends on what you pay today. Moving from self-hosted servers to a hosted platform such as Shopify Plus or BigCommerce removes server hosting, security patching and dependency upgrades from your budget, but adds a platform fee and app subscriptions. Pull 12 months of hosting invoices, security retainers and developer time spent on upgrades, then compare that total with the new platform fees before you count any savings.',
  },
  {
    category: 'data',
    question: 'How are customer accounts and passwords migrated safely?',
    answer:
      "Legacy platforms store customer passwords as one-way hashes (such as bcrypt or Argon2), so they cannot be decrypted, and Shopify says passwords can't be migrated with a CSV import. Most migrations send account activation emails so customers set a new password, or use new customer accounts with a one-time sign-in code. Shopify Multipass needs Plus and legacy customer accounts, and it only signs in customers who are already logged in on your own external site.",
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
    question: 'How do you validate that no records are lost during migration?',
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
      'Legacy deep category paths (such as /category/subcategory/product.html) get single-hop 301 redirects to their matching /products/ or /collections/ paths, which Google uses as a signal that the new URL should be the canonical one. Shopify stores can hold up to 100,000 redirects, or 20 million on Plus. We build the full redirect map before cutover, not after, so every changed URL has its permanent redirect in place at launch.',
  },
  {
    category: 'seo',
    question: 'How quickly should search engine rankings stabilize after launch?',
    answer:
      "Google says rankings can fluctuate during a site move and that a medium-sized site can take a few weeks or more for Google to show the new URLs. Shopify's Magento migration guide calls a 5% to 10% dip in the first week common even with correct redirects, and says a sustained drop of more than 20% needs immediate investigation. We check Search Console daily through that window and fix redirect gaps as they appear.",
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
    question: 'What is delta migration and why does it matter at launch?',
    answer:
      'Delta migration is the process of migrating all new customer accounts, orders, and inventory adjustments generated on the legacy store during the final staging build window immediately prior to DNS cutover, so no recent records are left behind. Without it, any order placed on the old store during the final build hours would be permanently invisible to the new platform, a silent data loss most brands only discover during month-end reconciliation.',
  },
  {
    category: 'erp',
    question: 'How does FactoryJet keep downtime low during the domain DNS switch?',
    answer:
      'We lower DNS TTL values 24 to 48 hours in advance, as Shopify recommends, stage every redirect before the switch, run a final delta import of new orders and customers, then point the domain and place test orders. We schedule the cutover for your lowest-traffic hours, keep the legacy store on standby, and agree in writing on what triggers a rollback before launch day.',
  },
  {
    category: 'erp',
    question: 'How do we schedule a replatforming architecture review with founder Bhavesh Barot?',
    answer:
      'You can schedule a direct 30-minute discovery session. We review your existing database schemas and ERP connectors and list the decisions that drive your timeline and cost. After the call we send a written scope, with milestones and a quote tied to your actual catalog and integration complexity, not a generic range pulled from an average project.',
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
      'No. The savings figure is modeled from typical hosting, patching, and contractor costs tied to your current source platform, with a modest upward adjustment for enterprise-scale catalogs. It is meant to size the opportunity, not replace an audit of your actual hosting invoices, security retainers, and DevOps contractor spend, which we review directly during a scoping call before quoting a migration.',
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

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Replatforming Cost Calculator', item: 'https://factoryjet.com/tools/replatforming-cost-calculator' },
  ],
};

export default function ReplatformingCostCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBAPP_SCHEMA) }} />
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
                Estimate migration timelines, technical complexity, and DevOps savings. Model catalog volume, custom ERP connectors, SEO redirects, and cutover schedules.
              </p>
              <HeroInlineForm
                source="tools_replatforming_cost_calculator"
                region="us"
                submitLabel="Request Migration Scope Audit"
              />
            </div>

            <div className="pp-hero-card">
              <div className="flex items-center justify-between border-b border-[#E7DED6] pb-3 mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B23E13]">
                  Published Benchmarks
                </span>
                <span className="text-xs text-[#6E635A]">US, checked Sep 17, 2026</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4 py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Average Shopify Plus migration:</span>
                  <span className="font-semibold text-[#14110F] text-right">3 to 4 months</span>
                </div>
                <div className="flex justify-between gap-4 py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Magento 2 to Shopify Plus project:</span>
                  <span className="font-semibold text-[#14110F] text-right">$20,000 to $150,000+</span>
                </div>
                <div className="flex justify-between gap-4 py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Shopify Plus plan fee:</span>
                  <span className="font-semibold text-[#14110F] text-right">$2,300/mo on a 3-year term</span>
                </div>
                <div className="flex justify-between gap-4 py-1">
                  <span className="text-[#46403B]">URL redirects on Plus:</span>
                  <span className="font-semibold text-[#14110F] text-right">Up to 20 million</span>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[#6E635A]">
                Sources:{' '}
                <a href="https://www.shopify.com/enterprise/blog/shopify-plus-data-migration-service" target="_blank" rel="noopener noreferrer" className="text-[#B23E13] underline">Shopify</a>,{' '}
                <a href="https://litextension.com/blog/shopify-plus-migration-cost/" target="_blank" rel="noopener noreferrer" className="text-[#B23E13] underline">LitExtension</a>,{' '}
                <a href="https://www.shopify.com/plus/pricing" target="_blank" rel="noopener noreferrer" className="text-[#B23E13] underline">Shopify Plus pricing</a>,{' '}
                <a href="https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect" target="_blank" rel="noopener noreferrer" className="text-[#B23E13] underline">Shopify URL redirects</a>.
              </p>
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
                An ecommerce replatforming project moves catalog data, customer history, ERP and 3PL integrations, the storefront theme and a 1-to-1 SEO redirect map to a new commerce platform.{' '}
                <a href="https://www.shopify.com/enterprise/blog/shopify-plus-data-migration-service" target="_blank" rel="noopener noreferrer" className="text-[#B23E13] underline">Shopify says</a>{' '}
                the data migration takes weeks, a full replatform usually takes 3 to 6 months, and Shopify Plus migrations average three to four months. Moving to a hosted platform also takes server hosting and patching off your team.
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
                Select your source platform, target engine, catalog size, and ERP requirements to calculate estimated sprint milestones and annual maintenance savings. If you are moving off Magento, compare your estimate with the published cost ranges and timelines in our{' '}
                <Link href="/replatforming/magento-to-shopify#migration-cost" className="text-[#B23E13] underline">Magento to Shopify Plus migration guide</Link>.
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
                Published research on checkout usability, platform cost and uptime, with who ran or funded each study.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none">
              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">35%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Checkout Conversion Lift</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Baymard Institute&apos;s checkout usability testing finds the average large ecommerce site can gain a 35 percent increase in conversion rate through better checkout design. A replatform is a natural time to fix that friction, but the gain comes from the checkout design, not from the move itself.
                </p>
                <a
                  href="https://baymard.com/research/checkout-usability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Baymard Institute Checkout Usability Research &rarr;
                </a>
              </li>

              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">33%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Better TCO in Shopify-Funded Research</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Shopify says research it commissioned from an independent consulting firm found Shopify has 33 percent better total cost of ownership on average than competitors such as Adobe Commerce, Salesforce Commerce Cloud and BigCommerce. It is vendor-funded research, so check it against your own quotes.
                </p>
                <a
                  href="https://www.shopify.com/compare/tco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Shopify Total Cost of Ownership Research &rarr;
                </a>
              </li>

              <li className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">99.99%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Average Uptime at Peak Sales</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Shopify reports 99.99 percent uptime on average across its platform during the biggest sales events of the year. Its help center says the Plus plan might include a 99.99 percent uptime SLA, so confirm the uptime terms in your own contract.
                </p>
                <a
                  href="https://www.shopify.com/plus/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#B23E13] font-mono hover:underline"
                >
                  Source: Shopify Plus pricing &rarr;
                </a>
              </li>
            </ul>
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
                    <td className="font-semibold text-[#B23E13]">Hosted by Shopify (no servers to patch)</td>
                    <td>Self-hosted or Adobe Commerce on Cloud; merchant keeps PHP and services on supported versions</td>
                    <td>Hosted by Oracle NetSuite</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Security &amp; PCI</td>
                    <td className="font-semibold text-[#14110F]">Level 1 PCI DSS compliant by default</td>
                    <td>Merchant applies Adobe security patches</td>
                    <td>Confirm PCI scope with NetSuite</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Accelerated Checkout</td>
                    <td className="font-semibold text-[#B23E13]">Shop Pay built in</td>
                    <td>Multi-step checkout, extended with modules</td>
                    <td>SuiteCommerce checkout flow</td>
                  </tr>
                  <tr>
                    <td className="font-bold">B2B Wholesale &amp; Net Terms</td>
                    <td className="font-semibold text-[#14110F]">Native Shopify B2B (unlimited catalogs on Plus)</td>
                    <td>Adobe Commerce B2B extension (not in Magento Open Source)</td>
                    <td>Native ERP connection</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">How New Features Get Built</td>
                    <td className="font-semibold text-[#B23E13]">Apps, theme app extensions and Shopify Functions</td>
                    <td>Custom PHP modules and extensions</td>
                    <td>SuiteScript customization</td>
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
                Speak directly with founder Bhavesh Barot. We will audit your current database size, ERP integrations, and custom app requirements, then send a written migration proposal covering scope, timeline and risks.
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
