'use client';

import React from 'react';
import Script from 'next/script';
import { Hero } from './components/Hero';
import { SocialProof, About, ProblemSection, SolutionSection } from './components/ContentBlocks';
import { Services, Process, Technologies, Pricing } from './components/ServiceBlocks';
import { Industries, CaseStudies } from './components/IndustryBlocks';
import { Testimonials, FAQ, LocalSEO, FinalCTA } from './components/TrustBlocks';
import { MobileStickyCTA } from './components/MobileStickyCTA';

const PunePage = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": "https://factoryjet.com/services/web-design/pune",
    "telephone": "+91 96999 77699",
    "email": "connect@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ITPL Main Rd, Tigalarpalya, Brookefield",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560037",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Pune"
    },
    "priceRange": "₹29,999 - ₹5,00,000+"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does website design cost in Pune?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website design in Pune typically costs between ₹15,000 and ₹5,00,000 depending on features, functionality, and project complexity. Basic business websites start from ₹15,000, while advanced e-commerce or custom platforms require a higher budget."
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most business websites are completed within 7–14 days. Larger e-commerce or custom projects may take 2–4 weeks, depending on requirements."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide mobile-responsive websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All websites are fully mobile-responsive and optimized for smartphones, tablets, and desktops using a mobile-first design approach."
        }
      },
      {
        "@type": "Question",
        name: "Do you build e-commerce websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We create secure online stores with payment gateway integration, shipping setup, product management, and conversion optimization features."
        }
      },
      {
        "@type": "Question",
        name: "Will my website rank on Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every website includes foundational SEO setup such as technical optimization, meta configuration, XML sitemap, and structured data. Advanced SEO services are available separately."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen w-full overflow-x-hidden font-sans">
        <Hero />
        <SocialProof />
        <About />
        <ProblemSection />
        <SolutionSection />
        <Services />
        <Process />
        <Technologies />
        <Pricing />
        <Industries />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <LocalSEO />
        <FinalCTA />
      </main>
      <MobileStickyCTA />
    </>
  );
};

export default PunePage;
