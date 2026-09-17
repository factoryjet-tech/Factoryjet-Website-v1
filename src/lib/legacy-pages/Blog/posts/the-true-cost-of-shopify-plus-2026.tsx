import React from 'react';
import type { BlogPost } from '../data.types';

/*
 * Rewritten in the 2026-09-17 review. Every fee, rate, limit and date below was checked that day
 * against Shopify's own pages (Plus pricing, US pricing, POS pricing, Help Center) or the named
 * third-party source linked next to it. The earlier version reversed the Plus contract terms and
 * stated a variable fee rate, threshold and cap that Shopify does not publish; those are gone.
 * No FactoryJet prices appear on purpose.
 */

const SRC_PLUS_PRICING = 'https://www.shopify.com/plus/pricing';
const SRC_US_PRICING = 'https://www.shopify.com/pricing';
const SRC_PLUS_PLAN = 'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan';
const SRC_POS_PRICING = 'https://www.shopify.com/pos/pricing';
const SRC_FX_FEES = 'https://help.shopify.com/en/manual/international/pricing/fees';
const SRC_B2B_PLANS = 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features';
const SRC_TCO = 'https://www.shopify.com/compare/tco';
const SRC_ELOGIC = 'https://elogic.co/blog/replatforming-cost-index/';
const SRC_ASK_PHILL = 'https://askphill.com/blogs/blog/magento-to-shopify-migration';
const SRC_ADOBE_LIFECYCLE = 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy';
const SRC_HEADLESS_TEAM = 'https://www.shopify.com/enterprise/blog/website-maintenance-cost';

const LINK_CLASS = 'text-[#B23E13] underline';

export const post: BlogPost = {
  id: '103',
  slug: 'the-true-cost-of-shopify-plus-2026',
  title: 'The True Cost of Shopify Plus in 2026: Pricing, Fees, & Hidden Line Items',
  excerpt:
    "Shopify Plus starts at $2,300 a month on a 3-year term or $2,500 on a 1-year term in the US, but the plan fee is rarely the biggest line. This guide breaks down the variable platform fee, card rates, expansion stores, POS Pro, currency conversion and when Plus pays for itself, using Shopify's published numbers.",
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'August 30, 2026',
  readTime: '14 min read',
  imageUrl: '/blog-images/the-true-cost-of-shopify-plus-2026-hero.webp',
  meta: {
    title: 'Shopify Plus Cost 2026: Pricing, Fees & True TCO Breakdown',
    description:
      'Shopify Plus pricing in 2026: $2,300 to $2,500 a month, the variable platform fee, US card rates, expansion stores, POS Pro and break-even math.',
  },
  keyTakeaways: [
    'In the US, Shopify Plus costs $2,300 a month on a 3-year term or $2,500 a month on a 1-year term. Shopify says more complex, higher-volume businesses switch to a variable platform fee based on revenue and business model.',
    'Shopify does not publish the variable fee rate or the revenue level where it starts, and its help center says B2B and direct-to-consumer orders carry different variable rates. Agency estimates disagree, so get your rate in writing.',
    "Card fees usually cost far more than the plan. Shopify's US pricing page lists online card rates of 2.25% + 30 cents on Plus and 2.5% + 30 cents on Advanced, and a 0.2% Shopify fee on Plus when you use a third-party payment provider.",
    'On card fees alone, Plus pays for itself against Advanced at about $760,000 a month in online standard card sales. Below that, choose Plus for the features you need, not for fee savings.',
    'The main store and 9 expansion stores are included in the Plus fee. Each additional store costs $300 a month or a revenue share, and the first 20 POS Pro locations are included.',
    'B2B features are included at no extra cost on the Basic, Grow, Advanced and Plus plans. Plus adds unlimited catalogs, catalogs assigned directly to companies, deposits, partial payments and payment requests per fulfillment.',
    'US stores that accept other currencies through Shopify Payments pay a 1.5% currency conversion fee, and international cards add 1% to the online card rate.',
  ],
  faqs: [
    {
      q: 'How much does Shopify Plus cost per month in 2026?',
      a: "In the US, Shopify Plus costs $2,300 a month on a 3-year term or $2,500 a month on a 1-year term, according to Shopify's Plus pricing page and help center. Those list prices cover standard setups and integrations. Shopify says more complex, higher-volume businesses switch to a variable platform fee based on revenue and business model, and its sales team quotes that fee.",
    },
    {
      q: 'When does the Shopify Plus variable platform fee apply?',
      a: "Shopify only says that more complex, higher-volume businesses move to a variable platform fee based on revenue and business model, and that B2B and direct-to-consumer orders carry different rates. It does not publish the rate or the revenue level where the fee starts. Agency estimates disagree: Elogic's 2026 cost index cites a threshold near $800,000 a month with a $40,000 monthly cap, and Ask Phill cites 0.35% of GMV. Get your rate in writing.",
    },
    {
      q: 'What are the credit card processing rates on Shopify Plus?',
      a: "Shopify's US pricing page lists Shopify Payments rates on Plus of 2.25% + 30 cents for online standard cards, 2.95% + 30 cents for online premium cards and 2.3% + 10 cents in person, with 1% added for international cards. The Plus pricing page adds that card rates vary by country, so ask Shopify's sales team for the rates in each market you sell in before you sign.",
    },
    {
      q: 'What is the fee for using a third-party payment gateway on Shopify Plus?',
      a: "Shopify charges 0.2% per transaction on Plus when a third-party processor is your primary payment gateway, on top of that processor's own fees. Shopify's US pricing page lists the same fee at 0.6% on Advanced, 1% on Grow and 2% on Basic. Plus stores that use Shopify Payments as their only payment provider have third-party transaction fees waived.",
    },
    {
      q: 'How many expansion stores are included with Shopify Plus?',
      a: "Shopify Plus includes your main store and 9 expansion stores in the monthly platform fee. Shopify's Plus pricing page says each additional store costs $300 a month or a revenue share across all stores, and each contract covers one brand, so a company with several brands needs a separate Plus contract for each. Each live expansion store also needs its own theme license.",
    },
    {
      q: 'At what revenue does upgrading from Advanced to Shopify Plus pay for itself?',
      a: 'On card fees alone, later than many brands expect. Plus on a 3-year term costs $1,901 a month more than Advanced billed monthly, and its online standard card rate is 0.25 points lower, so the savings cover the gap at about $760,000 a month in online card sales. With a third-party gateway, the 0.4-point fee gap lowers that to about $475,000 a month. Below those levels, buy Plus for its features.',
    },
    {
      q: 'Are B2B wholesale features included in Shopify Plus pricing?',
      a: "Yes. Shopify's help center says B2B features come at no extra cost on the Basic, Grow, Advanced and Plus plans, and since April 2, 2026 the lower plans include companies, up to 3 catalogs, net terms, quantity rules and vaulted cards. Plus adds unlimited catalogs, catalogs assigned directly to companies and locations, deposits, partial payments and payment requests per fulfillment. B2B and direct-to-consumer orders can carry different variable fee rates.",
    },
    {
      q: 'What does a Shopify Plus build or migration cost?',
      a: "Shopify does not charge to migrate, and its Plus pricing page tells you to budget for a Shopify Plus Partner if you need custom development. Published 2026 agency guides give a wide range: LitExtension lists $20,000 to $150,000+ for moving Magento 2 or Adobe Commerce to Plus, and Presta lists $80,000 to $150,000+ for enterprise Plus migrations. Scope, integrations and design decide where you land.",
    },
    {
      q: 'Is Shopify Plus cheaper than Adobe Commerce or Salesforce Commerce Cloud?',
      a: 'Shopify says so, based on research it commissioned from an independent consulting firm: on average 33% better total cost of ownership than competitors, with Adobe platform and implementation costs 42% higher and Salesforce operating costs 6% higher than Shopify. That is vendor-funded research, so build your own comparison from real quotes for licenses, hosting, implementation, apps and the developer time each platform needs.',
    },
    {
      q: 'What hidden costs should enterprise brands budget for on Shopify Plus?',
      a: 'For most brands the plan fee is not the biggest line. Budget for card processing, a variable platform fee if Shopify applies one, app subscriptions, theme purchases, custom development by a partner, ERP or middleware subscriptions, a tax engine if you need one, additional expansion stores at $300 a month each, and currency conversion fees if you sell in other currencies. Ask each vendor for pricing at your order volume.',
    },
    {
      q: 'How much does Shopify charge for currency conversion?',
      a: "Shopify Payments charges a currency conversion fee when you accept payment in a currency other than your store's domestic currency. Shopify's help center lists the fee at 1.5% for stores based in the United States and 2% for France and all other Shopify Payments regions. Shopify's US pricing page also adds 1% to the card rate for international cards, so a cross-border sale can carry both.",
    },
    {
      q: 'Can we use our own payment processor on Shopify Plus?',
      a: "Yes. Shopify Plus stores can use a third-party processor as their primary payment gateway. Shopify then charges 0.2% per transaction for security and compliance costs, on top of the processor's own fees. Stores that use Shopify Payments as their only provider have that fee waived, so compare your processor's negotiated rate plus 0.2% with Shopify's quoted card rates at your volume.",
    },
    {
      q: 'Does Shopify publish a maximum variable platform fee?',
      a: "No. Shopify's Plus pricing page and help center describe the variable platform fee without a published rate, threshold or cap. Some agencies publish estimates, such as Elogic's 2026 cost index, which cites a $40,000 monthly cap, but Shopify does not confirm those figures. If a cap matters to your budget, ask Shopify to put the rate and any cap in your contract.",
    },
    {
      q: 'How does Shopify Plus pricing work for B2B-only wholesale businesses?',
      a: "The same plan fees apply, and B2B features are included. Shopify lets you run B2B and direct-to-consumer sales in one blended store or build a separate B2B-only store, and its help center says B2B and direct-to-consumer orders carry different variable platform fee rates. On Plus you can assign catalogs directly to each company, which lower plans can't do. Confirm your B2B rate with Shopify before you sign.",
    },
    {
      q: 'What do custom Shopify Functions cost compared with apps?',
      a: 'The cost of a custom Function is mainly the development and upkeep of the app that contains it. Stores on any plan can use public App Store apps that contain Functions, but only Plus stores can use custom apps built with Shopify Function APIs. Shopify Scripts stopped running on June 30, 2026, so any discount, shipping or payment logic still built on Scripts has to move to Functions or an app.',
    },
    {
      q: 'What support is included with Shopify Plus?',
      a: "Shopify's help center lists priority 24/7 phone and chat support on Plus, plus email tickets with typical response times of 48 hours. It also says Shopify Support can't help with most custom code issues unless you're on Plus or a Shopify Partner, and that the Plus plan might include a 99.99% uptime service level agreement, so check your contract. Shopify Support is not a development team for your theme, apps or integrations.",
    },
    {
      q: 'Are there extra fees for Shopify checkout extensibility?',
      a: "Shopify's Plus pricing page lists no other platform charges beyond the plan fee, and names custom development, theme purchases and third-party apps as the costs to budget. Checkout UI extensions on the information, shipping and payment steps are available only on Plus. Apps you install for checkout features can carry their own subscription fees, and custom extensions cost development time.",
    },
    {
      q: 'How do Shopify POS Pro fees work on Shopify Plus?',
      a: "Shopify's help center says the first 20 POS Pro locations are included in every Plus plan. If you run more than 20 POS Pro locations and use Shopify Payments as your primary provider for retail, the POS Pro cost is waived for your first 200 retail locations. On Basic, Grow and Advanced, Shopify's POS pricing page lists POS Pro at $89 a month per location.",
    },
  ],
  content: (
    <>
      <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
        <h2 className="text-lg font-bold mb-3 text-gray-900">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 text-blue-700">
          <li>Shopify Plus 2026 Plan Fees</li>
          <li>The Variable Platform Fee: What Shopify Publishes</li>
          <li>Card Processing &amp; Transaction Fees by Plan</li>
          <li>Plan Fee Plus Card Fees at Four Sales Levels</li>
          <li>What the Plus Fee Buys</li>
          <li>Costs the Plan Fee Does Not Cover</li>
          <li>Shopify Plus vs. Adobe Commerce vs. Salesforce Commerce Cloud</li>
          <li>When Plus Pays for Itself Against Advanced</li>
          <li>International Sales &amp; Currency Conversion Fees</li>
          <li>Headless Storefronts: Hydrogen &amp; Oxygen</li>
          <li>Questions to Settle Before You Sign</li>
          <li>B2B &amp; DTC on One Store</li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed mb-6 text-gray-800">
        When finance leaders evaluate Shopify Plus in 2026, the first number they see is the plan fee: <strong>$2,300 a month on a 3-year term or $2,500 a month on a 1-year term</strong> in the US (<a href={SRC_PLUS_PRICING} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify Plus pricing</a>). Treating that as the full cost is the most common budgeting mistake. A brand with $10 million a year in online sales on standard cards pays about $225,000 a year in Shopify Payments card fees at the Plus rate of 2.25%, plus 30 cents per order, on top of $27,600 to $30,000 in plan fees.
      </p>

      <p className="text-base leading-relaxed mb-6 text-gray-700">
        This guide breaks down every published line item on Shopify Plus in 2026, using Shopify&apos;s own pricing pages and help center, checked on September 17, 2026. Where Shopify publishes nothing, we say so. If you are leaving Magento, published cost ranges and timelines for the one-time migration project are in our <a href="/replatforming/magento-to-shopify#migration-cost" className="text-[#B23E13] underline">Magento to Shopify Plus migration cost and timeline guide</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        1. Shopify Plus 2026 Plan Fees
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shopify lists two Plus prices in the US, both for standard setups and integrations, and a variable platform fee for more complex, higher-volume businesses (<a href={SRC_PLUS_PLAN} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify Help Center</a>).
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 border text-left">Contract Term</th>
              <th className="p-3.5 border text-left">Monthly Plan Fee (USD)</th>
              <th className="p-3.5 border text-left">Yearly Total</th>
              <th className="p-3.5 border text-left">What Shopify Says It Covers</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">3-Year Term</td>
              <td className="border p-3 font-bold text-orange-700">$2,300 / month</td>
              <td className="border p-3 text-gray-700">$27,600 / year</td>
              <td className="border p-3 text-gray-700">Standard setups and integrations</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">1-Year Term</td>
              <td className="border p-3 font-bold text-orange-700">$2,500 / month</td>
              <td className="border p-3 text-gray-700">$30,000 / year</td>
              <td className="border p-3 text-gray-700">Standard setups and integrations</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">Variable Platform Fee</td>
              <td className="border p-3 text-gray-700">Quoted by Shopify sales</td>
              <td className="border p-3 text-gray-700">Based on revenue and business model</td>
              <td className="border p-3 text-gray-700">More complex, higher-volume businesses; B2B and DTC orders carry different rates</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        2. The Variable Platform Fee: What Shopify Publishes
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shopify says more complex, higher-volume businesses switch to a variable platform fee based on their revenue and business model, and its help center says B2B and direct-to-consumer orders have different variable rates. Shopify does not publish the rate, the revenue level where the fee starts, or a cap (<a href={SRC_PLUS_PRICING} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify Plus pricing</a>).
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Agencies publish estimates, and they disagree. <a href={SRC_ELOGIC} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Elogic&apos;s 2026 Replatforming Cost Index</a> says Plus fees shift to a GMV-based fee above about $800,000 a month, capped at $40,000 a month. <a href={SRC_ASK_PHILL} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Ask Phill</a> describes the fee as 0.35% of GMV or $2,300 a month, whichever is greater. Shopify confirms neither figure.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
        <p className="text-sm text-amber-900 font-medium">
          <strong>Budget tip:</strong> model your costs at the list price and again with a variable fee, and treat the gap as a range until Shopify quotes you. Ask for the rate, the threshold, any cap and the B2B rate in writing.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        3. Card Processing &amp; Transaction Fees by Plan
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Payment processing is usually a far bigger cost than the plan fee. Shopify&apos;s US pricing page lists these Shopify Payments rates and third-party transaction fees (<a href={SRC_US_PRICING} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify pricing</a>, checked September 17, 2026). The Plus pricing page notes that card rates vary by country.
      </p>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 border text-left">Plan (US Monthly Price)</th>
              <th className="p-3.5 border text-left">Online Standard Cards</th>
              <th className="p-3.5 border text-left">Online Premium Cards</th>
              <th className="p-3.5 border text-left">In-Person Cards</th>
              <th className="p-3.5 border text-left">Third-Party Gateway Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">Basic ($39/mo, or $29/mo paid yearly)</td>
              <td className="border p-3 text-gray-700">2.9% + 30¢</td>
              <td className="border p-3 text-gray-700">3.5% + 30¢</td>
              <td className="border p-3 text-gray-700">2.6% + 10¢</td>
              <td className="border p-3 text-gray-700">2%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">Grow ($105/mo, or $79/mo paid yearly)</td>
              <td className="border p-3 text-gray-700">2.7% + 30¢</td>
              <td className="border p-3 text-gray-700">3.3% + 30¢</td>
              <td className="border p-3 text-gray-700">2.5% + 10¢</td>
              <td className="border p-3 text-gray-700">1%</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">Advanced ($399/mo, or $299/mo paid yearly)</td>
              <td className="border p-3 text-gray-700">2.5% + 30¢</td>
              <td className="border p-3 text-gray-700">3.1% + 30¢</td>
              <td className="border p-3 text-gray-700">2.4% + 10¢</td>
              <td className="border p-3 text-gray-700">0.6%</td>
            </tr>
            <tr className="bg-green-50">
              <td className="border p-3 font-bold text-gray-900">Shopify Plus (from $2,300/mo)</td>
              <td className="border p-3 font-bold text-green-800">2.25% + 30¢</td>
              <td className="border p-3 font-bold text-green-800">2.95% + 30¢</td>
              <td className="border p-3 font-bold text-green-800">2.3% + 10¢</td>
              <td className="border p-3 font-bold text-green-800">0.2%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-8 text-sm text-gray-600 leading-relaxed">
        International cards add 1% to the online rate on every plan. Plus stores that use Shopify Payments as their only payment provider have third-party transaction fees waived.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        4. Plan Fee Plus Card Fees at Four Sales Levels
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        This model uses only published numbers: the Plus 3-year fee, the Advanced plan paid yearly, and each plan&apos;s online standard card rate from the table above. It assumes every sale is an online order on a standard domestic card through Shopify Payments, with an $85 average order. It leaves out apps, integrations, premium and international cards, and any variable platform fee Shopify may quote at higher volumes.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 border text-left">Annual Online Sales</th>
              <th className="p-3.5 border text-left">Advanced: Plan + Card Fees</th>
              <th className="p-3.5 border text-left">Shopify Plus: Plan + Card Fees</th>
              <th className="p-3.5 border text-left">Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">$1M (about 11,765 orders)</td>
              <td className="border p-3">$32,117</td>
              <td className="border p-3">$53,629</td>
              <td className="border p-3">Plus costs $21,512 more</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">$5M (about 58,824 orders)</td>
              <td className="border p-3">$146,235</td>
              <td className="border p-3">$157,747</td>
              <td className="border p-3">Plus costs $11,512 more</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold text-gray-900">$10M (about 117,647 orders)</td>
              <td className="border p-3">$288,882</td>
              <td className="border p-3">$287,894</td>
              <td className="border p-3">Plus costs $988 less</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold text-gray-900">$25M (about 294,118 orders)</td>
              <td className="border p-3">$716,823</td>
              <td className="border p-3">$678,335</td>
              <td className="border p-3">Plus costs $38,488 less</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-3 text-gray-900">Want this cost model run on your own numbers?</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The table assumes an $85 average order, standard domestic cards and no apps. Your real total depends on your sales mix, the apps you already pay for, and the systems your store has to connect to, like inventory or accounting software. Send us those details and we will put a written cost estimate for your brand together before any work starts. You can also read how our{' '}
          <a href="/services/shopify-plus-agency" className="text-[#B23E13] underline">Shopify Plus agency services</a>{' '}
          work.
        </p>
        <a href="/contact" className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors">Request a Shopify Plus cost estimate &rarr;</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        5. What the Plus Fee Buys
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Compare the fee against the features you would actually use. Shopify&apos;s help center lists these Plus-only or Plus-expanded features (<a href={SRC_PLUS_PLAN} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify Plus plan</a>):
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
        <li>
          <strong>Checkout customization:</strong> checkout UI extensions on the information, shipping and payment steps, and custom apps built with Shopify Functions, are available only on Plus.
        </li>
        <li>
          <strong>Stores and staff:</strong> the main store plus 9 expansion stores, unlimited staff accounts and unlimited staging stores.
        </li>
        <li>
          <strong>B2B depth:</strong> unlimited catalogs, catalogs assigned directly to companies and locations, deposits, partial payments and payment requests per fulfillment.
        </li>
        <li>
          <strong>Operations:</strong> up to 200 locations, Launchpad for scheduled promotions, and the first 20 POS Pro locations included.
        </li>
        <li>
          <strong>Headless:</strong> up to 25 custom storefronts built with Hydrogen and hosted on Shopify&apos;s Oxygen network.
        </li>
        <li>
          <strong>Support and security:</strong> priority 24/7 phone and chat support, Level 1 PCI DSS and SOC 2 certification, and an uptime SLA that Shopify says the plan might include.
        </li>
      </ul>
      <p className="mb-6 text-gray-700 leading-relaxed">
        If you need none of these, a lower plan may cost less even after its higher card rates.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        6. Costs the Plan Fee Does Not Cover
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shopify&apos;s Plus pricing page names custom development by Shopify Plus Partners, one-time theme purchases and third-party apps as the costs to add (<a href={SRC_PLUS_PRICING} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify Plus pricing</a>). In practice, budget for these lines too:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
        <li><strong>Card processing:</strong> the largest line for most brands (see section 3).</li>
        <li><strong>Apps:</strong> email, reviews, search, subscriptions, support desk and tax tools each bill on their own pricing, often tied to order volume or contacts. Get quotes at your volume.</li>
        <li><strong>ERP and middleware:</strong> connector or integration platform subscriptions, plus the setup work.</li>
        <li><strong>Extra stores:</strong> each store beyond the 9 included expansion stores costs $300 a month or a revenue share, and each live expansion store needs its own theme license.</li>
        <li><strong>Retail:</strong> POS Pro is included for the first 20 locations on Plus. On lower plans, Shopify lists POS Pro at $89 a month per location (<a href={SRC_POS_PRICING} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify POS pricing</a>).</li>
        <li><strong>Currency conversion:</strong> 1.5% for US stores that accept other currencies through Shopify Payments (see section 9).</li>
        <li><strong>Migration or build:</strong> a one-time project cost, covered in our <a href="/replatforming/magento-to-shopify#migration-cost" className={LINK_CLASS}>Magento to Shopify Plus migration cost guide</a>.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        7. Shopify Plus vs. Adobe Commerce vs. Salesforce Commerce Cloud
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shopify publishes a total cost of ownership comparison based on research it commissioned from an independent consulting firm. It reports that, on average, Shopify has 33% better total cost of ownership than competitors, that Adobe platform and implementation costs run 42% higher, and that Salesforce operating costs run 6% higher than Shopify&apos;s (<a href={SRC_TCO} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify TCO research</a>).
      </p>
      <p className="mb-8 text-gray-700 leading-relaxed">
        Treat vendor-funded research as a starting point. The costs that decide the comparison for your brand are the ones you can get quoted: license or plan fees at your volume, hosting and security work on Adobe Commerce, implementation, apps and extensions, and the developer time each platform needs every month. Adobe also gives each Adobe Commerce release a fixed support window, so version upgrades belong in any multi-year Adobe budget (<a href={SRC_ADOBE_LIFECYCLE} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Adobe lifecycle policy</a>).
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        8. When Plus Pays for Itself Against Advanced
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        On published card rates alone, the point where Plus pays for itself is higher than many brands expect. Here is the math, using the US prices in sections 1 and 3:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
        <li>
          <strong>Fee gap:</strong> Plus on a 3-year term costs $2,300 a month. Advanced costs $399 a month billed monthly, a gap of $1,901, or $299 a month billed yearly, a gap of $2,001.
        </li>
        <li>
          <strong>Card rate gap:</strong> online standard cards cost 2.25% + 30¢ on Plus and 2.5% + 30¢ on Advanced, a difference of 0.25 percentage points.
        </li>
        <li>
          <strong>Break-even:</strong> $1,901 divided by 0.25% is about $760,000 a month in online standard card sales, or about $9.1 million a year. Against Advanced billed yearly, it is about $800,000 a month.
        </li>
        <li>
          <strong>With a third-party gateway:</strong> the Shopify fee drops from 0.6% on Advanced to 0.2% on Plus, a 0.4-point gap, so break-even falls to about $475,000 a month.
        </li>
      </ol>

      <p className="mb-6 text-gray-700 leading-relaxed">
        <strong>The verdict:</strong> below those levels, choose Plus for the features in section 5, such as checkout extensions, B2B catalogs or expansion stores, not for fee savings. Above them, the card rate difference alone covers the plan fee, before any variable platform fee Shopify may quote.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        9. International Sales &amp; Currency Conversion Fees
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        When a US store accepts payment in another currency through Shopify Payments, Shopify charges a 1.5% currency conversion fee. Stores in France and all other Shopify Payments regions pay 2% (<a href={SRC_FX_FEES} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify Help Center</a>). International cards also add 1% to the online card rate on Shopify&apos;s US pricing page. On $3 million a year of cross-border sales, the conversion fee alone is about $45,000.
      </p>
      <p className="mb-8 text-gray-700 leading-relaxed">
        The conversion fee is based on your store&apos;s primary country, so it applies to sales in a non-domestic currency. Running a separate expansion store for a major market is one way to sell there in its local currency, but it adds its own theme license, operations and, often, local business and tax setup. Compare those costs with the conversion fees on your actual cross-border volume.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        10. Headless Storefronts: Hydrogen &amp; Oxygen
      </h2>
      <p className="mb-8 text-gray-700 leading-relaxed">
        Shopify&apos;s help center says Plus stores can build up to 25 custom React-based storefronts with Hydrogen and deploy them on Shopify&apos;s Oxygen edge network (<a href={SRC_PLUS_PLAN} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify Plus plan</a>). If you build a headless storefront on another framework, such as Next.js, you pay that host&apos;s pricing and run the front end yourself. Shopify&apos;s enterprise blog puts the minimum team for maintaining a headless storefront at five to seven engineers, so budget for people, not just hosting (<a href={SRC_HEADLESS_TEAM} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify</a>).
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        11. Questions to Settle Before You Sign
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Settle these with Shopify, in writing, before you commit to a term:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
        <li><strong>Term:</strong> the 3-year term at $2,300 a month saves $2,400 a year over the 1-year term at $2,500, but locks you in for three years. Which fits your plans?</li>
        <li><strong>Variable fee:</strong> will Shopify apply a variable platform fee, at what rate and revenue level, is there a cap, and how does the B2B rate differ?</li>
        <li><strong>Card rates:</strong> which Shopify Payments rates apply in each country you sell in?</li>
        <li><strong>Stores:</strong> how many expansion stores do you need, and will any go beyond the 9 included?</li>
        <li><strong>Retail:</strong> how many POS Pro locations will you run, and will they use Shopify Payments?</li>
        <li><strong>Apps:</strong> which current apps does Plus replace, and which stay? Price the ones that stay at your order volume.</li>
        <li><strong>Renewal:</strong> what happens to your rate at renewal, and how much notice do you need to give?</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        12. B2B &amp; DTC on One Store
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shopify lets you sell to businesses and consumers from one blended store or from a separate B2B-only store. B2B features are included at no extra cost on the Basic, Grow, Advanced and Plus plans, and since April 2, 2026 the lower plans include companies, up to 3 catalogs, net payment terms, quantity rules and vaulted cards (<a href={SRC_B2B_PLANS} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>Shopify B2B features by plan</a>).
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
        <li>
          <strong>One catalog and inventory:</strong> B2B buyers sign in with new customer accounts and see the catalogs and prices assigned to them.
        </li>
        <li>
          <strong>Payment terms:</strong> Net 7 to Net 90, or due on fulfillment or on receipt, per company location, with vaulted cards and ACH payments in the US.
        </li>
        <li>
          <strong>Plus extras:</strong> unlimited catalogs, catalogs assigned directly to companies and locations, deposits, partial payments and payment requests per fulfillment.
        </li>
        <li>
          <strong>Limits to plan around:</strong> orders cap at 500 line items, and accelerated checkouts such as Shop Pay don&apos;t work for B2B orders.
        </li>
        <li>
          <strong>Variable fee:</strong> if Shopify applies a variable platform fee, B2B and direct-to-consumer orders carry different rates.
        </li>
      </ul>
      <p className="mb-6 text-gray-700 leading-relaxed">
        For how FactoryJet builds wholesale on Shopify, see our <a href="/services/shopify-plus-b2b" className={LINK_CLASS}>Shopify Plus B2B service</a>.
      </p>

      <div className="bg-gray-900 text-white p-6 rounded-xl mt-10 mb-6">
        <h3 className="text-xl font-bold mb-2 text-white">Need a Line-by-Line Shopify Plus Cost Review?</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          FactoryJet reviews Shopify Plus costs, replatforming plans, headless builds and ERP integrations, and sends a written scope before any work starts.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="/services/shopify-plus-agency"
            className="inline-block bg-orange-700 hover:bg-orange-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Explore Shopify Plus Agency Services →
          </a>
          <a
            href="/services/shopify-migration-agency"
            className="inline-block border border-gray-700 hover:border-gray-500 text-gray-200 px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Explore Migration Services
          </a>
        </div>
      </div>
    </>
  ),
};
