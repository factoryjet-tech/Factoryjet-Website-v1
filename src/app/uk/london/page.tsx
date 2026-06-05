import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Web Design & Digital Agency in London | FactoryJet',
  description:
    'FactoryJet serves London businesses with web design, AI websites, ecommerce & SEO. AI-native agency, at a fixed, published price. Free consultation.',
  alternates: {
    canonical: 'https://factoryjet.com/uk/london',
  },
  openGraph: {
    title: 'Web Design & Digital Agency in London | FactoryJet',
    description:
      'FactoryJet serves London businesses with web design, AI websites, ecommerce & SEO. AI-native agency, at a fixed, published price. Free consultation.',
    url: 'https://factoryjet.com/uk/london',
    type: 'website',
    images: [
      {
        url: '/images/uk/hero-uk.webp',
        width: 1200,
        height: 630,
        alt: 'Web Design London — FactoryJet',
      },
    ],
  },
};

export default function LondonPage() {
  return (
    <main className="bg-white">
      {/* JSON-LD: WebPage + Speakable */}
      <Script
        id="ld-london-webpage-speakable"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://factoryjet.com/uk/london#webpage",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2:first-of-type"],
            },
            url: "https://factoryjet.com/uk/london",
          }),
        }}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Web Design &amp; Digital Agency in London
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl">
          AI-native web design, SEO, and digital marketing for London SMBs.
          Pricing is fixed and published upfront.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="/uk/london/web-design"
            className="bg-[#F05A28] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d94e22] transition-colors"
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

      {/* Wave 5 — Internal city cross-links */}
      <section className="py-10 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-mono text-[#F05A28] uppercase tracking-widest mb-4">
            Other UK Cities
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Birmingham', href: '/uk/birmingham' },
              { label: 'Sheffield', href: '/uk/sheffield' },
              { label: 'Manchester', href: '/uk/manchester' },
              { label: 'Leeds', href: '/uk/leeds' },
              { label: 'Liverpool', href: '/uk/liverpool' },
            ].map(({ label, href }) => (
              <a key={href} href={href}
                className="px-5 py-2 rounded-full border border-[#F05A28] text-[#F05A28] text-sm font-medium hover:bg-[#F05A28] hover:text-white transition-colors">
                {label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
