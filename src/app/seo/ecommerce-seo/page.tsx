import type { Metadata } from 'next';
import Script from 'next/script';
import { seoSubServiceAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';

export const metadata: Metadata = {
  title: 'Ecommerce SEO Services in India | Get Your Store Found | FactoryJet',
  description:
    'Ecommerce SEO services in India to get your product and category pages found on Google so more people buy. We work on the pages that sell, tidy big stores, and show your reviews in Google. Works with Shopify, WooCommerce, and custom stores. No long contracts.',
  keywords: [
    'ecommerce seo services',
    'ecommerce seo company',
    'shopify seo',
    'online store seo',
    'ecommerce seo company india',
    'ecommerce seo agency',
    'ecommerce seo services india',
    'woocommerce seo',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce SEO Services in India | Get Your Store Found | FactoryJet',
    description:
      'Ecommerce SEO services in India to get your product and category pages found on Google so more people buy. We work on the pages that sell, tidy big stores, and show your reviews in Google. Works with Shopify, WooCommerce, and custom stores. No long contracts.',
    url: 'https://factoryjet.com/seo/ecommerce-seo',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet Ecommerce SEO Services in India' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce SEO Services in India | FactoryJet',
    description: 'Ecommerce SEO to get your product and category pages found on Google so more people buy. We work on the pages that sell and show your reviews in Google. No long contracts.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/ecommerce-seo', languages: seoSubServiceAlternatesIN['ecommerce-seo'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/ecommerce-seo#service',
  serviceType: 'Ecommerce SEO',
  name: 'Ecommerce SEO Services by FactoryJet',
  description: 'Ecommerce SEO services in India: category and product pages that rank, tidy big menus and filters, the hidden product details Google reads, star ratings in Google results, helpful buying guides, and a fast store on phones. Works with Shopify, WooCommerce, and custom stores. No lock-in.',
  url: 'https://factoryjet.com/seo/ecommerce-seo',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com', telephone: '+919699977699' },
  areaServed: { '@type': 'Country', name: 'India' },
  offers: { '@type': 'Offer', price: '19999', priceCurrency: 'INR', description: 'SEO services for Indian businesses start from ₹19,999/month. Month to month, no lock-in.' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much do ecommerce SEO services cost in India?', acceptedAnswer: { '@type': 'Answer', text: 'We do not sell fixed packages. We look at your store and only charge for work that brings in buyers. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' } },
    { '@type': 'Question', name: 'How long does ecommerce SEO take to work?', acceptedAnswer: { '@type': 'Answer', text: 'Online stores take a bit longer than a small website because there are so many pages to fix. Many stores start seeing more visitors to their best pages in three to four months, with steadier sales by three to six months. We show simple early signs from the first month, like which category and product pages are starting to climb.' } },
    { '@type': 'Question', name: 'Do you work with Shopify and WooCommerce stores?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with Shopify, WooCommerce, and custom stores built in Next.js. Each one has its own quirks, and we know how to get the category pages, product pages, and big menus working on all of them.' } },
    { '@type': 'Question', name: 'Why do my category and product pages matter most?', acceptedAnswer: { '@type': 'Answer', text: 'Category pages pull in people who are browsing for a type of product, and product pages catch people who are ready to buy. Those are the pages that make you money, so they are the pages we work on first, instead of just the home page or the blog.' } },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/ecommerce-seo#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/ecommerce-seo',
};

const ECOM_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Full check of your store', description: 'We look at every part of your store: which category and product pages bring in money, which pages Google is wasting time on, where the big menu and filters trip Google up, and how you compare to the stores beating you. (Week 1 to 2)' },
  { number: '02', title: 'Fix the technical and big-menu issues', description: 'We fix the under-the-hood problems and tidy your big menus and filters, so Google does not get lost and can find your best pages fast. (Week 2 to 5)' },
  { number: '03', title: 'Improve category and product pages', description: 'We make your category and product pages easy for Google to read, with the right words and the hidden product details Google looks for, like price, stock, and reviews. (Week 3 to 8)' },
  { number: '04', title: 'Add buying guides and reviews', description: 'We add helpful buying guides that bring in shoppers and set up your reviews so star ratings can show next to your store in Google results. (Ongoing)' },
  { number: '05', title: 'Simple monthly report tied to sales', description: 'One page you can read in five minutes: which pages are climbing, how many visitors and sales they bring, and the three things we will do next. (Monthly)' },
];

const ECOM_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'products', label: 'Products & Categories' },
  { key: 'platforms', label: 'Shopify, Woo & Custom' },
  { key: 'choosing', label: 'Choosing & Reports' },
];

const ECOM_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much do ecommerce SEO services cost in India?', answer: 'We do not sell fixed packages. We look at your store and only charge for work that brings in buyers. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long does ecommerce SEO take to work?', answer: 'Online stores take a bit longer than a small website because there are so many pages to fix. Many stores start seeing more visitors to their best pages in three to four months, with steadier sales by three to six months. We show simple early signs from the first month, like which category and product pages are starting to climb.' },
  { category: 'pricing', question: 'What is the difference between affordable and cheap ecommerce SEO?', answer: 'Good affordable ecommerce SEO does the work that lasts: clean category and product pages, tidy menus, real reviews, and helpful content, at a fair price because we are a small team that uses smart tools. Cheap ecommerce SEO often means spammy tricks that can get your store punished by Google. We are not the cheapest, and we will tell you why.' },
  { category: 'pricing', question: 'Do I have to sign a long contract?', answer: 'No. You pay month to month and can pause or stop with 30 days notice. We keep clients by getting their store found and selling more, not by tying them down. Everything we build stays with your store.' },
  { category: 'included', question: 'What do your ecommerce SEO services include?', answer: 'Category pages that rank, product pages that rank with the hidden details Google reads, tidy big menus and filters so Google does not get lost, helpful buying guides that bring buyers, star ratings and reviews shown in Google results, and a fast store on phones. You also get a monthly call and a one-page report.' },
  { category: 'included', question: 'Can you show my reviews and star ratings in Google?', answer: 'Yes. We set up the hidden product details Google reads so your star ratings, price, and stock can show right in the search results. A row of stars next to your store makes more people click, which means more visitors and more sales.' },
  { category: 'included', question: 'Do you write the buying guides and content for me?', answer: 'Yes. We write helpful buying guides and how-to content that answer the questions shoppers type before they buy. These bring in new buyers who do not know your brand yet, and they point people toward your best category and product pages.' },
  { category: 'included', question: 'Will you make my store faster on phones?', answer: 'Yes. Most shoppers are on a phone, and a slow store loses sales and rankings. We work on making your store quick to load on phones, because Google and shoppers both reward a fast store.' },
  { category: 'products', question: 'Why do my category and product pages matter most?', answer: 'Category pages pull in people who are browsing for a type of product, and product pages catch people who are ready to buy. Those are the pages that make you money, so they are the pages we work on first, instead of just the home page or the blog.' },
  { category: 'products', question: 'What are the hidden product details Google reads?', answer: 'These are little bits of information your store can send to Google in the background, like price, whether an item is in stock, and your star rating. Google uses them to show extra details in the search results, which makes people more likely to click and buy.' },
  { category: 'products', question: 'My store has thousands of products. Can you handle that?', answer: 'Yes. Big stores are exactly where we help most. We work out which pages bring in money, fix those first, and tidy the big menus and filters so Google does not waste time on pages that do not sell. You do not need to fix every page to grow.' },
  { category: 'products', question: 'What happens to old or out-of-stock product pages?', answer: 'We have a plan for them so they do not hurt the rest of your store. Depending on the product, we keep the page, point it to a similar item, or fold it into a category page. This stops dead pages from dragging down your good ones.' },
  { category: 'platforms', question: 'Do you work with Shopify stores?', answer: 'Yes. Shopify is one of the most common stores we work on. We know its quirks, like how it builds category and product pages and how to keep the big menu tidy, so Google can find your best pages.' },
  { category: 'platforms', question: 'Do you work with WooCommerce stores?', answer: 'Yes. WooCommerce stores sit on top of WordPress, so they have their own settings to get right. We tidy the menus and filters, fix the technical bits, and make sure your category and product pages are easy for Google to read.' },
  { category: 'platforms', question: 'Can you do SEO for a custom store?', answer: 'Yes. We work with custom stores, including modern ones built in Next.js. Custom stores give us the most room to make pages fast and clean, and we know how to get the hidden product details and reviews working so they show in Google.' },
  { category: 'platforms', question: 'What if my big menu and filters confuse Google?', answer: 'This is one of the most common problems for online stores. Big menus and filters can create thousands of near-identical pages that send Google in circles. We tidy them so Google spends its time on your real category and product pages, not on copies it should ignore.' },
  { category: 'choosing', question: 'How do I pick a good ecommerce SEO company?', answer: 'Look past the ranking screenshots. A good ecommerce SEO company works on the category and product pages that actually sell, tidies big stores so Google sees your best pages, ties its work to sales, and never locks you into a year. Ask them to explain your first 90 days in plain words. If they cannot, keep looking.' },
  { category: 'choosing', question: 'Should I hire a freelancer or an ecommerce SEO agency?', answer: 'A freelancer can tidy a few pages, but ecommerce SEO that lasts needs the technical fixes, the big menus, the category and product pages, the reviews, and the content handled together, which is a lot for one person on a big store. A team gives you all of it for a fair monthly fee, and you can pause or grow any time. We run lean, so you get the team without the big agency bill.' },
  { category: 'choosing', question: 'What does your monthly report look like?', answer: 'One page you can read in five minutes: which category and product pages are climbing, how many visitors and sales they bring, and the three things we will do next. We set up Google’s free tools so the numbers are real visitors and real sales, not just rankings.' },
  { category: 'choosing', question: 'Do I keep everything you build?', answer: 'Yes, all of it. Your pages, your content, your reviews setup, and the fixes we make to your store belong to your business and stay with you. If you ever leave us, you keep everything. There is no special software you have to keep paying for.' },
];

const ECOM_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Big Agency' },
  { label: 'Freelancer' },
  { label: 'Do it yourself' },
] as const;

const ECOM_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'None'] },
  { feature: 'Optimises category and product pages', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Tidies big menus for Google', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Shows reviews and ratings in Google', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports tied to sales you can read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep everything', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
  { feature: 'Founder-led senior team', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
];

export default function EcommerceSeoPage() {
  return (
    <>
      <Script id="ecom-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="ecom-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Ecommerce SEO', url: 'https://factoryjet.com/seo/ecommerce-seo' },
        ]}
      />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="ECOMMERCE SEO SERVICES · INDIA"
          headline="Get Your Online Store Found on Google So More People Buy"
          lead="An online store can have hundreds of pages, but only a few make you money: your category pages and your product pages. Those are the pages people land on when they are ready to buy. We help online stores across India get those pages found on Google. We work on the pages that sell, tidy big stores so Google does not get lost, show your reviews and star ratings in Google results, and make your store fast on phones. Works with Shopify, WooCommerce, and custom stores. No long contracts, and everything we do stays yours."
          primaryCta={{ label: 'Book a Free Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Shopify, Woo & custom', 'Pages that sell', 'No long contracts']}
          rightSlot={<HeroBrowserMockup badgeLabel="Store found" badgeCity="India" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average rating. Ecommerce SEO that gets your store found." />

        <IndustriesGrid variant="cards"
          eyebrow="WHAT'S INCLUDED"
          headline="What We Actually Do for Your Store"
          lead="Getting an online store found is not one trick. Google has to find your best pages, read them easily, and trust them enough to show them when people are ready to buy. We work on all the parts that matter for a store. Here is everything we cover."
          sectors={[
            { name: 'Category pages that rank', description: 'Category pages are the lists that group your products, like "running shoes" or "office chairs". They pull in people who are browsing, so we make them easy for Google to read and rank for the words your buyers type.', example: 'The pages that pull in browsers.' },
            { name: 'Product pages that rank', description: 'We make your product pages easy for Google to read and add the hidden product details Google looks for: price, whether it is in stock, and reviews. These catch people who are ready to buy.', example: 'Price, stock, reviews, all readable.' },
            { name: 'Tidy menus and filters', description: 'Big stores have huge menus and filters that can create thousands of near-identical pages. We tidy them so Google does not get lost and can spend its time on your real, money-making pages.', example: 'Google does not get lost.' },
            { name: 'Helpful buying guides', description: 'We write buying guides and how-to content that answer the questions shoppers type before they buy. These bring in new buyers and point them toward your best category and product pages.', example: 'Content that brings buyers.' },
            { name: 'Stars in Google results', description: 'We set things up so your star ratings and reviews can show right next to your store in the Google results. A row of stars makes more people click, which means more visitors and more sales.', example: 'Star ratings shown in Google.' },
            { name: 'A fast store on phones', description: 'Most shoppers are on a phone, and a slow store loses sales and rankings. We work on making your store quick to load on phones, because Google and shoppers both reward a fast store.', example: 'Quick to load on phones.' },
          ]}
        />

        <ServiceExplanation
          eyebrow="ECOMMERCE SEO · PLAIN WORDS"
          headline="What Ecommerce SEO Is, in Plain Words"
          lead="An online store has so many pages that Google can easily waste its time on the wrong ones. Ecommerce SEO is about pointing Google at the pages that actually sell and making them easy to find."
          body={
            <>
              <p>
                A store can have thousands of pages: every product, every category, every filter and tag. Google does
                not have endless time to look at all of them, so it picks and chooses. Left alone, it often spends that
                time on the wrong pages, like duplicate filter pages, while your best pages sit unseen.
              </p>
              <p>
                Our job is to point Google at your best category and product pages, then make those pages easy to read,
                with clear words and the hidden details Google looks for, like price, stock, and reviews. We also tidy
                the big menus and filters so Google does not get lost on the way there.
              </p>
              <p>
                The result: your money-making pages show up when people are ready to buy, with star ratings next to
                them in the results. Everything we build is yours, with no lock-in and no special software to keep
                paying for.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>The pages that matter most</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { type: 'Category pages', need: 'The pages that pull in browsers', colour: '#F05A28' },
                  { type: 'Product pages', need: 'The pages that close the sale', colour: '#F3A07A' },
                  { type: 'Helpful content', need: 'Buying guides that bring buyers', colour: '#0F0F12' },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.colour }} aria-hidden="true" />
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>{row.type}</p>
                    </div>
                    <p className="font-fj-body text-fj-neutral-500" style={{ fontSize: '0.875rem' }}>{row.need}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Online Stores Pick FactoryJet for Ecommerce SEO"
          lead="Plenty of agencies fuss over your home page and blog while your real money-makers sit unseen. We focus on the pages that actually sell, tidy big stores so Google sees your best pages, and get you into the shopping-style results and AI answers where buyers look."
          pillars={[
            { icon: '01', title: 'We focus on the pages that actually sell.', body: 'Your category and product pages are where the money is. We work on those first, instead of spending your budget on a home page or blog that browsers rarely buy from.' },
            { icon: '02', title: 'We tidy big stores so Google sees your best pages.', body: 'Big menus and filters can send Google in circles around thousands of near-identical pages. We tidy them so Google spends its time on your real, money-making pages.' },
            { icon: '03', title: "We get you into Google's shopping-style results and AI answers.", body: 'We set up the hidden product details and reviews so your store can show with stars in the shopping-style results, and we write the content that gets your store named in AI answers.' },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="How We Run Your Ecommerce SEO, Step by Step"
          lead="We check before we plan. We fix the basics first. And we report from week one, so you always know what we are doing and why."
          stages={ECOM_JOURNEY}
          closingNote="5 STEPS · PAGES THAT SELL · STARS IN GOOGLE · NO LONG CONTRACTS"
        />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Ecommerce SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real store results: category and product pages we moved up, more visitors to the pages that sell, and more sales. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating from our clients.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. a Big Agency vs. a Freelancer vs. Doing It Yourself"
          lead="There are four ways to do ecommerce SEO. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'category and product pages that rank, tidy big menus, and reviews in your Google results, run month to month. Cancel any time, and you keep everything.' }}
          columns={ECOM_COMPARISON_COLUMNS}
          rows={ECOM_COMPARISON_ROWS}
          footer="FactoryJet plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid variant="cards"
          eyebrow="ECOMMERCE SEO BY CITY"
          headline="Want Ecommerce SEO Built for Your City?"
          lead="This page explains what ecommerce SEO is. If you want work built for your own city, where we know the market and how people search, start here."
          sectors={[
            { name: 'SEO Agency in Mumbai', description: 'Get your store found across a busy, crowded market, from fashion and beauty to home and gifting.', example: 'Explore SEO in Mumbai', linkLabel: 'Explore SEO in Mumbai', linkHref: '/seo/mumbai' },
            { name: 'SEO Agency in Bangalore', description: 'Win the pages that sell against tough online rivals in a fast-moving tech city.', example: 'Explore SEO in Bangalore', linkLabel: 'Explore SEO in Bangalore', linkHref: '/seo/bangalore' },
            { name: 'SEO Agency in Pune', description: 'Ecommerce SEO built for Pune stores, from D2C brands to local shops going online.', example: 'Explore SEO in Pune', linkLabel: 'Explore SEO in Pune', linkHref: '/seo/pune' },
            { name: 'SEO Agency in Delhi', description: 'Clean category and product pages done right for a huge, competitive market.', example: 'Explore SEO in Delhi', linkLabel: 'Explore SEO in Delhi', linkHref: '/seo/delhi' },
            { name: 'SEO Company in Ahmedabad', description: 'Get your store found for Ahmedabad shoppers, from fashion to home goods.', example: 'Explore SEO in Ahmedabad', linkLabel: 'Explore SEO in Ahmedabad', linkHref: '/seo/ahmedabad' },
            { name: 'SEO Company in Jaipur', description: 'Help your store show up for shoppers across Jaipur and beyond.', example: 'Explore SEO in Jaipur', linkLabel: 'Explore SEO in Jaipur', linkHref: '/seo/jaipur' },
          ]}
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO IT'S FOR"
          headline="Ecommerce SEO for Stores That Want to Sell More"
          lead="If you sell online, ecommerce SEO is the steadiest way to turn searches into sales without paying for every click. These are the stores we help most."
          sectors={[
            { name: 'Shopify stores', description: 'We know Shopify well, from how it builds category and product pages to keeping the big menu tidy so Google finds your best pages.' },
            { name: 'WooCommerce stores', description: 'WooCommerce sits on WordPress, so it has its own settings to get right. We tidy the menus and filters and make your pages easy for Google to read.' },
            { name: 'D2C and online brands', description: 'Brands selling straight to shoppers: we get your category and product pages found and your reviews showing in Google.' },
            { name: 'Stores with thousands of products', description: 'Big catalogues are where we help most. We fix the pages that sell first and tidy the menus so Google does not waste time.' },
            { name: 'New stores with no traffic yet', description: 'Just launched? We build the foundations right so Google can find and trust your store from the start.' },
            { name: 'Stores stuck below the marketplaces', description: 'If big marketplaces sit above you in search, we work on the pages and content that help your own store get found too.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What business owners say about working with FactoryJet" region="in" />

        <FAQ eyebrow="COMMON QUESTIONS" headline="Ecommerce SEO Questions, Answered Simply" lead="The questions every store owner asks before starting ecommerce SEO, answered without the confusing words." categories={ECOM_FAQ_CATEGORIES} items={ECOM_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Get Your Store Found and Selling More?"
          sub="Start with a free check. We will show you which pages are losing you sales today, what Google is missing, and what we will fix in the first 90 days."
          primaryCta={{ label: 'Book a Free Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep everything. Reports tied to sales you'll read in five minutes."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
