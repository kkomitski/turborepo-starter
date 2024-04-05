import React, { ReactNode } from "react";
import LatestNews from "../Common/News/LatestNews";

const LatestNewsSection = ({
  title = "News",
  posts,
}: {
  title: String;
  posts: Array<Object>;
}) => {
  return (
    <>
      <section className="Module relative scroll-mt-32 bg-white">
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
              <h2 className="headline-lg relative -ml-6 border-l-8 border-black pl-4">
                {title}
              </h2>
            </div>
          </div>
        </div>
        <div className="main-xl-container pt-0">
          <LatestNews posts={posts} />
        </div>
      </section>
    </>
  );
};

export default LatestNewsSection;
