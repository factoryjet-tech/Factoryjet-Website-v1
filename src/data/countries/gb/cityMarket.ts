// GENERATED FILE. Do not edit by hand.
// Source:    pipeline/research/data/uk_city_depth.json
// Generator: scripts/gen-uk-city-market.mjs
//
// Real search data for the 15 dynamic /uk/{city} roots, pulled from DataForSEO
// (UK location 2826, en). Everything here is measured, not authored.
//
//  - `terms`       city-level service keywords that returned real monthly volume
//  - `paa`         People Also Ask, verbatim from the live SERP. Present for only
//                  5 of 15 cities because Google does not show a PAA block for
//                  every city query. Cities without one render no PAA section
//                  rather than borrowing another city's questions.
//  - `competitors` agencies actually ranking for "web design {city}", with their
//                  absolute SERP position. Directories, marketplaces and social
//                  platforms are filtered out; these are real local competitors.
//
// CPC is deliberately absent: the endpoint does not return an unambiguous
// currency and a wrong symbol on a live page is worse than no figure.

export interface CityMarketTerm { keyword: string; volume: number; competition: 'low' | 'medium' | 'high' | 'unknown' }
export interface CityMarketCompetitor { domain: string; rank: number }
export interface CityMarket {
  terms: CityMarketTerm[]
  paa: { q: string }[]
  competitors: CityMarketCompetitor[]
}

export const CITY_MARKET: Record<string, CityMarket> = {
  "brighton": {
    "terms": [
      {
        "keyword": "seo Brighton",
        "volume": 2900,
        "competition": "low"
      },
      {
        "keyword": "web design Brighton",
        "volume": 480,
        "competition": "low"
      },
      {
        "keyword": "website design Brighton",
        "volume": 480,
        "competition": "low"
      },
      {
        "keyword": "web designer Brighton",
        "volume": 480,
        "competition": "low"
      },
      {
        "keyword": "seo agency Brighton",
        "volume": 260,
        "competition": "low"
      },
      {
        "keyword": "digital agency Brighton",
        "volume": 110,
        "competition": "low"
      },
      {
        "keyword": "web design agency Brighton",
        "volume": 90,
        "competition": "low"
      },
      {
        "keyword": "web development Brighton",
        "volume": 40,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Brighton",
        "volume": 10,
        "competition": "low"
      }
    ],
    "paa": [],
    "competitors": [
      {
        "domain": "webdesignbyian.com",
        "rank": 5
      },
      {
        "domain": "alpha-net.co.uk",
        "rank": 6
      },
      {
        "domain": "moocowmedia.co.uk",
        "rank": 7
      },
      {
        "domain": "brighton-website-design.co.uk",
        "rank": 8
      },
      {
        "domain": "oandg.co.uk",
        "rank": 9
      }
    ]
  },
  "bristol": {
    "terms": [
      {
        "keyword": "web design Bristol",
        "volume": 1900,
        "competition": "low"
      },
      {
        "keyword": "website design Bristol",
        "volume": 1900,
        "competition": "low"
      },
      {
        "keyword": "web designer Bristol",
        "volume": 1900,
        "competition": "low"
      },
      {
        "keyword": "seo agency Bristol",
        "volume": 720,
        "competition": "low"
      },
      {
        "keyword": "seo Bristol",
        "volume": 480,
        "competition": "low"
      },
      {
        "keyword": "digital agency Bristol",
        "volume": 390,
        "competition": "low"
      },
      {
        "keyword": "web design agency Bristol",
        "volume": 320,
        "competition": "low"
      },
      {
        "keyword": "web development Bristol",
        "volume": 170,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Bristol",
        "volume": 50,
        "competition": "low"
      }
    ],
    "paa": [
      {
        "q": "What is the average charge for a website design?"
      },
      {
        "q": "Is web design still in demand in 2026?"
      },
      {
        "q": "Is AI replacing web design?"
      },
      {
        "q": "How much do web designers charge in the UK?"
      },
      {
        "q": "Can ChatGPT actually create a website?"
      },
      {
        "q": "Is 40 too old to become a web developer?"
      }
    ],
    "competitors": [
      {
        "domain": "wearegrizzly.com",
        "rank": 5
      },
      {
        "domain": "bristol-website-design.co.uk",
        "rank": 6
      },
      {
        "domain": "cliftonwebdesign.co.uk",
        "rank": 7
      },
      {
        "domain": "andy-gardner.co.uk",
        "rank": 8
      },
      {
        "domain": "webdesigncity.co.uk",
        "rank": 9
      }
    ]
  },
  "cambridge": {
    "terms": [
      {
        "keyword": "web design Cambridge",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "website design Cambridge",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "web designer Cambridge",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "seo Cambridge",
        "volume": 390,
        "competition": "low"
      },
      {
        "keyword": "seo agency Cambridge",
        "volume": 170,
        "competition": "low"
      },
      {
        "keyword": "web design agency Cambridge",
        "volume": 90,
        "competition": "low"
      },
      {
        "keyword": "digital agency Cambridge",
        "volume": 90,
        "competition": "low"
      },
      {
        "keyword": "web development Cambridge",
        "volume": 50,
        "competition": "low"
      }
    ],
    "paa": [],
    "competitors": [
      {
        "domain": "cambridgewebsitedesign.co.uk",
        "rank": 4
      },
      {
        "domain": "vividspace.co.uk",
        "rank": 5
      },
      {
        "domain": "mobas.com",
        "rank": 6
      },
      {
        "domain": "design-monkey.co.uk",
        "rank": 7
      },
      {
        "domain": "kisscom.co.uk",
        "rank": 8
      }
    ]
  },
  "cardiff": {
    "terms": [
      {
        "keyword": "web design Cardiff",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "website design Cardiff",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "web designer Cardiff",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "seo Cardiff",
        "volume": 480,
        "competition": "low"
      },
      {
        "keyword": "seo agency Cardiff",
        "volume": 320,
        "competition": "low"
      },
      {
        "keyword": "web design agency Cardiff",
        "volume": 140,
        "competition": "low"
      },
      {
        "keyword": "web development Cardiff",
        "volume": 70,
        "competition": "low"
      },
      {
        "keyword": "digital agency Cardiff",
        "volume": 50,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Cardiff",
        "volume": 10,
        "competition": "low"
      }
    ],
    "paa": [
      {
        "q": "How much do website designers usually charge?"
      },
      {
        "q": "Is web design still in demand in 2026?"
      },
      {
        "q": "How much would a web design cost?"
      },
      {
        "q": "What is the 3 second rule in website design?"
      },
      {
        "q": "How much should a full website design cost?"
      },
      {
        "q": "Is AI replacing web design?"
      }
    ],
    "competitors": [
      {
        "domain": "thewebdesignercardiff.co.uk",
        "rank": 5
      },
      {
        "domain": "rhyswelsh.com",
        "rank": 6
      },
      {
        "domain": "cardiff-web-design.co.uk",
        "rank": 7
      },
      {
        "domain": "nexmedia.co.uk",
        "rank": 8
      },
      {
        "domain": "itseeze-cardiff.co.uk",
        "rank": 12
      }
    ]
  },
  "coventry": {
    "terms": [
      {
        "keyword": "web design Coventry",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "website design Coventry",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "web designer Coventry",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "seo Coventry",
        "volume": 260,
        "competition": "low"
      },
      {
        "keyword": "seo agency Coventry",
        "volume": 70,
        "competition": "low"
      },
      {
        "keyword": "web design agency Coventry",
        "volume": 40,
        "competition": "low"
      },
      {
        "keyword": "web development Coventry",
        "volume": 40,
        "competition": "low"
      },
      {
        "keyword": "digital agency Coventry",
        "volume": 30,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Coventry",
        "volume": 10,
        "competition": "low"
      }
    ],
    "paa": [],
    "competitors": [
      {
        "domain": "direct-1st.com",
        "rank": 5
      },
      {
        "domain": "create-summit.com",
        "rank": 6
      },
      {
        "domain": "nettl.com",
        "rank": 7
      },
      {
        "domain": "headred.net",
        "rank": 8
      },
      {
        "domain": "essexinteractive.co.uk",
        "rank": 10
      }
    ]
  },
  "derby": {
    "terms": [
      {
        "keyword": "web design Derby",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "website design Derby",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "web designer Derby",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "seo Derby",
        "volume": 260,
        "competition": "low"
      },
      {
        "keyword": "seo agency Derby",
        "volume": 170,
        "competition": "low"
      },
      {
        "keyword": "web design agency Derby",
        "volume": 70,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Derby",
        "volume": 70,
        "competition": "low"
      },
      {
        "keyword": "web development Derby",
        "volume": 50,
        "competition": "low"
      },
      {
        "keyword": "digital agency Derby",
        "volume": 40,
        "competition": "low"
      }
    ],
    "paa": [],
    "competitors": [
      {
        "domain": "websitedesignderby.com",
        "rank": 1
      },
      {
        "domain": "littlefoxwebdesign.co.uk",
        "rank": 2
      },
      {
        "domain": "bluewhalemedia.co.uk",
        "rank": 3
      },
      {
        "domain": "derby-webdesign.co.uk",
        "rank": 4
      },
      {
        "domain": "vimanadigital.com",
        "rank": 5
      }
    ]
  },
  "edinburgh": {
    "terms": [
      {
        "keyword": "web design Edinburgh",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "website design Edinburgh",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "web designer Edinburgh",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "seo Edinburgh",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "seo agency Edinburgh",
        "volume": 480,
        "competition": "low"
      },
      {
        "keyword": "digital agency Edinburgh",
        "volume": 140,
        "competition": "low"
      },
      {
        "keyword": "web development Edinburgh",
        "volume": 70,
        "competition": "low"
      },
      {
        "keyword": "web design agency Edinburgh",
        "volume": 50,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Edinburgh",
        "volume": 40,
        "competition": "low"
      },
      {
        "keyword": "shopify developer Edinburgh",
        "volume": 10,
        "competition": "low"
      }
    ],
    "paa": [
      {
        "q": "How much should a full website design cost?"
      },
      {
        "q": "Is web design still in demand in 2026?"
      },
      {
        "q": "How much do website designers usually charge?"
      },
      {
        "q": "What is the 3 second rule in web design?"
      },
      {
        "q": "Can ChatGPT actually create a website?"
      },
      {
        "q": "Is AI replacing web design?"
      }
    ],
    "competitors": [
      {
        "domain": "speedypancake.co.uk",
        "rank": 5
      },
      {
        "domain": "borderwebworks.co.uk",
        "rank": 6
      },
      {
        "domain": "freakwebdesign.co.uk",
        "rank": 7
      },
      {
        "domain": "moowebdesign.com",
        "rank": 9
      },
      {
        "domain": "data-edinburgh.co.uk",
        "rank": 10
      }
    ]
  },
  "glasgow": {
    "terms": [
      {
        "keyword": "web design Glasgow",
        "volume": 1000,
        "competition": "low"
      },
      {
        "keyword": "website design Glasgow",
        "volume": 1000,
        "competition": "low"
      },
      {
        "keyword": "web designer Glasgow",
        "volume": 1000,
        "competition": "low"
      },
      {
        "keyword": "seo Glasgow",
        "volume": 720,
        "competition": "low"
      },
      {
        "keyword": "seo agency Glasgow",
        "volume": 260,
        "competition": "low"
      },
      {
        "keyword": "digital agency Glasgow",
        "volume": 260,
        "competition": "low"
      },
      {
        "keyword": "web design agency Glasgow",
        "volume": 90,
        "competition": "low"
      },
      {
        "keyword": "web development Glasgow",
        "volume": 50,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Glasgow",
        "volume": 10,
        "competition": "low"
      }
    ],
    "paa": [
      {
        "q": "How much should you pay for website design?"
      },
      {
        "q": "How much do website designers usually charge?"
      },
      {
        "q": "Is web design still in demand in 2026?"
      },
      {
        "q": "How much would a web design cost?"
      },
      {
        "q": "Can ChatGPT actually create a website?"
      },
      {
        "q": "How much should a full website design cost?"
      }
    ],
    "competitors": [
      {
        "domain": "glasgow-web-design.co.uk",
        "rank": 6
      },
      {
        "domain": "soapboxdigital.co.uk",
        "rank": 7
      },
      {
        "domain": "supersimplewebsites.co.uk",
        "rank": 8
      },
      {
        "domain": "jonathonmills.com",
        "rank": 9
      },
      {
        "domain": "webdesignsglasgow.co.uk",
        "rank": 10
      }
    ]
  },
  "hull": {
    "terms": [
      {
        "keyword": "web design Hull",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "website design Hull",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "web designer Hull",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "seo Hull",
        "volume": 140,
        "competition": "low"
      },
      {
        "keyword": "seo agency Hull",
        "volume": 70,
        "competition": "low"
      },
      {
        "keyword": "web design agency Hull",
        "volume": 40,
        "competition": "low"
      },
      {
        "keyword": "digital agency Hull",
        "volume": 30,
        "competition": "low"
      },
      {
        "keyword": "web development Hull",
        "volume": 30,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Hull",
        "volume": 10,
        "competition": "low"
      }
    ],
    "paa": [],
    "competitors": [
      {
        "domain": "getnoticedlocally.co.uk",
        "rank": 5
      },
      {
        "domain": "arrivaldesign.co.uk",
        "rank": 6
      },
      {
        "domain": "alphawebdesignhull.co.uk",
        "rank": 7
      },
      {
        "domain": "weborchard.co.uk",
        "rank": 8
      },
      {
        "domain": "buzz-webdesign.co.uk",
        "rank": 9
      }
    ]
  },
  "leicester": {
    "terms": [
      {
        "keyword": "web design Leicester",
        "volume": 1000,
        "competition": "low"
      },
      {
        "keyword": "website design Leicester",
        "volume": 1000,
        "competition": "low"
      },
      {
        "keyword": "web designer Leicester",
        "volume": 1000,
        "competition": "low"
      },
      {
        "keyword": "seo Leicester",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "seo agency Leicester",
        "volume": 320,
        "competition": "low"
      },
      {
        "keyword": "digital agency Leicester",
        "volume": 260,
        "competition": "low"
      },
      {
        "keyword": "web development Leicester",
        "volume": 90,
        "competition": "low"
      },
      {
        "keyword": "web design agency Leicester",
        "volume": 50,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Leicester",
        "volume": 30,
        "competition": "low"
      }
    ],
    "paa": [
      {
        "q": "How much would a web design cost?"
      },
      {
        "q": "Is web design still in demand in 2026?"
      },
      {
        "q": "What is the 3 second rule in web design?"
      },
      {
        "q": "Is AI replacing web design?"
      },
      {
        "q": "Can ChatGPT actually create a website?"
      },
      {
        "q": "How much do website designers charge per hour in the UK?"
      }
    ],
    "competitors": [
      {
        "domain": "itseeze-leicester.co.uk",
        "rank": 5
      },
      {
        "domain": "poddigital.co.uk",
        "rank": 6
      },
      {
        "domain": "webdesignersleicester.co.uk",
        "rank": 7
      },
      {
        "domain": "dotwall.co.uk",
        "rank": 8
      },
      {
        "domain": "kudosdesignswebsites.co.uk",
        "rank": 9
      }
    ]
  },
  "newcastle": {
    "terms": [
      {
        "keyword": "web design Newcastle",
        "volume": 1300,
        "competition": "low"
      },
      {
        "keyword": "website design Newcastle",
        "volume": 1300,
        "competition": "low"
      },
      {
        "keyword": "web designer Newcastle",
        "volume": 1300,
        "competition": "low"
      },
      {
        "keyword": "seo Newcastle",
        "volume": 480,
        "competition": "low"
      },
      {
        "keyword": "seo agency Newcastle",
        "volume": 480,
        "competition": "low"
      },
      {
        "keyword": "web design agency Newcastle",
        "volume": 210,
        "competition": "low"
      },
      {
        "keyword": "digital agency Newcastle",
        "volume": 210,
        "competition": "low"
      },
      {
        "keyword": "web development Newcastle",
        "volume": 110,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Newcastle",
        "volume": 10,
        "competition": "low"
      },
      {
        "keyword": "shopify developer Newcastle",
        "volume": 10,
        "competition": "low"
      }
    ],
    "paa": [],
    "competitors": [
      {
        "domain": "maddisoncreative.co.uk",
        "rank": 5
      },
      {
        "domain": "wesayhowhigh.com",
        "rank": 6
      },
      {
        "domain": "urbanriver.com",
        "rank": 7
      },
      {
        "domain": "ballsymedia.co.uk",
        "rank": 8
      },
      {
        "domain": "nclwebdesign.co.uk",
        "rank": 9
      }
    ]
  },
  "nottingham": {
    "terms": [
      {
        "keyword": "web design Nottingham",
        "volume": 1300,
        "competition": "low"
      },
      {
        "keyword": "website design Nottingham",
        "volume": 1300,
        "competition": "low"
      },
      {
        "keyword": "web designer Nottingham",
        "volume": 1300,
        "competition": "low"
      },
      {
        "keyword": "seo agency Nottingham",
        "volume": 480,
        "competition": "low"
      },
      {
        "keyword": "web design agency Nottingham",
        "volume": 390,
        "competition": "low"
      },
      {
        "keyword": "seo Nottingham",
        "volume": 390,
        "competition": "low"
      },
      {
        "keyword": "digital agency Nottingham",
        "volume": 260,
        "competition": "low"
      },
      {
        "keyword": "web development Nottingham",
        "volume": 210,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Nottingham",
        "volume": 140,
        "competition": "low"
      }
    ],
    "paa": [],
    "competitors": [
      {
        "domain": "nottinghamwebdesign.com",
        "rank": 5
      },
      {
        "domain": "creative-asset.co.uk",
        "rank": 6
      },
      {
        "domain": "fifteendesign.co.uk",
        "rank": 7
      },
      {
        "domain": "localexposure.co.uk",
        "rank": 8
      },
      {
        "domain": "chrisficklingdesign.co.uk",
        "rank": 9
      }
    ]
  },
  "oxford": {
    "terms": [
      {
        "keyword": "web design Oxford",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "website design Oxford",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "web designer Oxford",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "seo Oxford",
        "volume": 320,
        "competition": "low"
      },
      {
        "keyword": "seo agency Oxford",
        "volume": 320,
        "competition": "low"
      },
      {
        "keyword": "web design agency Oxford",
        "volume": 260,
        "competition": "low"
      },
      {
        "keyword": "web development Oxford",
        "volume": 170,
        "competition": "low"
      },
      {
        "keyword": "digital agency Oxford",
        "volume": 140,
        "competition": "low"
      },
      {
        "keyword": "shopify developer Oxford",
        "volume": 10,
        "competition": "low"
      }
    ],
    "paa": [],
    "competitors": [
      {
        "domain": "xist2.com",
        "rank": 5
      },
      {
        "domain": "rareformnewmedia.com",
        "rank": 6
      },
      {
        "domain": "swankypixels.com",
        "rank": 7
      },
      {
        "domain": "oxford-web.co.uk",
        "rank": 8
      },
      {
        "domain": "beyondyourbrand.co.uk",
        "rank": 9
      }
    ]
  },
  "plymouth": {
    "terms": [
      {
        "keyword": "web design Plymouth",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "web designer Plymouth",
        "volume": 590,
        "competition": "low"
      },
      {
        "keyword": "seo Plymouth",
        "volume": 260,
        "competition": "low"
      },
      {
        "keyword": "seo agency Plymouth",
        "volume": 210,
        "competition": "low"
      },
      {
        "keyword": "web development Plymouth",
        "volume": 110,
        "competition": "low"
      },
      {
        "keyword": "website design Plymouth",
        "volume": 90,
        "competition": "low"
      },
      {
        "keyword": "web design agency Plymouth",
        "volume": 70,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Plymouth",
        "volume": 10,
        "competition": "unknown"
      },
      {
        "keyword": "digital agency Plymouth",
        "volume": 10,
        "competition": "low"
      }
    ],
    "paa": [],
    "competitors": [
      {
        "domain": "davehallett.net",
        "rank": 4
      },
      {
        "domain": "webdesignandseocompany.co.uk",
        "rank": 5
      },
      {
        "domain": "nettl.com",
        "rank": 6
      },
      {
        "domain": "blueskywebdesign.co.uk",
        "rank": 7
      },
      {
        "domain": "fourdegreeswest.co.uk",
        "rank": 8
      }
    ]
  },
  "southampton": {
    "terms": [
      {
        "keyword": "web design Southampton",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "website design Southampton",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "web designer Southampton",
        "volume": 880,
        "competition": "low"
      },
      {
        "keyword": "seo agency Southampton",
        "volume": 320,
        "competition": "low"
      },
      {
        "keyword": "seo Southampton",
        "volume": 260,
        "competition": "low"
      },
      {
        "keyword": "web design agency Southampton",
        "volume": 140,
        "competition": "low"
      },
      {
        "keyword": "digital agency Southampton",
        "volume": 110,
        "competition": "low"
      },
      {
        "keyword": "web development Southampton",
        "volume": 70,
        "competition": "low"
      },
      {
        "keyword": "ecommerce website design Southampton",
        "volume": 10,
        "competition": "unknown"
      }
    ],
    "paa": [],
    "competitors": [
      {
        "domain": "webdesignsouthampton.co.uk",
        "rank": 5
      },
      {
        "domain": "southampton-web-design.co.uk",
        "rank": 6
      },
      {
        "domain": "freestyle.digital",
        "rank": 7
      },
      {
        "domain": "boxchilli.com",
        "rank": 8
      },
      {
        "domain": "rubberduckers.co.uk",
        "rank": 9
      }
    ]
  }
}

export const getCityMarket = (slug: string): CityMarket | undefined => CITY_MARKET[slug]
