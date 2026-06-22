import React from 'react';
import { SERVICES } from '../data.constants';

const ServicesSection: React.FC = () => (
  <section id="services" className="py-16 lg:py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
          Website Design & Development Services
        </h2>
        <p className="text-base lg:text-lg text-slate">
          Comprehensive Web Solutions for Startups, SMBs, Enterprises & D2C Brands
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-jet-blue/10 rounded-lg flex items-center justify-center text-jet-blue flex-shrink-0">
                <service.icon size={24} />
              </div>
              <div className="text-right">
                <div className="font-bold text-jet-blue text-sm lg:text-base">{service.price}</div>
                <div className="text-xs text-gray-500">{service.timeline}</div>
              </div>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-navy mb-3">{service.title}</h3>
            <p className="text-slate text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="text-xs text-gray-600 flex items-center">
                  <div className="w-1.5 h-1.5 bg-jet-green rounded-full mr-2 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <span className="text-xs font-semibold text-gray-400 uppercase">Best For:</span>
              <p className="text-xs font-medium text-navy mt-1">{service.bestFor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
