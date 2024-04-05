import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import ComponentDebugger from "../debug/ComponentDebugger";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

const Pageheader = ({ content, debug }: { content: any; debug: any }) => {
  const data = process.env.STORYBOOK ? content : useContentfulLiveUpdates(content);
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });

  return (
    <div className="relative -mb-10 sm:col-span-2 lg:col-span-1 lg:mb-0">
      {/* DEBUGGING INFO FOR LOCAL */}
      <ComponentDebugger debug={debug} content={content} />

      {data.fields.header && (
        <h2
          className="headline-lg relative -ml-6 mb-6 max-w-md border-l-8 border-black pl-4"
          {...inspectorProps({
            fieldId: "header",
          })}
        >
          {documentToReactComponents(data.fields.header)}
        </h2>
      )}
      {data.fields.text && (
        <div
          className="text-xl xl:max-w-md"
          {...inspectorProps({
            fieldId: "text",
          })}
        >
          {documentToReactComponents(data.fields.text)}
        </div>
      )}
    </div>
  );
};

export default Pageheader;
