'use client';

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  useMotionValueEvent,
  animate
} from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Layers,
  MapPin,
  Quote,
  Zap,
  ShieldCheck,
  Server,
  BarChart3,
  Globe2
} from 'lucide-react';
import { CaseStudy } from '../data.types';
import AuthorByline from '@/components/AuthorByline';

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
  onBack?: () => void;
}

// --- SUB-COMPONENTS ---

const StickyROIHeader = ({ isVisible, client, metric, onBook }: { isVisible: boolean; client: string; metric: string; onBook: () => void }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-2xl shadow-slate-900/5 supports-[backdrop-filter]:bg-white/60"
        >
          <div className="max-w-7xl mx-auto px-3 md:px-4 h-16 md:h-20 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-6">
              <span className="font-display font-bold text-slate-900 hidden sm:block truncate max-w-[120px] md:max-w-[200px] text-sm md:text-lg">
                {client}
              </span>
              <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>
              <span className="flex items-center gap-1 md:gap-2 font-mono font-bold text-emerald-600 bg-emerald-50/80 px-2 md:px-3 py-0.5 md:py-1 rounded-md border border-emerald-100 text-xs md:text-sm ring-1 ring-emerald-500/20">
                <TrendingUp size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline">{metric}</span><span className="sm:hidden">{metric.split(' ')[0]}</span>
              </span>
            </div>
            <button
              onClick={onBook}
              className="bg-slate-900 hover:bg-slate-800 text-white px-3 md:px-6 py-1.5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="hidden sm:inline">Book Similar Project</span>
              <span className="sm:hidden">Book Now</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface AnimatedCounterProps {
  value: string;
  label: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, label }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  // Intelligent Parsing Logic
  // Matches: prefix (non-digits), number (digits + dots), suffix (rest)
  const regex = /^([^0-9.]*)([0-9.,]+)(.*)$/;
  const match = value.match(regex);
  
  const prefix = match ? match[1] : '';
  const rawNumber = match ? parseFloat(match[2].replace(/,/g, '')) : 0;
  const suffix = match ? match[3] : '';
  
  // Determine decimal places based on input string
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0;

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      
      const controls = animate(0, rawNumber, {
        duration: 2.5,
        ease: [0.25, 0.4, 0.25, 1], // Custom cubic-bezier for smooth landing
        onUpdate: (latest) => {
          // Manually update text content to avoid React render cycle overhead (flickering)
          node.textContent = latest.toLocaleString('en-US', { 
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals 
          });
        }
      });

      return () => controls.stop();
    } else if (ref.current && !match) {
        // Fallback for non-numeric values
        ref.current.textContent = value;
    }
  }, [isInView, rawNumber, decimals, match, value]);

  return (
    <div className="group relative p-4 md:p-6 lg:p-8 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-display mb-2 md:mb-3 tracking-tight">
        {match ? (
          <>
            <span className="text-slate-400 text-xl md:text-3xl mr-1">{prefix}</span>
            <span ref={ref} className="tabular-nums tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">0</span>
            <span className="text-primary text-xl md:text-3xl ml-1">{suffix}</span>
          </>
        ) : (
          <span ref={ref}>{value}</span>
        )}
      </div>
      <p className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] md:text-xs flex items-center gap-1.5 md:gap-2">
        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 inline-block"></span>
        {label}
      </p>
    </div>
  );
};


// --- MAIN PAGE COMPONENT ---

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ caseStudy, onBack }) => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax Animations
  const heroY = useTransform(scrollY, [0, 1000], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Refined Laptop Parallax
  const laptopY = useTransform(scrollY, [0, 1000], [0, -150]);
  const laptopScale = useTransform(scrollY, [0, 500], [1, 0.95]);

  // Sticky Header Logic
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowStickyHeader(latest > 800);
  });

  return (
    <div className="bg-white min-h-screen relative font-sans selection:bg-primary/20" ref={containerRef}>
      <StickyROIHeader 
        isVisible={showStickyHeader} 
        client={caseStudy.client} 
        metric={caseStudy.metrics[0].value + " " + caseStudy.metrics[0].label}
        onBook={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} 
      />

      {/* BACK BUTTON */}
      <div className="fixed top-4 md:top-8 left-3 md:left-4 lg:left-8 z-[50]">
        <button
          onClick={() => window.history.back()}
          className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white p-2.5 md:p-3.5 rounded-full transition-all border border-white/10 shadow-2xl group ring-1 ring-white/10"
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 1. CINEMATIC PARALLAX HERO */}
      <section className="relative min-h-[90vh] md:min-h-[110vh] bg-slate-950 flex flex-col items-center pt-20 md:pt-32 px-4 overflow-hidden pb-16 md:pb-32">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
        
        {/* Animated Orbs */}
        <motion.div
           animate={{
             scale: [1, 1.2, 1],
             opacity: [0.3, 0.5, 0.3],
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"
        />
        <motion.div
           animate={{
             scale: [1.2, 1, 1.2],
             opacity: [0.2, 0.4, 0.2],
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-secondary/10 rounded-full blur-[80px] md:blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none mix-blend-screen"
        />

        {/* Content Layer */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center z-10 max-w-5xl mx-auto mb-8 md:mb-16 relative px-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8"
          >
            <span className="inline-flex items-center gap-1 md:gap-1.5 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
               {caseStudy.category}
            </span>
            <div className="w-1 h-1 rounded-full bg-slate-700"></div>
            <span className="inline-flex items-center gap-1 md:gap-1.5 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
              <MapPin size={10} className="md:w-3 md:h-3 text-secondary" /> {caseStudy.location}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[0.95] mb-4 md:mb-8 tracking-tight"
          >
            {caseStudy.title}
          </motion.h1>
          <AuthorByline variant="dark" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-400 text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            {caseStudy.snippet}
          </motion.p>
        </motion.div>

        {/* MacBook Pro Style Frame */}
        <motion.div
          style={{ y: laptopY, scale: laptopScale }}
          className="relative w-full max-w-5xl mx-auto z-20 perspective-1000 px-2 md:px-0"
        >
          <div className="relative mx-auto bg-[#1a1a1a] rounded-t-[12px] md:rounded-t-[20px] pt-[12px] md:pt-[20px] px-[12px] md:px-[20px] shadow-2xl border-t border-white/10">
            {/* Camera Dot */}
            <div className="absolute top-[6px] md:top-[8px] left-1/2 -translate-x-1/2 w-1 h-1 md:w-1.5 md:h-1.5 bg-[#0a0a0a] rounded-full border border-[#333]"></div>

            {/* Screen Bezel */}
            <div className="relative bg-black rounded-t-md md:rounded-t-lg overflow-hidden border-[2px] md:border-[4px] border-b-0 border-[#0d0d0d]">
               {/* Reflection Glare */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-20 pointer-events-none"></div>

               <img
                 src={`${caseStudy.image.split('?')[0]}?auto=format&fit=crop&w=1200&q=75`}
                 srcSet={`${caseStudy.image.split('?')[0]}?auto=format&fit=crop&w=600&q=75 600w, ${caseStudy.image.split('?')[0]}?auto=format&fit=crop&w=900&q=75 900w, ${caseStudy.image.split('?')[0]}?auto=format&fit=crop&w=1200&q=75 1200w`}
                 sizes="(max-width: 768px) 100vw, 80vw"
                 alt={caseStudy.client}
                 width={1200}
                 height={750}
                 loading="eager"
                 decoding="async"
                 fetchPriority="high"
                 className="w-full h-auto aspect-[16/10] object-cover"
               />
            </div>
          </div>
          {/* Bottom Chassis */}
          <div className="h-[8px] md:h-[12px] bg-[#2a2a2a] rounded-b-[8px] md:rounded-b-[10px] w-full shadow-[0_30px_60px_-20px_rgba(0,82,204,0.4)] md:shadow-[0_50px_100px_-20px_rgba(0,82,204,0.4)] border-t border-[#333]">
             <div className="w-[80px] md:w-[120px] h-[3px] md:h-[4px] bg-[#1a1a1a] mx-auto rounded-b-lg opacity-50"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. RESULTS DASHBOARD (STATS) */}
      <section className="bg-white py-12 md:py-24 relative z-30 -mt-12 md:-mt-20 rounded-t-[2rem] md:rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 border-b border-slate-100 pb-6 md:pb-8">
             <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-1 md:mb-2">Impact at a Glance</h3>
                <p className="text-slate-500 text-sm md:text-base">Key performance indicators from the project</p>
             </div>
             <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-0">
               {caseStudy.tags.map(tag => (
                 <span key={tag} className="px-2 md:px-3 py-0.5 md:py-1 bg-slate-100 text-slate-600 text-[10px] md:text-xs font-medium rounded-full">
                   #{tag}
                 </span>
               ))}
             </div>
           </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {caseStudy.metrics.map((metric, idx) => (
               <AnimatedCounter key={idx} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. THREADED ZIG-ZAG LAYOUT */}
      <section className="py-12 md:py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-32">

          {/* Section 1: The Challenge */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="bg-orange-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl md:rounded-2xl text-secondary mb-4 md:mb-8 shadow-sm ring-4 ring-orange-50/50">
                <Zap size={24} className="md:w-7 md:h-7" />
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
                The Challenge
              </h2>
              <div className="prose prose-base md:prose-lg text-slate-600 leading-relaxed">
                 <p className="text-sm md:text-base">{caseStudy.challenge}</p>
              </div>
            </motion.div>
            
            {/* Challenge Visual - High Fidelity Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative group"
            >
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-orange-100 to-slate-100 rounded-[1.5rem] md:rounded-[2rem] transform rotate-2 group-hover:rotate-1 transition-transform duration-700"></div>
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl aspect-[4/3]">
                 <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10"></div>
                 <img
                   src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=75"
                   srcSet="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=400&q=75 400w, https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=600&q=75 600w, https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=75 800w"
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   alt="Complex chaotic code"
                   width={800}
                   height={600}
                   loading="lazy"
                   decoding="async"
                   className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                 />
                 {/* Glass Overlay Card */}
                 <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 bg-white/90 backdrop-blur-md p-3 md:p-6 rounded-xl md:rounded-2xl z-20 border border-white/20 shadow-lg">
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="bg-red-50 p-1.5 md:p-2 rounded-lg text-red-500 shrink-0">
                        <BarChart3 size={20} className="md:w-6 md:h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm md:text-lg">System Bottleneck</div>
                        <div className="text-xs md:text-sm text-slate-600 mt-0.5 md:mt-1">Manual processes were causing 40% efficiency loss in operations.</div>
                      </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Section 2: The FactoryJet Solution */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-16 lg:gap-24">
             <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="bg-blue-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl md:rounded-2xl text-primary mb-4 md:mb-8 shadow-sm ring-4 ring-blue-50/50">
                <ShieldCheck size={24} className="md:w-7 md:h-7" />
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
                The Solution
              </h2>
              <div className="prose prose-base md:prose-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
                 <p className="text-sm md:text-base">{caseStudy.solution}</p>
              </div>

              <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h4 className="font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2 relative z-10 text-sm md:text-base">
                   <Layers size={18} className="md:w-5 md:h-5 text-primary" /> Tech Stack Deployed
                </h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2.5 relative z-10">
                  {caseStudy.techStack.map((tech, i) => (
                    <span key={i} className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-primary/30 px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-default shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Solution Visual - High Fidelity Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full relative group"
            >
               <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-bl from-blue-100 to-slate-100 rounded-[1.5rem] md:rounded-[2rem] transform -rotate-2 group-hover:-rotate-1 transition-transform duration-700"></div>
               <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl aspect-[4/3] bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=75"
                    srcSet="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=75 400w, https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=75 600w, https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=75 800w"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    alt="Futuristic data network"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Abstract UI Overlay */}
                  <div className="absolute inset-0 p-3 md:p-8 flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg px-2 md:px-4 py-1 md:py-2 text-white/90 text-xs md:text-sm font-mono flex items-center gap-1.5 md:gap-2">
                           <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></div>
                           System Online
                        </div>
                        <Globe2 className="text-blue-400/50 w-8 h-8 md:w-12 md:h-12" size={32} strokeWidth={1} />
                     </div>

                     <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-lg md:rounded-xl p-3 md:p-6 font-mono text-xs md:text-sm text-blue-100 shadow-2xl">
                        <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-4 border-b border-white/10 pb-2 md:pb-4">
                           <Server size={14} className="md:w-4 md:h-4" />
                           <span className="text-xs md:text-sm">Deployment Status</span>
                        </div>
                        <div className="space-y-1.5 md:space-y-2">
                           <div className="flex justify-between text-xs md:text-sm">
                              <span className="text-slate-400">Optimization</span>
                              <span className="text-green-400">100%</span>
                           </div>
                           <div className="w-full bg-white/10 rounded-full h-1 md:h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="bg-green-400 h-1 md:h-1.5 rounded-full"
                              />
                           </div>
                           <div className="flex justify-between pt-1 md:pt-2 text-xs md:text-sm">
                              <span className="text-slate-400">AIO Score</span>
                              <span className="text-blue-400">98/100</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Testimonial (if available) */}
          {caseStudy.testimonial && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 lg:p-20 text-center relative overflow-hidden isolate"
            >
              {/* Background Patterns */}
              <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-white/10 rounded-full blur-[60px] md:blur-[100px] translate-x-1/3 -translate-y-1/3 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-secondary/20 rounded-full blur-[50px] md:blur-[80px] -translate-x-1/3 translate-y-1/3 -z-10"></div>

              <div className="absolute top-4 md:top-10 left-4 md:left-10 text-white/10">
                <Quote size={60} className="md:w-[120px] md:h-[120px]" />
              </div>

              <div className="relative z-10 max-w-4xl mx-auto">
                <p className="text-xl md:text-3xl lg:text-5xl font-display font-medium text-white mb-6 md:mb-12 leading-tight tracking-tight">
                  "{caseStudy.testimonial.quote}"
                </p>
                <div className="flex items-center justify-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg md:text-xl backdrop-blur-sm">
                    {caseStudy.testimonial.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white text-base md:text-lg">{caseStudy.testimonial.author}</div>
                    <div className="text-blue-100 font-medium text-sm md:text-base">{caseStudy.testimonial.role}, {caseStudy.client}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="bg-slate-900 py-16 md:py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-4 md:mb-8 tracking-tighter">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">scale</span>?
          </h2>
          <p className="text-slate-400 text-base md:text-xl lg:text-2xl mb-8 md:mb-12 font-light px-4 md:px-0">
            Join {caseStudy.client} and 20+ other industry leaders transforming their digital infrastructure with FactoryJet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6">
             <button className="bg-secondary hover:bg-[#ff5515] text-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-base md:text-lg transition-all shadow-[0_0_40px_rgba(255,107,53,0.4)] hover:shadow-[0_0_60px_rgba(255,107,53,0.6)] hover:-translate-y-1">
               Start Your Transformation
             </button>
             <button
                onClick={() => window.history.back()}
                className="bg-transparent border border-slate-700 text-white hover:bg-white/5 px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-base md:text-lg transition-all"
             >
               View More Case Studies
             </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};
