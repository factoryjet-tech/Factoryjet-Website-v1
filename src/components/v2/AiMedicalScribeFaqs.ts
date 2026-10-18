/**
 * AI Medical Scribe Agents FAQ (/services/ai-medical-scribe-agents): the single source for the
 * visible accordion in AiMedicalScribeSections.tsx AND the FAQPage JSON-LD in
 * src/app/services/ai-medical-scribe-agents/page.tsx. Never duplicate these strings elsewhere.
 *
 * Questions: Google People Also Ask, US (location 2840), pulled 18 Oct 2026 for ai medical scribe,
 * ai clinical documentation, ambient clinical documentation, ai scribe for orthopedics and
 * ai medical scribe for specialists (pipeline/research/data/raw/clinical-notes-page-2026-10-18/),
 * plus buyer questions built from the measured keyword list in the same folder. Scribe-career and
 * salary questions were left out.
 *
 * Claims about the agent come only from its recorded run on a sample visit
 * (video-studio/films/story-scribe/runs/run1.json, 18 Oct 2026). No FactoryJet prices, no running
 * costs, no compliance certifications, no team location.
 */

export const SCRIBE_FAQ_CATEGORIES = [
  { id: 'faq-basics', label: 'AI scribes, explained' },
  { id: 'faq-run', label: 'What the agent does' },
  { id: 'faq-ortho', label: 'Orthopedic & specialist clinics' },
  { id: 'faq-privacy', label: 'Consent, HIPAA & safety' },
  { id: 'faq-buy', label: 'Cost, choosing & getting started' },
] as const;

export interface ScribeFaq {
  id: string;
  category: (typeof SCRIBE_FAQ_CATEGORIES)[number]['id'];
  question: string;
  answer: string;
  /** Optional link rendered after the answer (external source or internal page). Not part of the schema text. */
  link?: { url: string; label: string; external?: boolean };
}

/** Read and checked 18 Oct 2026. */
export const SRC_AMA_TPMG = 'https://www.ama-assn.org/practice-management/digital-health/ai-scribes-save-15000-hours-and-restore-human-side-medicine';
export const SRC_PMC_REVIEW = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12973079/';
export const SRC_HHS_BA = 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html';

export const SCRIBE_FAQS: ScribeFaq[] = [
  // ── Basics ──
  { id: 'Q01', category: 'faq-basics', question: 'What is an AI scribe?',
    answer: 'An AI scribe is software that listens to a patient visit, with the patient\'s consent, and writes a draft of the clinical note for the doctor to check and sign. An AI medical scribe agent goes a step further: it also reads the patient\'s records, such as the referral letter and medication list, and can draft other documents, like the letter back to the referring doctor.' },
  { id: 'Q02', category: 'faq-basics', question: 'What does ambient mean in medical terms?',
    answer: 'Ambient means the software works in the background of a normal visit. The doctor talks to the patient as usual and the tool listens, instead of the doctor typing or dictating. Ambient clinical documentation is the name for notes produced this way, and the tool is often called an ambient scribe. The doctor still reviews and signs every note before it enters the chart.' },
  { id: 'Q03', category: 'faq-basics', question: 'What is AI clinical documentation?',
    answer: 'AI clinical documentation is any use of AI to write or prepare clinical paperwork: visit notes, SOAP notes, referral letters, discharge summaries and follow-up letters. Most products focus on the visit note, whether they sell themselves as an AI note taker for doctors or as AI medical note taking. The useful test for any of them is simple: does the doctor end up with an accurate draft faster than typing it, and does anything get filed without the doctor seeing it?' },
  { id: 'Q04', category: 'faq-basics', question: 'Is AI replacing medical scribes?',
    answer: 'In many practices it is taking over the typing part of the job. A human or virtual medical scribe still brings judgment an app does not, such as asking the doctor about something unclear. The Permanente Medical Group reported 7,260 physicians using ambient AI scribes across 2,576,627 patient encounters in 63 weeks, which shows how fast the shift is moving in large groups.',
    link: { url: SRC_AMA_TPMG, label: 'AMA, 12 June 2025', external: true } },
  { id: 'Q05', category: 'faq-basics', question: 'How is AI being used for clinical notes today?',
    answer: 'The most common use is ambient AI scribes that draft the visit note from the conversation. In the Permanente Medical Group rollout the AMA reported, 84% of physicians said it helped their communication with patients and 82% said their work satisfaction improved. AI charting of notes, letters and chart summaries comes first because that work eats the hours after clinic that doctors call pajama time.',
    link: { url: SRC_AMA_TPMG, label: 'AMA report', external: true } },

  // ── What the agent does ──
  { id: 'Q06', category: 'faq-run', question: 'What did the note-drafting agent do in your demo?',
    answer: 'On one recorded sample visit it read the referral letter, the patient\'s last visit and the medication list. It drafted the visit note under the sample clinic\'s four headings: Reason for visit, History, Examination and Plan. It drafted a letter back to the referring doctor. It flagged three places where the referral disagreed with the visit, filed nothing, and queued both drafts for the doctor\'s signature.' },
  { id: 'Q07', category: 'faq-run', question: 'What were the three referral mismatches it flagged?',
    answer: 'The referral letter said right knee; the patient said left knee. The referral said a fall at home; the patient said he twisted it playing pickleball. The referral said a six week history; the patient said about ten days. The agent recorded both versions of each line for the doctor and decided none of them. Choosing which is right is a clinical call.' },
  { id: 'Q08', category: 'faq-run', question: 'Does the AI file notes or send letters on its own?',
    answer: 'No. In the recorded run the note was saved as a draft and not filed, the letter was saved as a draft and not sent, and both were queued for the doctor to review and sign. We build every note-drafting agent this way: the doctor\'s signature is the only route from a draft into the chart or out to another practice.' },
  { id: 'Q09', category: 'faq-run', question: 'Can an AI scribe write a referral letter?',
    answer: 'Yes. In our sample run the agent drafted the reply to the referring family doctor from the same visit: findings, the suspected diagnosis, the scan requested and the plan. It used the referrer\'s name and practice from the medical referral letter it had read. The letter stayed a draft until the doctor signed it, the same as the note.' },
  { id: 'Q10', category: 'faq-run', question: 'Can it write SOAP notes instead of our own headings?',
    answer: 'It writes under whatever headings the clinic uses. In the demo the sample clinic\'s headings were Reason for visit, History, Examination and Plan, and the agent read them from the clinic\'s settings before drafting. A practice that uses Subjective, Objective, Assessment and Plan would get AI SOAP notes in that order instead. Headings are clinic data, not code.' },
  { id: 'Q11', category: 'faq-run', question: 'What happens when the patient and the record disagree?',
    answer: 'The agent flags the line and leaves it for the doctor. Each flag names the field, quotes what was said in the visit, and quotes what the record says with its source and date. In the demo that meant the referral from the family practice dated 12 October 2026. The draft note follows what was said in the room; the flag makes sure the doctor sees the conflict before signing.' },

  // ── Orthopedic & specialist ──
  { id: 'Q12', category: 'faq-ortho', question: 'Is there an AI scribe for orthopedics?',
    answer: 'Several AI scribe products sell an orthopedic scribe template, and some EHRs built for orthopedics ship their own AI note features. What orthopedic clinics often need on top is the referral side: checking the incoming letter against the visit, and drafting the reply. That is the job our demo agent was built for, on a sample knee visit, with the orthopedic exam findings written into the Examination heading.' },
  { id: 'Q13', category: 'faq-ortho', question: 'Why do specialist clinics need more than a generic AI scribe?',
    answer: 'Specialists work from referrals. Every new patient arrives with a letter from another doctor, and every visit ends with a letter back. A generic scribe listens to the room. A specialist clinic also needs the referral read, the mismatches caught, and the reply drafted in the clinic\'s own style. The note is half the paperwork; the letters are the other half.' },
  { id: 'Q14', category: 'faq-ortho', question: 'Which specialties can a note-drafting agent work for?',
    answer: 'Orthopedics is where we started because the demo visit was a knee. The same pattern fits any referral-based specialty with set exam findings and set letters: sports medicine, pain clinics, cardiology, dermatology, ENT and neurology among them. Each specialty gets its own headings, its own letter template and its own test visits before any doctor relies on it.' },
  { id: 'Q15', category: 'faq-ortho', question: 'Will it understand orthopedic exam terms?',
    answer: 'In the sample run it turned the spoken exam into chart language: tenderness along the inner joint line became medial joint line tenderness, and the doctor\'s words on bending became full extension to about 110 degrees of flexion, with McMurray\'s test painful medially. For your clinic we test this on your own past visits and specialty terms before go-live.' },

  // ── Consent, HIPAA & safety ──
  { id: 'Q16', category: 'faq-privacy', question: 'Do I need patient consent for an AI scribe?',
    answer: 'Plan on asking every time. Recording laws differ by state, and some states require every person in a conversation to agree to a recording. Many practices ask at check-in and again at the start of the visit. In our demo the visit opens with the patient agreeing to the recording for the note. Your counsel should set the wording for your state.' },
  { id: 'Q17', category: 'faq-privacy', question: 'Is an AI scribe HIPAA compliant?',
    answer: 'No software is HIPAA compliant on its own label. Under HIPAA, a vendor that creates, receives, keeps or sends protected health information for a practice is a business associate, and the practice needs a business associate agreement (BAA) with it. Ask any AI scribe vendor, us included, which of their subcontractors touch patient data and whether each one is covered.',
    link: { url: SRC_HHS_BA, label: 'HHS: business associates', external: true } },
  { id: 'Q18', category: 'faq-privacy', question: 'Can AI scribes get things wrong?',
    answer: 'Yes. A 2025 narrative review of 18 studies found ambient AI scribes cut documentation burden, but also reported frequent omissions and occasional clinically significant hallucinations, meaning content that was never said. That is why our agent quotes its sources on every flag and why nothing reaches the chart without the doctor\'s signature.',
    link: { url: SRC_PMC_REVIEW, label: 'Narrative review on PMC', external: true } },
  { id: 'Q19', category: 'faq-privacy', question: 'Where does the patient data go during a demo?',
    answer: 'The demo runs on sample or de-identified material: a made-up clinic, patient and referral, like the one in our film. Real patient data does not reach the agent until your compliance lead has approved where it is processed and stored, and the agreements they require, including a BAA, are signed.' },

  // ── Cost, choosing & getting started ──
  { id: 'Q20', category: 'faq-buy', question: 'Which AI medical scribe is the best?',
    answer: 'It depends on the paperwork you need. For a single clinician writing standard visit notes, a ready-made AI scribe for doctors, sold as a subscription, is usually the quickest fit. Clinics that live on referrals, with their own headings, letter style and records to check, often need an agent built around that workflow. Test any option on ten of your own past visits before you choose.' },
  { id: 'Q21', category: 'faq-buy', question: 'How much does an AI scribe cost?',
    answer: 'Ready-made AI medical scribe software is usually sold as a monthly subscription per clinician; check each vendor\'s current price page. A custom note-drafting agent is a build project with a fixed price per phase, quoted after a short scoping call, and you see it draft one of your notes before you sign anything.' },
  { id: 'Q22', category: 'faq-buy', question: 'Should we buy an AI scribe app or have an agent built?',
    answer: 'Buy if the app covers your notes and your EHR already connects to it; that is the simplest way to start using AI for clinical notes. Build when the job crosses documents: reading the referral, checking it against the visit, drafting the letter back, and following the clinic\'s own headings. A built agent is code you own and can extend to the next letter type without waiting for a vendor roadmap.' },
  { id: 'Q23', category: 'faq-buy', question: 'Does it work with our EHR?',
    answer: 'In the demo the agent\'s tools read from a sample clinic record. For a real clinic those same tools are connected to your EHR or document system, through its official API where one exists, and the connection is scoped and tested per clinic. Tell us your EHR on the first call and we will say plainly what it allows.' },
  { id: 'Q24', category: 'faq-buy', question: 'How do we see it draft one of our notes?',
    answer: 'Send the form on this page with your specialty and the note or letter type you write most. We set up a demo on a sample or de-identified visit of that type, using your headings and letter style, and you see the agent draft it, flag any mismatches and queue it for signature. That happens before any contract.' },
];
