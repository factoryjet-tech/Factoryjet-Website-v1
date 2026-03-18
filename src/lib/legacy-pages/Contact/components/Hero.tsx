import React from 'react';
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Track WhatsApp click conversion for Google Ads
const trackWhatsAppConversion = () => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-11127037244/N5PhCPWusNQbELy65Lkp'
    });
  }
};

const Hero: React.FC = () => {
  return (
    <section className="relative bg-jetBlue text-white overflow-hidden pb-12 md:pb-16 pt-20 md:pt-24 lg:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Response Time Guarantee Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-jetGreen/20 border border-jetGreen/50 text-jetGreen bg-white rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-5 md:mb-6 shadow-lg backdrop-blur-sm"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jetGreen opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-jetGreen"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">Guaranteed Response within 2 Business Hours</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6 leading-tight"
        >
          Get in Touch With FactoryJet <br />
          <span className="text-blue-200">Your Digital Transformation Starts Here</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          Ready to accelerate your business growth with world-class digital solutions? Our team of experts is here to help. Whether you need a new website, e-commerce platform, digital marketing, CRM, ERP, or AI solutions&mdash;let's discuss how we can drive measurable results for your business. Free consultation, no obligations.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <a href="#contact-form" className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-jetOrange hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex gap-4 w-full sm:w-auto">
            <a href="tel:+919699977699" className="flex-1 sm:flex-none px-4 py-3 sm:px-6 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg font-semibold transition-all text-center">
              Call Us Now
            </a>
            <a href="https://wa.me/919699977699?text=Hi%20FactoryJet" onClick={trackWhatsAppConversion} className="flex-1 sm:flex-none px-4 py-3 sm:px-6 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg font-semibold transition-all text-center">
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
