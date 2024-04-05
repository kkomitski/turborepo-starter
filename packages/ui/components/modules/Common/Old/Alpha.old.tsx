import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React, { ForwardedRef, forwardRef } from "react";

const Alpha = forwardRef(
  (
    {
      footnotes = ["5", "6"],
    }: {
      footnotes?: Array<string>;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <section
        className="Module menu-section 3lg:h-[692px] relative bg-alpha-100"
        data-menu-section-name="Alpha membership"
        id="alphaModule"
      >
        <div className="flex h-full flex-col lg:flex-row">
          <div className="relative overflow-hidden lg:w-7/12 xl:w-8/12">
            <Image
              className="h-[460px] w-full object-cover object-top lg:hidden"
              height={460}
              width={460}
              src={awsImage("alpha-img-mob.png")}
              alt=""
            />
            <Image
              className="absolute left-0 top-0 hidden h-full w-full object-cover object-top lg:block"
              width={1778}
              height={1384}
              src={awsImage("alpha-img.png")}
              alt=""
            />
          </div>
          <div className="relative pb-20 pr-6 pt-10 text-white lg:w-5/12 lg:py-20 lg:pr-20 xl:w-4/12">
            <div className="z-10 hidden lg:block">
              <div className="absolute left-0 top-0 h-full w-[1px] bg-white mix-blend-saturation"></div>
              <div className="absolute left-0 top-0 h-full w-[1px] bg-white mix-blend-difference"></div>
            </div>
            <div className="relative mb-6 border-l-8 border-l-white pl-6">
              <p>
                <small className="text-sm uppercase leading-none">
                  Exclusive to CMC
                </small>
              </p>
              <Image
                className="mb-4"
                src={awsImage("common_logo-alpha.svg")}
                width={310}
                height={40}
                alt=""
              />

              <p className="headline-lg leading-none">Unlock your potential</p>
            </div>
            <div className="pl-8">
              <p className="mb-10 text-xl">
                Our premium membership for traders who want more from their
                trading account.
              </p>
              <ul className="mb-20 ml-6 list-disc text-2xl font-semibold">
                <li className="text-xl">
                  Save from 5% to 40%<sup>{footnotes[0]}</sup> on spreads
                </li>
                <li className="text-xl">
                  Earn up to 3% interest on the available equity in your account
                  <sup>{footnotes[1]}</sup>
                </li>
                <li className="text-xl">Priority customer service</li>
              </ul>
              <a
                className="btn btn-stone btn-with-icon font-semibold"
                href="/en-gb/alpha"
              >
                <span>Explore ALPHA</span>
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33333 1.3335L13 6.00016M13 6.00016L8.33333 10.6668M13 6.00016L1 6.00016"
                    stroke="inherit"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

Alpha.displayName = "Alpha";

export default Alpha;
