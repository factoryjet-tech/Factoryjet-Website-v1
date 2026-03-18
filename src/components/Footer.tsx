'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { trackNavigation, trackSocialClick, trackContactClick } from '../utils/gtm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jet-navy text-white pt-16 md:pt-20 pb-8 md:pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4 md:mb-6">
              <img
                src="/FinalLogoWhite.svg"
                alt="FactoryJet"
                width={160}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              World-class website and e-commerce development for growing businesses. Fast, affordable, and results-driven.
            </p>
            <div className="flex gap-3 md:gap-4">
              {[
                { Icon: Linkedin, href: 'https://in.linkedin.com/company/factoryjet', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://www.instagram.com/factoryjetb2b/', label: 'Instagram' },
                { Icon: Facebook, href: 'https://www.facebook.com/factoryjetb2b/', label: 'Facebook' },
                { Icon: Twitter, href: 'https://x.com/FactoryJet_Tech', label: 'Twitter' }
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  title={label}
                  onClick={() => trackSocialClick(label.toLowerCase(), 'footer')}
                  className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-jet-blue hover:text-white transition-all"
                >
                  <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Our Services</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li><Link href="/services/web-design" onClick={() => trackNavigation('Web Design', '/services/web-design', 'footer')} className="hover:text-jet-blue transition-colors">Web Design</Link></li>
              <li><Link href="/services/ecommerce-development" onClick={() => trackNavigation('E-Commerce', '/services/ecommerce-development', 'footer')} className="hover:text-jet-blue transition-colors">E-Commerce</Link></li>
              <li><Link href="/services/ai-agent-development" onClick={() => trackNavigation('AI Agent Development', '/services/ai-agent-development', 'footer')} className="hover:text-jet-blue transition-colors">AI Agent Development</Link></li>
              <li><Link href="/services/ai-agent-development/ai-chatbot" onClick={() => trackNavigation('AI Chatbot', '/services/ai-agent-development/ai-chatbot', 'footer')} className="hover:text-jet-blue transition-colors">AI Chatbot</Link></li>
              <li><Link href="/services/ai-agent-development/ai-sales-agent" onClick={() => trackNavigation('AI Sales Agent', '/services/ai-agent-development/ai-sales-agent', 'footer')} className="hover:text-jet-blue transition-colors">AI Sales Agent</Link></li>
              <li><Link href="/services/ai-agent-development/ai-customer-support" onClick={() => trackNavigation('AI Customer Support', '/services/ai-agent-development/ai-customer-support', 'footer')} className="hover:text-jet-blue transition-colors">AI Customer Support</Link></li>
              <li><Link href="/services/ai-agent-development/ai-voice-agent" onClick={() => trackNavigation('AI Voice Agent', '/services/ai-agent-development/ai-voice-agent', 'footer')} className="hover:text-jet-blue transition-colors">AI Voice Agent</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Company</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li><Link href="/about" onClick={() => trackNavigation('About Us', '/about', 'footer')} className="hover:text-jet-blue transition-colors">About Us</Link></li>
              <li><Link href="/pricing" onClick={() => trackNavigation('Pricing Packages', '/pricing', 'footer')} className="hover:text-jet-blue transition-colors">Pricing Packages</Link></li>
              <li><Link href="/case" onClick={() => trackNavigation('Case Studies', '/case', 'footer')} className="hover:text-jet-blue transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" onClick={() => trackNavigation('Blog', '/blog', 'footer')} className="hover:text-jet-blue transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Get in Touch</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <Phone className="shrink-0 text-jetOrange w-4 h-4 md:w-5 md:h-5 mt-0.5" />
                <span>+91 96999 77699</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="shrink-0 text-jetOrange w-4 h-4 md:w-5 md:h-5 mt-0.5" />
                <span>connect@factoryjet.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-jetOrange w-4 h-4 md:w-5 md:h-5 mt-0.5" />
                <span>FactoryJet Digital Solutions<br/>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p>© 2026 FactoryJet Digital Solutions. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <Link href="/terms" onClick={() => trackNavigation('Terms', '/terms', 'footer')} className="text-gray-400 hover:text-white transition-colors">Terms </Link>
            <Link href="/privacy" onClick={() => trackNavigation('Privacy Policy', '/privacy', 'footer')} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy" onClick={() => trackNavigation('Refund Policy', '/refund-policy', 'footer')} className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link>
            <Link href="/sitemap" onClick={() => trackNavigation('Sitemap', '/sitemap', 'footer')} className="text-gray-400 hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
