import React from 'react';
import { motion } from 'framer-motion';
import { VALUES } from '../data.constants';
import { Target, Lightbulb, Heart, ShieldCheck, Zap, Users } from 'lucide-react';

const icons = [ShieldCheck, Users, Zap, Target, Lightbulb, Heart];

const MissionBento = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-jetBlue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-jetOrange font-bold uppercase tracking-wider text-xs md:text-sm mb-2 md:mb-3">Our Core Purpose</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">Mission, Vision & Values</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:gap-6">

          {/* Mission - Large Square */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-jetBlue to-blue-900 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between border border-white/10 shadow-xl"
          >
            <div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 backdrop-blur-sm">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h4>
              <p className="text-blue-100 text-sm md:text-base lg:text-lg leading-relaxed">
                To empower small and medium businesses with world-class digital solutions that accelerate growth, improve efficiency, and build lasting competitive advantages—all at prices that make sense for growing companies.
              </p>
            </div>
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
              <p className="font-semibold text-sm md:text-base text-white/80">Leveling the playing field for every business.</p>
            </div>
          </motion.div>

          {/* Vision - Wide Rectangle */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 bg-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-jetOrange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-jetOrange/20 rounded-lg flex items-center justify-center">
                   <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-jetOrange" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold">Our Vision</h4>
              </div>
              <p className="text-slate-300 text-sm md:text-base">
                To become the most trusted digital transformation partner for <span className="text-white font-bold">10,000+ SMBs</span> by 2030. We envision a future where AI and automation are accessible to all.
              </p>
            </div>
          </motion.div>

          {/* Values - Grid of smaller cards */}
          {VALUES.map((value, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 hover:bg-slate-800 transition-colors"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-700 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-jetGreen" />
                </div>
                <h5 className="font-bold text-base md:text-lg mb-1 md:mb-2">{value.title}</h5>
                <ul className="space-y-1">
                  {value.items.slice(0, 1).map((item, i) => (
                    <li key={i} className="text-xs md:text-sm text-slate-400">{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default MissionBento;