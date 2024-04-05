import Image from "next/image";
import React, { ReactNode } from "react";

const TwoColumns = ({
  title,
  contentLeft,
  contentRight,
  enableLeftLine = true,
  enableRightLine = true,
  bgColor = "bg-white-95",
  sideBgImg,
}: {
  title?: String | ReactNode;
  contentLeft: ReactNode;
  contentRight: ReactNode;
  enableLeftLine?: boolean;
  enableRightLine?: boolean;
  bgColor?: string;
  sideBgImg?: string;
}) => {
  return (
    <section className={`relative ${bgColor}`}>
      {enableLeftLine && (
        <div className="lines-container">
          <div className="relative h-full w-full">
            <div className="lines">
              <div className="left"></div>
            </div>
          </div>
        </div>
      )}
      {sideBgImg && !enableRightLine && (
        <Image
          className="absolute right-0 top-0 hidden h-full w-[180px] object-cover lg:block"
          src={sideBgImg}
          width={180}
          height={634}
          alt=""
        />
      )}
      {enableRightLine && !sideBgImg && (
        <div className="z-10 hidden lg:block">
          <div className="absolute right-20 top-0 h-full w-[1px] bg-white mix-blend-saturation"></div>
          <div className="absolute right-20 top-0 h-full w-[1px] bg-white mix-blend-difference"></div>
        </div>
      )}
      <div className="main-xl-container">
        {title && <h2 className="headline-lg mb-10 text-center">{title}</h2>}
        <div className="flex flex-col lg:flex-row lg:gap-x-20 lg:gap-y-0">
          <div className="lg:w-1/2">{contentLeft}</div>
          <div
            className={`lg:w-1/2 ${enableRightLine ? "lg:pr-20" : "lg:pr-0"}`}
          >
            {contentRight}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumns;
