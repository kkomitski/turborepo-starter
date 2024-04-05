import { LinkTypes } from "@/helpers/types/general";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

// NOTE: If linkType is "anchor", either use an absolute url or prepend the url with /en-gb
type firstLevelPage = {
  pageName: string;
  url: string;
  active?: boolean;
  secondLevel: secondLevelPage[];
  linkType?: LinkTypes;
};

type secondLevelPage = {
  pageName?: string;
  url?: string;
  active?: boolean;
  type?: string;
  text?: string;
  linkType?: LinkTypes;
};

const pages: Array<firstLevelPage> = [
  {
    pageName: "Ways to trade",
    url: "/account-specifications",
    secondLevel: [
      { type: "Title", text: "Retail trading" },
      { pageName: "Spread betting", url: "/spread-betting" },
      { pageName: "CFD trading", url: "/cfds" },
      { pageName: "Options trading", url: "/options-trading" },
      { pageName: "Alpha", url: "/en-gb/alpha", linkType: "anchor" },
      { pageName: "Price+", url: "/en-gb/price-plus", linkType: "anchor" },
      {
        pageName: "FX Active",
        url: "/forex-trading/forex-active-trader",
      },
      { pageName: "Compare accounts", url: "/account-specifications" },
      { pageName: "Costs", url: "/trading-costs" },
      { type: "Title", text: "Professional trading" },
      { pageName: "CMC Pro", url: "/en-gb/pro", linkType: "anchor" },
      { pageName: "Institutional", url: "/en-gb/connect", linkType: "anchor" },
    ],
  },
  {
    pageName: "Markets",
    url: "/markets",
    secondLevel: [
      { pageName: "Indices", url: "/markets-indices" },
      { pageName: "Forex", url: "/forex-trading" },
      { pageName: "Commodities", url: "/markets-commodity-trading" },
      { pageName: "Shares", url: "/markets-shares" },
      { pageName: "ETFs", url: "/etf-trading" },
      { pageName: "Treasuries", url: "/markets-treasuries" },
      { pageName: "Share baskets", url: "/share-baskets-trading" },
      { pageName: "See all markets", url: "/markets" },
    ],
  },
  {
    pageName: "Platforms",
    url: "/trading-platforms",
    secondLevel: [
      {
        pageName: "Web platform",
        url: "/trading-platforms/web-trading-platform",
      },
      {
        pageName: "Mobile apps",
        url: "/trading-platforms/mobile-trading-app",
      },
      { pageName: "MetaTrader 4 (MT4)", url: "/trading-platforms/mt4" },
      { pageName: "See all platforms", url: "/trading-platforms" },
    ],
  },
  {
    pageName: "Learn",
    url: "/en-gb/learn",
    linkType: "anchor",
    secondLevel: [
      { pageName: "Learn hub", url: "/en-gb/learn", linkType: "anchor" },
      {
        pageName: "News & analysis",
        url: "/en-gb/news-and-analysis",
        linkType: "anchor",
      },
      {
        pageName: "Trading guides",
        url: "/en-gb/trading-guides",
        linkType: "anchor",
      },
      { pageName: "Explore", url: "/en-gb/explore", linkType: "anchor" },
      {
        pageName: "Webinars and events",
        url: "/en-gb/learn/events",
        linkType: "anchor",
      },
      { pageName: "Opto", url: "/en-gb/opto", linkType: "anchor" },
    ],
  },
  {
    pageName: "About Us",
    url: "/about-us",
    secondLevel: [
      { pageName: "Why choose CMC?", url: "/about-us" },
      {
        pageName: "CMC careers",
        url: "https://www.cmcmarkets.com/group/careers",
        linkType: "anchor",
      },
      {
        pageName: "CMC Group",
        url: "https://www.cmcmarkets.com/group",
        linkType: "anchor",
      },
      {
        pageName: "Best execution",
        url: "/en-gb/trading-platform/our-platform-pricing/best-execution",
        linkType: "anchor",
      },
      { pageName: "Support", url: "/en-gb/support", linkType: "anchor" },
      { pageName: "Contact us", url: "/en-gb/contact-us", linkType: "anchor" },
    ],
  },
];

const Navigation = () => {
  const router = useRouter();

  // TODO: Refactor into own file
  // Reset all page active states
  pages.forEach((page) => {
    page.active = false;

    if (page.secondLevel) {
      page.secondLevel.forEach((secondPage) => {
        secondPage.active = false;
      });
    }
  });

  // Set the active state for the current page
  pages.forEach((page) => {
    // Check if the current page's URL matches the router's pathname
    if (page.url === router.asPath) {
      page.active = true;
    }
    // If not a match, check the second-level pages
    page.secondLevel.forEach((secondPage) => {
      // Check if the second-level page's URL matches the router's pathname
      if (secondPage.url === router.asPath) {
        secondPage.active = true;
      }
    });
  });

  // Initialize an array of isOpen states for each first-level page
  const [isOpenStates, setIsOpenStates] = useState(
    new Array(pages.length).fill(false)
  );

  // Prevent page browse on desktop touch devices (iPad, etc.). This opens menu without browsing page
  const toggleSecondLevelForTablet = (
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.TouchEvent<HTMLAnchorElement>
      | React.PointerEvent<HTMLAnchorElement>
  ) => {
    if (screen.width >= 1024) {
      return;
    }

    // Type guard to narrow down to PointerEvent
    if (
      event.nativeEvent instanceof PointerEvent &&
      event.nativeEvent.pointerType === "touch"
    ) {
      event.preventDefault();
    }
  };

  // Toggle the second-level container for a specific index
  const toggleSecondLevelForMobile = (
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.TouchEvent<HTMLAnchorElement>,
    index: any
  ) => {
    if (screen.width >= 1024) {
      return;
    }

    // Scroll to the first level dropdown link
    if (screen.width < 768 && event.target instanceof HTMLElement) {
      event.target.scrollIntoView({ behavior: "auto", block: "start" });
    }
    if (screen.width < 1024) {
      event.preventDefault();
    }
    let newIsOpenStates = [...isOpenStates];

    // Open selected level
    newIsOpenStates[index] = !newIsOpenStates[index];

    // Close other levels
    newIsOpenStates = isOpenStates.map((state, mapIndex) => {
      if (mapIndex === index) return !state;
    });

    setIsOpenStates(newIsOpenStates);
  };

  const toggleSecondLevelForDesktop = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    index: any
  ) => {
    if (screen.width < 1024) return;
    let newIsOpenStates = [...isOpenStates];

    newIsOpenStates = isOpenStates.map(() => {
      return false;
    });

    // Open selected level
    newIsOpenStates[index] = true;

    setIsOpenStates(newIsOpenStates);
  };

  const resetSecondLevel = () => {
    setIsOpenStates(new Array(pages.length).fill(false));
  };

  return (
    <div
      className="relative block lg:flex lg:items-center"
      onMouseLeave={resetSecondLevel}
    >
      {pages.map((page, index) => (
        <div key={index} className="first-level-container">
          {page.linkType === "anchor" ? (
            <a
              href={page.url}
              onClick={(e) => {
                toggleSecondLevelForTablet(e);
                toggleSecondLevelForMobile(e, index);
              }}
              onMouseEnter={(e) => toggleSecondLevelForDesktop(e, index)}
              className={
                "first-level " +
                (isOpenStates[index] ? "open " : "") +
                (page.active ? "active " : "")
              }
            >
              <span>{page.pageName}</span>
            </a>
          ) : (
            <Link
              data-next-link
              href={page.url}
              onClick={(e) => {
                toggleSecondLevelForTablet(e);
                toggleSecondLevelForMobile(e, index);
              }}
              onMouseEnter={(e) => toggleSecondLevelForDesktop(e, index)}
              className={
                "first-level " +
                (isOpenStates[index] ? "open " : "") +
                (page.active ? "active " : "")
              }
            >
              <span>{page.pageName}</span>
            </Link>
          )}
          <div
            className={`second-level-container ${
              isOpenStates[index] ? "" : "hidden"
            }`}
            onMouseEnter={(e) => toggleSecondLevelForDesktop(e, index)}
            onMouseLeave={resetSecondLevel}
          >
            <ul className="second-level-container-list space-y-0">
              {page.secondLevel.map((secondPage, secondIndex) =>
                secondPage.type === "Title" ? (
                  <div
                    key={secondIndex}
                    className="second-level-title whitespace-nowrap"
                  >
                    {secondPage.text}
                  </div>
                ) : (
                  secondPage.pageName &&
                  secondPage.url && (
                    <React.Fragment key={secondIndex}>
                      {secondPage.linkType === "anchor" ? (
                        <a
                          href={secondPage.url}
                          className={
                            "second-level " +
                            (secondPage.active ? "active " : "")
                          }
                        >
                          {secondPage.pageName}
                        </a>
                      ) : (
                        <Link
                          data-next-link
                          href={secondPage.url}
                          className={
                            "second-level " +
                            (secondPage.active ? "active " : "")
                          }
                        >
                          {secondPage.pageName}
                        </Link>
                      )}
                    </React.Fragment>
                  )
                )
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
