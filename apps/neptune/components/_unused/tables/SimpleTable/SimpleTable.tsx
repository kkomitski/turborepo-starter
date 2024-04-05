import TableSortAscSVG from "ui/components/svg/Table/TableSortAsc";
import TableSortDescSVG from "ui/components/svg/Table/TableSortDesc";
import TableSortNoneSVG from "ui/components/svg/Table/TableSortNoneSVG";
import React, { ReactNode, useState } from "react";

export type SimpleTableColumn = {
  name: string;
  sortable?: boolean;
  width?: number; // Percentage
};

type RowData = Array<
  Array<{
    content: string | number | ReactNode;
    sortableValue?: string | number;
  }>
>;

type TableProps = {
  columns: SimpleTableColumn[];
  rows: RowData;
};

const SimpleTable = ({ columns, rows }: TableProps) => {
  const [data, setData] = useState<RowData>(rows);
  const [sortConfig, setSortConfig] = useState<{
    id: number | null;
    direction: string;
  }>({
    id: null,
    direction: "asc",
  });

  const defaultColumnWidth = 100 / columns.length;

  const handleSort = (id: number) => {
    let direction = "asc";

    // If the same column is clicked, toggle the direction
    if (sortConfig.id === id) {
      direction = sortConfig.direction === "asc" ? "desc" : "asc";
    }

    // Reset sorting on the third click
    if (sortConfig.id === id && direction === "asc") {
      setSortConfig({ id: null, direction: "asc" });
      setData(rows); // Reset data to its original order
      return;
    }

    setSortConfig({ id, direction });

    const sortedData = [...data].sort((a, b) => {
      // If sortableValue is not defined, use content instead (as fallback)
      const aSortableValue = a[id].sortableValue || a[id].content;
      const bSortableValue = b[id].sortableValue || b[id].content;
      // If either sortableValue is null, return 0
      if (aSortableValue == null || bSortableValue == null) return 0;
      // Sort by sortableValue
      if (aSortableValue < bSortableValue) return direction === "asc" ? -1 : 1;
      if (aSortableValue > bSortableValue) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  return (
    <>
      {" "}
      <div className="flex items-center justify-end text-[8px] uppercase text-[#2A51D9] md:hidden">
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
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  className={column.sortable ? "sortable" : ""}
                  key={column.name}
                  onClick={() => column.sortable && handleSort(index)}
                  style={{
                    width: `${column.width}%` ?? `${defaultColumnWidth}%`,
                  }}
                >
                  <div className="th-container">
                    {column.name}
                    {column.sortable && sortConfig.id === index && (
                      <>
                        {sortConfig.direction === "asc" ? (
                          <TableSortAscSVG />
                        ) : sortConfig.direction === "desc" ? (
                          <TableSortDescSVG />
                        ) : (
                          <TableSortAscSVG />
                        )}
                      </>
                    )}
                    {column.sortable && sortConfig.id !== index && (
                      <TableSortNoneSVG />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, index) => (
                  <td key={index}>{row[index].content}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SimpleTable;
