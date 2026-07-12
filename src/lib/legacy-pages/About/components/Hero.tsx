import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { HERO_CONTENT } from '../data.constants';
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick } from '@/utils/gtm';

const Hero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-10 md:pt-8">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-jetBlue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-jetOrange/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-jetBlue/10 text-jetBlue font-semibold text-xs md:text-sm mb-6 md:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-jetBlue animate-pulse" />
          About FactoryJet
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6 md:mb-8"
        >
          Your Trusted Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-jetBlue to-jetBlue/70">
            Transformation Partner
          </span> <br />
          for 25+ Years
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto mb-8 md:mb-10 leading-relaxed px-4 md:px-0"
        >
          {HERO_CONTENT.subHeadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4 md:px-0"
        >
          <button
            onClick={() => {
              trackCTAClick('get_started', 'about_hero', 'primary');
              openModal();
            }}
            className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-[#B23E13] text-white font-semibold text-sm md:text-base rounded-lg overflow-hidden shadow-lg shadow-jetOrange/25 hover:shadow-xl hover:shadow-jetOrange/40 transition-all"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button
            onClick={() => {
              trackCTAClick('contact_us', 'about_hero', 'secondary');
              openModal();
            }}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-slate-900 border border-slate-200 font-semibold text-sm md:text-base rounded-lg hover:border-jetBlue hover:text-jetBlue transition-colors flex items-center justify-center gap-2"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center text-slate-400 text-sm"
      >
        <span>Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-slate-200 mt-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-jetBlue animate-dropdown" />
        </div>
      </motion.div> */}

      <style>{`
        @keyframes dropdown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-dropdown {
          animation: dropdown 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;