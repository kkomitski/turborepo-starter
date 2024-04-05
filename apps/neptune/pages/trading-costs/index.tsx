import Lines from "@/components/global/Misc/Lines";
import ScrollSpyAnchors from "@/components/global/ScrollSpyAnchors";
import SectionContainer from "@/components/modules/Common/Basic/SectionContainer";
import Footnotes from "@/components/modules/Common/Footnotes";
import HeroAccoladesSectionA from "@/components/modules/Common/Hero/Common/HeroAccoladesSectionA";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import Hero from "@/components/modules/Pages/trading-costs/Hero";
import TradingCostsAdditionalSpread from "@/components/modules/Pages/trading-costs/TradingCostsAdditionalSpread";
import TradingCostsHoldingCosts from "@/components/modules/Pages/trading-costs/TradingCostsHoldingCosts";
import TradingCostsOtherCosts from "@/components/modules/Pages/trading-costs/TradingCostsOtherCosts";
import TradingCostsShareCommission from "@/components/modules/Pages/trading-costs/TradingCostsShareCommission";
import TradingCostsSpreads from "@/components/modules/Pages/trading-costs/TradingCostsSpreads";
import InstrumentsSearch from "@/components/widgets/InstrumentsSearch/InstrumentsSearch";
import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import { ScrollSpyItem } from "@/helpers/types/general";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";

// TODO: Fix scroll margins for sections. Probably remove space-y and add padding to each section
const TradingCosts = () => {
  const pageItems: ScrollSpyItem = {
    spreads: {
      title: "Spreads",
      ref: useRef<HTMLElement | null>(null),
      scrollMarginClasses: "scroll-mt-40 lg:scroll-mt-36",
    },
    shareCommissions: {
      title: "Share commission",
      ref: useRef<HTMLElement | null>(null),
      scrollMarginClasses: "scroll-mt-40 lg:scroll-mt-36",
    },
    holdingCosts: {
      title: "Holding costs",
      ref: useRef<HTMLElement | null>(null),
      scrollMarginClasses: "scroll-mt-40 lg:scroll-mt-36",
    },
    otherCosts: {
      title: "Other costs",
      ref: useRef<HTMLElement | null>(null),
      scrollMarginClasses: "scroll-mt-40 lg:scroll-mt-36",
    },
  };

  return (
    <>
      <Head>
        <title>
          Trading costs &amp; spreads | Spread betting and CFD | CMC Markets
        </title>
        <meta
          name="description"
          content="Learn about the costs involved with spread betting and CFDs. We provide detail into spreads, overnight fees and other costs to consider when trading."
        ></meta>
      </Head>

      <ScrollSpyAnchors
        options={{
          hideMobile: true,
        }}
        pageItemsObj={pageItems}
      />

      <Hero
        title="Our trading fees"
        topContent={
          <>
            Discover all the costs involved in{" "}
            <Link href="/spread-betting">spread betting</Link> and{" "}
            <Link href="/cfds">CFD trading</Link>, including spreads and
            overnight holding costs.
          </>
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

      <HeroAccoladesSectionA fscsFootnote="1" />

      <div className="main-xl-container scroll-mt- relative">
        <Lines left />

        <div>
          {/* Spreads */}
          <SectionContainer className="py-[4.5rem]" ref={pageItems.spreads.ref}>
            <TradingCostsSpreads />
          </SectionContainer>

          {/* Shares additional spread */}
          <SectionContainer className="py-[4.5rem]">
            <TradingCostsAdditionalSpread />
          </SectionContainer>

          {/* Share commission */}
          <SectionContainer
            className="py-[4.5rem]"
            ref={pageItems.shareCommissions.ref}
          >
            <TradingCostsShareCommission />
          </SectionContainer>

          {/* Overnight holding costs */}
          <SectionContainer
            className="py-[4.5rem]"
            ref={pageItems.holdingCosts.ref}
          >
            <TradingCostsHoldingCosts />
          </SectionContainer>

          {/* Other costs & considerations */}
          <SectionContainer
            className="py-[4.5rem]"
            ref={pageItems.otherCosts.ref}
          >
            <TradingCostsOtherCosts />
          </SectionContainer>
        </div>
      </div>

      <ReadyToGetStarted
        content={
          "Open a demo account with £10,000 of virtual funds or open a live account."
        }
      />

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
        ]}
      />
    </>
  );
};

export default TradingCosts;
