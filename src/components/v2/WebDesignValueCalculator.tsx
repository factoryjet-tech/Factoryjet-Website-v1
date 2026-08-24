'use client';

import React, { useState, useMemo } from 'react';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import type { ModalRegion } from '@/context/ContactModalContext';

interface WebDesignValueCalculatorProps {
  city?: string;
  region?: ModalRegion;
  className?: string;
}

export default function WebDesignValueCalculator({
  city = '',
  region = 'us',
  className = '',
}: WebDesignValueCalculatorProps) {
  const isUK = region === 'uk';
  const sym = isUK ? '£' : '$';

  // Inputs
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(6500);
  const [bounceRate, setBounceRate] = useState<number>(64); // %
  const [dealValue, setDealValue] = useState<number>(isUK ? 3000 : 3500); // Currency value
  const [conversionRate, setConversionRate] = useState<number>(1.4); // %

  // Calculations
  const results = useMemo(() => {
    // Current retained visitors & leads
    const currentRetainedVisitors = monthlyTraffic * (1 - bounceRate / 100);
    const currentLeadsMonthly = currentRetainedVisitors * (conversionRate / 100);

    // Target metrics with sub-second Next.js architecture (target bounce rate 36%, +40% conversion lift)
    const targetBounceRate = 36;
    const targetRetainedVisitors = monthlyTraffic * (1 - targetBounceRate / 100);
    const targetConversionRate = conversionRate * 1.4; // 40% conversion rate improvement
    const targetLeadsMonthly = targetRetainedVisitors * (targetConversionRate / 100);

    const incrementalLeadsMonthly = Math.max(0, targetLeadsMonthly - currentLeadsMonthly);
    const visitorsSavedMonthly = Math.round(monthlyTraffic * ((bounceRate - targetBounceRate) / 100));

    // Pipeline calculation (assuming 20% lead-to-client close rate)
    const leadCloseRate = 0.20;
    const incrementalClosedDeals = incrementalLeadsMonthly * leadCloseRate;
    const additionalMonthlyPipeline = incrementalClosedDeals * dealValue;
    const additionalAnnualPipeline = additionalMonthlyPipeline * 12;

    return {
      visitorsSavedMonthly,
      currentLeadsMonthly: currentLeadsMonthly.toFixed(1),
      targetLeadsMonthly: targetLeadsMonthly.toFixed(1),
      incrementalLeadsMonthly: Math.round(incrementalLeadsMonthly),
      additionalMonthlyPipeline,
      additionalAnnualPipeline,
    };
  }, [monthlyTraffic, bounceRate, dealValue, conversionRate]);

  return (
    <section className={`pp-sec ${className}`} style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
      <div className="pp-wrap">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
          <div className="rv-badge" style={{ marginBottom: '14px' }}>
            <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
            </svg>
            <span>Interactive Website Performance ROI</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
            {city ? `${city} ` : ''}Web Design &amp; Speed Value Calculator
          </h2>
          <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
            Calculate how many prospective buyers bounce due to slow load speeds, and model the pipeline impact of upgrading to sub-second Next.js architecture:
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
              {/* Monthly Traffic Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label htmlFor="web-traffic-input" style={{ fontSize: '13.5px', fontWeight: 700, color: '#141414' }}>
                    Monthly Website Visitors
                  </label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#FF5622', fontFamily: 'var(--pp-mono, monospace)' }}>
                    {monthlyTraffic.toLocaleString()} visitors/mo
                  </span>
                </div>
                <input
                  id="web-traffic-input"
                  type="range"
                  min={1000}
                  max={50000}
                  step={500}
                  value={monthlyTraffic}
                  onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF5622', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8E8E9F', marginTop: '4px' }}>
                  <span>1,000/mo</span>
                  <span>25,000/mo</span>
                  <span>50,000+/mo</span>
                </div>
              </div>

              {/* Bounce Rate Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label htmlFor="web-bounce-input" style={{ fontSize: '13.5px', fontWeight: 700, color: '#141414' }}>
                    Current Mobile Bounce Rate
                  </label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: bounceRate > 55 ? '#E11D48' : '#10B981', fontFamily: 'var(--pp-mono, monospace)' }}>
                    {bounceRate}% {bounceRate > 55 ? '(High Drop-off)' : '(Good)'}
                  </span>
                </div>
                <input
                  id="web-bounce-input"
                  type="range"
                  min={30}
                  max={85}
                  step={1}
                  value={bounceRate}
                  onChange={(e) => setBounceRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF5622', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8E8E9F', marginTop: '4px' }}>
                  <span>30% (Optimized)</span>
                  <span>64% (Average Site)</span>
                  <span>85% (Severe Bounce)</span>
                </div>
              </div>

              {/* Average Deal Value */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label htmlFor="web-deal-input" style={{ fontSize: '13.5px', fontWeight: 700, color: '#141414' }}>
                    Average Client / Project Deal Value
                  </label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#FF5622', fontFamily: 'var(--pp-mono, monospace)' }}>
                    {sym}{dealValue.toLocaleString()}
                  </span>
                </div>
                <input
                  id="web-deal-input"
                  type="range"
                  min={500}
                  max={25000}
                  step={250}
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF5622', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8E8E9F', marginTop: '4px' }}>
                  <span>{sym}500</span>
                  <span>{sym}10,000</span>
                  <span>{sym}25,000+</span>
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
                  Projected Annual Pipeline Gain
                </span>
                <div style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', marginTop: '4px', lineHeight: 1.1 }}>
                  +{sym}{Math.round(results.additionalAnnualPipeline).toLocaleString()}
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#A0A0B0', marginLeft: '6px' }}>/ year</span>
                </div>
                <p style={{ fontSize: '12px', color: '#8E8E9F', margin: '4px 0 0' }}>
                  Driven by mobile bounce recovery and custom Next.js conversion flows.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', borderTop: '1px solid #2E2E33', paddingTop: '16px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#8E8E9F', display: 'block' }}>Monthly Visitors Saved</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#10B981' }}>
                    +{results.visitorsSavedMonthly.toLocaleString()} visits
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#8E8E9F', display: 'block' }}>New Monthly Inquiries</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#FF5622' }}>
                    +{results.incrementalLeadsMonthly} leads/mo
                  </span>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #2E2E33', paddingTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '6px' }}>
                  <span style={{ color: '#A0A0B0' }}>Monthly Value Creation:</span>
                  <span style={{ fontWeight: 700, color: '#FFFFFF' }}>+{sym}{Math.round(results.additionalMonthlyPipeline).toLocaleString()}/mo</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#A0A0B0' }}>Target Mobile Bounce Rate:</span>
                  <span style={{ fontWeight: 700, color: '#10B981' }}>36% (Sub-Second Next.js)</span>
                </div>
              </div>

              <div style={{ marginTop: '8px' }}>
                <ModalCTAButton label="Get Fixed-Price Design Quote" region={region} btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
