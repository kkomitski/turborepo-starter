import Lines from "@/components/global/Misc/Lines";
import { awsImage } from "@/helpers/constants";
import { addDataAttributes, addHttps } from "@/helpers/contentful";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";
import Image from "next/image";
import ComponentDebugger from "../debug/ComponentDebugger";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

const HeroAccolades = ({ content, debug }: { content: any; debug: any }) => {
  const inspectorProps = useContentfulInspectorMode();
  const data = useContentfulLiveUpdates(content);
  const lines = data.fields.border;

  return (
    <>
      <section
        className="Module relative bg-white-95"
        {...addDataAttributes(debug)}
      >
        {/* DEBUGGING INFO FOR LOCAL */}
        <ComponentDebugger debug={debug} content={content} />

        {lines && (
          <Lines
            left={lines.includes("Left")}
            right={lines.includes("Right")}
          />
        )}

        <div className="main-xl-container py-0">
          <div className="flex flex-col md:flex-row">
            <div className="relative flex flex-col gap-y-1 py-10 md:w-2/5">
              {data.fields.items[0].fields.items.map(
                (item: any, index: number) => (
                  <div key={index} className="flex items-center gap-x-3">
                    {item.fields.image && (
                      <Image
                        src={addHttps(item.fields.image.fields.file.url)}
                        width={
                          item.fields.image.fields.file.details.image.width
                        }
                        height={
                          item.fields.image.fields.file.details.image.height
                        }
                        alt=""
                        {...inspectorProps({
                          entryId: item.sys.id,
                          fieldId: "image",
                        })}
                      />
                    )}
                    {item.fields.header && (
                      <span
                        className="font-semibold"
                        {...inspectorProps({
                          entryId: item.sys.id,
                          fieldId: "header",
                        })}
                      >
                        <>
                          {documentToReactComponentsWrapper(item.fields.header)}
                        </>
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
            <div className="grid items-center gap-y-6 pb-10 md:w-3/5 md:grid-cols-3 md:gap-x-4 md:gap-y-0 md:pb-0">
              {data.fields.items[1].fields.items.map(
                (item: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-x-4 md:flex-col md:items-start"
                  >
                    <Image
                      className="mb-2"
                      src={awsImage("common_ribbon-navy.svg")}
                      width={78}
                      height={32}
                      alt="Ribbon"
                    />
                    <div>
                      {item.fields.subHeader && (
                        <span
                          className="mb-2 block text-xs uppercase"
                          {...inspectorProps({
                            entryId: item.sys.id,
                            fieldId: "subHeader",
                          })}
                        >
                          {documentToReactComponentsWrapper(
                            item.fields.subHeader
                          )}
                        </span>
                      )}

                      {item.fields.header && (
                        <span
                          className="block font-semibold"
                          {...inspectorProps({
                            entryId: item.sys.id,
                            fieldId: "header",
                          })}
                        >
                          {documentToReactComponentsWrapper(item.fields.header)}
                        </span>
                      )}
                      {item.fields.description && (
                        <span
                          className="block text-sm"
                          {...inspectorProps({
                            entryId: item.sys.id,
                            fieldId: "description",
                          })}
                        >
                          {documentToReactComponentsWrapper(
                            item.fields.description
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAccolades;
