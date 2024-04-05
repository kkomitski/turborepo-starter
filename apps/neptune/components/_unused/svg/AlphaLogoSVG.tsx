import React, { PropsWithoutRef, SVGAttributes, SVGProps } from "react";

const AlphaLogoSVG = ({
  width = 200,
  height = 44,
  className = "shrink-0",
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
      viewBox={`0 0 200 44`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6773 2.56181H21.5555L3.76068 43.0556H0L19.1282 0H24.0919L43.2799 43.0556H39.5299L21.6773 2.56181ZM178.383 2.56181H178.263L160.47 43.0556H156.718L175.846 0H180.81L200 43.0556H196.239L178.383 2.56181ZM52.022 0H48.913V43.0556H76.0307V40.1644H52.022V0ZM82.2287 0H99.3593C104.081 0 107.011 1.20556 109.282 3.43153C111.314 5.42069 112.329 8.12885 112.329 11.8037C112.329 19.8723 107.727 23.8463 98.94 23.8463H85.3353V43.0556H82.2287V0ZM85.3353 21.0757H98.7053C106.295 21.0757 109.165 17.5838 109.165 11.8639C109.165 6.14402 105.757 2.82229 99.122 2.82229H85.3353V21.0757ZM121.7 0H118.591V43.0556H121.697V21.4977H147.798V43.0556H150.907V0H147.798V18.8476H121.7V0Z"
        fill="white"
      />
    </svg>
  );
};

export default AlphaLogoSVG;
