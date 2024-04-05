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
} from "../../../helpers/contentful/richTextOptions";

const Disclaimer = ({ content, debug }: { content: any; debug: any }) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = process.env.STORYBOOK ? content : useContentfulLiveUpdates(content);

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

export default Disclaimer;
