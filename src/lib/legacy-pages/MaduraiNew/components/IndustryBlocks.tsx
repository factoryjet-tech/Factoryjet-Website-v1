import React from 'react';
import { TrendingUp } from 'lucide-react';
import { INDUSTRIES, CASE_STUDIES } from '../data.constants';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12 px-4">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-[#64748B] max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

export const Industries = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="Industries We Serve" subtitle="From traditional textile businesses to modern IT companies" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {INDUSTRIES.map((ind, i) => (
          <div key={i} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0052CC] mb-4 group-hover:bg-[#0052CC] group-hover:text-white transition-colors">
              <ind.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">{ind.title}</h3>
            <p className="text-sm text-[#64748B]">{ind.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const CaseStudies = () => (
  <section id="case-studies" className="py-20 bg-[#0F172A] text-white">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="Success Stories" subtitle="Real businesses, real results." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CASE_STUDIES.map((study, i) => (
          <div key={i} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">{study.name}</h3>
                <p className="text-sm text-gray-400">{study.industry} | {study.location}</p>
              </div>
              <div className="bg-gray-700 p-2 rounded-lg">
                <TrendingUp className="text-[#10B981] w-6 h-6" />
              </div>
            </div>

            <div className="mb-6 space-y-4">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase">Challenge</span>
                <p className="text-sm text-gray-300 mt-1">{study.challenge}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase">Solution</span>
                <p className="text-sm text-gray-300 mt-1">{study.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-700 pt-4">
              {study.results.map((res, idx) => (
                <div key={idx}>
                  <div className="text-lg font-bold text-[#FF6B35]">{res.result}</div>
                  <div className="text-xs text-gray-500">{res.metric}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
