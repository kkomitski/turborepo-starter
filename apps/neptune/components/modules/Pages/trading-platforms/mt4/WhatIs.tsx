import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

const WhatIs = ({
  title,
  content,
  sideImage,
  sideBgImage,
}: {
  title: string;
  content: ReactNode;
  sideImage: StaticImageData | string;
  sideBgImage: StaticImageData | string;
}) => {
  return (
    <>
      <section className="Module relative">
        <div className="lines-container">
          <div className="relative h-full w-full">
            <div className="lines">
              <div className="left"></div>
            </div>
          </div>
        </div>
        <Image
          className="absolute right-0 top-0 hidden h-full w-[180px] object-cover lg:block"
          src={sideBgImage}
          alt=""
          width={180}
          height={694}
        />
        <div className="main-xl-container relative">
          <div className="relative flex flex-col gap-y-20 lg:flex-row lg:justify-between lg:gap-y-0">
            <div className="lg:w-5/12">
              <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
                {title}
              </h2>
              {content}
            </div>
            <div className="flex flex-col justify-between lg:w-6/12">
              <Image
                className="h-auto w-full"
                src={sideImage}
                alt=""
                width={938}
                height={591}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIs;
