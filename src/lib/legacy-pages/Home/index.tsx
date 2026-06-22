'use client';

import { Suspense } from "react";
import dynamic from "next/dynamic";

// Critical above-the-fold components - load immediately
import Hero from "./components/Hero";

// Dynamically import Header with SSR for SEO
const Header = dynamic(() => import("./../../../components/Header"), {
  ssr: true,
  loading: () => <div className="h-16 md:h-20" />,
});

// Lazy load all below-the-fold components with dynamic imports for better code splitting
const About = dynamic(() => import("./components/About"), { ssr: false });
const Services = dynamic(() => import("./components/Services"), { ssr: false });
const WhyUs = dynamic(() => import("./components/WhyUs"), { ssr: false });
const Process = dynamic(() => import("./components/Process"), { ssr: false });
const Portfolio = dynamic(() => import("./components/Portfolio"), { ssr: false });
const Pricing = dynamic(() => import("./components/Pricing"), { ssr: false });
const Testimonials = dynamic(() => import("./components/Testimonials"), { ssr: false });
const FAQ = dynamic(() => import("./components/FAQ"), { ssr: false });
const CTA = dynamic(() => import("./components/CTA"), { ssr: false });
const Footer = dynamic(() => import("./../../../components/Footer"), { ssr: false });

// Minimal loading placeholder
const SectionLoader = () => <div className="min-h-[100px]" aria-hidden="true" />;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="transparent" />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
