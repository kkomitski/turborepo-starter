import React, { PropsWithoutRef, SVGAttributes, SVGProps } from "react";

const GoBackArrowSVG = ({
  width = 27,
  height = 14,
  className = "h-3.5 w-[27px] shrink-0 basis-[27px]",
  ...props
}: {
  width?: number;
  height?: number;
  className?: string;
  props?: SVGAttributes<SVGElement>;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 27 14"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M24 6.179v7.154h2.667v-12h-12V4h7.642c-.736.957-1.81 2.368-2.375 2.987-2.158 2.368-4.48 3.68-7.267 3.68-6.807 0-10-4.53-10-10.667H0c0 7.45 4.147 13.333 12.667 13.333 3.651 0 6.621-1.677 9.239-4.55.56-.615 1.428-1.732 2.094-2.604Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default GoBackArrowSVG;
