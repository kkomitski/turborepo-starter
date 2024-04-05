import Image from "next/image";
import React from "react";
import ComponentDebugger from "../debug/ComponentDebugger";
import ContentfulLink from "../elements/ContentfulLink";
import { addDataAttributes, addHttps } from "@/helpers/contentful";
import Lines from "@/components/global/Misc/Lines";
import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

const SplitContentHeroBanner = ({
  content,
  debug,
}: {
  content: any;
  debug: any;
}) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = useContentfulLiveUpdates(content);

  console.log(content);

  const enableTrustpilot = data.fields?.extraContent?.includes("Trustpilot");

  return (
    <>
      <section className="relative" {...addDataAttributes(debug)}>
        <ComponentDebugger debug={debug} content={content} />

        <Lines left />

        {/* Background image */}
        {data.fields.backgroundImage && (
          <>
            <Image
              className="hidden h-full w-full object-cover object-right-bottom lg:absolute lg:right-0 lg:top-0 lg:block lg:w-1/2 lg:object-cover lg:object-right-bottom"
              alt=""
              width={
                data.fields.backgroundImage.fields.asset.fields.file.details
                  .image.width
              }
              height={
                data.fields.backgroundImage.fields.asset.fields.file.details
                  .image.height
              }
              quality={100}
              src={addHttps(
                data.fields.backgroundImage.fields.asset.fields.file.url
              )}
              priority={true}
              {...inspectorProps({
                fieldId: "backgroundImage",
              })}
            />
            <div className="lines-container hidden xl:block">
              <div className="relative h-full w-full">
                <div className="lines">
                  <div className="right line-faded"></div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="main-xl-container relative pb-10 lg:pb-20">
          <div className="flex lg:w-1/2 lg:pr-12">
            <div className="-ml-6 lg:max-w-3xl xl:max-w-lg">
              {/* H1 Heading */}
              {data.fields.bigHeader && (
                <h1
                  className="headline-xl mb-6 border-l-8 border-l-azure-100 pl-6 font-light leading-none 3xl:pr-10"
                  {...inspectorProps({
                    fieldId: "bigHeader",
                  })}
                >
                  {documentToReactComponentsWrapper(data.fields.bigHeader, {
                    type: "heading",
                  })}
                </h1>
              )}

              {/* Content */}
              {data.fields.description && (
                <div
                  className="mb-10 pl-8 text-xl lg:mb-14"
                  {...inspectorProps({
                    fieldId: "description",
                  })}
                >
                  {documentToReactComponentsWrapper(data.fields.description, {
                    type: "content",
                    nodes: {
                      [BLOCKS.HR]: () => (
                        <hr className="mb-4 mt-12 w-full max-w-md border-navy-70" />
                      ),
                    },
                  })}
                </div>
              )}

              {/* Buttons & Trustpilot */}
              <div className="space-y-6 pl-9">
                {data.fields.features &&
                  data.fields.features.map((feature: any, index: number) => (
                    <ContentfulLink
                      key={index}
                      type={feature.fields.type}
                      url={feature.fields.url}
                      theme={feature.fields.buttonTheme}
                      size={feature.fields.buttonSize}
                    >
                      {feature.fields.title}
                    </ContentfulLink>
                  ))}
                {enableTrustpilot && (
                  <TrustpilotWidgetMicro className="-ml-7" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        {data.fields.backgroundImage &&
          data.fields.backgroundImage.fields.mobileVariant && (
            <Image
              className="h-full w-full object-cover object-right-bottom lg:hidden"
              alt=""
              width={
                data.fields.backgroundImage.fields.mobileVariant.fields.file
                  .details.image.width
              }
              height={
                data.fields.backgroundImage.fields.mobileVariant.fields.file
                  .details.image.height
              }
              src={addHttps(
                data.fields.backgroundImage.fields.mobileVariant.fields.file.url
              )}
              priority={true}
              {...inspectorProps({
                fieldId: "backgroundImage",
              })}
            />
          )}
      </section>
    </>
  );
};

export default SplitContentHeroBanner;
