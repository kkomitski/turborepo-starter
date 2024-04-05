import Image from "next/image";
import React, { ReactElement, useState } from "react";

const QA = ({ q, a }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-group" style={{ scrollMargin: "200px" }}>
      <div
        onClick={() => setOpen(!open)}
        className="accordion-title relative cursor-pointer p-2 pr-12"
      >
        <div className="accordion-header font-semibold">
          <p className="text-base">{q}</p>
        </div>
        <div className="accordion-icon absolute right-2 top-4">
          <Image
            alt="chevron"
            data-responsive="false"
            src="https://hdev3-assets.cmcmarkets.com/neptune/images/accordion-chevron.svg"
            data-dark-data-responsive="false"
            width="14"
            height="7"
            loading="lazy"
            style={{
              rotate: open ? "180deg" : "0deg",
            }}
          />
        </div>
      </div>
      <div
        className="accordion-content transition-max-height overflow-hidden border-b border-navy-20 pr-9 duration-1000 ease-out dark:border-white-85"
        data-content-max-height="226px"
        style={{ maxHeight: open ? "1000px" : "0px" }}
      >
        <div className="pb-6 pl-2 pt-4">{a}</div>
      </div>
    </div>
  );
};

const LearnPageFAQ = ({ faqs }: { faqs: { q: string; a: string | ReactElement }[] }) => {
  return (
    <div>
      <h2 className="mb-4 pt-10 text-3xl">FAQs</h2>
      <div className="comp-accordion flex flex-col gap-y-4 pl-3">
        {faqs.map((faq: any, index: number) => (
          <QA key={index} q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  );
};

export default LearnPageFAQ;
