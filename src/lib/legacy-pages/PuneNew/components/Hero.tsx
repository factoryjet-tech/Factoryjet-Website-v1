import React from 'react';
import { Check, MessageSquare } from 'lucide-react';
import LeadFormInline from '@/components/LeadFormInline';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-30 lg:pb-32 overflow-hidden bg-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F5FF] via-white to-white z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-jet-blue/5 skew-x-12 transform origin-top-right z-0 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="contents lg:block lg:col-span-7">
          <div className="order-1 flex flex-col items-start w-full">
            <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-jet-blue/10 border border-jet-blue/20 text-jet-blue text-xs md:text-sm font-semibold mb-4 md:mb-6">
              #1 Website Design Company in Pune | 500+ Business Websites Delivered
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold leading-tight mb-4 md:mb-6 text-jet-navy">
              Website Design Company in Pune
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-jet-slate mb-6 md:mb-8 font-light">
              Professional Website Development & E-Commerce Solutions Starting ₹15,000 — Transform Your Business Online
            </h2>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-6 md:mb-8 text-xs md:text-sm font-medium text-jet-slate w-full">
              <div className="flex items-center gap-2"><Check className="text-jet-green w-4 h-4 md:w-5 md:h-5" /> 500+ Business Websites</div>
              <div className="flex items-center gap-2"><Check className="text-jet-green w-4 h-4 md:w-5 md:h-5" /> 7-Day Delivery Guarantee</div>
              <div className="flex items-center gap-2"><Check className="text-jet-green w-4 h-4 md:w-5 md:h-5" /> 4.9★ Google Rating</div>
              <div className="flex items-center gap-2"><Check className="text-jet-green w-4 h-4 md:w-5 md:h-5" /> Mobile Responsive Standard</div>
            </div>

            <div className="flex flex-col xs:flex-row gap-3 md:gap-4 w-full md:w-auto">
              <a href="#contact" className="bg-jet-orange hover:bg-orange-600 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-orange-500/30 text-center w-full md:w-auto">
                Get Started →
              </a>
              <a href="https://wa.me/919699977699" className="bg-white border border-jet-light text-jet-navy hover:bg-gray-50 px-6 py-3.5 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 shadow-sm w-full md:w-auto">
                <MessageSquare className="w-5 h-5" /> WhatsApp Now
              </a>
            </div>
          </div>

          <div className="order-3 lg:block w-full mt-8 lg:mt-8">
            <p className="text-jet-gray leading-relaxed text-sm md:text-base max-w-2xl">
              FactoryJet is a leading Website Design Company in Pune, specializing in professional business website design and development for companies across Maharashtra. With 25+ years of combined expertise as a trusted website development company in Pune, we help IT companies, startups, manufacturers, and businesses in Hinjewadi, Kharadi, Pimpri-Chinchwad, Chakan, and Talegaon establish a powerful online presence that generates leads and drives sustainable growth.
            </p>
          </div>
        </div>

        <div className="order-2 lg:col-span-5 w-full" id="contact">
          <LeadFormInline
            region="in"
            source="pune_hero"
            heading="Get a free consultation"
            subheading="Custom proposal in 2 hours — just your name and email."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
