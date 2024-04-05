import React from "react";
import PropTypes from "prop-types";

const TableHead = ({ columns, sortColumn, sortDirection, onSort }) => {
  const handleSort = (column) => {
    if (onSort && isSortable(column)) {
      onSort(column);
    }
  };

  const hasAnyMultipleColSpans = (columns) => {
    let hasAnyMultiple = false;
    const multipleColSpanColumns = [
      "Holding Cost Buy AO",
      "Holding Cost Sell AO",
    ];
    columns.forEach((column) => {
      if (multipleColSpanColumns.includes(column.name)) {
        hasAnyMultiple = true;
      }
    });
    return hasAnyMultiple;
  };

  const isSortable = (column) => {
    const nonSortableColumns = ["Trend", "Overview"];
    return !nonSortableColumns.includes(column);
  };

  const hasMultipleColSpan = (column) => {
    const multipleColSpanColumns = [
      "Holding Cost Buy AO",
      "Holding Cost Sell AO",
    ];
    return multipleColSpanColumns.includes(column);
  };

  const wrapTextWithLineBreaks = (text) => {
    const lines = text.split("\n");

    return lines.map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          return (
            <th
              className={
                "select-none " +
                (index === 0 ? "lg:w-80 lg:text-left " : "") +
                "text-center " +
                (isSortable(column.name) ? "cursor-pointer " : "") +
                (hasAnyMultipleColSpans(columns) ? "align-baseline" : "")
              }
              key={column.name}
              style={column.name === "Trend" ? { width: "120px" } : null}
              onClick={() => handleSort(column.name)}
              colSpan={hasMultipleColSpan(column.name) ? 2 : 1}
            >
              <div
                className={
                  "flex items-center gap-x-1 text-xxs " +
                  (index === 0 ? "justify-start " : "justify-center")
                }
              >
                <span>
                  {column.nameOverride
                    ? wrapTextWithLineBreaks(column.nameOverride)
                    : wrapTextWithLineBreaks(column.name)}
                </span>
                {isSortable(column.name) && sortColumn === column.name && (
                  <svg
                    className="inline stroke-navy-40 align-top"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {sortDirection === "asc" ? (
                      <path
                        d="M8.57141 7.83545L6.57141 9.83545L4.57141 7.83545"
                        stroke="inherit"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ) : sortDirection === "desc" ? (
                      <path
                        d="M4.57141 4.83545L6.57141 2.83545L8.57141 4.83545"
                        stroke="inherit"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ) : (
                      <path
                        d="M4.57141 4.83545L6.57141 2.83545L8.57141 4.83545M8.57141 7.83545L6.57141 9.83545L4.57141 7.83545"
                        stroke="inherit"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                )}
                {isSortable(column.name) && sortColumn !== column.name && (
                  <svg
                    className="inline stroke-navy-40 align-top"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.57141 4.83545L6.57141 2.83545L8.57141 4.83545M8.57141 7.83545L6.57141 9.83545L4.57141 7.83545"
                      stroke="inherit"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              {hasMultipleColSpan(column.name) ? (
                <div className="flex justify-center text-xxs capitalize">
                  <span className="w-1/2">Annual</span>
                  <span className="w-1/2">Overnight</span>
                </div>
              ) : (
                <div></div>
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.string,
  sortDirection: PropTypes.oneOf(["asc", "desc"]),
  onSort: PropTypes.func,
};

export default TableHead;
