import React, { SVGAttributes } from "react";

const TableSortDescSVG = ({
  width = 16,
  height = 16,
  className = "inline stroke-navy-40 align-top",
  ...props
}: {
  width?: number;
  height?: number;
  className?: string;
  props?: SVGAttributes<SVGElement>;
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.57141 4.83545L6.57141 2.83545L8.57141 4.83545"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TableSortDescSVG;
