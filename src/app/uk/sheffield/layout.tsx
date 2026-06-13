import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Sheffield | AI Websites in 7 Days | FactoryJet",
  description:
    "Professional web design Sheffield. Custom AI-powered websites for Sheffield SMBs built in 7 days. From £799. No lock-ins. Serving Kelham Island to the city centre.",
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
      "Professional web design Sheffield. Custom AI-powered websites for Sheffield SMBs built in 7 days. From £799. No lock-ins.",
    url: "https://factoryjet.com/uk/sheffield",
    siteName: "FactoryJet",
    locale: "en_GB",
    type: "website",
    images: [{ url: '/images/uk/city-sheffield.jpg', width: 1200, height: 630, alt: 'Web Design Sheffield — FactoryJet' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Sheffield | AI Websites in 7 Days | FactoryJet",
    description:
      "Professional web design Sheffield. Custom AI-powered websites for Sheffield SMBs built in 7 days. From £799. No lock-ins.",
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
  telephone: "+13391702199",
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
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "150", bestRating: "5", worstRating: "1" },
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
      name: "Day 1 — Discovery Call",
      text: "We learn your business, your Sheffield customers, your goals, and what you need the website to do.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Day 2 — Strategy & Structure",
      text: "We map your site architecture, research your Sheffield competitors, identify your top keywords, and write the first draft of your page copy.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Days 3–4 — Design",
      text: "Your bespoke design is created — homepage and inner pages. You get a design preview link. Feedback incorporated within 24 hours.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Days 5–6 — Development & SEO",
      text: "Your approved design is built in code — fast, mobile-first, and SEO-optimised. Sheffield local schema markup added. Google Analytics and Search Console connected.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Day 7 — Launch",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "How can you build a website in just 7 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We've engineered our entire process around speed without compromise. Our AI-assisted design tools and standardised (but fully custom) build process means we work 3–4× faster than traditional agencies.",
      },
    },
    {
      "@type": "Question",
      name: "Is my Sheffield website really custom, or is it a template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100% custom. We don't use WordPress themes, Wix, Squarespace, or any off-the-shelf templates. Every design starts from a blank canvas.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website rank on Google for Sheffield searches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build every site with Sheffield local SEO from the ground up — proper schema markup, optimised meta tags, local business structured data, and Sheffield-specific keyword integration.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to sign a long-term contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Never. We don't believe in locking Sheffield businesses into contracts. You pay for the website build upfront, and after that you own everything — your domain, your hosting account, your website files.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add an AI chatbot to an existing Sheffield website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can integrate our AI chatbot into any existing website — not just ones we've built. A chatbot integration typically takes 1–2 days and starts from £299.",
      },
    },
  ],
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
