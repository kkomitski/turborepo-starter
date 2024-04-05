import PropTypes from "prop-types";
import { minSpreadWithDiscount } from "@/helpers/instruments";

const MinSpreadDiscountCell = ({ data }) => {
  return <td>{minSpreadWithDiscount(data)}</td>;
};

MinSpreadDiscountCell.propTypes = {
  data: PropTypes.any,
};

export default MinSpreadDiscountCell;
