/* eslint-disable @next/next/no-html-link-for-pages */
import RightArrowSVG from "@/components/svg/RightArrowSVG";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";

type Props = {};
const TradingCostsSpreads = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const instrumentMapping: InstrumentTableMapping = {
      columns: [
        { name: "Product", nameOverride: "Instrument" },
        { name: "Min Spread" },
        { name: "Margin", nameOverride: "Margin Rate" },
      ],
      instruments: [
        {
          tabName: "Indices",
          instruments: ["X-ABFDN", "X-ABFJV", "X-AASOB", "X-ABFMY", "X-AALXA"],
        },
        {
          tabName: "Commodities",
          instruments: ["X-AAPGW", "X-AAPHT", "X-AASUB", "X-ABCLO", "X-AAYIN"],
        },
        {
          tabName: "Forex",
          instruments: ["X-AALUO", "X-AARBY", "X-AARDJ", "X-AASKN", "X-ABFQF"],
        },
        {
          tabName: "Treasuries",
          instruments: [
            "X-ABFOJ",
            "X-ABFNT",
            "X-ABFOZ",
            "X-AARFT",
            "X-ABFOR",
            "X-ABFEC",
            "X-AARFL",
          ],
        },
        {
          tabName: "Share baskets",
          instruments: [
            "X-ALMEO",
            "X-ALMFA",
            "X-ALMEV",
            "X-ALMFB",
            "X-ALMFC",
            "X-ALMEX",
            "X-ALMES",
          ],
        },
        {
          tabName: "ETFs",
          instruments: [
            "X-AATBX",
            "X-AATBZ",
            "X-ABDFM",
            "X-AATIW",
            "X-AAOYV",
            "X-AAVJN",
            "X-ABFUI",
          ],
        },
      ],
    };

    return (
      <section
        ref={ref}
        className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0 lg:gap-x-16"
      >
        <div className="lg:w-5/12">
          <div className="relative lg:-ml-6 lg:border-l-8 lg:border-navy-100 lg:pl-4">
            <div className=" -ml-6 border-l-8 border-navy-100 pl-4 lg:ml-0 lg:border-none lg:pl-0">
              <small className="mb-4 block uppercase">CFD & Spread Bet</small>
              <h2 className="headline-lg mb-6">Spreads</h2>
            </div>
            <p className="mb-10 text-xl">
              We never aim to profit from our clients&apos; losses. Our income
              comes predominantly from the spread, which is built into the buy
              and sell prices of an instrument.
            </p>
            <a
              href="/en-gb/trading-guides/what-is-a-spread"
              className="btn btn-primary-outline btn-with-icon"
            >
              <span>See how we calculate spreads</span>
              <RightArrowSVG />
            </a>
          </div>
        </div>
        <div className="lg:w-7/12">
          <InstrumentsTable
            columns={instrumentMapping.columns}
            instrumentMappings={instrumentMapping.instruments}
          />
        </div>
      </section>
    );
  }
);

TradingCostsSpreads.displayName = "TradingCostsSpreads";
export default TradingCostsSpreads;
