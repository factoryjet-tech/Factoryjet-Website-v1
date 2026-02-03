import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const ServicesIntro: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-white border-t border-light">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center font-heading">
                Comprehensive Web Development Services for New York Businesses
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-8 rounded-full"></div>
            <div className="mt-10 text-center">
              <Link
                href="/us/services/web-design/new-york/services"
                className="inline-flex items-center gap-2 bg-[#0052CC] hover:bg-[#003d99] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                View All Services & Pricing <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
        </FadeIn>
    </div>
  );
};