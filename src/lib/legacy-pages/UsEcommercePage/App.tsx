'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from './components/Hero';
import { Problem, Difference } from './components/ProblemDifference';
import Platforms from './components/Platforms';
import { B2BCommerce, MobileCommerce, SocialCommerce, CrossBorderOmnichannel, HeadlessCommerce } from './components/SpecializedServices';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import FooterUS from '@/components/FooterUS';
import { LeadCaptureProvider } from './context/LeadCaptureContext';
import { useContactModal } from '@/context/ContactModalContext';

function EcommerceContent() {
  const { openModal } = useContactModal();

  return (
    <div className="min-h-screen font-sans selection:bg-jet-orange/20 selection:text-jet-orange">
      <Header basePath="/us" />
      <Hero />
      <Problem />
      <Difference />
      <Platforms />
      <B2BCommerce />
      <MobileCommerce />
      <SocialCommerce />
      <HeadlessCommerce />
      <CrossBorderOmnichannel />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <CTA />
      <FooterUS onCtaClick={() => openModal('us')} />
    </div>
  );
}

export default function UsEcommercePage() {
  return (
    <LeadCaptureProvider>
      <EcommerceContent />
    </LeadCaptureProvider>
  );
}