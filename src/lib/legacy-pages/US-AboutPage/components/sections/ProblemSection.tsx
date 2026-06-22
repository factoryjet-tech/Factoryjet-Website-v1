
import React from 'react';
import { Container, Section } from '../ui/UIComponents';
import { PROBLEMS } from '../../lib/constants';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const cardConfig = [
  {
    // WordPress
    gradient: "bg-gradient-to-br from-red-600 to-red-500",
    shadow: "shadow-red-500/30",
    border: "from-red-600 to-red-500",
  },
  {
    // Custom Code
    gradient: "bg-gradient-to-br from-amber-500 to-amber-400",
    shadow: "shadow-amber-500/30",
    border: "from-amber-500 to-amber-400",
  },
  {
    // DIY Builders
    gradient: "bg-gradient-to-br from-indigo-500 to-violet-500",
    shadow: "shadow-indigo-500/30",
    border: "from-indigo-500 to-violet-500",
  }
];

export default function ProblemSection() {
  return (
    <Section className="bg-gradient-to-b from-white to-slate-50 relative py-20 lg:py-32 overflow-hidden">
       {/* Fine Noise Texture Overlay */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-multiply" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FF6B35] font-semibold text-sm tracking-[0.1em] uppercase mb-3">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight max-w-[800px] mx-auto">
              Why Traditional Web Development Fails US Businesses
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-normal max-w-[700px] mx-auto leading-relaxed px-4">
              The old way of building websites is slow, expensive, and restrictive. Stop choosing between performance and editability.
            </p>
          </motion.div>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PROBLEMS.map((problem, idx) => {
            const config = cardConfig[idx % cardConfig.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.15, 
                  duration: 0.5, 
                  ease: [0.34, 1.56, 0.64, 1] // Spring-like easing
                }}
                className="group relative bg-white rounded-[20px] p-8 md:p-10 transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  boxShadow: "0 2px 8px rgba(15,23,42,0.06), 0 0 0 1px rgba(15,23,42,0.04)"
                }}
              >
                 {/* Hover Border Effect */}
                 <div className={cn(
                    "absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-t-[20px]",
                    config.border
                 )} />

                 {/* Custom Hover Shadow via pseudo-element or class override */}
                 <div className="absolute inset-0 rounded-[20px] shadow-[0_12px_32px_rgba(15,23,42,0.12),0_0_0_1px_rgba(15,23,42,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon Container - Reduced size on mobile */}
                  <div className={cn(
                    "w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-6 shadow-lg",
                    config.gradient,
                    config.shadow
                  )}>
                    <problem.icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-[#0F172A] mb-6">
                    {problem.title}
                  </h3>
                  
                  {/* Feature List */}
                  <ul className="space-y-3 flex-grow">
                    {problem.points.map((point, i) => {
                      const isHighCost = point.includes("$50,000");
                      
                      return (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + (i * 0.08) }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-2 w-4 h-4 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                            <X className="w-3 h-3 text-[#DC2626]" strokeWidth={3} />
                          </div>
                          <span className={cn(
                            "text-slate-600 text-[15px] md:text-base leading-relaxed",
                            isHighCost && "text-[#FF6B35] font-bold md:text-lg"
                          )}>
                            {point}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center relative z-10">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-2 text-[#0052CC] font-semibold text-lg hover:text-blue-700 transition-colors"
          >
            <span>There's a Better Way</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5 group-hover:text-blue-700" />
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0052CC] transition-all duration-300 group-hover:w-full" />
          </button>
        </div>

      </Container>
    </Section>
  );
}
