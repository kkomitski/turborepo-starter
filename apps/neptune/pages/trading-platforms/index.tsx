/* eslint-disable @next/next/no-html-link-for-pages */
import OnboardingButton from "@/components/elements/OnboardingButton";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import AccountTypes3Col from "@/components/modules/Common/AccountTypes3Col";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import Footnotes from "@/components/modules/Common/Footnotes";
import HeroAccoladesSectionA from "@/components/modules/Common/Hero/Common/HeroAccoladesSectionA";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import WhyTrade from "@/components/modules/Markets/WhyTrade";
import Hero from "@/components/modules/Pages/trading-platforms/Hero";
import MT4Platform from "@/components/modules/Pages/trading-platforms/MT4Platform";
import MobileTrading from "@/components/modules/Pages/trading-platforms/MobileTrading";
import WebPlatform from "@/components/modules/Pages/trading-platforms/WebPlatform";
import constants, { awsImage } from "@/helpers/constants";
import { ScrollSpyItem } from "@/helpers/types/general";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";

const faqQuestions: FAQColumn = {
  title: "Trading platform FAQs",
  faqList: [
    {
      question: "What is the best trading platform for beginners?",
      answer: (
        <>
          Our award-winning, proprietary platform<sup>1</sup> features a host of
          material on spread betting and CFD trading, plus access strategies,
          tips, and costs to help you get started.{" "}
          <a href="/en-gb/trading-platform/open-a-trading-account">
            Open an account
          </a>{" "}
          to start trading on thousands of financial markets using our trading
          software.
        </>
      ),
    },
    {
      question: "What platforms can I trade on?",
      answer: (
        <>
          We offer three trading platforms: our web-based platform, our mobile
          app, and MetaTrader 4. You can trade CFDs on MT4 and also spread bet
          tax-free<sup>4</sup> on our web and mobile platforms, with access to a
          wide range of forex pairs, indices, commodities, shares, ETFs and
          more.{" "}
          <a href="/en-gb/trading-platform/next-generation-vs-metatrader-4">
            Compare our trading platforms
          </a>
          ​.
        </>
      ),
    },
    {
      question: "Why use a trading platform?",
      answer: (
        <>
          A derivative trading platform allows to you trade on both sides of the
          markets using spread bets and CFDs, without the need to directly
          interact with a broker. You can also take advantage of advanced
          technical and fundamental analysis tools to assist your trading
          strategy. Trades can be executed in a single click or tap, and at
          lightning-fast execution speeds<sup>6</sup>. Learn more with our{" "}
          <a href="/en-gb/platform-guides">platform guides and tutorials</a>.
        </>
      ),
    },
    {
      question: "What is a trading platform?",
      answer: (
        <>
          A trading platform allows you to purchase a&nbsp;number of CFD
          (contracts for difference) units or a pre-determined amount per point
          of movement&nbsp;(for your spread bet stake)&nbsp;for a particular
          instrument, such as a currency pair, index or commodity, allowing you
          to trade on its short-term price movements without the need to
          purchase the underlying asset. Learn more about our{" "}
          <a href="/en-gb/spread-betting/trading-platform">
            spread betting platform
          </a>{" "}
          {""}
          and <a href="/en-gb/cfds/trading-platform">CFD trading platform</a>.
        </>
      ),
    },
  ],
};

const TradingPlatforms = (props: any) => {
  const pageItems: ScrollSpyItem = {
    hero: {
      title: "Overview",
      ref: useRef<HTMLElement | null>(null),
    },
    webPlatform: {
      title: "Web platform",
      ref: useRef<HTMLElement | null>(null),
    },
    mobileApp: {
      title: "Mobile app",
      ref: useRef<HTMLElement | null>(null),
    },
    mt4: {
      title: "MetaTrader 4 (MT4)",
      ref: useRef<HTMLElement | null>(null),
    },
  };

  const whyTradeObj = [
    {
      title: "Ultra-fast execution",
      text: (
        <>
          Experience fully automated, lightning-fast execution speeds of 0.0030
          seconds. ({constants.DIDS.GLOBAL_CFD_EXECUTION_TIME})
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
      title: "Transparent pricing",
      text: "See bid and ask prices, premiums, and more up front, helping you to understand your costs before you place a trade.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_pound-magnifying-glass-48.svg"),
      },
    },
    {
      title: "Powerful charting",
      text: "Gather and analyse data with 115+ indicators and drawing tools.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_chart-square-bar-48.svg"),
      },
    },
    {
      title: "Market insights",
      text: "Understand trends with our pattern-recognition scanner, and gauge market sentiment with our handy tools.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_sparkles-48.svg"),
      },
    },
    {
      title: "Trusted financial news and analysis",
      text: "Read Morningstar equity research and Reuters news within the platform.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_newspaper-48.svg"),
      },
    },
    {
      title: "On-the-go trading",
      text: "Download our mobile app and get the functionality of our web platform in your pocket, allowing you to open, close and modify trades on the move.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_mobile-48.svg"),
      },
    },
    {
      title: "Instant notifications",
      text: "Use our platform to set up trading alerts via push notification, text message or email.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_bell-48.svg"),
      },
    },
  ];

  return (
    <div>
      <Head>
        <title>
          The UK&apos;s Best Trading Platform¹ | Web &amp; Mobile | CMC Markets
          | CMC Markets
        </title>
        <meta
          name="description"
          content="Our award-winning trading platforms¹ are available across desktop, mobile and tablet devices. Sign up for an account or download the app to start your journey."
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      <Hero
        ref={pageItems.hero.ref}
        title={
          <>
            Discover the UK’s leading, award-winning trading platform
            <sup>1</sup>
          </>
        }
        description={
          <>
            Packed with powerful features, yet intuitive, and available to
            everyone. Whatever the next step in your trading journey, our
            platforms can help you get there.
          </>
        }
      />
      <HeroAccoladesSectionA fscsFootnote="2" />

      <WhyTrade
        title="Why trade on our trading platforms?"
        data={whyTradeObj}
      />

      <WebPlatform ref={pageItems.webPlatform.ref} />
      <MobileTrading ref={pageItems.mobileApp.ref} />
      <MT4Platform ref={pageItems.mt4.ref} />

      <AccountTypes3Col
        accountTypeLeft={<AccountType type={"sb"} footnotes={["4"]} />}
        accountTypeMiddle={<AccountType type={"cfd"} footnotes={["4"]} />}
        accountTypeRight={<AccountType type={"fx"} footnotes={["3", "4"]} />}
      />

      <TrustpilotSliderB footnotes={["5"]} />

      <FAQ faqListCol1={faqQuestions} />

      <ReadyToGetStarted
        content={
          "Open a demo account with £10,000 of virtual funds or open a live account."
        }
        ctaBtns={
          <>
            <div className="flex flex-col md:flex-row md:gap-2">
              <OnboardingButton
                className="mx-auto mb-2 md:mx-0 md:mb-0"
                account="live"
                params="jid=gb1&amp;iaid=null&amp;lsrc=1"
                variant="azure"
              >
                Start spread betting
              </OnboardingButton>
              <OnboardingButton
                className="mx-auto md:mx-0"
                account="demo"
                params="jid=gb3&amp;iaid=null&amp;lsrc=1"
                variant="primary-outline"
              >
                Open a demo account
              </OnboardingButton>
            </div>
          </>
        }
      />

      <Footnotes
        footnotesList={[
          <>
            Awarded No.1 Web Platform, No.1 Most Currency Pairs, & No.1 Podcast
            Series, ForexBrokers.com Awards 2023; No.1 Platform Technology,
            ForexBrokers.com Awards 2022; Best CFD Provider, Online Money Awards
            2022; Best Mobile Trading Platform, ADVFN International Financial
            Awards 2022; Best In-House Analysts, Professional Trader Awards
            2022.
          </>,
          <>
            FSCS is an independent body that offers protection to customers of
            financial services firms that have failed. The compensation amount
            may be up to £85,000 per eligible person, per firm. {""}
            <Link
              target="_blank"
              href="https://www.fscs.org.uk/"
              rel="noopener noreferrer"
            >
              Eligibility conditions apply
            </Link>
            . Please contact the FSCS for more information.
          </>,
          <>Fixed commission at $2.5 per $100,000 notional value traded.</>,
          <>
            Tax treatment depends on individual circumstances and can change or
            may differ in a jurisdiction other than the UK.
          </>,
          <>
            1.388 million unique user logins for the CMC Markets invest and CFD
            platforms globally, as at August 2023.
          </>,
        ]}
        enableDisclaimer={true}
      />
    </div>
  );
};

export default TradingPlatforms;
