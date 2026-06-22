import React from 'react';
import { SOLUTIONS } from '../data.constants';

const SolutionSection: React.FC = () => (
  <section className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
          The FactoryJet Solution
        </h2>
        <p className="text-base lg:text-lg text-slate">
          How We Transform Delhi NCR Businesses Into Digital Leaders
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SOLUTIONS.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-t-4 border-jet-blue hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
              <item.icon className="h-6 w-6 lg:h-7 lg:w-7 text-jet-blue" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-navy mb-2 lg:mb-3">{item.title}</h3>
            <p className="text-slate text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
