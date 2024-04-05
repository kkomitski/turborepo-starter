import { ReactNode } from "react";

// The direction of the column (e.g. asc, desc, revert to original)
export type ColumnDirection = "asc" | "desc" | "original";

/**
 * The object provided as a component prop to define the columns in the table (e.g. Product, Min Spread, etc.)
 */
export type ColumnTypes =
  | "Product"
  | "Min Spread"
  | "Min Spread (MT4)"
  | "Margin"
  | "Price"
  | "Day"
  | "Week"
  | "Trend";

/**
 * The object provided as a component prop to define the instruments in the table.
 * You can optionally provide columns if you want this to be different from the default.
 * Example: {
 *  tabName: "Forex",
 *   instruments: ["X-123", "X-345", "X-567"],
 *   loadMoreEnabled: true,
 *   columns: [
 *       { name: "Product" },
 *       { name: "Min Spread" },
 *       { etc }
 *  }
 */
export type InstrumentMapping = {
  tabName: string;
  instruments: Array<string>;
  loadMoreEnabled?: Boolean;
  columns?: ColumnMapping[];
};

/**
 * The object provided as a component prop to define the columns in the table (e.g. Product, Min Spread, etc.)
 * nameOverride can be used to override the column label
 */
export type ColumnMapping = {
  name:
    | "Product"
    | "Price"
    | "Min Spread"
    | "Min Spread Discount"
    | "Avg Spread"
    | "Commission"
    | "Margin"
    | "Day"
    | "Week"
    | "Month"
    | "Year"
    | "Trend"
    | "FX Active Min Spread"
    | "FX Active Commission"
    | "Margin MT4"
    | "Holding Cost Buy"
    | "Holding Cost Sell"
    | "Holding Cost Buy AO"
    | "Holding Cost Sell AO"
    | "Spread Discount"
    | "Spread Discount MT4"
    | "Overview";
  nameOverride?: string;
  options?: {
    decimal?: number;
  };
};

// The object used to provide the core data to the table (e.g. columns, instruments, tooltips)
// This is placed on the page itself and passed to the instrument table component as a prop
export type InstrumentTableMapping = {
  columns: ColumnMapping[];
  instruments: InstrumentMapping[];
  instrumentTooltips?: InstrumentTooltips[];
};

// As tooltip data is not pulled from the API, we need to map the tooltips to the instruments
export type InstrumentTooltips = {
  apiCode: string;
  description: string | ReactNode;
};

export type Tab = {
  tabName: string;
  loadMoreEnabled: Boolean;
  loadMore: Boolean;
  isActive: Boolean;
  tooltip: Boolean;
  toggleTipEnabled: Boolean;
  columns: ColumnMapping[] | undefined;
  instruments: Array<Instrument>;
};

export type Instrument = {
  dataFetched: Boolean;
  instrumentCode: string;
  instrumentInfo: Object | null;
  everything: InstrumentEverythingData | null;
  priceChange: Object | null;
  description: string | null;
  order?: number | null;
};

export type InstrumentEverythingData = {
  prices?: Array<{
    c: number; // Close
    h: number; // High
    l: number; // Low
    o: number; // Open
    t: string; // Timestamp
  }>;
};

/**
 * Provides the type of data to be fetched for the instrument/
 * Usually MT4 is only used on MT4 pages
 */
export type InstrumentDataType = "MT4" | "default";
export type InstrumentDataTypeEndpointExtension = "_gb.json" | "_gb-mt4.json";

/**
 * Changes the style of the tabs
 */
export type TabStyle = "default" | "flat";

/**
 * Filters the search dropdown by the type of instrument
 */
export type SearchType =
  | "indices"
  | "forex"
  | "commodities"
  | "shares"
  | "share baskets"
  | "treasuries"
  | "etfs"
  | "currencies";
