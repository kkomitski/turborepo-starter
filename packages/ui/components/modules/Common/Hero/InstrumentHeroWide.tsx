import Image from "next/image";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import HeroAccoladesSectionA from "./Common/HeroAccoladesSectionA";
import TrustpilotWidgetMicro from "../../../components/widgets/TrustpilotWidgetMicro";
import { awsImage } from "@/helpers/constants";
import OnboardingButton from "@/components/elements/OnboardingButton";

const InstrumentHeroWide = forwardRef(
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
      enableLine = true,
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
      enableLine?: Boolean;
      overrideCTA?: ReactNode | null;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    const defaultHeroImg: string = awsImage(
      "common_generic-platform-hero-img.png"
    );

    return (
      <>
        <section ref={ref} className="Module menu-section relative">
          <div className="relative w-full overflow-x-hidden">
            <div className="absolute right-0 top-0 h-full w-6/12">
              <Image
                className="absolute -right-0 top-0 hidden h-full w-full object-cover object-left lg:block 3xl:right-0"
                src={bgImgUrl}
                alt=""
                width={1185}
                height={1303}
                priority={true}
                quality={100}
              />
              <Image
                className="absolute -right-20 left-auto top-6 z-10 hidden w-[calc(100%+7rem)] max-w-none drop-shadow-lg lg:top-1/2 lg:block lg:-translate-y-1/2 3xl:-left-8 3xl:w-full 3xl:max-w-4xl"
                src={imgUrl || defaultHeroImg}
                alt=""
                height={776}
                width={1231}
                priority={true}
                quality={100}
              />
            </div>

            {enableLine && (
              <div className="lines-container hidden lg:block">
                <div className="relative h-full w-full">
                  <div className="lines">
                    <div className="right line-faded"></div>
                  </div>
                </div>
              </div>
            )}

            <div className="main-xl-container relative">
              <div className="flex lg:w-5/12 3xl:pr-12">
                <div className="-ml-6">
                  <h1 className="headline-xl mb-6 border-l-8 border-l-azure-100 pl-6 font-light leading-none 3xl:pr-10">
                    {animatedIcon && (
                      <Image
                        className="mb-4 h-[72px] w-[72px] rounded-lg shadow"
                        width={72}
                        height={72}
                        src={`${animatedIcon}`}
                        alt=""
                        priority={true}
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
              priority={true}
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

InstrumentHeroWide.displayName = "MainHeroWide";

export default InstrumentHeroWide;
