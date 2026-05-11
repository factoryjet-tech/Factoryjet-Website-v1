'use client';

import React from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import WordPressDevelopment from './components/services/WordPressDevelopment';
import WebflowDevelopment from './components/services/WebflowDevelopment';
import FramerDevelopment from './components/services/FramerDevelopment';
import CustomDevelopment from './components/services/CustomDevelopment';
import ECommerceDevelopment from './components/services/ECommerceDevelopment';
import PricingSection from './components/pricing/PricingSection';

export default function App() {
  const { openModal } = useContactModal();
  const openUsModal = () => openModal('us');

  return (
    <main className="min-h-screen w-full bg-[#F8FAFC] text-[#0F172A]">
      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-heading">
            Web Development Services in <span className="text-[#FF6B35]">New York City</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            Enterprise-quality websites delivered in 7 days. Custom solutions for every NYC business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#pricing" className="bg-[#FF6B35] hover:bg-[#e55a28] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
              View Pricing
            </a>
            <a href="/us/services/web-design/new-york" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold transition-all border border-white/20">
              Back to NYC Home
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <WordPressDevelopment />
      <WebflowDevelopment />
      <FramerDevelopment />
      <CustomDevelopment />
      <ECommerceDevelopment />

      {/* Pricing */}
      <div id="pricing">
        <PricingSection onSelectPlan={openUsModal} />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and custom quote for your NYC business website.
          </p>
          <button
            onClick={openUsModal}
            className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a28] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg"
          >
            Get Free Quote
          </button>
        </div>
      </section>

    </main>
  );
}
