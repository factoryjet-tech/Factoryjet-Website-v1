
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT } from '../data';
import { ArrowRight, Globe, Code2, TrendingUp, Users, Activity } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick } from '@/utils/gtm';
import AuthorByline from '@/components/AuthorByline';

export const Hero = () => {
  const { openModal } = useContactModal();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  // Removed the opacity transform that was causing the element to disappear
  // const opacity = useTransform(scrollY, [0, 300], [1, 0]); 

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-slate-50 pt-10 md:pt-8">
      {/* 1. Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Main Aura */}
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-orange-400/20 blur-[120px] animate-pulse-slow" />

        {/* Secondary Orbs */}
        <div className="absolute top-[10%] right-[10%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-jet-blue/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-jet-orange/5 rounded-full blur-[80px]" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* 2. Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-default group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-slate-600 tracking-wide uppercase group-hover:text-jet-blue transition-colors">
              Accepting New Projects
            </span>
          </div>
        </motion.div>

        {/* 3. Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-6xl mx-auto px-4"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 md:mb-8 drop-shadow-sm">
            Web Design Company in India That Builds for{' '}<br className="hidden md:block" />
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-jet-blue via-indigo-600 to-purple-600">
                Conversion
              </span>
              {/* Underline decoration */}
              <svg className="absolute -bottom-1 md:-bottom-2 lg:-bottom-4 left-0 w-full h-2 md:h-3 lg:h-6 text-jet-orange opacity-100" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" className="animate-[dash_1.5s_ease-in-out_forwards]" strokeDasharray="100" strokeDashoffset="100" />
                <style>{`
                  @keyframes dash {
                    to { stroke-dashoffset: 0; }
                  }
                `}</style>
              </svg>
            </span>
          </h1>
          <AuthorByline />
        </motion.div>

        {/* 4. Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg lg:text-2xl text-slate-600 text-center max-w-3xl mx-auto mb-8 md:mb-10 px-4 leading-relaxed font-light"
        >
          {HERO_CONTENT.subHeadline.split('.')[0]}. <span className="hidden md:inline">{HERO_CONTENT.subHeadline.split('.')[1]}.</span>
        </motion.p>

        {/* 5. CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-16 md:mb-24 relative z-20 px-4"
        >
          {HERO_CONTENT.ctas.slice(0, 2).map((cta, idx) => (
            <button
              key={idx}
              onClick={() => {
                trackCTAClick(cta.text.toLowerCase().replace(/\s+/g, '_'), 'webdesign_hero', cta.primary ? 'primary' : 'secondary');
                openModal();
              }}
              className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 ${
                cta.primary
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800 hover:shadow-2xl'
                  : 'bg-white text-slate-700 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                {cta.text}
                {cta.primary && <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />}
              </span>
            </button>
          ))}
        </motion.div>

        {/* 6. Abstract Visual / 2.5D Element */}
        <motion.div 
          style={{ y: y1 }}
          className="relative w-full max-w-5xl mx-auto perspective-1000 hidden md:block"
        >
          {/* Main Interface Window */}
          <div className="relative bg-white rounded-t-2xl shadow-2xl border border-slate-200 overflow-hidden mx-4 md:mx-0 transform rotate-x-12 origin-bottom transition-transform duration-1000 group hover:rotate-x-0 hover:scale-[1.02]">
            {/* Window Header */}
            <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 flex-1 h-5 bg-white border border-slate-200 rounded-full max-w-[400px] mx-auto shadow-inner flex items-center px-3 text-[10px] text-slate-400">
                factoryjet.com/success-stories
              </div>
            </div>
            
            {/* Real Website Mockup Content */}
            <div className="aspect-[16/8] bg-slate-50 relative overflow-hidden flex flex-col">
               {/* Mock Nav */}
               <div className="h-14 border-b border-slate-200 bg-white/80 backdrop-blur-sm flex items-center justify-between px-8 z-20">
                 <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded bg-indigo-600"></div>
                   <div className="w-24 h-3 bg-slate-800 rounded-full"></div>
                 </div>
                 <div className="flex gap-6">
                   <div className="w-16 h-2 bg-slate-300 rounded-full"></div>
                   <div className="w-16 h-2 bg-slate-300 rounded-full"></div>
                   <div className="w-16 h-2 bg-slate-300 rounded-full"></div>
                 </div>
                 <div className="w-24 h-8 rounded-lg bg-slate-900"></div>
               </div>

               {/* Mock Body */}
               <div className="flex-1 p-10 grid grid-cols-12 gap-10 items-center bg-slate-50/50">
                  {/* Left Column: Hero Text */}
                  <div className="col-span-5 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                       New Version 2.0
                    </div>
                    <div className="space-y-3">
                       <div className="h-8 w-full bg-slate-800 rounded-lg"></div>
                       <div className="h-8 w-3/4 bg-slate-800 rounded-lg"></div>
                    </div>
                    <div className="space-y-2 pt-2">
                       <div className="h-3 w-full bg-slate-300 rounded-full"></div>
                       <div className="h-3 w-5/6 bg-slate-300 rounded-full"></div>
                    </div>
                    <div className="flex gap-3 pt-4">
                       <div className="h-10 w-32 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20"></div>
                       <div className="h-10 w-32 bg-white border border-slate-200 rounded-lg"></div>
                    </div>
                    <div className="pt-6 flex items-center gap-4">
                       <div className="flex -space-x-2">
                          {[1,2,3].map(i => (
                             <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-50 bg-slate-200"></div>
                          ))}
                       </div>
                       <div className="h-3 w-32 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Right Column: Dashboard UI */}
                  <div className="col-span-7 relative">
                    <div className="relative z-10 bg-white rounded-xl shadow-xl border border-slate-200 p-5">
                       <div className="flex justify-between items-center mb-6">
                          <div className="space-y-1">
                             <div className="h-3 w-20 bg-slate-300 rounded-full"></div>
                             <div className="h-5 w-32 bg-slate-800 rounded"></div>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100"></div>
                       </div>
                       {/* Chart Area */}
                       <div className="flex items-end gap-3 h-32 mb-2">
                          {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                             <div key={i} className="flex-1 bg-indigo-50 rounded-t-lg relative group">
                                <div 
                                  className={`absolute bottom-0 left-0 right-0 rounded-t-lg transition-all duration-1000 ${i === 5 ? 'bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.3)]' : 'bg-indigo-200'}`}
                                  style={{ height: `${h}%` }}
                                ></div>
                             </div>
                          ))}
                       </div>
                    </div>
                    
                    {/* Floating Stats Card 1 */}
                    <div className="absolute -right-6 -top-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 z-20 animate-pulse-slow">
                       <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-green-100 rounded-lg text-green-600">
                             <TrendingUp className="w-4 h-4" />
                          </div>
                          <div className="text-xs font-bold text-slate-500">Revenue</div>
                       </div>
                       <div className="text-xl font-bold text-slate-900">+128%</div>
                    </div>

                    {/* Floating Stats Card 2 */}
                    <div className="absolute -left-6 -bottom-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 z-20">
                       <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                             <Users className="w-4 h-4" />
                          </div>
                          <div className="text-xs font-bold text-slate-500">Visitors</div>
                       </div>
                       <div className="text-xl font-bold text-slate-900">8.4k</div>
                       <div className="flex -space-x-1 mt-2">
                           {[1,2,3,4].map(i => <div key={i} className="w-5 h-5 rounded-full bg-slate-100 border border-white"></div>)}
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Floating Elements (Parallax) */}
          <motion.div 
             style={{ y: y2 }}
             className="absolute -top-12 -right-12 p-5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-glass border border-white/50 hidden lg:block z-30"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Globe className="w-6 h-6 text-jet-blue" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Global Scale</div>
                <div className="text-[10px] text-slate-500 font-mono">CDN Ready</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
             style={{ y: y2 }}
             className="absolute -left-12 bottom-20 p-5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-glass border border-white/50 hidden lg:block z-30"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg">
                <Code2 className="w-6 h-6 text-jet-orange" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Clean Code</div>
                <div className="text-[10px] text-slate-500 font-mono">Next.js 14+</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
