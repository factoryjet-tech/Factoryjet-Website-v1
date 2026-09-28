// This array supplies both the visible FAQ accordion and FAQPage JSON-LD.
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
    "question": "Which companies build custom AI agents for mid-size businesses in the US?",
    "answer": "Custom AI agent development for mid-size businesses is split between large consultancies (slower, built for enterprise-scale programs) and specialist AI development companies that build agents directly into your existing systems. Look for a partner who can show integration depth with your actual CRM or ERP, not just a demo."
  },
  {
    "id": "Q02",
    "category": "faq-vendor",
    "question": "Who implements AI agents inside ERP systems like NetSuite, SAP, or Odoo?",
    "answer": "Few development partners can show this. Ask any vendor to show, not just describe, an agent reading and writing data inside one of these systems. We build agents that read RFQs, check pricing rules and stock, and draft quotes inside NetSuite, SAP and Odoo, with a person approving before anything is sent to a customer."
  },
  {
    "id": "Q03",
    "category": "faq-vendor",
    "question": "How do I hire an AI agent developer, and should I pay by the hour?",
    "answer": "Check three things. Have they connected an agent to a system like yours, and can they show it reading and writing real data? How do they price? And who supports the agent after launch? Hourly billing makes the total hard to predict, which is why we quote a fixed price for an agreed scope. Our guide to hiring an AI agent developer lists the questions worth asking."
  },
  {
    "id": "Q04",
    "category": "faq-definitions",
    "question": "What is agentic AI development?",
    "answer": "Agentic AI development means building AI systems that plan and act across multiple steps on their own, not just generate a reply to one prompt. In practice it is the same work most people mean by AI agent development, the two terms are used interchangeably depending on who is asking."
  },
  {
    "id": "Q05",
    "category": "faq-definitions",
    "question": "What's the difference between AI development and AI agent development?",
    "answer": "AI development is the broad category: any custom AI system, including chatbots, recommendation engines, and analytics tools. AI agent development is a specific type of AI development, one where the system plans and takes multi-step actions on its own, with a human checkpoint where it matters."
  },
  {
    "id": "Q06",
    "category": "faq-definitions",
    "question": "What's the difference between an AI agent and a chatbot?",
    "answer": "A chatbot answers one message at a time from a script or a model. An AI agent plans across multiple steps, decides what to do next based on context, and takes real actions in your systems, not just replies in a window."
  },
  {
    "id": "Q07",
    "category": "faq-definitions",
    "question": "What is an autonomous AI agent?",
    "answer": "An autonomous AI agent plans and takes action without a person approving each step, as opposed to an agent that pauses for sign-off at defined points. Fully autonomous sounds impressive, but most businesses don't actually want that running against real inventory, pricing, or customer data. Every agent we build has at least one human-approval gate wherever a wrong decision would actually cost something."
  },
  {
    "id": "Q08",
    "category": "faq-definitions",
    "question": "How do you keep an AI agent from making things up?",
    "answer": "Every fact an agent we build reports gets checked against its actual source before it's used or sent anywhere. If a name, number, or detail can't be verified, the agent holds it and flags it rather than guessing."
  },
  {
    "id": "Q09",
    "category": "faq-cost",
    "question": "How much does it cost to build a custom AI agent?",
    "answer": "It depends mostly on how many systems the agent has to read and write to, and how many edge cases it must handle, not on the AI model. As a market reference, development firm ProductCrafters puts 2026 builds at about $5,000 to more than $180,000, with integration as the biggest part. We quote a fixed price after one call, and a narrow pilot is the cheapest way to learn what a full build needs."
  },
  {
    "id": "Q10",
    "category": "faq-cost",
    "question": "How much do AI development services cost overall?",
    "answer": "They range from a small AI feature, such as a drafting or sorting step inside one tool, to a multi-agent system connected to an ERP, CRM and help desk. The driver is the same either way: how many systems the AI touches and how much it is allowed to change on its own. Tools that only draft for a person to approve cost far less than agents that write to live records."
  },
  {
    "id": "Q11",
    "category": "faq-cost",
    "question": "How long does it take to implement an AI agent in a business?",
    "answer": "A pilot on one narrow workflow usually takes two to four weeks. A production agent with permissions, logging, approvals and monitoring usually takes six to twelve weeks. Timelines stretch when the agent touches several systems, or when the rules have many edge cases that need real testing rather than a demo."
  },
  {
    "id": "Q12",
    "category": "faq-support",
    "question": "Should I build or buy an AI agent for customer support?",
    "answer": "Buy if your support workflow is standard (FAQs, order status, simple triage); products like Zendesk AI or Intercom Fin already solve that well. Build if your workflow depends on internal systems or rules a general product can't follow."
  },
  {
    "id": "Q13",
    "category": "faq-support",
    "question": "How do I build an AI agent myself?",
    "answer": "Most DIY agents start with a framework, LangGraph, CrewAI, or AutoGen are the common choices, then connect it to your data sources and tools, write the decision logic for what the agent should do at each step, and add guardrails for what it's not allowed to do without a person checking first. The hard part isn't the first working demo, it's holding up against real, messy production data for months, which is the part a framework doesn't do for you."
  },
  {
    "id": "Q14",
    "category": "faq-support",
    "question": "Should I build my own AI agent with a platform like LangGraph or CrewAI, or hire a development partner?",
    "answer": "Build it yourself if you have engineers who can own security, integration, and maintenance long after launch. Hire a development partner if you want a working agent wired into your real systems without staffing that as ongoing work. The framework itself is free or cheap either way, what actually costs money is the integration and the months of maintenance after launch, and that's true whether you build in-house or hire someone."
  },
  {
    "id": "Q15",
    "category": "faq-support",
    "question": "Are AI agents actually free to build, or is that a myth?",
    "answer": "The frameworks are free or nearly free, LangGraph, CrewAI, and AutoGen don't charge licensing fees. What isn't free is the AI model usage, which scales with volume, the engineering time to build and test the decision logic, and the ongoing maintenance once it's live. \"Free to build\" usually means free to start a demo, not free to run a production agent people actually rely on."
  },
  {
    "id": "Q16",
    "category": "faq-support",
    "question": "Do you offer agentic AI consulting, or only development?",
    "answer": "Both. Some engagements start as agentic AI consulting, scoping what should be built and whether it should be built at all, before any development starts. We would rather tell you a workflow isn't worth automating than build something you don't need."
  },
  {
    "id": "Q17",
    "category": "faq-support",
    "question": "Who provides ongoing support and monitoring for AI agents after launch?",
    "answer": "Most standalone AI agent vendors stop at delivery. We stay on after launch if you want us to: we watch accuracy, update prompts and models when your prices or policies change, and run a clear process when something fails. An agent that nobody watches after launch gets worse quietly, and you usually find out from a customer."
  },
  {
    "id": "Q18",
    "category": "faq-scope",
    "question": "Can you build an AI customer support agent for my Shopify store?",
    "answer": "Yes. It answers where-is-my-order, return and address-change tickets inside Gorgias or Zendesk, using live order data from Shopify and tracking from your carrier. Refunds or credits above a limit you set go to a person with the details attached. If Gorgias AI Agent or Intercom Fin already covers your queue, we will tell you to switch that on first, because it is faster than any build."
  },
  {
    "id": "Q19",
    "category": "faq-scope",
    "question": "Which systems can your AI agents connect to?",
    "answer": "ERPs such as NetSuite, SAP Business One, Odoo and Microsoft Dynamics 365. CRMs such as HubSpot and Salesforce. Help desks such as Zendesk, Gorgias, Intercom and Freshdesk. Commerce platforms such as Shopify, Shopify Plus and BigCommerce. Plus email, Slack, spreadsheets and anything with an API. If a system has no API, we look at file exports or a read-only database link and agree that route with your IT team first."
  },
  {
    "id": "Q20",
    "category": "faq-scope",
    "question": "What do I own after the project ends?",
    "answer": "Everything we build: the code in your own Git repository, the prompts, the test sets, the connectors, the documentation and the cloud account the agent runs in. You pay model providers such as Anthropic or OpenAI directly, and there is no per-agent license fee from us. You can keep us on for support, bring the work in-house, or hand it to another team."
  },
  {
    "id": "Q21",
    "category": "faq-scope",
    "question": "What do you need from us to scope an AI agent?",
    "answer": "Three answers. What starts the work: an email, a form, a ticket, an RFQ or an order. Which systems it has to read or update. And roughly how often it happens and who does it today. Ten or so real examples with names removed, such as recent RFQs or tickets, let us give you an honest answer on the first call, including whether an agent is the right tool at all."
  },
  {
    "id": "Q22",
    "category": "faq-scope",
    "question": "How much does it cost to run an AI agent each month?",
    "answer": "Running costs are usually far smaller than the build. They cover model usage, which grows with volume, hosting, and any support plan. Our AI agent cost guide works through a support agent handling 2,000 tickets a month and puts the model calls at about $22 to $112 a month on Anthropic's September 2026 prices. Support and monitoring are quoted separately, based on how much the agent does."
  },
  {
    "id": "Q23",
    "category": "faq-scope",
    "question": "Do you build AI agents for B2B and wholesale ecommerce?",
    "answer": "Yes. The common ones read emailed RFQs and purchase orders, check customer price lists and stock in NetSuite or Odoo, and draft a quote or order for your team to approve. On Shopify Plus B2B stores they can also answer account and reorder questions from live data. A person approves anything that commits price, stock or credit."
  }
] as const;
