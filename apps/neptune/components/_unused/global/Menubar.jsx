import React, { useEffect, useRef, useState } from "react";
import StickyNavOffer from "ui/components/global/Navigation/StickyNavOffer";
import RiskWarning from "ui/components/global/Navigation/RiskWarning";
import Logo from "ui/components/global/Navigation/Logo";
import MobileCTA from "ui/components/global/Navigation/MobileCTA";
import MobileLanguageSelector from "ui/components/global/Navigation/MobileLanguageSelector";
import Navigation from "ui/components/global/Navigation/Navigation";
import SearchInstrument from "ui/components/global/Navigation/SearchInstrument";
import DesktopCTA from "ui/components/global/Navigation/DesktopCTA";
import MobileAppStoreButtons from "ui/components/global/Navigation/MobileAppStoreButtons";
import MobileOpenBtn from "./Navigation/MobileOpenBtn";
import MobileCloseBtn from "./Navigation/MobileCloseBtn";
import { useRouter } from "next/router";
import { useWindowSize } from "ui/hooks/useWindowSize";

const Menubar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyContainer = useRef(null);
  const linksWrapper = useRef(null);
  const windowSize = useWindowSize();

  const resetMobileMenuAndClose = () => {
    setIsMobileMenuOpen(false);
    linksWrapper.current.scrollTop = 0;
  };

  // Close mobile menu on page switch
  useEffect(() => {
    const handleRouteChange = () => {
      resetMobileMenuAndClose();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Close mobile menu on desktop
  useEffect(() => {
    if (windowSize.screenWidth > 1024 && isMobileMenuOpen) {
      resetMobileMenuAndClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize.screenWidth]);

  return (
    <div
      ref={stickyContainer}
      className={"sticky-container " + (isMobileMenuOpen ? "fixed" : "sticky")}
    >
      <RiskWarning />
      <div className="neptune-megamenu">
        <div className="main-xl-container px-0 pb-0 pt-3 lg:px-6 lg:pb-3 xl:px-20">
          <div className="flex items-center lg:flex-row lg:justify-between">
            <div className="relative flex w-full flex-col lg:flex-row lg:items-center">
              <div className="flex w-full items-center px-4 pb-3 lg:w-auto lg:px-0 lg:pb-0">
                <Logo />
                <MobileCTA />
                <MobileOpenBtn
                  onClick={() => {
                    setIsMobileMenuOpen(true);
                  }}
                  isVisible={isMobileMenuOpen ? false : true}
                />

                <MobileCloseBtn
                  onClick={() => {
                    resetMobileMenuAndClose();
                  }}
                  isVisible={isMobileMenuOpen ? true : false}
                />
              </div>
              <div
                ref={linksWrapper}
                className={
                  "links-wrapper lg:flex " + (isMobileMenuOpen ? "" : "hidden")
                }
              >
                <MobileLanguageSelector />
                <Navigation />
                <SearchInstrument />
                <MobileAppStoreButtons />
              </div>
            </div>
            <DesktopCTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
