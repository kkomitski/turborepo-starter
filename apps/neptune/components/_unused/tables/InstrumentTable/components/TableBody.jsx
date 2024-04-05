import TimePeriodCell from "./TimePeriodCell";
import MinSpreadCell from "./MinSpreadCell";
import MinSpreadDiscountCell from "./MinSpreadDiscountCell";
import MarginRateCell from "./MarginRateCell";
import InstrumentNameCell from "./InstrumentNameCell";
import AvgSpreadCell from "./AvgSpreadCell";
import PriceCell from "./PriceCell";
import TrendChart from "./TrendChart";
import HoldingCostBuy from "./HoldingCostBuy";
import HoldingCostSell from "./HoldingCostSell";
import FXActiveMinSpreadCell from "./MT4/FXActiveMinSpreadCell";
import FXActiveCommissionCell from "./MT4/FXActiveCommissionCell";
import MarginRateMT4Cell from "./MT4/MarginRateMT4Cell";
import SpreadDiscountMT4Cell from "./MT4/SpreadDiscountMT4Cell";
import PropTypes from "prop-types";
import {
  marginRate,
  marginRateMT4,
  priceValue,
  holdingCostBuy,
  holdingCostSell,
} from "ui/helpers/instruments";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import CommissionCell from "./CommissionCell";
import HoldingCostBuyAO from "./HoldingCostBuyAO";
import HoldingCostSellAO from "./HoldingCostSellAO";
import SpreadDiscountCell from "./SpreadDiscount";
import { numberFormatter } from "ui/helpers/utils";

const getColumnValue = (data, column) => {
  switch (column) {
    case "Product":
      return data.everything?.instrument?.abbreviation;
    case "Price":
      return priceValue(data?.everything?.price, true, 2, true);
    case "Min Spread":
      return data?.instrumentInfo?.minimumSpread;
    case "Min Spread Discount":
      return data?.instrumentInfo?.minimumSpread;
    case "Avg Spread":
      return null;
    case "Commission":
      return 0;
    case "Margin":
      return marginRate(data?.instrumentInfo?.marginRate, true);
    case "Day":
      return data?.priceChange
        ? numberFormatter.doubleDecimal.format(
            data?.priceChange["1day"]?.movement
          )
        : "-";
    case "Week":
      return data?.priceChange
        ? numberFormatter.doubleDecimal.format(
            data?.priceChange?.week?.movement
          )
        : "-";
    case "Month":
      return data?.priceChange
        ? numberFormatter.doubleDecimal.format(
            data?.priceChange?.["1month"]?.movement
          )
        : "-";
    case "Year":
      return data?.priceChange
        ? numberFormatter.doubleDecimal.format(
            data?.priceChange?.year?.movement
          )
        : "-";
    case "FX Active Min Spread":
      return data?.instrumentInfo?.minimumSpread;
    case "Margin MT4":
      return marginRateMT4(data?.instrumentInfo?.marginRate, true);
    case "Holding Cost Buy":
      return holdingCostBuy(
        data?.instrumentInfo?.lastHoldingRate.yearlyPercentageBuy,
        true
      );
    case "Holding Cost Sell":
      return holdingCostSell(
        data?.instrumentInfo?.lastHoldingRate.yearlyPercentageSell,
        true
      );
    case "Holding Cost Buy AO":
      return holdingCostBuy(
        data?.instrumentInfo?.lastHoldingRate.yearlyPercentageBuy,
        true
      );
    case "Holding Cost Sell AO":
      return holdingCostSell(
        data?.instrumentInfo?.lastHoldingRate.yearlyPercentageSell,
        true
      );
    case "original":
      return data.order;
    default:
      return null;
  }
};

const TableBody = ({ tab, columns, sortColumn, sortDirection }) => {
  const sortedData = tab.instruments.slice(); // Create a copy of the original data

  if (sortColumn) {
    sortedData.sort((a, b) => {
      if (sortDirection !== "original") {
        const valueA = getColumnValue(a, sortColumn);
        const valueB = getColumnValue(b, sortColumn);

        if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
        if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
        return 0;
      } else if (sortDirection === "original") {
        const valueA = getColumnValue(a, "order");
        const valueB = getColumnValue(b, "order");

        if (valueA < valueB) return sortDirection === null ? -1 : 1;
        if (valueA > valueB) return sortDirection === null ? 1 : -1;
        return 0;
      }
    });
  }

  return (
    <tbody className="text-center">
      {sortedData.map((data) => (
        <tr key={data?.instrumentCode}>
          {columns.map((column) => {
            switch (column.name) {
              case "Product":
                return (
                  <InstrumentNameCell
                    key={column.name}
                    data={data}
                  ></InstrumentNameCell>
                );
              case "Price":
                return (
                  <PriceCell
                    key={column.name}
                    data={data?.everything?.price}
                  ></PriceCell>
                );
              case "Min Spread":
                return (
                  <MinSpreadCell
                    key={column.name}
                    data={data?.instrumentInfo?.minimumSpread}
                  ></MinSpreadCell>
                );

              case "Min Spread Discount":
                return (
                  <MinSpreadDiscountCell
                    key={column.name}
                    data={data?.instrumentInfo?.minimumSpread}
                  ></MinSpreadDiscountCell>
                );
              case "Avg Spread":
                return (
                  <AvgSpreadCell key={column.name} data={null}></AvgSpreadCell>
                );
              case "Commission":
                return <CommissionCell key={column.name}></CommissionCell>;
              case "Margin":
                return (
                  <MarginRateCell
                    key={column.name}
                    data={data?.instrumentInfo?.marginRate}
                    options={column.options}
                  ></MarginRateCell>
                );
              case "Day":
                return (
                  <TimePeriodCell
                    key={column.name}
                    data={data?.priceChange?.["1day"]}
                  ></TimePeriodCell>
                );
              case "Week":
                return (
                  <TimePeriodCell
                    key={column.name}
                    data={data?.priceChange?.week}
                  ></TimePeriodCell>
                );
              case "Month":
                return (
                  <TimePeriodCell
                    key={column.name}
                    data={data?.priceChange?.["1month"]}
                  ></TimePeriodCell>
                );
              case "Year":
                return (
                  <TimePeriodCell
                    key={column.name}
                    data={data?.priceChange?.year}
                  ></TimePeriodCell>
                );
              case "Holding Cost Buy":
                return (
                  <HoldingCostBuy
                    key={column.name}
                    data={data?.instrumentInfo?.lastHoldingRate}
                  ></HoldingCostBuy>
                );
              case "Holding Cost Sell":
                return (
                  <HoldingCostSell
                    key={column.name}
                    data={data?.instrumentInfo?.lastHoldingRate}
                  ></HoldingCostSell>
                );
              case "Holding Cost Buy AO":
                return (
                  <HoldingCostBuyAO
                    key={column.name}
                    data={data?.instrumentInfo?.lastHoldingRate}
                  ></HoldingCostBuyAO>
                );
              case "Holding Cost Sell AO":
                return (
                  <HoldingCostSellAO
                    key={column.name}
                    data={data?.instrumentInfo?.lastHoldingRate}
                  ></HoldingCostSellAO>
                );
              case "Trend":
                return (
                  <TrendChart
                    key={column.name}
                    data={data}
                    tabName={tab.tabName}
                  />
                );
              case "FX Active Min Spread":
                return (
                  <FXActiveMinSpreadCell
                    key={column.name}
                    data={data?.instrumentInfo?.minimumSpread}
                  />
                );
              case "FX Active Commission":
                return <FXActiveCommissionCell key={column.name} />;
              case "Margin MT4":
                return (
                  <MarginRateMT4Cell
                    key={column.name}
                    data={data?.instrumentInfo?.marginRate}
                  ></MarginRateMT4Cell>
                );
              case "Spread Discount":
                return (
                  <SpreadDiscountCell key={column.name}></SpreadDiscountCell>
                );
              case "Spread Discount MT4":
                return (
                  <SpreadDiscountMT4Cell
                    key={column.name}
                  ></SpreadDiscountMT4Cell>
                );
              case "Overview":
                return (
                  <td key={column.name}>
                    {data.description ? (
                      <Tippy content={data.description}>
                        <div className="flex items-center justify-center">
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.125 16H12.125V12H11.125M12.125 8H12.135M21.125 12C21.125 16.9706 17.0956 21 12.125 21C7.15444 21 3.125 16.9706 3.125 12C3.125 7.02944 7.15444 3 12.125 3C17.0956 3 21.125 7.02944 21.125 12Z"
                              stroke="#101626"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Tippy>
                    ) : (
                      <div></div>
                    )}
                  </td>
                );
              default:
                return null;
            }
          })}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  tab: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.string,
  sortDirection: PropTypes.oneOf(["asc", "desc"]),
};

export default TableBody;
