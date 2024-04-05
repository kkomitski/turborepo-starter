import PropTypes from "prop-types";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const InstrumentTable = ({
  instrumentData,
  columns,
  sortColumn,
  sortDirection,
  handleSort,
  expandTable,
}) => {
  return (
    <div>
      <div className="mb-3 flex items-center justify-end text-[8px] uppercase text-[#2A51D9] md:hidden">
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6667 23.4166L8 16.7499M8 16.7499L14.6667 10.0833M8 16.7499L24 16.7499"
            stroke="#2A51D9"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="mt-0.5">swipe</span>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.3333 10.0833L24 16.7499M24 16.7499L17.3333 23.4166M24 16.7499L8 16.7499"
            stroke="#2A51D9"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="comp-table-container relative -mr-6 lg:mr-0">
        {instrumentData &&
          instrumentData.length > 0 &&
          instrumentData.map((tab) => (
            <div className={tab.isActive ? "" : "hidden"} key={tab.tabName}>
              <div
                className={
                  "relative " +
                  (!tab.loadMoreEnabled || (tab.loadMore && tab.loadMoreEnabled)
                    ? ""
                    : " load-more-cover")
                }
                key={tab.tabName}
              >
                <table className="comp-table w-full stroke-navy-100 pr-6 text-navy-100 dark:stroke-white dark:text-white lg:pr-0">
                  <TableHead
                    columns={tab?.columns ?? columns}
                    sortColumn={sortColumn}
                    sortDirection={sortDirection}
                    onSort={handleSort}
                  />
                  <TableBody
                    tab={tab}
                    columns={tab?.columns ?? columns}
                    sortColumn={sortColumn}
                    sortDirection={sortDirection}
                  />
                </table>
                <div
                  className={
                    "comp-table-load-more absolute bottom-0 z-10 hidden h-12 w-full " +
                    (!tab.loadMoreEnabled ||
                    (tab.loadMore && tab.loadMoreEnabled)
                      ? "md:hidden"
                      : "md:block")
                  }
                ></div>
              </div>
              <div className="-ml-6 lg:ml-0">
                <button
                  className={
                    "btn btn-primary-outline dark:btn-secondary mx-auto mt-8 " +
                    (!tab.loadMoreEnabled ||
                    (tab.loadMore &&
                      tab.loadMoreEnabled &&
                      tab.loadMoreEnabled !== false)
                      ? "hidden"
                      : "")
                  }
                  onClick={() => {
                    expandTable(tab);
                  }}
                >
                  Show more
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

InstrumentTable.propTypes = {
  instrumentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortColumn: PropTypes.string,
  sortDirection: PropTypes.string,
  handleSort: PropTypes.func.isRequired,
  expandTable: PropTypes.func.isRequired,
};

export default InstrumentTable;
