import React from 'react';
import styles from './best-ai-agent-companies-healthcare-practices-2026.visual-qa.module.css';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'best-ai-agent-companies-healthcare-practices-2026';
const PAGE_URL = `https://factoryjet.com/blog/${SLUG}`;
const IMG = `/images/blog/${SLUG}`;
const TITLE = 'Companies That Build AI Agents for Healthcare Practices (2026): 13 Compared, Including Us';
const META_DESCRIPTION =
  'Compare 13 healthcare AI agent companies for US practices: front desk and phone agents, scribes and custom builders. EHRs, BAA terms and published prices.';

// Every fact about every company below was read on that company's own website
// on 23 October 2026 (URL in `source`, `hqSource` where the location came from
// another page). Compliance lines are each company's own words, never our
// assessment. Nothing here is paid placement and the order is NOT a ranking.
// The ItemList schema maps from this same array, so the list and schema cannot drift.
type Group = 'Front desk and phone' | 'Larger groups and health systems' | 'Clinical documentation' | 'Custom development' | 'Us';

interface Firm {
  name: string;
  url: string;
  source: string;
  hqSource?: string;
  group: Group;
  based: string;
  type: string;
  clients: string;
  systems: string;
  what: string;
  compliance: string;
  bestFor: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'Assort Health',
    url: 'https://www.assorthealth.com',
    source: 'https://www.assorthealth.com',
    hqSource: 'https://www.assorthealth.com/press',
    group: 'Front desk and phone',
    based: 'San Francisco, California',
    type: 'Subscription software: an AI voice agent for patient access',
    clients: 'Health centers, health systems and multi-specialty practices across 23+ specialties. It names John Muir Health, Golden Valley Health Centers, Women’s Health Arizona, Allied Digestive Health, U.S. Urology Partners and Michigan Orthopaedic Surgeons',
    systems: 'athenahealth and NextGen Enterprise. It says it works with 15+ platforms but does not name the rest',
    what: 'Assort calls its product an AI voice agent for healthcare. It says the agent answers patient calls around the clock for scheduling, triage and routing, intake, referrals, fax, refills, lab requests, payments and waitlists. It also lists outbound calls, two-way texting and a chat agent. It says the platform supports more than 15,000 providers.',
    compliance: 'Its patient privacy policy says data handling is governed by its customer agreements, which often include a Business Associate Agreement. No SOC 2 claim on the pages we read.',
    bestFor: 'Specialty and multi-specialty practices that want an agent to answer every patient call.',
    ask: 'Which actions can the agent write straight into our EHR today, and which still become a task for staff?',
  },
  {
    name: 'Arini',
    url: 'https://www.arini.ai',
    source: 'https://www.arini.ai/ai-receptionist-page',
    hqSource: 'https://www.termsfeed.com/live/f608374e-45e5-4bf0-bdd4-f36af787a0e5',
    group: 'Front desk and phone',
    based: 'San Francisco, California, per the terms linked from its site',
    type: 'Subscription software: an AI receptionist for dental practices',
    clients: 'Dental practices from one location to groups of 100+. It names Normandy Lake Dentistry, Unified Dental Care, Sunrise Oral Surgery, Snow Orthodontics, MB2 Dental and PepperPointe Partnerships',
    systems: 'None named. It says it connects to cloud and on-premise practice management systems',
    what: 'Arini says its receptionist answers every call, books appointments, answers questions and passes calls to your team only when needed. It also offers outbound calls and texts to bring back lapsed patients, online booking for your website and a report on calls and bookings.',
    compliance: 'No HIPAA, BAA or SOC 2 claim in the text of the pages we read. Ask.',
    bestFor: 'Dental practices and dental groups that want missed and after-hours calls answered.',
    ask: 'Does it read and write appointments in our exact practice management system, and will you sign a BAA?',
  },
  {
    name: 'Sully.ai',
    url: 'https://www.sully.ai',
    source: 'https://www.sully.ai',
    hqSource: 'https://www.sully.ai/privacy-policy',
    group: 'Front desk and phone',
    based: 'Santa Clara, California',
    type: 'Subscription software: a set of AI agents for the front desk, notes and coding',
    clients: 'Healthcare organizations and platforms. It names Apogee and evolvedMD and says it serves over 20,000 clinicians',
    systems: 'About 30 named, including Epic, Cerner, MEDITECH, athenahealth, NextGen, AdvancedMD, Tebra, ModMed, Nextech, DrChrono, Elation, Healthie, Jane App and PointClickCare',
    what: 'Sully describes AI agents for the front desk, the visit and everything after. It lists a receptionist agent that schedules and fills cancellations, a scribe, a medical coder and a consultant. It says it reads and writes patient context, notes, codes and appointments on most major EHRs.',
    compliance: 'Its homepage lists HIPAA, SOC 2 Type II, ISO 27001 and HITRUST, and says it does not use or train on customer data. No BAA statement on the pages we read.',
    bestFor: 'Practices that want one vendor for front desk, scribe and coding agents.',
    ask: 'Which of the listed EHRs support writing appointments back, and which are read-only?',
  },
  {
    name: 'Keragon',
    url: 'https://www.keragon.com',
    source: 'https://www.keragon.com',
    group: 'Front desk and phone',
    based: 'New York, New York',
    type: 'Subscription software: a no-code automation and AI agent platform for healthcare',
    clients: 'Mental and behavioral health, dental, med spa, primary care, wellness and chiropractic practices. It names Autism Center of Illinois, Timber Creek Counseling and Institute of Contextual Health',
    systems: 'athenahealth, eClinicalWorks, DrChrono, Elation, Healthie, AdvancedMD, Tebra, ModMed, Open Dental, Dentrix Ascend and IntakeQ. It says 400+ integrations across 30+ EHRs',
    what: 'Keragon says you describe a task in plain English and it builds and runs it across your EHR and other tools. It offers workflows, AI agents and a connector for your own AI tools, with templates such as text reminders to cut no-shows.',
    compliance: 'It says it is HIPAA-compliant, SOC 2 Type II audited by Prescient Security, and includes a BAA on every paid plan.',
    bestFor: 'Smaller practices that want to set up their own automations without a developer.',
    ask: 'How many workflow runs and AI credits would our call and intake volume use each month?',
  },
  {
    name: 'Notable',
    url: 'https://www.notablehealth.com',
    source: 'https://www.notablehealth.com',
    hqSource: 'https://www.notablehealth.com/about-us',
    group: 'Larger groups and health systems',
    based: 'San Mateo, California',
    type: 'Subscription software: an AI agent platform for health system operations',
    clients: 'Mostly health systems. It names CommonSpirit Health, MUSC Health, Montage Health, Catholic Health and Southwest General Health Center',
    systems: 'Epic, Oracle Health, Cerner, athenaOne, athenaIDX and MEDITECH Expanse',
    what: 'Notable calls itself an AI platform built for healthcare. It offers agents for patient access, revenue cycle, care operations and contact center work, plus a low-code builder to design automations.',
    compliance: 'It says it has enterprise-grade security and links a security center. No HIPAA, SOC 2 or BAA claim in the text of the pages we read.',
    bestFor: 'Larger groups and health systems that want agents across patient access and billing.',
    ask: 'Do you take on independent practice groups, or is the smallest deal sized for health systems?',
  },
  {
    name: 'Kore.ai',
    url: 'https://kore.ai',
    source: 'https://kore.ai/industry/healthcare-provider',
    hqSource: 'https://kore.ai/about-us/',
    group: 'Larger groups and health systems',
    based: 'US offices in San Mateo, California, New York and Orlando, Florida',
    type: 'Enterprise conversational AI platform with agents for healthcare providers',
    clients: 'Larger organizations. Logos on its provider page include Carestream Dental, Bon Secours Mercy Health and NYC Health + Hospitals',
    systems: 'Epic, Oracle Cerner, NextGen Healthcare and Denticon',
    what: 'Kore.ai lists agents for appointment scheduling, prescription refills, lab results, patient registration, referrals and prior authorization. It says intake runs across voice and digital channels and syncs with the medical record.',
    compliance: 'It says its use cases come with HIPAA compliance built in and shows HIPAA, SOC 2 and ISO 27001 badges. No BAA statement on the pages we read.',
    bestFor: 'Large organizations that want voice and digital agents on one platform.',
    ask: 'Is there a package sized for a single practice, or is this sold only to enterprise contact centers?',
  },
  {
    name: 'Suki',
    url: 'https://www.suki.ai',
    source: 'https://www.suki.ai',
    hqSource: 'https://www.suki.ai/contact-us/',
    group: 'Clinical documentation',
    based: 'Redwood City, California',
    type: 'Subscription software: an ambient documentation assistant',
    clients: 'Health systems and medical practices. It says 400+ health systems and partners use it across 100+ specialties',
    systems: 'Epic, Oracle Health, athenahealth and MEDITECH',
    what: 'Suki says its ambient documentation goes beyond transcription and drafts notes, patient instructions and orders from the visit. It also lists coding help and dictation.',
    compliance: 'It says it is SOC 2 Type 2 certified and HIPAA compliant. Its privacy policy says it processes practice data under its service agreement and Business Associate Agreement.',
    bestFor: 'Clinicians who want notes, orders and patient instructions drafted from the visit.',
    ask: 'Does the note land in our EHR fields directly, or as text we paste in?',
  },
  {
    name: 'Abridge',
    url: 'https://www.abridge.com',
    source: 'https://www.abridge.com',
    hqSource: 'https://www.abridge.com/privacy',
    group: 'Clinical documentation',
    based: 'United States. Its privacy policy names no city',
    type: 'Subscription software: ambient clinical documentation',
    clients: 'Large health systems. It names Sutter Health, Kaiser Permanente, Johns Hopkins Medicine, Duke Health, Yale New Haven Health and UPMC, and says 300+ health systems use it',
    systems: 'Its customers page mentions an Epic integration. No other integration is named on the pages we read',
    what: 'Abridge describes AI clinical documentation built for accuracy. It also lists documentation for billing, nursing documentation and an assistant.',
    compliance: 'No HIPAA, BAA or SOC 2 claim in the text of the pages we read. Ask.',
    bestFor: 'Practices inside or affiliated with large health systems.',
    ask: 'Do you contract with independent practices, and which EHRs do you write notes into?',
  },
  {
    name: 'Light-it',
    url: 'https://lightit.io',
    source: 'https://lightit.io/services/ai-healthcare-development',
    hqSource: 'https://lightit.io',
    group: 'Custom development',
    based: 'New York and Aventura, Florida, with offices in Montevideo and Buenos Aires',
    type: 'Healthcare software and AI development firm',
    clients: 'Digital health companies and providers. Case studies name Mavida, PsychNow, EO Care and Voxira.ai, an AI clinic secretary',
    systems: 'No EHR vendor named. It refers to EHR, CRM and billing system connections in general',
    what: 'Light-it says it builds chat and voice agents that handle scheduling, intake, triage and eligibility checks. It also builds documentation tools, decision support and billing tools.',
    compliance: 'It says it builds with HIPAA safeguards from day one and offers BAA-ready architecture. Its FAQ says a formal HIPAA audit is not included by default.',
    bestFor: 'Digital health companies and providers that need a custom agent built from scratch.',
    ask: 'Which EHRs have you connected an agent to in production, and who owns the code?',
  },
  {
    name: 'ScienceSoft',
    url: 'https://www.scnsoft.com',
    source: 'https://www.scnsoft.com/healthcare/artificial-intelligence/agentic-ai',
    group: 'Custom development',
    based: 'McKinney, Texas',
    type: 'Software development firm with a healthcare AI practice',
    clients: 'It names Prognostic Optimization Group and bioAffinity Technologies and says it has worked in healthcare IT since 2005',
    systems: 'Epic and Oracle, given as examples of systems it can connect to. It does not say which it has connected',
    what: 'ScienceSoft describes a voice scheduler that answers calls, checks identity, routes calls and books into the EHR or scheduling system. It also describes intake agents and prior authorization agents that prepare submission packets for staff to review.',
    compliance: 'It says it has experience designing HIPAA and HITECH-aligned handling of patient data and holds ISO 13485 and ISO 27001 certified management systems.',
    bestFor: 'Groups that want one bounded job, such as phone scheduling or prior authorization prep, built as a custom agent.',
    ask: 'What does a bounded scheduling agent for our EHR cost at the low end of your range, and how long does it take?',
  },
  {
    name: 'Technology Rivers',
    url: 'https://technologyrivers.com',
    source: 'https://technologyrivers.com/services/ai-agent-development/',
    hqSource: 'https://technologyrivers.com',
    group: 'Custom development',
    based: 'Reston, Virginia',
    type: 'Software development firm with healthcare and AI agent services',
    clients: 'Healthcare companies. It says it has delivered 33 HIPAA compliant systems and names Milemarker, Bindr and Verbina',
    systems: 'None named. It says its agents connect to EHR, billing and scheduling systems',
    what: 'Technology Rivers lists agents it has built, including a voice reception agent, an authorization agent and a clinical records summarizer. It describes intake, triage, scheduling and follow-up agents working together.',
    compliance: 'Its healthcare page says it signs HIPAA Business Associate Agreements for work involving patient data.',
    bestFor: 'Practices that want a voice reception or authorization agent built by a US firm that says it signs BAAs.',
    ask: 'Can we see the voice reception agent working, and which phone and EHR systems did it connect to?',
  },
  {
    name: 'EffectiveSoft',
    url: 'https://www.effectivesoft.com',
    source: 'https://www.effectivesoft.com/ai-for-healthcare.html',
    hqSource: 'https://www.effectivesoft.com',
    group: 'Custom development',
    based: 'US offices in San Diego and San Francisco, California, Pittsburgh, Pennsylvania and Durham, North Carolina',
    type: 'Custom software development firm with healthcare AI services',
    clients: 'Healthcare companies. It names TruBridge in a testimonial and says it has more than 21 years in IT',
    systems: 'None named. It offers EHR development and integration and FHIR-based connections',
    what: 'EffectiveSoft says it builds virtual assistants for patients and staff that handle intake, scheduling and note summaries. It also lists patient chatbots, AI medical coding and claims processing.',
    compliance: 'It says it follows GDPR, HIPAA and CCPA standards and that its work is backed by ISO/IEC 27001:2022-certified processes.',
    bestFor: 'Groups that need an assistant built alongside EHR integration or coding work.',
    ask: 'Which of your healthcare projects included an agent that talks to patients, and can we speak to that client?',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/',
    source: 'https://factoryjet.com/services/healthcare-ai-agents',
    group: 'Us',
    based: 'Serves US practices, with calls in US business hours',
    type: 'AI services company that builds custom agents',
    clients: 'Medical practices, dental clinics and hospital departments',
    systems: 'Epic, Cerner, Dentrix and athenahealth, with two-way booking sync, plus eClinicalWorks and other systems',
    what: 'We build custom AI agents that start at the front desk phone. They book and move appointments, check insurance eligibility, text intake forms, take refill requests in English and Spanish, and hand emergencies to your staff. Replies come in under 500 milliseconds. Our healthcare page says most practices go live in four to six weeks.',
    compliance: 'Our healthcare agents run under a signed Business Associate Agreement, as our healthcare page states.',
    bestFor: 'Practices that want a custom phone agent tied to their own EHR, which they own.',
    ask: 'To see the agent working on your own schedule and call types before you sign a contract.',
  },
];

const GROUPS: Group[] = ['Front desk and phone', 'Larger groups and health systems', 'Clinical documentation', 'Custom development', 'Us'];

const GROUP_HEADING: Record<Group, string> = {
  'Front desk and phone': 'AI voice agents for healthcare front desks and phones',
  'Larger groups and health systems': 'AI agent platforms for larger groups and health systems',
  'Clinical documentation': 'Ambient AI scribes for clinical documentation',
  'Custom development': 'Development firms that build custom healthcare AI agents',
  Us: 'Custom front desk agents tied to your EHR: FactoryJet',
};

const GROUP_INTRO: Record<Group, string> = {
  'Front desk and phone':
    'Software a practice subscribes to. Three are built around answering patient calls; Keragon is a platform where you set up the automations yourself. Only Keragon publishes a price.',
  'Larger groups and health systems':
    'Platforms whose named customers are mostly health systems. Both sell agents for patient access and more. Ask either one whether it sells to a single practice.',
  'Clinical documentation':
    'Agents that listen to the visit and draft the note. They do not answer phones, but they are often what a clinician means by an AI agent. Both name large health systems as customers.',
  'Custom development':
    'Firms that build an agent for you rather than rent you one. Each lists at least one front desk or authorization agent among its work. Two publish a build or app price.',
  Us: 'We build healthcare agents, so we are on this list. Our entry uses the same format as every other company.',
};

const GROUP_LABEL: Record<Group, string> = {
  'Front desk and phone': 'Front desk and phone',
  'Larger groups and health systems': 'Health systems',
  'Clinical documentation': 'Clinical notes',
  'Custom development': 'Custom build',
  Us: 'Custom build tied to your EHR',
};

// Published prices, copied from each company's own page on 23 Oct 2026. These
// are the companies' own figures, not FactoryJet prices.
const PRICES: { firm: string; figure: string; source: string }[] = [
  { firm: 'Keragon', figure: 'Starter $149 a month ($99 a month billed yearly), Professional $399 ($269 yearly), Scale Up $1,499 ($995 yearly), Enterprise custom. 14-day free trial', source: 'https://www.keragon.com/pricing' },
  { firm: 'ScienceSoft', figure: 'Healthcare agentic AI development from $50,000+ for a bounded workflow agent to $1,000,000+ for a multi-part solution; $50,000 to $150,000+ for a bounded workflow agent', source: 'https://www.scnsoft.com/healthcare/artificial-intelligence/agentic-ai' },
  { firm: 'Technology Rivers', figure: 'A basic healthcare app could start at around $20,000; advanced apps can pass $100,000. This is its figure for apps in general, not a stated agent price', source: 'https://technologyrivers.com/services/healthcare/' },
];

const HHS_BAA_URL = 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html';
const HHS_CLOUD_URL = 'https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html';
const AMA_URL = 'https://www.ama-assn.org/practice-management/digital-health/2-3-physicians-are-using-health-ai-78-2023';

const FAQS: FAQItem[] = [
  {
    q: 'Which companies build AI agents for healthcare practices?',
    a: 'For phone and front desk agents a practice subscribes to, look at Assort Health, Arini (dental), Sully.ai and Keragon. For health systems, Notable and Kore.ai. For ambient scribes, Suki and Abridge. To have an agent built for you, Light-it, ScienceSoft, Technology Rivers, EffectiveSoft or FactoryJet. We read every company on its own website on 23 October 2026.',
  },
  {
    q: 'What are the best AI agents for healthcare?',
    a: 'It depends on the job. For answering patient calls, Assort Health, Arini and Sully.ai sell ready-made agents. For notes, Suki and Abridge draft them from the visit. For automations you set up yourself, Keragon. For one workflow built around your own EHR and phone setup, a development firm. Pick the job first, then compare the companies that do it.',
  },
  {
    q: 'What is a common application of AI agents in healthcare?',
    a: 'Answering patient calls is the most common one sold to practices. The phone agents on this page book and move appointments, answer routine questions, take refill requests and route urgent calls to staff. Drafting clinical notes from the visit is the other common use. Prior authorization prep and insurance eligibility checks are newer and growing.',
  },
  {
    q: 'What are some examples of AI agents in healthcare?',
    a: 'AI agents in healthcare examples from the companies on this page: Assort Health’s agent answers calls for scheduling, triage, referrals and refills. Arini answers dental practice calls and books appointments. Suki drafts notes, orders and patient instructions from the visit. Kore.ai lists prior authorization and lab result agents. Technology Rivers lists a voice reception agent and a clinical records summarizer it has built.',
  },
  {
    q: 'What AI agents are HIPAA compliant?',
    a: 'No agent is compliant on its own; the vendor, the contract and how your practice uses it all count. Keragon says it includes a BAA on every paid plan. Suki says it processes practice data under a BAA. Technology Rivers says it signs BAAs. Sully.ai and Kore.ai list HIPAA among their claims. Arini, Notable and Abridge made no such claim in the text we read.',
  },
  {
    q: 'Do I need a Business Associate Agreement with an AI agent vendor?',
    a: 'Yes, if the vendor creates, receives, keeps or sends patient health information for you. HHS says a covered entity may share it with a business associate only under a written BAA. HHS also says a cloud provider that stores encrypted patient data is still a business associate even if it cannot see the data. Ask for the BAA before any patient call goes through.',
  },
  {
    q: 'What is an AI voice agent for healthcare?',
    a: 'It is software that answers and makes patient phone calls in a natural voice. It can book, move and cancel appointments in your scheduling system, answer routine questions, take refill requests and pass urgent or complex calls to a person. Assort Health, Arini, Sully.ai and FactoryJet all describe voice agents of this kind.',
  },
  {
    q: 'Can an AI agent answer calls for a dental practice?',
    a: 'Yes. Arini is built for dental practices and dental groups. It says it answers every call, books appointments and passes calls to staff only when needed. Keragon lists Open Dental and Dentrix Ascend among its connections. FactoryJet builds dental phone agents that sync with Dentrix. Ask any vendor to show bookings landing in your own practice management system.',
  },
  {
    q: 'Which EHRs do healthcare AI agents connect to?',
    a: 'It varies by company. Sully.ai names about 30, including Epic, Cerner, MEDITECH, athenahealth and NextGen. Keragon names athenahealth, eClinicalWorks and Open Dental. Notable names Epic, Oracle Health and MEDITECH Expanse. Assort names athenahealth and NextGen. Ask whether the connection reads only or also writes appointments and notes back.',
  },
  {
    q: 'How much does a healthcare AI agent cost?',
    a: 'Few companies publish prices. Keragon lists $149 to $1,499 a month for its plans. ScienceSoft puts a bounded custom healthcare agent at $50,000 to $150,000 or more. Most phone agent and scribe companies quote after a demo. For a ready-made receptionist, compare monthly fees; for a custom build, compare build cost and who owns the code.',
  },
  {
    q: 'Should a practice buy a ready-made AI agent or have one built?',
    a: 'Buy when your call types are standard and the vendor already writes into your EHR. Build when your workflow is unusual, your EHR is not on the vendor’s list, or you want to own the agent and its data. A built agent costs more up front. A subscription costs more the longer you keep it and stays the vendor’s product.',
  },
  {
    q: 'What is an ambient AI scribe?',
    a: 'An ambient scribe listens to the visit, with consent, and drafts the clinical note for the clinician to review and sign. Suki says it also drafts orders and patient instructions. Abridge lists documentation for billing and nursing as well. A scribe does not answer phones, so a practice often uses one alongside a front desk agent.',
  },
  {
    q: 'How many physicians use AI today?',
    a: 'The American Medical Association reported in February 2025 that 66% of physicians used health AI in 2024, up from 38% in 2023, in a survey of nearly 1,200 physicians. That counts any health AI use, not only agents. It shows most physicians have tried AI tools, which makes a front desk agent an easier conversation with clinical staff.',
  },
  {
    q: 'Can AI agents handle prior authorization?',
    a: 'Some companies say so. Kore.ai lists prior authorization among its provider agents. ScienceSoft describes prior authorization agents that prepare submission packets for staff to review. Technology Rivers lists an authorization agent it has built. In each case staff still review the packet. Ask which payers and portals the agent has worked with.',
  },
  {
    q: 'Can an AI agent check a patient’s insurance eligibility?',
    a: 'Yes. Light-it says its agents handle eligibility checks. FactoryJet’s healthcare agents check insurance eligibility during the call. Ask how the check runs: through your clearinghouse, your practice management system or a payer portal, and what the agent tells the patient when the check fails.',
  },
  {
    q: 'Will an AI agent replace our front desk staff?',
    a: 'The companies on this page describe agents that take routine calls and pass the rest to people. Arini says it escalates to your team only when needed. FactoryJet’s agents hand emergencies to staff. Most practices use an agent to catch missed and after-hours calls and to free staff for patients in the building.',
  },
  {
    q: 'Which healthcare AI agent companies work with small practices?',
    a: 'Keragon names solo practices among its customers and publishes a $149 starting plan. Arini names single-location dental practices. Assort names multi-specialty practices alongside health systems. Notable, Kore.ai and Abridge name mostly health systems, so ask them whether they sell to a single practice. Development firms build for any size.',
  },
  {
    q: 'What should a practice ask before buying a healthcare AI agent?',
    a: 'Ask whether the vendor signs a BAA. Ask which EHR it writes to, not only reads. Ask what happens to an urgent call and how fast a person picks it up. Ask to hear recordings of real calls on your call types. Ask who owns the call data and whether it trains models on it. Ask what the agent costs at your call volume.',
  },
  {
    q: 'Can an AI agent write appointments into Epic or athenahealth?',
    a: 'Some say they can. Sully.ai says it reads and writes appointments on most major EHRs and names Epic and athenahealth. Assort claims an athenahealth connection. FactoryJet syncs bookings both ways with Epic, Cerner, Dentrix and athenahealth. Epic connections can need extra approval steps, so ask how long yours will take.',
  },
  {
    q: 'How long does it take to set up a healthcare AI agent?',
    a: 'Subscription tools say setup is fast; Keragon says automations take minutes, not weeks. A phone agent connected to your EHR takes longer because the connection and your call rules need testing. FactoryJet’s healthcare page says most practices go live in four to six weeks, with more time for larger EHRs such as Epic.',
  },
  {
    q: 'Are AI agents safe for urgent or emergency calls?',
    a: 'Only if urgent calls reach a person fast. Assort lists triage and routing. FactoryJet’s agents hand emergencies to staff. Ask every vendor to show the exact words that trigger a handoff, what the caller hears, and what happens after hours. Test it with sample calls before launch.',
  },
  {
    q: 'What is the difference between an AI agent and a chatbot in healthcare?',
    a: 'A chatbot answers questions. An agent also takes actions in your systems: it books the appointment, sends the intake form or prepares the authorization packet. Several companies on this page sell both. Ask whether the product writes to your EHR or only talks to the patient.',
  },
  {
    q: 'Does FactoryJet build AI agents for healthcare practices?',
    a: 'Yes. FactoryJet builds custom AI agents for US medical practices, dental clinics and hospital departments, starting at the front desk phone. They book appointments, check eligibility, text intake forms, take refill requests and hand emergencies to staff, with two-way sync to Epic, Cerner, Dentrix and athenahealth. The practice owns what FactoryJet builds.',
  },
];

const link = 'text-[#B23E13] underline';

export const post: BlogPost = {
  id: '842',
  slug: SLUG,
  title: TITLE,
  excerpt:
    'A fact-checked guide to the companies that build AI agents for US healthcare practices, grouped by job: front desk and phone agents, platforms for health systems, ambient scribes and custom builders. EHRs named, BAA terms in each company’s own words and published prices, read on 23 October 2026. FactoryJet is on the list and says so.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 23, 2026',
  dateModified: 'Oct 23, 2026',
  readTime: '21 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A receptionist in teal scrubs and a black headset works at the front desk of a bright medical practice, looking at a monitor with coloured calendar blocks',
  meta: {
    title: 'Healthcare AI Agent Companies 2026: 13 Compared',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    'Healthcare AI agent companies fall into four groups: phone and front desk agents you subscribe to, platforms for health systems, ambient scribes, and firms that build a custom agent for you.',
    'Every fact about every company was read on its own website on 23 October 2026. Compliance lines are each company’s own words. Nobody paid to be listed, and the order is not a ranking.',
    'HHS says any vendor that handles patient information for a practice needs a written Business Associate Agreement, even a cloud provider storing encrypted data it cannot read.',
    'Only one subscription company publishes prices: Keragon, from $149 to $1,499 a month. ScienceSoft puts a bounded custom agent at $50,000 to $150,000 or more.',
    'The AMA reported that 66% of physicians used health AI in 2024, up from 38% in 2023.',
    'Ask every vendor which EHR it writes to, not only reads, and what happens to an urgent call.',
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
              name: TITLE,
              description: META_DESCRIPTION,
              inLanguage: 'en-US',
              datePublished: '2026-10-23',
              dateModified: '2026-10-23',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'Companies that build AI agents for healthcare practices in the United States' },
              speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#answer-first', 'h1', 'h2'] },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Healthcare AI agent companies for US practices compared (2026)',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: FIRMS.length,
              itemListElement: FIRMS.map((f, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: f.name.replace(' (that is us)', ''),
                url: f.url,
              })),
            },
          ]),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Pick the job first. For phone and front desk agents you subscribe to, Assort Health, Arini (dental), Sully.ai or Keragon. For health systems, Notable or Kore.ai. For notes drafted from the visit, Suki or Abridge. To have an agent built around your own EHR, Light-it, ScienceSoft, Technology Rivers, EffectiveSoft or FactoryJet.
        </p>
        <p className="text-gray-800 leading-relaxed mb-3">
          We read all 13 companies on their own websites on 23 October 2026: where each is based, what its agent does, which EHRs it names, what it says about HIPAA and BAAs, and any price it publishes. Nobody paid to be listed. The order is not a ranking. FactoryJet wrote this list and is on it.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Short on time? <a href="/contact" className={link}>Tell us your EHR and the calls you miss</a> and the founder will tell you which kind of company fits.
        </p>
      </div>

      <p className="mb-4">
        On 22 October 2026 we asked ChatGPT, Claude, Gemini, Perplexity and Google&rsquo;s AI answers the same question several times: &ldquo;Which companies build AI agents for healthcare practices?&rdquo; We collected 28 answers. They linked to 129 different pages, and 162 of the 391 links went to list pages. The answers mixed software products, development firms and electronic health record vendors without saying which was which.
      </p>
      <p className="mb-4">
        So we sorted them. We started from the companies those answers named, kept only those with a US base stated on their own site, and read each one&rsquo;s own pages. We dropped nine, for these reasons:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Hyro, Hippocratic AI and Infinitus</strong> state no office address on the pages we read.</li>
        <li><strong>OmniMD and MD Synergy</strong> are EHR vendors whose agents run only inside their own record system.</li>
        <li><strong>Momentum</strong> lists its only office in Poland.</li>
        <li><strong>Arcgent</strong> shows no healthcare work on its site.</li>
        <li><strong>Heidi Health and Microsoft Dragon Copilot</strong> were left out to keep the scribe group to two.</li>
      </ul>
      <p className="mb-4">
        Every profile below links to its sources.
      </p>
      <p className="mb-4">
        <strong>Who wrote this.</strong> FactoryJet builds custom AI agents for practices, so we are on this list. Nobody paid to be included, the order is not a ranking, and our entry uses the same format as every other company. Read every vendor list with its author in mind, including this one.
      </p>
      <p className="mb-6">
        A few terms in plain English. An <strong>AI agent</strong> is software that understands a request and takes an action, such as booking an appointment. An <strong>EHR</strong> (electronic health record) is the system that holds patient charts and schedules, such as Epic or athenahealth. <strong>HIPAA</strong> is the US law that protects patient information. A <strong>BAA</strong> (Business Associate Agreement) is the contract a vendor signs before it may handle that information for you. An <strong>ambient scribe</strong> listens to the visit and drafts the note.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The shortlist at a glance</h2>
      <p className="mb-4">Find the rows that match the job you want done and the EHR you run, then read those profiles in full.</p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Company</th>
              <th className="p-3 text-left border border-gray-700">Group</th>
              <th className="p-3 text-left border border-gray-700">What it is</th>
              <th className="p-3 text-left border border-gray-700">Where based</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((f) => (
              <tr key={f.name} className={f.group === 'Us' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{f.name}</td>
                <td className="p-3 border border-gray-200 align-top">{GROUP_LABEL[f.group]}</td>
                <td className="p-3 border border-gray-200 align-top">{f.type}</td>
                <td className="p-3 border border-gray-200 align-top">{f.based}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start from the buyer&rsquo;s question.</strong> &ldquo;AI agents for healthcare&rdquo; and &ldquo;healthcare AI agents&rdquo; each get about 170 US Google searches a month, and &ldquo;AI voice agents for healthcare&rdquo; about 90 (DataForSEO, October 2026). Smaller variants such as &ldquo;AI healthcare agents&rdquo; and &ldquo;AI agents healthcare&rdquo; add a few dozen more. Google showed an AI answer on five of the six related searches we checked.</li>
        <li><strong>Start from the companies AI answers name.</strong> We took the companies cited in those 28 answers and sorted them by what they sell.</li>
        <li><strong>Keep only companies with a US base on their own site.</strong> A press page, footer address, privacy policy or contact page counts. A logo does not.</li>
        <li><strong>Keep only companies a practice can buy from.</strong> We left out EHR vendors whose agents work only inside their own record system, because using them means changing your EHR.</li>
        <li><strong>Quote compliance in the company&rsquo;s own words.</strong> We do not assess anyone&rsquo;s HIPAA status. Where a company made no claim in the pages we read, we say so.</li>
        <li><strong>No scores we cannot prove.</strong> We have not bought these products, so there are no ratings. We say who each suits and one question worth asking.</li>
        <li><strong>Prices only from the company.</strong> Where a company publishes a price, we quote it and link the page.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">The BAA question comes first</h2>
      <p className="mb-4">
        Before features, check the contract. <a href={HHS_BAA_URL} className={link} rel="noopener" target="_blank">HHS says</a> a practice may share patient health information with a business associate only with satisfactory assurances in a written contract, the Business Associate Agreement. Its <a href={HHS_CLOUD_URL} className={link} rel="noopener" target="_blank">cloud computing guidance</a> adds two points that apply to AI vendors:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>A cloud provider that creates, receives, keeps or sends electronic patient information for a practice is a business associate, and the two must sign a BAA.</li>
        <li>A provider that stores encrypted patient information is still a business associate, even if it has no key and cannot view the data.</li>
      </ul>
      <p className="mb-6">
        In plain words: if the agent hears a patient&rsquo;s name and appointment reason, the company behind it needs a BAA with you. Of the 12 other companies on this page, four say in the text we read that they sign, include or work under BAAs, and Light-it says its architecture is BAA-ready. Three made no HIPAA, BAA or SOC 2 claim in the text we read. Each profile quotes what the company says.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The best AI agent companies for healthcare practices, profiled</h2>
      <p className="mb-6">
        The order is not a ranking. Companies are grouped by the job they do: phone and front desk agents, platforms for larger groups, clinical documentation, custom development, then us.
      </p>

      {GROUPS.map((g) => {
        const inGroup = FIRMS.filter((f) => f.group === g);
        return (
          <section key={g} className="mb-6">
            <h3 className="text-xl font-bold mt-8 mb-2">{GROUP_HEADING[g]}</h3>
            <p className="mb-4 text-gray-700">{GROUP_INTRO[g]}</p>
            {inGroup.map((f) => {
              const n = FIRMS.indexOf(f) + 1;
              return (
                <div key={f.name} className="mb-8">
                  <h4 className="text-lg font-bold mt-6 mb-2">{n}. {f.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Based:</strong> {f.based}. <strong>Type:</strong> {f.type}.
                  </p>
                  <p className="mb-3">{f.what}</p>
                  <table className={styles.profileFacts}><tbody><tr><th scope="row"><strong>Best for:</strong></th><td>{f.bestFor}</td></tr><tr><th scope="row"><strong>Who it serves:</strong></th><td>{f.clients}.</td></tr><tr><th scope="row"><strong>EHRs and systems it names:</strong></th><td>{f.systems}.</td></tr><tr><th scope="row"><strong>What it says on HIPAA and BAAs:</strong></th><td>{f.compliance}</td></tr><tr><th scope="row"><strong>Worth asking them:</strong></th><td>{f.ask}</td></tr></tbody></table>
                  <p className="text-sm text-gray-600 [overflow-wrap:anywhere]">
                    Source:{' '}
                    <a href={f.source} className={link} rel="noopener" target={f.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                      {f.source.replace('https://', '')}
                    </a>
                    {f.hqSource && f.hqSource !== f.source && (
                      <>
                        {' '}| Location:{' '}
                        <a href={f.hqSource} className={link} rel="noopener" target="_blank">
                          {f.hqSource.replace('https://', '').split('/')[0]}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              );
            })}
            {g === 'Front desk and phone' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}/phone.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="A man in a white coat at a dental clinic reception counter holds a black desk phone to his ear while looking at a monitor with coloured calendar blocks, beside an orange cup of pens"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">Most practices start with the phone. Ask every vendor to show a booking landing in your own schedule, not a demo calendar.</figcaption>
              </figure>
            )}
            {g === 'Clinical documentation' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}/visit.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="A physician in a navy cardigan talks with an older man in a beige jacket across a small desk, with a tablet lying face down and an orange mug beside it"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">An ambient scribe works in the exam room, not at the front desk. The clinician still reviews and signs the note.</figcaption>
              </figure>
            )}
          </section>
        );
      })}

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you want an agent built around your EHR</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Our <a href="/services/healthcare-ai-agents" className={link}>healthcare AI agent service</a> starts with a short call about your EHR and the calls you miss. The founder joins the first call, and we can show the agent working on your own schedule before you sign a contract.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What these companies publish about price</h2>
      <p className="mb-4">
        Most healthcare AI companies quote after a demo. On the pages we read on 23 October 2026, three of the 12 other companies published a figure. We copied them exactly. They are each company&rsquo;s own figures, not FactoryJet prices.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Company</th>
              <th className="p-3 text-left border border-gray-700">Published figure (USD)</th>
              <th className="p-3 text-left border border-gray-700">Source (opened 23 Oct 2026)</th>
            </tr>
          </thead>
          <tbody>
            {PRICES.map((p) => (
              <tr key={p.firm} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{p.firm}</td>
                <td className="p-3 border border-gray-200 align-top">{p.figure}</td>
                <td className="p-3 border border-gray-200 align-top">
                  <a href={p.source} className={link} rel="noopener" target="_blank">{p.source.replace('https://', '')}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        <strong>How to read this.</strong> Keragon&rsquo;s figure is a monthly subscription for a platform you configure. ScienceSoft&rsquo;s is a one-time build. Technology Rivers&rsquo; figure covers healthcare apps in general, not agents. The two are different kinds of spend: a subscription keeps costing while you use it, a build is paid once and you own it. For what an AI receptionist costs in more detail, read <a href="/blog/how-much-does-an-ai-medical-receptionist-cost-2026" className={link}>how much an AI medical receptionist costs</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which healthcare AI agent company fits your practice</h2>
      <p className="mb-4">Find the line that sounds most like you.</p>
      <table className={[styles.profileFacts, styles.choiceFacts].join(' ')}><tbody>
        <tr><th scope="row">&ldquo;We are a specialty practice and we miss too many calls.&rdquo;</th><td>Assort Health, or a custom phone agent if your EHR is not on its list.</td></tr>
        <tr><th scope="row">&ldquo;We are a dental practice or dental group.&rdquo;</th><td>Arini. FactoryJet if you want an agent built around Dentrix that you own.</td></tr>
        <tr><th scope="row">&ldquo;We want one vendor for phones, notes and coding.&rdquo;</th><td>Sully.ai.</td></tr>
        <tr><th scope="row">&ldquo;We are small and want to set up our own automations.&rdquo;</th><td>Keragon, which publishes a $149 starting plan.</td></tr>
        <tr><th scope="row">&ldquo;We are a health system or a large group.&rdquo;</th><td>Notable or Kore.ai.</td></tr>
        <tr><th scope="row">&ldquo;Our clinicians spend evenings on notes.&rdquo;</th><td>Suki, or Abridge if you are part of a large health system.</td></tr>
        <tr><th scope="row">&ldquo;We want prior authorization packets prepared for staff.&rdquo;</th><td>ScienceSoft or Technology Rivers for a custom build, or Kore.ai at enterprise scale.</td></tr>
        <tr><th scope="row">&ldquo;Our workflow is unusual and we want to own the agent.&rdquo;</th><td>A development firm: Light-it, ScienceSoft, Technology Rivers, EffectiveSoft or FactoryJet. See our <a href="/services/healthcare-ai-agents" className={link}>healthcare AI agents</a> page.</td></tr>
      </tbody></table>

      <figure className="my-8 not-prose">
        <img
          src={`${IMG}/manager.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="A man in glasses and a light grey sweater reads printed pages at a desk with an open orange folder and a laptop"
          className="w-full h-auto rounded-xl"
        />
        <figcaption className="text-sm text-gray-600 mt-2">Read the BAA and the EHR list before the demo. Those two documents rule out most vendors faster than any feature list.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to choose a healthcare AI agent company: 7 steps</h2>
      <div className="space-y-3 mb-8 not-prose">
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">1. Count the calls you miss and why</summary>
          <p className="mt-3 text-gray-700">Pull a week of phone data. Note how many calls go unanswered, at what hours, and what callers wanted: booking, refills, directions, billing. That list is your agent&rsquo;s job description.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">2. Ask for the BAA first</summary>
          <p className="mt-3 text-gray-700">No BAA, no pilot. HHS guidance is clear that a vendor handling patient information is a business associate.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">3. Check your EHR is on the list, with write-back</summary>
          <p className="mt-3 text-gray-700">An agent that cannot write the appointment into your schedule creates a task for staff instead of removing one.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">4. Test the urgent-call handoff</summary>
          <p className="mt-3 text-gray-700">Call the demo line with chest pain, a child&rsquo;s fever and an angry billing question. Time how fast a person picks up and what the caller hears meanwhile.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">5. Listen to real recordings</summary>
          <p className="mt-3 text-gray-700">Ask for recordings of real patient calls, with consent, on call types like yours. Accents, background noise and older callers matter.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">6. Decide rent or build</summary>
          <p className="mt-3 text-gray-700">Rent when your calls are standard and the vendor already fits your EHR. Build when they are not, or when you want to own the agent and its data.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">7. Start with one job</summary>
          <p className="mt-3 text-gray-700">Launch on after-hours booking or refills first. Add the next job once staff trust the first.</p>
        </details>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How widely physicians use AI</h2>
      <p className="mb-6">
        The American Medical Association <a href={AMA_URL} className={link} rel="noopener" target="_blank">reported in February 2025</a> that 66% of physicians said they used health AI in 2024, up from 38% in 2023, in a survey of nearly 1,200 physicians. That figure covers any health AI use, from scribes to research tools. It means most clinicians in a practice have tried an AI tool, so a front desk agent is less of a leap than it was two years ago.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What else ranks for &quot;healthcare ai agents&quot;, and how this guide differs</h2>
      <p className="mb-4">
        These are the business sites on Google&rsquo;s first page for &ldquo;healthcare ai agents&rdquo; in the US when we checked on 23 October 2026 (DataForSEO), with the title Google showed for each. We list them so you can compare; we have not reviewed their services, and the list leaves out forums.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Site</th>
              <th className="p-3 text-left border border-gray-700">Page title shown in Google</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['themomentum.ai', 'AI Agents for Healthcare: Architecture and Safety Guide'],
              ['sparxitsolutions.com', 'AI Agents in Healthcare: Use Cases, Benefits & Future ...'],
              ['hyro.ai', 'Healthcare AI Agent Platform | HIPAA-Compliant Solution'],
              ['activepieces.com', 'AI Agents for Healthcare: Adoption and Use Cases'],
              ['kanerika.com', 'Top 10 AI Agents for Healthcare in 2026'],
              ['athenahealth.com', 'The Rise of Agentic AI in Healthcare'],
            ].map(([site, title]) => (
              <tr key={site} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{site}</td>
                <td className="p-3 border border-gray-200 align-top">{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Most of these explain AI agents in healthcare in general or sell one platform. This page sorts 13 companies a US practice can actually buy from by the job they do, and quotes each one&rsquo;s own words on EHRs, BAAs and price, each linked to the page we read.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What FactoryJet builds for healthcare practices</h2>
      <p className="mb-4">
        We are FactoryJet. We have served 500+ businesses and we build custom AI agents for operations work. Our founder, Bhavesh Barot, is involved in every project.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Front desk phone agents.</strong> Booking, rescheduling, eligibility checks, intake forms by text, refill requests and emergency handoff, in English and Spanish. See <a href="/services/healthcare-ai-agents" className={link}>healthcare AI agents</a> and <a href="/services/ai-receptionist" className={link}>AI receptionist</a>.</li>
        <li><strong>Notes.</strong> Scribe agents that draft the visit note for clinician sign-off. See <a href="/services/ai-medical-scribe-agents" className={link}>AI medical scribe agents</a>.</li>
        <li><strong>Dental groups.</strong> Agents for multi-location dental groups. See <a href="/services/dental-support-organization-ai-agents" className={link}>AI agents for dental support organizations</a>.</li>
      </ul>
      <p className="mb-6">
        We quote a fixed price in writing after a short scoping call, and we can show the agent working on your own schedule and call types before you sign. You own everything we build. If you are comparing a ready-made receptionist with a custom one, read <a href="/blog/best-ai-receptionist-small-business" className={link}>the best AI receptionists for small businesses</a> and <a href="/blog/ai-voice-agents-vs-human-answering-services-cost-comparison-2026" className={link}>AI voice agents vs human answering services</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you are still deciding</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Tell us your EHR, your phone system and the calls you miss most. On a free call, the founder will tell you whether a ready-made product will do or a custom agent is worth it.
        </p>
        <a href="/services/healthcare-ai-agents" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">See our healthcare AI agents</a>
      </div>
    </>
  ),
};
