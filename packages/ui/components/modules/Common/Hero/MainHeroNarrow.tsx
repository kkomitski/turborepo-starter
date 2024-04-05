import Image from "next/image";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import HeroAccoladesSectionA from "./Common/HeroAccoladesSectionA";
import TrustpilotWidgetMicro from "../../../components/widgets/TrustpilotWidgetMicro";
import OnboardingButton from "@/components/elements/OnboardingButton";

const MainHeroNarrow = forwardRef(
  (
    {
      title,
      content,
      animatedIcon,
      imgUrl,
      bgImgUrl,
      mobileImgUrl,
      fscsFootnote,
      enableTrustpilot = true,
      overrideCTA = null,
    }: {
      title: string | ReactNode;
      content: ReactNode;
      animatedIcon?: string;
      imgUrl: string;
      bgImgUrl: string;
      mobileImgUrl: string;
      fscsFootnote: string;
      enableTrustpilot?: Boolean;
      overrideCTA?: ReactNode | null;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <>
        <section ref={ref} className="Module menu-section relative">
          <div className="relative w-full overflow-x-hidden">
            <Image
              className="absolute right-0 top-0 hidden h-full w-auto object-cover object-right lg:block"
              src={bgImgUrl}
              alt=""
              width={1185}
              height={1303}
              priority
            />
            <Image
              className="absolute right-0 top-6 z-10 hidden lg:-right-28 lg:top-1/2 lg:-mt-4 lg:block lg:max-w-[575px] lg:-translate-y-1/2 xl:max-w-[700px] 2xl:max-w-[920px] 2xl:pl-16 3xl:right-20 3xl:pl-12"
              src={imgUrl}
              alt=""
              height={776}
              width={1231}
              priority
            />

            <div className="main-xl-container relative">
              <div className="flex lg:w-1/2 2xl:w-5/12">
                <div className="-ml-6">
                  <h1 className="headline-xl mb-6 border-l-8 border-l-azure-100 pl-6 font-light leading-none lg:pr-10">
                    {animatedIcon && (
                      <Image
                        className="mb-4 h-[72px] w-[72px] rounded-lg shadow"
                        width={72}
                        height={72}
                        src={`${animatedIcon}`}
                        alt=""
                        priority
                      />
                    )}
                    <span>{title}</span>
                  </h1>
                  <div className="mb-10 pl-8">{content}</div>
                  {overrideCTA === null ? (
                    <div className="mb-6 flex flex-col gap-x-2 pl-9">
                      <OnboardingButton
                        account="demo"
                        variant="azure"
                        className="mb-2"
                        size="lg"
                      >
                        Open demo account
                      </OnboardingButton>
                      <OnboardingButton
                        account="live"
                        variant="primary-outline"
                        size="lg"
                      >
                        Create account
                      </OnboardingButton>
                    </div>
                  ) : (
                    overrideCTA
                  )}

                  {enableTrustpilot && (
                    <div className="pl-9">
                      <TrustpilotWidgetMicro className="-ml-7" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Image
              className="w-full object-cover lg:hidden"
              src={mobileImgUrl}
              width={1170}
              height={1007}
              alt=""
            />
          </div>
        </section>

        <HeroAccoladesSectionA fscsFootnote={fscsFootnote} />
      </>
    );
  }
);

MainHeroNarrow.displayName = "MainHeroNarrow";
export default MainHeroNarrow;
