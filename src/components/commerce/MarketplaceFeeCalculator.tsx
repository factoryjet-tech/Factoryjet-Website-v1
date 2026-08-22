'use client';

import React, { useState, useId } from 'react';
import { Package, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, DollarSign, Layers } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { submitLead } from '@/utils/submitLead';

interface MarketplaceFeeCalculatorProps {
  className?: string;
  source?: string;
}

const CATEGORIES = [
  { id: 'apparel', label: 'Apparel & Fashion', amazonRef: 0.17, walmartRef: 0.15, targetRef: 0.15, faireRef: 0.15 },
  { id: 'beauty', label: 'Beauty & Personal Care', amazonRef: 0.15, walmartRef: 0.15, targetRef: 0.15, faireRef: 0.15 },
  { id: 'home', label: 'Home, Decor & Kitchen', amazonRef: 0.15, walmartRef: 0.15, targetRef: 0.15, faireRef: 0.15 },
  { id: 'electronics', label: 'Electronics & Accessories', amazonRef: 0.08, walmartRef: 0.10, targetRef: 0.10, faireRef: 0.12 },
  { id: 'toys', label: 'Toys, Games & Baby', amazonRef: 0.15, walmartRef: 0.15, targetRef: 0.15, faireRef: 0.15 },
];

const WEIGHT_TIERS = [
  { id: 'small', label: 'Small (< 1 lb)', fba: 3.86, wfs: 3.45, dvs3pl: 5.25, dtc3pl: 5.50 },
  { id: 'standard', label: 'Standard (1 - 2 lbs)', fba: 5.40, wfs: 4.85, dvs3pl: 6.80, dtc3pl: 7.00 },
  { id: 'medium', label: 'Medium (2 - 5 lbs)', fba: 7.25, wfs: 6.50, dvs3pl: 8.90, dtc3pl: 9.20 },
  { id: 'heavy', label: 'Bulky / Heavy (5+ lbs)', fba: 11.50, wfs: 10.20, dvs3pl: 13.50, dtc3pl: 14.00 },
];

export default function MarketplaceFeeCalculator({
  className = '',
  source = 'marketplace_fee_calculator',
}: MarketplaceFeeCalculatorProps) {
  const { openModal } = useContactModal();

  const [retailPrice, setRetailPrice] = useState<number>(65);
  const [cogs, setCogs] = useState<number>(18);
  const [monthlyUnits, setMonthlyUnits] = useState<number>(1000);
  const [selectedCategory, setSelectedCategory] = useState<string>('home');
  const [selectedWeight, setSelectedWeight] = useState<string>('standard');

  // Lead capture state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const priceSliderId = useId();
  const cogsSliderId = useId();
  const volumeSliderId = useId();

  const activeCategory = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[2];
  const activeWeight = WEIGHT_TIERS.find((w) => w.id === selectedWeight) || WEIGHT_TIERS[1];

  // Computations
  // 1. Amazon FBA: Retail - COGS - (Retail * amazonRef) - fba - monthly storage ($0.30/unit)
  const amazonFee = retailPrice * activeCategory.amazonRef + activeWeight.fba + 0.30;
  const amazonNetUnit = Math.max(0, retailPrice - cogs - amazonFee);
  const amazonMarginPct = retailPrice > 0 ? (amazonNetUnit / retailPrice) * 100 : 0;
  const amazonMonthlyProfit = amazonNetUnit * monthlyUnits;

  // 2. Walmart WFS: Retail - COGS - (Retail * walmartRef) - wfs - storage ($0.25/unit)
  const walmartFee = retailPrice * activeCategory.walmartRef + activeWeight.wfs + 0.25;
  const walmartNetUnit = Math.max(0, retailPrice - cogs - walmartFee);
  const walmartMarginPct = retailPrice > 0 ? (walmartNetUnit / retailPrice) * 100 : 0;
  const walmartMonthlyProfit = walmartNetUnit * monthlyUnits;

  // 3. Target Plus (DVS): Retail - COGS - (Retail * targetRef) - dvs3pl
  const targetFee = retailPrice * activeCategory.targetRef + activeWeight.dvs3pl;
  const targetNetUnit = Math.max(0, retailPrice - cogs - targetFee);
  const targetMarginPct = retailPrice > 0 ? (targetNetUnit / retailPrice) * 100 : 0;
  const targetMonthlyProfit = targetNetUnit * monthlyUnits;

  // 4. Faire Wholesale (B2B): Sold at 50% wholesale price ($32.50) - COGS - 15% repeat fee
  const wholesalePrice = retailPrice * 0.50;
  const faireFee = wholesalePrice * activeCategory.faireRef;
  const faireNetUnit = Math.max(0, wholesalePrice - cogs - faireFee);
  const faireMarginPct = wholesalePrice > 0 ? (faireNetUnit / wholesalePrice) * 100 : 0;
  const faireMonthlyProfit = faireNetUnit * monthlyUnits;

  // 5. Shopify DTC Storefront: Retail - COGS - (2.9% + $0.30 payment fee) - dtc3pl
  const shopifyFee = retailPrice * 0.029 + 0.30 + activeWeight.dtc3pl;
  const shopifyNetUnit = Math.max(0, retailPrice - cogs - shopifyFee);
  const shopifyMarginPct = retailPrice > 0 ? (shopifyNetUnit / retailPrice) * 100 : 0;
  const shopifyMonthlyProfit = shopifyNetUnit * monthlyUnits;

  const channels = [
    { name: 'Shopify DTC', type: 'Direct Brand Store', netUnit: shopifyNetUnit, marginPct: shopifyMarginPct, monthlyProfit: shopifyMonthlyProfit, color: '#10B981', highlight: true },
    { name: 'Target Plus', type: 'Curated DVS Retail', netUnit: targetNetUnit, marginPct: targetMarginPct, monthlyProfit: targetMonthlyProfit, color: '#E11D48', highlight: false },
    { name: 'Walmart WFS', type: 'Walmart Fulfillment', netUnit: walmartNetUnit, marginPct: walmartMarginPct, monthlyProfit: walmartMonthlyProfit, color: '#0284C7', highlight: false },
    { name: 'Amazon FBA', type: 'Prime Marketplace', netUnit: amazonNetUnit, marginPct: amazonMarginPct, monthlyProfit: amazonMonthlyProfit, color: '#F59E0B', highlight: false },
    { name: 'Faire B2B', type: 'Wholesale 50% MSRP', netUnit: faireNetUnit, marginPct: faireMarginPct, monthlyProfit: faireMonthlyProfit, color: '#8B5CF6', highlight: false },
  ];

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
        service: 'Marketplace Management & Fee Optimization',
        message: `Marketplace Fee Calculator Lead: Retail: $${retailPrice}, COGS: $${cogs}, Volume: ${monthlyUnits}/mo, Category: ${selectedCategory}, Weight: ${selectedWeight}, Shopify Mo: $${Math.round(shopifyMonthlyProfit)}, Amazon Mo: $${Math.round(amazonMonthlyProfit)}, Target Mo: $${Math.round(targetMonthlyProfit)}`,
        source: `${source}_calculator_capture`,
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
      className={`rounded-2xl border border-[#E7DED6] bg-white p-6 shadow-xl md:p-10 ${className}`}
      style={{ fontFamily: 'var(--pp-body, sans-serif)' }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E7DED6] pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF8F5] px-3 py-1 font-mono text-xs font-semibold text-[#B23E13]">
            <Sparkles className="h-3.5 w-3.5" /> Multichannel Margin Model
          </span>
          <h3 className="mt-2 font-fj-display text-2xl font-bold text-[#14110F] md:text-3xl">
            Multichannel Marketplace Fee &amp; Net Margin Calculator
          </h3>
          <p className="mt-1 text-sm text-[#6E635A]">
            Compare real unit economics, platform commissions, and fulfillment costs across Amazon, Walmart, Target Plus, Faire, and Shopify DTC.
          </p>
        </div>
      </div>

      {/* Grid: Inputs vs Results */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Left Column: Interactive Inputs */}
        <div className="space-y-6 lg:col-span-6">
          {/* Retail Price Slider */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor={priceSliderId} className="text-sm font-semibold text-[#14110F]">
                Retail Selling Price (MSRP)
              </label>
              <span className="font-mono text-lg font-bold text-[#B23E13]">
                ${retailPrice.toLocaleString()}
              </span>
            </div>
            <input
              id={priceSliderId}
              type="range"
              min={10}
              max={500}
              step={5}
              value={retailPrice}
              onChange={(e) => setRetailPrice(Number(e.target.value))}
              className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#F0E9E2] accent-[#B23E13]"
            />
          </div>

          {/* Unit COGS Slider */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor={cogsSliderId} className="text-sm font-semibold text-[#14110F]">
                Unit Cost of Goods Sold (COGS)
              </label>
              <span className="font-mono text-lg font-bold text-[#46403B]">
                ${cogs.toLocaleString()}
              </span>
            </div>
            <input
              id={cogsSliderId}
              type="range"
              min={2}
              max={Math.min(250, retailPrice - 1)}
              step={1}
              value={cogs}
              onChange={(e) => setCogs(Number(e.target.value))}
              className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#F0E9E2] accent-[#B23E13]"
            />
          </div>

          {/* Monthly Unit Sales Slider */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor={volumeSliderId} className="text-sm font-semibold text-[#14110F]">
                Monthly Unit Sales Volume
              </label>
              <span className="font-mono text-lg font-bold text-[#14110F]">
                {monthlyUnits.toLocaleString()} units
              </span>
            </div>
            <input
              id={volumeSliderId}
              type="range"
              min={100}
              max={25000}
              step={100}
              value={monthlyUnits}
              onChange={(e) => setMonthlyUnits(Number(e.target.value))}
              className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#F0E9E2] accent-[#B23E13]"
            />
          </div>

          {/* Product Category Selector */}
          <div>
            <label className="block text-sm font-semibold text-[#14110F] mb-2">
              Product Category
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-lg border px-3 py-2 text-left text-xs font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'border-[#B23E13] bg-[#FFF8F5] text-[#B23E13]'
                      : 'border-[#E7DED6] bg-white text-[#46403B] hover:border-[#6E635A]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Shipping Weight Tier Selector */}
          <div>
            <label className="block text-sm font-semibold text-[#14110F] mb-2">
              Package Shipping Weight
            </label>
            <div className="grid grid-cols-2 gap-2">
              {WEIGHT_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedWeight(tier.id)}
                  className={`rounded-lg border px-3 py-2 text-left text-xs font-medium transition-all ${
                    selectedWeight === tier.id
                      ? 'border-[#B23E13] bg-[#FFF8F5] text-[#B23E13]'
                      : 'border-[#E7DED6] bg-white text-[#46403B] hover:border-[#6E635A]'
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Comparative Results */}
        <div className="space-y-4 lg:col-span-6">
          <div className="rounded-xl border border-[#E7DED6] bg-[#FAF7F5] p-5">
            <h4 className="font-fj-display text-base font-bold text-[#14110F]">
              Side-by-Side Net Margin Breakdown
            </h4>
            <div className="mt-4 space-y-3">
              {channels.map((ch) => (
                <div key={ch.name} className="rounded-lg border border-[#E7DED6] bg-white p-3.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <b className="text-sm text-[#14110F]">{ch.name}</b>
                      <span className="block text-xs text-[#6E635A]">{ch.type}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-base font-bold text-[#14110F]">
                        ${ch.netUnit.toFixed(2)}/unit
                      </span>
                      <span className="block font-mono text-xs font-semibold" style={{ color: ch.color }}>
                        {ch.marginPct.toFixed(1)}% margin
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-[#F0E9E2] pt-2 text-xs">
                    <span className="text-[#6E635A]">Monthly Net Profit ({monthlyUnits} units):</span>
                    <b className="font-mono text-[#14110F]">${Math.round(ch.monthlyProfit).toLocaleString()}</b>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Capture or Consultation */}
          {!isSubmitted ? (
            <form onSubmit={handleLeadSubmit} className="rounded-xl border border-[#B23E13]/20 bg-[#FFF8F5] p-5">
              <h4 className="font-fj-display text-sm font-bold text-[#14110F]">
                Get a Custom Multi-Channel Profit Architecture Review
              </h4>
              <p className="mt-1 text-xs text-[#6E635A]">
                We analyze catalog SKU profitability across all channels, format EDI connectors, and build unified inventory sync.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="rounded-lg border border-[#E7DED6] bg-white px-3 py-2 text-xs focus:border-[#B23E13] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-lg border border-[#E7DED6] bg-white px-3 py-2 text-xs focus:border-[#B23E13] focus:outline-none"
                />
              </div>
              <div className="mt-2">
                <input
                  type="url"
                  placeholder="Store / Brand Website URL (e.g. yourbrand.com)"
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(e.target.value)}
                  className="w-full rounded-lg border border-[#E7DED6] bg-white px-3 py-2 text-xs focus:border-[#B23E13] focus:outline-none"
                />
              </div>
              {errorMsg && <p className="mt-2 text-xs text-red-600">{errorMsg}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#B23E13] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#8F320F] disabled:opacity-50"
              >
                {isSubmitting ? 'Calculating...' : 'Request Scoped Multichannel Plan'} <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          ) : (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
              <CheckCircle2 className="mx-auto h-6 w-6 text-emerald-600" />
              <b className="mt-2 block text-sm font-semibold text-emerald-900">Profit Model Received</b>
              <p className="mt-1 text-xs text-emerald-700">
                Bhavesh will review your channel unit economics and send a scoped multi-channel inventory architecture roadmap within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
