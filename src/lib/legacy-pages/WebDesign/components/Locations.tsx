import React from 'react';
import { LOCATIONS } from '../data';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export const Locations = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-jet-blue font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block">Locations</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6">
            Web Design Services Across Major Indian Cities
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 font-light">
            FactoryJet provides conversion-focused website design and development services across India's key business hubs:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {LOCATIONS.map((location, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={location.href}
                className="group flex items-center gap-3 p-4 md:p-5 rounded-xl md:rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-jet-blue/20 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white border border-slate-100 flex items-center justify-center group-hover:bg-jet-blue group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 text-slate-500 shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-sm md:text-base font-semibold text-slate-700 group-hover:text-jet-blue transition-colors">
                  {location.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
