import OnboardingButton from "@/components/elements/OnboardingButton";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import React, { ForwardedRef, forwardRef } from "react";

type Props = {};

const WebPlatform = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    return (
      <section className="Module menu-section" ref={ref}>
        <div className="main-xl-container mb-8 pb-0 text-center lg:mb-10">
          <h2 className="headline-xl">Our platforms at a glance</h2>
        </div>

        <div className="main-xl-container relative py-0">
          <div className="flex flex-col lg:flex-row">
            <Image
              className="absolute left-0 top-0 hidden h-full object-cover lg:block"
              src={awsImage("trading-platforms_web-platform-side-bg.jpg")}
              alt=""
              width={370}
              height={905}
            />
            <div className="order-2 flex items-center lg:order-1 lg:w-7/12">
              <picture className="w-full">
                <source
                  media="(max-width: 1023px)"
                  srcSet={awsImage("trading-platforms_web-platform-mob.png")}
                />
                <img
                  className="relative -ml-6 h-auto w-[calc(100%+48px)] max-w-none lg:ml-0 lg:w-full lg:pr-12"
                  src={awsImage("trading-platforms_web-platform.png")}
                  alt=""
                />
              </picture>
            </div>
            <div className="order-1 py-20 lg:order-2 lg:w-5/12 lg:border-l lg:border-l-navy-100 lg:px-6">
              <div className="relative -ml-6 mb-10 border-l-8 border-black pl-4">
                <small className="mb-4 block text-xs uppercase">
                  Web platform
                </small>
                <h2 className="headline-lg">
                  Pioneering trading technology that suits all styles of trading
                </h2>
              </div>
              <div className="mb-10 space-y-2">
                <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 16.1211V32.1211M24 22.1211V32.1211M16 28.1211V32.1211M12 40.1211H36C38.2091 40.1211 40 38.3302 40 36.1211V12.1211C40 9.91195 38.2091 8.12109 36 8.12109H12C9.79086 8.12109 8 9.91195 8 12.1211V36.1211C8 38.3302 9.79086 40.1211 12 40.1211Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mb-0 text-xl">Advanced charting</p>
                </div>
                <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.12109V14.1211M6 10.1211H14M12 34.1211V42.1211M8 38.1211H16M26 6.12109L30.5714 19.8354L42 24.1211L30.5714 28.4068L26 42.1211L21.4286 28.4068L10 24.1211L21.4286 19.8354L26 6.12109Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">Pattern recognition scanner</p>
                </div>
                <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 20.1211V6.12109L8 28.1211H22L22 42.1211L40 20.1211L26 20.1211Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">Advanced order execution</p>
                </div>
                <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 32.1211V8.12109M14 8.12109L6 16.1211M14 8.12109L22 16.1211M34 16.1211V40.1211M34 40.1211L42 32.1211M34 40.1211L26 32.1211"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">Gauge market sentiment</p>
                </div>
                <div className="flex items-center gap-x-2 rounded-lg p-3 shadow-lg">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38 40.1211H10C7.79086 40.1211 6 38.3302 6 36.1211L6 12.1211C6 9.91195 7.79086 8.12109 10 8.12109L30 8.12109C32.2091 8.12109 34 9.91195 34 12.1211V14.1211M38 40.1211C35.7909 40.1211 34 38.3302 34 36.1211L34 14.1211M38 40.1211C40.2091 40.1211 42 38.3302 42 36.1211V18.1211C42 15.912 40.2091 14.1211 38 14.1211L34 14.1211M26 8.12109L18 8.12109M14 32.1211H26M14 16.1211H26V24.1211H14V16.1211Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">
                    Morningstar equity research & Reuters news
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <OnboardingButton
                  variant="azure"
                  className="mb-2"
                  account="demo"
                >
                  Open demo account
                </OnboardingButton>
                <Link
                  className="btn btn-primary-outline btn-with-icon"
                  href="/trading-platforms/web-trading-platform"
                >
                  <span>Learn more</span>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.33333 1.16895L13 5.83561M13 5.83561L8.33333 10.5023M13 5.83561L1 5.83561"
                      stroke="#101626"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

WebPlatform.displayName = "WebPlatform";
export default WebPlatform;
