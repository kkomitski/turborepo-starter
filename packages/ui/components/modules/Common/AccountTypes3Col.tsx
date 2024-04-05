import React, {
  ForwardedRef,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";
import AccountType from "./AccountTypes/AccountType";
import Link from "next/link";

const AccountTypes3Col = forwardRef(
  (
    {
      title,
      text,
      enableComparisonBtn = false, //only displays if title is defined
      enableLeftLine = true,
      accountTypeLeft,
      accountTypeMiddle,
      accountTypeRight,
    }: {
      title?: string | ReactNode;
      text?: string | ReactNode;
      enableComparisonBtn?: boolean;
      enableLeftLine?: boolean;
      accountTypeLeft: ReactElement<typeof AccountType>;
      accountTypeMiddle: ReactElement<typeof AccountType>;
      accountTypeRight: ReactElement<typeof AccountType>;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <section ref={ref} className="Module menu-section relative bg-white">
        {enableLeftLine && (
          <div className="lines-container">
            <div className="relative h-full w-full">
              <div className="lines">
                <div className="left"></div>
              </div>
            </div>
          </div>
        )}
        {title && (
          <div className="main-xl-container relative py-0">
            <div className="relative mb-20 flex h-full flex-col justify-between pb-3 lg:flex-row lg:pb-10">
              <div className="pb-10 pt-20 lg:w-4/12 lg:pb-0">
                <h2 className="headline-lg relative -ml-6 mb-6 max-w-lg border-l-8 border-black pl-4">
                  {title}
                </h2>
                {text}
              </div>
              <div className="mt-auto flex h-full pr-40 lg:w-8/12 lg:items-end lg:justify-end">
                <div className="z-10 hidden lg:block">
                  <div className="absolute right-20 top-0 h-full w-[1px] bg-white mix-blend-saturation"></div>
                  <div className="absolute right-20 top-0 h-full w-[1px] bg-white mix-blend-difference"></div>
                </div>
                {enableComparisonBtn && (
                  <div className="lg:ml-auto">
                    <Link
                      className="btn btn-primary-outline btn-with-icon"
                      href="/account-specifications"
                    >
                      <span className="">Account comparison</span>
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.33333 4.16895L14 8.83561M14 8.83561L9.33333 13.5023M14 8.83561L2 8.83561"
                          stroke="#101626"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className={"main-xl-container " + (title ? "pt-0" : "")}>
          <div className="relative grid gap-x-10 gap-y-[120px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-20 lg:gap-y-40">
            {accountTypeLeft}
            {accountTypeMiddle}
            {accountTypeRight}
          </div>
        </div>
      </section>
    );
  }
);

AccountTypes3Col.displayName = "AccountTypes3Col";
export default AccountTypes3Col;
