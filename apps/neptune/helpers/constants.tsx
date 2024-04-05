import { AWSImages } from "./types/aws";

export const getApiKey = () =>
  "f9a22832202e456b3dd66d9432a97ab4e98bea1eaodutjiq63";
export const getApiDomain = () => "ws.cmcmarkets.com";
export const getAssetsUrl = () => "https://assets.cmcmarkets.com";
export const getHtmlLang = () => "en-gb";
export const getLanguage = () => "en";
export const getRegion = () => "gb";
export const awsImage = (filename: AWSImages) =>
  `https://cdn.cmcmarkets.com/neptune/images/${filename}`;

const constants = {
  DIDS: {
    INSTRUMENT_TOTAL_COUNT: "12,000",
    UK_MARGIN_RATE_MINIMUM: "3.34%",
    UK_PRICE_PLUS_MAX_SPREAD_DISCOUNT: "40%",
    LOSS_PERCENTAGE: "67%",
    GLOBAL_CMC_YEARS_ACTIVE_PLUS: "30+",
    YEARS_ACTIVE: "34",
    GLOBAL_CMC_FTSE_STATUS: "FTSE-listed group",
    GLOBAL_TOTAL_TRADERS_INVESTORS_NUMBER_PLUS: "1 million+",
    UK_COMPENSATION_AMOUNT: "£85,000",
    UK_MT4_INSTRUMENT_COUNT_PLUS: "200+",
    UK_SPREAD_BET_SHARES_MINIMUM_COUNT_PLUS: "10,000+",
    GLOBAL_FOREX_MIN_SPREAD: "0.5",
    GLOBAL_COMMODITIES_MINIMUM_COUNT_PLUS: "100+",
    GLOBAL_ETFS_MINIMUM_COUNT_PLUS: "1,000+",
    GLOBAL_CFD_EXECUTION_TIME:
      "0.0030 seconds CFD median trade execution time on CMC Markets' web platform, 1 April 2022-31 March 2023.",
    GLOBAL_MIN_SPREAD: "0.2",
    GLOBAL_US_30_MIN_SPREAD: "2.2",
    FSCS_FOOTNOTE: (
      <>
        FSCS is an independent body that offers protection to customers of
        financial services firms that have failed. The compensation amount may
        be up to £85,000 per eligible person, per firm.{" "}
        <a target="_blank" href="https://www.fscs.org.uk/">
          Eligibility conditions apply
        </a>
        . Please contact the FSCS for more information.
      </>
    ),
    UK_AWARDS_ALL_FOOTNOTE: (
      <>
        Awarded No.1 Web Platform and No.1 Most Currency Pairs, ForexBrokers.com
        Awards 2023; Best Forex Broker, Good Money Guide Awards 2023; Best
        In-House Analysts, Professional Trader Awards 2023; CFD Provider of the
        Year, Investors' Chronicle/Financial Times Celebration of Investment
        Awards 2023; Best CFD Provider, Online Money Awards 2022; No.1 Platform
        Technology, ForexBrokers.com Awards 2022; Best Mobile Trading Platform,
        ADVFN International Financial Awards 2022.
      </>
    ),
    UK_PLATFORM_AWARDS_FOOTNOTE: (
      <>
        No.1 Web Platform, ForexBrokers.com Awards 2023; No.1 Platform
        Technology, ForexBrokers.com Awards 2022; Best Mobile Trading Platform,
        ADVFN International Financial Awards 2022.
      </>
    ),
    GLOBAL_TOTAL_TRADERS_INVESTORS_FOOTNOTE: (
      <>
        1.388 million unique user logins for the CMC Markets invest and CFD
        platforms globally, as at August 2023.
      </>
    ),
  },
  meta: {
    titleEnd: "| CMC Markets",
  },
  appLinks: {
    baseLink: "https://cmcmarkets.onelink.me/3oZk/",
    fallbackLink:
      "https://www.cmcmarkets.com/en-gb/trading-platforms/mobile-trading-app",
  },
  endpoints: {
    instruments: {
      basket: `https://${getApiDomain()}/api/v2/instruments/basket/`,
      fullList: `https://${getApiDomain()}/json/instruments_${getRegion()}.json`,
      instruments: `https://${getApiDomain()}/json/instruments/`,
      price: `https://${getApiDomain()}/instruments/price/`,
      prices: `https://${getApiDomain()}/instruments/prices/`,
      priceChange: `https://${getApiDomain()}/instruments/priceChange/`,
      getEverything: `https://${getApiDomain()}/instruments/getEverything/`,
      getApiCodeByInternalCode: `https://${getApiDomain()}/instruments/getApiCodeByInternalCode/`,
      url: `https://www.cmcmarkets.com/${getHtmlLang()}/instruments/`,
    },

    news: {
      article: `${getAssetsUrl()}/json/news_article_`,
      cards: `${getAssetsUrl()}/json/news_article_`,
      images: `${getAssetsUrl()}/images/`,
    },
  },

  breakpoints: {
    xxs: 321,
    xs: 460,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
} as const;

export default constants;
