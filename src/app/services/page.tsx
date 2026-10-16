import type { Metadata } from 'next';
import Link from 'next/link';

import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem } from '@/components/v2/FAQ';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

/* ─────────────────────────────────────────────────────────────────────────────
   /services: the US services hub.

   Rebuilt 2026-10-16 for the buyer the site is now aimed at: an established
   business with a store, an ERP or an inbox that has become the bottleneck,
   looking at a one-time ecommerce or AI agent project. The old hub led with
   "Web Design & Development Services for US Small Businesses", 7-day delivery
   and a city list, on a dark photo hero. It earned 0 clicks in the 90 days to
   14 Oct 2026 (Search Console: brand queries only), so nothing ranking was lost.

   Claims kept to what is confirmed: 500+ businesses, founded 2014, registered
   Shopify Partner, working software on your own data before you sign, fixed
   price in writing, you own the code, 7-day delivery only for sites of five
   pages or fewer, stores "3 to 5 weeks" as on /services/ecommerce-development.
   No FactoryJet prices, no running-cost figures, no team location.

   Schema: WebPage + ItemList (built from SERVICE_GROUPS, the array the
   directory renders) + FAQPage (built from FAQ_ITEMS, the array <FAQ>
   renders). Breadcrumbs come from one array for both the trail and the JSON-LD.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services';
const PAGE_TITLE = 'Ecommerce and AI Agent Development Services | FactoryJet';
const PAGE_DESC =
  'FactoryJet builds online stores, B2B portals, ERP links and AI agents for US businesses. A fixed price in writing, working software on your own data before you sign, and you own the code.';
const PAGE_MODIFIED = '2026-10-16';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    siteName: 'FactoryJet',
    type: 'website',
  },
  other: {
    'geo.region': 'US',
    'geo.placename': 'United States',
  },
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: CANONICAL_URL },
];

/* ── What we build most (hero card). ─────────────────────────────────────── */
const MAIN_JOBS = [
  { title: 'Store rebuild or migration', note: 'Shopify, Shopify Plus, BigCommerce or headless, with products, customers and SEO moved over.', href: '/services/shopify-migration-agency' },
  { title: 'B2B or wholesale portal', note: 'Trade pricing, quick reorder and account terms for buyers who order the same things often.', href: '/b2b-ecommerce' },
  { title: 'Store to ERP link', note: 'Stock, orders and invoices kept in step with QuickBooks, NetSuite or Odoo.', href: '/services/ecommerce-erp-integration' },
  { title: 'AI agent for one job', note: 'Reads purchase orders, invoices, RFQs or calls and drafts the record for your team to approve.', href: '/services/ai-agent-development' },
];

/* ── Project steps. ──────────────────────────────────────────────────────── */
const STEPS = [
  { title: 'A scoping call with the founder', body: 'Bhavesh runs the first call himself. We look at the systems you use, the job you want done and what a ready-made tool already covers.' },
  { title: 'Working software on your own data', body: 'Before you sign, you see a working draft: your store theme with your own products, or an agent run on a sample of your own documents.' },
  { title: 'One fixed price, paid in stages', body: 'You get the scope and one fixed price in writing. Payments are tied to milestones, such as signing, go-live and the finished integration.' },
  { title: 'Launch, with defect cover', body: 'Defects found after launch are fixed inside the build price, for a cover period we agree before work starts.' },
  { title: 'Support only if you want it', body: 'After that, each change is quoted and approved before we do it. There is no monthly minimum.' },
];

/* ── Recent work. Only published case studies. ──────────────────────────── */
const WORK = [
  { tag: 'AI agent · Legal', client: 'Washington Law Group', note: 'An agent that finds qualifying truck accident reports and sends the firm one summary email per case. The code is assigned to the firm.', href: '/case-studies/washington-law-group-accident-detection-agent' },
  { tag: 'B2B commerce · Distribution', client: 'Sow Easy', note: 'WooCommerce ordering connected to Odoo, so trade orders and stock live in one place. In progress.', href: '/case-studies/sow-easy-distributor-portal' },
  { tag: 'B2B commerce · Promotional products', client: 'GPSUK', note: 'Online ordering for trade buyers who reorder the same products again and again.', href: '/case-studies/gpsuk-promotional-products' },
  { tag: 'DTC and B2B commerce', client: 'Belle Maison', note: 'One storefront for retail shoppers and trade buyers, on Commerceflo by FactoryJet.', href: '/case-studies/belle-maison-ecommerce-success' },
];

/* ── Directory. Every service page the old hub linked to, regrouped so the
      $10K+ work comes first. Also feeds the ItemList JSON-LD. ─────────────── */
const SERVICE_GROUPS: { label: string; items: { title: string; href: string }[] }[] = [
  {
    label: 'Ecommerce builds',
    items: [
      { title: 'Ecommerce Development', href: '/services/ecommerce-development' },
      { title: 'Shopify Development', href: '/services/shopify-development' },
      { title: 'Shopify Plus Agency', href: '/services/shopify-plus-agency' },
      { title: 'Shopify Migration', href: '/services/shopify-migration-agency' },
      { title: 'Replatforming', href: '/replatforming' },
      { title: 'Headless Shopify Development', href: '/services/headless-shopify-development' },
      { title: 'B2B Ecommerce', href: '/b2b-ecommerce' },
      { title: 'Shopify Theme Development', href: '/services/shopify-theme-development' },
      { title: 'Shopify Checkout Customization', href: '/services/shopify-checkout-customization' },
      { title: 'Ecommerce Audit', href: '/services/ecommerce-audit' },
    ],
  },
  {
    label: 'Integrations and marketplaces',
    items: [
      { title: 'Ecommerce ERP Integration', href: '/services/ecommerce-erp-integration' },
      { title: 'Shopify QuickBooks Integration', href: '/services/shopify-quickbooks-integration' },
      { title: 'Shopify EDI Integration', href: '/services/shopify-edi-integration' },
      { title: 'WordPress Shopify Integration', href: '/services/wordpress-shopify-integration' },
      { title: 'Faire Wholesale Marketplace', href: '/faire-wholesale-marketplace' },
      { title: 'Wayfair Marketplace', href: '/wayfair-marketplace' },
      { title: 'Ecommerce Marketing', href: '/services/ecommerce-marketing-agency' },
    ],
  },
  {
    label: 'AI agents',
    items: [
      { title: 'AI Agent Development', href: '/services/ai-agent-development' },
      { title: 'Sales Order Automation Agents', href: '/services/sales-order-automation-ai-agents' },
      { title: 'Accounts Payable Automation', href: '/services/accounts-payable-automation' },
      { title: 'Document Intake AI Agents', href: '/services/document-intake-ai-agents' },
      { title: 'AI Inventory Management Agents', href: '/services/ai-inventory-management-agents' },
      { title: 'RFQ and Bidding Agent', href: '/services/ai-agent-development/rfq-bidding-agent' },
      { title: 'AI Quoting Software', href: '/services/ai-quoting-software' },
      { title: 'ERP AI Agents', href: '/services/erp-ai-agents' },
      { title: 'NetSuite AI Agents', href: '/services/netsuite-ai-agents' },
      { title: 'Odoo AI Agents', href: '/services/odoo-ai-agents' },
      { title: 'Shopify AI Agents', href: '/services/shopify-ai-agents' },
      { title: 'Ecommerce AI Agents', href: '/services/ecommerce-ai-agents' },
      { title: 'AI Call Center Agents', href: '/services/ai-call-center-agents' },
      { title: 'AI Marketing Agent', href: '/services/ai-agent-development/ai-marketing-agent' },
      { title: 'AI Automation', href: '/services/ai-automation' },
      { title: 'AI Development', href: '/services/ai-development' },
      { title: 'AI Consulting', href: '/services/ai-consulting' },
    ],
  },
  {
    label: 'AI agents by industry',
    items: [
      { title: 'Manufacturing AI Agents', href: '/services/manufacturing-ai-agents' },
      { title: 'AI Agents for Construction', href: '/services/construction-ai-agents' },
      { title: 'AI Agents for Insurance', href: '/services/insurance-ai-agents' },
      { title: 'Legal AI Agents', href: '/services/legal-ai-agents' },
      { title: 'Property Management AI Agents', href: '/services/property-management-ai-agents' },
      { title: 'Automotive AI Voice Agents', href: '/services/automotive-ai-voice-agents' },
      { title: 'Chemical and Pharmaceutical AI Agents', href: '/services/chemical-pharmaceutical-ai-agents' },
      { title: 'Agriculture Equipment AI Agents', href: '/services/agriculture-equipment-ai-agents' },
    ],
  },
  {
    label: 'Websites and web apps',
    items: [
      { title: 'Custom Web Design', href: '/services/web-design' },
      { title: 'Web Application Development', href: '/services/web-application-development' },
      { title: 'Website Redesign', href: '/services/website-redesign' },
      { title: 'WordPress Development', href: '/services/wordpress-development' },
      { title: 'Webflow Development', href: '/services/webflow-development' },
      { title: 'Website Maintenance', href: '/services/website-maintenance' },
      { title: 'Law Firm Websites', href: '/services/law-firm-website-design' },
      { title: 'Real Estate Websites', href: '/services/real-estate-website-design' },
      { title: 'Medical Website Design', href: '/services/medical-website-design' },
    ],
  },
  {
    label: 'SEO and AI search',
    items: [
      { title: 'AI SEO', href: '/services/ai-seo' },
      { title: 'Technical SEO', href: '/services/technical-seo' },
      { title: 'SEO Consulting', href: '/services/seo-consulting' },
      { title: 'Roofing SEO', href: '/services/roofing-seo' },
    ],
  },
];

/* ── FAQ. One array: rendered by <FAQ> and used for the FAQPage JSON-LD. ── */
const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    question: 'What does FactoryJet build?',
    answer:
      'Two kinds of project make up most of our work. Ecommerce builds: Shopify and Shopify Plus stores, migrations, B2B and wholesale portals, and the links between a store and QuickBooks, NetSuite or Odoo. AI agents: software that does one job inside your systems, such as reading emailed purchase orders or vendor invoices and drafting the record for your team to approve. We also build websites, web apps and SEO programs.',
  },
  {
    question: 'What kind of companies do you work with?',
    answer:
      'Mostly companies that already sell or operate at volume: brands, distributors, manufacturers and service firms whose store, ERP or inbox has become the bottleneck. FactoryJet has served 500+ businesses since 2014. We also build smaller websites. Sites of five pages or fewer are delivered in 7 days; see Custom Web Design.',
  },
  {
    question: 'Do you show us anything before we sign?',
    answer:
      'Yes. For a store or an AI agent, we show you working software built on your own data before you sign. For a store that is a working draft of your theme with your own products. For an agent it is a run on a sample of your own documents, emails or calls.',
  },
  {
    question: 'How is a project priced?',
    answer:
      'After a short scoping call you get the scope and one fixed price in writing. We do not publish a single figure, because the systems involved drive the work. Payments are tied to milestones, such as signing, go-live and the finished integration, so each payment follows work you can see.',
  },
  {
    question: 'Is there a monthly fee after launch?',
    answer:
      'No monthly minimum. Defects found after launch are fixed inside the build price for a cover period we agree before work starts. After that, support is optional: each change is quoted and approved before we do it. AI and hosting can run in your own accounts, at cost, with no markup from us.',
  },
  {
    question: 'Do we own the code?',
    answer:
      'Yes. You own the code and the repository from day one, along with the design files. Your store, ERP and AI accounts stay in your name. You can host it anywhere, change it yourself or hand it to another developer.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Most stores go live in 3 to 5 weeks. A migration, a B2B portal or an ERP link takes longer, because it depends on how many records and systems are involved. An AI agent usually starts with one workflow. You get a dated plan with the fixed price, so the timeline is in writing too.',
  },
  {
    question: 'Which ecommerce platforms do you build on?',
    answer:
      'Shopify and Shopify Plus, BigCommerce, WooCommerce, Adobe Commerce (Magento) and headless storefronts in Next.js. FactoryJet is a registered Shopify Partner. We recommend the platform on the scoping call based on your catalog, your buyers and the systems the store has to talk to.',
  },
  {
    question: 'Which systems can an AI agent work with?',
    answer:
      'The ones you already use: NetSuite, Odoo, QuickBooks, Shopify, Salesforce and HubSpot, shared inboxes, PDFs and scans, and phone systems. The agent reads from those systems and writes back into them, so nobody moves data by hand. Each service page lists the systems we connect for that job.',
  },
  {
    question: 'Will an AI agent act on its own?',
    answer:
      'On most of our builds the agent drafts the record and a person on your team approves it: a sales order, a bill, a quote. You decide which steps are safe to automate fully, and that can change once the agent has a track record on your own data.',
  },
  {
    question: 'Can you move our store without losing search traffic?',
    answer:
      'We map every old URL to its new page with a single-hop 301 redirect, and move titles, descriptions and structured data before launch. The redirect map is part of the scope you sign off, so you can check it page by page.',
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes. We will sign your NDA before the scoping call if you need it. Mutual NDAs are also available.',
  },
  {
    question: 'Do you work with companies outside the US?',
    answer: 'Yes. We also take on projects in the UK and Australia.',
  },
  {
    question: 'How do we start?',
    answer:
      'Use the form on this page or book a call with the founder. Name and email are enough to start. In the next step you can add the project type, the systems it touches, your timeline and a brief or RFP. Bhavesh replies within 24 hours.',
  },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) => g.items);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: PAGE_TITLE,
      description: PAGE_DESC,
      dateModified: PAGE_MODIFIED,
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'ItemList',
      name: 'FactoryJet services',
      numberOfItems: ALL_SERVICES.length,
      itemListElement: ALL_SERVICES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        url: `https://factoryjet.com${s.href}`,
      })),
    },
    { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4 flex-shrink-0">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function USServicesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO (light) */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">SERVICES &middot; UNITED STATES</span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  Online stores, ERP links and AI agents for businesses that run on them.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  FactoryJet designs, builds and supports ecommerce systems and AI agents for US companies: Shopify and
                  B2B stores, the links to QuickBooks, NetSuite or Odoo behind them, and agents that do one job inside
                  your systems, such as reading purchase orders.
                </p>

                <p className="mt-4 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-ink">
                  For a store or an AI agent, we show you working software built on your own data before you sign. The
                  price is fixed and in writing before work starts.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="us_services_hero"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <Arrow />
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-5 font-fj-mono text-xs text-fj-neutral-600">
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Registered Shopify Partner</span>
                  <span>You own the code</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">What we build most</p>
                  <ul className="mt-4 divide-y divide-fj-neutral-200">
                    {MAIN_JOBS.map((job) => (
                      <li key={job.title}>
                        <Link href={job.href} className="group flex items-start justify-between gap-4 py-4">
                          <span>
                            <span className="block font-fj-display text-lg font-semibold text-fj-ink group-hover:text-[#B23E13]">{job.title}</span>
                            <span className="mt-1 block font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{job.note}</span>
                          </span>
                          <span className="mt-1.5 text-fj-ink group-hover:text-[#B23E13]"><Arrow /></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SHORT ANSWER */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Short answer</div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                FactoryJet is an ecommerce and AI agent development company. We build the store, connect it to the
                systems behind it, and add AI agents where your team retypes the same records every day. Every store and agent project
                starts with a working draft on your own data and one fixed price in writing. You own the code, and
                support after launch is optional.
              </p>
            </div>
          </div>
        </section>

        {/* 3. THE TWO KINDS OF PROJECT (7/5) */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">Ecommerce</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Stores for companies that have outgrown their setup.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Most of our store work starts with a problem the current setup cannot solve: stock that does not
                  match the books, trade buyers ordering by email, or a platform that slows every sale. We fix the
                  system, then the storefront.
                </p>
                <ul className="mt-6 grid gap-3">
                  {[
                    { t: 'Shopify and Shopify Plus stores', d: 'Custom themes, checkout changes and headless builds.', href: '/services/shopify-development' },
                    { t: 'Migrations', d: 'From Magento, WooCommerce or BigCommerce, with a 1-to-1 redirect map.', href: '/replatforming' },
                    { t: 'B2B and wholesale portals', d: 'Trade pricing, quick reorder and account terms.', href: '/b2b-ecommerce' },
                    { t: 'Store to ERP links', d: 'QuickBooks, NetSuite, Odoo, EDI and custom systems.', href: '/services/ecommerce-erp-integration' },
                    { t: 'Marketplaces', d: 'Faire, Wayfair, Amazon, Walmart and TikTok Shop, fed from one catalog.', href: '/faire-wholesale-marketplace' },
                  ].map((x) => (
                    <li key={x.t}>
                      <Link href={x.href} className="group flex items-start gap-3 rounded-xl border border-fj-neutral-200 bg-white p-4 hover:border-[#F05A28]/50">
                        <span className="mt-1 text-[#B23E13]"><Arrow /></span>
                        <span>
                          <span className="block font-fj-body text-base font-semibold text-fj-ink">{x.t}</span>
                          <span className="mt-0.5 block font-fj-body text-[15px] text-fj-neutral-600">{x.d}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <p className="fj-eyebrow">AI agents</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Agents that do one job inside your systems.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  An AI agent is software we build to handle one repeated task, the way a trained person would. It reads
                  the email, PDF or call, drafts the record in your system, and a person on your team approves it.
                </p>
                <ul className="mt-6 grid gap-2 font-fj-body text-base">
                  {[
                    { t: 'Sales orders from email, PDF and EDI', href: '/services/sales-order-automation-ai-agents' },
                    { t: 'Vendor invoices and bills', href: '/services/accounts-payable-automation' },
                    { t: 'RFQs and quotes', href: '/services/ai-agent-development/rfq-bidding-agent' },
                    { t: 'Stock checks and purchase orders', href: '/services/ai-inventory-management-agents' },
                    { t: 'Phone calls and bookings', href: '/services/ai-call-center-agents' },
                    { t: 'Agents inside NetSuite, Odoo or Shopify', href: '/services/erp-ai-agents' },
                  ].map((x) => (
                    <li key={x.t}>
                      <Link href={x.href} className="group flex min-h-11 items-center gap-3 border-b border-fj-neutral-200 py-2 text-fj-ink hover:text-[#B23E13]">
                        <span className="text-[#B23E13]"><Arrow /></span>
                        {x.t}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/services/ai-agent-development" className="mt-5 inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:text-[#B23E13]">
                  How we build AI agents
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HOW A PROJECT RUNS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How a project runs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  You see it working before you pay for it.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Five steps, the same for a store and an agent. Most stores go live in 3 to 5 weeks. Migrations, ERP
                  links and agents get a dated plan with the fixed price.
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 sm:p-6">
                    <span className="font-fj-mono text-sm font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{step.title}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 5. WHAT YOU OWN */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">What you own</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  The code, the accounts and the data stay yours.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Nothing we build holds you to us. If you want another developer to take it over next year, they start
                  from the same repository we used.
                </p>
              </div>
              <ul className="grid gap-3 lg:col-span-7">
                {[
                  { t: 'Code and repository', d: 'Yours from day one, along with the design files.' },
                  { t: 'Accounts in your name', d: 'Your store, ERP, AI and hosting accounts. AI and hosting can run there at cost, with no markup from us.' },
                  { t: 'No monthly minimum', d: 'Support after launch is optional. Each change is quoted and approved before we do it.' },
                  { t: 'Defect cover in the build price', d: 'Defects found after launch are fixed for a cover period agreed before work starts.' },
                ].map((x) => (
                  <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-white p-5">
                    <p className="font-fj-display text-lg font-semibold text-fj-ink">{x.t}</p>
                    <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. MID-PAGE CTA */}
        <MidPageCTA
          headline="Send us the job and the systems it touches."
          sub="We reply with what we would build first and whether a ready-made tool already does it. If there is work for us, you get a working draft on your own data and a fixed price in writing."
          label="Talk to the founder"
          note="Bhavesh replies within 24 hours."
        />

        {/* 7. RECENT WORK */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Recent work</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Agents and B2B stores we have built, with the details in each case study.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {WORK.map((w) => (
                <li key={w.client}>
                  <Link href={w.href} className="group flex h-full flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 hover:border-[#F05A28]/50">
                    <span className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">{w.tag}</span>
                    <span className="mt-3 font-fj-display text-xl font-semibold text-fj-ink">{w.client}</span>
                    <span className="mt-2 flex-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{w.note}</span>
                    <span className="mt-4 inline-flex items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink group-hover:text-[#B23E13]">
                      Read the case study
                      <Arrow />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/case-studies" className="mt-6 inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:text-[#B23E13]">
              All case studies
              <Arrow />
            </Link>
          </div>
        </section>

        {/* 8. ALL SERVICES */}
        <section id="services" className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">All services</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">Every service, by the job it does.</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
              {SERVICE_GROUPS.map((g) => (
                <div key={g.label}>
                  <h3 className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">{g.label}</h3>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2">
                    {g.items.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="flex min-h-11 items-center border-b border-fj-neutral-200 py-2 pr-3 font-fj-body text-[15px] text-fj-ink hover:text-[#B23E13]">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <FAQ
          eyebrow="Services FAQ"
          headline="What buyers ask before a store or agent project."
          lead="Short answers on how projects start, how they are priced and what you own at the end."
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 10. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Start here"
          headline="Tell us the job. We will show you it working."
          sub="Send the systems you use and the work you want done. We come back with a working draft on your own data and one fixed price in writing."
          primaryCta={{ label: 'See a demo on my data', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
