import React from 'react';
import { REASONS } from '../data.constants';
import { Check } from 'lucide-react';

const WhyChoose = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-jetBlue font-semibold uppercase tracking-wider text-xs md:text-sm mb-2 md:mb-3">Our Advantage</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6">Why Clients Choose FactoryJet</h3>
        </div>

        {/* Changed grid to max-width-6xl and fixed cols to 2 on medium+ screens for a 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {REASONS.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{reason.title}</h4>
              <p className="text-slate-500 text-xs md:text-sm mb-4 md:mb-6 italic">{reason.subtitle}</p>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {reason.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600 text-xs md:text-sm">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-jetGreen mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {reason.comparison && (
                <div className="bg-slate-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-slate-100">
                  <span className="text-[10px] md:text-xs font-bold text-jetBlue uppercase tracking-wide block mb-2">
                    {reason.comparison.label}
                  </span>
                  <ul className="space-y-1.5 md:space-y-2">
                     {reason.comparison.items.map((comp, idx) => (
                        <li key={idx} className="text-[11px] md:text-xs text-slate-700 leading-relaxed font-medium">
                          {idx === 0 ? <span className="text-red-500/80">✕ </span> : <span className="text-jetGreen">✓ </span>}
                          {comp}
                        </li>
                     ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;