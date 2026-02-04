import React from 'react';
import { Container, Section, Badge } from '../ui/UIComponents';
import { CASE_STUDIES } from '../../lib/constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import LazyImage from '../ui/LazyImage';

export default function CaseStudiesSection() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <Section id="case-studies" className="bg-[#FAFBFC] relative overflow-hidden py-24 lg:py-32">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFBFC] to-white" />
        <motion.div 
           style={{ y: yParallax }}
           className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] mix-blend-multiply opacity-60" 
        />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px] mix-blend-multiply opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 mix-blend-overlay" />
      </div>

      <Container className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-6">Real Results</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111] mb-6 tracking-tight leading-[1.1]">
              Real Results for <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                US Businesses
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-24">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image / Visual Side */}
                <div className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden group">
                   <div className="absolute inset-0 bg-slate-900/10 z-10" />
                   
                   <LazyImage 
                      src={study.image} 
                      alt={study.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      containerClassName="absolute inset-0 w-full h-full"
                   />

                   <div className="absolute top-8 left-8 z-20">
                      <span className="bg-white/90 backdrop-blur text-navy font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                        {study.industry}
                      </span>
                   </div>
                   <div className="absolute bottom-8 left-8 right-8 z-20 bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                      <Quote className="w-8 h-8 text-white/50 mb-3" />
                      <p className="text-white font-medium italic mb-4">"{study.testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                         <div className="text-sm">
                            <div className="font-bold text-white">{study.testimonial.author}</div>
                            <div className="text-slate-300">{study.testimonial.role}</div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                   <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-4">
                      <span>Timeline: <span className="text-jetBlue">{study.timeline}</span></span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span>Case Study {idx + 1}</span>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-navy mb-6">{study.title}</h3>
                   
                   <div className="space-y-6 mb-8">
                      <div>
                         <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Challenge</h4>
                         <p className="text-slate-700">{study.challenge}</p>
                      </div>
                      <div>
                         <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Solution</h4>
                         <p className="text-slate-700">{study.solution}</p>
                      </div>
                   </div>

                   <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-jetGreen-600 mb-4 flex items-center gap-2">
                         <CheckCircle className="w-4 h-4" /> Key Results
                      </h4>
                      <ul className="space-y-3">
                         {study.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-800 font-medium">
                               <ArrowRight className="w-4 h-4 text-jetBlue mt-1 shrink-0" />
                               {result}
                            </li>
                         ))}
                      </ul>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}