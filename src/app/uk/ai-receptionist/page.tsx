import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/ai-receptionist';
const UPDATED = '2026-09-24';
const TITLE = 'AI Receptionist UK | Built Into Your Systems | FactoryJet';
const H1 = 'AI Receptionist UK: Answers Every Call, Books Into Your Diary, Hands Over When It Matters';
const DESCRIPTION =
  'A custom AI receptionist for UK businesses: answers calls 24/7, books into your diary and hands urgent calls to a person. Built, supported and owned by you.';

/* Design tokens, copied by value from ../ai-agents/ai-agents.css so inline
   styles stay on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'AI Receptionist', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-24 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// ICO, right to be informed: "You must provide privacy information to
// individuals at the time you collect their personal data from them"; must be
// "concise, transparent, intelligible, easily accessible ... clear and plain
// language"; "If you apply Artificial Intelligence (AI) to personal data: Be
// upfront about it and explain your purposes for using AI." fetch-verified 2026-09-24
const SRC_ICO_INFORMED =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/';
// ICO, how do we ensure transparency in AI: if you collect data directly from
// individuals, you must provide privacy information at the time you collect
// it, before you apply the model to them. Page notes it is under review after
// the Data (Use and Access) Act. fetch-verified 2026-09-24
const SRC_ICO_AI =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-transparency-in-ai/';
// Ofcom, switching your landline: new provider asks "whether you want to keep
// your number"; "you can still ask to keep your phone number for free, as long
// as you ask within one month of cancelling". fetch-verified 2026-09-24
const SRC_OFCOM =
  'https://www.ofcom.org.uk/phones-and-broadband/switching-provider/switching-landline';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'AI receptionist basics' },
  { key: 'choosing', label: 'Choosing the right option' },
  { key: 'setup',    label: 'Setup, phone lines & cost' },
  { key: 'rules',    label: 'UK GDPR, safety & handover' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── AI receptionist basics ──
  { category: 'basics', question: 'What is an AI receptionist?',
    answer: 'An AI receptionist is a voice agent that answers your business phone line. It talks to callers in natural speech, works out what they need, answers routine questions, books or moves appointments, takes messages, and passes urgent or sensitive calls to a person on your team. It works around the clock, including evenings, weekends and UK bank holidays, and it follows rules you agree in advance.' },
  { category: 'basics', question: 'Can I get AI to answer my phone calls?',
    answer: 'Yes. You keep your existing business number and either forward calls to the AI receptionist at set times, such as after hours or when the line is busy, or send every call to it first. Callers hear a friendly voice that says it is an automated assistant, then it handles the call or hands it to a person. Most UK businesses start with overflow and out-of-hours calls, then widen it once they trust it.' },
  { category: 'basics', question: 'How does an AI receptionist work?',
    answer: 'Three parts work together. Speech recognition turns what the caller says into text. A language model, the kind of AI behind tools like ChatGPT, decides what the caller wants and what to say next, using your rules and your information. A voice then speaks the reply. Behind that, integrations connect it to your diary, booking system or CRM, so it can check availability and write the booking itself.' },
  { category: 'basics', question: 'Does an AI receptionist actually work?',
    answer: 'For routine calls, yes. Booking, rescheduling, opening hours, directions, pricing questions you have written answers for, and taking a clear message are all things a well-built AI receptionist does reliably. It struggles when a call needs judgment, empathy in a hard moment, or information it was never given. That is why the handover rules matter as much as the voice. A good build knows its limits and passes the call on.' },
  { category: 'basics', question: 'Is an AI receptionist a good idea for my business?',
    answer: 'It is a good idea if you miss calls, if the same questions come in again and again, or if your team is interrupted by the phone while doing skilled work. It is a poor idea if most of your calls are complex, emotional or unique. A quick way to decide is to list your last fifty calls by type. If most are bookings, simple questions or messages, it is a strong fit.' },
  { category: 'basics', question: 'Will an AI receptionist replace my receptionist?',
    answer: 'That is not how we design it. Most of our builds support the front desk: the AI takes overflow when two lines ring at once, covers lunch, evenings and weekends, and deals with repeat questions, so the person on the desk can look after people in the room and the calls that need a human. Your team decides which calls it handles and which always come straight through.' },
  { category: 'basics', question: 'What is the difference between an AI receptionist and a virtual receptionist?',
    answer: 'In the UK, a virtual receptionist usually means a real person in a call centre who answers your phone using a script, and takes a message or transfers the call. An AI receptionist is software that answers instead of a person. It is available at any hour and can book directly into your systems. A virtual receptionist brings human warmth but usually cannot see your diary or act inside your software.' },

  // ── Choosing the right option ──
  { category: 'choosing', question: 'Which AI receptionist service is the best in the UK?',
    answer: 'There is no single best, because the right choice depends on your calls and your systems. Off-the-shelf apps such as ARROW, AI Answerphone, IONOS and Fasthosts suit simple message-taking. Answering companies such as Moneypenny, Answer and Perfect Reception offer people, AI, or both. A custom build like ours suits businesses that need the receptionist wired into their own booking system, CRM and escalation rules. We list several options further up this page.' },
  { category: 'choosing', question: 'What is the best AI receptionist for a small business?',
    answer: 'For a sole trader or very small team whose calls are mainly “take a message and text me”, a low-cost off-the-shelf app is often the best choice, and we will tell you that. Once you need real bookings in your own system, different handling for different call types, or a clean handover to named staff, a custom AI receptionist for small business use becomes worth it.' },
  { category: 'choosing', question: 'Is there a free AI receptionist?',
    answer: 'Some apps offer free trials or a limited free tier, usually with a cap on minutes and basic message-taking only. That can be a sensible way to see how callers react to an AI voice. For a business line that customers rely on, free tiers are rarely enough: they seldom connect to your booking system, and they give you little control over what the AI says or where your data goes.' },
  { category: 'choosing', question: 'Should I use an AI phone answering service or build my own?',
    answer: 'Use an AI phone answering service when your needs are standard and a set of settings covers them. Build a custom one when the calls depend on your systems or rules: checking a patient’s appointment, quoting from your own price list, routing by postcode, or following a strict escalation path. The honest middle ground is common too. Some businesses start with an app and move to a custom build when they outgrow it.' },
  { category: 'choosing', question: 'Is an AI voice agent the same as an AI receptionist?',
    answer: 'An AI receptionist is one kind of AI voice agent. A voice agent is any AI that holds a spoken conversation and takes actions, such as confirming orders, chasing payments or qualifying leads. An AI receptionist is a voice agent focused on incoming calls to your front desk. We build both, and the same engineering sits underneath, which is why our receptionists connect so tightly to your systems.' },

  // ── Setup, phone lines & cost ──
  { category: 'setup', question: 'How much does an AI receptionist cost?',
    answer: 'It depends on scope. The main drivers are how many call types it handles, how many systems it connects to, how many locations or phone lines are involved, how many calls it takes each month (which sets the usage cost of the voice and AI services), and whether you want ongoing support. We scope after a free first call and quote a fixed price for the build, with monthly support shown separately.' },
  { category: 'setup', question: 'Can I keep my existing phone number?',
    answer: 'Yes, in almost every case. The simplest route is call forwarding: your number stays with your current provider and you forward calls to the AI receptionist always, after hours, or when the line is busy or unanswered. If you are moving phone provider anyway, you can usually port the number, which means moving it to the new provider. Ofcom says a new provider will ask whether you want to keep your number.' },
  { category: 'setup', question: 'What is number porting and do I need it?',
    answer: 'Number porting means moving your phone number from one provider to another so it keeps working with the new one. You only need it if you are changing phone provider. Most businesses adding an AI receptionist do not port at all. They set up call forwarding on their current line, which is quicker, easy to undo, and leaves the number exactly where it is.' },
  { category: 'setup', question: 'How long does it take to set up an AI receptionist?',
    answer: 'A focused first version, covering your most common call types with bookings into one system, usually takes a few weeks from the first workshop to live calls. More call types, more systems or several sites take longer. We always run a testing period on real call recordings or test calls before customers reach it, and we start with overflow or out-of-hours calls to keep risk low.' },
  { category: 'setup', question: 'Which booking systems and calendars can it connect to?',
    answer: 'Anything with a usable API, which is a documented way for software to talk to other software. That includes Google Calendar and Microsoft 365 calendars, most modern practice management and booking platforms, CRMs such as HubSpot, and job management tools for trades. If your system has no API, we look at other routes, such as email or a shared inbox, and tell you honestly what will and will not work.' },
  { category: 'setup', question: 'Can it sound British and handle regional accents?',
    answer: 'Yes. We choose a natural British English voice and test it with callers from different regions before launch. Modern speech recognition copes well with most UK accents, but it is not perfect, especially on bad mobile lines. That is why we design confirmation steps for names, dates and postcodes, and a quick route to a person if the AI cannot understand the caller.' },
  { category: 'setup', question: 'Do we own the AI receptionist you build?',
    answer: 'Yes. The call flows, prompts, integrations, code and documentation are yours. You hold the accounts with the voice and AI providers and pay them directly. If you later want to move support in-house or to another company, you can, and the receptionist keeps running. We are not a subscription app you rent. We build it, support it, and hand you the keys.' },

  // ── UK GDPR, safety & handover ──
  { category: 'rules', question: 'Do I have to tell callers they are speaking to AI?',
    answer: 'You should, and we build it in. UK GDPR says people have the right to be informed about how their personal data is used, and the ICO’s guidance says that if you apply AI to personal data you should be upfront about it and explain your purposes. In practice, the greeting says the caller is speaking to an automated assistant, and your privacy notice explains how calls are handled.' },
  { category: 'rules', question: 'Is it legal to record calls handled by an AI receptionist in the UK?',
    answer: 'Businesses in the UK commonly record calls, but a recording and its transcript are personal data under UK GDPR. You need a lawful reason, you must tell callers, and you should keep recordings only as long as you need them. We set a short spoken notice at the start of the call, a clear retention period, and access controls. Confirm the detail for your sector with your data protection adviser.' },
  { category: 'rules', question: 'How does the AI hand a call over to a person?',
    answer: 'We agree handover rules with you before the build. Typical triggers are a caller asking for a person, an emergency or safeguarding word, an upset caller, or a question the AI has no approved answer for. The AI then transfers the call live to the right person or team, or, if nobody is free, takes a detailed message and alerts the right person by text, email or your team chat.' },
  { category: 'rules', question: 'What calls should an AI receptionist never handle?',
    answer: 'Anything involving clinical advice, legal advice, emergencies, safeguarding concerns, complaints that need a real apology, or decisions that affect someone’s money or rights. For those, the AI’s only job is to recognise the situation quickly and get the caller to a person. For a medical or dental practice, that means urgent symptoms are routed straight to staff or to NHS 111 or 999 guidance you approve.' },
  { category: 'rules', question: 'Where is the call data stored?',
    answer: 'That depends on the voice and AI providers we choose together, and we make it a deliberate choice rather than a default. We favour providers with UK or European data hosting and business terms that stop your call data being used to train their models. We document which providers see what, so you can update your privacy notice and records.' },
  { category: 'rules', question: 'Do we need a DPIA for an AI receptionist?',
    answer: 'Often, yes. A DPIA, or data protection impact assessment, is a written check of the risks a project creates for people’s personal data and how you will reduce them. An AI answering calls from patients, clients or tenants is the kind of new technology that usually calls for one. We give you the technical inputs for it: what data is collected, where it goes, and how long it is kept.' },
  { category: 'rules', question: 'What happens if the AI gets something wrong?',
    answer: 'It will sometimes mishear or misunderstand, just as people do. We reduce the risk in three ways: confirming key details back to the caller, limiting the AI to answers you have approved, and sending every booking and message to your team with a summary. After launch, we review call transcripts with you, fix the patterns we find, and keep adjusting it as your business changes.' },
];

/* ─── Named UK providers (open self-disclosure, ItemList). Each note is based
       on the company’s own homepage, fetched 2026-09-24. ───────────────── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We design, build, integrate and support a custom AI receptionist around your call types, booking system, CRM and escalation rules. Founder involved on every project, and you own what we build.' },
  { name: 'Moneypenny', note: 'A long-established answering company offering a people-first telephone answering service and a fully automated AI receptionist, alongside outsourced switchboard and live chat.' },
  { name: 'Answer', note: 'Describes itself as the UK’s longest-running virtual receptionist service, with a pay-as-you-go answering service and an AI receptionist option.' },
  { name: 'Perfect Reception', note: 'A UK call answering company with UK-based receptionists handling call answering, message taking, overflow and holiday cover, plus automated after-hours handling.' },
  { name: 'ARROW (aiphonecalls.co.uk)', note: 'A 24/7 AI receptionist app aimed at UK trades, answering calls, booking jobs and capturing leads, with a free trial.' },
  { name: 'AI Answerphone', note: 'A UK AI answerphone that answers 24/7 with UK voices, captures caller details and sends instant alerts, sold on a monthly plan with no contract.' },
  { name: 'IONOS', note: 'A large web hosting provider that now sells an AI Receptionist product for small businesses alongside its websites, domains and AI chat assistant.' },
  { name: 'Fasthosts', note: 'A Gloucester-based hosting company, operating since 1998, that offers an AI Receptionist to answer business calls, including after hours.' },
  { name: 'Softomate Solutions', note: 'An AI automation and custom software company in Stanmore, London, that builds AI receptionists and voice agents, including versions for clinics and estate agents.' },
  { name: 'AI Workforce', note: 'A UK company offering a set of AI agents, including an AI receptionist that picks up inbound calls, alongside outbound calling and admin agents.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only and is defined
       once, sitewide. Never redefine it here. ──────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Receptionist UK',
      serviceType: 'AI receptionist, AI voice agent and AI call answering design, build, integration and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'A custom AI receptionist for UK businesses. It answers calls 24/7, answers routine questions, books appointments into your calendar or booking system, takes messages, and hands urgent or sensitive calls to a person. Designed around your call types and escalation rules, built with UK GDPR transparency, supported after launch, and owned by you.',
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
      inLanguage: 'en-GB',
      datePublished: '2026-09-24',
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
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#providers`,
      name: 'UK AI receptionist and call answering providers',
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'AI receptionist for UK businesses, built around your calls. 24/7 AI call answering, bookings into your own diary, clear handover to your team, UK GDPR transparency, and support after launch.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ai-receptionist/ai-receptionist-og.webp', width: 1200, height: 630, alt: 'AI receptionist UK: a clinic receptionist on a headset at a bright front desk with a booking calendar on screen' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

export default function AiReceptionistUKPage() {
  return (
    <>
      <script id="ld-uk-ai-receptionist" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK AI Receptionist</span>
                  <span className="chip">24/7 AI Call Answering</span>
                  <span className="chip">Built, Supported, Yours</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet builds a custom AI receptionist for UK businesses. It answers your phone day and night,
                  works out what each caller needs, answers routine questions, books appointments straight into your
                  diary or booking system, takes clear messages, and passes urgent or sensitive calls to the right
                  person. We design it around your calls, support it after launch, and you own it.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />24 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ai_receptionist_hero" submitLabel="Plan my AI receptionist" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ai-receptionist/ai-receptionist-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A receptionist on a phone headset at the bright front desk of a small UK clinic, with a colour-coded booking calendar on her screen" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What it does on every call</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Answers, day and night</div><div className="scorecard-note">evenings, weekends, bank holidays</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>24/7</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Books into your real diary</div><div className="scorecard-note">calendar, booking system or CRM</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Live</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Hands over when it matters</div><div className="scorecard-note">urgent, upset or sensitive callers</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>To a person</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is an AI receptionist, and is it right for a UK business?</span>
              <p>
                An AI receptionist is a voice agent that answers your business phone 24/7. It understands what callers
                want, answers routine questions, books appointments into your own system, takes messages, and passes
                urgent or sensitive calls to a person. It suits UK businesses that miss calls or answer the same
                questions all day.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                A <b>voice agent</b> is AI that holds a spoken conversation and can take actions, such as making a
                booking. <b>Escalation</b> means handing a call to a person when the AI should not deal with it.
                An <b>integration</b> is a live connection between the receptionist and your software, so it can read
                your diary and write bookings itself.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most AI phone answering products in the UK are apps you sign up to and configure yourself. That works
              well for simple message-taking. It works less well when calls depend on your own booking system, your
              own rules and your own team. That second case is what we build: an AI receptionist designed around the
              calls you actually get, connected to the systems you actually use, and looked after once it is live.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
                { v: 'At the time', t: 'of the call is when UK GDPR says callers must be told how their data is used', s: 'ICO, right to be informed', u: SRC_ICO_INFORMED },
                { v: 'Upfront', t: 'is how the ICO says to be when you apply AI to personal data', s: 'ICO guidance', u: SRC_ICO_INFORMED },
                { v: 'Keep it', t: 'your existing number: forward calls, or ask your new provider to move it', s: 'Ofcom, switching landline', u: SRC_OFCOM },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {})} style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. WHICH CALLS SUIT AI ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Start with your calls, not the technology</span>
              <h2>Which calls an AI receptionist should take, and which should stay with a person</h2>
              <p className="lead mt-4">
                The biggest mistake with AI call answering is pointing it at every call on day one. The right split
                depends on your business, but the pattern is very consistent across the UK firms we speak to.
              </p>
            </div>
            <div className="col-6040 mt-12">
              <div className="card card-top-orange">
                <span className="eyebrow">Good fit for the AI receptionist</span>
                <ul className="scope-list mt-4">
                  <li><b>New bookings and rebookings.</b> Checking availability and writing the appointment into your diary or booking system, then confirming by text.</li>
                  <li><b>Cancellations and changes.</b> Moving an appointment within rules you set, such as notice periods or deposit rules.</li>
                  <li><b>Routine questions.</b> Opening hours, parking, directions, which services you offer, what to bring, and answers you have approved word for word.</li>
                  <li><b>New enquiries.</b> Taking the caller’s name, number, what they need and how urgent it is, then passing it to your team or CRM.</li>
                  <li><b>Overflow and out-of-hours.</b> Picking up when every line is busy, over lunch, in the evening, at weekends and on bank holidays.</li>
                  <li><b>Clear messages.</b> A written summary of the call sent to the right person, instead of a voicemail nobody has time to play back.</li>
                </ul>
              </div>
              <div className="card">
                <span className="eyebrow">Keep with a person</span>
                <ul className="scope-list mt-4">
                  <li><b>Anything clinical or legal.</b> Symptoms, treatment, diagnosis, or legal advice of any kind.</li>
                  <li><b>Emergencies and safeguarding.</b> The AI’s only job here is to spot the words and route the call at once.</li>
                  <li><b>Complaints and upset callers.</b> People want to be heard by a person, and they should be.</li>
                  <li><b>Money and decisions.</b> Refunds, disputes, credit decisions and anything that changes someone’s rights.</li>
                  <li><b>Your most valuable relationships.</b> Key clients and suppliers can go straight through to a named person.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. HANDOVER ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Escalation, designed in</span>
                <h2>How the AI hands a call over to a person</h2>
                <div className="stack mt-6">
                  <p>
                    A good AI receptionist is judged less by how clever it sounds and more by how well it knows when to
                    stop. Before we build anything, we sit down with you and write the handover rules: which words,
                    situations and callers go straight to a person, who that person is at different times of day, and
                    what happens if nobody picks up.
                  </p>
                  <p>
                    When a rule fires, the AI tells the caller it is putting them through and transfers the call live,
                    with a short summary sent to the person answering so the caller does not have to repeat themselves.
                    If nobody is free, it takes a detailed message, promises a call back within the time you set, and
                    alerts the right person by text, email or your team chat.
                  </p>
                  <p>
                    The caller can always ask for a person. We never build a receptionist that traps someone in a loop.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Typical handover triggers</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Caller asks for a person</div><div className="scorecard-note">any wording, any time</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Transfer</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Emergency or safeguarding words</div><div className="scorecard-note">agreed list, tested before launch</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Immediate</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Upset or confused caller</div><div className="scorecard-note">repeated misunderstanding counts</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Transfer</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Question with no approved answer</div><div className="scorecard-note">it never guesses</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Message</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Nobody available</div><div className="scorecard-note">summary plus alert to the right person</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Call back</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 820 }}>Human receptionist vs answering service vs AI app vs a custom AI receptionist</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Four common ways UK businesses handle the phone. Each is the right answer for someone. This compares
              them on what actually changes day to day, not on price.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom AI receptionist (FactoryJet)</th>
                    <th>Off-the-shelf AI app</th>
                    <th>Answering service</th>
                    <th>In-house receptionist</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Coverage hours</td><td className="fj"><span className="yes">24/7, every line at once</span></td><td><span className="yes">24/7</span></td><td><span className="partial">Depends on plan</span></td><td><span className="partial">Office hours, one call at a time</span></td></tr>
                  <tr><td className="feat">Books into your own system</td><td className="fj"><span className="yes">Yes, built for your system</span></td><td><span className="partial">Only supported apps</span></td><td><span className="partial">Sometimes, by hand</span></td><td><span className="yes">Yes</span></td></tr>
                  <tr><td className="feat">Follows your call rules</td><td className="fj"><span className="yes">Designed around them</span></td><td><span className="partial">Within app settings</span></td><td><span className="partial">From a script</span></td><td><span className="yes">Yes, with training</span></td></tr>
                  <tr><td className="feat">Handover to your team</td><td className="fj"><span className="yes">Live transfer with summary</span></td><td><span className="partial">Basic transfer or message</span></td><td><span className="yes">Transfer or message</span></td><td><span className="yes">Walks over or transfers</span></td></tr>
                  <tr><td className="feat">Control over what it says</td><td className="fj"><span className="yes">Full, reviewed with you</span></td><td><span className="partial">Limited to settings</span></td><td><span className="partial">Script you supply</span></td><td><span className="yes">Full</span></td></tr>
                  <tr><td className="feat">Who owns the setup</td><td className="fj"><span className="yes">You do</span></td><td><span className="no">The app provider</span></td><td><span className="no">The service provider</span></td><td><span className="yes">You do</span></td></tr>
                  <tr><td className="feat">Setup effort for you</td><td className="fj"><span className="partial">Workshops, then we build</span></td><td><span className="yes">Low, do it yourself</span></td><td><span className="yes">Low</span></td><td><span className="partial">Hiring and training</span></td></tr>
                  <tr><td className="feat">Support after launch</td><td className="fj"><span className="yes">Same team, ongoing</span></td><td><span className="partial">Help desk</span></td><td><span className="yes">Account manager</span></td><td>Your own management</td></tr>
                  <tr><td className="feat">Human warmth</td><td className="fj"><span className="partial">Natural voice, hands to people</span></td><td><span className="partial">Natural voice</span></td><td><span className="yes">A real person</span></td><td><span className="yes">A real person who knows you</span></td></tr>
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Want the numbers behind this choice? See our guide:{' '}
              <a href="/blog/ai-voice-agents-vs-human-answering-services-cost-comparison-2026" style={srcLink}>AI voice agents vs human answering services, a cost comparison</a>.
            </p>
          </div>
        </section>

        {/* ═══ 7. HOW WE BUILD IT (LISTICLE) ═══ */}
        <section className="sec-lg" id="how-we-build">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we build it</span>
                <h2>How we build your AI receptionist, in eight steps</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Every AI receptionist we build follows the same path. It is the difference between an AI voice agent
                  that sounds good in a demo and one your customers can rely on at nine on a Monday morning.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ai-receptionist/ai-receptionist-call-flow.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A UK tradesman taking a call in his office, next to a whiteboard showing a simple call flow of connected boxes" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    We draw your call flow before we write any code: every type of call, what should happen, and where
                    a person takes over. The whiteboard version is what you sign off.
                  </p>
                </div>
              </div>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Listen to your calls', d: 'We look at a sample of real calls, or talk them through with the person who answers them, and sort them into types: bookings, changes, questions, enquiries, complaints, emergencies. This tells us what the receptionist must do well.' },
                { n: '02', t: 'Agree the call rules', d: 'For each call type we agree what the AI does, what it must never do, and when it hands over. We also agree the greeting, including the line telling callers they are speaking to an automated assistant.' },
                { n: '03', t: 'Write the answers with you', d: 'The AI only gives answers you have approved: services, hours, policies, directions, preparation notes. Nothing is left to the model to invent. Where it does not know, it says so and takes a message.' },
                { n: '04', t: 'Connect your systems', d: 'We build the integrations to your calendar, booking or practice system, CRM and team chat, so the receptionist can check availability, write bookings, and send summaries to the right place.' },
                { n: '05', t: 'Set up your phone line', d: 'We connect your existing number by call forwarding, or help with porting if you are changing provider. You choose when calls reach the AI: always, after hours, or when the line is busy.' },
                { n: '06', t: 'Test it hard', d: 'We run a large set of test calls with different accents, background noise, awkward requests and mid-sentence changes of mind. Your team makes test calls too, and we fix what they find.' },
                { n: '07', t: 'Go live in stages', d: 'Most businesses start with overflow and out-of-hours calls. Once you are happy with the transcripts, you widen it to more call types or all calls. Nothing changes overnight without you deciding it.' },
                { n: '08', t: 'Review and support', d: 'After launch we review transcripts and results with you, tighten answers, add new call types, and keep it working as your services, systems and the AI models themselves change.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <MidPageCTA
          headline={'Missing calls, or answering the same questions all day?'}
          sub={'Tell us about your calls and the systems you book into. On a short call with the founder, we will tell you whether an AI receptionist would help, which calls it should take first, and whether a simple app would do the job.'}
          label={'Plan my AI receptionist'}
        />

        {/* ═══ 8. WHEN AN APP IS ENOUGH ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The honest answer</span>
                <h2>When an off-the-shelf AI receptionist app is enough</h2>
                <div className="stack mt-6">
                  <p>
                    If you are a sole trader or a very small team, and what you mostly need is someone to answer, take
                    the caller’s details and text you, an off-the-shelf AI phone answering service is often the right
                    call. It is quick to set up, you pay monthly, and you can cancel. We would rather tell you that on
                    a first call than sell you a build you do not need.
                  </p>
                  <p>
                    A custom AI receptionist earns its place when the calls depend on your systems and rules. For
                    example: booking into a practice management system that the apps do not support, applying your own
                    cancellation policy, routing callers by postcode to the right engineer, checking a client matter
                    before transferring, or handling several sites with different hours and staff.
                  </p>
                  <p>
                    It is also the better route when you want control. With an app, the provider decides what the AI
                    can do and where your data goes. With a build, you decide, and the setup is yours to keep. For the
                    wider picture of AI systems that act across your business, see our{' '}
                    <a href="/uk/ai-agents">UK AI agent development service</a>. If you are still working out where AI
                    fits at all, start with <a href="/uk/ai-consulting">AI consultancy</a>.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">A simple rule of thumb</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Take a message and text me</div><div className="scorecard-note">sole trader, simple calls</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>App</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Book into a common calendar</div><div className="scorecard-note">if the app supports it</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>App first</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Book into your practice or job system</div><div className="scorecard-note">clinics, trades, lettings</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Build</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Rules only your business knows</div><div className="scorecard-note">routing, policies, exceptions</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Build</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Several sites or teams</div><div className="scorecard-note">different hours and handovers</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Build</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. UK GDPR + TRANSPARENCY ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">UK GDPR, in plain English</span>
              <h2>Telling callers they are speaking to AI, and handling call data properly</h2>
              <div className="stack mt-6">
                <p>
                  Every call your AI receptionist takes collects personal data: a name, a number, often a reason for
                  calling that can be sensitive, such as a dental problem or a legal matter. That means UK GDPR applies
                  from the first word.
                </p>
                <p>
                  The Information Commissioner’s Office says people have the right to be informed about how their data
                  is used, and that you must give them this information at the time you collect it, in clear and plain
                  language. Its guidance goes further on AI: if you apply AI to personal data, be upfront about it and
                  explain your purposes. The ICO’s AI guidance says the same information must be given before the AI
                  is used on the person. It also notes that some of this guidance is under review after the Data (Use
                  and Access) Act, so we check the current version on every project.
                </p>
                <p>
                  In practice, that shapes the build in four ways. The greeting says the caller is speaking to an
                  automated assistant. A short notice explains that the call is recorded or transcribed and why. Your
                  privacy notice gets a clear section on phone calls. And we set a retention period, so recordings and
                  transcripts are deleted when you no longer need them.
                </p>
              </div>
              <p style={srcNote}>
                Sources: <a href={SRC_ICO_INFORMED} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, right to be informed</a>;{' '}
                <a href={SRC_ICO_AI} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, how do we ensure transparency in AI?</a>.
              </p>
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>What we do</h3><p className="mt-4">Write the AI disclosure into the greeting, set up recording notices and retention, pick providers with UK or European hosting and no-training terms, and document the data flow.</p></li>
              <li className="card"><h3>What you keep</h3><p className="mt-4">You stay the data controller. We make that easy to meet with access controls, a record of every call the AI handled, and the technical inputs for your DPIA.</p></li>
              <li className="card"><h3>What we do not do</h3><p className="mt-4">We are not lawyers and do not give legal sign-off. For regulated sectors, confirm the detail with your data protection adviser or professional body.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 10. KEEP YOUR NUMBER ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Your phone line</span>
                <h2>Keeping your existing number: call forwarding or porting</h2>
                <div className="stack mt-6">
                  <p>
                    Your customers already know your number. It is on your van, your website, your Google listing and
                    years of old invoices. You do not have to change it to use an AI receptionist.
                  </p>
                  <p>
                    <b>Call forwarding</b> is the usual route. Your number stays with your current phone provider, and
                    you forward calls to the AI receptionist. You can forward every call, only calls outside office
                    hours, or only calls that ring out or find the line busy. It is quick to set up and easy to switch
                    off.
                  </p>
                  <p>
                    <b>Number porting</b> means moving the number itself to a different phone provider. You only need it
                    if you are changing provider anyway, for example moving to an internet phone system. Ofcom’s switching guidance says the new provider will ask whether you
                    want to keep your number, and that you can still ask to keep it for free within one month of
                    cancelling the old service. Business contracts vary, so check yours.
                  </p>
                </div>
                <p style={srcNote}>
                  Source: <a href={SRC_OFCOM} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Ofcom, switching your landline</a>.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Which one you need</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Happy with your phone provider</div><div className="scorecard-note">number stays where it is</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Forward</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Only after hours or overflow</div><div className="scorecard-note">conditional forwarding</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Forward</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Moving to a new phone system</div><div className="scorecard-note">new provider handles the move</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Port</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Several numbers or sites</div><div className="scorecard-note">each can route differently</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Either</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Change your number</div><div className="scorecard-note">never required</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>No need</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. INDUSTRIES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Who we build for</span>
              <h2>AI receptionist UK builds for practices, trades, law firms and agents</h2>
              <p className="lead mt-4">
                The same core build, shaped very differently by the calls each sector gets and the rules it works under.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card"><h3>Dental practices</h3><p className="mt-4">New patient enquiries, check-ups, hygienist bookings, cancellations and fees questions, booked into your practice software. Anything that sounds like pain, swelling or an emergency goes to the team at once.</p></li>
              <li className="svc-card"><h3>Medical and private clinics</h3><p className="mt-4">Appointment booking and changes, directions and preparation notes, on the admin side only. The receptionist never gives clinical advice, and urgent symptoms follow a handover path your clinicians approve.</p></li>
              <li className="svc-card"><h3>Trades and home services</h3><p className="mt-4">Plumbers, electricians, heating engineers and builders. It answers while you are on a job, takes the address and the problem, books a slot, and flags genuine emergencies to your mobile.</p></li>
              <li className="svc-card"><h3>Law firms</h3><p className="mt-4">New enquiry intake by practice area, conflict-check details for your team, appointment booking, and routing existing clients to the right fee earner. No legal advice, ever.</p></li>
              <li className="svc-card"><h3>Estate and letting agents</h3><p className="mt-4">Viewing requests, valuation bookings, tenant maintenance reports and out-of-hours calls, logged into your property software with urgent repairs routed to the right contractor or manager.</p></li>
              <li className="svc-card"><h3>Restaurants and hospitality</h3><p className="mt-4">Table bookings, changes and cancellations during service, opening hours, allergen policy questions and large party enquiries, so staff are not pulled off the floor by the phone.</p></li>
            </ul>
            <p className="mt-8" style={{ maxWidth: 760 }}>
              Not in the list? The same approach works for salons, vets, gyms, accountants, car dealerships and care
              providers. If calls follow a pattern, an AI receptionist can usually take the routine ones. For a
              buyer’s view of the options in this space, read our guide to{' '}
              <a href="/blog/best-ai-receptionist-small-business">the best AI receptionist for small business</a>.
            </p>
          </div>
        </section>

        {/* ═══ 12. ENGAGEMENT SHAPES + DEMAND ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>Three ways to work with us on an AI receptionist</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Every project is quoted for your scope, with a fixed price for the build and monthly support shown
                  separately. These are the shapes it usually takes.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Focused first build.</b> Your most common call types, one booking system, one phone line, overflow and out-of-hours first. The fastest way to prove it on real callers.</li>
                  <li><b>Full front desk.</b> All routine call types, several integrations (booking, CRM, team chat), multiple lines or sites, and detailed handover rules for each team.</li>
                  <li><b>Build plus support.</b> Either of the above with ongoing support: transcript reviews, new call types, answer updates, and keeping pace with model and provider changes.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  The things that move the scope are the number of call types, how many systems it connects to, how
                  many sites and lines, your expected call volume (which sets the voice and AI usage you pay providers
                  directly), and the level of support you want.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Plan my AI receptionist" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>UK · Monthly Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'ai receptionist', v: '1,300', w: '100%', kd: 'The head term' },
                      { kw: 'ai voice agent', v: '390', w: '30%', kd: 'The technology behind it' },
                      { kw: 'ai receptionist uk', v: '320', w: '25%', kd: 'Buyer intent, UK' },
                      { kw: 'ai receptionist for small business', v: '140', w: '11%', kd: 'Small firms comparing options' },
                      { kw: 'ai phone answering', v: '90', w: '7%', kd: 'Missed-call problem' },
                      { kw: 'ai call answering', v: '90', w: '7%', kd: 'Missed-call problem' },
                      { kw: 'ai phone answering service', v: '70', w: '5%', kd: 'Comparing services' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, United Kingdom, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. PROVIDER LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK AI receptionist and call answering providers worth knowing</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These UK providers show up when people search for an AI
                receptionist in the UK or ask AI assistants for one. They range from self-serve apps to answering
                companies to build partners. Each note is based on what the company says on its own website.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {PROVIDERS.map((p, i) => (
                <li key={p.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{p.name}{p.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{p.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Providers named from live UK search results and AI assistant answers for AI receptionist queries, September 2026. Notes reflect each company’s own website on 24 September 2026. Listing is not endorsement.
            </p>
            <p className="mt-6" style={{ maxWidth: 760 }}>
              Based in the US? See our <a href="/services/ai-receptionist">AI receptionist service for US businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ 14. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI receptionist questions UK business owners actually ask</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within 24 hours.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 15. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Stop missing calls, without losing the personal touch</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about the calls
              you get, the systems you book into, and whether a custom AI receptionist or a simple app is the right
              fit. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Plan my AI receptionist" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Contact us</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
