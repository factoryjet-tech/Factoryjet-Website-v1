'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Menu, X, ChevronDown, ChevronRight,
  BookOpen, FileText,
  Monitor, ShoppingBag, Bot, ShoppingCart,
  MessageSquare, TrendingUp, Megaphone, Calendar, Workflow, Headphones, Phone,
  Search, Zap, BarChart3,
  MapPin,
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { trackButtonClick, trackNavigation, trackCTAClick } from '@/utils/gtm';

/* ─── Data ────────────────────────────────────────────────────────── */

interface ServiceItem {
  label: string;
  href: string;
  icon: React.FC<{ size?: number; className?: string }>;
  desc: string;
  hasChildren?: boolean;
}

const UK_DEV_SERVICES: ServiceItem[] = [
  { label: 'Web Design',           href: '/uk/web-design',           icon: Monitor,      desc: 'High-performance custom sites' },
  { label: 'Shopify Development',  href: '/uk/shopify-development',  icon: ShoppingCart, desc: 'Certified Shopify Partner builds' },
  { label: 'E-Commerce',           href: '/uk/ecommerce',            icon: ShoppingBag,  desc: 'Full-stack online stores' },
  { label: 'AI Agent Development', href: '/uk/ai-agents',            icon: Bot,          desc: 'Autonomous AI automation', hasChildren: true },
];

const UK_SEO_SERVICES: ServiceItem[] = [
  { label: 'Shopify SEO',    href: '/uk/shopify-seo',    icon: Search,   desc: 'Rank your Shopify store in the UK' },
  { label: 'Ecommerce SEO',  href: '/uk/ecommerce-seo',  icon: BarChart3, desc: 'Revenue-first organic growth' },
  { label: 'AI SEO',         href: '/uk/ai-seo',         icon: Zap,      desc: 'Get cited by AI assistants' },
];

const UK_AI_SUBSERVICES: ServiceItem[] = [
  { label: 'AI Chatbot',           href: '/services/ai-agent-development/ai-chatbot',           icon: MessageSquare, desc: 'Intelligent chatbot solutions' },
  { label: 'AI Sales Agent',       href: '/services/ai-agent-development/ai-sales-agent',       icon: TrendingUp,    desc: 'AI-powered sales automation' },
  { label: 'AI Marketing Agent',   href: '/services/ai-agent-development/ai-marketing-agent',   icon: Megaphone,     desc: 'Smart marketing automation' },
  { label: 'AI Scheduling Agent',  href: '/services/ai-agent-development/ai-scheduling-agent',  icon: Calendar,      desc: 'Automated scheduling' },
  { label: 'AI Workflow',          href: '/services/ai-agent-development/ai-workflow-automation', icon: Workflow,     desc: 'End-to-end automation' },
  { label: 'AI Customer Support',  href: '/services/ai-agent-development/ai-customer-support',  icon: Headphones,    desc: '24/7 AI support agents' },
  { label: 'AI Voice Agent',       href: '/services/ai-agent-development/ai-voice-agent',       icon: Phone,         desc: 'Voice-powered AI assistants' },
];

const UK_CITIES = [
  { label: 'London',      href: '/uk/london' },
  { label: 'Manchester',  href: '/uk/manchester' },
  { label: 'Birmingham',  href: '/uk/birmingham' },
  { label: 'Leeds',       href: '/uk/leeds' },
  { label: 'Bristol',     href: '/uk/bristol' },
  { label: 'Edinburgh',   href: '/uk/edinburgh' },
  { label: 'Liverpool',   href: '/uk/liverpool' },
  { label: 'Glasgow',     href: '/uk/glasgow' },
];

/* ─── Types ───────────────────────────────────────────────────────── */

interface HeaderProps {
  variant?: 'transparent' | 'solid';
  hideLocations?: boolean;
}

/* ─── Component ───────────────────────────────────────────────────── */

const Header: React.FC<HeaderProps> = ({ variant = 'transparent', hideLocations = false }) => {
  const [isScrolled, setIsScrolled]               = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen]   = useState(false);
  const [mobileSection, setMobileSection]         = useState<string | null>(null);
  const [mobileAIOpen, setMobileAIOpen]           = useState(false);
  const [servicesOpen, setServicesOpen]           = useState(false);
  const [resourcesOpen, setResourcesOpen]         = useState(false);
  const [aiPanelOpen, setAIPanelOpen]             = useState(false);

  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aiTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { openModal: openContactModal } = useContactModal();

  const showSolidStyle = variant === 'solid' || isScrolled;
  const openModal = () => openContactModal('uk', hideLocations ? 'ai' : 'default');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* hover helpers */
  const enter = (ref: React.MutableRefObject<ReturnType<typeof setTimeout> | null>, setter: (v: boolean) => void) => {
    if (ref.current) clearTimeout(ref.current);
    setter(true);
  };
  const leave = (ref: React.MutableRefObject<ReturnType<typeof setTimeout> | null>, setter: (v: boolean) => void, delay = 150) => {
    ref.current = setTimeout(() => setter(false), delay);
  };

  const navTextClass = `flex items-center gap-1 text-sm font-medium transition-colors ${
    showSolidStyle ? 'text-gray-600 hover:text-jet-blue' : 'text-gray-200 hover:text-white'
  }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${showSolidStyle ? 'pt-4' : 'pt-6'}`}>

      {/* ── Island pill ── */}
      <div className={`
        relative transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        flex items-center justify-between
        ${showSolidStyle
          ? 'w-[90%] md:w-[85%] max-w-6xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/5 rounded-full py-3 px-4 md:px-6'
          : 'w-[95%] max-w-7xl bg-transparent py-2 px-4 md:px-0'
        }
      `}>

        {/* Logo */}
        <Link href="/uk" className="flex items-center cursor-pointer group">
          <img
            src={showSolidStyle ? '/FinalLogo.svg' : '/FinalLogoWhite.svg'}
            alt="FactoryJet UK"
            width={160}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-1">

          {/* Services */}
          <div
            className="relative px-3 py-2"
            onMouseEnter={() => enter(servicesTimeoutRef, setServicesOpen)}
            onMouseLeave={() => leave(servicesTimeoutRef, setServicesOpen)}
          >
            <button className={navTextClass}>
              Services
              <ChevronDown size={14} className={`opacity-70 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                <div
                  className="bg-white backdrop-blur-xl rounded-2xl border border-gray-100 shadow-2xl shadow-black/10 p-3 flex gap-3"
                  style={{ width: aiPanelOpen ? 760 : 520 }}
                  onMouseEnter={() => enter(servicesTimeoutRef, setServicesOpen)}
                  onMouseLeave={() => leave(servicesTimeoutRef, setServicesOpen)}
                >
                  {/* Col 1 — Development */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-2 pt-1 pb-2">Development</p>
                    {UK_DEV_SERVICES.map((s) => (
                      <div
                        key={s.label}
                        onMouseEnter={() => {
                          if (s.hasChildren) enter(aiTimeoutRef, setAIPanelOpen);
                          else { if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current); setAIPanelOpen(false); }
                        }}
                        onMouseLeave={() => { if (!s.hasChildren) leave(aiTimeoutRef, setAIPanelOpen, 80); }}
                      >
                        <Link
                          href={s.href}
                          className={`flex items-center gap-3 px-2 py-2.5 rounded-xl transition-all duration-150 group/item ${
                            s.hasChildren && aiPanelOpen ? 'bg-blue-50' : 'hover:bg-gray-50'
                          }`}
                          onClick={() => { setServicesOpen(false); trackNavigation(s.label, s.href, 'dropdown'); }}
                        >
                          <div className={`p-2 rounded-lg shrink-0 transition-colors duration-150 ${
                            s.hasChildren && aiPanelOpen
                              ? 'bg-jet-blue text-white'
                              : 'bg-blue-50 text-jet-blue group-hover/item:bg-jet-blue group-hover/item:text-white'
                          }`}>
                            <s.icon size={17} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-jet-navy font-semibold text-sm leading-tight">{s.label}</div>
                            <div className="text-[11px] text-gray-400 mt-0.5 leading-tight">{s.desc}</div>
                          </div>
                          {s.hasChildren && (
                            <ChevronRight size={13} className={`shrink-0 transition-colors ${aiPanelOpen ? 'text-jet-blue' : 'text-gray-300'}`} />
                          )}
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="w-px bg-gray-100 self-stretch my-1" />

                  {/* Col 2 — SEO & AI Search */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-2 pt-1 pb-2">SEO &amp; AI Search</p>
                    {UK_SEO_SERVICES.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group/item"
                        onClick={() => { setServicesOpen(false); trackNavigation(s.label, s.href, 'dropdown'); }}
                        onMouseEnter={() => { if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current); setAIPanelOpen(false); }}
                      >
                        <div className="p-2 rounded-lg shrink-0 bg-orange-50 text-jetOrange group-hover/item:bg-jetOrange group-hover/item:text-white transition-colors duration-150">
                          <s.icon size={17} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-jet-navy font-semibold text-sm leading-tight">{s.label}</div>
                          <div className="text-[11px] text-gray-400 mt-0.5 leading-tight">{s.desc}</div>
                        </div>
                      </Link>
                    ))}

                    {/* UK Locations mini-list */}
                    {!hideLocations && (
                      <>
                        <div className="h-px bg-gray-100 mx-2 my-2" />
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-2 pb-1.5 flex items-center gap-1">
                          <MapPin size={10} />UK Cities
                        </p>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 px-2">
                          {UK_CITIES.slice(0, 6).map((c) => (
                            <Link
                              key={c.label}
                              href={c.href}
                              className="text-[12px] text-gray-500 hover:text-jet-blue py-1 transition-colors"
                              onClick={() => { setServicesOpen(false); trackNavigation(c.label, c.href, 'dropdown'); }}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Col 3 — AI sub-services (fly-out) */}
                  {aiPanelOpen && (
                    <div
                      className="w-[220px] shrink-0 border-l border-gray-100 pl-3"
                      onMouseEnter={() => enter(aiTimeoutRef, setAIPanelOpen)}
                      onMouseLeave={() => leave(aiTimeoutRef, setAIPanelOpen, 80)}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-2 pt-1 pb-2">AI Services</p>
                      {UK_AI_SUBSERVICES.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="flex items-center gap-2.5 px-2 py-2 rounded-xl hover:bg-blue-50 transition-colors group/child"
                          onClick={() => { setServicesOpen(false); setAIPanelOpen(false); trackNavigation(s.label, s.href, 'dropdown'); }}
                        >
                          <div className="bg-blue-50 text-jet-blue p-1.5 rounded-lg group-hover/child:bg-jet-blue group-hover/child:text-white transition-colors duration-150 shrink-0">
                            <s.icon size={14} />
                          </div>
                          <span className="text-jet-navy font-medium text-[12.5px] leading-tight">{s.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Portfolio */}
          <div className="px-3 py-2">
            <Link href="/portfolio" className={navTextClass} onClick={() => trackNavigation('Portfolio', '/portfolio', 'header')}>
              Portfolio
            </Link>
          </div>

          {/* Pricing */}
          <div className="px-3 py-2">
            <a href="#pricing" className={navTextClass} onClick={() => trackNavigation('Pricing', '#pricing', 'header')}>
              Pricing
            </a>
          </div>

          {/* FAQ */}
          <div className="px-3 py-2">
            <a href="#faq" className={navTextClass} onClick={() => trackNavigation('FAQ', '#faq', 'header')}>
              FAQ
            </a>
          </div>

          {/* Resources */}
          <div
            className="relative px-3 py-2"
            onMouseEnter={() => enter(resourcesTimeoutRef, setResourcesOpen)}
            onMouseLeave={() => leave(resourcesTimeoutRef, setResourcesOpen)}
          >
            <button className={navTextClass}>
              Resources
              <ChevronDown size={14} className={`opacity-70 transition-transform duration-300 ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-100 shadow-2xl shadow-black/10 p-3 w-72">
                  <Link
                    href="/blog"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                    onClick={() => { setResourcesOpen(false); trackNavigation('Blog', '/blog', 'header'); }}
                  >
                    <div className="bg-blue-50 text-jet-blue p-2 rounded-lg group-hover/item:bg-jet-blue group-hover/item:text-white transition-colors shrink-0">
                      <FileText size={18} />
                    </div>
                    <div>
                      <div className="text-jet-navy font-semibold text-sm">Blog</div>
                      <div className="text-xs text-gray-400 mt-0.5">Latest insights &amp; web trends</div>
                    </div>
                  </Link>
                  <Link
                    href="/case-studies"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                    onClick={() => { setResourcesOpen(false); trackNavigation('Case Studies', '/case-studies', 'header'); }}
                  >
                    <div className="bg-blue-50 text-jet-blue p-2 rounded-lg group-hover/item:bg-jet-blue group-hover/item:text-white transition-colors shrink-0">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <div className="text-jet-navy font-semibold text-sm">Case Studies</div>
                      <div className="text-xs text-gray-400 mt-0.5">Real client success stories</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:block">
          <button
            onClick={() => {
              trackCTAClick('get_started', 'header_desktop', 'primary');
              trackButtonClick('get_started', 'header');
              openModal();
            }}
            className={`
              px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0
              ${showSolidStyle
                ? 'bg-jet-navy text-white hover:bg-jet-blue'
                : 'bg-white text-jet-navy hover:bg-gray-100'
              }
            `}
          >
            Get Started
          </button>
        </div>

        {/* ── Mobile hamburger ── */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className={`p-2 rounded-lg transition-colors ${showSolidStyle ? 'text-jet-navy hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-4 lg:hidden flex flex-col gap-1 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300"
        >
          {/* Services */}
          <div className="border-b border-gray-100/80 pb-1">
            <button
              onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
            >
              Services
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileSection === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {mobileSection === 'services' && (
              <div className="rounded-xl p-1.5 mb-2 mx-2 bg-gray-50/80">
                {/* Dev group */}
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-3 pt-2 pb-1">Development</p>
                {UK_DEV_SERVICES.map((s) =>
                  s.hasChildren ? (
                    <div key={s.label}>
                      <button
                        onClick={() => setMobileAIOpen(!mobileAIOpen)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${mobileAIOpen ? 'bg-blue-50 text-jet-blue' : 'hover:bg-white text-jet-slate hover:text-jet-blue'}`}
                      >
                        <div className={`p-1.5 rounded-lg transition-colors ${mobileAIOpen ? 'bg-jet-blue text-white' : 'bg-blue-50 text-jet-blue'}`}>
                          <s.icon size={16} />
                        </div>
                        <span className="font-semibold text-sm flex-1 text-left">{s.label}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${mobileAIOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileAIOpen && (
                        <div className="mt-1 mx-2 mb-2 bg-white rounded-xl border border-gray-100 overflow-hidden">
                          <Link
                            href="/uk/ai-agents"
                            className="flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100"
                            onClick={() => { trackNavigation('AI Agent Development', '/uk/ai-agents', 'mobile_menu'); setIsMobileMenuOpen(false); }}
                          >
                            <Bot size={14} className="text-jet-blue" />
                            <span className="font-semibold text-xs text-jet-blue">View All AI Services</span>
                            <ChevronRight size={12} className="text-jet-blue ml-auto" />
                          </Link>
                          <div className="p-1.5">
                            {UK_AI_SUBSERVICES.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                                onClick={() => { trackNavigation(sub.label, sub.href, 'mobile_menu'); setIsMobileMenuOpen(false); }}
                              >
                                <div className="bg-gray-50 text-jet-blue p-1 rounded-md"><sub.icon size={14} /></div>
                                <span className="font-medium text-sm text-gray-700">{sub.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-all text-jet-slate hover:text-jet-blue"
                      onClick={() => { trackNavigation(s.label, s.href, 'mobile_menu'); setIsMobileMenuOpen(false); }}
                    >
                      <div className="bg-blue-50 text-jet-blue p-1.5 rounded-lg"><s.icon size={16} /></div>
                      <span className="font-semibold text-sm">{s.label}</span>
                    </Link>
                  )
                )}

                {/* SEO group */}
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-3 pt-3 pb-1">SEO &amp; AI Search</p>
                {UK_SEO_SERVICES.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-all text-jet-slate hover:text-jetOrange"
                    onClick={() => { trackNavigation(s.label, s.href, 'mobile_menu'); setIsMobileMenuOpen(false); }}
                  >
                    <div className="bg-orange-50 text-jetOrange p-1.5 rounded-lg"><s.icon size={16} /></div>
                    <span className="font-semibold text-sm">{s.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio */}
          <div className="border-b border-gray-100/80 pb-1">
            <Link
              href="/portfolio"
              className="block text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => { trackNavigation('Portfolio', '/portfolio', 'mobile_menu'); setIsMobileMenuOpen(false); }}
            >
              Portfolio
            </Link>
          </div>

          {/* Pricing */}
          <div className="border-b border-gray-100/80 pb-1">
            <a
              href="#pricing"
              className="block text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => { trackNavigation('Pricing', '#pricing', 'mobile_menu'); setIsMobileMenuOpen(false); }}
            >
              Pricing
            </a>
          </div>

          {/* FAQ */}
          <div className="border-b border-gray-100/80 pb-1">
            <a
              href="#faq"
              className="block text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => { trackNavigation('FAQ', '#faq', 'mobile_menu'); setIsMobileMenuOpen(false); }}
            >
              FAQ
            </a>
          </div>

          {/* Resources */}
          <div className="border-b border-gray-100/80 last:border-0 pb-1">
            <button
              onClick={() => setMobileSection(mobileSection === 'resources' ? null : 'resources')}
              className="w-full flex items-center justify-between text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
            >
              Resources
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileSection === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSection === 'resources' && (
              <div className="rounded-xl p-1.5 mb-2 mx-2 bg-gray-50/80">
                {[
                  { label: 'Blog', href: '/blog', icon: FileText, desc: 'Latest insights & trends' },
                  { label: 'Case Studies', href: '/case-studies', icon: BookOpen, desc: 'Real client success stories' },
                ].map((r) => (
                  <Link
                    key={r.label}
                    href={r.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-all text-jet-slate hover:text-jet-blue"
                    onClick={() => { trackNavigation(r.label, r.href, 'mobile_menu'); setIsMobileMenuOpen(false); }}
                  >
                    <div className="bg-blue-50 text-jet-blue p-1.5 rounded-lg"><r.icon size={16} /></div>
                    <span className="font-semibold text-sm">{r.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="pt-2 sticky bottom-0 bg-white/95 backdrop-blur-sm -mx-4 -mb-4 px-4 pb-4 rounded-b-2xl">
            <button
              onClick={() => {
                trackCTAClick('get_free_consultation', 'header_mobile', 'primary');
                trackButtonClick('get_free_consultation', 'mobile_menu');
                setIsMobileMenuOpen(false);
                openModal();
              }}
              className="w-full bg-jet-blue text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/30"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
