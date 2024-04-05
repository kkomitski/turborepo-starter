import OnboardingButton from "@/components/elements/OnboardingButton";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";

type Props = {};
const MT4Platform = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    return (
      <section className="Module menu-section bg-white-90" ref={ref}>
        <div className="main-xl-container relative py-0">
          <div className="flex flex-col lg:flex-row">
            <Image
              className="absolute left-0 top-0 hidden h-full object-cover lg:block"
              width={393}
              height={926}
              src={awsImage("trading-platforms_mt4-platform-side-bg.png")}
              alt=""
            />
            <div className="order-2 flex items-center lg:order-1 lg:w-7/12">
              <picture className="w-full">
                <source
                  media="(max-width: 1023px)"
                  srcSet={awsImage("trading-platforms_mt4-platform-mob.png")}
                />
                <img
                  className="relative -ml-6 h-auto w-[calc(100%+48px)] max-w-none lg:ml-0 lg:w-full lg:pr-12"
                  src={awsImage("trading-platforms_mt4-platform-img.png")}
                  alt=""
                />
              </picture>
            </div>
            <div className="order-1 py-20 lg:order-2 lg:w-5/12 lg:border-l lg:border-l-navy-100 lg:px-6">
              <div className="relative -ml-6 mb-10 border-l-8 border-black pl-4">
                <small className="mb-4 block text-xs uppercase">
                  Metatrader 4 (MT4)
                </small>
                <h2 className="headline-lg">
                  The world&apos;s most popular trading platform
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.75 18.1172C6.75 11.904 11.7868 6.86719 18 6.86719C24.2132 6.86719 29.25 11.904 29.25 18.1172C29.25 18.1248 29.25 18.1325 29.25 18.1402C29.498 18.1249 29.7481 18.1171 30 18.1171C30.2519 18.1171 30.502 18.1249 30.75 18.1402C30.75 18.1325 30.75 18.1248 30.75 18.1172C30.75 11.0756 25.0416 5.36719 18 5.36719C10.9584 5.36719 5.25 11.0756 5.25 18.1172C5.25 25.1588 10.9584 30.8672 18 30.8672C18.0077 30.8672 18.0154 30.8672 18.0231 30.8672C18.0078 30.6191 18 30.369 18 30.1171C18 29.8652 18.0078 29.6152 18.0231 29.3672C18.0154 29.3672 18.0077 29.3672 18 29.3672C11.7868 29.3672 6.75 24.3304 6.75 18.1172ZM20.5657 22.7005C20.1936 23.1732 19.8563 23.6744 19.5576 24.2005H14C13.5858 24.2005 13.25 23.8647 13.25 23.4505C13.25 23.0363 13.5858 22.7005 14 22.7005C15.0585 22.7005 15.9167 21.8424 15.9167 20.7839V18.8672H14C13.5858 18.8672 13.25 18.5314 13.25 18.1172C13.25 17.703 13.5858 17.3672 14 17.3672H15.9167V14.1172C15.9167 12.2302 17.4464 10.7005 19.3333 10.7005C21.2203 10.7005 22.75 12.2302 22.75 14.1172C22.75 14.5314 22.4142 14.8672 22 14.8672C21.5858 14.8672 21.25 14.5314 21.25 14.1172C21.25 13.0586 20.3919 12.2005 19.3333 12.2005C18.2748 12.2005 17.4167 13.0586 17.4167 14.1172V17.3672H19.3333C19.7475 17.3672 20.0833 17.703 20.0833 18.1172C20.0833 18.5314 19.7475 18.8672 19.3333 18.8672H17.4167V20.7839C17.4167 21.4942 17.1999 22.154 16.8288 22.7005H20.5657Z"
                      fill="#101626"
                    />
                    <path
                      d="M30 24.7839C27.7909 24.7839 26 25.9778 26 27.4505C26 28.9233 27.7909 30.1172 30 30.1172C32.2091 30.1172 34 31.3111 34 32.7839C34 34.2566 32.2092 35.4505 30 35.4505M30 24.7839C31.4806 24.7839 32.7733 25.3201 33.4649 26.1172M30 24.7839V23.4505M30 24.7839L30 35.4505M30 35.4505L30 36.7839M30 35.4505C28.5195 35.4505 27.2268 34.9143 26.5352 34.1172M42 30.1172C42 36.7446 36.6274 42.1172 30 42.1172C23.3726 42.1172 18 36.7446 18 30.1172C18 23.4898 23.3726 18.1172 30 18.1172C36.6274 18.1172 42 23.4898 42 30.1172Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">
                    Tight spreads on 175+ FX pairs, plus indices and commodities
                  </p>
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
                      d="M36.1461 18.0456C34.8443 20.2151 32.7338 20.2151 31.432 18.0456C30.1303 15.876 30.1303 12.3584 31.432 10.1888C32.7338 8.01924 34.8443 8.01924 36.1461 10.1888M29.3446 12.4505H33.7891M29.3446 15.7839H33.7891M43.7891 14.1172C43.7891 19.64 39.3119 24.1172 33.7891 24.1172C28.2662 24.1172 23.7891 19.64 23.7891 14.1172C23.7891 8.59434 28.2662 4.11719 33.7891 4.11719C39.3119 4.11719 43.7891 8.59434 43.7891 14.1172Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.7891 29.6727C11.9481 29.6727 10.4557 30.6677 10.4557 31.895C10.4557 33.1223 11.9481 34.1172 13.7891 34.1172C15.63 34.1172 17.1224 35.1121 17.1224 36.3394C17.1224 37.5667 15.63 38.5616 13.7891 38.5616M13.7891 29.6727C15.0229 29.6727 16.1001 30.1196 16.6765 30.7839M13.7891 29.6727V28.5616M13.7891 29.6727L13.7891 38.5616M13.7891 38.5616L13.7891 39.6727M13.7891 38.5616C12.5553 38.5616 11.478 38.1147 10.9017 37.4505M23.7891 34.1172C23.7891 39.64 19.3119 44.1172 13.7891 44.1172C8.26622 44.1172 3.78906 39.64 3.78906 34.1172C3.78906 28.5943 8.26622 24.1172 13.7891 24.1172C19.3119 24.1172 23.7891 28.5943 23.7891 34.1172Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.4557 29.6727L33.7891 35.2283M33.7891 35.2283L37.1224 29.6727M33.7891 35.2283V39.6727M30.4557 34.1172H37.1224M30.4557 37.4505H37.1224M43.7891 34.1172C43.7891 39.64 39.3119 44.1172 33.7891 44.1172C28.2662 44.1172 23.7891 39.64 23.7891 34.1172C23.7891 28.5943 28.2662 24.1172 33.7891 24.1172C39.3119 24.1172 43.7891 28.5943 43.7891 34.1172Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.1224 10.7839C17.1224 9.55656 16.1275 8.56163 14.9002 8.56163C13.6729 8.56163 12.678 9.55656 12.678 10.7839V16.3394C12.678 17.5667 11.683 18.5616 10.4557 18.5616H17.1224M10.4557 14.1172H14.9002M23.7891 14.1172C23.7891 19.64 19.3119 24.1172 13.7891 24.1172C8.26622 24.1172 3.78906 19.64 3.78906 14.1172C3.78906 8.59434 8.26622 4.11719 13.7891 4.11719C19.3119 4.11719 23.7891 8.59434 23.7891 14.1172Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">
                    Spreads from 0.0 pips on 6 major pairs with our FX Active
                    account<sup>3</sup>
                  </p>
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
                      d="M10 24.1172H38M10 24.1172C7.79086 24.1172 6 22.3263 6 20.1172V12.1172C6 9.90805 7.79086 8.11719 10 8.11719H38C40.2091 8.11719 42 9.90805 42 12.1172V20.1172C42 22.3263 40.2091 24.1172 38 24.1172M10 24.1172C7.79086 24.1172 6 25.908 6 28.1172V36.1172C6 38.3263 7.79086 40.1172 10 40.1172H38C40.2091 40.1172 42 38.3263 42 36.1172V28.1172C42 25.908 40.2091 24.1172 38 24.1172M34 16.1172H34.02M34 32.1172H34.02"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">
                    Fast, 100% automated execution on our London-based server
                  </p>
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
                      d="M18 28.1172L30 16.1172M19.0001 17.1172H19.0201M29.0001 27.1172H29.0201M38 42.1172V10.1172C38 7.90805 36.2091 6.11719 34 6.11719H14C11.7909 6.11719 10 7.90805 10 10.1172V42.1172L17 38.1172L24 42.1172L31 38.1172L38 42.1172ZM20 17.1172C20 17.6695 19.5523 18.1172 19 18.1172C18.4477 18.1172 18 17.6695 18 17.1172C18 16.5649 18.4477 16.1172 19 16.1172C19.5523 16.1172 20 16.5649 20 17.1172ZM30 27.1172C30 27.6695 29.5523 28.1172 29 28.1172C28.4477 28.1172 28 27.6695 28 27.1172C28 26.5649 28.4477 26.1172 29 26.1172C29.5523 26.1172 30 26.5649 30 27.1172Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">No scalping restrictions</p>
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
                      d="M24 20.1172V32.1172M24 32.1172L18 26.1172M24 32.1172L30 26.1172M34 42.1172H14C11.7909 42.1172 10 40.3263 10 38.1172V10.1172C10 7.90805 11.7909 6.11719 14 6.11719H25.1716C25.702 6.11719 26.2107 6.3279 26.5858 6.70297L37.4142 17.5314C37.7893 17.9065 38 18.4152 38 18.9456V38.1172C38 40.3263 36.2091 42.1172 34 42.1172Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">
                    Free premium indicators and EAs
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <OnboardingButton
                  variant="azure"
                  className="mb-2"
                  account="mt4"
                >
                  Open demo account
                </OnboardingButton>
                <Link
                  className="btn btn-primary-outline btn-with-icon"
                  href="/trading-platforms/mt4"
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

MT4Platform.displayName = "MT4Platform";
export default MT4Platform;
