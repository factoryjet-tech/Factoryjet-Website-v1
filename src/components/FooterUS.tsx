'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { trackNavigation, trackSocialClick } from '../utils/gtm';

interface FooterUSProps {
  onCtaClick?: () => void;
  hideLocations?: boolean;
}

const FooterUS: React.FC<FooterUSProps> = ({ onCtaClick, hideLocations = false }) => {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-2">
            <span className="text-2xl font-bold tracking-tight mb-6 block font-poppins">
              Factory<span className="text-[#FF6B35]">Jet</span>
            </span>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              The AI-native web design agency for B2B companies. We build enterprise-grade websites in weeks, not months.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, href: 'https://x.com/FactoryJet_Tech', label: 'Twitter' },
                { Icon: Linkedin, href: 'https://in.linkedin.com/company/factoryjet', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:connect@factoryjet.com', label: 'Email' }
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={`Connect with us on ${label}`}
                  onClick={() => trackSocialClick(label.toLowerCase(), 'footer')}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35] transition-colors text-slate-400 hover:text-white"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-space">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/us/services/web-design" onClick={() => trackNavigation('Web Design', '/us/services/web-design', 'footer')} className="hover:text-[#FF6B35] transition-colors">Web Design</Link></li>
              <li><Link href="/us/services/ecommerce-development" onClick={() => trackNavigation('E-Commerce', '/us/services/ecommerce-development', 'footer')} className="hover:text-[#FF6B35] transition-colors">E-Commerce</Link></li>
              <li><Link href="/services/ai-agent-development" onClick={() => trackNavigation('AI Agent Development', '/services/ai-agent-development', 'footer')} className="hover:text-[#FF6B35] transition-colors">AI Agent Development</Link></li>
            </ul>
          </div>

          {/* Locations */}
          {!hideLocations ? (
            <div>
              <h4 className="font-bold text-lg mb-6 font-space">Locations</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link href="/us/services/web-design/new-york" onClick={() => trackNavigation('New York', '/us/services/web-design/new-york', 'footer')} className="hover:text-[#FF6B35] transition-colors">New York</Link></li>
                <li><Link href="/us/services/web-design/cleveland" onClick={() => trackNavigation('Cleveland', '/us/services/web-design/cleveland', 'footer')} className="hover:text-[#FF6B35] transition-colors">Cleveland</Link></li>
                <li><Link href="/us/services/ecommerce-development/boise" onClick={() => trackNavigation('Boise', '/us/services/ecommerce-development/boise', 'footer')} className="hover:text-[#FF6B35] transition-colors">Boise</Link></li>
                <li><Link href="/us/services/ecommerce-development/sioux-falls" onClick={() => trackNavigation('Sioux Falls', '/us/services/ecommerce-development/sioux-falls', 'footer')} className="hover:text-[#FF6B35] transition-colors">Sioux Falls</Link></li>
                <li><Link href="/us/services/ecommerce-development/lincoln" onClick={() => trackNavigation('Lincoln', '/us/services/ecommerce-development/lincoln', 'footer')} className="hover:text-[#FF6B35] transition-colors">Lincoln</Link></li>
                <li><Link href="/us/services/ecommerce-development/chattanooga" onClick={() => trackNavigation('Chattanooga', '/us/services/ecommerce-development/chattanooga', 'footer')} className="hover:text-[#FF6B35] transition-colors">Chattanooga</Link></li>
                <li><Link href="/us/services/ecommerce-development/fargo" onClick={() => trackNavigation('Fargo', '/us/services/ecommerce-development/fargo', 'footer')} className="hover:text-[#FF6B35] transition-colors">Fargo</Link></li>
              </ul>
            </div>
          ) : null}

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-space">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/about" onClick={() => trackNavigation('About Us', '/about', 'footer')} className="hover:text-[#FF6B35] transition-colors">About Us</Link></li>
              <li><Link href="/us#results" onClick={() => trackNavigation('Case Studies', '/us#results', 'footer')} className="hover:text-[#FF6B35] transition-colors">Case Studies</Link></li>
              <li><Link href="/us/pricing" onClick={() => trackNavigation('Pricing', '/us/pricing', 'footer')} className="hover:text-[#FF6B35] transition-colors">Pricing</Link></li>
              {onCtaClick && (
                <li>
                  <button
                    onClick={(e) => { e.preventDefault(); onCtaClick(); }}
                    className="hover:text-[#FF6B35] transition-colors cursor-pointer text-left"
                  >
                    Contact
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 FactoryJet Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" onClick={() => trackNavigation('Privacy Policy', '/privacy', 'footer')} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" onClick={() => trackNavigation('Terms of Service', '/terms', 'footer')} className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterUS;
