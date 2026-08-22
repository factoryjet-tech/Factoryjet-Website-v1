'use client';

import React, { useState, useId } from 'react';
import { ShoppingBag, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, DollarSign, Layers, Gauge } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { submitLead } from '@/utils/submitLead';

interface EcommerceRoiCalculatorProps {
  className?: string;
  defaultPlatform?: 'shopify' | 'magento' | 'woocommerce' | 'bigcommerce' | 'salesforce' | 'other';
  defaultTarget?: 'shopify-plus' | 'bigcommerce-b2b' | 'headless' | 'omnichannel';
  source?: string;
}

const CURRENT_PLATFORMS = [
  { id: 'magento', label: 'Magento 1 / 2 (Adobe)', avgMaintenance: 3500, speedPenalty: 0.007 },
  { id: 'woocommerce', label: 'WooCommerce', avgMaintenance: 1200, speedPenalty: 0.005 },
  { id: 'shopify', label: 'Legacy Shopify (Non-Plus)', avgMaintenance: 800, speedPenalty: 0.003 },
  { id: 'bigcommerce', label: 'BigCommerce Standard', avgMaintenance: 900, speedPenalty: 0.003 },
  { id: 'salesforce', label: 'Salesforce (SFCC)', avgMaintenance: 6500, speedPenalty: 0.004 },
  { id: 'other', label: 'Custom / Legacy Monolith', avgMaintenance: 4000, speedPenalty: 0.008 },
];

const TARGET_STACKS = [
  { id: 'shopify-plus', label: 'Shopify Plus (Optimized)', crLift: 0.0055, feeEfficiency: 0.4 },
  { id: 'bigcommerce-b2b', label: 'BigCommerce B2B Edition', crLift: 0.0065, feeEfficiency: 0.5 },
  { id: 'headless', label: 'Composable Headless (Next.js)', crLift: 0.0085, feeEfficiency: 0.3 },
  { id: 'omnichannel', label: 'Omnichannel Storefront + Marketplaces', crLift: 0.0075, feeEfficiency: 0.45 },
];

export default function EcommerceRoiCalculator({
  className = '',
  defaultPlatform = 'magento',
  defaultTarget = 'shopify-plus',
  source = 'ecommerce_roi_calculator',
}: EcommerceRoiCalculatorProps) {
  const { openModal } = useContactModal();

  const [annualRevenue, setAnnualRevenue] = useState<number>(2500000);
  const [aov, setAov] = useState<number>(125);
  const [selectedPlatform, setSelectedPlatform] = useState<string>(defaultPlatform);
  const [selectedTarget, setSelectedTarget] = useState<string>(defaultTarget);

  // Inefficiency toggles
  const [hasSlowSpeed, setHasSlowSpeed] = useState<boolean>(true);
  const [hasAppBloat, setHasAppBloat] = useState<boolean>(true);
  const [hasB2bFriction, setHasB2bFriction] = useState<boolean>(false);
  const [hasCheckoutFriction, setHasCheckoutFriction] = useState<boolean>(true);

  // Lead capture state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const revenueSliderId = useId();
  const aovSliderId = useId();

  const currentPlatformObj = CURRENT_PLATFORMS.find((p) => p.id === selectedPlatform) || CURRENT_PLATFORMS[0];
  const targetStackObj = TARGET_STACKS.find((t) => t.id === selectedTarget) || TARGET_STACKS[0];

  // Mathematical projections
  // Base conversion rate assumed ~1.8%
  let projectedCrLift = targetStackObj.crLift;
  if (hasSlowSpeed) projectedCrLift += 0.0025; // +0.25% for sub-second Core Web Vitals
  if (hasCheckoutFriction) projectedCrLift += 0.002; // +0.20% for 1-click checkout & payment methods
  if (hasB2bFriction) projectedCrLift += 0.003; // +0.30% for wholesale self-serve portals

  const baselineCr = 0.018;
  const newCr = baselineCr + projectedCrLift;
  const crLiftPercent = Math.round((projectedCrLift / baselineCr) * 100);

  // Additional Annual Revenue
  const additionalAnnualRevenue = Math.round(annualRevenue * (projectedCrLift / baselineCr));
  
  // App & Infrastructure Savings
  let annualSavings = Math.round(currentPlatformObj.avgMaintenance * 12 * targetStackObj.feeEfficiency);
  if (hasAppBloat) annualSavings += 8400; // eliminate $700/mo duplicate plugins

  // Total Net 3-Year Value
  const totalThreeYearValue = (additionalAnnualRevenue + annualSavings) * 3;
  const estimatedPaybackMonths = Math.max(2, Math.min(8, Math.round((45000 / (additionalAnnualRevenue / 12 + annualSavings / 12)) * 10) / 10));

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
          event: 'ecommerce_roi_calculator_submit',
          source,
          currentPlatform: selectedPlatform,
          targetStack: selectedTarget,
          annualRevenue,
          aov,
          additionalAnnualRevenue,
          annualSavings,
        });
      }

      await submitLead({
        name: fullName,
        email,
        company: storeUrl,
        service: `Ecommerce Replatforming: ${currentPlatformObj.label} -> ${targetStackObj.label}`,
        message: `Calculated ROI: Current GMV: $${annualRevenue.toLocaleString()}, AOV: $${aov}, Platform: ${currentPlatformObj.label}, Target: ${targetStackObj.label}. Est Additional Revenue: $${additionalAnnualRevenue.toLocaleString()}/yr, App/Infra Savings: $${annualSavings.toLocaleString()}/yr, 3-Yr Value: $${totalThreeYearValue.toLocaleString()}`,
        source,
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
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#E7DED6]/70 pb-6">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em]"
            style={{ color: '#B23E13', background: 'rgba(240,90,40,0.08)', border: '1px solid rgba(240,90,40,0.22)' }}
          >
            <Sparkles size={11} className="text-[#F05A28]" />
            Interactive Commerce ROI Model · US Operations
          </div>
          <h3 className="mt-2 text-[1.5rem] md:text-[1.85rem] font-bold text-[#14110F]" style={{ letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Calculate Your Revenue Lift &amp; Replatforming Payback
          </h3>
          <p className="mt-1 text-[0.9375rem] text-[#6E635A]">
            Model the financial impact of modernizing from legacy monoliths to high-converting commerce engines.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#6E635A] bg-[#FFF8F5] px-3 py-2 rounded-lg border border-[#E7DED6]">
          <Gauge size={14} className="text-[#F05A28]" />
          <span>Sub-second LCP benchmarked</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Sliders & Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Revenue Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={revenueSliderId} className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E635A]">
                Annual Online Revenue (GMV)
              </label>
              <span className="font-mono text-base font-bold text-[#14110F] bg-[#FFF8F5] px-2.5 py-0.5 rounded border border-[#E7DED6]">
                ${(annualRevenue / 1000000).toFixed(2)}M / yr
              </span>
            </div>
            <input
              id={revenueSliderId}
              type="range"
              min={250000}
              max={15000000}
              step={250000}
              value={annualRevenue}
              onChange={(e) => setAnnualRevenue(Number(e.target.value))}
              className="w-full accent-[#F05A28] cursor-pointer h-2 bg-[#E7DED6] rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[11px] font-mono text-[#6E635A] mt-1">
              <span>$250k</span>
              <span>$5M</span>
              <span>$10M</span>
              <span>$15M+</span>
            </div>
          </div>

          {/* AOV Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={aovSliderId} className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E635A]">
                Average Order Value (AOV)
              </label>
              <span className="font-mono text-base font-bold text-[#14110F] bg-[#FFF8F5] px-2.5 py-0.5 rounded border border-[#E7DED6]">
                ${aov}
              </span>
            </div>
            <input
              id={aovSliderId}
              type="range"
              min={30}
              max={600}
              step={10}
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full accent-[#F05A28] cursor-pointer h-2 bg-[#E7DED6] rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[11px] font-mono text-[#6E635A] mt-1">
              <span>$30</span>
              <span>$150</span>
              <span>$350</span>
              <span>$600+</span>
            </div>
          </div>

          {/* Current Platform Grid */}
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E635A] block mb-2">
              Current Commerce Engine
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CURRENT_PLATFORMS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPlatform(p.id)}
                  className={`px-3 py-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                    selectedPlatform === p.id
                      ? 'border-[#F05A28] bg-[#FFF8F5] text-[#C94A1A] font-bold shadow-sm'
                      : 'border-[#E7DED6] bg-white text-[#46403B] hover:border-[#F05A28]/40'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Target Stack Selection */}
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E635A] block mb-2">
              Target Modernized Architecture
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TARGET_STACKS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTarget(t.id)}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    selectedTarget === t.id
                      ? 'border-[#F05A28] bg-[#FFF8F5] text-[#14110F] shadow-sm ring-1 ring-[#F05A28]/30'
                      : 'border-[#E7DED6] bg-white text-[#46403B] hover:border-[#F05A28]/40'
                  }`}
                >
                  <div className="font-bold text-[#14110F]">{t.label}</div>
                  <div className="text-[11px] text-[#6E635A] mt-0.5">Est. CR Lift: +{(t.crLift * 100).toFixed(2)}%</div>
                </button>
              ))}
            </div>
          </div>

          {/* Friction Checkboxes */}
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E635A] block mb-2">
              Current Friction Points (Select All That Apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#E7DED6] text-xs text-[#46403B] cursor-pointer hover:bg-[#FFF8F5]">
                <input
                  type="checkbox"
                  checked={hasSlowSpeed}
                  onChange={(e) => setHasSlowSpeed(e.target.checked)}
                  className="rounded border-[#E7DED6] text-[#F05A28] focus:ring-[#F05A28]"
                />
                <span>Slow mobile speed (PSI &lt; 65)</span>
              </label>
              <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#E7DED6] text-xs text-[#46403B] cursor-pointer hover:bg-[#FFF8F5]">
                <input
                  type="checkbox"
                  checked={hasAppBloat}
                  onChange={(e) => setHasAppBloat(e.target.checked)}
                  className="rounded border-[#E7DED6] text-[#F05A28] focus:ring-[#F05A28]"
                />
                <span>Heavy app fees ($1k–$5k/mo)</span>
              </label>
              <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#E7DED6] text-xs text-[#46403B] cursor-pointer hover:bg-[#FFF8F5]">
                <input
                  type="checkbox"
                  checked={hasCheckoutFriction}
                  onChange={(e) => setHasCheckoutFriction(e.target.checked)}
                  className="rounded border-[#E7DED6] text-[#F05A28] focus:ring-[#F05A28]"
                />
                <span>Checkout drop-off &gt; 70%</span>
              </label>
              <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#E7DED6] text-xs text-[#46403B] cursor-pointer hover:bg-[#FFF8F5]">
                <input
                  type="checkbox"
                  checked={hasB2bFriction}
                  onChange={(e) => setHasB2bFriction(e.target.checked)}
                  className="rounded border-[#E7DED6] text-[#F05A28] focus:ring-[#F05A28]"
                />
                <span>Manual B2B wholesale orders</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Projections & Lead Form */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[#E7DED6] bg-[#FFF8F5] p-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#6E635A] font-bold">
              Projected Commercial Return
            </div>

            {/* Big Metrics Grid */}
            <div className="mt-4 grid grid-cols-2 gap-4 border-b border-[#E7DED6] pb-6">
              <div>
                <div className="text-[11px] font-mono text-[#6E635A]">Annual Revenue Lift</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#C94A1A] font-mono tracking-tight">
                  +${(additionalAnnualRevenue / 1000).toFixed(0)}k
                </div>
                <div className="text-[11px] text-[#6E635A] mt-0.5">+{crLiftPercent}% conversion lift</div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#6E635A]">Annual Cost Savings</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] font-mono tracking-tight">
                  ${(annualSavings / 1000).toFixed(0)}k
                </div>
                <div className="text-[11px] text-[#6E635A] mt-0.5">App &amp; infra reduction</div>
              </div>
            </div>

            {/* 3-Year Total Box */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-[#E7DED6] flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#6E635A] uppercase tracking-wider">3-Year Net Value Creation</div>
                <div className="text-xl sm:text-2xl font-black text-[#14110F] font-mono">
                  ${(totalThreeYearValue / 1000000).toFixed(2)}M
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-mono text-[#6E635A]">Payback Window</div>
                <div className="text-sm font-bold text-[#C94A1A] font-mono">~{estimatedPaybackMonths} Months</div>
              </div>
            </div>
          </div>

          {/* Lead Capture or Success State */}
          <div className="mt-6 border-t border-[#E7DED6] pt-5">
            {isSubmitted ? (
              <div className="rounded-xl bg-white border border-[#E7DED6] p-4 text-center">
                <CheckCircle2 size={28} className="mx-auto text-emerald-600 mb-2" />
                <h4 className="font-bold text-sm text-[#14110F]">Scoping Request Received</h4>
                <p className="text-xs text-[#6E635A] mt-1">
                  We are preparing your platform architecture blueprint and fixed-cost proposal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="text-xs font-bold text-[#14110F]">Get a detailed platform audit &amp; migration scope:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E7DED6] bg-white text-[#14110F] focus:border-[#F05A28] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E7DED6] bg-white text-[#14110F] focus:border-[#F05A28] focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Store URL (e.g., yourbrand.com)"
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#E7DED6] bg-white text-[#14110F] focus:border-[#F05A28] focus:outline-none"
                />

                {errorMsg && <div className="text-[11px] text-red-600">{errorMsg}</div>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-[#F05A28] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#C94A1A] transition-all shadow-md shadow-[#F05A28]/20 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    'Preparing Scoping Model...'
                  ) : (
                    <>
                      <span>Get Custom Architecture &amp; Scoping Model</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
                <div className="text-[10px] text-center text-[#6E635A] flex items-center justify-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-600" />
                  <span>Fixed-price proposal before any build starts. No lock-in.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
