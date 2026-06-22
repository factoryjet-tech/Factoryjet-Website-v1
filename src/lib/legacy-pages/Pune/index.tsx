import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from './components/HeroSection';
import SocialProof from './components/SocialProofBand';
import EntityBlock from './components/EntityBlock';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ComparisonSection from './components/ComparisonSection';
import PricingSection from './components/PricingSection';
import IndustryExpertise from './components/IndustryExpertise';
import CaseStudies from './components/CaseStudies';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import MarketDataSection from './components/MarketDataSection';
import TechnologiesSection from './components/TechnologiesSection';
import FinalCTA from './components/FinalCTA';
// import FooterSection from './components/FooterSection'; // Commented out - using global Footer instead
import WhatsAppButton from './components/WhatsAppButton';
import LeadFormModal from './components/LeadFormModal';
import ExitIntentPopup from './components/ExitIntentPopup';


const PunePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Schema.org JSON-LD Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": "https://factoryjet.com/locations/pune",
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

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does website design cost in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website design costs in Pune range from ₹15,000 to ₹10,00,000+ depending on complexity. FactoryJet offers transparent pricing starting at ₹29,999 for starter websites, ₹59,999 for business websites, and ₹99,999 for e-commerce websites."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website development timelines in Pune typically range from 4-16 weeks. FactoryJet delivers most websites in 4 weeks — 60% faster than the Pune industry average."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best website design company in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For SMBs seeking affordable, fast, high-quality websites, FactoryJet is consistently rated among the top choices with a 4.9/5 Google rating, 500+ completed projects, and transparent pricing starting at ₹29,999."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build Shopify stores in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, FactoryJet is a Shopify Partner. We build custom Shopify stores, migrate from other platforms, and integrate with Indian payment gateways and shipping providers. E-commerce packages start at ₹99,999."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate WhatsApp on my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WhatsApp integration is included in all FactoryJet packages. We add click-to-chat buttons, floating WhatsApp icons, and can set up WhatsApp Business API for larger businesses."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FactoryJet",
    "url": "https://www.factoryjet.com",
    "logo": "https://www.factoryjet.com/images/factoryjet-logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/factoryjet",
      "https://www.instagram.com/factoryjet",
      "https://www.facebook.com/factoryjet",
      "https://twitter.com/factoryjet"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 96999 77699",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  };

  return (
    <>
      <Script
        id="pune-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="pune-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Script
        id="pune-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <Header variant="solid" />
        <Hero onOpenModal={openModal} />
        <SocialProof />
        <EntityBlock />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection onOpenModal={openModal} />
        <ComparisonSection />
        <PricingSection onOpenModal={openModal} />
        <IndustryExpertise />
        <CaseStudies />
        <TestimonialsSection />
        <FAQSection />
        <MarketDataSection />
        <TechnologiesSection />
        <FinalCTA onOpenModal={openModal} />
        {/* <FooterSection /> */} {/* Commented out - using global Footer instead */}
        <Footer />
        <WhatsAppButton />
        <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
        <ExitIntentPopup />
      </motion.div>
    </>
  );
};

export default PunePage;
