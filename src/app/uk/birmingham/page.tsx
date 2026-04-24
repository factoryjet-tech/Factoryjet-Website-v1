import type { Metadata } from "next";
import Script from "next/script";
import BirminghamPage from "./BirminghamPage";

export const metadata: Metadata = {
  title: "AI Web Design Agency Birmingham | FactoryJet — UK's AI-Native Agency",
  description:
    "AI-native web design, Shopify development, AI agents and AI SEO for Birmingham's 60,000 businesses. 50–60% below Jewellery Quarter agency rates. From Paradise Quarter to Brindleyplace — built for the second city.",
  alternates: {
    canonical: "https://factoryjet.com/uk/birmingham",
  },
  openGraph: {
    title: "AI Web Design Agency Birmingham | FactoryJet",
    description:
      "AI-native web design, e-commerce & AI agent development for Birmingham businesses. £31.9bn city region economy. Free quote.",
    url: "https://factoryjet.com/uk/birmingham",
    images: [{ url: "/images/uk/birmingham/hero-birmingham.webp" }],
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
      "logo": "https://factoryjet.com/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": "English",
        "areaServed": "GB",
      },
      "areaServed": ["Birmingham", "West Midlands", "United Kingdom"],
    },
    {
      "@type": "LocalBusiness",
      "name": "FactoryJet Technologies — Birmingham",
      "url": "https://factoryjet.com/uk/birmingham",
      "description":
        "AI-native web design, e-commerce, AI agents and AI SEO agency serving Birmingham and the West Midlands.",
      "areaServed": {
        "@type": "City",
        "name": "Birmingham",
        "sameAs": "https://en.wikipedia.org/wiki/Birmingham",
      },
      "priceRange": "££",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressRegion": "West Midlands",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.4862,
        "longitude": -1.8904,
      },
    },
    {
      "@type": "Service",
      "name": "Web Design Birmingham",
      "provider": { "@type": "Organization", "name": "FactoryJet Technologies" },
      "areaServed": "Birmingham",
      "description":
        "AI-native web design agency in Birmingham. Next.js 15, WordPress, Webflow and Framer websites. Lighthouse SEO 100 guaranteed.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 1995,
          "maxPrice": 18000,
        },
      },
    },
    {
      "@type": "Service",
      "name": "E-Commerce Development Birmingham",
      "provider": { "@type": "Organization", "name": "FactoryJet Technologies" },
      "areaServed": "Birmingham",
      "description":
        "Shopify Plus agency Birmingham. Headless commerce, B2B ecommerce portals, WooCommerce for Birmingham retailers and manufacturers.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 2995,
          "maxPrice": 35000,
        },
      },
    },
    {
      "@type": "Service",
      "name": "AI Agent Development Birmingham",
      "provider": { "@type": "Organization", "name": "FactoryJet Technologies" },
      "areaServed": "Birmingham",
      "description":
        "Agentic AI and AI automation agency Birmingham. Multi-agent AI systems for legal firms, financial services, manufacturing and professional services.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 3500,
          "maxPrice": 16000,
        },
      },
    },
    {
      "@type": "Service",
      "name": "AI SEO Birmingham",
      "provider": { "@type": "Organization", "name": "FactoryJet Technologies" },
      "areaServed": "Birmingham",
      "description":
        "AI SEO agency Birmingham. Generative engine optimisation (GEO), answer engine optimisation (AEO) and AI SEO for Birmingham businesses.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 650,
          "maxPrice": 4000,
        },
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does web design cost in Birmingham?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Birmingham web agencies charge between £4,800 and £18,000 for a professional business website, with e-commerce projects running from £6,500 to £35,000. FactoryJet builds professional Next.js and WordPress websites from £1,995, with Shopify stores from £2,995. Free itemised quotes within 24 hours, no discovery phase required.",
          },
        },
        {
          "@type": "Question",
          "name": "What is AI SEO and does my Birmingham business need it in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI SEO optimises your content to be cited by AI-powered search engines — Google AI Overviews, ChatGPT Search, Perplexity, and Claude. FactoryJet builds AI SEO strategies using entity-based content architecture, FAQPage schema, llms.txt implementation, and AI crawler whitelisting for Birmingham businesses.",
          },
        },
        {
          "@type": "Question",
          "name": "What is generative engine optimisation (GEO) for Birmingham businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GEO structures your website content and schema so AI language models cite your business when generating answers. FactoryJet is one of the only agencies in the West Midlands executing full GEO and answer engine optimisation (AEO) implementations.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I get a Next.js or Framer developer in Birmingham?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — FactoryJet's primary stack is Next.js 15 with React 19, Tailwind CSS 4, and GSAP. We also build in Framer and Webflow. One of the few agencies in Birmingham delivering these at non-agency-inflated rates, with Lighthouse scores of 90–100 guaranteed.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you build Shopify Plus stores for Birmingham businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. FactoryJet builds Shopify Plus stores, standard Shopify stores, and headless commerce architectures using Shopify as the backend with a custom Next.js storefront — including B2B trade portals for the Jewellery Quarter's wholesale market.",
          },
        },
        {
          "@type": "Question",
          "name": "What is agentic AI for Birmingham law firms and financial services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agentic AI takes multi-step autonomous actions — completing workflows without human intervention. For Birmingham law firms: AI intake agents that qualify enquiries, create CRM entries, and draft acknowledgments. For financial services near Brindleyplace: client onboarding and compliance workflow automation.",
          },
        },
        {
          "@type": "Question",
          "name": "How quickly can you build a website for my Birmingham business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard 5-page business website takes 3–4 weeks. Shopify e-commerce: 4–6 weeks. Custom Next.js build: 6–10 weeks. AI agent deployment: 4–8 weeks. Express 2-week delivery available for simple business sites (+£500). Every site ships Lighthouse SEO 100 guaranteed.",
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
          "name": "Birmingham",
          "item": "https://factoryjet.com/uk/birmingham",
        },
      ],
    },
    {
      "@type": "WebPage",
      "name": "AI Web Design Agency Birmingham | FactoryJet — UK's AI-Native Agency",
      "url": "https://factoryjet.com/uk/birmingham",
      "description":
        "AI-native web design, AI agents & AI SEO agency in Birmingham. 50–60% below local agency rates.",
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
      <Script
        id="birmingham-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BirminghamPage />
    </>
  );
}
