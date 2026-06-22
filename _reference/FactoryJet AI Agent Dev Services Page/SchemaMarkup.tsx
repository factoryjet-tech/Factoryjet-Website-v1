// app/services/ai-agent-development/components/SchemaMarkup.tsx
"use client";

export function SchemaMarkup() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Agent Development Services",
    provider: {
      "@type": "Organization",
      name: "FactoryJet",
      url: "https://www.factoryjet.com",
      logo: "https://www.factoryjet.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9103398557",
        contactType: "sales",
        email: "connect@factoryjet.com",
        availableLanguage: ["English"],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "47",
        bestRating: "5",
      },
    },
    description:
      "Custom AI agent design, development, and deployment services for businesses. From customer support agents to multi-agent orchestration systems.",
    serviceType: "AI Agent Development",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Agent Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Customer Support AI Agents",
          description:
            "Intelligent AI agents that resolve customer inquiries autonomously across web chat, WhatsApp, email, voice, and social media.",
        },
        {
          "@type": "Offer",
          name: "Voice AI Agents",
          description:
            "Natural-sounding voice AI agents for inbound and outbound calls with ultra-low latency and human-like conversation.",
        },
        {
          "@type": "Offer",
          name: "Sales & Lead Qualification Agents",
          description:
            "AI sales agents that engage with inbound leads instantly and conduct intelligent qualification conversations.",
        },
        {
          "@type": "Offer",
          name: "Workflow Automation Agents",
          description:
            "Automate complex, multi-step business processes spanning departments and systems.",
        },
        {
          "@type": "Offer",
          name: "Multi-Agent Orchestration Systems",
          description:
            "Multiple specialized agents that collaborate, share context, and coordinate to handle complex workflows.",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What exactly are AI agents, and how are they different from chatbots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI agents are autonomous software systems that understand context, make decisions, and take actions across your business systems. Unlike traditional chatbots with scripted responses, AI agents use large language models to understand nuanced requests, access multiple systems simultaneously, and execute complex multi-step workflows. They learn from interactions and handle edge cases that would stump a rule-based bot.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to deploy an AI agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A single-function AI agent typically takes 4-8 weeks from discovery to deployment. Multi-agent implementations across departments take 3-6 months. We use a phased approach — starting with a pilot, measuring results, then scaling — so you see value quickly while minimizing risk.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AI agent development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI agent development costs vary based on complexity, integrations, and deployment scope. Simple single-agent implementations start at a different investment level than enterprise multi-agent orchestration systems. Book a free strategy call to get a custom quote tailored to your specific requirements and expected ROI.",
        },
      },
      {
        "@type": "Question",
        name: "What happens when an AI agent can't handle a request?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Graceful escalation is built into every agent we deploy. When an agent encounters a request outside its confidence threshold, it seamlessly transfers the conversation to a human agent with full context — including conversation history, sentiment analysis, identified issues, actions taken, and recommended next steps. Most clients find 60-80% of interactions are resolved by AI.",
        },
      },
      {
        "@type": "Question",
        name: "Is our data safe with AI agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Security is foundational to every agent we build. We implement data encryption (TLS 1.3 in transit, AES-256 at rest), role-based access controls, secure authentication, data isolation, comprehensive audit logging, and regular security assessments. Our architecture supports SOC 2, GDPR, HIPAA, and PCI DSS compliance frameworks.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI agents integrate with our existing systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — our AI agents integrate with 200+ enterprise systems including Salesforce, HubSpot, SAP, ERPNext, Slack, Microsoft Teams, Zendesk, Freshdesk, and more. We use the Model Context Protocol (MCP), REST APIs, webhooks, and custom middleware for seamless integration with your existing technology stack.",
        },
      },
      {
        "@type": "Question",
        name: "What ROI can I expect from AI agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "74% of executives achieve ROI within the first year of AI agent deployment. AI agent implementations average 340% first-year ROI. Customer support agents reduce costs by 30-40%, sales agents deliver ROI payback in 60-90 days, and workflow agents produce 40-60% operational efficiency gains.",
        },
      },
      {
        "@type": "Question",
        name: "Will AI agents replace our employees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI agents augment your team, not replace them. They handle high-volume, repetitive tasks so employees can focus on complex problem-solving, relationship building, and strategic work. Most clients redeploy staff to higher-value roles rather than reduce headcount.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.factoryjet.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.factoryjet.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Agent Development",
        item: "https://www.factoryjet.com/services/ai-agent-development",
      },
    ],
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FactoryJet",
    url: "https://www.factoryjet.com",
    logo: "https://www.factoryjet.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/factoryjet",
      "https://twitter.com/factoryjet",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9103398557",
      contactType: "sales",
      email: "connect@factoryjet.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
