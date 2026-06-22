import React, { useState, useEffect } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Best decision we made. The website paid for itself in month one.",
    author: "Brooklyn E-Commerce Brand"
  },
  {
    quote: "Finally, an agency that delivers what they promise, when they promise it.",
    author: "Manhattan Financial Advisory"
  },
  {
    quote: "60% cheaper than NYC agencies, same quality. No-brainer.",
    author: "Queens Real Estate Team"
  },
  {
    quote: "The AI-native approach is real. They delivered in 8 days what another agency quoted 12 weeks for.",
    author: "SoHo Tech Startup"
  }
];

const FinalCTA: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    "AI-Native Development - 60-70% lower costs than traditional NYC agencies",
    "Proven Results - 500+ websites delivered, 98% client satisfaction",
    "Fast Delivery - Launch in 7-28 days (not months)",
    "North American Presence - Local support, global execution",
    "Transparent Pricing - No hidden costs, clear scope",
    "Complete Ownership - You own everything",
    "Ongoing Partnership - AMC options from $299/month",
    "Multi-Platform Expertise - WordPress, Webflow, Framer, Custom",
    "Full-Service - Design, development, SEO, hosting, maintenance",
    "Risk-Free - 50/50 payment, support included"
  ];

  return (
    <section className="bg-white py-20 px-6 sm:px-8 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight font-heading">
              Stop Losing Business to Competitors with Better Websites
            </h2>
            <p className="text-lg text-slate mb-8">
              Every day without a professional website costs you:
            </p>
            <ul className="space-y-3 mb-8 text-slate font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-jetOrange rounded-full"></span>Qualified leads choosing competitors</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-jetOrange rounded-full"></span>Sales from invisible search presence</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-jetOrange rounded-full"></span>Credibility with customers judging by digital first impression</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-jetOrange rounded-full"></span>Revenue from 24/7 online business opportunities</li>
            </ul>

            <h3 className="text-xl font-bold text-navy mb-6 font-heading">Why Choose FactoryJet</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-slate">
                  <Check className="w-5 h-5 text-jetGreen flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-lightGray rounded-3xl p-8 md:p-12 shadow-inner">
            <h3 className="text-2xl font-bold text-navy mb-8 text-center font-heading">Three Ways to Get Started</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] border-2 border-jetOrange relative transform hover:scale-[1.02] hover:shadow-[0_8px_12px_rgba(0,82,204,0.15)] transition-all">
                <div className="absolute top-0 right-0 bg-jetOrange text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  RECOMMENDED
                </div>
                <h4 className="font-bold text-lg text-navy flex items-center gap-2 font-heading">
                    <Star className="w-5 h-5 text-jetOrange fill-current"/> Option 1: BOOK FREE STRATEGY CALL
                </h4>
                <p className="text-slate text-sm mt-1 mb-4">30-minute consultation. No obligation. Expert advice.</p>
                <button className="w-full bg-jetBlue text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                  SCHEDULE NOW
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] border border-gray-200 hover:border-jetBlue transition-colors">
                <h4 className="font-bold text-lg text-navy font-heading">Option 2: GET INSTANT QUOTE</h4>
                <p className="text-slate text-sm mt-1 mb-4">Fill out quick form. Receive detailed quote within 24 hours.</p>
                <button className="w-full bg-white text-jetBlue border-2 border-jetBlue font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  REQUEST QUOTE
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] border border-gray-200 hover:border-navy transition-colors">
                <h4 className="font-bold text-lg text-navy font-heading">Option 3: VIEW OUR WORK</h4>
                <p className="text-slate text-sm mt-1 mb-4">See real projects and results.</p>
                <button className="w-full text-navy font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors group">
                  VIEW PORTFOLIO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Rotator */}
        <div className="max-w-4xl mx-auto text-center relative h-40 flex items-center justify-center">
            {testimonials.map((t, idx) => (
                 <div 
                    key={idx}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
                        idx === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                 >
                     <p className="text-2xl md:text-3xl font-serif italic text-navy mb-4 font-heading">
                        "{t.quote}"
                     </p>
                     <p className="font-bold text-jetOrange uppercase tracking-wide text-sm">
                        — {t.author}
                     </p>
                 </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;