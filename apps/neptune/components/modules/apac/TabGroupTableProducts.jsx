import { useState } from "react";
import { TabGroup, TabGroupSelect } from "../complex/TabGroup";
import { TableGenerator } from "../complex/TableGenerator";
import Utils from "@/lib/apac/utils";

export default function TabGroupTableProducts() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const tabs = [
    "Domestic Shares",
    "International Shares",
    "ETFs",
    "Crypto",
    "Options",
    "Warrants",
  ];

  return (
    <section className="overflow-hidden py-12 md:py-20">
      <div className="mx-auto w-[1280px] max-w-full px-4 md:px-8">
        <TabBar
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
        <div className="border-blue rounded-bl-2xl rounded-br-2xl border-4 border-t-0 p-4 md:p-8">
          {activeTabIndex === 0 && <div>Domestic shares</div>}
          {activeTabIndex === 1 && (
            <div>
              <div className="-mx-3 flex flex-wrap md:-mx-6">
                <div className="w-full px-3 md:w-6/12 md:px-6">
                  <span className="mb-2 block text-2xl leading-none md:text-4xl md:leading-tight">
                    Why invest in international shares?
                  </span>
                  <span className="mb-4 block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam congue feugiat imperdiet. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Ut sit amet euismod tortor, ac efficitur lacus.
                    Mauris ut lobortis elit. Quisque facilisis libero eu nisi
                    consectetur suscipit.
                  </span>
                  <span className="block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam congue feugiat imperdiet. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Ut sit amet euismod tortor, ac efficitur lacus.
                    Mauris ut lobortis elit. Quisque facilisis libero eu nisi
                    consectetur suscipit.
                  </span>
                </div>
                <div className="mt-4 w-full px-3 md:mt-0 md:w-6/12 md:px-6">
                  <div className="relative w-full overflow-hidden rounded-xl">
                    <div className="absolute top-0 left-0 h-full w-full">
                      <iframe
                        className="absolute top-0 left-0 h-full w-full"
                        src="https://www.youtube-nocookie.com/embed/[video-id]?rel=0&controls=0&showinfo=0"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className="pb-[56.25%]"></div>
                  </div>
                </div>
              </div>
              <div className="mb-8"></div>
              <span className="mb-2 block text-2xl leading-none md:text-4xl md:leading-tight">
                See how our U.S. brokerage compares
              </span>
              <span className="block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue feugiat imperdiet. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Ut sit
                amet euismod tortor, ac efficitur lacus. Mauris ut lobortis
                elit. Quisque facilisis libero eu nisi consectetur suscipit.
              </span>
              <div className="mb-4"></div>
              <BrokerageTable />
              <span className="mt-4 block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue feugiat imperdiet. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Ut sit
                amet euismod tortor, ac efficitur lacus. Mauris ut lobortis
                elit. Quisque facilisis libero eu nisi consectetur suscipit.
              </span>
              <div className="mt-6 text-center text-sm md:text-base">
                <a
                  href="#"
                  className="bg-blue relative inline-block rounded-full border-2 border-transparent py-3 px-4 leading-none text-white no-underline"
                >
                  Learn more about International Shares
                </a>
              </div>
            </div>
          )}
          {activeTabIndex === 2 && <div>ETFs</div>}
          {activeTabIndex === 3 && <div>Crypto</div>}
          {activeTabIndex === 4 && <div>Options</div>}
          {activeTabIndex === 5 && <div>Warrants</div>}
        </div>
      </div>
    </section>
  );
}

function BrokerageTable({}) {
  const tableDataCols = [
    {
      label: "Trade ($AUD)",
      sortable: false,
      thousandsSeparator: true,
      prefix: "$",
    },
    { label: "CMC Invest", sortable: false, highlight: true, rounded: true },
    { label: "CommSec", sortable: false },
    { label: "NabTrade", sortable: false },
    { label: "Stake", sortable: false },
  ];

  const tableData = [
    [1000, "Data", "Data", "Data", "Data"],
    [10000, "Data", "Data", "Data", "Data"],
    [15000, "Data", "Data", "Data", "Data"],
  ];

  return (
    <TableGenerator
      data={tableData}
      dataCols={tableDataCols}
      minTableWidth={600}
      paging={{ show: -1 }}
      coreStyles={{
        container: "relative flex bg-blue/25 rounded-xl overflow-hidden",
        tableHeading: "select-none font-bold px-4 py-3 text-sm",
        tableData: "px-4 py-4",
        border: "border-b border-black/25",
      }}
      stickyStyles={{
        container: "relative flex-grow-0 flex-shrink-0 basis-[170px]",
        columnShadow: "",
      }}
    />
  );
}

function TabBar({ tabs, activeTabIndex, setActiveTabIndex }) {
  return (
    <div className="bg-blue rounded-tl-xl rounded-tr-xl px-0 md:px-4">
      <div className="block md:hidden">
        <TabGroupSelect
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
          chevronIcon={Utils.cdnImage("icon-chevron-down-white.svg")}
          classes={{
            container: "relative flex flex-wrap text-sm md:text-base",
            select:
              "w-full py-3 pl-4 appearance-none outline-none text-white bg-transparent",
            option: "text-black bg-white",
            chevron: "w-3 h-3",
          }}
        />
      </div>
      <div className="hidden md:block">
        <TabGroup
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
          classes={{
            container: "flex -mr-2 overflow-x-auto",
            tabOuter: "pr-2 select-none",
            tabInner:
              "px-4 py-2 cursor-pointer text-white underline-offset-2 whitespace-nowrap",
            tabActive: "underline",
            tabInactive: "",
          }}
        />
      </div>
    </div>
  );
}
