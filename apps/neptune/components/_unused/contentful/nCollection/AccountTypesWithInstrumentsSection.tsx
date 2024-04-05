import { addDataAttributes, addHttps } from "@/helpers/contentful";
import { renderComponents } from "@/components/components";
import { documentToReactComponentsWrapper } from "@/components/richTextOptions";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import ComponentDebugger from "../debug/ComponentDebugger";

const AccountTypesWithInstrumentsSection = ({
  content,
  debug,
}: {
  content: any;
  debug: any;
}) => {
  const inspectorProps = useContentfulInspectorMode();
  const data = useContentfulLiveUpdates(content);

  // If the content is undefined, return an empty fragment.
  if (typeof content === "undefined") {
    return <></>;
  }

  return (
    <section
      className="Module menu-section relative bg-navy-100"
      {...addDataAttributes(debug)}
    >
      {/* DEBUGGING INFO FOR LOCAL */}
      <ComponentDebugger content={content} debug={debug} />

      <div className="main-xl-container relative">
        <div className="mb-10 text-center text-white">
          {/* Section Header - (e.g. Account types for every trader) */}
          {data.fields.header && (
            <h2
              className="headline-lg mb-6 text-center text-white"
              {...inspectorProps({
                entryId: data.sys.id,
                fieldId: "header",
              })}
            >
              {documentToReactComponentsWrapper(data.fields.header, {
                type: "heading",
              })}
            </h2>
          )}

          {/* Section Description */}
          {data.fields.subHeader && (
            <p
              className="mx-auto max-w-3xl text-xl"
              {...inspectorProps({
                entryId: data.sys.id,
                fieldId: "subHeader",
              })}
            >
              {documentToReactComponentsWrapper(data.fields.subHeader, {
                type: "heading",
              })}
            </p>
          )}
        </div>

        {/* Account Types Cards */}
        {data.fields.items.map((item: any, index: number) => (
          <div key={index} className="mb-6 rounded-3xl bg-white-95 p-6 lg:p-10">
            <div className="mb-10 flex flex-col gap-x-10 lg:flex-row lg:items-center">
              {/* Account Type Icon */}
              <Image
                className="h-[88px] w-[88px]"
                src={addHttps(item.fields.image.fields.file.url)}
                alt=""
                width={item.fields.image.fields.file.details.image.width}
                height={item.fields.image.fields.file.details.image.height}
                {...inspectorProps({
                  entryId: item.sys.id,
                  fieldId: "image",
                })}
              />

              <div>
                {/* Account Type Header (e.g. Spread Betting, CFD Trading) */}
                {item.fields.header && (
                  <h3
                    className="mb-2 text-[28px] lg:text-[32px]"
                    {...inspectorProps({
                      entryId: item.sys.id,
                      fieldId: "header",
                    })}
                  >
                    {documentToReactComponentsWrapper(item.fields.header, {
                      type: "heading",
                    })}
                  </h3>
                )}

                {/* Account Type Description */}
                {item.fields.subHeader && (
                  <div
                    {...inspectorProps({
                      entryId: item.sys.id,
                      fieldId: "subHeader",
                    })}
                  >
                    {documentToReactComponentsWrapper(item.fields.subHeader, {
                      type: "content",
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
              <div className="lg:w-5/12">
                {/* Benefits header text - not changeable in contentful */}
                <h4 className="mb-6 text-xl font-semibold">Benefits</h4>

                {/* Benefits list items */}
                <div
                  className="mb-10 space-y-2 lg:mb-14"
                  {...inspectorProps({
                    entryId: item.sys.id,
                    fieldId: "description",
                  })}
                >
                  {documentToReactComponentsWrapper(item.fields.description, {
                    type: "content",
                    nodes: {
                      [BLOCKS.UL_LIST]: (node: any, children: any) => (
                        <ul className="mb-10 space-y-2 lg:mb-14">{children}</ul>
                      ),
                      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
                        <li className="items-center rounded-lg bg-white px-4 py-3 shadow">
                          {children}
                        </li>
                      ),
                    },
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-y-2">
                  {renderComponents(item.fields.features, undefined, [
                    "nButton",
                  ])}
                </div>
              </div>

              {/* Costs Instruments Table */}
              <div className="lg:w-7/12">
                <h4 className="mb-6 text-xl font-semibold">Costs</h4>
                {renderComponents(item.fields.features, undefined, [
                  "nInstrumentsTable",
                ])}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountTypesWithInstrumentsSection;
