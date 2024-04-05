//OLD AND UNUSED

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

type Platforms = {
  web: Platform;
  mobile: Platform;
  mt4: Platform;
};

type Platform = {
  title: string;
  subtitle: ReactNode;
  image: string;
  description: ReactNode;
  ctaButtons: ReactNode;
};

const PlatformType = ({
  type,
  footnotes,
  titleOverride,
  subtitleOverride,
  imageOverride,
  descriptionOverride,
  ctaOverride,
}: {
  type: "web" | "mobile" | "mt4";
  footnotes?: Array<string>;
  titleOverride?: string;
  subtitleOverride?: ReactNode;
  imageOverride?: string;
  descriptionOverride?: ReactNode;
  ctaOverride?: ReactNode;
}) => {
  // Logic for QR code. Only for type="mobile"
  const [QRCodeVisible, setQRCodeVisible] = useState(false);
  const mobileTradingQR = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (type === "mobile" && mobileTradingQR.current != null) {
      initQrCode(mobileTradingQR.current, 200);
    }
  }, []);

  const platforms: Platforms = {
    web: {
      title: "Web platform",
      subtitle: (
        <div className="mb-10 flex items-center gap-x-2">
          <Image
            className="h-auto w-11 lg:w-auto"
            width={44}
            height={44}
            src={awsImage("common_ribbon-azure.svg")}
            alt=""
          />
          <div>
            <p className="mb-1 text-xs uppercase">2023 Winner</p>
            <p className="mb-0 text-base font-semibold leading-snug">
              No.1 Web Platform
            </p>
            <p className="text-sm leading-tight">ForexBrokers.com Awards</p>
          </div>
        </div>
      ),
      image: awsImage("platforms_web-platform.png"),
      description: (
        <>
          We&apos;ve invested over £100m into our award-winning platform
          <sup>0</sup> creating pioneering technology that suits all styles of
          trading.
        </>
      ),
      ctaButtons: (
        <div className="flex flex-col">
          <a
            className="js-modal btn btn-azure mb-2"
            data-iframe-params="?jid=gb3&amp;iaid=null&amp;lsrc=1"
            data-url="/en-gb/onboarding"
            data-function="demo"
            data-label="Create Account"
            href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb3&amp;iaid=null&amp;lsrc=1"
          >
            Open demo account
          </a>
          <Link
            className="btn btn-primary-outline btn-with-icon"
            href="/trading-platforms/web-trading-platform"
          >
            <span>Learn more</span>
            <RightArrowSVG />
          </Link>
        </div>
      ),
    },
    mobile: {
      title: "Mobile app",
      subtitle: (
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
      ),
      image: awsImage("platforms_mobile-trading.png"),
      description: (
        <>
          Get the functionality of our web platform in your pocket with
          mobile-optimised charting, full order-ticket features and real-time
          alerts.
        </>
      ),
      ctaButtons: (
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
          <Link
            className="btn btn-primary-outline btn-with-icon"
            href="/trading-platforms/mobile-trading-app"
          >
            <span>Learn more</span>
            <RightArrowSVG />
          </Link>
        </div>
      ),
    },
    mt4: {
      title: "MetaTrader 4 (MT4)",
      subtitle: (
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
      ),
      image: awsImage("platforms_mt4.png"),
      description: (
        <>
          Trade on the world&apos;s most popular platform with our suite of free
          premium MT4 indicators and addons.
        </>
      ),
      ctaButtons: (
        <div className="flex flex-col">
          <a
            className="js-modal btn btn-azure mb-2"
            data-iframe-params="?jid=gb2&amp;lsrc=0"
            data-url="/en-gb/onboarding"
            data-function="demo"
            data-label="Create Account"
            href="https://signup.cmcmarkets.com/#/emailRegistrationPlatform?jid=gb2&lsrc=0"
          >
            Open demo account
          </a>
          <Link
            className="btn btn-primary-outline btn-with-icon"
            href="/trading-platforms/mt4"
          >
            <span>Learn more</span>
            <RightArrowSVG />
          </Link>
        </div>
      ),
    },
  };

  const platform = platforms[type];

  // Allow manually overrides of the account type
  const image = imageOverride || platform.image;
  const title = titleOverride || platform.title;
  const subtitle = subtitleOverride || platform.subtitle;
  const description = descriptionOverride || platform.description;
  const ctaButtons = ctaOverride || platform.ctaButtons;

  const mobileQROverlap = (
    <div
      className={
        "qr-code-banner absolute left-0 top-0 z-10 h-full w-full items-center justify-center bg-azure-100 text-white " +
        (QRCodeVisible ? "flex" : "hidden")
      }
    >
      <div className="mx-auto flex flex-col items-center justify-center pb-20">
        <div className="mx-auto mb-20">
          <div
            className="mx-auto"
            ref={mobileTradingQR}
            id="mobileTradingQR"
          ></div>
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
  );

  return (
    <div className={type === "mobile" ? "qr-code relative" : ""}>
      {/* For mobile, insert QR code overlap */}
      {type === "mobile" && mobileQROverlap}

      <h3 className="headline-md mb-6">{title}</h3>
      {subtitle}
      <Image
        className="mb-10 w-full drop-shadow-lg"
        src={image}
        alt={title}
        width={569}
        height={358}
      />
      <p className="mb-10">{description}</p>
      {ctaButtons}
    </div>
  );
};

export default PlatformType;
