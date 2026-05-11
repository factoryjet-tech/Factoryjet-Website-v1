
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Users, Zap } from 'lucide-react';
import MultiStepForm from './MultiStepForm';
import AuthorByline from '@/components/AuthorByline';

interface HeroProps {
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center pt-8 pb-8 md:pt-10 md:pb-10 bg-white overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[140px] opacity-70 -z-10" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] opacity-50 -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-center">

          {/* Left Content: Messaging */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-jet-blue/10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-4 md:mb-5 border border-jet-blue/5">
              <span className="w-1.5 h-1.5 bg-jet-green rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-jet-blue uppercase tracking-widest">
                Ahmedabad's #1 Digital Agency 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold font-heading leading-[1.05] mb-4 md:mb-5 text-jet-navy tracking-tight">
              High-Conversion <br />
              <span className="text-jet-blue">Websites Built</span> For <br />
              <span className="text-jet-orange">Ahmedabad SMBs</span>
            </h1>
            <AuthorByline />

            <p className="text-base md:text-lg text-jet-slate mb-6 max-w-xl leading-relaxed">
              Professional web design and e-commerce development launching in 4 weeks.
              Serving 150+ clients in Navrangpura, Prahlad Nagar & SG Highway.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 sm:gap-y-3 gap-x-4 sm:gap-x-6 mb-6 md:mb-8">
              {[
                { text: '150+ Gujarat Clients', icon: <Users size={16} /> },
                { text: '4-Week Delivery', icon: <Zap size={16} /> },
                { text: 'Ahmedabad-Based Team', icon: <MapPin size={16} /> },
                { text: 'Full SEO Support', icon: <CheckCircle2 size={16} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="text-jet-green bg-jet-green/5 p-1 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-jet-navy opacity-80">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Desktop Stats Strip */}
            <div className="hidden sm:flex items-center gap-6 pt-5 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-jet-navy">4.9/5</span>
                <span className="text-[9px] font-bold text-jet-gray uppercase tracking-widest">Google Rating</span>
              </div>
              <div className="w-px h-8 bg-slate-100" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-jet-navy">100%</span>
                <span className="text-[9px] font-bold text-jet-gray uppercase tracking-widest">Local Experts</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Multi-Step Form */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full max-w-full sm:max-w-[480px]">
              <MultiStepForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
