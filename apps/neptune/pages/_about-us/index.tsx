import OnboardingButton from "@/components/elements/OnboardingButton";
import AccountType from "@/components/modules/Common/AccountTypes/AccountType";
import AccountTypes2Col from "@/components/modules/Common/AccountTypes2Col";
import Footnotes from "@/components/modules/Common/Footnotes";
import ReadyToGetStarted from "@/components/modules/Common/ReadyToGetStarted";
import TrustpilotSliderB from "@/components/modules/Common/TrustpilotSliderB";
import AwardWinningService from "@/components/modules/Pages/about-us/AwardWinningService";
import CMCWay from "@/components/modules/Pages/about-us/CMCWay";
import CompanyStats from "@/components/modules/Pages/about-us/CompanyStats";
import Hero from "@/components/modules/Pages/about-us/Hero";
import OurValues from "@/components/modules/Pages/about-us/OurValues";
import constants, { awsImage } from "@/helpers/constants";
import { AwardObject } from "@/helpers/types/awards";
import { TID } from "@/helpers/types/general";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  const CompanyStatsData: Array<TID> = [
    {
      title: <>{constants.DIDS.YEARS_ACTIVE}+</>,
      description: (
        <>
          years of <span className="2xl:block">experience</span>
        </>
      ),
      image: awsImage("about-us_company-stat-bg-1.svg"),
    },
    {
      title: "1 million+",
      description: (
        <>
          traders and{" "}
          <span className="2xl:block">
            investors globally<sup>2</sup>
          </span>
        </>
      ),
      image: awsImage("about-us_company-stat-bg-2.svg"),
    },
    {
      title: "£100m+",
      description: (
        <>
          invested in our <span className="2xl:block">technology</span>
        </>
      ),
      image: awsImage("about-us_company-stat-bg-3.svg"),
    },
    {
      title: "12",
      description: (
        <>
          countries <span className="2xl:block">served</span>
        </>
      ),
      image: awsImage("about-us_company-stat-bg-4.svg"),
    },
  ];
  const CMCWayData: Array<TID> = [
    {
      title: "Put clients first",
      description: (
        <>
          Our business is built around our clients. We&apos;re proud to have
          long lasting relationships by understanding and supporting them every
          step of the way.
        </>
      ),
      image: awsImage("about-us_cmc-way-put-clients-first.png"),
    },
    {
      title: "Lead with quality",
      description: (
        <>
          Our commitment to quality is at the heart of our culture. Whatever we
          do, we do it properly. When faced with the choice, we always
          prioritise quality over quantity.
        </>
      ),
      image: awsImage("about-us_cmc-way-lead-with-quality.png"),
    },
    {
      title: "Set the standards",
      description: (
        <>
          We&apos;re clear, open and honest with our clients, and with each
          other. We don&apos;t wait for others, but set the standards for others
          to follow.
        </>
      ),
      image: awsImage("about-us_cmc-way-set-the-standards.png"),
    },
  ];
  const OurValuesData: Array<TID> = [
    {
      title: "Stand with our clients",
      description:
        "We're as passionate about trading as our clients, and we're here to help them make the most of every opportunity. In everything we do, we put our clients at the centre.",
      image: awsImage("icon_user-group-48-black.svg"),
    },
    {
      title: "Focus on impact",
      description:
        "We focus on solving the most important problems that will deliver the biggest impact. We use our time and money wisely and stay focused on the end goal.",
      image: awsImage("icon_speaker-phone-48-black.svg"),
    },
    {
      title: "Keep it simple",
      description:
        "In a complex industry, we always strive to keep things as simple as possible. We're honest, reliable and straight-talking.",
      image: awsImage("icon_light-bulb-48-black.svg"),
    },
    {
      title: "Be bold",
      description:
        "We're not afraid to challenge ourselves or the status quo and we're always looking for ways to improve. If things don't work: we learn, iterate and succeed.",
      image: awsImage("icon_fire-48-black.svg"),
    },
    {
      title: "Be human",
      description:
        "We're personable and approachable. We know the value of direct interaction and make ourselves available to talk in person.",
      image: awsImage("icon_heart-48-black-2.svg"),
    },
  ];
  const AwardsData: Array<AwardObject> = [
    {
      year: "2023",
      title: "No.1 Web Platform",
      giver: "ForexBrokers.com Awards",
    },
    {
      year: "2023",
      title: "Best In-House Analysts",
      giver: "Professional Trader Awards",
    },
    {
      year: "2022",
      title: "Best CFD Provider",
      giver: "Online Money Awards",
    },
    {
      year: "2022",
      title: "Best Mobile Trading Platform",
      giver: "ADVFN International Financial Awards",
    },
    {
      year: "2021",
      title: "Best Spread Betting Provider",
      giver: "The City of London Wealth Management",
    },
  ];
  return (
    <>
      <Head>
        <title>Benefits Of Trading With CMC | Why CMC | CMC Markets</title>
        <meta
          name="description"
          content="Why choose CMC Markets? A FTSE 250-listed company, multiple award-winners, value for money, 24-hour support, mobile apps..."
        ></meta>
      </Head>

      <Hero />
      <CompanyStats stats={CompanyStatsData} />
      <AccountTypes2Col
        title="What we do"
        description={
          <>
            For over {constants.DIDS.YEARS_ACTIVE} years, we&apos;ve been
            dedicated to creating the best-in-class platform for committed
            spread betting and CFD traders, with competitive spreads, advanced
            platform functionality, lightning-fast execution<sup>3</sup> and
            leading insight and analysis<sup>4</sup>.
          </>
        }
        accountTypeLeft={
          <AccountType
            type="sb"
            descriptionOverride="We've offered spread betting online since 2001, a form of derivative trading that enables our clients to speculate on the price movements of over 12,000 financial instruments."
            enableBulletPoints={false}
            closingLine={{
              enabled: false,
            }}
            footnotes={[]}
          />
        }
        accountTypeRight={
          <AccountType
            type="cfd"
            descriptionOverride="We became a CFD broker in 2000, underlining our commitment to offering the most competitive and innovative products to retail clients globally."
            enableBulletPoints={false}
            closingLine={{
              enabled: false,
            }}
            footnotes={[]}
          />
        }
      />
      <CMCWay title="The CMC way" data={CMCWayData} />
      <OurValues
        title="Our values"
        description={
          <>
            We constantly strive to help clients realise their potential, and
            believe in the possibilities of the unrealised.
          </>
        }
        values={OurValuesData}
      />

      <TrustpilotSliderB
        trustpilot={{
          theme: "dark",
        }}
        footnotes={["2"]}
      />
      <AwardWinningService
        title="Our award-winning service"
        awards={AwardsData}
      />

      {/* Ready to get started */}
      <ReadyToGetStarted
        content="Try a demo account with £10,000 of virtual funds. You can then open a live account anytime within the platform."
        ctaBtns={
          <OnboardingButton
            className="mx-auto"
            account="demo"
            params="jid=gb3&amp;iaid=null&amp;lsrc=1"
            variant="azure"
          >
            Open demo account
          </OnboardingButton>
        }
      />

      {/* Footnotes */}
      <Footnotes
        footnotesList={[
          <>{constants.DIDS.FSCS_FOOTNOTE}</>,
          <>{constants.DIDS.GLOBAL_TOTAL_TRADERS_INVESTORS_FOOTNOTE}</>,
          <>{constants.DIDS.GLOBAL_CFD_EXECUTION_TIME}</>,
          <>{constants.DIDS.UK_AWARDS_ALL_FOOTNOTE}</>,
        ]}
      />
    </>
  );
};

export default AboutUs;
