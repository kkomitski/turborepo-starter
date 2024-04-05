import OnboardingButton from "@/components/elements/OnboardingButton";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import Footnotes from "@/components/modules/Common/Footnotes";
import MainHeroWide from "@/components/modules/Common/Hero/MainHeroWide";
import PlatformMT4 from "@/components/modules/Common/PlatformTypes/PlatformMT4";
import PlatformWeb from "@/components/modules/Common/PlatformTypes/PlatformWeb";
import PlatformTypes2Col from "@/components/modules/Common/PlatformTypes2Col";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import WhyTrade from "@/components/modules/Markets/WhyTrade";
import { WhyTradeObj } from "@/components/modules/Markets/WhyTrade/WhyTradeCard";
import FXAdvantage from "@/components/modules/Pages/forex-trading/forex-active-trader/FXAdvantage";
import SignUp from "@/components/modules/Pages/forex-trading/forex-active-trader/SignUp";
import WhyBecomeFXActiveTrader from "@/components/modules/Pages/forex-trading/forex-active-trader/WhyBecomeFXActiveTrader.old";
import constants, { awsImage } from "@/helpers/constants";
import Head from "next/head";
import React from "react";

const ForexActiveTrader = () => {
  const whyTradeData: Array<WhyTradeObj> = [
    {
      title: "Transparent pricing",
      text: "Know your costs upfront by trading on pure price action, and thanks to our fixed, low commission rate.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_pound-magnifying-glass-48.svg"),
      },
    },
    {
      title: "Spreads from 0.0 pips",
      text: "Access ultra-tight spreads from 0.0 pips on six major FX pairs, and save with a 25% spread discount on all our other FX pairs.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_receipt-tax-48.svg"),
      },
    },
    {
      title: "Fixed, low commission",
      text: "Factor in your cost per trade, with fixed low commission at just $2.50 per $100,000 notional value.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_building-48.svg"),
      },
    },
    {
      title: (
        <>
          More forex pairs than anywhere else<sup>2</sup>
        </>
      ),
      text: "We offer over 330 FX pairs through our proprietary trading platform, and over 175 FX pairs through MetaTrader 4.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_up-down-48.svg"),
      },
    },
    {
      title: "Ultra-fast executions",
      text: (
        <>
          Expect fully automated, lightning-fast execution speeds of 0.0030
          seconds<sup>3</sup>.
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
      title: "Precision FX pricing",
      text: "With a combination of feeds from tier-one banks, you'll always receive our most accurate price.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_check-circle-48.svg"),
      },
    },
    {
      title: "Straightforward deposit and withdrawal",
      text: "Deposit and withdraw funds easily to and from your FX Active account, and whenever you want, at no cost.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_cash-48.svg"),
      },
    },
  ];
  const faqQuestions: FAQColumn = {
    title: "New to FX Active",
    faqList: [
      {
        question: "What is FX Active?",
        answer: (
          <>
            FX Active is an account designed for high-volume traders, who want
            to get even more from their forex trading. It features tighter
            spreads and fixed commissions, enabling pure price transparency. In
            addition to over 330 FX pairs on our proprietary platform, or over
            175 through the MT4 platform, all other non-FX instruments are also
            available to trade in the same way as with a standard account.
          </>
        ),
      },
      {
        question:
          "Which currency pairs are available with an FX Active account?",
        answer: (
          <>
            On our trading platform, there are more than 330 forex instruments
            to trade, while on MT4 you can trade on over 170 FX pairs with us.
          </>
        ),
      },
      {
        question: "Which markets can I trade on with an FX Active account?",
        answer: (
          <>
            With an FX Active account, you can trade on all the markets and
            instruments available on our standard CFD platform. So, on our own
            platform, you can trade on FX, indices, commodities, shares, ETFs,
            share baskets, forex indices, plus rates and bonds. On MT4, you can
            trade on FX, indices and commodities. Note that only certain FX
            instruments have spreads from 0.0 pips.
          </>
        ),
      },
      {
        question: "What are the costs associated with an FX Active account?",
        answer: (
          <>
            FX Active has fully transparent commissions across all forex pairs
            at 0.0025% per transaction, as well as minimum spreads from 0.0 pips
            on six major FX pairs, and a 25% spread reduction compared with our
            standard CFD account on all the other currency pairs we offer.
          </>
        ),
      },
      {
        question: "How does the commission work with FX Active?",
        answer: (
          <>
            Commission is charged at a fixed rate of 0.0025% per transaction.
            This works out as $2.50 per $100,000 worth of currency trade. At
            this notional volume, it would cost $5 to open and close a trade.
            MT4 commissions are charged upfront for opening and closing trades.
          </>
        ),
      },
      {
        question: "Do you have an FX Active demo account?",
        answer: <>Yes, there is an FX Active demo account.</>,
      },
      {
        question: "What is an FX Active demo account?",
        answer: (
          <>
            An FX Active demo account allows you to experience the
            platform&apos;s wide range of innovative features and tools in a
            risk-free environment. You can practise trading on your favourite
            instruments and try out trading strategies and techniques with
            £10,000 of virtual currency.
          </>
        ),
      },
      {
        question: "Do demo accounts expire?",
        answer: (
          <>
            Our own platform demo account remains open once created. MT4
            platform demo accounts remain active provided that you log in to the
            platform at least once every 30 days. If you don&apos;t log in
            within that timeframe, your demo account will automatically be
            closed. You can set up a new account again at any time in the
            future.
          </>
        ),
      },
    ],
  };
  return (
    <>
      <Head>
        <title>FX active: Trade on forex from 0.0 pips | CMC Markets</title>
        <meta
          name="description"
          content="Enjoy spreads from 0.0 pips on six major FX pairs, with fixed low commission. Plus, get a 25% spread discount on over 300 FX pairs, vs our standard CFD account."
        ></meta>
      </Head>

      {/* Hero */}
      <MainHeroWide
        title={<>Trade on forex from 0.0 pips with FX Active</>}
        content={
          <>
            <div className="mb-14 text-xl">
              <p>
                Trade on pure price action coupled with fully transparent
                execution, and enjoy spreads from 0.0 pips on six major FX
                pairs, with fixed low commission. Get a 25% spread discount on
                over 300 other FX pairs, versus our standard CFD account.
              </p>
              <p>
                FX Active is available on CMC Markets&apos; proprietary trading
                platform and MetaTrader 4.
              </p>
            </div>
            <OnboardingButton
              account="live"
              variant="azure"
              size="lg"
              params="jid=gb1&amp;iaid=null&amp;lsrc=1"
            >
              Create an account
            </OnboardingButton>
          </>
        }
        imgUrl={awsImage("fx-active_hero-img.png")}
        bgImgUrl={awsImage("fx-active_hero-bg.jpg")}
        mobileImgUrl={awsImage("fx-active_hero-mob.png")}
        fscsFootnote={"1"}
        overrideCTA={<></>}
      />

      {/* FX Advantage Table */}
      <FXAdvantage />

      {/* Why FX Active? */}
      <WhyTrade
        title={"What you will get as an FX Active trader?"}
        data={whyTradeData}
      />

      {/* Sign up to FX Active */}
      <SignUp />

      {/* Why become an FX Active? - REMOVED */}
      {/* <WhyBecomeFXActiveTrader /> */}

      {/* Platform Types */}
      <PlatformTypes2Col
        title="Choose from two powerful platforms"
        platformLeft={
          <PlatformWeb
            footnotes={["1"]}
            descriptionOverride="Our purpose-built trading platform combines powerful features and advanced security, with best-in-class insight and analysis. Trade on over 12,000 instruments, including more than 330+ forex pairs."
          />
        }
        platformRight={
          <PlatformMT4 descriptionOverride="Trade CFDs on more than 175+ FX pairs, plus indices and commodities, on this widely used platform, and access algorithmic trading with Expert Advisors." />
        }
      />

      {/* FAQ */}
      <FAQ faqListCol1={faqQuestions} />

      {/* Ready to get started */}
      <ReadyToGetStarted
        platformImg={awsImage("ready-to-start-trading-forex-trading-img.png")}
        mobilePlatformImg={awsImage(
          "ready-to-start-trading-forex-trading-mob.png"
        )}
        content="Try a demo account with £10,000 of virtual funds. You can then open a live account anytime within the platform."
        ctaBtns={
          <OnboardingButton
            className="mx-auto"
            account="demo"
            params="jid=gb3&amp;iaid=null&amp;lsrc=1"
            variant="azure"
          >
            Sign up to FX Active
          </OnboardingButton>
        }
      />

      {/* Footnotes */}
      <Footnotes
        type="numerical"
        footnotesList={[
          <>
            FSCS is an independent body that offers protection to customers of
            financial services firms that have failed. The compensation amount
            may be up to £85,000 per eligible person, per firm.{" "}
            <a
              target="_blank"
              href="https://www.fscs.org.uk/"
              rel="noopener noreferrer"
            >
              Eligibility conditions apply.
            </a>{" "}
            Please contact the FSCS for more information.
          </>,
          <>No.1 Most Currency Pairs, ForexBrokers.com Awards 2023.</>,
          <>{constants.DIDS.GLOBAL_CFD_EXECUTION_TIME}</>,
        ]}
      />
    </>
  );
};

export default ForexActiveTrader;
