// @ts-nocheck

import Big from "big.js";
import { numberFormatter } from "./utils";

export const requirePriceEndPoint = (tab, globalColumns) => {
  // First check if the actual tab has specific columns
  const containsDayOrWeek = (tab) => {
    if (tab.columns && tab.columns.length > 0) {
      for (const column of tab.columns) {
        if (column.name === "Day" || column.name === "Week") {
          return true;
        }
      }
      return false;
    }
    return null;
  };

  let callPriceEndpoint = containsDayOrWeek(tab);

  // If columns are not assigned on a tab level, check on a global level
  if (callPriceEndpoint === null) {
    return globalColumns.some(
      (column) => column.name === "Day" || column.name === "Week"
    );
  }

  return callPriceEndpoint;
};

export const minSpread = (result, apiCode, numFormat = true) => {
  if (result === undefined || result === null) {
    return "-";
  }
  let spreadValue = numFormat
    ? numberFormatter.doubleDecimal.format(result)
    : result;

  // set new value for specific instruments
  if (apiCode) {
    if (apiCode === "X-ABFMY" || apiCode === "X-ANUWM") {
      // US SPX 500 - Cash || US SPX 500 - Mar 2021
      const spxVal = Big(spreadValue).times(0.1).round(1).toNumber();
      spreadValue = numFormat
        ? numberFormatter.singleDecimal.format(spxVal)
        : spxVal;
    }
  }

  return spreadValue;
};

export const marginRate = (marginRate, numberOnly = false, decimals = 0) => {
  if (!marginRate) {
    return "-";
  }
  const value = Big(marginRate[0].rate).times(100).round(decimals).toNumber();
  return numberOnly ? value : `${value}%`;
};

export const marginRateMT4 = (marginRate, numberOnly = false) => {
  if (!marginRate) {
    return "-";
  }
  const value = Big(marginRate[0].rate).times(100).round(3).toNumber();
  return numberOnly ? value : `${value}%`;
};

export const priceValue = (
  data,
  numFormat = true,
  decimals = 2,
  numberOnly = false
) => {
  if (!data) {
    return "-";
  }
  let priceVal = null;
  if (!numberOnly) {
    if (data.buy && data.sell) {
      priceVal = Big(data.buy)?.plus(data.sell).div(2).toNumber();
    }
  } else {
    let buyValue = data.buy;
    let sellValue = data.sell;

    // Handle cases where buy or sell values are not strings
    if (typeof buyValue !== "string") {
      buyValue = String(buyValue);
    }
    if (typeof sellValue !== "string") {
      sellValue = String(sellValue);
    }

    priceVal =
      parseFloat(buyValue.replace(/,/g, "")) +
      parseFloat(sellValue.replace(/,/g, "")) / 2;
  }
  if (numFormat) {
    return decimals === 2
      ? numberFormatter.doubleDecimal.format(priceVal)
      : numberFormatter.fiveDecimal.format(priceVal);
  }
  return priceVal;
};

export const isPositive = (value) => {
  return value > 0 ? true : false;
};

export const minSpreadWithDiscount = (data, apiCode) => {
  const minSpreadDiscountVal = 25 / 100;
  if (data) {
    const minSpreadVal = minSpread(data, apiCode);
    return Big(minSpreadVal - minSpreadVal * minSpreadDiscountVal)
      .round(2)
      .toNumber();
  }

  return "-";
};

export const holdingCostBuy = (data) => {
  if (data) {
    let value = `${Big(data).times(100).abs().toNumber()}%`;
    return value;
  }

  return "-";
};

export const holdingCostSell = (data) => {
  if (data) {
    let value = `${Big(data).times(100).abs().toNumber()}%`;
    return value;
  }

  return "-";
};

export const holdingCostBuyOvernight = (data) => {
  if (data) {
    let value = `${Big(data / 365)
      .times(100)
      .abs()
      .toNumber()
      .toFixed(4)}%`;
    return value;
  }
};

export const holdingCostSellOvernight = (data) => {
  if (data) {
    let value = `${Big(data / 365)
      .times(100)
      .abs()
      .toNumber()
      .toFixed(4)}%`;
    return value;
  }

  return "-";
};
