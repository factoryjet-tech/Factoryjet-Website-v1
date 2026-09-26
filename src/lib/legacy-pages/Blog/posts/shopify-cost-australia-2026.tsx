import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

// Shopify cost guide for Australia (AU Wave 4, page 7).
// Plan: pipeline/research/AU-EXPANSION-PLAN-2026-09-26.md (Page 7)
// Rules: pipeline/research/briefs/AU-WAVE4-EXPANSION-ADDENDUM-2026-09-26.md
// Keyword + PAA data: pipeline/research/data/au-competitors-2026-09-26/ (paa_by_page.json "shopify_cost",
// candidate_volumes.json, new_candidate_serps.json) and data/market-au-2026-09-24/brief_au_shopify.json.
//
// Every Shopify price and fee below was read from shopify.com/au/pricing, shopify.com/au/plus/pricing and
// help.shopify.com on 26 September 2026. Developer, agency, theme and app ranges are third-party Australian
// market ranges, labelled with their source and month. None of them is a FactoryJet price.
//
// The FAQPage schema is generated centrally by the blog route (src/app/blog/[slug]/page.tsx)
// FROM this exact array, so the visible FAQs and the structured data can never drift apart.
// Do not add a second, hand-written FAQPage script anywhere in this file.

const SRC = {
  pricing: 'https://www.shopify.com/au/pricing',
  plus: 'https://www.shopify.com/au/plus/pricing',
  gst: 'https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/taxes/billing-taxes-australia-new-zealand',
  thirdParty:
    'https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees',
  billTypes: 'https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges',
  payouts: 'https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/australia/payouts',
  methods: 'https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/australia/payment-methods',
  wpCreative: 'https://wpcreative.com.au/shopify-development-cost-australia/',
  webential: 'https://www.webential.com/blog/shopify-development-cost-australia/',
  afterpay: 'https://www.afterpay.com/en-AU/business/afterpay-merchant-fees',
  kcAfterpay: 'https://kcwebdesign.com.au/afterpay-merchant-fees/',
  zip: 'https://merchant-help.zip.co/hc/en-au/articles/13872028726927-Costs-and-Fees',
  atoGst: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst',
  accc: 'https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees',
};

const faqs: FAQItem[] = [
  {
    q: 'How much does Shopify cost in Australia?',
    a: "Shopify's Australian plans cost A$56 a month for Basic, A$149 for Grow and A$575 for Advanced when you pay monthly, or A$42, A$114 and A$431 a month when you pay yearly. Shopify Plus starts at A$3,700 a month on a 3-year term. On top of the plan you pay card fees on every sale, from 1.7% + 30c on Basic, plus any apps, theme and developer work you choose. Prices checked on shopify.com/au on 26 September 2026.",
  },
  {
    q: 'Is Shopify worth it in Australia?',
    a: 'For most Australian online stores, yes. You get hosting, security, checkout, AUD payouts and card payments in one account, and you can start for the price of a Basic plan. It is less worth it if you sell only a handful of items a month, need a very unusual checkout, or would pay for many apps to fill gaps. Add up plan, card fees and apps for your real sales volume before you decide.',
  },
  {
    q: 'How much does Shopify take from a $100 sale?',
    a: 'On the Basic plan with Shopify Payments, a A$100 order paid with a standard Australian card online costs you A$2.00 (1.7% + 30c). The same sale costs A$1.85 on Grow, A$1.65 on Advanced and A$1.45 on Plus. An international card on Basic costs A$3.80 and an Amex card A$3.20. If you use a third-party payment provider instead, Shopify adds 2% (A$2.00) on Basic on top of that provider’s own fee.',
  },
  {
    q: 'How much does it cost to hire a Shopify developer in Australia?',
    a: 'Published Australian ranges put small jobs, such as theme customisation, at about A$500 to A$2,000, a freelancer-built store at A$2,000 to A$10,000, and an agency-built store at A$10,000 to A$50,000 (WP Creative, May 2026). A basic store setup is quoted at A$1,500 to A$3,000 by Webential (May 2026). These are market ranges, not FactoryJet prices, and neither source says whether GST is included.',
  },
  {
    q: 'How much does it cost to hire a Shopify developer per hour?',
    a: 'Two Australian sources published in May 2026 give A$50 to A$150 an hour (Webential) and A$70 to A$250 an hour (WP Creative). The spread comes from experience, whether you hire a freelancer or an agency, and how complex the work is. Theme text changes sit at the low end. Custom apps, checkout work and system integrations sit at the high end. Ask whether a quoted rate includes GST.',
  },
  {
    q: 'How much do Shopify developers charge?',
    a: 'They charge by the hour, by the project or by the month. Hourly rates in published Australian ranges run from about A$50 to A$250. Project prices range from a few hundred dollars for a small theme change to A$10,000 to A$50,000 for an agency build, and A$30,000 to A$100,000 or more for a Shopify Plus build (WP Creative, May 2026). Monthly retainers cover updates, fixes and small features after launch.',
  },
  {
    q: 'How much does it cost to hire a Shopify expert?',
    a: '"Shopify expert" usually means a developer or agency listed in the Shopify Partner directory, so the prices match developer ranges: roughly A$50 to A$250 an hour, or A$10,000 to A$50,000 for an agency-built store (Webential and WP Creative, May 2026). What changes the price is the scope, not the label. A clear written scope, a fixed quote and a named person who supports the store after launch matter more than the title.',
  },
  {
    q: 'How much does a Shopify partner cost?',
    a: 'Shopify does not set partner prices. Partners are independent developers and agencies, and each sets its own fees. Use the published Australian ranges as a guide: A$2,000 to A$10,000 for a freelancer-built store and A$10,000 to A$50,000 for an agency build (WP Creative, May 2026). Check what is included: design, product import, apps, training, launch support and how long the partner stays on after go-live.',
  },
  {
    q: 'Is Shopify Plus worth it?',
    a: 'Only when you need what Plus adds, such as a fully customisable checkout, unlimited B2B catalogues, many retail locations or expansion stores. Card fees alone rarely justify it. Plus costs A$3,269 a month more than Advanced (yearly billing, 3-year Plus term) and saves 0.2% on domestic online cards, so you would need about A$1.6 million a month in card sales for the fee saving alone to cover the difference.',
  },
  {
    q: 'Which is better, Shopify or Shopify Plus?',
    a: 'Standard Shopify (Basic, Grow or Advanced) is better for most Australian stores because it costs far less and covers the core features. Shopify Plus is better for brands that need checkout customisation, built-in B2B selling at scale, up to 200 POS Pro locations, expansion stores for other countries, or priority support. Start on a standard plan and move to Plus when a specific feature, not revenue alone, requires it.',
  },
  {
    q: 'How much is Shopify Plus per month in Australia?',
    a: "Shopify's Australian Plus pricing page lists A$3,700 a month on a 3-year term or A$4,000 a month on a 1-year term, for standard setups. Larger or more complex businesses move to a variable platform fee based on revenue and business model. Your main store plus 9 expansion stores are included, and extra stores cost A$500 a month each. Checked on shopify.com/au/plus/pricing on 26 September 2026.",
  },
  {
    q: 'How do I avoid Shopify transaction fees?',
    a: "Use Shopify Payments as your card processor. Shopify's help centre says third-party transaction fees are not charged on orders paid through Shopify Payments, Shop Pay, Shop Pay Installments, PayPal Express Checkout or manual methods such as bank transfer. They do apply when you use a third-party provider, and on gift cards and store credit for stores created from 12 May 2025. Card processing fees still apply on every card sale.",
  },
  {
    q: 'Is Shopify Payments better than PayPal?',
    a: 'For card payments on Shopify, Shopify Payments is usually cheaper because it avoids the third-party transaction fee and puts card fees in your payout. Many Australian stores offer both: Shopify Payments for cards and PayPal Express Checkout for shoppers who prefer PayPal. Shopify does not charge its third-party fee on PayPal Express Checkout orders when Shopify Payments is active, although PayPal charges its own fees.',
  },
  {
    q: 'Why is Shopify charging me $40?',
    a: 'Open Settings, then Billing, in your Shopify admin and click the bill. A charge like this is usually one of the items Shopify lists on bills: your plan, app subscriptions or usage, shipping labels, third-party transaction fees, Shopify Messaging, or a one-off charge for a domain or theme. App developers set their own prices, so an app you installed during a trial is a common cause. GST may also be added.',
  },
  {
    q: 'What is the downside of using Shopify?',
    a: 'The main downsides are costs that grow with you and rules you do not control. Paid apps add up, third-party gateways attract an extra fee, and the deepest checkout changes need Shopify Plus. Your store runs on Shopify, so moving later means a migration. Shopify also changes plans and features over time. None of this rules Shopify out, but it is worth pricing your full app stack before you launch.',
  },
  {
    q: 'Is there a better option than Shopify?',
    a: 'It depends on what you sell. WooCommerce suits businesses that want to own and host everything on WordPress. BigCommerce includes more built-in features on some plans. Custom builds suit complex B2B pricing or unusual workflows. For most Australian retailers selling physical products online, Shopify is a strong default. Our guide to the best ecommerce platform in Australia compares the options side by side.',
  },
  {
    q: 'What are some alternatives to Shopify in Australia?',
    a: 'The common alternatives Australian stores consider are WooCommerce (on WordPress), BigCommerce, Wix and Squarespace for small catalogues, and custom-built stores for complex B2B needs. Marketplaces such as Amazon, eBay and Etsy are channels rather than full alternatives, and many brands sell there alongside their own Shopify store. Compare total cost, including apps, hosting and developer time, not just the monthly plan price.',
  },
  {
    q: 'What is the cheapest online store platform?',
    a: 'The cheapest full Shopify online store is the Basic plan at A$42 a month billed yearly. Other platforms have free or cheaper entry tiers, but the cheapest plan is rarely the cheapest store once you add payments, apps, a theme and your own time. A fair test is to price your first year: plan, card fees on your expected sales, apps you need, a domain and any setup help.',
  },
  {
    q: 'Is it cheaper to sell on Etsy or Shopify?',
    a: 'For small, handmade sellers starting out, Etsy can be cheaper because there is no monthly store plan, and you pay fees per listing and per sale instead. As sales grow, Shopify usually becomes cheaper per order, because its percentage fees are lower and you keep the customer relationship. Many makers use both: Etsy to find new buyers and a Shopify store for repeat customers. Check Etsy’s current Australian fee page before comparing.',
  },
  {
    q: 'How much does a Shopify website cost?',
    a: 'A do-it-yourself Shopify store can run about A$500 to A$1,000 in its first year, a theme-based store A$500 to A$3,000, a freelancer build A$2,000 to A$10,000, and an agency build A$10,000 to A$50,000 (WP Creative, May 2026). Add your plan (from A$504 a year on Basic, billed yearly) and apps. These are market ranges, not FactoryJet prices.',
  },
  {
    q: 'Does Shopify charge GST in Australia?',
    a: "Yes. Shopify's help centre says Australian stores are charged 10% GST on the Shopify subscription and any shipping labels. You don't pay that GST if you are registered for GST and add your ABN in Settings, then Billing, then Billing profile. The exemption only applies to bills issued after you add your ABN. Separately, you must charge GST to customers once your GST turnover reaches A$75,000 (ATO).",
  },
  {
    q: 'What do Afterpay and Zip cost a Shopify store?',
    a: "Neither publishes a fixed public rate. Afterpay says its fee is a fixed amount plus a percentage, set in your merchant agreement. A 2026 Australian guide from KC Web Design puts it at 4% to 6% plus 30c per order. Zip says joining is free with no setup or ongoing fees, and charges a merchant service fee plus a per-transaction fee confirmed when you apply. Shopify's third-party fee may also apply.",
  },
  {
    q: 'Is Shopify legal in Australia?',
    a: 'Yes. Shopify runs an Australian site with AUD pricing, and Shopify Payments supports Australian businesses, paying out in AUD to an Australian bank account. Selling online is legal as long as your store follows Australian law: the Australian Consumer Law and consumer guarantees (ACCC), GST once you pass the threshold (ATO), the Privacy Act where it applies, and the rules for any restricted products you sell.',
  },
  {
    q: 'How much does Shopify SEO cost?',
    a: 'Shopify SEO costs depend on catalogue size, how much technical clean-up the store needs, and how much content you want written. Some stores need a one-off fix of titles, collections and site structure. Others need monthly content and link work. Our SEO cost guide for Australia lists published market ranges, and our ecommerce SEO page explains what the work includes for Shopify stores.',
  },
  {
    q: 'Is Shopify still worth it in 2026?',
    a: 'Yes for most stores. In 2026 Shopify still lists four Australian plans, AUD card rates from 1.7% + 30c on Basic down to 1.15% + 30c on Plus, and new features such as selling in AI chat channels on every plan. The things to watch are app costs and plan prices, which change over time. Recheck shopify.com/au/pricing before you budget, because it is the only number that counts.',
  },
];

export const post: BlogPost = {
  id: '467',
  slug: 'shopify-cost-australia-2026',
  title: 'Shopify Pricing Australia 2026: Plans, Fees, Apps and Developer Costs in AUD',
  excerpt:
    'Shopify costs A$56 a month on Basic in Australia (A$42 billed yearly), up to A$575 on Advanced, and from A$3,700 on Shopify Plus. Every plan price and card fee here was read from shopify.com/au on 26 September 2026, with a A$100 sale worked out on each plan, GST explained, and sourced Australian ranges for apps, themes, developers and agencies.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Sep 26, 2026',
  readTime: '17 min read',
  imageUrl: '/blog-images/shopify-cost-australia-2026-hero.webp',
  imageAlt:
    'An Australian online store owner at a timber packing bench in a bright Melbourne studio, looking at her store on a laptop beside handmade ceramic cups and kraft mailer boxes',
  meta: {
    title: 'Shopify Pricing Australia 2026: Fees and Costs | FactoryJet',
    description:
      'Shopify pricing in Australia, checked 26 Sept 2026: plans from A$56 a month, card fees from 1.7% + 30c, Plus, GST, apps, and developer costs in AUD.',
  },
  keyTakeaways: [
    'Shopify pricing in Australia: Basic A$56, Grow A$149 and Advanced A$575 a month paid monthly, or A$42, A$114 and A$431 a month paid yearly. Shopify Plus starts at A$3,700 a month on a 3-year term (shopify.com/au, checked 26 September 2026).',
    'Card fees with Shopify Payments start at 1.7% + 30c per domestic online sale on Basic and fall to 1.15% + 30c on Plus. A A$100 sale costs A$2.00 in fees on Basic.',
    'Use a third-party payment provider and Shopify adds its own fee on top: 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus.',
    'Shopify charges 10% GST on your subscription and shipping labels unless you are GST-registered and add your ABN to your Shopify billing profile.',
    'Upgrading from Basic to Grow pays for itself on card fees alone at about A$48,000 a month in domestic online card sales (yearly billing). Most reasons to upgrade earlier are features, not fees.',
    'Published Australian market ranges: A$50 to A$250 an hour for a Shopify developer, A$10,000 to A$50,000 for an agency-built store, and A$30,000 to A$100,000 or more for a Shopify Plus build (Webential and WP Creative, May 2026). These are not FactoryJet prices.',
  ],
  faqs,
  content: (
    <>
      <p className="text-sm text-gray-500 mb-6">
        By Bhavesh Barot, Founder and CEO | Shopify prices and fees checked on shopify.com/au and help.shopify.com on
        26 September 2026 | 17 min read
      </p>

      <div className="bg-[#FFF3EE] border-l-4 border-[#F05A28] p-5 rounded-r-xl mb-8">
        <p className="font-semibold text-gray-900 mb-2">Quick answer</p>
        <p className="text-gray-700">
          Shopify pricing in Australia starts at A$56 a month for the Basic plan (A$42 a month if you pay yearly),
          then A$149 for Grow and A$575 for Advanced. Shopify Plus starts at A$3,700 a month. On every card sale,
          Shopify Payments takes 1.7% + 30c on Basic. Apps, a theme and developer help are the costs that vary most.
        </p>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        If you are planning a Shopify store in Australia, the plan price is the easy number. What decides your real
        cost is everything around it: the card fee on each sale, whether you pay Shopify&apos;s extra fee for using
        another payment provider, GST on your bill, the apps you add, and who builds the store.
      </p>
      <p className="mb-6">
        We read every Shopify number in this guide from Shopify&apos;s own Australian pricing pages and help centre on
        26 September 2026. That matters, because several popular Australian guides still show older card rates, or a
        Starter plan that no longer appears on Shopify&apos;s Australian pricing page. For costs Shopify does not
        set, such as developers, agencies, themes and apps, we quote published Australian market ranges and name the
        source and month next to each one.
      </p>
      <p className="mb-8">
        One thing to be clear about: the developer and agency ranges below are market ranges, not our prices. We are
        FactoryJet, a registered Shopify Partner that has worked in commerce since 2014 and served more than 500
        businesses, and we quote every build as a fixed scope after a conversation, not from a price list.
      </p>

      <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10 text-sm" aria-label="In this guide">
        <p className="font-semibold text-gray-900 mb-3">In this guide</p>
        <ol className="list-decimal pl-5 space-y-1 text-gray-700">
          <li><a href="#plans">Shopify plans in Australia, in AUD</a></li>
          <li><a href="#card-fees">Shopify fees in Australia: every card rate</a></li>
          <li><a href="#100-sale">What Shopify takes from a A$100 sale</a></li>
          <li><a href="#upgrade">When a bigger plan pays for itself</a></li>
          <li><a href="#plus">Shopify Plus cost in Australia</a></li>
          <li><a href="#bnpl">Afterpay, Zip and PayPal on Shopify</a></li>
          <li><a href="#gst">GST and your Shopify bill</a></li>
          <li><a href="#running-costs">Apps, themes, domains and other running costs</a></li>
          <li><a href="#developer-cost">Shopify developer and agency costs in Australia</a></li>
          <li><a href="#budgets">Three realistic first-year budgets</a></li>
          <li><a href="#save">Nine ways to cut your Shopify costs</a></li>
          <li><a href="#sources">How we checked these numbers</a></li>
        </ol>
      </nav>

      {/* Section: plans */}
      <h2 id="plans" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Shopify pricing in Australia: the four plans in AUD
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shopify&apos;s Australian pricing page lists four plans. You can pay monthly, or pay for a year up front and
        save about a quarter. Here is what each one costs, straight from{' '}
        <a href={SRC.pricing} target="_blank" rel="noopener noreferrer">
          shopify.com/au/pricing
        </a>{' '}
        on 26 September 2026.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Plan</th>
              <th className="p-3 border text-left">Paid monthly</th>
              <th className="p-3 border text-left">Paid yearly (per month)</th>
              <th className="p-3 border text-left">Cost for 12 months, paid yearly</th>
              <th className="p-3 border text-left">Staff accounts</th>
              <th className="p-3 border text-left">Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3 font-semibold">Basic</td>
              <td className="border p-3">A$56</td>
              <td className="border p-3">A$42</td>
              <td className="border p-3">A$504</td>
              <td className="border p-3">No extra staff accounts listed</td>
              <td className="border p-3">New stores and solo founders</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold">Grow</td>
              <td className="border p-3">A$149</td>
              <td className="border p-3">A$114</td>
              <td className="border p-3">A$1,368</td>
              <td className="border p-3">Up to 5</td>
              <td className="border p-3">Small teams with steady sales</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold">Advanced</td>
              <td className="border p-3">A$575</td>
              <td className="border p-3">A$431</td>
              <td className="border p-3">A$5,172</td>
              <td className="border p-3">Up to 15</td>
              <td className="border p-3">High volume and international selling</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold">Plus</td>
              <td className="border p-3">From A$4,000 (1-year term)</td>
              <td className="border p-3">From A$3,700 (3-year term)</td>
              <td className="border p-3">From A$44,400</td>
              <td className="border p-3">Unlimited</td>
              <td className="border p-3">Complex, B2B and multi-store brands</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mb-6">
        Source: Shopify Australia pricing and Shopify Plus pricing pages, read 26 September 2026. Shopify does not
        state on the pricing page whether these AUD prices include GST. See the GST section below.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">A few details that change what you actually pay:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Trial:</strong> Shopify offers 3 days free, then A$1 a month for the first 3 months on most plans,
          before normal pricing starts.
        </li>
        <li>
          <strong>No setup fee:</strong> Shopify&apos;s pricing FAQ says there are no setup fees on any plan.
        </li>
        <li>
          <strong>Hosting is included:</strong> every plan includes hosting, unlimited bandwidth and a free SSL
          certificate (the padlock that makes your site secure), so you do not buy hosting separately.
        </li>
        <li>
          <strong>POS Pro is extra:</strong> if you run a physical shop and want Shopify&apos;s advanced retail
          tools, POS Pro costs A$129 a month per location on top of your plan.
        </li>
        <li>
          <strong>Marketplace orders:</strong> the first 50 orders a month synced from marketplaces are free. After
          that, Shopify charges 1%, capped at US$99 a month.
        </li>
        <li>
          <strong>What about the Starter plan?</strong> Some guides still list a Starter plan of about A$7 a month for
          social selling. It does not appear on Shopify&apos;s Australian pricing page as of 26 September 2026, so do
          not plan around it.
        </li>
      </ul>

      {/* Section: card fees */}
      <h2 id="card-fees" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Shopify fees in Australia: every card rate by plan
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        When a customer pays by card through Shopify Payments, Shopify takes a card processing fee out of the sale
        before it pays you. The rate depends on your plan and the type of card. If you use a different payment
        provider instead, Shopify charges a separate third-party transaction fee on top of that provider&apos;s own
        fee.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Fee (AUD)</th>
              <th className="p-3 border text-left">Basic</th>
              <th className="p-3 border text-left">Grow</th>
              <th className="p-3 border text-left">Advanced</th>
              <th className="p-3 border text-left">Plus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3">Online, standard card</td>
              <td className="border p-3">1.7% + 30c</td>
              <td className="border p-3">1.55% + 30c</td>
              <td className="border p-3">1.35% + 30c</td>
              <td className="border p-3">1.15% + 30c</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Online, Amex</td>
              <td className="border p-3">2.9% + 30c</td>
              <td className="border p-3">2.8% + 30c</td>
              <td className="border p-3">2.7% + 30c</td>
              <td className="border p-3">2.6% + 30c</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Online, international card</td>
              <td className="border p-3">3.5% + 30c</td>
              <td className="border p-3">3.4% + 30c</td>
              <td className="border p-3">3.3% + 30c</td>
              <td className="border p-3">3.2% + 30c</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">In person (card reader)</td>
              <td className="border p-3">1.85%</td>
              <td className="border p-3">1.75%</td>
              <td className="border p-3">1.65%</td>
              <td className="border p-3">1.45%</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Third-party transaction fee (if not using Shopify Payments)</td>
              <td className="border p-3">2%</td>
              <td className="border p-3">1%</td>
              <td className="border p-3">0.6%</td>
              <td className="border p-3">0.2%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mb-6">
        Source: the plan comparison table on{' '}
        <a href={SRC.pricing} target="_blank" rel="noopener noreferrer">
          shopify.com/au/pricing
        </a>
        , read 26 September 2026. In-person rates have no fixed 30c part.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">What those words mean in plain English:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Shopify Payments</strong> is Shopify&apos;s own card processor. In Australia it accepts Visa,
          Mastercard, American Express and UnionPay, and shops using Shopify POS can also take EFTPOS cards in person (
          <a href={SRC.methods} target="_blank" rel="noopener noreferrer">
            Shopify help centre
          </a>
          ).
        </li>
        <li>
          <strong>Card fees come out of your payout.</strong> Shopify&apos;s help centre says Shopify Payments card
          fees are deducted from your payouts, not added to your monthly Shopify bill (
          <a href={SRC.billTypes} target="_blank" rel="noopener noreferrer">
            types of charges
          </a>
          ).
        </li>
        <li>
          <strong>Payouts arrive in AUD.</strong> The minimum settlement time in Australia is 2 business days, and it
          is longer when you first start (
          <a href={SRC.payouts} target="_blank" rel="noopener noreferrer">
            payouts in Australia
          </a>
          ).
        </li>
        <li>
          <strong>The third-party transaction fee</strong> is charged on the order total, including tax and shipping,
          when a customer pays through another provider. It is not refunded if you refund the order (
          <a href={SRC.thirdParty} target="_blank" rel="noopener noreferrer">
            third-party transaction fees
          </a>
          ).
        </li>
      </ul>

      {/* Section: $100 sale */}
      <h2 id="100-sale" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        How much does Shopify take from a A$100 sale?
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        This is the most asked Shopify cost question in Australia. Here is the fee on a single A$100 order, worked
        out from the rates above. It is the card fee only, before your plan, apps or shipping.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">How the customer pays</th>
              <th className="p-3 border text-left">Basic</th>
              <th className="p-3 border text-left">Grow</th>
              <th className="p-3 border text-left">Advanced</th>
              <th className="p-3 border text-left">Plus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3">Australian Visa or Mastercard, online</td>
              <td className="border p-3 font-semibold">A$2.00</td>
              <td className="border p-3">A$1.85</td>
              <td className="border p-3">A$1.65</td>
              <td className="border p-3">A$1.45</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Amex, online</td>
              <td className="border p-3">A$3.20</td>
              <td className="border p-3">A$3.10</td>
              <td className="border p-3">A$3.00</td>
              <td className="border p-3">A$2.90</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">International card, online</td>
              <td className="border p-3">A$3.80</td>
              <td className="border p-3">A$3.70</td>
              <td className="border p-3">A$3.60</td>
              <td className="border p-3">A$3.50</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Card tapped in store</td>
              <td className="border p-3">A$1.85</td>
              <td className="border p-3">A$1.75</td>
              <td className="border p-3">A$1.65</td>
              <td className="border p-3">A$1.45</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Third-party provider (Shopify&apos;s fee only)</td>
              <td className="border p-3">A$2.00 + provider fee</td>
              <td className="border p-3">A$1.00 + provider fee</td>
              <td className="border p-3">A$0.60 + provider fee</td>
              <td className="border p-3">A$0.20 + provider fee</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        The last row is the one that surprises people. On Basic, a store that takes cards through another provider
        pays Shopify A$2.00 on a A$100 sale <em>and</em> the provider&apos;s own processing fee. That is why Shopify
        Payments is the cheaper choice for most Australian stores, and why the jump from 2% to 1% is often the real
        reason a store moves from Basic to Grow.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/shopify-cost-australia-2026-fees.webp"
          alt="Two owners of a small online homewares business in a bright Brisbane Queenslander kitchen, reviewing a simple bar chart of their monthly costs on a tablet"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Work out your fees from your own order mix: how many customers pay by Amex, from overseas, or in store.
        </figcaption>
      </figure>

      {/* Section: upgrade maths */}
      <h2 id="upgrade" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        When does a bigger Shopify plan pay for itself?
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Higher plans cost more each month but take a smaller cut of each sale. So there is a sales level where the
        lower fee covers the higher plan price. We worked it out from Shopify&apos;s Australian prices, for domestic
        online card sales through Shopify Payments. The 30c part is the same on every plan, so only the percentage
        matters.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Upgrade</th>
              <th className="p-3 border text-left">Extra plan cost a month (yearly billing)</th>
              <th className="p-3 border text-left">Card fee saving</th>
              <th className="p-3 border text-left">Monthly card sales where it breaks even</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3">Basic to Grow</td>
              <td className="border p-3">A$72</td>
              <td className="border p-3">0.15%</td>
              <td className="border p-3 font-semibold">About A$48,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Basic to Grow, paid monthly</td>
              <td className="border p-3">A$93</td>
              <td className="border p-3">0.15%</td>
              <td className="border p-3">About A$62,000</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Grow to Advanced</td>
              <td className="border p-3">A$317</td>
              <td className="border p-3">0.2%</td>
              <td className="border p-3 font-semibold">About A$158,500</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Advanced to Plus (3-year term)</td>
              <td className="border p-3">A$3,269</td>
              <td className="border p-3">0.2%</td>
              <td className="border p-3">About A$1.63 million</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Basic to Grow, using a third-party provider</td>
              <td className="border p-3">A$72</td>
              <td className="border p-3">1% (2% down to 1%)</td>
              <td className="border p-3 font-semibold">About A$7,200</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mb-6">
        Our calculation: extra monthly plan cost divided by the fee saving. Prices from shopify.com/au/pricing and
        shopify.com/au/plus/pricing, 26 September 2026.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The honest reading of this table: on fees alone, most small Australian stores should stay on Basic for longer
        than they think. The good reasons to upgrade earlier are features:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        <li>More than one person needs their own login (Grow gives up to 5 staff accounts).</li>
        <li>You use a third-party payment provider, where the fee drop from 2% to 1% pays back quickly.</li>
        <li>You want live shipping rates from carriers at checkout, which starts on Advanced.</li>
        <li>You sell into several countries and need to tailor your store by region (Advanced).</li>
        <li>You need a fully customisable checkout or unlimited B2B catalogues (Plus only).</li>
      </ol>

      {/* Section: Plus */}
      <h2 id="plus" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Shopify Plus cost in Australia
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shopify Plus is the enterprise plan. According to{' '}
        <a href={SRC.plus} target="_blank" rel="noopener noreferrer">
          Shopify&apos;s Australian Plus pricing page
        </a>{' '}
        (read 26 September 2026):
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Platform fee:</strong> A$3,700 a month on a 3-year term, or A$4,000 a month on a 1-year term, for
          standard setups and integrations.
        </li>
        <li>
          <strong>Variable fee:</strong> more complex, higher-volume businesses move to a variable platform fee based
          on revenue and business model. Shopify asks you to contact sales for this.
        </li>
        <li>
          <strong>Stores:</strong> your main store and 9 expansion stores are included, for one brand. Extra stores
          cost A$500 a month each. Each separate brand needs its own Plus contract.
        </li>
        <li>
          <strong>Transaction fees:</strong> with Shopify Payments as your main gateway, third-party fees are waived.
          With a third-party processor as your main gateway, Shopify charges 0.20% per transaction.
        </li>
        <li>
          <strong>Migration:</strong> Shopify does not charge to migrate you to Plus, but custom work and data
          migration are your responsibility and usually need a Shopify Plus partner.
        </li>
        <li>
          <strong>Cancelling:</strong> on a 1-year or 3-year Plus term you can cancel when the term ends.
        </li>
      </ul>
      <h3 className="text-xl font-display font-bold text-gray-900 mt-8 mb-3">Shopify vs Shopify Plus at a glance</h3>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">What you need</th>
              <th className="p-3 border text-left">Basic, Grow or Advanced</th>
              <th className="p-3 border text-left">Shopify Plus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3">Monthly plan (yearly billing or term)</td>
              <td className="border p-3">A$42 to A$431</td>
              <td className="border p-3">From A$3,700</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Best online card rate</td>
              <td className="border p-3">1.35% + 30c (Advanced)</td>
              <td className="border p-3">1.15% + 30c</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Staff accounts</td>
              <td className="border p-3">Up to 15</td>
              <td className="border p-3">Unlimited</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Checkout</td>
              <td className="border p-3">Limited customisation</td>
              <td className="border p-3">Fully customisable</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">B2B catalogues</td>
              <td className="border p-3">Up to 3</td>
              <td className="border p-3">Unlimited</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">POS Pro locations</td>
              <td className="border p-3">A$129 a month per location</td>
              <td className="border p-3">20 included, up to 200 with Shopify Payments</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Support</td>
              <td className="border p-3">24/7 live chat (enhanced on Advanced)</td>
              <td className="border p-3">Priority 24/7 phone support</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        The build is usually the bigger cost than the subscription. WP Creative&apos;s May 2026 guide puts a Shopify
        Plus build at A$30,000 to A$100,000 or more in Australia (
        <a href={SRC.wpCreative} target="_blank" rel="noopener noreferrer">
          source
        </a>
        ). If you are weighing Plus for B2B or wholesale, our{' '}
        <a href="/au/shopify-development">Shopify development team in Australia</a> can tell you whether a standard
        plan with the right apps would do the job first.
      </p>

      {/* Section: BNPL */}
      <h2 id="bnpl" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Afterpay, Zip and PayPal: what they add to a Shopify store
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Buy now, pay later (BNPL) is part of how Australians shop, so most Australian stores offer Afterpay, Zip or
        both. They cost more per order than cards, and they do not publish one fixed rate.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Method</th>
              <th className="p-3 border text-left">What it costs the store</th>
              <th className="p-3 border text-left">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3">Afterpay</td>
              <td className="border p-3">
                A fixed fee plus a percentage, set in your merchant agreement. Typical Australian market range: 4% to
                6% plus 30c per order.
              </td>
              <td className="border p-3">
                <a href={SRC.afterpay} target="_blank" rel="noopener noreferrer">
                  Afterpay
                </a>{' '}
                (structure);{' '}
                <a href={SRC.kcAfterpay} target="_blank" rel="noopener noreferrer">
                  KC Web Design, 2026
                </a>{' '}
                (range)
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Zip</td>
              <td className="border p-3">
                Free to join, no setup or ongoing fees. A merchant service fee (a percentage) and a flat
                per-transaction fee, confirmed when you apply. Zip does not publish the rate.
              </td>
              <td className="border p-3">
                <a href={SRC.zip} target="_blank" rel="noopener noreferrer">
                  Zip merchant help centre
                </a>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">PayPal Express Checkout</td>
              <td className="border p-3">
                PayPal&apos;s own fees. Shopify does not add its third-party fee on PayPal Express Checkout orders when
                you use Shopify Payments.
              </td>
              <td className="border p-3">
                <a href={SRC.thirdParty} target="_blank" rel="noopener noreferrer">
                  Shopify help centre
                </a>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Shopify&apos;s third-party fee</td>
              <td className="border p-3">
                Afterpay and Zip are not on Shopify&apos;s list of payment methods exempt from third-party
                transaction fees, so check your bill: on Basic that fee is 2% of the order.
              </td>
              <td className="border p-3">
                <a href={SRC.thirdParty} target="_blank" rel="noopener noreferrer">
                  Shopify help centre
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Worked example: on a A$100 Afterpay order at the 4% to 6% plus 30c market range, Afterpay&apos;s fee is
        A$4.30 to A$6.30. If Shopify&apos;s 2% third-party fee also applies on Basic, the total is A$6.30 to A$8.30,
        against A$2.00 for the same order on a card. BNPL can still be worth it if it lifts your conversion rate or
        order size. Test it, then look at your real fees after a month.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/shopify-cost-australia-2026-checkout.webp"
          alt="A customer tapping her phone on a plain card reader at the counter of a bright clothing boutique in Paddington, Sydney, while the owner holds her shopping bag"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          In-person card sales through Shopify POS cost 1.85% on Basic, with no 30c fixed fee.
        </figcaption>
      </figure>

      {/* Section: GST */}
      <h2 id="gst" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        GST and Shopify in Australia
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">There are two separate GST questions, and people often mix them up.</p>
      <h3 className="text-xl font-display font-bold text-gray-900 mt-6 mb-3">1. GST on what Shopify charges you</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shopify&apos;s help centre says Australian stores pay 10% GST on their Shopify subscription and any shipping
        labels. If you are registered for GST, you can stop this by adding your ABN (your Australian Business Number):
        go to Settings, then Billing, then Billing profile, choose that you are GST registered and enter your ABN. The
        exemption only applies to bills issued after you add it, not to bills already pending (
        <a href={SRC.gst} target="_blank" rel="noopener noreferrer">
          Shopify help centre
        </a>
        ).
      </p>
      <h3 className="text-xl font-display font-bold text-gray-900 mt-6 mb-3">2. GST you charge your customers</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        You must register for GST once your GST turnover reaches A$75,000 a year (
        <a href={SRC.atoGst} target="_blank" rel="noopener noreferrer">
          ATO
        </a>
        ). Once registered, set your prices and tax settings in Shopify so GST is shown correctly at checkout and on
        invoices. Ask your accountant how your card and BNPL fees should be treated in your BAS. Market ranges quoted by
        agencies and developers often do not say whether GST is included, so always ask for quotes ex-GST and
        inc-GST.
      </p>

      {/* Mid-page CTA */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 my-10 text-sm md:text-base text-gray-700">
        <p className="font-bold text-gray-900 mb-2">Want a fixed quote instead of a range?</p>
        <p className="mb-4">
          Tell us what you sell, how many products you have and which systems the store must connect to (for example
          Xero, MYOB or Australia Post). We will give you a written, fixed scope for the build, and tell you plainly
          which plan and apps you actually need.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      {/* Section: running costs */}
      <h2 id="running-costs" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Apps, themes, domains and other Shopify running costs
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shopify does not set these prices. App developers, theme designers and domain registrars do. The ranges below
        are typical Australian market ranges from{' '}
        <a href={SRC.wpCreative} target="_blank" rel="noopener noreferrer">
          WP Creative&apos;s Shopify cost guide
        </a>{' '}
        (May 2026) and{' '}
        <a href={SRC.webential} target="_blank" rel="noopener noreferrer">
          Webential&apos;s Shopify development cost guide
        </a>{' '}
        (May 2026). Neither source says whether its figures include GST.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Cost</th>
              <th className="p-3 border text-left">Typical Australian market range</th>
              <th className="p-3 border text-left">How often</th>
              <th className="p-3 border text-left">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3">Premium theme</td>
              <td className="border p-3">A$300 to A$560 (WP Creative); A$100 to A$500 (Webential). Free themes cost A$0.</td>
              <td className="border p-3">One-off</td>
              <td className="border p-3">WP Creative, Webential, May 2026</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Apps and integrations</td>
              <td className="border p-3">A$50 to A$500+ a month</td>
              <td className="border p-3">Monthly</td>
              <td className="border p-3">WP Creative, May 2026</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">.com.au domain</td>
              <td className="border p-3">About A$15 to A$20 a year</td>
              <td className="border p-3">Yearly</td>
              <td className="border p-3">WP Creative, May 2026</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Business email (for example Google Workspace)</td>
              <td className="border p-3">A$8 to A$15 per user a month</td>
              <td className="border p-3">Monthly</td>
              <td className="border p-3">WP Creative, May 2026</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">POS Pro (physical shops)</td>
              <td className="border p-3">A$129 per location a month</td>
              <td className="border p-3">Monthly</td>
              <td className="border p-3">Shopify, 26 Sept 2026</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Maintenance retainer</td>
              <td className="border p-3">From about A$2,500 a month for an agency retainer</td>
              <td className="border p-3">Monthly (optional)</td>
              <td className="border p-3">WP Creative, May 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Apps are where Shopify running costs grow fastest and most quietly. Common paid apps for Australian stores
        cover reviews, email marketing, subscriptions, loyalty, accounting sync with Xero or MYOB, and shipping with
        Australia Post and other couriers. Two habits keep the bill down:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Check whether Shopify already does the job before you install an app for it.</li>
        <li>
          Every three months, open Settings, then Billing, list every app charge, and remove what you no longer use.
        </li>
      </ul>

      {/* Section: developer costs */}
      <h2 id="developer-cost" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Shopify developer and agency costs in Australia
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        &quot;How much does it cost to hire a Shopify developer?&quot; showed up in seven of the Australian People
        Also Ask boxes we checked. Here are the published answers, side by side. These are market
        ranges, not FactoryJet prices.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Type of work</th>
              <th className="p-3 border text-left">Typical Australian market range</th>
              <th className="p-3 border text-left">Source (month)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3">Hourly rate</td>
              <td className="border p-3">A$50 to A$150 an hour; A$70 to A$250 an hour</td>
              <td className="border p-3">Webential; WP Creative (May 2026)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Small theme customisation</td>
              <td className="border p-3">A$500 to A$2,000</td>
              <td className="border p-3">WP Creative (May 2026)</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Do-it-yourself store, first year</td>
              <td className="border p-3">A$500 to A$1,000</td>
              <td className="border p-3">WP Creative (May 2026)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Basic store setup</td>
              <td className="border p-3">A$1,500 to A$3,000</td>
              <td className="border p-3">Webential (May 2026)</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Freelancer-built store</td>
              <td className="border p-3">A$2,000 to A$10,000</td>
              <td className="border p-3">WP Creative (May 2026)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Migration to Shopify</td>
              <td className="border p-3">From A$2,000</td>
              <td className="border p-3">Webential (May 2026)</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Advanced custom development</td>
              <td className="border p-3">From A$5,000</td>
              <td className="border p-3">Webential (May 2026)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Agency-built store</td>
              <td className="border p-3">A$10,000 to A$50,000</td>
              <td className="border p-3">WP Creative (May 2026)</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Enterprise or headless build</td>
              <td className="border p-3">From A$20,000</td>
              <td className="border p-3">Webential (May 2026)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Shopify Plus build</td>
              <td className="border p-3">A$30,000 to A$100,000+</td>
              <td className="border p-3">WP Creative (May 2026)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mb-6">
        Sources:{' '}
        <a href={SRC.wpCreative} target="_blank" rel="noopener noreferrer">
          WP Creative, Shopify website cost guide
        </a>{' '}
        (published 6 May 2026);{' '}
        <a href={SRC.webential} target="_blank" rel="noopener noreferrer">
          Webential, Shopify development cost in Australia
        </a>{' '}
        (published 5 May 2026). GST treatment not stated by either source.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/shopify-cost-australia-2026-developer.webp"
          alt="A Shopify developer in a bright Perth studio arranging coloured sticky notes into a store page wireframe on a whiteboard while the store owner watches from the table"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A written scope, agreed before any code is written, is the best protection against a quote that grows.
        </figcaption>
      </figure>

      <h3 className="text-xl font-display font-bold text-gray-900 mt-8 mb-3">What drives the price of a Shopify build</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Two stores can both be called &quot;a Shopify website&quot; and cost ten times apart. These eight things
        explain most of the gap:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Theme or custom design.</strong> Adapting a good theme is far quicker than designing and building
          every page from scratch.
        </li>
        <li>
          <strong>Number of products and variants.</strong> Importing and cleaning 50 products is a day. Importing
          5,000 with sizes, colours and bundles is a project.
        </li>
        <li>
          <strong>Integrations.</strong> Each connection to Xero, MYOB, an ERP (your stock and ordering system), a
          warehouse or Australia Post adds setup and testing.
        </li>
        <li>
          <strong>Migration.</strong> Moving products, customers, orders and old URLs from WooCommerce, Magento or
          Neto needs redirects so you do not lose Google rankings.
        </li>
        <li>
          <strong>B2B and wholesale.</strong> Trade price lists, account logins and payment terms add work, and some
          need Shopify Plus.
        </li>
        <li>
          <strong>Custom features.</strong> Product builders, subscriptions and custom checkout rules need a developer
          or a custom app.
        </li>
        <li>
          <strong>Content and photos.</strong> Writing product descriptions and producing photos is often the most
          underestimated cost.
        </li>
        <li>
          <strong>Support after launch.</strong> Someone has to update apps, fix issues and add features. Ask who
          does it, and how.
        </li>
      </ol>

      <h3 className="text-xl font-display font-bold text-gray-900 mt-8 mb-3">Do it yourself, freelancer or agency?</h3>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">&nbsp;</th>
              <th className="p-3 border text-left">Do it yourself</th>
              <th className="p-3 border text-left">Freelancer</th>
              <th className="p-3 border text-left">Agency or Shopify Partner team</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3 font-semibold">Good fit</td>
              <td className="border p-3">Testing a product, small catalogue</td>
              <td className="border p-3">A polished theme store with some custom sections</td>
              <td className="border p-3">Migrations, integrations, B2B, custom features</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold">Main cost</td>
              <td className="border p-3">Your time</td>
              <td className="border p-3">Project fee or hourly rate</td>
              <td className="border p-3">Fixed project fee, then optional support</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold">Main risk</td>
              <td className="border p-3">Slow launch, weaker result</td>
              <td className="border p-3">Availability if they get busy or move on</td>
              <td className="border p-3">Paying for more process than you need</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold">Ask before you sign</td>
              <td className="border p-3">How many hours can you really give it?</td>
              <td className="border p-3">Who fixes it if something breaks after launch?</td>
              <td className="border p-3">Who owns the code and accounts when the project ends?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-gray-700 leading-relaxed">Five questions to ask any Shopify developer before you accept a quote:</p>
      <div className="space-y-3 mb-8">
        <details className="border border-gray-200 rounded-xl p-4 bg-white">
          <summary className="font-semibold text-gray-900 cursor-pointer">Is the price fixed, and what is out of scope?</summary>
          <p className="mt-3 text-gray-700">
            A fixed price only protects you if the scope is written down. Ask for a list of pages, features, apps and
            integrations included, and what happens if you add something later.
          </p>
        </details>
        <details className="border border-gray-200 rounded-xl p-4 bg-white">
          <summary className="font-semibold text-gray-900 cursor-pointer">Does the quote include GST?</summary>
          <p className="mt-3 text-gray-700">
            Published ranges often skip this. A 10% difference matters on a five-figure build, so ask for both
            numbers.
          </p>
        </details>
        <details className="border border-gray-200 rounded-xl p-4 bg-white">
          <summary className="font-semibold text-gray-900 cursor-pointer">Which paid apps will my store need, and what do they cost?</summary>
          <p className="mt-3 text-gray-700">
            A cheap build that depends on ten paid apps can cost more over two years than a build that uses fewer.
            Ask for the monthly app total before you sign.
          </p>
        </details>
        <details className="border border-gray-200 rounded-xl p-4 bg-white">
          <summary className="font-semibold text-gray-900 cursor-pointer">Who owns the store, theme and accounts?</summary>
          <p className="mt-3 text-gray-700">
            The Shopify account, domain, theme code and app accounts should be in your name. You should be able to
            change developers without starting again.
          </p>
        </details>
        <details className="border border-gray-200 rounded-xl p-4 bg-white">
          <summary className="font-semibold text-gray-900 cursor-pointer">What happens after launch?</summary>
          <p className="mt-3 text-gray-700">
            Ask how long launch support lasts, how fixes are charged after that, and who you contact. The expensive
            agencies are not the ones that charge more. They are the ones that disappear after launch.
          </p>
        </details>
      </div>

      {/* Section: budgets */}
      <h2 id="budgets" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        How much does a Shopify website cost? Three first-year budgets
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        These examples add Shopify&apos;s verified plan prices (paid yearly) to the published market ranges above.
        They leave out card fees, which depend on your sales, and marketing. Treat them as a planning guide, not a
        quote.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">&nbsp;</th>
              <th className="p-3 border text-left">1. Do-it-yourself starter</th>
              <th className="p-3 border text-left">2. Theme store, freelancer build</th>
              <th className="p-3 border text-left">3. Agency build with integrations</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3 font-semibold">Plan (12 months, paid yearly)</td>
              <td className="border p-3">Basic: A$504</td>
              <td className="border p-3">Grow: A$1,368</td>
              <td className="border p-3">Advanced: A$5,172</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold">Theme</td>
              <td className="border p-3">Free: A$0</td>
              <td className="border p-3">Premium: A$300 to A$560</td>
              <td className="border p-3">Included in the build</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold">Build</td>
              <td className="border p-3">Your own time</td>
              <td className="border p-3">A$2,000 to A$10,000</td>
              <td className="border p-3">A$10,000 to A$50,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold">Apps (12 months)</td>
              <td className="border p-3">Free apps only</td>
              <td className="border p-3">A$600 to A$6,000</td>
              <td className="border p-3">A$600 to A$6,000</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold">.com.au domain</td>
              <td className="border p-3">About A$15 to A$20</td>
              <td className="border p-3">About A$15 to A$20</td>
              <td className="border p-3">About A$15 to A$20</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold">First-year total</td>
              <td className="border p-3 font-semibold">About A$520 to A$525</td>
              <td className="border p-3 font-semibold">About A$4,300 to A$17,950</td>
              <td className="border p-3 font-semibold">About A$15,800 to A$61,200</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mb-6">
        Plan prices: shopify.com/au/pricing, 26 September 2026. Theme, build, app and domain ranges: WP Creative (May
        2026). Budget 3 excludes any monthly maintenance retainer. GST treatment of third-party ranges not stated by
        the source.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        For a wider view of website budgets, including non-Shopify sites, see our{' '}
        <a href="/blog/website-cost-australia-2026">website cost guide for Australia</a>. If you are still choosing a
        platform, our <a href="/blog/best-ecommerce-platform-australia-2026">best ecommerce platform in Australia</a>{' '}
        guide compares Shopify with the main alternatives.
      </p>

      {/* Section: save */}
      <h2 id="save" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Nine ways to cut your Shopify costs in Australia
      </h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
        <li>
          <strong>Pay yearly.</strong> It saves A$168 a year on Basic, A$420 on Grow and A$1,728 on Advanced.
        </li>
        <li>
          <strong>Use Shopify Payments.</strong> It removes the third-party transaction fee of 2% on Basic.
        </li>
        <li>
          <strong>Add your ABN.</strong> If you are GST-registered, adding your ABN stops Shopify charging 10% GST on
          your subscription and shipping labels.
        </li>
        <li>
          <strong>Do not upgrade for fees alone too early.</strong> On domestic cards, Basic to Grow only pays for
          itself at about A$48,000 a month in card sales.
        </li>
        <li>
          <strong>Start with a free theme.</strong> Upgrade the design once you know what your customers respond to.
        </li>
        <li>
          <strong>Audit apps every quarter.</strong> Remove anything you installed for a test and forgot.
        </li>
        <li>
          <strong>Watch your card mix.</strong> Amex and international cards cost more. If most of your buyers are
          overseas, price that in.
        </li>
        <li>
          <strong>Scope before you build.</strong> A clear written scope is the cheapest way to avoid paying twice for
          the same feature.
        </li>
        <li>
          <strong>Look after SEO from day one.</strong> Fixing collections, titles and redirects later costs more than
          setting them up properly. Our <a href="/au/ecommerce-seo">ecommerce SEO service for Australian stores</a>{' '}
          covers Shopify, and our <a href="/blog/seo-cost-australia-2026">SEO cost guide for Australia</a> lists
          market ranges.
        </li>
      </ol>

      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Where FactoryJet fits
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We design, build and support Shopify stores for Australian businesses, from a first store to B2B and
        wholesale setups with Xero, MYOB and courier integrations. We are a registered Shopify Partner, we quote a
        fixed scope before work starts, and you own the store, theme and accounts. After launch we stay on to keep it
        running.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <a href="/au/shopify-development">Shopify development in Australia</a>: new stores, migrations and Shopify
          Plus.
        </li>
        <li>
          <a href="/au/ecommerce-development">Ecommerce development in Australia</a>: custom and B2B commerce builds.
        </li>
        <li>
          <a href="/au/website-maintenance">Website maintenance in Australia</a>: care plans after launch.
        </li>
        <li>
          <a href="/au">FactoryJet Australia</a>: everything we do for Australian businesses.
        </li>
      </ul>

      {/* Section: sources */}
      <h2 id="sources" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        How we checked these numbers
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We opened every source below on 26 September 2026 and found each number on the page. Shopify changes prices
        and fees from time to time, so the price in your own Shopify admin is always the one that counts.
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700 text-sm">
        <li>
          <a href={SRC.pricing} target="_blank" rel="noopener noreferrer">Shopify Australia pricing</a>: plan prices,
          card rates, third-party fees, POS Pro, trial and marketplace fees.
        </li>
        <li>
          <a href={SRC.plus} target="_blank" rel="noopener noreferrer">Shopify Plus pricing (Australia)</a>: Plus
          terms, variable fee, expansion stores and the 0.20% third-party rate.
        </li>
        <li>
          <a href={SRC.gst} target="_blank" rel="noopener noreferrer">Shopify help: GST on bills in Australia</a>.
        </li>
        <li>
          <a href={SRC.thirdParty} target="_blank" rel="noopener noreferrer">
            Shopify help: third-party transaction fees
          </a>
          .
        </li>
        <li>
          <a href={SRC.payouts} target="_blank" rel="noopener noreferrer">
            Shopify help: payouts and settlement in Australia
          </a>
          .
        </li>
        <li>
          <a href={SRC.wpCreative} target="_blank" rel="noopener noreferrer">WP Creative</a> and{' '}
          <a href={SRC.webential} target="_blank" rel="noopener noreferrer">Webential</a>: Australian developer,
          agency, theme and app ranges (May 2026).
        </li>
        <li>
          <a href={SRC.afterpay} target="_blank" rel="noopener noreferrer">Afterpay merchant fees</a>,{' '}
          <a href={SRC.kcAfterpay} target="_blank" rel="noopener noreferrer">KC Web Design</a> and{' '}
          <a href={SRC.zip} target="_blank" rel="noopener noreferrer">Zip merchant costs</a>.
        </li>
        <li>
          <a href={SRC.atoGst} target="_blank" rel="noopener noreferrer">ATO: registering for GST</a> and{' '}
          <a href={SRC.accc} target="_blank" rel="noopener noreferrer">ACCC: consumer guarantees</a>.
        </li>
      </ul>

      {/* Final CTA */}
      <div className="bg-[#FAFAF7] border border-gray-200 rounded-2xl p-6 md:p-8 mt-12">
        <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
          Get a fixed Shopify quote for your store
        </h3>
        <p className="text-gray-700 max-w-2xl text-sm md:text-base leading-relaxed mb-6">
          Share what you sell and what the store must connect to. We will tell you which Shopify plan fits, which
          apps you can skip, and what a fixed-scope build would include. You own everything we build.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-xl transition-colors"
          >
            Talk to the Founder
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 font-semibold text-sm md:text-base px-6 py-3.5 rounded-xl transition-colors"
          >
            Send project details
          </a>
        </div>
      </div>
    </>
  ),
};
