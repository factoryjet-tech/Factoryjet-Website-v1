'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  Globe,
  RefreshCw,
  ShoppingCart,
  CreditCard,
  Bot,
  BarChart2,
  Sparkles,
  Check,
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
  category: 'Web' | 'E-Commerce' | 'AI Services';
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
}

/* ─────────────────────────────────────────────────────────────────────────────
   Service Data
───────────────────────────────────────────────────────────────────────────── */
const ICON_SIZE = 20;

const SERVICES: Service[] = [
  {
    id: 1,
    num: '01',
    category: 'Web',
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
    primaryCta: { label: 'See web design services', href: '/us/services/web-design' },
    secondaryCta: { label: 'Book a free call', href: '/contact' },
    icon: <Globe size={ICON_SIZE} />,
  },
  {
    id: 2,
    num: '02',
    category: 'Web',
    name: 'Website Redesign',
    tagline: 'Modernise your site without losing SEO equity — Core Web Vitals green in 7 days.',
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
    primaryCta: { label: 'See redesign services', href: '/us/services/website-redesign' },
    secondaryCta: { label: 'Book a free call', href: '/contact' },
    icon: <RefreshCw size={ICON_SIZE} />,
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
    primaryCta: { label: 'See Shopify services', href: '/us/services/shopify-development' },
    secondaryCta: { label: 'Book a free call', href: '/contact' },
    icon: <ShoppingCart size={ICON_SIZE} />,
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
    stack: ['WooCommerce', 'Magento', 'Commerceflo', 'Headless / Custom'],
    primaryCta: { label: 'See e-commerce services', href: '/us/services/ecommerce-development' },
    secondaryCta: { label: 'Book a free call', href: '/contact' },
    icon: <CreditCard size={ICON_SIZE} />,
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
    stack: ['GPT-4o', 'Claude Sonnet 4', 'Gemini 2.5 Pro', 'n8n', 'LangGraph'],
    primaryCta: { label: 'See AI agent services', href: '/us/services/ai-agents' },
    secondaryCta: { label: 'Book a free call', href: '/contact' },
    icon: <Bot size={ICON_SIZE} />,
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
    secondaryCta: { label: 'Book a free call', href: '/contact' },
    icon: <BarChart2 size={ICON_SIZE} />,
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
    stack: ['Midjourney v7', 'Flux 1.1 Pro', 'Veo 3.1', 'Kling 3.0', 'Runway Gen-3'],
    primaryCta: { label: 'Explore AI Creative Studio', href: '/contact' },
    secondaryCta: { label: 'Book a free call', href: '/contact' },
    icon: <Sparkles size={ICON_SIZE} />,
  },
];

const CATEGORIES: { label: 'Web' | 'E-Commerce' | 'AI Services'; ids: ServiceId[] }[] = [
  { label: 'Web', ids: [1, 2] },
  { label: 'E-Commerce', ids: [3, 4] },
  { label: 'AI Services', ids: [5, 6, 7] },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Constants
───────────────────────────────────────────────────────────────────────────── */
const AUTO_INTERVAL = 5000;
const PROGRESS_TICK = 50;
const RESUME_DELAY = 3000;

const ORANGE = '#F05A28';
const DARK_NAV = '#18181f';
const DARK_PANEL = '#111118';

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

  /* ── Sync pausedRef ───────────────────────────────────────────────────── */
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  /* ── Auto-advance ─────────────────────────────────────────────────────── */
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

  /* ── Progress bar ─────────────────────────────────────────────────────── */
  useEffect(() => {
    setProgress(0);
    if (paused) return;
    const interval = setInterval(() => {
      if (pausedRef.current) return;
      setProgress((p) => Math.min(p + (PROGRESS_TICK / AUTO_INTERVAL) * 100, 100));
    }, PROGRESS_TICK);
    return () => clearInterval(interval);
  }, [activeId, paused]);

  /* ── Mobile chip auto-scroll ──────────────────────────────────────────── */
  useEffect(() => {
    const nav = chipNavRef.current;
    if (!nav) return;
    const chip = nav.querySelector<HTMLElement>(`[data-chip="${activeId}"]`);
    if (!chip) return;
    const navW = nav.offsetWidth;
    const chipLeft = chip.offsetLeft;
    const chipW = chip.offsetWidth;
    nav.scrollTo({ left: chipLeft - navW / 2 + chipW / 2, behavior: 'smooth' });
  }, [activeId]);

  /* ── Handlers ─────────────────────────────────────────────────────────── */
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

  /* ── Dot grid SVG data URI ────────────────────────────────────────────── */
  const dotGrid =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' fill-opacity='0.06'/%3E%3C/svg%3E\")";

  return (
    <>
      <style>{`
        @keyframes svFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sv-panel-content { animation: svFadeIn 0.35s ease both; }
        .sv-chip-nav { scrollbar-width: none; -ms-overflow-style: none; }
        .sv-chip-nav::-webkit-scrollbar { display: none; }
      `}</style>

      <section id="services" style={{ backgroundColor: '#FAFAF7' }} className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: ORANGE }}
            >
              OUR SERVICES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Everything You Need to{' '}
              <span style={{ color: ORANGE }}>Compete Online</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              From custom websites and Shopify stores to AI agents and AI SEO — seven specialised
              services, one agency, fixed pricing, and full code ownership on every project.
            </p>
          </div>

          {/* Split panel container */}
          <div
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{ border: '1px solid rgba(0,0,0,0.1)' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >

            {/* ── MOBILE chip nav ──────────────────────────────────────────── */}
            <div className="block lg:hidden" style={{ backgroundColor: DARK_NAV }}>
              {/* Mobile progress bar */}
              <div className="h-0.5 w-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <div
                  className="h-0.5"
                  style={{ width: `${progress}%`, backgroundColor: ORANGE, transition: 'none' }}
                />
              </div>

              <div
                ref={chipNavRef}
                className="sv-chip-nav flex gap-2 px-4 py-3 overflow-x-auto"
              >
                {SERVICES.map((svc) => {
                  const isActive = activeId === svc.id;
                  return (
                    <button
                      key={svc.id}
                      data-chip={svc.id}
                      onClick={() => handleSelect(svc.id)}
                      className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: isActive ? ORANGE : 'rgba(255,255,255,0.08)',
                        color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
                        border: isActive ? `1px solid ${ORANGE}` : '1px solid rgba(255,255,255,0.12)',
                        transition: 'background-color 0.15s, color 0.15s',
                      }}
                    >
                      <span className="text-xs font-mono opacity-70">{svc.num}</span>
                      <span>{svc.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Main layout ───────────────────────────────────────────────── */}
            <div className="flex flex-col lg:flex-row" style={{ minHeight: 500 }}>

              {/* LEFT NAV — desktop only */}
              <div
                className="hidden lg:flex flex-col"
                style={{ width: 260, backgroundColor: DARK_NAV, flexShrink: 0 }}
              >
                {/* Desktop progress bar */}
                <div className="h-0.5 w-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                  <div
                    className="h-0.5"
                    style={{ width: `${progress}%`, backgroundColor: ORANGE, transition: 'none' }}
                  />
                </div>

                <nav className="flex-1 py-5">
                  {CATEGORIES.map((cat, catIdx) => (
                    <div key={cat.label} className={catIdx > 0 ? 'mt-1' : ''}>
                      {/* Category label */}
                      <p
                        className="px-5 pt-3 pb-2 text-xs font-semibold tracking-widest uppercase"
                        style={{ color: 'rgba(255,255,255,0.28)' }}
                      >
                        {cat.label}
                      </p>

                      {cat.ids.map((id) => {
                        const svc = SERVICES.find((s) => s.id === id)!;
                        const isActive = activeId === id;
                        return (
                          <button
                            key={id}
                            onClick={() => handleSelect(id)}
                            className="w-full text-left px-5 py-2.5 flex items-center gap-3"
                            style={{
                              backgroundColor: isActive ? 'rgba(240,90,40,0.12)' : 'transparent',
                              borderLeft: isActive
                                ? `2px solid ${ORANGE}`
                                : '2px solid transparent',
                              transition: 'background-color 0.15s',
                            }}
                          >
                            <span
                              className="text-xs font-mono w-6 flex-shrink-0"
                              style={{ color: isActive ? ORANGE : 'rgba(255,255,255,0.22)' }}
                            >
                              {svc.num}
                            </span>
                            <span
                              className="flex-shrink-0"
                              style={{ color: isActive ? ORANGE : 'rgba(255,255,255,0.32)' }}
                            >
                              {svc.icon}
                            </span>
                            <span
                              className="text-sm font-medium leading-tight"
                              style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.52)' }}
                            >
                              {svc.name}
                            </span>
                            {isActive && (
                              <span
                                className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: ORANGE }}
                              />
                            )}
                          </button>
                        );
                      })}

                      {catIdx < CATEGORIES.length - 1 && (
                        <div
                          className="mx-5 mt-3"
                          style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)' }}
                        />
                      )}
                    </div>
                  ))}
                </nav>

                {/* CTA strip */}
                <div
                  className="px-5 py-4"
                  style={{
                    backgroundColor: 'rgba(240,90,40,0.1)',
                    borderTop: '1px solid rgba(240,90,40,0.18)',
                  }}
                >
                  <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Not sure which service fits?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: ORANGE }}
                  >
                    Book a free strategy call <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* RIGHT DETAIL PANEL */}
              <div
                className="flex-1 relative overflow-hidden"
                style={{ backgroundColor: DARK_PANEL, backgroundImage: dotGrid }}
              >
                {/* Large background number */}
                <div
                  className="absolute bottom-4 right-6 font-bold select-none pointer-events-none leading-none"
                  aria-hidden="true"
                  style={{
                    fontSize: 'clamp(80px, 12vw, 160px)',
                    color: '#ffffff',
                    opacity: 0.04,
                  }}
                >
                  {activeService.num}
                </div>

                {/* Animated content — key forces remount for fade-in */}
                <div
                  key={activeId}
                  className="sv-panel-content relative z-10 flex flex-col h-full p-6 sm:p-8 lg:p-10"
                >
                  {/* Category + timeline badges */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    <span
                      className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(240,90,40,0.15)', color: ORANGE }}
                    >
                      {activeService.category}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        color: 'rgba(255,255,255,0.52)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <Clock size={11} />
                      {activeService.timelineLabel}: {activeService.timeline}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                    {activeService.name}
                  </h3>

                  {/* Tagline */}
                  <p
                    className="text-base sm:text-lg leading-relaxed mb-6"
                    style={{ color: 'rgba(255,255,255,0.58)' }}
                  >
                    {activeService.tagline}
                  </p>

                  {/* Divider */}
                  <div
                    className="mb-6"
                    style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  />

                  {/* Deliverables + Stack */}
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-8">
                    {/* Deliverables */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs font-semibold tracking-widest uppercase mb-3"
                        style={{ color: 'rgba(255,255,255,0.28)' }}
                      >
                        What you get
                      </p>
                      <ul className="space-y-2">
                        {activeService.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <Check
                              size={13}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: ORANGE }}
                            />
                            <span
                              className="text-sm leading-snug"
                              style={{ color: 'rgba(255,255,255,0.72)' }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack pills */}
                    <div className="flex-shrink-0 sm:w-52 lg:w-56">
                      <p
                        className="text-xs font-semibold tracking-widest uppercase mb-3"
                        style={{ color: 'rgba(255,255,255,0.28)' }}
                      >
                        {activeService.stackLabel}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activeService.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium px-2.5 py-1 rounded-md"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.07)',
                              color: 'rgba(255,255,255,0.68)',
                              border: '1px solid rgba(255,255,255,0.1)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 mt-auto pt-2">
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.07)',
                        color: 'rgba(255,255,255,0.72)',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }}
                    >
                      {activeService.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /split panel */}

        </div>
      </section>
    </>
  );
}
