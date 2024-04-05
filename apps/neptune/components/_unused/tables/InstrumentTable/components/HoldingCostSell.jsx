import PropTypes from "prop-types";
import { holdingCostSell } from "ui/helpers/instruments";

const HoldingCostSell = ({ data }) => {
  return (
    <td>
      {data ? holdingCostSell(data.yearlyPercentageSell) : "-"}{" "}
      <span className="text-xs lowercase">
        {data ? `(${data.yearlyPercentageSellType})` : ""}
      </span>
    </td>
  );
};

HoldingCostSell.propTypes = {
  data: PropTypes.any,
};

export default HoldingCostSell;
