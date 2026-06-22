import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { CheckCircle } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const stats = [
    { text: "25+ Years Combined Experience" },
    { text: "500+ Websites Delivered" },
    { text: "98% Client Satisfaction Rate" },
    { text: "7-Day Delivery Guarantee" },
    { text: "AI-Native Development Process" },
  ];

  const industries = [
    "Finance & FinTech", "Professional Services", "E-Commerce", 
    "Real Estate", "Healthcare", "Tech Startups", 
    "Media & Creative Agencies", "Hospitality", "Legal Services"
  ];

  return (
    <section className="bg-slate-50 border-y border-light py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-navy mb-8 font-heading">Trusted By 500+ Businesses Worldwide</h3>
            
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 text-slate font-medium">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center mb-10 pb-8 border-b border-light">
            <p className="text-gray-500 mb-4 font-mono text-sm uppercase tracking-wider">Technologies We Master</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-navy font-semibold text-lg items-center">
              <span>WordPress</span>
              <span className="text-gray-300">•</span>
              <span>Webflow</span>
              <span className="text-gray-300">•</span>
              <span>Framer</span>
              <span className="text-gray-300">•</span>
              <span>React</span>
              <span className="text-gray-300">•</span>
              <span>Python</span>
              <span className="text-gray-300">•</span>
              <span>Next.js</span>
              <span className="text-gray-300">•</span>
              <span>Custom Development</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <span 
                key={i} 
                className="bg-white text-navy px-4 py-2 rounded-md text-sm font-medium border border-light shadow-sm hover:border-primary/50 transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};