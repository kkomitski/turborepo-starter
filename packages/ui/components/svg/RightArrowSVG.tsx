import React, { PropsWithoutRef, SVGAttributes, SVGProps } from "react";

/**
 * Often used as a right arrow icon with a button
 */
const RightArrowSVG = ({
  width = 14,
  height = 12,
  className = "h-3 w-3.5 shrink-0 basis-3.5 fill-inherit stroke-inherit",
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
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33333 1.16895L13 5.83561M13 5.83561L8.33333 10.5023M13 5.83561L1 5.83561"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrowSVG;
