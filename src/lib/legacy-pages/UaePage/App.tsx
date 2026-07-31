'use client';

import React from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import Hero from './components/Hero';
import AgencyInfo from './components/AgencyInfo';
import WhyDubai from './components/WhyDubai';
import Services from './components/Services';
import Comparison from './components/Comparison';
import Industries from './components/Industries';
import Process from './components/Process';
import Features from './components/Features';
import SuccessStories from './components/SuccessStories';
import Pricing from './components/Pricing';
import FAQ, { faqData } from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function App() {
  const { openModal } = useContactModal();

  return (
    <div className="font-sans antialiased text-navy bg-offwhite min-h-screen relative selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Hero onOpenModal={() => openModal('in')} />
        <AgencyInfo />
        <WhyDubai />
        <Services />
        <Comparison onOpenModal={() => openModal('in')} />
        <Industries onOpenModal={() => openModal('in')} />
        <Process />
        <Features onOpenModal={() => openModal('in')} />
        <SuccessStories onOpenModal={() => openModal('in')} />
        <Pricing onOpenModal={() => openModal('in')} />
        <FAQ />
      </main>
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
