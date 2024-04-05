import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React from "react";

const AdvancedMT4Functionality = () => {
  return (
    <section className="Module relative bg-white-90">
      <div className="flex h-full flex-col lg:flex-row">
        <div className="relative order-2 flex items-center justify-center lg:order-1 lg:w-8/12">
          <Image
            className="h-auto w-full max-w-3xl pl-6 drop-shadow-2xl lg:pl-0"
            src={awsImage("mt4_advanced-mt4-functionality.png")}
            width={1106}
            height={1245}
            alt=""
          />
        </div>
        <div className="relative order-1 mb-4 pr-6 pt-10 text-navy-100 lg:order-2 lg:mb-0 lg:w-4/12 lg:py-20 lg:pb-20 lg:pr-20">
          <div className="z-10 hidden lg:block">
            <div className="absolute left-0 top-0 h-full w-[1px] bg-white mix-blend-saturation"></div>
            <div className="absolute left-0 top-0 h-full w-[1px] bg-white mix-blend-difference"></div>
          </div>
          <div className="relative mb-6 border-l-8 border-l-navy-100 pl-6">
            <p className="headline-lg leading-none">
              Advanced MT4 functionality
            </p>
          </div>
          <div className="space-y-2 pl-8">
            <div className="items-center justify-center rounded-lg bg-white px-4 py-3 shadow">
              <p className="leading-snug">
                Access one-cancels-other order types, and turn trendlines into
                stop-loss or take-profit orders, with mini terminal.
              </p>
            </div>
            <div className="items-center justify-center rounded-lg bg-white px-4 py-3 shadow">
              <p className="leading-snug">
                Automatically calculate your stop-loss amount as a percentage of
                your account value, also with mini terminal
              </p>
            </div>
            <div className="items-center justify-center rounded-lg bg-white px-4 py-3 shadow">
              <p className="leading-snug">
                Hide your entry and exit levels from the market with stealth
                orders
              </p>
            </div>
            <div className="items-center justify-center rounded-lg bg-white px-4 py-3 shadow">
              <p className="leading-snug">
                Connect real-time MT4 data into Excel with our Excel RTD plugin
              </p>
            </div>
            <div className="items-center justify-center rounded-lg bg-white px-4 py-3 shadow">
              <p className="leading-snug">
                Set multiple stop-loss and take-profit orders, for more advanced
                money management strategies
              </p>
            </div>
            <div className="items-center justify-center rounded-lg bg-white px-4 py-3 shadow">
              <p className="leading-snug">
                Receive email alerts when key indicator levels are breached
              </p>
            </div>
            <div className="items-center justify-center rounded-lg bg-white px-4 py-3 shadow">
              <p className="leading-snug">
                Auto-generate tweets from the MT4 platform when key market
                levels are breached
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedMT4Functionality;
