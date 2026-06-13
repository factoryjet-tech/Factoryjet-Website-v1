import { leedsMetadata } from "./metadata";

export const metadata = leedsMetadata;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FactoryJet Technologies",
  description:
    "AI-native web design agency building custom websites for Leeds businesses. Next.js 15, GSAP, Tailwind CSS 4. Pricing is fixed and published upfront.",
  url: "https://factoryjet.com/leeds",
  email: "connect@factoryjet.com",
  areaServed: {
    "@type": "City",
    name: "Leeds",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Greater Leeds",
    },
  },
  serviceArea: {
    "@type": "AdministrativeArea",
    name: "Greater Leeds, UK",
  },
  sameAs: [
    "https://www.linkedin.com/company/factoryjet",
    "https://www.crunchbase.com/organization/factoryjet",
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "150", bestRating: "5", worstRating: "1" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Design",
  name: "Web Design Leeds",
  description:
    "AI-native web design agency serving Leeds businesses. Custom websites built with Next.js 15, GSAP animations, and Tailwind CSS 4. Pricing is fixed and published upfront. Lighthouse 90+ guaranteed.",
  provider: {
    "@type": "LocalBusiness",
    name: "FactoryJet Technologies",
    url: "https://factoryjet.com",
  },
  areaServed: {
    "@type": "City",
    name: "Leeds",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://factoryjet.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "UK",
      item: "https://factoryjet.com/uk",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leeds",
      item: "https://factoryjet.com/uk/leeds",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Web Design",
      item: "https://factoryjet.com/leeds",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How FactoryJet builds your Leeds website in 2–4 weeks",
  description:
    "Our 5-step process for delivering a professional, AI-native website for Leeds businesses.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Discovery & Conversion Mapping (Days 1–2)",
      text: "We audit your current Leeds digital presence, map your customer journey from search query to conversion, identify keyword gaps against local competitors, and define the technical architecture.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Content Architecture & SEO Engineering (Days 3–5)",
      text: "Every page structured for both human readers and AI systems. We write conversion copy, define heading hierarchy, build FAQ schema content, and map internal linking across 20+ Leeds keywords.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "UI/UX Design & Animation Choreography (Days 6–10)",
      text: "Design in code, not Figma. Every section built as a React component with responsive breakpoints, GSAP scroll animations, and Lenis smooth scroll. You see the actual website in a staging environment.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Development, Testing & Performance Tuning (Days 11–18)",
      text: "Full build in Next.js 15 with Tailwind CSS 4. Schema injection, sitemap, robots.txt, Core Web Vitals optimisation. Tested across Chrome, Safari, Firefox, Edge, iOS and Android. Every page must score Lighthouse 90+ before deployment.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Launch, Indexing & 90-Day Support (Day 19+)",
      text: "Deploy to your domain, submit to Google Search Console, configure analytics, and begin monitoring indexation. 90 days of post-launch support including bug fixes, content updates, and performance monitoring — included, not invoiced separately.",
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://factoryjet.com/uk/leeds#webpage",
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2:first-of-type"] },
  "url": "https://factoryjet.com/uk/leeds"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does web design cost in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average cost for a professionally built business website in Leeds ranges from £1,200 to £8,000 depending on complexity. Local agencies like Ascensor, Bolser, and Parallax typically charge £4,500–£8,000 for a standard build. Budget-focused agencies like HungryWolf and Pixelish offer pay-monthly models from £49–£85 per month. FactoryJet delivers enterprise-grade websites on Next.js 15 starting from £1,500 — that is at a fixed, published price — because our AI-augmented development process dramatically reduces production time without sacrificing quality. Our websites consistently score 90+ on Google Lighthouse Performance, which most Leeds agencies cannot match.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have a physical office in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FactoryJet operates as a remote-first, AI-native agency serving Leeds businesses from our global delivery network. This is exactly how we keep pricing at a fixed, published price — we do not pass the cost of Leeds city centre office space onto our clients. We are available via video call, WhatsApp, phone, and email throughout UK business hours, and we meet in person for larger engagements.",
      },
    },
    {
      "@type": "Question",
      name: "What is generative engine optimisation and why does my Leeds business need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generative engine optimisation (GEO) is the practice of optimising your website and content to appear in AI-generated search results — Google AI Overviews, ChatGPT responses, Perplexity AI answers, and Claude citations. In the UK, 42% of Google searches now show AI-generated summaries, ChatGPT had 1.8 billion UK visits in 2025, and AI search traffic converts at 4.4 times the rate of traditional organic search. No other SEO agency in Leeds currently offers dedicated GEO and AEO services — making this a significant first-mover opportunity for Leeds businesses that act now.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build a Shopify store for my Leeds retail business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FactoryJet is an experienced Shopify developer and Shopify agency serving Leeds retailers, fashion brands, and direct-to-consumer businesses. We build on Shopify, Shopify Plus, and WooCommerce, and we also offer headless e-commerce architectures. We handle Shopify migrations, build custom themes, and configure UK-specific payment gateways (Stripe, PayPal, Klarna) and shipping providers (Royal Mail, DPD).",
      },
    },
    {
      "@type": "Question",
      name: "What is an AI agent and how can it help my Leeds business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI agent is an intelligent software system that can autonomously handle tasks your team currently does manually — answering customer enquiries, qualifying sales leads, processing documents, scheduling appointments, and more. For Leeds businesses, AI agents typically deliver ROI within three to six months by reducing staffing costs, improving 24/7 response times, and handling 60–80% of routine interactions.",
      },
    },
    {
      "@type": "Question",
      name: "How long does FactoryJet take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our typical turnaround is 2–4 weeks for business websites, 3–6 weeks for e-commerce stores, and 4–8 weeks for AI agent deployments. This is significantly faster than most Leeds web design agencies, which typically quote 6–12 weeks. Every project includes a staging link so you can review progress in real time.",
      },
    },
    {
      "@type": "Question",
      name: "Is VAT charged on web design in the UK? Can I claim my website as a business expense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes to both. If the web design agency is VAT registered (annual turnover above £90,000), VAT at 20% is added to the invoice. Web design, hosting, SEO, and digital marketing costs are all legitimate business expenses claimable with HMRC against your corporation tax (19–25%) or income tax for sole traders. This can reduce the effective cost of your website by 19–25%.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a website for my small business in Leeds in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. 87% of UK small businesses already have a website, and 69% of those without one say they need one. For Leeds businesses, a professional website is essential for appearing in local Google searches, being cited by AI search tools like ChatGPT and Perplexity, and competing with the 42,000 other businesses in the city.",
      },
    },
  ],
};

export default function LeedsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        id="leeds-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="leeds-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="leeds-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="leeds-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="leeds-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="leeds-speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
  );
}
