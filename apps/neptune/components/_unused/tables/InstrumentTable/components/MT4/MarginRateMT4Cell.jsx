import PropTypes from "prop-types";
import { marginRateMT4 } from "ui/helpers/instruments";

const MarginRateMT4Cell = ({ data }) => {
  return <td>{data ? marginRateMT4(data) : "-"}</td>;
};

MarginRateMT4Cell.propTypes = {
  data: PropTypes.any,
};

export default MarginRateMT4Cell;
