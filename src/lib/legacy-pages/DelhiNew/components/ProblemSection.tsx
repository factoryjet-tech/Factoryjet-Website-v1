import React from 'react';
import { PROBLEMS } from '../data.constants';

const ProblemSection: React.FC = () => (
  <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
          The Digital Challenge Facing Delhi NCR Businesses
        </h2>
        <p className="text-base lg:text-lg text-slate">
          Why 55% of Delhi NCR Businesses Are Losing Crores to Competitors with Better Websites
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PROBLEMS.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group flex flex-col md:block"
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
              <item.icon className="h-6 w-6 lg:h-7 lg:w-7 text-red-500" />
            </div>
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-navy mb-2 lg:mb-3">{item.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
