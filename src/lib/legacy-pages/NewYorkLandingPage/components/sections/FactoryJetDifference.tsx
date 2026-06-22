import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Palette, Settings, FlaskConical, Target, Moon } from 'lucide-react';

export const FactoryJetDifference: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 font-heading">
              FACTORYJET'S WEB DESIGN & DEVELOPMENT SERVICES IN NEW YORK CITY
            </h2>
            <h3 className="text-2xl font-bold text-navy mb-4 font-heading">
              What Makes FactoryJet Different: The AI-Native Advantage
            </h3>
            <p className="text-slate text-lg max-w-3xl mx-auto mb-6">
              We're not a traditional web design agency. FactoryJet is the <span className="font-bold text-navy">first AI-native web development company</span> specifically built to serve small and medium businesses who need enterprise-quality websites without enterprise budgets.
            </p>
            <h4 className="text-xl font-bold text-primary font-heading">
              Our Secret? AI-Enhanced Workflows That Cut Costs Without Cutting Quality
            </h4>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Palette,
              title: "AI-Assisted Design",
              desc: "We use machine learning to analyze 50,000+ high-converting websites, identify patterns that work for your industry, and create designs proven to convert"
            },
            {
              icon: Settings,
              title: "Automated Code Optimization",
              desc: "Our AI tools write cleaner, faster code than manual development—reducing bugs by 40% and improving load times by 60%"
            },
            {
              icon: FlaskConical,
              title: "Intelligent Testing",
              desc: "AI-powered QA tests your website across 100+ device/browser combinations in hours instead of weeks"
            },
            {
              icon: Target,
              title: "Predictive SEO",
              desc: "Machine learning analyzes Google's ranking factors and automatically optimizes your content structure"
            },
            {
              icon: Moon,
              title: "24/7 Development Cycle",
              desc: "Our international team works across time zones—progress happens while NYC sleeps"
            }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="h-full bg-white p-8 rounded-lg shadow-md hover:shadow-lg border border-light hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-md bg-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6" />
                </div>
                <h5 className="text-xl font-bold text-navy mb-3 font-heading">{card.title}</h5>
                <p className="text-slate leading-relaxed">{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="bg-white border-l-4 border-accent rounded-r-lg p-8 text-center max-w-4xl mx-auto shadow-md">
            <p className="text-xl md:text-2xl font-bold text-navy font-heading">
              The Result: We deliver in 7 days what traditional NYC agencies take 6-12 weeks to build, at <span className="text-accent">60-70% lower cost</span>, with equal or better quality.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};