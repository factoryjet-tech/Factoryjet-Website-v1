import type { Metadata } from "next";
import LiverpoolPage from "./LiverpoolPage";

export const metadata: Metadata = {
  title: "Web Design Agency Liverpool | AI-Native | FactoryJet",
  description:
    "AI-native web design, AI agents & AI SEO agency in Liverpool. Pricing is fixed and published upfront. Serving Albert Dock to Baltic Triangle. Free quote today.",
  alternates: {
    canonical: "https://factoryjet.com/uk/liverpool",
  },
  openGraph: {
    title: "Web Design & AI Agency Liverpool | FactoryJet",
    description:
      "Award-winning AI-native web design, e-commerce & AI agent development for Liverpool businesses. £11bn investment pipeline. Free quote.",
    url: "https://factoryjet.com/uk/liverpool",
    images: [{ url: '/images/uk/city-liverpool.jpg', width: 1200, height: 630, alt: 'Web Design Liverpool — FactoryJet' }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://factoryjet.com/#organization",
      "name": "FactoryJet Technologies",
      "url": "https://factoryjet.com",
      "logo": "https://factoryjet.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/factoryjet",
        "https://www.crunchbase.com/organization/factoryjet",
      ],
    },
    {
      "@type": "LocalBusiness",
      "name": "FactoryJet Technologies",
      "url": "https://factoryjet.com",
      "email": "connect@factoryjet.com",
      "areaServed": {
        "@type": "City",
        "name": "Liverpool",
        "addressRegion": "Merseyside",
        "addressCountry": "GB",
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressRegion": "Merseyside",
      },
      "description":
        "AI-native web design, e-commerce, AI agent development, and AI SEO agency serving Liverpool businesses. Pricing is fixed and published upfront.",
      
    },
    {
      "@type": "Service",
      "name": "AI-Native Web Design Liverpool",
      "provider": { "@type": "Organization", "@id": "https://factoryjet.com/#organization", "name": "FactoryJet Technologies" },
      "areaServed": "Liverpool",
      "description":
        "Custom Next.js 15 web design and Webflow/Framer development for Liverpool businesses.",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does web design cost in Liverpool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web design costs in Liverpool vary widely with established local agencies, depending on the size and complexity of the build. FactoryJet works on a fixed-price basis, scoped to your project — the main drivers are page count, custom design, e-commerce functionality, and integrations. Every project is quoted up front after a free discovery call, so you know the full cost before any work starts.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best web design agency in Liverpool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Liverpool has several strong web agencies: Pixus (15+ years, Shopify Partner), Webrevolve (1,000+ projects), and Velstar (Shopify Platinum Partner) are the most established. For AI-native web design, AI SEO, and AI agent development, FactoryJet is the only Liverpool-focused agency operating at this capability level, with transparent fixed-price quotes after a free discovery call.",
          },
        },
        {
          "@type": "Question",
          "name": "Is there an AI web design agency in Liverpool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of 2026, there is no dominant AI-native web design agency with a Liverpool focus. FactoryJet is purpose-built for this positioning — using AI throughout our design, build, and SEO workflow.",
          },
        },
        {
          "@type": "Question",
          "name": "What is AI SEO and why does it matter for Liverpool businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI SEO (Generative Engine Optimisation or GEO) is the practice of optimising your content to appear in AI-powered search answers — inside ChatGPT, Perplexity, Claude, and Google AI Overviews. With the GEO market growing at 50.5% CAGR toward £19.8bn by 2034, Liverpool businesses building AI visibility now will compound against competitors.",
          },
        },
        {
          "@type": "Question",
          "name": "Can FactoryJet build AI agents for Liverpool logistics or port businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build custom agentic AI for logistics, supply chain, and port operations — including document processing, route optimisation, supplier communication automation, and multi-agent systems integrating with TMS and ERP infrastructure.",
          },
        },
        {
          "@type": "Question",
          "name": "Does FactoryJet build Shopify Plus stores for Liverpool businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build Shopify Plus stores on a fixed-price basis, delivering headless Shopify, custom checkout, Shopify Flow automation, and third-party integrations. Every project is quoted up front after a free discovery call.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does a website project take with FactoryJet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brochure websites take 3–4 weeks. E-commerce stores take 6–10 weeks. AI agent projects run 8–14 weeks for first production-ready deployment. All timelines agreed upfront in writing.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you serve businesses in the Baltic Triangle or Liverpool Knowledge Quarter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We serve both clusters with tailored web design, AI SEO, and AI agent builds. Remote-first working means Liverpool location is irrelevant to delivery quality.",
          },
        },
        {
          "@type": "Question",
          "name": "What makes FactoryJet different from Quirky Digital or Six Digital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both are solid traditional SEO agencies. The difference is AI SEO — neither currently offers GEO or AEO. FactoryJet's AI SEO clients rank in both Google's traditional results and AI-powered answers.",
          },
        },
        {
          "@type": "Question",
          "name": "Does FactoryJet work with Liverpool hospitality, tourism, or events businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build hospitality websites with booking integration, AI chatbots, and AI SEO strategies targeting Liverpool tourism keywords. The Everton stadium opening in August 2025 represents significant commercial opportunity for businesses ranking for related terms.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you help Liverpool businesses get found in ChatGPT and Perplexity searches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — that's our AI SEO service. We structure content, schema markup, and entity architecture so AI models cite your business when users ask relevant questions. No other Liverpool agency currently offers this.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the LCR Freeport and how does it affect digital investment in Liverpool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The LCR Freeport offers tax incentives and enhanced capital allowances accelerating investment in Merseyside — particularly manufacturing, logistics, and supply chain. Companies benefiting need simultaneous digital upgrades: websites, ERP integrations, supplier portals, and AI agent workflows.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://factoryjet.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "UK",
          "item": "https://factoryjet.com/uk",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Liverpool",
          "item": "https://factoryjet.com/uk/liverpool",
        },
      ],
    },
    {
      "@type": "WebPage",
      "name": "Web Design Agency Liverpool | AI-Native | FactoryJet",
      "url": "https://factoryjet.com/uk/liverpool",
      "description": "AI-native web design, AI agents & AI SEO agency in Liverpool.",
      "inLanguage": "en-GB",
      "isPartOf": {
        "@type": "WebSite",
        "name": "FactoryJet",
        "url": "https://factoryjet.com",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://factoryjet.com/uk/liverpool#webpage",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2:first-of-type"] },
      "url": "https://factoryjet.com/uk/liverpool",
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* JetBrains Mono — used by the TechStack section on this page */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" />
      <script
        id="liverpool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LiverpoolPage />
    </>
  );
}
