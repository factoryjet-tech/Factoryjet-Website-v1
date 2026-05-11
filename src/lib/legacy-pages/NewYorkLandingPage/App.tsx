'use client';

import React from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import { HeroSection } from './components/sections/HeroSection';
import { TrustIndicators } from './components/sections/TrustIndicators';
import { WhyNYC } from './components/sections/WhyNYC';
import { SevenReasons } from './components/sections/SevenReasons';
import { HiddenCostTable } from './components/sections/HiddenCostTable';
import { FactoryJetDifference } from './components/sections/FactoryJetDifference';
import { ServicesIntro } from './components/sections/ServicesIntro';

function App() {
  const { openModal } = useContactModal();
  const openUsModal = () => openModal('us');

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <HeroSection />
      <TrustIndicators />
      <WhyNYC />
      <SevenReasons />
      <HiddenCostTable />
      <FactoryJetDifference />
      <ServicesIntro />
    </main>
  );
}

export default App;
