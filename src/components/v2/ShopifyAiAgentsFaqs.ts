/**
 * Shopify AI Agent Development FAQ (/services/shopify-ai-agents): the single source for the
 * visible accordion in ShopifyAiAgentsSections.tsx AND the FAQPage JSON-LD in
 * src/app/services/shopify-ai-agents/page.tsx. Never duplicate these strings elsewhere.
 *
 * Questions: the use-case, cost and "who builds it" questions buyers put to ChatGPT,
 * Perplexity and Google in the 2026-09-17 AI buyer sweep (A03, A09, A10, A14 to A19, E20)
 * and the 2026-09-19 People Also Ask pull, rewritten for Shopify store owners.
 *
 * Shopify facts were fetch-verified against shopify.dev and help.shopify.com on 2026-09-28.
 * No FactoryJet prices anywhere: cost answers describe what drives cost and link the guide.
 */

export const SHOPIFY_AI_FAQ_CATEGORIES = [
  { id: 'faq-basics', label: 'Shopify AI agent basics' },
  { id: 'faq-build', label: 'How the build works' },
  { id: 'faq-cost', label: 'Cost, timelines & support' },
  { id: 'faq-data', label: 'Data, safety & ownership' },
  { id: 'faq-choose', label: 'Build, buy or hire' },
] as const;

export interface ShopifyAiFaq {
  id: string;
  category: (typeof SHOPIFY_AI_FAQ_CATEGORIES)[number]['id'];
  question: string;
  answer: string;
  /** Optional link rendered after the answer. Not part of the schema text. */
  link?: { url: string; label: string; external?: boolean };
}

/* ─── Sources, each fetch-verified 2026-09-28 ─── */
// "The REST Admin API is a legacy API as of October 1, 2024." / "Starting April 1, 2025, all new public apps must be built exclusively with the GraphQL Admin API."
export const SRC_SHOPIFY_REST_LEGACY = 'https://shopify.dev/docs/api/admin-rest';
// Restore rates: Standard 100, Advanced 200, Plus 1,000, enterprise 2,000 points/second; single query max cost 1,000 points.
export const SRC_SHOPIFY_RATE_LIMITS = 'https://shopify.dev/docs/apps/build/apis/graphql-admin/rate-limits';
// No ordering guarantee; delivery not always guaranteed; use reconciliation jobs.
export const SRC_SHOPIFY_WEBHOOKS = 'https://shopify.dev/docs/apps/build/webhooks';
// X-Shopify-Webhook-Id for duplicate detection.
export const SRC_SHOPIFY_WEBHOOK_DUPES = 'https://shopify.dev/docs/apps/build/webhooks/ignore-duplicates';
// "Shopify Flow is a free app available on the Basic, Grow, Advanced, and Plus plans." Send HTTP Request limited to Grow, Advanced, Plus.
export const SRC_SHOPIFY_FLOW = 'https://help.shopify.com/en/manual/shopify-flow';
// Sidekick: AI assistant in the admin; "presents changes for your review before applying them".
export const SRC_SHOPIFY_SIDEKICK = 'https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick';
// Draft orders for phone, email or in-person sales; a paid draft order becomes a regular order.
export const SRC_SHOPIFY_DRAFT_ORDERS = 'https://help.shopify.com/en/manual/fulfillment/managing-orders/create-orders';
// OWASP LLM06:2025 Excessive Agency: excessive functionality, permissions, autonomy.
export const SRC_OWASP_LLM06 = 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/';

const COST_GUIDE = '/blog/what-is-an-ai-agent-cost-2026';

export const SHOPIFY_AI_FAQS: ShopifyAiFaq[] = [
  // ── Basics ──
  { id: 'Q01', category: 'faq-basics', question: 'What is a Shopify AI agent?',
    answer: 'A Shopify AI agent is software that uses a large language model to do a store job in several steps, through Shopify\'s official APIs. It reads orders, customers, products and inventory, decides what should happen under rules you set, and then drafts or takes an action, such as creating a draft order or tagging an order for review. The difference from a chatbot is that an agent acts, not just answers.' },
  { id: 'Q02', category: 'faq-basics', question: 'Which AI agents are best for a Shopify store?',
    answer: 'Start with what Shopify already ships. Sidekick is Shopify\'s AI assistant in your admin, and Shopify Flow automates rule-based tasks for free on the Basic, Grow, Advanced and Plus plans. For support tickets, helpdesk products like Gorgias, Zendesk and Intercom have their own AI agents. A custom agent is best when the job spans Shopify and another system, such as your ERP, inbox or 3PL, and no app covers it.',
    link: { url: '/blog/best-ai-agents-for-ecommerce-2026', label: 'Best AI agents for ecommerce' } },
  { id: 'Q03', category: 'faq-basics', question: 'Can Shopify Sidekick do what a custom AI agent does?',
    answer: 'For work inside your admin, often yes. Shopify describes Sidekick as an AI assistant that can analyze data, manage orders and edit products, and it presents changes for your review before applying them. It is a tool for the person sitting in the admin. A custom agent runs on its own when an event happens, such as a purchase order arriving by email, and it can reach systems outside Shopify.',
    link: { url: SRC_SHOPIFY_SIDEKICK, label: 'Shopify Help: Sidekick', external: true } },
  { id: 'Q04', category: 'faq-basics', question: 'What is the difference between Shopify Flow and an AI agent?',
    answer: 'Flow follows rules you write: when an order comes in with this tag, do that. It is free, reliable and should be your first stop. An AI agent handles the messy part rules cannot: reading a customer email, working out which order it is about, and deciding which of five next steps fits. Many of our builds use both, with Flow for the fixed rules and the agent for the judgment calls.',
    link: { url: SRC_SHOPIFY_FLOW, label: 'Shopify Help: Flow', external: true } },
  { id: 'Q05', category: 'faq-basics', question: 'What jobs should a Shopify store give to an AI agent first?',
    answer: 'Pick a job your team repeats every day, where the data already lives in Shopify or your inbox, and where a person can check the result in seconds. For most stores that is order exception triage, where-is-my-order replies, wholesale orders that arrive by email or PDF, or return requests. Avoid starting with anything that moves money on its own.' },

  // ── How the build works ──
  { id: 'Q06', category: 'faq-build', question: 'How does an AI agent connect to Shopify?',
    answer: 'Through a custom app installed on your store, which gets its own access token with only the permissions the job needs. The agent reads and writes through the GraphQL Admin API and listens for events through webhooks. Shopify calls the REST Admin API legacy as of October 1, 2024, and new public apps must use GraphQL from April 1, 2025, so we build new agents on GraphQL.',
    link: { url: SRC_SHOPIFY_REST_LEGACY, label: 'shopify.dev: REST Admin API', external: true } },
  { id: 'Q07', category: 'faq-build', question: 'Does the Shopify plan I am on change what an AI agent can do?',
    answer: 'It changes how fast the agent can work. Shopify\'s GraphQL Admin API refills at 100 points a second on Standard plans, 200 on Advanced, 1,000 on Plus and 2,000 on Shopify for enterprise, and one query can never cost more than 1,000 points. A store with a few hundred orders a day rarely hits this. A bulk catalog rewrite or a large wholesale import has to be paced around it.',
    link: { url: SRC_SHOPIFY_RATE_LIMITS, label: 'shopify.dev: rate limits', external: true } },
  { id: 'Q08', category: 'faq-build', question: 'Can an AI agent create orders in Shopify?',
    answer: 'Yes, and the safe way is a draft order. Shopify lets staff create draft orders for phone, email or in-person sales, and a draft only becomes a real order once it is paid or completed. So our agents turn an emailed purchase order into a draft order with the right customer, items and prices, and a person on your team checks it and completes it.',
    link: { url: SRC_SHOPIFY_DRAFT_ORDERS, label: 'Shopify Help: draft orders', external: true } },
  { id: 'Q09', category: 'faq-build', question: 'What happens if Shopify sends the same event twice or misses one?',
    answer: 'It will happen, so we design for it. Shopify says webhooks can arrive more than once, out of order, or not at all. Our agents store each X-Shopify-Webhook-Id and skip repeats, never assume events arrive in order, and run a scheduled reconciliation job that re-reads recent orders from the API. That is how you avoid a duplicate refund or a missed exception.',
    link: { url: SRC_SHOPIFY_WEBHOOKS, label: 'shopify.dev: webhooks', external: true } },
  { id: 'Q10', category: 'faq-build', question: 'Can a Shopify AI agent work with NetSuite or another ERP?',
    answer: 'Yes. This is one of the most useful jobs. The agent reads the order in Shopify, checks stock, price or credit terms in NetSuite, Odoo or SAP Business One through their official APIs, and drafts the next step in whichever system owns it. If you already sync Shopify and your ERP with a connector like Celigo, the agent works alongside it and does not replace the sync.',
    link: { url: '/blog/ai-agents-erp-netsuite-odoo-sap-business-one-2026', label: 'AI agents inside your ERP' } },
  { id: 'Q11', category: 'faq-build', question: 'Can an AI agent handle Shopify B2B and wholesale orders?',
    answer: 'Yes, on plans that include Shopify B2B. Wholesale buyers often still email a PDF purchase order instead of using the portal. The agent reads the PDF, matches the buyer to their company record, matches each line to your SKUs and the buyer\'s price list, and drafts the order. Anything it cannot match, such as an old part number, goes to a person with the reason attached.',
    link: { url: '/services/shopify-plus-b2b', label: 'Shopify Plus B2B' } },
  { id: 'Q12', category: 'faq-build', question: 'Which AI model do you use for Shopify agents?',
    answer: 'We test models from OpenAI, Anthropic and Google on your own orders and emails, then pick on accuracy, cost per task and data terms. Different steps can use different models: a small cheap model to sort emails and a stronger one to read a messy purchase order. The model sits behind one setting, so it can be swapped later without rebuilding the agent.' },

  // ── Cost, timelines & support ──
  { id: 'Q13', category: 'faq-cost', question: 'How much does it cost to build an AI agent for Shopify?',
    answer: 'Building a custom AI agent costs roughly $5,000 to more than $180,000, according to a 2026 breakdown by development firm ProductCrafters. Where a Shopify agent lands depends on four things: how many systems the agent touches, whether it only reads or also writes, how messy the input is, and how many approval steps you need. A single-job agent that reads Shopify and drafts replies sits at the low end. One that reads PDFs, checks an ERP and writes draft orders costs more. We quote a fixed price per phase after a short scoping call. Our cost guide shows published market ranges.',
    link: { url: COST_GUIDE, label: 'AI agent cost guide' } },
  { id: 'Q14', category: 'faq-cost', question: 'What does a Shopify AI agent cost to run each month?',
    answer: 'Hosting for a custom AI agent typically runs $500 to $10,000 a month, and ProductCrafters puts yearly maintenance at $10,000 to $50,000 or more. Your bill has three parts. The AI model provider bills per use, based on how much text the agent reads and writes, and you pay them directly. Hosting for the agent is usually small. Then there is support: monitoring accuracy, fixing things when Shopify or an app changes, and improving the agent. We scope support as a monthly plan so the cost is known in advance.',
    link: { url: '/services/ai-agent-monitoring', label: 'AI agent monitoring and support' } },
  { id: 'Q15', category: 'faq-cost', question: 'How long does it take to build a Shopify AI agent?',
    answer: 'A working prototype on your real orders is usually ready 3 to 5 weeks in. One job on one or two systems, such as Shopify plus your helpdesk, takes 5 to 8 weeks to reach live use. A job across several systems, such as Shopify, an ERP and a 3PL, takes 8 to 14 weeks. The time goes into testing on real cases and edge cases, not into writing prompts.' },
  { id: 'Q16', category: 'faq-cost', question: 'Who supports the AI agent after launch?',
    answer: 'The same team that built it. Agents drift: Shopify changes an API version, an app updates its data, or your policies change. We re-score the agent against its test set every month, fix what breaks, and keep a log of every action it took. Most agencies hand over a demo and disappear. Support after launch is the part we are accountable for.',
    link: { url: '/services/ai-agent-monitoring', label: 'Monitoring and support' } },

  // ── Data, safety & ownership ──
  { id: 'Q17', category: 'faq-data', question: 'Is it safe to let an AI agent change things in my Shopify store?',
    answer: 'It is safe when the agent\'s power is limited by design. OWASP lists excessive agency as a top risk for AI systems: too many functions, too many permissions, too little human oversight. So our agents get only the API scopes their job needs, write drafts or tags instead of final changes, run every action through code checks, and hand anything with money or refunds to a person.',
    link: { url: SRC_OWASP_LLM06, label: 'OWASP LLM06:2025', external: true } },
  { id: 'Q18', category: 'faq-data', question: 'Will my customer data be used to train AI models?',
    answer: 'No. We build on the business API terms of model providers, which do not use your inputs for training by default, and never on personal chat accounts. The agent only sends the fields a task needs, so a model reading a return request sees the order and the message, not your whole customer list. We document where every piece of data goes so you can check it.' },
  { id: 'Q19', category: 'faq-data', question: 'Do we own the Shopify AI agent you build?',
    answer: 'Yes. The code, prompts, test sets and documentation are yours, in your own code repository and cloud account, and the custom app is installed on your store under your control. You hold the accounts with the AI model provider and pay them directly with no markup through us. If you move the work to another team, the agent keeps running.' },
  { id: 'Q20', category: 'faq-data', question: 'What stops an AI agent from giving a customer a wrong refund or discount?',
    answer: 'Refunds, discounts and price changes never run on the model\'s word alone. The agent can suggest one, with its reason and the order attached, but the action itself sits behind a rule in code and, above a limit you set, behind a person\'s approval. Every suggestion and every approval is logged, so you can see exactly what happened on any order.' },

  // ── Build, buy or hire ──
  { id: 'Q21', category: 'faq-choose', question: 'Should I build a custom Shopify AI agent or buy an app?',
    answer: 'Buy when a proven app covers the job inside Shopify or your helpdesk. It will be live in days. Build when the job crosses systems, when your rules are specific to your business, or when you need to own the test results and logs. Our honest rule: if Sidekick, Flow or a helpdesk AI agent can do it, we will tell you on the first call.',
    link: { url: '/blog/ai-agent-build-vs-buy-2026', label: 'Build vs buy guide' } },
  { id: 'Q22', category: 'faq-choose', question: 'Which agency can build an AI agent for a Shopify store?',
    answer: 'Look for a team that knows Shopify\'s APIs and your other systems, not only AI models. FactoryJet is a registered Shopify Partner that builds Shopify stores and AI agents, and our founder is involved in every AI project. Ask any agency to show an agent they have put live, explain how it handles duplicate webhooks, and tell you who supports it after launch.' },
  { id: 'Q23', category: 'faq-choose', question: 'Do I need Shopify Plus to use a custom AI agent?',
    answer: 'No. A custom app with an AI agent works on standard Shopify plans. Plus gives the agent more API capacity, 1,000 points a second instead of 100, which matters for large imports or high order volume. Some features the agent might use, such as Shopify B2B, depend on your plan, so we check your plan against the job during scoping.',
    link: { url: SRC_SHOPIFY_RATE_LIMITS, label: 'shopify.dev: rate limits', external: true } },
  { id: 'Q24', category: 'faq-choose', question: 'Can the AI agent handle customer support tickets too?',
    answer: 'Yes, and support has its own page because the design is different: the agent answers from your policies inside Zendesk or Gorgias, looks up the order in Shopify, and hands sensitive cases to a person. If support is your main job, start there. This page covers the store operations work behind it, such as orders, wholesale, returns and inventory.',
    link: { url: '/services/ai-customer-support-agents', label: 'AI customer support agents' } },
  // Added 2026-10-10 from a US buyer question seen in Search Console. Each product line restates
  // that vendor's own page, read 2026-10-09: loopreturns.com, the ReturnGO listing on apps.shopify.com,
  // support.aftership.com, yuma.ai and gorgias.com.
  { id: 'Q25', category: 'faq-choose', question: 'What vendors provide agentic AI to automate RMA approvals and refunds for a Shopify Plus store?',
    answer: 'AI assistants we asked on October 9, 2026 mostly named two kinds of product. Loop, ReturnGO and AfterShip Returns are returns apps: you set rules, and they approve the return and send the refund automatically. Yuma and Gorgias are support AI agents that issue a refund or start a return inside the customer conversation. Each says so on its own site. A custom agent, which FactoryJet builds, fits what rules cannot settle: emailed requests and wholesale returns under terms held in your ERP. It works alongside Loop or AfterShip, and refunds above your limit go to a person.',
    link: { url: '/blog/best-ai-agents-for-ecommerce-2026', label: 'Best AI agents for ecommerce' } },
];
