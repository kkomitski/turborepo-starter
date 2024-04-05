/* eslint-disable @next/next/no-html-link-for-pages */
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import Alpha from "@/components/modules/Common/Alpha";
import OneColumn from "@/components/modules/Common/Basic/OneColumn";
import TwoColumns from "@/components/modules/Common/Basic/TwoColumns";
import FAQ, { FAQColumn } from "@/components/modules/Common/FAQ";
import Footnotes from "@/components/modules/Common/Footnotes";
import InstrumentHeroWide from "@/components/modules/Common/Hero/InstrumentHeroWide";
import { InstrumentData } from "@/components/modules/Common/InstrumentCards/InstrumentCardDeck";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import { WhyTradeObj } from "@/components/modules/Markets/WhyTrade/WhyTradeCard";
import HowWeBuildShareBaskets from "@/components/modules/Pages/share-baskets-trading/HowWeBuildShareBaskets";
import ShareBasketsChart from "@/components/modules/Pages/share-baskets-trading/ShareBasketsChart";
import ShareBasketsProducts from "@/components/modules/Pages/share-baskets-trading/ShareBasketsProducts";
import WhyTradeShareBaskets from "@/components/modules/Pages/share-baskets-trading/WhyTradeShareBaskets";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import constants, { awsImage } from "@/helpers/constants";
import { ScrollSpyItem } from "@/helpers/types/general";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";

const exploreThemesInstrumentMapping: InstrumentTableMapping = {
  columns: [
    {
      name: "Product",
      nameOverride: "Type",
    },
    {
      name: "Day",
      nameOverride: "Day",
    },
    {
      name: "Week",
      nameOverride: "Week",
    },
    {
      name: "Month",
      nameOverride: "Month",
    },
    {
      name: "Year",
      nameOverride: "Year",
    },
    {
      name: "Overview",
      nameOverride: "Info",
    },
  ],
  instruments: [
    {
      tabName: "Instruments",
      instruments: [
        "X-ALMEN",
        "X-ALMEQ",
        "X-ALMES",
        "X-ALMEY",
        "X-ALMFA",
        "X-ALMEO",
        "X-ALMEP",
        "X-ALMFB",
        "X-ALMEM",
        "X-ALMEV",
        "X-ALMEW",
        "X-ALMEX",
        "X-ALMEU",
        "X-ALMFC",
        "X-ALMER",
        "X-ALMEZ",
        "X-ALMET",
        "X-ALRRU",
        "X-ALRRT",
        "X-ALRRS",
        "X-ALRRW",
        "X-ALRRV",
      ],
    },
  ],
  instrumentTooltips: [
    {
      apiCode: "X-ALMEN",
      description:
        "The big tech companies are currently battling it out to incorporate the latest advances in AI into their businesses - especially considering that inserting the buzzword into corporate messaging is a sure-fire way to demonstrate a firm's future-proofing efforts. Take the various voice-powered digital assistants, such as Google's Assistant, Amazon's Alexa, Apple's Siri, and Microsoft's Cortana. There's even , the home robot that's received $72m in funding.",
    },
    {
      apiCode: "X-ALMEQ",
      description:
        "While US firms dominate the tech market, China is catching up quickly. In 2019, despite the mounting cloud of trade conflict and economic downturn, Chinese technology stocks still finished the year with astonishing gains. Among them, JD.com (+ 71.7%), Alibaba (+51.9) and NetEase (+ 31.5%), were among the top performers, far outperforming the global index. Tencent (+ 18.2%) also recorded double-digit gains.",
    },
    {
      apiCode: "X-ALMES",
      description:
        "It may still be a while before we see autonomous vehicles in series production. But if, when fully developed, the driverless car industry can help save the 1.25million lives lost each year in road accidents it would then be in line with cancer drugs, space travel or other innovations that have the potential to transform our society and the way we live together.",
    },
    {
      apiCode: "X-ALMFA",
      description:
        "Up until recently, Netflix had the ruled streaming media. However, at the end of 2019 things started to heat up as both Apple and Disney launched their own streaming service. Early signs show that rather than a winner takes all, there appears to be room for multiple providers in this growing market where content is king.",
    },
    {
      apiCode: "X-ALMEO",
      description:
        "The mega tech companies such as Apple, Microsoft, Amazon and Google continue to drive innovation and adoption worldwide. Global demand has driven huge growth in their bottom line and share prices. As the world becomes more interconnected, there seems to be no stopping the expansion prospects of these companies.",
    },
    {
      apiCode: "X-ALMFB",
      description:
        "It's almost 12 years since some of the most established - and trusted - banks helped send the global economy into a financial crisis. Now, technical innovators such as Monzo and Revolut are helping disrupt a sector overdue change. The incumbants are adapting quickly and after a turbulent start to 2020, it's all to play for.",
    },
    {
      apiCode: "X-ALMEX",
      description:
        "Environmental awareness has gone mainstream, which is helping to transform the way the world stores, distributes and generates power. Major energy and utility companies are now increasingly going green, driving up the demand for wind farms, solar parks, hydropower plants and renewable tech.",
    },
    {
      apiCode: "X-ALMFC",
      description:
        "In 2019, shares in the five biggest US banks (JP Morgan Chase, Citigroup, Wells Fargo, Goldman Sachs and Bank of America) increased by an average of around 40%, while the S&P 500 was up by nearly 30%. US banks' return on capital stood at 18% in 2019, supported by a strong return on assets of 1.5%, according to Deloitte's 2020 banking outlook.",
    },
    {
      apiCode: "X-ALMEZ",
      description:
        "Software as a service is being touted as the new FAANG, the new growth engine underpinning the markets. These technology companies, such as Adobe and Docusign, offer services to customers over the cloud, enabling them to scale their services quickly with demand.",
    },
  ],
};

const instrumentMapping: InstrumentTableMapping = {
  columns: [
    { name: "Product" },
    { name: "Min Spread" },
    { name: "Holding Cost Buy AO", nameOverride: "Holding Cost (Buy)" },
    { name: "Holding Cost Sell AO", nameOverride: "Holding Cost (Sell)" },
    { name: "Margin" },
    { name: "Commission" },
  ],
  instruments: [
    {
      tabName: "Most popular",
      instruments: ["X-ALMEO", "X-ALMFA", "X-ALMEV", "X-ALMFB", "X-ALMEN"],
    },
    {
      tabName: "Lifestyle",
      instruments: ["X-ALMFA", "X-ALRRV", "X-ALMES", "X-ALMEY", "X-ALMEP"],
    },
    {
      tabName: "Tech",
      instruments: ["X-ALMEO", "X-ALMEQ", "X-ALRRW", "X-ALMEM", "X-ALMEX"],
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
    title: "Your favourites in one place",
    text: "Our analysts have already done the hard work to identify current and emerging trends driving the economy, and those companies best placed to reap potential rewards.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_favourites-48.svg"),
    },
  },
  {
    title: "Lower risk",
    text: "Through diversification, share baskets give you broad exposure to a theme, avoiding the risk of putting all of your eggs in one basket when trading on a single company.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_shield-check-48.svg"),
    },
  },
  {
    title: "One position",
    text: "Share baskets allow you to gain exposure to a theme without opening and maintaining multiple positions, saving you time and money.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_pound-magnifying-glass-48.svg"),
    },
  },
  {
    title: "Leveraged trading",
    text: "We offer up to 5:1 leverage on share baskets. This means for every £1, you'll have £5 of exposure.",
    icon: {
      enabled: true,
      width: 48,
      height: 48,
      src: awsImage("icon_precision-pricing-48.svg"),
    },
  },
];

const faqQuestions: FAQColumn = {
  title: "New to share baskets trading?",
  faqList: [
    {
      question: "What are the costs involved in share basket trading?",
      answer: (
        <>
          There are a number of costs to consider when trading on share baskets,
          including spread costs, holding costs (for trades held overnight) and
          guaranteed stop-loss order charges (if you use this risk-management
          tool). {""}
          <Link href="/trading-costs">Learn more about our costs</Link>
        </>
      ),
    },
    {
      question: "How does spread betting/trading CFDs on share baskets work?",
      answer: (
        <>
          When you {""}
          <Link href="/spread-betting">spread bet</Link> {""}
          or {""}
          <Link href="/cfds">trade CFDs</Link> {""}
          on share baskets through our platform, you don&apos;t buy or sell the
          underlying shares. Instead, you&apos;re taking a position on whether
          you think the instrument&apos;s price will go up or down. With spread
          betting, you buy or sell an amount per point movement for the
          instrument you&apos;re trading, such as £5 per point. This is known as
          your stake. With CFD trading, you buy or sell a number of units for a
          particular instrument. For every point or unit that the price moves in
          your favour, you gain multiples of your stake, and vice versa.
        </>
      ),
    },
    {
      question: "What is the tiered weight methodology for share baskets?",
      answer: (
        <>
          You can find all the information about how our share baskets are
          created in our share baskets methodology.{" "}
          <Link
            target="_blank"
            href="https://assets.cmcmarkets.com/pdfs/cmc_tiered_weight_share_basket_methodology_mar20.pdf"
          >
            View our share baskets methodology
          </Link>
        </>
      ),
    },
    {
      question: "Do share baskets attract dividends?",
      answer: (
        <>
          <p>
            Dividends are cash payments made to shareholders out of a
            corporation&apos;s profits. Typically, corporations will make
            regular periodic dividend payments throughout the financial year
            (quarterly, semi-annually or annually) and will therefore be classed
            as ordinary cash dividends.
          </p>
          <p>
            {" "}
            When a stock goes ex-dividend, the value of that stock effectively
            falls by the dividend amount. This means if you hold a spread bet or
            CFD position on a company which announces a dividend, your account
            will be credited or debited on the day the stock goes ex-dividend.{" "}
          </p>
          <p>
            If you were long (holding a buy position), you would have been
            disadvantaged by the drop in the market caused by the pay out of the
            dividend, so we would credit your account with the dividend amount,
            less any applicable dividend withholding taxes. If you were short,
            you would benefit from the drop in the price, so the equivalent
            amount would be deducted. So, overall, you don&apos;t lose or gain
            anything from the adjustment. There are no withholding taxes on
            short positions. The dividend will appear as a &apos;price
            adjustment&apos; in your account history within the platform.{" "}
          </p>
          <p>
            {" "}
            For share baskets, any ordinary cash dividend events will be treated
            as a price adjustment within the share basket. On ex-date the share
            price of the share basket component will decrease by the approximate
            value of the gross ordinary cash dividend. This will in turn result
            in an equivalent adjustment to the overall share basket price based
            on the weighted average of the share basket component. A cash
            adjustment will then be made to the holder of the share basket for
            the net ordinary cash dividend value.
          </p>
          <p>
            Special cash dividends are dividends that are paid outside of the
            regular periodic dividend payments of a corporation. These are
            typically one-off payments that are derived from excess funds within
            a corporation, such as profit or the sale of assets. Any special
            cash dividend events will be treated as a price adjustment within
            the share basket. On ex-date, the share price of the share basket
            component will decrease by the approximate value of the gross
            special cash dividend value. This will in turn result in an
            equivalent adjustment to the share basket price based on the
            weighted average of the share basket component. A cash adjustment
            will then be made to the holder of the share basket for the net
            special cash dividend value.{" "}
          </p>{" "}
          <p>
            Dividend reinvestment plans (DRIPs) and SCRIP dividend schemes
            (SCRIPs) are optional dividend events that allow shareholders to
            choose between receiving their ordinary cash dividends in the form
            of a cash dividend payment or alternatively re-investing the cash
            dividend back into shares in the corporation from which the dividend
            originated, with the shareholders then receiving new shares in place
            of the cash dividend payment. Any optional dividend event will be
            treated as an ordinary cash dividend event and will therefore result
            in a price adjustment within the share basket. On ex-date the share
            price of the share basket component will decrease by the approximate
            value of the gross dividend value. This will in turn result in an
            equivalent adjustment to the share basket price based on the
            weighted average of the share basket component. A cash adjustment
            will then be made to the holder of the share basket for the net
            dividend value.
          </p>
          <p>
            <Link
              href="https://assets.cmcmarkets.com/pdfs/cmc_tiered_weight_share_basket_methodology_mar20.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View our share baskets methodology
            </Link>
          </p>
        </>
      ),
    },
    {
      question: "What are the risks of share basket trading?",
      answer: (
        <>
          <p>
            <strong>You can lose all of your capital </strong> –
            <a href="/trading-guides/what-is-leverage-trading">
              {" "}
              leveraged trading
            </a>{" "}
            trading means that both profits and losses are based on the full
            value of the position.
          </p>
          <p>
            <strong>Risk of account close-out </strong>– market volatility and
            rapid changes in price can cause the balance of your account to
            change quickly, and if you do not have sufficient funds in your
            account to cover these situations, there is a risk that your
            positions will be automatically closed by the platform.
          </p>
          <p>
            <strong>Market volatility and gapping </strong>– financial markets
            may fluctuate rapidly, which can result in market gapping. This may
            mean that stop-loss orders are executed at unfavourable prices.
          </p>
          <p>
            <strong>Sector risk </strong>– it&apos;s possible that the shares of
            many companies in one sector will fall in price at the same time
            because of an event that impacts the entire industry.
          </p>
        </>
      ),
    },
  ],
};

const ShareBasketsTrading = (props: any) => {
  const pageItems: ScrollSpyItem = {
    hero: {
      title: "Overview",
      ref: useRef<HTMLElement | null>(null),
    },
    whyTrade: {
      title: "Why trade share baskets?",
      ref: useRef<HTMLElement | null>(null),
    },
    products: {
      title: "Share basket products",
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
          Share Baskets Trading | Spread Betting &amp; CFDs | CMC Markets
        </title>
        <meta
          name="description"
          content="Spread bet or trade CFDs on our exclusive range of topical share baskets. They offer exposure to a larger slice of an industry versus trading on a single share."
        ></meta>
      </Head>

      <ScrollSpyAnchors pageItemsObj={pageItems} />

      <InstrumentHeroWide
        ref={pageItems.hero.ref}
        title={
          <div className="flex flex-wrap gap-x-2.5">
            <div className="inline-flex">Share</div>
            <div className="inline-flex">
              <span>baskets</span>
              <svg
                className="vertical-super inline"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.598 33.5015H24.098V33.0015V23.5995H33.5H34V23.0995V1.00146V0.501465H33.5H11.402H10.902V1.00146V10.4035H1.5H1V10.9035V33.0015V33.5015H1.5H23.598ZM10.869 23.0995V23.5995H11.369H20.771V30.1745H4.29397V13.6974H10.869V23.0995ZM23.598 20.2725L23.5963 20.2725L14.2125 20.3038V3.81193H30.673V20.2725L23.598 20.2725Z"
                  fill="#101626"
                  stroke="#101626"
                ></path>
              </svg>
            </div>
          </div>
        }
        content={
          <ul className="list-disc pl-4">
            <li className="text-xl">
              Ride the next big trend with share baskets, our exclusive CFD
              portfolios built to track a theme
            </li>
            <li className="text-xl">
              Trade the growth potential from emerging industries, such as
              autonomous driving and cybersecurity
            </li>
            <li className="text-xl">
              Save from 5% to {constants.DIDS.UK_PRICE_PLUS_MAX_SPREAD_DISCOUNT}
              <sup>1</sup> on spreads with <a href="/en-gb/alpha">CMC Alpha</a>
            </li>
          </ul>
        }
        animatedIcon={awsImage("share-baskets-animated-icon.gif")}
        imgUrl={awsImage("common_generic-platform-hero-img.png")}
        bgImgUrl={awsImage("share-baskets-trading_hero-bg2.png")}
        mobileImgUrl={awsImage("share-baskets_hero-mob-160224.png")}
        fscsFootnote={"2"}
        enableLine={false}
      />

      <TwoColumns
        bgColor="bg-white"
        sideBgImg={awsImage("share-baskets-trading_side-bg.png")}
        contentLeft={
          <>
            <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
              What are <span className="2xl:block">share baskets?</span>
            </h2>
            <p className="text-xl">
              {" "}
              Share baskets are mini portfolios of stocks built around popular
              themes and growing trends, with constituent stocks handpicked by
              our traders and analysts to give you maximum exposure to those
              themes from a single position.
            </p>
          </>
        }
        enableRightLine={false}
        contentRight={
          <div className="relative z-40 pt-20 lg:pt-0">
            <ShareBasketsChart />
          </div>
        }
      />

      {/* Dev note: The last data point of this module is hard coded into the module itself */}
      <WhyTradeShareBaskets
        ref={pageItems.whyTrade.ref}
        title={"Why trade share baskets with us?"}
        text={
          <>
            <p className="text-xl">
              Spread bet or trade CFDs on our exclusive share baskets – mini
              portfolios of stocks built around a specific theme.
            </p>
          </>
        }
        data={whyTradeData}
      />

      <ShareBasketsProducts ref={pageItems.products.ref} />

      <TrustpilotSliderB footnotes={["3"]} />

      <HowWeBuildShareBaskets />

      <TwoColumns
        contentLeft={
          <h2 className="headline-lg relative -ml-6 border-l-8 border-black pl-4">
            Explore our share <span className="2xl:block">basket themes</span>
          </h2>
        }
        enableRightLine={false}
        contentRight={
          <>
            <InstrumentsTable
              loadMoreEnabled={true}
              columns={exploreThemesInstrumentMapping.columns}
              instrumentMappings={exploreThemesInstrumentMapping.instruments}
              instrumentTooltips={
                exploreThemesInstrumentMapping.instrumentTooltips
              }
            />

            <p className="pt-10">
              Pricing is indicative. Past performance is not a reliable
              indicator of future results.
            </p>
          </>
        }
      />

      <OneColumn>
        <InstrumentsTable
          loadMoreEnabled={false}
          searchEnabled={true}
          searchPlaceHolderText="Search 30+ share baskets"
          searchType="share baskets"
          columns={instrumentMapping.columns}
          instrumentMappings={instrumentMapping.instruments}
        />
        <p className="pt-10">
          Pricing is indicative. Past performance is not a reliable indicator of
          future results.
        </p>
      </OneColumn>

      <Alpha footnotes={["1", "4"]} />

      <FAQ ref={pageItems.faqs.ref} faqListCol1={faqQuestions} />

      <ReadyToGetStarted
        bgImg={awsImage("share-baskets-trading_ready-to-find-your-flow-bg.png")}
        mobileBgImg={awsImage(
          "share-baskets-trading_ready-to-find-your-flow-bg-mob.png"
        )}
      />

      <Footnotes
        footnotesList={[
          <>
            Max discount in tier. Discounts are based on our tiered-volume
            discount scheme and are variable per product. View our{" "}
            <a href="/en-gb/price-plus">Price+</a> page for more details.
          </>,
          <>{constants.DIDS.FSCS_FOOTNOTE}</>,
          <>{constants.DIDS.GLOBAL_TOTAL_TRADERS_INVESTORS_FOOTNOTE}</>,

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

export default ShareBasketsTrading;
