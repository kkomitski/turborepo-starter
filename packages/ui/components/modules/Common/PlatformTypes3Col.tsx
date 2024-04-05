import React, { ForwardedRef, ReactElement, forwardRef } from "react";
import PlatformWeb from "./PlatformTypes/PlatformWeb";
import PlatformMobile from "./PlatformTypes/PlatformMobile";
import PlatformMT4 from "./PlatformTypes/PlatformMT4";
import Lines from "../../../components/global/Misc/Lines";

const PlatformTypes3Col = forwardRef(
  (
    {
      title = "Powerful technology you can rely on",
      platformLeft,
      platformMiddle,
      platformRight,
    }: {
      title?: string;
      platformLeft: ReactElement<
        typeof PlatformWeb | typeof PlatformMobile | typeof PlatformMT4
      >;
      platformMiddle: ReactElement<
        typeof PlatformWeb | typeof PlatformMobile | typeof PlatformMT4
      >;
      platformRight: ReactElement<
        typeof PlatformWeb | typeof PlatformMobile | typeof PlatformMT4
      >;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <section ref={ref} className="Module menu-section relative bg-white">
        <Lines left />
        <div className="main-xl-container relative py-0">
          <div className="relative h-full pb-2 lg:mb-20 lg:pb-10">
            <div className="pb-10 pt-20 lg:pb-0">
              <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
                {title}
              </h2>
            </div>
          </div>
        </div>
        <div className="main-xl-container py-0 pb-20">
          <div className="relative grid gap-x-10 gap-y-[120px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
            {platformLeft}
            {platformMiddle}
            {platformRight}
          </div>
        </div>
      </section>
    );
  }
);

PlatformTypes3Col.displayName = "PlatformTypes3Col";
export default PlatformTypes3Col;
