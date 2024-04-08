// import MobileQRCodeButton from "@/components/elements/MobileQRCodeButton";
import MobileQRCodeButton from "../../../components/elements/MobileQRCodeButton";
import {
  btnBehaviourTypes,
  btnIconTypes,
  btnOnboardingAccountTypes,
  btnSizeTypes,
  btnThemeTypes,
} from "@/helpers/mappings/btnClassMap";
import { usePlatformMobileTradingStore } from "@/store/mobileTradingStore";
import { ReactNode } from "react";
import Button from "./ButtonTypes/Button";
import OnboardingButton from "./ButtonTypes/OnboardingButton";

type nButtonProps = {
  type: string;
  url?: string | undefined;
  theme: btnThemeTypes;
  size?: btnSizeTypes;
  icon?: btnIconTypes;
  behaviour: btnBehaviourTypes;
  title: string | ReactNode; // button text
}

const nButton = ({
  content,
  debug,
  type = content.fields.type, 
  url = content.fields.url,
  theme = content.fields.theme, 
  size = content.fields.size, 
  icon = content.fields.icon, 
  behaviour = content.fields.behaviour, 
  title = content.fields.title,
}: { content: { fields: nButtonProps }, debug: any; } & nButtonProps ) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const openQRCode = usePlatformMobileTradingStore(
    (state: any) => state.openQRCode
  );

  // Render nothing if button type or title is missing
  if (content.fields.type === undefined || content.fields.title === undefined) {
    return <></>;
  }

  // const { type, behaviour, theme, size, icon, url, title } = content.fields;

  let buttonType: string | null = null;
  let onboardingAccountType: btnOnboardingAccountTypes = "demo";

  switch (type) {
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
          theme={theme}
          account={onboardingAccountType}
          icon={icon}
          debug={debug}
          className="pb-10"
        >
          {title}
        </OnboardingButton>
      )}

      {/* Anchor Button */}
      {buttonType === "Anchor" && url && (
        <Button
          size={size}
          theme={theme}
          url={url}
          icon={icon}
          behaviour={behaviour}
          debug={debug}
        >
          {title}
        </Button>
      )}

      {/* QR Code for Mobile Trading Card. Not currently styleable via contentful */}
      {buttonType === "App QR Code" && <MobileQRCodeButton />}
    </>
  );
};

export default nButton;
