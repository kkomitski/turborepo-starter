/* eslint-disable @next/next/no-html-link-for-pages */
import OnboardingButton from "@/components/elements/OnboardingButton";
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import AccountTypes3Col from "@/components/modules/Common/AccountTypes3Col";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import Footnotes from "@/components/modules/Common/Footnotes";
import MainHeroWide from "@/components/modules/Common/Hero/MainHeroWide";
import PlatformMT4 from "@/components/modules/Common/PlatformTypes/PlatformMT4";
import PlatformWeb from "@/components/modules/Common/PlatformTypes/PlatformWeb";
import PlatformTypes2Col from "@/components/modules/Common/PlatformTypes2Col";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import ToolsBuiltV2 from "@/components/modules/Common/ToolsBuiltV2";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import WhyTradeCard, {
  WhyTradeObj,
} from "@/components/modules/Markets/WhyTrade/WhyTradeCard";
import ExclusiveAccess from "@/components/modules/Pages/trading-platforms/mobile-trading-app/ExclusiveAccess";
import TotalControl from "@/components/modules/Pages/trading-platforms/mobile-trading-app/TotalControl";
import constants, { awsImage, getHtmlLang } from "@/helpers/constants";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { initQrCode } from "@/lib/qr-code";
import { ScrollSpyItem } from "@/helpers/types/general";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import PlayStoreSVG from "@/components/svg/PlayStoreSVG";
import IOSIconSVG from "@/components/svg/IOSIconSVG";
import TestQR from "@/components/global/Misc/MobileQRCode";
import MobileQRCode from "@/components/global/Misc/MobileQRCode";
import MobileAppQRCode from "@/components/global/Misc/MobileQRCode";

const MobileTradingApp = () => {
  const pageItems: ScrollSpyItem = {
    hero: {
      title: "Overview",
      ref: useRef<HTMLElement | null>(null),
    },
    whyCMC: {
      title: "Why CMC?",
      ref: useRef<HTMLElement | null>(null),
    },
    tools: {
      title: "Mobile trading tools",
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

  const whyTradeData: Array<WhyTradeObj> = [
    {
      title: "Open, close and modify trades on the go",
      text: "Our intuitive mobile trading app is designed for both new and experienced traders alike.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_lightning-bolt-48.svg"),
      },
    },
    {
      title: "12,000 markets at your fingertips",
      text: (
        <>
          Spread bet and trade CFDs 24 hours a day on popular instruments like{" "}
          <a href={`/${getHtmlLang()}/instruments/uk-100-cash`}>UK 100</a>,{" "}
          <a href={`/${getHtmlLang()}/instruments/eur-usd`}>EUR/USD</a> and{" "}
          <a href={`/${getHtmlLang()}/instruments/gold-cash`}>Gold</a>. From{" "}
          <Link href="/markets-commodity-trading">commodities</Link> to{" "}
          <Link href="/markets-indices">indices</Link> to{" "}
          <Link href="/etf-trading">ETFs</Link>, we&apos;ve got it.
        </>
      ),
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_chart-square-bar-48.svg"),
      },
    },
    {
      title: "Mobile-optimised trading",
      text: "Advanced order ticketing, mobile-optimised charting and over 40 technical indicators and drawing tools.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_mobile-48.svg"),
      },
    },
    {
      title: "Instant notifications",
      text: "Set up alerts via push, SMS or email, so you never miss an important market event, price alert or order notification.",
      icon: {
        enabled: true,
        width: 48,
        height: 48,
        src: awsImage("icon_bell-48.svg"),
      },
    },
  ];

  const faqQuestions: FAQColumn = {
    title: "New to mobile trading?",
    faqList: [
      {
        question: "What is mobile trading?",
        answer: (
          <>
            Mobile trading is the process of trading securities via a mobile
            device, such as a smartphone or tablet. Mobile trading has
            revolutionised the trading industry, by providing smartphone users
            with the opportunity to trade outside the confines of traditional
            trading methods.
          </>
        ),
      },
      {
        question: "Is mobile trading safe?",
        answer: (
          <>
            While there is always an element of risk when using the internet,
            we&apos;ve made our web and mobile platforms as safe as possible,
            including adding two-factor authentication (2FA) into our mobile
            app. We endeavour to adopt the latest technology and practices to
            maintain the security of your data and your account. This includes
            the protection of your data and ensuring secure access to your
            accounts and the trading platform. See{" "}
            <a href="/en-gb/platform-guides/2fa">how to set up 2FA</a> on your
            trading app and learn{" "}
            <a href="/en-gb/fraud-awareness">how to stay safe online</a>.
          </>
        ),
      },
      {
        question: "How does mobile trading work?",
        answer: (
          <>
            Mobile trading allows you to spread bet and trade CFDs on your
            chosen instruments with the same ease as from a desktop. With a
            mobile device, you can trade on the go without missing price alerts
            or market events, once you&apos;ve set these up on your device.
            Follow our guide on{" "}
            <a href="/en-gb/platform-guides/how-to-start-trading">
              how to start trading
            </a>
            .
          </>
        ),
      },
      {
        question: "How can I start mobile trading?",
        answer: (
          <>
            To start trading from a mobile device, download our trading app for{" "}
            <a
              href={constants.appLinks.baseLink}
              suppressHydrationWarning={true}
              data-fallback-href={constants.appLinks.fallbackLink}
            >
              Android
            </a>{" "}
            or{" "}
            <a
              href={constants.appLinks.baseLink}
              suppressHydrationWarning={true}
              data-fallback-href={constants.appLinks.fallbackLink}
            >
              iOS
            </a>
            . Once you&apos;ve logged in to your account, you can explore our
            product library, place order tickets and set up trading alerts to
            receive in-app push notifications for the instruments that you want
            to trade on.
          </>
        ),
      },
      {
        question: "How can you trade from your phone?",
        answer: (
          <>
            To trade from your phone, download our mobile app and register for a
            spread betting or CFD account. You can then start to open buy or
            sell positions on over 12,000 instruments, using our
            mobile-optimised charting, and technical and fundamental analysis
            tools.{" "}
            <a href="/en-gb/platform-guides/how-to-start-trading">
              Learn how to start trading
            </a>
            .
          </>
        ),
      },
      {
        question: "What apps can I trade on?",
        answer: (
          <>
            We offer mobile trading for Android and iOS software, where you can
            spread bet or trade CFDs on the go. Download our{" "}
            <a
              href={constants.appLinks.baseLink}
              suppressHydrationWarning={true}
              data-fallback-href={constants.appLinks.fallbackLink}
            >
              Android app
            </a>{" "}
            or{" "}
            <a
              href={constants.appLinks.baseLink}
              suppressHydrationWarning={true}
              data-fallback-href={constants.appLinks.fallbackLink}
            >
              iOS app
            </a>{" "}
            to get started.
          </>
        ),
      },
      {
        question: "Are trading apps safe?",
        answer: (
          <>
            Trading apps aren&apos;t always safe, but we&apos;ve taken steps to
            make sure that your account is as secure and private as possible.
            Learn more about our{" "}
            <a href="/en-gb/platform-guides/2fa">two-factor authentication</a>{" "}
            software, which allows you to protect your mobile account by setting
            up SMS, one-time password and barcode confirmations.
          </>
        ),
      },
    ],
  };

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Mobile Trading App | App for Trading | CMC Markets</title>
        <meta
          name="description"
          content="Use our award-winning spread betting and CFD mobile trading app for iPhone, iPad &amp; Android to trade thousands of instruments across the markets on the move."
        />
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      {/* Hero */}
      <MainHeroWide
        ref={pageItems.hero.ref}
        title={<>The mobile trading app for committed traders</>}
        content={
          <>
            {" "}
            <p className="mb-14 text-xl">
              Packed with powerful features, yet intuitive, and available to
              everyone. Whatever the next step in your trading journey, our
              platforms can help you get there.
            </p>
            <div className="device-show os-other">
              <div className="items-center gap-x-10 pb-3.5 text-sm lg:flex">
                <div className="rounded-lg p-4 shadow-lg">
                  <MobileAppQRCode />
                </div>
                <p>
                  SCAN THIS QR CODE
                  <span className="lg:block">TO DOWNLOAD THE APP</span>
                </p>
              </div>
            </div>
            <div className="device-show os-ios mb-2">
              <a
                className="btn btn-azure btn-with-icon"
                href={constants.appLinks.baseLink}
                suppressHydrationWarning={true}
                data-fallback-href={constants.appLinks.fallbackLink}
              >
                <span>Download app</span>
                <IOSIconSVG
                  className="h-6 w-6 shrink-0 basis-6 fill-white"
                  width={25}
                  height={24}
                />
              </a>
            </div>
            <div className="device-show os-android mb-2">
              <a
                className="btn btn-azure btn-with-icon"
                href={constants.appLinks.baseLink}
                suppressHydrationWarning={true}
                data-fallback-href={constants.appLinks.fallbackLink}
              >
                <span>Download app</span>
                <PlayStoreSVG
                  className="h-6 w-6 shrink-0 basis-6 fill-white stroke-azure-100"
                  width={24}
                  height={26}
                />
              </a>
            </div>
          </>
        }
        imgUrl={awsImage("mobile-trading_hero-img.png")}
        bgImgUrl={awsImage("mobile-trading_hero-bg.jpg")}
        mobileImgUrl={awsImage("mobile-trading_hero-mob.png")}
        fscsFootnote={"1"}
        overrideCTA={<></>}
      />

      {/* Total control */}
      <TotalControl ref={pageItems.whyCMC.ref} whyTradeData={whyTradeData} />

      {/* Tools built */}
      <ToolsBuiltV2
        ref={pageItems.tools.ref}
        title={"Tools built to enhance your analysis"}
        text="We're constantly developing our mobile trading and analysis tools to give you the best possible chance in the markets."
        tools={[
          {
            name: "Mobile-optimised charts",
            description: (
              <>
                Get access to over 25 technical indicators, 15 drawing tools and
                even place, edit and close trades directly from charts on our
                feature-rich mobile trading app.
              </>
            ),
            image: {
              src: awsImage("tools-built_mobile-optimised-charts-mob.png"),
              width: 241,
              height: 523,
              className: "max-h-[523px]",
            },
          },
          {
            name: "Customisable dashboard",
            description: (
              <>
                Access the information you need straight away with your own
                customised home screen. Simply resize, remove or reposition the
                different tiles to tailor a layout that suits you best.
              </>
            ),
            image: {
              src: awsImage("tools-built_customisable-dashboard-mob.png"),
              width: 241,
              height: 523,
              className: "max-h-[523px]",
            },
          },
          {
            name: "Client sentiment tracker",
            description: (
              <>
                See how your peers are moving on your favourite markets. Our
                sentiment tracker shows the percentage of clients who have gone
                long and short, across both all and &apos;top&apos; clients.
              </>
            ),
            link: "/en-gb/platform-guides/client-sentiment-indicator",
            image: {
              src: awsImage("tools-built_client-sentiment-tracker-mob.png"),
              width: 241,
              height: 523,
              className: "max-h-[523px]",
            },
          },
          {
            name: "Topical watchlists",
            description: (
              <>
                View trending instruments and those showing significant
                movement, with our popular products, hot products, price movers
                and mentions watchlists, plus biggest risers and fallers.
              </>
            ),
            image: {
              src: awsImage("tools-built_topical-watchlists-mob.png"),
              width: 241,
              height: 523,
              className: "max-h-[523px]",
            },
          },
        ]}
      />

      {/* Exclusive access */}
      <ExclusiveAccess />

      {/* Account Types */}
      <AccountTypes3Col
        ref={pageItems.accountTypes.ref}
        title="Compare our account types"
        enableComparisonBtn={true}
        accountTypeLeft={<AccountType type={"sb"} footnotes={["3"]} />}
        accountTypeMiddle={<AccountType type={"cfd"} footnotes={["3"]} />}
        accountTypeRight={<AccountType type={"fx"} footnotes={["4", "3"]} />}
      />

      {/* Trustpilot slider */}
      <TrustpilotSliderB
        titleOverride="What other traders are saying about us"
        footnotes={["5"]}
      />

      {/* Platform Types */}
      <PlatformTypes2Col
        title="Explore other platforms"
        platformLeft={
          <PlatformWeb
            titleOverride="Web trading platform"
            descriptionOverride={
              <>
                We&apos;ve invested over £100m into our award-winning trading
                platform<sup>2</sup>, creating powerful, pioneering technology
                that suits all styles of trading.
              </>
            }
            footnotes={["2"]}
          />
        }
        platformRight={<PlatformMT4 />}
      />

      {/* FAQ */}
      <FAQ ref={pageItems.faqs.ref} faqListCol1={faqQuestions} />

      {/* Ready to get started */}
      <ReadyToGetStarted
        platformImg={awsImage(
          "mobile-trading-app_ready-to-find-your-flow-img.png"
        )}
        platformClassNames="w-full md:max-h-[500px] 2xl:max-h-[600px]"
        mobilePlatformImg={awsImage(
          "mobile-trading-app_ready-to-find-your-flow-img.png"
        )}
        content="Try a demo account with £10,000 of virtual funds. You can then open a live account anytime within the platform"
        ctaBtns={
          <>
            <div className="flex flex-col gap-2 lg:flex-row lg:justify-center">
              <OnboardingButton
                className="mx-auto"
                variant="azure"
                params="jid=gb3&amp;iaid=null&amp;lsrc=1"
                account="demo"
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
            FSCS is an independent body that offers protection to customers of
            financial services firms that have failed. The compensation amount
            may be up to £85,000 per eligible person, per firm. Eligibility
            conditions apply. Please contact the FSCS for more information.
          </>,
          <>
            Awarded No.1 Web-Based Platform, ForexBrokers.com Awards 2023; Best
            Mobile Trading Platform, ADVFN International Financial Awards 2022;
            Best In-House Analysts, Professional Trader Awards 2022; Best Spread
            Betting Provider, The City of London Wealth Management Awards 2021;
            Best Phone Customer Service & Best Email Customer Service, based on
            highest user satisfaction among spread betters, CFD and FX traders,
            Investment Trends 2020 UK Leverage Trading Report.
          </>,
          <>
            Tax treatment depends on individual circumstances and can change or
            may differ in a jurisdiction other than the UK.
          </>,
          <>Fixed commission at $2.5 per $100,000 notional value traded.</>,
          <>
            1.388 million unique user logins for the CMC Markets invest and CFD
            platforms globally, as at August 2023.
          </>,
        ]}
      />
    </>
  );
};

export default MobileTradingApp;
