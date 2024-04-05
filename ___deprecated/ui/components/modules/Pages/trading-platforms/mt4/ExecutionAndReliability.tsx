import OnboardingButton from "@/components/elements/OnboardingButton";
import Lines from "@/components/global/Misc/Lines";
import IOSIconSVG from "@/components/svg/IOSIconSVG";
import MacOSIconSVG from "@/components/svg/MacOSIconSVG";
import PlayStoreSVG from "@/components/svg/PlayStoreSVG";
import WindowsIconSVG from "@/components/svg/WindowsIconSVG";
import usePlatformDetector, {
  OperatingSystem,
} from "@/hooks/usePlatformDetector";
;

const ExecutionAndReliability = () => {
  const operatingSystem: OperatingSystem = usePlatformDetector();

  return (
    <section className="relative">
      <Lines left />
      <div className="main-xl-container">
        <div className="flex flex-wrap gap-x-20 lg:flex-nowrap">
          <div className="lg:w-5/12">
            <h2 className="headline-lg relative -ml-6 mb-6 border-l-8 border-black pl-4">
              Superior execution{" "}
              <span className="lg:block"> and reliability</span>
            </h2>
            <p className="mb-20 text-xl">
              Our pioneering technology and experienced customer service,
              alongside the renowned MT4 platform, provides the ideal
              combination for serious traders.
            </p>
            <div className="mb-20 flex flex-col lg:mb-0">
              <OnboardingButton
                params="jid=gb2&amp;lsrc=1"
                variant="azure"
                className="mb-2"
                account="demo"
              >
                <span>Open a demo account</span>
              </OnboardingButton>
              <div>
                {operatingSystem === "Windows" && (
                  <a
                    className="btn btn-primary-outline btn-with-icon fill-navy-100 stroke-white font-semibold hover:stroke-azure-20"
                    href="https://assets.cmcmarkets.com/files/mt4setup.exe"
                  >
                    <span>Download MT4</span>
                    <WindowsIconSVG className="fill-navy-100" />
                  </a>
                )}
                {operatingSystem === "Mac" && (
                  <a
                    className="btn btn-primary-outline btn-with-icon font-semibold"
                    href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/MetaTrader4.dmg"
                  >
                    <span>Download MT4</span>
                    <MacOSIconSVG className="fill-navy-100" />
                  </a>
                )}
                {operatingSystem === "iOS" && (
                  <a
                    className="btn btn-primary-outline btn-with-icon font-semibold"
                    rel="nofollow"
                    href="https://apps.apple.com/us/app/metatrader-4/id496212596"
                  >
                    <span>Download MT4</span>
                    <IOSIconSVG className="fill-navy-100" />
                  </a>
                )}
                {operatingSystem === "Android" && (
                  <a
                    className="btn btn-primary-outline btn-with-icon font-semibold"
                    rel="nofollow"
                    href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4"
                  >
                    <span>Download MT4</span>
                    <PlayStoreSVG className="h-3.5 w-3.5 stroke-navy-100" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="lg:w-7/12">
            <div className="flex flex-col gap-x-8 border-y border-navy-100 px-4 pb-8 pt-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:w-4/12 mb-4 lg:mb-0">
                <p className="mb-0 text-5xl leading-none">100%</p>
                <p>Automated execution</p>
              </div>
              <p className="mb-8 lg:mb-0 lg:flex-1">
                You can be sure your trades will be filled without any dealer
                intervention.
              </p>
            </div>
            <div className="flex flex-col gap-x-8 border-b border-navy-100 px-4 pb-8 pt-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:w-4/12 mb-4 lg:mb-0">
                <p className="mb-0 text-5xl leading-none">99.9%</p>
                <p>
                  Fill rate<sup>3</sup>
                </p>
              </div>
              <p className="mb-8 flex-1 lg:mb-0">
                We fulfil your order without off-quotes, and wherever possible
                at the price you see.
              </p>
            </div>
            <div className="flex flex-col gap-x-8 px-4 pt-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:w-4/12 mb-4 lg:mb-0">
                <p className="mb-0 text-5xl leading-none">99.95%+</p>
                <p>
                  Platform stability<sup>3</sup>
                </p>
              </div>
              <p className="mb-8 flex-1 lg:mb-0">
                We consistently achieve almost 100% core platform uptime, so you
                can focus on your trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionAndReliability;
