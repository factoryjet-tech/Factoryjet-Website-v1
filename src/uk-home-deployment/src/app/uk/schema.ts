// JSON-LD schema for /uk
// Included: Organization, 4 Services, FAQPage (11 Q&As), BreadcrumbList.
// Injected via <Script type="application/ld+json"> in page.tsx.

const URL = "https://factoryjet.com/uk";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FactoryJet Technologies",
  url: "https://factoryjet.com",
  logo: "https://factoryjet.com/logo.png",
  description:
    "FactoryJet is the UK’s AI-native digital agency. Web design, Shopify development, custom AI agents & AI SEO (GEO/AEO/AIO) for British businesses. 50–60% below UK agency rates.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  sameAs: ["https://factoryjet.com"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "connect@factoryjet.com",
      telephone: "+91-9699-977-699",
      areaServed: "GB",
      availableLanguage: ["English"],
    },
  ],
};

const provider = {
  "@type": "Organization",
  name: "FactoryJet Technologies",
  url: "https://factoryjet.com",
};

const areaServed = { "@type": "Country", name: "United Kingdom" };

const services = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Design & Development",
    name: "Web Design & Development for UK Businesses",
    description:
      "Next.js 15 + Tailwind CSS 4 websites for UK businesses. Lighthouse 90+, under two-second loads, built for both Google and AI search visibility. 50–60% below UK agency averages.",
    provider,
    areaServed,
    url: "https://factoryjet.com/uk/web-design",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice: "1500",
      highPrice: "8000",
      offerCount: "2",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "E-Commerce Development",
    name: "E-Commerce Development for UK Retailers & Brands",
    description:
      "Shopify, Shopify Plus, WooCommerce and headless commerce stores with UK payment gateway and shipping integration. Launch-ready in 3–6 weeks.",
    provider,
    areaServed,
    url: "https://factoryjet.com/uk/ecommerce",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice: "2000",
      highPrice: "10000",
      offerCount: "2",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Agent Development",
    name: "AI Agent Development for UK Businesses",
    description:
      "Custom AI agents, agentic AI systems, and multi-agent orchestration with MCP integration. Customer service, sales qualification, document processing, and workflow automation.",
    provider,
    areaServed,
    url: "https://factoryjet.com/uk/ai-agents",
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: "3000",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "GBP",
        minPrice: "3000",
      },
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI SEO (GEO / AEO / AIO)",
    name: "AI SEO for UK Businesses — GEO, AEO, AIO & Traditional SEO",
    description:
      "Search-everywhere optimisation combining traditional SEO with generative engine optimisation (GEO), answer engine optimisation (AEO), and AI optimisation (AIO) for ChatGPT, Perplexity, Claude, and Google AI Overviews.",
    provider,
    areaServed,
    url: "https://factoryjet.com/uk/ai-seo",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice: "500",
      highPrice: "2000",
      offerCount: "2",
      availability: "https://schema.org/InStock",
    },
  },
];

// All 28 FAQ entries — must match the content rendered in FAQ.tsx exactly.
const faqPairs: Array<{ q: string; a: string }> = [
  {
    q: "How much does a website cost in the UK in 2026?",
    a: "UK website costs vary significantly. Basic template websites cost £500–£2,500. Standard business websites from agencies run £3,000–£12,000. Custom-built sites on modern frameworks range from £10,000–£50,000, and enterprise projects can exceed £100,000. FactoryJet delivers professional, custom-built websites on Next.js 15 starting from £1,500, with most projects falling in the £2,000–£8,000 range — 50–60% below the UK agency average for comparable or superior quality. For UK business owners, remember that website design and development is a legitimate business expense for HMRC purposes, which can reduce the effective cost by 19–25% depending on your tax bracket.",
  },
  {
    q: "What is the best website design company in the UK?",
    a: "The best website design company depends on your specific needs and budget. Large agencies like Pentagram and Moving Brands serve enterprise clients at premium rates. Mid-market agencies charge £8,000–£25,000 per project. FactoryJet occupies a unique position as the UK’s AI-native web design agency — delivering enterprise-grade quality on the same technology stack as Stripe and Vercel (Next.js 15, Tailwind CSS 4) at 50–60% below traditional UK agency rates. Every site we build scores 90+ on Google Lighthouse and is optimised for both Google and AI search engines from day one.",
  },
  {
    q: "How long does it take to build a website in the UK?",
    a: "Most UK web design agencies take 8–16 weeks for a standard business website. FactoryJet delivers in 3–6 weeks for most projects, and as fast as 2 weeks for smaller sites. Our faster turnaround comes from building on a component-based architecture with AI-augmented development workflows — not from cutting corners. Every build includes responsive design, SEO optimisation, AI search readiness, and full quality assurance.",
  },
  {
    q: "What is the difference between a web designer and a web developer?",
    a: "A web designer focuses on the visual appearance — layout, typography, colours, and user experience. A web developer writes the code that makes the design functional — handling databases, server logic, and interactive features. At FactoryJet, every project gets both: our AI-augmented process handles design and development together, so you get a site that looks stunning and performs flawlessly without hiring two separate teams.",
  },
  {
    q: "Is WordPress still good for business websites in 2026?",
    a: "WordPress powers roughly 43% of all websites globally and remains a viable option for many businesses. However, WordPress sites typically score 50–70 on Google Lighthouse performance, require constant security patching, and are not optimised for AI search engines. Modern frameworks like Next.js 15 deliver significantly faster load times (under 2 seconds vs 4–6 seconds for WordPress), better SEO scores (90+ Lighthouse vs 60–80), and built-in AI crawler compatibility. FactoryJet builds exclusively on Next.js for these reasons — the performance difference directly impacts your revenue. Sites loading in one second convert at three times the rate of sites taking five seconds.",
  },
  {
    q: "Can I claim web design as a business expense in the UK?",
    a: "Yes. Website design, development, hosting, domain registration, SEO, AI agent development, and ongoing digital marketing are all legitimate business expenses in the UK. For limited companies, these reduce your corporation tax liability at the current rate of 19–25%. For sole traders, they reduce your income tax. This means the effective cost of a £5,000 website project could be as low as £3,750–£4,050 after tax relief. AI agent development and ongoing SaaS-style costs are also fully deductible. Consult your accountant for advice specific to your situation.",
  },
  {
    q: "What is Next.js and why should my UK business use it?",
    a: "Next.js is a React-based framework used by Stripe, Vercel, TikTok, and Netflix for their websites. It delivers server-side rendering for instant load times, automatic code splitting for performance, built-in SEO optimisation, and static site generation for maximum speed. FactoryJet builds every UK client website on Next.js 15 — the latest version — paired with Tailwind CSS 4. The result is websites that load in under two seconds, score 90+ on Lighthouse, and are readable by both Google and AI search engines like ChatGPT and Perplexity.",
  },
  {
    q: "Shopify vs WooCommerce — which is better for UK businesses in 2026?",
    a: "Both are excellent platforms serving different needs. Shopify (5.8 million live sites globally) is better for businesses that want simplicity, reliability, and managed infrastructure — hosting, security, and payments work out of the box. UK Shopify plans start from £5–£344 per month with card processing at 1.5–2.2% plus 25p. WooCommerce (4.5 million live sites) is better for businesses needing unlimited customisation who are comfortable managing their own hosting. For most UK SMBs launching their first online store, we typically recommend Shopify for lower maintenance overhead. For businesses with complex product configurations, multiple integrations, or existing WordPress sites, WooCommerce offers more flexibility. We build on both and recommend based on your actual business needs, not our preferred platform.",
  },
  {
    q: "How much does an e-commerce website cost in the UK?",
    a: "UK e-commerce website costs range from £2,000 for a basic Shopify store to £50,000+ for enterprise custom builds. The average UK Shopify agency charges £8,000–£15,000 for a professional store. FactoryJet delivers Shopify and WooCommerce stores starting from £2,000, with most projects in the £3,000–£10,000 range — 50–80% below UK market rates. Every build includes UK payment gateway integration (Stripe, PayPal, Klarna, Apple Pay), Royal Mail and DPD shipping configuration, and e-commerce SEO.",
  },
  {
    q: "How do I start an online store in the UK?",
    a: "Starting an online store in the UK involves platform selection (Shopify or WooCommerce), store design and development, product catalogue setup, UK payment gateway integration (Stripe, PayPal, Klarna), shipping configuration (Royal Mail, DPD, Evri), and launch-ready e-commerce SEO. You will also need to register for VAT if your turnover exceeds £90,000 and comply with UK consumer rights regulations for online selling including 14-day cooling-off periods. FactoryJet provides end-to-end support from platform selection through post-launch optimisation, typically delivering a fully functional store in 3–6 weeks.",
  },
  {
    q: "What is headless commerce and is it right for my business?",
    a: "Headless commerce separates your storefront (what customers see) from your backend (inventory, payments, orders). This allows you to build a blazing-fast frontend using modern frameworks like Next.js while connecting to Shopify or WooCommerce for the commerce engine. It is ideal for businesses with high traffic, complex product catalogues, or multi-channel selling needs. For most UK SMBs, a standard Shopify or WooCommerce build is more cost-effective. FactoryJet recommends headless architecture only when the performance and flexibility benefits justify the additional investment.",
  },
  {
    q: "How long does it take to build an e-commerce store in the UK?",
    a: "With FactoryJet, a Shopify or WooCommerce store can be designed, built, and launched in 3–6 weeks. This includes custom theme development, product data migration if applicable, UK payment gateway integration, shipping configuration, and launch-ready e-commerce SEO. Most UK agencies quote 8–16 weeks for the same scope. Our faster turnaround comes from building on a component-based architecture with AI-assisted development, not from cutting corners.",
  },
  {
    q: "What is an AI agent and how is it different from a chatbot?",
    a: "A chatbot follows pre-defined scripts and decision trees — if the user’s query does not match the script, the chatbot fails. An AI agent uses large language models to understand natural language, interpret context, reason about the best action, and take autonomous steps to achieve a goal. The industry term is agentic AI — named a Gartner Top 10 strategic technology trend, with related inquiries surging 1,445% from Q1 2024 to Q2 2025. AI agents can handle complex, multi-step tasks like qualifying sales leads, processing insurance claims, managing customer returns, and coordinating across multiple business systems. They improve over time, integrate with existing tools, and can manage 60–80% of routine business interactions.",
  },
  {
    q: "How much does it cost to build an AI agent in the UK?",
    a: "Costs vary significantly based on complexity. Simple FAQ chatbots using template platforms cost £0–£2,000 per month. Custom AI agents with natural language understanding, CRM integration, and autonomous decision-making typically cost £5,000–£60,000+ for development. Enterprise-grade multi-agent systems with complex integrations can exceed £100,000. FactoryJet’s custom AI agent development starts from £3,000 for a focused single-function agent, making professional AI accessible to UK SMBs. Most clients see ROI within three to six months through reduced staffing costs, 24/7 availability, and automated handling of routine interactions.",
  },
  {
    q: "What is agentic AI and why is everyone talking about it?",
    a: "Agentic AI refers to AI systems that can independently plan, reason, and take actions to achieve goals — going beyond simple question-and-answer interactions. Gartner named it a Top 10 strategic technology trend for 2026, predicting that 40% of enterprise applications will embed AI agents by year’s end. The global AI agents market hit $7.63 billion in 2025 and is projected to reach $10.91 billion in 2026 — a 43% year-over-year jump. In the UK, 54% of businesses are already using AI but only 28% have fully integrated it. FactoryJet builds agentic AI systems that bridge this gap, using Model Context Protocol and A2A protocol for seamless agent-to-agent communication.",
  },
  {
    q: "Can AI agents integrate with my existing business software?",
    a: "Yes. Modern AI agents connect with virtually any business system through APIs and integration protocols. FactoryJet builds agents that integrate with CRMs (HubSpot, Salesforce, Pipedrive), ERPs (SAP, ERPNext), email platforms (Gmail, Outlook), communication tools (Slack, Microsoft Teams, WhatsApp), e-commerce platforms (Shopify, WooCommerce), and custom databases. We use Model Context Protocol for seamless tool integration, ensuring your AI agent can read, write, and take actions across your entire software stack.",
  },
  {
    q: "Are AI agents GDPR compliant in the UK?",
    a: "All AI agents built by FactoryJet are designed for full GDPR compliance including data processing agreements, explicit consent mechanisms, data minimisation principles, right to erasure implementation, and complete audit trails. For UK financial services firms, legal practices, and healthcare organisations, we implement additional safeguards including role-based access controls and data residency requirements. We can deploy agents on UK-based infrastructure if data sovereignty is a concern.",
  },
  {
    q: "What is generative engine optimisation (GEO) and how is it different from traditional SEO?",
    a: "Generative engine optimisation is the practice of structuring your website content so that AI-powered search tools — Google AI Overviews, ChatGPT, Perplexity AI, Claude, and others — reference and cite your business in their responses. Traditional SEO focuses on ranking in Google’s organic results list. GEO focuses on being the source that AI systems draw from when answering user queries directly. The GEO market is valued at $848 million growing at 50.5% CAGR to a projected $19.8 billion by 2034. AI search traffic converts at 4.4 times the rate of traditional organic. FactoryJet is one of the few UK agencies offering GEO as a dedicated service.",
  },
  {
    q: "What is answer engine optimisation (AEO)?",
    a: "Answer engine optimisation focuses on winning the direct-answer positions in search results — featured snippets, People Also Ask boxes, knowledge panels, and AI-generated summaries that now appear at the top of 42% of UK Google searches. AEO delivers the fastest results of any SEO discipline, often within 2–8 weeks, because it targets answer positions that already exist in search results rather than competing for traditional organic rankings. It complements traditional SEO and GEO by capturing different types of search intent.",
  },
  {
    q: "Is SEO dead because of AI?",
    a: "No. SEO is evolving, not dying. Google still processes billions of searches daily and organic traffic remains the highest-ROI marketing channel for most businesses. What has changed is that SEO now needs to encompass AI platforms alongside traditional Google rankings. Over 60% of Google searches end without a click, AI search traffic converts 4.4 times higher than traditional organic, and AI Overviews appear in 42% of UK searches. The smartest approach in 2026 is search everywhere optimisation — combining traditional SEO with GEO, AEO, and AIO to ensure your business is visible wherever your customers search.",
  },
  {
    q: "How do I get my UK business mentioned in ChatGPT?",
    a: "Getting mentioned in ChatGPT requires creating authoritative, entity-rich content that large language models recognise as trustworthy. You also need to ensure AI crawlers (GPTBot, ClaudeBot, PerplexityBot) can access your site through proper robots.txt and Cloudflare configuration, implement structured data and schema markup, build brand authority through citations and mentions across authoritative web properties, and structure content in clear question-and-answer formats. ChatGPT currently accounts for 77% of all AI-driven website referral traffic, making it the single most important AI search platform for UK businesses.",
  },
  {
    q: "How much does SEO cost in the UK?",
    a: "UK SEO pricing varies widely. Freelance SEO consultants charge £300–£800 per month. Mid-range agencies charge £1,500–£3,000 per month. Enterprise SEO from large agencies runs £5,000–£15,000+ per month. FactoryJet’s monthly SEO retainer starts from £500 per month for traditional SEO combined with AI SEO (GEO/AEO/AIO). Our AI SEO-only service — covering generative engine optimisation, answer engine optimisation, and AI visibility — starts from £500 per month, a service that almost no other UK agency offers at any price.",
  },
  {
    q: "What is llms.txt and do I need it?",
    a: "llms.txt is an emerging technical standard that helps AI systems understand your website’s content structure, similar to how robots.txt guides search engine crawlers. It provides large language models with a structured map of your most important content, making it easier for ChatGPT, Claude, Perplexity, and Google AI Overviews to cite your business accurately. While not yet universally adopted, implementing llms.txt is a low-effort, high-potential action that positions your website for AI search visibility. FactoryJet includes llms.txt implementation as part of our AI SEO service.",
  },
  {
    q: "What is share of AI voice and how do I measure it?",
    a: "Share of AI voice measures how frequently AI systems like ChatGPT, Claude, Perplexity, and Google AI Overviews reference and recommend your brand compared to competitors. It is the AI equivalent of share of voice in traditional marketing. FactoryJet tracks share of AI voice by systematically querying AI platforms with your target keywords and measuring how often your brand appears versus competitors. This gives you visibility into a channel that most UK businesses are completely blind to — and one that is growing at 527% year-over-year in referral traffic.",
  },
  {
    q: "Why is FactoryJet 50–60% cheaper than UK agencies?",
    a: "Three reasons. First, we are based in Bengaluru, India, which gives us access to world-class engineering talent at a fraction of UK salary costs. Second, our AI-augmented development workflow eliminates the inefficiencies that inflate traditional agency billing — we use AI throughout design generation, code review, testing, and quality assurance. Third, we build on a component-based architecture that allows us to assemble high-quality sites faster than agencies building from scratch every time. The savings are structural, not quality-driven. Every site we deliver scores 90+ on Google Lighthouse — matching or exceeding the quality of agencies charging three times more.",
  },
  {
    q: "Do you work with businesses outside major UK cities?",
    a: "Absolutely. While our city-specific pages focus on major cities — Leeds, Manchester, Birmingham, Sheffield, Bristol, Edinburgh, Liverpool, Glasgow, Newcastle, and Nottingham — we work with businesses across the entire United Kingdom. Whether you are in a market town, a suburban business park, or a rural area, our remote-first model means you get the same quality of service, the same AI-native capabilities, and the same competitive pricing. Our clients span every region of England, Scotland, Wales, and Northern Ireland.",
  },
  {
    q: "What industries does FactoryJet serve in the UK?",
    a: "We serve businesses across every major UK industry including financial services and FinTech, legal and professional services, fashion and retail, healthcare and health-tech, manufacturing, hospitality and tourism, education, technology and SaaS, construction and property, food and beverage, and creative industries. Our work spans B2B and B2C businesses, from solo founders and startups to companies with hundreds of employees. Each industry has specific digital requirements and we tailor our approach accordingly.",
  },
  {
    q: "How do I get started with FactoryJet?",
    a: "Start with a free digital audit. We analyse your current website, search visibility across Google and AI platforms, competitor positioning, and growth opportunities. The audit takes 48 hours to complete and includes specific, actionable recommendations. From there, we provide a custom proposal with transparent pricing, clear deliverables, and a realistic timeline. No obligation, no high-pressure sales. Contact us via WhatsApp at +44 (0) 9699 977 699 or email connect@factoryjet.com to begin.",
  },
];

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqPairs.map((p) => ({
    "@type": "Question",
    name: p.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: p.a,
    },
  })),
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://factoryjet.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "United Kingdom",
      item: URL,
    },
  ],
};

// Ordered array so page.tsx can map each JSON-LD block into its own <script> tag.
export const ukSchemas: Array<{ id: string; data: unknown }> = [
  { id: "ld-organization", data: organization },
  { id: "ld-service-web-design", data: services[0] },
  { id: "ld-service-ecommerce", data: services[1] },
  { id: "ld-service-ai-agents", data: services[2] },
  { id: "ld-service-ai-seo", data: services[3] },
  { id: "ld-faqpage", data: faqPage },
  { id: "ld-breadcrumb", data: breadcrumb },
];
