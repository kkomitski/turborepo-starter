import AppleStoreSVG from "../svg/AppStoreSVG";
import PlayStoreSVG from "../svg/PlayStoreSVG";
import constants from "@/helpers/constants";
import QRCodeSVG from "../svg/QRCodeSVG";
import { usePlatformMobileTradingStore } from "@/store/mobileTradingStore";

const MobileQRCodeButton = () => {
  const openQRCode = usePlatformMobileTradingStore((state) => state.openQRCode);

  return (
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
        <button onClick={openQRCode} type="button" className="qr-code-btn btn btn-azure btn-with-icon">
          <QRCodeSVG />

          <span>Scan to download the app</span>
        </button>
      </div>
    </div>
  );
};

export default MobileQRCodeButton;
