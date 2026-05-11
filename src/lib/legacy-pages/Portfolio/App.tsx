'use client';

import React, { useState, useMemo, useRef } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick } from '@/utils/gtm';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, type PortfolioItem, type PortfolioCategoryFilter } from './data';

interface PortfolioPageProps {
  basePath?: string;
}

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.02, z: 50 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group relative w-full mb-4 md:mb-8 perspective-1000"
    >
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
        <div
          className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-slate-100 group-hover:shadow-[0_20px_50px_-12px_rgba(0,82,204,0.15)] transition-shadow duration-300 h-full flex flex-col"
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Logo Area */}
          <div className="relative overflow-hidden h-48 md:h-64 w-full bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #334155 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />

            {/* Category badge */}
            <div className="absolute top-2 md:top-4 left-2 md:left-4 z-20">
              <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] md:text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-sm border border-slate-100/50">
                {item.category}
              </span>
            </div>

            {/* Brand Logo */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8 md:p-12">
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="max-h-20 md:max-h-28 max-w-[70%] object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const fallback = document.createElement('span');
                    fallback.className = 'fallback-text text-2xl md:text-3xl font-bold text-slate-300 font-display';
                    fallback.textContent = item.name;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ExternalLink size={20} className="md:w-6 md:h-6" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="mt-auto pt-4 md:pt-5 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
                  <Globe size={14} className="text-primary" />
                  <span className="truncate max-w-[180px]">
                    {item.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                  </span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0 hidden md:block">
                  <div className="text-primary font-medium text-sm flex items-center gap-1">
                    Visit <ExternalLink size={14} />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                {item.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] md:text-[10px] bg-slate-50 text-slate-500 px-1.5 md:px-2 py-0.5 md:py-1 rounded border border-slate-100">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const PortfolioPage: React.FC<PortfolioPageProps> = ({ basePath = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategoryFilter>('All');
  const { openModal } = useContactModal();
  const isUS = basePath === '/us';

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans">

      <main className="flex-grow pt-8 md:pt-12 pb-12 md:pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs md:text-sm font-medium text-primary">Our Portfolio</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
              Websites we&apos;ve built for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                ambitious brands
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-6 md:mb-8 px-2 md:px-0">
              From e-commerce stores to SaaS platforms, explore the diverse range of websites we&apos;ve crafted for businesses worldwide.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <div key={item.id} className="break-inside-avoid">
                  <PortfolioCard item={item} />
                </div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-500 text-lg">No projects found for this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-primary font-medium hover:underline"
              >
                View all projects
              </button>
            </motion.div>
          )}
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-32">
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 font-display">
                Want a website like these?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-6 md:mb-10 text-base md:text-lg px-2 md:px-0">
                Let&apos;s build something exceptional together. Get a world-class website delivered in weeks, not months.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <button
                  onClick={() => {
                    trackCTAClick('start_a_project', 'portfolio_cta', 'primary');
                    openModal();
                  }}
                  className="w-full sm:w-auto bg-secondary hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Start a Project <ArrowRight size={18} className="md:w-5 md:h-5" />
                </button>
                <Link
                  href={isUS ? '/us/pricing' : '/pricing'}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all backdrop-blur-sm border border-white/10 text-center text-sm md:text-base"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default PortfolioPage;
