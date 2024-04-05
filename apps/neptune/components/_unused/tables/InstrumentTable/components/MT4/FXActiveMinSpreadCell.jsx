import PropTypes from "prop-types";
import { minSpreadWithDiscount } from "ui/helpers/instruments";

const FXActiveMinSpreadCell = ({ data }) => {
  return <td>0.0</td>;
};

FXActiveMinSpreadCell.propTypes = {
  data: PropTypes.any,
};

export default FXActiveMinSpreadCell;
