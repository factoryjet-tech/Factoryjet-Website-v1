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
  ShoppingCart, Sparkles, Star, Stethoscope, Store, User, Workflow, Wrench,
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
        { label: 'AI Scheduling Agent', href: '/services/ai-agent-development/ai-scheduling-agent' },
        { label: 'AI Marketing Agent', href: '/services/ai-agent-development/ai-marketing-agent' },
        { label: 'RFQ Automation Agent', href: '/services/ai-agent-development/rfq-bidding-agent' },
        { label: 'Procurement & Supply Chain', href: '/services/ai-agent-development/procurement-supply-chain-agent' },
        { label: 'Manufacturing Operations', href: '/services/ai-agent-development/manufacturing-operations-agent' },
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
        { label: 'Chemical & Pharma', href: '/services/chemical-pharmaceutical-ai-agents' },
        { label: 'Agriculture Equipment', href: '/services/agriculture-equipment-ai-agents' },
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

/**
 * UK mega menu data (2026-09-25). Same four hubs, same structure and design as the
 * US menu; every link points at the UK page where one exists (/uk/...), and at the
 * shared (non-US-specific) page otherwise. US-only pages (US cities, Walmart,
 * Target Plus, US-only industries) are left out. Every href must be a live page.
 */
export const UK_SERVICE_HUBS: ServiceHub[] = [
  {
    key: 'ecommerce', title: 'E-Commerce', rail: 'Stores, B2B portals, platforms, marketplaces',
    hub: '/uk/ecommerce-development', hubLabel: 'Explore E-Commerce',
    summary: 'Ecommerce development for UK DTC and B2B brands, on the platform that fits your catalogue and budget.',
    columns: [
      { heading: 'Build & run', kind: 'rich', items: [
        { icon: Store, label: 'E-Commerce Development', href: '/uk/ecommerce-development' },
        { icon: Building2, label: 'B2B E-Commerce', href: '/uk/b2b-ecommerce' },
        { icon: Compass, label: 'E-Commerce Consultant', href: '/uk/ecommerce-consultant' },
        { icon: Layers, label: 'Omnichannel Commerce', href: '/omnichannel-commerce' },
        { icon: ShoppingCart, label: 'Agentic Commerce', href: '/agentic-commerce' },
        { icon: Wrench, label: 'Store Support & Maintenance', href: '/services/shopify-maintenance-services' },
      ] },
      { heading: 'Platforms', kind: 'compact', items: [
        { label: 'Commerceflo', href: '/commerceflo', badge: 'Our platform' },
        { label: 'Shopify', href: '/uk/shopify-development' },
        { label: 'Shopify Plus', href: '/uk/shopify-plus' },
        { label: 'Adobe Commerce (Magento)', href: '/uk/magento' },
        { label: 'WooCommerce', href: '/uk/woocommerce' },
        { label: 'BigCommerce', href: '/bigcommerce-development' },
        { label: 'Headless Commerce', href: '/headless-commerce' },
      ], more: { label: 'Compare platforms', href: '/best-ecommerce-platforms' } },
      { heading: 'Marketplaces & migration', kind: 'compact', items: [
        { label: 'Amazon Agency', href: '/services/amazon-agency' },
        { label: 'TikTok Shop Agency', href: '/services/tiktok-shop-agency' },
        { label: 'Replatforming', href: '/replatforming' },
        { label: 'Ecommerce SEO', href: '/uk/ecommerce-seo' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ecommerce.webp', kicker: 'Guide', title: 'Best ecommerce platforms, compared', body: 'Shopify, Adobe Commerce, BigCommerce, WooCommerce and headless, side by side.', href: '/best-ecommerce-platforms', cta: 'Read the guide' },
    note: { lead: 'Not sure where to start?', label: 'Talk to an ecommerce consultant', href: '/uk/ecommerce-consultant' },
  },
  {
    key: 'ai', title: 'AI Agent Development', rail: 'Custom agents wired into your systems',
    hub: '/uk/ai-agents', hubLabel: 'Explore AI Agent Development',
    summary: 'Custom AI agents built into your CRM, ERP, shop and support desk, with a person approving anything that matters.',
    columns: [
      { heading: 'Build', kind: 'rich', items: [
        { icon: Plug, label: 'AI Development & Integration', href: '/uk/ai-development' },
        { icon: Compass, label: 'AI Consulting', href: '/uk/ai-consulting' },
        { icon: Mic, label: 'AI Receptionist', href: '/uk/ai-receptionist' },
        { icon: Workflow, label: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { icon: MessageSquare, label: 'AI Chatbot Development', href: '/services/ai-chatbot-development' },
        { icon: Activity, label: 'AI Agent Monitoring', href: '/services/ai-agent-monitoring' },
      ] },
      { heading: 'By job', kind: 'compact', items: [
        { label: 'AI Customer Support Agents', href: '/services/ai-customer-support-agents' },
        { label: 'AI SDR & BDR Agents', href: '/services/ai-sdr' },
        { label: 'AI Voice Agents', href: '/services/ai-agent-development/ai-voice-agent' },
        { label: 'AI Scheduling Agent', href: '/services/ai-agent-development/ai-scheduling-agent' },
        { label: 'AI Marketing Agent', href: '/services/ai-agent-development/ai-marketing-agent' },
        { label: 'RFQ Automation Agent', href: '/services/ai-agent-development/rfq-bidding-agent' },
      ] },
      { heading: 'By industry', kind: 'compact', items: [
        { label: 'Manufacturing', href: '/services/manufacturing-ai-agents' },
        { label: 'Healthcare', href: '/services/healthcare-ai-agents' },
        { label: 'Legal', href: '/services/legal-ai-agents' },
        { label: 'Property Management', href: '/services/property-management-ai-agents' },
        { label: 'Real Estate', href: '/services/ai-agents-for-real-estate' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ai-agents.webp', kicker: 'Guide', title: 'How to build an AI agent', body: 'A step-by-step guide for UK teams, and when to bring in help.', href: '/blog/how-to-build-an-ai-agent-uk-2026', cta: 'Read the guide' },
    note: { lead: 'Have a workflow in mind?', label: 'Scope your AI agent', href: '/contact' },
  },
  {
    key: 'web', title: 'Website Design & Development', rail: 'Custom sites, redesigns, web apps',
    hub: '/uk/web-design', hubLabel: 'Explore Website Design',
    summary: 'Custom websites for UK businesses: fast, easy to update, and readable by Google and AI assistants.',
    columns: [
      { heading: 'Services', kind: 'rich', items: [
        { icon: LayoutTemplate, label: 'Web Design UK', href: '/uk/web-design' },
        { icon: RefreshCw, label: 'Website Redesign', href: '/services/website-redesign' },
        { icon: Globe, label: 'WordPress Development', href: '/services/wordpress-development' },
        { icon: Code2, label: 'Web Application Development', href: '/services/web-application-development' },
        { icon: Building2, label: 'B2B Website Design', href: '/services/b2b-website-design' },
      ] },
      { heading: 'By industry', kind: 'compact', items: [
        { label: 'Manufacturing', href: '/services/manufacturing-website-design' },
        { label: 'SaaS', href: '/services/saas-website-design' },
        { label: 'Law Firms', href: '/services/law-firm-website-design' },
        { label: 'Real Estate', href: '/services/real-estate-website-design' },
        { label: 'Nonprofits', href: '/services/nonprofit-website-design' },
      ] },
      { heading: 'UK cities', kind: 'compact', items: [
        { label: 'London', href: '/uk/london' },
        { label: 'Manchester', href: '/uk/manchester' },
        { label: 'Birmingham', href: '/uk/birmingham' },
        { label: 'Leeds', href: '/uk/leeds' },
        { label: 'Liverpool', href: '/uk/liverpool' },
        { label: 'Sheffield', href: '/uk/sheffield' },
        { label: 'Bristol', href: '/uk/bristol' },
        { label: 'Edinburgh', href: '/uk/edinburgh' },
        { label: 'Glasgow', href: '/uk/glasgow' },
      ] },
    ],
    feature: { image: '/images/menu/menu-web-design-model.webp', kicker: 'Guide', title: 'UK web design pricing in 2026', body: 'What drives the cost of a website for a UK small business.', href: '/blog/uk-web-design-agency-pricing-2026-smb-guide', cta: 'Read the guide' },
    note: { lead: 'Planning a new site?', label: 'Talk to the founder', href: '/contact' },
  },
  {
    key: 'seo', title: 'AI Search & SEO', rail: 'Get cited by AI, rank on Google',
    hub: '/uk/seo', hubLabel: 'Explore AI Search & SEO',
    summary: 'Get named when UK buyers ask ChatGPT, Claude, Gemini, Perplexity or Google AI Overviews, and keep ranking in classic search.',
    columns: [
      { heading: 'AI search & SEO', kind: 'rich', items: [
        { icon: Sparkles, label: 'AI SEO UK', href: '/uk/ai-seo' },
        { icon: Search, label: 'SEO Agency UK', href: '/uk/seo' },
        { icon: ClipboardCheck, label: 'SEO Audit', href: '/uk/seo-audit' },
        { icon: BarChart3, label: 'AI Visibility Checker', href: '/ai-visibility-checker', badge: 'Free' },
      ] },
      { heading: 'By focus', kind: 'compact', items: [
        { label: 'Ecommerce SEO', href: '/uk/ecommerce-seo' },
        { label: 'Shopify SEO', href: '/uk/shopify-seo' },
        { label: 'Local SEO', href: '/uk/local-seo' },
        { label: 'London SEO', href: '/uk/london/seo' },
      ] },
      { heading: 'UK guides', kind: 'compact', items: [
        { label: 'Best SEO agencies in the UK', href: '/blog/best-seo-agencies-uk' },
        { label: 'Best AI SEO agencies in the UK', href: '/blog/best-ai-seo-agencies-uk' },
        { label: 'Local SEO and the map pack', href: '/blog/local-seo-uk-small-businesses-map-pack' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ai-search-model.webp', kicker: 'Free tool', title: 'Does AI recommend you?', body: 'See which brands ChatGPT, Perplexity and AI Overviews name in your category.', href: '/ai-visibility-checker', cta: 'Check for free' },
    note: { lead: 'Want a second opinion?', label: 'Book an SEO audit', href: '/uk/seo-audit' },
  },
];

export const UK_SIMPLE_MENUS: SimpleMenu[] = [
  {
    key: 'industries', label: 'Industries',
    columns: [
      { heading: 'Commerce', kind: 'rich', items: [
        { icon: Store, label: 'DTC & E-Commerce Brands', href: '/uk/ecommerce-development' },
        { icon: Building2, label: 'B2B, Wholesale & Distributors', href: '/uk/b2b-ecommerce' },
        { icon: Factory, label: 'Manufacturers', href: '/ecommerce-for-manufacturers' },
        { icon: ShoppingCart, label: 'Marketplace Sellers', href: '/services/amazon-agency' },
      ] },
      { heading: 'AI agents by industry', kind: 'compact', items: [
        { label: 'Manufacturing', href: '/services/manufacturing-ai-agents' },
        { label: 'Healthcare', href: '/services/healthcare-ai-agents' },
        { label: 'Legal', href: '/services/legal-ai-agents' },
        { label: 'Property Management', href: '/services/property-management-ai-agents' },
        { label: 'Real Estate', href: '/services/ai-agents-for-real-estate' },
      ] },
      { heading: 'Websites by industry', kind: 'compact', items: [
        { label: 'Law Firms', href: '/services/law-firm-website-design' },
        { label: 'Manufacturing', href: '/services/manufacturing-website-design' },
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
      { heading: 'UK guides', kind: 'compact', items: [
        { label: 'How to build an AI agent', href: '/blog/how-to-build-an-ai-agent-uk-2026' },
        { label: 'Top ecommerce agencies in the UK', href: '/blog/top-ecommerce-development-agencies-uk-2026' },
        { label: 'Shopify vs WooCommerce for UK stores', href: '/blog/ecommerce-development-uk-shopify-woocommerce-2026' },
        { label: 'How to choose a web design agency', href: '/blog/how-to-choose-web-design-agency-uk-2026' },
        { label: 'Website redesign cost in the UK', href: '/blog/website-redesign-cost-uk-2026-complete-pricing-guide' },
      ] },
      { heading: 'Free tools', kind: 'compact', items: [
        { label: 'AI Visibility Checker', href: '/ai-visibility-checker' },
        { label: 'AI Agent ROI Calculator', href: '/tools/ai-agent-roi-calculator' },
        { label: 'Ecommerce Speed Calculator', href: '/ecommerce-speed-calculator' },
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
        { icon: Globe, label: 'FactoryJet UK', href: '/uk' },
        { icon: Star, label: 'Case Studies', href: '/case-studies' },
        { icon: Mail, label: 'Contact', href: '/contact' },
      ] },
    ],
    feature: { image: '/images/menu/menu-web-design-model.webp', kicker: 'Talk to us', title: 'Talk to the founder', body: 'Bhavesh reads every request and replies within 24 hours on business days.', href: '/contact', cta: 'Start a conversation' },
  },
];

/**
 * Australia mega menu data (2026-09-25, revised same day at Bhavesh's request).
 * Same four hubs and layout as the US and UK menus, but EVERY link is an
 * Australian page (/au/...), a section of one, or an Australia-specific guide.
 * No shared or US pages. When a new /au page ships, add it here.
 */
export const AU_SERVICE_HUBS: ServiceHub[] = [
  {
    key: 'ecommerce', title: 'E-Commerce', rail: 'Online stores, Shopify, B2B',
    hub: '/au/ecommerce-development', hubLabel: 'Explore E-Commerce',
    summary: 'Ecommerce development for Australian DTC and B2B brands, on the platform that fits your catalogue and budget.',
    columns: [
      { heading: 'Build & run', kind: 'rich', items: [
        { icon: Store, label: 'Ecommerce Development', href: '/au/ecommerce-development' },
        { icon: ShoppingBag, label: 'Shopify Development', href: '/au/shopify-development' },
        { icon: Search, label: 'Ecommerce & Shopify SEO', href: '/au/ecommerce-seo' },
        { icon: Sparkles, label: 'AI Search (GEO) for Stores', href: '/au/ai-seo' },
      ] },
      { heading: 'Australian guides', kind: 'compact', items: [
        { label: 'Best ecommerce platform in Australia', href: '/blog/best-ecommerce-platform-australia-2026' },
        { label: 'Shopify cost in Australia', href: '/blog/shopify-cost-australia-2026' },
        { label: 'Best ecommerce agencies in Australia', href: '/blog/best-ecommerce-agency-small-business-australia-2026' },
        { label: 'Ecommerce questions answered', href: '/au/ecommerce-development#faq' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ecommerce.webp', kicker: 'Guide', title: 'Best ecommerce agencies in Australia', body: 'How Australian small businesses compare ecommerce agencies, and what to ask.', href: '/blog/best-ecommerce-agency-small-business-australia-2026', cta: 'Read the guide' },
    note: { lead: 'Not sure where to start?', label: 'Talk to the founder', href: '/au/ecommerce-development#faq' },
  },
  {
    key: 'ai', title: 'AI Agent Development', rail: 'Agents, automation, consulting',
    hub: '/au/ai-agents', hubLabel: 'Explore AI Agent Development',
    summary: 'Custom AI agents built into Xero, MYOB, HubSpot, ServiceM8 and Microsoft 365, with a person approving anything that matters.',
    columns: [
      { heading: 'Build', kind: 'rich', items: [
        { icon: Bot, label: 'AI Agents & Automation', href: '/au/ai-agents' },
        { icon: Plug, label: 'AI Development & Integration', href: '/au/ai-development' },
        { icon: Compass, label: 'AI Consulting', href: '/au/ai-consulting' },
        { icon: Mic, label: 'AI Receptionist', href: '/au/ai-receptionist' },
        { icon: MessageSquare, label: 'AI Customer Service', href: '/au/ai-customer-service' },
      ] },
      { heading: 'Popular for', kind: 'compact', items: [
        { label: 'Tradies & field services', href: '/au/ai-receptionist' },
        { label: 'Clinics & dental practices', href: '/au/ai-receptionist#how-we-build' },
        { label: 'Shopify & Gorgias support', href: '/au/ai-customer-service' },
        { label: 'Xero & MYOB automation', href: '/au/ai-agents' },
        { label: 'AI inside your CRM or ERP', href: '/au/ai-development' },
      ] },
      { heading: 'Australian guides', kind: 'compact', items: [
        { label: 'AI cost guide 2026', href: '/blog/ai-cost-australia-2026' },
        { label: 'Best AI agencies in Australia', href: '/blog/best-ai-agencies-australia-2026' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ai-agents.webp', kicker: 'Start here', title: 'AI consulting for Australian SMEs', body: 'Find where AI pays off, check your Privacy Act duties, then build it.', href: '/au/ai-consulting', cta: 'See how it works' },
    note: { lead: 'Have a workflow in mind?', label: 'See the AI agents page', href: '/au/ai-agents#faq' },
  },
  {
    key: 'web', title: 'Website Design & Development', rail: 'Custom sites, redesigns, web apps',
    hub: '/au#web-design', hubLabel: 'Explore Website Design',
    summary: 'Custom websites for Australian businesses: fast, easy to update, and readable by Google and AI assistants.',
    columns: [
      { heading: 'Services', kind: 'rich', items: [
        { icon: LayoutTemplate, label: 'Web Design Australia', href: '/au#web-design' },
        { icon: Wrench, label: 'Websites for Tradies', href: '/au/websites-for-tradies' },
        { icon: Stethoscope, label: 'Dental Website Design', href: '/au/dental-website-design' },
        { icon: RefreshCw, label: 'Website Maintenance', href: '/au/website-maintenance' },
      ] },
      { heading: 'Australian cities', kind: 'compact', items: [
        { label: 'Melbourne', href: '/au/melbourne' },
        { label: 'Brisbane', href: '/au/brisbane' },
        { label: 'Adelaide', href: '/au/adelaide' },
        { label: 'Canberra', href: '/au/canberra' },
      ] },
      { heading: 'Australian guides', kind: 'compact', items: [
        { label: 'Website cost guide 2026', href: '/blog/website-cost-australia-2026' },
        { label: 'Best web design companies', href: '/blog/best-web-design-companies-small-business-australia' },
        { label: 'Best WordPress developers', href: '/blog/best-wordpress-development-companies-australia-2026' },
      ] },
    ],
    feature: { image: '/images/menu/menu-web-design-model.webp', kicker: 'Guide', title: 'Best web design companies in Australia', body: 'How Australian small businesses choose a web design company.', href: '/blog/best-web-design-companies-small-business-australia', cta: 'Read the guide' },
    note: { lead: 'Planning a new site?', label: 'See how we work', href: '/au#how-we-work' },
  },
  {
    key: 'seo', title: 'AI Search & SEO', rail: 'Get cited by AI, rank on Google',
    hub: '/au/seo', hubLabel: 'Explore AI Search & SEO',
    summary: 'Get named when Australian buyers ask ChatGPT, Claude, Gemini, Perplexity or Google AI Overviews, and keep ranking in classic search.',
    columns: [
      { heading: 'AI search & SEO', kind: 'rich', items: [
        { icon: Search, label: 'SEO Services Australia', href: '/au/seo' },
        { icon: Sparkles, label: 'AI SEO & GEO', href: '/au/ai-seo' },
        { icon: ShoppingCart, label: 'Ecommerce SEO', href: '/au/ecommerce-seo' },
      ] },
      { heading: 'Questions answered', kind: 'compact', items: [
        { label: 'SEO cost in Australia', href: '/blog/seo-cost-australia-2026' },
        { label: 'SEO questions', href: '/au/seo#faq' },
        { label: 'AI search questions', href: '/au/ai-seo#faq' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ai-search-model.webp', kicker: 'AI search', title: 'Get named by AI assistants', body: 'What ChatGPT, Perplexity and AI Overviews cite for Australian buyers, and how to be one of them.', href: '/au/ai-seo', cta: 'Read more' },
    note: { lead: 'Want a second opinion?', label: 'See our SEO approach', href: '/au/seo' },
  },
];

export const AU_SIMPLE_MENUS: SimpleMenu[] = [
  {
    key: 'industries', label: 'Industries',
    columns: [
      { heading: 'Commerce', kind: 'rich', items: [
        { icon: Store, label: 'DTC & Online Retail', href: '/au/ecommerce-development' },
        { icon: ShoppingBag, label: 'Shopify Brands', href: '/au/shopify-development' },
        { icon: Building2, label: 'B2B, Wholesale & Distributors', href: '/au/ecommerce-development#faq' },
      ] },
      { heading: 'AI by industry', kind: 'compact', items: [
        { label: 'Trades & field services', href: '/au/ai-receptionist' },
        { label: 'Clinics & allied health', href: '/au/ai-receptionist#how-we-build' },
        { label: 'Professional services', href: '/au/ai-agents' },
        { label: 'Logistics & wholesale', href: '/au/ai-development' },
      ] },
      { heading: 'Local businesses', kind: 'compact', items: [
        { label: 'Tradies & trade businesses', href: '/au/websites-for-tradies' },
        { label: 'Dental practices', href: '/au/dental-website-design' },
        { label: 'Melbourne', href: '/au/melbourne' },
        { label: 'Brisbane', href: '/au/brisbane' },
        { label: 'Adelaide', href: '/au/adelaide' },
        { label: 'Canberra', href: '/au/canberra' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ecommerce.webp', kicker: 'Australia', title: 'FactoryJet Australia', body: 'Ecommerce, AI agents, websites and AI search for Australian businesses.', href: '/au', cta: 'See everything we do' },
  },
  {
    key: 'resources', label: 'Resources',
    columns: [
      { heading: 'Cost guides (2026)', kind: 'rich', items: [
        { icon: Calculator, label: 'Website cost in Australia', href: '/blog/website-cost-australia-2026' },
        { icon: Search, label: 'SEO cost in Australia', href: '/blog/seo-cost-australia-2026' },
        { icon: Bot, label: 'AI cost in Australia', href: '/blog/ai-cost-australia-2026' },
        { icon: ShoppingBag, label: 'Shopify cost in Australia', href: '/blog/shopify-cost-australia-2026' },
      ] },
      { heading: 'Australian comparisons', kind: 'compact', items: [
        { label: 'Best ecommerce platform in Australia', href: '/blog/best-ecommerce-platform-australia-2026' },
        { label: 'Best AI agencies in Australia', href: '/blog/best-ai-agencies-australia-2026' },
        { label: 'Best ecommerce agencies in Australia', href: '/blog/best-ecommerce-agency-small-business-australia-2026' },
        { label: 'Best web design companies in Australia', href: '/blog/best-web-design-companies-small-business-australia' },
        { label: 'Best WordPress developers in Australia', href: '/blog/best-wordpress-development-companies-australia-2026' },
      ] },
      { heading: 'Questions answered', kind: 'compact', items: [
        { label: 'FactoryJet Australia FAQ', href: '/au#faq' },
        { label: 'What drives website cost', href: '/au#website-cost' },
        { label: 'AI agents FAQ', href: '/au/ai-agents#faq' },
        { label: 'Shopify FAQ', href: '/au/shopify-development#faq' },
      ] },
    ],
    feature: { image: '/images/menu/menu-ai-search-model.webp', kicker: 'Guide', title: 'Website cost in Australia', body: 'Sourced AUD price ranges for Australian websites, monthly running costs, and how GST applies to a quote.', href: '/blog/website-cost-australia-2026', cta: 'Read the guide' },
  },
  {
    key: 'company', label: 'Company',
    columns: [
      { heading: 'FactoryJet Australia', kind: 'rich', items: [
        { icon: Globe, label: 'FactoryJet Australia', href: '/au' },
        { icon: User, label: 'How we work with Australian businesses', href: '/au#how-we-work' },
        { icon: Star, label: 'How we compare', href: '/au#compare' },
        { icon: Mail, label: 'Talk to the founder', href: '/au#faq' },
      ] },
    ],
    feature: { image: '/images/menu/menu-web-design-model.webp', kicker: 'Talk to us', title: 'Talk to the founder', body: 'Bhavesh reads every request and replies within 24 hours on business days.', href: '/au#how-we-work', cta: 'See how we work' },
  },
];
