'use client';

import React, { useState, useMemo } from 'react';
import { submitLead } from '@/utils/submitLead';
import { ArrowRight, CheckCircle2, Zap, AlertTriangle, TrendingUp } from 'lucide-react';

interface Props {
  source?: string;
  className?: string;
}

export default function EcommerceSpeedCalculator({
  source = 'ecommerce_speed_calculator_component',
  className = '',
}: Props) {
  // Inputs
  const [currentLcp, setCurrentLcp] = useState<number>(3.6); // seconds
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(100000);
  const [currentConversionRate, setCurrentConversionRate] = useState<number>(1.8); // %
  const [aov, setAov] = useState<number>(95); // $
  const [targetLcp, setTargetLcp] = useState<number>(0.9); // seconds

  // Lead capture state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Calculation Logic (Based on Google & Walmart research: every 100ms improvement = +1% conversion lift up to 2.5x)
  const results = useMemo(() => {
    const currentOrdersMonthly = (monthlyVisitors * (currentConversionRate / 100));
    const currentMonthlyRevenue = currentOrdersMonthly * aov;
    const currentAnnualRevenue = currentMonthlyRevenue * 12;

    // Latency delta in 100ms increments
    const latencyReductionSeconds = Math.max(0, currentLcp - targetLcp);
    const speedImprovementHundredMs = latencyReductionSeconds * 10;
    
    // Diminishing returns conversion lift model (approx 0.85% lift per 100ms speedup)
    const conversionLiftPercent = Math.min(65, speedImprovementHundredMs * 0.85);
    const projectedConversionRate = currentConversionRate * (1 + conversionLiftPercent / 100);
    
    const projectedOrdersMonthly = (monthlyVisitors * (projectedConversionRate / 100));
    const projectedMonthlyRevenue = projectedOrdersMonthly * aov;
    const projectedAnnualRevenue = projectedMonthlyRevenue * 12;

    const additionalAnnualRevenue = projectedAnnualRevenue - currentAnnualRevenue;
    const lostAnnualRevenue = additionalAnnualRevenue; // Revenue currently lost to slow load time

    return {
      currentAnnualRevenue,
      projectedAnnualRevenue,
      additionalAnnualRevenue,
      lostAnnualRevenue,
      conversionLiftPercent,
      projectedConversionRate,
    };
  }, [currentLcp, targetLcp, monthlyVisitors, currentConversionRate, aov]);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await submitLead({
        name: fullName,
        email,
        company: storeUrl,
        service: 'Core Web Vitals & Speed Optimization',
        message: `Speed Calculator Audit: Current LCP: ${currentLcp}s -> Target: ${targetLcp}s, Visitors: ${monthlyVisitors.toLocaleString()}/mo, Current Conv: ${currentConversionRate}%, AOV: $${aov}. Projected Annual Revenue Uplift: $${Math.round(results.additionalAnnualRevenue).toLocaleString()}/yr (+${results.conversionLiftPercent.toFixed(1)}% Lift).`,
        source: `${source}_speed_calc_capture`,
        region: 'us',
      });

      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`rounded-2xl border border-[#E7DED6] bg-white p-6 md:p-10 shadow-xl shadow-[#14110F]/5 ${className}`.trim()}
      style={{ maxWidth: '1100px', margin: '0 auto' }}
    >
      <div className="text-center mb-8">
        <span className="inline-block font-mono text-xs uppercase tracking-wider text-[#FF5500] font-semibold mb-2">
          // Interactive Performance ROI Modeling
        </span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#14110F]">
          Mobile Speed &amp; Conversion Loss Calculator
        </h2>
        <p className="font-sans text-sm md:text-base text-[#4A4540] max-w-2xl mx-auto mt-2">
          Calculate how much annual revenue your store loses to mobile page load latency (LCP / INP) and model the conversion uplift of sub-second edge rendering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Sliders */}
        <div className="lg:col-span-7 space-y-6">
          {/* Current LCP Speed Slider */}
          <div className="rounded-xl border border-[#E7DED6] bg-[#FAF8F5] p-4 md:p-5">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="current-lcp-input" className="font-serif font-bold text-sm text-[#14110F] flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Current Mobile LCP Load Time:
              </label>
              <span className="font-mono font-bold text-[#FF5500] text-sm bg-white px-2.5 py-1 rounded border border-[#E7DED6]">
                {currentLcp.toFixed(1)}s
              </span>
            </div>
            <input
              id="current-lcp-input"
              type="range"
              min="1.2"
              max="7.0"
              step="0.1"
              value={currentLcp}
              onChange={(e) => setCurrentLcp(parseFloat(e.target.value))}
              className="w-full accent-[#FF5500] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-[#7A7269] mt-1">
              <span>1.2s (Fast)</span>
              <span>3.5s (Average DTC)</span>
              <span>7.0s (Severe Latency)</span>
            </div>
          </div>

          {/* Monthly Traffic Slider */}
          <div className="rounded-xl border border-[#E7DED6] bg-[#FAF8F5] p-4 md:p-5">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="monthly-visitors-input" className="font-serif font-bold text-sm text-[#14110F]">
                Monthly Mobile Visitors:
              </label>
              <span className="font-mono font-bold text-[#14110F] text-sm bg-white px-2.5 py-1 rounded border border-[#E7DED6]">
                {monthlyVisitors.toLocaleString()}
              </span>
            </div>
            <input
              id="monthly-visitors-input"
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(parseInt(e.target.value, 10))}
              className="w-full accent-[#FF5500] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-[#7A7269] mt-1">
              <span>10k</span>
              <span>250k</span>
              <span>500k</span>
              <span>1M+</span>
            </div>
          </div>

          {/* Current Conversion Rate & AOV Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#E7DED6] bg-[#FAF8F5] p-4">
              <label htmlFor="current-conv-input" className="block font-serif font-bold text-xs text-[#14110F] mb-1">
                Current Mobile Conversion Rate:
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="current-conv-input"
                  type="number"
                  min="0.2"
                  max="10.0"
                  step="0.1"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                  className="w-full font-mono text-sm font-bold bg-white border border-[#E7DED6] rounded px-3 py-1.5 text-[#14110F]"
                />
                <span className="font-mono text-xs text-[#7A7269]">%</span>
              </div>
            </div>

            <div className="rounded-xl border border-[#E7DED6] bg-[#FAF8F5] p-4">
              <label htmlFor="current-aov-input" className="block font-serif font-bold text-xs text-[#14110F] mb-1">
                Average Order Value (AOV):
              </label>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#7A7269]">$</span>
                <input
                  id="current-aov-input"
                  type="number"
                  min="10"
                  max="5000"
                  step="5"
                  value={aov}
                  onChange={(e) => setAov(Math.max(1, parseInt(e.target.value, 10) || 1))}
                  className="w-full font-mono text-sm font-bold bg-white border border-[#E7DED6] rounded px-3 py-1.5 text-[#14110F]"
                />
              </div>
            </div>
          </div>

          {/* Target Speed Goal */}
          <div className="rounded-xl border border-[#10B981]/40 bg-[#10B981]/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#10B981]" />
              <div>
                <b className="font-serif text-sm text-[#14110F] block">FactoryJet Sub-Second Optimization Target:</b>
                <span className="font-sans text-xs text-[#4A4540]">Edge CDN Caching + Next.js Server Components</span>
              </div>
            </div>
            <span className="font-mono font-bold text-sm text-[#10B981] bg-white px-2.5 py-1 rounded border border-[#10B981]/30">
              {targetLcp}s LCP
            </span>
          </div>
        </div>

        {/* Right Column: Dynamic Output & Report Capture */}
        <div className="lg:col-span-5 rounded-2xl bg-[#14110F] text-white p-6 md:p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF5500]">
                Financial Impact Audit
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#10B981] bg-[#10B981]/20 px-2 py-0.5 rounded">
                <TrendingUp className="w-3.5 h-3.5" />
                +{results.conversionLiftPercent.toFixed(1)}% Conversion Lift
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <small className="block font-mono text-xs text-white/60">Estimated Lost Annual Revenue to Latency:</small>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#FF5500] tracking-tight mt-0.5">
                  ${Math.round(results.lostAnnualRevenue).toLocaleString()}
                  <span className="text-xs font-mono font-normal text-white/60 ml-1">/ year</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <small className="block font-mono text-[11px] text-white/60">Projected Mobile CVR:</small>
                  <span className="font-mono text-sm font-bold text-white">
                    {currentConversionRate}% → <span className="text-[#10B981]">{results.projectedConversionRate.toFixed(2)}%</span>
                  </span>
                </div>
                <div>
                  <small className="block font-mono text-[11px] text-white/60">New Projected GMV:</small>
                  <span className="font-mono text-sm font-bold text-white">
                    ${Math.round(results.projectedAnnualRevenue / 1000).toLocaleString()}k/yr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="mt-6 pt-5 border-t border-white/10">
            {isSubmitted ? (
              <div className="bg-white/10 rounded-xl p-4 text-center border border-[#10B981]/40">
                <CheckCircle2 className="w-8 h-8 text-[#10B981] mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-white">Audit Report Requested!</h4>
                <p className="font-sans text-xs text-white/80 mt-1">
                  We are preparing a technical Lighthouse &amp; CWV breakdown for your store. Bhavesh will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-3">
                <p className="font-serif text-xs font-bold text-white mb-2">
                  Get a Free Lighthouse &amp; CWV Speed Audit:
                </p>
                <div>
                  <label htmlFor="speed-calc-name" className="sr-only">Your Name</label>
                  <input
                    id="speed-calc-name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full font-sans text-xs bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
                <div>
                  <label htmlFor="speed-calc-email" className="sr-only">Work Email</label>
                  <input
                    id="speed-calc-email"
                    type="email"
                    required
                    placeholder="Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full font-sans text-xs bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
                <div>
                  <label htmlFor="speed-calc-url" className="sr-only">Store URL (e.g. brand.com)</label>
                  <input
                    id="speed-calc-url"
                    type="text"
                    placeholder="Store URL (e.g. brand.com)"
                    value={storeUrl}
                    onChange={(e) => setStoreUrl(e.target.value)}
                    className="w-full font-sans text-xs bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
                {errorMsg && <p className="text-red-400 text-[11px]">{errorMsg}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-serif font-bold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition duration-150 disabled:opacity-50"
                >
                  {isSubmitting ? 'Calculating...' : 'Send Full Speed & Profit Audit'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
