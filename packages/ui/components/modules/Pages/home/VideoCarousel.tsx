import RightArrowSVG from "@/components/svg/RightArrowSVG";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import PlayArrowSVG from "@/components/svg/PlayArrowSVG";
import { awsImage } from "@/helpers/constants";
import LazyYoutube from "@/components/LazyYoutube";
import { X } from "lucide-react";
import Lines from "../../../components/global/Misc/Lines";

type VideoCarouselSlide = {
  title: string;
  content: ReactNode | string;
  videoId: string;
  videoSeriesId?: string;
  active: boolean;
  image: {
    src: string;
    alt: string;
    author: string;
    title: ReactNode | string;
    theme: "light" | "dark";
  };
};

const VideoCarousel = () => {
  const [slides, setSlides] = useState<Array<VideoCarouselSlide>>([
    {
      title: "Brian Shannon",
      content: (
        <>
          We were delighted to welcome Alphatrends.net founder Brian Shannon to
          the UK to present to over 400 people on why the Anchored VWAP (AVWAP)
          is the most powerful analytical tool.
        </>
      ),
      videoId: "QZ9Z9ZQxQX6Z6Z6Z",
      videoSeriesId: "PLRMUPB6-LJsrnS8rxsOvJl6GWhw9km0GB",
      image: {
        src: awsImage("cmc-trading-masterclass_brian-shannon-thumbnail.png"),
        alt: "Brian Shannon",
        author: "Brian Shannon",
        title: (
          <>
            The most powerful <span className="block">analytical tool</span>
          </>
        ),
        theme: "light",
      },
      active: true,
    },
    {
      title: "Tom Hougaard",
      content: (
        <>
          As a professional high-stake trader, Tom Hougaard talked about why
          traders should spend less time on market analysis and more time on
          mental analysis.
        </>
      ),
      videoId: "9A_jS-OHIaeRVSCm",
      videoSeriesId: "PLRMUPB6-LJsqkHtytK6_V9zrSyABVquCX",
      image: {
        src: awsImage("cmc-trading-masterclass_tom-hougaard-thumbnail.png"),
        alt: "Tom Hougaard",
        author: "Tom Hougaard",
        title: (
          <>
            Developing <span className="block">a trader mindset</span>
          </>
        ),
        theme: "dark",
      },
      active: false,
    },
  ]);

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
  return (
    <section className="relative bg-navy-100 text-white">
      <Lines left />
      <div className="main-xl-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={
              "flex-col lg:flex-row lg:flex-wrap " +
              (slide.active ? "flex" : "hidden")
            }
          >
            <div className="mb-10 flex flex-col lg:mb-0 lg:w-5/12 lg:pr-10">
              <div className="relative -ml-6 mb-6 border-l-8 border-white pl-6">
                <small className="text-xs uppercase">
                  CMC Trading Masterclass
                </small>
                <h2 className="headline-lg">{slide.title}</h2>
              </div>
              <p className="text-xl">{slide.content}</p>
            </div>
            <div className="-mr-6 pl-6 sm:mr-0 sm:pl-0 lg:w-7/12 xl:pl-20">
              <Dialog>
                <DialogTrigger className="group relative -mx-6 block w-full cursor-pointer overflow-hidden sm:mx-auto lg:mx-0">
                  <Image
                    className="pointer-events-none absolute left-6 top-6 z-10 shadow-lg"
                    src={awsImage("common_podcast-cmc-logo.svg")}
                    width={56}
                    height={56}
                    alt="CMC"
                  />
                  <Image
                    className="h-[500px] w-full object-cover object-right transition-transform group-hover:scale-125 lg:h-auto lg:object-center"
                    src={slide.image.src}
                    width={1020}
                    height={622}
                    alt={slide.image.alt}
                  />
                  <div
                    className={
                      "pointer-events-none absolute bottom-6 left-6 border-l-8  pl-6 text-left " +
                      (slide.image.theme === "light"
                        ? "border-navy-100 text-navy-100"
                        : "border-white text-white")
                    }
                  >
                    <span className="mb-1 block uppercase">
                      {slide.image.author}
                    </span>
                    <span className="block text-3xl leading-tight 2xl:text-5xl">
                      {slide.image.title}
                    </span>
                  </div>
                  <div className="absolute inset-0 m-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-navy-100 fill-none stroke-white lg:h-20 lg:w-20 xl:h-[100px] xl:w-[100px]">
                    <PlayArrowSVG className="group-hover:fill-white" />
                  </div>
                </DialogTrigger>

                <DialogContent className="w-full max-w-3xl border-none bg-transparent shadow-none">
                  <DialogClose
                    className="
          absolute -top-8 right-6 ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-solid text-white transition-colors hover:bg-white/20 md:mb-0"
                  >
                    <X className="h-4 w-4" />
                  </DialogClose>
                  <LazyYoutube
                    height={400}
                    videoId={slide.videoId}
                    videoSeriesId={slide.videoSeriesId}
                    autoPlay={true}
                  />
                </DialogContent>
              </Dialog>
            </div>
            <div className="w-full lg:w-5/12 lg:pr-10 xl:-mt-14">
              <div className="flex items-center justify-between pt-10 lg:pt-0">
                <div className="space-x-2">
                  <span>{index + 1}</span>
                  <span>/</span>
                  <span>{slides.length}</span>
                </div>
                <div className="flex justify-between rounded-full border border-white stroke-white">
                  <button
                    type="button"
                    onClick={() => changeSlide(currentSlideIndex - 1)}
                    className="cursor-pointer rounded-full px-5 py-4 hover:bg-white hover:stroke-navy-100 lg:p-5"
                  >
                    <RightArrowSVG className="rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => changeSlide(currentSlideIndex + 1)}
                    className="cursor-pointer rounded-full px-5 py-4 hover:bg-white hover:stroke-navy-100 lg:p-5"
                  >
                    <RightArrowSVG />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoCarousel;
