'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services', isRoute: false },
    { label: 'Process', href: '#process', isRoute: false },
    { label: 'Portfolio', href: '#portfolio', isRoute: false },
    { label: 'Reviews', href: '#testimonials', isRoute: false },
    { label: 'Pricing', href: '/us/pricing', isRoute: true },
    { label: 'FAQ', href: '/us/faq', isRoute: true },
    { label: 'Contact', href: '#cta', isRoute: false },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/us" className="flex items-center gap-2 group p-1" aria-label="FactoryJet Home">
            <img src="/FinalLogo.svg" alt="FactoryJet" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="secondary" size="sm" onClick={() => window.location.href = '#cta'}>
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle - Min size 44px */}
          <button 
            className="md:hidden text-navy p-2.5 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Menu Content */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 shadow-2xl overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-semibold text-navy hover:text-primary transition-colors py-3 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-semibold text-navy hover:text-primary transition-colors py-3 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          ))}
          <div className="pt-6 mt-2">
            <Button 
              variant="secondary" 
              className="w-full justify-center min-h-[48px]" 
              onClick={() => { setIsMobileMenuOpen(false); window.location.href = '#cta'; }}
            >
              Get Free Quote
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};