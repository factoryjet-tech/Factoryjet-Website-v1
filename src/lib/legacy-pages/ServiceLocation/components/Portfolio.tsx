import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface PortfolioProps {
  service: string;
  city: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ service, city }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            Our Work in {city}
          </h2>
          <p className="text-lg text-gray-600">
            Real projects delivering real results for businesses like yours
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/case"
            className="inline-flex items-center gap-2 bg-jet-blue text-white px-8 py-4 rounded-full font-bold hover:bg-jet-navy transition-all hover:-translate-y-1 shadow-lg"
          >
            View All Case Studies
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
