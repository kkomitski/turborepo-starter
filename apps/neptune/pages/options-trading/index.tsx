/* eslint-disable @next/next/no-html-link-for-pages */
import Button from "@/components/elements/Button";
import OnboardingButton from "@/components/elements/OnboardingButton";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import Footnotes from "@/components/modules/Common/Footnotes";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import RelatedPages, {
  RelatedPageObject,
} from "@/components/modules/Common/RelatedPages";
import { awsImage } from "@/helpers/constants";
import { ScrollSpyItem } from "@/helpers/types/general";
import constants from "@/helpers/constants";
import Image from "next/image";
import React, { useRef } from "react";
import Head from "next/head";
import HeroAccoladesSectionA from "@/components/modules/Common/Hero/Common/HeroAccoladesSectionA";
import Lines from "@/components/global/Misc/Lines";
import Link from "next/link";

const faqQuestions: FAQColumn = {
  title: "Options trading",
  faqList: [
    {
      question: "How do I become an options trader?",
      answer: (
        <ul className="list-decimal pl-4 text-base">
          <li>Understand how options work</li>
          <li>Research and choose an options trading strategy</li>
          <li>Create a CFD account</li>
          <li>
            Pass our suitability test (unless you’re a professional client)
          </li>
          <li>Make your first trade</li>
        </ul>
      ),
    },
    {
      question:
        "Can I trade options in my existing CMC Markets account, or do I need a separate options trading account?",
      answer: (
        <p className="text-base">
          You don’t need a separate account. If you’re a retail trader, you’ll
          need to pass our suitability test before you can trade options using
          your existing CFD account. If you’re a professional client, you can
          trade options using your existing CFD account without needing to pass
          the suitability test.
        </p>
      ),
    },
    {
      question:
        "Are there any fees or commissions associated with options trading?",
      answer: (
        <p className="text-base">
          As a CMC Markets customer, you won’t pay any commission, holding fees
          or financing fees when you trade options with us. The only costs
          you’ll pay are the spread and, if the instrument you’re trading is
          priced in a currency other than your home currency, a currency
          conversion fee. We charge 0.5% of the realised profit or loss to
          convert foreign currencies into your home currency.
        </p>
      ),
    },
    {
      question: "How much money do I need to open an options trading account?",
      answer: (
        <p className="text-base">
          There is no minimum amount needed to open an options account with us.
        </p>
      ),
    },
    {
      question:
        "What resources or educational materials are available to help me learn more about options trading?",
      answer: (
        <>
          <p className="text-base">
            On our website you’ll find a wide range of guides, ebooks and
            educational resources to help you navigate your options trading
            journey. To learn more about trading options, you may find the
            following resources useful:
          </p>
          <ul className="text-base">
            <li>
              <Link href="/options-trading/what-is-options-trading">
                What is options trading?
              </Link>
            </li>
            <li>
              <Link href="/options-trading/trading-options-on-cmc-platform">
                Trading options with CMC
              </Link>
            </li>
            <li>
              <Link href="/options-trading/options-volatility">
                Options volatility
              </Link>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "How are option trades settled?",
      answer: (
        <p className="text-base">
          Option trades on our platform are cash-settled. Our option contracts
          do not entitle you to any rights in relation to the underlying asset,
          and exercise of an option does not result in the acquisition or
          disposal of an instrument. Instead, an option contract which has
          reached its expiry date will be closed and cash settled, with an
          amount becoming payable by us to you (if the market moved in your
          favour) or by you to us (if the market moved against you).
        </p>
      ),
    },
    {
      question:
        "Can I trade options on all types of securities (eg stocks, ETFs, indices)?",
      answer: (
        <p className="text-base">
          At first, you’ll be able to trade options on a range of stock indices,
          including the S&P 500, Nasdaq 100, FTSE 100, and more. We plan to add
          more underlying assets later.
        </p>
      ),
    },
  ],
};

const relatedPages: Array<RelatedPageObject> = [
  {
    title: "Trading options",
    description:
      "Learn how to trade options on our platform, and see how the powerful technology that drives our platform helps traders find their flow.",
    url: "/options-trading/trading-options-on-cmc-platform",
    thumbnail: awsImage("options-trading.png"),
  },
  {
    title: "Options volatility",
    description:
      "Find out how market volatility affects options prices and discover strategies to optimise your trading in turbulent times.",
    url: "/options-trading/options-volatility",
    thumbnail: awsImage("options-volatility.png"),
  },
  {
    title: "Options Greeks",
    description:
      "Explore how traders use a group of financial metrics, known as Greeks, to measure the factors that influence the price of an options contract.",
    url: "/options-trading/understanding-options-greeks",
    thumbnail: awsImage("options-greeks.png"),
  },
];

const OptionsTrading = () => {
  const pageItems: ScrollSpyItem = {
    hero: {
      title: "Overview",
      ref: useRef<HTMLElement | null>(null),
    },
    whatAreOptions: {
      title: "What are options?",
      ref: useRef<HTMLElement | null>(null),
    },
    whyTradeOptionsWithUs: {
      title: "Why trade options with us?",
      ref: useRef<HTMLElement | null>(null),
    },
    discoverTradingPlatform: {
      title: "Discover trading platform",
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
        <title>Options Trading | CMC Markets</title>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      <section
        className="Module menu-section relative scroll-mt-40"
        data-menu-section-name="Overview"
        ref={pageItems.hero.ref}
      >
        <div className="pointer-events-none absolute left-0 top-6 z-10 flex w-full justify-end overflow-x-hidden lg:-right-0 lg:top-1/2 lg:-translate-y-1/2">
          <Image
            width={0}
            height={0}
            src={awsImage("options-static-3d.png")}
            sizes="100vw"
            alt="Static icon"
            className="hidden h-full w-full scale-y-[-1] lg:block lg:max-w-[630px] xl:max-w-3xl 2xl:max-w-[960px]"
          />
          {/* <img
            className="z-10 hidden lg:block lg:max-w-[630px] xl:max-w-3xl 2xl:max-w-[960px]"
            src={awsImage("options-static-3d.png")}
            // src="https://assets.cmcmarkets.com/neptune/images/options-trading/options-hero-img.png"
            alt=""
          /> */}
        </div>
        <img
          className="absolute left-0 top-0 hidden h-full w-full object-cover lg:block"
          // src="https://assets.cmcmarkets.com/neptune/images/options-trading/options-hero-bg.png"
          src={awsImage("options-hero-bg-v3.png")}
          alt=""
        />
        <div className="main-xl-container relative">
          <div className="grid lg:grid-cols-2">
            <div className="-ml-6">
              <div
                className="headline-xl mb-6 border-l-8 border-l-azure-100 pl-6 font-light leading-none lg:pr-10"
                data-gramm="false"
              >
                <div className="flex">
                  <img
                    className="mb-2 h-[72px] w-[72px] rounded-lg shadow-lg"
                    data-responsive="false"
                    src={awsImage("options-animated-icon.gif")}
                    alt=""
                  />
                  <p className="mt-auto pb-0 pl-4 text-sm">COMING SOON</p>
                </div>
                <h1 className="block">Options trading</h1>
              </div>
              <div className="mb-10 pl-9 lg:mb-20 lg:max-w-lg">
                <p className="text-xl">
                  Trade options with{" "}
                  <span className="font-semibold">zero commission</span>
                  <sup>1</sup> on our award-winning online trading platform.{" "}
                  <sup>2</sup>
                </p>
                <p className="text-xl">
                  Speculate on a range of assets, backed by the best technology
                  in the business, industry-leading charting and 24/5 customer
                  support.
                </p>
              </div>
              <div className="mb-6 flex flex-col gap-y-2 pl-9">
                <a
                  className="btn btn-lg btn-azure js-modal font-semibold"
                  data-iframe-params="?jid=gb1&iaid=null&lsrc=1"
                  data-url="/en-gb/onboarding"
                  data-function="live"
                  data-label="Create Account"
                  href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb1&iaid=null&lsrc=1"
                >
                  Create account
                </a>
                <a
                  className="js-modal btn btn-lg btn-primary-outline"
                  data-iframe-params="?jid=gb3&iaid=null&lsrc=1"
                  data-label="Create Account"
                  href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb3&iaid=null&lsrc=1"
                  data-url="/en-gb/onboarding"
                  data-function="demo"
                >
                  Open demo account
                </a>
              </div>
              <div className="pl-9">
                <div
                  className="trustpilot-widget -ml-7"
                  data-locale="en-GB"
                  data-template-id="5419b637fa0340045cd0c936"
                  data-businessunit-id="58244f650000ff0005974e81"
                  data-style-height="20px"
                  data-style-width="250px"
                  data-style-align="left"
                  data-theme="light"
                  style={{ position: "relative" }}
                >
                  <iframe
                    title="Customer reviews powered by Trustpilot"
                    src="https://widget.trustpilot.com/trustboxes/5419b637fa0340045cd0c936/index.html?templateId=5419b637fa0340045cd0c936&businessunitId=58244f650000ff0005974e81#locale=en-GB&styleHeight=20px&styleWidth=250px&styleAlign=left&theme=dark"
                    style={{
                      position: "relative",
                      height: "20px",
                      width: "250px",
                      borderStyle: "none",
                      display: "block",
                      overflow: "hidden",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="h-full w-full object-cover lg:hidden"
          src={awsImage("options-hero-mob-v2.png")}
          alt="Static icon mob"
          height={0}
          width={0}
          sizes="100vw"
        />
      </section>

      <HeroAccoladesSectionA fscsFootnote={"3"} />

      <section
        className="Module menu-section relative scroll-mt-32"
        data-menu-section-name="What are options"
        ref={pageItems.whatAreOptions.ref}
      >
        <Image
          className="absolute right-0 top-0 hidden h-full w-auto lg:block"
          src={awsImage("options-trading_side-bg.jpg")}
          width={165}
          height={672}
          alt=""
        />
        <Lines left />
        <div className="main-xl-container relative">
          <div className="flex flex-col lg:flex-row lg:gap-x-16">
            <div className="mb-20 lg:mb-[120px] lg:w-5/12">
              <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
                What are options?
              </h2>
              <p className="text-xl">
                An option is a contract that gives the purchaser the right, but
                not the obligation, to buy or sell a financial product at an
                agreed price if the product moves beyond that price within a
                specific period of time.
              </p>
              <p className="mb-10 text-xl">
                <span className="font-semibold">
                  With us, you&apos;ll use a CFD account to trade OTC options
                  that are cash settled
                </span>
                . Initially, you&apos;ll be able to trade on a selection of US
                and European stock indices, with more assets to be added later.
              </p>
              <Button
                className="mb-10"
                variant="primary-outline"
                icon="arrow"
                href="/options-trading/what-is-options-trading"
              >
                More on options
              </Button>
              <p>
                OTC = over the counter. Learn more about OTC financial products{" "}
                <a href="/en-gb/trading-guides/what-does-otc-mean">here</a>.
              </p>
            </div>
            <div className="flex lg:w-7/12 lg:items-start lg:justify-end">
              <div className="mx-auto grid gap-6 md:grid-cols-2 lg:mx-0 lg:mt-6">
                <Image
                  className="rounded-2xl shadow-lg"
                  width={300}
                  height={200}
                  src={awsImage("what-are-options-1-a.png")}
                  alt=""
                />
                <Image
                  className="rounded-2xl shadow-lg"
                  width={300}
                  height={200}
                  src={awsImage("what-are-options-2-a.png")}
                  alt=""
                />
                <Image
                  className="rounded-2xl shadow-lg"
                  width={300}
                  height={200}
                  src={awsImage("what-are-options-3-a.png")}
                  alt=""
                />
                <Image
                  className="rounded-2xl shadow-lg"
                  width={300}
                  height={200}
                  src={awsImage("what-are-options-4-a.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="Module menu-section relative scroll-mt-32 bg-navy-100 text-white"
        data-menu-section-name="Why trade options with us"
        ref={pageItems.whyTradeOptionsWithUs.ref}
      >
        <div className="main-xl-container relative lg:px-20">
          <h2 className="headline-lg mb-10 text-center text-white lg:mb-20">
            Why trade options with us?
          </h2>
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-navy-70 p-4 text-white lg:p-6">
              <Image
                className="mb-10 h-auto w-full rounded-lg"
                src={awsImage("why-trade-options-1-a.png")}
                width={580}
                height={330}
                alt=""
              />
              <h3 className="mb-2 text-2xl leading-snug lg:mb-4">
                Trade on market volatility
              </h3>
              <p className="mb-0">
                Speculate on price movements across major US and European
                indices: the S&P 500, Nasdaq 100, FTSE 100, DAX, CAC 40 and Euro
                Stoxx 50
              </p>
            </div>
            <div className="rounded-lg border border-navy-70 p-4 text-white lg:p-6">
              <Image
                className="mb-10 h-auto w-full rounded-lg"
                src={awsImage("why-trade-options-2-a.png")}
                width={580}
                height={330}
                alt=""
              />
              <h3 className="mb-2 text-2xl leading-snug lg:mb-4">
                Take control of position size
              </h3>
              <p className="mb-0">
                With our fractional options you can take a position size as
                small as a hundredth of an option (0.01 of a unit).
              </p>
            </div>
            <div className="rounded-lg border border-navy-70 p-4 text-white lg:p-6">
              <Image
                className="mb-10 h-auto w-full rounded-lg"
                src={awsImage("why-trade-options-3-a.png")}
                width={580}
                height={330}
                alt=""
              />
              <h3 className="mb-2 text-2xl leading-snug lg:mb-4">
                Enact your strategy
              </h3>
              <p className="mb-0">
                Take advantage of the flexibility that options offer, whether
                you favour daily or longer-term time horizons, yield enhancement
                strategies, trading non-directionally in flat markets, or a
                different approach.
              </p>
            </div>
            <div className="rounded-lg border border-navy-70 p-4 text-white lg:p-6">
              <Image
                className="mb-10 h-auto w-full rounded-lg"
                src={awsImage("why-trade-options-4-a.png")}
                width={580}
                height={330}
                alt=""
              />
              <h3 className="mb-2 text-2xl leading-snug lg:mb-4">
                Hedge market risk
              </h3>
              <p className="mb-0">
                Protect your downside and mitigate potential losses to an
                existing portfolio
              </p>
            </div>
          </div>
          <Button
            icon="arrow"
            className="mx-auto mb-10"
            href="/options-trading/benefits-of-options-trading"
            variant="primary-outline-dark"
          >
            Why trade options
          </Button>

          <p className="mx-auto max-w-4xl text-sm text-white-85">
            If you&apos;re a retail (non-professional) client when you enter
            into a long OTC options contract with us, you risk losing the entire
            value of the premium. When you enter into a short OTC options
            contract, your potential loss is unlimited – however, retail clients
            benefit from negative balance protection, which means any potential
            loss is limited to your invested capital. Learn more about the risks{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://assets.cmcmarkets.com/pdfs/UKNGCFDRiskWarningNotice-August2023.pdf"
            >
              here
            </a>
            .
          </p>
        </div>
      </section>

      <section className="Module relative bg-white-85">
        <div className="main-xl-container text-center">
          <h2 className="mb-8 text-[28px] sm:text-[32px]">
            {constants.DIDS.YEARS_ACTIVE}+ years of industry experience.
            <span className="sm:block">
              1 milion+ traders and investors globally.<sup>4</sup>
            </span>
          </h2>
          <div
            className="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="54ad5defc6454f065c28af8b"
            data-businessunit-id="58244f650000ff0005974e81"
            data-style-height="240px"
            data-style-width="100%"
            data-theme="light"
            data-stars="5"
            data-review-languages="en"
          >
            <a
              href="https://uk.trustpilot.com/review/www.cmcmarkets.com"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </section>

      <section
        className="Module menu-section relative scroll-mt-32 bg-white pb-[215px] lg:pb-[370px]"
        data-menu-section-name="Discover trading platform"
        ref={pageItems.discoverTradingPlatform.ref}
      >
        <div>
          <div className="main-xl-container pb-0">
            <h2 className="headline-lg mx-auto mb-20 max-w-lg text-center">
              Discover our powerful options trading platform
            </h2>
            <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
              <div className="rounded bg-white-95 p-3 shadow-lg lg:col-span-4">
                <svg
                  className="mb-2"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 20.8354V6.83545L8 28.8354H22L22 42.8354L40 20.8354L26 20.8354Z"
                    stroke="#101626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="mb-2 text-xl font-semibold">
                  Ultra-fast execution
                </p>
                <p>
                  Get fully automated, lightning-quick execution speeds of
                  0.0030 seconds. <sup>5</sup>
                </p>
              </div>
              <div className="rounded bg-white-95 p-3 shadow-lg lg:col-span-4">
                <svg
                  className="mb-2"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42 42.8354L30 30.8354M34 20.8354C34 28.5674 27.732 34.8354 20 34.8354C12.268 34.8354 6 28.5674 6 20.8354C6 13.1035 12.268 6.83545 20 6.83545C27.732 6.83545 34 13.1035 34 20.8354Z"
                    stroke="#101626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M24 15.9466C24 14.2283 22.5076 12.8354 20.6667 12.8354C18.8257 12.8354 17.3333 14.2283 17.3333 15.9466V23.7243C17.3333 25.4426 15.8409 26.8354 14 26.8354H24M14 20.6132H20.6667"
                    stroke="#101626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="mb-2 text-xl font-semibold">
                  Transparent pricing
                </p>
                <p>
                  See bid and ask prices, premiums, and more up front, helping
                  you to understand your costs before you place a trade.
                </p>
              </div>
              <div className="rounded bg-white-95 p-3 shadow-lg lg:col-span-4">
                <svg
                  className="mb-2"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 16.8354V32.8354M24 22.8354V32.8354M16 28.8354V32.8354M12 40.8354H36C38.2091 40.8354 40 39.0446 40 36.8354V12.8354C40 10.6263 38.2091 8.83545 36 8.83545H12C9.79086 8.83545 8 10.6263 8 12.8354V36.8354C8 39.0446 9.79086 40.8354 12 40.8354Z"
                    stroke="#101626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="mb-2 text-xl font-semibold">
                  Industry-leading charting
                </p>
                <p>
                  Gather and analyse data with 115+ indicators and drawing
                  tools.
                </p>
              </div>
              <div className="rounded bg-white-95 p-3 shadow-lg lg:col-span-3">
                <svg
                  className="mb-2"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6.83545V14.8354M6 10.8354H14M12 34.8354V42.8354M8 38.8354H16M26 6.83545L30.5714 20.5497L42 24.8354L30.5714 29.1212L26 42.8354L21.4286 29.1212L10 24.8354L21.4286 20.5497L26 6.83545Z"
                    stroke="#101626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="mb-2 text-xl font-semibold">Market insights</p>
                <p>
                  Understand trends with our pattern-recognition scanner, and
                  gauge market sentiment with our handy tools.
                </p>
              </div>
              <div className="rounded bg-white-95 p-3 shadow-lg lg:col-span-3">
                <svg
                  className="mb-2"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 40.8354H10C7.79086 40.8354 6 39.0446 6 36.8354L6 12.8354C6 10.6263 7.79086 8.83545 10 8.83545L30 8.83545C32.2091 8.83545 34 10.6263 34 12.8355V14.8355M38 40.8354C35.7909 40.8354 34 39.0446 34 36.8355L34 14.8355M38 40.8354C40.2091 40.8354 42 39.0446 42 36.8355V18.8355C42 16.6263 40.2091 14.8355 38 14.8355L34 14.8355M26 8.83545L18 8.83545M14 32.8355H26M14 16.8355H26V24.8355H14V16.8355Z"
                    stroke="#101626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="mb-2 text-xl font-semibold">
                  Trusted financial news and analysis
                </p>
                <p>
                  Stay informed with streaming Reuters news and our
                  analysts&apos; insights
                </p>
              </div>
              <div className="rounded bg-white-95 p-3 shadow-lg lg:col-span-3">
                <svg
                  className="mb-2"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 37.8354H24H25M16 42.8354H32C34.2091 42.8354 36 41.0446 36 38.8354V10.8354C36 8.62631 34.2091 6.83545 32 6.83545H16C13.7909 6.83545 12 8.62631 12 10.8354V38.8354C12 41.0446 13.7909 42.8354 16 42.8354Z"
                    stroke="#101626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="mb-2 text-xl font-semibold">On-the-go trading</p>
                <p>
                  Download our mobile app and get the functionality of our web
                  platform in your pocket, allowing you to open, close and
                  modify trades on the move.
                </p>
              </div>
              <div className="rounded bg-white-95 p-3 shadow-lg lg:col-span-3">
                <svg
                  className="mb-2"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 34.8355H40L37.1901 32.0256C36.4281 31.2636 36 30.23 36 29.1523V22.8355C36 17.6106 32.6608 13.1656 28 11.5183V10.8354C28 8.62631 26.2091 6.83545 24 6.83545C21.7909 6.83545 20 8.62631 20 10.8354V11.5183C15.3392 13.1656 12 17.6106 12 22.8355V29.1523C12 30.23 11.5719 31.2636 10.8099 32.0256L8 34.8355H18M30 34.8355V36.8354C30 40.1492 27.3137 42.8354 24 42.8354C20.6863 42.8354 18 40.1492 18 36.8354V34.8355M30 34.8355H18"
                    stroke="#101626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="mb-2 text-xl font-semibold">
                  Instant notifications
                </p>
                <p>
                  Use our platform to set up trading alerts via push
                  notification, text message or email.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                icon="arrow"
                href="/options-trading/trading-options-on-cmc-platform"
                variant="primary-outline"
              >
                Learn how to trade options with us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="Module menu-section relative -scroll-mt-8 bg-white-95 lg:-scroll-mt-36"
        data-menu-section-name="FAQs"
        ref={pageItems.faqs.ref}
      >
        <div className="lines-container">
          <div className="relative h-full w-full">
            <div className="lines">
              <div className="left"></div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="absolute left-0 right-0 top-[-200px] mx-auto my-20 h-auto w-full max-w-xl px-6 sm:top-[-220px] lg:left-0 lg:right-0 lg:top-[-258px] lg:my-0 lg:max-w-4xl lg:px-0"
            src={awsImage("options-trading_options-platform-v2.png")}
            width={833}
            height={503}
            alt=""
          />
        </div>
        {/* here */}
        <div className="h-[175px] lg:h-[265px]"></div>
        <FAQ faqListCol1={faqQuestions} />
        {/* here */}
      </section>

      <RelatedPages
        title={
          <span className="block max-w-sm leading-tight">
            Learn more about options
          </span>
        }
        pages={relatedPages}
      />

      <ReadyToGetStarted
        platformImg={awsImage("options-trading_bottom-img-v3.png")}
        mobilePlatformImg={awsImage("options-trading_bottom-img-v3.png")}
        mobileBgImg={awsImage("options-trading_bottom-bg-mob.jpg")}
        bgImg={awsImage("options-bottom-img-bg.png")}
        content={
          <span className="block text-center">
            <span className="mb-1 block">
              You can access OTC options inside our CFD account.
            </span>
            <br />
            <span className="mb-1 block">
              Create a live account or try a risk-free demo account and practise
              trading options with £10,000 of virtual funds.
            </span>
            <span className="block">
              All with the UK&apos;s No.1 web platform.<sup>2</sup>
            </span>
          </span>
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
                Create account
              </OnboardingButton>
              <OnboardingButton
                className="mx-auto md:mx-0"
                variant="primary-outline"
                account="demo"
                params="jid=gb3&amp;iaid=null&amp;lsrc=1"
              >
                Open demo account
              </OnboardingButton>
            </div>
          </>
        }
      />

      <Footnotes
        footnotesList={[
          <>
            You won’t pay any commission when you trade options with us. The
            only costs you&apos;ll incur are the spread (the difference between
            the bid price and the ask price) and, if the instrument you&apos;re
            trading is priced in a currency other than your home currency, a
            currency conversion fee, which is charged at 0.5% of your realised
            profit or loss.
          </>,
          <>{constants.DIDS.UK_PLATFORM_AWARDS_FOOTNOTE}</>,
          <>{constants.DIDS.FSCS_FOOTNOTE}</>,
          <>{constants.DIDS.GLOBAL_TOTAL_TRADERS_INVESTORS_FOOTNOTE}</>,
          <>{constants.DIDS.GLOBAL_CFD_EXECUTION_TIME}</>,
        ]}
      />
    </>
  );
};

export default OptionsTrading;
