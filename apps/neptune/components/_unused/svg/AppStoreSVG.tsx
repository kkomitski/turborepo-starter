import React, { PropsWithoutRef, SVGAttributes, SVGProps } from "react";

const AppleStoreSVG = ({
  width = 25,
  height = 24,
  className = "h-6 w-[25px] shrink-0 basis-[25px]",
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
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0284 12.6699C17.0469 11.2838 17.7999 10.0035 19.0236 9.27751C18.2481 8.20874 16.9958 7.55541 15.6444 7.51461C14.2227 7.3706 12.8443 8.33559 12.1198 8.33559C11.3813 8.33559 10.2658 7.52891 9.06464 7.55276C7.48419 7.60203 6.04649 8.44814 5.27757 9.78152C3.64012 12.5173 4.86151 16.538 6.43005 18.7494C7.21483 19.8322 8.132 21.0418 9.33211 20.9989C10.5065 20.9519 10.9451 20.2762 12.3627 20.2762C13.7671 20.2762 14.1786 20.9989 15.403 20.9716C16.6632 20.9519 17.4572 19.884 18.2144 18.7908C18.7783 18.0193 19.2122 17.1665 19.5 16.2642C18.0033 15.6533 17.0301 14.2381 17.0284 12.6699Z"
        fill="white"
      ></path>
      <path
        d="M14.4261 5.7807C15.0977 5.00463 15.4285 4.00712 15.3484 3C14.3224 3.10374 13.3747 3.57578 12.6941 4.32208C12.022 5.05841 11.6815 6.02172 11.7476 6.99984C12.7874 7.01014 13.7746 6.56081 14.4261 5.7807Z"
        fill="white"
      ></path>
    </svg>
  );
};

export default AppleStoreSVG;
