import { manchesterMetadata } from "./metadata";

export const metadata = manchesterMetadata;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FactoryJet Technologies",
  description:
    "AI-native web design agency building custom websites for Manchester businesses. Next.js 15, GSAP, Tailwind CSS 4. Pricing is fixed and published upfront.",
  url: "https://factoryjet.com/manchester",
  email: "connect@factoryjet.com",
  areaServed: {
    "@type": "City",
    name: "Manchester",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
    },
  },
  serviceArea: {
    "@type": "AdministrativeArea",
    name: "Greater Manchester, UK",
  },
  sameAs: [
    "https://www.linkedin.com/company/factoryjet",
    "https://www.crunchbase.com/organization/factoryjet",
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "150", bestRating: "5", worstRating: "1" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Design",
  name: "Web Design Manchester",
  description:
    "AI-native web design agency serving Manchester businesses. Custom websites built with Next.js 15, GSAP animations, and Tailwind CSS 4. Pricing is fixed and published upfront. Lighthouse 90+ guaranteed.",
  provider: {
    "@type": "LocalBusiness",
    name: "FactoryJet Technologies",
    url: "https://factoryjet.com",
  },
  areaServed: {
    "@type": "City",
    name: "Manchester",
  },
};

const breadcrumbSchema = {
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
      name: "UK",
      item: "https://factoryjet.com/uk",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Manchester",
      item: "https://factoryjet.com/uk/manchester",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Web Design",
      item: "https://factoryjet.com/manchester",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How FactoryJet builds your Manchester website in 2–4 weeks",
  description:
    "Our 5-step process for delivering a professional, AI-native website for Manchester businesses.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Discovery & Conversion Mapping (Days 1–2)",
      text: "We audit your current Manchester digital presence, map your customer journey from search query to conversion, identify keyword gaps against local competitors, and define the technical architecture.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Content Architecture & SEO Engineering (Days 3–5)",
      text: "Every page structured for both human readers and AI systems. We write conversion copy, define heading hierarchy, build FAQ schema content, and map internal linking across 20+ Manchester keywords.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "UI/UX Design & Animation Choreography (Days 6–10)",
      text: "Design in code, not Figma. Every section built as a React component with responsive breakpoints, GSAP scroll animations, and Lenis smooth scroll. You see the actual website in a staging environment.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Development, Testing & Performance Tuning (Days 11–18)",
      text: "Full build in Next.js 15 with Tailwind CSS 4. Schema injection, sitemap, robots.txt, Core Web Vitals optimisation. Tested across Chrome, Safari, Firefox, Edge, iOS and Android. Every page must score Lighthouse 90+ before deployment.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Launch, Indexing & 90-Day Support (Day 19+)",
      text: "Deploy to your domain, submit to Google Search Console, configure analytics, and begin monitoring indexation. 90 days of post-launch support including bug fixes, content updates, and performance monitoring — included, not invoiced separately.",
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://factoryjet.com/uk/manchester#webpage",
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2:first-of-type"] },
  "url": "https://factoryjet.com/uk/manchester"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does web design cost in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manchester web design costs vary enormously. Boutique agencies charge £1,000–£5,000 for template-based sites. Established agencies like MadeByShape or Supremo charge £5,000–£25,000 for bespoke work. FactoryJet delivers AI-native, Next.js-powered websites from £1,500–£8,000 — at a fixed, published price — with Lighthouse 90+ performance and full schema stack included.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best web design agency in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manchester has over 1,000 web design agencies, with MadeByShape, Pixel Kicks, Soap Media, and Supremo among the most established. If you want AI-native, performance-engineered websites built on Next.js 15 with guaranteed SEO scores and AI search visibility, FactoryJet is purpose-built for that — at a fraction of the typical Manchester cost.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Manchester agencies quote 6–12 weeks for a custom website. FactoryJet delivers in 2–4 weeks because we design in code (not Figma-to-handoff) and use a component-based architecture that eliminates rebuild cycles. Complex e-commerce builds may take 4–6 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is GEO and why does it matter for Manchester businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO (Generative Engine Optimisation) is the practice of making your website visible and citable by AI search systems — ChatGPT, Perplexity, Claude, Google AI Overviews. When someone asks 'who does web design in Manchester?', GEO-optimised websites with proper schema markup, clear E-E-A-T signals, and expanded content are the ones that get cited. FactoryJet builds it into every page by default.",
      },
    },
    {
      "@type": "Question",
      name: "What technology should my Manchester website use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2026, the highest-performing websites use React-based frameworks like Next.js 15 rather than WordPress or Squarespace. Next.js offers server-side rendering (faster load times), static generation (better SEO), and native API routes (dynamic functionality without plugins). Most Manchester agencies still default to WordPress — which works, but doesn't compete on performance or AI visibility.",
      },
    },
    {
      "@type": "Question",
      name: "What Lighthouse scores do your Manchester websites achieve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our benchmark — proven on our Sheffield landing page — is Performance 90+, SEO 100, Accessibility 96+, and Best Practices 100. Every Manchester website we build is held to these standards before deployment. Most Manchester agencies don't mention Lighthouse scores because their sites score 40–65.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build Shopify or WooCommerce stores for Manchester businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build e-commerce websites on Shopify, Shopify Plus, WooCommerce, and headless commerce architectures using Next.js. For Manchester retail and fashion businesses, we recommend Shopify Plus for its scalability and native checkout — or headless Next.js commerce for maximum performance and customisation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide web design for startups in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Manchester's startup ecosystem — from Northern Quarter tech startups to MediaCityUK media ventures — is a core market for FactoryJet. We offer startup-friendly pricing from £1,500 for a high-performance landing page, with the option to scale into a full multi-page site as your business grows.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website rank on Google in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every FactoryJet website ships with a Lighthouse SEO score of 100, full structured data markup (LocalBusiness, Service, FAQPage, BreadcrumbList), optimised meta titles targeting 'web design Manchester' and related keywords, and internal linking architecture. We also configure Google Search Console and submit your sitemap on launch day.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Manchester-based web designer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. What you need is a web design team that understands Manchester's market, competitive landscape, and customer behaviour — and delivers a website that performs on every technical metric. FactoryJet serves Manchester businesses remotely with UK-hours availability, direct engineer access, and deep local market research baked into every project.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing Manchester website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly rebuild existing WordPress, Squarespace, and Wix sites on Next.js 15. The typical result: 3–5x faster load times, 40–60% improvement in Lighthouse scores, full AI search visibility, and a modern design that converts visitors into leads. We handle content migration, 301 redirects, and Search Console reconfiguration.",
      },
    },
    {
      "@type": "Question",
      name: "How do Manchester web design prices compare to London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "London web design agencies typically charge 30–50% more than Manchester equivalents, with custom projects ranging £10,000–£50,000+. Manchester agencies cluster at £5,000–£25,000. FactoryJet delivers at £1,500–£8,000 — below both markets — because our India-based engineering team operates at senior UK quality standards without London or Manchester overheads.",
      },
    },
  ],
};

export default function ManchesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        id="manchester-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="manchester-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="manchester-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="manchester-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="manchester-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="manchester-speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
  );
}
