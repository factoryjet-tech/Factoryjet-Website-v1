'use client';

import React, { useState, useEffect, useRef } from 'react';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import type { ModalRegion } from '@/context/ContactModalContext';

export interface EnterpriseArchitectureBlueprintProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  legacySource?: string;
  targetStack?: string;
  ctaLabel?: string;
  region?: ModalRegion;
}

type TabType = 'layers' | 'dataflow' | 'erp' | 'cutover';

interface TabConfig {
  id: TabType;
  label: string;
  icon: string;
  tagline: string;
}

const TABS: TabConfig[] = [
  {
    id: 'layers',
    label: '4-Layer Architecture Stack',
    icon: '🏛️',
    tagline: 'See how the modern store, real-time event pipeline, and ERP connect together.',
  },
  {
    id: 'dataflow',
    label: 'Live Event Pipeline Simulator',
    icon: '⚡',
    tagline: 'Test real-time orders, inventory sync, and pricing updates in under 150ms.',
  },
  {
    id: 'erp',
    label: 'ERP & System Connectors',
    icon: '🔌',
    tagline: 'Keep NetSuite, SAP, Manhattan WMS, and Salesforce CDP perfectly in sync.',
  },
  {
    id: 'cutover',
    label: 'Zero-Downtime Cutover Protocol',
    icon: '🛡️',
    tagline: 'Our 5-stage roadmap to move platforms with zero lost sales and 100% SEO safety.',
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
  payload: string;
}

const SIMULATION_EVENTS: SimulationEvent[] = [
  {
    id: 'order',
    label: 'Order Placed (DTC or B2B)',
    source: 'Shopify Plus 1-Click Checkout',
    protocol: 'GraphQL Webhook → Cloudflare Message Queue',
    latency: '112ms',
    status: 'Instantly synced into NetSuite ERP',
    explanation: 'A buyer clicks "Pay". The order is safely queued in under 50ms so no purchase is ever lost, then booked straight into your ERP general ledger.',
    payload: '{\n  "event": "orders/create",\n  "total": "$4,820.00",\n  "terms": "Net 30",\n  "idempotencyKey": "ord_8f92a1",\n  "status": "confirmed"\n}',
  },
  {
    id: 'inventory',
    label: 'Warehouse Inventory Update',
    source: 'Manhattan WMS / 3PL Warehouse',
    protocol: 'REST Webhook → Smart Delta Ingestion',
    latency: '84ms',
    status: 'Stock levels updated across all stores',
    explanation: 'When pallets arrive at your warehouse, stock counts update across your website, retail stores, and B2B portal in under 100 milliseconds.',
    payload: '{\n  "event": "inventory/delta",\n  "skuCount": 1420,\n  "locations": ["US-East", "US-West"],\n  "syncLatency": "84ms"\n}',
  },
  {
    id: 'pricing',
    label: 'Custom B2B Price Agreement',
    source: 'NetSuite / SAP ERP Pricing Engine',
    protocol: 'SuiteTalk REST → Shopify Plus B2B Catalogs',
    latency: '138ms',
    status: 'Negotiated wholesale rates applied',
    explanation: 'When sales reps update contract terms in your ERP, wholesale buyers see their exact negotiated discount the moment they log in.',
    payload: '{\n  "companyId": "comp_9918",\n  "tier": "Wholesale Platinum",\n  "discount": "42%",\n  "taxExempt": true\n}',
  },
  {
    id: 'ai_agent',
    label: 'Autonomous AI Quote Assistant',
    source: 'AI Sales Agent (MCP Connector)',
    protocol: 'Model Context Protocol → Real-Time ERP Catalog',
    latency: '165ms',
    status: 'Approved Draft PO sent to buyer',
    explanation: 'An AI assistant reviews a customer RFQ email, checks real-time inventory and margin rules in your ERP, and drafts an instant invoice.',
    payload: '{\n  "agent": "rfq_bidding_agent",\n  "quoteId": "quote_4421",\n  "marginCheck": "passed",\n  "approval": "auto"\n}',
  },
];

const AUTO_SCROLL_DURATION = 5000; // 5 seconds per tab

export default function EnterpriseArchitectureBlueprint({
  badge = '// ENTERPRISE ARCHITECTURE BLUEPRINT',
  title = 'How Modern Enterprise Commerce Works',
  subtitle = 'Say goodbye to slow cartridge builds, high license fees, and fragile integrations. Here is how leading brands move from Salesforce Commerce Cloud to Shopify Plus with zero downtime.',
  legacySource = 'Salesforce Commerce Cloud (SFCC)',
  targetStack = 'Shopify Plus Enterprise Architecture',
  ctaLabel = 'Schedule a Free 30-Min Architecture Scoping Call',
  region = 'us',
}: EnterpriseArchitectureBlueprintProps) {
  const [activeTab, setActiveTab] = useState<TabType>('layers');
  const [progress, setProgress] = useState(0);
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);
  const [simStep, setSimStep] = useState(3);
  const userInteractedRef = useRef(false);

  const activeEvent = SIMULATION_EVENTS[activeEventIndex];

  // Auto-scroll progress timer across tabs
  useEffect(() => {
    const intervalTime = 50;
    const stepIncrement = (intervalTime / AUTO_SCROLL_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance to next tab
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

  // When user clicks a tab
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
      {/* ── STRIPE-STYLE LUMINOUS MESH GRADIENTS ── */}
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

                  {/* Auto-scroll progress line on active tab */}
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
              Auto-cycling through architecture lenses every 5s
            </span>
            <span>·</span>
            <span>Click any tab to jump directly</span>
          </div>
        </div>

        {/* ── TAB 1: 4-LAYER ARCHITECTURE STACK ── */}
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
                      Layer 1: The Modern Storefront (Fast, Flexible &amp; Easy to Edit)
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      What your customers actually see and use. Loads in under 1 second and lets your marketing team edit banners in minutes without coding.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#0369A1] bg-[#E0F2FE] px-3 py-1 rounded-full font-semibold">
                    ⚡ Sub-Second Speed
                  </span>
                  <span className="font-fj-mono text-xs text-[#047857] bg-[#D1FAE5] px-3 py-1 rounded-full font-semibold">
                    1-Click Shop Pay
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Global Online Store</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Super-fast mobile shopping with instant checkout and multi-currency pricing across the world.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Wholesale &amp; B2B Portal</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Wholesale buyers get their custom negotiated prices, volume tiers, and Net 30 invoices on one login.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Retail Stores &amp; POS</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    One unified inventory and customer account shared between your physical stores and website.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">AI Search Optimization</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Built so ChatGPT, Perplexity, and Google AI Overviews instantly recommend your brand.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOW INDICATOR */}
            <div className="flex justify-center items-center gap-2 py-1 text-xs text-[#B23E13] font-fj-mono font-bold">
              <span>↓</span>
              <span className="bg-white px-4 py-1 rounded-full border border-[#E5DFD7] shadow-sm">
                Instant GraphQL Webhook Stream (Zero Dropped Orders)
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
                      Layer 2: The Smart Event Bus (The Highway Between Systems)
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Guarantees that every single purchase, stock change, and price update moves instantly without crashing your servers.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#0369A1] bg-[#E0F2FE] px-3 py-1 rounded-full font-semibold">
                    10,000+ evts/sec
                  </span>
                  <span className="font-fj-mono text-xs text-[#047857] bg-[#D1FAE5] px-3 py-1 rounded-full font-semibold">
                    99.99% Uptime SLA
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Durable Safety Queues</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    If your ERP ever undergoes scheduled maintenance, orders wait safely in queue and sync the second it comes back.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Automatic Data Translator</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Converts Shopify orders and products into the exact format your ERP understands, with zero human data entry.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Duplicate Protection</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    Prevents accidental double charges or double order bookings even during massive Black Friday traffic spikes.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOW INDICATOR */}
            <div className="flex justify-center items-center gap-2 py-1 text-xs text-[#3B82F6] font-fj-mono font-bold">
              <span>↓</span>
              <span className="bg-white px-4 py-1 rounded-full border border-[#E5DFD7] shadow-sm">
                Certified REST, OData &amp; SuiteTalk Connectors
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
                      Layer 3: Your Back-Office Systems (Completely Untouched)
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      You do not have to replace your ERP, warehouse software, or accounting tools. They stay your single source of truth.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-full font-semibold">
                    Zero Back-Office Disruption
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">NetSuite / SAP ERP</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">General ledger, corporate finance, taxes, and purchase orders balance automatically.</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">PIM (Product Master)</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">Akeneo, Pimcore, or Salsify managing 100k+ SKU specs and image galleries.</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Warehouse &amp; 3PL (WMS)</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">Manhattan, Deposco, or ShipBob printing packing slips and tracking numbers live.</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8E1]">
                  <p className="text-xs font-bold text-[#0F172A] mb-1">Salesforce CRM / Klaviyo</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed">Keep your customer support tickets and marketing automations running seamlessly.</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ── TAB 2: LIVE EVENT PIPELINE SIMULATOR ── */}
        {activeTab === 'dataflow' && (
          <div className="bg-white border border-[#E8DFD8] rounded-3xl p-6 sm:p-9 shadow-xl shadow-orange-950/5 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F1E9E3]">
              <div>
                <span className="font-fj-mono text-xs font-bold text-[#B23E13] uppercase tracking-wider">
                  ⚡ Interactive Real-Time Pipeline
                </span>
                <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-[#0F172A] mt-1">
                  Click an Event to Trace How Data Moves in Under 150ms
                </h3>
                <p className="text-sm text-[#64748B] mt-1">
                  See how orders, stock levels, and custom prices travel between your Shopify store and your ERP in real time.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-fj-mono text-xs text-[#047857] font-bold">
                  Pipeline Active · Sub-150ms SLA
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
                  <span className="font-fj-mono text-xs text-[#B23E13] font-bold">STEP 1: INGESTION</span>
                  <span className="text-[11px] font-fj-mono text-[#64748B]">0ms</span>
                </div>
                <h4 className="font-bold text-sm text-[#0F172A]">Event Triggered</h4>
                <p className="text-xs text-[#475569] mt-1">{activeEvent.source}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-white p-2 rounded-lg border border-[#EFE8E1] text-[#0369A1]">
                  ✓ Verified Webhook Payload
                </div>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${
                simStep >= 2 ? 'bg-[#F0F9FF] border-[#3B82F6]' : 'bg-[#FAF8F5] border-[#E8DFD8] opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fj-mono text-xs text-[#0369A1] font-bold">STEP 2: PIPELINE BUS</span>
                  <span className="text-[11px] font-fj-mono text-[#64748B]">~45ms</span>
                </div>
                <h4 className="font-bold text-sm text-[#0F172A]">Idempotent Queue</h4>
                <p className="text-xs text-[#475569] mt-1">{activeEvent.protocol}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-white p-2 rounded-lg border border-[#EFE8E1] text-[#047857]">
                  ✓ Zero Dropped Records
                </div>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${
                simStep >= 3 ? 'bg-[#ECFDF5] border-[#10B981]' : 'bg-[#FAF8F5] border-[#E8DFD8] opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fj-mono text-xs text-[#047857] font-bold">STEP 3: COMPLETED</span>
                  <span className="text-[11px] font-fj-mono text-[#047857] font-bold">{activeEvent.latency}</span>
                </div>
                <h4 className="font-bold text-sm text-[#0F172A]">ERP Confirmed</h4>
                <p className="text-xs text-[#475569] mt-1">{activeEvent.status}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-white p-2 rounded-lg border border-[#EFE8E1] text-[#047857]">
                  ✓ 200 OK Response Recorded
                </div>
              </div>

            </div>

            {/* Plain English Explanation & Payload Preview */}
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
                <span className="text-[#64748B] block text-[10px] uppercase font-bold mb-1">Payload Latency</span>
                <span className="text-lg font-bold text-[#0F172A]">{activeEvent.latency}</span>
                <span className="text-[#047857] block text-[11px]">99.99% reliability</span>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: ERP & SYSTEM CONNECTORS ── */}
        {activeTab === 'erp' && (
          <div className="bg-white border border-[#E8DFD8] rounded-3xl p-6 sm:p-9 shadow-xl shadow-orange-950/5 animate-fadeIn">
            <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
              Certified Enterprise ERP &amp; Back-Office Connectors
            </h3>
            <p className="text-sm text-[#64748B] mb-6 max-w-2xl">
              We do not use brittle third-party Zapier plugins. Every pipeline is engineered directly against official ERP API protocols:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#F05A28]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F05A28]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">NetSuite ERP SuiteTalk</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Direct REST web services for customer deposits, matrix items, tiered pricing lists, and multi-subsidiary tax balancing.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">SuiteTalk REST</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">OAuth 2.0</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#3B82F6]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3B82F6]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">SAP S/4HANA &amp; ECC</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  High-throughput OData and BAPI protocols for enterprise purchase orders, material master replication, and invoice tracking.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">OData v4</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">RFC / BAPI</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#10B981]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Akeneo &amp; Pimcore PIM</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Automated sync of 100,000+ SKU attribute sets, technical specs, multilingual copy, and high-res media files.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">GraphQL API</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Bulk Media Sync</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#F59E0B]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Manhattan &amp; Deposco WMS</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Real-time stock reservation, multi-warehouse routing, lot and serial tracking, and instant shipping label generation.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">Real-Time ATP</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Webhooks</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#EC4899]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EC4899]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Salesforce CRM &amp; Service Cloud</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Leaving B2C Commerce does NOT mean leaving Salesforce. Your CRM, customer support cases, and CDP stay fully connected.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">EventBridge</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">Customer 360</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD8] hover:border-[#8B5CF6]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
                  <h4 className="font-bold text-[#0F172A] text-sm">Avalara AvaTax &amp; TaxJar</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Real-time sales tax calculation across 12,000+ US jurisdictions and automated filing with zero manual accounting adjustments.
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#0369A1]">AvaTax REST</span>
                  <span className="font-fj-mono text-[10px] bg-white px-2 py-0.5 rounded border text-[#047857]">GL Tax Line Sync</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 4: ZERO-DOWNTIME CUTOVER PROTOCOL ── */}
        {activeTab === 'cutover' && (
          <div className="bg-white border border-[#E8DFD8] rounded-3xl p-6 sm:p-9 shadow-xl shadow-orange-950/5 animate-fadeIn">
            <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
              Our 5-Stage Zero-Downtime Migration Protocol
            </h3>
            <p className="text-sm text-[#64748B] mb-6 max-w-2xl">
              We never guess or rush cutovers. Here is the exact step-by-step roadmap that protects your sales and search traffic:
            </p>

            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Complete Customization &amp; Cartridge Inventory</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We audit every single custom cartridge, ISML template, promotion rule, and scheduled background job so nothing is missed or forgotten.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Historical Customer &amp; Order Replication</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We securely transfer 5+ years of customer purchase history, addresses, and product variants with automated scripts verifying 100% data parity.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">1-to-1 301 URL Redirect Mapping (100% SEO Safety)</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We map every single indexed legacy URL so customers and Google bots land on the exact right product page without 404 broken links.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Staging Acceptance on Real Test Orders</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We simulate high-traffic flash sales and test real warehouse packing slips in staging before touching your live domain.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#10B981] font-fj-mono text-xs font-bold text-white">
                  5
                </span>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm">Zero-Downtime Blue/Green DNS Switch</h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    We flip the DNS switch instantly during off-peak hours with immediate rollback safety nets and 24/7 engineer monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── BENTO ASSURANCE METRICS (LIGHT & CRISP) ── */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#0F172A]">99.99%</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Uptime Guarantee SLA</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#F05A28]">0 Sec</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Cutover Downtime</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#0F172A]">100%</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Preserved 301 URL Equity</p>
          </div>
          <div className="bg-white border border-[#E8DFD8] p-5 rounded-2xl shadow-sm hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#047857]">SOC2 &amp; PCI</p>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Level 1 Compliant Architecture</p>
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
                Reviewing Your {legacySource} Contract or Replatforming?
              </h3>
              
              <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
                Talk directly with founder Bhavesh Barot (no junior salespeople). We review your custom cartridges, ERP synchronization requirements, and deliver a transparent fixed-price roadmap before any commitment.
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
