import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MILESTONES } from '../data.constants';
import { Milestone } from '../data.types';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const StoryTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create a smooth, spring-loaded drawing effect for the central line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-jetBlue/50 to-transparent" />
      <div className="absolute top-[20%] -left-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-jetBlue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-jetOrange/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-jetBlue/10 border border-jetBlue/20 text-jetBlue text-xs font-bold uppercase tracking-widest mb-4 md:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-jetBlue animate-pulse" />
            Our Legacy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-4 md:mb-6 tracking-tight px-4 md:px-0"
          >
            25+ Years of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jetBlue via-blue-400 to-jetBlue">
              Digital Evolution
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base lg:text-lg leading-relaxed px-4 md:px-0"
          >
            From the early days of custom ERPs to the AI revolution, we've constantly reinvented ourselves to keep our clients ahead of the curve.
          </motion.p>
        </div>

        {/* The Timeline */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Central Line Container */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 z-0">
            {/* The Track (faint line) */}
            <div className="absolute inset-0 w-full h-full bg-slate-800" />
            
            {/* The Progress Line (Animated Gradient) */}
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 w-full h-full bg-gradient-to-b from-jetBlue via-jetOrange to-jetGreen shadow-[0_0_20px_2px_rgba(0,82,204,0.5)]"
            />
          </div>

          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {MILESTONES.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};

const TimelineItem: React.FC<{ item: Milestone; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

      {/* The Node (Central Dot) */}
      <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 w-3 h-3 md:w-4 md:h-4 md:-translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ margin: "-50% 0px -50% 0px" }}
          className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-950 border-2 border-slate-700 relative z-10"
        >
           <motion.div
             className="absolute inset-0 bg-jetBlue rounded-full"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1, boxShadow: "0 0 15px 2px #0052CC" }}
             viewport={{ margin: "-50% 0px -50% 0px" }}
           />
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-1 w-full pl-10 md:pl-0"
      >
        <div className="group relative">
          {/* Card Background with Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10 transition-all duration-500 group-hover:border-jetBlue/50 group-hover:shadow-[0_0_30px_-10px_rgba(0,82,204,0.3)]" />

          <div className="relative p-5 md:p-8 lg:p-10 z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6 border-b border-white/5 pb-4 md:pb-6">
              <div>
                <span className="text-jetBlue font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 md:mb-2 block">{item.phase}</span>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {item.period}
                </h3>
              </div>
              <div className="hidden md:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 group-hover:bg-jetBlue group-hover:border-jetBlue transition-colors duration-300">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-white" />
              </div>
            </div>

            {/* Content */}
            <p className="text-jetOrange font-medium mb-3 md:mb-4 font-display text-base md:text-lg">{item.focus}</p>

            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {item.description.map((desc: string, i: number) => (
                <div key={i} className="flex items-start gap-2 md:gap-3 text-slate-400 text-xs md:text-sm lg:text-base group-hover:text-slate-300 transition-colors">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate-600 mt-1.5 md:mt-2 shrink-0 group-hover:bg-jetBlue transition-colors" />
                  <span className="leading-relaxed">{desc.replace(/^• /, '')}</span>
                </div>
              ))}
            </div>

            {/* Milestone Badge */}
            <div className="bg-slate-950/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/5 flex gap-3 md:gap-4 items-start">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-jetGreen shrink-0 mt-0.5" />
              <div>
                <span className="block text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Key Achievement</span>
                <p className="text-xs md:text-sm font-medium text-slate-200 leading-relaxed">{item.milestone}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Spacer for Desktop Layout */}
      <div className="hidden md:block flex-1" />
    </div>
  );
};

export default StoryTimeline;