**FACTORYJET TECHNOLOGIES**

**Rishikesh Task Guide**

UK Programmatic SEO System — 3 Tasks to Complete

*Step-by-step instructions. Use Claude Code to go fast.*

Project folder:  \~/Downloads/FactoryJet Website/factoryjet-uk-pages

Stack:  Next.js 15  ·  TypeScript  ·  Tailwind CSS 4  ·  Cloudflare

**You have Claude Code PRO — use it for everything in this guide.**

# **Read This First — Before You Touch Anything**

Welcome\! Before you start, read this whole section. It will save you hours of confusion.

## **What are we building?**

FactoryJet is a web design agency. We are building a system that automatically creates 500+ website pages — one for every UK city \+ service combination.

Example pages we want to create:

* factoryjet.com/uk/leeds/web-design

* factoryjet.com/uk/manchester/ai-agents

* factoryjet.com/uk/birmingham/ecommerce

* factoryjet.com/uk/bristol/seo

Each of these pages will appear on Google when someone in that city searches for that service. That brings us free leads every month — forever.

## **Your 3 tasks — the big picture**

| Task | Name | What you will build | Time estimate |
| :---- | :---- | :---- | :---- |
| 1 | Data Layer | JSON files with info about every UK city and service | 2–3 days |
| 2 | Next.js Routes | The URL system that creates 500+ pages from the data | 1–2 days |
| 3 | Sitemaps \+ Cloudflare | Tell Google about all pages \+ allow AI bots to crawl | 1 day |

**⚡  Tasks 1 and 3 can be done at the SAME TIME.**

Start Task 1 and Task 3 on Day 1\. Do Task 2 once Task 1 is done for at least the first 5 cities.

## **How to use Claude Code — your superpower**

You have Claude Code PRO. This means Claude AI can read your whole project and write code for you. Here is how to use it correctly:

### **Step 1 — Open your terminal**

On Mac: press Command \+ Space, type "Terminal", press Enter.

### **Step 2 — Navigate to the project folder**

cd \~/Downloads/FactoryJet\\ Website/factoryjet-uk-pages

### **Step 3 — Open Claude Code**

claude

Claude Code will start. You will see a prompt where you can type instructions.

### **Step 4 — Give Claude a task**

Type your instruction clearly and press Enter. Claude will read your project files and write the code. You do not need to write code yourself — just describe what you want.

**💡  Golden rule for Claude Code prompts:**

Always tell Claude: (1) what file to create or edit, (2) exactly what should be inside it, (3) any examples you want it to follow. The more detail you give, the better the output.

**⚠️  Important:**

After Claude Code writes any file, always open that file and read it yourself to make sure it looks right. Never assume it is perfect without checking.

**TASK 1**

# **Task 1 — Build the Data Layer**

Think of this like building a giant spreadsheet. Every UK city gets its own "data card" (a JSON file). Every service gets its own data card too. Later, the website will read these cards and automatically build the pages.

## **What is a JSON file?**

JSON is a way to store information in a file. It looks like this:

{  "name": "Leeds",  "population": 800000,  "industries": \["Finance", "Fashion", "Legal"\]}

It is like a form that has been filled in. Each field has a name (like "population") and a value (like 800000). That is all it is. Do not overthink it.

## **Folder structure to create**

Inside the project folder, create this exact structure:

factoryjet-uk-pages/└── data/    ├── cities/    │   ├── leeds.json    │   ├── manchester.json    │   ├── birmingham.json    │   ├── bristol.json    │   ├── edinburgh.json    │   ├── sheffield.json    │   ├── nottingham.json    │   ├── leicester.json    │   ├── liverpool.json    │   ├── cardiff.json    │   ├── glasgow.json    │   ├── newcastle.json    │   ├── southampton.json    │   ├── brighton.json    │   ├── oxford.json    │   ├── cambridge.json    │   ├── derby.json    │   ├── coventry.json    │   ├── hull.json    │   └── plymouth.json    ├── services/    │   ├── web-design.json    │   ├── ai-websites.json    │   ├── ecommerce.json    │   ├── seo.json    │   ├── ai-seo.json    │   └── ai-agents.json    └── index.ts

## **The exact template for every city JSON file**

Every city file must have ALL of these fields. Copy this template and fill in the real data for each city:

{  "slug": "leeds",  "name": "Leeds",  "region": "West Yorkshire",  "country": "England",  "population": 800000,  "businesses": 42000,  "gdpBn": 23.4,  "primaryIndustries": \[    "Financial Services",    "Fashion & Retail",    "Legal Services",    "Digital & Tech"  \],  "keyEmployers": \[    "HSBC UK",    "Channel 4",    "Asda",    "Eversheds Sutherland",    "Sky Betting & Gaming"  \],  "avgAgencyPricing": {    "webDesign": 4500,    "ecommerce": 8000,    "seo": 1200,    "aiAgents": 0  },  "localAgencies": {    "web-design": \[      "Parallax",      "Electric House",      "Substrakt"    \],    "seo": \[      "Wildcat Digital",      "Blur Digital",      "Nettl Leeds"    \]  },  "keyStats": {    "digitalBusinessGrowth": "18% YoY",    "smeCount": 38000,    "techJobs": 12000,    "avgSalary": 32000  },  "cityAreas": \[    "Leeds City Centre",    "Headingley",    "Chapel Allerton",    "Horsforth",    "Roundhay"  \],  "newsHook": "HSBC UK HQ relocation brings 2,500 financial services jobs to Leeds city centre",  "coordinates": {    "lat": 53.8008,    "lng": \-1.5491  }}

## **The exact template for every service JSON file**

{  "slug": "web-design",  "name": "Web Design",  "tagline": "Enterprise-Grade Websites at Startup-Friendly Prices",  "shortDescription": "Custom websites built with Next.js 15 and GSAP that convert visitors into paying clients.",  "primaryKeyword": "web design \[city\]",  "secondaryKeywords": \[    "website designer \[city\]",    "web agency \[city\]",    "website design company \[city\]",    "affordable web design \[city\]",    "professional website \[city\]"  \],  "heroHeadline": "Web Design in {cityName} That Converts Visitors Into Clients",  "pricingRange": {    "min": 1500,    "max": 8000,    "currency": "GBP"  },  "localAvgMultiplier": 2.8,  "deliveryWeeks": {    "standard": 4,    "express": 2  },  "techStack": \[    "Next.js 15",    "Tailwind CSS 4",    "GSAP",    "TypeScript"  \],  "relatedServices": \["ai-websites", "seo"\],  "platforms": \["wordpress", "shopify", "webflow", "nextjs", "framer"\]}

## **Data for all 6 services — fill these in**

| Slug | Name | Primary Keyword | Price Range (GBP) |
| :---- | :---- | :---- | :---- |
| web-design | Web Design | web design \[city\] | £1,500 – £8,000 |
| ai-websites | AI Websites | ai website \[city\] | £2,500 – £12,000 |
| ecommerce | E-Commerce | ecommerce website \[city\] | £3,000 – £15,000 |
| seo | SEO | seo agency \[city\] | £500/mo – £3,000/mo |
| ai-seo | AI SEO | ai seo \[city\] | £800/mo – £4,000/mo |
| ai-agents | AI Agents | ai agents \[city\] | £5,000 – £25,000 |

## **Data for all 20 cities — key numbers**

Use this table to fill in the city JSON files. For any missing fields, use Google and the sources listed below.

| City | Region | Population | Primary Industry | Businesses (approx) |
| :---- | :---- | :---- | :---- | :---- |
| Sheffield | South Yorkshire | 590,000 | Manufacturing, Digital | 28,000 |
| Leeds | West Yorkshire | 800,000 | Finance, Fashion, Legal | 42,000 |
| Manchester | Greater Manchester | 560,000 | Tech, Media, Finance | 55,000 |
| Birmingham | West Midlands | 1,140,000 | Manufacturing, Retail | 60,000 |
| Bristol | South West | 470,000 | Aerospace, Tech, Creative | 25,000 |
| Edinburgh | Scotland | 540,000 | Finance, Tourism, Tech | 30,000 |
| Nottingham | East Midlands | 330,000 | Retail, Healthcare, Education | 18,000 |
| Leicester | East Midlands | 370,000 | Textiles, Food, Logistics | 19,000 |
| Liverpool | Merseyside | 500,000 | Port, Hospitality, Creative | 22,000 |
| Cardiff | Wales | 370,000 | Public Sector, Media | 17,000 |
| Glasgow | Scotland | 630,000 | Finance, Engineering, Creative | 35,000 |
| Newcastle | Tyne & Wear | 300,000 | Tech, Healthcare, Energy | 16,000 |
| Southampton | Hampshire | 250,000 | Maritime, Retail, Education | 14,000 |
| Brighton | East Sussex | 230,000 | Creative, Tech, Tourism | 16,000 |
| Oxford | Oxfordshire | 160,000 | Education, Research, Biotech | 10,000 |
| Cambridge | Cambridgeshire | 130,000 | Tech, Research, Finance | 10,000 |
| Derby | Derbyshire | 260,000 | Manufacturing, Rail, Aerospace | 12,000 |
| Coventry | West Midlands | 370,000 | Automotive, Education, Tech | 15,000 |
| Hull | East Yorkshire | 260,000 | Port, Energy, Food | 11,000 |
| Plymouth | Devon | 260,000 | Maritime, Defence, Tourism | 11,000 |

## **Where to find missing data**

* Population & businesses: ons.gov.uk (search "population estimates \[city\]")

* Key employers: Wikipedia page for the city, look for "Economy" section

* Local agencies: Google "\[city\] web design agency" and note the top 3 results

* Average agency pricing: Google "\[city\] web design cost" and check 3–5 local agency websites

* City news hook: Google "\[city\] business news 2024 2025" and pick the biggest investment story

## **The index.ts file — how to write it**

This file brings all the JSON files together and adds TypeScript types so the code is safe and easy to use.

// data/index.ts// \--- TYPES \---export interface CityData {  slug: string  name: string  region: string  country: string  population: number  businesses: number  gdpBn: number  primaryIndustries: string\[\]  keyEmployers: string\[\]  avgAgencyPricing: {    webDesign: number    ecommerce: number    seo: number    aiAgents: number  }  localAgencies: {    \[serviceSlug: string\]: string\[\]  }  keyStats: {    digitalBusinessGrowth: string    smeCount: number    techJobs: number    avgSalary: number  }  cityAreas: string\[\]  newsHook: string  coordinates: {    lat: number    lng: number  }}export interface ServiceData {  slug: string  name: string  tagline: string  shortDescription: string  primaryKeyword: string  secondaryKeywords: string\[\]  heroHeadline: string  pricingRange: {    min: number    max: number    currency: string  }  localAvgMultiplier: number  deliveryWeeks: {    standard: number    express: number  }  techStack: string\[\]  relatedServices: string\[\]  platforms: string\[\]}// \--- DATA IMPORTS \---import leeds from './cities/leeds.json'import manchester from './cities/manchester.json'import birmingham from './cities/birmingham.json'import bristol from './cities/bristol.json'import edinburgh from './cities/edinburgh.json'import sheffield from './cities/sheffield.json'import nottingham from './cities/nottingham.json'import leicester from './cities/leicester.json'import liverpool from './cities/liverpool.json'import cardiff from './cities/cardiff.json'import glasgow from './cities/glasgow.json'import newcastle from './cities/newcastle.json'import southampton from './cities/southampton.json'import brighton from './cities/brighton.json'import oxford from './cities/oxford.json'import cambridge from './cities/cambridge.json'import derby from './cities/derby.json'import coventry from './cities/coventry.json'import hull from './cities/hull.json'import plymouth from './cities/plymouth.json'import webDesign from './services/web-design.json'import aiWebsites from './services/ai-websites.json'import ecommerce from './services/ecommerce.json'import seo from './services/seo.json'import aiSeo from './services/ai-seo.json'import aiAgents from './services/ai-agents.json'// \--- EXPORTS \---export const cities: CityData\[\] \= \[  leeds, manchester, birmingham, bristol, edinburgh,  sheffield, nottingham, leicester, liverpool, cardiff,  glasgow, newcastle, southampton, brighton, oxford,  cambridge, derby, coventry, hull, plymouth\] as CityData\[\]export const services: ServiceData\[\] \= \[  webDesign, aiWebsites, ecommerce, seo, aiSeo, aiAgents\] as ServiceData\[\]// Helper functionsexport const getCityBySlug \= (slug: string): CityData | undefined \=\>  cities.find(c \=\> c.slug \=== slug)export const getServiceBySlug \= (slug: string): ServiceData | undefined \=\>  services.find(s \=\> s.slug \=== slug)

## **How to use Claude Code for Task 1**

Open Claude Code in your terminal (run: claude) and paste this prompt:

I am working on a Next.js 15 project at \~/Downloads/FactoryJet Website/factoryjet-uk-pagesPlease create a new folder called "data" at the root of the project.Inside data/, create two folders: "cities/" and "services/".Then create a file called data/cities/leeds.json with this exact content:\[PASTE THE LEEDS JSON FROM THIS DOCUMENT\]Then do the same for manchester.json using this data:- slug: "manchester"- name: "Manchester"- region: "Greater Manchester"- population: 560000- businesses: 55000- primaryIndustries: \["Technology", "Media", "Financial Services", "Creative Industries"\]- keyEmployers: \["BBC", "ITV", "AstraZeneca", "Co-op", "Autotrader"\]- newsHook: "MediaCityUK expansion brings 3,000 media and tech jobs to Salford Quays"\[Continue with remaining fields...\]Please create all 20 city files and all 6 service files following the exact JSON schema I have provided.

**⚡  Pro tip:**

Claude Code can create multiple JSON files in one go. Give it 5 cities at a time with their data and it will create all files correctly. This is much faster than doing them one by one.

## **Task 1 — Done checklist**

| ☐ | 20 city JSON files exist in data/cities/ |
| :---- | :---- |
| ☐ | 6 service JSON files exist in data/services/ |
| ☐ | data/index.ts exists with all imports, types, and helper functions |
| ☐ | All JSON files have ALL required fields — no empty strings, no placeholder text |
| ☐ | Run: npx tsc \--noEmit — zero TypeScript errors |
| ☐ | Every city has real local agency names (researched on Google, not made up) |

**TASK 2**

# **Task 2 — Build the Next.js Page Routes**

Now we tell Next.js how to turn the data files into real web pages. Think of it like a stamp — one stamp design, press it 500 times with different city/service data, get 500 unique pages.

This task must be done AFTER Task 1 is complete for at least the first 5 cities.

## **What is generateStaticParams?**

This is a special Next.js function. It tells the website: "Here is a list of all the pages you need to build." Next.js then builds all of them when you run the build command.

Without this function, Next.js does not know which pages to create. With it, it will build all 500+ pages automatically every time you deploy.

## **The exact folder structure to create**

Inside the existing app/ folder, create these new files:

app/└── uk/    ├── \[city\]/    │   ├── page.tsx                    ← City Hub page    │   └── \[service\]/    │       ├── page.tsx                ← City × Service page (main pages)    │       └── \[platform\]/    │           └── page.tsx            ← e.g. Leeds Shopify Developer

## **File 1 — app/uk/\[city\]/\[service\]/page.tsx (most important file)**

Copy this code exactly. Do not change anything except understanding what it does.

// app/uk/\[city\]/\[service\]/page.tsximport { cities, services, getCityBySlug, getServiceBySlug } from '@/data/index'import { notFound } from 'next/navigation'// This tells Next.js: "Build a page for EVERY city \+ service combination"export async function generateStaticParams() {  return cities.flatMap(city \=\>    services.map(service \=\> ({      city: city.slug,      service: service.slug    }))  )}// This creates a unique title and description for each pageexport async function generateMetadata({  params}: {  params: Promise\<{ city: string; service: string }\>}) {  const { city: citySlug, service: serviceSlug } \= await params  const city \= getCityBySlug(citySlug)  const service \= getServiceBySlug(serviceSlug)  if (\!city || \!service) return {}  return {    title: \`${service.name} in ${city.name} | FactoryJet — AI-Native Web Agency\`,    description: \`Award-winning ${service.name.toLowerCase()} agency in ${city.name}. ${service.tagline}. 50-60% below local agency rates. Free quote today.\`,    alternates: {      canonical: \`https://factoryjet.com/uk/${city.slug}/${service.slug}\`    },    openGraph: {      title: \`${service.name} ${city.name} | FactoryJet\`,      description: \`AI-native ${service.name.toLowerCase()} for ${city.name} businesses.\`,      url: \`https://factoryjet.com/uk/${city.slug}/${service.slug}\`,    }  }}// The actual page componentexport default async function CityServicePage({  params}: {  params: Promise\<{ city: string; service: string }\>}) {  const { city: citySlug, service: serviceSlug } \= await params  const city \= getCityBySlug(citySlug)  const service \= getServiceBySlug(serviceSlug)  // If the URL does not match any city or service, show 404  if (\!city || \!service) notFound()  return (    \<main\>      {/\* PLACEHOLDER — Bhavesh will replace this with the real design \*/}      \<div style={{ padding: '40px', fontFamily: 'Arial' }}\>        \<p style={{ color: '\#0052CC', fontWeight: 'bold' }}\>          ✅ Route working: {service.name} in {city.name}        \</p\>        \<p\>URL: /uk/{city.slug}/{service.slug}\</p\>        \<p\>Population: {city.population.toLocaleString()}\</p\>        \<p\>Industries: {city.primaryIndustries.join(', ')}\</p\>      \</div\>    \</main\>  )}

## **File 2 — app/uk/\[city\]/page.tsx (City Hub page)**

// app/uk/\[city\]/page.tsximport { cities, services, getCityBySlug } from '@/data/index'import { notFound } from 'next/navigation'import Link from 'next/link'export async function generateStaticParams() {  return cities.map(city \=\> ({ city: city.slug }))}export async function generateMetadata({  params}: {  params: Promise\<{ city: string }\>}) {  const { city: citySlug } \= await params  const city \= getCityBySlug(citySlug)  if (\!city) return {}  return {    title: \`Web Design & Digital Agency in ${city.name} | FactoryJet\`,    description: \`FactoryJet serves ${city.name} businesses with web design, AI websites, ecommerce, SEO, and AI agents. ${city.businesses.toLocaleString()}+ local businesses. Free consultation.\`,    alternates: { canonical: \`https://factoryjet.com/uk/${city.slug}\` }  }}export default async function CityHubPage({  params}: {  params: Promise\<{ city: string }\>}) {  const { city: citySlug } \= await params  const city \= getCityBySlug(citySlug)  if (\!city) notFound()  return (    \<main\>      {/\* PLACEHOLDER \*/}      \<div style={{ padding: '40px', fontFamily: 'Arial' }}\>        \<p style={{ color: '\#0052CC', fontWeight: 'bold' }}\>          ✅ City Hub: {city.name}        \</p\>        \<p\>Region: {city.region}\</p\>        \<p\>Services available:\</p\>        \<ul\>          {services.map(s \=\> (            \<li key={s.slug}\>              \<a href={\`/uk/${city.slug}/${s.slug}\`}\>                {s.name} in {city.name}              \</a\>            \</li\>          ))}        \</ul\>      \</div\>    \</main\>  )}

## **File 3 — app/uk/\[city\]/\[service\]/\[platform\]/page.tsx**

// app/uk/\[city\]/\[service\]/\[platform\]/page.tsximport { cities, services, getCityBySlug, getServiceBySlug } from '@/data/index'import { notFound } from 'next/navigation'// All platforms that have their own pagesconst platforms \= \['shopify', 'woocommerce', 'webflow', 'wordpress', 'nextjs', 'framer'\]export async function generateStaticParams() {  return cities.flatMap(city \=\>    services.flatMap(service \=\>      (service.platforms || \[\])        .filter(p \=\> platforms.includes(p))        .map(platform \=\> ({          city: city.slug,          service: service.slug,          platform        }))    )  )}export async function generateMetadata({  params}: {  params: Promise\<{ city: string; service: string; platform: string }\>}) {  const { city: citySlug, service: serviceSlug, platform } \= await params  const city \= getCityBySlug(citySlug)  const service \= getServiceBySlug(serviceSlug)  if (\!city || \!service) return {}  const platformName \= platform.charAt(0).toUpperCase() \+ platform.slice(1)  return {    title: \`${platformName} Developer in ${city.name} | FactoryJet\`,    description: \`Expert ${platformName} development in ${city.name}. ${service.tagline}. Get a free quote today.\`,    alternates: { canonical: \`https://factoryjet.com/uk/${city.slug}/${service.slug}/${platform}\` }  }}export default async function PlatformCityPage({  params}: {  params: Promise\<{ city: string; service: string; platform: string }\>}) {  const { city: citySlug, service: serviceSlug, platform } \= await params  const city \= getCityBySlug(citySlug)  const service \= getServiceBySlug(serviceSlug)  if (\!city || \!service) notFound()  const platformName \= platform.charAt(0).toUpperCase() \+ platform.slice(1)  return (    \<main\>      {/\* PLACEHOLDER \*/}      \<div style={{ padding: '40px', fontFamily: 'Arial' }}\>        \<p style={{ color: '\#0052CC', fontWeight: 'bold' }}\>          ✅ Platform page: {platformName} developer in {city.name}        \</p\>        \<p\>URL: /uk/{city.slug}/{service.slug}/{platform}\</p\>      \</div\>    \</main\>  )}

## **How to check everything is working**

1. 

cd \~/Downloads/FactoryJet\\ Website/factoryjet-uk-pages

1. Run the development server:

npm run dev

2. Open your browser and go to:

http://localhost:3000/uk/leeds/web-design

3. You should see a page with green text saying "✅ Route working: Web Design in Leeds"

4. Also check: http://localhost:3000/uk/manchester/ai-agents

5. Then run the build to count how many pages were created:

npm run build

6. In the build output, look for lines like "○ /uk/\[city\]/\[service\]" — you should see 120+ static pages listed.

## **How to use Claude Code for Task 2**

I am working on a Next.js 15 project. The data layer is already built at data/index.tswith CityData and ServiceData types, 20 cities, and 6 services.Please create these three files exactly as I describe:1. app/uk/\[city\]/\[service\]/page.tsx   \- generateStaticParams: return all city × service combinations from the data   \- generateMetadata: unique title "\[Service\] in \[City\] | FactoryJet — AI-Native Web Agency"   \- Page component: placeholder div with green text showing the city and service name   \- Handle params as Promise\<{ city: string; service: string }\> (Next.js 15 style)   \- Use notFound() if city or service slug not found in data2. app/uk/\[city\]/page.tsx     \- Same pattern but just for city hubs   \- Show list of all services with links to each city+service page3. app/uk/\[city\]/\[service\]/\[platform\]/page.tsx   \- generateStaticParams: return combinations where platform is in the service's platforms array   \- Same metadata and placeholder patternAfter creating all three files, please also check if next.config.ts needs any updatesto handle the dynamic routes correctly.

## **Task 2 — Done checklist**

| ☐ | app/uk/\[city\]/\[service\]/page.tsx exists with generateStaticParams and generateMetadata |
| :---- | :---- |
| ☐ | app/uk/\[city\]/page.tsx exists |
| ☐ | app/uk/\[city\]/\[service\]/\[platform\]/page.tsx exists |
| ☐ | npm run dev — visit /uk/leeds/web-design — page shows correctly |
| ☐ | npm run dev — visit /uk/manchester/ai-agents — page shows correctly |
| ☐ | npm run build — shows 120+ static pages with no errors |
| ☐ | npx tsc \--noEmit — zero TypeScript errors |
| ☐ | Each page has a unique meta title (check: view source in browser, look for \<title\> tag) |

**TASK 3**

# **Task 3 — Sitemaps \+ robots.txt \+ Cloudflare Fix**

This task has three parts. You can do all three at the same time as Task 1 — you do not need the pages to be built first.

Think of a sitemap like a map you give to Google. It says: "Here is a list of all our pages, please go and index them all." Without a sitemap, Google might miss hundreds of our pages.

## **Part 3A — Build the sitemap files**

We will create 3 sitemap files in Next.js. These will automatically update every time new cities or services are added.

### **File 1 — app/sitemap-services.xml/route.ts**

// app/sitemap-services.xml/route.tsimport { cities, services } from '@/data/index'function generateSitemapXML(entries: {  url: string  lastModified: string  changeFrequency: string  priority: number}\[\]) {  const items \= entries.map(e \=\> \`  \<url\>    \<loc\>${e.url}\</loc\>    \<lastmod\>${e.lastModified}\</lastmod\>    \<changefreq\>${e.changeFrequency}\</changefreq\>    \<priority\>${e.priority}\</priority\>  \</url\>\`).join('')  return \`\<?xml version="1.0" encoding="UTF-8"?\>\<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\>${items}\</urlset\>\`}export async function GET() {  const today \= new Date().toISOString().split('T')\[0\]  const entries \= cities.flatMap(city \=\>    services.map(service \=\> ({      url: \`https://factoryjet.com/uk/${city.slug}/${service.slug}\`,      lastModified: today,      changeFrequency: 'monthly',      priority: 0.8    }))  )  return new Response(generateSitemapXML(entries), {    headers: {      'Content-Type': 'application/xml',      'Cache-Control': 'public, max-age=3600'    }  })}

### **File 2 — app/sitemap-cities.xml/route.ts**

// app/sitemap-cities.xml/route.tsimport { cities } from '@/data/index'// Copy the generateSitemapXML function from the file above// (or move it to a shared lib/sitemap.ts helper)export async function GET() {  const today \= new Date().toISOString().split('T')\[0\]  const entries \= cities.map(city \=\> ({    url: \`https://factoryjet.com/uk/${city.slug}\`,    lastModified: today,    changeFrequency: 'monthly' as const,    priority: 0.9   // City hubs get higher priority than service pages  }))  return new Response(generateSitemapXML(entries), {    headers: { 'Content-Type': 'application/xml' }  })}

### **File 3 — app/sitemap-index.xml/route.ts (the master sitemap)**

// app/sitemap-index.xml/route.ts// This file points Google to all the other sitemapsexport async function GET() {  const baseUrl \= 'https://factoryjet.com'  const today \= new Date().toISOString().split('T')\[0\]  const sitemaps \= \[    'sitemap-cities.xml',    'sitemap-services.xml'  \]  const xml \= \`\<?xml version="1.0" encoding="UTF-8"?\>\<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\>${sitemaps.map(s \=\> \`  \<sitemap\>    \<loc\>${baseUrl}/${s}\</loc\>    \<lastmod\>${today}\</lastmod\>  \</sitemap\>\`).join('\\n')}\</sitemapindex\>\`  return new Response(xml, {    headers: { 'Content-Type': 'application/xml' }  })}

**✅  How to test the sitemaps:**

Run npm run dev, then open: http://localhost:3000/sitemap-services.xml — you should see XML with 120 URLs listed. If you see XML, it is working.

## **Part 3B — Update robots.txt**

The robots.txt file tells web crawlers (including AI bots) which pages they are allowed to visit. Right now, Cloudflare is blocking AI bots, so this file is extra important to get right.

Find or create the file: public/robots.txt in the project folder. Replace all its contents with this:

\# FactoryJet Technologies — robots.txt\# Last updated: April 2025\# Allow all standard search enginesUser-agent: \*Allow: /Disallow: /api/Disallow: /\_next/\# Allow OpenAI (ChatGPT Search)User-agent: GPTBotAllow: /\# Allow Anthropic (Claude)User-agent: ClaudeBotAllow: /User-agent: anthropic-aiAllow: /\# Allow Perplexity AIUser-agent: PerplexityBotAllow: /\# Allow Google AI OverviewUser-agent: Google-ExtendedAllow: /\# Allow Meta AIUser-agent: FacebookBotAllow: /\# Sitemap locationsSitemap: https://factoryjet.com/sitemap-index.xmlSitemap: https://factoryjet.com/sitemap-cities.xmlSitemap: https://factoryjet.com/sitemap-services.xml

**💡  Why do we need this?**

ChatGPT Search, Perplexity, and Claude all crawl websites to learn about businesses. If we block them, FactoryJet will never appear in AI-powered search results. This is the "GEO" (Generative Engine Optimisation) strategy.

## **Part 3C — Fix Cloudflare Bot Fight Mode**

This is the most important fix. Cloudflare's "Bot Fight Mode" is currently blocking AI crawlers from visiting the website. Even if robots.txt allows them, Cloudflare blocks them before they even get to see robots.txt.

You need to log into the Cloudflare dashboard and add 5 bypass rules.

### **Step-by-step Cloudflare instructions**

2. 

1. Click on the domain: factoryjet.com (or the UK domain if it is separate).

2. In the left menu, click "Security" → then click "WAF" (Web Application Firewall).

3. Click the "Custom rules" tab at the top.

4. Click "Create rule". You will create 5 rules total — one for each AI bot.

### **How to fill in each rule**

For each rule, the settings are the same pattern. Here is the exact format:

| Rule name | Field | Value | Action |
| :---- | :---- | :---- | :---- |
| Allow GPTBot | User Agent | contains  GPTBot | Skip → Bot Fight Mode |
| Allow ClaudeBot | User Agent | contains  ClaudeBot | Skip → Bot Fight Mode |
| Allow anthropic-ai | User Agent | contains  anthropic-ai | Skip → Bot Fight Mode |
| Allow PerplexityBot | User Agent | contains  PerplexityBot | Skip → Bot Fight Mode |
| Allow Google-Extended | User Agent | contains  Google-Extended | Skip → Bot Fight Mode |

5. **IMPORTANT:** For the "Action" field, set it to "Skip" and then tick the checkbox that says "Bot Fight Mode". This means: skip the bot blocking only for this specific bot, but keep all other protections on.

6. After creating all 5 rules, click "Deploy" or "Save" on each one.

7. Create a file called CLOUDFLARE\_SETUP.md in the root of the project. Write down the Rule ID that Cloudflare gives each rule (it looks like a long code). This is so we can repeat the same setup for Australia domain later.

### **The CLOUDFLARE\_SETUP.md file should look like this:**

\# Cloudflare Bot Fight Mode — WAF Bypass Rules\# Domain: factoryjet.com\# Last updated: \[DATE YOU DID THIS\]\#\# Why these rules existThese rules allow AI search crawlers (ChatGPT, Claude, Perplexity) to crawlthe website. Without them, Cloudflare blocks these bots and FactoryJet doesnot appear in AI-powered search results.\#\# Rules created| Bot | User Agent String | Rule ID | Date Created ||-----|-------------------|---------|--------------|| OpenAI ChatGPT | GPTBot | \[PASTE ID HERE\] | \[DATE\] || Anthropic Claude | ClaudeBot | \[PASTE ID HERE\] | \[DATE\] || Anthropic Claude (2) | anthropic-ai | \[PASTE ID HERE\] | \[DATE\] || Perplexity AI | PerplexityBot | \[PASTE ID HERE\] | \[DATE\] || Google AI Overview | Google-Extended | \[PASTE ID HERE\] | \[DATE\] |\#\# How to repeat this for a new domain1. Log into dash.cloudflare.com2. Select the new domain3. Security → WAF → Custom rules4. Create the same 5 rules using the table above5. Action: Skip → Bot Fight Mode6. Update this file with the new rule IDs

## **How to use Claude Code for Task 3**

I am working on a Next.js 15 TypeScript project.The data layer is at data/index.ts and exports cities\[\] and services\[\].Please create these 3 route files for dynamic XML sitemaps:1. app/sitemap-services.xml/route.ts   \- GET handler that returns XML   \- One \<url\> entry per city × service combination   \- URL format: https://factoryjet.com/uk/{city.slug}/{service.slug}   \- priority: 0.8, changeFrequency: monthly   \- Content-Type: application/xml2. app/sitemap-cities.xml/route.ts   \- One \<url\> entry per city hub page   \- URL format: https://factoryjet.com/uk/{city.slug}   \- priority: 0.9, changeFrequency: monthly3. app/sitemap-index.xml/route.ts   \- References the two sitemaps above   \- Returns a sitemap index XML documentAlso please create or update public/robots.txt to allow these user agents:GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-ExtendedEach should have their own User-agent block with Allow: /Include Sitemap: https://factoryjet.com/sitemap-index.xml at the bottom.

## **Task 3 — Done checklist**

| ☐ | app/sitemap-services.xml/route.ts created and tested (visit /sitemap-services.xml locally) |
| :---- | :---- |
| ☐ | app/sitemap-cities.xml/route.ts created and tested |
| ☐ | app/sitemap-index.xml/route.ts created and tested |
| ☐ | public/robots.txt updated with all 5 AI bot user-agents |
| ☐ | Cloudflare: 5 WAF bypass rules created for GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended |
| ☐ | CLOUDFLARE\_SETUP.md created with all rule IDs documented |
| ☐ | Sitemap XML is valid — test at: https://www.xml-sitemaps.com/validate-xml-sitemap.html |

# **When You Are Done — How to Report Back**

When all 3 tasks are complete, send Bhavesh a message with these exact things:

* Screenshot of npm run build output showing the total number of static pages generated

* Screenshot of http://localhost:3000/uk/leeds/web-design showing the placeholder page

* Screenshot of http://localhost:3000/sitemap-services.xml showing the XML

* Screenshot of the 5 Cloudflare WAF rules in the dashboard

* A message saying: "TypeScript: 0 errors. Build: success. X static pages generated."

**🏁  That is it\!**

Once these 3 tasks are done, Bhavesh will slot in the real page design (the CityServicePage component) and the site will be ready to launch UK Google Ads campaigns.

## **If you get stuck**

* Copy the error message and paste it into Claude Code — it will fix it

* If Claude Code gives wrong code, paste the error back in and say "this gave an error, please fix it"

* For Cloudflare questions, ask Bhavesh for the account login — do not guess

* If a city's data is hard to find online, put your best estimate and mark it with a comment in the JSON like: "// TODO: verify this number"

FACTORYJET TECHNOLOGIES  ·  factoryjet.com  ·  connect@factoryjet.com

**Good luck\! You have Claude Code PRO — use it for everything.**