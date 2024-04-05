import React, { PropsWithoutRef, SVGAttributes, SVGProps } from "react";

const PlayArrowSVG = ({
  width = 32,
  height = 33,
  className = "h-[33px] w-8 shrink-0 basis-8",
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
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.517 16.3983C27.8599 16.5888 27.8599 17.082 27.517 17.2725L6.57615 28.9063C6.24289 29.0915 5.83333 28.8505 5.83333 28.4692L5.83333 5.20159C5.83333 4.82035 6.24289 4.57936 6.57615 4.76451L27.517 16.3983Z"
        stroke="inherit"
      ></path>
    </svg>
  );
};

export default PlayArrowSVG;
