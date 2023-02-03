import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import { ArticlesList } from "../components/ArticlesList";
import { NotFoundPage } from "./NotFoundPage";
import axios from "axios";

export const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
  }, []);

  const params = useParams();
  const articleId = params.articleId;
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      <p>This article has {articleInfo.upvotes} upvote(s)</p>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>
  );
};
