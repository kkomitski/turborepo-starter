import Image from "next/image";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Lines from "../../../components/global/Misc/Lines";
import constants from "@/helpers/constants";

export type FAQColumn = {
  title: String;
  faqList: Array<FAQItem>;
};

type FAQItem = {
  question: String;
  answer: ReactNode;
};

// Column 2 is usually "New to CMC Markets?" questions
const faqListCol2Default: FAQColumn = {
  title: "New to CMC Markets?",
  faqList: [
    {
      question: "Is it free to open an account?",
      answer: (
        <>
          There&apos;s no cost when opening a live spread betting, CFD or FX
          Active account. You can also view prices and use tools such as charts,
          Reuters news or Morningstar quantitative equity reports, free of
          charge. However, you will need to deposit funds in your account to
          place a trade. Find out more about the{" "}
          <a href="https://www.cmcmarkets.com/en-gb/markets/trading-costs">
            costs of placing a trade
          </a>
          .
        </>
      ),
    },
    {
      question: "Is CMC Markets regulated by the FCA?",
      answer: (
        <>
          Yes, CMC Markets UK plc (registration number 173730) and CMC Spreadbet
          plc (registration number 170627) are fully authorised and regulated by
          the Financial Conduct Authority (FCA) in the UK. Retail client money
          is held in segregated client bank accounts and money held on behalf of
          clients is distributed across a range of major banks, which are
          regularly assessed against our risk criteria.
        </>
      ),
    },
    {
      question: "Is CMC Markets covered by the FSCS?",
      answer: (
        <>
          Yes, your eligible deposits with CMC Markets are protected up to a
          total of {constants.DIDS.UK_COMPENSATION_AMOUNT} by the Financial
          Services Compensations Scheme (FSCS), the UK&apos;s deposit guarantee
          scheme. If CMC Markets ever went into liquidation, retail clients
          would have their share of segregated money returned, minus the
          administrator&apos;s costs in handling and distributing these funds.
          Any shortfall of funds up to {constants.DIDS.UK_COMPENSATION_AMOUNT}{" "}
          may be compensated under the FSCS.
        </>
      ),
    },
    {
      question: "How does CMC Markets segregate client money?",
      answer: (
        <>
          Under the FCA&apos;s Client Money rules, we&apos;re required to
          segregate client money (unless you agree with us otherwise) from
          CMC&apos;s own funds. The funds held in segregated bank accounts do
          not belong to CMC and will be held in a way that enables it to be
          identified as client money.{" "}
          <a href="https://www.cmcmarkets.com/en-gb/regulations">
            Learn more about client money regulations
          </a>
        </>
      ),
    },
    {
      question: "How does CMC Markets make money?",
      answer: (
        <>
          Our income primarily comes from our spreads, while other fees, such as
          overnight holding costs, make a minor contribution to our overall
          revenue. We never aim to profit from our clients&apos; losses. Our aim
          is to build long-term relationships by providing the best possible
          trading experience through our technology and customer service.
        </>
      ),
    },
    {
      question: "What can I trade on with CMC?",
      answer: (
        <>
          You can trade on {constants.DIDS.INSTRUMENT_TOTAL_COUNT} financial
          instruments when you spread bet or trade CFDs with us. See our most
          popular{" "}
          <a href="https://www.cmcmarkets.com/en-gb/markets">
            markets and instruments
          </a>
          .
        </>
      ),
    },
  ],
};

const FAQ = forwardRef(
  (
    {
      title = "FAQs",
      faqListCol1,
      faqListCol2,
      flipColumns = false,
    }: {
      title?: String;
      faqListCol1: FAQColumn;
      faqListCol2?: FAQColumn;
      flipColumns?: boolean;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    if (faqListCol2 === undefined) faqListCol2 = faqListCol2Default;
    return (
      <section className="Module menu-section relative bg-white-95" ref={ref}>
        <Lines left />
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
          <div className="grid gap-y-10 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-0">
            <div className={flipColumns ? "order-2" : ""}>
              <p className="text-2xl">{faqListCol1.title}</p>

              <Accordion type="multiple" className="w-full space-y-2">
                {faqListCol1.faqList.map((faqItem, index) => (
                  <AccordionItem
                    className="rounded-lg bg-white shadow"
                    key={index}
                    value={`item-${index}`}
                  >
                    <AccordionTrigger className="relative cursor-pointer px-4 py-3 pr-3.5 text-base font-semibold hover:no-underline">
                      {faqItem.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-4 text-base">
                      {faqItem.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className={flipColumns ? "order-1" : ""}>
              <p className="text-2xl">{faqListCol2.title}</p>

              <Accordion type="multiple" className="w-full space-y-2">
                {faqListCol2.faqList.map((faqItem, index) => (
                  <AccordionItem
                    className="rounded-lg bg-white shadow"
                    key={index}
                    value={`item-${index}`}
                  >
                    <AccordionTrigger className="relative cursor-pointer px-4 py-3 pr-3.5 text-base font-semibold hover:no-underline">
                      {faqItem.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-4 text-base">
                      {faqItem.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

FAQ.displayName = "FAQ";

export default FAQ;
