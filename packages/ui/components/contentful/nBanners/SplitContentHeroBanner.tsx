import Image from "next/image";
import ComponentDebugger from "../debug/ComponentDebugger";
import ContentfulLink from "../elements/ContentfulLink";
import { addDataAttributes, addHttps } from "@/helpers/contentful";
import Lines from "@/components/global/Misc/Lines";
import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";
import { useContentfulInspectorMode, useContentfulLiveUpdates } from "@contentful/live-preview/react";
import Button, { ButtonProps } from "ui/components/elements/Button";
import { btnVariantTypes, btnVariantTypesE } from "@/helpers/mappings/btnClassMap";
import { renderComponents } from "@/helpers/contentful/components";

type Props = {
  // subcomponents: Features;
  // subcompo: 'button' | 'primary' | 'secondary';
  features: btnVariantTypes;
  buttons: "one button" | "two buttons" | "three buttons";
  // features: "one button" | "two buttons" | "three buttons";
  content?: any;
  debug: any;
  description?: any,
  bigHeader?: any,
  children: any,
  backgroundImage?: any,
  test?: any
}; // Merge with AnchorHTMLAttributes

const SplitContentHeroBanner = ({
  content,
  debug = true,
  description = content.fields.description.content[0].content[0].value,
  bigHeader = content.fields.bigHeader.content[0].content[0].value,
  test,
  // features ,
  backgroundImage = content.fields.backgroundImage
}: Props) => {
  const inspectorProps = content && useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  // const data = useContentfulLiveUpdates(content);
  const data = content;

  // const enableTrustpilot = data.fields?.extraContent?.includes("Trustpilot");

  return (
    <>
      <section className="relative" {...addDataAttributes(debug)} data-test={test}>
        {/* <ComponentDebugger debug={debug} content={content} /> */}

        <Lines left />

        {/* Background image */}
        {backgroundImage && (
          <>
            <Image
              className="hidden h-full w-full object-cover object-right-bottom lg:absolute lg:right-0 lg:top-0 lg:block lg:w-1/2 lg:object-cover lg:object-right-bottom"
              alt=""
              width={backgroundImage.fields.asset.fields.file.details.image.width}
              height={backgroundImage.fields.asset.fields.file.details.image.height}
              quality={100}
              src={addHttps(backgroundImage.fields.asset.fields.file.url)}
              priority={true}
              // {...inspectorProps({
              //   fieldId: "backgroundImage",
              // })}
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
              {bigHeader ? (
                <h1
                  className="headline-xl mb-6 border-l-8 border-l-azure-100 pl-6 font-light leading-none 3xl:pr-10"
                >
                  {bigHeader}
                </h1>
              ):
              (
                <h1
                  className="headline-xl mb-6 border-l-8 border-l-azure-100 pl-6 font-light leading-none 3xl:pr-10"
                  // {...inspectorProps({
                  //   fieldId: "bigHeader",
                  // })}
                >
                  {documentToReactComponentsWrapper(data.fields.bigHeader, {
                    type: "heading",
                  })}
                </h1>
              )
              }

              {/* Content */}
              {description ?
              <div
                  className="mb-10 pl-8 text-xl lg:mb-14"
                >
                  {description}
                </div>: 
                <div
                className="mb-10 pl-8 text-xl lg:mb-14"
                // {...inspectorProps({
                //   fieldId: "description",
                // })}
              >
                {documentToReactComponentsWrapper(data.fields.description, {
                  type: "content",
                  nodes: {
                    [BLOCKS.HR]: () => <hr className="mb-4 mt-12 w-full max-w-md border-navy-70" />,
                  },
                })}
              </div>
                }

              {/* Buttons & Trustpilot */}
              <div className="space-y-6 pl-9">
              {data.fields.features && (
                  <div className="mb-6 flex flex-col gap-y-2 pl-8">
                    {renderComponents(data.fields.features)}
                  </div>
                )}
                {/* {data.fields.features &&
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
                  ))} */}
                {/* {enableTrustpilot && (
                  <TrustpilotWidgetMicro className="-ml-7" />
                )} */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        {backgroundImage && backgroundImage.fields.mobileVariant && (
          <Image
            className="h-full w-full object-cover object-right-bottom lg:hidden"
            alt=""
            width={backgroundImage.fields.mobileVariant.fields.file.details.image.width}
            height={backgroundImage.fields.mobileVariant.fields.file.details.image.height}
            src={addHttps(backgroundImage.fields.mobileVariant.fields.file.url)}
            priority={true}
            // {...inspectorProps({
            //   fieldId: "backgroundImage",
            // })}
          />
        )}
      </section>
    </>
  );
};

export default SplitContentHeroBanner;
