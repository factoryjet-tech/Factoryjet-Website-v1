'use client';

import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
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
    tagline: 'See, step by step, how mobile browsers render a pre-built page without layout shifts.',
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
  status: string;
  explanation: string;
}

const SIMULATION_EVENTS: SimulationEvent[] = [
  {
    id: 'page_load',
    label: 'Mobile User Visits Landing Page',
    source: 'Mobile Safari / Chrome Browser Request',
    protocol: 'HTTP/3 Edge Response → Pre-Rendered HTML',
    status: 'Sub-Second LCP Achieved',
    explanation: 'A customer loads your website on a mobile device. Cloudflare Edge delivers the pre-rendered Next.js page from a nearby data center, with no render-blocking JavaScript in the way.',
  },
  {
    id: 'form_lead',
    label: 'High-Value Inbound Lead Submission',
    source: 'Interactive Contact & Consultation Form',
    protocol: 'Type-Safe API Route → Instant Email & CRM Sync',
    status: 'Lead Routed to Executive Team',
    explanation: 'A client submits a consultation request. The form securely verifies data, triggers custom GA4 conversion events, and routes inquiries directly to your team.',
  },
  {
    id: 'cms_publish',
    label: 'Marketing Team Publishes New Content',
    source: 'Headless CMS (Sanity / Strapi / Contentful)',
    protocol: 'Instant On-Demand ISR Revalidation',
    status: 'Live on Global Edge CDN',
    explanation: 'Your marketing team updates copy or publishes an article. The page rebuilds through on-demand Incremental Static Regeneration, with no engineer needed.',
  },
  {
    id: 'vitals_check',
    label: 'Google Core Web Vitals Audit',
    source: 'Lighthouse / Chrome User Experience Report',
    protocol: 'Low CLS + Good INP + Fast LCP',
    status: '95+ Mobile Score Target Checked',
    explanation: 'Chrome collects real user experience metrics and Google reports them in Search Console. We build to pass every Core Web Vitals threshold, which Google counts among its page experience signals.',
  },
];

const AUTO_SCROLL_DURATION = 5000;
const PROGRESS_TICK_MS = 50;

/**
 * The thin bar under the selected tab.
 *
 * It owns the 50 ms progress tick, so a tick re-renders this one element and
 * not the whole section (all four panels stay mounted now, see the panel
 * stack in the main component).
 *
 * - `autoPlay` false: the visitor has taken over, or prefers reduced motion.
 *   No timer exists and the bar sits full as a plain "selected" marker.
 * - `autoPlay` true, `running` false: paused because the section is off
 *   screen or the browser tab is hidden. Progress is kept and resumes.
 */
function TabProgressBar({
  autoPlay,
  running,
  onComplete,
}: {
  autoPlay: boolean;
  running: boolean;
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const elapsedRef = useRef(0);

  useEffect(() => {
    if (!autoPlay || !running) return;
    const timer = setInterval(() => {
      elapsedRef.current += PROGRESS_TICK_MS;
      if (elapsedRef.current > AUTO_SCROLL_DURATION) {
        elapsedRef.current = 0;
        setProgress(0);
        onComplete();
        return;
      }
      setProgress((elapsedRef.current / AUTO_SCROLL_DURATION) * 100);
    }, PROGRESS_TICK_MS);
    return () => clearInterval(timer);
  }, [autoPlay, running, onComplete]);

  return (
    <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-1 bg-[#FDEEE9]">
      <div
        className="h-full bg-gradient-to-r from-[#F05A28] to-[#C94A1A] transition-all duration-100 ease-linear"
        style={{ width: `${autoPlay ? progress : 100}%` }}
      />
    </div>
  );
}

const AUTO_PLAY: boolean = false;

export default function WebDesignArchitectureBlueprint({
  badge = '// MODERN WEB DESIGN BLUEPRINT',
  title = 'High-Performance Frontend: From Code to Conversion',
  subtitle = 'Explore how custom Next.js components, Cloudflare Edge caching, structured JSON-LD schema, and conversion tracking work together.',
  city = 'Local',
  ctaLabel = 'Get Your Fixed-Price Web Quote',
  region = 'us',
}: WebDesignArchitectureBlueprintProps) {
  const uid = useId();
  const [activeTab, setActiveTab] = useState<TabType>('layers');
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);
  const [simStep, setSimStep] = useState(3);

  const activeEvent = SIMULATION_EVENTS[activeEventIndex];

  // Visitor control (2026-10-12). A review of /uk found that a clicked tab
  // flipped back about five seconds later and a clicked event was overwritten
  // by the next auto step. Auto-play now runs only until the visitor first
  // touches the block: pointer down, click, key press or focus anywhere inside
  // the section. From then on no auto-advance timer exists for the rest of the
  // page view, and whatever the visitor chose stays selected. Visitors who ask
  // for reduced motion never get auto-play at all.
  const [tookOver, setTookOver] = useState(false);
  // The ref mirrors the state so a timer callback that is already queued when
  // the visitor acts can see it and do nothing, without waiting for a render.
  const tookOverRef = useRef(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  // Auto-play is off (2026-10-12). The four panels differ in height by up to 660 px.
  // Cycling them made the page jump under the visitor, and reserving the tallest
  // height instead left that much blank space under three of the four tabs (measured
  // at 768, 1024 and 1280 px). Tabs now change only when the visitor picks one.
  // AUTO_PLAY brings cycling back; if it does, the height problem comes back with it.
  const autoPlay = AUTO_PLAY && !tookOver && !reducedMotion;

  const takeOver = useCallback(() => {
    if (tookOverRef.current) return;
    tookOverRef.current = true;
    setTookOver(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener?.('change', sync);
    return () => mq.removeEventListener?.('change', sync);
  }, []);

  // Perf (2026-09-25): the auto-advance timers used to start at hydration and
  // run for the life of the page even while the section was far off screen
  // (about 250 DOM mutations a second on /uk), which showed up as Total
  // Blocking Time on every page that renders this block. They run only while
  // the section is on screen and the browser tab is visible. Since 2026-10-12
  // the observer itself is also dropped once auto-play has ended.
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const timersOn = autoPlay && inView;

  useEffect(() => {
    if (!autoPlay) return;
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return () => setInView(false);
    }
    let onScreen = false;
    const update = () => setInView(onScreen && document.visibilityState === 'visible');
    const io = new IntersectionObserver(
      (entries) => {
        onScreen = entries.some((e) => e.isIntersecting);
        update();
      },
      { rootMargin: '200px 0px' }
    );
    io.observe(el);
    document.addEventListener('visibilitychange', update);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', update);
      setInView(false);
    };
  }, [autoPlay]);

  // Auto-play only: move to the next tab when the progress bar fills.
  // The 50 ms tick itself lives in <TabProgressBar />.
  const advanceTab = useCallback(() => {
    if (tookOverRef.current) return;
    setActiveTab((currTab) => {
      const currentIndex = TABS.findIndex((t) => t.id === currTab);
      const nextIndex = (currentIndex + 1) % TABS.length;
      return TABS[nextIndex].id;
    });
  }, []);

  // The three-stage reveal in the simulator: stage 1 now, stage 2 at 250 ms,
  // stage 3 at 500 ms. The pending stage timers are kept (as cancel functions)
  // so a new selection cancels the previous run instead of racing it.
  const stepCancelsRef = useRef<Array<() => void>>([]);
  const clearStepTimeouts = useCallback(() => {
    stepCancelsRef.current.forEach((cancel) => cancel());
    stepCancelsRef.current = [];
  }, []);
  const playSteps = useCallback(() => {
    clearStepTimeouts();
    setSimStep(1);
    stepCancelsRef.current = [250, 500].map((delay, i) => {
      const id = setTimeout(() => setSimStep(i + 2), delay);
      return () => clearTimeout(id);
    });
  }, [clearStepTimeouts]);
  useEffect(() => clearStepTimeouts, [clearStepTimeouts]);

  // Auto-play only: while the simulator tab is showing, step through its events.
  useEffect(() => {
    if (activeTab !== 'dataflow' || !timersOn) return;

    const eventTimer = setInterval(() => {
      if (tookOverRef.current) return;
      setActiveEventIndex((prev) => (prev + 1) % SIMULATION_EVENTS.length);
      playSteps();
    }, 2500);

    return () => clearInterval(eventTimer);
  }, [activeTab, timersOn, playSteps]);

  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabDomId = (id: TabType) => `${uid}-tab-${id}`;
  const panelDomId = (id: TabType) => `${uid}-panel-${id}`;

  const handleTabClick = (tabId: TabType) => {
    takeOver();
    setActiveTab(tabId);
  };

  // Tab still reaches every tab button, as before. Left and Right also move
  // between them, which is what a screen reader expects inside a tablist.
  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number;
    if (e.key === 'ArrowRight') nextIndex = (index + 1) % TABS.length;
    else if (e.key === 'ArrowLeft') nextIndex = (index - 1 + TABS.length) % TABS.length;
    else return;
    e.preventDefault();
    handleTabClick(TABS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleManualEventSelect = (index: number) => {
    takeOver();
    setActiveEventIndex(index);
    if (reducedMotion) {
      clearStepTimeouts();
      setSimStep(3);
    } else {
      playSteps();
    }
  };

  // All four panels are always in the DOM, so their text is in the server HTML.
  // The three that are not selected are display:none, inert and aria-hidden:
  // they take no space and are out of the tab order and the reading order.
  const panelProps = (id: TabType) => {
    const hidden = activeTab !== id;
    return {
      role: 'tabpanel' as const,
      id: panelDomId(id),
      'aria-labelledby': tabDomId(id),
      'aria-hidden': hidden || undefined,
      inert: hidden,
      className: `col-start-1 row-start-1 min-w-0 ${hidden ? 'hidden' : ''}`,
    };
  };

  return (
    <section
      ref={sectionRef}
      onPointerDownCapture={takeOver}
      onKeyDownCapture={takeOver}
      onFocusCapture={takeOver}
      onClickCapture={takeOver}
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
          
          <h2
            id={`${uid}-title`}
            className="font-fj-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]"
          >
            {title}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            {subtitle}
          </p>

          {/* ── TABS: AUTO-ADVANCE WITH A PROGRESS BAR UNTIL THE VISITOR TAKES OVER ── */}
          <div
            role="tablist"
            aria-labelledby={`${uid}-title`}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left"
          >
            {TABS.map((tab, index) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={tabDomId(tab.id)}
                  aria-selected={isSelected}
                  aria-controls={panelDomId(tab.id)}
                  onClick={() => handleTabClick(tab.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className={`group relative p-4 rounded-2xl transition-all duration-300 border text-left overflow-hidden cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#F05A28] shadow-[0_10px_25px_rgba(240,90,40,0.12)] ring-1 ring-[#F05A28]/30 scale-[1.02]'
                      : 'bg-white/70 hover:bg-white border-[#E8E1DA] hover:border-[#D0C6BD]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span aria-hidden="true" className="text-lg">{tab.icon}</span>
                    <span className={`text-xs font-bold font-fj-display transition-colors ${
                      isSelected ? 'text-[#B23E13]' : 'text-[#334155] group-hover:text-[#0F172A]'
                    }`}>
                      {tab.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#64748B] line-clamp-2 leading-relaxed">
                    {tab.tagline}
                  </p>

                  {isSelected ? (
                    <TabProgressBar autoPlay={autoPlay} running={timersOn} onComplete={advanceTab} />
                  ) : (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#E8E1DA]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Both lines sit in one grid cell so the row keeps the height of the
              longer one. Once auto-play has ended, the "auto-cycling" claim would
              be untrue, so only the second half of the line is shown. */}
          <div className="mt-3 grid grid-cols-1 text-[11px] text-[#64748B] font-fj-mono">
            <div
              aria-hidden={!autoPlay || undefined}
              className={`col-start-1 row-start-1 flex items-center justify-center gap-2 ${autoPlay ? '' : 'invisible'}`}
            >
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#B23E13]">
                <span className={`h-2 w-2 rounded-full bg-[#FF5622] ${autoPlay ? 'animate-ping' : ''}`} />
                Auto-cycling through web architecture lenses every 5s
              </span>
              <span>·</span>
              <span>Click any tab to jump directly</span>
            </div>
            <div
              aria-hidden={autoPlay || undefined}
              className={`col-start-1 row-start-1 flex items-center justify-center ${autoPlay ? 'invisible' : ''}`}
            >
              <span>Click any tab to jump directly</span>
            </div>
          </div>
        </div>

        {/* ── TAB PANELS: ONE GRID CELL, SIZED TO THE TALLEST (see panelProps) ── */}
        <div className="grid grid-cols-1 items-start">
          {/* ── TAB 1: 4-LAYER FRONTEND STACK ── */}
          <div {...panelProps('layers')}>
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
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F05A28] font-fj-mono text-xs font-bold text-white shadow-md shadow-[#F05A28]/30">
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
                      Bespoke Code
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
                      Hardware-accelerated CSS transitions so button hovers and modal opens respond without page lag.
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
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6] font-fj-mono text-xs font-bold text-white shadow-md shadow-[#3B82F6]/30">
                      L2
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg sm:text-xl font-bold text-[#0F172A]">
                        Layer 2: High-Performance Next.js Engineering
                      </h3>
                      <p className="text-xs text-[#64748B]">
                        Pre-rendered HTML delivering sub-second page loads, no layout shifts, and passing Google Core Web Vitals.
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
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#10B981] font-fj-mono text-xs font-bold text-white shadow-md shadow-[#10B981]/30">
                      L3
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg sm:text-xl font-bold text-[#0F172A]">
                        Layer 3: Headless Content &amp; Global Edge Infrastructure
                      </h3>
                      <p className="text-xs text-[#64748B]">
                        Easy visual content editing for your team, enterprise DDoS protection, and serverless hosting.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <span className="font-fj-mono text-xs text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-full font-semibold">
                      Global Edge Hosting
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
                    <p className="text-[12px] text-[#475569] leading-relaxed">Assets served from Cloudflare's global edge network with SSL and DDoS protection.</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                    <p className="text-xs font-bold text-[#0F172A] mb-1">Google Analytics 4 &amp; GTM</p>
                    <p className="text-[12px] text-[#475569] leading-relaxed">Custom conversion events tracking phone calls, form completions, and qualified leads.</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                    <p className="text-xs font-bold text-[#0F172A] mb-1">Full IP Ownership</p>
                    <p className="text-[12px] text-[#475569] leading-relaxed">You own your Git repository, Figma files, and hosting configuration, with no lock-in.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── TAB 2: LIVE SPEED & VITALS SIMULATOR ── */}
          <div {...panelProps('dataflow')}>
            <div className="bg-white border border-[#E8DFD8] rounded-3xl p-6 sm:p-9 shadow-xl shadow-orange-950/5 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F1E9E3]">
                <div>
                  <span className="font-fj-mono text-xs font-bold text-[#B23E13] uppercase tracking-wider">
                    ⚡ Interactive Performance Simulator
                  </span>
                  <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-[#0F172A] mt-1">
                    Click an Event to Trace How Next.js Delivers a Page
                  </h3>
                  <p className="text-sm text-[#64748B] mt-1">
                    See how mobile requests, lead form routing, CMS publishing, and Core Web Vitals checks are processed.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full bg-[#10B981] ${activeTab === 'dataflow' ? 'animate-ping' : ''}`} />
                  <span className="font-fj-mono text-xs text-[#047857] font-bold">
                    Edge Network Active
                  </span>
                </div>
              </div>

              {/* Clickable Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                {SIMULATION_EVENTS.map((ev, idx) => (
                  <button
                    key={ev.id}
                    type="button"
                    aria-pressed={activeEventIndex === idx}
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
                    <span className="text-[11px] font-fj-mono text-[#64748B]">Request</span>
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
                    <span className="text-[11px] font-fj-mono text-[#64748B]">Render</span>
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
                    <span className="text-[11px] font-fj-mono text-[#047857] font-bold">Result</span>
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
                  <span className="text-[#64748B] block text-[10px] uppercase font-bold mb-1">Outcome</span>
                  <span className="text-sm font-bold text-[#0F172A]">{activeEvent.status}</span>
                  <span className="text-[#047857] block text-[11px]">Illustrative walkthrough</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── TAB 3: MODERN WEB ENGINEERING STACK ── */}
          <div {...panelProps('connectors')}>
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
                    Type-safe codebase, no runtime CSS bloat, and a close match to the approved design system.
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
                    Global edge caching, automated SSL encryption, and unmetered DDoS mitigation.
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
          </div>

          {/* ── TAB 4: 7-DAY SPRINT DELIVERY PROTOCOL ── */}
          <div {...panelProps('protocol')}>
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
                      We code your bespoke components with clean TypeScript and Tailwind CSS, aiming for sub-second loads with no plugin dependencies.
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
                      We populate verified copy, optimize WebP assets, embed JSON-LD schema, configure GA4 tracking, and run a planned DNS cutover.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                  <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#10B981] font-fj-mono text-xs font-bold text-white">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-sm">Post-Launch: Defect Cover &amp; Recorded Video Training</h4>
                    <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                      We fix defects found after launch, for a cover period agreed in the build price, and deliver a personalized recorded video training session for your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BENTO ASSURANCE METRICS (LIGHT & CRISP) ── */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#0F172A]">7 Days</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Delivery for Sites up to 5 Pages</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#F05A28]">95+</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Mobile Lighthouse Score</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Yours</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Full Code &amp; IP Ownership</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#047857]">Included</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Post-Launch Defect Cover</p>
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
                ✓ Engineer-Led · Zero Sales Pressure
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
