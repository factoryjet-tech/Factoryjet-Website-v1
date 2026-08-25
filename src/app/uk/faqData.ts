// Single source of truth for the /uk homepage FAQ.
//
// Both the visible accordion (sections/FAQ.tsx) and the FAQPage JSON-LD
// (schema.ts) read this one array. Do not hand-maintain a second copy.
//
// Until 2026-08-04 schema.ts kept its own literal and it had drifted: it
// carried a question that never rendered on the page ("Why is FactoryJet at a
// fixed, transparent price?", whose answer named a head office the page never
// mentions) and a WhatsApp number that did not match the visible one. Schema
// that does not match visible content is a Google structured-data violation,
// so the array below is the only place this content is allowed to live.

export type UkFaqCategoryId =
  | "web-design"
  | "ecommerce"
  | "ai-agents"
  | "ai-seo"
  | "general";

export type UkFaq = {
  cat: UkFaqCategoryId;
  q: string;
  a: string;
};

/** Display labels, in sidebar order. Counts are derived, never hardcoded. */
export const UK_FAQ_CATEGORY_LABELS: ReadonlyArray<{
  id: UkFaqCategoryId;
  label: string;
}> = [
  { id: "web-design", label: "Web Design & Development" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "ai-seo", label: "AI SEO: GEO/AEO/AIO" },
  { id: "general", label: "General" },
];

export const UK_FAQS: UkFaq[] = [
  {
    cat: "web-design",
    q: "How much does a website cost in the UK in 2026?",
    a: "UK website costs vary significantly with scope, from basic template sites to enterprise builds. FactoryJet pricing is fixed-price and scoped to your build: the main drivers are page count, custom design depth, and integrations. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. For UK business owners, remember that website design and development is a legitimate business expense for HMRC purposes, which can reduce the effective cost by 19–25% depending on your tax bracket.",
  },
  {
    cat: "web-design",
    q: "What is the best website design company in the UK?",
    a: "The best website design company depends on your specific needs and budget. Large agencies serve enterprise clients at premium rates, and mid-market agencies sit somewhere below that. FactoryJet occupies a unique position as the UK’s AI-native web design agency, delivering enterprise-grade quality on the same technology stack as Stripe and Vercel (Next.js 15, Tailwind CSS 4) at a fixed, scoped price quoted up front. Every site we build scores 90+ on Google Lighthouse and is optimised for both Google and AI search engines from day one.",
  },
  {
    cat: "web-design",
    q: "How long does it take to build a website in the UK?",
    a: "Most UK web design agencies take 8–16 weeks for a standard business website. FactoryJet delivers in 3–6 weeks for most projects, and as fast as 2 weeks for smaller sites. Our faster turnaround comes from building on a component-based architecture with AI-augmented development workflows, not from cutting corners. Every build includes responsive design, SEO optimisation, AI search readiness, and full quality assurance.",
  },
  {
    cat: "web-design",
    q: "What is the difference between a web designer and a web developer?",
    a: "A web designer focuses on the visual appearance, layout, typography, colours, and user experience. A web developer writes the code that makes the design functional, handling databases, server logic, and interactive features. At FactoryJet, every project gets both: our AI-augmented process handles design and development together, so you get a site that looks stunning and performs flawlessly without hiring two separate teams.",
  },
  {
    cat: "web-design",
    q: "Is WordPress still good for business websites in 2026?",
    a: "WordPress powers roughly 43% of all websites globally and remains a viable option for many businesses. However, WordPress sites typically score 50–70 on Google Lighthouse performance, require constant security patching, and are not optimised for AI search engines. Modern frameworks like Next.js 15 deliver significantly faster load times (under 2 seconds vs 4–6 seconds for WordPress), better SEO scores (90+ Lighthouse vs 60–80), and built-in AI crawler compatibility. FactoryJet builds exclusively on Next.js for these reasons: the performance difference directly impacts your revenue. Sites loading in one second convert at three times the rate of sites taking five seconds.",
  },
  {
    cat: "web-design",
    q: "Can I claim web design as a business expense in the UK?",
    a: "Yes. Website design, development, hosting, domain registration, SEO, AI agent development, and ongoing digital marketing are all legitimate business expenses in the UK. For limited companies, these reduce your corporation tax liability at the current rate of 19–25%. For sole traders, they reduce your income tax. In practice this means tax relief lowers the effective cost of a project by 19–25% after the deduction. AI agent development and ongoing SaaS-style costs are also fully deductible. Consult your accountant for advice specific to your situation.",
  },
  {
    cat: "web-design",
    q: "What is Next.js and why should my UK business use it?",
    a: "Next.js is a React-based framework used by Stripe, Vercel, TikTok, and Netflix for their websites. It delivers server-side rendering for instant load times, automatic code splitting for performance, built-in SEO optimisation, and static site generation for maximum speed. FactoryJet builds every UK client website on Next.js 15: the latest version, paired with Tailwind CSS 4. The result is websites that load in under two seconds, score 90+ on Lighthouse, and are readable by both Google and AI search engines like ChatGPT and Perplexity.",
  },
  {
    cat: "ecommerce",
    q: "Shopify vs WooCommerce, which is better for UK businesses in 2026?",
    a: "Shopify suits most UK SMBs; WooCommerce suits businesses that need deep customisation. Shopify manages hosting, security, payments and updates for you, so a small team can run a shop without a developer on call, in exchange for a monthly subscription plus card fees. WooCommerce is free software on top of WordPress, so you control everything, but you also own hosting, security and updates. If you already run WordPress, or your products have complex options and integrations, WooCommerce usually wins. We build on both and recommend after looking at your catalogue, your team and your integrations, not our preference.",
  },
  {
    cat: "ecommerce",
    q: "How much does an e-commerce website cost in the UK?",
    a: "UK e-commerce website costs vary widely, from a basic Shopify store to a large enterprise custom build. FactoryJet delivers Shopify and WooCommerce stores at a fixed price scoped to your build: the main drivers are catalogue size, theme customisation, and the integrations you need. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. Every build includes UK payment gateway integration (Stripe, PayPal, Klarna, Apple Pay), Royal Mail and DPD shipping configuration, and e-commerce SEO.",
  },
  {
    cat: "ecommerce",
    q: "How do I start an online store in the UK?",
    a: "Starting an online store in the UK involves platform selection (Shopify or WooCommerce), store design and development, product catalogue setup, UK payment gateway integration (Stripe, PayPal, Klarna), shipping configuration (Royal Mail, DPD, Evri), and launch-ready e-commerce SEO. You will also need to register for VAT if your turnover exceeds £90,000 and comply with UK consumer rights regulations for online selling including 14-day cooling-off periods. FactoryJet provides end-to-end support from platform selection through post-launch optimisation, typically delivering a fully functional store in 3–6 weeks.",
  },
  {
    cat: "ecommerce",
    q: "What is headless commerce and is it right for my business?",
    a: "Headless commerce separates your storefront (what customers see) from your backend (inventory, payments, orders). This allows you to build a blazing-fast frontend using modern frameworks like Next.js while connecting to Shopify or WooCommerce for the commerce engine. It is ideal for businesses with high traffic, complex product catalogues, or multi-channel selling needs. For most UK SMBs, a standard Shopify or WooCommerce build is more cost-effective. FactoryJet recommends headless architecture only when the performance and flexibility benefits justify the additional investment.",
  },
  {
    cat: "ecommerce",
    q: "How long does it take to build an e-commerce store in the UK?",
    a: "With FactoryJet, a Shopify or WooCommerce store can be designed, built, and launched in 3–6 weeks. This includes custom theme development, product data migration if applicable, UK payment gateway integration, shipping configuration, and launch-ready e-commerce SEO. Most traditional agencies quote 8–16 weeks for the same scope. Our faster turnaround comes from building on a component-based architecture with AI-assisted development, not from cutting corners.",
  },
  {
    cat: "ai-agents",
    q: "What is an AI agent and how is it different from a chatbot?",
    a: "A chatbot follows a script. If the question does not match the script, it fails. An AI agent uses a large language model to read the question in plain language, work out what is being asked, and then take steps to finish the job: look something up, write a record, book a slot, or hand over to a person. The industry calls this agentic AI. In practice an agent can qualify a sales enquiry, chase a missing document, or process a return end to end, and it gets better as you feed it real examples of good and bad answers.",
  },
  {
    cat: "ai-agents",
    q: "How much does it cost to build an AI agent in the UK?",
    a: "Costs vary significantly based on complexity, from simple template FAQ chatbots through to enterprise-grade multi-agent systems with complex integrations. FactoryJet’s custom AI agent development is fixed-price and scoped to your build: the main drivers are the number of integrations, the level of autonomy, and workflow complexity. A focused single-function agent is an accessible entry point for UK SMBs, and every project is quoted up front after a free discovery call. Most clients see ROI within three to six months through reduced staffing costs, 24/7 availability, and automated handling of routine interactions.",
  },
  {
    cat: "ai-agents",
    q: "What is agentic AI and why is everyone talking about it?",
    a: "Agentic AI means AI that plans and acts, not just answers. A normal assistant replies to a question. An agent breaks a goal into steps, calls the tools it needs, checks its own work, and escalates when it is stuck. It is getting attention because most business value sits in multi-step work rather than single answers: chasing a document, reconciling an order, qualifying a lead. We build agents with a narrow written job description, an explicit list of things they must never do, and a human handover path that always works.",
  },
  {
    cat: "ai-agents",
    q: "Can AI agents integrate with my existing business software?",
    a: "Yes. Modern AI agents connect with virtually any business system through APIs and integration protocols. FactoryJet builds agents that integrate with CRMs (HubSpot, Salesforce, Pipedrive), ERPs (SAP, ERPNext), email platforms (Gmail, Outlook), communication tools (Slack, Microsoft Teams, WhatsApp), e-commerce platforms (Shopify, WooCommerce), and custom databases. We use Model Context Protocol, an open standard for connecting AI tools to data, so your agent can read, write and act across the software you already run. Every connection is scoped: the agent only gets the access its job needs.",
  },
  {
    cat: "ai-agents",
    q: "Are AI agents GDPR compliant in the UK?",
    a: "All AI agents built by FactoryJet are designed for full GDPR compliance including data processing agreements, explicit consent mechanisms, data minimisation principles, right to erasure implementation, and complete audit trails. For UK financial services firms, legal practices, and healthcare organisations, we implement additional safeguards including role-based access controls and data residency requirements. We can deploy agents on UK-based infrastructure if data sovereignty is a concern.",
  },
  {
    cat: "ai-seo",
    q: "What is generative engine optimisation (GEO) and how is it different from traditional SEO?",
    a: "Generative engine optimisation is structuring your content so AI tools quote you. Google AI Overviews, ChatGPT, Perplexity and Claude answer a question directly and cite a handful of sources. GEO is the work of being one of those sources. Traditional SEO aims at a position in a list of links. GEO aims at being the sentence the answer is built from. In practice that means answering the question near the top of the page, keeping structured data honest, citing real sources, and making sure AI crawlers are not blocked.",
  },
  {
    cat: "ai-seo",
    q: "What is answer engine optimisation (AEO)?",
    a: "Answer engine optimisation focuses on winning the direct-answer positions in search results, featured snippets, People Also Ask boxes, knowledge panels, and AI-generated summaries that now appear at the top of around 30% of UK Google searches. AEO delivers the fastest results of any SEO discipline, often within 2–8 weeks, because it targets answer positions that already exist in search results rather than competing for traditional organic rankings. It complements traditional SEO and GEO by capturing different types of search intent.",
  },
  {
    cat: "ai-seo",
    q: "Is SEO dead because of AI?",
    a: "No. Google still handles billions of searches a day, and organic remains the cheapest reliable channel for most UK businesses. What changed is where the answer appears. Ofcom found that around 30% of searches now return an AI overview, and that more than half of UK adults see those summaries often. Google’s own guidance says there are no extra requirements to appear in AI Overviews or AI Mode. So the work is the same fundamentals done properly: clear answers near the top, honest structured data, fast pages, and content worth quoting.",
  },
  {
    cat: "ai-seo",
    q: "How do I get my UK business mentioned in ChatGPT?",
    a: "Getting mentioned in ChatGPT requires creating authoritative, entity-rich content that large language models recognise as trustworthy. You also need to ensure AI crawlers (GPTBot, ClaudeBot, PerplexityBot) can access your site through proper robots.txt and Cloudflare configuration, implement structured data and schema markup, build brand authority through citations and mentions across authoritative web properties, and structure content in clear question-and-answer formats. ChatGPT currently accounts for 77% of all AI-driven website referral traffic, making it the single most important AI search platform for UK businesses.",
  },
  {
    cat: "ai-seo",
    q: "How much does SEO cost in the UK?",
    a: "UK SEO pricing varies widely, from freelance consultants through to enterprise retainers from large agencies. FactoryJet’s monthly SEO retainer is a fixed price scoped to your goals, combining traditional SEO with AI SEO (GEO/AEO/AIO). The main drivers are your competition, target keywords, and content volume, and every retainer is quoted up front and runs month-to-month. We also offer an AI SEO-only service covering generative engine optimisation, answer engine optimisation, and AI visibility: a service that almost no other traditional agency offers at any price.",
  },
  {
    cat: "ai-seo",
    q: "What is llms.txt and do I need it?",
    a: "llms.txt is an emerging technical standard that helps AI systems understand your website’s content structure, similar to how robots.txt guides search engine crawlers. It provides large language models with a structured map of your most important content, making it easier for ChatGPT, Claude, Perplexity, and Google AI Overviews to cite your business accurately. While not yet universally adopted, implementing llms.txt is a low-effort, high-potential action that positions your website for AI search visibility. FactoryJet includes llms.txt implementation as part of our AI SEO service.",
  },
  {
    cat: "ai-seo",
    q: "What is share of AI voice and how do I measure it?",
    a: "Share of AI voice measures how often AI assistants name your brand when someone asks a question you want to win. It is the AI version of share of voice in traditional marketing. We measure it by running the same list of buying questions through ChatGPT, Perplexity, Claude and Google AI Overviews on a schedule, then recording which brands get named and in what order. You get a number to track month to month, plus the exact answers, so you can see who is being quoted instead of you.",
  },
  {
    cat: "general",
    q: "How does FactoryJet deliver faster than a traditional agency?",
    a: "Three reasons, none of them cutting corners. First, we use AI across design, code review and testing, so senior engineers spend their hours on the parts that need judgement. Second, we build from a component library, so a new site is assembled and customised rather than rebuilt from nothing. Third, there is no account-manager layer between you and the people writing the code, which removes a whole round of relayed feedback. Most UK builds land in three to six weeks, and every one clears Lighthouse 90+ before it goes live.",
  },
  {
    cat: "general",
    q: "Do you work with businesses outside major UK cities?",
    a: "Absolutely. While our city-specific pages focus on major cities: Leeds, Manchester, Birmingham, Sheffield, Bristol, Edinburgh, Liverpool, Glasgow, Newcastle, and Nottingham, we work with businesses across the entire United Kingdom. Whether you are in a market town, a suburban business park, or a rural area, our remote-first model means you get the same quality of service, the same AI-native capabilities, and the same competitive pricing. Our clients span every region of England, Scotland, Wales, and Northern Ireland.",
  },
  {
    cat: "general",
    q: "What industries does FactoryJet serve in the UK?",
    a: "We serve businesses across every major UK industry including financial services and FinTech, legal and professional services, fashion and retail, healthcare and health-tech, manufacturing, hospitality and tourism, education, technology and SaaS, construction and property, food and beverage, and creative industries. Our work spans B2B and B2C businesses, from solo founders and startups to companies with hundreds of employees. Each industry has specific digital requirements and we tailor our approach accordingly.",
  },
  {
    cat: "general",
    q: "How do I get started with FactoryJet?",
    a: "Start with a free digital audit. We analyse your current website, search visibility across Google and AI platforms, competitor positioning, and growth opportunities. The audit takes 48 hours to complete and includes specific, actionable recommendations. From there, we provide a custom proposal with transparent, fixed-price quoting, clear deliverables, and a realistic timeline. No obligation, no high-pressure sales. Contact us via WhatsApp at +91 96999 77699 or email connect@factoryjet.com to begin.",
  },
];

/** Derived count for one category. Never hardcode these numbers. */
export const ukFaqCount = (cat: UkFaqCategoryId): number =>
  UK_FAQS.filter((f) => f.cat === cat).length;
