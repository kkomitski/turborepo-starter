/**
 * @name UniversalCTABanner
 * @description This component is on most pages.
 *
 * Usual Title: "Unlock your potential"
 */

import Lines from "../../../components/global/Misc/Lines";
import AlphaLogoSVG from "../../../components/svg/AlphaLogoSVG";
import { awsImage } from "@/helpers/constants";
import { addDataAttributes, addHttps } from "@/helpers/contentful";
import { renderComponents } from "../../../helpers/contentful/components";
import { documentToReactComponentsWrapper } from "../../../helpers/contentful/richTextOptions";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import ComponentDebugger from "../debug/ComponentDebugger";

const AlphaBanner = ({ content, debug }: { content: any; debug: any }) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = process.env.STORYBOOK ? content : useContentfulLiveUpdates(content);

  return (
    <section
      className="Module relative overflow-hidden bg-black text-white"
      {...addDataAttributes(debug)}
    >
      <ComponentDebugger debug={debug} content={content} />

      {/* Background Image */}
      <Image
        className="absolute top-0 hidden h-full object-cover object-top lg:right-0 lg:block 2xl:right-[20vw] 2xl:w-[76%]"
        width={1920}
        height={900}
        alt=""
        src={addHttps(data.fields.backgroundImage.fields.asset.fields.file.url)}
        {...inspectorProps({
          fieldId: "backgroundImage",
        })}
      />

      {/* Mobile Image */}
      <Image
        className="absolute bottom-14 h-auto w-full lg:hidden xs:left-0 xs:right-0 xs:mx-auto xs:max-w-[400px] xs:object-cover"
        width={750}
        height={900}
        alt=""
        src={addHttps(
          data.fields.backgroundImage.fields.mobileVariant.fields.file.url
        )}
        {...inspectorProps({
          fieldId: "backgroundImage",
        })}
      />

      {/* Lines left of "Alpha" */}
      <Lines left>
        <div className="absolute -left-24 top-36 hidden xl:block">
          <div className="flex gap-x-2">
            <div className="h-[43px] w-0.5 bg-azure-100"></div>
            <div className="h-[43px] w-0.5 bg-azure-100"></div>
            <div className="h-[43px] w-0.5 bg-azure-100"></div>
            <div className="h-[43px] w-0.5 bg-azure-100"></div>
            <div className="h-[43px] w-0.5 bg-azure-100"></div>
            <div className="h-[43px] w-0.5 bg-azure-100"></div>
            <div className="h-[43px] w-0.5 bg-azure-100"></div>
            <div className="h-[43px] w-0.5 bg-azure-100"></div>
          </div>
        </div>
      </Lines>

      <div className="main-xl-container relative py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 lg:gap-x-20 lg:gap-y-0">
          <div className="mb-12 lg:col-span-8 lg:mb-0 lg:pt-4 xl:pt-12">
            {/* Alpha Logo (currently not editable in contentful) */}
            <AlphaLogoSVG
              className="mb-4 ml-2 h-auto lg:mb-8 lg:ml-4 2xl:w-auto"
              width={200}
              height={44}
            />

            {/* Heading */}
            <h2
              className="headline-lg relative -ml-6 mb-6 border-l-8 border-white pl-6 leading-none lg:mb-8 lg:border-l-[16px] lg:text-6xl"
              {...inspectorProps({
                fieldId: "bigHeader",
              })}
            >
              {documentToReactComponentsWrapper(data.fields.bigHeader, {
                type: "heading",
              })}
            </h2>

            {/* Content */}
            <div
              className="lg:text-xl"
              {...inspectorProps({
                fieldId: "description",
              })}
            >
              {documentToReactComponentsWrapper(data.fields.description, {
                type: "content",
                nodes: {
                  [BLOCKS.UL_LIST]: (node: any, children: any) => (
                    <ul className="mb-6 list-disc pl-6 lg:mb-12">{children}</ul>
                  ),
                  [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
                    <li className="lg:text-2xl">{children}</li>
                  ),
                },
              })}
              {/* CTA Button(s) */}
              <div className="flex gap-x-2">
                {renderComponents(data.fields.features)}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative lg:col-span-4">
            {/* Image */}
            <Image
              className="mx-auto mb-6 h-full max-h-[244px] w-auto lg:mb-16 lg:max-h-[315px] 2xl:max-h-[400px]"
              src={addHttps(data.fields.image.fields.asset.fields.file.url)}
              width={214}
              height={400}
              alt=""
              {...inspectorProps({
                fieldId: "image",
              })}
            />

            {/* This section is currently not editable in contentful */}
            <div className="text-center">
              <small className="mb-4 block uppercase tracking-[1.6px] lg:mb-6">
                exclusive to
              </small>

              {/* CMC Logo */}
              <Image
                className="mx-auto h-auto w-20"
                src={awsImage("common_cmc-markets-logo-white.svg")}
                width={132}
                height={75}
                alt="CMC Markets Logo"
              />
            </div>

            {/* Lines below CMC Logo */}
            <div className="absolute -bottom-16 left-0 w-full lg:-bottom-24 xl:block">
              <div className="mx-auto flex justify-center gap-x-2">
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
                <div className="h-[43px] w-0.5 bg-azure-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlphaBanner;
