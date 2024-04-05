import { useWindowSize } from "@/hooks/useWindowSize";
import { ChevronDown } from "lucide-react";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";

type PageItems = {
  [key: string]: {
    title: string; // Button Anchor Text
    ref: MutableRefObject<HTMLElement | null>; // Section ref
    btnRef?: any; // Button ref
    scrollMarginClasses?: string; // Scroll margin classes to offset scrolling to section
    active?: boolean; // Is the section active (being scrolled in)
  };
};

type Options = {
  hideMobile?: boolean;
};

const ContentLinks = ({
  options = {
    hideMobile: false,
  },
  pageItemsObj,
}: {
  options?: Options;
  pageItemsObj: PageItems;
}) => {
  const initialPageItems: PageItems = {};
  const [navPlacementOffsetHeight, setNavPlacementOffsetHeight] = useState(110);
  const menuScrollLinksNav = useRef<any>(null);

  // Mobile dropdown refs & states
  const mobileDropDownList = useRef<any>(null);
  const mobileDropdownBtn = useRef<any>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileDropdownText, setMobileDropdownText] = useState("Menu");

  // Window size hook
  const windowSize = useWindowSize();

  // Before putting in a state, populate initialPageItems
  // with pageItemsObj and set btnRef to null for each object
  for (const key in pageItemsObj) {
    initialPageItems[key] = {
      ...pageItemsObj[key],
      btnRef: React.createRef(),
    };
  }

  const [pageItems, setPageItems] = useState<PageItems>(initialPageItems);

  // Add scroll margin classes & an ID to each section element
  const pageItemsSetup = () => {
    Object.keys(pageItems).forEach((key: string) => {
      const elem = pageItems[key].ref.current;
      if (elem) {
        elem.dataset.scrollSpyAnchor = "true";
        elem.id = key;
        const classes =
          pageItems[key].scrollMarginClasses ?? "scroll-mt-40 lg:scroll-mt-24";
        elem?.classList.add(...classes.split(" "));
      }
    });
  };

  // Scroll to section from nav link click
  const scrollToSection = (key: string, offset: number = 0) => {
    // Get the section element to scroll to
    const elem = pageItems[key].ref.current;
    // if (elem) {
    //   elem.scrollIntoView({ behavior: "smooth" });
    // }

    if (elem) {
      const y = elem.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollSpySetup = (scrollOffsetHeight: number) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (isInViewPort(entry, scrollOffsetHeight)) {
            // If the section is an anchored section
            if (
              (entry.target as HTMLElement).dataset.scrollSpyAnchor === "true"
            ) {
              Object.keys(pageItems).map((key: string) => {
                // Set all section items to inactive
                setPageItems((prev) => {
                  return {
                    ...prev,
                    [key]: {
                      ...prev[key],
                      active: false,
                    },
                  };
                });
              });

              // Set the currently scrolled section item to active
              setPageItems((prev) => {
                return {
                  ...prev,
                  [entry.target.id]: {
                    ...prev[entry.target.id],
                    active: true,
                  },
                };
              });

              setMobileDropdownText(pageItems[entry.target.id].title);
            }

            // If the section is not an anchored section
            else {
              Object.keys(pageItems).map((key: string) => {
                // Set all section items to inactive
                setPageItems((prev) => {
                  return {
                    ...prev,
                    [key]: {
                      ...prev[key],
                      active: false,
                    },
                  };
                });
              });
            }
          }
        });
      },
      {
        root: null,
        rootMargin: `-${scrollOffsetHeight}px 0px ${scrollOffsetHeight}px 0px`,
        threshold: [
          0.0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0,
        ],
      }
    );

    // Observe all pageItem sections
    Object.keys(pageItems).map((key: string) => {
      const elem = pageItems[key].ref.current;
      if (elem) {
        observer.observe(elem);
      }
    });

    // All other non anchored page sections. When a non-anchored section is scrolled into view,
    // set all pageItems to inactive
    const pageSections = document.querySelectorAll("main > section");
    pageSections.forEach((section) => {
      const elem = section as HTMLElement;
      if (!elem.dataset.scrollSpyAnchor) {
        elem.dataset.scrollSpyAnchor = "false";
      }
      observer.observe(elem);
    });
  };

  /**
   * Determine if the element is in the viewport
   * @param entry
   * @param offset
   * @returns
   */
  const isInViewPort = (entry: IntersectionObserverEntry, offset = 0) => {
    const off = offset + 52;
    const rect = entry.boundingClientRect;
    return rect.top - 1 <= 0 + off && rect.bottom >= 0 + off;
  };

  useEffect(() => {
    pageItemsSetup();

    // Get the sticky container element
    const stickyContainer: HTMLElement | null =
      document.querySelector(".sticky-container");

    if (!stickyContainer) {
      throw new Error("Sticky container not found");
    }

    // Get the megamenu link wrapper height. This is needed for mobile to offset height when the mobile
    // menu is open which expands the stickyContainer
    const megamenuLinkWrapper: HTMLElement | null =
      stickyContainer.querySelector(".neptune-megamenu .links-wrapper");

    if (!megamenuLinkWrapper) {
      throw new Error("Megamenu link wrapper not found");
    }

    // Get the height of the sticky container minus the megamenu link wrapper.
    const stickyContainerOffsetHeight: number | undefined =
      stickyContainer?.offsetHeight -
      (windowSize.isMobile ? megamenuLinkWrapper?.offsetHeight : 0);

    // Set the scroll offset (sticky container height + menu scroll links height)
    // This takes into account the sticky container height and the menu scroll links height
    // when highlighting the nav links
    const scrollOffsetHeight = stickyContainerOffsetHeight
      ? stickyContainerOffsetHeight + menuScrollLinksNav.current.offsetHeight
      : 0;

    // Hotfix to fix 1px gap between 1024 and 1280 screen widths
    const additionalOffset =
      windowSize.screenWidth &&
      windowSize.screenWidth >= 1024 &&
      windowSize.screenWidth < 1280
        ? 1
        : 0;

    // Places *this* nav below the navbar
    if (stickyContainerOffsetHeight) {
      setNavPlacementOffsetHeight(
        stickyContainerOffsetHeight - additionalOffset
      );
    }

    // Setup scroll spy
    scrollSpySetup(200);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize.screenWidth]);

  return (
    <div
      ref={menuScrollLinksNav}
      className={
        windowSize.isMobile
          ? "content-links-mobile stick-sub-menu fixed left-0 w-full lg:hidden"
          : "bg-white-95"
      }
      style={{
        top: windowSize.isMobile ? navPlacementOffsetHeight : 0,
      }}
    >
      {windowSize.isDesktop && (
        <div className="Module sticky top-[166px] bg-white-95">
          <div className="mod-learn-content-links relative mb-10 hidden w-full max-w-xs rounded-2xl bg-white-85 p-4 dark:bg-navy-70 md:mb-16 lg:block">
            <div
              className="mlcl-arrow absolute right-5 top-6 z-[2] block cursor-pointer"
              style={{ transform: "rotate(180deg)" }}
            >
              <svg
                className="stroke-navy-100 dark:stroke-white"
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8L8 0.999999L15 8"
                  stroke="inherit"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="mlcl-header mlcl-open relative pr-3">
              <div className="relative">
                <span
                  className="block text-lg font-semibold"
                  data-contenteditable="true"
                >
                  Content Links
                </span>
              </div>
              <div
                className="mlcl-links transition-max-height min-w-[200px] overflow-hidden duration-700 ease-out"
                data-max-height="616px"
                // style="max-height: 616px"
              >
                <div className="mlcl-listings p-1 pt-3">
                  <ul className="mlcl-list list-item space-y-4">
                    {Object.keys(pageItems).map(
                      (key: string, index: number) => (
                        <li
                          onClick={() => scrollToSection(key, 175)}
                          ref={pageItems[key].btnRef}
                          className={
                            "text-sm " +
                            (pageItems[key].active ? "font-bold" : "")
                          }
                          key={index}
                        >
                          <div className="flex cursor-pointer gap-x-1.5 no-underline">
                            <img
                              src="https://hdev3-assets.cmcmarkets.com/neptune/images/right-arrow-black.svg"
                              data-dark-src="https://hdev3-assets.cmcmarkets.com/neptune/images/right-arrow-white.svg"
                              data-light-src="https://hdev3-assets.cmcmarkets.com/neptune/images/right-arrow-black.svg"
                            />
                            <span>{pageItems[key].title}</span>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {windowSize.isMobile && (
        <>
          <div
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="content-links-select flex items-center justify-between bg-white-85 px-4 py-2"
          >
            <span className="text-sm font-semibold uppercase ">
              Table of Contents
            </span>
            <img
              className="content-links-mobile-arrow rotate-180 transition-transform"
              src="https://hdev3-assets.cmcmarkets.com/neptune/images/accordion-chevron.svg"
              width="14"
              height="7"
              style={{
                rotate: mobileDropdownOpen ? "0deg" : "180deg",
              }}
            />
          </div>
          <div
            style={{
              maxHeight: mobileDropdownOpen ? "1000px" : "0px",
              transition: "max-height 0.2s ease-out",
            }}
            className="content-links-dropdown overflow-hidden border-b border-b-white-85 bg-white-90 duration-500"
          >
            <ul className="space-y-4 px-4 py-2">
              {Object.keys(pageItems).map((key: string, index: number) => (
                <li
                  onClick={() => {
                    scrollToSection(key, 200);
                    setMobileDropdownOpen(false);
                  }}
                  ref={pageItems[key].btnRef}
                  className={
                    "text-sm " + (pageItems[key].active ? "font-bold" : "")
                  }
                  key={index}
                >
                  <div className="flex cursor-pointer gap-x-1.5 no-underline">
                    <img
                      src="https://hdev3-assets.cmcmarkets.com/neptune/images/right-arrow-black.svg"
                      data-dark-src="https://hdev3-assets.cmcmarkets.com/neptune/images/right-arrow-white.svg"
                      data-light-src="https://hdev3-assets.cmcmarkets.com/neptune/images/right-arrow-black.svg"
                    />
                    <span>{pageItems[key].title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ContentLinks;
