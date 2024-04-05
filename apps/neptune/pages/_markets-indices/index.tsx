/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { getNewsArticles } from "@/services/news";
import { InstrumentData } from "@/components/modules/Common/InstrumentCards/InstrumentCardDeck";
import WhatIs from "@/components/modules/Markets/WhatIs";
import LatestNewsSection from "@/components/modules/Markets/LatestNewsSection";
import WhyTrade from "@/components/modules/Markets/WhyTrade";
import { WhyTradeObj } from "@/components/modules/Markets/WhyTrade/WhyTradeCard";
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
import InstrumentsTableHeader from "@/components/modules/Common/Basic/InstrumentsTableHeader";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import { ScrollSpyItem } from "@/helpers/types/general";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import Lines from "@/components/global/Misc/Lines";
import SectionContainer from "@/components/modules/Common/Basic/SectionContainer";
import InstrumentHeroWide from "@/components/modules/Common/Hero/InstrumentHeroWide";

const instrumentMapping: InstrumentTableMapping = {
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
};

const instrumentCards: InstrumentData[] = [
  { apiCode: "X-ABFJV", imgName: "US" },
  { apiCode: "X-AALXA", imgName: "AU" },
  { apiCode: "X-ABFDN", imgName: "GB" },
  { apiCode: "X-AASOB", imgName: "DE" },
];

const whyTradeData: Array<WhyTradeObj> = [
  {
    title: "Your favourites in one place",
    text: "Trade on over 80 cash and forward indices based on FTSE 100 and dozens of other global markets.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_favourites-48.svg"),
    },
  },
  {
    title: "Trade out of hours",
    text: "Favourites like the UK 100 and US 30 trade 24/5, so you don't have to stop when the markets do.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_clock-48.svg"),
    },
  },
  {
    title: "No partial fills",
    text: "All orders are fully executed without dealer intervention, regardless of your trading size.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_up-down-tick-48.svg"),
    },
  },
  {
    title: "Precision pricing",
    text: "We combine multiple feeds from tier-one banks, to get you the most accurate bid/ask price.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_precision-pricing-48.svg"),
    },
  },
  {
    title: "Dedicated customer service",
    text: (
      <>
        Experienced customer service available 24/5, whenever you&apos;re
        trading.
      </>
    ),
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_customer-service-48.svg"),
    },
  },
  {
    title: "Exclusive products",
    text: (
      <>
        Get broader access to the market in a single position with our exclusive{" "}
        <Link href="/share-baskets-trading">share baskets</Link>.
      </>
    ),
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_briefcase-48.svg"),
    },
  },
];

const faqQuestions: FAQColumn = {
  title: "New to index trading?",
  faqList: [
    {
      question: "What is indices trading?",
      answer: (
        <p>
          Indices are a measure of a section of shares in the stock market,
          created by combining the value of several stocks to create one
          aggregate value.&nbsp;
          <a href="/en-gb/trading-guides/what-are-indices">
            Learn more about indices
          </a>
        </p>
      ),
    },
    {
      question:
        "How can you trade on indices?                                    ",
      answer: (
        <p>
          You can start trading on indices now by opening a&nbsp;
          <a
            className="js-modal"
            data-function="live"
            data-iframe-params="?jid=gb1&amp;iaid=null&amp;lsrc=1"
            data-label="Create Account"
            data-url="/en-gb/onboarding"
            href="https://signup.cmcmarkets.com/#/emailRegistration?l=en&amp;r=gb&amp;p=SB&amp;i=live&amp;e=&amp;sc=false&amp;iaid=null&amp;d=CMC&amp;lsrc=1"
          >
            live account
          </a>
          . If you would like to practise your index trading strategy first,
          open a&nbsp;
          <a
            className="js-modal"
            data-function="live"
            data-iframe-params="?jid=gb3&amp;iaid=null&amp;lsrc=1"
            data-label="Create Account"
            data-url="/en-gb/onboarding"
            href="https://signup.cmcmarkets.com/#/emailRegistration?l=en&amp;r=gb&amp;p=SB&amp;i=demo&amp;e=&amp;sc=false&amp;iaid=null&amp;d=CMC&amp;lsrc=1"
          >
            demo account
          </a>
          &nbsp;to trade with virtual funds.
        </p>
      ),
    },
    {
      question: "What is leveraged trading?",
      answer: (
        <p>
          One of the advantages of spread betting and CFD trading is that you
          only need to deposit a percentage of the full value of your position
          to open a trade, known as trading on leverage. Remember,{" "}
          <a href="/en-gb/trading-guides/what-is-leverage-trading">
            trading on leverage
          </a>{" "}
          can also amplify losses, so it&apos;s important to manage your risk.
        </p>
      ),
    },
    {
      question: "Why spread betting?",
      answer: (
        <p>
          <Link href="/spread-betting">Spread betting</Link>
          &nbsp;allows you to trade tax-free on a wide range of financial
          markets 24 hours a day, from Sunday nights through to Friday nights.
          Trade on your phone, tablet, PC or Mac on a wide range of instruments
          using leverage. Tax treatment depends on individual circumstances and
          can change or may differ in a jurisdiction other than the UK.
        </p>
      ),
    },
    {
      question:
        "How does spread betting/trading CFDs on indices actually work?",
      answer: (
        <div>
          <p></p>
          <p>
            When you spread bet or trade CFDs on indices on our platform, you
            don&apos;t buy or sell the underlying index. Instead, you&apos;re
            taking a position on whether you think the index will go up or down.
          </p>
          <p>
            With spread betting, you buy or sell an amount per point movement
            for the index instrument you&apos;re trading, such as £5 per point.
            This is known as your stake. With CFD trading, you buy or sell a
            number of units for a particular instrument. For every point or unit
            that the price moves in your favour, you gain multiples of your
            stake, and vice versa.
          </p>
          <p>
            While you can trade on leverage, your profits and losses are based
            on the full value of the trade. As a retail client, you will never
            lose more than the amount in your account.
          </p>
          <p>
            See our full list of&nbsp;
            <a href="/en-gb/markets/world-indices">major global indices</a>
            ​.
          </p>
        </div>
      ),
    },
  ],
};

export const getStaticProps = async () => {
  const posts = await getNewsArticles("indices");

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const MarketsIndices = (props: any) => {
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
          Index Trading | Spread Betting & CFD Indices | CMC Markets
        </title>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      <InstrumentHeroWide
        ref={pageItems.hero.ref}
        title="Indices trading"
        content={
          <ul className="list-disc pl-4">
            <li className="text-xl">
              Spreads from 1pt on the UK 100 and 1.2pts on the Germany 40
            </li>
            <li className="text-xl">
              Ultra-fast execution<sup>1</sup> with no partial fills
            </li>
            <li className="text-xl">
              Experienced customer service available 24/5
            </li>
            <li className="text-xl">
              Save from 5% to {constants.DIDS.UK_PRICE_PLUS_MAX_SPREAD_DISCOUNT}
              <sup>2</sup> on spreads with <a href="/en-gb/alpha">CMC Alpha</a>
            </li>
          </ul>
        }
        animatedIcon={awsImage("indices-animated-icon.gif")}
        imgUrl={awsImage("common_generic-platform-hero-img.png")}
        bgImgUrl={awsImage("indices_hero-bg-2.png")}
        mobileImgUrl={awsImage("indices_hero-mob-160224.png")}
        fscsFootnote={"3"}
        enableLine={false}
      />

      <WhatIs
        title={"What is indices trading?"}
        text={
          <>
            <p>
              Index trading is the buying and selling of a group of stocks that
              make up an index, such as our UK 100 index (based on the FTSE
              100), which tracks the largest 100 companies on the London Stock
              Exchange.{" "}
            </p>
            <p>
              Trading on indices is popular with short-term traders who want to
              speculate on highly-liquid assets, with tight spreads and minimal
              slippage. Speculating on indices offers traders exposure to a wide
              range of stocks.
            </p>
          </>
        }
        instrumentsToLoad={instrumentCards}
        sideBgImg={awsImage("indices-side-bg.png")}
      />

      <WhyTrade title={"Why trade indices with us?"} data={whyTradeData} />

      <PlatformTypes3Col
        ref={pageItems.ourPlatforms.ref}
        platformLeft={<PlatformWeb footnotes={["4"]} />}
        platformMiddle={<PlatformMobile />}
        platformRight={<PlatformMT4 />}
      />

      <TrustpilotSliderB footnotes={["5"]} />

      <SectionContainer ref={pageItems.costs.ref}>
        {/* Instruments Header & Table */}
        <InstrumentsTableHeader
          title={<> Indices trading costs</>}
          contentRight={
            <p className="max-w-2xl text-xl">
              Trade on more than 80 stock index instruments based on the FTSE
              100 and regional indices from Asia-Pacific, Europe, and the US.
            </p>
          }
        />

        <section className="relative">
          <Lines left />
          <div className="main-xl-container">
            <InstrumentsTable
              loadMoreEnabled={false}
              searchEnabled={true}
              columns={instrumentMapping.columns}
              instrumentMappings={instrumentMapping.instruments}
              searchType={"indices"}
              searchPlaceHolderText={"Search 80+ indices instruments"}
            />
            <p className="pt-10">
              Pricing is indicative. Past performance is not a reliable
              indicator of future results.
            </p>
          </div>
        </section>
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
        bgImg={awsImage("indices_ready-to-find-your-flow-bg.png")}
        mobileBgImg={awsImage("indices_ready-to-find-your-flow-bg-mob.png")}
      />

      <Footnotes
        footnotesList={[
          <>{constants.DIDS.GLOBAL_CFD_EXECUTION_TIME}</>,
          <>
            Max discount in tier. Discounts are based on our tiered-volume
            discount scheme and are variable per product. View our{" "}
            <a href="/en-gb/price-plus">Price+</a> page for more details.
          </>,
          <>
            FSCS is an independent body that offers protection to customers of
            financial services firms that have failed. The compensation amount
            may be up to £85,000 per eligible person, per firm.{" "}
            <a
              target="_blank"
              href="https://www.fscs.org.uk/"
              rel="noopener noreferrer"
            >
              Eligibility conditions apply
            </a>
            . Please contact the FSCS for more information.
          </>,
          <>
            Awarded No.1 Web Platform, No.1 Most Currency Pairs, &amp; No.1
            Podcast Series, ForexBrokers.com Awards 2023; No.1 Platform
            Technology, ForexBrokers.com Awards 2022; Best CFD Provider, Online
            Money Awards 2022; Best Mobile Trading Platform, ADVFN International
            Financial Awards 2022; Best In-House Analysts, Professional Trader
            Awards 2022.
          </>,
          <>
            1.388 million unique user logins for the CMC Markets invest and CFD
            platforms globally, as at August 2023.
          </>,
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

export default MarketsIndices;
