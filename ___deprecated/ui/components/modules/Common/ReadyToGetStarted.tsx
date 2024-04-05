import Button from "@/components/elements/Button";
import OnboardingButton from "@/components/elements/OnboardingButton";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils-shadcn";

// common desktop platform images:

// cfds_platform-hero.png
// cfds_platform-hero-mob.png

const ReadyToGetStarted = ({
  title = "Ready to get started?",
  content = "Start trading with a live account or try a demo with £10,000 of virtual funds.",
  ctaBtns,
  platformImg,
  mobilePlatformImg,
  bgImg,
  mobileBgImg,
  bgClassNames = undefined,
  platformClassNames = undefined,
}: {
  title?: string;
  content?: ReactNode | string;
  ctaBtns?: ReactNode;
  platformImg?: string;
  mobilePlatformImg?: string;
  bgImg?: string;
  mobileBgImg?: string;
  bgClassNames?: string;
  platformClassNames?: string;
}) => {
  const defaultPlatformImg = awsImage("ready-to-start-trading-img-2.png");
  const defaultMobilePlatformImg = awsImage(
    "ready-to-start-trading-img-mob-2.png"
  );
  const defaultBgImg = awsImage("ready-to-find-your-flow-bg.png");
  const defaultMobileBgImg = awsImage("ready-to-find-your-flow-bg-mob.png");

  return (
    <section className="Module">
      <div className="relative overflow-hidden bg-white text-navy-100">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={mobileBgImg || defaultMobileBgImg}
          />
          <img
            className={cn(
              "absolute left-0 top-0 h-[200px] w-full border-b-[16px] border-b-azure-100 object-cover object-top lg:h-[25vw] lg:max-h-[600px]",
              bgClassNames
            )}
            src={bgImg || defaultBgImg}
            alt=""
          />
        </picture>

        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={mobilePlatformImg ?? defaultMobilePlatformImg}
          />
          <img
            className={cn(
              "relative left-2/4 mx-auto h-auto w-[230vw] max-w-none -translate-x-1/2 object-contain object-center pt-[88px] drop-shadow-2xl md:max-h-[750px] md:w-[156vw] lg:pt-20",
              platformClassNames
            )}
            src={platformImg ?? defaultPlatformImg}
            height="750"
            loading="lazy"
            alt=""
          />
        </picture>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-full"></div>
          <div className="main-xl-container relative py-16 md:pb-20 md:pt-[72px]">
            <div className="flex flex-col items-center">
              <Image
                className="mb-4 drop-shadow-lg"
                src={awsImage("cmc-logo-navy-square.png")}
                alt=""
                width={100}
                height={101}
              />
              <p className="mb-8">
                <small className="text-sm uppercase">
                  Spread Betting & CFD Trading
                </small>
              </p>
              <h2 className="lg:headline-lg mb-4 text-center text-[36px]">
                {title}
              </h2>
              <p className="mb-10 text-center text-xl md:text-left">
                {content}
              </p>
              {ctaBtns === undefined ? (
                <div className="flex flex-col gap-2 md:flex-row">
                  <OnboardingButton variant="azure" account="demo">
                    Open a demo account
                  </OnboardingButton>
                  <OnboardingButton
                    className="mx-auto md:mx-0"
                    variant="primary-outline"
                    account="live"
                  >
                    Create account
                  </OnboardingButton>
                </div>
              ) : (
                ctaBtns
              )}
            </div>
          </div>
        </div>

        <div className="relative bg-white-90 text-base">
          <div className="absolute left-0 top-0 h-full w-full"></div>
          <div className="main-xl-container relative py-8 md:py-12">
            <div className="text-center">
              <p className="mb-4 block text-2xl md:mb-2">
                Do you have any questions?
              </p>
              <p>
                Email us at{" "}
                <a href="mailto:clientmanagement@cmcmarkets.co.uk">
                  clientmanagement@cmcmarkets.co.uk
                </a>{" "}
                or call us on{" "}
                <a href="tel:+44 (0)20 7170 8200">+44 (0)20 7170 8200</a> (Lines
                open 24hrs, Monday to Friday)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
