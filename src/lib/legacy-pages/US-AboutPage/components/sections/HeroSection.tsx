import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Container } from '../ui/UIComponents';
import { HERO_CONTENT } from '../../lib/constants';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

// --- ANIMATION VARIANTS ---

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const wordAnimation = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 1, ease: [0.34, 1.56, 0.64, 1] as const }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

// --- COMPONENTS ---

const Orb = ({ 
  size, 
  color, 
  initialPos, 
  animateTo, 
  duration, 
  delay = 0,
  blur = 100,
  className
}: { 
  size: number; 
  color: string; 
  initialPos: { x: string; y: string }; 
  animateTo: { x: string; y: string }; 
  duration: number; 
  delay?: number;
  blur?: number;
  className?: string;
}) => {
  const xDelta = parseFloat(animateTo.x) - parseFloat(initialPos.x);
  const yDelta = parseFloat(animateTo.y) - parseFloat(initialPos.y);

  return (
    <motion.div
      className={cn("absolute rounded-full mix-blend-screen pointer-events-none", className)}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
        left: initialPos.x,
        top: initialPos.y,
        zIndex: 1
      }}
      animate={{
        x: ["0%", `${xDelta}%`, "0%"],
        y: ["0%", `${yDelta}%`, "0%"],
        scale: [1, 1.1, 0.9, 1]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    />
  );
};

const Particle: React.FC<{ delay: number }> = ({ delay }) => {
  const style = useMemo(() => ({
    left: `${Math.random() * 100}%`,
    duration: 15 + Math.random() * 10,
    size: 3 + Math.random() * 5,
    opacity: 0.2 + Math.random() * 0.3,
    xEnd: (Math.random() - 0.5) * 100
  }), []);
  
  return (
    <motion.div
      className="absolute rounded-full bg-white pointer-events-none"
      style={{
        width: style.size,
        height: style.size,
        left: style.left,
        opacity: style.opacity,
        bottom: '-20px',
        zIndex: 4
      }}
      animate={{
        y: [0, -1200],
        x: [0, style.xEnd],
        opacity: [0, style.opacity, 0]
      }}
      transition={{
        duration: style.duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
    />
  );
};

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<number[]>([]);

  // Initialize particles on mount to avoid hydration mismatch
  // Optimization: Reduce particle count on mobile
  useEffect(() => {
    const particleCount = window.innerWidth < 768 ? 15 : 40;
    setParticles(Array.from({ length: particleCount }, (_, i) => i));
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden bg-[#0A0E1A] flex flex-col items-center justify-center text-center"
    >
      
      {/* --- BACKGROUND LAYERS --- */}

      {/* Layer 1: Base Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#0052CC66_0%,_#0F172A_35%,_#0A0E1A_70%,_#001129_100%)] animate-pulse-slow opacity-80" />
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] animate-pulse-slow mix-blend-overlay" />

      {/* Layer 2: Floating Orbs - Optimized for mobile by hiding secondary orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <Orb 
          size={800} 
          color="radial-gradient(circle, rgba(0,82,204,0.4) 0%, rgba(0,82,204,0.15) 40%, transparent 70%)"
          initialPos={{ x: '-10%', y: '-10%' }}
          animateTo={{ x: '10%', y: '10%' }}
          duration={25}
        />
        <Orb 
          size={600} 
          color="radial-gradient(circle, rgba(255,107,53,0.35) 0%, rgba(255,107,53,0.12) 40%, transparent 70%)"
          initialPos={{ x: '60%', y: '-10%' }}
          animateTo={{ x: '40%', y: '20%' }}
          duration={30}
          delay={3}
          blur={80}
        />
        <Orb 
          size={700}
          color="radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0.15) 45%, transparent 75%)"
          initialPos={{ x: '50%', y: '50%' }}
          animateTo={{ x: '60%', y: '60%' }}
          duration={40}
          blur={120}
          className="hidden md:block" // Hide on mobile
        />
        <Orb 
          size={400}
          color="radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.08) 50%, transparent 70%)"
          initialPos={{ x: '-5%', y: '40%' }}
          animateTo={{ x: '5%', y: '30%' }}
          duration={15}
          blur={90}
          className="hidden md:block" // Hide on mobile
        />
         <Orb 
          size={550}
          color="radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.1) 40%, transparent 65%)"
          initialPos={{ x: '10%', y: '70%' }}
          animateTo={{ x: '20%', y: '60%' }}
          duration={28}
          blur={110}
          className="hidden md:block" // Hide on mobile
        />
      </div>

      {/* Layer 3: Geometric Grid Overlay */}
      <div 
        className="absolute inset-0 z-[3] pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          transform: 'perspective(1200px) rotateX(45deg) rotateZ(5deg) scale(1.5)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)'
        }}
      />
      
      {/* Layer 4: Particle System */}
      <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden">
        {particles.map((i) => (
          <Particle key={i} delay={Math.random() * 20} />
        ))}
      </div>

      {/* Layer 5: Mouse Spotlight */}
      <motion.div 
        className="absolute z-[2] w-[600px] h-[600px] rounded-full pointer-events-none hidden md:block" // Hidden on mobile for performance
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)',
          filter: 'blur(40px)',
          left: smoothMouseX,
          top: smoothMouseY,
          x: '-50%',
          y: '-50%'
        }}
      />

      {/* --- MAIN CONTENT --- */}
      <Container className="relative z-10 flex flex-col items-center justify-center h-full pt-10 md:pt-0">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 relative group"
        >
           <div className="absolute inset-0 bg-jetOrange/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
           <span className="relative inline-block text-[11px] md:text-[13px] font-bold tracking-[0.15em] text-[#FF6B35] uppercase bg-[#FF6B35]/10 backdrop-blur-md px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-[#FF6B35]/20 shadow-[0_4px_16px_rgba(255,107,53,0.15)]">
             Webflow Development Agency
           </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-white font-black text-[40px] md:text-[60px] lg:text-[72px] xl:text-[80px] leading-[1.1] md:leading-[1.05] tracking-[-0.03em] mb-5 max-w-5xl drop-shadow-[0_4px_24px_rgba(0,82,204,0.4)]"
        >
          {HERO_CONTENT.headline.split(' ').map((word, i) => (
            <motion.span key={i} variants={wordAnimation} className="inline-block mr-[0.2em] last:mr-0">
               <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#E0EFFF]">
                 {word}
               </span>
            </motion.span>
          ))}
        </motion.h1>

        {/* Secondary Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18px] md:text-[22px] lg:text-[26px] font-medium text-white/85 max-w-3xl mb-8 leading-[1.5] md:leading-[1.4] px-4"
        >
          {HERO_CONTENT.subheadline}
        </motion.h2>

        {/* Body Copy Card */}
        <motion.div 
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="relative max-w-3xl mx-auto mb-8 bg-white/5 backdrop-blur-[8px] md:backdrop-blur-md border border-white/10 border-l-[4px] border-l-[#FF6B35] rounded-xl p-5 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] mx-4"
        >
           <p className="text-[15px] md:text-[17px] text-white/75 font-normal leading-[1.6]">
              We combine Webflow's visual power with AI-accelerated workflows to deliver enterprise-grade websites <span className="text-[#10B981] font-bold text-[1.1em]">60-75%</span> faster and <span className="text-[#10B981] font-bold text-[1.1em]">40-50%</span> more affordably than traditional agencies.
           </p>
        </motion.div>

        {/* CTA Group - Stacked on Mobile, Row on Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-col md:flex-row items-center gap-4 mb-10 w-full md:w-auto px-6 md:px-0"
        >
          {/* Primary CTA */}
          <button
            onClick={onCtaClick}
            className="relative group w-full md:w-auto bg-gradient-to-br from-[#FF6B35] to-[#FF4500] hover:from-[#FF7B45] hover:to-[#FF5510] text-white text-[16px] font-bold px-8 py-4 rounded-xl shadow-[0_8px_32px_rgba(255,107,53,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_16px_48px_rgba(255,107,53,0.5),0_0_40px_rgba(255,107,53,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-10" />
             <div className="absolute inset-0 rounded-xl animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite] ring-2 ring-[#FF6B35] opacity-50 z-0" />
             <span className="relative z-20 flex items-center justify-center">
               {HERO_CONTENT.ctas.primary} <ArrowRight className="ml-2 w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
             </span>
          </button>

          {/* Secondary CTA */}
          <button 
            onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            className="group w-full md:w-auto bg-white/[0.08] backdrop-blur-md border-[2px] border-white/25 hover:bg-white/[0.15] hover:border-white/50 text-white text-[15px] font-semibold px-8 py-[14px] rounded-xl transition-all duration-300 transform hover:-translate-y-[2px] shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] flex items-center justify-center"
          >
            {HERO_CONTENT.ctas.secondary} <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          {/* Tertiary CTA - Visible on desktop, simplified on mobile */}
          <button
            onClick={onCtaClick}
            className="group flex items-center gap-1.5 text-[#FF6B35] hover:text-[#FF7B45] font-semibold text-[14px] transition-colors relative mt-2 md:mt-0"
          >
             <span>{HERO_CONTENT.ctas.tertiary}</span>
             <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
             <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF6B35] transition-all duration-300 group-hover:w-full" />
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
             visible: { transition: { staggerChildren: 0.08, delayChildren: 1.6 } }
          }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 bg-black/25 backdrop-blur-xl border border-white/[0.08] rounded-[20px] px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)] mx-4"
        >
           {[
             "500+ Websites Launched", 
             "60-75% Faster Delivery", 
             "40-50% Cost Savings", 
             "Zero Maintenance Required"
            ].map((text, idx) => (
             <motion.div 
               key={idx}
               variants={fadeInUp}
               className="flex items-center gap-2"
             >
                <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#10B981]/10 shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                  <Check className="w-2.5 h-2.5 text-[#10B981] stroke-[3px]" />
                </div>
                <span className="text-white/90 font-semibold text-[13px] md:text-[14px] whitespace-nowrap">
                   {text}
                </span>
             </motion.div>
           ))}
        </motion.div>

      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
         <div className="w-[24px] h-[36px] border-[2px] border-white/40 rounded-[12px] relative">
            <motion.div 
              animate={{ 
                top: ["8px", "20px"], 
                opacity: [1, 0] 
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeIn"
              }}
              className="absolute left-1/2 -translate-x-1/2 w-[3px] h-[6px] bg-white/60 rounded-[2px]"
            />
         </div>
      </motion.div>

    </section>
  );
}