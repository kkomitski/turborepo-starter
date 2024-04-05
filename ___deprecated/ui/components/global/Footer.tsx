import React, { useEffect, useState } from "react";
import MobileLinks from "./Footer/MobileLinks";
import DesktopLinks from "./Footer/DesktopLinks";
import ContactDetails from "./Footer/ContactDetails";
import HeadquartersDetails from "./Footer/HeadquartersDetails";
import SocialLinks from "./Footer/SocialLinks";
import AppLinks from "./Footer/AppLinks";
import Disclaimer from "./Footer/Disclaimer";
import BottomLinks from "./Footer/BottomLinks";
import FooterLogo from "./Footer/FooterLogo";
import SiteLinks from "./Footer/SiteLinks";
import LanguageSelectorBtn from "./Footer/LanguageSelectorBtn";
import constants from "@/helpers/constants";
import { LinkTypes } from "@/helpers/types/general";

export type FooterLinks = {
  header: string;
  url: string;
  linkType?: LinkTypes;
  pages: {
    pageName: string;
    url: string;
    linkType?: LinkTypes;
  }[];
}[];

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  const footerLinks: FooterLinks = [
    {
      header: "Ways to trade",
      url: "/ways-to-trade",
      linkType: "nextLink",
      pages: [
        {
          pageName: "Spread betting vs CFDs",
          url: "/en-gb/learn-spread-betting/spread-betting-vs-cfd",
          linkType: "anchor",
        },
        {
          pageName: "Trading penny stocks",
          url: "/en-gb/trading-guides/trading-penny-stocks",
          linkType: "anchor",
        },
        {
          pageName: "Best dividend stocks",
          url: "/en-gb/trading-guides/best-dividend-stocks-uk",
          linkType: "anchor",
        },
        {
          pageName: "Spread betting spreads",
          url: "/en-gb/spread-betting-spreads",
          linkType: "anchor",
        },
        {
          pageName: "Spread betting costs",
          url: "/en-gb/spread-betting-costs",
          linkType: "anchor",
        },
        {
          pageName: "CFD spreads",
          url: "/trading-costs",
          linkType: "nextLink",
        },
      ],
    },
    {
      header: "Markets",
      url: "/markets",
      linkType: "nextLink",
      pages: [
        {
          pageName: "Search our instruments",
          url: "/markets",
          linkType: "nextLink",
        },
      ],
    },
    {
      header: "TRADING PLATFORMS",
      url: "/trading-platforms",
      linkType: "nextLink",
      pages: [
        {
          pageName: "Compare trading platforms",
          url: "/trading-platforms",
          linkType: "nextLink",
        },
        {
          pageName: "Platform guides",
          url: "/en-gb/platform-guides",
          linkType: "anchor",
        },
        {
          pageName: "Trading tools",
          url: "/trading-platforms/web-trading-platform#tools",
          linkType: "nextLink",
        },
        {
          pageName: "Best execution and pricing",
          url: "/en-gb/trading-platform/our-platform-pricing/best-execution",
          linkType: "anchor",
        },
        {
          pageName: "Getting started with MT4",
          url: "/en-gb/trading-platforms/mt4/getting-started-with-mt4",
          linkType: "anchor",
        },
      ],
    },
    {
      header: "LEARN",
      url: "/learn",
      linkType: "nextLink",
      pages: [
        {
          pageName: "What is spread betting",
          url: "/en-gb/learn-spread-betting/what-is-spreadbetting",
          linkType: "anchor",
        },
        {
          pageName: "Spread betting examples",
          url: "/en-gb/learn-spread-betting/spreadbetting-examples",
          linkType: "anchor",
        },
        {
          pageName: "How to short a stock",
          url: "/en-gb/trading-guides/how-to-short-a-stock",
          linkType: "anchor",
        },
        {
          pageName: "Calculating spread betting margins",
          url: "/en-gb/learn-spread-betting/calculating-margins",
          linkType: "anchor",
        },
        {
          pageName: "What are CFDs",
          url: "/en-gb/learn-cfd-trading/what-are-cfds",
          linkType: "anchor",
        },
      ],
    },
    {
      header: "About Us",
      url: "/about-us",
      pages: [
        {
          pageName: "Charges FAQs",
          url: "/en-gb/support/faqs/charges",
          linkType: "anchor",
        },
      ],
    },
  ];

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <footer className="bg-navy-100 text-white">
        <div className="main-xl-container pb-10">
          <LanguageSelectorBtn />
          <SiteLinks />
          <FooterLogo />

          {isDesktop ? (
            <DesktopLinks footerLinks={footerLinks} />
          ) : (
            <MobileLinks accordionData={footerLinks} />
          )}

          <div className="grid w-full gap-x-4 md:grid-cols-10">
            <ContactDetails />
            <HeadquartersDetails />
            <SocialLinks />
            <AppLinks />
          </div>
          <Disclaimer />
          <BottomLinks />
        </div>
      </footer>

      <div className="bottom-sticky-mobile-cta fixed bottom-0 z-50 hidden w-full justify-center gap-x-4 bg-white px-2 py-4 drop-shadow sm:px-12 lg:hidden">
        <div className="device-show os-ios">
          <a
            className="btn btn-azure btn-sm js-modal gap-x-2 font-normal"
            href={constants.appLinks.baseLink}
            suppressHydrationWarning={true}
            data-fallback-href={constants.appLinks.fallbackLink}
          >
            <svg
              className="h-4 w-4"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5192 8.44659C11.5316 7.52254 12.0336 6.669 12.8494 6.18501C12.3324 5.47249 11.4975 5.03694 10.5966 5.00974C9.64877 4.91373 8.72988 5.55706 8.24688 5.55706C7.75453 5.55706 7.01088 5.01927 6.21009 5.03517C5.15645 5.06802 4.19799 5.63209 3.68537 6.52101C2.59374 8.34486 3.408 11.0253 4.45369 12.4996C4.97688 13.2215 5.58833 14.0279 6.3884 13.9993C7.17132 13.9679 7.46372 13.5175 8.40877 13.5175C9.34505 13.5175 9.61938 13.9993 10.4357 13.9811C11.2758 13.9679 11.8051 13.256 12.3099 12.5272C12.6858 12.0128 12.9751 11.4443 13.167 10.8428C12.1692 10.4355 11.5204 9.49204 11.5192 8.44659Z"
                fill="white"
              />
              <path
                d="M9.78442 3.8538C10.2321 3.33642 10.4527 2.67141 10.3993 2C9.71528 2.06916 9.08346 2.38385 8.62971 2.88139C8.18165 3.37227 7.95466 4.01448 7.99874 4.66656C8.69191 4.67343 9.35006 4.37387 9.78442 3.8538Z"
                fill="white"
              />
            </svg>

            <div className="text-left">
              <span className="block font-semibold normal-case">
                Download on the
              </span>
              <span className="block font-semibold uppercase tracking-normal">
                APP STORE
              </span>
            </div>
          </a>
        </div>

        <div className="device-show os-android">
          <a
            className="btn btn-azure btn-sm gap-x-2 font-normal"
            href={constants.appLinks.baseLink}
            suppressHydrationWarning={true}
            data-fallback-href={constants.appLinks.fallbackLink}
          >
            <svg
              className="h-3.5 w-3.5 fill-white stroke-azure-100"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.76066 1.37094C1.4916 1.65857 1.3335 2.10402 1.3335 2.68207V23.3183C1.3335 23.8964 1.4916 24.3418 1.76066 24.6294L1.82908 24.6967L13.2746 13.1365V12.8639L1.82908 1.3037L1.76066 1.37094Z"
                fill="inherit"
              />
              <path
                d="M17.0906 16.9921L13.2767 13.1371V12.8645L17.0925 9.01046L21.6988 11.6533C22.9895 12.3947 22.9895 13.6069 21.6988 14.3474L17.1785 16.9417L17.0906 16.9921Z"
                fill="inherit"
              />
              <path
                d="M17.1785 16.9417L13.2765 13.0002L1.76255 24.6295C2.18878 25.0842 2.89147 25.1403 3.68293 24.6864L17.1785 16.9417Z"
                fill="inherit"
              />
              <path
                d="M17.1783 9.05893L3.68293 1.31357C2.89147 0.859719 2.18878 0.91575 1.76255 1.37054L13.2765 13.0002L17.1783 9.05893Z"
                fill="inherit"
              />
              <path
                d="M17.1785 16.9417L21.6988 14.3474C22.9895 13.6069 22.9895 12.3947 21.6988 11.6533L17.0925 9.01046L13.2767 12.8645V13.1371L17.0906 16.9921L17.1785 16.9417ZM17.1785 16.9417L13.2765 13.0002M17.1785 16.9417L3.68293 24.6864C2.89147 25.1403 2.18878 25.0842 1.76255 24.6295L13.2765 13.0002M13.2765 13.0002L1.76255 1.37054C2.18878 0.91575 2.89147 0.859719 3.68293 1.31357L17.1783 9.05893L13.2765 13.0002ZM1.76066 1.37094C1.4916 1.65857 1.3335 2.10402 1.3335 2.68207V23.3183C1.3335 23.8964 1.4916 24.3418 1.76066 24.6294L1.82908 24.6967L13.2746 13.1365V12.8639L1.82908 1.3037L1.76066 1.37094Z"
                stroke="inherit"
                strokeLinejoin="round"
              />
            </svg>

            <div className="text-left">
              <span className="block font-semibold normal-case">Get it on</span>
              <span className="block font-semibold uppercase tracking-normal">
                Google Play
              </span>
            </div>
          </a>
        </div>
        <a
          className="js-modal btn btn-sm btn-sm btn-primary-outline gap-x-2 font-normal"
          data-iframe-params="?jid=gb3&amp;iaid=null&amp;lsrc=1"
          data-label="Create Account"
          href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb3&amp;iaid=null&amp;lsrc=1"
          data-url="/onboarding"
          data-function="live"
        >
          <svg
            className="h-3.5 w-3.5"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1875 9.91667L5.75 11.6667L5.16667 12.25H9.83333L9.25 11.6667L8.8125 9.91667M2.25 7.58333H12.75M3.41667 9.91667H11.5833C12.2277 9.91667 12.75 9.39433 12.75 8.75V2.91667C12.75 2.27233 12.2277 1.75 11.5833 1.75H3.41667C2.77233 1.75 2.25 2.27233 2.25 2.91667V8.75C2.25 9.39433 2.77233 9.91667 3.41667 9.91667Z"
              stroke="#101626"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="text-left">
            <span className="block normal-case">Open a web</span>
            <span className="block font-semibold uppercase tracking-normal">
              DEMO ACCOUNT
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Footer;
