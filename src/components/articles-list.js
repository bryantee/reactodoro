import React, { PropTypes } from 'react'
import Article from './article';

const ArticlesList = (props) => {
  let articles;
  if (props.articles) {
    articles = props.articles.map((article, index) => {
    return <Article key={index} data={article} />;
    });
  }
  return (
    <div>
      {articles}
    </div>
  )
}

export default ArticlesList;
