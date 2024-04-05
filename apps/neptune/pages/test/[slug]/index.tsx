// @ts-nocheck

export function getStaticPaths() {
  const slugsWithPageAmount = [
    { params: { slug: "category", page: "1" } },
    { params: { slug: "otherCategory", page: "1" } },
    { params: { slug: "otherCategory", page: "2" } },
    { params: { slug: "yetAnotherCategory", page: "1" } },
  ];

  // Contentful fetch

  // TypeScript helps to specify the required data structure
  const paths: { params: { slug: string; page: string } }[] = [];

  for (let item of slugsWithPageAmount) {
    for (let page = 1; page <= item.pageAmount; page++) {
      paths.push({
        params: {
          slug: item.slug,
          page: page.toString(),
        },
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
}
