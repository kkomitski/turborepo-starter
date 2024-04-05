// @ts-nocheck
import React from "react";

export function getStaticProps(context: any) {
  const { slug, page } = context.params;

  // console.log(slug);

  // Bakery fetch

  return {
    props: {
      slug,
      page,
    },
  };
}

const Page = (props: Props) => {
  console.log(props);

  return <div>Page</div>;
};

export default Page;
