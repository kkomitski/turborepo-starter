import { addDataAttributes } from "@/helpers/contentful";
import {
  btnIconResolver,
  btnIconTypes,
  btnOnboardingAccountTypes,
  btnOnboardingParams,
  btnSizeTypes,
  btnThemeTypes,
} from "../../../../helpers/mappings/btnClassMap";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  theme: btnThemeTypes;
  account: btnOnboardingAccountTypes;
  size?: btnSizeTypes;
  params?: btnOnboardingParams;
  icon?: btnIconTypes;
  children: ReactNode;
  debug: any;
} & AnchorHTMLAttributes<HTMLAnchorElement>; // Merge with AnchorHTMLAttributes

const OnboardingButton = (props: Props) => {
  const { theme, params, account, size, icon, debug, children, ...rest } =
    props;

  // Fallback params if params not provided
  const defaultIframeParams = {
    demo: "jid=gb3&amp;iaid=null&amp;lsrc=1",
    live: "jid=gb1&amp;iaid=null&amp;lsrc=1",
    mt4: "jid=gb2&amp;iaid=null&amp;lsrc=1",
  };

  // Override iframe params if provided
  const iframeParams = props.params || defaultIframeParams[props.account];

  // Apply main button class (e.g. azure, primary-outline. End result: btn-azure, btn-primary-outline)
  const btnVariantClass = `btn-${theme}`;

  // Apply button size class (e.g. btn-sm, btn-md, btn-lg. End result: btn-sm, btn-md, btn-lg)
  const btnSize = `btn-${size}`;

  // Apply button with icon class (e.g. end result: btn-with-icon)
  const btnWithIcon = icon ? "btn-with-icon" : "";

  // Apply icon based off props.icon
  const iconNode = btnIconResolver(icon);

  // Combine all classes
  const classNames = `js-modal btn ${btnVariantClass} ${btnSize} ${btnWithIcon} ${
    props.className ?? ""
  }`;

  // Prepend URL based off environment
  const prependedSignupUrl =
    process.env.ENV === "LOCAL" || process.env.ENV === "DEV"
      ? "uat-signup"
      : "signup";

  // Base URL with params appended
  const url = `https://${prependedSignupUrl}.cmcmarkets.com/#/emailRegistration?${iframeParams}`;

  console.log(debug)
  
  return (
    <a
      href={url}
      data-iframe-params={"?" + iframeParams}
      data-function={props.account}
      data-url="/en-gb/onboarding"
      data-label="Create Account"
      {...addDataAttributes(debug)}
      {...rest}
      className={classNames}
    >
      <span>{children}</span>
      {iconNode}
    </a>
  );
};

export default OnboardingButton;
