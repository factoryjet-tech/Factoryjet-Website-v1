import React from 'react';
import { SOCIAL_PROOF_METRICS } from '../constant';

const SocialProof: React.FC = () => {
  return (
    <section className="py-8 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-bold font-heading text-jet-navy mb-2">Trusted by Leading Chennai & Tamil Nadu Businesses</h3>
        <p className="text-sm text-slate-500 mb-6 max-w-3xl mx-auto">
          Serving Chennai's diverse business ecosystem – from IT corridors on OMR to manufacturing hubs in Guindy, automobile companies in Ambattur to healthcare providers in Adyar
        </p>
        
        {/* Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 max-w-5xl mx-auto">
           {SOCIAL_PROOF_METRICS.map((item, i) => (
             <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-2xl font-bold text-jet-blue">{item.val}</span>
                <span className="text-xs text-slate-500 font-medium">{item.label}</span>
             </div>
           ))}
        </div>
        
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wide">
           <span>IT & Software</span> • <span>Automobile</span> • <span>Manufacturing</span> • <span>Healthcare</span> • <span>BFSI</span> • <span>Media & Entertainment</span> • <span>Retail & E-commerce</span> • <span>Education</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;