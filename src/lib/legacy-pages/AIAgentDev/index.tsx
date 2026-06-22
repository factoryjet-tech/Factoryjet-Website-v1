'use client';

import React from 'react';
import Header from '@/components/Header';
import FooterUS from '@/components/FooterUS';
import { useContactModal } from '@/context/ContactModalContext';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { PainValidation } from './components/PainValidation';
import { WhyFactoryJet } from './components/WhyFactoryJet';
import { ServiceCards } from './components/ServiceCards';
import { ProcessSection } from './components/ProcessSection';
import { IndustryUseCases } from './components/IndustryUseCases';
import { TechnologyStack } from './components/TechnologyStack';
import { CaseStudies } from './components/CaseStudies';
import { ROIMetrics } from './components/ROIMetrics';
import { TrustCompliance } from './components/TrustCompliance';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { SchemaMarkup } from './components/SchemaMarkup';

export default function AIAgentDevPage() {
  const { openModal } = useContactModal();

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700 bg-white selection:bg-primary/20 selection:text-primary">
      <Header basePath="" variant="transparent" hideLocations />
      <SchemaMarkup />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TrustBar />
        <PainValidation />
        <WhyFactoryJet />
        <ServiceCards />
        <ProcessSection />
        <IndustryUseCases />
        <TechnologyStack />
        <CaseStudies />
        <ROIMetrics />
        <TrustCompliance />
        <FAQSection />
        <FinalCTA />
      </main>
      <FooterUS onCtaClick={() => openModal('us', 'ai')} hideLocations />
    </div>
  );
}
