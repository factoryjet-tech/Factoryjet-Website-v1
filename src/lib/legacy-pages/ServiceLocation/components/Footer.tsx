import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { services, cities } from '@/data/seoConfig';

interface FooterProps {
  service: string;
  city: string;
}

const Footer: React.FC<FooterProps> = ({ service, city }) => {
  const currentCity = cities[city];
  const currentService = services[service];

  // Safety check - return null if data not found
  if (!currentCity || !currentService) {
    console.error('Footer error: city or service not found', { city, service });
    return null;
  }

  return (
    <footer className="bg-jet-navy text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/FinalLogoWhite.svg"
                alt="FactoryJet"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Professional digital solutions for growing businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services in {currentCity.name}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {Object.entries(services).slice(0, 5).map(([slug, svc]) => (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}/${city}`}
                    className="hover:text-jet-blue transition-colors"
                  >
                    {svc.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold mb-4">{currentService.shortName} Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {Object.entries(cities).map(([slug, cityData]) => (
                <li key={slug}>
                  <Link
                    href={`/services/${service}/${slug}`}
                    className="hover:text-jet-blue transition-colors"
                  >
                    {cityData.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-jetOrange" />
                <span>+91 96999 77699</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-jetOrange" />
                <span>connect@factoryjet.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-jetOrange" />
                <span>{currentCity.name}, {currentCity.state}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} FactoryJet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
