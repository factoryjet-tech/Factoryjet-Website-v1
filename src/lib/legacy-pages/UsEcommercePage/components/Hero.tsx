import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Section';
import { useLeadCapture } from '../context/LeadCaptureContext';
import AuthorByline from '@/components/AuthorByline';

const Hero: React.FC = () => {
  const { openForm } = useLeadCapture();

  return (
    <div className="relative bg-slate-900 min-h-[100dvh] flex items-center justify-center overflow-hidden pt-12 pb-12 md:pt-16 md:pb-0">
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

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed px-2">
            Enterprise-grade e-commerce stores delivered in <strong className="text-white">7 days</strong>.
            <br className="hidden sm:block" />
            Built with Silicon Valley precision at SMB pricing.
            <br className="hidden sm:block" />
            100% code ownership with zero vendor lock-in.
          </p>

          <div className="flex justify-center mb-6">
            <AuthorByline variant="dark" />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
            Helping brands build conversion-focused commerce systems that scale revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 w-full sm:w-auto px-4 sm:px-0">
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

          {/* Starting Price Bar */}
          <div className="flex flex-col items-center gap-1 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jet-orange/10 border border-jet-orange/30 text-jet-orange font-bold text-sm">
              Starting at $1,999
            </div>
            <p className="text-xs text-slate-500">Fixed scope • Fixed pricing • No surprises</p>
          </div>

          {/* Trust + Ownership Strip */}
          <div className="border-t border-slate-800/60 pt-8 mt-4">
            <p className="text-xs text-slate-500 mb-6 uppercase tracking-widest font-semibold">Trusted by e-commerce brands across the United States</p>

            {/* Core Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-10 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">523</div>
                <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">Websites Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">500+</div>
                <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">4.9/5</div>
                <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">$50M+</div>
                <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">Revenue Generated for Clients</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-xl md:text-2xl font-bold text-white">200+</div>
                <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">E-Commerce Stores Launched</div>
              </div>
            </div>

            {/* Ownership Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-left max-w-5xl mx-auto border-t border-slate-800/60 pt-8">
              {[
                'Full GitHub Repository Ownership',
                'Zero Vendor Lock-In',
                'Hosting Configured in Your Account',
                'Lighthouse Audited',
                'Core Web Vitals Optimized',
                'WCAG Accessibility Compliance',
                'QA Tested Across 20+ Devices',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="text-jet-green h-4 w-4 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
