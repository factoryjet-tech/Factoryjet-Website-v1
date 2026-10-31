import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-ai-receptionists-australia-2026';
const IMG = '/blog-images/best-ai-receptionists-australia-2026';

// HOW THIS LIST WAS BUILT (21 October 2026)
// 1. On 21 Oct 2026 we ran 14 Australian searches (DataForSEO, Google Australia, location 2036)
//    such as "ai receptionist australia", "ai receptionist for tradies" and "ai receptionist cliniko",
//    then the People Also Ask questions they returned: 112 result pages, 613 questions, US$0.44.
//    Raw data: session scratchpad paa/paa_au_receptionist_2026_10_21.json (not in the repo).
// 2. A product is in if (a) it is an AI receptionist you can buy today, (b) its own site shows an
//    Australian company, ABN or ACN, or Australian address, and (c) it was named in the AU page plan,
//    on /au/ai-receptionist, or on page 1 of Google Australia for those searches that day.
// 3. Every fact in PRODUCTS, PRICES and ALSO_CHECKED was read on the product's own site on
//    21 Oct 2026 (URL in `source`). No third-party review site was used for any fact.
// 4. No scores, no stars, no ranking. The order groups products by buyer type and is NOT a ranking.
// 5. Prices are each product's own published list prices, copied exactly with their GST wording.
//    They are NOT FactoryJet prices. FactoryJet's own prices are never published (rule, 30 Sep 2026),
//    and no running cost of a custom build appears anywhere on this page (rule, 11 Oct 2026).
// 6. Sophiie's plan prices sit on a page that is not linked from its site and is blocked in its
//    robots.txt, and /pricing redirects to the homepage, so we treat Sophiie as "price on demo".
// Do not edit a fact here without re-opening the source page first.
interface Product {
  name: string;
  url: string;
  source: string;
  company: string;
  type: string;
  bestFor: string;
  connects: string;
  price: string;
  what: string;
  ask: string;
}

const PRODUCTS: Product[] = [
  {
    name: 'Sophiie',
    url: 'https://www.sophiie.ai/',
    source: 'https://www.sophiie.ai/integrations',
    company: 'Sophiie AI Pty Ltd, Surfers Paradise, Gold Coast (founded 2024)',
    type: 'AI receptionist plus office tools for trades',
    bestFor: 'Electricians, plumbers, HVAC and other trades on ServiceM8 or Simpro',
    connects: 'ServiceM8 and Simpro (two-way sync), Ascora, Xero, QuickBooks, Google and Outlook calendars',
    price: 'Not on its public pages; book a demo',
    what: 'Sophiie says it answers calls, books jobs, sends quotes and invoices, schedules your team and follows up with customers. Its menu adds an email responder, a website chatbot, an AI phone scribe and call transfers that brief a team member before connecting the caller. It says it has handled 1,000,000+ calls for 1,600+ businesses. Its integrations page is the most detailed of the trade products we read: two-way sync with ServiceM8 and Simpro, one-way with Ascora.',
    ask: 'What the two-way ServiceM8 or Simpro sync writes back: a new job, a client record, notes, or all three.',
  },
  {
    name: 'Johnni',
    url: 'https://johnni.ai/',
    source: 'https://johnni.ai/pricing/',
    company: 'Australian owned, built and run in Brisbane (no ABN shown on the pages we read)',
    type: 'Self-serve AI receptionist for service businesses',
    bestFor: 'Sole traders and small crews who want a published price and a free trial',
    connects: 'Google Calendar on every plan; ServiceM8, Simpro, ServiceTitan, HubSpot, Pipedrive and Zoho as a custom add-on quoted per business',
    price: 'A$49 a month (A$44 paid yearly) to A$899 a month, ex GST',
    what: 'Johnni says it answers every call in a natural Aussie voice, qualifies the enquiry, rings new leads back and books the job. It offers Australian and New Zealand voices, warm call transfer, SMS alerts for A$50 a month and an outbound caller. Its pricing page is unusually clear: every plan shows included minutes, the rate per extra minute and an uptime target.',
    ask: 'Whether your job software counts as a standard connection or a quoted custom add-on.',
  },
  {
    name: 'Nexwin',
    url: 'https://nexwin.com.au/',
    source: 'https://nexwin.com.au/pricing.html',
    company: 'Founded 2022, based in Surry Hills, Sydney (no ABN shown on the pages we read)',
    type: 'AI phone receptionist plus website chatbot',
    bestFor: 'Trades, clinics, salons, real estate and hospitality that want calls and web chat in one plan',
    connects: 'Google Calendar; ServiceM8 workflows; custom CRM connection on the Pro plan',
    price: 'A$249 a month + GST (600 minutes) or A$499 + GST (1,200 minutes)',
    what: 'Nexwin says it answers calls 24/7 in a natural Australian voice, books into your calendar, recognises returning callers and can text a link or email a document during the call. It warm-transfers urgent calls to a person. It is also candid on its own site: it says it does not claim callers will mistake it for a person, and that recognition accuracy varies with audio quality and accents.',
    ask: 'How much of your ServiceM8 workflow it can complete, since its site describes support for workflows rather than a named two-way sync.',
  },
  {
    name: 'AIssie',
    url: 'https://www.aissie.com.au/',
    source: 'https://www.aissie.com.au/pricing',
    company: 'Sole trader trading as AIssie (ABN 11 371 239 323), built in Perth',
    type: 'AI receptionist across phone, SMS, web chat and social messages',
    bestFor: 'Small businesses that get as many enquiries by message as by phone',
    connects: 'ServiceM8, Xero, Google and Microsoft calendars, HubSpot, Zapier, Square Appointments, WhatsApp, Facebook and Instagram',
    price: 'Voice A$99 a month (70 minutes) to A$670 (2,000 minutes); its terms say prices exclude GST unless stated',
    what: 'AIssie says it picks up every call, replies on SMS, website chat, Facebook, Instagram and WhatsApp, books jobs into your calendar and follows up overdue invoices. It answers in a natural Australian voice and transfers urgent calls on rules you set. Its security page says the language models it uses are hosted in the United States, which is worth knowing if your calls include health or legal details.',
    ask: 'Whether a voice trial is available, since the free plan we saw covers chat only.',
  },
  {
    name: 'Miyai',
    url: 'https://miyai.ai/',
    source: 'https://miyai.ai/pricing',
    company: 'Adaptive Media Technologies Pty Ltd (ABN 14 688 226 864), Burleigh Heads, Queensland',
    type: 'AI receptionist and website chat agents, sold as bundles',
    bestFor: 'Tradies, clinics, dentists, real estate and law firms that want chat first and voice later',
    connects: 'ServiceM8 and HubSpot on the Growth plan; calendar bookings; API and webhooks on Scale',
    price: 'Chat from A$19 a month; voice comes in the A$199 Growth bundle; Scale A$799. Prices in AUD; its terms say GST is included where applicable',
    what: 'Miyai says it answers every call, replies to website enquiries and books the job 24/7 in an Australian accent, and its voice page adds outbound dialling and transfer to a person with context. Its pricing page lists no included minutes or overage rates, so ask for those before you compare it with the per-minute products here. Miyai publishes its own best AI receptionist list, ranks itself first and discloses that it does.',
    ask: 'How many call minutes the A$199 Growth plan includes, and what each extra minute costs.',
  },
  {
    name: 'Voxworks',
    url: 'https://www.voxworks.ai/',
    source: 'https://www.voxworks.ai/pricing',
    company: 'Voxworks Technologies Pty Ltd (ABN 14 691 875 153), governed by New South Wales law',
    type: 'AI voice agents for inbound and outbound calls',
    bestFor: 'Real estate, property management, car dealers and larger call volumes',
    connects: 'Google Calendar, Microsoft Bookings, Calendly, HubSpot, GoHighLevel, REX, AgentBox, Zapier, Make, n8n and an API; its trades page also names ServiceM8, AroFlo and Fergus',
    price: 'A$49 a month (60 minutes) to A$999 (2,500 minutes), ex GST',
    what: 'Voxworks says it answers inbound calls 24/7, captures who is calling and why, books appointments and transfers to the right person, with emergency triage that warm-transfers to an on-call number. It offers 100+ Australian voices, outbound batch calling and AI voicemail, and says it is ISO 27001 certified. Its integrations page is strongest on real estate (REX, AgentBox).',
    ask: 'Whether the trade connections on its trades page are live, since its main integrations page does not list job software.',
  },
  {
    name: 'AiDial',
    url: 'https://aidial.com.au/',
    source: 'https://aidial.com.au/voice-ai-integrations',
    company: 'DIGITALON Pty Ltd (ABN 64 630 163 469), Sunshine Coast, Queensland',
    type: 'Onshore AI receptionist, outbound calls, SMS and chat',
    bestFor: 'Legal, NDIS and care, healthcare, real estate and finance teams that need data kept in Australia',
    connects: 'Halaxy, Cliniko, PracSuite, ServiceM8, HubSpot, Zoho, HighLevel, Xero, MYOB, Google, Outlook and Apple calendars, Calendly, Acuity, Phorest and more',
    price: '$149 a month (60 calls) to $449 (400 calls); a call is up to 10 connected minutes. The pricing page does not state currency or GST',
    what: 'AiDial says your customer and call data never leaves Australia, with data held in Sydney, Melbourne and Canberra data centres, and it sells a A$100-a-month compliance pack for regulated teams. It offers 100+ Australian voices and warm transfers that brief your team member first. It has the widest documented list of practice and booking software of any product we read. Setup fees are set in a scope of work, which may also set a minimum term.',
    ask: 'The setup fee and any minimum term in your scope of work, in writing, before you compare it with month-to-month products.',
  },
  {
    name: 'MayaAI',
    url: 'https://mayaai.com.au/',
    source: 'https://mayaai.com.au/pricing',
    company: 'Nutire Pty Ltd (ABN 55 671 343 856), Central Coast, New South Wales',
    type: 'AI receptionist for healthcare practices',
    bestFor: 'GP, dental and allied health clinics on Cliniko, Halaxy or Best Practice',
    connects: 'Cliniko, Halaxy and Best Practice (live); Magentus and Zedmed in progress',
    price: 'A$149 a month + GST (250 minutes) to A$1,499 (2,500 minutes); about 8% less paid yearly',
    what: 'MayaAI says it manages patient calls, routine enquiries and appointment workflows 24/7, and runs outbound recalls and reminders. It stores recordings and transcripts in Australia, and its trust page adds that Australian storage does not mean all processing happens in Australia. That is the most precise data statement we read on any product. It says it identifies itself clearly as an AI assistant and offers a one-month free trial with no credit card.',
    ask: 'Which parts of each call are processed outside Australia, and under what contract.',
  },
  {
    name: 'Lyngo',
    url: 'https://www.lyngo.ai/',
    source: 'https://www.lyngo.ai/pricing/',
    company: 'Lyngo AI Pty Ltd (ABN 22 676 853 366), Haymarket, Sydney',
    type: 'AI receptionist for allied health clinics',
    bestFor: 'Physio, chiro, osteo, podiatry, psychology and speech clinics on Cliniko or Nookal',
    connects: 'Cliniko, Nookal, PracSuite and Splose; listed in Cliniko as Able AI Receptionist',
    price: 'A$139 a month + GST (45 calls) to A$880 (500 calls)',
    what: 'Lyngo says it finds the patient, checks live availability and books directly into your practice software. Clinical questions, billing issues and complaints go to the right person with a summary. It bills by the call, not the minute, and calls under 10 seconds are free. It is the only product we read that names Nookal.',
    ask: 'How it handles a patient who asks a clinical question mid-booking, and what your clinician sees afterwards.',
  },
  {
    name: 'HealthEngine Helen',
    url: 'https://practices.healthengine.com.au/helen-ai-receptionist/',
    source: 'https://practices.healthengine.com.au/helen-ai-receptionist/',
    company: 'Healthengine Limited (ACN 138 767 021), governed by Western Australian law',
    type: 'AI receptionist for GP practices',
    bestFor: 'GP practices on Best Practice or Pracsoft',
    connects: 'Best Practice and Pracsoft, plus HealthEngine online bookings',
    price: 'Not published; book a demo',
    what: 'Helen answers admin calls and updates bookings in your practice software. HealthEngine is explicit that Helen never gives clinical advice or discusses symptoms. Smart Transfers pass the caller to staff with context, and it speaks 30+ languages. Voice customisation is not available yet, according to its own page.',
    ask: 'The full monthly price for your practice size, since the only figure published is for the booking software bundle.',
  },
  {
    name: 'Valory',
    url: 'https://www.valory.com.au/',
    source: 'https://www.valory.com.au/pricing',
    company: 'Evolving Technologies Pty Ltd (ABN 72 654 819 128), Brisbane',
    type: 'Managed AI receptionist service',
    bestFor: 'Accounting firms, law firms, property managers and dental practices that want it set up and run for them',
    connects: 'Google and Outlook calendars, webhooks and CRM from the Core plan; ServiceM8 or Simpro listed as integrations to discuss',
    price: 'A$149 a month (100 minutes) to from A$1,299 (3,000 minutes), plus setup from A$990; its terms say fees exclude taxes',
    what: 'Valory sells a service rather than software: it answers calls 24/7, captures leads, books appointments and escalates urgent enquiries, and its team designs the call flow, configures the voice and keeps improving it. Urgent calls go to your team by SMS, email or direct transfer. Its terms say the service is primarily hosted in Australia.',
    ask: 'What the setup fee covers for your business, and who you speak to when a call is handled wrongly.',
  },
  {
    name: 'OneBookPlus',
    url: 'https://onebookplus.com.au/',
    source: 'https://onebookplus.com.au/features/ai-receptionist',
    company: 'Australian owned, made in Melbourne (ABN 17 971 013 775)',
    type: 'AI receptionist inside an all-in-one business app',
    bestFor: 'Small businesses that would move their bookings, invoicing and CRM into one Australian app',
    connects: 'Books into OneBookPlus itself; webhooks to a CRM; it says it has no ServiceM8 or Simpro connection and no live Xero or MYOB sync',
    price: 'A$79 a month inc GST plus the A$25 AI Companion (A$104 total) for 100 conversations',
    what: 'OneBookPlus says its receptionist answers every call, asks the questions your booking page asks and books the job into its own calendar. If nobody picks up a transfer in about 25 seconds it tells the caller the team will ring back. It stores transcripts in Australia (AWS Sydney) and says the live call passes through phone and voice providers in the United States. Recordings are deleted after seven days.',
    ask: 'Whether you are ready to move bookings into its app, since that is where the receptionist books.',
  },
  {
    name: 'OfficeHQ MyAI Receptionist',
    url: 'https://www.officehq.com.au/',
    source: 'https://www.officehq.com.au/service/ai-phone-answering/',
    company: 'Office HQ Pty Ltd (ABN 95 105 928 363), Sydney, operating since 2003',
    type: 'AI answering with a human receptionist as backup',
    bestFor: 'Businesses that want AI to take routine calls and a live receptionist ready to step in',
    connects: 'Clio, HubSpot, Jobber, Salesforce, Zapier and others, listed for its virtual assistants generally',
    price: 'A$20 a month (10 calls) to A$600 (500 calls), plus GST; extra calls A$1.50',
    what: 'OfficeHQ is a virtual reception company that added an AI tier. The AI greets callers, takes messages, answers questions and transfers calls, and a live Australian receptionist can step in. Calls routed to live agents are charged at the applicable rate, so ask what that rate is. Its FAQ says callers will not know they are talking to AI unless you want them to; read the privacy section below before you choose that setting.',
    ask: 'The per-call charge when a live receptionist takes over, and how often that happened for businesses like yours.',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/au/ai-receptionist',
    source: 'https://factoryjet.com/au/ai-receptionist',
    company: 'FactoryJet, working remotely with Australian clients',
    type: 'Custom AI receptionist, designed, built and supported for one business',
    bestFor: 'Businesses whose job or practice software, or call rules, no product above handles',
    connects: 'Built around your systems: job software, practice software, CRM, calendars and handover rules',
    price: 'Fixed price per phase, quoted in writing after a scoping call',
    what: 'We design, build, integrate and support a custom AI receptionist around your call types, your systems and your handover rules, and you own what we build. We show working software on your own data before you sign anything. If one of the products above already connects to your software and covers your calls, start there; it will be faster to set up.',
    ask: 'Ask us for a demo on your own call types before you decide.',
  },
];

// These are each product's own published list prices, read on 21 Oct 2026. Not FactoryJet prices.
const PRICES: { product: string; entry: string; top: string; unit: string; terms: string; source: string }[] = [
  { product: 'OfficeHQ MyAI', entry: 'A$20 a month, 10 calls', top: 'A$600 a month, 500 calls', unit: 'Per call; extra calls A$1.50', terms: 'Plus GST. 7-day free trial. No lock-in. Live-agent calls charged at the applicable rate', source: 'https://www.officehq.com.au/pricing/' },
  { product: 'Johnni', entry: 'A$49 a month (A$44 yearly), 60 minutes', top: 'A$899 a month (A$809 yearly), 1,500 minutes', unit: 'Per minute; then A$0.50 to A$0.35', terms: 'Ex GST. 7-day free trial. No setup fee. Month to month', source: 'https://johnni.ai/pricing/' },
  { product: 'Voxworks', entry: 'A$49 a month, 60 minutes', top: 'A$999 a month, 2,500 minutes', unit: 'Per minute; then A$0.99 to A$0.60', terms: 'Ex GST. 14-day free trial', source: 'https://www.voxworks.ai/pricing' },
  { product: 'AIssie (voice)', entry: 'A$99 a month, 70 minutes', top: 'A$670 a month, 2,000 minutes', unit: 'Per minute; extra A$0.65', terms: 'Terms say ex GST unless stated. No setup fee, no lock-in', source: 'https://www.aissie.com.au/pricing' },
  { product: 'OneBookPlus', entry: 'A$104 a month (A$79 receptionist + A$25 AI Companion), 100 conversations', top: 'Extra conversations: 50 for A$39 to 500 for A$299', unit: 'Per conversation of up to 4 minutes', terms: 'Inc GST. 14-day trial. No setup fee, no contract', source: 'https://onebookplus.com.au/features/ai-receptionist' },
  { product: 'Lyngo', entry: 'A$139 a month, 45 calls', top: 'A$880 a month, 500 calls', unit: 'Per call over 10 seconds; then A$3 to A$1.80', terms: 'Plus GST. 14 days free. Free setup. No lock-in', source: 'https://www.lyngo.ai/pricing/' },
  { product: 'AiDial', entry: '$149 a month, 60 calls', top: '$449 a month, 400 calls', unit: 'Per call of up to 10 minutes; then $2.49 to $1.49', terms: 'Currency and GST not stated. Setup fee and any minimum term set in a scope of work', source: 'https://aidial.com.au/ai-call-pricing' },
  { product: 'MayaAI', entry: 'A$149 a month, 250 minutes', top: 'A$1,499 a month, 2,500 minutes', unit: 'Per minute; then A$0.35 to A$0.25', terms: 'Plus GST. One-month free trial, no card. No setup or cancellation fees', source: 'https://mayaai.com.au/pricing' },
  { product: 'Valory', entry: 'A$149 a month, 100 minutes', top: 'From A$1,299 a month, 3,000 minutes', unit: 'Per minute; then A$0.90 to A$0.30', terms: 'Terms say fees exclude taxes. Setup from A$990. Month to month', source: 'https://www.valory.com.au/pricing' },
  { product: 'Miyai', entry: 'A$199 a month (voice bundle); chat only from A$19', top: 'A$799 a month (Scale)', unit: 'Minutes not stated on the pricing page', terms: 'AUD; terms say GST included where applicable. No setup fee. Payment before access', source: 'https://miyai.ai/pricing' },
  { product: 'Nexwin', entry: 'A$249 a month, 600 minutes', top: 'A$499 a month, 1,200 minutes', unit: 'Per minute; then A$0.49 or A$0.39', terms: 'Plus GST. 7-day trial with 100 minutes, card required. No setup fee, no lock-in', source: 'https://nexwin.com.au/pricing.html' },
];

const ALSO_CHECKED: { name: string; line: string; source: string }[] = [
  { name: 'Waboom', line: 'On page 1 for "ai phone answering service australia" and sells in Australia with Australian voices and, it says, calls stored on a Sydney stack. The company is in Auckland (Waboom AI Limited, NZBN 9429052710018), so it misses our Australian-company rule. Its Australian prices are prepaid call credit from 95c to 71c a minute plus A$130 a month for the platform.', source: 'https://www.waboom.ai/ai-voice-agents/pricing' },
  { name: 'Trillet', line: 'An Australian company (Zerodue AI Pty Ltd, Melbourne) whose receptionist plan is $49 a month for 150 minutes. Its site does not state the currency and its terms cap liability in US dollars, so we could not tell an Australian buyer what that $49 means. That plan also lists no transfer to a person.', source: 'https://trillet.ai/receptionist/pricing' },
  { name: 'AutoReception', line: 'A Brisbane business (ABN 28 698 355 216) on page 1 for "ai receptionist australia". It says it connects to ServiceM8, Xero and Google Calendar and transfers urgent calls to your mobile. It publishes no prices: you book a consultation.', source: 'https://autoreception.com.au/' },
  { name: 'VerticalAI', line: 'A Perth company (Vertical AI Pty Ltd, ABN 73 695 607 946) whose best-of guide sits on page 1 for "ai receptionist australia". Its homepage says plans start at A$299 a month, GST included, and that it puts urgent callers through to you. We found it late on 21 October 2026 and read only its homepage, so it does not get a full profile.', source: 'https://verticalai.com.au/' },
  { name: 'Jodie (Hey Jodie)', line: 'On page 1 for "ai receptionist australia" with its own best-of guide. Its website blocked every attempt we made to read it on 21 October 2026, so we could not check a single fact and have left it out rather than guess.', source: 'https://heyjodie.com/' },
];

const FAQS: FAQItem[] = [
  {
    q: 'Which AI receptionist is best in Australia?',
    a: 'There is no single best one. For trades on ServiceM8 or Simpro, look first at Sophiie, then Johnni, Nexwin and AIssie. For allied health on Cliniko or Nookal, Lyngo and MayaAI. For GP practices on Best Practice, MayaAI and HealthEngine Helen. If your data must stay in Australia, AiDial. If you want it run for you, Valory. We checked all of them on their own websites on 21 October 2026.',
  },
  {
    q: 'How much does an AI receptionist cost in Australia?',
    a: 'Published entry plans on 21 October 2026 ran from A$20 a month plus GST for 10 calls (OfficeHQ MyAI) to A$249 a month plus GST for 600 minutes (Nexwin). Top plans reach about A$1,500 a month for 2,500 minutes (MayaAI). Most mid-size plans sat between A$149 and A$499 a month. Before you compare an AI receptionist price, check whether the plan counts calls or minutes, and whether GST is included.',
  },
  {
    q: 'How much is an AI receptionist worth to my business?',
    a: 'Count before you buy. Take last month’s phone log and add up the calls you missed, the calls that came after hours, and the voicemails nobody returned that day. Then ask how many of those callers would have booked a job or an appointment. If that number of jobs is worth more than the monthly plan, the receptionist pays its way. If you rarely miss a call, it may not.',
  },
  {
    q: 'What is the cheapest AI receptionist in Australia?',
    a: 'On list price, OfficeHQ MyAI Receptionist starts at A$20 a month plus GST for 10 calls, then A$1.50 a call. For a plan with more room, Johnni and Voxworks both start at A$49 a month ex GST with 60 minutes. Miyai sells chat-only plans from A$19, but its voice receptionist starts in the A$199 bundle. Cheapest on paper can cost more once extra calls start.',
  },
  {
    q: 'Is there a free AI receptionist?',
    a: 'Not for voice, among the Australian products we checked. AIssie has a free plan, but it covers 15 chat messages a month, not phone calls. What you can get free is a trial: MayaAI offers a month with no card, Voxworks and Lyngo 14 days, OneBookPlus 14 days, and Johnni, Nexwin and OfficeHQ seven days. Nexwin asks for a card to start its trial.',
  },
  {
    q: 'Is an AI receptionist a good idea for a small business?',
    a: 'It is a good idea when calls go unanswered because you are on the tools, with a patient or closed. It is a weaker idea when most callers need judgement, such as complaints or complex quotes. Every product we checked can transfer a call to a person, so the useful question is which calls the AI should finish and which it should hand over.',
  },
  {
    q: 'How do I get an AI receptionist?',
    a: 'Pick two or three products that connect to the software you already use, start their free trials, and forward your existing number to each in turn outside busy hours. Ring it yourself with your five most common calls and one awkward one. Keep the product that booked correctly and handed over cleanly. If none connects to your software, talk to a builder about a custom one.',
  },
  {
    q: 'Can I keep my business phone number?',
    a: 'Usually, yes. Most products work by forwarding your existing number when you are busy, after hours or all the time, so callers dial the same number. Check the details first: AiDial’s pricing page says its receptionist uses a new dedicated number, and Miyai lists a dedicated number only on its Scale plan. Ask how forwarding works with your phone provider before you start the trial.',
  },
  {
    q: 'How does an AI receptionist work?',
    a: 'Your calls forward to the AI. It answers in a natural voice, works out what the caller wants, asks the questions you set, checks your calendar or job software, and books, takes a message or transfers to a person. It then sends you a summary by text or email. The quality depends on the questions and rules you give it, so expect to tune it in the first two weeks.',
  },
  {
    q: 'What is the best AI receptionist for tradies in Australia?',
    a: 'Pick by your job software. On ServiceM8 or Simpro, Sophiie lists a two-way sync with both, while Johnni connects them as a quoted custom add-on. On AroFlo or Fergus, Voxworks names them on its trades page. On Tradify, none of the 13 names it, so the practical route is an AI receptionist for tradies that books into Google Calendar, which Tradify connects to. Johnni, Nexwin and Voxworks all list Google Calendar.',
  },
  {
    q: 'Which AI receptionist works with ServiceM8?',
    a: 'Sophiie lists a two-way ServiceM8 sync. AIssie, Miyai (Growth plan), Nexwin and AiDial list ServiceM8 too, Johnni connects it as a quoted custom add-on, and Valory lists it as an integration to discuss. OneBookPlus says it does not connect to ServiceM8. ServiceM8’s public add-on directory listed no AI receptionist on 21 October 2026, so ask each vendor what its connection writes into a job.',
  },
  {
    q: 'Which AI receptionist works with Cliniko?',
    a: 'Lyngo, MayaAI and AiDial all name Cliniko on their own sites. Cliniko’s own connected-apps directory listed eleven AI receptionist or AI phone products on 21 October 2026, including Lyngo, Aeva, BookedSolid and Solium AI. Ask whether the product books straight into your Cliniko diary or only sends you a request to book.',
  },
  {
    q: 'What is the best AI receptionist for dentists in Australia?',
    a: 'Start with your practice software. None of the 13 products we profiled names Core Practice or Dental4Windows (Centaur) on its own site. Core Practice’s own marketplace listed DentalFlo AI, Lumie and Patientdesk.ai on 21 October 2026. Among the 13, MayaAI, Valory and Miyai name dental practices as customers they serve, but none names a dental practice system. Ask any AI receptionist for dentists whether it books into your diary or only emails the front desk.',
  },
  {
    q: 'Which AI receptionist works with Tradify?',
    a: 'None of the 13 products we profiled names Tradify as a standard connection. Waboom, a New Zealand company, says its agent reads project schedules from Tradify. Tradify’s own connections page named only Xero, QuickBooks, Stripe and Google Calendar on 21 October 2026, and we found no public developer API. The practical route today is a receptionist that books into Google Calendar, which Tradify connects to.',
  },
  {
    q: 'Which AI medical receptionist is best in Australia?',
    a: 'It depends on your practice software. For GP practices on Best Practice, MayaAI and HealthEngine Helen. For allied health on Cliniko, Lyngo and MayaAI; on Nookal, Lyngo. For Halaxy, MayaAI and AiDial. Helen will not discuss symptoms or give clinical advice, by design. Because health providers are covered by the Privacy Act whatever their size, ask each one where recordings are stored.',
  },
  {
    q: 'What is the most realistic AI receptionist?',
    a: 'Every vendor says its voice sounds natural, and you cannot judge that from a website. Ring each trial number with a real call in a noisy setting and with a strong regional accent. Nexwin says on its own site that recognition accuracy varies with audio quality and accents, which is true of all of them. Voxworks and AiDial each offer 100+ Australian voices to choose from.',
  },
  {
    q: 'Do I have to tell callers they are speaking to AI?',
    a: 'The Office of the Australian Information Commissioner says businesses should clearly identify public-facing AI tools as AI, and update their privacy policy to explain how they use AI. MayaAI says it identifies itself as an AI assistant. OfficeHQ’s FAQ says callers will not know unless you want them to. Saying so in the greeting is the safer choice and costs you nothing.',
  },
  {
    q: 'Does the Privacy Act apply to my AI receptionist?',
    a: 'If your business turns over more than A$3 million a year, or you are a health service provider of any size, the Privacy Act covers you, according to the OAIC. That includes what your AI receptionist collects on calls. The OAIC also points to Australian Privacy Principle 8 on sending personal information overseas, so ask each vendor where calls are processed as well as where they are stored.',
  },
  {
    q: 'Where is my call data stored?',
    a: 'It differs by product. AiDial says call data never leaves Australia. MayaAI stores recordings in Australia but says some processing may happen elsewhere. OneBookPlus stores transcripts in Sydney while live calls pass through US providers. Valory says it is primarily hosted in Australia. AIssie says its language models are hosted in the United States. Get the answer in writing.',
  },
  {
    q: 'What is the difference between a virtual receptionist and an AI receptionist?',
    a: 'A virtual receptionist is a person in a call centre who answers your calls remotely. An AI receptionist is software that answers in a synthetic voice. Some services now mix both: OfficeHQ’s MyAI tier has a live receptionist ready to take over, and it charges live-agent calls separately. The AI products here answer every call at once; a person handles the calls the AI transfers.',
  },
  {
    q: 'Can an AI receptionist transfer calls to me?',
    a: 'Yes. Every product we profiled offers a way to pass a call to a person. The better ones warm-transfer: the AI tells your team member who is calling and why before connecting them. Sophiie, Johnni, Nexwin, AiDial, Voxworks and Waboom all say they do this. OneBookPlus rings your mobile and, if nobody answers in about 25 seconds, tells the caller the team will ring back.',
  },
  {
    q: 'Can an AI receptionist make outbound calls?',
    a: 'Several can. Johnni includes an outbound caller on its Starter and Growth plans and sells it for A$750 once on smaller plans. AiDial and Voxworks sell outbound plans, MayaAI runs recall and reminder campaigns, and Valory includes outbound from its Premium plan. OneBookPlus says it does not make outbound calls. Outbound marketing calls carry extra rules, so check them before you start.',
  },
  {
    q: 'Are AI receptionists legit?',
    a: 'The ones on this list are real Australian businesses. Each shows an Australian company, ABN or address on its own site, except Johnni and Nexwin, which state where they are based without an ABN on the pages we read. Ask for the ABN on your invoice before paying, read the terms on lock-in and setup fees, and use the free trial before paying.',
  },
  {
    q: 'When is a custom AI receptionist better than an app?',
    a: 'When your calls depend on rules no app can hold, such as job priority by suburb, quote logic, or several systems at once. Also when your software is not on any product’s list, or when you need control over where data goes. FactoryJet builds these for one business at a time and does not sell an app. A custom build costs more up front; Groovy Web’s July 2026 guide puts a single-purpose voice agent at US$3,000 to US$12,000 to build. That is a market range, not our price.',
  },
  {
    q: 'How long does it take to set up an AI receptionist?',
    a: 'A self-serve product can answer calls the same day you sign up, once you forward your number and write its greeting and questions. Plan on two weeks of listening to recordings and adjusting before you trust it after hours. Managed services such as Valory, and products with a scope of work such as AiDial, take longer because someone designs the call flow with you first.',
  },
];

export const post: BlogPost = {
  id: '797',
  slug: 'best-ai-receptionists-australia-2026',
  title: 'Best AI Receptionists in Australia (2026): 13 Compared, Plus Us',
  excerpt:
    'Thirteen AI receptionists sold by Australian businesses, checked on their own websites on 21 October 2026: list prices with GST terms, which job and practice software each connects to, where call data is kept, and who each suits. Plus when a custom build fits better. FactoryJet is listed last and says so.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 22, 2026',
  dateModified: 'Oct 31, 2026',
  readTime: '18 min read',
  imageUrl: `${IMG}-hero.webp`,
  imageAlt:
    'Over the shoulder of a Brisbane tradesman in a navy polo sitting in the open side door of his white van, checking a simple list on his phone under a jacaranda tree',
  meta: {
    title: 'Best AI Receptionists Australia 2026: 13 Compared',
    description:
      'AI receptionists sold in Australia compared, from A$20 a month + GST: ServiceM8 and Cliniko connections, where call data is kept, and who each suits.',
  },
  keyTakeaways: [
    'There is no single best AI receptionist in Australia. Choose by the software you already use: job software for trades, practice software for clinics.',
    'Every fact here was read on each product’s own website on 21 October 2026. Nobody paid to be listed, and the order is not a ranking.',
    'Published entry prices ran from A$20 a month plus GST for 10 calls to A$249 plus GST for 600 minutes. Some plans count calls and some count minutes, so compare like with like.',
    'None of the 13 names Tradify, Core Practice or Dental4Windows. If that is your software, read the custom-build section.',
    'FactoryJet builds custom AI receptionists, so we are on this list, last. We work remotely with Australian clients.',
  ],
  faqs: FAQS,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': PAGE_URL,
              url: PAGE_URL,
              name: 'Best AI Receptionists in Australia (2026): 13 Compared, Plus Us',
              description:
                'AI receptionists sold in Australia compared, from A$20 a month + GST: ServiceM8 and Cliniko connections, where call data is kept, and who each suits.',
              inLanguage: 'en-AU',
              datePublished: '2026-10-22',
              dateModified: '2026-10-31',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'AI receptionist software in Australia' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'AI receptionists in Australia compared (2026)',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: PRODUCTS.length,
              itemListElement: PRODUCTS.map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: p.name.replace(' (that is us)', ''),
                url: p.url,
              })),
            },
          ]),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-xs font-mono uppercase tracking-wider text-[#B23E13] mb-2" style={{ fontFamily: 'var(--font-geist-mono), ui-monospace, monospace' }}>The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          The best AI receptionist in Australia is the one that books into the software you already use. For trades on ServiceM8 or Simpro, start with Sophiie, then Johnni, Nexwin and AIssie. For allied health on Cliniko or Nookal, Lyngo and MayaAI. For GP practices on Best Practice, MayaAI and HealthEngine Helen. If your data must stay onshore, AiDial. If you want it set up and run for you, Valory.
        </p>
        <p className="text-gray-800 leading-relaxed">
          We read each product&rsquo;s own website on 21 October 2026 and copied its list prices exactly. Nobody paid to be listed. The order is not a ranking. FactoryJet builds custom receptionists, so we are last, and labelled.
        </p>
      </div>

      <p className="mb-4">
        On 21 October 2026 we ran 14 searches in Google Australia, such as &ldquo;ai receptionist australia&rdquo;, &ldquo;ai receptionist for tradies&rdquo;, &ldquo;ai receptionist for dental clinic&rdquo; and &ldquo;ai receptionist cliniko&rdquo;. The first page for the main phrase held seven product pages (Sophiie, AiDial, OneBookPlus, Miyai, AutoReception, Voxworks and Johnni) and three guides: two from companies that sell AI receptionists (Hey Jodie, VerticalAI) and one from an AI agency (Aivy). Most of those lists are written by a vendor about its own market. This one names the software each product connects to and prints every published price with its GST wording.
      </p>
      <p className="mb-4">
        So we read the products themselves. For each one we opened its homepage, pricing page, integrations page and terms on 21 October 2026, and wrote down only what it says about itself: who runs it, what it does, which software it connects to, where it keeps call data, and its list price with the GST wording exactly as printed. Thirteen get a full profile. Five more get a short note saying why they are not profiled.
      </p>
      <p className="mb-4">
        <strong>A note on honesty.</strong> FactoryJet builds custom AI receptionists, so we are on this list, last. We do not sell an app and none of the products below is a partner of ours. Several best-of lists on this topic are written by a product that recommends itself: Miyai ranks itself first and discloses it, Valory recommends itself, Johnni says its author runs Johnni, and AiDial discloses its conflict and declines to name a winner. That is fair practice, and a reason to read every list, this one included, with care. For how we build them ourselves, see our{' '}
        <a href="/au/ai-receptionist" className="text-[#B23E13] underline">AI receptionist service for Australian businesses</a>.
      </p>
      <p className="mb-6">
        Three terms in plain English. An <strong>AI receptionist</strong> is software that answers your business phone in a natural voice, asks the questions you set and books, takes a message or transfers the call. A <strong>warm transfer</strong> means the AI tells your team member who is calling and why before connecting them. <strong>Job software</strong> (ServiceM8, Simpro, Tradify) and <strong>practice software</strong> (Cliniko, Halaxy, Best Practice, Core Practice) hold your bookings, and the receptionist is only as useful as its connection to them.
      </p>
      <p className="mb-6">
        Four more you will see below. An <strong>ABN</strong> or <strong>ACN</strong> is the Australian Business Number or Australian Company Number that shows who you are paying. A <strong>CRM</strong> is the system that holds your customer list and sales pipeline. An <strong>API</strong> or <strong>webhook</strong> is the doorway one piece of software uses to send data into another.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The shortlist at a glance</h2>
      <p className="mb-4">
        Find your software in the &ldquo;Connects to&rdquo; column first. Then read those profiles in full.
      </p>
      <p className="md:hidden text-sm text-gray-600 mb-2 not-prose">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-8 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 720 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Product</th>
              <th className="p-3 text-left border border-gray-700">Best for</th>
              <th className="p-3 text-left border border-gray-700">Connects to (its own list)</th>
              <th className="p-3 text-left border border-gray-700">Published price</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.name} className={p.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{p.name}</td>
                <td className="p-3 border border-gray-200 align-top">{p.bestFor}</td>
                <td className="p-3 border border-gray-200 align-top">{p.connects}</td>
                <td className="p-3 border border-gray-200 align-top">{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we chose these products</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start with what Australian buyers see.</strong> We ran 14 Australian searches on 21 October 2026, then the 613 questions in Google&rsquo;s &ldquo;People also ask&rdquo; boxes they led to, and noted every AI receptionist product on the first pages.</li>
        <li><strong>Keep the Australian businesses.</strong> A product is in if its own site shows an Australian company, ABN, ACN or address. Waboom sells well in Australia but is a New Zealand company, so it gets a short note instead.</li>
        <li><strong>Keep products you can buy today.</strong> Each one sells an AI receptionist now, either self-serve or as a managed service.</li>
        <li><strong>Read the source, not the summary.</strong> Every profile comes from the product&rsquo;s own pages, opened on 21 October 2026, and links the page we read. No review site was used for any fact.</li>
        <li><strong>No scores.</strong> We have not run these products for a client, so we give no stars and no ranking. We say who each suits and one question worth asking it.</li>
        <li><strong>Prices only from the product.</strong> We copy list prices exactly, with their GST wording. Where a price is not public, we say so.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">The best AI receptionists in Australia, profiled</h2>
      <p className="mb-6">
        The order is not a ranking. Products built for trades come first, then products for clinics, then the services and all-in-one options, then us.
      </p>

      {PRODUCTS.map((p, i) => (
        <section key={p.name} className="mb-8">
          <h3 className="text-xl font-bold mt-6 mb-2">{i + 1}. {p.name}</h3>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Who runs it:</strong> {p.company}. <strong>Type:</strong> {p.type}.
          </p>
          <p className="mb-3">{p.what}</p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li><strong>Best for:</strong> {p.bestFor}</li>
            <li><strong>Connects to:</strong> {p.connects}</li>
            <li><strong>Worth asking them:</strong> {p.ask}</li>
          </ul>
          <p className="text-sm text-gray-600">
            Source: <a href={p.source} className="text-[#B23E13] underline" rel="noopener" target={p.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>{p.source.replace('https://', '')}</a>
          </p>
          {p.name === 'Voxworks' && (
            <figure className="my-8 not-prose">
              <img
                src={`${IMG}-tradie.webp`}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                alt="An Adelaide tradeswoman in a teal work shirt and grey cap holding a coiled garden hose beside her white ute while she reads a simple message on her phone"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="text-sm text-gray-600 mt-2">Trade products differ most in what happens after the call: a text summary, a booked job, or a job written into your software.</figcaption>
            </figure>
          )}
          {p.name === 'HealthEngine Helen' && (
            <figure className="my-8 not-prose">
              <img
                src={`${IMG}-clinic.webp`}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                alt="Seen from behind, a receptionist in a mustard cardigan at a bright Melbourne physiotherapy clinic checks a colour-blocked appointment calendar on her monitor while the desk phone sits idle"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="text-sm text-gray-600 mt-2">For clinics, the useful test is simple: does the booking appear in your practice software, or only in an email to the front desk?</figcaption>
            </figure>
          )}
        </section>
      ))}

      <h2 className="text-2xl font-bold mt-10 mb-4">Five more we checked, and why they are not profiled</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        {ALSO_CHECKED.map((a) => (
          <li key={a.name}>
            <strong>{a.name}.</strong> {a.line}{' '}
            <a href={a.source} className="text-[#B23E13] underline" rel="noopener" target="_blank">Source</a>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">What AI receptionists cost in Australia: published list prices</h2>
      <p className="mb-4">
        Eleven of the 13 products publish prices. We copied them exactly on 21 October 2026, sorted by entry price. These are each product&rsquo;s own list prices, not FactoryJet prices. Sophiie and HealthEngine Helen quote after a demo.
      </p>
      <p className="md:hidden text-sm text-gray-600 mb-2 not-prose">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 820 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Product</th>
              <th className="p-3 text-left border border-gray-700">Entry plan</th>
              <th className="p-3 text-left border border-gray-700">Top listed plan</th>
              <th className="p-3 text-left border border-gray-700">How usage is counted</th>
              <th className="p-3 text-left border border-gray-700">GST, trial and terms</th>
            </tr>
          </thead>
          <tbody>
            {PRICES.map((r) => (
              <tr key={r.product} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">
                  <a href={r.source} className="text-[#B23E13] underline" rel="noopener" target="_blank">{r.product}</a>
                </td>
                <td className="p-3 border border-gray-200 align-top">{r.entry}</td>
                <td className="p-3 border border-gray-200 align-top">{r.top}</td>
                <td className="p-3 border border-gray-200 align-top">{r.unit}</td>
                <td className="p-3 border border-gray-200 align-top">{r.terms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Read the unit.</strong> Six products count minutes, three count calls, one counts conversations of up to four minutes, and Miyai&rsquo;s pricing page does not say. A call at AiDial can run 10 minutes; a conversation at OneBookPlus is cut into four-minute blocks. Count your calls and their average length from last month&rsquo;s phone bill before you compare.</li>
        <li><strong>Check GST.</strong> Johnni and Voxworks say ex GST. OfficeHQ, Lyngo, MayaAI and Nexwin say plus GST. OneBookPlus says GST included, and Miyai&rsquo;s terms say GST is included where applicable. AIssie and Valory say GST is extra only in their terms. AiDial&rsquo;s pricing page does not say.</li>
        <li><strong>Check the extras.</strong> Valory charges setup from A$990. AiDial sets setup in a scope of work. Johnni charges A$50 a month for SMS alerts. OfficeHQ charges separately when a live receptionist takes over. Johnni, Nexwin, AIssie, Miyai, MayaAI, Lyngo and OneBookPlus each say no setup fee.</li>
        <li><strong>Check the exit.</strong> Nine of the 13 say month to month, no lock-in or cancel any time on the pages we read: Johnni, Nexwin, AIssie, Miyai, MayaAI, Lyngo, Valory, OneBookPlus and OfficeHQ. AiDial&rsquo;s scope of work may set a minimum term.</li>
      </ul>
      <p className="mb-6">
        For what AI chatbots, voice agents and consultants cost across Australia more widely, read our{' '}
        <a href="/blog/ai-cost-australia-2026" className="text-[#B23E13] underline">AI cost guide for Australia (2026)</a>. For medical practices specifically, see{' '}
        <a href="/blog/how-much-does-an-ai-medical-receptionist-cost-2026" className="text-[#B23E13] underline">how much an AI medical receptionist costs</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which software each AI receptionist connects to</h2>
      <p className="mb-4">
        This is where the products differ most. A receptionist that only texts you a summary still leaves you typing the job in at 9pm. Here is what each product names on its own site, grouped by the software Australian businesses told Google they use.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Your software</th>
              <th className="p-3 text-left border border-gray-700">Products that name it on their own site (21 Oct 2026)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">ServiceM8</td><td className="p-3 border border-gray-200 align-top">Sophiie (two-way sync), AIssie, Miyai (Growth plan), Nexwin (workflows), AiDial; Johnni as a quoted custom add-on; Valory as one to discuss. OneBookPlus says it does not.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Simpro</td><td className="p-3 border border-gray-200 align-top">Sophiie (two-way sync); Johnni as a quoted custom add-on; Valory as one to discuss.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">AroFlo, Fergus</td><td className="p-3 border border-gray-200 align-top">Voxworks, on its trades page only.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Tradify</td><td className="p-3 border border-gray-200 align-top">None of the 13.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Cliniko</td><td className="p-3 border border-gray-200 align-top">Lyngo, MayaAI, AiDial.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Halaxy</td><td className="p-3 border border-gray-200 align-top">MayaAI, AiDial.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Nookal, Splose, PracSuite</td><td className="p-3 border border-gray-200 align-top">Lyngo (all three); AiDial (PracSuite).</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Best Practice, Pracsoft</td><td className="p-3 border border-gray-200 align-top">MayaAI (Best Practice), HealthEngine Helen (both).</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Core Practice, Dental4Windows (Centaur)</td><td className="p-3 border border-gray-200 align-top">None of the 13.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Xero</td><td className="p-3 border border-gray-200 align-top">Sophiie, AIssie, AiDial; OneBookPlus in an invite-only beta.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 border border-gray-200 font-semibold align-top">Google Calendar</td><td className="p-3 border border-gray-200 align-top">Johnni (every plan), Sophiie, Nexwin, AIssie, AiDial, Voxworks, Valory; OneBookPlus one-way only.</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        We also opened the software makers&rsquo; own directories that day.{' '}
        <a href="https://www.cliniko.com/connected-apps/" className="text-[#B23E13] underline" rel="noopener" target="_blank">Cliniko&rsquo;s connected-apps page</a>{' '}listed eleven AI receptionist or AI phone products.{' '}
        <a href="https://www.corepractice.com.au/marketplace/apps/" className="text-[#B23E13] underline" rel="noopener" target="_blank">Core Practice&rsquo;s marketplace</a>{' '}listed three (DentalFlo AI, Lumie and Patientdesk.ai), and its developer access is for approved partners only.{' '}
        <a href="https://www.servicem8.com/addons" className="text-[#B23E13] underline" rel="noopener" target="_blank">ServiceM8&rsquo;s public add-on directory</a>{' '}listed no AI receptionist at all; its only phone item was its own ServiceM8 Phone. Tradify&rsquo;s connections page named Xero, QuickBooks, Stripe and Google Calendar, and we found no public developer API. Outside our list,{' '}
        <a href="https://www.waboom.ai/ai-voice-agents/construction/au" className="text-[#B23E13] underline" rel="noopener" target="_blank">Waboom says its agent reads project schedules from Tradify</a>. So for allied health you have plenty of choice, and for trades on ServiceM8 you should ask each vendor exactly what its connection writes into a job.
      </p>
      <p className="mb-6">
        Two pairs are worth comparing head to head. <strong>Sophiie vs Johnni:</strong> Sophiie lists a two-way ServiceM8 and Simpro sync but publishes no price; Johnni publishes every plan from A$49 a month ex GST, but connects ServiceM8 and Simpro only as a quoted add-on. <strong>Lyngo vs MayaAI:</strong> both book into Cliniko; Lyngo bills by the call and adds Nookal and Splose, while MayaAI bills by the minute, adds Halaxy and Best Practice, and offers a month free with no card.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">When a custom AI receptionist fits better than an app</h2>
      <p className="mb-4">
        Most small businesses should start with a product above. A custom build is worth the extra cost and time in five situations:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Your practice software is not on anyone&rsquo;s list.</strong> Dental practices on Core Practice or Dental4Windows (Centaur) found none of the 13 naming their system. A custom build for Core Practice goes through its partner program, so ask any builder whether they hold that access before you pay for scoping.</li>
        <li><strong>Your job rules are the product.</strong> Priority by suburb, a callout fee that depends on the time of day, which crew holds which licence, when to quote on the phone and when to book a site visit. Apps let you write questions; they rarely let you write those rules into ServiceM8 or Simpro the way your office manager would.</li>
        <li><strong>One call touches several systems.</strong> A booking that should create a job, check an overdue invoice in Xero, and update a CRM stage needs software written for that path.</li>
        <li><strong>You need to control where data goes.</strong> The products here range from &ldquo;never leaves Australia&rdquo; (AiDial) to language models hosted in the United States (AIssie). A custom build can run in your own cloud account, in the region you choose.</li>
        <li><strong>You are multi-site or high volume.</strong> Several clinics or depots, each with different hours, staff and services, sharing one number.</li>
      </ul>
      <p className="mb-4">
        A note on Tradify: a custom build cannot fix the lack of a public API. Until Tradify offers one, the practical route is a receptionist that books into Google Calendar, which Tradify connects to.
      </p>
      <p className="mb-6">
        What a custom build costs to make: Groovy Web&rsquo;s July 2026 guide puts a single-purpose voice agent for a small business at US$3,000 to US$12,000, and Master of Code&rsquo;s September 2026 guide puts an MVP voice agent at US$10,000 to US$25,000. Those are market ranges for the build, not FactoryJet prices. Sources:{' '}
        <a href="https://www.groovyweb.co/blog/ai-voice-agent-development-cost" className="text-[#B23E13] underline" rel="noopener" target="_blank">Groovy Web</a>{' '}and{' '}
        <a href="https://www.masterofcode.com/blog/voice-ai-development-costs" className="text-[#B23E13] underline" rel="noopener" target="_blank">Master of Code</a>.
        See how we approach it on our{' '}
        <a href="/au/ai-receptionist" className="text-[#B23E13] underline">custom AI receptionist page for Australia</a>, or our wider{' '}
        <a href="/au/ai-agents" className="text-[#B23E13] underline">AI agent development in Australia</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Privacy rules every Australian AI receptionist buyer should know</h2>
      <p className="mb-4">
        An AI receptionist records and transcribes your callers, so it collects personal information. Three points from the Office of the Australian Information Commissioner (OAIC) matter most:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Health businesses are always covered.</strong> Most businesses turning over A$3 million or less a year are outside the Privacy Act, but a health service provider is covered whatever its turnover. So is any business above that threshold.</li>
        <li><strong>Say it is AI.</strong> The OAIC&rsquo;s guidance on commercially available AI products says businesses should clearly identify public-facing AI tools as AI and update their privacy policy to explain how they use AI.</li>
        <li><strong>Know where calls go.</strong> The same guidance points to Australian Privacy Principle 8, which covers sending personal information overseas. Ask where calls are processed, not only where recordings are stored.</li>
      </ul>
      <p className="mb-4">
        Here is what each product said about data location on its own site on 21 October 2026:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>AiDial:</strong> customer and call data never leaves Australia; data centres in Sydney, Melbourne and Canberra.</li>
        <li><strong>MayaAI:</strong> recordings and transcripts stored in Australia; Australian storage does not mean all processing happens in Australia.</li>
        <li><strong>OneBookPlus:</strong> transcripts and records stored in AWS Sydney; the live call passes through phone and voice providers in the United States.</li>
        <li><strong>Valory:</strong> primarily hosted and operated in Australia, with a terms clause allowing processing outside Australia.</li>
        <li><strong>AIssie:</strong> language models used for answering are hosted in the United States.</li>
        <li><strong>Sophiie, Johnni, Lyngo, Miyai, HealthEngine Helen:</strong> no data-location statement on the pages we read. Ask.</li>
      </ul>
      <p className="mb-6">
        Sources:{' '}
        <a href="https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business" className="text-[#B23E13] underline" rel="noopener" target="_blank">OAIC, small business</a>{' '}and{' '}
        <a href="https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products" className="text-[#B23E13] underline" rel="noopener" target="_blank">OAIC, guidance on privacy and commercially available AI products</a>, both read 21 October 2026. This is general information, not legal advice.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to choose an AI receptionist in Australia: 7 steps</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Count last month&rsquo;s calls.</strong> Total calls, average length, and how many came after hours. Six products here bill by the minute and three by the call, so this decides which plan type suits you.</li>
        <li><strong>Start from your software.</strong> Use the connections table above to cut the list to two or three. On ServiceM8, for example, only Sophiie lists a two-way sync.</li>
        <li><strong>Write your five most common calls and one awkward one.</strong> A new booking, a reschedule, a price question, an urgent job, a complaint.</li>
        <li><strong>Run the free trials side by side.</strong> Ring each with those six calls, from a noisy place, with a strong accent if you can. MayaAI&rsquo;s month-long trial needs no card; Nexwin&rsquo;s seven-day trial does.</li>
        <li><strong>Check what lands in your software.</strong> A booked job, a draft job, or only an email? Check the transfer too: did your phone ring, and did you know who was calling?</li>
        <li><strong>Get the unit, GST, setup fee and exit in writing.</strong> Plus where call data is processed.</li>
        <li><strong>Go live after hours first.</strong> Listen to a week of recordings before you let it answer during the day.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">What warning signs should you watch for?</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>&ldquo;Integrates with ServiceM8&rdquo; with no word on what it writes into the job.</li>
        <li>A plan with no included minutes or calls printed next to the price.</li>
        <li>No legal entity, ABN or ACN anywhere on the site, and none on the invoice when you ask.</li>
        <li>No trial and no money-back period on a self-serve product.</li>
        <li>A promise that callers will never know it is AI. The OAIC says to identify AI tools as AI.</li>
        <li>No answer to &ldquo;where are my calls processed?&rdquo;</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Where FactoryJet fits</h2>
      <p className="mb-4">
        We are FactoryJet. We have served 500+ businesses since 2014, most of that time building online stores and the operations behind them. We design, build, integrate and support custom AI receptionists and AI agents, and you own everything we build. Bhavesh, our founder, reads every request.
      </p>
      <p className="mb-4">
        How we work: we show working software on your own call types before you sign. Each phase has a fixed price, quoted in writing. Changes are quoted and approved per request, with no monthly minimum. The AI and hosting can run in your own accounts at cost.
      </p>
      <p className="mb-6">
        Choose a product above if it already books into your software and handles your calls; it will be live sooner. Choose us if your software is not on anyone&rsquo;s list, or if your call rules are too complex for an app to hold. See our{' '}
        <a href="/au/ai-receptionist" className="text-[#B23E13] underline">AI receptionist service for Australia</a>, or start at the{' '}
        <a href="/au" className="text-[#B23E13] underline">FactoryJet Australia hub</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Other lists and guides</h2>
      <p className="mb-6">
        Comparing US and UK products too? Read our guide to the{' '}
        <a href="/blog/best-ai-receptionist-small-business" className="text-[#B23E13] underline">best AI receptionist for small business</a>. For an agency to build AI into your business more widely, see the{' '}
        <a href="/blog/best-ai-agencies-australia-2026" className="text-[#B23E13] underline">best AI agencies in Australia</a>. Tradies can also see our{' '}
        <a href="/au/websites-for-tradies" className="text-[#B23E13] underline">websites for tradies</a>, and dental practices our{' '}
        <a href="/au/dental-website-design" className="text-[#B23E13] underline">dental website design</a>.
      </p>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg my-8 not-prose">
        <p className="font-semibold text-orange-900 mb-2">Software not on anyone&rsquo;s list?</p>
        <p className="text-orange-800 mb-3">
          Tell us your job or practice software and your five most common calls. We will show you a receptionist handling them on your own data before you sign anything.
        </p>
        <a
          href="/au/ai-receptionist"
          className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
        >
          See a demo on my calls
        </a>
      </div>
    </>
  ),
};
