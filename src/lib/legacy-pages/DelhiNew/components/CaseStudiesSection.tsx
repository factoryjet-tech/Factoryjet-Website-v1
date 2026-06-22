import React from 'react';

const CASE_STUDIES = [
  {
    category: "E-Commerce SaaS",
    title: "Commerceflo",
    description: "340% increase in demo requests and first page Google rankings for 25+ keywords after full platform redesign.",
    tags: ["Next.js", "Tailwind"]
  },
  {
    category: "Home Decor E-Commerce",
    title: "Belle Maison",
    description: "180% increase in mobile conversions and ₹1.8 Crore monthly revenue after migration to Shopify Plus.",
    tags: ["Shopify Plus", "Migration"]
  }
];

const CaseStudiesSection: React.FC = () => (
  <section id="portfolio" className="py-16 lg:py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
          Success Stories: Delhi NCR Businesses Transformed
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CASE_STUDIES.map((study, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
              Project Image Placeholder
            </div>
            <div className="p-6 lg:p-8">
              <div className="text-xs font-bold text-jet-orange uppercase mb-2">{study.category}</div>
              <h3 className="text-xl lg:text-2xl font-bold text-navy mb-3 lg:mb-4">{study.title}</h3>
              <p className="text-slate mb-6 text-sm">{study.description}</p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
