import { manchesterMetadata } from "./metadata";
import { ALL_FAQS } from "./sections/FAQ";

export const metadata = manchesterMetadata;

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
      text: "Deploy to your domain, submit to Google Search Console, configure analytics, and begin monitoring indexation. 90 days of post-launch support including bug fixes, content updates, and performance monitoring, included, not invoiced separately.",
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
  mainEntity: ALL_FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ManchesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
