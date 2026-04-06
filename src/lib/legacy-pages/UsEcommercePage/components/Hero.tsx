import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Section';
import { useLeadCapture } from '../context/LeadCaptureContext';
import AuthorByline from '@/components/AuthorByline';

const Hero: React.FC = () => {
  const { openForm } = useLeadCapture();

  return (
    <div className="relative bg-slate-900 min-h-[100dvh] flex items-center justify-center overflow-hidden pt-32 pb-12 md:pt-40 md:pb-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-jet-dark via-jet-dark to-jet-blue/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center h-full">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center rounded-full px-3 py-1.5 md:py-1 text-[10px] md:text-sm font-semibold text-jet-green bg-jet-green/10 border border-jet-green/20 mb-6 md:mb-8 backdrop-blur-sm">
            AMERICA'S AI-NATIVE E-COMMERCE DEVELOPMENT COMPANY
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-tight">
            Your Online Store Should Be Your Best Salesperson. <span className="text-transparent bg-clip-text bg-gradient-to-r from-jet-orange to-amber-500 inline-block">Most Aren't.</span>
          </h1>
          <div className="flex justify-center">
            <AuthorByline variant="dark" />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            FactoryJet is the <strong className="text-white">e-commerce development company</strong> that builds stores engineered for revenue. We've helped 200+ brands achieve 247% revenue increase across <strong className="text-white">Shopify</strong>, <strong className="text-white">Commerceflo</strong>, <strong className="text-white">Adobe Commerce</strong>, and <strong className="text-white">Headless</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 w-full sm:w-auto px-4 sm:px-0">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto text-base md:text-lg px-8 py-4 shadow-lg shadow-orange-900/20"
              onClick={() => openForm('Hero Audit Request')}
            >
              Get Your Free E-Commerce Audit
            </Button>
            <Link
              href="/case"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white text-base md:text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-jet-blue transition-all duration-200"
            >
              View Our Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="border-t border-slate-800/60 pt-8 mt-4">
            <p className="text-xs text-slate-500 mb-6 uppercase tracking-widest font-semibold">Trusted by e-commerce brands across the United States</p>
            
            {/* Brand Names */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-16 mb-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-white text-lg md:text-2xl font-heading font-semibold tracking-tight">Belle Maison</span>
               <span className="text-white text-lg md:text-2xl font-heading font-light tracking-widest uppercase">Bombay Petals</span>
               <span className="text-white text-lg md:text-2xl font-heading font-bold italic">Mawa</span>
               <span className="text-white text-lg md:text-2xl font-heading font-medium tracking-wide">Formative Concepts</span>
            </div>
            
            <div className="hidden md:flex justify-center flex-wrap gap-6 lg:gap-8 text-slate-400 text-xs sm:text-sm font-medium border-t border-slate-800/60 pt-6">
               <div className="flex items-center gap-2"><CheckCircle2 className="text-jet-green h-4 w-4"/> 200+ Stores Launched</div>
               <div className="flex items-center gap-2"><CheckCircle2 className="text-jet-green h-4 w-4"/> $47M+ Generated</div>
               <div className="flex items-center gap-2"><CheckCircle2 className="text-jet-green h-4 w-4"/> 3-4 Week Delivery</div>
               <div className="flex items-center gap-2"><CheckCircle2 className="text-jet-green h-4 w-4"/> 4.9★ Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;