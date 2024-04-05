import Lines from "../../../components/global/Misc/Lines";
import { addDataAttributes, addHttps } from "@/helpers/contentful";
import React from "react";
import ComponentDebugger from "../debug/ComponentDebugger";
import { documentToReactComponentsWrapper } from "../../../helpers/contentful/richTextOptions";
import InstrumentCardDeck, {
  InstrumentData,
} from "../modules/common/InstrumentCards/InstrumentCardDeck";
import Image from "next/image";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

const InstrumentCardsSection = ({
  content,
  debug,
}: {
  content: any;
  debug: any;
}) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = process.env.STORYBOOK ? content : useContentfulLiveUpdates(content);

  // If the content is undefined, return an empty fragment.
  if (typeof content === "undefined") {
    return <></>;
  }

  // Array which can contain ["Left", "Right"]
  const lines = data.fields.border;

  const instrumentCards: InstrumentData[] | undefined = [];

  data.fields.items.forEach((item: any) => {
    instrumentCards.push({
      apiCode: item.fields.instrumentApiCode,
      imgName: addHttps(item.fields?.image?.fields?.file?.url),
    });
  });

  return (
    <section className="Module relative" {...addDataAttributes(debug)}>
      {/* DEBUGGING INFO FOR LOCAL */}
      <ComponentDebugger content={content} debug={debug} />

      {lines !== undefined && (
        <Lines left={lines.includes("Left")} right={lines.includes("Right")} />
      )}

      {/* Side Background Image */}
      {data.fields.backgroundImage && (
        <Image
          className="absolute right-0 top-0 hidden h-full w-[180px] object-cover lg:block"
          src={addHttps(
            data.fields.backgroundImage.fields.asset.fields.file.url
          )}
          width={
            data.fields.backgroundImage.fields.asset.fields.file.details.image
              .width
          }
          height={
            data.fields.backgroundImage.fields.asset.fields.file.details.image
              .height
          }
          alt=""
          {...inspectorProps({
            fieldId: "backgroundImage",
          })}
        />
      )}
      <div className="main-xl-container relative">
        <div className="relative flex flex-col gap-y-20 lg:flex-row lg:justify-between lg:gap-y-0">
          <div className="lg:w-5/12">
            {/* Section Heading */}
            {data.fields.header && (
              <h2
                className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4"
                {...inspectorProps({
                  fieldId: "header",
                })}
              >
                {documentToReactComponentsWrapper(data.fields.header, {
                  type: "heading",
                })}
              </h2>
            )}

            {/* Description */}
            {data.fields.description && (
              <div
                className="text-xl"
                {...inspectorProps({
                  fieldId: "description",
                })}
              >
                {documentToReactComponentsWrapper(data.fields.description, {
                  type: "content",
                })}
              </div>
            )}
          </div>

          {/* Instrument Cards */}
          {instrumentCards.length > 0 && (
            <div className="flex flex-col justify-between px-4 lg:w-6/12 lg:px-0">
              <InstrumentCardDeck instruments={instrumentCards} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstrumentCardsSection;
