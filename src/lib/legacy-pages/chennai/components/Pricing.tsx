import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { PRICING_TABS } from '../constant';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'website' | 'ecommerce' | 'amc';

const PricingCard: React.FC<{ plan: any }> = ({ plan }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <GlassCard className={`relative flex flex-col h-full ${plan.isPopular ? 'border-jet-blue shadow-xl scale-105 z-10' : ''}`}>
            {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-jet-blue text-white text-xs px-4 py-1.5 rounded-full uppercase font-bold tracking-wider shadow-lg whitespace-nowrap">
                    {plan.popularTag}
                </div>
            )}
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-jet-navy mb-1 uppercase tracking-wider">{plan.name}</h3>
                <p className="text-xs text-jet-slate mb-4 font-semibold">{plan.tagline}</p>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] sm:text-xs font-semibold text-jet-orange uppercase tracking-wider mb-1">Starting At</span>
                    <div className="text-3xl font-bold text-jet-navy leading-none">
                        {plan.price}
                        <span className="text-xs font-normal text-jet-slate ml-1">{plan.suffix}</span>
                    </div>
                </div>
            </div>

            <button className={`w-full py-3 rounded-lg font-bold transition-all mb-6 ${plan.isPopular ? 'bg-jet-orange text-white hover:bg-orange-600 shadow-lg' : 'bg-white border border-jet-blue text-jet-blue hover:bg-blue-50'}`}>
                {plan.isPopular ? 'Get Started Now' : 'Select Plan'}
            </button>
            
            <div className="flex-grow">
                 <AnimatePresence initial={false}>
                    <motion.div 
                        initial="collapsed"
                        animate={expanded ? "expanded" : "collapsed"}
                        variants={{
                            collapsed: { height: "240px", overflow: "hidden", position: "relative" },
                            expanded: { height: "auto", overflow: "visible" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        {!expanded && (
                             <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
                        )}

                        {Object.entries(plan.sections).map(([sectionName, items]: [string, any], idx) => (
                            <div key={idx}>
                                <h4 className="text-[10px] font-bold text-jet-slate uppercase tracking-widest mb-3 bg-slate-50 p-1 pl-2 rounded">{sectionName}</h4>
                                <ul className="space-y-2 text-xs text-jet-slate">
                                    {items.map((feature: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check size={14} className="text-jet-blue shrink-0 mt-0.5" />
                                            <span className="leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                 </AnimatePresence>

                 <button 
                    onClick={() => setExpanded(!expanded)}
                    className="w-full mt-4 flex items-center justify-center gap-1 text-xs font-bold text-jet-blue hover:text-jet-blueDark transition-colors"
                 >
                    {expanded ? (
                        <>Show Less <ChevronUp size={14} /></>
                    ) : (
                        <>View Full Specs <ChevronDown size={14} /></>
                    )}
                 </button>
            </div>
        </GlassCard>
    );
};

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('website');

  return (
    <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-jet-navy mb-4">Transparent, <span className="text-jet-blue">Value-Driven Pricing</span></h2>
                <p className="text-jet-slate text-lg max-w-2xl mx-auto">Enterprise-grade technology stacks at SMB-friendly prices. No hidden fees, just pure engineering excellence.</p>
            </div>
            
            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="inline-flex bg-slate-100 p-1 rounded-full shadow-inner">
                    <button 
                        onClick={() => setActiveTab('website')}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'website' ? 'bg-white text-jet-blue shadow-sm' : 'text-slate-500 hover:text-jet-navy'}`}
                    >
                        Website Design
                    </button>
                    <button 
                        onClick={() => setActiveTab('ecommerce')}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'ecommerce' ? 'bg-jet-blue text-white shadow-sm' : 'text-slate-500 hover:text-jet-navy'}`}
                    >
                        E-Commerce
                    </button>
                    <button 
                        onClick={() => setActiveTab('amc')}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'amc' ? 'bg-white text-jet-blue shadow-sm' : 'text-slate-500 hover:text-jet-navy'}`}
                    >
                        AMC (Maintenance)
                    </button>
                </div>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
                {PRICING_TABS[activeTab].map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                ))}
            </div>

            <div className="text-center mt-12 text-xs text-slate-400">
               * All prices exclusive of GST (18%). Payment: 50% advance, 50% on completion. Additional pages quoted separately.
            </div>

            <div className="text-center mt-12">
               <h3 className="font-bold text-xl mb-4 text-jet-navy">Need a custom quote?</h3>
               <div className="flex justify-center gap-4">
                  <button className="bg-jet-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-jet-blueDark transition-colors shadow-lg shadow-jet-blue/20">Request Custom Quote</button>
                  <button className="bg-white border border-jet-blue text-jet-blue px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">Schedule Call</button>
               </div>
            </div>
        </div>
    </section>
  );
};

export default Pricing;