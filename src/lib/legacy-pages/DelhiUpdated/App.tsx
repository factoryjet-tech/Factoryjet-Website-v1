'use client';

import React from 'react';
import Header from '@/components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileCTA from './components/StickyMobileCTA';
import Footer from '@/components/Footer';
import {
  HeroSection,
  HeroDescription,
  SocialProof,
  AboutBlock,
  ProblemSection,
  SolutionSection,
  ServicesSection,
  ProcessSection,
  PricingSection,
  IndustriesSection,
  CaseStudiesSection,
  TestimonialsSection,
  FAQSection,
  LocalSEOSection,
  FinalCTA,

} from './components/Sections';
import { FAQS } from './data.constants';

// Schema Markup helper
const SchemaMarkup = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": "https://factoryjet.com/website-design-company-delhi-ncr",
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
      "name": "Delhi NCR"
    },
    "priceRange": "₹29,999 - ₹5,00,000+"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

const DelhiUpdatedPage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate pb-16 md:pb-0"> {/* Add padding bottom for sticky mobile CTA */}
      <SchemaMarkup />
      <Header variant="solid" />
      {/* <Header /> */}
      <main>
        <HeroSection />
        <HeroDescription />
        <SocialProof />
        <AboutBlock />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <ProcessSection />
        {/* Tech Section integrated into About/Services implicitly for brevity while keeping key content */}
        <PricingSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FAQSection />
        <LocalSEOSection />
        <FinalCTA />
      </main>
      {/* <Footer /> */}
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default DelhiUpdatedPage;