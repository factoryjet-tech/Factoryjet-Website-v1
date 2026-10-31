import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'ai-agent-shopify-plus-returns-refunds-2026';
const PAGE_URL = `https://factoryjet.com/blog/${SLUG}`;
const IMG = `/images/blog/${SLUG}`;
const TITLE = 'AI Agents for Shopify Plus Returns and Refunds (2026): What to Automate and What to Keep With People';
const META_DESCRIPTION =
  'How to automate RMA approvals and refunds on Shopify Plus: what Shopify does natively, 13 returns apps and AI agents compared, and where a person must approve.';

// Shopify facts and API names were read on help.shopify.com and shopify.dev on
// 24 October 2026. Product facts were read on each product's own site or its
// Shopify App Store listing the same day; they are each vendor's claims.
// Return Prime and eesel AI were added on 31 October 2026 from the Return Prime
// App Store listing and eesel's pricing page. Nothing here is paid placement.
interface Product {
  name: string;
  url: string;
  kind: string;
  automates: string;
  approval: string;
  runsOn: string;
  price: string;
}

const PRODUCTS: Product[] = [
  { name: 'Loop Returns', url: 'https://apps.shopify.com/loop-returns', kind: 'Returns platform', automates: 'Automated approvals and return policies, workflows, automated or manual refunds, exchanges, store credit, return labels, fraud rules and blocklists on its Advanced plan', approval: 'Not stated; it offers both automated and manual refunds', runsOn: 'Shopify', price: 'Free; Essential $155 a month; Advanced $340 a month' },
  { name: 'AfterShip Returns', url: 'https://apps.shopify.com/returns-center-by-aftership', kind: 'Returns platform', automates: 'Rules for approvals, refunds and back-office updates; refunds turned into exchanges or store credit; eligibility rules; labels; AI exchanges and fraud tools on Premium', approval: 'Not stated', runsOn: 'Shopify', price: 'Free (shopper-funded); Essentials $19 a month plus $0.50 a return after 20; Premium $119 a month plus $1 after 100' },
  { name: 'ReturnGO', url: 'https://apps.shopify.com/returngo', kind: 'Returns platform', automates: 'Rules for auto-approve, auto-refund, auto-exchange and auto-credit; automatic prepaid labels; store credit and gift cards', approval: 'Auto-approve is a rule the merchant switches on', runsOn: 'Shopify', price: 'Premium $147 a month with 110 returns, then $1.25 each; Pro $297 with 300, then $0.90 each' },
  { name: 'Redo', url: 'https://apps.shopify.com/redo', kind: 'Returns platform', automates: 'Automated approvals, automated or manual refunds, exchanges, store credit, labels, return windows, blocklists; an AI exchange agent on its free plan', approval: 'Not stated', runsOn: 'Shopify, plus its own helpdesk', price: 'Returns free; paid add-ons for checkout, email and fulfillment' },
  { name: 'Return Prime', url: 'https://apps.shopify.com/return-prime', kind: 'Returns platform', automates: 'Auto-approve or reject by return reason, product and window; automated refunds; variant exchanges on the free plan; store credit and instant exchanges on paid plans; automatic labels; fraud controls on its Thrive AI plan', approval: 'Not stated; lists manual refunds as an option', runsOn: 'Shopify', price: 'Free Start plan with 5 return requests, then $0.49 each; paid Grow, Thrive AI and Scale plans are listed in local currency' },
  { name: 'Narvar', url: 'https://corp.narvar.com/', kind: 'Returns platform', automates: 'Says its Shield product blocks fraudulent returns, enforces eligibility rules and offers automated exchanges; says its IRIS engine automates decisions', approval: 'Not stated', runsOn: 'Not stated on the page we read', price: 'Not published' },
  { name: 'Happy Returns', url: 'https://happyreturns.com/return-management-for-ecommerce-stores', kind: 'Returns platform and drop-off network', automates: 'A portal where shoppers choose exchange, store credit or refund; box-free, label-free drop-off at nearly 10,000 Return Bar locations', approval: 'Not stated', runsOn: 'Shopify; it names Loop as its preferred Shopify portal partner', price: 'Not published' },
  { name: 'Gorgias AI Agent', url: 'https://helpcenter.gorgias.com/en-US/create-an-action-for-ai-agent-567325', kind: 'AI support agent', automates: 'Runs actions such as cancel order and edit address, sends Loop return portal links and return status, and calls other systems through custom actions. No Shopify refund action is described in its actions article', approval: 'Shopper confirms irreversible actions; merchant sets conditions. No staff approval step described', runsOn: 'Gorgias helpdesk on Shopify', price: 'Helpdesk from $10 a month; AI Agent $0.90 to $1.00 per automated interaction' },
  { name: 'Macha', url: 'https://www.getmacha.com/', kind: 'AI support agent', automates: 'Looks up the order and drafts replies to refund requests; says the agent can issue refunds; lists returns and exchanges as a category to automate', approval: 'Safe mode: nothing reaches customers until the team approves; automatic replies can be switched on later', runsOn: 'Zendesk, Freshdesk, Gorgias, Front, Intercom, HubSpot', price: 'From $299 a month, implementation included' },
  { name: 'Yuma AI', url: 'https://www.yuma.ai/', kind: 'AI support agent', automates: 'Says it checks return eligibility, issues refunds and resolves returns, refunds and exchanges end to end', approval: 'Hard limits on refunds, discounts and replacements; teams review replies before automation widens; escalates when unsure', runsOn: 'Gorgias, Zendesk, Kustomer, Salesforce Service Cloud, Gladly, Front and others', price: 'Paid per ticket resolved by AI; no figure published' },
  { name: 'Siena AI', url: 'https://www.siena.cx/', kind: 'AI support agent', automates: 'Says it starts returns, generates labels, issues refunds and sends replacements', approval: 'Mentions guardrails and controls; does not say whether refunds need sign-off', runsOn: 'Says it is platform agnostic', price: 'Not published' },
  { name: 'eesel AI', url: 'https://www.eesel.ai/pricing', kind: 'AI support agent', automates: 'Says an agent can look up an order, check a policy and update another tool; its managed support service lists tracking, exchanges and refunds within your limits', approval: 'Refunds stay within limits you set on managed support; no staff approval step described', runsOn: 'Lists Shopify among its integrations', price: 'Free trial with 100 credits; Teammate from $299 a month; managed support $5,000 a month' },
  { name: 'Fini', url: 'https://www.usefini.com/', kind: 'AI support agent', automates: 'Shows an agent checking Stripe for a duplicate charge and issuing the refund with an audit trail; returns are not mentioned', approval: 'Not described beyond guardrails', runsOn: 'Zendesk, Intercom, Gorgias, Freshdesk and others; connects to Shopify and Stripe', price: '$0.49 per resolution' },
];

// Shopify GraphQL Admin API, read on shopify.dev 24 Oct 2026.
const API: { name: string; does: string; url: string }[] = [
  { name: 'returnRequest', does: 'Records a customer’s return request for review. Status: REQUESTED.', url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest' },
  { name: 'returnApproveRequest', does: 'Approves the request. Status: OPEN.', url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest' },
  { name: 'returnDeclineRequest', does: 'Declines a requested, unrefunded return, with a reason such as the return period having ended.', url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest' },
  { name: 'returnCreate', does: 'Opens a return directly, skipping the request and approval step.', url: 'https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps' },
  { name: 'returnProcess', does: 'Finalizes a return: quantities, restock or dispose for each item, exchange orders, and optionally the refund. Closes the return when all items are done.', url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnProcess' },
  { name: 'refundCreate', does: 'Creates a full or partial refund, including shipping, duties and store credit.', url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate' },
];

const SELF_SERVE_URL = 'https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/self-serve-returns';
const RETURN_RULES_URL = 'https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/return-rules';
const REFUNDING_URL = 'https://help.shopify.com/en/manual/fulfillment/managing-orders/refunding-orders';
const RETURNS_APPS_URL = 'https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps';
const FLOW_TRIGGERS_URL = 'https://help.shopify.com/en/manual/shopify-flow/reference/triggers';
const FLOW_ACTIONS_URL = 'https://help.shopify.com/en/manual/shopify-flow/reference/actions';
const NRF_URL = 'https://www.nrf.com/research/2025-retail-returns-landscape';
const WEBHOOK_TOPICS_URL = 'https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic';
const PAYMENTS_REFUNDS_URL = 'https://help.shopify.com/en/manual/payments/shopify-payments/payouts/refunds';

const FAQS: FAQItem[] = [
  {
    q: 'How can a Shopify Plus store automate RMA approvals and refunds with AI?',
    a: 'Split the job in two. Let a returns platform such as Loop, ReturnGO, Redo or AfterShip apply your rules to approve routine requests, send labels and offer exchanges. Let an AI support agent handle the conversation and the edge cases. Keep a person approving refunds above a set amount and anything that looks like damage or fraud, because Shopify says a refund cannot be reversed.',
  },
  {
    q: 'What is an RMA in ecommerce?',
    a: 'RMA stands for return merchandise authorization: the approval a store gives before a customer sends an item back. On Shopify, the customer requests a return from the order status page, the store approves or declines it in admin, and an approved return can include exchange items, shipping instructions and a return label.',
  },
  {
    q: 'Can Shopify automate returns without an app?',
    a: 'Shopify automates part of the job. Its self-serve returns let customers request a return from the order status page, and return rules set the return window, return shipping cost, restocking fee and final-sale items. But the merchant still approves or declines each request in admin, and Shopify Flow has no refund action. Auto-approval and auto-refunds need an app or a custom agent.',
  },
  {
    q: 'How do I set up returns on Shopify?',
    a: 'Turn on self-serve returns so customers can request returns from their order status page. Then set return rules: the return window (14, 30 or 90 days, unlimited or custom), who pays return shipping, any restocking fee and which items are final sale. Shopify says return rules apply only to future orders.',
  },
  {
    q: 'What is the best Shopify app for returns and exchanges?',
    a: 'For rule-based approvals and refunds, Loop, ReturnGO, Redo, AfterShip and Return Prime all list automation rules on their Shopify App Store listings. ReturnGO names auto-approve, auto-refund and auto-exchange rules. Loop and AfterShip publish monthly plans; Redo’s returns app is free with paid add-ons. Pick by testing each on last month’s return reasons and volume.',
  },
  {
    q: 'Can an AI agent issue refunds on Shopify?',
    a: 'Yes, the API allows it. Shopify’s Admin API has refundCreate, and returnProcess can issue a refund when it closes a return. Yuma, Siena and Macha say their agents can issue refunds. The safer setup is a hard limit: the agent refunds routine cases under an amount you set, and a person approves the rest. Shopify says a refund cannot be reversed once issued.',
  },
  {
    q: 'Does Shopify Flow automate refunds?',
    a: 'Shopify Flow does not issue refunds directly. It has eight return and refund triggers, including return requested, return approved and refund created. Its return actions are only cancel, close and reopen a return. There is no refund or store credit action, though a generic Admin API request action exists. Refunds still come from admin, an app or the API.',
  },
  {
    q: 'What should an AI agent never do on returns?',
    a: 'An AI agent should never refund above the limit you set without a person, decline a request on a judgment call such as damage, or promise a refund the policy does not allow. It should not refund an item that was never received or inspected when your policy requires inspection, and it should not issue both store credit and a refund to the original payment, which Shopify warns can over-refund.',
  },
  {
    q: 'What parts of returns are safe to automate?',
    a: 'Six steps are safe to automate: checking the return window, final-sale status and order details; approving requests that clearly meet your rules; sending labels and instructions; offering an exchange or store credit first; answering return status questions; and small refunds after the item is scanned back in. Keep damage claims, repeat returners, high-value orders and policy exceptions with a person.',
  },
  {
    q: 'What Shopify API calls does a returns agent use?',
    a: 'Shopify says returns are managed only through the GraphQL Admin API. returnRequest records the customer’s request, returnApproveRequest and returnDeclineRequest decide it, returnCreate opens a return directly, returnProcess finalizes it with restock or dispose decisions and an optional refund, and refundCreate issues a refund. Only fulfilled items can be returned.',
  },
  {
    q: 'Are any Shopify returns features only on Shopify Plus?',
    a: 'None of the Shopify returns and refunds pages we read on 24 October 2026 marked a feature as Plus only. The return rules page names one plan restriction: Shopify POS Pro for using return rules in stores. Plus brands usually differ in volume, custom checkout and the systems a return must update, such as an ERP or warehouse system.',
  },
  {
    q: 'How much do US shoppers return?',
    a: 'The National Retail Federation and Happy Returns project US retail returns at $849.9 billion in 2025, with 19.3% of online sales returned. NRF also reports that 9% of all returns are fraudulent. That fraud share is the main reason to keep a person on high-value and unusual refunds.',
  },
  {
    q: 'Should refunds go to store credit or the original payment method?',
    a: 'Shopify lets you refund to the original payment, store credit, or both, and you can set an expiry date on store credit. Offering store credit or an exchange first keeps the money in your store when the customer accepts it. Shopify warns that issuing store credit and then also refunding the original payment can over-refund the order, so an agent must check what was already issued.',
  },
  {
    q: 'Are Shopify return fees taken off the refund automatically?',
    a: 'No. Shopify’s return rules page says return fees, such as a restocking fee, are not deducted from refunds automatically. The merchant deducts them by hand when creating the refund. An agent or app that applies a restocking fee must set the refund amount itself.',
  },
  {
    q: 'Can a refund be undone on Shopify?',
    a: 'No. Shopify says a refund cannot be cancelled or reversed once it is initiated from admin. Partial refunds are allowed up to the amount available, and on orders paid partly by gift card a partial refund goes to the gift card first. Because refunds are final, they are the step most worth a human check.',
  },
  {
    q: 'What is the difference between a returns app and an AI support agent?',
    a: 'A returns app runs the return itself: portal, rules, labels, exchanges and refunds. An AI support agent works in your helpdesk and talks to the customer, answering questions and taking actions. The two can run side by side: Gorgias AI Agent, for example, sends Loop return links and status updates from inside the helpdesk.',
  },
  {
    q: 'Which AI support agents keep a person in the loop on refunds?',
    a: 'From the vendors’ own pages: Macha has a safe mode where nothing reaches customers until the team approves. Yuma describes hard limits on refunds and team review before automation widens. Gorgias asks the shopper to confirm irreversible actions but describes no staff approval step. Siena and Fini mention guardrails without detail.',
  },
  {
    q: 'When should a Shopify Plus brand build a custom returns agent?',
    a: 'When the decision depends on data a returns app cannot see: stock and condition in the warehouse system, the customer’s history in the ERP, wholesale terms or marketplace orders. A custom agent can read those systems, prepare the return in Shopify and ask a person to approve above your limit. For standard consumer returns, an app is faster.',
  },
  {
    q: 'What is returns management on Shopify?',
    a: 'It covers everything after a customer asks to send something back: deciding whether the return is allowed, getting the item back, inspecting it, restocking or disposing of it, and refunding, exchanging or giving store credit. Shopify return management ties those steps to the order, so stock and money stay correct.',
  },
  {
    q: 'How do I stop return fraud when automating returns?',
    a: 'Keep a person on high-value refunds, repeat returners and damage claims. Use blocklists and fraud rules where your returns app offers them; Loop, Redo and AfterShip list fraud tools. Refund after the item is scanned in, not on request, for anything above a small amount. NRF reports 9% of returns are fraudulent.',
  },
  {
    q: 'Can returns and refunds sync with our ERP?',
    a: 'Yes, through the same API. Shopify fires a refunds/create webhook when a refund is created and returns webhooks such as returns/request and returns/approve as a return moves, and Flow has triggers for return requested, approved, processed and closed. An integration or agent can use those events to update the ERP, warehouse system or accounting so stock and revenue match.',
  },
  {
    q: 'Does FactoryJet build returns agents for Shopify Plus?',
    a: 'Yes. FactoryJet builds a returns and exchanges agent that reads the request, finds the order, checks it against your return window and item rules, and prepares the return or exchange. It connects to Shopify returns through the Admin API, and to a returns app such as Loop or AfterShip and your helpdesk through their APIs. Refunds above the limit you set always need a person.',
  },
  {
    q: 'How long does a Shopify refund take to reach the customer?',
    a: 'Shopify’s Shopify Payments refunds page says a refund shows as Pending for up to 2 business days, and the customer can take up to 10 business days to receive the money, depending on their bank. The refunded amount comes out of your next available payout. An agent that answers “where is my refund” should quote that window.',
  },
  {
    q: 'Does Shopify have a returns portal?',
    a: 'Yes, a basic one. Self-serve returns let customers request a return from their order status page, choosing a reason and the item’s condition. Returns apps add a branded returns portal on top: Happy Returns, for example, lets shoppers pick an exchange, store credit or refund, then drop the item at a Return Bar.',
  },
  {
    q: 'How much does Shopify returns automation cost?',
    a: 'From the prices vendors publish, read in October 2026: Loop has a free plan, then $155 or $340 a month; ReturnGO starts at $147 a month with 110 returns; AfterShip Essentials is $19 a month plus $0.50 a return after 20; Redo’s returns app is free, and Return Prime’s free plan covers 5 return requests, then $0.49 each. AI support agents charge per ticket: Fini $0.49 a resolution, Gorgias AI Agent $0.90 to $1.00.',
  },
];

const link = 'text-[#B23E13] underline';
const th = 'p-3 text-left border border-gray-700';
const td = 'p-3 border border-gray-200 align-top';

export const post: BlogPost = {
  id: '846',
  slug: SLUG,
  title: TITLE,
  excerpt:
    'How a Shopify Plus brand can automate RMA approvals and refunds: what Shopify returns, return rules, Flow and the Admin API do natively, 13 returns platforms and AI support agents compared on their own claims, and which steps should keep a person approving. Read on 24 October 2026.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Oct 24, 2026',
  dateModified: 'Oct 31, 2026',
  hideExcerptOnPage: true,
  readTime: '17 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A woman with a dark bob in a mustard sweater unpacks a plain cream shirt from a brown mailer at a long table with stacked boxes and an orange box cutter',
  meta: {
    title: 'Shopify Plus Returns & Refunds: AI Agents 2026 | FactoryJet',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    'Split returns automation in two: a returns platform applies your rules and runs labels and exchanges; an AI support agent handles the conversation.',
    'Shopify lets customers request returns and sets return rules natively, but the merchant still approves each request, and Shopify Flow has no refund action.',
    'Shopify says a refund cannot be reversed once issued. Keep a person approving refunds above a set amount, damage claims and repeat returners.',
    'Loop, ReturnGO, Redo, AfterShip and Return Prime list rules for automated approvals and refunds. Of the AI support agents, Macha and Yuma describe human controls on refunds.',
    'NRF projects $849.9 billion in US returns in 2025, 19.3% of online sales returned, and 9% of returns fraudulent.',
    'Build a custom agent only when the decision needs data from systems a returns app cannot read.',
  ],
  faqs: FAQS,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': PAGE_URL,
            url: PAGE_URL,
            name: TITLE,
            description: META_DESCRIPTION,
            inLanguage: 'en-US',
            datePublished: '2026-10-24',
            dateModified: '2026-10-31',
            isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
            publisher: { '@id': 'https://factoryjet.com/#organization' },
            about: { '@type': 'Thing', name: 'AI agents for Shopify Plus returns and refunds' },
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#answer-first', 'h1'] },
          }),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          To automate RMA approvals and refunds on Shopify Plus, use two pieces. A returns platform such as Loop, ReturnGO, Redo or AfterShip applies your rules: it approves routine requests, sends labels and offers exchanges. An AI support agent handles the customer conversation. Keep a person approving refunds above a set amount and any damage or fraud case, because Shopify says a refund cannot be reversed.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Build a custom agent only when the decision depends on data a returns app cannot see, such as warehouse condition, ERP history or wholesale terms.
        </p>
      </div>

      <p className="mb-4">
        One buyer put it to the AI assistants like this: an ecommerce store on Shopify Plus wants to automate RMA approvals and refunds with AI, and asks what vendor or approach to use. On 22 October 2026 we asked ChatGPT, Claude, Gemini, Perplexity and Google&rsquo;s AI answers that question several times. Across 28 answers, the most-cited pages were vendor blogs and app listings.
      </p>
      <p className="mb-4">
        So on 24 October we went to the source. We read Shopify&rsquo;s own returns, refunds, Flow and API documentation, and the pages of 11 returns platforms and AI support agents. On 31 October we added two more, Return Prime and eesel AI, for 13 in all. Everything below links to the page we read. Product capabilities are each vendor&rsquo;s own claims; we have not tested them.
      </p>
      <p className="mb-6">
        A few terms in plain English. An <strong>RMA</strong> (return merchandise authorization) is the store&rsquo;s approval before an item comes back. A <strong>returns platform</strong> is an app that runs the return: portal, rules, labels, exchanges and refunds. An <strong>AI support agent</strong> works in your helpdesk and talks to customers. <strong>Store credit</strong> is money the customer can spend in your store instead of a refund. An <strong>ERP</strong> is the business system that holds stock, orders and accounts. A <strong>webhook</strong> is a message Shopify sends to another system the moment something happens. The <strong>GraphQL Admin API</strong> is the interface apps use to read and change a Shopify store. <strong>Scan-in</strong> is when the warehouse scans a returned item to record that it arrived.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What Shopify already does for returns</h2>
      <p className="mb-4">Before buying anything, know what the platform does on its own. These come from Shopify&rsquo;s help center, read on 24 October 2026.</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Customers can request returns themselves.</strong> <a href={SELF_SERVE_URL} className={link} rel="noopener" target="_blank">Self-serve returns</a> let customers ask for a return of delivered items from their order status page. The request can collect a reason and the item&rsquo;s condition.</li>
        <li><strong>You still approve each request.</strong> The merchant approves or declines in admin, and on approval can add exchange items, shipping instructions and a return label.</li>
        <li><strong>Return rules set the policy.</strong> <a href={RETURN_RULES_URL} className={link} rel="noopener" target="_blank">Return rules</a> cover the window (14, 30 or 90 days, unlimited or custom), return shipping cost, an optional restocking fee, final-sale items, and overrides per product or collection. Where several overrides apply, the shortest window wins.</li>
        <li><strong>Fees are not deducted for you.</strong> Shopify says return fees are not taken off refunds automatically; the merchant deducts them when creating the refund.</li>
        <li><strong>Refunds are final.</strong> <a href={REFUNDING_URL} className={link} rel="noopener" target="_blank">Shopify says</a> a refund cannot be cancelled or reversed once initiated. Refunds go to the original payment, store credit, or both. On Shopify Payments, <a href={PAYMENTS_REFUNDS_URL} className={link} rel="noopener" target="_blank">Shopify says</a> a refund can take up to 10 business days to reach the customer.</li>
        <li><strong>Over-refunds are possible.</strong> Issuing store credit and later also refunding the original payment can refund the order twice.</li>
        <li><strong>Flow watches, but does not refund.</strong> Shopify Flow has <a href={FLOW_TRIGGERS_URL} className={link} rel="noopener" target="_blank">eight return and refund triggers</a>, from return requested to refund created. Its <a href={FLOW_ACTIONS_URL} className={link} rel="noopener" target="_blank">return actions</a> are only cancel, close and reopen.</li>
      </ul>
      <p className="mb-6">
        None of the returns pages we read marked a feature as Shopify Plus only. The gap Shopify leaves is automatic decisions: approving, declining and refunding without a person clicking in admin. That is what apps and agents add.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The Shopify returns API an agent works through</h2>
      <p className="mb-4">
        <a href={RETURNS_APPS_URL} className={link} rel="noopener" target="_blank">Shopify says</a> returns are managed only through the GraphQL Admin API, and only fulfilled items can be returned. These are the calls any returns app or agent uses, read on shopify.dev on 24 October 2026.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead><tr className="bg-gray-800 text-white"><th className={th}>API call</th><th className={th}>What it does</th></tr></thead>
          <tbody>
            {API.map((a) => (
              <tr key={a.name} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-semibold`}><a href={a.url} className={link} rel="noopener" target="_blank">{a.name}</a></td>
                <td className={td}>{a.does}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        In plain words, a return moves from REQUESTED to OPEN to CLOSED, and the refund can be issued as the return closes. Shopify also fires a refunds/create webhook when a refund is created, which is how an ERP or accounting system learns about it.
      </p>

      <figure className="my-8 not-prose">
        <img src={`${IMG}/inspect.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A man with a grey goatee and a navy apron holds up a plain white sneaker to check its sole at an inspection bench beside an orange bin" className="w-full h-auto rounded-xl" />
        <figcaption className="text-sm text-gray-600 mt-2">Inspection is the step an AI agent cannot do. Decide which refunds wait for it and which do not.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">What to automate and what to keep with people</h2>
      <p className="md:hidden text-xs text-gray-600 mb-2 not-prose">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 560 }}>
          <thead><tr className="bg-gray-800 text-white"><th className={th}>Step</th><th className={th}>Automate it?</th><th className={th}>Why</th></tr></thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Check window, final-sale status and order</td><td className={td}>Yes</td><td className={td}>Pure rules against Shopify data.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Approve requests that clearly meet policy</td><td className={td}>Yes</td><td className={td}>Approval opens the return; it does not move money.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Send label and instructions</td><td className={td}>Yes</td><td className={td}>Routine and reversible.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Offer exchange or store credit first</td><td className={td}>Yes</td><td className={td}>Keeps revenue; the customer chooses.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Answer return status questions</td><td className={td}>Yes</td><td className={td}>A common ticket, and read-only.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Refund small amounts after scan-in</td><td className={td}>Yes, with a limit</td><td className={td}>Set a hard cap; the item is back.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Refund above your limit</td><td className={td}>Person approves</td><td className={td}>Shopify refunds cannot be reversed.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Damage, wrong item or missing parts</td><td className={td}>Person decides</td><td className={td}>Needs judgment, often photos.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Repeat returners and policy exceptions</td><td className={td}>Person decides</td><td className={td}>NRF reports 9% of returns are fraudulent.</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Returns platforms and AI support agents for Shopify Plus, compared</h2>
      <p className="mb-4">
        Each row comes from the product&rsquo;s own site or Shopify App Store listing, read on 24 October 2026 (Return Prime and eesel AI on 31 October). They are the vendors&rsquo; claims, not our tests. The order is not a ranking.
      </p>
      <p className="md:hidden text-xs text-gray-600 mb-2 not-prose">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 960 }}>
          <thead><tr className="bg-gray-800 text-white"><th className={th}>Product</th><th className={th}>Type</th><th className={th}>What it says it automates</th><th className={th}>Human approval</th><th className={th}>Runs on</th><th className={th}>Published price (USD)</th></tr></thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.name} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-semibold`}><a href={p.url} className={link} rel="noopener" target="_blank">{p.name}</a></td>
                <td className={td}>{p.kind}</td>
                <td className={td}>{p.automates}</td>
                <td className={td}>{p.approval}</td>
                <td className={td}>{p.runsOn}</td>
                <td className={td}>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        <strong>How to read this.</strong>{' '}The returns platforms run the return and apply rules you set. The AI support agents sit in the helpdesk. Only Macha and Yuma describe a human control on refunds in detail, and Gorgias&rsquo;s own actions article lists no Shopify refund action for its AI Agent. If refunds are what you want automated, ask each vendor to show the refund step and the limit that stops it.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If your returns touch an ERP or warehouse system</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          We build a returns and exchanges agent for your store, as part of our <a href="/services/shopify-ai-agents" className={link}>Shopify AI agents</a> work. It checks your rules, prepares the return and asks a person to approve refunds above your limit. The founder joins the first call.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <figure className="my-8 not-prose">
        <img src={`${IMG}/screen.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A woman with long braids in a cream cardigan sits at a desk looking at a monitor that lists grey rows marked with green and orange dots, beside an orange notebook" className="w-full h-auto rounded-xl" />
        <figcaption className="text-sm text-gray-600 mt-2">A good returns agent sorts the queue: green for routine cases it handled, orange for the ones waiting on a person.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">How an AI returns agent works on Shopify Plus, step by step</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Request.</strong> The customer asks in chat, email or the order status page. Shopify records it with returnRequest, sets the status to REQUESTED and fires the returns/request webhook, which is the agent&rsquo;s cue to start.</li>
        <li><strong>Check.</strong> The agent finds the order and checks the window, final-sale status and the reason against your rules.</li>
        <li><strong>Decide.</strong> Clear cases are approved with returnApproveRequest, which sets the status to OPEN and fires returns/approve, and a label is sent. Declines fire returns/decline. Unclear ones go to a person with the reason.</li>
        <li><strong>Offer.</strong> The agent offers an exchange or store credit before a refund, if your policy says so.</li>
        <li><strong>Receive.</strong> The item is scanned in and, where needed, inspected by a person.</li>
        <li><strong>Close.</strong> returnProcess restocks or disposes of each item and issues the refund, within the agent&rsquo;s limit. Above the limit, a person approves first.</li>
        <li><strong>Sync.</strong> The refunds/create webhook updates the ERP, warehouse system or accounting so stock and revenue match. <a href={WEBHOOK_TOPICS_URL} className={link} rel="noopener" target="_blank">Shopify says</a> it fires &ldquo;independent from the movement of money&rdquo;, so check the payment status too.</li>
      </ol>
      <p className="mb-6">
        <strong>A worked example.</strong> Say your refund limit is $75 and your window is 30 days. A customer returns a $48 shirt on day 12, the reason is &ldquo;too small&rdquo;, and the item is scanned in. Every rule passes, so the agent refunds it. A $210 jacket returned on day 12 with the reason &ldquo;arrived damaged&rdquo; is above the limit and needs judgment, so the agent attaches the order, the photos and the customer&rsquo;s past returns and sends it to a person.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Why the refund step needs a limit</h2>
      <p className="mb-6">
        Returns are large and some are not honest. The <a href={NRF_URL} className={link} rel="noopener" target="_blank">National Retail Federation and Happy Returns project</a> US retail returns at $849.9 billion in 2025, estimate that 19.3% of online sales will be returned, and report that 9% of all returns are fraudulent. On Shopify, a refund cannot be reversed. So automate only refunds that are small, routine and made after the item is scanned back in. Route the rest to a person with the facts already gathered.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Buy a returns app, or build a custom returns agent?</h2>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead><tr className="bg-gray-800 text-white"><th className={th}>Your situation</th><th className={th}>Best fit</th></tr></thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Consumer returns with standard rules</td><td className={td}>A returns platform: Loop, ReturnGO, Redo or AfterShip</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Many &ldquo;where is my return&rdquo; tickets</td><td className={td}>An AI support agent in your helpdesk, connected to the returns platform</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Decisions depend on warehouse condition or ERP history</td><td className={td}>A custom agent that reads those systems</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Wholesale or B2B returns with credit terms</td><td className={td}>A custom agent, with a person approving credits</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Returns from Amazon or TikTok Shop too</td><td className={td}>A custom agent across channels, or one returns platform per channel</td></tr>
          </tbody>
        </table>
      </div>

      <figure className="my-8 not-prose">
        <img src={`${IMG}/restock.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A man in a charcoal t-shirt places a folded grey sweater into a white bin on a metal shelf in a stockroom with an orange step stool" className="w-full h-auto rounded-xl" />
        <figcaption className="text-sm text-gray-600 mt-2">A return is only finished when the item is back on the shelf and the stock count in Shopify and the ERP agree.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to set up Shopify returns automation: 7 steps</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Write the policy as rules.</strong> Window, final-sale items, who pays shipping, restocking fee, and what counts as damage.</li>
        <li><strong>Set it in Shopify first.</strong> Turn on self-serve returns and return rules, so every tool reads the same policy.</li>
        <li><strong>Pick the refund limit.</strong> The amount below which a refund can go out without a person.</li>
        <li><strong>Choose the returns platform</strong> for portal, labels, exchanges and rules.</li>
        <li><strong>Add the AI agent</strong> for the conversation, and connect it to the returns platform rather than letting it issue refunds on its own.</li>
        <li><strong>Run it with approval on everything</strong> for two weeks, then switch on automatic approval for the cases it got right.</li>
        <li><strong>Connect the books.</strong> Use the refunds/create webhook to keep the ERP, warehouse and accounting in step.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">What else ranks for &quot;shopify plus returns automation&quot;, and how this guide differs</h2>
      <p className="mb-4">
        These are the business sites on Google&rsquo;s first page for &ldquo;shopify plus returns automation&rdquo; in the US when we checked on 24 October 2026 (DataForSEO), with the title Google showed. We list them so you can compare; we have not reviewed their products, and the list leaves out forums.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full table-fixed border-collapse text-sm">
          <colgroup><col style={{ width: '35%' }} /><col style={{ width: '65%' }} /></colgroup>
          <thead><tr className="bg-gray-800 text-white"><th className={th}>Site</th><th className={th}>Page title shown in Google</th></tr></thead>
          <tbody>
            {[
              ['aftersell.com', 'Top 5 best Shopify returns apps in 2026'],
              ['returngo.ai', 'How to Manage Shopify Returns and Exchanges'],
              ['forthroute.io', 'Automate Shopify Returns: 4 Workflows + Free Template'],
              ['ringly.io', '7 best Shopify returns apps worth trying'],
              ['hotwax.co', 'How to Master Shopify Returns Management with Loop ...'],
              ['returnrabbit.com', 'How Shopify Brands Are Automating the Returns Process'],
            ].map(([site, title]) => (
              <tr key={site} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-semibold`}>{site}</td>
                <td className={td}>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Most of these list returns apps or describe one product. This guide starts from what Shopify does natively and through its API, compares returns platforms and AI support agents side by side, and says which steps should keep a person approving and why.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What FactoryJet builds for Shopify returns</h2>
      <p className="mb-4">
        We are FactoryJet. We have served 500+ businesses, most of them in commerce, and we are a registered Shopify Partner. We build a returns and exchanges agent for your store, as part of our <a href="/services/shopify-ai-agents" className={link}>Shopify AI agents</a> work:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Starts when</strong> a customer asks to return or exchange an item.</li>
        <li><strong>Reads the request,</strong> finds the order, checks it against your return window and item rules, and prepares the return or exchange.</li>
        <li><strong>Connects to</strong> Shopify returns through the Admin API, and to Loop, AfterShip or your helpdesk through their APIs.</li>
        <li><strong>Hard limit:</strong> refunds above the limit you set always need a person.</li>
      </ul>
      <p className="mb-6">
        We connect it to the ERP or warehouse system when the decision needs that data, and we can show it working on your own orders before you sign. See also <a href="/services/ecommerce-ai-agents" className={link}>ecommerce AI agents</a>, <a href="/services/shopify-plus-agency" className={link}>Shopify Plus development</a>, <a href="/blog/how-long-to-implement-an-ai-agent-2026" className={link}>how long an AI agent takes to implement</a> and <a href="/blog/ai-agents-for-customer-service-mid-sized-companies-2026" className={link}>AI agents for customer service</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">Want to see it on your own returns?</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us your return policy and a week of return requests. The founder will show which ones an agent could handle, which should stay with a person, and whether an app alone would do.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>
    </>
  ),
};
