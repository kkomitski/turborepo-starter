import PropTypes from "prop-types";
import { marginRate } from "@/helpers/instruments";

const MarginRateCell = ({ data, options }) => {
  const decimals = options?.decimal ?? 2;
  return <td>{data ? marginRate(data, false, decimals) : "-"}</td>;
};

MarginRateCell.propTypes = {
  data: PropTypes.any,
  options: PropTypes.object,
};

export default MarginRateCell;
