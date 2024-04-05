// DebugInfo.tsx
import React from "react";
import { JsonView, collapseAllNested, darkStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

const ComponentDebugger = ({
  debug,
  content,
}: {
  debug: any;
  content: any;
}) => {
  if (process.env.ENV !== "LOCAL" && process.env.ENV !== "DEV") {
    return null;
  }
  const idePath = process.env.ENV === "LOCAL" ? process.env.IDE_PATH : null;

  return (
    <div className="absolute left-2 top-2 z-10 flex w-auto flex-col flex-wrap rounded border border-red-600/80 bg-white/80 px-2 py-1 text-xxs leading-4 text-red-500 no-underline">
      {Object.entries(debug).map(([key, value]) => (
        <React.Fragment key={key}>
          {key === "contentfulId" ? (
            <a
              href={`https://app.contentful.com/spaces/vl2kvsmutclx/entries/${value}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xxs underline"
            >
              {`${key}: ${value}`}
            </a>
          ) : key === "componentName" ? (
            <a
              href={`vscode://file${idePath}/components/contentful/${value}.tsx`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xxs underline"
            >
              {`${key}: ${value}`}
            </a>
          ) : (
            <span className="inline-block">{`${key}: ${value}`}</span>
          )}
        </React.Fragment>
      ))}
      <details className="w-full">
        <summary>JSON</summary>
        <pre className="max-h-[300px] overflow-y-scroll">
          <JsonView
            style={darkStyles}
            shouldExpandNode={collapseAllNested}
            data={content.fields}
          />
        </pre>
      </details>
    </div>
  );
};

export default ComponentDebugger;
