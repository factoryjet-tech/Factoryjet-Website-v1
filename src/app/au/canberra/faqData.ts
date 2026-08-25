/**
 * FAQs for /au/canberra.
 *
 * SOURCING: real People-Also-Ask questions harvested from Google AU on 2026-08-25, pool
 * at pipeline/research/data/au-faq-pool-2026-08-25.json. [CBR] marks a Canberra query.
 *
 * WHY THIS SET DIFFERS: Canberra's buyer mix is unlike the other three cities. A large
 * share of work here is for associations, peak bodies, not-for-profits and businesses
 * selling into the public sector, so the set covers accessibility, tender and procurement
 * questions the other city pages do not.
 *
 * The ONLY copy of these questions. sections/FAQ.tsx renders it, page.tsx maps it into
 * FAQPage JSON-LD.
 */

export interface Faq {
  q: string;
  a: string;
  topic: 'Accessibility and compliance' | 'Cost and scope' | 'Websites' | 'SEO' | 'Google and local search';
}

export const FAQS: Faq[] = [
  // ---------- Accessibility and compliance ----------
  {
    q: 'What is web accessibility and does my site need it?',
    topic: 'Accessibility and compliance',
    a: 'Accessibility means people using a screen reader, a keyboard instead of a mouse, or a magnified screen can still use your site. The international standard is WCAG, published by the W3C. Whether you are formally required to meet it depends on who you are and who you contract with, and that is a question for your own legal advice. What is not in doubt is that Canberra tenders ask about it, so being unable to answer costs you work.',
  },
  {
    q: 'What makes a website accessible?',
    topic: 'Accessibility and compliance',
    a: 'The basics cover most of it: every image has a text description, the page works using only a keyboard, text has enough contrast against its background, form fields have real labels, headings run in order, and nothing relies on colour alone to convey meaning. None of that is exotic and none of it makes a site uglier. Most inaccessible sites got that way through inattention rather than a decision.',
  },
  {
    q: 'Can you make an existing website accessible?',
    topic: 'Accessibility and compliance',
    a: 'Usually yes, and it is often cheaper than a rebuild. We audit against the WCAG success criteria, list what fails, and rank the failures by how many people they actually block. Contrast, missing labels and keyboard traps are typically quick to fix. Sites built entirely on a drag-and-drop builder are the hard case, because the underlying code is not yours to correct.',
  },
  {
    q: 'What do government tenders ask about websites?',
    topic: 'Accessibility and compliance',
    a: 'Commonly: whether the site meets a named accessibility standard, where the data is hosted, how you handle personal information, who owns the code, and whether you can demonstrate the same work elsewhere. The pattern is that they want evidence rather than assurance. Being able to point at a live site and a test result answers more of the form than any amount of description.',
  },

  // ---------- Cost and scope ----------
  {
    q: 'How much does it cost to design a website in Australia?',
    topic: 'Cost and scope',
    a: 'It depends on page count, whether content already exists, and what the site must connect to. For Canberra specifically, accessibility work and any security or hosting requirement attached to a contract will move the number, so those need to be on the table at scope rather than discovered later. We review, write a scope, and price that before you commit.',
  },
  {
    q: 'How many pages should a good website have?',
    topic: 'Cost and scope',
    a: 'Enough to answer what your audience asks and no more. An association usually needs membership information, what it advocates for, its people, its publications and a way to join. A supplier selling into government needs capability, evidence, compliance and contact. Extra pages nobody searches for do not help you rank and do add maintenance.',
  },
  {
    q: 'Is there a monthly fee to have a website?',
    topic: 'Cost and scope',
    a: 'Yes, usually small: the domain yearly and hosting monthly or yearly. If your site takes memberships, event bookings or payments there is normally a platform or transaction fee too. What you should not pay is a monthly fee simply to keep pages online with an agency holding the keys. That arrangement is common and it is worth checking your current contract for.',
  },

  // ---------- Websites ----------
  {
    q: 'How long does it typically take to build a website?',
    topic: 'Websites',
    a: 'A few weeks from approved scope to launch for a straightforward site, and the build is rarely what holds it up. Content, sign-off and, in Canberra, internal approval processes are. Organisations with a board or a committee should add time for that, and we plan the schedule around approval dates rather than pretending they do not exist.',
  },
  {
    q: 'How do I increase my website speed?',
    topic: 'Websites',
    a: 'Measure before you change anything. Google publishes the marks it uses: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. Most slow sites fail on oversized images loading before anything else. Compress them, use a modern format, and remove plugins nobody uses any more.',
  },
  {
    q: 'What are common website mistakes?',
    topic: 'Websites',
    a: 'For Canberra organisations specifically: writing in the language of your own sector rather than your audience, burying the thing most visitors came for under an About menu, publishing documents as scanned files nobody can search or read aloud, and leaving out any way to contact a human. The last one is more common on association sites than anywhere else.',
  },
  {
    q: 'How can I make my website mobile-friendly?',
    topic: 'Websites',
    a: 'Test on a real phone, not a resized browser. What usually breaks is text too small to read, buttons too close together to tap, forms pushing the submit button off screen, and tables forcing sideways scrolling. Tables are the common one for organisations publishing data. Google indexes the mobile version of your site, so the phone view is the real one.',
  },
  {
    q: 'Is it mandatory for a company to have a website?',
    topic: 'Websites',
    a: 'No, there is no general legal requirement to have one. What is often effectively required is being findable and verifiable, which matters more in Canberra than most places because so much work here starts with someone checking whether an organisation is legitimate before making contact. A complete Google Business Profile can cover that at the very small end.',
  },

  // ---------- SEO ----------
  {
    q: 'How long does SEO take to show results in 2026?',
    topic: 'SEO',
    a: 'Google says some changes take effect within hours and others take months, and advises waiting a few weeks before judging one. Canberra is a small search market with correspondingly little entrenched competition, so movement here tends to come faster than in Sydney or Melbourne. When we measured the main Canberra SEO term, the weakest business holding a first-page position had links from just 7 other websites.',
  },
  {
    q: 'Does SEO work for small businesses?',
    topic: 'SEO',
    a: 'It works when people search for what you sell and you are not currently there. In Canberra it works particularly well for local services, because the competition is thin. It works poorly for organisations whose audience finds them through a mailing list, a member network or a government process rather than a search box, and a fair number of Canberra organisations are in that group.',
  },
  {
    q: 'How to tell if your SEO is working?',
    topic: 'SEO',
    a: 'Agree two numbers up front: enquiries from organic search, and impressions on a named list of terms you care about. Both come from Search Console and Analytics, which you own. If a report leads with rankings and buries the rest, ask why. Positions are the easiest number to present well and the least connected to anything that matters.',
  },
  {
    q: 'What is the difference between SEO and technical SEO?',
    topic: 'SEO',
    a: 'Technical SEO is about whether search engines can reach, read and index your pages at all. Broader SEO is about whether those pages deserve to rank once they can. Technical work is finite and mostly one-off. Content and authority work is ongoing. Doing the second before the first is the most common way to waste money on search.',
  },
  {
    q: 'Why is Google not crawling my website?',
    topic: 'SEO',
    a: 'The usual causes, in the order worth checking: a robots.txt rule blocking the pages, a noindex tag left from a staging site, content that only appears once JavaScript runs, no internal links pointing at the page, or a site too new to have been reached. Search Console names the exact cause in its page indexing report, which is the fastest place to look.',
  },

  // ---------- Google and local search ----------
  {
    q: 'Where can I find web designers in Canberra?', // [CBR]
    topic: 'Google and local search',
    a: 'Search the terms you actually want to win and see who ranks, since that is a demonstration rather than a claim. Ask other organisations in your sector who they used and what went wrong. Then ask each candidate who does the work, what happens if you leave, and whether they can show you a site they built two years ago and run a speed test on it now. Three conversations is usually enough.',
  },
  {
    q: 'Which web design company is considered the best in Canberra?', // [CBR]
    topic: 'Google and local search',
    a: 'There is no agreed answer, and any agency answering this with its own name is telling you how it sells rather than what is true. Canberra has capable studios, and the right one depends on whether you need brand work, an accessible site that will pass a tender review, or an ongoing search programme. Those are different skills and few firms are strong at all three.',
  },
  {
    q: 'How can I get my business to show up on Google Maps?',
    topic: 'Google and local search',
    a: 'Create a Google Business Profile and verify it, which is where most people stall. Verification is by phone, email, video or postcard depending on the business type. Then complete every field, choose the most specific primary category, and add real photographs. Ranking leans heavily on how close the searcher is, so a Civic address and a Tuggeranong address will not perform alike on the same query.',
  },
  {
    q: 'Is a Google Business Profile free?',
    topic: 'Google and local search',
    a: 'Completely. Creating, verifying and maintaining one costs nothing and there is no ongoing charge. If someone rings claiming your listing will be suspended unless you pay, it is a scam. Google Ads is a separate paid product and buying it has no effect on your free listing in either direction.',
  },
  {
    q: 'Why is my business not showing up on Google?',
    topic: 'Google and local search',
    a: 'Most often the profile is unverified, duplicates an older listing, or has been suspended for a guidelines breach, commonly a service-area business displaying an address it should have hidden. It can also be that you are checking from somewhere far away, since Maps results shift with the searcher. Check status, then duplicates, then categories.',
  },
  {
    q: 'Can anyone make a Google Business Profile?',
    topic: 'Google and local search',
    a: 'Anyone with a business that has customers can, but Google requires the business to make in-person contact with customers, either at a location or by travelling to them. A business operating entirely online with no face-to-face contact does not qualify. That rules out a fair number of Canberra consultancies, and trying anyway usually ends in a suspension.',
  },
];
