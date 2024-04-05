import PropTypes from "prop-types";
import constants from "@/helpers/constants";

const InstrumentNameCell = ({ data }) => {
  const removeCashString = (string) => {
    return string.replace(" - Cash", "");
  };
  return (
    <td className="text-left">
      {data?.everything?.instrument?.abbreviation ||
      data?.everything?.instrument?.name ? (
        <a
          className="w-[45vw] sm:w-[30vw] flex items-center gap-x-2.5 whitespace-pre-wrap text-wrap stroke-navy-100 dark:stroke-white-95 lg:w-auto"
          target="_blank"
          rel="noreferrer"
          href={constants.endpoints.instruments.url + data?.instrumentInfo?.url}
        >
          <span>
            {data?.everything?.instrument?.name
              ? removeCashString(data.everything.instrument.name)
              : removeCashString(data?.everything?.instrument?.abbreviation)}
          </span>
        </a>
      ) : (
        <span>-</span>
      )}
    </td>
  );
};

InstrumentNameCell.propTypes = {
  data: PropTypes.object.isRequired,
};

export default InstrumentNameCell;
