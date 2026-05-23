import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design & Digital Agency in London | FactoryJet',
  description:
    'FactoryJet serves London businesses with web design, AI websites, ecommerce & SEO. AI-native agency, 50–60% below local rates. Free consultation.',
  alternates: {
    canonical: 'https://factoryjet.com/uk/london',
  },
};

export default function LondonPage() {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Web Design &amp; Digital Agency in London
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl">
          AI-native web design, SEO, and digital marketing for London SMBs.
          50–60% below local agency rates.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="/uk/london/web-design"
            className="bg-[#F05A28] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Web Design London
          </a>
          <a
            href="/contact"
            className="border border-[#F05A28] text-[#F05A28] px-6 py-3 rounded-lg font-semibold hover:bg-[#F05A28] hover:text-white transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </main>
  );
}
