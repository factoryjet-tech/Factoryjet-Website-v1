import React from 'react';
import type { BlogPost } from '../data.types';

/*
 * Written 2026-11-16. Every dollar figure below was read that day on the page linked next to it.
 * No FactoryJet prices appear on purpose: only published market ranges with a named source.
 * Shopify App Store listings showed prices as local-currency estimates at a stated USD rate; the
 * USD figures for Celigo and eShopSync are our conversion at that rate and are labelled "about".
 * Figures we could only see in a summary (not on the page text itself) were left out.
 * NetSuite, SAP Business One and Acumatica publish no list price; the table says so instead of
 * guessing. Odoo's pricing page showed a local currency to us, so no Odoo figure is quoted.
 */

const SRC_EIGHTX = 'https://eightx.co/blog/connect-shopify-to-netsuite-guide';
const SRC_FOLIO3 = 'https://netsuite.folio3.com/blog/how-much-does-netsuite-erp-integration-cost/';
const SRC_ONECART = 'https://www.getonecart.com/sap-shopify-integration/';
const SRC_CELIGO_APP = 'https://apps.shopify.com/celigo-netsuite-smartconnector';
const SRC_ESHOPSYNC = 'https://apps.shopify.com/sap-business-one-integration';
const SRC_APPSE = 'https://www.appseconnect.com/pricing';
const SRC_BC_PRICING = 'https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing';
const SRC_BC_CONNECTOR = 'https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/get-started';
const SRC_ERPBLOG = 'https://erpsoftwareblog.com/2026/09/shopify-business-central-integration/';
const SRC_ACUMATICA = 'https://www.acumatica.com/acumatica-pricing/';
const SRC_ODOO = 'https://www.odoo.com/pricing';
const SRC_QB = 'https://quickbooks.intuit.com/desktop/enterprise/pricing/';
const SRC_WEBGILITY = 'https://www.webgility.com/pricing';
const SRC_JITTERBIT = 'https://www.jitterbit.com/pricing/';

const LINK_CLASS = 'text-[#B23E13] underline';
const EXT = { target: '_blank', rel: 'noopener noreferrer', className: LINK_CLASS } as const;

export const post: BlogPost = {
  id: '849',
  slug: 'shopify-erp-integration-cost-2026',
  title: 'Shopify ERP Integration Cost in 2026: NetSuite, SAP Business One, Business Central and More',
  excerpt:
    'Connecting Shopify to an ERP costs a few thousand dollars a year for a pre-built app, $15,000 to $80,000 up front plus a monthly fee for an iPaaS platform such as Celigo or Boomi, and $10,000 to $150,000 for custom middleware. This guide splits setup, yearly licence and support costs for NetSuite, SAP Business One, Business Central, Acumatica, Odoo and QuickBooks Enterprise, with a named source for every number.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'November 16, 2026',
  dateModified: 'November 16, 2026',
  readTime: '17 min read',
  imageUrl: '/og-default.png',
  imageAlt: 'Shopify ERP integration cost guide for 2026',
  meta: {
    title: 'Shopify ERP Integration Cost 2026: NetSuite, SAP B1, BC',
    description:
      'What it costs to connect Shopify to NetSuite, SAP Business One, Business Central, Acumatica, Odoo or QuickBooks: app, iPaaS and custom ranges, each sourced.',
  },
  keyTakeaways: [
    'Pre-built connector apps cost about $199 to $600 a month, according to Eightx, or $100 to $500 a month for SAP Business One connectors, according to OneCart. That is about $1,200 to $7,200 a year before setup.',
    'iPaaS platforms cost more each month. Eightx puts Celigo at $800 to $1,800 a month plus $15,000 to $50,000 to implement, and Boomi at $1,500 to $3,000+ a month.',
    'Custom middleware has the highest upfront cost: $10,000 to $50,000+ for a first build according to OneCart, and $80,000 to $150,000 for custom NetSuite SuiteScript according to Eightx.',
    'NetSuite, SAP Business One and Acumatica publish no list price for the ERP itself. Microsoft lists Business Central at $80 or $110 per user per month, paid yearly, and its Shopify Connector comes preinstalled for new sign-ups.',
    'B2B price lists, several warehouses, kits, multiple currencies, custom ERP records and old data are what push a quote up. Eightx adds $15,000 to $25,000 and 4 to 6 weeks for five or more B2B price lists.',
    'Hidden costs can add 20 to 40 percent to a first quote, according to a September 2026 ERP Software Blog article. Payout reconciliation, setup fees and internal staff time are the usual gaps.',
    'You can get a fixed quote only after the field map, the system that owns each record and the error-handling rules are written down.',
  ],
  faqs: [
    {
      q: 'How much does it cost to integrate Shopify with an ERP?',
      a: 'It depends on the approach. Pre-built connector apps run about $199 to $600 a month (Eightx). iPaaS platforms such as Celigo cost $800 to $1,800 a month plus $15,000 to $50,000 to implement (Eightx). Custom middleware costs $10,000 to $50,000+ to build for SAP Business One (OneCart) and $80,000 to $150,000 for custom NetSuite SuiteScript (Eightx). These are published market ranges, not quotes.',
    },
    {
      q: 'How much does a Shopify NetSuite integration cost?',
      a: "Eightx's June 2026 guide puts a mid-market Shopify Plus to NetSuite build on Celigo at $800 to $1,800 a month plus $15,000 to $50,000 to implement, and $50,000 to $75,000 all-in for the first year at $25 million in sales. App-store connectors run $199 to $600 a month. Custom SuiteScript runs $80,000 to $150,000 to build. Eightx calls these planning ranges, not survey data.",
    },
    {
      q: 'How much does a Shopify SAP Business One integration cost?',
      a: "OneCart's April 2026 guide lists $100 to $500 a month for typical SAP connectors, $500 to $2,000+ a month for enterprise iPaaS, and $10,000 to $50,000+ for a custom build. APPSeCONNECT lists plans from $99 a month plus a one-time setup fee it does not publish. One Shopify App Store app costs about $99 a month but only syncs products and categories from SAP to the store.",
    },
    {
      q: 'Does Business Central have a free Shopify connector?',
      a: "Microsoft's documentation says its Shopify Connector app is preinstalled for all new Business Central sign-ups and trials. A September 2026 ERP Software Blog article, written by a Business Central partner, says it comes with any Business Central license at no extra software cost. You still pay for the Business Central licence, and someone still has to set it up and test it.",
    },
    {
      q: 'How much does Microsoft Dynamics 365 Business Central cost per user?',
      a: "Microsoft's US pricing page lists Business Central Essentials at $80 per user per month and Premium at $110 per user per month, both paid yearly, and Team Members at $8 per user per month. Microsoft notes that the prices are for information only. Ten Essentials users come to $9,600 a year at that list price.",
    },
    {
      q: 'What does Celigo cost for Shopify and NetSuite?',
      a: "Celigo's Shopify App Store listing showed two yearly plans when we checked on November 16, 2026: a Starting Package with 2 endpoints and 10 flows, and a Standard Edition with 3 endpoints and 20 flows. At the exchange rate the listing gave, those came to about $7,800 and $18,900 a year. The listing says Celigo may bill extra charges outside your Shopify invoice. Implementation is separate.",
    },
    {
      q: 'What is the cheapest way to connect Shopify to an ERP?',
      a: "A pre-built app from the Shopify App Store or the ERP's own connector costs the least to start. Business Central's connector is preinstalled for new sign-ups. App-store connectors for other ERPs run about $99 to $600 a month across the sources in this guide. Cheap apps often sync fewer records, so check which records each one moves and in which direction before you buy.",
    },
    {
      q: 'Is iPaaS or custom middleware cheaper over three years?',
      a: "In Eightx's 36-month model for a $25 million Shopify brand on NetSuite, Celigo totals $181,800, Boomi with an integrator $260,000, Workato with an integrator $288,000 and custom SuiteScript $273,000, each including internal staff time. An app-store connector totals $123,000. Your numbers will differ, but the model shows custom code is not cheaper just because it has no subscription.",
    },
    {
      q: 'How long does a Shopify ERP integration take?',
      a: 'A pre-built app can be live in days if your data is clean and your process matches what the app does. iPaaS and custom builds take weeks to months because they need a field map, testing and a cutover plan. Eightx adds 4 to 6 weeks for five or more B2B price lists or three or more sales channels. Ask for a written timeline with each phase dated.',
    },
    {
      q: 'What makes a Shopify ERP integration more expensive?',
      a: 'Order volume, B2B price lists by customer, several warehouses, kits and assemblies, multiple currencies, custom ERP records and moving old orders all add work. Each one adds mapping rules and test cases. Eightx adds $15,000 to $25,000 for five or more B2B price lists or three or more sales channels on a NetSuite build.',
    },
    {
      q: 'What hidden costs come with a Shopify ERP integration?',
      a: 'Setup fees that vendors do not publish, charges billed outside your Shopify invoice, extra fees when order volume crosses a tier, internal staff time to watch errors, a test (sandbox) ERP environment, and payout reconciliation. A September 2026 ERP Software Blog article says hidden costs can add 20 to 40 percent to a first Shopify ERP quote.',
    },
    {
      q: 'Do I need Shopify Plus to integrate with an ERP?',
      a: "No. ERP connectors work on standard Shopify plans. Shopify Plus lists up to 10 times the API limits of standard plans on select APIs, which matters when an ERP syncs thousands of orders, products or stock levels a day. Our guide to the true cost of Shopify Plus covers when that upgrade pays for itself.",
    },
    {
      q: 'How much does a Shopify QuickBooks Enterprise integration cost?',
      a: "Webgility, which Intuit's own QuickBooks Enterprise page links to for ecommerce, lists an Advanced Inventory Sync plan at $199 a month billed yearly for 1,000 orders, and says it works with the QuickBooks Enterprise advanced inventory add-on. It lists historical data migration at $200 one-time and extra orders at $10 a month per 500. Intuit sells QuickBooks Enterprise itself as a subscription.",
    },
    {
      q: 'How much does an Acumatica Shopify integration cost?',
      a: "Acumatica does not publish a price for its ERP. Its pricing page says it does not charge per user and builds each price from three factors in a custom pricing review. We found no published price for an Acumatica Shopify connector, so use the general ranges in this guide as a starting point and ask your Acumatica partner for the connector cost in writing.",
    },
    {
      q: 'How much does an Odoo Shopify integration cost?',
      a: "Odoo publishes per-user prices on its pricing page, but the page showed us a local currency rather than US dollars, so check it from your own country. Odoo says implementation is not included in its plans. For the Shopify link itself, the app-store connector range of about $199 to $600 a month from Eightx is a fair starting point until you get a quote.",
    },
    {
      q: 'What does ongoing support for a Shopify ERP integration cost?',
      a: "Few vendors publish a support price. Eightx's NetSuite model budgets about half of one staff member's time after go-live, costed at $30,000 a year, or three quarters of a person for custom builds. Ask any partner what support covers: error alerts, fixes after Shopify or ERP updates, new fields and response times.",
    },
    {
      q: 'Can I integrate Shopify with my ERP myself?',
      a: 'With a pre-built app and simple needs, yes. You install the app, map products, customers and orders, and test with real orders. Once you have B2B pricing, several warehouses, kits or custom ERP records, most teams bring in a partner because the mapping rules and error handling take more time than the app setup.',
    },
    {
      q: 'Should orders flow from Shopify to the ERP in real time?',
      a: 'Usually orders move from Shopify to the ERP within minutes, and stock moves back on a schedule or when it changes. Real-time sync of everything costs more and can hit API limits at high order volumes. Decide per record how fresh the data needs to be. Stock for fast sellers needs to be fresh; product descriptions do not.',
    },
    {
      q: 'Which system should own products, prices and stock?',
      a: 'Most ERP links make the ERP the owner of SKUs, cost, stock and B2B prices, and make Shopify the owner of orders, customer accounts and storefront content. Write down one owner for every record before anyone builds anything. Two systems that can both change the same field are the most common cause of sync errors.',
    },
    {
      q: 'Why do Shopify ERP integrations fail?',
      a: 'The usual causes are SKUs that do not match between systems, tax and discount lines that the ERP cannot read, refunds and partial refunds with no mapping, duplicate orders after a retry, stock updates that arrive out of order, and error alerts that nobody watches. Most of these show up only when you test with real past orders.',
    },
    {
      q: 'How do I get a fixed price quote for a Shopify ERP integration?',
      a: 'Give the partner your ERP and edition, monthly order count, the records you need to sync and in which direction, your B2B price list count, warehouses, currencies, any custom ERP records and how much history to move. Ask for a field map, the error rules and the test plan in writing, with a fixed price for each phase.',
    },
    {
      q: 'Is Jitterbit or Boomi pricing published?',
      a: "Jitterbit's pricing page shows no prices, says all products need an annual contract and offers custom pricing. Eightx's June 2026 guide puts Boomi at $1,500 to $3,000+ a month and Workato at $2,000 to $4,000+ a month for a Shopify to NetSuite setup. Ask each vendor for a quote at your order volume and flow count.",
    },
    {
      q: 'Does FactoryJet publish prices for ERP integration?',
      a: 'No. Every number in this guide comes from the named vendor or publisher linked next to it. FactoryJet scopes each Shopify ERP project from your field map and order volume and sends a written scope with a fixed price for each phase before any work starts.',
    },
  ],
  content: (
    <>
      <p className="text-lg leading-relaxed mb-6 text-gray-800">
        <strong>Short answer:</strong> connecting Shopify to an ERP like NetSuite or SAP Business One costs a few thousand dollars a year for a <strong>pre-built app</strong>, <strong>$15,000 to $80,000 up front plus $500 to $4,000 a month</strong> for an <strong>iPaaS platform</strong> such as Celigo, Jitterbit or Boomi, and <strong>$10,000 to $150,000</strong> to build <strong>custom middleware</strong>. App-store connectors run $199 to $600 a month and Celigo builds cost $15,000 to $50,000 to implement (<a href={SRC_EIGHTX} {...EXT}>Eightx</a>). Enterprise iPaaS runs $500 to $2,000+ a month and a custom SAP Business One build $10,000 to $50,000+ (<a href={SRC_ONECART} {...EXT}>OneCart</a>). Custom NetSuite SuiteScript runs $80,000 to $150,000 (<a href={SRC_EIGHTX} {...EXT}>Eightx</a>).
      </p>

      <p className="text-base leading-relaxed mb-6 text-gray-700">
        These are published market ranges, not FactoryJet prices. We read every page linked in this guide on November 16, 2026. Where a vendor publishes nothing, we say so instead of guessing. If you are still choosing a platform, our <a href="/blog/the-true-cost-of-shopify-plus-2026" className={LINK_CLASS}>Shopify Plus cost guide</a> and <a href="/blog/shopify-plus-migration-cost-2026" className={LINK_CLASS}>Shopify Plus migration cost guide</a> cover the store side.
      </p>

      <div className="not-prose my-8 rounded-2xl border border-[#E5DFD7] bg-[#FAFAF7] p-5 md:p-6">
        <p className="text-base text-slate-800 leading-relaxed mb-4">
          <strong>Planning a Shopify ERP link?</strong> Send us your ERP, monthly order count and the
          records you need to sync. We map the fields, name the system that owns each record and send a
          written scope with a fixed price for each phase before any work starts.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/services/ecommerce-erp-integration"
            className="inline-flex items-center rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white hover:bg-[#8F3210]"
          >
            See ecommerce ERP integration
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50"
          >
            Ask for a written scope
          </a>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
        <h2 className="text-lg font-bold mb-3 text-gray-900">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-800">
          <li><a href="#by-approach" className={LINK_CLASS}>Cost by approach: app, iPaaS or custom</a></li>
          <li><a href="#by-erp" className={LINK_CLASS}>Cost by ERP: setup, yearly licence and support</a></li>
          <li><a href="#three-year" className={LINK_CLASS}>What three years cost in one published model</a></li>
          <li><a href="#cost-drivers" className={LINK_CLASS}>What pushes the price up</a></li>
          <li><a href="#hidden-costs" className={LINK_CLASS}>Hidden costs</a></li>
          <li><a href="#failure-points" className={LINK_CLASS}>Where integrations break</a></li>
          <li><a href="#fixed-quote" className={LINK_CLASS}>How to get a fixed quote</a></li>
          <li><a href="#sources" className={LINK_CLASS}>Sources and how we checked them</a></li>
        </ul>
      </div>

      <h2 id="by-approach" className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        1. Cost by Approach: App, iPaaS or Custom
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        There are three ways to connect Shopify to an ERP. A <strong>pre-built app</strong> is a connector you install from the Shopify App Store or the ERP maker. An <strong>iPaaS</strong> (integration platform as a service) such as Celigo, Boomi, Jitterbit or Workato runs the sync on its own servers and lets you change the rules. <strong>Custom middleware</strong> is code written for your business that you own and maintain.
      </p>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 border text-left">Approach</th>
              <th className="p-3.5 border text-left">One-time setup</th>
              <th className="p-3.5 border text-left">Subscription</th>
              <th className="p-3.5 border text-left">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">Pre-built app</td>
              <td className="border p-3 text-gray-700">$15,000 to $30,000 quoted for app-store connectors on NetSuite</td>
              <td className="border p-3 text-gray-700">$199 to $600 a month ($2,388 to $7,200 a year)</td>
              <td className="border p-3 text-gray-700"><a href={SRC_EIGHTX} {...EXT}>Eightx, June 2026</a></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">Pre-built app (SAP Business One)</td>
              <td className="border p-3 text-gray-700">Not stated</td>
              <td className="border p-3 text-gray-700">$100 to $500 a month typical ($1,200 to $6,000 a year)</td>
              <td className="border p-3 text-gray-700"><a href={SRC_ONECART} {...EXT}>OneCart, April 2026</a></td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">iPaaS: Celigo</td>
              <td className="border p-3 text-gray-700">$15,000 to $50,000 implementation</td>
              <td className="border p-3 text-gray-700">$800 to $1,800 a month ($9,600 to $21,600 a year)</td>
              <td className="border p-3 text-gray-700"><a href={SRC_EIGHTX} {...EXT}>Eightx, June 2026</a></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">iPaaS with a systems integrator (Boomi, Workato)</td>
              <td className="border p-3 text-gray-700">$40,000 to $80,000</td>
              <td className="border p-3 text-gray-700">Boomi $1,500 to $3,000+ a month; Workato $2,000 to $4,000+ a month</td>
              <td className="border p-3 text-gray-700"><a href={SRC_EIGHTX} {...EXT}>Eightx, June 2026</a></td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">iPaaS (enterprise, general)</td>
              <td className="border p-3 text-gray-700">Setup fees on top</td>
              <td className="border p-3 text-gray-700">$500 to $2,000+ a month</td>
              <td className="border p-3 text-gray-700"><a href={SRC_ONECART} {...EXT}>OneCart</a>; <a href={SRC_ERPBLOG} {...EXT}>ERP Software Blog</a></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">Custom middleware (SAP Business One)</td>
              <td className="border p-3 text-gray-700">$10,000 to $50,000+ first build</td>
              <td className="border p-3 text-gray-700">Hosting and upkeep you pay for</td>
              <td className="border p-3 text-gray-700"><a href={SRC_ONECART} {...EXT}>OneCart, April 2026</a></td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">Custom middleware (NetSuite SuiteScript)</td>
              <td className="border p-3 text-gray-700">$80,000 to $150,000 to build</td>
              <td className="border p-3 text-gray-700">Hosting and upkeep you pay for</td>
              <td className="border p-3 text-gray-700"><a href={SRC_EIGHTX} {...EXT}>Eightx, June 2026</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-sm text-gray-600 leading-relaxed">
        Yearly figures are the monthly range times 12. For NetSuite in general, Folio3 puts setup at $2,000 to $25,000+ depending on complexity, and connector subscriptions at around $400 to $800 per connector per month for most providers (<a href={SRC_FOLIO3} {...EXT}>Folio3, October 2025</a>).
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        <strong>How to read this:</strong> an app is cheapest when your process matches what the app does. An iPaaS costs more each month but lets you add rules for B2B pricing, warehouses or extra sales channels without new code. Custom middleware has no platform fee, but you pay to build it and you own every fix after Shopify or your ERP changes an API.
      </p>

      <h2 id="by-erp" className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        2. Cost by ERP: Setup, Yearly Licence and Support
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The ERP you run changes two things: whether a connector already exists, and what you pay for the ERP itself. This table splits the three costs buyers ask about. &quot;Not published&quot; means we looked on the vendor&apos;s own pricing page and found no number.
      </p>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 border text-left">ERP</th>
              <th className="p-3.5 border text-left">One-time setup</th>
              <th className="p-3.5 border text-left">Yearly licence (connector and ERP)</th>
              <th className="p-3.5 border text-left">Ongoing support</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">Oracle NetSuite</td>
              <td className="border p-3 text-gray-700">$15,000 to $50,000 on Celigo; $80,000 to $150,000 custom (<a href={SRC_EIGHTX} {...EXT}>Eightx</a>)</td>
              <td className="border p-3 text-gray-700">Celigo app: about $7,800 or $18,900 a year (<a href={SRC_CELIGO_APP} {...EXT}>Shopify App Store</a>). ERP licence: no public list price.</td>
              <td className="border p-3 text-gray-700">About half a staff member after go-live, costed at $30,000 a year (<a href={SRC_EIGHTX} {...EXT}>Eightx</a>)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">SAP Business One</td>
              <td className="border p-3 text-gray-700">$10,000 to $50,000+ custom (<a href={SRC_ONECART} {...EXT}>OneCart</a>); APPSeCONNECT charges a setup fee it does not publish (<a href={SRC_APPSE} {...EXT}>APPSeCONNECT</a>)</td>
              <td className="border p-3 text-gray-700">APPSeCONNECT from $99 or $299 a month ($1,188 or $3,588 a year). eShopSync app about $99 a month, products only (<a href={SRC_ESHOPSYNC} {...EXT}>Shopify App Store</a>). ERP licence: through your SAP partner.</td>
              <td className="border p-3 text-gray-700">Not published</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">Microsoft Dynamics 365 Business Central</td>
              <td className="border p-3 text-gray-700">Setup and testing time; the connector software is included (<a href={SRC_ERPBLOG} {...EXT}>ERP Software Blog</a>)</td>
              <td className="border p-3 text-gray-700">Connector preinstalled for new sign-ups (<a href={SRC_BC_CONNECTOR} {...EXT}>Microsoft Learn</a>). ERP: $80 Essentials or $110 Premium per user per month, paid yearly (<a href={SRC_BC_PRICING} {...EXT}>Microsoft</a>)</td>
              <td className="border p-3 text-gray-700">Not published</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">Acumatica</td>
              <td className="border p-3 text-gray-700">Not published; use the approach ranges in section 1</td>
              <td className="border p-3 text-gray-700">ERP: not published; no per-user fees, priced in a custom review (<a href={SRC_ACUMATICA} {...EXT}>Acumatica</a>). Connector: no published price found</td>
              <td className="border p-3 text-gray-700">Not published</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">Odoo</td>
              <td className="border p-3 text-gray-700">Not included in Odoo plans; sold as Success Packs or by a partner (<a href={SRC_ODOO} {...EXT}>Odoo</a>)</td>
              <td className="border p-3 text-gray-700">ERP: per-user prices on Odoo&apos;s pricing page, shown in your local currency. Connector: app range of $199 to $600 a month (<a href={SRC_EIGHTX} {...EXT}>Eightx</a>)</td>
              <td className="border p-3 text-gray-700">Not published</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">QuickBooks Desktop Enterprise</td>
              <td className="border p-3 text-gray-700">Free 1:1 onboarding; $200 one-time for historical data (<a href={SRC_WEBGILITY} {...EXT}>Webgility</a>)</td>
              <td className="border p-3 text-gray-700">Webgility Advanced Inventory Sync: $199 a month billed yearly for 1,000 orders, or $2,388 a year (<a href={SRC_WEBGILITY} {...EXT}>Webgility</a>). ERP: annual subscription (<a href={SRC_QB} {...EXT}>Intuit</a>)</td>
              <td className="border p-3 text-gray-700">Extra orders $10 a month per 500 (<a href={SRC_WEBGILITY} {...EXT}>Webgility</a>)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-sm text-gray-600 leading-relaxed">
        Celigo and eShopSync figures are our conversion of the local-currency estimates the Shopify App Store showed on November 16, 2026, at the exchange rate the listing gave. Celigo&apos;s two plans were a Starting Package (2 endpoints, 10 flows) and a Standard Edition (3 endpoints, 20 flows). Microsoft says its listed prices are for information only.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900">NetSuite</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        NetSuite has the most published integration data because so many Shopify Plus brands run it. Eightx budgets $45,000 to $60,000 to implement and $1,200 a month for Celigo for a $25 million apparel brand, and $50,000 to $75,000 all-in for the first year at that size (<a href={SRC_EIGHTX} {...EXT}>Eightx</a>). Celigo licenses its Shopify app by endpoints and flows, so each extra system or sync job can move you up a plan (<a href={SRC_CELIGO_APP} {...EXT}>Celigo on the Shopify App Store</a>).
      </p>

      <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900">SAP Business One</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Read SAP Business One app listings closely. The eShopSync app on the Shopify App Store costs about $99 a month, but it syncs item groups and items one way, from SAP to the store. It does not send orders back, and it needs the SAP Service Layer on version 10.0 or later (<a href={SRC_ESHOPSYNC} {...EXT}>Shopify App Store</a>). Order and stock sync in both directions is what pushes buyers to APPSeCONNECT, an iPaaS or a custom build.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900">Business Central</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Business Central is the one ERP here whose maker ships its own Shopify connector. Microsoft says the app is preinstalled for all new sign-ups and trials (<a href={SRC_BC_CONNECTOR} {...EXT}>Microsoft Learn</a>). A September 2026 article by a Business Central partner adds that free software is not a free implementation, because configuration still takes time and money (<a href={SRC_ERPBLOG} {...EXT}>ERP Software Blog</a>). The licence is the bigger line: 10 Essentials users at $80 cost $9,600 a year.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900">QuickBooks Enterprise</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Intuit&apos;s Enterprise pricing page links to Webgility for Shopify, Amazon and WooCommerce sync and says extra fees may apply (<a href={SRC_QB} {...EXT}>Intuit</a>). Webgility prices by monthly order count, so a growing store pays more each time it crosses a tier. For a QuickBooks Online or Desktop setup, see our <a href="/services/shopify-quickbooks-integration" className={LINK_CLASS}>Shopify QuickBooks integration service</a>.
      </p>

      <h2 id="three-year" className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        3. What Three Years Cost in One Published Model
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Eightx publishes a 36-month model for a $25 million Shopify brand on NetSuite. It adds implementation, three years of subscription and internal staff time. We reproduce its totals so you can see how the approaches compare over time, not just on day one (<a href={SRC_EIGHTX} {...EXT}>Eightx</a>).
      </p>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 border text-left">Option</th>
              <th className="p-3.5 border text-left">Implementation</th>
              <th className="p-3.5 border text-left">Subscription, 36 months</th>
              <th className="p-3.5 border text-left">Total, 36 months</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">App-store connector</td>
              <td className="border p-3 text-gray-700">$15,000</td>
              <td className="border p-3 text-gray-700">$18,000</td>
              <td className="border p-3 text-gray-700">$123,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">Celigo</td>
              <td className="border p-3 text-gray-700">$45,000</td>
              <td className="border p-3 text-gray-700">$46,800</td>
              <td className="border p-3 text-gray-700">$181,800</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">Boomi with an integrator</td>
              <td className="border p-3 text-gray-700">$80,000</td>
              <td className="border p-3 text-gray-700">$90,000</td>
              <td className="border p-3 text-gray-700">$260,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">Workato with an integrator</td>
              <td className="border p-3 text-gray-700">$90,000</td>
              <td className="border p-3 text-gray-700">$108,000</td>
              <td className="border p-3 text-gray-700">$288,000</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">Custom SuiteScript</td>
              <td className="border p-3 text-gray-700">$120,000</td>
              <td className="border p-3 text-gray-700">$18,000</td>
              <td className="border p-3 text-gray-700">$273,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-sm text-gray-600 leading-relaxed">
        Totals include $90,000 of internal staff time over 36 months (half a person at $30,000 a year), or $135,000 for the custom build. <a href={SRC_EIGHTX} {...EXT}>Eightx</a> calls these planning ranges built from public vendor documents, not survey data.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Two things stand out. Staff time is the largest single line for the cheapest option, and custom code costs more than Celigo over three years even with almost no subscription. Price the people, not just the software.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-3 text-gray-900">Want these ranges run on your own numbers?</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Send us your ERP and edition, your monthly order count, how many B2B price lists and warehouses you run, and what has to sync. We send a written scope with the field map and a fixed price for each phase. You can also read how our <a href="/services/ecommerce-erp-integration" className={LINK_CLASS}>ecommerce ERP integration service</a> works.
        </p>
        <a href="/contact" className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors">Request a Shopify ERP scope &rarr;</a>
      </div>

      <h2 id="cost-drivers" className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        4. What Pushes the Price Up
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Two stores on the same ERP can get quotes that differ several times over. These seven things explain most of the gap. Each one adds mapping rules, test cases and things that can go wrong after launch.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
        <li>
          <strong>Order volume.</strong> Connector plans are priced by orders, flows or endpoints. Webgility lists tiers at 300, 800, 1,000, 1,500, 3,000 and 5,000 orders a month (<a href={SRC_WEBGILITY} {...EXT}>Webgility</a>), and Celigo&apos;s plans step up by endpoints and flows. High volume can also hit Shopify API limits. Shopify Plus lists up to 10 times the standard limits on select APIs, as our <a href="/blog/the-true-cost-of-shopify-plus-2026" className={LINK_CLASS}>Shopify Plus cost guide</a> explains.
        </li>
        <li>
          <strong>B2B price lists.</strong> Customer-specific prices, payment terms and credit limits have to match in both systems. Eightx adds $15,000 to $25,000 and 4 to 6 weeks for five or more B2B price lists or three or more sales channels (<a href={SRC_EIGHTX} {...EXT}>Eightx</a>).
        </li>
        <li>
          <strong>Several warehouses.</strong> Stock has to sync per location, and orders have to route to the right one. A store with one warehouse needs one stock number per SKU. A store with five needs five, plus rules for which one ships.
        </li>
        <li>
          <strong>Kits and assemblies.</strong> A bundle sold as one product in Shopify may be three parts in the ERP. The sync has to split the order into parts and work out how many kits are in stock from the parts on hand.
        </li>
        <li>
          <strong>Multiple currencies.</strong> Orders in euros or pounds have to post to the ERP in the right currency, at the right rate, with fees and payouts that match. This is where finance teams find gaps months later.
        </li>
        <li>
          <strong>Custom ERP records.</strong> Pre-built apps map standard records like items, customers and sales orders. Custom fields, custom record types or approval steps in your ERP need extra mapping or code.
        </li>
        <li>
          <strong>Historical data.</strong> Moving years of past orders and customers costs extra time and sometimes a fee. Webgility lists historical data migration at $200 one-time (<a href={SRC_WEBGILITY} {...EXT}>Webgility</a>). Larger moves on an iPaaS or custom build are scoped as their own phase.
        </li>
      </ul>

      <p className="mb-6 text-gray-700 leading-relaxed">
        Some stores also need EDI with big-box retailers on top of the ERP link. That is a separate scope, covered on our <a href="/services/shopify-edi-integration" className={LINK_CLASS}>Shopify EDI integration page</a>.
      </p>

      <h2 id="hidden-costs" className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        5. Hidden Costs
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        A September 2026 ERP Software Blog article says hidden costs can add 20 to 40 percent to a first Shopify ERP integration quote (<a href={SRC_ERPBLOG} {...EXT}>ERP Software Blog</a>). These are the lines we see missing from quotes most often:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
        <li><strong>Setup fees that are not published.</strong> APPSeCONNECT lists a one-time setup fee on every plan without an amount (<a href={SRC_APPSE} {...EXT}>APPSeCONNECT</a>).</li>
        <li><strong>Charges outside your Shopify bill.</strong> Celigo&apos;s listing says Celigo may bill extra charges separately from your Shopify invoice (<a href={SRC_CELIGO_APP} {...EXT}>Shopify App Store</a>).</li>
        <li><strong>Annual contracts.</strong> Jitterbit&apos;s pricing page says all products need an annual contract and shows no prices (<a href={SRC_JITTERBIT} {...EXT}>Jitterbit</a>).</li>
        <li><strong>Volume overages.</strong> Webgility charges $10 a month per extra 500 orders and $15 a month per 500 for backend overage (<a href={SRC_WEBGILITY} {...EXT}>Webgility</a>). A busy holiday season can move you up a tier.</li>
        <li><strong>Payout reconciliation.</strong> Eightx warns that app-store connectors often leave Shopify payouts to be rebuilt in spreadsheets (<a href={SRC_EIGHTX} {...EXT}>Eightx</a>). That is staff time every month.</li>
        <li><strong>Internal staff time.</strong> In the Eightx model, staff time after go-live costs more than three years of app subscription.</li>
        <li><strong>A test ERP environment.</strong> Testing against your live ERP risks real stock and real invoices. A sandbox may cost extra with your ERP vendor, so ask.</li>
        <li><strong>Fixes after updates.</strong> Shopify and every ERP update their APIs. Someone has to test and fix the sync when they do.</li>
      </ul>

      <h2 id="failure-points" className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        6. Where Integrations Break
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Most failures cost more to fix after launch than to plan for before it. Test each of these with real past orders, not made-up ones:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
        <li><strong>SKUs that do not match.</strong> One extra space or a different case and the order will not post.</li>
        <li><strong>Two owners for one field.</strong> If both systems can change price or stock, they overwrite each other.</li>
        <li><strong>Tax, discount and shipping lines.</strong> The ERP needs to know where each line on a Shopify order goes in the books.</li>
        <li><strong>Refunds, partial refunds and exchanges.</strong> These are often left out of the first map.</li>
        <li><strong>Duplicate orders.</strong> A retry after a timeout can post the same order twice.</li>
        <li><strong>Stock updates out of order.</strong> An older stock number can overwrite a newer one during a sale.</li>
        <li><strong>Gift cards and store credit.</strong> These are payments in Shopify but often a liability in the ERP.</li>
        <li><strong>Alerts nobody reads.</strong> A failed sync that emails a shared inbox can sit for days.</li>
      </ol>

      <h2 id="fixed-quote" className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        7. How to Get a Fixed Quote
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        A partner can only fix a price once the work is written down. Bring this list to every quote call and ask each partner to answer it in writing:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
        <li><strong>Your ERP, edition and version,</strong> and whether you have a sandbox.</li>
        <li><strong>Monthly order count</strong> today and at your busiest month.</li>
        <li><strong>Every record that syncs,</strong> its direction and how fresh it must be: products, stock, prices, customers, orders, refunds, payouts, shipments.</li>
        <li><strong>One owner per record.</strong> Which system wins when the two disagree.</li>
        <li><strong>B2B needs:</strong> price lists, payment terms, credit limits.</li>
        <li><strong>Warehouses, currencies and sales channels</strong> beyond Shopify.</li>
        <li><strong>Kits, assemblies and custom ERP records.</strong></li>
        <li><strong>How much history to move</strong> and from which date.</li>
        <li><strong>Error rules:</strong> who gets alerted, how fast, and what retries automatically.</li>
        <li><strong>A test plan</strong> using real past orders, with sign-off before go-live.</li>
        <li><strong>Every recurring fee</strong> on one page: connector, iPaaS, ERP add-ons, hosting and support.</li>
        <li><strong>A fixed price for each phase,</strong> and what happens if the scope changes.</li>
      </ol>
      <p className="mb-6 text-gray-700 leading-relaxed">
        If a partner quotes a single number without asking most of these questions, the number will move. If you are also budgeting the store build, our <a href="/blog/ecommerce-website-cost-2026" className={LINK_CLASS}>ecommerce website cost guide</a> covers that side.
      </p>

      <h2 id="sources" className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        8. Sources and How We Checked Them
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We read each page below on November 16, 2026 and used only numbers we could see on it. Most integration cost figures come from vendors or agencies that sell integration work, and FactoryJet sells it too, so treat every range as a starting point for a quote.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 text-sm">
        <li><a href={SRC_EIGHTX} {...EXT}>Eightx: Connect Shopify to NetSuite, 2026 CFO implementation guide</a> (June 2, 2026). The guide says its figures are planning ranges, not survey data.</li>
        <li><a href={SRC_FOLIO3} {...EXT}>Folio3: How much does NetSuite ERP integration cost?</a> (October 1, 2025)</li>
        <li><a href={SRC_ONECART} {...EXT}>OneCart: SAP Shopify integration</a> (April 3, 2026)</li>
        <li><a href={SRC_CELIGO_APP} {...EXT}>NetSuite Integration by Celigo, Shopify App Store</a></li>
        <li><a href={SRC_ESHOPSYNC} {...EXT}>SAP Business One Integration by eShopSync, Shopify App Store</a></li>
        <li><a href={SRC_APPSE} {...EXT}>APPSeCONNECT pricing</a></li>
        <li><a href={SRC_BC_PRICING} {...EXT}>Microsoft Business Central pricing</a></li>
        <li><a href={SRC_BC_CONNECTOR} {...EXT}>Microsoft Learn: Get started with the Shopify Connector</a></li>
        <li><a href={SRC_ERPBLOG} {...EXT}>ERP Software Blog: The hidden cost of Shopify middleware</a> (September 3, 2026, written by a Business Central partner)</li>
        <li><a href={SRC_ACUMATICA} {...EXT}>Acumatica pricing</a></li>
        <li><a href={SRC_ODOO} {...EXT}>Odoo pricing</a></li>
        <li><a href={SRC_QB} {...EXT}>QuickBooks Desktop Enterprise pricing</a></li>
        <li><a href={SRC_WEBGILITY} {...EXT}>Webgility pricing</a></li>
        <li><a href={SRC_JITTERBIT} {...EXT}>Jitterbit pricing</a></li>
      </ul>

      <div className="not-prose mt-10 mb-6 rounded-2xl border border-[#E5DFD7] bg-[#FAFAF7] p-6 md:p-8">
        <p className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Need a Shopify ERP integration scoped?</p>
        <p className="text-slate-700 text-base mb-5 leading-relaxed">
          FactoryJet connects Shopify to NetSuite, SAP Business One, Business Central, Odoo, QuickBooks
          and other ERPs. We write the field map and error rules first, then send a fixed price for each
          phase before any work starts.
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          <a
            href="/services/ecommerce-erp-integration"
            className="inline-flex items-center rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white hover:bg-[#8F3210]"
          >
            Explore ecommerce ERP integration
          </a>
          <a
            href="/services/shopify-quickbooks-integration"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50"
          >
            See Shopify QuickBooks integration
          </a>
          <a
            href="/services/shopify-edi-integration"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50"
          >
            See Shopify EDI integration
          </a>
        </div>
      </div>
    </>
  ),
};
