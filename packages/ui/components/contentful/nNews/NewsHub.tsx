// Currently only supports latest 3 articles but may be extended in the future

import ComponentDebugger from "../debug/ComponentDebugger";
import LatestNews from "@/components/modules/Common/News/LatestNews";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";

const NewsHub = ({ content, debug }: { content: any; debug: any }) => {
  return (
    <section className="Module relative scroll-mt-32 bg-white">
      {/* DEBUGGING INFO FOR LOCAL */}
      <ComponentDebugger debug={debug} content={content} />
      <div className="lines-container">
        <div className="relative h-full w-full">
          <div className="lines">
            <div className="left"></div>
          </div>
        </div>
      </div>
      <div className="main-xl-container relative py-0">
        <div className="relative mb-10 h-full lg:mb-20">
          <div className="pb-10 pt-20 lg:pb-0">
            {content.fields.header && (
              <h2 className="headline-lg relative -ml-6 border-l-8 border-black pl-4">
                {documentToReactComponentsWrapper(content.fields.header, {
                  type: "heading",
                })}
              </h2>
            )}
          </div>
        </div>
      </div>
      <div className="main-xl-container pt-0">
        <LatestNews posts={content.fields.posts} />
      </div>
    </section>
  );
};

export default NewsHub;
