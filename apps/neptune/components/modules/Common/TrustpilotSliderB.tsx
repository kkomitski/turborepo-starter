import constants from "@/helpers/constants";
import { TrustPilotProps } from "@/helpers/types/trustpilot";
import React, { ReactNode, useEffect, useRef } from "react";

const TrustpilotSliderB = ({
  titleOverride,
  footnotes,
  textOverride,
  trustpilot,
}: {
  titleOverride?: ReactNode | String;
  footnotes: Array<string>;
  textOverride?: ReactNode;
  trustpilot?: TrustPilotProps;
}) => {
  const ref = useRef(null);

  const title = titleOverride
    ? titleOverride
    : "What other traders are saying about CMC Markets";
  const text = textOverride ? (
    textOverride
  ) : (
    <>
      <span className="xl:block">
        As a financial services pioneer, we&lsquo;ve got the expertise allied to
        over {constants.DIDS.YEARS_ACTIVE} years&lsquo; industry experience.
      </span>
      <span className="xl:block">
        That&lsquo;s why{" "}
        {constants.DIDS.GLOBAL_TOTAL_TRADERS_INVESTORS_NUMBER_PLUS} global
        traders and investors put their confidence in us.
        <sup>{footnotes[0]}</sup>
      </span>
    </>
  );

  const trustpilotSectionClasses =
    trustpilot?.theme === "dark"
      ? "bg-navy-70 text-white"
      : "bg-white-85 text-navy-100";

  useEffect(() => {
    // https://support.trustpilot.com/hc/en-us/articles/115011421468--Add-a-TrustBox-widget-to-a-single-page-application
    if ((window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <section className={`Module relative ${trustpilotSectionClasses}`}>
      <div className="main-xl-container text-center">
        <h2 className="mb-2 text-[28px] sm:text-[32px]">{title}</h2>
        <p className="mb-10 text-base">{text}</p>
        <div
          ref={ref}
          className="trustpilot-widget"
          data-locale={trustpilot?.locale || "en-GB"}
          data-template-id={
            trustpilot?.templateId || "54ad5defc6454f065c28af8b"
          }
          data-businessunit-id={
            trustpilot?.businessunitId || "58244f650000ff0005974e81"
          }
          data-style-height={trustpilot?.styleHeight || "240px"}
          data-style-width={trustpilot?.styleWidth || "100%"}
          data-theme={trustpilot?.theme || "light"}
          data-stars={trustpilot?.stars || "5"}
          data-review-languages={trustpilot?.reviewLanguages || "en"}
        >
          <a
            href="https://uk.trustpilot.com/review/www.cmcmarkets.com"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotSliderB;
