import { TrustPilotProps } from "@/helpers/types/trustpilot";
import React, { useEffect, useRef } from "react";

// Extend the TrustPilotProps type to include className
type TrustpilotWidgetMicroProps = TrustPilotProps & {
  className?: string;
};

const TrustpilotWidgetMicro = (props: TrustpilotWidgetMicroProps) => {
  const ref = useRef(null);

  useEffect(() => {
    // Force trustpilot to load on page view
    // https://support.trustpilot.com/hc/en-us/articles/115011421468--Add-a-TrustBox-widget-to-a-single-page-application
    if ((window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={"trustpilot-widget relative " + props.className}
      data-locale={props.locale || "en-GB"}
      data-template-id={props.templateId || "5419b637fa0340045cd0c936"}
      data-businessunit-id={props.businessunitId || "58244f650000ff0005974e81"}
      data-style-height={props.styleHeight || "20px"}
      data-style-width={props.styleWidth || "250px"}
      data-style-align={props.styleAlign || "left"}
      data-theme={props.theme || "light"}
    ></div>
  );
};

export default TrustpilotWidgetMicro;
