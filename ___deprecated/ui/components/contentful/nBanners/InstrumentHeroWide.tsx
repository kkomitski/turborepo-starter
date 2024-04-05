import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import { addDataAttributes, addHttps } from "@/helpers/contentful";
import { renderComponents } from "@/helpers/contentful/components";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import ComponentDebugger from "../debug/ComponentDebugger";

const InstrumentHeroWide = ({
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

  const enableTrustpilot = data.fields?.extraContent?.includes("Trustpilot");

  return (
    <>
      <section
        className="Module menu-section relative"
        {...addDataAttributes(debug)}
      >
        <ComponentDebugger debug={debug} content={content} />

        <div className="relative w-full overflow-x-hidden">
          <div className="absolute right-0 top-0 h-full w-6/12">
            {data.fields.backgroundImage && (
              <Image
                className="absolute -right-0 top-0 hidden h-full w-full object-cover object-left lg:block 3xl:right-0"
                src={addHttps(
                  data.fields.backgroundImage.fields.asset.fields.file.url
                )}
                alt=""
                width={
                  data.fields.backgroundImage.fields.asset.fields.file.details
                    .image.width
                }
                height={
                  data.fields.backgroundImage.fields.asset.fields.file.details
                    .image.height
                }
                priority={true}
                {...inspectorProps({
                  fieldId: "backgroundImage",
                })}
              />
            )}

            {data.fields.image && (
              <Image
                className="absolute -right-20 left-auto top-6 z-10 hidden w-[calc(100%+7rem)] max-w-none drop-shadow-lg lg:top-1/2 lg:block lg:-translate-y-1/2 3xl:-left-8 3xl:w-full 3xl:max-w-4xl"
                src={addHttps(data.fields.image.fields.asset.fields.file.url)}
                alt=""
                width={
                  data.fields.image.fields.asset.fields.file.details.image.width
                }
                height={
                  data.fields.image.fields.asset.fields.file.details.image
                    .height
                }
                priority={true}
                {...inspectorProps({
                  fieldId: "image",
                })}
              />
            )}
          </div>

          {/* <div className="lines-container hidden lg:block">
            <div className="relative h-full w-full">
              <div className="lines">
                <div className="right line-faded"></div>
              </div>
            </div>
          </div> */}

          <div className="main-xl-container relative">
            <div className="flex lg:w-5/12 3xl:pr-12">
              <div className="-ml-6">
                <h1 className="headline-xl mb-6 border-l-8 border-l-azure-100 pl-6 font-light leading-none 3xl:pr-10">
                  {data.fields.bannerIcon && (
                    <Image
                      className="mb-4 h-[72px] w-[72px] rounded-lg shadow"
                      width={
                        data.fields.bannerIcon.fields.file.details.image.width
                      }
                      height={
                        data.fields.bannerIcon.fields.file.details.image.height
                      }
                      src={addHttps(data.fields.bannerIcon.fields.file.url)}
                      alt=""
                      priority={true}
                      {...inspectorProps({
                        fieldId: "bannerIcon",
                      })}
                    />
                  )}
                  <span
                    {...inspectorProps({
                      fieldId: "bigHeader",
                    })}
                  >
                    {documentToReactComponentsWrapper(data.fields.bigHeader, {
                      type: "heading",
                    })}
                  </span>
                </h1>
                <div
                  className="mb-10 pl-8"
                  {...inspectorProps({
                    fieldId: "description",
                  })}
                >
                  {documentToReactComponentsWrapper(data.fields.description, {
                    type: "content",
                    nodes: {
                      [BLOCKS.UL_LIST]: (node: any, children: any) => (
                        <ul className="list-disc pl-4">{children}</ul>
                      ),
                      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
                        <li className="text-xl">{children}</li>
                      ),
                    },
                  })}
                </div>

                {/* CTA Buttons & Additional Text */}
                {data.fields.features && (
                  <div className="mb-6 flex flex-col gap-y-2 pl-8">
                    {renderComponents(data.fields.features)}
                  </div>
                )}

                {enableTrustpilot && (
                  <div className="pl-9">
                    <TrustpilotWidgetMicro className="-ml-7" />
                  </div>
                )}
              </div>
            </div>
          </div>
          {data.fields.backgroundImage?.fields.mobileVariant && (
            <Image
              priority={true}
              className="w-full object-cover lg:hidden"
              src={addHttps(
                data.fields.backgroundImage.fields.mobileVariant.fields.file.url
              )}
              width={
                data.fields.backgroundImage.fields.mobileVariant.fields.file
                  .details.image.width
              }
              height={
                data.fields.backgroundImage.fields.mobileVariant.fields.file
                  .details.image.height
              }
              alt=""
              {...inspectorProps({
                fieldId: "backgroundImage",
              })}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default InstrumentHeroWide;
