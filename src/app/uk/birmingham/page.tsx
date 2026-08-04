import type { Metadata } from "next";
import BirminghamPage from "./BirminghamPage";
import { FAQS } from "./faqData";

export const metadata: Metadata = {
  title: "AI Web Design Agency Birmingham | FactoryJet",
  description:
    "AI-native web design, Shopify development, AI agents and AI SEO for Birmingham's 60,000 businesses. Fixed-price, scoped to your build and quoted up front. From Paradise Quarter to Brindleyplace, built for the second city.",
  alternates: {
    canonical: "https://factoryjet.com/uk/birmingham",
  },
  openGraph: {
    title: "AI Web Design Agency Birmingham | FactoryJet",
    description:
      "AI-native web design, e-commerce & AI agent development for Birmingham businesses. Built for the £31.9bn city region economy. Free quote.",
    url: "https://factoryjet.com/uk/birmingham",
    images: [{ url: "/images/uk/birmingham/hero-birmingham.webp" }],
  },
};

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/uk/birmingham#webpage',
  url: 'https://factoryjet.com/uk/birmingham',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://factoryjet.com/#organization",
      "name": "FactoryJet Technologies",
      "url": "https://factoryjet.com",
      "logo": "https://factoryjet.com/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": "English",
        "areaServed": "GB",
      },
      "areaServed": ["Birmingham", "West Midlands", "United Kingdom"],
      "sameAs": [
        "https://www.linkedin.com/company/factoryjet",
        "https://www.crunchbase.com/organization/factoryjet",
      ],
    },
    {
      "@type": "LocalBusiness",
      "name": "FactoryJet Technologies: Birmingham",
      "url": "https://factoryjet.com/uk/birmingham",
      "description":
        "AI-native web design, e-commerce, AI agents and AI SEO agency serving Birmingham and the West Midlands.",
      "areaServed": {
        "@type": "City",
        "name": "Birmingham",
        "sameAs": "https://en.wikipedia.org/wiki/Birmingham",
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressRegion": "West Midlands",
      },
      
    },
    {
      "@type": "Service",
      "name": "Web Design Birmingham",
      "provider": { "@type": "Organization", "@id": "https://factoryjet.com/#organization", "name": "FactoryJet Technologies" },
      "areaServed": "Birmingham",
      "description":
        "AI-native web design agency in Birmingham. Next.js 15, WordPress, Webflow and Framer websites. Lighthouse SEO 100 guaranteed.",
    },
    {
      "@type": "Service",
      "name": "E-Commerce Development Birmingham",
      "provider": { "@type": "Organization", "@id": "https://factoryjet.com/#organization", "name": "FactoryJet Technologies" },
      "areaServed": "Birmingham",
      "description":
        "Shopify Plus agency Birmingham. Headless commerce, B2B ecommerce portals, WooCommerce for Birmingham retailers and manufacturers.",
    },
    {
      "@type": "Service",
      "name": "AI Agent Development Birmingham",
      "provider": { "@type": "Organization", "@id": "https://factoryjet.com/#organization", "name": "FactoryJet Technologies" },
      "areaServed": "Birmingham",
      "description":
        "Agentic AI and AI automation agency Birmingham. Multi-agent AI systems for legal firms, financial services, manufacturing and professional services.",
    },
    {
      "@type": "Service",
      "name": "AI SEO Birmingham",
      "provider": { "@type": "Organization", "@id": "https://factoryjet.com/#organization", "name": "FactoryJet Technologies" },
      "areaServed": "Birmingham",
      "description":
        "AI SEO agency Birmingham. Generative engine optimisation (GEO), answer engine optimisation (AEO) and AI SEO for Birmingham businesses.",
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
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
          "name": "Birmingham",
          "item": "https://factoryjet.com/uk/birmingham",
        },
      ],
    },
    {
      "@type": "WebPage",
      "name": "AI Web Design Agency Birmingham | FactoryJet",
      "url": "https://factoryjet.com/uk/birmingham",
      "description":
        "AI-native web design, AI agents & AI SEO agency in Birmingham. Pricing is fixed and published upfront.",
      "inLanguage": "en-GB",
      "isPartOf": {
        "@type": "WebSite",
        "name": "FactoryJet",
        "url": "https://factoryjet.com",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* JetBrains Mono, used by the TechStack section on this page */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="birmingham-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BirminghamPage />
    </>
  );
}
