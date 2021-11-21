import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Author from "./Author";
import Date from "./Date";
import Body from "./Body";
import MainImage from "./MainImage";
import { loadArticle } from "../application/loadArticle";
import * as ArticleModel from "../domain/article";

export default function Article() {
  const articleId = "db4930e9-7504-4d9d-ae6c-33facca754d1";
  const [article, setArticle] = useState(null);

  useEffect(() => {
    loadArticle(articleId).then(article => {
      setArticle(article);
    });
  }, []);

  return article ? (
    <article>
      <Heading config={ArticleModel.getHeading(article)} />
      <MainImage config={ArticleModel.getMainImage(article)} />
      <Author config={ArticleModel.getAuthor(article)} />
      <Date config={ArticleModel.getDate(article)} />
      <Body config={ArticleModel.getBody(article)} />
    </article>
  ) : (
    <p>Loading...</p>
  );
}
