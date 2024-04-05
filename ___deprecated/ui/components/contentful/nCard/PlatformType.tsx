import { addHttps } from "@/helpers/contentful";
import Image from "next/image";
import { useState } from "react";

import MobileAppQRCode from "@/components/global/Misc/MobileQRCode";
import GoBackArrowSVG from "@/components/svg/GoBackArrowSVG";
import { renderComponents } from "@/helpers/contentful/components";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";
import { usePlatformMobileTradingStore } from "@/store/mobileTradingStore";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

type Content = {
  fields: {
    header: any;
    subHeader: any;
    description: any;
    image: { fields: { file: { url: string; details: any } } };
    features: any;
  };
  sys: { id: string };
};

const PlatformType = ({ content }: { content: Content }) => {
  // Check if the card has a QR Code
  const [isMobileQRCard] = useState(() => {
    return content.fields.features.some(
      (feature: any) => feature.fields.type === "App QR Code"
    );
  });

  // Is QR Code Open
  const qrCodeOpen = usePlatformMobileTradingStore((state) => state.qrCodeOpen);

  // Closes the QR Code
  const closeQRCode = usePlatformMobileTradingStore(
    (state) => state.closeQRCode
  );

  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = useContentfulLiveUpdates(content);

  return (
    // QR Code Flip over Card
    <div className={`relative ${isMobileQRCard ? "qr-code" : ""}`}>
      {isMobileQRCard && (
        <div
          className={
            "qr-code-banner absolute left-0 top-0 z-10 h-full w-full items-center justify-center bg-azure-100 text-white " +
            (qrCodeOpen ? "flex" : "hidden")
          }
        >
          <div className="mx-auto flex flex-col items-center justify-center pb-20">
            <div className="mx-auto mb-20">
              <MobileAppQRCode />
            </div>
            <p className="mb-12 text-2xl">Scan to download the app</p>
            <button
              className="qr-code-close-btn relative z-20 cursor-pointer"
              type="button"
              onClick={() => {
                closeQRCode();
              }}
            >
              <GoBackArrowSVG />
            </button>
          </div>
        </div>
      )}
      <div>
        {/* Platform Heading */}
        <h3
          className="headline-md mb-6"
          {...inspectorProps({
            fieldId: "header",
          })}
        >
          {documentToReactComponentsWrapper(data.fields.header, {
            type: "heading",
          })}
        </h3>

        {/* Subheader field for Award Card */}
        {documentToReactComponentsWrapper(data.fields.subHeader)}

        {/* Platform Image */}
        <Image
          className="mb-10 w-full drop-shadow-lg"
          src={addHttps(data.fields.image.fields.file.url)}
          alt=""
          width={data.fields.image.fields.file.details.image.width}
          height={data.fields.image.fields.file.details.image.height}
          quality={100}
          {...inspectorProps({
            fieldId: "image",
          })}
        />

        {/* Platform description */}
        <div
          className="mb-10"
          {...inspectorProps({
            fieldId: "description",
          })}
        >
          {documentToReactComponentsWrapper(data.fields.description, {
            type: "content",
          })}
        </div>

        {/* Buttons */}
        {data.fields.features && (
          <div className="flex flex-col gap-2">
            {renderComponents(data.fields.features)}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformType;
