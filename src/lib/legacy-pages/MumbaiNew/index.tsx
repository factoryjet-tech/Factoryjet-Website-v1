'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
import ContactModal from './components/ContactModal';
import StickyMobileCTA from './components/StickyMobileCTA';

const MumbaiPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  return (
    <>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FactoryJet - Industrial Web Design Company Mumbai",
            "image": "https://www.factoryjet.com/images/factoryjet-mumbai.jpg",
            "url": "https://factoryjet.com/services/web-design/mumbai",
            "telephone": "+91 96999 77699",
            "email": "connect@factoryjet.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Building #20, 10, Ajit Glass Garden Rd, opp. Amrutnagar, Somani Gram, Goregaon West",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400063",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "19.1646",
              "longitude": "72.8493"
            },
            "priceRange": "₹15,000 - ₹5,00,000+",
            "openingHours": ["Mo-Fr 09:00-19:00", "Sa 10:00-16:00"],
            "areaServed": ["Mumbai", "Thane", "Navi Mumbai", "Vasai-Virar", "Boisar", "Palghar", "Bhiwandi", "Kalyan", "Panvel", "MIDC Andheri", "MIDC Taloja"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
            },
            "sameAs": [
              "https://www.facebook.com/factoryjet",
              "https://www.linkedin.com/company/factoryjet",
              "https://twitter.com/factoryjet"
            ]
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

      <Header variant="solid" />

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
      <Footer />
      <StickyMobileCTA />
      <ExitIntentModal />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default MumbaiPage;
