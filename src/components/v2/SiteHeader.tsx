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
} from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';
import type { ModalRegion } from '../../context/ContactModalContext';

// ─── Locale type ──────────────────────────────────────────────────────────────

export type SiteHeaderLocale = 'us' | 'in' | 'uae';

// ─── US nav data ──────────────────────────────────────────────────────────────

const US_WEB_SERVICES = [
  { icon: Globe,        label: 'Web Design',          href: '/us/services/web-design',                      desc: 'Conversion-focused sites' },
  { icon: ShoppingBag,  label: 'Shopify Development', href: '/us/services/shopify-development',             desc: 'Custom storefronts & themes' },
  { icon: ShoppingCart, label: 'E-commerce',          href: '/us/services/ecommerce-development',           desc: 'End-to-end online stores' },
  { icon: Code,         label: 'Web App Development', href: '/us/services/web-application-development',     desc: 'Complex web apps' },
  { icon: FileCode,     label: 'WordPress',           href: '/us/services/wordpress-development',           desc: 'Custom WP sites & plugins' },
  { icon: RefreshCw,    label: 'Website Redesign',    href: '/us/services/website-redesign',                desc: 'Modernize your existing site' },
] as const;

const US_AI_SERVICES = [
  { icon: Bot,           label: 'AI Agents',      href: '/us/services/ai-agents',               desc: 'Autonomous task automation' },
  { icon: Zap,           label: 'AI Automation',  href: '/us/services/ai-automation',           desc: 'Eliminate repetitive work' },
  { icon: MessageSquare, label: 'AI Chatbot',     href: '/us/services/ai-chatbot-development',  desc: 'Smart customer support' },
  { icon: Layers,        label: 'AI Workflow',    href: '/us/services/ai-workflow-automation',  desc: 'End-to-end process flows' },
  { icon: Link2,         label: 'AI Integration', href: '/us/services/ai-integration-services', desc: 'Connect AI to your stack' },
  { icon: Search,        label: 'AI SEO',         href: '/us/services/ai-seo',                  desc: 'Get cited by AI engines' },
] as const;

const US_LOCATIONS = [
  { label: 'Austin',    state: 'TX', href: '/us/austin/web-design' },
  { label: 'Miami',     state: 'FL', href: '/us/miami/web-design' },
  { label: 'Denver',    state: 'CO', href: '/us/denver/web-design' },
  { label: 'Nashville', state: 'TN', href: '/us/nashville/web-design' },
  { label: 'New York',  state: 'NY', href: '/us/new-york/web-design' },
  { label: 'Charlotte', state: 'NC', href: '/us/charlotte/web-design' },
  { label: 'Raleigh',   state: 'NC', href: '/us/raleigh/web-design' },
  { label: 'Tampa',     state: 'FL', href: '/us/tampa/web-design' },
  { label: 'Portland',  state: 'OR', href: '/us/portland/web-design' },
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
    portfolioHref:   '/us/portfolio',
    pricingHref:     '/us/pricing',
    aboutHref:       '/us/about',
    featuredHeadline:'7-Day Delivery Guarantee',
    featuredBody:    'Up to 5-page sites shipped in 7 days. Fixed-price, milestone-paid, with code you own from day one.',
    featuredStats:   ['500+ US businesses served', '25+ years of expertise', 'Fixed-price, milestone-paid'],
    featuredCtaLabel:'See pricing',
    featuredCtaHref: '/us/pricing',
    modalRegion:     'us' as ModalRegion,
    defaultCtaLabel: 'Get a Quote',
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
    featuredBody:    'Custom websites delivered in 7 days. 60–70% cheaper than US & UK agencies.',
    featuredStats:   ['500+ businesses served', '25+ years of expertise', 'Fixed-price projects'],
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
    featuredBody:    'Custom websites for Dubai & UAE businesses. 60–70% less than local agencies.',
    featuredStats:   ['500+ businesses served', '25+ years of expertise', 'No hidden fees'],
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
      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-[#F05A28]/5"
    >
      <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#F05A28]/10 text-[#F05A28] transition-colors group-hover:bg-[#F05A28]/15">
        <Icon size={15} strokeWidth={1.8} />
      </span>
      <span className="flex flex-col min-w-0">
        <span className="font-fj-body text-[13.5px] font-semibold leading-tight text-fj-ink transition-colors group-hover:text-[#F05A28]">
          {label}
        </span>
        <span className="mt-0.5 font-fj-body text-[11.5px] leading-snug text-fj-neutral-400">
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

  const [openDropdown, setOpenDropdown] = useState<'services' | 'locations' | 'resources' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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

  const openDrop = (id: 'services' | 'locations' | 'resources') => {
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
              className="font-fj-display fj-display flex-shrink-0 text-[22px] font-medium text-fj-ink md:text-[24px]"
            >
              {logoText}
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">

              {/* Services trigger + mega-dropdown */}
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
                    className="absolute left-0 top-full z-50 pt-2.5"
                    onMouseEnter={keepOpen}
                    onMouseLeave={scheduleClosed}
                    role="menu"
                  >
                    {locale === 'in' ? (

                      /* ── India mega menu: 3-col hub layout ──────────────── */
                      <div className="w-[1060px] overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
                        <div className="grid grid-cols-[200px_236px_minmax(0,1fr)_188px]">

                          {/* Web Services column */}
                          <div className="p-5">
                            <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                              Web Services
                            </p>
                            {/* Web Design */}
                            <ServiceCard
                              icon={IN_WEB_SERVICES[0].icon}
                              label={IN_WEB_SERVICES[0].label}
                              href={IN_WEB_SERVICES[0].href}
                              desc={IN_WEB_SERVICES[0].desc}
                            />
                            {/* WordPress */}
                            <ServiceCard
                              icon={IN_WEB_SERVICES[1].icon}
                              label={IN_WEB_SERVICES[1].label}
                              href={IN_WEB_SERVICES[1].href}
                              desc={IN_WEB_SERVICES[1].desc}
                            />

                            <div className="my-2.5 border-t border-fj-neutral-100" />
                            <p className="mb-1.5 px-2.5 font-fj-mono text-[9.5px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-300">
                              E-Commerce
                            </p>
                            {/* E-Commerce */}
                            <ServiceCard
                              icon={IN_WEB_SERVICES[2].icon}
                              label={IN_WEB_SERVICES[2].label}
                              href={IN_WEB_SERVICES[2].href}
                              desc={IN_WEB_SERVICES[2].desc}
                            />
                            {/* Shopify — indented as sub-service */}
                            <div className="ml-3 mt-0.5 border-l-2 border-[#F05A28]/30 pl-1">
                              <ServiceCard
                                icon={IN_WEB_SERVICES[3].icon}
                                label={IN_WEB_SERVICES[3].label}
                                href={IN_WEB_SERVICES[3].href}
                                desc={IN_WEB_SERVICES[3].desc}
                              />
                            </div>

                            <div className="my-2.5 border-t border-fj-neutral-100" />
                            <p className="mb-1.5 px-2.5 font-fj-mono text-[9.5px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-300">
                              Automation &amp; Messaging
                            </p>
                            {/* n8n Automation */}
                            <ServiceCard
                              icon={IN_WEB_SERVICES[4].icon}
                              label={IN_WEB_SERVICES[4].label}
                              href={IN_WEB_SERVICES[4].href}
                              desc={IN_WEB_SERVICES[4].desc}
                            />
                            {/* WhatsApp Chatbot */}
                            <ServiceCard
                              icon={IN_WEB_SERVICES[5].icon}
                              label={IN_WEB_SERVICES[5].label}
                              href={IN_WEB_SERVICES[5].href}
                              desc={IN_WEB_SERVICES[5].desc}
                            />
                          </div>

                          {/* SEO & AI Search column (NEW) */}
                          <div className="border-l border-fj-neutral-100 p-5" style={{ backgroundColor: '#FFFDFB' }}>
                            <p className="mb-2.5 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                              SEO &amp; AI Search
                            </p>

                            {/* SEO hub card */}
                            <Link
                              href={IN_SEO_HUB_HREF}
                              className="group mb-2.5 flex items-center gap-3 rounded-xl border border-[#F3C9B6] p-3 transition-all hover:border-[#F05A28] hover:shadow-sm"
                              style={{ background: 'linear-gradient(135deg,#FCEEE8,#FFF6F1)' }}
                            >
                              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#F05A28] text-white">
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
                              className="mt-2 flex items-center gap-1 px-2.5 font-fj-body text-[11.5px] font-semibold text-[#F05A28] transition-opacity hover:opacity-75"
                            >
                              SEO by city <ArrowRight size={11} strokeWidth={2.5} />
                            </Link>
                          </div>

                          {/* AI Agent Development Hub column */}
                          <div
                            className="border-l border-fj-neutral-100 p-5"
                            style={{
                              backgroundImage: 'radial-gradient(#E8E4DC 1px, transparent 1px)',
                              backgroundSize: '18px 18px',
                              backgroundColor: '#F7F5F0',
                            }}
                          >
                            <p className="mb-3 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-fj-neutral-400">
                              AI Agent Development
                            </p>

                            {/* Hub header — links to parent hub page */}
                            <Link
                              href={IN_AI_HUB_HREF}
                              className="group mb-3 flex items-center gap-3 rounded-xl border border-fj-neutral-200 bg-white p-3 transition-all hover:border-[#F05A28] hover:shadow-sm"
                            >
                              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#F05A28] text-white">
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
                                <span className="rounded-full bg-[#FEF0EB] px-2 py-0.5 font-fj-mono text-[10px] font-bold text-[#F05A28]">
                                  7 agents
                                </span>
                                <span className="flex items-center gap-1 font-fj-body text-[11px] font-semibold text-[#F05A28]">
                                  Explore all <ArrowRight size={10} strokeWidth={2.5} />
                                </span>
                              </span>
                            </Link>

                            {/* One-line tagline */}
                            <p className="mb-3 rounded-lg border border-fj-neutral-200 bg-white px-3 py-2 font-fj-body text-[11.5px] leading-relaxed text-fj-neutral-500">
                              Autonomous AI agents that handle support, sales, marketing, and ops — so your team focuses on growth.
                            </p>

                            {/* 2-col agents grid — last agent spans full width */}
                            <div className="grid grid-cols-2 gap-1.5">
                              {IN_AI_AGENTS.map((agent, idx) => (
                                <Link
                                  key={agent.href}
                                  href={agent.href}
                                  className={`group rounded-xl border border-fj-neutral-200 bg-white transition-all hover:border-[#F05A28] hover:shadow-sm ${
                                    idx === 6
                                      ? 'col-span-2 flex items-center gap-2.5 px-3 py-2'
                                      : 'flex flex-col p-2.5'
                                  }`}
                                >
                                  <agent.icon
                                    size={14}
                                    strokeWidth={1.8}
                                    className={`text-[#F05A28] ${idx !== 6 ? 'mb-1.5' : 'flex-shrink-0'}`}
                                  />
                                  <span
                                    className={`font-fj-body font-semibold leading-tight text-fj-ink transition-colors group-hover:text-[#F05A28] ${
                                      idx !== 6 ? 'text-[12px]' : 'text-[12.5px]'
                                    }`}
                                  >
                                    {agent.label}
                                  </span>
                                  {idx !== 6 && (
                                    <span className="mt-0.5 font-fj-body text-[10.5px] leading-snug text-fj-neutral-400">
                                      {agent.desc}
                                    </span>
                                  )}
                                  {idx === 6 && (
                                    <span className="ml-1 font-fj-body text-[10.5px] text-fj-neutral-400">
                                      — {agent.desc}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Featured panel — dark charcoal for India */}
                          <div
                            className="flex flex-col justify-between rounded-r-2xl p-5"
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

                      /* ── Generic mega menu (US / UAE) ────────────────────── */
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

                          {/* Featured panel — orange gradient for US/UAE */}
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

              {/* Locations trigger + dropdown */}
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
                            className="flex items-center gap-1 font-fj-body text-[11.5px] font-semibold text-[#F05A28] transition-opacity hover:opacity-75"
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

              {/* Resources trigger + dropdown */}
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
                    <div className="w-[260px] overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white p-3 shadow-2xl shadow-fj-ink/10 ring-1 ring-fj-ink/5">
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

              {/* Flat nav links */}
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
                style={{ background: '#F05A28' }}
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
            className="font-fj-display text-[20px] font-medium text-fj-ink"
          >
            {logoText}
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
                      <Link href={IN_AI_HUB_HREF} onClick={() => setMobileOpen(false)} className="font-fj-body text-[11px] font-semibold text-[#F05A28]">View all →</Link>
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
                      <Link href={IN_SEO_HUB_HREF} onClick={() => setMobileOpen(false)} className="font-fj-body text-[11px] font-semibold text-[#F05A28]">SEO hub →</Link>
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
                  /* US / UAE mobile services — flat list */
                  <>
                    <p className="mb-1 px-1 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">Web Services</p>
                    {cfg.webServices.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                        <s.icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                        {s.label}
                      </Link>
                    ))}
                    <p className="mb-1 mt-3 px-1 font-fj-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fj-neutral-400">AI Services</p>
                    {cfg.aiServices.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 font-fj-body text-[14px] text-fj-ink transition-colors hover:bg-[#F05A28]/5 hover:text-[#F05A28]">
                        <s.icon size={14} strokeWidth={1.8} className="flex-shrink-0 text-[#F05A28]" />
                        {s.label}
                      </Link>
                    ))}
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

          {/* Resources accordion */}
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
                {RESOURCES.map((r) => (
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
          <Link
            href={cfg.portfolioHref}
            onClick={() => setMobileOpen(false)}
            className="block border-b border-fj-neutral-100 py-4 font-fj-body text-[15px] font-semibold text-fj-ink transition-colors hover:text-[#F05A28]"
          >
            Portfolio
          </Link>
          <Link
            href={cfg.pricingHref}
            onClick={() => setMobileOpen(false)}
            className="block border-b border-fj-neutral-100 py-4 font-fj-body text-[15px] font-semibold text-fj-ink transition-colors hover:text-[#F05A28]"
          >
            Pricing
          </Link>

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
            style={{ background: '#F05A28' }}
          >
            {cfg.defaultCtaLabel}
          </button>
        </div>

      </div>
    </>
  );
}

export { SiteHeader };
