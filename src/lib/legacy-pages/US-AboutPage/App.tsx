'use client';

import React from 'react';
import Header from '@/components/Header';
import FooterUS from '@/components/FooterUS';
import { useContactModal } from '@/context/ContactModalContext';
import SkipLink from './components/ui/SkipLink';
import ScrollProgress from './components/animations/ScrollProgress';
import FloatingActionButton from './components/ui/FloatingActionButton';

// Import Sections
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import SolutionSection from './components/sections/SolutionSection';
import ServicesSection from './components/sections/ServicesSection';
import ProcessSection from './components/sections/ProcessSection';
import StatsSection from './components/sections/StatsSection';
import PricingSection from './components/sections/PricingSection';
import TechnologySection from './components/sections/TechnologySection';
import ComparisonSection from './components/sections/ComparisonSection';
import CaseStudiesSection from './components/sections/CaseStudiesSection';
import TestimonialSection from './components/sections/TestimonialSection';
import FAQSection from './components/sections/FAQSection';
import FinalCTASection from './components/sections/FinalCTASection';

export default function App() {
  const { openModal } = useContactModal();

  return (
    <div className="min-h-screen font-sans selection:bg-jetOrange selection:text-white">
      <SkipLink />
      <ScrollProgress />

      <Header basePath="/us/about" variant="transparent" />

      <main id="main-content">
        <HeroSection onCtaClick={openModal} />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
        <PricingSection onCtaClick={openModal} />
        <TechnologySection />
        <ComparisonSection />
        <CaseStudiesSection />
        <TestimonialSection />
        <FAQSection onCtaClick={openModal} />
        <FinalCTASection onCtaClick={openModal} />
      </main>

      <FooterUS onCtaClick={openModal} />

      <FloatingActionButton />
    </div>
  );
}
