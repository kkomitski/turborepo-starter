import Bodybanner from "ui/components/contentful/nBanners/Bodybanner";
import Herobanner from "ui/components/contentful/nBanners/Herobanner";
import MainHeroWide from "ui/components/contentful/nBanners/InstrumentHeroWide";
// import SplitContentHeroBanner from "ui/components/contentful/nBanners/SplitContentHeroBanner";
import UniversalCTABanner from "ui/components/contentful/nBanners/UniversalCTABanner";

import AccountType from "ui/components/contentful/nCard/AccountType";
import AwardsCard from "ui/components/contentful/nCard/AwardsCard";
import FeatureCard from "ui/components/contentful/nCard/FeatureCard";
import SummaryCard from "ui/components/contentful/nCard/SummaryCard";

import AccountTypesSection from "ui/components/contentful/nCollection/AccountTypesSection";
import Figures from "ui/components/contentful/nCollection/Figures";
import HeroAccolades from "ui/components/contentful/nCollection/HeroAccolades";
import Section from "ui/components/contentful/nCollection/Section";
import TrustpilotSlider from "ui/components/contentful/nCollection/TrustpilotSlider";

import Pageheader from "ui/components/contentful/nPageHeader/Pageheader";

import AlphaBanner from "ui/components/contentful/nBanners/AlphaBanner";
import InstrumentHeroWide from "ui/components/contentful/nBanners/InstrumentHeroWide";
import nButton from "ui/components/contentful/nButton/nButton";
import InstrumentCardsSection from "ui/components/contentful/nCollection/InstrumentCardsSection";
import InstrumentsTableSection from "ui/components/contentful/nInstrumentsTable/InstrumentsTableSection";
import NewsHub from "ui/components/contentful/nNews/NewsHub";
import ContactInfo from "ui/components/contentful/nText/ContactInfo";
import Disclaimer from "ui/components/contentful/nText/Disclaimer";
import Footnotes from "ui/components/contentful/nText/Footnotes";
import Inline from "ui/components/contentful/nText/Inline";
import { Entry } from "contentful";
import { removeWhitespace } from "../utils";
import PlatformType from "ui/components/contentful/nCard/PlatformType";
import PlatformTypesSection from "ui/components/contentful/nCollection/PlatformTypesSection";
import FaqList from "ui/components/contentful/nFaqList/FaqList";
import dynamic from "next/dynamic";

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
// export const componentsMap: { [key: string]: React.ComponentType<any> | null } =
export const componentsMap: any =
  {
    // Banners
    "nBanners/Bodybanner": Bodybanner,
    "nBanners/Herobanner": Herobanner,
    "nBanners/MainHeroWide": dynamic(() => import("ui/components/contentful/nBanners/InstrumentHeroWide")),
    // "nBanners/InstrumentHeroWide": InstrumentHeroWide, // Alias for "MainHeroWide
    "nBanners/SplitContentHeroBanner": dynamic(() => import("ui/components/contentful/nBanners/SplitContentHeroBanner")),
    // "nBanners/SplitContentHeroBanner": SplitContentHeroBanner,
    // "nBanners/UniversalCTABanner": UniversalCTABanner,
    // "nBanners/AlphaBanner": AlphaBanner, // Alias for "UniversalCTABanner
    // // nButtons
    "nButton/nButton": dynamic(() => import("ui/components/contentful/nButton/nButton")),
    // // Cards
    // "nCard/AccountType": AccountType,
    // "nCard/PlatformType": PlatformType,
    // "nCard/AwardsCard": AwardsCard,
    // "nCard/FeatureCard": FeatureCard,
    // "nCard/SummaryCard": SummaryCard,
    // // Collections
    // "nCollection/AccountTypesSection": AccountTypesSection,
    // "nCollection/PlatformTypesSection": PlatformTypesSection,
    // "nCollection/Figures": Figures,
    // "nCollection/HeroAccolades": HeroAccolades,
    // "nCollection/Section": Section,
    // "nCollection/TrustpilotSlider": TrustpilotSlider,
    // "nCollection/InstrumentCardsSection": InstrumentCardsSection,
    // // Instruments Table
    // "nInstrumentsTable/InstrumentsTableSection": InstrumentsTableSection,
    // // Page Headers
    // "nPageHeader/Pageheader": Pageheader,
    // // Text
    // "nText/ContactInfo": ContactInfo,
    // "nText/Footnotes": Footnotes,
    // "nText/Disclaimer": Disclaimer,
    // "nText/Inline": Inline,
    // // News
    // "nNews/NewsHub": NewsHub,
    // // FAQ
    // "nFaqList/FaqList": FaqList,
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
        "Component path: ui/components/contentful/" +
          componentFolder +
          "/" +
          componentName
      );
    }

    const Component = resolveComponent(componentFolder, componentName);

    if (Component) {
      return (
        <div id={componentName} data-component={true} key={index}>        
          <Component
            debug={{
              contentfulContentTypeId: componentData.sys.contentType.sys.id,
              contentfulId: componentData.sys.id,
              componentName: `${componentFolder}/${componentName}`,
            }}
            content={componentData}
            stylingOptions={stylingOptions}
            // key={index}
          />
        </div>
      );
    } else {
      return <div key={index}>Component not found.</div>;
    }
  });
};
