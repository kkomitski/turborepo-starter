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
import PlatformWeb from "@/components/modules/Common/PlatformTypes/PlatformWeb";
import PlatformMobile from "@/components/modules/Common/PlatformTypes/PlatformMobile";
import PlatformMT4 from "@/components/modules/Common/PlatformTypes/PlatformMT4";
import MainHeroWide from "@/components/modules/Common/Hero/MainHeroWide";
import ForexAccountTypes from "@/components/modules/Pages/forex-trading/ForexAccountTypes";
import { WhyTradeObj } from "@/components/modules/Markets/WhyTrade/WhyTradeCard";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import { ScrollSpyItem } from "@/helpers/types/general";
import InstrumentHeroWide from "@/components/modules/Common/Hero/InstrumentHeroWide";

const whyTradeData: Array<WhyTradeObj> = [
  {
    title: "We've got your pair",
    text: (
      <>
        More forex pairs than any other broker<sup>1</sup>. If you want it,
        we&apos;ve probably got it.
      </>
    ),
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_pound-dollar-48.svg"),
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
    title: "Minimal slippage",
    text: (
      <>
        With fully automated, lighting-fast execution in 0.0030 seconds
        <sup>3</sup>.
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
    title: "Exclusive instruments",
    text: (
      <>
        Get exposure to multiple currencies in a single trade with our range of{" "}
        {""}
        <a href="/en-gb/forex-trading/forex-index">forex indices</a>.
      </>
    ),
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_forex-48.svg"),
    },
  },
  {
    title: "Dedicated customer service",
    text: <>Experienced customer service 24/5, whenever you&apos;re trading.</>,
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

const instrumentCards: InstrumentData[] = [
  { apiCode: "X-AARDJ", imgName: "EU-US" },
  { apiCode: "X-AARBY", imgName: "EU-GB" },
  { apiCode: "X-AASKN", imgName: "GB-US" },
  { apiCode: "X-AALUO", imgName: "AU-US" },
];

const faqQuestions: FAQColumn = {
  title: "New to forex trading?",
  faqList: [
    {
      question: "What is online forex trading?",
      answer: (
        <p>
          FX trading, also known as foreign exchange trading, or forex trading,
          is the exchange of different currencies on a decentralised global
          market. It&apos;s one of the largest and most liquid financial markets
          in the world. Forex trading involves the simultaneous buying and
          selling of the world&apos;s currencies on this market.&nbsp;
          <a href="/en-gb/learn-forex/what-is-forex">
            What is forex trading and how does it work?
          </a>
        </p>
      ),
    },
    {
      question: "How to trade on forex?",
      answer: (
        <>
          When trading forex, you speculate on whether the price of one currency
          will rise or fall against another. For example, if you believe that
          the value of the British pound will rise, relative to the value of the
          US dollar, you would trade the GBP/USD pair.{" "}
          <a href="/en-gb/trading-guides/how-to-trade-forex">
            How to trade forex
          </a>
        </>
      ),
    },
    {
      question: "How does forex trading work?",
      answer: (
        <>
          To help you understand how forex trading works, view our CFD examples,
          which takes you through both buying and selling scenarios.{" "}
          <a href="/en-gb/learn-forex/forex-examples">
            See forex trading examples
          </a>
        </>
      ),
    },
    {
      question: "What is margin in forex?",
      answer: (
        <>
          Forex margin rates are usually expressed as a percentage, with forex
          margin requirements typically starting at around 3.3% in the UK for
          major foreign exchange currency pairs. Your FX broker&apos;s margin
          requirement shows you the leverage you can use when trading forex with
          that broker.{" "}
          <a href="/en-gb/learn-forex/what-is-margin-in-forex-trading">
            Margin in forex trading
          </a>
        </>
      ),
    },
    {
      question: "What is leveraged trading?",
      answer: (
        <p>
          One of the advantages of spread betting and trading CFDs is that you
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
        <>
          <Link href="/spread-betting">Spread betting</Link> allows you to trade
          tax-free on a wide range of financial markets 24 hours a day, from
          Sunday nights through to Friday nights. Trade on your phone, tablet,
          PC or Mac on a wide range of instruments using leverage. Tax treatment
          depends on individual circumstances and can change or may differ in a
          jurisdiction other than the UK.{" "}
          <a href="/en-gb/learn-spread-betting/what-is-spreadbetting">
            Learn how spread betting works
          </a>
          .
        </>
      ),
    },
  ],
};

export const getStaticProps = async () => {
  const posts = await getNewsArticles("forex");

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const ForexTrading = (props: any) => {
  const pageItems: ScrollSpyItem = {
    hero: {
      title: "Overview",
      ref: useRef<HTMLElement | null>(null),
    },
    ourPlatforms: {
      title: "Our platforms",
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
          Forex Trading Online | Forex Currency Trading | CMC Markets
        </title>
        <meta
          name="description"
          content="Trade forex online and access over 300 spot and forward FX pairs, including EUR/USD &amp; GBP/USD using our trading platform. See all of our FX pairs here."
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      <InstrumentHeroWide
        ref={pageItems.hero.ref}
        title="Forex trading"
        content={
          <ul className="list-disc pl-4">
            <li className="text-xl">
              Trade on 330+ forex pairs with leverage on our award-winning
              spread bet and CFD platforms<sup>1</sup>
            </li>
            <li className="text-xl">
              Spreads from 0.0 pips<sup>2</sup> with our FX Active account
            </li>
            <li className="text-xl">
              Ultra-fast execution<sup>3</sup> with no partial fills
            </li>
            <li className="text-xl">
              Experienced customer service available 24/5
            </li>
          </ul>
        }
        animatedIcon={awsImage("forex-animated-icon.gif")}
        imgUrl={awsImage("forex-trading_hero-img.png")}
        bgImgUrl={awsImage("forex-trading_hero-bg2.png")}
        mobileImgUrl={awsImage("forex-trading_hero-mob-160224.png")}
        fscsFootnote={"4"}
        enableLine={false}
      />

      {/* What is forex trading */}
      <WhatIs
        title={"What is forex trading?"}
        text={
          <>
            <p>
              Foreign exchange (forex) trading, is the buying and selling of one
              currency against another, in what is the world&apos;s most
              actively traded market.
            </p>
            <p>
              The forex market operates 24/5, and many traders are drawn to it
              because of its volatility, and the potential trading
              opportunities.
            </p>
          </>
        }
        instrumentsToLoad={instrumentCards}
        sideBgImg={awsImage("forex-trading_side-bg.png")}
      />

      {/* Why trade forex */}
      <WhyTrade title={"Why trade forex with us?"} data={whyTradeData} />

      {/* Platform types */}
      <PlatformTypes3Col
        ref={pageItems.ourPlatforms.ref}
        platformLeft={<PlatformWeb footnotes={["1"]} />}
        platformMiddle={<PlatformMobile />}
        platformRight={<PlatformMT4 />}
      />

      <TrustpilotSliderB footnotes={["5"]} />

      <ForexAccountTypes ref={pageItems.accountTypes.ref} />

      <LatestNewsSection title={"News"} posts={props.posts} />

      <FAQ ref={pageItems.faqs.ref} faqListCol1={faqQuestions} />

      <ReadyToGetStarted
        platformImg={awsImage("ready-to-start-trading-forex-trading-img.png")}
        bgImg={awsImage("ready-to-start-trading-forex-trading-bg.jpg")}
        mobilePlatformImg={awsImage(
          "ready-to-start-trading-forex-trading-mob.png"
        )}
        mobileBgImg={awsImage(
          "ready-to-start-trading-forex-trading-bg-mob.jpg"
        )}
      />

      <Footnotes
        footnotesList={[
          <>
            Awarded No.1 Web Platform, ForexBrokers.com Awards 2023;​ No.1
            Platform Technology &amp; No.1 Most Currency Pairs, ForexBrokers.com
            Awards 2022; Best Mobile Trading, ADVFN International Financial
            Awards 2022; Platform Best Spread Betting Provider, The City of
            London Wealth Management Awards 2021; No. 1 Most Currency Pairs,
            ForexBrokers.com 2023; Best Phone Customer Service &amp; Best Email
            Customer Service, based on highest user satisfaction among spread
            betters, CFD and FX traders, Investment Trends 2020 UK Leverage
            Trading Report.
          </>,
          <>Fixed commission at $2.5 per $100,000 notional value traded.</>,
          <>{constants.DIDS.GLOBAL_CFD_EXECUTION_TIME}</>,
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
            1.388 million unique user logins for the CMC Markets invest and CFD
            platforms globally, as at August 2023. Active clients represent
            those individual clients who have traded with or held CFD or spread
            bet positions or who traded on the stockbroking platform on at least
            one occasion during the financial year.
          </>,
          <>
            Tax treatment depends on individual circumstances and can change or
            may differ in a jurisdiction other than the UK.
          </>,
        ]}
      />
    </>
  );
};

export default ForexTrading;
