
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp, Award, Clock, IndianRupee } from 'lucide-react';
import MultiStepForm from './MultiStepForm';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-24 md:pt-20">
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50 to-orange-50 rounded-full blur-[200px] opacity-20 pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-100px)]">
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-jet-blue">🚀 Trusted by 200+ Pune & Maharashtra SMBs</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-[1.1] mb-6"
            >
              <span className="bg-gradient-to-r from-jet-blue to-jet-orange bg-clip-text text-transparent">Pune's #1</span>
              <span className="text-jet-navy"> Web Design Agency for Small Business Growth</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-jet-slate max-w-xl mb-8"
            >
              Custom websites that convert visitors into customers. E-commerce stores with UPI & Razorpay. Delivered in 4 weeks. Starting ₹29,999.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <button
                onClick={onOpenModal}
                className="bg-jet-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 hover:bg-orange-600 active:scale-95 transition-all shimmer"
              >
                🚀 Get Free Website Audit
              </button>
              <a
                href="tel:+919699977699"
                className="border-2 border-jet-navy text-jet-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-jet-blue hover:text-white hover:border-jet-blue transition-all"
              >
                📞 Call Now: +91 96999 77699
              </a>
            </motion.div>

            {/* Trust Micro-Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-sm text-jet-gray"
            >
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-jet-green" />
                100% Free, No Obligation
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-jet-green" />
                Response within 2 hours
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-jet-green" />
                No spam, ever
              </span>
            </motion.div>

            {/* Mobile CTA - visible on mobile only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:hidden mt-8"
            >
              <button
                onClick={onOpenModal}
                className="w-full bg-jet-orange text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg shadow-orange-500/20 hover:bg-orange-600 active:scale-95 transition-all shimmer"
              >
                🚀 Get Free Website Audit
              </button>
            </motion.div>
          </div>

          {/* Right Side: Form + Visual */}
          <div className="order-1 lg:order-2 relative">
            {/* Browser Mockup - hidden on mobile, visible on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: -3 }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block absolute -right-8 top-0 w-[350px] z-0"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-float">
                <div className="bg-slate-50 px-4 py-3 flex items-center gap-2 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 text-center">
                    yourbusiness.in
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-slate-50 to-white">
                  <div className="bg-jet-blue/10 rounded-lg h-24 mb-3 flex items-center justify-center">
                    <span className="text-jet-blue font-bold">Your Website</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-100 rounded w-3/4" />
                    <div className="h-3 bg-slate-100 rounded w-1/2" />
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-12 top-20 bg-white px-3 py-2 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2 border border-slate-100"
                style={{ animation: 'float 4s ease-in-out infinite' }}
              >
                <Clock size={14} className="text-jet-blue" />
                4-Week Delivery
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 bottom-20 bg-jet-green text-white px-3 py-2 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2"
                style={{ animation: 'float 5s ease-in-out infinite reverse' }}
              >
                <IndianRupee size={14} />
                Starting ₹29,999
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-8 bottom-8 bg-white px-3 py-2 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2 border border-slate-100"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              >
                <Star className="text-jet-orange fill-jet-orange" size={14} />
                4.9/5 Rating
              </motion.div>
            </motion.div>

            {/* Multi-Step Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10 hidden lg:block"
            >
              <MultiStepForm variant="hero" />
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
