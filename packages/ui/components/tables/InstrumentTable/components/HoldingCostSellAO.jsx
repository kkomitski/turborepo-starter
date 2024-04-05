import PropTypes from "prop-types";
import {
  holdingCostSell,
  holdingCostSellOvernight,
} from "@/helpers/instruments";

const HoldingCostSellAO = ({ data }) => {
  return (
    <>
      <td>
        {data ? holdingCostSell(data.yearlyPercentageSell) : "-"}{" "}
        <span className="text-xs lowercase">
          {data ? `(${data.yearlyPercentageSellType})` : ""}
        </span>
      </td>
      <td>
        {data ? holdingCostSellOvernight(data.yearlyPercentageSell) : "-"}{" "}
        <span className="text-xs lowercase">
          {data ? `(${data.yearlyPercentageSellType})` : ""}
        </span>
      </td>
    </>
  );
};

HoldingCostSellAO.propTypes = {
  data: PropTypes.any,
};

export default HoldingCostSellAO;
