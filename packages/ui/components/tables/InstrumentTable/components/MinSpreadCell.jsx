import PropTypes from "prop-types";
import { minSpread } from "@/helpers/instruments";

const MinSpreadCell = ({ data }) => {
  return <td>{minSpread(data)}</td>;
};

MinSpreadCell.propTypes = {
  data: PropTypes.any,
};

export default MinSpreadCell;
