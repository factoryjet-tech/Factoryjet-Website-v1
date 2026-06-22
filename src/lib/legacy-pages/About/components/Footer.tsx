import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-jetBlue rounded-lg"></div>
              FactoryJet
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Empowering SMBs with enterprise-grade digital solutions. Your trusted partner for transformation.
            </p>
            <div className="flex gap-4">
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>connect@factoryjet.com</li>
              <li>+91 96999 77699</li>
              <li>
                India<br />
                (Serving Global Markets)
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-jetBlue cursor-pointer transition-colors">About Us</Link></li>
              <li><Link href="/case" className="hover:text-jetBlue cursor-pointer transition-colors">Our Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-jetBlue cursor-pointer transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-jetBlue cursor-pointer transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold mb-6">Locations</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/mumbai" className="hover:text-jetBlue cursor-pointer transition-colors">Mumbai</Link></li>
              <li><Link href="/pune" className="hover:text-jetBlue cursor-pointer transition-colors">Pune</Link></li>
              <li><Link href="/bangalore" className="hover:text-jetBlue cursor-pointer transition-colors">Bangalore</Link></li>
              <li><Link href="/ahmedabad" className="hover:text-jetBlue cursor-pointer transition-colors">Ahmedabad</Link></li>
              <li><Link href="/surat" className="hover:text-jetBlue cursor-pointer transition-colors">Surat</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/privacy" className="hover:text-jetBlue cursor-pointer transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-jetBlue cursor-pointer transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="hover:text-jetBlue cursor-pointer transition-colors">Sitemap</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} FactoryJet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
