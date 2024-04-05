import React, { ReactNode } from "react";

type Props = {
  title?: ReactNode | string;
  topContent?: ReactNode | string;
  bottomContent?: ReactNode;
  bottomRightContent?: ReactNode;
};

const Hero = ({
  title,
  topContent,
  bottomContent,
  bottomRightContent,
}: Props) => {
  return (
    <section className="Module lg:h-[640px] relative">
      <video
        id="heroVid"
        className="absolute h-full w-full object-cover lg:h-full"
        autoPlay
        muted
        playsInline
        loop
        poster="https://assets.cmcmarkets.com/earhart/fyf2/hero-bg.webp"
      >
        <source
          data-src="https://assets.cmcmarkets.com/earhart/fyf2/hero-vid.webm"
          src="https://assets.cmcmarkets.com/earhart/fyf2/hero-vid.webm"
        />
        <source
          data-src="https://assets.cmcmarkets.com/earhart/fyf2/hero-vid.mp4"
          src="https://assets.cmcmarkets.com/earhart/fyf2/hero-vid.mp4"
        />
      </video>
      <div className="main-xl-container relative h-full py-20 lg:py-0">
        <div className="flex h-full flex-col lg:flex-row">
          <div className="lg:w-4/12 2xl:w-3/12 flex h-full w-full flex-col justify-center text-white lg:mb-0">
            <div className="-ml-6 lg:-mr-6">
              <h1 className="text-[52px] xl:text-[64px] mb-6 border-l-8 border-l-azure-100 pl-6 font-light leading-none">
                {title}
              </h1>
              <div className="mb-10 pl-9 text-xl 2xl:mb-20">{topContent}</div>
              <div className="mb-4 pl-9 lg:mb-0">{bottomContent}</div>
            </div>
          </div>
          <div className="lg:w-8/12 2xl:w-9/12 relative h-full">
            <div className="z-10 hidden lg:block">
              <div className="w-[1px] absolute left-20 top-0 h-full bg-white mix-blend-difference"></div>
              <div className="w-[1px] absolute left-20 top-0 h-full bg-white mix-blend-saturation"></div>
              <div className="w-[1px] absolute right-20 top-0 h-full bg-white mix-blend-difference"></div>
              <div className="w-[1px] absolute right-20 top-0 h-full bg-white mix-blend-saturation"></div>
            </div>
            <div className="w-full lg:absolute lg:bottom-20 lg:right-40 lg:w-auto">
              {bottomRightContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
