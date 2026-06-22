import React from 'react';
import GlassCard from './GlassCard';
import { SERVICES } from '../constant';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-jet-navy">
            Website Design & Development Services
          </h2>
          <p className="text-jet-slate max-w-2xl mx-auto">
            From startup landing pages to enterprise e-commerce platforms, FactoryJet offers comprehensive solutions tailored to every business need and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(350px,auto)]">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.colSpan ? `lg:col-span-${service.colSpan}` : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className={`h-full flex flex-col justify-between group`}>
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl text-jet-blue group-hover:bg-jet-blue group-hover:text-white transition-colors duration-300">
                      <service.icon size={28} />
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-jet-slate lowercase font-medium leading-none mb-1">starting at</span>
                      <span className="text-jet-orange font-bold text-xl leading-none">{service.price}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 font-heading text-jet-navy">{service.title}</h3>
                  <p className="text-jet-slate text-sm mb-6 min-h-[48px] leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-jet-gray font-medium">
                        <span className="w-2 h-2 bg-jet-green rounded-full mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-3 border border-slate-200 text-jet-blue rounded-lg hover:bg-jet-blue hover:text-white transition-all duration-300 font-bold text-sm">
                  {service.ctaText}
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;