'use client';

import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, Check, Code2, Layers, Smartphone, Globe, Plus, Minus, ArrowRight, Zap, Shield, Cpu, ShieldCheck, TrendingUp, Sparkles, Layout, Settings, ShoppingBag, FileText, Star, Clock, Lock, Database, Flag, AlertCircle, Rocket } from 'lucide-react';
import Header from '@/components/Header';
import { JumpNav } from './components/Layout/JumpNav';
import { QuickAnswer, Button, CtaSection, SectionHeader } from './components/UI/Common';
import { B2BSection, StartupSection, LocalSection, ComparisonsSection, CaseStudiesSection, MigrationSection, PricingSection, IndustriesSection, ROISection, ExpandedFAQ } from './components/Sections/EnhancedContent';
import { LeadForm } from './components/UI/LeadForm';
import { FormProvider, useForm } from './components/UI/FormContext';
import FooterUS from '@/components/FooterUS';

// --- Footer Component ---
const FooterLocal: React.FC = () => {
  const { openForm } = useForm();
  
  return (
    <footer className="bg-navy text-white py-12 border-t border-white/10 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">FACTORYJET</h3>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Enterprise-grade web development for modern businesses. Built in the USA.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#overview" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>connect@factoryjet.com</li>
              <li>+91 96999 77699</li>
              <li>
                <button onClick={() => openForm('Footer Link')} className="text-jet-blue font-bold hover:text-white transition-colors">
                  Start a Project
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs md:text-sm">
          <div>&copy; {new Date().getFullYear()} FactoryJet. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Hero Section ---
const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated Gradient Mesh */}
    <div className="absolute inset-0 bg-navy">
       <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(0,82,204,0.15),transparent_70%)] animate-blob"></div>
       <div className="absolute bottom-0 right-0 w-[100%] h-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,1),transparent)]"></div>
    </div>
    
    {/* Floating Decorative Orbs */}
    <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-jet-blue/20 rounded-full blur-[80px] animate-float"></div>
    <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-jet-orange/10 rounded-full blur-[100px] animate-float-slow"></div>
    <div className="absolute top-[30%] right-[30%] w-48 h-48 bg-jet-green/10 rounded-full blur-[60px] animate-pulse"></div>

    {/* Grid Overlay */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
  </div>
);

const ValuePropCard: React.FC<{ icon: React.ElementType, title: string, desc: string, delay: string }> = ({ icon: Icon, title, desc, delay }) => (
  <div className={`flex flex-col p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 opacity-0 animate-fade-up ${delay}`}>
    <div className="w-8 h-8 rounded-lg bg-jet-blue/10 flex items-center justify-center text-jet-blue mb-2">
      <Icon className="w-4 h-4" />
    </div>
    <h3 className="text-navy font-bold text-sm mb-0.5">{title}</h3>
    <p className="text-slate-600 text-[11px] leading-snug font-medium">{desc}</p>
  </div>
);

const Hero = () => {
  const { openForm } = useForm();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Disable 3D tilt on mobile for better performance
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 3deg)
    const rotateX = ((y - centerY) / centerY) * -2; // Inverted Y for natural tilt
    const rotateY = ((x - centerX) / centerX) * 2;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] lg:h-screen flex flex-col justify-center pt-[80px] pb-8 overflow-hidden bg-navy"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <BackgroundElements />
      
      {/* Main Container with Perspective */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 perspective-[2000px] flex flex-col justify-center h-full">
        
        {/* Massive Glassmorphism Hero Card */}
        <div 
          ref={cardRef}
          className="w-full max-w-[1280px] mx-auto bg-white/95 backdrop-blur-2xl border border-white/30 rounded-[24px] shadow-hero-card p-6 md:p-10 transition-transform duration-100 ease-out will-change-transform relative overflow-hidden flex flex-col justify-center"
          style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
        >
           {/* Decor shine for card */}
           <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent pointer-events-none rounded-[24px]"></div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                  
                  {/* Eyebrow Badge */}
                  <div className="opacity-0 animate-fade-up [animation-delay:0.3s] w-full flex justify-center lg:justify-start">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-jet-green to-jet-green-dark text-white text-[10px] md:text-xs font-bold tracking-wider uppercase mb-6 shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                        <span>America's Most Technical Web Design Company</span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h1 className="text-[2.5rem] leading-[1.1] md:text-5xl lg:text-6xl font-heading font-extrabold text-navy tracking-tight mb-6 opacity-0 animate-fade-up [animation-delay:0.5s] w-full">
                    Enterprise-Grade Web Development. <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-jet-blue to-jet-orange animate-gradient-x block mt-2 md:inline md:mt-0">
                        Built for Growth. Priced for SMBs.
                    </span>
                  </h1>

                  {/* Subheadline */}
                  <p className="text-base md:text-lg text-slate-800 mb-8 leading-relaxed max-w-2xl font-normal opacity-0 animate-fade-up [animation-delay:0.7s]">
                    FactoryJet is a full-stack web development agency that combines the technical precision of Silicon Valley with the affordability SMBs need. Whether you need a lightning-fast Next.js application, a conversion-optimized WordPress website, or a custom Shopify store—we deliver production-ready code in <span className="text-navy font-bold border-b-2 border-jet-blue/20">21 days</span>.
                  </p>
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8 opacity-0 animate-fade-up [animation-delay:0.9s]">
                    <button 
                      onClick={() => openForm('Hero Audit')}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-jet-blue to-[#0066FF] px-8 py-4 text-white font-semibold shadow-[0_4px_14px_rgba(0,82,204,0.4)] transition-all hover:shadow-[0_8px_25px_rgba(0,82,204,0.5)] hover:-translate-y-0.5 w-full sm:w-auto flex justify-center items-center text-sm md:text-base"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get Free Technical Audit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        {/* Internal Shine */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
                    </button>

                    <button 
                      onClick={() => openForm('Client Sites')}
                      className="group relative rounded-xl bg-transparent border-2 border-jet-blue/20 px-8 py-4 text-jet-blue font-bold transition-all hover:bg-jet-blue/5 hover:border-jet-blue w-full sm:w-auto text-sm md:text-base"
                    >
                        View Live Client Sites
                    </button>
                  </div>
              </div>

              {/* Right Column: Visuals & Value Props */}
              <div className="lg:col-span-5 relative w-full">
                  {/* Floating 3D Elements Background (Hidden on Mobile) */}
                  <div className="absolute top-0 right-0 -z-10 opacity-30 pointer-events-none hidden lg:block">
                      <Code2 className="w-32 h-32 text-slate-300 animate-spin-slow origin-center absolute -top-10 -right-10" />
                      <Layout className="w-24 h-24 text-jet-blue/20 animate-float absolute top-40 -left-10" />
                  </div>

                  {/* Value Props Grid - 2x2 on Desktop, 1x2 or stacked on Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                      <ValuePropCard 
                        icon={Code2} 
                        title="Custom Code" 
                        desc="Every line written for your business." 
                        delay="[animation-delay:1.0s]"
                      />
                      <ValuePropCard 
                        icon={Clock} 
                        title="21-Day Delivery" 
                        desc="While competitors are still in meetings." 
                        delay="[animation-delay:1.1s]"
                      />
                      <ValuePropCard 
                        icon={Lock} 
                        title="100% Ownership" 
                        desc="You own the GitHub repository." 
                        delay="[animation-delay:1.2s]"
                      />
                      <ValuePropCard 
                        icon={Flag} 
                        title="US-Based Team" 
                        desc="Real-time collaboration, zero lag." 
                        delay="[animation-delay:1.3s]"
                      />
                  </div>
              </div>
           </div>

           {/* Trusted Tech Stack (Redesigned) */}
           <div className="mt-8 pt-8 border-t border-slate-100 opacity-0 animate-fade-up [animation-delay:1.5s]">
              <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8">
                 <div className="flex items-center gap-4 shrink-0">
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                            <div key={i} className={`w-10 h-10 rounded-full border-[3px] border-white flex items-center justify-center text-xs font-bold text-white shadow-sm ${i===1?'bg-jet-blue':i===2?'bg-jet-orange':'bg-jet-green'}`}>
                                {i===1?'N':i===2?'S':<Check className="w-4 h-4"/>}
                            </div>
                        ))}
                    </div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide leading-tight text-left">
                        Trusted by<br/><span className="text-navy text-sm">500+ Innovators</span>
                    </div>
                 </div>

                 {/* Dazzling Ticker */}
                 <div className="flex-1 w-full overflow-hidden relative mask-linear-fade">
                    <div className="flex gap-3 items-center animate-scroll whitespace-nowrap hover:[animation-play-state:paused] py-2">
                        {[
                            { name: "Next.js 14", icon: Globe, bg: "bg-black text-white" },
                            { name: "Shopify Plus", icon: ShoppingBag, bg: "bg-[#95BF47] text-white" },
                            { name: "WordPress", icon: Layers, bg: "bg-[#21759B] text-white" },
                            { name: "React", icon: Code2, bg: "bg-[#61DAFB] text-slate-900" },
                            { name: "TypeScript", icon: Code2, bg: "bg-[#3178C6] text-white" },
                            { name: "Tailwind", icon: Layout, bg: "bg-[#06B6D4] text-white" },
                            { name: "Supabase", icon: Database, bg: "bg-[#3ECF8E] text-white" },
                            // Duplicates for seamless loop
                            { name: "Next.js 14", icon: Globe, bg: "bg-black text-white" },
                            { name: "Shopify Plus", icon: ShoppingBag, bg: "bg-[#95BF47] text-white" },
                            { name: "WordPress", icon: Layers, bg: "bg-[#21759B] text-white" },
                        ].map((tech, i) => (
                            <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${tech.bg} transition-transform hover:scale-105 cursor-default`}>
                                <tech.icon className="w-3.5 h-3.5" />
                                <span className="text-xs font-bold tracking-wide">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                 </div>
                 
                 {/* Compact Metrics (Hidden on mobile, shown on XL) */}
                 <div className="hidden xl:flex gap-8 shrink-0 border-l border-slate-200 pl-8">
                    <div>
                        <div className="text-xl font-black text-navy leading-none">4.9/5</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Clutch Rating</div>
                    </div>
                    <div>
                        <div className="text-xl font-black text-navy leading-none">$50M+</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Revenue Gen</div>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

// --- The Problem Section (Why Projects Fail) ---
const Problem = () => (
  <section id="overview" className="relative pt-48 pb-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, transform: 'rotate(15deg)' }}>
    </div>

    <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
      <SectionHeader 
        icon={AlertCircle}
        eyebrow="The Problem"
        title="Why Most Website Developers Fail Your Business"
        subtitle="The uncomfortable truth about the $3 billion web design industry. Most businesses hire a web design agency expecting a growth engine. Instead, they get a digital paperweight."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
        {[
          { 
            icon: Zap, 
            title: "Speed Theater", 
            desc: "Designers show you 'fast' sites on their laptops. Real users experience 5-8s loads, laggy scrolling, and broken layouts.", 
            stat: "7% Conv. Loss / sec"
          },
          { 
            icon: Shield, 
            title: "SEO Snake Oil", 
            desc: "Promises of 'SEO-friendly' design that deliver basic meta tags Google ignores. No schema, no semantic HTML.", 
            stat: "Invisible on Google"
          },
          { 
            icon: Layers, 
            title: "The Plugin Graveyard", 
            desc: "Traditional WordPress devs solve every problem with a plugin. Result: 40+ plugins, security holes, and constant crashes.", 
            stat: "Security Risk"
          }
        ].map((item, i) => (
          <div key={i} className="group relative bg-white rounded-[20px] p-6 md:p-8 shadow-[0_4px_6px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(239,68,68,0.15)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 opacity-0 animate-card-entrance" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-t-[20px]"></div>
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center mb-6 md:mb-8 mx-auto group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-red-600 animate-icon-pulse" />
                <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center animate-badge-bounce">
                    <span className="text-white text-xs font-bold">!</span>
                </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-navy mb-3 md:mb-4 text-center">{item.title}</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed text-center mb-6">{item.desc}</p>
            <div className="text-center pt-6 border-t border-slate-100">
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Impact</div>
                <div className="text-xl md:text-2xl font-black text-red-500">{item.stat}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {[
            {
                icon: Layout,
                title: "Design-First, Strategy Never",
                desc: "Most website designers ask: 'What colors do you like?' We ask: 'What action should visitors take in the first 10 seconds?'",
                stat: "Low Conversion"
            },
            {
                icon: Lock,
                title: "Vendor Lock-In",
                desc: "You're stuck. Your web designer built on a proprietary platform. We give you the GitHub repository. You own the code.",
                stat: "No Ownership"
            }
        ].map((item, i) => (
            <div key={i + 3} className="group relative bg-white rounded-[20px] p-6 md:p-8 shadow-[0_4px_6px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(239,68,68,0.15)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 opacity-0 animate-card-entrance" style={{ animationDelay: `${(i + 3) * 100}ms` }}>
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-t-[20px]"></div>
                <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-red-600 animate-icon-pulse" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-navy mb-3 md:mb-4 text-center">{item.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed text-center mb-6">{item.desc}</p>
                    <div className="text-center pt-6 border-t border-slate-100 w-full">
                        <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Impact</div>
                        <div className="text-xl md:text-2xl font-black text-red-500">{item.stat}</div>
                    </div>
                </div>
            </div>
        ))}
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <button className="relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-br from-jet-orange to-orange-500 shadow-[0_4px_14px_rgba(255,107,53,0.4)] hover:shadow-[0_8px_25px_rgba(255,107,53,0.5)] hover:-translate-y-0.5 transition-all duration-300 group w-full md:w-auto text-base">
            <span className="mr-2">Stop Renting. Own Your Site.</span>
            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3 h-3" />
            </div>
        </button>
      </div>
    </div>
  </section>
);

// --- Method Section (Scroll Storytelling) ---
const Method = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  const phases = [
    { step: "01", title: "Business Architecture", days: "Days 1-3", desc: "Strategic discovery session to understand goals, conversion funnels, and technical debt. Not just 'what colors do you like'.", deliverables: ["User Flows", "Conversion Funnels", "Technical Spec"] },
    { step: "02", title: "Technology Stack Selection", days: "Day 3", desc: "Matching the right tech (Next.js, WordPress, Shopify) to business goals. We don't force you into our preferred tool.", deliverables: ["Architecture Diagram", "CMS Selection", "Hosting Setup"] },
    { step: "03", title: "Design System Creation", days: "Days 4-8", desc: "Building a scalable component library (buttons, forms, cards) for consistency and scalability.", deliverables: ["Figma Prototypes", "UI Kit", "Brand Guidelines"] },
    { step: "04", title: "Development Sprint", days: "Days 9-15", desc: "Daily standups, clean commented code (TypeScript/Tailwind), and real-time staging access.", deliverables: ["React Components", "API Integration", "Database Schema"] },
    { step: "05", title: "Quality Assurance", days: "Days 16-18", desc: "Automated testing across 20+ devices, Lighthouse performance audits, and WCAG accessibility compliance.", deliverables: ["Lighthouse Report", "Security Audit", "Mobile Testing"] },
    { step: "06", title: "Deployment & Launch", days: "Days 19-21", desc: "DNS configuration, SSL activation, analytics setup, and monitoring dashboard handoff.", deliverables: ["Production Build", "DNS Propagation", "Google Analytics"] }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      
      const relativeScroll = viewportCenter - rect.top;
      setLineHeight(Math.max(0, relativeScroll));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="method" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" 
            style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <SectionHeader 
                icon={Settings}
                eyebrow="Our Proven Process"
                title="The Engineering-First Process"
                subtitle="We don't guess. We follow a rigorous, data-driven engineering process to ensure predictable results every time."
                centered
            />

            <div className="max-w-4xl mx-auto relative">
                {/* Timeline Line */}
                <div className="absolute left-[32px] md:left-[32px] top-0 bottom-0 w-1 bg-slate-200 rounded-full hidden sm:block"></div>
                <div 
                    className="absolute left-[32px] md:left-[32px] top-0 w-1 bg-gradient-to-b from-jet-blue via-blue-500 to-jet-green rounded-full transition-all duration-75 ease-linear shadow-[0_0_15px_rgba(0,82,204,0.5)] hidden sm:block"
                    style={{ height: `${lineHeight}px`, maxHeight: '100%' }}
                ></div>

                <div className="space-y-12 md:space-y-16">
                    {phases.map((phase, i) => (
                        <div key={i} className="relative flex flex-col sm:flex-row gap-6 md:gap-12 group">
                             {/* Phase Indicator */}
                             <div className="relative z-10 flex-none w-16 h-16 rounded-full bg-gradient-to-br from-jet-blue to-blue-500 flex items-center justify-center shadow-[0_4px_20px_rgba(0,82,204,0.4)] group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                                 <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-20 bg-blue-400"></div>
                                 <span className="text-white font-extrabold text-[28px] font-heading">{phase.step}</span>
                             </div>

                             {/* Content Card */}
                             <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-[0_4px_6px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:translate-x-0 md:group-hover:translate-x-2 group-hover:border-l-4 group-hover:border-l-jet-blue group-hover:shadow-[0_10px_30px_rgba(0,82,204,0.1)]">
                                 <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                     <h3 className="text-xl font-bold text-navy">{phase.title}</h3>
                                     <span className="bg-gradient-to-br from-jet-green to-jet-green-dark text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm shadow-jet-green/30">
                                         {phase.days}
                                     </span>
                                 </div>
                                 <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">{phase.desc}</p>
                                 
                                 <div className="pt-6 border-t border-slate-100">
                                     <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Deliverables</div>
                                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                         {phase.deliverables.map((item, idx) => (
                                             <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium hover:text-jet-blue transition-colors group/item">
                                                 <CheckCircle className="w-4 h-4 text-jet-green flex-shrink-0" />
                                                 <span className="group-hover/item:translate-x-1 transition-transform">{item}</span>
                                             </li>
                                         ))}
                                     </ul>
                                 </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

// --- Platforms Section (Holographic Cards) ---
const Platforms = () => {
  const platforms = [
    {
      name: 'Next.js 14',
      icon: Globe,
      color: '#000000',
      bgGradient: 'from-gray-900 to-black',
      bestFor: 'High-Performance Apps',
      desc: 'The React framework for production. Hybrid static & server rendering for unmatched speed. Used by Netflix & TikTok.',
      features: ['Server-Side Rendering', 'Static Site Generation', 'Global CDN Deployment'],
      popular: true,
      delay: '[animation-delay:0ms]'
    },
    {
      name: 'Headless WordPress',
      icon: FileText,
      color: '#21759B',
      bgGradient: 'from-[#21759B] to-[#1A5C7A]',
      bestFor: 'Content Powerhouses',
      desc: 'WordPress for easy editing + Next.js for blazing speed. Security of static sites with the CMS you know.',
      features: ['Decoupled Architecture', 'Zero Plugins Frontend', 'Bank-Grade Security'],
      popular: true,
      delay: '[animation-delay:100ms]'
    },
    {
      name: 'Shopify Plus',
      icon: ShoppingBag,
      color: '#96BF48',
      bgGradient: 'from-[#96BF48] to-[#5E8E3E]',
      bestFor: 'E-Commerce Brands',
      desc: 'Custom Liquid development and headless storefronts. Unique checkout flows and custom product configurators.',
      features: ['Custom Themes', 'App Development', 'High-Traffic Scaling'],
      popular: false,
      delay: '[animation-delay:200ms]'
    },
    {
      name: 'Webflow',
      icon: Layout,
      color: '#4353FF',
      bgGradient: 'from-[#4353FF] to-[#2D3ACC]',
      bestFor: 'Design-Forward Sites',
      desc: 'Visual development platform for rapid iteration and pixel-perfect design control without heavy code.',
      features: ['Visual CMS', 'Complex Animations', 'Hosting Included'],
      popular: false,
      delay: '[animation-delay:300ms]'
    },
    {
      name: 'Custom React',
      icon: Code2,
      color: '#61DAFB',
      bgGradient: 'from-[#61DAFB] to-[#00B4D8]',
      bestFor: 'Complex SaaS',
      desc: 'Bespoke single-page applications built for complex data visualization, dashboards, and interactivity.',
      features: ['State Management', 'Real-time Data', 'Microservices'],
      popular: false,
      delay: '[animation-delay:400ms]'
    },
    {
      name: 'Framer',
      icon: Layers,
      color: '#FF0066',
      bgGradient: 'from-[#FF0066] to-[#9900FF]',
      bestFor: 'Startups & LPs',
      desc: 'Rapid prototyping tool that exports production React code. Perfect for MVPs and landing pages.',
      features: ['Fast Launch', 'Interactive Prototypes', 'Zero Ops'],
      popular: false,
      delay: '[animation-delay:500ms]'
    }
  ];

  return (
    <section id="platforms" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-[1100px]">
        <SectionHeader 
            icon={Layers}
            eyebrow="Technology Stack"
            title="The Right Stack for the Right Challenge"
            subtitle="We build with 6 platforms—and know exactly when to use each."
            centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <div 
              key={i} 
              className={`group relative bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] opacity-0 animate-fade-up ${platform.delay}`}
              style={{
                 '--hover-color': platform.color
              } as any}
            >
              {/* Hover Gradient Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[var(--hover-color)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
              ></div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border border-[var(--hover-color)] rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>

              {/* Popular Badge */}
              {platform.popular && (
                <div className="absolute top-4 right-4 z-20 animate-badge-bounce [animation-delay:600ms]">
                   <div className="bg-gradient-to-br from-jet-green to-jet-green-dark text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                   </div>
                </div>
              )}

              {/* Icon */}
              <div 
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 animate-float"
                style={{
                    background: `linear-gradient(135deg, ${platform.color}10, ${platform.color}05)`,
                    boxShadow: `0 4px 12px ${platform.color}20`
                }}
              >
                  <platform.icon 
                    className="w-9 h-9 transition-colors duration-300" 
                    style={{ color: platform.color }}
                  />
              </div>

              {/* Content */}
              <div className="relative z-10">
                 <h3 className="text-2xl font-bold text-navy mb-2">{platform.name}</h3>
                 <div className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-4">
                    {platform.bestFor}
                 </div>
                 <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
                    {platform.desc}
                 </p>
                 
                 {/* Features */}
                 <ul className="space-y-3 mb-8">
                    {platform.features.map((feat, idx) => (
                       <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                          <div className="mt-0.5 rounded-full bg-jet-green/10 p-0.5">
                             <Check className="w-3 h-3 text-jet-green" strokeWidth={3} />
                          </div>
                          {feat}
                       </li>
                    ))}
                 </ul>

                 {/* Link */}
                 <div className="flex items-center gap-2 text-jet-blue font-bold text-sm cursor-pointer group/link">
                    <span>Explore {platform.name}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MainContent: React.FC = () => {
  const { isFormOpen, openForm, closeForm } = useForm();
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const bottom = hero.getBoundingClientRect().bottom;
        setShowFloatingCTA(bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Shared Header */}
      <Header basePath="/us" variant="solid" />

      {/* Jump Nav */}
      <JumpNav />

      {/* Main Content */}
      <main className="pt-[60px] md:pt-[72px]">
        <Hero />
        <Problem />
        <Method />
        <Platforms />
        
        {/* ENHANCED SECTIONS */}
        <B2BSection />
        <StartupSection />
        <CaseStudiesSection />
        <MigrationSection />
        <IndustriesSection />
        <LocalSection />
        <ComparisonsSection />
        <ROISection />
        <PricingSection />

        <ExpandedFAQ />
        
        {/* Final CTA */}
        <div className="mb-24 md:mb-0">
          <section className="relative py-20 px-4 md:py-32 overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
              <div className="relative rounded-[3rem] bg-[#0F172A] overflow-hidden shadow-2xl border border-white/10 group isolation-auto">
                
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 translate-x-[-100%] animate-[shimmer_8s_infinite]"></div>
                
                {/* Glowing Orbs */}
                <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-jet-blue/40 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-jet-orange/30 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse-slow [animation-delay:2s]"></div>

                <div className="relative z-10 px-6 py-16 md:py-28 text-center">
                  
                  {/* Floating Badge */}
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-widest mb-10 backdrop-blur-md shadow-lg animate-float">
                    <Rocket className="w-4 h-4 text-jet-orange" />
                    <span>Launch in 21 Days</span>
                  </div>

                  <h2 className="text-3xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-8 tracking-tight leading-[1.1]">
                    Ready to Build Your <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-jet-blue via-cyan-400 to-white drop-shadow-lg block mt-2 md:inline md:mt-0">
                      Growth Engine?
                    </span>
                  </h2>

                  <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Stop renting a website. Own a digital asset that drives revenue.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                    <button onClick={() => openForm('Footer Strategy')} className="group relative px-8 md:px-10 py-5 bg-white text-navy font-bold text-lg rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 overflow-hidden w-full sm:w-auto">
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Book Strategy Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                    
                    <button onClick={() => openForm('Footer Quick Quote')} className="group px-8 md:px-10 py-5 bg-white/5 text-white border border-white/10 font-bold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
                      Get Quick Quote
                    </button>
                  </div>

                  <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-6">
                    {[
                      { label: 'Technical Excellence', icon: Code2 },
                      { label: 'Speed', icon: Zap },
                      { label: 'Transparency', icon: CheckCircle },
                      { label: 'Ownership', icon: Lock },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold text-white/60 uppercase tracking-wider group-hover:text-white/90 transition-colors">
                        <item.icon className="w-4 h-4 md:w-5 md:h-5 text-jet-blue" />
                        {item.label}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FooterUS />

      {/* Lead Form Modal */}
      <LeadForm 
        isOpen={isFormOpen} 
        onClose={closeForm} 
      />

      {/* Floating Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-40 md:hidden transition-transform duration-300 flex gap-3 ${showFloatingCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <button 
          onClick={() => openForm('Floating Mobile')}
          className="flex-1 bg-jet-blue text-white font-bold h-12 rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
        <button onClick={() => openForm('Floating Mobile Icon')} className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-jet-blue border border-slate-200 active:scale-95 transition-transform">
          <Smartphone className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

const UsWebServicePage: React.FC = () => {
  return (
    <FormProvider>
      <MainContent />
    </FormProvider>
  );
};

export default UsWebServicePage;