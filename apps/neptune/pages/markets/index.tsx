/* eslint-disable @next/next/no-html-link-for-pages */
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import AccountTypes3Col from "@/components/modules/Common/AccountTypes3Col";
import InstrumentsTableHeader from "@/components/modules/Common/Basic/InstrumentsTableHeader";
import OneColumn from "@/components/modules/Common/Basic/OneColumn";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import Footnotes from "@/components/modules/Common/Footnotes";
import HeroAccoladesSectionA from "@/components/modules/Common/Hero/Common/HeroAccoladesSectionA";
import VideoHero from "@/components/modules/Common/Hero/VideoHero";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import WhyTrade from "@/components/modules/Markets/WhyTrade";
import { WhyTradeObj } from "@/components/modules/Markets/WhyTrade/WhyTradeCard";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import InstrumentsSearch from "@/components/widgets/InstrumentsSearch/InstrumentsSearch";
import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import { awsImage } from "@/helpers/constants";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const faqQuestions: FAQColumn = {
  title: "New to trading the financial markets?",
  faqList: [
    {
      question: "What are financial markets?",
      answer: (
        <p>
          Financial markets is a very broad term and can vary from world to
          virtual currencies, commodities to stock indices, shares to ETFs plus
          rates and bonds, where traders can invest in or trade on a huge range
          of securities and derivatives.
        </p>
      ),
    },
    {
      question: "What is leveraged trading?",
      answer: (
        <>
          One of the advantages of spread betting and trading CFDs is that you
          only need to deposit a percentage of the full value of your position
          to open a trade, known as&nbsp;
          <a href="/en-gb/trading-guides/what-is-leverage-trading">
            trading on leverage
          </a>
          . Remember, trading on leverage can also amplify losses, so it&apos;s
          important to manage your risk.
        </>
      ),
    },
    {
      question: "What are indices?",
      answer: (
        <p>
          Indices are a measure of a section of shares in the stock market,
          created by combining the value of several stocks to create one
          aggregate value. Major financial indices include the Dow Jones
          Industrial Average, FTSE 100, CAC 40, and Dax 40. The Dow Jones index,
          for example, represents 30 large publicly-listed companies traded on
          the New York Stock Exchange.&nbsp;
          <Link href="/markets-indices">More on indices trading</Link>
        </p>
      ),
    },
    {
      question: "What is forex?",
      answer: (
        <>
          FX trading, also known as foreign exchange trading, or forex trading,
          is the exchange of different currencies on a decentralised global
          market. It&apos;s one of the largest and most liquid financial markets
          in the world. Forex trading involves the simultaneous buying and
          selling of the world&apos;s currencies on this market.&nbsp;
          <Link href="/forex-trading">More on forex trading</Link>
        </>
      ),
    },
    {
      question: "What is a commodity?",
      answer: (
        <>
          A commodity is a physical good that can be bought or sold on the
          commodity market. Commodities can be categorised into either hard or
          soft varieties. Hard commodities are natural resources like oil, gold
          and rubber and are often mined or extracted. Soft commodities are
          agricultural products such as coffee, wheat or corn.&nbsp;
          <Link href="/markets-commodity-trading">More on commodities</Link>
        </>
      ),
    },
    {
      question: "What is share trading?",
      answer: (
        <p>
          Share trading in the underlying market is the buying and selling of
          company shares with the aim of making a profit. Shares represent a
          portion of ownership of a public company.&nbsp;
          <Link href="/markets-shares">More on shares trading</Link>
        </p>
      ),
    },
    {
      question: "What are bonds?",
      answer: (
        <>
          A bond is a fixed-income instrument, or debt security, and represents
          a long-term lending agreement between a borrower and lender –
          effectively an &apos;IOU&apos;. The bond issuer is often a corporation
          or a government, and the funds are used to finance a project or
          operation.&nbsp;
          <Link href="/markets-treasuries">
            More on rates &amp; bonds trading
          </Link>
        </>
      ),
    },
  ],
};

// TODO: Inline display of instrument in instrument search
const Markets = (props: any) => {
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
      title: "Indices",
      text: "Trade on a basket of top shares, which help to gauge the performance of a country's economy and specific industry sectors.",
      icon: {
        enabled: true,
        width: 60,
        height: 60,
        src: awsImage("icon_indices-gfx-240.png"),
        unoptimized: true,
      },
      button: {
        enabled: true,
        text: "More on index trading",
        url: "/markets-indices",
      },
    },
    {
      title: "Forex",
      text: "Trade on the strength of one currency versus another. The FX market is the largest and most liquid market in the world.",
      icon: {
        enabled: true,
        width: 60,
        height: 60,
        src: awsImage("icon_forex-gfx-120.png"),
        unoptimized: true,
      },
      button: {
        enabled: true,
        text: "More on forex trading",
        url: "/forex-trading",
      },
    },
    {
      title: "Commodities",
      text: "Speculate on the price of the most popular commodities, including Gold, Silver, oil and Natural Gas.",
      icon: {
        enabled: true,
        width: 60,
        height: 60,
        src: awsImage("icon_commodities-gfx-120.png"),
        unoptimized: true,
      },
      button: {
        enabled: true,
        text: "More on commodity trading",
        url: "/markets-commodity-trading",
      },
    },
    {
      title: "Shares & ETFs",
      text: "Speculate on the performance of the world's largest companies and ETFs, from ARK Innovation to Apple, Amazon and Rio Tinto.",
      icon: {
        enabled: true,
        width: 60,
        height: 60,
        src: awsImage("icon_shares-etfs-gfx-240.png"),
        unoptimized: true,
      },
      button: {
        enabled: true,
        text: "More on share trading",
        url: "/markets-shares",
      },
      buttonTwo: {
        enabled: true,
        text: "More on ETF trading",
        url: "/etf-trading",
      },
    },
    {
      title: "Share baskets",
      text: "Focused on emerging industries, our share baskets offer you the ability to trade on global trends.",
      icon: {
        enabled: true,
        width: 60,
        height: 60,
        src: awsImage("icon_share-baskets-gfx-240.png"),
        unoptimized: true,
      },
      button: {
        enabled: true,
        text: "More on share baskets trading",
        url: "/share-baskets-trading",
      },
    },
    {
      title: "Rates & bonds",
      text: "Take a view on government rates & bonds, gilts and treasury notes to get exposure to a specific region's economy.",
      icon: {
        enabled: true,
        width: 60,
        height: 60,
        src: awsImage("icon_bonds-gfx-120.png"),
        unoptimized: true,
      },
      button: {
        enabled: true,
        text: "More on rates & bonds trading",
        url: "/markets-treasuries",
      },
    },
  ];

  return (
    <>
      <Head>
        <title>
          Spread bet &amp; trade CFDs on the financial markets | CMC Markets
        </title>
        <meta
          name="description"
          content="Access the global financial markets, spread bet or trade CFDs on 11,000+ financial instruments, including indices, forex, commodities &amp; shares with competitive spreads."
        />
      </Head>

      {/* Hero Section */}
      <VideoHero
        title="Trade on over 12,000 financial instruments"
        topContent={
          <p>
            <Link href="/spread-betting">Spread bet</Link> and{" "}
            <Link href="/cfds">trade CFDs</Link> on a huge range of global
            financial markets, including forex, indices, commodities, and
            shares. Enjoy competitive spreads on one of the UK&apos;s
            highest-rated web and mobile{" "}
            <Link href="/trading-platforms">trading platforms</Link>
            <sup>1</sup>, plus experienced customer service whenever the markets
            are open.
          </p>
        }
        bottomContent={
          <>
            <InstrumentsSearch
              className="mb-6"
              placeholderText="Search instruments eg EUR/USD"
              theme="transparent-light"
            />
            <TrustpilotWidgetMicro className="-ml-7" theme="dark" />
          </>
        }
      />
      <HeroAccoladesSectionA fscsFootnote={"2"} />

      {/* Market Options */}
      <WhyTrade title="Get access to the global markets" data={whyTradeData} />

      {/* Instruments Header & Table */}
      <InstrumentsTableHeader
        title={
          <>
            Enjoy tight spreads and{" "}
            <span className="2xl:block">no hidden fees</span>
          </>
        }
      />

      <OneColumn>
        <InstrumentsTable
          columns={instrumentMapping.columns}
          instrumentMappings={instrumentMapping.instruments}
        />
        <p className="pt-10">
          Pricing is indicative. Past performance is not a reliable indicator of
          future results.
        </p>
        <p>
          Client sentiment is provided by CMC Markets for general information
          only, is historical in nature and is not intended to provide any form
          of trading or investment advice - it must not form the basis of your
          trading or investment decisions.
        </p>
      </OneColumn>

      {/* Trustpilot */}
      <TrustpilotSliderB
        titleOverride="What other traders are saying about us"
        footnotes={["3"]}
      />

      {/* Account Types */}
      <AccountTypes3Col
        title="Compare our account types"
        enableComparisonBtn={true}
        accountTypeLeft={
          <AccountType
            type={"sb"}
            listOverride={[
              { content: <>Go long or short on 12,000 instruments</> },
              { content: <>Trade with leverage</> },
              { content: <>CMC web platform, iOS and Android app</> },
              {
                content: (
                  <>
                    No capital gains tax or stamp duty on profits<sup>4</sup>
                  </>
                ),
              },
              { content: <>MT4 platform available</> },
            ]}
            footnotes={["4"]}
          />
        }
        accountTypeMiddle={
          <AccountType
            type={"cfd"}
            listOverride={[
              { content: <>Go long or short on 12,000 instruments</> },
              { content: <>Trade with leverage</> },
              { content: <>CMC web platform, iOS and Android app</> },
              {
                content: (
                  <>
                    No stamp duty on CFD trading profits<sup>4</sup>
                  </>
                ),
              },
              { content: <>MT4 platform available</> },
            ]}
            footnotes={["4"]}
          />
        }
        accountTypeRight={
          <AccountType
            type={"fx"}
            listOverride={[
              { content: <>Go long or short on 12,000 instruments</> },
              { content: <>Trade with leverage</> },
              { content: <>CMC web platform, iOS and Android app</> },
              {
                content: (
                  <>
                    No stamp duty on CFD trading profits<sup>4</sup>
                  </>
                ),
              },
              { content: <>MT4 platform available</> },
              {
                content: (
                  <>
                    Spreads from 0.0 pips on 6 major pairs<sup>5</sup>
                  </>
                ),
              },

              { content: <>25% spread discount on all other FX pairs</> },
            ]}
            footnotes={["5", "4"]}
          />
        }
      />

      {/* FAQ */}
      <FAQ faqListCol1={faqQuestions} flipColumns={true} />

      {/* Ready to get started */}
      <ReadyToGetStarted
        platformImg={awsImage("cfds_bottom-platforms-img.png")}
        mobilePlatformImg={awsImage("cfds_bottom-platforms-img-mob.png")}
        content="Open a demo account with £10,000 of virtual funds or open a live account."
      />

      {/* Footnotes */}
      <Footnotes
        footnotesList={[
          <>
            Awarded No.1 Web-Based Platform, ForexBrokers.com Awards 2023; Best
            Mobile Trading Platform, ADVFN International Financial Awards 2022;
            Best Spread Betting Provider, The City of London Wealth Management
            Awards 2021; Best Phone Customer Service & Best Email Customer
            Service, based on highest user satisfaction among spread betters,
            CFD and FX traders, Investment Trends 2020 UK Leverage Trading
            Report.
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
            . Please contact the FSCS for more information.
          </>,
          <>
            1.388 million unique user logins for the CMC Markets invest and CFD
            platforms globally, as at August 2023.{" "}
          </>,
          <>
            Tax treatment depends on individual circumstances and can change or
            may differ in a jurisdiction other than the UK.
          </>,
          <>Fixed commission at $2.5 per $100,000 notional value traded.</>,
        ]}
      />
    </>
  );
};

export default Markets;
