import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface PricingProps {
  service: string;
  city: string;
}

const Pricing: React.FC<PricingProps> = ({ service, city }) => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            Transparent Pricing in {city}
          </h2>
          <p className="text-lg text-gray-600">
            No hidden costs. Choose the package that fits your needs.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-jet-blue text-white px-8 py-4 rounded-full font-bold hover:bg-jet-navy transition-all hover:-translate-y-1 shadow-lg"
          >
            View Detailed Pricing
          </Link>
          <p className="mt-4 text-gray-600">
            Custom packages available. Contact us for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
