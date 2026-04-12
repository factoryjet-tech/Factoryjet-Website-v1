"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, CheckCircle2, Menu, X, ArrowRight } from "lucide-react";

export default function SheffieldPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      headlineRef.current.style.opacity = "1";
    }
  }, []);

  const NAV_LINKS = [
    { label: "Our Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const TRUST_CHIPS = [
    "7-day delivery guarantee",
    "No lock-in contracts",
    "AI-powered & SEO-ready",
    "Free 30-min consultation",
    "Sheffield businesses served",
  ];

  const MARQUEE_ITEMS = [
    "WEB DESIGN SHEFFIELD",
    "BUILT IN 7 DAYS",
    "AI-POWERED WEBSITES",
    "FROM £799",
    "NO LOCK-IN CONTRACTS",
  ];

  const WHY_BENEFITS = [
    {
      num: "01",
      title: "Speed That Competes",
      desc: "AI-assisted build process cuts time by 80% — enterprise quality, 7-day delivery. Most Sheffield agencies take 6–12 weeks.",
    },
    {
      num: "02",
      title: "Built for Sheffield Search",
      desc: "Sheffield-specific SEO from day one — local schema, Google Business Profile integration, and keyword-optimised content.",
    },
    {
      num: "03",
      title: "Truly Affordable",
      desc: "Starting at £799 for a professional 5-page website. Everything included. No surprises, no add-ons, no lock-in contracts.",
    },
  ];

  const PROCESS_STEPS = [
    { day: "Day 1", label: "1", title: "Discovery Call", desc: "We learn your business, Sheffield customers, and goals. We take notes. You relax." },
    { day: "Day 2", label: "2", title: "Strategy & Structure", desc: "Site architecture, competitor research, keyword strategy, and first-draft copy." },
    { day: "Days 3–4", label: "3–4", title: "Design", desc: "Bespoke homepage and inner pages. Design preview link. Feedback in 24 hours." },
    { day: "Days 5–6", label: "5–6", title: "Development & SEO", desc: "Built mobile-first with Sheffield local schema, Analytics, and Search Console." },
    { day: "Day 7", label: "7", title: "Launch", desc: "5-device testing, go-live, handover docs and 30-minute training session." },
  ];

  const TESTIMONIALS = [
    {
      quote: "FactoryJet delivered our new website in exactly 6 days. It looks better than anything I've seen from Sheffield agencies charging three times the price. The AI chatbot alone has brought in 12 new enquiries in the first month.",
      name: "James Whitfield",
      title: "Owner",
      company: "Whitfield Professional Services, Sheffield",
    },
    {
      quote: "I was sceptical about the 7-day promise but they delivered on day 5. Our Ecclesall Road shop now ranks on page one for sheffield independent gifts and footfall has genuinely increased.",
      name: "Sarah Holbrook",
      title: "Founder",
      company: "Holbrook Gifts, Ecclesall Road",
    },
    {
      quote: "As a plumber in Sheffield I never thought I needed a proper website. FactoryJet proved me wrong. I now get 80% of my new jobs through the site. Google ranking is incredible.",
      name: "Mark Patterson",
      title: "Director",
      company: "Patterson Plumbing Services, Sheffield",
    },
  ];

  const FAQ_ITEMS = [
    {
      q: "How do you deliver a website in 7 days?",
      a: "We've built a production system: our AI handles first-draft copywriting and layout. Our designers refine and customise. Your input is structured into a 30-minute brief call on Day 1. By Day 3 you see a working prototype. Days 4–6 are for your revisions and final polish. Day 7 is go-live.",
    },
    {
      q: "Is this a template or a custom website?",
      a: "Every FactoryJet site is custom-built from scratch. We don't use WordPress themes or Squarespace templates. Your site is coded in Next.js, which means it loads faster, ranks better, and looks unique to your business.",
    },
    {
      q: "Do I need any technical knowledge?",
      a: "None at all. We handle everything: domain setup, hosting, SSL, Google Analytics, Search Console, and even write the copy if you need it. After launch we give you a simple guide to update text and images yourself.",
    },
    {
      q: "Will my website rank in Sheffield searches?",
      a: "We build Sheffield-specific SEO into every page from the start: local schema markup, Google Business Profile integration, Sheffield landmarks and area mentions, and structured data that tells Google exactly who you serve and where.",
    },
    {
      q: "What's the difference between Business and E-Commerce?",
      a: "Business is for service companies and trades who need to generate enquiries and leads. E-Commerce adds a full online shop (Shopify or WooCommerce), product pages, payment gateway, and delivery options for Sheffield retailers who want to sell online.",
    },
    {
      q: "Are there any contracts or monthly fees?",
      a: "No mandatory contracts. You pay once for the build. Hosting typically costs £15–25/month. We offer optional monthly maintenance retainers, but they're never required.",
    },
    {
      q: "Can you add an AI chatbot to my website?",
      a: "Yes. Our Business, E-Commerce, and Enterprise plans include an AI chatbot that qualifies leads and handles FAQs 24/7. Sheffield service businesses typically see 2–3× more after-hours enquiries within the first 30 days.",
    },
    {
      q: "What happens if I need changes after launch?",
      a: "Every plan includes 30 days of post-launch support at no extra cost. After that, our retainer clients get priority changes. One-off updates are billed at a flat hourly rate with no hidden markups.",
    },
  ];

  const PRICING_TIERS = [
    {
      name: "Starter",
      price: "£799",
      days: "5",
      desc: "Perfect for sole traders",
      features: ["5-page custom website", "Mobile-first design", "SEO setup", "Contact form + Google Maps", "1× revision round"],
      highlighted: false,
    },
    {
      name: "Business",
      price: "£1,499",
      days: "7",
      desc: "For established SMBs",
      features: ["Up to 10 pages", "Custom design + animations", "Full on-page SEO", "Blog/news section", "AI chatbot (basic)", "Google Analytics", "2× revision rounds"],
      highlighted: true,
    },
    {
      name: "E-Commerce",
      price: "£2,499",
      days: "7",
      desc: "For online retailers",
      features: ["Shopify or WooCommerce build", "Up to 50 products", "Payment gateway integration", "Delivery options setup", "SEO-optimised product pages", "AI chatbot for sales"],
      highlighted: false,
    },
    {
      name: "Enterprise",
      price: "From £4,999",
      days: "10-14",
      desc: "For complex projects",
      features: ["Complex multi-page builds", "Custom functionality", "AI agent integration", "CRM/ERP connection", "Dedicated project manager"],
      highlighted: false,
    },
  ];

  return (
    <main className="bg-white">
      {/* HEADER/NAV */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 border-b border-[#E9ECEF]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#0a0a0a]">
            FactoryJet
          </Link>

          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-gray-700 hover:text-[#0052CC] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-[#E9ECEF] p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="block text-sm font-medium text-gray-700 hover:text-[#0052CC] py-2">
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-4 md:px-8 pt-24">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#0052CC]"></div>

        <div className="absolute inset-0 opacity-5 text-9xl font-bold text-white pointer-events-none flex items-center justify-center">
          SHEFFIELD
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <h1
            ref={headlineRef}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter"
            style={{ fontFamily: "Clash Display, sans-serif", opacity: 1 }}
          >
            Web Design Sheffield — Built & Live in 7 Days
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
            Enterprise-Grade Websites at Startup-Friendly Prices. AI-native. Fast. Built to convert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#0052CC] hover:bg-[#1a6fff] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              Get My Free Quote <ArrowRight size={20} />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              See Our Work
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-gray-400 border-t border-gray-800 pt-8 mt-8">
            {TRUST_CHIPS.map((chip, i) => (
              <div key={i} className="py-4 text-center text-xs">{chip}</div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE BAND */}
      <section className="bg-[#111118] text-white py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, i) => (
            <span key={i} className="text-lg font-medium px-4">
              {item} ·
            </span>
          ))}
        </div>
      </section>

      {/* WHY FACTORYJET */}
      <section className="bg-white py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-[#0a0a0a]" style={{ fontFamily: "Clash Display, sans-serif" }}>
            Why Sheffield SMBs are switching to FactoryJet
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Sheffield has always been a city that builds things that last. We bring that same philosophy to web design.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {WHY_BENEFITS.map((card, i) => (
              <div key={i} className="bg-[#F8F9FA] p-8 rounded-xl border border-[#E9ECEF]">
                <div className="text-5xl font-bold text-[#0052CC] mb-4">{card.num}</div>
                <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">{card.title}</h3>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F8F9FA] py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: "Clash Display, sans-serif" }}>
            Your Sheffield website, live in 7 days
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-[#E9ECEF]">
                <div className="text-[#0052CC] font-bold text-sm mb-2">{step.day}</div>
                <h3 className="font-bold text-lg mb-2 text-[#0a0a0a]">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: "Clash Display, sans-serif" }}>
            Transparent pricing for Sheffield businesses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_TIERS.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-white border-2 border-[#0052CC] shadow-lg"
                    : "bg-[#F8F9FA] border border-[#E9ECEF] hover:border-[#0052CC]"
                }`}
              >
                {tier.highlighted && (
                  <div className="inline-block bg-[#0052CC] text-white px-4 py-1 rounded-full text-xs font-bold mb-4">
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
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-[#FF6B35] hover:bg-[#ff8255] text-white"
                      : "bg-white text-[#0a0a0a] hover:bg-gray-100 border border-[#E9ECEF]"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F8F9FA] py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: "Clash Display, sans-serif" }}>
            What Sheffield business owners say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-[#E9ECEF]">
                <p className="text-gray-700 mb-6 italic">"{test.quote}"</p>
                <div>
                  <p className="font-bold text-[#0a0a0a]">{test.name}</p>
                  <p className="text-sm text-gray-500">{test.title}</p>
                  <p className="text-xs text-gray-400">{test.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#0a0a0a]" style={{ fontFamily: "Clash Display, sans-serif" }}>
            Common questions from Sheffield businesses
          </h2>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <div key={i} className="bg-[#F8F9FA] rounded-lg border border-[#E9ECEF] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors text-left"
                >
                  <h3 className="font-bold text-[#0a0a0a]">{faq.q}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-[#0052CC] transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-white border-t border-[#E9ECEF]">
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL CREDIBILITY */}
      <section className="bg-[#0052CC] text-white py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-8" style={{ fontFamily: "Clash Display, sans-serif" }}>
            Built for Sheffield. Delivered globally.
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mb-12">
            Sheffield's identity has always been built on making things well. We understand that Sheffield SMBs need a web presence that reflects professionalism and converts local traffic into real customers.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Sheffield SMBs</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">73%</div>
              <div className="text-blue-100">Research online first</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">34%</div>
              <div className="text-blue-100">Not mobile-optimised</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3×</div>
              <div className="text-blue-100">More leads with AI chatbot</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="bg-[#0a0a0a] text-white py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "Clash Display, sans-serif" }}>
            Ready to get your Sheffield website built in 7 days?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join Sheffield businesses that have already made the switch. Get a free 30-minute consultation and transparent quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FF6B35] hover:bg-[#ff8255] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">
              Get My Free Sheffield Web Design Quote <ArrowRight size={20} />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
              Book a 30-Minute Consultation
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-left">
            <div>
              <p className="text-gray-400 text-sm mb-2">EMAIL</p>
              <p className="text-lg font-semibold">connect@factoryjet.com</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">WHATSAPP</p>
              <p className="text-lg font-semibold">+44 (0) 123 456 7890</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">WEBSITE</p>
              <p className="text-lg font-semibold">factoryjet.com</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">SERVICES</p>
              <Link href="/uk/sheffield" className="text-lg font-semibold hover:text-[#0052CC] transition-colors">
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
