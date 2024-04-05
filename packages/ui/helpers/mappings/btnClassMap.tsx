// When a new button is added to buttons.scss, add it here
import ExternalLinkSVG from "ui/components/svg/ExternalLinkSVG";
import RightArrowSVG from "ui/components/svg/RightArrowSVG";

// TYPES
export type btnThemeTypes =
  | "primary"
  | "primary-black-border"
  | "azure"
  | "azure-light"
  | "primary-outline"
  | "primary-outline-dark"
  | "secondary"
  | "secondary-black"
  | "invest"
  | "white"
  | "white-95"
  | "white-90"
  | "stone"
  | "link"
  | "text";

export type btnBehaviourTypes = "Default" | "Open in New Tab" | "Download";
export type btnSizeTypes = "sm" | "md" | "lg";
export type btnIconTypes = "arrow" | "right-arrow" | "external-link";
export type btnOnboardingAccountTypes = "demo" | "live" | "mt4";
export type btnOnboardingParams =
  | "?jid=gb1&amp;iaid=null&amp;lsrc=1"
  | "?jid=gb3&amp;iaid=null&amp;lsrc=1"
  | string
  | undefined;

export const btnIconResolver = (icon: btnIconTypes | undefined) => {
  if (icon === undefined) {
    return null;
  }
  switch (icon) {
    case "arrow":
      return <RightArrowSVG />;
    case "right-arrow":
      return <RightArrowSVG />;
    case "external-link":
      return <ExternalLinkSVG />;
    default:
      return null;
  }
};

////////////// TO BE DEPRECATED SOON! //////////////
// CLASS MAPS //////////////////////////////////////

export type btnVariantTypes =
  | "primary"
  | "primary-black-border"
  | "azure"
  | "azure-light"
  | "primary-outline"
  | "primary-outline-dark"
  | "secondary"
  | "secondary-black"
  | "invest"
  | "white"
  | "white-95"
  | "white-90"
  | "stone"
  | "link"
  | "text";

export const btnVariantClassMap: Record<string, string> = {
  primary: "btn-primary",
  "primary-black-border": "btn-primary-black-border",
  azure: "btn-azure",
  "azure-light": "btn-azure-light",
  "primary-outline": "btn-primary-outline",
  "primary-outline-dark": "btn-primary-outline-dark",
  secondary: "btn-secondary",
  "secondary-black": "btn-secondary-black",
  invest: "btn-invest",
  white: "btn-white",
  "white-95": "btn-white-95",
  "white-90": "btn-white-90",
  stone: "btn-stone",
  link: "btn-link",
  text: "btn-text",
};

export const btnSizeClassMap: Record<string, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

// MAPPINGS - The mapping key is based off the contentful field value
export const btnVariants: Record<
  string,
  {
    id: btnVariantTypes;
    className: string;
  }
> = {
  Primary: {
    id: "primary",
    className: "btn-primary",
  },
  "Primary Black Border": {
    id: "primary-black-border",
    className: "btn-primary-black-border",
  },
  Azure: {
    id: "azure",
    className: "btn-azure",
  },
  "Azure Light": {
    id: "azure-light",
    className: "btn-azure-light",
  },
  "Primary-Outline": {
    id: "primary-outline",
    className: "btn-primary-outline",
  },
  "Primary-Outline-Dark": {
    id: "primary-outline-dark",
    className: "btn-primary-outline-dark",
  },
  Secondary: {
    id: "secondary",
    className: "btn-secondary",
  },
  "Secondary-Black": {
    id: "secondary-black",
    className: "btn-secondary-black",
  },
  Invest: {
    id: "invest",
    className: "btn-invest",
  },
  White: {
    id: "white",
    className: "btn-white",
  },
  "White 95": {
    id: "white-95",
    className: "btn-white-95",
  },
  "White 90": {
    id: "white-90",
    className: "btn-white-90",
  },
  Stone: {
    id: "stone",
    className: "btn-stone",
  },
  Link: {
    id: "link",
    className: "btn-link",
  },
  Text: {
    id: "text",
    className: "btn-text",
  },
};

export const btnSizes: Record<
  string,
  {
    id: btnSizeTypes;
    className: string;
  }
> = {
  SM: {
    id: "sm",
    className: "btn-sm",
  },
  MD: {
    id: "md",
    className: "btn-md",
  },
  LG: {
    id: "lg",
    className: "btn-lg",
  },
};

export const btnIcons: Record<
  string,
  {
    id: btnIconTypes;
  }
> = {
  "Right Arrow": {
    id: "arrow",
  },
  "External Link": {
    id: "external-link",
  },
};
