"use client";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import InstrumentTabs from "./components/InstrumentTabs";
import InstrumentTable from "./components/InstrumentTable";
import { requirePriceEndPoint } from "@/helpers/instruments";
import {
  getEverythingEndpoint,
  getInfoEndpoint,
  getPriceChangeEndpoint,
  instrumentDataTypeUrlExtension,
  updateTabbedInstrumentData,
} from "./components/TableDataService";
import {
  ColumnDirection,
  ColumnMapping,
  ColumnTypes,
  Instrument,
  InstrumentDataType,
  InstrumentMapping,
  SearchType,
  Tab,
  TabStyle,
} from "./InstrumentTableTypes";
import InstrumentsSearch from "../../../components/widgets/InstrumentsSearch/InstrumentsSearch";

const InstrumentsTable = ({
  instrumentMappings,
  columns,
  loadMoreEnabled = false,
  instrumentDataType = "default",
  tabStyle = "default",
  searchType = null,
  searchEnabled = false,
  instrumentTooltips,
  searchPlaceHolderText = "Search 12,000 instruments",
}: {
  instrumentMappings: Array<InstrumentMapping>;
  columns: ColumnMapping[];
  loadMoreEnabled?: Boolean;
  instrumentDataType?: InstrumentDataType;
  type?: InstrumentDataType;
  tabStyle?: TabStyle;
  searchType?: SearchType | null;
  searchEnabled?: Boolean;
  instrumentTooltips?: Array<any>;
  searchPlaceHolderText?: string;
}) => {
  // Get the description for an instrument by its API code
  // (ideally we want descriptions to come from cupcake in the future)
  // REMINDER: UPDATE ANY TYPE LATER
  const getDescriptionByApiCode = (instrumentCode: string) => {
    if (instrumentTooltips) {
      const matchingData = instrumentTooltips.find(
        (item: any) => item.apiCode === instrumentCode
      );
      return matchingData?.description ?? null;
    }
  };

  const [selectedTab, setSelectedTab] = useState("");
  const initialData: Array<Tab> = instrumentMappings.map((mapping, index) => ({
    tabName: mapping.tabName !== undefined ? mapping.tabName : `Tab${index}`,
    loadMoreEnabled:
      mapping.loadMoreEnabled !== undefined
        ? mapping.loadMoreEnabled
        : loadMoreEnabled,
    loadMore: false,
    isActive: false,
    tooltip: false,
    toggleTipEnabled: false,
    columns: mapping.columns,
    instruments: mapping.instruments.map((instrument) => ({
      description: getDescriptionByApiCode(instrument),
      instrumentCode: instrument,
      instrumentInfo: null,
      everything: null,
      priceChange: null,
      dataFetched: false,
    })),
  }));

  const [instrumentData, setInstrumentData] = useState<Tab[]>(initialData);

  // Table sorting
  const [sortColumn, setSortColumn] = useState<ColumnTypes | null>(null);
  const [sortDirection, setSortDirection] = useState<ColumnDirection | null>(
    null
  );

  // Sorting of table columns when clicking on the column header
  const handleSort = (column: ColumnTypes) => {
    if (sortColumn === column) {
      // If the same column is clicked, toggle the sort direction
      setSortDirection((prevDirection) =>
        prevDirection === "asc"
          ? "desc"
          : prevDirection === "desc"
          ? "original"
          : "asc"
      );
    } else {
      // If a new column is clicked, set the new sort column and default sort direction
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Expand table when clicking on the "show more button"
  const expandTable = (tab: Tab) => {
    const updatedInstrumentData = instrumentData.map((instrumentTab) =>
      instrumentTab.tabName === tab.tabName
        ? { ...instrumentTab, loadMore: true }
        : instrumentTab
    );

    setInstrumentData(updatedInstrumentData);
  };

  // Fetches the instrument data from the 3 API endpoints and updates each instrument object
  // each time an endpoint returns data
  const fetchInstrumentData = async (tab: Tab) => {
    const fetchedInstrumentsData = await Promise.all(
      tab.instruments.map(async (instrument, index) => {
        if (instrument.dataFetched) {
          return instrument;
        }

        const newInstrumentData: Instrument = {
          ...instrument,
          instrumentInfo: null,
          everything: null,
          priceChange: null,
          dataFetched: true,
          order: index,
        };

        try {
          // Fetch the instrument info
          const instrumentInfoResponse = await fetch(
            getInfoEndpoint(
              instrument.instrumentCode,
              instrumentDataTypeUrlExtension(instrumentDataType)
            )
          );
          const instrumentInfoJson = await instrumentInfoResponse.json();
          newInstrumentData.instrumentInfo = instrumentInfoJson;

          setInstrumentData((prev) => {
            return [
              ...updateTabbedInstrumentData(prev, tab, newInstrumentData),
            ];
          });

          // Fetch from the instrument "everything" endpoint
          const instrumentEverythingResponse = await fetch(
            getEverythingEndpoint(instrument.instrumentCode)
          );

          const instrumentEverythingJson =
            await instrumentEverythingResponse.json();
          newInstrumentData.everything = instrumentEverythingJson;
          newInstrumentData.dataFetched = true;

          setInstrumentData((prev) => {
            return [
              ...updateTabbedInstrumentData(prev, tab, newInstrumentData),
            ];
          });

          const callPriceEndpoint = requirePriceEndPoint(tab, columns);

          if (callPriceEndpoint) {
            // Fetch from the instrument price endpoint
            const instrumentPriceChangeResponse = await fetch(
              getPriceChangeEndpoint(instrument.instrumentCode)
            );
            const instrumentPriceChangeJson =
              await instrumentPriceChangeResponse.json();
            newInstrumentData.priceChange =
              instrumentPriceChangeJson[instrument.instrumentCode];

            setInstrumentData((prev) => {
              return [
                ...updateTabbedInstrumentData(prev, tab, newInstrumentData),
              ];
            });
          }
        } catch (error) {
          console.error(
            "Error fetching data for instrument:",
            instrument.instrumentCode,
            error
          );
        }

        return newInstrumentData;
      })
    );

    return { ...tab, instruments: fetchedInstrumentsData };
  };

  const tableElement = useRef(null);

  useEffect(() => {
    // Fetch instrument data for the active tab
    const fetchData = async () => {
      const activeTab: Tab | undefined = instrumentData.find(
        (tab) => tab.isActive
      ); // Find the active tab
      if (activeTab === undefined) return;
      await fetchInstrumentData(activeTab);
    };

    // Initialise fetching of data when scrolled into view
    if (tableElement.current) {
      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observerCallback = (
        entries: Array<IntersectionObserverEntry>,
        observer: IntersectionObserver
      ) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            fetchData();
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      observer.observe(tableElement.current);

      return () => {
        observer.disconnect();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  return (
    <div ref={tableElement} className="instruments-table">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-8">
        <div className="order-2 w-full lg:order-1">
          <InstrumentTabs
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            setInstrumentData={setInstrumentData}
            instrumentData={instrumentData}
            instrumentMappings={instrumentMappings}
            tabStyle={tabStyle}
          ></InstrumentTabs>
        </div>
        {searchEnabled && (
          <div className="xs:max-w-[360px] order-1 mb-8 w-full lg:order-2 lg:mb-0">
            <InstrumentsSearch
              searchType={searchType}
              placeholderText={searchPlaceHolderText}
            />
          </div>
        )}
      </div>

      <InstrumentTable
        instrumentData={instrumentData}
        columns={columns}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        handleSort={handleSort}
        expandTable={expandTable}
      />
    </div>
  );
};

export default InstrumentsTable;
