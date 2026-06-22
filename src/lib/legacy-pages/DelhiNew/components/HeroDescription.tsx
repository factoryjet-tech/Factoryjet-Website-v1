import React from 'react';

const HERO_PARAGRAPH = `FactoryJet is Delhi NCR's premier website design company specializing in website development, WordPress website development, Shopify store development, and e-commerce solutions for businesses across the National Capital Region. With 25+ years of expertise as the top website development company in Delhi NCR, we help startups, enterprises, D2C brands, and growing businesses in Gurgaon, Noida, Delhi, Faridabad, and Ghaziabad establish powerful online presence that generates leads, drives conversions, and accelerates growth.

We serve businesses across Delhi NCR's thriving commercial and tech hubs — Cyber City Gurugram, Golf Course Road, DLF Cyber Hub, Noida Sector 62-63, Greater Noida, Okhla Industrial Area, Connaught Place, and Nehru Place. Our mobile responsive sites are designed specifically for modern startups, tech companies, e-commerce brands, and enterprises looking to dominate the digital marketplace.

As the best website development company in Delhi NCR, we've helped 500+ businesses — from funded startups in Gurgaon to e-commerce giants in Noida to enterprise companies in South Delhi — launch professional, mobile-optimized, SEO-ready websites that convert visitors into paying customers. Whether you need a corporate website, Shopify e-commerce store, WordPress development, or custom web application, FactoryJet delivers exceptional results starting at just ₹29,999.

Delhi NCR is India's largest economic hub with ₹12 lakh crore annual GDP, 50,000+ startups, and the highest concentration of Fortune 500 companies in the country. The region houses 70% of India's unicorn startups and processes 40% of the country's e-commerce transactions. Yet surprisingly, 55% of Delhi NCR businesses still lack professional websites, losing crores in potential revenue to digitally-savvy competitors. FactoryJet changes that equation — we build websites that help Delhi NCR businesses compete nationally and globally.

If you're searching for website designer in Delhi NCR, website developer in Delhi NCR, web design agency in Delhi NCR, website development agency in Delhi NCR, or e-commerce development company in Delhi NCR — FactoryJet works with startups, SMBs, enterprises, D2C brands, and businesses across the entire National Capital Region. Whether you need Shopify store development company in Delhi NCR or WordPress website development Delhi NCR — get a free quote today and transform your digital presence.`;

const HeroDescription: React.FC = () => (
  <section className="bg-white py-12 lg:py-24 border-b border-gray-100 relative overflow-hidden">
     <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gray-50 rounded-full opacity-50 z-0"></div>
     <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full opacity-50 z-0"></div>

     <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
            <div className="text-slate-700 text-base md:text-lg lg:text-xl leading-7 md:leading-9 font-light space-y-4 lg:space-y-6">
                 {HERO_PARAGRAPH.split('\n\n').map((paragraph, index) => (
                    <p key={index} className={`${index === 0 ? 'first-letter:text-4xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-jet-blue first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left' : ''}`}>
                        {paragraph}
                    </p>
                 ))}
            </div>
        </div>
     </div>
  </section>
);

export default HeroDescription;
