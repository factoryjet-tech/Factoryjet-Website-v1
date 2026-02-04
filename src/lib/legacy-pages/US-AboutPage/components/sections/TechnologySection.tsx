import React, { useState } from 'react';
import { Container, Section, Badge } from '../ui/UIComponents';
import { TECHNOLOGIES } from '../../lib/constants';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Check } from 'lucide-react';

// --- CUSTOM ANIMATED ICON COMPONENT ---
const AnimatedFeatureIcon = ({ type, isHovered }: { type: string; isHovered: boolean }) => {
  const transition = { duration: 0.5, ease: "easeInOut" };

  // Common SVG props
  const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "w-8 h-8 relative z-10"
  };

  const renderIcon = () => {
    // Map based on constants titles roughly to icon types for visual flair
    // "Client-First Methodology" -> Layout
    if (type.includes("Client-First")) {
        return (
          <motion.svg {...svgProps}>
            <motion.path 
              d="M12 2L2 7L12 12L22 7L12 2Z" 
              animate={{ y: isHovered ? -2 : 0 }} 
              transition={transition}
            />
            <motion.path 
              d="M2 17L12 22L22 17" 
              animate={{ y: isHovered ? 2 : 0 }} 
              transition={transition}
            />
            <path d="M2 12L12 17L22 12" />
          </motion.svg>
        );
    }
    // "Performance Optimized" -> Speed
    if (type.includes("Performance")) {
         return (
          <motion.svg {...svgProps}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeOpacity="0.2"/>
            <path d="M12 6V2" />
            <motion.path 
              d="M12 12L16 8"
              initial={{ rotate: 0, originX: 0.5, originY: 0.5 }} 
              animate={{ rotate: isHovered ? 90 : 0 }}
              style={{ originX: "12px", originY: "12px" }} 
              transition={{ type: "spring", stiffness: 100 }}
            />
          </motion.svg>
        );
    }
    // "SEO Architecture" -> Search/Graph
    if (type.includes("SEO")) {
        return (
          <motion.svg {...svgProps}>
            <circle cx="11" cy="11" r="8" />
            <motion.path 
              d="M21 21L16.65 16.65"
              animate={{ x: isHovered ? -2 : 0, y: isHovered ? -2 : 0 }}
              transition={{ repeat: isHovered ? Infinity : 0, repeatType: "reverse", duration: 0.5 }}
            />
          </motion.svg>
        );
    }
    // "Security & Hosting" -> Shield
    if (type.includes("Security")) {
        return (
          <motion.svg {...svgProps}>
            <motion.path 
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.svg>
        );
    }

    return null;
  };

  return renderIcon();
};

export default function TechnologySection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Accent colors for variety
  const colors = ["blue", "teal", "violet", "orange"];
  const getColorStyles = (index: number) => {
    const color = colors[index % colors.length];
    const styles: Record<string, { text: string; bg: string; glow: string; border: string }> = {
      blue: { text: "text-blue-600", bg: "bg-blue-50", glow: "from-blue-500/20", border: "group-hover:border-blue-200" },
      teal: { text: "text-teal-600", bg: "bg-teal-50", glow: "from-teal-500/20", border: "group-hover:border-teal-200" },
      violet: { text: "text-violet-600", bg: "bg-violet-50", glow: "from-violet-500/20", border: "group-hover:border-violet-200" },
      orange: { text: "text-orange-600", bg: "bg-orange-50", glow: "from-orange-500/20", border: "group-hover:border-orange-200" },
    };
    return styles[color];
  };

  return (
    <Section className="bg-[#F8FAFC] relative py-24 lg:py-32 overflow-hidden">
      
      {/* Parallax Background Shape */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-[120px] pointer-events-none" 
      />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-6">Built on Industry-Leading Standards</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111] mb-6 tracking-tight">
              Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Industry-Leading Standards</span>
            </h2>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {TECHNOLOGIES.map((tech, idx) => {
              const styles = getColorStyles(idx);
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={cn(
                    "group relative bg-white rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.05)] overflow-hidden cursor-default transition-all duration-300",
                    "hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-slate-200"
                  )}
                >
                  {/* Subtle Gradient Background on Hover */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                    styles.glow.replace('from-', 'from-').replace('/20', '')
                  )} />
                  
                  {/* Top Highlight Line */}
                  <div className={cn(
                    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500",
                    styles.bg.replace('bg-', 'from-').replace('-50', '-500'),
                    "to-transparent"
                  )} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                      styles.bg,
                      styles.text
                    )}>
                      <AnimatedFeatureIcon type={tech.title} isHovered={hoveredCard === idx} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#111] mb-4 group-hover:text-black">
                      {tech.title}
                    </h3>
                    
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                      {tech.description}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-slate-50">
                        {tech.benefits.map((benefit, i) => (
                             <div key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                                <Check className={cn("w-4 h-4 mt-0.5 shrink-0", styles.text)} strokeWidth={3} />
                                <span>{benefit}</span>
                             </div>
                        ))}
                    </div>
                  </div>

                  {/* Decorative Background Blob for Depth */}
                  <div className={cn(
                    "absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none",
                    styles.bg
                  )} />
                </motion.div>
              );
            })}
        </div>

      </Container>
    </Section>
  );
}