// Shared FAQ source for Sheffield — imported by both page.tsx (visible render)
// and layout.tsx (JSON-LD schema) so neither can drift from the other.
// Plain data module, no "use client": safe for a Server Component (layout.tsx)
// to import without crossing a client/server boundary.
export const FAQ_ITEMS = [
  {
    q: "How do you deliver a website in 7 days?",
    a: "We’ve built a production system: our AI handles first-draft copywriting and layout. Our designers refine and customise. Your input is structured into a 30-minute brief call on Day 1. By Day 3 you see a working prototype. Days 4–6 are for your revisions and final polish. Day 7 is go-live.",
  },
  {
    q: "Is this a template or a custom website?",
    a: "Every FactoryJet site is custom-built from scratch. We don’t use WordPress themes or Squarespace templates. Your site is coded in Next.js, which means it loads faster, ranks better, and looks unique to your business.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None at all. We handle everything: domain setup, hosting, SSL, Google Analytics, Search Console, and even write the copy if you need it. After launch we give you a simple guide to update text and images yourself, no developer needed.",
  },
  {
    q: "Will my website rank in Sheffield searches?",
    a: "We build Sheffield-specific SEO into every page from the start: local schema markup, Google Business Profile integration, Sheffield landmarks and area mentions, and structured data that tells Google exactly who you serve and where.",
  },
  {
    q: "What’s the difference between Business and E-Commerce?",
    a: "Business is for service companies and trades who need to generate enquiries and leads. E-Commerce adds a full online shop (Shopify or WooCommerce), product pages, payment gateway, and delivery options for Sheffield retailers who want to sell online.",
  },
  {
    q: "Are there any contracts or monthly fees?",
    a: "No mandatory contracts. You pay once for the build. Hosting is a small monthly cost you pay the provider directly (we’ll set it up for you). We offer optional monthly maintenance retainers, but they’re never required.",
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
