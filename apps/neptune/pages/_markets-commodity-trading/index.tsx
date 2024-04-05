/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { getNewsArticles } from "@/services/news";
import { InstrumentData } from "@/components/modules/Common/InstrumentCards/InstrumentCardDeck";
import WhatIs from "@/components/modules/Markets/WhatIs";
import LatestNewsSection from "@/components/modules/Markets/LatestNewsSection";
import WhyTrade from "@/components/modules/Markets/WhyTrade";
import Alpha from "@/components/modules/Common/Alpha";
import Footnotes from "@/components/modules/Common/Footnotes";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import PlatformTypes3Col from "@/components/modules/Common/PlatformTypes3Col";
import constants, { awsImage } from "@/helpers/constants";
import AccountTypes3Col from "@/components/modules/Common/AccountTypes3Col";
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import PlatformWeb from "@/components/modules/Common/PlatformTypes/PlatformWeb";
import PlatformMobile from "@/components/modules/Common/PlatformTypes/PlatformMobile";
import PlatformMT4 from "@/components/modules/Common/PlatformTypes/PlatformMT4";
import MainHeroWide from "@/components/modules/Common/Hero/MainHeroWide";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import AccountTypes2Col from "@/components/modules/Common/AccountTypes2Col";
import OneColumn from "@/components/modules/Common/Basic/OneColumn";
import InstrumentsTableHeader from "@/components/modules/Common/Basic/InstrumentsTableHeader";
import { WhyTradeObj } from "@/components/modules/Markets/WhyTrade/WhyTradeCard";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import { ScrollSpyItem } from "@/helpers/types/general";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import SectionContainer from "@/components/modules/Common/Basic/SectionContainer";
import InstrumentHeroWide from "@/components/modules/Common/Hero/InstrumentHeroWide";

const instrumentMapping: InstrumentTableMapping = {
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
};

const instrumentCards: InstrumentData[] = [
  { apiCode: "X-AASUB", imgName: "gold" },
  { apiCode: "X-AAPGW", imgName: "crude-oil-brent" },
  { apiCode: "X-ABGMO", imgName: "wheat" },
  { apiCode: "X-ABCLO", imgName: "silver" },
];

const whyTradeData: Array<WhyTradeObj> = [
  {
    title: `${constants.DIDS.GLOBAL_COMMODITIES_MINIMUM_COUNT_PLUS} cash and forward commodities`,
    text: "Including popular commodities such as Copper and Natural Gas, as well as lesser-traded instruments like Palladium and Wheat.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_fire-48.svg"),
    },
  },
  {
    title: "Trade out of hours",
    text: "Favourites like Brent and West Texas oil trade up to 23 hours a day, so you don't have to stop when the commodity markets do.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_clock-48.svg"),
    },
  },
  {
    title: "Trade the whole sector",
    text: (
      <>
        Take a view across a whole commodity sector from a single position, with
        our bespoke {""}
        <a href="/en-gb/markets-commodity-trading/commodity-indices">
          commodity indices
        </a>
        .
      </>
    ),
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_line-grow-magnifying-glass-48.svg"),
    },
  },
  {
    title: "'Cash' markets",
    text: "Tighter spreads, no rollovers and charting back as far as 1992 to help your analysis.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_switch-arrows-horizontal-48.svg"),
    },
  },
  {
    title: "Dedicated customer service",
    text: <>Experienced customer service 24/5, whenever you’re trading</>,
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_customer-service-48.svg"),
    },
  },
  {
    title: "No partial fills",
    text: "Get the trade you want – we don't reject or partially fill trades based on size.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_up-down-tick-48.svg"),
    },
  },
];

const faqQuestions: FAQColumn = {
  title: "New to commodity trading?",
  faqList: [
    {
      question: "What is a commodity?",
      answer: (
        <>
          A commodity is a physical good that can be bought or sold on the
          various commodity markets. Commodities can be categorised into either
          hard or soft varieties. Hard commodities are natural resources like
          oil, gold and rubber and are often mined or extracted. Soft
          commodities are agricultural products such as coffee, wheat or corn.
        </>
      ),
    },
    {
      question: "How do you trade on commodities?",
      answer: (
        <>
          The commodity markets are traded on in a similar way to other types of
          financial instruments, but there are some points to be aware of in
          order to avoid any shocks or surprises when dipping your toe into
          commodities trading. Learn{" "}
          <a href="/en-gb/trading-guides/how-to-trade-commodities">
            how to trade commodities
          </a>
          .
        </>
      ),
    },
    {
      question: "What is leveraged commodity trading?",
      answer: (
        <>
          One of the features of spread betting and CFD trading on commodities
          is that you only need to deposit a percentage of the full value of
          your position to open a trade, known as{" "}
          <a href="/en-gb/trading-guides/what-is-leverage-trading">
            trading on leverage
          </a>
          . Remember, trading on leverage can also amplify losses, so it&apos;s
          important to manage your risk.
        </>
      ),
    },
    {
      question: "Why spread bet on commodities?",
      answer: (
        <>
          Spread betting allows you to trade tax-free on the commodity market 24
          hours a day, from Sunday night through to Friday night. Trade on your
          phone, tablet, PC or Mac on{" "}
          {constants.DIDS.GLOBAL_COMMODITIES_MINIMUM_COUNT_PLUS} commodity
          instruments using leverage. Tax treatment depends on individual
          circumstances and can change or may differ in a jurisdiction other
          than the UK. Find out more about{" "}
          <a href="/en-gb/trading-guides/how-to-trade-commodities">
            commodity spread betting
          </a>
          .
        </>
      ),
    },
    {
      question: "How can I trade commodity CFDs?",
      answer: (
        <p>
          Commodity CFDs are a type of derivative product available
          globally,&nbsp;with zero commission fees (
          <Link href="/trading-costs">other charges</Link>
          &nbsp;may apply). Check out our <Link href="/cfds">
            CFD trading
          </Link>{" "}
          page for more information on commodity CFD spreads and margin rates.
        </p>
      ),
    },
  ],
};

export const getStaticProps = async () => {
  const posts = await getNewsArticles("commodities");

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const MarketsCommodityTrading = (props: any) => {
  const pageItems: ScrollSpyItem = {
    hero: {
      title: "Overview",
      ref: useRef<HTMLElement | null>(null),
    },
    ourPlatforms: {
      title: "Our platforms",
      ref: useRef<HTMLElement | null>(null),
    },
    costs: {
      title: "Costs",
      ref: useRef<HTMLElement | null>(null),
    },
    accountTypes: {
      title: "Account types",
      ref: useRef<HTMLElement | null>(null),
    },
    faqs: {
      title: "FAQs",
      ref: useRef<HTMLElement | null>(null),
    },
  };
  return (
    <>
      <Head>
        <title>
          Commodity Trading | Explore our Commodity Markets | CMC Markets
        </title>
        <meta
          name="description"
          content={`Trade on global commodities such as Gold from 0.3pts and Crude Oil from 3.5pts. Spread bet and trade CFDs on ${constants.DIDS.GLOBAL_COMMODITIES_MINIMUM_COUNT_PLUS} instruments within our commodity market.`}
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      <InstrumentHeroWide
        ref={pageItems.hero.ref}
        title="Commodity trading"
        content={
          <ul className="list-disc pl-4">
            <li className="text-xl">
              Get exposure to{" "}
              {constants.DIDS.GLOBAL_COMMODITIES_MINIMUM_COUNT_PLUS} commodities
              including favourites like gold, silver crude oil and natural gas
            </li>
            <li className="text-xl">
              Ultra-fast execution<sup>1</sup> with no partial fills
            </li>
            <li className="text-xl">
              Experienced customer service 24/5, whenever you’re trading
            </li>
            <li className="text-xl">
              Save from 5% to 40%<sup>2</sup> on spreads with{" "}
              <a href="/en-gb/alpha">CMC Alpha</a>
            </li>
          </ul>
        }
        animatedIcon={awsImage("commodity-animated-icon.gif")}
        imgUrl={awsImage("common_generic-platform-hero-img.png")}
        bgImgUrl={awsImage("commodity-trading_hero-bg2.png")}
        mobileImgUrl={awsImage("commodity-trading_hero-mob-160224.png")}
        fscsFootnote={"3"}
        enableLine={false}
      />

      <WhatIs
        title={"What is commodity trading?"}
        text={
          <>
            <p>
              Commodity trading is the buying and selling of standardised raw
              materials or primary agricultural products such as oil and gas,
              precious metals such as gold and silver, and soft commodities like
              cocoa, coffee, wheat and sugar.
            </p>
            <p>
              When you trade on these commodities through spread betting and CFD
              trading, you&apos;re speculating on the price of these raw
              physical assets, without taking ownership of the underlying asset.
              Commodity trading is popular among short-term traders who often
              focus on just on one or two commodities.
            </p>
          </>
        }
        instrumentsToLoad={instrumentCards}
        sideBgImg={awsImage("commodity-trading_side-bg.png")}
      />

      <WhyTrade title={"Why trade commodities with us?"} data={whyTradeData} />

      <PlatformTypes3Col
        ref={pageItems.ourPlatforms.ref}
        platformLeft={<PlatformWeb footnotes={["4"]} />}
        platformMiddle={<PlatformMobile />}
        platformRight={<PlatformMT4 />}
      />

      <TrustpilotSliderB footnotes={["5"]} />

      {/* Instruments Header & Table */}
      <SectionContainer ref={pageItems.costs.ref}>
        <InstrumentsTableHeader
          title={<> Commodity trading costs</>}
          contentRight={
            <p className="max-w-2xl text-xl">
              Trade on {constants.DIDS.GLOBAL_COMMODITIES_MINIMUM_COUNT_PLUS}{" "}
              cash and forward commodities and get exposure to volatility on
              favourites like Gold, Silver, Natural Gas, Brent and West Texas
              Crude Oil, with spreads from just{" "}
              {constants.DIDS.GLOBAL_MIN_SPREAD} points.
            </p>
          }
        />

        {/* Instrument Table */}
        <OneColumn>
          <InstrumentsTable
            loadMoreEnabled={false}
            searchEnabled={true}
            searchPlaceHolderText="Search 120+ global commodities"
            searchType="commodities"
            columns={instrumentMapping.columns}
            instrumentMappings={instrumentMapping.instruments}
          />
          <p className="pt-10">
            Pricing is indicative. Past performance is not a reliable indicator
            of future results.
          </p>
        </OneColumn>
      </SectionContainer>

      <AccountTypes2Col
        ref={pageItems.accountTypes.ref}
        accountTypeLeft={<AccountType type={"sb"} footnotes={["6"]} />}
        accountTypeRight={<AccountType type={"cfd"} footnotes={["6"]} />}
      />

      <Alpha footnotes={["2", "7"]} />

      <LatestNewsSection title={"News"} posts={props.posts} />

      <FAQ ref={pageItems.faqs.ref} faqListCol1={faqQuestions} />

      <ReadyToGetStarted
        bgImg={awsImage("commodity-trading_ready-to-find-your-flow-bg.png")}
        mobileBgImg={awsImage(
          "commodity-trading_ready-to-find-your-flow-bg-mob.png"
        )}
      />

      <Footnotes
        footnotesList={[
          <>{constants.DIDS.GLOBAL_CFD_EXECUTION_TIME}</>,
          <>
            Max discount in tier. Discounts are based on our tiered-volume
            discount scheme and are variable per product. View our{" "}
            <a href="/en-gb/price-plus">Price+</a> page for more details.
          </>,
          <>{constants.DIDS.FSCS_FOOTNOTE}</>,
          <>{constants.DIDS.UK_AWARDS_ALL_FOOTNOTE}</>,
          <>{constants.DIDS.GLOBAL_TOTAL_TRADERS_INVESTORS_FOOTNOTE}</>,
          <>
            Tax treatment depends on individual circumstances and can change or
            may differ in a jurisdiction other than the UK.
          </>,
          <>
            <a
              href="https://assets.cmcmarkets.com/pdfs/interest_scheme_terms_and_conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interest scheme T&amp;Cs
            </a>{" "}
            apply.
          </>,
        ]}
      />
    </>
  );
};

export default MarketsCommodityTrading;
