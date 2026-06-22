'use client';

import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick, trackContactClick } from '@/utils/gtm';

const CTA: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <section id="cta" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative rounded-2xl md:rounded-3xl overflow-hidden bg-jet-blue">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-jet-blue opacity-90" />
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-white/10 rounded-full blur-3xl -mr-10 md:-mr-20 -mt-10 md:-mt-20" />
        <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-jetOrange/20 rounded-full blur-3xl -ml-10 md:-ml-20 -mb-10 md:-mb-20" />

        <div className="relative z-10 py-10 md:py-16 px-5 md:px-8 lg:px-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6">
              Ready to build your <br className="hidden md:block"/><span className="text-jetOrange">digital success story?</span>
            </h2>
            <p className="text-blue-100 text-sm md:text-lg mb-6 md:mb-8 max-w-lg">
              Join 500+ businesses who trust FactoryJet. Whether you need a stunning website or a powerful store, we deliver in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button
                onClick={() => {
                  trackCTAClick('schedule_free_call', 'home_cta_section', 'primary');
                  openModal();
                }}
                className="bg-white text-jet-blue hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Schedule Free Call <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <a
                href="tel:+919699977699"
                onClick={() => trackContactClick('phone', '+919699977699', 'home_cta_section')}
                aria-label="Call us at +91 96999 77699"
                className="bg-blue-800/50 hover:bg-blue-800 text-white border border-blue-400/30 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" /> +91 96999 77699
              </a>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-jetOrange blur-[60px] opacity-40 rounded-full" />
             <div className="relative bg-white/10 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-white">
                    <p className="text-xs lg:text-sm uppercase tracking-widest opacity-70 mb-2">Guaranteed</p>
                    <p className="text-3xl lg:text-4xl font-bold mb-1">7 Days</p>
                    <p className="text-xs lg:text-sm">Delivery for Standard Sites</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
