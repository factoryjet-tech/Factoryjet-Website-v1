'use client';

import React from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import SkipLink from './components/ui/SkipLink';
import ScrollProgress from './components/animations/ScrollProgress';
import FloatingActionButton from './components/ui/FloatingActionButton';
import { FAQ_DATA } from './lib/constants';

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function App() {
  const { openModal } = useContactModal();
  const openUsModal = () => openModal('us');

  return (
    <div className="min-h-screen font-sans selection:bg-jetOrange selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SkipLink />
      <ScrollProgress />

      <main id="main-content">
        <HeroSection onCtaClick={openUsModal} />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
        <PricingSection onCtaClick={openUsModal} />
        <TechnologySection />
        <ComparisonSection />
        <CaseStudiesSection />
        <TestimonialSection />
        <FAQSection onCtaClick={openUsModal} />
        <FinalCTASection onCtaClick={openUsModal} />
      </main>

      <FloatingActionButton />
    </div>
  );
}
