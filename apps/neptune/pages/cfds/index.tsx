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
import React, { useRef } from "react";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import constants, { awsImage } from "@/helpers/constants";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import WhyTrade from "@/components/modules/Markets/WhyTrade";
import Link from "next/link";
import WhatIs from "@/components/modules/ProductPage/WhatIs";
import Footnotes from "@/components/modules/Common/Footnotes";
import AccountTypes2Col from "@/components/modules/Common/AccountTypes2Col";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import PlatformWeb from "@/components/modules/Common/PlatformTypes/PlatformWeb";
import PlatformMobile from "@/components/modules/Common/PlatformTypes/PlatformMobile";
import PlatformMT4 from "@/components/modules/Common/PlatformTypes/PlatformMT4";
import MainHeroWide from "@/components/modules/Common/Hero/MainHeroWide";
import Head from "next/head";
import OneColumn from "@/components/modules/Common/Basic/OneColumn";
import InstrumentsTableHeader from "@/components/modules/Common/Basic/InstrumentsTableHeader";
import OnboardingButton from "@/components/elements/OnboardingButton";
import RightArrowSVG from "@/components/svg/RightArrowSVG";
import { WhyTradeObj } from "@/components/modules/Markets/WhyTrade/WhyTradeCard";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import { ScrollSpyItem } from "@/helpers/types/general";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
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
      tabName: "Treasuries",
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
        No stamp duty<sup>2</sup>
      </>
    ),
    text: "Pay no stamp duty on profits from CFD trading in the UK.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_receipt-tax-48.svg"),
    },
  },
  {
    title: "Trade with leverage",
    text: `Deposit from just ${constants.DIDS.UK_MARGIN_RATE_MINIMUM} of the full value of your position to open a trade. Leverage amplifies potential profits and losses equally, so it's essential that traders understand and manage risk.`,
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_chart-pie-48.svg"),
    },
  },
  {
    title: "Tight spreads",
    text: "Experience competitive spreads across our full range of instruments, plus low commission fees on shares.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_tag-48.svg"),
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
    },
  },
  {
    title: "Powerful charting tools",
    text: "Gather and analyse data with 115+ indicators and drawing tools.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_chart-square-bar-48.svg"),
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
    },
  },
];

const awards: Array<AwardObject> = [
  {
    title: "No.1 Web Platform",
    giver: "ForexBrokers.com Awards",
    year: "2023",
  },
  {
    title: "Best CFD Provider",
    giver: "Online Money Awards",
    year: "2022",
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
    title: "What are CFDs?",
    description:
      "Dig deeper into what CFD trading is and understand how it works.",
    url: "/learn-cfd-trading/what-are-cfds",
    thumbnail: awsImage("cfds_what-are-cfds-thumbnail.png"),
  },
  {
    title: "Spread betting vs CFDs",
    description:
      "Discover the the differences between spread betting and CFD trading and see which of the two is best for you.",
    url: "/learn-spread-betting/spread-betting-vs-cfd",
    thumbnail: awsImage("spread-betting_spreadbetting-vs-cfds-thumbnail.png"),
  },
  {
    title: "Advantages of CFD trading",
    description:
      "Find out the advantages of CFD trading including its tax benefits.",
    url: "/learn-cfd-trading/advantages-of-cfds",
    thumbnail: awsImage("cfds_advantages-of-cfd-trading-thumbnail.png"),
  },
];

const faqQuestions: FAQColumn = {
  title: "New to CFD trading?",
  faqList: [
    {
      question: "What are CFDs?",
      answer: (
        <>
          <p>
            A contract for difference (CFD) is a derivative product which
            enables you to trade on the price movements of underlying financial
            assets (such as forex, indices, commodities, shares and treasuries).
          </p>
          <p>
            A CFD is an agreement to exchange the difference in the value of an
            asset from the time the contract is opened until the time it&apos;s
            closed. With a CFD, you never actually own the asset or instrument
            you have chosen to trade, but you can still benefit if the market
            moves in your favour, or make a loss should the market move against
            you.{" "}
            <a href="/en-gb/learn-cfd-trading/what-are-cfds">
              Learn more about CFD trading
            </a>
          </p>
        </>
      ),
    },
    {
      question: "What's the difference between trading CFDs and share trading?",
      answer: (
        <>
          The main difference between CFD trading and share trading is that you
          don&apos;t own the underlying share when you trade on a share CFD.
          With CFDs, you never actually buy or sell the underlying asset that
          you&apos;ve chosen to trade, but you can still benefit if the market
          moves in your favour, or make a loss if it moves against you. However,
          with traditional share trading you enter a contract to exchange the
          legal ownership of the shares for money, and you own this equity.{" "}
          <a href="/en-gb/cfds/cfds-vs-share-trading">
            Read our guide on CFDs versus share dealing
          </a>
        </>
      ),
    },
    {
      question: "Why trade CFDs?",
      answer: (
        <>
          When trading CFDs, it&apos;s important to understand the risks
          associated with financial trading in general, as well as the risks
          that are specific to trading CFDs. The main risks associated with
          trading CFDs relate to trading with leverage, account close-out,
          market volatility and market gapping.{" "}
          <a href="/en-gb/learn-cfd-trading/risks-of-cfds">
            Read our guide on the risks of CFD trading
          </a>
        </>
      ),
    },
    {
      question:
        "What's the difference between trading CFDs and spread betting?",
      answer: (
        <>
          Trading CFDs and spread betting are margined products and can provide
          similar economic benefits to investments in shares, indices,
          commodities and currencies.{" "}
          <a href="/en-gb/learn-spread-betting/spread-betting-vs-cfd">
            Read our guide on CFD trading versus spread betting
          </a>
        </>
      ),
    },
    {
      question: "Where can I learn more about trading CFDs?",
      answer: (
        <>
          Our learn section offers a comprehensive introduction to trading CFDs.
          From understanding leverage to trading CFD examples, risk-management
          tips, developing an effective CFD trading strategy and more.{" "}
          <a href="/en-gb/learn-cfd-trading">Visit our learn section</a>
        </>
      ),
    },
    {
      question: "Where can I find market news and insight?",
      answer: (
        <>
          Stay on top of breaking economic news events and discover what&apos;s
          moving the financial markets, with commentary, video and webinars from
          our global market analysts in our{" "}
          <a href="/en-gb/news-and-analysis">news and analysis section</a>.
        </>
      ),
    },
  ],
};

const CFDs = (props: any) => {
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
          Trade with the UK&apos;s No.1 CFD Trading Account* | CMC Markets
        </title>
        <meta
          name="description"
          content={`Trade contracts for difference (CFDs) on over ${constants.DIDS.INSTRUMENT_TOTAL_COUNT} instruments across indices, FX, shares and more, with competitive spreads, by opening a CFD account today.`}
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      <MainHeroWide
        ref={pageItems.hero.ref}
        title={
          <>
            Trade with the UK&apos;s No.1 CFD account<sup>1</sup>
          </>
        }
        content={
          <ul className="list-disc pl-4">
            <li className="text-xl">
              Open an account with the UK&apos;s top CFD broker<sup>1</sup> and
              trade on {constants.DIDS.INSTRUMENT_TOTAL_COUNT} instruments
              across forex, indices, commodities, shares, ETFs and treasuries
            </li>
            <li className="text-xl">
              Tight spreads, no hidden fees and no stamp duty on profits
              <sup>2</sup>
            </li>
            <li className="text-xl">Precise charting and advanced tools</li>
          </ul>
        }
        imgUrl={awsImage("cfds_platform-hero.png")}
        bgImgUrl={awsImage("spread-betting_hero-bg.png")}
        mobileImgUrl={awsImage("cfds_platform-hero-mob.png")}
        fscsFootnote={"3"}
        overrideCTA={
          <div className="mb-6 flex flex-col gap-x-2 pl-9">
            <OnboardingButton
              params="jid=gb1&amp;iaid=null&amp;lsrc=1"
              variant="azure"
              size="lg"
              account="live"
              className="mb-2"
            >
              Start CFD trading
            </OnboardingButton>
            <OnboardingButton
              params="jid=gb3&amp;iaid=null&amp;lsrc=1"
              variant="primary-outline"
              size="lg"
              account="demo"
            >
              Open demo account
            </OnboardingButton>
          </div>
        }
      />

      <WhatIs
        title={"What is CFD trading?"}
        content={
          <>
            <p className="mb-10">
              CFD (contracts for difference) trading allows traders to speculate
              on the performance of markets such as forex, stocks and
              commodities, without owning the underlying asset.
            </p>
            <Link
              className="btn btn-primary-outline btn-with-icon"
              href="/learn-cfd-trading/what-are-cfds"
            >
              <span>Learn more about CFD trading</span>
              <RightArrowSVG />
            </Link>
          </>
        }
        sideImage={awsImage("cfds_what-is-side-img.png")}
        sideBgImage={awsImage("spread-betting_what-is-side-bg.png")}
      />
      <WhyTrade
        title={"Why open a CFD trading account with us?"}
        data={whyTradeData}
      />
      <TrustpilotSliderB footnotes={["4"]} />

      {/* Instruments Header & Table */}
      <SectionContainer ref={pageItems.costs.ref}>
        <InstrumentsTableHeader
          ref={pageItems.costs.ref}
          title={<> View our CFD spreads and margins</>}
          contentRight={
            <p className="max-w-2xl text-xl">
              Trade CFDs on over {constants.DIDS.INSTRUMENT_TOTAL_COUNT}{" "}
              instruments. We offer more forex pairs than any other major
              broker, and a huge range of{" "}
              <Link href="/markets-indices">indices</Link>,{" "}
              <Link href="/markets-commodity-trading">commodities</Link>,{" "}
              <Link href="/markets-shares">shares</Link>,{" "}
              <Link href="/etf-trading">ETFs</Link>,{" "}
              <Link href="/markets-treasuries">rates and bonds</Link>, so you
              can find all your favourites in one place.
            </p>
          }
        />

        {/* Instruments table */}
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

      <SupportOurTraders type="cfd" />

      <PlatformTypes3Col
        ref={pageItems.ourPlatforms.ref}
        platformLeft={<PlatformWeb footnotes={["1"]} />}
        platformMiddle={<PlatformMobile />}
        platformRight={<PlatformMT4 />}
      />

      <AwardWinning title={"Award-winning CFD broker"} awards={awards} />

      <AccountTypes2Col
        ref={pageItems.accountTypes.ref}
        accountTypeLeft={
          <AccountType
            type={"cfd"}
            descriptionOverride={
              <>
                Trade with leverage on our full range of instruments, with no
                stamp duty on profits.<sup>2</sup>
              </>
            }
            enableBulletPoints={false}
            closingLine={{
              enabled: true,
              type: "spreadDescription",
            }}
            footnotes={["2"]}
          />
        }
        accountTypeRight={
          <AccountType
            type={"fx"}
            descriptionOverride="A CFD account designed for high-volume traders, who want to get even more from their forex trading."
            enableBulletPoints={false}
            closingLine={{
              enabled: true,
              type: "spreadDescription",
            }}
            footnotes={["2"]}
          />
        }
      />

      <Alpha />

      <FAQ ref={pageItems.faqs.ref} faqListCol1={faqQuestions} />

      <RelatedPages title={"You may be interested in"} pages={relatedPages} />

      <ReadyToGetStarted
        platformImg={awsImage("cfds_bottom-platforms-img.png")}
        mobilePlatformImg={awsImage("cfds_bottom-platforms-img-mob.png")}
        content={
          "Open a demo account with £10,000 of virtual funds or open a live account."
        }
        ctaBtns={
          <>
            <div className="flex flex-col md:flex-row md:gap-2">
              <OnboardingButton
                className="mx-auto mb-2 md:mx-0 md:mb-0"
                variant="azure"
                account="live"
                params="jid=gb1&amp;iaid=null&amp;lsrc=1"
              >
                Start CFD trading
              </OnboardingButton>
              <OnboardingButton
                className="mx-auto md:mx-0"
                variant="primary-outline"
                account="demo"
                params="jid=gb3&amp;iaid=null&amp;lsrc=1"
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
            <Link
              target="_blank"
              href="https://www.fscs.org.uk/"
              rel="noopener noreferrer"
            >
              Eligibility conditions apply
            </Link>
            . Please contact the FSCS for more information.{" "}
          </>,
          <>{constants.DIDS.GLOBAL_TOTAL_TRADERS_INVESTORS_FOOTNOTE}</>,
          <>
            Max discount in tier. Discounts are based on our tiered-volume
            discount scheme and are variable per product. View our{" "}
            <a href="/en-gb/price-plus">Price+</a> page for more details.
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

export default CFDs;
