import Head from "next/head";
import ComponentResolver from "./contentful/ComponentResolver";

type Metadata = {
  title: string;
  description: string;
};

export class HeadlessComponents {
  static renderComponents(components: any, metadata: Metadata) {
    if (typeof components === "undefined") {
      console.error("Components are undefined.");
      return <></>;
    }

    return (
      <>
        {/* Head */}
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>

        {/* Body */}
        {components.map((item: any, index: number) => {
          // If the linked item was removed, return a message
          if (typeof item.sys.contentType === "undefined") {
            return <div key={index}>Linked item was removed.</div>;
          }

          return (
            <div key={index}>
              <ComponentResolver
                debug={{
                  contentfulContentTypeId: item.sys.contentType.sys.id,
                  contentfulId: item.sys.id,
                }}
                key={index}
                content={item}
              />
            </div>
          );
        })}
      </>
    );
  }
}
