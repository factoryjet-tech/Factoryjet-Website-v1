'use client';

import React, { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';

// Lazy load below-the-fold components
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
// const Footer = lazy(() => import('./components/Footer')); // Commented out - using global Footer instead
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const StickyMobileBar = lazy(() => import('./components/StickyMobileBar'));
const LeadFormModal = lazy(() => import('./components/LeadFormModal'));
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-jet-blue border-t-transparent rounded-full animate-spin" />
  </div>
);

const SuratPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": "https://factoryjet.com/services/web-design/surat",
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
      "name": "Surat"
    },
    "priceRange": "₹29,999 - ₹5,00,000+"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does website design cost in Surat?",
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

  useEffect(() => {
    document.title = 'Best Website Design Company in Surat | FactoryJet';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional website design & e-commerce development in Surat. Trusted by 200+ South Gujarat businesses. 4-week delivery. Starting ₹29,999. Get free audit!');
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Script
        id="surat-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Script
        id="surat-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header variant="solid" />
      <Hero onOpenModal={openModal} />
      <SocialProof />

      <Suspense fallback={<LoadingSpinner />}>
        <ProblemSection />
        <Services />
        <Process onOpenModal={openModal} />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Pricing onOpenModal={openModal} />
        <FAQ />
        <CTA onOpenModal={openModal} />
        {/* <Footer /> */} {/* Commented out - using global Footer instead */}
        <Footer />
        <WhatsAppButton />
        <StickyMobileBar />
        <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
        <ExitIntentPopup />
      </Suspense>
    </motion.div>
  );
};

export default SuratPage;
