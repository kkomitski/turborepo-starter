import PropTypes from "prop-types";
import {
  holdingCostBuy,
  holdingCostBuyOvernight,
} from "ui/helpers/instruments";

const HoldingCostBuyAO = ({ data }) => {
  return (
    <>
      <td>
        {data ? holdingCostBuy(data.yearlyPercentageBuy) : "-"}{" "}
        <span className="text-xs lowercase">
          {data ? `(${data.yearlyPercentageBuyType})` : ""}
        </span>
      </td>
      <td>
        {data ? holdingCostBuyOvernight(data.yearlyPercentageBuy) : "-"}{" "}
        <span className="text-xs lowercase">
          {data ? `(${data.yearlyPercentageBuyType})` : ""}
        </span>
      </td>
    </>
  );
};

HoldingCostBuyAO.propTypes = {
  data: PropTypes.any,
};

export default HoldingCostBuyAO;
