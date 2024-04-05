import Button from "@/components/elements/Button";
import OnboardingButton from "@/components/elements/OnboardingButton";
import RightArrowSVG from "@/components/svg/RightArrowSVG";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Platform = {
  titleOverride?: ReactNode | string;
  subtitleOverride?: ReactNode;
  imageOverride?: string;
  descriptionOverride?: ReactNode;
  ctaButtonsOverride?: ReactNode;
  footnotes: Array<string>;
};

const PlatformWeb = ({
  titleOverride,
  subtitleOverride,
  imageOverride,
  descriptionOverride,
  ctaButtonsOverride,
  footnotes,
}: Platform) => {
  return (
    <div>
      <h3 className="headline-md mb-6">{titleOverride || "Web platform"}</h3>
      {subtitleOverride || (
        <div className="mb-10 flex items-center gap-x-2">
          <Image
            className="h-auto w-11 lg:w-auto"
            src={awsImage("common_ribbon-azure.svg")}
            alt=""
            width={44}
            height={45}
          />
          <div>
            <p className="mb-1 text-xs uppercase">2023 Winner</p>
            <p className="mb-0 text-base font-semibold leading-snug">
              No.1 Web Platform
            </p>
            <p className="text-sm leading-tight">ForexBrokers.com Awards</p>
          </div>
        </div>
      )}
      <Image
        className="mb-10 w-full drop-shadow-lg"
        src={imageOverride || awsImage("platforms_web-platform.png")}
        alt={
          titleOverride && typeof titleOverride === "string"
            ? titleOverride
            : "Web platform"
        }
        width={569}
        height={358}
        quality={100}
      />
      <p className="mb-10">
        {descriptionOverride || (
          <>
            {" "}
            We&apos;ve invested over £100m into our award-winning platform
            <sup>{footnotes[0]}</sup>, creating pioneering technology that suits
            all styles of trading.
          </>
        )}
      </p>
      {ctaButtonsOverride || (
        <div className="flex flex-col">
          <OnboardingButton
            className="mb-2"
            variant="azure"
            account="demo"
            params="jid=gb3&amp;iaid=null&amp;lsrc=1"
          >
            Open demo account
          </OnboardingButton>
          <Button
            variant="primary-outline"
            icon="arrow"
            href="/trading-platforms/web-trading-platform"
          >
            More on our web platform
          </Button>
        </div>
      )}
    </div>
  );
};

export default PlatformWeb;
