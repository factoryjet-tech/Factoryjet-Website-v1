'use client';

import React from "react";
import { Target, Users, CheckCircle2 } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white overflow-hidden relative"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-10 md:-mr-20 -mt-10 md:-mt-20 w-48 md:w-96 h-48 md:h-96 bg-gray-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-10 md:-ml-20 -mb-10 md:-mb-20 w-36 md:w-72 h-36 md:h-72 bg-jet-blue/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column: Title + Image + AI-Native text stacked vertically */}
          <div className="space-y-6 md:space-y-8">
            {/* TITLE SECTION - Above Image */}
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1 rounded-full bg-jet-blue/5 border border-jet-blue/10 text-jet-blue font-semibold text-[10px] md:text-xs uppercase tracking-wider mb-4 md:mb-6">
                WHO WE ARE
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl lg:mt-8 font-display font-bold text-jet-navy mb-3 md:mb-4 leading-tight">
                About FactoryJet - Web Design & E-Commerce Development Company
                for SMBs
              </h2>
              <h3 className="text-lg md:text-2xl font-display font-semibold text-jet-slate">
                Helping small and medium businesses grow online across India
              </h3>
            </div>

            {/* IMAGE SECTION - Below Title */}
            <div className="relative">
              {/* Dot Pattern Decoration */}
              <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 z-0 opacity-20 hidden sm:block">
                <svg
                  width="100"
                  height="100"
                  fill="none"
                  viewBox="0 0 100 100"
                  dangerouslySetInnerHTML={{
                    __html: `<pattern id="dot-pattern-about" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="#0052CC" /></pattern><rect width="100" height="100" fill="url(#dot-pattern-about)" />`,
                  }}
                />
              </div>

              <div className="relative z-10">
                {/* Floating Card: SMB Focus - Above Image */}
                <div className="absolute -top-3 -left-2 md:-top-6 md:-left-6 bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl border border-gray-100 z-20 hidden sm:block">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-jet-blue text-white flex items-center justify-center font-bold">
                      <Users size={14} className="md:w-[18px] md:h-[18px]" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider">
                        Focus
                      </p>
                      <p className="text-xs md:text-sm font-bold text-jet-navy">
                        SMB Specialists
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Image Container */}
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl shadow-blue-900/10 border border-gray-100 bg-white p-1">
                  <div className="rounded-lg md:rounded-xl overflow-hidden relative aspect-[3/2]">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=648&q=75"
                      srcSet="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=75 400w, https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=648&q=75 648w, https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=75 800w"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt="Indian professional team collaborating"
                      width={648}
                      height={432}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Floating Card: Mission - Below Image */}
                <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-6 bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-lg md:shadow-xl border border-gray-100 max-w-[200px] md:max-w-[260px] animate-fade-in-up z-20">
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="bg-jetOrange/10 p-2 md:p-3 rounded-lg text-jetOrange shrink-0">
                      <Target size={18} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-jet-navy text-xs md:text-sm mb-0.5 md:mb-1">
                        Our Mission
                      </p>
                      <p className="text-[10px] md:text-xs text-jet-slate leading-relaxed">
                        World-class websites for every business, without
                        breaking the bank.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-NATIVE TEXT - Below Image on Left */}
            <div className="pt-8 md:pt-12">
              <p className="text-base md:text-lg leading-relaxed font-medium text-jet-navy">
                FactoryJet is an India-based AI-Native Web Design and E-Commerce
                Development Services Company specializing in affordable,
                high-performance digital solutions for SMEs.
              </p>
            </div>
          </div>

          {/* Right Column: Description content - Aligned to image level */}
          <div className="lg:mt-20">
            {/* Detailed descriptions */}
            <div className="space-y-4 md:space-y-5 text-sm md:text-base text-jet-slate mb-6 md:mb-8">
              <p className="leading-relaxed">
                FactoryJet is a specialized web design and e-commerce
                development company helping small and medium-sized businesses
                (SMBs) build high-performing websites and online stores without
                enterprise-level pricing.
              </p>
              <p className="leading-relaxed">
                We design and develop conversion-focused business websites,
                Shopify and WooCommerce e-commerce stores, and scalable digital
                platforms for companies across India and emerging global
                markets.
              </p>
              <p className="leading-relaxed">
                Unlike large agencies built for enterprise clients, FactoryJet
                is purpose-built for SMBs. Our approach combines modern design,
                SEO-ready architecture, mobile-first development, and fast
                delivery so businesses can launch faster, rank better, and
                convert more customers online.
              </p>
              <p className="leading-relaxed">
                Our core belief is simple: every business deserves a world-class
                website and e-commerce experience that drives measurable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                "Custom Website Design & Development on WordPress, Webflow, and Framer",
                "E-Commerce Store Development with Shopify and WooCommerce",
                "Mobile-First & Conversion-Focused UX/UI Design",
                "7-Day Website Delivery Guarantee for select projects",
                "SEO-Ready, AI-Optimized Website Architecture",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="text-jetGreen shrink-0 w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium text-jet-navy">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 md:pt-6 border-t border-gray-100 flex gap-8 md:gap-12">
              <div>
                <span className="block text-2xl md:text-4xl font-display font-bold text-jet-blue mb-0.5 md:mb-1">
                  500+
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500">
                  SMBs Empowered
                </span>
              </div>
              <div>
                <span className="block text-2xl md:text-4xl font-display font-bold text-jet-navy mb-0.5 md:mb-1">
                  ₹100Cr+
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500">
                  Value Generated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
