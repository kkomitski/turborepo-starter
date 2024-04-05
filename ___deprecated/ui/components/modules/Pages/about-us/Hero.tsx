import React, { ReactNode } from "react";
import HeroAccoladesSectionA from "../../Common/Hero/Common/HeroAccoladesSectionA";
import Image from "next/image";
import constants, { awsImage } from "@/helpers/constants";
import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import OnboardingButton from "@/components/elements/OnboardingButton";

const Hero = () => {
  return (
    <>
      <section className="relative">
        <div className="lines-container hidden lg:block">
          <div className="relative h-full w-full">
            <div className="lines">
              <div className="left"></div>
            </div>
          </div>
        </div>

        <Image
          className="hidden h-full w-full object-cover object-right-bottom lg:absolute lg:top-0 lg:right-0 lg:block lg:w-1/2 lg:object-cover lg:object-right-bottom"
          alt=""
          width={1440}
          height={1370}
          quality={100}
          src={awsImage("about-us_hero-bg.jpg")}
          priority={true}
        />

        <div className="lines-container hidden xl:block">
          <div className="relative h-full w-full">
            <div className="lines">
              <div className="right line-faded"></div>
            </div>
          </div>
        </div>

        <div className="main-xl-container relative pb-10 lg:pb-20">
          <div className="flex lg:w-1/2 lg:pr-12">
            <div className="-ml-6 lg:max-w-3xl xl:max-w-lg">
              <h1 className="headline-xl mb-6 border-l-8 border-l-azure-100 pl-6 font-light leading-none 3xl:pr-10">
                <span>About</span> <span className="lg:block">CMC Markets</span>
              </h1>
              <div className="mb-10 pl-8 text-xl lg:mb-14">
                <p className="mb-4 lg:mb-12">
                  Built more than {constants.DIDS.YEARS_ACTIVE} years ago,
                  we&apos;re dedicated to supporting our clients on their
                  trading journey.
                </p>
                <div className="flex w-fit flex-col gap-y-3 border-t border-t-navy-70 py-4 text-base">
                  <div className="flex items-center gap-x-2">
                    <svg
                      className="flex-shrink-0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                        stroke="#101626"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>+44 (0)20 7170 8200</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <svg
                      className="flex-shrink-0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                        stroke="#101626"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <a
                      className="break-all"
                      href="mailto:clientmanagement@cmcmarkets.co.uk"
                    >
                      clientmanagement@cmcmarkets.co.uk
                    </a>
                  </div>
                </div>
              </div>

              <div className="pl-9">
                <OnboardingButton
                  className="mb-6"
                  size="lg"
                  account="live"
                  variant="azure"
                  params="jid=gb1&amp;iaid=null&amp;lsrc=1"
                >
                  Create an account
                </OnboardingButton>
                <TrustpilotWidgetMicro className="-ml-7" />
              </div>
            </div>
          </div>
        </div>
        <Image
          className="h-full w-full object-cover object-right-bottom lg:hidden"
          alt=""
          width={1170}
          height={600}
          src={awsImage("about-us_hero-mob.jpg")}
          priority={true}
        />
      </section>
      <HeroAccoladesSectionA fscsFootnote="1" />
    </>
  );
};

export default Hero;
