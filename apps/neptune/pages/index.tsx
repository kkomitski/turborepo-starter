/* eslint-disable @next/next/no-html-link-for-pages */
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import AccountTypes3Col from "@/components/modules/Common/AccountTypes3Col";
import Alpha from "@/components/modules/Common/Alpha";
import InstrumentsTableHeader from "@/components/modules/Common/Basic/InstrumentsTableHeader";
import OneColumn from "@/components/modules/Common/Basic/OneColumn";
import Footnotes from "@/components/modules/Common/Footnotes";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import PlatformSlider from "@/components/modules/Pages/home/PlatformSlider";
import VideoCarousel from "@/components/modules/Pages/home/VideoCarousel";
import RightArrowSVG from "@/components/svg/RightArrowSVG";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import Head from "next/head";
import Link from "next/link";
import AlphaHero from "@/components/modules/Pages/home/AlphaHero";
import constants from "@/helpers/constants";

export default function Home() {
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

  return (
    <>
      <Head>
        <title>
          CFDs, Spread Betting &amp; Forex Trading | Online Trading | CMC
          Markets
        </title>
        <meta
          name="description"
          content="Spread bet and trade CFDs with CMC Markets, a leading global provider with 30 years' experience. Trade on thousands of financial instruments, across FX, indices, commodities, shares, ETFs &amp; treasuries."
        />
      </Head>

      {/* Hero */}
      <AlphaHero />

      {/* Account Types */}
      <AccountTypes3Col
        title="Account types for every trader"
        text={
          <p className="text-xl xl:max-w-md">
            Tight spreads on {constants.DIDS.INSTRUMENT_TOTAL_COUNT}{" "}
            instruments, volume-based discounts, no hidden fees.
          </p>
        }
        accountTypeLeft={
          <AccountType
            type={"sb"}
            descriptionOverride={
              <>
                A tax-efficient<sup>3</sup> way of speculating on the price
                movement of global financial instruments. Available to UK and
                Ireland residents only.
              </>
            }
            enableBulletPoints={false}
            closingLine={{ enabled: true, type: "spreadDescription" }}
            footnotes={["3"]}
          />
        }
        accountTypeMiddle={
          <AccountType
            type={"cfd"}
            descriptionOverride={
              <>
                Trade on the price movement of underlying financial assets, with
                no stamp duty on profits.<sup>3</sup>
              </>
            }
            enableBulletPoints={false}
            closingLine={{ enabled: true, type: "spreadDescription" }}
            footnotes={["3"]}
          />
        }
        accountTypeRight={
          <AccountType
            type={"fx"}
            descriptionOverride={
              <>
                Commission-based forex trading, designed for CFD traders who
                want to trade on pure price action.
              </>
            }
            enableBulletPoints={false}
            closingLine={{ enabled: true, type: "spreadDescription" }}
            footnotes={["3", "4"]}
          />
        }
      />

      {/* Alpha Module */}
      <Alpha footnotes={["4", "5"]} />

      {/* Instruments Header & Table */}
      <InstrumentsTableHeader
        title={<span className="mb-6 block">12,000 global markets</span>}
        text={
          <p className="max-w-sm text-xl">
            Spread bet or trade CFDs on{" "}
            <Link href="/markets-indices">indices</Link>,{" "}
            <Link href="/forex-trading">forex</Link>,{" "}
            <Link href="/markets-commodity-trading">commodities</Link>,{" "}
            <Link href="/markets-shares">shares</Link>,{" "}
            <Link href="/etf-trading">ETFs</Link>,{" "}
            <Link href="/markets-treasuries">
              interest rates and treasury bonds
            </Link>
            , plus our exclusive{" "}
            <Link href="/share-baskets-trading">share baskets</Link>,{" "}
            <a href="/en-gb/forex-trading/forex-index">forex indices</a> and{" "}
            <a href="/en-gb/markets-commodity-trading/commodity-indices">
              commodity indices
            </a>
            .
          </p>
        }
        contentRight={
          <div className="flex h-full items-end pt-10 md:justify-end">
            <Link
              href="/markets"
              className=" btn btn-primary-outline btn-with-icon mt-auto"
            >
              <span>Discover markets</span>
              <RightArrowSVG />
            </Link>
          </div>
        }
      />

      {/* Instruments Table */}
      <OneColumn>
        <InstrumentsTable
          columns={instrumentMapping.columns}
          instrumentMappings={instrumentMapping.instruments}
        />
        <p className="pt-10">
          Pricing is indicative. Past performance is not a reliable indicator of
          future results.
        </p>
      </OneColumn>

      {/* Platform images slider */}
      <PlatformSlider />

      {/* Podcast video carousel */}
      <VideoCarousel />

      {/* Trustpilot Slider */}
      <TrustpilotSliderB
        titleOverride={
          <>
            {constants.DIDS.YEARS_ACTIVE} years of industry experience. <br /> 1
            million+ traders and investors globally
            <sup>6</sup>
          </>
        }
        textOverride=" "
        footnotes={["6"]}
      />

      {/* Ready to get started */}
      <ReadyToGetStarted />

      {/* Footnotes */}
      <Footnotes
        footnotesList={[
          <>
            Awarded No.1 Web Platform, No.1 Most Currency Pairs, &amp; No.1
            Podcast Series, ForexBrokers.com Awards 2023; No.1 Platform
            Technology, ForexBrokers.com Awards 2022; Best CFD Provider, Online
            Money Awards 2022; Best Mobile Trading Platform, ADVFN International
            Financial Awards 2022; Best In-House Analysts, Professional Trader
            Awards 2022.
          </>,
          <>
            FSCS is an independent body that offers protection to customers of
            financial services firms that have failed. The compensation amount
            may be up to £85,000 per eligible person, per firm.
          </>,
          <>
            Tax treatment depends on individual circumstances and can change or
            may differ in a jurisdiction other than the UK.
          </>,
          <>
            Max discount in tier. Discounts are based on our tiered-volume
            discount scheme and are variable per product. View our{" "}
            <a href="/en-gb/price-plus">Price+</a> page for more details.
          </>,
          <>
            <Link
              href="https://assets.cmcmarkets.com/pdfs/interest_scheme_terms_and_conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interest scheme T&amp;Cs
            </Link>
            .
          </>,
          <>
            1.388 million unique user logins for the CMC Markets invest and CFD
            platforms globally, as at August 2023.
          </>,
        ]}
      />
    </>
  );
}
