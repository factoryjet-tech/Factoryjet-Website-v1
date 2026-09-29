import type { CaseStudy } from './index'

// Washington Law Group: accident detection agent.
//
// Every claim below comes from the delivered project at
// ~/Documents/Washington Law Group (handoffs, deploy/README.md, SLA.md,
// server/src and the commit history through 2026-09-26). Client naming
// approved by Bhavesh. No lead counts, no revenue, no signed-case figures:
// none have been measured, so none are published. The pitch "showcase" demo
// contains illustrative sample data and is NOT described here as results.
export const washingtonLawGroupCaseStudy: CaseStudy = {
  slug: 'washington-law-group-accident-detection-agent',
  client: 'Washington Law Group',
  tagline: 'An AI agent that reads crash news across all 50 states and emails the firm the serious commercial-vehicle accidents.',
  industry: 'Legal',
  services: [
    'AI Agent Development',
    'News Monitoring and Extraction',
    'Email Alerting',
    'Secure Hosting and Backups',
  ],
  headline: 'An AI Agent That Finds Serious Commercial-Vehicle Crashes for Washington Law Group',
  summary:
    'Washington Law Group is a personal injury firm that wants to know quickly when a truck or other commercial vehicle is involved in a fatal or life-threatening crash. FactoryJet built them an AI agent that reads news and police sources across all 50 states every two hours, checks each report, and emails the firm the crashes that qualify. The firm reviews every lead itself.',
  category: 'AI Agents',
  location: 'Washington State, USA',
  heroStats: [
    { value: '50 states', label: 'Checked every day' },
    { value: 'Every 2 hrs', label: 'News sweep, round the clock' },
    { value: '14 days', label: 'Only recent crashes qualify' },
  ],
  glanceTiles: [
    { label: 'INDUSTRY', value: 'Personal Injury Law' },
    { label: 'DELIVERABLE', value: 'Accident Detection Agent' },
    { label: 'COVERAGE', value: 'All 50 US States' },
    { label: 'CADENCE', value: 'Every 2 Hours, 7 Days' },
    { label: 'OUTPUT', value: 'Email Alerts + Console' },
    { label: 'STATUS', value: 'Live in Production' },
  ],
  keyMetrics: [
    { label: 'Coverage', value: 'All 50 states, every day' },
    { label: 'Sweep', value: 'Every two hours' },
    { label: 'Qualifies', value: 'Fatal or life-threatening' },
    { label: 'Status', value: 'Live, firm signs in to its console' },
  ],
  headlineMetric: {
    label: 'What it does',
    value: 'Finds, checks and reports qualifying crashes',
    note: 'Fatal or life-threatening crashes involving a commercial vehicle, 14 days old or newer',
  },
  resultsMetrics: [
    { label: 'Sources', value: 'News, feeds and police' },
    { label: 'Victim names', value: 'Checked against the article' },
    { label: 'Alerts', value: 'One per crash, plus one update' },
    { label: 'Fault', value: 'Shown, never used to filter' },
    { label: 'Access', value: 'Named sign-in only' },
    { label: 'Backups', value: 'Encrypted, daily, off-server' },
  ],
  challenge:
    'In truck accident cases, speed matters. A serious crash involving a semi, a tanker or a box truck is usually covered first by a local TV station, a small newspaper or a state police press release. Nobody at a law firm can read every one of those sources in 50 states every day. The news is also messy. The same crash gets written up five different ways. Articles about a court case or a new law use the same words as a crash report. Many stories name no victim at first, and the name only comes out days later. Washington Law Group wanted to hear about the crashes that matter to them, and only those, without a person reading hundreds of articles a day to find them.',
  challengePullQuote:
    'Nobody at a law firm can read every local crash report in 50 states every day.',
  approach:
    'We wrote down the firm\'s own procedure step by step and built the agent to follow it. It pulls candidate stories from several places: a licensed news API on the firm\'s own paid plan, a nationwide public news index, 34 local publisher feeds, the California Highway Patrol incident feed, and state police newsrooms that publish usable crash releases. For each story, the agent reads the article text and an AI model pulls out the facts: what kind of vehicle, how serious, the crash date, the place, and any victim\'s name, age and hometown. Then plain rules decide. A crash qualifies only if a commercial vehicle was actually in the collision, someone died or was critically hurt (for example life-flight or medevac), and the crash is no more than 14 days old. Rideshare, app delivery and taxi crashes also count, at the firm\'s request, because those cars carry commercial insurance while working. Articles about lawsuits, policy or news roundups are turned away.',
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
    'When a crash qualifies and a victim has been named, the firm gets one email. The subject line follows the firm\'s own format: the town, the state, the victim\'s name and age. The body gives the location, the date, the vehicle type and a link to every source, plus a short summary and any note on fault where the source\'s licence allows it. If the first report has no hometown for the victim, one follow-up email is sent once it is published. That is two emails at most per crash. If no name has been published yet, the crash goes on a watchlist. The agent re-reads its sources once a day and emails the firm the moment a name appears. Before any name is stored, the agent checks that the name actually appears in the article text. If it does not, the name is dropped. The same crash reported by several outlets is merged into one record, so the firm is not emailed twice. Lawyers at the firm sign in to a private console to see every lead, every source and every email sent.',
  results:
    'The agent is live on a dedicated US server. It sweeps every two hours, every day, including weekends and holidays, and emails qualifying crashes to the firm. The lawyers at the firm sign in to its console directly. We are not publishing lead counts or case outcomes here. The firm decides which leads to pursue, and we would rather report measured numbers later than estimated ones now. What we can say is how it was built: the agent reports only what published sources say, it never invents a victim name, and the decisions that belong to a lawyer, like fault and when to make contact, stay with the lawyer.',
  imageUrl: '/images/case-studies/washington-law-group-accident-detection-agent-hero.jpg',
  ogImageUrl: '/images/case-studies/washington-law-group-accident-detection-agent-og.png',
  publishedDate: '2026-09-29',
  ctaTeaser: 'If your team reads the same sources every day looking for the few that matter, an agent can do the reading and hand you the shortlist.',
  relatedSlugs: ['rukman-transport-logistics', 'yadav-entrance-automation-website-seo'],
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
      a: 'The system is built so an invented name does not get through. Every name the model returns is checked against the actual article text before it is saved. If the name is not in the article, it is dropped and never emailed. This check has caught and dropped invented names in real runs.',
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
  ],
}
