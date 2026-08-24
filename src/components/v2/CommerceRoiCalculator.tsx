'use client';

import React, { useState, useMemo } from 'react';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import type { ModalRegion } from '@/context/ContactModalContext';

interface CommerceRoiCalculatorProps {
  city?: string;
  region?: ModalRegion;
  className?: string;
}

export default function CommerceRoiCalculator({
  city = '',
  region = 'us',
  className = '',
}: CommerceRoiCalculatorProps) {
  // Inputs
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(125000);
  const [conversionRate, setConversionRate] = useState<number>(1.8);
  const [currentSpeed, setCurrentSpeed] = useState<number>(3.8); // seconds
  const targetSpeed = 0.8; // seconds (FactoryJet standard)

  // Calculations
  const results = useMemo(() => {
    const annualRevenue = monthlyRevenue * 12;
    // Latency reduction in 100ms units
    const latencyReductionSeconds = Math.max(0, currentSpeed - targetSpeed);
    const speedImprovementHundredMs = latencyReductionSeconds * 10;
    
    // Diminishing returns conversion lift model (~0.85% conversion lift per 100ms speedup)
    const conversionLiftPercent = Math.min(60, Math.max(0, speedImprovementHundredMs * 0.85));
    const projectedConversionRate = conversionRate * (1 + conversionLiftPercent / 100);

    const projectedMonthlyRevenue = monthlyRevenue * (1 + conversionLiftPercent / 100);
    const projectedAnnualRevenue = projectedMonthlyRevenue * 12;
    const additionalAnnualRevenue = projectedAnnualRevenue - annualRevenue;
    const additionalMonthlyRevenue = projectedMonthlyRevenue - monthlyRevenue;

    return {
      annualRevenue,
      projectedAnnualRevenue,
      additionalAnnualRevenue,
      additionalMonthlyRevenue,
      conversionLiftPercent,
      projectedConversionRate,
    };
  }, [monthlyRevenue, conversionRate, currentSpeed]);

  return (
    <section className={`pp-sec ${className}`} style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
      <div className="pp-wrap">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
          <div className="rv-badge" style={{ marginBottom: '14px' }}>
            <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
            </svg>
            <span>Interactive Speed &amp; Revenue Modeling</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
            {city ? `${city} ` : ''}E-Commerce Speed &amp; Latency ROI Calculator
          </h2>
          <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
            Model how much annual revenue your store loses to mobile page latency, and calculate the exact return on migrating to sub-second architecture:
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', alignItems: 'center' }}>
            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Monthly Revenue Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label htmlFor="comm-rev-input" style={{ fontSize: '13.5px', fontWeight: 700, color: '#141414' }}>
                    Current Monthly Online Revenue
                  </label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#FF5622', fontFamily: 'var(--pp-mono, monospace)' }}>
                    ${monthlyRevenue.toLocaleString()}
                  </span>
                </div>
                <input
                  id="comm-rev-input"
                  type="range"
                  min={10000}
                  max={1000000}
                  step={5000}
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF5622', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8E8E9F', marginTop: '4px' }}>
                  <span>$10,000/mo</span>
                  <span>$500,000/mo</span>
                  <span>$1,000,000+/mo</span>
                </div>
              </div>

              {/* Conversion Rate Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label htmlFor="comm-cr-input" style={{ fontSize: '13.5px', fontWeight: 700, color: '#141414' }}>
                    Current Mobile Conversion Rate
                  </label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#FF5622', fontFamily: 'var(--pp-mono, monospace)' }}>
                    {conversionRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  id="comm-cr-input"
                  type="range"
                  min={0.5}
                  max={5.0}
                  step={0.1}
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF5622', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8E8E9F', marginTop: '4px' }}>
                  <span>0.5% (Sub-par)</span>
                  <span>1.8% (US Average)</span>
                  <span>5.0% (Top Tier)</span>
                </div>
              </div>

              {/* Current Mobile LCP Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label htmlFor="comm-speed-input" style={{ fontSize: '13.5px', fontWeight: 700, color: '#141414' }}>
                    Current Mobile Load Time (LCP)
                  </label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: currentSpeed > 2.5 ? '#E11D48' : '#10B981', fontFamily: 'var(--pp-mono, monospace)' }}>
                    {currentSpeed.toFixed(1)}s {currentSpeed > 2.5 ? '(Fails CWV)' : '(Passes)'}
                  </span>
                </div>
                <input
                  id="comm-speed-input"
                  type="range"
                  min={1.2}
                  max={6.0}
                  step={0.1}
                  value={currentSpeed}
                  onChange={(e) => setCurrentSpeed(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF5622', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8E8E9F', marginTop: '4px' }}>
                  <span>1.2s</span>
                  <span>3.8s (Typical Store)</span>
                  <span>6.0s (Severe Latency)</span>
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
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.06em' }}>
                  Annual Revenue Lost to Latency
                </span>
                <div style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', marginTop: '4px', lineHeight: 1.1 }}>
                  +${Math.round(results.additionalAnnualRevenue).toLocaleString()}
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#A0A0B0', marginLeft: '6px' }}>/ year</span>
                </div>
                <p style={{ fontSize: '12px', color: '#8E8E9F', margin: '4px 0 0' }}>
                  Based on sub-second 0.8s mobile LCP optimization standards.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', borderTop: '1px solid #2E2E33', paddingTop: '16px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#8E8E9F', display: 'block' }}>Monthly Recovery</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#10B981' }}>
                    +${Math.round(results.additionalMonthlyRevenue).toLocaleString()}/mo
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#8E8E9F', display: 'block' }}>Conversion Lift</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#FF5622' }}>
                    +{results.conversionLiftPercent.toFixed(1)}% Lift
                  </span>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #2E2E33', paddingTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '6px' }}>
                  <span style={{ color: '#A0A0B0' }}>Target Mobile Conversion:</span>
                  <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{results.projectedConversionRate.toFixed(2)}%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#A0A0B0' }}>Target Load Speed (LCP):</span>
                  <span style={{ fontWeight: 700, color: '#10B981' }}>0.80s (Sub-Second)</span>
                </div>
              </div>

              <div style={{ marginTop: '8px' }}>
                <ModalCTAButton label="Claim Speed Recovery Scope" region={region} btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
