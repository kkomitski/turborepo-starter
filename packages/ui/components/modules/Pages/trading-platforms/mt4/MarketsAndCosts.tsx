import React, { ForwardedRef, forwardRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import { InstrumentTableMapping } from "@/components/tables/InstrumentTable/InstrumentTableTypes";
import Lines from "../../../components/global/Misc/Lines";
import constants from "@/helpers/constants";

type Props = {};

const MarketsAndCosts = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const forexInstrumentMapping: InstrumentTableMapping = {
      columns: [
        {
          name: "Product",
        },
        {
          name: "FX Active Min Spread",
        },
        {
          name: "FX Active Commission",
          nameOverride: "FX Active Commission \n (Per US $100,000)",
        },
        {
          name: "Min Spread",
          nameOverride: "Standard Account \n Min Spread",
        },
        {
          name: "Margin MT4",
          nameOverride: "Margin Rate",
        },
      ],
      instruments: [
        {
          tabName: "Majors",
          instruments: [
            "X-AALUO",
            "X-AARDJ",
            "X-AASKN",
            "X-AAZGX",
            "X-ABFPO",
            "X-ABFQF",
          ],
          columns: [
            {
              name: "Product",
            },
            {
              name: "FX Active Min Spread",
              nameOverride: "FX Active \n Min Spread",
            },
            {
              name: "FX Active Commission",
              nameOverride: "FX Active Commission \n (Per US $100,000)",
            },
            {
              name: "Min Spread",
              nameOverride: "Standard Account \n Min Spread",
            },
            {
              name: "Margin MT4",
              nameOverride: "Margin Rate",
            },
          ],
        },
        {
          tabName: "Minors",
          instruments: [
            "X-AALTL",
            "X-AALTN",
            "X-AALTT",
            "X-AALTU",
            "X-AALTZ",
            "X-AALUF",
            "X-AANHF",
            "X-AANHG",
            "X-AANHM",
            "X-AANHN",
            "X-AANHR",
            "X-AANHV",
            "X-AANIB",
            "X-AANYY",
            "X-AANYZ",
            "X-AANZE",
            "X-AANZF",
            "X-AANZJ",
            "X-AANZN",
            "X-AANZT",
            "X-AARBF",
            "X-AARBI",
            "X-AARBK",
            "X-AARBY",
            "X-AARCM",
            "X-AARDA",
            "X-AASJF",
            "X-AASJJ",
            "X-AASJM",
          ],
          loadMoreEnabled: true,
          columns: [
            {
              name: "Product",
            },
            {
              name: "FX Active Min Spread",
              nameOverride: "FX Active \n Min Spread",
            },
            {
              name: "Min Spread",
              nameOverride: "Standard Account \n Min Spread",
            },
            {
              name: "Margin MT4",
              nameOverride: "Margin Rate",
            },
            {
              name: "Spread Discount MT4",
              nameOverride: "Spread Discount",
            },
          ],
        },
        {
          tabName: "Exotics",
          instruments: [
            "X-AALUO",
            "X-AARBY",
            "X-AARDJ",
            "X-AASKN",
            "X-ABFQF",
            "X-ABFPO",
            "X-AASJY",
          ],
          columns: [
            {
              name: "Product",
            },
            {
              name: "FX Active Min Spread",
              nameOverride: "FX Active \n Min Spread",
            },
            {
              name: "Min Spread",
              nameOverride: "Standard Account \n Min Spread",
            },
            {
              name: "Margin MT4",
              nameOverride: "Margin Rate",
            },
            {
              name: "Spread Discount MT4",
              nameOverride: "Spread Discount",
            },
          ],
        },
      ],
    };

    const indicesInstrumentMapping: InstrumentTableMapping = {
      columns: [
        {
          name: "Product",
          nameOverride: "Instrument",
        },
        {
          name: "Min Spread",
        },
        {
          name: "Margin",
          nameOverride: "Margin Rate",
        },
      ],
      instruments: [
        {
          tabName: "n/a",
          instruments: [
            "X-AALXA",
            "X-AANKX",
            "X-AAYLV",
            "X-AAREF",
            "X-AARZV",
            "X-AASOB",
            "X-AATTA",
            "X-AAVLI",
            "X-AAVNY",
            "X-ABFMB",
            "X-AAYZX",
            "X-ABDAG",
            "X-ABFMY",
            "X-ABDUB",
            "X-ABDVO",
            "X-ABFDN",
            "X-ABFJV",
          ],
        },
      ],
    };

    const commoditiesInstrumentMapping: InstrumentTableMapping = {
      columns: [
        {
          name: "Product",
          nameOverride: "Instrument",
        },
        {
          name: "Min Spread",
        },
        {
          name: "Margin",
          nameOverride: "Margin Rate",
        },
      ],
      instruments: [
        {
          tabName: "Bullion",
          instruments: ["X-AASUB", "X-ABCLO"],
        },
        {
          tabName: "Soft commodities",
          instruments: [
            "X-AAPBO",
            "X-ABCYM",
            "X-ABFKJ",
            "X-AAOSW",
            "X-ABDOR",
            "X-ABGMO",
          ],
        },
        {
          tabName: "Energies",
          instruments: ["X-AASHY", "X-AAPGW", "X-AAYIN", "X-AAPHT"],
        },
        {
          tabName: "Metals",
          instruments: ["X-AAPAG", "X-AAZUO", "X-ABAHG"],
        },
      ],
    };

    const [activeTab, setActiveTab] = useState("Forex");

    return (
      <section ref={ref} className="relative">
        <Lines left />
        <div className="main-xl-container">
          <div className="flex flex-col lg:flex-row lg:gap-x-16">
            <div className="mb-[120px] lg:w-5/12 lg:mb-0">
              <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
                MT4 markets <span className="md:block">and costs</span>
              </h2>
              <p className="text-xl">
                Access tight spreads on over 175 forex pairs and all the key
                indices and commodities. Minimum spreads on FX start from just{" "}
                {""}
                {constants.DIDS.GLOBAL_FOREX_MIN_SPREAD} pips through our
                standard spread betting and CFD trading accounts. Or, enjoy
                ultra-tight spreads from 0.0 pips on six major FX pairs with our
                FX Active account.
              </p>
            </div>

            <div className="lg:w-7/12">
              {/* Mobile dropdown for Tables */}
              <Select
                value={activeTab}
                onValueChange={(field) => setActiveTab(field)}
              >
                <SelectTrigger className="mb-10 flex w-full max-w-sm lg:hidden">
                  <SelectValue placeholder="Select market" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Forex">Forex</SelectItem>
                  <SelectItem value="Indices">Indices</SelectItem>
                  <SelectItem value="Commodities">Commodities</SelectItem>
                </SelectContent>
              </Select>

              {/* Desktop Tabs for Tables */}
              <Tabs value={activeTab}>
                <TabsList className="mb-5 hidden gap-x-2 bg-transparent lg:inline-flex">
                  <TabsTrigger
                    value="Forex"
                    onClick={() => setActiveTab("Forex")}
                  >
                    Forex
                  </TabsTrigger>
                  <TabsTrigger
                    value="Indices"
                    onClick={() => setActiveTab("Indices")}
                  >
                    Indices
                  </TabsTrigger>
                  <TabsTrigger
                    value="Commodities"
                    onClick={() => setActiveTab("Commodities")}
                  >
                    Commodities
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="w-full"
                  value="Forex"
                  forceMount={true}
                  hidden={activeTab !== "Forex"}
                >
                  <InstrumentsTable
                    loadMoreEnabled={false}
                    searchEnabled={false}
                    tabStyle="flat"
                    instrumentDataType="MT4"
                    columns={forexInstrumentMapping.columns}
                    instrumentMappings={forexInstrumentMapping.instruments}
                  />
                </TabsContent>
                <TabsContent
                  className="w-full"
                  value="Indices"
                  forceMount={true}
                  hidden={activeTab !== "Indices"}
                >
                  <InstrumentsTable
                    loadMoreEnabled={true}
                    searchEnabled={false}
                    tabStyle="flat"
                    instrumentDataType="MT4"
                    columns={indicesInstrumentMapping.columns}
                    instrumentMappings={indicesInstrumentMapping.instruments}
                  />
                </TabsContent>
                <TabsContent
                  className="w-full"
                  value="Commodities"
                  forceMount={true}
                  hidden={activeTab !== "Commodities"}
                >
                  <InstrumentsTable
                    loadMoreEnabled={false}
                    searchEnabled={false}
                    tabStyle="flat"
                    instrumentDataType="MT4"
                    columns={commoditiesInstrumentMapping.columns}
                    instrumentMappings={
                      commoditiesInstrumentMapping.instruments
                    }
                  />
                </TabsContent>
              </Tabs>

              <p className="pt-10 text-sm text-navy-40">
                A minimum spread is the lowest spread that will be shown on the
                given product. Minimum spread will vary subject to after-hours
                trading. If the underlying market spread widens throughout the
                trading day, or you are trading out of hours, the platform
                spread may also widen. The spreads shown are for the first price
                available for the average market trade/bet sizes in the relevant
                product. The spread will widen for larger trade/bet sizes, see
                our platform for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

MarketsAndCosts.displayName = "MarketsAndCosts";
export default MarketsAndCosts;
