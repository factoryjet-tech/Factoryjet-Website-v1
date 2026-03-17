// app/services/ai-agent-development/page.tsx
// FactoryJet — AI Agent Design & Development Services
// Google Ads Landing Page — US Market — No Pricing (Drive to Consultation)
// Next.js 15 + Tailwind CSS 4 + TypeScript

import type { Metadata } from "next";
import { HeroSection } from "./components/HeroSection";
import { TrustBar } from "./components/TrustBar";
import { PainValidation } from "./components/PainValidation";
import { WhyFactoryJet } from "./components/WhyFactoryJet";
import { ServiceCards } from "./components/ServiceCards";
import { ProcessSection } from "./components/ProcessSection";
import { IndustryUseCases } from "./components/IndustryUseCases";
import { TechnologyStack } from "./components/TechnologyStack";
import { CaseStudies } from "./components/CaseStudies";
import { ROIMetrics } from "./components/ROIMetrics";
import { TrustCompliance } from "./components/TrustCompliance";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { SchemaMarkup } from "./components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "AI Agent Development Services | Custom AI Agents Deployed in Weeks — FactoryJet",
  description:
    "FactoryJet builds custom AI agents for customer support, sales, voice, and workflow automation. Enterprise-grade quality at startup-friendly pricing. Book a free strategy call.",
  keywords: [
    "AI agent development services",
    "AI agent development company",
    "custom AI agent development",
    "agentic AI development",
    "AI agent consulting",
    "multi-agent orchestration",
    "AI agent for business",
    "LangChain AI agent development",
    "voice AI agent development",
    "AI customer support agent",
  ],
  openGraph: {
    title:
      "AI Agent Development Services — From Concept to Production in Weeks",
    description:
      "FactoryJet builds custom AI agents for customer support, sales, voice, and workflow automation. Enterprise-grade quality at startup-friendly pricing.",
    type: "website",
    url: "https://www.factoryjet.com/services/ai-agent-development",
    siteName: "FactoryJet",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Agent Development Services — From Concept to Production in Weeks",
    description:
      "Custom AI agents for customer support, sales, voice, and workflow automation. Enterprise-grade quality, deployed in weeks.",
  },
  alternates: {
    canonical: "https://www.factoryjet.com/services/ai-agent-development",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function AIAgentDevelopmentPage() {
  return (
    <>
      <SchemaMarkup />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TrustBar />
        <PainValidation />
        <WhyFactoryJet />
        <ServiceCards />
        <ProcessSection />
        <IndustryUseCases />
        <TechnologyStack />
        <CaseStudies />
        <ROIMetrics />
        <TrustCompliance />
        <FAQSection />
        <FinalCTA />
      </main>
    </>
  );
}
