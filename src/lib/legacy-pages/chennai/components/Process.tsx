import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { day: "Day 1", title: "Discovery & Planning", desc: "30-minute consultation. Business requirements gathering. Industry & competitor analysis. Sitemap and wireframe approval." },
  { day: "Day 2-3", title: "Design Phase", desc: "Custom UI/UX design creation. Chennai-specific elements integration. Mobile-responsive layouts. Client review and feedback." },
  { day: "Day 4-5", title: "Development", desc: "Full website development. CMS implementation. Form and integration setup. Speed optimization. Security configuration." },
  { day: "Day 6", title: "Testing & Optimization", desc: "Cross-browser testing. Mobile responsiveness check. SEO implementation. Performance optimization. Client preview." },
  { day: "Day 7", title: "Launch & Training", desc: "Domain and hosting setup. Website go-live. CMS training session. Analytics configuration. Handover documentation." },
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-6 text-jet-navy">Our 7-Day Website Delivery Process</h2>
        <p className="text-center text-jet-slate mb-16 max-w-2xl mx-auto">From first call to live website in just 7 days. Here's how FactoryJet delivers web design in Chennai faster than anyone else:</p>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative flex flex-col items-center text-center z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-jet-blue flex items-center justify-center border-4 border-white shadow-lg shadow-jet-blue/20 mb-6">
                  <span className="font-bold text-white text-xl">{index + 1}</span>
                </div>
                
                <h3 className="text-jet-orange font-bold mb-1 text-sm uppercase tracking-wider">{step.day}</h3>
                <h4 className="text-lg font-bold font-heading mb-2 text-jet-navy">{step.title}</h4>
                <div className="px-4 py-3 bg-white rounded-lg border border-slate-100 shadow-sm text-xs text-jet-slate leading-relaxed">
                  {step.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center bg-white p-6 rounded-xl border border-slate-200 max-w-3xl mx-auto">
           <h4 className="font-bold text-jet-navy mb-2">Post-Launch Support</h4>
           <p className="text-sm text-jet-slate">30-day free support period. Bug fixes and minor adjustments. Performance monitoring. SEO tracking setup. Optional AMC activation.</p>
           <div className="mt-6 flex justify-center gap-4">
              <button className="text-jet-blue font-bold">Start Today →</button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Process;