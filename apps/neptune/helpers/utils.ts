// @ts-nocheck
import { getLanguage } from "./constants";

export const numberFormatter = {
  singleDecimal: new Intl.NumberFormat(getLanguage(), {
    style: "decimal",
    maximumFractionDigits: 1,
  }),
  doubleDecimal: new Intl.NumberFormat(getLanguage(), {
    style: "decimal",
    maximumFractionDigits: 2,
  }),
  fiveDecimal: new Intl.NumberFormat(getLanguage(), {
    style: "decimal",
    maximumFractionDigits: 5,
  }),
};

export const getCookie = (cname: string) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const setCookie = (cname: string, cvalue: any, exdays: any) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

export const debounce = (func: Function, delay: number) => {
  let debounceTimer: any;
  return function (this: unknown) {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

export const getMobileOS = () => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return "os-android";
  }
  if (/iPad|iPhone|iPod/.test(ua)) {
    return "os-ios";
  }
  return "os-other";
};

export const isMacOS = () => {
  const ua = navigator.userAgent;
  const macOSRegex = /Mac OS X [0-9_]+/;
  const isMacOS = macOSRegex.test(ua);
  return isMacOS;
};

export const getDesktopOS = () => {
  if (getDeviceType() === "desktop") {
    return isMacOS() ? "os-mac" : "os-other-desktop";
  }
  return null;
};

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const removeWhitespace = (str: string): string => {
  if (str === undefined) return "";

  return str.replace(/\s/g, "");
};

export const kebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

export const dateConverter = (d: string) => {
  const date = new Date(d);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(date.getTime())) {
    return date;
  }
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day: string | number = date.getDate();

  if (day < 10) {
    day = `0${day}`;
  }

  return `${day} ${month[date.getMonth()]} ${date.getFullYear()}`;
};

export const makeElement = (obj: HTMLElement) => {
  const generateElement = (object: HTMLElement) => {
    const el: HTMLElement = document.createElement(object.type);
    const defaultAttributes = Object.keys(object);

    defaultAttributes.forEach((attr) => {
      switch (attr) {
        case "id":
          el.id = object.id;
          break;
        case "href":
          el.href = object.href;
          break;
        case "src":
          el.src = object.src;
          break;
        case "class":
          if (object.class.split(" ").length > 1) {
            object.class.split(" ").forEach((cl) => {
              el.classList.add(cl);
            });
            break;
          } else {
            el.classList.add(object.class);
            break;
          }
        default:
          el.setAttribute(attr, object[attr]);
      }
    });

    if (object.attributes) {
      const { attributes } = object;
      const attrNames = Object.keys(object.attributes);

      attrNames.forEach((name) => {
        switch (name) {
          case "id":
            el.id = attributes.id;
            break;
          case "href":
            el.href = attributes.href;
            break;
          case "src":
            el.src = attributes.src;
            break;
          case "class":
            if (attributes.class.split(" ").length > 1) {
              attributes.class.split(" ").forEach((cl) => {
                el.classList.add(cl);
              });
              break;
            } else {
              el.classList.add(attributes.class);
              break;
            }
          default:
            el.setAttribute(name, attributes[name]);
        }
      });
    }

    if (object.children) {
      object.children.forEach((child) => {
        el.appendChild(generateElement(child));
      });
    }

    if (object.content) {
      el.innerText = object.content;
    }

    return el;
  };
  return generateElement(obj);
};

// Load external scripts. Was purpose built to load onboarding JS as it requires
// reinitialization on every page load
export const injectExternalScript = (
  scriptSrc: string,
  scriptId: string,
  shouldDefer: boolean = true
) => {
  const script = document.createElement("script");
  script.src = scriptSrc;
  script.id = scriptId;
  script.defer = shouldDefer;

  // Remove any existing script to ensure it reloads
  const existingScript = document.querySelector(
    'script[src="' + scriptSrc + '"]'
  );
  if (existingScript) {
    existingScript.remove();
  }

  document.body.appendChild(script);
};

// Cleanup external scripts in useEffect. This accompanies the injectExternalScript function
export const cleanupExternalScript = (scriptId: string) => {
  const script = document.getElementById(scriptId);
  if (script) {
    script.remove();
  }
};

// This function is used to override the onboarding params for the MT4 page
export const overrideOnboardingParams = (pathname: string) => {
  const isMT4Page = pathname.includes("mt4");
  if (isMT4Page) {
    return "jid=gb2&amp;iaid=null&amp;lsrc=1";
  }
  return undefined;
};
