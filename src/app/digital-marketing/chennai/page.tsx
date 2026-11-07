import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import IndustriesGrid, { type IndustryCard } from '@/components/v2/IndustriesGrid';
import { type Pillar } from '@/components/v2/StrategicDarkSection';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import Heading from '@/components/v2/Heading';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

const CANONICAL = 'https://factoryjet.com/digital-marketing/chennai';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Chennai | SEO, Ads | FactoryJet',
  description:
    'Digital marketing agency in Chennai for auto suppliers, OMR tech firms, hospitals and T. Nagar retail. SEO, Google Ads, Maps and AI answers.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Chennai | SEO, Ads | FactoryJet',
    description:
      'Digital marketing agency in Chennai for auto suppliers, OMR tech firms, hospitals and T. Nagar retail. SEO, Google Ads, Maps and AI answers.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: Digital Marketing Agency in Chennai',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Chennai | FactoryJet',
    description:
      'SEO, Google Ads, Maps and AI answers for Chennai factories, tech firms, hospitals and T. Nagar shops.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: CANONICAL,
    languages: {
      'en-IN': CANONICAL,
      'x-default': CANONICAL,
    },
  },
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
};

/* ────────────────────────────────────────────────────────────────────────
   Chennai city page. Plain language, no pricing anywhere. Copy rewritten
   7 Nov 2026 around Chennai's own business mix: the Sriperumbudur and
   Oragadam auto belt, OMR tech firms, hospitals, T. Nagar silk and jewellery
   retail, leather and textile exporters, Ambattur and Guindy engineering
   units, and Tamil-language search. Competitor and FAQ material is grounded
   in live search data pulled July 2026 for "digital marketing agency in
   chennai" and "seo company in chennai".
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
  'Senior people on every account',
  'Google, Maps and AI answers',
];

const STATS = [
  { value: '500+', label: 'Businesses helped', note: 'Across India, US, UK and UAE' },
  { value: '12 yrs', label: 'Years doing this', note: 'Long enough to have seen most mistakes' },
  { value: 'In-house', label: 'Senior team', note: 'Your account stays with experienced hands' },
  { value: '4', label: 'Countries served', note: 'India, US, UK and UAE' },
];

// Channel grid = the internal-link authority hub. Each card links into an
// existing FactoryJet service page so this Chennai page passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'Search engine optimisation puts you on page one when a buyer types "CNC machining Ambattur" or "silk sarees T. Nagar". You earn that spot instead of renting it.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'Pages that open fast on a mobile in a crowded Pondy Bazaar lane, show your products clearly, and put the call and enquiry buttons where thumbs land.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'Sell sarees, gold-plated jewellery, filter coffee or leather goods online, with checkout, shipping and stock that a small Chennai team can manage.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'Patients, plant managers and shoppers now ask ChatGPT and Gemini for a shortlist. GEO is the work of getting your Chennai business into that shortlist.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'An assistant that books hospital appointments, answers RFQ basics for an auto supplier, or takes restaurant orders after closing time.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Most Chennai buyers would rather message than call. Automated WhatsApp replies in English or Tamil catch the lead while interest is warm.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'For Chennai brands selling handloom, snacks, skincare or home decor across India, a Shopify build gives a quick, tidy store you can grow.',
    linkLabel: 'See Shopify',
    linkHref: '/shopify-development',
  },
  {
    name: 'WordPress websites',
    description:
      'Clinics, schools and engineering firms often want a content site their own staff can update. WordPress does that, and the site stays yours.',
    linkLabel: 'See WordPress',
    linkHref: '/wordpress-development',
  },
];

const COMPARE_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Traditional agency' },
  { label: 'Freelancer' },
  { label: 'Your own team' },
] as const;

const COMPARE_ROWS = [
  {
    feature: 'Who runs your account day to day',
    values: [
      'Senior, in-house',
      'Often freshers',
      'One person',
      'You hire and train',
    ],
  },
  {
    feature: 'SEO, ads, site and social under one roof',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Monthly numbers in plain English',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Work on ChatGPT, Gemini and Google AI answers',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Knows how Chennai buyers search, in English and Tamil',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Short start, no long contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="no" />,
    ],
  },
  {
    feature: 'Google Business Profile and Maps listing done right',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'WhatsApp replies wired to every lead source',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'No jargon in meetings or reports',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Written plan signed off before work begins',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Past results in a similar trade',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="no" />,
    ],
  },
];

const PILLARS: Pillar[] = [
  {
    icon: '\u{1F9E9}',
    title: 'Channels that never talk to each other',
    body:
      'A buyer from a Sriperumbudur plant might see your Google listing, open your LinkedIn page, then send a WhatsApp. If three vendors run those three places, the lead falls through. One plan covers all of them.',
  },
  {
    icon: '\u{1F464}',
    title: 'The senior pitch, the junior delivery',
    body:
      'A familiar pattern: an experienced lead wins the deal, then a trainee runs the account. Chennai categories like hospitals, jewellery and B2B engineering punish slow learning. Our experienced people stay on the work.',
  },
  {
    icon: '\u{1F916}',
    title: 'Missing from AI shortlists',
    body:
      'Families comparing hospitals and procurement teams comparing suppliers now ask AI tools first. Agencies that only chase blue links leave you out of those answers. We plan for Google and for AI replies together.',
  },
];

// Named-competitor comparison, built from live search-ranking research for
// "digital marketing agency in chennai" and "seo company in chennai" (July 2026).
// Every agency named is a real, verifiable Chennai firm. Honest and positive,
// with open self-disclosure that FactoryJet is on the list.
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Chennai firms, from T. Nagar retailers to OMR software companies and Ambattur suppliers, that want website, Google, ads and AI search run by one senior team. (This entry is us, listed openly.)',
    isUs: true,
  },
  {
    name: 'echoVME Digital',
    bestFor: 'Consumer brands that put social media, influencer campaigns and content first, from a known local name that also runs marketing training.',
  },
  {
    name: 'Social Beat',
    bestFor: 'Large brands needing performance campaigns and video production at scale from one of the bigger independent agencies in the country.',
  },
  {
    name: 'Rankraze',
    bestFor: 'Companies chasing organic rankings and a steady lead flow, with a team that leans hard on SEO data.',
  },
  {
    name: 'iStudio Technologies',
    bestFor: 'Owners who want their website or online store built by the same firm that markets it.',
  },
  {
    name: 'Open Designs',
    bestFor: 'Design-led brands that want interface and web build work handled next to search work.',
  },
  {
    name: 'Adchennai',
    bestFor: 'Neighbourhood businesses after fast leads from Google, Facebook and WhatsApp ad campaigns.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A free first call',
    description: 'You tell us what you sell, who buys it and where in Chennai they come from. We listen and ask.',
  },
  {
    number: '02',
    title: 'A written plan',
    description: 'Channels, tasks and the first ninety days, written so you can say yes or no to each line.',
  },
  {
    number: '03',
    title: 'Senior people do the work',
    description: 'Site fixes, Google listing, ads, local pages, AI search. Whatever you approved, built by experienced hands.',
  },
  {
    number: '04',
    title: 'Monthly numbers',
    description: 'Visits, calls, forms and WhatsApp leads, plus the list of tasks done. One page, plain figures.',
  },
  {
    number: '05',
    title: 'Adjust and repeat',
    description: 'Budget moves towards what brings leads and away from what does not, every month.',
  },
];

// Chennai market context. Every number below is real, current (July 2026), and
// linked to a source that resolves. These back the CityContextSection so the
// page earns trust with AI answer engines and human readers alike.
const MARKET_STATS = [
  {
    value: '1.03 billion',
    label:
      'Indians are online, roughly 70 of every 100. Your Chennai buyers check Google and Maps before they visit a showroom or send an RFQ.',
    sourceUrl: 'https://datareportal.com/reports/digital-2026-india',
    sourceLabel: 'DataReportal Digital 2026',
  },
  {
    value: '100 million+',
    label:
      'Indians use ChatGPT each week, its biggest market after the US. Chennai patients, parents and buyers are among those asking it for names.',
    sourceUrl:
      'https://techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/',
    sourceLabel: 'TechCrunch, Feb 2026',
  },
  {
    value: '10,000+',
    label:
      'DPIIT-recognised startups are registered in Tamil Nadu, up from about 2,300 in 2021. Many sit in Chennai and bid for the same search clicks you do.',
    sourceUrl: 'https://startuptalky.com/news/tamil-nadu-10000-dpiit-registered-startups/',
    sourceLabel: 'StartupTalky / DPIIT, Dec 2024',
  },
];

// The honest "which channels actually bring enquiries" listicle. Ordered by how
// steadily each one brings leads for a typical Chennai business, not by hype.
// Real high-volume Chennai search terms are woven in naturally.
const CHANNELS_RANKED = [
  {
    name: 'Organic Google rankings (SEO)',
    who: 'Nearly every Chennai firm, from a Guindy fabricator to an Adyar dental clinic, and even an SEO company in Chennai hunting for clients.',
    body:
      'Search engine optimisation is the work that gets you listed on Google without a fee per click. Think of searches like "orthopaedic hospital Chennai", "auto parts supplier Oragadam" or "kanjivaram silk shop". Rankings take a few months to earn. After that they keep sending enquiries with no ad spend, which is why SEO is usually the backbone of a Chennai plan.',
  },
  {
    name: 'Google Maps and the local pack (local SEO)',
    who: 'Showrooms, clinics, restaurants, sweet shops and anyone with a counter or a front door.',
    body:
      'Search "jewellers near me" in T. Nagar and Google shows a map with three businesses before anything else. Local SEO aims to put you in that map box. The work is a complete Google Business Profile, correct address and phone everywhere, photos, and steady genuine reviews. Adding Tamil service names to the profile helps when buyers search in Tamil.',
  },
  {
    name: 'Google Ads for leads this week',
    who: 'New businesses, seasonal sellers before Pongal or Deepavali, and anyone who needs calls now.',
    body:
      'Paid search puts you at the top of Google from the day the campaign starts and stops the day you pause it. That makes it the quickest way to learn which offers and keywords bring Chennai buyers, while organic rankings grow. People also call this paid side performance marketing.',
  },
  {
    name: 'Social media (Instagram, Facebook, LinkedIn)',
    who: 'Restaurants, saree and jewellery stores, salons, D2C brands, and B2B firms on LinkedIn.',
    body:
      'Instagram suits food, fashion and festive offers. LinkedIn suits OMR software firms and engineering suppliers who sell to plant heads and buyers. A social media marketing agency in Chennai will post, run promotions and answer comments. Social builds recognition slowly, so we run it beside search rather than on its own.',
  },
  {
    name: 'WhatsApp replies and follow-up',
    who: 'Any Chennai business that gets enquiries, because buyers here message before they call.',
    body:
      'An enquiry that waits overnight often goes to a rival. A click-to-WhatsApp button, an instant auto-reply in English or Tamil, and a person who follows up the same day turn more leads into orders. This one fix often lifts results more than extra ad spend.',
  },
  {
    name: 'AI answers (ChatGPT, Gemini, Google AI)',
    who: 'Hospitals, colleges, B2B suppliers and premium retailers whose buyers research with AI tools.',
    body:
      'Ask ChatGPT "best cardiac hospital in Chennai" or "reliable sheet metal vendors near Sriperumbudur" and it names a few businesses. Getting named there is called GEO, short for generative engine optimisation. Few Chennai agencies work on it yet, so early movers have room. We include it from the first month.',
  },
];

const FAQ_CATEGORIES: FAQCategory[] = [
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'services', label: 'What we do' },
  { key: 'channels', label: 'Channels and tactics' },
  { key: 'seo', label: 'SEO in Chennai' },
  { key: 'local', label: 'Chennai and nearby' },
  { key: 'results', label: 'Results and reports' },
  { key: 'trust', label: 'Trust and safety' },
  { key: 'ai', label: 'AI and the future' },
];

// Every FAQ below is grounded in real "People Also Ask" and related-search
// queries for Chennai (July 2026). Career and "how to earn" queries were
// deliberately excluded (not buyer intent).
const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Chennai?',
    answer:
      'It depends on what you sell. A multi-speciality hospital, an OMR SaaS company and a T. Nagar silk store need different skills, budgets and channels. Look for an agency that has worked in your trade and puts a senior person on your account. Further down we list the Chennai agencies that rank on Google, ourselves included, with what each suits.',
  },
  {
    category: 'choosing',
    question: 'Which agency is best for digital marketing?',
    answer:
      'Match the agency to the job. If you need Google rankings, pick a team with SEO results. If you need festive season sales, pick one strong in paid ads and Instagram. If you sell to factories, pick one that understands LinkedIn and long B2B buying cycles. Then check who will run your account and how they report.',
  },
  {
    category: 'choosing',
    question: 'How do I pick from all the "top 10 digital marketing agencies in Chennai" lists?',
    answer:
      'Many of those lists are paid listings or one writer’s view. Use them only to gather names. Call three or four agencies and ask each the same things: who handles my account, what do I receive every month, and can I see work for a firm like mine? The answers will separate them faster than any ranking.',
  },
  {
    category: 'choosing',
    question: 'How do I choose the right digital marketing agency in Chennai?',
    answer:
      'Start with your buyer. If they are retail shoppers, check the agency’s local SEO and Instagram work. If they are purchase managers at auto plants, check B2B lead generation. Then ask who does the daily work, what the monthly report contains, and whether there is a long lock-in. Clear answers on all of these are a good sign.',
  },
  {
    category: 'choosing',
    question: 'Is it worth paying a digital marketing agency in Chennai?',
    answer:
      'Yes, if the extra enquiries pay for the fee and you can trace where they came from. A good agency shows calls, forms and WhatsApp leads by source every month. Give it three to six months before judging, since SEO builds slowly. If the numbers stay flat after that, the spend is not working and you should change course.',
  },
  {
    category: 'choosing',
    question: 'Agency vs freelancer vs building my own team in Chennai: which is right?',
    answer:
      'A freelancer suits one narrow task, like a logo or a short ad campaign. An in-house team gives control, but hiring an SEO lead, an ads specialist, a designer and a writer takes months, and Chennai’s tech firms compete for the same people. An agency gives you those skills from week one. Many growing firms start with an agency and hire later.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency in Chennai actually do?',
    answer:
      'It gets the right buyers to find you online and contact you. In practice that covers your website, Google rankings (SEO), your Google Maps listing, paid ads, social posts, email or WhatsApp follow-up, and now visibility in AI tools. For a Chennai jeweller that may mean Maps and Instagram. For an auto parts maker it may mean product pages and LinkedIn.',
  },
  {
    category: 'services',
    question: 'What are the 7 types of digital marketing?',
    answer:
      'The usual seven are: SEO for free Google traffic, paid search and social ads, social media marketing, content such as blogs and videos, email and WhatsApp marketing, influencer marketing, and AI search, also called GEO. No business needs all seven at once. A Chennai restaurant might use three, while an industrial supplier might use a different three.',
  },
  {
    category: 'services',
    question: 'Which channels bring the most enquiries for Chennai businesses?',
    answer:
      'For walk-in trades in T. Nagar, Mylapore or Velachery, Google Maps and WhatsApp usually lead. For B2B suppliers on the Sriperumbudur and Oragadam belt, Google search and LinkedIn bring buyers. For hospitals and clinics, Google search, Maps reviews and AI answers matter most. Instagram helps food and fashion more than heavy industry. We choose by where your buyers already look.',
  },
  {
    category: 'services',
    question: 'Do I need SEO, ads or social media first?',
    answer:
      'Need calls this month? Start with Google Ads. Want enquiries that keep coming without paying per click? Start SEO now, since it takes months. Most Chennai firms run both at first: ads fill the gap while rankings grow, then ad spend drops. Social media comes next for consumer brands and later for B2B firms.',
  },
  {
    category: 'services',
    question: 'What is the difference between digital marketing and just running ads?',
    answer:
      'Ads are a tap you pay to keep open. The moment the budget ends, the leads end. Digital marketing also builds things that last: a website that converts, Google rankings, reviews on your Maps listing, and content AI tools can quote. Ads are one part of that plan, useful for speed, but weak on their own.',
  },
  {
    category: 'seo',
    question: 'Which is the best SEO agency in Chennai?',
    answer:
      'The best SEO agency for a Velachery clinic differs from the best one for an exporter with hundreds of product pages. Ask to see rankings they achieved in your type of business and how long it took. Avoid anyone who promises the first position on Google. Nobody controls that, and the promise itself is a warning sign.',
  },
  {
    category: 'seo',
    question: 'What does an SEO agency in Chennai actually do, in plain words?',
    answer:
      'It makes your site easy for Google to read and worth ranking. That means fixing speed and technical errors, writing pages for the exact phrases buyers type, such as "leather bag manufacturer Chennai", setting up your Google Business Profile, and earning links from trusted sites. Once those pieces work, visitors arrive every month without a fee per click.',
  },
  {
    category: 'seo',
    question: 'Do I need an SEO expert based in Chennai specifically?',
    answer:
      'No. Rankings are earned online, so location of the expert does not limit results. What matters is knowledge of Chennai search habits: area names like Anna Nagar and OMR, Tamil and Tanglish phrases, and the local competitors in your trade. Judge an SEO expert by proof of results and clear explanations.',
  },
  {
    category: 'seo',
    question: 'Is the best SEO agency always the biggest one?',
    answer:
      'No. Large SEO firms are built for enterprise sites with big budgets. A small Chennai manufacturer or retailer can end up as a low-priority account there, handled by junior staff. A smaller senior team often gives more attention per rupee. Pick the agency that will treat your account as one that matters.',
  },
  {
    category: 'local',
    question: 'Do you only work with businesses in Chennai, or across the city and its suburbs like Tambaram and Porur?',
    answer:
      'We work across the whole metro: Tambaram, Porur, Pallavaram, Avadi, Ambattur, and out to Chengalpattu and the Sriperumbudur and Oragadam industrial belt. Because the work is online, distance does not matter. A shop in Mylapore and a component maker near the highway get the same senior team.',
  },
  {
    category: 'local',
    question: 'Do you cover business areas like T. Nagar, OMR and Guindy?',
    answer:
      'Yes. We work with firms in T. Nagar, Anna Nagar, OMR, Guindy, Nungambakkam, Adyar and Velachery. Each area needs a different plan. T. Nagar retail runs on Maps, Instagram and festival timing. OMR software firms need LinkedIn and content. Guindy engineering units need product pages that procurement teams can find.',
  },
  {
    category: 'local',
    question: 'Do I need a Chennai agency, or can one from Bangalore or elsewhere do the job?',
    answer:
      'Any capable team can do the work online. What you should check is whether they understand your Chennai buyers: the areas they search from, whether they search in Tamil, and which local rivals you face. Quick replies and a properly set up Maps listing matter more than the agency’s postcode. We work with businesses across India, the US, the UK and the UAE.',
  },
  {
    category: 'local',
    question: 'Which types of Chennai businesses do you help?',
    answer:
      'Auto component and engineering suppliers, hospitals and clinics, silk saree and jewellery stores, leather and textile exporters, software and SaaS firms on OMR, restaurants and sweet shops, schools and coaching centres, real estate developers, and D2C brands. If your buyers search Google, scroll Instagram or ask ChatGPT before they decide, we can help you reach them.',
  },
  {
    category: 'results',
    question: 'How long does digital marketing take to show results in a city as competitive as Chennai?',
    answer:
      'Paid ads can bring calls within the first week. SEO usually needs three to six months, longer in crowded categories like hospitals, jewellery and real estate. Social pages take a few months to build trust. If an agency promises big results in days, treat that as a warning.',
  },
  {
    category: 'results',
    question: 'What reports will I get, and how do you measure success?',
    answer:
      'Each month you get one page: visitors, calls, form fills, WhatsApp leads, and the tasks we finished. Success is measured in enquiries and sales. Likes and impressions are side notes. If leads are not rising over a few months, we say so and change the plan.',
  },
  {
    category: 'trust',
    question: 'Who will actually do my work, seniors or freshers?',
    answer:
      'Ask every agency this before signing. A common pattern is a senior pitch followed by a trainee doing the daily work, and you only find out months later. At FactoryJet, experienced people run your account and do the work. You can ask to meet them.',
  },
  {
    category: 'trust',
    question: 'What are the red flags of a bad digital marketing agency in Chennai?',
    answer:
      'Be careful with: promises of the number-one Google spot, prices that look far too low, vague answers full of buzzwords, no examples of past work, and contracts that lock you in for a year before results. One of these is enough reason to keep looking.',
  },
  {
    category: 'ai',
    question: 'Should my Chennai business show up in AI search like ChatGPT and Google’s AI answers?',
    answer:
      'If your buyers research before they buy, yes. People already ask ChatGPT and Gemini for the best hospital, college or supplier in Chennai. Getting named in those replies is called GEO, short for generative engine optimisation. Few local agencies work on it yet, so starting now gives you a head start.',
  },
  {
    category: 'ai',
    question: 'What are GEO and AEO, and does my business need them?',
    answer:
      'GEO is getting recommended by AI chat tools. AEO, answer engine optimisation, is getting chosen for the short answer Google and AI tools show above the links. Both depend on clear, factual pages that a machine can quote. If your buyers ask questions before buying, you need them. Our free check shows whether AI tools mention you today.',
  },
  {
    category: 'choosing',
    question: 'What is the difference between a digital marketing agency and a digital marketing company in Chennai?',
    answer:
      'Mostly the word. Buyers search "digital marketing agency in Chennai" and "digital marketing company in Chennai" for the same service. "Agency" sometimes suggests creative campaigns and "company" a bigger outfit, yet neither word guarantees anything. Ask who does the work and what results they can show.',
  },
  {
    category: 'choosing',
    question: 'What are the big 4 companies in digital marketing, and do I need one for my Chennai business?',
    answer:
      'The "big 4" usually means the global advertising holding groups that serve multinational brands. They suit very large budgets. A Chennai SME, clinic or supplier would be a small account there, paying for layers it does not use. A focused senior team usually fits better.',
  },
  {
    category: 'choosing',
    question: 'Who are the top 5 marketing agencies, and are the biggest names right for a small Chennai business?',
    answer:
      'Top 5 lists change by publisher, and many are sponsored. The famous names mostly serve national brands with national budgets. A small Chennai firm usually gets more from a smaller team that knows its trade. Shortlist a few, meet the people who would run your account, and ask for results in a similar business.',
  },
  {
    category: 'services',
    question: 'Is digital marketing only for big Chennai brands, or can a small shop or startup benefit too?',
    answer:
      'Small firms often gain the most, because they can act fast. Tamil Nadu now has more than 10,000 government-recognised startups, so plenty of small Chennai businesses compete for attention. A sharp Maps listing, a quick mobile site and fast WhatsApp replies can put a single-outlet shop beside chains in local search.',
  },
  {
    category: 'services',
    question: 'Can you fix marketing that another Chennai agency set up badly?',
    answer:
      'Yes, we take over messy setups often: broken tracking, ad accounts in someone else’s name, sites that Google cannot read. First we audit what exists, keep what works and repair the rest. You get a short written list of what was wrong and what we changed.',
  },
  {
    category: 'channels',
    question: 'Do you offer social media marketing in Chennai?',
    answer:
      'Yes. We run Instagram and Facebook for restaurants, salons, saree and jewellery stores and D2C brands, and LinkedIn for software firms and industrial suppliers. Posts, reels, offers and paid boosts are planned around Chennai’s festival calendar. Because social grows slowly, we pair it with Google so buyers who search can also find you.',
  },
  {
    category: 'channels',
    question: 'Do you run Google Ads for Chennai businesses, and how fast do they work?',
    answer:
      'Yes. Google Ads place you above the organic results for the searches you choose, and leads can start on day one. They stop when spending stops. We usually run ads alongside SEO, then trim the ad budget as organic rankings take over the steady flow.',
  },
  {
    category: 'channels',
    question: 'What is performance marketing, and does my Chennai business need it?',
    answer:
      'It is paid advertising judged only by results such as calls, form fills or sales. On Google and Meta you can see what each rupee returned. It suits businesses that want measurable leads quickly, like a new clinic or a showroom before a festival sale. If it will not pay back for you, we will tell you.',
  },
  {
    category: 'channels',
    question: 'What is local SEO, and how does it get my Chennai shop onto Google Maps?',
    answer:
      'Local SEO helps nearby buyers find you. When someone in Chennai searches on a phone, Google shows a map with three businesses first. To get there, you need a complete Google Business Profile, the same name, address and phone on every listing, real photos and regular genuine reviews. For showrooms, clinics and eateries this often brings the most calls.',
  },
  {
    category: 'seo',
    question: 'Which is the best SEO company in Chennai, and is that different from an SEO agency?',
    answer:
      'The two phrases mean the same service. What differs is fit: some SEO firms specialise in local shops on Maps, others in large catalogues or B2B sites. The right one explains its work plainly, gives realistic timelines and never guarantees the top spot. Ask for an example in a trade like yours.',
  },
  {
    category: 'seo',
    question: 'What is an SEO consultant in Chennai, and do I need one?',
    answer:
      'A consultant is usually one specialist who advises while your staff do the tasks. That works if you have in-house writers and developers. If you want the fixes, pages and local listings done for you, a small team gets through far more work than one advisor.',
  },
  {
    category: 'ai',
    question: 'How can I check whether ChatGPT or Google’s AI already mentions my Chennai business?',
    answer:
      'Ask it. Type something like "best [your service] in Chennai" into ChatGPT, Gemini and Google, and see whose names appear. If yours is missing, that is a gap to close. Our free AI visibility checker does the same test across tools and shows where you stand today.',
  },
];

/* ── Structured data (server-rendered in initial HTML, so AI crawlers read it) ── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/digital-marketing/chennai#webpage',
  url: 'https://factoryjet.com/digital-marketing/chennai',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Services in Chennai',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Chennai' },
  serviceType: 'Digital Marketing',
  description:
    'Digital marketing for Chennai businesses, from T. Nagar retail to OMR tech and auto suppliers: SEO, Google Maps, paid ads, social, websites, WhatsApp and AI search.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top digital marketing agencies in Chennai (July 2026)',
  itemListElement: AGENCIES.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: a.name,
  })),
};

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL}#webpage`,
  url: CANONICAL,
  name: 'Digital Marketing Agency in Chennai | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function ChennaiDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="chennai-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="chennai-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="chennai-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="chennai-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Chennai', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Chennai', url: CANONICAL },
        ]} />
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · CHENNAI"
          headline="Digital Marketing Agency in Chennai for Shops, Clinics and Suppliers"
          lead="From T. Nagar showrooms to Oragadam component makers and OMR software firms, we get Chennai businesses onto Google, Maps and AI answers, then turn those visits into calls and WhatsApp leads."
          formSlot={<HeroInlineForm region="in" source="in_chennai_digital_marketing_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/chennai/hero.webp"
                  alt="A marketing strategist reviewing search results for a Chennai business"
                  width={832}
                  height={1216}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Working with Chennai firms
                  </p>
                  <p className="mt-0.5 font-fj-display text-sm font-semibold text-fj-ink">
                    500+ businesses, 12 years
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* Answer-first block (BLUF): the direct answer, written to be quoted by
            Google AI Overviews, ChatGPT, Gemini and Perplexity. */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              Short answer: which Chennai agency should you hire?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Pick by trade and by who does the daily work. A hospital, an auto parts supplier and a
              T. Nagar jeweller each need a different mix of search, Maps, ads and social. If you run a
              small or mid-size Chennai firm and want one senior team for site, Google, ads and AI
              answers, FactoryJet fits that brief. Further down we list the Chennai agencies that rank on
              Google, us included, and what each one suits.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across India, the US, the UK and the UAE" />

        {/* Proof band: 4 across on desktop, 2x2 on mobile, hairline dividers */}
        <section className="bg-white px-6 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-fj-ink/10 bg-fj-ink/10 md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white px-4 py-8 text-center md:px-6 md:py-12">
                  <div className="font-fj-display text-2xl font-semibold leading-none tracking-tight text-[#F05A28] md:text-[2.75rem]">
                    {s.value}
                  </div>
                  <div className="mt-3 font-fj-body text-sm font-semibold text-fj-ink">{s.label}</div>
                  <div className="mt-1.5 font-fj-body text-xs leading-relaxed text-fj-neutral-600">{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceExplanation
          eyebrow="WHAT WE DO, IN PLAIN WORDS"
          headline="What we handle for a Chennai business"
          lead="The job is simple to state. Put your business in front of Chennai buyers at the moment they search, and make it easy for them to contact you."
          body={
            <>
              <p>
                A family picking a hospital types symptoms and area names into Google. A purchase
                manager at a Sriperumbudur plant searches for vendors by part and process. A bride
                shortlists T. Nagar silk stores on Instagram. Each of them now also asks ChatGPT. We
                make sure your name appears in those searches and that the page they land on gets
                them to call or message.
              </p>
              <p>
                The tools are a quick site, SEO, a strong Maps listing, paid ads for speed, social
                posts, WhatsApp replies and AI search work. A sweet shop and an engineering exporter
                will use different parts of that list. We recommend the two or three that suit your
                buyers and tell you which ones to skip.
              </p>
            </>
          }
          rightSlot={
            <div className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#F05A28]/10" />
              <img
                src="/images/services/digital-marketing/chennai/team.webp"
                alt="Marketers planning a search and social campaign for a Chennai client"
                width={1216}
                height={832}
                loading="lazy"
                className="relative aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover shadow-sm"
              />
            </div>
          }
        />

        {/* Chennai market context: real, cited numbers that build trust with
            both AI answer engines and human readers. Outbound links resolve. */}
        <CityContextSection
          eyebrow="CHENNAI BUYERS, BY THE NUMBERS"
          headline="Chennai makes cars, treats patients and sells silk, and its buyers search first"
          leadParagraphs={[
            'Few Indian cities mix trades the way Chennai does. Car and component plants line the Sriperumbudur and Oragadam belt. Software and SaaS firms fill OMR. Hospitals draw patients from across the country and abroad. Silk and jewellery stores pack T. Nagar, while leather and textile exporters and the engineering units of Ambattur and Guindy sell to buyers worldwide.',
            'Each of those buyers searches differently. Patients compare hospitals and doctors by reviews. Plant buyers look for capability pages and certifications. Shoppers search in English, Tamil and Tanglish, often by area name. Many now ask ChatGPT for a shortlist before calling anyone.',
            'So a single channel rarely carries a Chennai business. The firms that grow pair a quick site with Google rankings, a well-kept Maps listing, same-day WhatsApp replies and pages AI tools can quote.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  If buyers cannot find you in search, they ring the next name on the list.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['T. Nagar', 'Anna Nagar', 'OMR', 'Guindy', 'Adyar', 'Velachery', 'Nungambakkam', 'Porur'].map(
                  (area) => (
                    <span
                      key={area}
                      className="inline-flex items-center rounded-full border border-[#F05A28]/25 bg-[#F05A28]/8 px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
                      style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                    >
                      {area}
                    </span>
                  ),
                )}
              </div>
            </>
          }
          stats={MARKET_STATS}
        />

        {/* Light statement band: one-team promise, keyword-rich, no pricing. */}
        <BigThreeTrustBlock
          variant="statement"
          eyebrow="ONE TEAM, EVERY CHANNEL"
          headline="SEO, Google Maps, Google Ads, social and AI search for Chennai, run by one senior in-house team"
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="EVERYTHING IN ONE PLACE"
          headline="Every channel a Chennai business needs, under one roof"
          lead="Hiring a separate SEO person, ad buyer, designer and developer takes months. Here is what our team covers instead, with a link to each service."
          sectors={CHANNELS}
        />

        {/* Second ServiceExplanation: our actual method for Chennai, alternating
            layout (card on the left) to break the rhythm. Light. */}
        <ServiceExplanation
          eyebrow="OUR APPROACH FOR CHENNAI"
          headline="Our method for Chennai clients"
          lead="A Mylapore restaurant and an Ambattur fabricator share almost nothing, so the plan begins with your buyers and the searches they make."
          reverseOnDesktop
          body={
            <>
              <p>
                Step one is research. We look at what your buyers type into Google, which rivals
                show up, and whether people in your trade search in Tamil. That tells us where the
                quickest leads are.
              </p>
              <p>
                Step two is the build, done by experienced staff. We speed up the site for mobile
                users, write pages for your products and services, complete your Maps profile, and
                connect every enquiry button to WhatsApp so leads get a reply the same day.
              </p>
              <p>
                Step three is the monthly review. You see visits, calls, forms and WhatsApp leads,
                with the work behind them. Spend shifts towards whatever is bringing buyers and away
                from whatever is not.
              </p>
            </>
          }
          rightSlot={
            <div
              className="w-full overflow-hidden rounded-2xl bg-white shadow-sm"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: '2px',
                borderTopColor: '#F05A28',
              }}
            >
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  What you get each month
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { t: 'A plan shaped by your trade', n: 'retail, clinic, factory or software' },
                  { t: 'Experienced people on the work', n: 'the same faces every month' },
                  { t: 'Google rankings and a Maps listing', n: 'profile, reviews, area pages' },
                  { t: 'WhatsApp on every enquiry button', n: 'replies the same day' },
                  { t: 'Work on AI answers', n: 'ChatGPT, Gemini and Google AI' },
                  { t: 'One-page monthly report', n: 'leads by source, tasks done' },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-3 py-3.5">
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: 'rgba(240,90,40,0.10)' }}
                      aria-hidden="true"
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.2l2.2 2.2 4.8-5"
                          stroke="#B23E13"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">{item.t}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-500">{item.n}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full" style={{ background: '#F05A28' }} aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Your buyers, your numbers, every month.
                </p>
              </div>
            </div>
          }
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs a traditional agency vs a freelancer vs your own team"
          lead="Each option suits someone. This table shows where each one is strong and weak for a Chennai firm."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
        />

        {/* "Three reasons" rendered LIGHT (was StrategicDarkSection). Keeping this
            light means Testimonials stays the single dark section on the page. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHERE CHENNAI CAMPAIGNS GO WRONG
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Three patterns that waste Chennai marketing budgets
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              When a Chennai business tells us its last agency produced few leads, the cause is
              usually one of the three below.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col rounded-2xl border border-fj-ink/10 bg-white p-6 shadow-sm"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl text-xl"
                    style={{ background: 'rgba(240,90,40,0.10)' }}
                    aria-hidden="true"
                  >
                    {p.icon}
                  </span>
                  <h3 className="mt-4 font-fj-display text-lg font-semibold text-fj-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-fj-ink/70">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page quote CTA (light). Copy overridden to stay pricing-free. */}
        <FinalCTA
          variant="light"
          eyebrow="TALK TO US"
          headline="Get a written plan for your Chennai business"
          sub="Share what you sell and who buys it. We check how you appear on Google, Maps and AI tools today and send a short plan with the first steps to take."
          primaryCta={{ label: 'Get my free growth plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
        />

        {/* Ranked-channels listicle: which channels actually bring Chennai
            businesses enquiries, informed by live Chennai search demand. Light. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              CHANNELS RANKED FOR CHENNAI
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Which channels bring Chennai businesses the most leads
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              Lists of digital marketing services in Chennai tend to sell every channel to everyone.
              Below, six channels are ordered by how reliably they bring leads to a typical Chennai
              firm, with the trades each one suits.
            </p>

            <ol className="mt-10 space-y-4">
              {CHANNELS_RANKED.map((c, i) => (
                <li
                  key={c.name}
                  className="flex gap-4 rounded-2xl border border-fj-ink/10 bg-white p-5 md:p-6"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fj-ink/5 text-sm font-bold text-fj-ink">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-fj-ink">{c.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#B23E13]">
                      Best for: <span className="font-normal text-fj-ink/75">{c.who}</span>
                    </p>
                    <p className="mt-2 leading-relaxed text-fj-ink/75">{c.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm leading-relaxed text-fj-ink/70">
              Few firms need all six. A Chennai showroom might live on Maps and WhatsApp, while an
              exporter leans on SEO and LinkedIn. We pick the mix from your buyers and drop the rest.
            </p>
          </div>
        </section>

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              CHENNAI AGENCIES SIDE BY SIDE
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Top digital marketing agencies in Chennai, by what each does best
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              This list comes from live Google rankings for Chennai digital marketing and SEO searches,
              checked in July 2026, plus each firm’s public work. FactoryJet is on it, and we mark that
              entry clearly.
            </p>

            <ol className="mt-10 space-y-4">
              {AGENCIES.map((a, i) => (
                <li
                  key={a.name}
                  className={`flex gap-4 rounded-2xl border p-5 md:p-6 ${
                    a.isUs
                      ? 'border-[#F05A28]/40 bg-[#F05A28]/5'
                      : 'border-fj-ink/10 bg-white'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      a.isUs ? 'bg-[#B23E13] text-white' : 'bg-fj-ink/5 text-fj-ink'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-fj-ink">
                      {a.name}
                      {a.isUs && (
                        <span className="ml-2 rounded-full bg-[#B23E13] px-2 py-0.5 text-xs font-semibold text-white">
                          That is us
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 leading-relaxed text-fj-ink/75">
                      <span className="font-semibold text-fj-ink">Best for: </span>
                      {a.bestFor}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm leading-relaxed text-fj-ink/70">
              Every firm here does real work for real clients. The "best for" notes are our reading of
              their public portfolios and Chennai rankings. Choose the one whose strengths match your
              trade and buyers.
            </p>
          </div>
        </section>

        <ServiceJourneyRow
          eyebrow="HOW WORKING WITH US FEELS"
          headline="How an engagement runs, in five steps"
          lead="Here is the order of work for a new Chennai client, from first call to monthly review."
          stages={JOURNEY}
          closingNote="5 SIMPLE STEPS · SENIOR TEAM · HONEST MONTHLY REPORTS"
        />

        {/* Reach across Chennai (plain language + safe internal links to hubs). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              Where in Chennai we work
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Our clients sit all over the city: retailers in T. Nagar and Anna Nagar, tech firms on
              OMR, engineering units in Guindy, clinics in Adyar and Nungambakkam, and restaurants in
              Velachery and Porur. Whether you need to{' '}
              <a href="/seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                get found on Google
              </a>
              , build a{' '}
              <a href="/web-design" className="font-semibold text-[#B23E13] underline underline-offset-2">
                website that sells
              </a>
              , open an{' '}
              <a
                href="/services/ecommerce-development"
                className="font-semibold text-[#B23E13] underline underline-offset-2"
              >
                online store
              </a>
              , add a{' '}
              <a
                href="/services/ai-agent-development"
                className="font-semibold text-[#B23E13] underline underline-offset-2"
              >
                chatbot that never sleeps
              </a>
              , or get picked by{' '}
              <a href="/ai-seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                AI search
              </a>
              , the same senior team handles it.{' '}
              You can also see{' '}
              <a href="/digital-marketing" className="font-semibold text-[#B23E13] underline underline-offset-2">
                how the top agencies in India compare
              </a>
              , with us included openly.
            </p>
          </div>
        </section>

        <TestimonialsSection
          eyebrow="REAL RESULTS"
          headline="Feedback from business owners we work with"
          region="in"
        />

        <FAQ
          eyebrow="CHENNAI BUYER QUESTIONS"
          headline="Questions about hiring a digital marketing agency in Chennai"
          lead="Drawn from what Chennai owners type into Google, with direct answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="Find out where Chennai buyers are choosing a rival"
          sub="Book a free call. We review your site, Maps listing and AI visibility against your Chennai competitors and tell you what would bring more leads. You keep the advice either way."
          primaryCta={{ label: 'Get My Free Growth Plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
          objectionHandler="Free call. No lock-in. A plan you can use even without us."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
