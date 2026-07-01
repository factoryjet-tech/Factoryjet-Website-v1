'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe,
  RefreshCw,
  ShoppingCart,
  CreditCard,
  Bot,
  BarChart2,
  Sparkles,
  Clock,
  ArrowRight,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────────────────────── */
type ServiceId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface Service {
  id: ServiceId;
  num: string;
  category: string;
  name: string;
  tagline: string;
  timeline: string;
  timelineLabel: string;
  deliverables: string[];
  stackLabel: string;
  stack: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  icon: React.ReactNode;
  /** Optional background image path (public/images/services/…) rendered at low opacity */
  imageSrc?: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Constants
───────────────────────────────────────────────────────────────────────────── */
const ORANGE = '#F05A28';
const AUTO_INTERVAL = 5000;
const PROGRESS_TICK = 50;
const RESUME_DELAY = 3000;
const ICON_SIZE = 18;

/* ─────────────────────────────────────────────────────────────────────────────
   Service Data
───────────────────────────────────────────────────────────────────────────── */
const SERVICES: Service[] = [
  {
    id: 1,
    num: '01',
    category: 'Web Development',
    name: 'Web Design & Development',
    tagline: 'Custom websites engineered for speed, SEO, and conversions — shipped in 7 days.',
    timeline: '7-day delivery',
    timelineLabel: 'Delivery',
    deliverables: [
      'Lighthouse 100/100 performance score',
      'Mobile-first responsive design',
      'GA4 + Google Search Console setup',
      'Full GitHub ownership on delivery',
      '30-day post-launch support window',
    ],
    stackLabel: 'Built on',
    stack: ['WordPress', 'Next.js', 'Webflow', 'Framer', 'Custom Stack'],
    primaryCta: { label: 'See web design services', href: '/services/web-design' },
    secondaryCta: { label: 'Book a call', href: '/contact' },
    icon: <Globe size={ICON_SIZE} />,
    imageSrc: '/images/services/web-design.webp',
  },
  {
    id: 2,
    num: '02',
    category: 'Web Development',
    name: 'Website Redesign',
    tagline: 'Modernize your site without losing SEO equity — Core Web Vitals green in 7 days.',
    timeline: '7-day delivery',
    timelineLabel: 'Delivery',
    deliverables: [
      'Full visual & UX overhaul',
      'Core Web Vitals fix & Lighthouse audit',
      'SEO-safe content migration',
      'On-page SEO & schema markup',
      'Structured redirect mapping',
    ],
    stackLabel: 'We migrate from',
    stack: ['WordPress', 'Wix', 'Squarespace', 'Webflow', 'Legacy HTML'],
    primaryCta: { label: 'See redesign services', href: '/services/website-redesign' },
    secondaryCta: { label: 'Book a call', href: '/contact' },
    icon: <RefreshCw size={ICON_SIZE} />,
    imageSrc: '/images/services/website-redesign.webp',
  },
  {
    id: 3,
    num: '03',
    category: 'E-Commerce',
    name: 'Shopify Development',
    tagline: 'Custom Shopify stores built for conversion — fast, branded, and fully yours.',
    timeline: '7–14 days',
    timelineLabel: 'Timeline',
    deliverables: [
      'Custom theme design (no templates)',
      'Full product catalog & collections setup',
      'Payment gateway & checkout optimisation',
      'Inventory, shipping & tax configuration',
      'Mobile-first storefront performance',
    ],
    stackLabel: 'Platform',
    stack: ['Shopify', 'Shopify Plus'],
    primaryCta: { label: 'See Shopify services', href: '/services/shopify-development' },
    secondaryCta: { label: 'Book a call', href: '/contact' },
    icon: <ShoppingCart size={ICON_SIZE} />,
    imageSrc: '/images/services/shopify.webp',
  },
  {
    id: 4,
    num: '04',
    category: 'E-Commerce',
    name: 'Custom E-Commerce',
    tagline: 'Headless storefronts with multi-currency, ERP integration, and no platform limits.',
    timeline: '4–6 weeks',
    timelineLabel: 'Timeline',
    deliverables: [
      'Custom storefront architecture',
      'Payment, tax & ERP integration',
      'Multi-currency & global checkout',
      'Headless & composable commerce',
      'Performance-first product pages',
    ],
    stackLabel: 'Platforms',
    stack: ['WooCommerce', 'Magento', 'Commerceflow', 'Headless / Custom'],
    primaryCta: { label: 'See e-commerce services', href: '/services/ecommerce-development' },
    secondaryCta: { label: 'Book a call', href: '/contact' },
    icon: <CreditCard size={ICON_SIZE} />,
    imageSrc: '/images/services/custom-ecommerce.webp',
  },
  {
    id: 5,
    num: '05',
    category: 'AI Services',
    name: 'AI Agent Development',
    tagline: 'Deploy AI agents that qualify leads, handle support, and automate workflows 24/7.',
    timeline: '4–6 weeks',
    timelineLabel: 'Build time',
    deliverables: [
      'AI agent architecture & design',
      'CRM, API & webhook integrations',
      'Human-in-the-loop escalation flows',
      'Testing, QA & production monitoring',
      'Ongoing performance tuning',
    ],
    stackLabel: 'Built with',
    stack: ['Google Gemini', 'Anthropic Claude', 'OpenAI ChatGPT', 'KIMI', 'n8n'],
    primaryCta: { label: 'See AI agent services', href: '/services/ai-agents' },
    secondaryCta: { label: 'Book a call', href: '/contact' },
    icon: <Bot size={ICON_SIZE} />,
    imageSrc: '/images/services/ai-agents.webp',
  },
  {
    id: 6,
    num: '06',
    category: 'AI Services',
    name: 'AI SEO',
    tagline: 'Get found in Google AI Overviews, ChatGPT, Perplexity, and Gemini — not just search.',
    timeline: 'Ongoing · 30-day onboarding',
    timelineLabel: 'Engagement',
    deliverables: [
      'GEO + AEO optimisation strategy',
      'Schema markup, entity linking & citable content',
      'Programmatic page generation at scale',
      'Weekly AI search visibility reports',
      'Content authority & topical cluster build',
    ],
    stackLabel: 'Ranking you on',
    stack: ['Google AI Overviews', 'ChatGPT', 'Perplexity', 'Gemini', 'Claude.ai'],
    primaryCta: { label: 'Learn about AI SEO', href: '/contact' },
    secondaryCta: { label: 'Book a call', href: '/contact' },
    icon: <BarChart2 size={ICON_SIZE} />,
    imageSrc: '/images/services/ai-seo.webp',
  },
  {
    id: 7,
    num: '07',
    category: 'AI Services',
    name: 'AI Creative Studio',
    tagline: 'Brand-consistent AI images, video, and ad creative — delivered in 48 hours.',
    timeline: '48-hr turnaround',
    timelineLabel: 'Turnaround',
    deliverables: [
      'AI image & video ad creative',
      'Brand-consistent visual output',
      'Social, display & performance ad packs',
      'Dedicated creative team + variants',
      'Batch delivery ready for launch',
    ],
    stackLabel: 'Powered by',
    stack: ['Higgsfield', 'Seedance', 'FLUX', 'Kling', 'LTX', 'HeyGen'],
    primaryCta: { label: 'Explore AI Creative Studio', href: '/contact' },
    secondaryCta: { label: 'Book a call', href: '/contact' },
    icon: <Sparkles size={ICON_SIZE} />,
    imageSrc: '/images/services/ai-creative.webp',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────────────────── */
export default function ServicesGrid() {
  const [activeId, setActiveId] = useState<ServiceId>(1);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const chipNavRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeService = SERVICES.find((s) => s.id === activeId)!;

  /* ── Sync ref ───────────────────────────────────────────────────────────── */
  useEffect(() => { pausedRef.current = paused; }, [paused]);

  /* ── Auto-advance ───────────────────────────────────────────────────────── */
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      if (pausedRef.current) return;
      setActiveId((prev) => {
        const idx = SERVICES.findIndex((s) => s.id === prev);
        return SERVICES[(idx + 1) % SERVICES.length].id as ServiceId;
      });
    }, AUTO_INTERVAL);
    return () => clearTimeout(timer);
  }, [activeId, paused]);

  /* ── Progress bar ───────────────────────────────────────────────────────── */
  useEffect(() => {
    setProgress(0);
    if (paused) return;
    const interval = setInterval(() => {
      if (pausedRef.current) return;
      setProgress((p) => Math.min(p + (PROGRESS_TICK / AUTO_INTERVAL) * 100, 100));
    }, PROGRESS_TICK);
    return () => clearInterval(interval);
  }, [activeId, paused]);

  /* ── Mobile chip auto-scroll ────────────────────────────────────────────── */
  useEffect(() => {
    const nav = chipNavRef.current;
    if (!nav) return;
    const chip = nav.querySelector<HTMLElement>(`[data-chip="${activeId}"]`);
    if (!chip) return;
    const navW = nav.offsetWidth;
    nav.scrollTo({ left: chip.offsetLeft - navW / 2 + chip.offsetWidth / 2, behavior: 'smooth' });
  }, [activeId]);

  /* ── Handlers ───────────────────────────────────────────────────────────── */
  const handleSelect = useCallback((id: ServiceId) => {
    setActiveId(id);
    setPaused(true);
    setProgress(0);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  }, []);

  const handleMouseEnter = useCallback(() => setPaused(true), []);
  const handleMouseLeave = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setPaused(false);
  }, []);

  return (
    <>
      <style>{`
        @keyframes svFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sv-panel-content { animation: svFadeIn 0.28s ease both; }
        .sv-chip-nav { scrollbar-width: none; -ms-overflow-style: none; }
        .sv-chip-nav::-webkit-scrollbar { display: none; }
        .sv-nav-row { transition: background-color 0.14s, border-color 0.14s; }
        .sv-nav-row:hover { background-color: rgba(240,90,40,0.05); }
      `}</style>

      <section id="services" className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section header ──────────────────────────────────────────────── */}
          <div className="mb-10 md:mb-14 max-w-3xl">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: ORANGE }}
            >
              OUR SERVICES
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ color: '#111118' }}
            >
              Seven specialized services.{' '}
              <span style={{ color: ORANGE }}>One accountable team.</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#666' }}>
              From web design and Shopify development to AI agents and AI-powered SEO —
              transparent, fixed-price quotes, 7-day delivery, every deliverable fully yours on handover.
            </p>
          </div>

          {/* ── Split panel ─────────────────────────────────────────────────── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: '0.5px solid rgba(0,0,0,0.08)',
              boxShadow: '0 2px 32px rgba(0,0,0,0.06)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >

            {/* ── Mobile chip nav ─────────────────────────────────────────── */}
            <div
              className="block lg:hidden"
              style={{ backgroundColor: '#fff', borderBottom: '0.5px solid rgba(0,0,0,0.07)' }}
            >
              <div className="h-0.5 w-full" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
                <div
                  className="h-0.5"
                  style={{ width: `${progress}%`, backgroundColor: ORANGE, transition: 'none' }}
                />
              </div>
              <div ref={chipNavRef} className="sv-chip-nav flex gap-2 px-4 py-3 overflow-x-auto">
                {SERVICES.map((svc) => {
                  const isActive = activeId === svc.id;
                  return (
                    <button
                      key={svc.id}
                      data-chip={svc.id}
                      onClick={() => handleSelect(svc.id)}
                      className="flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: isActive ? ORANGE : 'rgba(0,0,0,0.05)',
                        color: isActive ? '#fff' : 'rgba(0,0,0,0.5)',
                        border: isActive ? `1px solid ${ORANGE}` : '1px solid rgba(0,0,0,0.08)',
                        transition: 'background-color 0.15s, color 0.15s',
                      }}
                    >
                      <span className="text-xs font-mono opacity-50 mr-1">{svc.num}</span>
                      {svc.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Main layout ─────────────────────────────────────────────── */}
            <div className="flex flex-col lg:flex-row" style={{ minHeight: 520 }}>

              {/* LEFT: flat service list — desktop only */}
              <div
                className="hidden lg:flex flex-col"
                style={{
                  width: 254,
                  backgroundColor: '#fff',
                  flexShrink: 0,
                  borderRight: '0.5px solid rgba(0,0,0,0.07)',
                }}
              >
                {/* Progress bar */}
                <div className="h-0.5 w-full" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
                  <div
                    className="h-0.5"
                    style={{ width: `${progress}%`, backgroundColor: ORANGE, transition: 'none' }}
                  />
                </div>

                {/* Service rows */}
                <nav className="flex-1 py-3" aria-label="Services navigation">
                  {SERVICES.map((svc) => {
                    const isActive = activeId === svc.id;
                    return (
                      <button
                        key={svc.id}
                        className="sv-nav-row w-full text-left px-4 py-3 flex items-center justify-between gap-3"
                        onClick={() => handleSelect(svc.id)}
                        onMouseEnter={() => handleSelect(svc.id)}
                        style={{
                          backgroundColor: isActive ? 'rgba(240,90,40,0.07)' : 'transparent',
                          borderLeft: isActive ? `3px solid ${ORANGE}` : '3px solid transparent',
                        }}
                        aria-pressed={isActive}
                      >
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="text-sm font-medium leading-snug truncate"
                            style={{ color: isActive ? '#111118' : '#888' }}
                          >
                            {svc.name}
                          </div>
                          <div className="text-xs mt-0.5" style={{ color: '#bbb' }}>
                            {svc.category}
                          </div>
                        </div>
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: isActive ? ORANGE : 'rgba(0,0,0,0.14)' }}
                        />
                      </button>
                    );
                  })}
                </nav>

                {/* CTA strip */}
                <div
                  className="px-4 py-4"
                  style={{
                    backgroundColor: 'rgba(240,90,40,0.05)',
                    borderTop: '0.5px solid rgba(240,90,40,0.12)',
                  }}
                >
                  <p className="text-xs mb-2" style={{ color: 'rgba(0,0,0,0.38)' }}>
                    Not sure which service fits?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: ORANGE }}
                  >
                    Get a quote <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* RIGHT: crystal glass detail panel */}
              <div
                className="flex-1 relative overflow-hidden"
                style={{
                  background:
                    'linear-gradient(145deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.86) 100%)',
                }}
              >
                {/* Background service image — rendered per active service at 12% opacity */}
                {activeService.imageSrc && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 0,
                      pointerEvents: 'none',
                      opacity: 0.12,
                    }}
                  >
                    <Image
                      key={activeService.id}
                      src={activeService.imageSrc}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                  </div>
                )}

                {/* Pre-blurred colour blobs for crystal depth */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-20px',
                    width: 300,
                    height: 300,
                    background: 'rgba(240,90,40,0.09)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: '-40px',
                    left: '35%',
                    width: 220,
                    height: 220,
                    background: 'rgba(80,100,220,0.05)',
                    borderRadius: '50%',
                    filter: 'blur(70px)',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />

                {/* Crystal top-edge highlight */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: 'rgba(255,255,255,1)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                />

                {/* Watermark service number */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: 16,
                    right: 24,
                    fontSize: 'clamp(80px, 12vw, 160px)',
                    lineHeight: 1,
                    color: ORANGE,
                    opacity: 0.04,
                    fontWeight: 700,
                    zIndex: 0,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {activeService.num}
                </div>

                {/* Animated content — key forces remount → fade-in on change */}
                <div
                  key={activeId}
                  className="sv-panel-content relative flex flex-col h-full p-6 sm:p-8 lg:p-10"
                  style={{ zIndex: 2 }}
                >
                  {/* Category + delivery meta */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: ORANGE }}
                    >
                      {activeService.category}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-block',
                        width: 1,
                        height: 12,
                        backgroundColor: 'rgba(0,0,0,0.15)',
                      }}
                    />
                    <span
                      className="inline-flex items-center gap-1.5 text-xs"
                      style={{ color: 'rgba(0,0,0,0.4)' }}
                    >
                      <Clock size={10} />
                      {activeService.timelineLabel}: {activeService.timeline}
                    </span>
                  </div>

                  {/* Service name */}
                  <h3
                    className="text-2xl sm:text-3xl font-bold leading-tight mb-3"
                    style={{ color: '#111118' }}
                  >
                    {activeService.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#666' }}>
                    {activeService.tagline}
                  </p>

                  {/* Delivery badge */}
                  <div
                    className="inline-flex items-center gap-1.5 mb-5 self-start px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: 'rgba(240,90,40,0.08)',
                      border: '0.5px solid rgba(240,90,40,0.28)',
                      color: ORANGE,
                    }}
                  >
                    ⚡ {activeService.timeline}
                  </div>

                  {/* Divider */}
                  <div
                    className="mb-5"
                    style={{ height: '0.5px', backgroundColor: 'rgba(0,0,0,0.07)' }}
                  />

                  {/* Deliverables + Stack */}
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-8 flex-1">

                    {/* Deliverables */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs font-semibold tracking-widest uppercase mb-3"
                        style={{ color: 'rgba(0,0,0,0.3)' }}
                      >
                        What you get
                      </p>
                      <ul className="space-y-2">
                        {activeService.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span
                              aria-hidden="true"
                              style={{
                                color: ORANGE,
                                fontSize: 11,
                                marginTop: 3,
                                flexShrink: 0,
                                fontWeight: 600,
                              }}
                            >
                              →
                            </span>
                            <span
                              className="text-sm leading-snug"
                              style={{ color: '#555' }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="flex-shrink-0 sm:w-48">
                      <p
                        className="text-xs font-semibold tracking-widest uppercase mb-3"
                        style={{ color: 'rgba(0,0,0,0.3)' }}
                      >
                        {activeService.stackLabel}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {activeService.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-md"
                            style={{
                              backgroundColor: 'rgba(0,0,0,0.05)',
                              border: '0.5px solid rgba(0,0,0,0.09)',
                              color: '#444',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      href={activeService.primaryCta.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: ORANGE }}
                    >
                      {activeService.primaryCta.label}
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href={activeService.secondaryCta.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:bg-black/5"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.04)',
                        color: '#555',
                        border: '0.5px solid rgba(0,0,0,0.1)',
                      }}
                    >
                      {activeService.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
