/* eslint-disable @next/next/no-html-link-for-pages */
import OnboardingButton from "@/components/elements/OnboardingButton";
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import AccountTypes3Col from "@/components/modules/Common/AccountTypes3Col";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import Footnotes from "@/components/modules/Common/Footnotes";
import VideoHero from "@/components/modules/Common/Hero/VideoHero";
import PlatformMT4 from "@/components/modules/Common/PlatformTypes/PlatformMT4";
import PlatformMobile from "@/components/modules/Common/PlatformTypes/PlatformMobile";
import PlatformWeb from "@/components/modules/Common/PlatformTypes/PlatformWeb";
import PlatformTypes3Col from "@/components/modules/Common/PlatformTypes3Col";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import AccountComparisonTable from "@/components/modules/Pages/account-specifications/AccountComparisonTable";
import CMCInvest from "@/components/modules/Pages/account-specifications/CMCInvest";
import PlatformFeatures from "@/components/modules/Pages/account-specifications/PlatformFeatures";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const faqQuestions: FAQColumn = {
  title: "Account specifications FAQs",
  faqList: [
    {
      question: "How many types of trading accounts are there?",
      answer: (
        <>
          We offer spread betting, CFD trading and FX Active accounts in the UK
          and Ireland, available as a standard retail account for all traders.
          We also offer membership to Alpha, our benefit-packed membership
          tailored to premium retail clients, and a CMC Pro account, which is
          specifically for professional traders. We also offer an institutional
          account for businesses. For more information, read our articles on{" "}
          <a href="/en-gb/learn-spread-betting/what-is-spreadbetting">
            spread betting explained
          </a>{" "}
          and{" "}
          <a href="/en-gb/learn-cfd-trading/what-are-cfds">CFDs explained</a>.
        </>
      ),
    },
    {
      question:
        "What is the difference between a spread betting and CFD trading account?",
      answer: (
        <>
          Spread betting and CFDs are derivative products that allow you to
          speculate on the price movements of financial assets without taking
          ownership. The main difference between the two accounts is how they
          are taxed. Learn more about each product in our{" "}
          <a href="/en-gb/learn-spread-betting/spread-betting-vs-cfd">
            spread betting versus CFDs
          </a>{" "}
          guide.
        </>
      ),
    },
    {
      question: "What is the maximum leverage I can trade with?",
      answer: (
        <>
          For retail clients, the maximum leverage you can currently trade with
          is 30:1 (or 3.3% margin) for our spread betting, CFD trading and FX
          Active accounts. Read more about{" "}
          <a href="/en-gb/trading-guides/what-is-leverage-trading">
            trading with leverage
          </a>
          .
        </>
      ),
    },
    {
      question: "Can I open a demo account?",
      answer: (
        <>
          You can open a demo account with us, which enables you to practise
          trading with £10,000 worth of virtual funds. Choose between a{" "}
          <Link href="/spread-betting">spread betting demo account</Link>, a{" "}
          <Link href="/cfds">CFD trading demo account</Link>, or an{" "}
          <Link href="/forex-trading/forex-active-trader">
            FX Active demo account
          </Link>
          .
        </>
      ),
    },
    {
      question: "What is the minimum deposit required to open an account?",
      answer: (
        <>
          There is no minimum deposit required to open an account with us.
          However, you won&apos;t be able to place a trade until there are
          sufficient funds to cover your position. Learn{" "}
          <a href="/en-gb/support/faqs/account-support/funding">
            how to fund your online account
          </a>{" "}
          through our dedicated FAQs section.
        </>
      ),
    },
    {
      question: "What is included in a trading account?",
      answer: (
        <>
          When you open a spread betting, CFD trading or FX Active account,
          you&apos;ll have access to a multitude of technical and fundamental
          analysis tools, as well as trading indicators, draw tools and other{" "}
          <a href="/en-gb/trading-platform/charting-features">
            charting features
          </a>
          . Please note that some of these are only available with a live
          account. Learn more about our platform by watching our{" "}
          <a href="/en-gb/platform-guides">trading tutorials</a>.
        </>
      ),
    },
    {
      question: "Which markets can I trade?",
      answer: (
        <>
          You can spread bet or trade CFDs on more than 12,000 financial
          instruments with us, and speculate on the price movements of forex,
          indices, commodities, shares, ETFs, treasuries and more. Browse our{" "}
          <Link href="/markets">range of markets</Link>.
        </>
      ),
    },
    {
      question: "Which types of expenses are shown in my account?",
      answer: (
        <>
          When you open a trading account, you may incur expenses which include
          the following: spreads, share commissions (CFDs only), overnight
          holding costs, market data fees (CFDs only), GSLO premiums and
          dormancy fees. See our{" "}
          <Link href="/trading-costs">trading costs</Link> page for an overview
          of expenses.
        </>
      ),
    },
    {
      question:
        "What is the most popular type of trading account at CMC Markets?",
      answer: (
        <>
          Our most popular account type is a spread betting account for retail
          traders. Spread betting allows you to speculate on the financial
          markets tax-free* in the UK and Ireland.{" "}
          <Link href="/spread-betting">Open a spread betting account</Link> to
          get started.
        </>
      ),
    },
  ],
};

// TODO: Double check scroll spy links / any sticky banners
const AccountSpecifications = () => {
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

      <VideoHero
        title="Compare our accounts"
        topContent={
          <>
            <p>
              All spread betting, CFD and FX Active account holders
              automatically enter our tiered-volume discount scheme,{" "}
              <a href="/en-gb/price-plus">Price+</a>.
            </p>

            <p>
              {" "}
              Eligible spread betting, CFD and FX Active account holders can
              also join our exclusive <a href="/en-gb/alpha">Alpha</a>{" "}
              membership.
            </p>
          </>
        }
      />

      {/* Account Types */}
      <AccountTypes3Col
        accountTypeLeft={
          <AccountType
            type={"sb"}
            footnotes={["1"]}
            listOverride={[
              {
                content: "Go long or short on 12,000 instruments",
              },
              {
                content: "Trade with leverage",
              },
              {
                content: "CMC web platform, iOS and Android app",
              },
              {
                content: (
                  <>
                    Pay no stamp duty or capital gains tax on profits
                    <sup>1</sup>
                  </>
                ),
              },
              {
                content: "MT4 platform available",
              },
            ]}
          />
        }
        accountTypeMiddle={<AccountType type={"cfd"} footnotes={["1"]} />}
        accountTypeRight={
          <AccountType
            type={"fx"}
            footnotes={["2", "1"]}
            listOverride={[
              {
                content: "Go long or short on 12,000 instruments",
              },
              {
                content: "Trade with leverage",
              },
              {
                content: "CMC web platform, iOS and Android app",
              },
              {
                content: (
                  <>
                    Pay no stamp duty or capital gains tax on profits
                    <sup>1</sup>
                  </>
                ),
              },
              {
                content: "MT4 platform available",
              },
              {
                content: (
                  <>
                    Spreads from 0.0 pips on 6 major pairs<sup>2</sup>
                  </>
                ),
              },
              {
                content: "25% spread discount on all other FX pairs",
              },
            ]}
          />
        }
      />

      <AccountComparisonTable />

      {/* CMC Invest or Corporate Account */}
      <CMCInvest />

      {/* Platform types */}
      <PlatformTypes3Col
        title="Explore our platforms"
        platformLeft={<PlatformWeb footnotes={["3"]} />}
        platformMiddle={<PlatformMobile />}
        platformRight={<PlatformMT4 />}
      />

      {/* Platform features */}
      <PlatformFeatures />

      {/* Trustpilot slider */}
      <TrustpilotSliderB
        titleOverride="What other traders are saying about us"
        footnotes={["4"]}
      />

      {/* FAQ */}
      <FAQ faqListCol1={faqQuestions} />

      {/* Ready to get started */}
      <ReadyToGetStarted
        content="Open a demo account with £10,000 virtual funds. You can create a live account anytime inside the platform."
        ctaBtns={
          <OnboardingButton account="demo" variant="azure" className="mx-auto">
            Open a demo account
          </OnboardingButton>
        }
      />

      {/* Footnotes */}
      <Footnotes
        footnotesList={[
          <>
            Tax treatment depends on individual circumstances and can change or
            may differ in a jurisdiction other than the UK
          </>,
          <>Fixed commission at $2.5 per $100,000 notional value traded.</>,
          <>
            Awarded No.1 Web-Based Platform, ForexBrokers.com Awards 2023; Best
            Mobile Trading Platform, ADVFN International Financial Awards 2022;
            Best Spread Betting Provider, The City of London Wealth Management
            Awards 2021; Best Phone Customer Service & Best Email Customer
            Service, based on highest user satisfaction among spread betters,
            CFD and FX traders, Investment Trends 2020 UK Leverage Trading
            Report
          </>,
          <>
            1.388 million unique user logins for the CMC Markets invest and CFD
            platforms globally, as at August 2023.{" "}
          </>,
        ]}
      />
    </>
  );
};

export default AccountSpecifications;
