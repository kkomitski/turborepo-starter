import React, { ReactNode } from "react";

const Footnotes = ({
  footnotesList,
  enableDisclaimer = false,
  type = "numerical",
}: {
  footnotesList: Array<ReactNode>;
  enableDisclaimer?: boolean;
  type?: "numerical" | "symbolic";
}) => {
  const symbols = ["*", "**", "^", "†", "‡"];

  return (
    <section className="Module bg-white-85">
      <div className="main-xl-container">
        {footnotesList.map((footnote, index) => (
          <p key={index} className="mb-0">
            <sup>{type === "numerical" ? index + 1 : symbols[index]}</sup>
            {footnote}
          </p>
        ))}
        {enableDisclaimer && (
          <p className="mb-0 mt-10 italic text-navy-40">
            CMC Markets is an execution-only service provider. The material
            (whether or not it states any opinions) is for general information
            purposes only, and does not take into account your personal
            circumstances or objectives. Nothing in this material is (or should
            be considered to be) financial, investment or other advice on which
            reliance should be placed. No opinion given in the material
            constitutes a recommendation by CMC Markets or the author that any
            particular investment, security, transaction or investment strategy
            is suitable for any specific person. The material has not been
            prepared in accordance with legal requirements designed to promote
            the independence of investment research. Although we are not
            specifically prevented from dealing before providing this material,
            we do not seek to take advantage of the material prior to its
            dissemination.
          </p>
        )}
      </div>
    </section>
  );
};

export default Footnotes;
