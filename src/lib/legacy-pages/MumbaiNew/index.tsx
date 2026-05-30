'use client';

import React from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import Hero from './components/Hero';
import {
  SocialProof,
  AboutSection,
  ProblemsSection,
  SolutionSection,
  ProcessSection,
  TechnologiesSection,
  LocalSEOSection,
  FinalCTA
} from './components/MainSections';
import {
  ServicesSection,
  PricingSection,
  IndustriesSection,
  CaseStudiesSection,
  TestimonialsSection,
  FaqSection
} from './components/DetailedSections';
// import FooterLocal from './components/FooterLocal'; // Commented out - using global Footer instead
import ExitIntentModal from './components/ExitIntentModal';
import StickyMobileCTA from './components/StickyMobileCTA';

const MumbaiPage = () => {
  const { openModal } = useContactModal();

  const openContactModal = () => openModal('in');

  return (
    <>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FactoryJet",
            "url": "https://factoryjet.com/services/web-design/mumbai",
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
              "name": "Mumbai"
            },
            "priceRange": "₹29,999 - ₹5,00,000+"
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does it take to build an industrial website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FactoryJet delivers complete industrial websites in 7 days. Our team handles design, development, catalog setup, and SEO much faster than traditional agencies."
                }
              },
              {
                "@type": "Question",
                name: "Do you provide content writing for technical products?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We provide SEO-optimized technical content for manufacturers, exporters, and industrial businesses. Our team understands product specifications, certifications, and B2B buyer intent."
                }
              },
              {
                "@type": "Question",
                name: "Will my website work on mobile devices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Every website we build is 100% mobile responsive. Your product catalog and inquiry forms will work perfectly on phones and tablets."
                }
              },
              {
                "@type": "Question",
                name: "Which is the best website design company in Mumbai for manufacturers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FactoryJet is among the leading website design companies in Mumbai for manufacturers, with 500+ industrial projects and export-focused expertise."
                }
              },
              {
                "@type": "Question",
                name: "Why do Mumbai manufacturers need a professional website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A professional website helps manufacturers attract export buyers, reduce marketplace dependency, and generate direct B2B inquiries."
                }
              }
            ]
          })
        }}
      />


      <main className="min-h-screen w-full overflow-x-hidden font-sans">
        <Hero />
        <SocialProof />
        <AboutSection />
        <ProblemsSection />
        <SolutionSection />
        <ServicesSection onOpenModal={openContactModal} />
        <ProcessSection />
        <TechnologiesSection />
        <PricingSection onOpenModal={openContactModal} />
        <IndustriesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FaqSection />
        <LocalSEOSection />
        <FinalCTA onOpenModal={openContactModal} />
      </main>

      {/* <FooterLocal /> */} {/* Commented out - using global Footer instead */}
      <StickyMobileCTA />
      <ExitIntentModal />
    </>
  );
};

export default MumbaiPage;
