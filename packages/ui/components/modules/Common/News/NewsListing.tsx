import React from "react";
import PropTypes from "prop-types";
import constants, { getHtmlLang } from "@/helpers/constants";
import { dateConverter } from "@/helpers/utils";
import Link from "next/link";
import Image from "next/image";

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

const NewsListing = ({ article }: { article: Article }) => {
  const articleDate = (article: Article) => {
    return dateConverter(article.date_of_news);
  };

  const articleImg = (article: Article) => {
    return `${constants.endpoints.news.images}${article.Images[0].filename}`;
  };

  const articleAuthor = (article: Article) => {
    return `${article.User.name.split(" ")[0].slice(0, 1)}. ${
      article.User.name.split(" ")[1]
    }`;
  };

  const articleLink = (article: Article) => {
    return `/${getHtmlLang()}${article.url}`;
  };

  return (
    <a className="no-underline" href={articleLink(article)} key={article.url}>
      {/* Temporarily set to unoptimised because we can't compress bakery images currently */}
      <Image
        className="mb-10 max-h-52 w-full object-cover object-top lg:max-h-80 lg:min-h-[300px] lg:rounded-lg"
        src={articleImg(article)}
        alt={article?.Image?.cleanname}
        width="533"
        height="311"
        unoptimized={true}
      />
      <small className="mb-2 text-xs uppercase">{article.topic}</small>
      <h3 className="mb-2 text-xl font-semibold">{article.title}</h3>
      <p className="mb-6 text-base">{article.summary}</p>
      <small className="text-xs">
        {articleAuthor(article)} - {articleDate(article).toString()}
      </small>
    </a>
  );
};

NewsListing.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsListing;
