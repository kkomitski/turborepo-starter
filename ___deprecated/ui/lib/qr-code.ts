import constants from "@/helpers/constants";
import QRCode from "easyqrcodejs";

type QRCodeOptions = {
  text: string;
  width: number;
  height: number;
};

// TODO: Get the dynamic app link script to generate the URL for the QR code
export const initQrCode = (elem: HTMLElement, dimensions: number = 250) => {
  const baseURL: string = constants.appLinks.baseLink;
  const pageQueryString: string = window.location.search;
  const pageUrlParams: URLSearchParams = new URLSearchParams(pageQueryString);
  const qrCodeURL: URL = new URL(baseURL);
  const paramsList: Array<string> = [
    "gtm_source",
    "gtm_medium",
    "gtm_campaign",
    "gtm_content",
    "gtm_term",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "dclid",
  ];

  // If param in the page URL is in the paramsList, append to QR code URL
  paramsList.forEach((param) => {
    if (pageUrlParams.has(param)) {
      let pageUrlParam = pageUrlParams.get(param);
      // Append _qr to utm_medium param
      if (param === "utm_medium") {
        pageUrlParam = `${pageUrlParam}_qr`;
      }
      if (pageUrlParam) {
        qrCodeURL.searchParams.append(param, pageUrlParam);
      }
    }
  });

  // If no gtm or utm source, append document referrer URL
  if (!pageUrlParams.has("gtm_source") && !pageUrlParams.has("utm_source")) {
    if (document.referrer !== "") {
      qrCodeURL.searchParams.append("utm_source", document.referrer);
    }
  }

  const options: QRCodeOptions = {
    text: qrCodeURL.href,
    width: dimensions,
    height: dimensions,
  };

  if (!elem?.querySelector("canvas")) {
    new QRCode(elem, options);
  }
};
