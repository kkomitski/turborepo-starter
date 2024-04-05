/* eslint-disable @next/next/no-html-link-for-pages */
import Lines from "@/components/global/Misc/Lines";
import RightArrowSVG from "@/components/svg/RightArrowSVG";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React, { ForwardedRef, forwardRef } from "react";

type Props = {};

const ShareBasketsProducts = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    return (
      <section ref={ref} className="relative scroll-mt-32 bg-white">
        <Lines left />
        <div className="main-xl-container relative py-0">
          <div className="relative mb-10 h-full lg:mb-20">
            <div className="pb-10 pt-20 lg:pb-0">
              <h2 className="headline-lg relative -ml-6 border-l-8 border-black pl-4">
                Our exclusive share baskets
              </h2>
            </div>
          </div>
        </div>
        <div className="main-xl-container pt-0">
          <div className="grid gap-x-12 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div className="relative mb-6 rounded-lg">
                <Image
                  className="w-full object-cover object-top"
                  src={awsImage("share-baskets-trading_product-bg-1.png")}
                  width={476}
                  height={299}
                  alt=""
                />
                <div className="absolute bottom-0 left-0 h-[70px] w-full rounded-b-lg border-l-8 border-l-azure-100 px-6 py-2 text-white backdrop-blur-3xl">
                  <small className="mb-2 text-xs uppercase">
                    Share Baskets
                  </small>
                  <h3 className="text-2xl">CMC Share baskets</h3>
                </div>
              </div>
              <p className="mb-10 lg:mb-6">
                Our in-house trading team have selected constituent shares based
                on their level of exposure to a particular theme, and potential
                for growth within that industry.
              </p>
              <a
                className="btn btn-primary-outline btn-with-icon"
                href="#howWeBuild"
              >
                <span>CMC share baskets</span>
                <RightArrowSVG />
              </a>
            </div>
            <div>
              <div className="relative mb-6 rounded-lg">
                <Image
                  className="w-full object-cover object-top"
                  src={awsImage("share-baskets-trading_product-bg-2.png")}
                  width={476}
                  height={299}
                  alt=""
                />
                <div className="absolute bottom-0 left-0 h-[70px] w-full rounded-b-lg border-l-8 border-l-azure-100 px-6 py-2 text-white backdrop-blur-3xl">
                  <small className="mb-2 text-xs uppercase">
                    THEMATIC SHARE BASKETS
                  </small>
                  <h3 className="text-2xl">OptionsHawk thematic baskets</h3>
                </div>
              </div>
              <p className="mb-10 lg:mb-6">
                Trade disruptive trends with our thematic share baskets,
                constructed by CMC in collaboration with Joe Kunkle (JK).
              </p>
              <a
                className="btn btn-primary-outline btn-with-icon"
                href="/en-gb/share-baskets-trading/joe-kunkle"
              >
                <span>Joe Kunkle&apos;s thematic baskets</span>
                <RightArrowSVG />
              </a>
            </div>
            <div>
              <div className="relative mb-6 rounded-lg">
                <Image
                  className="w-full object-cover object-top"
                  src={awsImage("share-baskets-trading_product-bg-3.png")}
                  width={476}
                  height={299}
                  alt=""
                />
                <div className="absolute bottom-0 left-0 h-[70px] w-full rounded-b-lg border-l-8 border-l-azure-100 px-6 py-2 text-white backdrop-blur-3xl">
                  <small className="mb-2 text-xs uppercase">
                    RRG Momentum+
                  </small>
                  <h3 className="text-2xl">RRG® Momentum+ baskets</h3>
                </div>
              </div>
              <p className="mb-10 lg:mb-6">
                Trade baskets of stocks exhibiting strong relative momentum
                versus their CMC benchmark
              </p>
              <a
                className="btn btn-primary-outline btn-with-icon"
                href="/en-gb/share-baskets-trading/rrg"
              >
                <span>RRG Momentum+ baskets</span>
                <RightArrowSVG />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ShareBasketsProducts.displayName = "ShareBasketsProducts";
export default ShareBasketsProducts;
