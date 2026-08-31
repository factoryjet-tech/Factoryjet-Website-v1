import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Database, Server, RefreshCw, GitFork, Activity } from 'lucide-react';

interface ZeroDowntimeMigrationMatrixProps {
  className?: string;
  sourceName?: string;
  targetName?: string;
}

const MIGRATION_PHASES = [
  {
    phase: 'Phase 1',
    title: 'Discovery, Entity Audit & Schema Mapping',
    duration: 'Week 1',
    icon: Database,
    deliverables: [
      'Extract full database schema: Products, matrix variants, customer entities, order history, and B2B contract price sheets.',
      'Audit custom third-party extensions and map 1-to-1 replacements to native platform features and modern APIs.',
      'Inventory ERP API endpoints (NetSuite, SAP, Dynamics, Acumatica) and define JSON field mapping matrices.',
    ],
    riskMitigation: 'Identifies non-standard data types and orphaned database records before writing migration code.',
  },
  {
    phase: 'Phase 2',
    title: 'Staging Infrastructure & Delta Pipelines',
    duration: 'Weeks 2 - 3',
    icon: Server,
    deliverables: [
      'Provision isolated staging environment on target architecture with production-grade security.',
      'Build bi-directional REST / GraphQL synchronization middleware for orders, inventory, and B2B price lists.',
      'Rebuild frontend storefront components and checkout extensibility rules using modern WebAssembly functions.',
    ],
    riskMitigation: 'Staging environment operates under realistic load without touching live production traffic.',
  },
  {
    phase: 'Phase 3',
    title: '1-to-1 URL Inventory & 301 Redirect Architecture',
    duration: 'Week 4',
    icon: GitFork,
    deliverables: [
      'Execute deep crawl of 100% of historical URLs, indexing status, canonical tags, and structured schema markup.',
      'Generate single-hop 301 redirect map directly from legacy URL paths to new canonical target URLs.',
      'Ensure complete schema parity for Product, Review, BreadcrumbList, and Organization entities.',
    ],
    riskMitigation: 'Prevents search crawler budget waste, eliminates redirect chains, and protects organic revenue.',
  },
  {
    phase: 'Phase 4',
    title: 'Multi-Pass Historical Data Ingestion & Delta Sync',
    duration: 'Weeks 5 - 6',
    icon: RefreshCw,
    deliverables: [
      'Execute Pass 1 bulk historical data ingestion (SKU master, collections, customer records, archived orders).',
      'Run automated data integrity validation scripts cross-referencing SKU counts, order totals, and metafields.',
      'Configure automated delta ingestion catching new customers and orders placed on the legacy store continuously.',
    ],
    riskMitigation: 'Ensures zero data drift between legacy production and the staging environment.',
  },
  {
    phase: 'Phase 5',
    title: 'End-to-End UAT & Gateway Simulation',
    duration: 'Week 7',
    icon: Activity,
    deliverables: [
      'Conduct rigorous end-to-end purchasing test cycles with marketing, operations, and accounting teams.',
      'Simulate credit card authorizations, 1-click Shop Pay checkouts, tax exemptions, and Net 30 terms.',
      'Verify real-time warehouse inventory locks and automated ERP sales order ingestion.',
    ],
    riskMitigation: 'Verifies financial reconciliation and order fulfillment before customer traffic hits the new store.',
  },
  {
    phase: 'Phase 6',
    title: 'Zero-Downtime DNS Cutover & Real-Time Monitoring',
    duration: 'Week 8',
    icon: Zap,
    deliverables: [
      'Lower DNS TTL to 300 seconds 48 hours prior to launch for instantaneous global DNS propagation.',
      'Run final real-time delta sync catching orders placed in the last 15 minutes of the legacy store.',
      'Execute DNS switchover, monitor real-time 404 server logs, and ping Google Indexing API and IndexNow.',
    ],
    riskMitigation: 'Customers experience uninterrupted browsing and purchasing during the exact second of cutover.',
  },
];

export default function ZeroDowntimeMigrationMatrix({
  className = '',
  sourceName = 'Legacy Platform',
  targetName = 'Shopify Plus',
}: ZeroDowntimeMigrationMatrixProps) {
  return (
    <div
      className={`zero-downtime-matrix ${className}`}
      style={{
        border: '1px solid var(--pp-line, #E5E0DA)',
        borderRadius: '24px',
        padding: 'clamp(24px, 4vw, 36px)',
        background: '#FFFFFF',
        boxShadow: '0 16px 40px -20px rgba(20, 17, 15, 0.1)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto 32px', textAlign: 'center' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--pp-mono, monospace)',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#B23E13',
            background: 'rgba(240, 90, 40, 0.1)',
            padding: '4px 12px',
            borderRadius: '999px',
            marginBottom: '12px',
          }}
        >
          <ShieldCheck size={12} />
          Engineering Protocol
        </span>
        <h3
          style={{
            fontFamily: 'var(--pp-display, var(--pp-disp, sans-serif))',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 800,
            color: 'var(--pp-ink, #14110F)',
            margin: '0 0 12px 0',
            letterSpacing: '-0.025em',
          }}
        >
          6-Stage Zero-Downtime Data Migration Framework
        </h3>
        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'var(--pp-body, #292524)',
            margin: 0,
          }}
        >
          How FactoryJet migrates enterprise catalogs, customer archives, order history, and ERP integrations from {sourceName} to {targetName} with zero downtime and total SEO preservation.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '16px' }}>
        {MIGRATION_PHASES.map((phase, idx) => {
          const IconComp = phase.icon;
          return (
            <div
              key={phase.phase}
              style={{
                border: '1px solid var(--pp-line, #E5E0DA)',
                borderRadius: '16px',
                padding: '20px 24px',
                background: idx % 2 === 0 ? '#FFFFFF' : '#FAFAF8',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                alignItems: 'start',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(240, 90, 40, 0.1)',
                      color: '#F05A28',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComp size={16} />
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--pp-mono, monospace)', fontSize: '11px', fontWeight: 700, color: '#B23E13', textTransform: 'uppercase' }}>
                      {phase.phase} · {phase.duration}
                    </span>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: 'var(--pp-ink, #14110F)' }}>
                      {phase.title}
                    </h4>
                  </div>
                </div>

                <div
                  style={{
                    background: '#F5F3EF',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    fontSize: '12.5px',
                    color: 'var(--pp-body, #292524)',
                    marginTop: '12px',
                  }}
                >
                  <strong style={{ color: 'var(--pp-ink, #14110F)' }}>Safety Gate: </strong>
                  {phase.riskMitigation}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--pp-mono, monospace)', fontSize: '11px', fontWeight: 700, color: 'var(--pp-ink, #14110F)', marginBottom: '8px' }}>
                  Key Engineering Milestones
                </div>
                <ul style={{ margin: 0, paddingLeft: '16px', display: 'grid', gap: '6px' }}>
                  {phase.deliverables.map((item, itemIdx) => (
                    <li key={itemIdx} style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--pp-body, #292524)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: '24px',
          padding: '16px 20px',
          background: 'linear-gradient(135deg, #14110F 0%, #201B17 100%)',
          borderRadius: '14px',
          color: '#FFFFFF',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldCheck size={20} color="#FF7A45" />
          <span style={{ fontSize: '13.5px', fontWeight: 600 }}>
            Every migration is backed by our zero-downtime execution SLA and 100% single-hop 301 redirect guarantee.
          </span>
        </div>
        <span style={{ fontFamily: 'var(--pp-mono, monospace)', fontSize: '11.5px', color: '#FF7A45' }}>
          FactoryJet Replatforming Benchmark
        </span>
      </div>
    </div>
  );
}
