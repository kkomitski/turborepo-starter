import Image from "next/image";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";

import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import HeroAccoladesSectionA from "../../modules/Common/Hero/Common/HeroAccoladesSectionA";
import Lines from "../../global/Misc/Lines";

type Props = {
  content: {
    fields: {
      backgroundImage: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      bigHeader: string;
      content: string;
      mobileImage: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  };
};
const Herobanner = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const defaultHeroImg: string =
      "https://assets.cmcmarkets.com/neptune/images/common/platform-hero-img.png";

    return (
      <>
        <section ref={ref} className="Module menu-section relative">
          <div className="relative w-full overflow-x-hidden">
            {/* <Image
              className="absolute -right-36 top-0 hidden h-full w-4/12 object-cover object-right-bottom xl:block 3xl:right-0"
              src={`https:${props.content.fields.backgroundImage.fields.file.url}`}
              alt=""
              width={1185}
              height={1303}
              priority={true}
            /> */}
            {/* <Image
              className="absolute right-0 top-6 z-10 hidden lg:top-1/2 lg:-mt-4 lg:-translate-y-1/2 xl:-right-28 xl:block xl:max-w-[600px] 2xl:max-w-[820px] 2xl:pl-16 3xl:right-28 3xl:pl-12"
              src={imgUrl || defaultHeroImg}
              alt=""
              height={776}
              width={1231}
              priority={true}
            /> */}

            <Lines />

            <div className="main-xl-container relative">
              <div className="flex xl:w-1/2 2xl:w-5/12 3xl:pr-12">
                <div className="-ml-6">
                  <h1 className="headline-xl mb-6 border-l-8 border-l-azure-100 pl-6 font-light leading-none 3xl:pr-10">
                    {/* {animatedIcon && (
                      <Image
                        className="mb-4 h-[72px] w-[72px] rounded-lg shadow"
                        width={72}
                        height={72}
                        src={`${animatedIcon}`}
                        alt=""
                        priority={true}
                      />
                    )} */}
                    <span>{props.content.fields.bigHeader}</span>
                  </h1>
                  {/* <div className="mb-10 pl-8">{content}</div> */}
                  {/* {overrideCTA === null ? (
                    <div className="mb-6 flex flex-col gap-x-2 pl-9">
                      <a
                        className="js-modal btn btn-lg btn-azure mb-2"
                        data-iframe-params="?jid=gb3&amp;iaid=null&amp;lsrc=1"
                        data-label="Create Account"
                        href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb3&amp;iaid=null&amp;lsrc=1"
                        data-url="/en-gb/onboarding"
                        data-function="demo"
                      >
                        Open demo account
                      </a>
                      <a
                        className="btn btn-lg btn-primary-outline js-modal font-semibold"
                        data-iframe-params="?jid=gb1&amp;iaid=null&amp;lsrc=1"
                        data-url="/en-gb/onboarding"
                        data-function="live"
                        data-label="Create Account"
                        href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb1&amp;iaid=null&amp;lsrc=1"
                      >
                        Create account
                      </a>
                    </div>
                  ) : (
                    overrideCTA
                  )}

                  {enableTrustpilot && (
                    <div className="pl-9">
                      <TrustpilotWidgetMicro className="-ml-7" />
                    </div>
                  )} */}
                </div>
              </div>
            </div>
            {/* <Image
              priority={true}
              className="w-full object-cover xl:hidden"
              src={mobileImgUrl}
              width={1170}
              height={1007}
              alt=""
            /> */}
          </div>
        </section>
        {/* <HeroAccoladesSectionA fscsFootnote={fscsFootnote} /> */}
      </>
    );
  }
);

Herobanner.displayName = "Herobanner";

export default Herobanner;
