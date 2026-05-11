'use client';

import Link from 'next/link';
import { Globe, ShoppingBag, Users, DollarSign, BookOpen, FileText, Phone, MapPin, Scale, Shield } from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: React.ElementType;
  links: { name: string; path: string; description: string }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: Globe,
    links: [
      { name: 'Home', path: '/', description: 'Welcome to FactoryJet - Your Digital Partner' },
      { name: 'About Us', path: '/about', description: 'Learn about our story, mission, and team' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
    ],
  },
  {
    title: 'Services',
    icon: ShoppingBag,
    links: [
      { name: 'Web Design', path: '/services/web-design', description: 'Custom website design and development' },
      { name: 'E-Commerce', path: '/services/ecommerce-development', description: 'Shopify & WooCommerce store development' },
    ],
  },
  {
    title: 'Pricing & Packages',
    icon: DollarSign,
    links: [
      { name: 'Pricing', path: '/pricing', description: 'View our transparent pricing packages' },
    ],
  },
  {
    title: 'Resources',
    icon: BookOpen,
    links: [
      { name: 'Blog', path: '/blog', description: 'Latest insights, tips, and industry trends' },
      { name: 'Case Studies', path: '/case', description: 'Real success stories from our clients' },
    ],
  },
  {
    title: 'Locations',
    icon: MapPin,
    links: [
      { name: 'Mumbai', path: '/services/web-design/mumbai', description: 'Web design services in Mumbai' },
      { name: 'Pune', path: '/services/web-design/pune', description: 'Web design services in Pune' },
      { name: 'Bangalore', path: '/services/web-design/bangalore', description: 'Web design services in Bangalore' },
      { name: 'Delhi NCR', path: '/services/web-design/delhi', description: 'Web design services in Delhi NCR' },
      { name: 'Chennai', path: '/services/web-design/chennai', description: 'Web design services in Chennai' },
      { name: 'Hyderabad', path: '/services/web-design/hyderabad', description: 'Web design services in Hyderabad' },
      { name: 'Ahmedabad', path: '/services/web-design/ahmedabad', description: 'Web design services in Ahmedabad' },
      { name: 'Surat', path: '/services/web-design/surat', description: 'Web design services in Surat' },
      { name: 'Madurai', path: '/services/web-design/madurai', description: 'Web design services in Madurai' },
    ],
  },
  {
    title: 'Legal',
    icon: Scale,
    links: [
      { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions for using our services' },
      { name: 'Privacy Policy', path: '/privacy', description: 'How we protect and use your data' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-jet-navy mb-4">
              Sitemap
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Navigate through all pages of FactoryJet. Find exactly what you're looking for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapData.map((section) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-jet-blue/10 rounded-xl flex items-center justify-center text-jet-blue">
                    <section.icon size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-jet-navy">{section.title}</h2>
                </div>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        className="group block"
                      >
                        <span className="text-jet-navy font-semibold group-hover:text-jet-blue transition-colors">
                          {link.name}
                        </span>
                        <p className="text-sm text-gray-500 mt-0.5">{link.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* XML Sitemap Reference */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full text-gray-600">
              <FileText size={18} />
              <span>
                XML Sitemap available at{' '}
                <a
                  href="/sitemap.xml"
                  className="text-jet-blue font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /sitemap.xml
                </a>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
