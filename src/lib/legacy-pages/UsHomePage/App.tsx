'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import FooterUS from '@/components/FooterUS';
import { useContactModal } from '@/context/ContactModalContext';
import { 
  Menu, X, Check, ArrowRight, Zap, Eye, Workflow, Globe, 
  ShoppingCart, Smartphone, RefreshCw, Layout, DollarSign, 
  AlertTriangle, Headphones, ShieldCheck, ChevronDown, 
  ChevronUp, Star, Lock, Server, Briefcase, 
  MapPin, Twitter, Linkedin, Mail, MousePointer2 , ArrowDown , Clock, Flag, TrendingUp, Activity, Hexagon, Database, Shield, Layers, Command, Quote, Play, CheckCircle, ChevronLeft, ChevronRight, Search, Sparkles, UserCheck, GitMerge, Target, Phone, Palette, Code, Rocket, ExternalLink, Filter, Stethoscope, Landmark, Gem, FileText, ThumbsUp, Building, Plus, Minus, User, MessageSquare
} from 'lucide-react';

// --- Types & Interfaces ---
interface AccordionProps {
  question: string;
  answer: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  timeline: string;
  isPopular?: boolean;
  ctaText?: string;
  ctaType?: 'primary' | 'outline';
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  industry: string;
  logoName: string;
  metrics: string;
  image: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  company: string;
  category: string;
  filterCategory: string;
  challenge: string;
  solution: string;
  quote: string;
  link: string;
  image: string;
  stat?: string;
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
  }
};

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

// --- Custom Components ---

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (!inView) return;
    
    const node = nodeRef.current;
    if (!node) return;

    const controls = {
      value: from,
      stop: false
    };

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      if (controls.stop) return;
      
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4);
      
      const current = Math.floor(from + (to - from) * ease);
      node.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => { controls.stop = true; };
  }, [from, to, inView]);

  return <span ref={nodeRef} />;
};

// --- Page Section Components ---

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-visible bg-[#0F172A] text-white pt-24 pb-16">
      {/* Background Treatments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[80vw] md:w-[800px] h-[80vw] md:h-[800px] bg-[#0052CC] opacity-20 rounded-full blur-[80px] md:blur-[120px] will-change-transform" 
        />
        <motion.div 
          animate={{ x: [0, -70, 70, 0], y: [0, 70, -70, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] -right-[10%] w-[60vw] md:w-[600px] h-[60vw] md:h-[600px] bg-[#FF6B35] opacity-10 rounded-full blur-[60px] md:blur-[100px] will-change-transform" 
        />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center py-12">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center w-full">
          
          <div className="flex flex-col justify-center text-center lg:text-left lg:pl-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <span 
                className="bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-200 flex items-center gap-2"
                style={{ fontFamily: "'Inter', Arial, sans-serif", fontWeight: 500 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                </span>
                Accepting New Clients
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
              style={{ fontFamily: "'Poppins', Arial, sans-serif", fontWeight: 700 }}
            >
              <span className="bg-gradient-to-r from-[#0052CC] via-[#3B82F6] to-[#FF6B35] bg-clip-text text-transparent pb-1">B2B Web Design Agency in USA for High-Converting Websites</span>
            </motion.h1>

            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="flex lg:hidden flex-wrap justify-center gap-4 mb-4 text-xs md:text-sm text-gray-400 font-medium"
               style={{ fontFamily: "'Inter', Arial, sans-serif" }}
            >
              <div className="flex items-center gap-1"><Check size={14} className="text-[#10B981]" /> 523+ Projects</div>
              <div className="flex items-center gap-1"><Star size={14} className="text-[#FF6B35]" /> 4.9/5 Rating</div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm md:text-base lg:text-lg text-slate-300 mb-6 leading-relaxed max-w-[560px] mx-auto lg:mx-0"
              style={{ fontFamily: "'Inter', Arial, sans-serif", fontWeight: 400 }}
            >
              FactoryJet is a B2B web design agency helping US businesses build high-converting websites that generate qualified leads, strengthen brand credibility, and support long-term growth. We deliver enterprise-grade websites in just <strong className="text-white font-semibold">7 days</strong> with fixed pricing, 100% code ownership, and zero vendor lock-in.<br/><br/>Trusted by 523+ businesses across SaaS, Cybersecurity, Healthcare, IT, and Professional Services.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="hidden lg:flex flex-wrap items-center gap-6 mb-8 text-sm font-medium text-slate-400"
               style={{ fontFamily: "'Inter', Arial, sans-serif" }}
            >
              {[
                { icon: <Check size={18} className="text-[#0052CC]" />, val: 523, label: "Websites Delivered" },
                { icon: <Clock size={18} className="text-[#FF6B35]" />, val: 7, label: "Avg. Delivery", suffix: " Days", staticVal: true },
                { icon: <Star size={18} className="text-yellow-500" fill="currentColor" />, val: 4.9, label: "Client Rating", suffix: "/5", staticVal: true },
                { icon: <TrendingUp size={18} className="text-green-500" />, val: 0, label: "Client Revenue Generated", textOverride: "$50M+", staticVal: true }
              ].map((item, i) => (
                 <div key={i} className="flex items-center gap-2 group cursor-default">
                    <div className="bg-white/5 p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                       <span className="block text-white font-bold text-lg leading-none">
                         {item.staticVal ? (item.textOverride || (item.val + (item.suffix || ''))) : <Counter from={0} to={item.val} />}
                       </span>
                       <span className="text-xs uppercase tracking-wider">{item.label}</span>
                    </div>
                 </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full"
            >
              <motion.button 
                onClick={onCtaClick}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 107, 53, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-b from-[#FF6B35] to-[#E65020] text-white font-semibold text-base md:text-lg px-8 py-3 rounded-xl shadow-xl shadow-orange-900/30 flex items-center justify-center gap-2 group min-h-[48px]"
                style={{ fontFamily: "'Inter', Arial, sans-serif", fontWeight: 600 }}
              >
                Get Your Free Strategy Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-transparent border border-white/20 text-slate-300 font-medium text-base md:text-lg px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white min-h-[48px]"
                style={{ fontFamily: "'Inter', Arial, sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Free Technical & SEO Audit
              </motion.button>
            </motion.div>
          </div>

          <div className="relative px-4 lg:px-0 mt-8 lg:mt-0 hidden md:block">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotateX: 10, rotateY: -10 }}
               animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
               transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
               className="relative z-10"
               style={{ perspective: "1000px" }}
             >
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0052CC] to-[#FF6B35] blur-[80px] opacity-20 -z-10 rounded-full transform scale-90 translate-y-10" />

               <motion.div 
                 animate={{ rotateY: [-2, 2, -2], rotateX: [2, -2, 2] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                 className="bg-[#1E293B]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform-gpu max-w-[500px] mx-auto"
               >
                 <div className="h-8 bg-[#0F172A]/80 border-b border-white/5 flex items-center px-4 gap-2">
                   <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                   </div>
                   <div 
                     className="mx-auto bg-[#1E293B] rounded-md px-3 py-0.5 text-[9px] text-slate-400 w-1/2 text-center font-mono flex items-center justify-center gap-1"
                     style={{ fontFamily: "'Inter', Arial, sans-serif" }}
                   >
                     <Lock size={8} /> factoryjet.com
                   </div>
                 </div>

                 <div className="p-5 md:p-6 bg-[#0F172A]/50 relative min-h-[280px]">
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-5 w-24 bg-white/10 rounded-md"></div>
                      <div className="flex gap-3">
                        <div className="h-3 w-10 bg-white/5 rounded-sm"></div>
                        <div className="h-3 w-10 bg-white/5 rounded-sm"></div>
                        <div className="h-3 w-10 bg-white/5 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="flex gap-6 mb-6">
                       <div className="w-full md:w-2/3 space-y-3">
                          <div className="h-6 w-3/4 bg-gradient-to-r from-blue-500/50 to-blue-400/20 rounded-lg"></div>
                          <div className="h-6 w-1/2 bg-gradient-to-r from-blue-500/50 to-blue-400/20 rounded-lg"></div>
                          <div className="h-3 w-full bg-white/5 rounded mt-3"></div>
                          <div className="h-3 w-5/6 bg-white/5 rounded"></div>
                          <div className="flex gap-3 mt-3">
                             <div className="h-8 w-24 bg-[#FF6B35] rounded-lg shadow-lg shadow-orange-500/20"></div>
                             <div className="h-8 w-24 border border-white/10 rounded-lg"></div>
                          </div>
                       </div>
                       <div className="hidden md:flex w-1/3 bg-white/5 rounded-lg border border-white/5 h-32 items-center justify-center">
                          <Activity className="text-blue-500/50" size={32} />
                       </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                       <div className="h-20 bg-white/5 rounded-lg border border-white/5 p-3"><div className="w-6 h-6 rounded bg-green-500/20 mb-2"></div><div className="h-2 w-12 bg-white/10 rounded"></div></div>
                       <div className="h-20 bg-white/5 rounded-lg border border-white/5 p-3"><div className="w-6 h-6 rounded bg-blue-500/20 mb-2"></div><div className="h-2 w-12 bg-white/10 rounded"></div></div>
                       <div className="h-20 bg-white/5 rounded-lg border border-white/5 p-3"><div className="w-6 h-6 rounded bg-purple-500/20 mb-2"></div><div className="h-2 w-12 bg-white/10 rounded"></div></div>
                    </div>
                 </div>

                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-20 -right-4 md:-right-6 bg-[#1E293B] border border-white/10 p-3 rounded-xl shadow-xl flex items-center gap-3 z-20"
                   style={{ fontFamily: "'Inter', Arial, sans-serif" }}
                 >
                   <div className="bg-green-500/20 p-2 rounded-lg text-green-400"><TrendingUp size={18} /></div>
                   <div><div className="text-[9px] text-slate-400 uppercase pr-4 font-semibold">Conversion Rate</div><div className="text-white font-bold font-mono text-sm" style={{ fontFamily: "'Inter', Arial, sans-serif" }}>+42.8%</div></div>
                 </motion.div>

                 <motion.div 
                   animate={{ y: [0, 10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-20 -left-4 md:-left-6 bg-[#1E293B] border border-white/10 p-3 rounded-xl shadow-xl flex items-center gap-3 z-20"
                   style={{ fontFamily: "'Inter', Arial, sans-serif" }}
                 >
                   <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><Zap size={18} /></div>
                   <div><div className="text-[9px] text-slate-400 uppercase font-semibold">Page Speed</div><div className="text-white font-bold font-mono text-sm" style={{ fontFamily: "'Inter', Arial, sans-serif" }}>99/100</div></div>
                 </motion.div>
               </motion.div>
             </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 pointer-events-none"
        style={{ fontFamily: "'Inter', Arial, sans-serif" }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const testimonials: Testimonial[] = [
    {
      quote: "We were embarrassed to send prospects to our old site. FactoryJet built us a site that actually represents our expertise. Our sales team finally has something they're proud to share.",
      name: "Vishal Barot",
      title: "Co-founder - Impulse Branding Solutions",
      industry: "Enterprise Cybersecurity",
      logoName: "WetStone Labs",
      metrics: "2x Lead Generation",
      image: "",
      icon: <Shield size={16} />
    },
    {
      quote: "They understood our technical product and made it accessible to our healthcare buyers. That's rare. The new design system has completely transformed how we present our solution.",
      name: "Vishal Barot",
      title: "Co-founder - Impulse Branding Solutions",
      industry: "Healthcare Cybersecurity",
      logoName: "CuraShield AI",
      metrics: "40% Faster Sales Cycle",
      image: "",
      icon: <Hexagon size={16} />
    },
    {
      quote: "Our new site has been instrumental in our government contracting conversations. It looks like a company that can handle serious projects. The credibility boost was immediate.",
      name: "Vishal Barot",
      title: "Co-founder - Impulse Branding Solutions",
      industry: "IT Services",
      logoName: "MINDSOURCE",
      metrics: "3 Major Contracts Won",
      image: "",
      icon: <Database size={16} />
    }
  ];

  const logos = [
      { name: "WetStone Labs", icon: <Shield size={24} /> },
      { name: "CuraShield AI", icon: <Hexagon size={24} /> },
      { name: "MINDSOURCE", icon: <Database size={24} /> },
      { name: "VidaML", icon: <Activity size={24} /> },
      { name: "StegoHunt", icon: <Command size={24} /> },
      { name: "KD Associates", icon: <Layers size={24} /> },
      { name: "WetStone Labs", icon: <Shield size={24} /> },
      { name: "CuraShield AI", icon: <Hexagon size={24} /> },
      { name: "MINDSOURCE", icon: <Database size={24} /> },
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 75) {
      handleNext();
    }
    if (touchStart.current - touchEnd.current < -75) {
      handlePrev();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] relative overflow-hidden">
      <div className="absolute top-20 left-10 text-[#0052CC] opacity-[0.03] transform -rotate-12 pointer-events-none">
        <Quote size={400} fill="currentColor" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div 
          className="max-w-4xl mx-auto mb-20 relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
             <AnimatePresence mode="wait">
                <motion.div 
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/80 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#0052CC] to-[#FF6B35]"></div>
                    
                    <div className="mb-6">
                        <Quote size={48} className="text-[#0052CC] opacity-20 fill-current" />
                    </div>

                    <p className="font-inter text-xl md:text-2xl text-[#0F172A] leading-relaxed mb-8 italic relative z-10">
                        "{testimonials[currentIndex].quote}"
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-slate-100 pt-8">
                        <div className="flex items-center gap-4">
                            <div>
                                <h4 className="font-space font-bold text-[#0F172A] text-lg">{testimonials[currentIndex].name}</h4>
                                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                                    <span>{testimonials[currentIndex].title}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2">
                             <div className="flex items-center gap-1">
                                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-[#FF6B35] fill-current" />)}
                             </div>
                             <div className="flex items-center gap-1.5 bg-[#10B981]/10 px-3 py-1 rounded-full border border-[#10B981]/20">
                                <CheckCircle size={14} className="text-[#10B981]" />
                                <span className="text-xs font-bold text-[#10B981] uppercase tracking-wide">Verified Client</span>
                             </div>
                             <div className="text-xs font-medium text-slate-400">
                                Success: <span className="text-[#10B981] font-bold">{testimonials[currentIndex].metrics}</span>
                             </div>
                        </div>
                    </div>
                </motion.div>
             </AnimatePresence>

             <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                <button 
                    onClick={handlePrev} 
                    className="p-3 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#0052CC] hover:border-[#0052CC] transition-all hover:scale-110 shadow-sm"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => { setIsAutoPlaying(false); setCurrentIndex(idx); }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-[#0052CC]' : 'bg-slate-300 hover:bg-slate-400'}`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
                <button 
                    onClick={handleNext} 
                    className="p-3 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#0052CC] hover:border-[#0052CC] transition-all hover:scale-110 shadow-sm"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={20} />
                </button>
             </div>
        </div>

        {/* Logo Strip with inline mask style */}
        <div className="border-t border-slate-200 pt-12 relative">
             <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">More Companies We've Helped Scale</p>
             
             <div 
               className="relative w-full overflow-hidden" 
               style={{ 
                 maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                 WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
               }}
             >
                <motion.div 
                    className="flex items-center gap-16 w-max"
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...logos, ...logos, ...logos].map((logo, i) => ( 
                        <div key={i} className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default group">
                            <div className="text-slate-400 group-hover:text-[#0052CC] transition-colors">{logo.icon}</div>
                            <span className="font-bold text-lg text-slate-400 group-hover:text-[#0F172A] transition-colors font-space">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>
             </div>
        </div>

      </div>
    </section>
  );
};

const ProblemSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
            style={{
                backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
        />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 leading-tight" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>
            Why Most B2B Websites Fail to Generate Leads
          </h2>
          <p className="text-xl text-[#64748B]">Studies show 70% of website redesigns fail to improve conversion — not because of bad design, but because agencies optimise for aesthetics over buyer psychology. Here's what that looks like in practice.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 1: The Premium Trap */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-[#0F172A] rounded-xl shadow-xl overflow-hidden border-l-4 border-red-500 flex flex-col relative group h-full"
          >
            <div className="p-8 flex-grow">
                <div className="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="text-red-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>The "Premium" Trap</h3>
                
                <div className="space-y-4">
                    <div className="border-l-2 border-slate-700 pl-4">
                        <p className="text-sm text-slate-400 uppercase tracking-wide font-semibold mb-1">The Pitch</p>
                        <p className="text-slate-300 italic">"Our discovery phase will take 6–8 weeks..."</p>
                    </div>
                    
                    <div className="border-l-2 border-red-500/30 pl-4">
                        <p className="text-sm text-red-400 uppercase tracking-wide font-semibold mb-1">Translation</p>
                        <p className="text-slate-300">They're billing you <span className="text-white font-bold">$15,000</span> before a single page is designed. Meanwhile, a competitor who moved faster has already launched and is ranking for your keywords.</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-slate-900/50 p-6 border-t border-slate-800">
                <div className="inline-block bg-red-500/10 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    Hidden Cost
                </div>
                <p className="text-sm text-slate-300">
                    Every month without a high-performing website represents missed qualified leads. At a <span className="text-white font-bold">$75K deal value</span>, that's <span className="text-red-400 font-bold">$50K–$150K in lost pipeline</span> — not a hypothetical.
                </p>
            </div>
          </motion.div>

          {/* Card 2: The Budget Gamble */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-[#0F172A] rounded-xl shadow-xl overflow-hidden border-l-4 border-amber-500 flex flex-col relative group h-full"
          >
             <div className="p-8 flex-grow">
                <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="text-amber-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>The Budget Gamble</h3>
                
                <div className="space-y-4">
                    <div className="border-l-2 border-slate-700 pl-4">
                        <p className="text-sm text-slate-400 uppercase tracking-wide font-semibold mb-1">The Pitch</p>
                        <p className="text-slate-300 italic">"We can do it for $500..."</p>
                    </div>
                    
                    <div className="border-l-2 border-amber-500/30 pl-4">
                        <p className="text-sm text-amber-400 uppercase tracking-wide font-semibold mb-1">The Outcome</p>
                        <p className="text-slate-300">Three months later, you have a template site with broken mobile layouts, no SEO, and copy that reads like it was written by a robot.</p>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed pt-2">
                        Your sales team won't send prospects to it. Your best leads leave in under 8 seconds.
                    </p>
                </div>
            </div>
            
            <div className="bg-slate-900/50 p-6 border-t border-slate-800">
                <div className="inline-block bg-amber-500/10 text-amber-400 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    Hidden Cost
                </div>
                <p className="text-sm text-slate-300">
                    Template sites carry <span className="text-white font-bold">73% higher bounce rates on average.</span> Every visitor you lose is a deal you won't close.
                </p>
            </div>
          </motion.div>

          {/* Card 3: The FactoryJet Alternative */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-[#0052CC] to-[#003d99] rounded-xl shadow-2xl overflow-hidden border-l-4 border-[#10B981] flex flex-col relative group h-full"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="p-8 flex-grow relative z-10">
                <div className="w-14 h-14 bg-[#10B981]/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-900/20">
                    <Zap className="text-[#10B981]" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>The FactoryJet Way</h3>
                
                <div className="space-y-4">
                     <div className="border-l-2 border-white/20 pl-4">
                        <p className="text-sm text-blue-200 uppercase tracking-wide font-semibold mb-1">The Solution</p>
                        <p className="text-white font-medium italic">"What if you could have both?"</p>
                    </div>
                    
                    <div className="border-l-2 border-[#10B981] pl-4">
                        <p className="text-sm text-[#10B981] uppercase tracking-wide font-bold mb-1">The Promise</p>
                        <p className="text-blue-50">Enterprise quality at honest pricing. Delivered in <span className="font-bold text-white">7 days</span> — not 6 months.</p>
                    </div>

                    <p className="text-blue-100 text-sm leading-relaxed pt-2">
                        FactoryJet was built AI-native from day one — not retrofitted onto old agency processes. That means parallel workflows, faster decisions, and zero wasted hours billed to you.
                    </p>
                </div>
            </div>
            
            <div className="bg-[#000000]/20 p-6 border-t border-white/10 relative z-10">
                <div className="inline-block bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider shadow-sm">
                    The Result
                </div>
                <p className="text-sm text-blue-50">
                    <span className="font-bold text-white">Launch in 7 days.</span> Look enterprise-grade. <span className="text-white font-bold">Pay a fraction of traditional agency fees.</span>
                </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="text-center mt-16">
          <a onClick={(e) => { e.preventDefault(); onCtaClick(); }} href="#contact" className="group inline-flex items-center gap-2 text-[#FF6B35] font-bold text-lg transition-all hover:text-[#E65020] cursor-pointer min-h-[44px]">
            <span className="border-b-2 border-[#FF6B35]/30 group-hover:border-[#FF6B35] transition-colors pb-1">Sound familiar? Let's fix it</span> 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

  

const Methodology = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      title: "Strategy Call",
      day: "Day 1",
      duration: "30 Minutes",
      benefit: "No Obligation",
      icon: <Phone size={24} />,
      color: "text-[#0052CC]",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      items: [
        "Clarify your goals, business challenges, and target buyers",
        "Identify required pages, integrations, and conversion goals",
        "Receive a fixed quote and clear roadmap",
        "Alignment confirmed upfront — zero surprises later"
      ]
    },
    {
      title: "Design Sprint",
      day: "Days 1–3",
      duration: "Day 1–3",
      benefit: "AI-Accelerated",
      icon: <Palette size={24} />,
      color: "text-[#FF6B35]",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      items: [
        "AI-assisted design concepts generated in parallel",
        "Human designers refine the strongest direction",
        "Homepage and core page previews shared quickly",
        "Fast feedback loop for rapid approvals"
      ]
    },
    {
      title: "Development & SEO Setup",
      day: "Days 3–5",
      duration: "Day 3–5",
      benefit: "Parallel Processing",
      icon: <Code size={24} />,
      color: "text-[#10B981]",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      items: [
        "Approved designs developed into fully functional pages",
        "Mobile responsiveness and speed optimisation",
        "Core SEO setup: meta tags, URL structure, schema-ready architecture",
        "CRM, forms, and analytics integrations completed"
      ]
    },
    {
      title: "QA, Review & Refinement",
      day: "Days 5–6",
      duration: "Day 5–6",
      benefit: "Quality Assured",
      icon: <Search size={24} />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      items: [
        "Cross-browser and device testing",
        "Lighthouse and Core Web Vitals optimisation",
        "Final design and content refinements",
        "Client walkthrough and approval"
      ]
    },
    {
      title: "Launch & Support",
      day: "Day 7",
      duration: "Go Live!",
      benefit: "30–60 Days Support",
      icon: <Rocket size={24} />,
      color: "text-[#0052CC]",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      items: [
        "Domain connection and deployment",
        "Live launch in your own hosting account",
        "GitHub code handover",
        "30–60 days post-launch support included"
      ]
    }
  ];

  const scaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-[#F0F7FF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#0052CC 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space text-[#0F172A] mb-4">
            Your Path to Launch: <br className="hidden md:block"/>
            <span className="text-[#0052CC]">5 Steps</span>, <span className="text-[#FF6B35]">Zero Surprises</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
             FactoryJet's AI-native workflows and expert team deliver high-converting B2B websites in 7 days. Every project follows a structured milestone-driven process, so you always know exactly what happens next.
             <br className="hidden md:block" />
             <span className="italic text-sm">FactoryJet Conversion Architecture™: Traffic Qualification → Intent Mapping → Micro-Commitment Design → Friction Elimination → Conversion Amplification. Every stage of our process is mapped to this framework.</span>
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2 z-0"></div>
          
          <motion.div 
             style={{ scaleY, originY: 0 }}
             className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0052CC] via-[#FF6B35] to-[#10B981] transform md:-translate-x-1/2 z-0"
          />

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    
                    {/* Mobile Timeline Connector */}
                    <div className="md:hidden absolute top-8 -left-[45px] w-12 h-0.5 border-t-2 border-dashed border-slate-300"></div>

                    <div className="flex justify-between items-start mb-4">
                       <div>
                         <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${step.bgColor} ${step.color}`}>
                           {step.duration}
                         </div>
                         <h3 className={`text-2xl font-bold font-space text-[#0F172A]`}>{step.title}</h3>
                         <span className="text-sm font-semibold text-slate-400">{step.day}</span>
                       </div>
                       <div className={`w-10 h-10 rounded-full ${step.bgColor} flex items-center justify-center ${step.color}`}>
                         {step.icon}
                       </div>
                    </div>

                    <div className="space-y-3">
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">What Happens:</p>
                       <ul className="space-y-2">
                         {step.items.map((item, i) => (
                           <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                             <Check size={16} className={`shrink-0 mt-0.5 ${step.color}`} />
                             <span>{item}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                   <motion.div 
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                     className={`w-10 h-10 rounded-full bg-white border-4 ${step.borderColor} flex items-center justify-center z-10 shadow-sm`}
                   >
                     <span className={`font-bold font-space ${step.color}`}>{index + 1}</span>
                   </motion.div>
                </div>

                {/* Empty Side for alignment */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
           <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-full font-bold mb-8">
             <Clock size={16} /> Average Total Launch Time: 7 Days
           </div>
           
           <div className="flex justify-center">
             <motion.button 
               onClick={onCtaClick}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               animate={{ boxShadow: ["0 0 0 rgba(255,107,53,0.4)", "0 0 20px rgba(255,107,53,0)", "0 0 0 rgba(255,107,53,0.4)"] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="bg-[#FF6B35] hover:bg-[#E65020] text-white font-bold text-lg px-10 py-4 rounded-xl shadow-xl flex items-center gap-2 min-h-[56px]"
             >
               Ready to Start? Book Your Strategy Call <ArrowRight size={20} />
             </motion.button>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

const Services = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#0052CC 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 font-space">
            Professional Web Design Services for <span className="bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent">US B2B Companies</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            FactoryJet provides professional web design services for US B2B companies looking to increase leads, improve conversions, and strengthen brand credibility. From high-converting business websites to complex e-commerce platforms, we build scalable digital assets using Next.js, WordPress, <Link href="/us/ecommerce-development" className="text-[#0052CC] hover:text-[#003d99] font-semibold transition-colors">Shopify</Link>, Webflow, and custom React frameworks.
          </p>
        </motion.div>

        {/* Featured Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Website Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col relative group h-full"
          >
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052CC] to-blue-400"></div>
             <div className="absolute top-4 right-4 bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-orange-500/20">
               Most Popular
             </div>
             
             <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-[#0052CC] group-hover:scale-110 transition-transform duration-300">
                  <Globe size={32} />
                </div>
                
                <h3 className="text-3xl font-bold text-[#0F172A] mb-4 font-space">Web Design Solutions</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Websites built to win deals — enterprise-ready design, conversion architecture, SEO-friendly structure, and sub-2-second performance.
                </p>

                <div className="space-y-4 mb-8 flex-grow">
                   {[
                     "Enterprise-Ready Design: Instantly establish credibility with polished, buyer-focused layouts",
                     "Lead Conversion: Clear CTAs guide visitors to request a quote or book a call",
                     "SEO-Friendly Structure: Scalable architecture built for search visibility from day one",
                     "Fast Performance: LCP under 2.5 seconds and strong Core Web Vitals scores",
                     "100% Code Ownership: Full GitHub repository transfer on project completion",
                     "WCAG Accessibility: Best practices aligned with WCAG standards across all builds"
                   ].map((feat, i) => (
                     <div key={i} className="flex items-start gap-3">
                       <CheckCircle size={20} className="text-[#10B981] mt-0.5 shrink-0" />
                       <span className="text-slate-700">{feat}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100">
                   <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-sm text-slate-400 font-medium mb-1">Investment</p>
                        <div className="bg-blue-50 text-[#0052CC] px-4 py-1.5 rounded-lg inline-block font-bold font-space text-lg">
                          Starting at $1,999
                        </div>
                      </div>
                      <div className="text-right">
                         <p className="text-sm text-slate-400 font-medium mb-1">Timeline</p>
                         <p className="text-slate-700 font-semibold">7 Days</p>
                      </div>
                   </div>
                   
                   <button onClick={onCtaClick} className="w-full bg-[#FF6B35] hover:bg-[#E65020] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all min-h-[56px]">
                      Start Your Website Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
             </div>
          </motion.div>

          {/* E-commerce Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col relative group h-full"
          >
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500"></div>
             
             <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart size={32} />
                </div>
                
                <h3 className="text-3xl font-bold text-[#0F172A] mb-4 font-space">E-Commerce Development</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Convert browsers into buyers with optimised product pages, streamlined checkout flows, and mobile-first performance.
                </p>

                <div className="space-y-4 mb-8 flex-grow">
                   {[
                     "Convert Browsers to Buyers: Optimised product pages and frictionless checkout",
                     "Upsells & Repeat Customers: Strategic features that increase average order value",
                     "Scalable Systems: Flexible inventory and payment integration for growth",
                     "Mobile-First Performance: 60%+ of B2B shoppers browse on mobile"
                   ].map((feat, i) => (
                     <div key={i} className="flex items-start gap-3">
                       <CheckCircle size={20} className="text-[#10B981] mt-0.5 shrink-0" />
                       <span className="text-slate-700">{feat}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100">
                   <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-sm text-slate-400 font-medium mb-1">Investment</p>
                        <div className="bg-purple-50 text-purple-700 px-4 py-1.5 rounded-lg inline-block font-bold font-space text-lg">
                          Starting at $4,999
                        </div>
                      </div>
                      <div className="text-right">
                         <p className="text-sm text-slate-400 font-medium mb-1">Timeline</p>
                         <p className="text-slate-700 font-semibold">7–14 Days</p>
                      </div>
                   </div>

                   <button onClick={onCtaClick} className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 group-hover:shadow-lg transition-all min-h-[56px]">
                      Launch Your Store <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Secondary Services */}
        <div className="grid md:grid-cols-2 gap-8">
           {[
             {
               title: "Website Redesign",
               icon: <RefreshCw size={24} />,
               desc: "Modernise your site without losing SEO equity. Optimised for lead generation, usability, and Core Web Vitals performance.",
               price: "$2,499+",
               time: "7 Days",
               color: "text-teal-600",
               bgColor: "bg-teal-50",
               borderColor: "from-teal-500 to-emerald-500",
               cta: "Redesign Your Site"
             },
             {
               title: "Landing Pages",
               icon: <Target size={24} />,
               desc: "High-converting campaign pages for ads or lead magnets. Strategic copy, conversion-focused CTAs, and design built to maximise ROI.",
               price: "$999+",
               time: "5–7 Days",
               color: "text-rose-600",
               bgColor: "bg-rose-50",
               borderColor: "from-rose-500 to-red-500",
               cta: "Create Landing Page"
             }
           ].map((item, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all"
             >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.borderColor}`}></div>
                <div className="flex items-start justify-between mb-4">
                   <div className={`w-12 h-12 ${item.bgColor} ${item.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {item.icon}
                   </div>
                   <div className="text-right">
                      <div className={`text-sm font-bold ${item.color} bg-white border border-slate-100 px-2 py-1 rounded shadow-sm`}>
                        {item.price}
                      </div>
                   </div>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-space">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed h-10">{item.desc}</p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                   <span className="text-slate-400 flex items-center gap-1"><Clock size={14}/> {item.time}</span>
                   <span onClick={onCtaClick} className="text-[#0052CC] font-bold flex items-center gap-1 cursor-pointer hover:underline group-hover:gap-2 transition-all">
                     {item.cta} <ArrowRight size={14} />
                   </span>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

const CaseStudies = () => {
  const [filter, setFilter] = useState("All");

  const projects: Project[] = [
    {
      id: 1,
      company: "WetStone Labs",
      category: "Cybersecurity",
      filterCategory: "Cybersecurity",
      challenge: "Website failed to communicate enterprise-level cybersecurity authority — resulting in low trust signals and underperforming lead quality.",
      solution: "Full brand repositioning with trust-first enterprise UX, structured credibility signals, and optimised service pages targeting decision-makers.",
      quote: "Qualified lead volume more than tripled within 60 days of launch.",
      link: "/case",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      stat: "+210% Qualified Leads"
    },
    {
      id: 2,
      company: "CuraShield AI",
      category: "Healthcare Technology",
      filterCategory: "Healthcare",
      challenge: "Healthcare platform too complex for prospects to evaluate independently — creating friction in the evaluation and buying process.",
      solution: "Simplified navigation structure, interactive product walkthroughs, and optimised CTAs aligned with WCAG and HIPAA-aware design standards.",
      quote: "Sales cycle shortened by 40% — reducing cost of acquisition and increasing close rates.",
      link: "/case",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      stat: "40% Shorter Sales Cycle"
    },
    {
      id: 3,
      company: "MINDSOURCE",
      category: "Enterprise IT Services",
      filterCategory: "IT Services",
      challenge: "Strong organic traffic volume but critically low conversion rates on service pages — traffic not translating to qualified pipeline.",
      solution: "Service-specific landing pages with structured credibility elements, enterprise-grade social proof, and strong CTAs mapped to buyer intent.",
      quote: "3 enterprise contracts attributed directly to redesigned service pages within 90 days.",
      link: "/case",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      stat: "3 Enterprise Contracts Won"
    }
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.filterCategory === filter);

  return (
    <section id="results" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 font-space">
            Case Studies: Measurable Results from <span className="text-[#0052CC]">B2B Websites</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["All", "Cybersecurity", "Healthcare", "IT Services"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? "bg-[#0052CC] text-white shadow-lg shadow-blue-500/30" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={`${project.company} - ${project.category} case study`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0F172A] shadow-sm">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#0F172A] font-space">{project.company}</h3>
                    {project.stat && (
                      <span className="bg-[#10B981]/10 text-[#10B981] text-xs font-bold px-2 py-1 rounded border border-[#10B981]/20">
                        {project.stat}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-sm text-slate-600 line-clamp-2">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Solution</p>
                      <p className="text-sm text-slate-600 line-clamp-2">{project.solution}</p>
                    </div>
                  </div>

                  <a href={project.link} className="inline-flex items-center text-[#0052CC] font-bold text-sm hover:gap-2 transition-all group-hover:text-[#FF6B35]">
                    Read Full Case Study <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const AIAgentServices = () => {
  const aiServices = [
    {
      title: "AI Chatbot Development",
      desc: "Deploy intelligent AI chatbots that answer questions, qualify leads, and support customers 24/7.",
      icon: <MessageSquare size={32} />,
      link: "/services/ai-agent-development/ai-chatbot"
    },
    {
      title: "AI Sales Agents",
      desc: "Automate lead qualification, outreach, and follow-ups with AI-powered sales assistants.",
      icon: <Target size={32} />,
      link: "/services/ai-agent-development/ai-sales-agent"
    },
    {
      title: "AI Marketing Agents",
      desc: "Streamline campaign management, reporting, and content workflows using AI marketing automation.",
      icon: <Rocket size={32} />,
      link: "/services/ai-agent-development/ai-marketing-agent"
    },
    {
      title: "AI Scheduling Agents",
      desc: "Reduce admin work with AI scheduling systems that manage bookings and appointments automatically.",
      icon: <Clock size={32} />,
      link: "/services/ai-agent-development/ai-scheduling-agent"
    },
    {
      title: "Workflow Automation",
      desc: "Automate repetitive business operations with custom AI workflow and backend automation systems.",
      icon: <Workflow size={32} />,
      link: "/services/ai-agent-development/ai-workflow-automation"
    },
    {
      title: "AI Voice / Support Agents",
      desc: "Enhance customer service with voice agents and AI-powered support systems available around the clock.",
      icon: <Headphones size={32} />,
      link: "/ai-customer-support"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 font-space">
            AI Agent Development Services for <span className="bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent">Modern Businesses</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            FactoryJet builds custom AI agent solutions that automate repetitive workflows, improve customer experience, and help businesses scale operations efficiently. From AI chatbots and voice assistants to workflow automation and sales agents, our AI development services help businesses save time, reduce costs, and improve productivity.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {aiServices.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-[#0052CC] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#0052CC] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 font-space">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-[#0052CC] font-semibold hover:text-[#003d99] transition-colors group/link"
              >
                Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    {
      name: "Cybersecurity",
      icon: <ShieldCheck size={32} />,
      desc: "Build authority instantly with a design that signals technical competence and enterprise credibility. Conversion-focused UX and SEO-optimised for competitive keywords.",
      bg: "bg-blue-50",
      color: "text-blue-600"
    },
    {
      name: "Healthcare & MedTech",
      icon: <Stethoscope size={32} />,
      desc: "Websites meeting HIPAA, ADA, and WCAG accessibility standards. Patient-friendly UX that simplifies complex platforms for non-technical buyers.",
      bg: "bg-teal-50",
      color: "text-teal-600"
    },
    {
      name: "IT & Managed Services",
      icon: <Server size={32} />,
      desc: "Stand out in a crowded market with clear, differentiated messaging. Service-specific landing pages and credibility signals built for enterprise procurement.",
      bg: "bg-indigo-50",
      color: "text-indigo-600"
    },
    {
      name: "Professional Services",
      icon: <Briefcase size={32} />,
      desc: "Consulting, legal, and finance. Showcase thought leadership, expert teams, and a conversion-driven value proposition that shortens the sales cycle.",
      bg: "bg-slate-50",
      color: "text-slate-600"
    },
    {
      name: "Manufacturing",
      icon: <Building size={32} />,
      desc: "Highlight process expertise and technical capabilities. B2B buyer-focused UX prioritising product catalogs, case studies, and detailed specifications.",
      bg: "bg-amber-50",
      color: "text-amber-600"
    },
    {
      name: "SaaS",
      icon: <Layers size={32} />,
      desc: "Demonstrate product value through clear messaging and structured demos. Optimise trial sign-ups, onboarding flows, and conversion paths.",
      bg: "bg-purple-50",
      color: "text-purple-600"
    },
    {
      name: "Non-Profits",
      icon: <Gem size={32} />,
      desc: "Convey mission and impact with clear storytelling. Make donations, volunteer sign-ups, and event registrations seamless.",
      bg: "bg-rose-50",
      color: "text-rose-600"
    },
    {
      name: "E-Commerce",
      icon: <ShoppingCart size={32} />,
      desc: "Convert browsers to buyers with optimised product pages and checkout flows. Mobile-first design built for the 60%+ of B2B shoppers browsing on mobile.",
      bg: "bg-green-50",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">
            Industries <span className="text-[#0052CC]">We Serve</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            FactoryJet focuses on B2B industries where trust, technical credibility, and clear messaging drive buying decisions. We don't build generic sites — we build websites engineered to convert qualified buyers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl ${ind.bg} ${ind.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 font-space">{ind.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MeetTheExperts = () => {
  const highlights = [
    { icon: <Sparkles size={20} />, label: "AI-Powered Workflows" },
    { icon: <UserCheck size={20} />, label: "Human Design Expertise" },
    { icon: <Target size={20} />, label: "Conversion Psychology" },
    { icon: <Palette size={20} />, label: "Brand Strategy" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0052CC 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">
            Meet the Experts: <span className="text-[#0052CC]">Human Strategy</span>, <span className="text-[#FF6B35]">AI Speed</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            FactoryJet is built by experienced founders, developers, and digital specialists focused on one outcome: B2B websites that generate qualified pipeline. We combine strategic thinking, technical depth, and modern development practices to build websites that help companies compete at enterprise level.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10 mb-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-50 text-[#0052CC] rounded-xl flex items-center justify-center shrink-0">
              <Command size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] font-space mb-1">Our Philosophy</h3>
              <p className="text-slate-600 leading-relaxed">
                We use AI to automate the time-intensive groundwork — coding foundations, initial wireframes, and performance analysis — freeing our human designers to focus on brand strategy, buyer psychology, and conversion architecture. This hybrid approach delivers elite quality at a speed no traditional agency can match.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-lg border border-slate-100">
                <div className="text-[#0052CC]">{item.icon}</div>
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyFactoryJet = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const reasons = [
    {
      title: "AI-Native Speed",
      icon: <Zap size={24} />,
      statement: "What traditional agencies take 4–6 months, FactoryJet delivers in 7 days. AI-accelerated parallel workflows eliminate bottlenecks and cut approval time significantly.",
      proof: "7-day average delivery across 500+ completed projects.",
      color: "text-[#0052CC]",
      borderColor: "border-[#0052CC]",
      bgColor: "bg-blue-50",
      proofBg: "bg-blue-50/50"
    },
    {
      title: "Premium Quality, Smart Pricing",
      icon: <Gem size={24} />,
      statement: "Websites that perform like $25,000+ agency builds — at a fraction of the cost. AI efficiency reduces wasted hours and passes those savings directly to you.",
      proof: "Enterprise-grade packages starting at $1,999.",
      color: "text-[#FF6B35]",
      borderColor: "border-[#FF6B35]",
      bgColor: "bg-orange-50",
      proofBg: "bg-orange-50/50"
    },
    {
      title: "100% Code Ownership",
      icon: <Lock size={24} />,
      statement: "Every project includes full GitHub repository transfer on completion. Your code, your assets, your hosting — all in your name. Zero vendor lock-in, zero ongoing dependency on FactoryJet.",
      proof: "Full ownership transfer confirmed in writing before project start.",
      color: "text-[#10B981]",
      borderColor: "border-[#10B981]",
      bgColor: "bg-green-50",
      proofBg: "bg-green-50/50"
    },
    {
      title: "Zero Vendor Lock-In",
      icon: <GitMerge size={24} />,
      statement: "Hosting and deployment are always configured in your own account — never ours. No proprietary systems. No exit fees. Switch, scale, or hand off to any developer at any time.",
      proof: "Every client retains 100% control of hosting, domain, and assets.",
      color: "text-[#8B5CF6]",
      borderColor: "border-[#8B5CF6]",
      bgColor: "bg-purple-50",
      proofBg: "bg-purple-50/50"
    },
    {
      title: "North American Support",
      icon: <Headphones size={24} />,
      statement: "Support team available during US business hours. Real conversations — no automated ticketing bots.",
      proof: "Average 2.3-hour response time.",
      color: "text-[#14B8A6]",
      borderColor: "border-[#14B8A6]",
      bgColor: "bg-teal-50",
      proofBg: "bg-teal-50/50"
    },
    {
      title: "Transparent Process",
      icon: <Flag size={24} />,
      statement: "Fixed pricing. Clear project steps. Known timelines. Fixed-price quotes delivered within 24 hours of your strategy call — no discovery phase required before seeing a number.",
      proof: "Fixed-price quotes on every project, every time.",
      color: "text-[#F59E0B]",
      borderColor: "border-[#F59E0B]",
      bgColor: "bg-amber-50",
      proofBg: "bg-amber-50/50"
    },
    {
      title: "Satisfaction Guaranteed",
      icon: <ThumbsUp size={24} />,
      statement: "14-day money-back guarantee if the design phase doesn't meet expectations. Every project is built to exceed stated goals.",
      proof: "Money-back guarantee on all projects.",
      color: "text-[#EC4899]",
      borderColor: "border-[#EC4899]",
      bgColor: "bg-pink-50",
      proofBg: "bg-pink-50/50"
    },
    {
      title: "Certified Platform Expertise",
      icon: <FileText size={24} />,
      statement: "Deep expertise across Next.js, WordPress, Shopify, Webflow, and custom React stacks. Certified partnerships ensure every website is scalable, secure, and marketing-ready from launch.",
      proof: "Certified across all major B2B web platforms.",
      color: "text-[#06B6D4]",
      borderColor: "border-[#06B6D4]",
      bgColor: "bg-cyan-50",
      proofBg: "bg-cyan-50/50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">
            Why US Companies Choose FactoryJet for <span className="text-[#0052CC]">B2B Web Design</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className={`bg-white rounded-2xl p-8 shadow-md border-l-4 ${reason.borderColor} transition-all duration-300 h-full flex flex-col group`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-full ${reason.bgColor} ${reason.color} flex items-center justify-center relative`}>
                  <div className={`absolute inset-0 rounded-full ${reason.bgColor} animate-ping opacity-20`}></div>
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                    {reason.icon}
                  </motion.div>
                </div>
                <div className="text-4xl font-bold text-slate-100 font-space select-none">
                  0{index + 1}
                </div>
              </div>

              <h3 className={`text-xl font-bold mb-4 font-space ${reason.color}`}>{reason.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                {reason.statement}
              </p>

              <div className={`mt-auto p-4 rounded-xl ${reason.proofBg} border border-white/50 group-hover:bg-opacity-80 transition-colors`}>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1 block">The Proof:</span>
                <span className={`text-sm font-bold ${reason.color}`}>
                  {reason.proof}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
           <a onClick={(e) => { e.preventDefault(); onCtaClick(); }} href="#contact" className="group inline-flex items-center gap-2 text-[#FF6B35] font-bold text-lg px-8 py-3 rounded-full hover:bg-[#FF6B35]/10 transition-all cursor-pointer min-h-[44px]">
             Experience the FactoryJet Difference — Book Your Free Strategy Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const tiers = [
    {
      title: "Launch Plan",
      price: "$1,999",
      description: "New businesses and straightforward B2B websites",
      features: [
        "5–7 pages",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact forms",
        "CMS setup (WordPress / Webflow)",
        "100% code ownership + GitHub transfer",
        "Hosting in client's own account",
        "30 days post-launch support"
      ],
      timeline: "7 Days",
      ctaType: "outline"
    },
    {
      title: "Growth Plan",
      price: "$3,999–$6,999",
      description: "Established B2B businesses that need performance and pipeline growth",
      features: [
        "10–15 pages",
        "Advanced SEO optimisation",
        "Blog / content hub setup",
        "Analytics and conversion tracking",
        "CRM integration",
        "100% code ownership + GitHub transfer",
        "Hosting in client's own account",
        "WCAG accessibility best practices",
        "45 days post-launch support"
      ],
      timeline: "7 Days",
      isPopular: true,
      ctaType: "primary"
    },
    {
      title: "Scale Plan",
      price: "$7,999–$14,999",
      description: "E-commerce and custom-functionality builds",
      features: [
        "E-commerce store or web application",
        "Custom integrations",
        "Advanced analytics setup",
        "Priority support queue",
        "100% code ownership + GitHub transfer",
        "Hosting in client's own account",
        "60 days post-launch support"
      ],
      timeline: "7–14 Days",
      ctaType: "outline"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-[#F0F7FF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#0052CC 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 font-space"
          >
            Transparent Web Design Pricing for <span className="text-[#0052CC]">US Businesses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 max-w-3xl mx-auto"
          >
            No hidden fees. No surprise invoices. Know your full investment before we begin. All packages include 100% code ownership, zero vendor lock-in, and hosting configured in your own account.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 items-start mb-16"
        >
          {tiers.map((tier, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl flex flex-col h-full bg-white transition-all duration-300 ${
                tier.isPopular 
                  ? 'border-2 border-[#FF6B35] shadow-2xl scale-105 z-10' 
                  : 'border border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF6B35] text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/30 flex items-center gap-2">
                  <Star size={12} fill="currentColor" /> Most Popular
                </div>
              )}

              <div className="p-8 pb-0">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">{tier.title}</h3>
                <div className="mb-2">
                  <span className="text-sm text-slate-400 font-medium block mb-1">Starting at</span>
                  <div className="flex items-start">
                    <h4 className="text-3xl font-bold font-space text-[#0052CC] leading-none">{tier.price}</h4>
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-medium border-b border-slate-100 pb-6 mb-6">
                  Best for: {tier.description}
                </p>
              </div>

              <div className="px-8 space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-[15px] text-slate-600">
                    <div className="bg-[#10B981]/10 rounded-full p-0.5 mt-0.5 shrink-0">
                      <Check size={14} className="text-[#10B981]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 pt-0 mt-auto">
                 <div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium mb-6 bg-slate-50 py-2 rounded-lg">
                    <Clock size={16} className="text-[#0052CC]" />
                    <span>Timeline: {tier.timeline}</span>
                 </div>

                 <button onClick={onCtaClick} className={`w-full py-4 rounded-xl font-bold text-[16px] transition-all flex items-center justify-center gap-2 group min-h-[56px] ${
                   tier.ctaType === 'primary'
                     ? 'bg-[#FF6B35] hover:bg-[#E65020] text-white shadow-lg shadow-orange-500/20'
                     : 'bg-white border-2 border-slate-200 text-[#0F172A] hover:border-[#0F172A] hover:bg-slate-50'
                 }`}>
                   Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise Option */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-md transition-shadow"
        >
           <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-[#0F172A]">
                 <Building size={32} />
              </div>
              <div>
                 <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-space">Need something bigger?</h3>
                 <p className="text-slate-600 max-w-xl">
                   Enterprise builds, multi-site architectures, and complex custom integrations. 
                   <span className="block mt-1 font-semibold text-[#0052CC]">Starting at $15,000+</span>
                 </p>
              </div>
           </div>
           <button onClick={onCtaClick} className="whitespace-nowrap px-8 py-3 rounded-xl font-bold border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors flex items-center gap-2 group min-h-[56px]">
             Request Custom Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </motion.div>

        <div className="text-center mt-12">
           <p className="text-slate-500">
             Not sure which plan fits? <a onClick={(e) => { e.preventDefault(); onCtaClick(); }} href="#contact" className="text-[#0052CC] font-bold hover:underline cursor-pointer">Talk to us — we'll give you an honest recommendation →</a>
           </p>
        </div>
      </div>
    </section>
  );
};

const AccordionItem: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className={`rounded-lg mb-2 overflow-hidden transition-all duration-300 ${
        isOpen ? 'bg-blue-50/40 shadow-sm' : 'bg-white'
      }`}
    >
      <button 
        className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none relative group min-h-[64px]"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {/* Left Accent Line */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#0052CC] transition-transform duration-300 ${
            isOpen ? 'scale-y-100' : 'scale-y-0'
        }`} />
        
        <span className={`text-[18px] font-space font-semibold pr-6 transition-colors ${
          isOpen ? 'text-[#0F172A]' : 'text-[#0F172A] group-hover:text-[#0052CC]'
        }`}>
          {question}
        </span>
        
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isOpen ? 'bg-[#0052CC]/10 text-[#0052CC]' : 'bg-transparent text-[#0052CC]'
        }`}>
           <motion.div 
             animate={{ rotate: isOpen ? 180 : 0 }}
             transition={{ duration: 0.3 }}
           >
             {isOpen ? <Minus size={20} /> : <Plus size={20} />}
           </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ChooseWebDesign = () => {
  const factors = [
    {
      title: "Proven results, not just portfolios",
      desc: "A credible B2B web design agency should demonstrate measurable outcomes from past projects — qualified lead increases, page speed improvements, and conversion rate lifts. Screenshots of design are not proof. Numbers are.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Industry-specific experience",
      desc: "Websites for B2B sectors like cybersecurity, healthcare, and IT services require different messaging architecture and compliance awareness than consumer sites. Agencies with relevant sector experience understand buyer psychology and the signals enterprise procurement teams look for.",
      icon: <Briefcase size={24} />
    },
    {
      title: "SEO and Core Web Vitals competence",
      desc: "A high-performing B2B website must be built with strong SEO foundations, LCP under 2.5 seconds, and mobile-first design. Core Web Vitals are a ranking signal — but they are not a conversion strategy on their own.",
      icon: <Search size={24} />
    },
    {
      title: "Transparent, fixed pricing",
      desc: "Reliable agencies explain project scope, timelines, and pricing before work begins. Avoid firms that require multi-week discovery phases before sharing a quote — that structure benefits the agency, not you.",
      icon: <FileText size={24} />
    },
    {
      title: "Full code ownership and zero lock-in",
      desc: "The best web design agencies in the USA deliver your project with complete code ownership and no ongoing vendor dependency. Your hosting, domain, and codebase should be yours from day one.",
      icon: <Lock size={24} />
    },
    {
      title: "Platform expertise across modern stacks",
      desc: "Top B2B agencies are fluent in WordPress, Webflow, Shopify, Next.js, and custom React builds — and recommend the right platform based on your actual business requirements, not internal capability gaps.",
      icon: <Layers size={24} />
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cities Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-xl font-bold text-[#0F172A] mb-3 font-space">B2B Web Design Services Across the United States</h3>
          <p className="text-slate-500 mb-4 max-w-2xl mx-auto">
            FactoryJet serves businesses across the United States, including major commercial hubs:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "New York", href: "/us/services/web-design/new-york" },
              { name: "Cleveland", href: "/us/services/web-design/cleveland" },
              { name: "Chicago", href: "/us/services/web-design" },
              { name: "Dallas", href: "/us/services/web-design" },
              { name: "San Francisco", href: "/us/services/web-design" },
              { name: "Boston", href: "/us/services/web-design" },
              { name: "Los Angeles", href: "/us/services/web-design" },
              { name: "Austin", href: "/us/services/web-design" },
              { name: "Denver", href: "/us/services/web-design" },
            ].map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-600 shadow-sm flex items-center gap-1.5 hover:border-[#0052CC] hover:text-[#0052CC] transition-colors">
                <MapPin size={14} className="text-[#0052CC]" /> {city.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate-400 mt-4 max-w-2xl mx-auto">
            Our remote-first process means any US-based business can work with our design and development team with the same speed and quality — regardless of location. Serving businesses across the United States with North American support hours.
          </p>
        </motion.div>

        {/* How to Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">
            How to Choose the Right <span className="text-[#0052CC]">Web Design Company</span> in the USA
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Choosing the right web design company in the USA can determine whether your website becomes a lead-generation asset or an expensive liability. Here's what to evaluate before hiring an agency:
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {factors.map((factor, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 text-[#0052CC] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {factor.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2 font-space">{factor.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{factor.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is a B2B web design agency?",
      answer: "A B2B web design agency builds websites specifically designed to generate qualified leads, establish buyer trust, and support long sales cycles for business-focused companies. Unlike general web studios, B2B agencies structure every design decision around business outcomes — not aesthetics alone."
    },
    {
      question: "How long does it take to build a B2B website?",
      answer: "FactoryJet delivers most standard B2B websites in 7 days. A typical 5–10 page project includes strategy on day one, design sprint within the first 3 days, development and QA by days 5–6, and live launch on day 7. Complex e-commerce or custom integration projects may extend to 7–14 days."
    },
    {
      question: "How much does a professional B2B website cost in the USA?",
      answer: "B2B website design in the USA typically ranges from $1,999 for a focused business website to $15,000+ for enterprise builds with custom integrations. FactoryJet's fixed-price model means your full investment is confirmed before work begins — no discovery-phase billing, no surprise invoices."
    },
    {
      question: "Which platform is best for a B2B business website?",
      answer: "The right platform depends on your business requirements. WordPress offers maximum SEO flexibility and content control. Webflow provides design precision with manageable maintenance. Shopify is optimised for e-commerce conversion. Next.js and custom React stacks suit high-performance or application-like builds. FactoryJet recommends based on your goals — not internal capability constraints."
    },
    {
      question: "Can you redesign my website without losing Google rankings?",
      answer: "Yes. FactoryJet's redesign process preserves existing URL structures, redirects, and SEO equity. We conduct a technical audit before migration and monitor search performance post-launch to protect rankings built over time."
    },
    {
      question: "Do I own the code after the project?",
      answer: "Yes — 100%. Every FactoryJet project includes a full GitHub repository transfer upon completion. Your code, design assets, and all project files are yours outright. No retainer required. No ongoing dependency."
    },
    {
      question: "Is hosting included, and do you mark it up?",
      answer: "Hosting and deployment are always configured in your own account — never ours. There is no hosting markup, no proprietary infrastructure, and no exit fee. You maintain full control of your hosting environment from day one."
    },
    {
      question: "Do you use templates?",
      answer: "No. Every FactoryJet website is built from a custom design brief. We do not resell or modify off-the-shelf templates. Custom builds allow us to structure every page for your specific buyers and conversion goals."
    },
    {
      question: "How are you so much faster than other agencies?",
      answer: "FactoryJet was built AI-native from day one. We use AI to run parallel workstreams — concept generation, wireframing, and development scaffolding — that traditional agencies run sequentially. Human designers and developers focus on strategy, refinement, and quality assurance. The result is 7-day delivery without sacrificing quality."
    },
    {
      question: "Will I be able to update the site myself?",
      answer: "Yes. All builds include a CMS — WordPress or Webflow depending on your platform — that allows your team to update content, images, blog posts, and pages without developer involvement."
    },
    {
      question: "What if I don't like the design?",
      answer: "FactoryJet offers a 14-day money-back guarantee if the design phase does not meet expectations. We also build in a structured revision process to ensure the final design reflects your brand and goals before development begins."
    },
    {
      question: "Do you write the copy?",
      answer: "Copywriting is available as an add-on. We work with your existing content or develop new copy aligned with your buyer's journey and conversion goals. Ask about this during your strategy call."
    },
    {
      question: "What is a conversion-focused website?",
      answer: "A conversion-focused website is engineered to guide visitors toward a specific action — booking a call, requesting a quote, or downloading a resource — rather than simply presenting information. Every design decision, from page structure to CTA placement, is mapped to buyer intent and the commercial goal of the page."
    },
    {
      question: "What industries do you specialise in?",
      answer: "FactoryJet focuses on B2B industries where technical credibility and buyer trust drive conversions: cybersecurity, healthcare and MedTech, IT and managed services, SaaS, professional services, and manufacturing. See our case studies for sector-specific results."
    },
    {
      question: "How do I get started?",
      answer: "Book a free strategy call. We'll learn about your goals, current challenges, and target buyers — and deliver a clear roadmap and fixed quote within 24 hours. No obligation. No discovery-phase billing."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">
            Frequently Asked Questions: B2B Web Design in the USA
          </h2>
          <p className="text-slate-500">
            Everything you need to know about working with us.
          </p>
        </div>
        
        <div>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BuiltByExperts = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 font-space">
          Built by Experts in B2B Growth and Development
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Our team combines experienced developers, strategists, and conversion specialists with 10+ years of combined expertise in digital growth, branding, and website development. Every project is built with one goal: creating websites that help businesses generate more qualified pipeline.
        </p>
      </div>
    </section>
  );
};

const FooterLocal = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tight mb-6 block font-poppins">
              Factory<span className="text-[#FF6B35]">Jet</span>
            </span>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              The AI-native B2B web design agency for US companies. We build enterprise-grade, conversion-focused websites in 7 days — with 100% code ownership and zero vendor lock-in.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, label: 'Twitter', href: 'https://x.com/FactoryJet_Tech' },
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/factoryjet' },
                { Icon: Mail, label: 'Email', href: 'mailto:connect@factoryjet.com' }
              ].map(({ Icon, label, href }, i) => (
                <a key={i} href={href} target={label !== 'Email' ? '_blank' : undefined} rel={label !== 'Email' ? 'noopener noreferrer' : undefined} aria-label={`Connect with us on ${label}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35] transition-colors text-slate-400 hover:text-white">
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-space">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/us/services/web-design" className="hover:text-[#FF6B35] transition-colors">Web Design</a></li>
              <li><a href="/us/services/ecommerce-development" className="hover:text-[#FF6B35] transition-colors">E-Commerce</a></li>
              <li><a href="/services/ai-agent-development" className="hover:text-[#FF6B35] transition-colors">AI Agent Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-space">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/case" className="hover:text-[#FF6B35] transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-[#FF6B35] transition-colors">Process</a></li>
              <li><a href="#pricing" className="hover:text-[#FF6B35] transition-colors">Pricing</a></li>
              <li><a onClick={(e) => { e.preventDefault(); onCtaClick(); }} href="#contact" className="hover:text-[#FF6B35] transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 FactoryJet Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function UsHomePage() {
  const { openModal } = useContactModal();
  const openUsModal = () => openModal('us');

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-inter selection:bg-[#FF6B35] selection:text-white">
      <Header basePath="/us" />
      <Hero onCtaClick={openUsModal} />
      <TestimonialSection />
      <ProblemSection onCtaClick={openUsModal} />
      <Services onCtaClick={openUsModal} />
      <AIAgentServices />
      <Industries />
      <CaseStudies />
      <Methodology onCtaClick={openUsModal} />
      <BuiltByExperts />
      <MeetTheExperts />
      <WhyFactoryJet onCtaClick={openUsModal} />
      <Pricing onCtaClick={openUsModal} />
      <ChooseWebDesign />
      <FAQ />
      <section id="contact" className="bg-[#0F172A] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0052CC]/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">
            Transform Your B2B Website Into a <br/> Lead-Generating Machine
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Stop losing qualified leads to competitors with faster, higher-converting websites. Partner with FactoryJet — a B2B web design agency USA businesses trust — to launch a high-converting, performance-driven website in 7 days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openUsModal}
              className="bg-[#FF6B35] hover:bg-[#E65020] text-white font-bold text-xl px-12 py-5 rounded-xl shadow-2xl shadow-orange-600/30 hover:scale-105 transition-all flex items-center justify-center gap-3 min-h-[64px]"
            >
              Get Your Free Strategy Call <ArrowRight size={24} />
            </button>
            <button
              onClick={openUsModal}
              className="bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold text-xl px-12 py-5 rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-3 min-h-[64px]"
            >
              Request a Free Technical & SEO Audit <ArrowRight size={24} />
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
            <Lock size={14} /> No obligation. 100% free consultation.
          </p>
        </div>
      </section>
      <FooterUS onCtaClick={openUsModal} />
    </div>
  );
}

export default UsHomePage;