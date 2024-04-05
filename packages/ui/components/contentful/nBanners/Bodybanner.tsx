import OnboardingButton from "@/components/elements/OnboardingButton";
import Image from "next/image";
import ComponentDebugger from "../debug/ComponentDebugger";
import { awsImage } from "@/helpers/constants";
import { cn } from "@/lib/utils-shadcn";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ContentfulLink from "../elements/ContentfulLink";

const Bodybanner = ({ content, debug }: { content: any; debug: any }) => {
  const defaultTitle = "Ready to get started?";
  const defaultMediumHeader = "SPREAD BETTING & CFD TRADING";
  const defaultDescription = (
    <>Start trading with a live account or try a demo with £10,000 of virtual funds.</>
  );
  const defaultPlatformImg = awsImage("ready-to-start-trading-img-2.png");
  const defaultMobilePlatformImg = awsImage("ready-to-start-trading-img-mob-2.png");
  const defaultBgImg = awsImage("ready-to-find-your-flow-bg.png");
  const defaultMobileBgImg = awsImage("ready-to-find-your-flow-bg-mob.png");

  return (
    <section className="Module">
      <div className="relative overflow-hidden bg-white text-navy-100">
        <ComponentDebugger debug={debug} content={content} />

        {/* <picture>
          <source
            media="(max-width: 767px)"
            srcSet={mobileBgImg || defaultMobileBgImg}
          />
          <img
            className={cn(
              "absolute left-0 top-0 h-[200px] w-full border-b-[16px] border-b-azure-100 object-cover object-top lg:h-[25vw] lg:max-h-[600px]",
              bgClassNames
            )}
            src={bgImg || defaultBgImg}
            alt=""
          />
        </picture>

        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={mobilePlatformImg ?? defaultMobilePlatformImg}
          />
          <img
            className={cn(
              "relative left-2/4 mx-auto h-auto w-[230vw] max-w-none -translate-x-1/2 object-contain object-center pt-[88px] drop-shadow-2xl md:max-h-[750px] md:w-[156vw] lg:pt-20",
              platformClassNames
            )}
            src={platformImg ?? defaultPlatformImg}
            height="750"
            loading="lazy"
            alt=""
          />
        </picture> */}

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-full"></div>
          <div className="main-xl-container relative py-16 md:pb-20 md:pt-[72px]">
            <div className="flex flex-col items-center">
              <Image
                className="mb-4 drop-shadow-lg"
                src={awsImage("cmc-logo-navy-square.png")}
                alt=""
                width={100}
                height={101}
              />
              <p className="mb-8">
                <small className="text-sm uppercase">
                  {content.fields.mediumHeader || defaultMediumHeader}
                </small>
              </p>
              <h2 className="lg:headline-lg mb-4 text-center text-[36px]">
                {content.fields.title || defaultTitle}
              </h2>
              <div className="mb-10 text-center text-xl md:text-left">
                {content.fields.description
                  ? documentToReactComponents(content.fields.description, {})
                  : defaultDescription}
              </div>
              {/* CTA Buttons */}
              {content.fields.features && (
                <div className="flex flex-col gap-2 md:flex-row">
                  {content.fields.features.map((feature: any, index: number) => (
                    <ContentfulLink
                      key={index}
                      theme={feature.fields.buttonTheme}
                      type={feature.fields.type}
                      url={feature.fields.linkUrl}
                    >
                      {feature.fields.title}
                    </ContentfulLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bodybanner;
