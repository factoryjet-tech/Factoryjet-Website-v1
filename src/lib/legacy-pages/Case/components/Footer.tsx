import React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">FactoryJet</span>
            </div>
            <p className="text-slate-400 text-sm">Your trusted partner for digital transformation.</p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold mb-4">Locations</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/mumbai" className="hover:text-white transition-colors">Mumbai</Link></li>
              <li><Link href="/pune" className="hover:text-white transition-colors">Pune</Link></li>
              <li><Link href="/bangalore" className="hover:text-white transition-colors">Bangalore</Link></li>
              <li><Link href="/ahmedabad" className="hover:text-white transition-colors">Ahmedabad</Link></li>
              <li><Link href="/surat" className="hover:text-white transition-colors">Surat</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} FactoryJet Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};