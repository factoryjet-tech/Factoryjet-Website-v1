'use client';

import React, { useState, useMemo } from 'react';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import type { ModalRegion } from '@/context/ContactModalContext';

interface LocalSeoOpportunityEstimatorProps {
  city?: string;
  region?: ModalRegion;
  className?: string;
}

export default function LocalSeoOpportunityEstimator({
  city = '',
  region = 'us',
  className = '',
}: LocalSeoOpportunityEstimatorProps) {
  const isUK = region === 'uk';
  const sym = isUK ? '£' : '$';

  // Inputs
  const [searchVolume, setSearchVolume] = useState<number>(3800);
  const [currentRankTier, setCurrentRankTier] = useState<number>(2); // 0 = Top 3 (44%), 1 = Rank 4-7 (14%), 2 = Rank 8-20 (4%), 3 = Unranked (0.5%)
  const [customerLtv, setCustomerLtv] = useState<number>(isUK ? 1200 : 1500); // Currency value
  const [closeRate, setCloseRate] = useState<number>(25); // %

  const rankTierLabels = [
    { label: 'Top 3 (Map Pack)', ctr: 0.44 },
    { label: 'Rank 4 - 7 (Page 1 Mid)', ctr: 0.14 },
    { label: 'Rank 8 - 20 (Page 2 / Lower)', ctr: 0.04 },
    { label: 'Unranked (Invisible)', ctr: 0.005 },
  ];

  // Calculations
  const results = useMemo(() => {
    const currentCtr = rankTierLabels[currentRankTier].ctr;
    const top3Ctr = 0.44; // Google empirical benchmark: 44% of local clicks go to Top 3 Map Pack

    const currentMonthlyClicks = searchVolume * currentCtr;
    const top3MonthlyClicks = searchVolume * top3Ctr;
    const missedMonthlyClicks = Math.max(0, top3MonthlyClicks - currentMonthlyClicks);

    // Call / Inquiry conversion rate from click (~18% for high-intent local services)
    const inquiryRate = 0.18;
    const currentMonthlyInquiries = currentMonthlyClicks * inquiryRate;
    const top3MonthlyInquiries = top3MonthlyClicks * inquiryRate;
    const missedMonthlyInquiries = Math.round(missedMonthlyClicks * inquiryRate);

    // Closed deals
    const incrementalClosedDeals = (missedMonthlyInquiries * (closeRate / 100));
    const additionalMonthlyPipeline = incrementalClosedDeals * customerLtv;
    const additionalAnnualPipeline = additionalMonthlyPipeline * 12;

    return {
      currentMonthlyInquiries: Math.round(currentMonthlyInquiries),
      top3MonthlyInquiries: Math.round(top3MonthlyInquiries),
      missedMonthlyInquiries,
      incrementalClosedDeals: incrementalClosedDeals.toFixed(1),
      additionalMonthlyPipeline,
      additionalAnnualPipeline,
    };
  }, [searchVolume, currentRankTier, customerLtv, closeRate]);

  return (
    <section className={`pp-sec ${className}`} style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
      <div className="pp-wrap">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
          <div className="rv-badge" style={{ marginBottom: '14px' }}>
            <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
            </svg>
            <span>Local Search Market Potential</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
            {city ? `${city} ` : ''}Google Map Pack Opportunity Estimator
          </h2>
          <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
            Discover how many high-intent commercial calls and qualified client inquiries your competitors win every month from top 3 Map Pack rankings:
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
              {/* Search Volume Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label htmlFor="seo-vol-input" style={{ fontSize: '13.5px', fontWeight: 700, color: '#141414' }}>
                    Monthly High-Intent Keyword Volume
                  </label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#FF5622', fontFamily: 'var(--pp-mono, monospace)' }}>
                    {searchVolume.toLocaleString()} searches/mo
                  </span>
                </div>
                <input
                  id="seo-vol-input"
                  type="range"
                  min={500}
                  max={20000}
                  step={100}
                  value={searchVolume}
                  onChange={(e) => setSearchVolume(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF5622', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8E8E9F', marginTop: '4px' }}>
                  <span>500/mo</span>
                  <span>10,000/mo</span>
                  <span>20,000+/mo</span>
                </div>
              </div>

              {/* Current Local Rank Position */}
              <div>
                <label htmlFor="seo-rank-select" style={{ fontSize: '13.5px', fontWeight: 700, color: '#141414', display: 'block', marginBottom: '8px' }}>
                  Current Local Search Visibility
                </label>
                <select
                  id="seo-rank-select"
                  value={currentRankTier}
                  onChange={(e) => setCurrentRankTier(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #D1D1DB',
                    background: '#FFFFFF',
                    color: '#141414',
                    fontSize: '13.5px',
                    fontWeight: 600,
                  }}
                >
                  {rankTierLabels.map((t, idx) => (
                    <option key={idx} value={idx}>
                      {t.label} (Captures {(t.ctr * 100).toFixed(1)}% of clicks)
                    </option>
                  ))}
                </select>
              </div>

              {/* Average Customer LTV */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label htmlFor="seo-ltv-input" style={{ fontSize: '13.5px', fontWeight: 700, color: '#141414' }}>
                    Average Client / Deal Value (LTV)
                  </label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#FF5622', fontFamily: 'var(--pp-mono, monospace)' }}>
                    {sym}{customerLtv.toLocaleString()}
                  </span>
                </div>
                <input
                  id="seo-ltv-input"
                  type="range"
                  min={200}
                  max={10000}
                  step={100}
                  value={customerLtv}
                  onChange={(e) => setCustomerLtv(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF5622', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8E8E9F', marginTop: '4px' }}>
                  <span>{sym}200</span>
                  <span>{sym}5,000</span>
                  <span>{sym}10,000+</span>
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
                  Estimated Annual Pipeline Opportunity
                </span>
                <div style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', marginTop: '4px', lineHeight: 1.1 }}>
                  +{sym}{Math.round(results.additionalAnnualPipeline).toLocaleString()}
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#A0A0B0', marginLeft: '6px' }}>/ year</span>
                </div>
                <p style={{ fontSize: '12px', color: '#8E8E9F', margin: '4px 0 0' }}>
                  Projected revenue captured by ascending into Top 3 Google Map Pack.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', borderTop: '1px solid #2E2E33', paddingTop: '16px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#8E8E9F', display: 'block' }}>Missed Inquiries</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#E11D48' }}>
                    ~{results.missedMonthlyInquiries} calls/mo
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#8E8E9F', display: 'block' }}>Top 3 Potential</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#10B981' }}>
                    {results.top3MonthlyInquiries} calls/mo
                  </span>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #2E2E33', paddingTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '6px' }}>
                  <span style={{ color: '#A0A0B0' }}>Monthly Pipeline Gain:</span>
                  <span style={{ fontWeight: 700, color: '#FFFFFF' }}>+{sym}{Math.round(results.additionalMonthlyPipeline).toLocaleString()}/mo</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#A0A0B0' }}>Target Map Pack Share:</span>
                  <span style={{ fontWeight: 700, color: '#10B981' }}>44.0% CTR (Top 3 Positions)</span>
                </div>
              </div>

              <div style={{ marginTop: '8px' }}>
                <ModalCTAButton label="Claim Local Ranking Plan" region={region} btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
