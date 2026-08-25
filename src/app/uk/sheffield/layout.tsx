import type { Metadata } from "next";
import { FAQ_ITEMS } from "./faqData";
import { CANONICAL, CRUMBS } from "./seoData";

export const metadata: Metadata = {
  title: "SEO Agency Sheffield | Local SEO and Web Design | FactoryJet",
  description:
    "Sheffield SEO agency for local search, technical SEO and fast websites. Map pack work, Sheffield area pages, monthly reporting and no lock-in contracts.",
  keywords: [
    "seo agency sheffield",
    "seo sheffield",
    "local seo sheffield",
    "seo company sheffield",
    "web design sheffield",
    "website design sheffield",
  ],
  alternates: {
    canonical: CANONICAL,
    languages: { "en-GB": CANONICAL, "x-default": CANONICAL },
  },
  openGraph: {
    title: "SEO Agency Sheffield | Local SEO and Web Design | FactoryJet",
    description:
      "Sheffield SEO agency for local search, technical SEO and fast websites. Map pack work, Sheffield area pages and monthly reporting.",
    url: CANONICAL,
    siteName: "FactoryJet",
    locale: "en_GB",
    type: "website",
    images: [{ url: '/images/uk/city-sheffield.jpg', width: 1200, height: 630, alt: 'SEO agency Sheffield: FactoryJet' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Agency Sheffield | Local SEO and Web Design | FactoryJet",
    description:
      "Sheffield SEO agency for local search, technical SEO and fast websites. Map pack work, Sheffield area pages and monthly reporting.",
  },
  robots: { index: true, follow: true },
};

// Derived from the SAME CRUMBS array that page.tsx renders as a visible trail.
// Do not hand-write a second list here: the visible trail and the markup have to
// describe the same navigation or it becomes a soft cloaking problem.
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: CRUMBS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
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
      name: "Day 2 | Strategy and Structure",
      text: "We map your site architecture, research your Sheffield competitors, identify your top keywords, and write the first draft of your page copy.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Days 3 to 4 | Design",
      text: "Your bespoke design is created, homepage and inner pages. You get a design preview link. Feedback incorporated within 24 hours.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Days 5 to 6 | Development and SEO",
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
  "@id": `${CANONICAL}#webpage`,
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2:first-of-type"] },
  "url": CANONICAL,
};

// Generated from the same FAQ_ITEMS array the accordion renders. If you find
// yourself typing a second question list next to this block, stop: that is the
// drift bug this file exists to prevent.
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
