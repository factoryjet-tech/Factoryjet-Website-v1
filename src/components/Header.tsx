'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, BookOpen, FileText, MapPin, Monitor, ShoppingBag } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';
import { trackButtonClick, trackNavigation, trackCTAClick } from '../utils/gtm';

interface HeaderProps {
  variant?: 'transparent' | 'solid';
  basePath?: string; // For region-specific routes (e.g., '/us' for US pages)
}

const Header: React.FC<HeaderProps> = ({ variant = 'transparent', basePath = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const { openModal } = useContactModal();

  // For solid variant, always show scrolled style
  const showSolidStyle = variant === 'solid' || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to prefix routes with basePath (for region-specific pages like /us)
  const prefixRoute = (route: string) => basePath ? `${basePath}${route}` : route;

  // Different navigation for regional pages vs main site
  const navItems = basePath === '/uae' ? [
    // UAE page navigation - hash links to page sections
    { label: 'Services', href: '#services', hasDropdown: false, isRoute: false },
    { label: 'Industries', href: '#industries', hasDropdown: false, isRoute: false },
    { label: 'Process', href: '#process', hasDropdown: false, isRoute: false },
    { label: 'Portfolio', href: '#portfolio', hasDropdown: false, isRoute: false },
    { label: 'Pricing', href: '#pricing', hasDropdown: false, isRoute: false },
  ] : basePath?.startsWith('/us/services/web-design/') ? [
    // US city-specific page navigation (New York, Cleveland, etc.)
    { label: 'Services & Pricing', href: `${basePath}/services`, hasDropdown: false, isRoute: true },
    { label: 'Why Us', href: '#why-nyc', hasDropdown: false, isRoute: false },
    { label: 'FAQ', href: `${basePath}/faq`, hasDropdown: false, isRoute: true },
    { label: 'Contact', href: '#contact', hasDropdown: false, isRoute: false },
  ] : basePath === '/us' ? [
    // US home page navigation - Services dropdown + Locations dropdown + hash links
    {
      label: 'Services',
      href: '#services',
      hasDropdown: true,
      submenu: [
        { label: 'Web Design', href: prefixRoute('/services/web-design'), icon: Monitor, desc: 'Custom high-performance websites', isRoute: true },
        { label: 'E-Commerce', href: prefixRoute('/services/ecommerce'), icon: ShoppingBag, desc: 'Shopify & WooCommerce stores', isRoute: true },
      ]
    },
    {
      label: 'Locations',
      href: '#locations',
      hasDropdown: true,
      submenu: [
        { label: 'New York', href: '/us/services/web-design/new-york', icon: MapPin, desc: 'Web design in New York City', isRoute: true },
        { label: 'Cleveland', href: '/us/services/web-design/cleveland', icon: MapPin, desc: 'Web design in Cleveland', isRoute: true },
      ]
    },
    { label: 'About Us', href: '#about', hasDropdown: false, isRoute: false },
    { label: 'Pricing', href: prefixRoute('/pricing'), hasDropdown: false, isRoute: true },
    { label: 'FAQ', href: prefixRoute('/faq'), hasDropdown: false, isRoute: true },
  ] : basePath ? [
    // Other US pages navigation - Services dropdown + hash links to page sections
    {
      label: 'Services',
      href: '#services',
      hasDropdown: true,
      submenu: [
        { label: 'Web Design', href: prefixRoute('/services/web-design'), icon: Monitor, desc: 'Custom high-performance websites', isRoute: true },
        { label: 'E-Commerce', href: prefixRoute('/services/ecommerce'), icon: ShoppingBag, desc: 'Shopify & WooCommerce stores', isRoute: true },
      ]
    },
    { label: 'About Us', href: '#about', hasDropdown: false, isRoute: false },
    { label: 'Pricing', href: prefixRoute('/pricing'), hasDropdown: false, isRoute: true },
    { label: 'FAQ', href: prefixRoute('/faq'), hasDropdown: false, isRoute: true },
  ] : [
    // Main site navigation
    {
      label: 'Services',
      href: '#services',
      hasDropdown: true,
      submenu: [
        { label: 'Web Design', href: '/services/web-design', icon: Monitor, desc: 'Custom high-performance websites', isRoute: true },
        { label: 'E-Commerce', href: '/services/ecommerce', icon: ShoppingBag, desc: 'Shopify & WooCommerce stores', isRoute: true },
      ]
    },
    {
      label: 'Locations',
      href: '#locations',
      hasDropdown: true,
      submenu: [
        { label: 'Mumbai', href: '/services/web-design/mumbai', icon: MapPin, desc: 'Web design in Mumbai', isRoute: true },
        { label: 'Pune', href: '/services/web-design/pune', icon: MapPin, desc: 'Web design in Pune', isRoute: true },
        { label: 'Bangalore', href: '/services/web-design/bangalore', icon: MapPin, desc: 'Web design in Bangalore', isRoute: true },
        { label: 'Delhi NCR', href: '/services/web-design/delhi', icon: MapPin, desc: 'Web design in Delhi NCR', isRoute: true },
        { label: 'Chennai', href: '/services/web-design/chennai', icon: MapPin, desc: 'Web design in Chennai', isRoute: true },
        { label: 'Hyderabad', href: '/services/web-design/hyderabad', icon: MapPin, desc: 'Web design in Hyderabad', isRoute: true },
        { label: 'Ahmedabad', href: '/services/web-design/ahmedabad', icon: MapPin, desc: 'Web design in Ahmedabad', isRoute: true },
        { label: 'Surat', href: '/services/web-design/surat', icon: MapPin, desc: 'Web design in Surat', isRoute: true },
        { label: 'Madurai', href: '/services/web-design/madurai', icon: MapPin, desc: 'Web design in Madurai', isRoute: true },
      ]
    },
    { label: 'About Us', href: '/about', hasDropdown: false, isRoute: true },
    { label: 'Pricing', href: '/pricing', hasDropdown: false, isRoute: true },
    {
      label: 'Resources',
      href: '#',
      hasDropdown: true,
      submenu: [
        { label: 'Blogs', href: '/blog', icon: FileText, desc: 'Latest insights & trends', isRoute: true },
        { label: 'Case Studies', href: '/case', icon: BookOpen, desc: 'Real client success stories', isRoute: true },
      ]
    },
    { label: 'Contact Us', href: '/contact', hasDropdown: false, isRoute: true }
  ];

  const toggleMobileSubmenu = (label: string) => {
    setMobileSubmenu(mobileSubmenu === label ? null : label);
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
        {/* Logo - White version on dark hero, regular on scrolled/solid */}
        <Link href={basePath || "/"} className="flex items-center cursor-pointer group">
          <img
            src={showSolidStyle ? "/FinalLogo.svg" : "/FinalLogoWhite.svg"}
            alt="FactoryJet"
            width={160}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group px-3 py-2">
              {renderLink(
                item.href,
                item.isRoute,
                <>
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300 inline ml-1" />}
                </>,
                `flex items-center gap-1 text-sm font-medium transition-colors ${
                  showSolidStyle ? 'text-gray-600 hover:text-jet-blue' : 'text-gray-200 hover:text-white'
                }`
              )}

              {/* Desktop Dropdown */}
              {item.hasDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl p-3 w-80 max-h-[80vh] overflow-y-auto overflow-hidden">
                    {item.submenu?.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/50 transition-colors group/item"
                      >
                        <div className="bg-blue-100/50 text-jet-blue p-2 rounded-lg group-hover/item:bg-jet-blue group-hover/item:text-white transition-colors shrink-0">
                          <sub.icon size={18} />
                        </div>
                        <div>
                          <div className="text-jet-navy font-bold text-sm">{sub.label}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{sub.desc}</div>
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
        <div id="mobile-menu" className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-4 lg:hidden flex flex-col gap-2 animate-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
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
                    <div className="bg-gray-50 rounded-xl p-2 mb-2 ml-4">
                      {item.submenu?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-all text-jet-slate hover:text-jet-blue"
                          onClick={() => {
                            trackNavigation(sub.label, sub.href, 'mobile_menu');
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <sub.icon size={16} />
                          <span className="font-medium text-sm">{sub.label}</span>
                        </Link>
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
          <div className="pt-2">
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
