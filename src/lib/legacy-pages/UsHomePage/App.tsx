'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
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
    <section className="relative h-[100dvh] flex items-center overflow-hidden bg-[#0F172A] text-white pt-24 pb-8">
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

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center h-full max-h-[800px]">
          
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
              Stop Losing Contracts to Competitors With <br className="hidden lg:block"/>
              <span className="bg-gradient-to-r from-[#0052CC] via-[#3B82F6] to-[#FF6B35] bg-clip-text text-transparent pb-1">Better Websites.</span>
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
              FactoryJet is the AI-native web design agency that builds premium B2B websites in <strong className="text-white font-semibold">2-4 weeks—not 6 months</strong>. We've launched 523 websites for healthcare, cybersecurity, and professional services companies.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="hidden lg:flex flex-wrap items-center gap-6 mb-8 text-sm font-medium text-slate-400"
               style={{ fontFamily: "'Inter', Arial, sans-serif" }}
            >
              {[
                { icon: <Check size={18} className="text-[#0052CC]" />, val: 523, label: "Websites" },
                { icon: <Clock size={18} className="text-[#FF6B35]" />, val: 17, label: "Avg. Delivery", suffix: " Days", staticVal: true },
                { icon: <Star size={18} className="text-yellow-500" fill="currentColor" />, val: 4.9, label: "Client Rating", suffix: "/5", staticVal: true },
                { icon: <Flag size={18} className="text-blue-400" />, val: 0, label: "Agency", textOverride: "US Based", staticVal: true }
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
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent border border-white/20 text-slate-300 font-medium text-base md:text-lg px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors hover:border-white/40 min-h-[48px]"
                style={{ fontFamily: "'Inter', Arial, sans-serif" }}
              >
                View Case Studies
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
      name: "David Chen",
      title: "CEO, WetStone Labs",
      industry: "Enterprise Cybersecurity",
      logoName: "WetStone Labs",
      metrics: "2x Lead Generation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200",
      icon: <Shield size={16} />
    },
    {
      quote: "They understood our technical product and made it accessible to our healthcare buyers. That's rare. The new design system has completely transformed how we present our solution.",
      name: "Sarah Jenkins",
      title: "CTO, CuraShield AI",
      industry: "Healthcare Cybersecurity",
      logoName: "CuraShield AI",
      metrics: "40% Faster Sales Cycle",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200",
      icon: <Hexagon size={16} />
    },
    {
      quote: "Our new site has been instrumental in our government contracting conversations. It looks like a company that can handle serious projects. The credibility boost was immediate.",
      name: "Michael Ross",
      title: "Director of Ops, MINDSOURCE",
      industry: "IT Services",
      logoName: "MINDSOURCE",
      metrics: "3 Major Contracts Won",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200",
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
                            <div className="relative group/avatar cursor-pointer">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={`${testimonials[currentIndex].name}, ${testimonials[currentIndex].title}`}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                                    width={64}
                                    height={64}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity">
                                    <Play size={24} className="text-white fill-current" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-space font-bold text-[#0F172A] text-lg">{testimonials[currentIndex].name}</h4>
                                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                                    <span>{testimonials[currentIndex].title}</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span className="flex items-center gap-1 font-medium text-slate-500">
                                        {testimonials[currentIndex].icon} {testimonials[currentIndex].logoName}
                                    </span>
                                </div>
                                <div className="text-xs text-[#0052CC] font-medium mt-1 cursor-pointer hover:underline">Watch Video Story (2:15)</div>
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
            The Website Industry Has a Dirty Secret: <br className="hidden md:block" />
            They're Designed to Drain Your Budget
          </h2>
          <p className="text-xl text-[#64748B]">You've probably experienced at least one of these scenarios:</p>
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
                        <p className="text-slate-300 italic">"Our discovery phase will take 6-8 weeks..."</p>
                    </div>
                    
                    <div className="border-l-2 border-red-500/30 pl-4">
                        <p className="text-sm text-red-400 uppercase tracking-wide font-semibold mb-1">Translation</p>
                        <p className="text-slate-300">They're billing you <span className="text-white font-bold">$15,000</span> before a single pixel is designed.</p>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed pt-2">
                        Meanwhile, your competitor—who hired a faster agency—has already launched their new site and is ranking for your keywords.
                    </p>
                </div>
            </div>
            
            <div className="bg-slate-900/50 p-6 border-t border-slate-800">
                <div className="inline-block bg-red-500/10 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    Hidden Cost
                </div>
                <p className="text-sm text-slate-300">
                    Every month without a converting website costs you 5-15 qualified leads. At a <span className="text-white font-bold">$75k deal value</span>, that's <span className="text-red-400 font-bold">$50k-$150k in lost revenue.</span>
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
                        <p className="text-slate-300">Three months later, you have a template site with broken mobile layouts, zero SEO, and copy that reads like it was written by a robot.</p>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed pt-2">
                        Your sales team is embarrassed to send prospects to it. Your best leads are bouncing within 8 seconds.
                    </p>
                </div>
            </div>
            
            <div className="bg-slate-900/50 p-6 border-t border-slate-800">
                <div className="inline-block bg-amber-500/10 text-amber-400 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    Hidden Cost
                </div>
                <p className="text-sm text-slate-300">
                    Cheap sites have <span className="text-white font-bold">73% higher bounce rates.</span> Every visitor you lose is a deal you'll never close.
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
                        <p className="text-blue-50">Premium agency quality at smart pricing. <span className="font-bold text-white">2-4 week delivery</span> instead of 6 months.</p>
                    </div>

                    <p className="text-blue-100 text-sm leading-relaxed pt-2">
                        We're an <span className="font-semibold text-white">AI-native agency</span>—meaning we built our entire operation around AI from day one. Not AI bolted onto old processes.
                    </p>
                </div>
            </div>
            
            <div className="bg-[#000000]/20 p-6 border-t border-white/10 relative z-10">
                <div className="inline-block bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider shadow-sm">
                    The Result
                </div>
                <p className="text-sm text-blue-50">
                    Launch in weeks. Look enterprise-grade. <span className="text-white font-bold border-b border-[#FF6B35]/50">Pay a fraction of traditional agency fees.</span>
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
      duration: "30 Mins",
      benefit: "No Obligation",
      icon: <Phone size={24} />,
      color: "text-[#0052CC]",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      items: [
        "We learn your goals, challenges, and vision",
        "You ask every question you have",
        "We tell you honestly if we're the right fit",
        "You get a clear roadmap and quote"
      ]
    },
    {
      title: "Design Sprint",
      day: "Days 2-6",
      duration: "Week 1",
      benefit: "AI-Accelerated",
      icon: <Palette size={24} />,
      color: "text-[#FF6B35]",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      items: [
        "AI workflows generate concepts based on your brand",
        "Human designers refine the strongest directions",
        "You see real designs within 5 days",
        "We iterate until you say \"That's it\""
      ]
    },
    {
      title: "Development",
      day: "Days 7-14",
      duration: "Weeks 2-3",
      benefit: "Parallel Processing",
      icon: <Code size={24} />,
      color: "text-[#10B981]",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      items: [
        "Approved designs become functional pages",
        "SEO foundations installed (meta, structure, speed)",
        "Integrations connected (analytics, CRM, forms)",
        "Mobile responsiveness tested across 12+ devices"
      ]
    },
    {
      title: "Review & Refine",
      day: "Days 15-17",
      duration: "Week 3",
      benefit: "Unlimited Revisions",
      icon: <Search size={24} />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      items: [
        "Full walkthrough of your completed site",
        "You request changes—we make them fast",
        "Content finalized and loaded",
        "Final QA across browsers and devices"
      ]
    },
    {
      title: "Launch & Support",
      day: "Day 18+",
      duration: "Go Live!",
      benefit: "30-60 Days Support",
      icon: <Rocket size={24} />,
      color: "text-[#0052CC]",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      items: [
        "We handle domain configuration and deployment",
        "Your site goes live (celebration encouraged!)",
        "30-60 days of post-launch support included",
        "Bug fixes and performance monitoring covered"
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
             We've optimized every day of the process to get you live faster without cutting corners.
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
             <Clock size={16} /> Average Total: 17 Days
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
            What We Build: <span className="bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent">Premium Digital Products</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            From high-converting websites to complex e-commerce stores, we build digital assets that drive revenue.
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
                
                <h3 className="text-3xl font-bold text-[#0F172A] mb-4 font-space">Websites That Win Deals</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Your website is your 24/7 sales rep. When a prospect Googles you at 11pm before tomorrow's meeting, what do they see?
                </p>

                <div className="space-y-4 mb-8 flex-grow">
                   {[
                     "Establish instant credibility (look enterprise-ready)",
                     "Convert visitors to leads (strategic CTAs)",
                     "Rank in search (SEO foundations built in)",
                     "Load fast (sub-2-second load times)"
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
                         <p className="text-slate-700 font-semibold">2-3 Weeks</p>
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
                
                <h3 className="text-3xl font-bold text-[#0F172A] mb-4 font-space">Online Stores That Sell</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Beautiful isn't enough. Your store needs to convert browsers into buyers, then buyers into repeat customers.
                </p>

                <div className="space-y-4 mb-8 flex-grow">
                   {[
                     "Minimize cart abandonment (optimized checkout)",
                     "Maximize average order value (strategic upsells)",
                     "Scale with your growth (inventory, payments)",
                     "Work on mobile (where 60%+ of your traffic shops)"
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
                         <p className="text-slate-700 font-semibold">3-5 Weeks</p>
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
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { 
               title: "Mobile Apps", 
               icon: <Smartphone size={24} />, 
               desc: "Cross-platform apps (React Native) for businesses ready to go beyond web.",
               price: "$12,999",
               time: "6-8 weeks",
               color: "text-indigo-600",
               bgColor: "bg-indigo-50",
               borderColor: "from-indigo-500 to-blue-500"
             },
             { 
               title: "Website Redesigns", 
               icon: <RefreshCw size={24} />, 
               desc: "Transform your outdated site without losing SEO equity.",
               price: "$2,499",
               time: "2-4 weeks",
               color: "text-teal-600",
               bgColor: "bg-teal-50",
               borderColor: "from-teal-500 to-emerald-500"
             },
             { 
               title: "Landing Pages", 
               icon: <Target size={24} />, 
               desc: "High-converting campaign pages that turn ads into revenue.",
               price: "$999",
               time: "5-7 days",
               color: "text-rose-600",
               bgColor: "bg-rose-50",
               borderColor: "from-rose-500 to-red-500"
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
                        {item.price}+
                      </div>
                   </div>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-space">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed h-10">{item.desc}</p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                   <span className="text-slate-400 flex items-center gap-1"><Clock size={14}/> {item.time}</span>
                   <span className="text-[#0052CC] font-bold flex items-center gap-1 cursor-pointer hover:underline group-hover:gap-2 transition-all">
                     Details <ArrowRight size={14} />
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
      challenge: "Outdated site didn't reflect enterprise status",
      solution: "Modern, trust-focused design with clear value prop",
      quote: "Our sales team finally has something they're proud to share.",
      link: "#",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      stat: "+210% Leads"
    },
    {
      id: 2,
      company: "CuraShield",
      category: "Healthcare",
      filterCategory: "Healthcare",
      challenge: "Complex product was hard to understand",
      solution: "Simplified UX with interactive product tours",
      quote: "They understood our technical product immediately.",
      link: "#",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      stat: "40% Faster Sales"
    },
    {
      id: 3,
      company: "MINDSOURCE",
      category: "IT Services",
      filterCategory: "IT Services",
      challenge: "Low conversion on service pages",
      solution: "Service-specific landing pages with strong CTAs",
      quote: "The credibility boost was immediate.",
      link: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      stat: "3 Major Contracts"
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
            Real Results for <span className="text-[#0052CC]">Real Companies</span>
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

                  <a href={project.link} onClick={(e) => e.preventDefault()} className="inline-flex items-center text-[#0052CC] font-bold text-sm hover:gap-2 transition-all group-hover:text-[#FF6B35]">
                    View Case Study <ArrowRight size={16} className="ml-1" />
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

const Industries = () => {
  const industries = [
    {
      name: "Cybersecurity",
      icon: <ShieldCheck size={32} />,
      desc: "Trust is your currency. We build sites that signal authority and technical competence instantly.",
      bg: "bg-blue-50",
      color: "text-blue-600"
    },
    {
      name: "Healthcare & MedTech",
      icon: <Stethoscope size={32} />,
      desc: "Navigate complex compliance needs while creating accessible, patient-friendly digital experiences.",
      bg: "bg-teal-50",
      color: "text-teal-600"
    },
    {
      name: "IT & Managed Services",
      icon: <Server size={32} />,
      desc: "Differentiate from the sea of sameness. Show your specific expertise and technical depth.",
      bg: "bg-indigo-50",
      color: "text-indigo-600"
    },
    {
      name: "Professional Services",
      icon: <Briefcase size={32} />,
      desc: "For consultants, legal, and finance. We highlight your people and thought leadership.",
      bg: "bg-slate-50",
      color: "text-slate-600"
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
            Specialized in <span className="text-[#0052CC]">Complex Industries</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We don't do restaurants or dog walkers. We build for B2B companies where trust and clarity are paramount.
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

const WhyFactoryJet = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const reasons = [
    {
      title: "AI-Native Speed",
      icon: <Zap size={24} />,
      statement: "What takes traditional agencies 4-6 months, we deliver in 2-4 weeks. Not by cutting corners—by eliminating waste. Our AI-accelerated workflows generate more options, faster decisions, and parallel processing.",
      proof: "17-day average project completion across 47 recent projects.",
      color: "text-[#0052CC]",
      borderColor: "border-[#0052CC]",
      bgColor: "bg-blue-50",
      proofBg: "bg-blue-50/50"
    },
    { 
      title: "Premium Quality, Smart Pricing",
      icon: <Gem size={24} />,
      statement: "We don't compete with $500 template sites. We compete with $25,000+ agencies—and win on quality while charging a fraction of the price. Our AI efficiencies translate to savings we pass to you.",
      proof: "Starting at $1,999 for websites that look like they cost 10x more.",
      color: "text-[#FF6B35]",
      borderColor: "border-[#FF6B35]",
      bgColor: "bg-orange-50",
      proofBg: "bg-orange-50/50"
    },
    {
      title: "Proven With US Businesses",
      icon: <Flag size={24} />,
      statement: "We're not pitching capabilities—we're showing results. Real US companies in cybersecurity, healthcare, and IT services trust us with their digital presence.",
      proof: "6 active US client relationships with documented outcomes.",
      color: "text-[#10B981]",
      borderColor: "border-[#10B981]",
      bgColor: "bg-green-50",
      proofBg: "bg-green-50/50"
    },
    {
      title: "North American Support",
      icon: <Headphones size={24} />,
      statement: "Our client success team operates from Ontario, Canada. Same timezone. Real conversations. When you have a question, you get a human—not a chatbot, not a 48-hour email delay.",
      proof: "Average response time: 2.3 hours during business days.",
      color: "text-[#8B5CF6]",
      borderColor: "border-[#8B5CF6]",
      bgColor: "bg-purple-50",
      proofBg: "bg-purple-50/50"
    },
    {
      title: "Transparent Process",
      icon: <FileText size={24} />,
      statement: "No mysterious 'discovery phases.' No scope creep. No surprise invoices. You know exactly where your project stands, what's coming next, and what you're paying.",
      proof: "Fixed-price quotes delivered within 24 hours of strategy call.",
      color: "text-[#14B8A6]",
      borderColor: "border-[#14B8A6]",
      bgColor: "bg-teal-50",
      proofBg: "bg-teal-50/50"
    },
    {
      title: "Satisfaction Guaranteed",
      icon: <ThumbsUp size={24} />,
      statement: "If you're not satisfied with the direction of your project after the design phase, we'll refund your deposit. No questions. No hassle. We're confident in our work—and we'll prove it.",
      proof: "14-day money-back guarantee on all projects.",
      color: "text-[#F59E0B]",
      borderColor: "border-[#F59E0B]",
      bgColor: "bg-amber-50",
      proofBg: "bg-amber-50/50"
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
            Six Reasons Growing Companies <span className="text-[#0052CC]">Choose FactoryJet</span>
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
             Experience the FactoryJet difference <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const tiers = [
    {
      title: "Launch",
      price: "$1,999 - $3,499",
      description: "New businesses and simple websites",
      features: [
        "5-7 pages",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact forms",
        "CMS setup (WordPress/Webflow)",
        "30 days post-launch support"
      ],
      timeline: "2-3 Weeks",
      ctaType: "outline"
    },
    {
      title: "Growth",
      price: "$3,999 - $6,999",
      description: "Established businesses needing more power",
      features: [
        "10-15 pages",
        "Advanced SEO optimization",
        "Blog/content hub setup",
        "Analytics & conversion tracking",
        "CRM integration",
        "45 days post-launch support"
      ],
      timeline: "3-4 Weeks",
      isPopular: true,
      ctaType: "primary"
    },
    {
      title: "Scale",
      price: "$7,999 - $14,999",
      description: "E-commerce and custom functionality",
      features: [
        "E-commerce or web application",
        "Custom integrations",
        "Advanced analytics",
        "Priority support queue",
        "60 days post-launch support"
      ],
      timeline: "4-6 Weeks",
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
            Transparent Pricing for <span className="text-[#0052CC]">Every Growth Stage</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 max-w-3xl mx-auto"
          >
            No hidden fees. No surprise invoices. Know exactly what you're investing before we start.
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
             Not sure which tier? <a onClick={(e) => { e.preventDefault(); onCtaClick(); }} href="#contact" className="text-[#0052CC] font-bold hover:underline cursor-pointer">Talk to us—we'll recommend honestly →</a>
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

const FAQ = () => {
  const faqs = [
    {
      question: "Do you use templates?",
      answer: "No. Every FactoryJet site is custom-designed. We use AI to generate layouts and components based on your specific content and goals, then our designers refine them. This gives you a custom site in the time it takes others to customize a template."
    },
    {
      question: "How are you so much faster than other agencies?",
      answer: "Traditional agencies spend weeks on manual tasks we've automated. We use AI for initial wireframing, content generation, and code scaffolding. This eliminates about 80% of the repetitive work, allowing our senior designers and developers to focus on strategy and polish."
    },
    {
      question: "Will I be able to update the site myself?",
      answer: "Yes. We build on user-friendly CMS platforms (typically WordPress or Webflow depending on your needs). We provide training videos and a 1-hour handover session so you can easily change text, images, and add blog posts."
    },
    {
      question: "What if I don't like the design?",
      answer: "That's why we have our Satisfaction Guarantee. We show you the design direction early in the process (Day 3-4). If you don't like it and we can't fix it to your satisfaction, we refund your deposit and part ways. No risk to you."
    },
    {
      question: "Do you write the copy/text?",
      answer: "Yes. We use a combination of AI and human copywriting. We interview you to get the key facts and tone, generate the initial drafts with AI models trained on high-converting sales copy, and then our copywriters polish it."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">
            Common Questions
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
              The AI-native web design agency for B2B companies. We build enterprise-grade websites in weeks, not months.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Mail, label: 'Email' }
              ].map(({ Icon, label }, i) => (
                <a key={i} href="#" aria-label={`Connect with us on ${label}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35] transition-colors text-slate-400 hover:text-white">
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-space">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Web Design</a></li>
              {/* <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Web Development</a></li> */}
              <li><a href="#" className="hover:text-[#FF6B35] transition-colors">E-Commerce</a></li>
              {/* <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Mobile Apps</a></li> */}
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
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
      <Industries />
      <CaseStudies />
      <Methodology onCtaClick={openUsModal} />
      <WhyFactoryJet onCtaClick={openUsModal} />
      <Pricing onCtaClick={openUsModal} />
      <FAQ />
      <section id="contact" className="bg-[#0F172A] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0052CC]/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">
            Ready to Upgrade Your <br/> Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Stop losing leads to competitors. Get a free strategy roadmap and quote in 24 hours.
          </p>
          <button
            onClick={openUsModal}
            className="bg-[#FF6B35] hover:bg-[#E65020] text-white font-bold text-xl px-12 py-5 rounded-xl shadow-2xl shadow-orange-600/30 hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto min-h-[64px]"
          >
            Start Your Project <Rocket size={24} />
          </button>
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