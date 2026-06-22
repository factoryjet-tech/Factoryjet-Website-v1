import React from 'react';
import { Clock, DollarSign, HeadphonesIcon, Award, Shield, TrendingUp } from 'lucide-react';

interface WhyUsProps {
  service: string;
  city: string;
}

const WhyUs: React.FC<WhyUsProps> = ({ service, city }) => {
  const reasons = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      desc: 'Most projects completed within 7 days without compromising quality'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      desc: 'Transparent pricing with flexible packages to suit your budget'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      desc: 'Round-the-clock support and maintenance for peace of mind'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      desc: '150+ successful projects with 100% client satisfaction rate'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      desc: 'Enterprise-grade security and hosting infrastructure'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      desc: 'Solutions designed to scale with your business growth'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            Why Choose FactoryJet in {city}?
          </h2>
          <p className="text-lg text-gray-600">
            We're not just another agency - we're your growth partner
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-jet-blue/20"
              >
                <div className="shrink-0 w-12 h-12 bg-jet-blue/10 rounded-lg flex items-center justify-center text-jet-blue">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-jet-navy mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
