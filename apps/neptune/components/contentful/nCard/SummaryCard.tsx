import { addHttps, getThemeType } from "@/helpers/contentful";
import Image from "next/image";
import React from "react";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";
import { ComponentStylingOptions } from "@/helpers/contentful/components";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

type Content = {
  fields: {
    header: any;
    description: any;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  sys: {
    id: string;
  };
};

const SummaryCard = ({
  content,
  stylingOptions,
}: {
  content: Content;
  stylingOptions: ComponentStylingOptions;
}) => {
  const data = useContentfulLiveUpdates(content);
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });

  const theme = stylingOptions?.theme || "Light";
  const themeType = getThemeType(theme);
  const columnWidth = stylingOptions?.columnClass || "w-full";

  const bgColor = themeType === "Light" ? "bg-white-95" : "bg-navy-70";
  const textColor = themeType === "Light" ? "text-navy-100" : "text-white";
  return (
    <div
      className={`flex h-auto flex-col rounded-lg p-4 shadow-lg ${bgColor} ${textColor} ${columnWidth}`}
    >
      <Image
        src={addHttps(data.fields.image.fields.file.url)}
        alt={typeof data.fields.header === "string" ? data.fields.header : ""}
        className="mb-2"
        width={48}
        height={48}
        quality={100}
        {...inspectorProps({
          fieldId: "image",
        })}
      />

      {data.fields.header && (
        <h3
          className="mb-2 text-xl font-semibold"
          {...inspectorProps({
            fieldId: "header",
          })}
        >
          {documentToReactComponentsWrapper(data.fields.header, {
            type: "heading",
          })}
        </h3>
      )}

      {data.fields.description && (
        <div
          {...inspectorProps({
            fieldId: "content",
          })}
        >
          {documentToReactComponentsWrapper(data.fields.description, {
            type: "content",
          })}
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
