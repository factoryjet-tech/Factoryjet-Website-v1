'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import Hero from './components/Hero';
import StickyMobileBar from './components/StickyMobileBar';
import SocialProof from './components/SocialProof';
import ProblemSection from './components/ProblemSection';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
// import Footer from './components/Footer'; // Commented out - using global Footer instead
import WhatsAppButton from './components/WhatsAppButton';
import ExitIntentPopup from './components/ExitIntentPopup';
import LeadFormModal from './components/LeadFormModal';

const AhmedabadPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": "https://factoryjet.com/services/web-design/ahmedabad",
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
      "name": "Ahmedabad"
    },
    "priceRange": "₹29,999 - ₹5,00,000+"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does website design cost in Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website design costs vary based on complexity. At FactoryJet, we offer packages starting at ₹15,000 for basic websites to ₹5,00,000+ for enterprise solutions."
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our streamlined process typically delivers a website in 7 days. More complex projects may take 2-4 weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide e-commerce solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in e-commerce development with Shopify, WooCommerce, and custom platforms."
        }
      },
      {
        "@type": "Question",
        name: "Can you integrate payment gateways?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we integrate all major payment gateways including Razorpay, PayPal, Stripe for secure transactions."
        }
      },
      {
        "@type": "Question",
        name: "Will my website be mobile responsive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. All websites are fully responsive and optimized for all devices."
        }
      }
    ]
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen relative bg-white text-jet-navy font-body overflow-x-hidden pb-24 lg:pb-0">
      <Script
        id="ahmedabad-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Script
        id="ahmedabad-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Hero onCtaClick={openModal} />
        <SocialProof />
        <ProblemSection onCtaClick={openModal} />
        <Services onCtaClick={openModal} />
        <Process onCtaClick={openModal} />
        <Portfolio onCtaClick={openModal} />
        <WhyUs />
        <Testimonials />
        <Pricing onCtaClick={openModal} />
        <FAQ />
        <CTA onCtaClick={openModal} />
      </main>
      <WhatsAppButton />
      <StickyMobileBar />
      <ExitIntentPopup />
      <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AhmedabadPage;
