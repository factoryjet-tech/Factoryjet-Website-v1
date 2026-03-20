import type { Metadata } from 'next';
import ShopifyDevelopmentPage from '@/pages/ShopifyDevelopment';

export const metadata: Metadata = {
  title: 'Shopify & Shopify Plus E-Commerce Development Services USA | FactoryJet',
  description: 'Expert Shopify Plus e-commerce development for US DTC, B2B, and enterprise brands. Custom stores, migrations, and headless commerce. Get a free consultation.',
  authors: [{ name: 'FactoryJet' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify & Shopify Plus E-Commerce Development Services USA',
    description: 'Expert Shopify Plus e-commerce development for US DTC, B2B, and enterprise brands. Custom stores, migrations, headless commerce with Hydrogen.',
    url: 'https://factoryjet.com/us/ecommerce-development/shopify-development',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Shopify Development Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify & Shopify Plus E-Commerce Development Services USA',
    description: 'Expert Shopify Plus e-commerce development for US DTC, B2B, and enterprise brands.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/ecommerce-development/shopify-development',
  },
};

export default function Page() {
  return <ShopifyDevelopmentPage region="us" />;
}
