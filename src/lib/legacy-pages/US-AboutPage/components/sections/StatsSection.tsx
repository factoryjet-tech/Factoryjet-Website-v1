
import React, { useEffect, useState, useMemo } from 'react';
import { Container, Section } from '../ui/UIComponents';
import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import { cn } from '../../lib/utils';
import { STATS_DATA, TRUSTED_BRANDS } from '../../lib/constants';

// --- LOGO PLACEHOLDER COMPONENT ---
// Since we don't have SVGs, we create a visually interesting geometric placeholder
// that matches the brand colors in the TRUSTED_BRANDS constant.
const LogoPlaceholder = ({ name, color }: { name: string, color: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div 
        className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm"
        style={{ backgroundColor: color }}
      >
        {name.charAt(0)}
      </div>
      <span 
        className="text-2xl font-black tracking-tighter" 
        style={{ color: 'inherit' }} // Inherits from parent which manages grayscale/color
      >
        {name}
      </span>
    </div>
  );
};

// --- PARTICLE COMPONENT ---
const FloatingParticle: React.FC<{ delay: number }> = ({ delay }) => {
  const style = useMemo(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 3,
    duration: 3 + Math.random() * 2
  }), []);
  
  return (
    <motion.div 
      className="absolute rounded-full bg-white/20 pointer-events-none"
      style={{
        left: style.left,
        top: style.top,
        width: style.size,
        height: style.size,
      }}
      animate={{
        opacity: [0.1, 0.4, 0.1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: style.duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
};

export default function StatsSection() {
  const [particles, setParticles] = useState<number[]>([]);

  // Optimization: Reduce particles on mobile for performance
  useEffect(() => {
    const particleCount = window.innerWidth < 768 ? 8 : 20;
    setParticles(Array.from({ length: particleCount }, (_, i) => i));
  }, []);

  return (
    <Section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0052CC] via-[#0042A3] to-[#001129]">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mesh Gradient Overlay */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/[0.08] rounded-full blur-[100px] mix-blend-overlay" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/[0.05] rounded-full blur-[80px] mix-blend-overlay" />
        
        {/* Scattered Particles */}
        {particles.map((i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}
        
        {/* Fine Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
      </div>

      <Container className="relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FF6B35] font-semibold text-[13px] tracking-[0.12em] uppercase mb-3">
              Proven Results
            </p>
            <h2 className="text-4xl md:text-[48px] font-bold text-white mb-6 tracking-tight leading-tight [text-shadow:0_4px_20px_rgba(0,0,0,0.3)]">
              The Numbers Speak For Themselves
            </h2>
          </motion.div>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 max-w-[1200px] mx-auto mb-24">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.15, 
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1] 
              }}
              className="group relative"
            >
              {/* Card Container with Glassmorphism */}
              <div className="relative bg-white/[0.08] backdrop-blur-[20px] border-[1.5px] border-white/[0.15] rounded-[20px] p-8 pt-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-400 group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:border-white/[0.3] group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.3),0_0_24px_rgba(255,255,255,0.1)]">
                
                {/* Icon (Floating) */}
                <div className={cn(
                  "absolute -top-10 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110",
                  stat.gradient,
                  stat.shadow
                )}>
                  <stat.icon className="w-10 h-10 text-white drop-shadow-md" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-[44px] lg:text-[56px] font-extrabold text-white tracking-[-0.02em] leading-none drop-shadow-sm">
                      <AnimatedCounter 
                        value={stat.value} 
                        prefix={stat.prefix} 
                        suffix={stat.suffix} 
                        duration={2} 
                      />
                    </span>
                  </div>
                  
                  <h3 className="text-[16px] font-medium text-white/80 mb-2 leading-[1.5]">
                    {stat.label}
                  </h3>
                  
                  <p className="text-[14px] text-white/60 leading-[1.6]">
                    {stat.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- LOGO CLOUD --- */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-[18px] font-semibold text-white mb-10"
          >
            Trusted by Leading US Brands
          </motion.h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {TRUSTED_BRANDS.map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 + (idx * 0.05) }}
                className="group cursor-default transition-all duration-300"
              >
                {/* 
                   Strict adherence to spec: 
                   - Grayscale filter and 60% opacity by default 
                   - Full color and 100% opacity on hover 
                   - Scale 1.05 on hover
                */}
                <div className="transform transition-all duration-300 filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 group-hover:scale-105">
                   <LogoPlaceholder name={brand.name} color={brand.color} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
}
