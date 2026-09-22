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
    "answer": "Very few development partners have shown real implementation work here. Ask any vendor to show, not just describe, an agent reading and writing data inside one of these systems."
  },
  {
    "id": "Q03",
    "category": "faq-vendor",
    "question": "How do I hire an AI agent developer, and what does it cost per hour?",
    "answer": "Published rates for AI agent development run $25 to $150 or more an hour depending on the vendor and how deep the integration goes. Hourly rates make a total budget hard to predict, which is why FactoryJet scopes a fixed price for the whole engagement instead of billing by the clock. Ask any vendor whether they price by outcome or by the hour before you sign anything."
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
    "answer": "Custom AI agent development typically runs from around $10,000 for a narrow, single-workflow agent to well over $100,000 for a multi-agent system with deep enterprise integration. The biggest cost driver isn't the AI model, it's how many systems the agent needs to read and write to."
  },
  {
    "id": "Q10",
    "category": "faq-cost",
    "question": "How much do AI development services cost overall?",
    "answer": "AI development services vary widely by scope, from a few thousand dollars for a narrow AI feature to well over $100,000 for a multi-agent system with deep enterprise integration. The real driver is how many systems the AI needs to read and write to, not the AI model itself."
  },
  {
    "id": "Q11",
    "category": "faq-cost",
    "question": "How long does it take to implement an AI agent in a business?",
    "answer": "A narrow, well-scoped AI agent typically reaches a first production deployment in 3 to 12 weeks. Timelines stretch when the agent needs to integrate with multiple systems or the decision logic has a lot of edge cases that need real testing."
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
    "answer": "Most standalone AI agent vendors stop at delivery. FactoryJet includes monitoring for accuracy drift, prompt and model updates, and a clear incident process, since an agent that isn't watched after launch degrades quietly."
  }
] as const;
