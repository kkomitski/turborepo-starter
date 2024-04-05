import constants, { awsImage } from "ui/helpers/constants";
import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  tags?: string[];
  author: "michaelHewson";
};

const authors: Record<Props["author"], ReactNode> = {
  michaelHewson: (
    <div className="mb-6 flex w-full flex-col border-b border-b-navy-20 pb-2 dark:border-b-white-85 sm:flex-row sm:items-end sm:justify-between md:mb-8">
      {/* <small className="flex flex-col gap-x-4 pb-2 pt-10 sm:flex-row">
        <span>Published on: 08/10/2021</span>
        <span className="hidden sm:block">|</span>
        <span>Modified on: 25/01/2023</span>
      </small> */}
      <div className="mb-6 flex gap-x-4 sm:mb-0 sm:mt-4">
        {/* <img
          className="hidden h-16 w-16 rounded-full"
          data-responsive="false"
          src="https://assets.cmcmarkets.com/neptune/images/learn/avatar.png"
          alt=""
        /> */}
        <div className="flex hidden flex-col justify-center">
          <a href="#" className="mb-1">
            Michael Hewson
          </a>
          <span className="text-xs uppercase">Chief Market Analyst</span>
          <span className="text-xs">mhewson_CMC</span>
        </div>
      </div>
    </div>
  ),
};

const LearnPageHeader = ({
  title,
  subtitle,
  children,
  tags,
  author,
}: Props) => {
  return (
    <section
      className="Module relative bg-white-95"
      data-contenteditable="false"
    >
      <div className="main-container relative  mx-auto pb-4 pt-12 md:pb-14">
        <div className="grid grid-cols-12 gap-4 lg:gap-10">
          <div className="col-span-full lg:col-span-8">
            <div className="relative">
              <small className="block text-xs uppercase">
                {tags?.map((tag, index) => tag)}
              </small>
              <h1 className="headline-lg mb-10 lg:mb-2">{title}</h1>
              <p>{subtitle}</p>
              {authors[`${author}`]}
              <div className="mb-10 lg:mb-0">
                <div className="lg:hidden">
                  <div className="flex justify-center gap-x-2">
                    <a
                      className="block w-10 rounded-md bg-white-90 p-2 dark:bg-navy-70"
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.cmcmarkets.com%2Fen-gb%2Fnews-and-analysis%2Fbulls-in-a-china-shop-stocks-rise-ahead-of-the-fed%3Fts%3D1647444620"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="fill-navy-100 dark:fill-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2ZM4 4V20H20V4H4ZM11.1331 12.0044H13V18H15V12.0044H16.9824V10.0044H15V9C15 8.44772 15.4477 8 16 8H17V6H16C14.3431 6 13 7.34315 13 9V10.0044H11.1331V12.0044Z"
                          fill="inherit"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="block w-10 rounded-md bg-white-90 p-2 dark:bg-navy-70"
                      href="https://twitter.com/intent/tweet?text=Bulls+in+a+China+shop%2C+stocks+rise+ahead+of+the+Fed&amp;url=https%3A%2F%2Fwww.cmcmarkets.com%2Fen-gb%2Fnews-and-analysis%2Fbulls-in-a-china-shop-stocks-rise-ahead-of-the-fed%3Fts%3D1647444620"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="fill-navy-100 dark:fill-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.1195 4.50827L22.5343 4.67349L21.8983 5.948C21.5882 6.56953 21.2778 7.19105 20.967 7.81258C20.9302 7.94422 20.8654 8.05962 20.7697 8.20987C20.7296 8.27265 20.5929 8.47236 20.5865 8.48194C20.5504 8.53608 20.5237 8.57878 20.5045 8.61299V11.0015C20.5045 17.1135 14.5895 20.9974 9.00354 20.9974C7.86051 20.9974 6.99207 20.9427 5.99765 20.7257C4.36115 20.3685 3.14327 19.6587 2.58597 18.418L2.01221 17.1407L3.40659 17.0124C4.66801 16.8964 5.76169 16.6561 6.60159 16.3343C4.29577 15.9635 3.0036 14.9508 3.0036 13.0489V12.0489H4.0036C4.22331 12.0489 4.42143 12.0311 4.59854 11.9983C2.868 10.9636 2.00122 9.30379 2.00122 7.00152C2.00103 6.9034 2.00103 6.90339 2.00044 6.79847C1.99394 5.63803 2.05627 5.01797 2.37395 4.22659C2.57754 3.71941 2.87183 3.24988 3.2679 2.81967L4.02251 2L4.75617 2.83847C7.17394 5.60161 9.56395 7.27795 12.0042 7.48072C12.0146 4.93105 13.9415 3.00152 16.5043 3.00152C17.6991 3.00152 18.7828 3.45501 19.6345 4.27273C20.1006 4.36851 20.5957 4.44709 21.1195 4.50827ZM18.9086 6.16202L18.6021 6.0926L18.3904 5.86028C17.8785 5.29855 17.2359 5.00152 16.5043 5.00152C15.0414 5.00152 14.0041 6.04391 14.0041 7.50152C14.0041 7.73974 13.998 7.88942 13.9683 8.08615C13.8499 8.87116 13.4096 9.50152 12.5041 9.50152C9.50607 9.50152 6.80136 7.89542 4.16389 5.15228C4.02792 5.56561 3.99595 5.99047 4.00041 6.78727C4.00101 6.89384 4.00101 6.89384 4.00122 7.00152C4.00122 9.04953 4.83093 10.1698 6.79547 10.7942L7.49255 11.0158V11.7472C7.49255 12.6342 6.65222 13.4691 5.42268 13.8431C5.98631 14.2708 7.139 14.5015 9.00389 14.5015H10.0039V15.5015C10.0039 16.9343 8.35762 18.0561 5.87075 18.6419C6.68178 18.8903 7.76166 18.9974 9.00354 18.9974C13.618 18.9974 18.5045 15.7888 18.5045 11.0015V8.50152C18.5045 8.20774 18.5897 7.95273 18.7311 7.68759C18.7865 7.58393 18.8474 7.48509 18.9225 7.37237C18.9367 7.35115 18.9892 7.27426 19.0309 7.21279L19.1101 7.05429C19.2386 6.79745 19.3669 6.54061 19.4952 6.28377C19.2958 6.24599 19.1003 6.20541 18.9086 6.16202Z"
                          fill="inherit"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="block w-10 rounded-md bg-white-90 p-2 dark:bg-navy-70"
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.cmcmarkets.com%2Fen-gb%2Fnews-and-analysis%2Fbulls-in-a-china-shop-stocks-rise-ahead-of-the-fed%3Fts%3D1647444620"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="fill-navy-100 dark:fill-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2ZM4 4V20H20V4H4ZM13 9C12.4823 9 11.9353 9.15826 11.4521 9.45215L11 9H10V16H12V12C12 11.4243 12.594 11 13 11H14C14.406 11 15 11.4243 15 12V16H17V12C17 10.1472 15.394 9 14 9H13ZM8 8C8.55228 8 9 7.55228 9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8ZM7 9V16H9V9H7Z"
                          fill="inherit"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-white-90 p-2 dark:bg-navy-70"
                      href="mailto:?=&amp;subject=Take%20a%20look%20at%20this%20article%20from%20CMC%20Markets&amp;body=View%20this%20article%20on%20CMC%20Markets%27%20website.%20Bulls%20in%20a%20China%20shop%2C%20stocks%20rise%20ahead%20of%20the%20Fed%20-%20https%3A%2F%2Fwww.cmcmarkets.com%2Fen-gb%2Fnews-and-analysis%2Fbulls-in-a-china-shop-stocks-rise-ahead-of-the-fed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="stroke-navy-100 dark:stroke-white"
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4L8.8906 9.2604C9.5624 9.70827 10.4376 9.70827 11.1094 9.2604L19 4M3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15Z"
                          stroke="inherit"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-b border-b-navy-20 pb-9 dark:border-b-white-85 lg:min-h-[350px] 2xl:min-h-[325px]">
                {children}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="comp-learn-sticky-sidebar2 relative hidden lg:block">
              <div className="learn-sticky-sidebar-container z-40 rounded-3xl bg-white p-8 pt-56 text-navy-100 lg:absolute xl:pt-60">
                <Image
                  className="absolute left-0 top-0 w-full rounded-t-3xl border-b-[12px] border-b-azure-100"
                  src={awsImage("learn-article_sidebar-top-bg.png")}
                  width={360}
                  height={162}
                  alt=""
                />
                <Image
                  className="absolute left-0 right-0 top-10 w-full"
                  src={awsImage("learn-article_sidebar-platform.png")}
                  width={352}
                  height={188}
                  alt=""
                />
                <div className="mb-6">
                  <p className="headline-sm">Discover our powerful platform</p>
                </div>
                <div className="mb-8 flex flex-col gap-y-2">
                  <div className="flex gap-x-2.5">
                    <div className="mt-0.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                          stroke="#101626"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-base">
                        Get started with £10,000 of virtual funds on a risk-free
                        demo account
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-2.5">
                    <div className="mt-0.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                          stroke="#101626"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-base">
                        Access {constants.DIDS.INSTRUMENT_TOTAL_COUNT} global
                        instruments - FX, indices, shares &amp; more
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-2.5">
                    <div className="mt-0.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                          stroke="#101626"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-base">
                        No hidden fees, tight spreads and low margin rates
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  data-label="Create Account"
                  href="https://signup.cmcmarkets.com/#/emailRegistration?l=en&amp;r=gb&amp;p=SB&amp;i=demo&amp;e=&amp;sc=false&amp;iaid=null&amp;d=CMC&amp;lsrc=1"
                  className="js-modal btn btn-azure"
                  data-url="/en-gb/onboarding"
                  data-function="demo"
                >
                  Open a demo account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnPageHeader;
