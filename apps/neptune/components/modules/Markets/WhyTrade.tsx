import React, { ForwardedRef, forwardRef } from "react";
import WhyTradeCard, { WhyTradeObj } from "./WhyTrade/WhyTradeCard";

const WhyTrade = forwardRef(
  (
    { title, data }: { title: String; data: Array<WhyTradeObj> },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <>
        <section ref={ref} className="Module relative bg-navy-100">
          <div className="main-xl-container relative lg:px-20">
            <h2 className="headline-lg mb-10 text-center text-white">
              {title}
            </h2>
            <div className="grid gap-6 md:grid-cols-12 lg:grid-cols-12">
              {/* If items is 6, 3x3 grid
                If items is 7, 3x4 grid
              */}
              {data.map((item: WhyTradeObj, index) => (
                <WhyTradeCard
                  className={
                    data.length > 6 && index > 2
                      ? "md:col-span-4 lg:col-span-3"
                      : "md:col-span-4"
                  }
                  item={item}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
);

WhyTrade.displayName = "WhyTrade";

export default WhyTrade;
