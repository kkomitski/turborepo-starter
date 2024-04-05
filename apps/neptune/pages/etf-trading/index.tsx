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
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import PlatformWeb from "@/components/modules/Common/PlatformTypes/PlatformWeb";
import PlatformMobile from "@/components/modules/Common/PlatformTypes/PlatformMobile";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import AccountTypes2Col from "@/components/modules/Common/AccountTypes2Col";
import OneColumn from "@/components/modules/Common/Basic/OneColumn";
import PlatformTypes2Col from "@/components/modules/Common/PlatformTypes2Col";
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
};

const instrumentCards: InstrumentData[] = [
  { apiCode: "X-AALML", imgName: "ark-innovation" },
  { apiCode: "X-AATIW", imgName: "spdr" },
  { apiCode: "X-AATCL", imgName: "invesco" },
  { apiCode: "X-AAVHB", imgName: "ishares" },
];

const whyTradeData: Array<WhyTradeObj> = [
  {
    title: "Your favourites in one place",
    text: "Over 1,000 ETFs to trade, including the most popular themes from the US and Europe.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_favourites-48.svg"),
    },
  },
  {
    title: "Professional research",
    text: "Free access to quantitative equity analysis from Morningstar.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_presentation-chart-line-48.svg"),
    },
  },
  {
    title: "Minimal slippage",
    text: (
      <>
        With fully automated, lighting-fast execution in 0.0030 seconds
        <sup>2</sup>.
      </>
    ),
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_lightning-bolt-48.svg"),
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
  {
    title: (
      <>
        Award-winning technology<sup>1</sup>
      </>
    ),
    text: "Among our latest accolades, we're proud to have won 'No.1 Platform Technology' and 'Best Mobile Trading Platform'.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_award-badge-48.svg"),
    },
  },
  {
    title: "Competitive pricing",
    text: "Enjoy tight spreads across our full range of ETF instruments.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_tag-48.svg"),
    },
  },
];

const faqQuestions: FAQColumn = {
  title: "New to ETF trading?",
  faqList: [
    {
      question: "How does spread betting and trading CFDs on ETFs work?",
      answer: (
        <>
          <p>
            When you spread bet or trade CFDs on ETFs on our platform, you
            don&apos;t buy or sell the underlying ETF. Instead, you&apos;re
            taking a position on whether you think the ETF price will go up or
            down.
          </p>
          <p>
            With spread betting, you buy or sell an amount per point movement
            for the instrument you&apos;re trading, such as £5 per point. This
            is known as your stake. With CFD trading, you buy or sell a number
            of units for a particular instrument. For every point or unit that
            the price moves in your favour, you gain multiples of your stake,
            and vice versa. Read about the&nbsp;
            <a
              rel="noopener noreferrer"
              href="/en-gb/trading-guides/cfd-vs-etf"
            >
              differences between ETFs and CFDs
            </a>
            .
          </p>
        </>
      ),
    },
    {
      question: "What is leveraged ETF trading?",
      answer: (
        <>
          <p>
            One of the advantages of spread betting and CFD trading is that you
            only need to deposit a percentage of the full value of your position
            to open a trade, known as&nbsp;
            <a href="/en-gb/trading-guides/what-is-leverage-trading">
              trading on leverage
            </a>
            . Remember, trading ETFs on leverage can also amplify losses, so
            it&apos;s important to manage your risk.
          </p>
          <p>
            As an example, let&apos;s say you want to put down a total of £1,000
            on your ETF trade. Due to the leverage available with spread betting
            (5:1 in this case), you would be able to enter this position with an
            initial outlay of £200, instead of £1,000. However, remember that
            your profits and losses are based on the full value of the trade
            (£1,000). As a retail client, you will never lose more than the
            amount in your account.
          </p>
        </>
      ),
    },
    {
      question: "What are the costs involved in ETF trading?",
      answer: (
        <>
          There are a number of costs to consider when trading on ETFs,
          including spread costs, holding costs (for trades held overnight) and
          guaranteed stop-loss order charges (if you use this risk-management
          tool).&nbsp;
          <Link href="/trading-costs">See our trading costs</Link>.
        </>
      ),
    },
  ],
};

export const getStaticProps = async () => {
  const posts = await getNewsArticles("etfs");

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const ETFTrading = (props: any) => {
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
        <title>ETF Trading | Open an ETF Trading Account | CMC Markets</title>
        <meta
          name="description"
          content="Open an ETF trading account today and gain access to competitive spreads and margins on over 1000 ETFs on our award-winning trading platform*."
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      <InstrumentHeroWide
        ref={pageItems.hero.ref}
        title="ETF trading"
        content={
          <ul className="list-disc pl-4">
            <li className="text-xl">
              Trade on {constants.DIDS.GLOBAL_ETFS_MINIMUM_COUNT_PLUS}{" "}
              exchange-traded funds in our award-winning platform
              <sup>1</sup>
            </li>
            <li className="text-xl">
              Tight spreads, lightning-fast execution<sup>2</sup> and
              experienced customer service
            </li>
            <li className="text-xl">
              Save from 5% to 40%<sup>3</sup> on spreads with{" "}
              <a href="/en-gb/alpha">CMC Alpha</a>
            </li>
          </ul>
        }
        animatedIcon={awsImage("etf-trading-animated-icon.gif")}
        imgUrl={awsImage("common_generic-platform-hero-img.png")}
        bgImgUrl={awsImage("etf-trading_hero-bg2.png")}
        mobileImgUrl={awsImage("etf-trading_hero-mob-160224.png")}
        fscsFootnote={"4"}
        enableLine={false}
      />

      {/* What Are ETFS */}
      <WhatIs
        title={"What are ETFs?"}
        text={
          <>
            <p>
              Exchange-traded funds (ETFs) are a type of investment vehicle that
              tracks the performance of a broad collection of underlying assets,
              such as shares, commodities, and bonds.
            </p>
            <p>
              ETF portfolios are held by corporations that issue shares (a
              portion of ownership) in the fund. These shares give investors
              exposure to the underlying assets as a collective.
            </p>
          </>
        }
        instrumentsToLoad={instrumentCards}
        sideBgImg={awsImage("etf-trading_side-bg.png")}
      />

      {/* Why Trade ETFs */}
      <WhyTrade title={"Why trade ETFs with us?"} data={whyTradeData} />

      {/* Platform Types */}
      <PlatformTypes2Col
        ref={pageItems.ourPlatforms.ref}
        title="Powerful technology you can rely on"
        platformLeft={<PlatformWeb footnotes={["1"]} />}
        platformRight={<PlatformMobile />}
      />

      {/* Trustpilot Slider */}
      <TrustpilotSliderB footnotes={["5"]} />

      {/* Instruments Header & Table */}
      <SectionContainer ref={pageItems.costs.ref}>
        <InstrumentsTableHeader
          title={<> ETF trading costs</>}
          contentRight={
            <div className="max-w-2xl text-xl">
              <p>
                ETFs have evolved from an obscure investment fund to one which
                attracts trillions of dollars&apos; worth of assets.
              </p>
              <p>
                Our trading team has identified a selection of ETFs across three
                themes with growth potential, along with trading costs for each
                ETF found in the table below.
              </p>
            </div>
          }
        />

        {/* Instruments Table */}
        <OneColumn>
          <InstrumentsTable
            loadMoreEnabled={true}
            searchEnabled={true}
            searchPlaceHolderText="Search 1,000+ ETFs"
            searchType="etfs"
            columns={instrumentMapping.columns}
            instrumentMappings={instrumentMapping.instruments}
          />
          <p className="pt-10">
            Pricing is indicative. Past performance is not a reliable indicator
            of future results.
          </p>
        </OneColumn>
      </SectionContainer>

      {/* Account Types */}
      <AccountTypes2Col
        ref={pageItems.accountTypes.ref}
        accountTypeLeft={<AccountType type={"sb"} footnotes={["6"]} />}
        accountTypeRight={<AccountType type={"cfd"} footnotes={["6"]} />}
      />

      {/* Alpha Module */}
      <Alpha footnotes={["3", "7"]} />

      {/* Latest News */}
      <LatestNewsSection title={"News"} posts={props.posts} />

      {/* FAQ */}
      <FAQ ref={pageItems.faqs.ref} faqListCol1={faqQuestions} />

      {/* Ready to get Started */}
      <ReadyToGetStarted
        bgImg={awsImage("etf-trading_ready-to-find-your-flow-bg.png")}
        mobileBgImg={awsImage("etf-trading_ready-to-find-your-flow-bg-mob.png")}
      />

      {/* Footnotes */}
      <Footnotes
        footnotesList={[
          <>{constants.DIDS.UK_AWARDS_ALL_FOOTNOTE}</>,
          <>{constants.DIDS.GLOBAL_CFD_EXECUTION_TIME}</>,
          <>
            Max discount in tier. Discounts are based on our tiered-volume
            discount scheme and are variable per product. View our{" "}
            <a href="/en-gb/price-plus">Price+</a> page for more details.
          </>,
          <>{constants.DIDS.FSCS_FOOTNOTE}</>,
          <>{constants.DIDS.GLOBAL_TOTAL_TRADERS_INVESTORS_FOOTNOTE}</>,
          <>
            Tax treatment depends on individual circumstances and can change or
            may differ in a jurisdiction other than the UK.
          </>,
          <>
            <Link
              href="https://assets.cmcmarkets.com/pdfs/interest_scheme_terms_and_conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interest scheme T&amp;Cs
            </Link>{" "}
            apply.
          </>,
        ]}
      />
    </>
  );
};

export default ETFTrading;
