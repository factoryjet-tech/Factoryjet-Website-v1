'use client';

import { useState } from 'react';
import PricingTiers from '@/components/v2/PricingTiers';
import type { PricingTier } from '@/components/v2/PricingTiers';

/* ─── Web Design Tiers ───────────────────────────────────────────────── */
const WEB_TIERS: readonly [PricingTier, PricingTier, PricingTier] = [
  {
    name: 'Starter',
    priceRange: '',
    description:
      'A 5-page mobile-first site that loads fast and ranks for your name and core service. Right for sole traders and local businesses.',
    features: [
      '5 pages, mobile-responsive',
      'SEO-ready with JSON-LD schema',
      'Contact form with lead capture',
      'WhatsApp & social links',
      '2 structured revision rounds',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a quote', modal: true, region: 'in' },
  },
  {
    name: 'Growth',
    priceRange: '',
    description:
      'A 10–15 page site with blog CMS, lead capture, and GA4 analytics from day one. Best for SMBs scaling their digital presence.',
    features: [
      '10–15 pages with blog CMS',
      'Advanced SEO + GA4 setup',
      'Lead capture & email routing',
      'Figma design system included',
      '3 structured revision rounds',
      '30-day support + training session',
    ],
    cta: { label: 'Get a quote', modal: true, region: 'in' },
    popular: true,
  },
  {
    name: 'Scale',
    priceRange: '',
    description:
      'Custom Next.js architecture with AI integrations, third-party APIs, and priority support. For businesses with complex digital requirements.',
    features: [
      'Custom Next.js architecture',
      'AI chatbot or lead qualifier',
      'Third-party API integrations',
      'CRM & automation setup',
      'Priority support + quarterly reviews',
      'Lighthouse 95+ guaranteed',
    ],
    cta: { label: 'Get a quote', modal: true, region: 'in' },
  },
] as const;

/* ─── Ecommerce Tiers ────────────────────────────────────────────────── */
const ECOM_TIERS: readonly [PricingTier, PricingTier, PricingTier] = [
  {
    name: 'Shop Starter',
    priceRange: '',
    description:
      'A Shopify store with custom theme, product catalog, and payment gateway. Perfect for D2C brands launching online.',
    features: [
      'Custom Shopify theme (no templates)',
      'Up to 50 products configured',
      'Razorpay / UPI / COD setup',
      'Mobile-first checkout flow',
      'Basic SEO & schema markup',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a quote', modal: true, region: 'in' },
  },
  {
    name: 'Shop Pro',
    priceRange: '',
    description:
      'B2B or multi-vendor store with tiered pricing, wholesale accounts, GST invoicing, and AI product recommendations.',
    features: [
      'Shopify B2B or WooCommerce',
      'Tiered / wholesale pricing',
      'GST invoicing automation',
      'AI product recommendations',
      'WhatsApp Commerce integration',
      'Advanced analytics + heatmaps',
    ],
    cta: { label: 'Get a quote', modal: true, region: 'in' },
    popular: true,
  },
  {
    name: 'E-Comm Scale',
    priceRange: '',
    description:
      'Headless commerce with multi-currency, ERP integration, quick-commerce, and omnichannel (Amazon, Flipkart, Meesho).',
    features: [
      'Headless Next.js storefront',
      'Multi-currency & multi-region',
      'ERP / inventory integration',
      'Omnichannel (Flipkart, Meesho, Amazon)',
      'Quick-commerce (Blinkit, Zepto)',
      'Priority support + quarterly reviews',
    ],
    cta: { label: 'Get a quote', modal: true, region: 'in' },
  },
] as const;

/* ─── AI SEO Tiers ───────────────────────────────────────────────────── */
const AISEO_TIERS: readonly [PricingTier, PricingTier, PricingTier] = [
  {
    name: 'Essential',
    priceRange: '',
    description:
      'AI SEO foundations, structured data, AI crawler access, and local ranking setup. Ideal for businesses starting their SEO journey.',
    features: [
      'JSON-LD schema for AI search',
      'GPTBot, ClaudeBot, PerplexityBot access',
      'Google Business Profile optimisation',
      '4 SEO-optimised blog posts/month',
      'Monthly performance report',
      'Keyword tracking (50 keywords)',
    ],
    cta: { label: 'Get started', modal: true, region: 'in' },
  },
  {
    name: 'Growth',
    priceRange: '',
    description:
      'Full AI SEO engine, content strategy, AI Overview optimisation, link acquisition, and conversion tracking.',
    features: [
      'AI Overview + featured snippet targeting',
      'ChatGPT & Gemini brand visibility',
      '12 long-form content pieces/month',
      'Technical SEO audits + fixes',
      'Link acquisition (DA 40+)',
      'Conversion tracking + CRO review',
    ],
    cta: { label: 'Get started', modal: true, region: 'in' },
    popular: true,
  },
  {
    name: 'VIP Partner',
    priceRange: '',
    description:
      'Dedicated AI SEO team with full content production, digital PR, competitor intelligence, and weekly strategy sessions.',
    features: [
      'Dedicated SEO strategist',
      '25+ content pieces/month',
      'Digital PR + brand mentions',
      'Competitor intelligence reports',
      'Weekly strategy sessions',
      'Priority implementation & support',
    ],
    cta: { label: 'Get started', modal: true, region: 'in' },
  },
] as const;

const TABS = [
  { key: 'web', label: 'Web Design' },
  { key: 'ecom', label: 'Ecommerce' },
  { key: 'aiseo', label: 'AI SEO' },
] as const;

type TabKey = (typeof TABS)[number]['key'];

const PRICING_DATA: Record<TabKey, {
  headline: string;
  lead: string;
  footnote?: string;
  tiers: readonly [PricingTier, PricingTier, PricingTier];
}> = {
  web: {
    headline: 'Website Design & Development',
    lead: 'Every tier ships with a Figma design system, Next.js codebase, JSON-LD schema, GA4, and a recorded handover, from day one. Starter sites go live in 7 days. Growth and Scale projects are scoped and scheduled on your first call.',
    tiers: WEB_TIERS,
  },
  ecom: {
    headline: 'E-Commerce Development',
    lead: 'From Shopify D2C stores to headless B2B platforms, built for the Indian market with Razorpay, UPI, GST invoicing, and WhatsApp Commerce out of the box. Every store is mobile-first, AI-ready, and built for conversion.',
    tiers: ECOM_TIERS,
  },
  aiseo: {
    headline: 'AI SEO: Get Found on Google, ChatGPT & Gemini',
    lead: 'Traditional SEO gets you on Google. AI SEO gets you into Google AI Overviews, ChatGPT answers, Perplexity results, and Gemini summaries, where the next generation of buyers are searching. Monthly retainer, no long-term contracts.',
    footnote: 'Monthly retainer. Cancel anytime with 30 days notice. Onboarding takes 30 days.',
    tiers: AISEO_TIERS,
  },
};

export default function HomePricingTabs() {
  const [active, setActive] = useState<TabKey>('web');
  const data = PRICING_DATA[active];

  return (
    <div>
      {/* Tab bar */}
      <div className="flex justify-center mb-0">
        <div
          className="inline-flex gap-1 rounded-xl p-1"
          style={{ backgroundColor: 'rgba(240,90,40,0.08)', border: '1px solid rgba(240,90,40,0.15)' }}
          role="tablist"
          aria-label="Pricing categories"
        >
          {TABS.map((tab) => {
            const isActive = tab.key === active;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.key)}
                className="relative px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                style={{
                  backgroundColor: isActive ? '#F05A28' : 'transparent',
                  color: isActive ? '#fff' : '#6b7280',
                  boxShadow: isActive ? '0 2px 8px rgba(240,90,40,0.35)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active pricing grid */}
      <PricingTiers
        eyebrow="TRANSPARENT PRICING"
        headline={data.headline}
        lead={data.lead}
        tiers={data.tiers}
        footnote={data.footnote}
      />
    </div>
  );
}
