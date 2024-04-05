/**
 * @name Section
 * @description A generic section of content that can be used to display a collection of items.
 */

import Lines from "@/components/_unused/global/Misc/Lines";
import { addDataAttributes } from "@/helpers/contentful";
import { renderComponents } from "@/components/components";
import { documentToReactComponentsWrapper } from "@/components/richTextOptions";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import ComponentDebugger from "../debug/ComponentDebugger";

const Section = ({ content, debug }: { content: any; debug: any }) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = useContentfulLiveUpdates(content);

  // If the content is undefined, return an empty fragment.
  if (typeof content === "undefined") {
    return <></>;
  }

  const theme = data.fields.theme;
  const lines = data.fields.border;
  let bgColor: string;
  let textColor: string;
  let borderColor: string;

  const headerAlignment = data.fields.headerAlignment ?? "Left";

  // Theme Colours
  switch (theme) {
    case "White":
      bgColor = "bg-white";
      textColor = "text-navy-100";
      borderColor = "border-navy-100";
      break;
    case "Medium White":
      bgColor = "bg-white-95";
      textColor = "text-navy-100";
      borderColor = "border-navy-100";
      break;
    case "Light Gray":
      bgColor = "bg-white-90";
      textColor = "text-navy-100";
      borderColor = "border-navy-100";
      break;
    case "Medium Gray":
      bgColor = "bg-white-85";
      textColor = "text-navy-100";
      borderColor = "border-navy-100";
      break;
    case "Dark":
      bgColor = "bg-navy-100";
      textColor = "text-white";
      borderColor = "border-white";
      break;
    default:
      bgColor = "bg-white";
      textColor = "text-navy-100";
      borderColor = "border-navy-100";
      break;
  }

  // Column Layout
  let columnClass: string;
  let gridClass: string;
  switch (data.fields.layout) {
    case "One Column":
      columnClass = "";
      gridClass = "";
      break;
    case "Two Column":
      gridClass = "grid md:grid-cols-2";
      columnClass = "";
      break;
    case "Three Column":
      gridClass = "md:grid-cols-3";
      columnClass = "";
      break;
    case "Four Column":
      gridClass = "grid";
      columnClass = "sm:grid-cols-2 md:grid-cols-4";
      break;
    case "Five Column":
      gridClass = "sm:grid-cols-2 lg:grid-cols-5";
      columnClass = "";
      break;
    default:
      gridClass = "";
      columnClass = "";
      break;
  }

  let columnGapClass: string;

  // XXS, XS, SM, MD, LG, XL, XXL
  switch (data.fields.columnGap) {
    case undefined:
      columnGapClass = "gap-4";
      break;
    case "None":
      columnGapClass = "";
      break;
    case "XXS":
      columnGapClass = "gap-1";
      break;
    case "XS":
      columnGapClass = "gap-2";
      break;
    case "SM":
      columnGapClass = "gap-4";
      break;
    case "MD":
      columnGapClass = "gap-6";
      break;
    case "LG":
      columnGapClass = "gap-8";
      break;
    case "XL":
      columnGapClass = "gap-12";
      break;
    case "XXL":
      columnGapClass = "gap-x-16 gap-y-32"; //reminder: y-32 for the about us cmc way
      break;
    default:
      columnGapClass = "gap-4";
      break;
  }

  return (
    <section
      className={`Module menu-section relative ${bgColor} ${textColor}`}
      {...addDataAttributes(debug)}
    >
      {/* DEBUGGING INFO FOR LOCAL */}
      <ComponentDebugger debug={debug} content={content} />

      {lines && (
        <Lines left={lines.includes("Left")} right={lines.includes("Right")} />
      )}

      <div className="main-xl-container">
        {data.fields.header && (
          <div
            className={`mb-10 lg:mb-20 ${
              headerAlignment === "Left"
                ? "lg:w-4/12"
                : headerAlignment === "Center"
                ? "mx-auto text-center"
                : headerAlignment === "Right"
                ? "ml-auto lg:w-4/12"
                : ""
            }`}
          >
            {/* Column Header */}
            {data.fields.header && (
              <h2
                className={`headline-lg relative mb-6 max-w-3xl ${borderColor} ${
                  headerAlignment === "Left"
                    ? "-ml-6 border-l-8 pl-4"
                    : headerAlignment === "Center"
                    ? "mx-auto text-center"
                    : headerAlignment === "Right"
                    ? "ml-auto border-r-8 pr-4 text-right"
                    : ""
                }`}
                {...inspectorProps({
                  fieldId: "header",
                })}
              >
                {documentToReactComponentsWrapper(data.fields.header, {
                  type: "heading",
                })}
              </h2>
            )}

            {/* Column Description */}
            {data.fields.description && (
              <div
                className={`text-xl ${
                  headerAlignment === "Left"
                    ? "text-left"
                    : headerAlignment === "Center"
                    ? "mx-auto text-center"
                    : headerAlignment === "Right"
                    ? "ml-auto text-right"
                    : ""
                }`}
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
        )}

        {/* Items */}
        <div className={`relative grid ${gridClass} ${columnGapClass}`}>
          {renderComponents(data.fields.items, {
            columnClass: columnClass,
            theme: theme,
          })}
        </div>
      </div>
    </section>
  );
};

export default Section;
