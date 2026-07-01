import type { Metadata, Viewport } from "next";

export const ukViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const ukMetadata: Metadata = {
  title: "AI-Native Web Design, E-Commerce & SEO Agency UK | FactoryJet",
  description:
    "UK AI-native agency: web design, Shopify development, AI agents & AI SEO (GEO/AEO) for British businesses. Pricing is fixed and published upfront. Free audit.",
  alternates: {
    canonical: "https://factoryjet.com/uk",
    languages: {
      "en-GB": "https://factoryjet.com/uk",
      "en-US": "https://factoryjet.com",
      "en-IN": "https://factoryjet.com",
      "en-AE": "https://factoryjet.com/uae",
      "en-AU": "https://factoryjet.com/au",
      "x-default": "https://factoryjet.com",
    },
  },
  openGraph: {
    title: "AI-Native Web Design, E-Commerce & SEO Agency UK | FactoryJet",
    description:
      "UK AI-native agency: web design, Shopify development, AI agents & AI SEO (GEO/AEO) for British businesses. Pricing is fixed and published upfront. Free audit.",
    url: "https://factoryjet.com/uk",
    type: "website",
    siteName: "FactoryJet Technologies",
    locale: "en_GB",
    images: [
      {
        url: "/images/uk/hero-uk.webp",
        width: 1200,
        height: 630,
        alt: "UK Web Design Agency — FactoryJet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Native Web Design, E-Commerce & SEO Agency UK | FactoryJet",
    description:
      "Web design, Shopify development, custom AI agents & AI SEO for UK businesses. Pricing is fixed and published upfront.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
