import Lines from "@/components/global/Misc/Lines";
import RightArrowSVG from "@/components/svg/RightArrowSVG";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

export type RelatedPageObject = {
  title: string;
  description: string;
  url: string;
  thumbnail: string | StaticImageData;
  buttonText?: string;
};

const RelatedPages = ({
  title = "You may be interested in",
  pages = [],
}: {
  title: string | ReactNode;
  pages: Array<RelatedPageObject>;
}) => {
  return (
    <section className="Module menu-section relative scroll-mt-32">
      <Lines left />
      <div className="main-xl-container relative py-0">
        <div className="relative mb-10 h-full lg:mb-20">
          <div className="pb-10 pt-20 lg:pb-0">
            <h2 className="headline-lg relative -ml-6 border-l-8 border-black pl-4">
              {title}
            </h2>
          </div>
        </div>
      </div>
      <div className="main-xl-container pt-0">
        <div className="grid gap-y-10 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
          {pages.map((page, index) => (
            <div className="flex flex-col lg:justify-between" key={index}>
              <div className="mb-6 text-xl">
                <Link className="no-underline" href={page.url.toString()}>
                  <Image
                    className="mb-6 h-auto w-full"
                    alt={page.title}
                    src={page.thumbnail}
                    width={758}
                    height={473}
                  />
                  <h3 className="mb-4 text-[32px] leading-tight">
                    {page.title}
                  </h3>
                  <p className="text-base">{page.description}</p>
                </Link>
              </div>
              <Link
                href={page.url.toString()}
                className="btn btn-primary-outline btn-with-icon"
              >
                <span>{page.buttonText ? page.buttonText : "Learn more"}</span>
                <RightArrowSVG />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPages;
