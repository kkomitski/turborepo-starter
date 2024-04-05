import constants, { awsImage } from "@/helpers/constants";
import Image from "next/image";
const AppLinks = () => {
  return (
    <div className="border-t border-t-navy-70 pb-14 pt-4 md:col-span-7">
      <span className="mb-4 block uppercase"> Download our app </span>
      <p>
        With our intuitive trading apps, you can keep an eye on the markets and your open positions on the go
      </p>
      <div className="flex gap-x-6">
        <a
          className="footer-apps-store-link no-hover"
          href={constants.appLinks.baseLink}
          suppressHydrationWarning={true}
          data-fallback-href={constants.appLinks.fallbackLink}
        >
          <Image
            className="footer-apps-store"
            src={awsImage("app-store-android.svg")}
            alt="Google Play Store"
            width="160"
            height="49"
            loading="lazy"
          />
        </a>
        <a
          className="footer-apps-store-link no-hover"
          href={constants.appLinks.baseLink}
          suppressHydrationWarning={true}
          data-fallback-href={constants.appLinks.fallbackLink}
        >
          <Image
            className="footer-apps-store"
            src={awsImage("app-store-ios.svg")}
            alt="Apple App Store"
            width="160"
            height="49"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default AppLinks;
