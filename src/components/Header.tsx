'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight, BookOpen, FileText, Monitor, ShoppingBag, Bot, MessageSquare, TrendingUp, Megaphone, Calendar, Workflow, Headphones, Phone, ShoppingCart } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';
import { trackButtonClick, trackNavigation, trackCTAClick } from '../utils/gtm';

interface SubMenuItem {
  label: string;
  href: string;
  icon: React.FC<{ size?: number; className?: string }>;
  desc: string;
  isRoute: boolean;
  children?: SubMenuItem[];
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  isRoute: boolean;
  hasMegaMenu?: boolean;
  submenu?: SubMenuItem[];
}

interface HeaderProps {
  variant?: 'transparent' | 'solid';
  basePath?: string;
  hideLocations?: boolean;
}

const AI_SERVICES: SubMenuItem[] = [
  { label: 'AI Chatbot', href: '/services/ai-agent-development/ai-chatbot', icon: MessageSquare, desc: 'Intelligent chatbot solutions', isRoute: true },
  { label: 'AI Sales Agent', href: '/services/ai-agent-development/ai-sales-agent', icon: TrendingUp, desc: 'AI-powered sales automation', isRoute: true },
  { label: 'AI Marketing Agent', href: '/services/ai-agent-development/ai-marketing-agent', icon: Megaphone, desc: 'Smart marketing automation', isRoute: true },
  { label: 'AI Scheduling Agent', href: '/services/ai-agent-development/ai-scheduling-agent', icon: Calendar, desc: 'Automated scheduling & booking', isRoute: true },
  { label: 'AI Workflow Automation', href: '/services/ai-agent-development/ai-workflow-automation', icon: Workflow, desc: 'End-to-end workflow automation', isRoute: true },
  { label: 'AI Customer Support', href: '/services/ai-agent-development/ai-customer-support', icon: Headphones, desc: '24/7 AI support agents', isRoute: true },
  { label: 'AI Voice Agent', href: '/services/ai-agent-development/ai-voice-agent', icon: Phone, desc: 'Voice-powered AI assistants', isRoute: true },
];

const ECOMMERCE_SERVICES_BASE: Omit<SubMenuItem, 'href'>[] = [
  { label: 'Shopify Development', icon: ShoppingCart, desc: 'Shopify & Shopify Plus stores', isRoute: true },
];

const Header: React.FC<HeaderProps> = ({ variant = 'transparent', basePath = '', hideLocations = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [mobileAISubmenu, setMobileAISubmenu] = useState(false);
  const [mobileEcomSubmenu, setMobileEcomSubmenu] = useState(false);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [activeChildPanel, setActiveChildPanel] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aiPanelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { openModal: openContactModal } = useContactModal();
  const isUS = basePath.startsWith('/');
  const openModal = () => openContactModal(isUS ? 'us' : 'in', hideLocations ? 'ai' : 'default');

  const showSolidStyle = variant === 'solid' || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prefixRoute = (route: string) => basePath ? `${basePath}${route}` : route;

  // For service links, always use the top-level US or root base, not deep city/location paths
  const serviceBase = isUS ? '/' : (basePath && !basePath.startsWith('/') ? basePath : '');
  const prefixServiceRoute = (route: string) => serviceBase ? `${serviceBase}${route}` : route;

  const ecommerceServices: SubMenuItem[] = ECOMMERCE_SERVICES_BASE.map(s => ({
    ...s,
    href: prefixServiceRoute('/services/shopify-development'),
  }));

  const servicesSubmenu: SubMenuItem[] = [
    { label: 'Web Design', href: prefixServiceRoute('/services/web-design'), icon: Monitor, desc: 'Custom high-performance websites', isRoute: true },
    { label: 'E-Commerce', href: prefixServiceRoute('/services/ecommerce-development'), icon: ShoppingBag, desc: 'Shopify & WooCommerce stores', isRoute: true, children: ecommerceServices },
    { label: 'AI Agent Development', href: '/services/ai-agent-development', icon: Bot, desc: 'Custom AI agent development', isRoute: true, children: AI_SERVICES },
  ];

  const navItems: NavItem[] = basePath === '/uae' ? [
    { label: 'Services', href: '#services', hasDropdown: false, isRoute: false },
    { label: 'Industries', href: '#industries', hasDropdown: false, isRoute: false },
    { label: 'Process', href: '#process', hasDropdown: false, isRoute: false },
    { label: 'Portfolio', href: '#portfolio', hasDropdown: false, isRoute: false },
    { label: 'Pricing', href: '#pricing', hasDropdown: false, isRoute: false },
  ] : basePath?.startsWith('/services/web-design/') ? [
    { label: 'Services & Pricing', href: `${basePath}/services`, hasDropdown: false, isRoute: true },
    { label: 'Why Us', href: '#why-nyc', hasDropdown: false, isRoute: false },
    { label: 'FAQ', href: `${basePath}/faq`, hasDropdown: false, isRoute: true },
    { label: 'Contact', href: '#contact', hasDropdown: false, isRoute: false },
  ] : basePath === '/' ? [
    { label: 'Services', href: '#services', hasDropdown: true, hasMegaMenu: true, isRoute: false, submenu: servicesSubmenu },
    { label: 'Portfolio', href: '/portfolio', hasDropdown: false, isRoute: true },
    { label: 'About Us', href: '/about', hasDropdown: false, isRoute: true },
    { label: 'Pricing', href: prefixRoute('/pricing'), hasDropdown: false, isRoute: true },
    { label: 'FAQ', href: prefixRoute('/faq'), hasDropdown: false, isRoute: true },
    {
      label: 'Resources', href: '#', hasDropdown: true, isRoute: false,
      submenu: [
        { label: 'Blogs', href: '/blog', icon: FileText, desc: 'Latest insights & trends', isRoute: true },
        { label: 'Case Studies', href: '/case-studies', icon: BookOpen, desc: 'Real client success stories', isRoute: true },
      ]
    },
  ] : basePath ? [
    { label: 'Services', href: '#services', hasDropdown: true, hasMegaMenu: true, isRoute: false, submenu: servicesSubmenu },
    { label: 'About Us', href: isUS ? '/about' : '/about', hasDropdown: false, isRoute: true },
    { label: 'Pricing', href: isUS ? '/pricing' : '/pricing', hasDropdown: false, isRoute: true },
    ...(isUS ? [{ label: 'FAQ', href: '/faq', hasDropdown: false, isRoute: true }] : []),
  ] : [
    { label: 'Services', href: '#services', hasDropdown: true, hasMegaMenu: true, isRoute: false, submenu: servicesSubmenu },
    { label: 'Portfolio', href: '/portfolio', hasDropdown: false, isRoute: true },
    { label: 'About Us', href: '/about', hasDropdown: false, isRoute: true },
    { label: 'Pricing', href: '/pricing', hasDropdown: false, isRoute: true },
    {
      label: 'Resources', href: '#', hasDropdown: true, isRoute: false,
      submenu: [
        { label: 'Blogs', href: '/blog', icon: FileText, desc: 'Latest insights & trends', isRoute: true },
        { label: 'Case Studies', href: '/case-studies', icon: BookOpen, desc: 'Real client success stories', isRoute: true },
      ]
    },
    { label: 'Contact Us', href: '/contact', hasDropdown: false, isRoute: true }
  ];

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setShowAIPanel(false);
    }, 150);
  };

  const handleAIPanelEnter = () => {
    if (aiPanelTimeoutRef.current) clearTimeout(aiPanelTimeoutRef.current);
    setShowAIPanel(true);
    setActiveChildPanel('AI Agent Development');
  };

  const handleAIPanelLeave = () => {
    aiPanelTimeoutRef.current = setTimeout(() => {
      setShowAIPanel(false);
      setActiveChildPanel(null);
    }, 100);
  };

  const handleChildPanelEnter = (label: string) => {
    if (aiPanelTimeoutRef.current) clearTimeout(aiPanelTimeoutRef.current);
    setActiveChildPanel(label);
    setShowAIPanel(true);
  };

  const handleChildPanelLeave = () => {
    aiPanelTimeoutRef.current = setTimeout(() => {
      setActiveChildPanel(null);
      setShowAIPanel(false);
    }, 100);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileSubmenu(mobileSubmenu === label ? null : label);
    if (mobileSubmenu !== label) {
      setMobileAISubmenu(false);
      setMobileEcomSubmenu(false);
    }
  };

  const renderLink = (href: string, isRoute: boolean | undefined, children: React.ReactNode, className: string, onClick?: () => void) => {
    if (isRoute) {
      return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
    }
    return <a href={href} className={className} onClick={onClick}>{children}</a>;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${showSolidStyle ? 'pt-4' : 'pt-6'}`}>

      {/* Island Container */}
      <div
        className={`
          relative transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          flex items-center justify-between
          ${showSolidStyle
            ? 'w-[90%] md:w-[85%] max-w-6xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/5 rounded-full py-3 px-4 md:px-6'
            : 'w-[95%] max-w-7xl bg-transparent py-2 px-4 md:px-0'
          }
        `}
      >
        {/* Logo */}
        <Link href={basePath || "/"} className="flex items-center cursor-pointer group">
          <img
            src={showSolidStyle ? "/FinalLogo.svg" : "/FinalLogoWhite.svg"}
            alt="FactoryJet"
            width={240}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative px-3 py-2"
              onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.label)}
              onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
            >
              {renderLink(
                item.href,
                item.isRoute,
                <>
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className={`opacity-70 transition-transform duration-300 inline ml-1 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </>,
                `flex items-center gap-1 text-sm font-medium transition-colors ${
                  showSolidStyle ? 'text-gray-600 hover:text-jet-blue' : 'text-gray-200 hover:text-white'
                }`
              )}

              {/* Desktop Dropdown: Services (3 items, compact) */}
              {item.hasDropdown && item.hasMegaMenu && activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 flex items-start gap-2">
                  {/* Services dropdown */}
                  <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-100 shadow-2xl shadow-black/10 p-2 w-[280px]">
                    {item.submenu?.map((sub) => (
                      <div
                        key={sub.label}
                        onMouseEnter={() => sub.children && handleChildPanelEnter(sub.label)}
                        onMouseLeave={() => sub.children && handleChildPanelLeave()}
                      >
                        <Link
                          href={sub.href}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group/item ${
                            sub.children && activeChildPanel === sub.label
                              ? 'bg-blue-50'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 transition-colors duration-150 ${
                            sub.children && activeChildPanel === sub.label
                              ? 'bg-jet-blue text-white'
                              : 'bg-blue-50 text-jet-blue group-hover/item:bg-jet-blue group-hover/item:text-white'
                          }`}>
                            <sub.icon size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-jet-navy font-semibold text-sm leading-tight">{sub.label}</div>
                            <div className="text-[11px] text-gray-400 mt-0.5 leading-tight">{sub.desc}</div>
                          </div>
                          {sub.children && (
                            <ChevronRight size={14} className={`shrink-0 transition-colors ${activeChildPanel === sub.label ? 'text-jet-blue' : 'text-gray-300'}`} />
                          )}
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Child Services Mega Menu, appears on hover of any service with children */}
                  {activeChildPanel && item.submenu?.find(s => s.label === activeChildPanel)?.children && (
                    <div
                      className="bg-white backdrop-blur-xl rounded-2xl border border-gray-100 shadow-2xl shadow-black/10 p-2 w-[260px]"
                      onMouseEnter={() => handleChildPanelEnter(activeChildPanel)}
                      onMouseLeave={handleChildPanelLeave}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-3 pt-1 pb-1.5">{activeChildPanel === 'AI Agent Development' ? 'AI Services' : `${activeChildPanel} Services`}</p>
                      {item.submenu?.find(s => s.label === activeChildPanel)?.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors group/child"
                        >
                          <div className="bg-blue-50 text-jet-blue p-1.5 rounded-lg group-hover/child:bg-jet-blue group-hover/child:text-white transition-colors duration-150 shrink-0">
                            <child.icon size={15} />
                          </div>
                          <span className="text-jet-navy font-medium text-[13px]">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Desktop Dropdown: Regular (Locations, Resources) */}
              {item.hasDropdown && !item.hasMegaMenu && activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                  <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-100 shadow-2xl shadow-black/10 p-3 w-80 max-h-[80vh] overflow-y-auto">
                    {item.submenu?.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="bg-blue-50 text-jet-blue p-2 rounded-lg group-hover/item:bg-jet-blue group-hover/item:text-white transition-colors shrink-0">
                          <sub.icon size={18} />
                        </div>
                        <div>
                          <div className="text-jet-navy font-semibold text-sm">{sub.label}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{sub.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
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
           `}>
             Get Started
           </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => {
              trackButtonClick(isMobileMenuOpen ? 'close_menu' : 'open_menu', 'header_mobile');
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className={`p-2 rounded-lg transition-colors ${showSolidStyle ? 'text-jet-navy hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-4 lg:hidden flex flex-col gap-1 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100/80 last:border-0 pb-1 last:pb-0">
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleMobileSubmenu(item.label)}
                    className="w-full flex items-center justify-between text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileSubmenu === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileSubmenu === item.label && (
                    <div className="rounded-xl p-1.5 mb-2 mx-2 bg-gray-50/80">
                      {item.submenu?.map((sub) => (
                        sub.children ? (
                          <div key={sub.label}>
                            {/* Expandable service with children */}
                            <button
                              onClick={() => {
                                if (sub.label === 'AI Agent Development') {
                                  setMobileAISubmenu(!mobileAISubmenu);
                                } else if (sub.label === 'E-Commerce') {
                                  setMobileEcomSubmenu(!mobileEcomSubmenu);
                                }
                              }}
                              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                                (sub.label === 'AI Agent Development' ? mobileAISubmenu : mobileEcomSubmenu) ? 'bg-blue-50 text-jet-blue' : 'hover:bg-white text-jet-slate hover:text-jet-blue'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg transition-colors ${(sub.label === 'AI Agent Development' ? mobileAISubmenu : mobileEcomSubmenu) ? 'bg-jet-blue text-white' : 'bg-blue-50 text-jet-blue'}`}>
                                <sub.icon size={16} />
                              </div>
                              <span className="font-semibold text-sm flex-1 text-left">{sub.label}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${(sub.label === 'AI Agent Development' ? mobileAISubmenu : mobileEcomSubmenu) ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Expanded sub-services */}
                            {(sub.label === 'AI Agent Development' ? mobileAISubmenu : mobileEcomSubmenu) && (
                              <div className="mt-1 mx-2 mb-2 bg-white rounded-xl border border-gray-100 overflow-hidden">
                                {/* View All link */}
                                <Link
                                  href={sub.href}
                                  className="flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100"
                                  onClick={() => {
                                    trackNavigation(sub.label, sub.href, 'mobile_menu');
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  <sub.icon size={14} className="text-jet-blue" />
                                  <span className="font-semibold text-xs text-jet-blue">View All {sub.label === 'AI Agent Development' ? 'AI Services' : `${sub.label} Services`}</span>
                                  <ChevronRight size={12} className="text-jet-blue ml-auto" />
                                </Link>

                                {/* Individual services */}
                                <div className="p-1.5">
                                  {sub.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                                      onClick={() => {
                                        trackNavigation(child.label, child.href, 'mobile_menu');
                                        setIsMobileMenuOpen(false);
                                      }}
                                    >
                                      <div className="bg-gray-50 text-jet-blue p-1 rounded-md">
                                        <child.icon size={14} />
                                      </div>
                                      <span className="font-medium text-sm text-gray-700">{child.label}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-all text-jet-slate hover:text-jet-blue"
                            onClick={() => {
                              trackNavigation(sub.label, sub.href, 'mobile_menu');
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <div className="bg-blue-50 text-jet-blue p-1.5 rounded-lg">
                              <sub.icon size={16} />
                            </div>
                            <span className="font-semibold text-sm">{sub.label}</span>
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </>
              ) : (
                item.isRoute ? (
                  <Link
                    href={item.href}
                    className="block text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={() => {
                      trackNavigation(item.label, item.href, 'mobile_menu');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block text-jet-navy font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={() => {
                      trackNavigation(item.label, item.href, 'mobile_menu');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          ))}
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
