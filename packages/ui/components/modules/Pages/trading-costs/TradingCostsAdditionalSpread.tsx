import SimpleTable from "@/components/tables/SimpleTable/SimpleTable";
import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";

type Props = {};
const TradingCostsAdditionalSpread = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    return (
      <section
        ref={ref}
        className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0 lg:gap-x-16"
      >
        <div className="lg:w-5/12">
          <div className="relative lg:-ml-6 lg:border-l-8 lg:border-navy-100 lg:pl-4">
            <div className=" -ml-6 border-l-8 border-navy-100 pl-4 lg:ml-0 lg:border-none lg:pl-0">
              <small className="mb-4 block uppercase">Spread Bet Only</small>
              <h2 className="headline-lg mb-6">Shares additional spread</h2>
            </div>
            <p className="text-xl">
              There&apos;s an additional spread on share spread bets when you
              enter and exit a trade, which is built into the prices displayed
              on our platform.
            </p>
          </div>
        </div>
        <div className="lg:w-7/12">
          <SimpleTable
            columns={[
              { name: "Country", sortable: true },
              { name: "Additional Spread", sortable: true },
            ]}
            rows={[
              [
                {
                  content: "France",
                  sortableValue: "France",
                },
                {
                  content: "0.10%",
                  sortableValue: 0.1,
                },
              ],
              [
                {
                  content: "Germany",
                  sortableValue: "Germany",
                },
                {
                  content: "0.10%",
                  sortableValue: 0.1,
                },
              ],
              [
                {
                  content: "Spain",
                  sortableValue: "Spain",
                },
                {
                  content: "0.10%",
                  sortableValue: 0.1,
                },
              ],
              [
                {
                  content: "UK",
                  sortableValue: "UK",
                },
                {
                  content: "0.10%",
                  sortableValue: 0.1,
                },
              ],
              [
                {
                  content: "US",
                  sortableValue: "US",
                },
                {
                  content: "1-4cents**",
                  sortableValue: 0.01,
                },
              ],
            ]}
          />
        </div>
      </section>
    );
  }
);

TradingCostsAdditionalSpread.displayName = "TradingCostsAdditionalSpread";
export default TradingCostsAdditionalSpread;
