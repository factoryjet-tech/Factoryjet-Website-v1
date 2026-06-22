import React, { useRef } from 'react';
import { Container, Section } from '../ui/UIComponents';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';
import { PROCESS_STEPS } from '../../lib/constants';
import { CheckCircle, Clock } from 'lucide-react';

type ProcessStep = typeof PROCESS_STEPS[0];

const TimelineStep: React.FC<{ step: ProcessStep; index: number; isEven: boolean }> = ({ step, index, isEven }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={cn(
        "relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0",
        // Mobile: Always flex-col (default), Desktop: alternating row direction
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Mobile Alignment Spacer (to clear the left-side line) */}
      <div className="md:hidden absolute left-8 w-[3px] h-full" />

      {/* --- CONTENT CARD --- */}
      <div className={cn(
        "w-full md:w-[calc(50%-60px)] pl-20 md:pl-0",
        // Desktop: Align text based on even/odd
        isEven ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
      )}>
        <div className={cn(
           "relative bg-white rounded-2xl p-8 md:p-9 border-[2px] border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)] group",
           isEven ? "md:mr-auto" : "md:ml-auto"
        )}>
           {/* Connector Dotted Line (Desktop) */}
           <div className={cn(
              "hidden md:block absolute top-1/2 -translate-y-1/2 w-[60px] border-t-[2px] border-dotted border-[#0052CC]/40 z-0",
              isEven ? "-right-[62px]" : "-left-[62px]"
           )} />
           
           {/* Connector Line (Mobile) */}
           <div className="md:hidden absolute top-12 -left-[50px] w-[50px] border-t-[2px] border-dotted border-[#0052CC]/40 z-0" />

           {/* Step Number Badge */}
           <div className={cn(
             "absolute -top-5 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm border border-white",
             // Mobile: Left aligned; Desktop: Alternating
             isEven 
               ? "bg-[#E6F0FF] text-[#0052CC] right-auto left-8 md:left-auto md:right-8" 
               : "bg-[#E6F0FF] text-[#0052CC] left-8"
           )}>
              {index + 1}
           </div>

           <div className="mt-4">
              {/* Duration Badge */}
              <div className={cn(
                "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4 bg-[#10B981]/10 text-[#10B981]",
                isEven ? "md:ml-auto" : ""
              )}>
                 <Clock className="w-3.5 h-3.5" />
                 {step.duration}
              </div>

              <h3 className="text-[22px] font-bold text-[#0F172A] mb-3">{step.title}</h3>
              <p className="text-[16px] text-slate-500 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Deliverables */}
              <div className={cn("text-left", isEven && "md:text-right")}>
                 <p className="text-[14px] font-bold text-[#FF6B35] uppercase tracking-wide mb-3">Deliverables:</p>
                 <ul className={cn(
                   "flex flex-col gap-2",
                   // Mobile: align start; Desktop: alternating
                   isEven ? "items-start md:items-end" : "items-start"
                 )}>
                    {step.deliverables.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-[14px] text-slate-600 font-medium text-left md:text-inherit">
                        {/* Desktop Even Layout: Text then Icon */}
                        {isEven && <span className="hidden md:block">{item}</span>}
                        
                        <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                        
                        {/* Mobile & Odd Layout: Icon then Text */}
                        <span className={isEven ? "md:hidden" : ""}>{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </div>

      {/* --- TIMELINE NODE --- */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
        <motion.div 
           whileInView={{ scale: [1, 1.15, 1.1] }}
           viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
           transition={{ duration: 0.5 }}
           className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-full border-[4px] md:border-[6px] border-[#0052CC] shadow-[0_8px_24px_rgba(0,82,204,0.2)] flex items-center justify-center relative z-20"
        >
           <step.icon className="w-6 h-6 md:w-9 md:h-9 text-[#0052CC]" strokeWidth={1.5} />
           
           {/* Active Pulse Ring */}
           <motion.div 
             initial={{ opacity: 0, scale: 1 }}
             whileInView={{ opacity: [0, 0.5, 0], scale: [1, 1.5, 1.8] }}
             viewport={{ once: true }}
             transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
             className="absolute inset-0 rounded-full bg-[#0052CC]/30 -z-10"
           />
        </motion.div>
      </div>

      {/* --- EMPTY SPACER FOR ALTERNATING LAYOUT --- */}
      <div className="hidden md:block w-[calc(50%-60px)]" />
      
    </motion.div>
  );
};

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="process" className="bg-white relative py-32 overflow-hidden">
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
                backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }} 
        />
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0052CC]/[0.03] rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF6B35]/[0.03] rounded-full blur-[60px]" />
      </div>

      <Container className="relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FF6B35] font-semibold text-[13px] tracking-[0.12em] uppercase mb-4">
              Our Process
            </p>
            <h2 className="text-4xl md:text-[48px] font-bold text-[#0F172A] mb-5 tracking-tight leading-[1.1]">
              From Concept to Launch in 30 Days
            </h2>
            <p className="text-[20px] text-slate-500 font-normal max-w-[700px] mx-auto leading-relaxed">
              Our AI-native workflow delivers world-class sites faster than traditional agencies.
            </p>
          </motion.div>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[3px] bg-slate-100 md:-translate-x-1/2 rounded-full overflow-hidden">
             <motion.div 
               style={{ scaleY: scaleY, originY: 0 }}
               className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0052CC] to-[#0052CC]/20"
             />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <TimelineStep 
                  key={step.id} 
                  step={step} 
                  index={idx} 
                  isEven={isEven} 
                />
              );
            })}
          </div>
        </div>

      </Container>
    </Section>
  );
}