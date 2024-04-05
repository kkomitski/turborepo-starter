import MobileAppQRCode from "../../../components/global/Misc/MobileQRCode";
import constants, { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, { ForwardedRef, forwardRef, useEffect, useRef } from "react";

type Props = {};
const MobileTrading = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    useEffect(() => {}, []);

    return (
      <section className="Module menu-section relative bg-white-95" ref={ref}>
        <div className="lines-container">
          <div className="relative h-full w-full">
            <div className="lines">
              <div className="left"></div>
            </div>
          </div>
        </div>
        <div className="main-xl-container relative py-0">
          <Image
            className="absolute right-0 top-0 hidden h-full object-cover lg:block"
            src={awsImage("trading-platforms_mobile-platform-side-bg.png")}
            width={413}
            height={914}
            alt=""
          />
          <div className="flex flex-col gap-x-[72px] lg:flex-row">
            <div className="py-20 lg:w-5/12">
              <div className="relative -ml-6 mb-10 border-l-8 border-black pl-4">
                <small className="mb-4 block text-xs uppercase">
                  Mobile Trading App
                </small>
                <h2 className="headline-lg">
                  Get the functionality of our web platform in your pocket
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
                      d="M23 37.1211H24H25M16 42.1211H32C34.2091 42.1211 36 40.3302 36 38.1211V10.1211C36 7.91195 34.2091 6.12109 32 6.12109H16C13.7909 6.12109 12 7.91195 12 10.1211V38.1211C12 40.3302 13.7909 42.1211 16 42.1211Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">
                    Open, close and modify trades on the go
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
                      d="M32 14.1211H42M42 14.1211V24.1211M42 14.1211L26 30.1211L18 22.1211L6 34.1211"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">
                    Intuitive mobile-optimised charting
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
                      d="M34 28.1211V40.1211M28 34.1211H40M12 20.1211H16C18.2091 20.1211 20 18.3302 20 16.1211V12.1211C20 9.91195 18.2091 8.12109 16 8.12109H12C9.79086 8.12109 8 9.91195 8 12.1211V16.1211C8 18.3302 9.79086 20.1211 12 20.1211ZM32 20.1211H36C38.2091 20.1211 40 18.3302 40 16.1211V12.1211C40 9.91195 38.2091 8.12109 36 8.12109H32C29.7909 8.12109 28 9.91195 28 12.1211V16.1211C28 18.3302 29.7909 20.1211 32 20.1211ZM12 40.1211H16C18.2091 40.1211 20 38.3302 20 36.1211V32.1211C20 29.912 18.2091 28.1211 16 28.1211H12C9.79086 28.1211 8 29.912 8 32.1211V36.1211C8 38.3302 9.79086 40.1211 12 40.1211Z"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">
                    40+ indicators and drawing tools
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
                      d="M30 34.1211H40L37.1901 31.3112C36.4281 30.5492 36 29.5157 36 28.438V22.1211C36 16.8962 32.6608 12.4513 28 10.8039V10.1211C28 7.91195 26.2091 6.12109 24 6.12109C21.7909 6.12109 20 7.91195 20 10.1211V10.8039C15.3392 12.4513 12 16.8962 12 22.1211V28.438C12 29.5157 11.5719 30.5492 10.8099 31.3112L8 34.1211H18M30 34.1211V36.1211C30 39.4348 27.3137 42.1211 24 42.1211C20.6863 42.1211 18 39.4348 18 36.1211V34.1211M30 34.1211H18"
                      stroke="#101626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mb-0 text-xl">
                    Set up alerts via push, SMS or email
                  </p>
                </div>
              </div>
              <div>
                <div className="device-show os-ios mb-2">
                  <a
                    className="btn btn-azure btn-with-icon"
                    href={constants.appLinks.baseLink}
                    suppressHydrationWarning={true}
                    data-fallback-href={constants.appLinks.fallbackLink}
                  >
                    <span>Download app</span>
                    <svg
                      className="h-6 w-6 shrink-0 basis-6"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.0284 12.6699C17.0469 11.2838 17.7999 10.0035 19.0236 9.27751C18.2481 8.20874 16.9958 7.55541 15.6444 7.51461C14.2227 7.3706 12.8443 8.33559 12.1198 8.33559C11.3813 8.33559 10.2658 7.52891 9.06464 7.55276C7.48419 7.60203 6.04649 8.44814 5.27757 9.78152C3.64012 12.5173 4.86151 16.538 6.43005 18.7494C7.21483 19.8322 8.132 21.0418 9.33211 20.9989C10.5065 20.9519 10.9451 20.2762 12.3627 20.2762C13.7671 20.2762 14.1786 20.9989 15.403 20.9716C16.6632 20.9519 17.4572 19.884 18.2144 18.7908C18.7783 18.0193 19.2122 17.1665 19.5 16.2642C18.0033 15.6533 17.0301 14.2381 17.0284 12.6699Z"
                        fill="white"
                      ></path>
                      <path
                        d="M14.4261 5.7807C15.0977 5.00463 15.4285 4.00712 15.3484 3C14.3224 3.10374 13.3747 3.57578 12.6941 4.32208C12.022 5.05841 11.6815 6.02172 11.7476 6.99984C12.7874 7.01014 13.7746 6.56081 14.4261 5.7807Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="device-show os-android mb-2">
                  <a
                    className="btn btn-azure btn-with-icon"
                    href={constants.appLinks.baseLink}
                    suppressHydrationWarning={true}
                    data-fallback-href={constants.appLinks.fallbackLink}
                  >
                    <span>Download app</span>
                    <svg
                      className="h-6 w-6 shrink-0 basis-6 fill-white stroke-azure-100"
                      width="24"
                      height="26"
                      viewBox="0 0 24 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.76066 1.37094C1.4916 1.65857 1.3335 2.10402 1.3335 2.68207V23.3183C1.3335 23.8964 1.4916 24.3418 1.76066 24.6294L1.82908 24.6967L13.2746 13.1365V12.8639L1.82908 1.3037L1.76066 1.37094Z"
                        fill="inherit"
                      ></path>
                      <path
                        d="M17.0906 16.9921L13.2767 13.1371V12.8645L17.0925 9.01046L21.6988 11.6533C22.9895 12.3947 22.9895 13.6069 21.6988 14.3474L17.1785 16.9417L17.0906 16.9921Z"
                        fill="inherit"
                      ></path>
                      <path
                        d="M17.1785 16.9417L13.2765 13.0002L1.76255 24.6295C2.18878 25.0842 2.89147 25.1403 3.68293 24.6864L17.1785 16.9417Z"
                        fill="inherit"
                      ></path>
                      <path
                        d="M17.1783 9.05893L3.68293 1.31357C2.89147 0.859719 2.18878 0.91575 1.76255 1.37054L13.2765 13.0002L17.1783 9.05893Z"
                        fill="inherit"
                      ></path>
                      <path
                        d="M17.1785 16.9417L21.6988 14.3474C22.9895 13.6069 22.9895 12.3947 21.6988 11.6533L17.0925 9.01046L13.2767 12.8645V13.1371L17.0906 16.9921L17.1785 16.9417ZM17.1785 16.9417L13.2765 13.0002M17.1785 16.9417L3.68293 24.6864C2.89147 25.1403 2.18878 25.0842 1.76255 24.6295L13.2765 13.0002M13.2765 13.0002L1.76255 1.37054C2.18878 0.91575 2.89147 0.859719 3.68293 1.31357L17.1783 9.05893L13.2765 13.0002ZM1.76066 1.37094C1.4916 1.65857 1.3335 2.10402 1.3335 2.68207V23.3183C1.3335 23.8964 1.4916 24.3418 1.76066 24.6294L1.82908 24.6967L13.2746 13.1365V12.8639L1.82908 1.3037L1.76066 1.37094Z"
                        stroke="inherit"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="device-show os-other">
                  <div className="mb-2 flex items-center gap-x-3">
                    <p className="mb-0">Scan to download app</p>
                    <div className="flex rounded-lg bg-white p-1.5">
                      <div className="border-r border-r-navy-100 pr-4">
                        <MobileAppQRCode />
                      </div>
                      <div className="flex flex-col items-center justify-center gap-y-2 px-4">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5284 12.788C16.5469 11.402 17.2999 10.1217 18.5236 9.39567C17.7481 8.3269 16.4958 7.67358 15.1444 7.63277C13.7227 7.48876 12.3443 8.45376 11.6198 8.45376C10.8813 8.45376 9.76583 7.64707 8.56464 7.67092C6.98419 7.7202 5.54649 8.56631 4.77757 9.89969C3.14012 12.6355 4.36151 16.6561 5.93005 18.8675C6.71483 19.9504 7.632 21.1599 8.83211 21.1171C10.0065 21.0701 10.4451 20.3944 11.8627 20.3944C13.2671 20.3944 13.6786 21.1171 14.903 21.0898C16.1632 21.07 16.9572 20.0021 17.7144 18.909C18.2783 18.1374 18.7122 17.2847 19 16.3823C17.5033 15.7714 16.5301 14.3562 16.5284 12.788Z"
                            fill="#101626"
                          />
                          <path
                            d="M13.9261 5.89887C14.5977 5.12279 14.9285 4.12528 14.8484 3.11816C13.8224 3.2219 12.8747 3.69395 12.1941 4.44025C11.522 5.17657 11.1815 6.13988 11.2476 7.118C12.2874 7.12831 13.2746 6.67897 13.9261 5.89887Z"
                            fill="#101626"
                          />
                        </svg>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.8837 15.0734L19.274 13.1278C20.242 12.5723 20.242 11.6632 19.274 11.1071L15.8192 9.12503L12.9574 12.0155V12.22L15.8178 15.1113L15.8837 15.0734ZM15.8837 15.0734L12.9572 12.1173M15.8837 15.0734L5.76207 20.882C5.16848 21.2224 4.64147 21.1804 4.32179 20.8393L12.9572 12.1173M12.9572 12.1173L4.32179 3.39509C4.64147 3.054 5.16848 3.01198 5.76207 3.35237L15.8836 9.16139L12.9572 12.1173ZM4.32037 3.39539C4.11858 3.61111 4 3.9452 4 4.37874V19.8559C4 20.2895 4.11858 20.6236 4.32037 20.8393L4.37169 20.8897L12.9558 12.2196V12.0151L4.37169 3.34497L4.32037 3.39539Z"
                            stroke="#101626"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <Link
                  className="btn btn-primary-outline btn-with-icon"
                  href="/trading-platforms/mobile-trading-app"
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

            <div className="flex items-center lg:w-7/12">
              <picture className="w-full">
                <source
                  media="(max-width: 1023px)"
                  srcSet={awsImage("trading-platforms_mobile-platform-mob.png")}
                />
                <img
                  className="relative -ml-6 h-auto w-[calc(100%+48px)] max-w-none lg:ml-0 lg:w-full"
                  src={awsImage("trading-platforms_mobile-platform-img.png")}
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

MobileTrading.displayName = "MobileTrading";
export default MobileTrading;
