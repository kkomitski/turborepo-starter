import Lines from "@/components/global/Misc/Lines";
import { addDataAttributes } from "@/helpers/contentful";
import React from "react";
import ComponentDebugger from "../debug/ComponentDebugger";
import { renderComponents } from "@/helpers/contentful/components";

const AccountTypesSection = ({
  content,
  debug,
}: {
  content: any;
  debug: any;
}) => {
  // If the content is undefined, return an empty fragment.
  if (typeof content === "undefined") {
    return <></>;
  }

  return (
    <section
      className="Module menu-section relative bg-white"
      {...addDataAttributes(debug)}
    >
      {/* DEBUGGING INFO FOR LOCAL */}
      <ComponentDebugger content={content} debug={debug} />

      <Lines left />
      <div className="main-xl-container">
        <div className="relative grid gap-x-10 gap-y-[120px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {renderComponents(content.fields.items)}
        </div>
      </div>
    </section>
  );
};

export default AccountTypesSection;
