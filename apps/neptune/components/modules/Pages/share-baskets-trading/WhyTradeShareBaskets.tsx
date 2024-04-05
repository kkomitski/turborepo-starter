import Image from "next/image";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import WhyTradeCard, { WhyTradeObj } from "../../Markets/WhyTrade/WhyTradeCard";

const WhyTradeShareBaskets = forwardRef(
  (
    {
      title,
      text,
      data,
    }: {
      title: String;
      text: ReactNode;
      data: Array<WhyTradeObj>;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <>
        <section ref={ref} className="relative bg-navy-100">
          <div className="main-xl-container relative lg:px-20 lg-max:py-16">
            <h2 className="headline-lg mb-6 text-center text-white">{title}</h2>
            <div className="mx-auto mb-10 max-w-[800px] text-center text-white">
              {text}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.map((item: WhyTradeObj, index) => (
                <WhyTradeCard item={item} key={index} />
              ))}
              <div className="rounded-lg bg-navy-70 p-4 text-white md:col-span-2">
                <div className="flex flex-col gap-x-12 lg:flex-row">
                  <div className="mb-10 lg:mb-0 lg:w-1/2">
                    <svg
                      className="mb-2"
                      width="49"
                      height="49"
                      viewBox="0 0 49 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 14.8369H14.52M6.5 14.8369C6.5 10.4186 10.0817 6.83691 14.5 6.83691H24.5C25.6947 6.83691 26.7671 7.36067 27.5 8.19109L41.5 22.1911C42.1224 22.8962 42.5 23.8225 42.5 24.8369C42.5 26.0316 41.9762 27.104 41.1458 27.8369L27.1458 41.8369C26.4407 42.4593 25.5144 42.8369 24.5 42.8369C23.4856 42.8369 22.5593 42.4593 21.8542 41.8369L7.85418 27.8369C7.02375 27.104 6.5 26.0316 6.5 24.8369V14.8369Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <h3 className="mb-2 text-xl tracking-[0.4px]">Low cost</h3>
                    <p className="mb-0">
                      Trade commission-free with exposure to some of the
                      highest-performance companies in the world, and benefit
                      from reduced holding costs.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="mb-8 font-semibold">
                      Holding costs (Yearly)
                    </h3>
                    <small className="text-sm uppercase">
                      SHARE BASKETS (BUY) = 1.9%
                    </small>
                    <div className="relative mb-6 h-3 w-full overflow-hidden rounded-full">
                      <div className="absolute h-full w-full rounded-full bg-navy-100"></div>
                      <div className="absolute h-full w-1/2 rounded-full bg-azure-70"></div>
                    </div>
                    <small className="text-sm uppercase">
                      UK 100 (BUY) = -8.19%
                    </small>
                    <div className="relative h-3 w-full overflow-hidden rounded-full">
                      <div className="absolute h-full w-full rounded-full bg-navy-100"></div>
                      <div className="absolute h-full w-full rounded-full bg-azure-70"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
);

WhyTradeShareBaskets.displayName = "WhyTradeShareBaskets";
export default WhyTradeShareBaskets;
