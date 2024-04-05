import Image, { StaticImageData } from "next/image";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";

const WhatIs = forwardRef(
  (
    {
      title,
      content,
      sideImage,
      sideBgImage,
    }: {
      title: string;
      content: ReactNode;
      sideImage: StaticImageData | string;
      sideBgImage: StaticImageData | string;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <>
        <section ref={ref} className="Module relative">
          <div className="lines-container">
            <div className="relative h-full w-full">
              <div className="lines">
                <div className="left"></div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full lg:w-2/12 3xl:w-3/12">
            <Image
              className="hidden h-full w-full object-cover lg:block"
              src={sideBgImage}
              width={460}
              height={550}
              alt=""
            />
            <Image
              className="absolute -left-[159px] top-0 bottom-0 m-auto hidden h-auto w-full min-w-[320px] max-w-sm lg:block 3xl:-left-[190px]"
              src={sideImage}
              width={381}
              height={584}
              alt=""
            />
          </div>
          <div className="main-xl-container relative">
            <div className="relative flex flex-col gap-y-20 lg:flex-row lg:justify-between lg:gap-y-0">
              <div className="lg:w-5/12">
                <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
                  {title}
                </h2>
                <div className="text-xl lg:mb-[100px]">{content}</div>
              </div>
              <div className="flex flex-col justify-between px-4 lg:w-6/12 lg:px-0"></div>
            </div>
          </div>
        </section>
      </>
    );
  }
);

WhatIs.displayName = "WhatIs";

export default WhatIs;
