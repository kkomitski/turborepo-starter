import Lines from "@/components/global/Misc/Lines";
import { addDataAttributes } from "@/helpers/contentful";
import ComponentDebugger from "../debug/ComponentDebugger";
import { renderComponents } from "@/helpers/contentful/components";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";

const PlatformTypesSection = ({ content, debug }: { content: any; debug: any }) => {
  // If the content is undefined, return an empty fragment.
  if (typeof content === "undefined") {
    return <></>;
  }

  return (
    <section className="Module menu-section relative bg-white" {...addDataAttributes(debug)}>
      {/* DEBUGGING INFO FOR LOCAL */}
      <ComponentDebugger content={content} debug={debug} />

      <Lines left />

      <div className="main-xl-container relative py-0">
        <div className="relative h-full pb-2 lg:mb-20 lg:pb-10">
          {content.fields.header && (
            <div className="pb-10 pt-20 lg:pb-0">
              <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
                {documentToReactComponentsWrapper(content.fields.header, {
                  type: "heading",
                })}
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className="main-xl-container py-0 pb-20">
        <div className="relative grid gap-x-10 gap-y-[120px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {renderComponents(content.fields.items)}
        </div>
      </div>
    </section>
  );
};

export default PlatformTypesSection;
