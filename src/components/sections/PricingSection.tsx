"use client";

import { CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "£799",
    days: "5",
    desc: "Perfect for sole traders",
    features: [
      "5-page custom website",
      "Mobile-first design",
      "SEO setup",
      "Contact form + Google Maps",
      "1× revision round",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "£1,499",
    days: "7",
    desc: "For established SMBs",
    features: [
      "Up to 10 pages",
      "Custom design + animations",
      "Full on-page SEO",
      "Blog/news section",
      "AI chatbot (basic)",
      "Google Analytics + Search Console",
      "2× revision rounds",
    ],
    highlighted: true,
  },
  {
    name: "E-Commerce",
    price: "£2,499",
    days: "7",
    desc: "For online retailers",
    features: [
      "Shopify or WooCommerce build",
      "Up to 50 products",
      "Payment gateway integration",
      "Delivery options setup",
      "SEO-optimized product pages",
      "AI chatbot for sales",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "From £4,999",
    days: "10-14",
    desc: "For complex projects",
    features: [
      "Complex multi-page builds",
      "Custom functionality",
      "AI agent integration",
      "CRM/ERP connection",
      "Dedicated project manager",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  const { openModal } = useContactModal();

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 md:px-8 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "Clash Display, sans-serif" }}>
          Transparent pricing for Sheffield businesses
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          No hidden costs. No lock-in contracts. Everything is built in.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                tier.highlighted
                  ? "bg-white border-2 border-[#F05A28] shadow-lg scale-105"
                  : "bg-white border border-[#E9ECEF] hover:border-[#F05A28]"
              }`}
            >
              {tier.highlighted && (
                <div className="inline-block bg-[#F05A28] text-white px-4 py-1 rounded-full text-xs font-bold mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-2">{tier.name}</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold text-[#0a0a0a]">{tier.price}</span>
                <span className="text-gray-500 ml-3">{tier.days} days</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">{tier.desc}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openModal('uk')}
                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-[#FF6B35] hover:bg-[#ff8255] text-white"
                    : "bg-[#F8F9FA] text-[#0a0a0a] hover:bg-gray-200"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
