/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import React, { useRef } from "react";
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import AccountTypes3Col from "@/components/modules/Common/AccountTypes3Col";
import Alpha from "@/components/modules/Common/Alpha";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import PlatformMT4 from "@/components/modules/Common/PlatformTypes/PlatformMT4";
import PlatformMobile from "@/components/modules/Common/PlatformTypes/PlatformMobile";
import PlatformTypes2Col from "@/components/modules/Common/PlatformTypes2Col";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import PerformanceAnalytics from "@/components/modules/Pages/trading-platforms/web-trading-platform/PerformanceAnalytics";
import PinpointPricing from "@/components/modules/Pages/trading-platforms/web-trading-platform/PinpointPricing";
import SupportingYourStrategy from "@/components/modules/Pages/trading-platforms/web-trading-platform/SupportingYourStrategy";
import YourSpace from "@/components/modules/Pages/trading-platforms/web-trading-platform/YourSpace";
import constants, { awsImage } from "@/helpers/constants";
import MainHeroNarrow from "@/components/modules/Common/Hero/MainHeroNarrow";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import Link from "next/link";
import OnboardingButton from "@/components/elements/OnboardingButton";
import Footnotes from "@/components/modules/Common/Footnotes";
import ToolsBuiltV2 from "@/components/modules/Common/ToolsBuiltV2";
import { ScrollSpyItem } from "@/helpers/types/general";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";

const faqQuestions: FAQColumn = {
  title: "Web platform FAQs",
  faqList: [
    {
      question: "Why trade on a web-based platform?",
      answer: (
        <>
          Our web platform means there’s no download required to install the
          platform, while our charts are clear and easy to read, and you can
          view multiple charts simultaneously on one screen.{" "}
          <a href="/en-gb/trading-platforms/charting-features">
            Learn more about our charting features.
          </a>
        </>
      ),
    },
    {
      question: "Which trading platform is more suitable for me?",
      answer: (
        <>
          <p>
            This depends on the product and asset you would like to trade. You
            can spread bet tax-free<sup>7</sup> and trade CFDs on more than
            12,000 financial instruments on our award-winning web-based
            platform, including on forex, indices, commodities, shares,
            treasuries and ETFs. Our platform is equipped with a number of
            powerful features and tools, including a comprehensive charting
            package.
          </p>
          <p>
            MetaTrader 4 enables you to spread bet or trade CFDs on a large
            number of forex pairs, as well as all the major indices and
            commodities. With MT4, you can download or create programs called
            Expert Advisors to automate your trading.{" "}
            <a href="/en-gb/trading-platform/next-generation-vs-metatrader-4">
              Compare our trading platforms
            </a>
            .
          </p>
        </>
      ),
    },
    {
      question: "What other devices can I trade on?",
      answer: (
        <>
          Our web-based platform works across multiple browsers, and you can
          trade on your mobile or tablet via our app, which includes
          mobile-optimised charting and in-app push notifications. Start by {""}
          <Link href="/trading-platforms/mobile-trading-app">
            downloading the mobile apps
          </Link>{" "}
          for iOS and Android.
        </>
      ),
    },
    {
      question: "Do I need to download or install any software?",
      answer: (
        <>
          No – you can create an account and log in to our web-based platform
          using your chosen browser. You&apos;ll be able to access the financial
          markets without installing any special software.
        </>
      ),
    },
  ],
};

const WebTradingPlatform = (props: any) => {
  const pageItems: ScrollSpyItem = {
    hero: {
      title: "Overview",
      ref: useRef<HTMLElement | null>(null),
    },
    tools: {
      title: "Web trading tools",
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
          Explore the UK&apos;s Best Web Trading Platform¹ | CMC Markets | CMC
          Markets
        </title>
        <meta
          name="description"
          content="Our powerful and intuitive online trading platform offers award-winning features¹ for web-based traders. Sign up for a free demo account to get started."
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      {/* Hero */}
      <MainHeroNarrow
        ref={pageItems.hero.ref}
        title={
          <>
            The UK&apos;s best online trading platform<sup>1</sup>
          </>
        }
        content={
          <div className="text-xl">
            <p>
              We&apos;ve built our web trading platform, Next Generation, to be
              powerful and intuitive.
            </p>
            <p>
              It combines leading-edge features and security, lightning-fast
              execution<sup>2</sup>, and best-in-class insight and analysis.
              Designed to support any strategy.
            </p>
          </div>
        }
        imgUrl={awsImage("web-platform_hero-img.png")}
        bgImgUrl={awsImage("web-platform_hero-side-bg.png")}
        mobileImgUrl={awsImage("cfds_platform-hero-mob.png")}
        fscsFootnote={"3"}
        overrideCTA={
          <div className="mb-6 flex flex-col gap-2 pl-9">
            <OnboardingButton
              variant="azure"
              account="live"
              size="lg"
              params="jid=gb1&iaid=null&lsrc=1"
            >
              Create account
            </OnboardingButton>
            <OnboardingButton
              variant="primary-outline"
              account="demo"
              size="lg"
              params="jid=gb3&iaid=null&lsrc=1"
            >
              Open demo account
            </OnboardingButton>
          </div>
        }
      />

      {/* Tools built */}
      <ToolsBuiltV2
        ref={pageItems.tools.ref}
        title={"Tools built to enhance your analysis"}
        tools={[
          {
            name: "Pattern recognition scanner",
            description: (
              <>
                We automatically scan over 120 of our most popular instruments
                every 15 minutes for emerging and completed chart patterns, such
                as wedges, channels and head & shoulders formations, and overlay
                them on to your charts to alert you to potential emerging
                trends.
              </>
            ),
            link: "/en-gb/platform-guides/pattern-recognition-scanner",
            image: {
              src: awsImage("tools-built_pattern-recognition-scanner-2.png"),
              width: 808,
              height: 484,
            },
          },
          {
            name: "Advanced order execution",
            description: (
              <>
                We offer a range of advanced order types, including trailing and
                guaranteed stop losses, partial closure, market orders and
                boundary orders on every trade, so you have the flexibility to
                trade your way.
              </>
            ),
            image: {
              src: awsImage("tools-built_advanced-order-execution.png"),
              width: 808,
              height: 484,
            },
          },
          {
            name: "Reuters news and analysis",
            description: (
              <>
                Keep up to date with Reuters news and market commentary from our
                global analysts.
              </>
            ),
            image: {
              src: awsImage("tools-built_reuters-news-and-analysis.png"),
              width: 808,
              height: 484,
            },
          },
          {
            name: "Powerful charting capability",
            description: (
              <>
                Choose from over 115 technical indicators and drawing tools,
                more than 70 patterns and 12 in-built chart types.
              </>
            ),
            image: {
              src: awsImage("tools-built_industry-leading-charting.png"),
              width: 808,
              height: 484,
            },
          },
        ]}
      />

      {/* Performance analytics */}
      <PerformanceAnalytics
        title="Performance analytics"
        content={
          <>
            {" "}
            <p className="mb-6">
              Analyse your trading history and view your data in an intuitive
              and meaningful way. Understand which trading behaviours and
              patterns are making you the most money, where your strategy is
              leaking money, and your current level of risk.
            </p>
            <p>Available to all live account holders.</p>
          </>
        }
        image={awsImage("web-platform_performance-analytics-img.png")}
      />

      {/* Pinpoint pricing */}
      <PinpointPricing
        list={[
          {
            title: "One-click trading",
            description:
              "Set your default position size and enter with a single 'click'.",
            icon: awsImage("icon_cursor-click-48-black.svg"),
          },
          {
            title: "Fast execution; no partial fills",
            description:
              "All orders are fully executed without dealer intervention, regardless of your trading size.",
            icon: awsImage("icon_up-down-tick-48-black.svg"),
          },
          {
            title: "Reliably stable",
            description: (
              <>
                We consistently achieve core platform uptime<sup>4</sup>, so you
                can focus on your trading.
              </>
            ),
            icon: awsImage("icon_shield-check-48-black.svg"),
          },
          {
            title: "Precise pricing",
            description:
              "We crunch 225m prices every day, from up to 14 tier-one liquidity provider feeds.",
            icon: awsImage("icon_precision-pricing-48-black.svg"),
          },
        ]}
      />

      {/* Todo: Transition this component to the WhyTrade component  */}
      <SupportingYourStrategy
        points={[
          {
            title: "Comprehensive range of order types",
            description:
              "Define your exit prices using stops and take-profit orders, along with options such as trailing stops, partial close-out, and boundary orders.",
            linkText: "More on order types",
            linkUrl:
              "/en-gb/trading-platform/order-execution#advanced-order-features",
            icon: awsImage("icon_favourites-48.svg"),
          },
          {
            title: "Price alerts",
            description:
              "Track the markets that matter to you and easily find out about the latest movements.",
            linkText: "More on price alerts",
            linkUrl: "/en-gb/platform-guides/trading-alerts",
            icon: awsImage("icon_line-grow-magnifying-glass-48.svg"),
          },
          {
            title: "Guaranteed stop-loss orders",
            description:
              "Get 100% certainty that your stop-loss will be executed at the price you choose.",
            linkText: "More on GSLOs",
            linkUrl: "/en-gb/platform-guides/guaranteed-stop-loss-orders",
            icon: awsImage("icon_lock-closed-48.svg"),
          },
          {
            title: "Hedge your trades",
            description:
              "Hedge a physical position in the underlying market with a trade on our platform, or open simultaneous buy and sell positions in your account.",
            linkText: "More on hedging",
            linkUrl: "/en-gb/trading-guides/hedging-strategies",
            icon: awsImage("icon_adjustments-48.svg"),
          },
          {
            title: "100% automated execution",
            description:
              "You can be sure your trade will be filled with no dealer intervention.",
            linkText: "More on order execution",
            linkUrl: "/en-gb/trading-platform/order-execution",
            icon: awsImage("icon_up-down-tick-48.svg"),
          },
          {
            title: "Trade from charts",
            description:
              "Enter and close positions, and update your limit and stop orders directly from charts.",
            linkText: "More on trading charts",
            linkUrl: "/en-gb/platform-guides/trading-charts",
            icon: awsImage("icon_chart-square-bar-48.svg"),
          },
        ]}
      />

      {/* Your space, your place */}
      <YourSpace />

      {/* Account types */}
      <AccountTypes3Col
        ref={pageItems.accountTypes.ref}
        title="Compare our account types"
        enableComparisonBtn={true}
        accountTypeLeft={<AccountType type={"sb"} footnotes={["5"]} />}
        accountTypeMiddle={<AccountType type={"cfd"} footnotes={["5"]} />}
        accountTypeRight={<AccountType type={"fx"} footnotes={["6", "5"]} />}
      />

      {/* Trustpilot slider */}
      <TrustpilotSliderB footnotes={["7"]} />

      {/* Platform types */}
      <PlatformTypes2Col
        platformLeft={<PlatformMobile />}
        platformRight={<PlatformMT4 />}
      />

      {/* FAQ */}
      <FAQ ref={pageItems.faqs.ref} faqListCol1={faqQuestions} />

      {/* Ready to get started */}
      <ReadyToGetStarted
        platformImg={awsImage("cfds_bottom-platforms-img.png")}
        mobilePlatformImg={awsImage("cfds_bottom-platforms-img-mob.png")}
        content={
          "Open a demo account with £10,000 of virtual funds or open a live account."
        }
      />

      {/* Footnotes */}
      <Footnotes
        enableDisclaimer={true}
        footnotesList={[
          <>
            Awarded No.1 Web Platform and No.1 Most Currency Pairs,
            ForexBrokers.com Awards 2023; No.1 Platform Technology,
            ForexBrokers.com Awards 2022; Best CFD Provider, Online Money Awards
            2022; Best Mobile Trading Platform, ADVFN International Financial
            Awards 2022; Best In-House Analysts, Professional Trader Awards
            2022; Best Spread Betting Provider, City of London Wealth Management
            Awards 2021.
          </>,
          <>{constants.DIDS.GLOBAL_CFD_EXECUTION_TIME}</>,
          <>{constants.DIDS.FSCS_FOOTNOTE}</>,
          <>
            99.97% core platform uptime, CMC Markets financial year 2022-2023.
          </>,
          <>
            Tax treatment depends on individual circumstances and can change or
            may differ in a jurisdiction other than the UK.
          </>,
          <>Fixed commission at $2.5 per $100,000 notional value traded</>,
          <>
            1.388 million unique user logins for the CMC Markets invest and CFD
            platforms globally, as at August 2023.
          </>,
        ]}
      />
    </>
  );
};

export default WebTradingPlatform;
