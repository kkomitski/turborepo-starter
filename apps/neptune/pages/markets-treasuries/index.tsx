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
import constants, { awsImage } from "@/helpers/constants";
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import PlatformWeb from "@/components/modules/Common/PlatformTypes/PlatformWeb";
import PlatformMobile from "@/components/modules/Common/PlatformTypes/PlatformMobile";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import AccountTypes2Col from "@/components/modules/Common/AccountTypes2Col";
import OneColumn from "@/components/modules/Common/Basic/OneColumn";
import PlatformTypes2Col from "@/components/modules/Common/PlatformTypes2Col";
import InstrumentsTableHeader from "@/components/modules/Common/Basic/InstrumentsTableHeader";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import { ScrollSpyItem } from "@/helpers/types/general";
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
      tabName: "US Bonds",
      instruments: ["X-ABFOJ", "X-ABFNT", "X-ABFOZ", "X-ABFOR"],
    },
    {
      tabName: "European bonds",
      instruments: ["X-ABFEC", "X-AARFL", "X-AARFT", "X-AARGJ", "X-AAREN"],
    },
    {
      tabName: "Rates",
      instruments: ["X-AARDX", "X-BESUX", "X-AWWMU"],
    },
  ],
};

const instrumentCards: InstrumentData[] = [
  { apiCode: "X-ABFNT", imgName: "US" },
  { apiCode: "X-AARDX", imgName: "EU" },
  { apiCode: "X-ABFEC", imgName: "GB" },
  { apiCode: "X-AARFL", imgName: "DE" },
];

const whyTradeData: Array<WhyTradeObj> = [
  {
    title: "Over 50 global rates & bonds",
    text: "Spread bet and trade CFDs on interest rates and government debt obligations, such as gilts, bonds, bunds and treasury notes.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_building-48.svg"),
    },
  },
  {
    title: "Minimal slippage",
    text: (
      <>
        Minimise the potential for slippage thanks to our fully automated,
        ultra-fast execution speeds<sup>2</sup>.
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
    text: "Experienced support available 24/5, whenever you're trading.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_customer-service-48.svg"),
    },
  },
  {
    title: "Trade out of hours",
    text: "Favourites like the US T-Bond trade up to 23 hours a day, so you don't have to stop when the underlying markets do.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_clock-48.svg"),
    },
  },
];

const faqQuestions: FAQColumn = {
  title: "New to bonds trading?",
  faqList: [
    {
      question: "What are bonds?",
      answer: (
        <p>
          A bond is a fixed-income instrument, or debt security, and represents
          a long-term lending agreement between a borrower and lender –
          effectively an &apos;IOU&apos;. The bond issuer is often a corporation
          or a government, and the funds are used to finance a project or
          operation.&nbsp;
          <a href="/en-gb/trading-guides/what-are-bonds">
            Learn how to trade bonds
          </a>
          .
        </p>
      ),
    },
    {
      question: "What are the costs of trading on treasuries?",
      answer: (
        <>
          There are a number of costs to consider when spread betting and CFD
          trading, including spread costs, holding costs (for trades held
          overnight which is essentially a fee for the funds you borrow to cover
          the leveraged portion of the trade), rollover costs (for expiring
          forward positions) and guaranteed stop-loss order charges (if you use
          this risk-management tool).&nbsp;
          <Link href="/trading-costs">Find out more about our costs</Link>.
        </>
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
            trading with leverage
          </a>
          . Remember, trading on leverage can also amplify losses, so it&apos;s
          important to manage your risk.
        </>
      ),
    },
    {
      question: "Why spread betting?",
      answer: (
        <>
          <Link href="/spread-betting">Spread betting</Link>
          &nbsp;allows you to trade tax-free on a wide range of financial
          markets 24 hours a day, from Sunday nights through to Friday nights.
          Trade on your phone, tablet, PC or Mac on a wide range of instruments
          using leverage. Tax treatment depends on individual circumstances and
          can change or may differ in a jurisdiction other than the UK.
        </>
      ),
    },
  ],
};

export const getStaticProps = async () => {
  const posts = await getNewsArticles("bonds");

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
        <title>Bond Trading | Spread Betting &amp; CFDs | CMC Markets</title>
        <meta
          name="description"
          content="Spread bet or trade CFDs on a large range of treasury instruments, including gilts, bunds, bonds &amp; T-notes. Open an account to start trading."
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      <InstrumentHeroWide
        ref={pageItems.hero.ref}
        title="Rates and bonds"
        content={
          <ul className="list-disc pl-4">
            <li className="text-xl">
              Trade on 50+ government bond and interest-rate instruments on our
              award-winning platform
              <sup>1</sup>
            </li>
            <li className="text-xl">
              Tight spreads, lightning-fast execution<sup>2</sup> and 24/5
              customer support
            </li>
            <li className="text-xl">
              Save from 5% to 40%<sup>3</sup> on spreads with{" "}
              <a href="/en-gb/alpha">CMC Alpha</a>
            </li>
          </ul>
        }
        animatedIcon={awsImage("treasuries-animated-icon.gif")}
        imgUrl={awsImage("common_generic-platform-hero-img.png")}
        bgImgUrl={awsImage("bond-trading_hero-bg2.png")}
        mobileImgUrl={awsImage("bonds-trading_hero-mob-160224.png")}
        fscsFootnote={"4"}
        enableLine={false}
      />

      {/* What is bonds trading */}
      <WhatIs
        title={"What is bonds trading?"}
        text={
          <>
            <p>
              Bonds trading allows traders to buy (go long) or sell (go short)
              on debt securities typically issued by governments or
              corporations. Bonds enable traders to speculate on future interest
              rate movements, and with us, you can do this by taking a position
              using spread bets or CFDs.
            </p>
          </>
        }
        instrumentsToLoad={instrumentCards}
        sideBgImg={awsImage("bond-trading_side-bg.png")}
      />

      {/* Why trade bonds */}
      <WhyTrade title={"Why trade bonds with us?"} data={whyTradeData} />

      {/* Platform types */}
      <PlatformTypes2Col
        ref={pageItems.ourPlatforms.ref}
        title="Powerful technology you can rely on"
        platformLeft={<PlatformWeb footnotes={["1"]} />}
        platformRight={<PlatformMobile />}
      />

      {/* Trustpilot slider */}
      <TrustpilotSliderB footnotes={["5"]} />

      <SectionContainer ref={pageItems.costs.ref}>
        {/* Instruments Header & Table */}
        <InstrumentsTableHeader
          title={<> Bonds trading costs</>}
          contentRight={
            <div className="max-w-2xl text-xl">
              <p>
                Get exposure to 50+ interest rates and government debt
                obligations, with spreads from as low as 1 point.
              </p>
            </div>
          }
        />
        {/* Instruments Table */}
        <OneColumn>
          <InstrumentsTable
            loadMoreEnabled={false}
            searchEnabled={true}
            searchPlaceHolderText="Search 50+ bonds"
            searchType="treasuries"
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

      {/* Latest news */}
      <LatestNewsSection title={"News"} posts={props.posts} />

      {/* FAQ */}
      <FAQ ref={pageItems.faqs.ref} faqListCol1={faqQuestions} />

      {/* Ready to get started */}
      <ReadyToGetStarted
        bgImg={awsImage("bond-trading_ready-to-find-your-flow-bg.png")}
        mobileBgImg={awsImage(
          "bond-trading_ready-to-find-your-flow-bg-mob.png"
        )}
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
