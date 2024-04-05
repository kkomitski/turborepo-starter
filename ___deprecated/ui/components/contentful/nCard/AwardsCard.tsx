import Button from "@/components/elements/Button";
import OnboardingButton from "@/components/elements/OnboardingButton";
import { addHttps, sliceOnboardingParams } from "@/helpers/contentful";
import Image from "next/image";
import { awsImage } from "@/helpers/constants";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";
import { ComponentStylingOptions } from "@/helpers/contentful/components";
import { useContentfulInspectorMode, useContentfulLiveUpdates } from "@contentful/live-preview/react";

type Content = {
  fields: {
    header: any;
    description: any;
    subHeader: any;
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

const AwardsCard = ({
  content,
  stylingOptions,
}: {
  content: Content;
  stylingOptions: ComponentStylingOptions;
}) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = useContentfulLiveUpdates(content);
  const columnWidth = stylingOptions?.columnClass || "w-full";
  return (
    <div className="flex flex-col gap-x-4 px-6 sm:px-0 md:items-start">
      {/* Ribbon Image */}
      <Image className="mb-2" src={awsImage("common_ribbon-navy.svg")} width={78} height={32} alt="Ribbon" />

      <div>
        {/* Sub Header - Year of award */}
        {data.fields.subHeader && (
          <div
            className="mb-2 block text-xs uppercase"
            {...inspectorProps({
              fieldId: "subHeader",
            })}
          >
            {documentToReactComponentsWrapper(data.fields.subHeader, {
              type: "heading",
            })}
          </div>
        )}

        {/* Header - The award name */}
        {data.fields.header && (
          <div
            className="block font-semibold"
            {...inspectorProps({
              fieldId: "header",
            })}
          >
            {documentToReactComponentsWrapper(data.fields.header, {
              type: "heading",
            })}
          </div>
        )}

        {/* Description - Giver of the award */}
        {data.fields.description && (
          <div
            className="block text-sm"
            {...inspectorProps({
              fieldId: "description",
            })}
          >
            {documentToReactComponentsWrapper(data.fields.description, {
              type: "heading",
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AwardsCard;
