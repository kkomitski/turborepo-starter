import RightArrowSVG from "@/components/svg/RightArrowSVG";
import { awsImage } from "@/helpers/constants";
import { useInterval } from "@/hooks/useInterval";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import React, { useEffect, useState } from "react";

type PlatformSliderSlide = {
  image: string;
  alt: string;
  title: string;
  active: boolean;
};

const PlatformSlider = () => {
  const [slides, setSlides] = useState<Array<PlatformSliderSlide>>([
    {
      image: awsImage("home-platform-slider_desktop-platform.png"),
      alt: "Web",
      title: "Web",
      active: true,
    },
    {
      image: awsImage("home-platform-slider_mt4-platform.png"),
      alt: "MT4",
      title: "MT4",
      active: false,
    },
    {
      image: awsImage("home-platform-slider_ios-platform.png"),
      alt: "iOS",
      title: "iOS",
      active: false,
    },
    {
      image: awsImage("home-platform-slider_android-platform.png"),
      alt: "Android",
      title: "Android",
      active: false,
    },
  ]);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const currentSlideIndex = slides.findIndex((slide) => slide.active);

  const changeSlide = (index: number) => {
    // If the index is out of bounds, loop back to the other end
    if (index < 0) {
      index = slides.length - 1;
    } else if (index > slides.length - 1) {
      index = 0;
    }

    // Set the active slide
    const newSlides = slides.map((slide, i) => ({
      ...slide,
      active: i === index,
    }));
    setSlides(newSlides);
  };

  const stopAutoSliding = () => {
    setIsAutoSliding(false);
  };

  useInterval(
    () => {
      changeSlide(currentSlideIndex + 1);
    },
    isAutoSliding ? 5000 : null
  );

  return (
    <section className="relative bg-white-95 text-navy-100">
      <div className="flex h-full flex-col lg:flex-row">
        <div className="lg:w-7/12 xl:w-8/12 relative order-2 px-6 py-20 lg:order-1 lg:p-20">
          <div className=" mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center">
            <div className="min-h-[56vw] lg:max-h-[300px] xl:max-h-[460px] mb-20 lg:h-full xs:min-h-0">
              {slides.map((slide, index) => (
                <Image
                  key={index}
                  className={"mx-auto " + (slide.active ? "block" : "hidden")}
                  src={slide.image}
                  width={768}
                  height={481}
                  alt={slide.alt}
                  quality={100}
                />
              ))}
            </div>
            <div className="mx-auto w-full">
              <div className="flex flex-col text-sm lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-6 grid grid-cols-4 gap-x-2 lg:mb-0 lg:w-auto">
                  {slides.map((slide, index) => (
                    <button
                      key={index}
                      type="button"
                      onMouseEnter={() => {
                        changeSlide(index);
                        stopAutoSliding();
                      }}
                      onClick={() => {
                        changeSlide(index);
                        stopAutoSliding();
                      }}
                      className={
                        "cursor-default self-baseline rounded-lg px-4 py-3 text-xs font-semibold shadow lg:px-3 lg:py-2 xl:px-4 xl:py-3 " +
                        (slide.active
                          ? "bg-navy-100 text-white"
                          : " bg-white text-navy-100")
                      }
                    >
                      <span>{slide.title}</span>
                    </button>
                  ))}
                </div>
                <div className="ml-auto text-white">
                  <div className="flex justify-between rounded-full border border-navy-100 stroke-navy-100">
                    <button
                      type="button"
                      className="cursor-pointer rounded-full px-5 py-4 hover:bg-white lg:p-5"
                      onClick={() => {
                        changeSlide(currentSlideIndex - 1);
                        stopAutoSliding();
                      }}
                    >
                      <RightArrowSVG className="rotate-180" />
                    </button>
                    <button
                      type="button"
                      className=" cursor-pointer rounded-full px-5 py-4 hover:bg-white lg:p-5"
                      onClick={() => {
                        changeSlide(currentSlideIndex + 1);
                        stopAutoSliding();
                      }}
                    >
                      <RightArrowSVG />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 xl:w-4/12 relative order-1 select-none pb-10 pr-6 pt-20 text-navy-100 lg:order-2 lg:py-20 lg:pr-12 xl:pr-20">
          <div className="lines">
            <div className="line before:left-0 after:left-0"></div>
          </div>
          <div className="relative mb-6 border-l-8 border-l-navy-100 pl-6">
            <h2 className="headline-lg">
              Explore our award-winning trading platforms<sup>1</sup>
            </h2>
          </div>
          <div className="flex flex-col pl-8">
            <div className="xl:mb-[150px] mb-10 lg:mb-20">
              <p className="text-xl">
                Packed with advanced features, yet intuitive and available to
                everyone; whatever the next step in your trading journey is, our
                platform is ready to help you get there.
              </p>
              <p className="text-xl">
                And if you need to trade on-the-go, our award-winning mobile app
                <sup>1</sup> gives you all the functionality of our web platform
                in your pocket.
              </p>
            </div>
            <Link
              className="btn btn-primary-outline btn-with-icon font-semibold"
              href="/trading-platforms"
            >
              <span>View all platforms</span>
              <RightArrowSVG />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSlider;
