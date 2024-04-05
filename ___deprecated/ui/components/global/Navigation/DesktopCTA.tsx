import OnboardingButton from "@/components/elements/OnboardingButton";
import { overrideOnboardingParams } from "@/helpers/utils";
import { useRouter } from "next/router";
const DesktopCTA = () => {
  const router = useRouter();
  const onboardingParams = overrideOnboardingParams(router.pathname);
  return (
    <div className="ml-auto hidden items-center gap-x-2 lg:ml-0 lg:flex">
      <a
        className="btn btn-primary-outline btn-with-icon px-4 py-2"
        href="https://platform.cmcmarkets.com/en-gb/"
      >
        Log in
      </a>
      <OnboardingButton className="px-4 py-2" account="live" variant="azure" params={onboardingParams}>
        Start trading
      </OnboardingButton>
    </div>
  );
};

export default DesktopCTA;
