import React, { PropsWithoutRef, SVGAttributes, SVGProps } from "react";

/**
 * Often used as a right arrow icon with a button
 */
const ExternalLinkSVG = ({
  width = 14,
  height = 12,
  className = "h-4 w-4 shrink-0 basis-4 fill-inherit stroke-inherit",
  ...props
}: {
  width?: number;
  height?: number;
  className?: string;
  props?: SVGAttributes<SVGElement>;
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66602 4H3.99935C3.26297 4 2.66602 4.59695 2.66602 5.33333V12C2.66602 12.7364 3.26297 13.3333 3.99935 13.3333H10.666C11.4024 13.3333 11.9993 12.7364 11.9993 12V9.33333M9.33268 2.66666H13.3327M13.3327 2.66666V6.66666M13.3327 2.66666L6.66602 9.33333"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ExternalLinkSVG;
