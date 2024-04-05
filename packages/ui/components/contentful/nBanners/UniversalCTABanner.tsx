/**
 * @name UniversalCTABanner
 * @description This component is on most pages & used at the bottom of the page as a final CTA.
 *
 * Usual Title: "Ready to get started?"
 * Usual Medium Header: "SPREAD BETTING & CFD TRADING"
 * Usual Description: "Start trading with a live account or try a demo with £10,000 of virtual funds."
 */

import Image from "next/image";
import ComponentDebugger from "../debug/ComponentDebugger";
import { awsImage } from "@/helpers/constants";
import { cn } from "@/lib/utils-shadcn";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ContentfulLink from "../elements/ContentfulLink";
import { addHttps } from "@/helpers/contentful";
import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import {
  defaultRichTextOptions,
  documentToReactComponentsWrapper,
} from "@/helpers/contentful/richTextOptions";
import { useContentfulInspectorMode, useContentfulLiveUpdates } from "@contentful/live-preview/react";
import Button from "ui/components/elements/Button";

const UniversalCTABanner = ({ content, debug }: { content: any; debug: any }) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  // const data = useContentfulLiveUpdates(content);
  const data = content

  const enableTrustpilot = data?.extraContent?.includes("Trustpilot");
  const defaultPlatformImg = awsImage("ready-to-start-trading-img-2.png");
  const defaultMobilePlatformImg = awsImage("ready-to-start-trading-img-mob-2.png");
  const defaultBgImg = awsImage("ready-to-find-your-flow-bg.png");
  const defaultMobileBgImg = awsImage("ready-to-find-your-flow-bg-mob.png");

  return (
    <section className="Module">
      <div className="relative overflow-hidden bg-white text-navy-100">
        <ComponentDebugger debug={debug} content={content} />

        {/* Background Image */}
        {data.fields.backgroundImage &&
          data.fields.backgroundImage.fields.asset &&
          data.fields.backgroundImage.fields.mobileVariant && (
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={
                  addHttps(data.fields.backgroundImage.fields.mobileVariant.fields.file.url) ||
                  defaultMobileBgImg
                }
              />
              <img
                className={cn(
                  "absolute left-0 top-0 h-[200px] w-full border-b-[16px] border-b-azure-100 object-cover object-top lg:h-[25vw] lg:max-h-[600px]",
                  ""
                )}
                src={addHttps(data.fields.backgroundImage.fields.asset.fields.file.url) || defaultBgImg}
                alt=""
              />
            </picture>
          )}

        {/* Foreground Image */}
        {data.fields.image && data.fields.image.fields.asset && data.fields.image.fields.mobileVariant && (
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={
                addHttps(data.fields.image.fields.mobileVariant.fields.file.url) ?? defaultMobilePlatformImg
              }
            />
            <img
              className={cn(
                "relative left-2/4 mx-auto h-auto w-[230vw] max-w-none -translate-x-1/2 object-contain object-center pt-[88px] drop-shadow-2xl md:max-h-[750px] md:w-[156vw] lg:pt-20",
                ""
              )}
              src={addHttps(data.fields.image.fields.asset.fields.file.url) ?? defaultPlatformImg}
              height={data.fields.image.fields.asset.fields.file.details.image.height}
              loading="lazy"
              alt=""
            />
          </picture>
        )}

        <div className="relative">
          {/* <div className="absolute left-0 top-0 h-full w-full"></div> */}
          <div className="main-xl-container relative py-16 md:pb-20 md:pt-[72px]">
            <div className="flex flex-col items-center">
              {/* Banner Icon */}
              {data.fields.bannerIcon && (
                <Image
                  className="mb-4 drop-shadow-lg"
                  src={addHttps(data.fields.bannerIcon.fields.file.url)}
                  alt=""
                  width={data.fields.bannerIcon.fields.file.details.image.width}
                  height={data.fields.bannerIcon.fields.file.details.image.height}
                  {...inspectorProps({
                    fieldId: "bannerIcon",
                  })}
                />
              )}

              {/* Tiny Capitalised Header */}
              {data.fields.mediumHeader && (
                <p
                  className="mb-8"
                  {...inspectorProps({
                    fieldId: "mediumHeader",
                  })}
                >
                  <small className="text-sm uppercase">
                    {documentToReactComponentsWrapper(data.fields.mediumHeader, {
                      type: "heading",
                    })}
                  </small>
                </p>
              )}

              {/* Main Header */}
              {data.fields.bigHeader && (
                <h2
                  className="lg:headline-lg mb-4 text-center text-[36px]"
                  {...inspectorProps({
                    fieldId: "bigHeader",
                  })}
                >
                  {documentToReactComponentsWrapper(data.fields.bigHeader, {
                    type: "heading",
                  })}
                </h2>
              )}

              {/* Description */}
              {data.fields.description && (
                <div
                  className="mb-10 text-center text-xl md:text-left"
                  {...inspectorProps({
                    fieldId: "description",
                  })}
                >
                  {documentToReactComponentsWrapper(data.fields.description, {
                    type: "content",
                  })}
                </div>
              )}

              {/* CTA Buttons */}
              {data.fields.features && (
                <div className="flex flex-col gap-2 md:flex-row">
                  {data.fields.features.map((feature: any, index: number) => (
                    <Button
                      variant="azure"
                      href={feature.fields.linkUrl ? feature.fields.linkUrl : "/"}
                      key={index}
                      // theme={feature.fields.buttonTheme}
                      // type={feature.fields.type}
                      // url={feature.fields.linkUrl}
                      // size={feature.fields.buttonSize}
                    >
                      {feature.fields.title}
                    </Button>
                  ))}
                </div>
              )}

              {/* Trustpilot widget */}
              {enableTrustpilot && (
                <div className="mt-10">
                  <TrustpilotWidgetMicro />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversalCTABanner;
