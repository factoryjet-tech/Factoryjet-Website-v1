'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../data.types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "FactoryJet implemented a robust ERP that digitized our entire operation—from sourcing to finance. We improved efficiency by 70% and replaced Tally completely. Important reports are now just a click away.",
      author: "Bhoop Singh",
      role: "Operations Director",
      company: "GroFresh Agro Food Pvt. Ltd."
    },
    {
      quote: "Designed our website on WIX with powerful lead gen forms. The SEO and AI optimization is incredible—we've generated over 500 leads purely from organic traffic so far.",
      author: "Tejas Bramhbhatt",
      role: "Founder",
      company: "Fliying Pixel"
    },
    {
      quote: "They transformed our digital presence. Our Google rankings and GMB profile improved drastically, leading to a 300% increase in organic traffic.",
      author: "Rajkumar",
      role: "Founder",
      company: "Rukman Transport Pvt. Ltd."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-jet-navy mb-3 md:mb-4">
            Trusted by 500+ Businesses
          </h2>
          <p className="text-jet-slate text-sm md:text-base">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="mb-4 md:mb-6">
                <Quote className="text-jet-blue/20 fill-current w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-jet-slate italic mb-6 md:mb-8 flex-grow text-sm md:text-base">"{t.quote}"</p>
              <div className="flex items-center gap-3 md:gap-4">
                 <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-bold text-gray-500 shrink-0 text-sm md:text-base">
                   {t.author.charAt(0)}
                 </div>
                 <div>
                   <p className="font-bold text-jet-navy text-xs md:text-sm">{t.author}</p>
                   <p className="text-[10px] md:text-xs text-gray-500">{t.role}, {t.company}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-12 md:mt-20 bg-jet-blue rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white shadow-2xl shadow-blue-900/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center md:divide-x divide-blue-400/30">
            <div className="border-r border-blue-400/30 md:border-0">
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">500+</div>
              <div className="text-blue-100 text-xs md:text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">25+</div>
              <div className="text-blue-100 text-xs md:text-sm">Years Experience</div>
            </div>
            <div className="border-r border-blue-400/30 md:border-0">
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">98%</div>
              <div className="text-blue-100 text-xs md:text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">50+</div>
              <div className="text-blue-100 text-xs md:text-sm">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
