import type { Metadata } from 'next';
import ManchesterPage from './ManchesterPage';
import AuthorCard from '@/components/v2/AuthorCard';
import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import CityLinksUK from '@/components/v2/CityLinksUK';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import Footer from '@/app/uk/sections/Footer';

const CANONICAL = 'https://factoryjet.com/uk/manchester';
const PAGE_MODIFIED = '2026-08-24';

export const metadata: Metadata = {
  title: 'Web Design Agency Manchester | Fast Next.js Sites | FactoryJet',
  description:
    'Manchester web design agency. Custom Next.js websites, sub-second load speeds, mobile conversion flows, and 100% full IP code ownership for Manchester businesses.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Web Design Agency Manchester | Fast Next.js Sites | FactoryJet',
    description:
      'Custom Next.js web design, e-commerce, and AI search optimization in Manchester. Sub-second performance and 100% code ownership.',
    url: CANONICAL,
    images: [{ url: '/images/uk/manchester/hero-manchester.webp' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet Technologies',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${CANONICAL}#business`,
      name: 'FactoryJet Technologies: Manchester',
      url: CANONICAL,
      description: 'Web design, e-commerce, AI agents and AI SEO agency serving Manchester and the North West.',
      areaServed: {
        '@type': 'City',
        name: 'Manchester',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.4808,
        longitude: -2.2426,
      },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Chief Technical Architect',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '64',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Web Design Manchester',
      serviceType: 'Web design',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Manchester' },
      url: CANONICAL,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Chief Technical Architect',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '64',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Web Design Agency Manchester | Fast Next.js Sites | FactoryJet',
      dateModified: PAGE_MODIFIED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Chief Technical Architect',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        id="ld-uk-manchester"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="uk-manchester-root">
        <ManchesterPage />

        {/* ── COUNTER-NARRATIVE & VENDOR EVALUATION MATRIX ── */}
        <section className="py-16 bg-[#111111] border-t border-slate-800 text-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5622]">The Direct Comparison</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                The Typical UK Agency Frustration vs FactoryJet Engineering Approach
              </h2>
              <p className="text-slate-300 mt-4 text-sm leading-relaxed">
                Traditional Manchester agencies sell bloated WordPress themes and junior account handlers. FactoryJet delivers deterministic Next.js builds, sub-second performance, and 100% full IP code ownership.
              </p>
            </div>

            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse bg-[#1A1A1A] rounded-xl border border-slate-800 text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-[#222222]">
                    <th className="p-4 font-bold text-white">Evaluation Criteria</th>
                    <th className="p-4 font-bold text-slate-400">Traditional Manchester Agencies</th>
                    <th className="p-4 font-bold text-[#FF5622]">FactoryJet Engineering</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800/60">
                    <td className="p-4 font-semibold text-white">Core Web Vitals SLA</td>
                    <td className="p-4 text-slate-400">Unverified; average 3.8s LCP</td>
                    <td className="p-4 text-emerald-400 font-semibold">Guaranteed &lt; 1.2s LCP (95+ score)</td>
                  </tr>
                  <tr className="border-b border-slate-800/60">
                    <td className="p-4 font-semibold text-white">Delivery Speed</td>
                    <td className="p-4 text-slate-400">8 to 16 weeks typical timeline</td>
                    <td className="p-4 text-emerald-400 font-semibold">7-Day Express Delivery SLA</td>
                  </tr>
                  <tr className="border-b border-slate-800/60">
                    <td className="p-4 font-semibold text-white">Pricing Model</td>
                    <td className="p-4 text-slate-400">Day rates + ongoing retainers</td>
                    <td className="p-4 text-emerald-400 font-semibold">Fixed-price milestone model</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Code &amp; IP Ownership</td>
                    <td className="p-4 text-slate-400">Proprietary CMS lock-in or agency hosting</td>
                    <td className="p-4 text-emerald-400 font-semibold">100% full codebase pushed to your GitHub</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Standard Deliverables Checklist */}
            <div className="bg-[#1A1A1A] border border-slate-800 rounded-xl p-6">
              <h3 className="text-base font-bold text-white mb-3">Standard Engineering Deliverables on Every Manchester Build:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-300">
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Server-rendered Next.js 15 App Router</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> LocalBusiness Schema.org JSON-LD graph</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> 95+ Core Web Vitals speed verification</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Complete GitHub repository transfer</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* ── REGIONAL BENCHMARK & ARCHITECTURE BLUEPRINT ── */}
        <section className="sec-lg" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="wrap" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 16px' }}>
            <RegionalBenchmarkCard city="Manchester" vertical="web-design" />
          </div>
        </section>

        <div id="manchester-architecture-blueprint">
          <WebDesignArchitectureBlueprint />
        </div>

        {/* ── INTERACTIVE SPEED & PIPELINE VALUE CALCULATOR ── */}
        <WebDesignValueCalculator city="Manchester" region="uk" />

        {/* ── UK REGIONAL HORIZONTAL CROSS-LINKS ── */}
        <CityLinksUK currentCity="manchester" />

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="sec-lg" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="wrap" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 16px' }}>
            <AuthorCard />
          </div>
        </section>

        {/* ── FINAL MODAL CTA STRIP ── */}
        <section className="py-12 bg-[#0E0E0E] border-t border-slate-800 text-center">
          <div className="max-w-xl mx-auto px-4">
            <h3 className="text-xl font-bold text-white mb-3">Ready to transform your Manchester digital presence?</h3>
            <p className="text-sm text-slate-400 mb-6">Receive a custom architectural scope and fixed timeline from our senior team.</p>
            <ModalCTAButton label="Get my free quote" region="uk" modalVariant="default" btnVariant="primary-light" />
          </div>
        </section>
      </div>
    </>
  );
}
