import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "500", suffix: "+", label: "Projects Delivered", color: "text-jetBlue" },
  { value: "98", suffix: "%", label: "Client Satisfaction", color: "text-jetGreen" },
  { value: "100", prefix: "₹", suffix: "Cr+", label: "Business Value Generated", color: "text-jetOrange" },
  { value: "25", suffix: "+", label: "Years Experience", color: "text-slate-900" },
];

const Stats = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`text-3xl md:text-5xl lg:text-6xl font-display font-black mb-1 md:mb-2 tracking-tight ${stat.color}`}>
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="text-slate-500 font-medium uppercase tracking-wide text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;