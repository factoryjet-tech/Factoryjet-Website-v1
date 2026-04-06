import React, { useState } from 'react';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import SocialProofBand from './components/SocialProofBand';
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

const DelhiPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Schema.org LocalBusiness Markup for Delhi NCR
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": "https://factoryjet.com/services/web-design/delhi",
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
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does website design cost in Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website design costs vary based on complexity and features. At FactoryJet, we offer packages starting at ₹15,000 for a basic 5-page website to ₹5,00,000+ for enterprise custom solutions. We provide transparent pricing with no hidden costs."
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website in Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our streamlined process typically delivers a website in 7 days. More complex projects with custom features may take 2-4 weeks. We prioritize speed without compromising quality."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide e-commerce solutions in Gurgaon and Noida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in e-commerce development with Shopify, WooCommerce, and custom platforms. We serve businesses across Delhi NCR including Gurgaon, Noida, Faridabad, and Ghaziabad."
        }
      },
      {
        "@type": "Question",
        name: "Can you integrate payment gateways on my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we integrate all major payment gateways including Razorpay, PayPal, Stripe, and others for secure transactions on your website or e-commerce platform."
        }
      },
      {
        "@type": "Question",
        name: "Will my website be mobile responsive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. All websites built by FactoryJet are fully responsive and optimized for mobile, tablet, and desktop devices to provide the best user experience across all platforms."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="delhi-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Script
        id="delhi-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Content */}
      <div className="min-h-screen bg-white">
        <Header variant="solid" />
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <SocialProofBand />
        <EntityBlock />
        <ProblemSection onOpenModal={() => setIsModalOpen(true)} />
        <ServicesSection onOpenModal={() => setIsModalOpen(true)} />
        {/* <ProcessSection /> */}
        {/* <ComparisonSection onOpenModal={() => setIsModalOpen(true)} /> */}
        <PricingSection onOpenModal={() => setIsModalOpen(true)} />
        <IndustryExpertise onOpenModal={() => setIsModalOpen(true)} />
        <CaseStudies onOpenModal={() => setIsModalOpen(true)} />
        <TestimonialsSection />
        <FAQSection />
        <MarketDataSection />
        <TechnologiesSection />
        <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
        {/* <FooterSection /> */} {/* Commented out - using global Footer instead */}
        <Footer />

        {/* Floating Components */}
        <WhatsAppButton />
        <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <ExitIntentPopup />
      </div>
    </>
  );
};

export default DelhiPage;
