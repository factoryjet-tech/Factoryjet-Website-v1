'use client';

import React, { useState, useEffect } from 'react';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import type { ModalRegion } from '@/context/ContactModalContext';

export interface LocalSeoArchitectureBlueprintProps {
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
    label: '4-Layer Local SEO Stack',
    icon: '🏛️',
    tagline: 'Frontend speed, entity schema, Google Map Pack signals, and local authority.',
  },
  {
    id: 'dataflow',
    label: 'Search Crawl & Citation Simulator',
    icon: '⚡',
    tagline: 'Test how Googlebot, Apple Maps, and AI answer engines crawl and cite your business.',
  },
  {
    id: 'connectors',
    label: 'Search Engines & Data Aggregators',
    icon: '🔌',
    tagline: 'Synchronize Google Business Profile, Apple Maps, BrightLocal, and AI search engines.',
  },
  {
    id: 'protocol',
    label: 'SEO Migration & Ranking Defense',
    icon: '🛡️',
    tagline: 'Our 5-stage roadmap to protect 100% of organic traffic during redesigns and launches.',
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
    id: 'mappack',
    label: 'High-Intent Local Map Pack Query',
    source: 'Google Search Local Proximity Algorithm',
    protocol: 'Primary Category + GeoCoordinates + Review Velocity',
    latency: '84ms',
    status: 'Ranked in Top 3 Local Map Pack',
    explanation: 'A customer searches for high-ticket local services nearby. Google evaluates verified business categories, localized review velocity, and NAP citation consistency to rank your profile in the top three.',
  },
  {
    id: 'ai_citation',
    label: 'AI Search Engine Citation Trigger',
    source: 'ChatGPT Search / Perplexity / Google AI Overview',
    protocol: 'JSON-LD Entity Graph Schema → Direct Source Citation',
    latency: '118ms',
    status: 'Quoted as Recommended Local Provider',
    explanation: 'A prospect asks an AI search engine for the top-rated local firm. Because your website features concise answer-first prose and structured schema, the AI engine directly cites and recommends your brand.',
  },
  {
    id: 'review_sync',
    label: 'Automated 5-Star Customer Review Ingestion',
    source: 'Post-Service SMS Flow → Google Business Profile',
    protocol: 'Verified Customer Feedback → Google Review Feed',
    latency: '92ms',
    status: 'Review Published & Proximity Signal Boosted',
    explanation: 'A satisfied customer completes a 1-tap SMS review request. The verified 5-star rating updates on Google Maps, immediately expanding your ranking radius across neighboring business corridors.',
  },
  {
    id: 'crawl_speed',
    label: 'Googlebot Mobile-First Crawl & Index',
    source: 'Google Smartphone Crawler',
    protocol: 'Next.js 15 Static HTML → Cloudflare Edge CDN',
    latency: '62ms',
    status: '200 OK Single-Hop Crawl Completed',
    explanation: 'Googlebot requests your commercial service page. The server delivers statically rendered HTML in under 70 milliseconds with zero render-blocking JavaScript delays.',
  },
];

const AUTO_SCROLL_DURATION = 5000;

export default function LocalSeoArchitectureBlueprint({
  badge = '// LOCAL SEO & AI CITATION BLUEPRINT',
  title = 'Local SEO Architecture: From Map Pack to AI Citations',
  subtitle = 'Explore how your Google Business Profile, local review velocity, JSON-LD schema, and high-performance frontend synchronize to capture inbound leads.',
  city = 'Local',
  ctaLabel = 'Claim Your Free Local SEO Technical Audit',
  region = 'us',
}: LocalSeoArchitectureBlueprintProps) {
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
              Auto-cycling through SEO architecture lenses every 5s
            </span>
            <span>·</span>
            <span>Click any tab to jump directly</span>
          </div>
        </div>

        {/* ── TAB 1: 4-LAYER LOCAL SEO & AI CITATION STACK ── */}
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
                      Layer 1: High-Performance Frontend &amp; Semantic HTML
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Sub-second mobile loading speed, clean semantic heading hierarchy, and zero cumulative layout shifts for search bots.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#0369A1] bg-[#E0F2FE] px-3 py-1 rounded-full font-semibold">
                    ⚡ Sub-Second LCP
                  </span>
                  <span className="font-fj-mono text-xs text-[#047857] bg-[#D1FAE5] px-3 py-1 rounded-full font-semibold">
                    95+ Lighthouse Score
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Mobile Core Web Vitals</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Statically generated Next.js pages loading in under 1 second on cellular networks without render-blocking scripts.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Single-Hop Crawl Depth</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Clean internal linking architecture ensuring Googlebot reaches every commercial service page in one click.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Answer-First Content</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Direct, factual answers formatted for quick extraction by Google Featured Snippets and AI Overviews.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Conversion Architecture</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Prominent click-to-call buttons, instant booking forms, and live phone tracking integrated with Google Analytics 4.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOW INDICATOR */}
            <div className="flex justify-center items-center gap-2 py-1 text-xs text-[#B23E13] font-fj-mono font-bold">
              <span>↓</span>
              <span className="bg-white px-4 py-1 rounded-full border border-[#E5DFD7] shadow-sm">
                Nested Entity Graph &amp; Structured Data Validation
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
                      Layer 2: Local Entity Graph &amp; Nested JSON-LD Schema
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Explicit structured data communicating business location, service radii, doctor credentials, and verified customer reviews.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#0369A1] bg-[#E0F2FE] px-3 py-1 rounded-full font-semibold">
                    100% Valid JSON-LD
                  </span>
                  <span className="font-fj-mono text-xs text-[#047857] bg-[#D1FAE5] px-3 py-1 rounded-full font-semibold">
                    AI Entity Graph
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">LocalBusiness &amp; GeoCoordinates</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Precise latitude, longitude, postal boundaries, and service area radiuses mapped directly to search spiders.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Specialized Industry Schema</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    MedicalClinic, LegalService, FinancialService, and GeneralContractor schemas with practitioner credentials.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">FAQPage &amp; Breadcrumb Markup</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Captures expanded Google SERP real estate with rich expandable FAQ dropdowns and clear navigational breadcrumbs.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOW INDICATOR */}
            <div className="flex justify-center items-center gap-2 py-1 text-xs text-[#3B82F6] font-fj-mono font-bold">
              <span>↓</span>
              <span className="bg-white px-4 py-1 rounded-full border border-[#E5DFD7] shadow-sm">
                Google Business Profile &amp; Multi-Platform Directory Synchronization
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
                      Layer 3: Google Business Profile &amp; Review Velocity
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Dominating the localized 3-Pack Map results through category optimization, geotagged photos, and automated customer reviews.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-full font-semibold">
                    Top 3 Map Pack Dominance
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Primary Category Precision</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">Exact primary and secondary category assignments driving over 60% of Map Pack weighting.</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Automated Review Workflows</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">SMS and email workflows generating consistent 5-star verified customer feedback with keywords.</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Multi-Platform NAP Sync</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">Name, Address, and Phone data synchronized across Apple Maps, Bing Places, and Yelp.</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Local Corridor Pages</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">Dedicated neighborhood landing pages capturing high-intent searches across suburban districts.</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ── TAB 2: LIVE SEARCH CRAWL & CITATION SIMULATOR ── */}
        {activeTab === 'dataflow' && (
          <div className="bg-white border border-[#E8DFD8] rounded-3xl p-6 sm:p-9 shadow-xl shadow-orange-950/5 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F1E9E3]">
              <div>
                <span className="font-fj-mono text-xs font-bold text-[#B23E13] uppercase tracking-wider">
                  ⚡ Interactive Search &amp; Citation Engine
                </span>
                <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-[#0F172A] mt-1">
                  Click an Event to Trace How Search Engines Crawl &amp; Rank Your Site
                </h3>
                <p className="text-sm text-[#64748B] mt-1">
                  See how local Map Pack queries, AI answer citations, customer reviews, and Googlebot crawls process in under 120ms.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-fj-mono text-xs text-[#047857] font-bold">
                  Crawl Engine Active · Sub-100ms SLA
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
                  <span className="font-fj-mono text-xs text-[#B23E13] font-bold">STEP 1: USER / BOT QUERY</span>
                  <span className="text-[11px] font-fj-mono text-[#64748B]">0ms</span>
                </div>
                <h4 className="font-bold text-sm text-[#0F172A]">Event Triggered</h4>
                <p className="text-xs text-[#475569] mt-1">{activeEvent.source}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-white p-2 rounded-lg border border-[#EFE8E1] text-[#0369A1]">
                  ✓ Request Parsed &amp; Geocoded
                </div>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${
                simStep >= 2 ? 'bg-[#F0F9FF] border-[#3B82F6]' : 'bg-[#FAF8F5] border-[#E8DFD8] opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fj-mono text-xs text-[#0369A1] font-bold">STEP 2: SIGNAL EVALUATION</span>
                  <span className="text-[11px] font-fj-mono text-[#64748B]">~40ms</span>
                </div>
                <h4 className="font-bold text-sm text-[#0F172A]">Algorithm Processing</h4>
                <p className="text-xs text-[#475569] mt-1">{activeEvent.protocol}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-white p-2 rounded-lg border border-[#EFE8E1] text-[#047857]">
                  ✓ High Authority Signal Confirmed
                </div>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${
                simStep >= 3 ? 'bg-[#ECFDF5] border-[#10B981]' : 'bg-[#FAF8F5] border-[#E8DFD8] opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fj-mono text-xs text-[#047857] font-bold">STEP 3: SEARCH VISIBILITY</span>
                  <span className="text-[11px] font-fj-mono text-[#047857] font-bold">{activeEvent.latency}</span>
                </div>
                <h4 className="font-bold text-sm text-[#0F172A]">Result Rendered</h4>
                <p className="text-xs text-[#475569] mt-1">{activeEvent.status}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-white p-2 rounded-lg border border-[#EFE8E1] text-[#047857]">
                  ✓ Lead Capture Flow Ready
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
                <span className="text-[#64748B] block text-[10px] uppercase font-bold mb-1">Response Latency</span>
                <span className="text-lg font-bold text-[#0F172A]">{activeEvent.latency}</span>
                <span className="text-[#047857] block text-[11px]">Top 3 Placement</span>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: SEARCH ENGINES & DATA CONNECTORS ── */}
        {activeTab === 'connectors' && (
          <div className="bg-white border border-[#E8DFD8] rounded-3xl p-6 sm:p-9 shadow-xl shadow-orange-950/5 animate-fadeIn">
            <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
              Integrated Search Engines, APIs &amp; Data Connectors
            </h3>
            <p className="text-sm text-[#64748B] mb-6 max-w-2xl">
              We sync your business data directly across primary search platforms and Tier 1 business directories:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#F05A28]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F05A28]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Google Search Console &amp; Indexing API</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Instant indexing notification protocol pushing new landing pages and updates to Googlebot in seconds.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">Indexing API v3</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Real-Time Sitemaps</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#3B82F6]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3B82F6]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Google Business Profile API</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Real-time category audits, address verification, holiday hours synchronization, and review management.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">GBP API</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Map Pack Sync</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#10B981]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">DataForSEO &amp; BrightLocal APIs</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Hyper-local ranking grid tracking across 100+ geographic coordinate pins throughout your target city.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">Geo-Grid Scan</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Proximity Tracking</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#F59E0B]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Tier 1 Directory Data Aggregators</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Neustar Localeze, Data Axle, and Factual distribution ensuring 100% NAP consistency across the web.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">Data Axle</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Neustar</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#EC4899]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EC4899]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Apple Business Connect &amp; Mapbox</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Native iOS Siri voice search, Apple Maps navigation pins, and in-car navigation discoverability.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">Apple Connect</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Siri Voice SEO</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#8B5CF6]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Generative AI Search Indexers</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Structured entity markup formatted for direct citation by ChatGPT Search, Perplexity, and Claude.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">GPTBot Indexing</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Perplexity AI</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 4: ZERO-RISK SEO MIGRATION PROTOCOL ── */}
        {activeTab === 'protocol' && (
          <div className="bg-white border border-[#E8DFD8] rounded-3xl p-6 sm:p-9 shadow-xl shadow-orange-950/5 animate-fadeIn">
            <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
              Our 5-Stage SEO Ranking Defense Protocol
            </h3>
            <p className="text-sm text-[#64748B] mb-6 max-w-2xl">
              We never guess with your search visibility. Here is the exact engineering roadmap that protects your organic traffic:
            </p>

            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Exhaustive URL &amp; Keyword Ranking Audit</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We extract every single ranking URL, historical search impression, backlink target, and metadata tag so no search equity is lost.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">1-to-1 301 Permanent Redirect Mapping Matrix</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We map every legacy URL to its exact new destination, preserving 100% of domain authority without 404 broken links.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Pre-Launch Schema &amp; Core Web Vitals Validation</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We audit structured JSON-LD schema with Google’s Rich Results tool and benchmark sub-second mobile Lighthouse speed.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Zero-Downtime Cutover &amp; Instant Indexing Push</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We execute DNS cutovers with immediate automated submissions to Google Search Console and IndexNow for instant crawling.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#10B981] font-fj-mono text-xs font-bold text-white">
                  5
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">24/7 Post-Launch Proximity &amp; Rank Monitoring</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We track daily keyword rankings, Google Map Pack proximity radiuses, and inbound lead conversion attribution in GA4.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── BENTO ASSURANCE METRICS (LIGHT & CRISP) ── */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#0F172A]">44%</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Top 3 Map Pack Click Share</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#F05A28]">Sub-1s</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Mobile Core Web Vitals</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#0F172A]">100%</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Preserved 301 URL Equity</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#047857]">Tier 1</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Multi-Platform NAP Consistency</p>
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
                Want to Win the Google Map Pack in {city}?
              </h3>
              
              <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
                Talk directly with founder Bhavesh Barot (no junior salespeople). We audit your Google Business Profile, evaluate local competitor gaps, and deliver a transparent search optimization roadmap before any commitment.
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
