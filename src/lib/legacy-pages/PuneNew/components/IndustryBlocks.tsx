import React from 'react';

export const Industries = () => {
  const industries = [
    { name: "IT & Software", loc: "Hinjewadi", count: "150+" },
    { name: "Startups", loc: "Baner/Kharadi", count: "100+" },
    { name: "E-Commerce", loc: "Pune City", count: "120+" },
    { name: "Manufacturing", loc: "Chakan/PCMC", count: "80+" },
    { name: "Education", loc: "Kothrud", count: "60+" },
    { name: "Healthcare", loc: "Pune City", count: "45+" },
    { name: "Real Estate", loc: "Wakad/Baner", count: "50+" },
    { name: "Professional", loc: "Deccan/Camp", count: "70+" }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 md:mb-12 text-jet-navy">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="p-4 md:p-6 border border-jet-light rounded-xl hover:shadow-lg transition-all group bg-white">
              <div className="text-jet-blue font-bold text-base md:text-lg mb-1 group-hover:text-jet-orange transition-colors font-heading">{ind.name}</div>
              <div className="text-[10px] md:text-xs text-jet-gray mb-3">{ind.loc}</div>
              <div className="text-[10px] md:text-xs font-bold bg-jet-light text-jet-slate inline-block px-2 py-1 rounded">{ind.count} Clients</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CaseStudies = () => {
  const caseStudies = [
    {
      name: "Commerceflo",
      bg: "bg-jet-navy",
      tags: [
        { label: "SaaS", color: "bg-blue-50 text-jet-blue" },
        { label: "AI Platform", color: "bg-green-50 text-green-700" }
      ],
      title: "Commerceflo - AI E-Commerce Platform",
      description: "Developed a high-performance marketing website and merchant onboarding portal.",
      metrics: [
        { value: "500+", label: "Merchant Inquiries" },
        { value: "3x", label: "Conversion Rate" }
      ]
    },
    {
      name: "Impulse Branding",
      bg: "bg-jet-blue",
      tags: [
        { label: "Agency", color: "bg-blue-50 text-jet-blue" },
        { label: "B2B", color: "bg-green-50 text-green-700" }
      ],
      title: "Impulse Branding Solutions",
      description: "Complete digital transformation for a Pune-based branding agency.",
      metrics: [
        { value: "400%", label: "Traffic Increase" },
        { value: "250%", label: "More Leads" }
      ]
    },
    {
      name: "Formative Concepts",
      bg: "bg-purple-800",
      tags: [
        { label: "EdTech", color: "bg-blue-50 text-jet-blue" }
      ],
      title: "Formative Concepts - EdTech",
      description: "Built comprehensive course catalog and online inquiry system.",
      metrics: [
        { value: "300%", label: "Course Inquiries" },
        { value: "60%", label: "Faster Admissions" }
      ]
    },
    {
      name: "Belle Maison",
      bg: "bg-pink-600",
      tags: [
        { label: "E-Commerce", color: "bg-blue-50 text-jet-blue" }
      ],
      title: "Belle Maison - Home Lifestyle",
      description: "Dual store for B2B wholesale and DTC retail with unified inventory.",
      metrics: [
        { value: "₹1.5 Cr", label: "Sales in 120 Days" },
        { value: "800+", label: "Products Listed" }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-jet-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-jet-navy text-center mb-4">Pune Success Stories</h2>
        <p className="text-center text-jet-gray mb-8 md:mb-12 text-sm md:text-base">Real results from real businesses.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((caseStudy, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-jet-light">
              <div className={`${caseStudy.bg} h-40 md:h-48 flex items-center justify-center text-white text-xl md:text-2xl font-bold font-heading`}>
                {caseStudy.name}
              </div>
              <div className="p-6 md:p-8">
                <div className="flex gap-2 mb-4">
                  {caseStudy.tags.map((tag, idx) => (
                    <span key={idx} className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded ${tag.color}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 font-heading text-jet-navy">{caseStudy.title}</h3>
                <p className="text-jet-gray text-xs md:text-sm mb-4">{caseStudy.description}</p>
                <div className="grid grid-cols-2 gap-4 border-t border-jet-light pt-4">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-lg md:text-xl font-bold text-jet-orange font-heading">{metric.value}</div>
                      <div className="text-[10px] md:text-xs text-jet-gray">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
