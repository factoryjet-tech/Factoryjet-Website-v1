/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import './lakewood-ranch-seo.css';

// ─ Constants ────────────────────────────────────────────────────────────────
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/lakewood-ranch/seo';

// ─ Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Lakewood Ranch SEO Company | Local SEO Services | FactoryJet',
  description:
    'FactoryJet is an SEO company for Lakewood Ranch, FL businesses across Manatee and Sarasota County. Google map pack rankings, Business Profile management, AI search visibility, and technical SEO. Month-to-month, senior engineers, free audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Lakewood Ranch FL SEO Company | FactoryJet',
    description:
      'Local SEO for Lakewood Ranch, FL. Most of the community carries a Bradenton or Sarasota address while everyone searches for "Lakewood Ranch". We fix that gap, then build the rankings around it.',
    url: CANONICAL,
    type: 'website',
  },
};

// ─ FAQ data ──────────────────────────────────────────────────────────────────
const FAQ_GROUPS: { id: string; label: string; items: { q: string; a: string }[] }[] = [
  {
    id: 'worth',
    label: 'Is SEO still worth it',
    items: [
      {
        q: 'Is SEO being phased out?',
        a: 'No. The technical half of SEO is arguably more important now than it was five years ago. Site speed, crawlability, structured data, clean mobile rendering: none of that went anywhere, and AI answer engines lean on the same signals to decide what they are willing to quote. What has been phased out is the trick layer. Keyword stuffing, thin doorway pages, bought links. If someone sold you that in 2018, yes, their version of SEO is finished.',
      },
      {
        q: 'Is SEO dead or evolving in 2026?',
        a: 'Evolving, and the shape of the change is specific rather than vague. Fewer clicks per search because Google answers more of them on the page itself. More weight on being the source that gets quoted rather than the tenth blue link. More weight on genuine local proof: a real address, real reviews, real photos, a real phone that a person answers. For a Lakewood Ranch service business that is good news, because those are things a national content mill cannot fake for your ZIP code.',
      },
      {
        q: 'Why is SEO no longer relevant?',
        a: 'That belief usually comes from one of two places. Either somebody paid for SEO, got a monthly report full of ranking screenshots and no phone calls, and reasonably concluded the whole thing was theatre. Or they watched paid ads and social take over the conversation and assumed organic died quietly in the corner. Neither is true. Search volume for local service categories has not collapsed. What collapsed is patience for agencies that report on rankings instead of revenue.',
      },
      {
        q: 'Is local SEO worth it?',
        a: 'It depends almost entirely on whether people search before they buy in your category. A dentist, a roofer, a physical therapist, an estate attorney, an HVAC company: yes, obviously, because the buying journey starts with a search and a map. A business that runs on referrals from one builder, or on a single wholesale contract, may get more from ten sales calls than from six months of SEO. We will say so on the audit call if that is the honest read.',
      },
      {
        q: 'Is doing a local SEO worth it for a Lakewood Ranch business specifically?',
        a: 'Here it is unusually favourable, and the reason is structural. Lakewood Ranch keeps adding households, and a household that just moved in has zero brand loyalty to any local business. They search. Every time. Meanwhile the queries that matter most to you, the category plus the place, are far less contested than the generic ones. DataForSEO scores city-modified local SEO queries at the very bottom of the difficulty scale while the generic "near me" versions sit between 24 and 41. The winnable ground is the local ground.',
      },
      {
        q: 'Do small businesses need SEO?',
        a: 'If your customers look you up before they call, then being findable is not a marketing luxury, it is the shopfront. The catch is that "SEO" for a small business is not the same product a national brand buys. You mostly need four things done properly: a Google Business Profile that is actually maintained, a website that loads fast and says what you do and where, pages for each service you sell, and a slow steady drip of local citations and reviews. That is a smaller job than most agencies imply.',
      },
      {
        q: 'Is it worth paying an SEO company?',
        a: 'It is worth paying a good one and a waste to pay a bad one, which is a useless answer unless you know how to tell them apart. Two questions separate them fast. First: what will you report on? If the answer is rankings rather than calls and form fills, walk. Second: who will actually touch my account? If the person selling you cannot name the person doing the work, you are buying an account manager, not an SEO.',
      },
      {
        q: 'What is the 80/20 rule in SEO?',
        a: 'The idea that a small slice of the work produces most of the result. In local SEO the slice is fairly predictable: your Google Business Profile, the technical health of your site, and one properly written page per service you sell in the place you sell it. Get those three right and you have done most of the job. Everything after that, the link building, the blog cadence, the schema refinement, moves the needle in smaller increments.',
      },
    ],
  },
  {
    id: 'market',
    label: 'The Lakewood Ranch market',
    items: [
      {
        q: 'Why are people leaving Lakewood Ranch?',
        a: 'Some do, and the reasons that come up are consistent: property insurance in coastal Florida, CDD assessments and HOA obligations on top of the mortgage, traffic on State Road 70 and University Parkway that got worse faster than the roads got wider, and summer heat that surprises people who moved from the north. But the community is still growing on net, which is the part that matters for your marketing. Churn plus inflow means the pool of people searching for a new dentist, a new lawn service, a new accountant never empties.',
      },
      {
        q: 'Is the Lakewood Ranch search market competitive?',
        a: 'Less than you would expect, and the reason is interesting. When we pulled the live SERPs for these queries, the agencies ranking were national and regional shops: Thrive Internet Marketing out of Texas, Straight North, Helium SEO, Lesser Media, TastyPlacement. Not one Lakewood Ranch business. The local category SERPs, the ones your customers actually use, are mostly held by businesses with thin profiles and websites nobody has touched since the build. That is a soft market, and soft markets do not stay soft.',
      },
      {
        q: 'My address says Bradenton. Does that hurt me for Lakewood Ranch searches?',
        a: 'It is the single most common local SEO problem here and almost nobody fixes it. Lakewood Ranch is a census-designated place, not an incorporated city, so most of it carries a Bradenton mailing address in 34202, 34211 or 34212, and the Waterside side carries a Sarasota address in 34240. Google reads the address. Your customers type the community name. If your site copy, your Business Profile description, your service pages and your review replies never use both words, you rank for one and vanish for the other.',
      },
      {
        q: 'Who is actually searching for local services in Lakewood Ranch?',
        a: 'Three groups with completely different behaviour. Recently relocated families who need everything at once and search in a burst over their first few months. Active retirees from the 55-plus communities like Del Webb and Cresswind, who search carefully, read every review, and stay loyal for years once they choose. And a working professional layer tied to the offices around Lakewood Ranch Corporate Park and the Sarasota and Bradenton corridor, who search on a phone between meetings. Same town, three different sets of queries.',
      },
      {
        q: 'How do snowbird season and hurricane season change the SEO plan?',
        a: 'They change it more than anything else, and out-of-state agencies routinely miss both. From roughly November through April a chunk of your audience physically arrives, which lifts demand for medical, dining, wellness and home services and then drops it again. Hurricane season from June through November does the opposite: one storm reorders demand for roofing, tree work, restoration and generators overnight, as Ian in 2022 and the Helene and Milton pair in 2024 both showed. Content written in August is not the content that earns in January.',
      },
      {
        q: 'What is the best SEO company in Florida?',
        a: 'There is no single answer and anyone who names themselves is selling. What we can tell you is what the live SERP data actually shows: the firms most visible on these queries are national operators rather than Florida specialists. If you want a shortlist that means something, judge on three things. Do they report on calls or on rankings. Can they name a business in your category and county they have worked on. And will the person who sells you be the person who works on you. Ask those three and the list gets short quickly.',
      },
      {
        q: 'I serve Lakewood Ranch, Bradenton and Sarasota. Can you cover all three?',
        a: 'Yes, and the county split is the part to get right. Lakewood Ranch straddles the Manatee and Sarasota county line, which means two sets of county directories, two chambers, and two local news ecosystems feeding your citations. We build a distinct page for each service area rather than one page that lists ten towns, keep the internal linking clean so those pages do not eat each other, and point each one at the citation sources that actually belong to that county.',
      },
    ],
  },
  {
    id: 'maps',
    label: 'Google Maps and rankings',
    items: [
      {
        q: 'How does Google Maps ranking work?',
        a: 'Three inputs, weighted differently depending on the query. Relevance, meaning how well your profile and website match what was typed. Distance, meaning how far you are from the searcher or from the place they named. And prominence, meaning how well known and well cited your business is across the rest of the web. Distance is the one people underestimate. In a place like Lakewood Ranch, where the community runs several miles north to south, a business at Main Street and a business at Waterside get different results for the identical search.',
      },
      {
        q: 'How do I get my listing at the top of Google Maps?',
        a: 'Start with the boring completeness work, because most competitors skip it. Claim the profile. Pick the most specific primary category rather than a vague one. Fill every service, every attribute, every hour, including the seasonal ones. Add real photos of the real place, not stock. Keep your name, address and phone identical everywhere it appears online. Then build review velocity steadily instead of in one suspicious burst, and reply to every one. That sequence beats clever tactics almost every time.',
      },
      {
        q: 'Why is my Google ranking so low?',
        a: 'Usually one of five things, and it is worth diagnosing before spending anything. A core algorithm update reshuffled your category. Someone changed the site and broke something. A technical fault is blocking crawling or tanking your mobile speed. Competitors got busier with links and reviews while you stood still. Or Google is simply testing results, which it does constantly and which makes week-to-week rank watching a poor use of your attention. The audit call sorts which one it is.',
      },
      {
        q: 'Can I pay Google to rank higher?',
        a: 'No, not in the organic results or the map pack. You can pay for ads, including the Local Services Ads that appear above the map for some categories, and those are clearly labelled as ads. Paying for Google Ads does not lift your organic position and never has. If an agency implies otherwise, that is the moment to end the meeting.',
      },
      {
        q: 'Can I do local SEO myself?',
        a: 'A good chunk of it, yes, and we would rather you knew that. Claiming and filling your Business Profile, asking customers for reviews, getting your name address and phone consistent on the major directories, writing a proper page for each service: all of that is achievable by a determined owner with a few hours a month. Where it gets hard is technical diagnosis, competitive analysis, schema, and earning links. Most owners run out of time long before they run out of ability.',
      },
      {
        q: 'Do you optimize for AI Overviews and AI search?',
        a: 'Yes, and in this market it matters more than average because relocating households ask an AI assistant before they know a single local brand name. Somebody moving from Ohio types "best orthodontist in Lakewood Ranch Florida" into ChatGPT and takes the three names it gives them. Getting quoted there comes down to answer-first writing, clean FAQ and Service schema, entity clarity about who and where you are, and being cited by sources the model already trusts.',
      },
    ],
  },
  {
    id: 'cost',
    label: 'Cost, scope and timeline',
    items: [
      {
        q: 'How much does the average local SEO cost?',
        a: 'There is no honest average, because it is never the same job twice. What actually moves the scope: how many locations and service areas you need to rank in, whether your site is technically sound or needs rebuilding first, how many service categories you compete in, how established the incumbents in your category already are, and how much content and link work it takes to close that gap. A single-location practice in 34211 is a different job to a roofer covering Manatee, Sarasota and Charlotte counties.',
      },
      {
        q: 'How much should SEO cost for a small business?',
        a: 'The useful way to think about it is not a figure, it is a ratio. Whatever the work costs, it has to be small next to the value of the customers it brings in. So the first thing worth knowing is what one new customer is worth to you over a year, and how many extra ones would make the exercise obviously worth doing. Bring that number to the call and we can tell you quickly whether the scope you need is sensible for your business or not.',
      },
      {
        q: 'How much does an SEO agency typically cost?',
        a: 'Agencies price in three different shapes and the shape matters more than the figure. Hourly, which rewards slow work. Per-deliverable, which rewards producing things whether or not they help. Or a flat monthly scope, which is what we use, because it lines up our incentive with your outcome. We scope it on the call, quote it flat, and do not add hourly charges on top. What we will not do is put a figure on a web page as though your situation were interchangeable with everyone else who read it.',
      },
      {
        q: 'How quickly can I see results from SEO in Lakewood Ranch?',
        a: 'Google Business Profile work tends to show movement in about four to eight weeks because the profile is fast to reindex. Organic page rankings for competitive queries take longer, usually three to five months before the trend is clear. The local advantage here is real though: because the Lakewood Ranch category SERPs are held by thin listings and neglected sites, well-built pages tend to move faster than they would in Tampa or Miami.',
      },
      {
        q: 'Is there a long-term contract?',
        a: 'No. Everything is month to month. You stay because the work is producing something, not because a clause says you have to. Thirty days notice and we hand everything over cleanly.',
      },
      {
        q: 'Are there setup fees or upfront costs?',
        a: 'No setup fee. The technical and competitive audit we run at kickoff is part of the ongoing scope, not a separate line. That scope covers strategy, content, Business Profile management, link work, reporting and a monthly call.',
      },
    ],
  },
  {
    id: 'work',
    label: 'Hiring and working with us',
    items: [
      {
        q: 'What is a SEO salary?',
        a: 'It swings enormously by seniority, city and whether the role is in-house or agency side, and we are not going to invent a number. The real question underneath is usually whether to hire someone or use an agency. One hire gives you dedicated hours but a single skill set, and local SEO needs technical, content, local listings and link work happening at once. Below a certain volume, an agency covers all four more efficiently. Above it, an in-house lead plus specialist help usually wins.',
      },
      {
        q: 'Is SEO a hard job?',
        a: 'The individual tasks are not hard. Judging which task to do next, with incomplete data, while the platform quietly changes underneath you, is hard. That is the part that takes years. Anyone can follow a checklist. Knowing that your problem is a category selection mistake on your Business Profile rather than a content gap is what you are actually paying for.',
      },
      {
        q: 'Who actually does the SEO work at FactoryJet?',
        a: 'Senior engineers and content people, and Bhavesh Barot, who founded the company, is involved in strategy directly. There is no junior account layer between you and the work, and nothing gets handed to an offshore content vendor. That is a genuine tradeoff, not just a selling point: it means we take on fewer accounts than a large agency would.',
      },
      {
        q: 'What happens to my accounts and data if I leave?',
        a: 'They are yours and they stay yours. Search Console, Business Profile, Analytics, every page we wrote. We add ourselves as contributors rather than owners so that removing our access at the end takes one click and breaks nothing. No lock-in, no hostage situation over a login.',
      },
      {
        q: 'How do you report results?',
        a: 'Calls and form fills from organic first, rankings second. Every month you get tracked phone calls attributed to organic, Business Profile call volume, form submissions, ranking movement on your primary queries, Core Web Vitals status and what your competitors did. Then a live call to talk about what it means and what the next thirty days look like. Ranking screenshots on their own are a way of avoiding the real question.',
      },
      {
        q: 'What does the free audit call cover?',
        a: 'Thirty minutes, and you get something out of it whether or not we work together. We look at your Business Profile health, the technical state of your site, where you currently sit for your Lakewood Ranch queries, and what your three nearest local competitors are doing that you are not. You leave with a prioritised list. If the honest answer is that you should fix two things yourself and not hire anyone, we will say that.',
      },
      {
        q: 'How fast can you start?',
        a: 'Technical work begins within seven days of signing. Business Profile and content work starts in week two once access is verified and the competitor mapping is done. By week four the monthly rhythm is running properly.',
      },
      {
        q: 'What if my business just opened in Lakewood Ranch?',
        a: 'That is a good position to be in here, better than most markets. A new business has no legacy mess to unpick and it can start capturing the new-resident search wave immediately instead of trying to displace an incumbent. We get the Business Profile live and properly categorised, the site technically clean, and the first service pages published while the neighbourhood around you is still filling in.',
      },
    ],
  },
];

// ─ Listicle ──────────────────────────────────────────────────────────────────
const LISTICLE: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'New households are searching for your category and finding somebody else',
    p: 'Lakewood Ranch adds thousands of households a year and every one of them needs a dentist, a vet, a lawn service and a plumber within their first few months. They have no loyalty to anyone yet. Whoever holds the map pack when they search gets a customer who may stay for a decade.',
  },
  {
    n: '02',
    h: 'Your Google listing says Bradenton or Sarasota and your website never says Lakewood Ranch',
    p: 'Most of the community carries a Bradenton address in 34202, 34211 or 34212, and the Waterside side carries a Sarasota address in 34240. Google reads the address on your profile. Customers type the community name. If your site copy and profile description never use both, you show for one and disappear for the other.',
  },
  {
    n: '03',
    h: 'Your Business Profile has no posts this quarter and photos from the build-out',
    p: 'Profile activity is a live ranking input. A listing that has not been touched in months reads as dormant. In a community where a large share of searchers are new arrivals with no prior preference, the most active and credible-looking profile wins the click by default.',
  },
  {
    n: '04',
    h: 'You are visible on one side of University Parkway and invisible on the other',
    p: 'Distance is a real weighting factor in map results, and Lakewood Ranch runs for miles. A business near Main Street and a business near Waterside Place get materially different results for the identical query. If you only ever optimised for the half you sit in, you are giving away the other half.',
  },
  {
    n: '05',
    h: 'You rank for your own business name and nothing else',
    p: 'Branded search only finds people who already heard of you somewhere. The searches that introduce you to strangers are the category ones: dentist, roofer, orthodontist, estate attorney, plus the place. That is the entire growth mechanism and it is the one most local sites are not built for.',
  },
  {
    n: '06',
    h: 'Hurricane season arrives and you have nothing ready to publish',
    p: 'Between June and November a single storm can reorder demand for roofing, tree work, restoration, generators and shutters overnight. Ian in 2022 and the Helene and Milton pair in 2024 both did it to this coast. The businesses that captured that demand had the pages and the profile posts written before the storm, not after.',
  },
  {
    n: '07',
    h: 'Your seasonal demand swings and your content does not',
    p: 'Snowbird season from roughly November through April moves a chunk of your audience in and out of the county. Medical, wellness, dining and home services all feel it. An agency running the same twelve-month content calendar it uses for a client in Ohio will miss both ends of that curve.',
  },
  {
    n: '08',
    h: 'The newer villages are filling in and you have no presence there',
    p: 'Waterside, Azario, Lorraine Lakes, Star Farms and the newer Cresswind and Esplanade phases keep adding residents. Businesses that establish local search presence before a neighbourhood finishes filling get first pick of the households in it. That advantage does not come back around.',
  },
  {
    n: '09',
    h: 'AI assistants are recommending your competitors to people moving here',
    p: 'Someone relocating from out of state asks ChatGPT or Google AI for the best provider in Lakewood Ranch before they know a single local name. If your site has no answer-first content, no FAQ or Service schema and no clear entity signals about where you actually are, you are simply not in that answer.',
  },
];

// ─ Competitor set (real SERP data, DataForSEO US, July 2026) ─────────────────
const RIVALS: { name: string; domain: string; stat: string; good: string; diff: string }[] = [
  {
    name: 'Thrive Internet Marketing Agency',
    domain: 'thriveagency.com',
    stat: '11 appearances on these SERPs, average position 3.8',
    good: 'The most visible name across the whole keyword set we pulled. Large national shop, wide service menu, a serious content operation behind it. Their reach is genuinely broad: they hold first position for terms like "agentur marketing" at 720 searches a month and "agences marketing digital" at 590 a month, which tells you they are competing well outside the US as well.',
    diff: 'They are a big agency and you will work with an account team. We are small and you talk to the person doing the work. If you want a household name with a large staff behind it, they are a legitimate choice and we would say so.',
  },
  {
    name: 'Charlotte SEO Firm',
    domain: 'charlotteseofirm.com',
    stat: '5 appearances, average position 9.0',
    good: 'They own their own city outright. First position for "charlotte seo companies" and "charlotte seo company", both at 880 searches a month, plus first for "charlotte nc seo" at 320 a month. That is the single-city strategy executed properly, and it is exactly the pattern we are arguing for on this page.',
    diff: 'They are proof the approach works. They are also in North Carolina. Nobody at that firm has any idea that half of Lakewood Ranch has a Bradenton address or what a CDD is, and for a local campaign those details are the campaign.',
  },
  {
    name: 'Lesser Media',
    domain: 'lessermedia.com',
    stat: '4 appearances, average position 11.8',
    good: 'A city-modifier operation done at scale. Their page-one wins are all place-based: "seo springfield" at fourth with 110 searches a month, "seo stamford" at fourth with 110 a month, "ppc san antonio" at third with 90 a month. Low volume, low difficulty, many cities, steady compounding.',
    diff: 'It is a useful reminder that a lot of the agencies appearing next to the word "Lakewood Ranch" have no connection to Lakewood Ranch. Breadth across many cities is a different product to depth in one.',
  },
  {
    name: 'Straight North, Helium SEO, TastyPlacement and others',
    domain: 'various',
    stat: 'TastyPlacement holds the best average position of the group at 2.0 across 2 appearances',
    good: 'Straight North, Helium SEO, Tiger 29, Elit-Web and Synchronicity Designs all surface on this keyword set. Several are strong regional operators with real technical depth, and TastyPlacement in particular ranks unusually high for how selectively it appears.',
    diff: 'None of them are Lakewood Ranch businesses. That is the whole point of the section: the SERP for your town is being served by people who have never driven down Lakewood Ranch Boulevard, which is the gap a local campaign is designed to walk through.',
  },
];

// ─ Comparison ────────────────────────────────────────────────────────────────
const COMPARE: { k: string; fj: string; alt: string; hl?: boolean }[] = [
  { k: 'Pricing model', fj: 'Flat monthly scope, agreed upfront', alt: 'Hourly or retainer with add-ons', hl: true },
  { k: 'Contract', fj: 'Month to month', alt: '6 to 12 month lock-in' },
  { k: 'Who does the work', fj: 'Senior engineers, founder involved', alt: 'Junior account managers' },
  { k: 'Kickoff time', fj: '7 days', alt: '3 to 6 weeks onboarding' },
  { k: 'Reporting', fj: 'Calls and leads tracked', alt: 'Ranking screenshots' },
  { k: 'AI search visibility', fj: 'Included as standard', alt: 'Rarely offered' },
  { k: 'Local knowledge', fj: 'County split, ZIPs, seasonality', alt: 'City name swapped into a template' },
  { k: 'Your data and accounts', fj: 'You own everything', alt: 'Often locked to the agency' },
];

// ─ Internal links ────────────────────────────────────────────────────────────
const SERVICE_LINKS: { href: string; h: string; p: string }[] = [
  { href: '/services/local-seo', h: 'Local SEO', p: 'Map pack rankings, Business Profile management and citation work. The core service behind this page.' },
  { href: '/services/seo', h: 'SEO services', p: 'The full organic programme: technical, content, links and reporting for businesses selling nationally as well as locally.' },
  { href: '/services/small-business-seo', h: 'Small business SEO', p: 'A tighter scope for owner-run businesses that need the fundamentals done properly rather than a large programme.' },
  { href: '/services/seo-audit', h: 'SEO audit', p: 'A one-off diagnosis if you want to know what is wrong before deciding whether to hire anyone at all.' },
  { href: '/services/ai-seo', h: 'AI SEO', p: 'Getting quoted in AI Overviews, ChatGPT and Perplexity answers, which matters here because relocating buyers start there.' },
];

const CITY_LINKS: { href: string; h: string; p: string }[] = [
  { href: '/tampa/seo', h: 'Tampa SEO', p: 'The nearest big-metro comparison. Far more contested than Lakewood Ranch, which is useful context for what a mature Florida SERP looks like.' },
  { href: '/charlotte/seo', h: 'Charlotte SEO', p: 'The market where Charlotte SEO Firm holds first position for its own city terms. Worth reading if you want to see the single-city strategy from the other side.' },
  { href: '/austin/seo', h: 'Austin SEO', p: 'Where we currently sit at position 8 for "seo agency austin texas". Our own working example, rankings and all.' },
  { href: '/nashville/seo', h: 'Nashville SEO', p: 'Position 10 for "local seo nashville" at the time of writing. Another honest look at where we stand.' },
];

// ─ JSON-LD ───────────────────────────────────────────────────────────────────
const faqItems = FAQ_GROUPS.flatMap((g) =>
  g.items.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  }))
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://factoryjet.com/lakewood-ranch/seo#webpage',
      url: 'https://factoryjet.com/lakewood-ranch/seo',
      // Freshness signal. Keep honest: bump when content actually changes.
      dateModified: '2026-08-04',
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/images/factoryjet-logo.png',
      contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'connect@factoryjet.com' },
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Lakewood Ranch FL Local SEO Services',
      serviceType: 'Local SEO',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        {
          '@type': 'Place',
          name: 'Lakewood Ranch, Florida',
          containedInPlace: { '@type': 'State', name: 'Florida' },
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'FL',
            addressCountry: 'US',
            postalCode: '34202',
          },
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Manatee County',
          containedInPlace: { '@type': 'State', name: 'Florida' },
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Sarasota County',
          containedInPlace: { '@type': 'State', name: 'Florida' },
        },
        { '@type': 'Place', name: 'Bradenton, Florida' },
        { '@type': 'Place', name: 'Sarasota, Florida' },
        { '@type': 'Place', name: 'Parrish, Florida' },
        { '@type': 'Place', name: 'Ellenton, Florida' },
      ],
      audience: {
        '@type': 'BusinessAudience',
        name: 'Local service businesses in Manatee and Sarasota County, Florida',
      },
      description:
        'Local SEO for Lakewood Ranch FL businesses: Google Business Profile management, local map pack ranking, AI search citation and technical SEO across Manatee and Sarasota County.',
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#competitors`,
      name: 'Agencies ranking on Lakewood Ranch and near-me SEO queries',
      description:
        'Named agencies appearing on the live US SERPs for Lakewood Ranch and near-me SEO service queries, with their measured SERP visibility.',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: 4,
      itemListElement: RIVALS.map((r, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: r.name,
        description: r.stat,
      })),
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#page`,
      url: CANONICAL,
      name: 'Lakewood Ranch FL SEO Company | FactoryJet',
      inLanguage: 'en-US',
      description:
        'What SEO in Lakewood Ranch, Florida actually involves, who else ranks for these queries, and how the Manatee and Sarasota county split changes the work.',
      isPartOf: { '@id': 'https://factoryjet.com/#site' },
      about: { '@id': `${CANONICAL}#service` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.bluf', 'h1'],
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
          { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://factoryjet.com/services/seo' },
          { '@type': 'ListItem', position: 3, name: 'Local SEO', item: 'https://factoryjet.com/services/local-seo' },
          { '@type': 'ListItem', position: 4, name: 'Lakewood Ranch SEO', item: CANONICAL },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqItems,
    },
  ],
};

// ─ Component ─────────────────────────────────────────────────────────────────
export default function LakewoodRanchSEO() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="lrseo">
        <SiteHeader />
        <main>

          {/* ── HERO ─────────────────────────────────────────────────────── */}
          <section className="hero">
            <div className="wrap hero-grid">
              {/* Left: copy */}
              <div>
                <div className="loc rise"><b />&nbsp;Lakewood Ranch, FL</div>
                <h1 className="rise d1">
                  Lakewood Ranch <span className="it">SEO company</span><br />
                  for businesses in Manatee<br />and Sarasota County.
                </h1>
                <p className="lead rise d2">
                  We get Lakewood Ranch businesses into the Google map pack, onto page one for
                  category searches, and quoted in AI answers. Most of the community has a Bradenton
                  or Sarasota address while everyone searches for "Lakewood Ranch". That gap is
                  usually the first thing worth fixing.
                </p>
                <div className="hstat rise d3">
                  <div className="n">
                    <span className="star">★</span>&nbsp;5.0
                    <span className="l">/ 500+ clients</span>
                  </div>
                  <div className="sep" />
                  <div className="n">2<span className="l">&nbsp;counties covered</span></div>
                  <div className="sep" />
                  <div className="n">7 days<span className="l">&nbsp;to start</span></div>
                </div>
                <HeroInlineForm region="us" source="lakewood_ranch_seo_hero" submitLabel="Get my free SEO audit" />
                <div className="cta-row rise d4">
                  <a className="btn btn-ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Talk to the founder
                  </a>
                </div>
              </div>

              {/* Right: blueprint/survey grid visual */}
              <div className="hero-vis float">
                {/* Floating chips */}
                <div className="schip ch1">
                  <div className="k">Core ZIP</div>
                  <div className="v">34202</div>
                </div>
                <div className="schip ch2">
                  <div className="cdot" />
                  <div className="ct2">Two counties, one name</div>
                </div>

                <div className="surveycard">
                  {/* Header */}
                  <div className="sv-head">
                    <div className="sv-title">LWR Search Territory Survey</div>
                    <div className="sv-coord">27.41&#176;N 82.39&#176;W</div>
                  </div>

                  {/* Map area with parcels */}
                  <div className="sv-map">
                    {/* Territory parcels */}
                    <div className="parcel p1">Country Club &amp; Greenbrook</div>
                    <div className="parcel p2">Main Street</div>
                    <div className="parcel p3 p-you">YOU</div>
                    <div className="parcel p4">Waterside Place</div>
                    <div className="parcel p5">Azario &middot; Star Farms &middot; Lorraine Lakes</div>

                    {/* Plot markers */}
                    <div className="plotmark p1" />
                    <div className="sv-label l1">HOT</div>

                    <div className="plotmark p2" />
                    <div className="sv-label l2">HOT</div>

                    <div className="plotmark p3" />
                    <div className="sv-label l3">OPEN</div>
                  </div>

                  {/* Footer */}
                  <div className="sv-footer">
                    <div className="stat">
                      <div className="sv-v">65K+</div>
                      <div className="sv-l">residents</div>
                    </div>
                    <div className="sdiv" />
                    <div className="stat">
                      <div className="sv-v">#1</div>
                      <div className="sv-l">US planned community</div>
                    </div>
                    <div className="sdiv" />
                    <div className="stat">
                      <div className="sv-v">34202</div>
                      <div className="sv-l">core ZIP</div>
                    </div>
                    <div className="sdiv" />
                    <div className="stat">
                      <div className="sv-v">2</div>
                      <div className="sv-l">counties</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── ANSWER FIRST ─────────────────────────────────────────────── */}
          <section style={{ paddingTop: 0, paddingBottom: '60px' }}>
            <div className="wrap">
              <div className="bluf rise">
                <p>
                  <strong>Short answer:</strong> FactoryJet does SEO for Lakewood Ranch businesses,
                  and so do a handful of national agencies you will meet further down this page.
                  Local SEO here means three jobs. Getting your Google Business Profile into the
                  three-result map pack when somebody in 34202, 34211 or 34240 searches your category.
                  Getting your website pages to rank underneath that map pack. And getting your
                  business named when a new arrival asks ChatGPT or Google's AI answer for a
                  recommendation. The Lakewood Ranch complication is that the community is not an
                  incorporated city, so most addresses here read Bradenton or Sarasota while every
                  resident says "Lakewood Ranch". Closing that gap is normally the first move and it
                  costs nothing but attention.
                </p>
              </div>
            </div>
          </section>

          {/* ── MARKET DATA (only dark section) ──────────────────────────── */}
          <section className="dark">
            <div className="wrap">
              <div className="eyebrow">Measured, not guessed</div>
              <h2>What the numbers actually say about this market.</h2>
              <p className="lead">
                Live keyword data pulled from DataForSEO in July 2026, plus our own Search Console
                figures. Including the ones that are not flattering.
              </p>
              <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="/images/us/lakewood-ranch/seo/lakewood-ranch-seo-hero.webp"
                  alt="Lakewood Ranch, Florida: a master-planned community spanning Manatee and Sarasota counties where new residents search for every local service"
                  width={1200}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="statgrid">
                <div className="scard">
                  <div className="n">14,800</div>
                  <div className="l">US searches a month for "seo company near me", the query every agency on this SERP is chasing. Keyword difficulty 24.</div>
                  <div className="src">DataForSEO, US, July 2026</div>
                </div>
                <div className="scard">
                  <div className="n">0</div>
                  <div className="l">Keyword difficulty on city-modified local SEO queries such as "local seo austin" and "charlotte local seo". The place-based version of the search is the winnable one.</div>
                  <div className="src">DataForSEO, US, July 2026</div>
                </div>
                <div className="scard">
                  <div className="n">7.7</div>
                  <div className="l">Our own average Google position for "lakewood ranch seo company" across 262 impressions in the last 90 days. Top of page two on most screens. We are the challenger here.</div>
                  <div className="src">Google Search Console, FactoryJet, July 2026</div>
                </div>
                <div className="scard">
                  <div className="n">44</div>
                  <div className="l">Referring domains pointing at factoryjet.com. Coalition Technologies, one of the larger names in this category, has roughly 2,800. We are not going to pretend otherwise.</div>
                  <div className="src">DataForSEO backlink index, July 2026</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── LOCAL SUBSTANCE ──────────────────────────────────────────── */}
          <section>
            <div className="wrap">
              <div className="eyebrow">Lakewood Ranch, specifically</div>
              <h2>Five things about this town that change how the SEO work is done.</h2>
              <p className="lead">
                These are the details an agency running a template misses, and they are the details
                that decide whether a local campaign works here.
              </p>
              <div className="grid2">
                <div className="ucard">
                  <div className="pill">The address problem</div>
                  <h3>The town everybody names is not the town on your listing</h3>
                  <p>
                    Lakewood Ranch is a census-designated place built on former Schroeder-Manatee Ranch
                    land, straddling the county line east of I-75. It is not an incorporated city, so
                    it has no postal identity of its own. The villages north of University Parkway,
                    Country Club, Greenbrook, Summerfield, Riverwalk, Central Park, Del Webb, Mallory
                    Park, Polo Run, carry Bradenton addresses in 34202, 34211 and 34212. Waterside, to
                    the south in Sarasota County, carries a Sarasota address in 34240. Google reads the
                    address on your profile. Your customers type the community name. If those two
                    things never meet on your website, you are half-visible by design.
                  </p>
                </div>
                <div className="ucard">
                  <div className="pill">Two centres, two catchments</div>
                  <h3>Main Street and Waterside are not the same market</h3>
                  <p>
                    There are two town centres here and they behave differently. Main Street at
                    Lakewood Ranch sits on the Manatee side and serves the older, established villages.
                    Waterside Place opened later on the Sarasota side and pulls the newer households
                    plus the Sunday farmers market crowd. University Town Center and Nathan Benderson
                    Park sit down at the University Parkway interchange and draw from both. Because
                    distance is a genuine weighting factor in map results, a business at one end and a
                    business at the other get different rankings for the identical search. Any strategy
                    that treats Lakewood Ranch as a single point on a map is leaving half the community
                    on the table.
                  </p>
                </div>
                <div className="ucard">
                  <div className="pill">What pays the bills here</div>
                  <h3>Healthcare, construction fallout, and money management</h3>
                  <p>
                    The local economy is not general. Healthcare is the heavyweight: Lakewood Ranch
                    Medical Center, Sarasota Memorial's Lakewood Ranch campus, and a dense layer of
                    dental, orthopedic, dermatology, physical therapy and aesthetics practices serving
                    an older-skewing population. Then everything downstream of continuous home
                    building: roofing, pool, pest, lawn, remodel, shutters. Then wealth management,
                    estate law and CPA work for retirees. Add youth and amateur sport bringing weekend
                    visitors, plus a modest office corridor around Lakewood Ranch Corporate Park. Those
                    categories have completely different search patterns and none of them respond to
                    the same content plan.
                  </p>
                </div>
                <div className="ucard">
                  <div className="pill">Two seasons that matter</div>
                  <h3>Snowbirds arrive, then storms rearrange everything</h3>
                  <p>
                    Roughly November through April, a meaningful share of the audience physically
                    arrives, lifting demand for medical, wellness, dining and home services, then
                    leaves again. June through November is hurricane season, and a single storm
                    reorders demand for roofing, tree work, restoration and generators inside 48 hours.
                    Ian in 2022 and the Helene and Milton pair in 2024 both did exactly that to this
                    stretch of coast. An agency running the same twelve-month calendar it uses for a
                    client in Ohio will be publishing the wrong thing twice a year, every year.
                  </p>
                </div>
                <div className="ucard">
                  <div className="pill">How hard the SERP really is</div>
                  <h3>Soft market, national squatters, closing window</h3>
                  <p>
                    Honest read from the live data: the agencies ranking on these queries are national
                    and regional operators, not Lakewood Ranch businesses. Meanwhile the difficulty
                    numbers split cleanly. The generic "near me" searches sit between 24 and 41 on the
                    difficulty scale and are fought over nationally. The city-modified versions score at
                    the very bottom. Practically, that means the category-plus-place searches your
                    customers actually use are winnable now, by a business with a decent site and a
                    properly maintained profile. That will not be true forever.
                  </p>
                </div>
                <div className="ucard">
                  <div className="pill">So is it worth it here</div>
                  <h3>Yes for most categories, and here is when it is not</h3>
                  <p>
                    If your customers search before they buy, and in healthcare, home services, legal,
                    financial and personal services they overwhelmingly do, then local SEO in Lakewood
                    Ranch has an unusually good ratio right now: high-intent audience, constant new
                    arrivals with no brand loyalty, and weak incumbents. Where it is not worth it: if
                    your work comes from one builder relationship, or a wholesale contract, or a
                    referral network you already trust. We will tell you that on the call rather than
                    after six months.
                  </p>
                </div>
              </div>
              <p className="districts">
                Villages, districts and nearby towns we cover:
                <b> Country Club</b>, <b>Greenbrook</b>, <b>Summerfield</b>, <b>Riverwalk</b>,
                <b> Central Park</b>, <b>Del Webb</b>, <b>Cresswind</b>, <b>Esplanade</b>,
                <b> Mallory Park</b>, <b>Polo Run</b>, <b>Indigo</b>, <b>Star Farms</b>,
                <b> Azario</b>, <b>Lorraine Lakes</b>, <b>Waterside</b>, <b>Lakehouse Cove</b>,
                <b> Shoreview</b>, <b>University Park</b>, <b>Bradenton</b>, <b>Sarasota</b>,
                <b> Ellenton</b>, <b>Parrish</b> and <b>Palmetto</b>.
              </p>
            </div>
          </section>

          {/* ── COMPETITORS ──────────────────────────────────────────────── */}
          <section className="room-lav">
            <div className="wrap">
              <div className="eyebrow">Who else ranks for this</div>
              <h2>The agencies you will actually be comparing us against.</h2>
              <p className="lead">
                We pulled the live US SERPs for these queries in July 2026. Here is who showed up,
                what they are genuinely good at, and where we are different. None of this is
                guesswork and none of it is a hit piece.
              </p>
              <div className="grid2">
                {RIVALS.map((r) => (
                  <div className="ucard" key={r.name}>
                    <div className="pill">{r.domain}</div>
                    <h3>{r.name}</h3>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '12.5px', color: '#B23E13', margin: '0 0 10px' }}>
                      {r.stat}
                    </p>
                    <p style={{ marginBottom: '10px' }}><strong>What they do well.</strong> {r.good}</p>
                    <p><strong>Where we differ.</strong> {r.diff}</p>
                  </div>
                ))}
              </div>
              <div className="bluf" style={{ marginTop: '28px', maxWidth: '100%' }}>
                <p>
                  <strong>And our own position, unvarnished.</strong> FactoryJet has 44 referring
                  domains. Coalition Technologies has roughly 2,800. We sit at position 10 for "local
                  seo nashville" and position 8 for "seo agency austin texas". This very page averages
                  position 7.7 for "lakewood ranch seo company" across 262 impressions in the last 90
                  days, which is the top of page two. We are the challenger in this category and we
                  would rather say it here than have you find out later. What we can offer is senior
                  people working directly on your account, a fast start, and local detail nobody
                  running a template will match. If your category genuinely needs a link profile in
                  the thousands to compete, we will tell you that on the audit call.
                </p>
              </div>
            </div>
          </section>

          {/* ── WHO WE HELP ──────────────────────────────────────────────── */}
          <section>
            <div className="wrap">
              <div className="eyebrow">Who we work with</div>
              <h2>Built for the categories this community actually searches for.</h2>
              <p className="lead">
                Every one of these maps to something real about the local population: an older median
                age, continuous home building, and a steady flow of arrivals with no existing provider.
              </p>
              <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="/images/us/lakewood-ranch/seo/lakewood-ranch-buyer-intent-dashboard.webp"
                  alt="Local search demand data for Lakewood Ranch, Florida service categories shown on an analytics dashboard"
                  width={1200}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="grid3">
                {[
                  {
                    pill: 'Healthcare and dental',
                    h: 'Medical, dental, orthopedic and physical therapy practices',
                    p: 'The densest category here, and the one where reviews carry the most weight. New arrivals look for a primary care doctor and a dentist almost immediately, and retirees research specialists carefully and then stay for years. We build the profile and the service pages that get you into that shortlist.',
                  },
                  {
                    pill: 'Home services',
                    h: 'Roofing, HVAC, pool, pest, lawn and remodel',
                    p: 'Continuous home building means continuous downstream demand, and hurricane season means sudden spikes. We build for both: evergreen service pages that hold rankings through the quiet months, and storm-response content and profile posts prepared before they are needed.',
                  },
                  {
                    pill: 'Financial and legal',
                    h: 'Wealth management, estate law, CPAs and elder law',
                    p: 'A retiree-heavy population generates unusually strong demand for estate planning, tax and wealth work. These are high-consideration searches where a thin website loses the enquiry before anyone calls. Content depth and trust signals do most of the work in this category.',
                  },
                  {
                    pill: 'Wellness and fitness',
                    h: 'Gyms, physical therapy, med spas and studios',
                    p: 'Active lifestyle is a core part of how this community sees itself, and new residents look for a gym or a studio within weeks of arriving. Getting into the map pack before they commit somewhere else is the whole game in this category.',
                  },
                  {
                    pill: 'Restaurants and retail',
                    h: 'Restaurants, cafes and local retail at Main Street and Waterside',
                    p: 'Two town centres means two different discovery patterns, plus a seasonal swing when the winter population arrives. Profile photos, posts tied to real local events, and content that answers the "best somewhere near me" question all pull weight here.',
                  },
                  {
                    pill: 'Family services',
                    h: 'Tutors, childcare, pet services and personal services',
                    p: 'Families moving in look for every recurring service at once, usually in the same fortnight. Being in the map pack for your category during that window creates a relationship that renews on its own for years afterwards.',
                  },
                ].map(({ pill, h, p }) => (
                  <div className="ucard" key={h}>
                    <div className="pill">{pill}</div>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── LISTICLE ─────────────────────────────────────────────────── */}
          <section className="room-peach">
            <div className="wrap">
              <div className="eyebrow">Warning signs</div>
              <h2>9 signs your Lakewood Ranch business is losing search to somebody worse than you.</h2>
              <p className="lead">
                Each one is fixable, and most of them are fixable within the first month.
              </p>
              <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="/images/us/lakewood-ranch/seo/lakewood-ranch-new-resident-seo.webp"
                  alt="A new Lakewood Ranch resident searching on a phone for a local service provider shortly after moving in"
                  width={1200}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <ul className="listicle-list">
                {LISTICLE.map(({ n, h, p }) => (
                  <li key={n}>
                    <div className="li-n">{n}</div>
                    <div>
                      <div className="li-h">{h}</div>
                      <div className="li-p">{p}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── WHAT IS INCLUDED ─────────────────────────────────────────── */}
          <section>
            <div className="wrap">
              <div className="eyebrow">What you get</div>
              <h2>One scope, the whole stack, every month.</h2>
              <p className="lead">
                No package tiers and no feature gates. The work below is what a local campaign needs,
                so it is all in.
              </p>
              <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="/images/us/shared/factoryjet-senior-engineer.webp"
                  alt="A FactoryJet senior engineer reviewing technical SEO audit data on screen"
                  width={1200}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="grid2">
                {[
                  {
                    h: 'Technical foundation',
                    p: 'Core Web Vitals, crawl and index management, LocalBusiness, Service and FAQPage schema, mobile rendering, and the structured data that AI answer engines rely on. Boring, unglamorous, and the reason everything else works.',
                  },
                  {
                    h: 'Google Business Profile, properly maintained',
                    p: 'Correct primary category, every service and attribute filled, real photos, weekly posts tied to actual local events rather than generic filler, Q&A managed, and a steady review strategy. Both counties handled separately where you have two locations.',
                  },
                  {
                    h: 'Pages that name the place and the service',
                    p: 'One well-built page per service per area, written to cover Lakewood Ranch and the Bradenton or Sarasota address that sits underneath it, structured for featured snippets and AI citation, and internally linked so your pages do not compete with each other.',
                  },
                  {
                    h: 'Local citations and links, county by county',
                    p: 'Manatee and Sarasota each have their own chambers, directories and news outlets. We work the Lakewood Ranch Business Alliance, the local Observer papers, county and regional publications, and category-specific directories. Nothing bought.',
                  },
                  {
                    h: 'AI search visibility',
                    p: 'Relocating households frequently ask an assistant before they know a single local name. We write answer-first, mark up entities cleanly, and target the sources those models already quote, so your business turns up in the recommendation rather than the tenth link.',
                  },
                  {
                    h: 'Reporting on calls, not screenshots',
                    p: 'Tracked calls and form fills from organic, Business Profile call volume, ranking movement on your primary queries, Core Web Vitals status, and what competitors changed. Then a live monthly call and a written plan for the next thirty days.',
                  },
                ].map(({ h, p }) => (
                  <div className="ucard" key={h}>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PROCESS ──────────────────────────────────────────────────── */}
          <section className="room-peach">
            <div className="wrap">
              <div className="eyebrow">How it works</div>
              <h2>From audit to ranking in four steps.</h2>
              <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="FactoryJet founder running a free 30 minute SEO audit call with a local business owner"
                  width={1200}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="grid4">
                {[
                  { n: '01', h: 'Free audit call', p: 'Thirty minutes on your profile health, site condition, current positions and what your three nearest competitors are doing. You leave with a prioritised list either way.' },
                  { n: '02', h: 'Scope and kickoff', p: 'A flat monthly scope agreed against your category and goals, then the technical baseline inside seven days.' },
                  { n: '03', h: 'Build and publish', p: 'Technical fixes in weeks one and two. Business Profile work from week two. Pages and local link work from week three.' },
                  { n: '04', h: 'Track, report, adapt', p: 'Monthly review on calls and leads, a written thirty-day plan, competitor monitoring and a live strategy call.' },
                ].map(({ n, h, p }) => (
                  <div className="ucard" key={n}>
                    <div className="pill">{n}</div>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── COMPARISON ───────────────────────────────────────────────── */}
          <section>
            <div className="wrap">
              <div className="eyebrow">How we compare</div>
              <h2>FactoryJet against a conventional agency engagement.</h2>
              <div className="cmpwrap">
                <table className="cmp">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="fjh">FactoryJet</th>
                      <th>Traditional agency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE.map(({ k, fj, alt, hl }) => (
                      <tr key={k}>
                        <td className="k">{k}</td>
                        <td className="fj">{hl ? <span className="hl">{fj}</span> : fj}</td>
                        <td className="alt">{alt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── PROOF ────────────────────────────────────────────────────── */}
          <section className="room-lav">
            <div className="wrap">
              <div className="eyebrow">What clients say</div>
              <h2>Senior engineers, founder-led strategy, month to month.</h2>
              <p className="lead">
                We track calls and bookings rather than ranking screenshots, and we do not publish
                case study numbers we cannot evidence.
              </p>
              <div
                className="quote"
                style={{ background: '#FFFFFF', border: '1px solid rgba(26,23,18,.10)' }}
              >
                <p style={{ color: '#1A1712' }}>
                  "We started getting calls from people who had never heard of us before, just found
                  us on Google and called. That is exactly what we needed and exactly what FactoryJet
                  delivered."
                </p>
                <div className="byline">
                  <div className="avatar">A</div>
                  <div>
                    <div className="nm">Arif S, Formative Concepts</div>
                    <div className="ti" style={{ color: '#56524A' }}>MEP and BIM consulting, US market</div>
                  </div>
                </div>
              </div>
              <div style={{ margin: '32px 0 0', borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="/images/us/lakewood-ranch/seo/lakewood-ranch-affluent-community.webp"
                  alt="Streets and retail at a Lakewood Ranch, Florida town centre where local businesses compete for map pack visibility"
                  width={1200}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="clients">
                {['Formative Concepts', 'Belle Maison', 'Impulse Branding', '500+ businesses served'].map(
                  (c) => (
                    <span
                      key={c}
                      style={{ background: '#FFFFFF', border: '1px solid rgba(26,23,18,.10)', color: '#1A1712' }}
                    >
                      {c}
                    </span>
                  )
                )}
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section className="room-peach">
            <div className="wrap">
              <div className="eyebrow">Questions answered</div>
              <h2>What Lakewood Ranch owners ask before they hire anyone.</h2>
              <p className="lead">
                These are the questions people genuinely search alongside these queries, answered
                straight. No numbers invented, no pressure applied.
              </p>
              <div className="faqgrid">
                <nav aria-label="FAQ categories">
                  <div className="faqnav">
                    {FAQ_GROUPS.map((g) => (
                      <a href={`#faq-${g.id}`} key={g.id}>
                        {g.label}<span className="ct">{g.items.length}</span>
                      </a>
                    ))}
                  </div>
                  <p className="faqhelp">
                    More questions? <a href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a free call</a>.
                  </p>
                </nav>
                <div>
                  {FAQ_GROUPS.map((g) => (
                    <div className="faqcat" key={g.id} id={`faq-${g.id}`}>
                      <div className="ch">{g.label}</div>
                      {g.items.map((it) => (
                        <details key={it.q}>
                          <summary>{it.q}</summary>
                          <p>{it.a}</p>
                        </details>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── INTERNAL LINKS ───────────────────────────────────────────── */}
          <section>
            <div className="wrap">
              <div className="eyebrow">Keep reading</div>
              <h2>Related services and other markets we work in.</h2>
              <p className="lead">
                If you want the service detail rather than the local detail, start here. The city
                pages below include our own real positions, good and bad.
              </p>
              <div className="grid3">
                {SERVICE_LINKS.map(({ href, h, p }) => (
                  <a
                    className="ucard"
                    key={href}
                    href={href}
                    style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}
                  >
                    <h3 style={{ color: '#B23E13' }}>{h}</h3>
                    <p>{p}</p>
                  </a>
                ))}
              </div>
              <div className="grid2" style={{ marginTop: '18px' }}>
                {CITY_LINKS.map(({ href, h, p }) => (
                  <a
                    className="ucard"
                    key={href}
                    href={href}
                    style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}
                  >
                    <h3 style={{ color: '#B23E13' }}>{h}</h3>
                    <p>{p}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ── FINAL CTA ────────────────────────────────────────────────── */}
          <section className="final">
            <div className="wrap">
              <div className="eyebrow">Ready to start</div>
              <h2>
                The Lakewood Ranch SERP is being held by agencies<br />
                <span className="it">that have never been here.</span>
              </h2>
              <p className="lead">
                Free thirty-minute audit. We show you where you stand, what the businesses near you
                are doing, and the three moves with the biggest effect. If the answer is that you do
                not need us, we will say that too.
              </p>
              <div className="cta-row">
                <ModalCTAButton
                  label="Get your free SEO audit"
                  region="us"
                  modalVariant="seo"
                  btnVariant="primary-light"
                />
                <a className="btn btn-ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  Talk to the founder
                </a>
              </div>
              <p className="fine">
                Month to month &middot; free audit &middot; no setup fee &middot; senior engineers &middot; Manatee and Sarasota County
              </p>
            </div>
          </section>

        </main>
        <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
      </div>
    </>
  );
}
