import Head from "next/head";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Menubar from "./Menubar";

// info on page level layouts
// https://nextjs.org/docs/basic-features/layouts

export default function Layout({ children }) {
  useEffect(() => {
    if (document && process.env.ENV !== "LOCAL") {
      // mparticleInitialise();
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          version={
            (process.env.VERSION || "-") + " (" + process.env.BUILD_ID + ")"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Menubar />
        {children}
        <Footer />
      </main>
    </>
  );
}
