'use client';

import React, { useState, useEffect } from 'react';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import type { ModalRegion } from '@/context/ContactModalContext';

export interface WebDesignArchitectureBlueprintProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  city?: string;
  ctaLabel?: string;
  region?: ModalRegion;
}

type TabType = 'layers' | 'dataflow' | 'connectors' | 'protocol';

interface TabConfig {
  id: TabType;
  label: string;
  icon: string;
  tagline: string;
}

const TABS: TabConfig[] = [
  {
    id: 'layers',
    label: '4-Layer Frontend Stack',
    icon: '🏛️',
    tagline: 'Figma design tokens, Next.js static pages, headless content, and Cloudflare edge delivery.',
  },
  {
    id: 'dataflow',
    label: 'Page Speed & Vitals Simulator',
    icon: '⚡',
    tagline: 'See how mobile browsers render pages in under 70ms with zero layout shifts.',
  },
  {
    id: 'connectors',
    label: 'Modern Web Engineering Stack',
    icon: '🔌',
    tagline: 'Next.js 15, TypeScript, Tailwind CSS, Headless CMS, Cloudflare, and Stripe integrations.',
  },
  {
    id: 'protocol',
    label: '7-Day Sprint Delivery Protocol',
    icon: '🛡️',
    tagline: 'Our transparent 7-day engineering roadmap from signed scope to live production launch.',
  },
];

interface SimulationEvent {
  id: string;
  label: string;
  source: string;
  protocol: string;
  latency: string;
  status: string;
  explanation: string;
}

const SIMULATION_EVENTS: SimulationEvent[] = [
  {
    id: 'page_load',
    label: 'Mobile User Visits Landing Page',
    source: 'Mobile Safari / Chrome Browser Request',
    protocol: 'HTTP/3 Edge Response → Pre-Rendered HTML',
    latency: '68ms',
    status: 'Sub-Second LCP Achieved',
    explanation: 'A customer loads your website on a mobile device. Cloudflare Edge delivers the pre-rendered Next.js page in 68 milliseconds with zero render-blocking JavaScript.',
  },
  {
    id: 'form_lead',
    label: 'High-Value Inbound Lead Submission',
    source: 'Interactive Contact & Consultation Form',
    protocol: 'Type-Safe API Route → Instant Email & CRM Sync',
    latency: '94ms',
    status: 'Lead Routed to Executive Team',
    explanation: 'A client submits a consultation request. The form securely verifies data, triggers custom GA4 conversion events, and routes inquiries directly to your team.',
  },
  {
    id: 'cms_publish',
    label: 'Marketing Team Publishes New Content',
    source: 'Headless CMS (Sanity / Strapi / Contentful)',
    protocol: 'Instant On-Demand ISR Revalidation',
    latency: '112ms',
    status: 'Live on Global Edge CDN',
    explanation: 'Your marketing team updates copy or publishes an article. The page rebuilds instantly via on-demand Incremental Static Regeneration without engineering assistance.',
  },
  {
    id: 'vitals_check',
    label: 'Google Core Web Vitals Audit',
    source: 'Lighthouse / Chrome User Experience Report',
    protocol: 'Zero CLS + Sub-100ms INP + Fast LCP',
    latency: '55ms',
    status: '95+ Mobile Score Verified',
    explanation: 'Google crawls and evaluates real user experience metrics. Your site easily passes all Core Web Vitals thresholds, securing higher mobile search rankings.',
  },
];

const AUTO_SCROLL_DURATION = 5000;

export default function WebDesignArchitectureBlueprint({
  badge = '// MODERN WEB DESIGN BLUEPRINT',
  title = 'High-Performance Frontend: From Code to Conversion',
  subtitle = 'Explore how custom Next.js components, Cloudflare Edge caching, structured JSON-LD schema, and conversion tracking work together seamlessly.',
  city = 'Local',
  ctaLabel = 'Get Your Fixed-Price Web Quote',
  region = 'us',
}: WebDesignArchitectureBlueprintProps) {
  const [activeTab, setActiveTab] = useState<TabType>('layers');
  const [progress, setProgress] = useState(0);
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);
  const [simStep, setSimStep] = useState(3);

  const activeEvent = SIMULATION_EVENTS[activeEventIndex];

  // Auto-scroll progress timer across tabs
  useEffect(() => {
    const intervalTime = 50;
    const stepIncrement = (intervalTime / AUTO_SCROLL_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((currTab) => {
            const currentIndex = TABS.findIndex((t) => t.id === currTab);
            const nextIndex = (currentIndex + 1) % TABS.length;
            return TABS[nextIndex].id;
          });
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // When dataflow tab is active, auto-advance simulation events
  useEffect(() => {
    if (activeTab !== 'dataflow') return;

    const eventTimer = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % SIMULATION_EVENTS.length);
      setSimStep(1);
      setTimeout(() => setSimStep(2), 250);
      setTimeout(() => setSimStep(3), 500);
    }, 2500);

    return () => clearInterval(eventTimer);
  }, [activeTab]);

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    setProgress(0);
  };

  const handleManualEventSelect = (index: number) => {
    setActiveEventIndex(index);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 250);
    setTimeout(() => setSimStep(3), 500);
  };

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F6] via-[#FAF7F2] to-[#FFFFFF] text-[#1E293B] py-20 md:py-28 font-fj-body border-y border-[#E8DFD8]"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#F05A28]/12 via-[#FF8A4C]/8 to-transparent blur-[100px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#3B82F6]/10 via-[#60A5FA]/6 to-transparent blur-[100px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(240,90,40,0.12) 1px, transparent 0), radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px',
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD7] shadow-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-fj-mono text-[11px] font-bold uppercase tracking-widest text-[#B23E13]">
              {badge}
            </span>
          </div>
          
          <h2 className="font-fj-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
            {title}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            {subtitle}
          </p>

          {/* ── AUTO-ADVANCING TABS WITH LIVE PROGRESS BAR ── */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`group relative p-4 rounded-2xl transition-all duration-300 border text-left overflow-hidden cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#F05A28] shadow-[0_10px_25px_rgba(240,90,40,0.12)] ring-1 ring-[#F05A28]/30 scale-[1.02]'
                      : 'bg-white/70 hover:bg-white border-[#E8E1DA] hover:border-[#D0C6BD]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-lg">{tab.icon}</span>
                    <span className={`text-xs font-bold font-fj-display transition-colors ${
                      isActive ? 'text-[#B23E13]' : 'text-[#334155] group-hover:text-[#0F172A]'
                    }`}>
                      {tab.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#64748B] line-clamp-2 leading-relaxed">
                    {tab.tagline}
                  </p>

                  {isActive ? (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FDEEE9]">
                      <div
                        className="h-full bg-gradient-to-r from-[#F05A28] to-[#C94A1A] transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  ) : (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#E8E1DA]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[#64748B] font-fj-mono">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#B23E13]">
              <span className="h-2 w-2 rounded-full bg-[#FF5622] animate-ping" />
              Auto-cycling through web architecture lenses every 5s
            </span>
            <span>·</span>
            <span>Click any tab to jump directly</span>
          </div>
        </div>

        {/* ── TAB 1: 4-LAYER FRONTEND STACK ── */}
        {activeTab === 'layers' && (
          <div className="space-y-4 animate-fadeIn">
            
            {/* LAYER 1 */}
            <div
              onClick={() => setActiveLayer(1)}
              className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 border ${
                activeLayer === 1
                  ? 'bg-white border-[#F05A28] shadow-[0_12px_36px_rgba(240,90,40,0.1)] ring-1 ring-[#F05A28]/20'
                  : 'bg-white/80 border-[#E8DFD8] hover:border-[#D0C6BD]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#F1E9E3]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F05A28] font-fj-mono text-xs font-bold text-white shadow-md shadow-[#F05A28]/30">
                    L1
                  </div>
                  <div>
                    <h3 className="font-fj-display text-lg sm:text-xl font-bold text-[#0F172A]">
                      Layer 1: Component Design System &amp; Figma UI Tokens
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Bespoke visual architecture with tailored typography, polished micro-interactions, and mobile-first responsive layouts.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#0369A1] bg-[#E0F2FE] px-3 py-1 rounded-full font-semibold">
                    ⚡ Custom Figma UI
                  </span>
                  <span className="font-fj-mono text-xs text-[#047857] bg-[#D1FAE5] px-3 py-1 rounded-full font-semibold">
                    100% Bespoke Code
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Tailored Design Tokens</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Custom color palettes, harmonious typography hierarchy, and spacing tokens matching your brand identity.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Mobile Conversion UI</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Persistent tap-to-call bars, thumb-friendly tap targets, and streamlined form layouts on mobile devices.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Zero Plugin Bloat</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Pure, clean React and Tailwind CSS components eliminating the security vulnerabilities of WordPress plugins.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Micro-Interactions</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Hardware-accelerated CSS transitions that make every button hover and modal open instantly without page lag.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOW INDICATOR */}
            <div className="flex justify-center items-center gap-2 py-1 text-xs text-[#B23E13] font-fj-mono font-bold">
              <span>↓</span>
              <span className="bg-white px-4 py-1 rounded-full border border-[#E5DFD7] shadow-sm">
                Next.js 15 Statically Generated Pages &amp; Edge Delivery
              </span>
              <span>↓</span>
            </div>

            {/* LAYER 2 */}
            <div
              onClick={() => setActiveLayer(2)}
              className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 border ${
                activeLayer === 2
                  ? 'bg-white border-[#3B82F6] shadow-[0_12px_36px_rgba(59,130,246,0.1)] ring-1 ring-[#3B82F6]/20'
                  : 'bg-white/80 border-[#E8DFD8] hover:border-[#D0C6BD]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#F1E9E3]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3B82F6] font-fj-mono text-xs font-bold text-white shadow-md shadow-[#3B82F6]/30">
                    L2
                  </div>
                  <div>
                    <h3 className="font-fj-display text-lg sm:text-xl font-bold text-[#0F172A]">
                      Layer 2: High-Performance Next.js Engineering
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Pre-rendered HTML delivering sub-second page loads, zero layout shifts, and flawless Google Core Web Vitals.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#0369A1] bg-[#E0F2FE] px-3 py-1 rounded-full font-semibold">
                    Sub-Second LCP
                  </span>
                  <span className="font-fj-mono text-xs text-[#047857] bg-[#D1FAE5] px-3 py-1 rounded-full font-semibold">
                    95+ Lighthouse
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Static Generation (SSG)</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Pages are built into lightweight static HTML files ahead of time so servers respond in milliseconds.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Modern Image Optimization</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Automated WebP/AVIF compression and responsive sizing ensuring photos never slow down mobile browsing.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Built-in Schema &amp; SEO</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Automated JSON-LD LocalBusiness and ProfessionalService schema embedded directly into every page.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOW INDICATOR */}
            <div className="flex justify-center items-center gap-2 py-1 text-xs text-[#3B82F6] font-fj-mono font-bold">
              <span>↓</span>
              <span className="bg-white px-4 py-1 rounded-full border border-[#E5DFD7] shadow-sm">
                Cloudflare Global Edge CDN &amp; Headless Content Layer
              </span>
              <span>↓</span>
            </div>

            {/* LAYER 3 */}
            <div
              onClick={() => setActiveLayer(3)}
              className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 border ${
                activeLayer === 3
                  ? 'bg-white border-[#10B981] shadow-[0_12px_36px_rgba(16,185,129,0.1)] ring-1 ring-[#10B981]/20'
                  : 'bg-white/80 border-[#E8DFD8] hover:border-[#D0C6BD]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#F1E9E3]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#10B981] font-fj-mono text-xs font-bold text-white shadow-md shadow-[#10B981]/30">
                    L3
                  </div>
                  <div>
                    <h3 className="font-fj-display text-lg sm:text-xl font-bold text-[#0F172A]">
                      Layer 3: Headless Content &amp; Global Edge Infrastructure
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Easy visual content editing for your team, enterprise DDoS protection, and 99.99% serverless reliability.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-full font-semibold">
                    99.99% Global Uptime
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Intuitive Headless CMS</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">Sanity or Strapi allowing your marketing team to edit copy without touching code.</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Cloudflare Global Edge</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">Assets served from 300+ edge data centers worldwide with enterprise SSL and DDoS shields.</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Google Analytics 4 &amp; GTM</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">Custom conversion events tracking phone calls, form completions, and qualified leads.</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Full IP Ownership</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">You own 100% of your Git repository, Figma files, and hosting configuration with zero lock-in.</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ── TAB 2: LIVE SPEED & VITALS SIMULATOR ── */}
        {activeTab === 'dataflow' && (
          <div className="bg-white border border-[#E8DFD8] rounded-3xl p-6 sm:p-9 shadow-xl shadow-orange-950/5 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F1E9E3]">
              <div>
                <span className="font-fj-mono text-xs font-bold text-[#B23E13] uppercase tracking-wider">
                  ⚡ Interactive Performance Simulator
                </span>
                <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-[#0F172A] mt-1">
                  Click an Event to Trace How Next.js Delivers Under 100ms
                </h3>
                <p className="text-sm text-[#64748B] mt-1">
                  See how mobile requests, lead form routing, CMS publishing, and Core Web Vitals process with zero lag.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-fj-mono text-xs text-[#047857] font-bold">
                  Edge Network Active · Sub-100ms SLA
                </span>
              </div>
            </div>

            {/* Clickable Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {SIMULATION_EVENTS.map((ev, idx) => (
                <button
                  key={ev.id}
                  onClick={() => handleManualEventSelect(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    activeEventIndex === idx
                      ? 'bg-[#F05A28] border-[#C94A1A] text-white shadow-md shadow-[#F05A28]/25 scale-[1.03]'
                      : 'bg-[#FAF8F5] border-[#E8DFD8] text-[#334155] hover:border-[#F05A28]/40 hover:bg-white'
                  }`}
                >
                  ⚡ {ev.label}
                </button>
              ))}
            </div>

            {/* Visual 3-Stage Pipeline */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className={`p-5 rounded-2xl border transition-all ${
                simStep >= 1 ? 'bg-[#FFF9F6] border-[#F05A28]' : 'bg-[#FAF8F5] border-[#E8DFD8] opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fj-mono text-xs text-[#B23E13] font-bold">STEP 1: INITIATION</span>
                  <span className="text-[11px] font-fj-mono text-[#64748B]">0ms</span>
                </div>
                <h4 className="font-bold text-sm text-[#0F172A]">Request Sent</h4>
                <p className="text-xs text-[#475569] mt-1">{activeEvent.source}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-white p-2 rounded-lg border border-[#EFE8E1] text-[#0369A1]">
                  ✓ Edge DNS Resolved
                </div>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${
                simStep >= 2 ? 'bg-[#F0F9FF] border-[#3B82F6]' : 'bg-[#FAF8F5] border-[#E8DFD8] opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fj-mono text-xs text-[#0369A1] font-bold">STEP 2: EDGE PROCESSING</span>
                  <span className="text-[11px] font-fj-mono text-[#64748B]">~35ms</span>
                </div>
                <h4 className="font-bold text-sm text-[#0F172A]">Serverless Execution</h4>
                <p className="text-xs text-[#475569] mt-1">{activeEvent.protocol}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-white p-2 rounded-lg border border-[#EFE8E1] text-[#047857]">
                  ✓ Pre-Rendered Cache Hit
                </div>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${
                simStep >= 3 ? 'bg-[#ECFDF5] border-[#10B981]' : 'bg-[#FAF8F5] border-[#E8DFD8] opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fj-mono text-xs text-[#047857] font-bold">STEP 3: COMPLETE</span>
                  <span className="text-[11px] font-fj-mono text-[#047857] font-bold">{activeEvent.latency}</span>
                </div>
                <h4 className="font-bold text-sm text-[#0F172A]">Browser Paint</h4>
                <p className="text-xs text-[#475569] mt-1">{activeEvent.status}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-white p-2 rounded-lg border border-[#EFE8E1] text-[#047857]">
                  ✓ 95+ Mobile Score
                </div>
              </div>

            </div>

            {/* Plain English Explanation */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex flex-col md:flex-row gap-4 items-start justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-bold font-fj-mono uppercase text-[#B23E13] mb-1">
                  What Just Happened:
                </p>
                <p className="text-sm text-[#334155] leading-relaxed">
                  {activeEvent.explanation}
                </p>
              </div>
              <div className="w-full md:w-auto bg-white p-3 rounded-xl border border-[#E2D8CF] font-fj-mono text-xs text-[#475569]">
                <span className="text-[#64748B] block text-[10px] uppercase font-bold mb-1">Paint Latency</span>
                <span className="text-lg font-bold text-[#0F172A]">{activeEvent.latency}</span>
                <span className="text-[#047857] block text-[11px]">Sub-Second Speed</span>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: MODERN WEB ENGINEERING STACK ── */}
        {activeTab === 'connectors' && (
          <div className="bg-white border border-[#E8DFD8] rounded-3xl p-6 sm:p-9 shadow-xl shadow-orange-950/5 animate-fadeIn">
            <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
              Modern Frontend &amp; Tool Integrations
            </h3>
            <p className="text-sm text-[#64748B] mb-6 max-w-2xl">
              We engineer with modern industry-standard frameworks for speed, security, and full maintainability:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#F05A28]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F05A28]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Next.js 15 &amp; React</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Server-side static rendering, automated code splitting, and React Server Components for maximum speed.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">App Router</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">React 19</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#3B82F6]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3B82F6]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">TypeScript &amp; Tailwind CSS</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  100% type-safe codebase with zero runtime CSS bloat and pixel-perfect design system implementation.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">TypeScript 5</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Tailwind v4</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#10B981]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Cloudflare Global Edge CDN</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Global edge caching, automated SSL encryption, and unmetered DDoS mitigation for 99.99% uptime.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">Edge CDN</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">DDoS Shield</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#F59E0B]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Headless CMS Integration</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Sanity, Strapi, or Contentful providing a clean visual editor for your non-technical team to edit content.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">Sanity.io</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Live Visual Edit</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#EC4899]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EC4899]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Figma Design Systems</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Complete interactive Figma UI design files delivered for your direct review before writing any code.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">Figma Tokens</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Interactive Prototype</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#8B5CF6]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Stripe &amp; Form Lead Ingestion</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Secure checkout options for service retainers and automated webhook routing to your internal CRM.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">Stripe Payments</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Webhook Routing</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 4: 7-DAY SPRINT DELIVERY PROTOCOL ── */}
        {activeTab === 'protocol' && (
          <div className="bg-white border border-[#E8DFD8] rounded-3xl p-6 sm:p-9 shadow-xl shadow-orange-950/5 animate-fadeIn">
            <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
              Our 7-Day Sprint Delivery Protocol
            </h3>
            <p className="text-sm text-[#64748B] mb-6 max-w-2xl">
              We never drag projects out for months. Here is the exact step-by-step engineering roadmap delivering your live website in 7 days:
            </p>

            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Days 1 to 2: Strategy, Sitemaps &amp; Figma UI Prototyping</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We map your conversion funnels, design system tokens, and deliver interactive desktop and mobile Figma prototypes for direct client approval.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Days 3 to 5: Custom Next.js 15 Frontend Engineering</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We code your bespoke components with clean TypeScript and Tailwind CSS, achieving sub-second speed with zero plugin dependencies.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Days 6 to 7: Content Migration, Schema &amp; Live Launch</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We populate verified copy, optimize WebP assets, embed JSON-LD schema, configure GA4 tracking, and execute a zero-downtime DNS cutover.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#10B981] font-fj-mono text-xs font-bold text-white">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Post-Launch: 30-Day Full Warranty &amp; Recorded Video Training</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We stand behind our code with a 30-day bug fix guarantee and deliver a personalized recorded video training session for your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 45-SECOND TECHNICAL ARCHITECTURE WALKTHROUGH VIDEO EMBED WITH VIDEOOBJECT SCHEMA ── */}
        <div className="mt-12 rounded-3xl bg-[#141414] border border-[#2E2E33] p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'VideoObject',
                name: `${city} Modern Web Architecture & Sub-Second Frontend Walkthrough`,
                description: `A 45-second technical architecture teardown demonstrating Next.js 15 SSR, Cloudflare Edge caching, sub-second LCP optimization, and structured JSON-LD entity graph integration for ${city} commercial websites.`,
                thumbnailUrl: ['https://factoryjet.com/og-default.png'],
                uploadDate: '2026-08-24T08:00:00Z',
                duration: 'PT45S',
                contentUrl: 'https://factoryjet.com/videos/web-architecture-walkthrough.mp4',
                embedUrl: 'https://factoryjet.com/embed/web-architecture-walkthrough',
                publisher: {
                  '@type': 'Organization',
                  name: 'FactoryJet',
                  url: 'https://factoryjet.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://factoryjet.com/og-default.png',
                  },
                },
              }),
            }}
          />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#2E2E33]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5622]/20 border border-[#FF5622]/40 text-[#FF5622] text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5622] animate-pulse" />
                45-Second Technical Walkthrough
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Inside Our Sub-Second Next.js Frontend Architecture
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
                Watch how our React Server Components, Edge CDN caching, and JSON-LD schema deliver sub-70ms response times.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-gray-400 bg-[#1E1E22] px-3 py-1.5 rounded-lg border border-gray-800">
                Duration: 0:45 · 1080p 60fps
              </span>
            </div>
          </div>

          {/* Interactive Player Canvas */}
          <div className="mt-6 rounded-2xl bg-[#0A0A0C] border border-[#232328] p-5 sm:p-6 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="md:col-span-2 space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>LIVE REPLAY: Edge Pipeline Execution [68ms]</span>
                </div>
                <div className="font-mono text-xs text-gray-300 bg-[#121216] p-3.5 rounded-xl border border-gray-800 overflow-x-auto leading-relaxed">
                  <span className="text-purple-400">GET</span> /api/render-edge <span className="text-emerald-400">200 OK</span> (68ms)<br />
                  <span className="text-gray-500">├──</span> Cache-Status: <span className="text-yellow-300">HIT (Cloudflare Edge CDN)</span><br />
                  <span className="text-gray-500">├──</span> Core Web Vitals: <span className="text-emerald-400">LCP 0.68s · CLS 0.00 · INP 42ms</span><br />
                  <span className="text-gray-500">└──</span> Schema Graph: <span className="text-blue-400">ProfessionalService + Person + FAQPage</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#141418] border border-gray-800 text-center">
                <div className="w-12 h-12 rounded-full bg-[#FF5622] flex items-center justify-center text-white shadow-lg mb-2 cursor-pointer hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-white">Narrated by Bhavesh Barot</span>
                <span className="text-[11px] text-gray-400">Chief Technical Architect</span>
              </div>
            </div>

            {/* Video Timeline Bar */}
            <div className="mt-5 pt-4 border-t border-gray-800/80 flex items-center gap-4">
              <span className="text-xs font-mono text-[#FF5622] font-bold">0:45 / 0:45</span>
              <div className="flex-grow h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FF5622] to-emerald-400 w-full" />
              </div>
              <span className="text-xs font-mono text-emerald-400">✓ Verified 100% CWV Score</span>
            </div>
          </div>
        </div>

        {/* ── BENTO ASSURANCE METRICS (LIGHT & CRISP) ── */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#0F172A]">7 Days</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Guaranteed Sprint Delivery SLA</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#F05A28]">95+</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Mobile Lighthouse Score</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#0F172A]">100%</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Full Code &amp; IP Ownership</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#047857]">30 Days</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Post-Launch Full Warranty</p>
          </div>
        </div>

        {/* ── FOUNDER SCOPING & STRATEGY ACTION BOX ── */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#FFF5F0] via-[#FAF6F0] to-[#FFFFFF] border-2 border-[#F3D5C8] p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#F05A28]/10 blur-[80px] pointer-events-none"
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F05A28]/10 border border-[#F05A28]/30">
                <span className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                  Direct Founder Discovery Call
                </span>
              </div>
              
              <h3 className="font-fj-display text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                Ready to Upgrade Your {city} Website?
              </h3>
              
              <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
                Talk directly with founder Bhavesh Barot (no junior salespeople). We review your current site, provide a transparent fixed-price quote, and deliver an interactive Figma preview.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center sm:items-end gap-3">
              <ModalCTAButton label={ctaLabel} region={region} btnVariant="primary-light" />
              <span className="text-xs text-[#64748B] font-fj-mono text-center sm:text-right">
                ✓ 100% Engineer-Led · Zero Sales Pressure
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
