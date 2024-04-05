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
import PlatformTypes2Col from "@/components/modules/Common/PlatformTypes2Col";
import InstrumentsTableHeader from "@/components/modules/Common/Basic/InstrumentsTableHeader";
import OneColumn from "@/components/modules/Common/Basic/OneColumn";
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
      instruments: ["X-ABEHN", "X-AALAD", "X-AALJF", "X-AARLJ", "X-AAMYD"],
    },
    {
      tabName: "Growth",
      instruments: ["X-AALAD", "X-AFWWH", "X-ABEHN", "X-ABCJF", "X-AAZFN"],
    },
    {
      tabName: "Technology",
      instruments: ["X-ABBKX", "X-AANEN", "X-AAKXW", "X-AAXTH", "X-AAUDF"],
    },
    {
      tabName: "Banking",
      instruments: ["X-AAWUO", "X-AAVTV", "X-AAMHD", "X-AATYQ", "X-ABBMH"],
    },
    {
      tabName: "ETFs",
      instruments: ["X-AAVDZ", "X-AAWZO", "X-AAVAN", "X-AAUWE", "X-ABDDR"],
    },
    {
      tabName: "Consumer & retail",
      instruments: ["X-AAKVF", "X-AAYLP", "X-AALQG", "X-AAXLR", "X-AAKMM"],
    },
    {
      tabName: "Share baskets",
      instruments: ["X-ALMEO", "X-ALMFA", "X-ALMEV", "X-ALMFB", "X-ALMEN"],
    },
  ],
};

const whyTradeData: Array<WhyTradeObj> = [
  {
    title: "Your favourites in one place",
    text: (
      <>
        Spread bet or trades CFDs on over 10,000 shares, including the 250
        biggest UK shares and the most popular{" "}
        <a href="/en-gb/markets/us-stocks">US stocks</a>.
      </>
    ),
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
        With fully automated, lightning-fast execution in 0.0030 seconds
        <sup>1</sup>.
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
    title: "Dedicated customer service",
    text: <>Experienced support 24/5, whenever you&apos;re trading.</>,
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_customer-service-48.svg"),
    },
  },
  {
    title: "No currency risk",
    text: "Avoid the risk of currency fluctuations which may otherwise impact returns, when you spread bet.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_shield-check-48.svg"),
    },
  },
];

const instrumentCards: InstrumentData[] = [
  { apiCode: "X-ABEHN", imgName: "tesla" },
  { apiCode: "X-AALJF", imgName: "apple" },
  { apiCode: "X-AALAD", imgName: "amazon" },
  { apiCode: "X-AAXTH", imgName: "microsoft" },
];

const faqQuestions: FAQColumn = {
  title: "New to share trading?",
  faqList: [
    {
      question: "What is share trading?",
      answer: (
        <>
          Share trading in the underlying market is the buying and selling of
          company shares with the aim of making a profit. Shares represent a
          portion of ownership of a public company. At CMC Markets, we offer the
          opportunity to spread bet or trade CFDs on shares, so you don&apos;t
          actually own the underlying share.&nbsp;
          <a href="/en-gb/trading-guides/how-to-trade-stocks">
            Learn more about share trading
          </a>
          .
        </>
      ),
    },
    {
      question: "What is leveraged trading?",
      answer: (
        <>
          One of the features of spread betting and CFD trading is that you only
          need to deposit a percentage of the full value of your position to
          open a trade, known as&nbsp;
          <a href="/en-gb/trading-guides/what-is-leverage-trading">
            trading on leverage
          </a>
          . Remember, trading on leverage can also amplify losses, so it&apos;s
          important to manage your risk.
        </>
      ),
    },
    {
      question: "How does spread betting/trading CFDs on shares actually work?",
      answer: (
        <>
          <p>
            When you spread bet or trade CFDs on shares on our platform, you
            don&apos;t buy or sell the underlying share. Instead, you&apos;re
            taking a position on whether you think the company&apos;s share
            price will go up or down.
          </p>
          <p>
            With spread betting, you buy or sell an amount per point movement
            for the share instrument you are trading, such as £5 per point. This
            is known as your stake. With CFD trading, you buy or sell a number
            of units for a particular instrument. For every point or unit that
            the price moves in your favour, you gain multiples of your stake,
            and vice versa.
          </p>
          <p>
            As an example, say you wanted to buy £1,300 worth of Lloyds penny
            shares at £65 per share. For the spread betting equivalent of this
            trade, you would specify a stake size of £20 per point to get the
            same exposure as you would if you bought 20 Lloyds shares at £65
            through traditional share dealing. Due to the leverage available
            with spread betting (5:1 in this case), you would be able to enter
            this position with an initial outlay of £260, instead of £1,300.
            However, remember that your profits and losses are based on the full
            value of the trade (£1,300). As a retail client, you will never lose
            more than the amount in your account.
          </p>
          <p>
            View our&nbsp;
            <a href="/en-gb/learn-spread-betting/spread-betting-vs-cfd">
              spread betting vs CFDs comparison
            </a>
            &nbsp;and see our&nbsp;
            <a href="/en-gb/trading-guides/trading-penny-stocks">
              list of penny stocks in the UK
            </a>
            ​ for more information.
          </p>
        </>
      ),
    },
    {
      question: "How does the additional spread on share spread bets work?",
      answer: (
        <>
          <p>
            Share spread bets have an additional spread added either side of the
            existing spread. See our UK and US share spread bet examples below.
          </p>
          <p>
            <strong>UK shares example</strong>:
          </p>
          <p>CFD price/underlying sell/buy price: 250p / 255p</p>
          <p>
            CMC 0.1% additional spread to be added either side, widening the
            spread: 250p - (0.1% of 250) / 255p + (0.1% of 255) Spread bet
            sell/buy price = 249.75p / 255.25p
          </p>
          <p>
            <strong>
              <a href="https://www.cmcmarkets.com/en-gb/markets/us-stocks">
                US shares
              </a>
              &nbsp;example
            </strong>
            :
          </p>
          <p>
            Share price/Cost $0-15 | 1 cent (each side) $15-25 | 2 cents (each
            side) $25-35 | 3 cents (each side) $35+ | 4 cents (each side)
          </p>
          <p>CFD price/underlying price: $25.50 / $25.58</p>
          <p> Share price falls into bracket three: $25-35.</p>
          <p>
            So, 3 cents is added to both sides, widening the spread: $25.50 -
            $0.03 / $25.58 + $0.03
          </p>
          <p>Spread bet sell/buy price = $25.47 / $25.61</p>
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
          can change or may differ in a jurisdiction other than the
          UK.&nbsp;Read our article on&nbsp;
          <a href="/en-gb/learn-spread-betting/what-is-spreadbetting">
            how to spread bet
          </a>
          &nbsp;to learn more.
        </>
      ),
    },
    {
      question: "Do spread bets on shares attract dividends?",
      answer: (
        <>
          <p>
            When a stock goes ex-dividend, the value of that stock effectively
            falls by the dividend amount. This means if you hold a spread bet or
            CFD position on a company which announces a dividend, your account
            will be credited or debited on the day the stock goes ex-dividend.
          </p>
          <p>
            If you were long (holding a buy position), you would have been
            disadvantaged by the drop in the market caused by the pay out of the
            dividend, so we would credit your account with the dividend amount,
            less any applicable dividend withholding taxes. If you were&nbsp;
            <a href="/en-gb/trading-guides/how-to-short-a-stock">
              short the stock
            </a>
            , you would benefit from the drop in the price, so the equivalent
            amount would be deducted. So, overall, you don&apos;t lose or gain
            anything from the adjustment. There are no withholding taxes on
            short positions. The dividend will appear as a &apos;Price
            Adjustment&apos; in your account history within the platform.
          </p>
        </>
      ),
    },
  ],
};

export const getStaticProps = async () => {
  const posts = await getNewsArticles("shares");

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const MarketsShares = (props: any) => {
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
        <title>Share Trading | Spread Betting &amp; CFDs | CMC Markets</title>
        <meta
          name="description"
          content="Take a position on more than 9,000 global shares, including 1,000 ETFs. We offer spread betting and CFD trading prices on popular shares. Open an account to start trading."
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      <InstrumentHeroWide
        ref={pageItems.hero.ref}
        title="Shares trading"
        content={
          <ul className="list-disc pl-4">
            <li className="text-xl">
              Get exposure to 10,000+ shares including the world&apos;s largest
              companies from Apple to Zoom
            </li>
            <li className="text-xl">
              Ultra-fast execution<sup>1</sup> with no partial fills
            </li>
            <li className="text-xl">
              Experienced customer service available 24/5
            </li>
            <li className="text-xl">
              Save from 5% to 40%<sup>2</sup> on spreads with{" "}
              <a href="/en-gb/alpha">CMC Alpha</a>
            </li>
          </ul>
        }
        animatedIcon={awsImage("shares-trading-animated-icon.gif")}
        imgUrl={awsImage("common_generic-platform-hero-img.png")}
        bgImgUrl={awsImage("shares-trading_hero-bg2.png")}
        mobileImgUrl={awsImage("shares-trading_hero-mob-160224.png")}
        fscsFootnote={"3"}
        enableLine={false}
      />

      {/* What is Shares Trading */}
      <WhatIs
        title={"What is shares trading?"}
        text={
          <>
            <p>
              Shares trading, also known as stock trading, is the process of
              speculating on the price movement of publicly trading companies.{" "}
            </p>
            <p>
              With us, you can trade on shares via spread betting or CFDs, which
              allow you to go long if you think a share price will rise, or go
              short if you think that it&apos;ll fall, without taking ownership
              of the underlying stock.
            </p>
          </>
        }
        instrumentsToLoad={instrumentCards}
        sideBgImg={awsImage("shares-trading_side-bg.png")}
      />

      {/* Why Trade Shares */}
      <WhyTrade title={"Why trade shares with us?"} data={whyTradeData} />

      {/* Platform Types */}
      <PlatformTypes2Col
        ref={pageItems.ourPlatforms.ref}
        title="Powerful technology you can rely on"
        platformLeft={<PlatformWeb footnotes={["4"]} />}
        platformRight={<PlatformMobile />}
      />

      {/* Trustpilot Slider */}
      <TrustpilotSliderB footnotes={["5"]} />

      <SectionContainer ref={pageItems.costs.ref}>
        {/* Instruments Header & Table */}
        <InstrumentsTableHeader
          title={<> Shares trading costs</>}
          contentRight={
            <p className="max-w-2xl text-xl">
              Speculate on over{" "}
              {constants.DIDS.UK_SPREAD_BET_SHARES_MINIMUM_COUNT_PLUS} shares
              and get exposure to the world&apos;s largest companies from Apple
              to Lloyds Banking Group, via spread betting and CFDs, with spreads
              from as low as 0.10 points.
            </p>
          }
        />

        {/* Instruments Table */}
        <OneColumn>
          <InstrumentsTable
            loadMoreEnabled={false}
            searchEnabled={true}
            searchType={"shares"}
            searchPlaceHolderText="Search 10,000+ shares"
            columns={instrumentMapping.columns}
            instrumentMappings={instrumentMapping.instruments}
          />
          <p className="pt-10">
            Pricing is indicative. Past performance is not a reliable indicator
            of future results.
          </p>
        </OneColumn>
      </SectionContainer>

      {/* Account Types (2 Columns) */}
      <AccountTypes2Col
        ref={pageItems.accountTypes.ref}
        accountTypeLeft={<AccountType type={"sb"} footnotes={["6"]} />}
        accountTypeRight={<AccountType type={"cfd"} footnotes={["6"]} />}
      />

      {/* Alpha Module */}
      <Alpha footnotes={["2", "7"]} />

      {/* Latest News */}
      <LatestNewsSection title={"News"} posts={props.posts} />

      {/* FAQ */}
      <FAQ ref={pageItems.faqs.ref} faqListCol1={faqQuestions} />

      {/* Ready To Get Started */}
      <ReadyToGetStarted
        bgImg={awsImage("shares-trading_ready-to-find-your-flow-bg.png")}
        mobileBgImg={awsImage(
          "shares-trading_ready-to-find-your-flow-bg-mob.png"
        )}
      />

      {/* Footnotes */}
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
              target="_blank"
              href="https://assets.cmcmarkets.com/pdfs/interest_scheme_terms_and_conditions.pdf"
              rel="noopener noreferrer"
            >
              Interest scheme T&amp;Cs apply.
            </a>
          </>,
        ]}
      />
    </>
  );
};

export default MarketsShares;
