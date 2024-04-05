// As a temporary solution until instrument tables are properly integrated into contentful,
// we will use this file to define the mappings for the instrument tables based off the "Type" selected in contentful.

import {
  ColumnMapping,
  InstrumentMapping,
  SearchType,
} from "@/components/tables/InstrumentTable/InstrumentTableTypes";

type contentfulInstrumentMapping = {
  columns: ColumnMapping[];
  instruments: InstrumentMapping[];
  loadMoreEnabled: boolean;
  searchEnabled: boolean;
  searchType: SearchType;
  searchPlaceHolderText: string;
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
};
