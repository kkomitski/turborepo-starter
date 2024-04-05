/* eslint-disable @next/next/no-html-link-for-pages */
// To do: Re-upload all images & videos to AWS

import OnboardingButton from "@/components/elements/OnboardingButton";
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import AccountTypes3Col from "@/components/modules/Common/AccountTypes3Col";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import Footnotes from "@/components/modules/Common/Footnotes";
import HeroAccoladesSectionA from "@/components/modules/Common/Hero/Common/HeroAccoladesSectionA";
import MainHeroWide from "@/components/modules/Common/Hero/MainHeroWide";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import WhyTrade from "@/components/modules/Markets/WhyTrade";
import AdvancedMT4Functionality from "@/components/modules/Pages/trading-platforms/mt4/AdvancedMT4Functionality";
import ExecutionAndReliability from "@/components/modules/Pages/trading-platforms/mt4/ExecutionAndReliability";
import MarketsAndCosts from "@/components/modules/Pages/trading-platforms/mt4/MarketsAndCosts";
import TradingTools from "@/components/modules/Pages/trading-platforms/mt4/TradingTools";
import constants, { awsImage } from "@/helpers/constants";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import Hero from "@/components/modules/Pages/trading-platforms/mt4/Hero";
import WhatIs from "@/components/modules/Pages/trading-platforms/mt4/WhatIs";
import usePlatformDetector, {
  OperatingSystem,
} from "@/hooks/usePlatformDetector";
import PlayStoreSVG from "@/components/svg/PlayStoreSVG";
import IOSIconSVG from "@/components/svg/IOSIconSVG";
import MacOSIconSVG from "@/components/svg/MacOSIconSVG";
import WindowsIconSVG from "@/components/svg/WindowsIconSVG";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import { ScrollSpyItem } from "@/helpers/types/general";
import Button from "@/components/elements/Button";

const MT4 = (props: any) => {
  const pageItems: ScrollSpyItem = {
    hero: {
      title: "Overview",
      ref: useRef<HTMLElement | null>(null),
    },
    costs: {
      title: "MT4 costs",
      ref: useRef<HTMLElement | null>(null),
    },
    tools: {
      title: "MT4 tools",
      ref: useRef<HTMLElement | null>(null),
    },
    accountTypes: {
      title: "MT4 accounts",
      ref: useRef<HTMLElement | null>(null),
    },
  };
  const whyTradeObj = [
    {
      title: "London-based server",
      text: (
        <>
          Our London-located server and industry reputation helps us provide a
          tier-one liquidity solution, so we can consistently deliver
          lightning-fast execution<sup>2</sup> speeds.
        </>
      ),
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_server-48.svg"),
      },
    },
    {
      title: "No scalping restriction",
      text: "We don't have any scalping restrictions, or penalise clients who practise scalping trading strategies with us.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_receipt-tax-48.svg"),
      },
    },
    {
      title: "Unrestricted trading",
      text: "There are no restrictions on minimum stop-loss or take-profit distances, or stop-loss and take-profit limits, especially useful for high-volume traders.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_lock-closed-48.svg"),
      },
    },
    {
      title: "Hedge your positions",
      text: "We give clients the ability to go long and short at the same time on a specific instrument, which means there's no interruption for traders using Expert Advisors (EAs).",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_adjustments-48.svg"),
      },
    },
    {
      title: "Free premium indicators and EAs",
      text: "Hone your technical analysis and tap into our suite of additional premium MT4 indicators and EAs, included at no cost.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_document-download-48.svg"),
      },
    },
    {
      title: "Straightforward deposit and withdrawal",
      text: "Deposit and withdraw funds easily, and whenever you want to, with no charge.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_cash-48.svg"),
      },
    },
  ];

  const faqQuestions: FAQColumn = {
    title: "New to MetaTrader 4?",
    faqList: [
      {
        question: "What is the MetaTrader 4 platform?",
        answer: (
          <>
            MetaTrader 4 or MT4, developed by MetaQuotes, is an online trading
            platform used to speculate on the price movements of assets such as
            forex, indices and commodities. It&apos;s one of the most popular
            forex trading platforms available online, and can be downloaded on
            Windows, Android and iOS. MT4 has the advantage of allowing you to
            use Expert Advisors (EAs) to automate your trading. Find out how to
            download MT4{" "}
            <a href="/en-gb/trading-platforms/mt4/getting-started-with-mt4">
              here
            </a>
            .
          </>
        ),
      },
      {
        question: "How do I download MetaTrader 4?",
        answer: (
          <>
            Find out how to download, install and log in to MT4 on your PC or
            Mac by visiting our{" "}
            <a href="/en-gb/trading-platforms/mt4/getting-started-with-mt4">
              getting started with MT4 guide
            </a>
            . Our MT4 guide also covers demo accounts, how to fund your MT4
            account and more.
          </>
        ),
      },
      {
        question: "What is auto trading on MT4?",
        answer: (
          <>
            Auto trading or algorithmic trading is one of the most powerful
            features available on the MT4 platform. It&apos;s a highly
            innovative feature on the MT4 platform which allows you to test and
            apply Expert Advisors (EAs) and technical indicators that you have
            built or acquired.
          </>
        ),
      },
      {
        question: "How do I download MT4 indicators and EAs?",
        answer: (
          <>
            You can{" "}
            <a href="https://assets.cmcmarkets.com/files/CMC-MT4-Apps.exe">
              download them for free here
            </a>
            .
          </>
        ),
      },
      {
        question: "How do I open an MT4 demo account?",
        answer: (
          <>
            <ul className="list-disc pl-4">
              <li>
                <OnboardingButton
                  params="jid=gb2&amp;Isrc=0"
                  account="live"
                  variant="link"
                >
                  Apply for a demo account
                </OnboardingButton>
              </li>
              <li>Create an MT4 password within the admin portal</li>
              <li>
                Follow the live account login steps outlined above (but select
                the demo server – you can find the server name at the top of the
                emails we sent you during the application process)
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "Does my MT4 demo account expire?",
        answer: (
          <>
            MT4 demo accounts remain active as long as you log in to your MT4
            trading platform at least once every 30 days. If you don&apos;t log
            in within that timeframe, your account will automatically be closed.
            You can set up a new demo account again at any time in the future.
          </>
        ),
      },
    ],
  };

  const faqQuestionsCol2: FAQColumn = {
    title: "New to CMC Markets?",
    faqList: [
      {
        question: "Is it free to open an account?",
        answer: (
          <>
            There&apos;s no cost when opening a live spread betting, CFD or FX
            Active account. You can also view prices and use tools such as
            charts, Reuters news or Morningstar quantitative equity reports,
            free of charge. However, you will need to deposit funds in your
            account to place a trade. Find out more about the{" "}
            <a href="https://www.cmcmarkets.com/en-gb/markets/trading-costs">
              costs of placing a trade
            </a>
            .
          </>
        ),
      },
      {
        question: "Is CMC Markets regulated by the FCA?",
        answer: (
          <>
            Yes, CMC Markets UK plc (registration number 173730) and CMC
            Spreadbet plc (registration number 170627) are fully authorised and
            regulated by the Financial Conduct Authority (FCA) in the UK. Retail
            client money is held in segregated client bank accounts and money
            held on behalf of clients is distributed across a range of major
            banks, which are regularly assessed against our risk criteria.
          </>
        ),
      },
      {
        question: "Is CMC Markets covered by the FSCS?",
        answer: (
          <>
            Yes, your eligible deposits with CMC Markets are protected up to a
            total of {constants.DIDS.UK_COMPENSATION_AMOUNT} by the Financial
            Services Compensations Scheme (FSCS), the UK&apos;s deposit
            guarantee scheme. If CMC Markets ever went into liquidation, retail
            clients would have their share of segregated money returned, minus
            the administrator&apos;s costs in handling and distributing these
            funds. Any shortfall of funds up to{" "}
            {constants.DIDS.UK_COMPENSATION_AMOUNT} may be compensated under the
            FSCS.
          </>
        ),
      },
      {
        question: "How does CMC Markets segregate client money?",
        answer: (
          <>
            Under the FCA&apos;s Client Money rules, we&apos;re required to
            segregate client money (unless you agree with us otherwise) from
            CMC&apos;s own funds. The funds held in segregated bank accounts do
            not belong to CMC and will be held in a way that enables it to be
            identified as client money.{" "}
            <a href="https://www.cmcmarkets.com/en-gb/regulations">
              Learn more about client money regulations
            </a>
          </>
        ),
      },
      {
        question: "How does CMC Markets make money?",
        answer: (
          <>
            Our income primarily comes from our spreads, while other fees, such
            as overnight holding costs, make a minor contribution to our overall
            revenue. We never aim to profit from our clients&apos; losses. Our
            aim is to build long-term relationships by providing the best
            possible trading experience through our technology and customer
            service.
          </>
        ),
      },
      {
        question: "What can I trade on with CMC?",
        answer: (
          <>
            <p>
              You can spread bet or trade CFDs on{" "}
              {constants.DIDS.UK_MT4_INSTRUMENT_COUNT_PLUS} instruments on MT4
              with us, comprising over 170 forex pairs, plus popular indices and
              commodities.
            </p>
            <p>
              Our proprietary Next Generation trading platform offers{" "}
              {constants.DIDS.INSTRUMENT_TOTAL_COUNT} instruments, including
              indices, forex and commodities, plus shares, ETFs, treasuries and
              more.
            </p>
          </>
        ),
      },
    ],
  };

  const operatingSystem: OperatingSystem = usePlatformDetector();

  return (
    <>
      <Head>
        <title>
          MT4 Download | Spread Bet and Trade CFDs with MetaTrader 4 | CMC
          Markets
        </title>
        <meta
          name="description"
          content="Trade CFDs on forex, indices and commodities with Metatrader 4 (MT4), the world's popular trading platform"
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      {/* Hero */}
      <Hero ref={pageItems.hero.ref} />
      <HeroAccoladesSectionA
        fscsFootnote="1"
        awardsOverride={[
          {
            year: "2023",
            title: "Best Forex Broker",
            subtitle: "Good Money Guide Awards",
          },
          {
            year: "2023",
            title: "Best In-House Analysts",
            subtitle: "Professional Trader Awards",
          },
          {
            year: "2022",
            title: "Best CFD Provider",
            subtitle: "Online Money Awards",
          },
        ]}
      />

      {/* What is MetaTrader 4 */}
      <WhatIs
        title="What is MetaTrader 4?"
        content={
          <>
            <p className="text-xl">
              MetaTrader 4 (MT4) is a globally renowned online trading platform,
              which was originally released in 2005. While the platform is
              synonymous with forex trading, you can also spread bet or trade
              CFDs on popular indices and commodities through MT4 with us.
            </p>
            <p className="text-xl">
              MT4 offers automated trading though Expert Advisors (EAs), and
              access to thousands of analysis tools. Start MT4 trading from home
              and stay in touch with your trades when you’re on the go through
              the MT4 mobile app.
            </p>
          </>
        }
        sideBgImage={awsImage("mt4_what-is-side-bg-img.png")}
        sideImage={awsImage("mt4_what-is-platform-img.png")}
      />

      {/* Why Trade */}
      <WhyTrade title="Why trade on MetaTrader 4 with us?" data={whyTradeObj} />

      {/* Execution and reliability */}
      <ExecutionAndReliability />

      {/* Trustpilot slider */}
      <TrustpilotSliderB
        titleOverride={
          <>
            <span>
              {constants.DIDS.YEARS_ACTIVE} years of industry experience
            </span>
            <span className="block">
              1 million+ traders and investors globally<sup>4</sup>
            </span>
          </>
        }
        textOverride={true}
        footnotes={["7"]}
      />

      {/* Markets & costs */}
      <MarketsAndCosts ref={pageItems.costs.ref} />

      {/* Advanced MT4 functionality */}
      <AdvancedMT4Functionality />

      {/* Trading tools - (MT4 Addons + Indicators) */}
      <TradingTools ref={pageItems.tools.ref} />

      {/* Account types */}
      <AccountTypes3Col
        ref={pageItems.accountTypes.ref}
        title="Compare our account types"
        enableComparisonBtn={true}
        accountTypeLeft={
          <AccountType
            type={"sb"}
            titleOverride="MT4 spread betting"
            descriptionOverride={
              <>
                A tax-efficient<sup>6</sup> way of speculating on the price
                movement of global financial instruments.
              </>
            }
            listOverride={[
              {
                content: (
                  <>
                    Go long or short on{" "}
                    {constants.DIDS.UK_MT4_INSTRUMENT_COUNT_PLUS} instruments
                  </>
                ),
              },
              {
                content: <>175+ FX pairs</>,
              },
              {
                content: <>Trade with leverage</>,
              },
              {
                content: (
                  <>
                    No stamp duty to pay<sup>6</sup>
                  </>
                ),
              },
              {
                content: (
                  <>
                    No capital gains tax on profits<sup>6</sup>
                  </>
                ),
              },
            ]}
            footnotes={["4"]}
            ctaOverride={
              <>
                {" "}
                <div className="flex flex-col">
                  <OnboardingButton
                    className="mb-2"
                    variant="azure"
                    account="live"
                    params="jid=gb2&amp;iaid=null&amp;lsrc=1"
                  >
                    Create account
                  </OnboardingButton>
                  <Button
                    variant="primary-outline"
                    icon="arrow"
                    href="/spread-betting"
                  >
                    Learn more
                  </Button>
                </div>
              </>
            }
          />
        }
        accountTypeMiddle={
          <AccountType
            type={"cfd"}
            titleOverride="MT4 CFD trading"
            descriptionOverride={
              <>
                Trade on the price movement of underlying financial assets, with
                no stamp duty on profits<sup>6</sup>
              </>
            }
            listOverride={[
              {
                content: (
                  <>
                    Go long or short on{" "}
                    {constants.DIDS.UK_MT4_INSTRUMENT_COUNT_PLUS} instruments
                  </>
                ),
              },
              {
                content: <>175+ FX pairs</>,
              },
              {
                content: <>Trade with leverage</>,
              },
              {
                content: (
                  <>
                    No stamp duty to pay<sup>6</sup>
                  </>
                ),
              },
              {
                content: (
                  <>
                    Profits subject to capital gains tax<sup>6</sup>
                  </>
                ),
                bulletType: "minus",
              },
            ]}
            footnotes={["4"]}
            ctaOverride={
              <>
                {" "}
                <div className="flex flex-col">
                  <OnboardingButton
                    className="mb-2"
                    variant="azure"
                    account="live"
                    params="jid=gb2&amp;iaid=null&amp;lsrc=1"
                  >
                    Create account
                  </OnboardingButton>
                  <Button variant="primary-outline" icon="arrow" href="/cfds">
                    Learn more
                  </Button>
                </div>
              </>
            }
          />
        }
        accountTypeRight={
          <AccountType
            type={"fx"}
            titleOverride="MT4 FX Active"
            descriptionOverride={
              <>
                Commission-based CFD trading<sup>5</sup>, designed for forex
                traders who want to trade on pure price action.
              </>
            }
            listOverride={[
              {
                content: (
                  <>
                    Go long or short on{" "}
                    {constants.DIDS.UK_MT4_INSTRUMENT_COUNT_PLUS} instruments
                  </>
                ),
              },
              {
                content: <>175+ FX pairs</>,
              },
              {
                content: <>Trade with leverage</>,
              },
              {
                content: (
                  <>
                    No stamp duty to pay<sup>6</sup>
                  </>
                ),
              },
              {
                content: (
                  <>
                    Profits subject to capital gains tax<sup>6</sup>
                  </>
                ),
                bulletType: "minus",
              },
              {
                content: (
                  <>
                    Spreads from 0.0 pips on 6 major pairs<sup>5</sup>
                  </>
                ),
              },
              {
                content: <>25% spread discount on all other FX pairs</>,
              },
            ]}
            ctaOverride={
              <>
                {" "}
                <div className="flex flex-col">
                  <OnboardingButton
                    className="mb-2"
                    variant="azure"
                    account="live"
                    params="jid=gb2&amp;iaid=null&amp;lsrc=1"
                  >
                    Create account
                  </OnboardingButton>
                  <Button
                    variant="primary-outline"
                    icon="arrow"
                    href="/forex-trading/forex-active-trader"
                  >
                    Learn more
                  </Button>
                </div>
              </>
            }
            footnotes={["3", "4"]}
          />
        }
      />

      {/* FAQ */}
      <FAQ faqListCol1={faqQuestions} faqListCol2={faqQuestionsCol2} />

      {/* Ready to get started */}
      <ReadyToGetStarted
        bgImg={awsImage("ready-to-start-trading-mt4-bg.png")}
        mobileBgImg={awsImage("ready-to-start-trading-mt4-bg-mob.png")}
        platformImg={awsImage("ready-to-start-trading-mt4-img.png")}
        mobilePlatformImg={awsImage("ready-to-start-trading-mt4-img-mob.png")}
        platformClassNames="w-screen md:w-screen"
        content={
          "Spread bet or trade CFDs on the world's most popular trading platform."
        }
        ctaBtns={
          <>
            <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
              <OnboardingButton
                variant="azure"
                className="mx-auto md:mx-0"
                account="demo"
                params="jid=gb2&amp;iaid=null&amp;lsrc=1"
              >
                Open a demo account
              </OnboardingButton>
              <div>
                {operatingSystem === "Windows" && (
                  <a
                    className="btn btn-primary-outline btn-with-icon fill-navy-100 stroke-white font-semibold hover:stroke-azure-20"
                    href="https://assets.cmcmarkets.com/files/mt4setup.exe"
                  >
                    <span>Download MT4</span>
                    <WindowsIconSVG className="fill-navy-100" />
                  </a>
                )}
                {operatingSystem === "Mac" && (
                  <a
                    className="btn btn-primary-outline btn-with-icon font-semibold"
                    href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/MetaTrader4.dmg"
                  >
                    <span>Download MT4</span>
                    <MacOSIconSVG className="fill-navy-100" />
                  </a>
                )}
                {operatingSystem === "iOS" && (
                  <a
                    className="btn btn-primary-outline btn-with-icon font-semibold"
                    rel="nofollow"
                    href="https://apps.apple.com/us/app/metatrader-4/id496212596"
                  >
                    <span>Download MT4</span>
                    <IOSIconSVG className="fill-navy-100" />
                  </a>
                )}
                {operatingSystem === "Android" && (
                  <a
                    className="btn btn-primary-outline btn-with-icon font-semibold"
                    rel="nofollow"
                    href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4"
                  >
                    <span>Download MT4</span>
                    <PlayStoreSVG className="h-3.5 w-3.5 stroke-navy-100" />
                  </a>
                )}
              </div>
            </div>
          </>
        }
      />

      {/* Footnotes */}
      <Footnotes
        footnotesList={[
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
          <>0.0061 seconds MT4 CFD median trade execution time, March 2022</>,
          <>
            98.8% of market open orders were filled at quote, 1-31 March 2022;
            99.5%+ MT4 core platform uptime, 1-31 May 2022.
          </>,
          <>
            1.388 million unique user logins for the CMC Markets invest and CFD
            platforms globally, as at August 2023.
          </>,
          <>Commissions at $2.5 per $100k traded.</>,

          <>
            Tax treatment depends on the individual circumstances of each
            client. Tax law can change or may differ in a jurisdiction other
            than the UK.
          </>,
        ]}
      />
    </>
  );
};

export default MT4;
