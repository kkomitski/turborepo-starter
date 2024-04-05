import { addHttps } from "@/helpers/contentful";
import Image from "next/image";
import { ReactNode } from "react";

import { awsImage } from "@/helpers/constants";
import { renderComponents } from "../../../helpers/contentful/components";
import { documentToReactComponentsWrapper } from "../../../helpers/contentful/richTextOptions";
import { BLOCKS } from "@contentful/rich-text-types"; // temp
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

type Content = {
  fields: {
    header: any;
    description: any;
    image: { fields: { file: { url: string } } };
    features: any;
  };
  sys: { id: string };
};

const AccountType = ({ content }: { content: Content }) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = process.env.STORYBOOK ? content : useContentfulLiveUpdates(content);

  type BulletItem = {
    content: ReactNode;
    bulletType?: "tick" | "cross" | "minus";
  };

  const tickImg = (tickType: BulletItem["bulletType"] = "tick") => {
    if (tickType === "tick") {
      return awsImage("circle-tick-azure.svg");
    } else if (tickType === "cross") {
      return awsImage("circle-tick-azure.svg"); // TODO: UPDATE WITH CORRECT IMAGE
    }

    return awsImage("circle-tick-azure.svg");
  };

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div
          className="mb-4 w-full border-b border-b-navy-100 pb-6"
          {...inspectorProps({
            fieldId: "image",
          })}
        >
          <Image
            className="h-[230px] w-auto"
            src={addHttps(data.fields.image.fields.file.url)}
            alt=""
            width={284}
            height={346}
          />
        </div>

        {/* Header */}
        {data.fields.header && (
          <h3
            className="headline-md mb-4"
            {...inspectorProps({
              fieldId: "header",
            })}
          >
            {documentToReactComponentsWrapper(data.fields.header)}
          </h3>
        )}

        {/* Description */}
        {data.fields.description.content && (
          <div
            {...inspectorProps({
              fieldId: "description",
            })}
          >
            {documentToReactComponentsWrapper(data.fields.description, {
              type: "content",
              nodes: {
                [BLOCKS.UL_LIST]: (node: any, children: any) => (
                  <ul>{children}</ul>
                ),
                [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
                  <li className="flex items-center gap-x-2">
                    {" "}
                    <Image
                      src={tickImg("tick")}
                      alt=""
                      width={25}
                      height={24}
                    />
                    <span>{children}</span>
                  </li>
                ),
              },
            })}
          </div>
        )}
      </div>
      {/* CTA Buttons & Additional Text */}
      {data.fields.features && (
        <div className="flex flex-col gap-y-2 pt-10 lg:pt-16">
          {renderComponents(data.fields.features)}
        </div>
      )}
    </div>
  );
};

export default AccountType;
