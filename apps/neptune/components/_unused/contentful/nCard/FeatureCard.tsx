import { addHttps } from "@/helpers/contentful";
import { documentToReactComponentsWrapper } from "@/components/richTextOptions";
import Image from "next/image";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

type Content = {
  fields: {
    header: any;
    description: any;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  sys: {
    id: string;
  };
};

const FeatureCard = ({ content }: { content: Content }) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = useContentfulLiveUpdates(content);

  return (
    <div className="flex flex-col gap-y-8">
      {/* Image */}
      {data.fields.image && (
        <Image
          src={addHttps(data.fields.image.fields.file.url)}
          alt=""
          width={246}
          height={230}
          quality={100}
          {...inspectorProps({
            fieldId: "image",
          })}
        />
      )}

      {/* Header */}
      {data.fields.header && (
        <h3
          className="text-[32px] leading-10"
          {...inspectorProps({
            fieldId: "header",
          })}
        >
          {documentToReactComponentsWrapper(data.fields.header, {
            type: "heading",
          })}
        </h3>
      )}

      {/* Description */}
      {data.fields.description && (
        <div
          {...inspectorProps({
            fieldId: "description",
          })}
        >
          {documentToReactComponentsWrapper(data.fields.description, {
            type: "content",
          })}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
