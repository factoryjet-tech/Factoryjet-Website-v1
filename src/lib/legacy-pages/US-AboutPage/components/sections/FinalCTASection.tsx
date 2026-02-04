import React from 'react';
import { Container, Section, Button } from '../ui/UIComponents';
import { CheckCircle, Rocket, Layers, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface FinalCTASectionProps {
  onCtaClick?: () => void;
}

export default function FinalCTASection({ onCtaClick }: FinalCTASectionProps) {
  const ctaCards = [
    {
      title: "Start Your Project",
      subtitle: "Best for businesses ready to launch",
      price: "$1,999",
      priceSub: "Starting price • Fixed scope",
      icon: Rocket,
      iconColor: "text-white",
      iconBg: "bg-gradient-to-br from-[#FF6B35] to-[#FF4500]",
      features: ["2-week delivery", "Professional design", "Mobile-responsive", "SEO-optimized", "30-day support"],
      btnText: "Get Started Now",
      btnClass: "bg-gradient-to-br from-[#FF6B35] to-[#FF4500] text-white shadow-[0_8px_24px_rgba(255,107,53,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(255,107,53,0.5),0_0_24px_rgba(255,107,53,0.4)] border-none",
      primary: true,
      action: onCtaClick,
    },
    {
      title: "View Our Work",
      subtitle: "Explore our portfolio & case studies",
      price: "FREE",
      priceSub: "See real results • Real ROI",
      icon: Layers,
      iconColor: "text-white",
      iconBg: "bg-gradient-to-br from-[#0052CC] to-[#003380]",
      features: ["SaaS Case Studies", "E-Commerce Results", "Before & Afters", "Live Site Links", "Performance Metrics"],
      btnText: "View Portfolio",
      btnClass: "bg-white text-[#0052CC] shadow-[0_4px_12px_rgba(255,255,255,0.2)] hover:bg-[#10B981] hover:text-white hover:shadow-[0_8px_20px_rgba(16,185,129,0.4)] border-none",
      primary: false,
      action: () => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      title: "Book Strategy Call",
      subtitle: "Free 30-min consultation",
      price: "FREE",
      priceSub: "No commitment • Expert advice",
      icon: Calendar,
      iconColor: "text-white",
      iconBg: "bg-gradient-to-br from-[#10B981] to-[#059669]",
      features: ["Assess your needs", "Review competitors", "Recommend solutions", "Custom quote", "No obligation"],
      btnText: "Book Call",
      btnClass: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0052CC] hover:border-white shadow-none",
      primary: false,
      action: onCtaClick,
    }
  ];

  return (
    <Section id="final-cta" className="relative py-20 md:py-[140px] overflow-hidden bg-gradient-to-br from-[#0052CC] via-[#0042A3] to-[#001129]">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
         {/* Mesh Gradient Overlay */}
         <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-overlay filter blur-[120px]">
            <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-[#0052CC] rounded-full animate-blob" />
            <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-[#FF6B35] rounded-full animate-blob animation-delay-2000" />
         </div>

         {/* Grid Pattern with 3D Tilt */}
         <div 
           className="absolute inset-0 opacity-[0.08]"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
             backgroundSize: '100px 100px',
             transform: 'perspective(1000px) rotateX(20deg) scale(1.2)',
             maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
           }}
         />

         {/* Floating Orb */}
         <motion.div 
            animate={{ y: [0, -60, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] bg-[#FF6B35]/15 rounded-full blur-[150px]"
         />
      </div>
      
      <Container className="relative z-10 max-w-[1100px]">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-[1000px] mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[40px] md:text-[60px] font-extrabold text-white mb-5 tracking-[-0.02em] leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
          >
            Ready to Build Your Growth Engine?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[19px] md:text-[24px] text-white/90 max-w-[800px] mx-auto font-normal leading-[1.6]"
          >
            Stop wrestling with WordPress. Stop settling for templates. Join the Webflow revolution with FactoryJet.
          </motion.p>
        </div>

        {/* --- CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaCards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                 delay: 0.15 * idx, 
                 duration: 0.6,
                 ease: [0.34, 1.56, 0.64, 1] 
              }}
              className={cn(
                 "group relative bg-white/[0.09] backdrop-blur-[24px] border-[2px] border-white/[0.18] rounded-[24px] p-10 md:p-12 text-center shadow-[0_16px_48px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-400 transform hover:-translate-y-[10px] hover:scale-[1.02] hover:bg-white/[0.12] hover:border-white/[0.35] hover:shadow-[0_24px_64px_rgba(0,0,0,0.3),0_0_32px_rgba(255,255,255,0.15)] flex flex-col items-center cursor-default"
              )}
            >
              {/* Icon */}
              <div className={cn(
                 "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg",
                 card.iconBg
              )}>
                 <card.icon className={cn("w-8 h-8", card.iconColor)} strokeWidth={1.5} />
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-[24px] font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-[14px] text-[#FF6B35] italic font-normal mb-6 min-h-[20px]">
                 {card.subtitle}
              </p>

              {/* Price */}
              <div className="mb-2">
                 <span className="text-[42px] font-bold text-white leading-none">{card.price}</span>
              </div>
              <p className="text-[14px] text-white/70 font-normal mb-8">
                 {card.priceSub}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8 w-full max-w-[280px] mx-auto text-left">
                 {card.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-white/90 leading-[1.5]">
                       <div className="mt-[3px] w-4 h-4 rounded-full bg-[#10B981]/20 flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.3)] shrink-0">
                          <CheckCircle className="w-3 h-3 text-[#10B981]" strokeWidth={3} />
                       </div>
                       {feat}
                    </li>
                 ))}
              </ul>

              {/* Button */}
              <div className="mt-auto w-full">
                 <button 
                   onClick={card.action}
                   className={cn(
                      "w-full py-[18px] rounded-[10px] font-semibold text-[17px] flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-[2px]",
                      card.btnClass
                   )}
                 >
                    {card.btnText} <ArrowRight className="w-5 h-5" />
                 </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* --- TRUST BAR --- */}
        <div className="flex justify-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
             className="bg-black/25 backdrop-blur-[20px] rounded-2xl px-6 md:px-10 py-6 border border-white/10 flex flex-wrap justify-center gap-x-10 gap-y-4"
           >
              {[
                "500+ US Businesses Served",
                "Enterprise Performance",
                "Startup Pricing",
                "AI-Native Workflow"
              ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-[#10B981] drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-[14px] md:text-[15px] font-medium text-white/90">{item}</span>
                 </div>
              ))}
           </motion.div>
        </div>

        {/* --- COMPANY FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
           <p className="text-[19px] font-semibold text-white">FactoryJet — Webflow Development Done Right</p>
        </motion.div>

      </Container>
    </Section>
  );
}