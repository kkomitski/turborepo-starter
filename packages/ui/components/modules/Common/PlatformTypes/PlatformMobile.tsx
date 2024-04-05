import Button from "@/components/elements/Button";
import MobileAppQRCode from "../../../components/global/Misc/MobileQRCode";
import MobileQRCode from "@/components/global/Misc/MobileQRCode";
import AppleStoreSVG from "@/components/svg/AppStoreSVG";
import GoBackArrowSVG from "../../../components/svg/GoBackArrowSVG";
import PlayStoreSVG from "../../../components/svg/PlayStoreSVG";
import QRCodeSVG from "@/components/svg/QRCodeSVG";
import RightArrowSVG from "@/components/svg/RightArrowSVG";
import constants, { awsImage } from "@/helpers/constants";
import { initQrCode } from "@/lib/qr-code";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";

type Platform = {
  titleOverride?: ReactNode | string;
  subtitleOverride?: ReactNode;
  imageOverride?: string;
  descriptionOverride?: ReactNode;
  ctaButtonsOverride?: ReactNode;
};

const PlatformMobile = ({
  titleOverride,
  subtitleOverride,
  imageOverride,
  descriptionOverride,
  ctaButtonsOverride,
}: Platform) => {
  // Logic for QR code. Only for type="mobile"
  const [QRCodeVisible, setQRCodeVisible] = useState(false);
  const mobileTradingQR = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // if (mobileTradingQR.current != null) {
    //   initQrCode(mobileTradingQR.current, 200);
    // }
  }, []);

  return (
    <div className="qr-code relative">
      <div
        className={
          "qr-code-banner absolute left-0 top-0 z-10 h-full w-full items-center justify-center bg-azure-100 text-white " +
          (QRCodeVisible ? "flex" : "hidden")
        }
      >
        <div className="mx-auto flex flex-col items-center justify-center pb-20">
          <div className="mx-auto mb-20">
            <MobileAppQRCode />
          </div>
          <p className="mb-12 text-2xl">Scan to download the app</p>
          <button
            className="qr-code-close-btn relative z-20 cursor-pointer"
            onClick={() => setQRCodeVisible(false)}
            type="button"
          >
            <GoBackArrowSVG />
          </button>
        </div>
      </div>
      <h3 className="headline-md mb-6">{titleOverride || "Mobile app"}</h3>
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
            <p className="mb-1 text-xs uppercase">2022 Winner</p>
            <p className="mb-0 text-base font-semibold leading-snug">
              Best Mobile Trading Platform
            </p>
            <p className="text-sm leading-tight">
              ADVFN International Financial Awards
            </p>
          </div>
        </div>
      )}
      <Image
        className="mb-10 w-full drop-shadow-lg"
        src={imageOverride || awsImage("platforms_mobile-trading-080124.png")}
        alt={
          titleOverride && typeof titleOverride === "string"
            ? titleOverride
            : "Mobile app"
        }
        width={569}
        height={358}
        unoptimized={true}
      />
      <p className="mb-10">
        {descriptionOverride || (
          <>
            Get the functionality of our web platform in your pocket with
            mobile-optimised charting, full order-ticket features and real-time
            alerts.
          </>
        )}
      </p>
      {ctaButtonsOverride || (
        <div className="flex flex-col">
          <div>
            <div className="device-show os-ios mb-2">
              <a
                className="btn btn-azure btn-with-icon"
                href={constants.appLinks.baseLink}
                suppressHydrationWarning={true}
                data-fallback-href={constants.appLinks.fallbackLink}
              >
                <AppleStoreSVG />
                <span>Download the app</span>
              </a>
            </div>
            <div className="device-show os-android mb-2">
              <a
                className="btn btn-azure btn-with-icon"
                href={constants.appLinks.baseLink}
                suppressHydrationWarning={true}
                data-fallback-href={constants.appLinks.fallbackLink}
              >
                <PlayStoreSVG />

                <span>Download the app</span>
              </a>
            </div>
            <div className="device-show os-other">
              <button
                onClick={() => setQRCodeVisible(true)}
                type="button"
                className="qr-code-btn btn btn-azure btn-with-icon mb-2"
              >
                <QRCodeSVG />

                <span>Scan to download the app</span>
              </button>
            </div>
          </div>

          <Button
            variant="primary-outline"
            icon="arrow"
            href="/trading-platforms/mobile-trading-app"
          >
            More on our app
          </Button>
        </div>
      )}
    </div>
  );
};

export default PlatformMobile;
