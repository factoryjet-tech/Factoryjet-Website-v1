import type { CaseStudy } from './index'

// Washington Law Group: accident detection agent.
//
// Every claim below comes from the delivered project at
// ~/Clients/Washington Law Group/Washington Law Group (SLA.md, server/src,
// measured outlet data and support/commit records through 2026-11-12).
// Reconciled 2026-11-25; code defaults are not a production uptime check. Client naming
// approved by Bhavesh. No lead counts, no revenue, no signed-case figures:
// none have been measured, so none are published. The pitch "showcase" demo
// contains illustrative sample data and is NOT described here as results.
export const washingtonLawGroupCaseStudy: CaseStudy = {
  slug: 'washington-law-group-accident-detection-agent',
  seoTitle: 'Washington Law Group: AI Crash Detection Agent',
  metaDescription:
    'How FactoryJet built Washington Law Group a crash-news monitoring agent with article checks, a missing-name watchlist and source-linked email alerts.',
  snapshot: {
    who: 'Washington Law Group, a US personal injury firm that handles truck and commercial-vehicle accident cases.',
    problem: 'Serious commercial-vehicle crashes are first reported by local news and state police across 50 states, far more sources than anyone at a firm can read every day.',
    built: 'An agent that reads published crash reports, extracts facts, applies the firm’s rules, checks extracted names against article text and emails qualifying cases with source links.',
    status: 'Delivered system with support records through 12 November 2026. The firm reviews the alerts. Production uptime was not rechecked for this case update.',
  },
  serviceLinks: [
    { label: 'AI agent development', href: '/services/ai-agent-development' },
    { label: 'AI agents for law firms', href: '/services/legal-ai-agents' },
  ],
  modifiedDate: '2026-11-25',
  client: 'Washington Law Group',
  tagline: 'A crash-news monitoring agent with article checks, a missing-name watchlist and source-linked alerts for the firm to review.',
  industry: 'Legal',
  services: [
    'AI Agent Development',
    'News Monitoring and Extraction',
    'Email Alerting',
    'Secure Hosting and Backups',
  ],
  headline: 'An AI Agent That Finds Serious Commercial-Vehicle Crashes for Washington Law Group',
  summary:
    'Washington Law Group is a personal injury firm that follows serious commercial-vehicle crash reports. FactoryJet built a monitoring workflow that reads published reports, applies the firm’s rules and emails qualifying cases with source links. Extracted names are checked against article text, and unnamed cases stay on a watchlist. The firm reviews the alerts. Support is documented through 12 November 2026; no hours-saved or signed-case result is claimed.',
  category: 'AI Agents',
  location: 'Washington State, USA',
  heroStats: [
    { value: 'Source links', label: 'Evidence for the firm to review' },
    { value: '2-hour default', label: 'Configurable news-sweep interval' },
    { value: 'Daily recheck', label: 'Configured missing-name watchlist' },
  ],
  glanceTiles: [
    { label: 'INDUSTRY', value: 'Personal Injury Law' },
    { label: 'DELIVERABLE', value: 'Accident Detection Agent' },
    { label: 'COVERAGE', value: 'Published US crash sources' },
    { label: 'CADENCE', value: 'Configurable; 2-hour default' },
    { label: 'OUTPUT', value: 'Email Alerts + Console' },
    { label: 'STATUS', value: 'Delivered; support through 12 Nov 2026' },
  ],
  keyMetrics: [
    { label: 'Coverage', value: 'Configured news and police sources' },
    { label: 'Sweep', value: 'Two-hour code default; configurable' },
    { label: 'Qualifies', value: 'Fatal or life-threatening' },
    { label: 'Status', value: 'Delivered; continued support documented' },
  ],
  headlineMetric: {
    label: 'What it does',
    value: 'Finds, checks and reports qualifying crashes',
    note: 'Fatal or life-threatening crashes involving a commercial vehicle, 14 days old or newer',
  },
  resultsMetrics: [
    { label: 'Sources', value: 'News, feeds and police' },
    { label: 'Victim names', value: 'Checked against the article' },
    { label: 'Alerts', value: 'Source-linked email for firm review' },
    { label: 'Fault', value: 'Shown, never used to filter' },
    { label: 'Access', value: 'Named sign-in only' },
    { label: 'Backups', value: 'Encrypted, daily, off-server' },
  ],
  challenge:
    'In truck accident cases, speed matters. A serious crash involving a semi, a tanker or a box truck is usually covered first by a local TV station, a small newspaper or a state police press release. Nobody at a law firm can read every one of those sources in 50 states every day. The news is also messy. The same crash gets written up five different ways. Articles about a court case or a new law use the same words as a crash report. Many stories name no victim at first, and the name only comes out days later. Washington Law Group wanted to hear about the crashes that matter to them, and only those, without a person reading hundreds of articles a day to find them.',
  challengePullQuote:
    'Nobody at a law firm can read every local crash report in 50 states every day.',
  approach:
    'We wrote down the firm\'s procedure and built the agent to follow it. Candidate stories come from a licensed news API on the firm\'s own plan, a public news index, configured publisher feeds, the California Highway Patrol incident feed and usable state police releases. The publisher list was expanded in November after the firm supplied missed reports. For each article, an AI model extracts the vehicle, severity, date, place and any named victims. Fixed rules then decide whether the report qualifies: a commercial vehicle must be involved, the crash must be fatal or life-threatening, and it must fall within the configured recent-crash window. Articles about lawsuits, policy or news roundups are turned away. A source outside the configured list, or an article that blocks the reader, can still be missed.',
  techStack: [
    'Node.js',
    'SQLite',
    'Runware (LLM access)',
    'NewsAPI.ai (Event Registry)',
    'GDELT',
    'RSS feeds',
    'Resend',
    'Cloudflare Access',
    'Cloudflare Tunnel',
    'Cloudflare R2',
    'Hetzner (US region)',
  ],
  solution:
    'Qualifying alerts include source links and the reported facts for the firm to review. The delivery code requires a usable source and a visible victim name. Without that name, a case stays on a watchlist for a later check. The scheduler has a configurable two-hour news-sweep default, with missing-name rechecks assigned to a daily anchor run. Those are code settings, not a new measurement of production availability or delivery speed. The extractor drops names that do not appear in article text. Text presence alone does not prove that a name belongs to the victim rather than another person in the story. The workflow also merges repeated reports of a crash and gives the firm a private review console.',
  results:
    'The delivered workflow has continued support records through 12 November 2026. Those records include missed reports and fixes to source coverage and filtering. This establishes implemented work and continuing maintenance, not complete crash coverage. We have not measured hours saved, new clients or signed cases, and production uptime was not rechecked for this case update. The firm decides which alerts to pursue and remains responsible for legal judgments such as fault and when contact is permitted.',
  imageUrl: '/images/case-studies/washington-law-group-accident-detection-agent-hero.jpg',
  ogImageUrl: '/images/case-studies/washington-law-group-accident-detection-agent-og.png',
  publishedDate: '2026-09-29',
  ctaTeaser: 'If your team reads the same sources every day looking for the few that matter, an agent can do the reading and hand you the shortlist.',
  relatedSlugs: ['rdb-travels-cab-booking-website', 'yadav-entrance-automation-website-seo'],
  faqs: [
    {
      q: 'Where does the agent find accidents?',
      a: 'Only in published sources. It reads a licensed news API, a public nationwide news index, local publisher news feeds, the California Highway Patrol incident feed and state police newsrooms that publish crash releases. It does not buy crash reports or use driver records. It does not look up anyone\'s address or phone number.',
    },
    {
      q: 'How does it decide a crash is worth reporting?',
      a: 'An AI model reads each article and pulls out the facts. Then fixed rules decide. A commercial vehicle has to be in the collision, the crash has to be fatal or life-threatening, and it has to be 14 days old or newer. Stories about lawsuits, laws or roundups of several events are turned away.',
    },
    {
      q: 'Can the AI make up a victim\'s name?',
      a: 'The extractor checks each returned name against the article text and drops names that do not appear. This reduces invented-name errors, but it does not independently prove identity or that the named person is a victim. A name can belong to someone else in the story. The firm must review the source before acting on an alert.',
    },
    {
      q: 'Does the agent decide who is at fault?',
      a: 'No. If a source says something about fault, the email shows it for the lawyer\'s reference. It never uses fault to include or drop a lead. That judgment stays with the firm.',
    },
    {
      q: 'Does it tell the firm when it can contact a family?',
      a: 'For a small number of states where the waiting-period rule has been checked, the email shows a computed earliest-contact date and the rule behind it. For every other state it says the rule is unknown rather than implying there is none. Every version carries a note that this is not legal advice and must be checked independently.',
    },
    {
      q: 'Who owns the agent and the data?',
      a: 'Under the agreement, the code written for this system is assigned to Washington Law Group, and the crash data it collects belongs to the firm. FactoryJet runs and maintains it on a dedicated server, and the news data subscription it uses is the firm\'s own.',
    },
    {
      q: 'Who can see the leads?',
      a: 'Only people the firm has named. The console sits behind a sign-in that checks each person\'s email with a one-time code before the page loads. The server itself has no public door, and the database is backed up daily, encrypted, to separate storage.',
    },
    {
      q: 'Could a law firm use an agent like this for other kinds of cases?',
      a: 'Yes, wherever the first sign of a case is a published report. The same pattern, read public sources, pull out the facts, apply the firm’s own rules and email a shortlist, can be pointed at other accident types or other public records. The rules change; the checks against invented details stay.',
    },
  ],
}
