import RightArrowSVG from "@/components/svg/RightArrowSVG";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import { getHtmlLang } from "@/helpers/constants";
import Link from "next/link";
import { type } from "os";
import React, { ForwardedRef, forwardRef } from "react";

type Props = {};
const TradingCostsHoldingCosts = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const instrumentMapping: InstrumentTableMapping = {
      columns: [
        { name: "Product", nameOverride: "Instrument" },
        { name: "Holding Cost Buy" },
        { name: "Holding Cost Sell" },
      ],
      instruments: [
        {
          tabName: "Indices",
          instruments: ["X-AASOB", "X-AALXA", "X-ABFDN", "X-ABFJV", "X-ABFMY"],
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
          tabName: "Shares",
          instruments: ["X-ABEHN", "X-AALAD", "X-AALJF", "X-AARLJ", "X-AAMYD"],
        },
        {
          tabName: "Treasuries",
          instruments: ["X-AAREN", "X-AARFL", "X-AARFT", "X-ABFEC", "X-ABFNT"],
        },
        {
          tabName: "Share baskets",
          instruments: ["X-ALMFA", "X-AQHWK", "X-ALMFB", "X-AQHPC", "X-AQHPD"],
        },
        {
          tabName: "ETFs",
          instruments: ["X-AALML", "X-AAVHB", "X-ABFSQ", "X-AASSF", "X-AASSC"],
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
              <h2 className="headline-lg mb-6">Overnight holding costs</h2>
            </div>
            <p className="mb-10 text-xl">
              At the end of each day (5pm New York time), positions held in your
              account may be subject to a charge called a &apos;holding
              cost&apos;. The holding cost can be positive or negative,
              depending on the direction of your trade and the applicable
              holding rate.
            </p>
            <a
              href={`/${getHtmlLang()}/learn-spread-betting/holding-costs-explained`}
              className="btn btn-primary-outline btn-with-icon"
            >
              <span>Learn how holdings costs are applied</span>
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

TradingCostsHoldingCosts.displayName = "TradingCostsHoldingCosts";
export default TradingCostsHoldingCosts;
