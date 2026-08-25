import type { Metadata, Viewport } from "next";

export const ukViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * /uk is the country hub. It does not chase one head term: it is the entry
 * point that routes to the ten UK service hubs and the 21 UK city pages.
 * Title and description are written for that job, not for a single keyword.
 *
 * hreflang (2026-08-25): the old map carried an `en-IN` entry pointing at the
 * site root even though no /in route exists, so two language values claimed
 * the same URL for no reason. Only locales with a real page are listed now,
 * plus a self-referential en-GB and an x-default on the root.
 *
 * Description no longer says pricing is "published upfront". We do not publish
 * prices anywhere on the site, so that claim was not true.
 */
export const ukMetadata: Metadata = {
  title: "Digital Agency UK: Web Design, Ecommerce, SEO | FactoryJet",
  description:
    "FactoryJet is an AI-native digital agency for UK businesses. Web design, Shopify and WooCommerce builds, AI agents and AI SEO, across 21 UK cities. Free audit.",
  alternates: {
    canonical: "https://factoryjet.com/uk",
    languages: {
      "en-GB": "https://factoryjet.com/uk",
      "en-US": "https://factoryjet.com",
      "en-AE": "https://factoryjet.com/uae",
      "en-AU": "https://factoryjet.com/au",
      "x-default": "https://factoryjet.com",
    },
  },
  openGraph: {
    title: "Digital Agency UK: Web Design, Ecommerce, SEO | FactoryJet",
    description:
      "FactoryJet is an AI-native digital agency for UK businesses. Web design, Shopify and WooCommerce builds, AI agents and AI SEO, across 21 UK cities. Free audit.",
    url: "https://factoryjet.com/uk",
    type: "website",
    siteName: "FactoryJet Technologies",
    locale: "en_GB",
    images: [
      {
        url: "/images/uk/hero-uk.webp",
        width: 1200,
        height: 630,
        alt: "FactoryJet, a UK digital agency for web design, e-commerce and AI SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Agency UK: Web Design, Ecommerce, SEO | FactoryJet",
    description:
      "Web design, Shopify and WooCommerce builds, custom AI agents and AI SEO for UK businesses. Scoped and quoted up front, before any work starts.",
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
