import React from "react";
import ComponentDebugger from "../debug/ComponentDebugger";
import Lines from "@/components/_unused/global/Misc/Lines";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/_unused/ui/accordion";
import { documentToReactComponentsWrapper } from "@/components/richTextOptions";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

const FaqList = ({ content, debug }: { content: any; debug: any }) => {
  const data = useContentfulLiveUpdates(content);

  const inspectorProps = useContentfulInspectorMode();

  return (
    <section className="Module menu-section relative bg-white-95">
      <ComponentDebugger debug={debug} content={content} />
      <Lines left />
      <div className="main-xl-container relative py-0">
        <div className="relative mb-10 h-full lg:mb-20">
          <div className="pb-10 pt-20 lg:pb-0">
            <h2
              className="headline-lg relative -ml-6 border-l-8 border-black pl-4"
              {...inspectorProps({
                entryId: data.sys.id,
                fieldId: "header",
              })}
            >
              {data.fields.header}
            </h2>
          </div>
        </div>
      </div>
      <div className="main-xl-container pt-0">
        <div className="grid gap-y-10 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-0">
          {data.fields.faqCategories.map((faqCategory: any, index: number) => (
            <div key={index}>
              <p
                className="text-2xl"
                {...inspectorProps({
                  entryId: faqCategory.sys.id,
                  fieldId: "question",
                })}
              >
                {faqCategory.fields.name}
              </p>

              <Accordion type="multiple" className="w-full space-y-2">
                {faqCategory.fields.faqItems.map(
                  (faqItem: any, index: number) => (
                    <AccordionItem
                      className="rounded-lg bg-white shadow"
                      key={index}
                      value={`item-${index}`}
                    >
                      <AccordionTrigger
                        className="relative cursor-pointer px-4 py-3 pr-3.5 text-base font-semibold hover:no-underline"
                        {...inspectorProps({
                          entryId: faqItem.sys.id,
                          fieldId: "question",
                        })}
                      >
                        {faqItem.fields.question}
                      </AccordionTrigger>
                      <AccordionContent
                        className="px-4 pt-4 text-base"
                        {...inspectorProps({
                          entryId: faqItem.sys.id,
                          fieldId: "answer",
                        })}
                      >
                        {documentToReactComponentsWrapper(
                          faqItem.fields.answer,
                          {
                            type: "content",
                          }
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqList;
