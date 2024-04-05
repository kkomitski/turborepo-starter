import RightArrowSVG from "@/components/svg/RightArrowSVG";
import SimpleTable from "@/components/tables/SimpleTable/SimpleTable";
import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";

type Props = {};
const TradingCostsShareCommission = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    return (
      <section
        ref={ref}
        className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0 lg:gap-x-16"
      >
        <div className="lg:w-5/12">
          <div className="relative lg:-ml-6 lg:border-l-8 lg:border-navy-100 lg:pl-4">
            <div className="-ml-6 border-l-8 border-navy-100 pl-4 lg:ml-0 lg:border-none lg:pl-0">
              <small className="mb-4 block uppercase">CFD Only</small>
              <h2 className="headline-lg mb-6">Share commission</h2>
            </div>
            <p className="mb-10 text-xl">
              There&apos;s a commission charge on share CFDs when you enter and
              exit a trade, which varies depending on the country where the
              specific share originates.
            </p>
            <Link
              href="/learn-cfd-trading/cfd-commissions-explained"
              className="btn btn-primary-outline btn-with-icon"
            >
              <span>View our share commission examples</span>
              <RightArrowSVG />
            </Link>
          </div>
        </div>
        <div className="lg:w-7/12">
          <SimpleTable
            columns={[
              { name: "Country", sortable: true },
              { name: "Commission", sortable: true },
              { name: "Min Commission", sortable: true },
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
                {
                  content: "EUR 9.00",
                  sortableValue: 9,
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
                {
                  content: "EUR 9.00",
                  sortableValue: 9,
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
                {
                  content: "EUR 9.00",
                  sortableValue: 9,
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
                {
                  content: "GBP 9.00",
                  sortableValue: 9,
                },
              ],
              [
                {
                  content: "US",
                  sortableValue: "US",
                },
                {
                  content: "USD 0.02",
                  sortableValue: 0.02,
                },
                {
                  content: "USD 10.00",
                  sortableValue: 10,
                },
              ],
            ]}
          />
        </div>
      </section>
    );
  }
);

TradingCostsShareCommission.displayName = "TradingCostsShareCommission";

export default TradingCostsShareCommission;
