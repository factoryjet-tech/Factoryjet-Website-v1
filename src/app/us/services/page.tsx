import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design & Development Services USA | FactoryJet',
  description:
    'FactoryJet builds custom websites, Shopify stores, and web applications for US small businesses. 7-day delivery, 60–70% less than US agencies. Fixed price, full code ownership.',
  alternates: { canonical: 'https://factoryjet.com/us/services' },
  openGraph: {
    title: 'Web Design & Development Services USA | FactoryJet',
    description:
      '500+ websites built for US businesses. Custom web design, Shopify development, and web apps — delivered in 7 days at 60–70% less than a US agency.',
    url: 'https://factoryjet.com/us/services',
    siteName: 'FactoryJet',
    type: 'website',
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Service card data
───────────────────────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    image: '/images/services/card-web-design.webp',
    imageAlt: 'Custom website homepage design displayed on a MacBook Pro',
    eyebrow: 'MOST POPULAR',
    title: 'Custom Web Design',
    description:
      'Figma-first design built in Next.js or WordPress. Lighthouse 100 guaranteed. Live in 7 days.',
    href: '/us/services/web-design',
    cta: 'See Web Design',
    featured: true,
  },
  {
    image: '/images/services/card-shopify.webp',
    imageAlt: 'Shopify storefront on a MacBook with a skincare product beside it',
    eyebrow: 'E-COMMERCE',
    title: 'Shopify Development',
    description:
      'Custom Liquid themes or headless Shopify storefronts. Conversion-optimized product pages and checkout.',
    href: '/us/services/shopify-development',
    cta: 'See Shopify Services',
    featured: false,
  },
  {
    image: '/images/services/card-ecommerce.webp',
    imageAlt: 'Custom e-commerce checkout flow on dual screens',
    eyebrow: 'E-COMMERCE',
    title: 'Custom E-commerce',
    description:
      'Full-stack e-commerce for complex catalogs, B2B portals, and DTC brands that need more than Shopify.',
    href: '/us/services/ecommerce-development',
    cta: 'See E-commerce Services',
    featured: false,
  },
  {
    image: '/images/services/card-webapp.webp',
    imageAlt: 'SaaS analytics dashboard on an ultrawide monitor',
    eyebrow: 'WEB APPS',
    title: 'Web Application Development',
    description:
      'React and Next.js applications: dashboards, client portals, SaaS MVPs, and internal tools.',
    href: '/us/services/web-application-development',
    cta: 'See Web App Services',
    featured: false,
  },
  {
    image: '/images/services/card-redesign.webp',
    imageAlt: 'Before and after website redesign shown side by side in a browser',
    eyebrow: 'REDESIGN',
    title: 'Website Redesign',
    description:
      'Modernize your existing site without losing SEO equity. Same brand, sharper design, faster performance.',
    href: '/us/services/website-redesign',
    cta: 'See Redesign Services',
    featured: false,
  },
  {
    image: '/images/services/card-wordpress.webp',
    imageAlt: 'WordPress Gutenberg editor on a MacBook with a clean editorial site in the background',
    eyebrow: 'CMS',
    title: 'WordPress Development',
    description:
      'Custom block themes, headless WordPress, and CMS setups your team can actually manage.',
    href: '/us/services/wordpress-development',
    cta: 'See WordPress Services',
    featured: false,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Arrow icon
───────────────────────────────────────────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M2 5h6M5 2l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function USServicesHubPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-fj-cream">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ minHeight: 'clamp(360px, 45vw, 520px)' }}>
          {/* Background image */}
          <Image
            src="/images/services/services-hub-hero.webp"
            alt="Designer's desk with Figma mockups, keyboard, and wireframes — FactoryJet web design studio"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(6,13,31,0.82) 0%, rgba(15,15,18,0.65) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative mx-auto max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
            <p
              className="font-fj-mono font-bold uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}
            >
              SERVICES · USA
            </p>
            <h1
              className="fj-display mt-4 font-semibold"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                lineHeight: 1.07,
                letterSpacing: '-0.03em',
                color: '#F5F5F2',
                maxWidth: '18ch',
              }}
            >
              Web Design & Development for US Businesses
            </h1>
            <p
              className="mt-5 font-fj-body"
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: 'rgba(245,245,242,0.70)',
                maxWidth: '540px',
              }}
            >
              6 services. Fixed price, confirmed upfront. Delivered in 7 days.
              60–70% less than a US agency — same Figma design, same Next.js engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-fj-body text-base font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: '#F05A28',
                  boxShadow: '0 0 0 1px rgba(240,90,40,0.50), 0 8px 32px rgba(240,90,40,0.35)',
                }}
              >
                Book a Free Strategy Call
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <ArrowIcon />
                </span>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-fj-body text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                Browse Services
              </Link>
            </div>

            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['500+ websites delivered', '7-day delivery guarantee', 'From $1,999 fixed price', 'Full code ownership'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full font-fj-mono font-medium"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    color: 'rgba(245,245,242,0.55)',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '5px 12px',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST STATS ──────────────────────────────────────────────────── */}
        <BigThreeTrustBlock eyebrow="BY THE NUMBERS" />

        {/* ── SERVICE CARDS ────────────────────────────────────────────────── */}
        <section id="services" className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">

            {/* Section header */}
            <div className="mb-12">
              <p
                className="font-fj-mono font-bold uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}
              >
                WHAT WE BUILD
              </p>
              <h2
                className="fj-display mt-3 font-semibold text-fj-ink"
                style={{
                  fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  maxWidth: '22ch',
                }}
              >
                Six Services for US Small Businesses
              </h2>
              <p
                className="mt-4 font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1.0625rem', lineHeight: 1.65, maxWidth: '560px' }}
              >
                Every service includes Figma-first design, clean code delivery, and a fixed price
                confirmed before we start. No hourly billing. No scope surprises.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-lg"
                  style={{
                    border: '1px solid rgba(15,15,18,0.07)',
                    boxShadow: '0 2px 12px -2px rgba(15,15,18,0.08)',
                  }}
                >
                  {/* Card image */}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '8 / 5' }}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Orange bottom-border accent on image */}
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px]"
                      style={{ background: '#F05A28' }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col p-6">
                    <p
                      className="font-fj-mono font-bold uppercase"
                      style={{ fontSize: '9px', letterSpacing: '0.13em', color: '#F05A28' }}
                    >
                      {service.eyebrow}
                      {service.featured && (
                        <span
                          className="ml-2 rounded-full px-2 py-0.5"
                          style={{
                            background: 'rgba(240,90,40,0.10)',
                            border: '1px solid rgba(240,90,40,0.25)',
                            fontSize: '8px',
                          }}
                        >
                          MOST POPULAR
                        </span>
                      )}
                    </p>
                    <h3
                      className="fj-display mt-2 font-semibold text-fj-ink"
                      style={{ fontSize: '1.1875rem', lineHeight: 1.2, letterSpacing: '-0.02em' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="mt-2 font-fj-body text-fj-neutral-600"
                      style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                    >
                      {service.description}
                    </p>
                    <div className="mt-auto pt-5">
                      <span
                        className="inline-flex items-center gap-1.5 font-fj-body font-semibold transition-colors group-hover:opacity-80"
                        style={{ fontSize: '0.875rem', color: '#F05A28' }}
                      >
                        {service.cta}
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full" style={{ background: 'rgba(240,90,40,0.12)' }}>
                          <ArrowIcon />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom nudge */}
            <div
              className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl px-8 py-6 sm:flex-row"
              style={{
                background: 'rgba(240,90,40,0.04)',
                border: '1px solid rgba(240,90,40,0.16)',
              }}
            >
              <div>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}
                >
                  Not sure which service you need?
                </p>
                <p className="mt-1 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.875rem' }}>
                  Book a free 30-minute discovery call. We&apos;ll recommend the right approach for your business and budget.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 font-fj-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: '#F05A28', boxShadow: '0 4px 18px rgba(240,90,40,0.28)' }}
              >
                Book Free Call
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What US founders say after we build their site"
        />

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Get a Fixed Price in 24 Hours"
          sub="Tell us what you need. We'll review your current site, recommend the right service, and send a fixed-price proposal within 24 hours. No hourly billing. No surprises."
          primaryCta={{ label: 'Book a Free Strategy Call', href: '/contact' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price confirmed upfront. Full code ownership. 7-day delivery guarantee."
        />

      </main>

      <SiteFooter />
    </>
  );
}
