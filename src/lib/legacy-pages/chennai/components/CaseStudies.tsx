import React from 'react';
import { CASE_STUDIES } from '../constant';
import GlassCard from './GlassCard';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center text-jet-navy">Chennai Success Stories</h2>   
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <GlassCard key={idx} className="overflow-hidden flex flex-col h-full">
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <span className="text-jet-orange text-sm font-bold uppercase tracking-wide">{study.category}</span>
                   <h3 className="text-2xl font-bold font-heading text-jet-navy mt-2 leading-tight">{study.title}</h3>
                 </div>
               </div>
               
               <div className="mb-8 space-y-3 flex-grow">
                 <p className="text-jet-slate text-sm leading-relaxed"><strong className="text-jet-navy block mb-1">Challenge:</strong> {study.challenge}</p>
                 <p className="text-jet-slate text-sm leading-relaxed"><strong className="text-jet-navy block mb-1">Solution:</strong> {study.solution}</p>
               </div>

               <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                 {study.metrics.map((metric, mIdx) => (
                   <div key={mIdx} className="text-center">
                     <span className="block text-jet-green font-bold text-lg md:text-xl">{metric.value}</span>
                     <span className="block text-slate-500 text-[10px] md:text-xs uppercase font-medium mt-1">{metric.label}</span>
                   </div>
                 ))}
               </div>

               <div className="flex justify-between items-center border-t border-slate-100 pt-6 mt-auto">
                 <p className="text-sm text-slate-500 italic font-medium pr-4">"{study.quote}"</p>
                 <button className="text-jet-blue text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">
                   View Case <ArrowRight size={16} />
                 </button>
               </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;