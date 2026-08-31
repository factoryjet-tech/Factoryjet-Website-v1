'use client';

import React, { useState, useId } from 'react';
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  Layers,
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { submitLead } from '@/utils/submitLead';

interface B2bWholesaleCalculatorProps {
  className?: string;
  source?: string;
  defaultRevenue?: number;
  defaultAov?: number;
  defaultAccounts?: number;
}

const ORDER_METHODS = [
  { id: 'manual', label: 'Email, PDF Invoices & Spreadsheets', laborHoursPerOrder: 0.35, errorRate: 0.045 },
  { id: 'phone', label: 'Field Reps & Phone Order Desk', laborHoursPerOrder: 0.45, errorRate: 0.035 },
  { id: 'legacy', label: 'Legacy Monolith / ERP Web Portal', laborHoursPerOrder: 0.15, errorRate: 0.02 },
];

export default function B2bWholesaleCalculator({
  className = '',
  source = 'b2b_wholesale_calculator',
  defaultRevenue = 3500000,
  defaultAov = 1800,
  defaultAccounts = 120,
}: B2bWholesaleCalculatorProps) {
  const { openModal } = useContactModal();

  const [annualRevenue, setAnnualRevenue] = useState<number>(defaultRevenue);
  const [aov, setAov] = useState<number>(defaultAov);
  const [activeAccounts, setActiveAccounts] = useState<number>(defaultAccounts);
  const [selectedMethod, setSelectedMethod] = useState<string>('manual');

  // Interactive toggle parameters
  const [enableMatrixOrdering, setEnableMatrixOrdering] = useState<boolean>(true);
  const [enableErpCreditSync, setEnableErpCreditSync] = useState<boolean>(true);
  const [enableCustomPriceLists, setEnableCustomPriceLists] = useState<boolean>(true);

  // Lead capture state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const revenueSliderId = useId();
  const aovSliderId = useId();
  const accountsSliderId = useId();

  const methodObj = ORDER_METHODS.find((m) => m.id === selectedMethod) || ORDER_METHODS[0];

  // Mathematical Calculations
  const totalAnnualOrders = Math.max(1, Math.round(annualRevenue / Math.max(100, aov)));
  const monthlyOrders = Math.round(totalAnnualOrders / 12);

  // 1. Labor Hours & CSR Cost Savings ($32/hr benchmark CSR + sales operations rate)
  const hourlyRate = 32;
  const hoursSavedPerYear = Math.round(totalAnnualOrders * methodObj.laborHoursPerOrder * (enableMatrixOrdering ? 0.9 : 0.75));
  const annualLaborSavings = Math.round(hoursSavedPerYear * hourlyRate);

  // 2. AOV & Reorder Frequency Lift (+12% to +18% based on custom pricing & matrix ordering)
  let liftMultiplier = 0.08;
  if (enableMatrixOrdering) liftMultiplier += 0.04;
  if (enableCustomPriceLists) liftMultiplier += 0.04;
  const annualRevenueLift = Math.round(annualRevenue * liftMultiplier);

  // 3. Invoicing Error & Return Reductions
  const baselineErrors = Math.round(totalAnnualOrders * methodObj.errorRate);
  const costPerError = 180; // $180 avg cost per billing dispute / return freight
  const annualErrorSavings = Math.round(baselineErrors * costPerError * 0.92);

  // 4. Working Capital & Cash Flow Acceleration (DSO reduced by 14 days)
  const dailyRevenue = annualRevenue / 365;
  const dsoReductionDays = enableErpCreditSync ? 16 : 8;
  const acceleratedCashFlow = Math.round(dailyRevenue * dsoReductionDays);

  // Total 3-Year Value
  const totalThreeYearImpact = (annualLaborSavings + annualRevenueLift + annualErrorSavings) * 3;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid business email.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer) {
        (window as unknown as { dataLayer: Array<Record<string, unknown>> }).dataLayer.push({
          event: 'b2b_wholesale_calculator_submit',
          source,
          annualRevenue,
          aov,
          annualLaborSavings,
          annualRevenueLift,
          totalThreeYearImpact,
        });
      }

      await submitLead({
        name: fullName || 'B2B Calculator Lead',
        email,
        message: `B2B Wholesale Calculator Result:\nCompany: ${companyName || 'Not provided'}\nAnnual Wholesale Revenue: $${annualRevenue.toLocaleString()}\nAverage Order Value: $${aov.toLocaleString()}\nActive Accounts: ${activeAccounts}\nOrder Method: ${selectedMethod}\nEstimated Annual Labor Savings: $${annualLaborSavings.toLocaleString()}\nProjected Annual Revenue Lift: $${annualRevenueLift.toLocaleString()}\nProjected 3-Year Total Impact: $${totalThreeYearImpact.toLocaleString()}`,
        source,
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
      className={`b2b-wholesale-calculator ${className}`}
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
            <Calculator size={12} />
            Interactive ROI Estimator
          </span>
          <span style={{ fontFamily: 'var(--pp-mono, monospace)', fontSize: '11px', color: '#A8A29E' }}>
            Wholesale Digital Transformation Model
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
          B2B Wholesale Savings &amp; Revenue Lift Calculator
        </h3>
        <p style={{ margin: 0, fontSize: '15px', color: '#D6D3D1', maxWidth: '640px', lineHeight: 1.55 }}>
          Calculate how moving wholesale ordering from manual emails, PDFs, and phone calls to a self-serve B2B portal reduces CSR labor, accelerates reorders, and frees working capital.
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
        {/* Left Column: Interactive Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {/* Revenue Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
              <label htmlFor={revenueSliderId} style={{ fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)' }}>
                Annual Wholesale Revenue
              </label>
              <span style={{ fontFamily: 'var(--pp-mono, monospace)', fontWeight: 800, fontSize: '17px', color: '#B23E13' }}>
                ${annualRevenue.toLocaleString()}
              </span>
            </div>
            <input
              id={revenueSliderId}
              type="range"
              min={500000}
              max={30000000}
              step={250000}
              value={annualRevenue}
              onChange={(e) => setAnnualRevenue(Number(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                accentColor: '#F05A28',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
              <span>$500k</span>
              <span>$10M</span>
              <span>$30M+</span>
            </div>
          </div>

          {/* Average Order Value (AOV) */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
              <label htmlFor={aovSliderId} style={{ fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)' }}>
                Average B2B Order Value (AOV)
              </label>
              <span style={{ fontFamily: 'var(--pp-mono, monospace)', fontWeight: 800, fontSize: '17px', color: '#B23E13' }}>
                ${aov.toLocaleString()}
              </span>
            </div>
            <input
              id={aovSliderId}
              type="range"
              min={250}
              max={15000}
              step={250}
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                accentColor: '#F05A28',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
              <span>$250</span>
              <span>$5,000</span>
              <span>$15,000+</span>
            </div>
          </div>

          {/* Active Wholesale Accounts */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
              <label htmlFor={accountsSliderId} style={{ fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)' }}>
                Active Wholesale Accounts
              </label>
              <span style={{ fontFamily: 'var(--pp-mono, monospace)', fontWeight: 800, fontSize: '17px', color: '#B23E13' }}>
                {activeAccounts} accounts
              </span>
            </div>
            <input
              id={accountsSliderId}
              type="range"
              min={20}
              max={1000}
              step={10}
              value={activeAccounts}
              onChange={(e) => setActiveAccounts(Number(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                accentColor: '#F05A28',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
              <span>20</span>
              <span>250</span>
              <span>1,000+</span>
            </div>
          </div>

          {/* Current Order Intake Method */}
          <div>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)', marginBottom: '8px' }}>
              Current Primary Order Method
            </label>
            <div style={{ display: 'grid', gap: '8px' }}>
              {ORDER_METHODS.map((method) => {
                const isSelected = selectedMethod === method.id;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setSelectedMethod(method.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: isSelected ? '2px solid #F05A28' : '1px solid var(--pp-line, #E5E0DA)',
                      background: isSelected ? 'rgba(240, 90, 40, 0.05)' : '#FFFFFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span style={{ fontSize: '13.5px', fontWeight: isSelected ? 700 : 500, color: 'var(--pp-ink, #14110F)' }}>
                      {method.label}
                    </span>
                    {isSelected && <CheckCircle2 size={16} color="#F05A28" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feature Optimization Toggles */}
          <div>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)', marginBottom: '8px' }}>
              Planned Portal Capabilities
            </label>
            <div style={{ display: 'grid', gap: '8px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={enableMatrixOrdering}
                  onChange={(e) => setEnableMatrixOrdering(e.target.checked)}
                  style={{ accentColor: '#F05A28', width: '16px', height: '16px' }}
                />
                <span>Matrix SKU quick-order grid &amp; 1-click CSV reorder pads</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={enableCustomPriceLists}
                  onChange={(e) => setEnableCustomPriceLists(e.target.checked)}
                  style={{ accentColor: '#F05A28', width: '16px', height: '16px' }}
                />
                <span>Tiered pricing matrices &amp; per-company contract price lists</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={enableErpCreditSync}
                  onChange={(e) => setEnableErpCreditSync(e.target.checked)}
                  style={{ accentColor: '#F05A28', width: '16px', height: '16px' }}
                />
                <span>Real-time ERP credit line checks &amp; Net 30 terms at checkout</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Projections & Lead Action */}
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
              Projected Annual Impact
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
              Estimated Value Gains
            </h4>

            {/* Metric Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '18px' }}>
              <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                  <Clock size={13} color="#F05A28" />
                  <span>Labor Saved</span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                  ${annualLaborSavings.toLocaleString()}/yr
                </div>
                <div style={{ fontSize: '11px', color: '#16A34A', marginTop: '2px', fontWeight: 600 }}>
                  {hoursSavedPerYear.toLocaleString()} hrs saved/yr
                </div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                  <TrendingUp size={13} color="#F05A28" />
                  <span>Revenue Lift</span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                  +${annualRevenueLift.toLocaleString()}/yr
                </div>
                <div style={{ fontSize: '11px', color: '#16A34A', marginTop: '2px', fontWeight: 600 }}>
                  +{Math.round(liftMultiplier * 100)}% reorder volume
                </div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                  <ShieldCheck size={13} color="#F05A28" />
                  <span>Error Reduction</span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                  ${annualErrorSavings.toLocaleString()}/yr
                </div>
                <div style={{ fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '2px' }}>
                  92% fewer invoice disputes
                </div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                  <DollarSign size={13} color="#F05A28" />
                  <span>Cash Accelerated</span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                  ${acceleratedCashFlow.toLocaleString()}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '2px' }}>
                  {dsoReductionDays} days faster DSO
                </div>
              </div>
            </div>

            {/* Total 3-Year Value Box */}
            <div
              style={{
                background: 'linear-gradient(135deg, #14110F 0%, #201B17 100%)',
                borderRadius: '12px',
                padding: '16px 20px',
                color: '#FFFFFF',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--pp-mono, monospace)', fontSize: '10.5px', color: '#D6D3D1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Total 3-Year Value Creation
                </div>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#FF7A45', fontFamily: 'var(--pp-mono, monospace)', marginTop: '2px' }}>
                  ${totalThreeYearImpact.toLocaleString()}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '11.5px', background: 'rgba(255, 255, 255, 0.12)', padding: '4px 10px', borderRadius: '6px', fontFamily: 'var(--pp-mono, monospace)' }}>
                  ~3 to 5 Mo. Payback
                </span>
              </div>
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
                Wholesale ROI Breakdown Sent
              </div>
              <p style={{ fontSize: '12.5px', color: '#047857', margin: '4px 0 12px 0' }}>
                Our architecture team will email your customized B2B scope blueprint shortly.
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
                Schedule 30-Min Architecture Call
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
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
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
                  {isSubmitting ? 'Sending...' : 'Get B2B Blueprint'}
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
