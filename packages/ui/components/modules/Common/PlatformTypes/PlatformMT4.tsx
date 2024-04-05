import Button from "@/components/elements/Button";
import OnboardingButton from "@/components/elements/OnboardingButton";
import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React, { ReactNode } from "react";

type Platform = {
  titleOverride?: ReactNode | string;
  subtitleOverride?: ReactNode;
  imageOverride?: string;
  descriptionOverride?: ReactNode;
  ctaButtonsOverride?: ReactNode;
};

const PlatformMT4 = ({
  titleOverride,
  subtitleOverride,
  imageOverride,
  descriptionOverride,
  ctaButtonsOverride,
}: Platform) => {
  return (
    <div>
      <h3 className="headline-md mb-6">
        {titleOverride || "MetaTrader 4 (MT4)"}
      </h3>
      {subtitleOverride || (
        <div className="mb-10 flex items-center gap-x-4">
          <div className="flex items-center gap-x-2 pt-2 font-semibold">
            <Image
              src={awsImage("common_globe-azure.svg")}
              alt=""
              width={44}
              height={45}
            />
            <span className="text-base font-semibold leading-snug">
              The world&apos;s most popular platform
            </span>
          </div>
        </div>
      )}
      <Image
        className="mb-10 w-full drop-shadow-lg"
        src={imageOverride || awsImage("platforms_mt4.png")}
        alt={
          titleOverride && typeof titleOverride === "string"
            ? titleOverride
            : "MT4"
        }
        width={569}
        height={358}
      />
      <p className="mb-10">
        {descriptionOverride || (
          <>
            Trade on the world&apos;s most popular platform with our suite of
            free premium MT4 indicators and Expert Advisors.
          </>
        )}
      </p>
      {ctaButtonsOverride || (
        <div className="flex flex-col">
          <OnboardingButton
            className="mb-2"
            variant="azure"
            account="demo"
            params="jid=gb2&amp;iaid=null&amp;lsrc=1"
          >
            Open demo account
          </OnboardingButton>
          <Button
            variant="primary-outline"
            icon="arrow"
            href="/trading-platforms/mt4"
          >
            More on MT4
          </Button>
        </div>
      )}
    </div>
  );
};

export default PlatformMT4;
