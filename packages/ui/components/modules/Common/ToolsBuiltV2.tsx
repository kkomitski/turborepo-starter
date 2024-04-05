import Image from "next/image";
import Link from "next/link";
import React, {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/elements/Button";
import { cn } from "@/lib/utils-shadcn";
import { awsImage } from "@/helpers/constants";

type Tool = {
  name: string;
  description: ReactNode | string;
  link?: string;
  linkCTA?: string;
  image: ToolImage;
  maxHeight?: number;
  isActive?: boolean;
};

type ToolImage = {
  src: string;
  width: number;
  height: number;
  className?: HTMLAttributes<HTMLImageElement>["className"];
};

const ToolsBuiltV2 = forwardRef(
  (
    {
      title,
      text,
      tools,
      enableDarkMode = false,
    }: {
      title: string;
      text?: string | ReactNode;
      tools: Array<Tool>;
      enableDarkMode?: boolean;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    tools.map((tool, index) => {
      tool.isActive = index === 0;
    });

    const [toolsSlides, setToolsSlides] = useState(tools);

    const setSlideActive = (index: string) => {
      setToolsSlides((prevState) => {
        return prevState.map((tool, i) => ({
          ...tool,
          isActive: i === parseInt(index),
        }));
      });
    };

    return (
      <section ref={ref} className={enableDarkMode ? "dark" : ""}>
        <div className="Module relative bg-white dark:bg-navy-100">
          {/* <Image
          className="absolute top-0 right-0 hidden h-full w-auto object-cover xl:block"
          width={764}
          height={1160}
          src={awsImage("tools-built_side-bg.jpg")}
          alt=""
        /> */}
          <div className="lines-container">
            <div className="relative h-full w-full">
              <div className="lines">
                <div className="left"></div>
              </div>
            </div>
          </div>
          <div className="main-xl-container relative lg-max:py-16">
            <div className="mx-auto mb-10 max-w-4xl xl:mb-20">
              <h2
                className={`headline-lg text-center dark:text-white ${
                  text ? "mb-6" : ""
                }`}
              >
                {title}
              </h2>
              {text && <p className="text-center text-xl">{text}</p>}
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-x-20">
              <div>
                <Accordion
                  className="space-y-4 xl:min-h-[530px]"
                  type="single"
                  onValueChange={(value) => {
                    setSlideActive(value);
                  }}
                  defaultValue={"0"}
                  collapsible
                >
                  {toolsSlides.map((tool, index) => (
                    <AccordionItem
                      className="relative scroll-mt-36 rounded-2xl border-b-0 bg-white-95 px-6 py-4 before:absolute before:-left-6 before:top-0 before:block before:w-2 before:bg-navy-100 data-[state=closed]:before:h-0 data-[state=open]:before:h-full data-[state=closed]:before:transition-all dark:bg-navy-70 dark:text-white dark:before:bg-white "
                      key={index}
                      value={index.toString()}
                    >
                      <AccordionTrigger className="bg-white-95 p-0 shadow-none">
                        <span className="block text-2xl">{tool.name}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <div>
                          <p className="mt-2 text-lg xl:-mb-4">
                            {tool.description}
                          </p>
                          {tool.link && (
                            <Button
                              className="mt-12 mb-6 xl:-mb-4"
                              href={tool.link}
                              variant="primary-outline"
                              icon="arrow"
                              linkType="anchor"
                            >
                              {tool.linkCTA ?? "Learn more"}
                            </Button>
                          )}
                          <Image
                            className={"mx-auto mt-6 -mb-4 xl:hidden"}
                            width={tool.image.width}
                            height={tool.image.height}
                            src={tool.image.src}
                            alt={tool.name}
                            unoptimized={true}
                            loading="lazy"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="hidden items-center justify-center xl:flex">
                {toolsSlides.map((tool, index) => (
                  <div className={tool.isActive ? "" : "hidden"} key={index}>
                    <Image
                      className={cn("h-auto w-auto", tool.image.className)}
                      width={tool.image.width}
                      height={tool.image.height}
                      src={tool.image.src}
                      alt={tool.name}
                      unoptimized={true}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ToolsBuiltV2.displayName = "ToolsBuiltV2";
export default ToolsBuiltV2;
