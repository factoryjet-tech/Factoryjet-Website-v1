'use client';

import React, { useState } from 'react';
import {
  Layers,
  Clock,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  TrendingUp,
  Server,
  Zap,
  FileCheck,
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { submitLead } from '@/utils/submitLead';

interface ReplatformingScopeEstimatorProps {
  className?: string;
  defaultSource?: 'netsuite' | 'bigcommerce' | 'magento' | 'salesforce' | 'woocommerce' | 'custom';
  defaultTarget?: 'shopify' | 'shopify-plus' | 'bigcommerce-b2b' | 'headless';
  source?: string;
  sourcePage?: string;
}

const SOURCE_PLATFORMS = [
  { id: 'netsuite', label: 'NetSuite SuiteCommerce', baseWeeks: 5, complexityWeight: 1.25, devopsSavings: 45000 },
  { id: 'bigcommerce', label: 'BigCommerce (Standard / B2B)', baseWeeks: 4, complexityWeight: 1.0, devopsSavings: 18000 },
  { id: 'magento', label: 'Magento 1 / 2 (Adobe Commerce)', baseWeeks: 6, complexityWeight: 1.35, devopsSavings: 55000 },
  { id: 'salesforce', label: 'Salesforce Commerce Cloud (SFCC)', baseWeeks: 8, complexityWeight: 1.5, devopsSavings: 85000 },
  { id: 'woocommerce', label: 'WooCommerce / WordPress', baseWeeks: 3, complexityWeight: 0.85, devopsSavings: 15000 },
  { id: 'custom', label: 'Custom PHP / Legacy Monolith', baseWeeks: 7, complexityWeight: 1.4, devopsSavings: 60000 },
];

const TARGET_PLATFORMS = [
  { id: 'shopify', label: 'Shopify (Advanced / OS 2.0)' },
  { id: 'shopify-plus', label: 'Shopify Plus (Enterprise & B2B)' },
  { id: 'bigcommerce-b2b', label: 'BigCommerce B2B Edition' },
  { id: 'headless', label: 'Composable Headless (Next.js)' },
];

const SKU_TIERS = [
  { id: 'small', label: 'Under 2,500 SKUs', weekModifier: 0, batchCount: 2 },
  { id: 'medium', label: '2,500 to 15,000 SKUs', weekModifier: 0.5, batchCount: 4 },
  { id: 'large', label: '15,000 to 75,000 SKUs', weekModifier: 1.5, batchCount: 8 },
  { id: 'enterprise', label: '75,000 to 250,000+ SKUs', weekModifier: 2.5, batchCount: 16 },
];

const ORDER_VOLUMES = [
  { id: 'small', label: 'Under 10,000 orders', weekModifier: 0 },
  { id: 'medium', label: '10k to 100k orders', weekModifier: 0.5 },
  { id: 'large', label: '100k to 500k orders', weekModifier: 1.0 },
  { id: 'enterprise', label: '500k+ historical orders', weekModifier: 1.5 },
];

const ERP_DEPTHS = [
  { id: 'standard', label: 'Standard REST / Webhook Sync', weekModifier: 0, risk: 'Low' },
  { id: 'middleware', label: 'Middleware (Celigo / Boomi / Workato)', weekModifier: 1.0, risk: 'Moderate' },
  { id: 'custom-b2b', label: 'Bi-Directional Delta & B2B Price Lists', weekModifier: 1.5, risk: 'Moderate' },
  { id: 'cpq-punchout', label: 'Full CPQ, PunchOut & Multi-Warehouse WMS', weekModifier: 2.5, risk: 'High' },
];

export default function ReplatformingScopeEstimator({
  className = '',
  defaultSource = 'magento',
  defaultTarget = 'shopify-plus',
  source,
  sourcePage = 'replatforming_scope_estimator',
}: ReplatformingScopeEstimatorProps) {
  const activeSource = source || sourcePage;
  const { openModal } = useContactModal();

  const [sourcePlatform, setSourcePlatform] = useState<string>(defaultSource);
  const [targetPlatform, setTargetPlatform] = useState<string>(defaultTarget);
  const [skuTier, setSkuTier] = useState<string>('medium');
  const [orderVolume, setOrderVolume] = useState<string>('medium');
  const [erpDepth, setErpDepth] = useState<string>('middleware');
  const [seoUrls, setSeoUrls] = useState<string>('5k');

  // Lead form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const sourceObj = SOURCE_PLATFORMS.find((s) => s.id === sourcePlatform) || SOURCE_PLATFORMS[0];
  const skuObj = SKU_TIERS.find((s) => s.id === skuTier) || SKU_TIERS[0];
  const orderObj = ORDER_VOLUMES.find((o) => o.id === orderVolume) || ORDER_VOLUMES[0];
  const erpObj = ERP_DEPTHS.find((e) => e.id === erpDepth) || ERP_DEPTHS[0];

  // Dynamic Scope Timeline
  const rawWeeks = (sourceObj.baseWeeks + skuObj.weekModifier + orderObj.weekModifier + erpObj.weekModifier) * (targetPlatform === 'headless' ? 1.2 : 1.0);
  const minWeeks = Math.max(3, Math.floor(rawWeeks));
  const maxWeeks = Math.ceil(rawWeeks + 2);

  // Projected Annual Maintenance Savings
  const projectedDevopsSavings = Math.round(sourceObj.devopsSavings * (skuTier === 'enterprise' ? 1.3 : 1.0));

  // Risk Rating Calculation
  let overallRisk = erpObj.risk;
  if (skuTier === 'enterprise' && erpObj.risk === 'High') overallRisk = 'Enterprise Complex';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid work email.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer) {
        (window as unknown as { dataLayer: Array<Record<string, unknown>> }).dataLayer.push({
          event: 'replatforming_estimator_submit',
          sourcePage,
          sourcePlatform,
          targetPlatform,
          minWeeks,
          maxWeeks,
          overallRisk,
        });
      }

      await submitLead({
        name: fullName || 'Replatforming Estimator Lead',
        email,
        message: `Replatforming Scope Estimator Request:\nStore URL: ${storeUrl || 'Not provided'}\nSource: ${sourceObj.label} -> Target: ${targetPlatform}\nSKU Count: ${skuObj.label}\nHistorical Orders: ${orderObj.label}\nERP Integration Depth: ${erpObj.label}\nEstimated Timeline: ${minWeeks} to ${maxWeeks} weeks\nProjected Annual DevOps Savings: $${projectedDevopsSavings.toLocaleString()}/yr`,
        source: activeSource,
      });

      setIsSubmitted(true);
    } catch {
      setErrorMsg('Failed to send details. Please contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`replatforming-scope-estimator ${className}`}
      style={{
        border: '1px solid var(--pp-line, #E5E0DA)',
        borderRadius: '24px',
        background: '#FFFFFF',
        boxShadow: '0 20px 48px -24px rgba(20, 17, 15, 0.12)',
        overflow: 'hidden',
      }}
    >
      {/* Header Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #14110F 0%, #201B17 100%)',
          color: '#FFFFFF',
          padding: 'clamp(24px, 4vw, 36px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
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
              color: '#FF7A45',
              background: 'rgba(240, 90, 40, 0.18)',
              padding: '4px 10px',
              borderRadius: '999px',
            }}
          >
            <Layers size={12} />
            Migration Scope Engine
          </span>
          <span style={{ fontFamily: 'var(--pp-mono, monospace)', fontSize: '11px', color: '#A8A29E' }}>
            Zero-Downtime Replatforming Blueprint
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--pp-display, var(--pp-disp, sans-serif))',
            fontSize: 'clamp(22px, 3.2vw, 34px)',
            fontWeight: 800,
            margin: '0 0 10px 0',
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
          }}
        >
          Enterprise Migration Scope &amp; Timeline Estimator
        </h3>
        <p style={{ margin: 0, fontSize: '15px', color: '#D6D3D1', maxWidth: '640px', lineHeight: 1.55 }}>
          Select your current commerce platform and technical parameters to calculate your estimated sprint timeline, data batch requirements, and annual infrastructure cost reduction.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(24px, 4vw, 40px)',
          padding: 'clamp(24px, 4vw, 36px)',
        }}
      >
        {/* Left Column: Parameter Selectors */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Source Platform */}
          <div>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)', marginBottom: '8px' }}>
              Current Source Platform
            </label>
            <select
              value={sourcePlatform}
              onChange={(e) => setSourcePlatform(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--pp-line, #E5E0DA)',
                background: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--pp-ink, #14110F)',
                cursor: 'pointer',
              }}
            >
              {SOURCE_PLATFORMS.map((plat) => (
                <option key={plat.id} value={plat.id}>
                  {plat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Target Architecture */}
          <div>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)', marginBottom: '8px' }}>
              Target Platform Architecture
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {TARGET_PLATFORMS.map((target) => {
                const isSelected = targetPlatform === target.id;
                return (
                  <button
                    key={target.id}
                    type="button"
                    onClick={() => setTargetPlatform(target.id)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: isSelected ? '2px solid #F05A28' : '1px solid var(--pp-line, #E5E0DA)',
                      background: isSelected ? 'rgba(240, 90, 40, 0.06)' : '#FFFFFF',
                      fontSize: '12.5px',
                      fontWeight: isSelected ? 700 : 500,
                      color: 'var(--pp-ink, #14110F)',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    {target.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Catalog SKU Count */}
          <div>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)', marginBottom: '8px' }}>
              Catalog SKU &amp; Variant Volume
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {SKU_TIERS.map((tier) => {
                const isSelected = skuTier === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSkuTier(tier.id)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: isSelected ? '2px solid #F05A28' : '1px solid var(--pp-line, #E5E0DA)',
                      background: isSelected ? 'rgba(240, 90, 40, 0.06)' : '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: isSelected ? 700 : 500,
                      color: 'var(--pp-ink, #14110F)',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    {tier.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Customer & Historical Order Volume */}
          <div>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)', marginBottom: '8px' }}>
              Customer Accounts &amp; Order Archive
            </label>
            <select
              value={orderVolume}
              onChange={(e) => setOrderVolume(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 13px',
                borderRadius: '10px',
                border: '1px solid var(--pp-line, #E5E0DA)',
                background: '#FFFFFF',
                fontSize: '13.5px',
                color: 'var(--pp-ink, #14110F)',
                cursor: 'pointer',
              }}
            >
              {ORDER_VOLUMES.map((vol) => (
                <option key={vol.id} value={vol.id}>
                  {vol.label}
                </option>
              ))}
            </select>
          </div>

          {/* ERP & Middleware Depth */}
          <div>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)', marginBottom: '8px' }}>
              ERP &amp; Middleware Integration Depth
            </label>
            <select
              value={erpDepth}
              onChange={(e) => setErpDepth(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 13px',
                borderRadius: '10px',
                border: '1px solid var(--pp-line, #E5E0DA)',
                background: '#FFFFFF',
                fontSize: '13.5px',
                color: 'var(--pp-ink, #14110F)',
                cursor: 'pointer',
              }}
            >
              {ERP_DEPTHS.map((erp) => (
                <option key={erp.id} value={erp.id}>
                  {erp.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Column: Projection Dashboard & Lead Action */}
        <div
          style={{
            background: '#FBF9F7',
            border: '1px solid var(--pp-line, #E5E0DA)',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--pp-mono, monospace)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#B23E13', marginBottom: '4px' }}>
              Migration Projections
            </div>
            <h4
              style={{
                fontFamily: 'var(--pp-display, var(--pp-disp, sans-serif))',
                fontSize: '24px',
                fontWeight: 800,
                color: 'var(--pp-ink, #14110F)',
                margin: '0 0 18px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Estimated Sprint Architecture
            </h4>

            {/* Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '18px' }}>
              <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                  <Clock size={13} color="#F05A28" />
                  <span>Timeline</span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                  {minWeeks} - {maxWeeks} Weeks
                </div>
                <div style={{ fontSize: '11px', color: '#16A34A', marginTop: '2px', fontWeight: 600 }}>
                  Fixed sprint milestones
                </div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                  <ShieldCheck size={13} color="#F05A28" />
                  <span>Risk Profile</span>
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                  {overallRisk}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '2px' }}>
                  Zero-downtime cutover
                </div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                  <FileCheck size={13} color="#F05A28" />
                  <span>Data Batches</span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                  {skuObj.batchCount} Batches
                </div>
                <div style={{ fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '2px' }}>
                  Multi-pass delta sync
                </div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                  <DollarSign size={13} color="#F05A28" />
                  <span>Annual Savings</span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                  ${projectedDevopsSavings.toLocaleString()}/yr
                </div>
                <div style={{ fontSize: '11px', color: '#16A34A', marginTop: '2px', fontWeight: 600 }}>
                  Eliminated DevOps retainers
                </div>
              </div>
            </div>

            {/* Protocol Guarantee Box */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '14px 16px',
                border: '1px solid var(--pp-line, #E5E0DA)',
                marginBottom: '18px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--pp-ink, #14110F)', marginBottom: '6px' }}>
                <Zap size={14} color="#F05A28" />
                FactoryJet Migration Guarantees
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', display: 'grid', gap: '4px', fontSize: '12px', color: 'var(--pp-body, #292524)' }}>
                <li>100% 1-to-1 single-hop 301 URL redirect mapping (Zero SEO equity loss).</li>
                <li>Zero-downtime DNS cutover with staging delta synchronization.</li>
                <li>Fixed milestone proposal with no hourly billing surprises.</li>
              </ul>
            </div>
          </div>

          {/* Lead Capture or Consultation Trigger */}
          {isSubmitted ? (
            <div
              style={{
                background: '#ECFDF5',
                border: '1px solid #A7F3D0',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              <CheckCircle2 size={24} color="#059669" style={{ margin: '0 auto 6px' }} />
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#065F46' }}>
                Replatforming Scope Blueprint Sent
              </div>
              <p style={{ fontSize: '12.5px', color: '#047857', margin: '4px 0 12px 0' }}>
                We will email your custom migration roadmap and ERP integration plan shortly.
              </p>
              <button
                type="button"
                onClick={() => openModal('us')}
                style={{
                  background: '#B23E13',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Schedule Technical Scoping Call
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--pp-line, #E5E0DA)',
                    fontSize: '13px',
                    background: '#FFFFFF',
                  }}
                />
                <input
                  type="text"
                  placeholder="Store URL (e.g. brand.com)"
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(e.target.value)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--pp-line, #E5E0DA)',
                    fontSize: '13px',
                    background: '#FFFFFF',
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  required
                  placeholder="Work Email (e.g. name@company.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--pp-line, #E5E0DA)',
                    fontSize: '13px',
                    background: '#FFFFFF',
                  }}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: '#B23E13',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Get Migration Plan'}
                </button>
              </div>
              {errorMsg && (
                <div style={{ color: '#DC2626', fontSize: '12px' }}>{errorMsg}</div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
