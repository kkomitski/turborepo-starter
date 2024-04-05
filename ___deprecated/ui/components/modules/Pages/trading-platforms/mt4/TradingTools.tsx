import React, { ForwardedRef, forwardRef } from "react";
import MT4Addons from "./components/MT4Addons";
import MT4Indicators from "./components/MT4Indicators";
import usePlatformDetector, {
  OperatingSystem,
} from "@/hooks/usePlatformDetector";
import WindowsIconSVG from "@/components/svg/WindowsIconSVG";

type Props = {};

const TradingTools = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const operatingSystem: OperatingSystem = usePlatformDetector();

    return (
      <>
        <section ref={ref} className="Module relative bg-navy-100">
          <div className="main-xl-container relative lg:px-20">
            <h2 className="headline-lg mb-6 text-center text-white">
              MetaTrader 4 trading tools
            </h2>
            <p className="mx-auto mb-6 max-w-4xl text-center text-xl text-white">
              Enhance your MT4 trading experience with our 12 free, premium EAs,
              including mini terminal and sentiment trader, and 18 indicators,
              such as pivot points and renko charts.
            </p>
            <div className="mb-10 flex justify-center">
              {operatingSystem === "Windows" && (
                <a
                  className="btn btn-primary-black-border btn-with-icon fill-navy-100 stroke-white font-semibold hover:stroke-azure-20"
                  href="https://assets.cmcmarkets.com/files/CMC-MT4-Apps.exe"
                >
                  <span>Download MT4 tools</span>
                  <WindowsIconSVG />
                </a>
              )}
            </div>
            <MT4Addons />
            <MT4Indicators />
          </div>
        </section>
      </>
    );
  }
);

TradingTools.displayName = "TradingTools";

export default TradingTools;
