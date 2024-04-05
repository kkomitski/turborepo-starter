import React, { PropsWithoutRef, SVGAttributes, SVGProps } from "react";

/**
 * Often used as a right arrow icon with a button
 */
const MacOSIconSVG = ({
  width = 16,
  height = 17,
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
      viewBox="0 0 16 17"
      fill="inherit"
      stroke="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0189 8.7691C11.0312 7.84505 11.5333 6.99151 12.3491 6.50752C11.8321 5.795 10.9972 5.35945 10.0963 5.33225C9.14843 5.23624 8.22955 5.87957 7.74655 5.87957C7.2542 5.87957 6.51054 5.34178 5.70975 5.35768C4.65611 5.39053 3.69765 5.9546 3.18504 6.84352C2.0934 8.66737 2.90766 11.3478 3.95336 12.8221C4.47654 13.544 5.08799 14.3504 5.88806 14.3218C6.67098 14.2904 6.96339 13.84 7.90843 13.84C8.84471 13.84 9.11905 14.3218 9.93535 14.3036C10.7755 14.2904 11.3048 13.5785 11.8096 12.8497C12.1855 12.3354 12.4748 11.7668 12.6667 11.1653C11.6689 10.758 11.0201 9.81455 11.0189 8.7691Z"
        fill="inherit"
      ></path>
      <path
        d="M9.28408 4.17631C9.73179 3.65893 9.95236 2.99392 9.89894 2.32251C9.21495 2.39167 8.58313 2.70636 8.12937 3.2039C7.68131 3.69478 7.45433 4.33699 7.49841 4.98907C8.19158 4.99594 8.84972 4.69638 9.28408 4.17631Z"
        fill="inherit"
      ></path>
    </svg>
  );
};

export default MacOSIconSVG;
