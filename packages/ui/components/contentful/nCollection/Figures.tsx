import { addDataAttributes, addHttps } from "@/helpers/contentful";
import Image from "next/image";
import ComponentDebugger from "../debug/ComponentDebugger";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";

const Figures = ({ content, debug }: { content: any; debug: any }) => {
  const theme = content.fields.theme;

  return (
    <section {...addDataAttributes(debug)} className="relative bg-navy-100 text-white">
      {/* DEBUGGING INFO FOR LOCAL */}
      <ComponentDebugger debug={debug} content={content} />

      <div className="main-xl-container py-16 lg:py-20">
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
          {content.fields.items.map((stat: any, index: number) => (
            <div className="p-6" key={index}>
              <div className="relative ml-5">
                <div className="relative z-10">
                  {/* Figure */}
                  {stat.fields.header && (
                    <p className="mb-3 text-[68px] leading-none">
                      {documentToReactComponentsWrapper(stat.fields.header)}
                    </p>
                  )}

                  {/* Sub Text */}
                  {stat.fields.subHeader && (
                    <p className="-ml-5 text-[32px] leading-snug">
                      {documentToReactComponentsWrapper(stat.fields.subHeader)}
                    </p>
                  )}
                </div>

                {/* BG Image for Figure */}
                {stat.fields.image && (
                  <Image
                    src={addHttps(stat.fields.image.fields.file.url)}
                    className="absolute -left-5 -top-2 h-auto w-auto"
                    width={76}
                    height={72}
                    alt=""
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Figures;
