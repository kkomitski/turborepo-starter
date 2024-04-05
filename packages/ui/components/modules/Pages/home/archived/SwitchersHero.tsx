import RightArrowSVG from "@/components/svg/RightArrowSVG";
import TrustpilotWidgetMicro from "@/components/widgets/TrustpilotWidgetMicro";
import Image from "next/image";
import Link from "next/link";
import HeroAccoladesSectionA from "../../../Common/Hero/Common/HeroAccoladesSectionA";

const SwitchersHero = () => {
  return (
    <>
      <section className="relative">
        <Image
          className="absolute h-full w-full object-cover"
          src="https://assets.cmcmarkets.com/earhart/switchers/switchers-homepage-1-compressed.webp"
          alt=""
          width={1920}
          height={1080}
        />
        <video
          className="absolute left-0 block h-full w-full overflow-hidden object-cover"
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
        >
          <source src="https://assets.cmcmarkets.com/earhart/switchers/switchers-homepage-2.webm" />
          <source src="https://assets.cmcmarkets.com/earhart/switchers/switchers-homepage-2.mp4" />
        </video>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full md:w-1/2 md:border-r md:border-r-white/50 md:bg-black/20 md:backdrop-blur-3xl"></div>
          <div className="absolute right-0 top-0 hidden h-full w-full md:block md:w-1/2">
            <div className="z-2 relative flex h-full w-full flex-col items-center justify-center md:pt-[156px]"></div>
          </div>
          <div className="main-xl-container mx-auto bg-black/20 py-10 backdrop-blur-3xl md:border-none md:bg-transparent md:py-20 md:backdrop-blur-none xl:px-20">
            <div className="relative flex w-full flex-col md:flex-row">
              <div className="relative my-4 flex w-full flex-shrink-0 flex-col flex-wrap md:mx-auto md:my-0 md:flex-row md:items-center">
                <div className="flex w-full flex-col text-white md:mb-0 md:w-5/12">
                  <div className="mb-2">
                    <h1 className="-ml-4 mb-6 border-l-8 border-l-azure-100 pl-4 text-[48px] leading-tight md:-mr-5 md:ml-0 md:pl-6 md:pr-0 md:text-5xl lg:text-[64px]">
                      <span className="block">Spread your wings.</span>
                      <span className="block">Switch to CMC</span>
                    </h1>
                    <p className="mb-10 pl-3 text-xl md:mb-10 md:pl-9 xl:pr-8">
                      When you run into turbulence you need tools you can trust. Discover the award-winning
                      spread betting and CFD platform for active traders.<sup>1</sup>
                    </p>

                    <div className="mb-2 pl-3 md:mb-0 md:pl-9">
                      <Link href="/lp/switch" className="btn btn-white btn-with-icon stroke-navy-100">
                        <span>Find out more</span>
                        <RightArrowSVG />
                      </Link>
                    </div>

                    <div className="ml-3 flex flex-col gap-y-4 md:hidden">
                      <Link
                        data-label="Create Account"
                        href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb3&amp;iaid=null&amp;lsrc=1"
                        className="js-modal btn btn-azure"
                        data-url="/en-gb/onboarding"
                        data-function="live"
                      >
                        Open a demo account
                      </Link>
                      <TrustpilotWidgetMicro theme="dark" className="-ml-7" />
                    </div>
                  </div>

                  <div className="mb-6 hidden pl-9 md:block">
                    <Link
                      data-label="Create Account"
                      href="https://signup.cmcmarkets.com/#/emailRegistration?jid=gb3&amp;iaid=null&amp;lsrc=1"
                      className="js-modal btn btn-azure"
                      data-url="/en-gb/onboarding"
                      data-function="live"
                    >
                      Open a demo account
                    </Link>
                  </div>

                  <div className="-ml-7 mb-4 hidden pl-9 md:mb-0 md:block">
                    <TrustpilotWidgetMicro theme="dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-2 relative flex h-[300px] w-full items-center justify-center md:hidden">
            <div>
              <div className="flex flex-col">
                <Link href="/lp/switch" className="btn btn-white btn-with-icon stroke-navy-100">
                  <span>Discover more</span>
                  <RightArrowSVG />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroAccoladesSectionA fscsFootnote="2" />
    </>
  );
};

export default SwitchersHero;
