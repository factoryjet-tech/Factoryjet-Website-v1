import type { CaseStudy } from './index'

// ─── RDB Travels: cab and group-travel booking website, Ahmedabad ──────────
// Added 2026-09-29. Client naming approved by Bhavesh. Every factual claim below
// was read from the live site (https://www.rdbtravels.com, its sitemap.xml,
// robots.txt, llms.txt, page HTML and JS bundle) on 2026-09-29. No traffic,
// booking, revenue or pricing figures are asserted. Do not add numbers without
// a measured source. The site's own "500+ trips" and rating claims are the
// client's, not ours, and are deliberately not repeated here.
export const rdbTravelsCaseStudy: CaseStudy = {
  slug: 'rdb-travels-cab-booking-website',
  client: 'RDB Travels',
  tagline: 'An Ahmedabad cab and group-travel operator that needed a website built around how people actually book: on WhatsApp.',
  industry: 'Travel & Transport',
  services: [
    'Website Build',
    'Online Booking',
    'WhatsApp Quote Flow',
    'Route and Service Pages',
    'SEO and AI Search',
  ],
  headline: 'A Cab Booking Website for RDB Travels That Sends Every Enquiry Straight to WhatsApp',
  summary:
    'RDB Travels runs cars, Tempo Travellers and buses with drivers out of Ahmedabad. FactoryJet built its website, with a quote form that turns a trip request into a ready-to-send WhatsApp message, plus separate pages for each service and each popular route.',
  category: 'Travel',
  heroStats: [
    { value: 'WhatsApp', label: 'Where every quote request lands' },
    { value: 'Sedan to bus', label: 'Vehicle classes on the site' },
    { value: 'Ahmedabad', label: 'Home base for every trip' },
  ],
  glanceTiles: [
    { label: 'INDUSTRY', value: 'Travel & Transport' },
    { label: 'SERVICES', value: 'Website + Booking Flow + Search' },
    { label: 'BOOKING', value: 'Quote Form to WhatsApp' },
    { label: 'PAGES', value: 'Services + Routes' },
    { label: 'MARKET', value: 'Ahmedabad, Gujarat' },
    { label: 'SITE', value: 'rdbtravels.com' },
  ],
  keyMetrics: [
    { label: 'Booking Channel', value: 'WhatsApp', note: 'Quote form opens a pre-filled chat' },
    { label: 'Service Pages', value: 'Car, Tempo, Bus, Airport, Outstation' },
    { label: 'Route Pages', value: 'One page per popular route' },
    { label: 'Site', value: 'rdbtravels.com' },
  ],
  headlineMetric: {
    label: 'What Changed',
    value: 'A trip request becomes a WhatsApp message',
    note: 'The customer fills in the trip once and the office gets it in the chat it already runs on',
  },
  resultsMetrics: [
    { label: 'Website', value: 'Live' },
    { label: 'Quote Flow', value: 'Form to WhatsApp' },
    { label: 'Fleet', value: 'Sedan to 56-seater bus' },
    { label: 'Service Pages', value: '5 services' },
    { label: 'Route Pages', value: '8 routes' },
    { label: 'Structured Data', value: 'Business, Service, FAQ' },
  ],
  challenge:
    'A taxi and group-travel business lives on the phone. Most of its customers already know how they want to book: they send a WhatsApp message with where they are going, when, and how many people are coming. A website that asks them to fill in a long form and then wait for an email works against that habit. The business also runs very different trips, from a single airport drop in a sedan to a wedding party that needs a full bus. One generic home page cannot answer all of those questions. And people searching for a cab rarely type the company name. They type the route, like "Ahmedabad to Mumbai cab", or the vehicle, like "tempo traveller hire". Without a page for each of those, the business does not show up.',
  challengePullQuote:
    'Customers already book on WhatsApp. The website had to feed that chat, not compete with it.',
  approach:
    'We started from how RDB Travels already takes bookings, which is a WhatsApp chat with the office, and built the website to lead into it. The quote form asks only what the office needs to reply: name, mobile number, the route or requirement, and an optional vehicle choice. Then we split the content the way customers search. Each service got its own page, and each popular route out of Ahmedabad got its own page, with the distance, the road, the vehicle options and the questions people ask about that trip. Those pages are served as ready-made HTML, so search engines and AI tools can read them without running any code. We also added structured data describing the business, its fleet and its FAQs.',
  techStack: ['React', 'Pre-rendered HTML Pages', 'Cloudflare', 'Schema.org JSON-LD', 'llms.txt'],
  solution:
    'The site shows the full fleet in one place: sedans, Ertiga and Innova cars, 12, 17 and 26 seater Tempo Travellers, a 32-seater mini bus and 56-seater coaches, each with a driver. A "Get a quote" button opens a short form. When the customer sends it, their details are turned into a pre-filled WhatsApp message to the office, so nothing gets retyped and the reply comes back in the same chat. WhatsApp and call buttons also sit in the header and footer, and a sticky call-to-action bar appears on phones. Behind that sit five service pages (car rental, Tempo Traveller hire, bus hire, airport transfer and outstation cab) and route pages for trips such as Ahmedabad to Mumbai, Surat, Vadodara, Rajkot, Bhuj, Pune, Nashik and a Rajasthan circuit. The site also has a sitemap, a robots.txt that lets AI search crawlers in by name, and an llms.txt file that sums up the business for AI assistants.',
  screenshots: [
    {
      src: '/images/work/rdb-travels-desktop.webp',
      alt: 'RDB Travels website home page on desktop, showing the fleet and the WhatsApp quote button',
      caption: 'The desktop home page leads with the fleet and a one-click route to a WhatsApp quote.',
      device: 'desktop',
    },
    {
      src: '/images/work/rdb-travels-mobile.webp',
      alt: 'RDB Travels website on a phone, with the sticky WhatsApp and call bar',
      caption: 'On phones, WhatsApp and call stay one tap away while the customer scrolls.',
      device: 'mobile',
    },
  ],
  results:
    'RDB Travels has a live website built around the way its customers already book, with separate pages for each service and each main route out of Ahmedabad. We are not publishing traffic, enquiry or booking numbers here. We would rather report measured figures later than estimated ones now.',
  imageUrl: '/images/case-studies/rdb-travels-cab-booking-website-hero.jpg',
  ogImageUrl: '/images/case-studies/rdb-travels-cab-booking-website-og.png',
  publishedDate: '2026-09-29',
  modifiedDate: '2026-09-29',
  ctaTeaser: 'Run a cab or travel business that books on WhatsApp? We can build a site that feeds that chat instead of fighting it.',
  relatedSlugs: ['rukman-transport-logistics', 'yadav-entrance-automation-website-seo'],
  faqs: [
    {
      q: 'My customers already book on WhatsApp. Why do I need a website?',
      a: 'Because new customers have to find you before they can message you. Most people search for a route or a vehicle, not your company name. A website with a page for each route and service is how you show up in those searches. It then hands the customer straight to WhatsApp, so you keep booking the way you already do.',
    },
    {
      q: 'Can customers book directly from the website?',
      a: 'On the RDB Travels site, the customer fills in a short quote form and it opens WhatsApp with their trip details already typed in. The office then confirms the vehicle and the price in that chat. This suits a business where price depends on the route, the dates and the group size, so a fixed online checkout would give wrong prices.',
    },
    {
      q: 'Do I need online payments on my cab booking website?',
      a: 'Not always. Many cab operators confirm the trip first and take payment after, or take a small advance for long tours. RDB Travels takes quotes on WhatsApp rather than online payment. If your trips have fixed prices, like a standard airport drop, online payment can make sense. We decide that with you based on how you price trips today.',
    },
    {
      q: 'Why build a separate page for every route?',
      a: 'Someone looking for "Ahmedabad to Mumbai cab" wants to see that exact trip: the distance, the road, the vehicle choices and the common questions. A single home page cannot answer that well. A page per route gives search engines and AI assistants a clear, specific answer to show, and gives the customer a reason to trust you.',
    },
    {
      q: 'Will my website show up in ChatGPT or Google AI answers?',
      a: 'Nobody can promise that. What we can do is make the site easy for AI tools to read. For RDB Travels that meant route and service pages served as plain HTML, structured data about the business and fleet, a robots.txt that lets AI search crawlers in, and an llms.txt summary. Those are the same basics good SEO already needs.',
    },
    {
      q: 'I run cars, Tempo Travellers and buses. Can one site handle all of that?',
      a: 'Yes. The RDB Travels site covers everything from a sedan to a 56-seater coach. Each vehicle type has its own description and seat count, and the quote form lets the customer pick a vehicle or ask you to suggest one. That keeps small airport drops and big wedding bookings on one site without confusing either customer.',
    },
    {
      q: 'Can I update routes and vehicles later?',
      a: 'Yes. New routes and vehicle types can be added as new pages and cards without rebuilding the site. That matters for a travel business, where the routes customers ask for change with seasons, festivals and wedding dates.',
    },
  ],
  clientUrl: 'https://www.rdbtravels.com/',
  location: 'Ahmedabad, India',
}
