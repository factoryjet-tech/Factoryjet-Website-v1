'use client';

import React, { useState, useId } from 'react';
import { Bot, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, DollarSign, Zap } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { submitLead } from '@/utils/submitLead';

interface AiAgentRoiCalculatorProps {
  className?: string;
  defaultWorkflow?: 'support' | 'sales' | 'erp' | 'commerce';
  source?: string;
}

const SYSTEMS = [
  'Zendesk',
  'Intercom',
  'Gorgias',
  'Freshdesk',
  'HubSpot',
  'Salesforce',
  'NetSuite',
  'Shopify',
  'Other / Custom API',
];

const WORKFLOWS = [
  { id: 'support', label: 'Customer Support Tickets', avgMins: 8, baseDeflection: 0.72, desc: 'Order status, RMAs, returns, FAQs & tracking' },
  { id: 'sales', label: 'Sales & Lead Qualification', avgMins: 12, baseDeflection: 0.68, desc: 'Instant response, qualification & CRM meeting booking' },
  { id: 'erp', label: 'Back-Office & Invoice Matching', avgMins: 15, baseDeflection: 0.75, desc: 'PO extraction, ERP 3-way matching & vendor checks' },
  { id: 'commerce', label: 'Omnichannel Catalog & Pricing', avgMins: 10, baseDeflection: 0.80, desc: 'Listing sync, repricing & inventory reconciliation' },
];

export default function AiAgentRoiCalculator({
  className = '',
  defaultWorkflow = 'support',
  source = 'ai_agent_roi_calculator',
}: AiAgentRoiCalculatorProps) {
  const { openModal } = useContactModal();

  const [ticketVolume, setTicketVolume] = useState<number>(3000);
  const [hourlyRate, setHourlyRate] = useState<number>(28);
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>(defaultWorkflow);
  const [selectedSystem, setSelectedSystem] = useState<string>('Zendesk');

  // Lead capture state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const volumeSliderId = useId();
  const rateSliderId = useId();

  const currentWf = WORKFLOWS.find((w) => w.id === selectedWorkflow) || WORKFLOWS[0];

  // Mathematical projections
  const deflectionRate = Math.round(currentWf.baseDeflection * 100);
  const monthlyDeflected = Math.round(ticketVolume * currentWf.baseDeflection);
  const monthlyHoursSaved = Math.round((monthlyDeflected * currentWf.avgMins) / 60);
  const annualSavings = Math.round(monthlyHoursSaved * hourlyRate * 12);
  const monthlySavings = Math.round(annualSavings / 12);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid work email.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Push event to GTM dataLayer if present
      if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer) {
        (window as unknown as { dataLayer: Array<Record<string, unknown>> }).dataLayer.push({
          event: 'roi_calculator_submit',
          source,
          workflow: selectedWorkflow,
          system: selectedSystem,
          monthlyVolume: ticketVolume,
          estimatedAnnualSavings: annualSavings,
        });
      }

      await submitLead({
        name: fullName,
        email,
        company,
        service: `AI Agent: ${currentWf.label}`,
        message: `Calculated ROI: ${ticketVolume.toLocaleString()} tickets/mo, System: ${selectedSystem}, Rate: $${hourlyRate}/hr. Est Annual Savings: $${annualSavings.toLocaleString()}, Hours Saved: ${monthlyHoursSaved} hrs/mo`,
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
      className={`rounded-2xl border border-[#E7DED6] bg-white p-6 md:p-10 shadow-xl shadow-fj-ink/5 ${className}`.trim()}
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#E7DED6]/70 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-fj-mono text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: '#B23E13', background: 'rgba(240,90,40,0.08)', border: '1px solid rgba(240,90,40,0.22)' }}>
            <Sparkles size={11} className="text-[#F05A28]" />
            Interactive ROI Model · US Operations
          </div>
          <h3 className="mt-2 font-fj-display text-[1.5rem] md:text-[1.85rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Calculate Your AI Agent Deflection &amp; Annual Savings
          </h3>
          <p className="mt-1 font-fj-body text-[0.9375rem] text-fj-neutral-500">
            Model your actual ticket volume and loaded labor cost to see hours recovered and ROI.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-2 text-right">
          <div className="rounded-xl border border-fj-neutral-200 bg-[#FAFAF7] px-4 py-2 text-center">
            <span className="block font-fj-mono text-[10px] uppercase text-fj-neutral-400">Target Deflection</span>
            <span className="font-fj-display text-[1.25rem] font-bold text-[#F05A28]">65% – 75%</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left Column: Interactive Sliders & Pickers */}
        <div className="lg:col-span-7 space-y-6">
          {/* Workflow Picker */}
          <div>
            <label className="block font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600 mb-2">
              1. Select Primary Workflow
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {WORKFLOWS.map((wf) => (
                <button
                  key={wf.id}
                  type="button"
                  onClick={() => setSelectedWorkflow(wf.id)}
                  className={`flex flex-col text-left p-3 rounded-xl border transition-all ${
                    selectedWorkflow === wf.id
                      ? 'border-[#F05A28] bg-[#F05A28]/5 shadow-sm ring-1 ring-[#F05A28]'
                      : 'border-fj-neutral-200 bg-white hover:border-fj-neutral-300'
                  }`}
                >
                  <span className={`font-fj-body text-[13px] font-semibold ${selectedWorkflow === wf.id ? 'text-[#B23E13]' : 'text-fj-ink'}`}>
                    {wf.label}
                  </span>
                  <span className="mt-1 font-fj-body text-[11px] text-fj-neutral-400 leading-tight">
                    {wf.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* System Select */}
          <div>
            <label className="block font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600 mb-2">
              2. Primary System of Record
            </label>
            <div className="flex flex-wrap gap-2">
              {SYSTEMS.map((sys) => (
                <button
                  key={sys}
                  type="button"
                  onClick={() => setSelectedSystem(sys)}
                  className={`px-3 py-1.5 rounded-lg font-fj-body text-[12.5px] font-medium border transition-all ${
                    selectedSystem === sys
                      ? 'border-[#F05A28] bg-[#F05A28] text-white'
                      : 'border-fj-neutral-200 bg-[#FAFAF7] text-fj-neutral-600 hover:border-fj-neutral-300 hover:text-fj-ink'
                  }`}
                >
                  {sys}
                </button>
              ))}
            </div>
          </div>

          {/* Ticket Volume Slider */}
          <div className="rounded-xl border border-fj-neutral-200 bg-[#FAFAF7] p-5">
            <div className="flex items-center justify-between">
              <label htmlFor={volumeSliderId} className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600">
                Monthly Inbound Queue Volume
              </label>
              <span className="font-fj-display text-[1.25rem] font-bold text-[#F05A28]">
                {ticketVolume.toLocaleString()} <span className="font-fj-mono text-[11px] font-normal text-fj-neutral-400">tickets/mo</span>
              </span>
            </div>
            <input
              id={volumeSliderId}
              type="range"
              min={500}
              max={25000}
              step={500}
              value={ticketVolume}
              onChange={(e) => setTicketVolume(Number(e.target.value))}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-fj-neutral-200 accent-[#F05A28]"
            />
            <div className="mt-2 flex justify-between font-fj-mono text-[10px] text-fj-neutral-400">
              <span>500 (Boutique)</span>
              <span>5,000 (Mid-Market)</span>
              <span>25,000+ (High-Volume)</span>
            </div>
          </div>

          {/* Hourly Cost Slider */}
          <div className="rounded-xl border border-fj-neutral-200 bg-[#FAFAF7] p-5">
            <div className="flex items-center justify-between">
              <label htmlFor={rateSliderId} className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600">
                Loaded Hourly Cost per Rep / Operator
              </label>
              <span className="font-fj-display text-[1.25rem] font-bold text-[#F05A28]">
                ${hourlyRate} <span className="font-fj-mono text-[11px] font-normal text-fj-neutral-400">/ hour (loaded)</span>
              </span>
            </div>
            <input
              id={rateSliderId}
              type="range"
              min={18}
              max={65}
              step={1}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-fj-neutral-200 accent-[#F05A28]"
            />
            <div className="mt-2 flex justify-between font-fj-mono text-[10px] text-fj-neutral-400">
              <span>$18/hr</span>
              <span>$28/hr (US Average)</span>
              <span>$65/hr (Senior Specialist)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Calculated ROI & Lead Form */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-fj-neutral-200 bg-[#FFFDFB] p-6 shadow-sm">
          <div>
            <div className="border-b border-fj-neutral-200/70 pb-4">
              <p className="font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                Estimated Annual Impact
              </p>
              <p className="mt-2 font-fj-display text-[2.5rem] md:text-[3rem] font-bold tracking-[-0.03em] text-[#F05A28] leading-none">
                ${annualSavings.toLocaleString()}
              </p>
              <p className="mt-1 font-fj-body text-[13px] text-fj-neutral-500">
                Estimated net savings per year (${monthlySavings.toLocaleString()}/mo)
              </p>
            </div>

            {/* Metric Grid */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-fj-neutral-200 bg-white p-3">
                <div className="flex items-center gap-1.5 font-fj-mono text-[10px] uppercase text-fj-neutral-400">
                  <Clock size={12} className="text-[#F05A28]" /> Hours Recovered
                </div>
                <p className="mt-1 font-fj-display text-[1.35rem] font-bold text-fj-ink">
                  {monthlyHoursSaved.toLocaleString()} <span className="font-fj-mono text-[10px] font-normal text-fj-neutral-400">hrs/mo</span>
                </p>
              </div>

              <div className="rounded-xl border border-fj-neutral-200 bg-white p-3">
                <div className="flex items-center gap-1.5 font-fj-mono text-[10px] uppercase text-fj-neutral-400">
                  <Zap size={12} className="text-[#F05A28]" /> Deflection Rate
                </div>
                <p className="mt-1 font-fj-display text-[1.35rem] font-bold text-fj-ink">
                  {deflectionRate}% <span className="font-fj-mono text-[10px] font-normal text-fj-neutral-400">resolved</span>
                </p>
              </div>

              <div className="rounded-xl border border-fj-neutral-200 bg-white p-3">
                <div className="flex items-center gap-1.5 font-fj-mono text-[10px] uppercase text-fj-neutral-400">
                  <ShieldCheck size={12} className="text-[#F05A28]" /> Speed to Lead
                </div>
                <p className="mt-1 font-fj-display text-[1.35rem] font-bold text-fj-ink">
                  &lt; 30s <span className="font-fj-mono text-[10px] font-normal text-fj-neutral-400">from 4 hrs</span>
                </p>
              </div>

              <div className="rounded-xl border border-fj-neutral-200 bg-white p-3">
                <div className="flex items-center gap-1.5 font-fj-mono text-[10px] uppercase text-fj-neutral-400">
                  <DollarSign size={12} className="text-[#F05A28]" /> Payback
                </div>
                <p className="mt-1 font-fj-display text-[1.35rem] font-bold text-fj-ink">
                  ~2.5 mo <span className="font-fj-mono text-[10px] font-normal text-fj-neutral-400">typical</span>
                </p>
              </div>
            </div>
          </div>

          {/* Lead Capture Form Card */}
          <div className="mt-6 pt-5 border-t border-fj-neutral-200/70">
            {isSubmitted ? (
              <div className="rounded-xl bg-[rgba(240,90,40,0.06)] border border-[#F05A28]/30 p-5 text-center">
                <CheckCircle2 size={32} className="mx-auto text-[#F05A28]" />
                <p className="mt-2 font-fj-display text-[1.1rem] font-bold text-fj-ink">
                  ROI Estimate Generated!
                </p>
                <p className="mt-1 font-fj-body text-[13px] text-fj-neutral-600">
                  We have mapped your <strong>{currentWf.label}</strong> architecture for <strong>{selectedSystem}</strong>. A senior engineer will review and reach out within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => openModal('us')}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-[#C2440F] px-5 py-2 font-fj-body text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Book 30-Min Scoping Call
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <p className="font-fj-body text-[13px] font-semibold text-fj-ink">
                  Get your custom architecture &amp; scoping blueprint:
                </p>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-lg border border-fj-neutral-200 bg-white px-3 py-2 text-[13.5px] text-fj-ink placeholder-fj-neutral-400 focus:border-[#F05A28] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email (e.g. name@company.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-fj-neutral-200 bg-white px-3 py-2 text-[13.5px] text-fj-ink placeholder-fj-neutral-400 focus:border-[#F05A28] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Company Name or Website URL"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-lg border border-fj-neutral-200 bg-white px-3 py-2 text-[13.5px] text-fj-ink placeholder-fj-neutral-400 focus:border-[#F05A28] focus:outline-none"
                  />
                </div>

                {errorMsg && (
                  <p className="font-fj-body text-[12px] text-red-600">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 font-fj-body text-[13.5px] font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ background: '#C2440F' }}
                >
                  {isSubmitting ? 'Calculating...' : (
                    <>
                      <span>Get Custom Architecture Blueprint</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
                <p className="text-center font-fj-mono text-[10px] text-fj-neutral-400">
                  Fixed-price scope · No spam · Strict CCPA compliance
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
