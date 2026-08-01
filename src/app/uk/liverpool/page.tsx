import type { Metadata } from "next";
import LiverpoolPage from "./LiverpoolPage";
import { FAQS } from "./faqData";

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
