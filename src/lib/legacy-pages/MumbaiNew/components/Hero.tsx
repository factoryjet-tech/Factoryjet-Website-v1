import React from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';
import LeadFormInline from '@/components/LeadFormInline';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-hero-gradient pt-10 pb-16 md:pt-12 md:pb-20 px-4 md:px-8 overflow-hidden">
      {/* Background Effects - Optimized for Mobile */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Section: Headlines & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-12 md:mb-16">

          {/* Left Column: Headlines & CTA (Span 7) */}
          <div className="lg:col-span-7 text-white space-y-6 pt-4">

            {/* Eyebrow Text */}
            <div className="text-sm font-medium text-slate-300 tracking-wide uppercase">
              B2B Website Design Company in Mumbai — Industrial Web Solutions
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight tracking-tight text-white drop-shadow-lg">
              Get a Website That Brings Export Leads & Grows Wholesale Orders
            </h1>

            {/* Subheadline */}
            <h2 className="text-lg md:text-xl font-medium text-blue-100 leading-relaxed max-w-2xl">
              FactoryJet is a specialized website design company in Mumbai building industrial websites for manufacturers and factories. Mobile-responsive B2B websites with digital product catalogs — designed to convert visitors into buyers.
            </h2>

            {/* Price Badge */}
            <div className="inline-block">
              <span className="bg-secondary text-white text-base font-bold px-6 py-3 rounded-lg shadow-md border border-white/10">
                Starting ₹29,000 | Live in 7 Days
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
               {/* WhatsApp CTA */}
               <a
                 href="https://wa.me/919699977699?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20web%20design%20services"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto text-lg"
               >
                 <MessageCircle className="w-6 h-6" />
                 WhatsApp Us
               </a>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-blue-100 font-medium pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>500+ Businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Serving All Mumbai MMR</span>
              </div>
            </div>
          </div>

          {/* Right Column: Standard lead form (Span 5) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="quote-form">
            <LeadFormInline
              region="in"
              source="mumbai_hero"
              heading="Get a free consultation"
              subheading="Just your name and email — custom proposal within 2 hours."
            />
          </div>
        </div>

        {/* Hero Authority Content (Full Width below top section) */}
        <div className="bg-navy/40 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/5 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-blue-50/90 font-light leading-relaxed text-sm md:text-base text-justify">

            <div className="space-y-6">
              <p>
                <strong className="text-white font-semibold">FactoryJet is a trusted website design company in Mumbai with 25+ years of expertise.</strong> We specialize in manufacturer website design, B2B website development, and industrial web solutions for factories across Maharashtra's commercial capital.
              </p>
              <p>
                Looking for experienced <span className="text-white font-medium">website designers</span> who understand industrial and manufacturing businesses? Our <span className="text-white font-medium">web design agency</span> serves companies across major industrial zones including MIDC areas, suburbs, and port-linked manufacturing clusters. We are recognized as a leading website development company for B2B and manufacturing clients.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Our website development agency offers complete digital solutions: <span className="text-white font-medium">WordPress website development, ecommerce development, and Shopify store solutions</span>. As a full-service ecommerce design company, we build online stores that convert. Whether you need custom catalog systems or Shopify integration — we deliver.
              </p>
              <p>
                500+ manufacturing businesses trust us — from engineering workshops to chemical exporters to textile manufacturers. Professional, mobile-responsive, SEO-ready websites that generate export leads and grow wholesale orders.
              </p>

              {/* Internal Links for SEO */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
                 <a href="/case" className="text-accent font-bold hover:text-white transition-colors flex items-center gap-2 group">
                   View Case Studies <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                 </a>
                 <a href="/pricing" className="text-white font-bold hover:text-secondary transition-colors flex items-center gap-2 group">
                   Check Pricing <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                 </a>
              </div>
            </div>

          </div>

          {/* Bottom Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 pt-6 border-t border-white/10 text-xs font-semibold text-blue-200 tracking-wide uppercase">
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" /> 7-Day Delivery
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" /> SEO Optimized
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" /> Mobile Ready
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" /> B2B Specialist
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" /> Export Focused
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" /> No Hidden Cost
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
