import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';

const CANONICAL = 'https://factoryjet.com/au/dental-website-design';
const UPDATED = '2026-09-26';
const TITLE = 'Dental Website Design & Dental SEO Australia | FactoryJet';
const H1 = 'Dental Website Design and Dental SEO for Australian Practices, Built Around the AHPRA Rules';
const DESCRIPTION =
  'Dental website design and dental SEO for Australian practices: AHPRA-aware content, online booking into your practice software, and support after launch.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Dental Website Design', url: CANONICAL },
];

/* ─── External sources, fetch-verified 2026-09-26 (HTTP 200) ────────── */
// Ahpra, Guidelines for advertising a regulated health service (revised,
// effective 14 Dec 2020). s133 National Law; testimonials; gifts, discounts and
// offers must state terms and conditions; "The public generally consider the
// word 'free' to mean 'absolutely' free"; 'before and after' images "have the
// potential to be misleading or deceptive" with a list of conditions that make
// them less likely to mislead; urgency phrases such as 'for a limited time only';
// 'specialist', 'specialises in' wording.
const SRC_AHPRA_GUIDE =
  'https://www.ahpra.gov.au/Resources/Advertising-hub/Advertising-guidelines-and-other-guidance/Advertising-guidelines.aspx';
// Ahpra, testimonial tool: testimonial = positive statements about clinical
// aspects (symptom, diagnosis or treatment, outcome); "comments about customer
// service or communication style that do not include a reference to clinical
// aspects are not considered testimonials"; advertisers "do not have to remove or
// try to remove a review on a website or in social media over which they do not
// have control"; take care engaging with reviews on third-party sites.
const SRC_AHPRA_TESTIMONIALS =
  'https://www.ahpra.gov.au/Resources/Advertising-hub/Resources-for-advertisers/Testimonial-tool.aspx';
// OAIC, small business: health service providers covered by the Privacy Act
// regardless of turnover.
const SRC_OAIC_SMALL = 'https://www.oaic.gov.au/privacy/privacy-for-organisations/small-business';
// OAIC, APP quick reference: APP 5 notification of collection; APP 11 security
// of personal information.
const SRC_OAIC_APPS =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference';
// Google Business Profile Help, local ranking: relevance, distance, prominence;
// "More reviews and positive ratings can help your business's local ranking."
const SRC_GOOGLE_LOCAL = 'https://support.google.com/business/answer/7091?hl=en-AU';
// Google Business Profile (AU): "Yes, creating a Business Profile and listing
// your business on Google is free."
const SRC_GOOGLE_GBP = 'https://www.google.com/intl/en_au/business/';
// W3C WAI, WCAG overview: WCAG 2.2 published 5 October 2023.
const SRC_WCAG = 'https://www.w3.org/WAI/standards-guidelines/wcag/';
// W3C WAI policy register, Australia: Disability Discrimination Act 1992, scope
// includes the private sector; AHRC guidelines on equal access to digital goods
// and services.
const SRC_W3C_AU = 'https://www.w3.org/WAI/policies/australia';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'design',  label: 'Dental website design' },
  { key: 'seo',     label: 'Dental SEO and getting found' },
  { key: 'ahpra',   label: 'AHPRA advertising rules' },
  { key: 'tech',    label: 'Booking, privacy & accessibility' },
  { key: 'working', label: 'Cost, timing & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Dental website design ──
  { category: 'design', question: 'What makes a good dental website?',
    answer: 'A good dental website answers three questions within seconds: can this practice help me, is it near me, and can I book now. That means clear treatment pages written in plain English, real photos of your team and rooms, your address, hours and parking, health fund and payment details, and a booking button on every page. It loads fast on a phone, works for people with low vision, and follows the AHPRA advertising rules.' },
  { category: 'design', question: 'How do I create a dental website?',
    answer: 'Start with the patients you want more of, then plan the pages: home, one page per main treatment, new patients, emergency dental, team, fees and health funds, contact and booking. Collect real photos of your team and practice. Write the copy in plain English and check it against the AHPRA guidelines. Then choose a platform, connect online booking, set up Google Business Profile, and test everything on a phone before launch.' },
  { category: 'design', question: 'What are some good ideas for a dental website?',
    answer: 'The ideas that help patients most: an emergency dental page that says what to do and how to reach you, a new patient page covering the first visit step by step, short videos of your dentists explaining common treatments, a clear page on health funds and payment options, a nervous patients page, virtual tour photos of the practice, and a booking button that shows real available times from your practice software.' },
  { category: 'design', question: 'What do the best designed dental websites have in common?',
    answer: 'They feel calm and personal rather than clinical. They use real photos instead of stock smiles, keep navigation short, put booking and contact in easy reach on mobile, and explain treatments without jargon. They avoid claims they cannot back up, testimonials about clinical results and before-and-after galleries that break the AHPRA rules. Most importantly, they load fast and make booking take less than a minute.' },
  { category: 'design', question: 'Should a multi-location practice have one website or several?',
    answer: 'Usually one website with a strong page for each location. One domain builds search authority faster, is easier to keep compliant, and costs less to maintain. Each location page gets its own address, hours, team, parking, directions, photos and booking link, and matches its own Google Business Profile. Separate websites only make sense when locations trade under different brands or serve very different patients.' },
  { category: 'design', question: 'Can you take over our existing dental website?',
    answer: 'Yes. We start with a review of what you have: hosting, platform, speed, content, search rankings, booking setup, and AHPRA compliance. Then we recommend either improving it or rebuilding it, and explain why. If we rebuild, we keep the pages and addresses that already bring traffic, or redirect them properly, so you do not lose the Google rankings you have earned. You keep full ownership throughout.' },

  // ── Dental SEO ──
  { category: 'seo', question: 'What is SEO in dentistry?',
    answer: 'Dental SEO (search engine optimisation) is the work that helps your practice appear when local people search Google for a dentist, a treatment or an emergency appointment. It covers your Google Business Profile, a fast and well-built website, one clear page per treatment and location, reviews, links from other local websites, and now also how AI assistants such as ChatGPT and Google AI Overviews describe your practice.' },
  { category: 'seo', question: 'How do we show up in Google Maps for "dentist near me"?',
    answer: 'Google says local results are based on relevance, distance and prominence. You cannot change distance, but you can work on the other two: a complete, accurate Google Business Profile with the right categories, hours and photos; a website page for each location that matches it; consistent practice details across directories; and steady, genuine reviews, which Google says can help local ranking.' },
  { category: 'seo', question: 'Is Google Business Profile free?',
    answer: 'Yes. Google states that creating a Business Profile and listing your business on Google is free. It is also the single most important listing for a dental practice, because it drives the map results for searches such as "dentist near me". The work is in keeping it complete and accurate: categories, services, hours, holiday hours, photos, booking link, and answering questions patients post.' },
  { category: 'seo', question: 'What is local SEO for a dental practice?',
    answer: 'Local SEO for dentists is the part of dental SEO that wins patients within driving distance: the Google Maps results and the "dentist near me" searches. It means a complete Google Business Profile for each location, a website page per location that matches it, consistent details across directories, and a steady flow of genuine reviews handled within the AHPRA rules. For most single-location practices it is the highest-return SEO work there is. Our local SEO page explains how we run it.',
    links: [{ href: '/au/local-seo', label: 'Local SEO services in Australia' }, { href: SRC_GOOGLE_LOCAL, label: 'Google: how local results are ranked' }] },
  { category: 'seo', question: 'How long does dental SEO take to work?',
    answer: 'Fixes to your Google Business Profile and website can show results within weeks. Ranking treatment pages for competitive suburbs usually takes several months of steady work, and longer in dense city areas where many practices compete. Anyone promising first place on Google by a date is guessing. We agree what to measure up front, such as calls, bookings and map views, and report on those.' },
  { category: 'seo', question: 'Is SEO worth the money for a dental practice?',
    answer: 'For most practices, yes, because a new patient often stays for years and many of them start with a Google search. It is less worth it if your books are already full, or if your website cannot turn visitors into bookings. That is why we fix the website and booking path first. Paying for traffic that lands on a slow page with no booking button wastes the investment.' },
  { category: 'seo', question: 'Can I do SEO for my dental practice myself?',
    answer: 'You can do a lot yourself: keep your Google Business Profile complete, add real photos, reply to reviews without discussing clinical details, and keep hours accurate. The harder parts are technical fixes, structured data, writing treatment pages that rank and still follow the AHPRA rules, and earning links from other websites. Many practices do the basics in-house and bring us in for the rest.' },
  { category: 'seo', question: 'Can ChatGPT do SEO for a dental practice?',
    answer: 'It can help draft ideas and outlines, but it cannot do SEO on its own. It does not know your practice, cannot see your Google Business Profile or rankings, and can write claims that break the AHPRA advertising rules. Every word on a dental website needs checking by someone who understands both search and health advertising. We use AI tools to speed up research, then write and review by hand.' },
  { category: 'seo', question: 'Will SEO be replaced by AI?',
    answer: 'Search is changing, not disappearing. Google now shows AI Overviews on many searches, and some patients ask ChatGPT or Perplexity which dentist to see. Those tools still draw on websites, business listings and reviews. A practice with clear, accurate, well-structured pages is more likely to be described correctly. That work is called AI SEO, and it builds on normal SEO rather than replacing it.' },
  { category: 'seo', question: 'Who is the best dental marketing agency in Australia?',
    answer: 'There is no single best one. Dental-only agencies know the industry well and often offer ready-made templates. General agencies may bring stronger engineering or search skills. The best fit depends on whether you need a quick template site, a custom build that connects to your practice software, or ongoing SEO. We list several Australian options further down this page, including us, so you can compare.' },
  { category: 'seo', question: 'How do I get more new dental patients from my website?',
    answer: 'Make booking easier and make the practice easier to find. In practice that means online booking with real available times, a click-to-call button on mobile, clear new patient and emergency pages, health fund information, and fast loading. Then make sure Google Business Profile, your treatment pages and your location pages all match. Small fixes to the booking path often help more than a redesign.' },

  // ── AHPRA ──
  { category: 'ahpra', question: 'What are the AHPRA guidelines for advertising regulated health services?',
    answer: 'They are Ahpra’s guidance on section 133 of the National Law, which sets what registered health practitioners, including dentists, can and cannot say in advertising. Your website and social media count as advertising. The main rules: nothing false, misleading or deceptive; no testimonials about clinical aspects; offers must state their terms and conditions; no unreasonable expectation of beneficial treatment; and no encouraging unnecessary use of services.' },
  { category: 'ahpra', question: 'Can a dental website show patient testimonials?',
    answer: 'Not about clinical care. Ahpra defines a testimonial as a positive statement about clinical aspects of a health service: the symptom or reason for treatment, the diagnosis or treatment, or the outcome or the practitioner’s skill. Those cannot be used in advertising. Ahpra says comments about customer service or communication style that do not mention clinical aspects are not testimonials, so a comment about friendly staff or easy parking can be used.' },
  { category: 'ahpra', question: 'Can we show our Google reviews on our website?',
    answer: 'Only with care. Patients are free to post reviews on Google, and Ahpra says you do not have to remove reviews on sites you do not control. But once you reuse a review on your own website or social media, it becomes your advertising. A review that mentions a treatment or result is then a testimonial. That is why we do not build automatic review feeds that pull every comment onto your pages.' },
  { category: 'ahpra', question: 'Can we use before-and-after photos on our website?',
    answer: 'Ahpra says to take care, because before-and-after images can mislead and create unreasonable expectations. It says they are less likely to mislead when both images match in angle, background, framing, lighting and exposure, posture and clothing are consistent, any editing is explained, and the treatment is the only visible change. Many practices decide to leave them out entirely. We help you make that decision.' },
  { category: 'ahpra', question: 'Can we advertise discounts or free check-ups?',
    answer: 'You can advertise an offer only if the advertisement also states its terms and conditions, according to Ahpra’s guidelines. Ahpra also notes that the public takes "free" to mean absolutely free, so an offer recovered through higher prices elsewhere is not really free. Phrases such as "for a limited time only" can also be a problem when linked to claims that someone’s health will suffer if they wait.' },
  { category: 'ahpra', question: 'Can we describe our dentists as specialists?',
    answer: 'Only dentists who hold specialist registration in a recognised dental specialty should be described that way. Ahpra’s guidelines say words such as "specialist", "specialises in", "specialty" or "specialised" are likely to make the public believe a practitioner holds specialist registration. A general dentist with a strong interest in implants can say they have a special interest or experience in that area, stated accurately.' },

  // ── Booking, privacy, accessibility ──
  { category: 'tech', question: 'Can patients book online straight into our practice software?',
    answer: 'Usually yes. Most Australian dental practice software, such as Dental4Windows from Centaur Software, Praktika, Core Practice and EXACT from Software of Excellence, offers online booking or works with booking platforms such as HotDoc. We connect that booking tool to your website so patients see real available times, choose the right appointment type, and the booking lands in your appointment book without re-typing.' },
  { category: 'tech', question: 'What software do most dental practices in Australia use?',
    answer: 'Common practice management systems in Australia include Dental4Windows (Centaur Software), Praktika, Core Practice and EXACT (Software of Excellence). Many practices also use a separate online booking or reminder platform. Before we plan your website we find out which system you use, what online booking it supports, and which appointment types you want patients to book themselves.' },
  { category: 'tech', question: 'How should a dental website handle patient health information?',
    answer: 'With extra care, because the OAIC says health service providers are covered by the Privacy Act whatever their turnover. Keep website forms short and avoid asking for clinical detail in a general contact form. Let the booking system hold appointment data, use secure hosting, tell people what you collect and why (APP 5), and protect what you hold (APP 11). Your privacy policy should match what the website really does.' },
  { category: 'tech', question: 'Does a dental website need to meet accessibility standards?',
    answer: 'It should. The Disability Discrimination Act 1992 applies to private businesses as well as government, and a website is one of the ways a practice provides its services. The usual benchmark is the Web Content Accessibility Guidelines (WCAG), now at version 2.2. We build to WCAG 2.2 AA: readable contrast, text that resizes, keyboard access, labelled forms and descriptive image text.' },
  { category: 'tech', question: 'Is there an AI dental receptionist available in Australia?',
    answer: 'Yes. Several providers offer AI receptionists for clinics, and we build custom ones for the admin side only: new patient enquiries, check-up and hygiene bookings, changes, and questions you have approved answers for. Pain, swelling and emergencies go straight to your team. It never gives clinical advice. See our AI receptionist page for how it connects to your booking system.' },

  // ── Cost, timing, working with us ──
  { category: 'working', question: 'How much does a dental website cost in Australia?',
    answer: 'It depends on scope. The main drivers are the number of pages (one per treatment and location adds up), custom design versus a template, online booking and practice software connection, copywriting and AHPRA review, photography, accessibility, and ongoing support. We quote a fixed price for your scope after a short call. For typical Australian market ranges, read our website cost guide.' },
  { category: 'working', question: 'How much does dental SEO or dental marketing cost?',
    answer: 'It depends on how competitive your suburbs are, how many locations and treatments you want to rank for, the state of your website, and whether you also want paid ads. Dental SEO is usually a monthly engagement after an initial setup. We scope it on a call and show exactly what each part covers. For Australian market ranges, see our SEO cost guide.' },
  { category: 'working', question: 'How long does it take to build a dental website?',
    answer: 'A small site of up to five pages can be delivered in 7 days once content and photos are ready. Most practice websites are larger, with a page per treatment and location, and take a few weeks including copy, AHPRA review, booking setup and testing. Across our projects we deliver on time 97% of the time, and we give you a clear timeline before we start.' },
  { category: 'working', question: 'Do we own the website you build?',
    answer: 'Yes. The design, content, code, photos we arrange and all accounts, including domain, hosting, Google Business Profile and analytics, are in your practice’s name. If you later want to manage it in-house or move to another company, you can take everything with you. We would rather keep you because the support is good than because leaving is hard.' },
  { category: 'working', question: 'Do you look after the website after launch?',
    answer: 'Yes, if you want us to. Ongoing care covers updates, security, backups, speed checks, new pages when you add a dentist or treatment, content checks when the AHPRA guidance changes, and SEO reporting. The same team that built the site supports it, so you are never explaining your practice to a stranger. See our website maintenance page for what that includes.' },
];

/* ─── Named Australian providers (open self-disclosure, ItemList). Notes are
       based on each company’s own website, fetched 2026-09-26. ───────── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We design and build custom dental websites, connect online booking to your practice software, handle dental SEO and AI search, and support the site after launch. Founder involved on every project, and you own what we build.' },
  { name: 'Great Dental Websites', note: 'A dental-only website design and digital marketing company that says it works with dental practices around the world.' },
  { name: 'Dentist Web Design', note: 'An Australian dental marketing company offering dentist website design, SEO and marketing, focused on patient bookings.' },
  { name: 'Dental Website Design Australia (360 Websites)', note: 'An Australian studio that builds custom, SEO-focused websites for dental clinics.' },
  { name: 'Practice Edge', note: 'An Australian healthcare marketing agency offering dental web design and SEO, which describes its services as Ahpra-compliant.' },
  { name: 'Mediboost', note: 'An Australian medical marketing agency focused on healthcare SEO, including dental SEO, for practices wanting more leads.' },
  { name: 'Dental Focus Marketing', note: 'A dental marketing company with an Australian service offering dental SEO and marketing.' },
  { name: '23 Digital', note: 'An Australian web design and digital agency that publishes dental web design guidance alongside its general web design services.' },
  { name: 'StudioHawk', note: 'An Australian SEO and AI search agency with a dedicated SEO for dentists service.' },
];

/* ─── JSON-LD. Organization referenced by @id only. ─────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Dental Website Design and Dental SEO Australia',
      serviceType: 'Dental website design, dental web development, online booking integration and dental SEO',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      audience: { '@type': 'BusinessAudience', audienceType: 'Dental practices and dental clinics' },
      url: CANONICAL,
      description:
        'Custom dental website design and dental SEO for Australian practices. AHPRA-aware content, online booking connected to dental practice software, local SEO and Google Business Profile, WCAG 2.2 AA accessibility, Privacy Act-aware forms, and support after launch. The practice owns everything.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: '2026-09-26',
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      citation: [SRC_AHPRA_GUIDE, SRC_AHPRA_TESTIMONIALS, SRC_OAIC_SMALL, SRC_WCAG],
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#providers`,
      name: 'Australian dental website design and dental SEO providers',
      itemListElement: PROVIDERS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Dental website design and dental SEO for Australian practices. Real photos, online booking into your practice software, content checked against the AHPRA advertising guidelines, and support after launch.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/dental-website-design/dental-website-og.webp', width: 1200, height: 630, alt: 'Dental website design Australia: a Melbourne practice owner reviewing her new dental website on a laptop' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* "Can we put this on our website?" checker. Rendered as <details> so it
   needs no client component. */
const AHPRA_CHECK: { q: string; verdict: string; a: string }[] = [
  { q: '"Dr Lee fixed my toothache in one visit and my smile has never looked better."', verdict: 'Not in your advertising', a: 'It names a symptom (toothache), a treatment and an outcome. Under Ahpra’s definition that is a testimonial about clinical aspects, so it cannot appear on your website, social media or ads, even if the patient wrote it freely.' },
  { q: '"The front desk team were lovely and there is always parking out the back."', verdict: 'Generally fine', a: 'Ahpra says comments about customer service or communication style that do not refer to clinical aspects are not testimonials. A comment about friendly staff, a calm waiting room or easy parking can be used, as long as it is genuine and not edited to change its meaning.' },
  { q: 'A before-and-after gallery of whitening results.', verdict: 'Take care, or leave it out', a: 'Ahpra warns these images can mislead. If you use them, the photos must match in angle, background, framing, lighting and exposure, any editing must be explained, and the treatment must be the only visible change. Many practices decide the risk is not worth it.' },
  { q: '"Free check-up for new patients. Book now, limited time only!"', verdict: 'Rewrite it', a: 'An offer must state its terms and conditions in the same advertisement. Ahpra notes the public reads "free" as absolutely free, and urgency phrases such as "limited time only" can be unlawful when linked to suggestions that health will suffer. State the terms plainly and drop the pressure.' },
  { q: '"Dr Patel specialises in dental implants."', verdict: 'Only with specialist registration', a: 'Words such as "specialist" or "specialises in" suggest specialist registration. If the dentist is a general dentist, say something accurate instead, such as "has a special interest in implant dentistry" or describe their training and experience factually.' },
  { q: 'An automatic feed that shows every new Google review on the home page.', verdict: 'Not as built by default', a: 'Patients can post what they like on Google. Once you pull those reviews onto your own site, they become your advertising, and any review mentioning a treatment or result becomes a testimonial. We link to your Google profile instead of embedding an unfiltered feed.' },
];

const MUST_HAVES: { t: string; d: string }[] = [
  { t: 'A booking button on every page', d: 'Fixed at the bottom of the screen on mobile, linked to real available times in your practice software, so booking takes under a minute.' },
  { t: 'A page for each treatment', d: 'Check-ups and cleans, fillings, crowns, implants, clear aligners, children’s dentistry, whitening and emergency care, each explained in plain English with what to expect, not promises.' },
  { t: 'A page for each location', d: 'Address, hours, parking, public transport, team, photos and a booking link that matches the Google Business Profile for that location.' },
  { t: 'A new patient page', d: 'What happens at the first visit, what to bring, how long it takes, and how health fund claiming works on the day.' },
  { t: 'An emergency dental page', d: 'What counts as an emergency, what to do right now, and how to reach you in and out of hours. Patients in pain search for this on their phones.' },
  { t: 'Fees, health funds and payment options', d: 'Which funds you are preferred providers for, whether you offer on-the-spot claiming, and payment plans, with terms stated clearly.' },
  { t: 'Real photos of your team and rooms', d: 'Stock smiles look like every other practice. Patients, especially nervous ones, want to see who they will meet and where they will sit.' },
  { t: 'A page for nervous patients', d: 'How your team helps anxious patients, what sedation options exist, and that they can ask for breaks. Reassurance, not guarantees.' },
  { t: 'Fast loading on a phone', d: 'Compressed images, lean code and good hosting. Most people looking for a dentist are on a mobile, often on the way somewhere.' },
  { t: 'Accessible to everyone', d: 'Readable contrast, text that resizes, keyboard access, labelled forms and image descriptions, built to WCAG 2.2 AA.' },
];

const SEO_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Audit what you have', d: 'We check your Google Business Profile, website speed, technical health, current rankings and the pages that already bring patients, so we protect what works before changing anything.' },
  { n: '02', t: 'Fix Google Business Profile', d: 'Correct categories, services, hours and holiday hours, booking link, photos and practice description for every location. This drives the map results for "dentist near me" searches.' },
  { n: '03', t: 'Build treatment and location pages', d: 'One strong page per treatment and per location, written for the way patients search, such as "emergency dentist Parramatta" or "children’s dentist Brisbane", and checked against the AHPRA guidelines.' },
  { n: '04', t: 'Technical and structured data', d: 'Fast pages, clean site structure, and structured data (code that tells Google your practice name, address, hours and services in a format it reads directly).' },
  { n: '05', t: 'Reviews and local links', d: 'A simple, compliant process to ask patients for genuine Google reviews, and links from local organisations, suppliers and community groups you already work with.' },
  { n: '06', t: 'AI search and reporting', d: 'We check how ChatGPT, Perplexity and Google AI Overviews describe your practice and fix what they get wrong. Monthly reports track calls, bookings and map views, not just rankings.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/seo', t: 'SEO services in Australia', d: 'Our full SEO service for Australian businesses: technical SEO, content and local search, beyond dental.' },
  { href: '/au/ai-seo', t: 'AI SEO', d: 'Get your practice described correctly when patients ask ChatGPT, Perplexity or Google AI for a dentist.' },
  { href: '/au/ai-receptionist', t: 'AI receptionist', d: 'An AI receptionist for the admin side of the front desk: bookings, changes and routine questions, with emergencies passed to your team.' },
  { href: '/au/website-maintenance', t: 'Website maintenance and care plans', d: 'Updates, security, backups, speed and content checks, by the same team that built your site.' },
  { href: '/au/websites-for-tradies', t: 'Websites for tradies', d: 'Another industry we build for, with a very different booking and search pattern.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian businesses: ecommerce, websites, AI agents and AI search.' },
];

/* Practice types (capability grid). Icons and visual-slot subjects share its order. */
const PRACTICE_TYPES: { t: string; d: string }[] = [
  { t: 'Single-location general practices', d: 'A focused site with strong treatment pages, a new patient page, online booking and a Google Business Profile that works hard for your suburb.' },
  { t: 'Multi-location groups', d: 'One domain with a page per location, each with its own hours, team, booking link and matching Google profile, plus consistent content that is easy to keep compliant.' },
  { t: 'Specialist practices', d: 'Orthodontists, periodontists, endodontists and oral surgeons, with referral information for dentists and titles used exactly as registration allows.' },
  { t: 'Family and children’s dentistry', d: 'Parent-friendly pages, family booking back to back, and clear information about child dental benefit and health fund options you accept.' },
  { t: 'Cosmetic and implant dentistry', d: 'Higher-value treatments where the Ahpra rules on images, offers and expectations matter most. Careful copy, honest imagery and a consult request path.' },
  { t: 'Medical and allied health', d: 'The same approach to medical website design for GPs, physios and other clinics under the same national advertising law.' },
];
const PRACTICE_ICONS = [
  'M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  'M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1M9 13h1m4 0h1M9 17h1m4 0h1',
  'M6 3v6a4 4 0 0 0 8 0V3m-4 10v3a5 5 0 0 0 10 0v-2m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z',
  'M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z',
] as const;
const PRACTICE_SUBJECTS = [
  'AI-generated model: a single white practice building on a suburb map with an orange booking pin',
  'AI-generated model: three white practice buildings linked to one domain card, each with its own orange location tag',
  'AI-generated model: a white referral form card passing from a general practice model to a specialist practice model',
  'AI-generated model: a white calendar with two back-to-back orange appointment blocks for a parent and child',
  'AI-generated model: a white consult request card beside an honest, unedited photo frame with no before-and-after pair',
  'AI-generated model: a row of white clinic models for a GP, a physio and a dental practice under one orange guideline card',
] as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'dental-website-design';

/* Visible hero heading, kept to about four lines at 62px so the inline form starts in the first
   desktop screen. H1 above stays the schema headline; the rest of it opens the hero lead, so no
   copy is lost. */
const HERO_H1_LEAD = 'Dental Website Design and Dental SEO for';
const HERO_H1_EMPHASIS = 'Australian Practices';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function DentalWebsiteDesignAUPage() {
  return (
    <>
      <script id="ld-au-dental-website-design" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Dental Website Design Australia</div>
              <h1>{HERO_H1_LEAD} <span className="hero-emphasis">{HERO_H1_EMPHASIS}</span></h1>
              <p className="lead">
                Built around the AHPRA rules. FactoryJet designs and builds dental websites for Australian practices,
                then helps patients find them. Your site gets real photos, clear treatment pages, online booking straight
                into your practice software, local dental SEO, and copy checked against the Ahpra advertising guidelines.
                We support it after launch, and your practice owns all of it.
              </p>
              <HeroInlineForm region="au" source="au_dental_website_hero" submitLabel="Plan my dental website" />
            </div>

            <form
              className="specpanel"
              aria-label="What every practice site we build does"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The three things every dental practice site does: books into the practice software, copy checked against Ahpra guidance, built to be found locally"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT EVERY PRACTICE SITE WE BUILD DOES</span>
                <span className="sys"><span>DENTAL SEO</span><span>AHPRA-AWARE</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what every practice site does">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="dental-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /></svg></span>
                  <span className="idx">real available times, on any phone</span>
                  <span className="title">Books into your practice software</span>
                  <span className="tag">Live</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="dental-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 0v6h6M9 15l2 2 4-4" /></svg></span>
                  <span className="idx">testimonials, offers, images, titles</span>
                  <span className="title">Copy checked against Ahpra guidance</span>
                  <span className="tag">Every page</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="dental-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={PRACTICE_ICONS[0]} /></svg></span>
                  <span className="idx">Google Maps, search and AI answers</span>
                  <span className="title">Built to be found locally</span>
                  <span className="tag">Day one</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Every page is reviewed with a dentist from your practice before it goes live.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band; verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: 'No clinical', t: 'testimonials in health advertising, including your own website and social media', s: 'Ahpra, testimonial guidance', u: SRC_AHPRA_TESTIMONIALS },
              { v: 'Any size', t: 'health service providers are covered by the Privacy Act, whatever their turnover', s: 'OAIC, small business', u: SRC_OAIC_SMALL },
              { v: 'Free', t: 'to create a Google Business Profile, the listing behind "dentist near me" map results', s: 'Google Business Profile', u: SRC_GOOGLE_GBP },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />26 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) → Family A facts ═══ */}
        <section className="section facts" id="answer">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does good dental website design look like in Australia?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">Good dental website design makes booking easy and trust obvious.</span> Patients see real photos, plain-English
                    treatment pages, location details and a booking button that shows live times from your practice software.
                    In Australia it must also follow the Ahpra advertising rules: no clinical testimonials, clear terms on any
                    offer, and no misleading claims or images.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Four terms we use on this page</div>
                    <p>
                      <b>Ahpra</b> is the Australian Health Practitioner Regulation Agency, which works with the Dental Board of
                      Australia. <b>Section 133 of the National Law</b> is the law that sets the rules for advertising a health
                      service, and your website counts as advertising. <b>Dental SEO</b> means helping your practice show up when
                      local people search for a dentist. <b>Practice management software</b> is the system that holds your
                      appointment book, such as Dental4Windows, Praktika, Core Practice or EXACT.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most dental website design in Australia comes from two places: dental-only agencies with ready-made
                    templates, and general web agencies that treat a practice like any other small business. Templates are quick
                    but look like the practice down the road. General agencies often miss the health advertising rules. We sit in
                    between: a custom dentist website design built around your patients, your practice software and the Ahpra
                    guidance, with SEO planned from the first page rather than bolted on later.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A dental practice owner reviewing her new dental website on a laptop, a treatment room behind the glass wall">
                <img src="/images/au/dental-website-design/dental-website-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="Over the shoulder of a Melbourne dental practice owner reviewing her new dental website on a laptop, with a treatment room behind the glass wall" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ TEN MUST-HAVES (listicle) → facts rows + "leave off" group ═══ */}
        <section className="section facts" id="must-haves">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What makes a good dental website</div>
              <h2>10 things every dental practice website needs</h2>
              <p className="lead">
                These come from the questions Australian patients actually search, and the pages that practices most
                often leave out. Use it as a checklist for your current site, whoever built it.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist" role="list">
                {MUST_HAVES.map((m, i) => (
                  <div key={m.t} className="fact" role="listitem">
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <p><b>{m.t}.</b> {m.d}</p>
                  </div>
                ))}
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A dentist in scrubs photographing her practice's bright waiting room for the new website"
                caption="Real photos of your rooms and team do more for trust than any stock smile, and they are honest, which matters under the Ahpra rules.">
                <img src="/images/au/dental-website-design/dental-website-photos.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Sydney dentist in navy scrubs photographing her practice’s bright waiting room for the new website, with a softbox light beside her" />
              </VisualSlot>
            </div>
            <div className="agentdir-group chg-group span-all">
              <div className="agentdir-label"><span className="capid">GRP‑01</span><h3>What to leave off</h3></div>
              <ul className="chg-list">
                <li><span><b>Patient stories about results.</b> They are testimonials under the National Law.</span></li>
                <li><span><b>Unqualified before-and-after galleries.</b> High risk of misleading patients.</span></li>
                <li><span><b>&quot;Pain-free&quot; or &quot;guaranteed&quot; claims.</b> They create unreasonable expectations.</span></li>
                <li><span><b>Countdown offers.</b> Urgency tied to health is a red flag for Ahpra.</span></li>
                <li><span><b>Stock photos of strangers.</b> Patients notice, and it undercuts trust.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ AHPRA RULES → facts ═══ */}
        <section className="section facts" id="ahpra">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The Ahpra advertising guidelines, in plain English</div>
              <h2>What a dental website can and cannot say under the Ahpra advertising rules</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Section 133 of the Health Practitioner Regulation National Law says a person must not advertise a
                  regulated health service in a way that is false, misleading or deceptive. Ahpra and the National
                  Boards, including the Dental Board of Australia, explain what that means in the Guidelines for
                  advertising a regulated health service. Your website, Google Business Profile posts, social media and
                  emails to patients all count as advertising.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Testimonials.</b> Ahpra defines a testimonial as a positive statement about the clinical aspects of
                  a health service: the symptom or reason for treatment, the diagnosis or treatment, or the outcome or
                  the practitioner’s skill. These cannot be used in advertising. Comments about customer service or
                  communication style that do not mention clinical aspects are not testimonials, so a kind word about
                  your front desk is fine.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Reviews.</b> Patients can post reviews on Google and other sites, and Ahpra says you do not have to
                  remove reviews on sites you do not control. The line is crossed when you reuse a clinical review in
                  your own advertising. Ahpra also advises care when engaging with reviews on third-party sites, because
                  that may be treated as using a testimonial to advertise.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>Offers, images and titles.</b> Offers must state their terms and conditions. Before-and-after
                    images need to be consistent and honest, or left out. Urgency such as &quot;limited time only&quot;
                    is risky when linked to health. And words like &quot;specialist&quot; suggest specialist registration.
                    Whoever controls the advertising is responsible for it, including content written by a marketing
                    agency. So we write every page with these rules in mind, and you approve it.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_AHPRA_GUIDE} {...extLink}>Ahpra, Guidelines for advertising a regulated health service</a>;{' '}
                    <a href={SRC_AHPRA_TESTIMONIALS} {...extLink}>Ahpra, testimonials and reviews</a>. General information, not legal advice. Check specific cases with Ahpra, your indemnity insurer or your professional association.
                  </p>
                </div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AHPRA CHECKER (<details>) → vlog ═══ */}
        <section className="vlog" id="ahpra-check">
          <div className="wrap">
            <div className="section-head">
              <h2>Can we put this on our website? Tap to check</h2>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A dentist and a FactoryJet content strategist reviewing website copy together on a laptop in a practice staff room"
                caption="Every page is reviewed with a dentist from your practice before it goes live. You stay the advertiser, so you get the final say.">
                <img src="/images/au/dental-website-design/dental-website-review.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A dentist and a FactoryJet content strategist reviewing website copy together on a laptop in an Adelaide practice staff room" />
              </VisualSlot>
            </div>
            <div className="ventries">
              {AHPRA_CHECK.map((f) => (
                <details key={f.q} className="ventry">
                  <summary><h3>{f.q}</h3><span className="chev" aria-hidden="true">+</span></summary>
                  <span className="vtag">{f.verdict}</span>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ONLINE BOOKING + PRACTICE SOFTWARE → facts + photo + label rows ═══ */}
        <section className="section facts" id="booking">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Online booking</div>
              <h2>Online booking that lands straight in your practice software</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The most useful thing a dental website can do is take a booking at 9pm on a Sunday, when the phone is
                  off and a patient finally has a minute. A contact form that says &quot;we will call you back&quot; is
                  not the same. Many patients never answer the callback.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Most Australian dental practice software offers online booking or connects to a booking platform. We
                  work with what you already use, such as Dental4Windows from Centaur Software, Praktika, Core Practice
                  or EXACT from Software of Excellence, and platforms such as HotDoc. We set up which appointment types
                  patients can book themselves (new patient exam, check-up and clean, children’s check-up), how long each
                  takes, which dentists offer them, and what patients must tell you first.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Then we put that booking tool in the right places: a sticky button on mobile, each treatment and
                  location page, and your Google Business Profile. We test the full path on real phones, from a Google
                  search to a confirmed appointment in your book. Longer or complex treatments usually stay as a request
                  that your team confirms, which is safer and keeps your schedule under control.
                </p></div>
                <div className="fact"><div className="sec">§04</div><p>
                  If you also want the phone answered after hours, an{' '}
                  <a href="/au/ai-receptionist">AI receptionist for dental practices</a> can take routine bookings and
                  questions by voice and pass anything urgent to your team. For chat and email enquiries, see{' '}
                  <a href="/au/ai-customer-service">AI customer service for Australian businesses</a>.
                </p></div>
                <div className="fact"><div className="sec">§05</div><div>
                  <div className="factlabel">What patients book online, and what stays with your team</div>
                  <ul className="trigrows">
                    <li><span className="m">New patient exam and clean</span><span className="n">fixed length, any listed dentist</span><span className="t">Online</span></li>
                    <li><span className="m">Six-monthly check-up</span><span className="n">existing patients, with reminders</span><span className="t">Online</span></li>
                    <li><span className="m">Children’s check-up</span><span className="n">family bookings back to back</span><span className="t">Online</span></li>
                    <li><span className="m">Implant or aligner consult</span><span className="n">team confirms length and dentist</span><span className="t">Request</span></li>
                    <li><span className="m">Pain or swelling</span><span className="n">emergency page, then a person</span><span className="t">Call us</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto"
                subject="A man in his kitchen choosing an appointment time on a dental practice booking screen on his phone">
                <img src="/images/au/dental-website-design/dental-website-booking.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a man in a Brisbane kitchen choosing an appointment time on a dental practice booking screen on his phone" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>DIY website builder vs dental template agency vs general web agency vs a custom dental web design</h2>
                <p className="lead">
                  Four common ways an Australian practice gets a website. Each suits someone. This compares what changes day
                  to day, not price. For market price ranges, see our{' '}
                  <a href="/blog/website-cost-australia-2026">website cost guide for Australia</a>.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom dental website (FactoryJet)</th>
                    <th>Dental template agency</th>
                    <th>General web agency</th>
                    <th>DIY website builder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Looks like your practice</th><td className="fj">Designed around your brand and photos</td><td>Shared template, your colours</td><td>Usually custom</td><td>Theme you choose</td></tr>
                  <tr><th scope="row">Knows the Ahpra advertising rules</th><td className="fj">Every page checked</td><td>Usually</td><td>Often not</td><td>Up to you</td></tr>
                  <tr><th scope="row">Booking into practice software</th><td className="fj">Connected and tested end to end</td><td>Common systems only</td><td>Often a contact form</td><td>Embed it yourself</td></tr>
                  <tr><th scope="row">Dental SEO planned in</th><td className="fj">From the first page</td><td>Often a separate package</td><td>Varies</td><td>Up to you</td></tr>
                  <tr><th scope="row">AI search (ChatGPT, AI Overviews)</th><td className="fj">Structured for it</td><td>Varies</td><td>Varies</td><td>Rarely</td></tr>
                  <tr><th scope="row">Accessibility (WCAG 2.2 AA)</th><td className="fj">Built and checked</td><td>Depends on template</td><td>Varies</td><td>Depends on theme</td></tr>
                  <tr><th scope="row">Who owns site and accounts</th><td className="fj">Your practice</td><td>Sometimes the agency</td><td>Check the contract</td><td>You, on their platform</td></tr>
                  <tr><th scope="row">Setup effort for you</th><td className="fj">Workshops and approvals</td><td>Low</td><td>Medium</td><td>High, all on you</td></tr>
                  <tr><th scope="row">Support after launch</th><td className="fj">Same team, ongoing</td><td>Usually included</td><td>Varies</td><td>Help desk</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              A dental template agency can be the right choice for a single-dentist practice that wants something fast and
              standard. We will tell you that if it fits you better.
            </p>
          </div>
        </section>

        {/* ═══ DENTAL SEO → facts + monthly report panel ═══ */}
        <section className="section facts" id="dental-seo">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Dental SEO</div>
              <h2>Dental SEO: how Australian practices get found on Google, Maps and AI search</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Dental SEO is the ongoing work that helps local patients find your practice when they search for a
                  dentist, a treatment or an emergency appointment. For most practices, the biggest source of new
                  patients from search is the map results, which come from your Google Business Profile. Google says
                  local results depend on relevance, distance and prominence, and that more reviews and positive
                  ratings can help local ranking.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The second source is your website’s treatment and location pages. A patient in Parramatta searching
                  &quot;emergency dentist near me&quot; or a parent in Brisbane searching for a children’s dentist should
                  land on a page written for exactly that, with a booking button. Local SEO for dentists is mostly about
                  doing those basics very well across every location, not about tricks.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  The third, newer source is AI search. Google shows AI Overviews on both &quot;dental website design&quot;
                  and &quot;dental SEO&quot; searches in Australia, and patients increasingly ask ChatGPT or Perplexity to
                  recommend a dentist. These tools pull from websites, listings and reviews. Clear, factual pages with
                  structured data are easier for them to describe correctly. Our{' '}
                  <a href="/au/ai-seo">AI SEO service</a> covers that side in depth.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    Reviews need care in dentistry. You can ask patients to leave a genuine Google review, but you should not
                    reuse clinical reviews in your own advertising. When
                    replying to reviews, thank the patient and never discuss their treatment, which also protects their
                    privacy. For the full picture of our wider service, see{' '}
                    <a href="/au/seo">SEO services in Australia</a>.
                  </p>
                  <p className="au-note">
                    Source: <a href={SRC_GOOGLE_LOCAL} {...extLink}>Google Business Profile Help, how to improve your local ranking</a>.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What we report each month</div>
                <ul className="trigrows">
                  <li><span className="m">Calls and bookings from search</span><span className="n">the numbers that pay the rent</span><span className="t">Tracked</span></li>
                  <li><span className="m">Map views and direction requests</span><span className="n">per location</span><span className="t">Tracked</span></li>
                  <li><span className="m">Rankings for treatment and suburb terms</span><span className="n">the ones patients use</span><span className="t">Tracked</span></li>
                  <li><span className="m">How AI assistants describe you</span><span className="n">ChatGPT, Perplexity, AI Overviews</span><span className="t">Checked</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white dental practice building on a map, with an orange booking card travelling from a phone into an appointment book" />

        {/* ═══ DENTAL SEO PLAN → process timeline ═══ */}
        <section className="section process" id="seo-plan">
          <div className="wrap">
            <div className="section-head head-stack">
              <h2>Our dental SEO plan, step by step</h2>
            </div>
            <div className="timeline timeline-3">
              {SEO_STEPS.map((s) => (
                <div key={s.n} className="tnode">
                  <div className="idx">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Want a dental website that books patients and stays on the right side of Ahpra?'}
            sub={'Tell us about your practice, your locations and the software you book into. On a short call with the founder, we will look at your current site and tell you what to fix first, whether or not you work with us.'}
            label={'Plan my dental website'}
          />
        </div>

        {/* ═══ PRIVACY + ACCESSIBILITY → facts + photo + ruled rows ═══ */}
        <section className="section facts" id="privacy-accessibility">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Privacy and accessibility</div>
              <h2>Patient privacy and accessibility, built in rather than bolted on</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Privacy.</b> Many small businesses are exempt from the Privacy Act, but the OAIC says health
                  service providers are covered whatever their turnover. A dental practice is one. The Australian
                  Privacy Principles expect you to tell people what you collect and why (APP 5) and to keep it secure
                  (APP 11). On a website that means short forms that do not ask for clinical detail, booking data held in
                  your booking system rather than in email inboxes, secure hosting, careful choice of tracking tools, and
                  a privacy policy that matches what the site really does.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Accessibility.</b> Your patients include older people, people with low vision, and people who use a
                  keyboard or screen reader. The Disability Discrimination Act 1992 applies to private businesses as well
                  as government, and the accepted benchmark for websites is the Web Content Accessibility Guidelines
                  (WCAG). The current version, WCAG 2.2, was published by the W3C in October 2023. We build to WCAG 2.2
                  level AA: strong contrast, text that resizes cleanly, clear focus states, labelled forms, captions on
                  videos, and descriptive image text.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    Accessible sites also tend to be faster and easier for everyone to use, which helps bookings and SEO at
                    the same time. It is one of the few improvements with no downside.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OAIC_SMALL} {...extLink}>OAIC, small business and the Privacy Act</a>;{' '}
                    <a href={SRC_OAIC_APPS} {...extLink}>OAIC, Australian Privacy Principles quick reference</a>;{' '}
                    <a href={SRC_WCAG} {...extLink}>W3C, WCAG overview</a>;{' '}
                    <a href={SRC_W3C_AU} {...extLink}>W3C, web accessibility laws in Australia</a>. General information, not legal advice.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-4" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="An older woman at home using a high-contrast dental practice website with large buttons on her tablet"
                caption="Large, high-contrast buttons and text that resizes cleanly help older patients book on their own, without calling the front desk for help.">
                <img src="/images/au/dental-website-design/dental-website-access.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of an older woman in a Perth living room using a high-contrast dental practice website with large buttons on her tablet" />
              </VisualSlot>
            </div>
            <div className="platlist span-all" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>What we do</h3></div><p className="plat-build">Keep forms short, route bookings to your booking system, choose secure hosting, limit tracking, build to WCAG 2.2 AA, and document where data goes so your privacy policy is accurate.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>What you keep</h3></div><p className="plat-build">You stay responsible for the patient information you collect and for your advertising. We make both easier with plain-English notes and a content approval step on every page.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>What we do not do</h3></div><p className="plat-build">We are not lawyers and do not give legal sign-off. For unusual cases, check with Ahpra, your indemnity insurer, your professional association or a privacy adviser.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ PRACTICE TYPES → capgrid ═══ */}
        <section className="section capabilities" id="practice-types">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Who we build for</div>
              <h2>Dental clinic website design for every kind of practice</h2>
              <p className="lead">
                The same foundations, shaped by how each practice finds and books patients.
              </p>
            </div>
            <div className="capgrid">
              {PRACTICE_TYPES.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={PRACTICE_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={PRACTICE_SUBJECTS[i]} />
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ ENGAGEMENT SHAPES + DEMAND → ruled rows + split ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>Three ways to work with us on your dental website and SEO</h2>
              </div>
              <p>
                Every project is quoted for your scope, with a fixed price for the build and any ongoing work shown
                separately. These are the shapes it usually takes.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Website build.</h3></div><p className="plat-build">Design, copy, photos plan, Ahpra review, online booking, Google Business Profile setup, accessibility and launch. A small site of up to five pages can be delivered in 7 days once content is ready.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Build plus dental SEO.</h3></div><p className="plat-build">The website, then monthly SEO: location and treatment pages, Google Business Profile management, reviews process, local links and AI search checks, with reporting on calls and bookings.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Care and improvement.</h3></div><p className="plat-build">For an existing site: fixes, speed, security, compliance checks, booking improvements and new pages, by the same team every month.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the scope: the number of treatments and locations, custom design or adapted layout, the
                  booking system, whether we write the copy and organise photography, how competitive your suburbs are for
                  SEO, and the support you want. For Australian market ranges, read our{' '}
                  <a href="/blog/website-cost-australia-2026">website cost guide</a> and{' '}
                  <a href="/blog/seo-cost-australia-2026">SEO cost guide</a>. Across our projects, 97% are delivered on time.
                </p>
                <ModalCTAButton label="Plan my dental website" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'dental website design', v: '390', w: '100%', kd: 'Includes dentist and dental web design' },
                    { kw: 'dental seo', v: '390', w: '100%', kd: 'Practices wanting more patients' },
                    { kw: 'dental seo services', v: '210', w: '54%', kd: 'Buyer intent' },
                    { kw: 'local seo for dentists', v: '170', w: '44%', kd: 'Google Maps and near me' },
                    { kw: 'dental seo company', v: '170', w: '44%', kd: 'Comparing providers' },
                    { kw: 'dental seo agency', v: '140', w: '36%', kd: 'Comparing agencies' },
                    { kw: 'medical website design', v: '70', w: '18%', kd: 'Clinics beyond dental' },
                    { kw: 'healthcare seo services', v: '50', w: '13%', kd: 'Wider health sector' },
                  ].map((r) => (
                    <li key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Source: DataForSEO, Australia, September 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROVIDER LIST (self-disclosure, ItemList from PROVIDERS) → ruled rows ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Australian dental website design and dental SEO providers worth knowing</h2>
              </div>
              <p>
                We are one option, not the only one. These providers appear in Australian search results for dental
                website design and dental SEO. Some are dental-only, some are general agencies with a dental service. Each
                note is based on what the company says on its own website.
              </p>
            </div>
            <div className="platlist" role="list">
              {PROVIDERS.map((p, i) => (
                <div key={p.name} className={p.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{p.name}</h3>{p.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Providers named from live Australian search results for dental website design and dental SEO, September 2026. Notes reflect each company’s own website on 26 September 2026. Listing is not endorsement.
            </p>
            <div className="au-panel au-panel-wide">
              <div className="eyebrow">Questions to ask any dental web designer, including us</div>
              <ol className="au-numlist">
                <li><span><b>How do you check copy against the Ahpra guidelines?</b> Ask who reviews it and what they look for.</span></li>
                <li><span><b>Will booking land in our practice software?</b> Ask to see a test booking arrive in your appointment book.</span></li>
                <li><span><b>Who owns the domain, hosting and Google Business Profile?</b> They should all be in your practice’s name.</span></li>
                <li><span><b>Is the site built to WCAG 2.2 AA?</b> Ask how they test it, not just whether they do.</span></li>
                <li><span><b>What do you report on for SEO?</b> Calls and bookings matter more than a rankings chart.</span></li>
                <li><span><b>What happens if we leave?</b> Ask how you get the site, content and accounts back.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Beyond the website</div>
              <h2>More of what we build for Australian practices and businesses</h2>
              <p>
                A dental website is usually the first piece. These are the natural next steps, built by the same team.
              </p>
            </div>
            <ul className="agentdir-grid">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Dental website design and dental SEO questions Australian practices ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>A dental website that books patients and follows the rules</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                practice, your locations, the software you book into, and what your website should fix first. No spam, no
                obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Plan my dental website" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/seo">See SEO services</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
