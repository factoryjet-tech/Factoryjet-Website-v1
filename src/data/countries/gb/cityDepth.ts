/**
 * Per-city depth content for the 15 dynamic /uk/{city} roots.
 *
 * WHY THIS EXISTS, AND WHY IT IS NOT TEMPLATE PROSE
 *
 * The city hub renders from one template. Anything written in that template is
 * duplicated across all 15 pages, which is the exact shape that got the 90
 * /uk/{city}/{service} doorway pages retired on 2026-08-03 (620 words each,
 * differing in 26 words out of 620). Adding shared paragraphs to reach a word
 * count would rebuild that problem one tier up.
 *
 * So depth is added as DATA, not as copy. Every field below is specific to the
 * city and could not be swapped with another city's without becoming wrong.
 *
 * FACTUAL STANDARD: only well-established, checkable facts. Real universities,
 * real districts, real neighbouring towns, real sector characteristics. No
 * invented statistics, no client claims, no performance numbers. If something
 * could not be verified from general knowledge of the city it was left out
 * rather than guessed. `keyStats` and `avgAgencyPricing` already live in the
 * per-city JSON and are not duplicated here.
 *
 * WRITING RULES (docs/AI-SEO-RULEBOOK.md Tier A rule 6, PRODUCT.md):
 * no em dashes, plain register, no pricing, no fabricated metrics, no
 * geo-cheap framing, never claim we "run" a client's store.
 */

export interface CityDepth {
  /** Real surrounding towns and districts a business here would also serve. */
  servingAreas: string[]
  /** Real higher-education institutions in or adjacent to the city. */
  institutions: string[]
  /** Real commercial districts, distinct from the residential areas in cityAreas. */
  businessDistricts: string[]
  /** One paragraph on what actually characterises this local market. */
  marketNote: string
  /** One paragraph on what local search looks like here specifically. */
  searchNote: string
  /** Per-sector notes. Keys should match entries in the city's primaryIndustries. */
  sectorNotes: { sector: string; note: string }[]
  /** Project shapes that recur in this city, given its economy. */
  commonProjects: { title: string; note: string }[]
}

export const CITY_DEPTH: Record<string, CityDepth> = {
  brighton: {
    servingAreas: ['Hove', 'Shoreham-by-Sea', 'Lewes', 'Worthing', 'Newhaven', 'Burgess Hill', 'Haywards Heath'],
    institutions: ['University of Brighton', 'University of Sussex', 'Brighton and Sussex Medical School'],
    businessDistricts: ['New England Quarter', 'Preston Road', 'North Laine', 'Brighton Seafront offices'],
    marketNote: 'Brighton has an unusually high concentration of small creative and digital firms for a city its size, and a lot of them are one to ten people. That shapes the buying pattern: founders make the decision themselves, they have seen a lot of agency work, and they can tell a real build from a theme. The flip side is that competition for attention is high and a generic site disappears quickly.',
    searchNote: 'Brighton search is split between locals and a large visitor population, so the same term can carry very different intent depending on the season. Hospitality and retail see sharp seasonal swings; professional services do not. It is worth separating the two in a keyword plan rather than treating the city as one audience.',
    sectorNotes: [
      { sector: 'Creative Industries', note: 'Design, film and music businesses cluster here, and they judge a website on craft. Portfolio structure and image performance matter more than they would elsewhere.' },
      { sector: 'Technology & Digital', note: 'A dense small-agency and SaaS scene, much of it remote-first. Sites tend to need clear positioning and a fast path to a conversation rather than a long brochure.' },
      { sector: 'Tourism & Hospitality', note: 'Booking and enquiry flows carry the revenue. Mobile performance on a poor seafront signal is a real constraint, not a theoretical one.' },
      { sector: 'Professional Services', note: 'Solicitors, accountants and consultancies competing on trust. Clear service pages and honest credentials do more than visual flourish.' },
    ],
    commonProjects: [
      { title: 'Studio and agency portfolio sites', note: 'Image-heavy work where load time and art direction have to coexist.' },
      { title: 'Booking flows for hospitality', note: 'Availability, deposits and confirmation email, working properly on a phone.' },
      { title: 'Independent retail stores', note: 'Small catalogues where the brand does the selling.' },
    ],
  },

  bristol: {
    servingAreas: ['Bath', 'Portishead', 'Clevedon', 'Thornbury', 'Keynsham', 'Nailsea', 'Yate'],
    institutions: ['University of Bristol', 'University of the West of England', 'SGS College'],
    businessDistricts: ['Temple Quay', 'Harbourside', 'Aztec West', 'Bristol Business Park'],
    marketNote: 'Bristol carries genuine engineering weight, with aerospace and defence supply chains running out to Filton and beyond, alongside one of the larger creative and media clusters outside London. The result is two quite different buyer types in one city: technical firms that want precision and evidence, and creative firms that want craft.',
    searchNote: 'Bristol is competitive enough that broad head terms are slow going, but the city is geographically spread and area-level terms work well. Businesses serving Bath or the north fringe often do better targeting those explicitly than fighting for a single city-wide term.',
    sectorNotes: [
      { sector: 'Aerospace & Defence', note: 'Supply-chain firms selling to a small number of large buyers. The site is a credibility document, not a lead funnel, and technical specificity matters.' },
      { sector: 'Technology', note: 'A large and established scene with real depth in silicon and software. Buyers here read the technical detail and notice when it is missing.' },
      { sector: 'Creative Industries', note: 'Strong film, animation and design presence. Work is won on portfolio, so image quality and page speed pull in opposite directions and have to be balanced deliberately.' },
      { sector: 'Media', note: 'Natural history and broadcast production give the city an unusual media concentration. Content-led sites with real archives are common.' },
    ],
    commonProjects: [
      { title: 'Technical B2B sites for supply-chain firms', note: 'Capability, accreditation and contact, without marketing noise.' },
      { title: 'Production company showcases', note: 'Video-led pages that still have to load quickly.' },
      { title: 'Multi-site service businesses', note: 'One brand covering Bristol, Bath and the surrounding towns.' },
    ],
  },

  cambridge: {
    servingAreas: ['Ely', 'Huntingdon', 'St Neots', 'Newmarket', 'Royston', 'Saffron Walden', 'St Ives'],
    institutions: ['University of Cambridge', 'Anglia Ruskin University', 'Cambridge Regional College'],
    businessDistricts: ['Cambridge Science Park', 'Granta Park', 'Cambridge Biomedical Campus', 'St John\'s Innovation Park'],
    marketNote: 'Cambridge is a research economy first and a commercial one second, and it shows in how buying decisions get made. Technical founders and research spin-outs evaluate a supplier the way they evaluate a paper. Claims need support, and vague marketing language actively loses trust here.',
    searchNote: 'Search volume is modest because the city is small, but intent is unusually high and deal sizes can be large. Chasing volume is the wrong strategy; a narrow page that answers one technical question properly will outperform a broad one.',
    sectorNotes: [
      { sector: 'Technology & Software', note: 'Deep-tech and semiconductor work with genuinely technical audiences. Documentation quality often matters more than the marketing site.' },
      { sector: 'Education & Research', note: 'Departments, institutes and research groups needing clear, durable, low-maintenance sites rather than campaigns.' },
      { sector: 'Biotech & Life Sciences', note: 'Spin-outs moving from grant funding to commercial. They usually need a credible first site quickly, then a proper one after a raise.' },
      { sector: 'Pharmaceuticals', note: 'Regulated communication where accuracy and approval workflow shape the build more than design does.' },
    ],
    commonProjects: [
      { title: 'Spin-out launch sites', note: 'Credible, fast to build, and easy to replace once the company knows what it is.' },
      { title: 'Research group and institute sites', note: 'Publication lists, people pages, and content the team can maintain themselves.' },
      { title: 'Technical product pages', note: 'Specifications and integration detail written for engineers.' },
    ],
  },

  cardiff: {
    servingAreas: ['Newport', 'Penarth', 'Barry', 'Caerphilly', 'Pontypridd', 'Bridgend', 'Cowbridge'],
    institutions: ['Cardiff University', 'Cardiff Metropolitan University', 'University of South Wales'],
    businessDistricts: ['Cardiff Bay', 'Central Square', 'Callaghan Square', 'Cardiff Gate Business Park'],
    marketNote: 'Cardiff combines a large public sector with a broadcast and media cluster that is bigger than the city\'s size would suggest. Public and semi-public buyers bring procurement processes, documented requirements and accessibility expectations that a purely commercial market does not.',
    searchNote: 'Bilingual provision is a genuine consideration here in a way it is not elsewhere in the UK, particularly for public-facing organisations. Welsh-language content is a real requirement for some buyers, and it affects URL structure and hreflang, not just translation.',
    sectorNotes: [
      { sector: 'Public Sector', note: 'Accessibility is a legal requirement rather than a nice-to-have, and procurement runs on documented criteria. Build accordingly.' },
      { sector: 'Media & Broadcasting', note: 'Production and post-production businesses with heavy media libraries. Delivery and streaming performance are the constraint.' },
      { sector: 'Professional Services', note: 'Firms serving both Cardiff and the south Wales valleys. Service-plus-area pages do real work here.' },
      { sector: 'Technology', note: 'A growing scene concentrated around the Bay and Central Square, much of it selling outside Wales.' },
    ],
    commonProjects: [
      { title: 'Accessible public-facing sites', note: 'WCAG conformance evidenced, not asserted.' },
      { title: 'Bilingual English and Welsh builds', note: 'Proper language routing rather than a translation plugin.' },
      { title: 'Regional service businesses', note: 'One site covering Cardiff, Newport and the valleys.' },
    ],
  },

  coventry: {
    servingAreas: ['Kenilworth', 'Leamington Spa', 'Warwick', 'Nuneaton', 'Rugby', 'Bedworth', 'Solihull'],
    institutions: ['Coventry University', 'University of Warwick', 'Arden University'],
    businessDistricts: ['Coventry Business Park', 'Ansty Park', 'Westwood Business Park', 'Friargate'],
    marketNote: 'Coventry\'s economy is anchored in automotive and advanced engineering, with a strong research link through Warwick and a growing games and digital cluster in Leamington nearby. Engineering buyers here are used to specification documents and expect the same rigour from a supplier.',
    searchNote: 'Coventry sits close enough to Birmingham that some search intent leaks toward the larger city. Terms that name Coventry or a named district usually convert better than West Midlands terms, which get absorbed by Birmingham businesses.',
    sectorNotes: [
      { sector: 'Automotive', note: 'Tier one and tier two suppliers selling into a handful of manufacturers. Sites are credibility and capability documents.' },
      { sector: 'Education & Innovation', note: 'Two large universities plus research institutes generating spin-outs and short-cycle project work.' },
      { sector: 'Engineering', note: 'Precision and advanced manufacturing firms where accreditation lists and process detail matter more than styling.' },
      { sector: 'Digital Technology', note: 'A real games and simulation cluster in the wider area, with buyers who notice technical quality immediately.' },
    ],
    commonProjects: [
      { title: 'Manufacturing capability sites', note: 'Accreditations, tolerances and process, easy to find and easy to verify.' },
      { title: 'Spin-out and research commercialisation sites', note: 'Explaining technical work to a non-technical funder.' },
      { title: 'Local service businesses', note: 'Covering Coventry plus Warwickshire without diluting either.' },
    ],
  },

  derby: {
    servingAreas: ['Burton upon Trent', 'Ilkeston', 'Belper', 'Ashbourne', 'Long Eaton', 'Ripley', 'Swadlincote'],
    institutions: ['University of Derby', 'Derby College'],
    businessDistricts: ['Pride Park', 'Infinity Park', 'Cathedral Quarter', 'Derwent Business Centre'],
    marketNote: 'Derby has one of the highest concentrations of engineering employment in the UK, weighted heavily toward aerospace and rail. That makes the local B2B market unusually technical for a city of this size, and it means a lot of businesses here sell to a small number of very large buyers rather than to the public.',
    searchNote: 'Consumer search volume is moderate, but B2B intent is strong and specific. Terms naming a process or a certification tend to bring better enquiries than broad city terms, because the buyer already knows what they need.',
    sectorNotes: [
      { sector: 'Manufacturing & Engineering', note: 'Precision engineering firms where the website supports a sales conversation rather than starting one.' },
      { sector: 'Aerospace & Defence', note: 'Supply chains with long qualification cycles. Credibility signals and accreditation matter far more than campaign copy.' },
      { sector: 'Rail & Transport', note: 'A genuine national cluster. Buyers are frameworks and primes, so procurement language is part of the content.' },
      { sector: 'Professional Services', note: 'Firms serving the engineering base, often with unusually technical clients for their sector.' },
    ],
    commonProjects: [
      { title: 'Engineering capability sites', note: 'Machine lists, tolerances and accreditations, structured so a buyer can check them fast.' },
      { title: 'Framework and tender support pages', note: 'Content written for a procurement reader, not a browser.' },
      { title: 'Trade and installer sites', note: 'Service area, proof of work, and an easy way to get a quote.' },
    ],
  },

  edinburgh: {
    servingAreas: ['Leith', 'Musselburgh', 'Livingston', 'Dalkeith', 'Penicuik', 'South Queensferry', 'Haddington'],
    institutions: ['University of Edinburgh', 'Heriot-Watt University', 'Edinburgh Napier University', 'Queen Margaret University'],
    businessDistricts: ['Edinburgh Park', 'Exchange District', 'Quartermile', 'Leith Waterfront'],
    marketNote: 'Edinburgh is one of the larger financial centres in Europe outside London, and the compliance culture that comes with it reaches well beyond financial firms. Buyers here are used to sign-off processes, documented requirements and vendors who can evidence what they claim.',
    searchNote: 'Scotland-wide and Edinburgh-specific intent behave differently, and Scottish buyers often search with the country name rather than the city. A plan that only targets city terms tends to miss a meaningful share of the market.',
    sectorNotes: [
      { sector: 'Financial Services', note: 'Regulated communication where approval workflow and accessibility shape the build. Content changes are rarely a one-person decision.' },
      { sector: 'Professional Services', note: 'Legal and accountancy firms competing on reputation. Depth and clarity beat visual novelty.' },
      { sector: 'Tourism', note: 'Highly seasonal, with festival periods distorting demand. Booking performance under load is a real requirement in August.' },
      { sector: 'Technology', note: 'A strong data and informatics scene tied to the university, selling well beyond Scotland.' },
    ],
    commonProjects: [
      { title: 'Compliance-aware corporate sites', note: 'Approval workflow and accessibility built in, not retrofitted.' },
      { title: 'Festival and seasonal booking flows', note: 'Built to hold up during a short, extreme demand peak.' },
      { title: 'Scotland-wide service sites', note: 'Structured for national reach rather than one city.' },
    ],
  },

  glasgow: {
    servingAreas: ['Paisley', 'East Kilbride', 'Clydebank', 'Motherwell', 'Hamilton', 'Renfrew', 'Cumbernauld'],
    institutions: ['University of Glasgow', 'University of Strathclyde', 'Glasgow Caledonian University', 'Glasgow School of Art'],
    businessDistricts: ['International Financial Services District', 'Merchant City', 'Pacific Quay', 'Hillington Park'],
    marketNote: 'Glasgow is the largest city in Scotland and its commercial base is broader than Edinburgh\'s, spanning engineering, financial services and a serious creative sector. It is also a city where the surrounding towns form part of the same trading area, so catchment usually extends well past the boundary.',
    searchNote: 'Glasgow and the surrounding Lanarkshire and Renfrewshire towns are one market in practice but separate in search. Businesses that only target the city name routinely miss enquiries from Paisley, East Kilbride and Motherwell.',
    sectorNotes: [
      { sector: 'Financial Services', note: 'A large back-office and operations base rather than a front-office one, which changes what the website is for.' },
      { sector: 'Engineering & Manufacturing', note: 'Long industrial history with real depth in energy and marine engineering. Capability evidence carries the site.' },
      { sector: 'Creative Industries', note: 'Strong art school and broadcast presence. Craft is visible and expected.' },
      { sector: 'Technology', note: 'A growing scene around the universities and Pacific Quay, much of it selling internationally.' },
    ],
    commonProjects: [
      { title: 'Greater Glasgow service sites', note: 'Built for a catchment, not a postcode.' },
      { title: 'Industrial and energy capability sites', note: 'Certifications and sector experience, findable in seconds.' },
      { title: 'Creative and studio portfolios', note: 'Work first, with performance that holds up on image-heavy pages.' },
    ],
  },

  hull: {
    servingAreas: ['Beverley', 'Cottingham', 'Hessle', 'Withernsea', 'Hedon', 'Brough', 'Driffield'],
    institutions: ['University of Hull', 'Hull College', 'Bishop Burton College'],
    businessDistricts: ['Hull Marina', 'Priory Park', 'Melton West', 'Fruit Market'],
    marketNote: 'Hull\'s economy runs on the port, offshore wind and food processing, and the renewables investment of the last decade has genuinely changed the local supply chain. It is a market where a lot of businesses sell into industrial buyers rather than to consumers.',
    searchNote: 'Competition for local terms is lower here than in most cities of comparable size, which makes local SEO unusually cost-effective. The constraint is search volume rather than difficulty, so a broad keyword net matters more than depth on any single term.',
    sectorNotes: [
      { sector: 'Port & Maritime', note: 'Logistics and freight businesses where the buyer wants operational detail, not brand.' },
      { sector: 'Energy & Renewables', note: 'Offshore wind supply chain with real growth. Accreditation and safety record are the credibility signals.' },
      { sector: 'Food & Drink', note: 'Processing and distribution firms selling to retailers and wholesalers. Certification is the gate.' },
      { sector: 'Distribution', note: 'Warehousing and haulage where coverage area and capacity are the questions a site must answer.' },
    ],
    commonProjects: [
      { title: 'Industrial supplier sites', note: 'Capability, coverage and compliance, stated plainly.' },
      { title: 'Local service and trade sites', note: 'Low-competition local SEO that pays back quickly.' },
      { title: 'Food and logistics B2B sites', note: 'Certification and traceability made easy to check.' },
    ],
  },

  leicester: {
    servingAreas: ['Loughborough', 'Hinckley', 'Melton Mowbray', 'Market Harborough', 'Coalville', 'Oadby', 'Wigston'],
    institutions: ['University of Leicester', 'De Montfort University', 'Loughborough University'],
    businessDistricts: ['Leicester Business Park', 'Meridian Business Park', 'Grove Park', 'Optimus Point'],
    marketNote: 'Leicester has a long textile and garment manufacturing history and one of the most diverse business populations in the UK, with a very high proportion of owner-managed firms. Distribution is the other pillar, helped by sitting close to the centre of the motorway network.',
    searchNote: 'A high share of small owner-managed businesses means decisions are made quickly and locally, and word of mouth carries a lot of weight. Local search works well precisely because the buyer is usually the owner and is searching themselves.',
    sectorNotes: [
      { sector: 'Textiles & Fashion', note: 'Manufacturers and wholesalers, increasingly selling direct. Catalogue structure and size and fit data are the hard parts.' },
      { sector: 'Food & Logistics', note: 'Distribution businesses where coverage and capacity answer the buyer\'s first question.' },
      { sector: 'Professional Services', note: 'Firms serving a diverse SME base, often across several languages and communities.' },
      { sector: 'Technology', note: 'A smaller but real scene tied to the two universities and the space and engineering cluster.' },
    ],
    commonProjects: [
      { title: 'Wholesale to direct-to-consumer stores', note: 'Trade pricing and public pricing on one catalogue.' },
      { title: 'Distribution and logistics sites', note: 'Coverage, capacity and contact, without a marketing preamble.' },
      { title: 'Owner-managed SME sites', note: 'Fast to launch, easy for the owner to maintain.' },
    ],
  },

  newcastle: {
    servingAreas: ['Gateshead', 'Sunderland', 'North Shields', 'Whitley Bay', 'Durham', 'Cramlington', 'Hexham'],
    institutions: ['Newcastle University', 'Northumbria University', 'Newcastle College'],
    businessDistricts: ['Quayside', 'Newcastle Helix', 'Cobalt Business Park', 'Team Valley'],
    marketNote: 'Newcastle has a genuine software cluster, anchored by a large enterprise software presence and two universities feeding it, alongside a substantial health and life sciences base around the Helix. The Tyneside conurbation trades as one market even though the place names differ.',
    searchNote: 'North East and Tyneside terms often carry as much intent as Newcastle ones, and businesses that ignore Gateshead and Sunderland in their targeting leave enquiries on the table. The conurbation is tighter than the separate city names suggest.',
    sectorNotes: [
      { sector: 'Technology & Digital', note: 'A real software base with experienced buyers. Technical credibility is checked, not assumed.' },
      { sector: 'Healthcare', note: 'Large NHS and life sciences presence with procurement and accessibility requirements attached.' },
      { sector: 'Professional Services', note: 'Regional firms serving the whole North East rather than one city.' },
      { sector: 'Energy', note: 'Offshore and subsea engineering along the river, selling into international supply chains.' },
    ],
    commonProjects: [
      { title: 'Software and SaaS marketing sites', note: 'Positioning and documentation, aimed at a technical evaluator.' },
      { title: 'Regional professional services sites', note: 'Structured for the conurbation, not a single city term.' },
      { title: 'Health and public sector builds', note: 'Accessibility evidenced and procurement-ready.' },
    ],
  },

  nottingham: {
    servingAreas: ['Beeston', 'West Bridgford', 'Arnold', 'Hucknall', 'Ilkeston', 'Long Eaton', 'Mansfield'],
    institutions: ['University of Nottingham', 'Nottingham Trent University', 'Nottingham College'],
    businessDistricts: ['Nottingham Science Park', 'Castle Marina', 'Boots Enterprise Zone', 'Lace Market'],
    marketNote: 'Nottingham holds two genuinely large corporate headquarters in retail and credit data, which gives the city an unusual concentration of marketing, analytics and technology employment for its size. Around that sits a broad SME base and two large universities.',
    searchNote: 'The student population distorts seasonal demand noticeably for consumer businesses, with sharp swings in September and June. B2B demand is steadier, so the two need separate treatment in any content plan.',
    sectorNotes: [
      { sector: 'Retail', note: 'A large retail head-office presence means local marketing talent is experienced and expectations are high.' },
      { sector: 'Healthcare & Education', note: 'Hospitals and universities with procurement processes and strict accessibility requirements.' },
      { sector: 'Distribution & Logistics', note: 'Central location and motorway access make this a distribution hub. Coverage answers the buyer\'s first question.' },
      { sector: 'Technology', note: 'Data and analytics strength tied to the credit and retail sectors, with buyers who read the detail.' },
    ],
    commonProjects: [
      { title: 'Consumer brand sites', note: 'Built to handle sharp seasonal demand swings.' },
      { title: 'Analytics and data product sites', note: 'Explaining a technical product to a commercial buyer.' },
      { title: 'Local service businesses', note: 'Covering the city plus Beeston, West Bridgford and the wider county.' },
    ],
  },

  oxford: {
    servingAreas: ['Abingdon', 'Bicester', 'Witney', 'Didcot', 'Kidlington', 'Thame', 'Wantage'],
    institutions: ['University of Oxford', 'Oxford Brookes University', 'Ruskin College'],
    businessDistricts: ['Oxford Science Park', 'Begbroke Science Park', 'Milton Park', 'Harwell Campus'],
    marketNote: 'Oxford runs on research, publishing and an unusually dense life sciences cluster, with the science parks at Milton and Harwell nearby pulling in a lot of the commercial activity. Like Cambridge it is a small city with large deal sizes and technically literate buyers.',
    searchNote: 'Search volume inside the city is small, and a meaningful share of the commercial activity actually sits at Milton Park, Harwell and Begbroke rather than in Oxford itself. Targeting only the city name misses a large part of the addressable market.',
    sectorNotes: [
      { sector: 'Education & Research', note: 'Departments and institutes needing durable, low-maintenance sites the team can run themselves.' },
      { sector: 'Technology & Innovation', note: 'Deep-tech spin-outs where the audience is investors and technical partners rather than consumers.' },
      { sector: 'Biotech & Life Sciences', note: 'A dense cluster with regulated communication and long sales cycles.' },
      { sector: 'Publishing', note: 'Content-heavy organisations with large archives where structure and search matter more than styling.' },
    ],
    commonProjects: [
      { title: 'Spin-out and investor-facing sites', note: 'Credible quickly, replaceable after a raise.' },
      { title: 'Research and institute sites', note: 'People, publications and clear maintenance ownership.' },
      { title: 'Science park tenant sites', note: 'Targeting the parks explicitly, not just the city.' },
    ],
  },

  plymouth: {
    servingAreas: ['Saltash', 'Ivybridge', 'Tavistock', 'Torpoint', 'Kingsbridge', 'Liskeard', 'Yelverton'],
    institutions: ['University of Plymouth', 'Plymouth Marjon University', 'City College Plymouth'],
    businessDistricts: ['Derriford', 'Langage Business Park', 'Sutton Harbour', 'Estover Industrial Estate'],
    marketNote: 'Plymouth is a defence and marine city first, with the naval base and its supply chain shaping a large part of the local economy, and a marine autonomy and research cluster growing alongside it. Its relative isolation in the far south west means the catchment stretches well into Cornwall.',
    searchNote: 'Geography matters more here than in most cities. Plymouth serves a wide, thinly populated area, so terms naming Cornwall or south Devon towns often bring better enquiries than city terms alone, simply because there is less competition for them.',
    sectorNotes: [
      { sector: 'Maritime & Defence', note: 'Supply-chain firms with security and accreditation requirements. Credibility signals are the content.' },
      { sector: 'Tourism & Hospitality', note: 'Strongly seasonal, with booking performance mattering most in a short window.' },
      { sector: 'Professional Services', note: 'Firms covering a large rural catchment, where service-area content does real work.' },
      { sector: 'Technology', note: 'Marine autonomy and research spin-outs tied to the university and the marine cluster.' },
    ],
    commonProjects: [
      { title: 'Defence supply-chain sites', note: 'Accreditation and clearance status, easy to verify.' },
      { title: 'Wide-catchment service sites', note: 'Built for Devon and east Cornwall, not one city.' },
      { title: 'Seasonal hospitality booking', note: 'Holding up through a short, intense season.' },
    ],
  },

  southampton: {
    servingAreas: ['Eastleigh', 'Winchester', 'Romsey', 'Fareham', 'Hedge End', 'Totton', 'Chandlers Ford'],
    institutions: ['University of Southampton', 'Solent University', 'Southampton City College'],
    businessDistricts: ['Ocean Village', 'Southampton Science Park', 'Adanac Park', 'Millbrook Industrial Estate'],
    marketNote: 'Southampton is one of the busiest ports in the country and the UK\'s main cruise terminal, which gives the local economy a strong logistics and maritime services base. The university adds real engineering and computer science depth, particularly in acoustics and marine research.',
    searchNote: 'Southampton, Portsmouth and Winchester are close enough that catchments overlap heavily, and buyers do not always search by the nearest city. Hampshire-level terms are worth testing alongside city ones rather than assuming the city name wins.',
    sectorNotes: [
      { sector: 'Port & Maritime', note: 'Freight, shipping services and marine engineering, selling to operational buyers who want detail fast.' },
      { sector: 'Cruise Industry', note: 'Highly seasonal supporting services, from provisioning to shore excursions, with sharp demand peaks.' },
      { sector: 'Retail', note: 'A large regional retail catchment drawing from across Hampshire.' },
      { sector: 'Education', note: 'Two universities generating spin-outs and a steady flow of short-cycle project work.' },
    ],
    commonProjects: [
      { title: 'Maritime services sites', note: 'Capability and coverage, written for an operations buyer.' },
      { title: 'Hampshire-wide service sites', note: 'Structured for overlapping city catchments.' },
      { title: 'University spin-out sites', note: 'Technical work explained to a commercial audience.' },
    ],
  },
}

export const getCityDepth = (slug: string): CityDepth | undefined => CITY_DEPTH[slug]
