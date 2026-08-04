'use client';

import React, { useState, useMemo, useRef } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Globe } from 'lucide-react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, type PortfolioItem, type PortfolioCategoryFilter } from '@/lib/legacy-pages/Portfolio/data';

/* ─── Portfolio Card ─────────────────────────────────────────────────────── */

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
          className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-fj-neutral-100 group-hover:shadow-[0_20px_50px_-12px_rgba(0,82,204,0.15)] transition-shadow duration-300 h-full flex flex-col"
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Logo Area */}
          <div className="relative overflow-hidden h-48 md:h-64 w-full bg-gradient-to-br from-fj-neutral-50 via-white to-fj-neutral-50">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#F05A28]/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-fj-jet-orange/5 rounded-full blur-2xl" />

            {/* Category badge */}
            <div className="absolute top-2 md:top-4 left-2 md:left-4 z-20">
              <span className="bg-white/90 backdrop-blur-sm text-fj-neutral-600 text-[10px] md:text-xs font-semibold font-fj-body px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-sm border border-fj-neutral-100">
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
                    fallback.className = 'fallback-text text-2xl md:text-3xl font-bold text-fj-neutral-200 font-fj-display';
                    fallback.textContent = item.name;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-fj-ink/60 to-fj-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ExternalLink size={20} className="md:w-6 md:h-6" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 flex flex-col flex-grow font-fj-body">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-bold text-fj-ink mb-1 font-fj-display group-hover:text-[#F05A28] transition-colors">
                  {item.name}
                </h2>
                <p className="text-fj-neutral-400 text-xs md:text-sm line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="mt-auto pt-4 md:pt-5 border-t border-fj-neutral-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs md:text-sm text-fj-neutral-400">
                  <Globe size={14} className="text-[#F05A28]" />
                  <span className="truncate max-w-[180px]">
                    {item.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                  </span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0 hidden md:block">
                  <div className="text-[#B23E13] font-medium text-sm flex items-center gap-1">
                    Visit <ExternalLink size={14} />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                {item.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] md:text-[10px] bg-fj-neutral-50 text-fj-neutral-400 px-1.5 md:px-2 py-0.5 md:py-1 rounded border border-fj-neutral-100">
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

/* ─── Portfolio Grid ─────────────────────────────────────────────────────── */

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategoryFilter>('All');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#B23E13] font-fj-body mb-4">
            Our Portfolio
          </p>
          <h1 className="font-fj-display text-4xl md:text-5xl lg:text-6xl font-bold text-fj-ink mb-6 tracking-tight">
            Websites we&apos;ve built for<br className="hidden md:block" /> ambitious brands
          </h1>
          <p className="text-base md:text-lg text-fj-neutral-400 font-fj-body max-w-2xl mx-auto mb-10">
            From e-commerce stores to SaaS platforms, explore the diverse range of websites we&apos;ve crafted for businesses worldwide.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium font-fj-body transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#B23E13] text-white shadow-lg shadow-fj-jet-blue/25'
                    : 'bg-white text-fj-neutral-600 border border-fj-neutral-200 hover:border-[#F05A28]/30 hover:text-[#F05A28]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Masonry Grid ─────────────────────────────────────────────────── */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-fj-neutral-400 font-fj-body text-lg">No projects found for this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-[#B23E13] font-medium font-fj-body hover:underline"
              >
                View all projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-fj-charcoal rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#F05A28]/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-fj-jet-orange/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F05A28] font-fj-body mb-4">
                Start Your Project
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-fj-charcoal-text mb-4 md:mb-6 font-fj-display">
                Want a website like these?
              </h2>
              <p className="text-fj-charcoal-muted font-fj-body max-w-xl mx-auto mb-6 md:mb-10 text-base md:text-lg">
                Let&apos;s build something exceptional together. Get a world-class website delivered in 7 days: fixed price, full code ownership.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-[#B23E13] hover:bg-[#9A3510] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold font-fj-body transition-all shadow-lg hover:shadow-orange-500/30 text-center text-sm md:text-base"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-fj-charcoal-text px-6 md:px-8 py-3 md:py-4 rounded-full font-bold font-fj-body transition-all backdrop-blur-sm border border-white/10 text-center text-sm md:text-base"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
