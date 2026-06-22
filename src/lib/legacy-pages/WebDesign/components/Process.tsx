
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data';

export const Process = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
       {/* Background noise */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6">Our Process</h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 font-light">From brief to live site in 8 structured phases.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Gradient Line */}
          <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-slate-200 -translate-x-1/2 rounded-full overflow-hidden">
             <motion.div
               initial={{ height: 0 }}
               whileInView={{ height: '100%' }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="w-full bg-gradient-to-b from-jet-blue via-purple-500 to-jet-orange"
             />
          </div>
          
          <div className="space-y-12 md:space-y-16">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className="flex-1 md:w-1/2 pl-10 md:pl-0 md:px-12 lg:px-16">
                  <div className={`
                    group p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden
                    ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}
                  `}>
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className={`flex items-center gap-2 md:gap-3 mb-3 md:mb-4 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <span className="px-2.5 md:px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-wider group-hover:bg-jet-blue group-hover:text-white transition-colors">
                          {step.phase}
                        </span>
                        <span className="text-xs md:text-sm font-mono text-jet-orange font-bold">
                          {step.time}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2 md:mb-3">{step.title}</h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border-3 md:border-4 border-slate-200 z-10 mt-6 md:mt-8 lg:mt-0 flex items-center justify-center shadow-lg">
                   <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-jet-blue"></div>
                </div>

                {/* Empty Space */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
