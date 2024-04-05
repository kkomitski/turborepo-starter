import constants, { getApiKey } from "ui/helpers/constants";
import { Instrument, InstrumentDataType, Tab } from "../InstrumentTableTypes";

/**
 * Returns the endpoint extension for the instrument data type
 */
export const instrumentDataTypeUrlExtension = (
  dataType: InstrumentDataType
) => {
  return dataType === "MT4" ? "_gb-mt4.json" : "_gb.json";
};

export const getEverythingEndpoint = (apiCode: string) => {
  return `${
    constants.endpoints.instruments.getEverything
  }/${apiCode}?key=${getApiKey()}`;
};

export const getInfoEndpoint = (apiCode: string, extension: string) => {
  return `${constants.endpoints.instruments.instruments}${apiCode}${extension}`;
};

export const getPriceChangeEndpoint = (apiCode: string) => {
  return `${
    constants.endpoints.instruments.priceChange
  }/${apiCode}?key=${getApiKey()}`;
};

export const updateTabbedInstrumentData = (
  prev: Array<Tab>,
  tab: Tab,
  newInstrumentData: Instrument
) => {
  const updatedTabs = prev.map((existingTab) => {
    if (existingTab.tabName === tab.tabName) {
      const updatedInstruments = existingTab.instruments.map(
        (existingInstrument) => {
          if (
            existingInstrument.instrumentCode ===
            newInstrumentData.instrumentCode
          ) {
            return newInstrumentData;
          }
          return existingInstrument;
        }
      );

      return {
        ...existingTab,
        instruments: updatedInstruments,
      };
    }
    return existingTab;
  });

  return updatedTabs;
};
