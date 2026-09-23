/**
 * US mega menu data (2026-09-23). One source for the desktop mega menu and the
 * mobile drawer (MegaNav.tsx). Approved mockup:
 * https://claude.ai/artifact/LxvQLZ4yFpYgrZez6Ajcug (v2).
 *
 * Four service hubs, in this order: E-Commerce (the homepage is its hub),
 * AI Agent Development, Website Design & Development, AI Search & SEO.
 * Every href must be a live page; nothing here may point at a redirect source.
 */

import {
  Activity, BarChart3, Bot, BookOpen, Building2, Calculator, ClipboardCheck, Code2, Compass, Factory,
  Gauge, Globe, Layers, LayoutTemplate, Mail, MessageSquare, Mic, Plug, RefreshCw, Search, ShoppingBag,
  ShoppingCart, Sparkles, Star, Store, User, Workflow, Wrench,
} from 'lucide-react';
import type { ElementType } from 'react';

export type NavIcon = ElementType<{ size?: number; strokeWidth?: number; className?: string }>;

export interface NavLinkItem { label: string; href: string; icon?: NavIcon; badge?: string }
export interface NavColumn { heading: string; kind: 'rich' | 'compact'; items: NavLinkItem[]; more?: NavLinkItem }
export interface NavFeature { image: string; kicker: string; title: string; body: string; href: string; cta: string }

export interface ServiceHub {
  key: string;
  title: string;
  /** One line under the category in the left rail. */
  rail: string;
  /** Hub page for the category. */
  hub: string;
  hubLabel: string;
  summary: string;
  columns: NavColumn[];
  feature: NavFeature;
  note: { lead: string; label: string; href: string };
}

export interface SimpleMenu { key: string; label: string; columns: NavColumn[]; feature: NavFeature }

export const SERVICE_HUBS: ServiceHub[] = [
  {
    key: 'ecommerce', title: 'E-Commerce', rail: 'Stores, B2B portals, platforms, marketplaces',
    hub: '/', hubLabel: 'Explore E-Commerce',
    summary: 'Ecommerce development for DTC and B2B brands, on the platform that fits your catalog and budget.',
    columns: [
      { heading: 'Build & run', kind: 'rich', items: [
        { icon: Store, label: 'E-Commerce Development', href: '/services/ecommerce-development' },
        { icon: Building2, label: 'B2B E-Commerce', href: '/b2b-ecommerce' },
        { icon: Layers, label: 'Omnichannel Commerce', href: '/omnichannel-commerce' },
        { icon: ShoppingCart, label: 'Agentic Commerce', href: '/agentic-commerce' },
        { icon: Compass, label: 'E-Commerce Consulting', href: '/ecommerce-consulting' },
        { icon: Wrench, label: 'Store Support & Maintenance', href: '/services/shopify-maintenance-services' },
      ] },
      { heading: 'Platforms', kind: 'compact', items: [
        { label: 'Commerceflo', href: '/commerceflo', badge: 'Our platform' },
        { label: 'Shopify & Shopify Plus', href: '/services/shopify-development' },
        { label: 'Shopify Plus B2B', href: '/services/shopify-plus-b2b' },
        { label: 'Adobe Commerce (Magento)', href: '/services/magento-development' },
        { label: 'BigCommerce', href: '/bigcommerce-development' },
        { label: 'WooCommerce', href: '/services/woocommerce-development' },
        { label: 'Headless Commerce', href: '/headless-commerce' },
      ], more: { label: 'Compare platforms', href: '/best-ecommerce-platforms' } },
      { heading: 'Marketplaces & migration', kind: 'compact', items: [
        { label: 'Amazon Agency', href: '/services/amazon-agency' },
        { label: 'TikTok Shop Agency', href: '/services/tiktok-shop-agency' },
        { label: 'Walmart Marketplace', href: '/services/walmart-marketplace-agency' },
        { label: 'Target Plus', href: '/target-plus-marketplace' },
        { label: 'Faire Wholesale', href: '/faire-wholesale-marketplace' },
        { label: 'Replatforming', href: '/replatforming' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ecommerce.webp', kicker: 'Guide', title: 'Best ecommerce platforms, compared', body: 'Shopify, Adobe Commerce, BigCommerce, WooCommerce and headless, side by side.', href: '/best-ecommerce-platforms', cta: 'Read the guide' },
    note: { lead: 'Not sure where to start?', label: 'Get a free commerce audit', href: '/#hero' },
  },
  {
    key: 'ai', title: 'AI Agent Development', rail: 'Custom agents wired into your systems',
    hub: '/services/ai-agent-development', hubLabel: 'Explore AI Agent Development',
    summary: 'Custom AI agents built into your ERP, CRM, store and support desk, with a human approval step where it matters.',
    columns: [
      { heading: 'Build', kind: 'rich', items: [
        { icon: Plug, label: 'AI Integration Services', href: '/services/ai-integration-services' },
        { icon: Workflow, label: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { icon: Bot, label: 'AI Automation', href: '/services/ai-automation' },
        { icon: Mic, label: 'AI Voice Agents', href: '/services/ai-agent-development/ai-voice-agent' },
        { icon: MessageSquare, label: 'AI Chatbot Development', href: '/services/ai-chatbot-development' },
        { icon: Activity, label: 'AI Agent Monitoring', href: '/services/ai-agent-monitoring' },
      ] },
      { heading: 'By job', kind: 'compact', items: [
        { label: 'AI Receptionist', href: '/services/ai-receptionist' },
        { label: 'AI Customer Support Agents', href: '/services/ai-customer-support-agents' },
        { label: 'AI SDR & BDR Agents', href: '/services/ai-sdr' },
      ] },
      { heading: 'By industry', kind: 'compact', items: [
        { label: 'Manufacturing', href: '/services/manufacturing-ai-agents' },
        { label: 'Healthcare', href: '/services/healthcare-ai-agents' },
        { label: 'Legal', href: '/services/legal-ai-agents' },
        { label: 'Property Management', href: '/services/property-management-ai-agents' },
        { label: 'Real Estate', href: '/services/ai-agents-for-real-estate' },
        { label: 'Dental Support Organizations', href: '/services/dental-support-organization-ai-agents' },
        { label: 'Restaurants', href: '/services/restaurant-ai-voice-agents' },
        { label: 'Automotive Dealers', href: '/services/automotive-ai-voice-agents' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ai-agents.webp', kicker: 'Free tool', title: 'AI Agent ROI Calculator', body: 'Estimate the payback on an agent before you commit to building one.', href: '/tools/ai-agent-roi-calculator', cta: 'Run the numbers' },
    note: { lead: 'Have a workflow in mind?', label: 'Scope your AI agent', href: '/contact' },
  },
  {
    key: 'web', title: 'Website Design & Development', rail: 'Custom sites, redesigns, web apps',
    hub: '/services/web-design', hubLabel: 'Explore Website Design',
    summary: 'Custom websites for B2B and service businesses: fast, easy to update, and readable by Google and AI assistants.',
    columns: [
      { heading: 'Services', kind: 'rich', items: [
        { icon: RefreshCw, label: 'Website Redesign', href: '/services/website-redesign' },
        { icon: Globe, label: 'WordPress Development', href: '/services/wordpress-development' },
        { icon: Code2, label: 'Web Application Development', href: '/services/web-application-development' },
        { icon: LayoutTemplate, label: 'B2B Website Design', href: '/services/b2b-website-design' },
        { icon: ShoppingBag, label: 'Small Business Website Design', href: '/services/small-business-website-design' },
      ] },
      { heading: 'By industry', kind: 'compact', items: [
        { label: 'Manufacturing', href: '/services/manufacturing-website-design' },
        { label: 'SaaS', href: '/services/saas-website-design' },
        { label: 'Law Firms', href: '/services/law-firm-website-design' },
        { label: 'Real Estate', href: '/services/real-estate-website-design' },
        { label: 'Restaurants', href: '/services/restaurant-website-design' },
        { label: 'Nonprofits', href: '/services/nonprofit-website-design' },
      ] },
      { heading: 'Popular cities', kind: 'compact', items: [
        { label: 'Austin', href: '/austin/web-design' },
        { label: 'Miami', href: '/miami/web-design' },
        { label: 'Denver', href: '/denver/web-design' },
        { label: 'New York', href: '/new-york/web-design' },
        { label: 'Charlotte', href: '/charlotte/web-design' },
        { label: 'Tampa', href: '/tampa/web-design' },
      ] },
    ],
    feature: { image: '/images/menu/menu-web-design-model.webp', kicker: 'Guide', title: 'What a website costs in 2026', body: 'From DIY builders to agency builds, and what actually drives the price.', href: '/blog/how-much-does-a-website-cost-small-business-usa-2026', cta: 'Read the guide' },
    note: { lead: 'Planning a new site?', label: 'Talk to the founder', href: '/contact' },
  },
  {
    key: 'seo', title: 'AI Search & SEO', rail: 'Get cited by AI, rank on Google',
    hub: '/services/ai-seo', hubLabel: 'Explore AI Search & SEO',
    summary: 'Get named when buyers ask ChatGPT, Claude, Gemini, Perplexity or Google AI Overviews, and keep ranking in classic search.',
    columns: [
      { heading: 'AI search & SEO', kind: 'rich', items: [
        { icon: Sparkles, label: 'AI Visibility Checker', href: '/ai-visibility-checker', badge: 'Free' },
        { icon: Search, label: 'Generative Engine Optimization', href: '/services/generative-engine-optimization' },
        { icon: ClipboardCheck, label: 'SEO Audit', href: '/services/seo-audit' },
        { icon: Compass, label: 'SEO Consulting', href: '/services/seo-consulting' },
        { icon: BarChart3, label: 'AI Citation Study', href: '/ai-citation-study' },
      ] },
      { heading: 'By focus', kind: 'compact', items: [
        { label: 'E-commerce SEO', href: '/services/ecommerce-seo' },
        { label: 'Shopify SEO', href: '/services/shopify-seo' },
        { label: 'Local SEO', href: '/services/local-seo' },
        { label: 'Small Business SEO', href: '/services/small-business-seo' },
      ] },
      { heading: 'By industry', kind: 'compact', items: [
        { label: 'Healthcare SEO', href: '/services/healthcare-seo' },
        { label: 'Dental SEO', href: '/services/dental-seo' },
        { label: 'Law Firm SEO', href: '/services/law-firm-seo' },
        { label: 'Roofing SEO', href: '/services/roofing-seo' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ai-search-model.webp', kicker: 'Free tool', title: 'Does AI recommend you?', body: 'See which brands ChatGPT, Perplexity and AI Overviews name in your category.', href: '/ai-visibility-checker', cta: 'Check for free' },
    note: { lead: 'Want a second opinion?', label: 'Book an SEO audit', href: '/services/seo-audit' },
  },
];

export const SIMPLE_MENUS: SimpleMenu[] = [
  {
    key: 'industries', label: 'Industries',
    columns: [
      { heading: 'Commerce', kind: 'rich', items: [
        { icon: Store, label: 'DTC & E-Commerce Brands', href: '/' },
        { icon: Building2, label: 'B2B, Wholesale & Distributors', href: '/b2b-ecommerce' },
        { icon: Factory, label: 'Manufacturers', href: '/ecommerce-for-manufacturers' },
        { icon: ShoppingCart, label: 'Marketplace Sellers', href: '/services/amazon-agency' },
      ] },
      { heading: 'AI agents by industry', kind: 'compact', items: [
        { label: 'Manufacturing', href: '/services/manufacturing-ai-agents' },
        { label: 'Healthcare', href: '/services/healthcare-ai-agents' },
        { label: 'Legal', href: '/services/legal-ai-agents' },
        { label: 'Property Management', href: '/services/property-management-ai-agents' },
        { label: 'Real Estate', href: '/services/ai-agents-for-real-estate' },
        { label: 'Automotive Dealers', href: '/services/automotive-ai-voice-agents' },
      ] },
      { heading: 'Websites & SEO by industry', kind: 'compact', items: [
        { label: 'Law Firms', href: '/services/law-firm-seo' },
        { label: 'Dental Practices', href: '/services/dental-seo' },
        { label: 'Healthcare', href: '/services/healthcare-seo' },
        { label: 'Roofing', href: '/services/roofing-seo' },
        { label: 'SaaS', href: '/services/saas-website-design' },
        { label: 'Nonprofits', href: '/services/nonprofit-website-design' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ecommerce.webp', kicker: 'Case studies', title: 'Commerce we have built and launched', body: 'B2B wholesale, DTC plus trade, and AI agent work.', href: '/case-studies', cta: 'See the work' },
  },
  {
    key: 'resources', label: 'Resources',
    columns: [
      { heading: 'Learn', kind: 'rich', items: [
        { icon: BookOpen, label: 'Blog', href: '/blog' },
        { icon: Star, label: 'Case Studies', href: '/case-studies' },
        { icon: LayoutTemplate, label: 'Portfolio', href: '/portfolio' },
        { icon: BarChart3, label: 'AI Citation Study', href: '/ai-citation-study' },
      ] },
      { heading: 'Free tools', kind: 'rich', items: [
        { icon: Sparkles, label: 'AI Visibility Checker', href: '/ai-visibility-checker' },
        { icon: Calculator, label: 'AI Agent ROI Calculator', href: '/tools/ai-agent-roi-calculator' },
        { icon: Calculator, label: 'Marketplace Fee Calculator', href: '/marketplace-fee-calculator' },
        { icon: Gauge, label: 'Ecommerce Speed Calculator', href: '/ecommerce-speed-calculator' },
      ] },
      { heading: 'Reference', kind: 'compact', items: [
        { label: 'Glossary', href: '/glossary' },
        { label: 'FAQ', href: '/faq' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ai-search-model.webp', kicker: 'Free tool', title: 'Does AI recommend you?', body: 'See which brands AI assistants name in your category.', href: '/ai-visibility-checker', cta: 'Check for free' },
  },
  {
    key: 'company', label: 'Company',
    columns: [
      { heading: 'Company', kind: 'rich', items: [
        { icon: User, label: 'About FactoryJet', href: '/about' },
        { icon: Star, label: 'Case Studies', href: '/case-studies' },
        { icon: Mail, label: 'Contact', href: '/contact' },
      ] },
    ],
    feature: { image: '/images/menu/menu-web-design-model.webp', kicker: 'Talk to us', title: 'Talk to the founder', body: 'Bhavesh reads every request and replies within 24 hours on business days.', href: '/contact', cta: 'Start a conversation' },
  },
];
