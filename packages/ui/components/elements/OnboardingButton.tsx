import {
  btnSizeClassMap,
  btnSizeTypes,
  btnVariantClassMap,
  btnVariantTypes,
} from "../../helpers/mappings/btnClassMap";
import React, { ReactNode, AnchorHTMLAttributes } from "react";
import RightArrowSVG from "../svg/RightArrowSVG";

type Props = {
  variant: btnVariantTypes;
  size?: btnSizeTypes;
  params?:
    | "?jid=gb1&amp;iaid=null&amp;lsrc=1"
    | "?jid=gb3&amp;iaid=null&amp;lsrc=1"
    | string
    | undefined;
  account: "demo" | "live" | "mt4";
  icon?: "arrow" | "external-link";
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>; // Merge with AnchorHTMLAttributes

const OnboardingButton = (props: Props) => {
  const { variant, params, account, size, children, className, ...rest } = props;

  // Fallback params if params not provided
  const defaultIframeParams = {
    demo: "jid=gb3&amp;iaid=null&amp;lsrc=1",
    live: "jid=gb1&amp;iaid=null&amp;lsrc=1",
    mt4: "jid=gb2&amp;iaid=null&amp;lsrc=1",
  };
  const iframeParams = props.params || defaultIframeParams[props.account];

  // Apply main button class (e.g. azure, primary-outline)
  const btnVariant = btnVariantClassMap[variant.toLowerCase()] || "";

  // Apply button size class (e.g. btn-sm, btn-md, btn-lg)
  const btnSize = size ? btnSizeClassMap[size.toLowerCase()] : "";

  // Apply button with icon class (e.g. btn-with-icon)
  const btnWithIcon = props.icon ? "btn-with-icon" : "";

  // Combine all classes
  const classNames = `js-modal btn ${btnVariant} ${btnSize} ${btnWithIcon} ${
    props.className ?? ""
  }`;

  // Apply icon based off props.icon
  let iconNode = null;
  switch (props.icon) {
    case "arrow":
      iconNode = <RightArrowSVG />;
      break;
    case "external-link":
      iconNode = null;
      break;
  }

  const prependedSignupUrl =
    process.env.ENV === "LOCAL" || process.env.ENV === "DEV"
      ? "uat-signup"
      : "signup";

  // Base URL with params appended
  const url = `https://${prependedSignupUrl}.cmcmarkets.com/#/emailRegistration?${iframeParams}`;

  return (
    <a
      href={url}
      data-iframe-params={"?" + iframeParams}
      data-function={props.account}
      data-url="/en-gb/onboarding"
      data-label="Create Account"
      {...rest}
      className={classNames}
    >
      <span>{children}</span>
      {iconNode}
    </a>
  );
};

export default OnboardingButton;
