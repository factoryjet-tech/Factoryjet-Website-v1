'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import {
  ShoppingBag, Users, Building2, LayoutGrid, Zap,
  CheckCircle2, ArrowRight, BarChart3, TrendingUp,
  ShieldCheck, Globe, Truck, CreditCard, ChevronDown,
  ChevronUp, Star, Phone, Sparkles, Box, ArrowUpRight,
  Layers, Lock, Smartphone, Search, RefreshCw, Mail, MessageSquare,
  Package, Database, FileDigit, Image, Link, Eye, Filter, Heart,
  Maximize2, Save, UserX, Wallet, Landmark, Percent, Receipt,
  Calculator, Gift, MapPin, Locate, Map, Container, Bot,
  UserCircle, History, MapPinned, Award, Share2, Megaphone,
  Ticket, ShoppingCart, MessageCircle, Share, Camera, Users2,
  LineChart, UserPlus, Infinity as InfinityIcon, MousePointerClick, Activity,
  AlertCircle, LayoutDashboard, MonitorSmartphone, AppWindow,
  Download, TabletSmartphone, Gauge, Warehouse, ScanLine,
  Bell, BrainCircuit, Trash2, ScanBarcode, Timer, Shield,
  FileKey, FileText, Undo2, Siren
} from 'lucide-react';
import {
  HERO_CONTENT, MARKET_REALITY, BUSINESS_MODELS,
  PLATFORMS, FEATURE_SETS, PROCESS_STEPS,
  CASE_STUDIES, FAQS
} from './data.constants';
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick } from '@/utils/gtm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Utility Hooks & Components ---

const useMousePosition = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return { mouseX, mouseY };
};

const MeshGradientBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px] animate-pulse" />
    <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-purple-400/20 blur-[120px] animate-pulse delay-1000" />
    <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] rounded-full bg-orange-300/20 blur-[120px] animate-pulse delay-2000" />
    <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] rounded-full bg-emerald-300/10 blur-[80px]" />
  </div>
);

interface GlassCardProps {
  children?: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = true }) => {
  const { mouseX, mouseY } = useMousePosition();
  
  return (
    <motion.div 
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : {}}
      className={`
        relative overflow-hidden
        bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl
        rounded-3xl ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
      {/* Dynamic Shine Effect */}
      {hoverEffect && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.4), transparent 40%)`
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

interface SectionProps {
    children?: React.ReactNode;
}

const SectionHeader = ({ badge, title, subtitle, dark = false }: { badge: string, title: React.ReactNode, subtitle?: string, dark?: boolean }) => (
  <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto px-4">
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`inline-block px-3 md:px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 md:mb-6 border ${dark ? 'bg-white/10 border-white/20 text-blue-200' : 'bg-blue-50 border-blue-100 text-jetBlue'}`}
    >
      {badge}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight ${dark ? 'text-white' : 'text-jetNavy'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`text-base md:text-lg lg:text-xl leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

interface ButtonProps {
  children?: React.ReactNode;
  primary?: boolean;
  className?: string;
  icon?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, primary = false, className = "", icon = false, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      relative overflow-hidden px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-xs md:text-sm tracking-wide transition-all shadow-lg
      ${primary
        ? 'bg-jetOrange text-white shadow-orange-500/30 hover:shadow-orange-500/50'
        : 'bg-white/80 text-jetNavy backdrop-blur-md border border-white/50 shadow-blue-500/10 hover:bg-white'}
      ${className} flex items-center justify-center gap-2 group
    `}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {icon && <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />}
    </span>
    {primary && (
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    )}
  </motion.button>
);

// --- Icon Mapping ---
const IconMap: { [key: string]: React.ElementType } = {
  ShoppingBag, Users, Building2, LayoutGrid, Zap, CheckCircle2, ArrowRight, 
  BarChart3, TrendingUp, ShieldCheck, Globe, Truck, CreditCard, Star, Sparkles, Box,
  Layers, Lock, Smartphone, Search, RefreshCw, Mail, MessageSquare,
  Package, Database, FileDigit, Image, Link, Eye, Filter, Heart,
  Maximize2, Save, UserX, Wallet, Landmark, Percent, Receipt,
  Calculator, Gift, MapPin, Locate, Map, Container, Bot,
  UserCircle, History, MapPinned, Award, Share2, Megaphone,
  Ticket, ShoppingCart, MessageCircle, Share, Camera, Users2,
  LineChart, UserPlus, Infinity: InfinityIcon, MousePointerClick, Activity,
  AlertCircle, LayoutDashboard, MonitorSmartphone, AppWindow,
  Download, TabletSmartphone, Gauge, Warehouse, ScanLine,
  Bell, BrainCircuit, Trash2, ScanBarcode, Timer, Shield,
  FileKey, FileText, Undo2, Siren
};


// --- Sections ---

const Hero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 flex items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/50 border border-white/60 backdrop-blur-sm shadow-sm mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-jetGreen animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-600">Accepting New Projects for Q4 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 text-jetNavy">
            Build Stores That <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jetBlue via-purple-600 to-jetOrange">
              Sell While You Sleep
            </span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-xl">
            We architect high-performance e-commerce ecosystems using AI, Glassmorphism design, and conversion psychology.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
            <Button primary icon onClick={() => {
              trackCTAClick('launch_your_store', 'ecomm_hero', 'primary');
              openModal();
            }}>Launch Your Store</Button>
            <Button>View Portfolio</Button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-slate-200/60">
            {[
              { label: "Sales Increase", value: "150%+" },
              { label: "Client Revenue", value: "₹500Cr+" },
              { label: "Launch Time", value: "4 Wks" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-xl md:text-3xl font-bold text-jetNavy">{stat.value}</p>
                <p className="text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative perspective-1000 hidden lg:block"
        >
          {/* 3D Floating Elements Composition */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-20"
          >
            <GlassCard className="p-6 md:p-8 !bg-white/80">
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-jetBlue/10 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-jetBlue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg">Store Performance</h3>
                    <p className="text-xs text-slate-500">Live Analytics</p>
                  </div>
                </div>
                <div className="px-2 md:px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +24.5%
                </div>
              </div>

              <div className="h-40 md:h-48 flex items-end justify-between gap-1 md:gap-2 mb-4 md:mb-6">
                {[40, 65, 50, 80, 60, 95, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="w-full bg-gradient-to-t from-jetBlue/80 to-cyan-300/80 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 md:pt-6 border-t border-slate-100">
                <div>
                   <p className="text-xs text-slate-500 mb-1">Total Sales</p>
                   <p className="text-xl md:text-2xl font-bold text-jetNavy">₹12,40,500</p>
                </div>
                <Button className="!py-2 !px-4 !text-xs">View Report</Button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Floating Decorators */}
          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 8, delay: 1 }}
            className="absolute -top-12 -right-12 z-10"
          >
            <GlassCard className="p-4 w-48 !rounded-2xl !bg-white/90">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                   <Zap className="w-4 h-4 text-jetOrange" />
                 </div>
                 <div className="text-sm font-bold">New Order</div>
               </div>
               <p className="text-xs text-slate-500">Just now • ₹2,499</p>
            </GlassCard>
          </motion.div>

          <motion.div
            animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
            className="absolute -bottom-8 -left-8 z-30"
          >
            <GlassCard className="p-4 w-56 !rounded-2xl !bg-white/90">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                   <ShieldCheck className="w-5 h-5 text-jetGreen" />
                 </div>
                 <div>
                   <div className="text-sm font-bold">Secure Checkout</div>
                   <p className="text-xs text-slate-500">256-bit SSL Encrypted</p>
                 </div>
               </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MarketReality = () => (
  <section className="py-16 md:py-24 relative">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader badge="Market Insights" title="Why E-Commerce is Non-Negotiable" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Bento Grid Layout */}
        <div className="md:col-span-2 lg:col-span-4 lg:row-span-2">
          <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white !border-none">
             <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">71%</h3>
             <p className="text-base md:text-lg opacity-90 mb-4 md:mb-6">of consumers research products online before purchasing.</p>
             <div className="mt-auto h-2 bg-white/20 rounded-full overflow-hidden">
               <motion.div
                 initial={{ width: 0 }}
                 whileInView={{ width: '71%' }}
                 transition={{ duration: 1.5 }}
                 className="h-full bg-white"
               />
             </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-4">
          <GlassCard className="h-full p-6 md:p-8 flex items-center justify-between">
            <div>
               <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold mb-2">Annual Growth</p>
               <h3 className="text-3xl md:text-4xl font-bold text-jetNavy">23%</h3>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-50 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-jetGreen" />
            </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-4">
          <GlassCard className="h-full p-6 md:p-8 flex items-center justify-between">
            <div>
               <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold mb-2">Growth Multiplier</p>
               <h3 className="text-3xl md:text-4xl font-bold text-jetOrange">3-5x</h3>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-orange-50 flex items-center justify-center">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-jetOrange" />
            </div>
          </GlassCard>
        </div>

        <div className="md:col-span-2 lg:col-span-8">
           <GlassCard className="h-full p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
             <div className="flex-1 w-full">
               <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-red-500" /> The Problem
               </h3>
               <ul className="space-y-2 md:space-y-3">
                 {MARKET_REALITY.problems.slice(0, 3).map((p, i) => (
                   <li key={i} className="text-xs md:text-sm text-slate-600 flex items-start gap-2">
                     <span className="text-red-400 mt-1">×</span> {p}
                   </li>
                 ))}
               </ul>
             </div>
             <div className="w-full md:w-px h-px md:h-32 bg-slate-200" />
             <div className="flex-1 w-full">
               <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2 text-jetGreen">
                 <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> The Solution
               </h3>
               <p className="text-slate-600 leading-relaxed text-xs md:text-sm">
                 {MARKET_REALITY.solution}
               </p>
             </div>
           </GlassCard>
        </div>
      </div>
    </div>
  </section>
);

const BusinessModels = () => {
  // We duplicate the array to ensure seamless looping
  const duplicatedModels = [...BUSINESS_MODELS, ...BUSINESS_MODELS];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-slate-50" id="expertise">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] bg-blue-100/50 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] bg-orange-100/50 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-12 md:mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-jetOrange font-bold tracking-widest uppercase text-xs mb-3 md:mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-jetNavy leading-tight"
            >
              Business Models <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jetBlue to-purple-600">We Scale to Infinity</span>
            </motion.h2>
          </div>
          <div className="hidden md:flex gap-3 md:gap-4">
            <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-slate-200 bg-white/50 text-xs font-medium text-slate-500 backdrop-blur-sm">
              Drag to explore
            </div>
            <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-slate-200 bg-white/50 text-xs font-medium text-slate-500 backdrop-blur-sm">
              Hover to pause
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full z-10 group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-48 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-48 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

        {/* CSS Animation Track */}
        <div
          className="flex gap-4 md:gap-8 pl-4 md:pl-8 animate-marquee hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {duplicatedModels.map((model, idx) => {
            const Icon = IconMap[model.icon || 'ShoppingBag'] || ShoppingBag;
            return (
              <GlassCard
                key={`${model.title}-${idx}`}
                className="w-[280px] md:w-[350px] lg:w-[450px] shrink-0 p-6 md:p-8 lg:p-10 !bg-white/70 hover:!bg-white transition-colors duration-500 flex flex-col h-[450px] md:h-[500px]"
              >
                {/* Icon & Header */}
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/50 shadow-sm
                      ${idx % 5 === 0 ? 'bg-blue-50 text-blue-600' : ''}
                      ${idx % 5 === 1 ? 'bg-indigo-50 text-indigo-600' : ''}
                      ${idx % 5 === 2 ? 'bg-slate-50 text-slate-600' : ''}
                      ${idx % 5 === 3 ? 'bg-purple-50 text-purple-600' : ''}
                      ${idx % 5 === 4 ? 'bg-orange-50 text-orange-600' : ''}
                  `}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="px-2 md:px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Model 0{ (idx % 5) + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-jetNavy mb-3 md:mb-4 group-hover:text-jetBlue transition-colors">{model.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                  {model.description}
                </p>

                {/* Stats Box */}
                <div className="mb-6 md:mb-8 p-3 md:p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-jetGreen" />
                      <span className="text-[10px] md:text-xs font-bold text-jetGreen uppercase">Impact</span>
                  </div>
                  <p className="text-[10px] md:text-xs font-medium text-slate-700 italic">"{model.stats}"</p>
                </div>

                {/* Tags */}
                <div>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase mb-2 md:mb-3">Best For</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {model.bestFor.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-2 md:px-3 py-1 md:py-1.5 rounded-md bg-white border border-slate-200 text-[10px] md:text-xs font-medium text-slate-600 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
      
      {/* Styles for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

const Platforms = () => (
  <section className="py-16 md:py-24" id="platforms">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader badge="Tech Stack" title="Elite Platforms Only" subtitle="We select the engine that matches your horsepower needs." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PLATFORMS.map((platform, idx) => (
          <GlassCard key={idx} className={`p-6 md:p-8 group hover:border-jetBlue/30 transition-all ${platform.highlight ? 'bg-gradient-to-b from-blue-50/50 to-white' : ''}`}>
            {platform.highlight && (
               <div className="absolute top-3 right-3 md:top-4 md:right-4">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
               </div>
            )}

            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-jetBlue transition-colors">{platform.name}</h3>
            <p className="text-xs md:text-sm text-slate-600 mb-4 md:mb-6 min-h-[50px] md:min-h-[60px]">{platform.description}</p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="p-2.5 md:p-3 bg-slate-50 rounded-xl">
                 <p className="text-[9px] md:text-[10px] uppercase text-slate-400 font-bold mb-1">Timeline</p>
                 <p className="text-xs md:text-sm font-bold text-jetNavy">{platform.timeline.split(' ')[0]} wks</p>
              </div>
              <div className="p-2.5 md:p-3 bg-slate-50 rounded-xl">
                 <p className="text-[9px] md:text-[10px] uppercase text-slate-400 font-bold mb-1">ROI</p>
                 <p className="text-xs md:text-sm font-bold text-jetGreen">High</p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {platform.why.slice(0, 3).map((w, i) => (
                <div key={i} className="flex items-start gap-2 text-[11px] md:text-xs text-slate-600">
                  <CheckCircle2 className="w-3 h-3 text-jetBlue shrink-0 mt-0.5" /> {w}
                </div>
              ))}
            </div>

            <Button className="w-full !text-xs !py-2.5 md:!py-3">Details <ArrowUpRight className="w-3 h-3 ml-1" /></Button>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const FeatureGrid = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#020617] text-white">
      {/* Deep Space / Midnight Crystal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0B0F19] to-slate-900" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />

      {/* Glowing Orbs */}
      <div className="absolute top-[-10%] left-[20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader dark badge="Full Spectrum" title="Everything Included" subtitle="From pixel-perfect design to backend logic." />

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mt-12 md:mt-16">
          {/* Vertical Navigation Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {FEATURE_SETS.map((feature, idx) => {
              const Icon = IconMap[feature.icon] || Box;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`
                    w-full text-left px-4 md:px-6 py-4 md:py-5 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center gap-3 md:gap-4 group relative overflow-hidden
                    ${activeTab === idx
                      ? 'bg-white/10 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                      : 'hover:bg-white/5 border border-transparent text-slate-400 hover:text-white'}
                  `}
                >
                  <div className={`
                    p-1.5 md:p-2 rounded-lg transition-colors duration-300
                    ${activeTab === idx ? 'bg-jetBlue text-white shadow-lg shadow-blue-500/50' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white'}
                  `}>
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-xs md:text-sm block tracking-wide">{feature.title}</span>
                    {activeTab === idx && (
                      <motion.span
                        initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
                        className="text-[9px] md:text-[10px] uppercase tracking-wider block mt-1"
                      >
                        Active Module
                      </motion.span>
                    )}
                  </div>
                  {activeTab === idx && (
                    <motion.div layoutId="active-glow" className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content Grid */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full"
              >
                <div className="p-6 md:p-8 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                  {/* Internal Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2" />

                  <div className="relative z-10 mb-8 md:mb-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 flex items-center gap-2 md:gap-3">
                      {React.createElement(IconMap[FEATURE_SETS[activeTab].icon] || Box, { className: "w-6 h-6 md:w-8 md:h-8 text-jetBlue" })}
                      {FEATURE_SETS[activeTab].title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-slate-300 max-w-lg">{FEATURE_SETS[activeTab].description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {FEATURE_SETS[activeTab].items.map((item, i) => {
                      const ItemIcon = IconMap[item.icon] || CheckCircle2;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="group p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-900/50 border border-white/5 hover:border-jetBlue/40 hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-3 md:gap-4"
                        >
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shrink-0">
                            <ItemIcon className="w-4 h-4 md:w-5 md:h-5 text-blue-400 group-hover:text-jetBlue" />
                          </div>
                          <span className="text-xs md:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                            {item.text}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 md:mt-8 flex justify-center md:justify-end">
               <Button className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20 !py-2.5 md:!py-3 !text-xs md:!text-sm w-full md:w-auto">
                 Download Technical Spec Sheet <Download className="w-3 h-3 md:w-4 md:h-4 ml-2" />
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessTimeline = () => {
  return (
    <section className="py-16 md:py-24" id="process">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader badge="Roadmap" title="Concept to Cash Flow" subtitle="Our proven 7-phase methodology ensures zero friction." />

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-orange-200" />

          <div className="space-y-12 md:space-y-16">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 items-start md:items-center ${idx % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse md:text-left'}`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full pl-12 md:pl-0">
                  <span className="text-jetOrange font-bold text-[10px] md:text-xs tracking-wider uppercase mb-1 md:mb-2 block">{step.duration}</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-jetNavy">{step.phase}</h3>
                  <div className={`space-y-2 ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                    {step.whatWeDo.slice(0, 3).map((item, i) => (
                      <p key={i} className="text-xs md:text-sm text-slate-600 bg-white/50 backdrop-blur-sm px-2.5 md:px-3 py-1 rounded-lg border border-slate-100 inline-block">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Marker */}
                <div className="absolute left-[4px] md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-white border-4 border-jetBlue shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-jetBlue" />
                </div>

                {/* Deliverables Side */}
                <div className="flex-1 w-full pl-12 md:pl-0">
                   <GlassCard className="p-4 md:p-6 !bg-blue-50/30">
                     <p className="text-[10px] md:text-xs font-bold text-jetBlue uppercase mb-2 md:mb-3 flex items-center gap-2">
                       <Box className="w-3 h-3" /> Key Deliverables
                     </p>
                     <ul className="space-y-1.5 md:space-y-2">
                       {step.deliverables.slice(0, 3).map((d, i) => (
                         <li key={i} className="text-[11px] md:text-xs text-slate-600 flex items-start gap-2">
                           <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-0.5" /> {d}
                         </li>
                       ))}
                     </ul>
                   </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => (
  <section className="py-16 md:py-24 bg-jetNavy text-white" id="case-studies">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader dark badge="Success Stories" title="Results That Scale" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {CASE_STUDIES.map((study, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-slate-800 border border-slate-700 hover:border-jetGreen/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-jetBlue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="p-6 md:p-8 relative z-10">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{study.title}</h3>
                  <span className="text-xs text-slate-400">{study.timeline}</span>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-jetGreen group-hover:text-black transition-colors shrink-0">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                 <div>
                   <p className="text-[9px] md:text-[10px] uppercase text-slate-500 font-bold mb-1 md:mb-2">Challenge</p>
                   <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{study.challenge}</p>
                 </div>
                 <div>
                   <p className="text-[9px] md:text-[10px] uppercase text-slate-500 font-bold mb-1 md:mb-2">Solution</p>
                   <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{study.solution}</p>
                 </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
                 <p className="text-[10px] md:text-xs text-jetGreen font-bold uppercase mb-3 md:mb-4 tracking-wider flex items-center gap-2">
                   <Sparkles className="w-3 h-3" /> Impact
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4">
                   {study.results.map((r, i) => (
                     <div key={i} className="text-xs md:text-sm font-medium text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-jetGreen rounded-full shrink-0" /> {r}
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const midpoint = Math.ceil(FAQS.length / 2);
  const leftColumn = FAQS.slice(0, midpoint);
  const rightColumn = FAQS.slice(midpoint);

  const renderFaq = (faq: typeof FAQS[0], idx: number) => (
     <motion.div
        key={idx}
        initial={false}
        onClick={() => setActiveIndex(idx === activeIndex ? null : idx)}
        className={`cursor-pointer border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'bg-slate-50 border-jetBlue/30 shadow-md' : 'bg-white border-slate-100 hover:border-slate-300'}`}
      >
        <div className="p-4 md:p-6 flex items-center justify-between gap-3 md:gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-1 min-w-0">
              <span className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded uppercase tracking-wide shrink-0 ${activeIndex === idx ? 'bg-blue-100 text-jetBlue' : 'bg-slate-100 text-slate-500'}`}>
                {faq.category}
              </span>
              <h3 className={`font-medium text-sm md:text-base ${activeIndex === idx ? 'text-jetNavy' : 'text-slate-600'}`}>{faq.question}</h3>
          </div>
          <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 text-slate-400 transition-transform duration-300 shrink-0 ${activeIndex === idx ? 'rotate-180' : ''}`} />
        </div>
        <AnimatePresence initial={false}>
          {activeIndex === idx && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 md:px-6 pb-4 md:pb-6 md:pl-20 text-slate-600 leading-relaxed text-xs md:text-sm">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
  );

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader badge="Support" title="Questions? Answered." />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          <div className="space-y-3 md:space-y-4">
            {leftColumn.map((faq, i) => renderFaq(faq, i))}
          </div>
          <div className="space-y-3 md:space-y-4">
            {rightColumn.map((faq, i) => renderFaq(faq, midpoint + i))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { openModal } = useContactModal();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-jetBlue to-indigo-600" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
         <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           className="max-w-3xl mx-auto"
         >
           <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">Let's Build Your <br/> Empire.</h2>
           <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-12">Stop leaving revenue on the table. Join 500+ brands scaling with FactoryJet.</p>

           <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
             <button
               onClick={() => {
                 trackCTAClick('start_your_project', 'ecomm_cta', 'primary');
                 openModal();
               }}
               className="px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-white text-jetBlue font-bold text-base md:text-lg shadow-2xl hover:scale-105 transition-transform"
             >
               Start Your Project
             </button>
             <button className="px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-transparent border-2 border-white/30 text-white font-bold text-base md:text-lg hover:bg-white/10 transition-colors">
               Calculate ROI
             </button>
           </div>

           <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-blue-200">
             <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" /> Free Strategy Session</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" /> No Commitment</div>
           </div>
         </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-Commerce Development Services",
    "description": "Professional e-commerce development services including Shopify, WooCommerce, and custom online store solutions. AI-powered, mobile-first, SEO-optimized stores.",
    "provider": {
      "@type": "Organization",
      "name": "FactoryJet",
      "url": "https://factoryjet.com",
      "logo": "https://factoryjet.com/FinalLogo.svg",
      "telephone": "+919699977699",
      "email": "connect@factoryjet.com"
    },
    "serviceType": "E-Commerce Development",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "E-Commerce Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shopify Development",
            "description": "Custom Shopify store development with theme customization, app integration, and performance optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WooCommerce Development",
            "description": "WordPress WooCommerce store setup, customization, and payment gateway integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom E-Commerce Solutions",
            "description": "Fully custom online stores built with modern technologies and conversion optimization"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-jetOrange selection:text-white">
        <MeshGradientBackground />
        <Header variant="solid" />
        <Hero />
        <MarketReality />
        <BusinessModels />
        <Platforms />
        <FeatureGrid />
        <ProcessTimeline />
        <CaseStudies />
        <FAQAccordion />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
