import React from 'react';
import { Check, X, ShieldCheck, Clock, Zap, CreditCard } from 'lucide-react';

interface Net30PaymentComparisonProps {
  className?: string;
}

const COMPARISON_ROWS = [
  {
    feature: 'Credit Verification Speed',
    manual: '24 to 72 hours (Email/PDF audit)',
    shopifyPlus: 'Sub-150ms via Shopify Functions',
    bigcommerce: 'Real-time via B2B buyer rules',
    legacy: '3 to 10 seconds (Direct SQL lock)',
    winner: 'Shopify Plus & BigCommerce',
  },
  {
    feature: 'Order Entry Labor per Order',
    manual: '15 to 25 mins CSR re-keying',
    shopifyPlus: '0 mins (Buyer self-serve)',
    bigcommerce: '0 mins (Buyer self-serve)',
    legacy: '5 to 10 mins (Session errors)',
    winner: 'Shopify Plus & BigCommerce',
  },
  {
    feature: 'Average Days Sales Outstanding (DSO)',
    manual: '48 to 60 days',
    shopifyPlus: '28 to 34 days (Automated alerts)',
    bigcommerce: '30 to 36 days (Payment portal)',
    legacy: '42 to 52 days',
    winner: 'Shopify Plus (28-34 days)',
  },
  {
    feature: 'Cart-Level MOQ & Tier Rules',
    manual: 'Manual correction on invoice',
    shopifyPlus: 'Native WASM Functions enforcement',
    bigcommerce: 'Native customer group price lists',
    legacy: 'Hardcoded custom PHP plugins',
    winner: 'Shopify Plus Functions',
  },
  {
    feature: 'Bi-Directional ERP Sync Latency',
    manual: 'End-of-day batch entry',
    shopifyPlus: 'Sub-200ms delta webhooks',
    bigcommerce: 'Real-time REST / GraphQL webhooks',
    legacy: 'Nightly CSV database cron',
    winner: 'Shopify Plus & BigCommerce',
  },
  {
    feature: 'Annual Maintenance & License Overhead',
    manual: '$45,000+ in CSR labor costs',
    shopifyPlus: 'Included in Shopify Plus tier',
    bigcommerce: 'Included in B2B Edition tier',
    legacy: '$30,000 to $80,000+ in hosting/DevOps',
    winner: 'Shopify Plus Native',
  },
];

export default function Net30PaymentComparison({ className = '' }: Net30PaymentComparisonProps) {
  return (
    <div
      className={`net30-comparison-section ${className}`}
      style={{
        border: '1px solid var(--pp-line, #E5E0DA)',
        borderRadius: '20px',
        padding: 'clamp(24px, 4vw, 36px)',
        background: '#FFFFFF',
        boxShadow: '0 16px 40px -20px rgba(20, 17, 15, 0.1)',
      }}
    >
      <div style={{ maxWidth: '780px', margin: '0 auto 28px', textAlign: 'center' }}>
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
          <CreditCard size={12} />
          B2B Trade Credit Architecture
        </span>
        <h3
          style={{
            fontFamily: 'var(--pp-display, var(--pp-disp, sans-serif))',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 800,
            color: 'var(--pp-ink, #14110F)',
            margin: '0 0 10px 0',
            letterSpacing: '-0.025em',
          }}
        >
          Net-30 Payment Terms: Modern Portals vs. Manual Invoicing
        </h3>
        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'var(--pp-body, #292524)',
            margin: 0,
          }}
        >
          Compare how automated checkout payment terms accelerate cash collection, eliminate CSR data entry, and enforce credit ceilings in real time.
        </p>
      </div>

      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: 'inherit',
            fontSize: '13.5px',
            textAlign: 'left',
          }}
        >
          <thead>
            <tr style={{ background: '#14110F', color: '#FFFFFF' }}>
              <th style={{ padding: '14px 16px', borderRadius: '10px 0 0 0', fontWeight: 700, width: '22%' }}>Evaluation Factor</th>
              <th style={{ padding: '14px 16px', fontWeight: 700, width: '22%', color: '#D6D3D1' }}>Manual Invoicing (Phone/PDF)</th>
              <th style={{ padding: '14px 16px', fontWeight: 700, width: '28%', background: 'rgba(240, 90, 40, 0.25)', color: '#FF7A45', borderLeft: '1px solid rgba(240, 90, 40, 0.4)', borderRight: '1px solid rgba(240, 90, 40, 0.4)' }}>
                Shopify Plus Native B2B
              </th>
              <th style={{ padding: '14px 16px', fontWeight: 700, width: '28%', borderRadius: '0 10px 0 0', color: '#D6D3D1' }}>Legacy ERP Portals (SuiteCommerce/PHP)</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, idx) => (
              <tr
                key={row.feature}
                style={{
                  borderBottom: '1px solid var(--pp-line, #E5E0DA)',
                  background: idx % 2 === 0 ? '#FFFFFF' : '#FAFAF8',
                }}
              >
                <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--pp-ink, #14110F)' }}>
                  {row.feature}
                </td>
                <td style={{ padding: '14px 16px', color: '#78716C' }}>
                  {row.manual}
                </td>
                <td
                  style={{
                    padding: '14px 16px',
                    fontWeight: 600,
                    color: 'var(--pp-ink, #14110F)',
                    background: idx % 2 === 0 ? 'rgba(240, 90, 40, 0.04)' : 'rgba(240, 90, 40, 0.08)',
                    borderLeft: '1px solid rgba(240, 90, 40, 0.2)',
                    borderRight: '1px solid rgba(240, 90, 40, 0.2)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#16A34A', display: 'inline-flex' }}>
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <span>{row.shopifyPlus}</span>
                  </div>
                </td>
                <td style={{ padding: '14px 16px', color: '#78716C' }}>
                  {row.legacy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '14px 18px',
          background: '#FBF9F7',
          borderRadius: '12px',
          border: '1px solid var(--pp-line, #E5E0DA)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontFamily: 'var(--pp-mono, monospace)',
          fontSize: '11.5px',
          color: 'var(--pp-muted, #78716C)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={16} color="#F05A28" />
          <span>Real-time credit line enforcement stops overdue accounts from placing unbacked orders.</span>
        </div>
        <span style={{ fontWeight: 600, color: 'var(--pp-ink, #14110F)' }}>FactoryJet B2B Engineering Benchmark</span>
      </div>
    </div>
  );
}
