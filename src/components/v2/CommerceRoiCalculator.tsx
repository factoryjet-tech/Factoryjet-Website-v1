'use client';

import React, { useState, useMemo } from 'react';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import type { ModalRegion } from '@/context/ContactModalContext';

interface CommerceRoiCalculatorProps {
  city?: string;
  region?: ModalRegion;
  className?: string;
}

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

const labelStyle: React.CSSProperties = { fontSize: '13.5px', fontWeight: 700, color: '#141414', display: 'block', marginBottom: '6px' };
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '10px',
  border: '1px solid #E6E6EC',
  background: '#FFFFFF',
  fontSize: '15px',
  color: '#141414',
  fontFamily: 'var(--pp-mono, monospace)',
};
const hintStyle: React.CSSProperties = { fontSize: '11.5px', color: '#6E6E80', margin: '4px 0 0' };
const assumptionTagStyle: React.CSSProperties = {
  display: 'inline-block',
  fontSize: '10px',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '#B23E13',
  background: '#FFF8F5',
  border: '1px solid #E7DED6',
  borderRadius: '999px',
  padding: '1px 8px',
  marginLeft: '6px',
  verticalAlign: 'middle',
};

export default function CommerceRoiCalculator({
  city = '',
  region = 'us',
  className = '',
}: CommerceRoiCalculatorProps) {
  const isUK = region === 'uk';
  const sym = isUK ? '£' : '$';

  // Visitor inputs start empty. Nothing is prefilled.
  const [monthlyRevenueInput, setMonthlyRevenueInput] = useState<string>('');
  const [conversionRateInput, setConversionRateInput] = useState<string>('');
  const [currentSpeedInput, setCurrentSpeedInput] = useState<string>('');

  // Assumptions are shown on screen and the visitor can edit each one.
  const [targetSpeedInput, setTargetSpeedInput] = useState<string>('0.8');
  const [liftPer100msInput, setLiftPer100msInput] = useState<string>('0.85');
  const [liftCapInput, setLiftCapInput] = useState<string>('60');

  const results = useMemo(() => {
    const monthlyRevenue = toPositive(monthlyRevenueInput);
    const conversionRate = toPositive(conversionRateInput);
    const currentSpeed = toPositive(currentSpeedInput);
    const targetSpeed = toNonNegative(targetSpeedInput);
    const liftPer100ms = toNonNegative(liftPer100msInput);
    const liftCap = toNonNegative(liftCapInput);
    if (
      monthlyRevenue === null ||
      conversionRate === null ||
      currentSpeed === null ||
      targetSpeed === null ||
      liftPer100ms === null ||
      liftCap === null
    ) {
      return null;
    }

    const latencyReductionSeconds = Math.max(0, currentSpeed - targetSpeed);
    const speedImprovementHundredMs = latencyReductionSeconds * 10;
    const conversionLiftPercent = Math.min(liftCap, speedImprovementHundredMs * liftPer100ms);
    const projectedConversionRate = conversionRate * (1 + conversionLiftPercent / 100);
    const additionalMonthlyRevenue = monthlyRevenue * (conversionLiftPercent / 100);
    const additionalAnnualRevenue = additionalMonthlyRevenue * 12;

    return {
      additionalAnnualRevenue,
      additionalMonthlyRevenue,
      conversionLiftPercent,
      projectedConversionRate,
      targetSpeed,
    };
  }, [monthlyRevenueInput, conversionRateInput, currentSpeedInput, targetSpeedInput, liftPer100msInput, liftCapInput]);

  return (
    <section className={`pp-sec ${className}`} style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
      <div className="pp-wrap">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
          <div className="rv-badge" style={{ marginBottom: '14px' }}>
            <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
            </svg>
            <span>Your Numbers, Your Estimate</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
            {city ? `${city} ` : ''}E-Commerce Speed &amp; Latency ROI Calculator
          </h2>
          <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
            Type in your own store figures to get a rough estimate of what a faster mobile load time could be worth. The result is only as good as the assumptions below, and you can change every one of them.
          </p>
        </div>

        <div
          style={{
            background: '#F9F9FC',
            border: '1px solid #E6E6EC',
            borderRadius: '20px',
            padding: 'clamp(24px, 4vw, 44px)',
            maxWidth: '1000px',
            margin: '0 auto',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', alignItems: 'start' }}>
            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label htmlFor="comm-rev-input" style={labelStyle}>
                  Your monthly online revenue ({sym})
                </label>
                <input
                  id="comm-rev-input"
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step="any"
                  placeholder="Enter your figure"
                  value={monthlyRevenueInput}
                  onChange={(e) => setMonthlyRevenueInput(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="comm-cr-input" style={labelStyle}>
                  Your current mobile conversion rate (%)
                </label>
                <input
                  id="comm-cr-input"
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step="any"
                  placeholder="Enter your figure"
                  value={conversionRateInput}
                  onChange={(e) => setConversionRateInput(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="comm-speed-input" style={labelStyle}>
                  Your current mobile load time, LCP (seconds)
                </label>
                <input
                  id="comm-speed-input"
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step="any"
                  placeholder="Enter your figure"
                  value={currentSpeedInput}
                  onChange={(e) => setCurrentSpeedInput(e.target.value)}
                  style={inputStyle}
                />
                <p style={hintStyle}>Find it in Google PageSpeed Insights, mobile tab, Largest Contentful Paint.</p>
              </div>

              <div style={{ borderTop: '1px solid #E6E6EC', paddingTop: '18px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label htmlFor="comm-target-input" style={labelStyle}>
                    Target mobile load time (seconds)
                    <span style={assumptionTagStyle}>Assumption</span>
                  </label>
                  <input
                    id="comm-target-input"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step="any"
                    value={targetSpeedInput}
                    onChange={(e) => setTargetSpeedInput(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="comm-lift-input" style={labelStyle}>
                    Conversion lift per 100ms faster (%)
                    <span style={assumptionTagStyle}>Assumption</span>
                  </label>
                  <input
                    id="comm-lift-input"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step="any"
                    value={liftPer100msInput}
                    onChange={(e) => setLiftPer100msInput(e.target.value)}
                    style={inputStyle}
                  />
                  <p style={hintStyle}>A working assumption. Change it to match your own tests.</p>
                </div>
                <div>
                  <label htmlFor="comm-cap-input" style={labelStyle}>
                    Maximum total conversion lift (%)
                    <span style={assumptionTagStyle}>Assumption</span>
                  </label>
                  <input
                    id="comm-cap-input"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step="any"
                    value={liftCapInput}
                    onChange={(e) => setLiftCapInput(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* Output Results Card */}
            <div
              style={{
                background: '#141414',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {results === null ? (
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.06em' }}>
                    Your estimate
                  </span>
                  <p style={{ fontSize: '15px', color: '#D6D6DE', margin: '8px 0 0', lineHeight: 1.55 }}>
                    Enter your own numbers to see an estimate. We do not prefill your figures.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.06em' }}>
                      Estimated extra revenue per year
                    </span>
                    <div style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', marginTop: '4px', lineHeight: 1.1 }}>
                      {sym}{Math.round(results.additionalAnnualRevenue).toLocaleString()}
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#A0A0B0', marginLeft: '6px' }}>/ year</span>
                    </div>
                    <p style={{ fontSize: '12px', color: '#8E8E9F', margin: '4px 0 0' }}>
                      From your figures and the assumptions on this page. Treat it as a rough guide.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', borderTop: '1px solid #2E2E33', paddingTop: '16px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#8E8E9F', display: 'block' }}>Per month</span>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#10B981' }}>
                        {sym}{Math.round(results.additionalMonthlyRevenue).toLocaleString()}/mo
                      </span>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#8E8E9F', display: 'block' }}>Assumed conversion lift</span>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#FF5622' }}>
                        {results.conversionLiftPercent.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid #2E2E33', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '6px' }}>
                      <span style={{ color: '#A0A0B0' }}>Mobile conversion at that lift:</span>
                      <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{results.projectedConversionRate.toFixed(2)}%</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                      <span style={{ color: '#A0A0B0' }}>Target load time you set:</span>
                      <span style={{ fontWeight: 700, color: '#10B981' }}>{results.targetSpeed.toFixed(2)}s</span>
                    </div>
                  </div>
                </>
              )}

              <div style={{ marginTop: '8px' }}>
                <ModalCTAButton label="Talk Through Your Numbers" region={region} btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
