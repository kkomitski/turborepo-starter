import React, { PropsWithoutRef, SVGAttributes, SVGProps } from "react";

/**
 * Often used as a right arrow icon with a button
 */
const WindowsIconSVG = ({
  width = 11,
  height = 11,
  className = "",
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
      viewBox="0 0 11 11"
      fill="inherit"
      stroke="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1.51494L4.50817 0.894055V5.24944H0V1.51494ZM0 9.48505L4.50817 10.1066V5.80433H0V9.48505ZM5.00378 10.1726L11 11V5.80433H5.00378V10.1726ZM5.00378 0.827444V5.24944H11V0L5.00378 0.827444Z"></path>
    </svg>
  );
};

export default WindowsIconSVG;
