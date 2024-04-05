import PropTypes from "prop-types";
import { holdingCostBuy } from "@/helpers/instruments";

const HoldingCostBuy = ({ data }) => {
  return (
    <td>
      {data ? holdingCostBuy(data.yearlyPercentageBuy) : "-"}{" "}
      <span className="text-xs lowercase">
        {data ? `(${data.yearlyPercentageBuyType})` : ""}
      </span>
    </td>
  );
};

HoldingCostBuy.propTypes = {
  data: PropTypes.any,
};

export default HoldingCostBuy;
