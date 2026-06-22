
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
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
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const StickyMobileBar = lazy(() => import('./components/StickyMobileBar'));
const LeadFormModal = lazy(() => import('./components/LeadFormModal'));
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-jet-blue border-t-transparent rounded-full animate-spin" />
  </div>
);

const PunePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Web Design Pune | #1 Website Development Company | FactoryJet';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Looking for the best web design agency in Pune? FactoryJet delivers custom websites & e-commerce stores for SMBs. 4-week delivery, UPI/Razorpay ready. Starting ₹29,999. Call now!');
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
        <Footer />
        <WhatsAppButton />
        <StickyMobileBar />
        <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
        <ExitIntentPopup />
      </Suspense>
    </motion.div>
  );
};

export default PunePage;
