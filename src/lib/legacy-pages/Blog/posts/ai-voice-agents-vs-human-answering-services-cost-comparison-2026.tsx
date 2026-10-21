import visualQa from './ai-voice-agents-vs-human-answering-services-cost-comparison-2026.visual-qa.module.css';
import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '../data.types';

/*
 * Every price on this page is a list price read on the vendor's own pricing page. All ten
 * lists were first read on 11 October 2026 and read again on 21 October 2026, when none
 * had changed. None is a FactoryJet price and none is a sum worked out by us.
 * Custom build ranges are market ranges published by three development firms (BUILD_SOURCES),
 * read on 21 October 2026, each named in the sentence that uses it.
 * No running, hosting or maintenance figure for a custom build appears anywhere on this page
 * (Bhavesh, 11 Oct 2026), and the build sources' own upkeep figures are deliberately left out.
 * When a price changes, re-read the linked page and update the row, the takeaways and
 * the FAQ answers together.
 */
const SRC = {
  retell: 'https://www.retellai.com/pricing',
  bland: 'https://www.bland.ai/pricing',
  vapi: 'https://vapi.ai/pricing',
  synthflow: 'https://synthflow.ai/pricing',
  dialzara: 'https://dialzara.com/pricing',
  goodcall: 'https://www.goodcall.com/pricing',
  frontdesk: 'https://www.myaifrontdesk.com/pricing',
  smithAi: 'https://smith.ai/pricing/ai-receptionist',
  ruby: 'https://www.ruby.com/plans-and-pricing/',
  smithHuman: 'https://smith.ai/pricing/receptionists',
  twilio: 'https://www.twilio.com/en-us/voice/pricing/us',
  masterOfCode: 'https://masterofcode.com/blog/voice-ai-development-costs',
  groovyWeb: 'https://www.groovyweb.co/blog/ai-voice-agent-development-cost',
  softcery: 'https://softcery.com/lab/how-much-does-it-cost-to-build-an-ai-voice-agent',
  fcc: 'https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf',
  airCanada: 'https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do',
} as const;

const linkClass = 'text-[#B23E13] underline';

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {children}
  </a>
);

const PRICE_ROWS: { name: string; href: string; kind: string; price: string; gets: string }[] = [
  {
    name: 'Retell AI',
    href: SRC.retell,
    kind: 'Pay-as-you-go platform',
    price: '$0.07 to $0.31 a minute',
    gets: 'Starts at $0 with $10 in free credits. No minimums or contracts. 20 concurrent calls included, then $8.00 a month for each extra one. The Enterprise plan is custom priced.',
  },
  {
    name: 'Bland AI',
    href: SRC.bland,
    kind: 'Pay-as-you-go platform',
    price: 'Start: $0.14 a minute with a $0 platform fee. Build: $0.12 a minute plus a $299 a month platform fee.',
    gets: 'The rate covers the language model, speech to text and text to speech. Telephony is billed separately. Start: 10 concurrent calls, 100 calls a day. Build: 50 concurrent calls, 2,000 calls a day.',
  },
  {
    name: 'Vapi',
    href: SRC.vapi,
    kind: 'Pay-as-you-go platform',
    price: '$0.05 a minute for the Vapi platform, with models passed through at cost',
    gets: '$0 to start with $5 in free credits and no minimum minutes. 4 concurrent calls, then $10 a line a month. An optional Core success package is $29 a month.',
  },
  {
    name: 'Synthflow',
    href: SRC.synthflow,
    kind: 'Enterprise voice platform',
    price: 'Enterprise contracts from $30,000 a year',
    gets: 'Scoped around call volume, concurrency, telephony setup, integrations, security needs and launch support.',
  },
  {
    name: 'Dialzara',
    href: SRC.dialzara,
    kind: 'Ready-made AI receptionist',
    price: '$29 a month (up to 60 minutes), $99 (220), $199 (500), $349 (1,000)',
    gets: 'Extra minutes are $0.48 down to $0.35 each, by plan. No contract. 7-day free trial.',
  },
  {
    name: 'Goodcall',
    href: SRC.goodcall,
    kind: 'Ready-made AI answering service',
    price: '$79 a month (100 unique customers), $129 (500), $299 (2,000)',
    gets: 'No per-minute charges. Billed by unique customer each month. Extra customers are 79 cents, 26 cents and 15 cents each, by plan.',
  },
  {
    name: 'My AI Front Desk',
    href: SRC.frontdesk,
    kind: 'Ready-made AI receptionist',
    price: '$99 a month, or $79 a month billed annually',
    gets: '200 voice minutes a month, with web chat, two-way SMS and a CRM in the same plan. 7-day free trial.',
  },
  {
    name: 'Smith.ai AI Receptionist',
    href: SRC.smithAi,
    kind: 'AI receptionist with transfer to live staff',
    price: 'Free: $0 a month for 25 calls. Pro: $150 a month for 75 calls, $270 for 150, $500 for 300. Enterprise: $500 a month for 300 calls, $800 for 500.',
    gets: 'Extra calls are $3.00 each on Free and $2.10 to $2.50 each on paid plans. A complex call can transfer to a live receptionist.',
  },
  {
    name: 'Ruby',
    href: SRC.ruby,
    kind: 'Human answering service',
    price: '$250 a month (50 receptionist minutes), $395 (100), $720 (200), $1,725 (500)',
    gets: 'Live receptionists around the clock. The list states no setup or activation fees.',
  },
  {
    name: 'Smith.ai receptionists',
    href: SRC.smithHuman,
    kind: 'Human answering service',
    price: '$300 a month (30 calls), $810 (90), $2,100 (300)',
    gets: 'Extra calls are $11.50, $10.50 and $8.50 each, by plan. Live staff around the clock. The list states no setup fees.',
  },
];

/*
 * Cost by company size and use case. The size labels are ours; each build range is
 * quoted under the tier name its source uses, so a reader can check the match.
 */
const SIZE_ROWS: { size: string; job: string; buy: string; build: string }[] = [
  {
    size: 'Solo trade or small office, 1 to 10 staff',
    job: 'After-hours answering, messages, simple bookings',
    buy: 'Dialzara $29 to $349 a month. Goodcall $79 to $299 a month. Smith.ai AI Receptionist free for 25 calls, then $150 to $800 a month.',
    build: 'Groovy Web: $3,000 to $12,000 for an "SMB / single-purpose" build with one job and one CRM or calendar integration. Most offices this size buy a product.',
  },
  {
    size: 'Small business, 10 to 50 staff',
    job: 'Bookings written into the calendar or CRM, transfers to staff',
    buy: 'My AI Front Desk $99 a month ($79 billed annually). RingCentral AI Receptionist from $49 a month. Ruby, with people, $250 to $1,725 a month.',
    build: 'Groovy Web: $12,000 to $30,000 for "growth / multi-intent". Master of Code Global: $10,000 to $25,000 for an "MVP / proof of concept".',
  },
  {
    size: 'Mid-size company, 50 to 500 staff',
    job: 'Several call types, CRM and payments, inbound and outbound',
    buy: 'Developer platforms by the minute: Retell AI $0.07 to $0.31, Bland AI $0.12 to $0.14, Vapi $0.05 plus the providers you choose.',
    build: 'Master of Code Global: $25,000 to $50,000 for "mid-tier (CRM integration, multi-intent logic)".',
  },
  {
    size: 'Contact center or multi-site enterprise',
    job: 'High call volume, several languages, analytics',
    buy: 'Synthflow: enterprise contracts from $30,000 a year. Retell AI and Bland AI: Enterprise plans on custom pricing.',
    build: 'Master of Code Global: $50,000 to $150,000+ for "advanced (multilingual, compliance, analytics)". Groovy Web: $20,000 to $120,000 at enterprise scale.',
  },
  {
    size: 'Regulated business: healthcare, insurance, finance',
    job: 'Patient or policy data, a signed BAA, audit trails',
    buy: 'Vapi lists a HIPAA add-on with a Business Associate Agreement at $2,000 a month. Bland AI says it signs a BAA.',
    build: 'Softcery: $180,000+ for a "compliance-grade bespoke system", labelled as its own estimate band. Master of Code Global: $150,000 to $300,000+ for enterprise-grade work.',
  },
];

export const post: BlogPost = {
  id: 'ai-voice-agents-vs-human-answering-services-cost-comparison-2026',
  slug: 'ai-voice-agents-vs-human-answering-services-cost-comparison-2026',
  title: 'How Much Does an AI Voice Agent Cost in 2026? List Prices, Custom Build Ranges and Human Answering Services',
  excerpt:
    'How much does an AI voice agent cost in 2026? Building a custom one runs $3,000 to $12,000 for a single-purpose small business agent (Groovy Web) and $25,000 to $50,000 for a mid-tier agent with CRM integration (Master of Code Global). Renting starts lower: on 21 October 2026 Retell AI listed $0.07 to $0.31 a minute, Dialzara $29 a month and Ruby, a human answering service, $250 a month.',
  date: 'September 1, 2026',
  dateModified: 'October 21, 2026',
  readTime: '15 min read',
  author: 'Bhavesh Barot',
  category: 'Emerging Tech',
  imageUrl: '/images/blog/ai-voice-agent-vs-human-answering-service.jpg',
  meta: {
    title: 'How Much Does an AI Voice Agent Cost in 2026? Prices Compared',
    description:
      'AI voice agent cost in 2026: custom builds $3,000 to $150,000+ by size, Retell AI $0.07 to $0.31 a minute, Dialzara from $29 a month, Ruby from $250. Prices read 21 Oct.',
  },
  keyTakeaways: [
    'Building a custom AI voice agent in 2026 costs $3,000 to $12,000 for one job with one integration, per Groovy Web, and $25,000 to $50,000 for a mid-tier agent with CRM integration and several call types, per Master of Code Global. Master of Code Global puts multilingual, compliance-heavy builds at $50,000 to $150,000 and up.',
    'Pay-as-you-go voice agent platforms list a price per minute. On 21 October 2026 Retell AI listed $0.07 to $0.31 a minute, Bland AI listed $0.14 a minute on Start with no platform fee, and Vapi listed $0.05 a minute for its platform with models passed through at cost.',
    'Ready-made AI receptionist products list a price per month. Dialzara listed $29 a month for up to 60 minutes, Goodcall $79 a month for 100 unique customers, My AI Front Desk $99 a month with 200 voice minutes, and Smith.ai AI Receptionist $150 a month for 75 calls.',
    'Human answering services list a price per minute or per call of a person. Ruby listed 50 receptionist minutes at $250 a month and 500 at $1,725. Smith.ai listed 30 calls at $300 a month and 300 at $2,100, answered by its own staff.',
    'The lists sell different units: minutes, calls or unique customers. Count your own calls and your average call length for a busy month before you set two lists side by side.',
    'Regulated buyers pay for compliance on the price list too. Vapi lists its HIPAA add-on, which includes a Business Associate Agreement, at $2,000 a month. Under a 2024 FCC ruling an AI-generated voice counts as artificial under the TCPA, so outbound AI calls need consent first.',
    'For seasonal spikes, check the concurrent call limit. Retell AI includes 20 concurrent calls on pay as you go, Bland AI 10 on Start and Vapi 4 on its usage-only plan.',
    'Buy an off-the-shelf AI receptionist for standard calls, keep a person on the hard calls, and build a custom voice agent only when a product hits a wall it cannot pass.',
    'A custom build has no list price. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call.',
    'On a custom build you own the repository, the telephony backend and the prompt state machines outright, with no per-seat licensing.',
  ],
  faqs: [
    { q: 'How much does an AI voice agent cost?', a: "It depends which of three things you buy. Pay-as-you-go platforms list a price per minute: Retell AI $0.07 to $0.31 and Bland AI $0.14 on its Start plan. Ready-made AI receptionist products list a price per month: Dialzara from $29, Goodcall from $79 and My AI Front Desk $99. A custom build is quoted per project: development firms publish ranges from $3,000 to $12,000 for one job (Groovy Web) to $25,000 to $50,000 for a mid-tier agent with CRM integration (Master of Code Global). Every list price here was read on the vendor's own pricing page on 21 October 2026." },
    { q: 'How much does it cost to build a custom AI voice agent in 2026?', a: 'Published market ranges, read on 21 October 2026: Groovy Web puts a single-purpose small business build at $3,000 to $12,000, a multi-intent agent with CRM, telephony and calendar at $12,000 to $30,000, and enterprise scale at $20,000 to $120,000. Master of Code Global lists $10,000 to $25,000 for a proof of concept, $25,000 to $50,000 for mid-tier, $50,000 to $150,000+ for multilingual and compliance work, and $150,000 to $300,000+ for enterprise-grade builds. FactoryJet quotes its own build as a fixed price in writing after a short scoping call.' },
    { q: 'What does an AI voice agent cost for a small business compared with a call center?', a: 'A small office usually buys a product: Dialzara lists $29 to $349 a month, Goodcall $79 to $299 and Smith.ai AI Receptionist $150 to $800 for 75 to 500 calls. If it needs a build, Groovy Web puts one job with one integration at $3,000 to $12,000. A contact center weighs enterprise platforms, such as Synthflow at $30,000 a year and up, against a custom build that Master of Code Global prices at $50,000 to $150,000+ for multilingual, compliance and analytics work. Prices were read on 21 October 2026.' },
    { q: 'How much does an AI voice agent cost per month?', a: 'Ready-made products publish monthly plans. On 21 October 2026 Dialzara listed $29 a month for up to 60 minutes and $349 for up to 1,000. Goodcall listed $79 a month for 100 unique customers and $299 for 2,000, with no per-minute charge. My AI Front Desk listed $99 a month with 200 voice minutes. Smith.ai AI Receptionist listed $150 a month for 75 calls. Pay-as-you-go platforms such as Retell AI and Bland AI bill by the minute, so the month depends on how many minutes your callers use.' },
    { q: 'How much does an AI voice agent cost per minute?', a: 'Three pay-as-you-go platforms listed these rates on 21 October 2026. Retell AI: $0.07 to $0.31 a minute, with a calculator that moves the rate with the language model, voice and telephony you pick. Bland AI: $0.14 a minute on Start, or $0.12 a minute on Build, which also carries a $299 a month platform fee. Vapi: $0.05 a minute for the Vapi platform, with speech and language models passed through at cost. Dialzara lists $0.35 to $0.48 a minute, but only for minutes above the allowance in a plan.' },
    { q: 'Which vendors offer pay-as-you-go pricing for AI voice agents?', a: 'Three that we read on 21 October 2026. Retell AI starts at $0 with no minimums or contracts and includes 20 concurrent calls. Bland AI has a Start plan at $0.14 a minute with a $0 platform fee, 10 concurrent calls and a cap of 100 calls a day. Vapi starts at $0 with no minimum minutes and 4 concurrent calls, and lists extra lines at $10 a line a month. For a seasonal business such as a construction or roofing contractor, the concurrent call limit decides how many callers get an answer at the same moment during a spike.' },
    { q: 'How does an AI voice agent compare with a human answering service on cost?', a: 'Set the published lists side by side. Ruby lists 50 receptionist minutes at $250 a month and 500 at $1,725. Smith.ai lists 30 calls answered by its own staff at $300 a month and 300 at $2,100. Among AI products, Dialzara lists up to 60 minutes at $29 a month and up to 500 at $199, and Smith.ai AI Receptionist lists 75 calls at $150 a month. All were read on 21 October 2026. What a person adds is judgement on the hard calls, which is why a sensible design keeps a transfer path to a human.' },
    { q: 'What does a custom AI voice agent cost?', a: 'A custom build has no list price, because the price depends on what is built: which systems the agent reads and writes, how many kinds of call it handles and where calls transfer. Published market ranges run from $3,000 to $12,000 for one job (Groovy Web) to $50,000 to $150,000+ for multilingual and compliance-heavy work (Master of Code Global). FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call. We can keep managing the servers, the AI, the APIs and the maintenance, so your team does not have to.' },
    { q: 'What does the per-minute price of an AI voice agent include?', a: 'It differs by vendor, so read the line under the price. Every call uses four parts: a phone line, speech to text, a language model and text to speech. Bland AI says its per-minute rate covers the language model, speech to text and text to speech, with telephony billed separately. Vapi says its $0.05 a minute is for the Vapi platform, with models passed through at cost. Retell AI publishes a range, $0.07 to $0.31 a minute, and a calculator that moves with the options you choose.' },
    { q: 'Is there a free AI voice agent plan or trial?', a: 'Several vendors listed one on 21 October 2026. Smith.ai AI Receptionist has a Free plan at $0 a month for 25 calls, then $3.00 a call. Retell AI gives $10 in free credits and Vapi gives $5. Bland AI has a Start plan with a $0 platform fee and no card required. Dialzara and My AI Front Desk each list a 7-day free trial, and Goodcall lets you build a free demo agent before you connect a number.' },
    { q: 'Should I build a custom voice agent or just buy a product?', a: 'Buy, in most cases. If your calls are fairly standard and your scheduling software is mainstream, an off-the-shelf AI receptionist will be live faster and cheaper than anything custom, on a plan you can read before you sign. Dialzara listed plans from $29 a month and Goodcall from $79 a month on 21 October 2026. Building earns its cost when you hit a wall those products cannot pass.' },
    { q: 'When does a custom build beat an off-the-shelf product?', a: 'Four situations, in our experience. An intake process that does not fit the logic flows of the product. A system the product will not integrate with. A legal or industry requirement the product covers only on a plan priced beyond your budget. Or a workflow spanning several tools that has to stay consistent across all of them. Outside those, buy the product.' },
    { q: 'Can customers tell they are speaking with an AI voice agent?', a: 'Many will not on a routine booking, because a fast reply and a natural voice remove the tells people listen for. Some will, and that is fine. We would rather build agents that introduce themselves honestly as a digital assistant than ones that try to pass, because a caller who feels deceived is worse for you than one who knew from the start.' },
    { q: 'What happens when a caller has a complex or emotional situation?', a: 'The agent runs deterministic sentiment and complexity triggers. When a caller expresses frustration, describes serious injury, or asks for a specific specialist, it executes an immediate warm transfer to on-call staff with a summary of the conversation already captured, so your colleague does not start from nothing.' },
    { q: 'How does the AI voice agent integrate with our existing phone numbers?', a: 'You keep your numbers. We set up conditional call forwarding or SIP trunk routing from your existing carrier, whether that is RingCentral, Vonage, Dialpad, Cisco or AT&T, to the voice gateway. You choose whether it handles overflow only, after hours only, or every call.' },
    { q: 'How does the agent avoid talking over the caller?', a: 'Barge-in handling. If the caller starts speaking while the agent is talking, audio playback stops within about 50 milliseconds and the agent listens. Getting this wrong is the single most common reason a voice agent feels robotic, and it is worth testing explicitly before launch.' },
    { q: 'Can the voice agent take card payments securely?', a: 'Yes. The caller types the card number on the phone keypad and it goes straight to a payment gateway such as Stripe or Authorize.net, so the number is never spoken into a recording or a transcript. Never accept a design where card details are read aloud.' },
    { q: 'How does the agent handle callers who do not speak English?', a: 'Real-time language detection switches the conversation into Spanish, French or Portuguese and writes standardised English notes back into your CRM, so your team reads one consistent record regardless of the language the call happened in.' },
    { q: 'Which CRM and scheduling systems can it connect to?', a: 'We build bi-directional connectors against the system your bookings actually live in. Ones we have worked with include Salesforce, HubSpot, Clio, Filevine, CDK Global, Reynolds and Reynolds, Tekion, Xtime, ServiceTitan, Jobber, AthenaHealth and Dentrix. If yours is not listed we scope a connector against its API during discovery.' },
    { q: 'Who owns the code and the call recordings?', a: 'You do, on a custom build. That means the full repository, the telephony backend and the prompt state machines, with no per-seat licensing and no dependency on us to keep operating. This is the main structural difference from renting a product, and it is worth getting in writing whoever you hire.' },
    { q: 'Can the agent make outbound calls as well as answer them?', a: 'Yes: appointment reminders, follow-ups and recall campaigns. Outbound is more regulated than inbound, so any build has to observe TCPA rules and STIR/SHAKEN caller ID attestation. Treat an agency that waves this away as a warning sign.' },
    { q: 'How long does it take to build and deploy a custom voice agent?', a: 'Typically three to five weeks for an agent connected to your calendar or CRM, covering telephony routing, voice persona tuning and end-to-end testing. The pace is usually set by how quickly you can hand over system credentials and decide your call rules, not by the engineering.' },
    { q: 'What infrastructure does it need to run on?', a: 'Lightweight containers on a cloud virtual machine with AWS, Google Cloud or DigitalOcean, or on-premise if you require it. We can keep managing the servers, the AI, the APIs and the maintenance, so your team does not have to.' },
    { q: 'Will an AI voice agent damage customer experience?', a: 'It can, if you deploy it badly. The failure modes are predictable: no clean handoff to a human, an agent that cannot admit it does not know, and long latency that makes people talk over it. It also fixes a worse experience most businesses already inflict, which is nobody answering at all. Start with after-hours only, listen to real recordings weekly, and expand once you trust it.' },
    { q: 'What happens if the AI cannot answer the question?', a: 'It should say so and route to a person, not guess. Insist on hearing this path demoed before you buy or build, because it is where weak implementations fall over. A good agent captures what it learned first, so the human picks up with context rather than asking the caller to start again.' },
    { q: 'Do we need to record calls, and what about consent?', a: 'Recording is useful for tuning the agent but it is not mandatory, and consent rules vary by state, with several requiring all-party consent. Decide deliberately rather than by default. If you handle health information you also need a signed BAA with any vendor touching the audio, and you should confirm retention periods in writing.' },
    { q: 'Is an AI voice agent HIPAA compliant?', a: 'Only if the vendor signs a Business Associate Agreement and your setup handles patient data the way HIPAA requires. On 21 October 2026 Vapi listed a HIPAA add-on with a BAA at $2,000 a month. Bland AI said it is HIPAA compliant with a signed BAA and holds SOC 2 Type I and Type II. Retell AI described itself as SOC 2 certified and HIPAA-ready, with a BAA in its plan list. RingCentral said its AI Receptionist is designed to support HIPAA compliance. Get the signed BAA before any patient calls.' },
    { q: 'Is it legal for an AI voice agent to make outbound calls?', a: 'In the US, with care. On 8 February 2024 the FCC ruled that calls made with AI-generated voices are artificial under the Telephone Consumer Protection Act, and its rules require telemarketers to get prior express written consent before robocalling consumers. Inbound answering is a different case from dialling out. Take legal advice before an AI voice calls anyone, and keep a record of each consent.' },
    { q: 'Is a business responsible for what its AI agent tells a caller?', a: "A Canadian tribunal said yes. In Moffatt v. Air Canada (2024 BCCRT 149, 14 February 2024), Air Canada's website chatbot told a customer that a bereavement fare could be claimed after booking, which was not the airline's policy. The tribunal found Air Canada did not take reasonable care to make its chatbot accurate and ordered it to pay C$812.02. A voice agent should answer refund and policy questions from your written policy, and hand off when it is unsure." },
    { q: 'What does the phone line for an AI voice agent cost?', a: "Twilio, a phone carrier many voice platforms connect to, listed these US prices on 21 October 2026: a local number at $1.15 a month, receiving calls on it at $0.0085 a minute, making calls at $0.0140 a minute, and call recording at $0.0025 a minute. Some platforms bundle the line. Bland AI says telephony is billed separately from its per-minute rate, and Vapi lists Twilio inbound at $0.008 a minute as a pass-through." },
    { q: 'How do we measure whether the voice agent is working?', a: 'Four numbers monthly: calls answered against calls received, bookings completed by the agent, transfers to a human and why, and abandoned calls. Traffic-style metrics tell you nothing here. The single most revealing habit is listening to five real recordings a week for the first two months.' },
    { q: 'Can it handle a sudden spike in call volume?', a: 'Yes, up to the concurrent call limit on your plan. On 21 October 2026 Retell AI included 20 concurrent calls on pay as you go, Bland AI 10 on Start and 50 on Build, and Vapi 4 on its usage-only plan with extra lines at $10 a line a month. On a custom build, concurrency is a configuration setting. A storm, a product recall or a busy Monday is when calls are worth the most, so size the limit for that day.' },
  ],
  content: (
    <article className="prose prose-lg max-w-none text-[#14110F]">

      <h2 id="cost">How Much Does an AI Voice Agent Cost in 2026?</h2>
      <p>
        <strong>
          Building a custom AI voice agent in 2026 costs about $3,000 to $12,000 for one job with one integration, according to{' '}
          <Ext href={SRC.groovyWeb}>Groovy Web</Ext>, and $25,000 to $50,000 for a mid-tier agent with CRM integration and several call types, according to{' '}
          <Ext href={SRC.masterOfCode}>Master of Code Global</Ext>. Renting starts lower. On the price lists we read on 21 October 2026, Retell AI lists $0.07 to $0.31 a minute and Bland AI $0.14 a minute, pay as you go, and a ready-made AI receptionist costs $29 a month at Dialzara, $79 at Goodcall and $99 at My AI Front Desk.
        </strong>{' '}
        Each list price is the published price on that vendor&apos;s own pricing page. The build ranges are what each firm publishes for the US market, and the prices are in US dollars.
      </p>
      <p>
        The figures sit far apart because they are three different purchases. A platform sells minutes, and you or a developer build the agent on it. A receptionist product sells a finished agent on a monthly plan. A custom build is a project, made for your call types and your systems, and you own what is built. A human answering service is the fourth option, and two of them publish their prices as well.
      </p>

      <h2 id="price-table">AI Voice Agent Pricing on 21 October 2026: Ten Published Price Lists</h2>
      <p>
        We opened ten price lists from nine vendors on 21 October 2026 and copied the plan names, prices and limits as written. Each row links to the page it came from. All prices are in US dollars.
      </p>

      <div className="overflow-x-auto my-8 not-prose">
        <table className={`w-full text-left text-sm border border-[#E7DED6] bg-white rounded-xl shadow-sm ${visualQa.priceTable}`}>
          <thead className="bg-[#FFF8F5] border-b border-[#E7DED6]">
            <tr>
              <th className="p-4 font-bold text-[#14110F]">Product and source</th>
              <th className="p-4 font-bold text-[#14110F]">What it is</th>
              <th className="p-4 font-bold text-[#14110F]">Listed price</th>
              <th className="p-4 font-bold text-[#14110F]">What the list says you get</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E7DED6]">
            {PRICE_ROWS.map((row) => (
              <tr key={row.name}>
                <td className="p-4 font-semibold align-top">
                  <Ext href={row.href}>{row.name}</Ext>
                </td>
                <td className="p-4 text-[#46403B] align-top">{row.kind}</td>
                <td className="p-4 text-[#14110F] align-top">{row.price}</td>
                <td className="p-4 text-[#46403B] align-top">{row.gets}</td>
              </tr>
            ))}
            <tr>
              <td className="p-4 font-semibold align-top">Custom-built voice agent</td>
              <td className="p-4 text-[#46403B] align-top">Built for your calls and your systems</td>
              <td className="p-4 text-[#14110F] align-top">No list price</td>
              <td className="p-4 text-[#46403B] align-top">FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Each figure is the list price on the linked page, exactly as the vendor states it. Prices change, so open the link before you budget. A longer list of products, with what each one does, is in{' '}
        <Link href="/blog/best-ai-receptionist-small-business" className={linkClass}>our guide to AI receptionist and voice agent products for small business</Link>.
      </p>


      <h2 id="by-company-size">AI Voice Agent Cost by Company Size and Use Case (2026)</h2>
      <p>
        The same question gets a different answer at a five-person plumbing firm and at a 300-seat contact center. The table sets the off-the-shelf list prices we read on 21 October 2026 beside the custom build ranges that three development firms publish. The size bands are ours. Each build range keeps the tier name its source uses, so you can check the match.
      </p>

      <div className="overflow-x-auto my-8 not-prose">
        <table className={`w-full text-left text-sm border border-[#E7DED6] bg-white rounded-xl shadow-sm ${visualQa.priceTable}`}>
          <thead className="bg-[#FFF8F5] border-b border-[#E7DED6]">
            <tr>
              <th className="p-4 font-bold text-[#14110F]">Company size</th>
              <th className="p-4 font-bold text-[#14110F]">Typical call job</th>
              <th className="p-4 font-bold text-[#14110F]">Buy: list price read 21 Oct 2026</th>
              <th className="p-4 font-bold text-[#14110F]">Build: published market range</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E7DED6]">
            {SIZE_ROWS.map((row) => (
              <tr key={row.size}>
                <td className="p-4 font-semibold align-top">{row.size}</td>
                <td className="p-4 text-[#46403B] align-top">{row.job}</td>
                <td className="p-4 text-[#14110F] align-top">{row.buy}</td>
                <td className="p-4 text-[#46403B] align-top">{row.build}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Read the build ranges as what the market charges, not as a quote. They come from firms that sell this work:{' '}
        <Ext href={SRC.groovyWeb}>Groovy Web</Ext> (6 July 2026),{' '}
        <Ext href={SRC.masterOfCode}>Master of Code Global</Ext> (updated 14 September 2026) and{' '}
        <Ext href={SRC.softcery}>Softcery</Ext> (3 July 2026). Their bottom ends disagree. Softcery puts a configured platform agent at $1,000 to $15,000 and a custom integrated build at $80,000 to $200,000, and says the same 12-week scope can price at about $48,000, $120,000 or $216,000 depending on who staffs it. The gap is scope and team mix, so ask every firm you speak to which tier its quote sits in.
      </p>

      <h2 id="what-you-buy">What Each Price List Sells, and Which Buyer It Suits</h2>
      <p>
        A business that wants every call answered can buy one of four services. Each suits a different kind of call, and each tells you a different amount on its price list.
      </p>

      <table className={visualQa.profileFacts} tabIndex={0}><tbody><tr><th scope="row"><h3>1. A Pay-As-You-Go Voice Agent Platform</h3></th><td>
      <p>
        Retell AI, Bland AI and Vapi sell the working parts of a voice agent and bill by the minute. Someone still has to design the conversation, connect the calendar or CRM and test it. That can be your own developer or a firm you hire. This route suits a business with technical help on hand, and one whose call volume swings through the year: Retell AI and Vapi state no minimums, and the Bland AI Start plan carries a $0 platform fee.
      </p>
      <p>
        Read what the per-minute number covers. Every call uses four parts: a phone line, speech to text, a language model that decides what to say, and text to speech. Bland AI says its rate covers the language model, speech to text and text to speech, with telephony billed separately. Vapi says its $0.05 a minute is for the Vapi platform, with models passed through at cost. Retell AI publishes a range and a calculator that moves with the model, voice and telephony you pick. Two per-minute numbers compare only when they cover the same parts.
      </p>

      </td></tr><tr><th scope="row"><h3>2. A Ready-Made AI Receptionist Product</h3></th><td>
      <p>
        Dialzara, Goodcall, My AI Front Desk and Smith.ai sell a finished agent you subscribe to. Depending on the plan, it answers, takes messages, books appointments and transfers calls. If your calls are reasonably standard and your scheduling software is mainstream, one of these products will be live faster and cheaper than anything custom, and for many businesses it is the right answer.
      </p>
      <p>
        Check the unit before you compare two of them. Dialzara and My AI Front Desk include an allowance of minutes. Smith.ai counts calls. Goodcall counts unique customers and says it never meters minutes. At the enterprise end, Synthflow lists contracts from $30,000 a year.
      </p>

      </td></tr><tr><th scope="row"><h3>3. A Human Answering Service</h3></th><td>
      <p>
        A person picks up. That counts most on the hard calls: a caller who is frustrated, a caller describing a serious injury, a caller asking for a specific specialist.
      </p>
      <p>
        Human services price a minute or a call of a person. The{' '}
        <Ext href={SRC.ruby}>Ruby plans page</Ext>{' '}
        lists 50 receptionist minutes at $250 a month, 100 at $395, 200 at $720 and 500 at $1,725. The{' '}
        <Ext href={SRC.smithHuman}>Smith.ai receptionist pricing page</Ext>{' '}
        lists 30 calls at $300 a month, 90 at $810 and 300 at $2,100, answered by its own staff. We read both lists at those links on 21 October 2026.
      </p>
      <p>
        One list sells minutes and the other sells calls, so you need your own average call length before you can set them side by side. Both step up with volume, so check which tier your busiest month would land in.
      </p>
      <p>
        A shared service answers for many unrelated businesses, so the same operator may take a dental clinic call straight after a roofing inquiry. Before you sign, ask what its operators can do beyond taking a message, such as following your scheduling rules, checking live inventory or triaging a technical problem.
      </p>

      </td></tr><tr><th scope="row"><h3>4. A Custom-Built Voice Agent</h3></th><td>
      <p>
        A custom build earns its cost when you hit a wall those products cannot pass: an intake process that does not fit their logic flows, a system they will not integrate with, a legal or industry requirement they cover only on a plan priced beyond your budget, or a workflow spanning several tools. On a custom build you own the repository, the telephony backend and the prompt state machines outright, with no per-seat licensing. The agent writes confirmed appointments and parsed intake straight into your practice management system, DMS or CRM.
      </p>
      <p>
        A custom build has no price list to read, because the price depends on what is built. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call. We can keep managing the servers, the AI, the APIs and the maintenance, so your team does not have to.
      </p>
      <p>
        FactoryJet builds AI voice agents for call centers as well as small offices. The scope for a small office is on our{' '}
        <Link href="/services/ai-receptionist" className={linkClass}>AI receptionist service page</Link>, and the scope for a larger team is on our{' '}
        <Link href="/services/ai-call-center-agents" className={linkClass}>AI call center agents page</Link>. If you run a medical or dental practice, the rules on patient data change the choice enough to need a separate guide:{' '}
        <Link href="/blog/how-much-does-an-ai-medical-receptionist-cost-2026" className={linkClass}>what an AI medical receptionist costs</Link>.
      </p>

      </td></tr></tbody></table>
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8 not-prose">
        <h3 className="text-lg font-bold text-[#14110F] mb-3">Find out if a ready-made product covers your calls</h3>
        <p className="text-base text-[#46403B] mb-4">
          Bring your call types and a rough count of calls a month to a 30-minute call with founder Bhavesh Barot. We will tell you whether a ready-made product covers them or whether they need a custom agent. If they need a build, FactoryJet quotes a fixed price in writing after that call.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="per-month">How Much Does an AI Voice Agent Cost Per Month?</h2>
      <p>
        On a ready-made product, the month is the plan price. The entry plans on 21 October 2026 were Dialzara at $29 a month for up to 60 minutes, Goodcall at $79 a month for 100 unique customers, My AI Front Desk at $99 a month with 200 voice minutes, and Smith.ai AI Receptionist at $150 a month for 75 calls. Smith.ai also lists a Free plan at $0 a month for 25 calls.
      </p>
      <p>
        Higher up the same lists, Dialzara reads $349 a month for up to 1,000 minutes, Goodcall $299 a month for 2,000 unique customers, and Smith.ai AI Receptionist $800 a month for 500 calls.
      </p>
      <p>
        A pay-as-you-go platform has no plan price to quote. The month is the minutes your callers use at the listed rate, plus anything the list prices beside it, such as phone numbers or extra concurrent lines. Two of the three add a fixed part on higher plans. Bland AI lists a $299 a month platform fee on Build, and Vapi lists its Core success package at $29 a month.
      </p>
      <p>
        Human answering services publish monthly plans as well. Ruby starts at $250 a month for 50 receptionist minutes and Smith.ai at $300 a month for 30 calls.
      </p>

      <h2 id="pay-as-you-go">Which Vendors Offer Pay-As-You-Go Pricing for AI Voice Agents?</h2>
      <p>
        Three of the lists we read have a plan that bills only for use. That suits a business whose calls rise and fall with the season, such as a construction or roofing contractor.
      </p>
      <table className={visualQa.profileFacts} tabIndex={0}><tbody>
        <tr><th scope="row"><strong>Retell AI:</strong></th><td> $0.07 to $0.31 a minute. It starts at $0, with no minimums or contracts, and includes 20 concurrent calls.</td></tr>
        <tr><th scope="row"><strong>Bland AI, Start plan:</strong></th><td> $0.14 a minute with a $0 platform fee. It includes 10 concurrent calls and up to 100 calls a day.</td></tr>
        <tr><th scope="row"><strong>Vapi, usage only:</strong></th><td> $0.05 a minute for the Vapi platform, with models passed through at cost. It starts at $0 with no minimum minutes and 4 concurrent calls, and lists extra lines at $10 a line a month.</td></tr>
      </tbody></table>
      <p>
        In a spike, the number that decides who gets an answer is concurrent calls: how many callers the plan can talk to at the same moment. Goodcall handles peaks a different way. It lists no per-minute charge and bills by unique customer, so a long booking call counts the same as a short one.
      </p>

      <h2 id="which-calls">AI Voice Agent or Human Answering Service: Which Calls Suit Which</h2>
      <p>
        Most businesses get more than one kind of call, so the answer is often two services working together.
      </p>
      <table className={visualQa.profileFacts} tabIndex={0}><tbody>
        <tr><th scope="row"><strong>Routine bookings and standard questions:</strong></th><td> an off-the-shelf AI receptionist, when your scheduling software is mainstream.</td></tr>
        <tr><th scope="row"><strong>Calls that arrive all at once:</strong></th><td> an AI agent, bought or built, up to the concurrent call limit on your plan. On a product, check that limit on the plan you are buying.</td></tr>
        <tr><th scope="row"><strong>Calls where judgement counts:</strong></th><td> a person. When a caller is frustrated, describes a serious injury or asks for a specific specialist, the call should go to a human answering service or to your own on-call staff. A well-built agent transfers it with a summary of the conversation already captured.</td></tr>
        <tr><th scope="row"><strong>Calls that depend on your own systems:</strong></th><td> a custom-built voice agent, when your intake does not fit the logic flows of a product, the product will not integrate with a system you use, or one workflow spans several tools.</td></tr>
        <tr><th scope="row"><strong>After-hours calls:</strong></th><td> the place to start with any AI agent. Begin with after-hours only, listen to real recordings every week, and expand once you trust it.</td></tr>
      </tbody></table>


      <h2 id="compliance">Compliance and Risk: Call Recording Consent, HIPAA, TCPA and GDPR</h2>
      <p>
        Price is half the decision. The other half is what you are allowed to do with a caller&apos;s voice and data, and that differs by industry and by country.
      </p>
      <table className={visualQa.profileFacts} tabIndex={0}><tbody>
        <tr><th scope="row"><strong>Healthcare in the US (HIPAA):</strong></th><td> any vendor that touches patient audio or transcripts must sign a Business Associate Agreement. On 21 October 2026{' '}<Ext href={SRC.vapi}>Vapi</Ext> listed a HIPAA add-on with a BAA at $2,000 a month.{' '}<Ext href={SRC.bland}>Bland AI</Ext> said it is HIPAA compliant with a signed BAA and holds SOC 2 Type I and Type II.{' '}<Ext href={SRC.retell}>Retell AI</Ext> described itself as SOC 2 certified and HIPAA-ready. Practices should also read{' '}<Link href="/blog/how-much-does-an-ai-medical-receptionist-cost-2026" className={linkClass}>what an AI medical receptionist costs</Link>.</td></tr>
        <tr><th scope="row"><strong>Outbound calls in the US (TCPA):</strong></th><td> on 8 February 2024 the FCC ruled that calls made with AI-generated voices are &quot;artificial&quot; under the Telephone Consumer Protection Act, and its rules require telemarketers to get prior express written consent before robocalling consumers. Source:{' '}<Ext href={SRC.fcc}>FCC news release</Ext>. Take legal advice before an AI voice dials anyone.</td></tr>
        <tr><th scope="row"><strong>Call recording consent:</strong></th><td> rules vary by US state, and some states require every party on the call to agree. Have the agent say at the start that the call is recorded, or turn recording off where you cannot get consent. Ask a lawyer which rule applies in each state you take calls from.</td></tr>
        <tr><th scope="row"><strong>UK and EU callers (GDPR):</strong></th><td> a voice recording and its transcript are personal data. Ask for a Data Processing Agreement and where the audio is stored. Bland AI says it is GDPR compliant with a DPA, and Retell AI lists a custom DPA on its Enterprise plan.</td></tr>
        <tr><th scope="row"><strong>What the agent says (Canada and everywhere else):</strong></th><td> in{' '}<Ext href={SRC.airCanada}>Moffatt v. Air Canada</Ext> (2024 BCCRT 149), a British Columbia tribunal held the airline responsible for a wrong answer its website chatbot gave about bereavement fares and ordered it to pay C$812.02. A voice agent should answer refund and policy questions only from your written policy, and pass anything else to a person.</td></tr>
        <tr><th scope="row"><strong>Card payments (PCI DSS):</strong></th><td> card numbers should be typed on the keypad and sent straight to the payment gateway, never spoken into a recording. Bland AI says it is PCI DSS self-attested; ask any vendor for the same in writing.</td></tr>
      </tbody></table>

      <h2 id="compare">How to Compare Two Price Lists in Five Steps</h2>
      <ol>
        <li><strong>Count your calls and your average call length for your busiest month.</strong> You need both numbers, because some lists sell minutes and others sell calls.</li>
        <li><strong>Write down the unit each list sells.</strong> Ruby, Dialzara, Retell AI, Bland AI and Vapi sell minutes. Smith.ai sells calls. Goodcall sells unique customers.</li>
        <li><strong>Read what the price covers.</strong> On a per-minute platform, check whether the language model, the voice and the phone line are inside the number or listed beside it.</li>
        <li><strong>Check the limits and the price of going over.</strong> Look for concurrent calls, calls per day and the price of an extra minute or call. Dialzara lists $0.35 to $0.48 for an extra minute, and Smith.ai lists $8.50 to $11.50 for an extra call on its human plans.</li>
        <li><strong>Listen to a real call before you pay.</strong> Ask to hear the agent say it does not know and pass the caller to a person. Listen for the pause before each reply and for what happens when you interrupt.</li>
      </ol>

      <h2 id="missed-calls">What a Missed Call Is Worth to You</h2>
      <p>
        Whichever service answers, the value sits in the calls that would otherwise be missed. Count the calls that went unanswered last month, the share of answered calls that turn into a booking, and what an average booking is worth. Those are your own numbers, and they tell you which of these price lists is worth paying.
      </p>


      <h2 id="sources">Sources</h2>
      <p>Vendor price lists were read on 11 October 2026 and again on 21 October 2026, when none had changed. The build ranges and the two rulings were read on 21 October 2026.</p>
      <ul>
        <li><Ext href={SRC.retell}>Retell AI pricing</Ext>, <Ext href={SRC.bland}>Bland AI pricing</Ext>, <Ext href={SRC.vapi}>Vapi pricing</Ext>, <Ext href={SRC.synthflow}>Synthflow pricing</Ext></li>
        <li><Ext href={SRC.dialzara}>Dialzara pricing</Ext>, <Ext href={SRC.goodcall}>Goodcall pricing</Ext>, <Ext href={SRC.frontdesk}>My AI Front Desk pricing</Ext>, <Ext href={SRC.smithAi}>Smith.ai AI Receptionist pricing</Ext></li>
        <li><Ext href={SRC.ruby}>Ruby plans and pricing</Ext>, <Ext href={SRC.smithHuman}>Smith.ai receptionist pricing</Ext>, <Ext href={SRC.twilio}>Twilio US voice pricing</Ext></li>
        <li><Ext href={SRC.groovyWeb}>Groovy Web: AI voice agent development cost</Ext>, <Ext href={SRC.masterOfCode}>Master of Code Global: voice AI development costs</Ext>, <Ext href={SRC.softcery}>Softcery: how much it costs to build an AI voice agent</Ext></li>
        <li><Ext href={SRC.fcc}>FCC, 8 February 2024: AI-generated voices in robocalls</Ext>, <Ext href={SRC.airCanada}>Moffatt v. Air Canada, 2024 BCCRT 149</Ext></li>
      </ul>

      <div className="my-10 p-8 rounded-2xl bg-[#FFF8F5] border border-[#E7DED6] text-center not-prose">
        <div className="font-mono text-xs text-[#B23E13] font-bold uppercase mb-2">
          // SCHEDULE DIRECT VOICE ARCHITECTURE AUDIT
        </div>
        <h3 className="text-2xl font-bold text-[#14110F] mb-4">
          Get a Fixed-Scope Proposal for a Voice Agent You Own
        </h3>
        <p className="text-base text-[#46403B] max-w-xl mx-auto mb-6">
          Speak directly with founder Bhavesh Barot. We will analyze your monthly call volume, review your CRM scheduling workflow, and deliver a fixed-scope voice AI architecture proposal.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#B23E13] text-white font-bold hover:bg-[#9A3510] transition-colors shadow-md text-sm"
        >
          Book 30-Min Architecture Discovery Call &rarr;
        </a>
      </div>
    </article>
  ),
};
