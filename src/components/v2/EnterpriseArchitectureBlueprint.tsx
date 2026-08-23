import React from 'react';
import Link from 'next/link';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import type { ModalRegion } from '@/context/ContactModalContext';

export interface EnterpriseArchitectureBlueprintProps {
  /** Section badge/label, defaults to '// ENTERPRISE REFERENCE ARCHITECTURE' */
  badge?: string;
  /** Section headline, e.g. 'Production-Grade Architecture for $10M–$100M+ Scale' */
  title?: string;
  /** High-level executive description */
  subtitle?: string;
  /** Source platform name being migrated/modernized, e.g. 'SFCC', 'Magento', 'NetSuite' */
  legacySource?: string;
  /** Target modern stack, e.g. 'Shopify Plus + Next.js + AI Agents' */
  targetStack?: string;
  /** Optional custom CTA label */
  ctaLabel?: string;
  /** Region for modal tracking */
  region?: ModalRegion;
}

export default function EnterpriseArchitectureBlueprint({
  badge = '// ENTERPRISE REFERENCE ARCHITECTURE',
  title = 'Production-Grade Architecture for $10M–$100M+ Enterprise Scale',
  subtitle = 'How tier-1 systems integrators structure zero-downtime commerce, bi-directional ERP pipelines, and sub-150ms event-driven data sync.',
  legacySource = 'Legacy Monolith / ERP',
  targetStack = 'Shopify Plus Enterprise + Real-Time Event Bus',
  ctaLabel = 'Schedule Architecture Scoping Call',
  region = 'us',
}: EnterpriseArchitectureBlueprintProps) {
  return (
    <section className="bg-[#0B0C10] text-[#E5E7EB] py-16 md:py-24 border-y border-[#1F2430] relative overflow-hidden font-fj-body">
      {/* Subtle grid background glow */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F05A28 1px, transparent 1px), radial-gradient(#202637 1px, #0B0C10 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="font-fj-mono text-xs font-bold uppercase tracking-widest text-[#F05A28] mb-3">
            {badge}
          </p>
          <h2 className="font-fj-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Architecture Stack Layers */}
        <div className="space-y-4">
          
          {/* Layer 1: Experience & Channel Surface */}
          <div className="rounded-xl bg-[#141822] border border-[#262D3D] p-5 sm:p-6 transition-all hover:border-[#384259]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#202736]">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-[#F05A28]/10 font-fj-mono text-xs font-bold text-[#F05A28] border border-[#F05A28]/30">
                  L1
                </span>
                <h3 className="font-fj-display text-lg font-bold text-white">
                  Unified Experience & Omni-Channel Layer
                </h3>
              </div>
              <span className="font-fj-mono text-xs text-[#9CA3AF] bg-[#0E1118] px-3 py-1 rounded border border-[#202736]">
                Latency Budget: &lt; 80ms TTFB
              </span>
            </div>
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">Global Web Storefront</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">Shopify Plus Liquid / Next.js Headless</p>
              </div>
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">B2B Wholesale Portal</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">Custom Catalogs, Net 30/60 & Draft Orders</p>
              </div>
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">POS & Retail Stores</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">Shopify POS Pro unified customer profile</p>
              </div>
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">AI Search & GEO Endpoints</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">JSON-LD Graph, MCP & Semantic Search</p>
              </div>
            </div>
          </div>

          {/* Bi-directional Flow Indicator */}
          <div className="flex justify-center items-center gap-2 py-1 text-xs text-[#F05A28] font-fj-mono font-medium">
            <span>&uarr;&darr;</span>
            <span>GraphQL Federation / Idempotent Webhook Events</span>
            <span>&uarr;&darr;</span>
          </div>

          {/* Layer 2: Integration & Event Orchestration Bus */}
          <div className="rounded-xl bg-[#141822] border border-[#262D3D] p-5 sm:p-6 transition-all hover:border-[#384259]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#202736]">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-[#3B82F6]/10 font-fj-mono text-xs font-bold text-[#60A5FA] border border-[#3B82F6]/30">
                  L2
                </span>
                <h3 className="font-fj-display text-lg font-bold text-white">
                  Real-Time Event Orchestration & Middleware Bus
                </h3>
              </div>
              <span className="font-fj-mono text-xs text-[#9CA3AF] bg-[#0E1118] px-3 py-1 rounded border border-[#202736]">
                SLA: 99.99% Uptime · Zero Data Loss
              </span>
            </div>
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">Event Ingestion & Queuing</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">Cloudflare Queues / AWS SQS / Kafka dead-letter queues</p>
              </div>
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">Data Transformation Pipeline</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">Automated payload schema validation & delta sync</p>
              </div>
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">Idempotency & Rate Limiting</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">GraphQL cost budget enforcement & retry logic</p>
              </div>
            </div>
          </div>

          {/* Bi-directional Flow Indicator */}
          <div className="flex justify-center items-center gap-2 py-1 text-xs text-[#3B82F6] font-fj-mono font-medium">
            <span>&uarr;&darr;</span>
            <span>REST / SOAP / OData / SFTP Connectors</span>
            <span>&uarr;&darr;</span>
          </div>

          {/* Layer 3: Enterprise Core Records & ERP System */}
          <div className="rounded-xl bg-[#141822] border border-[#262D3D] p-5 sm:p-6 transition-all hover:border-[#384259]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#202736]">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-[#10B981]/10 font-fj-mono text-xs font-bold text-[#34D399] border border-[#10B981]/30">
                  L3
                </span>
                <h3 className="font-fj-display text-lg font-bold text-white">
                  Enterprise System of Record & Infrastructure
                </h3>
              </div>
              <span className="font-fj-mono text-xs text-[#9CA3AF] bg-[#0E1118] px-3 py-1 rounded border border-[#202736]">
                Single Source of Truth
              </span>
            </div>
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">ERP & Financials</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">NetSuite / SAP S/4HANA / MS Dynamics 365</p>
              </div>
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">PIM & Master Catalog</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">Akeneo / Pimcore / Salsify 100k+ SKU attributes</p>
              </div>
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">OMS, 3PL & Warehouse</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">Manhattan / ShipBob / Deposco real-time inventory</p>
              </div>
              <div className="bg-[#0E1118] p-3 rounded-lg border border-[#1E2433]">
                <p className="text-xs font-semibold text-white">CRM & Marketing CDP</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">Salesforce CRM / HubSpot / Klaviyo customer 360</p>
              </div>
            </div>
          </div>

        </div>

        {/* Enterprise Governance & Assurance Badges */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-[#10141D] border border-[#1F2533] p-4 rounded-xl">
            <p className="font-fj-mono text-xl font-bold text-white">99.99%</p>
            <p className="text-xs text-[#9CA3AF] mt-1">High-Availability Uptime SLA</p>
          </div>
          <div className="bg-[#10141D] border border-[#1F2533] p-4 rounded-xl">
            <p className="font-fj-mono text-xl font-bold text-[#F05A28]">0 Sec</p>
            <p className="text-xs text-[#9CA3AF] mt-1">Blue/Green Cutover Downtime</p>
          </div>
          <div className="bg-[#10141D] border border-[#1F2533] p-4 rounded-xl">
            <p className="font-fj-mono text-xl font-bold text-white">100%</p>
            <p className="text-xs text-[#9CA3AF] mt-1">Preserved 301 URL & SEO Equity</p>
          </div>
          <div className="bg-[#10141D] border border-[#1F2533] p-4 rounded-xl">
            <p className="font-fj-mono text-xl font-bold text-[#34D399]">SOC2 & PCI</p>
            <p className="text-xs text-[#9CA3AF] mt-1">Level 1 Compliant Architecture</p>
          </div>
        </div>

        {/* Founder Discovery Scoping Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#181D2A] to-[#121620] border border-[#2B3346] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-wider text-[#F05A28]">
              Executive Scoping & Feasibility Review
            </p>
            <h3 className="font-fj-display text-xl sm:text-2xl font-bold text-white">
              Migrating from {legacySource} to {targetStack}?
            </h3>
            <p className="text-sm text-[#9CA3AF] max-w-xl">
              Direct 30-minute peer-to-peer technical discovery with founder Bhavesh Barot. We map custom integrations, ERP sync flows, and realistic migration milestones before any commitment.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center sm:items-end gap-2">
            <ModalCTAButton label={ctaLabel} region={region} btnVariant="primary-dark" />
            <span className="text-[12px] text-[#6B7280] font-fj-mono">
              Zero junior sales gatekeepers · 100% engineer-led
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
