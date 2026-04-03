import React from 'react';
import { trackWhatsAppConversion } from '@/utils/gtm';

const FinalCTA: React.FC = () => (
  <section className="py-16 lg:py-24 bg-cta-gradient text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 lg:mb-6">
        Ready to Transform Your Delhi NCR Business Online?
      </h2>
      <p className="text-lg lg:text-xl text-orange-100 mb-8 lg:mb-10 max-w-2xl mx-auto">
        Join 500+ Successful Businesses Who Chose FactoryJet — Get Started in 24 Hours
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 lg:mb-10">
        <button
          onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-jet-orange-dark px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-lg lg:text-xl shadow-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1 w-full sm:w-auto min-h-[56px]"
        >
          Get Free Quote Today
        </button>
        <a
          href="tel:+919699977699"
          onClick={trackWhatsAppConversion}
          className="bg-transparent border-2 border-white text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-lg lg:text-xl hover:bg-white/10 transition-all w-full sm:w-auto min-h-[56px] flex items-center justify-center"
        >
          Call Now
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm font-medium text-orange-100">
        <span>✓ 500+ Websites Delivered</span>
        <span>✓ 4.9★ Google Rating</span>
        <span>✓ 7-Day Delivery</span>
        <span>✓ Starts at ₹29,999</span>
      </div>
    </div>
  </section>
);

export default FinalCTA;
