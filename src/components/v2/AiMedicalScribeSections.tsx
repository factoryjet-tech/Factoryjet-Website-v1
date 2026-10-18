import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import {
  SCRIBE_FAQ_CATEGORIES,
  SCRIBE_FAQS,
  SRC_AMA_TPMG,
  SRC_HHS_BA,
  SRC_PMC_REVIEW,
} from './AiMedicalScribeFaqs';
import './AiAgentDevelopmentSections.css';
import './AiDevelopmentSections.css';

/*
 * AI Medical Scribe Agents (/services/ai-medical-scribe-agents), built 2026-10-18 as the landing
 * page for AI agent film 2, "Charting at the kitchen table" (docs/video/ai-agent-film-02-charting/).
 * Same US design system, shell and CSS as /services/llm-development.
 *
 * Target terms (DataForSEO US, 18 Oct 2026, Google Ads volume): ai medical scribe 5,400,
 * ai-powered medical scribe 6,600 (Labs), ambient ai medical scribe 3,600 (Labs), ai scribe 2,400,
 * ai charting 1,000, ambient ai scribe 880, ambient scribe 880, virtual medical scribe 720,
 * medical scribe software 480, best ai medical scribe 390, ai scribe for doctors 320,
 * hipaa compliant ai scribe 210, ai medical scribe software 140, ambient clinical documentation 110,
 * ai clinical notes 110, ai soap notes 110, ai clinical documentation 90, orthopedic scribe 50,
 * ai referral letter 10. "ai scribe for orthopedics" has no measured volume but its page one
 * includes sites with 100 and 312 referring domains (marvix.ai, healthorbit.ai).
 *
 * Page ownership: this page = AI that drafts clinical notes and referral letters for specialist
 * clinics. Phone, scheduling and intake agents live on /services/healthcare-ai-agents.
 *
 * Every claim about the agent comes from one recorded run on a sample visit
 * (video-studio/films/story-scribe/runs/run1.json, 18 Oct 2026): it read the referral, the last
 * visit and the medication list; drafted the note under four clinic headings and a letter back to
 * the referring doctor; flagged three referral mismatches without deciding them; filed nothing and
 * queued both drafts for signature. The clinic, doctor, patient and referral are sample data.
 *
 * Static server component. The only client code is HeroInlineForm. CAPABILITIES and
 * scribeBreadcrumbs feed the Service and BreadcrumbList JSON-LD in page.tsx; the FAQ array in
 * AiMedicalScribeFaqs.ts feeds both the accordion and the FAQPage JSON-LD.
 * No FactoryJet prices, no running costs, no compliance certifications, no team location.
 */

export const scribeBreadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Healthcare AI Agents', url: 'https://factoryjet.com/services/healthcare-ai-agents' },
  { name: 'AI Medical Scribe Agents', url: 'https://factoryjet.com/services/ai-medical-scribe-agents' },
];

/** H1 parts; page.tsx joins them for the WebPage headline so schema and page never drift. */
export const SCRIBE_H1_LEAD = 'AI Medical Scribe Agents';
export const SCRIBE_H1_EMPHASIS = 'That Draft the Note and the Referral Letter';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;
const EXT = { target: '_blank', rel: 'noopener nofollow' } as const;
const IMAGE_ROOT = '/images/us/ai-medical-scribe';

export const CAPABILITIES: ReadonlyArray<{ href?: string; icon: string; title: string; body: string; tags: string[] }> = [
  { icon: 'M6 3h9l4 4v14H6V3Zm9 0v4h4M9 12h6M9 16h4', title: 'Reads the Chart Before It Writes',
    body: 'Before drafting, the agent pulls the referral letter, the patient\'s last visit and the medication list. In the sample run that meant a family doctor\'s referral, a 2024 shoulder visit and two medications.',
    tags: ['Referral', 'Last visit', 'Medications'] },
  { icon: 'M4 5h16M4 10h16M4 15h10M4 20h7', title: 'Drafts Under Your Headings',
    body: 'The note follows the clinic\'s own headings, read from the clinic\'s settings. The sample clinic used Reason for visit, History, Examination and Plan; a SOAP practice gets Subjective, Objective, Assessment and Plan.',
    tags: ['Clinic headings', 'SOAP', 'Exam findings'] },
  { icon: 'M3 7l9 6 9-6M3 7v10h18V7H3Z', title: 'Drafts the Letter Back',
    body: 'From the same visit it drafts the reply to the referring doctor: findings, suspected diagnosis, tests ordered and plan, addressed to the referrer named in the incoming letter.',
    tags: ['Referral reply', 'Referrer details', 'Draft only'] },
  { icon: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z', title: 'Flags Mismatches, Decides None',
    body: 'When the visit and the record disagree, the agent records both versions with the source and date, and leaves the call to the doctor. In the sample run it flagged three: the knee, the cause and the duration.',
    tags: ['Field', 'Said in visit', 'Says in record'] },
  { icon: 'M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6', title: 'Files Nothing on Its Own',
    body: 'The note is saved as a draft and not filed. The letter is saved as a draft and not sent. Both go to the doctor\'s signature queue, and the signature is the only way out.',
    tags: ['Draft saved', 'Not sent', 'Signature queue'] },
  { href: '/services/ai-agent-monitoring', icon: 'M4 20V10m6 10V4m6 16v-8m4 8V7', title: 'Tested on Your Past Visits',
    body: 'Before any doctor relies on it, the agent drafts notes for a set of your past visits and your clinicians score them against what they actually signed. It is re-scored after every model or template change.',
    tags: ['Test visits', 'Pass mark', 'Re-scoring'] },
];

/** The three flags from the recorded run, verbatim. */
const RUN_FLAGS: ReadonlyArray<readonly [string, string, string]> = [
  ['Affected knee', 'Left knee, twisted playing pickleball', 'Right knee pain, per referral letter from Dr. Whitford dated 12 October 2026'],
  ['Mechanism of injury', 'Twisted playing pickleball', 'Fall at home, per referral letter from Dr. Whitford dated 12 October 2026'],
  ['Duration of symptoms', 'About ten days ago', 'Six week history, per referral letter from Dr. Whitford dated 12 October 2026'],
];

/** The draft note from the recorded run, verbatim, under the sample clinic's four headings. */
const RUN_NOTE: ReadonlyArray<readonly [string, string]> = [
  ['Reason for visit', 'Mr Daniel Price, born 3 March 1974, presents with left knee pain following a twisting injury while playing pickleball approximately ten days ago. He reports swelling, catching on stairs, and two episodes of locking requiring manipulation to straighten.'],
  ['History', 'Swelling developed by the evening of the injury and has partially resolved. The patient is taking ibuprofen most days and Lisinopril 10 mg once daily for blood pressure.'],
  ['Examination', 'Swelling noted on the medial aspect of the left knee with tenderness along the medial joint line. Range of motion is full extension to approximately 110 degrees of flexion, McMurray\'s test is painful medially, and ligaments are stable.'],
  ['Plan', 'Dr Rao suspects a medial meniscus tear and has requested an MRI of the left knee. The patient is to commence physiotherapy, continue ibuprofen with food, avoid pickleball, and return in two weeks with the scan result.'],
];

/** Page-one sites for "ai medical scribe", "ai scribe for orthopedics" and "ai medical scribe for specialists", US, 18 Oct 2026 (DataForSEO). */
const RANKING_SITES: ReadonlyArray<readonly [string, string, number]> = [
  ['athelas.com', 'AI Medical Scribe: What Is It and Why Is It a Necessity?', 2709],
  ['medwriter.ai', 'Medwriter: The Best AI Medical Scribe', 160],
  ['athenahealth.com', 'Ambient Notes AI Medical Scribe', 15678],
  ['sully.ai', 'AI Medical Scribe | AI Scribe - Sully', 889],
  ['deepscribe.ai', 'DeepScribe AI Medical Scribe | Built for Specialty Care', 1471],
  ['skriber.com', 'AI medical scribe for Orthopedic surgeons', 1779],
  ['modmed.com', 'Reimagining Orthopedic & Pain Documentation With AI', 4408],
  ['heidihealth.com', 'Best AI Medical Scribes 2026 [Updated]', 4932],
];

/** Each item is [question, why it matters]. */
const BUYER_CHECKS: ReadonlyArray<readonly [string, string]> = [
  ['Does anything reach the chart without a signature?', 'Ask the vendor to show the exact state of a draft before and after the doctor signs. "Saved, not filed" should be visible on screen.'],
  ['Does it read the referral, or only the room?', 'A specialist note that ignores the referral letter will miss the left-knee, right-knee kind of conflict our sample run caught.'],
  ['What does it do when the patient and the record disagree?', 'The right answer is a flag that quotes both sides with a source. A wrong answer is the tool quietly picking one.'],
  ['Can it use our headings and our letter style?', 'If the note comes out in someone else\'s template, the doctor rewrites it, and the time saved goes back into editing.'],
  ['How was it tested on visits like ours?', 'Ask for results on your specialty, scored by clinicians. A review of 18 studies found omissions were frequent in ambient AI scribes.'],
  ['Who touches the patient data, and is each one under a BAA?', 'HHS treats a vendor handling protected health information for a practice as a business associate. Subcontractors count too.'],
  ['Can we see it draft one of our notes before we sign?', 'A demo on your own note type, with sample or de-identified data, tells you more than any feature list.'],
];

function FaqAccordion() {
  return (
    <div className="faqlist">
      {SCRIBE_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {SCRIBE_FAQS.filter((faq) => faq.category === category.id).map((faq) => (
            <details className="faqitem" data-faq-item key={faq.id}>
              <summary data-faq-question>
                <span className="qid">{faq.id}</span>
                <span className="qtext">{faq.question}</span>
                <span className="chev" aria-hidden="true">+</span>
              </summary>
              <p className="ans" data-faq-answer>
                {faq.answer}
                {faq.link && (
                  <>
                    {' '}
                    {faq.link.external
                      ? <a className="faqsrc" href={faq.link.url} {...EXT}>{faq.link.label} ↗</a>
                      : <a className="faqsrc" href={faq.link.url}>{faq.link.label} ↗</a>}
                  </>
                )}
              </p>
            </details>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default function AiMedicalScribeSections() {
  return (
    <div className="aiAgentPage aiDevPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {scribeBreadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === scribeBreadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="ai-medical-scribe-content">
        {/* ═══ HERO ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AI Agents for Specialist Clinics · Orthopedics First</div>
              <h1>{SCRIBE_H1_LEAD} <span className="hero-emphasis">{SCRIBE_H1_EMPHASIS}</span></h1>
              <p className="lead" data-speakable>FactoryJet builds AI agents that draft clinical notes and referral letters for specialist clinics. The agent reads the referral, the last visit and the medication list, drafts the note under your headings, flags where the referral and the patient disagree, and queues every draft for the doctor&apos;s signature. It files nothing on its own.</p>
              <HeroInlineForm
                source="us_ai_medical_scribe_hero"
                region="us"
                submitLabel="See it draft one of my notes"
                trustText="Demo on a sample or de-identified visit before you sign. Founder replies within 24 hours."
              />
              <p className="hero-alt">Need an AI that answers the phone and books visits? See <a href="/services/healthcare-ai-agents">healthcare AI agents</a>.</p>
            </div>

            <form className="specpanel" aria-label="The four steps of the agent's recorded run on a sample knee visit">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>RECORDED RUN · SAMPLE KNEE VISIT</span>
                <span className="sys"><span>READ</span><span>DRAFT</span><span>FLAG</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore the recorded run">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="scribe-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M6 3h9l4 4v14H6V3Zm9 0v4h4M9 12h6M9 16h4" /></svg></span>
                  <span className="idx">STEP 01</span>
                  <span className="title">Read referral, last visit, medications</span>
                  <span className="tag">READ</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="scribe-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 5h16M4 10h16M4 15h10M4 20h7" /></svg></span>
                  <span className="idx">STEP 02</span>
                  <span className="title">Drafted note under 4 headings + letter</span>
                  <span className="tag">DRAFT</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="scribe-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" /></svg></span>
                  <span className="idx">STEP 03</span>
                  <span className="title">Flagged 3 referral mismatches</span>
                  <span className="tag">FLAG</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="scribe-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6" /></svg></span>
                  <span className="idx">STEP 04</span>
                  <span className="title">Filed nothing, queued for signature</span>
                  <span className="tag">HOLD</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · the doctor&apos;s signature is the only way into the chart.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">Demo</div><div className="v">One recorded run on a sample orthopedic visit, shown in full below.</div></div>
            <div className="ledgercell"><div className="k">Who signs</div><div className="v">The doctor. Drafts are saved, never filed or sent by the agent.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong> businesses served across web, commerce and AI work.</div></div>
          </div>
        </div>

        {/* ═══ ANSWER-FIRST FACTS ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ In Plain Terms</div>
              <h2>What an AI Medical Scribe Agent Is, and Why Specialists Need the Letter Too</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p><span className="stat">An AI medical scribe agent listens to a consented visit, reads the patient&apos;s records, and drafts the clinical note and the referral letter for the doctor to review and sign.</span> An ordinary AI scribe writes the note from the conversation. The agent also checks what the referral said against what the patient said, and drafts the letter back.</p></div>
                <div className="fact"><div className="sec">§02</div><p><span className="stat">Ambient AI scribes are already in daily use at scale.</span> The AMA reported that 7,260 Permanente Medical Group physicians used them across 2,576,627 patient encounters in 63 weeks, with cuts in note time and in &quot;pajama time&quot;, the charting doctors do after hours. <a href={SRC_AMA_TPMG} {...EXT}>AMA, 12 June 2025 ↗</a></p></div>
                <div className="fact"><div className="sec">§03</div><p><span className="stat">AI scribes still miss things, so the doctor has to stay the last check.</span> A 2025 review of 18 studies reported frequent omissions and occasional clinically significant hallucinations. Our agent quotes its sources when it flags a conflict, and it cannot file a note or send a letter. <a href={SRC_PMC_REVIEW} {...EXT}>Narrative review on PMC ↗</a></p></div>
                <div className="fact"><div className="sec">§04</div><p><span className="stat">US searches for &quot;ai medical scribe&quot; run at about 5,400 a month, with clicks bid at about $40.</span> That is our own DataForSEO measurement for the US on 18 October 2026. Searches naming orthopedics were too few to measure, which is one reason this page shows a full orthopedic run instead of a feature list.</p></div>
              </div>
              <figure className="factphoto visual-slot" data-visual-slot="ai-medical-scribe:facts" data-visual-kind="photo" data-visual-status="ready">
                <img
                  src={`${IMAGE_ROOT}/orthopaedic-visit-960.webp`}
                  srcSet={`${IMAGE_ROOT}/orthopaedic-visit-640.webp 640w, ${IMAGE_ROOT}/orthopaedic-visit-960.webp 960w`}
                  sizes="(max-width: 820px) calc(100vw - 40px), (max-width: 1264px) 38vw, 420px"
                  width={960}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  alt="AI-generated still from our film: a doctor listens as a patient describes his knee injury in a clinic exam room."
                />
              </figure>
            </div>
          </div>
        </section>

        {/* ═══ THE RECORDED RUN ═══ */}
        <section className="section comparison" id="the-run">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The Recorded Run</div>
              <h2>Three Things the Referral Got Different, Flagged and Left for the Doctor</h2>
              <p>A sample orthopedic visit: a 52-year-old man referred by his family doctor for knee pain. The agent read the referral, the last visit (a 2024 shoulder strain) and the medication list, then compared them with what the patient said in the room. These are its three flags, word for word.</p>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Referral mismatches flagged by the agent">
              <table>
                <thead><tr><th>Field</th><th>Said in the visit</th><th>Says in the record</th><th>Agent&apos;s decision</th></tr></thead>
                <tbody>
                  {RUN_FLAGS.map(([field, said, record]) => (
                    <tr key={field}><th>{field}</th><td>{said}</td><td>{record}</td><td>None. Flagged for the doctor</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">From one recorded run of the agent on 18 October 2026. The clinic, doctor, patient and referral are sample data, and one run on one visit does not measure accuracy. That comes from testing on your own past visits.</p>
          </div>
        </section>

        {/* ═══ THE DRAFT NOTE ═══ */}
        <section className="section comparison" id="the-note">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The Draft</div>
              <h2>The AI Clinical Note It Drafted, Under the Clinic&apos;s Four Headings</h2>
              <p>The sample clinic&apos;s headings were Reason for visit, History, Examination and Plan. The agent read them from the clinic&apos;s settings, wrote the note in that order, and saved it with the status &quot;draft saved, not filed&quot;.</p>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Draft visit note from the recorded run">
              <table>
                <thead><tr><th>Heading</th><th>Draft text, as written by the agent</th></tr></thead>
                <tbody>
                  {RUN_NOTE.map(([heading, text]) => (
                    <tr key={heading}><th>{heading}</th><td>{text}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">It also drafted a letter to the referring doctor at the sample family practice, with the findings, the suspected medial meniscus tear, the MRI requested and the plan, saved as &quot;draft saved, not sent&quot;. Both drafts were then queued with the status &quot;waiting for Dr. Rao to review and sign&quot;.</p>
          </div>
        </section>

        {/* ═══ COMPARISON ═══ */}
        <section className="section comparison" id="compare">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>Virtual Medical Scribe vs AI Scribe App vs a Note-Drafting Agent</h2>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Medical scribe options compared">
              <table>
                <thead><tr><th>Option</th><th>Who writes the draft</th><th>Reads the referral and records</th><th>Best for</th></tr></thead>
                <tbody>
                  <tr><th>Human or virtual medical scribe<br /><span className="mono tableSubLabel">a person</span></th><td>A trained scribe, in the room or remote</td><td>If you give them chart access and time</td><td>Practices that want a person who can ask the doctor questions</td></tr>
                  <tr><th>AI medical scribe software<br /><span className="mono tableSubLabel">subscription app</span></th><td>The app, from the visit conversation</td><td>Varies by product; ask for a demo on a referred patient</td><td>Clinicians whose main paperwork is the visit note</td></tr>
                  <tr><th>EHR built-in ambient notes<br /><span className="mono tableSubLabel">already in your EHR</span></th><td>Your EHR vendor&apos;s AI feature</td><td>Inside that EHR&apos;s own records</td><td>Practices whose EHR offers it and whose notes fit its templates</td></tr>
                  <tr className="us"><th>Custom note-drafting agent<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th><td>An agent built around your clinic&apos;s workflow</td><td>Yes: referral, last visit and medication list in our sample run, with mismatches flagged</td><td>Referral-based specialist clinics with their own headings and letters</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">If a subscription app or your EHR&apos;s own feature covers your notes, buy that first. We build when the job crosses documents: referral in, note, letter out.</p>
          </div>
        </section>

        {/* ═══ CAPABILITIES ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>What the Note-Drafting Agent Does, Step by Step</h2>
            </div>
            <div className="capgrid">
              {CAPABILITIES.map((cap, i) => {
                const inner = (
                  <>
                    <div className="caphead"><span className="capid">CAP-{String(i + 1).padStart(2, '0')}</span><svg {...CAP_ICON}><path d={cap.icon} /></svg></div>
                    <h3>{cap.title}</h3>
                    <p>{cap.body}</p>
                    <div className="systags">{cap.tags.map((t) => <span key={t}>{t}</span>)}</div>
                    {cap.href && <span className="cap-more">Open the page ↗</span>}
                  </>
                );
                return cap.href
                  ? <a key={cap.title} className={`cap cap-${i + 1}`} href={cap.href}>{inner}</a>
                  : <div key={cap.title} className={`cap cap-${i + 1}`}>{inner}</div>;
              })}
            </div>
          </div>
        </section>

        <div className="ai-dev-midcta" id="next-step">
          <MidPageCTA
            headline="See it draft one of your notes"
            sub="Tell us your specialty and the note or letter you write most. We set up the agent on a sample or de-identified visit of that type, with your headings, and you watch it draft, flag and queue for signature before you sign anything."
            label="See it draft one of my notes"
          />
        </div>

        {/* ═══ BUYER CHECKLIST ═══ */}
        <section className="section platforms" id="checklist">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Before You Choose</div><h2>7 Questions to Ask Before Any AI Scribe Writes in Your Charts</h2></div>
              <p>Ask them of every vendor, us included. The answers separate a tool that saves time from one that moves the editing to later.</p>
            </div>
            <div className="platlist" role="list">
              {BUYER_CHECKS.map(([question, why], i) => (
                <div className="plat" role="listitem" key={question}><span className="capid">{String(i + 1).padStart(2, '0')}</span><div className="plat-name"><h3>{question}</h3></div><p className="plat-build">{why}</p><span className="plat-go" aria-hidden="true"></span></div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section className="section process" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>From First Call to the Agent Drafting Your Real Notes</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Scope</h3><p>Your specialty, the note and letter types you write most, your headings and your EHR. We say plainly if a ready-made AI scribe would do.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Demo</h3><p>The agent drafts one of your note types on a sample or de-identified visit, flags mismatches and queues for signature. You see it before you sign.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Test visits</h3><p>Your clinicians score drafts for a set of past visits against what they signed. We agree the pass mark with you first.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Connect &amp; pilot</h3><p>Once your compliance lead approves, the agent&apos;s tools are connected to your EHR and one doctor pilots it with the signature step in place.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Roll out &amp; re-test</h3><p>More doctors and letter types, with the same test visits re-scored after every model or template change.</p></div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="#hero">See it draft one of my notes</a>
              <a className="btn btn-ghost" href="/services/ai-agent-development">How we build AI agents</a>
            </div>
          </div>
        </section>

        {/* ═══ SAFETY ═══ */}
        <section className="vlog" id="safety">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Safety &amp; Privacy</div>
              <h2>How the Agent Stays Inside the Doctor&apos;s Control</h2>
              <p>Where a commitment rests on a public rule, it links to it so your compliance lead can check.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">SIGNATURE</span><h3>Drafts only, signed by the doctor</h3><p>The agent has no tool that files a note or sends a letter. It can save a draft and add it to the doctor&apos;s signature queue, and that is where its job ends.</p></div>
              <div className="ventry"><span className="vtag">FLAGS</span><h3>Conflicts are shown, never settled</h3><p>When the record and the visit disagree, the flag quotes both and names the source and date. AI scribes are known to omit details, so the doctor sees the conflict before signing. <a href={SRC_PMC_REVIEW} {...EXT}>Review ↗</a></p></div>
              <div className="ventry"><span className="vtag">HIPAA</span><h3>Business associate terms before real data</h3><p>HHS treats a vendor handling protected health information for a practice as a business associate. Demos use sample or de-identified data; real patient data waits for the agreements your compliance lead requires. <a href={SRC_HHS_BA} {...EXT}>HHS ↗</a></p></div>
              <div className="ventry"><span className="vtag">CONSENT</span><h3>The patient agrees to the recording</h3><p>Recording rules differ by state. The demo visit opens with the patient agreeing to the recording for the note, and your counsel sets the consent wording for your clinic.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ WHEN NOT TO HIRE US ═══ */}
        <section className="section platforms" id="build-or-buy">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Honest Advice</div><h2>When You Do Not Need a Custom AI Scribe Agent</h2></div>
              <p>A built agent is the right answer for some clinics and the wrong one for many.</p>
            </div>
            <div className="platlist" role="list">
              <div className="plat" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Your paperwork is the visit note</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Trial two or three AI scribe apps</div><p className="plat-build">If you write standard notes and few letters, a subscription AI medical scribe is quicker to start. Test each on your own visits.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Your EHR already has ambient notes</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Turn on the built-in feature first</div><p className="plat-build">Some EHR vendors now include an ambient AI note feature. If it fits your templates, set it up well and build only for the gap, such as referral letters.</p><span className="plat-go" aria-hidden="true"></span></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>You have no consent process yet</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Set the consent wording first</div><p className="plat-build">No AI scribe of any kind should listen to a visit until your counsel has set how and when patients are asked.</p><span className="plat-go" aria-hidden="true"></span></div>
              <a className="plat" role="listitem" href="/services/healthcare-ai-agents"><span className="capid">04</span><div className="plat-name"><h3>The bottleneck is the phone</h3></div><div className="plat-fit"><span className="k">Do this instead</span>Look at a phone and scheduling agent</div><p className="plat-build">If missed calls and booking hurt more than charting, a different agent answers, books and logs calls. That one stays out of clinical notes.</p><span className="plat-go" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        {/* ═══ WHAT ELSE RANKS ═══ */}
        <section className="section agencies" id="what-else-ranks">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>What Else Ranks for &quot;AI Medical Scribe&quot;, and How This Page Differs</h2>
              <p>These are business sites on Google&apos;s first page in the US for &quot;ai medical scribe&quot;, &quot;ai scribe for orthopedics&quot; and &quot;ai medical scribe for specialists&quot; when we checked on 18 October 2026 (DataForSEO), with the title Google showed and each site&apos;s count of referring domains. We list them so you can compare; we have not tested their products, and the list leaves out forums, video sites and medical publishers.</p>
            </div>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Sites ranking for ai medical scribe">
              <table>
                <thead><tr><th>Site</th><th>Page title shown in Google</th><th>Referring domains</th></tr></thead>
                <tbody>
                  {RANKING_SITES.map(([domain, title, rd]) => (
                    <tr key={domain}><th>{domain}</th><td>{title}</td><td>{rd.toLocaleString('en-US')}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="sub-note">Most of these pages sell a scribe app or explain the category. This page shows one agent run in full, the flags and the draft word for word, and says when an app is the better buy.</p>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">AI Medical Scribe Questions, Answered Directly</h2>
                <p>{SCRIBE_FAQS.length} questions doctors and practice managers ask about AI scribes and note-drafting agents, many taken from Google&apos;s People Also Ask boxes on 18 October 2026.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {SCRIBE_FAQ_CATEGORIES.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
                </nav>
              </div>
              <FaqAccordion />
            </div>
          </div>
        </section>

        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">References &amp; Related</div>
            <div className="refs">
              <a href="/services/healthcare-ai-agents">Healthcare AI Agents</a>
              <a href="/services/ai-agent-development">AI Agent Development</a>
              <a href="/services/document-intake-ai-agents">Document Intake AI Agents</a>
              <a href="/services/ai-agent-monitoring">AI Agent Monitoring</a>
              <a href={SRC_AMA_TPMG} {...EXT}>AMA: AI Scribes at The Permanente Medical Group</a>
              <a href={SRC_PMC_REVIEW} {...EXT}>Narrative Review of Ambient AI Scribes</a>
              <a href={SRC_HHS_BA} {...EXT}>HHS: Business Associates Under HIPAA</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Tell Us the Note You Write Most</h2>
              <p>Send your specialty, your note headings and the letter you send after a referral. We will show the agent drafting one on a sample visit before you sign, then put a fixed price per phase in writing.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">See it draft one of my notes</a>
              <a className="btn btn-ghost" href="/contact">Talk to the founder</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
