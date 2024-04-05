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

const ScrollSpyAnchors = ({
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
  const scrollToSection = (key: string) => {
    // Get the section element to scroll to
    const elem = pageItems[key].ref.current;
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
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
    scrollSpySetup(scrollOffsetHeight + 48);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize.screenWidth]);
  return (
    <div
      className="sticky-sub-menu sticky z-[41] w-full"
      style={{
        top: navPlacementOffsetHeight,
      }}
    >
      {/* Desktop nav */}
      {pageItems && (
        <nav
          ref={menuScrollLinksNav}
          className="menu-scroll-links hidden justify-end gap-x-1 bg-white-95 py-2 pr-4 lg:flex lg:justify-center lg:pl-0"
        >
          <ul className="flex items-center gap-x-2">
            {Object.keys(pageItems).map((key: string, index: number) => (
              <li
                onClick={() => scrollToSection(key)}
                ref={pageItems[key].btnRef}
                className={
                  "btn btn-sm mb-0 hidden cursor-pointer lg:block " +
                  (pageItems[key].active ? " btn-azure-light" : "btn-white-90")
                }
                key={index}
              >
                {pageItems[key].title}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Mobile nav */}
      {pageItems && !options.hideMobile && (
        <nav
          ref={menuScrollLinksNav}
          className="menu-scroll-links-mob flex justify-end bg-white-95 py-2 pr-4 lg:hidden"
        >
          <div className="relative lg:hidden">
            <button
              ref={mobileDropdownBtn}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              type="button"
              className="btn btn-sm btn-azure-light btn-with-icon"
            >
              <span>{mobileDropdownText}</span>
              <ChevronDown size={20} />
            </button>
            <ul
              ref={mobileDropDownList}
              className={
                "absolute right-0 flex flex-col rounded-lg bg-white text-left shadow " +
                (mobileDropdownOpen ? "block" : "hidden")
              }
            >
              {Object.keys(pageItems).map((key: string, index: number) => (
                <li
                  onClick={() => {
                    scrollToSection(key);
                    setMobileDropdownOpen(false);
                  }}
                  ref={pageItems[key].btnRef}
                  className="block w-max min-w-[200px] px-4 py-3 text-left text-xs font-semibold text-navy-100"
                  key={index}
                >
                  {pageItems[key].title}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default ScrollSpyAnchors;
