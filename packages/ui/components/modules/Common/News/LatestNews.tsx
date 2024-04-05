import React from "react";
import NewsListing from "./NewsListing";

interface Article {
  topic: string;
  title: string;
  date_of_news: string;
  summary: string;
  url: string;
  User: {
    name: string;
  };
  Image: {
    cleanname: string;
  };
  Images: {
    filename: string;
  }[];
}

const LatestNews = (props: any) => {
  return (
    <>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {props.posts &&
          props.posts.length > 0 &&
          props.posts.map((article: Article) => (
            <NewsListing key={article.url} article={article} />
          ))}
      </div>
    </>
  );
};

export default LatestNews;
