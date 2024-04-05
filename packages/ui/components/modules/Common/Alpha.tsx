/* eslint-disable @next/next/no-html-link-for-pages */
import Lines from "../../../components/global/Misc/Lines";
import AlphaLogoSVG from "@/components/svg/AlphaLogoSVG";
import constants, { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
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
        ref={ref}
        className="Module relative overflow-hidden bg-black text-white"
      >
        <Image
          className="absolute top-0 hidden h-full object-cover object-top lg:right-0 lg:block 2xl:right-[20vw] 2xl:w-[76%]"
          width={1920}
          height={900}
          alt=""
          src={awsImage("alpha-module_bg.png")}
        />
        <Image
          className="absolute bottom-14 h-auto w-full lg:hidden xs:left-0 xs:right-0 xs:mx-auto xs:max-w-[400px] xs:object-cover"
          width={750}
          height={900}
          alt=""
          src={awsImage("alpha-module_bg-mob.png")}
        />
        <Lines left>
          {" "}
          <div className="absolute top-36 -left-24 hidden xl:block">
            <div className="flex gap-x-2">
              <div className="h-[43px] w-0.5 bg-azure-100"></div>
              <div className="h-[43px] w-0.5 bg-azure-100"></div>
              <div className="h-[43px] w-0.5 bg-azure-100"></div>
              <div className="h-[43px] w-0.5 bg-azure-100"></div>
              <div className="h-[43px] w-0.5 bg-azure-100"></div>
              <div className="h-[43px] w-0.5 bg-azure-100"></div>
              <div className="h-[43px] w-0.5 bg-azure-100"></div>
              <div className="h-[43px] w-0.5 bg-azure-100"></div>
            </div>
          </div>
        </Lines>
        <div className="main-xl-container relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 lg:gap-x-20 lg:gap-y-0">
            <div className="mb-12 lg:col-span-8 lg:mb-0 lg:pt-4 xl:pt-12">
              <AlphaLogoSVG
                className="mb-4 ml-2 h-auto lg:ml-4 lg:mb-8 2xl:w-auto"
                width={200}
                height={44}
              />
              <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-white pl-6 leading-none lg:mb-8 lg:border-l-[16px] lg:text-6xl">
                Unlock your potential
              </h2>
              <div>
                <p className="font-semibold lg:text-xl">
                  Our premium membership for traders who want more from their
                  trading account.
                </p>
                <ul className="mb-6 list-disc pl-6 lg:mb-12">
                  <li className="lg:text-2xl">
                    Save from 5% to{" "}
                    {constants.DIDS.UK_PRICE_PLUS_MAX_SPREAD_DISCOUNT}
                    <sup>{footnotes[0]}</sup> on spreads
                  </li>
                  <li className="lg:text-2xl">
                    Earn up to 3% interest on the available equity in your
                    account
                    <sup>{footnotes[1]}</sup>
                  </li>
                  <li className="lg:text-2xl">Priority customer service</li>
                </ul>
                <a className="btn btn-white" href="/en-gb/alpha">
                  <span>Explore Alpha</span>
                </a>
              </div>
            </div>
            <div className="relative lg:col-span-4">
              <Image
                className="mx-auto mb-6 h-full max-h-[244px] w-auto lg:mb-16 lg:max-h-[315px] 2xl:max-h-[400px]"
                src={awsImage("alpha-module_phone-img.png")}
                width={214}
                height={400}
                alt=""
              />
              <div className="text-center">
                <small className="mb-4 block uppercase tracking-[1.6px] lg:mb-6">
                  exclusive to
                </small>
                <Image
                  className="mx-auto h-auto w-20"
                  src={awsImage("common_cmc-markets-logo-white.svg")}
                  width={132}
                  height={75}
                  alt="CMC Markets Logo"
                />
              </div>
              <div className="absolute -bottom-16 left-0 w-full lg:-bottom-24 xl:block">
                <div className="mx-auto flex justify-center gap-x-2">
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                  <div className="h-[43px] w-0.5 bg-azure-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

Alpha.displayName = "Alpha";

export default Alpha;
