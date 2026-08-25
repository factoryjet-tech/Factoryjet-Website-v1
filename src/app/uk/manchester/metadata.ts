import type { Metadata } from "next";

export const manchesterMetadata: Metadata = {
  title: "SEO Agency Manchester | Web Design, AI SEO | FactoryJet",
  description:
    "Manchester SEO and web design agency. Technical fixes, local map pack work, fast Next.js builds, and full code ownership for Greater Manchester businesses.",
  keywords: [
    "seo agency manchester",
    "seo manchester",
    "seo company manchester",
    "local seo manchester",
    "web design manchester",
    "website design manchester",
    "web design agency manchester",
    "website designer manchester",
    "web development manchester",
    "affordable web design manchester",
    "professional web design manchester",
    "custom website manchester",
    "next.js developer manchester",
    "ai website design manchester",
    "shopify developer manchester",
    "ecommerce web design manchester",
    "web design northern quarter manchester",
    "web design mediacityuk",
  ],
  alternates: {
    canonical: "https://factoryjet.com/uk/manchester",
    // UK-only page, no international twin, so both entries are self-referential.
    languages: {
      "en-GB": "https://factoryjet.com/uk/manchester",
      "x-default": "https://factoryjet.com/uk/manchester",
    },
  },
  openGraph: {
    title: "SEO Agency Manchester | Web Design, AI SEO | FactoryJet",
    description:
      "SEO, local search and fast Next.js web design for Manchester businesses. Fixed-price milestones and 100% code ownership.",
    url: "https://factoryjet.com/uk/manchester",
    siteName: "FactoryJet",
    locale: "en_GB",
    type: "website",
    images: [{ url: '/images/uk/city-manchester.jpg', width: 1200, height: 630, alt: 'Web Design Manchester: FactoryJet' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Agency Manchester | Web Design, AI SEO | FactoryJet",
    description:
      "SEO, local search and fast Next.js web design for Manchester businesses. Fixed-price milestones and 100% code ownership.",
  },
  robots: { index: true, follow: true },
};
