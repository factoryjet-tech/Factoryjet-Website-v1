// JSON-LD schema for /uk
// Included: Organization, 4 Services, FAQPage, BreadcrumbList.
// Injected via <script type="application/ld+json"> in page.tsx.
//
// The FAQPage block is derived from ./faqData.ts, the same array the visible
// FAQ section renders. Never hand-write FAQ entries in this file.

import { UK_FAQS } from "./faqData";

const URL = "https://factoryjet.com/uk";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization", "@id": "https://factoryjet.com/#organization",
  name: "FactoryJet Technologies",
  url: "https://factoryjet.com",
  logo: "https://factoryjet.com/logo.png",
  description:
    "FactoryJet is an AI-native digital agency for UK businesses. Web design, Shopify and WooCommerce development, custom AI agents and AI SEO (GEO/AEO/AIO). Every project is scoped and quoted in writing before work starts.",
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  // No aggregateRating: there is no review corpus behind a number, and Google
  // treats review markup it can't trace to real reviews as a structured-data
  // policy problem. Add it back only with real, verifiable reviews.
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  sameAs: [
    "https://www.linkedin.com/company/factoryjet",
    "https://www.crunchbase.com/organization/factoryjet",
  ],
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
  "@type": "Organization", "@id": "https://factoryjet.com/#organization",
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
      "Next.js 15 and Tailwind CSS 4 websites for UK businesses. Lighthouse 90+, under two-second loads, built for both Google and AI search visibility. Fixed-price milestones, scoped and quoted before work starts.",
    provider,
    areaServed,
    url: "https://factoryjet.com/uk/web-design",
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
    // 2026-08-03: was /uk/ecommerce, which 404s. Same defect as the footer link.
    url: "https://factoryjet.com/uk/ecommerce-development",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI SEO (GEO / AEO / AIO)",
    name: "AI SEO for UK Businesses | GEO, AEO, AIO & Traditional SEO",
    description:
      "Search-everywhere optimisation combining traditional SEO with generative engine optimisation (GEO), answer engine optimisation (AEO), and AI optimisation (AIO) for ChatGPT, Perplexity, Claude, and Google AI Overviews.",
    provider,
    areaServed,
    url: "https://factoryjet.com/uk/ai-seo",
  },
];

// FAQPage is generated from the SAME array the visible accordion renders
// (see ./faqData.ts). Google requires structured data to match visible page
// content. This file used to keep a hand-maintained second copy of all the
// Q&As and it drifted: it shipped a question the page never rendered and a
// WhatsApp number that contradicted the one on screen. Do not reintroduce a
// literal here. Edit faqData.ts and both the page and this schema follow.
const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: UK_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

/**
 * One crumb array, two consumers. page.tsx renders `<Breadcrumbs items={UK_CRUMBS} />`
 * and the JSON-LD below is mapped from the same constant, so the visible trail
 * and the structured data cannot drift apart.
 */
export const UK_CRUMBS: Array<{ name: string; url: string }> = [
  { name: "FactoryJet", url: "https://factoryjet.com" },
  { name: "UK", url: URL },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: UK_CRUMBS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
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
