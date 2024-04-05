// As a temporary solution until instrument tables are properly integrated into contentful,
// we will use this file to define the mappings for the instrument tables based off the "Type" selected in contentful.

import {
  ColumnMapping,
  InstrumentMapping,
  SearchType,
} from "@/components/_unused/tables/InstrumentTable/InstrumentTableTypes";

type contentfulInstrumentMapping = {
  columns: ColumnMapping[];
  instruments: InstrumentMapping[];
  loadMoreEnabled: boolean;
  searchEnabled: boolean;
  searchType?: SearchType;
  searchPlaceHolderText?: string;
  instrumentTooltips?: Array<{
    apiCode: string;
    description: string;
  }>;
};

type InstrumentMappings = {
  [key: string]: contentfulInstrumentMapping;
};

export const instrumentMappings: InstrumentMappings = {
  Indices: {
    columns: [
      { name: "Product" },
      { name: "Min Spread" },
      { name: "Margin" },
      { name: "Price" },
      { name: "Day" },
      { name: "Week" },
      { name: "Trend" },
      { name: "Holding Cost Buy" },
      { name: "Holding Cost Sell" },
    ],
    instruments: [
      {
        tabName: "Most popular",
        instruments: [
          "X-ABFJV",
          "X-ABFDN",
          "X-AASOB",
          "X-ABFMY",
          "X-ABFMB",
          "X-AALXA",
          "X-AATTA",
        ],
      },
      {
        tabName: "European",
        instruments: [
          "X-ABFDN",
          "X-ABFJV",
          "X-AASOB",
          "X-AARZV",
          "X-AAYLV",
          "X-AAREF",
          "X-ABDAG",
          "X-ABDUB",
        ],
      },
      {
        tabName: "US",
        instruments: ["X-ABFJV", "X-ABFMY", "X-ABFMB", "X-AANKX", "X-ABFMQ"],
      },
      {
        tabName: "Asian/Africa",
        instruments: ["X-AALXA", "X-AATTA", "X-AAVNY", "X-AATUV", "X-ABCXH"],
      },
      {
        tabName: "Share baskets",
        instruments: ["X-ALMEO", "X-ALMFA", "X-ALMEV", "X-ALMFB", "X-ALMEN"],
      },
    ],
    loadMoreEnabled: false,
    searchEnabled: true,
    searchType: "indices",
    searchPlaceHolderText: "Search 80+ indices instruments",
  },
  Commodities: {
    columns: [
      { name: "Product" },
      { name: "Min Spread" },
      { name: "Price" },
      { name: "Day" },
      { name: "Week" },
      { name: "Trend" },
      { name: "Holding Cost Buy" },
      { name: "Holding Cost Sell" },
      { name: "Margin" },
    ],
    instruments: [
      {
        tabName: "Most popular",
        instruments: ["X-AASUB", "X-AAPHT", "X-AAPGW", "X-ABCLO", "X-AAYIN"],
      },
      {
        tabName: "Metals",
        instruments: ["X-AASUB", "X-ABCLO", "X-AAZUO", "X-ABAHG", "X-AAPAG"],
      },
      {
        tabName: "Energies",
        instruments: ["X-AAPHT", "X-AAPGW", "X-AAYIN", "X-AASHY", "X-AATJL"],
      },
      {
        tabName: "Agriculture",
        instruments: ["X-AAOSW", "X-AAWNT", "X-AAWTV", "X-ABDOR", "X-ABGMO"],
      },
      {
        tabName: "Commodity indices",
        instruments: ["X-ABAOY", "X-AAQTP", "X-AAKVV"],
      },
    ],
    loadMoreEnabled: false,
    searchEnabled: true,
    searchType: "commodities",
    searchPlaceHolderText: "Search 120+ global commodities",
  },
  Shares: {
    columns: [
      { name: "Product" },
      { name: "Price" },
      { name: "Day" },
      { name: "Week" },
      { name: "Trend" },
      { name: "Holding Cost Buy" },
      { name: "Holding Cost Sell" },
      { name: "Margin" },
    ],
    instruments: [
      {
        tabName: "Most popular",
        instruments: ["X-ABEHN", "X-AALAD", "X-AALJF", "X-AARLJ", "X-AAMYD"],
      },
      {
        tabName: "Growth",
        instruments: ["X-AALAD", "X-AFWWH", "X-ABEHN", "X-ABCJF", "X-AAZFN"],
      },
      {
        tabName: "Technology",
        instruments: ["X-ABBKX", "X-AANEN", "X-AAKXW", "X-AAXTH", "X-AAUDF"],
      },
      {
        tabName: "Banking",
        instruments: ["X-AAWUO", "X-AAVTV", "X-AAMHD", "X-AATYQ", "X-ABBMH"],
      },
      {
        tabName: "ETFs",
        instruments: ["X-AAVDZ", "X-AAWZO", "X-AAVAN", "X-AAUWE", "X-ABDDR"],
      },
      {
        tabName: "Consumer & retail",
        instruments: ["X-AAKVF", "X-AAYLP", "X-AALQG", "X-AAXLR", "X-AAKMM"],
      },
      {
        tabName: "Share baskets",
        instruments: ["X-ALMEO", "X-ALMFA", "X-ALMEV", "X-ALMFB", "X-ALMEN"],
      },
    ],
    loadMoreEnabled: false,
    searchEnabled: true,
    searchType: "shares",
    searchPlaceHolderText: "Search 10,000+ shares",
  },
  ETFs: {
    columns: [
      { name: "Product" },
      { name: "Price" },
      { name: "Day" },
      { name: "Week" },
      { name: "Trend" },
      { name: "Holding Cost Buy" },
      { name: "Holding Cost Sell" },
      { name: "Margin" },
    ],
    instruments: [
      {
        tabName: "Most popular",
        instruments: [
          "X-ABANT",
          "X-ABFSQ",
          "X-AAVHB",
          "X-AALML",
          "X-AASSF",
          "X-AASSC",
          "X-ABFUL",
          "X-AAQTU",
          "X-ABEDF",
          "X-AARTD",
          "X-AATCL",
          "X-AAVJY",
          "X-AARTS",
          "X-AFYYS",
          "X-ABDET",
          "X-AATIW",
        ],
      },
      {
        tabName: "Technology",
        instruments: [
          "X-AALML",
          "X-AATCD",
          "X-AAVHH",
          "X-ABEDF",
          "X-ABFUL",
          "X-ABDEV",
          "X-AAVBM",
          "X-AARUF",
          "X-AAVHI",
          "X-AARUD",
          "X-AARTD",
          "X-AARTS",
          "X-ABAUE",
          "X-AFYYS",
          "X-AJWWV",
          "X-AAVKP",
        ],
      },
      {
        tabName: "Biotech & pharma",
        instruments: [
          "X-AATIW",
          "X-ABFUI",
          "X-AAVHB",
          "X-AAVJY",
          "X-ABDDZ",
          "X-AAVJV",
          "X-AAVBE",
          "X-AARPN",
          "X-AARTO",
          "X-AAVJW",
          "X-AATCB",
          "X-AAVKK",
          "X-ABDES",
          "X-AAXAC",
        ],
      },
      {
        tabName: "Consumer discretionary",
        instruments: [
          "X-AAOYV",
          "X-ABFTG",
          "X-AARSZ",
          "X-AARPJ",
          "X-ABDEU",
          "X-AAVAW",
          "X-AATBX",
          "X-AAVKG",
          "X-AAXHX",
        ],
      },
    ],
    loadMoreEnabled: true,
    searchEnabled: true,
    searchType: "etfs",
    searchPlaceHolderText: "Search 1,000+ ETFs",
  },
  Treasuries: {
    columns: [
      { name: "Product" },
      { name: "Min Spread" },
      { name: "Price" },
      { name: "Day" },
      { name: "Week" },
      { name: "Trend" },
      { name: "Holding Cost Buy" },
      { name: "Holding Cost Sell" },
      { name: "Margin" },
    ],
    instruments: [
      {
        tabName: "US Bonds",
        instruments: ["X-ABFOJ", "X-ABFNT", "X-ABFOZ", "X-ABFOR"],
      },
      {
        tabName: "European bonds",
        instruments: ["X-ABFEC", "X-AARFL", "X-AARFT", "X-AARGJ", "X-AAREN"],
      },
      {
        tabName: "Rates",
        instruments: ["X-AARDX", "X-BESUX", "X-AWWMU"],
      },
    ],
    searchType: "treasuries",
    searchEnabled: true,
    loadMoreEnabled: false,
    searchPlaceHolderText: "Search 50+ bonds",
  },
  "Share Baskets": {
    columns: [
      { name: "Product" },
      { name: "Min Spread" },
      { name: "Holding Cost Buy AO", nameOverride: "Holding Cost (Buy)" },
      { name: "Holding Cost Sell AO", nameOverride: "Holding Cost (Sell)" },
      { name: "Margin" },
      { name: "Commission" },
    ],
    instruments: [
      {
        tabName: "Most popular",
        instruments: ["X-ALMEO", "X-ALMFA", "X-ALMEV", "X-ALMFB", "X-ALMEN"],
      },
      {
        tabName: "Lifestyle",
        instruments: ["X-ALMFA", "X-ALRRV", "X-ALMES", "X-ALMEY", "X-ALMEP"],
      },
      {
        tabName: "Tech",
        instruments: ["X-ALMEO", "X-ALMEQ", "X-ALRRW", "X-ALMEM", "X-ALMEX"],
      },
    ],
    searchType: "share baskets",
    searchEnabled: true,
    loadMoreEnabled: false,
    searchPlaceHolderText: "Search 30+ share baskets",
  },
  "Forex - Spread Betting": {
    columns: [
      { name: "Product" },
      { name: "Min Spread" },
      { name: "Margin" },
      { name: "Price" },
    ],
    instruments: [
      {
        tabName: "Majors",
        instruments: [
          "X-AALUO",
          "X-AARBY",
          "X-AARDJ",
          "X-AASKN",
          "X-ABFQF",
          "X-ABFPO",
          "X-AASJY",
        ],
      },
      {
        tabName: "Minors",
        instruments: [
          "X-AALTU",
          "X-AALTZ",
          "X-AARBF",
          "X-AALUF",
          "X-AARDA",
          "X-AASJM",
          "X-AANZJ",
        ],
      },
      {
        tabName: "Exotics",
        instruments: [
          "X-ABFQO",
          "X-ABFPY",
          "X-ABFPW",
          "X-AARDI",
          "X-ABFQD",
          "X-ABFQJ",
          "X-ABFQK",
        ],
      },
      {
        tabName: "Forex indices",
        instruments: [
          "X-AHWRD",
          "X-AHWQW",
          "X-AHWQX",
          "X-AHWQS",
          "X-AHWQT",
          "X-AHWQY",
          "X-AHWRA",
        ],
      },
    ],
    searchEnabled: false,
    loadMoreEnabled: false,
  },
  "Forex - CFD Trading": {
    columns: [
      { name: "Product" },
      { name: "Min Spread" },
      { name: "Margin" },
      { name: "Price" },
    ],
    instruments: [
      {
        tabName: "Majors",
        instruments: [
          "X-AALUO",
          "X-AARBY",
          "X-AARDJ",
          "X-AASKN",
          "X-ABFQF",
          "X-ABFPO",
          "X-AASJY",
        ],
      },
      {
        tabName: "Minors",
        instruments: [
          "X-AALTU",
          "X-AALTZ",
          "X-AARBF",
          "X-AALUF",
          "X-AARDA",
          "X-AASJM",
          "X-AANZJ",
        ],
      },
      {
        tabName: "Exotic",
        instruments: [
          "X-ABFQO",
          "X-ABFPY",
          "X-ABFPW",
          "X-AARDI",
          "X-ABFQD",
          "X-ABFQJ",
          "X-ABFQK",
        ],
      },
      {
        tabName: "Forex indices",
        instruments: [
          "X-AHWRD",
          "X-AHWQW",
          "X-AHWQX",
          "X-AHWQS",
          "X-AHWQT",
          "X-AHWQY",
          "X-AHWRA",
        ],
      },
    ],
    searchEnabled: false,
    loadMoreEnabled: false,
  },
  "Forex - FX Active": {
    columns: [
      { name: "Product" },
      { name: "Min Spread Discount", nameOverride: "Min Spread" },
      {
        name: "Min Spread",
        nameOverride: "Standard \n CFD Account \n Min Spread",
      },
      {
        name: "Margin",
        nameOverride: "Margin rate",
        options: { decimal: 3 },
      },
      { name: "Spread Discount" },
    ],
    instruments: [
      {
        tabName: "Majors",
        instruments: [
          "X-AALUO",
          "X-AARDJ",
          "X-AASKN",
          "X-AAZGX",
          "X-ABFPO",
          "X-ABFQF",
        ],
        loadMoreEnabled: false,
        columns: [
          { name: "Product" },
          {
            name: "FX Active Min Spread",
            nameOverride: "FX Active \n Min Spread",
          },
          {
            name: "Min Spread",
            nameOverride: "Standard \n CFD Account \n Min Spread",
          },
          {
            name: "Margin",
            nameOverride: "Margin rate",
            options: { decimal: 3 },
          },
          {
            name: "FX Active Commission",
            nameOverride: "Commission \n (Per US $100,000)",
          },
        ],
      },
      {
        tabName: "Minors",
        instruments: [
          "X-AALTL",
          "X-AALTN",
          "X-AALTT",
          "X-AALTU",
          "X-AALTZ",
          "X-AALUF",
          "X-AANHF",
          "X-AANHG",
          "X-AANHM",
          "X-AANHN",
          "X-AANHR",
          "X-AANHV",
          "X-AANIB",
          "X-AANYY",
          "X-AANYZ",
          "X-AANZE",
          "X-AANZF",
          "X-AANZJ",
          "X-AANZN",
          "X-AANZT",
          "X-AARBF",
          "X-AARBI",
          "X-AARBK",
          "X-AARBY",
          "X-AARCM",
          "X-AARDA",
          "X-AASJF",
          "X-AASJJ",
          "X-AASJM",
          "X-AASJT",
          "X-AASJY",
          "X-AASKE",
          "X-AAZFZ",
          "X-AAZGA",
          "X-AAZGC",
          "X-AAZGI",
          "X-AAZGJ",
          "X-AAZGN",
          "X-AAZGX",
          "X-ABFQA",
          "X-ABFQB",
          "X-ABFQM",
          "X-ABFQR",
        ],
      },
      {
        tabName: "Exotic",
        instruments: [
          "X-AALTW",
          "X-AALTX",
          "X-AALUE",
          "X-AALUI",
          "X-AALUK",
          "X-AALUL",
          "X-AALUN",
          "X-AANHO",
          "X-AANHP",
          "X-AANHU",
          "X-AANHW",
          "X-AANHY",
          "X-AANHZ",
          "X-AANIA",
          "X-AANZG",
          "X-AANZH",
          "X-AANZM",
          "X-AANZO",
          "X-AANZQ",
          "X-AANZR",
          "X-AANZS",
          "X-AARBX",
          "X-AARCJ",
          "X-AARCK",
          "X-AARCY",
          "X-AARDD",
          "X-AARDF",
          "X-AARDH",
          "X-AARDI",
          "X-AARDV",
          "X-AASJS",
          "X-AASJV",
          "X-AASJW",
          "X-AASKD",
          "X-AASKH",
          "X-AASKJ",
          "X-AASKK",
          "X-AASKM",
          "X-AATQA",
          "X-AATQB",
          "X-AATQC",
          "X-AATQG",
          "X-AATQH",
          "X-AATQI",
          "X-AATQJ",
        ],
      },
    ],
    searchEnabled: false,
    loadMoreEnabled: true,
  },
  "Share Baskets Themes": {
    columns: [
      {
        name: "Product",
        nameOverride: "Type",
      },
      {
        name: "Day",
        nameOverride: "Day",
      },
      {
        name: "Week",
        nameOverride: "Week",
      },
      {
        name: "Month",
        nameOverride: "Month",
      },
      {
        name: "Year",
        nameOverride: "Year",
      },
      {
        name: "Overview",
        nameOverride: "Info",
      },
    ],
    instruments: [
      {
        tabName: "Instruments",
        instruments: [
          "X-ALMEN",
          "X-ALMEQ",
          "X-ALMES",
          "X-ALMEY",
          "X-ALMFA",
          "X-ALMEO",
          "X-ALMEP",
          "X-ALMFB",
          "X-ALMEM",
          "X-ALMEV",
          "X-ALMEW",
          "X-ALMEX",
          "X-ALMEU",
          "X-ALMFC",
          "X-ALMER",
          "X-ALMEZ",
          "X-ALMET",
          "X-ALRRU",
          "X-ALRRT",
          "X-ALRRS",
          "X-ALRRW",
          "X-ALRRV",
        ],
      },
    ],
    instrumentTooltips: [
      {
        apiCode: "X-ALMEN",
        description:
          "The big tech companies are currently battling it out to incorporate the latest advances in AI into their businesses - especially considering that inserting the buzzword into corporate messaging is a sure-fire way to demonstrate a firm's future-proofing efforts. Take the various voice-powered digital assistants, such as Google's Assistant, Amazon's Alexa, Apple's Siri, and Microsoft's Cortana. There's even , the home robot that's received $72m in funding.",
      },
      {
        apiCode: "X-ALMEQ",
        description:
          "While US firms dominate the tech market, China is catching up quickly. In 2019, despite the mounting cloud of trade conflict and economic downturn, Chinese technology stocks still finished the year with astonishing gains. Among them, JD.com (+ 71.7%), Alibaba (+51.9) and NetEase (+ 31.5%), were among the top performers, far outperforming the global index. Tencent (+ 18.2%) also recorded double-digit gains.",
      },
      {
        apiCode: "X-ALMES",
        description:
          "It may still be a while before we see autonomous vehicles in series production. But if, when fully developed, the driverless car industry can help save the 1.25million lives lost each year in road accidents it would then be in line with cancer drugs, space travel or other innovations that have the potential to transform our society and the way we live together.",
      },
      {
        apiCode: "X-ALMFA",
        description:
          "Up until recently, Netflix had the ruled streaming media. However, at the end of 2019 things started to heat up as both Apple and Disney launched their own streaming service. Early signs show that rather than a winner takes all, there appears to be room for multiple providers in this growing market where content is king.",
      },
      {
        apiCode: "X-ALMEO",
        description:
          "The mega tech companies such as Apple, Microsoft, Amazon and Google continue to drive innovation and adoption worldwide. Global demand has driven huge growth in their bottom line and share prices. As the world becomes more interconnected, there seems to be no stopping the expansion prospects of these companies.",
      },
      {
        apiCode: "X-ALMFB",
        description:
          "It's almost 12 years since some of the most established - and trusted - banks helped send the global economy into a financial crisis. Now, technical innovators such as Monzo and Revolut are helping disrupt a sector overdue change. The incumbants are adapting quickly and after a turbulent start to 2020, it's all to play for.",
      },
      {
        apiCode: "X-ALMEX",
        description:
          "Environmental awareness has gone mainstream, which is helping to transform the way the world stores, distributes and generates power. Major energy and utility companies are now increasingly going green, driving up the demand for wind farms, solar parks, hydropower plants and renewable tech.",
      },
      {
        apiCode: "X-ALMFC",
        description:
          "In 2019, shares in the five biggest US banks (JP Morgan Chase, Citigroup, Wells Fargo, Goldman Sachs and Bank of America) increased by an average of around 40%, while the S&P 500 was up by nearly 30%. US banks' return on capital stood at 18% in 2019, supported by a strong return on assets of 1.5%, according to Deloitte's 2020 banking outlook.",
      },
      {
        apiCode: "X-ALMEZ",
        description:
          "Software as a service is being touted as the new FAANG, the new growth engine underpinning the markets. These technology companies, such as Adobe and Docusign, offer services to customers over the cloud, enabling them to scale their services quickly with demand.",
      },
    ],
    searchEnabled: false,
    loadMoreEnabled: true,
  },
};
