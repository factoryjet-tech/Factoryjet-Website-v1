import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'how-to-set-up-shopify-b2b';
const IMG = `/images/blog/${SLUG}`;
const READ_ON = '24 November 2026';

// Every Shopify fact below was read on Shopify's own pages on 24 November 2026.
// help.shopify.com answers curl with a Cloudflare challenge (HTTP 403), so the
// Help Center pages were read in a normal browser tab; shopify.com and
// shopify.dev pages were fetched with curl. URL + quote for each fact is in
// docs/reports/us-december-2026-11-24/how-to-set-up-shopify-b2b/ledger.json
// (main checkout). Plan split agrees with /services/shopify-plus-b2b.

const link = 'text-[#B23E13] underline underline-offset-2';
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const th = 'text-left font-semibold px-3 py-2 border-b border-gray-300';
const td = 'px-3 py-2 border-b border-gray-200 align-top';

/* One short plan table, from Shopify's B2B plan-features page. Kept to the rows a setup decision turns on. */
const PLAN_ROWS: { feature: string; lower: string; plus: string }[] = [
  { feature: 'Companies, locations, buyer permissions', lower: 'Yes', plus: 'Yes' },
  { feature: 'Catalog assignments to B2B markets', lower: 'Up to 3 active', plus: 'Unlimited' },
  { feature: 'Price list for a single company or location (direct catalog)', lower: 'No', plus: 'Yes' },
  { feature: 'Quantity rules and quantity price breaks', lower: 'Yes', plus: 'Yes' },
  { feature: 'Net terms, payment reminders, ACH, vaulted cards', lower: 'Yes', plus: 'Yes' },
  { feature: 'Deposit requirements and partial payments; a payment request per fulfillment', lower: 'No', plus: 'Yes' },
  { feature: 'Orders submitted as drafts; invoices from draft orders; PO numbers', lower: 'Yes', plus: 'Yes' },
  { feature: 'Sales staff permissions', lower: 'Grow and Advanced only', plus: 'Yes' },
];

const FAQS: FAQItem[] = [
  {
    q: 'What does B2B mean in Shopify?',
    a: 'B2B means business to business: you sell to other companies, such as retailers, distributors or contractors, instead of to shoppers. In Shopify it is a set of admin features. Each trade customer becomes a company with locations and buyers, and each location gets its own catalog, payment terms, tax settings and checkout rules. Buyers sign in to see their prices.',
  },
  {
    q: 'Is Shopify B2B or B2C?',
    a: 'Both. Shopify started as a store builder for selling to consumers (B2C, or D2C in Shopify’s wording), and B2B features are built into the same admin. Shopify lets you run a blended store, where retail shoppers and trade buyers share one store and one stock count, or a dedicated store used only for wholesale. Shopify warns that switching between the two later means redoing most of the setup.',
  },
  {
    q: 'Can I sell wholesale on Shopify without Shopify Plus?',
    a: 'Yes. Shopify’s Help Center lists Basic, Grow, Advanced and Plus as the plans that can use B2B; Starter and Retail cannot. Without Plus you still get companies, catalogs, net payment terms, order quantity rules and draft orders for review. The two main limits are 3 active catalog assignments to B2B markets, and no catalog for a single company. Deposit requirements and partial payments also need Plus.',
  },
  {
    q: 'How much does Shopify B2B cost?',
    a: 'Shopify says B2B features are included at no extra cost on Basic, Grow, Advanced and Plus, so you pay the plan fee. Shopify’s US blog, updated 6 November 2026, lists Basic at $29, Grow at $79 and Advanced at $299 a month paid yearly, and Plus at $2,300 a month on a three-year term. Shopify also notes that B2B and retail orders can carry different variable platform fee rates.',
  },
  {
    q: 'Which Shopify plans include B2B?',
    a: 'Basic, Grow, Advanced and Shopify Plus, per Shopify’s B2B features-by-plan page read on 24 November 2026. Starter and Retail do not include it. Sales staff permissions need Grow or higher, contextual checkout through Markets needs Advanced or higher, and direct company catalogs, deposits and partial payments are Plus only.',
  },
  {
    q: 'What is the difference between Shopify B2B on Advanced and on Plus?',
    a: 'On Advanced you assign catalogs to B2B markets, with a cap of 3 active assignments. On Plus the cap is gone, and a catalog can also be attached directly to a single company or location, which is how each customer gets its own negotiated price list. Plus adds deposit requirements, partial payments and payment requests for each fulfillment.',
  },
  {
    q: 'Do I need an app for Shopify B2B?',
    a: 'There is no single Shopify B2B app to install for the core setup. Companies, catalogs, payment terms, quantity rules and the B2B sign-in are all in the Shopify admin. Shopify’s own setup checklist names a few apps for specific jobs: Matrixify for importing companies in bulk, Checkout Blocks (free) for showing different payment and shipping options to trade and retail buyers, and Shopify Forms for letting new buyers request an account.',
  },
  {
    q: 'Is the Shopify Wholesale channel still the way to sell wholesale?',
    a: 'Older guides describe a separate Wholesale channel. The B2B section of Shopify’s Help Center, read on 24 November 2026, documents wholesale through companies, catalogs and payment terms in the main admin, and that is the setup this guide follows, from customer accounts to a test order.',
  },
  {
    q: 'How many catalogs can I have on Shopify B2B?',
    a: 'On Basic, Grow and Advanced you can have up to 3 active catalog assignments across active B2B markets. One catalog assigned to 2 markets uses 2 of the 3. Setting a catalog to Draft frees its slot. On Plus the 3-assignment cap does not apply. On every plan, one company location can have at most 25 catalogs, counting market and direct assignments together.',
  },
  {
    q: 'Can each wholesale customer get its own price list?',
    a: 'On Shopify Plus, yes: you assign a catalog directly to a company or a company location, and that customer sees only its prices. Lower plans attach catalogs to B2B markets rather than to single companies, so customers in the same market share prices, and you have 3 active assignments to spread across your markets. For a one-off negotiated price, a staff member can set a custom line price on a B2B draft order.',
  },
  {
    q: 'What do net 7 terms mean on Shopify?',
    a: 'Net 7 means the buyer has 7 days to pay after placing the order. Shopify counts every net term from the day the order is placed. Shopify also offers 15, 30, 45, 60 and 90 day terms, plus due on fulfillment. Buyers can pay early from their account with Pay now; once the due date passes, Shopify marks the order Overdue.',
  },
  {
    q: 'Can I offer net 25 or other custom payment terms?',
    a: 'Not as a standard term on a company location. For a location, Shopify offers 7, 15, 30, 45, 60 or 90 day net terms, or due on fulfillment. For a one-off date, a draft order can use a fixed due date. Terms that change with the cart, such as a different term above a certain order value, need a custom Payment Customization Function or an App Store app.',
  },
  {
    q: 'Can I take a deposit on a wholesale order in Shopify?',
    a: 'Only on Shopify Plus. There you can require a percentage deposit, such as 20%, on a company, a company location or a single draft order. The buyer pays the deposit at checkout by card or a manual method such as bank deposit, the order shows as Partially paid, and the rest falls due on the payment terms you set.',
  },
  {
    q: 'Does Shopify charge the buyer automatically when net terms end?',
    a: 'No. Shopify states on its payment terms page that it does not capture payment automatically when terms run out. If a buyer saved a card on the order, someone on your team charges that card from the Shopify admin. Payment reminders can go out on every B2B plan, and buyers can pay any time from their customer account.',
  },
  {
    q: 'How do wholesale buyers log in to a Shopify B2B store?',
    a: 'Through customer accounts. The buyer enters the email address linked to their company location and types a one-time code that Shopify emails them. No password is needed. Shopify does not allow legacy customer accounts for B2B, so customer accounts must be switched on first. A buyer with access to several locations picks one after signing in.',
  },
  {
    q: 'Can wholesale buyers use Shop Pay or Apple Pay?',
    a: 'Not at B2B checkout. Shopify lists accelerated checkouts, including Shop Pay, Apple Pay, Google Pay and Amazon Pay, as incompatible with B2B. Subscriptions, pickup points, tipping and local delivery (except on draft orders your staff create) are on the same list. Trade buyers can pay by card, by ACH bank payment in the United States, with a vaulted card, or on terms.',
  },
  {
    q: 'Can I review B2B orders before they are confirmed?',
    a: 'Yes. Turn on "Submit all orders as drafts for review" for a company location, a whole company or many companies at once. Every order from that location then arrives as a draft. The buyer sees a banner saying payment is due once the order is confirmed, and no payment is taken at checkout. After review you charge a saved card or send an invoice.',
  },
  {
    q: 'How do I set minimum order quantities and case packs on Shopify?',
    a: 'Open the catalog in Markets, then Catalogs, choose Manage products and pricing and add quantity rules. Each variant can have an increment, a minimum and a maximum. An increment of 10 makes buyers order 10, 20 or 30. Rules apply per variant, so 5 gray and 5 blue hats do not meet a minimum of 10. Volume price breaks are set in the same dialog.',
  },
  {
    q: 'How do tax exemptions work for wholesale buyers in the US?',
    a: 'Shopify lets you set tax exemptions on a company or a company location, and calculates tax on B2B orders automatically. Shopify’s Admin API lists a reseller exemption code for every US state plus Washington DC. Collecting and checking resale certificates is a separate job. Brands selling into many states often add Avalara AvaTax or Vertex to handle certificates.',
  },
  {
    q: 'How do I connect Shopify B2B to NetSuite or QuickBooks?',
    a: 'Give each company and location the same ID it has in your ERP (Shopify has fields for both), then decide which system owns prices, stock, terms and credit limits. Shopify’s B2B page names integrations from NetSuite, Microsoft Dynamics 365 Business Central and Acumatica. FactoryJet builds that sync for QuickBooks, NetSuite, Odoo, Acumatica or Microsoft Dynamics. Orders flow into the ERP, and stock, prices and open balances flow back to Shopify.',
  },
  {
    q: 'How long does Shopify B2B setup take?',
    a: 'Timing depends mostly on how many contract price lists you load and which ERP has to sync, plus any checkout rules Shopify lacks. A store with one wholesale price list and no ERP sync is mostly admin settings. A store with dozens of contract price lists and a two-way ERP sync is a project. FactoryJet puts dates for each phase in a written proposal after a scoping call.',
  },
  {
    q: 'Who can set up Shopify B2B for me?',
    a: 'A Shopify agency or developer can, and FactoryJet does. We are a registered Shopify Partner, and we handle the companies, catalogs, terms and ERP sync as one project. You see a working draft built on your real products with one of your actual price lists before any contract, each phase has a written fixed price, and the code is yours.',
  },
];

export const post: BlogPost = {
  id: '865',
  slug: SLUG,
  title: 'How to Set Up Shopify B2B in 2026: Step by Step',
  excerpt:
    'Shopify B2B setup in admin order, from customer accounts and companies to catalogs, net terms and a test order, with what each plan includes and the traps that break wholesale stores. Checked against Shopify’s Help Center on 24 November 2026.',
  category: 'E-Commerce Development',
  cta: {
    eyebrow: 'Shopify B2B setup',
    heading: 'Want your wholesale store set up for you?',
    body: 'Send us your price lists, payment terms and ERP. We tell you what Shopify does on your plan, which parts need Plus and which need code, then quote each phase at a fixed price in writing.',
    button: 'Plan my B2B setup',
    serviceHref: '/services/shopify-plus-b2b',
    serviceLabel: 'See our Shopify B2B service',
    modalVariant: 'default',
  },
  author: 'Bhavesh Barot',
  date: 'Nov 24, 2026',
  dateModified: 'Nov 24, 2026',
  readTime: '15 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A woman in her 40s with short dark hair and a navy cardigan works on a laptop showing simple grey blocks at a pale warehouse office desk beside an orange mug.',
  meta: {
    title: 'How to Set Up Shopify B2B in 2026: Step-by-Step Guide',
    description:
      'Set up Shopify B2B in 9 steps: companies, catalogs, net terms, quantity rules and a test order. What each plan includes, checked 24 Nov 2026.',
  },
  keyTakeaways: [
    'You can use Shopify B2B on the Basic, Grow, Advanced and Plus plans at no extra fee. Starter and Retail plans do not include it.',
    'Basic, Grow and Advanced cover companies, catalogs, payment terms, order minimums and draft order review, with a cap of 3 active catalog assignments to B2B markets.',
    'Plus removes the 3-assignment cap, lets a single company have its own catalog, and adds deposit requirements and partial payments.',
    'Switch on customer accounts first. Shopify does not allow legacy customer accounts for B2B, and buyers sign in with an emailed one-time code.',
    'The costly mistakes are a wholesale catalog on a region market (retail shoppers then get trade prices), the wrong store type, and expecting net terms to charge cards on their own.',
    'Test with a fake company and Shopify’s Test payment gateway, then check retail prices in a private window, before you send a single invite.',
  ],
  faqs: FAQS,
  content: (
    <>
      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed">
          To set up Shopify B2B, use the Basic plan or higher and switch on customer accounts. Then create a company for each trade customer, add its buyers, build catalogs with wholesale prices, set net terms and quantity rules, and place a test order. Basic, Grow and Advanced allow 3 active catalog assignments; Plus allows unlimited catalogs and per-customer price lists.
        </p>
      </div>

      <p className="mb-4">
        This guide follows the order the Shopify admin asks for things, step by step, with the admin screen for each. Every Shopify fact was read on Shopify&rsquo;s Help Center, plan pages and developer docs on {READ_ON}.
      </p>
      <p className="mb-6">
        Four terms first. A <strong>company</strong> is one trade customer, such as a hardware chain. A <strong>company location</strong> is one branch or ship-to site of that customer. A <strong>catalog</strong> is Shopify&rsquo;s word for a set of products and the prices one group of buyers sees. <strong>Net terms</strong> give a buyer time to pay; net 30 means 30 days from the order.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Is Shopify B2B or B2C?</h2>
      <p className="mb-4">
        Shopify does both from one admin. You can sell to shoppers (Shopify calls this D2C, direct to consumer) and to businesses in the same store, or keep wholesale in a separate store. Shopify&rsquo;s enterprise B2B page puts it this way: buyers get their own &ldquo;products, pricing, quantity rules, and payment terms&rdquo;, whether you sell only B2B or alongside retail.
      </p>
      <p className="mb-6">
        The sign-in decides who sees what. A signed-in buyer linked to a company location sees that location&rsquo;s catalog, terms and checkout; everyone else is a retail customer.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which Shopify plans include B2B, and what does Shopify B2B cost?</h2>
      <p className="mb-4">
        Shopify B2B is included at no extra cost on Basic, Grow, Advanced and Shopify Plus, according to <a href="https://help.shopify.com/en/manual/b2b/getting-started/considerations" className={link} {...ext}>Shopify&rsquo;s B2B requirements page</a>. It is not available on Starter or Retail. Shopify&rsquo;s US blog, updated 6 November 2026, lists Basic at $29, Grow at $79 and Advanced at $299 a month paid yearly, and Shopify Plus at $2,300 a month on a three-year term. B2B and retail orders can carry different variable platform fee rates; Shopify Support quotes yours.
      </p>
      <p className="mb-4">
        So the real Shopify B2B pricing question is which plan your price lists need. Most Shopify B2B features are on every eligible plan; this table holds the differences that change a setup, from <a href="https://help.shopify.com/en/manual/b2b/getting-started/plan-features" className={link} {...ext}>Shopify&rsquo;s B2B features by plan</a>, read {READ_ON}.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Shopify B2B feature</th>
              <th className={th}>Basic, Grow, Advanced</th>
              <th className={th}>Shopify Plus</th>
            </tr>
          </thead>
          <tbody>
            {PLAN_ROWS.map((r) => (
              <tr key={r.feature} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-semibold`}>{r.feature}</td>
                <td className={td}>{r.lower}</td>
                <td className={td}>{r.plus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        If you would rather hand the whole setup to a team, see <a href="/services/shopify-plus-b2b" className={link}>our Shopify B2B service, if you want it set up for you</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Before you start: one store or a separate wholesale store?</h2>
      <p className="mb-4">
        Decide this first, whether you call it a Shopify wholesale store or a Shopify B2B portal, because Shopify warns that switching later means redoing most of the work, including companies, catalogs and storefront changes. A <strong>blended store</strong> is one store and one admin for retail and trade, with shared stock and one theme. A <strong>dedicated store</strong> is a second Shopify store used only for wholesale, with its own admin, stock, theme and settings.
      </p>
      <p className="mb-6">
        Pick blended when both groups buy similar products from the same stock and the same staff serve them. Pick dedicated when you want a gated site only trade buyers can enter, separate stock, a different look or a separate sales team. Shopify notes that a dedicated store can be a new store or an existing expansion store, and that its integrations then have to be set up again.
      </p>

      <figure className="my-8 not-prose">
        <img
          src={`${IMG}/companies-and-catalogs.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="Two colleagues in their 30s at a pale office table, one holding a blank sheet of paper, look at a laptop showing simple grey blocks beside an orange folder."
          className="w-full h-auto rounded-2xl"
        />
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to set up B2B on Shopify in 9 steps</h2>
      <p className="mb-4">
        These are the steps for the setup in admin order, for a blended store. A dedicated store follows the same steps without the retail checks in step 9.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <strong>Confirm the plan and switch on customer accounts.</strong> Your store must be on Basic or higher. Shopify requires customer accounts for B2B and does not allow legacy customer accounts for B2B buyers. In a blended store you can keep legacy accounts for retail and add the customer accounts sign-in link to your menu for trade buyers. Buyers then sign in with an emailed one-time code and no password.
        </li>
        <li>
          <strong>Create companies and company locations.</strong> These are Shopify company accounts. Go to Customers, then Companies, then Add company. Enter a company ID and a location ID: if you sync with an ERP, use the IDs it already holds, and the sync has something to match on later. Shopify creates the first location for you. A company can hold up to 10,000 locations, and each location can carry its own tax ID, addresses, catalogs and payment terms.
        </li>
        <li>
          <strong>Add buyers as company contacts.</strong> Add an existing customer or a new one to the company, then choose a permission. <em>Ordering only</em> lets a buyer place orders and see their own history. <em>Location admin</em> also shows every order placed for that location and lets the buyer edit addresses. One email address can belong to one customer only, a customer can belong to one company only, and a location can have up to 50 customers.
        </li>
        <li>
          <strong>Build catalogs and price lists.</strong> Shopify B2B catalogs are where Shopify wholesale pricing lives. Go to Markets, then Catalogs. A catalog can include or exclude products and set prices as a percentage adjustment, such as 40% off retail, or as a set price for each product. Shopify requires B2B with Markets to be switched on in feature test drive before you can create a B2B market. On Basic, Grow and Advanced, create a B2B market and assign the catalog to it using a Company locations condition. On Plus you can also assign the catalog directly to one company location. Our <a href="/b2b-ecommerce" className={link}>B2B ecommerce guide</a> covers how buyers use catalogs once they are live.
        </li>
        <li>
          <strong>Add quantity rules and volume pricing.</strong> In the same catalog, choose Manage products and pricing, then add a quantity rule. Each variant can have an increment, a minimum and a maximum, and the minimum must divide evenly by the increment. Rules are per variant, so a minimum of 10 cannot be met with 5 gray and 5 blue of the same hat. Add price breaks for larger quantities in the same dialog, and make sure your theme shows the minimum on the product page.
        </li>
        <li>
          <strong>Set payment terms, and deposits on Plus.</strong> Shopify net terms are set per location. Open the company location and edit Payment terms. Shopify offers net 7, net 15, net 30, net 45, net 60 or net 90, or due on fulfillment, with the clock starting on the order date; a fixed calendar date is only available on individual draft orders. You can also set terms for every location in a company, or for many companies at once from the Companies list. On Plus, tick &ldquo;Require deposit on orders created at checkout&rdquo; and enter a percentage. Details are on <a href="https://help.shopify.com/en/manual/b2b/checkout-and-orders/payment-terms" className={link} {...ext}>Shopify&rsquo;s payment terms page</a>.
        </li>
        <li>
          <strong>Choose checkout rules.</strong> On each location, decide whether orders go straight through or are submitted as drafts for your review, and whether buyers may ship to a one-time address instead of the fixed location address. Payment and shipping methods apply to everyone by default. To show a method only to trade buyers, Shopify points to the free Checkout Blocks app or a custom Function.
        </li>
        <li>
          <strong>Invite your buyers.</strong> Go to Settings, then Notifications, then Customer notifications, and edit the B2B access email. Send it from the company page when a buyer is added. If you want new trade buyers to apply, Shopify Forms can collect an account request that saves as a company once you approve it.
        </li>
        <li>
          <strong>Place a test order before anyone else does.</strong> Create a test company with one location, assign it a catalog and the terms you want to check, and add a customer you can sign in as. For a fake transaction, Shopify has you turn off your live payment gateway and turn on its Test payment gateway, so in a blended store real retail checkout stops while the test runs. Use a development store, or test in a quiet hour. Shopify&rsquo;s own example: a $100 product in a catalog set to 40% off should show $60 to the B2B test buyer and $100 to a retail shopper. Check the retail price again in a private window with no sign-in.
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">Shopify B2B without Plus: where the 3-catalog limit bites</h2>
      <p className="mb-4">
        Shopify B2B without Plus works well for a brand with a few price tiers, such as one dealer tier and one distributor tier. The limit is 3 active catalog assignments across active B2B markets, and Shopify counts each assignment, not each catalog. One catalog assigned to 2 markets uses 2 of your 3. Moving a catalog to Draft or removing it from a market frees a slot.
      </p>
      <p className="mb-6">
        The limit starts to hurt when each account has its own negotiated prices. Without Plus, those buyers have to share a market catalog, or staff set custom line prices on draft orders one order at a time. At that point the Shopify B2B vs Plus choice is easy to make. Plus lets you assign a catalog straight to each company location, with up to 25 catalogs on any one location.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Seven traps that break a Shopify B2B setup</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          <strong>A wholesale catalog on a region market.</strong> <a href="https://help.shopify.com/en/manual/b2b/markets/catalogs" className={link} {...ext}>Shopify&rsquo;s catalog page</a> says a catalog on a region market applies to everyone in that region, retail shoppers included. Use a B2B market with a Company locations condition, or direct assignment on Plus.
        </li>
        <li>
          <strong>Assuming the lowest price wins.</strong> A catalog assigned directly to a location beats market catalogs, and a more specific market beats a broader one. Only equally specific catalogs fall back to the lower price.
        </li>
        <li>
          <strong>Expecting net terms to charge the card.</strong> Payments are not captured automatically when terms expire. Someone has to charge the saved card or chase the invoice.
        </li>
        <li>
          <strong>Promising Shop Pay to trade buyers.</strong> Accelerated checkouts (Shop Pay, Apple Pay, Google Pay, Amazon Pay) are not compatible with B2B. Neither are subscriptions, pickup points, tipping or local delivery (except on draft orders your staff create).
        </li>
        <li>
          <strong>Huge single orders.</strong> Orders and draft orders are capped at 500 line items. A buyer ordering 501 different variants in one cart gets a failed order.
        </li>
        <li>
          <strong>Tax exemptions lost in migration.</strong> When you move existing customers into companies, named exemptions such as a New York reseller exemption can move. Exemptions made by switching off Collect tax do not, so recheck them by hand.
        </li>
        <li>
          <strong>Choosing the store type in a hurry.</strong> Blended and dedicated stores are hard to swap later. Settle it before step 2.
        </li>
      </ol>


      <figure className="my-8 not-prose">
        <img
          src={`${IMG}/test-wholesale-order.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="A man in his 50s with grey hair and rolled shirt sleeves checks a tablet showing simple shapes next to stacked cartons and an orange cable reel in a bright stockroom."
          className="w-full h-auto rounded-2xl"
        />
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">Connecting Shopify B2B to your ERP: who owns prices and terms?</h2>
      <p className="mb-4">
        Most wholesale brands already keep customers, contract prices, stock and invoices in an ERP. Shopify&rsquo;s enterprise B2B page names integrations from NetSuite, Microsoft Dynamics 365 Business Central and Acumatica. Before anyone writes a sync, agree where each piece of data is kept as the master copy. In most setups contract pricing, stock levels, credit and invoicing live in the ERP, while sign-ins, carts and orders live in Shopify.
      </p>
      <p className="mb-4">
        Shopify has no per-customer credit limit setting in B2B, and wholesale brands notice that gap first. We hold each account&rsquo;s limit and unpaid balance in the ERP, and an order that would push an account past its limit is held so a person can review it. The company and location IDs you entered in step 2 are what the sync matches on.
      </p>
      <p className="mb-6">
        The ERPs we connect to Shopify B2B are QuickBooks, NetSuite, Odoo, Acumatica and Microsoft Dynamics. Exaco&rsquo;s European Garden store runs on Shopify connected to QuickBooks Enterprise. For the specifics, see <a href="/services/shopify-netsuite-integration" className={link}>Shopify and NetSuite integration</a>, <a href="/services/shopify-quickbooks-integration" className={link}>Shopify and QuickBooks integration</a> and, for buyers who send orders as EDI files, <a href="/services/shopify-edi-integration" className={link}>Shopify EDI integration</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What else ranks for &ldquo;shopify b2b&rdquo;</h2>
      <p className="mb-4">
        We pulled the US Google results for &ldquo;shopify b2b&rdquo; on 24 November 2026. The AI Overview cited Shopify&rsquo;s Help Center, shopify.com and YouTube. The organic results were mostly guides:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>we-site.de</strong>: a German-language guide to building a B2B shop on Shopify.</li>
        <li><strong>hopatoo.com</strong>: a short answer to whether Shopify is B2B or B2C.</li>
        <li><strong>advoxstudio.com</strong>: an agency article on whether Shopify B2B suits wholesale businesses.</li>
        <li><strong>wizzcommerce.io</strong>: a guide to wholesale pricing on Shopify B2B.</li>
        <li><strong>shopatch.com</strong>: a step-by-step setup for Shopify B2B without Plus.</li>
        <li><strong>onlinestorecoach.com</strong>: a news post on Shopify opening B2B tools to all merchants.</li>
        <li><strong>meetanshi.com</strong>: a how-to on B2B and wholesale stores on Shopify.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">When to do it yourself, and when to get help</h2>
      <p className="mb-4">
        A store with one or two wholesale tiers and no ERP sync can follow the 9 steps above alone. Help pays off when you have many contract price lists, buyers who need size and color order grids or CSV upload, cart rules Shopify does not cover, or an ERP that must stay the record for prices and credit. Where Shopify has no setting, such as a cart minimum for a single customer group, we write a Shopify Function.
      </p>
      <p className="mb-4">
        FactoryJet is a registered Shopify Partner and has served 500+ businesses since 2014. Our Shopify work includes Exaco&rsquo;s QuickBooks-connected store and a custom theme for DTF Virginia, a print shop where resellers can sign up for an account. On a B2B project we set up the companies, load your contract prices into catalogs (one per customer on Plus), put net 30 or net 60 payment terms on each location and add minimums and case-pack rules, then build the ERP sync.
      </p>
      <p className="mb-6">
        Every build comes with a working draft on your real products with one of your actual price lists before any contract, a written fixed price for each phase, code in your own repository, and defects found after launch fixed at no extra charge during a cover period set before work starts. To compare other firms first, read <a href="/blog/best-shopify-plus-b2b-agencies-2026" className={link}>our list of Shopify Plus B2B agencies</a>. For the wider integration picture, see <a href="/services/ecommerce-erp-integration" className={link}>ecommerce ERP integration</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-[#FAFAF7] p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">Your price lists, mapped to Shopify</p>
        <p className="text-gray-800 leading-relaxed mb-4">
          Send your price sheets, payment terms and ERP name to connect@factoryjet.com, or book a call. Founder Bhavesh Barot will tell you which plan your setup needs, what Shopify does natively and what needs building, then send a written fixed price for each phase.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#F05A28] px-5 py-3 font-semibold text-white">Talk to us about Shopify B2B</a>
      </div>

      <p className="text-sm text-gray-600 mb-2">
        Shopify facts checked on Shopify&rsquo;s own pages on {READ_ON}. Plan features change often; check the linked pages before relying on a limit.
      </p>
    </>
  ),
};
