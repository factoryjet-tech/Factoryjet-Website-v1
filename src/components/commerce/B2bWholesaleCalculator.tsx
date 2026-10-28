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
  /** Accepted for call-site compatibility. No longer prefills any input. */
  defaultRevenue?: number;
  /** Accepted for call-site compatibility. No longer prefills any input. */
  defaultAov?: number;
  /** Accepted for call-site compatibility. No longer prefills any input. */
  defaultAccounts?: number;
}

// Starting assumptions per order method. Each one is shown on screen as an
// editable assumption and is copied into the inputs when a method is picked.
const ORDER_METHODS = [
  { id: 'manual', label: 'Email, PDF Invoices & Spreadsheets', minutesPerOrder: '21', errorRatePercent: '4.5' },
  { id: 'phone', label: 'Field Reps & Phone Order Desk', minutesPerOrder: '27', errorRatePercent: '3.5' },
  { id: 'legacy', label: 'Legacy Monolith / ERP Web Portal', minutesPerOrder: '9', errorRatePercent: '2' },
];

/** Returns a finite number above zero, or null when the field is empty or invalid. */
function toPositive(value: string): number | null {
  if (value.trim() === '') return null;
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

/** Returns a finite number of zero or more, or null when the field is empty or invalid. Used for assumptions. */
function toNonNegative(value: string): number | null {
  if (value.trim() === '') return null;
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

const fieldLabelStyle: React.CSSProperties = { display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--pp-ink, #14110F)', marginBottom: '6px' };
const assumptionLabelStyle: React.CSSProperties = { display: 'block', fontWeight: 600, fontSize: '12.5px', color: 'var(--pp-ink, #14110F)', marginBottom: '4px' };
const numberInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '8px',
  border: '1px solid var(--pp-line, #E5E0DA)',
  fontSize: '14px',
  background: '#FFFFFF',
  fontFamily: 'var(--pp-mono, monospace)',
  color: 'var(--pp-ink, #14110F)',
};

export default function B2bWholesaleCalculator({
  className = '',
  source = 'b2b_wholesale_calculator',
}: B2bWholesaleCalculatorProps) {
  const { openModal } = useContactModal();

  // Visitor inputs start empty. Nothing is prefilled.
  const [annualRevenueInput, setAnnualRevenueInput] = useState<string>('');
  const [aovInput, setAovInput] = useState<string>('');
  const [activeAccountsInput, setActiveAccountsInput] = useState<string>('');
  const [selectedMethod, setSelectedMethod] = useState<string>('manual');

  // Assumptions are shown on screen and the visitor can edit each one.
  const [minutesPerOrderInput, setMinutesPerOrderInput] = useState<string>(ORDER_METHODS[0].minutesPerOrder);
  const [handlingCutPercentInput, setHandlingCutPercentInput] = useState<string>('75');
  const [hourlyRateInput, setHourlyRateInput] = useState<string>('32');
  const [reorderLiftPercentInput, setReorderLiftPercentInput] = useState<string>('8');
  const [errorRatePercentInput, setErrorRatePercentInput] = useState<string>(ORDER_METHODS[0].errorRatePercent);
  const [costPerErrorInput, setCostPerErrorInput] = useState<string>('180');
  const [errorCutPercentInput, setErrorCutPercentInput] = useState<string>('92');
  const [dsoDaysInput, setDsoDaysInput] = useState<string>('8');

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
  const assumptionIdPrefix = useId();

  const selectMethod = (id: string) => {
    const method = ORDER_METHODS.find((m) => m.id === id) || ORDER_METHODS[0];
    setSelectedMethod(method.id);
    setMinutesPerOrderInput(method.minutesPerOrder);
    setErrorRatePercentInput(method.errorRatePercent);
  };

  // Visitor figures
  const revenueValue = toPositive(annualRevenueInput);
  const aovValue = toPositive(aovInput);
  // Assumptions
  const minutesPerOrder = toNonNegative(minutesPerOrderInput);
  const handlingCutPercent = toNonNegative(handlingCutPercentInput);
  const hourlyRate = toNonNegative(hourlyRateInput);
  const reorderLiftPercent = toNonNegative(reorderLiftPercentInput);
  const errorRatePercent = toNonNegative(errorRatePercentInput);
  const costPerError = toNonNegative(costPerErrorInput);
  const errorCutPercent = toNonNegative(errorCutPercentInput);
  const dsoReductionDays = toNonNegative(dsoDaysInput);

  const hasEstimate =
    revenueValue !== null &&
    aovValue !== null &&
    minutesPerOrder !== null &&
    handlingCutPercent !== null &&
    hourlyRate !== null &&
    reorderLiftPercent !== null &&
    errorRatePercent !== null &&
    costPerError !== null &&
    errorCutPercent !== null &&
    dsoReductionDays !== null;

  // Numeric values the lead handler reports. Zero means the visitor left it blank.
  const annualRevenue = revenueValue ?? 0;
  const aov = aovValue ?? 0;
  const activeAccounts = toPositive(activeAccountsInput) ?? 0;

  const totalAnnualOrders = hasEstimate ? Math.max(1, Math.round(annualRevenue / aov)) : 0;

  // 1. Staff time saved
  const hoursSavedPerYear = hasEstimate
    ? Math.round(totalAnnualOrders * ((minutesPerOrder as number) / 60) * (Math.min(100, handlingCutPercent as number) / 100))
    : 0;
  const annualLaborSavings = hasEstimate ? Math.round(hoursSavedPerYear * (hourlyRate as number)) : 0;

  // 2. Reorder revenue lift
  const annualRevenueLift = hasEstimate ? Math.round(annualRevenue * ((reorderLiftPercent as number) / 100)) : 0;

  // 3. Order and invoice errors avoided
  const baselineErrors = hasEstimate ? Math.round(totalAnnualOrders * ((errorRatePercent as number) / 100)) : 0;
  const annualErrorSavings = hasEstimate
    ? Math.round(baselineErrors * (costPerError as number) * (Math.min(100, errorCutPercent as number) / 100))
    : 0;

  // 4. Cash collected sooner (one-time, not yearly)
  const acceleratedCashFlow = hasEstimate ? Math.round((annualRevenue / 365) * (dsoReductionDays as number)) : 0;

  // Three years at the same yearly rate
  const totalThreeYearImpact = (annualLaborSavings + annualRevenueLift + annualErrorSavings) * 3;

  const assumptionFields: Array<{ key: string; label: string; value: string; set: (v: string) => void }> = [
    { key: 'minutes', label: 'Staff minutes to handle one order today', value: minutesPerOrderInput, set: setMinutesPerOrderInput },
    { key: 'handling', label: 'Share of that handling time removed (%)', value: handlingCutPercentInput, set: setHandlingCutPercentInput },
    { key: 'rate', label: 'Loaded staff cost per hour ($)', value: hourlyRateInput, set: setHourlyRateInput },
    { key: 'reorder', label: 'Extra reorder revenue (%)', value: reorderLiftPercentInput, set: setReorderLiftPercentInput },
    { key: 'errors', label: 'Orders with a billing or picking error today (%)', value: errorRatePercentInput, set: setErrorRatePercentInput },
    { key: 'cost', label: 'Cost of one error, disputes and return freight ($)', value: costPerErrorInput, set: setCostPerErrorInput },
    { key: 'errorcut', label: 'Share of those errors removed (%)', value: errorCutPercentInput, set: setErrorCutPercentInput },
    { key: 'dso', label: 'Days sooner customers pay', value: dsoDaysInput, set: setDsoDaysInput },
  ];

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
          Type in your own wholesale figures to estimate what a self-serve B2B portal could save over ordering by email, PDF and phone. Every assumption is on screen, and you can change each one.
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
          {/* Annual Wholesale Revenue */}
          <div>
            <label htmlFor={revenueSliderId} style={fieldLabelStyle}>
              Your annual wholesale revenue ($)
            </label>
            <input
              id={revenueSliderId}
              type="number"
              inputMode="decimal"
              min={0}
              step="any"
              placeholder="Enter your figure"
              value={annualRevenueInput}
              onChange={(e) => setAnnualRevenueInput(e.target.value)}
              style={numberInputStyle}
            />
          </div>

          {/* Average Order Value (AOV) */}
          <div>
            <label htmlFor={aovSliderId} style={fieldLabelStyle}>
              Your average B2B order value ($)
            </label>
            <input
              id={aovSliderId}
              type="number"
              inputMode="decimal"
              min={0}
              step="any"
              placeholder="Enter your figure"
              value={aovInput}
              onChange={(e) => setAovInput(e.target.value)}
              style={numberInputStyle}
            />
          </div>

          {/* Active Wholesale Accounts */}
          <div>
            <label htmlFor={accountsSliderId} style={fieldLabelStyle}>
              Your active wholesale accounts (optional)
            </label>
            <input
              id={accountsSliderId}
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              placeholder="Enter your figure"
              value={activeAccountsInput}
              onChange={(e) => setActiveAccountsInput(e.target.value)}
              style={numberInputStyle}
            />
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
                    onClick={() => selectMethod(method.id)}
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

          {/* Editable assumptions */}
          <div
            style={{
              border: '1px solid var(--pp-line, #E5E0DA)',
              borderRadius: '12px',
              background: '#FBF9F7',
              padding: '16px',
            }}
          >
            <div style={{ fontFamily: 'var(--pp-mono, monospace)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#B23E13', marginBottom: '4px' }}>
              Assumptions, edit to match your business
            </div>
            <p style={{ fontSize: '12px', color: 'var(--pp-muted, #78716C)', margin: '0 0 12px 0', lineHeight: 1.5 }}>
              These starting values are working assumptions, not measured results. Picking an order method resets the first and fifth values.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              {assumptionFields.map((field) => (
                <div key={field.key}>
                  <label htmlFor={`${assumptionIdPrefix}-${field.key}`} style={assumptionLabelStyle}>
                    {field.label}
                  </label>
                  <input
                    id={`${assumptionIdPrefix}-${field.key}`}
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step="any"
                    value={field.value}
                    onChange={(e) => field.set(e.target.value)}
                    style={numberInputStyle}
                  />
                </div>
              ))}
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
              Your Estimate
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
              Estimated Yearly Effect
            </h4>

            {!hasEstimate ? (
              <p
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--pp-line, #E5E0DA)',
                  borderRadius: '12px',
                  padding: '16px',
                  fontSize: '14px',
                  color: 'var(--pp-ink, #14110F)',
                  margin: '0 0 20px 0',
                  lineHeight: 1.55,
                }}
              >
                Enter your own numbers to see an estimate. We do not prefill your figures.
              </p>
            ) : (
              <>
                {/* Metric Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '18px' }}>
                  <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                      <Clock size={13} color="#F05A28" />
                      <span>Staff Time Saved</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                      ${annualLaborSavings.toLocaleString()}/yr
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '2px' }}>
                      {hoursSavedPerYear.toLocaleString()} hrs/yr at your assumptions
                    </div>
                  </div>

                  <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                      <TrendingUp size={13} color="#F05A28" />
                      <span>Reorder Revenue</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                      ${annualRevenueLift.toLocaleString()}/yr
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '2px' }}>
                      At the {reorderLiftPercent}% you assumed
                    </div>
                  </div>

                  <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                      <ShieldCheck size={13} color="#F05A28" />
                      <span>Errors Avoided</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                      ${annualErrorSavings.toLocaleString()}/yr
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '2px' }}>
                      {Math.min(100, errorCutPercent as number)}% of errors removed, as you assumed
                    </div>
                  </div>

                  <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid var(--pp-line, #E5E0DA)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginBottom: '4px', fontFamily: 'var(--pp-mono, monospace)' }}>
                      <DollarSign size={13} color="#F05A28" />
                      <span>Cash Collected Sooner</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-ink, #14110F)', fontFamily: 'var(--pp-mono, monospace)' }}>
                      ${acceleratedCashFlow.toLocaleString()}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--pp-muted, #78716C)', marginTop: '2px' }}>
                      One time, {dsoReductionDays} days sooner as you assumed
                    </div>
                  </div>
                </div>

                {/* Three-Year Total Box */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, #14110F 0%, #201B17 100%)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    color: '#FFFFFF',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--pp-mono, monospace)', fontSize: '10.5px', color: '#D6D3D1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Three Years at the Same Rate
                  </div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#FF7A45', fontFamily: 'var(--pp-mono, monospace)', marginTop: '2px' }}>
                    ${totalThreeYearImpact.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#D6D3D1', marginTop: '4px' }}>
                    The yearly figures above times three, before build cost. An estimate, not a promise.
                  </div>
                </div>
              </>
            )}
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
