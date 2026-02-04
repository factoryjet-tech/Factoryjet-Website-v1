import React from 'react';
import { Container, Section } from '../ui/UIComponents';
import { SERVICES } from '../../lib/constants';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

// Specific theme configuration for each service card matching the design spec
const CARD_THEMES = [
  { // Card 1: Figma to Webflow
    gradient: "bg-gradient-to-br from-blue-600/20 to-transparent",
    badgeBg: "bg-blue-600",
    label: "CONVERSION",
    glowColor: "group-hover:shadow-blue-500/20"
  },
  { // Card 2: Custom Design
    gradient: "bg-gradient-to-br from-[#FF6B35]/20 to-transparent",
    badgeBg: "bg-[#FF6B35]",
    label: "DESIGN",
    glowColor: "group-hover:shadow-[#FF6B35]/20"
  },
  { // Card 3: CMS
    gradient: "bg-gradient-to-br from-emerald-500/20 to-transparent",
    badgeBg: "bg-emerald-500",
    label: "TECHNICAL",
    glowColor: "group-hover:shadow-emerald-500/20"
  },
  { // Card 4: E-Commerce
    gradient: "bg-gradient-to-br from-violet-500/20 to-transparent",
    badgeBg: "bg-violet-500",
    label: "COMMERCE",
    glowColor: "group-hover:shadow-violet-500/20"
  },
  { // Card 5: Interactions
    gradient: "bg-gradient-to-br from-pink-500/20 to-transparent",
    badgeBg: "bg-pink-500",
    label: "INTERACTIVE",
    glowColor: "group-hover:shadow-pink-500/20"
  },
  { // Card 6: SEO
    gradient: "bg-gradient-to-br from-cyan-400/20 to-transparent",
    badgeBg: "bg-cyan-400",
    label: "GROWTH",
    glowColor: "group-hover:shadow-cyan-400/20"
  }
];

export default function ServicesSection() {
  return (
    <Section id="services" className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-[#0A0E1A] via-[#0F172A] to-[#1E293B]">
      
      {/* --- BACKGROUND DECORATIVE ELEMENTS --- */}
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none filter blur-[100px]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0052CC]/30 rounded-full mix-blend-screen animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF6B35]/20 rounded-full mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10B981]/10 rounded-full mix-blend-screen animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern with Perspective */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          transform: 'perspective(1000px) rotateX(2deg) scale(1.1)',
          transformOrigin: 'top center'
        }}
      />

      {/* Floating Orb */}
      <motion.div 
        animate={{ y: [-25, 25, -25] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#0052CC]/15 rounded-full blur-[140px] pointer-events-none z-0"
      />

      <Container className="relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#FF6B35] font-semibold text-[13px] tracking-[0.12em] uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-[52px] font-extrabold text-white mb-5 leading-[1.1] tracking-tight drop-shadow-xl">
              Comprehensive Webflow Development Services
            </h2>
            <p className="text-[21px] text-white/70 font-normal max-w-[700px] mx-auto leading-relaxed">
              From pixel-perfect Figma conversions to enterprise CMS architectures.
            </p>
          </motion.div>
        </div>

        {/* --- SERVICE CARDS GRID --- */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {SERVICES.map((service, idx) => {
            const theme = CARD_THEMES[idx % CARD_THEMES.length];
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: idx * 0.1, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={cn(
                  "group relative bg-white/[0.06] backdrop-blur-[10px] md:backdrop-blur-[20px] rounded-[20px] p-10 overflow-hidden",
                  "border-[1.5px] border-white/[0.12] transition-all duration-400",
                  "hover:translate-y-[-8px] hover:scale-[1.01] hover:border-white/[0.25]",
                  "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                  "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
                  theme.glowColor
                )}
              >
                {/* Gradient Accent Overlay */}
                <div className={cn(
                  "absolute top-0 left-0 w-full h-full opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none",
                  theme.gradient
                )} />

                {/* Top Badge */}
                <div className={cn(
                  "absolute top-0 left-0 px-4 py-2 rounded-br-lg text-[12px] font-bold text-white tracking-wider shadow-lg",
                  theme.badgeBg
                )}>
                  {theme.label}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <service.icon className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" strokeWidth={1.2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-[26px] font-bold text-white mb-3 group-hover:text-white transition-colors drop-shadow-md">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/75 text-[16px] leading-[1.7] mb-8 min-h-[54px]">
                    {service.description}
                  </p>

                  {/* Included List */}
                  <div className="mb-8 flex-grow">
                    <p className="text-[#FF6B35] text-[14px] font-bold uppercase tracking-wide mb-4">
                      What's Included:
                    </p>
                    <ul className="space-y-2.5">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 w-4 h-4 rounded-full bg-[#10B981]/20 flex items-center justify-center shrink-0">
                             <Check className="w-3 h-3 text-[#10B981]" strokeWidth={4} />
                          </div>
                          <span className="text-white/85 text-[15px] leading-[1.4] font-normal">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Footer */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                     <div>
                        <p className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-1">Pricing</p>
                        <p className="text-[22px] font-semibold text-white tracking-tight">
                           {service.price.replace("Starting at: ", "").replace("Add-on: ", "")}
                        </p>
                     </div>
                     <button className="group/btn relative overflow-hidden rounded-lg border-[1.5px] border-white/30 px-5 py-2.5 transition-all hover:bg-white/10 hover:border-white">
                        <span className="flex items-center gap-2 text-[14px] font-medium text-white">
                           Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                     </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}