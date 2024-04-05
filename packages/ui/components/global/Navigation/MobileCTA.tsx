import OnboardingButton from "../../../components/elements/OnboardingButton";
import { overrideOnboardingParams } from "@/helpers/utils";
import { useRouter } from "next/router";
import React from "react";

const MobileCTA = () => {
  const router = useRouter();
  const onboardingParams = overrideOnboardingParams(router.pathname);

  return (
    <div className="ml-auto flex items-center gap-x-2 lg:ml-0 lg:hidden">
      <a
        className="btn btn-primary-outline btn-with-icon px-4 py-2"
        href="https://platform.cmcmarkets.com/en-gb/"
      >
        Log in
      </a>
      <OnboardingButton
        account="live"
        variant="azure"
        params={onboardingParams}
        className="px-4 py-2"
      >
        <span className="hidden lg:inline">Start trading</span>
        <span className="inline lg:hidden">Trade</span>
      </OnboardingButton>
    </div>
  );
};

export default MobileCTA;
