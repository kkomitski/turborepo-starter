import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import { awsImage } from "@/helpers/constants";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";

const Hero = forwardRef(
  (
    {
      title,
      description,
    }: {
      title: ReactNode;
      description: ReactNode;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <section className="Module menu-section relative" ref={ref}>
        <div className="relative w-full overflow-x-hidden">
          <div className="lines-container hidden xl:block">
            <div className="relative h-full w-full">
              <div className="lines">
                <div className="right line-faded"></div>
              </div>
            </div>
          </div>

          <div className="main-xl-container relative mb-20 pb-0 pt-20 lg:mb-0 lg:py-0">
            <div className="flex flex-col gap-x-10 lg:flex-row">
              <div className="mb-10 lg:mb-0 lg:w-6/12 lg:border-r lg:border-r-black/25 lg:py-20 xl:w-5/12">
                <div className="-ml-6">
                  <h1 className="headline-xl border-l-8 border-l-azure-100 pl-6 font-light leading-none lg:pr-6">
                    <div className="flex">
                      <span>{title}</span>
                    </div>
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-end lg:w-6/12 lg:py-20 xl:w-7/12">
                <p className="mb-10 max-w-3xl text-xl xl:w-[80%]">
                  {description}
                </p>
                <TrustpilotWidgetMicro className="-ml-7" />
              </div>
            </div>
          </div>

          <div className="main-xl-container relative bg-white pb-20 pt-0">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={awsImage("trading-platforms_hero-img-mob.png")}
              />
              <img
                className="-mx-6 h-auto w-[calc(100%+48px)] max-w-none"
                src={awsImage("trading-platforms_hero-img.png")}
                alt=""
              />
            </picture>
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = "Hero";

export default Hero;
