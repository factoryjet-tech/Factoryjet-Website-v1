'use client';

import React, { useState, useId, useMemo } from 'react';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  DollarSign,
  Zap,
  Users,
  TrendingUp,
  Sliders,
  Database,
  Building2,
  Calendar,
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { submitLead } from '@/utils/submitLead';

interface AiAgentRoiCalculatorProps {
  className?: string;
  defaultWorkflow?: 'support' | 'sales' | 'erp' | 'commerce';
  source?: string;
}

const SYSTEMS = [
  { name: 'Zendesk', type: 'Help Desk' },
  { name: 'HubSpot', type: 'CRM & Sales' },
  { name: 'Salesforce', type: 'Enterprise CRM' },
  { name: 'Gorgias', type: 'E-Commerce Support' },
  { name: 'Intercom', type: 'Live Chat' },
  { name: 'Oracle NetSuite', type: 'Enterprise ERP' },
  { name: 'SAP S/4HANA', type: 'Manufacturing ERP' },
  { name: 'Shopify Plus', type: 'Commerce Platform' },
  { name: 'Custom SQL / API', type: 'Internal Stack' },
];

const WORKFLOWS = [
  {
    id: 'support',
    label: 'Customer Support Tickets',
    avgMins: 9,
    baseDeflection: 0.74,
    badge: 'High Volume',
    desc: 'Order status, returns & RMAs, billing questions, tracking lookups, and account changes.',
    devCostEstimate: 22000,
  },
  {
    id: 'sales',
    label: 'Inbound Sales & SDR Leads',
    avgMins: 14,
    baseDeflection: 0.68,
    badge: 'Revenue Velocity',
    desc: 'Instant lead response under 30s, enrichment, B2B qualification criteria, and calendar booking.',
    devCostEstimate: 24000,
  },
  {
    id: 'erp',
    label: 'Back-Office & Invoice Matching',
    avgMins: 16,
    baseDeflection: 0.78,
    badge: 'Heavy Operations',
    desc: 'Purchase order extraction, supplier 3-way matching, inventory adjustments, and vendor triage.',
    devCostEstimate: 28000,
  },
  {
    id: 'commerce',
    label: 'Catalog & Inventory Operations',
    avgMins: 11,
    baseDeflection: 0.82,
    badge: 'Catalog Scale',
    desc: 'Multi-channel listing updates, inventory balance reconciliations, and repricing rules.',
    devCostEstimate: 20000,
  },
];

const VOLUME_PRESETS = [1500, 3000, 7500, 15000, 30000];
const RATE_PRESETS = [22, 28, 38, 52];

export default function AiAgentRoiCalculator({
  className = '',
  defaultWorkflow = 'support',
  source = 'ai_agent_roi_calculator',
}: AiAgentRoiCalculatorProps) {
  const { openModal } = useContactModal();

  const [ticketVolume, setTicketVolume] = useState<number>(3500);
  const [hourlyRate, setHourlyRate] = useState<number>(28);
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>(defaultWorkflow);
  const [selectedSystem, setSelectedSystem] = useState<string>('Zendesk');
  const [customDeflection, setCustomDeflection] = useState<number | null>(null);

  // Lead capture state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const volumeSliderId = useId();
  const rateSliderId = useId();
  const deflectionSliderId = useId();

  const currentWf = WORKFLOWS.find((w) => w.id === selectedWorkflow) || WORKFLOWS[0];

  const activeDeflectionDecimal = customDeflection !== null ? customDeflection / 100 : currentWf.baseDeflection;
  const activeDeflectionPercent = Math.round(activeDeflectionDecimal * 100);

  // Core Financial Modeling Computations
  const calculations = useMemo(() => {
    const monthlyDeflectedTasks = Math.round(ticketVolume * activeDeflectionDecimal);
    const monthlyHoursRecovered = Math.round((monthlyDeflectedTasks * currentWf.avgMins) / 60);
    const fullTimeEquivalents = Number((monthlyHoursRecovered / 160).toFixed(1));

    // Gross Labor Value
    const monthlyGrossLaborSavings = Math.round(monthlyHoursRecovered * hourlyRate);
    const annualGrossLaborSavings = monthlyGrossLaborSavings * 12;

    // Token & Hosting Compute Cost (estimated at $0.045 per resolved interaction)
    const tokenCostPerResolved = 0.045;
    const monthlyTokenComputeCost = Math.round(monthlyDeflectedTasks * tokenCostPerResolved + 120); // base cloud infra
    const annualTokenComputeCost = monthlyTokenComputeCost * 12;

    // Net Financial Gains
    const netAnnualSavings = Math.max(0, annualGrossLaborSavings - annualTokenComputeCost);
    const netMonthlySavings = Math.round(netAnnualSavings / 12);

    // Payback Period (Months)
    const devCost = currentWf.devCostEstimate;
    const paybackMonths = netMonthlySavings > 0 ? Number((devCost / netMonthlySavings).toFixed(1)) : 0;
    const fiveYearNetValue = netAnnualSavings * 5 - devCost;

    return {
      monthlyDeflectedTasks,
      monthlyHoursRecovered,
      fullTimeEquivalents,
      monthlyGrossLaborSavings,
      annualGrossLaborSavings,
      monthlyTokenComputeCost,
      annualTokenComputeCost,
      netAnnualSavings,
      netMonthlySavings,
      devCost,
      paybackMonths,
      fiveYearNetValue,
    };
  }, [ticketVolume, activeDeflectionDecimal, currentWf, hourlyRate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer) {
        (window as unknown as { dataLayer: Array<Record<string, unknown>> }).dataLayer.push({
          event: 'roi_calculator_submit',
          source,
          workflow: selectedWorkflow,
          system: selectedSystem,
          monthlyVolume: ticketVolume,
          hourlyRate,
          deflection: activeDeflectionPercent,
          estimatedAnnualSavings: calculations.netAnnualSavings,
        });
      }

      await submitLead({
        name: fullName,
        email,
        company,
        phone,
        service: `AI Agent ROI Audit: ${currentWf.label}`,
        message: `Calculated ROI Details:
- Workflow: ${currentWf.label}
- Primary System: ${selectedSystem}
- Monthly Volume: ${ticketVolume.toLocaleString()} interactions
- Loaded Rate: $${hourlyRate}/hr
- Deflection Rate: ${activeDeflectionPercent}%
- Projected Net Annual Savings: $${calculations.netAnnualSavings.toLocaleString()}/yr
- Hours Recovered: ${calculations.monthlyHoursRecovered.toLocaleString()} hrs/mo (${calculations.fullTimeEquivalents} FTEs)
- Est Payback Period: ~${calculations.paybackMonths} months`,
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
      className={`rounded-3xl border border-[#E7DED6] bg-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-[#14110F]/5 ${className}`.trim()}
    >
      {/* Top Banner Bar */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-[#E7DED6] pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] bg-[#FFF8F5] border border-[#F05A28]/20 mb-2">
            <Sparkles size={13} className="text-[#F05A28]" />
            Live Financial Modeling Engine &bull; US Benchmarks
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] font-heading tracking-tight">
            Calculate Your AI Agent Net Savings &amp; Payback
          </h2>
          <p className="text-sm sm:text-base text-[#46403B] mt-1">
            Adjust your monthly queue volume, loaded labor rate, and target systems to see exact cost recovery projections.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] px-4 py-2.5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6E655F]">
              Direct Code Ownership
            </span>
            <span className="text-sm font-bold text-[#F05A28] font-heading">
              100% Client Owned (No SaaS Taxes)
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Inputs (Left) vs Output Metrics (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-7 space-y-7">
          {/* 1. Workflow Selector Tabs */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#14110F]">
                1. Select Target Workflow
              </label>
              <span className="text-xs font-mono text-[#F05A28]">
                {currentWf.badge}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {WORKFLOWS.map((wf) => {
                const isSelected = selectedWorkflow === wf.id;
                return (
                  <button
                    key={wf.id}
                    type="button"
                    onClick={() => {
                      setSelectedWorkflow(wf.id);
                      setCustomDeflection(null);
                    }}
                    className={`relative p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#F05A28] bg-[#FFF8F5] shadow-md ring-2 ring-[#F05A28]/20'
                        : 'border-[#E7DED6] bg-white hover:border-[#F05A28]/40 hover:bg-[#FAFAF7]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-sm font-bold font-heading ${isSelected ? 'text-[#F05A28]' : 'text-[#14110F]'}`}>
                          {wf.label}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                        )}
                      </div>
                      <p className="text-xs text-[#46403B] leading-relaxed">
                        {wf.desc}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-[#E7DED6]/60 flex items-center justify-between text-[11px] font-mono text-[#6E655F]">
                      <span>Avg: {wf.avgMins} mins/task</span>
                      <span className="font-bold text-[#14110F]">{Math.round(wf.baseDeflection * 100)}% deflection</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. System of Record Selector */}
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#14110F] block mb-3">
              2. System of Record Integration
            </label>
            <div className="flex flex-wrap gap-2">
              {SYSTEMS.map((sys) => {
                const isSelected = selectedSystem === sys.name;
                return (
                  <button
                    key={sys.name}
                    type="button"
                    onClick={() => setSelectedSystem(sys.name)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'border-[#F05A28] bg-[#F05A28] text-white font-bold shadow-sm'
                        : 'border-[#E7DED6] bg-[#FAFAF7] text-[#46403B] hover:border-[#F05A28]/30 hover:bg-white hover:text-[#14110F]'
                    }`}
                  >
                    <span>{sys.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Monthly Volume Slider & Presets */}
          <div className="p-5 rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <label htmlFor={volumeSliderId} className="text-xs font-mono font-bold uppercase tracking-wider text-[#14110F] block">
                  3. Monthly Inbound Queue Volume
                </label>
                <span className="text-xs text-[#6E655F]">Tickets, inquiries, or transactions per month</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-2xl font-extrabold text-[#F05A28] font-heading">
                  {ticketVolume.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-[#6E655F] ml-1.5">tasks/mo</span>
              </div>
            </div>

            <input
              id={volumeSliderId}
              type="range"
              min={500}
              max={50000}
              step={500}
              value={ticketVolume}
              onChange={(e) => setTicketVolume(Number(e.target.value))}
              className="w-full h-2.5 rounded-lg appearance-none cursor-pointer bg-[#E7DED6] accent-[#F05A28] focus:outline-none"
            />

            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-[#E7DED6]/70">
              <span className="text-[11px] font-mono text-[#6E655F]">Quick Select:</span>
              <div className="flex flex-wrap gap-1.5">
                {VOLUME_PRESETS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setTicketVolume(p)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors ${
                      ticketVolume === p
                        ? 'bg-[#F05A28] text-white font-bold'
                        : 'bg-white border border-[#E7DED6] text-[#46403B] hover:border-[#F05A28]'
                    }`}
                  >
                    {p >= 1000 ? `${p / 1000}k` : p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Hourly Labor Cost Slider & Presets */}
          <div className="p-5 rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <label htmlFor={rateSliderId} className="text-xs font-mono font-bold uppercase tracking-wider text-[#14110F] block">
                  4. Loaded Hourly Cost per Human Rep / Specialist
                </label>
                <span className="text-xs text-[#6E655F]">Base salary, benefits, payroll taxes, and overhead</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-2xl font-extrabold text-[#F05A28] font-heading">
                  ${hourlyRate}
                </span>
                <span className="text-xs font-mono text-[#6E655F] ml-1.5">/ hour</span>
              </div>
            </div>

            <input
              id={rateSliderId}
              type="range"
              min={15}
              max={75}
              step={1}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2.5 rounded-lg appearance-none cursor-pointer bg-[#E7DED6] accent-[#F05A28] focus:outline-none"
            />

            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-[#E7DED6]/70">
              <span className="text-[11px] font-mono text-[#6E655F]">Industry Presets:</span>
              <div className="flex flex-wrap gap-1.5">
                {RATE_PRESETS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setHourlyRate(r)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors ${
                      hourlyRate === r
                        ? 'bg-[#F05A28] text-white font-bold'
                        : 'bg-white border border-[#E7DED6] text-[#46403B] hover:border-[#F05A28]'
                    }`}
                  >
                    ${r}/hr {r === 28 ? '(US Avg)' : ''}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Output Cards & Scoping Form */}
        <div className="lg:col-span-5 rounded-3xl border border-[#E7DED6] bg-[#FAFAF7] p-6 sm:p-7 shadow-lg flex flex-col justify-between">
          <div>
            {/* Main Highlight Hero Badge */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 translate-x-3 -translate-y-3 w-24 h-24 bg-[#F05A28]/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28]">
                  ESTIMATED ANNUAL VALUE
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold border border-emerald-200">
                  <TrendingUp size={12} /> Net ROI
                </span>
              </div>

              <div className="text-4xl sm:text-5xl font-black text-[#14110F] font-heading tracking-tight leading-none mb-2">
                ${calculations.netAnnualSavings.toLocaleString()}
                <span className="text-sm font-mono text-[#6E655F] font-normal block sm:inline sm:ml-2">/ year</span>
              </div>

              <p className="text-xs sm:text-sm text-[#46403B]">
                Estimated net savings of <strong>${calculations.netMonthlySavings.toLocaleString()}/month</strong> after deducting all token compute costs.
              </p>
            </div>

            {/* 4-Card Live Metric Bento Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-white border border-[#E7DED6] shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6E655F] uppercase font-bold mb-1">
                  <Clock size={13} className="text-[#F05A28]" /> Hours Recovered
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#14110F] font-heading">
                  {calculations.monthlyHoursRecovered.toLocaleString()}
                  <span className="text-xs font-mono font-normal text-[#6E655F] ml-1">hrs/mo</span>
                </div>
                <div className="text-[11px] text-[#6E655F] mt-0.5">
                  &asymp; {calculations.fullTimeEquivalents} Full-Time Reps
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E7DED6] shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6E655F] uppercase font-bold mb-1">
                  <Zap size={13} className="text-[#F05A28]" /> Deflection Rate
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#14110F] font-heading">
                  {activeDeflectionPercent}%
                  <span className="text-xs font-mono font-normal text-[#6E655F] ml-1">resolved</span>
                </div>
                <div className="text-[11px] text-[#6E655F] mt-0.5">
                  {calculations.monthlyDeflectedTasks.toLocaleString()} automated tasks
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E7DED6] shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6E655F] uppercase font-bold mb-1">
                  <DollarSign size={13} className="text-[#F05A28]" /> Est. Payback
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#14110F] font-heading">
                  ~{calculations.paybackMonths}
                  <span className="text-xs font-mono font-normal text-[#6E655F] ml-1">months</span>
                </div>
                <div className="text-[11px] text-[#6E655F] mt-0.5">
                  Based on milestone build
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E7DED6] shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6E655F] uppercase font-bold mb-1">
                  <ShieldCheck size={13} className="text-[#F05A28]" /> Token Cost
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#14110F] font-heading">
                  ${calculations.monthlyTokenComputeCost.toLocaleString()}
                  <span className="text-xs font-mono font-normal text-[#6E655F] ml-1">/mo</span>
                </div>
                <div className="text-[11px] text-[#6E655F] mt-0.5">
                  Pass-through zero markup
                </div>
              </div>
            </div>

            {/* Financial Breakdown Bar */}
            <div className="p-4 rounded-xl bg-white border border-[#E7DED6] mb-6 text-xs font-mono">
              <div className="flex justify-between text-[#46403B] mb-1.5">
                <span>Gross Labor Value:</span>
                <span className="font-bold text-[#14110F]">${calculations.annualGrossLaborSavings.toLocaleString()}/yr</span>
              </div>
              <div className="flex justify-between text-[#46403B] mb-2 pb-2 border-b border-[#E7DED6]">
                <span>Annual Token &amp; Cloud Infra:</span>
                <span className="text-rose-600">-${calculations.annualTokenComputeCost.toLocaleString()}/yr</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#14110F]">
                <span>5-Year Cumulative Value:</span>
                <span className="text-[#F05A28]">${calculations.fiveYearNetValue.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Lead Capture Form or Confirmation */}
          <div className="pt-4 border-t border-[#E7DED6]">
            {isSubmitted ? (
              <div className="p-5 rounded-2xl bg-white border border-emerald-300 text-center shadow-sm">
                <CheckCircle2 size={32} className="mx-auto text-emerald-600 mb-2" />
                <div className="text-lg font-bold text-[#14110F] font-heading">
                  Custom ROI Blueprint Requested!
                </div>
                <p className="text-xs text-[#46403B] mt-1 mb-4">
                  We have mapped your <strong>{currentWf.label}</strong> workflow for <strong>{selectedSystem}</strong>. Founder Bhavesh Barot will review your numbers and email a detailed implementation breakdown within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => openModal('us')}
                  className="w-full py-3 px-4 rounded-xl bg-[#F05A28] text-white font-bold text-xs hover:bg-[#D8441A] transition-colors shadow-md"
                >
                  Book 30-Min Discovery Session on Calendly
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="text-xs font-bold text-[#14110F] font-heading">
                  Get your customized architecture &amp; feasibility roadmap:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-[#E7DED6] bg-white px-3 py-2.5 text-xs text-[#14110F] placeholder-[#6E655F] focus:border-[#F05A28] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-[#E7DED6] bg-white px-3 py-2.5 text-xs text-[#14110F] placeholder-[#6E655F] focus:border-[#F05A28] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Company / Website"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-[#E7DED6] bg-white px-3 py-2.5 text-xs text-[#14110F] placeholder-[#6E655F] focus:border-[#F05A28] focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (Optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-[#E7DED6] bg-white px-3 py-2.5 text-xs text-[#14110F] placeholder-[#6E655F] focus:border-[#F05A28] focus:outline-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-600">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#F05A28] text-white font-bold text-xs hover:bg-[#D8441A] transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    'Generating Custom Model...'
                  ) : (
                    <>
                      <span>Get Custom Architecture Blueprint &amp; Proposal</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-[#6E655F]">
                  <span>&bull; Fixed milestone scope</span>
                  <span>&bull; 100% IP ownership</span>
                  <span>&bull; No spam</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
