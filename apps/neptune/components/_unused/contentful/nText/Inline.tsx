import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import ComponentDebugger from "../debug/ComponentDebugger";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import {
  defaultRichTextOptions,
  documentToReactComponentsWrapper,
} from "@/components/richTextOptions";

const Inline = ({ content, debug }: { content: any; debug: any }) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = useContentfulLiveUpdates(content);

  return (
    <div
      {...inspectorProps({
        fieldId: "text",
      })}
    >
      {documentToReactComponentsWrapper(data.fields.text, {
        type: "content",
      })}
    </div>
  );
};

export default Inline;
