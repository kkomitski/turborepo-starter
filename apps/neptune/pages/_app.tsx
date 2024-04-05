import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/_unused/global/Layout";
import "ui/styles/style.scss";
//import { redirect } from 'next/navigation';
import { getDesktopOS, getDeviceType, getMobileOS } from "@/helpers/utils";

import Router from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // if (
  //   process.env.ENV === "LOCAL" &&
  //   router.asPath === "/" /* ADD: and local env */
  // ) {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   useEffect(() => {
  //     router.push("/");
  //   }, []);
  // }

  const isLive = process.env.ENV === "LIVE";

  useEffect(() => {
    document.body.classList.add("js-enable", getDeviceType(), getMobileOS()); // use for styling
    const desktopOS = getDesktopOS();
    if (desktopOS !== null) {
      document.body.classList.add(desktopOS);
    }

    const emitRouteChangeEvent = (url: string) => {
      const event = new CustomEvent("routeChange", {
        detail: { url },
      });
      window.dispatchEvent(event);
    };

    // Listen for route changes
    Router.events.on("routeChangeComplete", emitRouteChangeEvent);

    // Cleanup function
    return () => {
      Router.events.off("routeChangeComplete", emitRouteChangeEvent);
    };
  }, [router.asPath]);

  return (
    <Layout>
      <ContentfulLivePreviewProvider
        locale="en-GB"
        enableInspectorMode={!isLive}
        enableLiveUpdates={!isLive}
        debugMode={!isLive}
      >
        <Component {...pageProps} />
      </ContentfulLivePreviewProvider>
    </Layout>
  );
}
