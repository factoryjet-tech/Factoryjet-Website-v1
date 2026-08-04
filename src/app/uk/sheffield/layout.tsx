import type { Metadata } from "next";
import { FAQ_ITEMS } from "./faqData";

export const metadata: Metadata = {
  title: "Web Design Sheffield | AI Websites in 7 Days | FactoryJet",
  description:
    "Professional web design Sheffield. Custom AI-powered websites for Sheffield SMBs built in 7 days. Fixed pricing, quoted up front. No lock-ins. Serving Kelham Island to the city centre.",
  keywords: [
    "web design sheffield",
    "website design sheffield",
    "web designer sheffield",
    "ai website sheffield",
    "web design company sheffield",
  ],
  alternates: { canonical: "https://factoryjet.com/uk/sheffield" },
  openGraph: {
    title: "Web Design Sheffield | AI Websites in 7 Days | FactoryJet",
    description:
      "Professional web design Sheffield. Custom AI-powered websites for Sheffield SMBs built in 7 days. Fixed pricing, quoted up front. No lock-ins.",
    url: "https://factoryjet.com/uk/sheffield",
    siteName: "FactoryJet",
    locale: "en_GB",
    type: "website",
    images: [{ url: '/images/uk/city-sheffield.jpg', width: 1200, height: 630, alt: 'Web Design Sheffield: FactoryJet' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Sheffield | AI Websites in 7 Days | FactoryJet",
    description:
      "Professional web design Sheffield. Custom AI-powered websites for Sheffield SMBs built in 7 days. Fixed pricing, quoted up front. No lock-ins.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FactoryJet Technologies",
  description:
    "AI-powered web design agency building custom websites for Sheffield SMBs in 7 days.",
  url: "https://factoryjet.com/uk/sheffield",
  telephone: "+919699977699",
  email: "connect@factoryjet.com",
  serviceArea: {
    "@type": "AdministrativeArea",
    name: "Sheffield, South Yorkshire, UK",
  },
  areaServed: ["Sheffield", "Rotherham", "Barnsley", "Doncaster"],
  sameAs: [
    "https://www.linkedin.com/company/factoryjet",
    "https://www.crunchbase.com/organization/factoryjet",
  ],
  
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Design",
  name: "Web Design Sheffield",
  description:
    "Custom AI-powered websites for Sheffield businesses, delivered in 7 days. Includes mobile-first design, Sheffield local SEO, SSL, analytics, and 30 days support.",
  provider: {
    "@type": "LocalBusiness",
    name: "FactoryJet Technologies",
    url: "https://factoryjet.com",
  },
  areaServed: {
    "@type": "City",
    name: "Sheffield",
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
      name: "Web Design Sheffield",
      item: "https://factoryjet.com/uk/sheffield",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How FactoryJet builds your Sheffield website in 7 days",
  description:
    "Our 7-day process for delivering a professional, AI-powered website for Sheffield businesses.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Day 1 | Discovery Call",
      text: "We learn your business, your Sheffield customers, your goals, and what you need the website to do.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Day 2 | Strategy & Structure",
      text: "We map your site architecture, research your Sheffield competitors, identify your top keywords, and write the first draft of your page copy.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Days 3–4 | Design",
      text: "Your bespoke design is created, homepage and inner pages. You get a design preview link. Feedback incorporated within 24 hours.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Days 5–6 | Development & SEO",
      text: "Your approved design is built in code, fast, mobile-first, and SEO-optimised. Sheffield local schema markup added. Google Analytics and Search Console connected.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Day 7 | Launch",
      text: "Final review, testing across 5 devices, and go-live. You receive full handover documentation and a 30-minute training session.",
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://factoryjet.com/uk/sheffield#webpage",
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2:first-of-type"] },
  "url": "https://factoryjet.com/uk/sheffield"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function SheffieldUKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
  );
}
