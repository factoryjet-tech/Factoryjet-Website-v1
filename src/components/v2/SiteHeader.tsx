'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Globe,
  ShoppingBag,
  ShoppingCart,
  Code,
  FileCode,
  RefreshCw,
  Bot,
  Zap,
  MessageSquare,
  Layers,
  Link2,
  Search,
  MapPin,
  X,
  Menu,
  ArrowRight,
  FileText,
  BookOpen,
  Cpu,
  TrendingUp,
  Megaphone,
  Mic,
  GitBranch,
  Headphones,
  CalendarClock,
  Workflow,
  LayoutTemplate,
  Store,
  Sparkles,
  Package,
  Target,
  Calculator,
} from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';
import type { ModalRegion } from '../../context/ContactModalContext';
import Wordmark from './Wordmark';

// ─── Locale type ──────────────────────────────────────────────────────────────

export type SiteHeaderLocale = 'us' | 'gb' | 'in' | 'uae';

// ─── US nav data ──────────────────────────────────────────────────────────────

const US_WEB_SERVICES = [
  { icon: Globe,        label: 'Web Design',          href: '/services/web-design',                      desc: 'Conversion-focused sites' },
  { icon: ShoppingBag,  label: 'Shopify Development', href: '/services/shopify-development',             desc: 'Custom storefronts & themes' },
  { icon: ShoppingCart, label: 'E-commerce',          href: '/services/ecommerce-development',           desc: 'End-to-end online stores' },
  { icon: Code,         label: 'Web App Development', href: '/services/web-application-development',     desc: 'Complex web apps' },
  { icon: FileCode,     label: 'WordPress',           href: '/services/wordpress-development',           desc: 'Custom WP sites & plugins' },
  { icon: RefreshCw,    label: 'Website Redesign',    href: '/services/website-redesign',                desc: 'Modernize your existing site' },
] as const;

const US_AI_SERVICES = [
  { icon: Bot,           label: 'AI Agents',      href: '/services/ai-agent-development',               desc: 'Autonomous task automation' },
  { icon: Zap,           label: 'AI Automation',  href: '/services/ai-automation',           desc: 'Eliminate repetitive work' },
  { icon: MessageSquare, label: 'AI Chatbot',     href: '/services/ai-chatbot-development',  desc: 'Smart customer support' },
  { icon: Layers,        label: 'AI Workflow',    href: '/services/ai-workflow-automation',  desc: 'End-to-end process flows' },
  { icon: Link2,         label: 'AI Integration', href: '/services/ai-integration-services', desc: 'Connect AI to your stack' },
] as const;

const US_AI_AGENTS_NAV = [
  { icon: Bot,           label: 'Custom AI Agents',       href: '/services/ai-agent-development',               desc: 'Autonomous operations & task agents' },
  { icon: Headphones,    label: 'AI Customer Support',    href: '/services/ai-agent-development/ai-customer-support', desc: 'Deflect 70%+ of support tickets' },
  { icon: TrendingUp,    label: 'AI Sales & SDR Agents',  href: '/services/ai-agent-development/ai-sales-agent',         desc: 'Inbound lead qualification & CRM booking' },
  { icon: GitBranch,     label: 'Workflow Automation',    href: '/services/ai-agent-development/ai-workflow-automation', desc: 'Connect ERP, CRM & databases' },
  { icon: Mic,           label: 'Voice AI Agents',        href: '/services/ai-agent-development/ai-voice-agent',         desc: 'Inbound & outbound voice calling' },
  { icon: Workflow,      label: 'n8n Automation',         href: '/n8n-automation',                               desc: 'Self-hosted workflow automation' },
  { icon: Sparkles,      label: 'Agentic Commerce',       href: '/agentic-commerce',                             desc: 'How AI agents buy, sell & reprice' },
] as const;

// Solutions (US) — categorized for enterprise-grade 3-column + showcase layout
const US_SOLUTIONS_CORE = [
  { icon: Sparkles,      label: 'Agentic Commerce',         href: '/agentic-commerce',               desc: 'How AI agents buy & sell' },
  { icon: Layers,        label: 'Omnichannel Commerce',     href: '/omnichannel-commerce',           desc: 'One catalog, inventory & order engine' },
  { icon: Store,         label: 'B2B E-Commerce',           href: '/b2b-ecommerce',                  desc: 'Portals, tiered pricing, net terms' },
  { icon: ShoppingCart,  label: 'E-Commerce Development',   href: '/services/ecommerce-development',  desc: 'End-to-end online stores' },
  { icon: Search,        label: 'E-Commerce Consulting',    href: '/ecommerce-consulting',           desc: 'Platform, migration & scope' },
] as const;

const US_SOLUTIONS_MARKETPLACES = [
  { icon: ShoppingBag,   label: 'Amazon Agency',            href: '/services/amazon-agency',         desc: 'Ads, SEO & account management' },
  { icon: Mic,           label: 'TikTok Shop Agency',       href: '/services/tiktok-shop-agency',    desc: 'Ads, affiliates & LIVE selling' },
  { icon: Package,       label: 'Walmart Marketplace Agency', href: '/services/walmart-marketplace-agency', desc: 'Approval, WFS & Connect ads' },
  { icon: Target,        label: 'Target Plus Marketplace',  href: '/target-plus-marketplace',        desc: 'Curated DVS & EDI integration' },
  { icon: Store,         label: 'Faire Wholesale Agency',   href: '/faire-wholesale-marketplace',    desc: 'B2B boutique catalog & reorders' },
] as const;

const US_SOLUTIONS_GROWTH = [
  { icon: TrendingUp,    label: 'Ecommerce Growth Agency',  href: '/services/ecommerce-growth-agency', desc: 'Full-funnel ecommerce marketing' },
  { icon: Bot,           label: 'Commerce AI Agents',       href: '/services/ai-agent-development',             desc: 'Agents that list, price & sync' },
  { icon: TrendingUp,    label: 'Commerce SEO & Visibility',href: '/services/ecommerce-seo',         desc: 'Google, AI answers & marketplaces' },
  { icon: Calculator,    label: 'Marketplace Fee Calculator', href: '/marketplace-fee-calculator',  desc: 'Amazon, Walmart, Target & Faire' },
  { icon: Zap,           label: 'Ecommerce Speed Calculator', href: '/ecommerce-speed-calculator',  desc: 'Core Web Vitals & Latency ROI' },
] as const;

const US_SOLUTIONS = [
  ...US_SOLUTIONS_CORE,
  ...US_SOLUTIONS_MARKETPLACES,
  ...US_SOLUTIONS_GROWTH,
] as const;

// Platforms (US) — what we build on; items without a dedicated page point to the closest one
const US_PLATFORMS = [
  { icon: Sparkles,     label: 'Best Ecommerce Platforms', href: '/best-ecommerce-platforms',         desc: 'Side-by-side platform guide' },
  { icon: ShoppingBag,  label: 'Shopify & Shopify Plus',   href: '/services/shopify-development',     desc: 'DTC + B2B on one store' },
  { icon: ShoppingBag,  label: 'Shopify Plus B2B',         href: '/services/shopify-plus-b2b',         desc: 'Wholesale pricing & Net terms' },
  { icon: Store,        label: 'Adobe Commerce (Magento)', href: '/services/magento-development',     desc: 'Deep B2B, large catalogs' },
  { icon: FileCode,     label: 'WooCommerce',              href: '/services/woocommerce-development', desc: 'WordPress commerce' },
  { icon: Layers,       label: 'BigCommerce',              href: '/bigcommerce-development',          desc: 'Mid-market B2B value' },
  { icon: Layers,       label: 'BigCommerce B2B Edition',  href: '/services/bigcommerce-b2b',          desc: 'Enterprise RFQ & PunchOut' },
  { icon: Code,         label: 'Headless / composable',    href: '/headless-commerce',               desc: 'Custom front end, any backend' },
  { icon: Zap,          label: 'Commerceflo',              href: '/commerceflo',                     desc: 'AI operator: audits & fixes your store' },
] as const;

// Replatforming (US) — migration hub + its spokes
const US_REPLATFORMING_HUB = '/replatforming';
const US_REPLATFORMING = [
  { label: 'Magento to Shopify',       href: '/replatforming/magento-to-shopify' },
  { label: 'BigCommerce to Shopify',   href: '/replatforming/bigcommerce-to-shopify-plus' },
  { label: 'SuiteCommerce to Shopify', href: '/replatforming/netsuite-suitecommerce-to-shopify-plus' },
  { label: 'WooCommerce to Shopify',   href: '/replatforming/woocommerce-to-shopify' },
  { label: 'WordPress to Shopify',     href: '/replatforming/wordpress-to-shopify' },
  { label: 'Squarespace to Shopify',   href: '/replatforming/squarespace-to-shopify' },
  { label: 'Wix to Shopify',           href: '/replatforming/wix-to-shopify' },
  { label: 'Salesforce Commerce Cloud', href: '/replatforming/salesforce-commerce-cloud-to-shopify-plus', note: 'to Shopify Plus' },
] as const;

// Services (US) — supporting / demoted services that link up to the commerce pillar
const US_SUPPORT_SERVICES = [
  { icon: Globe,      label: 'Web Design',          href: '/services/web-design',                  desc: 'Conversion-focused sites' },
  { icon: RefreshCw,  label: 'Website Redesign',    href: '/services/website-redesign',            desc: 'Modernize your existing site' },
  { icon: FileCode,   label: 'WordPress',           href: '/services/wordpress-development',        desc: 'Custom WP sites & plugins' },
  { icon: Code,       label: 'Web App Development',  href: '/services/web-application-development',  desc: 'Complex web apps' },
  { icon: Sparkles,   label: 'AI SEO',              href: '/services/ai-seo',                      desc: 'Get cited in AI answers' },
  { icon: Search,     label: 'AI Visibility Checker', href: '/ai-visibility-checker',              desc: 'Does AI recommend you? Free' },
  { icon: Zap,        label: 'AI Automation',       href: '/services/ai-automation',               desc: 'Eliminate repetitive work' },
] as const;

// SEO hub + sub-services (US) — the "SEO & AI Search" column in the Services mega.
// SEO Services and Local SEO live here rather than in US_SUPPORT_SERVICES so the
// same link does not render twice in one panel. AI SEO stays in supporting
// services: it is the "get cited" answer box, a different intent from ranking.
const US_SEO_HUB_HREF = '/services/seo';
const US_SEO_SERVICES = [
  { icon: MapPin,        label: 'Local SEO',          href: '/services/local-seo',          desc: 'Map pack & near-me' },
  { icon: ShoppingCart,  label: 'E-commerce SEO',     href: '/services/ecommerce-seo',      desc: 'Product & collection SEO' },
  { icon: TrendingUp,    label: 'Shopify SEO',        href: '/services/shopify-seo',        desc: 'Rank your Shopify store' },
  { icon: Search,        label: 'SEO Audit',          href: '/services/seo-audit',          desc: 'Free technical site check' },
  { icon: Store,         label: 'Small Business SEO', href: '/services/small-business-seo', desc: 'Affordable managed SEO' },
] as const;

// Industry SEO verticals (US) — sub-group in the SEO mega column + mobile drawer
const US_INDUSTRY_SEO = [
  { label: 'Healthcare SEO', href: '/services/healthcare-seo', desc: 'SEO for medical practices' },
  { label: 'Dental SEO',     href: '/services/dental-seo',     desc: 'Rank for local dentist searches' },
  { label: 'Law Firm SEO',   href: '/services/law-firm-seo',   desc: 'SEO for attorneys & law firms' },
] as const;

const US_LOCATIONS = [
  { label: 'Austin',          state: 'TX', href: '/austin/web-design' },
  { label: 'Miami',           state: 'FL', href: '/miami/web-design' },
  { label: 'Denver',          state: 'CO', href: '/denver/web-design' },
  { label: 'Nashville',       state: 'TN', href: '/nashville/web-design' },
  { label: 'New York',        state: 'NY', href: '/new-york/web-design' },
  { label: 'Charlotte',       state: 'NC', href: '/charlotte/web-design' },
  { label: 'Raleigh',         state: 'NC', href: '/raleigh/web-design' },
  { label: 'Tampa',           state: 'FL', href: '/tampa/web-design' },
  { label: 'Portland',        state: 'OR', href: '/portland/web-design' },
  { label: 'Colorado Springs',state: 'CO', href: '/colorado-springs/seo' },
  { label: 'Cleveland',       state: 'OH', href: '/cleveland/web-design' },
] as const;

// Who We Serve — by business type (US desktop mega panel)
const US_WHO_WE_SERVE_TYPES = [
  { label: 'DTC & E-Commerce Brands',        href: '/',                       desc: 'Sell across every channel' },
  { label: 'B2B, Wholesale & Distributors',  href: '/b2b-ecommerce',         desc: 'Trade portals & account pricing' },
  { label: 'Marketplace Sellers',            href: '/services/amazon-agency', desc: 'Amazon, Walmart, TikTok Shop' },
  { label: 'Manufacturers & Distributors',   href: '/ecommerce-for-manufacturers', desc: 'Dealer portals & ERP-synced catalogs' },
  // Points at the replatforming hub, not /ecommerce-consulting, since the hub shipped 2026-08-03.
  { label: 'Brands Replatforming',           href: '/replatforming',         desc: 'Migrate without losing SEO' },
] as const;

// Who We Serve — by what you need (US desktop mega panel)
const US_WHO_WE_SERVE_NEEDS = [
  { label: 'I sell on multiple channels', href: '/omnichannel-commerce',          sub: 'Omnichannel commerce' },
  { label: 'I need a B2B store',          href: '/b2b-ecommerce',                 sub: 'B2B e-commerce' },
  { label: 'I want to migrate platforms', href: '/replatforming',                 sub: 'Replatforming' },
  { label: 'I want AI in my commerce',    href: '/services/ai-agent-development',            sub: 'Commerce AI agents' },
] as const;

// Resources links (US) — the "Resources" mega in the US nav
const US_KNOWLEDGE_HUB = [
  { icon: BookOpen,      label: 'Blog',               href: '/blog',             desc: 'Expert insights & guides' },
  { icon: FileText,      label: 'Case Studies',        href: '/case-studies',     desc: 'Real results from real clients' },
  { icon: LayoutTemplate,label: 'Portfolio',           href: '/portfolio',     desc: 'Browse our work' },
  { icon: Search,        label: 'FAQ',                 href: '/faq',           desc: 'Common questions answered' },
  { icon: Layers,        label: 'Glossary',            href: '/glossary',      desc: 'Commerce & AI terms defined' },
  { icon: TrendingUp,    label: 'AI Citation Study',   href: '/ai-citation-study', desc: 'What AI answers actually cite' },
] as const;

// ─── UK (GB) nav data ─────────────────────────────────────────────────────────
// FactoryJet UK is positioned as an e-commerce-development company first: every
// commerce platform (Shopify/Plus, WooCommerce, Magento/Adobe Commerce,
// BigCommerce, headless, Commerceflo) + AI Agent Development, AI SEO, Web Design.
// Mirrors the US commerce menu. Links point to UK pages where they exist today
// (/uk/shopify-development, /uk/shopify-seo, /uk/ecommerce-seo, /uk/{city}); the
// rest use the global commerce/service pages until UK versions ship.

const GB_SOLUTIONS_CORE = [
  { icon: Layers,        label: 'Omnichannel Commerce',      href: '/omnichannel-commerce',           desc: 'One catalog, inventory & order engine' },
  { icon: Store,         label: 'B2B E-Commerce',            href: '/b2b-ecommerce',                  desc: 'Portals, tiered pricing, net terms' },
  { icon: ShoppingCart,  label: 'E-Commerce Development',    href: '/services/ecommerce-development',  desc: 'End-to-end online stores' },
  { icon: Search,        label: 'E-Commerce Consulting',     href: '/ecommerce-consulting',           desc: 'Platform, migration & scope' },
] as const;

const GB_SOLUTIONS_MARKETPLACES = [
  { icon: ShoppingBag,   label: 'Amazon Agency',             href: '/services/amazon-agency',         desc: 'Ads, SEO & account management' },
  { icon: Mic,           label: 'TikTok Shop Agency',        href: '/services/tiktok-shop-agency',    desc: 'Ads, affiliates & LIVE selling' },
  { icon: Package,       label: 'Walmart Marketplace Agency',href: '/services/walmart-marketplace-agency', desc: 'Approval, WFS & Connect ads' },
] as const;

const GB_SOLUTIONS_GROWTH = [
  { icon: Bot,           label: 'Commerce AI Agents',        href: '/services/ai-agent-development',             desc: 'Agents that list, price & sync' },
  { icon: TrendingUp,    label: 'Commerce SEO & Visibility', href: '/uk/ecommerce-seo',               desc: 'Google, AI answers & marketplaces' },
  { icon: ShoppingBag,   label: 'Shopify & Shopify Plus',    href: '/uk/shopify-development',         desc: 'DTC + B2B on one store' },
] as const;

const GB_SOLUTIONS = [
  ...GB_SOLUTIONS_CORE,
  ...GB_SOLUTIONS_MARKETPLACES,
  ...GB_SOLUTIONS_GROWTH,
] as const;

const GB_PLATFORMS = [
  { icon: ShoppingBag,  label: 'Shopify & Shopify Plus',   href: '/uk/shopify-development',           desc: 'DTC + B2B on one store' },
  { icon: Store,        label: 'Adobe Commerce (Magento)', href: '/services/magento-development',     desc: 'Deep B2B, large catalogs' },
  { icon: FileCode,     label: 'WooCommerce',              href: '/services/woocommerce-development', desc: 'WordPress commerce' },
  { icon: Layers,       label: 'BigCommerce',              href: '/bigcommerce-development',          desc: 'Mid-market B2B value' },
  { icon: Code,         label: 'Headless / composable',    href: '/headless-commerce',               desc: 'Custom front end, any backend' },
  { icon: Zap,          label: 'Commerceflo',              href: '/commerceflo',                     desc: 'AI operator: audits & fixes your store' },
] as const;

const GB_SUPPORT_SERVICES = [
  { icon: Globe,      label: 'Web Design',          href: '/uk/web-design',                       desc: 'Conversion-focused sites' },
  { icon: RefreshCw,  label: 'Website Redesign',    href: '/services/website-redesign',           desc: 'Modernize your existing site' },
  { icon: FileCode,   label: 'WordPress',           href: '/services/wordpress-development',       desc: 'Custom WP sites & plugins' },
  { icon: Code,       label: 'Web App Development',  href: '/services/web-application-development', desc: 'Complex web apps' },
  { icon: TrendingUp, label: 'Shopify SEO',         href: '/uk/shopify-seo',                       desc: 'Rank your Shopify store' },
  { icon: ShoppingCart,label: 'Ecommerce SEO',      href: '/uk/ecommerce-seo',                     desc: 'Product & collection SEO' },
  { icon: Sparkles,   label: 'AI SEO',              href: '/services/ai-seo',                      desc: 'Get cited in AI answers' },
  { icon: Zap,        label: 'AI Automation',       href: '/services/ai-automation',               desc: 'Eliminate repetitive work' },
] as const;

const GB_WHO_WE_SERVE_TYPES = [
  { label: 'DTC & E-Commerce Brands',       href: '/uk',                  desc: 'Sell across every channel' },
  { label: 'B2B, Wholesale & Distributors', href: '/b2b-ecommerce',       desc: 'Trade portals & account pricing' },
  { label: 'Marketplace Sellers',           href: '/uk/ecommerce-seo',    desc: 'Amazon, eBay, TikTok Shop' },
  { label: 'Brands Replatforming',          href: '/ecommerce-consulting',desc: 'Migrate without losing SEO' },
] as const;

const GB_WHO_WE_SERVE_NEEDS = [
  { label: 'I sell on multiple channels', href: '/omnichannel-commerce', sub: 'Omnichannel commerce' },
  { label: 'I need a B2B store',          href: '/b2b-ecommerce',        sub: 'B2B e-commerce' },
  { label: 'I want to migrate platforms', href: '/ecommerce-consulting', sub: 'Replatforming' },
  { label: 'I want AI in my commerce',    href: '/services/ai-agent-development',   sub: 'Commerce AI agents' },
] as const;

const GB_KNOWLEDGE_HUB = [
  { icon: BookOpen,      label: 'Blog',        href: '/blog',         desc: 'Expert insights & guides' },
  { icon: FileText,      label: 'Case Studies', href: '/case-studies', desc: 'Real results from real clients' },
  { icon: LayoutTemplate,label: 'Portfolio',    href: '/portfolio',    desc: 'Browse our work' },
  { icon: Search,        label: 'FAQ',          href: '/faq',          desc: 'Common questions answered' },
  { icon: Layers,        label: 'Glossary',     href: '/glossary',     desc: 'Commerce & AI terms defined' },
] as const;

const GB_LOCATIONS = [
  { label: 'London',     state: 'ENG', href: '/uk/london' },
  { label: 'Manchester', state: 'ENG', href: '/uk/manchester' },
  { label: 'Birmingham', state: 'ENG', href: '/uk/birmingham' },
  { label: 'Leeds',      state: 'ENG', href: '/uk/leeds' },
  { label: 'Liverpool',  state: 'ENG', href: '/uk/liverpool' },
  { label: 'Sheffield',  state: 'ENG', href: '/uk/sheffield' },
  { label: 'Bristol',    state: 'ENG', href: '/uk/bristol' },
  { label: 'Edinburgh',  state: 'SCO', href: '/uk/edinburgh' },
  { label: 'Glasgow',    state: 'SCO', href: '/uk/glasgow' },
  { label: 'Cardiff',    state: 'WAL', href: '/uk/cardiff' },
] as const;

// ─── India nav data ───────────────────────────────────────────────────────────

const IN_WEB_SERVICES = [
  { icon: Globe,          label: 'Web Design',          href: '/web-design',                     desc: 'Custom, conversion-focused sites' },
  { icon: LayoutTemplate, label: 'WordPress',           href: '/wordpress-development',          desc: 'Custom WP sites & plugins' },
  { icon: ShoppingCart,   label: 'E-Commerce',          href: '/services/ecommerce-development', desc: 'End-to-end online stores' },
  { icon: ShoppingBag,    label: 'Shopify Development', href: '/shopify-development',            desc: 'Custom storefronts & themes' },
  { icon: Workflow,       label: 'n8n Automation',      href: '/n8n-automation',                 desc: 'No-code workflow automation' },
  { icon: MessageSquare,  label: 'WhatsApp Chatbot',    href: '/whatsapp-chatbot/',              desc: 'Automate orders, leads & support' },
] as const;

// Hub page href used in both desktop mega and mobile drawer
const IN_AI_HUB_HREF = '/services/ai-agent-development';

// All 7 India AI agents — used in desktop mega grid + mobile drawer
const IN_AI_AGENTS = [
  { icon: MessageSquare, label: 'AI Chatbot',             href: '/services/ai-agent-development/ai-chatbot',             desc: 'Smart 24/7 support' },
  { icon: TrendingUp,    label: 'AI Sales Agent',         href: '/services/ai-agent-development/ai-sales-agent',         desc: 'Automated outreach' },
  { icon: Megaphone,     label: 'AI Marketing Agent',     href: '/services/ai-agent-development/ai-marketing-agent',     desc: 'Automate campaigns' },
  { icon: Mic,           label: 'AI Voice Agent',         href: '/services/ai-agent-development/ai-voice-agent',         desc: 'Voice-based AI calls' },
  { icon: GitBranch,     label: 'AI Workflow Automation', href: '/services/ai-agent-development/ai-workflow-automation', desc: 'End-to-end automation' },
  { icon: Headphones,    label: 'AI Customer Support',    href: '/services/ai-agent-development/ai-customer-support',    desc: 'Resolve tickets faster' },
  { icon: CalendarClock, label: 'AI Scheduling Agent',    href: '/services/ai-agent-development/ai-scheduling-agent',    desc: 'Smart bookings & calendar' },
] as const;

// SEO hub + sub-services (India only) — new "SEO & AI Search" column in the Services mega
const IN_SEO_HUB_HREF = '/seo';
const IN_SEO_SERVICES = [
  { icon: MapPin,       label: 'Local SEO',     href: '/seo/local-seo',     desc: 'Map pack and near-me' },
  { icon: Code,         label: 'Technical SEO', href: '/seo/technical-seo', desc: 'Fast, readable site' },
  { icon: ShoppingCart, label: 'Ecommerce SEO', href: '/seo/ecommerce-seo', desc: 'SEO for online stores' },
  { icon: Link2,        label: 'Link Building', href: '/seo/link-building', desc: 'Real off-page links' },
  { icon: Search,       label: 'SEO Audit',     href: '/seo/seo-audit',     desc: 'Free site check' },
  { icon: Cpu,          label: 'AI SEO',        href: '/ai-seo',            desc: 'Get cited by AI' },
  { icon: Megaphone,    label: 'Digital Marketing', href: '/digital-marketing', desc: 'SEO, ads, social & AI' },
] as const;

// Regional groupings for the 3-column mega Locations panel (India)
const IN_LOCATIONS_WEST = [
  { label: 'Mumbai',    state: 'MH', href: '/web-design/mumbai' },
  { label: 'Pune',      state: 'MH', href: '/web-design/pune' },
  { label: 'Ahmedabad', state: 'GJ', href: '/web-design/ahmedabad' },
  { label: 'Surat',     state: 'GJ', href: '/web-design/surat' },
  { label: 'Vadodara',  state: 'GJ', href: '/web-design/vadodara' },
  { label: 'Rajkot',    state: 'GJ', href: '/web-design/rajkot' },
  { label: 'Indore',    state: 'MP', href: '/web-design/indore' },
] as const;

const IN_LOCATIONS_SOUTH = [
  { label: 'Bangalore',         state: 'KA', href: '/web-design/bangalore' },
  { label: 'Chennai',           state: 'TN', href: '/web-design/chennai' },
  { label: 'Hyderabad',         state: 'TS', href: '/web-design/hyderabad' },
  { label: 'Kochi',             state: 'KL', href: '/web-design/kochi' },
  { label: 'Coimbatore',        state: 'TN', href: '/web-design/coimbatore' },
  { label: 'Madurai',           state: 'TN', href: '/web-design/madurai' },
  { label: 'Visakhapatnam',     state: 'AP', href: '/web-design/visakhapatnam' },
  { label: 'Nagpur',            state: 'MH', href: '/web-design/nagpur' },
  { label: 'Thiruvananthapuram',state: 'KL', href: '/web-design/thiruvananthapuram' },
] as const;

const IN_LOCATIONS_NORTH_EAST = [
  { label: 'Delhi',        state: 'DL', href: '/web-design/delhi' },
  { label: 'Noida',        state: 'UP', href: '/web-design/noida' },
  { label: 'Gurgaon',      state: 'HR', href: '/web-design/gurgaon' },
  { label: 'Jaipur',       state: 'RJ', href: '/web-design/jaipur' },
  { label: 'Kolkata',      state: 'WB', href: '/web-design/kolkata' },
  { label: 'Bhubaneswar',  state: 'OD', href: '/web-design/bhubaneswar' },
] as const;

// Flat array kept for mobile drawer (renders a simple list)
const IN_LOCATIONS = [
  ...IN_LOCATIONS_WEST,
  ...IN_LOCATIONS_SOUTH,
  ...IN_LOCATIONS_NORTH_EAST,
] as const;

// ─── UAE nav data ─────────────────────────────────────────────────────────────

const UAE_WEB_SERVICES = [
  { icon: Globe,        label: 'Web Design',           href: '/services/web-design',            desc: 'Custom, conversion-focused sites' },
  { icon: ShoppingBag,  label: 'Shopify Development',  href: '/services/shopify-development',   desc: 'Custom storefronts & themes' },
  { icon: ShoppingCart, label: 'E-Commerce',           href: '/services/ecommerce-development', desc: 'End-to-end online stores' },
  { icon: Bot,          label: 'AI Agent Development', href: '/services/ai-agent-development',  desc: 'Autonomous AI that works for you' },
] as const;

const UAE_AI_SERVICES = [
  { icon: MessageSquare, label: 'AI Chatbot',    href: '/services/ai-agent-development/ai-chatbot',             desc: 'Smart customer support' },
  { icon: Zap,           label: 'AI Automation', href: '/services/ai-agent-development/ai-workflow-automation', desc: 'Automate repetitive work' },
  { icon: Bot,           label: 'AI Voice Agent',href: '/services/ai-agent-development/ai-voice-agent',         desc: 'Voice-based AI assistants' },
] as const;

const UAE_LOCATIONS = [
  { label: 'Dubai',     state: 'DXB', href: '/uae' },
  { label: 'Abu Dhabi', state: 'AUH', href: '/uae' },
  { label: 'Sharjah',   state: 'SHJ', href: '/uae' },
] as const;

// ─── Resources — shared across all locales ────────────────────────────────────

const RESOURCES = [
  { icon: FileText,  label: 'Blog',         href: '/blog', desc: 'Expert insights & industry trends' },
  { icon: BookOpen,  label: 'Case Studies',  href: '/case-studies', desc: 'Real results from real projects' },
] as const;

// ─── Locale config map ────────────────────────────────────────────────────────

const LOCALE_CONFIG = {
  us: {
    webServices:     US_WEB_SERVICES,
    aiServices:      US_AI_SERVICES,
    locations:       US_LOCATIONS,
    locationsLabel:  'US Cities We Serve',
    portfolioHref:   '/portfolio',
    pricingHref:     '/pricing',
    aboutHref:       '/about',
    featuredHeadline:'One system, every channel',
    featuredBody:    'One catalog, one inventory, and one order engine across your store, marketplaces, and B2B.',
    featuredStats:   ['DTC + B2B on one system', 'A decade-plus building commerce', 'You own what we build'],
    featuredCtaLabel:'Explore commerce solutions',
    featuredCtaHref: '/omnichannel-commerce',
    modalRegion:     'us' as ModalRegion,
    defaultCtaLabel: 'Talk to the Founder',
  },
  gb: {
    webServices:     GB_SUPPORT_SERVICES,
    aiServices:      US_AI_SERVICES,
    locations:       GB_LOCATIONS,
    locationsLabel:  'UK Cities We Serve',
    portfolioHref:   '/portfolio',
    pricingHref:     '/pricing',
    aboutHref:       '/about',
    featuredHeadline:'One system, every channel',
    featuredBody:    'One catalog, one inventory, and one order engine across your store, marketplaces, and B2B.',
    featuredStats:   ['DTC + B2B on one system', 'A decade-plus building commerce', 'You own what we build'],
    featuredCtaLabel:'Explore commerce solutions',
    featuredCtaHref: '/omnichannel-commerce',
    modalRegion:     'uk' as ModalRegion,
    defaultCtaLabel: 'Talk to the Founder',
  },
  in: {
    webServices:     IN_WEB_SERVICES,
    aiServices:      IN_AI_AGENTS,
    locations:       IN_LOCATIONS,
    locationsLabel:  'Indian Cities We Serve',
    portfolioHref:   '/portfolio',
    pricingHref:     '/pricing',
    aboutHref:       '/about',
    featuredHeadline:'7-Day Delivery Guarantee',
    featuredBody:    'Custom websites delivered in 7 days, built by senior engineers, fixed-price, with full code ownership.',
    featuredStats:   ['500+ businesses served', '12+ years of expertise', 'Fixed-price projects'],
    featuredCtaLabel:'See our work',
    featuredCtaHref: '/portfolio',
    modalRegion:     'in' as ModalRegion,
    defaultCtaLabel: 'Get a Quote',
  },
  uae: {
    webServices:     UAE_WEB_SERVICES,
    aiServices:      UAE_AI_SERVICES,
    locations:       UAE_LOCATIONS,
    locationsLabel:  'UAE Cities We Serve',
    portfolioHref:   '/portfolio',
    pricingHref:     '/uae',
    aboutHref:       '/about',
    featuredHeadline:'7-Day Delivery Guarantee',
    featuredBody:    'Custom websites for Dubai & UAE businesses, delivered in 7 days, fixed-price, with full code ownership.',
    featuredStats:   ['500+ businesses served', '12+ years of expertise', 'No hidden fees'],
    featuredCtaLabel:'See our work',
    featuredCtaHref: '/portfolio',
    modalRegion:     'in' as ModalRegion, // UAE served by India team; 'uae' not in ModalRegion
    defaultCtaLabel: 'Get a Free Quote',
  },
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────

type CtaItem = {
  label: string;
  href?: string;
  modal?: boolean;
  region?: ModalRegion;
};

export interface SiteHeaderProps {
  /** Controls which locale's nav data, cities, and links are shown. Default: 'us'. */
  locale?: SiteHeaderLocale;
  logoText?: string;
  logoHref?: string;
  /** @deprecated SiteHeader now manages its own mega-nav. This prop is ignored. */
  navLinks?: ReadonlyArray<CtaItem>;
  /** Pass a custom CTA item to override the default modal CTA. */
  cta?: CtaItem;
  className?: string;
}

// ─── ServiceCard sub-component ────────────────────────────────────────────────

type IconType = React.ElementType<{ size?: number; strokeWidth?: number; className?: string }>;

function ServiceCard({
  icon: Icon,
  label,
  href,
  desc,
}: {
  icon: IconType;
  label: string;
  href: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-[#F05A28]/5"
    >
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#F05A28]/10 text-[#F05A28] transition-colors group-hover:bg-[#F05A28]/15">
        <Icon size={14} strokeWidth={1.8} />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="font-fj-body text-[13px] font-semibold leading-tight text-fj-ink transition-colors group-hover:text-[#F05A28]">
          {label}
        </span>
        <span className="truncate font-fj-body text-[11px] leading-tight text-fj-neutral-400">
          {desc}
        </span>
      </span>
    </Link>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function SiteHeader({
  locale = 'us',
  logoText = 'FactoryJet',
  logoHref = '/',
  cta,
  className = '',
}: SiteHeaderProps) {
  const { openModal } = useContactModal();
  const cfg = LOCALE_CONFIG[locale];

  // Commerce-first locales (US + UK) share the Solutions/Platforms/Services/
  // Who-we-serve/Company mega structure. Non-commerce locales (India/UAE) keep
  // the simpler Services + Locations layout.
  const isCommerce = locale === 'us' || locale === 'gb';
  const SOLUTIONS   = locale === 'gb' ? GB_SOLUTIONS          : US_SOLUTIONS;
  const SOLUTIONS_CORE = locale === 'gb' ? GB_SOLUTIONS_CORE : US_SOLUTIONS_CORE;
  const SOLUTIONS_MARKETPLACES = locale === 'gb' ? GB_SOLUTIONS_MARKETPLACES : US_SOLUTIONS_MARKETPLACES;
  const SOLUTIONS_GROWTH = locale === 'gb' ? GB_SOLUTIONS_GROWTH : US_SOLUTIONS_GROWTH;
  const PLATFORMS   = locale === 'gb' ? GB_PLATFORMS          : US_PLATFORMS;
  const SUPPORT     = locale === 'gb' ? GB_SUPPORT_SERVICES   : US_SUPPORT_SERVICES;
  const WHO_TYPES   = locale === 'gb' ? GB_WHO_WE_SERVE_TYPES : US_WHO_WE_SERVE_TYPES;
  const WHO_NEEDS   = locale === 'gb' ? GB_WHO_WE_SERVE_NEEDS : US_WHO_WE_SERVE_NEEDS;
  const KNOW_HUB    = locale === 'gb' ? GB_KNOWLEDGE_HUB      : US_KNOWLEDGE_HUB;

  const [openDropdown, setOpenDropdown] = useState<'solutions' | 'aiagents' | 'platforms' | 'services' | 'whoweserve' | 'locations' | 'knowhub' | 'resources' | 'company' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAiAgentsOpen, setMobileAiAgentsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown on Escape; clear timer on unmount
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openDrop = (id: 'solutions' | 'aiagents' | 'platforms' | 'services' | 'whoweserve' | 'locations' | 'knowhub' | 'resources' | 'company') => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(id);
  };

  const scheduleClosed = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 130);
  };

  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleCta = () => {
    if (cta?.modal) {
      openModal(cta.region ?? cfg.modalRegion);
    } else if (cta?.href) {
      window.location.href = cta.href;
    } else {
      openModal(cfg.modalRegion);
    }
  };

  return (
    <>
      {/* -- Main header bar ------------------------------------------------- */}
      <header
        className={`sticky top-0 z-[9999] bg-fj-cream/95 backdrop-blur-sm border-b border-fj-neutral-200 ${className}`.trim()}
      >
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">

            {/* Logo */}
            <Link
              href={logoHref}
              className="flex-shrink-0 text-fj-ink"
              aria-label={logoText}
            >
              <Wordmark label={null} className="h-[19px] w-auto md:h-[21px]" />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">

              {/* Services trigger + mega-dropdown (India / UAE only, US uses commerce menus below) */}
              {!isCommerce && (
              <div
                className="relative"
                onMouseEnter={() => openDrop('services')}
                onMouseLeave={scheduleClosed}
              >
                <button
                  type="button"
                  aria-expanded={openDropdown === 'services'}
                  aria-haspopup="menu"
                  className="flex items-center gap-1 rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]"
                >
                  Services
                  <ChevronDown
                    size={14}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180 text-[#F05A28]' : 'text-fj-neutral-400'}`}
                  />
                </button>

                {openDropdown === 'services' && (
                  <div
                    className="fixed left-1/2 top-[72px] z-50 -translate-x-1/2 px-3 pt-2"
                    onMouseEnter={keepOpen}
                    onMouseLeave={scheduleClosed}
                    role="menu"
                  >
                    {locale === 'in' ? (

                      /* ── India mega menu: 3-col hub layout ──────────────── */
                      <div className="w-[1000px] max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                        <div className="grid grid-cols-[184px_224px_minmax(0,1fr)_172px]">

                          {/* Web Services column */}
                          <div className="p-4">
                            <p className="mb-2 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                              Web Services
                            </p>
                            {IN_WEB_SERVICES.slice(0, 4).map((s) => (
                              <ServiceCard key={s.href} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                            ))}
                            <p className="mb-1.5 mt-3 font-fj-mono text-[9.5px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-300">
                              Automation
                            </p>
                            {IN_WEB_SERVICES.slice(4, 6).map((s) => (
                              <ServiceCard key={s.href} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                            ))}
                          </div>

                          {/* SEO & AI Search column (NEW) */}
                          <div className="border-l border-fj-neutral-100 p-4" style={{ backgroundColor: '#FFFDFB' }}>
                            <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                              SEO &amp; AI Search
                            </p>

                            {/* SEO hub card */}
                            <Link
                              href={IN_SEO_HUB_HREF}
                              className="group mb-2.5 flex items-center gap-3 rounded-xl border border-[#F3C9B6] p-3 transition-all hover:border-[#F05A28] hover:shadow-sm"
                              style={{ background: 'linear-gradient(135deg,#FCEEE8,#FFF6F1)' }}
                            >
                              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#B23E13] text-white">
                                <TrendingUp size={17} strokeWidth={1.8} />
                              </span>
                              <span className="flex flex-1 flex-col">
                                <span className="font-fj-body text-[13.5px] font-semibold text-fj-ink transition-colors group-hover:text-[#F05A28]">
                                  SEO Services
                                </span>
                                <span className="font-fj-body text-[11px] leading-snug text-fj-neutral-500">
                                  Rank on Google and get cited by AI
                                </span>
                              </span>
                            </Link>

                            {/* Sub-services */}
                            <div className="space-y-0.5">
                              {IN_SEO_SERVICES.map((s) => (
                                <ServiceCard key={s.href} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                              ))}
                            </div>

                            {/* SEO by city */}
                            <Link
                              href={IN_SEO_HUB_HREF}
                              className="mt-2 flex items-center gap-1 px-2.5 font-fj-body text-[11.5px] font-semibold text-[#B23E13] transition-opacity hover:opacity-75"
                            >
                              SEO by city <ArrowRight size={11} strokeWidth={2.5} />
                            </Link>
                          </div>

                          {/* AI Agent Development Hub column */}
                          <div
                            className="border-l border-fj-neutral-100 p-4"
                            style={{
                              backgroundImage: 'radial-gradient(#E8E4DC 1px, transparent 1px)',
                              backgroundSize: '18px 18px',
                              backgroundColor: '#F7F5F0',
                            }}
                          >
                            <p className="mb-3 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                              AI Agent Development
                            </p>

                            {/* Hub header, links to parent hub page */}
                            <Link
                              href={IN_AI_HUB_HREF}
                              className="group mb-3 flex items-center gap-3 rounded-xl border border-fj-neutral-200 bg-white p-3 transition-all hover:border-[#F05A28] hover:shadow-sm"
                            >
                              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#B23E13] text-white">
                                <Cpu size={17} strokeWidth={1.8} />
                              </span>
                              <span className="flex flex-1 flex-col">
                                <span className="font-fj-mono text-[9.5px] font-semibold uppercase tracking-[0.1em] text-fj-neutral-400">
                                  Hub Page
                                </span>
                                <span className="font-fj-body text-[13.5px] font-semibold text-fj-ink transition-colors group-hover:text-[#F05A28]">
                                  AI Agent Development
                                </span>
                              </span>
                              <span className="flex flex-col items-end gap-1.5">
                                <span className="rounded-full bg-[#FEF0EB] px-2 py-0.5 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                                  7 agents
                                </span>
                                <span className="flex items-center gap-1 font-fj-body text-[11px] font-semibold text-[#B23E13]">
                                  Explore all <ArrowRight size={10} strokeWidth={2.5} />
                                </span>
                              </span>
                            </Link>

                            {/* 2-col agents grid (6 shown, hub link covers the 7th) */}
                            <div className="grid grid-cols-2 gap-1.5">
                              {IN_AI_AGENTS.slice(0, 6).map((agent) => (
                                <Link
                                  key={agent.href}
                                  href={agent.href}
                                  className="group flex flex-col rounded-lg border border-fj-neutral-200 bg-white px-2.5 py-2 transition-all hover:border-[#F05A28] hover:shadow-sm"
                                >
                                  <agent.icon size={13} strokeWidth={1.8} className="mb-1 text-[#F05A28]" />
                                  <span className="font-fj-body text-[12px] font-semibold leading-tight text-fj-ink transition-colors group-hover:text-[#F05A28]">
                                    {agent.label}
                                  </span>
                                  <span className="mt-0.5 font-fj-body text-[10.5px] leading-tight text-fj-neutral-400">
                                    {agent.desc}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <Link
                              href={IN_AI_HUB_HREF}
                              className="mt-2.5 inline-flex items-center gap-1 font-fj-body text-[11px] font-semibold text-[#B23E13] transition-opacity hover:opacity-75"
                            >
                              Explore all 7 agents <ArrowRight size={11} strokeWidth={2.5} />
                            </Link>
                          </div>

                          {/* Featured panel, dark charcoal for India */}
                          <div
                            className="flex flex-col justify-between rounded-r-2xl p-4"
                            style={{ background: '#0F0F12' }}
                          >
                            <div>
                              <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                                Why FactoryJet
                              </p>
                              <p className="font-fj-display text-[18px] font-semibold leading-tight text-[#FAFAF7]">
                                {cfg.featuredHeadline}
                              </p>
                              <p className="mt-2 font-fj-body text-[11.5px] leading-relaxed text-white/60">
                                {cfg.featuredBody}
                              </p>
                              <ul className="mt-4 space-y-2">
                                {cfg.featuredStats.map((item) => (
                                  <li key={item} className="flex items-center gap-2">
                                    <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-[#1E1E22] ring-1 ring-[#F05A28]/40">
                                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                                        <path d="M1 3L3 5L7 1" stroke="#F05A28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </span>
                                    <span className="font-fj-body text-[11.5px] text-white/70">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5">
                              <span className="mb-2 inline-block rounded-full bg-[#1E1E22] px-2 py-0.5 font-fj-mono text-[9.5px] font-bold tracking-wider text-fj-neutral-400">
                                INDIA
                              </span>
                              <Link
                                href={cfg.featuredCtaHref}
                                className="flex items-center gap-1.5 font-fj-body text-[12.5px] font-semibold text-white/70 transition-colors hover:text-white"
                              >
                                {cfg.featuredCtaLabel}
                                <ArrowRight size={13} strokeWidth={2} />
                              </Link>
                            </div>
                          </div>

                        </div>
                      </div>

                    ) : (

                      /* ── Generic mega menu (UAE) ────────────────────── */
                      <div className="w-[740px] overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                        <div className="grid grid-cols-[1fr_1fr_212px]">

                          {/* Web Services column */}
                          <div className="p-5">
                            <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                              Web Services
                            </p>
                            <div className="space-y-0.5">
                              {cfg.webServices.map((s) => (
                                <ServiceCard key={s.href} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                              ))}
                            </div>
                          </div>

                          {/* AI Services column */}
                          <div className="border-l border-fj-neutral-100 p-5">
                            <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                              AI Services
                            </p>
                            <div className="space-y-0.5">
                              {cfg.aiServices.map((s) => (
                                <ServiceCard key={s.href} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                              ))}
                            </div>
                          </div>

                          {/* Featured panel, orange gradient for US/UAE */}
                          <div
                            className="flex flex-col justify-between rounded-r-2xl p-5"
                            style={{ background: 'linear-gradient(145deg, #F05A28 0%, #c44820 100%)' }}
                          >
                            <div>
                              <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
                                Why FactoryJet
                              </p>
                              <p className="font-fj-display text-[19px] font-semibold leading-tight text-white">
                                {cfg.featuredHeadline}
                              </p>
                              <p className="mt-2 font-fj-body text-[12px] leading-relaxed text-white/75">
                                {cfg.featuredBody}
                              </p>
                              <ul className="mt-4 space-y-2">
                                {cfg.featuredStats.map((item) => (
                                  <li key={item} className="flex items-center gap-2">
                                    <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                                        <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </span>
                                    <span className="font-fj-body text-[11.5px] text-white/85">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Link
                              href={cfg.featuredCtaHref}
                              className="mt-5 flex items-center gap-1.5 font-fj-body text-[12.5px] font-semibold text-white/80 transition-colors hover:text-white"
                            >
                              {cfg.featuredCtaLabel}
                              <ArrowRight size={13} strokeWidth={2} />
                            </Link>
                          </div>

                        </div>
                      </div>

                    )}
                  </div>
                )}
              </div>
              )}

              {/* ── US commerce menus: Solutions · Platforms · Services ── */}
              {isCommerce && (
                <>
                  {/* Solutions */}
                  <div className="relative" onMouseEnter={() => openDrop('solutions')} onMouseLeave={scheduleClosed}>
                    <button type="button" aria-expanded={openDropdown === 'solutions'} aria-haspopup="menu" className="flex items-center gap-1 rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]">
                      Solutions
                      <ChevronDown size={14} strokeWidth={2} className={`transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180 text-[#F05A28]' : 'text-fj-neutral-400'}`} />
                    </button>
                    {openDropdown === 'solutions' && (
                      <div className="fixed left-1/2 top-[72px] z-50 -translate-x-1/2 px-3 pt-2" onMouseEnter={keepOpen} onMouseLeave={scheduleClosed} role="menu">
                        <div className="w-[1040px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-90px)] overflow-y-auto rounded-2xl border border-fj-neutral-200 bg-white shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                          <div className="grid grid-cols-[1fr_1fr_1fr_250px]">
                            {/* Column 1: Core & B2B Commerce */}
                            <div className="p-4">
                              <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">Core &amp; B2B Commerce</p>
                              <div className="space-y-0.5">
                                {SOLUTIONS_CORE.map((s) => (
                                  <ServiceCard key={s.href} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                                ))}
                              </div>
                            </div>
                            {/* Column 2: Marketplaces & Retail */}
                            <div className="border-l border-fj-neutral-100 p-4">
                              <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">Marketplaces &amp; Retail</p>
                              <div className="space-y-0.5">
                                {SOLUTIONS_MARKETPLACES.map((s) => (
                                  <ServiceCard key={s.href} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                                ))}
                              </div>
                            </div>
                            {/* Column 3: Growth & AI Tools */}
                            <div className="border-l border-fj-neutral-100 p-4">
                              <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">Growth &amp; AI Tools</p>
                              <div className="space-y-0.5">
                                {SOLUTIONS_GROWTH.map((s) => (
                                  <ServiceCard key={s.href} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                                ))}
                              </div>
                            </div>
                            {/* Column 4: Enterprise Showcase Panel */}
                            <div className="flex flex-col justify-between rounded-r-2xl p-5" style={{ background: 'linear-gradient(145deg, #141414 0%, #1c1c22 100%)' }}>
                              <div>
                                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 font-fj-mono text-[9.5px] font-bold uppercase tracking-[0.15em] text-[#FF5622]">
                                  Enterprise Commerce
                                </div>
                                <p className="mt-2.5 font-fj-display text-[17px] font-semibold leading-tight text-white">One system, every channel</p>
                                <p className="mt-2 font-fj-body text-[11.5px] leading-relaxed text-white/70">One catalog, inventory, and order engine across your DTC store, marketplaces, and B2B portals.</p>
                                <ul className="mt-3.5 space-y-1.5">
                                  {['DTC + B2B unified stack', 'Zero-downtime cutover guarantee', 'Full code & data ownership'].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                      <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#FF5622]/20 text-[#FF5622]">
                                        <svg width="7" height="5" viewBox="0 0 8 6" fill="none" aria-hidden="true"><path d="M1 3L3 5L7 1" stroke="#FF5622" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                      </span>
                                      <span className="font-fj-body text-[11px] text-white/85">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <Link href="/replatforming" className="mt-4 flex items-center gap-1.5 font-fj-body text-[12px] font-semibold text-[#FF5622] transition-opacity hover:opacity-85">
                                Explore Replatforming Hub <ArrowRight size={12} strokeWidth={2} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* AI Agents */}
                  <div className="relative" onMouseEnter={() => openDrop('aiagents')} onMouseLeave={scheduleClosed}>
                    <button type="button" aria-expanded={openDropdown === 'aiagents'} aria-haspopup="menu" className="flex items-center gap-1 rounded-lg px-3 py-2 font-fj-body text-[14.5px] font-medium text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]">
                      AI Agents
                      <ChevronDown size={14} strokeWidth={2} className={`transition-transform duration-200 ${openDropdown === 'aiagents' ? 'rotate-180 text-[#F05A28]' : 'text-fj-neutral-400'}`} />
                    </button>
                    {openDropdown === 'aiagents' && (
                      <div className="fixed left-1/2 top-[72px] z-50 -translate-x-1/2 px-3 pt-2" onMouseEnter={keepOpen} onMouseLeave={scheduleClosed} role="menu">
                        <div className="w-[840px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-90px)] overflow-y-auto rounded-2xl border border-fj-neutral-200 bg-white shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                          <div className="grid grid-cols-[1.1fr_260px]">
                            <div className="p-4">
                              <div className="flex items-center justify-between mb-2 px-1">
                                <p className="font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">AI Agent Development Services</p>
                                <Link href="/services/ai-agent-development" className="font-fj-body text-[11px] font-semibold text-[#B23E13] hover:underline">
                                  Overview &amp; Architecture →
                                </Link>
                              </div>
                              <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                                {US_AI_AGENTS_NAV.map((s) => (
                                  <ServiceCard key={s.href} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col justify-between rounded-r-2xl p-5" style={{ background: '#0F0F12' }}>
                              <div>
                                <p className="mb-2 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">US Operations</p>
                                <p className="font-fj-display text-[16.5px] font-semibold leading-snug text-[#FAFAF7]">
                                  Custom AI agents that work your real queues
                                </p>
                                <p className="mt-2 font-fj-body text-[11.5px] leading-relaxed text-white/60">
                                  Wired into Zendesk, HubSpot, NetSuite, Shopify &amp; Slack. Human approval on anything costly.
                                </p>
                                <ul className="mt-3 space-y-1.5">
                                  {['Zendesk & Intercom resolution', 'HubSpot & Salesforce qualification', 'NetSuite & ERP 3-way matching', 'Full code & prompt ownership'].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                      <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#1E1E22] ring-1 ring-[#F05A28]/40">
                                        <svg width="7" height="5" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                                          <path d="M1 3L3 5L7 1" stroke="#F05A28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </span>
                                      <span className="font-fj-body text-[11px] text-white/80">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <Link
                                href="/services/ai-agent-development"
                                className="mt-4 flex items-center gap-1.5 font-fj-body text-[12px] font-semibold text-[#F05A28] transition-opacity hover:opacity-75"
                              >
                                Explore AI Agent Architecture <ArrowRight size={12} strokeWidth={2} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Platforms */}
                  <div className="relative" onMouseEnter={() => openDrop('platforms')} onMouseLeave={scheduleClosed}>
                    <button type="button" aria-expanded={openDropdown === 'platforms'} aria-haspopup="menu" className="flex items-center gap-1 rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]">
                      Platforms
                      <ChevronDown size={14} strokeWidth={2} className={`transition-transform duration-200 ${openDropdown === 'platforms' ? 'rotate-180 text-[#F05A28]' : 'text-fj-neutral-400'}`} />
                    </button>
                    {openDropdown === 'platforms' && (
                      <div className="fixed left-1/2 top-[72px] z-50 -translate-x-1/2 px-3 pt-2" onMouseEnter={keepOpen} onMouseLeave={scheduleClosed} role="menu">
                        <div className="w-[840px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-90px)] overflow-y-auto rounded-2xl border border-fj-neutral-200 bg-white shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                          <div className="grid grid-cols-[1fr_260px]">
                            <div className="p-4">
                              <p className="mb-2 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">Platforms we build on</p>
                              <div className="grid grid-cols-2 gap-x-2">
                                {PLATFORMS.map((s) => (
                                  <ServiceCard key={s.label} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                                ))}
                              </div>
                            </div>
                            {/* Replatforming column, US only; the UK has no migration spokes yet. */}
                            {locale === 'us' && (
                              <div className="border-l border-fj-neutral-100 bg-fj-cream/40 p-4">
                                <Link
                                  href={US_REPLATFORMING_HUB}
                                  className="group mb-1 flex items-center gap-1.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400 transition-colors hover:text-[#B23E13]"
                                >
                                  Replatforming
                                  <ArrowRight size={11} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                                </Link>
                                <p className="mb-3 font-fj-body text-[11.5px] leading-snug text-fj-neutral-400">
                                  Migrate without losing rankings.
                                </p>
                                <ul className="space-y-0.5">
                                  {US_REPLATFORMING.map((r) => (
                                    <li key={r.href}>
                                      <Link
                                        href={r.href}
                                        className="block rounded-md px-2 py-1.5 font-fj-body text-[12.5px] font-medium leading-tight text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#B23E13]"
                                      >
                                        {r.label}
                                        {'note' in r && r.note && (
                                          <span className="block font-normal text-[11px] text-fj-neutral-400">{r.note}</span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Services (supporting) */}
                  <div className="relative" onMouseEnter={() => openDrop('services')} onMouseLeave={scheduleClosed}>
                    <button type="button" aria-expanded={openDropdown === 'services'} aria-haspopup="menu" className="flex items-center gap-1 rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]">
                      Services
                      <ChevronDown size={14} strokeWidth={2} className={`transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180 text-[#F05A28]' : 'text-fj-neutral-400'}`} />
                    </button>
                    {openDropdown === 'services' && (
                      <div className="fixed left-1/2 top-[72px] z-50 -translate-x-1/2 px-3 pt-2" onMouseEnter={keepOpen} onMouseLeave={scheduleClosed} role="menu">
                        <div className={`${locale === 'us' ? 'w-[920px]' : 'w-[620px]'} max-w-[calc(100vw-2rem)] max-h-[calc(100vh-90px)] overflow-y-auto rounded-2xl border border-fj-neutral-200 bg-white shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5`}>
                          <div className={locale === 'us' ? 'grid grid-cols-[1fr_320px]' : ''}>
                            <div className="p-4">
                              <p className="mb-2 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">Supporting services</p>
                              <div className="grid grid-cols-2 gap-x-2">
                                {SUPPORT.map((s) => (
                                  <ServiceCard key={s.label} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                                ))}
                              </div>
                            </div>

                            {/* SEO & AI Search column, US only; the UK SEO spokes live under /uk. */}
                            {locale === 'us' && (
                              <div className="border-l border-fj-neutral-100 p-4" style={{ backgroundColor: '#FFFDFB' }}>
                                <p className="mb-2 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                                  SEO &amp; AI Search
                                </p>

                                {/* SEO hub card */}
                                <Link
                                  href={US_SEO_HUB_HREF}
                                  className="group mb-2 flex items-center gap-3 rounded-xl border border-[#F3C9B6] p-2.5 transition-all hover:border-[#F05A28] hover:shadow-sm"
                                  style={{ background: 'linear-gradient(135deg,#FCEEE8,#FFF6F1)' }}
                                >
                                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#B23E13] text-white">
                                    <TrendingUp size={15} strokeWidth={1.8} />
                                  </span>
                                  <span className="flex flex-1 flex-col">
                                    <span className="font-fj-body text-[13px] font-semibold text-fj-ink transition-colors group-hover:text-[#F05A28]">
                                      SEO Services
                                    </span>
                                    <span className="font-fj-body text-[10.5px] leading-snug text-fj-neutral-500">
                                      Rank on Google and get cited by AI
                                    </span>
                                  </span>
                                </Link>

                                {/* Sub-services */}
                                <div className="space-y-0.5">
                                  {US_SEO_SERVICES.map((s) => (
                                    <ServiceCard key={s.href} icon={s.icon} label={s.label} href={s.href} desc={s.desc} />
                                  ))}
                                </div>

                                {/* Industry verticals */}
                                <p className="mb-1 mt-2.5 font-fj-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-400">
                                  By industry
                                </p>
                                <div className="grid grid-cols-3 gap-1">
                                  {US_INDUSTRY_SEO.map((s) => (
                                    <Link
                                      key={s.href}
                                      href={s.href}
                                      className="rounded-md bg-fj-neutral-100/70 px-2 py-1 text-center font-fj-body text-[11px] font-medium leading-tight text-fj-ink transition-colors hover:bg-[#F05A28]/10 hover:text-[#B23E13]"
                                    >
                                      {s.label.replace(' SEO', '')}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Who We Serve trigger, US only */}
              {isCommerce && (
                <div
                  className="relative"
                  onMouseEnter={() => openDrop('whoweserve')}
                  onMouseLeave={scheduleClosed}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === 'whoweserve'}
                    aria-haspopup="menu"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]"
                  >
                    Who we serve
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${openDropdown === 'whoweserve' ? 'rotate-180 text-[#F05A28]' : 'text-fj-neutral-400'}`}
                    />
                  </button>

                  {openDropdown === 'whoweserve' && (
                    <div
                      className="fixed left-1/2 top-[72px] z-50 -translate-x-1/2 px-3 pt-2"
                      onMouseEnter={keepOpen}
                      onMouseLeave={scheduleClosed}
                      role="menu"
                    >
                      <div className="w-[860px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-90px)] overflow-y-auto rounded-2xl border border-fj-neutral-200 bg-white shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                        <div className="grid grid-cols-[1fr_1fr_240px]">

                          {/* By Business Type */}
                          <div className="p-4">
                            <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">By business type</p>
                            <div className="space-y-0.5">
                              {WHO_TYPES.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="group flex flex-col rounded-lg px-2.5 py-1.5 transition-colors hover:bg-[#F05A28]/5"
                                >
                                  <span className="font-fj-body text-[13px] font-semibold leading-tight text-fj-ink transition-colors group-hover:text-[#F05A28]">
                                    {item.label}
                                  </span>
                                  <span className="font-fj-body text-[11px] leading-tight text-fj-neutral-400">
                                    {item.desc}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* By What You Need */}
                          <div className="border-l border-fj-neutral-100 p-4">
                            <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">By what you need</p>
                            <div className="space-y-0.5">
                              {WHO_NEEDS.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="group flex flex-col rounded-lg border border-transparent px-2.5 py-2 transition-all hover:border-fj-neutral-200 hover:bg-[#F05A28]/5"
                                >
                                  <span className="font-fj-body text-[13px] font-semibold leading-tight text-fj-ink transition-colors group-hover:text-[#F05A28]">
                                    {item.label}
                                  </span>
                                  <span className="font-fj-body text-[11px] leading-tight text-fj-neutral-400">
                                    {item.sub}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Featured panel */}
                          <div className="flex flex-col justify-between rounded-r-2xl p-5" style={{ background: '#0F0F12' }}>
                            <div>
                              <p className="mb-2 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">Case study</p>
                              <p className="font-fj-display text-[16px] font-semibold leading-snug text-[#FAFAF7]">
                                Bombay Petals: wholesale ordering, online
                              </p>
                              <p className="mt-2 font-fj-body text-[11.5px] leading-relaxed text-white/60">
                                A B2B commerce build so trade buyers order online with tiered pricing, not by email and phone.
                              </p>
                            </div>
                            <Link
                              href="/case-studies"
                              className="mt-4 flex items-center gap-1.5 font-fj-body text-[12px] font-semibold text-[#F05A28] transition-opacity hover:opacity-75"
                            >
                              View all case studies <ArrowRight size={12} strokeWidth={2} />
                            </Link>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Locations trigger + dropdown, India / UAE only on desktop */}
              {!isCommerce && (
              <div
                className="relative"
                onMouseEnter={() => openDrop('locations')}
                onMouseLeave={scheduleClosed}
              >
                <button
                  type="button"
                  aria-expanded={openDropdown === 'locations'}
                  aria-haspopup="menu"
                  className="flex items-center gap-1 rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]"
                >
                  Locations
                  <ChevronDown
                    size={14}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${openDropdown === 'locations' ? 'rotate-180 text-[#F05A28]' : 'text-fj-neutral-400'}`}
                  />
                </button>

                {openDropdown === 'locations' && (
                  <div
                    className="absolute left-0 top-full z-50 pt-2.5"
                    onMouseEnter={keepOpen}
                    onMouseLeave={scheduleClosed}
                    role="menu"
                  >
                    {locale === 'in' ? (

                      /* ── India: Regional 3-column mega locations panel ──── */
                      <div className="w-[620px] overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                        {/* Header row */}
                        <div className="flex items-center justify-between border-b border-fj-neutral-100 px-5 py-3">
                          <p className="font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                            Indian Cities We Serve
                          </p>
                          <Link
                            href="/web-design"
                            className="flex items-center gap-1 font-fj-body text-[11.5px] font-semibold text-[#B23E13] transition-opacity hover:opacity-75"
                          >
                            View all 22 cities <ArrowRight size={11} strokeWidth={2.5} />
                          </Link>
                        </div>

                        {/* 3-column regional grid */}
                        <div className="grid grid-cols-3 divide-x divide-fj-neutral-100 p-2">

                          {/* West & Central */}
                          <div className="px-3 py-2">
                            <p className="mb-2 px-1.5 font-fj-mono text-[9px] font-bold uppercase tracking-[0.18em] text-fj-neutral-300">
                              West &amp; Central
                            </p>
                            {IN_LOCATIONS_WEST.map((loc) => (
                              <Link
                                key={loc.href}
                                href={loc.href}
                                className="group flex items-center gap-2 rounded-lg px-1.5 py-1.5 transition-colors hover:bg-[#F05A28]/5"
                              >
                                <MapPin size={10} strokeWidth={2} className="flex-shrink-0 text-fj-neutral-300 transition-colors group-hover:text-[#F05A28]" />
                                <span className="font-fj-body text-[12.5px] text-fj-ink transition-colors group-hover:text-[#F05A28]">
                                  {loc.label}
                                  <span className="ml-1 text-[10.5px] text-fj-neutral-400">{loc.state}</span>
                                </span>
                              </Link>
                            ))}
                          </div>

                          {/* South */}
                          <div className="px-3 py-2">
                            <p className="mb-2 px-1.5 font-fj-mono text-[9px] font-bold uppercase tracking-[0.18em] text-fj-neutral-300">
                              South
                            </p>
                            {IN_LOCATIONS_SOUTH.map((loc) => (
                              <Link
                                key={loc.href}
                                href={loc.href}
                                className="group flex items-center gap-2 rounded-lg px-1.5 py-1.5 transition-colors hover:bg-[#F05A28]/5"
                              >
                                <MapPin size={10} strokeWidth={2} className="flex-shrink-0 text-fj-neutral-300 transition-colors group-hover:text-[#F05A28]" />
                                <span className="font-fj-body text-[12.5px] text-fj-ink transition-colors group-hover:text-[#F05A28]">
                                  {loc.label}
                                  <span className="ml-1 text-[10.5px] text-fj-neutral-400">{loc.state}</span>
                                </span>
                              </Link>
                            ))}
                          </div>

                          {/* North & East */}
                          <div className="px-3 py-2">
                            <p className="mb-2 px-1.5 font-fj-mono text-[9px] font-bold uppercase tracking-[0.18em] text-fj-neutral-300">
                              North &amp; East
                            </p>
                            {IN_LOCATIONS_NORTH_EAST.map((loc) => (
                              <Link
                                key={loc.href}
                                href={loc.href}
                                className="group flex items-center gap-2 rounded-lg px-1.5 py-1.5 transition-colors hover:bg-[#F05A28]/5"
                              >
                                <MapPin size={10} strokeWidth={2} className="flex-shrink-0 text-fj-neutral-300 transition-colors group-hover:text-[#F05A28]" />
                                <span className="font-fj-body text-[12.5px] text-fj-ink transition-colors group-hover:text-[#F05A28]">
                                  {loc.label}
                                  <span className="ml-1 text-[10.5px] text-fj-neutral-400">{loc.state}</span>
                                </span>
                              </Link>
                            ))}
                          </div>

                        </div>
                      </div>

                    ) : (

                      /* ── US / UAE: simple 2-col compact panel ─────────── */
                      <div className="w-[300px] overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white p-5 shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                        <p className="mb-3 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                          {cfg.locationsLabel}
                        </p>
                        <div className="grid grid-cols-2 gap-1">
                          {cfg.locations.map((loc) => (
                            <Link
                              key={`${loc.href}-${loc.label}`}
                              href={loc.href}
                              className="group flex items-center gap-2 rounded-lg px-2.5 py-2 transition-colors hover:bg-[#F05A28]/5"
                            >
                              <MapPin size={11} strokeWidth={2} className="flex-shrink-0 text-fj-neutral-300 transition-colors group-hover:text-[#F05A28]" />
                              <span className="font-fj-body text-[13px] text-fj-ink transition-colors group-hover:text-[#F05A28]">
                                {loc.label}
                                <span className="ml-1 text-[11px] text-fj-neutral-400">{loc.state}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                    )}
                  </div>
                )}
              </div>
              )}

              {/* Knowledge Hub (US) / Resources (India + UAE) trigger + dropdown */}
              {isCommerce ? (
                <div
                  className="relative"
                  onMouseEnter={() => openDrop('knowhub')}
                  onMouseLeave={scheduleClosed}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === 'knowhub'}
                    aria-haspopup="menu"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]"
                  >
                    Resources
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${openDropdown === 'knowhub' ? 'rotate-180 text-[#F05A28]' : 'text-fj-neutral-400'}`}
                    />
                  </button>

                  {openDropdown === 'knowhub' && (
                    <div
                      className="absolute left-0 top-full z-50 pt-2.5"
                      onMouseEnter={keepOpen}
                      onMouseLeave={scheduleClosed}
                      role="menu"
                    >
                      <div className="w-[280px] max-h-[calc(100vh-90px)] overflow-y-auto rounded-2xl border border-fj-neutral-200 bg-white p-3 shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                        <p className="mb-2 px-2 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                          Resources
                        </p>
                        <div className="space-y-0.5">
                          {KNOW_HUB.map((r) => (
                            <ServiceCard key={r.href} icon={r.icon} label={r.label} href={r.href} desc={r.desc} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="relative"
                  onMouseEnter={() => openDrop('resources')}
                  onMouseLeave={scheduleClosed}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === 'resources'}
                    aria-haspopup="menu"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]"
                  >
                    Resources
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180 text-[#F05A28]' : 'text-fj-neutral-400'}`}
                    />
                  </button>

                  {openDropdown === 'resources' && (
                    <div
                      className="absolute left-0 top-full z-50 pt-2.5"
                      onMouseEnter={keepOpen}
                      onMouseLeave={scheduleClosed}
                      role="menu"
                    >
                      <div className="w-[260px] max-h-[calc(100vh-90px)] overflow-y-auto rounded-2xl border border-fj-neutral-200 bg-white p-3 shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                        <p className="mb-2 px-2 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                          Resources
                        </p>
                        <div className="space-y-0.5">
                          {RESOURCES.map((r) => (
                            <ServiceCard key={r.href} icon={r.icon} label={r.label} href={r.href} desc={r.desc} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Company dropdown (US) / flat nav links (India + UAE) */}
              {isCommerce ? (
                <div
                  className="relative"
                  onMouseEnter={() => openDrop('company')}
                  onMouseLeave={scheduleClosed}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === 'company'}
                    aria-haspopup="menu"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]"
                  >
                    Company
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${openDropdown === 'company' ? 'rotate-180 text-[#F05A28]' : 'text-fj-neutral-400'}`}
                    />
                  </button>

                  {openDropdown === 'company' && (
                    <div
                      className="absolute left-0 top-full z-50 pt-2.5"
                      onMouseEnter={keepOpen}
                      onMouseLeave={scheduleClosed}
                      role="menu"
                    >
                      <div className="w-[230px] max-h-[calc(100vh-90px)] overflow-y-auto rounded-2xl border border-fj-neutral-200 bg-white p-3 shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                        <p className="mb-2 px-2 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                          Company
                        </p>
                        <div className="space-y-0.5">
                          <ServiceCard icon={Globe} label="About FactoryJet" href="/about" desc="Our team & mission" />
                          <ServiceCard icon={Zap} label="Pricing & Retainers" href="/pricing" desc="Transparent fixed tiers" />
                          <ServiceCard icon={MessageSquare} label="Contact Us" href="/contact" desc="Talk to leadership" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    href={cfg.aboutHref}
                    className="rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]"
                  >
                    About
                  </Link>
                  <Link
                    href={cfg.portfolioHref}
                    className="rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href={cfg.pricingHref}
                    className="rounded-lg px-3 py-2 font-fj-body text-[14.5px] text-fj-ink transition-colors hover:bg-fj-neutral-100 hover:text-[#F05A28]"
                  >
                    Pricing
                  </Link>
                </>
              )}

            </nav>

            {/* Right side: CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* Mobile hamburger */}
              <button
                type="button"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-drawer"
                onClick={() => setMobileOpen((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-fj-ink transition-colors hover:bg-fj-neutral-100 md:hidden"
              >
                {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
              </button>

              {/* Desktop CTA */}
              <button
                type="button"
                onClick={handleCta}
                className="hidden items-center justify-center rounded-full px-5 py-2.5 font-fj-body text-[14px] font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
                style={{ background: '#C2440F' }}
              >
                {cta?.label ?? cfg.defaultCtaLabel}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* -- Mobile drawer --------------------------------------------------- */}

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-fj-ink/25 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[88vw] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-16 flex-shrink-0 items-center justify-between border-b border-fj-neutral-100 px-5">
          <Link
            href={logoHref}
            onClick={() => setMobileOpen(false)}
            className="text-fj-ink"
            aria-label={logoText}
          >
            <Wordmark label={null} className="h-[18px] w-auto" />
          </Link>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-fj-ink transition-colors hover:bg-fj-neutral-100"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable nav area */}
        <nav className="flex-1 overflow-y-auto px-4 py-3" aria-label="Mobile navigation">

          {/* Services accordion */}
          <div className="border-b border-fj-neutral-100">
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between py-4 font-fj-body text-[15px] font-semibold text-fj-ink"
            >
              Services
              <ChevronDown
                size={16}
                strokeWidth={2}
                className={`text-fj-neutral-400 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pb-3">
                {locale === 'in' ? (
                  /* India mobile services — grouped with section labels */
                  <>
                    {/* Group 1: Web Services (indices 0-1) */}
                    <p className="mb-1 px-1 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">Web Services</p>
                    {IN_WEB_SERVICES.slice(0, 2).map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                          <Icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                          {s.label}
                        </Link>
                      );
                    })}
                    {/* Group 2: E-Commerce (indices 2-3) */}
                    <p className="mb-1 mt-2.5 px-1 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-300">E-Commerce</p>
                    {IN_WEB_SERVICES.slice(2, 4).map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]${i === 1 ? ' ml-4 border-l-2 border-[#F05A28]/30 pl-2' : ''}`}>
                          <Icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                          {s.label}
                        </Link>
                      );
                    })}
                    {/* Group 3: Automation & Messaging (indices 4-5) */}
                    <p className="mb-1 mt-2.5 px-1 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-300">Automation &amp; Messaging</p>
                    {IN_WEB_SERVICES.slice(4, 6).map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                          <Icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                          {s.label}
                        </Link>
                      );
                    })}
                    {/* AI Agents */}
                    <div className="mb-1 mt-3 flex items-center justify-between px-1">
                      <p className="font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">AI Agent Development</p>
                      <Link href={IN_AI_HUB_HREF} onClick={() => setMobileOpen(false)} className="font-fj-body text-[11px] font-semibold text-[#B23E13]">View all →</Link>
                    </div>
                    {cfg.aiServices.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                          <Icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                          {s.label}
                        </Link>
                      );
                    })}
                    {/* SEO & AI Search */}
                    <div className="mb-1 mt-3 flex items-center justify-between px-1">
                      <p className="font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">SEO &amp; AI Search</p>
                      <Link href={IN_SEO_HUB_HREF} onClick={() => setMobileOpen(false)} className="font-fj-body text-[11px] font-semibold text-[#B23E13]">SEO hub →</Link>
                    </div>
                    {IN_SEO_SERVICES.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                          <Icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                          {s.label}
                        </Link>
                      );
                    })}
                  </>
                ) : (
                  /* US mobile services — commerce first */
                  <>
                    <p className="mb-1 px-1 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">{isCommerce ? 'Commerce solutions' : 'Web Services'}</p>
                    {(isCommerce ? SOLUTIONS : cfg.webServices).map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                        <s.icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                        {s.label}
                      </Link>
                    ))}
                    {isCommerce && (
                      <>
                        <div className="mb-1 mt-3 flex items-center justify-between px-1">
                          <p className="font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">AI Agent Development</p>
                          <Link href="/services/ai-agent-development" onClick={() => setMobileOpen(false)} className="font-fj-body text-[11px] font-semibold text-[#B23E13]">View all →</Link>
                        </div>
                        {US_AI_AGENTS_NAV.map((s) => (
                          <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                            <s.icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                            {s.label}
                          </Link>
                        ))}
                        <p className="mb-1 mt-3 px-1 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">Platforms</p>
                        {PLATFORMS.map((s) => (
                          <Link key={s.label} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                            <s.icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                            {s.label}
                          </Link>
                        ))}
                        {locale === 'us' && (
                          <>
                            <Link
                              href={US_REPLATFORMING_HUB}
                              onClick={() => setMobileOpen(false)}
                              className="mb-1 mt-3 flex items-center gap-1.5 px-1 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400 transition-colors hover:text-[#B23E13]"
                            >
                              Replatforming
                              <ArrowRight size={11} strokeWidth={2.2} />
                            </Link>
                            {US_REPLATFORMING.map((r) => (
                              <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                                <RefreshCw size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                                {r.label}
                              </Link>
                            ))}
                          </>
                        )}
                        <p className="mb-1 mt-3 px-1 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">Services</p>
                        {SUPPORT.map((s) => (
                          <Link key={s.label} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                            <s.icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                            {s.label}
                          </Link>
                        ))}
                        {locale === 'us' && (
                          <>
                            <div className="mb-1 mt-3 flex items-center justify-between px-1">
                              <p className="font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">SEO &amp; AI Search</p>
                              <Link href={US_SEO_HUB_HREF} onClick={() => setMobileOpen(false)} className="font-fj-body text-[11px] font-semibold text-[#B23E13]">SEO hub →</Link>
                            </div>
                            {US_SEO_SERVICES.map((s) => (
                              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                                <s.icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                                {s.label}
                              </Link>
                            ))}
                            {US_INDUSTRY_SEO.map((s) => (
                              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg py-2 pl-9 pr-1 font-fj-body text-[13.5px] text-fj-neutral-500 transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                                {s.label}
                              </Link>
                            ))}
                          </>
                        )}
                      </>
                    )}
                    {!isCommerce && (
                      <>
                        <p className="mb-1 mt-3 px-1 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">AI Services</p>
                        {cfg.aiServices.map((s) => (
                          <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                            <s.icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                            {s.label}
                          </Link>
                        ))}
                      </>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Locations accordion */}
          <div className="border-b border-fj-neutral-100">
            <button
              type="button"
              aria-expanded={mobileLocationsOpen}
              onClick={() => setMobileLocationsOpen((v) => !v)}
              className="flex w-full items-center justify-between py-4 font-fj-body text-[15px] font-semibold text-fj-ink"
            >
              Locations
              <ChevronDown
                size={16}
                strokeWidth={2}
                className={`text-fj-neutral-400 transition-transform duration-200 ${mobileLocationsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileLocationsOpen && (
              <div className="grid grid-cols-2 gap-1 pb-3">
                {cfg.locations.map((loc) => (
                  <Link
                    key={`${loc.href}-${loc.label}`}
                    href={loc.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-1.5 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]"
                  >
                    <MapPin size={12} strokeWidth={2} className="flex-shrink-0 text-fj-neutral-300" />
                    {loc.label}
                    <span className="text-[12px] text-fj-neutral-400">{loc.state}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Knowledge Hub (US) / Resources (India + UAE) accordion */}
          <div className="border-b border-fj-neutral-100">
            <button
              type="button"
              aria-expanded={mobileResourcesOpen}
              onClick={() => setMobileResourcesOpen((v) => !v)}
              className="flex w-full items-center justify-between py-4 font-fj-body text-[15px] font-semibold text-fj-ink"
            >
              Resources
              <ChevronDown
                size={16}
                strokeWidth={2}
                className={`text-fj-neutral-400 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileResourcesOpen && (
              <div className="pb-3">
                {(isCommerce ? KNOW_HUB : RESOURCES).map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]"
                  >
                    <r.icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Flat links */}
          <Link
            href={cfg.aboutHref}
            onClick={() => setMobileOpen(false)}
            className="block border-b border-fj-neutral-100 py-4 font-fj-body text-[15px] font-semibold text-fj-ink transition-colors hover:text-[#F05A28]"
          >
            About
          </Link>
          {!isCommerce && (
            <Link
              href={cfg.portfolioHref}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-fj-neutral-100 py-4 font-fj-body text-[15px] font-semibold text-fj-ink transition-colors hover:text-[#F05A28]"
            >
              Portfolio
            </Link>
          )}
          <Link
            href={cfg.pricingHref}
            onClick={() => setMobileOpen(false)}
            className="block border-b border-fj-neutral-100 py-4 font-fj-body text-[15px] font-semibold text-fj-ink transition-colors hover:text-[#F05A28]"
          >
            Pricing
          </Link>
          {isCommerce && (
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-fj-neutral-100 py-4 font-fj-body text-[15px] font-semibold text-fj-ink transition-colors hover:text-[#F05A28]"
            >
              Contact
            </Link>
          )}

        </nav>

        {/* Drawer footer CTA */}
        <div className="flex-shrink-0 border-t border-fj-neutral-100 p-4">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              openModal(cfg.modalRegion);
            }}
            className="flex w-full items-center justify-center rounded-full py-3.5 font-fj-body text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: '#C2440F' }}
          >
            {cfg.defaultCtaLabel}
          </button>
        </div>

      </div>
    </>
  );
}

export { SiteHeader };
