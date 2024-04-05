import { Entry } from "contentful";
import dynamic from "next/dynamic";
import { removeWhitespace } from "../utils";

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
 * ../..param item
 * ../..param componentFolder
 * ../..returns
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
  if (componentFolder === "nCustomComponent") {
    return removeWhitespace(item.fields.component);
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
    "nBanners/MainHeroWide": dynamic(
      () => import("../../components/contentful/nBanners/InstrumentHeroWide")
    ),
    "nBanners/InstrumentHeroWide": dynamic(
      () => import("../../components/contentful/nBanners/InstrumentHeroWide")
    ),
    "nBanners/SplitContentHeroBanner": dynamic(
      () => import("../../components/contentful/nBanners/SplitContentHeroBanner")
    ),
    "nBanners/UniversalCTABanner": dynamic(
      () => import("../../components/contentful/nBanners/UniversalCTABanner")
    ),
    "nBanners/AlphaBanner": dynamic(
      () => import("../../components/contentful/nBanners/AlphaBanner")
    ),
    // nButtons
    "nButton/nButton": dynamic(
      () => import("../../components/contentful/nButton/nButton")
    ),
    // Cards
    "nCard/AccountType": dynamic(
      () => import("../../components/contentful/nCard/AccountType")
    ),
    "nCard/PlatformType": dynamic(
      () => import("../../components/contentful/nCard/PlatformType")
    ),
    "nCard/AwardsCard": dynamic(
      () => import("../../components/contentful/nCard/AwardsCard")
    ),
    "nCard/FeatureCard": dynamic(
      () => import("../../components/contentful/nCard/FeatureCard")
    ),
    "nCard/SummaryCard": dynamic(
      () => import("../../components/contentful/nCard/SummaryCard")
    ),
    // Collections
    "nCollection/AccountTypesSection": dynamic(
      () => import("../../components/contentful/nCollection/AccountTypesSection")
    ),
    "nCollection/AccountTypesWithInstrumentsSection": dynamic(
      () =>
        import(
          "../../components/contentful/nCollection/AccountTypesWithInstrumentsSection"
        )
    ),
    "nCollection/PlatformTypesSection": dynamic(
      () => import("../../components/contentful/nCollection/PlatformTypesSection")
    ),
    "nCollection/Figures": dynamic(
      () => import("../../components/contentful/nCollection/Figures")
    ),
    "nCollection/HeroAccolades": dynamic(
      () => import("../../components/contentful/nCollection/HeroAccolades")
    ),
    "nCollection/Section": dynamic(
      () => import("../../components/contentful/nCollection/Section")
    ),
    "nCollection/TrustpilotSlider": dynamic(
      () => import("../../components/contentful/nCollection/TrustpilotSlider")
    ),
    "nCollection/InstrumentCardsSection": dynamic(
      () => import("../../components/contentful/nCollection/InstrumentCardsSection")
    ),

    // Custom components
    "nCustomComponent/ShareBasketsChart": dynamic(
      () => import("../../components/contentful/nCustomComponent/ShareBasketsChart")
    ),

    // Instruments Table
    "nInstrumentsTable/InstrumentsTableSection": dynamic(
      () =>
        import(
          "../../components/contentful/nInstrumentsTable/InstrumentsTableSection"
        )
    ),
    // Page Headers
    "nPageHeader/Pageheader": dynamic(
      () => import("../../components/contentful/nPageHeader/Pageheader")
    ),
    // Text
    "nText/ContactInfo": dynamic(
      () => import("../../components/contentful/nText/ContactInfo")
    ),
    "nText/Footnotes": dynamic(
      () => import("../../components/contentful/nText/Footnotes")
    ),
    "nText/Disclaimer": dynamic(
      () => import("../../components/contentful/nText/Disclaimer")
    ),
    "nText/Inline": dynamic(
      () => import("../../components/contentful/nText/Inline")
    ),
    // News
    "nNews/NewsHub": dynamic(
      () => import("../../components/contentful/nNews/NewsHub")
    ),
    // FAQ
    "nFaqList/FaqList": dynamic(
      () => import("../../components/contentful/nFaqList/FaqList")
    ),
  };

/**
 *  Resolve component from componentsMap
 * ../..param componentFolder
 * ../..param componentName
 * ../..returns
 */
export const resolveComponent = (
  componentFolder: string,
  componentName: string
) => {
  const key: string = `${componentFolder}/${componentName}`;
  return componentsMap[key] || null;
};

export const getFirstComponentByType = (
  items: Entry<{ internalName: string }>[],
  type: string
) => {
  return items.find((item) => item.sys.contentType.sys.id === type);
};

/**
 * Render nested components from contentful
 * IMPORTANT NOTE: You cannot dynamically import with template literals or by storing component paths in a variable.
 * ../..param items - Items to render
 * ../..param stylingOptions - Styling options for the component
 * ../..param only - Only render components with these content types
 * ../..returns
 */
export const RenderComponents = (
  {
    items,
    stylingOptions,
    only  = [],
    className,
  } : {
    items: Entry<{ internalName: string }>[], // Items to render
    stylingOptions?: ComponentStylingOptions, // Styling options for the component
    only?: Array<string>, // Only render components with these content types
    className?: string,
  }
) => {
  if (items === undefined) {
    console.error(`Component contains no items.`);
    if (process.env.ENV === "LOCAL") {
      return <div className="text-red-600">Component contains no items</div>;
    }

    return;
  }

  // Extract items from the array which match the content types in the 'only' array
  if (only.length > 0) {
    items = items.filter((item) => only.includes(item.sys.contentType.sys.id));
  }

  return (
    <div data-sub className={className} >
      {
        items.map((item, index) => {
          const componentFolder = item.sys.contentType.sys.id;
          const componentName = getComponentName(item, componentFolder);
          const componentData = item;

          if (typeof componentData.sys.contentType === "undefined") {
            return <div key={index}>Linked item was removed.</div>;
          }

          if (process.env.ENV === "LOCAL" || process.env.ENV === "DEV") {
            console.log(
              "Component path: ../../components/contentful/" +
                componentFolder +
                "/" +
                componentName
            );
          }

          const Component = resolveComponent(componentFolder, componentName);

          if (Component) {
            return (
              <Component
                debug={process.env.STORYBOOK ? {
                  componentName: `${componentFolder}/${componentName}`,
                  component: true,
                  id: `${componentFolder}-${componentName}_${index + 1}`
                } : {
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
        })
      }
    </div>
  )
};

export const renderComponents = (
    items: Entry<{ internalName: string }>[], // Items to render
    stylingOptions?: ComponentStylingOptions, // Styling options for the component
    only: Array<string> = [], // Only render components with these content types
) => {
  if (items === undefined) {
    console.error(`Component contains no items.`);
    if (process.env.ENV === "LOCAL") {
      return <div className="text-red-600">Component contains no items</div>;
    }

    return;
  }

  // Extract items from the array which match the content types in the 'only' array
  if (only.length > 0) {
    items = items.filter((item) => only.includes(item.sys.contentType.sys.id));
  }

  return (
    <>
      {
        items.map((item, index) => {
          const componentFolder = item.sys.contentType.sys.id;
          const componentName = getComponentName(item, componentFolder);
          const componentData = item;

          if (typeof componentData.sys.contentType === "undefined") {
            return <div key={index}>Linked item was removed.</div>;
          }

          if (process.env.ENV === "LOCAL" || process.env.ENV === "DEV") {
            console.log(
              "Component path: ../../components/contentful/" +
                componentFolder +
                "/" +
                componentName
            );
          }

          const Component = resolveComponent(componentFolder, componentName);

          if (Component) {
            return (
                <Component
                  debug={process.env.STORYBOOK ? {
                    componentName: `${componentFolder}/${componentName}`,
                    component: true,
                    id: `${componentFolder}-${componentName}_${index + 1}`
                  } : {
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
        })
      }
    </>
  )
};
