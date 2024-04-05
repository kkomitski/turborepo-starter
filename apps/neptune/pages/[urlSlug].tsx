// @ts-nocheck
import { HeadlessComponents } from "@/components/HeadlessComponents";
import { HeadlessData } from "@/components/HeadlessData";

export const getStaticPaths = async () => {
  // to be implemented

  const paths = [
    // { params: { urlSlug: "about-us" } },
    // { params: { urlSlug: "markets-indices" } },
  ];

  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps(context: any) {
  // console.log("context", context);
  let urlSlug = context.params?.urlSlug;

  if (typeof urlSlug === "undefined" || urlSlug === "") {
    return {
      notFound: true, // renders a 404 page in place
    };
  }

  // urlSlug = urlSlug[0];
  const page = await HeadlessData.getDynamicPageBySlug(urlSlug);
  if (typeof page?.slug === "undefined" || page.slug === "") {
    return {
      notFound: true, // renders a 404 page in place
    };
  } else {
    return {
      props: {
        page,
      },
      revalidate: 60,
    };
  }
}

export default function DynamicPage({ page }: { page: any }) {
  const metadata = {
    title: page.metaTitle,
    description: page.metaDescription,
  };
  return (
    <div className="headless-components">
      {HeadlessComponents.renderComponents(page.references, metadata)}
    </div>
  );
}
