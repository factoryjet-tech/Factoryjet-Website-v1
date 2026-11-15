/**
 * Homepage FAQ: the single source for the visible accordion AND the FAQPage
 * JSON-LD in src/app/page.tsx. Never duplicate these strings elsewhere.
 *
 * 2026-11-15: cut from 42 to 8 questions for the short homepage. Kept the ones AI
 * buyers ask (cost, systems, existing store, DTC + B2B, AI agents, demo, after
 * launch). The other 34 are in git history and mostly answered on service pages.
 * Rules: cost answers use sourced market ranges only, never FactoryJet prices;
 * AI agent examples come from confirmed work (RFQs, purchase and sales orders,
 * bookkeeping); no timelines unless Bhavesh confirms them.
 */

export interface HomeFaq { id: string; question: string; answer: string }

export const HOME_FAQS: HomeFaq[] = [
  { id: 'Q01', question: "How much does it cost to build an ecommerce website?", answer: "A store with custom design and integrations typically costs $5,000 to $25,000, and custom builds with advanced integrations for mid-market and enterprise brands run $25,000 to $250,000 or more, according to BigCommerce's ecommerce cost guide. ERP and accounting links, B2B pricing rules and data migration push a build toward the higher end. We scope yours on a short call and send a fixed proposal for each phase before any work starts." },
  { id: 'Q02', question: "Can you connect Shopify to QuickBooks?", answer: "Yes. We connect Shopify to QuickBooks so orders, customers, payments and refunds post to your books without re-keying, and so one inventory count feeds every sales channel. Depending on your workflow we use an existing connector app or build a custom integration, and we tell you which one fits before any work starts." },
  { id: 'Q03', question: "Which ERP and business systems do you connect a store to?", answer: "We have worked on QuickBooks, NetSuite, Odoo, SAP Business One, ERPNext and custom ERPs, plus HubSpot. The aim is one source for stock, prices and orders, so your store and your back office stop drifting apart." },
  { id: 'Q04', question: "Can you fix our existing store, or only build from scratch?", answer: "Both. Much of our work is improving or replatforming a store that already runs, then connecting it to the systems behind it. We audit what you have, fix what is broken and build what is missing." },
  { id: 'Q05', question: "Can DTC and B2B run on one site with different pricing?", answer: "Yes. We build one storefront that serves retail shoppers and gives trade buyers their own login with account or contract pricing, net terms, quotes and fast reordering, on one catalog and one inventory." },
  { id: 'Q06', question: "What can AI agents do for an ecommerce business?", answer: "The repeat back-office work that follows a sale. An agent can read an emailed purchase order and draft the sales order in your ERP, turn a request for quote into a draft quote from your price book, or prepare daily bookkeeping entries. A person approves the result before anything is sent or posted, and you own the code and the agent." },
  { id: 'Q07', question: "Can we see a demo before we sign a contract?", answer: "Yes. Before you sign, we show you working software built on your own data. For a store, that is a draft theme set up in your own store. For an AI agent, it is a demo that runs on your sample files and rules, so you can check its output against a job you have already done by hand. You decide after you have seen it work." },
  { id: 'Q08', question: "What happens after launch?", answer: "Defects are fixed inside the build price for a cover period agreed before work starts. After that, support is optional: each change is quoted and approved, with no monthly minimum. You own the code and the store from day one, so you can move support in-house or to another team at any time." },
];
