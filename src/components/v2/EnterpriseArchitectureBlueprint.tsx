'use client';

import React, { useState, useEffect } from 'react';
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

interface SimulationEvent {
  id: string;
  label: string;
  source: string;
  protocol: string;
  latency: string;
  status: string;
  payload: string;
}

const SIMULATION_EVENTS: SimulationEvent[] = [
  {
    id: 'order',
    label: 'High-Volume DTC / B2B Order',
    source: 'Shopify Plus Storefront',
    protocol: 'GraphQL Webhook → Cloudflare Queue',
    latency: '112ms',
    status: 'Synced to NetSuite ERP',
    payload: '{\n  "event": "orders/create",\n  "total": "$4,820.00",\n  "terms": "Net 30",\n  "idempotencyKey": "ord_8f92a1"\n}',
  },
  {
    id: 'inventory',
    label: '100k+ SKU Inventory Delta Sync',
    source: 'Manhattan WMS / 3PL',
    protocol: 'REST Webhook → Idempotent Queue',
    latency: '84ms',
    status: 'Inventory Levels Updated',
    payload: '{\n  "event": "inventory/delta",\n  "skuCount": 1420,\n  "locations": ["US-East", "US-West"],\n  "syncLatency": "84ms"\n}',
  },
  {
    id: 'pricing',
    label: 'B2B Custom Tiered Price Update',
    source: 'SAP S/4HANA / NetSuite',
    protocol: 'SuiteTalk REST → Shopify Plus B2B Catalogs',
    latency: '138ms',
    status: 'Price Lists Reconciled',
    payload: '{\n  "companyId": "comp_9918",\n  "tier": "Wholesale Platinum",\n  "discount": "42%",\n  "taxExempt": true\n}',
  },
  {
    id: 'ai_agent',
    label: 'Autonomous RFQ Quote Engine',
    source: 'AI Sales Agent (MCP)',
    protocol: 'Model Context Protocol → ERP Pricing Engine',
    latency: '165ms',
    status: 'Draft PO Generated',
    payload: '{\n  "agent": "rfq_bidding_agent",\n  "quoteId": "quote_4421",\n  "marginCheck": "passed",\n  "approval": "auto"\n}',
  },
];

export default function EnterpriseArchitectureBlueprint({
  badge = '// ENTERPRISE REFERENCE ARCHITECTURE',
  title = 'Production-Grade Architecture for $10M–$100M+ Scale',
  subtitle = 'How tier-1 systems integrators structure zero-downtime commerce, bi-directional ERP pipelines, and sub-150ms event-driven data sync.',
  legacySource = 'SFCC / Demandware',
  targetStack = 'Shopify Plus Enterprise + Real-Time Event Bus',
  ctaLabel = 'Schedule Architecture Scoping Call',
  region = 'us',
}: EnterpriseArchitectureBlueprintProps) {
  const [activeTab, setActiveTab] = useState<TabType>('layers');
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const [activeEvent, setActiveEvent] = useState<SimulationEvent>(SIMULATION_EVENTS[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(3);

  const runSimulation = (ev: SimulationEvent) => {
    setActiveEvent(ev);
    setIsSimulating(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 350);
    setTimeout(() => {
      setSimStep(3);
      setIsSimulating(false);
    }, 700);
  };

  return (
    <section className="relative overflow-hidden bg-[#07090E] text-[#F3F4F6] py-20 md:py-28 font-fj-body border-y border-[#1A2030]">
      {/* ── AMBIENT GLOWS & BACKGROUND MESH ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 -mt-24 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#F05A28]/15 via-[#F05A28]/5 to-transparent blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 -mb-24 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#3B82F6]/15 via-[#3B82F6]/5 to-transparent blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #F05A28 1px, transparent 0), radial-gradient(circle at 1px 1px, #263147 1px, transparent 0)',
          backgroundSize: '36px 36px',
          backgroundPosition: '0 0, 18px 18px',
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161C2A] border border-[#27334D] mb-4 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-fj-mono text-[11px] font-bold uppercase tracking-widest text-[#F05A28]">
              {badge}
            </span>
          </div>
          
          <h2 className="font-fj-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            {title}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {subtitle}
          </p>

          {/* ── INTERACTIVE LENS SWITCHER ── */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#0F1420] border border-[#222B3F] shadow-2xl backdrop-blur-xl max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('layers')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'layers'
                  ? 'bg-gradient-to-r from-[#F05A28] to-[#E04816] text-white shadow-lg shadow-[#F05A28]/25'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🏛️ 4-Layer Architecture Stack</span>
            </button>
            <button
              onClick={() => setActiveTab('dataflow')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'dataflow'
                  ? 'bg-gradient-to-r from-[#F05A28] to-[#E04816] text-white shadow-lg shadow-[#F05A28]/25'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              <span>⚡ Live Event Pipeline Simulator</span>
            </button>
            <button
              onClick={() => setActiveTab('erp')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'erp'
                  ? 'bg-gradient-to-r from-[#F05A28] to-[#E04816] text-white shadow-lg shadow-[#F05A28]/25'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🔌 ERP &amp; Middleware Matrix</span>
            </button>
            <button
              onClick={() => setActiveTab('cutover')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'cutover'
                  ? 'bg-gradient-to-r from-[#F05A28] to-[#E04816] text-white shadow-lg shadow-[#F05A28]/25'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🛡️ Zero-Downtime Cutover</span>
            </button>
          </div>
        </div>

        {/* ── TAB 1: 4-LAYER ARCHITECTURE STACK ── */}
        {activeTab === 'layers' && (
          <div className="space-y-5 animate-fadeIn">
            
            {/* LAYER 1 */}
            <div
              onClick={() => setActiveLayer(1)}
              className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 backdrop-blur-xl border ${
                activeLayer === 1
                  ? 'bg-[#121826]/90 border-[#F05A28]/60 shadow-[0_0_30px_rgba(240,90,40,0.15)] ring-1 ring-[#F05A28]/40'
                  : 'bg-[#0E131E]/70 border-[#20293D] hover:border-[#32405D] hover:bg-[#121724]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#1E273A]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#F05A28] to-[#C94A1A] font-fj-mono text-xs font-bold text-white shadow-md shadow-[#F05A28]/30">
                    L1
                  </div>
                  <div>
                    <h3 className="font-fj-display text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      Omni-Channel Experience &amp; Edge Storefront Surface
                    </h3>
                    <p className="text-xs text-[#94A3B8]">
                      Zero-latency buyer touchpoints, mobile-first conversions, and generative AI search endpoints.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#60A5FA] bg-[#172238] px-3 py-1 rounded-full border border-[#2B3B5E]">
                    Latency: &lt; 80ms TTFB
                  </span>
                  <span className="font-fj-mono text-xs text-[#34D399] bg-[#0E2A1E] px-3 py-1 rounded-full border border-[#1B5239]">
                    Lighthouse 95+
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234] hover:border-[#F05A28]/40 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-xs font-bold text-white">Global Web Storefront</p>
                    <span className="text-[10px] font-fj-mono text-[#F05A28]">DTC / Multi-locale</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Shopify Plus Liquid &amp; Next.js Headless with Shop Pay 1-click checkout.
                  </p>
                </div>

                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234] hover:border-[#F05A28]/40 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-xs font-bold text-white">B2B Wholesale Portal</p>
                    <span className="text-[10px] font-fj-mono text-[#60A5FA]">Native Plus B2B</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Negotiated price lists, company account hierarchies, Net 30/60 &amp; volume breaks.
                  </p>
                </div>

                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234] hover:border-[#F05A28]/40 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-xs font-bold text-white">Unified Retail POS</p>
                    <span className="text-[10px] font-fj-mono text-[#34D399]">POS Pro</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Single customer profile, shared inventory, and endless aisle retail checkout.
                  </p>
                </div>

                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234] hover:border-[#F05A28]/40 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-xs font-bold text-white">AI Search &amp; GEO Graph</p>
                    <span className="text-[10px] font-fj-mono text-[#C084FC]">MCP Endpoints</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Rich JSON-LD entity graph, answer-first content for ChatGPT, Perplexity &amp; AIO.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOW CONNECTOR */}
            <div className="flex justify-center items-center gap-3 py-1 text-xs text-[#F05A28] font-fj-mono font-semibold">
              <span className="animate-bounce">↓</span>
              <span className="bg-[#151C2C] px-4 py-1 rounded-full border border-[#273550] shadow-sm">
                GraphQL Mutation Webhooks · Idempotent Event Broker
              </span>
              <span className="animate-bounce">↓</span>
            </div>

            {/* LAYER 2 */}
            <div
              onClick={() => setActiveLayer(2)}
              className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 backdrop-blur-xl border ${
                activeLayer === 2
                  ? 'bg-[#121826]/90 border-[#3B82F6]/60 shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-[#3B82F6]/40'
                  : 'bg-[#0E131E]/70 border-[#20293D] hover:border-[#32405D] hover:bg-[#121724]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#1E273A]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] font-fj-mono text-xs font-bold text-white shadow-md shadow-[#3B82F6]/30">
                    L2
                  </div>
                  <div>
                    <h3 className="font-fj-display text-lg sm:text-xl font-bold text-white">
                      Real-Time Event Orchestration &amp; Middleware Bus
                    </h3>
                    <p className="text-xs text-[#94A3B8]">
                      High-throughput message broker guaranteeing zero dropped orders, exponential retries, and rate throttling.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#60A5FA] bg-[#172238] px-3 py-1 rounded-full border border-[#2B3B5E]">
                    Throughput: 10,000+ evt/sec
                  </span>
                  <span className="font-fj-mono text-xs text-[#34D399] bg-[#0E2A1E] px-3 py-1 rounded-full border border-[#1B5239]">
                    SLA: 99.99% Uptime
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234]">
                  <p className="text-xs font-bold text-white mb-1">Durable Event Queues</p>
                  <p className="text-[11px] text-[#94A3B8]">
                    AWS SQS &amp; Cloudflare Queues with dead-letter queue (DLQ) failover and 7-day retention.
                  </p>
                </div>
                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234]">
                  <p className="text-xs font-bold text-white mb-1">Schema Validation &amp; Delta Sync</p>
                  <p className="text-[11px] text-[#94A3B8]">
                    Automated bi-directional data mapping: price books, inventory stock, customer master records.
                  </p>
                </div>
                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234]">
                  <p className="text-xs font-bold text-white mb-1">Idempotency &amp; Rate Budgeting</p>
                  <p className="text-[11px] text-[#94A3B8]">
                    Enforces API token limits, preventing duplicate order ingestion during network blips.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOW CONNECTOR */}
            <div className="flex justify-center items-center gap-3 py-1 text-xs text-[#3B82F6] font-fj-mono font-semibold">
              <span className="animate-bounce">↓</span>
              <span className="bg-[#151C2C] px-4 py-1 rounded-full border border-[#273550] shadow-sm">
                REST / SOAP / SuiteTalk / OData / SFTP Connectors
              </span>
              <span className="animate-bounce">↓</span>
            </div>

            {/* LAYER 3 */}
            <div
              onClick={() => setActiveLayer(3)}
              className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 backdrop-blur-xl border ${
                activeLayer === 3
                  ? 'bg-[#121826]/90 border-[#10B981]/60 shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-1 ring-[#10B981]/40'
                  : 'bg-[#0E131E]/70 border-[#20293D] hover:border-[#32405D] hover:bg-[#121724]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#1E273A]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#10B981] to-[#047857] font-fj-mono text-xs font-bold text-white shadow-md shadow-[#10B981]/30">
                    L3
                  </div>
                  <div>
                    <h3 className="font-fj-display text-lg sm:text-xl font-bold text-white">
                      Enterprise Core System of Record &amp; Infrastructure
                    </h3>
                    <p className="text-xs text-[#94A3B8]">
                      Your enterprise back-office remains completely untouched and perfectly synchronized.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-fj-mono text-xs text-[#F59E0B] bg-[#2E200C] px-3 py-1 rounded-full border border-[#523A16]">
                    Single Source of Truth
                  </span>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234]">
                  <p className="text-xs font-bold text-white mb-1">ERP &amp; Finance</p>
                  <p className="text-[11px] text-[#94A3B8]">NetSuite / SAP S/4HANA / Microsoft Dynamics 365</p>
                </div>
                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234]">
                  <p className="text-xs font-bold text-white mb-1">PIM &amp; Master Catalog</p>
                  <p className="text-[11px] text-[#94A3B8]">Akeneo / Pimcore / Salsify 100k+ SKU product data</p>
                </div>
                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234]">
                  <p className="text-xs font-bold text-white mb-1">WMS &amp; 3PL Fulfillment</p>
                  <p className="text-[11px] text-[#94A3B8]">Manhattan / Deposco / ShipBob live stock allocation</p>
                </div>
                <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#1A2234]">
                  <p className="text-xs font-bold text-white mb-1">CRM &amp; Marketing CDP</p>
                  <p className="text-[11px] text-[#94A3B8]">Salesforce CRM / HubSpot / Klaviyo customer profiles</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ── TAB 2: LIVE EVENT PIPELINE SIMULATOR ── */}
        {activeTab === 'dataflow' && (
          <div className="bg-[#101522]/90 border border-[#242F47] rounded-2xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1E283E]">
              <div>
                <span className="font-fj-mono text-xs font-bold text-[#F05A28] uppercase tracking-wider">
                  Interactive Pipeline Inspector
                </span>
                <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-white mt-1">
                  Simulate Real-Time Enterprise Event Processing
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Click any event type to trace the real-time event pipeline, payload transformation, and simulated ERP latency.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-fj-mono text-xs text-[#34D399] font-semibold">
                  Active Simulation Ready
                </span>
              </div>
            </div>

            {/* Event Selection Pills */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {SIMULATION_EVENTS.map((ev) => (
                <button
                  key={ev.id}
                  onClick={() => runSimulation(ev)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    activeEvent.id === ev.id
                      ? 'bg-[#F05A28]/20 border-[#F05A28] text-white shadow-md shadow-[#F05A28]/20'
                      : 'bg-[#0B0F18] border-[#1C2538] text-[#94A3B8] hover:text-white hover:border-[#2C3B5A]'
                  }`}
                >
                  ⚡ {ev.label}
                </button>
              ))}
            </div>

            {/* Pipeline Stage Visualizer */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className={`p-5 rounded-xl border transition-all ${
                simStep >= 1 ? 'bg-[#151D2E] border-[#F05A28]/60 text-white' : 'bg-[#0B0F17] border-[#1C2538] opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fj-mono text-xs text-[#F05A28] font-bold">STAGE 1</span>
                  <span className="text-[11px] font-fj-mono text-[#94A3B8]">0ms</span>
                </div>
                <h4 className="font-semibold text-sm">Source Ingestion</h4>
                <p className="text-xs text-[#94A3B8] mt-1">{activeEvent.source}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-[#0B0F17] p-2 rounded border border-[#1A2234] text-[#60A5FA]">
                  ✓ Verified Webhook Payload
                </div>
              </div>

              <div className={`p-5 rounded-xl border transition-all ${
                simStep >= 2 ? 'bg-[#151D2E] border-[#3B82F6]/60 text-white' : 'bg-[#0B0F17] border-[#1C2538] opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fj-mono text-xs text-[#60A5FA] font-bold">STAGE 2</span>
                  <span className="text-[11px] font-fj-mono text-[#94A3B8]">~45ms</span>
                </div>
                <h4 className="font-semibold text-sm">Orchestration &amp; Queue</h4>
                <p className="text-xs text-[#94A3B8] mt-1">{activeEvent.protocol}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-[#0B0F17] p-2 rounded border border-[#1A2234] text-[#34D399]">
                  ✓ Idempotency Check Passed
                </div>
              </div>

              <div className={`p-5 rounded-xl border transition-all ${
                simStep >= 3 ? 'bg-[#151D2E] border-[#10B981]/60 text-white' : 'bg-[#0B0F17] border-[#1C2538] opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fj-mono text-xs text-[#34D399] font-bold">STAGE 3</span>
                  <span className="text-[11px] font-fj-mono text-[#34D399] font-bold">{activeEvent.latency}</span>
                </div>
                <h4 className="font-semibold text-sm">ERP Acknowledged</h4>
                <p className="text-xs text-[#94A3B8] mt-1">{activeEvent.status}</p>
                <div className="mt-3 text-[11px] font-fj-mono bg-[#0B0F17] p-2 rounded border border-[#1A2234] text-[#34D399]">
                  ✓ 200 OK Confirmed
                </div>
              </div>

            </div>

            {/* Code Payload Inspector */}
            <div className="mt-6 bg-[#080B10] p-4 rounded-xl border border-[#1A2234]">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#141B29]">
                <span className="font-fj-mono text-xs text-[#94A3B8]">
                  Event Payload Stream ({activeEvent.protocol})
                </span>
                <span className="font-fj-mono text-xs text-[#F05A28]">
                  Total Latency: {activeEvent.latency}
                </span>
              </div>
              <pre className="font-fj-mono text-xs text-[#E2E8F0] overflow-x-auto p-2">
                <code>{activeEvent.payload}</code>
              </pre>
            </div>
          </div>
        )}

        {/* ── TAB 3: ERP & MIDDLEWARE MATRIX ── */}
        {activeTab === 'erp' && (
          <div className="bg-[#101522]/90 border border-[#242F47] rounded-2xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl animate-fadeIn">
            <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-white mb-2">
              Enterprise Connector &amp; Protocol Support
            </h3>
            <p className="text-sm text-[#94A3B8] mb-6 max-w-2xl">
              We eliminate brittle custom scripts with enterprise connectors built directly against manufacturer and ERP specifications:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#0B0F18] p-5 rounded-xl border border-[#1C2538]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#F05A28]" />
                  <h4 className="font-bold text-white text-sm">NetSuite ERP SuiteTalk</h4>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  REST web services and SuiteQL synchronization for customer deposits, matrix items, tiered pricing lists, and multi-subsidiary taxation.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#60A5FA]">SuiteTalk REST</span>
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#34D399]">OAuth 2.0</span>
                </div>
              </div>

              <div className="bg-[#0B0F18] p-5 rounded-xl border border-[#1C2538]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                  <h4 className="font-bold text-white text-sm">SAP S/4HANA &amp; ECC</h4>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  OData and BAPI protocol bindings for enterprise sales orders, material master catalog replication, and automated invoice clearance.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#60A5FA]">OData v4</span>
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#34D399]">RFC / BAPI</span>
                </div>
              </div>

              <div className="bg-[#0B0F18] p-5 rounded-xl border border-[#1C2538]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                  <h4 className="font-bold text-white text-sm">Akeneo &amp; Pimcore PIM</h4>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Automated extraction and normalization of 100,000+ SKU attribute sets, digital assets, locale translations, and safety datasheets.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#60A5FA]">GraphQL API</span>
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#34D399]">Bulk Asset Sync</span>
                </div>
              </div>

              <div className="bg-[#0B0F18] p-5 rounded-xl border border-[#1C2538]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                  <h4 className="font-bold text-white text-sm">Manhattan &amp; Deposco WMS</h4>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Sub-minute inventory synchronization across regional fulfillment centers, lot tracking, backorder reservations, and split shipments.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#60A5FA]">Event Webhooks</span>
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#34D399]">Real-Time ATP</span>
                </div>
              </div>

              <div className="bg-[#0B0F18] p-5 rounded-xl border border-[#1C2538]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#EC4899]" />
                  <h4 className="font-bold text-white text-sm">Salesforce Service &amp; CDP</h4>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Bi-directional customer 360 data sync: lifetime spend, loyalty tiers, open support cases, and automated marketing event triggers.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#60A5FA]">REST API</span>
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#34D399]">EventBridge</span>
                </div>
              </div>

              <div className="bg-[#0B0F18] p-5 rounded-xl border border-[#1C2538]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                  <h4 className="font-bold text-white text-sm">Avalara &amp; TaxJar Global</h4>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Real-time address validation, line-item tax calculation across 12,000+ jurisdictions, and automated general ledger tax filing.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#60A5FA]">AvaTax REST</span>
                  <span className="font-fj-mono text-[10px] bg-[#161D2C] px-2 py-0.5 rounded text-[#34D399]">GL Tax Line Sync</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 4: ZERO-DOWNTIME CUTOVER ── */}
        {activeTab === 'cutover' && (
          <div className="bg-[#101522]/90 border border-[#242F47] rounded-2xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl animate-fadeIn">
            <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-white mb-2">
              The 5-Stage Zero-Downtime Migration Protocol
            </h3>
            <p className="text-sm text-[#94A3B8] mb-6 max-w-2xl">
              How FactoryJet executes seamless enterprise cutovers from legacy monoliths to modern Shopify Plus architecture:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0B0F18] border border-[#1C2538] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-white text-sm">Comprehensive Customization &amp; Cartridge Inventory</h4>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Every custom cartridge, ISML template, promotion stacking rule, and scheduled background job is cataloged into a formal specification before code is written.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0F18] border border-[#1C2538] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-white text-sm">Historical Data &amp; Order Replication</h4>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Full extraction of 5+ years of order history, customer accounts, and SKU variants with automated validation scripts verifying 100% record parity.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0F18] border border-[#1C2538] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-white text-sm">1-to-1 301 URL Redirect Mapping</h4>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Every single indexed legacy URL is mapped with single-hop 301 redirects, preserving search engine crawl equity and Google ranking authority.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0F18] border border-[#1C2538] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F05A28] font-fj-mono text-xs font-bold text-white">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-white text-sm">Integration Acceptance on Real Production Orders</h4>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Simulated high-concurrency order bursts and end-to-end ERP reconciliation tested in staging with real warehouse picks before DNS switch.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0F18] border border-[#1C2538] flex items-start gap-4">
                <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#10B981] font-fj-mono text-xs font-bold text-white">
                  5
                </span>
                <div>
                  <h4 className="font-bold text-white text-sm">Zero-Downtime Blue/Green DNS Cutover</h4>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    DNS flip executed with zero downtime, instant rollback safety nets, and real-time telemetry monitoring order settlement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── ENTERPRISE ASSURANCE METRICS (BENTO) ── */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-[#0E131E]/90 border border-[#20293D] p-5 rounded-2xl backdrop-blur-lg hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-white">99.99%</p>
            <p className="text-xs text-[#94A3B8] mt-1 font-medium">Uptime Guarantee SLA</p>
          </div>
          <div className="bg-[#0E131E]/90 border border-[#20293D] p-5 rounded-2xl backdrop-blur-lg hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#F05A28]">0 Sec</p>
            <p className="text-xs text-[#94A3B8] mt-1 font-medium">Cutover Downtime</p>
          </div>
          <div className="bg-[#0E131E]/90 border border-[#20293D] p-5 rounded-2xl backdrop-blur-lg hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-white">100%</p>
            <p className="text-xs text-[#94A3B8] mt-1 font-medium">Preserved 301 URL Equity</p>
          </div>
          <div className="bg-[#0E131E]/90 border border-[#20293D] p-5 rounded-2xl backdrop-blur-lg hover:border-[#F05A28]/40 transition-colors">
            <p className="font-fj-mono text-2xl sm:text-3xl font-extrabold text-[#34D399]">SOC2 &amp; PCI</p>
            <p className="text-xs text-[#94A3B8] mt-1 font-medium">Level 1 Compliant Architecture</p>
          </div>
        </div>

        {/* ── FOUNDER DISCOVERY & SCOPING ACTION CARD ── */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#182133] via-[#121826] to-[#0A0E17] border-2 border-[#2A3752] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#F05A28]/10 blur-[80px] pointer-events-none"
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F05A28]/10 border border-[#F05A28]/30">
                <span className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#F05A28]">
                  Direct Founder Scoping
                </span>
              </div>
              
              <h3 className="font-fj-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Migrating from {legacySource} to {targetStack}?
              </h3>
              
              <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
                Direct 30-minute peer-to-peer technical discovery with founder Bhavesh Barot. We review your custom cartridges, ERP synchronization requirements, and deliver a fixed-scope milestone roadmap before any commitment.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center sm:items-end gap-3">
              <ModalCTAButton label={ctaLabel} region={region} btnVariant="primary-dark" />
              <span className="text-xs text-[#64748B] font-fj-mono text-center sm:text-right">
                ✓ Zero junior sales gatekeepers · 100% engineer-led
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
