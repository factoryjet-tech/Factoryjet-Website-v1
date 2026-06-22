import React from 'react';
import Link from 'next/link';
import { Rocket, Mail, MapPin, Phone, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jet-navy text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-jet-blue rounded-lg flex items-center justify-center text-white">
                <Rocket size={20} fill="currentColor" />
              </div>
              <span className="text-2xl font-display font-bold">FactoryJet</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              World-class website and e-commerce development for growing businesses. Fast, affordable, and results-driven.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: 'https://in.linkedin.com/company/factoryjet' },
                { Icon: Instagram, href: 'https://www.instagram.com/factoryjet' },
                { Icon: Facebook, href: 'https://www.facebook.com/factoryjet' },
                { Icon: Twitter, href: 'https://x.com/FactoryJet_Tech' }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-jet-blue hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services/web-design" className="hover:text-jet-blue transition-colors">Website Development</Link></li>
              <li><Link href="/services/ecommerce-development" className="hover:text-jet-blue transition-colors">E-Commerce Stores</Link></li>
              <li><Link href="/services/shopify-development" className="hover:text-jet-blue transition-colors">Shopify Development</Link></li>
              <li><Link href="/services/ai-agent-development" className="hover:text-jet-blue transition-colors">AI Agent Development</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-jet-blue transition-colors">About Us</Link></li>
              <li><Link href="/case" className="hover:text-jet-blue transition-colors">Our Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-jet-blue transition-colors">Pricing Packages</Link></li>
              <li><Link href="/case" className="hover:text-jet-blue transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-jet-blue transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-lg mb-6">Locations</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services/web-design/mumbai" className="hover:text-jet-blue transition-colors">Mumbai</Link></li>
              <li><Link href="/services/web-design/pune" className="hover:text-jet-blue transition-colors">Pune</Link></li>
              <li><Link href="/services/web-design/bangalore" className="hover:text-jet-blue transition-colors">Bangalore</Link></li>
              <li><Link href="/services/web-design/ahmedabad" className="hover:text-jet-blue transition-colors">Ahmedabad</Link></li>
              <li><Link href="/services/web-design/surat" className="hover:text-jet-blue transition-colors">Surat</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="shrink-0 text-jetOrange" size={20} />
                <span>+91 96999 77699</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="shrink-0 text-jetOrange" size={20} />
                <span>connect@factoryjet.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-jetOrange" size={20} />
                <span>FactoryJet Digital Solutions<br/>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 FactoryJet Digital Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/sitemap" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
