import React, { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";

import "./Article.css";

import Heading from "../Heading/Heading";
import Author from "../Author/Author";
import Date from "../Date/Date";
import Body from "../Body/Body";
import MainImage from "../MainImage/MainImage";

import { loadArticle } from "../../application/loadArticle";
import * as ArticleModel from "../../domain/article";

// Should be passed down as prop
const articleId = "db4930e9-7504-4d9d-ae6c-33facca754d1";

export default function Article() {
  const [article, setArticle] = useState(null);
  const handleError = useErrorHandler();

  const headingConfig = ArticleModel.getHeading(article);
  const authorConfig = ArticleModel.getAuthor(article);
  const dateConfig = ArticleModel.getDate(article);
  const mainImageConfig = ArticleModel.getMainImage(article);
  const bodyConfig = ArticleModel.getBody(article);

  useEffect(() => {
    loadArticle(articleId)
      .then(article => {
        setArticle(article);
      })
      .catch(() => handleError(new Error("Failed to load article")));
  }, [handleError]);

  return article ? (
    <article className="article">
      <header className="article__header article-header">
        <div className="article-header__title">
          {headingConfig ? <Heading config={headingConfig} /> : null}
        </div>
        <div className="article-header__meta">
          {authorConfig ? <Author config={authorConfig} /> : null}
          {authorConfig && dateConfig ? " | " : null}
          {dateConfig ? <Date config={dateConfig} /> : null}
        </div>
      </header>
      <section className="article__main-image">
        {mainImageConfig ? <MainImage config={mainImageConfig} /> : null}
      </section>
      <hr />
      <section className="article__body">
        {bodyConfig ? <Body config={ArticleModel.getBody(article)} /> : null}
      </section>
    </article>
  ) : (
    <div className="loader">
      <p>Loading...</p>
    </div>
  );
}
