import { MutableRefObject, ReactNode } from "react";

// Title - Image - Description
export type TID = {
  title: string | ReactNode;
  image: string;
  description: string | ReactNode;
};

// Title - Description
export type TD = {
  title: string | ReactNode;
  description: string | ReactNode;
};

export type ScrollSpyItem = {
  [key: string]: {
    title: string; // Button Anchor Text
    ref: MutableRefObject<HTMLElement | null>; // Section ref
    btnRef?: any; // Button ref
    scrollMarginClasses?: string; // Scroll margin classes to offset scrolling to section
    active?: boolean; // Is the section active (being scrolled in)
  };
};

export type LinkTypes = "anchor" | "nextLink";
