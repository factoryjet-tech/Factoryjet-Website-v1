/**
 * FAQs for /au/adelaide.
 *
 * SOURCING: real People-Also-Ask questions harvested from Google AU on 2026-08-25, pool
 * at pipeline/research/data/au-faq-pool-2026-08-25.json. [SA] marks a question that came
 * back on a South Australia query.
 *
 * WHY THIS SET DIFFERS: Adelaide is the most evenly winnable Australian market we
 * measured, with both the web design and the SEO terms inside reach of our current link
 * authority. The set therefore leans towards "is this worth doing at all" and value
 * questions rather than Melbourne's vendor-selection anxiety or Brisbane's cost focus.
 *
 * The ONLY copy of these questions. sections/FAQ.tsx renders it, page.tsx maps it into
 * FAQPage JSON-LD.
 */

export interface Faq {
  q: string;
  a: string;
  topic: 'Is it worth it' | 'Cost and scope' | 'Websites' | 'SEO' | 'Google and local search';
}

export const FAQS: Faq[] = [
  // ---------- Is it worth it ----------
  {
    q: 'Is it worth making a website for a small business?',
    topic: 'Is it worth it',
    a: 'It is worth it if people search for what you sell and you want them to find you rather than a competitor. It is not worth much if all your work comes from referrals and you have no interest in more. Be honest about which you are. Plenty of Adelaide businesses do fine on word of mouth, and for those a complete Google Business Profile does most of the job a website would.',
  },
  {
    q: 'Do I really need a website for my small business?',
    topic: 'Is it worth it',
    a: 'You need somewhere a stranger can check that you are real, see what you do, and contact you. For some businesses a well-kept Google Business Profile covers that. You need an actual website once you sell something that needs explaining, when buyers compare you against others before calling, or when you want to be found for what you do rather than only by name.',
  },
  {
    q: 'Does SEO work for small businesses?',
    topic: 'Is it worth it',
    a: 'It works well for a small business with a clear service and a defined area, which describes most Adelaide firms. Local search is where a small business can genuinely beat a bigger competitor, because how close you are to the searcher counts for a lot and a well-kept listing counts for more. It works badly when the business is too broad to describe or when nobody is searching for it.',
  },
  {
    q: 'Is an SEO agency worth it?',
    topic: 'Is it worth it',
    a: 'Only when there is real demand for what you sell and your site is not currently meeting it. We check volume against Google Ads data before recommending anything, and when the numbers do not support the work we say so. That has happened in this market. Being told not to spend is more useful than being sold a retainer aimed at search terms nobody types.',
  },
  {
    q: 'Is it cheaper to build a website myself?',
    topic: 'Is it worth it',
    a: 'In cash, usually yes. In total cost, often no. A builder subscription is cheap, but the hours spent on layout, copy and fixing the mobile view are hours not spent earning. The test is your own hourly value. If a week of your time is worth more than the build, doing it yourself is the expensive option. If you are pre-revenue and time-rich, build it yourself and come back later.',
  },

  // ---------- Cost and scope ----------
  {
    q: 'How much does it cost to create a website in SA?', // [SA]
    topic: 'Cost and scope',
    a: 'It depends on page count, whether your content already exists, and what the site must connect to. A five page site for a trade business and a site with a booking system and customer logins are different jobs. Any number quoted before someone has looked at yours is a guess. We review the current site, write a scope, and price that scope before you commit to anything.',
  },
  {
    q: 'How much should SEO cost for a small business?',
    topic: 'Cost and scope',
    a: 'It should track the size of your problem, not a standard package. A site with sound structure that needs its local listing fixed and a few pages written is a small job. A site Google cannot crawl properly is a bigger one. Ask any agency to price the diagnosis separately from the ongoing work, so you can find out what is wrong without committing to a year of anything.',
  },
  {
    q: 'How many pages should a good website have?',
    topic: 'Cost and scope',
    a: 'Enough to answer what buyers ask and no more. Most Adelaide service businesses need a home page, one page for each service they want enquiries for, an about page with real people, proof of past work, and a contact page. Pages on topics nobody searches for do not help you rank. One strong page beats five thin ones covering the same ground.',
  },
  {
    q: 'Is there a monthly fee to have a website?',
    topic: 'Cost and scope',
    a: 'Yes, usually small. The domain is billed yearly and hosting monthly or yearly. If the site takes bookings or payments there is normally a platform or transaction fee too. What you should not be paying is a monthly fee purely to keep pages online with an agency holding the keys. Our work is yours outright, including the domain.',
  },

  // ---------- Websites ----------
  {
    q: 'How long does it typically take to build a website?',
    topic: 'Websites',
    a: 'A small business site is usually a few weeks from approved scope to launch, and the build is rarely the slow part. Content, photography and sign-off are. If those are ready when we start, a site of up to five pages can go live within seven days. We name at scope which items sit with you, because those are the ones that decide the date.',
  },
  {
    q: 'How do I increase my website speed?',
    topic: 'Websites',
    a: 'Measure first. Google publishes the marks it uses: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. Most slow small business sites in Australia fail on one thing, which is oversized images loading ahead of everything else. Compress them, serve a modern format, and remove plugins you no longer use.',
  },
  {
    q: 'What are common website mistakes?',
    topic: 'Websites',
    a: 'The most expensive is not saying what you do in the first screen. Then: no visible phone number for a phone buyer, a contact form with eight fields where three would do, stock photography that could belong to anyone, service pages written in industry language rather than customer language, and nothing showing you have done the work before.',
  },
  {
    q: 'How can I make my website mobile-friendly?',
    topic: 'Websites',
    a: 'Check it on a real phone rather than a narrow browser window. The usual failures are text too small to read, buttons too close to tap accurately, forms that push the submit button off screen, and images that force sideways scrolling. Fixing those four covers most of it. Google indexes the mobile version, so the phone view is the one that counts.',
  },
  {
    q: 'Why is my website not popping up?',
    topic: 'Websites',
    a: 'Either Google cannot index it or it can and nothing on the site matches what people search. Search Console tells you which. If pages are excluded, something is blocking them: a robots rule, a leftover noindex tag from a staging site, or content that only appears after JavaScript loads. If pages are indexed but get no impressions, the problem is the content rather than the plumbing.',
  },
  {
    q: 'What is the best website builder for small businesses in Australia?',
    topic: 'Websites',
    a: 'There is no single best one and anyone naming one without asking what you sell is guessing. For a simple site you will maintain yourself, a hosted builder is sensible. For products, a dedicated commerce platform is better. If you need bookings, logins or a link to software you already run, a builder will fight you and a purpose-built site will not.',
  },

  // ---------- SEO ----------
  {
    q: 'How long does SEO take to show results in 2026?',
    topic: 'SEO',
    a: 'Google says some changes take effect within a few hours and others take several months, and advises waiting a few weeks before judging one. In Adelaide specifically, technical fixes and a corrected Google Business Profile often move things within weeks, because the competition here is less entrenched than in Sydney or Melbourne. Competing on the main terms is still a matter of quarters rather than weeks.',
  },
  {
    q: 'How to tell if your SEO is working?',
    topic: 'SEO',
    a: 'Agree two numbers before the work starts: enquiries from organic search, and impressions on a named list of commercial terms. Both come from Search Console and Analytics, which you own and keep. If a monthly report leads with rankings and buries enquiries, ask why. Positions are the easiest number to present well and the least connected to money coming in.',
  },
  {
    q: 'Can I do local SEO myself?',
    topic: 'SEO',
    a: 'Much of it, and the highest-value parts need no technical skill. Claim your Google Business Profile, choose the most specific primary category, set service areas honestly, add real photographs, and reply to reviews. Keep your business name, address and phone identical everywhere. What gets harder is technical repair and earning links, which is where outside help starts to pay.',
  },
  {
    q: 'What do SEO services actually do?',
    topic: 'SEO',
    a: 'Three things, in this order when done well. Repair the technical faults stopping Google reading the site. Build pages that answer what buyers type, and connect them to a correct Google Business Profile. Then earn mentions from real sites so Google treats you as credible. Anything that jumps to the third step without the first two is spending your money on the slowest lever available.',
  },
  {
    q: 'Are backlinks still relevant in 2026?',
    topic: 'SEO',
    a: 'Yes, and they are the main reason page one in a competitive market stays out of reach for a new site. What has changed is that buying them is now the fastest way to a penalty. Links have to be earned by publishing something worth referencing, sponsoring things locally, or being genuinely useful to another business. That is slow and it is the part that lasts.',
  },
  {
    q: 'Is it worth paying for backlinks?',
    topic: 'SEO',
    a: 'No. Paid link schemes breach Google spam policies and the cleanup after a manual penalty costs more than the links did, on top of the traffic lost while it is in place. If an agency offers a fixed number of links per month for a fixed fee, ask exactly where they come from. A vague answer is the answer.',
  },

  // ---------- Google and local search ----------
  {
    q: 'How can I get my business to show up on Google Maps?',
    topic: 'Google and local search',
    a: 'Create a Google Business Profile and get it verified, which is where most people stall. Verification is by phone, email, video or postcard depending on the business type. Then complete every field, pick the most specific primary category, and add real photographs. Ranking on Maps leans heavily on how close you are to the searcher, so a CBD address and a Salisbury address will not perform the same on one query.',
  },
  {
    q: 'Is a Google Business Profile free?',
    topic: 'Google and local search',
    a: 'Entirely. Creating, verifying and running one costs nothing, and there is no ongoing charge. If you get a call saying your listing will be suspended unless you pay, it is a scam, and those calls are common in Australia. Google Ads is a separate paid product and buying it does not affect your free listing either way.',
  },
  {
    q: 'How long does it take for my business to show up on Google Maps?',
    topic: 'Google and local search',
    a: 'Usually within a few days of verification, though postcard verification adds a couple of weeks to the start. If it has been longer than that, check whether the profile is actually verified, whether a duplicate listing of the same business exists, and whether it has been suspended. Suspensions most often come from a service-area business showing a home address it should have hidden.',
  },
  {
    q: 'Why is my business not showing up on Google?',
    topic: 'Google and local search',
    a: 'Most often the profile is unverified, duplicates an older listing, or has been suspended for a guidelines breach. It can also be that you are checking from an address far from the business, since Maps results move with the searcher. Check the profile status, then search your own business name for duplicates, then look at whether your categories describe what you actually sell.',
  },
];
