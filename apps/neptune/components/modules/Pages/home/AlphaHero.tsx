import RightArrowSVG from "@/components/svg/RightArrowSVG";
import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroAccoladesSectionA from "../../Common/Hero/Common/HeroAccoladesSectionA";
import AlphaLogoSVG from "@/components/svg/AlphaLogoSVG";
import { awsImage, getHtmlLang } from "@/helpers/constants";
import OnboardingButton from "@/components/elements/OnboardingButton";

const AlphaHero = () => {
  return (
    <>
      <section className="relative">
        <Image
          className="absolute h-full w-full object-cover"
          src={awsImage("home_alpha-hero-bg.png")}
          alt=""
          width={1920}
          height={1080}
          quality={50}
        />
        <video
          className="absolute left-0 block h-full w-full overflow-hidden object-cover"
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
        >
          <source src="https://assets.cmcmarkets.com/neptune/images/alpha/hero-vid3.webm" />
          <source src="https://assets.cmcmarkets.com/neptune/images/alpha/hero-vid3.mp4" />
        </video>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full md:w-1/2 md:border-r md:border-r-white/50 md:bg-black/20 md:backdrop-blur-3xl"></div>
          <div className="absolute right-0 top-0 z-10 hidden h-full w-full md:block md:w-1/2">
            <div className="z-2  relative hidden h-full w-full flex-col items-center justify-center md:flex">
              <div className="flex flex-col text-center text-white">
                <AlphaLogoSVG className="mx-auto mb-4" />
                <p className="mb-12 text-2xl">Our premium membership</p>

                <a
                  href={`/${getHtmlLang()}/alpha`}
                  className="btn btn-white btn-with-icon mx-auto stroke-navy-100"
                >
                  <span>Discover Alpha</span>
                  <RightArrowSVG />
                </a>
              </div>
            </div>
          </div>
          <div className="main-xl-container mx-auto bg-black/20 py-10 backdrop-blur-3xl md:border-none md:bg-transparent md:py-20 md:backdrop-blur-none xl:px-20">
            <div className="relative flex w-full flex-col md:flex-row">
              <div className="relative my-4 flex w-full flex-shrink-0 flex-col flex-wrap md:mx-auto md:my-0 md:flex-row md:items-center">
                <div className="flex w-full flex-col text-white md:mb-0 md:w-5/12">
                  <div className="mb-2 lg:max-w-[415px]">
                    <h1 className="-ml-4 mb-6 border-l-8 border-l-azure-100 pl-4 text-[48px] leading-tight md:-mr-5 md:ml-0 md:pl-6 md:pr-0 md:text-5xl lg:text-[64px] lg:leading-none">
                      Calling all calculated risk-takers
                    </h1>
                    <p className="mb-16 pl-3 md:mb-10 md:pl-9 xl:pr-8">
                      Spread bet and trade CFDs across 12,000 instruments on our
                      award-winning platform<sup>1</sup>, with tight spreads, no
                      hidden fees, and 24/5 support.
                    </p>

                    <div className="ml-3 flex flex-col gap-y-4 md:hidden">
                      <OnboardingButton account="demo" variant="azure">
                        Open a demo account
                      </OnboardingButton>
                      <TrustpilotWidgetMicro theme="dark" className="-ml-7" />
                    </div>
                  </div>

                  <div className="mb-6 hidden pl-9 md:block">
                    <OnboardingButton account="demo" variant="azure">
                      Open a demo account
                    </OnboardingButton>
                  </div>

                  <div className="-ml-7 mb-4 hidden pl-9 md:mb-0 md:block">
                    <TrustpilotWidgetMicro theme="dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-2 relative flex w-full items-center justify-center py-24 md:hidden">
            <div>
              <div className="flex flex-col text-center text-white">
                <AlphaLogoSVG className="mx-auto mb-4" />
                <p className="mb-12 text-2xl">Our premium membership</p>

                <a
                  href={`/${getHtmlLang()}/alpha`}
                  className="btn btn-white btn-with-icon mx-auto stroke-navy-100"
                >
                  <span>Discover Alpha</span>
                  <RightArrowSVG />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroAccoladesSectionA fscsFootnote="2" />
    </>
  );
};

export default AlphaHero;
