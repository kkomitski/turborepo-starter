/* eslint-disable @next/next/no-html-link-for-pages */
import Alpha from "@/components/modules/Common/Alpha";
import AwardWinning, {
  AwardObject,
} from "@/components/modules/Common/AwardWinning";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import PlatformTypes3Col from "@/components/modules/Common/PlatformTypes3Col";
import SupportOurTraders from "@/components/modules/Common/SupportOurTraders";
import RelatedPages, {
  RelatedPageObject,
} from "@/components/modules/Common/RelatedPages";
import React, { MutableRefObject, useEffect, useRef } from "react";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import constants, { awsImage } from "@/helpers/constants";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import WhyTrade from "@/components/modules/Markets/WhyTrade";
import { WhyTradeObj } from "@/components/modules/Markets/WhyTrade/WhyTradeCard";
import Link from "next/link";
import WhatIs from "@/components/modules/ProductPage/WhatIs";
import Footnotes from "@/components/modules/Common/Footnotes";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import PlatformWeb from "@/components/modules/Common/PlatformTypes/PlatformWeb";
import PlatformMobile from "@/components/modules/Common/PlatformTypes/PlatformMobile";
import PlatformMT4 from "@/components/modules/Common/PlatformTypes/PlatformMT4";
import MainHeroWide from "@/components/modules/Common/Hero/MainHeroWide";
import Head from "next/head";
import InstrumentsTableHeader from "@/components/modules/Common/Basic/InstrumentsTableHeader";
import OneColumn from "@/components/modules/Common/Basic/OneColumn";
import OnboardingButton from "@/components/elements/OnboardingButton";
import RightArrowSVG from "@/components/svg/RightArrowSVG";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import { ScrollSpyItem } from "@/helpers/types/general";
import SectionContainer from "@/components/modules/Common/Basic/SectionContainer";

const instrumentMapping: InstrumentTableMapping = {
  columns: [
    { name: "Product" },
    { name: "Min Spread" },
    { name: "Margin" },
    { name: "Price" },
    { name: "Day" },
    { name: "Week" },
    { name: "Trend" },
  ],
  instruments: [
    {
      tabName: "Most popular",
      instruments: [
        "X-ABFJV",
        "X-AASOB",
        "X-ABFMB",
        "X-AASKN",
        "X-AASUB",
        "X-AAPHT",
        "X-AAPGW",
      ],
    },
    {
      tabName: "Indices",
      instruments: [
        "X-ABFDN",
        "X-ABFJV",
        "X-AASOB",
        "X-ABFMY",
        "X-ABFMB",
        "X-AALXA",
        "X-AATTA",
      ],
    },
    {
      tabName: "Forex",
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
      tabName: "Commodities",
      instruments: [
        "X-AASUB",
        "X-AAPHT",
        "X-AAPGW",
        "X-ABCLO",
        "X-AAYIN",
        "X-AAZUO",
        "X-AAPAG",
      ],
    },
    {
      tabName: "Shares",
      instruments: [
        "X-ABEHN",
        "X-AALAD",
        "X-AALJF",
        "X-AARLJ",
        "X-AAMYD",
        "X-AAWUO",
        "X-AAMHD",
      ],
      columns: [
        { name: "Product" },
        { name: "Margin" },
        { name: "Price" },
        { name: "Day" },
        { name: "Week" },
        { name: "Trend" },
      ],
    },
    {
      tabName: "ETFs",
      instruments: [
        "X-AATBX",
        "X-AATBZ",
        "X-ABDFM",
        "X-AATIW",
        "X-AAOYV",
        "X-AAVJN",
        "X-ABFUI",
      ],
      columns: [
        { name: "Product" },
        { name: "Margin" },
        { name: "Price" },
        { name: "Day" },
        { name: "Week" },
        { name: "Trend" },
      ],
    },
    {
      tabName: "Share baskets",
      instruments: [
        "X-ALMEO",
        "X-ALMFA",
        "X-ALMEV",
        "X-ALMFB",
        "X-ALMFC",
        "X-ALMEX",
        "X-ALMES",
      ],
    },
    {
      tabName: "Rates & bonds",
      instruments: [
        "X-ABFOJ",
        "X-ABFNT",
        "X-ABFOZ",
        "X-AARFT",
        "X-ABFOR",
        "X-ABFEC",
        "X-AARFL",
      ],
    },
  ],
};

const whyTradeData: Array<WhyTradeObj> = [
  {
    title: (
      <>
        Tax-free profits<sup>2</sup>
      </>
    ),
    text: "Pay no capital gains tax or stamp duty on profits from UK spread betting.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_receipt-tax-48.svg"),
      alt: "",
    },
  },
  {
    title: "Trade with leverage",
    text: `Deposit just ${constants.DIDS.UK_MARGIN_RATE_MINIMUM} of the full value of your position to open a position. Leverage amplifies both potential profits and losses equally and increases the risk of losing money rapidly.`,
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_chart-pie-48.svg"),
      alt: "",
    },
  },
  {
    title: "Access to a diverse range of markets",
    text: `Trade on ${constants.DIDS.INSTRUMENT_TOTAL_COUNT} instruments across forex, indices, commodities, shares, ETFs, treasuries and share baskets.`,
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_favourites-48.svg"),
      alt: "",
    },
  },
  {
    title: "No currency conversion fees",
    text: "Start spread betting on US stocks without currency conversion fees (other fees may apply).",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_tag-48.svg"),
      alt: "",
    },
  },
  {
    title: "Trade on both rising and falling markets",
    text: "Benefit from both selling (shorting) and buying opportunities.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_up-down-48.svg"),
      alt: "",
    },
  },
  {
    title: "Industry-leading charting",
    text: "Gather and analyse data with 40+ indicators and drawing tools.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_chart-square-bar-48.svg"),
      alt: "",
    },
  },
  {
    title: "Experienced customer service",
    text: "Our team is available from Sunday night to Friday night.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_customer-service-48.svg"),
      alt: "",
    },
  },
];

const awards: Array<AwardObject> = [
  {
    title: "No.1 Web Platform",
    giver: "Online Forex Brokers Review and Ratings",
    year: "2023",
  },
  {
    title: "Best Spread Betting Provider",
    giver: "The City of London Wealth Management",
    year: "2021",
  },
  {
    title: "Best Mobile Trading Platform",
    giver: "ADVFN International Financial Awards",
    year: "2022",
  },
  {
    title: "Best Spread Betting & CFD Education Tools",
    giver: "ADVFN International Financial Awards",
    year: "2021",
  },
];

const relatedPages: Array<RelatedPageObject> = [
  {
    title: "What is spread betting?",
    description:
      "Dig deeper into what spread betting is and understand how it works.",
    url: "/learn-spread-betting/what-is-spreadbetting",
    thumbnail: awsImage("spread-betting_what-is-spreadbetting-thumbnail.png"),
  },
  {
    title: "Spread betting vs CFDs",
    description:
      "Discover the differences between spread betting and CFD trading, and find out which is best for you.",
    url: "/learn-spread-betting/spread-betting-vs-cfd",
    thumbnail: awsImage("spread-betting_spreadbetting-vs-cfds-thumbnail.png"),
  },
  {
    title: "Spread betting vs share dealing",
    description:
      "Find out the differences between spread betting and traditional share trading.",
    url: "/trading-guides/spread-betting-vs-share-dealing",
    thumbnail: awsImage(
      "spread-betting_spreadbetting-vs-share-dealing-thumbnail.png"
    ),
  },
];

const faqQuestions: FAQColumn = {
  title: "New to spread betting?",
  faqList: [
    {
      question: "How can beginners get started?",
      answer: (
        <>
          See our{" "}
          <a href="/en-gb/learn-spread-betting/what-is-spreadbetting">
            spread betting definition
          </a>{" "}
          and find out how to open an account and start speculating on the
          markets with us in our <span>complete guide</span>, which includes
          funding your account, navigating our platform and more.
        </>
      ),
    },
    {
      question: "How does share trading differ from derivative trading?",
      answer: (
        <>
          Trading derivatives on shares differs from the traditional investment
          approach of buying and owning shares. One difference is that you can
          utilise leverage, which means you only need to put up a percentage of
          the full value of the trade. This means any profit or loss you make is
          magnified, relative to a share&apos;s price fluctuations. Read more
          about{" "}
          <a href="/en-gb/trading-guides/spread-betting-vs-share-dealing">
            derivative vs traditional share trading
          </a>
          .
        </>
      ),
    },
    {
      question: "Why spread bet?",
      answer: (
        <>
          The product&apos;s unique benefit is that it&apos;s exempt from both
          capital gains tax and stamp duty<sup>†</sup>. When compared to
          conventional share trading and CFD trading, it&apos;s the only trading
          product to offer tax-free trading in the UK and Ireland.
        </>
      ),
    },
    {
      question: "Are there any risks involved?",
      answer: (
        <>
          <p>
            It&apos;s important to understand the risks associated with
            financial trading in general, which relate to leverage, account
            close-out, market volatility and market gapping.
          </p>
          <p>
            Learn more about{" "}
            <a href="/en-gb/trading-guides/money-and-risk-management">
              managing risk
            </a>{" "}
            in spread betting.
          </p>
        </>
      ),
    },
    {
      question: "What's the difference between spread betting and CFD trading?",
      answer: (
        <>
          These are both margined products and can provide similar economic
          benefits to investments in shares, indices, commodities and
          currencies; however, CFDs are treated differently for taxation. View
          our article on{" "}
          <a href="/en-gb/learn-spread-betting/spread-betting-vs-cfd">
            spread betting versus CFD trading
          </a>{" "}
          to find out which product is more suited to your trading needs.
        </>
      ),
    },
  ],
};

const SpreadBetting = (props: any) => {
  const pageItems: ScrollSpyItem = {
    hero: {
      title: "Overview",
      ref: useRef<HTMLElement | null>(null),
    },
    costs: {
      title: "Costs",
      ref: useRef<HTMLElement | null>(null),
    },
    ourPlatforms: {
      title: "Our platforms",
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
          Trade with the UK&apos;s No.1 Spread Betting Broker | CMC Markets
        </title>
        <meta
          name="description"
          content="Open an account &amp; start spread betting in the UK on 12k+ markets tax free*. Trade on forex, global stocks, commodities, bonds &amp; shares with low spreads."
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      {/* Hero */}
      <MainHeroWide
        ref={pageItems.hero.ref}
        title={
          <>
            UK’s No.1 spread betting account<sup>1</sup>
          </>
        }
        content={
          <ul className="list-disc pl-4">
            <li className="text-xl">
              Spread bet on rising or falling financial markets
            </li>
            <li className="text-xl">
              Trade {constants.DIDS.INSTRUMENT_TOTAL_COUNT} instruments across
              forex, indices, commodities, shares, ETFs, and treasuries
            </li>
            <li className="text-xl">
              Tight spreads, no hidden fees, and tax-free profits<sup>2</sup>
            </li>
            <li className="text-xl">
              Access advanced tools for precise charting
            </li>
          </ul>
        }
        imgUrl={awsImage("spread-betting_hero-img.png")}
        bgImgUrl={awsImage("spread-betting_hero-bg.png")}
        mobileImgUrl={awsImage("spread-betting_hero-mob.png")}
        fscsFootnote={"3"}
        overrideCTA={
          <div className="mb-6 flex flex-col gap-x-2 pl-9">
            <OnboardingButton
              params="jid=gb1&amp;iaid=null&amp;lsrc=1"
              account="live"
              variant="azure"
              size="lg"
              className="mb-2"
            >
              Start spread betting
            </OnboardingButton>
            <OnboardingButton
              params="jid=gb3&amp;iaid=null&amp;lsrc=1"
              account="demo"
              variant="primary-outline"
              size="lg"
            >
              Open demo account
            </OnboardingButton>
          </div>
        }
      />

      {/* What is spread betting */}
      <WhatIs
        title={"What is spread betting?"}
        content={
          <>
            <p className="mb-10">
              Spread betting is a form of financial trading allowing traders to
              speculate on the price movements of various assets without owning
              them. Spread betting with us offers flexibility, access to{" "}
              {constants.DIDS.INSTRUMENT_TOTAL_COUNT} instruments, and potential
              tax-free profits.
            </p>
            <Link
              className="btn btn-primary-outline btn-with-icon"
              href="/learn-spread-betting/what-is-spreadbetting"
            >
              <span>Learn more about spread betting</span>
              <RightArrowSVG />
            </Link>
          </>
        }
        sideImage={awsImage("spread-betting_what-is-side-img.png")}
        sideBgImage={awsImage("spread-betting_what-is-side-bg.png")}
      />

      {/* Why trade spread betting */}
      <WhyTrade
        title={"Why open a spread betting account with us?"}
        data={whyTradeData}
      />

      {/* Trustpilot slider */}
      <TrustpilotSliderB footnotes={["4"]} />

      {/* Instruments Header & Table */}
      <SectionContainer ref={pageItems.costs.ref}>
        <InstrumentsTableHeader
          title={
            <>
              {" "}
              Understand our{" "}
              <span className="lg:block">spread betting costs</span>
            </>
          }
          contentRight={
            <div className="max-w-2xl text-xl">
              <p>
                With more <Link href="/forex-trading">forex pairs</Link> than
                any other major broker, and a huge range of{" "}
                <Link href="/markets-indices">indices</Link>,{" "}
                <Link href="/markets-commodity-trading">commodities</Link>,{" "}
                <Link href="/markets-shares">shares</Link>,{" "}
                <Link href="/etf-trading">ETFs</Link> and{" "}
                <Link href="/markets-treasuries">treasuries</Link>, you can find
                all your favourites in one place.
              </p>
              <p>
                The two main costs associated with spread betting are the margin
                and spread:
              </p>
              <p>
                <span className="font-semibold">Margin</span> – the initial
                deposit, representing a fraction of the total trade value, which
                acts as collateral to open positions.
              </p>
              <p>
                {" "}
                <span className="font-semibold">Spread</span> – the difference
                between the buying and selling price of an instrument.
              </p>
            </div>
          }
        />

        {/* Instruments Table */}
        <OneColumn>
          <InstrumentsTable
            loadMoreEnabled={false}
            searchEnabled={true}
            columns={instrumentMapping.columns}
            instrumentMappings={instrumentMapping.instruments}
          />
          <p className="pt-10">
            Pricing is indicative. Past performance is not a reliable indicator
            of future results.
          </p>
        </OneColumn>
      </SectionContainer>

      {/* How we support traders */}
      <SupportOurTraders type="sb" />

      {/* Platform types */}
      <PlatformTypes3Col
        ref={pageItems.ourPlatforms.ref}
        platformLeft={<PlatformWeb footnotes={["1"]} />}
        platformMiddle={<PlatformMobile />}
        platformRight={<PlatformMT4 />}
      />

      {/* Alpha module */}
      <Alpha />

      {/* Awards module */}
      <AwardWinning
        title={"Award-winning spread betting broker"}
        awards={awards}
      />

      {/* FAQ */}
      <FAQ ref={pageItems.faqs.ref} faqListCol1={faqQuestions} />

      {/* Related pages */}
      <RelatedPages title={"You may be interested in"} pages={relatedPages} />

      {/* Ready to get started */}
      <ReadyToGetStarted
        platformImg={awsImage("spread-betting_bottom-platforms-img.png")}
        content={
          "Open a demo account with £10,000 of virtual funds or open a live account."
        }
        ctaBtns={
          <>
            <div className="flex flex-col md:flex-row md:gap-2">
              <OnboardingButton
                className="mx-auto mb-2 md:mx-0 md:mb-0"
                account="live"
                variant="azure"
              >
                Start spread betting
              </OnboardingButton>
              <OnboardingButton
                className="mx-auto md:mx-0"
                account="demo"
                variant="primary-outline"
              >
                Open a demo account
              </OnboardingButton>
            </div>
          </>
        }
      />

      {/* Footnotes */}
      <Footnotes
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
          <>
            Tax treatment depends on individual circumstances and can change or
            may differ in a jurisdiction other than the UK.
          </>,
          <>
            FSCS is an independent body that offers protection to customers of
            financial services firms that have failed. The compensation amount
            may be up to £85,000 per eligible person, per firm.{" "}
            <Link href="https://www.fscs.org.uk/">
              Eligibility conditions apply
            </Link>
            . Please contact the FSCS for more information.{" "}
          </>,
          <>
            1.388 million unique user logins for the CMC Markets invest and CFD
            platforms globally, as at August 2023.
          </>,
          <>
            Max discount in tier. Discounts are based on our tiered-volume
            discount scheme and are variable per product. View our{" "}
            <a href="/en-gb/price-plus">Price+</a> page for more details.
          </>,
          <>
            Interest scheme
            <Link
              href="https://assets.cmcmarkets.com/pdfs/interest_scheme_terms_and_conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              T&amp;Cs apply.
            </Link>{" "}
          </>,
        ]}
      />
    </>
  );
};

export default SpreadBetting;
