import React from "react";
import {
  getComponentName,
  resolveComponent,
} from "@/helpers/contentful/components";

const ComponentResolver = ({
  content,
  debug,
}: {
  content: any;
  debug: any;
}) => {
  // If the content is undefined, return an empty fragment.
  if (typeof content === "undefined") {
    console.error("Content is undefined.");
    return <></>;
  }

  const componentFolder = content.sys.contentType.sys.id;
  const componentName = getComponentName(content, componentFolder);
  const componentData = content;

  if (typeof componentData.sys.contentType === "undefined") {
    return <div>Linked item was removed.</div>;
  }

  debug = { ...debug, componentName: `${componentFolder}/${componentName}` };

  if (process.env.ENV === "LOCAL" || process.env.ENV === "DEV") {
    console.debug(
      "Component path: @/components/contentful/" +
        componentFolder +
        "/" +
        componentName
    );
  }

  const Component = resolveComponent(componentFolder, componentName);

  if (Component) {
    return (
      // NOT THIS ONE, THE NEPTUNE ONE
        <Component debug={debug} content={componentData} />
    )
  } else {
    return <div>Component not found.</div>;
  }
};

export default ComponentResolver;
