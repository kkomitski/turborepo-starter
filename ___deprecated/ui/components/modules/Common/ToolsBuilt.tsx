import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";

type Tool = {
  name: string;
  description: ReactNode | string;
  link?: string;
  linkCTA?: string;
  image: string;
  isActive?: boolean;
  maxHeight?: number;
};

const ToolsBuilt = ({
  title,
  tools,
  useSlider = false,
  sliderInterval = 5000,
  enableDarkMode = false,
}: {
  title: string;
  tools: Array<Tool>;
  useSlider?: boolean;
  sliderInterval?: number;
  enableDarkMode?: boolean;
}) => {
  tools.map((tool, index) => {
    tool.isActive = index === 0;
  });

  const [toolsSlides, setToolsSlides] = useState(tools);
  const [currentSlide, setCurrentSlide] = useState(0);

  let intervalTimer = useRef<NodeJS.Timeout | null>(null);

  // Used to set the active slide when the user hovers over a tool
  // or via the automated slider
  const setSlideActive = (index: number) => {
    setToolsSlides((prevState) => {
      const newState = prevState.map((tool, i) => {
        tool.isActive = i === index;
        return tool;
      });
      return newState;
    });
  };

  // A timer is used to automatically switch between slides
  useEffect(() => {
    if (!useSlider) return;
    intervalTimer.current = setInterval(() => {
      setCurrentSlide((prevState) => {
        const nextSlide =
          prevState === toolsSlides.length - 1 ? 0 : prevState + 1;
        setSlideActive(nextSlide);
        return nextSlide;
      });
    }, sliderInterval);

    return () => {
      if (intervalTimer.current) {
        clearInterval(intervalTimer.current);
      }
    };
  }, []);

  // Calculate the heights of each slide's content and store them in state
  // This is used to give each slide a max-height so that the content can be animated
  useEffect(() => {
    const calculateMaxHeights = () => {
      const newToolsSlides = toolsSlides.map((tool, index) => {
        const contentElement = document.getElementById(
          `trading-tool-content-${index}`
        );
        const newMaxHeight = contentElement ? contentElement.scrollHeight : 0;
        return {
          ...tool,
          maxHeight: newMaxHeight,
        };
      });

      setToolsSlides(newToolsSlides);
    };

    calculateMaxHeights();

    // Recalculate max heights when the window is resized
    window.addEventListener("resize", calculateMaxHeights);

    return () => {
      window.removeEventListener("resize", calculateMaxHeights);
    };
  }, []);
  return (
    <div className={enableDarkMode ? "dark" : ""}>
      <section className="Module relative bg-white dark:bg-navy-100">
        <div className="lines-container">
          <div className="relative h-full w-full">
            <div className="lines">
              <div className="left"></div>
            </div>
          </div>
        </div>
        <div className="main-xl-container relative lg-max:py-16">
          <h2 className="headline-lg mb-10 text-center dark:text-white xl:mb-20">
            {title}
          </h2>
          <div className="grid xl:grid-cols-2 xl:gap-x-20">
            <div className="space-y-4 transition-all">
              {toolsSlides.map((tool, index) => (
                <div
                  onMouseEnter={() => {
                    setSlideActive(index);
                    intervalTimer.current
                      ? clearInterval(intervalTimer.current)
                      : null;
                  }}
                  onClick={() => {
                    setSlideActive(index);
                  }}
                  key={index}
                  data-active={tool.isActive}
                  className={
                    "relative scroll-mt-36 rounded-2xl bg-white-95 px-6 py-4 before:absolute before:-left-6 before:top-0 before:block before:h-full before:w-2 before:bg-navy-100 dark:bg-navy-70 dark:text-white dark:before:bg-white " +
                    (tool.isActive
                      ? "before:h-full"
                      : "before:h-0 before:transition-[height] before:duration-500")
                  }
                >
                  <span className="block text-2xl">{tool.name}</span>
                  <div
                    className="overflow-y-hidden transition-[max-height] duration-500"
                    style={{ maxHeight: tool.isActive ? tool.maxHeight : 0 }}
                    id={`trading-tool-content-${index}`}
                  >
                    <div>
                      <p className="mt-2 mb-0">{tool.description}</p>
                      {tool.link && (
                        <Link
                          className="btn btn-primary-outline btn-with-icon mt-8 mb-6 min-h-[54px] border-navy-100 font-semibold hover:bg-transparent dark:border-white dark:text-white xl:mb-0"
                          href={tool.link}
                        >
                          <span>{tool.linkCTA ?? "Learn more"}</span>
                          <svg
                            className="stroke-navy-100 dark:stroke-white"
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33333 1.16895L13 5.83561M13 5.83561L8.33333 10.5023M13 5.83561L1 5.83561"
                              stroke="inherit"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Link>
                      )}
                      <Image
                        className="mt-6 xl:hidden"
                        width="808"
                        height="484"
                        src={tool.image}
                        alt={tool.name}
                        unoptimized={true}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="trading-tools-widgets hidden items-center justify-center xl:flex">
              {toolsSlides.map((tool, index) => (
                <div className={tool.isActive ? "" : "hidden"} key={index}>
                  <Image
                    width="808"
                    height="484"
                    src={tool.image}
                    alt={tool.name}
                    unoptimized={true}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsBuilt;
