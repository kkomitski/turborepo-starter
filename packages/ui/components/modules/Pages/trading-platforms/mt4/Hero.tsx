import React, { ForwardedRef, forwardRef } from "react";
import Image from "next/image";
import TrustpilotWidgetMicro from "../../../components/widgets/TrustpilotWidgetMicro";
import { awsImage } from "@/helpers/constants";
import usePlatformDetector, {
  OperatingSystem,
} from "@/hooks/usePlatformDetector";
import WindowsIconSVG from "@/components/svg/WindowsIconSVG";
import MacOSIconSVG from "@/components/svg/MacOSIconSVG";
import PlayStoreSVG from "../../../components/svg/PlayStoreSVG";
import IOSIconSVG from "../../../components/svg/IOSIconSVG";
import OnboardingButton from "@/components/elements/OnboardingButton";

type Props = {};

const Hero = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const operatingSystem: OperatingSystem = usePlatformDetector();
  return (
    <>
      <section
        ref={ref}
        className="relative lg:h-[768px] xl:h-[800px] 2xl:h-[915px] 5xl:h-[768px]"
      >
        <div className="relative flex h-full w-full flex-col overflow-x-hidden">
          <picture>
            <source
              media="(max-width: 639px)"
              srcSet={awsImage("mt4_hero-bg-mob.jpg")}
            />
            <Image
              className="absolute h-full w-full object-cover object-bottom lg:h-full"
              src={awsImage("mt4_hero-bg.jpg")}
              quality={100}
              fill={true}
              alt=""
              priority={true}
            />
          </picture>

          <Image
            className="relative z-10 order-2 mb-20 px-6 drop-shadow-lg lg:absolute lg:-right-24 lg:top-1/2 lg:order-1 lg:-mt-4 lg:mb-0 lg:block lg:max-w-[600px] lg:-translate-y-1/2 lg:px-0 2xl:max-w-[820px] 2xl:pl-16 3xl:right-28 3xl:pl-12"
            src={awsImage("mt4_platform-hero-img.png")}
            alt=""
            width={1231}
            height={766}
            unoptimized={true}
            priority={true}
          />

          <div className="main-xl-container relative order-1 h-full w-full pb-20 pt-14 lg:order-2 lg:py-0">
            <div className="flex h-full flex-col lg:flex-row">
              <div className="mb-20 flex h-full w-full flex-col justify-center text-white lg:mb-0 lg:w-4/12 2xl:w-3/12">
                <div className="-ml-6">
                  <h1 className="mb-6 border-l-8 border-l-azure-100 pl-6 text-[52px] font-light leading-none xl:text-6xl 3xl:text-[64px]">
                    MetaTrader 4 platform
                  </h1>
                  <ul className="mb-20 list-disc pl-12 2xl:mb-14 3xl:mb-20">
                    <li className="text-xl">
                      Competitive spreads on 175+ FX pairs, indices and
                      commodities
                    </li>
                    <li className="text-xl">
                      Fast, 100% automated execution, with tier-one market
                      liquidity
                    </li>
                    <li className="text-xl">
                      Advanced charting tools, EA&apos;s and algorithmic trading
                    </li>
                  </ul>
                  <div className="mb-6 pl-9">
                    <OnboardingButton
                      className="mb-2"
                      account="demo"
                      variant="azure"
                      params="jid=gb2&amp;iaid=null&amp;lsrc=1"
                      size="lg"
                    >
                      Open demo account
                    </OnboardingButton>
                    <div>
                      {operatingSystem === "Windows" && (
                        <a
                          className="btn btn-lg btn-with-icon btn-secondary fill-white stroke-transparent font-semibold text-white hover:fill-black hover:stroke-white"
                          href="https://assets.cmcmarkets.com/files/mt4setup.exe"
                        >
                          <span>Download MT4</span>
                          <WindowsIconSVG className="-mt-[1px]" />
                        </a>
                      )}
                      {operatingSystem === "Mac" && (
                        <a
                          className="btn btn-lg btn-with-icon btn-secondary fill-white font-semibold text-white hover:fill-black"
                          href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/MetaTrader4.dmg"
                        >
                          <span>Download MT4</span>
                          <MacOSIconSVG />
                        </a>
                      )}
                      {operatingSystem === "iOS" && (
                        <a
                          className="btn btn-lg btn-with-icon btn-secondary font-semibold text-white hover:fill-black lg:mx-0"
                          rel="nofollow"
                          href="https://apps.apple.com/us/app/metatrader-4/id496212596"
                        >
                          <span>Download MT4</span>
                          <IOSIconSVG className="fill-white" />
                        </a>
                      )}
                      {operatingSystem === "Android" && (
                        <a
                          className="btn btn-lg btn-with-icon btn-secondary fill-white stroke-black font-semibold text-white hover:fill-black hover:stroke-white lg:mx-0"
                          rel="nofollow"
                          href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4"
                        >
                          <span>Download MT4</span>
                          <PlayStoreSVG
                            className="h-3.5 w-3.5 stroke-white"
                            width={24}
                            height={26}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mb-4 pl-2 lg:mb-0">
                    <TrustpilotWidgetMicro theme="dark" />
                  </div>
                </div>
              </div>
              <div className="relative h-full lg:w-8/12 2xl:w-9/12">
                <div className="z-10 hidden lg:block">
                  <div className="absolute left-20 top-0 h-full w-[1px] bg-white mix-blend-saturation"></div>
                  <div className="absolute left-20 top-0 h-full w-[1px] bg-white mix-blend-difference"></div>
                  <div className="absolute right-20 top-0 h-full w-[1px] bg-white mix-blend-saturation"></div>
                  <div className="absolute right-20 top-0 h-full w-[1px] bg-white mix-blend-difference"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

Hero.displayName = "Hero";
export default Hero;
