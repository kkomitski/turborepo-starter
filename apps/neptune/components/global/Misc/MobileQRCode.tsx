"use client";

import constants from "@/helpers/constants";
import React from "react";

const MobileAppQRCode = () => {
  return (
    <div>
      <a
        className="block [&>canvas]:h-36 [&>canvas]:w-36"
        href={constants.appLinks.baseLink}
        data-fallback-href={constants.appLinks.fallbackLink}
        id="qr-code"
        suppressHydrationWarning={true}
      >
        <canvas
          width={245}
          height={245}
          suppressHydrationWarning={true}
        ></canvas>
      </a>
    </div>
  );
};

export default MobileAppQRCode;
