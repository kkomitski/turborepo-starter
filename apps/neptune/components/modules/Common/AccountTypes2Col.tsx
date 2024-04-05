import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, {
  ForwardedRef,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";
import AccountType from "./AccountTypes/AccountType";
import Lines from "@/components/global/Misc/Lines";

const AccountTypes2Col = forwardRef(
  (
    {
      accountTypeLeft,
      accountTypeRight,
      title,
      description,
    }: {
      accountTypeLeft: ReactElement<typeof AccountType>;
      accountTypeRight: ReactElement<typeof AccountType>;
      title?: string | ReactNode | null;
      description?: string | ReactNode | null;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <section ref={ref} className="Module menu-section relative bg-white">
        <Lines left />
        <div className="main-xl-container">
          <div className="relative grid gap-x-10 gap-y-[120px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
            <div className="-mb-10 sm:col-span-2 lg:col-span-1 lg:mb-0">
              <h2 className="headline-lg relative -ml-6 mb-6 max-w-md border-l-8 border-black pl-4">
                {title || "Account types for every trader"}
              </h2>
              <p className="text-xl xl:max-w-md">
                {description ||
                  "Tight spreads on 12,000 instruments, volume-based discounts, no hidden fees."}
              </p>
            </div>

            {accountTypeLeft}
            {accountTypeRight}
          </div>
        </div>
      </section>
    );
  }
);

AccountTypes2Col.displayName = "AccountTypes2Col";
export default AccountTypes2Col;
