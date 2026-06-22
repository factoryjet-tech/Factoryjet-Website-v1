import React from 'react';
import { FadeIn } from '../ui/FadeIn';

export const HiddenCostTable: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-[1000px] mx-auto">
        <FadeIn>
          <h3 className="text-3xl font-bold text-navy text-center mb-8 font-heading">The Hidden Cost of Cheap or DIY Websites</h3>
          
          <div className="text-center mb-8">
            <p className="text-slate mb-4">Many NYC business owners try to save money with:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["DIY website builders (Wix, Squarespace, GoDaddy)", "Freelancers on Fiverr or Upwork", "Offshore agencies with no US presence", "Template-based \"cheap\" agencies"].map((item, i) => (
                <span key={i} className="bg-slate-50 text-navy px-4 py-2 rounded-full text-sm border border-light font-medium">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xl font-semibold text-navy mb-8">Here's what that actually costs:</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-hidden rounded-lg border border-light shadow-md mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-slate-50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-light">
                <h4 className="text-xl font-bold text-navy mb-6 flex items-center gap-2 font-heading">
                  <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">✓</span>
                  What You Save Upfront
                </h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-slate font-medium">2,000-5,000 in development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-slate font-medium">2-3 weeks of waiting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-slate font-medium">Initial learning curve</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-slate font-medium">Monthly platform fees</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 md:p-8">
                <h4 className="text-xl font-bold text-navy mb-6 flex items-center gap-2 font-heading">
                  <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-sm">✕</span>
                  What You Lose Long-Term
                </h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-navy font-bold">$50,000-200,000 in lost revenue (poor conversion)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-navy font-bold">6-12 months of invisibility on Google</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-navy font-bold">Hundreds of hours managing technical issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-navy font-bold">Customer trust from security vulnerabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-white border-2 border-secondary/20 rounded-lg p-6 md:p-8 text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-navy text-lg md:text-xl font-medium">
              <span className="text-secondary font-bold text-2xl mr-2">!</span>
              The average NYC SMB loses <span className="font-bold text-secondary">$75,000-150,000 annually</span> due to poor website performance, according to a 2024 Small Business Digital Index study.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};