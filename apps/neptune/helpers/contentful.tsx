import { Entry } from "contentful";

// An export function which checks if the given string starts with http or https and returns the correct URL.
export const addHttps = (url?: string) => {
  if (url === undefined) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  } else {
    return `https://${url}`;
  }
};

// Example url: https://signup.cmcmarkets.com/#/emailRegistration?jid=gb1&iaid=null&lsrc=1
// We only care about the string after the question mark
export const sliceOnboardingParams = (url: string | undefined) => {
  if (url === undefined) return "";
  const params = url.split("?")[1];
  return params;
};

// =================================================================================================
// =================================================================================================

// Get the theme type based on the theme string (Light or Dark)
export const getThemeType = (theme: string): "Light" | "Dark" => {
  switch (theme) {
    case "White":
      return "Light";
    case "Medium White":
      return "Light";
    case "Light Gray":
      return "Light";
    case "Medium Gray":
      return "Light";
    case "Dark":
      return "Dark";
    default:
      return "Light";
  }
};

/**
 * Convert object into html data attributes
 * @param debug
 * @returns
 */
export const addDataAttributes = (debug: any) => {
  // If the environment is live, return an empty object.
  if (process.env.ENV === "LIVE") return {};

  // If the environment is not live, return the debug object as data attributes.
  return Object.keys(debug).reduce((acc, key) => {
    const slugCaseKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    return {
      ...acc,
      [`data-${slugCaseKey}`]: debug[key],
    };
  }, {});
};
