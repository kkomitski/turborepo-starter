import Image from "next/image";
import React, { ReactNode } from "react";
import InstrumentCardDeck, {
  InstrumentData,
} from "../Common/InstrumentCards/InstrumentCardDeck";

const WhatIs = ({
  title,
  text,
  instrumentsToLoad,
  sideBgImg,
}: {
  title: String;
  text: ReactNode;
  instrumentsToLoad: InstrumentData[];
  sideBgImg: string;
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
          src={sideBgImg}
          width={180}
          height={634}
          alt=""
        />
        <div className="main-xl-container relative">
          <div className="relative flex flex-col gap-y-20 lg:flex-row lg:justify-between lg:gap-y-0">
            <div className="lg:w-5/12">
              <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
                {title}
              </h2>
              <div className="text-xl">{text}</div>
            </div>
            <div className="flex flex-col justify-between px-4 lg:w-6/12 lg:px-0">
              <InstrumentCardDeck instruments={instrumentsToLoad} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIs;
