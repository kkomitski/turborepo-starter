import constants from "@/helpers/constants";

type NewsArticleType =
  | "news"
  | "indices"
  | "forex"
  | "shares"
  | "commodities"
  | "etfs"
  | "bonds";

export const getNewsArticles = async (type: NewsArticleType = "news") => {
  const newsType = type;
  const regionCode = "en-gb";

  // Fetch data from an API
  const response = await fetch(
    `${constants.endpoints.news.cards}${newsType}_${regionCode}.json`
  );

  const allArticles = await response.json();
  const articles = allArticles.slice(0, 3);
  return articles;
};
