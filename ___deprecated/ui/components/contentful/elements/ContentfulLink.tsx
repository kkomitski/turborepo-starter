import Button from "@/components/elements/Button";
import MobileQRCodeButton from "@/components/elements/MobileQRCodeButton";
import OnboardingButton from "@/components/elements/OnboardingButton";
import {
  btnIconTypes,
  btnIcons,
  btnSizeTypes,
  btnSizes,
  btnVariantTypes,
  btnVariants,
} from "@/helpers/mappings/btnClassMap";
import { usePlatformMobileTradingStore } from "@/store/mobileTradingStore";
import { ReactNode } from "react";

type contentfulFields = {
  type: string;
  url: string | undefined;
  theme: string;
  size?: "SM" | "MD" | "LG";
  children: ReactNode;
  icon?: "Right Arrow" | "External Link";
};

const ContentfulLink = (contentfulFields: contentfulFields) => {
  const openQRCode = usePlatformMobileTradingStore((state) => state.openQRCode);

  if (
    contentfulFields.type === undefined ||
    contentfulFields.children === undefined
  ) {
    return <></>;
  }

  // e.g. "Primary" -> "primary", "Primary Black Border" -> "primary-black-border"
  let theme: btnVariantTypes = btnVariants[contentfulFields.theme]
    ?.id as btnVariantTypes;
  // e.g. "SM" -> "sm", "MD" -> "md", "LG" -> "lg"
  let size: btnSizeTypes | undefined = contentfulFields.size
    ? btnSizes[contentfulFields.size]?.id
    : (undefined as btnSizeTypes | undefined);
  // e.g. "Right Arrow" -> "arrow", "External Link" -> "external-link"
  let icon: btnIconTypes | undefined = contentfulFields.icon
    ? btnIcons[contentfulFields.icon]?.id
    : undefined;
  // URL only used when linkType is "Anchor"
  let url: string | undefined = contentfulFields.url;
  // Children is the text inside the button
  let children: ReactNode = contentfulFields.children;

  let buttonType: string | null = null;
  let onboardingAccountType: "demo" | "live" | "mt4" = "demo";

  switch (contentfulFields.type) {
    case "App QR Code":
      buttonType = "App QR Code";
      break;
    case "Onboarding Demo":
      buttonType = "Onboarding";
      onboardingAccountType = "demo";
      break;
    case "Onboarding Live":
      buttonType = "Onboarding";
      onboardingAccountType = "live";
      break;
    case "Onboarding MT4":
      buttonType = "Onboarding";
      onboardingAccountType = "mt4";
      break;
    case "Anchor":
      buttonType = "Anchor";
      break;
    case "Modal":
      buttonType = "Modal";
      break;
  }

  return (
    <>
      {/* Onboarding Button */}
      {buttonType === "Onboarding" && (
        <OnboardingButton
          size={size}
          variant={theme}
          account={onboardingAccountType}
          icon={icon}
        >
          {contentfulFields.children}
        </OnboardingButton>
      )}

      {/* Anchor Button */}
      {buttonType === "Anchor" && url && (
        <Button size={size} variant={theme} href={url} icon={icon}>
          {children}
        </Button>
      )}

      {/* QR Code for Mobile Trading Card. Not currently styleable via contentful */}
      {buttonType === "App QR Code" && <MobileQRCodeButton />}
    </>
  );
};

export default ContentfulLink;
