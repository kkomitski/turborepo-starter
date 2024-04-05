import React, {
  ForwardedRef,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";
import PlatformWeb from "./PlatformTypes/PlatformWeb";
import PlatformMobile from "./PlatformTypes/PlatformMobile";
import PlatformMT4 from "./PlatformTypes/PlatformMT4";
import Lines from "../../../components/global/Misc/Lines";

const PlatformTypes2Col = forwardRef(
  (
    {
      title,
      text,
      platformLeft,
      platformRight,
    }: {
      title?: string | ReactNode;
      text?: string | ReactNode;
      platformLeft: ReactElement<
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
        <div className="main-xl-container">
          <div className="relative grid gap-x-10 gap-y-[120px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
            <div className="-mb-10 sm:col-span-2 lg:col-span-1 lg:mb-0">
              <h2 className="headline-lg relative -ml-6 mb-6 max-w-md border-l-8 border-black pl-4">
                {title || "Explore other platforms"}
              </h2>
              {text && <p className="text-xl xl:max-w-md">{text}</p>}
            </div>
            {platformLeft}
            {platformRight}
          </div>
        </div>
      </section>
    );
  }
);

PlatformTypes2Col.displayName = "PlatformTypes2Col";

export default PlatformTypes2Col;
