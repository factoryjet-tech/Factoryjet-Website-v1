import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { BarChart, Smartphone, Zap, MousePointer2, Building2, Globe2, Rocket, Search } from 'lucide-react';

export const WhyNYC: React.FC = () => {
  return (
    <section id="why-nyc" className="bg-white py-12 md:py-20 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-navy mb-6 leading-[1.2] font-heading">
              WHY NEW YORK CITY BUSINESSES NEED PROFESSIONAL WEB DESIGN NOW MORE THAN EVER
            </h2>
            <p className="text-slate text-lg md:text-xl leading-relaxed">
              New York City is the most competitive business market in the United States. Your website isn't just a digital business card—it's your 24/7 sales team, your credibility validator, and often the first (and last) impression you make on potential customers.
            </p>
          </div>
        </FadeIn>

        {/* Digital Reality Subsection */}
        <div className="mb-24">
          <FadeIn delay={0.1}>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-navy mb-6 font-heading">The Digital Reality for NYC Businesses in 2026</h3>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
                87% of New York consumers research businesses online before making contact.
              </p>
              <p className="text-slate text-lg max-w-3xl mx-auto mb-8">
                If your website looks outdated, loads slowly, or doesn't work on mobile devices, you're losing customers to competitors before you even know they exist.
              </p>
              <p className="font-semibold text-navy">Here's what's happening in the NYC market right now:</p>
            </div>
          </FadeIn>

          {/* Stat Block 1: Consumer Behavior */}
          <div className="mb-20">
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <BarChart className="w-8 h-8 text-primary" />
                <h4 className="text-2xl font-bold text-navy font-heading">Consumer Behavior Has Shifted Permanently</h4>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { val: "92%", desc: "of NYC professionals use mobile devices as their primary browsing tool" },
                { val: "75%", desc: "of users judge a company's credibility based on website design alone" },
                { val: "53%", desc: "abandon websites that take longer than 3 seconds to load" },
                { val: "88%", desc: "won't return to a website after a bad user experience" }
              ].map((stat, i) => (
                <FadeIn key={i} delay={0.1 * i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-light text-center h-full">
                  <div className="text-5xl font-bold text-secondary mb-4 font-heading">{stat.val}</div>
                  <div className="text-slate leading-relaxed">{stat.desc}</div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Stat Block 2: NYC Competition */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-secondary" />
                <h4 className="text-2xl font-bold text-navy font-heading">NYC's Hyper-Competitive Digital Landscape</h4>
              </div>
              <p className="text-slate text-lg mb-8">
                With over 200,000 small and medium businesses in New York City competing for attention, your digital presence must be exceptional. Manhattan-based businesses face competition from:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Rocket, text: "Well-funded startups with premium digital experiences" },
                  { icon: Building2, text: "National chains with enterprise-level websites" },
                  { icon: Globe2, text: "International competitors targeting the same keywords" },
                  { icon: Building2, text: "Local competitors investing heavily in digital transformation" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-md border border-light hover:border-primary/20 transition-all">
                    <item.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-navy font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Stat Block 3: AI Search Revolution */}
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-accent" />
                <h4 className="text-2xl font-bold text-navy font-heading">The AI Search Revolution Changes Everything</h4>
              </div>
              <p className="text-slate text-lg mb-8">
                Traditional SEO isn't enough anymore. In 2026, 71% of consumers use AI tools like ChatGPT, Perplexity, and Google's AI Overview before making purchase decisions. Your website needs to be optimized for:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "AEO", subtitle: "(Answer Engine Optimization)", desc: "Get cited by AI assistants", color: "bg-primary" },
                  { title: "GEO", subtitle: "(Generative Engine Optimization)", desc: "Appear in AI-generated responses", color: "bg-navy" },
                  { title: "AIO", subtitle: "(AI Optimization)", desc: "Rank in language model outputs", color: "bg-secondary" },
                  { title: "Traditional SEO", subtitle: "", desc: "Maintain Google visibility", color: "bg-slate" },
                ].map((card, i) => (
                  <div key={i} className={`p-4 rounded-lg ${card.color} text-white shadow-md border-none`}>
                    <div className="font-bold text-lg mb-1 font-heading">{card.title}</div>
                    {card.subtitle && <div className="text-xs opacity-80 mb-2">{card.subtitle}</div>}
                    <div className="text-sm font-medium">{card.desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">
                The businesses that dominate NYC markets in 2026 aren't just SEO-optimized—they're AI-optimized.
              </h3>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};