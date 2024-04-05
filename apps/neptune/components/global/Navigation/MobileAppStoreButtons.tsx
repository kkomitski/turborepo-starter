import IOSIconSVG from "@/components/svg/IOSIconSVG";
import PlayStoreSVG from "@/components/svg/PlayStoreSVG";
import constants from "@/helpers/constants";
import React from "react";

const MobileAppStoreButtons = () => {
  return (
    <div className="flex justify-center gap-x-2 pb-24 pt-12 lg:hidden">
      <div className="device-show os-ios">
        <a
          className="btn-ios"
          href={constants.appLinks.baseLink}
          suppressHydrationWarning={true}
          data-fallback-href={constants.appLinks.fallbackLink}
        >
          <IOSIconSVG width={32} height={32} className="fill-white" />

          <span>
            <span>Download on the</span>{" "}
            <span className="font-semibold">App store</span>
          </span>
        </a>
      </div>
      <div className="device-show os-android">
        <a
          className="btn-android"
          href={constants.appLinks.baseLink}
          suppressHydrationWarning={true}
          data-fallback-href={constants.appLinks.fallbackLink}
        >
          <PlayStoreSVG
            className="fill-white stroke-black"
            width={25}
            height={24}
          />
          <span>
            <span>Download on the</span>{" "}
            <span className="font-semibold">Play store</span>
          </span>
        </a>
      </div>
      <div className="">
        <a
          className="btn-demo js-modal"
          href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb3&iaid=null&lsrc=1"
          data-iframe-params="?jid=gb3&iaid=null&lsrc=1"
          data-url="/en-gb/onboarding"
          data-function="demo"
          data-label="Create Account"
        >
          <svg
            className="h-6 w-6 shrink-0 basis-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75 17L9 20L8 21H16L15 20L14.25 17M3 13H21M5 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17Z"
              stroke="#101626"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>
            <span>Open a web</span>{" "}
            <span className="font-semibold">Demo Account</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default MobileAppStoreButtons;
