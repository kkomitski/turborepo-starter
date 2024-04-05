import Bodybanner from "@/components/contentful/nBanners/Bodybanner";
import Herobanner from "@/components/contentful/nBanners/Herobanner";
import MainHeroWide from "@/components/contentful/nBanners/InstrumentHeroWide";
// import SplitContentHeroBanner from "@/components/contentful/nBanners/SplitContentHeroBanner";
// import UniversalCTABanner from "@/components/contentful/nBanners/UniversalCTABanner";

import AccountType from "@/components/contentful/nCard/AccountType";
import AwardsCard from "@/components/contentful/nCard/AwardsCard";
import FeatureCard from "@/components/contentful/nCard/FeatureCard";
import SummaryCard from "@/components/contentful/nCard/SummaryCard";

import AccountTypesSection from "@/components/contentful/nCollection/AccountTypesSection";
import Figures from "@/components/contentful/nCollection/Figures";
import HeroAccolades from "@/components/contentful/nCollection/HeroAccolades";
import Section from "@/components/contentful/nCollection/Section";
import TrustpilotSlider from "@/components/contentful/nCollection/TrustpilotSlider";

import Pageheader from "@/components/contentful/nPageHeader/Pageheader";

import AlphaBanner from "@/components/contentful/nBanners/AlphaBanner";
import InstrumentHeroWide from "@/components/contentful/nBanners/InstrumentHeroWide";
import nButton from "@/components/contentful/nButton/nButton";
import InstrumentCardsSection from "@/components/contentful/nCollection/InstrumentCardsSection";
import InstrumentsTableSection from "@/components/contentful/nInstrumentsTable/InstrumentsTableSection";
import NewsHub from "@/components/contentful/nNews/NewsHub";
import ContactInfo from "@/components/contentful/nText/ContactInfo";
import Disclaimer from "@/components/contentful/nText/Disclaimer";
import Footnotes from "@/components/contentful/nText/Footnotes";
import Inline from "@/components/contentful/nText/Inline";
import { Entry } from "contentful";
import { removeWhitespace } from "../utils";
import PlatformType from "@/components/contentful/nCard/PlatformType";
import PlatformTypesSection from "@/components/contentful/nCollection/PlatformTypesSection";
import FaqList from "@/components/contentful/nFaqList/FaqList";

// REMOTE IMPORTS
import UniversalCTABanner from "ui/components/contentful/nBanners/UniversalCTABanner";
import SplitContentHeroBanner from "ui/components/contentful/nBanners/SplitContentHeroBanner";

export type ComponentStylingOptions = {
  columnClass: string;
  theme: string;
};

export type DynamicComponentProps = {
  debug: {
    contentfulContentTypeId: string;
    contentfulId: string;
  };
  content: any;
  key?: number;
  stylingOptions?: ComponentStylingOptions;
};

/**
 *  Get component name (This function may become deprecated soon)
 * @param item
 * @param componentFolder
 * @returns
 */
export const getComponentName = (
  item: any,
  componentFolder: string
): string => {
  if (componentFolder === "nBanners") {
    return removeWhitespace(item.fields.type);
  }
  if (componentFolder === "nButton") {
    return "nButton";
  }
  if (componentFolder === "nCollection") {
    return removeWhitespace(item.fields.type);
  }
  if (componentFolder === "nCard") {
    return removeWhitespace(item.fields.type);
  }
  if (componentFolder === "nInstrumentsTable") {
    return "InstrumentsTableSection";
  }
  if (componentFolder === "nPageHeader") {
    return removeWhitespace(item.fields.type);
  }
  if (componentFolder === "nText") {
    return removeWhitespace(item.fields.type);
  }
  if (componentFolder === "nNews") {
    return "NewsHub";
  }
  if (componentFolder === "nFaqList") {
    return "FaqList";
  }
  if (componentFolder === "nAssetWrapper") {
    return "nAssetWrapper";
  }

  return removeWhitespace(item.fields.type);
};

/**
 * Map the 'contentType' field to the respective component
 */
export const componentsMap: { [key: string]: React.ComponentType<any> | null } =
  {
    // Banners
    "nBanners/Bodybanner": Bodybanner,
    "nBanners/Herobanner": Herobanner,
    "nBanners/MainHeroWide": MainHeroWide,
    "nBanners/InstrumentHeroWide": InstrumentHeroWide, // Alias for "MainHeroWide
    "nBanners/SplitContentHeroBanner": SplitContentHeroBanner,
    "nBanners/UniversalCTABanner": UniversalCTABanner,
    "nBanners/AlphaBanner": AlphaBanner, // Alias for "UniversalCTABanner
    // nButtons
    "nButton/nButton": nButton,
    // Cards
    "nCard/AccountType": AccountType,
    "nCard/PlatformType": PlatformType,
    "nCard/AwardsCard": AwardsCard,
    "nCard/FeatureCard": FeatureCard,
    "nCard/SummaryCard": SummaryCard,
    // Collections
    "nCollection/AccountTypesSection": AccountTypesSection,
    "nCollection/PlatformTypesSection": PlatformTypesSection,
    "nCollection/Figures": Figures,
    "nCollection/HeroAccolades": HeroAccolades,
    "nCollection/Section": Section,
    "nCollection/TrustpilotSlider": TrustpilotSlider,
    "nCollection/InstrumentCardsSection": InstrumentCardsSection,
    // Instruments Table
    "nInstrumentsTable/InstrumentsTableSection": InstrumentsTableSection,
    // Page Headers
    "nPageHeader/Pageheader": Pageheader,
    // Text
    "nText/ContactInfo": ContactInfo,
    "nText/Footnotes": Footnotes,
    "nText/Disclaimer": Disclaimer,
    "nText/Inline": Inline,
    // News
    "nNews/NewsHub": NewsHub,
    // FAQ
    "nFaqList/FaqList": FaqList,
  };

/**
 *  Resolve component from componentsMap
 * @param componentFolder
 * @param componentName
 * @returns
 */
export const resolveComponent = (
  componentFolder: string,
  componentName: string
) => {
  const key: string = `${componentFolder}/${componentName}`;
  return componentsMap[key] || null;
};

/**
 * Render nested components from contentful
 * IMPORTANT NOTE: You cannot dynamically import with template literals or by storing component paths in a variable.
 * Reminder: Add to get components by type
 * @param items
 * @returns
 */
export const renderComponents = (
  items: Entry<{ internalName: string }>[],
  stylingOptions?: ComponentStylingOptions
) => {
  if (items === undefined) {
    console.error(`Component contains no items.`);
    if (process.env.ENV === "LOCAL") {
      return <div className="text-red-600">Component contains no items</div>;
    }

    return;
  }
  return items.map((item, index) => {
    const componentFolder = item.sys.contentType.sys.id;
    const componentName = getComponentName(item, componentFolder);
    const componentData = item;

    if (typeof componentData.sys.contentType === "undefined") {
      return <div key={index}>Linked item was removed.</div>;
    }

    if (process.env.ENV === "LOCAL" || process.env.ENV === "DEV") {
      console.log(
        "Component path: @/components/contentful/" +
          componentFolder +
          "/" +
          componentName
      );
    }

    const Component = resolveComponent(componentFolder, componentName);

    if (Component) {
      return (
        <Component
          debug={{
            contentfulContentTypeId: componentData.sys.contentType.sys.id,
            contentfulId: componentData.sys.id,
            componentName: `${componentFolder}/${componentName}`,
          }}
          content={componentData}
          stylingOptions={stylingOptions}
          key={index}
        />
      );
    } else {
      return <div key={index}>Component not found.</div>;
    }
  });
};
