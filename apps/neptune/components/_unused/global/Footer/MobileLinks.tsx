import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "ui/components/ui/accordion";
import { FooterLinks } from "../Footer";

const MobileLinks = ({ accordionData }: { accordionData: FooterLinks }) => {
  return (
    <Accordion type="multiple" className="grid gap-x-4 md:grid-cols-10">
      {accordionData.map((accordion, index) => (
        <AccordionItem
          className="accordion flex flex-col border-t border-b-transparent border-t-navy-70 pb-6 pt-4 md:col-span-2 md:pb-12"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger className="accordion-header flex items-center justify-between py-0 uppercase no-underline md:mb-4">
            <p className="mb-0 no-underline">{accordion.header}</p>
          </AccordionTrigger>
          <AccordionContent className="accordion-body">
            <div className="flex flex-col text-base">
              {accordion.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.linkType === "nextLink" ? (
                    <Link
                      data-next-link
                      className="no-underline first:pt-4 md:first:pt-0"
                      href={page.url}
                    >
                      {page.pageName}
                    </Link>
                  ) : (
                    <a
                      className="no-underline first:pt-4 md:first:pt-0"
                      href={page.url}
                    >
                      {page.pageName}
                    </a>
                  )}
                </React.Fragment>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MobileLinks;
