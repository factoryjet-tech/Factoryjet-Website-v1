'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Zap, Globe, ShoppingBag } from 'lucide-react';

const Portfolio: React.FC = () => {
  const cases = [
    {
      category: "Branding & Contracting",
      client: "Impulse Branding Solutions",
      founder: "Kiran Mahadik",
      metric: "₹3 Cr Revenue (6 Months)",
      desc: "Migrated to modern stack (WordPress + Breakdance) in just 2 weeks. 15+ pages fully optimized for GEO/AIO. Resulted in 125% organic traffic increase and Google Gemini citations.",
      image: "/case-impulse-branding.webp",
      color: "bg-blue-600",
      icon: TrendingUp,
      width: 662,
      height: 372,
      slug: "impulse-branding"
    },
    {
      category: "MEP & BIM Consulting",
      client: "Formative Concepts",
      founder: "Director: Vishal B.",
      metric: "₹90 Lakh Revenue (4 Months)",
      desc: "Brand new 20+ page site. Went from ZERO to 5000 global visitors. Optimized for AIO/GEO to get cited by ChatGPT. Generated 30+ high-value leads in first 4 months.",
      image: "/case-formative-concepts.webp",
      color: "bg-indigo-600",
      icon: Globe,
      width: 662,
      height: 372,
      slug: "formative-concepts"
    },
    {
      category: "DTC + B2B E-Commerce",
      client: "Belle Maison",
      founder: "Ricky B.",
      metric: "₹1.5 Cr Sales (120 Days)",
      desc: "Launched wholesale & retail store with 800+ products. AI-enhanced imagery and powerful product SEO. Integrated abandoned cart recovery and marketing automation.",
      image: "/case-belle-maison.webp",
      color: "bg-orange-500",
      icon: ShoppingBag,
      width: 662,
      height: 372,
      slug: "belle-maison"
    },
    {
      category: "AI-Native SaaS",
      client: "Commerceflo.ai",
      founder: "Rajapandian Alagarsamy",
      metric: "Global Traffic & AI Citations",
      desc: "30+ page high-performance website for an AI startup. Integrated HubSpot CRM for lead gen. Optimized for AEO/AIO to drive global traffic and convert visitors into leads.",
      image: "/case-commerceflo.webp",
      color: "bg-emerald-600",
      icon: Zap,
      width: 662,
      height: 372,
      slug: "commerceflo"
    }
  ];

  const getOptimizedImageUrl = (baseUrl: string, width: number) => {
    return `${baseUrl}?auto=format&fit=crop&w=${width}&q=75`;
  };

  const generateSrcSet = (baseUrl: string) => {
    const widths = [400, 600, 800];
    return widths.map(w => `${baseUrl}?auto=format&fit=crop&w=${w}&q=75 ${w}w`).join(', ');
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
            <div className="max-w-3xl">
                <h2 className="text-jet-blue font-bold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">Our Work</h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-jet-navy mb-3 md:mb-4">
                    Real results, real revenue.
                </h3>
                <p className="text-jet-slate text-sm md:text-lg">
                    See how we've helped businesses like yours transform their digital presence and generate crores in new value.
                </p>
            </div>
            <Link href="/case" className="flex items-center gap-2 font-bold text-jet-navy hover:text-jet-blue transition-colors group whitespace-nowrap text-sm md:text-base">
                View All Case Studies <ArrowUpRight size={16} className="md:w-5 md:h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {cases.map((project, idx) => (
                <Link key={idx} href={`/case/${project.slug}`} className="group relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-900 border border-gray-100 flex flex-col h-full">
                    {/* Image Background */}
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                        <img
                            src={getOptimizedImageUrl(project.image, project.width)}
                            srcSet={generateSrcSet(project.image)}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            alt={`${project.client} - ${project.category} case study`}
                            width={project.width}
                            height={project.height}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                        <div className="absolute top-3 left-3 md:top-4 md:left-4">
                             <span className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold text-white shadow-lg ${project.color} flex items-center gap-1 md:gap-1.5`}>
                                <project.icon size={10} className="md:w-3 md:h-3" /> {project.category}
                             </span>
                        </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative p-4 md:p-6 lg:p-8 flex-grow flex flex-col -mt-10 md:-mt-12">
                        <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-xl border border-gray-100 flex-grow">
                             <div className="flex justify-between items-start mb-2">
                                 <div>
                                    <h4 className="text-base md:text-xl font-bold text-jet-navy">{project.client}</h4>
                                    <p className="text-[10px] md:text-xs text-gray-500 font-medium mb-2 md:mb-3">{project.founder && `Founder: ${project.founder}`}</p>
                                 </div>
                             </div>

                             <div className="mb-3 md:mb-4 bg-emerald-50 border border-emerald-100 p-2 md:p-3 rounded-lg">
                                 <span className="text-emerald-800 font-bold text-sm md:text-lg flex items-center gap-1.5 md:gap-2">
                                    <TrendingUp size={16} className="md:w-5 md:h-5" /> {project.metric}
                                 </span>
                             </div>

                             <p className="text-jet-slate text-xs md:text-sm leading-relaxed">
                                 {project.desc}
                             </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
