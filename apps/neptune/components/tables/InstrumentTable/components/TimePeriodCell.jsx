import { numberFormatter } from "@/helpers/utils";
import PropTypes from "prop-types";
import { isPositive } from "@/helpers/instruments";
import Image from "next/image";
import { awsImage } from "@/helpers/constants";

const TimePeriodCell = ({ data }) => {
  return (
    <td>
      <div
        className={
          "flex items-center justify-center gap-x-2 " +
          (isNaN(data?.movement)
            ? ""
            : isPositive(data.movement)
            ? "text-green-700"
            : "text-amber-700")
        }
      >
        {data?.movement != null ? (
          <>
            <Image
              width={13}
              height={13}
              src={
                isPositive(data?.movement)
                  ? awsImage("arrow-positive.svg")
                  : awsImage("arrow-negative.svg")
              }
              loading="lazy"
              alt=""
            />
            <span>
              {numberFormatter.doubleDecimal.format(data.movement) + "%"}
            </span>
          </>
        ) : (
          <span>-</span>
        )}
      </div>
    </td>
  );
};

TimePeriodCell.propTypes = {
  data: PropTypes.object,
};

export default TimePeriodCell;
