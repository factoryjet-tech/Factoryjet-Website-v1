// This array supplies both the visible FAQ accordion and FAQPage JSON-LD.
// Questions follow measured demand (DataForSEO, US, 2026-10-05): Google People
// Also Ask on the "ai agent development" SERPs, and the cost questions AI
// assistants get most. Cost figures are market references with a named source,
// never FactoryJet prices. Client names stay out of this file: the published
// case study has its own section on the page.
export const AI_AGENT_FAQ_CATEGORIES = [
  {
    "id": "faq-vendor",
    "label": "Vendor Selection"
  },
  {
    "id": "faq-definitions",
    "label": "Definitions"
  },
  {
    "id": "faq-cost",
    "label": "Cost & Timeline"
  },
  {
    "id": "faq-support",
    "label": "Build, Buy & Support"
  },
  {
    "id": "faq-scope",
    "label": "Systems, Ownership & Ecommerce"
  }
] as const;

export const AI_AGENT_FAQS = [
  {
    "id": "Q01",
    "category": "faq-vendor",
    "question": "How do I choose an AI agent development company?",
    "answer": "AI agent development companies fall into three groups. Framework and platform vendors give you tools to build it yourself. Large consultancies run agents inside bigger enterprise programs. Specialist firms such as FactoryJet build one custom agent directly into your ERP, CRM or help desk. Pick the group that fits your team, then ask each vendor to show an agent reading and writing data in a system like yours."
  },
  {
    "id": "Q02",
    "category": "faq-vendor",
    "question": "Who implements AI agents inside NetSuite, SAP or Odoo?",
    "answer": "Few AI agent developers can show this working. Ask any vendor for a live demo of an agent reading and writing data inside your ERP. FactoryJet builds agents that read RFQs, check pricing rules and stock, and draft quotes inside NetSuite, SAP and Odoo. A person approves every quote before it reaches a customer. Our guide to AI agents inside NetSuite, Odoo and SAP Business One covers the integration routes."
  },
  {
    "id": "Q03",
    "category": "faq-vendor",
    "question": "How do I hire an AI agent developer?",
    "answer": "Give each candidate the same brief: a sample of the real work with names removed, the systems involved and the result you expect. Ask to see an agent they built reading and writing data in a system like yours. Ask who supports it after launch. Hourly billing makes the total hard to predict, so FactoryJet quotes a fixed price for an agreed scope. Our guide to hiring an AI agent developer lists the questions worth asking."
  },
  {
    "id": "Q04",
    "category": "faq-vendor",
    "question": "Where can I compare the top AI agent development companies?",
    "answer": "Our comparison of ten AI agent development companies links each firm's published offer and gives you one question to ask each of them in discovery. FactoryJet publishes the article and is included in it. The list is in alphabetical order and does not rank the firms. Send every firm the same workflow brief so you can compare the proposals side by side."
  },
  {
    "id": "Q05",
    "category": "faq-definitions",
    "question": "What is an AI agent development company?",
    "answer": "An AI agent development company designs and builds software that uses an AI model to plan and complete multi-step work inside your business systems, such as an ERP, CRM or help desk. The work covers scoping the job, connecting the systems, setting permissions and approval steps, testing on real examples, and supporting the agent after launch. FactoryJet is an AI agent development company serving US businesses."
  },
  {
    "id": "Q06",
    "category": "faq-definitions",
    "question": "What is agentic AI development?",
    "answer": "Agentic AI development means building AI systems that plan and act across several steps on their own, where a basic AI tool only replies to one prompt. In practice it is the same work most people mean by AI agent development, and buyers use the two terms interchangeably. The design question is how much the model may decide alone and where a person must approve."
  },
  {
    "id": "Q07",
    "category": "faq-definitions",
    "question": "What is the difference between AI development and AI agent development?",
    "answer": "AI development is the broad category: any custom AI system, including chatbots, recommendation engines and analytics tools. AI agent development is one type of it. The system plans and takes multi-step actions on its own, with a human checkpoint where a wrong decision would be costly."
  },
  {
    "id": "Q08",
    "category": "faq-definitions",
    "question": "What is the difference between an AI agent and a chatbot?",
    "answer": "A chatbot answers one message at a time from a script or a model. An AI agent plans across several steps, decides what to do next from context, and takes real actions in your systems, such as updating an order or drafting a quote for approval."
  },
  {
    "id": "Q09",
    "category": "faq-definitions",
    "question": "Is ChatGPT an AI agent?",
    "answer": "ChatGPT is a general AI assistant. In a normal chat it answers one prompt at a time, and its agent features can browse the web and complete some tasks for you. A custom AI agent for a business is connected to your own systems, such as your ERP, CRM or help desk, and it follows your rules, permissions and approval steps. That connection is the difference that matters."
  },
  {
    "id": "Q10",
    "category": "faq-definitions",
    "question": "What is an autonomous AI agent?",
    "answer": "An autonomous AI agent plans and acts without a person approving each step. Other agents pause for sign-off at set points. Full autonomy sounds impressive, but most businesses do not want it running against live inventory, pricing or customer data. Every agent FactoryJet builds has a human approval step wherever a wrong decision would cost money."
  },
  {
    "id": "Q11",
    "category": "faq-definitions",
    "question": "How do you keep an AI agent from making things up?",
    "answer": "Every fact an agent we build reports is checked against its source before it is used or sent anywhere. If a name, number or detail cannot be verified, the agent holds it and flags it for a person. On one agent we run in production, this check has caught and dropped invented names in real runs."
  },
  {
    "id": "Q12",
    "category": "faq-cost",
    "question": "How much does it cost to build a custom AI agent?",
    "answer": "As a market reference, development firm ProductCrafters puts 2026 custom AI agent builds at about $5,000 to more than $180,000. The price depends mostly on how many systems the agent has to read and write to and how many edge cases it must handle. The AI model is a small part of it. FactoryJet quotes a fixed price after one call, and a narrow pilot is the cheapest way to learn what a full build needs."
  },
  {
    "id": "Q13",
    "category": "faq-cost",
    "question": "What changes the cost of AI agent development services?",
    "answer": "Four things move the price: the number of systems the agent connects to, whether it only reads or also writes, how many exceptions it must handle, and how much testing the risk calls for. An agent that drafts a quote for a person to approve costs far less than one allowed to create orders in your ERP. The AI model itself is rarely the main cost."
  },
  {
    "id": "Q14",
    "category": "faq-cost",
    "question": "How long does it take to build an AI agent?",
    "answer": "A pilot on one narrow workflow usually takes two to four weeks. A production agent with permissions, logging, approvals and monitoring usually takes six to twelve weeks. Timelines stretch when the agent touches several systems, or when the rules have many edge cases that need testing on real examples."
  },
  {
    "id": "Q15",
    "category": "faq-cost",
    "question": "How much does it cost to run an AI agent each month?",
    "answer": "Running costs cover model usage, hosting and any support plan. Model calls are often the smallest part. Our AI agent cost guide works through a support agent handling 2,000 tickets a month and puts them at about $22 to $112 a month on Anthropic's September 2026 prices. As a market reference, ProductCrafters puts hosting for a custom build at $500 to $10,000 a month. Support and monitoring are quoted separately."
  },
  {
    "id": "Q16",
    "category": "faq-support",
    "question": "Should I build or buy an AI agent for customer support?",
    "answer": "Buy if your support work is standard: FAQs, order status and simple triage. Products such as Zendesk AI and Intercom Fin already handle that well. Build if your workflow depends on internal systems or rules a general product cannot follow. FactoryJet will tell you which route fits before quoting anything."
  },
  {
    "id": "Q17",
    "category": "faq-support",
    "question": "Can I build my own AI agent?",
    "answer": "Yes. Most do-it-yourself agents start with a framework such as LangGraph, CrewAI or AutoGen, or a builder such as n8n or Microsoft Copilot Studio. You connect your data and tools, write the logic for each step, and add guardrails for what the agent may not do without a person. The first working demo is the easy part. Holding up against messy production data for months is the hard part, and no framework does that for you."
  },
  {
    "id": "Q18",
    "category": "faq-support",
    "question": "Should we use an AI agent builder or hire a development company?",
    "answer": "Use a builder if your engineers can own security, integration and maintenance long after launch. Hire a development company if you want a working agent connected to your real systems without staffing that as ongoing work. The framework is free or cheap either way. Integration and the months of maintenance after launch are what cost money, whichever route you pick."
  },
  {
    "id": "Q19",
    "category": "faq-support",
    "question": "Can AI agents be built for free?",
    "answer": "The frameworks are free or close to it. LangGraph, CrewAI and AutoGen charge no license fee. AI model usage still costs money and grows with volume. So does the engineering time to build and test the logic, and the maintenance once the agent is live. Free to build usually means free to start a demo. A production agent that people rely on has running costs."
  },
  {
    "id": "Q20",
    "category": "faq-support",
    "question": "Do you offer agentic AI consulting, or only development?",
    "answer": "Both. Some engagements start as agentic AI consulting: we scope what should be built, and whether it should be built at all, before any development starts. We would rather tell you a workflow is not worth automating than build something you do not need."
  },
  {
    "id": "Q21",
    "category": "faq-support",
    "question": "How is an AI agent developed?",
    "answer": "In five steps. Scope: agree what the agent decides and where it stops to ask a person. Architect: design the decision logic and every approval gate before any code. Build: engineer against your real systems in short cycles. Verify: check every fact the agent states against its source. Launch: deploy with monitoring and a plan for failures. FactoryJet follows these five steps on every build."
  },
  {
    "id": "Q22",
    "category": "faq-support",
    "question": "Who supports and monitors an AI agent after launch?",
    "answer": "Many AI agent vendors stop at delivery. We stay on after launch if you want us to. We watch accuracy, update prompts and models when your prices or policies change, and run a clear process when something fails. An agent that nobody watches gets worse quietly, and you usually find out from a customer."
  },
  {
    "id": "Q23",
    "category": "faq-scope",
    "question": "Can you build an AI customer support agent for my Shopify store?",
    "answer": "Yes. It answers where-is-my-order, return and address-change tickets inside Gorgias or Zendesk, using live order data from Shopify and tracking from your carrier. Refunds or credits above a limit you set go to a person with the details attached. If Gorgias AI Agent or Intercom Fin already covers your queue, we will tell you to switch that on first, because it is faster than any build."
  },
  {
    "id": "Q24",
    "category": "faq-scope",
    "question": "Which systems can your AI agents connect to?",
    "answer": "ERPs such as NetSuite, SAP Business One, Odoo and Microsoft Dynamics 365. CRMs such as HubSpot and Salesforce. Help desks such as Zendesk, Gorgias, Intercom and Freshdesk. Commerce platforms such as Shopify, Shopify Plus and BigCommerce. Plus email, Slack, spreadsheets and anything with an API. If a system has no API, we look at file exports or a read-only database link and agree that route with your IT team first."
  },
  {
    "id": "Q25",
    "category": "faq-scope",
    "question": "What do I own after the project ends?",
    "answer": "Everything we build for you: the code in your own Git repository, the prompts, the test sets, the connectors and the documentation. The agent can run in your own cloud account or on a dedicated server we manage for you. You pay model providers such as Anthropic or OpenAI directly, and there is no per-agent license fee from us. You can keep us on for support, bring the work in-house, or hand it to another team."
  },
  {
    "id": "Q26",
    "category": "faq-scope",
    "question": "What do you need from us to scope an AI agent?",
    "answer": "Three answers. What starts the work: an email, a form, a ticket, an RFQ or an order. Which systems it has to read or update. And roughly how often it happens and who does it today. Ten or so real examples with names removed, such as recent RFQs or tickets, let us give you an honest answer on the first call, including whether an agent is the right tool at all."
  },
  {
    "id": "Q27",
    "category": "faq-scope",
    "question": "Do you build AI agents for B2B and wholesale ecommerce?",
    "answer": "Yes. The common ones read emailed RFQs and purchase orders, check customer price lists and stock in NetSuite or Odoo, and draft a quote or order for your team to approve. On Shopify Plus B2B stores they can also answer account and reorder questions from live data. A person approves anything that commits price, stock or credit."
  }
] as const;
