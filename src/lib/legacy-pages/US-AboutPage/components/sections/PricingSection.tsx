import React from 'react';
import { Container, Section } from '../ui/UIComponents';
import { PRICING_TIERS, ADD_ONS } from '../../lib/constants';
import { Check, ShieldCheck, ArrowRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface PricingSectionProps {
  onCtaClick?: () => void;
}

export default function PricingSection({ onCtaClick }: PricingSectionProps) {
  return (
    <Section id="pricing" className="bg-gradient-to-b from-[#F8FAFC] to-white relative py-32 overflow-hidden">
      <Container className="relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-[#10B981] font-semibold text-[13px] tracking-[0.12em] uppercase mb-3"
           >
             Transparent Pricing
           </motion.p>
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-[48px] font-bold text-[#0F172A] mb-4 tracking-tight leading-tight"
           >
             Simple, Honest Pricing. No Hidden Fees.
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-[#334155] text-[20px] font-normal"
           >
             Choose the package that fits your needs. Upgrade anytime.
           </motion.p>
        </div>

        {/* --- PRICING CARDS --- */}
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto mb-20 items-stretch">
           {PRICING_TIERS.map((tier, idx) => {
             const isPopular = tier.popular;
             
             return (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 40, scale: 0.95 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ 
                    delay: idx * 0.15, 
                    ease: [0.34, 1.56, 0.64, 1], 
                    duration: 0.6 
                 }}
                 className={cn(
                   "relative flex flex-col rounded-[20px] transition-all duration-300",
                   isPopular 
                     ? "bg-gradient-to-b from-[#0052CC] to-[#0042A3] text-white p-10 md:p-12 shadow-[0_12px_40px_rgba(0,82,204,0.3),0_0_0_1px_rgba(255,255,255,0.1)] scale-100 md:scale-105 z-10 border-2 border-white/20"
                     : "bg-white text-[#0F172A] p-10 md:p-12 border-2 border-[#E2E8F0] shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:shadow-xl"
                 )}
               >
                 {isPopular && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white text-[12px] font-bold uppercase tracking-wider py-2 px-6 rounded-full shadow-[0_4px_12px_rgba(255,107,53,0.4)] whitespace-nowrap">
                     Most Popular
                   </div>
                 )}

                 {/* Tier Info */}
                 <div className="mb-6">
                   <h3 className={cn(
                     "text-[18px] font-bold uppercase tracking-[0.05em] mb-2",
                     isPopular ? "text-white" : "text-[#334155]"
                   )}>
                     {tier.name}
                   </h3>
                   <p className={cn(
                     "text-[14px] leading-relaxed",
                     isPopular ? "text-white/80" : "text-[#64748B]"
                   )}>
                     Ideal for: {tier.idealFor}
                   </p>
                 </div>

                 {/* Price */}
                 <div className="mb-8">
                   <p className={cn(
                     "text-[12px] font-bold uppercase tracking-wider mb-2 opacity-80",
                     isPopular ? "text-white" : "text-[#64748B]"
                   )}>
                     Starting at
                   </p>
                   
                   <div className="flex items-baseline flex-wrap gap-x-2">
                     <span className={cn(
                       "text-[40px] md:text-[44px] font-extrabold tracking-tight leading-none",
                       isPopular ? "text-white" : "text-[#0F172A]"
                     )}>
                       {typeof tier.price === 'number' ? (
                          <>
                            <span className="text-[24px] align-top mr-0.5">$</span>
                            {tier.price.toLocaleString()}
                          </>
                       ) : tier.price}
                     </span>
                     {typeof tier.price === 'number' && (
                       <span className={cn(
                         "text-[15px] font-medium whitespace-nowrap",
                         isPopular ? "text-white/80" : "text-[#334155]"
                       )}>
                         / project
                       </span>
                     )}
                   </div>
                 </div>

                 {/* Features */}
                 <div className="flex-grow mb-10">
                   <p className={cn(
                     "text-[14px] font-bold uppercase tracking-wide mb-5",
                     isPopular ? "text-white" : "text-[#0F172A]"
                   )}>
                     What's Included:
                   </p>
                   <ul className="space-y-3">
                     {tier.features.map((feature, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <div className={cn(
                           "mt-1 w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0",
                           isPopular ? "bg-white text-[#0052CC]" : "bg-[#10B981] text-white"
                         )}>
                           <Check className="w-3 h-3 stroke-[3px]" />
                         </div>
                         <span className={cn(
                           "text-[15px] leading-[1.5]",
                           isPopular ? "text-white/90" : "text-[#334155]"
                         )}>
                           {feature}
                         </span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 {/* Actions */}
                 <div className="mt-auto">
                   <button
                     onClick={onCtaClick}
                     className={cn(
                       "w-full py-4 px-6 rounded-[10px] text-[16px] font-bold transition-all duration-300 flex items-center justify-center gap-2 group",
                       isPopular 
                         ? "bg-white text-[#0052CC] hover:bg-[#10B981] hover:text-white shadow-lg"
                         : "bg-[#0052CC] text-white hover:bg-[#0042A3] hover:-translate-y-0.5 hover:shadow-lg"
                     )}
                   >
                     {isPopular ? "Start Professional" : "Get Started"} 
                     <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                   </button>
                   
                   <button className={cn(
                     "w-full mt-4 text-[14px] font-medium transition-colors hover:underline decoration-2 underline-offset-4 opacity-80 hover:opacity-100",
                     isPopular ? "text-white" : "text-[#0052CC]"
                   )}>
                     View full features
                   </button>
                 </div>
               </motion.div>
             );
           })}
        </div>

        {/* --- MONEY-BACK GUARANTEE --- */}
        <div className="flex justify-center mb-16">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="inline-flex items-center gap-3 bg-[#10B981]/10 px-8 py-3 rounded-full border border-[#10B981]/20"
            >
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
              <span className="text-[#10B981] font-bold text-[15px]">30-Day Money-Back Guarantee</span>
           </motion.div>
        </div>

        {/* --- ADD-ONS --- */}
        <div className="max-w-4xl mx-auto border-t border-slate-200 pt-16">
           <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#0F172A]">Additional Services</h3>
           </div>
           <div className="grid md:grid-cols-3 gap-6">
              {ADD_ONS.map((addon, idx) => (
                <motion.div 
                    key={idx} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (idx * 0.1) }}
                    className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm text-center hover:border-blue-200 transition-colors"
                >
                   <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-5 h-5" />
                   </div>
                   <h4 className="font-bold text-[#0F172A] mb-2">{addon.name}</h4>
                   <p className="text-slate-500 font-medium">{addon.price}</p>
                </motion.div>
              ))}
           </div>
        </div>

      </Container>
    </Section>
  );
}