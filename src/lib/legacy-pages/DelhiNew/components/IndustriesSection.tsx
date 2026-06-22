import React from 'react';
import { INDUSTRIES } from '../data.constants';

const IndustriesSection: React.FC = () => (
  <section className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
          Industries We Serve in Delhi NCR
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
        {INDUSTRIES.map((ind, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all border border-gray-100 group"
          >
            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <ind.icon className="text-jet-blue" size={24} />
            </div>
            <h3 className="font-bold text-navy mb-2">{ind.title}</h3>
            <p className="text-xs text-slate mb-3">{ind.description}</p>
            <div className="text-xs font-semibold text-jet-orange">{ind.stats}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
