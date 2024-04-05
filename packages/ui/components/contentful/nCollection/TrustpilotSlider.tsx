/**
 * @name TrustpilotSlider
 * @description A Trustpilot slider that can be used to display Trustpilot reviews.
 */

import Lines from "@/components/global/Misc/Lines";
import { addDataAttributes, getThemeType } from "@/helpers/contentful";
import React, { useEffect, useRef } from "react";
import ComponentDebugger from "../debug/ComponentDebugger";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  defaultRichTextOptions,
  documentToReactComponentsWrapper,
} from "@/helpers/contentful/richTextOptions";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { bgThemeClassMap } from "@/helpers/mappings/colorClassMap";

const TrustpilotSlider = ({ content, debug }: { content: any; debug: any }) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = useContentfulLiveUpdates(content);

  const ref = useRef(null);
  const theme = data.fields.theme;
  const themeType = getThemeType(theme);
  const bgColor = bgThemeClassMap[theme];
  const textColor = themeType === "Light" ? "text-navy-100" : "text-white";
  const trustpilotOptions = {
    locale: "en-GB",
    templateId: "54ad5defc6454f065c28af8b",
    businessunitId: "58244f650000ff0005974e81",
    styleHeight: "240px",
    styleWidth: "100%",
    theme: themeType === "Light" ? "light" : "dark",
    stars: "5",
    reviewLanguages: "en",
  };

  // Array which can contain ["Left", "Right"]
  const lines = data.fields.border;

  useEffect(() => {
    // https://support.trustpilot.com/hc/en-us/articles/115011421468--Add-a-TrustBox-widget-to-a-single-page-application
    if ((window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  // If the content is undefined, return an empty fragment.
  if (typeof content === "undefined") {
    return <></>;
  }

  return (
    <section
      className={`Module menu-section relative ${bgColor} ${textColor}`}
      {...addDataAttributes(debug)}
    >
      {/* DEBUGGING INFO FOR LOCAL */}
      <ComponentDebugger debug={debug} content={content} />

      {lines !== undefined && (
        <Lines left={lines.includes("Left")} right={lines.includes("Right")} />
      )}

      <div className="main-xl-container text-center">
        {/* Header */}
        {data.fields.header && (
          <h2
            className="mb-2 text-[28px] sm:text-[32px]"
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
            className="mb-10 text-base"
            {...inspectorProps({
              fieldId: "description",
            })}
          >
            {documentToReactComponentsWrapper(data.fields.description, {
              type: "content",
            })}
          </div>
        )}

        {/* Trustpilot widget */}
        <div
          ref={ref}
          className="trustpilot-widget"
          data-locale={trustpilotOptions?.locale || "en-GB"}
          data-template-id={
            trustpilotOptions?.templateId || "54ad5defc6454f065c28af8b"
          }
          data-businessunit-id={
            trustpilotOptions?.businessunitId || "58244f650000ff0005974e81"
          }
          data-style-height={trustpilotOptions?.styleHeight || "240px"}
          data-style-width={trustpilotOptions?.styleWidth || "100%"}
          data-theme={trustpilotOptions?.theme || "light"}
          data-stars={trustpilotOptions?.stars || "5"}
          data-review-languages={trustpilotOptions?.reviewLanguages || "en"}
        >
          <a
            href="https://uk.trustpilot.com/review/www.cmcmarkets.com"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotSlider;
