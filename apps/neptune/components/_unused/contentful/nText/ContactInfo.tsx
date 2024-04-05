/**
 * @name ContactInfo
 * @description A section of content that displays contact information. Must have a h2 or h3 header + text.
 */

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import React from "react";
import ComponentDebugger from "../debug/ComponentDebugger";
import {
  defaultRichTextOptions,
  documentToReactComponentsWrapper,
} from "@/components/richTextOptions";

const ContactInfo = ({ content, debug }: { content: any; debug: any }) => {
  const options = {
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-2xl">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl">{children}</h3>
    ),
  };

  return (
    <>
      <section className="relative bg-white-90 text-base">
        <ComponentDebugger debug={debug} content={content} />
        <div className="main-xl-container relative py-8 md:py-12">
          <div className="space-y-2 text-center md:space-y-4">
            {documentToReactComponentsWrapper(content.fields.text, {
              nodes: options,
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
