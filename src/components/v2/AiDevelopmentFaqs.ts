/**
 * AI Development Services FAQ (/services/ai-development): the single source for the
 * visible accordion in AiDevelopmentSections.tsx AND the FAQPage JSON-LD in
 * src/app/services/ai-development/page.tsx. Never duplicate these strings elsewhere.
 *
 * Questions: Google People Also Ask, US (location 2840), from the 2026-09-26 SERP pull
 * (pipeline/research/data/us-opps-2026-09-26/serps.json) plus one extra PAA pass on
 * 2026-09-26 (ai development services, custom ai development, generative ai development
 * services, rag development services, ai software development company). Job-loss and
 * celebrity PAA questions were left out. Remaining questions are buyer questions from
 * the AU model page, rewritten for US buyers.
 *
 * Every external claim links to the page it came from (fetch-verified 2026-09-26).
 */

export const AI_DEV_FAQ_CATEGORIES = [
  { id: 'faq-basics', label: 'AI development basics' },
  { id: 'faq-build', label: 'RAG, models & accuracy' },
  { id: 'faq-cost', label: 'Cost, timelines & support' },
  { id: 'faq-data', label: 'Data, security & compliance' },
  { id: 'faq-choose', label: 'Choosing an AI development company' },
] as const;

export interface AiDevFaq {
  id: string;
  category: (typeof AI_DEV_FAQ_CATEGORIES)[number]['id'];
  question: string;
  answer: string;
  /** Optional link rendered after the answer (external source or internal page). Not part of the schema text. */
  link?: { url: string; label: string; external?: boolean };
}

export const SRC_OPENAI_DATA = 'https://platform.openai.com/docs/guides/your-data';
export const SRC_ANTHROPIC_TRAINING = 'https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training';
export const SRC_ECFR_BA = 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103';
export const SRC_OWASP_LLM01 = 'https://genai.owasp.org/llmrisk/llm01-prompt-injection/';
export const SRC_RAG_PAPER = 'https://arxiv.org/abs/2005.11401';

export const AI_DEV_FAQS: AiDevFaq[] = [
  // ── Basics ──
  { id: 'Q01', category: 'faq-basics', question: 'What is AI development?',
    answer: 'AI development is designing, building, testing and running software that uses artificial intelligence to do a useful job in a business. Today that usually means software built around a large language model (LLM), the kind of AI behind ChatGPT and Claude, connected to your own data and systems. It covers the whole path: picking the job, preparing data, building, measuring accuracy, going live and keeping it working.' },
  { id: 'Q02', category: 'faq-basics', question: 'What are AI development services?',
    answer: 'AI development services are the pieces of work an AI development company sells. The usual list: custom AI software, AI integration with the systems you already run, question answering over your own documents (RAG), model selection and fine-tuning, accuracy testing, secure deployment, and support after launch. Most real projects combine three or four of these rather than buying one on its own.' },
  { id: 'Q03', category: 'faq-basics', question: 'What does an AI development company do?',
    answer: 'It turns an AI idea into software your team uses every day. That means scoping one measurable job, finding and cleaning the data it needs, choosing a model, building the app and the connections to your CRM, ERP, store or helpdesk, testing it on real cases, shipping it with permissions and logs, and then watching it after launch. A good one also tells you when a ready-made tool is enough.' },
  { id: 'Q04', category: 'faq-basics', question: 'Is AI development the same as building an AI agent?',
    answer: 'No. An AI agent is one thing an AI development company can build: AI that takes actions across your systems within rules you set, such as updating an order or chasing an invoice. AI development is the wider field. It also covers document search, data extraction, AI features inside your own software, and internal tools that draft or summarize but never act on their own.',
    link: { url: '/services/ai-agent-development', label: 'AI agent development' } },
  { id: 'Q05', category: 'faq-basics', question: 'What does AI integration do?',
    answer: 'AI integration connects an AI model to the software your business already runs, so it can read the right information and put its result in the right place. For example, AI that reads an emailed purchase order and creates a draft sales order in NetSuite, or summarizes a customer history inside HubSpot before a call. The value comes from the connection, not from the model sitting alone in a chat window.',
    link: { url: '/services/ai-integration-services', label: 'AI integration services' } },
  { id: 'Q06', category: 'faq-basics', question: 'What are examples of AI integration?',
    answer: 'Common ones we see in US businesses: product descriptions drafted from supplier spreadsheets straight into Shopify; emailed purchase orders turned into draft orders in an ERP; long Zendesk ticket threads summarized with a suggested reply; call notes written onto the Salesforce record; and a Microsoft Teams assistant that finds the right policy in SharePoint. Each one removes a copy-and-paste step a person does every day.' },
  { id: 'Q07', category: 'faq-basics', question: 'Can I create my own custom AI?',
    answer: 'Yes, for simple jobs. Custom GPTs, Microsoft Copilot Studio and no-code tools like n8n or Zapier let a non-developer set up an assistant that answers from uploaded files. It gets harder when the AI must read and write inside your own systems, handle customer data safely, and stay accurate on thousands of messy real cases. That is the point where most teams bring in a developer.' },
  { id: 'Q08', category: 'faq-basics', question: 'Can I build my own AI chatbot?',
    answer: 'Yes. A basic chatbot that answers from your help pages can be set up in an afternoon with off-the-shelf tools. A chatbot customers rely on needs more: answers grounded in your current policies, a clean handoff to a person, order lookups through your store or helpdesk, logging, and testing on real questions before launch. We build that kind on our AI chatbot development page.',
    link: { url: '/services/ai-chatbot-development', label: 'AI chatbot development' } },
  { id: 'Q09', category: 'faq-basics', question: 'What is the 30% rule for AI?',
    answer: 'There is no official 30% rule. People use the phrase for different rules of thumb, most often that AI should take on a slice of a job, around a third, while people keep the judgment calls. We treat it as a reminder, not a target: give AI the repeatable part of a task, keep a person on the decisions that matter, and measure the real time saved instead of assuming a number.' },

  // ── RAG, models & accuracy ──
  { id: 'Q10', category: 'faq-build', question: 'What is a RAG in development?',
    answer: 'RAG stands for retrieval-augmented generation. Think of it as an open-book exam. Before the AI answers, the system finds the most relevant passages in your own documents, hands them to the model, and tells it to answer only from those. That is how AI answers from your price list instead of guessing, and shows which page each answer came from.',
    link: { url: SRC_RAG_PAPER, label: 'Lewis et al., arXiv 2005.11401', external: true } },
  { id: 'Q11', category: 'faq-build', question: 'What is RAG vs LLM?',
    answer: 'An LLM is the model itself: it writes answers from patterns it learned during training, which stop at a cutoff date and never included your private documents. RAG is a design around the model: a search step finds your relevant documents first, then the LLM writes the answer from them. You almost always use both. The LLM does the writing; RAG decides what it is allowed to read.' },
  { id: 'Q12', category: 'faq-build', question: 'Is RAG still relevant?',
    answer: 'Yes. Models now accept much longer inputs, but that does not remove the need to choose what the model reads. Your data changes daily, sits in systems with permissions, and is often too large to paste in. Retrieval handles all three and shows sources. What has changed is how it is built: better search, smarter chunking of documents, and agents that decide when to look something up.' },
  { id: 'Q13', category: 'faq-build', question: 'Should we fine-tune a model or use RAG?',
    answer: 'Use RAG when the AI needs facts that change, like prices, stock, policies or case files. Consider fine-tuning when you need a consistent format, tone or classification that careful prompting cannot hold, and you have hundreds of good examples. Fine-tuning does not reliably teach a model new facts, and it has to be redone when your data changes. Most business projects start with prompting plus RAG.' },
  { id: 'Q14', category: 'faq-build', question: 'Which LLM has the best RAG?',
    answer: 'There is no single winner, and it changes every few months. The right model is the one that scores best on your own test questions at a running cost you accept, with data terms your compliance team signs off. We test two or three models from OpenAI, Anthropic, Google and open-weight families on your real cases, then build so the model can be swapped later without a rewrite.' },
  { id: 'Q15', category: 'faq-build', question: 'How do you stop the AI from making things up?',
    answer: 'Nothing removes the risk completely, so we design around it. The AI answers from your own documents, shows its sources, says it does not know when the sources are silent, and a person approves anything with real consequences. Before launch we score it against a set of real questions with known answers, and we keep scoring it every month after launch.' },
  { id: 'Q16', category: 'faq-build', question: 'How do you test an AI system before it goes live?',
    answer: 'We build an evaluation set: real examples from your business with the answer a skilled employee would give. Every version of the system is scored against it for accuracy, sources cited, refusals when it should refuse, speed and running cost. We add tricky cases on purpose, such as prompt-injection attempts. You approve the pass mark before build starts, and nothing ships until it passes.' },

  // ── Cost, timelines & support ──
  { id: 'Q17', category: 'faq-cost', question: 'How much does it cost to build a custom AI?',
    answer: 'Building a custom AI agent costs roughly $5,000 to more than $180,000, according to a 2026 breakdown by development firm ProductCrafters. Scope sets the price, not a rate card. The drivers are how many systems the AI connects to, how clean your data is, how accurate it must be, how much personal or regulated data it touches, and whether you want ongoing support. We quote a fixed price per phase after a scoping call, and model usage is billed to you directly by the provider. Our AI agent cost guide shows published US market ranges.',
    link: { url: '/blog/what-is-an-ai-agent-cost-2026', label: 'AI agent cost guide' } },
  { id: 'Q18', category: 'faq-cost', question: 'How much does it cost to hire an AI developer?',
    answer: 'US AI development companies listed on Clutch charge about $50 to $99 an hour, according to the September 2026 Clutch pricing guide. A full-time AI engineer is a senior hire, and one person rarely covers data work, integrations, security and evaluation alone. That is why many businesses hire a team for the first build, then decide whether to bring the work in-house. Compare options on the total cost of getting one system live and supported, not on an hourly rate. Our hiring guide covers what to ask.',
    link: { url: '/blog/how-to-hire-an-ai-agent-developer-2026', label: 'How to hire an AI developer' } },
  { id: 'Q19', category: 'faq-cost', question: 'How much does AI actually cost to run?',
    answer: 'Hosting for a custom AI agent typically runs $500 to $10,000 a month, and yearly maintenance $10,000 to $50,000 or more, according to ProductCrafters. Day to day, running cost is mostly model usage, billed per token (a token is roughly a short word or part of one), plus hosting for your app, database and search index. It scales with how many requests you send and how much text each one carries. We estimate running cost during the prototype, pick the smallest model that meets your accuracy bar, cache repeated work, and show usage in every monthly report.' },
  { id: 'Q20', category: 'faq-cost', question: 'How long does custom AI development take?',
    answer: 'A working prototype on your own data usually takes 3 to 5 weeks. A production build for one job connected to one or two systems runs 5 to 8 weeks. Builds that touch several systems, regulated data or custom interfaces take 8 to 14 weeks. Messy data and older systems stretch the timeline; a narrow, well-defined job shortens it. You see working software from the early weeks.' },
  { id: 'Q21', category: 'faq-cost', question: 'What happens after the AI goes live?',
    answer: 'We stay on. Monthly support covers accuracy monitoring against your test set, fixing problems, updating prompts and connections when your systems change, and testing new models as they are released. You get a plain report on usage, cost and where the system gets things wrong. You can take support in-house any time, because the code and documentation are yours.',
    link: { url: '/services/ai-agent-monitoring', label: 'AI monitoring and support' } },

  // ── Data, security & compliance ──
  { id: 'Q22', category: 'faq-data', question: 'Will OpenAI or Anthropic train their models on our data?',
    answer: 'Not by default on their business products. OpenAI says data sent to its API has not been used to train its models since March 1, 2023 unless you opt in, and that abuse-monitoring logs are kept for up to 30 days by default. Anthropic says it does not train on inputs or outputs from its commercial products, including its API, by default. Consumer apps can have different terms, so staff should not use personal accounts for work.',
    link: { url: SRC_OPENAI_DATA, label: 'OpenAI: your data', external: true } },
  { id: 'Q23', category: 'faq-data', question: 'Can AI work with health data under HIPAA?',
    answer: 'It can, with the right contracts and design. Under federal rules, a vendor that creates, receives, maintains or transmits protected health information on behalf of a covered entity is a business associate. So every provider in the chain, including the model provider and host, needs to be set up for that. OpenAI, for example, offers a Business Associate and Healthcare Addendum and lists which API endpoints are eligible.',
    link: { url: SRC_ECFR_BA, label: '45 CFR 160.103', external: true } },
  { id: 'Q24', category: 'faq-data', question: 'What is prompt injection, and how do you defend against it?',
    answer: 'Prompt injection is when text the AI reads, such as a customer email or a web page, contains instructions that change what the AI does. OWASP ranks it first in its 2025 Top 10 for LLM applications and says it may not be fully preventable. So we limit the damage: minimal permissions, actions run through code with checks, a person on risky steps, and tests for known attacks.',
    link: { url: SRC_OWASP_LLM01, label: 'OWASP LLM01:2025', external: true } },
  { id: 'Q25', category: 'faq-data', question: 'Do we own the AI you build?',
    answer: 'Yes. The code, integrations, prompts, evaluation sets and documentation are yours, in your repository and your cloud account. We are not a platform you rent. You hold the accounts with the model providers and cloud hosts and pay them directly, with no markup through us. If you move the work in-house or to another firm, everything keeps running.' },

  // ── Choosing an AI development company ──
  { id: 'Q26', category: 'faq-choose', question: 'What are the top AI development companies in the US?',
    answer: 'It depends on your size and the job. In our 26 September 2026 check, US-based ScienceSoft (Texas) and Coherent Solutions (Minneapolis) sat on Google page one for ai development company, EffectiveSoft (San Diego) was cited in the Google AI Overview for ai development services, and AI assistants have named Azumo (San Francisco). The table on this page lists what each offers. Talk to two or three, including one small enough that the founder is on your project.',
    link: { url: '/blog/best-ai-agent-development-companies-small-business', label: 'AI development companies for small business' } },
  { id: 'Q27', category: 'faq-choose', question: 'How do I choose the best AI development company?',
    answer: 'Ask to see AI systems they have put live, not demos. Ask who will write the code and whether that team supports it after launch. Confirm you will own the code, prompts and data. Ask how they measure accuracy, where your data will be processed and under which terms, and when they would tell you to buy a tool instead. Clear, specific answers to all of these are the best signal you will get.' },
  { id: 'Q28', category: 'faq-choose', question: 'Should we buy an off-the-shelf AI tool or build custom AI?',
    answer: 'Buy first when the job is general: writing, summarizing, meeting notes or searching documents. Microsoft Copilot or ChatGPT Enterprise roll out quickly. Build when the job depends on your own systems, pricing rules or data, or when a tool cannot reach the software your team uses. Most businesses end up with a mix, and we will tell you honestly which side each job falls on.',
    link: { url: '/blog/ai-agent-build-vs-buy-2026', label: 'Build vs buy guide' } },
  { id: 'Q29', category: 'faq-choose', question: 'Are you tied to one AI model or vendor?',
    answer: 'No. We do not resell any AI platform. We choose between models from OpenAI, Anthropic, Google and open-weight options based on accuracy on your test cases, where your data needs to stay, and running cost. We build so the model can be swapped later without rewriting the system, because the best model this year may not be the best one next year.' },
  // Marketplace pages opened 2026-10-09; answer counts are from our 9 Oct 2026 AI answer check.
  { id: 'Q30', category: 'faq-choose', question: 'Where can I hire chatbot developers?',
    answer: 'On a freelance marketplace or from a development company. Upwork, Toptal, Arc and Freelancer.com list freelance chatbot developers you hire and manage yourself. When we asked AI assistants this on 9 October 2026, the Upwork page appeared in 8 of 14 answers, and the Arc and Toptal pages in 6 each. A development company fits when the chatbot must read orders or tickets in your own systems and be supported after launch. FactoryJet is that kind of firm, and we work remotely with US clients. For answers from your help pages only, an off-the-shelf tool can be enough.',
    link: { url: '/services/ai-chatbot-development', label: 'AI chatbot development' } },
];
