// this is a custom document
// to be able to add external css files
// if you dont need it just delete the file

import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Favicons from "@/components/_unused/global/Head/Favicons";
import SocialMetaTags from "@/components/_unused/global/Head/SocialMetaTags";
import { getHtmlLang, getLanguage, getRegion } from "@/helpers/constants";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={`${getHtmlLang()}`}>
        <Head>
          {/* Favicons */}
          <Favicons />

          {/* e.g. Twitter cards, Opengraph */}
          <SocialMetaTags />

          <input type="hidden" id="websiteUrl" value="en-gb"></input>

          {/* Global Scripts (e.g. OneTrust, mParticle, App Links, Convert AB) */}
          {process.env.ENV === "DEV" && (
            <>
              <meta
                name="onetrust-key"
                data-key="3b7fc5b8-8e2b-4f50-88a1-77be424cb1fa-test"
              />

              <meta
                name="mparticle-key"
                data-key="2a08c1fe05723347b37e0b7a853e0572"
                data-plan_id="html_web_onboarding_mobile_apps"
                data-instance_name="default_instance"
              />
            </>
          )}

          {(process.env.ENV === "PREVIEW" || process.env.ENV === "LIVE") && (
            <>
              <meta
                name="onetrust-key"
                data-key="3b7fc5b8-8e2b-4f50-88a1-77be424cb1fa"
              />

              <meta
                name="mparticle-key"
                data-key="2a08c1fe05723347b37e0b7a853e0572"
                data-plan_id="html_web_onboarding_mobile_apps"
                data-instance_name="default_instance"
              />
            </>
          )}

          <Script
            src="https://assets.cmcmarkets.com/cookies/latest/cookies.js"
            strategy="beforeInteractive"
            id="cookies"
            data-language="en"
            data-region="gb"
            defer={false}
            type="module"
          />
        </Head>

        <body
          className="mx-auto max-w-[2560px] text-navy-100 dark:bg-navy-100 dark:text-white"
          data-region={getRegion()}
          data-language={getLanguage()}
        >
          <Main />
          <NextScript />

          {/* Trustpilot */}
          <Script
            type="text/javascript"
            src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
            strategy="lazyOnload"
            async
          ></Script>

          {/* Onboarding Script */}
          <iframe
            data-ot-ignore
            className="onboarding-iframe hide fixed top-0 left-0 bottom-0 right-0 z-[999999] m-0 h-full w-full overflow-hidden border-none p-0"
            src=""
          >
            Your browser doesnt support iframes
          </iframe>

          <Script
            src="https://assets.cmcmarkets.com/neptune/onboarding-nextjs.min.js"
            strategy="beforeInteractive"
            defer={true}
          />
        </body>
      </Html>
    );
  }
}
