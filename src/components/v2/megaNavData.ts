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
  Gauge, Globe, Layers, LayoutTemplate, Mail, MessageSquare, Plug, RefreshCw, Search, ShoppingBag,
  ShoppingCart, Sparkles, Star, Store, User, Wrench,
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
        { icon: Compass, label: 'AI Consulting', href: '/services/ai-consulting' },
        { icon: Code2, label: 'AI Development', href: '/services/ai-development' },
        { icon: Plug, label: 'AI Integration Services', href: '/services/ai-integration-services' },
        { icon: Bot, label: 'AI Automation', href: '/services/ai-automation' },
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
        { icon: Wrench, label: 'Website Maintenance', href: '/services/website-maintenance' },
        { icon: Globe, label: 'WordPress Development', href: '/services/wordpress-development' },
        { icon: Layers, label: 'Webflow Development', href: '/services/webflow-development' },
        { icon: Code2, label: 'Web Application Development', href: '/services/web-application-development' },
        { icon: LayoutTemplate, label: 'B2B Website Design', href: '/services/b2b-website-design' },
        { icon: ShoppingBag, label: 'Small Business Website Design', href: '/services/small-business-website-design' },
      ] },
      { heading: 'By industry', kind: 'compact', items: [
        { label: 'Manufacturing', href: '/services/manufacturing-website-design' },
        { label: 'SaaS', href: '/services/saas-website-design' },
        { label: 'Law Firms', href: '/services/law-firm-website-design' },
        { label: 'Medical Practices', href: '/services/medical-website-design' },
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
        { label: 'Technical SEO', href: '/services/technical-seo' },
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
 * UK and AU mega menus (rebuilt 2026-10-31, at Bhavesh's request that UK and AU
 * pages show exactly the primary site's header and menu).
 *
 * They are GENERATED from SERVICE_HUBS / SIMPLE_MENUS above, so every heading,
 * label, icon and order is the US menu's. A region changes only:
 *   - links: `swap` maps a US href to that region's page; anything not swapped
 *     stays as the shared page (fine for region-neutral pages)
 *   - `drop`: US-only destinations (US marketplaces, US-only industries) are removed
 *   - the "Popular cities" column lists that region's cities
 *   - each hub's landing link, summary, feature card and footnote (regional copy)
 * When a new UK or AU twin of a menu page ships, add one line to its `swap` map.
 * This replaced two hand-copied menus that had drifted: the UK one still pointed at
 * US pages for three UK twins, and the AU one had its own layout and none of the
 * 19 AU pages shipped on 29 Oct. Every href must be a live page.
 */
interface RegionNav {
  swap: Record<string, string>;
  drop: ReadonlySet<string>;
  cities: NavLinkItem[];
  hubs: Record<string, Pick<ServiceHub, 'hub' | 'hubLabel' | 'summary' | 'feature' | 'note'>>;
  menus: Record<string, NavFeature>;
}

const US_ONLY = new Set([
  '/services/walmart-marketplace-agency', '/target-plus-marketplace',
  '/services/restaurant-ai-voice-agents', '/services/automotive-ai-voice-agents',
  '/services/dental-support-organization-ai-agents', '/services/chemical-pharmaceutical-ai-agents',
  '/services/agriculture-equipment-ai-agents', '/services/restaurant-website-design',
]);

function localizeColumns(columns: NavColumn[], r: RegionNav): NavColumn[] {
  const fix = (item: NavLinkItem): NavLinkItem | null => {
    if (r.drop.has(item.href)) return null;
    const href = r.swap[item.href];
    return href ? { ...item, href } : item;
  };
  return columns.map((col) => {
    if (col.heading === 'Popular cities') return { ...col, items: r.cities, more: undefined };
    const more = col.more ? fix(col.more) ?? undefined : undefined;
    return { ...col, items: col.items.map(fix).filter((i): i is NavLinkItem => i !== null), more };
  });
}

function localize(r: RegionNav): { hubs: ServiceHub[]; menus: SimpleMenu[] } {
  return {
    hubs: SERVICE_HUBS.map((h) => ({ ...h, ...r.hubs[h.key], columns: localizeColumns(h.columns, r) })),
    menus: SIMPLE_MENUS.map((m) => ({ ...m, feature: r.menus[m.key] ?? m.feature, columns: localizeColumns(m.columns, r) })),
  };
}

const TALK_TO_US: NavFeature = { image: '/images/menu/menu-web-design-model.webp', kicker: 'Talk to us', title: 'Talk to the founder', body: 'Bhavesh reads every request and replies within 24 hours on business days.', href: '/contact', cta: 'Start a conversation' };

const UK_NAV = localize({
  swap: {
    '/': '/uk/ecommerce-development',
    '/services/ecommerce-development': '/uk/ecommerce-development',
    '/b2b-ecommerce': '/uk/b2b-ecommerce',
    '/ecommerce-consulting': '/uk/ecommerce-consultant',
    '/services/shopify-maintenance-services': '/uk/shopify-maintenance-services',
    '/services/shopify-development': '/uk/shopify-development',
    '/services/shopify-plus-b2b': '/uk/shopify-plus-b2b',
    '/services/magento-development': '/uk/magento',
    '/services/woocommerce-development': '/uk/woocommerce',
    '/services/amazon-agency': '/uk/amazon-agency',
    '/#hero': '/uk/ecommerce-audit',
    '/services/ai-consulting': '/uk/ai-consulting',
    '/services/ai-development': '/uk/ai-development',
    '/services/ai-integration-services': '/uk/ai-integration-services',
    '/services/ai-automation': '/uk/ai-automation',
    '/services/ai-receptionist': '/uk/ai-receptionist',
    '/services/ai-customer-support-agents': '/uk/ai-customer-service',
    '/services/website-maintenance': '/uk/website-maintenance',
    '/services/generative-engine-optimization': '/uk/ai-seo',
    '/services/seo-audit': '/uk/seo-audit',
    '/services/seo-consulting': '/uk/seo',
    '/services/ecommerce-seo': '/uk/ecommerce-seo',
    '/services/shopify-seo': '/uk/shopify-seo',
    '/services/local-seo': '/uk/local-seo',
  },
  drop: US_ONLY,
  cities: [
    { label: 'London', href: '/uk/london' }, { label: 'Manchester', href: '/uk/manchester' },
    { label: 'Birmingham', href: '/uk/birmingham' }, { label: 'Leeds', href: '/uk/leeds' },
    { label: 'Liverpool', href: '/uk/liverpool' }, { label: 'Bristol', href: '/uk/bristol' },
  ],
  hubs: {
    ecommerce: {
      hub: '/uk/ecommerce-development', hubLabel: 'Explore E-Commerce',
      summary: 'Ecommerce development for UK DTC and B2B brands, on the platform that fits your catalogue and budget.',
      feature: { image: '/images/menu/menu-ecommerce.webp', kicker: 'Guide', title: 'Best ecommerce platforms, compared', body: 'Shopify, Adobe Commerce, BigCommerce, WooCommerce and headless, side by side.', href: '/best-ecommerce-platforms', cta: 'Read the guide' },
      note: { lead: 'Not sure where to start?', label: 'Get a free commerce audit', href: '/uk/ecommerce-audit' },
    },
    ai: {
      hub: '/uk/ai-agents', hubLabel: 'Explore AI Agent Development',
      summary: 'Custom AI agents built into your CRM, ERP, shop and support desk, with a person approving anything that matters.',
      feature: { image: '/images/menu/menu-ai-agents.webp', kicker: 'Guide', title: 'How to build an AI agent', body: 'A step-by-step guide for UK teams, and when to bring in help.', href: '/blog/how-to-build-an-ai-agent-uk-2026', cta: 'Read the guide' },
      note: { lead: 'Have a workflow in mind?', label: 'Scope your AI agent', href: '/contact' },
    },
    web: {
      hub: '/uk/web-design', hubLabel: 'Explore Website Design',
      summary: 'Custom websites for UK businesses: fast, easy to update, and readable by Google and AI assistants.',
      feature: { image: '/images/menu/menu-web-design-model.webp', kicker: 'Guide', title: 'What a website costs in the UK in 2026', body: 'Price ranges by project type for a UK small business, from published sources.', href: '/blog/uk-web-design-agency-pricing-2026-smb-guide', cta: 'Read the guide' },
      note: { lead: 'Planning a new site?', label: 'Talk to the founder', href: '/contact' },
    },
    seo: {
      hub: '/uk/seo', hubLabel: 'Explore AI Search & SEO',
      summary: 'Get named when UK buyers ask ChatGPT, Claude, Gemini, Perplexity or Google AI Overviews, and keep ranking in classic search.',
      feature: { image: '/images/menu/menu-ai-search-model.webp', kicker: 'Free tool', title: 'Does AI recommend you?', body: 'See which brands ChatGPT, Perplexity and AI Overviews name in your category.', href: '/ai-visibility-checker', cta: 'Check for free' },
      note: { lead: 'Want a second opinion?', label: 'Book an SEO audit', href: '/uk/seo-audit' },
    },
  },
  menus: { company: TALK_TO_US },
});

const AU_NAV = localize({
  swap: {
    '/': '/au/ecommerce-development',
    '/services/ecommerce-development': '/au/ecommerce-development',
    '/b2b-ecommerce': '/au/b2b-ecommerce',
    '/ecommerce-consulting': '/au/ecommerce-consultant',
    '/services/shopify-maintenance-services': '/au/shopify-maintenance-services',
    '/services/shopify-development': '/au/shopify-development',
    '/services/woocommerce-development': '/au/woocommerce',
    '/services/amazon-agency': '/au/amazon-agency',
    '/best-ecommerce-platforms': '/blog/best-ecommerce-platform-australia-2026',
    '/#hero': '/contact',
    '/services/ai-consulting': '/au/ai-consulting',
    '/services/ai-development': '/au/ai-development',
    '/services/ai-integration-services': '/au/ai-integration-services',
    '/services/ai-automation': '/au/ai-agents',
    '/services/ai-receptionist': '/au/ai-receptionist',
    '/services/ai-customer-support-agents': '/au/ai-customer-service',
    '/services/website-maintenance': '/au/website-maintenance',
    '/services/small-business-website-design': '/au/small-business-web-design',
    '/services/real-estate-website-design': '/au/real-estate-websites',
    '/services/generative-engine-optimization': '/au/ai-seo',
    '/services/seo-consulting': '/au/seo',
    '/services/ecommerce-seo': '/au/ecommerce-seo',
    '/services/local-seo': '/au/local-seo',
    '/services/small-business-seo': '/au/small-business-seo',
    '/services/law-firm-seo': '/au/law-firm-seo',
  },
  drop: US_ONLY,
  cities: [
    { label: 'Sydney', href: '/au/sydney' }, { label: 'Melbourne', href: '/au/melbourne' },
    { label: 'Brisbane', href: '/au/brisbane' }, { label: 'Adelaide', href: '/au/adelaide' },
    { label: 'Canberra', href: '/au/canberra' },
  ],
  hubs: {
    ecommerce: {
      hub: '/au/ecommerce-development', hubLabel: 'Explore E-Commerce',
      summary: 'Ecommerce development for Australian DTC and B2B brands, on the platform that fits your catalogue and budget.',
      feature: { image: '/images/menu/menu-ecommerce.webp', kicker: 'Guide', title: 'Best ecommerce agencies in Australia', body: 'How Australian small businesses compare ecommerce agencies, and what to ask.', href: '/blog/best-ecommerce-agency-small-business-australia-2026', cta: 'Read the guide' },
      note: { lead: 'Not sure where to start?', label: 'Talk to the founder', href: '/contact' },
    },
    ai: {
      hub: '/au/ai-agents', hubLabel: 'Explore AI Agent Development',
      summary: 'Custom AI agents built into Xero, MYOB, HubSpot, ServiceM8 and Microsoft 365, with a person approving anything that matters.',
      feature: { image: '/images/menu/menu-ai-agents.webp', kicker: 'Start here', title: 'AI consulting for Australian SMEs', body: 'Find where AI pays off, check your Privacy Act duties, then build it.', href: '/au/ai-consulting', cta: 'See how it works' },
      note: { lead: 'Have a workflow in mind?', label: 'Scope your AI agent', href: '/contact' },
    },
    web: {
      hub: '/au#web-design', hubLabel: 'Explore Website Design',
      summary: 'Custom websites for Australian businesses: fast, easy to update, and readable by Google and AI assistants.',
      feature: { image: '/images/menu/menu-web-design-model.webp', kicker: 'Guide', title: 'Website cost in Australia', body: 'Sourced AUD price ranges for Australian websites, monthly running costs, and how GST applies to a quote.', href: '/blog/website-cost-australia-2026', cta: 'Read the guide' },
      note: { lead: 'Planning a new site?', label: 'Talk to the founder', href: '/contact' },
    },
    seo: {
      hub: '/au/seo', hubLabel: 'Explore AI Search & SEO',
      summary: 'Get named when Australian buyers ask ChatGPT, Claude, Gemini, Perplexity or Google AI Overviews, and keep ranking in classic search.',
      feature: { image: '/images/menu/menu-ai-search-model.webp', kicker: 'AI search', title: 'Get named by AI assistants', body: 'What ChatGPT, Perplexity and AI Overviews cite for Australian buyers, and how to be one of them.', href: '/au/ai-seo', cta: 'Read more' },
      note: { lead: 'Want a second opinion?', label: 'See our SEO approach', href: '/au/seo' },
    },
  },
  menus: { company: TALK_TO_US },
});

export const UK_SERVICE_HUBS: ServiceHub[] = UK_NAV.hubs;
export const UK_SIMPLE_MENUS: SimpleMenu[] = UK_NAV.menus;
export const AU_SERVICE_HUBS: ServiceHub[] = AU_NAV.hubs;
export const AU_SIMPLE_MENUS: SimpleMenu[] = AU_NAV.menus;
