'use client';

/**
 * UsPricingTabs — unified SaaS-style pricing for the US site.
 * Tabs across FactoryJet's four services (Website Design, E-Commerce, AI SEO,
 * AI Agent), each with three fixed-price USD tiers. CTAs open the global lead
 * modal (region 'us'). Pure client component; no external data deps.
 */

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

interface Tier {
  name: string;
  price: string;
  priceNote?: string;
  blurb: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const SERVICES: { key: string; label: string; tiers: [Tier, Tier, Tier] }[] = [
  {
    key: 'web',
    label: 'Website Design',
    tiers: [
      { name: 'Starter', price: 'Fixed-price', blurb: '5-page business site, live in 7 days.', features: ['Mobile-first, Lighthouse 90+', 'SEO + JSON-LD schema', 'Contact form + CRM hookup', 'You own the code'], cta: 'Get a quote' },
      { name: 'Growth', price: 'Fixed-price', blurb: '15-page site with blog & lead capture.', features: ['Everything in Starter', 'Blog + CMS', 'GA4 + conversion tracking', 'Advanced on-page SEO'], cta: 'Get a quote', highlighted: true },
      { name: 'Web App', price: 'Custom quote', blurb: 'Custom web application / MVP.', features: ['Everything in Growth', 'Custom features & auth', 'API & third-party integrations', 'Scoped, fixed-price build'], cta: 'Talk to the founder' },
    ],
  },
  {
    key: 'ecom',
    label: 'E-Commerce',
    tiers: [
      { name: 'Store', price: 'Fixed-price', blurb: 'Shopify or WooCommerce store, custom theme.', features: ['Up to 50 products', 'Payments + shipping setup', 'Mobile-first, Lighthouse 95+', 'Basic SEO + schema'], cta: 'Get a quote' },
      { name: 'Advanced', price: 'Custom quote', blurb: 'Configurators, subscriptions, B2B pricing.', features: ['Everything in Store', 'Product configurator / subscriptions', 'B2B / wholesale pricing', 'Custom integrations'], cta: 'Get a quote', highlighted: true },
      { name: 'Custom', price: 'Custom quote', blurb: 'Headless or marketplace builds.', features: ['Headless (Next.js) storefront', 'Multi-vendor / marketplace', 'ERP / complex integrations', 'Scoped after discovery'], cta: 'Talk to the founder' },
    ],
  },
  {
    key: 'aiseo',
    label: 'AI SEO',
    tiers: [
      { name: 'Visibility Audit', price: 'Fixed-price', blurb: 'GEO/AEO audit + 90-day roadmap.', features: ['AI crawler access audit', 'Structured data + local setup', 'Competitor visibility report', '90-day action plan'], cta: 'Start with an audit' },
      { name: 'Growth', price: 'Monthly retainer', blurb: 'Full AI SEO engine, month-to-month.', features: ['Content strategy + production', 'Google AI Overview optimization', 'Link acquisition', 'Conversion tracking'], cta: 'Get started', highlighted: true },
      { name: 'Scale', price: 'Monthly retainer', blurb: 'Dedicated team + digital PR.', features: ['Everything in Growth', 'Dedicated SEO strategist', 'Digital PR + competitor intel', 'Weekly strategy sessions'], cta: 'Talk to the founder' },
    ],
  },
  {
    key: 'aiagent',
    label: 'AI Agent',
    tiers: [
      { name: 'Starter', price: 'Custom quote', blurb: 'One focused single-workflow agent.', features: ['Single workflow automation', '1 integration', 'Testing + deployment', '14-day support'], cta: 'Get a quote' },
      { name: 'Growth', price: 'Custom quote', blurb: 'Multiple agents + CRM + dashboard.', features: ['Multiple interconnected agents', 'CRM + tool integrations', 'Management dashboard', '30-day support window'], cta: 'Get a quote', highlighted: true },
      { name: 'Enterprise', price: 'Custom quote', blurb: 'Multi-agent orchestration platform.', features: ['Everything in Growth', 'Multi-agent orchestration', 'Custom model / RAG pipelines', 'SLA + ongoing support'], cta: 'Talk to the founder' },
    ],
  },
];

const UsPricingTabs: React.FC = () => {
  const { openModal } = useContactModal();
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <section id="pricing" className="bg-fj-cream py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-fj-mono uppercase tracking-widest text-[#B23E13] mb-3">Pricing plans</p>
          <h2 className="text-3xl md:text-4xl font-fj-display font-bold text-fj-ink">Fixed-price plans for every service</h2>
          <p className="mt-3 text-fj-ink/60 font-fj-body max-w-2xl mx-auto">Pick a service to see its tiers. Every plan is fixed-price and scoped to your build, no hourly billing, no surprise invoices, code and data you own from day one. You get a clear quote up front after a free discovery call.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SERVICES.map((s, i) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              className={`px-4 md:px-5 py-2.5 rounded-full text-sm font-semibold font-fj-body transition-all ${
                i === active
                  ? 'bg-[#B23E13] text-white shadow-md'
                  : 'bg-white text-fj-ink/70 border border-fj-charcoal/15 hover:border-[#F05A28]/40'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {service.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl bg-white p-6 md:p-7 transition-all ${
                tier.highlighted
                  ? 'border-2 border-[#F05A28] shadow-xl md:-translate-y-2'
                  : 'border border-fj-charcoal/12 shadow-sm'
              }`}
            >
              {tier.highlighted && (
                <span className="self-start mb-3 bg-[#F05A28]/10 text-[#B23E13] text-xs font-bold px-3 py-1 rounded-full">Most popular</span>
              )}
              <h3 className="text-lg font-fj-display font-bold text-fj-ink">{tier.name}</h3>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="text-xl md:text-2xl font-fj-display font-bold text-[#F05A28]">{tier.price}</span>
                {tier.priceNote && <span className="text-sm text-fj-ink/50 font-fj-body">{tier.priceNote}</span>}
              </div>
              <p className="mt-2 text-sm text-fj-ink/60 font-fj-body">{tier.blurb}</p>
              <ul className="mt-5 space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-fj-ink/80 font-fj-body">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => openModal('us')}
                className={`mt-6 w-full rounded-xl py-3 font-bold font-fj-body text-sm transition-all ${
                  tier.highlighted
                    ? 'bg-[#B23E13] text-white hover:bg-[#9A3510]'
                    : 'bg-fj-cream text-fj-ink border border-fj-charcoal/15 hover:border-[#F05A28]/40'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-fj-ink/60 font-fj-body">
          Fixed-price, milestone-paid, quoted up front after a free discovery call. Copywriting, premium licenses, and custom photography are itemized before you sign. AI SEO retainers are month-to-month, no annual contracts.
        </p>
      </div>
    </section>
  );
};

export default UsPricingTabs;
