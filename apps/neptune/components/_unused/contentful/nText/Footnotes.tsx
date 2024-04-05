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

const Footnotes = ({ content, debug }: { content: any; debug: any }) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = useContentfulLiveUpdates(content);

  return (
    <section className="Module relative bg-white-85">
      <ComponentDebugger debug={debug} content={content} />
      <div
        className="main-xl-container"
        {...inspectorProps({
          fieldId: "text",
        })}
      >
        {documentToReactComponentsWrapper(data.fields.text, {
          type: "content",
        })}
      </div>
    </section>
  );
};

export default Footnotes;
