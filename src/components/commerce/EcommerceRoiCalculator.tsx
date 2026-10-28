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
  { id: 'magento', label: 'Magento 1 / 2 (Adobe)' },
  { id: 'woocommerce', label: 'WooCommerce' },
  { id: 'shopify', label: 'Legacy Shopify (Non-Plus)' },
  { id: 'bigcommerce', label: 'BigCommerce Standard' },
  { id: 'salesforce', label: 'Salesforce (SFCC)' },
  { id: 'other', label: 'Custom / Legacy Monolith' },
];

/** Returns a finite number above zero, or null when the field is empty or invalid. */
function toPositive(value: string): number | null {
  if (value.trim() === '') return null;
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

const NUMBER_INPUT_CLASS =
  'w-full px-3 py-2.5 rounded-lg border border-[#E7DED6] bg-white font-mono text-sm text-[#14110F] focus:border-[#F05A28] focus:outline-none';

const TARGET_STACKS = [
  { id: 'shopify-plus', label: 'Shopify Plus (Optimized)' },
  { id: 'bigcommerce-b2b', label: 'BigCommerce B2B Edition' },
  { id: 'headless', label: 'Composable Headless (Next.js)' },
  { id: 'omnichannel', label: 'Omnichannel Storefront + Marketplaces' },
];

export default function EcommerceRoiCalculator({
  className = '',
  defaultPlatform = 'magento',
  defaultTarget = 'shopify-plus',
  source = 'ecommerce_roi_calculator',
}: EcommerceRoiCalculatorProps) {
  const { openModal } = useContactModal();

  // Visitor inputs start empty. Nothing is prefilled.
  const [annualRevenueInput, setAnnualRevenueInput] = useState<string>('');
  const [aovInput, setAovInput] = useState<string>('');
  const [monthlySpendInput, setMonthlySpendInput] = useState<string>('');
  // Assumptions the visitor sets and can edit. No built-in uplift.
  const [liftPercentInput, setLiftPercentInput] = useState<string>('');
  const [spendCutPercentInput, setSpendCutPercentInput] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>(defaultPlatform);
  const [selectedTarget, setSelectedTarget] = useState<string>(defaultTarget);

  // Lead capture state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const revenueSliderId = useId();
  const aovSliderId = useId();
  const spendInputId = useId();
  const liftInputId = useId();
  const spendCutInputId = useId();

  const currentPlatformObj = CURRENT_PLATFORMS.find((p) => p.id === selectedPlatform) || CURRENT_PLATFORMS[0];
  const targetStackObj = TARGET_STACKS.find((t) => t.id === selectedTarget) || TARGET_STACKS[0];

  // Estimates use only the visitor's own figures and the assumptions they type.
  const revenueValue = toPositive(annualRevenueInput);
  const liftValue = toPositive(liftPercentInput);
  const spendValue = toPositive(monthlySpendInput);
  const spendCutValue = toPositive(spendCutPercentInput);

  const hasRevenueEstimate = revenueValue !== null && liftValue !== null;
  const hasSavingsEstimate = spendValue !== null && spendCutValue !== null;

  // Numeric values the lead handler reports. Zero means the visitor left it blank.
  const annualRevenue = revenueValue ?? 0;
  const aov = toPositive(aovInput) ?? 0;
  const additionalAnnualRevenue = hasRevenueEstimate ? Math.round(annualRevenue * ((liftValue as number) / 100)) : 0;
  const annualSavings = hasSavingsEstimate
    ? Math.round((spendValue as number) * 12 * (Math.min(100, spendCutValue as number) / 100))
    : 0;
  const totalThreeYearValue = (additionalAnnualRevenue + annualSavings) * 3;

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
            Interactive Commerce ROI Model · Your Numbers Only
          </div>
          <h3 className="mt-2 text-[1.5rem] md:text-[1.85rem] font-bold text-[#14110F]" style={{ letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Estimate Your Replatforming Return
          </h3>
          <p className="mt-1 text-[0.9375rem] text-[#6E635A]">
            Type in your own store figures and the lift you expect. We do not prefill numbers, so the estimate is built only from what you enter.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#6E635A] bg-[#FFF8F5] px-3 py-2 rounded-lg border border-[#E7DED6]">
          <Gauge size={14} className="text-[#F05A28]" />
          <span>No prefilled figures</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Sliders & Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Visitor's own figures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={revenueSliderId} className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E635A] block mb-2">
                Your annual online revenue ($)
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
                className={NUMBER_INPUT_CLASS}
              />
            </div>
            <div>
              <label htmlFor={aovSliderId} className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E635A] block mb-2">
                Your average order value ($, optional)
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
                className={NUMBER_INPUT_CLASS}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={spendInputId} className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E635A] block mb-2">
                Your monthly platform, hosting and app spend ($)
              </label>
              <input
                id={spendInputId}
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                placeholder="Enter your figure"
                value={monthlySpendInput}
                onChange={(e) => setMonthlySpendInput(e.target.value)}
                className={NUMBER_INPUT_CLASS}
              />
            </div>
          </div>

          {/* Visitor's own assumptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl border border-[#E7DED6] bg-[#FFF8F5] p-4">
            <div>
              <label htmlFor={liftInputId} className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E635A] block mb-2">
                Assumption: revenue lift you expect (%)
              </label>
              <input
                id={liftInputId}
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                placeholder="Your assumption"
                value={liftPercentInput}
                onChange={(e) => setLiftPercentInput(e.target.value)}
                className={NUMBER_INPUT_CLASS}
              />
            </div>
            <div>
              <label htmlFor={spendCutInputId} className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E635A] block mb-2">
                Assumption: cut in monthly spend (%)
              </label>
              <input
                id={spendCutInputId}
                type="number"
                inputMode="decimal"
                min={0}
                max={100}
                step="any"
                placeholder="Your assumption"
                value={spendCutPercentInput}
                onChange={(e) => setSpendCutPercentInput(e.target.value)}
                className={NUMBER_INPUT_CLASS}
              />
            </div>
            <p className="sm:col-span-2 text-[11px] text-[#6E635A]">
              These two are your assumptions, not figures from us. Use a number from your own tests or a quote you trust.
            </p>
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
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Projections & Lead Form */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[#E7DED6] bg-[#FFF8F5] p-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#6E635A] font-bold">
              Your Estimate
            </div>

            {!hasRevenueEstimate && !hasSavingsEstimate ? (
              <p className="mt-4 rounded-xl bg-white border border-[#E7DED6] p-4 text-sm text-[#46403B]">
                Enter your own numbers to see an estimate. We do not prefill figures.
              </p>
            ) : (
              <>
                {/* Metrics Grid */}
                <div className="mt-4 grid grid-cols-2 gap-4 border-b border-[#E7DED6] pb-6">
                  <div>
                    <div className="text-[11px] font-mono text-[#6E635A]">Revenue lift per year</div>
                    {hasRevenueEstimate ? (
                      <>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#C94A1A] font-mono tracking-tight">
                          ${additionalAnnualRevenue.toLocaleString()}
                        </div>
                        <div className="text-[11px] text-[#6E635A] mt-0.5">At the {liftValue}% lift you assumed</div>
                      </>
                    ) : (
                      <div className="text-[11px] text-[#6E635A] mt-1">Add your revenue and expected lift.</div>
                    )}
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#6E635A]">Spend saved per year</div>
                    {hasSavingsEstimate ? (
                      <>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] font-mono tracking-tight">
                          ${annualSavings.toLocaleString()}
                        </div>
                        <div className="text-[11px] text-[#6E635A] mt-0.5">At the {Math.min(100, spendCutValue as number)}% cut you assumed</div>
                      </>
                    ) : (
                      <div className="text-[11px] text-[#6E635A] mt-1">Add your monthly spend and expected cut.</div>
                    )}
                  </div>
                </div>

                {/* 3-Year Total Box */}
                <div className="mt-4 p-4 rounded-xl bg-white border border-[#E7DED6]">
                  <div className="text-[11px] font-mono text-[#6E635A] uppercase tracking-wider">Three years at the same rate</div>
                  <div className="text-xl sm:text-2xl font-black text-[#14110F] font-mono">
                    ${totalThreeYearValue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-[#6E635A] mt-0.5">
                    Your figures times three, before build cost. An estimate, not a promise.
                  </div>
                </div>
              </>
            )}
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
