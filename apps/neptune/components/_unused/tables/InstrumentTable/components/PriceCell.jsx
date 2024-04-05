import PropTypes from "prop-types";
import { priceValue } from "ui/helpers/instruments";

const PriceCell = ({ data }) => {
  // Check if data is an object and not an empty array as data sometimes comes invalid from API
  if (typeof data === "object" && !Array.isArray(data) && data !== null) {
    return <td>{priceValue(data)}</td>;
  }

  return <td>-</td>;
};

PriceCell.propTypes = {
  data: PropTypes.object,
};

export default PriceCell;
