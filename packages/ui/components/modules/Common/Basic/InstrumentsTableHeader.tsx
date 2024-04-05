import React, { ForwardedRef, ReactNode, forwardRef } from "react";

// This component often precedes the InstrumentsTable component.
// It is used to display the title and the summary of the table.
const InstrumentsTableHeader = forwardRef(
  (
    {
      title,
      text = null,
      contentRight,
      enableLeftLine = true,
      enableRightLine = true,
      bgColor = "bg-white-95",
    }: {
      title?: String | ReactNode;
      text?: String | ReactNode;
      contentRight?: ReactNode;
      enableLeftLine?: boolean;
      enableRightLine?: boolean;
      bgColor?: string;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <section ref={ref} className={`Module relative ${bgColor}`}>
        {enableLeftLine && (
          <div className="lines-container">
            <div className="relative h-full w-full">
              <div className="lines">
                <div className="left"></div>
              </div>
            </div>
          </div>
        )}
        {enableRightLine && (
          <div className="z-10 hidden lg:block">
            <div className="absolute right-20 top-0 h-full w-[1px] bg-white mix-blend-saturation"></div>
            <div className="absolute right-20 top-0 h-full w-[1px] bg-white mix-blend-difference"></div>
          </div>
        )}
        <div className="main-xl-container pb-10">
          <div className="grid lg:grid-cols-12 lg:gap-x-20 lg:gap-y-0">
            <div className="md:col-span-6">
              {" "}
              {title && (
                <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4 lg:mb-0">
                  {title}
                </h2>
              )}
              {text && (
                <div className="lg:ml-auto lg:pr-10 2xl:pr-0">{text}</div>
              )}
            </div>
            <div
              className={`relative md:col-span-6 ${
                enableRightLine ? "lg:pr-20" : "lg:pr-0"
              }`}
            >
              {contentRight}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

InstrumentsTableHeader.displayName = "InstrumentsTableHeader";
export default InstrumentsTableHeader;
